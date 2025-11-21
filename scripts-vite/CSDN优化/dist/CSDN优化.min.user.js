// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.11.21
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.0.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.1/dist/index.umd.min.js
// @connect      blog.csdn.net
// @connect      mp-action.csdn.net
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

(function (v, U, J, pe) {
  'use strict';

  var oe=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,re=typeof GM_getValue<"u"?GM_getValue:void 0,te=typeof GM_info<"u"?GM_info:void 0,le=typeof GM_listValues<"u"?GM_listValues:void 0,De=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,he=typeof GM_setValue<"u"?GM_setValue:void 0,ye=typeof GM_setValues<"u"?GM_setValues:void 0,Ve=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Le=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,B=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ie=window;const x={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&U.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),U.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),R(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof Ce=="function"?Ce(e.keyName):null;return typeof t=="string"&&t?R(t):x.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{U.ready(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(o){navigator.clipboard.readText().then(i=>{o(i);}).catch(i=>{r.error("读取剪贴板内容失败👉",i),o("");});}function t(o){navigator.permissions.query({name:"clipboard-read"}).then(i=>{e(o);}).catch(i=>{r.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),e(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?t(o):window.addEventListener("focus",()=>{t(o);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let o,i=n-t,l=t,c=async b=>{let p=await e(b);if(typeof p=="boolean"&&!p||b){C.workerClearTimeout(o);return}if(l+=t,l>i){c(true);return}o=C.workerSetTimeout(()=>{c(false);},t);};c(false);},findParentNode(e,t,n){if(n){let o=U.closest(e,n);if(o)return o.querySelector(t)}else return U.matches(e,t)?e:U.closest(e,t)},toStr(e){const t="__undefined__placeholder__replaced__str__";return JSON.stringify(e,(o,i)=>i===void 0?t:i,2).replace(new RegExp(`"${t}"`,"g"),"undefined")}},ee={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},C=J.noConflict(),s=U.noConflict(),G=pe,r=new C.Log(te,B.console||Ie.console),me=te?.script?.name||void 0,Oe=pe.config.Utils.AnyTouch(),Ne=false;r.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});v.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?r.warn(n):t==="error"?r.error(n):r.info(n),true},get position(){return a.getValue(ee.qmsg_config_position.key,ee.qmsg_config_position.defaultValue)},get maxNums(){return a.getValue(ee.qmsg_config_maxnums.key,ee.qmsg_config_maxnums.defaultValue)},get showReverse(){return a.getValue(ee.qmsg_config_showreverse.key,ee.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=J.getMaxZIndex(),t=pe.config.InstanceUtils.getPopsMaxZIndex().zIndex;return J.getMaxValue(e,t)+100}});G.GlobalConfig.setGlobalConfig({zIndex:()=>{const e=J.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=pe.config.InstanceUtils.getPopsMaxZIndex().zIndex;return J.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Me=new C.GM_Menu({GM_getValue:re,GM_setValue:he,GM_registerMenuCommand:De,GM_unregisterMenuCommand:Ve}),K=new C.Httpx({xmlHttpRequest:Le,logDetails:Ne});K.interceptors.request.use(e=>e);K.interceptors.response.use(void 0,e=>(r.error("拦截器-请求错误",e),e.type==="onabort"?v.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?v.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?v.error("请求超时",{consoleLogContent:true}):v.error("其它错误",{consoleLogContent:true}),e));B.Object.defineProperty,B.Function.prototype.apply,B.Function.prototype.call,B.Element.prototype.appendChild,B.setTimeout;const R=s.addStyle.bind(s),Te=U.selector.bind(U),Fe=U.selectorAll.bind(U);new C.GM_Cookie;const de="GM_Panel",qe="data-init",ie="data-key",ae="data-default-value",Ue="data-init-more-value",Pe="data-plugin-search-config",Z="data-storage-api",W={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},P={setting:{get width(){return W.width<550?"88vw":W.width<700?"550px":"700px"},get height(){return W.height<450?"70vh":W.height<550?"450px":"550px"}},settingMiddle:{get width(){return W.width<350?"88vw":"350px"}},info:{get width(){return W.width<350?"88vw":"350px"},get height(){return W.height<250?"88vh":"250px"}}};class Ge{storageKey;listenerData;constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new J.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.triggerValueChangeListener=this.triggerValueChangeListener.bind(this);}getLocalValue(){let t=re(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){he(this.storageKey,t);}set(t,n){const o=this.get(t),i=this.getLocalValue();Reflect.set(i,t,n),this.setLocalValue(i),this.triggerValueChangeListener(t,o,n);}get(t,n){const o=this.getLocalValue();return Reflect.get(o,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),o=this.getLocalValue();Reflect.deleteProperty(o,t),this.setLocalValue(o),this.triggerValueChangeListener(t,n,void 0);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){oe(this.storageKey);}addValueChangeListener(t,n){const o=Math.random(),i=this.listenerData.get(t)||[];return i.push({id:o,key:t,callback:n}),this.listenerData.set(t,i),o}removeValueChangeListener(t){let n=false;for(const[o,i]of this.listenerData.entries()){for(let l=0;l<i.length;l++){const c=i[l];(typeof t=="string"&&c.key===t||typeof t=="number"&&c.id===t)&&(i.splice(l,1),l--,n=true);}this.listenerData.set(o,i);}return n}async triggerValueChangeListener(...t){const[n,o,i]=t;if(!this.listenerData.has(n))return;let l=this.listenerData.get(n);for(let c=0;c<l.length;c++){const b=l[c];if(typeof b.callback=="function"){let p=this.get(n),d,h;typeof o<"u"&&t.length>=2?h=o:h=p,typeof i<"u"&&t.length>2?d=i:d=p,await b.callback(n,h,d);}}}}const j=new Ge(de),Y={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new C.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(l,c)=>{typeof c!="string"&&(c=x.toStr(c));const b=new Blob([c]),p=globalThis.URL.createObjectURL(b);s.createElement("a",{href:p,download:l}).click(),C.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(p);},500);},o=()=>{const l=y=>{const m=G.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(E,_){E.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),S=m.$shadowRoot.querySelector(".btn-control[data-mode='local']"),A=m.$shadowRoot.querySelector(".btn-control[data-mode='network']"),I=m.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),L=async E=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof le=="function"?typeof oe=="function"?(le().forEach(f=>{oe(f);}),v.success("已清空脚本存储的配置")):v.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):v.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof ye=="function"?ye(E):Object.keys(E).forEach(f=>{const g=E[f];he(f,g);}),v.success("配置导入完毕");},N=E=>new Promise(async _=>{const M=C.toJSON(E);Object.keys(M).length===0?v.warning("解析为空配置，不导入"):await L(M),_(true);});s.on(S,"click",E=>{s.preventEvent(E),m.close();const _=s.createElement("input",{type:"file",accept:".json"});s.on(_,["propertychange","input"],M=>{if(!_.files?.length)return;const f=_.files[0],g=new FileReader;g.onload=()=>{N(g.result);},g.readAsText(f,"UTF-8");}),_.click();}),s.on(A,"click",E=>{s.preventEvent(E),m.close();const _=G.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(g,D){g.close();}},ok:{text:"导入",callback:async(g,D)=>{const V=g.text;if(C.isNull(V)){v.error("请填入完整的url");return}const w=v.loading("正在获取配置..."),T=await K.get(V,{allowInterceptConfig:false});if(w.close(),!T.status){r.error(T),v.error("获取配置失败",{consoleLogContent:true});return}await N(T.data.responseText)&&g.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:P.info.width,height:"auto"}),M=_.$shadowRoot.querySelector("input"),f=_.$shadowRoot.querySelector(".pops-prompt-btn-ok");s.on(M,["input","propertychange"],g=>{s.val(M)===""?s.attr(f,"disabled","true"):s.removeAttr(f,"disabled");}),s.listenKeyboard(M,"keydown",(g,D,V)=>{g==="Enter"&&V.length===0&&s.val(M)!==""&&s.trigger(f,"click");}),s.trigger(M,"input");}),s.on(I,"click",async E=>{s.preventEvent(E),m.close();let _=await x.getClipboardText();if(_.trim()===""){v.warning("获取到的剪贴板内容为空");return}await N(_);});},c=(y=`${me}_panel-setting-${C.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,m)=>{const S=G.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(L,N){L.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),A=S.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),I=S.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");s.on(A,"click",L=>{s.preventEvent(L);try{n(y,m),S.close();}catch(N){v.error(N.toString(),{consoleLogContent:true});}}),s.on(I,"click",async L=>{await C.copy(m)?(v.success("复制成功"),S.close()):v.error("复制失败");});},p=G.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(y,m){l();}},cancel:{enable:true,text:"导出",callback(y,m){c(void 0,h);}}},width:W.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),d={};if(typeof le=="function")le().forEach(m=>{const S=re(m);Reflect.set(d,m,S);});else {v.warning("不支持函数GM_listValues，仅导出菜单配置");const y=re(de);Reflect.set(d,de,y);}const h=x.toStr(d);p.value=h;},i=()=>{let l=te?.script?.supportURL||te?.script?.namespace;typeof l=="string"&&C.isNotNull(l)&&window.open(l,"_blank");};return [{id:"script-version",title:`版本：${te?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(l){new Oe(l.$asideLiElement).on("tap",function(b){clearTimeout(t),t=void 0,e?(e=false,o()):(t=setTimeout(()=>{e=false,i();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},ge={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(Y.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){a.isTopWindow()&&Me.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(o=>o.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},a={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new C.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new C.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new C.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new C.Dictionary),this.__onceExecData},get scriptName(){return me},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:de,attributeKeyName:ie,attributeDefaultValueName:ae},init(){this.initContentDefaultValue(),ge.init();},isTopWindow(){return B.top===B.self},initContentDefaultValue(){const e=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const i=o.attributes;let l=i[qe];if(typeof l=="function"){let d=l();if(typeof d=="boolean"&&!d)return}let c=new Map,b=i[ie];if(b!=null){const d=i[ae];c.set(b,d);}let p=i[Ue];if(typeof p=="object"&&p&&Object.keys(p).forEach(d=>{const h=p[d];c.set(d,h);}),!c.size){r.warn(["请先配置键",o]);return}if(o.type==="switch"){let d=typeof o.disabled=="function"?o.disabled():o.disabled;typeof d=="boolean"&&d&&this.$data.contentConfigInitDisabledKeys.push(...c.keys());}for(const[d,h]of c.entries())this.setDefaultValue(d,h);},t=o=>{for(let i=0;i<o.length;i++){let l=o[i];e(l);let c=l.views;c&&Array.isArray(c)&&t(c);}},n=[...Y.getAllContentConfig()];for(let o=0;o<n.length;o++){let i=n[o];if(!i.views)continue;const l=i.views;l&&Array.isArray(l)&&t(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&r.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){j.set(e,t);},getValue(e,t){const n=j.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){j.delete(e);},hasKey(e){return j.has(e)},addValueChangeListener(e,t){return j.addValueChangeListener(e,(o,i,l)=>{t(e,l,i);})},removeValueChangeListener(e){j.removeValueChangeListener(e);},triggerMenuValueChange(e,t,n){j.triggerValueChangeListener(e,n,t);},async exec(e,t,n,o=true){const i=this;let l;typeof e=="string"||Array.isArray(e)?l=()=>e:l=e;let c=false;const b=l();let p=[];Array.isArray(b)?(c=true,p=b):p.push(b);const d=p.find(f=>!this.$data.contentConfigInitDefaultValue.has(f));if(d){r.warn(`${d} 键不存在`);return}const h=JSON.stringify(p);if(o&&this.$data.onceExecMenuData.has(h))return this.$data.onceExecMenuData.get(h);let y=[];const m=[];let S=[];const A=(f,g)=>{let D=[],V=[],w=[];if(Array.isArray(g))w=w.concat(g);else {const T=k=>{if(typeof k=="object"&&k!=null)if(k instanceof Element)w.push(k);else {const{$css:F,destory:O}=k;F!=null&&(Array.isArray(F)?w=w.concat(F):w.push(F)),typeof O=="function"&&w.push(O);}else w.push(k);};if(g!=null&&Array.isArray(g))for(const k of g)T(k);else T(g);}for(const T of w)if(T!=null){if(T instanceof Element){D.push(T);continue}if(typeof T=="function"){S.push(T);continue}}f?(y=y.concat(D),S=S.concat(V)):(L(),N());},I=f=>!!this.getValue(f),L=()=>{for(let f=0;f<y.length;f++)y[f]?.remove(),y.splice(f,1),f--;},N=()=>{for(let f=0;f<S.length;f++){const g=S[f];g(),S.splice(f,1),f--;}},E=()=>{let f=false;return typeof n=="function"?f=n(p):f=p.every(g=>I(g)),f},_=async f=>{if(E()){const D=p.map(w=>this.getValue(w)),V=await t({value:c?D:D[0],addStoreValue:(...w)=>A(true,w)});A(true,V);}else A(false,[]);};o&&p.forEach(f=>{const g=this.addValueChangeListener(f,(D,V,w)=>_());m.push(g);}),await _();const M={reload(){this.clearStoreStyleElements(),this.destory(),_();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>L(),destory(){return N()},removeValueChangeListener:()=>{m.forEach(f=>{this.removeValueChangeListener(f);});},clearOnceExecMenuData(){o&&i.$data.onceExecMenuData.delete(h);}};return this.$data.onceExecMenuData.set(h,M),M},async execMenu(e,t,n=false,o=false){return await this.exec(e,async i=>await t(i),i=>i.every(c=>{let b=!!this.getValue(c);return a.$data.contentConfigInitDisabledKeys.includes(c)&&(b=false,r.warn(`.execMenu${o?"Once":""} ${c} 被禁用`)),n&&(b=!b),b}),o)},async execMenuOnce(e,t,n=false,o=false){const i=await this.execMenu(e,t,n,true);if(o&&i){const l=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,l);}return i},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),j.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t);},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async triggerUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${me}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(c=>(typeof c.isBottom=="function"?c.isBottom():!!c.isBottom)&&c.id==="script-version")!==-1;!n&&!i&&e.push(...Y.getDefaultBottomContentConfig());let l=G.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(c,b)=>{c.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(c,b)=>{c(),this.$data.$panel=null;}},width:P.setting.width,height:P.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=e,o||this.registerConfigSearch({$panel:l,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,o=async(m,S)=>{if(m==null)return;const A=await S(m);return A&&typeof A.isFind=="boolean"&&A.isFind?A.data:await o(A.data,S)},i=(m,S)=>{const A=new IntersectionObserver(I=>{I.forEach(L=>{L.isIntersecting&&(S?.(),A.disconnect());});},{root:null,threshold:1});A.observe(m),m.scrollIntoView({behavior:"smooth",block:"center"});},l=m=>{const S="pops-flashing";s.animationend(m,()=>{m.classList.remove(S);}),m.classList.add(S);},c=m=>{if(m.type==="dblclick"&&y)return;s.preventEvent(m),p=null;const S=G.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:P.settingMiddle.width,height:"auto",drag:true,style:`
					${G.config.cssText.panelCSS}

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
				`});S.$shadowRoot.querySelector(".search-wrapper");const A=S.$shadowRoot.querySelector(".search-config-text"),I=S.$shadowRoot.querySelector(".search-result-wrapper");A.focus();const L=()=>{s.empty(I);},N=_=>{const M=C.queryProperty(_,D=>D?.next?{isFind:false,data:D.next}:{isFind:true,data:D}),f=s.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${M.matchedData?.path}</div>
							<div class="search-result-item-description">${M.matchedData?.description??""}</div>
						`}),g=G.config.PanelHandlerComponents();return s.on(f,"click",D=>{const w=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[_.index];if(!w){v.error(`左侧项下标${_.index}不存在`);return}w.scrollIntoView({behavior:"smooth",block:"center"}),w.click(),o(_.next,async T=>{if(T?.next){const k=await s.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(F=>{const O=Reflect.get(F,g.$data.nodeStoreConfigKey);return typeof O=="object"&&O!=null&&O.text===T.name}),2500);if(k)k.click();else return v.error("未找到对应的二级菜单"),{isFind:true,data:T};return {isFind:false,data:T.next}}else {const k=await s.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(F=>Reflect.get(F,g.$data.nodeStoreConfigKey)===T.matchedData?.formConfig),2500);if(k){i(k);const F=k.closest(".pops-panel-forms-fold[data-fold-enable]");F&&(F.querySelector(".pops-panel-forms-fold-container").click(),await C.sleep(500)),i(k,()=>{l(k);});}else v.error("未找到对应的菜单项");return {isFind:true,data:T}}});}),f},E=_=>{const M=new RegExp(_,"i"),f=[],g=(V,w)=>{for(let T=0;T<V.length;T++){const k=V[T],F=k.views;if(F&&Array.isArray(F)){const O=C.deepClone(w);if(k.type==="deepMenu"){const Q=C.queryProperty(O,X=>X?.next?{isFind:false,data:X.next}:{isFind:true,data:X});Q.next={name:k.text};}g(F,O);}else {let O,Q;if(k.type==="own"){const q=Reflect.get(k.attributes||{},Pe);q&&(typeof q.text=="string"&&(O=q.text),typeof q.desc=="string"&&(Q=q.desc));}else O=k.text,Q=Reflect.get(k,"description");const X=[O,Q],be=X.findIndex(q=>{if(typeof q=="string")return q.match(M)});if(be!==-1){const q=C.deepClone(w),we=C.queryProperty(q,H=>H?.next?{isFind:false,data:H.next}:{isFind:true,data:H});we.next={name:O,matchedData:{path:"",formConfig:k,matchedText:X[be],description:Q}};const ve=[];C.queryProperty(q,H=>{const fe=H?.name;return typeof fe=="string"&&fe.trim()!==""&&ve.push(fe),H?.next?{isFind:false,data:H.next}:{isFind:true,data:H}});const $e=ve.join(x.escapeHtml(" - "));we.next.matchedData.path=$e,f.push(q);}}}};for(let V=0;V<n.length;V++){const w=n[V];if(!w.views||w.isBottom&&w.id==="script-version")continue;const T=w.views;if(T&&Array.isArray(T)){let k=w.title;typeof k=="function"&&(k=k()),g(T,{index:V,name:k});}}const D=document.createDocumentFragment();for(const V of f){let w=N(V);D.appendChild(w);}L(),I.append(D);};s.on(A,"input",C.debounce(_=>{s.preventEvent(_);let M=s.val(A).trim();if(M===""){L();return}E(M);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(m=>{s.on(m,"dblclick",c);});let p=null,d=false,h,y=false;s.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(m,S)=>{y=true,clearTimeout(h),h=void 0,d&&p===S?(d=false,p=null,c(m)):(h=setTimeout(()=>{d=false;},200),d=true,p=S);},{capture:true}),t.$shadowRoot.appendChild(s.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e}},$={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isBlogArticle(){return this.isBlog()&&window.location.pathname.includes("/article/details/")},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},He=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,Re={init(){R(He),a.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),a.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),a.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),a.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),a.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return r.info("自动展开全文"),[x.addBlockCSS("div.article-show-more"),R(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return r.info("屏蔽云开发者任务挑战活动"),x.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return r.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),x.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return r.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),x.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return r.info("屏蔽底部推荐内容"),x.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return r.info("屏蔽底部更多推荐"),x.addBlockCSS("div.more-article")}},je=`.main_father {\r
  justify-content: center;\r
}\r
#mainBox main {\r
  width: inherit !important;\r
}\r
/* 当文章向下滚动时，触发左侧信息悬浮 */\r
aside.blog_container_aside[style*="position: fixed;"] {\r
  display: none !important;\r
}\r
\r
@media (min-width: 1320px) and (max-width: 1380px) {\r
  .nodata .container {\r
    width: 900px !important;\r
  }\r
\r
  .nodata .container main {\r
    width: 900px;\r
  }\r
\r
  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
    width: 490px !important;\r
  }\r
\r
  .nodata .container main .articleConDownSource {\r
    width: 500px;\r
  }\r
}\r
\r
@media screen and (max-width: 1320px) {\r
  .nodata .container {\r
    width: 760px !important;\r
  }\r
\r
  .nodata .container main {\r
    width: 760px;\r
  }\r
\r
  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
    width: 490px !important;\r
  }\r
\r
  .nodata .container main .toolbox-list .tool-reward {\r
    display: none;\r
  }\r
\r
  .nodata .container main .more-toolbox-new .toolbox-left .profile-box .profile-name {\r
    max-width: 128px;\r
  }\r
\r
  .nodata .container main .articleConDownSource {\r
    width: 420px;\r
  }\r
}\r
\r
@media screen and (min-width: 1380px) {\r
  .nodata .container {\r
    width: 1010px !important;\r
  }\r
\r
  .nodata .container main {\r
    width: 1010px;\r
  }\r
\r
  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
    width: 490px !important;\r
  }\r
\r
  .nodata .container main .articleConDownSource {\r
    width: 560px;\r
  }\r
}\r
\r
@media (min-width: 1550px) and (max-width: 1700px) {\r
  .nodata .container {\r
    width: 820px !important;\r
  }\r
\r
  .nodata .container main {\r
    width: 820px;\r
  }\r
\r
  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
    width: 690px !important;\r
  }\r
\r
  .nodata .container main .articleConDownSource {\r
    width: 500px;\r
  }\r
}\r
\r
@media screen and (min-width: 1700px) {\r
  .nodata .container {\r
    width: 1010px !important;\r
  }\r
\r
  .nodata .container main {\r
    width: 1010px;\r
  }\r
\r
  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
    width: 690px !important;\r
  }\r
\r
  .nodata .container main .articleConDownSource {\r
    width: 560px;\r
  }\r
}\r
`,We={init(){a.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),a.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),a.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),a.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),a.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),a.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop()),this.initRightToolbarOffset(),s.ready(()=>{a.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){r.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let c=Te("#pcCommentBox");if(c&&c.getClientRects().length)t=c;else {r.error("评论区处于隐藏状态");return}}r.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,o=document.querySelector("#csdn-toolbar"),i=window.getComputedStyle(o),l=o.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom);window.scrollTo({top:n-l-8,left:0,behavior:"smooth"});}),s.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){r.info("初始化右侧工具栏的偏移（top、right）"),R(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),s.waitNode(".csdn-side-toolbar").then(e=>{s.css(e,{top:parseInt(a.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(a.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldRightToolbar(){return r.info("屏蔽右侧工具栏"),x.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return r.info("【屏蔽】创作中心"),x.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return r.info("【屏蔽】显示/隐藏侧栏"),x.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return r.info("【屏蔽】新手引导"),x.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return r.info("【屏蔽】客服"),x.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return r.info("【屏蔽】举报"),x.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return r.info("【屏蔽】返回顶部"),x.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},Ke={init(){We.init(),a.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),a.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),a.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),a.exec("csdn-blog-blockComment",()=>this.blockComment(),e=>!a.getValue(e[0]),true),a.exec("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),e=>!a.getValue(e[0]),true),a.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),a.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),a.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),a.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),a.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),a.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),s.ready(()=>{a.execMenuOnce("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),a.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),a.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},clickPreCodeAutomatically(){r.info("点击代码块自动展开"),document.addEventListener("click",function(e){let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),t.querySelector(".hide-preCode-box")?.remove());});},restoreComments(){r.info("恢复评论到正确位置-第一条评论"),s.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),r.info("恢复评论到正确位置-第二条评论"),s.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){r.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{a.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){r.info("全文居中");let e=[R(je)];return e.push(this.shieldRightDirectoryInformation()),e.push(R(`
      #mainBox {
        margin-right: 0px;
      }
      `)),e.push(this.shieldLeftBlogContainerAside()),e.push(R(`
      #mainBox {
        margin-left: 0px;
      }`)),e},shieldLoginDialog(){return r.info("屏蔽登录弹窗"),x.addBlockCSS(".passport-login-container")},autoExpandCodeContent(){return r.info("自动展开代码块"),[x.addBlockCSS("pre.set-code-hide .hide-preCode-box"),R(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return r.info("自动展开全文"),R(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},blockComment(){return r.info("屏蔽评论区"),x.addBlockCSS("#pcCommentBox")},shieldBottomRecommendArticle(){return r.info("屏蔽底部推荐文章"),x.addBlockCSS("main > div.recommend-box")},shieldBottomSkillTree(){return r.info("屏蔽底部xx技能树"),x.addBlockCSS("#treeSkill")},shieldBottomFloatingToolbar(){return r.info("屏蔽底部悬浮工具栏"),x.addBlockCSS("#toolBarBox")},shieldLeftBlogContainerAside(){return r.info("【屏蔽】左侧博客信息"),x.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return r.info("【屏蔽】右侧目录信息"),x.addBlockCSS("#rightAsideConcision","#rightAside")},shieldArticleSearchTip(){return r.info("屏蔽文章内的选中搜索悬浮提示"),x.addBlockCSS("#articleSearchTip")},allowSelectContent(){return r.info("允许选择内容"),R(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},ze=`#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {\r
  max-height: unset !important;\r
  height: auto !important;\r
  overflow: auto !important;\r
}\r
\r
.forbid {\r
  user-select: text !important;\r
}\r
`,Je=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}\r
`,Ze={init(){R(ze),R(Je),a.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),a.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),a.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return r.info("【屏蔽】资源推荐"),x.addBlockCSS("#recommend")},shieldRightUserInfo(){return r.info("【屏蔽】右侧用户信息"),x.addBlockCSS(".layout-right")},shieldRightToolBar(){return r.info("【屏蔽】右侧悬浮工具栏"),x.addBlockCSS(".csdn-side-toolbar")}},Be={init(){a.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),o=decodeURIComponent(n);r.success(`跳转链接：${o}`),window.location.href=o;}else r.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){v.error("跳转链接失败："+e.message);}}},Ye=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,Qe=`.ecommend-item-box.recommend-recommend-box,\r
.login-mark,\r
.opt-box.text-center,\r
.leftPop,\r
#csdn-shop-window,\r
.toolbar-advert,\r
.hide-article-box,\r
.user-desc.user-desc-fix,\r
.recommend-card-box,\r
.more-article,\r
.article-show-more,\r
#csdn-toolbar-profile-nologin,\r
.guide-rr-first,\r
#recommend-item-box-tow,\r
/* 发文章得原力分图片提示 */\r
div.csdn-toolbar-creative-mp,\r
/* 阅读终点，创作起航，您可以撰写心得或摘录文章要点写篇博文。 */\r
#toolBarBox div.write-guide-buttom-box,\r
/* 觉得还不错? 一键收藏 */\r
ul.toolbox-list div.tool-active-list,\r
/* 右边按钮组的最上面的创作话题 */\r
div.csdn-side-toolbar .activity-swiper-box,\r
.sidetool-writeguide-box .tip-box,\r
/* 右下角的登录提示 */\r
.passport-login-tip-container,\r
/* 全屏双十一红包 */\r
.csdn-reapck-select,\r
/* 侧栏的618会员开通 */\r
.csdn-side-toolbar  .sidecolumn-vip,\r
/* 右边推荐的推广广告 */\r
#recommendAdBox,\r
/* 顶部导航栏的vip推广 */\r
#csdn-plugin-vip,\r
/* 侧栏的【点击体验 DeepSeekR1满血版】 */\r
#sidecolumn-deepseek,\r
/* 侧栏的【下载APP、公众号、视频号】 */\r
.csdn-side-toolbar .option-box[data-type="app"] {\r
  display: none !important;\r
}\r
`,Ae={init(){a.onceExec("csdn-blog-blockCSS",()=>this.addCSS()),a.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),s.ready(()=>{a.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),a.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},addCSS(){return r.info("添加屏蔽CSS和功能CSS"),[R(Qe),R(Ye)]},removeClipboardHijacking(){r.info("去除剪贴板劫持");let e=document.querySelector(".article-copyright");e&&e.remove(),B.articleType&&(B.articleType=0),B.csdn&&B.csdn.copyright&&B.csdn.copyright.textData&&(B.csdn.copyright.textData=""),B.csdn&&B.csdn.copyright&&B.csdn.copyright.htmlData&&(B.csdn.copyright.htmlData="");},unBlockCopy(){r.info("取消禁止复制"),s.on(document,"click",".hljs-button",function(t,n){s.preventEvent(t);let o=n,i=o.closest(".hljs")||o.closest("pre"),l=o.parentElement,c=i?.querySelector("code")||l.querySelector("code")||l,b=c.innerText;r.info("点击复制按钮复制内容："+(b.length>8?b.substring(0,8)+"...":b),c),C.copy(b),o.setAttribute("data-title","复制成功");},{capture:true});let e=new C.LockFunction(function(t){let n=t.target;if(n.localName!=="pre")return;let o=n.querySelector(".hljs-button");o&&o.setAttribute("data-title","复制");});s.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),s.waitNode("#content_views").then(t=>{B.$&&B.$("#content_views")?.unbind("copy"),s.on(t,"copy",function(n){s.preventEvent(n);let i=B.getSelection()?.toString();return r.info("Ctrl+C复制内容："+(i.length>8?i.substring(0,8)+"...":i)),C.copy(i),false},{capture:true});}),s.waitNode(".hljs-button").then(()=>{setTimeout(()=>{Fe(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},shieldTopToolbar(){return r.info("屏蔽顶部Toolbar"),x.addBlockCSS("#toolbarBox","#csdn-toolbar")}},Se={init(){$.isLink()?(r.info("Router: 中转链接"),Be.init()):$.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),Re.init()):$.isBlog()?(r.info("Router: 博客"),Ae.init(),$.isBlogArticle()&&(r.info("Router: 帖子"),Ke.init())):$.isWenKu()?(r.info("Router: 文库"),Ze.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},Xe={init(){a.execMenuOnce("m-csdn-link-jumpRedirect",()=>{Be.jumpRedirect();});}},et=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,tt={init(){R(et),a.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>Re.autoExpandContent()),a.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return r.info("【屏蔽】底部加入社区"),x.addBlockCSS(".user-desc")}},se={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=C.toJSON(e)),e?.code===200)}},ce={async folderListWithCheck(e){const t=await K.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":C.getRandomPCUA()}});r.info(t);const n=C.toJSON(t.data.responseText);if(!t.status||!se.isSuccessResponse(t.data.responseText)){r.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?v.error(n.msg):v.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(e){const t=await K.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":C.getRandomPCUA()},allowInterceptConfig:false});if(r.info(t),!t.status||!se.isSuccessResponse(t.data.responseText)){r.error("添加收藏失败，请求异常",t),v.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){const t=await K.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":C.getRandomPCUA()}});if(r.info(t),!t.status||!se.isSuccessResponse(t.data.responseText)){r.error("检查收藏夹状态失败，请求异常"),v.error("检查收藏夹状态失败，请求异常");return}return C.toJSON(t.data.responseText).data},async createFolder(e){const t=await K.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":C.getRandomPCUA()},allowInterceptConfig:false});if(r.info(t),!t.status||!se.isSuccessResponse(t.data.responseText)){v.error("创建收藏夹失败");return}return C.toJSON(t.data.responseText).data}},nt={init(){a.exec("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),a.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight()),a.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),a.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),a.exec("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),e=>!a.getValue(e[0]),true),a.exec("m-csdn-blog-comment-enable",()=>this.blockComment(),e=>!a.getValue(e[0]),true),a.exec("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),s.ready(()=>{a.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),a.execMenuOnce("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),a.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{Ae.unBlockCopy();}),a.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>{this.optimizationCollectButton();});});},shieldTopToolbar(){return r.info("屏蔽顶部Toolbar"),[x.addBlockCSS("#csdn-toolbar"),R(`
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
			`)]},refactoringRecommendation(){function e(){document.querySelectorAll(".container-fluid").forEach(n=>{let o="",i="",l="",c="",b=false,p=false;if(n.hasAttribute("data-url")){if(o=n.getAttribute("data-url"),i=n.querySelector(".recommend_title div.left")?.innerHTML,!n.querySelector(".text"))return;l=n.querySelector(".text")?.innerHTML,n.querySelectorAll(".recommend-img").length&&n.querySelectorAll(".recommend-img").forEach(h=>{c+=h.innerHTML;});}else o=n.querySelector("a[data-type]").getAttribute("href"),i=n.querySelector(".recommend_title div.left").innerHTML,l=n.querySelector(".text").innerHTML;var d=new URL(o);d.host==="download.csdn.net"||d.host==="www.iteye.com"&&d.pathname.match(/^\/resource/gi)?(b=true,i='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+i):d.origin.match(/edu.csdn.net/gi)&&(p=true,i='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+i),n.setAttribute("class","GM-csdn-dl"),n.setAttribute("data-url",o),n.innerHTML=`<div class="GM-csdn-title"><div class="left">${i}</div></div><div class="GM-csdn-content">${l}</div><div class="GM-csdn-img">${c}</div>`,n.addEventListener("click",function(){a.getValue("m-csdn-blog-openNewTab")?window.open(o,"_blank"):window.location.href=o;}),(b||p)&&a.getValue("m-csdn-blog-removeResourceArticle")&&n.remove();});}let t=new C.LockFunction(e,50);s.waitNode("#recommend").then(n=>{r.info("重构底部推荐"),t.run(),C.mutationObserver(n,{callback:()=>{t.run();},config:{childList:true,subtree:true,attributes:true}});});},blockBottomArticle(){return r.info("屏蔽底部文章"),x.addBlockCSS("#recommend")},blockComment(){return r.info("屏蔽评论"),x.addBlockCSS("#comment")},removeAds(){return r.info("去除广告"),[x.waitRemove(".passport-login-container"),x.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),x.waitRemove(".add-firstAd"),x.waitRemove("div.feed-Sign-weixin"),x.waitRemove("div.ios-shadowbox")]},notLimitCodePreMaxHeight(){return r.info("不限制代码块最大高度"),R(`
        pre{
            max-height: unset !important;
        }
        `)},notLimitCommentMaxHeight(){return r.info("不限制评论区最大高度"),R(`
        #comment{
          max-height: none !important;
        }
      `)},allowSelectText(){return r.info("允许选择文字"),R(`
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
        `)},autoExpandContent(){return r.info("自动展开内容"),R(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `)},blockBottomToolBar(){return r.info("屏蔽底部工具栏"),x.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return r.info("底部工具栏常驻"),R(`
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`)},optimizationCollectButton(){r.info("优化收藏按钮"),s.waitNode("#operate .collect-btn",1e4).then(e=>{e&&s.on(e,"click",async t=>{s.preventEvent(t);let n=e.querySelector(".collect"),o=e.querySelector(".uncollect"),i=await ce.folderListWithCheck(window.location.origin+window.location.pathname);if(!i)return;let l=[];i.forEach(d=>{d.IsFavorite&&l.push(d.ID);});let c=d=>{let h=d.ID,y=s.createElement("li",{className:"csdn-collection-item",innerHTML:`
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
								`},{"data-is-collect":d.IsFavorite});y.querySelector(".title-m");let m=y.querySelector(".csdn-collection-item_length");y.querySelector(".csdn-collection-controls");let S=y.querySelector(".collect-btn");return s.on(S,"click",async A=>{let I=B.articleDetailUrl;I==null&&(I=window.location.origin+window.location.pathname);let L=B.articleId;if(L==null){r.error("获取文章ID失败"),v.error("获取文章ID失败");return}let N=B.username;if(N==null){r.error("获取文章作者失败"),v.error("获取文章作者失败");return}let E=B.articleTitle;if(E==null&&(E=document.title.replace(/-CSDN博客$/,"")),E==null){r.error("获取文章标题失败"),v.error("获取文章标题失败");return}let _=B.articleDesc;if(_==null){let g=Te("meta[name='description']");g&&(_=g.getAttribute("content"));}if(_==null){r.error("获取文章描述失败"),v.error("获取文章描述失败");return}let M=[...l],f=v.loading("处理中...");try{let g=await ce.checkFavoriteByUrl(I);if(g==null)return;r.info(h,g);let D=!g[h];if(D?(r.info("添加收藏"),M.push(h)):(r.info("取消收藏"),M.splice(M.indexOf(h),1)),!await ce.addFavoriteInFolds({author:N,url:I,source:"blog",sourceId:L,title:E,description:_,fromType:"PC",username:d.Username,folderIdList:M}))return;let w=await ce.checkFavoriteByUrl(I);if(w==null)return;r.info(h,w),y.setAttribute("data-is-collect",(!!w[h]).toString()),D?w[h]?(r.success("收藏成功"),v.success("收藏成功"),s.text(S,"已收藏"),l.includes(h)||l.push(h),d.FavoriteNum++):(r.error("收藏失败",w,h),v.error("收藏失败")):w[h]?(r.error("取消收藏失败",w,h),v.error("取消收藏失败")):(r.success("取消收藏成功"),v.success("取消收藏成功"),s.text(S,"收藏"),l.includes(h)&&l.splice(l.indexOf(h),1),d.FavoriteNum--),s.text(m,`${d.FavoriteNum}条内容`),Object.values(w).find(k=>k)?(s.show(n,!1),s.hide(o,!1)):(s.show(o,!1),s.hide(n,!1)),f.close();}catch(g){r.error(g);}finally{f.close();}}),y},p=G.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:P.setting.width,height:P.setting.height,drag:true,mask:{enable:true},style:`
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
							`}).$shadowRoot.querySelector(".csdn-collection-items");i.forEach(d=>{let h=c(d);p.appendChild(h);});},{capture:true});});}},ot=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,rt={init(){R(ot),a.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return r.info("【屏蔽】底部工具栏"),x.addBlockCSS(".page-container > div.btn")}},it=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
  display: none !important;\r
}\r
`,at={init(){a.execMenuOnce("m-csdn-download-removeAds",()=>R(it)),a.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return r.info("自动展开资源介绍"),[x.addBlockCSS("label.unfold-font"),R(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},lt=`.view_comment_box,\r
.weixin-shadowbox.wap-shadowbox,\r
.feed-Sign-span,\r
.user-desc.user-desc-fix,\r
.comment_read_more_box,\r
#content_views pre.set-code-hide .hide-preCode-box,\r
/* 登录弹窗 */\r
.passport-login-container,\r
.hljs-button[data-title='登录后复制'],\r
.article-show-more,\r
#treeSkill,\r
div.btn_open_app_prompt_div,\r
div.readall_box,\r
div.aside-header-fixed,\r
div.feed-Sign-weixin,\r
div.ios-shadowbox,\r
/* 底部评论工具栏的抢沙发图片 */\r
.comment-sofa-flag {\r
  display: none !important;\r
}\r
`,st=`#mainBox {\r
  width: auto;\r
}\r
.user-desc.user-desc-fix {\r
  height: auto !important;\r
  overflow: auto !important;\r
}\r
.component-box .praise {\r
  background: #ff5722;\r
  border-radius: 5px;\r
  padding: 0px 8px;\r
  height: auto;\r
}\r
.component-box .praise,\r
.component-box .share {\r
  color: #fff;\r
}\r
.component-box a {\r
  display: inline-block;\r
  font-size: xx-small;\r
}\r
.component-box {\r
  display: inline;\r
  margin: 0;\r
  position: relative;\r
  white-space: nowrap;\r
}\r
.csdn-edu-title {\r
  background: #4d6de1;\r
  border-radius: 5px;\r
  padding: 0px 8px;\r
  height: auto;\r
  color: #fff !important;\r
}\r
\r
.GM-csdn-dl {\r
  padding: 0.24rem 0.32rem;\r
  width: 100%;\r
  justify-content: space-between;\r
  -webkit-box-pack: justify;\r
  border-bottom: 1px solid #f5f6f7 !important;\r
}\r
.GM-csdn-title {\r
  font-size: 0.3rem;\r
  color: #222226;\r
  letter-spacing: 0;\r
  line-height: 0.44rem;\r
  font-weight: 600;\r
  /*max-height: .88rem;*/\r
  word-break: break-all;\r
  overflow: hidden;\r
  display: -webkit-box;\r
  -webkit-box-orient: vertical;\r
  -webkit-line-clamp: 2;\r
}\r
.GM-csdn-title a {\r
  word-break: break-all;\r
  color: #222226;\r
  font-weight: 600;\r
}\r
.GM-csdn-title em,\r
.GM-csdn-content em {\r
  font-style: normal;\r
  color: #fc5531;\r
}\r
.GM-csdn-content {\r
  /*max-width: 5.58rem;*/\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  display: -webkit-box;\r
  -webkit-line-clamp: 1;\r
  -webkit-box-orient: vertical;\r
  color: #555666;\r
  font-size: 0.24rem;\r
  line-height: 0.34rem;\r
  max-height: 0.34rem;\r
  word-break: break-all;\r
  -webkit-box-flex: 1;\r
  -ms-flex: 1;\r
  flex: 1;\r
  margin-top: 0.16rem;\r
}\r
.GM-csdn-img img {\r
  width: 2.18rem;\r
  height: 1.58rem;\r
  /*margin-left: .16rem*/\r
}\r
`,ct={init(){this.addCSS();},addCSS(){return [R(lt),R(st)]}},ke={init(){$.isLink()?(r.info("Router: 中转链接"),Xe.init()):$.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),tt.init()):$.isBlog()?(r.info("Router: 博客"),ct.init(),$.isBlogArticle()&&(r.info("Router: 文章"),nt.init())):$.isWenKu()?(r.info("Router: 文库"),rt.init()):$.isDownload()?(r.info("Router: 资源下载"),at.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},xe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new J.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let o;this.hasStorageApi(e)?o=this.getStorageApi(e):o=n,this.setComponentsStorageApiProperty(t,o);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,Z,t);}},u=function(e,t,n,o,i,l,c,b){const p={text:e,type:"switch",description:i,disabled:c,attributes:{},props:{},getValue(){return this.props[Z].get(t,n)},callback(d,h){const y=!!h;if(r.success(`${y?"开启":"关闭"} ${e}`),typeof o=="function"&&o(d,y))return;this.props[Z].set(t,y);},afterAddToUListCallBack:l};return Reflect.set(p.attributes,ie,t),Reflect.set(p.attributes,ae,n),xe.initComponentsStorageApi("switch",p,{get(d,h){return a.getValue(d,h)},set(d,h){a.setValue(d,h);}}),p},ue=function(e,t,n,o,i,l,c){const b={text:e,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[Z].get(t,n)},callback(p){if(p==null)return;const d=p.value;if(r.info(`选择：${p.text}`),typeof i=="function"&&i(p))return;this.props[Z].set(t,d);},data:o};return Reflect.set(b.attributes,ie,t),Reflect.set(b.attributes,ae,n),xe.initComponentsStorageApi("select",b,{get(p,d){return a.getValue(p,d)},set(p,d){a.setValue(p,d);}}),b},dt={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ue("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{r.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),ue("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),u("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},_e=function(e,t,n,o,i,l,c,b,p,d){const h={text:e,type:"slider",description:b,attributes:{},props:{},getValue(){return this.props[Z].get(t,n)},getToolTipContent(y){return typeof c=="function"?c(y):`${y}`},callback(y,m){if(typeof l=="function"&&l(y,m))return;this.props[Z].set(t,m);},min:o,max:i,step:p};return Reflect.set(h.attributes,ie,t),Reflect.set(h.attributes,ae,n),xe.initComponentsStorageApi("slider",h,{get(y,m){return a.getValue(y,m)},set(y,m){a.setValue(y,m);}}),h},ut={id:"panel-blog",title:"博客",isDefault(){return $.isBlog()},views:[{text:"",type:"container",views:[{text:"全局布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[u("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false)]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[u("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),u("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"功能",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[u("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),u("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),u("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),u("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",views:[{text:"功能",type:"container",views:[u("启用","csdn-blog-rightToolbarEnable",true,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),u("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加"),_e("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");s.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),_e("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");s.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"container",views:[u("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),u("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),u("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),u("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),u("【屏蔽】举报","csdn-blog-rightToolbarReport",false),u("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[u("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),u("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),u("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),u("全文居中","csdn-blog-articleCenter",true,void 0,"自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中"),u("允许选择内容","csdn-blog-allowSelectContent",true,void 0,"解除文字选中限制")]},{text:"屏蔽",type:"container",views:[u("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),u("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记")]}]},{text:"评论区",type:"deepMenu",views:[{text:"",type:"container",views:[u("启用","csdn-blog-blockComment",true,void 0,"关闭是屏蔽评论区"),u("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[u("启用","csdn-blog-bottomRecommendArticleEnable",true,void 0,"<code>开启</code>是允许出现推荐文章，<code>关闭</code>是屏蔽底部文章"),u("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),u("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]},pt={id:"panel-link",title:"链接",isDefault(){return $.isLink()},views:[{text:"功能",type:"container",views:[u("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},ht={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return $.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[u("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"container",views:[u("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),u("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),u("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),u("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),u("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},ft={id:"panel-wenku",title:"资源",isDefault(){return $.isLink()},views:[{text:"屏蔽",type:"container",views:[u("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),u("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),u("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]},mt={id:"panel-so",title:"搜索",isDefault(){return $.isSo()},views:[{text:"C知道-功能",type:"container",views:[u("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},gt={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ue("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{r.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),ue("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),u("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},xt={id:"m-panel-blog",title:"博客",isDefault(){return $.isBlog()},views:[{type:"container",text:"",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[u("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),u("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]},{type:"deepMenu",text:"顶部工具栏",views:[{type:"container",text:"",views:[u("启用","m-csdn-blog-shieldTopToolbar",false,void 0,"关闭是屏蔽顶部工具栏")]}]},{text:"内容",type:"deepMenu",views:[{text:"",type:"container",views:[u("允许选中文字","m-csdn-blog-allowSelectText",true,void 0,"设置user-select: text;"),u("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"包括内容、代码块"),u("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",views:[{text:"",type:"container",views:[u("启用","m-csdn-blog-comment-enable",true,void 0,"关闭是屏蔽评论区"),u("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[u("启用","m-csdn-blog-bottomArticleEnable",true,void 0,"关闭是屏蔽底部文章"),u("移除资源下载","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),u("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),u("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",views:[{type:"container",text:"",views:[u("启用","m-csdn-blog-bottom-toolbar-enable",false,void 0,"关闭是屏蔽底部工具栏"),u("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),u("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]},bt={id:"m-panel-link",title:"链接",isDefault(){return $.isLink()},views:[{text:"功能",type:"container",views:[u("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},wt={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return $.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[u("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"container",views:[u("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},vt={id:"m-panel-wenku",title:"文库",isDefault(){return $.isWenKu()},views:[{text:"屏蔽",type:"container",views:[u("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},Ct={id:"panel-so",title:"搜索",isDefault(){return $.isSo()},views:[{text:"C知道-功能",type:"container",views:[u("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},yt={id:"m-panel-download",title:"资源",isDefault(){return $.isDownload()},views:[{text:"功能",type:"container",views:[u("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"container",views:[u("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]};ge.deleteMenuOption(0);ge.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(Y.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(Y.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);Y.addContentConfig([dt,ut,pt,ht,ft,mt]);Y.addContentConfig([gt,xt,bt,wt,vt,Ct,yt]);a.init();let Ee=C.isPhone(),ne="change_env_set",z=re(ne);Me.add({key:ne,text:`⚙ 自动: ${Ee?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return z==null?e:e+` 手动: ${z==1?"移动端":z==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){v.error("输入的不是规范的数字");return}if(!e.includes(n)){v.error("输入的值必须是0或1或2");return}n==0?oe(ne):he(ne,n);}});z!=null?(r.info(`手动判定为${z===1?"移动端":"PC端"}`),z==1?ke.init():z==2?Se.init():(v.error("意外，手动判定的值不在范围内"),oe(ne))):Ee?(r.info("自动判定为移动端"),ke.init()):(r.info("自动判定为PC端"),Se.init());

})(Qmsg, DOMUtils, Utils, pops);