// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.1.24
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.10/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.2.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      Viewer
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

(function (v, q, ye, K, je) {
  'use strict';

  var ae=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Re=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,te=typeof GM_getValue<"u"?GM_getValue:void 0,ie=typeof GM_info<"u"?GM_info:void 0,ce=typeof GM_listValues<"u"?GM_listValues:void 0,We=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,se=typeof GM_setValue<"u"?GM_setValue:void 0,Ae=typeof GM_setValues<"u"?GM_setValues:void 0,Ge=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ke=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,C=typeof unsafeWindow<"u"?unsafeWindow:void 0,ze=window;const Je={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},ee={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},B={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&q.waitNodeList(e).then(n=>{n.forEach(i=>i.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),q.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),j(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof Re=="function"?Re(t.keyName):null;return typeof e=="string"&&e?j(e):B.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{q.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(i){navigator.clipboard.readText().then(o=>{i(o);}).catch(o=>{h.error("读取剪贴板内容失败👉",o),i("");});}function e(i){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(i);}).catch(o=>{h.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?e(i):window.addEventListener("focus",()=>{e(i);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let i,o=n-e,r=e,l=async u=>{const a=await t(u);if(typeof a=="boolean"&&a||u){y.workerClearTimeout(i);return}if(r+=e,r>o){l(true);return}i=y.workerSetTimeout(()=>{l(false);},e);};l(false);},findParentNode(t,e,n){if(n){let i=q.closest(t,n);if(i)return i.querySelector(e)}else return q.matches(t,e)?t:q.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(i,o)=>o===void 0?e:o,2).replace(new RegExp(`"${e}"`,"g"),"undefined")}},y=K.noConflict(),f=q.noConflict(),N=ye,h=new y.Log(ie,C.console||ze.console),fe=ie?.script?.name||void 0,Xe=ye.config.Utils.AnyTouch(),Ze=false;h.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});v.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?h.warn(n):e==="error"?h.error(n):h.info(n),true},get position(){return b.getValue(ee.qmsg_config_position.key,ee.qmsg_config_position.defaultValue)},get maxNums(){return b.getValue(ee.qmsg_config_maxnums.key,ee.qmsg_config_maxnums.defaultValue)},get showReverse(){return b.getValue(ee.qmsg_config_showreverse.key,ee.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=K.getMaxZIndex(),e=ye.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(t,e)+100}});N.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=K.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=ye.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Oe=new y.GM_Menu({GM_getValue:te,GM_setValue:se,GM_registerMenuCommand:We,GM_unregisterMenuCommand:Ge}),Y=new y.Httpx({xmlHttpRequest:Ke,logDetails:Ze});Y.interceptors.request.use(t=>t);Y.interceptors.response.use(void 0,t=>(h.error("拦截器-请求错误",t),t.type==="onabort"?v.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?v.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?v.error("请求超时",{consoleLogContent:true}):v.error("其它错误",{consoleLogContent:true}),t));C.Object.defineProperty,C.Function.prototype.apply,C.Function.prototype.call,C.Element.prototype.appendChild,C.setTimeout.bind(C),C.clearTimeout.bind(C),C.setInterval.bind(C),C.clearInterval.bind(C);const j=f.addStyle.bind(f),le=q.selector.bind(q),Qe=q.selectorAll.bind(q);new y.GM_Cookie;const he="GM_Panel",Fe="data-init",W="data-key",G="data-default-value",Ye="data-init-more-value",et="data-plugin-search-config",D="data-storage-api",Z={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},P={setting:{get width(){return Z.width<550?"88vw":Z.width<700?"550px":"700px"},get height(){return Z.height<450?"70vh":Z.height<550?"450px":"550px"}},settingMiddle:{get width(){return Z.width<350?"88vw":"350px"}},info:{get width(){return Z.width<350?"88vw":"350px"},get height(){return Z.height<250?"88vh":"250px"}}},ne={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new y.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(r,l)=>{typeof l!="string"&&(l=B.toStr(l));const u=new Blob([l]),a=globalThis.URL.createObjectURL(u);f.createElement("a",{href:a,download:r}).click(),y.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(a);},500);},i=()=>{const r=p=>{const d=N.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(T,$){T.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),m=d.$shadowRoot.querySelector(".btn-control[data-mode='local']"),g=d.$shadowRoot.querySelector(".btn-control[data-mode='network']"),w=d.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),k=async T=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ce=="function"?typeof ae=="function"?(ce().forEach(_=>{ae(_);}),v.success("已清空脚本存储的配置")):v.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):v.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof Ae=="function"?Ae(T):Object.keys(T).forEach(_=>{const x=T[_];se(_,x);}),v.success("配置导入完毕");},V=T=>new Promise(async $=>{const A=y.toJSON(T);Object.keys(A).length===0?v.warning("解析为空配置，不导入"):await k(A),$(true);});f.on(m,"click",T=>{f.preventEvent(T),d.close();const $=f.createElement("input",{type:"file",accept:".json"});f.on($,["propertychange","input"],A=>{if(!$.files?.length)return;const _=$.files[0],x=new FileReader;x.onload=()=>{V(x.result);},x.readAsText(_,"UTF-8");}),$.click();}),f.on(g,"click",T=>{f.preventEvent(T),d.close();const $=N.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(x,I){x.close();}},ok:{text:"导入",callback:async(x,I)=>{const L=x.text;if(y.isNull(L)){v.error("请填入完整的url");return}const S=v.loading("正在获取配置..."),E=await Y.get(L,{allowInterceptConfig:false});if(S.close(),!E.status){h.error(E),v.error("获取配置失败",{consoleLogContent:true});return}await V(E.data.responseText)&&x.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:P.info.width,height:"auto"}),A=$.$shadowRoot.querySelector("input"),_=$.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(A,["input","propertychange"],x=>{f.val(A)===""?f.attr(_,"disabled","true"):f.removeAttr(_,"disabled");}),f.onKeyboard(A,"keydown",(x,I,L)=>{x==="Enter"&&L.length===0&&f.val(A)!==""&&f.emit(_,"click");}),f.emit(A,"input");}),f.on(w,"click",async T=>{f.preventEvent(T),d.close();let $=await B.getClipboardText();if($.trim()===""){v.warning("获取到的剪贴板内容为空");return}await V($);});},l=(p=`${fe}_panel-setting-${y.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,d)=>{const m=N.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(k,V){k.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),g=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),w=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");f.on(g,"click",k=>{f.preventEvent(k);try{n(p,d),m.close();}catch(V){v.error(V.toString(),{consoleLogContent:true});}}),f.on(w,"click",async k=>{await y.copy(d)?(v.success("复制成功"),m.close()):v.error("复制失败");});},a=N.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(p,d){r();}},cancel:{enable:true,text:"导出",callback(p,d){l(void 0,c);}}},width:Z.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),s={};if(typeof ce=="function")ce().forEach(d=>{const m=te(d);Reflect.set(s,d,m);});else {v.warning("不支持函数GM_listValues，仅导出菜单配置");const p=te(he);Reflect.set(s,he,p);}const c=B.toStr(s);a.value=c;},o=()=>{let r=ie?.script?.supportURL||ie?.script?.namespace;typeof r=="string"&&y.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:`版本：${ie?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new Xe(r.$asideLiElement).on("tap",function(u){clearTimeout(e),e=void 0,t?(t=false,i()):(e=setTimeout(()=>{t=false,o();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},be={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{b.showPanel(ne.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){b.isTopWindow()&&Oe.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(i=>i.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class tt{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new K.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=te(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){se(this.storageKey,e);}set(e,n){const i=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.emitValueChangeListener(e,n,i);}get(e,n){const i=this.getLocalValue();return Reflect.get(i,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),i=this.getLocalValue();Reflect.deleteProperty(i,e),this.setLocalValue(i),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){ae(this.storageKey);}addValueChangeListener(e,n){const i=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:i,key:e,callback:n}),this.listenerData.set(e,o),i}removeValueChangeListener(e){let n=false;for(const[i,o]of this.listenerData.entries()){for(let r=0;r<o.length;r++){const l=o[r];(typeof e=="string"&&l.key===e||typeof e=="number"&&l.id===e)&&(o.splice(r,1),r--,n=true);}this.listenerData.set(i,o);}return n}async emitValueChangeListener(...e){const[n,i,o]=e;if(!this.listenerData.has(n))return;let r=this.listenerData.get(n);for(let l=0;l<r.length;l++){const u=r[l];if(typeof u.callback=="function"){let a=this.get(n),s,c;typeof o<"u"&&e.length>=2?c=o:c=a,typeof i<"u"&&e.length>2?s=i:s=a,await u.callback(n,s,c);}}}}const X=new tt(he),b={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new y.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new y.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new y.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new y.Dictionary),this.__onceExecData},get scriptName(){return fe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:he,attributeKeyName:W,attributeDefaultValueName:G},init(){this.initContentDefaultValue(),be.init();},isTopWindow(){return C.top===C.self},initContentDefaultValue(){const t=i=>{if(!i.attributes||i.type==="button"||i.type==="container"||i.type==="deepMenu")return;const o=i.attributes;let r=o[Fe];if(typeof r=="function"){let s=r();if(typeof s=="boolean"&&!s)return}let l=new Map,u=o[W];if(u!=null){const s=o[G];l.set(u,s);}let a=o[Ye];if(typeof a=="object"&&a&&Object.keys(a).forEach(s=>{const c=a[s];l.set(s,c);}),!l.size){h.warn("请先配置键",i);return}if(i.type==="switch"){let s=typeof i.disabled=="function"?i.disabled():i.disabled;typeof s=="boolean"&&s&&this.$data.contentConfigInitDisabledKeys.push(...l.keys());}for(const[s,c]of l.entries())this.setDefaultValue(s,c);},e=i=>{for(let o=0;o<i.length;o++){let r=i[o];t(r);let l=r.views;l&&Array.isArray(l)&&e(l);}},n=[...ne.getAllContentConfig()];for(let i=0;i<n.length;i++){let o=n[i];if(!o.views)continue;const r=o.views;r&&Array.isArray(r)&&e(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&h.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){X.set(t,e);},getValue(t,e){const n=X.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){X.delete(t);},hasKey(t){return X.has(t)},addValueChangeListener(t,e){return X.addValueChangeListener(t,e)},removeValueChangeListener(t){X.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){X.emitValueChangeListener(t,e,n);},async exec(t,e,n,i=true){const o=this;let r;typeof t=="string"||Array.isArray(t)?r=()=>t:r=t;let l=false;const u=r();let a=[];Array.isArray(u)?(l=true,a=u):a.push(u);const s=a.find(_=>!this.$data.contentConfigInitDefaultValue.has(_));if(s){h.warn(`${s} 键不存在`);return}const c=JSON.stringify(a);if(i&&this.$data.onceExecMenuData.has(c))return this.$data.onceExecMenuData.get(c);let p=[];const d=[];let m=[];const g=(_,x)=>{let I=[],L=[],S=[];if(Array.isArray(x))S=S.concat(x);else {const E=R=>{if(typeof R=="object"&&R!=null)if(R instanceof Element)S.push(R);else {const{$css:O,destory:F}=R;O!=null&&(Array.isArray(O)?S=S.concat(O):S.push(O)),typeof F=="function"&&S.push(F);}else S.push(R);};if(x!=null&&Array.isArray(x))for(const R of x)E(R);else E(x);}for(const E of S)if(E!=null){if(E instanceof Element){I.push(E);continue}if(typeof E=="function"){m.push(E);continue}}_?(p=p.concat(I),m=m.concat(L)):(k(),V());},w=_=>!!this.getValue(_),k=()=>{for(let _=0;_<p.length;_++)p[_]?.remove(),p.splice(_,1),_--;},V=()=>{for(let _=0;_<m.length;_++){const x=m[_];x(),m.splice(_,1),_--;}},T=()=>{let _=false;return typeof n=="function"?_=n(a):_=a.every(x=>w(x)),_},$=async _=>{if(T()){const I=a.map(S=>this.getValue(S)),L=await e({value:l?I:I[0],addStoreValue:(...S)=>g(true,S)});g(true,L);}else g(false,[]);};i&&a.forEach(_=>{const x=this.addValueChangeListener(_,(I,L,S)=>$());d.push(x);}),await $();const A={reload(){this.clearStoreStyleElements(),this.destory(),$();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>k(),destory(){return V()},removeValueChangeListener:()=>{d.forEach(_=>{this.removeValueChangeListener(_);});},clearOnceExecMenuData(){i&&o.$data.onceExecMenuData.delete(c);}};return this.$data.onceExecMenuData.set(c,A),A},async execMenu(t,e,n=false,i=false){return await this.exec(t,async o=>await e(o),o=>o.every(l=>{let u=!!this.getValue(l);return b.$data.contentConfigInitDisabledKeys.includes(l)&&(u=false,h.warn(`.execMenu${i?"Once":""} ${l} 被禁用`)),n&&(u=!u),u}),i)},async execMenuOnce(t,e,n=false,i=false){const o=await this.execMenu(t,e,n,true);if(i&&o){const r=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,r);}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),X.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${fe}-设置`,n=false,i=false){this.$data.$panel=null,this.$data.panelContent=[];const o=t.findIndex(l=>(typeof l.isBottom=="function"?l.isBottom():!!l.isBottom)&&l.id==="script-version")!==-1;!n&&!o&&t.push(...ne.getDefaultBottomContentConfig());const r=N.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(l,u)=>{l.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(l,u)=>{l(),this.$data.$panel=null;}},width:P.setting.width,height:P.setting.height,drag:true,only:true,style:`
        .pops-switch-shortcut-wrapper{
          margin-right: 5px;
          display: inline-flex;
        }
        .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
          cursor: pointer;
        }
        `,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=t,i||this.registerConfigSearch({$panel:r,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,i=async(d,m)=>{if(d==null)return;const g=await m(d);return g&&typeof g.isFind=="boolean"&&g.isFind?g.data:await i(g.data,m)},o=(d,m)=>{const g=new IntersectionObserver(w=>{w.forEach(k=>{k.isIntersecting&&(m?.(),g.disconnect());});},{root:null,threshold:1});g.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},r=d=>{const m="pops-flashing";f.onAnimationend(d,()=>{d.classList.remove(m);}),d.classList.add(m);},l=d=>{if(d.type==="dblclick"&&p)return;f.preventEvent(d),a=null;const m=N.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:P.settingMiddle.width,height:"auto",drag:true,style:`
					${N.config.cssText.panelCSS}

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
				`});m.$shadowRoot.querySelector(".search-wrapper");const g=m.$shadowRoot.querySelector(".search-config-text"),w=m.$shadowRoot.querySelector(".search-result-wrapper");g.focus();const k=()=>{f.empty(w);},V=$=>{const A=y.queryProperty($,I=>I?.next?{isFind:false,data:I.next}:{isFind:true,data:I}),_=f.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${A.matchedData?.path}</div>
							<div class="search-result-item-description">${A.matchedData?.description??""}</div>
						`}),x=N.config.PanelHandlerComponents();return f.on(_,"click",I=>{const S=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[$.index];if(!S){v.error(`左侧项下标${$.index}不存在`);return}S.scrollIntoView({behavior:"smooth",block:"center"}),S.click(),i($.next,async E=>{if(E?.next){const R=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(O=>{const F=Reflect.get(O,x.$data.nodeStoreConfigKey);return typeof F=="object"&&F!=null&&F.text===E.name}),2500);if(R)R.click();else return v.error("未找到对应的二级菜单"),{isFind:true,data:E};return {isFind:false,data:E.next}}else {const R=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(O=>Reflect.get(O,x.$data.nodeStoreConfigKey)===E.matchedData?.formConfig),2500);if(R){o(R);const O=R.closest(".pops-panel-forms-fold[data-fold-enable]");O&&(O.querySelector(".pops-panel-forms-fold-container").click(),await y.sleep(500)),o(R,()=>{r(R);});}else v.error("未找到对应的菜单项");return {isFind:true,data:E}}});}),_},T=$=>{const A=new RegExp($,"i"),_=[],x=(L,S)=>{for(let E=0;E<L.length;E++){const R=L[E],O=R.views;if(O&&Array.isArray(O)){const F=y.deepClone(S);if(R.type==="deepMenu"){const H=y.queryProperty(F,z=>z?.next?{isFind:false,data:z.next}:{isFind:true,data:z});H.next={name:R.text};}x(O,F);}else {let F,H;if(R.type==="own"){const U=Reflect.get(R.attributes||{},et);U&&(typeof U.text=="string"&&(F=U.text),typeof U.desc=="string"&&(H=U.desc));}else F=R.text,H=Reflect.get(R,"description");const z=[F,H],$e=z.findIndex(U=>{if(typeof U=="string")return U.match(A)});if($e!==-1){const U=y.deepClone(S),Se=y.queryProperty(U,J=>J?.next?{isFind:false,data:J.next}:{isFind:true,data:J});Se.next={name:F,matchedData:{path:"",formConfig:R,matchedText:z[$e],description:H}};const Ve=[];y.queryProperty(U,J=>{const xe=J?.name;return typeof xe=="string"&&xe.trim()!==""&&Ve.push(xe),J?.next?{isFind:false,data:J.next}:{isFind:true,data:J}});const qe=Ve.join(B.escapeHtml(" - "));Se.next.matchedData.path=qe,_.push(U);}}}};for(let L=0;L<n.length;L++){const S=n[L];if(!S.views||S.isBottom&&S.id==="script-version")continue;const E=S.views;if(E&&Array.isArray(E)){let R=S.title;typeof R=="function"&&(R=R()),x(E,{index:L,name:R});}}const I=document.createDocumentFragment();for(const L of _){let S=V(L);I.appendChild(S);}k(),w.append(I);};f.on(g,"input",y.debounce($=>{f.preventEvent($);let A=f.val(g).trim();if(A===""){k();return}T(A);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(d=>{f.on(d,"dblclick",l);});let a=null,s=false,c,p=false;f.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,m)=>{p=true,clearTimeout(c),c=void 0,s&&a===m?(s=false,a=null,l(d)):(c=setTimeout(()=>{s=false;},200),s=true,a=m);},{capture:true}),e.$shadowRoot.appendChild(f.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},Be=fe||"小红书优化",nt=je,we={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},Ee="https://edith.xiaohongshu.com",Ie={async getPageInfo(t,e="",n="",i="",o="jpg,webp"){const r="/api/sns/web/v2/comment/page",l={note_id:t,cursor:e,top_comment_id:i,image_formats:o,xsec_token:n},u=r+"?"+y.toSearchParamsStr(l);let a=await Y.get(`${Ee}${u}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":y.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!a.status)return;let s=y.toJSON(a.data.responseText);if(h.info(["获取页信息",s]),s.code===0||s.success)return s.data;if(s.code===-101)return;v.error(s.msg);},async getLzlPageInfo(t="",e="",n=10,i="",o="jpg,webp,avif",r=""){const l="/api/sns/web/v2/comment/sub/page";let u={note_id:t,root_comment_id:e,num:n,cursor:i,image_formats:o,top_comment_id:r};l+""+y.toSearchParamsStr(u);let a=`${Ee}${l}?${y.toSearchParamsStr(u)}`,s=await Y.get(a,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!s.status){s.data.status===406&&y.isNotNull(s.data.responseText)?y.toJSON(s.data.responseText).code==-1?v.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):v.error("获取楼中楼信息失败"):v.error("请求异常"),h.error(["获取楼中楼信息失败",s]);return}let c=y.toJSON(s.data.responseText);if(h.info(["获取楼中楼页信息",c]),c.code===0||c.success)return c.data;v.error(c.msg);},async getSearchRecommend(t){let e=await Y.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:true});if(!e.status)return;let n=y.toJSON(e.data.responseText);if(n.success||n.code===1e3)return n.data.sug_items}},Me={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(t){if(this.$data.document_addEventListener.push(t),h.info("document.addEventListener hook新增劫持判断回调"),this.$data.document_addEventListener.length>1)return;const e=this,n=new WeakMap,i=C.document.addEventListener,o=C.document.removeEventListener;C.document.addEventListener=function(...r){const l=this,u=r[0],a=r[1],s=r[2];for(let c=0;c<e.$data.document_addEventListener.length;c++){const p=e.$data.document_addEventListener[c],d=Reflect.apply(p,this,[l,u,a,s]);if(typeof d=="function"){r[1]=d,n.set(a,{eventName:u,fn:d,options:s});break}else if(typeof d=="boolean"&&!d)return}return Reflect.apply(i,this,r)},C.document.removeEventListener=function(...r){const l=r[0],u=r[1],a=r[2];if(n.has(u)){const{eventName:s,fn:c,options:p}=n.get(u);let d=false;l===s&&(typeof a=="boolean"&&a===p||typeof a=="object"&&typeof p=="object"&&a.capture===p.capture||a==a)&&(d=true),d&&(r[1]=c);}return Reflect.apply(o,this,r)};},element_addEventListener(t){if(this.$data.element_addEventListener.push(t),h.info("Element.prototype.addEventListener hook新增劫持判断回调"),this.$data.element_addEventListener.length>1)return;const e=this,n=new WeakMap,i=C.Element.prototype.addEventListener,o=C.Element.prototype.removeEventListener;C.Element.prototype.addEventListener=function(...r){const l=this,u=r[0],a=r[1],s=r[2];for(let c=0;c<e.$data.element_addEventListener.length;c++){const p=e.$data.element_addEventListener[c],d=Reflect.apply(p,this,[l,u,a,s]);if(typeof d=="function"){r[1]=d,n.set(a,{eventName:u,fn:d,options:s});break}else if(typeof d=="boolean"&&!d)return}return Reflect.apply(i,this,r)},C.Element.prototype.removeEventListener=function(...r){const l=r[0],u=r[1],a=r[2];if(n.has(u)){const{eventName:s,fn:c,options:p}=n.get(u);let d=false;s===l&&(typeof a=="boolean"&&a===p||typeof a=="object"&&typeof p=="object"&&a.capture===p.capture||a==p)&&(d=true),d&&(r[1]=c);}return Reflect.apply(o,this,r)};},setTimeout(t){if(this.$data.setTimeout.push(t),h.info("window.setTimeout hook新增劫持"),this.$data.setTimeout.length>1)return;const e=this,n=C.setTimeout;C.setTimeout=function(...i){const o=i[0],r=i[1];for(let l=0;l<e.$data.setTimeout.length;l++){const u=e.$data.setTimeout[l],a=u(o,r);if(typeof a=="boolean"&&!a)return;if(typeof a=="function"){i[0]=a;break}}return Reflect.apply(n,this,i)};},setInterval(t){if(this.$data.setInterval.push(t),h.info("window.setInterval hook新增劫持"),this.$data.setInterval.length>1)return;const e=this,n=C.setInterval;C.setInterval=function(...i){const o=i[0],r=i[1];for(let l=0;l<e.$data.setInterval.length;l++){const u=e.$data.setInterval[l],a=u(o,r);if(typeof a=="boolean"&&!a)return;if(typeof a=="function"){i[0]=a;break}}return Reflect.apply(n,this,i)};},function_apply(t){if(this.$data.function_apply.push(t),h.info("Function.prototype.apply hook新增劫持"),this.$data.function_apply.length>1)return;const e=this,n=C.Function.prototype.apply;C.Function.prototype.apply=function(...i){const o=i[0],r=i[1];let l=this;for(let a=0;a<e.$data.function_apply.length;a++){const s=e.$data.function_apply[a];if(typeof s.paramsHandler=="function"){const c=s.paramsHandler(l,o,r,i);if(c!=null){if(c.args&&("thisArg"in c.args&&(i[0]=c.args.thisArg),"argArray"in c.args&&(i[1]=c.args.argArray),typeof c.args.fn=="function"&&(l=c.args.fn)),c.preventDefault)return "result"in c?c.result:void 0;break}}}let u=n.call(l,...i);for(let a=0;a<e.$data.function_apply.length;a++){const s=e.$data.function_apply[a];if(typeof s.returnsHandler=="function"){let c=s.returnsHandler(l,i[0],i[1],u,i);c!=null&&"result"in c&&(u=c.result);}}return u};},function_call(t){if(this.$data.function_call.push(t),h.info("Function.prototype.call hook新增劫持"),this.$data.function_call.length>1)return;const e=this,n=C.Function.prototype.call;C.Function.prototype.call=function(...i){const o=i[0],r=i.slice(1);let l=this;for(let a=0;a<e.$data.function_call.length;a++){const s=e.$data.function_call[a];if(typeof s.paramsHandler=="function"){const c=s.paramsHandler(l,o,r,i);if(c!=null){if(c.args&&("thisArg"in c.args&&(i[0]=c.args.thisArg),"argArray"in c.args&&i.splice(1,r.length,...c.args.argArray),typeof c.args.fn=="function"&&(l=c.args.fn)),c.preventDefault)return "result"in c?c.result:void 0;break}}}let u=n.apply(l,i);for(let a=0;a<e.$data.function_call.length;a++){const s=e.$data.function_call[a];if(typeof s.returnsHandler=="function"){const c=s.returnsHandler(l,i[0],i[1],u,i);c!=null&&"result"in c&&(u=c.result);}}return u};},defineProperty(t){if(this.$data.defineProperty.push(t),h.info("Object.defineProperty hook新增劫持"),this.$data.defineProperty.length>1)return;const e=this,n=C.Object.defineProperty;C.Object.defineProperty=function(...i){const o=i[0],r=i[1],l=i[2];for(let u=0;u<e.$data.defineProperty.length;u++){const a=e.$data.defineProperty[u],s=a(o,r,l);if(s!=null){i[0]=s.target,i[1]=s.key,i[2]=s.attributes;break}}return Reflect.apply(n,this,i)};},window_webpack(t="webpackJsonp",e,n){let i;C.Object.defineProperty(C,t,{get(){return i},set(o){h.success("成功劫持webpack，当前webpack名："+t),i=o;const r=i.push;i.push=function(...l){let u=l[0][0];return (e==u||Array.isArray(e)&&Array.isArray(u)&&JSON.stringify(e)===JSON.stringify(u))&&Object.keys(l[0][1]).forEach(a=>{let s=l[0][1][a];l[0][1][a]=function(...c){let p=s.call(this,...c);return c[0]=n(c[0]),p};}),Reflect.apply(r,this,l)};}});}},_e={webpackChunkranchi(){let t;Object.defineProperty(C,"webpackChunkranchi",{get(){return t},set(n){t=n;const i=t.push;t.push=function(...o){return o[0][0],typeof o[0][1]=="object"&&Object.keys(o[0][1]).forEach((r,l)=>{if(typeof o[0][1][r]=="function"&&o[0][1][r].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&o[0][1][r].toString().includes("jumpToApp")&&b.getValue("little-red-book-hijack-webpack-scheme")){let u=o[0][1][r];o[0][1][r]=function(...a){h.success(["成功劫持scheme唤醒",a]);let s=a[2].d;return a[2].d=function(...c){if(c.length===2&&typeof c[1]?.Z=="function"){let p=c[1].Z;p.toString()==="function(){return y}"&&(c[1].Z=function(...d){let m=p.call(this,...d);return typeof m=="function"&&m.toString().includes("jumpToApp")?function(){return {jumpToApp(g){if(h.success(["拦截唤醒",g]),g.deeplink?.startsWith("xhsdiscover://user/")){let w=g.deeplink.replace(/^xhsdiscover:\/\/user\//,""),k=window.location.origin+`/user/profile/${w}`;window.open(k,"_blank");}}}}:m});}return s.call(this,...c)},u.call(this,...a)};}}),i.call(this,...o)};}});},hookVue(){const t=C.Object.assign;let e=false;C.Object.assign=function(...n){if(n.length==2&&n[1]?.render!==void 0&&!e){let i=n[1];const o=i.render;let r=false;i.render=function(...l){return r||(l[5]._.appContext.mixins.push({mounted(){this.$el.__Ivue__=this;}}),r=true),o.call(this,...l)},e=true;}return Reflect.apply(t,this,n)};},setTimeout(){Me.setTimeout(t=>{let e=t.toString();if(e==="function(){r()}"||e==="function(){u()}")return h.success(["成功劫持setTimeout唤醒",t]),false});},call(){Me.function_call({paramsHandler(t,e,n){if(t.toString(),n[0]?.label===0&&Array.isArray(n[0]?.ops)&&Array.isArray(n[0]?.trys)&&typeof n[0]?.sent=="function")return h.success(["成功劫持call唤醒",t,e,n]),{args:{fn:t,thisArg:e,argArray:[]}};if(typeof e=="string"&&e.startsWith("https://oia.xiaohongshu.com/oia"))return h.success(["成功劫持call跳转下载页面",t,e,n]),{preventDefault:true}}});}},ot=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box {\r
  display: none !important;\r
}\r
`,ue={allowCopy(){return h.info("允许复制"),j(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return h.info("屏蔽底部搜索发现"),B.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return h.info("屏蔽底部工具栏"),B.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return h.info("屏蔽视频笔记的作者热门笔记"),B.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return h.info("屏蔽视频笔记的热门推荐"),B.addBlockCSS("#new-note-view-container .recommend-box")}},it={optimizeVideoNoteDesc(){return h.info("优化视频笔记的描述（可滚动）"),j(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},ke={init(){j(ot),(b.getValue("little-red-book-hijack-webpack-mask")||b.getValue("little-red-book-hijack-webpack-scheme"))&&(h.info("劫持webpack"),_e.setTimeout(),_e.call()),b.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>ue.blockBottomSearchFind()),b.execMenuOnce("little-red-book-shieldBottomToorBar",()=>ue.blockBottomToorBar()),b.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>ke.optimizeImageBrowsing()),b.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>it.optimizeVideoNoteDesc()),b.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>ue.blockAuthorHotNote()),b.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>ue.blockHotRecommendNote()),f.onReady(function(){b.execMenu("little-red-book-optimizeCommentBrowsing",()=>{ke.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){h.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteId:"",xsec_token:"",noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){this.emojiMap=y.toJSON(C.localStorage.getItem("redmoji"))?.redmojiMap||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new y.LockFunction(this.scrollEvent,this);const e=C.__INITIAL_STATE__,n=e.noteData??e.data.noteData;t.noteData=n.data.noteData,t.commentData=n.data.commentData,t.noteId=t.noteData.noteId,t.xsec_token=e.noteData.routeQuery.xsec_token,h.info(["笔记数据",t.noteData]),h.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
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
            `},getCommentElement(e){let n=e.content,i=e.create_time||parseInt(e.time),o=e.id,r=e.ip_location||e.ipLocation,l=e.sub_comment_has_more,u=parseInt(e.sub_comment_count)||0,a=e.sub_comment_cursor,s=e.sub_comments||e.subComments,c=(e.user_info||e.user).image,p=(e.user_info||e.user).nickname,d=e?.user_info?.user_id||e?.user?.userId;n=t.converContent(n);let m=f.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${t.getCommentHTML({user_id:d,user_avatar:c,user_nickname:p,content:n,create_time:i,ip_location:r})}
					</div>
					`});if(l&&Array.isArray(s)&&(s.forEach(g=>{let w=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:g.user_info.user_id,user_avatar:g.user_info.image,user_nickname:g.user_info.nickname,content:t.converContent(g.content),create_time:g.create_time,ip_location:g.ip_location})});m.appendChild(w);}),u!==s.length)){let g=u-s.length,w=a,k=f.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${g} 条回复`});async function V(){let T=v.loading("加载中，请稍后..."),$=await Ie.getLzlPageInfo(t.noteId,o,10,w,void 0);T.close(),$&&(w=$.cursor,g=g-$.comments.length,k.innerText=`展开 ${g} 条回复`,$.comments.forEach(A=>{let _=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:A.user_info.user_id,user_avatar:A.user_info.image,user_nickname:A.user_info.nickname,content:t.converContent(A.content),create_time:A.create_time,ip_location:A.ip_location})});f.before(k,_);}),$.has_more||(f.off(k,"click",void 0,V,{capture:true}),k.remove()));}f.on(k,"click",void 0,V,{capture:true}),m.appendChild(k);}return m},converContent(e){return t.emojiNameList.forEach(n=>{e.includes(n)&&(e=e.replaceAll(n,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[n]}">`));}),e},async scrollEvent(){if(!y.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=v.loading("加载中，请稍后..."));let e=await Ie.getPageInfo(t.noteId,t.currentCursor,t.xsec_token);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(n=>{let i=t.getCommentElement(n);t.commentContainer.appendChild(i);}),!e.has_more)){v.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){h.success("添加滚动监听事件"),f.on(document,"scroll",void 0,t.scrollFunc.run,{capture:true,once:false,passive:true});},removeScrollEventListener(){h.success("移除滚动监听事件"),f.off(document,"scroll",void 0,t.scrollFunc.run,{capture:true});}};f.waitNode(".narmal-note-container").then(async()=>{h.info("优化评论浏览-笔记元素出现");const e=le(".note-view-container"),n=f.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
        `});t.commentContainer=n,t.init();const i=f.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.commentData.commentCount??t.noteData.comments} 条评论`});n.appendChild(i),t.commentData&&t.commentData.comments&&(h.info("从固定的评论中加载"),t.commentData.comments.forEach(o=>{let r=t.getCommentElement(o);n.appendChild(r);})),f.append(e,n);});},optimizeImageBrowsing(){h.info("优化图片浏览");const t=function(i=[],o=0){let r="";i.forEach(a=>{r+=`<li><img data-src="${a}" loading="lazy"></li>`;});const l=f.createElement("ul",{innerHTML:r}),u=new nt(l,{inline:false,url:"data-src",zIndex:y.getMaxZIndex()+100,hidden:()=>{u.destroy();}});o=o<0?0:o,u.view(o),u.zoomTo(1),u.show();},e=(i,o)=>{let r=o.querySelector("img"),l=[],u=[];o.closest(".onix-carousel-item")?u=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):u=[r];let a=u.findIndex(s=>s==r);u.forEach(s=>{let c=s.getAttribute("src")||s.getAttribute("data-src")||s.getAttribute("alt");c&&l.push(c);}),h.success(["点击浏览图片👉",l[a]]),t(l,a);},n=f.on(document,"click",".note-image-box",e);return [B.setGMResourceCSS(Je.Viewer),()=>{n.off();}]}},rt=`/* 用户主页 */\r
/* 底部的-App内打开 */\r
.launch-app-container.bottom-bar,\r
/* 顶部的-打开看看 */\r
.main-container > .scroll-view-container > .launch-app-container:first-child,\r
/* 底部的-打开小红书看更多精彩内容 */\r
.bottom-launch-app-tip.show-bottom-bar,\r
/* 首页-顶部横幅 */\r
#app .launch-app-container,\r
/* 笔记-顶部横幅 */\r
.note-view-container .nav-bar-box-expand ,\r
.note-view-container .nav-bar-box-expand+.placeholder-expand,\r
/* 404页面 顶部的打开看看 */\r
.not-found-container .nav-bar-box-expand:has(.share-info-box):has(.launch-btn),\r
/* 404页面 底部的-App内打开 */\r
.not-found-container #fmp {\r
  display: none !important;\r
}\r
`,Pe={init(){f.onReady(()=>{b.execMenuOnce("little-red-book-repariClick",()=>Pe.repariClick());});},repariClick(){h.info("修复正确的点击跳转");const t=n=>{const i=n.target;if(h.info(["点击的按钮元素",i]),i?.className?.includes("follow-btn"))h.success("点击-关注按钮");else if(i?.closest("button.reds-button.message-btn"))h.success("点击-私信按钮");else if(i?.closest("div.reds-tab-item"))h.success("点击-笔记/收藏按钮");else if(i?.closest("section.reds-note-card")){h.success("点击-笔记卡片");const o=i?.closest("section.reds-note-card"),r=o.getAttribute("id")||y.toJSON(o.getAttribute("impression"))?.noteTarget?.value?.noteId;r?window.open(`https://www.xiaohongshu.com/discovery/item/${r}`,"_blank"):v.error("获取笔记note_id失败");}return f.preventEvent(n),false},e=f.on(document,"click",t,{capture:true});return [()=>{e.off();}]}},Ce={init(){b.execMenuOnce("little-red-book-shieldAd",()=>(h.info("注入默认屏蔽CSS"),j(rt))),b.execMenuOnce("little-red-book-allowCopy",()=>Ce.allowCopy()),we.isArticle()?ke.init():we.isUserHome()&&Pe.init();},allowCopy(){return h.info("允许复制文字"),j(`
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `)}},at={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},de={getVue(t){if(t!=null)return t.__vue__||t.__Ivue__||t.__IVue__},getVue3(t){if(t!=null)return t.__vueParentComponent},waitVuePropToSet(t,e){Array.isArray(e)||(e=[e]);function n(){let i=null;return typeof t=="string"?i=f.selector(t):typeof t=="function"?i=t():t instanceof HTMLElement&&(i=t),i}e.forEach(i=>{typeof i.msg=="string"&&h.info(i.msg);function o(){let r=n();if(r==null)return {status:false,isTimeout:true,inst:null,$el:r};let l=de.getVue(r);if(l==null)return {status:false,isTimeout:false,inst:null,$el:r};let u=i.check(l,r);return u=!!u,{status:u,isTimeout:false,inst:l,$el:r}}y.waitVueByInterval(()=>n(),()=>o().status,250,1e4).then(r=>{let l=o();if(l.status){let u=l.inst;i.set(u,l.$el);}else typeof i.failWait=="function"&&i.failWait(l.isTimeout);});});},watchVuePropChange(t,e,n,i,o){let r=y.assign({immediate:true,deep:false},i||{});return new Promise(l=>{de.waitVuePropToSet(t,{check(u){return typeof u?.$watch=="function"},set(u){let a=null;typeof e=="function"?a=u.$watch(()=>e(u),(s,c)=>{n(u,s,c);},r):a=u.$watch(e,(s,c)=>{n(u,s,c);},r),l(a);},failWait:o});})},goToUrl(t,e,n=false){if(t==null){v.error("跳转Url: $vueNode为空"),h.error("跳转Url: $vueNode为空："+e);return}let i=de.getVue(t);if(i==null){v.error("获取vue属性失败",{consoleLogContent:true});return}let o=i.$router,r=true;if(h.info("即将跳转URL："+e),n&&(r=false),r)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let l=new URL(e);if(l.origin===window.location.origin)e=l.pathname+l.search+l.hash;else {h.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}h.info("$router push跳转Url："+e),o.push(e);}},hookGestureReturnByVueRouter(t){function e(){h.success("触发popstate事件"),i(true);}function n(){h.success("监听地址改变"),t.vueInst.$router.history.push(t.hash),f.on(C,"popstate",e);}async function i(o=false){if(f.off(C,"popstate",e),!t.callback(o))for(;;)if(t.vueInst.$router.history.current.hash===t.hash)h.info("后退！"),t.vueInst.$router.back(),await y.sleep(250);else return}return n(),{resumeBack:i}}},Le={init(){(b.getValue("pc-xhs-search-open-blank-btn")||b.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),b.exec(["pc-xhs-search-open-blank-btn","pc-xhs-search-open-blank-keyboard-enter"],()=>this.optimizationSearch(),t=>t.some(n=>{let i=!!b.getValue(n);return b.$data.contentConfigInitDisabledKeys.includes(n)&&(i=false,h.warn(`.exec ${n} 被禁用`)),i})),b.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){const t=function(e,n=true){{const i=le("#search-input");if(i){const o=i.value,r=at.getSearchUrl(o);h.info("搜索内容: "+o),window.open(r,n?"_blank":"_self");}else v.error("未找到搜索的输入框");}};f.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",b.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{f.onKeyboard(e,"keydown",(n,i,o,r)=>{n==="Enter"&&!o.length&&(h.info("按下回车键"),f.preventEvent(r),e.blur(),t());});});}),f.waitNode("#search-input + .input-button .search-icon").then(e=>{b.execMenu("pc-xhs-search-open-blank-btn",()=>{f.on(e,"click",n=>{f.preventEvent(n),h.info("点击搜索按钮"),t();},{capture:true});});});},fullWidth(){h.info("笔记宽屏");const t=b.getValue("pc-xhs-article-fullWidth-widthSize",90),e=b.getValue("pc-xhs-article-fullWidth-imageSize",80);return j(`
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
		`)},transformPublishTime(){h.info("转换笔记发布时间");const t=new y.LockFunction(()=>{Qe(".note-content:not([data-edit-date])").forEach(n=>{const i=de.getVue(n);if(!i)return;const o=i?._?.props?.note;if(o==null)return;const r=o.time,l=o.lastUpdateTime,u=o.ipLocation;if(typeof r=="number"){const a=[];a.push(`发布：${y.formatTime(r)}`),typeof l=="number"&&a.push(`修改：${y.formatTime(l)}`),typeof u=="string"&&y.isNotNull(u)&&a.push(u);const s=n.querySelector(".date");f.html(s,a.join("<br>")),n.setAttribute("data-edit-date","");}});}),e=y.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{t.run();}});return [()=>{e?.disconnect();}]}},lt={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=y.ajaxHooker()),this.__ajaxHooker}},ve=function(t,e,n,i,o,r,l,u,a,s){const c={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:i,buttonIsRightIcon:o,buttonIconIsLoading:r,buttonType:l,buttonText:n,callback(p){typeof u=="function"&&u(p);},afterAddToUListCallBack:a};return Reflect.set(c.attributes,Fe,()=>{c.disable=false;}),c},me=function(t,e,n,i,o,r,l){const u={text:t,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[D].get(e,n)},callback(a){if(a==null)return;const s=a.value;if(h.info(`选择：${a.text}`),typeof o=="function"&&o(a))return;this.props[D].set(e,s);},data:i};return Reflect.set(u.attributes,W,e),Reflect.set(u.attributes,G,n),oe.initComponentsStorageApi("select",u,{get(a,s){return b.getValue(a,s)},set(a,s){b.setValue(a,s);}}),u},Te=function(t,e,n,i,o,r,l="请至少选择一个选项",u,a){let s=[];typeof i=="function"?s=i():s=i;const c={text:t,type:"select-multiple",description:r,placeholder:l,attributes:{},props:{},getValue(){return this.props[D].get(e,n)},selectConfirmDialogConfig:u,callback(p){const d=this.props[D],m=[];p.forEach(g=>{m.push(g.value);}),h.info("多选-选择：",m),d.set(e,m);},data:s};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,G,n),oe.initComponentsStorageApi("select-multiple",c,{get(p,d){return b.getValue(p,d)},set(p,d){b.setValue(p,d);}}),c},De=function(t,e,n,i,o,r,l,u,a,s){const c={text:t,type:"slider",description:u,attributes:{},props:{},getValue(){return this.props[D].get(e,n)},getToolTipContent(p){return typeof l=="function"?l(p):`${p}`},callback(p,d){if(typeof r=="function"&&r(p,d))return;this.props[D].set(e,d);},min:i,max:o,step:a};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,G,n),oe.initComponentsStorageApi("slider",c,{get(p,d){return b.getValue(p,d)},set(p,d){b.setValue(p,d);}}),c},M=function(t,e,n,i,o,r,l,u,a){const s={text:t,type:"switch",description:o,disabled:l,attributes:{},props:{},getValue(){return this.props[D].get(e,n)},callback(c,p){const d=!!p;h.success(`${d?"开启":"关闭"} ${t}`),this.props[D].set(e,d);},afterAddToUListCallBack:(...c)=>{}};return Reflect.set(s.attributes,W,e),Reflect.set(s.attributes,G,n),oe.initComponentsStorageApi("switch",s,{get(c,p){return b.getValue(c,p)},set(c,p){b.setValue(c,p);}}),s},Ne=function(t,e,n,i,o,r="",l,u){const a={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:r,disabled:l,getValue(){const c=this.props[D].get(e,n);return Array.isArray(c)?c.join(`
`):c},callback(s,c){this.props[D].set(e,c);}};return Reflect.set(a.attributes,W,e),Reflect.set(a.attributes,G,n),oe.initComponentsStorageApi("switch",a,{get(s,c){return b.getValue(s,c)},set(s,c){b.setValue(s,c);}}),a},oe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new K.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let i;this.hasStorageApi(t)?i=this.getStorageApi(t):i=n,this.setComponentsStorageApiProperty(e,i);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,D,e);}},st=function(t,e,n,i,o,r="",l="text",u,a){const s={text:t,type:"input",inputType:l,attributes:{},props:{},description:i,placeholder:r,afterAddToUListCallBack:u,getValue(){return this.props[D].get(e,n)},callback(c,p){c.target.validity.valid,this.props[D].set(e,p);}};return Reflect.set(s.attributes,W,e),Reflect.set(s.attributes,G,n),oe.initComponentsStorageApi("input",s,{get(c,p){return b.getValue(c,p)},set(c,p){b.setValue(c,p);}}),s};class ct{option;constructor(e){this.option=e;}getAllRule(){return te(this.option.STORAGE_API_KEY,[])}setAllRule(e){se(this.option.STORAGE_API_KEY,e);}clearAllRule(){this.setAllRule([]);}getRule(e){const n=this.getAllRule(),i=n.findIndex(o=>o.uuid===e);if(i!==-1)return n[i]}setRule(e){const n=this.getAllRule(),i=n.findIndex(r=>r.uuid===e.uuid);let o=false;return i!==-1&&(n[i]=e,this.setAllRule(n),o=true),o}addRule(e){const n=this.getAllRule(),i=n.findIndex(r=>r.uuid===e.uuid);let o=false;return i!==-1||(n.push(e),this.setAllRule(n),o=true),o}updateRule(e){const n=this.getAllRule(),i=n.findIndex(o=>o.uuid===e.uuid);i!==-1?n[i]=e:n.push(e),this.setAllRule(n);}deleteRule(e){const n=this.getAllRule(),i=typeof e=="string"?e:e.uuid,o=n.findIndex(r=>r.uuid===i);return o!==-1?(n.splice(o,1),this.setAllRule(n),true):false}importRules(e){const n=N.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(a,s){a.close();}}},mask:{enable:true},drag:true,width:P.info.width,height:P.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),i=n.$shadowRoot.querySelector(".btn-control[data-mode='local']"),o=n.$shadowRoot.querySelector(".btn-control[data-mode='network']"),r=n.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),l=async a=>{let s=this.getAllRule();const c=[],p=[];let d=false;for(let g=0;g<a.length;g++){const w=a[g],k=s.findIndex(V=>V.uuid===w.uuid);k!==-1?p.push({index:k,data:w}):c.push(w);}if(p.length&&await new Promise(w=>{N.alert({title:{text:"覆盖规则",position:"center"},content:{text:`存在相同的uuid的规则 ${p.length}条，是否进行覆盖？`,html:true},btn:{close:{callback(k,V){k.close(),w(false);}},ok:{text:"覆盖",callback(k,V){k.close(),w(true);}}},width:P.info.width,height:P.info.height,mask:{enable:true},drag:true});})){for(const w of p)s[w.index]=w.data;d=true;}c.length&&(s=s.concat(c)),this.setAllRule(s);const m=`共 ${a.length} 条规则，新增 ${c.length} 条，覆盖 ${d?p.length:0} 条`;v.success(m),e?.();},u=a=>new Promise(async s=>{const c=y.toJSON(a);if(!Array.isArray(c)){h.error(c),v.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),s(false);return}if(!c.length){v.error("导入失败，解析出的数据为空",{consoleLogContent:true}),s(false);return}await l(c),s(true);});f.on(i,"click",a=>{f.preventEvent(a),n.close();const s=f.createElement("input",{type:"file",accept:".json"});f.on(s,["propertychange","input"],c=>{if(!s.files?.length)return;const p=s.files[0],d=new FileReader;d.onload=()=>{u(d.result);},d.readAsText(p,"UTF-8");}),s.click();}),f.on(o,"click",a=>{f.preventEvent(a),n.close();const s=N.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,m){d.close();}},ok:{text:"导入",callback:async(d,m)=>{const g=d.text;if(y.isNull(g)){v.error("请填入完整的url");return}const w=v.loading("正在获取配置..."),k=await Y.get(g,{allowInterceptConfig:false});if(w.close(),!k.status){h.error(k),v.error("获取配置失败",{consoleLogContent:true});return}await u(k.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:P.info.width,height:"auto"}),c=s.$shadowRoot.querySelector("input"),p=s.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(c,["input","propertychange"],d=>{f.val(c)===""?f.attr(p,"disabled","true"):f.removeAttr(p,"disabled");}),f.onKeyboard(c,"keydown",(d,m,g)=>{d==="Enter"&&g.length===0&&f.val(c)!==""&&f.emit(p,"click");}),f.emit(c,"input");}),f.on(r,"click",async a=>{f.preventEvent(a),n.close();const s=await y.getClipboardInfo();if(s.error!=null){v.error(s.error.toString());return}if(s.content.trim()===""){v.warning("获取到的剪贴板内容为空");return}await u(s.content);});}exportRules(e="rule.json"){const n=this.getAllRule(),i=new Blob([JSON.stringify(n,null,4)]),o=globalThis.URL.createObjectURL(i),r=document.createElement("a");r.href=o,r.download=e,r.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(o);},1500);}}class ut{option;constructor(e){this.option=e;}async showView(){let e=N.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:y.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${N.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let i=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());i.appendChild(o);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class dt{option;constructor(e){this.option=e;}async showView(e){const n=N.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      ${N.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async u=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(u){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:u=>{let a=N.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async s=>{if(h.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){v.error("清理失败");return}else v.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),a.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:i,$externalSelect:o,$ruleValueSelect:r,$searchInput:l}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let u=null,a=null;Array.isArray(this.option.bottomControls?.filter?.option)&&f.append(o,this.option.bottomControls?.filter?.option.map(p=>{const d=f.createElement("option",{innerText:p.name});return Reflect.set(d,"data-value",p),d})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&f.append(r,this.option.bottomControls?.filter?.inputOption.map(p=>{const d=f.createElement("option",{innerText:p.name});return Reflect.set(d,"data-value",p),d})),f.on(o,"change",async p=>{const d=o[o.selectedIndex],m=Reflect.get(d,"data-value");typeof m?.selectedCallBack=="function"&&m.selectedCallBack(m),u=m,await c(false);}),f.on(r,"change",async p=>{const d=r[r.selectedIndex],m=Reflect.get(d,"data-value");typeof m?.selectedCallBack=="function"&&m.selectedCallBack(m),a=m,await c(false);}),f.onInput(l,y.debounce(async()=>{await c(false);}));const s=()=>{const p=o[o.selectedIndex];u=Reflect.get(p,"data-value");const d=r[r.selectedIndex];a=Reflect.get(d,"data-value");},c=async p=>{this.clearContent(n.$shadowRoot),p&&s();const d=await this.option.data(),m=[],g=f.val(l);for(let w=0;w<d.length;w++){const k=d[w];if(u){const V=await u?.filterCallBack?.(k);if(typeof V=="boolean"&&!V)continue}if(a){let V=true;if(g===""?V=true:V=false,V||(V=await a?.filterCallBack?.(k,g)),!V)continue}m.push(k);}await this.appendRuleItemElement(n.$shadowRoot,m);};if(typeof e=="object"&&e!=null){let p;typeof e.external=="number"?p=e.external:p=Array.from(o.options).findIndex(m=>Reflect.get(m,"data-value").value===e.external),p!==-1&&(o.selectedIndex=p);let d;typeof e.rule=="number"?d=e.rule:d=Array.from(r.options).findIndex(m=>Reflect.get(m,"data-value").value===e.rule),d!==-1&&(r.selectedIndex=d);}await c(true);}else f.hide(i,false);}showEditView(e,n,i,o,r,l){let u=async s=>{if(s){if(typeof l=="function"){let c=await this.option.getData(n);l(c);}}else if(e||await this.option.deleteData(n),typeof r=="function"){let c=await this.option.getData(n);r(c);}};new ut({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:u,getView:async s=>await this.option.itemControls.edit.getView(s,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(s,c)=>{s.close(),await u(false);}},close:{callback:async(s,c)=>{s.close(),await u(false);}}},onsubmit:async(s,c)=>{let p=await this.option.itemControls.edit.onsubmit(s,e,c);return p.success?e?(v.success("修改成功"),i&&await this.updateRuleItemElement(p.data,o,i)):i&&await this.appendRuleItemElement(i,p.data):e&&h.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){const n=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),o=e.querySelector(".rule-view-search-container"),r=o.querySelector(".pops-panel-select .select-rule-status"),l=o.querySelector(".pops-panel-select .select-rule-value"),u=o.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:i,$searchContainer:o,$externalSelect:r,$ruleValueSelect:l,$searchInput:u}}parseRuleItemElement(e){const n=e.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),l=e.querySelector(".rule-controls-edit"),u=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:o,$enableSwitchCore:r,$edit:l,$delete:u,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){const i=await this.option.getDataItemName(e),o=f.createElement("div",{className:"rule-item",innerHTML:`
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
					${N.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${N.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);const r="pops-panel-switch-is-checked",{$enable:l,$enableSwitch:u,$enableSwitchCore:a,$enableSwitchInput:s,$delete:c,$edit:p}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(f.on(a,"click",async d=>{let m=false;u.classList.contains(r)?(u.classList.remove(r),m=false):(u.classList.add(r),m=true),s.checked=m,await this.option.itemControls.enable.callback(e,m);}),await this.option.itemControls.enable.getEnable(e)&&u.classList.add(r)):l.remove(),this.option.itemControls.edit.enable?f.on(p,"click",d=>{f.preventEvent(d),this.showEditView(true,e,n,o,m=>{e=null,e=m;});}):p.remove(),this.option.itemControls.delete.enable?f.on(c,"click",d=>{f.preventEvent(d);const m=N.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async g=>{h.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(v.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),m.close()):v.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):c.remove(),o}async appendRuleItemElement(e,n){const{$container:i}=this.parseViewElement(e),o=[],r=Array.isArray(n)?n:[n];for(let l=0;l<r.length;l++){const u=r[l],a=await this.createRuleItemElement(u,e);o.push(a);}return f.append(i,o),await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e),i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,i){const o=await this.createRuleItemElement(e,i);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);f.html(n,"");}setDeleteBtnText(e,n,i=false){const{$deleteBtn:o}=this.parseViewElement(e);i?f.html(o,n):f.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}class pt{parseInfoDictData(e,n=false){const i=e?.note_card;let o=e.id,r=i.display_title,l=!!i?.interact_info?.liked,u=0,a=e?.note_card?.interact_info?.liked_count;typeof a=="string"&&(u=parseInt(a),isNaN(u)&&(u=0));let s=i?.user?.nick_name||i?.user?.nickname,c=i?.user?.user_id,p=i?.type==="video",d=i?.video?.capa?.duration||0;return {articleId:o,display_title:r,isLike:l,liked_count:u,nick_name:s,user_id:c,isVideo:p,videoDuration:d}}checkFilterWithRule(e){if(e.infoValue==null||e.ruleValue==null)return  false;if(typeof e.infoValue=="string"){if(e.infoValue.match(e.ruleValue))return  true}else if(typeof e.infoValue=="object"){if(Array.isArray(e.infoValue)&&e.infoValue.find(i=>typeof i=="string"&&e.ruleValue!=null?!!i.match(e.ruleValue):false))return  true}else if(typeof e.infoValue=="number"){if(typeof e.ruleValue=="string"){let n=e.ruleValue.trim(),i=n.match(/(\d+)/);if(!i)return h.warn("过滤器-解析比较大小的数字失败: ",e),false;let o=Number(i[1]);if(n.startsWith(">")){if(n.startsWith(">=")){if(e.infoValue>=o)return  true}else if(e.infoValue>o)return  true}else if(n.startsWith("<")){if(n.startsWith("<=")){if(e.infoValue<=o)return  true}else if(e.infoValue<o)return  true}else if(n.startsWith("=")){if(e.infoValue===o)return  true}else return h.warn("视频过滤器-未经允许的比较符号: ",e),false}}else if(typeof e.infoValue=="boolean"&&typeof e.ruleValue=="string"){let n=e.ruleValue.trim();return e.infoValue.toString()===n}return  false}checkInfoIsFilter(e,n){let i=this.parseInfoDictData(n),o=false,r=null;e:for(let l=0;l<e.length;l++){const u=e[l],a=Array.isArray(u.data.ruleName)?u.data.ruleName:[u.data.ruleName];for(let s=0;s<a.length;s++){const c=a[s];if(!Reflect.has(i,c))continue;let p=c,d=i[p],m={infoKey:p,infoValue:d,ruleKey:u.data.ruleName,ruleValue:u.data.ruleValue};if(o=this.checkFilterWithRule(m),o)if(Array.isArray(u.dynamicData)&&u.dynamicData.length){let g=[];for(let w=0;w<u.dynamicData.length;w++){const k=u.dynamicData[w];let V=k.ruleName,T=i[V],$={infoKey:V,infoValue:T,ruleKey:k.ruleName,ruleValue:k.ruleValue};g.push($);let A=this.checkFilterWithRule($);if(o=o&&A,!o)break}o&&h.success([`视频过滤器-多组 ==> ${u.name}`,i,m,g,n,u]);}else h.success([`视频过滤器 ==> ${u.name}`,i,m,n,u]);if(o){r=u;break e}}}return {isFilter:o,matchedFilterOption:r,transformInfo:i,info:n}}removeArticle(...e){if(e.length===1){let n=e[0];n!=null&&n instanceof Element&&n.remove();}else if(e.length===2){let n=e[0],i=e[1];if(typeof i=="number"){let o=n[i];o!=null&&o instanceof Element&&o.remove(),n.splice(i,1);}}}}const pe={$key:{ENABLE_KEY:"shieldVideo-exec-network-enable"},$data:{isFilterAwemeInfoList:new K.Dictionary,articleInfoMap:new K.Dictionary,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage==null&&(this.__videoFilterRuleStorage=new ct({STORAGE_API_KEY:"xhs-article-filter-rule"})),this.__videoFilterRuleStorage},get isReverse(){return b.getValue("xhs-article-filter-only-show-filtered-video")}},init(){this.execFilter();},execFilter(){b.execMenuOnce(this.$key.ENABLE_KEY,async()=>{h.info("执行笔记过滤器");let t=new pt,e=o=>{if(this.$data.isReverse&&(o.isFilter=!o.isFilter,typeof o.transformInfo.articleId=="string"&&o.matchedFilterOption)){let r=this.$data.isFilterAwemeInfoList.get(o.transformInfo.articleId)||[];r.push(o.matchedFilterOption),this.$data.isFilterAwemeInfoList.set(o.transformInfo.articleId,r);}typeof o.transformInfo.articleId=="string"&&this.$data.articleInfoMap.set(o.transformInfo.articleId,{articleInfo:o.info,transformArticleInfo:o.transformInfo});},n=o=>{if(!b.getValue(this.$key.ENABLE_KEY))return [];let r=this.$data.videoFilterRuleStorage.getAllRule();if(!r.length)return [];let l=Array.isArray(o)?o:[o];return r.filter(a=>a.enable&&(a.data.scope.includes("all")||Array.from(l).findIndex(s=>a.data.scope.includes(s))!==-1))},i=(o,r)=>{r.response=l=>{let u=n(o);if(!u.length)return;let a=y.toJSON(l.responseText),s=a?.data?.items;if(Array.isArray(s)){for(let c=0;c<s.length;c++){let p=s[c]||{},d=t.checkInfoIsFilter(u,p);e(d),d.isFilter&&t.removeArticle(s,c--);}l.responseText=JSON.stringify(a);}};};lt.ajaxHooker.hook(o=>{let r=B.fixUrl(o.url);new URL(r).pathname.startsWith("/api/sns/web/v1/homefeed")&&i("xhr-explore",o);});});},getTemplateData(){return {uuid:y.generateUUID(),enable:true,name:"",data:{scope:[],ruleName:"display_title",ruleValue:"",remarks:""},dynamicData:[]}},showView(){this.getRuleViewInstance().showView();},getRuleViewInstance(){const t=this;let e=N.config.PanelHandlerComponents();function n(o){return {get(r,l){return o[r]??l},set(r,l){o[r]=l;}}}return new dt({title:"笔记过滤器",data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.$data.videoFilterRuleStorage.setRule(o),deleteData:o=>this.$data.videoFilterRuleStorage.deleteRule(o),getData:o=>this.$data.videoFilterRuleStorage.getAllRule().find(u=>u.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,r)=>{o.enable=r,this.$data.videoFilterRuleStorage.setRule(o);}},edit:{enable:true,getView:(o,r)=>{let l=document.createDocumentFragment();r||(o=this.getTemplateData());let u=M("启用","enable",true);Reflect.set(u.props,D,n(o));let a=e.createSectionContainerItem_switch(u).$el,s=st("规则名称","name","","",void 0,"必填");Reflect.set(s.props,D,n(o));let c=e.createSectionContainerItem_input(s).$el,p=Te("作用域","scope",[],[{text:"所有",value:"all"},{text:"发现",value:"xhr-explore"}].map(x=>({...x,value:x.value})),void 0,"选择需要在xxx上生效的作用域");Reflect.set(p.props,D,n(o.data));let d=e.createSectionContainerItem_select_multiple(p).$el,m=["display_title","isLike","liked_count","nick_name","user_id","isVideo","videoDuration"],g=x=>{let I=Array.isArray(x.ruleName)?x.ruleName:[x.ruleName],L=Te("属性名","ruleName",I,m.map(H=>({text:H,value:H})),void 0,"选择需要的属性名 ");Reflect.set(L.props,D,n(x));let S=e.createSectionContainerItem_select_multiple(L).$el,E=Ne("属性值","ruleValue","","如果是字符串，可正则，注意转义");Reflect.set(E.props,D,n(x));let R=e.createSectionContainerItem_textarea(E).$el,O=Ne("备注","remarks","","");Reflect.set(O.props,D,n(x));let F=e.createSectionContainerItem_textarea(O).$el;return {$ruleName:S,$ruleValue:R,$remarks:F}},w=f.createElement("div",{className:"rule-form-ulist-dynamic",innerHTML:`
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" data-type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),k=w.querySelector(".rule-form-ulist-dynamic__inner"),V=w.querySelector(".pops-panel-button"),T=(x={ruleName:[],ruleValue:"",remarks:""})=>{let I=f.createElement("div",{className:"rule-form-ulist-dynamic__inner-container",innerHTML:`
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
								`}),L=I.querySelector(".dynamic-control-delete");f.on(L,"click",F=>{if(f.preventEvent(F),I.remove(),Array.isArray(o.dynamicData)){let H=o.dynamicData.findIndex(z=>z==x);H!==-1&&o.dynamicData.splice(H,1);}});let S=I.querySelector(".dynamic-forms"),{$ruleName:E,$ruleValue:R,$remarks:O}=g(x);S.appendChild(E),S.appendChild(R),S.appendChild(O),k.appendChild(I);};if(f.on(V,"click",x=>{f.preventEvent(x),T();}),Array.isArray(o.dynamicData))for(let x=0;x<o.dynamicData.length;x++){const I=o.dynamicData[x];T(I);}let{$ruleName:$,$ruleValue:A,$remarks:_}=g(o.data);return l.append(a,c,d,$,A,_,w),l},onsubmit:(o,r,l)=>{let u=o.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return r&&(a.uuid=l.uuid),u.forEach(s=>{let c=Reflect.get(s,e.$data.nodeStoreConfigKey);if(!c)return;let p=Reflect.get(c,"attributes");if(!p)return;let d=Reflect.get(s,D),m=Reflect.get(p,W),g=Reflect.get(p,G),w=d.get(m,g);Reflect.has(a,m)?Reflect.set(a,m,w):Reflect.has(a.data,m)?Reflect.set(a.data,m,w):h.error(`${m}不在数据中`);}),o.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(s=>{let c={};s.querySelectorAll(".dynamic-forms > li").forEach(p=>{let d=Reflect.get(p,e.$data.nodeStoreConfigKey);if(!d)return;let m=Reflect.get(d,"attributes");if(!m)return;let g=Reflect.get(p,D),w=Reflect.get(m,W),k=Reflect.get(m,G),V=g.get(w,k);Reflect.set(c,w,V);}),a.dynamicData.push(c);}),a.name.trim()===""?(v.error("规则名称不能为空"),{success:false,data:a}):a.data.scope.length===0?(v.error("请选择作用域"),{success:false,data:a}):a.data.ruleName.length===0?(v.error("请选择属性名"),{success:false,data:a}):a.data.ruleValue.trim()===""?(v.error("属性值不能为空"),{success:false,data:a}):r?{success:t.$data.videoFilterRuleStorage.setRule(a),data:a}:{success:t.$data.videoFilterRuleStorage.addRule(a),data:a}},style:`
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
                    `,width:()=>window.innerWidth>700?"700px":"88vw"},delete:{enable:true,deleteCallBack:o=>t.$data.videoFilterRuleStorage.deleteRule(o)}},bottomControls:{filter:{enable:true,option:[{name:"启用",value:"enable",filterCallBack(o){return o.enable}},{name:"未启用",value:"notEnable",filterCallBack(o){return !o.enable}}],inputOption:[{name:"规则名称",value:"name",filterCallBack(o,r){return !!o.name.match(r)}},{name:"备注",value:"remarks",filterCallBack(o,r){let l=!!o.data.remarks.match(r);return l||(l=!!o.dynamicData?.find(u=>!!u.remarks.match(r))),l}}]},clear:{enable:true,callback:()=>{t.$data.videoFilterRuleStorage.clearAllRule();}}}})}},ft="",ht={init(){b.execMenuOnce("pc-xhs-shieldAd",()=>j(ft)),b.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),b.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),f.onReady(()=>{b.execMenuOnce("pc-xhs-shield-login-dialog",()=>this.blockLoginContainer());});},blockLoginContainer(){h.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");const t=y.mutationObserver(document.body,{config:{subtree:true,childList:true},immediate:true,callback:()=>{const e=le(".login-container .icon-btn-wrapper");e&&(e.click(),h.success("登录弹窗出现，自动点击关闭按钮"));}});return [B.addBlockCSS(".login-container"),()=>{t?.disconnect();}]},blockSelectTextVisibleSearchPosition(){return h.info("屏蔽选择文字弹出的搜索提示"),B.addBlockCSS(".search-position")},blockTopToolbar(){return h.info("【屏蔽】顶部工具栏"),[B.addBlockCSS("#headerContainer",".header-container"),j(`
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
			`)]}},ge={init(){pe.init(),b.execMenuOnce("pc-xhs-hook-vue",()=>{_e.hookVue();}),b.execMenuOnce("pc-xhs-allowCopy",()=>ge.allowPCCopy()),b.execMenuOnce("pc-xhs-open-blank-article",()=>ge.openBlankArticle()),ht.init(),b.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>Le.transformPublishTime()),we.isArticle()&&(h.info("Router: 笔记页面"),Le.init());},allowPCCopy(){h.success("允许复制文字");const t=n=>{f.preventEvent(n);let i=C.getSelection();return i?y.copy(i.toString()):h.error("未选中任何内容"),false},e=f.on(C,"copy",t,{capture:true});return [()=>{e.off();}]},openBlankArticle(){h.success("新标签页打开文章");const t=(n,i)=>{if(!b.getValue("pc-xhs-open-blank-article"))return;f.preventEvent(n);let r=i.querySelector("a.cover[href]")?.href;if(r){h.info("跳转文章: "+r);const l=new URL(r);l.pathname=l.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i,"/discovery/item/"),r=l.toString(),window.open(r,"_blank");}else v.error("未找到文章链接");},e=f.on(document,"click",".feeds-container .note-item",t,{capture:true});return [()=>{e.off();}]}},mt={id:"little-red-book-panel-config-common",title:"通用",views:[{text:"",type:"container",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[me("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{h.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),me("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),M("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[M("【屏蔽】广告","little-red-book-shieldAd",true,void 0,"如：App内打开"),M("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",true,void 0,"建议开启"),M("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",true,void 0,"建议开启")]}]}]}]},gt={id:"little-red-book-panel-config-home",title:"主页",views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[M("劫持点击事件","little-red-book-repariClick",true,void 0,"可阻止点击跳转至下载页面")]}]}]}]},yt={id:"little-red-book-panel-config-note",title:"笔记",views:[{text:"",type:"container",views:[{text:"视频笔记",type:"deepMenu",views:[{text:"",type:"container",views:[M("优化视频描述","little-red-book-optimizeVideoNoteDesc",true,void 0,"让视频描述可以滚动显示更多"),M("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",true,void 0,"建议开启"),M("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",true,void 0,"建议开启")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[M("优化评论浏览","little-red-book-optimizeCommentBrowsing",true,void 0,"目前仅可加载部分评论"),M("优化图片浏览","little-red-book-optimizeImageBrowsing",true,void 0,"更方便的浏览图片"),M("允许复制","little-red-book-allowCopy",true,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[M("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",true,void 0,"如：打开App弹窗、登录弹窗"),M("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",true,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},bt={id:"xhs-panel-config-article",title:"笔记",views:[{type:"container",text:"功能",views:[M("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",false,void 0,"注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>")]},{text:"笔记宽屏",type:"container",views:[M("启用","pc-xhs-article-fullWidth",false,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),De("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(t,e)=>{let n=le("#noteContainer");if(!n){h.error("未找到笔记容器");return}n.style.width=`${e}vw`;},t=>`${t}%，默认：90%`,"调整笔记页面占据的页面范围"),De("图片尺寸","pc-xhs-article-fullWidth-imageSize",80,30,100,(t,e)=>{let n=le("#noteContainer");if(!n){h.error("未找到笔记容器");return}let i=n.querySelector(".media-container");if(!i){h.error("未找到媒体容器");return}window.innerWidth>=960?(i.style.width=`${e}%`,i.style.height=""):(i.style.height=`${e}%`,i.style.width="");},t=>`${t}%，默认：80%`,"横向布局时调整宽度，竖向布局时调整高度")]}]},xt={id:"xhs-panel-config-common",title:"通用",views:[{type:"container",text:"",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[me("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{h.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),me("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),M("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[M("允许复制","pc-xhs-allowCopy",true,void 0,"可以选择文字并复制"),M("新标签页打开文章","pc-xhs-open-blank-article",false,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",views:[{text:"",type:"container",views:[M("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",false,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),M("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",false,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[M("【屏蔽】广告","pc-xhs-shieldAd",true,void 0,"屏蔽元素"),M("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",true,void 0,"屏蔽会自动弹出的登录弹窗"),M("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",false,void 0,"屏蔽元素"),M("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",false,void 0,"屏蔽元素")]}]},{type:"deepMenu",text:"笔记过滤器",views:[{text:'<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',type:"container",views:[M("启用","shieldVideo-exec-network-enable",true,void 0,"开启后以下功能才会生效"),M("仅显示被过滤的笔记","xhs-article-filter-only-show-filtered-video",false,void 0,"只会显示过滤规则命中的笔记"),ve("笔记过滤规则","可过滤笔记","自定义",void 0,false,false,"primary",()=>{pe.showView();})]},{type:"container",text:"",views:[ve("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{pe.$data.videoFilterRuleStorage.importRules();}),ve("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{pe.$data.videoFilterRuleStorage.exportRules(Be+"-视频过滤规则.json");})]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[M("劫持Vue","pc-xhs-hook-vue",true,void 0,"恢复__vue__属性")]}]}]}]};j(`
.qmsg svg.animate-turn {
    fill: none;
}
`);ne.addContentConfig([xt,bt]);ne.addContentConfig([mt,gt,yt]);const He=be.getMenuOption();He.text="⚙ PC-设置";be.updateMenuOption(He);be.addMenuOption({key:"show_mobile_setting",text:"⚙ 移动端-设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{b.showPanel(ne.getConfig(1),`${Be}-移动端设置`);}});b.init();let Ue=y.isPhone(),re="change_env_set",Q=te(re);Oe.add({key:re,text:`⚙ 自动: ${Ue?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return Q==null?t:t+` 手动: ${Q==1?"移动端":Q==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){v.error("输入的不是规范的数字");return}if(!t.includes(n)){v.error("输入的值必须是0或1或2");return}n==0?ae(re):se(re,n);}});Q!=null?(h.info(`手动判定为${Q===1?"移动端":"PC端"}`),Q==1?Ce.init():Q==2?ge.init():(v.error("意外，手动判定的值不在范围内"),ae(re))):Ue?(h.info("自动判定为移动端"),Ce.init()):(h.info("自动判定为PC端"),ge.init());

})(Qmsg, DOMUtils, pops, Utils, Viewer);