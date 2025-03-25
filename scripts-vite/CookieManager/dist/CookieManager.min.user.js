// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.3.25
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.0.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.0/dist/index.umd.js
// @connect      *
// @grant        GM_cookie
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (w, J, T, Z) {
            'use strict';

            var F=typeof GM_cookie<"u"?GM_cookie:void 0,z=typeof GM_getValue<"u"?GM_getValue:void 0,P=typeof GM_info<"u"?GM_info:void 0,Q=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,U=typeof GM_setValue<"u"?GM_setValue:void 0,Y=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,V=typeof unsafeWindow<"u"?unsafeWindow:void 0,X=window;const b={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},ee="CookieManager",x=T.noConflict(),g=J.noConflict(),k=Z,y=new x.Log(P,V.console||X.console);var W;const j=((W=P==null?void 0:P.script)==null?void 0:W.name)||ee,te=false;y.config({debug:te,logMaxCount:1e3,autoClearConsole:true,tag:true});w.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return m.getValue(b.qmsg_config_position.key,b.qmsg_config_position.defaultValue)}},maxNums:{get(){return m.getValue(b.qmsg_config_maxnums.key,b.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return m.getValue(b.qmsg_config_showreverse.key,b.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let e=T.getMaxZIndex(),i=Z.config.InstanceUtils.getPopsMaxZIndex().zIndex;return T.getMaxValue(e,i)+100}}}));k.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=T.getMaxZIndex(void 0,void 0,o=>{var t;if((t=o==null?void 0:o.classList)!=null&&t.contains("qmsg-shadow-container")||o!=null&&o.closest("qmsg")&&o.getRootNode()instanceof ShadowRoot)return  false}),i=Z.config.InstanceUtils.getPopsMaxZIndex().zIndex;return T.getMaxValue(e,i)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const K=new x.GM_Menu({GM_getValue:z,GM_setValue:U,GM_registerMenuCommand:Q,GM_unregisterMenuCommand:Y});V.Object.defineProperty,V.Function.prototype.apply,V.Function.prototype.call,V.Element.prototype.appendChild,V.setTimeout;x.addStyle.bind(x);document.querySelector.bind(document);document.querySelectorAll.bind(document);const ie=new T.GM_Cookie,q="GM_Panel",oe="data-init",N="data-key",L="data-default-value",ne="data-init-more-value",D="data-storage-api",I=function(e,i,o,t,l,c){let a={text:e,type:"switch",description:l,attributes:{},props:{},getValue(){return !!this.props[D].get(i,o)},callback(d,p){let h=!!p;y.success(`${h?"开启":"关闭"} ${e}`),!(typeof t=="function"&&t(d,h))&&this.props[D].set(i,h);},afterAddToUListCallBack:c};return Reflect.set(a.attributes,N,i),Reflect.set(a.attributes,L,o),Reflect.set(a.props,D,{get(d,p){return m.getValue(d,p)},set(d,p){m.setValue(d,p);}}),a},H=function(e,i,o,t,l,c){let a=[];typeof t=="function"?a=t():a=t;let d={text:e,type:"select",description:c,attributes:{},props:{},getValue(){return this.props[D].get(i,o)},callback(p,h,f){let n=h;y.info(`选择：${f}`),this.props[D].set(i,n),typeof l=="function"&&l(p,n,f);},data:a};return Reflect.set(d.attributes,N,i),Reflect.set(d.attributes,L,o),Reflect.set(d.props,D,{get(p,h){return m.getValue(p,h)},set(p,h){m.setValue(p,h);}}),d},ae={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[H("Toast位置",b.qmsg_config_position.key,b.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,i,o)=>{y.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),H("最多显示的数量",b.qmsg_config_maxnums.key,b.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),I("逆序弹出",b.qmsg_config_showreverse.key,b.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"forms",forms:[I("启用GM_cookie Api","use-GM-cookie",false,void 0,"获取到的Cookie信息会更完善，需要脚本管理器支持该函数")]}]},$={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},info:{get width(){return "350px"},get height(){return "250px"}}},m={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return m.$data.__data==null&&(m.$data.__data=new x.Dictionary),m.$data.__data},get oneSuccessExecMenu(){return m.$data.__oneSuccessExecMenu==null&&(m.$data.__oneSuccessExecMenu=new x.Dictionary),m.$data.__oneSuccessExecMenu},get onceExec(){return m.$data.__onceExec==null&&(m.$data.__onceExec=new x.Dictionary),m.$data.__onceExec},get scriptName(){return j},key:q,attributeKeyName:N,attributeDefaultValueName:L},$listener:{get listenData(){return m.$data.__listenData==null&&(m.$data.__listenData=new x.Dictionary),m.$data.__listenData}},init(){let e=this.getPanelContentConfig();this.initPanelConfigDefaultValue([...e]),this.registerMenu();},isTopWindow(){return V.top===V.self},registerMenu(){this.isTopWindow()&&K.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelConfigDefaultValue(e){let i=this;function o(l){if(!l.attributes)return;let c={},a=l.attributes[N];a!=null&&(c[a]=l.attributes[L]);let d=l.attributes[oe];if(typeof d=="function"){let f=d();if(typeof f=="boolean"&&!f)return}let p=l.attributes[ne];p&&typeof p=="object"&&Object.assign(c,p);let h=Object.keys(c);if(!h.length){l.type!=="button"&&y.warn("请先配置键",l);return}h.forEach(f=>{let n=c[f];i.$data.data.has(f)&&y.warn("请检查该key(已存在): "+f),i.$data.data.set(f,n);});}function t(l){for(let c=0;c<l.length;c++){let a=l[c];o(a);let d=a.forms;d&&Array.isArray(d)&&t(d);}}for(let l=0;l<e.length;l++){let c=e[l];if(!c.forms)continue;let a=c.forms;a&&Array.isArray(a)&&t(a);}},setValue(e,i){let o=z(q,{}),t=o[e];o[e]=i,U(q,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,t,i);},getValue(e,i){let t=z(q,{})[e];return t??(this.$data.data.has(e)?this.$data.data.get(e):i)},deleteValue(e){let i=z(q,{}),o=i[e];Reflect.deleteProperty(i,e),U(q,i),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,i,o){let t=Math.random();return this.$listener.listenData.set(e,{id:t,key:e,callback:i}),o&&o.immediate&&i(e,this.getValue(e),this.getValue(e)),t},removeValueChangeListener(e){let i=null;for(const[o,t]of this.$listener.listenData.entries())if(t.id===e){i=o;break}typeof i=="string"?this.$listener.listenData.delete(i):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,i,o){if(this.$listener.listenData.has(e)){let t=this.$listener.listenData.get(e);if(typeof t.callback=="function"){let l=this.getValue(e),c=l,a=l;typeof i<"u"&&arguments.length>1&&(c=i),typeof o<"u"&&arguments.length>2&&(a=o),t.callback(e,a,c);}}},hasKey(e){let i=z(q,{});return e in i},execMenu(e,i,o=false,t){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let l=[];typeof e=="object"&&Array.isArray(e)?l=[...e]:l.push(e);let c;for(let a=0;a<l.length;a++){const d=l[a];if(!this.$data.data.has(d)){y.warn(`${e} 键不存在`);return}let p=m.getValue(d);if(o&&(p=!p),typeof t=="function"){let h=t(d,p);typeof h=="boolean"&&(p=h);}if(!p)break;c=p;}c&&i(c);},execMenuOnce(e,i,o,t,l){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){y.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let c=()=>{let n=m.getValue(e);return typeof o=="function"?o(e,n):n},a=[],d=n=>{let u=c(),r=[];if(n instanceof HTMLStyleElement?r=[n]:Array.isArray(n)&&(r=[...n.filter(s=>s!=null&&s instanceof HTMLStyleElement)]),u)a=a.concat(r);else for(let s=0;s<r.length;s++)r[s].remove(),r.splice(s,1),s--;},p=n=>typeof l=="function"?l(e,n):n,h=n=>{let u=[];if(p(n)){let r=i(n,d);r instanceof HTMLStyleElement?u=[r]:Array.isArray(r)&&(u=[...r.filter(s=>s!=null&&s instanceof HTMLStyleElement)]);}for(let r=0;r<a.length;r++)a[r].remove(),a.splice(r,1),r--;a=[...u];};this.addValueChangeListener(e,(n,u,r)=>{let s=r;typeof t=="function"&&(s=t(n,r,u)),h(s);});let f=c();f&&h(f);},execInheritMenuOnce(e,i,o,t){let l=this;const c=(a,d)=>{let p=l.getValue(a),h=l.getValue(d);if(typeof t=="function"){let f=t(p,h);if(f!=null)return f}return p};this.execMenuOnce(e,o,()=>c(e,i),()=>c(e,i)),this.execMenuOnce(i,()=>{},()=>false,()=>(this.triggerMenuValueChange(e),false));},onceExec(e,i){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(i(),this.$data.onceExec.set(e,1));},showPanel(){k.panel({title:{text:`${j}-设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},zIndex(){let e=T.getMaxZIndex(),i=k.config.InstanceUtils.getPopsMaxZIndex().zIndex;return T.getMaxValue(e,i)+100},width:$.setting.width,height:$.setting.height,drag:true,only:true});},getPanelContentConfig(){return [ae]}},_={get cookieManagerApiName(){return m.getValue("cookie-manager-api","document.cookie")},get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return F;if(this.cookieManagerApiName==="cookieStore"){let e=V.cookieStore;return {list(i,o){e.getAll().then(t=>{o(t);}).catch(t=>{y.error(t),w.error(t.toString());});},set(i,o){e.set(i).then(()=>{o();}).catch(t=>{o(t);});},delete(i,o){e.delete(i).then(t=>{o();}).catch(t=>{o(t);});}}}else return ie},queryAllCookie(){return new Promise(e=>{this.cookieManager.list({},i=>{let o=i||[];o=o.sort((t,l)=>t.name.localeCompare(l.name)),e(o);});})},deleteAllCookie(){return new Promise(e=>{this.cookieManager.list({},async i=>{const o=i||[],t={success:0,error:0};for(let l=0;l<o.length;l++){const c=o[l];await new Promise(d=>{this.deleteCookie(c).then(p=>{d(p);});})?t.error++:t.success++;}e(t);});})},addCookie(e){return new Promise(i=>{delete e.hostOnly,_.cookieManager.set(e,o=>{y.info(["添加Cookie",e]),i(o);});})},deleteCookie(e){return new Promise(i=>{_.cookieManager.delete(e,o=>{y.info(["删除Cookie",e]),i(o);});})},updateCookie(e){return new Promise(async i=>{let o;try{y.info(["更新Cookie",e]);let t=await _.deleteCookie(e);if(y.error(t),t)throw new TypeError(t.toString());let l=await _.addCookie(e);if(y.error(l),l)throw new TypeError(l.toString())}catch(t){o=t;}finally{i(o);}})}};let G=(e,i,o,t)=>({text:e,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return i()},callback(c,a){o(a);},placeholder:"",disabled:!!t}),O=(e,i,o,t,l)=>({text:e,type:"select",description:"",attributes:{},props:{},getValue(){return o()},callback(a,d,p){t(d);},data:i,disabled:false});const B={init(){},showView(e,i){let o=!!e,t=x.assign({name:"",value:"",domain:window.location.hostname,path:"/",secure:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+60*60*24*30*1e3},e,true);_.cookieManagerApiName==="cookieStore"&&t.expires&&(t.expirationDate=t.expires);let c=k.confirm({title:{text:o?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:o?"编辑":"添加",async callback(v,E){if(B.validCookieInfo(t)){if(t.value=encodeURIComponent(t.value),_.cookieManagerApiName==="document.cookie"?t.domain="":_.cookieManagerApiName==="GM_cookie"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),o){let C=await _.updateCookie(t);C?w.error(C.toString()):(w.success("修改成功"),v.close());}else {let C=await _.addCookie(t);C?w.error(C.toString()):(w.success("添加成功"),v.close());}typeof i=="function"&&i(t);}}},cancel:{text:"取消"}},mask:{enable:true},width:window.innerWidth>350?"350px":"80vw",height:$.setting.height,style:`
                ${k.config.cssText.panelCSS}

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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),a=k.config.panelHandleContentUtils(),d=a.createSectionContainerItem_input(G("name",()=>t.name,v=>t.name=v,o)),p=a.createSectionContainerItem_input(G("value",()=>t.value,v=>t.value=v)),h=a.createSectionContainerItem_input(G("domain",()=>t.domain,v=>t.domain=v)),f=a.createSectionContainerItem_input(G("path",()=>t.path,v=>t.path=v)),n;t.session?n=a.createSectionContainerItem_input(G("expires",()=>"会话",v=>{},true)):n=a.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(v){let E=g.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),S=E.querySelector("#cookie-item-property-expires");return S.valueAsNumber=t.expirationDate,g.on(S,["change","input","propertychange"],C=>{x.preventEvent(C),t.expirationDate=S.valueAsNumber;}),E}});let u=a.createSectionContainerItem_select(O("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>t.httpOnly,v=>t.httpOnly=v)),r=a.createSectionContainerItem_select(O("secure",[{text:"true",value:true},{text:"false",value:false}],()=>t.secure,v=>t.secure=v)),s=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];_.cookieManagerApiName==="cookieStore"&&(s=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let M=a.createSectionContainerItem_select(O("sameSite",s,()=>t.sameSite,v=>t.sameSite=v));g.append(c,[d,p]),_.cookieManagerApiName==="GM_cookie"?g.append(c,[h,f,n,u,r,M]):_.cookieManagerApiName==="cookieStore"&&g.append(c,[h,f,n,M]);},validCookieInfo(e){return e.name==null||e.name==""?(w.error("name不能为空"),false):e.domain==null||e.domain==""?(w.error("domain不能为空"),false):e.path==null||e.path==""?(w.error("path不能为空"),false):true}},le={init(){this.registerMenu();},async showView(){const e=k.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
                            <div class="cookie-setting"> 
                                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                                    <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="cookie-list-wrapper">
                        </div>
                    </div>
                `,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:$.setting.width,height:$.setting.height,style:`
                ${k.config.cssText.panelCSS}
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
                    padding: 5px;
                    width: 100%;
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
            `}),i=e.$shadowRoot.querySelector(".cookie-search-inner input"),o=e.$shadowRoot.querySelector(".cookie-search-setting"),t=e.$shadowRoot.querySelector(".cookie-control-refresh"),l=e.$shadowRoot.querySelector(".cookie-control-add"),c=e.$shadowRoot.querySelector(".cookie-control-copy-all"),a=e.$shadowRoot.querySelector(".cookie-control-clear-all"),d=e.$shadowRoot.querySelector(".cookie-setting"),p=e.$shadowRoot.querySelector(".cookie-list-wrapper");let h=n=>{const u=g.createElement("div",{className:"cookie-item",innerHTML:`
                `}),r=[{leftText:"name",rightText:n.name},{leftText:"value",rightText:m.getValue("decode-cookie-value")?decodeURIComponent(n.value):encodeURIComponent(n.value)}];_.cookieManagerApiName==="GM_cookie"?(n=n,r.push({leftText:"domain",rightText:n.domain},{leftText:"path",rightText:n.path},{leftText:"session",rightText:JSON.stringify(n.session)},{leftText:"expires",rightText:n.session?"会话":n.expirationDate?new Date(n.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(n.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(n.hostOnly)},{leftText:"secure",rightText:JSON.stringify(n.secure)},{leftText:"sameSite",rightText:n.sameSite})):_.cookieManagerApiName==="cookieStore"&&(n=n,r.push({leftText:"domain",rightText:n.domain},{leftText:"path",rightText:n.path},{leftText:"expires",rightText:n.expires?new Date(n.expires).toISOString():"未知"},{leftText:"secure",rightText:JSON.stringify(n.secure)},{leftText:"sameSite",rightText:n.sameSite})),r.forEach(S=>{const C=g.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${S.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${S.rightText}</p>
                        </div>
                    `});g.append(u,C);});let s=g.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
                            ${k.config.iconSVG.delete}
                        </div>
                    </div>
                `}),M=s.querySelector(".cookie-item-group-control-copy"),v=s.querySelector(".cookie-item-group-control-edit"),E=s.querySelector(".cookie-item-group-control-delete");return g.on(M,"click",S=>{x.preventEvent(S);let C=n.value;x.setClip(C).then(A=>{A?w.success("复制成功"):w.error("复制失败");});}),g.on(v,"click",S=>{x.preventEvent(S),B.showView(n,C=>{var R;let A=h(C);g.after(u,A),(R=u.parentElement)==null||R.removeChild(u);});}),g.on(E,"click",S=>{x.preventEvent(S),confirm("确定删除该Cookie？")&&_.deleteCookie(n).then(A=>{var R;A?(y.error(A),w.error("删除失败")):(w.success("删除成功"),(R=u.parentElement)==null||R.removeChild(u));});}),g.append(u,[s]),u},f=async n=>{let u=await _.queryAllCookie();typeof n=="function"&&(u=u.filter(n)),g.empty(p);let r=document.createDocumentFragment();u.forEach(s=>{if(s.session&&m.getValue("exclude-session-cookie"))return;const M=h(s);g.append(r,M);}),g.append(p,r);};f(),g.on(i,["input","propertychange"],x.debounce(n=>{f(u=>{let r=g.val(i);return m.getValue("search-config-use-regexp")?!!u.name.match(new RegExp(r)):u.name.includes(r)});})),g.listenKeyboard(i,"keypress",(n,u,r)=>{n==="Enter"&&r.length===0&&x.dispatchEvent(i,"input");}),g.on(o,"click",n=>{x.preventEvent(n);let r=k.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:$.info.width,height:$.info.height,style:`
                    ${k.config.cssText.panelCSS}

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
                `}).$shadowRoot.querySelector(".pops-alert-content"),M=k.config.panelHandleContentUtils().createSectionContainerItem_switch(I("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称"));g.append(r,M);}),g.on(t,"click",n=>{x.preventEvent(n),g.val(i)==""?f():x.dispatchEvent(i,"input");}),g.on(l,"click",n=>{x.preventEvent(n),B.showView(void 0,u=>{f();});}),g.on(c,"click",n=>{x.preventEvent(n),_.queryAllCookie().then(u=>{if(u=u.filter(s=>!(s.session&&m.getValue("exclude-session-cookie"))),u.length===0){w.warning("没有Cookie可以复制");return}let r=u.map(s=>{let M=s.value;return `${s.name}=${M}; `}).join("");x.setClip(r).then(s=>{s?w.success("复制成功"):w.error("复制失败");});});}),g.on(a,"click",n=>{x.preventEvent(n),window.confirm("确定清除全部Cookie？")&&_.deleteAllCookie().then(r=>{r.error?w.warning(`清除成功：${r.success} 失败：${r.error}`):w.success("清除成功"),f();});}),g.on(d,"click",n=>{x.preventEvent(n);let r=k.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:$.info.width,height:$.info.height,style:`
                    ${k.config.cssText.panelCSS}

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
                `}).$shadowRoot.querySelector(".pops-alert-content"),s=k.config.panelHandleContentUtils(),M=s.createSectionContainerItem_select(H("CookieManager Api","cookie-manager-api","document.cookie",[{text:"document.cookie",value:"document.cookie"},{text:"cookieStore",value:"cookieStore"},{text:"GM_cookie",value:"GM_cookie"}],()=>{f();},"操作Cookie的Api函数")),v=s.createSectionContainerItem_switch(I("解码Cookie值","decode-cookie-value",false,()=>{f();},"对Cookie值进行解码")),E=s.createSectionContainerItem_switch(I("排除Session Cookie","exclude-session-cookie",false,()=>{f();},"过滤掉浏览器会话Cookie"));g.append(r,[M,v,E]);});},registerMenu(){const e=this;K.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(i,o){return i},callback(i){e.showView();}});}};m.init();le.init();

})(Qmsg, DOMUtils, Utils, pops);