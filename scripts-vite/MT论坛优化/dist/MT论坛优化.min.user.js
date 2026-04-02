// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.4.2
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.13/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.4/dist/index.umd.min.js
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

(function (x, q, we, oe, de, Ne) {
  'use strict';

  const d=new Set;const Fe = async t=>{d.has(t)||(d.add(t),(a=>{function r(n){if(typeof GM_addStyle=="function")return GM_addStyle(n);const e=document.createElement("style");if(e.setAttribute("type","text/css"),e.setAttribute("data-type","gm-css"),globalThis.trustedTypes){const c=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:i=>i});e.innerHTML=c.createHTML(n);}else e.innerHTML=n;return (document.head||document.documentElement).appendChild(e),e}r(a);})(t));};

  var Se=typeof GM<"u"?GM:void 0,qe=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ie=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ne=typeof GM_getValue<"u"?GM_getValue:void 0,re=typeof GM_info<"u"?GM_info:void 0,pe=typeof GM_listValues<"u"?GM_listValues:void 0,Pe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,He=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,J=typeof GM_setValue<"u"?GM_setValue:void 0,Ee=typeof GM_setValues<"u"?GM_setValues:void 0,ze=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ge=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,U=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ke=window;const Ve={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},ie={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},Q={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&q.waitNodeList(t).then(n=>{n.forEach(a=>a.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),q.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),j(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof Ie=="function"?Ie(e.keyName):null;return typeof t=="string"&&t?j(t):Q.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{q.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(a){navigator.clipboard.readText().then(i=>{a(i);}).catch(i=>{b.error("读取剪贴板内容失败👉",i),a("");});}function t(a){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(a);}).catch(i=>{b.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),e(a);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!n()){a("");return}document.hasFocus()?t(a):window.addEventListener("focus",()=>{t(a);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let a,i=n-t,o=t,r=async s=>{const l=await e(s);if(typeof l=="boolean"&&l||s){f.workerClearTimeout(a);return}if(o+=t,o>i){r(true);return}a=f.workerSetTimeout(()=>{r(false);},t);};r(false);},findParentNode(e,t,n){if(n){let a=q.closest(e,n);if(a)return a.querySelector(t)}else return q.matches(e,t)?e:q.closest(e,t)},toStr(e,t=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(e,(i,o)=>o===void 0?n:o,t).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof U=="object"&&U!=null?U:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();const t=function(n){return n<10?`0${n}`:n};if(e<60)return `0:${t(e)}`;if(e>=60&&e<3600){const n=Math.floor(e/60),a=e%60;return `${n}:${t(a)}`}else {const n=Math.floor(e/3600),a=Math.floor(e/60)%60,i=e%60;return `${n}:${t(a)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e=="number"&&e<1e12){const s=String(Date.now()).length-String(e).length;e=e*Math.pow(10,s);}let n=e,a=new Date(typeof e=="string"?e.replace(/-/g,"/"):e),o=new Date(t??Date.now()).getTime()-a.getTime(),r=Math.floor(o/(24*3600*1e3));if(r>0)r>7?n=f.formatTime(a.getTime()):n=r+"天前";else {let s=o%864e5,l=Math.floor(s/(3600*1e3));if(l>0)n=l+"小时前";else {let u=s%36e5,p=Math.floor(u/(60*1e3));if(p>0)n=p+"分钟前";else {let h=u%6e4;n=Math.round(h/1e3)+"秒前";}}}return n}},f=oe.noConflict(),c=q.noConflict(),M=we,b=new f.Log(re,U.console||Ke.console),ye=re?.script?.name||void 0,Qe=we.fn.Utils.AnyTouch();b.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Oe=()=>{const t=we.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=f.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,t,n)};x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?b.warn(n):t==="error"?b.error(n):b.info(n),false},get position(){return k.getValue(ie.qmsg_config_position.key,ie.qmsg_config_position.defaultValue)},get maxNums(){return k.getValue(ie.qmsg_config_maxnums.key,ie.qmsg_config_maxnums.defaultValue)},get showReverse(){return k.getValue(ie.qmsg_config_showreverse.key,ie.qmsg_config_showreverse.defaultValue)},get zIndex(){return Oe()}});M.GlobalConfig.setGlobalConfig({zIndex:()=>Oe(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ce=new f.GM_Menu({GM_getValue:ne,GM_setValue:J,GM_registerMenuCommand:Pe,GM_unregisterMenuCommand:ze}),H=new f.Httpx({xmlHttpRequest:Ge,logDetails:false});H.interceptors.request.use(e=>e);H.interceptors.response.use(e=>e,e=>(b.error("[Httpx-HttpxRequest.response] 响应错误",{data:e}),e.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),e));U.Object.defineProperty,U.Object.keys,U.Object.values,U.Function.prototype.apply,U.Function.prototype.call,U.Element.prototype.appendChild,U.setTimeout.bind(U),U.clearTimeout.bind(U),U.setInterval.bind(U),U.clearInterval.bind(U);const j=c.addStyle.bind(c);Q.addBlockCSS.bind(Q);const K=q.selector.bind(q),N=q.selectorAll.bind(q);new f.GM_Cookie;const fe="GM_Panel",ve="data-init",X="data-key",ee="data-default-value",We="data-init-more-value",Be="data-plugin-search-config",D="data-storage-api",W={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},G={setting:{get width(){return W.width<550?"88vw":W.width<700?"550px":"700px"},get height(){return W.height<450?"70vh":W.height<550?"450px":"550px"}},settingMiddle:{get width(){return W.width<350?"88vw":"350px"}},settingBig:{get width(){return W.width<800?"92vw":"800px"},get height(){return W.height<600?"80vh":"600px"}},info:{get width(){return W.width<350?"88vw":"350px"},get height(){return W.height<250?"88vh":"250px"}}},me={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new f.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(o,r)=>{typeof r!="string"&&(r=Q.toStr(r));const s=new Blob([r]),l=globalThis.URL.createObjectURL(s);c.createElement("a",{href:l,download:o}).click(),f.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(l);},500);},a=()=>{const o=h=>{const d=M.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(C,I){C.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),w=d.$shadowRoot.querySelector(".btn-control[data-mode='local']"),m=d.$shadowRoot.querySelector(".btn-control[data-mode='network']"),g=d.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),y=async C=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof pe=="function"?typeof le=="function"?(pe().forEach(A=>{le(A);}),x.success("已清空脚本存储的配置")):x.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):x.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof Ee=="function"?Ee(C):Object.keys(C).forEach(A=>{const S=C[A];J(A,S);}),x.success("配置导入完毕");},v=C=>new Promise(async I=>{const T=f.toJSON(C);Object.keys(T).length===0?x.warning("解析为空配置，不导入"):await y(T),I(true);});c.on(w,"click",C=>{c.preventEvent(C),d.close();const I=c.createElement("input",{type:"file",accept:".json"});c.on(I,["propertychange","input"],T=>{if(!I.files?.length)return;const A=I.files[0],S=new FileReader;S.onload=()=>{v(S.result);},S.readAsText(A,"UTF-8");}),I.click();}),c.on(m,"click",C=>{c.preventEvent(C),d.close();const I=M.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(S,O){S.close();}},ok:{text:"导入",callback:async(S,O)=>{const L=S.text;if(f.isNull(L)){x.error("请填入完整的url");return}const E=x.loading("正在获取配置..."),V=await H.get(L,{allowInterceptConfig:false});if(E.close(),!V.status){b.error(V),x.error("获取配置失败",{consoleLogContent:true});return}await v(V.data.responseText)&&S.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:G.info.width,height:"auto"}),T=I.$shadowRoot.querySelector("input"),A=I.$shadowRoot.querySelector(".pops-prompt-btn-ok");c.on(T,["input","propertychange"],S=>{c.val(T)===""?c.attr(A,"disabled","true"):c.removeAttr(A,"disabled");}),c.onKeyboard(T,"keydown",(S,O,L)=>{S==="Enter"&&L.length===0&&c.val(T)!==""&&c.emit(A,"click");}),c.emit(T,"input");}),c.on(g,"click",async C=>{c.preventEvent(C),d.close();let I=await Q.getClipboardText();if(I.trim()===""){x.warning("获取到的剪贴板内容为空");return}await v(I);});},r=(h=`${ye}_panel-setting-${f.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,d)=>{const w=M.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(y,v){y.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),m=w.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),g=w.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");c.on(m,"click",y=>{c.preventEvent(y);try{n(h,d),w.close();}catch(v){x.error(v.toString(),{consoleLogContent:true});}}),c.on(g,"click",async y=>{await f.copy(d)?(x.success("复制成功"),w.close()):x.error("复制失败");});},l=M.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(h,d){o();}},cancel:{enable:true,text:"导出",callback(h,d){r(void 0,p);}}},width:W.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),u={};if(typeof pe=="function")pe().forEach(d=>{const w=ne(d);Reflect.set(u,d,w);});else {x.warning("不支持函数GM_listValues，仅导出菜单配置");const h=ne(fe);Reflect.set(u,fe,h);}const p=Q.toStr(u);l.value=p;},i=()=>{let o=re?.script?.supportURL||re?.script?.namespace;typeof o=="string"&&f.isNotNull(o)&&window.open(o,"_blank");};return [{id:"script-version",title:`版本：${re?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(o){new Qe(o.$asideLiElement).on("tap",function(s){clearTimeout(t),t=void 0,e?(e=false,a()):(t=setTimeout(()=>{e=false,i();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},je={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{k.showPanel(me.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){Q.isTopWindow()&&ce.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(a=>a.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class Ye{storageKey;listenerData;cacheData;callbacks=[];constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new oe.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let t=this.callbacks.length-1;t>=0;t--){const n=this.callbacks[t];n(),this.callbacks.splice(t,1);}}getLocalValue(){if(this.cacheData==null){let t=ne(this.storageKey);t==null&&(t={},this.setLocalValue(t)),this.destory(),this.cacheData=t;const n=qe(this.storageKey,(a,i,o)=>{this.cacheData=null,this.cacheData=o;});return this.callbacks.push(()=>{He(n);}),t}else return this.cacheData}setLocalValue(t){this.cacheData=null,this.cacheData=t,J(this.storageKey,t);}set(t,n){const a=this.get(t),i=this.getLocalValue();Reflect.set(i,t,n),this.setLocalValue(i),this.emitValueChangeListener(t,n,a);}get(t,n){const a=this.getLocalValue();return Reflect.get(a,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),a=this.getLocalValue();Reflect.deleteProperty(a,t),this.setLocalValue(a),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){this.destory(),le(this.storageKey);}addValueChangeListener(t,n){const a=Math.random(),i=this.listenerData.get(t)||[];return i.push({id:a,key:t,callback:n}),this.listenerData.set(t,i),a}removeValueChangeListener(t){let n=false;for(const[a,i]of this.listenerData.entries()){for(let o=0;o<i.length;o++){const r=i[o];(typeof t=="string"&&r.key===t||typeof t=="number"&&r.id===t)&&(i.splice(o,1),o--,n=true);}this.listenerData.set(a,i);}return n}async emitValueChangeListener(...t){const[n,a,i]=t;if(!this.listenerData.has(n))return;const o=this.listenerData.get(n);for(let r=0;r<o.length;r++){const s=o[r];if(typeof s.callback=="function"){let l,u;t.length===1||(t.length===2?l=a:t.length===3&&(l=a,u=i)),await s.callback(n,l,u);}}}}const Z=new Ye(fe),k={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new f.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new f.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new f.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new f.Dictionary),this.__onceExecData},get scriptName(){return ye},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:fe,attributeKeyName:X,attributeDefaultValueName:ee},init(){this.initContentDefaultValue(),je.init();},initContentDefaultValue(){const e=a=>{if(!a.attributes||a.type==="button"||a.type==="container"||a.type==="deepMenu")return;const i=a.attributes,o=i[ve];if(typeof o=="function"){const u=o();if(typeof u=="boolean"&&!u)return}const r=new Map,s=i[X];if(s!=null){const u=i[ee];r.set(s,u);}const l=i[We];if(typeof l=="object"&&l&&Object.keys(l).forEach(u=>{const p=l[u];r.set(u,p);}),!r.size){b.warn("请先配置键",a);return}if(a.type==="switch"){const u=typeof a.disabled=="function"?a.disabled():a.disabled;typeof u=="boolean"&&u&&this.$data.contentConfigInitDisabledKeys.push(...r.keys());}for(const[u,p]of r.entries())this.setDefaultValue(u,p);},t=a=>{for(let i=0;i<a.length;i++){const o=a[i];e(o);const r=o.views;r&&Array.isArray(r)&&t(r);}},n=[...me.getAllContentConfig()];for(let a=0;a<n.length;a++){const i=n[a];if(!i.views)continue;const o=i.views;o&&Array.isArray(o)&&t(o);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&b.warn("该key已存在，初始化默认值失败: ",{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){Z.set(e,t);},getValue(e,t){const n=Z.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){Z.delete(e);},hasKey(e){return Z.has(e)},addValueChangeListener(e,t,n){const a=Z.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const i=this.getValue(e);n?.immediate?t(e,i,i):n?.immediateAll&&k.emitMenuValueChange(e,i,i);}return a},removeValueChangeListener(e){Z.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){Z.emitValueChangeListener(e,t,n);},async exec(e,t,n,a=true){const i=this;let o;typeof e=="string"||Array.isArray(e)?o=()=>e:o=e;let r=false;const s=o();let l=[];Array.isArray(s)?(r=true,l=s):l.push(s);const u=l.find(A=>!this.$data.contentConfigInitDefaultValue.has(A));if(u){b.warn(`${u} 键不存在`);return}const p=JSON.stringify(l);if(a&&this.$data.onceExecMenuData.has(p))return this.$data.onceExecMenuData.get(p);let h=[];const d=[];let w=[];const m=(A,S)=>{const O=[],L=[];let E=[];if(Array.isArray(S))E=E.concat(S);else {const R=B=>{if(typeof B=="object"&&B!=null)if(B instanceof Element)E.push(B);else {const{$css:P,destory:z}=B;P!=null&&(Array.isArray(P)?E=E.concat(P):E.push(P)),typeof z=="function"&&E.push(z);}else E.push(B);};if(S!=null&&Array.isArray(S))for(const B of S)R(B);else R(S);}const V=R=>{if(R!=null){if(R instanceof Element){O.push(R);return}if(typeof R=="function"){L.push(R);return}}};for(const R of E){const B=V(R);if(typeof B=="boolean"&&!B)break;if(Array.isArray(R))for(const P of R){const z=V(P);if(typeof z=="boolean"&&!z)break}}y(),v(),A&&(h=h.concat(O),w=w.concat(L));},g=A=>!!this.getValue(A),y=()=>{for(let A=0;A<h.length;A++)h[A]?.remove(),h.splice(A,1),A--;},v=()=>{for(let A=0;A<w.length;A++){const S=w[A];S(),w.splice(A,1),A--;}},C=()=>{let A=false;return typeof n=="function"?A=n(l):A=l.every(S=>g(S)),A},I=async A=>{const S=C();let O=[];if(S){const L=l.map(E=>this.getValue(E));O=await t({key:l,triggerKey:A?.key,value:r?L:L[0],addStoreValue:(...E)=>m(S,E)});}m(S,O);};a&&l.forEach(A=>{const S=this.addValueChangeListener(A,(O,L,E)=>I({key:O}));d.push(S);}),await I();const T={reload(){this.clearStoreStyleElements(),this.destory(),I();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>y(),destory(){return v()},removeValueChangeListener:()=>{d.forEach(A=>{this.removeValueChangeListener(A);});},clearOnceExecMenuData(){a&&i.$data.onceExecMenuData.delete(p);}};return this.$data.onceExecMenuData.set(p,T),T},async execMenu(e,t,n=false,a=false){return await this.exec(e,async i=>await t(i),i=>i.every(r=>{let s=!!this.getValue(r);return k.$data.contentConfigInitDisabledKeys.includes(r)&&(s=false,b.warn(`.execMenu${a?"Once":""} ${r} 被禁用`)),n&&(s=!s),s}),a)},async execMenuOnce(e,t,n=false,a=false){const i=await this.execMenu(e,t,n,true);if(a&&i){const o=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,o);}return i},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),Z.removeValueChangeListener(e)},onceExec(e,t,n=false){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(i=>{if(!!!k.getValue(i))return  true})!==-1||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${ye}-设置`,n=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];const i=e.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!n&&!i&&e.push(...me.getDefaultBottomContentConfig());const o=M.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:r=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:r=>{r(),this.$data.$panel=null;}},width:G.setting.width,height:G.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=o,this.$data.panelContent=e,a||this.registerConfigSearch({$panel:o,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,a=async(d,w)=>{if(d==null)return;const m=await w(d);return m&&typeof m.isFind=="boolean"&&m.isFind?m.data:await a(m.data,w)},i=(d,w)=>{const m=new IntersectionObserver(g=>{g.forEach(y=>{y.isIntersecting&&(w?.(),m.disconnect());});},{root:null,threshold:1});m.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},o=d=>{const w="pops-flashing";c.onAnimationend(d,()=>{d.classList.remove(w);}),d.classList.add(w);},r=d=>{if(d.type==="dblclick"&&h)return;c.preventEvent(d);const w=M.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:G.settingMiddle.width,height:"auto",drag:true,style:`
					${M.config.cssText.panelCSS}

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
				`});w.$shadowRoot.querySelector(".search-wrapper");const m=w.$shadowRoot.querySelector(".search-config-text"),g=w.$shadowRoot.querySelector(".search-result-wrapper");m.focus();const y=()=>{c.empty(g);},v=I=>{const T=f.queryProperty(I,O=>O?.next?{isFind:false,data:O.next}:{isFind:true,data:O}),A=c.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${T.matchedData?.path}</div>
							<div class="search-result-item-description">${T.matchedData?.description??""}</div>
						`}),S=M.fn.PanelHandlerComponents();return c.on(A,"click",()=>{const L=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[I.index];if(!L){x.error(`左侧项下标${I.index}不存在`);return}L.scrollIntoView({behavior:"smooth",block:"center"}),L.click(),a(I.next,async E=>{if(E?.next){const V=await c.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(R=>{const B=Reflect.get(R,S.$data.nodeStoreConfigKey);return typeof B=="object"&&B!=null&&B.text===E.name}),2500);if(V)V.click();else return x.error("未找到对应的二级菜单"),{isFind:true,data:E};return {isFind:false,data:E.next}}else {const V=await c.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(R=>Reflect.get(R,S.$data.nodeStoreConfigKey)===E.matchedData?.formConfig),2500);if(V){i(V);const R=V.closest(".pops-panel-forms-fold[data-fold-enable]");R&&(R.querySelector(".pops-panel-forms-fold-container").click(),await f.sleep(500)),i(V,()=>{o(V);});}else x.error("未找到对应的菜单项");return {isFind:true,data:E}}});}),A},C=I=>{const T=new RegExp(I,"i"),A=[],S=(L,E)=>{for(let V=0;V<L.length;V++){const R=L[V],B=R.views;if(B&&Array.isArray(B)){const P=f.deepClone(E);if(R.type==="deepMenu"){const z=f.queryProperty(P,ae=>ae?.next?{isFind:false,data:ae.next}:{isFind:true,data:ae});z.next={name:R.text};}S(B,P);}else {let P,z;if(R.type==="own"){let F=Reflect.get(R.attributes||{},Be);F&&(typeof F=="function"&&(F=F()),typeof F.text=="string"&&(P=F.text),typeof F.desc=="string"&&(z=F.desc));}else P=R.text,z=Reflect.get(R,"description");const ae=[P,z],Ae=ae.findIndex(F=>{if(typeof F=="string")return F.match(T)});if(Ae!==-1){const F=f.deepClone(E),Ce=f.queryProperty(F,Y=>Y?.next?{isFind:false,data:Y.next}:{isFind:true,data:Y});Ce.next={name:P,matchedData:{path:"",formConfig:R,matchedText:ae[Ae],description:z}};const ke=[];f.queryProperty(F,Y=>{const be=Y?.name;return typeof be=="string"&&be.trim()!==""&&ke.push(be),Y?.next?{isFind:false,data:Y.next}:{isFind:true,data:Y}});const $e=ke.join(Q.escapeHtml(" - "));Ce.next.matchedData.path=$e,A.push(F);}}}};for(let L=0;L<n.length;L++){const E=n[L];if(!E.views||E.isBottom&&E.id==="script-version")continue;const V=E.views;if(V&&Array.isArray(V)){let R=E.title;typeof R=="function"&&(R=R()),S(V,{index:L,name:R});}}const O=document.createDocumentFragment();for(const L of A){const E=v(L);O.appendChild(E);}y(),g.append(O);};c.on(m,"input",f.debounce(I=>{c.preventEvent(I);const T=c.val(m).trim();if(T===""){y();return}C(T);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(d=>{c.on(d,"dblclick",r);});const l=new WeakMap;let u=false,p,h=false;c.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,w)=>{h=true,clearTimeout(p),p=void 0,u&&l.has(w)?(u=false,l.delete(w),r(d)):(p=setTimeout(()=>{u=false;},200),u=true,l.set(w,d));},{capture:true}),t.$shadowRoot.appendChild(c.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e},getDynamicValue(e,t){const n=this;let a=false,i=t;const o=this.addValueChangeListener(e,(r,s)=>{i=s;});return {get value(){return a||(a=true,i=n.getValue(e,t)),i},destory(){n.removeValueChangeListener(o);}}}};Q.setGMResourceCSS(Ve.Viewer);Q.setGMResourceCSS(Ve.Hljs);M.GlobalConfig.setGlobalConfig({mask:{enable:true},drag:true});const Ze=()=>{const e="texttolink",t=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,n=function(m){let g=m.originalTarget??m.target,y;if(g!=null&&g.localName==="a"&&g.className.indexOf(e)!==-1&&(y=g.getAttribute("href"),typeof y=="string"&&y.indexOf("http")!==0&&y.indexOf("ed2k://")!==0&&y.indexOf("thunder://")!==0))return g.setAttribute("href","http://"+g)},a=function(m){if(typeof m!="object"||m==null)return;const g=m?.textContent,y=m?.parentNode;if(y!=null&&y?.className?.indexOf?.(e)===-1&&m.nodeName!=="#cdata-section"&&typeof g=="string"){const v=g.replace(t,`<a href="$1" target="_blank" class="${e}">$1</a>`);if(g.length!==v.length){const C=document.createElement("span");c.html(C,v);const I=C.querySelector("a"),T=I.href;return console.log(`识别: ${T}`),y.nodeName.toLowerCase()==="span"?y.replaceChild(I,m):y.replaceChild(C,m)}}},i="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),o=`//text()[not(ancestor::${i.join(") and not(ancestor::")})]`,r=new RegExp(`^(${i.join("|")})$`,"i"),s=function(m,g){let y,v;if(g+1e4<m.snapshotLength){let C=y=g;for(v=g+1e4;g<=v?y<=v:y>=v;C=g<=v?++y:--y)a(m.snapshotItem(C));setTimeout(function(){return s(m,g+1e4)},15);}else {let C;for(C=y=g,v=m.snapshotLength;g<=v?y<=v:y>=v;C=g<=v?++y:--y)a(m.snapshotItem(C));}},l=function(m){const g=document.evaluate(o,m,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return s(g,0)},u=function(m){for(const g=document.createTreeWalker(m,NodeFilter.SHOW_TEXT,{acceptNode:function(y){const v=y?.parentNode?.localName;return r.test(v)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});g.nextNode();)a(g.currentNode);};let p=new f.LockFunction(m=>{for(const g of m)if(g.type==="childList"){const y=g.addedNodes;for(let v=0;v<y.length;v++){const C=y[v];u(C);}}});const h=function(){return l(document.body),f.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:g=>{p.run(g);}})},d=function(m){const g=m.getAttribute("href");if(typeof g=="string"&&g.indexOf("http")!==0&&g.indexOf("ed2k://")!==0&&g.indexOf("thunder://")!==0)return m.setAttribute("href","http://"+g)},w=function(){const m=Array.from(document.getElementsByClassName(e));for(const g of m)d(g);};document.addEventListener("mouseover",n),setTimeout(w,1500),setTimeout(h,100);},ge={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g},$={getAvatar:(e,t="middle")=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=U.discuz_uid;if(typeof e=="string")return e;let t=K('.sidenv_exit a[href*="uid-"]')||K('#comiis_key a[href*="uid-"]');if(t){let n=t.href.match(/uid=([0-9]+)/);if(n)return n[n.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let a=0;a<e.length;a++){let o=e[a].value;if(o)return o}let t=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let a=0;a<t.length;a++){let o=t[a].href.match(ge.formhash);if(o){let r=o[o.length-1];if(r)return r}}let n=await H.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(n.status){let a=n.data.responseText,o=c.toElement(a,true,true).querySelector("input[name=formhash]");if(o){let r=o.value;if(f.isNotNull(r))return r}}else b.error("请求个人主页获取formhash失败",n);},envIsMobile(){return (U.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let n=t.filter(Boolean);return n[n.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},he={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let t=this.getSignInfo().find(n=>n.hostName===window.location.hostname);return t?f.formatTime(Date.now(),"yyyyMMdd")===f.formatTime(t.time,"yyyyMMdd"):false},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),n=t.findIndex(a=>a.hostName===e.hostName);n!==-1&&t.splice(n,1),t.push(e),J(this.$key.sign,t);},getSignInfo(){let e=ne(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(n=>n.hostName===e)},clearSignInfo(e){if(typeof e=="string"){let t=this.getSignInfo(),n=t.findIndex(a=>a.hostName===e);n!==-1&&t.splice(n,1),J(this.$key.sign,t);}else le(this.$key.sign);},checkLogin(){return $.envIsMobile()?!!K("a[href*='member.php?mod=logging&action=logout']"):!!K("#comiis_key")},async sign(){let e=await $.getFormHash();if(e==null){if(K("#comiis_picshowbox")){b.info("当前为评论区的看图模式 ");return}b.error("自动签到：获取账号formhash失败"),this.clearSignInfo(window.location.hostname),x.error({content:"自动签到：获取账号formhash失败"});return}if(this.checkSignInfo()){b.info("今日已签到");return}let t=!!k.getValue("mt-auto-sign-useFetch"),n=f.getRandomPCUA(),a=()=>{this.setSignInfo();},i=()=>{this.clearSignInfo(window.location.hostname);},o=s=>{let u=we.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");u.innerText=s;},r=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let s={operation:"qiandao",format:"button",formhash:e,inajax:1,ajaxtarget:"midaben_sign"},l=await H.get(`/k_misign-sign.html?${f.toSearchParamsStr(s)}`,{fetch:t,headers:{"User-Agent":n},allowInterceptConfig:false});if(!l.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}a(),b.info("签到信息：",l);let u=l.data.responseText,p=f.parseCDATA(u),h=c.toElement(`<div>${p}</div>`,true,false),d=c.text(h);if(d.includes("需要先登录")){x.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),i();return}else if(d.includes("请稍后再试")||d.includes("您已经被列入黑名单")||d.includes("绑定手机号后才可以签到")||d.includes("您所在用户组不允许使用")){x.error("签到："+d,{timeout:5e3});return}else if(d.includes("今日已签")||d.includes("今日已经签到")){x.info("签到："+d);return}else if(u.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){x.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(t&&"location"in f.toJSON(u)){x.success("签到: 签到成功");return}let w=h.querySelector(".con"),m=h.querySelector(".line");if(w&&m){let g=c.text(w).match(/([0-9]+)金币/),y=c.text(m).match(/([0-9]+)/),v=g[g.length-1],C=y[y.length-1];b.success(`金币${v}，排名${C}`),x.info(`
							<div style="display: flex;${$.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${C}<br>金币 ${v}</div>
							</div>`,{timeout:4e3,isHTML:true});return}o(u);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let s={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},l=await H.post(`/plugin.php?${f.toSearchParamsStr(s)}`,{data:{formhash:e,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:t,headers:{"User-Agent":n,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!l.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}a(),b.info("签到信息：",l);let u=l.data.responseText;if(u.includes("签到成功")){x.success("签到：签到成功");return}if(u.includes("今日已经签到")){x.info("签到：您今日已经签到，请明天再来！");return}o(u);}}];for(let s=0;s<r.length;s++){const l=r[s];let u=await H.get(l.checkPluginEnableUrl,{fetch:t,headers:{"User-Agent":f.getRandomPCUA()},allowInterceptConfig:false});if(!u.status){b.error("签到：检查签到插件是否启用的请求失败",u);continue}if(c.toElement(u.data.responseText,true,true).querySelector("#messagetext")||u.data.responseText.includes("插件不存在或已关闭")){b.error(`插件：${l.checkPluginEnableUrl} 未启用或不存在`);continue}await l.sign();break}}},se={isKMiSign(){return window.location.pathname.startsWith("/k_misign-sign.html")},isPost(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/thread-")||window.location.pathname.startsWith("/forum.php")&&e.has("mod","viewthread")},isPage(){return !!window.location.pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","guide")},isPlate(){return !!window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return window.location.pathname.startsWith("/search.php")},isSpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")},isMySpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","profile")&&e.has("mycenter")},isSpaceWithAt(){return window.location.pathname.startsWith("/space-uid-")},isForumList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("forumlist")},isMessage(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","notice")},isMessageList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","pm")},isPointsMall(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html")||window.location.pathname.startsWith("/plugin.php")&&e.has("id","keke_integralmal")},isPostPublish(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","post")},isPostPublish_voting(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("special","1")||e.has("fid","42")},isPostPublish_edit(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","edit")},isPostPublish_newthread(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","newthread")},isPostPublish_reply(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","reply")}},Je={init(){c.onReady(()=>{k.execMenuOnce("mt-forum-post-quickCollentBtn",()=>this.quickCollentBtn()),k.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>this.quickReplyOptimization());});},async quickCollentBtn(){b.info("【快捷收藏】");const e=await c.waitNode("#scrolltop",1e4);if(!e)return;let t=await $.getFormHash(),n=$.getThreadId(window.location.href),a=`/home.php?${f.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:n,formhash:t,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=c.createElement("span",{innerHTML:`
      <a href="${a}" 
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
    `),()=>{c.remove(i);}]},async quickReplyOptimization(){const e=await c.waitNode('#scrolltop a[title="快速回复"]',1e4);return e?(b.info("快捷回复优化"),c.on(e,"click",function(){U.showWindow("reply",e.href),b.info("等待弹窗出现"),c.waitNode("#moreconf",1e4).then(n=>{if(!n)return;b.success("弹出出现，添加按钮");let a=c.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});c.on(a,"click",i=>{c.preventEvent(i),c.val(K("#postmessage"),c.val(K("#postmessage"))+"           ");}),c.append(n,a);});}).off):void 0}},Xe=".pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size: 90px;width:var(--avatar-size);height:var(--avatar-size)}";Fe(Xe);const Ue={$flag:{isSetHljsCSS:false},init(){Je.init(),k.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),k.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),k.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),c.onReady(()=>{k.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),k.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),k.execMenuOnce("mt-forum-post-loadNextPageComment",()=>this.loadNextPageComment()),k.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>this.codeQuoteOptimization()),k.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>this.optimizationImagePreview()),k.execMenuOnce("mt-forum-post-interceptionAttachment",()=>this.setAttachmentsClickTip()),k.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),k.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return b.info("自动展开帖子内容"),[j(`
				div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{
					max-height:inherit!important;
					overflow-y:inherit!important;
					position:inherit!important
				}
        	`),Q.addBlockCSS(".comiis_lookfulltext_bg",".comiis_lookfulltext_key")]},repairImageWidth(){return b.info("修复图片宽度"),j(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let e=K(".comiis_a.comiis_message_table");e&&(b.info("移除帖子字体效果"),c.html(e,c.html(e).replace(ge.fontSpecial,"")));},removeCommentFontStyle(){b.info("移除评论区的字体效果");let e=N("font"),t=c.html(K(".comiis_postlist .comiis_postli"))||"";t!==""&&(e.forEach(n=>{t.includes(n.innerHTML)||(n.removeAttribute("color"),n.removeAttribute("style"),n.removeAttribute("size"));}),N(".comiis_message.message").forEach(n=>{if(t.includes(n.innerHTML)){c.html(n,c.html(n).replace(ge.fontSpecial,""));let a=c.next(n);a&&a.localName==="strike"&&(a.outerHTML=a.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),N(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(n=>{let a=n.parentElement;a&&a.localName==="strike"&&(a.outerHTML=a.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(b.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(N(".pgbtn").length==0){b.warn("没有找到下一页按钮");return}const e=async function(i){let o=await H.get(i,{fetch:true,allowInterceptConfig:false});if(!o.status){x.error("网络异常，请求下一页失败");return}const r=f.parseFromString(o.data.responseText),s=r.querySelector(".pgbtn a");return r.querySelector("#postlistreply")?.remove(),r.querySelector(".bm_h.comiis_snvbt")?.remove(),{url:s?s.getAttribute("href"):null,postlist:r.querySelector("#postlist"),pgbtn:r.querySelector(".pgbtn"),pgs:r.querySelector(".pgs.mtm")}},t=async function(){const i=K(".pgbtn a").getAttribute("href");if(i){let o=await e(i);o&&(o.postlist?.querySelector(".comiis_vrx")?.querySelector(".km1")&&(Object.keys(o).forEach(r=>{o[r]=null;}),b.warn("检测到请求的本页内容中存在【楼主】标识，判断为重复页请求")),(!o.url||o.url==i)&&(b.error("最后一页，取消监听"),c.off(document,["scroll","wheel"],n.run),c.remove(".pgbtn")),o.postlist&&c.append("#postlist",c.html(o.postlist)),o.pgbtn&&c.html(".pgbtn",c.html(o.pgbtn)),o.pgs&&c.html(".pgs.mtm",c.html(o.pgs)),Ue.init());}else b.error("获取下一页元素失败");};let n=new f.LockFunction(async()=>{f.isNearBottom()&&await t();});const a=c.on(document,["scroll","wheel"],n.run);return [()=>{a.off();}]},codeQuoteOptimization(){b.info("代码块优化");function e(a){const i=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],o=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],r=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system","interface","enum","annotation","volatile","native","strictfp","synchronized"],s=["void","boolean","byte","short","char","int","long","float","double","boolean\\[","byte\\[","short\\[","char\\[","int\\[","long\\[","float\\[","double\\["];return {aliases:["smali"],keywords:{keyword:r.join(" "),built_in:i.concat(o).join(" "),type:s.join(" ")},contains:[{className:"string",begin:'"',end:'"',relevance:0,contains:[a.BACKSLASH_ESCAPE,{className:"char.escape",begin:/\\[nrtbf]/,relevance:0}]},{className:"string",begin:"'",end:"'",relevance:0},a.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+r.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+i.join("|")+")\\s"},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+o.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{className:"function",begin:"\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*\\(",end:"\\s*\\)",excludeBegin:true,excludeEnd:true,relevance:0,contains:[{className:"params",begin:"\\S",endsWithParent:true,relevance:0}]},{className:"variable",begin:"[vp][0-9]+",relevance:0},{className:"number",variants:[{begin:"\\b-?0[xX][0-9a-fA-F]+[lL]?"},{begin:"\\b-?0[0-7]+[lL]?"},{begin:"\\b-?[0-9]+[lLfF]?"}],relevance:0},{className:"property",begin:"\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*->\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*",relevance:0}]}}de.registerLanguage("smali",e);let t=new f.LockFunction(()=>{function a(o,r="java"){o.oldValue||(o.oldValue=o.textContent),c.html(o,de.highlight(o.oldValue,{language:r}).value.replace(/\\n$/gi,""));}N("em[onclick^=copycode]").forEach(o=>{if(o.nextElementSibling&&typeof o.nextElementSibling.className=="string"&&o.nextElementSibling.className=="code-select-language")return;const r=c.text(o.parentElement.querySelector("div[id^=code]"));let s=de.highlightAuto(r).language;r.trim().startsWith("invoke-")&&(s="smali"),s&&!["bash","css","javascript","json","java","kotlin","python","smali","typescript"].includes(s)&&(s="plaintext");const l=c.createElement("select",{className:"code-select-language"});let u=de.listLanguages().sort();u=u.concat("自动检测");let p="";u.forEach(h=>{h.startsWith("自动检测")?p+=`<option data-value="${s}" selected="selected">${h}(${s})</option>`:p+=`<option data-value="${h}">${h}</option>`;}),c.html(l,p),c.on(l,"change",()=>{let h=l.selectedOptions[0].getAttribute("data-value");b.info("切换代码块语言: ",h),c.parent(l).querySelectorAll("li").forEach(d=>{a(d,h);});}),c.preventEvent(l,"click"),c.preventEvent(o,"click"),o.insertAdjacentElement("afterend",l),c.emit(l,"change");}),N(".blockcode").forEach(o=>o.className="hljs");},this,500);const n=f.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});return [j(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),()=>{n.disconnect();}]},optimizationImagePreview(){b.info("图片查看优化");const e=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function t(o=[],r=0){let s="";o.forEach(p=>{s+=`<li><img data-src="${p}"></li>`;});let l=c.createElement("ul",{innerHTML:s}),u=new Ne(l,{inline:false,url:"data-src",zIndex:f.getMaxZIndex()+100,hidden:()=>{u.destroy();}});u.view(r),u.zoomTo(1),u.show();}function n(){N("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(o=>{o.setAttribute("data-isHandlingViewIMG","true");let r=[];o.querySelectorAll("img").forEach(s=>{let l=s.getAttribute("file")||s.src;if(f.isNull(l))return;let u=new URL(l).hostname,p=new URL(l).pathname,h=s.parentElement;h.nodeName.toLowerCase()==="a"&&h.getAttribute("href")===l&&(h.setAttribute("href","javascript:;"),h.removeAttribute("target"));let d=false;for(let w of e)if(u.indexOf(w.hostName)!=-1&&p.match(w.pathName)){d=true;break}d||(r.push(l),s.removeAttribute("onclick"),s.setAttribute("onclick",""),c.on(s,"click",function(w){c.preventEvent(w),b.info("点击图片",s);let m=r.findIndex(g=>g==l);t(r,m);},{capture:true}));});});}let a=new f.LockFunction(()=>{n();});const i=f.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{a.run();}});return [()=>{i.disconnect();}]},setAttachmentsClickTip(){b.info("附件点击提醒");function e(n){if(n.hasAttribute("href")){let a=n.hasAttribute("id")?n.id:n.parentElement.id,i=n.getAttribute("href"),o=n.innerText;if(K(`#${a}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",n),console.log("该附件是金币附件，拦截！"),n.setAttribute("data-href",i),n.style.setProperty("cursor","pointer"),n.removeAttribute("href"),n.innerText="【已拦截】"+o,n.onclick=function(){M.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${o}</a> ？<br /><br />`,html:true},btn:{ok:{callback:s=>{window.open(i,"_blank"),s.close();}}},width:"400px",height:"200px"});};}}const t=f.mutationObserver(document.documentElement,{callback:()=>{N(".attnm a").forEach(n=>{e(n);}),N(".comiis_attach a").forEach(n=>{e(n);}),N("span[id*=attach_] a").forEach(n=>{e(n);});},immediate:true,config:{childList:true,subtree:true}});return [()=>{t.disconnect();}]},async detectingUserOnlineStatus(){b.info("探测用户在线状态"),k.onceExec("mt-forum-post-detectingUserOnlineStatus",()=>{j(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);});function e(a){return c.createElement("img",{className:"gm-user-status-icon",smilied:a?"1353":"1384",loading:"lazy",src:a?"data:image/png;base64,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":"data:image/png;base64,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"})}function t(a,i){let o=e(i);c.prepend(a,o);}let n=Array.from(N(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));for(let a=0;a<n.length;a++){const i=n[a];let o=i.querySelector(".comiis_o.cl a.kmfxx");if(!o){b.error("探测用户在线状态失败，未找到发消息按钮");return}i.setAttribute("data-is-detectingUserOnlineStatus","true");let r=o.href,s=await H.get(r,{fetch:true,allowInterceptConfig:false});if(!s.status){b.error("探测用户在线状态，中止网络请求探测"),t(i,true);return}let u=c.toElement(s.data.responseText,true,true).querySelector(".flb");if(u){let h=(c.text(u)?.trim()).endsWith("……[离线]");t(i,h);}else t(i,true);}},showUserLevel(){b.info("显示用户等级"),N(".pls.favatar:not([data-show-user-level])").forEach(e=>{e.setAttribute("data-show-user-level","true");let t="0级",n=e.querySelector(".tns tr"),a=e.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),a){case "幼儿园":case "初级工程师":t="1级";break;case "小学生":case "中级工程师":t="2级";break;case "初中生":case "高级工程师":t="3级";break;case "高中生":case "专家":t="4级";break;case "大学生":case "高级专家":t="5级";break;case "硕士生":case "资深专家":t="6级";break;case "博士生":case "实习版主":case "版主":case "审核员":case "研究员":t="7级";break;case "博士后":case "超级版主":case "网站编辑":case "高级研究员":case "荣誉开发者":t="8级";break;case "管理员":case "信息监察员":case "资深研究员":t="9级";break}c.html(i,`<p><a class="dj">${t}</a></p>Lv`),n.appendChild(i);});},hideBottomInfoBlock(){return b.info("隐藏底部信息块"),j(`
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
		`)}},et={init(){c.onReady(()=>{k.execMenuOnce("mt-guide-beautifyPage",()=>{this.beautifyPage();});});},beautifyPage(){b.info("页面美化"),j(`
		.xst{font-size:15px}
		td.author_img{width:50px;padding:15px 0}
		td.author_img img{width:40px;height:40px;border-radius:50%}
		.list_author{margin-top:2px;color:#999;font-size:12px}
		.bankuai_tu_by a{color:#999!important}
		.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
		tbody a:hover{text-decoration:none;color:#3498db}
		.byg_th_align em+a{margin-right:5px}
	`),N(".bm_c table tbody").forEach(e=>{let t=e.querySelector("th.common"),n=c.html(t),a=t.querySelectorAll("a")[0].getAttribute("href"),i=null,r=e.querySelector("td.by>cite>a").getAttribute("href").match(/uid-(\d+)/)[1],s=`
			<td class="author_img">
				<a href="space-uid-${r}.html" c="1" mid="${i}">
					<img src="${$.getAvatar(r,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${e.querySelector("tr>td.by>a").outerHTML}]</em>
					${n}
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
						<a href="${a}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;c.html(e,s);});}},Re=function(e,t,n,a,i,o,r,s,l,u){const p={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:a,buttonIsRightIcon:i,buttonIconIsLoading:o,buttonType:r,buttonText:n,callback(h){typeof s=="function"&&s(h);},afterAddToUListCallBack:l};return Reflect.set(p.attributes,ve,()=>{p.disable=false;}),p},Te=function(e,t,n,a,i,o="",r="text",s,l){const u={text:e,type:"input",inputType:r,attributes:{},props:{},description:a,placeholder:o,afterAddToUListCallBack:s,getValue(){return this.props[D].get(t,n)},callback(p,h){p.target.validity.valid,this.props[D].set(t,h);}};return Reflect.set(u.attributes,X,t),Reflect.set(u.attributes,ee,n),ue.initComponentsStorageApi("input",u,{get(p,h){return k.getValue(p,h)},set(p,h){k.setValue(p,h);}}),u},Me=function(e,t,n,a,i,o="",r,s){const l={text:e,type:"input",inputType:"number",attributes:{},props:{},description:a,placeholder:o,afterAddToUListCallBack:r,getValue(){return this.props[D].get(t,n)},callback(u,p,h){this.props[D].set(t,p);}};return Reflect.set(l.attributes,X,t),Reflect.set(l.attributes,ee,n),ue.initComponentsStorageApi("input",l,{get(u,p){return k.getValue(u,p)},set(u,p){k.setValue(u,p);}}),l},Le=function(e,t,n,a,i,o){const r={type:"own",attributes:{},props:{},createLIElement:e,afterAddToUListCallBack:o};return Reflect.set(r.attributes,ve,()=>false),typeof n=="object"&&n!==null&&Reflect.set(r.attributes,Be,n),r},De=function(e,t,n,a,i,o,r){const s={text:e,type:"select",description:o,attributes:{},props:{},getValue(){return this.props[D].get(t,n)},callback(l){if(l==null)return;const u=l.value;if(b.info(`选择：${l.text}`),typeof i=="function"&&i(l))return;this.props[D].set(t,u);},data:a};return Reflect.set(s.attributes,X,t),Reflect.set(s.attributes,ee,n),ue.initComponentsStorageApi("select",s,{get(l,u){return k.getValue(l,u)},set(l,u){k.setValue(l,u);}}),s},xe=function(e,t,n,a,i,o="",r,s){const l={text:e,type:"textarea",attributes:{},props:{},description:a,placeholder:o,disabled:r,getValue(){const p=this.props[D].get(t,n);return Array.isArray(p)?p.join(`
`):p},callback(u,p){this.props[D].set(t,p);}};return Reflect.set(l.attributes,X,t),Reflect.set(l.attributes,ee,n),ue.initComponentsStorageApi("switch",l,{get(u,p){return k.getValue(u,p)},set(u,p){k.setValue(u,p);}}),l},ue={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new oe.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let a;this.hasStorageApi(e)?a=this.getStorageApi(e):a=n,this.setComponentsStorageApiProperty(t,a);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,D,t);}},_=function(e,t,n=false,a,i,o,r,s,l){const u={text:e,type:"switch",description:i,disabled:r,attributes:{},props:{},getValue(){return this.props[D].get(t,n)},callback(p,h){const d=!!h;b.success(`${d?"开启":"关闭"} ${e}`),this.props[D].set(t,d);},afterAddToUListCallBack:(...p)=>{}};return Reflect.set(u.attributes,X,t),Reflect.set(u.attributes,ee,n),ue.initComponentsStorageApi("switch",u,{get(p,h){return k.getValue(p,h)},set(p,h){k.setValue(p,h);}}),u};class _e{option;constructor(t){this.option=t;}async showView(){const t=M.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:f.assign({ok:{callback:async()=>{await o();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${M.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");const a=t.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());c.append(a,i);const o=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(t.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return t}}const tt={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),se.isPost()){let e=this.getData();if(!e.enable)return;let t=new f.LockFunction(()=>{this.runFilter(e);});f.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){ce.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},runFilter(e){let t=function(a){for(const i of e.userBlackList)if(i==a.userName||i==a.userUID)return b.success("评论过滤器：黑名单用户",a),true;return  false},n=function(a){for(const i of e.userWhiteList)if(i===a.userName||i===a.userUID)return b.success("评论过滤器：白名单用户",a),true;return  false};N(".comiis_vrx").forEach(a=>{if(a.querySelector(".plc .pti .authi .show"))return;let i=a.querySelector(".pls .authi a"),o={userName:i?.innerText||"",userUID:i?.href?.match(ge.uid)?.[2]?.trim()||"",content:a.querySelector(".plc td.t_f")?.innerText?.trim()||"",isAuthor:false};if(!n(o)){if(e.replyFlag&&a.querySelector(".quote")){let r=a.querySelector(".quote");this.$el.isFilterElementHTML.push(r.outerHTML),r.remove();}if(!(o.isAuthor&&!e.avatarFlag)){if(t(o)){this.$el.isFilterElementHTML.push(a.outerHTML),a.remove();return}if(!(typeof e.minLength=="number"&&e.minLength>o.content.length)&&!(typeof e.keywordLength=="number"&&e.keywordLength<o.content.length))for(const r of e.keywords){if(typeof r!="string")continue;let s=new RegExp(r);if(o.content.match(s)){console.log("评论过滤器：",o),this.$el.isFilterElementHTML.push(a.outerHTML),a.remove();return}}}}});},showView(){const e=this,t=function(i){return {get(o,r){let s=e.getData(),l=Reflect.get(s,o,r);return (o==="keywords"||o==="userWhiteList"||o==="userBlackList")&&(l=l.join(`
`)),l},set(o,r){(o==="keywords"||o==="userWhiteList"||o==="userBlackList")&&(r=r.split(`
`).filter(s=>s.trim()!="")),Reflect.set(i,o,r),e.setData(i);}}},n=M.fn.PanelHandlerComponents();new _e({title:"评论过滤器",data:()=>this.getData(),getView:i=>{const o=document.createDocumentFragment(),r=_("启用","enable",true);Reflect.set(r.props,D,t(i));const s=n.createSectionContainerItem_switch(r).$el,l=_("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(l.props,D,t(i));const u=n.createSectionContainerItem_switch(l).$el,p=_("处理作者评论","avatarFlag",false);Reflect.set(p.props,D,t(i));const h=n.createSectionContainerItem_switch(p).$el,d=_('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(d.props,D,t(i));const w=n.createSectionContainerItem_switch(d).$el,m=Me("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除");Reflect.set(m.props,D,t(i));const g=n.createSectionContainerItem_input(m).$el,y=Me("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除");Reflect.set(y.props,D,t(i));const v=n.createSectionContainerItem_input(y).$el,C=xe("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(C.props,D,t(i));const I=n.createSectionContainerItem_textarea(C).$el,T=xe("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(T.props,D,t(i));const A=n.createSectionContainerItem_textarea(T).$el,S=xe("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(S.props,D,t(i));const O=n.createSectionContainerItem_textarea(S).$el;return o.append(s,u,h,w,g,v,I,A,O),o},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,o)=>{M.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                ${Array.from(N('link[rel="stylesheet"]')).map(r=>r.outerHTML).join(`
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
      `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return ne(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){J(this.$key.STORAGE_KEY,e);}};class nt{option;constructor(t){this.option=t;}async showView(t){const n=M.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      ${M.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const s=M.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(b.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),s.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:a,$externalSelect:i,$ruleValueSelect:o,$searchInput:r}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let s=null,l=null;Array.isArray(this.option.bottomControls?.filter?.option)&&c.append(i,this.option.bottomControls?.filter?.option.map(h=>{const d=c.createElement("option",{innerText:h.name});return Reflect.set(d,"data-value",h),d})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&c.append(o,this.option.bottomControls?.filter?.inputOption.map(h=>{const d=c.createElement("option",{innerText:h.name});return Reflect.set(d,"data-value",h),d})),c.on(i,"change",async()=>{const h=i[i.selectedIndex],d=Reflect.get(h,"data-value");typeof d?.selectedCallBack=="function"&&d.selectedCallBack(d),s=d,await p(false);}),c.on(o,"change",async()=>{const h=o[o.selectedIndex],d=Reflect.get(h,"data-value");typeof d?.selectedCallBack=="function"&&d.selectedCallBack(d),l=d,await p(false);}),c.onInput(r,f.debounce(async()=>{await p(false);}));const u=()=>{const h=i[i.selectedIndex];s=Reflect.get(h,"data-value");const d=o[o.selectedIndex];l=Reflect.get(d,"data-value");},p=async h=>{this.clearContent(n.$shadowRoot),h&&u();const d=await this.option.data(),w=[],m=c.val(r);for(let g=0;g<d.length;g++){const y=d[g];if(typeof t=="function"){const v=await t(y);if(typeof v=="boolean"&&!v)continue}if(s){const v=await s?.filterCallBack?.(y);if(typeof v=="boolean"&&!v)continue}if(l){let v=true;if(m===""?v=true:v=false,v||(v=await l?.filterCallBack?.(y,m)),!v)continue}w.push(y);}await this.appendRuleItemElement(n.$shadowRoot,w);};if(typeof t=="object"&&t!=null){let h;typeof t.external=="number"?h=t.external:h=Array.from(i.options).findIndex(w=>Reflect.get(w,"data-value").value===t.external),h!==-1&&(i.selectedIndex=h);let d;typeof t.rule=="number"?d=t.rule:d=Array.from(o.options).findIndex(w=>Reflect.get(w,"data-value").value===t.rule),d!==-1&&(o.selectedIndex=d);}await p(true);}else c.hide(a,false);}showEditView(t,n,a,i,o,r){let s=async u=>{if(u){if(typeof r=="function"){let p=await this.option.getData(n);r(p);}}else if(t||await this.option.deleteData(n),typeof o=="function"){let p=await this.option.getData(n);o(p);}};new _e({title:t?"编辑":"添加",data:()=>n,dialogCloseCallBack:s,getView:async u=>await this.option.itemControls.edit.getView(u,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async u=>{u.close(),await s(false);}},close:{callback:async u=>{u.close(),await s(false);}}},onsubmit:async(u,p)=>{let h=await this.option.itemControls.edit.onsubmit(u,t,p);return h.success?t?(x.success("修改成功"),a&&await this.updateRuleItemElement(h.data,i,a)):a&&await this.appendRuleItemElement(a,h.data):t&&b.error("修改失败"),h},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){const n=t.querySelector(".rule-view-container"),a=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),i=t.querySelector(".rule-view-search-container"),o=i.querySelector(".pops-panel-select .select-rule-status"),r=i.querySelector(".pops-panel-select .select-rule-value"),s=i.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:a,$searchContainer:i,$externalSelect:o,$ruleValueSelect:r,$searchInput:s}}parseRuleItemElement(t){const n=t.querySelector(".rule-controls-enable"),a=n.querySelector(".pops-panel-switch"),i=n.querySelector(".pops-panel-switch__input"),o=n.querySelector(".pops-panel-switch__core"),r=t.querySelector(".rule-controls-edit"),s=t.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:a,$enableSwitchInput:i,$enableSwitchCore:o,$edit:r,$delete:s,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,n){const a=await this.option.getDataItemName(t),i=c.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${a}</div>
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
					${M.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${M.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",t);const o="pops-panel-switch-is-checked",{$enable:r,$enableSwitch:s,$enableSwitchCore:l,$enableSwitchInput:u,$delete:p,$edit:h}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(c.on(l,"click",async()=>{let d=false;s.classList.contains(o)?(s.classList.remove(o),d=false):(s.classList.add(o),d=true),u.checked=d,await this.option.itemControls.enable.callback(t,d);}),await this.option.itemControls.enable.getEnable(t)&&s.classList.add(o)):r.remove(),this.option.itemControls.edit.enable?c.on(h,"click",d=>{c.preventEvent(d),this.showEditView(true,t,n,i,w=>{t=null,t=w;});}):h.remove(),this.option.itemControls.delete.enable?c.on(p,"click",d=>{c.preventEvent(d);const w=M.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{b.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(x.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(n),w.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),i}async appendRuleItemElement(t,n){const{$container:a}=this.parseViewElement(t),i=[],o=Array.isArray(n)?n:[n];for(let r=0;r<o.length;r++){const s=o[r],l=await this.createRuleItemElement(s,t);i.push(l);}return c.append(a,i),await this.updateDeleteAllBtnText(t),i}async updateRuleContaienrElement(t){this.clearContent(t);const n=await this.option.data();await this.appendRuleItemElement(t,n),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,n,a){const i=await this.createRuleItemElement(t,a);n.after(i),n.remove();}clearContent(t){const{$container:n}=this.parseViewElement(t);c.html(n,"");}setDeleteBtnText(t,n,a=false){const{$deleteBtn:i}=this.parseViewElement(t);a?c.html(i,n):c.text(i,n);}async updateDeleteAllBtnText(t){let n=await this.option.data();this.setDeleteBtnText(t,`清空所有(${n.length})`);}}const at={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){ce.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},async runRule(){async function e(){let a=await H.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:false,headers:{"User-Agent":f.getRandomAndroidUA()}});if(!a.status){x.error("【积分商城】获取数据失败");return}let i=[];return c.toElement(a.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(r=>{i.push({name:c.text(r.querySelector(".mall-info a > *:first-child"))||c.text(r.querySelector(".mall-info a")),price:c.text(r.querySelector(".mall-info span.discount-price i")),endTime:c.text(r.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(r.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi,"")||"0")});}),i}if(se.isPointsMall())return;let t=this.getData();if(!t.length)return;let n=await e();if(n){for(const a of n)for(const i of t)if(i.enable&&a.name.match(new RegExp(i.productName,"i"))&&!isNaN(a.remainingQuantity)&&a.remainingQuantity>0){b.success("成功匹配对应商品",i,a),M.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${a.price}金币，仅剩${a.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?x.success("删除成功"):x.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:f.generateUUID(),enable:true,name:"",productName:""}},showView(){let e=M.fn.PanelHandlerComponents();function t(a){return {get(i,o){return a[i]??o},set(i,o){a[i]=o;}}}new nt({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:a=>a.name,updateData:a=>this.updateData(a),deleteData:a=>this.deleteData(a),getData:a=>this.getData().find(r=>r.uuid===a.uuid)??a,itemControls:{enable:{enable:true,getEnable(a){return a.enable},callback:(a,i)=>{a.enable=i,this.updateData(a);}},edit:{enable:true,getView:(a,i)=>{let o=document.createDocumentFragment();i||(a=this.getTemplateData());let r=_("启用","enable",true);Reflect.set(r.props,D,t(a));let s=e.createSectionContainerItem_switch(r).$el,l=Te("规则名称","name","","",void 0,"必填");Reflect.set(l.props,D,t(a));let u=e.createSectionContainerItem_input(l).$el,p=Te("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(p.props,D,t(a));let h=e.createSectionContainerItem_input(p).$el;return o.append(s,u,h),o},onsubmit:(a,i,o)=>{let r=a.querySelectorAll(".rule-form-ulist > li"),s=this.getTemplateData();return i&&(s.uuid=o.uuid),r.forEach(l=>{let u=Reflect.get(l,e.$data.nodeStoreConfigKey),p=Reflect.get(u,"attributes"),h=Reflect.get(l,D),d=Reflect.get(p,X),w=Reflect.get(p,ee),m=h.get(d,w);Reflect.has(s,d)?Reflect.set(s,d,m):b.error(`${d}不在数据中`);}),s.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:s}):i?{success:this.updateData(s),data:s}:{success:this.addData(s),data:s}}},delete:{enable:true,deleteCallBack:a=>this.deleteData(a)}}}).showView();},getData(){return ne(this.$key.STORAGE_KEY,[])},setData(e){J(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(a=>a.uuid==e.uuid)===-1?(t.push(e),J(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),n=t.findIndex(i=>i.uuid==e.uuid),a=false;return n!==-1&&(a=true,t[n]=e),this.setData(t),a},deleteData(e){let t=this.getData(),n=t.findIndex(i=>i.uuid==e.uuid),a=false;return n!==-1&&(a=true,t.splice(n,1)),this.setData(t),a},clearData(){le(this.$key.STORAGE_KEY);}},it=`.pops-confirm-content {
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
`,ot={$data:{cid:""},init(){this.registerMenu();},registerMenu(){ce.add({key:"black-home",text:"⚙ 小黑屋",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let e=x.loading("正在获取小黑屋名单中..."),t=await this.getBlackListInfo("");if(e.close(),!t)return;if(t.data.length===0){x.error("获取小黑屋名单为空");return}this.$data.cid=t.next_cid;let n=M.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let s=x.loading("正在获取小黑屋名单中...");b.info("下一页的cid: ",this.$data.cid);let l=await this.getBlackListInfo(this.$data.cid);s.close(),l&&(this.$data.cid=l.next_cid,l.data.forEach(u=>{let p=this.createListViewItem(u);a.appendChild(p);}),l.data.length===0?x.error("获取小黑屋名单为空"):x.success(`成功获取 ${l.data.length}条数据`),c.emit(i,"input"));}},cancel:{text:"关闭"}},width:G.settingBig.width,height:G.settingBig.height,style:it}),a=n.$shadowRoot.querySelector(".blackhome-user-list"),i=n.$shadowRoot.querySelector(".blackhome-user-filter input");t.data.forEach(s=>{let l=this.createListViewItem(s);a.appendChild(l);}),x.success(`成功获取 ${t.data.length}条数据`);let o=false;c.on(i,["input","propertychange"],f.debounce(()=>{let s=i.value.trim();if(!o){if(o=true,s==""){n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(l=>{l.removeAttribute("style");}),o=false;return}n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(l=>{l.getAttribute("data-name").match(new RegExp(s,"ig"))||l.getAttribute("data-uid").trim().match(new RegExp(s,"ig"))||l.getAttribute("data-operator").match(new RegExp(s,"ig"))?l.removeAttribute("style"):l.setAttribute("style","display:none;");}),o=false;}}));let r=await this.getBlackListInfo(this.$data.cid);r&&(this.$data.cid=r.next_cid);},async getBlackListInfo(e=""){let t={mod:"misc",action:"showdarkroom",cid:e,ajaxdata:"json"},n=await H.get(`/forum.php?${f.toSearchParamsStr(t)}`,{headers:{"User-Agent":f.getRandomPCUA()},responseType:"json"});if(!n.status)return;let a=f.toJSON(n.data.responseText),i=a.message.split("|"),o=i[i.length-1],r=f.parseObjectToArray(a.data),s=[],l=[];return r.forEach(u=>{let p=u.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(p==null){let h=parseInt((Date.now()/1e3).toString()),d=0,w=u.dateline.match(/([0-9]+|半)[\s\S]*秒前/),m=u.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),g=u.dateline.match(/([0-9]+|半)[\s\S]*小时前/),y=u.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),v=u.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),C=u.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(w)w=w[w.length-1],w=w.replace(/半/g,.5),w=parseFloat(w),d=h-w;else if(m)m=m[m.length-1],m=m.replace(/半/g,.5),m=parseFloat(m),d=h-m*60;else if(g)g=g[g.length-1],g=g.replace(/半/g,.5),g=parseFloat(g),d=h-g*60*60;else if(y){let I=y[1],T=y[2];d=h-86400-parseInt(I)*3600-parseInt(T)*60;}else if(v){let I=v[1],T=v[2];d=h-86400*2-parseInt(I)*3600-parseInt(T)*60;}else C&&(C=C[C.length-1],C=C.replace(/半/g,.5),C=parseFloat(C),d=h-C*60*60*24);u.time=parseInt(d.toString())*1e3,s=s.concat(u);return}else p=p[0];u.time=f.formatToTimeStamp(p),s=s.concat(u);}),f.sortListByProperty(s,"time"),f.sortListByProperty(l,"time",false),s=s.concat(l),{next_cid:o,data:s}},createListViewItem(e){let t=c.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${$.getAvatar(e.uid,"big")}" loading="lazy">
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
                        <img loading="lazy" src="${$.getAvatar(e.operatorid,"big")}">
                        <p>${e.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${e.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":e.username,"data-uid":e.uid,"data-operator":e.operator,"data-operator-uid":e.operatorid});return c.on(t,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),c.on(t,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${e.operatorid}&do=profile`,"_blank");}),t}},rt=`.pops-alert-content {
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
`,st={$data:{},init(){this.registerMenu();},registerMenu(){ce.add({key:"online-user",text:"⚙ 在线用户",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let e=x.loading("正在获取在线用户名单中..."),t=await this.getOnlineUserListInfo();if(e.close(),!t)return;let n=M.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${t.totalOnline} 人在线 - ${t.onlineUser} 会员${t.invisibleUser==0?"":`(${t.invisibleUser}隐身)`} - ${t.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:G.settingBig.width,height:G.settingBig.height,style:rt}),a=n.$shadowRoot.querySelector(".online-user-list"),i=n.$shadowRoot.querySelector(".online-user-filter input");t.data.forEach(r=>{let s=this.createListViewItem(r);a.appendChild(s);}),x.success(`成功获取 ${t.data.length}条数据`);let o=false;q.on(i,["propertychange","input"],f.debounce(()=>{let r=i.value.trim();if(!o){if(o=true,r==""){n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(s=>{s.removeAttribute("style");}),o=false;return}n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(s=>{s.getAttribute("data-name").match(new RegExp(r,"ig"))||s.getAttribute("data-sf").match(new RegExp(r,"ig"))||s.getAttribute("data-uid").match(new RegExp(r,"ig"))?s.removeAttribute("style"):s.setAttribute("style","display:none;");}),o=false;}}));},async getOnlineUserListInfo(){let e={showoldetails:"yes"},t=await H.get(`/forum.php?${f.toSearchParamsStr(e)}`,{headers:{"User-Agent":f.getRandomPCUA()}});if(!t.status)return;let n=f.parseFromString(t.data.responseText,"text/html"),a={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};n.querySelectorAll("#onlinelist ul li").forEach(r=>{let s=r.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],l=$.getAvatar(s,"middle"),u=r.querySelector("a").innerText,p="",h=r.querySelector("a").getAttribute("href"),d=r.querySelector("img").src;d.indexOf("online_member")!=-1?p="会员":d.indexOf("online_moderator")!=-1?p="版主":d.indexOf("online_supermod")!=-1?p="超级版主":d.indexOf("online_admin")!=-1?p="管理员":p="未知身份",a.data.push({uid:s,avatar:l,name:u,sf:p,space:h});});let o=n.querySelector("#online div.bm_h span.xs1").textContent;return a.totalOnline=f.parseInt(o.match(/([0-9]*)\s*人在线/i),0),a.onlineUser=f.parseInt(o.match(/([0-9]*)\s*会员/i),0),a.noRegisterUser=f.parseInt(o.match(/([0-9]*)\s*位游客/i),0),a.invisibleUser=f.parseInt(o.match(/([0-9]*)\s*隐身/i),0),a},createListViewItem(e){let t=q.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return q.on(t,"click",".online-user-avatar",n=>{q.preventEvent(n),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),t}},lt={$flag:{showUserUID_initCSS:false},init(){k.onceExec("mt-MTCommentFilter",()=>{tt.init();}),se.isPost()?(b.info("Router: 帖子"),Ue.init()):se.isGuide()?(b.info("Router: 导读"),et.init()):b.error("Router: 未适配的链接 ==> "+window.location.href),c.onReady(()=>{k.onceExec("mt-MTProductListingReminder",()=>{at.init();}),k.onceExec("mt-blackHome",()=>{ot.init();}),k.onceExec("mt-onlineUser",()=>{st.init();}),k.execMenuOnce("mt-addLatestPostBtn",()=>this.addLatestPostBtn()),k.execMenu("mt-auto-sign",()=>{he.init();}),k.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();}),se.isPostPublish_edit()||k.execMenuOnce("mt-link-text-to-hyperlink",()=>Ze());});},addLatestPostBtn(){b.info("新增【最新发表】");const e=c.createElement("li",{id:"latest_publication",innerHTML:`
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			`}),t=e.querySelector("a");return c.append("#comiis_nv .wp.comiis_nvbox.cl ul",e),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(c.removeClass("#mn_forum_10","a"),c.css(t,"background",'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px')),[e]},async extendCookieExpire(){b.info("延长cookie有效期");let e=await Se.cookie.list({}),t=["_auth","_saltkey","_client_created","_client_token"];e.forEach(async n=>{if(n.session)return;let a=n.expirationDate,i=Date.now()/1e3;if(a<i)return;let o=3600*24*30;a-i>o||!t.find(s=>n.name.endsWith(s))||Se.cookie.set({name:n.name,value:n.value,expirationDate:n.expirationDate+o}).then(()=>{b.info(`延长Cookie +30天成功：${n.name}`);}).catch(()=>{b.error(`延长Cookie +30天失败：${n.name}`);});});}},te={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return te.$el.$smallUpload.files[0]},get middle(){return te.$el.$middleUpload.files[0]},get big(){return te.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const e=this;let t=M.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!e.$upload.small){x.error("请上传小头像");return}if(!e.$upload.middle){x.error("请上传中头像");return}if(!e.$upload.big){x.error("请上传大头像");return}let n=x.loading("正在处理数据中...");try{let a=await this.getUploadUrl();if(a==null)return;let i=await $.getFormHash();if(i==null){x.error("获取formhash失败");return}let o={big:{base64:await f.parseFileToBase64(this.$avatar.big)},middle:{base64:await f.parseFileToBase64(this.$avatar.middle)},small:{base64:await f.parseFileToBase64(this.$avatar.small)}};Object.keys(o).forEach(l=>{let u=o[l];u.base64=u.base64.substring(u.base64.indexOf(",")+1);});let r=new FormData;r.append("Filedata",this.$avatar.big||""),r.append("confirm","确定"),r.append("avatar1",o.big.base64),r.append("avatar2",o.middle.base64),r.append("avatar3",o.small.base64),r.append("formhash",i),b.info("头像的base64字符串",o);let s=await H.post(a,{data:r,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":f.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!s.status)return;s.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(t.close(),x.success("上传成功")):(b.error("上传失败",s),x.error(s.data.responseText,{timeout:6e3,isHTML:!1}));}catch(a){b.error(a);}finally{n.close();}}}},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `});this.$el.$smallUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(e,t,n,a){c.on(e,"change",i=>{if(!e.files?.length)return;c.text(t,"🤡获取文件信息中..."),t.removeAttribute("data-success");let o=e.files[0],r=o.size,s=new Image,l=new FileReader;l.readAsDataURL(o),l.onload=function(u){s.src=u.target.result,s.onload=function(){if(s.width>n.width||s.height>n.height){e.value="",t.setAttribute("data-success","false"),c.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${s.width} 高：${s.height}`);return}if(r>te.$data.avatarInfo.maxSize){e.value="",t.setAttribute("data-success","false"),c.text(t,`🤡校验失败 ==> 图片大小不符合：${r}byte，限制最大：${te.$data.avatarInfo.maxSize}byte`);return}t.setAttribute("data-success","true"),c.text(t,`🤣 通过 宽:${s.width} 高:${s.height} 大小(byte):${r}`),a();};};});},async getUploadUrl(){let e=await H.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":f.getRandomPCUA()}});if(!e.status)return;if(f.isNull(e.data.responseText)){x.error("动态头像：获取上传地址的内容失败");return}let t=e.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(t==null||t.length!=2){x.error("动态头像：获取变量data失败");return}let a=t[t.length-1].split(","),i=a.indexOf("stl_src");if(i===-1&&(i=a.indexOf("src")),i===-1){x.error("动态头像：获取上传地址失败");return}let o=a[i+1],r=new URL(o);return r.pathname=r.pathname.replace("/images/camera.swf","/index.php"),r.searchParams.delete("inajax"),r.searchParams.set("m","user"),r.searchParams.set("a","rectavatar"),r.searchParams.set("base64","yes"),o=r.toString(),b.info("上传地址："+o),o}},ct={id:"component-common",title:"通用",views:[{text:"",type:"container",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[De("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{b.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),De("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),_("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[_("新增【最新发表】","mt-addLatestPostBtn",true,void 0,"便于快捷跳转"),_("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),_("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{type:"deepMenu",text:"自动签到",views:[{text:"",type:"container",views:[_("启用","mt-auto-sign",true,void 0,"自动请求签到"),_("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),Re("签到信息",`上次签到时间：${(()=>{let e=he.getHostNameSignInfo(window.location.hostname);return e?oe.formatTime(e.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",e=>{let n=e.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");M.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:a=>{let i=window.location.hostname;he.clearSignInfo(i),x.success("删除成功"),c.text(n,`上次签到时间：${(()=>{let o=he.getHostNameSignInfo(i);return o?oe.formatTime(o.time):"尚未签到"})()}`),a.close();}}},width:"300px",height:"200px"});})]}]},{text:"头像",type:"deepMenu",views:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"container",views:[Le(e=>{const t=c.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=c.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),a=c.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return n.querySelector(".avatar-img[data-size='small']"),n.querySelector(".avatar-img[data-size='middle']"),n.querySelector(".avatar-img[data-size='big']"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e},void 0,{text:"头像（有缓存）",desc:"小、中、大"}),Le(e=>{const t=c.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=c.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return e.appendChild(t),e.appendChild(n),e},void 0,{text:"头像",desc:"小、中、大"}),Re("修改头像",`可以上传gif图片，注意图片最大限制为${oe.formatByteToSize(te.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{te.init();})]}]}]}]},ut={id:"component-forum-post",title:"帖子",views:[{type:"container",text:"",views:[{text:"功能",type:"deepMenu",views:[{type:"container",text:"",views:[_("拦截附件","mt-forum-post-interceptionAttachment",true,void 0,"点击附件时弹出提示框进行确认是否下载附件"),_("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片"),_("自动加载下一页","mt-forum-post-loadNextPageComment",true,void 0,"无缝预览下一页"),_("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",views:[{type:"container",text:"",views:[_("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",false,void 0,"获取用户在线状态并在用户信息处显示状态表情"),_("显示用户等级","mt-forum-post-showUserLevel",true,void 0,"在用户信息处显示当前用户的等级"),_("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",false,void 0,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",views:[{type:"container",text:"",views:[_("新增【快捷收藏】","mt-forum-post-quickCollentBtn",true,void 0,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),_("快捷回复优化","mt-forum-post-quickReplyOptimization",true,void 0,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},dt={id:"component-guide",title:"导读",views:[{type:"container",text:"",views:[_("页面美化","mt-guide-beautifyPage",true,void 0,"美化样式")]}]};me.addContentConfig([ct,ut,dt]);k.init();lt.init();

})(Qmsg, DOMUtils, pops, Utils, hljs, Viewer);