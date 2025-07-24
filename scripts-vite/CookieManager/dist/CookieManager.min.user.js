// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.7.24
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.2.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
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

(function (g, F, O, J) {
            'use strict';

            var Z=typeof GM<"u"?GM:void 0,xe=typeof GM_cookie<"u"?GM_cookie:void 0,re=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,te=typeof GM_getValue<"u"?GM_getValue:void 0,P=typeof GM_info<"u"?GM_info:void 0,we=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,W=typeof GM_setValue<"u"?GM_setValue:void 0,ye=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ke=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,N=typeof unsafeWindow<"u"?unsafeWindow:void 0,ve=window;const se="GM_Panel",ce="data-init",B="data-key",U="data-default-value",Ce="data-init-more-value",$="data-storage-api",A={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class be{storageKey;listenerData;constructor(e){if(typeof e=="string"){let a=e.trim();if(a=="")throw new Error("key参数不能为空字符串");this.storageKey=a;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new O.Dictionary;}getLocalValue(){let e=te(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){W(this.storageKey,e);}set(e,a){let i=this.get(e),o=this.getLocalValue();Reflect.set(o,e,a),this.setLocalValue(o),this.triggerValueChangeListener(e,i,a);}get(e,a){let i=this.getLocalValue();return Reflect.get(i,e)??a}getAll(){return this.getLocalValue()}delete(e){let a=this.get(e),i=this.getLocalValue();Reflect.deleteProperty(i,e),this.setLocalValue(i),this.triggerValueChangeListener(e,a,void 0);}has(e){let a=this.getLocalValue();return Reflect.has(a,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(a=>Reflect.get(e,a))}clear(){re(this.storageKey);}addValueChangeListener(e,a){let i=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:i,key:e,callback:a}),this.listenerData.set(e,o),i}removeValueChangeListener(e){let a=false;for(const[i,o]of this.listenerData.entries()){for(let n=0;n<o.length;n++){const r=o[n];(typeof e=="string"&&r.key===e||typeof e=="number"&&r.id===e)&&(o.splice(n,1),n--,a=true);}this.listenerData.set(i,o);}return a}triggerValueChangeListener(e,a,i){if(!this.listenerData.has(e))return;let o=this.listenerData.get(e);for(let n=0;n<o.length;n++){const r=o[n];if(typeof r.callback=="function"){let s=this.get(e),l,c;typeof a<"u"&&arguments.length>=2?c=a:c=s,typeof i<"u"&&arguments.length>2?l=i:l=s,r.callback(e,c,l);}}}}const L=new be(se),_e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{M.showPanel(j.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){M.isTopWindow()&&ie.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let a=this.$data.menuOption.findIndex(i=>i.key===e.key);a!==-1&&(this.$data.menuOption[a]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},M={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new x.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new x.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new x.Dictionary),this.__onceExecData},get scriptName(){return ne},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:se,attributeKeyName:B,attributeDefaultValueName:U},init(){this.initContentDefaultValue(),_e.init();},isTopWindow(){return N.top===N.self},initContentDefaultValue(){const t=i=>{if(!i.attributes||i.type==="button"||i.type==="forms"||i.type==="deepMenu")return;let o=new Map,n=i.attributes[B];if(n!=null){const l=i.attributes[U];o.set(n,l);}let r=i.attributes[Ce];if(typeof r=="object"&&r&&Object.keys(r).forEach(l=>{o.set(l,r[l]);}),!o.size){V.warn(["请先配置键",i]);return}let s=i.attributes[ce];if(typeof s=="function"){let l=s();if(typeof l=="boolean"&&!l)return}if(i.type==="switch"){let l=typeof i.disabled=="function"?i.disabled():i.disabled;typeof l=="boolean"&&l&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[l,c]of o.entries())this.setDefaultValue(l,c);},e=i=>{for(let o=0;o<i.length;o++){let n=i[o];t(n);let r=n.forms;r&&Array.isArray(r)&&e(r);}},a=[...j.getAllContentConfig()];for(let i=0;i<a.length;i++){let o=a[i];if(!o.forms)continue;const n=o.forms;n&&Array.isArray(n)&&e(n);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&V.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},setValue(t,e){L.set(t,e);},getValue(t,e){let a=L.get(t);return a??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){L.delete(t);},hasKey(t){return L.has(t)},addValueChangeListener(t,e){return L.addValueChangeListener(t,(i,o,n)=>{e(t,n,o);})},removeValueChangeListener(t){L.removeValueChangeListener(t);},triggerMenuValueChange(t,e,a){L.triggerValueChangeListener(t,a,e);},deleteExecMenuOnce(t){return this.$data.onceExecMenuData.delete(t),L.removeValueChangeListener(t)},deleteOnceExec(t){this.$data.onceExecData.delete(t);},exec(t,e,a,i=true){const o=this;let n;typeof t=="string"||Array.isArray(t)?n=()=>t:n=t;let r=false,s=n(),l=[];Array.isArray(s)?(r=true,l=s):l.push(s);let c=l.find(k=>!this.$data.contentConfigInitDefaultValue.has(k));if(c){V.warn(`${c} 键不存在`);return}let p=JSON.stringify(l);if(i){if(this.$data.onceExecMenuData.has(p))return;this.$data.onceExecMenuData.set(p,1);}let f=[],w=[],u=(k,C)=>{let E=[];Array.isArray(C)||(C=[C]),C.forEach(S=>{if(S!=null&&S instanceof HTMLStyleElement){E.push(S);return}}),f=f.concat(E);},m=k=>this.getValue(k),y=()=>{for(let k=0;k<f.length;k++)f[k].remove(),f.splice(k,1),k--;},h=()=>{let k=false;return typeof a=="function"?k=a(l):k=l.every(C=>m(C)),k},v=k=>{let C=h(),E=[];if(C){let S=l.map(T=>this.getValue(T)),I=e({value:r?S:S[0],addStyleElement:(...T)=>u(true,...T)});Array.isArray(I)||(I=[I]),I.forEach(T=>{if(T!=null&&T instanceof HTMLStyleElement){E.push(T);return}});}y(),f=[...E];};return i&&l.forEach(k=>{let C=this.addValueChangeListener(k,(E,S,I)=>{v();});w.push(C);}),v(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),i&&o.$data.onceExecMenuData.delete(p);},clearStoreStyleElements:()=>y(),removeValueChangeListener:()=>{w.forEach(k=>{this.removeValueChangeListener(k);});}}},execMenu(t,e,a=false,i=false){return this.exec(t,o=>e(o),o=>o.every(r=>{let s=!!this.getValue(r);return M.$data.contentConfigInitDisabledKeys.includes(r)&&(s=false,V.warn(`.execMenu${i?"Once":""} ${r} 被禁用`)),a&&(s=!s),s}),i)},execMenuOnce(t,e,a=false){return this.execMenu(t,e,a,true)},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},showPanel(t,e=`${ne}-设置`,a=false){let i=t.findIndex(n=>(typeof n.isBottom=="function"?n.isBottom():!!n.isBottom)&&n.id==="script-version")!==-1;!a&&!i&&t.push(...j.getDefaultBottomContentConfig());let o=b.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(n,r)=>{n.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(n,r)=>{n(),this.$data.$panel=null;}},width:A.setting.width,height:A.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o;}},D={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},x=O.noConflict(),d=F.noConflict(),b=J,V=new x.Log(P,N.console||ve.console);let ne=P?.script?.name||void 0;J.config.Utils.AnyTouch();const ue=false;V.config({debug:ue,logMaxCount:1e3,autoClearConsole:true,tag:true});g.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return M.getValue(D.qmsg_config_position.key,D.qmsg_config_position.defaultValue)}},maxNums:{get(){return M.getValue(D.qmsg_config_maxnums.key,D.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return M.getValue(D.qmsg_config_showreverse.key,D.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let t=O.getMaxZIndex(),e=J.config.InstanceUtils.getPopsMaxZIndex().zIndex;return O.getMaxValue(t,e)+100}}}));b.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=O.getMaxZIndex(void 0,void 0,a=>{if(a?.classList?.contains("qmsg-shadow-container")||a?.closest("qmsg")&&a.getRootNode()instanceof ShadowRoot)return  false}),e=J.config.InstanceUtils.getPopsMaxZIndex().zIndex;return O.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ie=new x.GM_Menu({GM_getValue:te,GM_setValue:W,GM_registerMenuCommand:we,GM_unregisterMenuCommand:ye}),oe=new x.Httpx({xmlHttpRequest:ke,logDetails:ue});oe.interceptors.request.use(t=>t);oe.interceptors.response.use(void 0,t=>(V.error("拦截器-请求错误",t),t.type==="onabort"?g.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?g.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?g.error("请求超时",{consoleLogContent:true}):g.error("其它错误",{consoleLogContent:true}),t));N.Object.defineProperty,N.Function.prototype.apply,N.Function.prototype.call,N.Element.prototype.appendChild,N.setTimeout;x.addStyle.bind(x);F.selector.bind(F);F.selectorAll.bind(F);const pe=new x.GM_Cookie,j={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new x.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${P?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,a){let i=P?.script?.supportURL||P?.script?.namespace;return typeof i=="string"&&x.isNotNull(i)&&window.open(i,"_blank"),false}}]}};let de=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const K=xe;de(K);de(pe);const he=["document.cookie","cookieStore","GM_cookie","GM.cookie"];class fe{__apiName;constructor(e){this.__apiName=e;}get cookieManagerApiName(){let e=M.getValue("cookie-manager-api","document.cookie");return this.__apiName||e}get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(e,a){K.list(e,i=>{a(i);});},set(e,a){K.set(e,i=>{a(i);});},delete(e,a){K.delete(e,i=>{a(i);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(e,a){Z.cookie.list().then(i=>{a(i);});},set(e,a){Z.cookie.set(e).then(i=>{a(i??null);}).catch(i=>{a(i);});},delete(e,a){Z.cookie.delete(e).then(i=>{a(i??null);}).catch(i=>{a(i);});}};if(this.cookieManagerApiName==="cookieStore"){let e=N.cookieStore;return {list(a,i){e.getAll().then(o=>{i(o);}).catch(o=>{V.error(o),g.error(o.toString());});},set(a,i){e.set(a).then(()=>{i();}).catch(o=>{i(o);});},delete(a,i){e.delete(a).then(o=>{i();}).catch(o=>{i(o);});}}}else return pe}queryAllCookie(){return new Promise((e,a)=>{try{this.cookieManager.list({},i=>{let o=i||[];o=o.sort((n,r)=>n.name.localeCompare(r.name)),e(o);});}catch(i){V.error(i),g.error(i.toString()),a(i);}})}deleteAllCookie(){return new Promise((e,a)=>{try{this.cookieManager.list({},async i=>{const o=i||[],n={success:0,error:0};for(let r=0;r<o.length;r++){const s=o[r];await new Promise(c=>{this.deleteCookie(s).then(p=>{c(p);});})?n.error++:n.success++;}e(n);});}catch(i){V.error(i),g.error(i.toString()),a(i);}})}addCookie(e){return new Promise((a,i)=>{try{Reflect.deleteProperty(e,"hostOnly"),this.cookieManager.set(e,o=>{a(o);});}catch(o){V.error(o),g.error(o.toString()),i(o);}})}deleteCookie(e){return new Promise((a,i)=>{try{this.cookieManager.delete(e,o=>{a(o);});}catch(o){V.error(o),g.error(o.toString()),i(o);}})}updateCookie(e){return new Promise(async(a,i)=>{let o;try{if(this.cookieManagerApiName==="document.cookie"||this.cookieManagerApiName==="cookieStore"){let r=await this.deleteCookie(e);if(r)throw new TypeError(r.toString())}let n=await this.addCookie(e);if(n)throw new TypeError(n.toString())}catch(n){o=n;}finally{a(o);}})}}const R=new fe,Y={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new O.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,a){let i;this.hasStorageApi(t)?i=this.getStorageApi(t):i=a,this.setComponentsStorageApiProperty(e,i);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,$,e);}},G=function(t,e,a,i,o,n,r){let s={text:t,type:"switch",description:o,disabled:r,attributes:{},props:{},getValue(){return this.props[$].get(e,a)},callback(l,c){let p=!!c;if(V.success(`${p?"开启":"关闭"} ${t}`),typeof i=="function"&&i(l,p))return;this.props[$].set(e,p);},afterAddToUListCallBack:n};return Reflect.set(s.attributes,B,e),Reflect.set(s.attributes,U,a),Y.initComponentsStorageApi("switch",s,{get(l,c){return M.getValue(l,c)},set(l,c){M.setValue(l,c);}}),s},le={beforeEdit(t){const e=R.cookieManagerApiName;return e==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=R.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}};let z=(t,e,a,i)=>({text:t,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return e()},callback(n,r){a(r);},placeholder:"",disabled:!!i}),Q=(t,e,a,i,o)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return a()},callback(r,s,l){i(s);},data:typeof e=="function"?e():e,disabled:false});const ge={init(){},showView(t,e){let a=!!t,i=x.assign({name:"",value:"",domain:window.location.hostname,path:"/",secure:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+3600*24*30*1e3},t,true);i=le.beforeEdit(i);let n=b.confirm({title:{text:a?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:a?"编辑":"添加",async callback(h,v){if(ge.validCookieInfo(i)){if(i.value=encodeURIComponent(i.value),i=le.afterEdit(i),a){let k=await R.updateCookie(i);k?g.error(k.toString()):(g.success("修改成功"),h.close());}else {let k=await R.addCookie(i);k?g.error(k.toString()):(g.success("添加成功"),h.close());}typeof e=="function"&&e(i);}}},cancel:{text:"取消"}},mask:{enable:true},width:window.innerWidth>350?"350px":"80vw",height:A.setting.height,style:`
                ${b.config.cssText.panelCSS}

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
				#cookie-item-property-expires{
					border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
					border-radius: 4px;
					background-color: #ffffff;
					width: 100%;
					height: 32px;
					padding: 0px 8px;
				}
				#cookie-item-property-expires:hover{
					box-shadow: 0 0 0 1px #c0c4cc inset;
				}
				#cookie-item-property-expires:focus,
				#cookie-item-property-expires:focus-within{
					outline: 0;
					border: 1px solid #409eff;
					border-radius: 4px;
					box-shadow: none;
				}
            `}).$shadowRoot.querySelector(".pops-confirm-content"),r=b.config.PanelHandlerComponents(),s=r.createSectionContainerItem_input(z("name",()=>i.name,h=>i.name=h,a)),l=r.createSectionContainerItem_input(z("value",()=>i.value,h=>i.value=h)),c=r.createSectionContainerItem_input(z("domain",()=>i.domain,h=>i.domain=h)),p=r.createSectionContainerItem_input(z("path",()=>i.path,h=>i.path=h)),f;i.session?f=r.createSectionContainerItem_input(z("expires",()=>"会话",h=>{},true)):f=r.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(h){let v=d.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),_=v.querySelector("#cookie-item-property-expires");return _.valueAsNumber=i.expirationDate,d.on(_,["change","input","propertychange"],k=>{x.preventEvent(k),i.expirationDate=_.valueAsNumber;}),v}});let w=r.createSectionContainerItem_select(Q("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>i.httpOnly,h=>i.httpOnly=h)),u=r.createSectionContainerItem_select(Q("secure",[{text:"true",value:true},{text:"false",value:false}],()=>i.secure,h=>i.secure=h)),m=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];R.cookieManagerApiName==="cookieStore"&&(m=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let y=r.createSectionContainerItem_select(Q("sameSite",m,()=>i.sameSite,h=>i.sameSite=h));d.append(n,[s,l]),R.cookieManagerApiName==="GM_cookie"||R.cookieManagerApiName==="GM.cookie"?d.append(n,[c,p,f,w,u,y]):R.cookieManagerApiName==="cookieStore"&&d.append(n,[c,p,f,y]);},validCookieInfo(t){return t.name==null||t.name==""?(g.error("name不能为空"),false):t.domain==null||t.domain==""?(g.error("domain不能为空"),false):t.path==null||t.path==""?(g.error("path不能为空"),false):true}},H=function(t,e,a,i,o,n,r){let s=[];typeof i=="function"?s=i():s=i;let l={text:t,type:"select",description:n,attributes:{},props:{},getValue(){return this.props[$].get(e,a)},callback(c,p,f){let w=p;if(V.info(`选择：${f}`),typeof o=="function"&&o(c,w,f))return;this.props[$].set(e,w),typeof r=="function"&&r(c,w,f);},data:s};return Reflect.set(l.attributes,B,e),Reflect.set(l.attributes,U,a),Y.initComponentsStorageApi("select",l,{get(c,p){return M.getValue(c,p)},set(c,p){M.setValue(c,p);}}),l},X=function(t,e,a,i,o,n="",r,s,l){let c={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:i,afterAddToUListCallBack:l,getValue(){return this.props[$].get(e,a)},callback(p,f,w){this.props[$].set(e,f);},placeholder:n};return Reflect.set(c.attributes,B,e),Reflect.set(c.attributes,U,a),Y.initComponentsStorageApi("input",c,{get(p,f){return M.getValue(p,f)},set(p,f){M.setValue(p,f);}}),c},Ve=function(t,e,a,i,o,n="",r){let s={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:n,disabled:r,getValue(){let c=this.props[$].get(e,a);return Array.isArray(c)?c.join(`
`):c},callback(l,c){this.props[$].set(e,c);}};return Reflect.set(s.attributes,B,e),Reflect.set(s.attributes,U,a),Y.initComponentsStorageApi("switch",s,{get(l,c){return M.getValue(l,c)},set(l,c){M.setValue(l,c);}}),s};class Me{option;constructor(e){this.option=e;}async showView(){let e=b.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:x.assign({ok:{callback:async()=>{await n();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${b.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),a=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let i=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());i.appendChild(o);const n=async()=>{(await this.option.onsubmit(a,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class $e{option;constructor(e){this.option=e;}showView(){let e=b.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),a=e.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let n=d.createElement("button",{innerText:o.name},{type:"button"}),r=async()=>{(await this.option.getAllRuleInfo()).forEach(async l=>{await o.filterCallBack(l.data)?d.show(l.$el,false):d.hide(l.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};d.on(n,"click",async s=>{x.preventEvent(s),!(typeof o.callback=="function"&&!await o.callback(s,r))&&await r();}),i.appendChild(n);}),a.appendChild(i);}}class Se{option;constructor(e){this.option=e;}async showView(e){let a=b.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async n=>{this.showEditView(false,await this.option.getAddData(),a.$shadowRoot);}},close:{enable:true,callback(n){a.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:(n,r)=>{typeof this.option?.bottomControls?.filter?.callback=="function"&&this.option.bottomControls.filter.callback();let s=()=>Array.from(a.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),l=r.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");d.text(l).includes("取消")?(s().forEach(c=>{d.show(c,false);}),d.text(l,"过滤")):new $e({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack(){d.text(l,"取消过滤");},getAllRuleInfo:()=>s().map(p=>({data:this.parseRuleItemElement(p).data,$el:p}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:n=>{let r=b.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async s=>{if(V.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){g.error("清理失败");return}else g.success("清理成功");await this.updateDeleteAllBtnText(a.$shadowRoot),this.clearContent(a.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${b.config.cssText.panelCSS}
            
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
            `}),i=await this.option.data(),o=false;for(let n=0;n<i.length;n++){let r=i[n],s=await this.appendRuleItemElement(a.$shadowRoot,r);(typeof e=="function"?e(r):true)||(o=true,s.forEach(c=>{d.hide(c,false);}));}if(o){let n=a.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");d.text(n,"取消过滤");}}showEditView(e,a,i,o,n,r){let s=async c=>{if(c){if(typeof r=="function"){let p=await this.option.getData(a);r(p);}}else if(e||await this.option.deleteData(a),typeof n=="function"){let p=await this.option.getData(a);n(p);}};new Me({title:e?"编辑":"添加",data:()=>a,dialogCloseCallBack:s,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,p)=>{c.close(),await s(false);}},close:{callback:async(c,p)=>{c.close(),await s(false);}}},onsubmit:async(c,p)=>{let f=await this.option.itemControls.edit.onsubmit(c,e,p);return f.success?e?(g.success("修改成功"),i&&await this.updateRuleItemElement(f.data,o,i)):i&&await this.appendRuleItemElement(i,f.data):e&&V.error("修改失败"),f},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let a=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:a,$deleteBtn:i}}parseRuleItemElement(e){let a=e.querySelector(".rule-controls-enable"),i=a.querySelector(".pops-panel-switch"),o=a.querySelector(".pops-panel-switch__input"),n=a.querySelector(".pops-panel-switch__core"),r=e.querySelector(".rule-controls-edit"),s=e.querySelector(".rule-controls-delete");return {$enable:a,$enableSwitch:i,$enableSwitchInput:o,$enableSwitchCore:n,$edit:r,$delete:s,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,a){let i=await this.option.getDataItemName(e),o=d.createElement("div",{className:"rule-item",innerHTML:`
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
					${b.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${b.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);let n="pops-panel-switch-is-checked";const{$enable:r,$enableSwitch:s,$enableSwitchCore:l,$enableSwitchInput:c,$delete:p,$edit:f}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(d.on(l,"click",async w=>{let u=false;s.classList.contains(n)?(s.classList.remove(n),u=false):(s.classList.add(n),u=true),c.checked=u,await this.option.itemControls.enable.callback(e,u);}),await this.option.itemControls.enable.getEnable(e)&&s.classList.add(n)):r.remove(),this.option.itemControls.edit.enable?d.on(f,"click",w=>{x.preventEvent(w),this.showEditView(true,e,a,o,u=>{e=null,e=u;});}):f.remove(),this.option.itemControls.delete.enable?d.on(p,"click",w=>{x.preventEvent(w);let u=b.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async m=>{V.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(g.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(a),u.close()):g.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),o}async appendRuleItemElement(e,a){let{$container:i}=this.parseViewElement(e),o=[],n=Array.isArray(a)?a:[a];for(let r=0;r<n.length;r++){let s=n[r],l=await this.createRuleItemElement(s,e);i.appendChild(l),o.push(l);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:a}=this.parseViewElement(e);let i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,a,i){let o=await this.createRuleItemElement(e,i);a.after(o),a.remove();}clearContent(e){const{$container:a}=this.parseViewElement(e);d.html(a,"");}setDeleteBtnText(e,a,i=false){const{$deleteBtn:o}=this.parseViewElement(e);i?d.html(o,a):d.text(o,a);}async updateDeleteAllBtnText(e){let a=await this.option.data();this.setDeleteBtnText(e,`清空所有(${a.length})`);}}const q={$key:{STORAGE_KEY:"cookie-rule"},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList=[],this.$data.matchedRuleList=this.getMatchedRuleList(),ie.add({key:"matched-cookie-rule-list",text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:false,autoReload:false,showText(t,e){return t},callback(t){console.log(q.$data.matchedRuleList),alert(`以下是命中的规则名：
`+q.$data.matchedRuleList.map(e=>e.name).join(`
`));}});},getMatchedRuleList(t=window.location.href){let e=this.getData(),a=[];return e.forEach(i=>{if(!i.enable)return;let o=window.location.href,n=i.data.url;if(i.data.enableRegExpToMatchUrl){if(!new RegExp(n,"i").test(o))return}else if(!o.includes(n))return;a.push(i);}),a},showView(){let t=b.config.PanelHandlerComponents();function e(o,n){return {get(r,s){return Reflect.get(o,r)??s},set(r,s){Reflect.set(o,r,s);}}}const a=this.getMatchedRuleList();new Se({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.updateData(o),deleteData:o=>this.deleteData(o),getData:o=>this.getData().find(s=>s.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,n)=>{o.enable=n,this.updateData(o);}},edit:{enable:true,getView:(o,n)=>{let r=document.createDocumentFragment(),s=this.getTemplateData();n||(o=s);let l=G("启用","enable",s.enable);Reflect.set(l.props,$,e(o));let c=t.createSectionContainerItem_switch(l),p=X("规则名称","name","",s.name,void 0,"必填");Reflect.set(p.props,$,e(o));let f=t.createSectionContainerItem_input(p),w=H("Cookie管理Api","execApiName",s.data.execApiName,[{text:"（当前）"+R.cookieManagerApiName,value:"use-global"},...he.map(ae=>({text:ae,value:ae}))],void 0,"操作Cookie的Api函数");Reflect.set(w.props,$,e(o.data));let u=t.createSectionContainerItem_select(w),m=X("网址","url",s.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(m.props,$,e(o.data));let y=t.createSectionContainerItem_input(m),h=G("启用正则匹配网址","enableRegExpToMatchUrl",s.data.enableRegExpToMatchUrl);Reflect.set(h.props,$,e(o.data));let v=t.createSectionContainerItem_switch(h),_=X("Cookie名称","cookieName",s.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(_.props,$,e(o.data));let k=t.createSectionContainerItem_input(_),C=G("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",s.data.enableRegExpToMatchCookieName);Reflect.set(C.props,$,e(o.data));let E=t.createSectionContainerItem_switch(C),S=H("操作模式","operationMode",s.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(S.props,$,e(o.data));let I=t.createSectionContainerItem_select(S),T=Ve("备注","remark",s.data.remark);Reflect.set(T.props,$,e(o.data));let me=t.createSectionContainerItem_textarea(T);return r.append(c,f,u,y,v,k,E,I,me),r},onsubmit:(o,n,r)=>{let s=o.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();n&&(l.uuid=r.uuid);try{return s.forEach(c=>{let p=Reflect.get(c,"__formConfig__"),f=Reflect.get(p,"attributes"),w=Reflect.get(c,$),u=Reflect.get(f,B),m=Reflect.get(f,U),y=w.get(u,m);Reflect.has(l,u)?Reflect.set(l,u,y):Reflect.has(l.data,u)?Reflect.set(l.data,u,y):V.error(`${u}不在数据中`);}),l.name.trim()===""?(g.error("规则名称不能为空"),{success:!1,data:l}):l.data.url.trim()===""?(g.error("网址不能为空"),{success:!1,data:l}):l.data.cookieName.trim()===""?(g.error("Cookie名称不能为空"),{success:!1,data:l}):n?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}catch(c){return V.error(c),{success:false,data:l}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:o=>this.deleteData(o)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(o){return o.enable}},{name:"过滤-未启用",filterCallBack(o){return !o.enable}},{name:"过滤-当前网站执行",filterCallBack(o){return a.some(n=>n.uuid===o.uuid)}}]}}}).showView();},getTemplateData(){return {uuid:x.generateUUID(),enable:true,name:"",data:{url:"",execApiName:"use-global",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return te(this.$key.STORAGE_KEY,[])},setData(t){W(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(i=>i.uuid==t.uuid)===-1?(e.push(t),W(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),a=e.findIndex(o=>o.uuid==t.uuid),i=false;return a!==-1&&(i=true,e[a]=t),this.setData(e),i},deleteData(t){let e=this.getData(),a=e.findIndex(o=>o.uuid==t.uuid),i=false;return a!==-1&&(i=true,e.splice(a,1)),this.setData(e),i},clearData(){re(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),a=new Blob([JSON.stringify(e,null,4)]),i=window.URL.createObjectURL(a),o=d.createElement("a");o.href=i,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){let t=b.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:A.info.width,height:A.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),a=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");d.on(e,"click",i=>{x.preventEvent(i),t.close();let o=d.createElement("input",{type:"file",accept:".json"});d.on(o,["propertychange","input"],n=>{if(!o.files?.length)return;let r=o.files[0],s=new FileReader;s.onload=()=>{let l=x.toJSON(s.result);if(!Array.isArray(l)){V.error("不是正确的规则文件",l),g.error("不是正确的规则文件");return}this.setData(l),g.success(`成功导入 ${l.length}条规则`);},s.readAsText(r,"UTF-8");}),o.click();}),d.on(a,"click",i=>{x.preventEvent(i),t.close(),b.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(o,n)=>{let r=o.text;if(x.isNull(r)){g.error("请填入完整的url");return}let s=await oe.get(r);if(!s.status)return;let l=x.toJSON(s.data.responseText);if(!Array.isArray(l)){V.error("不是正确的规则文件",s,l),g.error("不是正确的规则文件");return}this.setData(l),o.close(),g.success(`成功导入 ${l.length}条规则`);}}},width:A.info.width,height:"auto"});});}},Re={init(){this.registerMenu();},async showView(){const t=b.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
                            <button class="cookie-control-copy-all" type="button" data-type="default">复制全部</button>
                            <button class="cookie-control-clear-all" type="button" data-type="default">清除全部</button>
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
                `,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:A.setting.width,height:A.setting.height,style:`
                ${b.config.cssText.panelCSS}
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
            `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),a=t.$shadowRoot.querySelector(".cookie-search-setting"),i=t.$shadowRoot.querySelector(".cookie-control-refresh"),o=t.$shadowRoot.querySelector(".cookie-control-add"),n=t.$shadowRoot.querySelector(".cookie-control-copy-all"),r=t.$shadowRoot.querySelector(".cookie-control-clear-all"),s=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),l=t.$shadowRoot.querySelector(".cookie-setting"),c=t.$shadowRoot.querySelector(".cookie-list-wrapper");let p=u=>{const m=d.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":u}),y=[{leftText:"name",rightText:u.name},{leftText:"value",rightText:M.getValue("decode-cookie-value")?decodeURIComponent(u.value):encodeURIComponent(u.value)}];R.cookieManagerApiName==="GM_cookie"||R.cookieManagerApiName==="GM.cookie"?(u=u,y.push({leftText:"domain",rightText:u.domain},{leftText:"path",rightText:u.path},{leftText:"session",rightText:JSON.stringify(u.session)},{leftText:"expires",rightText:u.session?"会话":u.expirationDate?new Date(u.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(u.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(u.hostOnly)},{leftText:"secure",rightText:JSON.stringify(u.secure)},{leftText:"sameSite",rightText:u.sameSite})):R.cookieManagerApiName==="cookieStore"&&(u=u,y.push({leftText:"domain",rightText:u.domain},{leftText:"path",rightText:u.path},{leftText:"expires",rightText:u.expires?new Date(u.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(u.secure)},{leftText:"sameSite",rightText:u.sameSite})),y.forEach(C=>{const E=d.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${C.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${C.rightText}</p>
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
                            ${b.config.iconSVG.delete}
                        </div>
                    </div>
                `}),v=h.querySelector(".cookie-item-group-control-copy"),_=h.querySelector(".cookie-item-group-control-edit"),k=h.querySelector(".cookie-item-group-control-delete");return d.on(v,"click",C=>{x.preventEvent(C);let E=u.value;x.setClip(E).then(S=>{S?g.success("复制成功"):g.error("复制失败");});}),d.on(_,"click",C=>{x.preventEvent(C),ge.showView(u,E=>{let S=p(E);d.after(m,S),m.parentElement?.removeChild(m);});}),d.on(k,"click",C=>{x.preventEvent(C),confirm("确定删除该Cookie？")&&R.deleteCookie(u).then(S=>{S?(V.error(S),g.error("删除失败")):(g.success("删除成功"),m.parentElement?.removeChild(m));});}),d.append(m,[h]),m},f=async u=>{let m=await R.queryAllCookie();d.empty(c);let y=document.createDocumentFragment(),h=M.getValue("exclude-session-cookie");m.forEach(v=>{if(h&&(v.session||R.cookieManagerApiName==="cookieStore"&&v.expires==null)||typeof u=="function"&&!u(v))return;const _=p(v);y.appendChild(_);}),c.appendChild(y);};d.on(e,["input","propertychange"],x.debounce(u=>{let m=d.val(e),y=m.trim()==="",h=M.getValue("search-config-use-regexp");f(v=>y?true:h?!!v.name.match(new RegExp(m)):v.name.includes(m));})),d.listenKeyboard(e,"keypress",(u,m,y)=>{u==="Enter"&&y.length===0&&w();}),d.on(a,"click",u=>{x.preventEvent(u);let y=b.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:A.info.width,height:A.info.height,style:`
                    ${b.config.cssText.panelCSS}

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
                `}).$shadowRoot.querySelector(".pops-alert-content"),v=b.config.PanelHandlerComponents().createSectionContainerItem_switch(G("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称"));d.append(y,v);}),d.on(i,"click",u=>{x.preventEvent(u),w();}),d.on(o,"click",u=>{x.preventEvent(u),w();}),d.on(n,"click",async u=>{x.preventEvent(u);let m=await R.queryAllCookie();if(m=m.filter(v=>!(v.session&&M.getValue("exclude-session-cookie"))),m.length===0){g.warning("没有Cookie可以复制");return}let y=m.map(v=>{let _=v.value;return `${v.name}=${_}; `}).join("");await x.setClip(y)?g.success("复制成功"):g.error("复制失败");}),d.on(r,"click",async u=>{if(x.preventEvent(u),!window.confirm("确定清除全部Cookie？"))return;const y=await R.deleteAllCookie();y.error?g.warning(`清除成功：${y.success} 失败：${y.error}`):g.success("清除成功"),w();}),d.on(s,"click",u=>{x.preventEvent(u),q.showView();}),d.on(l,"click",u=>{x.preventEvent(u);let y=b.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:A.info.width,height:A.info.height,style:`
                    ${b.config.cssText.panelCSS}

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
                `}).$shadowRoot.querySelector(".pops-alert-content"),h=b.config.PanelHandlerComponents(),v=h.createSectionContainerItem_select(H("CookieManager Api","cookie-manager-api","document.cookie",he.map(C=>({text:C,value:C})),void 0,"操作Cookie的Api函数",C=>{w();})),_=h.createSectionContainerItem_switch(G("解码Cookie值","decode-cookie-value",false,()=>{w();},"对Cookie值进行解码")),k=h.createSectionContainerItem_switch(G("排除Session Cookie","exclude-session-cookie",false,()=>{w();},"过滤掉浏览器会话Cookie"));d.append(y,[v,_,k]);});let w=()=>{d.trigger(e,"input");};w();},registerMenu(){const t=this;ie.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,a){return e},callback(e){t.showView();}});}},Ee={init(){this.execController(),d.ready(()=>{this.execController();});},async execController(){for(let t=0;t<q.$data.matchedRuleList.length;t++){const e=q.$data.matchedRuleList[t],a=e.data.operationMode;V.success(`执行规则：${e.name}`);let i=e.data.execApiName;i==="use-global"&&(i=void 0);const o=new fe(i),n=await o.queryAllCookie();for(let r=0;r<n.length;r++){let s=n[r];const l=s.name,c=e.data.cookieName;let p=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(c,"i").test(l)&&(p=true):l.includes(c)&&(p=true),p){if(a==="delete")o.deleteCookie(s);else if(a.startsWith("extended")){let f=Date.now(),w=720*60*60*1e3,u=w*3,m=w*6,y=w*12,h=w;a==="extended-90"?h=u:a==="extended-180"?h=m:a==="extended-360"&&(h=y);let v=false;if(o.cookieManagerApiName==="document.cookie")s.expirationDate=f+h,v=true;else if(o.cookieManagerApiName==="cookieStore"){let _=s.expires;typeof _=="number"&&_-f<h&&(s.expires=_+h,v=true);}else if(o.cookieManagerApiName==="GM_cookie"||o.cookieManagerApiName==="GM.cookie"){let _=s.expirationDate;typeof _=="number"&&_*1e3-f<h&&(s.expirationDate=_+h/1e3,v=true);}else V.error("未知的cookieManagerApiName",o.cookieManagerApiName);v&&await o.updateCookie(s);}}}}}},ee=function(t,e,a,i,o,n,r,s,l,c){let p={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:i,buttonIsRightIcon:o,buttonIconIsLoading:n,buttonType:r,buttonText:a,callback(f){typeof s=="function"&&s(f);},afterAddToUListCallBack:l};return Reflect.set(p.attributes,ce,()=>{p.disable=false;}),p},Ae={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[ee("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{q.showView();})]},{type:"forms",text:"",forms:[ee("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{q.importRule();}),ee("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{q.exportRule("CookieManagerRule.json");})]}]},De={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[H("Toast位置",D.qmsg_config_position.key,D.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,a)=>{V.info("设置当前Qmsg弹出位置"+a);},"Toast显示在页面九宫格的位置"),H("最多显示的数量",D.qmsg_config_maxnums.key,D.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),G("逆序弹出",D.qmsg_config_showreverse.key,D.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};j.addContentConfig([De,Ae]);M.init();Re.init();q.init();Ee.init();

})(Qmsg, DOMUtils, Utils, pops);