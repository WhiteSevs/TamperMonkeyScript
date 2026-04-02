// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.4.2
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.13/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.4/dist/index.umd.min.js
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

(function (v, q, ve, we) {
  'use strict';

  var We=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,ie=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,he=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,re=typeof GM_getValue<"u"?GM_getValue:void 0,ne=typeof GM_info<"u"?GM_info:void 0,le=typeof GM_listValues<"u"?GM_listValues:void 0,Pe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Ue=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,be=typeof GM_setValue<"u"?GM_setValue:void 0,Re=typeof GM_setValues<"u"?GM_setValues:void 0,Fe=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ge=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,R=typeof unsafeWindow<"u"?unsafeWindow:void 0,qe=window;const te={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},w={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&q.waitNodeList(e).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),q.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),S(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof he=="function"?he(t.keyName):null;return typeof e=="string"&&e?S(e):w.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{q.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(o){navigator.clipboard.readText().then(a=>{o(a);}).catch(a=>{r.error("读取剪贴板内容失败👉",a),o("");});}function e(o){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t(o);}).catch(a=>{r.error("申请剪贴板权限失败，尝试直接读取👉",a.message??a.name??a.stack),t(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?e(o):window.addEventListener("focus",()=>{e(o);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let o,a=n-e,l=e,i=async u=>{const p=await t(u);if(typeof p=="boolean"&&p||u){x.workerClearTimeout(o);return}if(l+=e,l>a){i(true);return}o=x.workerSetTimeout(()=>{i(false);},e);};i(false);},findParentNode(t,e,n){if(n){let o=q.closest(t,n);if(o)return o.querySelector(e)}else return q.matches(t,e)?t:q.closest(t,e)},toStr(t,e=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(t,(a,l)=>l===void 0?n:l,e).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(t=768){return this.isVerticalScreen()?globalThis.innerWidth<t:globalThis.innerHeight<t},isTopWindow(){const t=typeof R=="object"&&R!=null?R:window;return t.top===t.self},formatVideoDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();const e=function(n){return n<10?`0${n}`:n};if(t<60)return `0:${e(t)}`;if(t>=60&&t<3600){const n=Math.floor(t/60),o=t%60;return `${n}:${e(o)}`}else {const n=Math.floor(t/3600),o=Math.floor(t/60)%60,a=t%60;return `${n}:${e(o)}:${e(a)}`}},formatTimeStamp(t,e){if(typeof t=="number"&&t<1e12){const u=String(Date.now()).length-String(t).length;t=t*Math.pow(10,u);}let n=t,o=new Date(typeof t=="string"?t.replace(/-/g,"/"):t),l=new Date(e??Date.now()).getTime()-o.getTime(),i=Math.floor(l/(24*3600*1e3));if(i>0)i>7?n=x.formatTime(o.getTime()):n=i+"天前";else {let u=l%864e5,p=Math.floor(u/(3600*1e3));if(p>0)n=p+"小时前";else {let h=u%36e5,f=Math.floor(h/(60*1e3));if(f>0)n=f+"分钟前";else {let g=h%6e4;n=Math.round(g/1e3)+"秒前";}}}return n}},x=we.noConflict(),d=q.noConflict(),j=ve,r=new x.Log(ne,R.console||qe.console),xe=ne?.script?.name||void 0,He=ve.fn.Utils.AnyTouch();r.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Ae=()=>{const e=ve.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=x.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,n)};v.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?r.warn(n):e==="error"?r.error(n):r.info(n),false},get position(){return s.getValue(te.qmsg_config_position.key,te.qmsg_config_position.defaultValue)},get maxNums(){return s.getValue(te.qmsg_config_maxnums.key,te.qmsg_config_maxnums.defaultValue)},get showReverse(){return s.getValue(te.qmsg_config_showreverse.key,te.qmsg_config_showreverse.defaultValue)},get zIndex(){return Ae()}});j.GlobalConfig.setGlobalConfig({zIndex:()=>Ae(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const De=new x.GM_Menu({GM_getValue:re,GM_setValue:be,GM_registerMenuCommand:Pe,GM_unregisterMenuCommand:Fe}),Z=new x.Httpx({xmlHttpRequest:Ge,logDetails:false});Z.interceptors.request.use(t=>t);Z.interceptors.response.use(t=>t,t=>(r.error("[Httpx-HttpxRequest.response] 响应错误",{data:t}),t.type==="onabort"?v.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?v.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?v.error("请求超时",{consoleLogContent:true}):v.error("其它错误",{consoleLogContent:true}),t));R.Object.defineProperty,R.Object.keys,R.Object.values,R.Function.prototype.apply,R.Function.prototype.call,R.Element.prototype.appendChild,R.setTimeout.bind(R),R.clearTimeout.bind(R),R.setInterval.bind(R),R.clearInterval.bind(R);const S=d.addStyle.bind(d);w.addBlockCSS.bind(w);const pe=q.selector.bind(q),$e=q.selectorAll.bind(q);new x.GM_Cookie;const fe="GM_Panel",je="data-init",ae="data-key",se="data-default-value",Ke="data-init-more-value",ze="data-plugin-search-config",Q="data-storage-api",J={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},H={setting:{get width(){return J.width<550?"88vw":J.width<700?"550px":"700px"},get height(){return J.height<450?"70vh":J.height<550?"450px":"550px"}},settingMiddle:{get width(){return J.width<350?"88vw":"350px"}},info:{get width(){return J.width<350?"88vw":"350px"},get height(){return J.height<250?"88vh":"250px"}}},X={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new x.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(l,i)=>{typeof i!="string"&&(i=w.toStr(i));const u=new Blob([i]),p=globalThis.URL.createObjectURL(u);d.createElement("a",{href:p,download:l}).click(),x.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(p);},500);},o=()=>{const l=g=>{const m=j.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(I,T){I.close();}}},drag:true,mask:{enable:true},width:H.info.width,height:H.info.height,style:`
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
          }`}),k=m.$shadowRoot.querySelector(".btn-control[data-mode='local']"),D=m.$shadowRoot.querySelector(".btn-control[data-mode='network']"),G=m.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),O=async I=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof le=="function"?typeof ie=="function"?(le().forEach(b=>{ie(b);}),v.success("已清空脚本存储的配置")):v.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):v.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof Re=="function"?Re(I):Object.keys(I).forEach(b=>{const y=I[b];be(b,y);}),v.success("配置导入完毕");},N=I=>new Promise(async T=>{const B=x.toJSON(I);Object.keys(B).length===0?v.warning("解析为空配置，不导入"):await O(B),T(true);});d.on(k,"click",I=>{d.preventEvent(I),m.close();const T=d.createElement("input",{type:"file",accept:".json"});d.on(T,["propertychange","input"],B=>{if(!T.files?.length)return;const b=T.files[0],y=new FileReader;y.onload=()=>{N(y.result);},y.readAsText(b,"UTF-8");}),T.click();}),d.on(D,"click",I=>{d.preventEvent(I),m.close();const T=j.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(y,E){y.close();}},ok:{text:"导入",callback:async(y,E)=>{const A=y.text;if(x.isNull(A)){v.error("请填入完整的url");return}const _=v.loading("正在获取配置..."),M=await Z.get(A,{allowInterceptConfig:false});if(_.close(),!M.status){r.error(M),v.error("获取配置失败",{consoleLogContent:true});return}await N(M.data.responseText)&&y.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:H.info.width,height:"auto"}),B=T.$shadowRoot.querySelector("input"),b=T.$shadowRoot.querySelector(".pops-prompt-btn-ok");d.on(B,["input","propertychange"],y=>{d.val(B)===""?d.attr(b,"disabled","true"):d.removeAttr(b,"disabled");}),d.onKeyboard(B,"keydown",(y,E,A)=>{y==="Enter"&&A.length===0&&d.val(B)!==""&&d.emit(b,"click");}),d.emit(B,"input");}),d.on(G,"click",async I=>{d.preventEvent(I),m.close();let T=await w.getClipboardText();if(T.trim()===""){v.warning("获取到的剪贴板内容为空");return}await N(T);});},i=(g=`${xe}_panel-setting-${x.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,m)=>{const k=j.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(O,N){O.close();}}},drag:true,mask:{enable:true},width:H.info.width,height:H.info.height,style:`
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
          }`}),D=k.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),G=k.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");d.on(D,"click",O=>{d.preventEvent(O);try{n(g,m),k.close();}catch(N){v.error(N.toString(),{consoleLogContent:true});}}),d.on(G,"click",async O=>{await x.copy(m)?(v.success("复制成功"),k.close()):v.error("复制失败");});},p=j.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(g,m){l();}},cancel:{enable:true,text:"导出",callback(g,m){i(void 0,f);}}},width:J.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),h={};if(typeof le=="function")le().forEach(m=>{const k=re(m);Reflect.set(h,m,k);});else {v.warning("不支持函数GM_listValues，仅导出菜单配置");const g=re(fe);Reflect.set(h,fe,g);}const f=w.toStr(h);p.value=f;},a=()=>{let l=ne?.script?.supportURL||ne?.script?.namespace;typeof l=="string"&&x.isNotNull(l)&&window.open(l,"_blank");};return [{id:"script-version",title:`版本：${ne?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(l){new He(l.$asideLiElement).on("tap",function(u){clearTimeout(e),e=void 0,t?(t=false,o()):(e=setTimeout(()=>{t=false,a();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},_e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{s.showPanel(X.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){w.isTopWindow()&&De.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(o=>o.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class Je{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new we.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){const n=this.callbacks[e];n(),this.callbacks.splice(e,1);}}getLocalValue(){if(this.cacheData==null){let e=re(this.storageKey);e==null&&(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;const n=We(this.storageKey,(o,a,l)=>{this.cacheData=null,this.cacheData=l;});return this.callbacks.push(()=>{Ue(n);}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,be(this.storageKey,e);}set(e,n){const o=this.get(e),a=this.getLocalValue();Reflect.set(a,e,n),this.setLocalValue(a),this.emitValueChangeListener(e,n,o);}get(e,n){const o=this.getLocalValue();return Reflect.get(o,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),o=this.getLocalValue();Reflect.deleteProperty(o,e),this.setLocalValue(o),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){this.destory(),ie(this.storageKey);}addValueChangeListener(e,n){const o=Math.random(),a=this.listenerData.get(e)||[];return a.push({id:o,key:e,callback:n}),this.listenerData.set(e,a),o}removeValueChangeListener(e){let n=false;for(const[o,a]of this.listenerData.entries()){for(let l=0;l<a.length;l++){const i=a[l];(typeof e=="string"&&i.key===e||typeof e=="number"&&i.id===e)&&(a.splice(l,1),l--,n=true);}this.listenerData.set(o,a);}return n}async emitValueChangeListener(...e){const[n,o,a]=e;if(!this.listenerData.has(n))return;const l=this.listenerData.get(n);for(let i=0;i<l.length;i++){const u=l[i];if(typeof u.callback=="function"){let p,h;e.length===1||(e.length===2?p=o:e.length===3&&(p=o,h=a)),await u.callback(n,p,h);}}}}const z=new Je(fe),s={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new x.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new x.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new x.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new x.Dictionary),this.__onceExecData},get scriptName(){return xe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:fe,attributeKeyName:ae,attributeDefaultValueName:se},init(){this.initContentDefaultValue(),_e.init();},initContentDefaultValue(){const t=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const a=o.attributes,l=a[je];if(typeof l=="function"){const h=l();if(typeof h=="boolean"&&!h)return}const i=new Map,u=a[ae];if(u!=null){const h=a[se];i.set(u,h);}const p=a[Ke];if(typeof p=="object"&&p&&Object.keys(p).forEach(h=>{const f=p[h];i.set(h,f);}),!i.size){r.warn("请先配置键",o);return}if(o.type==="switch"){const h=typeof o.disabled=="function"?o.disabled():o.disabled;typeof h=="boolean"&&h&&this.$data.contentConfigInitDisabledKeys.push(...i.keys());}for(const[h,f]of i.entries())this.setDefaultValue(h,f);},e=o=>{for(let a=0;a<o.length;a++){const l=o[a];t(l);const i=l.views;i&&Array.isArray(i)&&e(i);}},n=[...X.getAllContentConfig()];for(let o=0;o<n.length;o++){const a=n[o];if(!a.views)continue;const l=a.views;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&r.warn("该key已存在，初始化默认值失败: ",{key:t,initValue:this.$data.contentConfigInitDefaultValue.get(t)}),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){z.set(t,e);},getValue(t,e){const n=z.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){z.delete(t);},hasKey(t){return z.has(t)},addValueChangeListener(t,e,n){const o=z.addValueChangeListener(t,e);if(n?.immediate||n?.immediateAll){const a=this.getValue(t);n?.immediate?e(t,a,a):n?.immediateAll&&s.emitMenuValueChange(t,a,a);}return o},removeValueChangeListener(t){z.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){z.emitValueChangeListener(t,e,n);},async exec(t,e,n,o=true){const a=this;let l;typeof t=="string"||Array.isArray(t)?l=()=>t:l=t;let i=false;const u=l();let p=[];Array.isArray(u)?(i=true,p=u):p.push(u);const h=p.find(b=>!this.$data.contentConfigInitDefaultValue.has(b));if(h){r.warn(`${h} 键不存在`);return}const f=JSON.stringify(p);if(o&&this.$data.onceExecMenuData.has(f))return this.$data.onceExecMenuData.get(f);let g=[];const m=[];let k=[];const D=(b,y)=>{const E=[],A=[];let _=[];if(Array.isArray(y))_=_.concat(y);else {const C=$=>{if(typeof $=="object"&&$!=null)if($ instanceof Element)_.push($);else {const{$css:P,destory:F}=$;P!=null&&(Array.isArray(P)?_=_.concat(P):_.push(P)),typeof F=="function"&&_.push(F);}else _.push($);};if(y!=null&&Array.isArray(y))for(const $ of y)C($);else C(y);}const M=C=>{if(C!=null){if(C instanceof Element){E.push(C);return}if(typeof C=="function"){A.push(C);return}}};for(const C of _){const $=M(C);if(typeof $=="boolean"&&!$)break;if(Array.isArray(C))for(const P of C){const F=M(P);if(typeof F=="boolean"&&!F)break}}O(),N(),b&&(g=g.concat(E),k=k.concat(A));},G=b=>!!this.getValue(b),O=()=>{for(let b=0;b<g.length;b++)g[b]?.remove(),g.splice(b,1),b--;},N=()=>{for(let b=0;b<k.length;b++){const y=k[b];y(),k.splice(b,1),b--;}},I=()=>{let b=false;return typeof n=="function"?b=n(p):b=p.every(y=>G(y)),b},T=async b=>{const y=I();let E=[];if(y){const A=p.map(_=>this.getValue(_));E=await e({key:p,triggerKey:b?.key,value:i?A:A[0],addStoreValue:(..._)=>D(y,_)});}D(y,E);};o&&p.forEach(b=>{const y=this.addValueChangeListener(b,(E,A,_)=>T({key:E}));m.push(y);}),await T();const B={reload(){this.clearStoreStyleElements(),this.destory(),T();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>O(),destory(){return N()},removeValueChangeListener:()=>{m.forEach(b=>{this.removeValueChangeListener(b);});},clearOnceExecMenuData(){o&&a.$data.onceExecMenuData.delete(f);}};return this.$data.onceExecMenuData.set(f,B),B},async execMenu(t,e,n=false,o=false){return await this.exec(t,async a=>await e(a),a=>a.every(i=>{let u=!!this.getValue(i);return s.$data.contentConfigInitDisabledKeys.includes(i)&&(u=false,r.warn(`.execMenu${o?"Once":""} ${i} 被禁用`)),n&&(u=!u),u}),o)},async execMenuOnce(t,e,n=false,o=false){const a=await this.execMenu(t,e,n,true);if(o&&a){const l=()=>{a.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,l);}return a},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),z.removeValueChangeListener(t)},onceExec(t,e,n=false){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||n&&(Array.isArray(t)?t:[t]).findIndex(a=>{if(!!!s.getValue(a))return  true})!==-1||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(t)}},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${xe}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];const a=t.findIndex(i=>(typeof i.isBottom=="function"?i.isBottom():!!i.isBottom)&&i.id==="script-version")!==-1;!n&&!a&&t.push(...X.getDefaultBottomContentConfig());const l=j.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:i=>{i.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:i=>{i(),this.$data.$panel=null;}},width:H.setting.width,height:H.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=t,o||this.registerConfigSearch({$panel:l,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,o=async(m,k)=>{if(m==null)return;const D=await k(m);return D&&typeof D.isFind=="boolean"&&D.isFind?D.data:await o(D.data,k)},a=(m,k)=>{const D=new IntersectionObserver(G=>{G.forEach(O=>{O.isIntersecting&&(k?.(),D.disconnect());});},{root:null,threshold:1});D.observe(m),m.scrollIntoView({behavior:"smooth",block:"center"});},l=m=>{const k="pops-flashing";d.onAnimationend(m,()=>{m.classList.remove(k);}),m.classList.add(k);},i=m=>{if(m.type==="dblclick"&&g)return;d.preventEvent(m);const k=j.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:H.settingMiddle.width,height:"auto",drag:true,style:`
					${j.config.cssText.panelCSS}

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
				`});k.$shadowRoot.querySelector(".search-wrapper");const D=k.$shadowRoot.querySelector(".search-config-text"),G=k.$shadowRoot.querySelector(".search-result-wrapper");D.focus();const O=()=>{d.empty(G);},N=T=>{const B=x.queryProperty(T,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E}),b=d.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${B.matchedData?.path}</div>
							<div class="search-result-item-description">${B.matchedData?.description??""}</div>
						`}),y=j.fn.PanelHandlerComponents();return d.on(b,"click",()=>{const A=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[T.index];if(!A){v.error(`左侧项下标${T.index}不存在`);return}A.scrollIntoView({behavior:"smooth",block:"center"}),A.click(),o(T.next,async _=>{if(_?.next){const M=await d.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(C=>{const $=Reflect.get(C,y.$data.nodeStoreConfigKey);return typeof $=="object"&&$!=null&&$.text===_.name}),2500);if(M)M.click();else return v.error("未找到对应的二级菜单"),{isFind:true,data:_};return {isFind:false,data:_.next}}else {const M=await d.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(C=>Reflect.get(C,y.$data.nodeStoreConfigKey)===_.matchedData?.formConfig),2500);if(M){a(M);const C=M.closest(".pops-panel-forms-fold[data-fold-enable]");C&&(C.querySelector(".pops-panel-forms-fold-container").click(),await x.sleep(500)),a(M,()=>{l(M);});}else v.error("未找到对应的菜单项");return {isFind:true,data:_}}});}),b},I=T=>{const B=new RegExp(T,"i"),b=[],y=(A,_)=>{for(let M=0;M<A.length;M++){const C=A[M],$=C.views;if($&&Array.isArray($)){const P=x.deepClone(_);if(C.type==="deepMenu"){const F=x.queryProperty(P,ee=>ee?.next?{isFind:false,data:ee.next}:{isFind:true,data:ee});F.next={name:C.text};}y($,P);}else {let P,F;if(C.type==="own"){let W=Reflect.get(C.attributes||{},ze);W&&(typeof W=="function"&&(W=W()),typeof W.text=="string"&&(P=W.text),typeof W.desc=="string"&&(F=W.desc));}else P=C.text,F=Reflect.get(C,"description");const ee=[P,F],ke=ee.findIndex(W=>{if(typeof W=="string")return W.match(B)});if(ke!==-1){const W=x.deepClone(_),Te=x.queryProperty(W,K=>K?.next?{isFind:false,data:K.next}:{isFind:true,data:K});Te.next={name:P,matchedData:{path:"",formConfig:C,matchedText:ee[ke],description:F}};const Me=[];x.queryProperty(W,K=>{const ye=K?.name;return typeof ye=="string"&&ye.trim()!==""&&Me.push(ye),K?.next?{isFind:false,data:K.next}:{isFind:true,data:K}});const Ne=Me.join(w.escapeHtml(" - "));Te.next.matchedData.path=Ne,b.push(W);}}}};for(let A=0;A<n.length;A++){const _=n[A];if(!_.views||_.isBottom&&_.id==="script-version")continue;const M=_.views;if(M&&Array.isArray(M)){let C=_.title;typeof C=="function"&&(C=C()),y(M,{index:A,name:C});}}const E=document.createDocumentFragment();for(const A of b){const _=N(A);E.appendChild(_);}O(),G.append(E);};d.on(D,"input",x.debounce(T=>{d.preventEvent(T);const B=d.val(D).trim();if(B===""){O();return}I(B);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(m=>{d.on(m,"dblclick",i);});const p=new WeakMap;let h=false,f,g=false;d.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(m,k)=>{g=true,clearTimeout(f),f=void 0,h&&p.has(k)?(h=false,p.delete(k),i(m)):(f=setTimeout(()=>{h=false;},200),h=true,p.set(k,m));},{capture:true}),e.$shadowRoot.appendChild(d.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t},getDynamicValue(t,e){const n=this;let o=false,a=e;const l=this.addValueChangeListener(t,(i,u)=>{a=u;});return {get value(){return o||(o=true,a=n.getValue(t,e)),a},destory(){n.removeValueChangeListener(l);}}}};class Ce{__href__;get __href(){return this.__href__||globalThis.location.href}__origin={value:void 0,type:"same"};__protocol={value:void 0,type:"same"};__host={value:void 0,type:"same",hasPort:false};__pathname={value:void 0,type:"same"};__searchParams={value:new Set};constructor(e){typeof e=="string"&&this.href(e);}href(e){return this.__href__=e,this}origin(e){return this.__origin={value:e,type:"same"},this}originStartsWith(e){return this.__origin={value:e,type:"startsWith"},this}originEndsWith(e){return this.__origin={value:e,type:"endsWith"},this}originIncludes(e){return this.__origin={value:e,type:"includes"},this}originMatch(e){return this.__origin={value:e,type:"match"},this}protocol(e){return this.__protocol={value:e,type:"same"},this}protocolStartsWith(e){return this.__protocol={value:e,type:"startsWith"},this}protocolEndsWith(e){return this.__protocol={value:e,type:"endsWith"},this}protocolIncludes(e){return this.__protocol={value:e,type:"includes"},this}protocolMatch(e){return this.__protocol={value:e,type:"match"},this}host(e){return this.__host={value:e,type:"same",hasPort:true},this}hostStartsWith(e){return this.__host={value:e,type:"startsWith",hasPort:true},this}hostEndsWith(e){return this.__host={value:e,type:"endsWith",hasPort:true},this}hostIncludes(e){return this.__host={value:e,type:"includes",hasPort:true},this}hostMatch(e){return this.__host={value:e,type:"match",hasPort:true},this}hostName(e){return this.__host={value:e,type:"same",hasPort:false},this}hostNameStartsWith(e){return this.__host={value:e,type:"startsWith",hasPort:false},this}hostNameEndsWith(e){return this.__host={value:e,type:"endsWith",hasPort:false},this}hostNameIncludes(e){return this.__host={value:e,type:"includes",hasPort:false},this}hostNameMatch(e){return this.__host={value:e,type:"match",hasPort:false},this}pathname(e){return this.__pathname={value:e,type:"same"},this}pathnameStartsWith(e){return this.__pathname={value:e,type:"startsWith"},this}pathnameEndsWith(e){return this.__pathname={value:e,type:"endsWith"},this}pathnameIncludes(e){return this.__pathname={value:e,type:"includes"},this}pathnameMatch(e){return this.__pathname={value:e,type:"match"},this}searchParams(e,n){return this.__searchParams.value.add({name:e,value:n}),this}search(e){return this.__searchParams.value.add({name:"",value:e,type:"same"}),this}searchStartsWith(e){return this.__searchParams.value.add({name:"",value:e,type:"startsWith"}),this}searchEndsWith(e){return this.__searchParams.value.add({name:"",value:e,type:"endsWith"}),this}searchIncludes(e){return this.__searchParams.value.add({name:"",value:e,type:"includes"}),this}searchMatch(e){return this.__searchParams.value.add({name:"",value:e,type:"match"}),this}build(){if(!this.__host.value)throw new TypeError("host or hostName should be required");const e=this.__protocol.value||"https",n=this.__host.value,o=this.__pathname.value||"/";let a=`${e}://${n}${o}`;if(this.__searchParams.value.size>0){const l=[];this.__searchParams.value.forEach(i=>{if(typeof i.name=="string"){let u="";(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")&&(u=i.value.toString()),l.push(`${encodeURIComponent(i.name)}=${encodeURIComponent(u)}`);}}),l.length&&(a+=`?${l.join("&")}`);}return a}or(e){return new Ce(e)}r(){const e=new URL(this.__href);return [()=>{if(this.__origin.value)if(this.__origin.type==="same"){if(typeof this.__origin.value=="string")return e.origin===this.__origin.value;throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="startsWith"){if(typeof this.__origin.value=="string")return e.origin.startsWith(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="endsWith"){if(typeof this.__origin.value=="string")return e.origin.endsWith(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="includes"){if(typeof this.__origin.value=="string")return e.origin.includes(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="match"){if(this.__origin.value instanceof RegExp)return this.__origin.value.test(e.origin);if(typeof this.__origin.value=="string")return e.origin.match(this.__origin.value);throw new TypeError("origin value should be RegExp or string by type "+this.__origin.type)}else throw new TypeError("origin type should be same or startsWith or endsWith or includes or match");else return  true},()=>{if(this.__protocol.value)if(this.__protocol.type==="same"){if(typeof this.__protocol.value=="string")return e.protocol===this.__protocol.value;throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="startsWith"){if(typeof this.__protocol.value=="string")return e.protocol.startsWith(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="endsWith"){if(typeof this.__protocol.value=="string")return e.protocol.endsWith(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="includes"){if(typeof this.__protocol.value=="string")return e.protocol.includes(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="match"){if(this.__protocol.value instanceof RegExp)return this.__protocol.value.test(e.protocol);if(typeof this.__protocol.value=="string")return e.protocol.match(this.__protocol.value);throw new TypeError("protocol value should be RegExp or string by type "+this.__protocol.type)}else throw new TypeError("protocol type should be same,startsWith,endsWith,includes,match");else return  true},()=>{if(this.__host.value){const o=this.__host.hasPort?e.host:e.hostname;if(this.__host.type==="same"){if(typeof this.__host.value=="string")return this.__host.value===o;throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="startsWith"){if(typeof this.__host.value=="string")return o.startsWith(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="endsWith"){if(typeof this.__host.value=="string")return o.endsWith(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="includes"){if(typeof this.__host.value=="string")return o.includes(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="match"){if(this.__host.value instanceof RegExp)return this.__host.value.test(o);if(typeof this.__host.value=="string")return o.match(this.__host.value);throw new TypeError("host value should be RegExp or string by type "+this.__host.type)}else throw new TypeError("host type should be same,startsWith,endsWith,includes,match")}else return  true},()=>{if(this.__pathname.value)if(this.__pathname.type==="same"){if(typeof this.__pathname.value=="string")return e.pathname===this.__pathname.value;throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="startsWith"){if(typeof this.__pathname.value=="string")return e.pathname.startsWith(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="endsWith"){if(typeof this.__pathname.value=="string")return e.pathname.endsWith(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="includes"){if(typeof this.__pathname.value=="string")return e.pathname.includes(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="match"){if(this.__pathname.value instanceof RegExp)return this.__pathname.value.test(e.pathname);if(typeof this.__pathname.value=="string")return e.pathname.match(this.__pathname.value);throw new TypeError("pathname value should be RegExp or string by type "+this.__pathname.type)}else throw new TypeError("pathname type should be same,startsWith,endsWith,includes,match");else return  true},()=>{let o=true;const a=[];this.__searchParams.value.forEach(l=>{a.push(l);});for(let l=0;l<a.length;l++){const i=a[l];if(i.type)if(i.type==="same"){if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search===i.value.toString();throw new TypeError("search value should be string、number、boolean by type "+i.type)}else if(i.type==="startsWith"){if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search.startsWith(i.value.toString());throw new TypeError("search value should be string、number、boolean by type "+i.type)}else if(i.type==="endsWith"){if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search.endsWith(i.value.toString());throw new TypeError("search value should be string、number、boolean by type "+i.type)}else if(i.type==="includes"){if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search.includes(i.value.toString());throw new TypeError("search value should be string、number、boolean by type "+i.type)}else if(i.type==="match"){if(i.value instanceof RegExp)return i.value.test(e.search);if(typeof i.value=="string"||typeof i.value=="number"||typeof i.value=="boolean")return e.search.match(i.value.toString());throw new TypeError("search value should be RegExp、string、number、boolean by type "+i.type)}else throw new TypeError("search type should be same, startsWith, endsWith, includes, match");else if(typeof i.name=="string"){let u=i.value;if(u==null||typeof u=="string"||typeof u=="number"||typeof u=="boolean"){if(u=u?.toString(),!e.searchParams.has(i.name,u)){o=false;break}}else if(u instanceof RegExp){const p=e.searchParams.get(i.name);if(p){if(!u.test(p)){o=false;break}}else {o=false;break}}else throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined")}else if(i.name instanceof RegExp){let u,p;if(e.searchParams.forEach((h,f)=>{!u&&f.match(i.name)&&(u=f,p=h);}),u){let h=i.value;if(h!=null)if(typeof h=="string"||typeof h=="number"||typeof h=="boolean"){if(h=h.toString(),o=h===p,!o)break}else if(h instanceof RegExp)if(p){if(!h.test(p)){o=false;break}}else {o=false;break}else throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined")}else {o=false;break}}else throw new TypeError("searchParams name should be string or RegExp")}return o}].every(o=>o())}}const U={host(t,e){return U.builder(e).host(t)},hostName(t,e){return U.builder(e).hostName(t)},search(t,e){return U.builder(e).search(t)},seachParams(t,e,n){return U.builder(n).searchParams(t,e)},pathname(t,e){return U.builder(e).pathname(t)},protocol(t,e){return U.builder(e).protocol(t)},builder(t){return new Ce(t)}},V={isHuaWeiCloudBlog(){return U.builder().originIncludes("huaweicloud.csdn.net").r()},isBlog(){return U.builder().originIncludes("blog.csdn.net").r()},isBlogArticle(){return this.isBlog()&&U.builder().pathnameIncludes("/article/details/").r()},isWenKu(){return U.builder().originIncludes("wenku.csdn.net").r()},isLink(){return U.hostName("link.csdn.net").r()},isSo(){return U.hostName("so.csdn.net").r()},isSoCKnow(){return this.isSo()&&U.builder().pathnameStartsWith("/chat").or().pathnameStartsWith("/so/ai").r()},isDownload(){return U.hostName("download.csdn.net").r()}},Ve={init(){s.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let t=new URLSearchParams(window.location.search);const e="target";if(t.has(e)){let n=t.get(e),o=decodeURIComponent(n);r.success(`跳转链接：${o}`),window.location.href=o;}else r.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(t){v.error("跳转链接失败："+t.message);}}},Ze={init(){s.execMenuOnce("m-csdn-link-jumpRedirect",()=>{Ve.jumpRedirect();});}},Ye=`/* 右下角的 免费赢华为平板xxxx */
.org-main-content .siderbar-box {
  display: none !important;
}
`,Qe=`/* 底部免费抽xxx奖品广告 */
div.siderbar-box,
/* 华为开发者联盟加入社区 */
div.user-desc.user-desc-fix {
  display: none !important;
}
`,Le={init(){S(Qe),s.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),s.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),s.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),s.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),s.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),s.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return r.info("自动展开全文"),[w.addBlockCSS("div.article-show-more"),S(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return r.info("屏蔽云开发者任务挑战活动"),w.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return r.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),w.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return r.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),w.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return r.info("屏蔽底部推荐内容"),w.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return r.info("屏蔽底部更多推荐"),w.addBlockCSS("div.more-article")}},Xe={init(){S(Ye),s.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>Le.autoExpandContent()),s.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return r.info("【屏蔽】底部加入社区"),w.addBlockCSS(".user-desc")}},et=`/*.blog_container_aside,
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
`,me={init(){s.onceExec("csdn-blog-blockCSS",()=>this.addCSS()),s.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),s.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),s.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),s.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),s.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),s.execMenuOnce("csdn-blog-blockBottomAskAIToolbar",()=>this.blockBottomAskAIToolbar()),s.execMenuOnce("csdn-blog-blockRunnerBox",()=>this.blockRunnerBox());},addCSS(){return r.info("添加屏蔽CSS和功能CSS"),[S(tt),S(et)]},shieldTopToolbar(){return r.info("【屏蔽】顶部工具栏"),w.addBlockCSS("#toolbarBox","#csdn-toolbar")},shieldLoginDialog(){return r.info("【屏蔽】登录弹窗"),w.addBlockCSS(".passport-login-container")},shieldLeftBlogContainerAside(){return r.info("【屏蔽】左侧博客信息"),w.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return r.info("【屏蔽】右侧目录信息"),w.addBlockCSS("#rightAsideConcision","#rightAside")},shieldBottomFloatingToolbar(){return r.info("屏蔽底部悬浮工具栏"),w.addBlockCSS("#toolBarBox")},blockBottomAskAIToolbar(){return r.info("【屏蔽】底部的AI伴读"),w.addBlockCSS('[class*="Container_"]:has([class^="chatMain"])')},blockRunnerBox(){return r.info("【屏蔽】runner-box"),w.addBlockCSS(".runner-box")}},Oe={init(){me.init(),d.onReady(()=>{s.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),s.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},removeClipboardHijacking(){r.info("拦截-复制的小尾巴"),d.remove(".article-copyright"),R.articleType&&(R.articleType=0),R?.csdn?.copyright?.textData&&(R.csdn.copyright.textData=""),R?.csdn?.copyright?.htmlData&&(R.csdn.copyright.htmlData="");},unBlockCopy(){r.info("劫持-禁止复制"),d.on(document,"click",".hljs-button",function(e,n){d.preventEvent(e);const o=n.closest(".hljs")||n.closest("pre"),a=n.parentElement,l=o?.querySelector("code")||a.querySelector("code")||a,i=l.innerText;r.info("点击复制按钮复制内容："+(i.length>8?i.substring(0,8)+"...":i),l),x.copy(i),n.setAttribute("data-title","复制成功");},{capture:true});const t=new x.LockFunction(function(e){const n=e.target;if(n.localName!=="pre")return;const o=n.querySelector(".hljs-button");o&&o.setAttribute("data-title","复制");});d.on(document,["mouseenter","mouseleave"],function(e){t.run(e);},{capture:true}),d.waitNode("#content_views").then(e=>{R.$&&R.$("#content_views")?.unbind("copy"),d.on(e,"copy",function(n){d.preventEvent(n);const a=R.getSelection()?.toString();return r.info("Ctrl+C复制内容："+(a.length>8?a.substring(0,8)+"...":a)),x.copy(a),false},{capture:true});}),d.waitNode(".hljs-button").then(()=>{setTimeout(()=>{$e(".hljs-button").forEach(e=>{e.removeAttribute("onclick"),e.removeAttribute("data-report-click"),e.setAttribute("data-title","复制");});},250);});}},L={waitRemove(...t){t.forEach(e=>{d.waitNodeList(e).then(n=>{n.forEach(o=>o.remove());});});},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),S(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof he=="function"?he(t.keyName):"";typeof e=="string"&&e?S(e):L.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,d.onReady(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()}},nt={init(){s.execMenuOnce("m-csdn-blog-blockBottomArticle",()=>this.blockBottomArticle()),s.execMenuOnce("m-csdn-blog-removeResourceArticle",()=>this.removeResourceArticle()),s.execMenuOnce("m-csdn-blog-openNewTab",()=>this.openNewTab()),d.onReady(()=>{s.execMenuOnce("m-csdn-blog-refactoringRecommendation",t=>this.refactoringRecommendation());});},blockBottomArticle(){return r.info("【屏蔽】底部文章"),L.addBlockCSS("#recommend")},async refactoringRecommendation(){const t=function(){$e(".container-fluid").forEach(a=>{let l="",i="",u="",p="";if(a.hasAttribute("data-url")){if(l=a.getAttribute("data-url"),i=a.querySelector(".recommend_title div.left")?.innerHTML,!a.querySelector(".text"))return;u=a.querySelector(".text")?.innerHTML,a.querySelectorAll(".recommend-img").length&&a.querySelectorAll(".recommend-img").forEach(f=>{p+=f.innerHTML;});}else l=a.querySelector("a[data-type]").getAttribute("href"),i=a.querySelector(".recommend_title div.left").innerHTML,u=a.querySelector(".text").innerHTML;const h=new URL(l);h.host==="download.csdn.net"||h.host==="www.iteye.com"&&h.pathname.match(/^\/resource/gi)?i='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+i:h.origin.match(/edu.csdn.net/gi)&&(i='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+i),a.setAttribute("class","GM-csdn-dl"),a.setAttribute("data-url",l),a.innerHTML=`<div class="GM-csdn-title"><div class="left">${i}</div></div><div class="GM-csdn-content">${u}</div><div class="GM-csdn-img">${p}</div>`,a.addEventListener("click",function(){window.location.href=l;});});},e=new x.LockFunction(t,50),n=await d.waitNode("#recommend");r.info("重构底部推荐");const o=x.mutationObserver(n,{config:{childList:true,subtree:true,attributes:true},immediate:true,callback:()=>{e.run();}});return [()=>{o.disconnect();}]},removeResourceArticle(){return r.info("移除资源下载的文章"),L.addBlockCSS('.container-fluid:has(a[href*="https://download.csdn.net/"])','.container-fluid[data-url*="https://download.csdn.net/"]','.GM-csdn-dl[data-url*="https://download.csdn.net/"]')},openNewTab(){return r.info("新标签页打开"),d.on(document,"click",[".container-fluid",".GM-csdn-dl"],(e,n)=>{d.preventEvent(e);const o=n.getAttribute("data-url");typeof o=="string"?(r.info(`新标签页打开：${o}`),window.open(o,"_blank")):v.error("未获取到data-url属性");},{capture:true}).off}},ce={isSuccessResponse(t){return t==null?false:(typeof t=="string"&&(t=x.toJSON(t)),t?.code===200)}},de={async folderListWithCheck(t){const e=await Z.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:t},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":x.getRandomPCUA()}});r.info(e);const n=x.toJSON(e.data.responseText);if(!e.status||!ce.isSuccessResponse(e.data.responseText)){r.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?v.error(n.msg):v.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(t){const e=await Z.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:t,headers:{"Content-Type":"application/json","User-Agent":x.getRandomPCUA()},allowInterceptConfig:false});if(r.info(e),!e.status||!ce.isSuccessResponse(e.data.responseText)){r.error("添加收藏失败，请求异常",e),v.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(t){const e=await Z.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:t},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":x.getRandomPCUA()}});if(r.info(e),!e.status||!ce.isSuccessResponse(e.data.responseText)){r.error("检查收藏夹状态失败，请求异常"),v.error("检查收藏夹状态失败，请求异常");return}return x.toJSON(e.data.responseText).data},async createFolder(t){const e=await Z.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:t,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":x.getRandomPCUA()},allowInterceptConfig:false});if(r.info(e),!e.status||!ce.isSuccessResponse(e.data.responseText)){v.error("创建收藏夹失败");return}return x.toJSON(e.data.responseText).data}},ot={init(){s.execMenuOnce("m-csdn-blog-blockBottomToolbar",()=>this.blockBottomToolbar()),s.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),d.onReady(()=>{s.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>this.optimizationCollectButton());});},blockBottomToolbar(){return r.info("【屏蔽】底部工具栏"),L.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return r.info("底部工具栏常驻"),S(`
    #operate {
        bottom: 0 !important;
    }
    `)},async optimizationCollectButton(){r.info("优化收藏按钮");const t=await d.waitNode("#operate .collect-btn",1e4);if(!t)return;const e=d.on(t,"click",async n=>{d.preventEvent(n);const o=t.querySelector(".collect"),a=t.querySelector(".uncollect"),l=await de.folderListWithCheck(window.location.origin+window.location.pathname);if(!l)return;const i=[];l.forEach(f=>{f.IsFavorite&&i.push(f.ID);});const u=f=>{let g=f.ID,m=d.createElement("li",{className:"csdn-collection-item",innerHTML:`
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
            `},{"data-is-collect":f.IsFavorite});m.querySelector(".title-m");let k=m.querySelector(".csdn-collection-item_length");m.querySelector(".csdn-collection-controls");let D=m.querySelector(".collect-btn");return d.on(D,"click",async G=>{let O=R.articleDetailUrl;O==null&&(O=window.location.origin+window.location.pathname);let N=R.articleId;if(N==null){r.error("获取文章ID失败"),v.error("获取文章ID失败");return}let I=R.username;if(I==null){r.error("获取文章作者失败"),v.error("获取文章作者失败");return}let T=R.articleTitle;if(T==null&&(T=document.title.replace(/-CSDN博客$/,"")),T==null){r.error("获取文章标题失败"),v.error("获取文章标题失败");return}let B=R.articleDesc;if(B==null){const E=pe("meta[name='description']");E&&(B=E.getAttribute("content"));}if(B==null){r.error("获取文章描述失败"),v.error("获取文章描述失败");return}const b=[...i];let y=v.loading("处理中...");try{let E=await de.checkFavoriteByUrl(O);if(E==null)return;r.info(g,E);let A=!E[g];if(A?(r.info("添加收藏"),b.push(g)):(r.info("取消收藏"),b.splice(b.indexOf(g),1)),!await de.addFavoriteInFolds({author:I,url:O,source:"blog",sourceId:N,title:T,description:B,fromType:"PC",username:f.Username,folderIdList:b}))return;const M=await de.checkFavoriteByUrl(O);if(M==null)return;r.info(g,M),m.setAttribute("data-is-collect",(!!M[g]).toString()),A?M[g]?(r.success("收藏成功"),v.success("收藏成功"),d.text(D,"已收藏"),i.includes(g)||i.push(g),f.FavoriteNum++):(r.error("收藏失败",M,g),v.error("收藏失败")):M[g]?(r.error("取消收藏失败",M,g),v.error("取消收藏失败")):(r.success("取消收藏成功"),v.success("取消收藏成功"),d.text(D,"收藏"),i.includes(g)&&i.splice(i.indexOf(g),1),f.FavoriteNum--),d.text(k,`${f.FavoriteNum}条内容`),Object.values(M).find($=>$)?(d.show(o,!1),d.hide(a,!1)):(d.show(a,!1),d.hide(o,!1)),y.close();}catch(E){r.error(E);}finally{y.close();}}),m},h=j.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:H.setting.width,height:H.setting.height,drag:true,mask:{enable:true},style:`
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
        `}).$shadowRoot.querySelector(".csdn-collection-items");l.forEach(f=>{const g=u(f);h.appendChild(g);});},{capture:true});return [()=>{e.off();}]}},it={init(){s.execMenuOnce("m-csdn-blog-blockComment",()=>this.blockComment()),s.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight());},blockComment(){return r.info("【屏蔽】评论区"),L.addBlockCSS("#comment")},notLimitCommentMaxHeight(){return r.info("不限制评论区的最大高度"),S(`
        #comment{
          max-height: none !important;
        }
      `)}},rt={init(){it.init(),nt.init(),ot.init(),s.execMenuOnce("m-csdn-blog-blockTopToolbar",()=>this.blockTopToolbar()),s.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),s.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),s.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),s.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),d.onReady(()=>{s.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{Oe.unBlockCopy();});});},blockTopToolbar(){return r.info("屏蔽顶部Toolbar"),[w.addBlockCSS("#csdn-toolbar"),S(`
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
			`)]},removeAds(){return r.info("去除广告"),[w.waitRemove(".passport-login-container"),w.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),w.waitRemove(".add-firstAd"),w.waitRemove("div.feed-Sign-weixin"),w.waitRemove("div.ios-shadowbox")]},allowSelectText(){return r.info("允许选择内容"),S(`
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
    `)},autoExpandContent(){return r.info("自动展开"),S(`
    #content_views pre.set-code-hide,
    .article_content{
      height: 100% !important;
      overflow: auto !important;
    }
    `)},notLimitCodePreMaxHeight(){return r.info("不限制代码块的最大高度"),S(`
    pre{
        max-height: unset !important;
    }
    `)}},at=`/* 右下角的买一年送3个月的广告图标 */
.blind_box {
  display: none !important;
}
`,st={init(){S(at),s.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return r.info("【屏蔽】底部工具栏"),w.addBlockCSS(".page-container > div.btn")}},lt=`/* 右下角悬浮图标 买1年送3个月 */
.page-container .blind_box,
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */
.page-container .btn .ml-12,
/* 登录弹窗 */
.passport-login-container,
/* 通用广告className匹配 */
.ads {
  display: none !important;
}
`,ct={init(){s.execMenuOnce("m-csdn-download-removeAds",()=>S(lt)),s.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return r.info("自动展开资源介绍"),[w.addBlockCSS("label.unfold-font"),S(`
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
`,ht={init(){s.onceExec("m-csdn-blog-removeAds",()=>this.addCSS()),s.execMenuOnce("m-csdn-blog-blockBottomAskAIToolbar",()=>me.blockBottomAskAIToolbar());},addCSS(){return [S(dt),S(ut)]}},pt={init(){ht.init();}},Be={init(){V.isLink()?(r.info("Router: 中转链接"),Ze.init()):V.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),Xe.init()):V.isBlog()?(r.info("Router: 博客"),pt.init(),V.isBlogArticle()&&(r.info("Router: 文章"),rt.init())):V.isWenKu()?(r.info("Router: 文库"),st.init()):V.isDownload()?(r.info("Router: 资源下载"),ct.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},ft=`#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {
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
`,gt={init(){S(ft),S(mt),s.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),s.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),s.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return r.info("【屏蔽】资源推荐"),w.addBlockCSS("#recommend")},shieldRightUserInfo(){return r.info("【屏蔽】右侧用户信息"),w.addBlockCSS(".layout-right")},shieldRightToolBar(){return r.info("【屏蔽】右侧悬浮工具栏"),w.addBlockCSS(".csdn-side-toolbar")}},bt={init(){s.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),s.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),s.execMenuOnce("csdn-blog-blockGitCodeLinkCard",()=>this.blockGitCodeLinkCard());},shieldBottomSkillTree(){return r.info("【屏蔽】底部xx技能树"),w.addBlockCSS("#treeSkill")},shieldArticleSearchTip(){return r.info("【屏蔽】选中文字悬浮栏"),w.addBlockCSS("#articleSearchTip")},blockGitCodeLinkCard(){return r.info("【屏蔽】gitcode链接卡片"),w.addBlockCSS('a.has-card[href*="gitcode.com"]',".t2-card-container")}},yt=`.main_father {
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
`,xt={init(){s.execMenuOnce("csdn-blog-blockComment",()=>this.blockComment()),d.onReady(()=>{s.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},blockComment(){return r.info("【屏蔽】评论区"),L.addBlockCSS("#pcCommentBox")},restoreComments(){r.info("恢复评论到正确位置-第一条评论"),d.waitNode(".first-recommend-box").then(t=>{const e=pe(".recommend-box.insert-baidu-box.recommend-box-style");e.insertBefore(t,e.firstChild);}),r.info("恢复评论到正确位置-第二条评论"),d.waitNode(".second-recommend-box").then(t=>{const e=pe(".recommend-box.insert-baidu-box.recommend-box-style");e.insertBefore(t,e.firstChild);});}},vt={init(){s.execMenuOnce("csdn-blog-blockBottomRecommendArticle",()=>this.blockBottomRecommendArticle()),s.execMenuOnce("csdn-blog-identityCSDNDownload",()=>this.identityCSDNDownload()),s.execMenuOnce("csdn-blog-removeResourceDownloadArticle",()=>this.removeResourceDownloadArticle());},blockBottomRecommendArticle(){return r.info("【屏蔽】底部文章"),L.addBlockCSS("main > div.recommend-box")},identityCSDNDownload(){return r.info("标识CSDN下载的链接"),S(`
        .recommend-item-box[data-url*='https://download.csdn.net/'] .content-box{
            border: 2px solid red;
        }
    `)},removeResourceDownloadArticle(){return r.info("移除资源下载的文章"),L.addBlockCSS(".recommend-item-box[data-url*='https://download.csdn.net/']")}},wt={init(){s.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),t=>!s.getValue(t[0]),true),s.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),s.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),s.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),s.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),s.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),s.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop());},shieldRightToolbar(){return r.info("启用/关闭 右侧工具栏"),L.addBlockCSS("div.csdn-side-toolbar",".article-aside-container")},shieldCreativeCenter(){return r.info("【屏蔽】创作中心"),L.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return r.info("【屏蔽】显示/隐藏侧栏"),L.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return r.info("【屏蔽】新手引导"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return r.info("【屏蔽】客服"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return r.info("【屏蔽】举报"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return r.info("【屏蔽】返回顶部"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},_t={init(){wt.init(),s.execMenuOnce(["csdn-blog-coverRightToolOffSet","csdn-blog-rightToolbarTopOffset","csdn-blog-rightToolbarRightOffset"],t=>{if(t.value[0])return this.initRightToolbarOffset(t.value[1],t.value[2])}),d.onReady(()=>{s.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){r.info("【添加】前往评论按钮，在返回顶部的上面");let t=document.createElement("a");t.className="option-box",t.setAttribute("data-type","gorecommand"),t.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,t.addEventListener("click",function(){let e=document.querySelector("#toolBarBox");if(!e||!e.getClientRects().length){let i=pe("#pcCommentBox");if(i&&i.getClientRects().length)e=i;else {r.error("评论区处于隐藏状态");return}}r.info("滚动到评论");let n=e.getBoundingClientRect().top+window.scrollY,o=document.querySelector("#csdn-toolbar"),a=window.getComputedStyle(o),l=o.clientHeight-parseFloat(a.paddingTop)-parseFloat(a.paddingBottom);window.scrollTo({top:n-l-8,left:0,behavior:"smooth"});}),d.waitNode(".csdn-side-toolbar").then(()=>{let e=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");e.parentElement.insertBefore(t,e.nextSibling);});},async initRightToolbarOffset(t,e){return r.info("初始化右侧工具栏的偏移（top、right）"),S(`
    .csdn-side-toolbar{
      left: unset !important;
      top: ${t}px !important;
      right: ${e}px !important;
    }
    `)}},Ct={init(){s.execMenuOnce("csdn-blog-ai-blockRightToolbar",()=>this.blockRightToolbar()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarCatalogue",()=>this.blockRightToolbarCatalogue()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarLike",()=>this.blockRightToolbarLike()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarComment",()=>this.blockRightToolbarComment()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarCollect",()=>this.blockRightToolbarCollect()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarShare",()=>this.blockRightToolbarShare()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarMore",()=>this.blockRightToolbarMore());},blockRightToolbar(){return r.info("【屏蔽】右侧工具栏"),L.addBlockCSS(".article-aside-container")},blockRightToolbarCatalogue(){return r.info("【屏蔽】目录"),L.addBlockCSS(".article-aside-container .sidebar-item.groupfile")},blockRightToolbarLike(){return r.info("【屏蔽】点赞"),L.addBlockCSS(".article-aside-container .sidebar-item.islike")},blockRightToolbarComment(){return r.info("【屏蔽】评论"),L.addBlockCSS(".article-aside-container .sidebar-item.go-side-comment")},blockRightToolbarCollect(){return r.info("【屏蔽】收藏"),L.addBlockCSS(".article-aside-container .sidebar-item#sidebar-collect")},blockRightToolbarShare(){return r.info("【屏蔽】分享"),L.addBlockCSS(".article-aside-container .sidebar-item#tool-share")},blockRightToolbarMore(){return r.info("【屏蔽】..."),L.addBlockCSS(".article-aside-container .sidebar-item#sidebar-more")}},St={init(){Ct.init(),s.execMenuOnce(["csdn-blog-ai-coverRightToolOffSet","csdn-blog-ai-coverRightToolOffSet-top","csdn-blog-ai-coverRightToolOffSet-right"],t=>{if(t.value[0])return this.coverRightToolOffSet(t.value[1],t.value[2])});},async coverRightToolOffSet(t,e){return r.info("覆盖右侧工具栏的偏移（top、right）"),S(`
    #mainBox .article-aside-container{
      left: unset !important;
      top: ${t}px !important;
      right: ${e}px !important;
    }
    `)}},kt={init(){bt.init(),xt.init(),vt.init(),_t.init(),St.init(),s.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),s.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),s.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),s.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),d.onReady(()=>{s.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();});});},clickPreCodeAutomatically(){r.info("点击代码块自动展开"),document.addEventListener("click",function(t){let e=t.target;e.localName==="pre"&&(e.style.setProperty("height","auto"),e.querySelector(".hide-preCode-box")?.remove());});},articleCenter(){r.info("全文居中");let t=[S(yt)];return t.push(me.shieldRightDirectoryInformation()),t.push(S(`
      #mainBox {
        margin-right: 0px;
      }
      `)),t.push(me.shieldLeftBlogContainerAside()),t.push(S(`
      #mainBox {
        margin-left: 0px;
      }`)),t.push(S(`
    html body .main_father #mainBox{
      padding-right: 0px !important;
    }
    .article-aside-container{
      left: unset !important;
      right: 150px !important;
    }
    `)),t},autoExpandCodeContent(){return r.info("自动展开代码块"),[w.addBlockCSS("pre.set-code-hide .hide-preCode-box"),S(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return r.info("自动展开全文"),S(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},allowSelectContent(){return r.info("允许选择内容"),S(`
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
`,Ee={init(){S(Bt),V.isLink()?(r.info("Router: 中转链接"),Ve.init()):V.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),Le.init()):V.isBlog()?(r.info("Router: 博客"),Oe.init(),V.isBlogArticle()&&(r.info("Router: 帖子"),kt.init())):V.isWenKu()?(r.info("Router: 文库"),gt.init()):V.isDownload()?(r.info("Router: 下载"),Rt.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},ge=function(t,e,n,o,a,l,i){const u={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[Q].get(e,n)},callback(p){if(p==null)return;const h=p.value;if(r.info(`选择：${p.text}`),typeof a=="function"&&a(p))return;this.props[Q].set(e,h);},data:o};return Reflect.set(u.attributes,ae,e),Reflect.set(u.attributes,se,n),Se.initComponentsStorageApi("select",u,{get(p,h){return s.getValue(p,h)},set(p,h){s.setValue(p,h);}}),u},ue=function(t,e,n,o,a,l,i,u,p,h){const f={text:t,type:"slider",description:u,attributes:{},props:{},getValue(){return this.props[Q].get(e,n)},getToolTipContent(g){return typeof i=="function"?i(g):`${g}`},callback(g,m){this.props[Q].set(e,m);},min:o,max:a,step:p};return Reflect.set(f.attributes,ae,e),Reflect.set(f.attributes,se,n),Se.initComponentsStorageApi("slider",f,{get(g,m){return s.getValue(g,m)},set(g,m){s.setValue(g,m);}}),f},Se={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new we.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let o;this.hasStorageApi(t)?o=this.getStorageApi(t):o=n,this.setComponentsStorageApiProperty(e,o);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,Q,e);}},c=function(t,e,n=false,o,a,l,i,u,p){const h={text:t,type:"switch",description:a,disabled:i,attributes:{},props:{},getValue(){return this.props[Q].get(e,n)},callback(f,g){const m=!!g;if(r.success(`${m?"开启":"关闭"} ${t}`),typeof o=="function"&&o(f,m))return;this.props[Q].set(e,m);},afterAddToUListCallBack:(...f)=>{}};return Reflect.set(h.attributes,ae,e),Reflect.set(h.attributes,se,n),Se.initComponentsStorageApi("switch",h,{get(f,g){return s.getValue(f,g)},set(f,g){s.setValue(f,g);}}),h},Et={id:"m-panel-blog",title:"博客",isDefault(){return V.isBlog()},views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[c("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[c("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),c("【屏蔽】顶部工具栏","m-csdn-blog-blockTopToolbar",false),c("【屏蔽】评论区","m-csdn-blog-blockComment",false),c("【屏蔽】底部文章","m-csdn-blog-blockBottomArticle",false),c("【屏蔽】底部工具栏","m-csdn-blog-blockBottomToolbar",false),c("【屏蔽】底部的AI伴读","m-csdn-blog-blockBottomAskAIToolbar",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[c("允许选择内容","m-csdn-blog-allowSelectText",true,void 0,"解除文字选中限制"),c("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开，包括：内容、代码块"),c("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",views:[{text:"",type:"container",views:[c("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[c("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),c("移除资源下载的文章","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),c("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",views:[{type:"container",text:"",views:[c("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),c("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]},At={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ge("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{r.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ge("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),c("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Dt={id:"m-panel-download",title:"资源",isDefault(){return V.isDownload()},views:[{text:"功能",type:"container",views:[c("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"布局屏蔽",type:"container",views:[c("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]},$t={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return V.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[c("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"布局屏蔽",type:"container",views:[c("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},Vt={id:"m-panel-link",title:"链接",isDefault(){return V.isLink()},views:[{text:"功能",type:"container",views:[c("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},Lt={id:"panel-so",title:"搜索",isDefault(){return V.isSo()},views:[{text:"C知道-功能",type:"container",views:[c("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},Ot={id:"m-panel-wenku",title:"文库",isDefault(){return V.isWenKu()},views:[{text:"布局屏蔽",type:"container",views:[c("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},It={id:"panel-blog",title:"博客",isDefault(){return V.isBlog()},views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[c("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),c("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[c("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),c("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false),c("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),c("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),c("【屏蔽】评论区","csdn-blog-blockComment",false),c("【屏蔽】底部文章","csdn-blog-blockBottomRecommendArticle",false),c("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false),c("【屏蔽】底部的AI伴读","csdn-blog-blockBottomAskAIToolbar",false),c("【屏蔽】runner-box","csdn-blog-blockRunnerBox",true)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",views:[{text:"功能",type:"container",views:[c("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加")]},{text:"坐标偏移",type:"container",views:[c("启用","csdn-blog-coverRightToolOffSet",false),ue("top偏移","csdn-blog-rightToolbarTopOffset",140,0,Math.max(document.documentElement.clientHeight/2,400),void 0,t=>`当前：${t}px，默认：140px`),ue("right偏移","csdn-blog-rightToolbarRightOffset",90,0,Math.max(document.documentElement.clientWidth/2,400),void 0,t=>`当前：${t}px，默认：90px`)]},{text:"屏蔽",type:"container",views:[c("【屏蔽】右侧工具栏","csdn-blog-rightToolbarEnable",false),c("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),c("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),c("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),c("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),c("【屏蔽】举报","csdn-blog-rightToolbarReport",false),c("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"右侧悬浮工具栏（AI助读版）",type:"deepMenu",views:[{text:"坐标偏移",type:"container",views:[c("启用","csdn-blog-ai-coverRightToolOffSet",false),ue("top偏移","csdn-blog-ai-coverRightToolOffSet-top",48,0,Math.max(document.documentElement.clientHeight/2,400),void 0,t=>`当前：${t}px，默认：48px`),ue("right偏移","csdn-blog-ai-coverRightToolOffSet-right",150,0,Math.max(document.documentElement.clientWidth/2,400),void 0,t=>`当前：${t}px，默认：150px`)]},{text:"屏蔽",type:"container",views:[c("【屏蔽】右侧工具栏","csdn-blog-ai-blockRightToolbar",false),c("【屏蔽】目录","csdn-blog-ai-blockRightToolbarCatalogue",false),c("【屏蔽】点赞","csdn-blog-ai-blockRightToolbarLike",false),c("【屏蔽】评论","csdn-blog-ai-blockRightToolbarComment",false),c("【屏蔽】收藏","csdn-blog-ai-blockRightToolbarCollect",false),c("【屏蔽】分享","csdn-blog-ai-blockRightToolbarShare",false),c("【屏蔽】...","csdn-blog-ai-blockRightToolbarMore",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[c("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),c("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),c("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),c("全文居中","csdn-blog-articleCenter",true,void 0,"自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中"),c("允许选择内容","csdn-blog-allowSelectContent",true,void 0,"解除文字选中限制")]},{text:"屏蔽",type:"container",views:[c("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),c("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记"),c("【屏蔽】gitcode链接卡片","csdn-blog-blockGitCodeLinkCard",false)]}]},{text:"评论区",type:"deepMenu",views:[{text:"",type:"container",views:[c("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[c("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),c("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]},Nt={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ge("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{r.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ge("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),c("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Wt={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return V.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[c("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"布局屏蔽",type:"container",views:[c("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),c("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(t,e){e&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),c("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(t,e){e&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),c("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),c("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},Pt={id:"panel-link",title:"链接",isDefault(){return V.isLink()},views:[{text:"功能",type:"container",views:[c("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},Ut={id:"panel-so",title:"搜索",isDefault(){return V.isSo()},views:[{text:"C知道-功能",type:"container",views:[c("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},Ft={id:"panel-wenku",title:"资源",isDefault(){return V.isLink()},views:[{text:"布局屏蔽",type:"container",views:[c("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),c("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),c("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]};_e.deleteMenuOption(0);_e.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{s.showPanel(X.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{s.showPanel(X.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(t){return t},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);X.addContentConfig([Nt,It,Pt,Wt,Ft,Ut]);X.addContentConfig([At,Et,Vt,$t,Ot,Lt,Dt]);s.init();let Ie=x.isPhone(),oe="change_env_set",Y=re(oe);De.add({key:oe,text:`⚙ 自动: ${Ie?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return Y==null?t:t+` 手动: ${Y==1?"移动端":Y==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){v.error("输入的不是规范的数字");return}if(!t.includes(n)){v.error("输入的值必须是0或1或2");return}n==0?ie(oe):be(oe,n);}});Y!=null?(r.info(`手动判定为${Y===1?"移动端":"PC端"}`),Y==1?Be.init():Y==2?Ee.init():(v.error("意外，手动判定的值不在范围内"),ie(oe))):Ie?(r.info("自动判定为移动端"),Be.init()):(r.info("自动判定为PC端"),Ee.init());

})(Qmsg, DOMUtils, pops, Utils);