// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.1.19
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.10/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.2.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.2/dist/index.umd.min.js
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

(function (x, q, me, Z) {
  'use strict';

  var ie=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ue=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,re=typeof GM_getValue<"u"?GM_getValue:void 0,ne=typeof GM_info<"u"?GM_info:void 0,le=typeof GM_listValues<"u"?GM_listValues:void 0,Oe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ge=typeof GM_setValue<"u"?GM_setValue:void 0,_e=typeof GM_setValues<"u"?GM_setValues:void 0,Ie=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ne=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,B=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ue=window;const te={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},M={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&q.waitNodeList(t).then(n=>{n.forEach(i=>i.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),q.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),T(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof ue=="function"?ue(e.keyName):null;return typeof t=="string"&&t?T(t):M.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{q.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(i){navigator.clipboard.readText().then(r=>{i(r);}).catch(r=>{o.error("读取剪贴板内容失败👉",r),i("");});}function t(i){navigator.permissions.query({name:"clipboard-read"}).then(r=>{e(i);}).catch(r=>{o.error("申请剪贴板权限失败，尝试直接读取👉",r.message??r.name??r.stack),e(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?t(i):window.addEventListener("focus",()=>{t(i);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let i,r=n-t,c=t,s=async b=>{let g=await e(b);if(typeof g=="boolean"&&!g||b){w.workerClearTimeout(i);return}if(c+=t,c>r){s(true);return}i=w.workerSetTimeout(()=>{s(false);},t);};s(false);},findParentNode(e,t,n){if(n){let i=q.closest(e,n);if(i)return i.querySelector(t)}else return q.matches(e,t)?e:q.closest(e,t)},toStr(e){const t="__undefined__placeholder__replaced__str__";return JSON.stringify(e,(i,r)=>r===void 0?t:r,2).replace(new RegExp(`"${t}"`,"g"),"undefined")}},w=Z.noConflict(),l=q.noConflict(),H=me,o=new w.Log(ne,B.console||Ue.console),be=ne?.script?.name||void 0,Fe=me.config.Utils.AnyTouch(),Ge=false;o.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?o.warn(n):t==="error"?o.error(n):o.info(n),true},get position(){return a.getValue(te.qmsg_config_position.key,te.qmsg_config_position.defaultValue)},get maxNums(){return a.getValue(te.qmsg_config_maxnums.key,te.qmsg_config_maxnums.defaultValue)},get showReverse(){return a.getValue(te.qmsg_config_showreverse.key,te.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=Z.getMaxZIndex(),t=me.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Z.getMaxValue(e,t)+100}});H.GlobalConfig.setGlobalConfig({zIndex:()=>{const e=Z.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=me.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Z.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Re=new w.GM_Menu({GM_getValue:re,GM_setValue:ge,GM_registerMenuCommand:Oe,GM_unregisterMenuCommand:Ie}),z=new w.Httpx({xmlHttpRequest:Ne,logDetails:Ge});z.interceptors.request.use(e=>e);z.interceptors.response.use(void 0,e=>(o.error("拦截器-请求错误",e),e.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),e));B.Object.defineProperty,B.Function.prototype.apply,B.Function.prototype.call,B.Element.prototype.appendChild,B.setTimeout.bind(B),B.clearTimeout.bind(B),B.setInterval.bind(B),B.clearInterval.bind(B);const T=l.addStyle.bind(l),pe=q.selector.bind(q),Ae=q.selectorAll.bind(q);new w.GM_Cookie;const he="GM_Panel",qe="data-init",ae="data-key",se="data-default-value",Pe="data-init-more-value",He="data-plugin-search-config",Y="data-storage-api",K={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},P={setting:{get width(){return K.width<550?"88vw":K.width<700?"550px":"700px"},get height(){return K.height<450?"70vh":K.height<550?"450px":"550px"}},settingMiddle:{get width(){return K.width<350?"88vw":"350px"}},info:{get width(){return K.width<350?"88vw":"350px"},get height(){return K.height<250?"88vh":"250px"}}},Q={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new w.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(c,s)=>{typeof s!="string"&&(s=M.toStr(s));const b=new Blob([s]),g=globalThis.URL.createObjectURL(b);l.createElement("a",{href:g,download:c}).click(),w.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(g);},500);},i=()=>{const c=h=>{const u=H.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(L,_){L.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),y=u.$shadowRoot.querySelector(".btn-control[data-mode='local']"),E=u.$shadowRoot.querySelector(".btn-control[data-mode='network']"),G=u.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),$=async L=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof le=="function"?typeof ie=="function"?(le().forEach(m=>{ie(m);}),x.success("已清空脚本存储的配置")):x.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):x.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof _e=="function"?_e(L):Object.keys(L).forEach(m=>{const C=L[m];ge(m,C);}),x.success("配置导入完毕");},N=L=>new Promise(async _=>{const R=w.toJSON(L);Object.keys(R).length===0?x.warning("解析为空配置，不导入"):await $(R),_(true);});l.on(y,"click",L=>{l.preventEvent(L),u.close();const _=l.createElement("input",{type:"file",accept:".json"});l.on(_,["propertychange","input"],R=>{if(!_.files?.length)return;const m=_.files[0],C=new FileReader;C.onload=()=>{N(C.result);},C.readAsText(m,"UTF-8");}),_.click();}),l.on(E,"click",L=>{l.preventEvent(L),u.close();const _=H.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(C,A){C.close();}},ok:{text:"导入",callback:async(C,A)=>{const D=C.text;if(w.isNull(D)){x.error("请填入完整的url");return}const S=x.loading("正在获取配置..."),v=await z.get(D,{allowInterceptConfig:false});if(S.close(),!v.status){o.error(v),x.error("获取配置失败",{consoleLogContent:true});return}await N(v.data.responseText)&&C.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:P.info.width,height:"auto"}),R=_.$shadowRoot.querySelector("input"),m=_.$shadowRoot.querySelector(".pops-prompt-btn-ok");l.on(R,["input","propertychange"],C=>{l.val(R)===""?l.attr(m,"disabled","true"):l.removeAttr(m,"disabled");}),l.onKeyboard(R,"keydown",(C,A,D)=>{C==="Enter"&&D.length===0&&l.val(R)!==""&&l.emit(m,"click");}),l.emit(R,"input");}),l.on(G,"click",async L=>{l.preventEvent(L),u.close();let _=await M.getClipboardText();if(_.trim()===""){x.warning("获取到的剪贴板内容为空");return}await N(_);});},s=(h=`${be}_panel-setting-${w.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,u)=>{const y=H.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback($,N){$.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),E=y.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),G=y.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");l.on(E,"click",$=>{l.preventEvent($);try{n(h,u),y.close();}catch(N){x.error(N.toString(),{consoleLogContent:true});}}),l.on(G,"click",async $=>{await w.copy(u)?(x.success("复制成功"),y.close()):x.error("复制失败");});},g=H.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(h,u){c();}},cancel:{enable:true,text:"导出",callback(h,u){s(void 0,p);}}},width:K.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),f={};if(typeof le=="function")le().forEach(u=>{const y=re(u);Reflect.set(f,u,y);});else {x.warning("不支持函数GM_listValues，仅导出菜单配置");const h=re(he);Reflect.set(f,he,h);}const p=M.toStr(f);g.value=p;},r=()=>{let c=ne?.script?.supportURL||ne?.script?.namespace;typeof c=="string"&&w.isNotNull(c)&&window.open(c,"_blank");};return [{id:"script-version",title:`版本：${ne?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(c){new Fe(c.$asideLiElement).on("tap",function(b){clearTimeout(t),t=void 0,e?(e=false,i()):(t=setTimeout(()=>{e=false,r();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},Ce={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(Q.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){a.isTopWindow()&&Re.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(i=>i.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class je{storageKey;listenerData;constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new Z.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let t=re(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){ge(this.storageKey,t);}set(t,n){const i=this.get(t),r=this.getLocalValue();Reflect.set(r,t,n),this.setLocalValue(r),this.emitValueChangeListener(t,n,i);}get(t,n){const i=this.getLocalValue();return Reflect.get(i,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),i=this.getLocalValue();Reflect.deleteProperty(i,t),this.setLocalValue(i),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){ie(this.storageKey);}addValueChangeListener(t,n){const i=Math.random(),r=this.listenerData.get(t)||[];return r.push({id:i,key:t,callback:n}),this.listenerData.set(t,r),i}removeValueChangeListener(t){let n=false;for(const[i,r]of this.listenerData.entries()){for(let c=0;c<r.length;c++){const s=r[c];(typeof t=="string"&&s.key===t||typeof t=="number"&&s.id===t)&&(r.splice(c,1),c--,n=true);}this.listenerData.set(i,r);}return n}async emitValueChangeListener(...t){const[n,i,r]=t;if(!this.listenerData.has(n))return;let c=this.listenerData.get(n);for(let s=0;s<c.length;s++){const b=c[s];if(typeof b.callback=="function"){let g=this.get(n),f,p;typeof r<"u"&&t.length>=2?p=r:p=g,typeof i<"u"&&t.length>2?f=i:f=g,await b.callback(n,f,p);}}}}const W=new je(he),a={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new w.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new w.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new w.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new w.Dictionary),this.__onceExecData},get scriptName(){return be},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:he,attributeKeyName:ae,attributeDefaultValueName:se},init(){this.initContentDefaultValue(),Ce.init();},isTopWindow(){return B.top===B.self},initContentDefaultValue(){const e=i=>{if(!i.attributes||i.type==="button"||i.type==="container"||i.type==="deepMenu")return;const r=i.attributes;let c=r[qe];if(typeof c=="function"){let f=c();if(typeof f=="boolean"&&!f)return}let s=new Map,b=r[ae];if(b!=null){const f=r[se];s.set(b,f);}let g=r[Pe];if(typeof g=="object"&&g&&Object.keys(g).forEach(f=>{const p=g[f];s.set(f,p);}),!s.size){o.warn("请先配置键",i);return}if(i.type==="switch"){let f=typeof i.disabled=="function"?i.disabled():i.disabled;typeof f=="boolean"&&f&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[f,p]of s.entries())this.setDefaultValue(f,p);},t=i=>{for(let r=0;r<i.length;r++){let c=i[r];e(c);let s=c.views;s&&Array.isArray(s)&&t(s);}},n=[...Q.getAllContentConfig()];for(let i=0;i<n.length;i++){let r=n[i];if(!r.views)continue;const c=r.views;c&&Array.isArray(c)&&t(c);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&o.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){W.set(e,t);},getValue(e,t){const n=W.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){W.delete(e);},hasKey(e){return W.has(e)},addValueChangeListener(e,t){return W.addValueChangeListener(e,t)},removeValueChangeListener(e){W.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){W.emitValueChangeListener(e,t,n);},async exec(e,t,n,i=true){const r=this;let c;typeof e=="string"||Array.isArray(e)?c=()=>e:c=e;let s=false;const b=c();let g=[];Array.isArray(b)?(s=true,g=b):g.push(b);const f=g.find(m=>!this.$data.contentConfigInitDefaultValue.has(m));if(f){o.warn(`${f} 键不存在`);return}const p=JSON.stringify(g);if(i&&this.$data.onceExecMenuData.has(p))return this.$data.onceExecMenuData.get(p);let h=[];const u=[];let y=[];const E=(m,C)=>{let A=[],D=[],S=[];if(Array.isArray(C))S=S.concat(C);else {const v=k=>{if(typeof k=="object"&&k!=null)if(k instanceof Element)S.push(k);else {const{$css:O,destory:I}=k;O!=null&&(Array.isArray(O)?S=S.concat(O):S.push(O)),typeof I=="function"&&S.push(I);}else S.push(k);};if(C!=null&&Array.isArray(C))for(const k of C)v(k);else v(C);}for(const v of S)if(v!=null){if(v instanceof Element){A.push(v);continue}if(typeof v=="function"){y.push(v);continue}}m?(h=h.concat(A),y=y.concat(D)):($(),N());},G=m=>!!this.getValue(m),$=()=>{for(let m=0;m<h.length;m++)h[m]?.remove(),h.splice(m,1),m--;},N=()=>{for(let m=0;m<y.length;m++){const C=y[m];C(),y.splice(m,1),m--;}},L=()=>{let m=false;return typeof n=="function"?m=n(g):m=g.every(C=>G(C)),m},_=async m=>{if(L()){const A=g.map(S=>this.getValue(S)),D=await t({value:s?A:A[0],addStoreValue:(...S)=>E(true,S)});E(true,D);}else E(false,[]);};i&&g.forEach(m=>{const C=this.addValueChangeListener(m,(A,D,S)=>_());u.push(C);}),await _();const R={reload(){this.clearStoreStyleElements(),this.destory(),_();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>$(),destory(){return N()},removeValueChangeListener:()=>{u.forEach(m=>{this.removeValueChangeListener(m);});},clearOnceExecMenuData(){i&&r.$data.onceExecMenuData.delete(p);}};return this.$data.onceExecMenuData.set(p,R),R},async execMenu(e,t,n=false,i=false){return await this.exec(e,async r=>await t(r),r=>r.every(s=>{let b=!!this.getValue(s);return a.$data.contentConfigInitDisabledKeys.includes(s)&&(b=false,o.warn(`.execMenu${i?"Once":""} ${s} 被禁用`)),n&&(b=!b),b}),i)},async execMenuOnce(e,t,n=false,i=false){const r=await this.execMenu(e,t,n,true);if(i&&r){const c=()=>{r.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,c);}return r},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),W.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t);},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${be}-设置`,n=false,i=false){this.$data.$panel=null,this.$data.panelContent=[];const r=e.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!r&&e.push(...Q.getDefaultBottomContentConfig());const c=H.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(s,b)=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(s,b)=>{s(),this.$data.$panel=null;}},width:P.setting.width,height:P.setting.height,drag:true,only:true,style:`
        .pops-switch-shortcut-wrapper{
          margin-right: 5px;
          display: inline-flex;
        }
        .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
          cursor: pointer;
        }
        `,...this.$data.panelConfig});this.$data.$panel=c,this.$data.panelContent=e,i||this.registerConfigSearch({$panel:c,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,i=async(u,y)=>{if(u==null)return;const E=await y(u);return E&&typeof E.isFind=="boolean"&&E.isFind?E.data:await i(E.data,y)},r=(u,y)=>{const E=new IntersectionObserver(G=>{G.forEach($=>{$.isIntersecting&&(y?.(),E.disconnect());});},{root:null,threshold:1});E.observe(u),u.scrollIntoView({behavior:"smooth",block:"center"});},c=u=>{const y="pops-flashing";l.onAnimationend(u,()=>{u.classList.remove(y);}),u.classList.add(y);},s=u=>{if(u.type==="dblclick"&&h)return;l.preventEvent(u),g=null;const y=H.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:P.settingMiddle.width,height:"auto",drag:true,style:`
					${H.config.cssText.panelCSS}

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
				`});y.$shadowRoot.querySelector(".search-wrapper");const E=y.$shadowRoot.querySelector(".search-config-text"),G=y.$shadowRoot.querySelector(".search-result-wrapper");E.focus();const $=()=>{l.empty(G);},N=_=>{const R=w.queryProperty(_,A=>A?.next?{isFind:false,data:A.next}:{isFind:true,data:A}),m=l.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${R.matchedData?.path}</div>
							<div class="search-result-item-description">${R.matchedData?.description??""}</div>
						`}),C=H.config.PanelHandlerComponents();return l.on(m,"click",A=>{const S=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[_.index];if(!S){x.error(`左侧项下标${_.index}不存在`);return}S.scrollIntoView({behavior:"smooth",block:"center"}),S.click(),i(_.next,async v=>{if(v?.next){const k=await l.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(O=>{const I=Reflect.get(O,C.$data.nodeStoreConfigKey);return typeof I=="object"&&I!=null&&I.text===v.name}),2500);if(k)k.click();else return x.error("未找到对应的二级菜单"),{isFind:true,data:v};return {isFind:false,data:v.next}}else {const k=await l.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(O=>Reflect.get(O,C.$data.nodeStoreConfigKey)===v.matchedData?.formConfig),2500);if(k){r(k);const O=k.closest(".pops-panel-forms-fold[data-fold-enable]");O&&(O.querySelector(".pops-panel-forms-fold-container").click(),await w.sleep(500)),r(k,()=>{c(k);});}else x.error("未找到对应的菜单项");return {isFind:true,data:v}}});}),m},L=_=>{const R=new RegExp(_,"i"),m=[],C=(D,S)=>{for(let v=0;v<D.length;v++){const k=D[v],O=k.views;if(O&&Array.isArray(O)){const I=w.deepClone(S);if(k.type==="deepMenu"){const X=w.queryProperty(I,ee=>ee?.next?{isFind:false,data:ee.next}:{isFind:true,data:ee});X.next={name:k.text};}C(O,I);}else {let I,X;if(k.type==="own"){const F=Reflect.get(k.attributes||{},He);F&&(typeof F.text=="string"&&(I=F.text),typeof F.desc=="string"&&(X=F.desc));}else I=k.text,X=Reflect.get(k,"description");const ee=[I,X],ye=ee.findIndex(F=>{if(typeof F=="string")return F.match(R)});if(ye!==-1){const F=w.deepClone(S),Se=w.queryProperty(F,j=>j?.next?{isFind:false,data:j.next}:{isFind:true,data:j});Se.next={name:I,matchedData:{path:"",formConfig:k,matchedText:ee[ye],description:X}};const ke=[];w.queryProperty(F,j=>{const xe=j?.name;return typeof xe=="string"&&xe.trim()!==""&&ke.push(xe),j?.next?{isFind:false,data:j.next}:{isFind:true,data:j}});const Le=ke.join(M.escapeHtml(" - "));Se.next.matchedData.path=Le,m.push(F);}}}};for(let D=0;D<n.length;D++){const S=n[D];if(!S.views||S.isBottom&&S.id==="script-version")continue;const v=S.views;if(v&&Array.isArray(v)){let k=S.title;typeof k=="function"&&(k=k()),C(v,{index:D,name:k});}}const A=document.createDocumentFragment();for(const D of m){let S=N(D);A.appendChild(S);}$(),G.append(A);};l.on(E,"input",w.debounce(_=>{l.preventEvent(_);let R=l.val(E).trim();if(R===""){$();return}L(R);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(u=>{l.on(u,"dblclick",s);});let g=null,f=false,p,h=false;l.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(u,y)=>{h=true,clearTimeout(p),p=void 0,f&&g===y?(f=false,g=null,s(u)):(p=setTimeout(()=>{f=false;},200),f=true,g=y);},{capture:true}),t.$shadowRoot.appendChild(l.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e}},V={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isBlogArticle(){return this.isBlog()&&window.location.pathname.includes("/article/details/")},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},Ee={init(){a.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),i=decodeURIComponent(n);o.success(`跳转链接：${i}`),window.location.href=i;}else o.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){x.error("跳转链接失败："+e.message);}}},We={init(){a.execMenuOnce("m-csdn-link-jumpRedirect",()=>{Ee.jumpRedirect();});}},Ke=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,ze=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,De={init(){T(ze),a.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),a.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),a.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),a.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),a.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return o.info("自动展开全文"),[M.addBlockCSS("div.article-show-more"),T(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return o.info("屏蔽云开发者任务挑战活动"),M.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return o.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),M.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return o.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),M.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return o.info("屏蔽底部推荐内容"),M.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return o.info("屏蔽底部更多推荐"),M.addBlockCSS("div.more-article")}},Je={init(){T(Ke),a.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>De.autoExpandContent()),a.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return o.info("【屏蔽】底部加入社区"),M.addBlockCSS(".user-desc")}},Ze=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,Ye=`.ecommend-item-box.recommend-recommend-box,\r
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
`,we={init(){a.onceExec("csdn-blog-blockCSS",()=>this.addCSS()),a.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),a.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),a.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),a.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),a.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar());},addCSS(){return o.info("添加屏蔽CSS和功能CSS"),[T(Ye),T(Ze)]},shieldTopToolbar(){return o.info("【屏蔽】顶部工具栏"),M.addBlockCSS("#toolbarBox","#csdn-toolbar")},shieldLoginDialog(){return o.info("【屏蔽】登录弹窗"),M.addBlockCSS(".passport-login-container")},shieldLeftBlogContainerAside(){return o.info("【屏蔽】左侧博客信息"),M.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return o.info("【屏蔽】右侧目录信息"),M.addBlockCSS("#rightAsideConcision","#rightAside")},shieldBottomFloatingToolbar(){return o.info("屏蔽底部悬浮工具栏"),M.addBlockCSS("#toolBarBox")}},Ve={init(){we.init(),l.onReady(()=>{a.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),a.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},removeClipboardHijacking(){o.info("拦截-复制的小尾巴"),l.remove(".article-copyright"),B.articleType&&(B.articleType=0),B?.csdn?.copyright?.textData&&(B.csdn.copyright.textData=""),B?.csdn?.copyright?.htmlData&&(B.csdn.copyright.htmlData="");},unBlockCopy(){o.info("劫持-禁止复制"),l.on(document,"click",".hljs-button",function(t,n){l.preventEvent(t);const i=n.closest(".hljs")||n.closest("pre"),r=n.parentElement,c=i?.querySelector("code")||r.querySelector("code")||r,s=c.innerText;o.info("点击复制按钮复制内容："+(s.length>8?s.substring(0,8)+"...":s),c),w.copy(s),n.setAttribute("data-title","复制成功");},{capture:true});const e=new w.LockFunction(function(t){const n=t.target;if(n.localName!=="pre")return;const i=n.querySelector(".hljs-button");i&&i.setAttribute("data-title","复制");});l.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),l.waitNode("#content_views").then(t=>{B.$&&B.$("#content_views")?.unbind("copy"),l.on(t,"copy",function(n){l.preventEvent(n);const r=B.getSelection()?.toString();return o.info("Ctrl+C复制内容："+(r.length>8?r.substring(0,8)+"...":r)),w.copy(r),false},{capture:true});}),l.waitNode(".hljs-button").then(()=>{setTimeout(()=>{Ae(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});}},U={waitRemove(...e){e.forEach(t=>{l.waitNodeList(t).then(n=>{n.forEach(i=>i.remove());});});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),T(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof ue=="function"?ue(e.keyName):"";typeof t=="string"&&t?T(t):U.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,l.onReady(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},Qe={init(){a.exec("m-csdn-blog-comment-enable",()=>this.blockComment(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight());},blockComment(){return o.info("启用/关闭 评论区"),U.addBlockCSS("#comment")},notLimitCommentMaxHeight(){return o.info("不限制评论区的最大高度"),T(`
        #comment{
          max-height: none !important;
        }
      `)}},Xe={init(){a.exec("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-removeResourceArticle",()=>this.removeResourceArticle()),a.execMenuOnce("m-csdn-blog-openNewTab",()=>this.openNewTab()),l.onReady(()=>{a.execMenuOnce("m-csdn-blog-refactoringRecommendation",e=>this.refactoringRecommendation());});},blockBottomArticle(){return o.info("启用/关闭 底部文章"),U.addBlockCSS("#recommend")},async refactoringRecommendation(){const e=function(){Ae(".container-fluid").forEach(r=>{let c="",s="",b="",g="";if(r.hasAttribute("data-url")){if(c=r.getAttribute("data-url"),s=r.querySelector(".recommend_title div.left")?.innerHTML,!r.querySelector(".text"))return;b=r.querySelector(".text")?.innerHTML,r.querySelectorAll(".recommend-img").length&&r.querySelectorAll(".recommend-img").forEach(p=>{g+=p.innerHTML;});}else c=r.querySelector("a[data-type]").getAttribute("href"),s=r.querySelector(".recommend_title div.left").innerHTML,b=r.querySelector(".text").innerHTML;const f=new URL(c);f.host==="download.csdn.net"||f.host==="www.iteye.com"&&f.pathname.match(/^\/resource/gi)?s='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+s:f.origin.match(/edu.csdn.net/gi)&&(s='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+s),r.setAttribute("class","GM-csdn-dl"),r.setAttribute("data-url",c),r.innerHTML=`<div class="GM-csdn-title"><div class="left">${s}</div></div><div class="GM-csdn-content">${b}</div><div class="GM-csdn-img">${g}</div>`,r.addEventListener("click",function(){window.location.href=c;});});},t=new w.LockFunction(e,50),n=await l.waitNode("#recommend");o.info("重构底部推荐");const i=w.mutationObserver(n,{config:{childList:true,subtree:true,attributes:true},immediate:true,callback:()=>{t.run();}});return [()=>{i.disconnect();}]},removeResourceArticle(){return o.info("移除资源下载的文章"),U.addBlockCSS('.container-fluid:has(a[href*="https://download.csdn.net/"])','.container-fluid[data-url*="https://download.csdn.net/"]','.GM-csdn-dl[data-url*="https://download.csdn.net/"]')},openNewTab(){return o.info("新标签页打开"),l.on(document,"click",[".container-fluid",".GM-csdn-dl"],(t,n)=>{l.preventEvent(t);const i=n.getAttribute("data-url");typeof i=="string"?(o.info(`新标签页打开：${i}`),window.open(i,"_blank")):x.error("未获取到data-url属性");},{capture:true}).off}},ce={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=w.toJSON(e)),e?.code===200)}},de={async folderListWithCheck(e){const t=await z.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":w.getRandomPCUA()}});o.info(t);const n=w.toJSON(t.data.responseText);if(!t.status||!ce.isSuccessResponse(t.data.responseText)){o.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?x.error(n.msg):x.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(e){const t=await z.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":w.getRandomPCUA()},allowInterceptConfig:false});if(o.info(t),!t.status||!ce.isSuccessResponse(t.data.responseText)){o.error("添加收藏失败，请求异常",t),x.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){const t=await z.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":w.getRandomPCUA()}});if(o.info(t),!t.status||!ce.isSuccessResponse(t.data.responseText)){o.error("检查收藏夹状态失败，请求异常"),x.error("检查收藏夹状态失败，请求异常");return}return w.toJSON(t.data.responseText).data},async createFolder(e){const t=await z.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":w.getRandomPCUA()},allowInterceptConfig:false});if(o.info(t),!t.status||!ce.isSuccessResponse(t.data.responseText)){x.error("创建收藏夹失败");return}return w.toJSON(t.data.responseText).data}},et={init(){a.exec("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),l.onReady(()=>{a.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>this.optimizationCollectButton());});},blockBottomToolBar(){return o.info("屏蔽底部工具栏"),U.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return o.info("底部工具栏常驻"),T(`
    #operate {
        bottom: 0 !important;
    }
    `)},async optimizationCollectButton(){o.info("优化收藏按钮");const e=await l.waitNode("#operate .collect-btn",1e4);if(!e)return;const t=l.on(e,"click",async n=>{l.preventEvent(n);const i=e.querySelector(".collect"),r=e.querySelector(".uncollect"),c=await de.folderListWithCheck(window.location.origin+window.location.pathname);if(!c)return;const s=[];c.forEach(p=>{p.IsFavorite&&s.push(p.ID);});const b=p=>{let h=p.ID,u=l.createElement("li",{className:"csdn-collection-item",innerHTML:`
                <div class="csdn-collection-item_left">
                    <div class="csdn-collection-item_title">
                        <span class="title-m">${p.Name}</span>
                    </div>
                    <span class="csdn-collection-item_ext">
                        <span class="csdn-collection-item_length">${p.FavoriteNum}条内容</span>
                        <span class="dot">・</span>
                        <span class="csdn-collection-controls">${p.IsPrivate?"私密":"公开"}</span>
                    </span>
                </div>
                <span class="collect-btn">${p.IsFavorite?"已收藏":"收藏"}</span>
            `},{"data-is-collect":p.IsFavorite});u.querySelector(".title-m");let y=u.querySelector(".csdn-collection-item_length");u.querySelector(".csdn-collection-controls");let E=u.querySelector(".collect-btn");return l.on(E,"click",async G=>{let $=B.articleDetailUrl;$==null&&($=window.location.origin+window.location.pathname);let N=B.articleId;if(N==null){o.error("获取文章ID失败"),x.error("获取文章ID失败");return}let L=B.username;if(L==null){o.error("获取文章作者失败"),x.error("获取文章作者失败");return}let _=B.articleTitle;if(_==null&&(_=document.title.replace(/-CSDN博客$/,"")),_==null){o.error("获取文章标题失败"),x.error("获取文章标题失败");return}let R=B.articleDesc;if(R==null){const A=pe("meta[name='description']");A&&(R=A.getAttribute("content"));}if(R==null){o.error("获取文章描述失败"),x.error("获取文章描述失败");return}const m=[...s];let C=x.loading("处理中...");try{let A=await de.checkFavoriteByUrl($);if(A==null)return;o.info(h,A);let D=!A[h];if(D?(o.info("添加收藏"),m.push(h)):(o.info("取消收藏"),m.splice(m.indexOf(h),1)),!await de.addFavoriteInFolds({author:L,url:$,source:"blog",sourceId:N,title:_,description:R,fromType:"PC",username:p.Username,folderIdList:m}))return;const v=await de.checkFavoriteByUrl($);if(v==null)return;o.info(h,v),u.setAttribute("data-is-collect",(!!v[h]).toString()),D?v[h]?(o.success("收藏成功"),x.success("收藏成功"),l.text(E,"已收藏"),s.includes(h)||s.push(h),p.FavoriteNum++):(o.error("收藏失败",v,h),x.error("收藏失败")):v[h]?(o.error("取消收藏失败",v,h),x.error("取消收藏失败")):(o.success("取消收藏成功"),x.success("取消收藏成功"),l.text(E,"收藏"),s.includes(h)&&s.splice(s.indexOf(h),1),p.FavoriteNum--),l.text(y,`${p.FavoriteNum}条内容`),Object.values(v).find(O=>O)?(l.show(i,!1),l.hide(r,!1)):(l.show(r,!1),l.hide(i,!1)),C.close();}catch(A){o.error(A);}finally{C.close();}}),u},f=H.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
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
        `}).$shadowRoot.querySelector(".csdn-collection-items");c.forEach(p=>{const h=b(p);f.appendChild(h);});},{capture:true});return [()=>{t.off();}]}},tt={init(){Qe.init(),Xe.init(),et.init(),a.exec("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),a.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),a.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),l.onReady(()=>{a.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{Ve.unBlockCopy();});});},shieldTopToolbar(){return o.info("屏蔽顶部Toolbar"),[M.addBlockCSS("#csdn-toolbar"),T(`
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
			`)]},removeAds(){return o.info("去除广告"),[M.waitRemove(".passport-login-container"),M.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),M.waitRemove(".add-firstAd"),M.waitRemove("div.feed-Sign-weixin"),M.waitRemove("div.ios-shadowbox")]},allowSelectText(){return o.info("允许选择内容"),T(`
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
    `)},autoExpandContent(){return o.info("自动展开"),T(`
    #content_views pre.set-code-hide,
    .article_content{
      height: 100% !important;
      overflow: auto !important;
    }
    `)},notLimitCodePreMaxHeight(){return o.info("不限制代码块的最大高度"),T(`
    pre{
        max-height: unset !important;
    }
    `)}},nt=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,ot={init(){T(nt),a.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return o.info("【屏蔽】底部工具栏"),M.addBlockCSS(".page-container > div.btn")}},it=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
  display: none !important;\r
}\r
`,rt={init(){a.execMenuOnce("m-csdn-download-removeAds",()=>T(it)),a.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return o.info("自动展开资源介绍"),[M.addBlockCSS("label.unfold-font"),T(`
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
`,lt={init(){a.onceExec("m-csdn-blog-removeAds",()=>this.addCSS());},addCSS(){return [T(at),T(st)]}},ct={init(){lt.init();}},Me={init(){V.isLink()?(o.info("Router: 中转链接"),We.init()):V.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),Je.init()):V.isBlog()?(o.info("Router: 博客"),ct.init(),V.isBlogArticle()&&(o.info("Router: 文章"),tt.init())):V.isWenKu()?(o.info("Router: 文库"),ot.init()):V.isDownload()?(o.info("Router: 资源下载"),rt.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},dt=`#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {\r
  max-height: unset !important;\r
  height: auto !important;\r
  overflow: auto !important;\r
}\r
\r
.forbid {\r
  user-select: text !important;\r
}\r
`,ut=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}\r
`,pt={init(){T(dt),T(ut),a.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),a.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),a.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return o.info("【屏蔽】资源推荐"),M.addBlockCSS("#recommend")},shieldRightUserInfo(){return o.info("【屏蔽】右侧用户信息"),M.addBlockCSS(".layout-right")},shieldRightToolBar(){return o.info("【屏蔽】右侧悬浮工具栏"),M.addBlockCSS(".csdn-side-toolbar")}},ht={init(){a.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),a.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),a.execMenuOnce("csdn-blog-blockGitCodeLinkCard",()=>this.blockGitCodeLinkCard());},shieldBottomSkillTree(){return o.info("【屏蔽】底部xx技能树"),M.addBlockCSS("#treeSkill")},shieldArticleSearchTip(){return o.info("【屏蔽】选中文字悬浮栏"),M.addBlockCSS("#articleSearchTip")},blockGitCodeLinkCard(){return o.info("【屏蔽】gitcode链接卡片"),M.addBlockCSS('a.has-card[href*="gitcode.com"]',".t2-card-container")}},ft=`.main_father {\r
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
`,mt={init(){a.exec("csdn-blog-blockComment",()=>this.blockComment(),e=>!a.getValue(e[0]),true),l.onReady(()=>{a.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},blockComment(){return o.info("屏蔽评论区"),U.addBlockCSS("#pcCommentBox")},restoreComments(){o.info("恢复评论到正确位置-第一条评论"),l.waitNode(".first-recommend-box").then(e=>{const t=pe(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),o.info("恢复评论到正确位置-第二条评论"),l.waitNode(".second-recommend-box").then(e=>{const t=pe(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});}},gt={init(){a.exec("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),e=>!a.getValue(e[0]),true),a.execMenuOnce("csdn-blog-identityCSDNDownload",()=>this.identityCSDNDownload()),a.execMenuOnce("csdn-blog-removeResourceDownloadArticle",()=>this.removeResourceDownloadArticle());},shieldBottomRecommendArticle(){return o.info("启用/关闭 底部文章"),U.addBlockCSS("main > div.recommend-box")},identityCSDNDownload(){return o.info("标识CSDN下载的链接"),T(`
        .recommend-item-box[data-url*='https://download.csdn.net/'] .content-box{
            border: 2px solid red;
        }
    `)},removeResourceDownloadArticle(){return o.info("移除资源下载的文章"),U.addBlockCSS(".recommend-item-box[data-url*='https://download.csdn.net/']")}},xt={init(){a.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),a.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),a.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),a.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),a.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),a.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop());},shieldRightToolbar(){return o.info("启用/关闭 右侧工具栏"),U.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return o.info("【屏蔽】创作中心"),U.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return o.info("【屏蔽】显示/隐藏侧栏"),U.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return o.info("【屏蔽】新手引导"),U.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return o.info("【屏蔽】客服"),U.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return o.info("【屏蔽】举报"),U.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return o.info("【屏蔽】返回顶部"),U.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},bt={init(){xt.init(),a.onceExec("csdn-blog-initRightToolbarOffset",()=>this.initRightToolbarOffset()),l.onReady(()=>{a.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){o.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let s=pe("#pcCommentBox");if(s&&s.getClientRects().length)t=s;else {o.error("评论区处于隐藏状态");return}}o.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,i=document.querySelector("#csdn-toolbar"),r=window.getComputedStyle(i),c=i.clientHeight-parseFloat(r.paddingTop)-parseFloat(r.paddingBottom);window.scrollTo({top:n-c-8,left:0,behavior:"smooth"});}),l.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){o.info("初始化右侧工具栏的偏移（top、right）"),T(`
    .csdn-side-toolbar{
      left: unset !important;
    }
    `),l.waitNode(".csdn-side-toolbar").then(e=>{l.css(e,{top:parseInt(a.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(a.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});}},wt={init(){ht.init(),mt.init(),gt.init(),bt.init(),a.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),a.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),a.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),l.onReady(()=>{a.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();});});},clickPreCodeAutomatically(){o.info("点击代码块自动展开"),document.addEventListener("click",function(e){let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),t.querySelector(".hide-preCode-box")?.remove());});},articleCenter(){o.info("全文居中");let e=[T(ft)];return e.push(we.shieldRightDirectoryInformation()),e.push(T(`
      #mainBox {
        margin-right: 0px;
      }
      `)),e.push(we.shieldLeftBlogContainerAside()),e.push(T(`
      #mainBox {
        margin-left: 0px;
      }`)),e},autoExpandCodeContent(){return o.info("自动展开代码块"),[M.addBlockCSS("pre.set-code-hide .hide-preCode-box"),T(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return o.info("自动展开全文"),T(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},allowSelectContent(){return o.info("允许选择内容"),T(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Te={init(){V.isLink()?(o.info("Router: 中转链接"),Ee.init()):V.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),De.init()):V.isBlog()?(o.info("Router: 博客"),Ve.init(),V.isBlogArticle()&&(o.info("Router: 帖子"),wt.init())):V.isWenKu()?(o.info("Router: 文库"),pt.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},fe=function(e,t,n,i,r,c,s){const b={text:e,type:"select",description:c,attributes:{},props:{},getValue(){return this.props[Y].get(t,n)},callback(g){if(g==null)return;const f=g.value;if(o.info(`选择：${g.text}`),typeof r=="function"&&r(g))return;this.props[Y].set(t,f);},data:i};return Reflect.set(b.attributes,ae,t),Reflect.set(b.attributes,se,n),ve.initComponentsStorageApi("select",b,{get(g,f){return a.getValue(g,f)},set(g,f){a.setValue(g,f);}}),b},Be=function(e,t,n,i,r,c,s,b,g,f){const p={text:e,type:"slider",description:b,attributes:{},props:{},getValue(){return this.props[Y].get(t,n)},getToolTipContent(h){return typeof s=="function"?s(h):`${h}`},callback(h,u){if(typeof c=="function"&&c(h,u))return;this.props[Y].set(t,u);},min:i,max:r,step:g};return Reflect.set(p.attributes,ae,t),Reflect.set(p.attributes,se,n),ve.initComponentsStorageApi("slider",p,{get(h,u){return a.getValue(h,u)},set(h,u){a.setValue(h,u);}}),p},ve={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new Z.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let i;this.hasStorageApi(e)?i=this.getStorageApi(e):i=n,this.setComponentsStorageApiProperty(t,i);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,Y,t);}},d=function(e,t,n,i,r,c,s,b,g){const f={text:e,type:"switch",description:r,disabled:s,attributes:{},props:{},getValue(){return this.props[Y].get(t,n)},callback(p,h){const u=!!h;if(o.success(`${u?"开启":"关闭"} ${e}`),typeof i=="function"&&i(p,u))return;this.props[Y].set(t,u);},afterAddToUListCallBack:(...p)=>{}};return Reflect.set(f.attributes,ae,t),Reflect.set(f.attributes,se,n),ve.initComponentsStorageApi("switch",f,{get(p,h){return a.getValue(p,h)},set(p,h){a.setValue(p,h);}}),f},Ct={id:"m-panel-blog",title:"博客",isDefault(){return V.isBlog()},views:[{text:"",type:"container",views:[{text:"全局布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","m-csdn-blog-shieldTopToolbar",false,void 0,"关闭是屏蔽顶部工具栏"),d("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[d("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[d("允许选择内容","m-csdn-blog-allowSelectText",true,void 0,"解除文字选中限制"),d("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开，包括：内容、代码块"),d("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","m-csdn-blog-comment-enable",true,void 0,"<code>开启</code>是允许出现评论，<code>关闭</code>是屏蔽评论区"),d("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","m-csdn-blog-bottomArticleEnable",true,void 0,"<code>开启</code>是允许出现推荐文章，<code>关闭</code>是屏蔽底部文章"),d("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),d("移除资源下载的文章","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),d("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",views:[{type:"container",text:"",views:[d("启用","m-csdn-blog-bottom-toolbar-enable",false,void 0,"<code>开启</code>是允许出现底部工具栏，<code>关闭</code>是屏蔽底部工具栏"),d("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),d("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]},vt={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[fe("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{o.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),fe("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),d("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},yt={id:"m-panel-download",title:"资源",isDefault(){return V.isDownload()},views:[{text:"功能",type:"container",views:[d("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"container",views:[d("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]},St={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return V.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[d("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"container",views:[d("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},kt={id:"m-panel-link",title:"链接",isDefault(){return V.isLink()},views:[{text:"功能",type:"container",views:[d("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},_t={id:"panel-so",title:"搜索",isDefault(){return V.isSo()},views:[{text:"C知道-功能",type:"container",views:[d("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},Mt={id:"m-panel-wenku",title:"文库",isDefault(){return V.isWenKu()},views:[{text:"屏蔽",type:"container",views:[d("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},Tt={id:"panel-blog",title:"博客",isDefault(){return V.isBlog()},views:[{text:"",type:"container",views:[{text:"全局布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[d("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false)]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[d("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),d("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[d("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),d("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),d("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),d("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",views:[{text:"功能",type:"container",views:[d("启用","csdn-blog-rightToolbarEnable",true,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),d("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加"),Be("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");l.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),Be("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");l.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"container",views:[d("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),d("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),d("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),d("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),d("【屏蔽】举报","csdn-blog-rightToolbarReport",false),d("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[d("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),d("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),d("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),d("全文居中","csdn-blog-articleCenter",true,void 0,"自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中"),d("允许选择内容","csdn-blog-allowSelectContent",true,void 0,"解除文字选中限制")]},{text:"屏蔽",type:"container",views:[d("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),d("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记"),d("【屏蔽】gitcode链接卡片","csdn-blog-blockGitCodeLinkCard",false)]}]},{text:"评论区",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","csdn-blog-blockComment",true,void 0,"<code>开启</code>是允许出现评论，<code>关闭</code>是屏蔽评论区"),d("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","csdn-blog-bottomRecommendArticleEnable",true,void 0,"<code>开启</code>是允许出现推荐文章，<code>关闭</code>是屏蔽底部文章"),d("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),d("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]},Bt={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[fe("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{o.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),fe("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),d("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Rt={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return V.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[d("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"container",views:[d("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),d("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),d("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),d("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),d("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},At={id:"panel-link",title:"链接",isDefault(){return V.isLink()},views:[{text:"功能",type:"container",views:[d("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},Et={id:"panel-so",title:"搜索",isDefault(){return V.isSo()},views:[{text:"C知道-功能",type:"container",views:[d("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},Dt={id:"panel-wenku",title:"资源",isDefault(){return V.isLink()},views:[{text:"屏蔽",type:"container",views:[d("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),d("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),d("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]};Ce.deleteMenuOption(0);Ce.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(Q.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(Q.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);Q.addContentConfig([Bt,Tt,At,Rt,Dt,Et]);Q.addContentConfig([vt,Ct,kt,St,Mt,_t,yt]);a.init();let $e=w.isPhone(),oe="change_env_set",J=re(oe);Re.add({key:oe,text:`⚙ 自动: ${$e?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return J==null?e:e+` 手动: ${J==1?"移动端":J==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){x.error("输入的不是规范的数字");return}if(!e.includes(n)){x.error("输入的值必须是0或1或2");return}n==0?ie(oe):ge(oe,n);}});J!=null?(o.info(`手动判定为${J===1?"移动端":"PC端"}`),J==1?Me.init():J==2?Te.init():(x.error("意外，手动判定的值不在范围内"),ie(oe))):$e?(o.info("自动判定为移动端"),Me.init()):(o.info("自动判定为PC端"),Te.init());

})(Qmsg, DOMUtils, pops, Utils);