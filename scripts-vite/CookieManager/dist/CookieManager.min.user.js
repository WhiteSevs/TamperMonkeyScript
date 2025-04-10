// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.4.10
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.0.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.0/dist/index.umd.js
// @connect      *
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

(function (w, ce, q, J) {
            'use strict';

            var re=Object.defineProperty;var se=(i,e,o)=>e in i?re(i,e,{enumerable:true,configurable:true,writable:true,value:o}):i[e]=o;var B=(i,e,o)=>se(i,e+"",o);var ue=typeof GM_cookie<"u"?GM_cookie:void 0,pe=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,O=typeof GM_getValue<"u"?GM_getValue:void 0,H=typeof GM_info<"u"?GM_info:void 0,de=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,P=typeof GM_setValue<"u"?GM_setValue:void 0,he=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,fe=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,A=typeof unsafeWindow<"u"?unsafeWindow:void 0,me=window;const T={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},ge="CookieManager",v=q.noConflict(),m=ce.noConflict(),k=J,C=new v.Log(H,A.console||me.console);var oe;const ie=((oe=H==null?void 0:H.script)==null?void 0:oe.name)||ge,ae=false;C.config({debug:ae,logMaxCount:1e3,autoClearConsole:true,tag:true});w.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return y.getValue(T.qmsg_config_position.key,T.qmsg_config_position.defaultValue)}},maxNums:{get(){return y.getValue(T.qmsg_config_maxnums.key,T.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return y.getValue(T.qmsg_config_showreverse.key,T.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let i=q.getMaxZIndex(),e=J.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(i,e)+100}}}));k.GlobalConfig.setGlobalConfig({zIndex:()=>{let i=q.getMaxZIndex(void 0,void 0,o=>{var t;if((t=o==null?void 0:o.classList)!=null&&t.contains("qmsg-shadow-container")||o!=null&&o.closest("qmsg")&&o.getRootNode()instanceof ShadowRoot)return  false}),e=J.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(i,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const ne=new v.GM_Menu({GM_getValue:O,GM_setValue:P,GM_registerMenuCommand:de,GM_unregisterMenuCommand:he}),F=new v.Httpx(fe);F.interceptors.request.use(i=>i);F.interceptors.response.use(void 0,i=>(C.error("拦截器-请求错误",i),i.type==="onabort"?w.warning("请求取消"):i.type==="onerror"?w.error("请求异常"):i.type==="ontimeout"?w.error("请求超时"):w.error("其它错误"),i));F.config({logDetails:ae});A.Object.defineProperty,A.Function.prototype.apply,A.Function.prototype.call,A.Element.prototype.appendChild,A.setTimeout;v.addStyle.bind(v);document.querySelector.bind(document);document.querySelectorAll.bind(document);const xe=new q.GM_Cookie,I="GM_Panel",le="data-init",U="data-key",z="data-default-value",we="data-init-more-value",$="data-storage-api",N=function(i,e,o,t,a,r){let n={text:i,type:"switch",description:a,attributes:{},props:{},getValue(){return !!this.props[$].get(e,o)},callback(l,s){let u=!!s;C.success(`${u?"开启":"关闭"} ${i}`),!(typeof t=="function"&&t(l,u))&&this.props[$].set(e,u);},afterAddToUListCallBack:r};return Reflect.set(n.attributes,U,e),Reflect.set(n.attributes,z,o),Reflect.set(n.props,$,{get(l,s){return y.getValue(l,s)},set(l,s){y.setValue(l,s);}}),n},j=function(i,e,o,t,a,r){let n=[];typeof t=="function"?n=t():n=t;let l={text:i,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[$].get(e,o)},callback(s,u,h){let f=u;C.info(`选择：${h}`),this.props[$].set(e,f),typeof a=="function"&&a(s,f,h);},data:n};return Reflect.set(l.attributes,U,e),Reflect.set(l.attributes,z,o),Reflect.set(l.props,$,{get(s,u){return y.getValue(s,u)},set(s,u){y.setValue(s,u);}}),l},ve={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[j("Toast位置",T.qmsg_config_position.key,T.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(i,e,o)=>{C.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),j("最多显示的数量",T.qmsg_config_maxnums.key,T.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),N("逆序弹出",T.qmsg_config_showreverse.key,T.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]},V={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},info:{get width(){return "350px"},get height(){return "250px"}}},W=function(i,e,o,t,a,r,n,l,s,u){let h={text:i,type:"button",attributes:{},description:e,buttonIcon:t,buttonIsRightIcon:a,buttonIconIsLoading:r,buttonType:n,buttonText:o,callback(f){typeof l=="function"&&l(f);},afterAddToUListCallBack:s};return Reflect.set(h.attributes,le,()=>{h.disable=false;}),h},Z=function(i,e,o,t,a,r="",n,l){let s={text:i,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:t,getValue(){return this.props[$].get(e,o)},callback(u,h){this.props[$].set(e,h);},placeholder:r};return Reflect.set(s.attributes,U,e),Reflect.set(s.attributes,z,o),Reflect.set(s.props,$,{get(u,h){return y.getValue(u,h)},set(u,h){y.setValue(u,h);}}),s},ye=function(i,e,o,t,a,r="",n){let l={text:i,type:"textarea",attributes:{},props:{},description:t,placeholder:r,disabled:n,getValue(){let s=this.props[$].get(e,o);return Array.isArray(s)?s.join(`
`):s},callback(s,u){this.props[$].set(e,u);}};return Reflect.set(l.attributes,U,e),Reflect.set(l.attributes,z,o),Reflect.set(l.props,$,{get(s,u){return y.getValue(s,u)},set(s,u){y.setValue(s,u);}}),l};class ke{constructor(e){B(this,"option");this.option=e;}async showView(){var n;let e=k.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:v.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),mask:{enable:true},drag:true,style:`
                ${k.config.cssText.panelCSS}
                
                .rule-form-container {
                    
                }
                .rule-form-container li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 20px;
                    gap: 10px;
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

                ${((n=this.option)==null?void 0:n.style)??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),o=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let t=e.$shadowRoot.querySelector(".rule-form-ulist"),a=await this.option.getView(await this.option.data());t.appendChild(a);const r=async()=>{(await this.option.onsubmit(o,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class be{constructor(e){B(this,"option");this.option=e;}showView(){let e=k.alert({title:{text:this.option.title,position:"center"},content:{text:`
                <div class="filter-container"></div>
                `},btn:{ok:{text:"关闭",type:"default"}},mask:{enable:true},width:window.innerWidth>500?"350px":"80vw",height:window.innerHeight>500?"300px":"70vh",style:`
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
            `}),o=e.$shadowRoot.querySelector(".filter-container"),t=document.createDocumentFragment();this.option.filterOption.forEach(a=>{let r=document.createElement("button");r.innerText=a.name;let n=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await a.filterCallBack(s.data)?m.show(s.$el,false):m.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};m.on(r,"click",async l=>{v.preventEvent(l),!(typeof a.callback=="function"&&!await a.callback(l,n))&&await n();}),t.appendChild(r);}),o.appendChild(t);}}class Ce{constructor(e){B(this,"option");this.option=e;}async showView(e){var r,n,l,s,u,h,f,c,p;let o=k.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((l=(n=(r=this.option)==null?void 0:r.bottomControls)==null?void 0:n.add)==null?void 0:l.enable)||true,type:"primary",text:"添加",callback:async d=>{this.showEditView(false,await this.option.getAddData(),o.$shadowRoot);}},close:{enable:true,callback(d){o.close();}},cancel:{enable:((h=(u=(s=this.option)==null?void 0:s.bottomControls)==null?void 0:u.filter)==null?void 0:h.enable)||false,type:"default",text:"过滤",callback:(d,x)=>{var M,b,E,R,D,Q,X;typeof((E=(b=(M=this.option)==null?void 0:M.bottomControls)==null?void 0:b.filter)==null?void 0:E.callback)=="function"&&this.option.bottomControls.filter.callback();let g=()=>Array.from(o.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),S=x.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");m.text(S).includes("取消")?(g().forEach(ee=>{m.show(ee,false);}),m.text(S,"过滤")):new be({title:((D=(R=this.option.bottomControls)==null?void 0:R.filter)==null?void 0:D.title)??"过滤规则",filterOption:((X=(Q=this.option.bottomControls)==null?void 0:Q.filter)==null?void 0:X.option)||[],execFilterCallBack(){m.text(S,"取消过滤");},getAllRuleInfo:()=>g().map(te=>({data:this.parseRuleItemElement(te).data,$el:te}))}).showView();}},other:{enable:((p=(c=(f=this.option)==null?void 0:f.bottomControls)==null?void 0:c.clear)==null?void 0:p.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:d=>{let x=k.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async g=>{var M,b,E;if(C.success("清空所有"),typeof((E=(b=(M=this.option)==null?void 0:M.bottomControls)==null?void 0:b.clear)==null?void 0:E.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(o.$shadowRoot),this.clearContent(o.$shadowRoot),x.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},drag:true,width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${k.config.cssText.panelCSS}
            
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
            `}),t=await this.option.data(),a=false;for(let d=0;d<t.length;d++){let x=t[d],g=await this.appendRuleItemElement(o.$shadowRoot,x);(typeof e=="function"?e(x):true)||(a=true,g.forEach(M=>{m.hide(M,false);}));}if(a){let d=o.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");m.text(d,"取消过滤");}}showEditView(e,o,t,a,r,n){let l=async u=>{if(u){if(typeof n=="function"){let h=await this.option.getData(o);n(h);}}else if(e||await this.option.deleteData(o),typeof r=="function"){let h=await this.option.getData(o);r(h);}};new ke({title:e?"编辑":"添加",data:()=>o,dialogCloseCallBack:l,getView:async u=>await this.option.itemControls.edit.getView(u,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(u,h)=>{u.close(),await l(false);}},close:{callback:async(u,h)=>{u.close(),await l(false);}}},onsubmit:async(u,h)=>{let f=await this.option.itemControls.edit.onsubmit(u,e,h);return f.success?e?(w.success("修改成功"),t&&await this.updateRuleItemElement(f.data,a,t)):t&&await this.appendRuleItemElement(t,f.data):e&&w.error("修改失败"),f},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let o=e.querySelector(".rule-view-container"),t=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:o,$deleteBtn:t}}parseRuleItemElement(e){let o=e.querySelector(".rule-controls-enable"),t=o.querySelector(".pops-panel-switch"),a=o.querySelector(".pops-panel-switch__input"),r=o.querySelector(".pops-panel-switch__core"),n=e.querySelector(".rule-controls-edit"),l=e.querySelector(".rule-controls-delete");return {$enable:o,$enableSwitch:t,$enableSwitchInput:a,$enableSwitchCore:r,$edit:n,$delete:l,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,o){let t=await this.option.getDataItemName(e),a=m.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${t}</div>
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
					${k.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${k.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(a,"data-rule",e);let r="pops-panel-switch-is-checked";const{$enable:n,$enableSwitch:l,$enableSwitchCore:s,$enableSwitchInput:u,$delete:h,$edit:f}=this.parseRuleItemElement(a);return this.option.itemControls.enable.enable?(m.on(s,"click",async c=>{let p=false;l.classList.contains(r)?(l.classList.remove(r),p=false):(l.classList.add(r),p=true),u.checked=p,await this.option.itemControls.enable.callback(e,p);}),await this.option.itemControls.enable.getEnable(e)&&l.classList.add(r)):n.remove(),this.option.itemControls.edit.enable?m.on(f,"click",c=>{v.preventEvent(c),this.showEditView(true,e,o,a,p=>{e=null,e=p;});}):f.remove(),this.option.itemControls.delete.enable?m.on(h,"click",c=>{v.preventEvent(c);let p=k.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async d=>{C.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(w.success("成功删除该数据"),a.remove(),await this.updateDeleteAllBtnText(o),p.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):h.remove(),a}async appendRuleItemElement(e,o){let{$container:t}=this.parseViewElement(e),a=[],r=Array.isArray(o)?o:[o];for(let n=0;n<r.length;n++){let l=r[n],s=await this.createRuleItemElement(l,e);t.appendChild(s),a.push(s);}return await this.updateDeleteAllBtnText(e),a}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:o}=this.parseViewElement(e);let t=await this.option.data();await this.appendRuleItemElement(e,t),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,o,t){let a=await this.createRuleItemElement(e,t);o.after(a),o.remove();}clearContent(e){const{$container:o}=this.parseViewElement(e);m.html(o,"");}setDeleteBtnText(e,o,t=false){const{$deleteBtn:a}=this.parseViewElement(e);t?m.html(a,o):m.text(a,o);}async updateDeleteAllBtnText(e){let o=await this.option.data();this.setDeleteBtnText(e,`清空所有(${o.length})`);}}const G={$key:{STORAGE_KEY:"cookie-rule"},$data:{ruleData:[]},init(){this.$data.ruleData=[],this.getData().forEach(e=>{if(!e.enable)return;let o=window.location.href,t=e.data.url;if(e.data.enableRegExpToMatchUrl){if(!new RegExp(t,"i").test(o))return}else if(!o.includes(t))return;this.$data.ruleData.push(e);});},showView(){let i=k.config.panelHandleContentUtils();function e(t,a){return {get(r,n){return Reflect.get(t,r)??n},set(r,n){Reflect.set(t,r,n);}}}new Ce({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:t=>t.name,updateData:t=>this.updateData(t),deleteData:t=>this.deleteData(t),getData:t=>this.getData().find(n=>n.uuid===t.uuid)??t,itemControls:{enable:{enable:true,getEnable(t){return t.enable},callback:(t,a)=>{t.enable=a,this.updateData(t);}},edit:{enable:true,getView:(t,a)=>{let r=document.createDocumentFragment(),n=this.getTemplateData();a||(t=n);let l=N("启用","enable",n.enable);Reflect.set(l.props,$,e(t));let s=i.createSectionContainerItem_switch(l),u=Z("规则名称","name","",n.name,void 0,"必填");Reflect.set(u.props,$,e(t));let h=i.createSectionContainerItem_input(u),f=Z("网址","url",n.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(f.props,$,e(t.data));let c=i.createSectionContainerItem_input(f),p=N("启用正则匹配网址","enableRegExpToMatchUrl",n.data.enableRegExpToMatchUrl);Reflect.set(p.props,$,e(t.data));let d=i.createSectionContainerItem_switch(p),x=Z("Cookie名称","cookieName",n.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(x.props,$,e(t.data));let g=i.createSectionContainerItem_input(x),S=N("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",n.data.enableRegExpToMatchCookieName);Reflect.set(S.props,$,e(t.data));let M=i.createSectionContainerItem_switch(S),b=j("操作模式","operationMode",n.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(b.props,$,e(t.data));let E=i.createSectionContainerItem_select(b),R=ye("备注","remark",n.data.remark);Reflect.set(R.props,$,e(t.data));let D=i.createSectionContainerItem_textarea(R);return r.append(s,h,c,d,g,M,E,D),r},onsubmit:(t,a,r)=>{let n=t.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();a&&(l.uuid=r.uuid);try{return n.forEach(s=>{let u=Reflect.get(s,"__formConfig__"),h=Reflect.get(u,"attributes"),f=Reflect.get(s,$),c=Reflect.get(h,U),p=Reflect.get(h,z),d=f.get(c,p);Reflect.has(l,c)?Reflect.set(l,c,d):Reflect.has(l.data,c)?Reflect.set(l.data,c,d):C.error(`${c}不在数据中`);}),l.name.trim()===""?(w.error("规则名称不能为空"),{success:!1,data:l}):l.data.url.trim()===""?(w.error("网址不能为空"),{success:!1,data:l}):l.data.cookieName.trim()===""?(w.error("Cookie名称不能为空"),{success:!1,data:l}):a?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}catch(s){return C.error(s),{success:false,data:l}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:t=>this.deleteData(t)}}}).showView();},getTemplateData(){return {uuid:v.generateUUID(),enable:true,name:"",data:{url:"",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return O(this.$key.STORAGE_KEY,[])},setData(i){P(this.$key.STORAGE_KEY,i);},addData(i){let e=this.getData();return e.findIndex(t=>t.uuid==i.uuid)===-1?(e.push(i),P(this.$key.STORAGE_KEY,e),true):false},updateData(i){let e=this.getData(),o=e.findIndex(a=>a.uuid==i.uuid),t=false;return o!==-1&&(t=true,e[o]=i),this.setData(e),t},deleteData(i){let e=this.getData(),o=e.findIndex(a=>a.uuid==i.uuid),t=false;return o!==-1&&(t=true,e.splice(o,1)),this.setData(e),t},clearData(){pe(this.$key.STORAGE_KEY);},exportRule(i="rule.json"){let e=this.getData(),o=new Blob([JSON.stringify(e,null,4)]),t=window.URL.createObjectURL(o),a=m.createElement("a");a.href=t,a.download=i,a.click(),setTimeout(()=>{window.URL.revokeObjectURL(t);},1500);},importRule(){let i=k.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
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
            `}),e=i.$shadowRoot.querySelector(".import-mode[data-mode='local']"),o=i.$shadowRoot.querySelector(".import-mode[data-mode='network']");m.on(e,"click",t=>{v.preventEvent(t),i.close();let a=m.createElement("input",{type:"file",accept:".json"});m.on(a,["propertychange","input"],r=>{var s;if(!((s=a.files)!=null&&s.length))return;let n=a.files[0],l=new FileReader;l.onload=()=>{let u=v.toJSON(l.result);if(!Array.isArray(u)){C.error("不是正确的规则文件",u),w.error("不是正确的规则文件");return}this.setData(u),w.success(`成功导入 ${u.length}条规则`);},l.readAsText(n,"UTF-8");}),a.click();}),m.on(o,"click",t=>{v.preventEvent(t),i.close(),k.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(a,r)=>{let n=a.text;if(v.isNull(n)){w.error("请填入完整的url");return}let l=await F.get(n);if(!l.status)return;let s=v.toJSON(l.data.responseText);if(!Array.isArray(s)){C.error("不是正确的规则文件",l,s),w.error("不是正确的规则文件");return}this.setData(s),a.close(),w.success(`成功导入 ${s.length}条规则`);}}},width:V.info.width,height:"auto"});});}},_e={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[W("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{G.showView();})]},{type:"forms",text:"",forms:[W("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{G.importRule();}),W("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{G.exportRule("CookieManagerRule.json");})]}]},y={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return y.$data.__data==null&&(y.$data.__data=new v.Dictionary),y.$data.__data},get oneSuccessExecMenu(){return y.$data.__oneSuccessExecMenu==null&&(y.$data.__oneSuccessExecMenu=new v.Dictionary),y.$data.__oneSuccessExecMenu},get onceExec(){return y.$data.__onceExec==null&&(y.$data.__onceExec=new v.Dictionary),y.$data.__onceExec},get scriptName(){return ie},key:I,attributeKeyName:U,attributeDefaultValueName:z},$listener:{get listenData(){return y.$data.__listenData==null&&(y.$data.__listenData=new v.Dictionary),y.$data.__listenData}},init(){let i=this.getPanelContentConfig();this.initPanelConfigDefaultValue([...i]),this.registerMenu();},isTopWindow(){return A.top===A.self},registerMenu(){this.isTopWindow()&&ne.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(i){return i},callback:()=>{this.showPanel();}}]);},initPanelConfigDefaultValue(i){let e=this;function o(a){if(!a.attributes)return;let r={},n=a.attributes[U];n!=null&&(r[n]=a.attributes[z]);let l=a.attributes[le];if(typeof l=="function"){let h=l();if(typeof h=="boolean"&&!h)return}let s=a.attributes[we];s&&typeof s=="object"&&Object.assign(r,s);let u=Object.keys(r);if(!u.length){a.type!=="button"&&C.warn("请先配置键",a);return}u.forEach(h=>{let f=r[h];e.$data.data.has(h)&&C.warn("请检查该key(已存在): "+h),e.$data.data.set(h,f);});}function t(a){for(let r=0;r<a.length;r++){let n=a[r];o(n);let l=n.forms;l&&Array.isArray(l)&&t(l);}}for(let a=0;a<i.length;a++){let r=i[a];if(!r.forms)continue;let n=r.forms;n&&Array.isArray(n)&&t(n);}},setValue(i,e){let o=O(I,{}),t=o[i];o[i]=e,P(I,o),this.$listener.listenData.has(i)&&this.$listener.listenData.get(i).callback(i,t,e);},getValue(i,e){let t=O(I,{})[i];return t??(this.$data.data.has(i)?this.$data.data.get(i):e)},deleteValue(i){let e=O(I,{}),o=e[i];Reflect.deleteProperty(e,i),P(I,e),this.$listener.listenData.has(i)&&this.$listener.listenData.get(i).callback(i,o,void 0);},addValueChangeListener(i,e,o){let t=Math.random();return this.$listener.listenData.set(i,{id:t,key:i,callback:e}),o&&o.immediate&&e(i,this.getValue(i),this.getValue(i)),t},removeValueChangeListener(i){let e=null;for(const[o,t]of this.$listener.listenData.entries())if(t.id===i){e=o;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},triggerMenuValueChange(i,e,o){if(this.$listener.listenData.has(i)){let t=this.$listener.listenData.get(i);if(typeof t.callback=="function"){let a=this.getValue(i),r=a,n=a;typeof e<"u"&&arguments.length>1&&(r=e),typeof o<"u"&&arguments.length>2&&(n=o),t.callback(i,n,r);}}},hasKey(i){let e=O(I,{});return i in e},execMenu(i,e,o=false,t){if(!(typeof i=="string"||typeof i=="object"&&Array.isArray(i)))throw new TypeError("key 必须是字符串或者字符串数组");let a=[];typeof i=="object"&&Array.isArray(i)?a=[...i]:a.push(i);let r;for(let n=0;n<a.length;n++){const l=a[n];if(!this.$data.data.has(l)){C.warn(`${i} 键不存在`);return}let s=y.getValue(l);if(o&&(s=!s),typeof t=="function"){let u=t(l,s);typeof u=="boolean"&&(s=u);}if(!s)break;r=s;}r&&e(r);},execMenuOnce(i,e,o,t,a){if(typeof i!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(i)){C.warn(`${i} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(i))return;this.$data.oneSuccessExecMenu.set(i,1);let r=()=>{let f=y.getValue(i);return typeof o=="function"?o(i,f):f},n=[],l=f=>{let c=r(),p=[];if(f instanceof HTMLStyleElement?p=[f]:Array.isArray(f)&&(p=[...f.filter(d=>d!=null&&d instanceof HTMLStyleElement)]),c)n=n.concat(p);else for(let d=0;d<p.length;d++)p[d].remove(),p.splice(d,1),d--;},s=f=>typeof a=="function"?a(i,f):f,u=f=>{let c=[];if(s(f)){let p=e(f,l);p instanceof HTMLStyleElement?c=[p]:Array.isArray(p)&&(c=[...p.filter(d=>d!=null&&d instanceof HTMLStyleElement)]);}for(let p=0;p<n.length;p++)n[p].remove(),n.splice(p,1),p--;n=[...c];};this.addValueChangeListener(i,(f,c,p)=>{let d=p;typeof t=="function"&&(d=t(f,p,c)),u(d);});let h=r();h&&u(h);},execInheritMenuOnce(i,e,o,t){let a=this;const r=(n,l)=>{let s=a.getValue(n),u=a.getValue(l);if(typeof t=="function"){let h=t(s,u);if(h!=null)return h}return s};this.execMenuOnce(i,o,()=>r(i,e),()=>r(i,e)),this.execMenuOnce(e,()=>{},()=>false,()=>(this.triggerMenuValueChange(i),false));},onceExec(i,e){if(typeof i!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(i)||(e(),this.$data.onceExec.set(i,1));},showPanel(){k.panel({title:{text:`${ie}-设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},zIndex(){let i=q.getMaxZIndex(),e=k.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(i,e)+100},width:V.setting.width,height:V.setting.height,drag:true,only:true});},getPanelContentConfig(){return [ve,_e]}},_={get cookieManagerApiName(){return y.getValue("cookie-manager-api","document.cookie")},get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return ue;if(this.cookieManagerApiName==="cookieStore"){let i=A.cookieStore;return {list(e,o){i.getAll().then(t=>{o(t);}).catch(t=>{C.error(t),w.error(t.toString());});},set(e,o){i.set(e).then(()=>{o();}).catch(t=>{o(t);});},delete(e,o){i.delete(e).then(t=>{o();}).catch(t=>{o(t);});}}}else return xe},queryAllCookie(){return new Promise((i,e)=>{try{this.cookieManager.list({},o=>{let t=o||[];t=t.sort((a,r)=>a.name.localeCompare(r.name)),i(t);});}catch(o){C.error(o),w.error(o.toString()),e(o);}})},deleteAllCookie(){return new Promise((i,e)=>{try{this.cookieManager.list({},async o=>{const t=o||[],a={success:0,error:0};for(let r=0;r<t.length;r++){const n=t[r];await new Promise(s=>{this.deleteCookie(n).then(u=>{s(u);});})?a.error++:a.success++;}i(a);});}catch(o){C.error(o),w.error(o.toString()),e(o);}})},addCookie(i){return new Promise((e,o)=>{try{delete i.hostOnly,_.cookieManager.set(i,t=>{C.info(["添加Cookie："+i.name,i]),e(t);});}catch(t){C.error(t),w.error(t.toString()),o(t);}})},deleteCookie(i){return new Promise((e,o)=>{try{_.cookieManager.delete(i,t=>{C.info(["删除Cookie："+i.name,i]),e(t);});}catch(t){C.error(t),w.error(t.toString()),o(t);}})},updateCookie(i){return new Promise(async(e,o)=>{let t;try{let a=await _.deleteCookie(i);if(a)throw new TypeError(a.toString());let r=await _.addCookie(i);if(r)throw new TypeError(r.toString())}catch(a){t=a;}finally{C.info(["更新Cookie："+i.name,i]),e(t);}})}};let L=(i,e,o,t)=>({text:i,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return e()},callback(r,n){o(n);},placeholder:"",disabled:!!t}),K=(i,e,o,t,a)=>({text:i,type:"select",description:"",attributes:{},props:{},getValue(){return o()},callback(n,l,s){t(l);},data:e,disabled:false});const Y={init(){},showView(i,e){let o=!!i,t=v.assign({name:"",value:"",domain:window.location.hostname,path:"/",secure:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+60*60*24*30*1e3},i,true);_.cookieManagerApiName==="cookieStore"&&t.expires&&(t.expirationDate=t.expires);let r=k.confirm({title:{text:o?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:o?"编辑":"添加",async callback(g,S){if(Y.validCookieInfo(t)){if(t.value=encodeURIComponent(t.value),_.cookieManagerApiName==="document.cookie"?t.domain="":_.cookieManagerApiName==="GM_cookie"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),o){let b=await _.updateCookie(t);b?w.error(b.toString()):(w.success("修改成功"),g.close());}else {let b=await _.addCookie(t);b?w.error(b.toString()):(w.success("添加成功"),g.close());}typeof e=="function"&&e(t);}}},cancel:{text:"取消"}},mask:{enable:true},width:window.innerWidth>350?"350px":"80vw",height:V.setting.height,style:`
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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),n=k.config.panelHandleContentUtils(),l=n.createSectionContainerItem_input(L("name",()=>t.name,g=>t.name=g,o)),s=n.createSectionContainerItem_input(L("value",()=>t.value,g=>t.value=g)),u=n.createSectionContainerItem_input(L("domain",()=>t.domain,g=>t.domain=g)),h=n.createSectionContainerItem_input(L("path",()=>t.path,g=>t.path=g)),f;t.session?f=n.createSectionContainerItem_input(L("expires",()=>"会话",g=>{},true)):f=n.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(g){let S=m.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),M=S.querySelector("#cookie-item-property-expires");return M.valueAsNumber=t.expirationDate,m.on(M,["change","input","propertychange"],b=>{v.preventEvent(b),t.expirationDate=M.valueAsNumber;}),S}});let c=n.createSectionContainerItem_select(K("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>t.httpOnly,g=>t.httpOnly=g)),p=n.createSectionContainerItem_select(K("secure",[{text:"true",value:true},{text:"false",value:false}],()=>t.secure,g=>t.secure=g)),d=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];_.cookieManagerApiName==="cookieStore"&&(d=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let x=n.createSectionContainerItem_select(K("sameSite",d,()=>t.sameSite,g=>t.sameSite=g));m.append(r,[l,s]),_.cookieManagerApiName==="GM_cookie"?m.append(r,[u,h,f,c,p,x]):_.cookieManagerApiName==="cookieStore"&&m.append(r,[u,h,f,x]);},validCookieInfo(i){return i.name==null||i.name==""?(w.error("name不能为空"),false):i.domain==null||i.domain==""?(w.error("domain不能为空"),false):i.path==null||i.path==""?(w.error("path不能为空"),false):true}},$e={init(){this.registerMenu();},async showView(){const i=k.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
            `}),e=i.$shadowRoot.querySelector(".cookie-search-inner input"),o=i.$shadowRoot.querySelector(".cookie-search-setting"),t=i.$shadowRoot.querySelector(".cookie-control-refresh"),a=i.$shadowRoot.querySelector(".cookie-control-add"),r=i.$shadowRoot.querySelector(".cookie-control-copy-all"),n=i.$shadowRoot.querySelector(".cookie-control-clear-all"),l=i.$shadowRoot.querySelector(".cookie-control-rule-manager"),s=i.$shadowRoot.querySelector(".cookie-setting"),u=i.$shadowRoot.querySelector(".cookie-list-wrapper");let h=c=>{const p=m.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":c}),d=[{leftText:"name",rightText:c.name},{leftText:"value",rightText:y.getValue("decode-cookie-value")?decodeURIComponent(c.value):encodeURIComponent(c.value)}];_.cookieManagerApiName==="GM_cookie"?(c=c,d.push({leftText:"domain",rightText:c.domain},{leftText:"path",rightText:c.path},{leftText:"session",rightText:JSON.stringify(c.session)},{leftText:"expires",rightText:c.session?"会话":c.expirationDate?new Date(c.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(c.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(c.hostOnly)},{leftText:"secure",rightText:JSON.stringify(c.secure)},{leftText:"sameSite",rightText:c.sameSite})):_.cookieManagerApiName==="cookieStore"&&(c=c,d.push({leftText:"domain",rightText:c.domain},{leftText:"path",rightText:c.path},{leftText:"expires",rightText:c.expires?new Date(c.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(c.secure)},{leftText:"sameSite",rightText:c.sameSite})),d.forEach(b=>{const E=m.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${b.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${b.rightText}</p>
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
                            ${k.config.iconSVG.delete}
                        </div>
                    </div>
                `}),g=x.querySelector(".cookie-item-group-control-copy"),S=x.querySelector(".cookie-item-group-control-edit"),M=x.querySelector(".cookie-item-group-control-delete");return m.on(g,"click",b=>{v.preventEvent(b);let E=c.value;v.setClip(E).then(R=>{R?w.success("复制成功"):w.error("复制失败");});}),m.on(S,"click",b=>{v.preventEvent(b),Y.showView(c,E=>{var D;let R=h(E);m.after(p,R),(D=p.parentElement)==null||D.removeChild(p);});}),m.on(M,"click",b=>{v.preventEvent(b),confirm("确定删除该Cookie？")&&_.deleteCookie(c).then(R=>{var D;R?(C.error(R),w.error("删除失败")):(w.success("删除成功"),(D=p.parentElement)==null||D.removeChild(p));});}),m.append(p,[x]),p},f=async c=>{let p=await _.queryAllCookie();typeof c=="function"&&(p=p.filter(c)),m.empty(u);let d=document.createDocumentFragment();p.forEach(x=>{if(x.session&&y.getValue("exclude-session-cookie"))return;const g=h(x);m.append(d,g);}),m.append(u,d);};f(),m.on(e,["input","propertychange"],v.debounce(c=>{f(p=>{let d=m.val(e);return y.getValue("search-config-use-regexp")?!!p.name.match(new RegExp(d)):p.name.includes(d)});})),m.listenKeyboard(e,"keypress",(c,p,d)=>{c==="Enter"&&d.length===0&&v.dispatchEvent(e,"input");}),m.on(o,"click",c=>{v.preventEvent(c);let d=k.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:V.info.width,height:V.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),g=k.config.panelHandleContentUtils().createSectionContainerItem_switch(N("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称"));m.append(d,g);}),m.on(t,"click",c=>{v.preventEvent(c),m.val(e)==""?f():v.dispatchEvent(e,"input");}),m.on(a,"click",c=>{v.preventEvent(c),Y.showView(void 0,p=>{f();});}),m.on(r,"click",c=>{v.preventEvent(c),_.queryAllCookie().then(p=>{if(p=p.filter(x=>!(x.session&&y.getValue("exclude-session-cookie"))),p.length===0){w.warning("没有Cookie可以复制");return}let d=p.map(x=>{let g=x.value;return `${x.name}=${g}; `}).join("");v.setClip(d).then(x=>{x?w.success("复制成功"):w.error("复制失败");});});}),m.on(n,"click",c=>{v.preventEvent(c),window.confirm("确定清除全部Cookie？")&&_.deleteAllCookie().then(d=>{d.error?w.warning(`清除成功：${d.success} 失败：${d.error}`):w.success("清除成功"),f();});}),m.on(l,"click",c=>{v.preventEvent(c),G.showView();}),m.on(s,"click",c=>{v.preventEvent(c);let d=k.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:V.info.width,height:V.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),x=k.config.panelHandleContentUtils(),g=x.createSectionContainerItem_select(j("CookieManager Api","cookie-manager-api","document.cookie",[{text:"document.cookie",value:"document.cookie"},{text:"cookieStore",value:"cookieStore"},{text:"GM_cookie",value:"GM_cookie"}],()=>{f();},"操作Cookie的Api函数")),S=x.createSectionContainerItem_switch(N("解码Cookie值","decode-cookie-value",false,()=>{f();},"对Cookie值进行解码")),M=x.createSectionContainerItem_switch(N("排除Session Cookie","exclude-session-cookie",false,()=>{f();},"过滤掉浏览器会话Cookie"));m.append(d,[g,S,M]);});},registerMenu(){const i=this;ne.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,o){return e},callback(e){i.showView();}});}},Me={init(){this.execController(),m.ready(()=>{this.execController();});},execController(){for(let i=0;i<G.$data.ruleData.length;i++){const e=G.$data.ruleData[i];_.queryAllCookie().then(async o=>{for(let t=0;t<o.length;t++){let a=o[t];const r=a.name,n=e.data.cookieName;let l=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(n,"i").test(r)&&(l=true):r.includes(n)&&(l=true),l){let s=e.data.operationMode;if(s==="delete")_.deleteCookie(a);else if(s==="extended"||s==="extended-90"||s==="extended-180"||s==="extended-360"){let u=Date.now(),h=30*24*60*60*1e3,f=h*3,c=h*6,p=h*12,d=h;s==="extended-90"?d=f:s==="extended-180"?d=c:s==="extended-360"&&(d=p);let x=false;if(_.cookieManagerApiName==="document.cookie")a.expirationDate=u+d,x=true;else if(_.cookieManagerApiName==="cookieStore"){let g=a.expires;typeof g=="number"&&g-u<d&&(a.expires=g+d,x=true);}else if(_.cookieManagerApiName==="GM_cookie"){let g=a.expirationDate;typeof g=="number"&&g*1e3-u<d&&(a.expirationDate=g+d/1e3,x=true);}else C.error("未知的cookieManagerApiName",_.cookieManagerApiName);x&&await _.updateCookie(a);}}}});}}};y.init();G.init();Me.init();$e.init();

})(Qmsg, DOMUtils, Utils, pops);