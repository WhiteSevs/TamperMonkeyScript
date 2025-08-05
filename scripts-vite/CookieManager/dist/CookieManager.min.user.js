// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.8.5
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.3.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@886625af68455365e426018ecb55419dd4ea6f30/lib/CryptoJS/index.js
// @connect      *
// @grant        GM.cookie
// @grant        GM_cookie
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (k, H, G, Y, Q) {
    'use strict';

    var X=typeof GM<"u"?GM:void 0,ye=typeof GM_cookie<"u"?GM_cookie:void 0,fe=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ne=typeof GM_getValue<"u"?GM_getValue:void 0,P=typeof GM_info<"u"?GM_info:void 0,ve=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,W=typeof GM_setValue<"u"?GM_setValue:void 0,be=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ce=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,q=typeof unsafeWindow<"u"?unsafeWindow:void 0,_e=window;const me="GM_Panel",he="data-init",U="data-key",z="data-default-value",$e="data-init-more-value",R="data-storage-api",D={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},settingMiddle:{get width(){return window.innerWidth<350?"88vw":"350px"},get height(){return window.innerHeight<450?"88vh":"450px"}},info:{get width(){return window.innerWidth<350?"88vw":"350px"},get height(){return window.innerHeight<250?"88vh":"250px"}}};class Se{storageKey;listenerData;constructor(e){if(typeof e=="string"){let i=e.trim();if(i=="")throw new Error("key参数不能为空字符串");this.storageKey=i;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new G.Dictionary;}getLocalValue(){let e=ne(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){W(this.storageKey,e);}set(e,i){let a=this.get(e),o=this.getLocalValue();Reflect.set(o,e,i),this.setLocalValue(o),this.triggerValueChangeListener(e,a,i);}get(e,i){let a=this.getLocalValue();return Reflect.get(a,e)??i}getAll(){return this.getLocalValue()}delete(e){let i=this.get(e),a=this.getLocalValue();Reflect.deleteProperty(a,e),this.setLocalValue(a),this.triggerValueChangeListener(e,i,void 0);}has(e){let i=this.getLocalValue();return Reflect.has(i,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(i=>Reflect.get(e,i))}clear(){fe(this.storageKey);}addValueChangeListener(e,i){let a=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:a,key:e,callback:i}),this.listenerData.set(e,o),a}removeValueChangeListener(e){let i=false;for(const[a,o]of this.listenerData.entries()){for(let n=0;n<o.length;n++){const l=o[n];(typeof e=="string"&&l.key===e||typeof e=="number"&&l.id===e)&&(o.splice(n,1),n--,i=true);}this.listenerData.set(a,o);}return i}triggerValueChangeListener(e,i,a){if(!this.listenerData.has(e))return;let o=this.listenerData.get(e);for(let n=0;n<o.length;n++){const l=o[n];if(typeof l.callback=="function"){let r=this.get(e),s,c;typeof i<"u"&&arguments.length>=2?c=i:c=r,typeof a<"u"&&arguments.length>2?s=a:s=r,l.callback(e,c,s);}}}}const I=new Se(me),Me={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{S.showPanel(J.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){S.isTopWindow()&&re.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let i=this.$data.menuOption.findIndex(a=>a.key===e.key);i!==-1&&(this.$data.menuOption[i]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},S={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new y.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new y.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new y.Dictionary),this.__onceExecData},get scriptName(){return ue},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:me,attributeKeyName:U,attributeDefaultValueName:z},init(){this.initContentDefaultValue(),Me.init();},isTopWindow(){return q.top===q.self},initContentDefaultValue(){const t=a=>{if(!a.attributes||a.type==="button"||a.type==="forms"||a.type==="deepMenu")return;let o=new Map,n=a.attributes[U];if(n!=null){const s=a.attributes[z];o.set(n,s);}let l=a.attributes[$e];if(typeof l=="object"&&l&&Object.keys(l).forEach(s=>{o.set(s,l[s]);}),!o.size){C.warn(["请先配置键",a]);return}let r=a.attributes[he];if(typeof r=="function"){let s=r();if(typeof s=="boolean"&&!s)return}if(a.type==="switch"){let s=typeof a.disabled=="function"?a.disabled():a.disabled;typeof s=="boolean"&&s&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[s,c]of o.entries())this.setDefaultValue(s,c);},e=a=>{for(let o=0;o<a.length;o++){let n=a[o];t(n);let l=n.forms;l&&Array.isArray(l)&&e(l);}},i=[...J.getAllContentConfig()];for(let a=0;a<i.length;a++){let o=i[a];if(!o.forms)continue;const n=o.forms;n&&Array.isArray(n)&&e(n);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&C.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},setValue(t,e){I.set(t,e);},getValue(t,e){let i=I.get(t);return i??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){I.delete(t);},hasKey(t){return I.has(t)},addValueChangeListener(t,e){return I.addValueChangeListener(t,(a,o,n)=>{e(t,n,o);})},removeValueChangeListener(t){I.removeValueChangeListener(t);},triggerMenuValueChange(t,e,i){I.triggerValueChangeListener(t,i,e);},deleteExecMenuOnce(t){return this.$data.onceExecMenuData.delete(t),I.removeValueChangeListener(t)},deleteOnceExec(t){this.$data.onceExecData.delete(t);},exec(t,e,i,a=true){const o=this;let n;typeof t=="string"||Array.isArray(t)?n=()=>t:n=t;let l=false,r=n(),s=[];Array.isArray(r)?(l=true,s=r):s.push(r);let c=s.find(b=>!this.$data.contentConfigInitDefaultValue.has(b));if(c){C.warn(`${c} 键不存在`);return}let p=JSON.stringify(s);if(a){if(this.$data.onceExecMenuData.has(p))return;this.$data.onceExecMenuData.set(p,1);}let f=[],x=[],g=(b,$)=>{let V=[];Array.isArray($)||($=[$]),$.forEach(E=>{if(E!=null&&E instanceof HTMLStyleElement){V.push(E);return}}),f=f.concat(V);},u=b=>this.getValue(b),m=()=>{for(let b=0;b<f.length;b++)f[b].remove(),f.splice(b,1),b--;},w=()=>{let b=false;return typeof i=="function"?b=i(s):b=s.every($=>u($)),b},h=b=>{let $=w(),V=[];if($){let E=s.map(L=>this.getValue(L)),A=e({value:l?E:E[0],addStyleElement:(...L)=>g(true,...L)});Array.isArray(A)||(A=[A]),A.forEach(L=>{if(L!=null&&L instanceof HTMLStyleElement){V.push(L);return}});}m(),f=[...V];};return a&&s.forEach(b=>{let $=this.addValueChangeListener(b,(V,E,A)=>{h();});x.push($);}),h(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),a&&o.$data.onceExecMenuData.delete(p);},clearStoreStyleElements:()=>m(),removeValueChangeListener:()=>{x.forEach(b=>{this.removeValueChangeListener(b);});}}},execMenu(t,e,i=false,a=false){return this.exec(t,o=>e(o),o=>o.every(l=>{let r=!!this.getValue(l);return S.$data.contentConfigInitDisabledKeys.includes(l)&&(r=false,C.warn(`.execMenu${a?"Once":""} ${l} 被禁用`)),i&&(r=!r),r}),a)},execMenuOnce(t,e,i=false){return this.execMenu(t,e,i,true)},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},showPanel(t,e=`${ue}-设置`,i=false){let a=t.findIndex(n=>(typeof n.isBottom=="function"?n.isBottom():!!n.isBottom)&&n.id==="script-version")!==-1;!i&&!a&&t.push(...J.getDefaultBottomContentConfig());let o=_.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(n,l)=>{n.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(n,l)=>{n(),this.$data.$panel=null;}},width:D.setting.width,height:D.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o;}},T={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},y=G.noConflict(),d=H.noConflict(),_=Y,C=new y.Log(P,q.console||_e.console);let ue=P?.script?.name||void 0;Y.config.Utils.AnyTouch();const ge=false;C.config({debug:ge,logMaxCount:1e3,autoClearConsole:true,tag:true});k.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.getSetting().type;if(e==="loading")return  false;const i=t.getSetting().content;return e==="warning"?C.warn(i):e==="error"?C.error(i):C.info(i),true},get position(){return S.getValue(T.qmsg_config_position.key,T.qmsg_config_position.defaultValue)},get maxNums(){return S.getValue(T.qmsg_config_maxnums.key,T.qmsg_config_maxnums.defaultValue)},get showReverse(){return S.getValue(T.qmsg_config_showreverse.key,T.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=G.getMaxZIndex(),e=Y.config.InstanceUtils.getPopsMaxZIndex().zIndex;return G.getMaxValue(t,e)+100}});_.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=G.getMaxZIndex(void 0,void 0,i=>{if(i?.classList?.contains("qmsg-shadow-container")||i?.closest("qmsg")&&i.getRootNode()instanceof ShadowRoot)return  false}),e=Y.config.InstanceUtils.getPopsMaxZIndex().zIndex;return G.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const re=new y.GM_Menu({GM_getValue:ne,GM_setValue:W,GM_registerMenuCommand:ve,GM_unregisterMenuCommand:be}),le=new y.Httpx({xmlHttpRequest:Ce,logDetails:ge});le.interceptors.request.use(t=>t);le.interceptors.response.use(void 0,t=>(C.error("拦截器-请求错误",t),t.type==="onabort"?k.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?k.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?k.error("请求超时",{consoleLogContent:true}):k.error("其它错误",{consoleLogContent:true}),t));q.Object.defineProperty,q.Function.prototype.apply,q.Function.prototype.call,q.Element.prototype.appendChild,q.setTimeout;y.addStyle.bind(y);H.selector.bind(H);H.selectorAll.bind(H);const xe=new y.GM_Cookie,J={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new y.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${P?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,i){let a=P?.script?.supportURL||P?.script?.namespace;return typeof a=="string"&&y.isNotNull(a)&&window.open(a,"_blank"),false}}]}};let we=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const K=ye;we(K);we(xe);const se=["document.cookie","cookieStore","GM_cookie","GM.cookie"];class ce{__apiName;constructor(e){if(typeof e=="string"&&!se.includes(e))throw new Error(`未知的apiName：${e}`);this.__apiName=e;}get cookieManagerApiName(){let e=S.getValue("cookie-manager-api","document.cookie");return this.__apiName||e}get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(e,i){K.list(e,a=>{i(a);});},set(e,i){K.set(e,a=>{i(a);});},delete(e,i){K.delete(e,a=>{i(a);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(e,i){X.cookie.list().then(a=>{i(a);});},set(e,i){X.cookie.set(e).then(a=>{i(a??null);}).catch(a=>{i(a);});},delete(e,i){X.cookie.delete(e).then(a=>{i(a??null);}).catch(a=>{i(a);});}};if(this.cookieManagerApiName==="cookieStore"){let e=q.cookieStore;return {list(i,a){e.getAll().then(o=>{a(o);}).catch(o=>{C.error(o),k.error(o.toString());});},set(i,a){e.set(i).then(()=>{a();}).catch(o=>{a(o);});},delete(i,a){e.delete(i).then(o=>{a();}).catch(o=>{a(o);});}}}else return xe}queryAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},a=>{let o=a||[];o=o.sort((n,l)=>n.name.localeCompare(l.name)),e(o);});}catch(a){C.error(a),k.error(a.toString()),i(a);}})}deleteAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},async a=>{const o=a||[],n={success:0,error:0};for(let l=0;l<o.length;l++){const r=o[l];await new Promise(c=>{this.deleteCookie(r).then(p=>{c(p);});})?n.error++:n.success++;}e(n);});}catch(a){C.error(a),k.error(a.toString()),i(a);}})}addCookie(e){return new Promise((i,a)=>{try{Reflect.deleteProperty(e,"hostOnly"),this.cookieManager.set(e,o=>{i(o);});}catch(o){C.error(o),k.error(o.toString()),a(o);}})}deleteCookie(e){return new Promise((i,a)=>{try{this.cookieManager.delete(e,o=>{i(o);});}catch(o){C.error(o),k.error(o.toString()),a(o);}})}updateCookie(e){return new Promise(async(i,a)=>{let o;try{if(this.cookieManagerApiName==="document.cookie"||this.cookieManagerApiName==="cookieStore"){let l=await this.deleteCookie(e);if(l)throw new TypeError(l.toString())}let n=await this.addCookie(e);if(n)throw new TypeError(n.toString())}catch(n){o=n;}finally{i(o);}})}}const M=new ce,Z={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new G.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,i){let a;this.hasStorageApi(t)?a=this.getStorageApi(t):a=i,this.setComponentsStorageApiProperty(e,a);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,R,e);}},O=function(t,e,i,a,o,n,l,r){let s={text:t,type:"switch",description:o,disabled:l,attributes:{},props:{},getValue(){return this.props[R].get(e,i)},callback(c,p){let f=!!p;if(C.success(`${f?"开启":"关闭"} ${t}`),typeof a=="function"&&a(c,f))return;this.props[R].set(e,f);},afterAddToUListCallBack:n};return Reflect.set(s.attributes,U,e),Reflect.set(s.attributes,z,i),Z.initComponentsStorageApi("switch",s,{get(c,p){return S.getValue(c,p)},set(c,p){S.setValue(c,p);}}),s},de={beforeEdit(t,e){const i=M.cookieManagerApiName;return i==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(i==="GM_cookie"||i==="GM.cookie")&&e&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=M.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}};let j=(t,e,i,a)=>({text:t,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return e()},callback(n,l){i(l);},placeholder:"",disabled:!!a}),Ve=(t,e,i,a)=>({text:t,type:"textarea",props:{},attributes:{},description:"",placeholder:"",getValue(){return e()},disabled:a,callback:function(n,l){i(l);}}),ee=(t,e,i,a,o)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return i()},callback(l,r,s){a(r);},data:typeof e=="function"?e():e,disabled:false});const ie={init(){},showView(t,e){let i=!!t,a={name:"",value:"",domain:window.location.hostname,path:"/",secure:false,session:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+3600*24*30*1e3},o=y.assign({},a,true);y.assign(o,t??{},true),o=de.beforeEdit(o,i);let l=_.confirm({title:{text:i?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:i?"编辑":"添加",async callback(h,v){if(ie.validCookieInfo(o)){if(o.value=encodeURIComponent(o.value),o=de.afterEdit(o),i){let $=await M.updateCookie(o);$?k.error($.toString()):(k.success("修改成功"),h.close());}else {let $=await M.addCookie(o);$?k.error($.toString()):(k.success("添加成功"),h.close());}typeof e=="function"&&e(o);}}},cancel:{text:"取消"}},mask:{enable:true},width:D.settingMiddle.width,height:"auto",style:`
                ${_.config.cssText.panelCSS}

                .pops-panel-input input:disabled{
                    color: #b4b4b4;
                }
                .pops-confirm-content{
                    padding: 10px;
                }
                .pops-confirm-content li{
                    display: flex;
                    flex-direction: column;
                }
                .pops-panel-item-left-text{
                    margin-bottom: 5px;
                }
                .pops-panel-input.pops-input-disabled{
                    border: 1px solid #dcdfe6;
                }
				.pops-panel-textarea textarea{
					resize: auto;
					border-radius: 4px;
				}
				#cookie-item-property-expires{
					border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
					border-radius: 4px;
					background-color: #ffffff;
					width: 100%;
					height: 32px;
					padding: 0px 8px;
				}
				#cookie-item-property-expires:hover{
					border: 1px solid #c0c4cc
				}
				#cookie-item-property-expires:focus,
				#cookie-item-property-expires:focus-within{
					outline: 0;
					border: 1px solid #409eff;
					border-radius: 4px;
					box-shadow: none;
				}
            `}).$shadowRoot.querySelector(".pops-confirm-content"),r=_.config.PanelHandlerComponents(),s=r.createSectionContainerItem_input(j("name",()=>o.name,h=>o.name=h,i)),c=r.createSectionContainerItem_textarea(Ve("value",()=>o.value,h=>o.value=h)),p=r.createSectionContainerItem_input(j("domain",()=>o.domain,h=>o.domain=h)),f=r.createSectionContainerItem_input(j("path",()=>o.path,h=>o.path=h)),x;o.session?x=r.createSectionContainerItem_input(j("expires",()=>"会话",h=>{},true)):x=r.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(h){let v=d.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),b=v.querySelector("#cookie-item-property-expires");return b.valueAsNumber=o.expirationDate,d.on(b,["change","input","propertychange"],$=>{y.preventEvent($),o.expirationDate=b.valueAsNumber;}),v}});let g=r.createSectionContainerItem_select(ee("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>o.httpOnly,h=>o.httpOnly=h)),u=r.createSectionContainerItem_select(ee("secure",[{text:"true",value:true},{text:"false",value:false}],()=>o.secure,h=>o.secure=h)),m=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];M.cookieManagerApiName==="cookieStore"&&(m=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let w=r.createSectionContainerItem_select(ee("sameSite",m,()=>o.sameSite,h=>o.sameSite=h));d.append(l,[s,c]),M.cookieManagerApiName==="GM_cookie"||M.cookieManagerApiName==="GM.cookie"?d.append(l,[p,f,x,g,u,w]):M.cookieManagerApiName==="cookieStore"&&d.append(l,[p,f,x,w]);},validCookieInfo(t){return t.name==null||t.name==""?(k.error("name不能为空"),false):t.domain==null||t.domain==""?(k.error("domain不能为空"),false):t.path==null||t.path==""?(k.error("path不能为空"),false):true}},F=function(t,e,i,a,o,n,l){let r=[];typeof a=="function"?r=a():r=a;let s={text:t,type:"select",description:n,attributes:{},props:{},getValue(){return this.props[R].get(e,i)},callback(c,p,f){let x=p;if(C.info(`选择：${f}`),typeof o=="function"&&o(c,x,f))return;this.props[R].set(e,x),typeof l=="function"&&l(c,x,f);},data:r};return Reflect.set(s.attributes,U,e),Reflect.set(s.attributes,z,i),Z.initComponentsStorageApi("select",s,{get(c,p){return S.getValue(c,p)},set(c,p){S.setValue(c,p);}}),s},te=function(t,e,i,a,o,n="",l,r,s,c){let p={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:a,afterAddToUListCallBack:s,getValue(){return this.props[R].get(e,i)},callback(f,x,g){this.props[R].set(e,x);},placeholder:n};return Reflect.set(p.attributes,U,e),Reflect.set(p.attributes,z,i),Z.initComponentsStorageApi("input",p,{get(f,x){return S.getValue(f,x)},set(f,x){S.setValue(f,x);}}),p},Re=function(t,e,i,a,o,n="",l,r){let s={text:t,type:"textarea",attributes:{},props:{},description:a,placeholder:n,disabled:l,getValue(){let p=this.props[R].get(e,i);return Array.isArray(p)?p.join(`
`):p},callback(c,p){this.props[R].set(e,p);}};return Reflect.set(s.attributes,U,e),Reflect.set(s.attributes,z,i),Z.initComponentsStorageApi("switch",s,{get(c,p){return S.getValue(c,p)},set(c,p){S.setValue(c,p);}}),s};class Ee{option;constructor(e){this.option=e;}async showView(){let e=_.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:y.assign({ok:{callback:async()=>{await n();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${_.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),i=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let a=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());a.appendChild(o);const n=async()=>{(await this.option.onsubmit(i,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class Ae{option;constructor(e){this.option=e;}showView(){let e=_.alert({title:{text:this.option.title,position:"center"},content:{text:`
                <div class="filter-container"></div>
                `},btn:{ok:{text:"关闭",type:"default"}},drag:true,mask:{enable:true},width:window.innerWidth>500?"350px":"80vw",height:window.innerHeight>500?"300px":"70vh",style:`
            .filter-container{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .filter-container button{
                text-wrap: wrap;
                padding: 8px;
                height: auto;
                text-align: left;
            }
            `}),i=e.$shadowRoot.querySelector(".filter-container"),a=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let n=d.createElement("button",{innerText:o.name},{type:"button"}),l=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await o.filterCallBack(s.data)?d.show(s.$el,false):d.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};d.on(n,"click",async r=>{y.preventEvent(r),!(typeof o.callback=="function"&&!await o.callback(r,l))&&await l();}),a.appendChild(n);}),i.appendChild(a);}}class De{option;constructor(e){this.option=e;}async showView(e){let i=_.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async n=>{this.showEditView(false,await this.option.getAddData(),i.$shadowRoot);}},close:{enable:true,callback(n){i.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:(n,l)=>{typeof this.option?.bottomControls?.filter?.callback=="function"&&this.option.bottomControls.filter.callback();let r=()=>Array.from(i.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),s=l.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");d.text(s).includes("取消")?(r().forEach(c=>{d.show(c,false);}),d.text(s,"过滤")):new Ae({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack(){d.text(s,"取消过滤");},getAllRuleInfo:()=>r().map(p=>({data:this.parseRuleItemElement(p).data,$el:p}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:n=>{let l=_.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async r=>{if(C.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){k.error("清理失败");return}else k.success("清理成功");await this.updateDeleteAllBtnText(i.$shadowRoot),this.clearContent(i.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${_.config.cssText.panelCSS}
            
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
            `}),a=await this.option.data(),o=false;for(let n=0;n<a.length;n++){let l=a[n],r=await this.appendRuleItemElement(i.$shadowRoot,l);(typeof e=="function"?e(l):true)||(o=true,r.forEach(c=>{d.hide(c,false);}));}if(o){let n=i.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");d.text(n,"取消过滤");}}showEditView(e,i,a,o,n,l){let r=async c=>{if(c){if(typeof l=="function"){let p=await this.option.getData(i);l(p);}}else if(e||await this.option.deleteData(i),typeof n=="function"){let p=await this.option.getData(i);n(p);}};new Ee({title:e?"编辑":"添加",data:()=>i,dialogCloseCallBack:r,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,p)=>{c.close(),await r(false);}},close:{callback:async(c,p)=>{c.close(),await r(false);}}},onsubmit:async(c,p)=>{let f=await this.option.itemControls.edit.onsubmit(c,e,p);return f.success?e?(k.success("修改成功"),a&&await this.updateRuleItemElement(f.data,o,a)):a&&await this.appendRuleItemElement(a,f.data):e&&C.error("修改失败"),f},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let i=e.querySelector(".rule-view-container"),a=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:i,$deleteBtn:a}}parseRuleItemElement(e){let i=e.querySelector(".rule-controls-enable"),a=i.querySelector(".pops-panel-switch"),o=i.querySelector(".pops-panel-switch__input"),n=i.querySelector(".pops-panel-switch__core"),l=e.querySelector(".rule-controls-edit"),r=e.querySelector(".rule-controls-delete");return {$enable:i,$enableSwitch:a,$enableSwitchInput:o,$enableSwitchCore:n,$edit:l,$delete:r,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,i){let a=await this.option.getDataItemName(e),o=d.createElement("div",{className:"rule-item",innerHTML:`
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
					${_.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${_.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);let n="pops-panel-switch-is-checked";const{$enable:l,$enableSwitch:r,$enableSwitchCore:s,$enableSwitchInput:c,$delete:p,$edit:f}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(d.on(s,"click",async x=>{let g=false;r.classList.contains(n)?(r.classList.remove(n),g=false):(r.classList.add(n),g=true),c.checked=g,await this.option.itemControls.enable.callback(e,g);}),await this.option.itemControls.enable.getEnable(e)&&r.classList.add(n)):l.remove(),this.option.itemControls.edit.enable?d.on(f,"click",x=>{y.preventEvent(x),this.showEditView(true,e,i,o,g=>{e=null,e=g;});}):f.remove(),this.option.itemControls.delete.enable?d.on(p,"click",x=>{y.preventEvent(x);let g=_.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async u=>{C.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(k.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(i),g.close()):k.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),o}async appendRuleItemElement(e,i){let{$container:a}=this.parseViewElement(e),o=[],n=Array.isArray(i)?i:[i];for(let l=0;l<n.length;l++){let r=n[l],s=await this.createRuleItemElement(r,e);a.appendChild(s),o.push(s);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:i}=this.parseViewElement(e);let a=await this.option.data();await this.appendRuleItemElement(e,a),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,i,a){let o=await this.createRuleItemElement(e,a);i.after(o),i.remove();}clearContent(e){const{$container:i}=this.parseViewElement(e);d.html(i,"");}setDeleteBtnText(e,i,a=false){const{$deleteBtn:o}=this.parseViewElement(e);a?d.html(o,i):d.text(o,i);}async updateDeleteAllBtnText(e){let i=await this.option.data();this.setDeleteBtnText(e,`清空所有(${i.length})`);}}const N={$key:{STORAGE_KEY:"cookie-rule"},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList=[],this.$data.matchedRuleList=this.getMatchedRuleList(),this.$data.matchedRuleList.length&&re.add({key:"matched-cookie-rule-list",text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:false,autoReload:false,showText(t,e){return t},callback(t){console.log(N.$data.matchedRuleList),alert(`以下是命中的规则名：
`+N.$data.matchedRuleList.map(e=>e.name).join(`
`));}});},getMatchedRuleList(t=window.location.href){let e=this.getData(),i=[];return e.forEach(a=>{if(!a.enable)return;let o=window.location.href,n=a.data.url;if(a.data.enableRegExpToMatchUrl){if(!new RegExp(n,"i").test(o))return}else if(!o.includes(n))return;i.push(a);}),i},showView(){let t=_.config.PanelHandlerComponents();function e(o,n){return {get(l,r){return Reflect.get(o,l)??r},set(l,r){Reflect.set(o,l,r);}}}const i=this.getMatchedRuleList();new De({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.updateData(o),deleteData:o=>this.deleteData(o),getData:o=>this.getData().find(r=>r.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,n)=>{o.enable=n,this.updateData(o);}},edit:{enable:true,getView:(o,n)=>{let l=document.createDocumentFragment(),r=this.getTemplateData();n||(o=r);let s=O("启用","enable",r.enable);Reflect.set(s.props,R,e(o));let c=t.createSectionContainerItem_switch(s),p=te("规则名称","name","",r.name,void 0,"必填");Reflect.set(p.props,R,e(o));let f=t.createSectionContainerItem_input(p),x=F("Cookie管理Api","execApiName",r.data.execApiName,[{text:"（当前）"+M.cookieManagerApiName,value:"use-global"},...se.map(pe=>({text:pe,value:pe}))],void 0,"操作Cookie的Api函数");Reflect.set(x.props,R,e(o.data));let g=t.createSectionContainerItem_select(x),u=te("网址","url",r.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(u.props,R,e(o.data));let m=t.createSectionContainerItem_input(u),w=O("启用正则匹配网址","enableRegExpToMatchUrl",r.data.enableRegExpToMatchUrl);Reflect.set(w.props,R,e(o.data));let h=t.createSectionContainerItem_switch(w),v=te("Cookie名称","cookieName",r.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(v.props,R,e(o.data));let b=t.createSectionContainerItem_input(v),$=O("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",r.data.enableRegExpToMatchCookieName);Reflect.set($.props,R,e(o.data));let V=t.createSectionContainerItem_switch($),E=F("操作模式","operationMode",r.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(E.props,R,e(o.data));let A=t.createSectionContainerItem_select(E),L=Re("备注","remark",r.data.remark);Reflect.set(L.props,R,e(o.data));let ke=t.createSectionContainerItem_textarea(L);return l.append(c,f,g,m,h,b,V,A,ke),l},onsubmit:(o,n,l)=>{let r=o.querySelectorAll(".rule-form-ulist > li"),s=this.getTemplateData();n&&(s.uuid=l.uuid);try{return r.forEach(c=>{let p=Reflect.get(c,"__formConfig__"),f=Reflect.get(p,"attributes"),x=Reflect.get(c,R),g=Reflect.get(f,U),u=Reflect.get(f,z),m=x.get(g,u);Reflect.has(s,g)?Reflect.set(s,g,m):Reflect.has(s.data,g)?Reflect.set(s.data,g,m):C.error(`${g}不在数据中`);}),s.name.trim()===""?(k.error("规则名称不能为空"),{success:!1,data:s}):s.data.url.trim()===""?(k.error("网址不能为空"),{success:!1,data:s}):s.data.cookieName.trim()===""?(k.error("Cookie名称不能为空"),{success:!1,data:s}):n?{success:this.updateData(s),data:s}:{success:this.addData(s),data:s}}catch(c){return C.error(c),{success:false,data:s}}finally{this.init();}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
						max-width: 100px;
					}
                    `},delete:{enable:true,deleteCallBack:o=>this.deleteData(o)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(o){return o.enable}},{name:"过滤-未启用",filterCallBack(o){return !o.enable}},{name:"过滤-当前网站执行",filterCallBack(o){return i.some(n=>n.uuid===o.uuid)}}]}}}).showView();},getTemplateData(){return {uuid:y.generateUUID(),enable:true,name:"",data:{url:"",execApiName:"use-global",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return ne(this.$key.STORAGE_KEY,[])},setData(t){W(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(a=>a.uuid==t.uuid)===-1?(e.push(t),W(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),a=false;return i!==-1&&(a=true,e[i]=t),this.setData(e),a},deleteData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),a=false;return i!==-1&&(a=true,e.splice(i,1)),this.setData(e),a},clearData(){fe(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),i=new Blob([JSON.stringify(e,null,4)]),a=window.URL.createObjectURL(i),o=d.createElement("a");o.href=a,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(a);},1500);},importRule(){let t=_.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:D.info.width,height:D.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),i=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");d.on(e,"click",a=>{y.preventEvent(a),t.close();let o=d.createElement("input",{type:"file",accept:".json"});d.on(o,["propertychange","input"],n=>{if(!o.files?.length)return;let l=o.files[0],r=new FileReader;r.onload=()=>{let s=y.toJSON(r.result);if(!Array.isArray(s)){C.error("不是正确的规则文件",s),k.error("不是正确的规则文件");return}this.setData(s),k.success(`成功导入 ${s.length}条规则`);},r.readAsText(l,"UTF-8");}),o.click();}),d.on(i,"click",a=>{y.preventEvent(a),t.close(),_.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(o,n)=>{let l=o.text;if(y.isNull(l)){k.error("请填入完整的url");return}let r=await le.get(l);if(!r.status)return;let s=y.toJSON(r.data.responseText);if(!Array.isArray(s)){C.error("不是正确的规则文件",r,s),k.error("不是正确的规则文件");return}this.setData(s),o.close(),k.success(`成功导入 ${s.length}条规则`);}}},width:D.info.width,height:"auto"});});}},B={encrypt(t,e){return Q.AES.encrypt(t,e).toString()},decrypt(t,e){return Q.AES.decrypt(t,e).toString(Q.enc.Utf8)},formatCookie(t,e,i){let a="";if(e==="header_string")a=t.map(o=>{let n=o.value;return `${o.name}=${n}; `}).join("");else if(e==="json")a=JSON.stringify({api:M.cookieManagerApiName,hostname:window.location.hostname,data:t},null,2);else throw new Error("不支持的格式化类型："+e);return i&&(a=this.encrypt(a,i)),a},showExportDialog(){let t=_.confirm({title:{text:"导出 Cookie",position:"center"},content:{text:`
						<p class="tip-text cookie-format-type-tip-text">您希望以哪种格式导出 Cookie？</p>
						<div class="cookie-format-type-container">
							<div class="cookie-format-type-item">
								<input id="cookie-format-header_string" type="radio" name="format" value="header_string">
								<label for="cookie-format-header_string">Header String</label>
							</div>
							<div class="cookie-format-type-item">
								<input id="cookie-format-json" type="radio" name="format" value="json">
								<label for="cookie-format-json">JSON</label>
							</div>
						</div>
						<p class="tip-text export-example-code-tip-text">示例</p>
						<div class="export-example-code-text-container">
							<pre></pre>
						</div>
						<div class="cookir-format-encode-pwd-container">
							<label for="hostOnly">用于加密 Cookie 的密码</label>
							<input id="encode-pwd" type="password" placeholder="用于加密 Cookie 的密码" value="">
							<p>如果您希望在导出前加密 Cookie，请输入密码（可选）。</p>
						</div>
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{merge:true,position:"space-between",ok:{text:"导出",async callback(r,s){let c=ae.$data.cookieList;if(c.length===0){k.warning("Cookie为空");return}let p=B.formatCookie(c,l.exportType,l.encodePwd);const f=new Blob([p],{type:"text/plain"}),x=URL.createObjectURL(f);d.createElement("a",{download:`${window.location.hostname}_${l.exportType}_${M.cookieManagerApiName}_${Date.now()}.txt`,href:x,target:"_blank"}).click(),setTimeout(()=>{URL.revokeObjectURL(x);},500),r.close();}},other:{enable:true,text:"导出至剪贴板",type:"xiaomi-primary",async callback(r,s){let c=ae.$data.cookieList;if(c.length===0){k.warning("Cookie为空");return}let p=B.formatCookie(c,l.exportType,l.encodePwd);await y.setClip(p)?k.success("复制成功"):k.error("复制失败"),r.close();}}},style:`
					${_.config.cssText.panelCSS}

					.pops-content{
						padding: 20px;
					}
					.cookie-format-type-container{
						display: flex;
						gap: 10px;
						margin: 10px 0px;
						align-items: center;
						flex-wrap: wrap;
						justify-content: space-between;
					}
					.cookie-format-type-item input[type="radio"]{
						width: 1rem;
						height: 1rem;
					}
					.export-example-code-text-container{
						padding: 10px;
						background-color: rgb(209 213 219 / 1);
						border-radius: 10px;
						width: 100%;
						margin: 1rem 0px;
					}
					.export-example-code-text-container pre{
						font-feature-settings: normal;
						font-variation-settings: normal;
						font-size: 1em;
						margin: 0;
						white-space: break-spaces;
					}
					.cookie-format-type-container label{
						color: rgb(17 24 39 / 1);
					}
					.cookir-format-encode-pwd-container label{
						color: #111827;
					}
					.cookie-format-type-tip-text,
					.export-example-code-tip-text,
					.cookir-format-encode-pwd-container label{
						font-weight: 600;
					}
					.cookir-format-encode-pwd-container input{
						border-radius: 0.5rem;
						width: 100%;
						border: 1px solid #d1d5db;
						background-color: #f9fafb;
						padding: 0.625rem;
						margin: 0.65rem 0px;
						font-size: 12px;
						color: #111827;
					}
					.cookir-format-encode-pwd-container p{
    					color: #6b7280;
						font-size: 12px;
					}
				`}),e=t.$shadowRoot.querySelector(".export-example-code-text-container pre"),i=t.$shadowRoot.querySelector("#cookie-format-header_string"),a=t.$shadowRoot.querySelector("#cookie-format-json"),o=t.$shadowRoot.querySelector("#encode-pwd");const n={key:"cookie-backup-export-dialog-config",getConfig(){return S.getValue(this.key,{exportType:"header_string",encodePwd:""})},saveConfig(){let r="header_string";a.checked&&(r="json"),S.setValue(this.key,{exportType:r,encodePwd:d.val(o)}),l=this.getConfig();}};let l=n.getConfig();d.on(i,"input",()=>{const r=[{name:"_ga",value:"GA1.2.123456789.987654321",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"PHPSESSID",value:"28f2d88ee9322cfd2e4f1e",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"csrftoken",value:"abcdef123456",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"logged_in",value:"true",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false}];let s=this.formatCookie(r,"header_string");d.text(e,s),n.saveConfig();}),d.on(a,"input",()=>{const r=[{name:"sessionId",value:"abc123xyz456",domain:".example.com",path:"/",secure:true,httpOnly:true,sameSite:"lax",expirationDate:1713543600,hostOnly:false,session:false}];let s=this.formatCookie(r,"json");d.text(e,s),n.saveConfig();}),d.on(o,["input","propertychange"],()=>{n.saveConfig();}),l.exportType==="header_string"?i.click():l.exportType==="json"&&a.click(),d.val(o,l.encodePwd);},showImportDialog(){let t=_.confirm({title:{text:"导入 Cookie",position:"center"},content:{text:`
						<p class="tip-text cookie-format-type-tip-text">您希望如何导入？</p>
						<div class="import-cookie-type-container">
							<div class="import-cookie-type-item">
								<input id="import-cookie-import_from_text" type="radio" name="format" value="import_from_text">
								<label for="import-cookie-import_from_text">Use text</label>
							</div>
							<div class="import-cookie-type-item">
								<input id="import-cookie-import_from_file" type="radio" name="format" value="import_from_file">
								<label for="import-cookie-import_from_file">Use a file</label>
							</div>
						</div>
						<div class="import-cookie-value-container">
							<div class="import-cookie-value-text">
								<label>Cookie value</label>
								<textarea rows="5" placeholder="Header string/JSON"></textarea>
							</div>
							<div class="import-cookie-value-file">
								<label>选择要导入的文件</label>
								<input accept=".txt, .json" type="file">
							</div>
						</div>
						<div class="cookie-format-decode-pwd-container">
							<label for="hostOnly">用于解密 Cookie 的密码</label>
							<input id="decode-pwd" type="password" placeholder="用于解密 Cookie 的密码" value="">
							<p>如果 Cookie 受加密保护，请输入解密密码（可选）。</p>
						</div>
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{ok:{text:"导入",async callback(f,x){try{const g=p.decodePwd;let u=p.value;g.trim()===""||(u=B.decrypt(u,g));const m=y.toJSON(u);if(Array.isArray(m)){C.info(`使用${M.cookieManagerApiName}导入cookie数据`);for(const w of m)await M.updateCookie(w);}else if(typeof m=="object"&&Object.keys(m).length&&Array.isArray(m.data)){const w=new ce(m.api);C.info(`使用${w.cookieManagerApiName}导入cookie数据`);for(const h of m.data)await w.updateCookie(h);}else if(typeof m=="object"&&!Object.keys(m).length){let w=new y.GM_Cookie;C.info(`使用${M.cookieManagerApiName}导入cookie数据`);let h=w.parseCookie(u);for(const v of h)await M.updateCookie({name:v.key,value:v.value,domain:window.location.hostname,path:"/",sameSite:"unspecified",secure:!1,session:!1,hostOnly:!0,httpOnly:!1});}else {C.error(u,m),k.error("cookie格式不符合");return}f.close();}catch(g){k.error(g.toString());}}}},style:`
					${_.config.cssText.panelCSS}

					.pops-content{
						padding: 20px;
					}
					.import-cookie-type-container{
						display: flex;
						gap: 10px;
						margin: 10px 0px;
						align-items: center;
						flex-wrap: wrap;
						justify-content: space-between;
					}
					.import-cookie-type-item input[type="radio"]{
						width: 1rem;
						height: 1rem;
					}
					.export-example-code-text-container{
						padding: 10px;
						background-color: rgb(209 213 219 / 1);
						border-radius: 10px;
						width: 100%;
						margin: 1rem 0px;
					}
					.export-example-code-text-container pre{
						font-feature-settings: normal;
						font-variation-settings: normal;
						font-size: 1em;
						margin: 0;
						white-space: break-spaces;
					}
					.import-cookie-type-container label{
						color: rgb(17 24 39 / 1);
					}
					.cookie-format-decode-pwd-container label{
						color: #111827;
					}
					.import-cookie-value-text label,
					.import-cookie-value-file label,
					.cookie-format-type-tip-text,
					.cookie-format-decode-pwd-container label{
						font-weight: 600;
					}
					.cookie-format-decode-pwd-container input{
						border-radius: 0.5rem;
						width: 100%;
						border: 1px solid #d1d5db;
						background-color: #f9fafb;
						padding: 0.625rem;
						margin: 0.65rem 0px;
						font-size: 12px;
						color: #111827;
					}
					.cookie-format-decode-pwd-container p{
    					color: #6b7280;
						font-size: 12px;
					}

					.import-cookie-value-text{
						display: flex;
						flex-direction: column;
					}
					.import-cookie-value-text label{

					}
					.import-cookie-value-text textarea{
						font-size: 0.875rem;
						line-height: 1.25rem;
						padding: 0.625rem;
						color: rgb(17 24 39 / 1);
						background-color: rgb(249 250 251 / 1);
						border: 1px solid rgb(209 213 219 / 1);
						border-radius: 0.5rem;
						width: 100%;
						margin: 10px 0px;
					}
					.import-cookie-value-file{
						display: flex;
						flex-direction: column;
					}
					.import-cookie-value-file label{

					}
					.import-cookie-value-file input{
						border: 1px solid #d1d5db;
						border-radius: 0.5rem;
						height: 2.25rem;
						width: 100%;
						margin: 1rem 0px;
					}
					.import-cookie-value-file input:hover,					
					.import-cookie-value-file input::file-selector-button:hover{
						cursor: pointer;
					}
					.import-cookie-value-file input::file-selector-button{
						background-color: #1E2939;
						color: #ffffff;
						height: 100%;
						box-sizing: border-box;
					}
					.import-cookie-value-file input::file-selector-button:hover{
						background-color: #364153;
					}
				`}),e="",i=t.$shadowRoot.querySelector("#import-cookie-import_from_text"),a=t.$shadowRoot.querySelector("#import-cookie-import_from_file");t.$shadowRoot.querySelector(".import-cookie-value-container");let o=t.$shadowRoot.querySelector(".import-cookie-value-text"),n=o.querySelector("textarea"),l=t.$shadowRoot.querySelector(".import-cookie-value-file"),r=l.querySelector("input"),s=t.$shadowRoot.querySelector("#decode-pwd");const c={key:"cookie-backup-import-dialog-config",getConfig(){let f=S.getValue(this.key,{importType:"import_from_text",decodePwd:"",value:""});return f.importType==="import_from_text"?f.value=n.value:f.importType==="import_from_file"&&(f.value=e),f},saveConfig(){let f="import_from_text";a.checked&&(f="import_from_file"),S.setValue(this.key,{importType:f,decodePwd:d.val(s)}),p=this.getConfig();}};let p=c.getConfig();d.on(i,"input",()=>{c.saveConfig(),r.value="",e="",d.hide(l,false),d.show(o,false);}),d.on(a,"input",()=>{c.saveConfig(),n.value="",d.hide(o,false),d.show(l,false);}),d.on(n,["input","propertychange"],y.debounce(()=>{c.saveConfig();})),d.on(r,["change","input"],f=>{const x=r.files?.[0];if(x){const g=new FileReader;g.onload=function(u){const m=u.target.result;typeof m=="string"&&(e=m,c.saveConfig());},g.readAsText(x);}}),d.on(s,["input","propertychange"],async f=>{c.saveConfig();}),p.importType==="import_from_text"?i.click():p.importType==="import_from_file"&&a.click(),d.val(s,p.decodePwd);}},ae={$data:{cookieList:[]},init(){this.registerMenu();},async showView(){const t=_.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
                    <div class="cookie-wrapper">
                        <div class="cookie-search-wrapper">
                            <div class="cookie-search-inner">
                                <input type="text" placeholder="搜索Cookie名称">
                            </div>
                            <div class="cookie-search-setting">
                                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                                    <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="cookie-control-wrapper">
                            <button class="cookie-control-refresh" type="button" data-type="default">刷新</button>
                            <button class="cookie-control-add" type="button" data-type="default">添加</button>
                            <button class="cookie-control-export" type="button" data-type="default">导出</button>
                            <button class="cookie-control-import" type="button" data-type="default">导入</button>
                            <button class="cookie-control-clear-all" type="button" data-type="default">删除</button>
                            <button class="cookie-control-rule-manager" type="button" data-type="default">规则管理</button>
                            <div class="cookie-setting"> 
                                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                                    <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="cookie-list-wrapper">
                        </div>
                    </div>
                `,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:D.setting.width,height:D.setting.height,style:`
                ${_.config.cssText.panelCSS}
                .cookie-wrapper{
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    gap: 10px;
                }
                .cookie-control-wrapper{
                    display: flex;
					flex-wrap: wrap;
                    padding: 0px 10px;
                    gap: 5px;
                    --button-margin-left: 0px;
                }
                .cookie-search-wrapper{
                    display: flex;
                    align-items: center;
                }
                .cookie-search-inner{
                    width: 100%;
                    padding: 0px 10px;
                }
                .cookie-search-inner input{
                    height: 30px;
                    padding: 5px 8px;
                    width: 100%;
					border-radius: 6px;
                }
				.cookie-search-inner input::placeholder{
					display: flex;
					align-items: baseline;
				}
                .cookie-search-inner input:focus-visible{
                    outline: none;
                }
                .cookie-setting,
                .cookie-search-setting{
                    display: flex;
                    align-items: center;
                }
                .cookie-setting svg,
                .cookie-search-setting svg{
                    cursor: pointer;
                }
                .cookie-list-wrapper{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .cookie-item{
                    display: flex;
                    flex-direction: column;
                    padding: 10px 10px;
                    margin: 0px 10px;
                    background: #f1efef;
                    border-radius: 10px;
                    gap: 5px;
                    box-sizing: border-box;
                    width: 100%;
                }
                .cookie-item-group{
                    display: flex;
                    align-items: center;
                }
                .cookie-item-group-left{
                    width: 100px;
                    min-width: 100px;
                    max-width: 100px;
                    text-transform: capitalize
                }
                .cookie-item-group-control .cookie-item-group-right{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .cookie-item-group-control .cookie-item-group-control-copy,
                .cookie-item-group-control .cookie-item-group-control-edit,
                .cookie-item-group-control .cookie-item-group-control-delete{
                    display: flex;
                    align-items: center;
                }
                .cookie-item-group-control .cookie-item-group-control-delete svg{
                    width: 16px;
                    height: 16px;
                }
                .cookie-item-group-control svg{
                    cursor: pointer;
                }
            `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),i=t.$shadowRoot.querySelector(".cookie-search-setting"),a=t.$shadowRoot.querySelector(".cookie-control-refresh"),o=t.$shadowRoot.querySelector(".cookie-control-add"),n=t.$shadowRoot.querySelector(".cookie-control-export"),l=t.$shadowRoot.querySelector(".cookie-control-import"),r=t.$shadowRoot.querySelector(".cookie-control-clear-all"),s=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),c=t.$shadowRoot.querySelector(".cookie-setting"),p=t.$shadowRoot.querySelector(".cookie-list-wrapper");let f=u=>{const m=d.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":u}),w=[{leftText:"name",rightText:u.name},{leftText:"value",rightText:S.getValue("decode-cookie-value")?decodeURIComponent(u.value):encodeURIComponent(u.value)}];M.cookieManagerApiName==="GM_cookie"||M.cookieManagerApiName==="GM.cookie"?(u=u,w.push({leftText:"domain",rightText:u.domain},{leftText:"path",rightText:u.path},{leftText:"session",rightText:JSON.stringify(u.session)},{leftText:"expires",rightText:u.session?"会话":u.expirationDate?new Date(u.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(u.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(u.hostOnly)},{leftText:"secure",rightText:JSON.stringify(u.secure)},{leftText:"sameSite",rightText:u.sameSite})):M.cookieManagerApiName==="cookieStore"&&(u=u,w.push({leftText:"domain",rightText:u.domain},{leftText:"path",rightText:u.path},{leftText:"expires",rightText:u.expires?new Date(u.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(u.secure)},{leftText:"sameSite",rightText:u.sameSite})),w.forEach(V=>{const E=d.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${V.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${V.rightText}</p>
                        </div>
                    `});d.append(m,E);});let h=d.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
                    <div class="cookie-item-group-left">操作</div>
                    <div class="cookie-item-group-right">
                        <div class="cookie-item-group-control-copy">
                            <svg t="1742795616339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M880 247.008l-162.016-166.016Q700.992 64 677.984 64h-316.992q-26.016 0-46.016 18.016-16.992 15.008-23.008 36.992H231.968q-43.008 0-73.504 31.008t-30.496 76v627.008q0 44 30.496 75.488T231.968 960h508q43.008 0 73.504-31.488t30.496-75.488v-63.008q23.008-6.016 37.504-25.504t14.496-44.512V287.008q0-24-16-40z m-168-160.992l-3.008-3.008z m98.016 177.984L744 196z m-126.016-116.992l108 110.016h-108V147.008zM676.992 128zM204.992 948q4 0.992 4.992 2.016-2.016-0.992-4.992-2.016z m27.008 4q-6.016 0-12-0.992 4.992 0.992 12 0.992z m543.008-99.008q0 15.008-10.016 25.504t-24.992 10.496H232q-14.016 0-24.512-10.496t-10.496-25.504V225.984q0-15.008 10.496-25.504t24.512-10.496h58.016v531.008q0 30.016 20.992 51.008t50.016 20.992H775.04v60z m52-132.992q0 2.016-2.016 2.016h-464q-2.016 0-2.016-2.016V136.992q0-2.016 2.016-2.016h251.008v156.992q0 15.008 10.016 24.992t24 10.016h180.992v392.992z m9.984 64q4-0.992 8.992-2.016-4.992 0.992-8.992 2.016z m-244-168.992h-107.008q-15.008 0-24.992 10.496t-10.016 24.992 10.016 24.992 24.992 10.496h107.008q14.016 0 24.512-10.496t10.496-24.992-10.496-24.992-24.512-10.496z m107.008-111.008h-214.016q-14.016 0-24.512 10.496t-10.496 24.992 10.496 24.992 24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496z m-240.992 36q0 4 0.992 8-0.992-4-0.992-8zM700 512z m12 52l4-2.016z m-260.992-135.488q0 14.496 10.496 24.992t24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496h-214.016q-14.016 0-24.512 10.496t-10.496 24.992z m8 1.504z"></path>
                            </svg>
                        </div>
                        <div class="cookie-item-group-control-edit">
                            <svg t="1742795710451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960zM612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448zM480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448zM672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z"></path>
                            </svg>
                        </div>
                        <div class="cookie-item-group-control-delete">
                            ${_.config.iconSVG.delete}
                        </div>
                    </div>
                `}),v=h.querySelector(".cookie-item-group-control-copy"),b=h.querySelector(".cookie-item-group-control-edit"),$=h.querySelector(".cookie-item-group-control-delete");return d.on(v,"click",V=>{y.preventEvent(V);let E=u.value;y.setClip(E).then(A=>{A?k.success("复制成功"):k.error("复制失败");});}),d.on(b,"click",V=>{y.preventEvent(V),ie.showView(u,E=>{let A=f(E);d.after(m,A),m.parentElement?.removeChild(m);});}),d.on($,"click",V=>{y.preventEvent(V),confirm("确定删除该Cookie？")&&M.deleteCookie(u).then(A=>{A?(C.error(A),k.error("删除失败")):(k.success("删除成功"),m.parentElement?.removeChild(m));});}),d.append(m,[h]),m},x=async u=>{let m=await M.queryAllCookie();d.empty(p);let w=document.createDocumentFragment(),h=S.getValue("exclude-session-cookie");m.forEach(v=>{if(h&&(v.session||M.cookieManagerApiName==="cookieStore"&&v.expires==null)||typeof u=="function"&&!u(v))return;const b=f(v);w.appendChild(b);}),this.$data.cookieList=m,p.appendChild(w);};d.on(e,["input","propertychange"],y.debounce(u=>{let m=d.val(e),w=m.trim()==="",h=S.getValue("search-config-use-regexp");x(v=>w?true:h?!!v.name.match(new RegExp(m)):v.name.includes(m));})),d.listenKeyboard(e,"keypress",(u,m,w)=>{u==="Enter"&&w.length===0&&g();}),d.on(i,"click",u=>{y.preventEvent(u);let w=_.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:D.info.width,height:D.info.height,style:`
                    ${_.config.cssText.panelCSS}

                    .pops-alert-content li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px;
                    }
                    .pops-panel-item-left-desc-text{
                        line-height: normal;
                        margin-top: 6px;
                        font-size: 0.8em;
                        color: rgb(108, 108, 108);
                    }
                `}).$shadowRoot.querySelector(".pops-alert-content"),v=_.config.PanelHandlerComponents().createSectionContainerItem_switch(O("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称",()=>{g();}));d.append(w,v);}),d.on(a,"click",u=>{y.preventEvent(u),g();}),d.on(o,"click",u=>{y.preventEvent(u),ie.showView(void 0,m=>{g();});}),d.on(n,"click",async u=>{y.preventEvent(u),B.showExportDialog();}),d.on(l,"click",async u=>{y.preventEvent(u),B.showImportDialog();}),d.on(r,"click",async u=>{if(y.preventEvent(u),!window.confirm("确定清除全部Cookie？"))return;const w=await M.deleteAllCookie();w.error?k.warning(`清除成功：${w.success} 失败：${w.error}`):k.success("清除成功"),g();}),d.on(s,"click",u=>{y.preventEvent(u),N.showView();}),d.on(c,"click",u=>{y.preventEvent(u);let w=_.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:D.settingMiddle.width,height:D.settingMiddle.height,style:`
                    ${_.config.cssText.panelCSS}

                    .pops-alert-content li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px;
                    }
                    .pops-panel-item-left-desc-text{
                        line-height: normal;
                        margin-top: 6px;
                        font-size: 0.8em;
                        color: rgb(108, 108, 108);
                    }
                `}).$shadowRoot.querySelector(".pops-alert-content"),h=_.config.PanelHandlerComponents(),v=h.createSectionContainerItem_select(F("CookieManager Api","cookie-manager-api","document.cookie",se.map(V=>({text:V,value:V})),void 0,"操作Cookie的Api函数",V=>{g();})),b=h.createSectionContainerItem_switch(O("解码Cookie值","decode-cookie-value",false,()=>{g();},"对Cookie值进行解码")),$=h.createSectionContainerItem_switch(O("排除Session Cookie","exclude-session-cookie",false,()=>{g();},"过滤掉浏览器会话Cookie"));d.append(w,[v,b,$]);});let g=()=>{d.trigger(e,"input");};g();},registerMenu(){const t=this;re.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,i){return e},callback(e){t.showView();}});}},Te={init(){this.execController(),d.ready(()=>{this.execController();});},async execController(){for(let t=0;t<N.$data.matchedRuleList.length;t++){const e=N.$data.matchedRuleList[t],i=e.data.operationMode;C.success(`执行规则：${e.name}`);let a=e.data.execApiName;a==="use-global"&&(a=void 0);const o=new ce(a),n=await o.queryAllCookie();for(let l=0;l<n.length;l++){let r=n[l];const s=r.name,c=e.data.cookieName;let p=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(c,"i").test(s)&&(p=true):s.includes(c)&&(p=true),p){if(i==="delete")o.deleteCookie(r);else if(i.startsWith("extended")){let f=Date.now(),x=720*60*60*1e3,g=x*3,u=x*6,m=x*12,w=x;i==="extended-90"?w=g:i==="extended-180"?w=u:i==="extended-360"&&(w=m);let h=false;if(o.cookieManagerApiName==="document.cookie")r.expirationDate=f+w,h=true;else if(o.cookieManagerApiName==="cookieStore"){let v=r.expires;typeof v=="number"&&v-f<w&&(r.expires=v+w,h=true);}else if(o.cookieManagerApiName==="GM_cookie"||o.cookieManagerApiName==="GM.cookie"){let v=r.expirationDate;typeof v=="number"&&v*1e3-f<w&&(r.expirationDate=v+w/1e3,h=true);}else C.error("未知的cookieManagerApiName",o.cookieManagerApiName);h&&await o.updateCookie(r);}}}}}},oe=function(t,e,i,a,o,n,l,r,s,c){let p={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:a,buttonIsRightIcon:o,buttonIconIsLoading:n,buttonType:l,buttonText:i,callback(f){typeof r=="function"&&r(f);},afterAddToUListCallBack:s};return Reflect.set(p.attributes,he,()=>{p.disable=false;}),p},Le={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[oe("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{N.showView();})]},{type:"forms",text:"",forms:[oe("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{N.importRule();}),oe("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{N.exportRule("CookieManagerRule.json");})]}]},qe={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[F("Toast位置",T.qmsg_config_position.key,T.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,i)=>{C.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),F("最多显示的数量",T.qmsg_config_maxnums.key,T.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),O("逆序弹出",T.qmsg_config_showreverse.key,T.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};J.addContentConfig([qe,Le]);S.init();ae.init();N.init();Te.init();

})(Qmsg, DOMUtils, Utils, pops, CryptoJS);