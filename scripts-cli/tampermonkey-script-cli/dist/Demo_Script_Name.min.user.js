// ==UserScript==
// @name         Demo_Script_Name
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.2.19
// @author       WhiteSevs
// @description  demo_description
// @license      GPL-3.0-only
// @icon         https://avatars.githubusercontent.com/u/50544447?s=64&v=4
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.13/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.2.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.2/dist/index.umd.min.js
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

(function (G, ne, W, $) {
    'use strict';

    var ie=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,fe=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,Q=typeof GM_getValue<"u"?GM_getValue:void 0,j=typeof GM_info<"u"?GM_info:void 0,J=typeof GM_listValues<"u"?GM_listValues:void 0,xe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,se=typeof GM_setValue<"u"?GM_setValue:void 0,pe=typeof GM_setValues<"u"?GM_setValues:void 0,_e=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ce=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,L=typeof unsafeWindow<"u"?unsafeWindow:void 0,be=window;const z={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&G.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),G.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),he(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof fe=="function"?fe(e.keyName):null;return typeof t=="string"&&t?he(t):z.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{G.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(o){navigator.clipboard.readText().then(a=>{o(a);}).catch(a=>{R.error("读取剪贴板内容失败👉",a),o("");});}function t(o){navigator.permissions.query({name:"clipboard-read"}).then(a=>{e(o);}).catch(a=>{R.error("申请剪贴板权限失败，尝试直接读取👉",a.message??a.name??a.stack),e(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?t(o):window.addEventListener("focus",()=>{t(o);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let o,a=n-t,r=t,i=async h=>{const s=await e(h);if(typeof s=="boolean"&&s||h){x.workerClearTimeout(o);return}if(r+=t,r>a){i(true);return}o=x.workerSetTimeout(()=>{i(false);},t);};i(false);},findParentNode(e,t,n){if(n){let o=G.closest(e,n);if(o)return o.querySelector(t)}else return G.matches(e,t)?e:G.closest(e,t)},toStr(e){const t="__undefined__placeholder__replaced__str__";return JSON.stringify(e,(o,a)=>a===void 0?t:a,2).replace(new RegExp(`"${t}"`,"g"),"undefined")}},Y="GM_Panel",ve="data-init",X="data-key",ee="data-default-value",we="data-init-more-value",Ve="data-plugin-search-config",Z="data-storage-api",K={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},N={setting:{get width(){return K.width<550?"88vw":K.width<700?"550px":"700px"},get height(){return K.height<450?"70vh":K.height<550?"450px":"550px"}},settingMiddle:{get width(){return K.width<350?"88vw":"350px"}},info:{get width(){return K.width<350?"88vw":"350px"},get height(){return K.height<250?"88vh":"250px"}}},te={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new x.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(r,i)=>{typeof i!="string"&&(i=z.toStr(i));const h=new Blob([i]),s=globalThis.URL.createObjectURL(h);p.createElement("a",{href:s,download:r}).click(),x.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(s);},500);},o=()=>{const r=_=>{const d=U.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(A,y){A.close();}}},drag:true,mask:{enable:true},width:N.info.width,height:N.info.height,style:`
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
          }`}),m=d.$shadowRoot.querySelector(".btn-control[data-mode='local']"),k=d.$shadowRoot.querySelector(".btn-control[data-mode='network']"),F=d.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),D=async A=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof J=="function"?typeof ie=="function"?(J().forEach(l=>{ie(l);}),$.success("已清空脚本存储的配置")):$.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):$.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof pe=="function"?pe(A):Object.keys(A).forEach(l=>{const u=A[l];se(l,u);}),$.success("配置导入完毕");},T=A=>new Promise(async y=>{const b=x.toJSON(A);Object.keys(b).length===0?$.warning("解析为空配置，不导入"):await D(b),y(true);});p.on(m,"click",A=>{p.preventEvent(A),d.close();const y=p.createElement("input",{type:"file",accept:".json"});p.on(y,["propertychange","input"],b=>{if(!y.files?.length)return;const l=y.files[0],u=new FileReader;u.onload=()=>{T(u.result);},u.readAsText(l,"UTF-8");}),y.click();}),p.on(k,"click",A=>{p.preventEvent(A),d.close();const y=U.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(u,E){u.close();}},ok:{text:"导入",callback:async(u,E)=>{const v=u.text;if(x.isNull(v)){$.error("请填入完整的url");return}const g=$.loading("正在获取配置..."),V=await le.get(v,{allowInterceptConfig:false});if(g.close(),!V.status){R.error(V),$.error("获取配置失败",{consoleLogContent:true});return}await T(V.data.responseText)&&u.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:N.info.width,height:"auto"}),b=y.$shadowRoot.querySelector("input"),l=y.$shadowRoot.querySelector(".pops-prompt-btn-ok");p.on(b,["input","propertychange"],u=>{p.val(b)===""?p.attr(l,"disabled","true"):p.removeAttr(l,"disabled");}),p.onKeyboard(b,"keydown",(u,E,v)=>{u==="Enter"&&v.length===0&&p.val(b)!==""&&p.emit(l,"click");}),p.emit(b,"input");}),p.on(F,"click",async A=>{p.preventEvent(A),d.close();let y=await z.getClipboardText();if(y.trim()===""){$.warning("获取到的剪贴板内容为空");return}await T(y);});},i=(_=`${re}_panel-setting-${x.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,d)=>{const m=U.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(D,T){D.close();}}},drag:true,mask:{enable:true},width:N.info.width,height:N.info.height,style:`
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
          }`}),k=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),F=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");p.on(k,"click",D=>{p.preventEvent(D);try{n(_,d),m.close();}catch(T){$.error(T.toString(),{consoleLogContent:true});}}),p.on(F,"click",async D=>{await x.copy(d)?($.success("复制成功"),m.close()):$.error("复制失败");});},s=U.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(_,d){r();}},cancel:{enable:true,text:"导出",callback(_,d){i(void 0,C);}}},width:K.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),c={};if(typeof J=="function")J().forEach(d=>{const m=Q(d);Reflect.set(c,d,m);});else {$.warning("不支持函数GM_listValues，仅导出菜单配置");const _=Q(Y);Reflect.set(c,Y,_);}const C=z.toStr(c);s.value=C;},a=()=>{let r=j?.script?.supportURL||j?.script?.namespace;typeof r=="string"&&x.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:`版本：${j?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new ke(r.$asideLiElement).on("tap",function(h){clearTimeout(t),t=void 0,e?(e=false,o()):(t=setTimeout(()=>{e=false,a();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},$e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{q.showPanel(te.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){q.isTopWindow()&&Ae.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(o=>o.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class Me{storageKey;listenerData;constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new W.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let t=Q(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){se(this.storageKey,t);}set(t,n){const o=this.get(t),a=this.getLocalValue();Reflect.set(a,t,n),this.setLocalValue(a),this.emitValueChangeListener(t,n,o);}get(t,n){const o=this.getLocalValue();return Reflect.get(o,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),o=this.getLocalValue();Reflect.deleteProperty(o,t),this.setLocalValue(o),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){ie(this.storageKey);}addValueChangeListener(t,n){const o=Math.random(),a=this.listenerData.get(t)||[];return a.push({id:o,key:t,callback:n}),this.listenerData.set(t,a),o}removeValueChangeListener(t){let n=false;for(const[o,a]of this.listenerData.entries()){for(let r=0;r<a.length;r++){const i=a[r];(typeof t=="string"&&i.key===t||typeof t=="number"&&i.id===t)&&(a.splice(r,1),r--,n=true);}this.listenerData.set(o,a);}return n}async emitValueChangeListener(...t){const[n,o,a]=t;if(!this.listenerData.has(n))return;const r=this.listenerData.get(n);for(let i=0;i<r.length;i++){const h=r[i];if(typeof h.callback=="function"){let s,c;t.length===1||(t.length===2?s=o:t.length===3&&(s=o,c=a)),await h.callback(n,s,c);}}}}const B=new Me(Y),q={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new x.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new x.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new x.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new x.Dictionary),this.__onceExecData},get scriptName(){return re},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:Y,attributeKeyName:X,attributeDefaultValueName:ee},init(){this.initContentDefaultValue(),$e.init();},isTopWindow(){return L.top===L.self},initContentDefaultValue(){const e=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const a=o.attributes;let r=a[ve];if(typeof r=="function"){let c=r();if(typeof c=="boolean"&&!c)return}let i=new Map,h=a[X];if(h!=null){const c=a[ee];i.set(h,c);}let s=a[we];if(typeof s=="object"&&s&&Object.keys(s).forEach(c=>{const C=s[c];i.set(c,C);}),!i.size){R.warn("请先配置键",o);return}if(o.type==="switch"){let c=typeof o.disabled=="function"?o.disabled():o.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...i.keys());}for(const[c,C]of i.entries())this.setDefaultValue(c,C);},t=o=>{for(let a=0;a<o.length;a++){let r=o[a];e(r);let i=r.views;i&&Array.isArray(i)&&t(i);}},n=[...te.getAllContentConfig()];for(let o=0;o<n.length;o++){let a=n[o];if(!a.views)continue;const r=a.views;r&&Array.isArray(r)&&t(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&R.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){B.set(e,t);},getValue(e,t){const n=B.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){B.delete(e);},hasKey(e){return B.has(e)},addValueChangeListener(e,t,n){const o=B.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const a=this.getValue(e);n?.immediate?t(e,a,a):n?.immediateAll&&q.emitMenuValueChange(e,a,a);}return o},removeValueChangeListener(e){B.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){B.emitValueChangeListener(e,t,n);},async exec(e,t,n,o=true){const a=this;let r;typeof e=="string"||Array.isArray(e)?r=()=>e:r=e;let i=false;const h=r();let s=[];Array.isArray(h)?(i=true,s=h):s.push(h);const c=s.find(l=>!this.$data.contentConfigInitDefaultValue.has(l));if(c){R.warn(`${c} 键不存在`);return}const C=JSON.stringify(s);if(o&&this.$data.onceExecMenuData.has(C))return this.$data.onceExecMenuData.get(C);let _=[];const d=[];let m=[];const k=(l,u)=>{let E=[],v=[],g=[];if(Array.isArray(u))g=g.concat(u);else {const f=w=>{if(typeof w=="object"&&w!=null)if(w instanceof Element)g.push(w);else {const{$css:M,destory:I}=w;M!=null&&(Array.isArray(M)?g=g.concat(M):g.push(M)),typeof I=="function"&&g.push(I);}else g.push(w);};if(u!=null&&Array.isArray(u))for(const w of u)f(w);else f(u);}const V=f=>{if(f!=null){if(f instanceof Element){E.push(f);return}if(typeof f=="function"){v.push(f);return}}};for(const f of g){const w=V(f);if(typeof w=="boolean"&&!w)break;if(Array.isArray(f))for(const M of f){const I=V(M);if(typeof I=="boolean"&&!I)break}}D(),T(),l&&(_=_.concat(E),m=m.concat(v));},F=l=>!!this.getValue(l),D=()=>{for(let l=0;l<_.length;l++)_[l]?.remove(),_.splice(l,1),l--;},T=()=>{for(let l=0;l<m.length;l++){const u=m[l];u(),m.splice(l,1),l--;}},A=()=>{let l=false;return typeof n=="function"?l=n(s):l=s.every(u=>F(u)),l},y=async l=>{const u=A();let E=[];if(u){const v=s.map(g=>this.getValue(g));E=await t({key:s,value:i?v:v[0],addStoreValue:(...g)=>k(u,g)});}k(u,E);};o&&s.forEach(l=>{const u=this.addValueChangeListener(l,(E,v,g)=>y());d.push(u);}),await y();const b={reload(){this.clearStoreStyleElements(),this.destory(),y();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>D(),destory(){return T()},removeValueChangeListener:()=>{d.forEach(l=>{this.removeValueChangeListener(l);});},clearOnceExecMenuData(){o&&a.$data.onceExecMenuData.delete(C);}};return this.$data.onceExecMenuData.set(C,b),b},async execMenu(e,t,n=false,o=false){return await this.exec(e,async a=>await t(a),a=>a.every(i=>{let h=!!this.getValue(i);return q.$data.contentConfigInitDisabledKeys.includes(i)&&(h=false,R.warn(`.execMenu${o?"Once":""} ${i} 被禁用`)),n&&(h=!h),h}),o)},async execMenuOnce(e,t,n=false,o=false){const a=await this.execMenu(e,t,n,true);if(o&&a){const r=()=>{a.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,r);}return a},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),B.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t);},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${re}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];const a=e.findIndex(i=>(typeof i.isBottom=="function"?i.isBottom():!!i.isBottom)&&i.id==="script-version")!==-1;!n&&!a&&e.push(...te.getDefaultBottomContentConfig());const r=U.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(i,h)=>{i.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(i,h)=>{i(),this.$data.$panel=null;}},width:N.setting.width,height:N.setting.height,drag:true,only:true,style:`
        .pops-switch-shortcut-wrapper{
          margin-right: 5px;
          display: inline-flex;
        }
        .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
          cursor: pointer;
        }
        `,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=e,o||this.registerConfigSearch({$panel:r,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,o=async(d,m)=>{if(d==null)return;const k=await m(d);return k&&typeof k.isFind=="boolean"&&k.isFind?k.data:await o(k.data,m)},a=(d,m)=>{const k=new IntersectionObserver(F=>{F.forEach(D=>{D.isIntersecting&&(m?.(),k.disconnect());});},{root:null,threshold:1});k.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},r=d=>{const m="pops-flashing";p.onAnimationend(d,()=>{d.classList.remove(m);}),d.classList.add(m);},i=d=>{if(d.type==="dblclick"&&_)return;p.preventEvent(d),s=null;const m=U.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:N.settingMiddle.width,height:"auto",drag:true,style:`
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
				`});m.$shadowRoot.querySelector(".search-wrapper");const k=m.$shadowRoot.querySelector(".search-config-text"),F=m.$shadowRoot.querySelector(".search-result-wrapper");k.focus();const D=()=>{p.empty(F);},T=y=>{const b=x.queryProperty(y,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E}),l=p.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${b.matchedData?.path}</div>
							<div class="search-result-item-description">${b.matchedData?.description??""}</div>
						`}),u=U.config.PanelHandlerComponents();return p.on(l,"click",E=>{const g=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[y.index];if(!g){$.error(`左侧项下标${y.index}不存在`);return}g.scrollIntoView({behavior:"smooth",block:"center"}),g.click(),o(y.next,async V=>{if(V?.next){const f=await p.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(w=>{const M=Reflect.get(w,u.$data.nodeStoreConfigKey);return typeof M=="object"&&M!=null&&M.text===V.name}),2500);if(f)f.click();else return $.error("未找到对应的二级菜单"),{isFind:true,data:V};return {isFind:false,data:V.next}}else {const f=await p.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(w=>Reflect.get(w,u.$data.nodeStoreConfigKey)===V.matchedData?.formConfig),2500);if(f){a(f);const w=f.closest(".pops-panel-forms-fold[data-fold-enable]");w&&(w.querySelector(".pops-panel-forms-fold-container").click(),await x.sleep(500)),a(f,()=>{r(f);});}else $.error("未找到对应的菜单项");return {isFind:true,data:V}}});}),l},A=y=>{const b=new RegExp(y,"i"),l=[],u=(v,g)=>{for(let V=0;V<v.length;V++){const f=v[V],w=f.views;if(w&&Array.isArray(w)){const M=x.deepClone(g);if(f.type==="deepMenu"){const I=x.queryProperty(M,H=>H?.next?{isFind:false,data:H.next}:{isFind:true,data:H});I.next={name:f.text};}u(w,M);}else {let M,I;if(f.type==="own"){const O=Reflect.get(f.attributes||{},Ve);O&&(typeof O.text=="string"&&(M=O.text),typeof O.desc=="string"&&(I=O.desc));}else M=f.text,I=Reflect.get(f,"description");const H=[M,I],ce=H.findIndex(O=>{if(typeof O=="string")return O.match(b)});if(ce!==-1){const O=x.deepClone(g),ue=x.queryProperty(O,P=>P?.next?{isFind:false,data:P.next}:{isFind:true,data:P});ue.next={name:M,matchedData:{path:"",formConfig:f,matchedText:H[ce],description:I}};const de=[];x.queryProperty(O,P=>{const oe=P?.name;return typeof oe=="string"&&oe.trim()!==""&&de.push(oe),P?.next?{isFind:false,data:P.next}:{isFind:true,data:P}});const ye=de.join(z.escapeHtml(" - "));ue.next.matchedData.path=ye,l.push(O);}}}};for(let v=0;v<n.length;v++){const g=n[v];if(!g.views||g.isBottom&&g.id==="script-version")continue;const V=g.views;if(V&&Array.isArray(V)){let f=g.title;typeof f=="function"&&(f=f()),u(V,{index:v,name:f});}}const E=document.createDocumentFragment();for(const v of l){let g=T(v);E.appendChild(g);}D(),F.append(E);};p.on(k,"input",x.debounce(y=>{p.preventEvent(y);let b=p.val(k).trim();if(b===""){D();return}A(b);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(d=>{p.on(d,"dblclick",i);});let s=null,c=false,C,_=false;p.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,m)=>{_=true,clearTimeout(C),C=void 0,c&&s===m?(c=false,s=null,i(d)):(C=setTimeout(()=>{c=false;},200),c=true,s=m);},{capture:true}),t.$shadowRoot.appendChild(p.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e},getDynamicValue(e,t){const n=this;let o=false,a=t;const r=this.addValueChangeListener(e,(i,h)=>{a=h;});return {get value(){return o||(o=true,a=n.getValue(e,t)),a},destory(){n.removeValueChangeListener(r);}}}},S={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false},httpx_cookie_manager_enable:{key:"httpx-use-cookie-enable",defaultValue:false},httpx_cookie_manager_use_document_cookie:{key:"httpx-use-document-cookie",defaultValue:false}},x=W.noConflict(),p=G.noConflict(),U=ne,R=new x.Log(j,L.console||be.console),re=j?.script?.name||void 0,ke=ne.config.Utils.AnyTouch(),Ee=false;R.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});$.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?R.warn(n):t==="error"?R.error(n):R.info(n),false},get position(){return q.getValue(S.qmsg_config_position.key,S.qmsg_config_position.defaultValue)},get maxNums(){return q.getValue(S.qmsg_config_maxnums.key,S.qmsg_config_maxnums.defaultValue)},get showReverse(){return q.getValue(S.qmsg_config_showreverse.key,S.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=W.getMaxZIndex(),t=ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return W.getMaxValue(e,t)+100}});U.GlobalConfig.setGlobalConfig({zIndex:()=>{const e=W.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return W.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Ae=new x.GM_Menu({GM_getValue:Q,GM_setValue:se,GM_registerMenuCommand:xe,GM_unregisterMenuCommand:_e}),le=new x.Httpx({xmlHttpRequest:Ce,logDetails:Ee});le.interceptors.request.use(e=>e);le.interceptors.response.use(void 0,e=>(R.error("拦截器-请求错误",e),e.type==="onabort"?$.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?$.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?$.error("请求超时",{consoleLogContent:true}):$.error("其它错误",{consoleLogContent:true}),e));L.Object.defineProperty,L.Object.keys,L.Object.values,L.Function.prototype.apply,L.Function.prototype.call,L.Element.prototype.appendChild,L.setTimeout.bind(L),L.clearTimeout.bind(L),L.setInterval.bind(L),L.clearInterval.bind(L);const he=p.addStyle.bind(p);G.selector.bind(G);G.selectorAll.bind(G);new x.GM_Cookie;const Le={init(){R.info("demo site init");}},ae=function(e,t,n,o,a,r,i,h,s){const c={text:e,type:"switch",description:a,disabled:i,attributes:{},props:{},getValue(){return this.props[Z].get(t,n)},callback(C,_){const d=!!_;R.success(`${d?"开启":"关闭"} ${e}`),this.props[Z].set(t,d);},afterAddToUListCallBack:(...C)=>{}};return Reflect.set(c.attributes,X,t),Reflect.set(c.attributes,ee,n),me.initComponentsStorageApi("switch",c,{get(C,_){return q.getValue(C,_)},set(C,_){q.setValue(C,_);}}),c},me={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new W.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let o;this.hasStorageApi(e)?o=this.getStorageApi(e):o=n,this.setComponentsStorageApiProperty(t,o);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,Z,t);}},ge=function(e,t,n,o,a,r,i){const h={text:e,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[Z].get(t,n)},callback(s){if(s==null)return;const c=s.value;if(R.info(`选择：${s.text}`),typeof a=="function"&&a(s))return;this.props[Z].set(t,c);},data:o};return Reflect.set(h.attributes,X,t),Reflect.set(h.attributes,ee,n),me.initComponentsStorageApi("select",h,{get(s,c){return q.getValue(s,c)},set(s,c){q.setValue(s,c);}}),h},Se={id:"view-general",title:"通用",views:[{text:"Toast配置",type:"container",views:[ge("Toast位置",S.qmsg_config_position.key,S.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{R.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),ge("最多显示的数量",S.qmsg_config_maxnums.key,S.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),ae("逆序弹出",S.qmsg_config_showreverse.key,S.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"container",views:[ae("启用",S.httpx_cookie_manager_enable.key,S.httpx_cookie_manager_enable.defaultValue,void 0,"Api请求时会自动使用下面的Cookie设置"),ae("使用document.cookie",S.httpx_cookie_manager_use_document_cookie.key,S.httpx_cookie_manager_use_document_cookie.defaultValue,void 0,"会自动根据请求的域名来使用cookie")]}]};te.addContentConfig([Se]);q.init();Le.init();

})(DOMUtils, pops, Utils, Qmsg);