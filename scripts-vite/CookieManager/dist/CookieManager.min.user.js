// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.6.17
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.10/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.2/dist/index.umd.js
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

(function (y, we, O, j) {
            'use strict';

            var me=Object.defineProperty;var xe=(t,e,o)=>e in t?me(t,e,{enumerable:true,configurable:true,writable:true,value:o}):t[e]=o;var P=(t,e,o)=>xe(t,typeof e!="symbol"?e+"":e,o);var Y=typeof GM<"u"?GM:void 0,ye=typeof GM_cookie<"u"?GM_cookie:void 0,ce=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ie=typeof GM_getValue<"u"?GM_getValue:void 0,F=typeof GM_info<"u"?GM_info:void 0,ve=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,K=typeof GM_setValue<"u"?GM_setValue:void 0,ke=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ce=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,q=typeof unsafeWindow<"u"?unsafeWindow:void 0,be=window;const ue="GM_Panel",pe="data-init",U="data-key",z="data-default-value",_e="data-init-more-value",E="data-storage-api",A={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class Ve{constructor(e){P(this,"storageKey");P(this,"listenerData");if(typeof e=="string"){let o=e.trim();if(o=="")throw new Error("key参数不能为空字符串");this.storageKey=o;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new O.Dictionary;}getLocalValue(){let e=ie(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){K(this.storageKey,e);}set(e,o){let i=this.get(e),a=this.getLocalValue();Reflect.set(a,e,o),this.setLocalValue(a),this.triggerValueChangeListener(e,i,o);}get(e,o){let i=this.getLocalValue();return Reflect.get(i,e)??o}getAll(){return this.getLocalValue()}delete(e){let o=this.get(e),i=this.getLocalValue();Reflect.deleteProperty(i,e),this.setLocalValue(i),this.triggerValueChangeListener(e,o,void 0);}has(e){let o=this.getLocalValue();return Reflect.has(o,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(o=>Reflect.get(e,o))}clear(){ce(this.storageKey);}addValueChangeListener(e,o){let i=Math.random(),a=this.listenerData.get(e)||[];return a.push({id:i,key:e,callback:o}),this.listenerData.set(e,a),i}removeValueChangeListener(e){let o=false;for(const[i,a]of this.listenerData.entries()){for(let n=0;n<a.length;n++){const l=a[n];(typeof e=="string"&&l.key===e||typeof e=="number"&&l.id===e)&&(a.splice(n,1),n--,o=true);}this.listenerData.set(i,a);}return o}triggerValueChangeListener(e,o,i){if(!this.listenerData.has(e))return;let a=this.listenerData.get(e);for(let n=0;n<a.length;n++){const l=a[n];if(typeof l.callback=="function"){let r=this.get(e),s,c;typeof o<"u"&&arguments.length>=2?c=o:c=r,typeof i<"u"&&arguments.length>2?s=i:s=r,l.callback(e,c,s);}}}}const G=new Ve(ue),Me={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{$.showPanel(ae.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){$.isTopWindow()&&he.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let o=this.$data.menuOption.findIndex(i=>i.key===e.key);o!==-1&&(this.$data.menuOption[o]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},$={$data:{__configDefaultValueData:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get configDefaultValueData(){return this.__configDefaultValueData==null&&(this.__configDefaultValueData=new v.Dictionary),this.__configDefaultValueData},get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new v.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new v.Dictionary),this.__onceExecData},get scriptName(){return Z},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:ue,attributeKeyName:U,attributeDefaultValueName:z},init(){this.initContentDefaultValue(),Me.init();},isTopWindow(){return q.top===q.self},initContentDefaultValue(){const t=i=>{if(!i.attributes||i.type==="button"||i.type==="forms"||i.type==="deepMenu")return;let a={},n=i.attributes[U];n!=null&&(a[n]=i.attributes[z]);let l=i.attributes[pe];if(typeof l=="function"){let c=l();if(typeof c=="boolean"&&!c)return}let r=i.attributes[_e];r&&typeof r=="object"&&Object.assign(a,r);let s=Object.keys(a);if(!s.length){_.warn(["请先配置键",i]);return}s.forEach(c=>{let d=a[c];this.setDefaultValue(c,d);});},e=i=>{for(let a=0;a<i.length;a++){let n=i[a];t(n);let l=n.forms;l&&Array.isArray(l)&&e(l);}},o=[...ae.getAllContentConfig()];for(let i=0;i<o.length;i++){let a=o[i];if(!a.forms)continue;const n=a.forms;n&&Array.isArray(n)&&e(n);}},setDefaultValue(t,e){this.$data.configDefaultValueData.has(t)&&_.warn("请检查该key(已存在): "+t),this.$data.configDefaultValueData.set(t,e);},setValue(t,e){G.set(t,e);},getValue(t,e){let o=G.get(t);return o??(this.$data.configDefaultValueData.has(t)?this.$data.configDefaultValueData.get(t):e)},deleteValue(t){G.delete(t);},hasKey(t){return G.has(t)},addValueChangeListener(t,e){return G.addValueChangeListener(t,(i,a,n)=>{e(t,n,a);})},removeValueChangeListener(t){G.removeValueChangeListener(t);},triggerMenuValueChange(t,e,o){G.triggerValueChangeListener(t,o,e);},deleteExecMenuOnce(t){return this.$data.onceExecMenuData.delete(t),G.removeValueChangeListener(t)},deleteOnceExec(t){this.$data.onceExecData.delete(t);},exec(t,e,o,i=true){const a=this;let n;typeof t=="string"||Array.isArray(t)?n=()=>t:n=t;let l=false,r=n(),s=[];Array.isArray(r)?(l=true,s=r):s.push(r);let c=s.find(x=>!this.$data.configDefaultValueData.has(x));if(c){_.warn(`${c} 键不存在`);return}let d=JSON.stringify(s);if(i){if(this.$data.onceExecMenuData.has(d))return;this.$data.onceExecMenuData.set(d,1);}let h=[],u=[],f=(x,C)=>{let V=[];C instanceof HTMLStyleElement?V=[C]:Array.isArray(C)&&(V=[...C.filter(D=>D!=null&&D instanceof HTMLStyleElement)]),h=h.concat(V);},p=x=>this.getValue(x),w=()=>{for(let x=0;x<h.length;x++)h[x].remove(),h.splice(x,1),x--;},m=()=>{let x=false;return typeof o=="function"?x=o(s):x=s.every(C=>p(C)),x},M=x=>{let C=m(),V=[];if(C){let D=s.map(T=>this.getValue(T)),N=e({addStyleElement:(...T)=>f(true,...T),value:l?D:D[0]});N instanceof HTMLStyleElement?V.push(N):Array.isArray(N)&&V.push(...N.filter(T=>T!=null&&T instanceof HTMLStyleElement));}w(),h=[...V];};return i&&s.forEach(x=>{let C=this.addValueChangeListener(x,(V,D,N)=>{M();});u.push(C);}),M(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),i&&a.$data.onceExecMenuData.delete(d);},clearStoreStyleElements:()=>w(),removeValueChangeListener:()=>{u.forEach(x=>{this.removeValueChangeListener(x);});}}},execMenu(t,e,o=false){return this.exec(t,i=>e(i),i=>i.every(n=>{let l=!!this.getValue(n);return o&&(l=!l),l}),false)},execMenuOnce(t,e){return this.exec(t,e,o=>o.every(a=>!!this.getValue(a)),true)},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},showPanel(t,e=`${Z}-设置`){let o=b.panel({title:{text:`${Z}-设置`,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(i,a)=>{i.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(i,a)=>{i(),this.$data.$panel=null;}},width:A.setting.width,height:A.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o;}},R={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},v=O.noConflict(),g=we.noConflict(),b=j,_=new v.Log(F,q.console||be.console);var se;let Z=((se=F==null?void 0:F.script)==null?void 0:se.name)||void 0;j.config.Utils.AnyTouch();const de=false;_.config({debug:de,logMaxCount:1e3,autoClearConsole:true,tag:true});y.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return $.getValue(R.qmsg_config_position.key,R.qmsg_config_position.defaultValue)}},maxNums:{get(){return $.getValue(R.qmsg_config_maxnums.key,R.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return $.getValue(R.qmsg_config_showreverse.key,R.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let t=O.getMaxZIndex(),e=j.config.InstanceUtils.getPopsMaxZIndex().zIndex;return O.getMaxValue(t,e)+100}}}));b.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=O.getMaxZIndex(void 0,void 0,o=>{var i;if((i=o==null?void 0:o.classList)!=null&&i.contains("qmsg-shadow-container")||o!=null&&o.closest("qmsg")&&o.getRootNode()instanceof ShadowRoot)return  false}),e=j.config.InstanceUtils.getPopsMaxZIndex().zIndex;return O.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const he=new v.GM_Menu({GM_getValue:ie,GM_setValue:K,GM_registerMenuCommand:ve,GM_unregisterMenuCommand:ke}),oe=new v.Httpx({xmlHttpRequest:Ce,logDetails:de});oe.interceptors.request.use(t=>t);oe.interceptors.response.use(void 0,t=>(_.error("拦截器-请求错误",t),t.type==="onabort"?y.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?y.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?y.error("请求超时",{consoleLogContent:true}):y.error("其它错误",{consoleLogContent:true}),t));q.Object.defineProperty,q.Function.prototype.apply,q.Function.prototype.call,q.Element.prototype.appendChild,q.setTimeout;v.addStyle.bind(v);document.querySelector.bind(document);document.querySelectorAll.bind(document);const fe=new v.GM_Cookie,ae={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new v.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]}};let ge=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const H=ye;ge(H);ge(fe);const k={get cookieManagerApiName(){return $.getValue("cookie-manager-api","document.cookie")},get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(t,e){H.list(t,o=>{e(o);});},set(t,e){H.set(t,o=>{e(o);});},delete(t,e){H.delete(t,o=>{e(o);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(t,e){Y.cookie.list().then(o=>{e(o);});},set(t,e){Y.cookie.set(t).then(o=>{e(o??null);}).catch(o=>{e(o);});},delete(t,e){Y.cookie.delete(t).then(o=>{e(o??null);}).catch(o=>{e(o);});}};if(this.cookieManagerApiName==="cookieStore"){let t=q.cookieStore;return {list(e,o){t.getAll().then(i=>{o(i);}).catch(i=>{_.error(i),y.error(i.toString());});},set(e,o){t.set(e).then(()=>{o();}).catch(i=>{o(i);});},delete(e,o){t.delete(e).then(i=>{o();}).catch(i=>{o(i);});}}}else return fe},queryAllCookie(){return new Promise((t,e)=>{try{this.cookieManager.list({},o=>{let i=o||[];i=i.sort((a,n)=>a.name.localeCompare(n.name)),t(i);});}catch(o){_.error(o),y.error(o.toString()),e(o);}})},deleteAllCookie(){return new Promise((t,e)=>{try{this.cookieManager.list({},async o=>{const i=o||[],a={success:0,error:0};for(let n=0;n<i.length;n++){const l=i[n];await new Promise(s=>{this.deleteCookie(l).then(c=>{s(c);});})?a.error++:a.success++;}t(a);});}catch(o){_.error(o),y.error(o.toString()),e(o);}})},addCookie(t){return new Promise((e,o)=>{try{Reflect.deleteProperty(t,"hostOnly"),k.cookieManager.set(t,i=>{e(i);});}catch(i){_.error(i),y.error(i.toString()),o(i);}})},deleteCookie(t){return new Promise((e,o)=>{try{k.cookieManager.delete(t,i=>{e(i);});}catch(i){_.error(i),y.error(i.toString()),o(i);}})},updateCookie(t){return new Promise(async(e,o)=>{let i;try{let a=await k.deleteCookie(t);if(a)throw new TypeError(a.toString());let n=await k.addCookie(t);if(n)throw new TypeError(n.toString())}catch(a){i=a;}finally{e(i);}})}},J={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new O.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,o){let i;this.hasStorageApi(t)?i=this.getStorageApi(t):i=o,this.setComponentsStorageApiProperty(e,i);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,E,e);}},L=function(t,e,o,i,a,n){let l={text:t,type:"switch",description:a,attributes:{},props:{},getValue(){return !!this.props[E].get(e,o)},callback(r,s){let c=!!s;if(_.success(`${c?"开启":"关闭"} ${t}`),typeof i=="function"&&i(r,c))return;this.props[E].set(e,c);},afterAddToUListCallBack:n};return Reflect.set(l.attributes,U,e),Reflect.set(l.attributes,z,o),J.initComponentsStorageApi("switch",l,{get(r,s){return $.getValue(r,s)},set(r,s){$.setValue(r,s);}}),l},re={beforeEdit(t){const e=k.cookieManagerApiName;return e==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=k.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}};let B=(t,e,o,i)=>({text:t,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return e()},callback(n,l){o(l);},placeholder:"",disabled:!!i}),Q=(t,e,o,i,a)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return o()},callback(l,r,s){i(r);},data:typeof e=="function"?e():e,disabled:false});const te={init(){},showView(t,e){let o=!!t,i=v.assign({name:"",value:"",domain:window.location.hostname,path:"/",secure:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+60*60*24*30*1e3},t,true);i=re.beforeEdit(i);let n=b.confirm({title:{text:o?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:o?"编辑":"添加",async callback(m,M){if(te.validCookieInfo(i)){if(i.value=encodeURIComponent(i.value),i=re.afterEdit(i),o){let x=await k.updateCookie(i);x?y.error(x.toString()):(y.success("修改成功"),m.close());}else {let x=await k.addCookie(i);x?y.error(x.toString()):(y.success("添加成功"),m.close());}typeof e=="function"&&e(i);}}},cancel:{text:"取消"}},mask:{enable:true},width:window.innerWidth>350?"350px":"80vw",height:A.setting.height,style:`
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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),l=b.config.panelHandleContentUtils(),r=l.createSectionContainerItem_input(B("name",()=>i.name,m=>i.name=m,o)),s=l.createSectionContainerItem_input(B("value",()=>i.value,m=>i.value=m)),c=l.createSectionContainerItem_input(B("domain",()=>i.domain,m=>i.domain=m)),d=l.createSectionContainerItem_input(B("path",()=>i.path,m=>i.path=m)),h;i.session?h=l.createSectionContainerItem_input(B("expires",()=>"会话",m=>{},true)):h=l.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(m){let M=g.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),S=M.querySelector("#cookie-item-property-expires");return S.valueAsNumber=i.expirationDate,g.on(S,["change","input","propertychange"],x=>{v.preventEvent(x),i.expirationDate=S.valueAsNumber;}),M}});let u=l.createSectionContainerItem_select(Q("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>i.httpOnly,m=>i.httpOnly=m)),f=l.createSectionContainerItem_select(Q("secure",[{text:"true",value:true},{text:"false",value:false}],()=>i.secure,m=>i.secure=m)),p=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];k.cookieManagerApiName==="cookieStore"&&(p=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let w=l.createSectionContainerItem_select(Q("sameSite",p,()=>i.sameSite,m=>i.sameSite=m));g.append(n,[r,s]),k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"?g.append(n,[c,d,h,u,f,w]):k.cookieManagerApiName==="cookieStore"&&g.append(n,[c,d,h,w]);},validCookieInfo(t){return t.name==null||t.name==""?(y.error("name不能为空"),false):t.domain==null||t.domain==""?(y.error("domain不能为空"),false):t.path==null||t.path==""?(y.error("path不能为空"),false):true}},W=function(t,e,o,i,a,n){let l=[];typeof i=="function"?l=i():l=i;let r={text:t,type:"select",description:n,attributes:{},props:{},getValue(){return this.props[E].get(e,o)},callback(s,c,d){let h=c;if(_.info(`选择：${d}`),typeof a=="function"&&a(s,h,d))return;this.props[E].set(e,h);},data:l};return Reflect.set(r.attributes,U,e),Reflect.set(r.attributes,z,o),J.initComponentsStorageApi("select",r,{get(s,c){return $.getValue(s,c)},set(s,c){$.setValue(s,c);}}),r},X=function(t,e,o,i,a,n="",l,r,s){let c={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:i,afterAddToUListCallBack:s,getValue(){return this.props[E].get(e,o)},callback(d,h){this.props[E].set(e,h);},placeholder:n};return Reflect.set(c.attributes,U,e),Reflect.set(c.attributes,z,o),J.initComponentsStorageApi("input",c,{get(d,h){return $.getValue(d,h)},set(d,h){$.setValue(d,h);}}),c},Se=function(t,e,o,i,a,n="",l){let r={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:n,disabled:l,getValue(){let c=this.props[E].get(e,o);return Array.isArray(c)?c.join(`
`):c},callback(s,c){this.props[E].set(e,c);}};return Reflect.set(r.attributes,U,e),Reflect.set(r.attributes,z,o),J.initComponentsStorageApi("switch",r,{get(s,c){return $.getValue(s,c)},set(s,c){$.setValue(s,c);}}),r};class $e{constructor(e){P(this,"option");this.option=e;}async showView(){var l;let e=b.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:v.assign({ok:{callback:async()=>{await n();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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

                ${((l=this.option)==null?void 0:l.style)??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),o=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let i=e.$shadowRoot.querySelector(".rule-form-ulist"),a=await this.option.getView(await this.option.data());i.appendChild(a);const n=async()=>{(await this.option.onsubmit(o,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class Ee{constructor(e){P(this,"option");this.option=e;}showView(){let e=b.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),o=e.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(a=>{let n=document.createElement("button");n.innerText=a.name;let l=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await a.filterCallBack(s.data)?g.show(s.$el,false):g.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};g.on(n,"click",async r=>{v.preventEvent(r),!(typeof a.callback=="function"&&!await a.callback(r,l))&&await l();}),i.appendChild(n);}),o.appendChild(i);}}class De{constructor(e){P(this,"option");this.option=e;}async showView(e){var n,l,r,s,c,d,h,u,f;let o=b.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((r=(l=(n=this.option)==null?void 0:n.bottomControls)==null?void 0:l.add)==null?void 0:r.enable)||true,type:"primary",text:"添加",callback:async p=>{this.showEditView(false,await this.option.getAddData(),o.$shadowRoot);}},close:{enable:true,callback(p){o.close();}},cancel:{enable:((d=(c=(s=this.option)==null?void 0:s.bottomControls)==null?void 0:c.filter)==null?void 0:d.enable)||false,type:"default",text:"过滤",callback:(p,w)=>{var S,x,C,V,D,N,T;typeof((C=(x=(S=this.option)==null?void 0:S.bottomControls)==null?void 0:x.filter)==null?void 0:C.callback)=="function"&&this.option.bottomControls.filter.callback();let m=()=>Array.from(o.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),M=w.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");g.text(M).includes("取消")?(m().forEach(le=>{g.show(le,false);}),g.text(M,"过滤")):new Ee({title:((D=(V=this.option.bottomControls)==null?void 0:V.filter)==null?void 0:D.title)??"过滤规则",filterOption:((T=(N=this.option.bottomControls)==null?void 0:N.filter)==null?void 0:T.option)||[],execFilterCallBack(){g.text(M,"取消过滤");},getAllRuleInfo:()=>m().map(ne=>({data:this.parseRuleItemElement(ne).data,$el:ne}))}).showView();}},other:{enable:((f=(u=(h=this.option)==null?void 0:h.bottomControls)==null?void 0:u.clear)==null?void 0:f.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:p=>{let w=b.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async m=>{var S,x,C;if(_.success("清空所有"),typeof((C=(x=(S=this.option)==null?void 0:S.bottomControls)==null?void 0:x.clear)==null?void 0:C.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){y.error("清理失败");return}else y.success("清理成功");await this.updateDeleteAllBtnText(o.$shadowRoot),this.clearContent(o.$shadowRoot),w.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),i=await this.option.data(),a=false;for(let p=0;p<i.length;p++){let w=i[p],m=await this.appendRuleItemElement(o.$shadowRoot,w);(typeof e=="function"?e(w):true)||(a=true,m.forEach(S=>{g.hide(S,false);}));}if(a){let p=o.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");g.text(p,"取消过滤");}}showEditView(e,o,i,a,n,l){let r=async c=>{if(c){if(typeof l=="function"){let d=await this.option.getData(o);l(d);}}else if(e||await this.option.deleteData(o),typeof n=="function"){let d=await this.option.getData(o);n(d);}};new $e({title:e?"编辑":"添加",data:()=>o,dialogCloseCallBack:r,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,d)=>{c.close(),await r(false);}},close:{callback:async(c,d)=>{c.close(),await r(false);}}},onsubmit:async(c,d)=>{let h=await this.option.itemControls.edit.onsubmit(c,e,d);return h.success?e?(y.success("修改成功"),i&&await this.updateRuleItemElement(h.data,a,i)):i&&await this.appendRuleItemElement(i,h.data):e&&_.error("修改失败"),h},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let o=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:o,$deleteBtn:i}}parseRuleItemElement(e){let o=e.querySelector(".rule-controls-enable"),i=o.querySelector(".pops-panel-switch"),a=o.querySelector(".pops-panel-switch__input"),n=o.querySelector(".pops-panel-switch__core"),l=e.querySelector(".rule-controls-edit"),r=e.querySelector(".rule-controls-delete");return {$enable:o,$enableSwitch:i,$enableSwitchInput:a,$enableSwitchCore:n,$edit:l,$delete:r,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,o){let i=await this.option.getDataItemName(e),a=g.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(a,"data-rule",e);let n="pops-panel-switch-is-checked";const{$enable:l,$enableSwitch:r,$enableSwitchCore:s,$enableSwitchInput:c,$delete:d,$edit:h}=this.parseRuleItemElement(a);return this.option.itemControls.enable.enable?(g.on(s,"click",async u=>{let f=false;r.classList.contains(n)?(r.classList.remove(n),f=false):(r.classList.add(n),f=true),c.checked=f,await this.option.itemControls.enable.callback(e,f);}),await this.option.itemControls.enable.getEnable(e)&&r.classList.add(n)):l.remove(),this.option.itemControls.edit.enable?g.on(h,"click",u=>{v.preventEvent(u),this.showEditView(true,e,o,a,f=>{e=null,e=f;});}):h.remove(),this.option.itemControls.delete.enable?g.on(d,"click",u=>{v.preventEvent(u);let f=b.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async p=>{_.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(y.success("成功删除该数据"),a.remove(),await this.updateDeleteAllBtnText(o),f.close()):y.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),a}async appendRuleItemElement(e,o){let{$container:i}=this.parseViewElement(e),a=[],n=Array.isArray(o)?o:[o];for(let l=0;l<n.length;l++){let r=n[l],s=await this.createRuleItemElement(r,e);i.appendChild(s),a.push(s);}return await this.updateDeleteAllBtnText(e),a}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:o}=this.parseViewElement(e);let i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,o,i){let a=await this.createRuleItemElement(e,i);o.after(a),o.remove();}clearContent(e){const{$container:o}=this.parseViewElement(e);g.html(o,"");}setDeleteBtnText(e,o,i=false){const{$deleteBtn:a}=this.parseViewElement(e);i?g.html(a,o):g.text(a,o);}async updateDeleteAllBtnText(e){let o=await this.option.data();this.setDeleteBtnText(e,`清空所有(${o.length})`);}}const I={$key:{STORAGE_KEY:"cookie-rule"},$data:{ruleData:[]},init(){this.$data.ruleData=[],this.getData().forEach(e=>{if(!e.enable)return;let o=window.location.href,i=e.data.url;if(e.data.enableRegExpToMatchUrl){if(!new RegExp(i,"i").test(o))return}else if(!o.includes(i))return;this.$data.ruleData.push(e);});},showView(){let t=b.config.panelHandleContentUtils();function e(i,a){return {get(n,l){return Reflect.get(i,n)??l},set(n,l){Reflect.set(i,n,l);}}}new De({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(l=>l.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,a)=>{i.enable=a,this.updateData(i);}},edit:{enable:true,getView:(i,a)=>{let n=document.createDocumentFragment(),l=this.getTemplateData();a||(i=l);let r=L("启用","enable",l.enable);Reflect.set(r.props,E,e(i));let s=t.createSectionContainerItem_switch(r),c=X("规则名称","name","",l.name,void 0,"必填");Reflect.set(c.props,E,e(i));let d=t.createSectionContainerItem_input(c),h=X("网址","url",l.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(h.props,E,e(i.data));let u=t.createSectionContainerItem_input(h),f=L("启用正则匹配网址","enableRegExpToMatchUrl",l.data.enableRegExpToMatchUrl);Reflect.set(f.props,E,e(i.data));let p=t.createSectionContainerItem_switch(f),w=X("Cookie名称","cookieName",l.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(w.props,E,e(i.data));let m=t.createSectionContainerItem_input(w),M=L("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",l.data.enableRegExpToMatchCookieName);Reflect.set(M.props,E,e(i.data));let S=t.createSectionContainerItem_switch(M),x=W("操作模式","operationMode",l.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(x.props,E,e(i.data));let C=t.createSectionContainerItem_select(x),V=Se("备注","remark",l.data.remark);Reflect.set(V.props,E,e(i.data));let D=t.createSectionContainerItem_textarea(V);return n.append(s,d,u,p,m,S,C,D),n},onsubmit:(i,a,n)=>{let l=i.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();a&&(r.uuid=n.uuid);try{return l.forEach(s=>{let c=Reflect.get(s,"__formConfig__"),d=Reflect.get(c,"attributes"),h=Reflect.get(s,E),u=Reflect.get(d,U),f=Reflect.get(d,z),p=h.get(u,f);Reflect.has(r,u)?Reflect.set(r,u,p):Reflect.has(r.data,u)?Reflect.set(r.data,u,p):_.error(`${u}不在数据中`);}),r.name.trim()===""?(y.error("规则名称不能为空"),{success:!1,data:r}):r.data.url.trim()===""?(y.error("网址不能为空"),{success:!1,data:r}):r.data.cookieName.trim()===""?(y.error("Cookie名称不能为空"),{success:!1,data:r}):a?{success:this.updateData(r),data:r}:{success:this.addData(r),data:r}}catch(s){return _.error(s),{success:false,data:r}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},getTemplateData(){return {uuid:v.generateUUID(),enable:true,name:"",data:{url:"",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return ie(this.$key.STORAGE_KEY,[])},setData(t){K(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(i=>i.uuid==t.uuid)===-1?(e.push(t),K(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),o=e.findIndex(a=>a.uuid==t.uuid),i=false;return o!==-1&&(i=true,e[o]=t),this.setData(e),i},deleteData(t){let e=this.getData(),o=e.findIndex(a=>a.uuid==t.uuid),i=false;return o!==-1&&(i=true,e.splice(o,1)),this.setData(e),i},clearData(){ce(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),o=new Blob([JSON.stringify(e,null,4)]),i=window.URL.createObjectURL(o),a=g.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){let t=b.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
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
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),o=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");g.on(e,"click",i=>{v.preventEvent(i),t.close();let a=g.createElement("input",{type:"file",accept:".json"});g.on(a,["propertychange","input"],n=>{var s;if(!((s=a.files)!=null&&s.length))return;let l=a.files[0],r=new FileReader;r.onload=()=>{let c=v.toJSON(r.result);if(!Array.isArray(c)){_.error("不是正确的规则文件",c),y.error("不是正确的规则文件");return}this.setData(c),y.success(`成功导入 ${c.length}条规则`);},r.readAsText(l,"UTF-8");}),a.click();}),g.on(o,"click",i=>{v.preventEvent(i),t.close(),b.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(a,n)=>{let l=a.text;if(v.isNull(l)){y.error("请填入完整的url");return}let r=await oe.get(l);if(!r.status)return;let s=v.toJSON(r.data.responseText);if(!Array.isArray(s)){_.error("不是正确的规则文件",r,s),y.error("不是正确的规则文件");return}this.setData(s),a.close(),y.success(`成功导入 ${s.length}条规则`);}}},width:A.info.width,height:"auto"});});}},Ae={init(){this.registerMenu();},async showView(){const t=b.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
                            <button class="cookie-control-refresh" type="default">刷新</button>
                            <button class="cookie-control-add" type="default">添加</button>
                            <button class="cookie-control-copy-all" type="default">复制全部</button>
                            <button class="cookie-control-clear-all" type="default">清除全部</button>
                            <button class="cookie-control-rule-manager" type="default">规则管理</button>
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
            `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),o=t.$shadowRoot.querySelector(".cookie-search-setting"),i=t.$shadowRoot.querySelector(".cookie-control-refresh"),a=t.$shadowRoot.querySelector(".cookie-control-add"),n=t.$shadowRoot.querySelector(".cookie-control-copy-all"),l=t.$shadowRoot.querySelector(".cookie-control-clear-all"),r=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),s=t.$shadowRoot.querySelector(".cookie-setting"),c=t.$shadowRoot.querySelector(".cookie-list-wrapper");let d=u=>{const f=g.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":u}),p=[{leftText:"name",rightText:u.name},{leftText:"value",rightText:$.getValue("decode-cookie-value")?decodeURIComponent(u.value):encodeURIComponent(u.value)}];k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"?(u=u,p.push({leftText:"domain",rightText:u.domain},{leftText:"path",rightText:u.path},{leftText:"session",rightText:JSON.stringify(u.session)},{leftText:"expires",rightText:u.session?"会话":u.expirationDate?new Date(u.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(u.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(u.hostOnly)},{leftText:"secure",rightText:JSON.stringify(u.secure)},{leftText:"sameSite",rightText:u.sameSite})):k.cookieManagerApiName==="cookieStore"&&(u=u,p.push({leftText:"domain",rightText:u.domain},{leftText:"path",rightText:u.path},{leftText:"expires",rightText:u.expires?new Date(u.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(u.secure)},{leftText:"sameSite",rightText:u.sameSite})),p.forEach(x=>{const C=g.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${x.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${x.rightText}</p>
                        </div>
                    `});g.append(f,C);});let w=g.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
                `}),m=w.querySelector(".cookie-item-group-control-copy"),M=w.querySelector(".cookie-item-group-control-edit"),S=w.querySelector(".cookie-item-group-control-delete");return g.on(m,"click",x=>{v.preventEvent(x);let C=u.value;v.setClip(C).then(V=>{V?y.success("复制成功"):y.error("复制失败");});}),g.on(M,"click",x=>{v.preventEvent(x),te.showView(u,C=>{var D;let V=d(C);g.after(f,V),(D=f.parentElement)==null||D.removeChild(f);});}),g.on(S,"click",x=>{v.preventEvent(x),confirm("确定删除该Cookie？")&&k.deleteCookie(u).then(V=>{var D;V?(_.error(V),y.error("删除失败")):(y.success("删除成功"),(D=f.parentElement)==null||D.removeChild(f));});}),g.append(f,[w]),f},h=async u=>{let f=await k.queryAllCookie();typeof u=="function"&&(f=f.filter(u)),g.empty(c);let p=document.createDocumentFragment();f.forEach(w=>{if($.getValue("exclude-session-cookie")&&(w.session||k.cookieManagerApiName==="cookieStore"&&w.expires==null))return;const m=d(w);p.appendChild(m);}),c.appendChild(p);};h(),g.on(e,["input","propertychange"],v.debounce(u=>{h(f=>{let p=g.val(e);return $.getValue("search-config-use-regexp")?!!f.name.match(new RegExp(p)):f.name.includes(p)});})),g.listenKeyboard(e,"keypress",(u,f,p)=>{u==="Enter"&&p.length===0&&v.dispatchEvent(e,"input");}),g.on(o,"click",u=>{v.preventEvent(u);let p=b.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:A.info.width,height:A.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),m=b.config.panelHandleContentUtils().createSectionContainerItem_switch(L("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称"));g.append(p,m);}),g.on(i,"click",u=>{v.preventEvent(u),g.val(e)==""?h():v.dispatchEvent(e,"input");}),g.on(a,"click",u=>{v.preventEvent(u),te.showView(void 0,f=>{h();});}),g.on(n,"click",u=>{v.preventEvent(u),k.queryAllCookie().then(f=>{if(f=f.filter(w=>!(w.session&&$.getValue("exclude-session-cookie"))),f.length===0){y.warning("没有Cookie可以复制");return}let p=f.map(w=>{let m=w.value;return `${w.name}=${m}; `}).join("");v.setClip(p).then(w=>{w?y.success("复制成功"):y.error("复制失败");});});}),g.on(l,"click",u=>{v.preventEvent(u),window.confirm("确定清除全部Cookie？")&&k.deleteAllCookie().then(p=>{p.error?y.warning(`清除成功：${p.success} 失败：${p.error}`):y.success("清除成功"),h();});}),g.on(r,"click",u=>{v.preventEvent(u),I.showView();}),g.on(s,"click",u=>{v.preventEvent(u);let p=b.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:A.info.width,height:A.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),w=b.config.panelHandleContentUtils(),m=w.createSectionContainerItem_select(W("CookieManager Api","cookie-manager-api","document.cookie",[{text:"document.cookie",value:"document.cookie"},{text:"cookieStore",value:"cookieStore"},{text:"GM_cookie",value:"GM_cookie"},{text:"GM.cookie",value:"GM.cookie"}],()=>{h();},"操作Cookie的Api函数")),M=w.createSectionContainerItem_switch(L("解码Cookie值","decode-cookie-value",false,()=>{h();},"对Cookie值进行解码")),S=w.createSectionContainerItem_switch(L("排除Session Cookie","exclude-session-cookie",false,()=>{h();},"过滤掉浏览器会话Cookie"));g.append(p,[m,M,S]);});},registerMenu(){const t=this;he.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,o){return e},callback(e){t.showView();}});}},Re={init(){this.execController(),g.ready(()=>{this.execController();});},execController(){for(let t=0;t<I.$data.ruleData.length;t++){const e=I.$data.ruleData[t];k.queryAllCookie().then(async o=>{for(let i=0;i<o.length;i++){let a=o[i];const n=a.name,l=e.data.cookieName;let r=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(l,"i").test(n)&&(r=true):n.includes(l)&&(r=true),r){let s=e.data.operationMode;if(s==="delete")k.deleteCookie(a);else if(s==="extended"||s==="extended-90"||s==="extended-180"||s==="extended-360"){let c=Date.now(),d=30*24*60*60*1e3,h=d*3,u=d*6,f=d*12,p=d;s==="extended-90"?p=h:s==="extended-180"?p=u:s==="extended-360"&&(p=f);let w=false;if(k.cookieManagerApiName==="document.cookie")a.expirationDate=c+p,w=true;else if(k.cookieManagerApiName==="cookieStore"){let m=a.expires;typeof m=="number"&&m-c<p&&(a.expires=m+p,w=true);}else if(k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"){let m=a.expirationDate;typeof m=="number"&&m*1e3-c<p&&(a.expirationDate=m+p/1e3,w=true);}else _.error("未知的cookieManagerApiName",k.cookieManagerApiName);w&&await k.updateCookie(a);}}}});}}},ee=function(t,e,o,i,a,n,l,r,s,c){let d={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:i,buttonIsRightIcon:a,buttonIconIsLoading:n,buttonType:l,buttonText:o,callback(h){typeof r=="function"&&r(h);},afterAddToUListCallBack:s};return Reflect.set(d.attributes,pe,()=>{d.disable=false;}),d},Te={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[ee("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{I.showView();})]},{type:"forms",text:"",forms:[ee("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{I.importRule();}),ee("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{I.exportRule("CookieManagerRule.json");})]}]},qe={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[W("Toast位置",R.qmsg_config_position.key,R.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,o)=>{_.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),W("最多显示的数量",R.qmsg_config_maxnums.key,R.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),L("逆序弹出",R.qmsg_config_showreverse.key,R.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};ae.addContentConfig([qe,Te]);$.init();I.init();Re.init();Ae.init();

})(Qmsg, DOMUtils, Utils, pops);