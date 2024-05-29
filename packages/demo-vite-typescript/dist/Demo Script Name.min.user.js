// ==UserScript==
// @name         Demo Script Name
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.29
// @author       WhiteSevs
// @description  demo desc
// @license      GPL-3.0-only
// @icon
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.1.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.2.1/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.1.0/dist/index.umd.js
// @resource     ElementPlusResourceCSS  https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css
// @connect      *
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (f, E, G) {
	'use strict';

	var u=typeof GM_getValue<"u"?GM_getValue:void 0,c=typeof GM_info<"u"?GM_info:void 0,$=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,m=typeof GM_setValue<"u"?GM_setValue:void 0,y=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,b=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,a=typeof unsafeWindow<"u"?unsafeWindow:void 0,V=window;const P="Demo Script Name",l=G.noConflict();E.noConflict();const T=V.pops||a.pops,s=new l.Log(c,a.console||V.console);var D;const _=((D=c==null?void 0:c.script)==null?void 0:D.name)||P,v=!1;s.config({debug:v,logMaxCount:2e4,autoClearConsole:!0,tag:!0});f.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const I=new l.GM_Menu({GM_getValue:u,GM_setValue:m,GM_registerMenuCommand:$,GM_unregisterMenuCommand:y}),L=new l.Httpx(b);L.config({logDetails:v,onabort(){f.warning("请求取消");},ontimeout(){f.error("请求超时");},onerror(e){f.error("请求异常"),s.error(["httpx-onerror 请求异常",e]);}});a.Object.defineProperty,a.Function.prototype.apply,a.Function.prototype.call,a.Element.prototype.appendChild,a.setTimeout;const r="GM_Panel",C="data-key",x="data-default-value",M={$data:{data:new l.Dictionary,oneSuccessExecMenu:new l.Dictionary,onceExec:new l.Dictionary,scriptName:_,key:r,attributeKeyName:C,attributeDefaultValueName:x},$listener:{listenData:new l.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){a.top===a.self&&I.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let e=this;function t(i){if(!i.attributes)return;let o=i.attributes[C],d=i.attributes[x];if(o==null){s.warn(["请先配置键",i]);return}e.$data.data.has(o)&&s.warn("请检查该key(已存在): "+o),e.$data.data.set(o,d);}let n=this.getPanelContentConfig();for(let i=0;i<n.length;i++){let o=n[i];if(!o.forms)continue;let d=o.forms;for(let h=0;h<d.length;h++){let g=d[h];if(g.forms){let w=g.forms;for(let p=0;p<w.length;p++)t(w[p]);}else t(g);}}},setValue(e,t){let n=u(r,{}),i=n[e];n[e]=t,m(r,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,t);},getValue(e,t){let i=u(r,{})[e];return i??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=u(r,{}),n=t[e];Reflect.deleteProperty(t,e),m(r,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,i]of this.$listener.listenData.entries())if(i.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},hasKey(e){let t=u(r,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){s.warn(`${e} 键不存在`);return}let n=M.getValue(e);n&&t(n);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){s.warn(`${e} 键不存在`);return}let n=M.getValue(e);if(n){if(this.$data.oneSuccessExecMenu.has(e))return;t(n),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){T.panel({title:{text:`${_}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return []}};M.init();

})(Qmsg, DOMUtils, Utils);