// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.10.21
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.6.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.5.0/dist/index.umd.min.js
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

(function (y, N, K, pe) {
  'use strict';

  var ne=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ye=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,oe=typeof GM_getValue<"u"?GM_getValue:void 0,ee=typeof GM_info<"u"?GM_info:void 0,le=typeof GM_listValues<"u"?GM_listValues:void 0,De=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,fe=typeof GM_setValue<"u"?GM_setValue:void 0,ve=typeof GM_setValues<"u"?GM_setValues:void 0,$e=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Le=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,R=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ie=window;const b={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&N.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),N.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),T(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof ye=="function"?ye(e.keyName):null;return typeof t=="string"&&t?T(t):b.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{N.ready(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(o){navigator.clipboard.readText().then(i=>{o(i);}).catch(i=>{r.error("读取剪贴板内容失败👉",i),o("");});}function t(o){navigator.permissions.query({name:"clipboard-read"}).then(i=>{e(o);}).catch(i=>{r.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),e(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?t(o):window.addEventListener("focus",()=>{t(o);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let o,i=n-t,l=t,c=async w=>{let m=await e(w);if(typeof m=="boolean"&&!m||w){v.workerClearTimeout(o);return}if(l+=t,l>i){c(true);return}o=v.workerSetTimeout(()=>{c(false);},t);};c(false);},findParentNode(e,t,n){if(n){let o=N.closest(e,n);if(o)return o.querySelector(t)}else return N.matches(e,t)?e:N.closest(e,t)},toStr(e){const t="__undefined__placeholder__replaced__str__";return JSON.stringify(e,(o,i)=>i===void 0?t:i,2).replace(new RegExp(`"${t}"`,"g"),"undefined")}},Q={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},v=K.noConflict(),s=N.noConflict(),U=pe,r=new v.Log(ee,R.console||Ie.console);let he=ee?.script?.name||void 0;const Oe=pe.config.Utils.AnyTouch(),Ne=false;r.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});y.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.getSetting().type;if(t==="loading")return  false;const n=e.getSetting().content;return t==="warning"?r.warn(n):t==="error"?r.error(n):r.info(n),true},get position(){return a.getValue(Q.qmsg_config_position.key,Q.qmsg_config_position.defaultValue)},get maxNums(){return a.getValue(Q.qmsg_config_maxnums.key,Q.qmsg_config_maxnums.defaultValue)},get showReverse(){return a.getValue(Q.qmsg_config_showreverse.key,Q.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=K.getMaxZIndex(),t=pe.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(e,t)+100}});U.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=K.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=pe.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Me=new v.GM_Menu({GM_getValue:oe,GM_setValue:fe,GM_registerMenuCommand:De,GM_unregisterMenuCommand:$e}),H=new v.Httpx({xmlHttpRequest:Le,logDetails:Ne});H.interceptors.request.use(e=>e);H.interceptors.response.use(void 0,e=>(r.error("拦截器-请求错误",e),e.type==="onabort"?y.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?y.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?y.error("请求超时",{consoleLogContent:true}):y.error("其它错误",{consoleLogContent:true}),e));R.Object.defineProperty,R.Function.prototype.apply,R.Function.prototype.call,R.Element.prototype.appendChild,R.setTimeout;const T=s.addStyle.bind(s),Te=N.selector.bind(N),qe=N.selectorAll.bind(N);new v.GM_Cookie;const de="GM_Panel",Fe="data-init",re="data-key",ie="data-default-value",Ue="data-init-more-value",z="data-storage-api",j={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},q={setting:{get width(){return j.width<550?"88vw":j.width<700?"550px":"700px"},get height(){return j.height<450?"70vh":j.height<550?"450px":"550px"}},settingMiddle:{get width(){return j.width<350?"88vw":"350px"}},info:{get width(){return j.width<350?"88vw":"350px"},get height(){return j.height<250?"88vh":"250px"}}};class Pe{storageKey;listenerData;constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new K.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.triggerValueChangeListener=this.triggerValueChangeListener.bind(this);}getLocalValue(){let t=oe(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){fe(this.storageKey,t);}set(t,n){const o=this.get(t),i=this.getLocalValue();Reflect.set(i,t,n),this.setLocalValue(i),this.triggerValueChangeListener(t,o,n);}get(t,n){const o=this.getLocalValue();return Reflect.get(o,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),o=this.getLocalValue();Reflect.deleteProperty(o,t),this.setLocalValue(o),this.triggerValueChangeListener(t,n,void 0);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){ne(this.storageKey);}addValueChangeListener(t,n){const o=Math.random(),i=this.listenerData.get(t)||[];return i.push({id:o,key:t,callback:n}),this.listenerData.set(t,i),o}removeValueChangeListener(t){let n=false;for(const[o,i]of this.listenerData.entries()){for(let l=0;l<i.length;l++){const c=i[l];(typeof t=="string"&&c.key===t||typeof t=="number"&&c.id===t)&&(i.splice(l,1),l--,n=true);}this.listenerData.set(o,i);}return n}async triggerValueChangeListener(...t){const[n,o,i]=t;if(!this.listenerData.has(n))return;let l=this.listenerData.get(n);for(let c=0;c<l.length;c++){const w=l[c];if(typeof w.callback=="function"){let m=this.get(n),d,p;typeof o<"u"&&t.length>=2?p=o:p=m,typeof i<"u"&&t.length>2?d=i:d=m,await w.callback(n,p,d);}}}}const G=new Pe(de),J={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new v.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(l,c)=>{typeof c!="string"&&(c=b.toStr(c));const w=new Blob([c]),m=globalThis.URL.createObjectURL(w);s.createElement("a",{href:m,download:l}).click(),v.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(m);},500);},o=()=>{const l=C=>{const h=U.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(A,k){A.close();}}},drag:true,mask:{enable:true},width:q.info.width,height:q.info.height,style:`
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
          }`}),S=h.$shadowRoot.querySelector(".btn-control[data-mode='local']"),V=h.$shadowRoot.querySelector(".btn-control[data-mode='network']"),I=h.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),$=async A=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof le=="function"?typeof ne=="function"?(le().forEach(g=>{ne(g);}),y.success("已清空脚本存储的配置")):y.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):y.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof ve=="function"?ve(A):Object.keys(A).forEach(g=>{const f=A[g];fe(g,f);}),y.success("配置导入完毕");},O=A=>new Promise(async k=>{const M=v.toJSON(A);Object.keys(M).length===0?y.warning("解析为空配置，不导入"):await $(M),k(true);});s.on(S,"click",A=>{s.preventEvent(A),h.close();const k=s.createElement("input",{type:"file",accept:".json"});s.on(k,["propertychange","input"],M=>{if(!k.files?.length)return;const g=k.files[0],f=new FileReader;f.onload=()=>{O(f.result);},f.readAsText(g,"UTF-8");}),k.click();}),s.on(V,"click",A=>{s.preventEvent(A),h.close();const k=U.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(f,L){f.close();}},ok:{text:"导入",callback:async(f,L)=>{const B=f.text;if(v.isNull(B)){y.error("请填入完整的url");return}const x=y.loading("正在获取配置..."),_=await H.get(B,{allowInterceptConfig:false});if(x.close(),!_.status){r.error(_),y.error("获取配置失败",{consoleLogContent:true});return}await O(_.data.responseText)&&f.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:q.info.width,height:"auto"}),M=k.$shadowRoot.querySelector("input"),g=k.$shadowRoot.querySelector(".pops-prompt-btn-ok");s.on(M,["input","propertychange"],f=>{s.val(M)===""?s.attr(g,"disabled","true"):s.removeAttr(g,"disabled");}),s.listenKeyboard(M,"keydown",(f,L,B)=>{f==="Enter"&&B.length===0&&s.val(M)!==""&&s.trigger(g,"click");}),s.trigger(M,"input");}),s.on(I,"click",async A=>{s.preventEvent(A),h.close();let k=await b.getClipboardText();if(k.trim()===""){y.warning("获取到的剪贴板内容为空");return}await O(k);});},c=(C=`${he}_panel-setting-${v.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,h)=>{const S=U.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback($,O){$.close();}}},drag:true,mask:{enable:true},width:q.info.width,height:q.info.height,style:`
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
          }`}),V=S.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),I=S.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");s.on(V,"click",$=>{s.preventEvent($);try{n(C,h),S.close();}catch(O){y.error(O.toString(),{consoleLogContent:true});}}),s.on(I,"click",async $=>{await v.copy(h)?(y.success("复制成功"),S.close()):y.error("复制失败");});},m=U.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(C,h){l();}},cancel:{enable:true,text:"导出",callback(C,h){c(void 0,p);}}},width:j.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),d={};if(typeof le=="function")le().forEach(h=>{const S=oe(h);Reflect.set(d,h,S);});else {y.warning("不支持函数GM_listValues，仅导出菜单配置");const C=oe(de);Reflect.set(d,de,C);}const p=b.toStr(d);m.value=p;},i=()=>{let l=ee?.script?.supportURL||ee?.script?.namespace;typeof l=="string"&&v.isNotNull(l)&&window.open(l,"_blank");};return [{id:"script-version",title:`版本：${ee?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(){return  false},afterRender(l){new Oe(l.$asideLiElement).on("tap",function(w){clearTimeout(t),t=void 0,e?(e=false,o()):(t=setTimeout(()=>{e=false,i();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},ge={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(J.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){a.isTopWindow()&&Me.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(o=>o.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},a={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new v.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new v.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new v.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new v.Dictionary),this.__onceExecData},get scriptName(){return he},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:de,attributeKeyName:re,attributeDefaultValueName:ie},init(){this.initContentDefaultValue(),ge.init();},isTopWindow(){return R.top===R.self},initContentDefaultValue(){const e=o=>{if(!o.attributes||o.type==="button"||o.type==="forms"||o.type==="deepMenu")return;const i=o.attributes;let l=i[Fe];if(typeof l=="function"){let d=l();if(typeof d=="boolean"&&!d)return}let c=new Map,w=i[re];if(w!=null){const d=i[ie];c.set(w,d);}let m=i[Ue];if(typeof m=="object"&&m&&Object.keys(m).forEach(d=>{c.set(d,m[d]);}),!c.size){r.warn(["请先配置键",o]);return}if(o.type==="switch"){let d=typeof o.disabled=="function"?o.disabled():o.disabled;typeof d=="boolean"&&d&&this.$data.contentConfigInitDisabledKeys.push(...c.keys());}for(const[d,p]of c.entries())this.setDefaultValue(d,p);},t=o=>{for(let i=0;i<o.length;i++){let l=o[i];e(l);let c=l.forms;c&&Array.isArray(c)&&t(c);}},n=[...J.getAllContentConfig()];for(let o=0;o<n.length;o++){let i=n[o];if(!i.forms)continue;const l=i.forms;l&&Array.isArray(l)&&t(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&r.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){G.set(e,t);},getValue(e,t){const n=G.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){G.delete(e);},hasKey(e){return G.has(e)},addValueChangeListener(e,t){return G.addValueChangeListener(e,(o,i,l)=>{t(e,l,i);})},removeValueChangeListener(e){G.removeValueChangeListener(e);},triggerMenuValueChange(e,t,n){G.triggerValueChangeListener(e,n,t);},async exec(e,t,n,o=true){const i=this;let l;typeof e=="string"||Array.isArray(e)?l=()=>e:l=e;let c=false;const w=l();let m=[];Array.isArray(w)?(c=true,m=w):m.push(w);const d=m.find(g=>!this.$data.contentConfigInitDefaultValue.has(g));if(d){r.warn(`${d} 键不存在`);return}const p=JSON.stringify(m);if(o&&this.$data.onceExecMenuData.has(p))return this.$data.onceExecMenuData.get(p);let C=[];const h=[];let S=[];const V=(g,f)=>{let L=[],B=[],x=[];if(Array.isArray(f))x=x.concat(f);else if(typeof f=="object"&&f!=null)if(f instanceof Element)x.push(f);else {const{$css:_,destory:E}=f;_!=null&&(Array.isArray(_)?x=x.concat(_):x.push(_)),typeof E=="function"&&x.push(E);}else x.push(f);for(const _ of x)if(_!=null){if(_ instanceof Element){L.push(_);continue}if(typeof _=="function"){S.push(_);continue}}g?(C=C.concat(L),S=S.concat(B)):($(),O());},I=g=>!!this.getValue(g),$=()=>{for(let g=0;g<C.length;g++)C[g]?.remove(),C.splice(g,1),g--;},O=()=>{for(let g=0;g<S.length;g++){const f=S[g];f(),S.splice(g,1),g--;}},A=()=>{let g=false;return typeof n=="function"?g=n(m):g=m.every(f=>I(f)),g},k=async g=>{if(A()){const L=m.map(x=>this.getValue(x)),B=await t({value:c?L:L[0],addStoreValue:(...x)=>V(true,x)});V(true,B);}else V(false,[]);};o&&m.forEach(g=>{const f=this.addValueChangeListener(g,(L,B,x)=>k());h.push(f);}),await k();const M={reload(){this.clearStoreStyleElements(),this.destory(),k();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>$(),destory(){return O()},removeValueChangeListener:()=>{h.forEach(g=>{this.removeValueChangeListener(g);});},clearOnceExecMenuData(){o&&i.$data.onceExecMenuData.delete(p);}};return this.$data.onceExecMenuData.set(p,M),M},async execMenu(e,t,n=false,o=false){return await this.exec(e,async i=>await t(i),i=>i.every(c=>{let w=!!this.getValue(c);return a.$data.contentConfigInitDisabledKeys.includes(c)&&(w=false,r.warn(`.execMenu${o?"Once":""} ${c} 被禁用`)),n&&(w=!w),w}),o)},async execMenuOnce(e,t,n=false,o=false){const i=await this.execMenu(e,t,n,true);if(o&&i){const l=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,l);}return i},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),G.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t);},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async triggerUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${he}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(c=>(typeof c.isBottom=="function"?c.isBottom():!!c.isBottom)&&c.id==="script-version")!==-1;!n&&!i&&e.push(...J.getDefaultBottomContentConfig());let l=U.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(c,w)=>{c.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(c,w)=>{c(),this.$data.$panel=null;}},width:q.setting.width,height:q.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=e,o||this.registerConfigSearch({$panel:l,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,o=async(h,S)=>{if(h==null)return;const V=await S(h);return V&&typeof V.isFind=="boolean"&&V.isFind?V.data:await o(V.data,S)},i=(h,S)=>{const V=new IntersectionObserver(I=>{I.forEach($=>{$.isIntersecting&&(S?.(),V.disconnect());});},{root:null,threshold:1});V.observe(h),h.scrollIntoView({behavior:"smooth",block:"center"});},l=h=>{const S="pops-flashing";s.animationend(h,()=>{h.classList.remove(S);}),h.classList.add(S);},c=h=>{if(h.type==="dblclick"&&C)return;s.preventEvent(h),m=null;const S=U.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:q.settingMiddle.width,height:"auto",drag:true,style:`
					${U.config.cssText.panelCSS}

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
				`});S.$shadowRoot.querySelector(".search-wrapper");const V=S.$shadowRoot.querySelector(".search-config-text"),I=S.$shadowRoot.querySelector(".search-result-wrapper");V.focus();const $=()=>{s.empty(I);},O=k=>{const M=v.queryProperty(k,f=>f?.next?{isFind:false,data:f.next}:{isFind:true,data:f}),g=s.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${M.matchedData?.path}</div>
							<div class="search-result-item-description">${M.matchedData?.description??""}</div>
						`});return s.on(g,"click",f=>{const B=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[k.index];if(!B){y.error(`左侧项下标${k.index}不存在`);return}B.scrollIntoView({behavior:"smooth",block:"center"}),B.click(),o(k.next,async x=>{if(x?.next){const _=await s.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(E=>{const F=Reflect.get(E,"__formConfig__");return typeof F=="object"&&F!=null&&F.text===x.name}),2500);if(_)_.click();else return y.error("未找到对应的二级菜单"),{isFind:true,data:x};return {isFind:false,data:x.next}}else {const _=await s.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(E=>Reflect.get(E,"__formConfig__")===x.matchedData?.formConfig),2500);if(_){i(_);const E=_.closest(".pops-panel-forms-fold[data-fold-enable]");E&&(E.querySelector(".pops-panel-forms-fold-container").click(),await v.sleep(500)),i(_,()=>{l(_);});}else y.error("未找到对应的菜单项");return {isFind:true,data:x}}});}),g},A=k=>{const M=new RegExp(k,"i"),g=[],f=(B,x)=>{for(let _=0;_<B.length;_++){const E=B[_],F=E.forms;if(F&&Array.isArray(F)){const X=v.deepClone(x);if(E.type==="deepMenu"){const ae=v.queryProperty(X,Z=>Z?.next?{isFind:false,data:Z.next}:{isFind:true,data:Z});ae.next={name:E.text};}f(F,X);}else {const X=Reflect.get(E,"text"),ae=Reflect.get(E,"description"),Z=[X,ae],be=Z.findIndex(Y=>{if(typeof Y=="string")return Y.match(M)});if(be!==-1){const Y=v.deepClone(x),we=v.queryProperty(Y,P=>P?.next?{isFind:false,data:P.next}:{isFind:true,data:P});we.next={name:X,matchedData:{path:"",formConfig:E,matchedText:Z[be],description:ae}};const Ce=[];v.queryProperty(Y,P=>{const me=P?.name;return typeof me=="string"&&me.trim()!==""&&Ce.push(me),P?.next?{isFind:false,data:P.next}:{isFind:true,data:P}});const Ae=Ce.join(b.escapeHtml(" - "));we.next.matchedData.path=Ae,g.push(Y);}}}};for(let B=0;B<n.length;B++){const x=n[B];if(!x.forms||x.isBottom&&x.id==="script-version")continue;const _=x.forms;if(_&&Array.isArray(_)){let E=x.title;typeof E=="function"&&(E=E()),f(_,{index:B,name:E});}}const L=document.createDocumentFragment();for(const B of g){let x=O(B);L.appendChild(x);}$(),I.append(L);};s.on(V,"input",v.debounce(k=>{s.preventEvent(k);let M=s.val(V).trim();if(M===""){$();return}A(M);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(h=>{s.on(h,"dblclick",c);});let m=null,d=false,p,C=false;s.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(h,S)=>{C=true,clearTimeout(p),p=void 0,d&&m===S?(d=false,m=null,c(h)):(p=setTimeout(()=>{d=false;},200),d=true,m=S);},{capture:true}),t.$shadowRoot.appendChild(s.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e}},D={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isBlogArticle(){return this.isBlog()&&window.location.pathname.includes("/article/details/")},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},Ge=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,Re={init(){T(Ge),a.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),a.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),a.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),a.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),a.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return r.info("自动展开全文"),[b.addBlockCSS("div.article-show-more"),T(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return r.info("屏蔽云开发者任务挑战活动"),b.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return r.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),b.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return r.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),b.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return r.info("屏蔽底部推荐内容"),b.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return r.info("屏蔽底部更多推荐"),b.addBlockCSS("div.more-article")}},je=`.main_father {\r
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
`,He={init(){a.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),a.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),a.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),a.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),a.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),a.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop()),this.initRightToolbarOffset(),s.ready(()=>{a.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){r.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let c=Te("#pcCommentBox");if(c&&c.getClientRects().length)t=c;else {r.error("评论区处于隐藏状态");return}}r.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,o=document.querySelector("#csdn-toolbar"),i=window.getComputedStyle(o),l=o.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom);window.scrollTo({top:n-l-8,left:0,behavior:"smooth"});}),s.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){r.info("初始化右侧工具栏的偏移（top、right）"),T(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),s.waitNode(".csdn-side-toolbar").then(e=>{s.css(e,{top:parseInt(a.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(a.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldRightToolbar(){return r.info("屏蔽右侧工具栏"),b.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return r.info("【屏蔽】创作中心"),b.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return r.info("【屏蔽】显示/隐藏侧栏"),b.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return r.info("【屏蔽】新手引导"),b.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return r.info("【屏蔽】客服"),b.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return r.info("【屏蔽】举报"),b.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return r.info("【屏蔽】返回顶部"),b.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},We={init(){He.init(),a.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),a.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),a.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),a.exec("csdn-blog-blockComment",()=>this.blockComment(),e=>!a.getValue(e[0]),true),a.exec("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),e=>!a.getValue(e[0]),true),a.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),a.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),a.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),a.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),a.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),a.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),s.ready(()=>{a.execMenuOnce("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),a.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),a.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},clickPreCodeAutomatically(){r.info("点击代码块自动展开"),document.addEventListener("click",function(e){let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),t.querySelector(".hide-preCode-box")?.remove());});},restoreComments(){r.info("恢复评论到正确位置-第一条评论"),s.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),r.info("恢复评论到正确位置-第二条评论"),s.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){r.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{a.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){r.info("全文居中");let e=[T(je)];return a.getValue("csdn-blog-shieldRightDirectoryInformation")&&e.push(T(`
				#mainBox {
					margin-right: 0px;
				}
        `)),a.getValue("csdn-blog-shieldLeftBlogContainerAside")&&e.push(T(`
				#mainBox {
					margin-left: 0px;
				}`)),e},shieldLoginDialog(){return r.info("屏蔽登录弹窗"),b.addBlockCSS(".passport-login-container")},autoExpandCodeContent(){return r.info("自动展开代码块"),[b.addBlockCSS("pre.set-code-hide .hide-preCode-box"),T(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return r.info("自动展开全文"),T(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},blockComment(){return r.info("屏蔽评论区"),b.addBlockCSS("#pcCommentBox")},shieldBottomRecommendArticle(){return r.info("屏蔽底部推荐文章"),b.addBlockCSS("main > div.recommend-box")},shieldBottomSkillTree(){return r.info("屏蔽底部xx技能树"),b.addBlockCSS("#treeSkill")},shieldBottomFloatingToolbar(){return r.info("屏蔽底部悬浮工具栏"),b.addBlockCSS("#toolBarBox")},shieldLeftBlogContainerAside(){return r.info("【屏蔽】左侧博客信息"),b.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return r.info("【屏蔽】右侧目录信息"),b.addBlockCSS("#rightAsideConcision","#rightAside")},shieldArticleSearchTip(){return r.info("屏蔽文章内的选中搜索悬浮提示"),b.addBlockCSS("#articleSearchTip")},allowSelectContent(){return r.info("允许选择内容"),T(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Ke=`#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {\r
  max-height: unset !important;\r
  height: auto !important;\r
  overflow: auto !important;\r
}\r
\r
.forbid {\r
  user-select: text !important;\r
}\r
`,ze=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}\r
`,Je={init(){T(Ke),T(ze),a.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),a.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),a.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return r.info("【屏蔽】资源推荐"),b.addBlockCSS("#recommend")},shieldRightUserInfo(){return r.info("【屏蔽】右侧用户信息"),b.addBlockCSS(".layout-right")},shieldRightToolBar(){return r.info("【屏蔽】右侧悬浮工具栏"),b.addBlockCSS(".csdn-side-toolbar")}},Be={init(){a.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),o=decodeURIComponent(n);r.success(`跳转链接：${o}`),window.location.href=o;}else r.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){y.error("跳转链接失败："+e.message);}}},Ze=`.ecommend-item-box.recommend-recommend-box,\r
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
#recommendAdBox {\r
  display: none !important;\r
}\r
`,Ye=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,Ee={init(){this.addCSS(),a.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),s.ready(()=>{a.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),a.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},addCSS(){return r.info("添加屏蔽CSS和功能CSS"),[T(Ze),T(Ye)]},removeClipboardHijacking(){r.info("去除剪贴板劫持");let e=document.querySelector(".article-copyright");e&&e.remove(),R.articleType&&(R.articleType=0),R.csdn&&R.csdn.copyright&&R.csdn.copyright.textData&&(R.csdn.copyright.textData=""),R.csdn&&R.csdn.copyright&&R.csdn.copyright.htmlData&&(R.csdn.copyright.htmlData="");},unBlockCopy(){r.info("取消禁止复制"),s.on(document,"click",".hljs-button",function(t,n){s.preventEvent(t);let o=n,i=o.closest(".hljs")||o.closest("pre"),l=o.parentElement,c=i?.querySelector("code")||l.querySelector("code")||l,w=c.innerText;r.info("点击复制按钮复制内容："+(w.length>8?w.substring(0,8)+"...":w),c),v.copy(w),o.setAttribute("data-title","复制成功");},{capture:true});let e=new v.LockFunction(function(t){let n=t.target;if(n.localName!=="pre")return;let o=n.querySelector(".hljs-button");o&&o.setAttribute("data-title","复制");});s.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),s.waitNode("#content_views").then(t=>{R.$&&R.$("#content_views")?.unbind("copy"),s.on(t,"copy",function(n){s.preventEvent(n);let i=R.getSelection()?.toString();return r.info("Ctrl+C复制内容："+(i.length>8?i.substring(0,8)+"...":i)),v.copy(i),false},{capture:true});}),s.waitNode(".hljs-button").then(()=>{setTimeout(()=>{qe(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},shieldTopToolbar(){return r.info("屏蔽顶部Toolbar"),b.addBlockCSS("#toolbarBox","#csdn-toolbar")}},Se={init(){D.isLink()?(r.info("Router: 中转链接"),Be.init()):D.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),Re.init()):D.isBlog()?(r.info("Router: 博客"),Ee.init(),D.isBlogArticle()&&(r.info("Router: 帖子"),We.init())):D.isWenKu()?(r.info("Router: 文库"),Je.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},Qe={init(){a.execMenuOnce("m-csdn-link-jumpRedirect",()=>{Be.jumpRedirect();});}},Xe=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,et={init(){T(Xe),a.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>Re.autoExpandContent()),a.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return r.info("【屏蔽】底部加入社区"),b.addBlockCSS(".user-desc")}},se={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=v.toJSON(e)),e?.code===200)}},ce={async folderListWithCheck(e){let t=await H.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":v.getRandomPCUA()}});r.info(t);let n=v.toJSON(t.data.responseText);if(!t.status||!se.isSuccessResponse(t.data.responseText)){r.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?y.error(n.msg):y.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(e){let t=await H.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":v.getRandomPCUA()},allowInterceptConfig:false});if(r.info(t),!t.status||!se.isSuccessResponse(t.data.responseText)){r.error("添加收藏失败，请求异常",t),y.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){debugger;let t=await H.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":v.getRandomPCUA()}});if(r.info(t),!t.status||!se.isSuccessResponse(t.data.responseText)){r.error("检查收藏夹状态失败，请求异常"),y.error("检查收藏夹状态失败，请求异常");return}return v.toJSON(t.data.responseText).data},async createFolder(e){let t=await H.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":v.getRandomPCUA()},allowInterceptConfig:false});if(r.info(t),!t.status||!se.isSuccessResponse(t.data.responseText)){y.error("创建收藏夹失败");return}return v.toJSON(t.data.responseText).data}},tt={init(){a.exec("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),a.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight()),a.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),a.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),a.exec("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),e=>!a.getValue(e[0]),true),a.exec("m-csdn-blog-comment-enable",()=>this.blockComment(),e=>!a.getValue(e[0]),true),a.exec("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),s.ready(()=>{a.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),a.execMenuOnce("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),a.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{Ee.unBlockCopy();}),a.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>{this.optimizationCollectButton();});});},shieldTopToolbar(){return r.info("屏蔽顶部Toolbar"),[b.addBlockCSS("#csdn-toolbar"),T(`
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
			`)]},refactoringRecommendation(){function e(){document.querySelectorAll(".container-fluid").forEach(n=>{let o="",i="",l="",c="",w=false,m=false;if(n.hasAttribute("data-url")){if(o=n.getAttribute("data-url"),i=n.querySelector(".recommend_title div.left")?.innerHTML,!n.querySelector(".text"))return;l=n.querySelector(".text")?.innerHTML,n.querySelectorAll(".recommend-img").length&&n.querySelectorAll(".recommend-img").forEach(p=>{c+=p.innerHTML;});}else o=n.querySelector("a[data-type]").getAttribute("href"),i=n.querySelector(".recommend_title div.left").innerHTML,l=n.querySelector(".text").innerHTML;var d=new URL(o);d.host==="download.csdn.net"||d.host==="www.iteye.com"&&d.pathname.match(/^\/resource/gi)?(w=true,i='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+i):d.origin.match(/edu.csdn.net/gi)&&(m=true,i='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+i),n.setAttribute("class","GM-csdn-dl"),n.setAttribute("data-url",o),n.innerHTML=`<div class="GM-csdn-title"><div class="left">${i}</div></div><div class="GM-csdn-content">${l}</div><div class="GM-csdn-img">${c}</div>`,n.addEventListener("click",function(){a.getValue("m-csdn-blog-openNewTab")?window.open(o,"_blank"):window.location.href=o;}),(w||m)&&a.getValue("m-csdn-blog-removeResourceArticle")&&n.remove();});}let t=new v.LockFunction(e,50);s.waitNode("#recommend").then(n=>{r.info("重构底部推荐"),t.run(),v.mutationObserver(n,{callback:()=>{t.run();},config:{childList:true,subtree:true,attributes:true}});});},blockBottomArticle(){return r.info("屏蔽底部文章"),b.addBlockCSS("#recommend")},blockComment(){return r.info("屏蔽评论"),b.addBlockCSS("#comment")},removeAds(){return r.info("去除广告"),[b.waitRemove(".passport-login-container"),b.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),b.waitRemove(".add-firstAd"),b.waitRemove("div.feed-Sign-weixin"),b.waitRemove("div.ios-shadowbox")]},notLimitCodePreMaxHeight(){return r.info("不限制代码块最大高度"),T(`
        pre{
            max-height: unset !important;
        }
        `)},notLimitCommentMaxHeight(){return r.info("不限制评论区最大高度"),T(`
        #comment{
          max-height: none !important;
        }
      `)},allowSelectText(){return r.info("允许选择文字"),T(`
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
        `)},autoExpandContent(){return r.info("自动展开内容"),T(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `)},blockBottomToolBar(){return r.info("屏蔽底部工具栏"),b.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return r.info("底部工具栏常驻"),T(`
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`)},optimizationCollectButton(){r.info("优化收藏按钮"),s.waitNode("#operate .collect-btn",1e4).then(e=>{e&&s.on(e,"click",async t=>{s.preventEvent(t);let n=e.querySelector(".collect"),o=e.querySelector(".uncollect"),i=await ce.folderListWithCheck(window.location.origin+window.location.pathname);if(!i)return;let l=[];i.forEach(d=>{d.IsFavorite&&l.push(d.ID);});let c=d=>{let p=d.ID,C=s.createElement("li",{className:"csdn-collection-item",innerHTML:`
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
								`},{"data-is-collect":d.IsFavorite});C.querySelector(".title-m");let h=C.querySelector(".csdn-collection-item_length");C.querySelector(".csdn-collection-controls");let S=C.querySelector(".collect-btn");return s.on(S,"click",async V=>{let I=R.articleDetailUrl;I==null&&(I=window.location.origin+window.location.pathname);let $=R.articleId;if($==null){r.error("获取文章ID失败"),y.error("获取文章ID失败");return}let O=R.username;if(O==null){r.error("获取文章作者失败"),y.error("获取文章作者失败");return}let A=R.articleTitle;if(A==null&&(A=document.title.replace(/-CSDN博客$/,"")),A==null){r.error("获取文章标题失败"),y.error("获取文章标题失败");return}let k=R.articleDesc;if(k==null){let f=Te("meta[name='description']");f&&(k=f.getAttribute("content"));}if(k==null){r.error("获取文章描述失败"),y.error("获取文章描述失败");return}let M=[...l],g=y.loading("处理中...");try{let f=await ce.checkFavoriteByUrl(I);if(f==null)return;r.info(p,f);let L=!f[p];if(L?(r.info("添加收藏"),M.push(p)):(r.info("取消收藏"),M.splice(M.indexOf(p),1)),!await ce.addFavoriteInFolds({author:O,url:I,source:"blog",sourceId:$,title:A,description:k,fromType:"PC",username:d.Username,folderIdList:M}))return;let x=await ce.checkFavoriteByUrl(I);if(x==null)return;r.info(p,x),C.setAttribute("data-is-collect",(!!x[p]).toString()),L?x[p]?(r.success("收藏成功"),y.success("收藏成功"),s.text(S,"已收藏"),l.includes(p)||l.push(p),d.FavoriteNum++):(r.error("收藏失败",x,p),y.error("收藏失败")):x[p]?(r.error("取消收藏失败",x,p),y.error("取消收藏失败")):(r.success("取消收藏成功"),y.success("取消收藏成功"),s.text(S,"收藏"),l.includes(p)&&l.splice(l.indexOf(p),1),d.FavoriteNum--),s.text(h,`${d.FavoriteNum}条内容`),Object.values(x).find(E=>E)?(s.show(n,!1),s.hide(o,!1)):(s.show(o,!1),s.hide(n,!1)),g.close();}catch(f){r.error(f);}finally{g.close();}}),C},m=U.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:q.setting.width,height:q.setting.height,drag:true,mask:{enable:true},style:`
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
							`}).$shadowRoot.querySelector(".csdn-collection-items");i.forEach(d=>{let p=c(d);m.appendChild(p);});},{capture:true});});}},nt=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,ot={init(){T(nt),a.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return r.info("【屏蔽】底部工具栏"),b.addBlockCSS(".page-container > div.btn")}},rt=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
  display: none !important;\r
}\r
`,it={init(){a.execMenuOnce("m-csdn-download-removeAds",()=>T(rt)),a.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return r.info("自动展开资源介绍"),[b.addBlockCSS("label.unfold-font"),T(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},at=`.view_comment_box,\r
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
`,lt=`#mainBox {\r
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
`,st={init(){this.addCSS();},addCSS(){return [T(at),T(lt)]}},ke={init(){D.isLink()?(r.info("Router: 中转链接"),Qe.init()):D.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),et.init()):D.isBlog()?(r.info("Router: 博客"),st.init(),D.isBlogArticle()&&(r.info("Router: 文章"),tt.init())):D.isWenKu()?(r.info("Router: 文库"),ot.init()):D.isDownload()?(r.info("Router: 资源下载"),it.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},xe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new K.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let o;this.hasStorageApi(e)?o=this.getStorageApi(e):o=n,this.setComponentsStorageApiProperty(t,o);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,z,t);}},u=function(e,t,n,o,i,l,c,w){let m={text:e,type:"switch",description:i,disabled:c,attributes:{},props:{},getValue(){return this.props[z].get(t,n)},callback(d,p){let C=!!p;if(r.success(`${C?"开启":"关闭"} ${e}`),typeof o=="function"&&o(d,C))return;this.props[z].set(t,C);},afterAddToUListCallBack:l};return Reflect.set(m.attributes,re,t),Reflect.set(m.attributes,ie,n),xe.initComponentsStorageApi("switch",m,{get(d,p){return a.getValue(d,p)},set(d,p){a.setValue(d,p);}}),m},ue=function(e,t,n,o,i,l,c){let w=[];typeof o=="function"?w=o():w=o;let m={text:e,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[z].get(t,n)},callback(d,p,C){let h=p;if(r.info(`选择：${C}`),typeof i=="function"&&i(d,h,C))return;this.props[z].set(t,h);},data:w};return Reflect.set(m.attributes,re,t),Reflect.set(m.attributes,ie,n),xe.initComponentsStorageApi("select",m,{get(d,p){return a.getValue(d,p)},set(d,p){a.setValue(d,p);}}),m},ct={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[ue("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{r.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ue("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),u("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},_e=function(e,t,n,o,i,l,c,w,m,d){let p={text:e,type:"slider",description:w,attributes:{},props:{},getValue(){return this.props[z].get(t,n)},getToolTipContent(C){return typeof c=="function"?c(C):`${C}`},callback(C,h){if(typeof l=="function"&&l(C,h))return;this.props[z].set(t,h);},min:o,max:i,step:m};return Reflect.set(p.attributes,re,t),Reflect.set(p.attributes,ie,n),xe.initComponentsStorageApi("slider",p,{get(C,h){return a.getValue(C,h)},set(C,h){a.setValue(C,h);}}),p},dt={id:"panel-blog",title:"博客",isDefault(){return D.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{type:"forms",text:"",forms:[{text:"布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),u("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),u("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),u("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[u("启用","csdn-blog-rightToolbarEnable",true,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),u("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加"),_e("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");s.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),_e("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");s.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"forms",forms:[u("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),u("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),u("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),u("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),u("【屏蔽】举报","csdn-blog-rightToolbarReport",false),u("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"内容",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[u("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),u("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),u("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),u("全文居中","csdn-blog-articleCenter",true,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");},"自动屏蔽左侧和右侧的信息，且将文章居中"),u("允许选择内容","csdn-blog-allowSelectContent",true,void 0)]},{text:"屏蔽",type:"forms",forms:[u("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),u("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记")]}]},{text:"评论区",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("启用","csdn-blog-blockComment",true,void 0,"关闭是屏蔽评论区"),u("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("启用","csdn-blog-bottomRecommendArticleEnable",true,void 0,"关闭是屏蔽底部文章"),u("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),u("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]}]},{text:"",type:"forms",forms:[{text:"全局布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false)]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),u("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},ut={id:"panel-link",title:"链接",isDefault(){return D.isLink()},forms:[{text:"功能",type:"forms",forms:[u("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},pt={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return D.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[u("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[u("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),u("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),u("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),u("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),u("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},ft={id:"panel-wenku",title:"资源",isDefault(){return D.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[u("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),u("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),u("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]},mt={id:"panel-so",title:"搜索",isDefault(){return D.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[u("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},ht={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[ue("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{r.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ue("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),u("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},gt={id:"m-panel-blog",title:"博客",isDefault(){return D.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{text:"",type:"forms",forms:[{type:"deepMenu",text:"顶部工具栏",forms:[{type:"forms",text:"",forms:[u("启用","m-csdn-blog-shieldTopToolbar",false,void 0,"关闭是屏蔽顶部工具栏")]}]},{text:"内容",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("允许选中文字","m-csdn-blog-allowSelectText",true,void 0,"设置user-select: text;"),u("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"包括内容、代码块"),u("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("启用","m-csdn-blog-comment-enable",true,void 0,"关闭是屏蔽评论区"),u("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("启用","m-csdn-blog-bottomArticleEnable",true,void 0,"关闭是屏蔽底部文章"),u("移除资源下载","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),u("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),u("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",forms:[{type:"forms",text:"",forms:[u("启用","m-csdn-blog-bottom-toolbar-enable",false,void 0,"关闭是屏蔽底部工具栏"),u("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),u("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]}]},{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),u("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},xt={id:"m-panel-link",title:"链接",isDefault(){return D.isLink()},forms:[{text:"功能",type:"forms",forms:[u("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},bt={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return D.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[u("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[u("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},wt={id:"m-panel-wenku",title:"文库",isDefault(){return D.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[u("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},Ct={id:"panel-so",title:"搜索",isDefault(){return D.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[u("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},yt={id:"m-panel-download",title:"资源",isDefault(){return D.isDownload()},forms:[{text:"功能",type:"forms",forms:[u("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"forms",forms:[u("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]};ge.deleteMenuOption(0);ge.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(J.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(J.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);J.addContentConfig([ct,dt,ut,pt,ft,mt]);J.addContentConfig([ht,gt,xt,bt,wt,Ct,yt]);a.init();let Ve=v.isPhone(),te="change_env_set",W=oe(te);Me.add({key:te,text:`⚙ 自动: ${Ve?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return W==null?e:e+` 手动: ${W==1?"移动端":W==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){y.error("输入的不是规范的数字");return}if(!e.includes(n)){y.error("输入的值必须是0或1或2");return}n==0?ne(te):fe(te,n);}});W!=null?(r.info(`手动判定为${W===1?"移动端":"PC端"}`),W==1?ke.init():W==2?Se.init():(y.error("意外，手动判定的值不在范围内"),ne(te))):Ve?(r.info("自动判定为移动端"),ke.init()):(r.info("自动判定为PC端"),Se.init());

})(Qmsg, DOMUtils, Utils, pops);