// ==UserScript==
// @name         Demo Script Name
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.28
// @author       WhiteSevs
// @description  demo desc
// @license      GPL-3.0-only
// @icon
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384463/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.1.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.1.9/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.0.8/dist/index.umd.js
// @resource     ElementPlusResourceCSS  https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css
// @connect      *
// @grant        GM_addStyle
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

(function (u, E, G) {
	'use strict';

	var d=typeof GM_getValue<"u"?GM_getValue:void 0,f=typeof GM_info<"u"?GM_info:void 0,y=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,m=typeof GM_setValue<"u"?GM_setValue:void 0,b=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,$=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,o=typeof unsafeWindow<"u"?unsafeWindow:void 0,V=window;const P="Demo Script Name",l=G.noConflict();E.noConflict();const T=V.pops||o.pops,c=new l.Log(f,o.console||V.console);var D;const C=((D=f==null?void 0:f.script)==null?void 0:D.name)||P,v=!1;c.config({debug:v,logMaxCount:2e4,autoClearConsole:!0,tag:!0});u.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const I=new l.GM_Menu({GM_getValue:d,GM_setValue:m,GM_registerMenuCommand:y,GM_unregisterMenuCommand:b}),L=new l.Httpx($);L.config({logDetails:v,onabort(){u.warning("请求取消");},ontimeout(){u.error("请求超时");},onerror(e){u.error("请求异常"),c.error(["httpx-onerror 请求异常",e]);}});o.Object.defineProperty,o.Function.prototype.apply,o.Function.prototype.call,o.Element.prototype.appendChild,o.setTimeout;const r="GM_Panel",w="data-key",x="data-default-value",M={$data:{data:new l.Dictionary,oneSuccessExecMenu:new l.Dictionary,onceExec:new l.Dictionary,scriptName:C,key:r,attributeKeyName:w,attributeDefaultValueName:x},$listener:{listenData:new l.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){o.top===o.self&&I.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let e=this;function t(i){if(!i.attributes)return;let a=i.attributes[w],s=i.attributes[x];if(a==null){c.warn(["请先配置键",i]);return}e.$data.data.has(a)&&c.warn("请检查该key(已存在): "+a),e.$data.data.set(a,s);}let n=this.getPanelContentConfig();for(let i=0;i<n.length;i++){let a=n[i];if(!a.forms)continue;let s=a.forms;for(let h=0;h<s.length;h++){let g=s[h];if(g.forms){let _=g.forms;for(let p=0;p<_.length;p++)t(_[p]);}else t(g);}}},setValue(e,t){let n=d(r,{}),i=n[e];n[e]=t,m(r,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,t);},getValue(e,t){let i=d(r,{})[e];return i??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=d(r,{}),n=t[e];Reflect.deleteProperty(t,e),m(r,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,i]of this.$listener.listenData.entries())if(i.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");let n=M.getValue(e);n&&t(n);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");let n=M.getValue(e);if(n){if(this.$data.oneSuccessExecMenu.has(e))return;t(n),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){T.panel({title:{text:`${C}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return []}};M.init();

})(Qmsg, DOMUtils, Utils);