// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.2
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
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

(function (y, U, Ce, _e) {
  'use strict';

  var Ue=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,re=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,fe=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ae=typeof GM_getValue<"u"?GM_getValue:void 0,oe=typeof GM_info<"u"?GM_info:void 0,ce=typeof GM_listValues<"u"?GM_listValues:void 0,Ge=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,qe=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,xe=typeof GM_setValue<"u"?GM_setValue:void 0,Ee=typeof GM_setValues<"u"?GM_setValues:void 0,He=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,je=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,_=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ke=window;const ne={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},v={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&U.waitNodeList(e).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),U.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),C(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof fe=="function"?fe(t.keyName):null;return typeof e=="string"&&e?C(e):v.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{U.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(o){navigator.clipboard.readText().then(a=>{o(a);}).catch(a=>{r.error("读取剪贴板内容失败👉",a),o("");});}function e(o){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t(o);}).catch(a=>{r.error("申请剪贴板权限失败，尝试直接读取👉",a.message??a.name??a.stack),t(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?e(o):window.addEventListener("focus",()=>{e(o);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let o,a=n-e,c=e,i=async s=>{const p=await t(s);if(typeof p=="boolean"&&p||s){b.workerClearTimeout(o);return}if(c+=e,c>a){i(true);return}o=b.workerSetTimeout(()=>{i(false);},e);};i(false);},findParentNode(t,e,n){if(n){let o=U.closest(t,n);if(o)return o.querySelector(e)}else return U.matches(t,e)?t:U.closest(t,e)},toStr(t,e=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(t,(a,c)=>c===void 0?n:c,e).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(t=768){return this.isVerticalScreen()?globalThis.innerWidth<t:globalThis.innerHeight<t},isTopWindow(){const t=typeof _=="object"&&_!=null?_:window;return t.top===t.self},formatVideoDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();const e=function(n){return n<10?`0${n}`:n};if(t<60)return `0:${e(t)}`;if(t>=60&&t<3600){const n=Math.floor(t/60),o=t%60;return `${n}:${e(o)}`}else {const n=Math.floor(t/3600),o=Math.floor(t/60)%60,a=t%60;return `${n}:${e(o)}:${e(a)}`}},formatTimeStamp(t,e){if(typeof t=="number"&&t<1e12){const s=String(Date.now()).length-String(t).length;t=t*Math.pow(10,s);}let n=t,o=new Date(typeof t=="string"?t.replace(/-/g,"/"):t),c=new Date(e??Date.now()).getTime()-o.getTime(),i=Math.floor(c/(24*3600*1e3));if(i>0)i>7?n=b.formatTime(o.getTime()):n=i+"天前";else {let s=c%864e5,p=Math.floor(s/(3600*1e3));if(p>0)n=p+"小时前";else {let u=s%36e5,d=Math.floor(u/(60*1e3));if(d>0)n=d+"分钟前";else {let f=u%6e4;n=Math.round(f/1e3)+"秒前";}}}return n}},b=_e.noConflict(),m=U.noConflict(),q=Ce,r=new b.Log(oe,_.console||Ke.console),we=oe?.script?.name||void 0,ze=Ce.fn.Utils.AnyTouch();r.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const $e=()=>{const e=Ce.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=b.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,n)};y.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?r.warn(n):e==="error"?r.error(n):r.info(n),false},get position(){return l.getValue(ne.qmsg_config_position.key,ne.qmsg_config_position.defaultValue)},get maxNums(){return l.getValue(ne.qmsg_config_maxnums.key,ne.qmsg_config_maxnums.defaultValue)},get showReverse(){return l.getValue(ne.qmsg_config_showreverse.key,ne.qmsg_config_showreverse.defaultValue)},get zIndex(){return $e()}});q.GlobalConfig.setGlobalConfig({zIndex:()=>$e(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Ve=new b.GM_Menu({GM_getValue:ae,GM_setValue:xe,GM_registerMenuCommand:Ge,GM_unregisterMenuCommand:He}),Z=new b.Httpx({xmlHttpRequest:je,logDetails:false});Z.interceptors.request.use(t=>t);Z.interceptors.response.use(t=>t,t=>(r.error("[Httpx-HttpxRequest.response] 响应错误",{data:t}),t.type==="onabort"?y.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?y.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?y.error("请求超时",{consoleLogContent:true}):y.error("其它错误",{consoleLogContent:true}),t));_.Object.defineProperty,_.Object.keys,_.Object.values,_.Function.prototype.apply,_.Function.prototype.call,_.Element.prototype.appendChild,_.setTimeout.bind(_),_.clearTimeout.bind(_),_.setInterval.bind(_),_.clearInterval.bind(_);const C=m.addStyle.bind(m);v.addBlockCSS.bind(v);const me=U.selector.bind(U),Oe=U.selectorAll.bind(U),de=new b.CookieManagerService({baseCookieHandler:"GM_cookie"});de.isSupportGM_cookie||(de.isSupportCookieStore?de.setOptions({baseCookieHandler:"cookieStore"}):de.setOptions({baseCookieHandler:"document.cookie"}));new b.DocumentCookieHandler;const ge="GM_Panel",Je="data-init",se="data-key",le="data-default-value",Ze="data-init-more-value",Ye="data-plugin-search-config",Q="data-storage-api",z={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},G={setting:{get width(){return z.width<550?"88vw":z.width<700?"550px":"700px"},get height(){return z.height<450?"70vh":z.height<550?"450px":"550px"}},settingMiddle:{get width(){return z.width<350?"88vw":"350px"}},info:{get width(){return z.width<350?"88vw":"350px"},get height(){return z.height<250?"88vh":"250px"}}},X={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new b.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,n;const o=(s,p)=>{if(t&&typeof t.translateCallback=="function")return t.translateCallback(s,p);if(typeof p=="object"&&p)for(const u in p)s=s.replaceAll(`{{${u}}}`,p[u]);return s},a=(s,p)=>{typeof p!="string"&&(p=v.toStr(p));const u=new Blob([p]),d=globalThis.URL.createObjectURL(u);m.createElement("a",{href:d,download:s}).click(),b.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(d);},500);},c=()=>{const s=x=>{const g=q.alert({title:{text:o("请选择导入方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">${o("本地导入")}</div>
            <div class="btn-control" data-mode="network">${o("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${o("剪贴板导入")}</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(T){T.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),w=g.$shadowRoot.querySelector(".btn-control[data-mode='local']"),$=g.$shadowRoot.querySelector(".btn-control[data-mode='network']"),N=g.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),I=async T=>{confirm(o("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）"))&&(typeof ce=="function"?typeof re=="function"?(ce().forEach(M=>{re(M);}),y.success(o("已清空脚本存储的配置"))):y.error(o("不支持GM_deleteValue函数，无法执行删除脚本配置")):y.error(o("不支持GM_listValues函数，无法清空脚本存储的配置"))),typeof Ee=="function"?Ee(T):Object.keys(T).forEach(M=>{const V=T[M];xe(M,V);}),y.success(o("配置导入完毕"));},F=T=>new Promise(async R=>{const A=b.toJSON(T);Object.keys(A).length===0?y.warning(o("解析为空配置，不导入")):await I(A),R(true);});m.on(w,"click",T=>{m.preventEvent(T),g.close();const R=m.createElement("input",{type:"file",accept:".json"});m.on(R,["propertychange","input"],()=>{if(!R.files?.length)return;const A=R.files[0],M=new FileReader;M.onload=()=>{F(M.result);},M.readAsText(A,"UTF-8");}),R.click();}),m.on($,"click",T=>{m.preventEvent(T),g.close();const R=q.prompt({title:{text:o("网络导入"),position:"center"},content:{text:"",placeholder:o("请填写URL"),focus:true},btn:{close:{enable:true,callback(V){V.close();}},ok:{text:o("导入"),callback:async V=>{const O=V.text;if(b.isNull(O)){y.error(o("请填入完整的url"));return}const k=y.loading(o("正在获取配置...")),D=await Z.get(O,{allowInterceptConfig:false});if(k.close(),!D.status){r.error(D),y.error(o("获取配置失败"),{consoleLogContent:true});return}await F(D.data.responseText)&&V.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:G.info.width,height:"auto"}),A=R.$shadowRoot.querySelector("input"),M=R.$shadowRoot.querySelector(".pops-prompt-btn-ok");m.on(A,["input","propertychange"],()=>{m.val(A)===""?m.attr(M,"disabled","true"):m.removeAttr(M,"disabled");}),m.onKeyboard(A,"keydown",(V,O,k)=>{V==="Enter"&&k.length===0&&m.val(A)!==""&&m.emit(M,"click");}),m.emit(A,"input");}),m.on(N,"click",async T=>{m.preventEvent(T),g.close();let R=await v.getClipboardText();if(R.trim()===""){y.warning(o("获取到的剪贴板内容为空"));return}await F(R);});},p=(x=`${we}_panel-setting-${b.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,g)=>{const w=q.alert({title:{text:o("请选择导出方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${o("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${o("导出至剪贴板")}</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(I){I.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),$=w.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),N=w.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");m.on($,"click",I=>{m.preventEvent(I);try{a(x,g),w.close();}catch(F){y.error(F.toString(),{consoleLogContent:true});}}),m.on(N,"click",async()=>{await b.copy(g)?(y.success(o("复制成功")),w.close()):y.error(o("复制失败"));});},d=q.confirm({title:{text:o("配置"),position:"center"},content:{text:'<textarea name="config-value" id="config" readonly></textarea>',html:true},btn:{ok:{enable:true,type:"primary",text:o("导入"),callback(){s();}},cancel:{enable:true,text:o("导出"),callback(){p(void 0,S);}}},width:z.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),f={};if(typeof ce=="function")ce().forEach(g=>{const w=ae(g);Reflect.set(f,g,w);});else {y.warning(o("不支持函数GM_listValues，仅导出菜单配置"));const x=ae(ge);Reflect.set(f,ge,x);}const S=v.toStr(f);d.value=S;},i=()=>{let s=oe?.script?.supportURL||oe?.script?.namespace;typeof s=="string"&&b.isNotNull(s)&&window.open(s,"_blank");};return [{id:"script-version",title:o("版本：{{version}}",{version:oe?.script?.version||o("未知")}),isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(s){new ze(s.$asideLiElement).on("tap",function(){clearTimeout(n),n=void 0,e?(e=false,c()):(n=setTimeout(()=>{e=false,i();},200),e=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},Se={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{l.showPanel(X.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){v.isTopWindow()&&Ve.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(o=>o.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class Ae{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e;}handlerResult(e,n){const o=[],a=[];let c=[];if(Array.isArray(n))c=c.concat(n);else {const s=p=>{if(typeof p=="object"&&p!=null)if(p instanceof Element)c.push(p);else if(Array.isArray(p))s(p);else {const{$css:u,destory:d}=p;u!=null&&(Array.isArray(u)?c=c.concat(u):u instanceof Element&&c.push(u)),typeof d=="function"&&c.push(d);}else c.push(p);};s(n);}const i=s=>{if(s!=null){if(s instanceof Element){o.push(s);return}if(typeof s=="function"){a.push(s);return}}};for(const s of c){const p=i(s);if(typeof p=="boolean"&&!p)break;if(Array.isArray(s))for(const u of s){const d=i(u);if(typeof d=="boolean"&&!d)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(o),this.data.destoryFnList=this.data.destoryFnList.concat(a));}getEnableStatus(e){return !!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1);};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){const n=this.data.destoryFnList[e];n(),this.data.destoryFnList.splice(e,1);}};checkMenuExec(){let e=false;return typeof this.option.checkExec=="function"?e=this.option.checkExec(this.option.keyList):e=this.option.keyList.every(n=>this.getEnableStatus(n)),e}}class Qe{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new _e.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){const n=this.callbacks[e];n(),this.callbacks.splice(e,1);}}getLocalValue(){if(this.cacheData==null){let e=ae(this.storageKey);e==null&&(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;const n=Ue(this.storageKey,(o,a,c)=>{this.cacheData=null,this.cacheData=c;});return this.callbacks.push(()=>{qe(n);}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,xe(this.storageKey,e);}set(e,n){const o=this.get(e),a=this.getLocalValue();Reflect.set(a,e,n),this.setLocalValue(a),this.emitValueChangeListener(e,n,o);}get(e,n){const o=this.getLocalValue();return Reflect.get(o,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),o=this.getLocalValue();Reflect.deleteProperty(o,e),this.setLocalValue(o),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){this.destory(),re(this.storageKey);}addValueChangeListener(e,n){const o=Math.random(),a=this.listenerData.get(e)||[];return a.push({id:o,key:e,callback:n}),this.listenerData.set(e,a),o}removeValueChangeListener(e){let n=false;for(const[o,a]of this.listenerData.entries()){for(let c=0;c<a.length;c++){const i=a[c];(typeof e=="string"&&i.key===e||typeof e=="number"&&i.id===e)&&(a.splice(c,1),c--,n=true);}this.listenerData.set(o,a);}return n}async emitValueChangeListener(...e){const[n,o,a]=e;if(!this.listenerData.has(n))return;const c=this.listenerData.get(n);for(let i=0;i<c.length;i++){const s=c[i];if(typeof s.callback=="function"){let p,u;e.length===1||(e.length===2?p=o:e.length===3&&(p=o,u=a)),await s.callback(n,p,u);}}}}const K=new Qe(ge),l={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new b.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new b.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new b.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new b.Dictionary),this.__onceExecData},get scriptName(){return we},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:ge,attributeKeyName:se,attributeDefaultValueName:le},init(){this.initContentDefaultValue(),Se.init();},initContentDefaultValue(){const t=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const a=o.attributes,c=a[Je];if(typeof c=="function"){const u=c();if(typeof u=="boolean"&&!u)return}const i=new Map,s=a[se];if(s!=null){const u=a[le];i.set(s,u);}const p=a[Ze];if(typeof p=="object"&&p&&Object.keys(p).forEach(u=>{const d=p[u];i.set(u,d);}),!i.size){r.warn("请先配置键",o);return}if(o.type==="switch"){const u=typeof o.disabled=="function"?o.disabled():o.disabled;typeof u=="boolean"&&u&&this.$data.contentConfigInitDisabledKeys.push(...i.keys());}for(const[u,d]of i.entries())this.setDefaultValue(u,d);},e=o=>{for(let a=0;a<o.length;a++){const c=o[a];t(c);const i=c.views;i&&Array.isArray(i)&&e(i);}},n=[...X.getAllContentConfig()];for(let o=0;o<n.length;o++){const a=n[o];if(!a.views)continue;const c=a.views;c&&Array.isArray(c)&&e(c);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&r.warn("该key已存在，初始化默认值失败: ",{key:t,initValue:this.$data.contentConfigInitDefaultValue.get(t)}),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){K.set(t,e);},getValue(t,e){const n=K.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){K.delete(t);},hasKey(t){return K.has(t)},addValueChangeListener(t,e,n){const o=K.addValueChangeListener(t,e);if(n?.immediate||n?.immediateAll){const a=this.getValue(t);n?.immediate?e(t,a,a):n?.immediateAll&&l.emitMenuValueChange(t,a,a);}return o},removeValueChangeListener(t){K.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){K.emitValueChangeListener(t,e,n);},async exec(t,e,n,o=true){let a;typeof t=="string"||Array.isArray(t)?a=()=>t:a=t;let c=false;const i=a();let s=[];Array.isArray(i)?(c=true,s=i):s.push(i);const p=s.find(g=>!this.$data.contentConfigInitDefaultValue.has(g));if(p){r.warn(`${p} 键不存在`);return}const u=JSON.stringify(s);if(o&&this.$data.onceExecMenuData.has(u))return this.$data.onceExecMenuData.get(u);const d=[],f=new Ae({keyList:s,getValue:g=>!!this.getValue(g),checkExec(g){let w=false;return typeof n=="function"?w=n(g):w=g.every($=>this.getValue($)),w}}),S=async g=>{const w=f.checkMenuExec();let $=[];if(w){const N=s.map(I=>this.getValue(I));$=await e({key:s,triggerKey:g?.key,value:c?N:N[0],addStoreValue:(...I)=>f.handlerResult(w,I)});}f.handlerResult(w,$);};o&&s.forEach(g=>{const w=this.addValueChangeListener(g,($,N,I)=>S({key:$}));d.push(w);}),await S();const x={checkMenuExec:f.checkMenuExec.bind(f),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),S();},clear(){f.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreNodeList:f.clearStoreNodeList.bind(f),execDestoryFnAndClear:f.execDestoryFnAndClear.bind(f),removeValueChangeListener:()=>{d.forEach(g=>{this.removeValueChangeListener(g);});},clearOnceExecMenuData(){o&&l.$data.onceExecMenuData.delete(u);}};return this.$data.onceExecMenuData.set(u,x),x},async execMenu(t,e,n=false,o=false){return await this.exec(t,async(...a)=>await e(...a),a=>a.every(i=>{let s=!!this.getValue(i);return l.$data.contentConfigInitDisabledKeys.includes(i)&&(s=false,r.warn(`.execMenu${o?"Once":""} ${i} 被禁用`)),n&&(s=!s),s}),o)},async execMenuOnce(t,e,n=false,o=false){const a=await this.execMenu(t,e,n,true);if(o&&a){const c=()=>{a.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,c);}return a},async execMoreMenu(t,e,n=false,o=false,a=false){const c=await Promise.all(t.map(async([d,f])=>await this.execMenu(d,(...x)=>f(...x),n,o))),i=new Ae({keyList:t.map(([d])=>d),getValue:d=>!!this.getValue(d)}),s=[],p=(d=false)=>{if(i.clearStoreNodeList(),i.execDestoryFnAndClear(),d){for(const f of s)this.removeValueChangeListener(f);for(const f of c)f&&this.removeUrlChangeWithExecMenuOnceListener(f.keyList);}},u=()=>{const d=c.every(f=>f?f.checkMenuExec():true);if(p(false),d){const f=e();i.handlerResult(d,f);}};u();for(const d of c)if(d){const f=this.addValueChangeListener(d.keyList[0],()=>{u();});if(s.push(f),a){const S=()=>{d.reload();};this.removeUrlChangeWithExecMenuOnceListener(d.keyList),this.addUrlChangeWithExecMenuOnceListener(d.keyList,S);}}return {clear(){for(const d of c)d?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener();},execDestoryFnAndClear(){for(const d of c)d?.execDestoryFnAndClear();p(false);},removeValueChangeListener(){for(const d of c)d?.removeValueChangeListener();p(true);}}},async execMoreMenuOnce(t,e,n=false,o=false){return await this.execMoreMenu(t,e,n,true,o)},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),K.removeValueChangeListener(t)},onceExec(t,e,n=false){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||n&&(Array.isArray(t)?t:[t]).findIndex(a=>{if(!!!l.getValue(a))return  true})!==-1||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(t)}},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${we}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];const a=t.findIndex(i=>(typeof i.isBottom=="function"?i.isBottom():!!i.isBottom)&&i.id==="script-version")!==-1;!n&&!a&&t.push(...X.getDefaultBottomContentConfig());const c=q.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:i=>{i.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:i=>{i(),this.$data.$panel=null;}},width:G.setting.width,height:G.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=c,this.$data.panelContent=t,o||this.registerConfigSearch({$panel:c,content:t}),{$panel:c,content:t}},registerConfigSearch(t){const{$panel:e,content:n}=t,o=(x,g)=>{if(typeof t.translateCallback=="function")return t.translateCallback(x,g);if(typeof g=="object"&&g)for(const w in g)x=x.replaceAll(`{{${w}}}`,g[w]);return x},a=async(x,g)=>{if(x==null)return;const w=await g(x);return w&&typeof w.isFind=="boolean"&&w.isFind?w.data:await a(w.data,g)},c=(x,g)=>{const w=new IntersectionObserver($=>{$.forEach(N=>{N.isIntersecting&&(g?.(),w.disconnect());});},{root:null,threshold:1});w.observe(x),x.scrollIntoView({behavior:"smooth",block:"center"});},i=x=>{const g="pops-flashing";m.onAnimationend(x,()=>{x.classList.remove(g);}),x.classList.add(g);},s=x=>{if(x.type==="dblclick"&&S)return;m.preventEvent(x);const g=q.alert({title:{text:o("搜索配置"),position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${o("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:G.settingMiddle.width,height:"auto",drag:true,style:`
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
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${t.searchDialogStyle??""}
				`}),w=g.$shadowRoot.querySelector(".search-config-text"),$=g.$shadowRoot.querySelector(".search-result-wrapper");w.focus();const N=()=>{m.empty($);},I=T=>{const R=b.queryProperty(T,V=>V?.next?{isFind:false,data:V.next}:{isFind:true,data:V}),A=m.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${R.matchedData?.path}</div>
							<div class="search-result-item-description">${R.matchedData?.description??""}</div>
						`}),M=q.fn.PanelHandlerComponents();return m.on(A,"click",()=>{const O=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[T.index];if(!O){y.error(o("左侧项下标{{index}}不存在",{index:T.index}));return}O.scrollIntoView({behavior:"smooth",block:"center"}),O.click(),a(T.next,async k=>{if(k?.next){const D=await m.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(B=>{const H=Reflect.get(B,M.$data.nodeStoreConfigKey);return typeof H=="object"&&H!=null&&H.text===k.name}),2500);if(D)D.click();else return y.error(o("未找到对应的二级菜单")),{isFind:true,data:k};return {isFind:false,data:k.next}}else {const D=await m.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(B=>Reflect.get(B,M.$data.nodeStoreConfigKey)===k.matchedData?.formConfig),2500);if(D){c(D);const B=D.closest(".pops-panel-forms-fold[data-fold-enable]");B&&(B.querySelector(".pops-panel-forms-fold-container").click(),await b.sleep(500)),c(D,()=>{i(D);});}else y.error(o("未找到对应的菜单项"));return {isFind:true,data:k}}});}),A},F=T=>{const R=new RegExp(T,"i"),A=[],M=(O,k)=>{for(let D=0;D<O.length;D++){const B=O[D],H=B.views;if(H&&Array.isArray(H)){const J=b.deepClone(k);if(B.type==="deepMenu"){const ee=b.queryProperty(J,te=>te?.next?{isFind:false,data:te.next}:{isFind:true,data:te});ee.next={name:B.text};}M(H,J);}else {let J,ee;if(B.type==="own"){let W=Reflect.get(B.attributes||{},Ye);W&&(typeof W=="function"&&(W=W()),typeof W.text=="string"&&(J=W.text),typeof W.desc=="string"&&(ee=W.desc));}else J=B.text,ee=Reflect.get(B,"description");const te=[J,ee],Me=te.findIndex(W=>{if(typeof W=="string")return W.match(R)});if(Me!==-1){const W=b.deepClone(k),Re=b.queryProperty(W,j=>j?.next?{isFind:false,data:j.next}:{isFind:true,data:j});Re.next={name:J,matchedData:{path:"",formConfig:B,matchedText:te[Me],description:ee}};const Be=[];b.queryProperty(W,j=>{const ve=j?.name;return typeof ve=="string"&&ve.trim()!==""&&Be.push(ve),j?.next?{isFind:false,data:j.next}:{isFind:true,data:j}});const Fe=Be.join(v.escapeHtml(" - "));Re.next.matchedData.path=Fe,A.push(W);}}}};for(let O=0;O<n.length;O++){const k=n[O];if(!k.views||k.isBottom&&k.id==="script-version")continue;const D=k.views;if(D&&Array.isArray(D)){let B=k.title;typeof B=="function"&&(B=B()),M(D,{index:O,name:B});}}const V=document.createDocumentFragment();for(const O of A){const k=I(O);V.appendChild(k);}N(),$.append(V);};m.on(w,"input",b.debounce(T=>{m.preventEvent(T);const R=m.val(w).trim();if(R===""){N();return}F(R);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(x=>{m.on(x,"dblclick",s);});const u=new WeakMap;let d=false,f,S=false;m.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(x,g)=>{S=true,clearTimeout(f),f=void 0,d&&u.has(g)?(d=false,u.delete(g),s(x)):(f=setTimeout(()=>{d=false;},200),d=true,u.set(g,x));},{capture:true}),e.$shadowRoot.appendChild(m.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(t){if(Array.isArray(t))if(t.length>1){const e=t.sort();return JSON.stringify(e)}else return t[0];else return t},getDynamicValue(t,e){let n=false,o=e;const a=this.addValueChangeListener(t,(c,i)=>{o=i;});return {get value(){return n||(n=true,o=l.getValue(t,e)),o},destory(){l.removeValueChangeListener(a);}}}};class ke{__href__;get __href(){return this.__href__||globalThis.location.href}__origin={value:void 0,type:"same"};__protocol={value:void 0,type:"same"};__host={value:void 0,type:"same",hasPort:false};__pathname={value:void 0,type:"same"};__searchParams={value:new Set};otherInstResultWithOr=false;constructor(e){typeof e=="string"&&this.href(e);}href(e){return this.__href__=e,this}origin(e){return this.__origin={value:e,type:"same"},this}originStartsWith(e){return this.__origin={value:e,type:"startsWith"},this}originEndsWith(e){return this.__origin={value:e,type:"endsWith"},this}originIncludes(e){return this.__origin={value:e,type:"includes"},this}originMatch(e){return this.__origin={value:e,type:"match"},this}protocol(e){return this.__protocol={value:e,type:"same"},this}protocolStartsWith(e){return this.__protocol={value:e,type:"startsWith"},this}protocolEndsWith(e){return this.__protocol={value:e,type:"endsWith"},this}protocolIncludes(e){return this.__protocol={value:e,type:"includes"},this}protocolMatch(e){return this.__protocol={value:e,type:"match"},this}host(e){return this.__host={value:e,type:"same",hasPort:true},this}hostStartsWith(e){return this.__host={value:e,type:"startsWith",hasPort:true},this}hostEndsWith(e){return this.__host={value:e,type:"endsWith",hasPort:true},this}hostIncludes(e){return this.__host={value:e,type:"includes",hasPort:true},this}hostMatch(e){return this.__host={value:e,type:"match",hasPort:true},this}hostName(e){return this.__host={value:e,type:"same",hasPort:false},this}hostNameStartsWith(e){return this.__host={value:e,type:"startsWith",hasPort:false},this}hostNameEndsWith(e){return this.__host={value:e,type:"endsWith",hasPort:false},this}hostNameIncludes(e){return this.__host={value:e,type:"includes",hasPort:false},this}hostNameMatch(e){return this.__host={value:e,type:"match",hasPort:false},this}pathname(e){return this.__pathname={value:e,type:"same"},this}pathnameStartsWith(e){return this.__pathname={value:e,type:"startsWith"},this}pathnameEndsWith(e){return this.__pathname={value:e,type:"endsWith"},this}pathnameIncludes(e){return this.__pathname={value:e,type:"includes"},this}pathnameMatch(e){return this.__pathname={value:e,type:"match"},this}searchParams(e,n){return this.__searchParams.value.add({name:e,value:n}),this}search(e){return this.__searchParams.value.add({name:"",value:e,type:"same"}),this}searchStartsWith(e){return this.__searchParams.value.add({name:"",value:e,type:"startsWith"}),this}searchEndsWith(e){return this.__searchParams.value.add({name:"",value:e,type:"endsWith"}),this}searchIncludes(e){return this.__searchParams.value.add({name:"",value:e,type:"includes"}),this}searchMatch(e){return this.__searchParams.value.add({name:"",value:e,type:"match"}),this}build(){if(!this.__host.value)throw new TypeError("host or hostName should be required");const e=this.__protocol.value||"https",n=this.__host.value,o=this.__pathname.value||"/";let a=`${e}://${n}${o}`;if(this.__searchParams.value.size>0){const c=[];this.__searchParams.value.forEach(i=>{if(typeof i.name=="string"){let s="";(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")&&(s=i.value.toString()),c.push(`${encodeURIComponent(i.name)}=${encodeURIComponent(s)}`);}}),c.length&&(a+=`?${c.join("&")}`);}return a}or(e){this.otherInstResultWithOr=this.otherInstResultWithOr||this.r();const n=new ke(e);return n.otherInstResultWithOr=this.otherInstResultWithOr,n}r(){if(this.otherInstResultWithOr)return this.otherInstResultWithOr;const e=new URL(this.__href);return [()=>{if(this.__origin.value)if(this.__origin.type==="same"){if(typeof this.__origin.value=="string")return e.origin===this.__origin.value;throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="startsWith"){if(typeof this.__origin.value=="string")return e.origin.startsWith(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="endsWith"){if(typeof this.__origin.value=="string")return e.origin.endsWith(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="includes"){if(typeof this.__origin.value=="string")return e.origin.includes(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="match"){if(this.__origin.value instanceof RegExp)return this.__origin.value.test(e.origin);if(typeof this.__origin.value=="string")return e.origin.match(this.__origin.value);throw new TypeError("origin value should be RegExp or string by type "+this.__origin.type)}else throw new TypeError("origin type should be same or startsWith or endsWith or includes or match");else return  true},()=>{if(this.__protocol.value)if(this.__protocol.type==="same"){if(typeof this.__protocol.value=="string")return e.protocol===this.__protocol.value;throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="startsWith"){if(typeof this.__protocol.value=="string")return e.protocol.startsWith(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="endsWith"){if(typeof this.__protocol.value=="string")return e.protocol.endsWith(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="includes"){if(typeof this.__protocol.value=="string")return e.protocol.includes(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="match"){if(this.__protocol.value instanceof RegExp)return this.__protocol.value.test(e.protocol);if(typeof this.__protocol.value=="string")return e.protocol.match(this.__protocol.value);throw new TypeError("protocol value should be RegExp or string by type "+this.__protocol.type)}else throw new TypeError("protocol type should be same,startsWith,endsWith,includes,match");else return  true},()=>{if(this.__host.value){const o=this.__host.hasPort?e.host:e.hostname;if(this.__host.type==="same"){if(typeof this.__host.value=="string")return this.__host.value===o;throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="startsWith"){if(typeof this.__host.value=="string")return o.startsWith(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="endsWith"){if(typeof this.__host.value=="string")return o.endsWith(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="includes"){if(typeof this.__host.value=="string")return o.includes(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="match"){if(this.__host.value instanceof RegExp)return this.__host.value.test(o);if(typeof this.__host.value=="string")return o.match(this.__host.value);throw new TypeError("host value should be RegExp or string by type "+this.__host.type)}else throw new TypeError("host type should be same,startsWith,endsWith,includes,match")}else return  true},()=>{if(this.__pathname.value)if(this.__pathname.type==="same"){if(typeof this.__pathname.value=="string")return e.pathname===this.__pathname.value;throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="startsWith"){if(typeof this.__pathname.value=="string")return e.pathname.startsWith(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="endsWith"){if(typeof this.__pathname.value=="string")return e.pathname.endsWith(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="includes"){if(typeof this.__pathname.value=="string")return e.pathname.includes(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="match"){if(this.__pathname.value instanceof RegExp)return this.__pathname.value.test(e.pathname);if(typeof this.__pathname.value=="string")return e.pathname.match(this.__pathname.value);throw new TypeError("pathname value should be RegExp or string by type "+this.__pathname.type)}else throw new TypeError("pathname type should be same,startsWith,endsWith,includes,match");else return  true},()=>{let o=true;const a=[];this.__searchParams.value.forEach(c=>{a.push(c);});for(let c=0;c<a.length;c++){const i=a[c];if(i.type)if(i.type==="same"){if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search===i.value.toString();throw new TypeError("search value should be string、number、boolean by type "+i.type)}else if(i.type==="startsWith"){if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search.startsWith(i.value.toString());throw new TypeError("search value should be string、number、boolean by type "+i.type)}else if(i.type==="endsWith"){if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search.endsWith(i.value.toString());throw new TypeError("search value should be string、number、boolean by type "+i.type)}else if(i.type==="includes"){if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search.includes(i.value.toString());throw new TypeError("search value should be string、number、boolean by type "+i.type)}else if(i.type==="match"){if(i.value instanceof RegExp)return i.value.test(e.search);if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search.match(i.value.toString());throw new TypeError("search value should be RegExp、string、number、boolean by type "+i.type)}else throw new TypeError("search type should be same, startsWith, endsWith, includes, match");else if(typeof i.name=="string"){let s=i.value;if(s==null||typeof s=="string"||typeof s=="number"||typeof s=="boolean"){if(s=s?.toString(),!e.searchParams.has(i.name,s)){o=false;break}}else if(s instanceof RegExp){const p=e.searchParams.get(i.name);if(p){if(!s.test(p)){o=false;break}}else {o=false;break}}else throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined")}else if(i.name instanceof RegExp){let s,p;if(e.searchParams.forEach((u,d)=>{!s&&d.match(i.name)&&(s=d,p=u);}),s){let u=i.value;if(u!=null)if(typeof u=="string"||typeof u=="number"||typeof u=="boolean"){if(u=u.toString(),o=u===p,!o)break}else if(u instanceof RegExp)if(p){if(!u.test(p)){o=false;break}}else {o=false;break}else throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined")}else {o=false;break}}else throw new TypeError("searchParams name should be string or RegExp")}return o}].every(o=>o())}}const P={host(t,e){return P.builder(e).host(t)},hostName(t,e){return P.builder(e).hostName(t)},search(t,e){return P.builder(e).search(t)},seachParams(t,e,n){return P.builder(n).searchParams(t,e)},pathname(t,e){return P.builder(e).pathname(t)},protocol(t,e){return P.builder(e).protocol(t)},builder(t){return new ke(t)}},E={isHuaWeiCloudBlog(){return P.builder().originIncludes("huaweicloud.csdn.net").r()},isBlog(){return P.builder().originIncludes("blog.csdn.net").r()},isBlogArticle(){return this.isBlog()&&P.builder().pathnameIncludes("/article/details/").r()},isWenKu(){return P.builder().originIncludes("wenku.csdn.net").r()},isLink(){return P.hostName("link.csdn.net").r()},isSo(){return P.hostName("so.csdn.net").r()},isSoCKnow(){return this.isSo()&&P.builder().pathnameStartsWith("/chat").or().pathnameStartsWith("/so/ai").r()},isDownload(){return P.hostName("download.csdn.net").r()}},Ie={init(){l.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let t=new URLSearchParams(window.location.search);const e="target";if(t.has(e)){let n=t.get(e),o=decodeURIComponent(n);r.success(`跳转链接：${o}`),window.location.href=o;}else r.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(t){y.error("跳转链接失败："+t.message);}}},Xe={init(){l.execMenuOnce("m-csdn-link-jumpRedirect",()=>{Ie.jumpRedirect();});}},et=`/* 右下角的 免费赢华为平板xxxx */
.org-main-content .siderbar-box {
  display: none !important;
}
`,tt=`/* 底部免费抽xxx奖品广告 */
div.siderbar-box,
/* 华为开发者联盟加入社区 */
div.user-desc.user-desc-fix {
  display: none !important;
}
`,Ne={init(){C(tt),l.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),l.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),l.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),l.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),l.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),l.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return r.info("自动展开全文"),[v.addBlockCSS("div.article-show-more"),C(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return r.info("屏蔽云开发者任务挑战活动"),v.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return r.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),v.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return r.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),v.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return r.info("屏蔽底部推荐内容"),v.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return r.info("屏蔽底部更多推荐"),v.addBlockCSS("div.more-article")}},nt={init(){C(et),l.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>Ne.autoExpandContent()),l.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return r.info("【屏蔽】底部加入社区"),v.addBlockCSS(".user-desc")}},ot=`/*.blog_container_aside,
#nav {
	margin-left: -45px;
}
.recommend-right.align-items-stretch.clearfix,
.dl_right_fixed {
	margin-left: 45px;
}*/
`,it=`.ecommend-item-box.recommend-recommend-box,
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
`,be={init(){l.onceExec("csdn-blog-blockCSS",()=>this.addCSS()),l.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),l.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),l.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),l.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),l.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),l.execMenuOnce("csdn-blog-blockBottomAskAIToolbar",()=>this.blockBottomAskAIToolbar()),l.execMenuOnce("csdn-blog-blockRunnerBox",()=>this.blockRunnerBox());},addCSS(){return r.info("添加屏蔽CSS和功能CSS"),[C(it),C(ot)]},shieldTopToolbar(){return r.info("【屏蔽】顶部工具栏"),v.addBlockCSS("#toolbarBox","#csdn-toolbar")},shieldLoginDialog(){return r.info("【屏蔽】登录弹窗"),v.addBlockCSS(".passport-login-container")},shieldLeftBlogContainerAside(){return r.info("【屏蔽】左侧博客信息"),v.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return r.info("【屏蔽】右侧目录信息"),v.addBlockCSS("#rightAsideConcision","#rightAside")},shieldBottomFloatingToolbar(){return r.info("屏蔽底部悬浮工具栏"),v.addBlockCSS("#toolBarBox")},blockBottomAskAIToolbar(){return r.info("【屏蔽】底部的AI伴读"),v.addBlockCSS('[class*="Container_"]:has([class^="chatMain"])')},blockRunnerBox(){return r.info("【屏蔽】runner-box"),v.addBlockCSS(".runner-box")}},We={init(){be.init(),m.onReady(()=>{l.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),l.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},removeClipboardHijacking(){r.info("拦截-复制的小尾巴"),m.remove(".article-copyright"),_.articleType&&(_.articleType=0),_?.csdn?.copyright?.textData&&(_.csdn.copyright.textData=""),_?.csdn?.copyright?.htmlData&&(_.csdn.copyright.htmlData="");},unBlockCopy(){r.info("劫持-禁止复制"),m.on(document,"click",".hljs-button",function(e,n){m.preventEvent(e);const o=n.closest(".hljs")||n.closest("pre"),a=n.parentElement,c=o?.querySelector("code")||a.querySelector("code")||a,i=c.innerText;r.info("点击复制按钮复制内容："+(i.length>8?i.substring(0,8)+"...":i),c),b.copy(i),n.setAttribute("data-title","复制成功");},{capture:true});const t=new b.LockFunction(function(e){const n=e.target;if(n.localName!=="pre")return;const o=n.querySelector(".hljs-button");o&&o.setAttribute("data-title","复制");});m.on(document,["mouseenter","mouseleave"],function(e){t.run(e);},{capture:true}),m.waitNode("#content_views").then(e=>{_.$&&_.$("#content_views")?.unbind("copy"),m.on(e,"copy",function(n){m.preventEvent(n);const a=_.getSelection()?.toString();return r.info("Ctrl+C复制内容："+(a.length>8?a.substring(0,8)+"...":a)),b.copy(a),false},{capture:true});}),m.waitNode(".hljs-button").then(()=>{setTimeout(()=>{Oe(".hljs-button").forEach(e=>{e.removeAttribute("onclick"),e.removeAttribute("data-report-click"),e.setAttribute("data-title","复制");});},250);});}},L={waitRemove(...t){t.forEach(e=>{m.waitNodeList(e).then(n=>{n.forEach(o=>o.remove());});});},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),C(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof fe=="function"?fe(t.keyName):"";typeof e=="string"&&e?C(e):L.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,m.onReady(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()}},rt={init(){l.execMenuOnce("m-csdn-blog-blockBottomArticle",()=>this.blockBottomArticle()),l.execMenuOnce("m-csdn-blog-removeResourceArticle",()=>this.removeResourceArticle()),l.execMenuOnce("m-csdn-blog-openNewTab",()=>this.openNewTab()),m.onReady(()=>{l.execMenuOnce("m-csdn-blog-refactoringRecommendation",t=>this.refactoringRecommendation());});},blockBottomArticle(){return r.info("【屏蔽】底部文章"),L.addBlockCSS("#recommend")},async refactoringRecommendation(){const t=function(){Oe(".container-fluid").forEach(a=>{let c="",i="",s="",p="";if(a.hasAttribute("data-url")){if(c=a.getAttribute("data-url"),i=a.querySelector(".recommend_title div.left")?.innerHTML,!a.querySelector(".text"))return;s=a.querySelector(".text")?.innerHTML,a.querySelectorAll(".recommend-img").length&&a.querySelectorAll(".recommend-img").forEach(d=>{p+=d.innerHTML;});}else c=a.querySelector("a[data-type]").getAttribute("href"),i=a.querySelector(".recommend_title div.left").innerHTML,s=a.querySelector(".text").innerHTML;const u=new URL(c);u.host==="download.csdn.net"||u.host==="www.iteye.com"&&u.pathname.match(/^\/resource/gi)?i='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+i:u.origin.match(/edu.csdn.net/gi)&&(i='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+i),a.setAttribute("class","GM-csdn-dl"),a.setAttribute("data-url",c),a.innerHTML=`<div class="GM-csdn-title"><div class="left">${i}</div></div><div class="GM-csdn-content">${s}</div><div class="GM-csdn-img">${p}</div>`,a.addEventListener("click",function(){window.location.href=c;});});},e=new b.LockFunction(t,50),n=await m.waitNode("#recommend");r.info("重构底部推荐");const o=b.mutationObserver(n,{config:{childList:true,subtree:true,attributes:true},immediate:true,callback:()=>{e.run();}});return [()=>{o.disconnect();}]},removeResourceArticle(){return r.info("移除资源下载的文章"),L.addBlockCSS('.container-fluid:has(a[href*="https://download.csdn.net/"])','.container-fluid[data-url*="https://download.csdn.net/"]','.GM-csdn-dl[data-url*="https://download.csdn.net/"]')},openNewTab(){return r.info("新标签页打开"),m.on(document,"click",[".container-fluid",".GM-csdn-dl"],(e,n)=>{m.preventEvent(e);const o=n.getAttribute("data-url");typeof o=="string"?(r.info(`新标签页打开：${o}`),window.open(o,"_blank")):y.error("未获取到data-url属性");},{capture:true}).off}},ue={isSuccessResponse(t){return t==null?false:(typeof t=="string"&&(t=b.toJSON(t)),t?.code===200)}},he={async folderListWithCheck(t){const e=await Z.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:t},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":b.getRandomPCUA()}});r.info(e);const n=b.toJSON(e.data.responseText);if(!e.status||!ue.isSuccessResponse(e.data.responseText)){r.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?y.error(n.msg):y.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(t){const e=await Z.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:t,headers:{"Content-Type":"application/json","User-Agent":b.getRandomPCUA()},allowInterceptConfig:false});if(r.info(e),!e.status||!ue.isSuccessResponse(e.data.responseText)){r.error("添加收藏失败，请求异常",e),y.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(t){const e=await Z.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:t},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":b.getRandomPCUA()}});if(r.info(e),!e.status||!ue.isSuccessResponse(e.data.responseText)){r.error("检查收藏夹状态失败，请求异常"),y.error("检查收藏夹状态失败，请求异常");return}return b.toJSON(e.data.responseText).data},async createFolder(t){const e=await Z.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:t,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":b.getRandomPCUA()},allowInterceptConfig:false});if(r.info(e),!e.status||!ue.isSuccessResponse(e.data.responseText)){y.error("创建收藏夹失败");return}return b.toJSON(e.data.responseText).data}},at={init(){l.execMenuOnce("m-csdn-blog-blockBottomToolbar",()=>this.blockBottomToolbar()),l.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),m.onReady(()=>{l.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>this.optimizationCollectButton());});},blockBottomToolbar(){return r.info("【屏蔽】底部工具栏"),L.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return r.info("底部工具栏常驻"),C(`
    #operate {
        bottom: 0 !important;
    }
    `)},async optimizationCollectButton(){r.info("优化收藏按钮");const t=await m.waitNode("#operate .collect-btn",1e4);if(!t)return;const e=m.on(t,"click",async n=>{m.preventEvent(n);const o=t.querySelector(".collect"),a=t.querySelector(".uncollect"),c=await he.folderListWithCheck(window.location.origin+window.location.pathname);if(!c)return;const i=[];c.forEach(d=>{d.IsFavorite&&i.push(d.ID);});const s=d=>{let f=d.ID,S=m.createElement("li",{className:"csdn-collection-item",innerHTML:`
                <div class="csdn-collection-item_left">
                    <div class="csdn-collection-item_title">
                        <span class="title-m">${d.Name}</span>
                    </div>
                    <span class="csdn-collection-item_ext">
                        <span class="csdn-collection-item_length">${d.FavoriteNum}条内容</span>
                        <span class="dot">・</span>
                        <span class="csdn-collection-controls">${d.IsPrivate?"私密":"公开"}</span>
                    </span>
                </div>
                <span class="collect-btn">${d.IsFavorite?"已收藏":"收藏"}</span>
            `},{"data-is-collect":d.IsFavorite});S.querySelector(".title-m");let x=S.querySelector(".csdn-collection-item_length");S.querySelector(".csdn-collection-controls");let g=S.querySelector(".collect-btn");return m.on(g,"click",async w=>{let $=_.articleDetailUrl;$==null&&($=window.location.origin+window.location.pathname);let N=_.articleId;if(N==null){r.error("获取文章ID失败"),y.error("获取文章ID失败");return}let I=_.username;if(I==null){r.error("获取文章作者失败"),y.error("获取文章作者失败");return}let F=_.articleTitle;if(F==null&&(F=document.title.replace(/-CSDN博客$/,"")),F==null){r.error("获取文章标题失败"),y.error("获取文章标题失败");return}let T=_.articleDesc;if(T==null){const M=me("meta[name='description']");M&&(T=M.getAttribute("content"));}if(T==null){r.error("获取文章描述失败"),y.error("获取文章描述失败");return}const R=[...i];let A=y.loading("处理中...");try{let M=await he.checkFavoriteByUrl($);if(M==null)return;r.info(f,M);let V=!M[f];if(V?(r.info("添加收藏"),R.push(f)):(r.info("取消收藏"),R.splice(R.indexOf(f),1)),!await he.addFavoriteInFolds({author:I,url:$,source:"blog",sourceId:N,title:F,description:T,fromType:"PC",username:d.Username,folderIdList:R}))return;const k=await he.checkFavoriteByUrl($);if(k==null)return;r.info(f,k),S.setAttribute("data-is-collect",(!!k[f]).toString()),V?k[f]?(r.success("收藏成功"),y.success("收藏成功"),m.text(g,"已收藏"),i.includes(f)||i.push(f),d.FavoriteNum++):(r.error("收藏失败",k,f),y.error("收藏失败")):k[f]?(r.error("取消收藏失败",k,f),y.error("取消收藏失败")):(r.success("取消收藏成功"),y.success("取消收藏成功"),m.text(g,"收藏"),i.includes(f)&&i.splice(i.indexOf(f),1),d.FavoriteNum--),m.text(x,`${d.FavoriteNum}条内容`),Object.values(k).find(B=>B)?(m.show(o,!1),m.hide(a,!1)):(m.show(a,!1),m.hide(o,!1)),A.close();}catch(M){r.error(M);}finally{A.close();}}),S},u=q.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:G.setting.width,height:G.setting.height,drag:true,mask:{enable:true},style:`
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
        `}).$shadowRoot.querySelector(".csdn-collection-items");c.forEach(d=>{const f=s(d);u.appendChild(f);});},{capture:true});return [()=>{e.off();}]}},st={init(){l.execMenuOnce("m-csdn-blog-blockComment",()=>this.blockComment()),l.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight());},blockComment(){return r.info("【屏蔽】评论区"),L.addBlockCSS("#comment")},notLimitCommentMaxHeight(){return r.info("不限制评论区的最大高度"),C(`
        #comment{
          max-height: none !important;
        }
      `)}},lt={init(){st.init(),rt.init(),at.init(),l.execMenuOnce("m-csdn-blog-blockTopToolbar",()=>this.blockTopToolbar()),l.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),l.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),l.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),l.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),m.onReady(()=>{l.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{We.unBlockCopy();});});},blockTopToolbar(){return r.info("屏蔽顶部Toolbar"),[v.addBlockCSS("#csdn-toolbar"),C(`
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
			`)]},removeAds(){return r.info("去除广告"),[v.waitRemove(".passport-login-container"),v.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),v.waitRemove(".add-firstAd"),v.waitRemove("div.feed-Sign-weixin"),v.waitRemove("div.ios-shadowbox")]},allowSelectText(){return r.info("允许选择内容"),C(`
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
    `)},autoExpandContent(){return r.info("自动展开"),C(`
    #content_views pre.set-code-hide,
    .article_content{
      height: 100% !important;
      overflow: auto !important;
    }
    `)},notLimitCodePreMaxHeight(){return r.info("不限制代码块的最大高度"),C(`
    pre{
        max-height: unset !important;
    }
    `)}},ct=`/* 右下角的买一年送3个月的广告图标 */
.blind_box {
  display: none !important;
}
`,dt={init(){C(ct),l.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return r.info("【屏蔽】底部工具栏"),v.addBlockCSS(".page-container > div.btn")}},ut=`/* 右下角悬浮图标 买1年送3个月 */
.page-container .blind_box,
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */
.page-container .btn .ml-12,
/* 登录弹窗 */
.passport-login-container,
/* 通用广告className匹配 */
.ads {
  display: none !important;
}
`,ht={init(){l.execMenuOnce("m-csdn-download-removeAds",()=>C(ut)),l.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return r.info("自动展开资源介绍"),[v.addBlockCSS("label.unfold-font"),C(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},pt=`.view_comment_box,
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
`,ft=`#mainBox {
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
`,mt={init(){l.onceExec("m-csdn-blog-removeAds",()=>this.addCSS()),l.execMenuOnce("m-csdn-blog-blockBottomAskAIToolbar",()=>be.blockBottomAskAIToolbar());},addCSS(){return [C(pt),C(ft)]}},gt={init(){mt.init();}},De={init(){E.isLink()?(r.info("Router: 中转链接"),Xe.init()):E.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),nt.init()):E.isBlog()?(r.info("Router: 博客"),gt.init(),E.isBlogArticle()&&(r.info("Router: 文章"),lt.init())):E.isWenKu()?(r.info("Router: 文库"),dt.init()):E.isDownload()?(r.info("Router: 资源下载"),ht.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},bt=`#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {
  max-height: unset !important;
  height: auto !important;
  overflow: auto !important;
}

.forbid {
  user-select: text !important;
}
`,yt=`/* wenku顶部横幅 */
#app > div > div.main.pb-32 > div > div.top-bar,
/* 底部展开全文 */
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open,
/* 全屏红包雨 */
#csdn-redpack {
  display: none !important;
}
`,xt={init(){C(bt),C(yt),l.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),l.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),l.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return r.info("【屏蔽】资源推荐"),v.addBlockCSS("#recommend")},shieldRightUserInfo(){return r.info("【屏蔽】右侧用户信息"),v.addBlockCSS(".layout-right")},shieldRightToolBar(){return r.info("【屏蔽】右侧悬浮工具栏"),v.addBlockCSS(".csdn-side-toolbar")}},vt={init(){l.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),l.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),l.execMenuOnce("csdn-blog-blockGitCodeLinkCard",()=>this.blockGitCodeLinkCard());},shieldBottomSkillTree(){return r.info("【屏蔽】底部xx技能树"),v.addBlockCSS("#treeSkill")},shieldArticleSearchTip(){return r.info("【屏蔽】选中文字悬浮栏"),v.addBlockCSS("#articleSearchTip")},blockGitCodeLinkCard(){return r.info("【屏蔽】gitcode链接卡片"),v.addBlockCSS('a.has-card[href*="gitcode.com"]',".t2-card-container")}},wt=`.main_father {
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
`,Ct={init(){l.execMenuOnce("csdn-blog-blockComment",()=>this.blockComment()),m.onReady(()=>{l.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},blockComment(){return r.info("【屏蔽】评论区"),L.addBlockCSS("#pcCommentBox")},restoreComments(){r.info("恢复评论到正确位置-第一条评论"),m.waitNode(".first-recommend-box").then(t=>{const e=me(".recommend-box.insert-baidu-box.recommend-box-style");e.insertBefore(t,e.firstChild);}),r.info("恢复评论到正确位置-第二条评论"),m.waitNode(".second-recommend-box").then(t=>{const e=me(".recommend-box.insert-baidu-box.recommend-box-style");e.insertBefore(t,e.firstChild);});}},_t={init(){l.execMenuOnce("csdn-blog-blockBottomRecommendArticle",()=>this.blockBottomRecommendArticle()),l.execMenuOnce("csdn-blog-identityCSDNDownload",()=>this.identityCSDNDownload()),l.execMenuOnce("csdn-blog-removeResourceDownloadArticle",()=>this.removeResourceDownloadArticle());},blockBottomRecommendArticle(){return r.info("【屏蔽】底部文章"),L.addBlockCSS("main > div.recommend-box")},identityCSDNDownload(){return r.info("标识CSDN下载的链接"),C(`
        .recommend-item-box[data-url*='https://download.csdn.net/'] .content-box{
            border: 2px solid red;
        }
    `)},removeResourceDownloadArticle(){return r.info("移除资源下载的文章"),L.addBlockCSS(".recommend-item-box[data-url*='https://download.csdn.net/']")}},St={init(){l.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),t=>!l.getValue(t[0]),true),l.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),l.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),l.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),l.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),l.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),l.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop());},shieldRightToolbar(){return r.info("启用/关闭 右侧工具栏"),L.addBlockCSS("div.csdn-side-toolbar",".article-aside-container")},shieldCreativeCenter(){return r.info("【屏蔽】创作中心"),L.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return r.info("【屏蔽】显示/隐藏侧栏"),L.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return r.info("【屏蔽】新手引导"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return r.info("【屏蔽】客服"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return r.info("【屏蔽】举报"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return r.info("【屏蔽】返回顶部"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},kt={init(){St.init(),l.execMenuOnce(["csdn-blog-coverRightToolOffSet","csdn-blog-rightToolbarTopOffset","csdn-blog-rightToolbarRightOffset"],t=>{if(t.value[0])return this.initRightToolbarOffset(t.value[1],t.value[2])}),m.onReady(()=>{l.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){r.info("【添加】前往评论按钮，在返回顶部的上面");let t=document.createElement("a");t.className="option-box",t.setAttribute("data-type","gorecommand"),t.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,t.addEventListener("click",function(){let e=document.querySelector("#toolBarBox");if(!e||!e.getClientRects().length){let i=me("#pcCommentBox");if(i&&i.getClientRects().length)e=i;else {r.error("评论区处于隐藏状态");return}}r.info("滚动到评论");let n=e.getBoundingClientRect().top+window.scrollY,o=document.querySelector("#csdn-toolbar"),a=window.getComputedStyle(o),c=o.clientHeight-parseFloat(a.paddingTop)-parseFloat(a.paddingBottom);window.scrollTo({top:n-c-8,left:0,behavior:"smooth"});}),m.waitNode(".csdn-side-toolbar").then(()=>{let e=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");e.parentElement.insertBefore(t,e.nextSibling);});},async initRightToolbarOffset(t,e){return r.info("初始化右侧工具栏的偏移（top、right）"),C(`
    .csdn-side-toolbar{
      left: unset !important;
      top: ${t}px !important;
      right: ${e}px !important;
    }
    `)}},Tt={init(){l.execMenuOnce("csdn-blog-ai-blockRightToolbar",()=>this.blockRightToolbar()),l.execMenuOnce("csdn-blog-ai-blockRightToolbarCatalogue",()=>this.blockRightToolbarCatalogue()),l.execMenuOnce("csdn-blog-ai-blockRightToolbarLike",()=>this.blockRightToolbarLike()),l.execMenuOnce("csdn-blog-ai-blockRightToolbarComment",()=>this.blockRightToolbarComment()),l.execMenuOnce("csdn-blog-ai-blockRightToolbarCollect",()=>this.blockRightToolbarCollect()),l.execMenuOnce("csdn-blog-ai-blockRightToolbarShare",()=>this.blockRightToolbarShare()),l.execMenuOnce("csdn-blog-ai-blockRightToolbarMore",()=>this.blockRightToolbarMore());},blockRightToolbar(){return r.info("【屏蔽】右侧工具栏"),L.addBlockCSS(".article-aside-container")},blockRightToolbarCatalogue(){return r.info("【屏蔽】目录"),L.addBlockCSS(".article-aside-container .sidebar-item.groupfile")},blockRightToolbarLike(){return r.info("【屏蔽】点赞"),L.addBlockCSS(".article-aside-container .sidebar-item.islike")},blockRightToolbarComment(){return r.info("【屏蔽】评论"),L.addBlockCSS(".article-aside-container .sidebar-item.go-side-comment")},blockRightToolbarCollect(){return r.info("【屏蔽】收藏"),L.addBlockCSS(".article-aside-container .sidebar-item#sidebar-collect")},blockRightToolbarShare(){return r.info("【屏蔽】分享"),L.addBlockCSS(".article-aside-container .sidebar-item#tool-share")},blockRightToolbarMore(){return r.info("【屏蔽】..."),L.addBlockCSS(".article-aside-container .sidebar-item#sidebar-more")}},Mt={init(){Tt.init(),l.execMenuOnce(["csdn-blog-ai-coverRightToolOffSet","csdn-blog-ai-coverRightToolOffSet-top","csdn-blog-ai-coverRightToolOffSet-right"],t=>{if(t.value[0])return this.coverRightToolOffSet(t.value[1],t.value[2])});},async coverRightToolOffSet(t,e){return r.info("覆盖右侧工具栏的偏移（top、right）"),C(`
    #mainBox .article-aside-container{
      left: unset !important;
      top: ${t}px !important;
      right: ${e}px !important;
    }
    `)}},Rt={init(){vt.init(),Ct.init(),_t.init(),kt.init(),Mt.init(),l.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),l.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),l.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),l.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),m.onReady(()=>{l.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();});});},clickPreCodeAutomatically(){r.info("点击代码块自动展开"),document.addEventListener("click",function(t){let e=t.target;e.localName==="pre"&&(e.style.setProperty("height","auto"),e.querySelector(".hide-preCode-box")?.remove());});},articleCenter(){r.info("全文居中");let t=[C(wt)];return t.push(be.shieldRightDirectoryInformation()),t.push(C(`
      #mainBox {
        margin-right: 0px;
      }
      `)),t.push(be.shieldLeftBlogContainerAside()),t.push(C(`
      #mainBox {
        margin-left: 0px;
      }`)),t.push(C(`
    html body .main_father #mainBox{
      padding-right: 0px !important;
    }
    .article-aside-container{
      left: unset !important;
      right: 150px !important;
    }
    `)),t},autoExpandCodeContent(){return r.info("自动展开代码块"),[v.addBlockCSS("pre.set-code-hide .hide-preCode-box"),C(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return r.info("自动展开全文"),C(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},allowSelectContent(){return r.info("允许选择内容"),C(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Bt="",Et=`/* 红包雨 */
#csdn-redpack,
/* 顶部 购会员横幅 */
.page-container .top-bar,
/* 底部 购会员横幅 */
.page-container .fix-bottom-bar {
  display: none !important;
}
`,At={init(){C(Et),C(Bt);}},Dt=`/* 顶部工具栏右边的 会员 */
#csdn-toolbar .toolbar-btn > a[href*="mall.csdn.net/vip"],
/* 顶部工具栏右边的 VIP抢千元豪礼 */
#csdn-toolbar a.toolbar-btn[href*="mall.csdn.net/vip"] {
  display: none !important;
}
`,Le={init(){C(Dt),E.isLink()?(r.info("Router: 中转链接"),Ie.init()):E.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),Ne.init()):E.isBlog()?(r.info("Router: 博客"),We.init(),E.isBlogArticle()&&(r.info("Router: 帖子"),Rt.init())):E.isWenKu()?(r.info("Router: 文库"),xt.init()):E.isDownload()?(r.info("Router: 下载"),At.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},ye=function(t,e,n,o,a,c,i){const s={text:t,type:"select",description:c,attributes:{},props:{},getValue(){return this.props[Q].get(e,n)},callback(p){if(p==null)return;const u=p.value;if(r.info(`选择：${p.text}`),typeof a=="function"&&a(p))return;this.props[Q].set(e,u);},data:o};return Reflect.set(s.attributes,se,e),Reflect.set(s.attributes,le,n),Te.initComponentsStorageApi("select",s,{get(p,u){return l.getValue(p,u)},set(p,u){l.setValue(p,u);}}),s},pe=function(t,e,n,o,a,c,i,s,p,u){const d={text:t,type:"slider",description:s,attributes:{},props:{},getValue(){return this.props[Q].get(e,n)},getToolTipContent(f){return typeof i=="function"?i(f):`${f}`},callback(f,S){this.props[Q].set(e,S);},min:o,max:a,step:p};return Reflect.set(d.attributes,se,e),Reflect.set(d.attributes,le,n),Te.initComponentsStorageApi("slider",d,{get(f,S){return l.getValue(f,S)},set(f,S){l.setValue(f,S);}}),d},Te={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new _e.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let o;this.hasStorageApi(t)?o=this.getStorageApi(t):o=n,this.setComponentsStorageApiProperty(e,o);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,Q,e);}},h=function(t,e,n=false,o,a,c,i,s,p){const u={text:t,type:"switch",description:a,disabled:i,attributes:{},props:{},getValue(){return this.props[Q].get(e,n)},callback(d,f){const S=!!f;if(r.success(`${S?"开启":"关闭"} ${t}`),typeof o=="function"&&o(d,S))return;this.props[Q].set(e,S);},afterAddToUListCallBack:(...d)=>{}};return Reflect.set(u.attributes,se,e),Reflect.set(u.attributes,le,n),Te.initComponentsStorageApi("switch",u,{get(d,f){return l.getValue(d,f)},set(d,f){l.setValue(d,f);}}),u},Lt={id:"m-panel-blog",title:"博客",isDefault(){return E.isBlog()},views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[h("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[h("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),h("【屏蔽】顶部工具栏","m-csdn-blog-blockTopToolbar",false),h("【屏蔽】评论区","m-csdn-blog-blockComment",false),h("【屏蔽】底部文章","m-csdn-blog-blockBottomArticle",false),h("【屏蔽】底部工具栏","m-csdn-blog-blockBottomToolbar",false),h("【屏蔽】底部的AI伴读","m-csdn-blog-blockBottomAskAIToolbar",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[h("允许选择内容","m-csdn-blog-allowSelectText",true,void 0,"解除文字选中限制"),h("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开，包括：内容、代码块"),h("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",views:[{text:"",type:"container",views:[h("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[h("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),h("移除资源下载的文章","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),h("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",views:[{type:"container",text:"",views:[h("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),h("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]},$t={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ye("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{r.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ye("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),h("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Vt={id:"m-panel-download",title:"资源",isDefault(){return E.isDownload()},views:[{text:"功能",type:"container",views:[h("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"布局屏蔽",type:"container",views:[h("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]},Ot={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return E.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[h("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"布局屏蔽",type:"container",views:[h("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},It={id:"m-panel-link",title:"链接",isDefault(){return E.isLink()},views:[{text:"功能",type:"container",views:[h("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},Nt={id:"panel-so",title:"搜索",isDefault(){return E.isSo()},views:[{text:"C知道-功能",type:"container",views:[h("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},Wt={id:"m-panel-wenku",title:"文库",isDefault(){return E.isWenKu()},views:[{text:"布局屏蔽",type:"container",views:[h("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},Pt={id:"panel-blog",title:"博客",isDefault(){return E.isBlog()},views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[h("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),h("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[h("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),h("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false),h("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),h("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),h("【屏蔽】评论区","csdn-blog-blockComment",false),h("【屏蔽】底部文章","csdn-blog-blockBottomRecommendArticle",false),h("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false),h("【屏蔽】底部的AI伴读","csdn-blog-blockBottomAskAIToolbar",false),h("【屏蔽】runner-box","csdn-blog-blockRunnerBox",true)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",views:[{text:"功能",type:"container",views:[h("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加")]},{text:"坐标偏移",type:"container",views:[h("启用","csdn-blog-coverRightToolOffSet",false),pe("top偏移","csdn-blog-rightToolbarTopOffset",140,0,Math.max(document.documentElement.clientHeight/2,400),void 0,t=>`当前：${t}px，默认：140px`),pe("right偏移","csdn-blog-rightToolbarRightOffset",90,0,Math.max(document.documentElement.clientWidth/2,400),void 0,t=>`当前：${t}px，默认：90px`)]},{text:"屏蔽",type:"container",views:[h("【屏蔽】右侧工具栏","csdn-blog-rightToolbarEnable",false),h("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),h("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),h("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),h("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),h("【屏蔽】举报","csdn-blog-rightToolbarReport",false),h("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"右侧悬浮工具栏（AI助读版）",type:"deepMenu",views:[{text:"坐标偏移",type:"container",views:[h("启用","csdn-blog-ai-coverRightToolOffSet",false),pe("top偏移","csdn-blog-ai-coverRightToolOffSet-top",48,0,Math.max(document.documentElement.clientHeight/2,400),void 0,t=>`当前：${t}px，默认：48px`),pe("right偏移","csdn-blog-ai-coverRightToolOffSet-right",150,0,Math.max(document.documentElement.clientWidth/2,400),void 0,t=>`当前：${t}px，默认：150px`)]},{text:"屏蔽",type:"container",views:[h("【屏蔽】右侧工具栏","csdn-blog-ai-blockRightToolbar",false),h("【屏蔽】目录","csdn-blog-ai-blockRightToolbarCatalogue",false),h("【屏蔽】点赞","csdn-blog-ai-blockRightToolbarLike",false),h("【屏蔽】评论","csdn-blog-ai-blockRightToolbarComment",false),h("【屏蔽】收藏","csdn-blog-ai-blockRightToolbarCollect",false),h("【屏蔽】分享","csdn-blog-ai-blockRightToolbarShare",false),h("【屏蔽】...","csdn-blog-ai-blockRightToolbarMore",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[h("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),h("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),h("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),h("全文居中","csdn-blog-articleCenter",true,void 0,"自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中"),h("允许选择内容","csdn-blog-allowSelectContent",true,void 0,"解除文字选中限制")]},{text:"屏蔽",type:"container",views:[h("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),h("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记"),h("【屏蔽】gitcode链接卡片","csdn-blog-blockGitCodeLinkCard",false)]}]},{text:"评论区",type:"deepMenu",views:[{text:"",type:"container",views:[h("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[h("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),h("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]},Ft={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ye("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{r.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ye("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),h("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Ut={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return E.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[h("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"布局屏蔽",type:"container",views:[h("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),h("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(t,e){e&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),h("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(t,e){e&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),h("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),h("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},Gt={id:"panel-link",title:"链接",isDefault(){return E.isLink()},views:[{text:"功能",type:"container",views:[h("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},qt={id:"panel-so",title:"搜索",isDefault(){return E.isSo()},views:[{text:"C知道-功能",type:"container",views:[h("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},Ht={id:"panel-wenku",title:"资源",isDefault(){return E.isLink()},views:[{text:"布局屏蔽",type:"container",views:[h("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),h("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),h("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]};Se.deleteMenuOption(0);Se.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{l.showPanel(X.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{l.showPanel(X.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(t){return t},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);X.addContentConfig([Ft,Pt,Gt,Ut,Ht,qt]);X.addContentConfig([$t,Lt,It,Ot,Wt,Nt,Vt]);l.init();let Pe=b.isPhone(),ie="change_env_set",Y=ae(ie);Ve.add({key:ie,text:`⚙ 自动: ${Pe?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return Y==null?t:t+` 手动: ${Y==1?"移动端":Y==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){y.error("输入的不是规范的数字");return}if(!t.includes(n)){y.error("输入的值必须是0或1或2");return}n==0?re(ie):xe(ie,n);}});Y!=null?(r.info(`手动判定为${Y===1?"移动端":"PC端"}`),Y==1?De.init():Y==2?Le.init():(y.error("意外，手动判定的值不在范围内"),re(ie))):Pe?(r.info("自动判定为移动端"),De.init()):(r.info("自动判定为PC端"),Le.init());

})(Qmsg, DOMUtils, pops, Utils);