// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.7.7
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.7/dist/index.umd.js
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

(function (w, de, I, K) {
            'use strict';

            var j=typeof GM<"u"?GM:void 0,he=typeof GM_cookie<"u"?GM_cookie:void 0,ae=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ee=typeof GM_getValue<"u"?GM_getValue:void 0,ne=typeof GM_info<"u"?GM_info:void 0,fe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,F=typeof GM_setValue<"u"?GM_setValue:void 0,ge=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,me=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,T=typeof unsafeWindow<"u"?unsafeWindow:void 0,xe=window;const le="GM_Panel",re="data-init",O="data-key",U="data-default-value",we="data-init-more-value",M="data-storage-api",E={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class ye{storageKey;listenerData;constructor(e){if(typeof e=="string"){let o=e.trim();if(o=="")throw new Error("key参数不能为空字符串");this.storageKey=o;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new I.Dictionary;}getLocalValue(){let e=ee(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){F(this.storageKey,e);}set(e,o){let i=this.get(e),a=this.getLocalValue();Reflect.set(a,e,o),this.setLocalValue(a),this.triggerValueChangeListener(e,i,o);}get(e,o){let i=this.getLocalValue();return Reflect.get(i,e)??o}getAll(){return this.getLocalValue()}delete(e){let o=this.get(e),i=this.getLocalValue();Reflect.deleteProperty(i,e),this.setLocalValue(i),this.triggerValueChangeListener(e,o,void 0);}has(e){let o=this.getLocalValue();return Reflect.has(o,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(o=>Reflect.get(e,o))}clear(){ae(this.storageKey);}addValueChangeListener(e,o){let i=Math.random(),a=this.listenerData.get(e)||[];return a.push({id:i,key:e,callback:o}),this.listenerData.set(e,a),i}removeValueChangeListener(e){let o=false;for(const[i,a]of this.listenerData.entries()){for(let n=0;n<a.length;n++){const l=a[n];(typeof e=="string"&&l.key===e||typeof e=="number"&&l.id===e)&&(a.splice(n,1),n--,o=true);}this.listenerData.set(i,a);}return o}triggerValueChangeListener(e,o,i){if(!this.listenerData.has(e))return;let a=this.listenerData.get(e);for(let n=0;n<a.length;n++){const l=a[n];if(typeof l.callback=="function"){let r=this.get(e),s,c;typeof o<"u"&&arguments.length>=2?c=o:c=r,typeof i<"u"&&arguments.length>2?s=i:s=r,l.callback(e,c,s);}}}}const q=new ye(le),ve={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{V.showPanel(ie.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){V.isTopWindow()&&ce.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let o=this.$data.menuOption.findIndex(i=>i.key===e.key);o!==-1&&(this.$data.menuOption[o]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},V={$data:{__configDefaultValueData:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get configDefaultValueData(){return this.__configDefaultValueData==null&&(this.__configDefaultValueData=new y.Dictionary),this.__configDefaultValueData},get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new y.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new y.Dictionary),this.__onceExecData},get scriptName(){return J},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:le,attributeKeyName:O,attributeDefaultValueName:U},init(){this.initContentDefaultValue(),ve.init();},isTopWindow(){return T.top===T.self},initContentDefaultValue(){const t=i=>{if(!i.attributes||i.type==="button"||i.type==="forms"||i.type==="deepMenu")return;let a={},n=i.attributes[O];n!=null&&(a[n]=i.attributes[U]);let l=i.attributes[re];if(typeof l=="function"){let c=l();if(typeof c=="boolean"&&!c)return}let r=i.attributes[we];r&&typeof r=="object"&&Object.assign(a,r);let s=Object.keys(a);if(!s.length){C.warn(["请先配置键",i]);return}s.forEach(c=>{let p=a[c];this.setDefaultValue(c,p);});},e=i=>{for(let a=0;a<i.length;a++){let n=i[a];t(n);let l=n.forms;l&&Array.isArray(l)&&e(l);}},o=[...ie.getAllContentConfig()];for(let i=0;i<o.length;i++){let a=o[i];if(!a.forms)continue;const n=a.forms;n&&Array.isArray(n)&&e(n);}},setDefaultValue(t,e){this.$data.configDefaultValueData.has(t)&&C.warn("请检查该key(已存在): "+t),this.$data.configDefaultValueData.set(t,e);},setValue(t,e){q.set(t,e);},getValue(t,e){let o=q.get(t);return o??(this.$data.configDefaultValueData.has(t)?this.$data.configDefaultValueData.get(t):e)},deleteValue(t){q.delete(t);},hasKey(t){return q.has(t)},addValueChangeListener(t,e){return q.addValueChangeListener(t,(i,a,n)=>{e(t,n,a);})},removeValueChangeListener(t){q.removeValueChangeListener(t);},triggerMenuValueChange(t,e,o){q.triggerValueChangeListener(t,o,e);},deleteExecMenuOnce(t){return this.$data.onceExecMenuData.delete(t),q.removeValueChangeListener(t)},deleteOnceExec(t){this.$data.onceExecData.delete(t);},exec(t,e,o,i=true){const a=this;let n;typeof t=="string"||Array.isArray(t)?n=()=>t:n=t;let l=false,r=n(),s=[];Array.isArray(r)?(l=true,s=r):s.push(r);let c=s.find(x=>!this.$data.configDefaultValueData.has(x));if(c){C.warn(`${c} 键不存在`);return}let p=JSON.stringify(s);if(i){if(this.$data.onceExecMenuData.has(p))return;this.$data.onceExecMenuData.set(p,1);}let f=[],u=[],h=(x,_)=>{let $=[];Array.isArray(_)||(_=[_]),_.forEach(R=>{if(R!=null&&R instanceof HTMLStyleElement){$.push(R);return}}),f=f.concat($);},g=x=>this.getValue(x),v=()=>{for(let x=0;x<f.length;x++)f[x].remove(),f.splice(x,1),x--;},m=()=>{let x=false;return typeof o=="function"?x=o(s):x=s.every(_=>g(_)),x},S=x=>{let _=m(),$=[];if(_){let R=s.map(N=>this.getValue(N)),z=e({value:l?R:R[0],addStyleElement:(...N)=>h(true,...N)});Array.isArray(z)||(z=[z]),z.forEach(N=>{if(N!=null&&N instanceof HTMLStyleElement){$.push(N);return}});}v(),f=[...$];};return i&&s.forEach(x=>{let _=this.addValueChangeListener(x,($,R,z)=>{S();});u.push(_);}),S(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),i&&a.$data.onceExecMenuData.delete(p);},clearStoreStyleElements:()=>v(),removeValueChangeListener:()=>{u.forEach(x=>{this.removeValueChangeListener(x);});}}},execMenu(t,e,o=false){return this.exec(t,i=>e(i),i=>i.every(n=>{let l=!!this.getValue(n);return o&&(l=!l),l}),false)},execMenuOnce(t,e){return this.exec(t,e,o=>o.every(a=>!!this.getValue(a)),true)},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},showPanel(t,e=`${J}-设置`){let o=b.panel({title:{text:`${J}-设置`,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(i,a)=>{i.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(i,a)=>{i(),this.$data.$panel=null;}},width:E.setting.width,height:E.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o;}},D={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},y=I.noConflict(),d=de.noConflict(),b=K,C=new y.Log(ne,T.console||xe.console);let J=ne?.script?.name||void 0;K.config.Utils.AnyTouch();const se=false;C.config({debug:se,logMaxCount:1e3,autoClearConsole:true,tag:true});w.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return V.getValue(D.qmsg_config_position.key,D.qmsg_config_position.defaultValue)}},maxNums:{get(){return V.getValue(D.qmsg_config_maxnums.key,D.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return V.getValue(D.qmsg_config_showreverse.key,D.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let t=I.getMaxZIndex(),e=K.config.InstanceUtils.getPopsMaxZIndex().zIndex;return I.getMaxValue(t,e)+100}}}));b.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=I.getMaxZIndex(void 0,void 0,o=>{if(o?.classList?.contains("qmsg-shadow-container")||o?.closest("qmsg")&&o.getRootNode()instanceof ShadowRoot)return  false}),e=K.config.InstanceUtils.getPopsMaxZIndex().zIndex;return I.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const ce=new y.GM_Menu({GM_getValue:ee,GM_setValue:F,GM_registerMenuCommand:fe,GM_unregisterMenuCommand:ge}),te=new y.Httpx({xmlHttpRequest:me,logDetails:se});te.interceptors.request.use(t=>t);te.interceptors.response.use(void 0,t=>(C.error("拦截器-请求错误",t),t.type==="onabort"?w.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?w.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?w.error("请求超时",{consoleLogContent:true}):w.error("其它错误",{consoleLogContent:true}),t));T.Object.defineProperty,T.Function.prototype.apply,T.Function.prototype.call,T.Element.prototype.appendChild,T.setTimeout;y.addStyle.bind(y);document.querySelector.bind(document);document.querySelectorAll.bind(document);const ue=new y.GM_Cookie,ie={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new y.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]}};let pe=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const B=he;pe(B);pe(ue);const k={get cookieManagerApiName(){return V.getValue("cookie-manager-api","document.cookie")},get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(t,e){B.list(t,o=>{e(o);});},set(t,e){B.set(t,o=>{e(o);});},delete(t,e){B.delete(t,o=>{e(o);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(t,e){j.cookie.list().then(o=>{e(o);});},set(t,e){j.cookie.set(t).then(o=>{e(o??null);}).catch(o=>{e(o);});},delete(t,e){j.cookie.delete(t).then(o=>{e(o??null);}).catch(o=>{e(o);});}};if(this.cookieManagerApiName==="cookieStore"){let t=T.cookieStore;return {list(e,o){t.getAll().then(i=>{o(i);}).catch(i=>{C.error(i),w.error(i.toString());});},set(e,o){t.set(e).then(()=>{o();}).catch(i=>{o(i);});},delete(e,o){t.delete(e).then(i=>{o();}).catch(i=>{o(i);});}}}else return ue},queryAllCookie(){return new Promise((t,e)=>{try{this.cookieManager.list({},o=>{let i=o||[];i=i.sort((a,n)=>a.name.localeCompare(n.name)),t(i);});}catch(o){C.error(o),w.error(o.toString()),e(o);}})},deleteAllCookie(){return new Promise((t,e)=>{try{this.cookieManager.list({},async o=>{const i=o||[],a={success:0,error:0};for(let n=0;n<i.length;n++){const l=i[n];await new Promise(s=>{this.deleteCookie(l).then(c=>{s(c);});})?a.error++:a.success++;}t(a);});}catch(o){C.error(o),w.error(o.toString()),e(o);}})},addCookie(t){return new Promise((e,o)=>{try{Reflect.deleteProperty(t,"hostOnly"),k.cookieManager.set(t,i=>{e(i);});}catch(i){C.error(i),w.error(i.toString()),o(i);}})},deleteCookie(t){return new Promise((e,o)=>{try{k.cookieManager.delete(t,i=>{e(i);});}catch(i){C.error(i),w.error(i.toString()),o(i);}})},updateCookie(t){return new Promise(async(e,o)=>{let i;try{let a=await k.deleteCookie(t);if(a)throw new TypeError(a.toString());let n=await k.addCookie(t);if(n)throw new TypeError(n.toString())}catch(a){i=a;}finally{e(i);}})}},W={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new I.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,o){let i;this.hasStorageApi(t)?i=this.getStorageApi(t):i=o,this.setComponentsStorageApiProperty(e,i);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,M,e);}},G=function(t,e,o,i,a,n){let l={text:t,type:"switch",description:a,attributes:{},props:{},getValue(){return !!this.props[M].get(e,o)},callback(r,s){let c=!!s;if(C.success(`${c?"开启":"关闭"} ${t}`),typeof i=="function"&&i(r,c))return;this.props[M].set(e,c);},afterAddToUListCallBack:n};return Reflect.set(l.attributes,O,e),Reflect.set(l.attributes,U,o),W.initComponentsStorageApi("switch",l,{get(r,s){return V.getValue(r,s)},set(r,s){V.setValue(r,s);}}),l},oe={beforeEdit(t){const e=k.cookieManagerApiName;return e==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=k.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}};let P=(t,e,o,i)=>({text:t,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return e()},callback(n,l){o(l);},placeholder:"",disabled:!!i}),Y=(t,e,o,i,a)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return o()},callback(l,r,s){i(r);},data:typeof e=="function"?e():e,disabled:false});const X={init(){},showView(t,e){let o=!!t,i=y.assign({name:"",value:"",domain:window.location.hostname,path:"/",secure:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+60*60*24*30*1e3},t,true);i=oe.beforeEdit(i);let n=b.confirm({title:{text:o?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:o?"编辑":"添加",async callback(m,S){if(X.validCookieInfo(i)){if(i.value=encodeURIComponent(i.value),i=oe.afterEdit(i),o){let x=await k.updateCookie(i);x?w.error(x.toString()):(w.success("修改成功"),m.close());}else {let x=await k.addCookie(i);x?w.error(x.toString()):(w.success("添加成功"),m.close());}typeof e=="function"&&e(i);}}},cancel:{text:"取消"}},mask:{enable:true},width:window.innerWidth>350?"350px":"80vw",height:E.setting.height,style:`
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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),l=b.config.PanelHandlerComponents(),r=l.createSectionContainerItem_input(P("name",()=>i.name,m=>i.name=m,o)),s=l.createSectionContainerItem_input(P("value",()=>i.value,m=>i.value=m)),c=l.createSectionContainerItem_input(P("domain",()=>i.domain,m=>i.domain=m)),p=l.createSectionContainerItem_input(P("path",()=>i.path,m=>i.path=m)),f;i.session?f=l.createSectionContainerItem_input(P("expires",()=>"会话",m=>{},true)):f=l.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(m){let S=d.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),A=S.querySelector("#cookie-item-property-expires");return A.valueAsNumber=i.expirationDate,d.on(A,["change","input","propertychange"],x=>{y.preventEvent(x),i.expirationDate=A.valueAsNumber;}),S}});let u=l.createSectionContainerItem_select(Y("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>i.httpOnly,m=>i.httpOnly=m)),h=l.createSectionContainerItem_select(Y("secure",[{text:"true",value:true},{text:"false",value:false}],()=>i.secure,m=>i.secure=m)),g=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];k.cookieManagerApiName==="cookieStore"&&(g=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let v=l.createSectionContainerItem_select(Y("sameSite",g,()=>i.sameSite,m=>i.sameSite=m));d.append(n,[r,s]),k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"?d.append(n,[c,p,f,u,h,v]):k.cookieManagerApiName==="cookieStore"&&d.append(n,[c,p,f,v]);},validCookieInfo(t){return t.name==null||t.name==""?(w.error("name不能为空"),false):t.domain==null||t.domain==""?(w.error("domain不能为空"),false):t.path==null||t.path==""?(w.error("path不能为空"),false):true}},H=function(t,e,o,i,a,n){let l=[];typeof i=="function"?l=i():l=i;let r={text:t,type:"select",description:n,attributes:{},props:{},getValue(){return this.props[M].get(e,o)},callback(s,c,p){let f=c;if(C.info(`选择：${p}`),typeof a=="function"&&a(s,f,p))return;this.props[M].set(e,f);},data:l};return Reflect.set(r.attributes,O,e),Reflect.set(r.attributes,U,o),W.initComponentsStorageApi("select",r,{get(s,c){return V.getValue(s,c)},set(s,c){V.setValue(s,c);}}),r},Z=function(t,e,o,i,a,n="",l,r,s){let c={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:i,afterAddToUListCallBack:s,getValue(){return this.props[M].get(e,o)},callback(p,f,u){this.props[M].set(e,f);},placeholder:n};return Reflect.set(c.attributes,O,e),Reflect.set(c.attributes,U,o),W.initComponentsStorageApi("input",c,{get(p,f){return V.getValue(p,f)},set(p,f){V.setValue(p,f);}}),c},ke=function(t,e,o,i,a,n="",l){let r={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:n,disabled:l,getValue(){let c=this.props[M].get(e,o);return Array.isArray(c)?c.join(`
`):c},callback(s,c){this.props[M].set(e,c);}};return Reflect.set(r.attributes,O,e),Reflect.set(r.attributes,U,o),W.initComponentsStorageApi("switch",r,{get(s,c){return V.getValue(s,c)},set(s,c){V.setValue(s,c);}}),r};class be{option;constructor(e){this.option=e;}async showView(){let e=b.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:y.assign({ok:{callback:async()=>{await n();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),o=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let i=e.$shadowRoot.querySelector(".rule-form-ulist"),a=await this.option.getView(await this.option.data());i.appendChild(a);const n=async()=>{(await this.option.onsubmit(o,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class Ce{option;constructor(e){this.option=e;}showView(){let e=b.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),o=e.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(a=>{let n=document.createElement("button");n.innerText=a.name;let l=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await a.filterCallBack(s.data)?d.show(s.$el,false):d.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};d.on(n,"click",async r=>{y.preventEvent(r),!(typeof a.callback=="function"&&!await a.callback(r,l))&&await l();}),i.appendChild(n);}),o.appendChild(i);}}class _e{option;constructor(e){this.option=e;}async showView(e){let o=b.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async n=>{this.showEditView(false,await this.option.getAddData(),o.$shadowRoot);}},close:{enable:true,callback(n){o.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:(n,l)=>{typeof this.option?.bottomControls?.filter?.callback=="function"&&this.option.bottomControls.filter.callback();let r=()=>Array.from(o.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),s=l.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");d.text(s).includes("取消")?(r().forEach(c=>{d.show(c,false);}),d.text(s,"过滤")):new Ce({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack(){d.text(s,"取消过滤");},getAllRuleInfo:()=>r().map(p=>({data:this.parseRuleItemElement(p).data,$el:p}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:n=>{let l=b.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async r=>{if(C.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(o.$shadowRoot),this.clearContent(o.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),i=await this.option.data(),a=false;for(let n=0;n<i.length;n++){let l=i[n],r=await this.appendRuleItemElement(o.$shadowRoot,l);(typeof e=="function"?e(l):true)||(a=true,r.forEach(c=>{d.hide(c,false);}));}if(a){let n=o.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");d.text(n,"取消过滤");}}showEditView(e,o,i,a,n,l){let r=async c=>{if(c){if(typeof l=="function"){let p=await this.option.getData(o);l(p);}}else if(e||await this.option.deleteData(o),typeof n=="function"){let p=await this.option.getData(o);n(p);}};new be({title:e?"编辑":"添加",data:()=>o,dialogCloseCallBack:r,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,p)=>{c.close(),await r(false);}},close:{callback:async(c,p)=>{c.close(),await r(false);}}},onsubmit:async(c,p)=>{let f=await this.option.itemControls.edit.onsubmit(c,e,p);return f.success?e?(w.success("修改成功"),i&&await this.updateRuleItemElement(f.data,a,i)):i&&await this.appendRuleItemElement(i,f.data):e&&C.error("修改失败"),f},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let o=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:o,$deleteBtn:i}}parseRuleItemElement(e){let o=e.querySelector(".rule-controls-enable"),i=o.querySelector(".pops-panel-switch"),a=o.querySelector(".pops-panel-switch__input"),n=o.querySelector(".pops-panel-switch__core"),l=e.querySelector(".rule-controls-edit"),r=e.querySelector(".rule-controls-delete");return {$enable:o,$enableSwitch:i,$enableSwitchInput:a,$enableSwitchCore:n,$edit:l,$delete:r,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,o){let i=await this.option.getDataItemName(e),a=d.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(a,"data-rule",e);let n="pops-panel-switch-is-checked";const{$enable:l,$enableSwitch:r,$enableSwitchCore:s,$enableSwitchInput:c,$delete:p,$edit:f}=this.parseRuleItemElement(a);return this.option.itemControls.enable.enable?(d.on(s,"click",async u=>{let h=false;r.classList.contains(n)?(r.classList.remove(n),h=false):(r.classList.add(n),h=true),c.checked=h,await this.option.itemControls.enable.callback(e,h);}),await this.option.itemControls.enable.getEnable(e)&&r.classList.add(n)):l.remove(),this.option.itemControls.edit.enable?d.on(f,"click",u=>{y.preventEvent(u),this.showEditView(true,e,o,a,h=>{e=null,e=h;});}):f.remove(),this.option.itemControls.delete.enable?d.on(p,"click",u=>{y.preventEvent(u);let h=b.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async g=>{C.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(w.success("成功删除该数据"),a.remove(),await this.updateDeleteAllBtnText(o),h.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),a}async appendRuleItemElement(e,o){let{$container:i}=this.parseViewElement(e),a=[],n=Array.isArray(o)?o:[o];for(let l=0;l<n.length;l++){let r=n[l],s=await this.createRuleItemElement(r,e);i.appendChild(s),a.push(s);}return await this.updateDeleteAllBtnText(e),a}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:o}=this.parseViewElement(e);let i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,o,i){let a=await this.createRuleItemElement(e,i);o.after(a),o.remove();}clearContent(e){const{$container:o}=this.parseViewElement(e);d.html(o,"");}setDeleteBtnText(e,o,i=false){const{$deleteBtn:a}=this.parseViewElement(e);i?d.html(a,o):d.text(a,o);}async updateDeleteAllBtnText(e){let o=await this.option.data();this.setDeleteBtnText(e,`清空所有(${o.length})`);}}const L={$key:{STORAGE_KEY:"cookie-rule"},$data:{ruleData:[]},init(){this.$data.ruleData=[],this.getData().forEach(e=>{if(!e.enable)return;let o=window.location.href,i=e.data.url;if(e.data.enableRegExpToMatchUrl){if(!new RegExp(i,"i").test(o))return}else if(!o.includes(i))return;this.$data.ruleData.push(e);});},showView(){let t=b.config.PanelHandlerComponents();function e(i,a){return {get(n,l){return Reflect.get(i,n)??l},set(n,l){Reflect.set(i,n,l);}}}new _e({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(l=>l.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,a)=>{i.enable=a,this.updateData(i);}},edit:{enable:true,getView:(i,a)=>{let n=document.createDocumentFragment(),l=this.getTemplateData();a||(i=l);let r=G("启用","enable",l.enable);Reflect.set(r.props,M,e(i));let s=t.createSectionContainerItem_switch(r),c=Z("规则名称","name","",l.name,void 0,"必填");Reflect.set(c.props,M,e(i));let p=t.createSectionContainerItem_input(c),f=Z("网址","url",l.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(f.props,M,e(i.data));let u=t.createSectionContainerItem_input(f),h=G("启用正则匹配网址","enableRegExpToMatchUrl",l.data.enableRegExpToMatchUrl);Reflect.set(h.props,M,e(i.data));let g=t.createSectionContainerItem_switch(h),v=Z("Cookie名称","cookieName",l.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(v.props,M,e(i.data));let m=t.createSectionContainerItem_input(v),S=G("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",l.data.enableRegExpToMatchCookieName);Reflect.set(S.props,M,e(i.data));let A=t.createSectionContainerItem_switch(S),x=H("操作模式","operationMode",l.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(x.props,M,e(i.data));let _=t.createSectionContainerItem_select(x),$=ke("备注","remark",l.data.remark);Reflect.set($.props,M,e(i.data));let R=t.createSectionContainerItem_textarea($);return n.append(s,p,u,g,m,A,_,R),n},onsubmit:(i,a,n)=>{let l=i.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();a&&(r.uuid=n.uuid);try{return l.forEach(s=>{let c=Reflect.get(s,"__formConfig__"),p=Reflect.get(c,"attributes"),f=Reflect.get(s,M),u=Reflect.get(p,O),h=Reflect.get(p,U),g=f.get(u,h);Reflect.has(r,u)?Reflect.set(r,u,g):Reflect.has(r.data,u)?Reflect.set(r.data,u,g):C.error(`${u}不在数据中`);}),r.name.trim()===""?(w.error("规则名称不能为空"),{success:!1,data:r}):r.data.url.trim()===""?(w.error("网址不能为空"),{success:!1,data:r}):r.data.cookieName.trim()===""?(w.error("Cookie名称不能为空"),{success:!1,data:r}):a?{success:this.updateData(r),data:r}:{success:this.addData(r),data:r}}catch(s){return C.error(s),{success:false,data:r}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},getTemplateData(){return {uuid:y.generateUUID(),enable:true,name:"",data:{url:"",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return ee(this.$key.STORAGE_KEY,[])},setData(t){F(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(i=>i.uuid==t.uuid)===-1?(e.push(t),F(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),o=e.findIndex(a=>a.uuid==t.uuid),i=false;return o!==-1&&(i=true,e[o]=t),this.setData(e),i},deleteData(t){let e=this.getData(),o=e.findIndex(a=>a.uuid==t.uuid),i=false;return o!==-1&&(i=true,e.splice(o,1)),this.setData(e),i},clearData(){ae(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),o=new Blob([JSON.stringify(e,null,4)]),i=window.URL.createObjectURL(o),a=d.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){let t=b.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:E.info.width,height:E.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),o=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");d.on(e,"click",i=>{y.preventEvent(i),t.close();let a=d.createElement("input",{type:"file",accept:".json"});d.on(a,["propertychange","input"],n=>{if(!a.files?.length)return;let l=a.files[0],r=new FileReader;r.onload=()=>{let s=y.toJSON(r.result);if(!Array.isArray(s)){C.error("不是正确的规则文件",s),w.error("不是正确的规则文件");return}this.setData(s),w.success(`成功导入 ${s.length}条规则`);},r.readAsText(l,"UTF-8");}),a.click();}),d.on(o,"click",i=>{y.preventEvent(i),t.close(),b.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(a,n)=>{let l=a.text;if(y.isNull(l)){w.error("请填入完整的url");return}let r=await te.get(l);if(!r.status)return;let s=y.toJSON(r.data.responseText);if(!Array.isArray(s)){C.error("不是正确的规则文件",r,s),w.error("不是正确的规则文件");return}this.setData(s),a.close(),w.success(`成功导入 ${s.length}条规则`);}}},width:E.info.width,height:"auto"});});}},Ve={init(){this.registerMenu();},async showView(){const t=b.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:E.setting.width,height:E.setting.height,style:`
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
            `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),o=t.$shadowRoot.querySelector(".cookie-search-setting"),i=t.$shadowRoot.querySelector(".cookie-control-refresh"),a=t.$shadowRoot.querySelector(".cookie-control-add"),n=t.$shadowRoot.querySelector(".cookie-control-copy-all"),l=t.$shadowRoot.querySelector(".cookie-control-clear-all"),r=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),s=t.$shadowRoot.querySelector(".cookie-setting"),c=t.$shadowRoot.querySelector(".cookie-list-wrapper");let p=u=>{const h=d.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":u}),g=[{leftText:"name",rightText:u.name},{leftText:"value",rightText:V.getValue("decode-cookie-value")?decodeURIComponent(u.value):encodeURIComponent(u.value)}];k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"?(u=u,g.push({leftText:"domain",rightText:u.domain},{leftText:"path",rightText:u.path},{leftText:"session",rightText:JSON.stringify(u.session)},{leftText:"expires",rightText:u.session?"会话":u.expirationDate?new Date(u.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(u.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(u.hostOnly)},{leftText:"secure",rightText:JSON.stringify(u.secure)},{leftText:"sameSite",rightText:u.sameSite})):k.cookieManagerApiName==="cookieStore"&&(u=u,g.push({leftText:"domain",rightText:u.domain},{leftText:"path",rightText:u.path},{leftText:"expires",rightText:u.expires?new Date(u.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(u.secure)},{leftText:"sameSite",rightText:u.sameSite})),g.forEach(x=>{const _=d.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${x.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${x.rightText}</p>
                        </div>
                    `});d.append(h,_);});let v=d.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
                `}),m=v.querySelector(".cookie-item-group-control-copy"),S=v.querySelector(".cookie-item-group-control-edit"),A=v.querySelector(".cookie-item-group-control-delete");return d.on(m,"click",x=>{y.preventEvent(x);let _=u.value;y.setClip(_).then($=>{$?w.success("复制成功"):w.error("复制失败");});}),d.on(S,"click",x=>{y.preventEvent(x),X.showView(u,_=>{let $=p(_);d.after(h,$),h.parentElement?.removeChild(h);});}),d.on(A,"click",x=>{y.preventEvent(x),confirm("确定删除该Cookie？")&&k.deleteCookie(u).then($=>{$?(C.error($),w.error("删除失败")):(w.success("删除成功"),h.parentElement?.removeChild(h));});}),d.append(h,[v]),h},f=async u=>{let h=await k.queryAllCookie();typeof u=="function"&&(h=h.filter(u)),d.empty(c);let g=document.createDocumentFragment();h.forEach(v=>{if(V.getValue("exclude-session-cookie")&&(v.session||k.cookieManagerApiName==="cookieStore"&&v.expires==null))return;const m=p(v);g.appendChild(m);}),c.appendChild(g);};f(),d.on(e,["input","propertychange"],y.debounce(u=>{f(h=>{let g=d.val(e);return V.getValue("search-config-use-regexp")?!!h.name.match(new RegExp(g)):h.name.includes(g)});})),d.listenKeyboard(e,"keypress",(u,h,g)=>{u==="Enter"&&g.length===0&&y.dispatchEvent(e,"input");}),d.on(o,"click",u=>{y.preventEvent(u);let g=b.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:E.info.width,height:E.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),m=b.config.PanelHandlerComponents().createSectionContainerItem_switch(G("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称"));d.append(g,m);}),d.on(i,"click",u=>{y.preventEvent(u),d.val(e)==""?f():y.dispatchEvent(e,"input");}),d.on(a,"click",u=>{y.preventEvent(u),X.showView(void 0,h=>{f();});}),d.on(n,"click",u=>{y.preventEvent(u),k.queryAllCookie().then(h=>{if(h=h.filter(v=>!(v.session&&V.getValue("exclude-session-cookie"))),h.length===0){w.warning("没有Cookie可以复制");return}let g=h.map(v=>{let m=v.value;return `${v.name}=${m}; `}).join("");y.setClip(g).then(v=>{v?w.success("复制成功"):w.error("复制失败");});});}),d.on(l,"click",u=>{y.preventEvent(u),window.confirm("确定清除全部Cookie？")&&k.deleteAllCookie().then(g=>{g.error?w.warning(`清除成功：${g.success} 失败：${g.error}`):w.success("清除成功"),f();});}),d.on(r,"click",u=>{y.preventEvent(u),L.showView();}),d.on(s,"click",u=>{y.preventEvent(u);let g=b.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:E.info.width,height:E.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),v=b.config.PanelHandlerComponents(),m=v.createSectionContainerItem_select(H("CookieManager Api","cookie-manager-api","document.cookie",[{text:"document.cookie",value:"document.cookie"},{text:"cookieStore",value:"cookieStore"},{text:"GM_cookie",value:"GM_cookie"},{text:"GM.cookie",value:"GM.cookie"}],()=>{f();},"操作Cookie的Api函数")),S=v.createSectionContainerItem_switch(G("解码Cookie值","decode-cookie-value",false,()=>{f();},"对Cookie值进行解码")),A=v.createSectionContainerItem_switch(G("排除Session Cookie","exclude-session-cookie",false,()=>{f();},"过滤掉浏览器会话Cookie"));d.append(g,[m,S,A]);});},registerMenu(){const t=this;ce.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,o){return e},callback(e){t.showView();}});}},Me={init(){this.execController(),d.ready(()=>{this.execController();});},execController(){for(let t=0;t<L.$data.ruleData.length;t++){const e=L.$data.ruleData[t];k.queryAllCookie().then(async o=>{for(let i=0;i<o.length;i++){let a=o[i];const n=a.name,l=e.data.cookieName;let r=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(l,"i").test(n)&&(r=true):n.includes(l)&&(r=true),r){let s=e.data.operationMode;if(s==="delete")k.deleteCookie(a);else if(s==="extended"||s==="extended-90"||s==="extended-180"||s==="extended-360"){let c=Date.now(),p=30*24*60*60*1e3,f=p*3,u=p*6,h=p*12,g=p;s==="extended-90"?g=f:s==="extended-180"?g=u:s==="extended-360"&&(g=h);let v=false;if(k.cookieManagerApiName==="document.cookie")a.expirationDate=c+g,v=true;else if(k.cookieManagerApiName==="cookieStore"){let m=a.expires;typeof m=="number"&&m-c<g&&(a.expires=m+g,v=true);}else if(k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"){let m=a.expirationDate;typeof m=="number"&&m*1e3-c<g&&(a.expirationDate=m+g/1e3,v=true);}else C.error("未知的cookieManagerApiName",k.cookieManagerApiName);v&&await k.updateCookie(a);}}}});}}},Q=function(t,e,o,i,a,n,l,r,s,c){let p={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:i,buttonIsRightIcon:a,buttonIconIsLoading:n,buttonType:l,buttonText:o,callback(f){typeof r=="function"&&r(f);},afterAddToUListCallBack:s};return Reflect.set(p.attributes,re,()=>{p.disable=false;}),p},$e={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[Q("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{L.showView();})]},{type:"forms",text:"",forms:[Q("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{L.importRule();}),Q("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{L.exportRule("CookieManagerRule.json");})]}]},Se={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[H("Toast位置",D.qmsg_config_position.key,D.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,o)=>{C.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),H("最多显示的数量",D.qmsg_config_maxnums.key,D.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),G("逆序弹出",D.qmsg_config_showreverse.key,D.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};ie.addContentConfig([Se,$e]);V.init();L.init();Me.init();Ve.init();

})(Qmsg, DOMUtils, Utils, pops);