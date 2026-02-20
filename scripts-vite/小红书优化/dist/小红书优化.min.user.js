// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.2.20
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.10.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.3.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.min.js
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

(function (v, q, ye, K, We) {
  'use strict';

  var ae=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ae=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,te=typeof GM_getValue<"u"?GM_getValue:void 0,ie=typeof GM_info<"u"?GM_info:void 0,ce=typeof GM_listValues<"u"?GM_listValues:void 0,Ge=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,se=typeof GM_setValue<"u"?GM_setValue:void 0,Re=typeof GM_setValues<"u"?GM_setValues:void 0,Ke=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ze=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,C=typeof unsafeWindow<"u"?unsafeWindow:void 0,Je=window;const Xe={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},ee={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},P={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&q.waitNodeList(e).then(n=>{n.forEach(i=>i.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),q.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),j(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof Ae=="function"?Ae(t.keyName):null;return typeof e=="string"&&e?j(e):P.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{q.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(i){navigator.clipboard.readText().then(o=>{i(o);}).catch(o=>{m.error("读取剪贴板内容失败👉",o),i("");});}function e(i){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(i);}).catch(o=>{m.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?e(i):window.addEventListener("focus",()=>{e(i);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let i,o=n-e,r=e,s=async c=>{const a=await t(c);if(typeof a=="boolean"&&a||c){y.workerClearTimeout(i);return}if(r+=e,r>o){s(true);return}i=y.workerSetTimeout(()=>{s(false);},e);};s(false);},findParentNode(t,e,n){if(n){let i=q.closest(t,n);if(i)return i.querySelector(e)}else return q.matches(t,e)?t:q.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(i,o)=>o===void 0?e:o,2).replace(new RegExp(`"${e}"`,"g"),"undefined")}},y=K.noConflict(),f=q.noConflict(),F=ye,m=new y.Log(ie,C.console||Je.console),fe=ie?.script?.name||void 0,Ze=ye.config.Utils.AnyTouch(),Qe=false;m.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});v.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?m.warn(n):e==="error"?m.error(n):m.info(n),false},get position(){return x.getValue(ee.qmsg_config_position.key,ee.qmsg_config_position.defaultValue)},get maxNums(){return x.getValue(ee.qmsg_config_maxnums.key,ee.qmsg_config_maxnums.defaultValue)},get showReverse(){return x.getValue(ee.qmsg_config_showreverse.key,ee.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=K.getMaxZIndex(),e=ye.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(t,e)+100}});F.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=K.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=ye.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Fe=new y.GM_Menu({GM_getValue:te,GM_setValue:se,GM_registerMenuCommand:Ge,GM_unregisterMenuCommand:Ke}),Y=new y.Httpx({xmlHttpRequest:ze,logDetails:Qe});Y.interceptors.request.use(t=>t);Y.interceptors.response.use(void 0,t=>(m.error("拦截器-请求错误",t),t.type==="onabort"?v.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?v.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?v.error("请求超时",{consoleLogContent:true}):v.error("其它错误",{consoleLogContent:true}),t));const Ee={Object:{defineProperty:C.Object.defineProperty,keys:C.Object.keys,values:C.Object.values},Function:{apply:C.Function.prototype.apply,call:C.Function.prototype.call},Element:{appendChild:C.Element.prototype.appendChild},setTimeout:C.setTimeout.bind(C),clearTimeout:C.clearTimeout.bind(C),setInterval:C.setInterval.bind(C),clearInterval:C.clearInterval.bind(C)},j=f.addStyle.bind(f),le=q.selector.bind(q),Ye=q.selectorAll.bind(q);new y.GM_Cookie;const he="GM_Panel",Be="data-init",W="data-key",G="data-default-value",et="data-init-more-value",tt="data-plugin-search-config",O="data-storage-api",Z={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},H={setting:{get width(){return Z.width<550?"88vw":Z.width<700?"550px":"700px"},get height(){return Z.height<450?"70vh":Z.height<550?"450px":"550px"}},settingMiddle:{get width(){return Z.width<350?"88vw":"350px"}},info:{get width(){return Z.width<350?"88vw":"350px"},get height(){return Z.height<250?"88vh":"250px"}}},ne={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new y.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(r,s)=>{typeof s!="string"&&(s=P.toStr(s));const c=new Blob([s]),a=globalThis.URL.createObjectURL(c);f.createElement("a",{href:a,download:r}).click(),y.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(a);},500);},i=()=>{const r=p=>{const d=F.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(D,S){D.close();}}},drag:true,mask:{enable:true},width:H.info.width,height:H.info.height,style:`
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
          }`}),h=d.$shadowRoot.querySelector(".btn-control[data-mode='local']"),g=d.$shadowRoot.querySelector(".btn-control[data-mode='network']"),w=d.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),_=async D=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ce=="function"?typeof ae=="function"?(ce().forEach(k=>{ae(k);}),v.success("已清空脚本存储的配置")):v.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):v.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof Re=="function"?Re(D):Object.keys(D).forEach(k=>{const b=D[k];se(k,b);}),v.success("配置导入完毕");},V=D=>new Promise(async S=>{const R=y.toJSON(D);Object.keys(R).length===0?v.warning("解析为空配置，不导入"):await _(R),S(true);});f.on(h,"click",D=>{f.preventEvent(D),d.close();const S=f.createElement("input",{type:"file",accept:".json"});f.on(S,["propertychange","input"],R=>{if(!S.files?.length)return;const k=S.files[0],b=new FileReader;b.onload=()=>{V(b.result);},b.readAsText(k,"UTF-8");}),S.click();}),f.on(g,"click",D=>{f.preventEvent(D),d.close();const S=F.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(b,E){b.close();}},ok:{text:"导入",callback:async(b,E)=>{const M=b.text;if(y.isNull(M)){v.error("请填入完整的url");return}const A=v.loading("正在获取配置..."),T=await Y.get(M,{allowInterceptConfig:false});if(A.close(),!T.status){m.error(T),v.error("获取配置失败",{consoleLogContent:true});return}await V(T.data.responseText)&&b.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:H.info.width,height:"auto"}),R=S.$shadowRoot.querySelector("input"),k=S.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(R,["input","propertychange"],b=>{f.val(R)===""?f.attr(k,"disabled","true"):f.removeAttr(k,"disabled");}),f.onKeyboard(R,"keydown",(b,E,M)=>{b==="Enter"&&M.length===0&&f.val(R)!==""&&f.emit(k,"click");}),f.emit(R,"input");}),f.on(w,"click",async D=>{f.preventEvent(D),d.close();let S=await P.getClipboardText();if(S.trim()===""){v.warning("获取到的剪贴板内容为空");return}await V(S);});},s=(p=`${fe}_panel-setting-${y.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,d)=>{const h=F.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(_,V){_.close();}}},drag:true,mask:{enable:true},width:H.info.width,height:H.info.height,style:`
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
          }`}),g=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),w=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");f.on(g,"click",_=>{f.preventEvent(_);try{n(p,d),h.close();}catch(V){v.error(V.toString(),{consoleLogContent:true});}}),f.on(w,"click",async _=>{await y.copy(d)?(v.success("复制成功"),h.close()):v.error("复制失败");});},a=F.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(p,d){r();}},cancel:{enable:true,text:"导出",callback(p,d){s(void 0,u);}}},width:Z.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),l={};if(typeof ce=="function")ce().forEach(d=>{const h=te(d);Reflect.set(l,d,h);});else {v.warning("不支持函数GM_listValues，仅导出菜单配置");const p=te(he);Reflect.set(l,he,p);}const u=P.toStr(l);a.value=u;},o=()=>{let r=ie?.script?.supportURL||ie?.script?.namespace;typeof r=="string"&&y.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:`版本：${ie?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new Ze(r.$asideLiElement).on("tap",function(c){clearTimeout(e),e=void 0,t?(t=false,i()):(e=setTimeout(()=>{t=false,o();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},be={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{x.showPanel(ne.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){x.isTopWindow()&&Fe.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(i=>i.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class nt{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new K.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=te(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){se(this.storageKey,e);}set(e,n){const i=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.emitValueChangeListener(e,n,i);}get(e,n){const i=this.getLocalValue();return Reflect.get(i,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),i=this.getLocalValue();Reflect.deleteProperty(i,e),this.setLocalValue(i),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){ae(this.storageKey);}addValueChangeListener(e,n){const i=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:i,key:e,callback:n}),this.listenerData.set(e,o),i}removeValueChangeListener(e){let n=false;for(const[i,o]of this.listenerData.entries()){for(let r=0;r<o.length;r++){const s=o[r];(typeof e=="string"&&s.key===e||typeof e=="number"&&s.id===e)&&(o.splice(r,1),r--,n=true);}this.listenerData.set(i,o);}return n}async emitValueChangeListener(...e){const[n,i,o]=e;if(!this.listenerData.has(n))return;const r=this.listenerData.get(n);for(let s=0;s<r.length;s++){const c=r[s];if(typeof c.callback=="function"){let a,l;e.length===1||(e.length===2?a=i:e.length===3&&(a=i,l=o)),await c.callback(n,a,l);}}}}const X=new nt(he),x={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new y.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new y.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new y.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new y.Dictionary),this.__onceExecData},get scriptName(){return fe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:he,attributeKeyName:W,attributeDefaultValueName:G},init(){this.initContentDefaultValue(),be.init();},isTopWindow(){return C.top===C.self},initContentDefaultValue(){const t=i=>{if(!i.attributes||i.type==="button"||i.type==="container"||i.type==="deepMenu")return;const o=i.attributes;let r=o[Be];if(typeof r=="function"){let l=r();if(typeof l=="boolean"&&!l)return}let s=new Map,c=o[W];if(c!=null){const l=o[G];s.set(c,l);}let a=o[et];if(typeof a=="object"&&a&&Object.keys(a).forEach(l=>{const u=a[l];s.set(l,u);}),!s.size){m.warn("请先配置键",i);return}if(i.type==="switch"){let l=typeof i.disabled=="function"?i.disabled():i.disabled;typeof l=="boolean"&&l&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[l,u]of s.entries())this.setDefaultValue(l,u);},e=i=>{for(let o=0;o<i.length;o++){let r=i[o];t(r);let s=r.views;s&&Array.isArray(s)&&e(s);}},n=[...ne.getAllContentConfig()];for(let i=0;i<n.length;i++){let o=n[i];if(!o.views)continue;const r=o.views;r&&Array.isArray(r)&&e(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&m.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){X.set(t,e);},getValue(t,e){const n=X.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){X.delete(t);},hasKey(t){return X.has(t)},addValueChangeListener(t,e,n){const i=X.addValueChangeListener(t,e);if(n?.immediate||n?.immediateAll){const o=this.getValue(t);n?.immediate?e(t,o,o):n?.immediateAll&&x.emitMenuValueChange(t,o,o);}return i},removeValueChangeListener(t){X.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){X.emitValueChangeListener(t,e,n);},async exec(t,e,n,i=true){const o=this;let r;typeof t=="string"||Array.isArray(t)?r=()=>t:r=t;let s=false;const c=r();let a=[];Array.isArray(c)?(s=true,a=c):a.push(c);const l=a.find(k=>!this.$data.contentConfigInitDefaultValue.has(k));if(l){m.warn(`${l} 键不存在`);return}const u=JSON.stringify(a);if(i&&this.$data.onceExecMenuData.has(u))return this.$data.onceExecMenuData.get(u);let p=[];const d=[];let h=[];const g=(k,b)=>{let E=[],M=[],A=[];if(Array.isArray(b))A=A.concat(b);else {const $=L=>{if(typeof L=="object"&&L!=null)if(L instanceof Element)A.push(L);else {const{$css:N,destory:B}=L;N!=null&&(Array.isArray(N)?A=A.concat(N):A.push(N)),typeof B=="function"&&A.push(B);}else A.push(L);};if(b!=null&&Array.isArray(b))for(const L of b)$(L);else $(b);}const T=$=>{if($!=null){if($ instanceof Element){E.push($);return}if(typeof $=="function"){M.push($);return}}};for(const $ of A){const L=T($);if(typeof L=="boolean"&&!L)break;if(Array.isArray($))for(const N of $){const B=T(N);if(typeof B=="boolean"&&!B)break}}_(),V(),k&&(p=p.concat(E),h=h.concat(M));},w=k=>!!this.getValue(k),_=()=>{for(let k=0;k<p.length;k++)p[k]?.remove(),p.splice(k,1),k--;},V=()=>{for(let k=0;k<h.length;k++){const b=h[k];b(),h.splice(k,1),k--;}},D=()=>{let k=false;return typeof n=="function"?k=n(a):k=a.every(b=>w(b)),k},S=async k=>{const b=D();let E=[];if(b){const M=a.map(A=>this.getValue(A));E=await e({key:a,value:s?M:M[0],addStoreValue:(...A)=>g(b,A)});}g(b,E);};i&&a.forEach(k=>{const b=this.addValueChangeListener(k,(E,M,A)=>S());d.push(b);}),await S();const R={reload(){this.clearStoreStyleElements(),this.destory(),S();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>_(),destory(){return V()},removeValueChangeListener:()=>{d.forEach(k=>{this.removeValueChangeListener(k);});},clearOnceExecMenuData(){i&&o.$data.onceExecMenuData.delete(u);}};return this.$data.onceExecMenuData.set(u,R),R},async execMenu(t,e,n=false,i=false){return await this.exec(t,async o=>await e(o),o=>o.every(s=>{let c=!!this.getValue(s);return x.$data.contentConfigInitDisabledKeys.includes(s)&&(c=false,m.warn(`.execMenu${i?"Once":""} ${s} 被禁用`)),n&&(c=!c),c}),i)},async execMenuOnce(t,e,n=false,i=false){const o=await this.execMenu(t,e,n,true);if(i&&o){const r=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,r);}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),X.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${fe}-设置`,n=false,i=false){this.$data.$panel=null,this.$data.panelContent=[];const o=t.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!o&&t.push(...ne.getDefaultBottomContentConfig());const r=F.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(s,c)=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(s,c)=>{s(),this.$data.$panel=null;}},width:H.setting.width,height:H.setting.height,drag:true,only:true,style:`
        .pops-switch-shortcut-wrapper{
          margin-right: 5px;
          display: inline-flex;
        }
        .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
          cursor: pointer;
        }
        `,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=t,i||this.registerConfigSearch({$panel:r,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,i=async(d,h)=>{if(d==null)return;const g=await h(d);return g&&typeof g.isFind=="boolean"&&g.isFind?g.data:await i(g.data,h)},o=(d,h)=>{const g=new IntersectionObserver(w=>{w.forEach(_=>{_.isIntersecting&&(h?.(),g.disconnect());});},{root:null,threshold:1});g.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},r=d=>{const h="pops-flashing";f.onAnimationend(d,()=>{d.classList.remove(h);}),d.classList.add(h);},s=d=>{if(d.type==="dblclick"&&p)return;f.preventEvent(d),a=null;const h=F.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:H.settingMiddle.width,height:"auto",drag:true,style:`
					${F.config.cssText.panelCSS}

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
				`});h.$shadowRoot.querySelector(".search-wrapper");const g=h.$shadowRoot.querySelector(".search-config-text"),w=h.$shadowRoot.querySelector(".search-result-wrapper");g.focus();const _=()=>{f.empty(w);},V=S=>{const R=y.queryProperty(S,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E}),k=f.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${R.matchedData?.path}</div>
							<div class="search-result-item-description">${R.matchedData?.description??""}</div>
						`}),b=F.config.PanelHandlerComponents();return f.on(k,"click",E=>{const A=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[S.index];if(!A){v.error(`左侧项下标${S.index}不存在`);return}A.scrollIntoView({behavior:"smooth",block:"center"}),A.click(),i(S.next,async T=>{if(T?.next){const $=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(L=>{const N=Reflect.get(L,b.$data.nodeStoreConfigKey);return typeof N=="object"&&N!=null&&N.text===T.name}),2500);if($)$.click();else return v.error("未找到对应的二级菜单"),{isFind:true,data:T};return {isFind:false,data:T.next}}else {const $=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(L=>Reflect.get(L,b.$data.nodeStoreConfigKey)===T.matchedData?.formConfig),2500);if($){o($);const L=$.closest(".pops-panel-forms-fold[data-fold-enable]");L&&(L.querySelector(".pops-panel-forms-fold-container").click(),await y.sleep(500)),o($,()=>{r($);});}else v.error("未找到对应的菜单项");return {isFind:true,data:T}}});}),k},D=S=>{const R=new RegExp(S,"i"),k=[],b=(M,A)=>{for(let T=0;T<M.length;T++){const $=M[T],L=$.views;if(L&&Array.isArray(L)){const N=y.deepClone(A);if($.type==="deepMenu"){const B=y.queryProperty(N,z=>z?.next?{isFind:false,data:z.next}:{isFind:true,data:z});B.next={name:$.text};}b(L,N);}else {let N,B;if($.type==="own"){const U=Reflect.get($.attributes||{},tt);U&&(typeof U.text=="string"&&(N=U.text),typeof U.desc=="string"&&(B=U.desc));}else N=$.text,B=Reflect.get($,"description");const z=[N,B],$e=z.findIndex(U=>{if(typeof U=="string")return U.match(R)});if($e!==-1){const U=y.deepClone(A),Ve=y.queryProperty(U,J=>J?.next?{isFind:false,data:J.next}:{isFind:true,data:J});Ve.next={name:N,matchedData:{path:"",formConfig:$,matchedText:z[$e],description:B}};const Se=[];y.queryProperty(U,J=>{const xe=J?.name;return typeof xe=="string"&&xe.trim()!==""&&Se.push(xe),J?.next?{isFind:false,data:J.next}:{isFind:true,data:J}});const je=Se.join(P.escapeHtml(" - "));Ve.next.matchedData.path=je,k.push(U);}}}};for(let M=0;M<n.length;M++){const A=n[M];if(!A.views||A.isBottom&&A.id==="script-version")continue;const T=A.views;if(T&&Array.isArray(T)){let $=A.title;typeof $=="function"&&($=$()),b(T,{index:M,name:$});}}const E=document.createDocumentFragment();for(const M of k){let A=V(M);E.appendChild(A);}_(),w.append(E);};f.on(g,"input",y.debounce(S=>{f.preventEvent(S);let R=f.val(g).trim();if(R===""){_();return}D(R);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(d=>{f.on(d,"dblclick",s);});let a=null,l=false,u,p=false;f.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,h)=>{p=true,clearTimeout(u),u=void 0,l&&a===h?(l=false,a=null,s(d)):(u=setTimeout(()=>{l=false;},200),l=true,a=h);},{capture:true}),e.$shadowRoot.appendChild(f.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t},getDynamicValue(t,e){const n=this;let i=false,o=e;const r=this.addValueChangeListener(t,(s,c)=>{o=c;});return {get value(){return i||(i=true,o=n.getValue(t,e)),o},destory(){n.removeValueChangeListener(r);}}}},Pe=fe||"小红书优化",ot=We,we={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},Ie="https://edith.xiaohongshu.com",Me={async getPageInfo(t,e="",n="",i="",o="jpg,webp"){const r="/api/sns/web/v2/comment/page",s={note_id:t,cursor:e,top_comment_id:i,image_formats:o,xsec_token:n},c=r+"?"+y.toSearchParamsStr(s);let a=await Y.get(`${Ie}${c}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":y.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!a.status)return;let l=y.toJSON(a.data.responseText);if(m.info(["获取页信息",l]),l.code===0||l.success)return l.data;if(l.code===-101)return;v.error(l.msg);},async getLzlPageInfo(t="",e="",n=10,i="",o="jpg,webp,avif",r=""){const s="/api/sns/web/v2/comment/sub/page";let c={note_id:t,root_comment_id:e,num:n,cursor:i,image_formats:o,top_comment_id:r};s+""+y.toSearchParamsStr(c);let a=`${Ie}${s}?${y.toSearchParamsStr(c)}`,l=await Y.get(a,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!l.status){l.data.status===406&&y.isNotNull(l.data.responseText)?y.toJSON(l.data.responseText).code==-1?v.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):v.error("获取楼中楼信息失败"):v.error("请求异常"),m.error(["获取楼中楼信息失败",l]);return}let u=y.toJSON(l.data.responseText);if(m.info(["获取楼中楼页信息",u]),u.code===0||u.success)return u.data;v.error(u.msg);},async getSearchRecommend(t){let e=await Y.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:true});if(!e.status)return;let n=y.toJSON(e.data.responseText);if(n.success||n.code===1e3)return n.data.sug_items}},Le={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(t){if(this.$data.document_addEventListener.push(t),m.info("document.addEventListener hook新增劫持判断回调"),this.$data.document_addEventListener.length>1)return;const e=this,n=new WeakMap,i=C.document.addEventListener,o=C.document.removeEventListener;C.document.addEventListener=function(...r){const s=this,c=r[0],a=r[1],l=r[2];for(let u=0;u<e.$data.document_addEventListener.length;u++){const p=e.$data.document_addEventListener[u],d=Reflect.apply(p,this,[s,c,a,l]);if(typeof d=="function"){r[1]=d,n.set(a,{eventName:c,fn:d,options:l});break}else if(typeof d=="boolean"&&!d)return}return Reflect.apply(i,this,r)},C.document.removeEventListener=function(...r){const s=r[0],c=r[1],a=r[2];if(n.has(c)){const{eventName:l,fn:u,options:p}=n.get(c);let d=false;s===l&&(typeof a=="boolean"&&a===p||typeof a=="object"&&typeof p=="object"&&a.capture===p.capture||a==a)&&(d=true),d&&(r[1]=u);}return Reflect.apply(o,this,r)};},element_addEventListener(t){if(this.$data.element_addEventListener.push(t),m.info("Element.prototype.addEventListener hook新增劫持判断回调"),this.$data.element_addEventListener.length>1)return;const e=this,n=new WeakMap,i=C.Element.prototype.addEventListener,o=C.Element.prototype.removeEventListener;C.Element.prototype.addEventListener=function(...r){const s=this,c=r[0],a=r[1],l=r[2];for(let u=0;u<e.$data.element_addEventListener.length;u++){const p=e.$data.element_addEventListener[u],d=Reflect.apply(p,this,[s,c,a,l]);if(typeof d=="function"){r[1]=d,n.set(a,{eventName:c,fn:d,options:l});break}else if(typeof d=="boolean"&&!d)return}return Reflect.apply(i,this,r)},C.Element.prototype.removeEventListener=function(...r){const s=r[0],c=r[1],a=r[2];if(n.has(c)){const{eventName:l,fn:u,options:p}=n.get(c);let d=false;l===s&&(typeof a=="boolean"&&a===p||typeof a=="object"&&typeof p=="object"&&a.capture===p.capture||a==p)&&(d=true),d&&(r[1]=u);}return Reflect.apply(o,this,r)};},setTimeout(t){if(this.$data.setTimeout.push(t),m.info("window.setTimeout hook新增劫持"),this.$data.setTimeout.length>1)return;const e=this,n=C.setTimeout;C.setTimeout=function(...i){const o=i[0],r=i[1];for(let s=0;s<e.$data.setTimeout.length;s++){const c=e.$data.setTimeout[s],a=c(o,r);if(typeof a=="boolean"&&!a)return;if(typeof a=="function"){i[0]=a;break}}return Reflect.apply(n,this,i)};},setInterval(t){if(this.$data.setInterval.push(t),m.info("window.setInterval hook新增劫持"),this.$data.setInterval.length>1)return;const e=this,n=C.setInterval;C.setInterval=function(...i){const o=i[0],r=i[1];for(let s=0;s<e.$data.setInterval.length;s++){const c=e.$data.setInterval[s],a=c(o,r);if(typeof a=="boolean"&&!a)return;if(typeof a=="function"){i[0]=a;break}}return Reflect.apply(n,this,i)};},function_apply(t){if(this.$data.function_apply.push(t),m.info("Function.prototype.apply hook新增劫持"),this.$data.function_apply.length>1)return;const e=this,n=C.Function.prototype.apply;C.Function.prototype.apply=function(...i){const o=i[0],r=i[1];let s=this;for(let a=0;a<e.$data.function_apply.length;a++){const l=e.$data.function_apply[a];if(typeof l.paramsHandler=="function"){const u=l.paramsHandler(s,o,r,i);if(u!=null){if(u.args&&("thisArg"in u.args&&(i[0]=u.args.thisArg),"argArray"in u.args&&(i[1]=u.args.argArray),typeof u.args.fn=="function"&&(s=u.args.fn)),u.preventDefault)return "result"in u?u.result:void 0;break}}}let c=n.call(s,...i);for(let a=0;a<e.$data.function_apply.length;a++){const l=e.$data.function_apply[a];if(typeof l.returnsHandler=="function"){let u=l.returnsHandler(s,i[0],i[1],c,i);u!=null&&"result"in u&&(c=u.result);}}return c};},function_call(t){if(this.$data.function_call.push(t),m.info("Function.prototype.call hook新增劫持"),this.$data.function_call.length>1)return;const e=this,n=C.Function.prototype.call;C.Function.prototype.call=function(...i){const o=i[0],r=i.slice(1);let s=this;for(let a=0;a<e.$data.function_call.length;a++){const l=e.$data.function_call[a];if(typeof l.paramsHandler=="function"){const u=l.paramsHandler(s,o,r,i);if(u!=null){if(u.args&&("thisArg"in u.args&&(i[0]=u.args.thisArg),"argArray"in u.args&&i.splice(1,r.length,...u.args.argArray),typeof u.args.fn=="function"&&(s=u.args.fn)),u.preventDefault)return "result"in u?u.result:void 0;break}}}let c=n.apply(s,i);for(let a=0;a<e.$data.function_call.length;a++){const l=e.$data.function_call[a];if(typeof l.returnsHandler=="function"){const u=l.returnsHandler(s,i[0],i[1],c,i);u!=null&&"result"in u&&(c=u.result);}}return c};},defineProperty(t){if(this.$data.defineProperty.push(t),m.info("Object.defineProperty hook新增劫持"),this.$data.defineProperty.length>1)return;const e=this,n=C.Object.defineProperty;C.Object.defineProperty=function(...i){const o=i[0],r=i[1],s=i[2];for(let c=0;c<e.$data.defineProperty.length;c++){const a=e.$data.defineProperty[c],l=a(o,r,s);if(l!=null){i[0]=l.target,i[1]=l.key,i[2]=l.attributes;break}}return Reflect.apply(n,this,i)};},window_webpack(t="webpackJsonp",e,n){let i;Ee.Object.defineProperty(C,t,{get(){return i},set(o){i=o;const r=o.push;o.push=function(...s){const c=s[0][0];let a=false;if(typeof e=="function"){const l=e(c);typeof l=="boolean"&&(a=l);}else a=e==c,a||Array.isArray(e)&&Array.isArray(c)&&(a=JSON.stringify(e)===JSON.stringify(c));if(a){const l=s[0][1];Ee.Object.keys(l).forEach(p=>{const d=l[p];typeof d=="function"&&(s[0][1][p]=function(...h){const g=d.call(this,...h),w=h[0];return h[0]=n(w),g});});}return r.call(this,...s)};}});}},_e={webpackChunkranchi(){let t;Object.defineProperty(C,"webpackChunkranchi",{get(){return t},set(n){t=n;const i=t.push;t.push=function(...o){return o[0][0],typeof o[0][1]=="object"&&Object.keys(o[0][1]).forEach((r,s)=>{if(typeof o[0][1][r]=="function"&&o[0][1][r].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&o[0][1][r].toString().includes("jumpToApp")&&x.getValue("little-red-book-hijack-webpack-scheme")){let c=o[0][1][r];o[0][1][r]=function(...a){m.success(["成功劫持scheme唤醒",a]);let l=a[2].d;return a[2].d=function(...u){if(u.length===2&&typeof u[1]?.Z=="function"){let p=u[1].Z;p.toString()==="function(){return y}"&&(u[1].Z=function(...d){let h=p.call(this,...d);return typeof h=="function"&&h.toString().includes("jumpToApp")?function(){return {jumpToApp(g){if(m.success(["拦截唤醒",g]),g.deeplink?.startsWith("xhsdiscover://user/")){let w=g.deeplink.replace(/^xhsdiscover:\/\/user\//,""),_=window.location.origin+`/user/profile/${w}`;window.open(_,"_blank");}}}}:h});}return l.call(this,...u)},c.call(this,...a)};}}),i.call(this,...o)};}});},hookVue(){const t=C.Object.assign;let e=false;C.Object.assign=function(...n){if(n.length==2&&n[1]?.render!==void 0&&!e){let i=n[1];const o=i.render;let r=false;i.render=function(...s){return r||(s[5]._.appContext.mixins.push({mounted(){this.$el.__Ivue__=this;}}),r=true),o.call(this,...s)},e=true;}return Reflect.apply(t,this,n)};},setTimeout(){Le.setTimeout(t=>{let e=t.toString();if(e==="function(){r()}"||e==="function(){u()}")return m.success(["成功劫持setTimeout唤醒",t]),false});},call(){Le.function_call({paramsHandler(t,e,n){if(t.toString(),n[0]?.label===0&&Array.isArray(n[0]?.ops)&&Array.isArray(n[0]?.trys)&&typeof n[0]?.sent=="function")return m.success(["成功劫持call唤醒",t,e,n]),{args:{fn:t,thisArg:e,argArray:[]}};if(typeof e=="string"&&e.startsWith("https://oia.xiaohongshu.com/oia"))return m.success(["成功劫持call跳转下载页面",t,e,n]),{preventDefault:true}}});}},it=`/* 底部的App内打开 */
.bottom-button-box,
/* 顶部的打开看看 */
.nav-bar-box {
  display: none !important;
}
`,ue={allowCopy(){return m.info("允许复制"),j(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return m.info("屏蔽底部搜索发现"),P.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return m.info("屏蔽底部工具栏"),P.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return m.info("屏蔽视频笔记的作者热门笔记"),P.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return m.info("屏蔽视频笔记的热门推荐"),P.addBlockCSS("#new-note-view-container .recommend-box")}},rt={optimizeVideoNoteDesc(){return m.info("优化视频笔记的描述（可滚动）"),j(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},ke={init(){j(it),(x.getValue("little-red-book-hijack-webpack-mask")||x.getValue("little-red-book-hijack-webpack-scheme"))&&(m.info("劫持webpack"),_e.setTimeout(),_e.call()),x.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>ue.blockBottomSearchFind()),x.execMenuOnce("little-red-book-shieldBottomToorBar",()=>ue.blockBottomToorBar()),x.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>ke.optimizeImageBrowsing()),x.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>rt.optimizeVideoNoteDesc()),x.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>ue.blockAuthorHotNote()),x.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>ue.blockHotRecommendNote()),f.onReady(function(){x.execMenu("little-red-book-optimizeCommentBrowsing",()=>{ke.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){m.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteId:"",xsec_token:"",noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){this.emojiMap=y.toJSON(C.localStorage.getItem("redmoji"))?.redmojiMap||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new y.LockFunction(this.scrollEvent,this);const e=C.__INITIAL_STATE__,n=e.noteData??e.data.noteData;t.noteData=n.data.noteData,t.commentData=n.data.commentData,t.noteId=t.noteData.noteId,t.xsec_token=e.noteData.routeQuery.xsec_token,m.info(["笔记数据",t.noteData]),m.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
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
								<span class="little-red-book-comments-create-time">${y.formatTime(e.create_time)}</span>
								<span class="little-red-book-comments-location">${e.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `},getCommentElement(e){let n=e.content,i=e.create_time||parseInt(e.time),o=e.id,r=e.ip_location||e.ipLocation,s=e.sub_comment_has_more,c=parseInt(e.sub_comment_count)||0,a=e.sub_comment_cursor,l=e.sub_comments||e.subComments,u=(e.user_info||e.user).image,p=(e.user_info||e.user).nickname,d=e?.user_info?.user_id||e?.user?.userId;n=t.converContent(n);let h=f.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${t.getCommentHTML({user_id:d,user_avatar:u,user_nickname:p,content:n,create_time:i,ip_location:r})}
					</div>
					`});if(s&&Array.isArray(l)&&(l.forEach(g=>{let w=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:g.user_info.user_id,user_avatar:g.user_info.image,user_nickname:g.user_info.nickname,content:t.converContent(g.content),create_time:g.create_time,ip_location:g.ip_location})});h.appendChild(w);}),c!==l.length)){let g=c-l.length,w=a,_=f.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${g} 条回复`});async function V(){let D=v.loading("加载中，请稍后..."),S=await Me.getLzlPageInfo(t.noteId,o,10,w,void 0);D.close(),S&&(w=S.cursor,g=g-S.comments.length,_.innerText=`展开 ${g} 条回复`,S.comments.forEach(R=>{let k=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:R.user_info.user_id,user_avatar:R.user_info.image,user_nickname:R.user_info.nickname,content:t.converContent(R.content),create_time:R.create_time,ip_location:R.ip_location})});f.before(_,k);}),S.has_more||(f.off(_,"click",void 0,V,{capture:true}),_.remove()));}f.on(_,"click",void 0,V,{capture:true}),h.appendChild(_);}return h},converContent(e){return t.emojiNameList.forEach(n=>{e.includes(n)&&(e=e.replaceAll(n,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[n]}">`));}),e},async scrollEvent(){if(!y.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=v.loading("加载中，请稍后..."));let e=await Me.getPageInfo(t.noteId,t.currentCursor,t.xsec_token);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(n=>{let i=t.getCommentElement(n);t.commentContainer.appendChild(i);}),!e.has_more)){v.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){m.success("添加滚动监听事件"),f.on(document,"scroll",void 0,t.scrollFunc.run,{capture:true,once:false,passive:true});},removeScrollEventListener(){m.success("移除滚动监听事件"),f.off(document,"scroll",void 0,t.scrollFunc.run,{capture:true});}};f.waitNode(".narmal-note-container").then(async()=>{m.info("优化评论浏览-笔记元素出现");const e=le(".note-view-container"),n=f.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
        `});t.commentContainer=n,t.init();const i=f.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.commentData.commentCount??t.noteData.comments} 条评论`});n.appendChild(i),t.commentData&&t.commentData.comments&&(m.info("从固定的评论中加载"),t.commentData.comments.forEach(o=>{let r=t.getCommentElement(o);n.appendChild(r);})),f.append(e,n);});},optimizeImageBrowsing(){m.info("优化图片浏览");const t=function(i=[],o=0){let r="";i.forEach(a=>{r+=`<li><img data-src="${a}" loading="lazy"></li>`;});const s=f.createElement("ul",{innerHTML:r}),c=new ot(s,{inline:false,url:"data-src",zIndex:y.getMaxZIndex()+100,hidden:()=>{c.destroy();}});o=o<0?0:o,c.view(o),c.zoomTo(1),c.show();},e=(i,o)=>{let r=o.querySelector("img"),s=[],c=[];o.closest(".onix-carousel-item")?c=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):c=[r];let a=c.findIndex(l=>l==r);c.forEach(l=>{let u=l.getAttribute("src")||l.getAttribute("data-src")||l.getAttribute("alt");u&&s.push(u);}),m.success(["点击浏览图片👉",s[a]]),t(s,a);},n=f.on(document,"click",".note-image-box",e);return [P.setGMResourceCSS(Xe.Viewer),()=>{n.off();}]}},at=`/* 用户主页 */
/* 底部的-App内打开 */
.launch-app-container.bottom-bar,
/* 顶部的-打开看看 */
.main-container > .scroll-view-container > .launch-app-container:first-child,
/* 底部的-打开小红书看更多精彩内容 */
.bottom-launch-app-tip.show-bottom-bar,
/* 首页-顶部横幅 */
#app .launch-app-container,
/* 笔记-顶部横幅 */
.note-view-container .nav-bar-box-expand ,
.note-view-container .nav-bar-box-expand+.placeholder-expand,
/* 404页面 顶部的打开看看 */
.not-found-container .nav-bar-box-expand:has(.share-info-box):has(.launch-btn),
/* 404页面 底部的-App内打开 */
.not-found-container #fmp {
  display: none !important;
}
`,He={init(){f.onReady(()=>{x.execMenuOnce("little-red-book-repariClick",()=>He.repariClick());});},repariClick(){m.info("修复正确的点击跳转");const t=n=>{const i=n.target;if(m.info(["点击的按钮元素",i]),i?.className?.includes("follow-btn"))m.success("点击-关注按钮");else if(i?.closest("button.reds-button.message-btn"))m.success("点击-私信按钮");else if(i?.closest("div.reds-tab-item"))m.success("点击-笔记/收藏按钮");else if(i?.closest("section.reds-note-card")){m.success("点击-笔记卡片");const o=i?.closest("section.reds-note-card"),r=o.getAttribute("id")||y.toJSON(o.getAttribute("impression"))?.noteTarget?.value?.noteId;r?window.open(`https://www.xiaohongshu.com/discovery/item/${r}`,"_blank"):v.error("获取笔记note_id失败");}return f.preventEvent(n),false},e=f.on(document,"click",t,{capture:true});return [()=>{e.off();}]}},Ce={init(){x.execMenuOnce("little-red-book-shieldAd",()=>(m.info("注入默认屏蔽CSS"),j(at))),x.execMenuOnce("little-red-book-allowCopy",()=>Ce.allowCopy()),we.isArticle()?ke.init():we.isUserHome()&&He.init();},allowCopy(){return m.info("允许复制文字"),j(`
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `)}},lt={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},de={getVue(t){if(t!=null)return t.__vue__||t.__Ivue__||t.__IVue__},getVue3(t){if(t!=null)return t.__vueParentComponent},waitVuePropToSet(t,e){Array.isArray(e)||(e=[e]);function n(){let i=null;return typeof t=="string"?i=f.selector(t):typeof t=="function"?i=t():t instanceof HTMLElement&&(i=t),i}e.forEach(i=>{typeof i.msg=="string"&&m.info(i.msg);function o(){let r=n();if(r==null)return {status:false,isTimeout:true,inst:null,$el:r};let s=de.getVue(r);if(s==null)return {status:false,isTimeout:false,inst:null,$el:r};let c=i.check(s,r);return c=!!c,{status:c,isTimeout:false,inst:s,$el:r}}y.waitVueByInterval(()=>n(),()=>o().status,250,1e4).then(r=>{let s=o();if(s.status){let c=s.inst;i.set(c,s.$el);}else typeof i.failWait=="function"&&i.failWait(s.isTimeout);});});},watchVuePropChange(t,e,n,i,o){let r=y.assign({immediate:true,deep:false},i||{});return new Promise(s=>{de.waitVuePropToSet(t,{check(c){return typeof c?.$watch=="function"},set(c){let a=null;typeof e=="function"?a=c.$watch(()=>e(c),(l,u)=>{n(c,l,u);},r):a=c.$watch(e,(l,u)=>{n(c,l,u);},r),s(a);},failWait:o});})},goToUrl(t,e,n=false){if(t==null){v.error("跳转Url: $vueNode为空"),m.error("跳转Url: $vueNode为空："+e);return}let i=de.getVue(t);if(i==null){v.error("获取vue属性失败",{consoleLogContent:true});return}let o=i.$router,r=true;if(m.info("即将跳转URL："+e),n&&(r=false),r)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let s=new URL(e);if(s.origin===window.location.origin)e=s.pathname+s.search+s.hash;else {m.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}m.info("$router push跳转Url："+e),o.push(e);}},hookGestureReturnByVueRouter(t){function e(){m.success("触发popstate事件"),i(true);}function n(){m.success("监听地址改变"),t.vueInst.$router.history.push(t.hash),f.on(C,"popstate",e);}async function i(o=false){if(f.off(C,"popstate",e),!t.callback(o))for(;;)if(t.vueInst.$router.history.current.hash===t.hash)m.info("后退！"),t.vueInst.$router.back(),await y.sleep(250);else return}return n(),{resumeBack:i}}},Te={init(){(x.getValue("pc-xhs-search-open-blank-btn")||x.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),x.exec(["pc-xhs-search-open-blank-btn","pc-xhs-search-open-blank-keyboard-enter"],()=>this.optimizationSearch(),t=>t.some(n=>{let i=!!x.getValue(n);return x.$data.contentConfigInitDisabledKeys.includes(n)&&(i=false,m.warn(`.exec ${n} 被禁用`)),i})),x.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){const t=function(e,n=true){{const i=le("#search-input");if(i){const o=i.value,r=lt.getSearchUrl(o);m.info("搜索内容: "+o),window.open(r,n?"_blank":"_self");}else v.error("未找到搜索的输入框");}};f.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",x.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{f.onKeyboard(e,"keydown",(n,i,o,r)=>{n==="Enter"&&!o.length&&(m.info("按下回车键"),f.preventEvent(r),e.blur(),t());});});}),f.waitNode("#search-input + .input-button .search-icon").then(e=>{x.execMenu("pc-xhs-search-open-blank-btn",()=>{f.on(e,"click",n=>{f.preventEvent(n),m.info("点击搜索按钮"),t();},{capture:true});});});},fullWidth(){m.info("笔记宽屏");const t=x.getValue("pc-xhs-article-fullWidth-widthSize",90),e=x.getValue("pc-xhs-article-fullWidth-imageSize",80);return j(`
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
		@media (min-width: 960px) {
			#noteContainer .media-container{
				width: ${e}% !important;
				height: auto !important;
			}
		}
		@media (max-width: 959px) {
			#noteContainer .media-container{
				height: ${e}% !important;
				width: auto !important;
			}
		}
		`)},transformPublishTime(){m.info("转换笔记发布时间");const t=new y.LockFunction(()=>{Ye(".note-content:not([data-edit-date])").forEach(n=>{const i=de.getVue(n);if(!i)return;const o=i?._?.props?.note;if(o==null)return;const r=o.time,s=o.lastUpdateTime,c=o.ipLocation;if(typeof r=="number"){const a=[];a.push(`发布：${y.formatTime(r)}`),typeof s=="number"&&a.push(`修改：${y.formatTime(s)}`),typeof c=="string"&&y.isNotNull(c)&&a.push(c);const l=n.querySelector(".date");f.html(l,a.join("<br>")),n.setAttribute("data-edit-date","");}});}),e=y.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{t.run();}});return [()=>{e?.disconnect();}]}},st={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=y.ajaxHooker()),this.__ajaxHooker}},ve=function(t,e,n,i,o,r,s,c,a,l){const u={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:i,buttonIsRightIcon:o,buttonIconIsLoading:r,buttonType:s,buttonText:n,callback(p){typeof c=="function"&&c(p);},afterAddToUListCallBack:a};return Reflect.set(u.attributes,Be,()=>{u.disable=false;}),u},me=function(t,e,n,i,o,r,s){const c={text:t,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[O].get(e,n)},callback(a){if(a==null)return;const l=a.value;if(m.info(`选择：${a.text}`),typeof o=="function"&&o(a))return;this.props[O].set(e,l);},data:i};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,G,n),oe.initComponentsStorageApi("select",c,{get(a,l){return x.getValue(a,l)},set(a,l){x.setValue(a,l);}}),c},De=function(t,e,n,i,o,r,s="请至少选择一个选项",c,a){let l=[];typeof i=="function"?l=i():l=i;const u={text:t,type:"select-multiple",description:r,placeholder:s,attributes:{},props:{},getValue(){return this.props[O].get(e,n)},selectConfirmDialogConfig:c,callback(p){const d=this.props[O],h=[];p.forEach(g=>{h.push(g.value);}),m.info("多选-选择：",h),d.set(e,h);},data:l};return Reflect.set(u.attributes,W,e),Reflect.set(u.attributes,G,n),oe.initComponentsStorageApi("select-multiple",u,{get(p,d){return x.getValue(p,d)},set(p,d){x.setValue(p,d);}}),u},Ne=function(t,e,n,i,o,r,s,c,a,l){const u={text:t,type:"slider",description:c,attributes:{},props:{},getValue(){return this.props[O].get(e,n)},getToolTipContent(p){return typeof s=="function"?s(p):`${p}`},callback(p,d){if(typeof r=="function"&&r(p,d))return;this.props[O].set(e,d);},min:i,max:o,step:a};return Reflect.set(u.attributes,W,e),Reflect.set(u.attributes,G,n),oe.initComponentsStorageApi("slider",u,{get(p,d){return x.getValue(p,d)},set(p,d){x.setValue(p,d);}}),u},I=function(t,e,n,i,o,r,s,c,a){const l={text:t,type:"switch",description:o,disabled:s,attributes:{},props:{},getValue(){return this.props[O].get(e,n)},callback(u,p){const d=!!p;m.success(`${d?"开启":"关闭"} ${t}`),this.props[O].set(e,d);},afterAddToUListCallBack:(...u)=>{}};return Reflect.set(l.attributes,W,e),Reflect.set(l.attributes,G,n),oe.initComponentsStorageApi("switch",l,{get(u,p){return x.getValue(u,p)},set(u,p){x.setValue(u,p);}}),l},Oe=function(t,e,n,i,o,r="",s,c){const a={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:r,disabled:s,getValue(){const u=this.props[O].get(e,n);return Array.isArray(u)?u.join(`
