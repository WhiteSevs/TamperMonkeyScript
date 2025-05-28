// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.5.28
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.0.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.2/dist/index.umd.js
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

(function (w, he, q, X) {
            'use strict';

            var de=Object.defineProperty;var fe=(e,t,o)=>t in e?de(e,t,{enumerable:true,configurable:true,writable:true,value:o}):e[t]=o;var B=(e,t,o)=>fe(e,t+"",o);var Z=typeof GM<"u"?GM:void 0,me=typeof GM_cookie<"u"?GM_cookie:void 0,ge=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,O=typeof GM_getValue<"u"?GM_getValue:void 0,H=typeof GM_info<"u"?GM_info:void 0,xe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,P=typeof GM_setValue<"u"?GM_setValue:void 0,we=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ve=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,A=typeof unsafeWindow<"u"?unsafeWindow:void 0,ye=window;const T={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},ke="CookieManager",v=q.noConflict(),m=he.noConflict(),b=X,_=new v.Log(H,A.console||ye.console);var re;const ne=((re=H==null?void 0:H.script)==null?void 0:re.name)||ke,ee=false;_.config({debug:ee,logMaxCount:1e3,autoClearConsole:true,tag:true});w.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return y.getValue(T.qmsg_config_position.key,T.qmsg_config_position.defaultValue)}},maxNums:{get(){return y.getValue(T.qmsg_config_maxnums.key,T.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return y.getValue(T.qmsg_config_showreverse.key,T.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let e=q.getMaxZIndex(),t=X.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100}}}));b.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=q.getMaxZIndex(void 0,void 0,o=>{var i;if((i=o==null?void 0:o.classList)!=null&&i.contains("qmsg-shadow-container")||o!=null&&o.closest("qmsg")&&o.getRootNode()instanceof ShadowRoot)return  false}),t=X.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const se=new v.GM_Menu({GM_getValue:O,GM_setValue:P,GM_registerMenuCommand:xe,GM_unregisterMenuCommand:we}),W=new v.Httpx({xmlHttpRequest:ve,logDetails:ee});W.interceptors.request.use(e=>e);W.interceptors.response.use(void 0,e=>(_.error("拦截器-请求错误",e),e.type==="onabort"?w.warning("请求取消"):e.type==="onerror"?w.error("请求异常"):e.type==="ontimeout"?w.error("请求超时"):w.error("其它错误"),e));W.config({logDetails:ee});A.Object.defineProperty,A.Function.prototype.apply,A.Function.prototype.call,A.Element.prototype.appendChild,A.setTimeout;v.addStyle.bind(v);document.querySelector.bind(document);document.querySelectorAll.bind(document);let ce=e=>{(typeof e=="object"&&e!=null||typeof e=="function")&&Object.keys(e).forEach(t=>{typeof e[t]=="function"&&(e[t]=e[t].bind(e));});};const ue=new q.GM_Cookie;ce(ue);const F=me;ce(F);const N="GM_Panel",pe="data-init",U="data-key",z="data-default-value",be="data-init-more-value",M="data-storage-api",G=function(e,t,o,i,a,r){let n={text:e,type:"switch",description:a,attributes:{},props:{},getValue(){return !!this.props[M].get(t,o)},callback(l,s){let u=!!s;_.success(`${u?"开启":"关闭"} ${e}`),!(typeof i=="function"&&i(l,u))&&this.props[M].set(t,u);},afterAddToUListCallBack:r};return Reflect.set(n.attributes,U,t),Reflect.set(n.attributes,z,o),Reflect.set(n.props,M,{get(l,s){return y.getValue(l,s)},set(l,s){y.setValue(l,s);}}),n},j=function(e,t,o,i,a,r){let n=[];typeof i=="function"?n=i():n=i;let l={text:e,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[M].get(t,o)},callback(s,u,f){let h=u;_.info(`选择：${f}`),this.props[M].set(t,h),typeof a=="function"&&a(s,h,f);},data:n};return Reflect.set(l.attributes,U,t),Reflect.set(l.attributes,z,o),Reflect.set(l.props,M,{get(s,u){return y.getValue(s,u)},set(s,u){y.setValue(s,u);}}),l},_e={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[j("Toast位置",T.qmsg_config_position.key,T.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{_.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),j("最多显示的数量",T.qmsg_config_maxnums.key,T.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),G("逆序弹出",T.qmsg_config_showreverse.key,T.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]},V={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},info:{get width(){return "350px"},get height(){return "250px"}}},K=function(e,t,o,i,a,r,n,l,s,u){let f={text:e,type:"button",attributes:{},description:t,buttonIcon:i,buttonIsRightIcon:a,buttonIconIsLoading:r,buttonType:n,buttonText:o,callback(h){typeof l=="function"&&l(h);},afterAddToUListCallBack:s};return Reflect.set(f.attributes,pe,()=>{f.disable=false;}),f},Y=function(e,t,o,i,a,r="",n,l){let s={text:e,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:i,getValue(){return this.props[M].get(t,o)},callback(u,f){this.props[M].set(t,f);},placeholder:r};return Reflect.set(s.attributes,U,t),Reflect.set(s.attributes,z,o),Reflect.set(s.props,M,{get(u,f){return y.getValue(u,f)},set(u,f){y.setValue(u,f);}}),s},Ce=function(e,t,o,i,a,r="",n){let l={text:e,type:"textarea",attributes:{},props:{},description:i,placeholder:r,disabled:n,getValue(){let s=this.props[M].get(t,o);return Array.isArray(s)?s.join(`
`):s},callback(s,u){this.props[M].set(t,u);}};return Reflect.set(l.attributes,U,t),Reflect.set(l.attributes,z,o),Reflect.set(l.props,M,{get(s,u){return y.getValue(s,u)},set(s,u){y.setValue(s,u);}}),l};class Me{constructor(t){B(this,"option");this.option=t;}async showView(){var n;let t=b.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:v.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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

                ${((n=this.option)==null?void 0:n.style)??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),o=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");let i=t.$shadowRoot.querySelector(".rule-form-ulist"),a=await this.option.getView(await this.option.data());i.appendChild(a);const r=async()=>{(await this.option.onsubmit(o,await this.option.data())).success&&(t.close(),await this.option.dialogCloseCallBack(true));};}}class $e{constructor(t){B(this,"option");this.option=t;}showView(){let t=b.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),o=t.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(a=>{let r=document.createElement("button");r.innerText=a.name;let n=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await a.filterCallBack(s.data)?m.show(s.$el,false):m.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),t.close();};m.on(r,"click",async l=>{v.preventEvent(l),!(typeof a.callback=="function"&&!await a.callback(l,n))&&await n();}),i.appendChild(r);}),o.appendChild(i);}}class Se{constructor(t){B(this,"option");this.option=t;}async showView(t){var r,n,l,s,u,f,h,c,p;let o=b.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((l=(n=(r=this.option)==null?void 0:r.bottomControls)==null?void 0:n.add)==null?void 0:l.enable)||true,type:"primary",text:"添加",callback:async d=>{this.showEditView(false,await this.option.getAddData(),o.$shadowRoot);}},close:{enable:true,callback(d){o.close();}},cancel:{enable:((f=(u=(s=this.option)==null?void 0:s.bottomControls)==null?void 0:u.filter)==null?void 0:f.enable)||false,type:"default",text:"过滤",callback:(d,x)=>{var $,C,E,R,D,te,ie;typeof((E=(C=($=this.option)==null?void 0:$.bottomControls)==null?void 0:C.filter)==null?void 0:E.callback)=="function"&&this.option.bottomControls.filter.callback();let g=()=>Array.from(o.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),S=x.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");m.text(S).includes("取消")?(g().forEach(oe=>{m.show(oe,false);}),m.text(S,"过滤")):new $e({title:((D=(R=this.option.bottomControls)==null?void 0:R.filter)==null?void 0:D.title)??"过滤规则",filterOption:((ie=(te=this.option.bottomControls)==null?void 0:te.filter)==null?void 0:ie.option)||[],execFilterCallBack(){m.text(S,"取消过滤");},getAllRuleInfo:()=>g().map(ae=>({data:this.parseRuleItemElement(ae).data,$el:ae}))}).showView();}},other:{enable:((p=(c=(h=this.option)==null?void 0:h.bottomControls)==null?void 0:c.clear)==null?void 0:p.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:d=>{let x=b.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async g=>{var $,C,E;if(_.success("清空所有"),typeof((E=(C=($=this.option)==null?void 0:$.bottomControls)==null?void 0:C.clear)==null?void 0:E.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(o.$shadowRoot),this.clearContent(o.$shadowRoot),x.close();}},cancel:{text:"取消",enable:true}},drag:true,mask:{enable:true},width:"300px",height:"200px"});}}},drag:true,mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),i=await this.option.data(),a=false;for(let d=0;d<i.length;d++){let x=i[d],g=await this.appendRuleItemElement(o.$shadowRoot,x);(typeof t=="function"?t(x):true)||(a=true,g.forEach($=>{m.hide($,false);}));}if(a){let d=o.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");m.text(d,"取消过滤");}}showEditView(t,o,i,a,r,n){let l=async u=>{if(u){if(typeof n=="function"){let f=await this.option.getData(o);n(f);}}else if(t||await this.option.deleteData(o),typeof r=="function"){let f=await this.option.getData(o);r(f);}};new Me({title:t?"编辑":"添加",data:()=>o,dialogCloseCallBack:l,getView:async u=>await this.option.itemControls.edit.getView(u,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async(u,f)=>{u.close(),await l(false);}},close:{callback:async(u,f)=>{u.close(),await l(false);}}},onsubmit:async(u,f)=>{let h=await this.option.itemControls.edit.onsubmit(u,t,f);return h.success?t?(w.success("修改成功"),i&&await this.updateRuleItemElement(h.data,a,i)):i&&await this.appendRuleItemElement(i,h.data):t&&_.error("修改失败"),h},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){let o=t.querySelector(".rule-view-container"),i=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:o,$deleteBtn:i}}parseRuleItemElement(t){let o=t.querySelector(".rule-controls-enable"),i=o.querySelector(".pops-panel-switch"),a=o.querySelector(".pops-panel-switch__input"),r=o.querySelector(".pops-panel-switch__core"),n=t.querySelector(".rule-controls-edit"),l=t.querySelector(".rule-controls-delete");return {$enable:o,$enableSwitch:i,$enableSwitchInput:a,$enableSwitchCore:r,$edit:n,$delete:l,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,o){let i=await this.option.getDataItemName(t),a=m.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(a,"data-rule",t);let r="pops-panel-switch-is-checked";const{$enable:n,$enableSwitch:l,$enableSwitchCore:s,$enableSwitchInput:u,$delete:f,$edit:h}=this.parseRuleItemElement(a);return this.option.itemControls.enable.enable?(m.on(s,"click",async c=>{let p=false;l.classList.contains(r)?(l.classList.remove(r),p=false):(l.classList.add(r),p=true),u.checked=p,await this.option.itemControls.enable.callback(t,p);}),await this.option.itemControls.enable.getEnable(t)&&l.classList.add(r)):n.remove(),this.option.itemControls.edit.enable?m.on(h,"click",c=>{v.preventEvent(c),this.showEditView(true,t,o,a,p=>{t=null,t=p;});}):h.remove(),this.option.itemControls.delete.enable?m.on(f,"click",c=>{v.preventEvent(c);let p=b.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async d=>{_.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(w.success("成功删除该数据"),a.remove(),await this.updateDeleteAllBtnText(o),p.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},drag:true,mask:{enable:true},width:"300px",height:"200px"});}):f.remove(),a}async appendRuleItemElement(t,o){let{$container:i}=this.parseViewElement(t),a=[],r=Array.isArray(o)?o:[o];for(let n=0;n<r.length;n++){let l=r[n],s=await this.createRuleItemElement(l,t);i.appendChild(s),a.push(s);}return await this.updateDeleteAllBtnText(t),a}async updateRuleContaienrElement(t){this.clearContent(t);const{$container:o}=this.parseViewElement(t);let i=await this.option.data();await this.appendRuleItemElement(t,i),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,o,i){let a=await this.createRuleItemElement(t,i);o.after(a),o.remove();}clearContent(t){const{$container:o}=this.parseViewElement(t);m.html(o,"");}setDeleteBtnText(t,o,i=false){const{$deleteBtn:a}=this.parseViewElement(t);i?m.html(a,o):m.text(a,o);}async updateDeleteAllBtnText(t){let o=await this.option.data();this.setDeleteBtnText(t,`清空所有(${o.length})`);}}const I={$key:{STORAGE_KEY:"cookie-rule"},$data:{ruleData:[]},init(){this.$data.ruleData=[],this.getData().forEach(t=>{if(!t.enable)return;let o=window.location.href,i=t.data.url;if(t.data.enableRegExpToMatchUrl){if(!new RegExp(i,"i").test(o))return}else if(!o.includes(i))return;this.$data.ruleData.push(t);});},showView(){let e=b.config.panelHandleContentUtils();function t(i,a){return {get(r,n){return Reflect.get(i,r)??n},set(r,n){Reflect.set(i,r,n);}}}new Se({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(n=>n.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,a)=>{i.enable=a,this.updateData(i);}},edit:{enable:true,getView:(i,a)=>{let r=document.createDocumentFragment(),n=this.getTemplateData();a||(i=n);let l=G("启用","enable",n.enable);Reflect.set(l.props,M,t(i));let s=e.createSectionContainerItem_switch(l),u=Y("规则名称","name","",n.name,void 0,"必填");Reflect.set(u.props,M,t(i));let f=e.createSectionContainerItem_input(u),h=Y("网址","url",n.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(h.props,M,t(i.data));let c=e.createSectionContainerItem_input(h),p=G("启用正则匹配网址","enableRegExpToMatchUrl",n.data.enableRegExpToMatchUrl);Reflect.set(p.props,M,t(i.data));let d=e.createSectionContainerItem_switch(p),x=Y("Cookie名称","cookieName",n.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(x.props,M,t(i.data));let g=e.createSectionContainerItem_input(x),S=G("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",n.data.enableRegExpToMatchCookieName);Reflect.set(S.props,M,t(i.data));let $=e.createSectionContainerItem_switch(S),C=j("操作模式","operationMode",n.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(C.props,M,t(i.data));let E=e.createSectionContainerItem_select(C),R=Ce("备注","remark",n.data.remark);Reflect.set(R.props,M,t(i.data));let D=e.createSectionContainerItem_textarea(R);return r.append(s,f,c,d,g,$,E,D),r},onsubmit:(i,a,r)=>{let n=i.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();a&&(l.uuid=r.uuid);try{return n.forEach(s=>{let u=Reflect.get(s,"__formConfig__"),f=Reflect.get(u,"attributes"),h=Reflect.get(s,M),c=Reflect.get(f,U),p=Reflect.get(f,z),d=h.get(c,p);Reflect.has(l,c)?Reflect.set(l,c,d):Reflect.has(l.data,c)?Reflect.set(l.data,c,d):_.error(`${c}不在数据中`);}),l.name.trim()===""?(w.error("规则名称不能为空"),{success:!1,data:l}):l.data.url.trim()===""?(w.error("网址不能为空"),{success:!1,data:l}):l.data.cookieName.trim()===""?(w.error("Cookie名称不能为空"),{success:!1,data:l}):a?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}catch(s){return _.error(s),{success:false,data:l}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},getTemplateData(){return {uuid:v.generateUUID(),enable:true,name:"",data:{url:"",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return O(this.$key.STORAGE_KEY,[])},setData(e){P(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(i=>i.uuid==e.uuid)===-1?(t.push(e),P(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),o=t.findIndex(a=>a.uuid==e.uuid),i=false;return o!==-1&&(i=true,t[o]=e),this.setData(t),i},deleteData(e){let t=this.getData(),o=t.findIndex(a=>a.uuid==e.uuid),i=false;return o!==-1&&(i=true,t.splice(o,1)),this.setData(t),i},clearData(){ge(this.$key.STORAGE_KEY);},exportRule(e="rule.json"){let t=this.getData(),o=new Blob([JSON.stringify(t,null,4)]),i=window.URL.createObjectURL(o),a=m.createElement("a");a.href=i,a.download=e,a.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){let e=b.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:V.info.width,height:V.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),t=e.$shadowRoot.querySelector(".import-mode[data-mode='local']"),o=e.$shadowRoot.querySelector(".import-mode[data-mode='network']");m.on(t,"click",i=>{v.preventEvent(i),e.close();let a=m.createElement("input",{type:"file",accept:".json"});m.on(a,["propertychange","input"],r=>{var s;if(!((s=a.files)!=null&&s.length))return;let n=a.files[0],l=new FileReader;l.onload=()=>{let u=v.toJSON(l.result);if(!Array.isArray(u)){_.error("不是正确的规则文件",u),w.error("不是正确的规则文件");return}this.setData(u),w.success(`成功导入 ${u.length}条规则`);},l.readAsText(n,"UTF-8");}),a.click();}),m.on(o,"click",i=>{v.preventEvent(i),e.close(),b.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(a,r)=>{let n=a.text;if(v.isNull(n)){w.error("请填入完整的url");return}let l=await W.get(n);if(!l.status)return;let s=v.toJSON(l.data.responseText);if(!Array.isArray(s)){_.error("不是正确的规则文件",l,s),w.error("不是正确的规则文件");return}this.setData(s),a.close(),w.success(`成功导入 ${s.length}条规则`);}}},width:V.info.width,height:"auto"});});}},Ee={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[K("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{I.showView();})]},{type:"forms",text:"",forms:[K("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{I.importRule();}),K("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{I.exportRule("CookieManagerRule.json");})]}]},y={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return y.$data.__data==null&&(y.$data.__data=new v.Dictionary),y.$data.__data},get oneSuccessExecMenu(){return y.$data.__oneSuccessExecMenu==null&&(y.$data.__oneSuccessExecMenu=new v.Dictionary),y.$data.__oneSuccessExecMenu},get onceExec(){return y.$data.__onceExec==null&&(y.$data.__onceExec=new v.Dictionary),y.$data.__onceExec},get scriptName(){return ne},key:N,attributeKeyName:U,attributeDefaultValueName:z},$listener:{get listenData(){return y.$data.__listenData==null&&(y.$data.__listenData=new v.Dictionary),y.$data.__listenData}},init(){let e=this.getPanelContentConfig();this.initPanelConfigDefaultValue([...e]),this.registerMenu();},isTopWindow(){return A.top===A.self},registerMenu(){this.isTopWindow()&&se.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelConfigDefaultValue(e){let t=this;function o(a){if(!a.attributes)return;let r={},n=a.attributes[U];n!=null&&(r[n]=a.attributes[z]);let l=a.attributes[pe];if(typeof l=="function"){let f=l();if(typeof f=="boolean"&&!f)return}let s=a.attributes[be];s&&typeof s=="object"&&Object.assign(r,s);let u=Object.keys(r);if(!u.length){a.type!=="button"&&_.warn("请先配置键",a);return}u.forEach(f=>{let h=r[f];t.$data.data.has(f)&&_.warn("请检查该key(已存在): "+f),t.$data.data.set(f,h);});}function i(a){for(let r=0;r<a.length;r++){let n=a[r];o(n);let l=n.forms;l&&Array.isArray(l)&&i(l);}}for(let a=0;a<e.length;a++){let r=e[a];if(!r.forms)continue;let n=r.forms;n&&Array.isArray(n)&&i(n);}},setValue(e,t){let o=O(N,{}),i=o[e];o[e]=t,P(N,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,t);},getValue(e,t){let i=O(N,{})[e];return i??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=O(N,{}),o=t[e];Reflect.deleteProperty(t,e),P(N,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t,o){let i=Math.random();return this.$listener.listenData.set(e,{id:i,key:e,callback:t}),o&&o.immediate&&t(e,this.getValue(e),this.getValue(e)),i},removeValueChangeListener(e){let t=null;for(const[o,i]of this.$listener.listenData.entries())if(i.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,t,o){if(this.$listener.listenData.has(e)){let i=this.$listener.listenData.get(e);if(typeof i.callback=="function"){let a=this.getValue(e),r=a,n=a;typeof t<"u"&&arguments.length>1&&(r=t),typeof o<"u"&&arguments.length>2&&(n=o),i.callback(e,n,r);}}},hasKey(e){let t=O(N,{});return e in t},execMenu(e,t,o=false,i){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let a=[];typeof e=="object"&&Array.isArray(e)?a=[...e]:a.push(e);let r;for(let n=0;n<a.length;n++){const l=a[n];if(!this.$data.data.has(l)){_.warn(`${e} 键不存在`);return}let s=y.getValue(l);if(o&&(s=!s),typeof i=="function"){let u=i(l,s);typeof u=="boolean"&&(s=u);}if(!s)break;r=s;}r&&t(r);},execMenuOnce(e,t,o,i,a){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){_.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let r=()=>{let h=y.getValue(e);return typeof o=="function"?o(e,h):h},n=[],l=h=>{let c=r(),p=[];if(h instanceof HTMLStyleElement?p=[h]:Array.isArray(h)&&(p=[...h.filter(d=>d!=null&&d instanceof HTMLStyleElement)]),c)n=n.concat(p);else for(let d=0;d<p.length;d++)p[d].remove(),p.splice(d,1),d--;},s=h=>typeof a=="function"?a(e,h):h,u=h=>{let c=[];if(s(h)){let p=t(h,l);p instanceof HTMLStyleElement?c=[p]:Array.isArray(p)&&(c=[...p.filter(d=>d!=null&&d instanceof HTMLStyleElement)]);}for(let p=0;p<n.length;p++)n[p].remove(),n.splice(p,1),p--;n=[...c];};this.addValueChangeListener(e,(h,c,p)=>{let d=p;typeof i=="function"&&(d=i(h,p,c)),u(d);});let f=r();f&&u(f);},execInheritMenuOnce(e,t,o,i){let a=this;const r=(n,l)=>{let s=a.getValue(n),u=a.getValue(l);if(typeof i=="function"){let f=i(s,u);if(f!=null)return f}return s};this.execMenuOnce(e,o,()=>r(e,t),()=>r(e,t)),this.execMenuOnce(t,()=>{},()=>false,()=>(this.triggerMenuValueChange(e),false));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){b.panel({title:{text:`${ne}-设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},zIndex(){let e=q.getMaxZIndex(),t=b.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100},width:V.setting.width,height:V.setting.height,drag:true,only:true});},getPanelContentConfig(){return [_e,Ee]}},k={get cookieManagerApiName(){return y.getValue("cookie-manager-api","document.cookie")},get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(e,t){F.list(e,o=>{t(o);});},set(e,t){F.set(e,o=>{t(o);});},delete(e,t){F.delete(e,o=>{t(o);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(e,t){Z.cookie.list().then(o=>{t(o);});},set(e,t){Z.cookie.set(e).then(o=>{t(o);}).catch(o=>{t(o);});},delete(e,t){Z.cookie.delete(e).then(o=>{t(o);}).catch(o=>{t(o);});}};if(this.cookieManagerApiName==="cookieStore"){let e=A.cookieStore;return {list(t,o){e.getAll().then(i=>{o(i);}).catch(i=>{_.error(i),w.error(i.toString());});},set(t,o){e.set(t).then(()=>{o();}).catch(i=>{o(i);});},delete(t,o){e.delete(t).then(i=>{o();}).catch(i=>{o(i);});}}}else return ue},queryAllCookie(){return new Promise((e,t)=>{try{this.cookieManager.list({},o=>{let i=o||[];i=i.sort((a,r)=>a.name.localeCompare(r.name)),e(i);});}catch(o){_.error(o),w.error(o.toString()),t(o);}})},deleteAllCookie(){return new Promise((e,t)=>{try{this.cookieManager.list({},async o=>{const i=o||[],a={success:0,error:0};for(let r=0;r<i.length;r++){const n=i[r];await new Promise(s=>{this.deleteCookie(n).then(u=>{s(u);});})?a.error++:a.success++;}e(a);});}catch(o){_.error(o),w.error(o.toString()),t(o);}})},addCookie(e){return new Promise((t,o)=>{try{delete e.hostOnly,k.cookieManager.set(e,i=>{_.info(["添加Cookie："+e.name,e]),t(i);});}catch(i){_.error(i),w.error(i.toString()),o(i);}})},deleteCookie(e){return new Promise((t,o)=>{try{k.cookieManager.delete(e,i=>{_.info(["删除Cookie："+e.name,e]),t(i);});}catch(i){_.error(i),w.error(i.toString()),o(i);}})},updateCookie(e){return new Promise(async(t,o)=>{let i;try{let a=await k.deleteCookie(e);if(a)throw new TypeError(a.toString());let r=await k.addCookie(e);if(r)throw new TypeError(r.toString())}catch(a){i=a;}finally{_.info(["更新Cookie："+e.name,e]),t(i);}})}},le={beforeEdit(e){const t=k.cookieManagerApiName;return t==="cookieStore"?typeof e.expires=="number"&&(e.expirationDate=e.expires):(t==="GM_cookie"||t==="GM.cookie")&&typeof e.expirationDate=="number"&&(e.expirationDate=e.expirationDate*1e3),e},afterEdit(e){const t=k.cookieManagerApiName;return t==="document.cookie"?e.domain="":t==="cookieStore"?typeof e.expirationDate=="number"&&(e.expires=e.expirationDate):(t==="GM_cookie"||t==="GM.cookie")&&typeof e.expirationDate=="number"&&(e.expirationDate=Math.floor(e.expirationDate/1e3)),e}};let L=(e,t,o,i)=>({text:e,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return t()},callback(r,n){o(n);},placeholder:"",disabled:!!i}),J=(e,t,o,i,a)=>({text:e,type:"select",description:"",attributes:{},props:{},getValue(){return o()},callback(n,l,s){i(l);},data:t,disabled:false});const Q={init(){},showView(e,t){let o=!!e,i=v.assign({name:"",value:"",domain:window.location.hostname,path:"/",secure:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+60*60*24*30*1e3},e,true);i=le.beforeEdit(i);let r=b.confirm({title:{text:o?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:o?"编辑":"添加",async callback(g,S){if(Q.validCookieInfo(i)){if(i.value=encodeURIComponent(i.value),i=le.afterEdit(i),o){let C=await k.updateCookie(i);C?w.error(C.toString()):(w.success("修改成功"),g.close());}else {let C=await k.addCookie(i);C?w.error(C.toString()):(w.success("添加成功"),g.close());}typeof t=="function"&&t(i);}}},cancel:{text:"取消"}},mask:{enable:true},width:window.innerWidth>350?"350px":"80vw",height:V.setting.height,style:`
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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),n=b.config.panelHandleContentUtils(),l=n.createSectionContainerItem_input(L("name",()=>i.name,g=>i.name=g,o)),s=n.createSectionContainerItem_input(L("value",()=>i.value,g=>i.value=g)),u=n.createSectionContainerItem_input(L("domain",()=>i.domain,g=>i.domain=g)),f=n.createSectionContainerItem_input(L("path",()=>i.path,g=>i.path=g)),h;i.session?h=n.createSectionContainerItem_input(L("expires",()=>"会话",g=>{},true)):h=n.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(g){let S=m.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),$=S.querySelector("#cookie-item-property-expires");return $.valueAsNumber=i.expirationDate,m.on($,["change","input","propertychange"],C=>{v.preventEvent(C),i.expirationDate=$.valueAsNumber;}),S}});let c=n.createSectionContainerItem_select(J("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>i.httpOnly,g=>i.httpOnly=g)),p=n.createSectionContainerItem_select(J("secure",[{text:"true",value:true},{text:"false",value:false}],()=>i.secure,g=>i.secure=g)),d=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];k.cookieManagerApiName==="cookieStore"&&(d=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let x=n.createSectionContainerItem_select(J("sameSite",d,()=>i.sameSite,g=>i.sameSite=g));m.append(r,[l,s]),k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"?m.append(r,[u,f,h,c,p,x]):k.cookieManagerApiName==="cookieStore"&&m.append(r,[u,f,h,x]);},validCookieInfo(e){return e.name==null||e.name==""?(w.error("name不能为空"),false):e.domain==null||e.domain==""?(w.error("domain不能为空"),false):e.path==null||e.path==""?(w.error("path不能为空"),false):true}},Re={init(){this.registerMenu();},async showView(){const e=b.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:V.setting.width,height:V.setting.height,style:`
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
            `}),t=e.$shadowRoot.querySelector(".cookie-search-inner input"),o=e.$shadowRoot.querySelector(".cookie-search-setting"),i=e.$shadowRoot.querySelector(".cookie-control-refresh"),a=e.$shadowRoot.querySelector(".cookie-control-add"),r=e.$shadowRoot.querySelector(".cookie-control-copy-all"),n=e.$shadowRoot.querySelector(".cookie-control-clear-all"),l=e.$shadowRoot.querySelector(".cookie-control-rule-manager"),s=e.$shadowRoot.querySelector(".cookie-setting"),u=e.$shadowRoot.querySelector(".cookie-list-wrapper");let f=c=>{const p=m.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":c}),d=[{leftText:"name",rightText:c.name},{leftText:"value",rightText:y.getValue("decode-cookie-value")?decodeURIComponent(c.value):encodeURIComponent(c.value)}];k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"?(c=c,d.push({leftText:"domain",rightText:c.domain},{leftText:"path",rightText:c.path},{leftText:"session",rightText:JSON.stringify(c.session)},{leftText:"expires",rightText:c.session?"会话":c.expirationDate?new Date(c.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(c.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(c.hostOnly)},{leftText:"secure",rightText:JSON.stringify(c.secure)},{leftText:"sameSite",rightText:c.sameSite})):k.cookieManagerApiName==="cookieStore"&&(c=c,d.push({leftText:"domain",rightText:c.domain},{leftText:"path",rightText:c.path},{leftText:"expires",rightText:c.expires?new Date(c.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(c.secure)},{leftText:"sameSite",rightText:c.sameSite})),d.forEach(C=>{const E=m.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${C.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${C.rightText}</p>
                        </div>
                    `});m.append(p,E);});let x=m.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
                `}),g=x.querySelector(".cookie-item-group-control-copy"),S=x.querySelector(".cookie-item-group-control-edit"),$=x.querySelector(".cookie-item-group-control-delete");return m.on(g,"click",C=>{v.preventEvent(C);let E=c.value;v.setClip(E).then(R=>{R?w.success("复制成功"):w.error("复制失败");});}),m.on(S,"click",C=>{v.preventEvent(C),Q.showView(c,E=>{var D;let R=f(E);m.after(p,R),(D=p.parentElement)==null||D.removeChild(p);});}),m.on($,"click",C=>{v.preventEvent(C),confirm("确定删除该Cookie？")&&k.deleteCookie(c).then(R=>{var D;R?(_.error(R),w.error("删除失败")):(w.success("删除成功"),(D=p.parentElement)==null||D.removeChild(p));});}),m.append(p,[x]),p},h=async c=>{let p=await k.queryAllCookie();typeof c=="function"&&(p=p.filter(c)),m.empty(u);let d=document.createDocumentFragment();p.forEach(x=>{if(y.getValue("exclude-session-cookie")&&(x.session||k.cookieManagerApiName==="cookieStore"&&x.expires==null))return;const g=f(x);m.append(d,g);}),m.append(u,d);};h(),m.on(t,["input","propertychange"],v.debounce(c=>{h(p=>{let d=m.val(t);return y.getValue("search-config-use-regexp")?!!p.name.match(new RegExp(d)):p.name.includes(d)});})),m.listenKeyboard(t,"keypress",(c,p,d)=>{c==="Enter"&&d.length===0&&v.dispatchEvent(t,"input");}),m.on(o,"click",c=>{v.preventEvent(c);let d=b.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:V.info.width,height:V.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),g=b.config.panelHandleContentUtils().createSectionContainerItem_switch(G("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称"));m.append(d,g);}),m.on(i,"click",c=>{v.preventEvent(c),m.val(t)==""?h():v.dispatchEvent(t,"input");}),m.on(a,"click",c=>{v.preventEvent(c),Q.showView(void 0,p=>{h();});}),m.on(r,"click",c=>{v.preventEvent(c),k.queryAllCookie().then(p=>{if(p=p.filter(x=>!(x.session&&y.getValue("exclude-session-cookie"))),p.length===0){w.warning("没有Cookie可以复制");return}let d=p.map(x=>{let g=x.value;return `${x.name}=${g}; `}).join("");v.setClip(d).then(x=>{x?w.success("复制成功"):w.error("复制失败");});});}),m.on(n,"click",c=>{v.preventEvent(c),window.confirm("确定清除全部Cookie？")&&k.deleteAllCookie().then(d=>{d.error?w.warning(`清除成功：${d.success} 失败：${d.error}`):w.success("清除成功"),h();});}),m.on(l,"click",c=>{v.preventEvent(c),I.showView();}),m.on(s,"click",c=>{v.preventEvent(c);let d=b.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:V.info.width,height:V.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),x=b.config.panelHandleContentUtils(),g=x.createSectionContainerItem_select(j("CookieManager Api","cookie-manager-api","document.cookie",[{text:"document.cookie",value:"document.cookie"},{text:"cookieStore",value:"cookieStore"},{text:"GM_cookie",value:"GM_cookie"},{text:"GM.cookie",value:"GM.cookie"}],()=>{h();},"操作Cookie的Api函数")),S=x.createSectionContainerItem_switch(G("解码Cookie值","decode-cookie-value",false,()=>{h();},"对Cookie值进行解码")),$=x.createSectionContainerItem_switch(G("排除Session Cookie","exclude-session-cookie",false,()=>{h();},"过滤掉浏览器会话Cookie"));m.append(d,[g,S,$]);});},registerMenu(){const e=this;se.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(t,o){return t},callback(t){e.showView();}});}},Te={init(){this.execController(),m.ready(()=>{this.execController();});},execController(){for(let e=0;e<I.$data.ruleData.length;e++){const t=I.$data.ruleData[e];k.queryAllCookie().then(async o=>{for(let i=0;i<o.length;i++){let a=o[i];const r=a.name,n=t.data.cookieName;let l=false;if(t.data.enableRegExpToMatchCookieName?new RegExp(n,"i").test(r)&&(l=true):r.includes(n)&&(l=true),l){let s=t.data.operationMode;if(s==="delete")k.deleteCookie(a);else if(s==="extended"||s==="extended-90"||s==="extended-180"||s==="extended-360"){let u=Date.now(),f=30*24*60*60*1e3,h=f*3,c=f*6,p=f*12,d=f;s==="extended-90"?d=h:s==="extended-180"?d=c:s==="extended-360"&&(d=p);let x=false;if(k.cookieManagerApiName==="document.cookie")a.expirationDate=u+d,x=true;else if(k.cookieManagerApiName==="cookieStore"){let g=a.expires;typeof g=="number"&&g-u<d&&(a.expires=g+d,x=true);}else if(k.cookieManagerApiName==="GM_cookie"||k.cookieManagerApiName==="GM.cookie"){let g=a.expirationDate;typeof g=="number"&&g*1e3-u<d&&(a.expirationDate=g+d/1e3,x=true);}else _.error("未知的cookieManagerApiName",k.cookieManagerApiName);x&&await k.updateCookie(a);}}}});}}};y.init();I.init();Te.init();Re.init();

})(Qmsg, DOMUtils, Utils, pops);