`):u},callback(l,u){this.props[O].set(e,u);}};return Reflect.set(a.attributes,W,e),Reflect.set(a.attributes,G,n),oe.initComponentsStorageApi("switch",a,{get(l,u){return x.getValue(l,u)},set(l,u){x.setValue(l,u);}}),a},oe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new K.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let i;this.hasStorageApi(t)?i=this.getStorageApi(t):i=n,this.setComponentsStorageApiProperty(e,i);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,O,e);}},ct=function(t,e,n,i,o,r="",s="text",c,a){const l={text:t,type:"input",inputType:s,attributes:{},props:{},description:i,placeholder:r,afterAddToUListCallBack:c,getValue(){return this.props[O].get(e,n)},callback(u,p){u.target.validity.valid,this.props[O].set(e,p);}};return Reflect.set(l.attributes,W,e),Reflect.set(l.attributes,G,n),oe.initComponentsStorageApi("input",l,{get(u,p){return x.getValue(u,p)},set(u,p){x.setValue(u,p);}}),l};class ut{option;constructor(e){this.option=e;}getAllRule(){return te(this.option.STORAGE_API_KEY,[])}setAllRule(e){se(this.option.STORAGE_API_KEY,e);}clearAllRule(){this.setAllRule([]);}getRule(e){const n=this.getAllRule(),i=n.findIndex(o=>o.uuid===e);if(i!==-1)return n[i]}setRule(e){const n=this.getAllRule(),i=n.findIndex(r=>r.uuid===e.uuid);let o=false;return i!==-1&&(n[i]=e,this.setAllRule(n),o=true),o}addRule(e){const n=this.getAllRule(),i=n.findIndex(r=>r.uuid===e.uuid);let o=false;return i!==-1||(n.push(e),this.setAllRule(n),o=true),o}updateRule(e){const n=this.getAllRule(),i=n.findIndex(o=>o.uuid===e.uuid);i!==-1?n[i]=e:n.push(e),this.setAllRule(n);}deleteRule(e){const n=this.getAllRule(),i=typeof e=="string"?e:e.uuid,o=n.findIndex(r=>r.uuid===i);return o!==-1?(n.splice(o,1),this.setAllRule(n),true):false}importRules(e){const n=F.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(a,l){a.close();}}},mask:{enable:true},drag:true,width:H.info.width,height:H.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),i=n.$shadowRoot.querySelector(".btn-control[data-mode='local']"),o=n.$shadowRoot.querySelector(".btn-control[data-mode='network']"),r=n.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),s=async a=>{let l=this.getAllRule();const u=[],p=[];let d=false;for(let g=0;g<a.length;g++){const w=a[g],_=l.findIndex(V=>V.uuid===w.uuid);_!==-1?p.push({index:_,data:w}):u.push(w);}if(p.length&&await new Promise(w=>{F.alert({title:{text:"覆盖规则",position:"center"},content:{text:`存在相同的uuid的规则 ${p.length}条，是否进行覆盖？`,html:true},btn:{close:{callback(_,V){_.close(),w(false);}},ok:{text:"覆盖",callback(_,V){_.close(),w(true);}}},width:H.info.width,height:H.info.height,mask:{enable:true},drag:true});})){for(const w of p)l[w.index]=w.data;d=true;}u.length&&(l=l.concat(u)),this.setAllRule(l);const h=`共 ${a.length} 条规则，新增 ${u.length} 条，覆盖 ${d?p.length:0} 条`;v.success(h),e?.();},c=a=>new Promise(async l=>{const u=y.toJSON(a);if(!Array.isArray(u)){m.error(u),v.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),l(false);return}if(!u.length){v.error("导入失败，解析出的数据为空",{consoleLogContent:true}),l(false);return}await s(u),l(true);});f.on(i,"click",a=>{f.preventEvent(a),n.close();const l=f.createElement("input",{type:"file",accept:".json"});f.on(l,["propertychange","input"],u=>{if(!l.files?.length)return;const p=l.files[0],d=new FileReader;d.onload=()=>{c(d.result);},d.readAsText(p,"UTF-8");}),l.click();}),f.on(o,"click",a=>{f.preventEvent(a),n.close();const l=F.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,h){d.close();}},ok:{text:"导入",callback:async(d,h)=>{const g=d.text;if(y.isNull(g)){v.error("请填入完整的url");return}const w=v.loading("正在获取配置..."),_=await Y.get(g,{allowInterceptConfig:false});if(w.close(),!_.status){m.error(_),v.error("获取配置失败",{consoleLogContent:true});return}await c(_.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:H.info.width,height:"auto"}),u=l.$shadowRoot.querySelector("input"),p=l.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(u,["input","propertychange"],d=>{f.val(u)===""?f.attr(p,"disabled","true"):f.removeAttr(p,"disabled");}),f.onKeyboard(u,"keydown",(d,h,g)=>{d==="Enter"&&g.length===0&&f.val(u)!==""&&f.emit(p,"click");}),f.emit(u,"input");}),f.on(r,"click",async a=>{f.preventEvent(a),n.close();const l=await y.getClipboardInfo();if(l.error!=null){v.error(l.error.toString());return}if(l.content.trim()===""){v.warning("获取到的剪贴板内容为空");return}await c(l.content);});}exportRules(e="rule.json"){const n=this.getAllRule(),i=new Blob([JSON.stringify(n,null,4)]),o=globalThis.URL.createObjectURL(i),r=document.createElement("a");r.href=o,r.download=e,r.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(o);},1500);}}class dt{option;constructor(e){this.option=e;}async showView(){const e=F.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:y.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${F.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");const i=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());f.append(i,o);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return e}}class pt{option;constructor(e){this.option=e;}async showView(e){const n=F.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      ${F.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async c=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(c){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:c=>{let a=F.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async l=>{if(m.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){v.error("清理失败");return}else v.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),a.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:i,$externalSelect:o,$ruleValueSelect:r,$searchInput:s}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let c=null,a=null;Array.isArray(this.option.bottomControls?.filter?.option)&&f.append(o,this.option.bottomControls?.filter?.option.map(p=>{const d=f.createElement("option",{innerText:p.name});return Reflect.set(d,"data-value",p),d})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&f.append(r,this.option.bottomControls?.filter?.inputOption.map(p=>{const d=f.createElement("option",{innerText:p.name});return Reflect.set(d,"data-value",p),d})),f.on(o,"change",async p=>{const d=o[o.selectedIndex],h=Reflect.get(d,"data-value");typeof h?.selectedCallBack=="function"&&h.selectedCallBack(h),c=h,await u(false);}),f.on(r,"change",async p=>{const d=r[r.selectedIndex],h=Reflect.get(d,"data-value");typeof h?.selectedCallBack=="function"&&h.selectedCallBack(h),a=h,await u(false);}),f.onInput(s,y.debounce(async()=>{await u(false);}));const l=()=>{const p=o[o.selectedIndex];c=Reflect.get(p,"data-value");const d=r[r.selectedIndex];a=Reflect.get(d,"data-value");},u=async p=>{this.clearContent(n.$shadowRoot),p&&l();const d=await this.option.data(),h=[],g=f.val(s);for(let w=0;w<d.length;w++){const _=d[w];if(typeof e=="function"){const V=await e(_);if(typeof V=="boolean"&&!V)continue}if(c){const V=await c?.filterCallBack?.(_);if(typeof V=="boolean"&&!V)continue}if(a){let V=true;if(g===""?V=true:V=false,V||(V=await a?.filterCallBack?.(_,g)),!V)continue}h.push(_);}await this.appendRuleItemElement(n.$shadowRoot,h);};if(typeof e=="object"&&e!=null){let p;typeof e.external=="number"?p=e.external:p=Array.from(o.options).findIndex(h=>Reflect.get(h,"data-value").value===e.external),p!==-1&&(o.selectedIndex=p);let d;typeof e.rule=="number"?d=e.rule:d=Array.from(r.options).findIndex(h=>Reflect.get(h,"data-value").value===e.rule),d!==-1&&(r.selectedIndex=d);}await u(true);}else f.hide(i,false);}showEditView(e,n,i,o,r,s){let c=async l=>{if(l){if(typeof s=="function"){let u=await this.option.getData(n);s(u);}}else if(e||await this.option.deleteData(n),typeof r=="function"){let u=await this.option.getData(n);r(u);}};new dt({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:c,getView:async l=>await this.option.itemControls.edit.getView(l,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(l,u)=>{l.close(),await c(false);}},close:{callback:async(l,u)=>{l.close(),await c(false);}}},onsubmit:async(l,u)=>{let p=await this.option.itemControls.edit.onsubmit(l,e,u);return p.success?e?(v.success("修改成功"),i&&await this.updateRuleItemElement(p.data,o,i)):i&&await this.appendRuleItemElement(i,p.data):e&&m.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){const n=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),o=e.querySelector(".rule-view-search-container"),r=o.querySelector(".pops-panel-select .select-rule-status"),s=o.querySelector(".pops-panel-select .select-rule-value"),c=o.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:i,$searchContainer:o,$externalSelect:r,$ruleValueSelect:s,$searchInput:c}}parseRuleItemElement(e){const n=e.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),s=e.querySelector(".rule-controls-edit"),c=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:o,$enableSwitchCore:r,$edit:s,$delete:c,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){const i=await this.option.getDataItemName(e),o=f.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${i}</div>
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
					${F.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${F.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);const r="pops-panel-switch-is-checked",{$enable:s,$enableSwitch:c,$enableSwitchCore:a,$enableSwitchInput:l,$delete:u,$edit:p}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(f.on(a,"click",async d=>{let h=false;c.classList.contains(r)?(c.classList.remove(r),h=false):(c.classList.add(r),h=true),l.checked=h,await this.option.itemControls.enable.callback(e,h);}),await this.option.itemControls.enable.getEnable(e)&&c.classList.add(r)):s.remove(),this.option.itemControls.edit.enable?f.on(p,"click",d=>{f.preventEvent(d),this.showEditView(true,e,n,o,h=>{e=null,e=h;});}):p.remove(),this.option.itemControls.delete.enable?f.on(u,"click",d=>{f.preventEvent(d);const h=F.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async g=>{m.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(v.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),h.close()):v.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),o}async appendRuleItemElement(e,n){const{$container:i}=this.parseViewElement(e),o=[],r=Array.isArray(n)?n:[n];for(let s=0;s<r.length;s++){const c=r[s],a=await this.createRuleItemElement(c,e);o.push(a);}return f.append(i,o),await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e),i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,i){const o=await this.createRuleItemElement(e,i);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);f.html(n,"");}setDeleteBtnText(e,n,i=false){const{$deleteBtn:o}=this.parseViewElement(e);i?f.html(o,n):f.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}class ft{parseInfoDictData(e,n=false){const i=e?.note_card;let o=e.id,r=i.display_title,s=!!i?.interact_info?.liked,c=0,a=e?.note_card?.interact_info?.liked_count;typeof a=="string"&&(c=parseInt(a),isNaN(c)&&(c=0));let l=i?.user?.nick_name||i?.user?.nickname,u=i?.user?.user_id,p=i?.type==="video",d=i?.video?.capa?.duration||0;return {articleId:o,display_title:r,isLike:s,liked_count:c,nick_name:l,user_id:u,isVideo:p,videoDuration:d}}checkFilterWithRule(e){if(e.infoValue==null||e.ruleValue==null)return  false;if(typeof e.infoValue=="string"){if(e.infoValue.match(e.ruleValue))return  true}else if(typeof e.infoValue=="object"){if(Array.isArray(e.infoValue)&&e.infoValue.find(i=>typeof i=="string"&&e.ruleValue!=null?!!i.match(e.ruleValue):false))return  true}else if(typeof e.infoValue=="number"){if(typeof e.ruleValue=="string"){let n=e.ruleValue.trim(),i=n.match(/(\d+)/);if(!i)return m.warn("过滤器-解析比较大小的数字失败: ",e),false;let o=Number(i[1]);if(n.startsWith(">")){if(n.startsWith(">=")){if(e.infoValue>=o)return  true}else if(e.infoValue>o)return  true}else if(n.startsWith("<")){if(n.startsWith("<=")){if(e.infoValue<=o)return  true}else if(e.infoValue<o)return  true}else if(n.startsWith("=")){if(e.infoValue===o)return  true}else return m.warn("视频过滤器-未经允许的比较符号: ",e),false}}else if(typeof e.infoValue=="boolean"&&typeof e.ruleValue=="string"){let n=e.ruleValue.trim();return e.infoValue.toString()===n}return  false}checkInfoIsFilter(e,n){let i=this.parseInfoDictData(n),o=false,r=null;e:for(let s=0;s<e.length;s++){const c=e[s],a=Array.isArray(c.data.ruleName)?c.data.ruleName:[c.data.ruleName];for(let l=0;l<a.length;l++){const u=a[l];if(!Reflect.has(i,u))continue;let p=u,d=i[p],h={infoKey:p,infoValue:d,ruleKey:c.data.ruleName,ruleValue:c.data.ruleValue};if(o=this.checkFilterWithRule(h),o)if(Array.isArray(c.dynamicData)&&c.dynamicData.length){let g=[];for(let w=0;w<c.dynamicData.length;w++){const _=c.dynamicData[w];let V=_.ruleName,D=i[V],S={infoKey:V,infoValue:D,ruleKey:_.ruleName,ruleValue:_.ruleValue};g.push(S);let R=this.checkFilterWithRule(S);if(o=o&&R,!o)break}o&&m.success([`视频过滤器-多组 ==> ${c.name}`,i,h,g,n,c]);}else m.success([`视频过滤器 ==> ${c.name}`,i,h,n,c]);if(o){r=c;break e}}}return {isFilter:o,matchedFilterOption:r,transformInfo:i,info:n}}removeArticle(...e){if(e.length===1){let n=e[0];n!=null&&n instanceof Element&&n.remove();}else if(e.length===2){let n=e[0],i=e[1];if(typeof i=="number"){let o=n[i];o!=null&&o instanceof Element&&o.remove(),n.splice(i,1);}}}}const pe={$key:{ENABLE_KEY:"shieldVideo-exec-network-enable"},$data:{isFilterAwemeInfoList:new K.Dictionary,articleInfoMap:new K.Dictionary,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage==null&&(this.__videoFilterRuleStorage=new ut({STORAGE_API_KEY:"xhs-article-filter-rule"})),this.__videoFilterRuleStorage},get isReverse(){return x.getValue("xhs-article-filter-only-show-filtered-video")}},init(){this.execFilter();},execFilter(){x.execMenuOnce(this.$key.ENABLE_KEY,async()=>{m.info("执行笔记过滤器");let t=new ft,e=o=>{if(this.$data.isReverse&&(o.isFilter=!o.isFilter,typeof o.transformInfo.articleId=="string"&&o.matchedFilterOption)){let r=this.$data.isFilterAwemeInfoList.get(o.transformInfo.articleId)||[];r.push(o.matchedFilterOption),this.$data.isFilterAwemeInfoList.set(o.transformInfo.articleId,r);}typeof o.transformInfo.articleId=="string"&&this.$data.articleInfoMap.set(o.transformInfo.articleId,{articleInfo:o.info,transformArticleInfo:o.transformInfo});},n=o=>{if(!x.getValue(this.$key.ENABLE_KEY))return [];let r=this.$data.videoFilterRuleStorage.getAllRule();if(!r.length)return [];let s=Array.isArray(o)?o:[o];return r.filter(a=>a.enable&&(a.data.scope.includes("all")||Array.from(s).findIndex(l=>a.data.scope.includes(l))!==-1))},i=(o,r)=>{r.response=s=>{let c=n(o);if(!c.length)return;let a=y.toJSON(s.responseText),l=a?.data?.items;if(Array.isArray(l)){for(let u=0;u<l.length;u++){let p=l[u]||{},d=t.checkInfoIsFilter(c,p);e(d),d.isFilter&&t.removeArticle(l,u--);}s.responseText=JSON.stringify(a);}};};st.ajaxHooker.hook(o=>{let r=P.fixUrl(o.url);new URL(r).pathname.startsWith("/api/sns/web/v1/homefeed")&&i("xhr-explore",o);});});},getTemplateData(){return {uuid:y.generateUUID(),enable:true,name:"",data:{scope:[],ruleName:"display_title",ruleValue:"",remarks:""},dynamicData:[]}},showView(){this.getRuleViewInstance().showView();},getRuleViewInstance(){const t=this;let e=F.config.PanelHandlerComponents();function n(o){return {get(r,s){return o[r]??s},set(r,s){o[r]=s;}}}return new pt({title:"笔记过滤器",data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.$data.videoFilterRuleStorage.setRule(o),deleteData:o=>this.$data.videoFilterRuleStorage.deleteRule(o),getData:o=>this.$data.videoFilterRuleStorage.getAllRule().find(c=>c.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,r)=>{o.enable=r,this.$data.videoFilterRuleStorage.setRule(o);}},edit:{enable:true,getView:(o,r)=>{let s=document.createDocumentFragment();r||(o=this.getTemplateData());let c=I("启用","enable",true);Reflect.set(c.props,O,n(o));let a=e.createSectionContainerItem_switch(c).$el,l=ct("规则名称","name","","",void 0,"必填");Reflect.set(l.props,O,n(o));let u=e.createSectionContainerItem_input(l).$el,p=De("作用域","scope",[],[{text:"所有",value:"all"},{text:"发现",value:"xhr-explore"}].map(b=>({...b,value:b.value})),void 0,"选择需要在xxx上生效的作用域");Reflect.set(p.props,O,n(o.data));let d=e.createSectionContainerItem_select_multiple(p).$el,h=["display_title","isLike","liked_count","nick_name","user_id","isVideo","videoDuration"],g=b=>{let E=Array.isArray(b.ruleName)?b.ruleName:[b.ruleName],M=De("属性名","ruleName",E,h.map(B=>({text:B,value:B})),void 0,"选择需要的属性名 ");Reflect.set(M.props,O,n(b));let A=e.createSectionContainerItem_select_multiple(M).$el,T=Oe("属性值","ruleValue","","如果是字符串，可正则，注意转义");Reflect.set(T.props,O,n(b));let $=e.createSectionContainerItem_textarea(T).$el,L=Oe("备注","remarks","","");Reflect.set(L.props,O,n(b));let N=e.createSectionContainerItem_textarea(L).$el;return {$ruleName:A,$ruleValue:$,$remarks:N}},w=f.createElement("div",{className:"rule-form-ulist-dynamic",innerHTML:`
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" data-type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),_=w.querySelector(".rule-form-ulist-dynamic__inner"),V=w.querySelector(".pops-panel-button"),D=(b={ruleName:[],ruleValue:"",remarks:""})=>{let E=f.createElement("div",{className:"rule-form-ulist-dynamic__inner-container",innerHTML:`
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" data-type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms">

									</ul>
								`}),M=E.querySelector(".dynamic-control-delete");f.on(M,"click",N=>{if(f.preventEvent(N),E.remove(),Array.isArray(o.dynamicData)){let B=o.dynamicData.findIndex(z=>z==b);B!==-1&&o.dynamicData.splice(B,1);}});let A=E.querySelector(".dynamic-forms"),{$ruleName:T,$ruleValue:$,$remarks:L}=g(b);A.appendChild(T),A.appendChild($),A.appendChild(L),_.appendChild(E);};if(f.on(V,"click",b=>{f.preventEvent(b),D();}),Array.isArray(o.dynamicData))for(let b=0;b<o.dynamicData.length;b++){const E=o.dynamicData[b];D(E);}let{$ruleName:S,$ruleValue:R,$remarks:k}=g(o.data);return s.append(a,u,d,S,R,k,w),s},onsubmit:(o,r,s)=>{let c=o.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return r&&(a.uuid=s.uuid),c.forEach(l=>{let u=Reflect.get(l,e.$data.nodeStoreConfigKey);if(!u)return;let p=Reflect.get(u,"attributes");if(!p)return;let d=Reflect.get(l,O),h=Reflect.get(p,W),g=Reflect.get(p,G),w=d.get(h,g);Reflect.has(a,h)?Reflect.set(a,h,w):Reflect.has(a.data,h)?Reflect.set(a.data,h,w):m.error(`${h}不在数据中`);}),o.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(l=>{let u={};l.querySelectorAll(".dynamic-forms > li").forEach(p=>{let d=Reflect.get(p,e.$data.nodeStoreConfigKey);if(!d)return;let h=Reflect.get(d,"attributes");if(!h)return;let g=Reflect.get(p,O),w=Reflect.get(h,W),_=Reflect.get(h,G),V=g.get(w,_);Reflect.set(u,w,V);}),a.dynamicData.push(u);}),a.name.trim()===""?(v.error("规则名称不能为空"),{success:false,data:a}):a.data.scope.length===0?(v.error("请选择作用域"),{success:false,data:a}):a.data.ruleName.length===0?(v.error("请选择属性名"),{success:false,data:a}):a.data.ruleValue.trim()===""?(v.error("属性值不能为空"),{success:false,data:a}):r?{success:t.$data.videoFilterRuleStorage.setRule(a),data:a}:{success:t.$data.videoFilterRuleStorage.addRule(a),data:a}},style:`
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
                    `,width:()=>window.innerWidth>700?"700px":"88vw"},delete:{enable:true,deleteCallBack:o=>t.$data.videoFilterRuleStorage.deleteRule(o)}},bottomControls:{filter:{enable:true,option:[{name:"启用",value:"enable",filterCallBack(o){return o.enable}},{name:"未启用",value:"notEnable",filterCallBack(o){return !o.enable}}],inputOption:[{name:"规则名称",value:"name",filterCallBack(o,r){return !!o.name.match(r)}},{name:"备注",value:"remarks",filterCallBack(o,r){let s=!!o.data.remarks.match(r);return s||(s=!!o.dynamicData?.find(c=>!!c.remarks.match(r))),s}}]},clear:{enable:true,callback:()=>{t.$data.videoFilterRuleStorage.clearAllRule();}}}})}},ht="",mt={init(){x.execMenuOnce("pc-xhs-shieldAd",()=>j(ht)),x.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),x.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),f.onReady(()=>{x.execMenuOnce("pc-xhs-shield-login-dialog",()=>this.blockLoginContainer());});},blockLoginContainer(){m.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");const t=y.mutationObserver(document.body,{config:{subtree:true,childList:true},immediate:true,callback:()=>{const e=le(".login-container .icon-btn-wrapper");e&&(e.click(),m.success("登录弹窗出现，自动点击关闭按钮"));}});return [P.addBlockCSS(".login-container"),()=>{t?.disconnect();}]},blockSelectTextVisibleSearchPosition(){return m.info("屏蔽选择文字弹出的搜索提示"),P.addBlockCSS(".search-position")},blockTopToolbar(){return m.info("【屏蔽】顶部工具栏"),[P.addBlockCSS("#headerContainer",".header-container"),j(`
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
			`)]}},ge={init(){pe.init(),x.execMenuOnce("pc-xhs-hook-vue",()=>{_e.hookVue();}),x.execMenuOnce("pc-xhs-allowCopy",()=>ge.allowPCCopy()),x.execMenuOnce("pc-xhs-open-blank-article",()=>ge.openBlankArticle()),mt.init(),x.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>Te.transformPublishTime()),we.isArticle()&&(m.info("Router: 笔记页面"),Te.init());},allowPCCopy(){m.success("允许复制文字");const t=n=>{f.preventEvent(n);let i=C.getSelection();return i?y.copy(i.toString()):m.error("未选中任何内容"),false},e=f.on(C,"copy",t,{capture:true});return [()=>{e.off();}]},openBlankArticle(){m.success("新标签页打开文章");const t=(n,i)=>{if(!x.getValue("pc-xhs-open-blank-article"))return;f.preventEvent(n);let r=i.querySelector("a.cover[href]")?.href;if(r){m.info("跳转文章: "+r);const s=new URL(r);s.pathname=s.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i,"/discovery/item/"),r=s.toString(),window.open(r,"_blank");}else v.error("未找到文章链接");},e=f.on(document,"click",".feeds-container .note-item",t,{capture:true});return [()=>{e.off();}]}},gt={id:"little-red-book-panel-config-common",title:"通用",views:[{text:"",type:"container",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[me("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{m.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),me("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),I("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[I("【屏蔽】广告","little-red-book-shieldAd",true,void 0,"如：App内打开"),I("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",true,void 0,"建议开启"),I("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",true,void 0,"建议开启")]}]}]}]},yt={id:"little-red-book-panel-config-home",title:"主页",views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[I("劫持点击事件","little-red-book-repariClick",true,void 0,"可阻止点击跳转至下载页面")]}]}]}]},bt={id:"little-red-book-panel-config-note",title:"笔记",views:[{text:"",type:"container",views:[{text:"视频笔记",type:"deepMenu",views:[{text:"",type:"container",views:[I("优化视频描述","little-red-book-optimizeVideoNoteDesc",true,void 0,"让视频描述可以滚动显示更多"),I("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",true,void 0,"建议开启"),I("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",true,void 0,"建议开启")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[I("优化评论浏览","little-red-book-optimizeCommentBrowsing",true,void 0,"目前仅可加载部分评论"),I("优化图片浏览","little-red-book-optimizeImageBrowsing",true,void 0,"更方便的浏览图片"),I("允许复制","little-red-book-allowCopy",true,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[I("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",true,void 0,"如：打开App弹窗、登录弹窗"),I("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",true,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},xt={id:"xhs-panel-config-article",title:"笔记",views:[{type:"container",text:"功能",views:[I("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",false,void 0,"注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>")]},{text:"笔记宽屏",type:"container",views:[I("启用","pc-xhs-article-fullWidth",false,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),Ne("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(t,e)=>{let n=le("#noteContainer");if(!n){m.error("未找到笔记容器");return}n.style.width=`${e}vw`;},t=>`${t}%，默认：90%`,"调整笔记页面占据的页面范围"),Ne("图片尺寸","pc-xhs-article-fullWidth-imageSize",80,30,100,(t,e)=>{let n=le("#noteContainer");if(!n){m.error("未找到笔记容器");return}let i=n.querySelector(".media-container");if(!i){m.error("未找到媒体容器");return}window.innerWidth>=960?(i.style.width=`${e}%`,i.style.height=""):(i.style.height=`${e}%`,i.style.width="");},t=>`${t}%，默认：80%`,"横向布局时调整宽度，竖向布局时调整高度")]}]},vt={id:"xhs-panel-config-common",title:"通用",views:[{type:"container",text:"",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[me("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{m.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),me("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),I("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[I("允许复制","pc-xhs-allowCopy",true,void 0,"可以选择文字并复制"),I("新标签页打开文章","pc-xhs-open-blank-article",false,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",views:[{text:"",type:"container",views:[I("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",false,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),I("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",false,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[I("【屏蔽】广告","pc-xhs-shieldAd",true,void 0,"屏蔽元素"),I("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",true,void 0,"屏蔽会自动弹出的登录弹窗"),I("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",false,void 0,"屏蔽元素"),I("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",false,void 0,"屏蔽元素")]}]},{type:"deepMenu",text:"笔记过滤器",views:[{text:'<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',type:"container",views:[I("启用","shieldVideo-exec-network-enable",true,void 0,"开启后以下功能才会生效"),I("仅显示被过滤的笔记","xhs-article-filter-only-show-filtered-video",false,void 0,"只会显示过滤规则命中的笔记"),ve("笔记过滤规则","可过滤笔记","自定义",void 0,false,false,"primary",()=>{pe.showView();})]},{type:"container",text:"",views:[ve("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{pe.$data.videoFilterRuleStorage.importRules();}),ve("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{pe.$data.videoFilterRuleStorage.exportRules(Pe+"-视频过滤规则.json");})]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[I("劫持Vue","pc-xhs-hook-vue",true,void 0,"恢复__vue__属性")]}]}]}]};j(`
.qmsg svg.animate-turn {
    fill: none;
}
`);ne.addContentConfig([vt,xt]);ne.addContentConfig([gt,yt,bt]);const Ue=be.getMenuOption();Ue.text="⚙ PC-设置";be.updateMenuOption(Ue);be.addMenuOption({key:"show_mobile_setting",text:"⚙ 移动端-设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{x.showPanel(ne.getConfig(1),`${Pe}-移动端设置`);}});x.init();let qe=y.isPhone(),re="change_env_set",Q=te(re);Fe.add({key:re,text:`⚙ 自动: ${qe?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return Q==null?t:t+` 手动: ${Q==1?"移动端":Q==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){v.error("输入的不是规范的数字");return}if(!t.includes(n)){v.error("输入的值必须是0或1或2");return}n==0?ae(re):se(re,n);}});Q!=null?(m.info(`手动判定为${Q===1?"移动端":"PC端"}`),Q==1?Ce.init():Q==2?ge.init():(v.error("意外，手动判定的值不在范围内"),ae(re))):qe?(m.info("自动判定为移动端"),Ce.init()):(m.info("自动判定为PC端"),ge.init());

})(Qmsg, DOMUtils, pops, Utils, Viewer);