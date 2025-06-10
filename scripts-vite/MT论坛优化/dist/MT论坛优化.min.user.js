// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.6.10
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.10/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @grant        GM.cookie
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

(t=>{function n(d){if(typeof d!="string")throw new TypeError("cssText must be a string");let e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=d,document.head?document.head.appendChild(e):document.body?document.body.appendChild(e):document.documentElement.childNodes.length===0?document.documentElement.appendChild(e):document.documentElement.insertBefore(e,document.documentElement.childNodes[0]),e}if(typeof GM_addStyle=="function"){GM_addStyle(t);return}n(t)})(" .pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size: 90px;width:var(--avatar-size);height:var(--avatar-size)} ");

(function (x, G, N, ae, Z, Se) {
	'use strict';

	var ke=Object.defineProperty;var Ce=(t,e,a)=>e in t?ke(t,e,{enumerable:true,configurable:true,writable:true,value:a}):t[e]=a;var z=(t,e,a)=>Ce(t,typeof e!="symbol"?e+"":e,a);var pe=typeof GM<"u"?GM:void 0,le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,he=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,K=typeof GM_getValue<"u"?GM_getValue:void 0,X=typeof GM_info<"u"?GM_info:void 0,Ie=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Q=typeof GM_setValue<"u"?GM_setValue:void 0,Ee=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Te=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,V=typeof unsafeWindow<"u"?unsafeWindow:void 0,Me=window;const O={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false},httpx_cookie_manager_enable:{key:"httpx-use-cookie-enable",defaultValue:false},httpx_cookie_manager_use_document_cookie:{key:"httpx-use-document-cookie",defaultValue:false}};class Re{constructor(e){z(this,"$data",{get enable(){return y.getValue(O.httpx_cookie_manager_enable.key,O.httpx_cookie_manager_enable.defaultValue)},get useDocumentCookie(){return y.getValue(O.httpx_cookie_manager_use_document_cookie.key,O.httpx_cookie_manager_use_document_cookie.defaultValue)},cookieRule:[]});Array.isArray(e)&&(this.$data.cookieRule=e);}fixCookieSplit(e){return h.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e}concatCookie(e,a){return h.isNull(e)?a:(e=e.trim(),a=a.trim(),e=this.fixCookieSplit(e),a.startsWith(";")&&(a=a.substring(1)),e.concat(a))}handle(e){if(e.fetch||!this.$data.enable)return;let a="",n=e.url;n.startsWith("//")&&(n=window.location.protocol+n);let i=new URL(n);this.$data.useDocumentCookie&&i.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(a=this.concatCookie(a,document.cookie.trim()));for(let r=0;r<this.$data.cookieRule.length;r++){let l=this.$data.cookieRule[r];if(i.hostname.match(l.hostname)){let o=y.getValue(l.key);if(h.isNull(o))break;a=this.concatCookie(a,o);}}h.isNotNull(a)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,a):e.headers.Cookie=a,f.info(["Httpx => 设置cookie:",e])),e.headers&&e.headers.Cookie!=null&&h.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}}const De=new Re([]),oe={addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(a=>{Array.isArray(a)?e=e.concat(a):e.push(a);}),H(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof he=="function"?he(t.keyName):"";typeof e=="string"&&e?H(e):oe.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,G.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(a=>{e.onload=()=>{a(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let a=[document.documentElement,document.body].concat(...t||[]);return a.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){a.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(n){navigator.clipboard.readText().then(i=>{n(i);}).catch(i=>{f.error("读取剪贴板内容失败👉",i),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(i=>{t(n);}).catch(i=>{f.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),t(n);});}function a(){var n,i;return !(typeof((n=navigator==null?void 0:navigator.clipboard)==null?void 0:n.readText)!="function"||typeof((i=navigator==null?void 0:navigator.permissions)==null?void 0:i.query)!="function")}return new Promise(n=>{if(!a()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})}},xe={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},h=N.noConflict(),u=G.noConflict(),T=ae,f=new h.Log(X,V.console||Me.console);var we;let ie=((we=X==null?void 0:X.script)==null?void 0:we.name)||void 0;const be=false;f.config({debug:be,logMaxCount:1e3,autoClearConsole:true,tag:true});x.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return y.getValue(O.qmsg_config_position.key,O.qmsg_config_position.defaultValue)}},maxNums:{get(){return y.getValue(O.qmsg_config_maxnums.key,O.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return y.getValue(O.qmsg_config_showreverse.key,O.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let t=N.getMaxZIndex(),e=ae.config.InstanceUtils.getPopsMaxZIndex().zIndex;return N.getMaxValue(t,e)+100}}}));T.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=N.getMaxZIndex(void 0,void 0,a=>{var n;if((n=a==null?void 0:a.classList)!=null&&n.contains("qmsg-shadow-container")||a!=null&&a.closest("qmsg")&&a.getRootNode()instanceof ShadowRoot)return  false}),e=ae.config.InstanceUtils.getPopsMaxZIndex().zIndex;return N.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const Y=new h.GM_Menu({GM_getValue:K,GM_setValue:Q,GM_registerMenuCommand:Ie,GM_unregisterMenuCommand:Ee}),D=new h.Httpx({xmlHttpRequest:Te,logDetails:be});D.interceptors.request.use(t=>(De.handle(t),t));D.interceptors.response.use(void 0,t=>(f.error("拦截器-请求错误",t),t.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),t));V.Object.defineProperty,V.Function.prototype.apply,V.Function.prototype.call,V.Element.prototype.appendChild,V.setTimeout;const H=h.addStyle.bind(h),q=document.querySelector.bind(document),U=document.querySelectorAll.bind(document);new h.GM_Cookie;const ye="GM_Panel",se="data-init",$="data-key",W="data-default-value",Le="data-init-more-value",I="data-storage-api",j={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}}};class Ve{constructor(e){z(this,"storageKey");z(this,"listenerData");if(typeof e=="string"){let a=e.trim();if(a=="")throw new Error("key参数不能为空字符串");this.storageKey=a;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new N.Dictionary;}getLocalValue(){let e=K(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){Q(this.storageKey,e);}set(e,a){let n=this.get(e),i=this.getLocalValue();Reflect.set(i,e,a),this.setLocalValue(i),this.triggerValueChangeListener(e,n,a);}get(e,a){let n=this.getLocalValue();return Reflect.get(n,e)??a}getAll(){return this.getLocalValue()}delete(e){let a=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.triggerValueChangeListener(e,a,void 0);}has(e){let a=this.getLocalValue();return Reflect.has(a,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(a=>Reflect.get(e,a))}clear(){le(this.storageKey);}addValueChangeListener(e,a){let n=Math.random(),i=this.listenerData.get(e)||[];return i.push({id:n,key:e,callback:a}),this.listenerData.set(e,i),n}removeValueChangeListener(e){let a=false;for(const[n,i]of this.listenerData.entries()){for(let r=0;r<i.length;r++){const l=i[r];(typeof e=="string"&&l.key===e||typeof e=="number"&&l.id===e)&&(i.splice(r,1),r--,a=true);}this.listenerData.set(n,i);}return a}triggerValueChangeListener(e,a,n){if(!this.listenerData.has(e))return;let i=this.listenerData.get(e);for(let r=0;r<i.length;r++){const l=i[r];if(typeof l.callback=="function"){let o=this.get(e),s,c;typeof a<"u"&&arguments.length>=2?c=a:c=o,typeof n<"u"&&arguments.length>2?s=n:s=o,l.callback(e,c,s);}}}}const F=new Ve(ye),ce={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new h.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t){return this.$data.contentConfig.get(t)??[]}},_e={$data:{__menuOption:[],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){y.isTopWindow()&&Y.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{y.showPanel(ce.getConfig(0));}},...this.$data.menuOption]);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);}},y={$data:{__configDefaultValueData:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get configDefaultValueData(){return this.__configDefaultValueData==null&&(this.__configDefaultValueData=new h.Dictionary),this.__configDefaultValueData},get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new h.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new h.Dictionary),this.__onceExecData},get scriptName(){return ie},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:ye,attributeKeyName:$,attributeDefaultValueName:W},init(){this.initContentDefaultValue(),_e.init();},isTopWindow(){return V.top===V.self},initContentDefaultValue(){const t=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let i={},r=n.attributes[$];r!=null&&(i[r]=n.attributes[W]);let l=n.attributes[se];if(typeof l=="function"){let c=l();if(typeof c=="boolean"&&!c)return}let o=n.attributes[Le];o&&typeof o=="object"&&Object.assign(i,o);let s=Object.keys(i);if(!s.length){f.warn(["请先配置键",n]);return}s.forEach(c=>{let p=i[c];this.setDefaultValue(c,p);});},e=n=>{for(let i=0;i<n.length;i++){let r=n[i];t(r);let l=r.forms;l&&Array.isArray(l)&&e(l);}},a=[...ce.getAllContentConfig()];for(let n=0;n<a.length;n++){let i=a[n];if(!i.forms)continue;const r=i.forms;r&&Array.isArray(r)&&e(r);}},setDefaultValue(t,e){this.$data.configDefaultValueData.has(t)&&f.warn("请检查该key(已存在): "+t),this.$data.configDefaultValueData.set(t,e);},setValue(t,e){F.set(t,e);},getValue(t,e){let a=F.get(t);return a??(this.$data.configDefaultValueData.has(t)?this.$data.configDefaultValueData.get(t):e)},deleteValue(t){F.delete(t);},hasKey(t){return F.has(t)},addValueChangeListener(t,e){return F.addValueChangeListener(t,(n,i,r)=>{e(t,r,i);})},removeValueChangeListener(t){F.removeValueChangeListener(t);},triggerMenuValueChange(t,e,a){F.triggerValueChangeListener(t,a,e);},deleteExecMenuOnce(t){return this.$data.onceExecMenuData.delete(t),F.removeValueChangeListener(t)},deleteOnceExec(t){this.$data.onceExecData.delete(t);},exec(t,e,a,n=true){const i=this;let r;typeof t=="string"||Array.isArray(t)?r=()=>t:r=t;let l=false,o=r(),s=[];Array.isArray(o)?(l=true,s=o):s.push(o);let c=s.find(v=>!this.$data.configDefaultValueData.has(v));if(c){f.warn(`${c} 键不存在`);return}let p=JSON.stringify(s);if(n){if(this.$data.onceExecMenuData.has(p))return;this.$data.onceExecMenuData.set(p,1);}let g=[],w=[],d=(v,S)=>{let R=[];S instanceof HTMLStyleElement?R=[S]:Array.isArray(S)&&(R=[...S.filter(L=>L!=null&&L instanceof HTMLStyleElement)]),g=g.concat(R);},m=v=>this.getValue(v),b=()=>{for(let v=0;v<g.length;v++)g[v].remove(),g.splice(v,1),v--;},A=()=>{let v=false;return typeof a=="function"?v=a(s):v=s.every(S=>m(S)),v},k=v=>{let S=A(),R=[];if(S){let L=s.map(B=>this.getValue(B)),_=e({addStyleElement:(...B)=>d(true,...B),value:l?L:L[0]});_ instanceof HTMLStyleElement?R.push(_):Array.isArray(_)&&R.push(..._.filter(B=>B!=null&&B instanceof HTMLStyleElement));}b(),g=[...R];};return n&&s.forEach(v=>{let S=this.addValueChangeListener(v,(R,L,_)=>{k();});w.push(S);}),k(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&i.$data.onceExecMenuData.delete(p);},clearStoreStyleElements:()=>b(),removeValueChangeListener:()=>{w.forEach(v=>{this.removeValueChangeListener(v);});}}},execMenu(t,e,a=false){return this.exec(t,n=>e(n),n=>n.every(r=>{let l=!!this.getValue(r);return a&&(l=!l),l}),false)},execMenuOnce(t,e){return this.exec(t,e,a=>a.every(i=>!!this.getValue(i)),true)},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},showPanel(t,e=`${ie}-设置`){let a=T.panel({title:{text:`${ie}-设置`,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(n,i)=>{n.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(n,i)=>{n(),this.$data.$panel=null;}},width:j.setting.width,height:j.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=a;}},Oe=()=>{var t,e,a,n,i,r,l,o,s,c,p;c=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,t=function(d){var m;if(d=(m=d.originalTarget)!=null?m:d.target,d!=null&&d.localName==="a"&&d.className.indexOf("texttolink")!==-1&&(m=d.getAttribute("href"),m.indexOf("http")!==0&&m.indexOf("ed2k://")!==0&&m.indexOf("thunder://")!==0))return d.setAttribute("href","http://"+m)},document.addEventListener("mouseover",t),s=function(d){if(typeof d=="object"&&d!=null&&typeof d.parentNode<"u"&&typeof d.parentNode.className<"u"&&typeof d.parentNode.className.indexOf=="function"&&d.parentNode.className.indexOf("texttolink")===-1&&d.nodeName!=="#cdata-section"){var m=d.textContent.replace(c,'<a href="$1" target="_blank" class="texttolink">$1</a>');if(d.textContent.length!==m.length){var b=document.createElement("span");return b.innerHTML=m,console.log(`识别: ${b.querySelector("a")}`),d.parentNode.replaceChild(b,d)}}},e="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),p=`//text()[not(ancestor::${e.join(") and not(ancestor::")})]`,a=new RegExp(`^(${e.join("|")})$`,"i"),i=function(d,m){var b,A;if(m+1e4<d.snapshotLength){var k=b=m;for(A=m+1e4;m<=A?b<=A:b>=A;k=m<=A?++b:--b)s(d.snapshotItem(k));setTimeout(function(){return i(d,m+1e4)},15);}else for(k=b=m,A=d.snapshotLength;m<=A?b<=A:b>=A;k=m<=A?++b:--b)s(d.snapshotItem(k));},r=function(d){return d=document.evaluate(p,d,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),i(d,0)},l=function(d){for(d=document.createTreeWalker(d,NodeFilter.SHOW_TEXT,{acceptNode:function(m){if(!a.test(m.parentNode.localName))return NodeFilter.FILTER_ACCEPT}},false);d.nextNode();)s(d.currentNode);},o=new window.MutationObserver(function(d){var m,b,A=0;for(m=d.length;A<m;A++){var k=d[A];if(k.type==="childList"){var C=k.addedNodes,v=0;for(b=C.length;v<b;v++)k=C[v],l(k);}}}),n=function(){return r(document.body),o.observe(document.body,{childList:true,subtree:true})};var g=function(d){var m=d.getAttribute("href");if(m.indexOf("http")!==0&&m.indexOf("ed2k://")!==0&&m.indexOf("thunder://")!==0)return d.setAttribute("href","http://"+m)},w=function(){for(var d=document.getElementsByClassName("texttolink"),m=0;m<d.length;m++)g(d[m]);};setTimeout(w,1500),setTimeout(n,100);};oe.setGMResourceCSS(xe.Viewer);oe.setGMResourceCSS(xe.Hljs);const ee={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g},M={getAvatar:(t,e="middle")=>`/uc_server/avatar.php?uid=${t}&size=${e}&ts=1`,getCurrentUID(){let t=V.discuz_uid;if(typeof t=="string")return t;let e=q('.sidenv_exit a[href*="uid-"]')||q('#comiis_key a[href*="uid-"]');if(e){let a=e.href.match(/uid=([0-9]+)/);if(a)return a[a.length-1]}},async getFormHash(){let t=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let n=0;n<t.length;n++){let r=t[n].value;if(r)return r}let e=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let n=0;n<e.length;n++){let r=e[n].href.match(ee.formhash);if(r){let l=r[r.length-1];if(l)return l}}let a=await D.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(a.status){let n=a.data.responseText,r=u.parseHTML(n,true,true).querySelector("input[name=formhash]");if(r){let l=r.value;if(h.isNotNull(l))return l}}else f.error("请求个人主页获取formhash失败",a);},envIsMobile(){return (V.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:t=>{let e=t.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(e){let a=e.filter(Boolean);return a[a.length-1]}},getForumId(t){let e=t.match(/&fid=([\d]+)/i);if(e)return e[e.length-1]},getPostId(t){let e=t.match(/&pid=([\d]+)/i);if(e)return e[e.length-1]},getRepquote(t){let e=t.match(/&repquote=([\d]+)/i);if(e)return e[e.length-1]}},J={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let e=this.getSignInfo().find(a=>a.hostName===window.location.hostname);return e?h.formatTime(Date.now(),"yyyyMMdd")===h.formatTime(e.time,"yyyyMMdd"):false},setSignInfo(){let t={hostName:window.location.hostname,time:Date.now()},e=this.getSignInfo(),a=e.findIndex(n=>n.hostName===t.hostName);a!==-1&&e.splice(a,1),e.push(t),Q(this.$key.sign,e);},getSignInfo(){let t=K(this.$key.sign,[]);return Array.isArray(t)?t:(this.clearSignInfo(),[])},getHostNameSignInfo(t=window.location.hostname){return this.getSignInfo().find(a=>a.hostName===t)},clearSignInfo(t){if(typeof t=="string"){let e=this.getSignInfo(),a=e.findIndex(n=>n.hostName===t);a!==-1&&e.splice(a,1),Q(this.$key.sign,e);}else le(this.$key.sign);},checkLogin(){return M.envIsMobile()?!!q("a[href*='member.php?mod=logging&action=logout']"):!!q("#comiis_key")},async sign(){let t=await M.getFormHash();if(t==null){if(q("#comiis_picshowbox")){f.info("当前为评论区的看图模式 ");return}f.error("自动签到：获取账号formhash失败"),this.clearSignInfo(window.location.hostname),x.error({content:"自动签到：获取账号formhash失败"});return}if(this.checkSignInfo()){f.info("今日已签到");return}let e=!!y.getValue("mt-auto-sign-useFetch"),a=h.getRandomPCUA(),n=()=>{this.setSignInfo();},i=()=>{this.clearSignInfo(window.location.hostname);},r=o=>{let c=ae.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");c.innerText=o;},l=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let o={operation:"qiandao",format:"button",formhash:t,inajax:1,ajaxtarget:"midaben_sign"},s=await D.get(`/k_misign-sign.html?${h.toSearchParamsStr(o)}`,{fetch:e,headers:{"User-Agent":a},allowInterceptConfig:false});if(!s.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),f.info("签到信息：",s);let c=s.data.responseText,p=h.parseCDATA(c),g=u.parseHTML(`<div>${p}</div>`,true,false),w=u.text(g);if(w.includes("需要先登录")){x.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),i();return}else if(w.includes("请稍后再试")||w.includes("您已经被列入黑名单")||w.includes("绑定手机号后才可以签到")||w.includes("您所在用户组不允许使用")){x.error("签到："+w,{timeout:5e3});return}else if(w.includes("今日已签")||w.includes("今日已经签到")){x.info("签到："+w);return}else if(c.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){x.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(e&&"location"in h.toJSON(c)){x.success("签到: 签到成功");return}let d=g.querySelector(".con"),m=g.querySelector(".line");if(d&&m){let b=u.text(d).match(/([0-9]+)金币/),A=u.text(m).match(/([0-9]+)/),k=b[b.length-1],C=A[A.length-1];f.success(`金币${k}，排名${C}`),x.info(`
							<div style="display: flex;${M.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${C}<br>金币 ${k}</div>
							</div>`,{timeout:4e3,isHTML:true});return}r(c);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let o={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},s=await D.post(`/plugin.php?${h.toSearchParamsStr(o)}`,{data:{formhash:t,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:e,headers:{"User-Agent":a,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!s.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),f.info("签到信息：",s);let c=s.data.responseText;if(c.includes("签到成功")){x.success("签到：签到成功");return}if(c.includes("今日已经签到")){x.info("签到：您今日已经签到，请明天再来！");return}r(c);}}];for(let o=0;o<l.length;o++){const s=l[o];let c=await D.get(s.checkPluginEnableUrl,{fetch:e,headers:{"User-Agent":h.getRandomPCUA()},allowInterceptConfig:false});if(!c.status){f.error("签到：检查签到插件是否启用的请求失败",c);continue}if(u.parseHTML(c.data.responseText,true,true).querySelector("#messagetext")||c.data.responseText.includes("插件不存在或已关闭")){f.error(`插件：${s.checkPluginEnableUrl} 未启用或不存在`);continue}await s.sign();break}}},te={isKMiSign(){return window.location.pathname.startsWith("/k_misign-sign.html")},isPost(){return window.location.pathname.startsWith("/thread-")||window.location.pathname.startsWith("/forum.php")&&window.location.search.startsWith("?mod=viewthread")},isPage(){return !!window.location.pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){return window.location.pathname.startsWith("/forum.php")&&window.location.search.startsWith("?mod=guide")},isPlate(){return !!window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return window.location.pathname.startsWith("/search.php")},isSpace(){return window.location.pathname.startsWith("/home.php")&&window.location.search.startsWith("?mod=space")},isMySpace(){return window.location.pathname.startsWith("/home.php")&&window.location.search.startsWith("?mod=space&do=profile&mycenter")},isSpaceWithAt(){return window.location.pathname.startsWith("/space-uid-")},isForumList(){return window.location.pathname.startsWith("/forum.php")&&window.location.search.startsWith("?forumlist")},isMessage(){return window.location.pathname.startsWith("/home.php")&&window.location.search.startsWith("?mod=space&do=notice")},isMessageList(){return window.location.pathname.startsWith("/home.php")&&window.location.search.startsWith("?mod=space&do=pm")},isPointsMall(){return window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html")||window.location.pathname.startsWith("/plugin.php")&&window.location.search.startsWith("?id=keke_integralmal")},isPostPublish(){return window.location.pathname.startsWith("/forum.php")&&window.location.search.startsWith("?mod=post")},isPostPublish_voting(){return window.location.pathname.startsWith("/forum.php")&&window.location.search.includes("&special=1")||window.location.search.includes("&fid=42")},isPostPublish_edit(){return this.isPostPublish()&&window.location.search.includes("&action=edit")},isPostPublish_newthread(){return this.isPostPublish()&&window.location.search.includes("&action=newthread")},isPostPublish_reply(){return this.isPostPublish()&&window.location.search.includes("&action=reply")}},Be={init(){u.ready(()=>{y.execMenuOnce("mt-forum-post-quickCollentBtn",()=>{this.quickCollentBtn();}),y.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>{this.quickReplyOptimization();});});},quickCollentBtn(){f.info("【快捷收藏】"),h.waitNode("#scrolltop",1e4).then(async t=>{if(!t)return;let e=await M.getFormHash(),a=M.getThreadId(window.location.href),n=`/home.php?${h.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:a,formhash:e,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=document.createElement("span");i.innerHTML=`
			<a href="${n}" 
				id="k_favorite"
				onclick="showWindow(this.id, this.href, 'get', 0);"
				onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
				<img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
						height="26" 
						width="26" 
						style="position:absolute;top:10px;left:11px">
			</a>
			`,u.prepend(t,i);});},quickReplyOptimization(){h.waitNode('#scrolltop a[title="快速回复"]',1e4).then(t=>{t&&(f.info("快捷回复优化"),u.on(t,"click",function(){V.showWindow("reply",t.href),f.info("等待弹窗出现"),h.waitNode("#moreconf",1e4).then(e=>{if(!e)return;f.success("弹出出现，添加按钮");let a=u.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});u.on(a,"click",n=>{h.preventEvent(n),u.val(q("#postmessage"),u.val(q("#postmessage"))+"           ");}),u.append(e,a);});}));});}},ve={$flag:{isSetHljsCSS:false},init(){Be.init(),y.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),y.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),y.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),u.ready(()=>{y.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),y.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),y.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),y.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),y.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),y.execMenuOnce("mt-forum-post-interceptionAttachment",()=>{this.setAttachmentsClickTip();}),y.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),y.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return f.info("自动展开帖子内容"),H(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return f.info("修复图片宽度"),H(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let t=document.querySelector(".comiis_a.comiis_message_table");t&&(f.info("移除帖子字体效果"),u.html(t,u.html(t).replace(ee.fontSpecial,"")));},removeCommentFontStyle(){var a;f.info("移除评论区的字体效果");let t=U("font"),e=((a=q(".comiis_postlist .comiis_postli"))==null?void 0:a.innerHTML)||"";e!==""&&(t.forEach(n=>{e.includes(n.innerHTML)||(n.removeAttribute("color"),n.removeAttribute("style"),n.removeAttribute("size"));}),U(".comiis_message.message").forEach(n=>{if(e.includes(n.innerHTML)){n.innerHTML=n.innerHTML.replace(ee.fontSpecial,"");let i=n.nextElementSibling;i&&i.localName==="strike"&&(i.outerHTML=i.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),U(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(n=>{let i=n.parentElement;i&&i.localName==="strike"&&(i.outerHTML=i.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(f.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(U(".pgbtn").length==0){f.warn("没有找到下一页按钮");return}var t=async function(n){var o,s;let i=await D.get(n,{fetch:true,allowInterceptConfig:false});if(!i.status){x.error("网络异常，请求下一页失败");return}var r=h.parseFromString(i.data.responseText),l=r.querySelector(".pgbtn a");return (o=r.querySelector("#postlistreply"))==null||o.remove(),(s=r.querySelector(".bm_h.comiis_snvbt"))==null||s.remove(),{url:l?l.getAttribute("href"):null,postlist:r.querySelector("#postlist"),pgbtn:r.querySelector(".pgbtn"),pgs:r.querySelector(".pgs.mtm")}},e=async function(){var i,r;var n=q(".pgbtn a").getAttribute("href");if(n){let l=await t(n);l&&((r=(i=l.postlist)==null?void 0:i.querySelector(".comiis_vrx"))!=null&&r.querySelector(".km1")&&(Object.keys(l).forEach(o=>{l[o]=null;}),f.warn("检测到请求的本页内容中存在【楼主】标识，判断为重复页请求")),(!l.url||l.url==n)&&(f.error("最后一页，取消监听"),u.off(document,["scroll","wheel"],a.run),u.remove(".pgbtn")),l.postlist&&u.append("#postlist",u.html(l.postlist)),l.pgbtn&&u.html(".pgbtn",u.html(l.pgbtn)),l.pgs&&u.html(".pgs.mtm",u.html(l.pgs)),ve.init());}else f.error("获取下一页元素失败");};let a=new h.LockFunction(async()=>{h.isNearBottom()&&await e();});u.on(document,["scroll","wheel"],a.run);},codeQuoteOptimization(){f.info("代码块优化");function t(a){var n=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],i=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],r=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},a.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+r.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+n.join("|")+")\\s"},{begin:"\\s("+n.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}H(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),Z.registerLanguage("smali",t);let e=new h.LockFunction(()=>{function a(i,r="java"){i.oldValue||(i.oldValue=i.textContent),i.innerHTML=Z.highlight(i.oldValue,{language:r}).value.replace(/\\n$/gi,"");}document.querySelectorAll("em[onclick^=copycode]").forEach(i=>{if(i.nextElementSibling&&typeof i.nextElementSibling.className=="string"&&i.nextElementSibling.className=="code-select-language")return;let r=Z.highlightAuto(u.text(i.parentElement.querySelector("div[id^=code]"))).language,l=document.createElement("select"),o=Z.listLanguages().sort();o=o.concat("自动检测");let s="";o.forEach(c=>{c.startsWith("自动检测")?s+=`<option data-value="${r}" selected="selected">${c}(${r})</option>`:s+=`<option data-value="${c}">${c}</option>`;}),l.className="code-select-language",l.innerHTML=s,u.on(l,"change",()=>{let c=l.selectedOptions[0].getAttribute("data-value");f.info("切换代码块语言: ",c),u.parent(l).querySelectorAll("li").forEach(p=>{a(p,c);});}),h.preventEvent(l,"click"),h.preventEvent(i,"click"),i.insertAdjacentElement("afterend",l),h.dispatchEvent(l,"change");}),document.querySelectorAll(".blockcode").forEach(i=>i.className="hljs");},this,500);h.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});},optimizationImagePreview(){f.info("图片查看优化");let t=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function e(i=[],r=0){let l="";i.forEach(c=>{l+=`<li><img data-src="${c}"></li>`;});let o=u.createElement("ul",{innerHTML:l}),s=new Se(o,{inline:false,url:"data-src",zIndex:h.getMaxZIndex()+100,hidden:()=>{s.destroy();}});s.view(r),s.zoomTo(1),s.show();}function a(){U("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(i=>{i.setAttribute("data-isHandlingViewIMG","true");let r=[];i.querySelectorAll("img").forEach(l=>{let o=l.src,s=new URL(o).hostname,c=new URL(o).pathname,p=l.parentElement;p.nodeName.toLowerCase()==="a"&&p.getAttribute("href")===o&&(p.setAttribute("href","javascript:;"),p.removeAttribute("target"));let g=false;for(let w of t)if(s.indexOf(w.hostName)!=-1&&c.match(w.pathName)){g=true;break}g||(r.push(o),l.removeAttribute("onclick"),l.setAttribute("onclick",""),u.on(l,"click",function(w){h.preventEvent(w),f.info("点击图片",l);let d=r.findIndex(m=>m==o);e(r,d);},{capture:true}));});});}let n=new h.LockFunction(()=>{a();});h.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{n.run();}});},setAttachmentsClickTip(){f.info("附件点击提醒");function t(e){if(e.hasAttribute("href")){let a=e.hasAttribute("id")?e.id:e.parentElement.id,n=e.getAttribute("href"),i=e.innerText;if(document.querySelector(`#${a}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",e),console.log("该附件是金币附件，拦截！"),e.setAttribute("data-href",n),e.style.setProperty("cursor","pointer"),e.removeAttribute("href"),e.innerText="【已拦截】"+i,e.onclick=function(){T.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${i}</a> ？<br /><br />`,html:true},btn:{ok:{callback:l=>{window.open(n,"_blank"),l.close();}}},mask:{enable:true},width:"400px",height:"200px"});};}}h.mutationObserver(document.documentElement,{callback:()=>{document.querySelectorAll(".attnm a").forEach(e=>{t(e);}),document.querySelectorAll(".comiis_attach a").forEach(e=>{t(e);}),document.querySelectorAll("span[id*=attach_] a").forEach(e=>{t(e);});},immediate:true,config:{childList:true,subtree:true}});},async detectingUserOnlineStatus(){var n;f.info("探测用户在线状态"),y.onceExec("mt-forum-post-detectingUserOnlineStatus",()=>{H(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);});function t(i){return u.createElement("img",{className:"gm-user-status-icon",smilied:i?"1353":"1384",loading:"lazy",src:i?"data:image/png;base64,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":"data:image/png;base64,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"})}function e(i,r){let l=t(r);u.prepend(i,l);}let a=Array.from(U(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));for(let i=0;i<a.length;i++){const r=a[i];let l=r.querySelector(".comiis_o.cl a.kmfxx");if(!l){f.error("探测用户在线状态失败，未找到发消息按钮");return}r.setAttribute("data-is-detectingUserOnlineStatus","true");let o=l.href,s=await D.get(o,{fetch:true,allowInterceptConfig:false});if(!s.status){f.error("探测用户在线状态，中止网络请求探测"),e(r,true);return}let p=u.parseHTML(s.data.responseText,true,true).querySelector(".flb");if(p){let w=((n=u.text(p))==null?void 0:n.trim()).endsWith("……[离线]");e(r,w);}else e(r,true);}},showUserLevel(){f.info("显示用户等级"),U(".pls.favatar:not([data-show-user-level])").forEach(t=>{t.setAttribute("data-show-user-level","true");let e="0级",a=t.querySelector(".tns tr"),n=t.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),n){case "幼儿园":case "初级工程师":e="1级";break;case "小学生":case "中级工程师":e="2级";break;case "初中生":case "高级工程师":e="3级";break;case "高中生":case "专家":e="4级";break;case "大学生":case "高级专家":e="5级";break;case "硕士生":case "资深专家":e="6级";break;case "博士生":case "实习版主":case "版主":case "审核员":case "研究员":e="7级";break;case "博士后":case "超级版主":case "网站编辑":case "高级研究员":case "荣誉开发者":e="8级";break;case "管理员":case "信息监察员":case "资深研究员":e="9级";break}i.innerHTML=`<p><a class="dj">${e}</a></p>Lv`,a.appendChild(i);});},hideBottomInfoBlock(){return f.info("隐藏底部信息块"),H(`
			.pls .favatar>*:not([id^="userinfo"]+div){
				display: none;
			}
			.pls .favatar>div[id^="userinfo"],
			.pls .favatar>div.tns{
				display: block;
			}
			.t_f{
				min-height: 100px !important;
			}
		`)}},Ue={init(){u.ready(()=>{y.execMenuOnce("mt-guide-beautifyPage",()=>this.beautifyPage());});},beautifyPage(){f.info("页面美化"),H(`
			.xst{font-size:15px}
			td.author_img{width:50px;padding:15px 0}
			td.author_img img{width:40px;height:40px;border-radius:50%}
			.list_author{margin-top:2px;color:#999;font-size:12px}
			.bankuai_tu_by a{color:#999!important}
			.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
			tbody a:hover{text-decoration:none;color:#3498db}
			.byg_th_align em+a{margin-right:5px}
		`),U(".bm_c table tbody").forEach(t=>{let e=t.querySelector("th.common"),a=u.html(e),n=e.querySelectorAll("a")[0].getAttribute("href"),i=null,l=t.querySelector("td.by>cite>a").getAttribute("href").match(/uid-(\d+)/)[1],o=`
			<td class="author_img">
				<a href="space-uid-${l}.html" c="1" mid="${i}">
					<img src="${M.getAvatar(l,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${t.querySelector("tr>td.by>a").outerHTML}]</em>
					${a}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${t.querySelectorAll("td.by>cite>a")[0].innerHTML}
						${t.querySelectorAll("td.by>em>span")[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${t.querySelectorAll("td.by>cite>a")[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${t.querySelectorAll("td.by>em>a")[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${n}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${t.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${t.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;u.html(t,o);});}},ne=function(t,e,a,n,i,r="",l,o){let s={text:t,type:"input",isNumber:!!l,isPassword:false,props:{},attributes:{},description:n,getValue(){return this.props[I].get(e,a)},callback(c,p){this.props[I].set(e,p);},placeholder:r};return Reflect.set(s.attributes,$,e),Reflect.set(s.attributes,W,a),Reflect.set(s.props,I,{get(c,p){return y.getValue(c,p)},set(c,p){y.setValue(c,p);}}),s},E=function(t,e,a,n,i,r){let l={text:t,type:"switch",description:i,attributes:{},props:{},getValue(){return !!this.props[I].get(e,a)},callback(o,s){let c=!!s;f.success(`${c?"开启":"关闭"} ${t}`),this.props[I].set(e,c);},afterAddToUListCallBack:r};return Reflect.set(l.attributes,$,e),Reflect.set(l.attributes,W,a),Reflect.set(l.props,I,{get(o,s){return y.getValue(o,s)},set(o,s){y.setValue(o,s);}}),l},re=function(t,e,a,n,i,r="",l){let o={text:t,type:"textarea",attributes:{},props:{},description:n,placeholder:r,disabled:l,getValue(){let s=this.props[I].get(e,a);return Array.isArray(s)?s.join(`
`):s},callback(s,c){this.props[I].set(e,c);}};return Reflect.set(o.attributes,$,e),Reflect.set(o.attributes,W,a),Reflect.set(o.props,I,{get(s,c){return y.getValue(s,c)},set(s,c){y.setValue(s,c);}}),o};class Ae{constructor(e){z(this,"option");this.option=e;}async showView(){var l;let e=T.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:h.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${T.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),a=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let n=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());n.appendChild(i);const r=async()=>{(await this.option.onsubmit(a,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}const Ne={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),te.isPost()){let t=this.getData();if(!t.enable)return;let e=new h.LockFunction(()=>{this.runFilter(t);});h.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});}},registerMenu(){Y.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showView();}});},runFilter(t){let e=function(n){for(const i of t.userBlackList)if(i==n.userName||i==n.userUID)return f.success("评论过滤器：黑名单用户",n),true;return  false},a=function(n){for(const i of t.userWhiteList)if(i===n.userName||i===n.userUID)return f.success("评论过滤器：白名单用户",n),true;return  false};U(".comiis_vrx").forEach(n=>{var l,o,s,c,p;if(n.querySelector(".plc .pti .authi .show"))return;let i=n.querySelector(".pls .authi a"),r={userName:(i==null?void 0:i.innerText)||"",userUID:((s=(o=(l=i==null?void 0:i.href)==null?void 0:l.match(ee.uid))==null?void 0:o[2])==null?void 0:s.trim())||"",content:((p=(c=n.querySelector(".plc td.t_f"))==null?void 0:c.innerText)==null?void 0:p.trim())||"",isAuthor:false};if(!a(r)){if(t.replyFlag&&n.querySelector(".quote")){let g=n.querySelector(".quote");this.$el.isFilterElementHTML.push(g.outerHTML),g.remove();}if(!(r.isAuthor&&!t.avatarFlag)){if(e(r)){this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}if(!(typeof t.minLength=="number"&&t.minLength>r.content.length)&&!(typeof t.keywordLength=="number"&&t.keywordLength<r.content.length))for(const g of t.keywords){if(typeof g!="string")continue;let w=new RegExp(g);if(r.content.match(w)){console.log("评论过滤器：",r),this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}}}}});},showView(){const t=this;function e(i){return {get(r,l){let o=t.getData(),s=Reflect.get(o,r,l);return (r==="keywords"||r==="userWhiteList"||r==="userBlackList")&&(s=s.join(`
`)),s},set(r,l){(r==="keywords"||r==="userWhiteList"||r==="userBlackList")&&(l=l.split(`
`).filter(o=>o.trim()!="")),Reflect.set(i,r,l),t.setData(i);}}}let a=T.config.panelHandleContentUtils();new Ae({title:"评论过滤器",data:()=>this.getData(),getView:i=>{let r=document.createDocumentFragment(),l=E("启用","enable",true);Reflect.set(l.props,I,e(i));let o=a.createSectionContainerItem_switch(l),s=E("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(s.props,I,e(i));let c=a.createSectionContainerItem_switch(s),p=E("处理作者评论","avatarFlag",false);Reflect.set(p.props,I,e(i));let g=a.createSectionContainerItem_switch(p),w=E('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(w.props,I,e(i));let d=a.createSectionContainerItem_switch(w),m=ne("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(m.props,I,e(i));let b=a.createSectionContainerItem_input(m),A=ne("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(A.props,I,e(i));let k=a.createSectionContainerItem_input(A),C=re("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(C.props,I,e(i));let v=a.createSectionContainerItem_textarea(C),S=re("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(S.props,I,e(i));let R=a.createSectionContainerItem_textarea(S),L=re("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(L.props,I,e(i));let _=a.createSectionContainerItem_textarea(L);return r.append(o,c,g,d,b,k,v,R,_),r},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,r)=>{T.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l=>l.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:true},mask:{enable:true},style:`
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,width:"88vw",height:"80vh"});}}},dialogCloseCallBack(i){},onsubmit:(i,r)=>({success:true,data:r}),style:`
            .pops-panel-item-left-desc-text{
                line-height: normal;
                margin-top: 6px;
                font-size: 0.8em;
                color: rgb(108, 108, 108);
            }
            .pops-panel-item-left-main-text{
                max-width: unset;
            }
            .pops-panel-textarea textarea{
                height: 150px;
            }
            `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return K(this.$key.STORAGE_KEY,this.getTemplateData())},setData(t){Q(this.$key.STORAGE_KEY,t);}};class qe{constructor(e){z(this,"option");this.option=e;}showView(){let e=T.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),a=e.$shadowRoot.querySelector(".filter-container"),n=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let r=document.createElement("button");r.innerText=i.name;let l=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await i.filterCallBack(s.data)?u.show(s.$el,false):u.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};u.on(r,"click",async o=>{h.preventEvent(o),!(typeof i.callback=="function"&&!await i.callback(o,l))&&await l();}),n.appendChild(r);}),a.appendChild(n);}}class Fe{constructor(e){z(this,"option");this.option=e;}async showView(e){var r,l,o,s,c,p,g,w,d;let a=T.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((o=(l=(r=this.option)==null?void 0:r.bottomControls)==null?void 0:l.add)==null?void 0:o.enable)||true,type:"primary",text:"添加",callback:async m=>{this.showEditView(false,await this.option.getAddData(),a.$shadowRoot);}},close:{enable:true,callback(m){a.close();}},cancel:{enable:((p=(c=(s=this.option)==null?void 0:s.bottomControls)==null?void 0:c.filter)==null?void 0:p.enable)||false,type:"default",text:"过滤",callback:(m,b)=>{var C,v,S,R,L,_,B;typeof((S=(v=(C=this.option)==null?void 0:C.bottomControls)==null?void 0:v.filter)==null?void 0:S.callback)=="function"&&this.option.bottomControls.filter.callback();let A=()=>Array.from(a.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),k=b.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");u.text(k).includes("取消")?(A().forEach(ue=>{u.show(ue,false);}),u.text(k,"过滤")):new qe({title:((L=(R=this.option.bottomControls)==null?void 0:R.filter)==null?void 0:L.title)??"过滤规则",filterOption:((B=(_=this.option.bottomControls)==null?void 0:_.filter)==null?void 0:B.option)||[],execFilterCallBack(){u.text(k,"取消过滤");},getAllRuleInfo:()=>A().map(de=>({data:this.parseRuleItemElement(de).data,$el:de}))}).showView();}},other:{enable:((d=(w=(g=this.option)==null?void 0:g.bottomControls)==null?void 0:w.clear)==null?void 0:d.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:m=>{let b=T.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async A=>{var C,v,S;if(f.success("清空所有"),typeof((S=(v=(C=this.option)==null?void 0:C.bottomControls)==null?void 0:v.clear)==null?void 0:S.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(a.$shadowRoot),this.clearContent(a.$shadowRoot),b.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${T.config.cssText.panelCSS}
            
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
            `}),n=await this.option.data(),i=false;for(let m=0;m<n.length;m++){let b=n[m],A=await this.appendRuleItemElement(a.$shadowRoot,b);(typeof e=="function"?e(b):true)||(i=true,A.forEach(C=>{u.hide(C,false);}));}if(i){let m=a.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");u.text(m,"取消过滤");}}showEditView(e,a,n,i,r,l){let o=async c=>{if(c){if(typeof l=="function"){let p=await this.option.getData(a);l(p);}}else if(e||await this.option.deleteData(a),typeof r=="function"){let p=await this.option.getData(a);r(p);}};new Ae({title:e?"编辑":"添加",data:()=>a,dialogCloseCallBack:o,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,p)=>{c.close(),await o(false);}},close:{callback:async(c,p)=>{c.close(),await o(false);}}},onsubmit:async(c,p)=>{let g=await this.option.itemControls.edit.onsubmit(c,e,p);return g.success?e?(x.success("修改成功"),n&&await this.updateRuleItemElement(g.data,i,n)):n&&await this.appendRuleItemElement(n,g.data):e&&f.error("修改失败"),g},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let a=e.querySelector(".rule-view-container"),n=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:a,$deleteBtn:n}}parseRuleItemElement(e){let a=e.querySelector(".rule-controls-enable"),n=a.querySelector(".pops-panel-switch"),i=a.querySelector(".pops-panel-switch__input"),r=a.querySelector(".pops-panel-switch__core"),l=e.querySelector(".rule-controls-edit"),o=e.querySelector(".rule-controls-delete");return {$enable:a,$enableSwitch:n,$enableSwitchInput:i,$enableSwitchCore:r,$edit:l,$delete:o,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,a){let n=await this.option.getDataItemName(e),i=u.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${n}</div>
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
					${T.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${T.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",e);let r="pops-panel-switch-is-checked";const{$enable:l,$enableSwitch:o,$enableSwitchCore:s,$enableSwitchInput:c,$delete:p,$edit:g}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(u.on(s,"click",async w=>{let d=false;o.classList.contains(r)?(o.classList.remove(r),d=false):(o.classList.add(r),d=true),c.checked=d,await this.option.itemControls.enable.callback(e,d);}),await this.option.itemControls.enable.getEnable(e)&&o.classList.add(r)):l.remove(),this.option.itemControls.edit.enable?u.on(g,"click",w=>{h.preventEvent(w),this.showEditView(true,e,a,i,d=>{e=null,e=d;});}):g.remove(),this.option.itemControls.delete.enable?u.on(p,"click",w=>{h.preventEvent(w);let d=T.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async m=>{f.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(x.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(a),d.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),i}async appendRuleItemElement(e,a){let{$container:n}=this.parseViewElement(e),i=[],r=Array.isArray(a)?a:[a];for(let l=0;l<r.length;l++){let o=r[l],s=await this.createRuleItemElement(o,e);n.appendChild(s),i.push(s);}return await this.updateDeleteAllBtnText(e),i}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:a}=this.parseViewElement(e);let n=await this.option.data();await this.appendRuleItemElement(e,n),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,a,n){let i=await this.createRuleItemElement(e,n);a.after(i),a.remove();}clearContent(e){const{$container:a}=this.parseViewElement(e);u.html(a,"");}setDeleteBtnText(e,a,n=false){const{$deleteBtn:i}=this.parseViewElement(e);n?u.html(i,a):u.text(i,a);}async updateDeleteAllBtnText(e){let a=await this.option.data();this.setDeleteBtnText(e,`清空所有(${a.length})`);}}const He={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){Y.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showView();}});},async runRule(){async function t(){let n=await D.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:false,headers:{"User-Agent":h.getRandomAndroidUA()}});if(!n.status){x.error("【积分商城】获取数据失败");return}let i=[];return u.parseHTML(n.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(l=>{var o,s;i.push({name:u.text(l.querySelector(".mall-info a > *:first-child"))||u.text(l.querySelector(".mall-info a")),price:u.text(l.querySelector(".mall-info span.discount-price i")),endTime:u.text(l.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(((s=(o=l.querySelector(".mall-info .mall-count .count-r"))==null?void 0:o.innerText)==null?void 0:s.replace(/仅剩|件/gi,""))||"0")});}),i}if(te.isPointsMall())return;let e=this.getData();if(!e.length)return;let a=await t();if(a){for(const n of a)for(const i of e)if(i.enable&&n.name.match(new RegExp(i.productName,"i"))&&!isNaN(n.remainingQuantity)&&n.remainingQuantity>0){f.success("成功匹配对应商品",i,n),T.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${n.price}金币，仅剩${n.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?x.success("删除成功"):x.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:h.generateUUID(),enable:true,name:"",productName:""}},showView(){let t=T.config.panelHandleContentUtils();function e(n){return {get(i,r){return n[i]??r},set(i,r){n[i]=r;}}}new Fe({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(l=>l.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,i)=>{n.enable=i,this.updateData(n);}},edit:{enable:true,getView:(n,i)=>{let r=document.createDocumentFragment();i||(n=this.getTemplateData());let l=E("启用","enable",true);Reflect.set(l.props,I,e(n));let o=t.createSectionContainerItem_switch(l),s=ne("规则名称","name","","",void 0,"必填");Reflect.set(s.props,I,e(n));let c=t.createSectionContainerItem_input(s),p=ne("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(p.props,I,e(n));let g=t.createSectionContainerItem_input(p);return r.append(o,c,g),r},onsubmit:(n,i,r)=>{let l=n.querySelectorAll(".rule-form-ulist > li"),o=this.getTemplateData();return i&&(o.uuid=r.uuid),l.forEach(s=>{let c=Reflect.get(s,"__formConfig__"),p=Reflect.get(c,"attributes"),g=Reflect.get(s,I),w=Reflect.get(p,$),d=Reflect.get(p,W),m=g.get(w,d);Reflect.has(o,w)?Reflect.set(o,w,m):f.error(`${w}不在数据中`);}),o.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:o}):i?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}}},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}}}).showView();},getData(){return K(this.$key.STORAGE_KEY,[])},setData(t){Q(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),Q(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),a=e.findIndex(i=>i.uuid==t.uuid),n=false;return a!==-1&&(n=true,e[a]=t),this.setData(e),n},deleteData(t){let e=this.getData(),a=e.findIndex(i=>i.uuid==t.uuid),n=false;return a!==-1&&(n=true,e.splice(a,1)),this.setData(e),n},clearData(){le(this.$key.STORAGE_KEY);}},ze=`.pops-confirm-content {\r
	display: flex;\r
	flex-direction: column;\r
}\r
.blackhome-user-filter input {\r
	width: -moz-available;\r
	width: -webkit-fill-available;\r
	height: 30px;\r
	margin: 8px 20px;\r
	border: 0;\r
	border-bottom: 1px solid;\r
	text-overflow: ellipsis;\r
	overflow: hidden;\r
	white-space: nowrap;\r
}\r
.blackhome-user-filter input:focus-within {\r
	outline: none;\r
}\r
.blackhome-user-list {\r
	flex: 1;\r
	overflow-y: auto;\r
}\r
.blackhome-user-list .blackhome-user-item {\r
	margin: 15px 10px;\r
	padding: 10px;\r
	border-radius: 8px;\r
	box-shadow: 0 0 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;\r
}\r
.blackhome-user {\r
	display: flex;\r
}\r
.blackhome-user img {\r
	width: 45px;\r
	height: 45px;\r
	border-radius: 45px;\r
}\r
.blackhome-user-info {\r
	margin-left: 10px;\r
}\r
.blackhome-user-info p:nth-child(1) {\r
	margin-bottom: 5px;\r
}\r
.blackhome-user-info p:nth-child(2) {\r
	font-size: 14px;\r
}\r
.blackhome-user-action {\r
	display: flex;\r
	margin: 10px 0;\r
}\r
.blackhome-user-action p:nth-child(1),\r
.blackhome-user-action p:nth-child(2) {\r
	border: 1px solid red;\r
	color: red;\r
	border-radius: 4px;\r
	padding: 2px 4px;\r
	font-weight: 500;\r
	font-size: 14px;\r
	place-self: center;\r
}\r
.blackhome-user-action p:nth-child(2) {\r
	border: 1px solid #ff4b4b;\r
	color: #ff4b4b;\r
	margin-left: 8px;\r
}\r
.blackhome-user-uuid {\r
	border: 1px solid #ff7600;\r
	color: #ff7600;\r
	border-radius: 4px;\r
	padding: 2px 4px;\r
	font-weight: 500;\r
	font-size: 14px;\r
	width: fit-content;\r
	width: -moz-fit-content;\r
	margin: 10px 0;\r
}\r
.blackhome-operator {\r
	padding: 10px;\r
	background-color: #efefef;\r
	border-radius: 6px;\r
}\r
.blackhome-operator-user {\r
	display: flex;\r
}\r
.blackhome-operator-user img {\r
	width: 35px;\r
	height: 35px;\r
	border-radius: 35px;\r
}\r
.blackhome-operator-user p {\r
	align-self: center;\r
	margin-left: 10px;\r
}\r
.blackhome-operator-user-info {\r
	margin: 10px 0;\r
	font-weight: 500;\r
}\r
\r
@media screen and (min-width: 800px) {\r
	.blackhome-user-list {\r
		display: flex;\r
		flex-wrap: wrap;\r
	}\r
	.blackhome-user-list .blackhome-user-item {\r
		flex: 1 1 250px;\r
		max-width: calc(50% - 10px - 10px);\r
	}\r
}\r
`,Pe={$data:{cid:""},init(){this.registerMenu();},registerMenu(){Y.add({key:"black-home",text:"⚙ 小黑屋",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let t=x.loading("正在获取小黑屋名单中..."),e=await this.getBlackListInfo("");if(t.close(),!e)return;if(e.data.length===0){x.error("获取小黑屋名单为空");return}this.$data.cid=e.next_cid;let a=T.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let o=x.loading("正在获取小黑屋名单中...");f.info("下一页的cid: ",this.$data.cid);let s=await this.getBlackListInfo(this.$data.cid);o.close(),s&&(this.$data.cid=s.next_cid,s.data.forEach(c=>{let p=this.createListViewItem(c);n.appendChild(p);}),s.data.length===0?x.error("获取小黑屋名单为空"):x.success(`成功获取 ${s.data.length}条数据`));}},cancel:{text:"关闭"}},width:j.settingBig.width,height:j.settingBig.height,style:ze,mask:{enable:true}}),n=a.$shadowRoot.querySelector(".blackhome-user-list"),i=a.$shadowRoot.querySelector(".blackhome-user-filter input");e.data.forEach(o=>{let s=this.createListViewItem(o);n.appendChild(s);}),x.success(`成功获取 ${e.data.length}条数据`);let r=false;u.on(i,["input","propertychange"],h.debounce(()=>{let o=i.value.trim();if(!r){if(r=true,o==""){a.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(s=>{s.removeAttribute("style");}),r=false;return}a.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(s=>{s.getAttribute("data-name").match(new RegExp(o,"ig"))||s.getAttribute("data-uid").trim().match(new RegExp(o,"ig"))||s.getAttribute("data-operator").match(new RegExp(o,"ig"))?s.removeAttribute("style"):s.setAttribute("style","display:none;");}),r=false;}}));let l=await this.getBlackListInfo(this.$data.cid);l&&(this.$data.cid=l.next_cid);},async getBlackListInfo(t=""){let e={mod:"misc",action:"showdarkroom",cid:t,ajaxdata:"json"},a=await D.get(`/forum.php?${h.toSearchParamsStr(e)}`,{headers:{"User-Agent":h.getRandomPCUA()},responseType:"json"});if(!a.status)return;let n=h.toJSON(a.data.responseText),i=n.message.split("|"),r=i[i.length-1],l=h.parseObjectToArray(n.data),o=[],s=[];return l.forEach(c=>{let p=c.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(p==null){let g=parseInt((Date.now()/1e3).toString()),w=0,d=c.dateline.match(/([0-9]+|半)[\s\S]*秒前/),m=c.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),b=c.dateline.match(/([0-9]+|半)[\s\S]*小时前/),A=c.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),k=c.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),C=c.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(d)d=d[d.length-1],d=d.replace(/半/g,.5),d=parseFloat(d),w=g-d;else if(m)m=m[m.length-1],m=m.replace(/半/g,.5),m=parseFloat(m),w=g-m*60;else if(b)b=b[b.length-1],b=b.replace(/半/g,.5),b=parseFloat(b),w=g-b*60*60;else if(A){let v=A[1],S=A[2];w=g-86400-parseInt(v)*3600-parseInt(S)*60;}else if(k){let v=k[1],S=k[2];w=g-86400*2-parseInt(v)*3600-parseInt(S)*60;}else C&&(C=C[C.length-1],C=C.replace(/半/g,.5),C=parseFloat(C),w=g-C*60*60*24);c.time=parseInt(w.toString())*1e3,o=o.concat(c);return}else p=p[0];c.time=h.formatToTimeStamp(p),o=o.concat(c);}),h.sortListByProperty(o,"time"),h.sortListByProperty(s,"time",false),o=o.concat(s),{next_cid:r,data:o}},createListViewItem(t){let e=u.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${M.getAvatar(t.uid,"big")}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${t.username}</p>
                        <p>${t.dateline}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${t.action}</p>
                    <p>到期: ${t.groupexpiry}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${t.uid}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${M.getAvatar(t.operatorid,"big")}">
                        <p>${t.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${t.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":t.username,"data-uid":t.uid,"data-operator":t.operator,"data-operator-uid":t.operatorid});return u.on(e,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),u.on(e,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${t.operatorid}&do=profile`,"_blank");}),e}},Qe=`.pops-alert-content {\r
	display: flex;\r
	flex-direction: column;\r
}\r
.pops-alert-content > .online-user-info {\r
	text-align: center;\r
	padding: 0px 6px;\r
}\r
.online-user-filter input {\r
	width: -webkit-fill-available;\r
	width: -moz-available;\r
	height: 30px;\r
	margin: 8px 20px;\r
	border: 0;\r
	border-bottom: 1px solid;\r
}\r
.online-user-filter input:focus-within {\r
	outline: none;\r
}\r
.online-user-list {\r
	flex: 1;\r
	overflow-y: auto;\r
}\r
.online-user-list li {\r
	margin: 18px 0;\r
}\r
.online-user {\r
	display: flex;\r
	margin: 2px 20px;\r
	align-items: center;\r
}\r
.online-user img[data-avatar] {\r
	width: 45px;\r
	height: 45px;\r
	border-radius: 45px;\r
}\r
.online-user-list .online-user-info {\r
	margin: 2px 14px;\r
}\r
.online-user-list .online-user-info p[data-name] {\r
	margin-bottom: 4px;\r
}\r
.online-user-list .online-user-info span[data-sf] {\r
	border-radius: 4px;\r
	padding: 2px 4px;\r
	font-weight: 500;\r
	font-size: 14px;\r
}\r
.online-user-list .online-user-info span[data-uid] {\r
	border: 1px solid #ff7600;\r
	color: #ff7600;\r
	border-radius: 4px;\r
	padding: 2px 4px;\r
	font-weight: 500;\r
	font-size: 14px;\r
	width: fit-content;\r
	width: -moz-fit-content;\r
	margin: 10px 0;\r
}\r
.online-user-list .online-user-info span[data-sf="会员"] {\r
	color: #88b500;\r
	border: 1px solid #88b500;\r
}\r
.online-user-list .online-user-info span[data-sf="版主"] {\r
	color: #2db5e3;\r
	border: 1px solid #2db5e3;\r
}\r
.online-user-list .online-user-info span[data-sf="超级版主"] {\r
	color: #e89e38;\r
	border: 1px solid #e89e38;\r
}\r
.online-user-list .online-user-info span[data-sf="管理员"] {\r
	color: #ff5416;\r
	border: 1px solid #ff5416;\r
}\r
\r
@media screen and (min-width: 800px) {\r
	.online-user-list {\r
		display: flex;\r
		flex-wrap: wrap;\r
	}\r
	.online-user-list .online-item {\r
		flex: 1 1 250px;\r
	}\r
}\r
`,$e={$data:{},init(){this.registerMenu();},registerMenu(){Y.add({key:"online-user",text:"⚙ 在线用户",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let t=x.loading("正在获取在线用户名单中..."),e=await this.getOnlineUserListInfo();if(t.close(),!e)return;let a=T.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${e.totalOnline} 人在线 - ${e.onlineUser} 会员${e.invisibleUser==0?"":`(${e.invisibleUser}隐身)`} - ${e.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:j.settingBig.width,height:j.settingBig.height,style:Qe,mask:{enable:true}}),n=a.$shadowRoot.querySelector(".online-user-list"),i=a.$shadowRoot.querySelector(".online-user-filter input");e.data.forEach(l=>{let o=this.createListViewItem(l);n.appendChild(o);}),x.success(`成功获取 ${e.data.length}条数据`);let r=false;G.on(i,["propertychange","input"],h.debounce(()=>{let l=i.value.trim();if(!r){if(r=true,l==""){a.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(o=>{o.removeAttribute("style");}),r=false;return}a.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(o=>{o.getAttribute("data-name").match(new RegExp(l,"ig"))||o.getAttribute("data-sf").match(new RegExp(l,"ig"))||o.getAttribute("data-uid").match(new RegExp(l,"ig"))?o.removeAttribute("style"):o.setAttribute("style","display:none;");}),r=false;}}));},async getOnlineUserListInfo(){let t={showoldetails:"yes"},e=await D.get(`/forum.php?${h.toSearchParamsStr(t)}`,{headers:{"User-Agent":h.getRandomPCUA()}});if(!e.status)return;let a=h.parseFromString(e.data.responseText,"text/html"),n={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};a.querySelectorAll("#onlinelist ul li").forEach(l=>{let o=l.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],s=M.getAvatar(o,"middle"),c=l.querySelector("a").innerText,p="",g=l.querySelector("a").getAttribute("href"),w=l.querySelector("img").src;w.indexOf("online_member")!=-1?p="会员":w.indexOf("online_moderator")!=-1?p="版主":w.indexOf("online_supermod")!=-1?p="超级版主":w.indexOf("online_admin")!=-1?p="管理员":p="未知身份",n.data.push({uid:o,avatar:s,name:c,sf:p,space:g});});let r=a.querySelector("#online div.bm_h span.xs1").textContent;return n.totalOnline=h.parseInt(r.match(/([0-9]*)\s*人在线/i),0),n.onlineUser=h.parseInt(r.match(/([0-9]*)\s*会员/i),0),n.noRegisterUser=h.parseInt(r.match(/([0-9]*)\s*位游客/i),0),n.invisibleUser=h.parseInt(r.match(/([0-9]*)\s*隐身/i),0),n},createListViewItem(t){let e=G.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${t.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${t.name}</p>
                        <span data-sf="${t.sf}">${t.sf}</span>
                        <span data-uid>UID: ${t.uid}</span>
                    </div>
                </div>
            `},{"data-name":t.name,"data-uid":t.uid,"data-sf":t.sf});return G.on(e,"click",".online-user-avatar",a=>{h.preventEvent(a),window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),e}},We={$flag:{showUserUID_initCSS:false},init(){y.onceExec("mt-MTCommentFilter",()=>{Ne.init();}),te.isPost()?(f.info("Router: 帖子"),ve.init()):te.isGuide()?(f.info("Router: 导读"),Ue.init()):f.error("Router: 未适配的链接 ==> "+window.location.href),u.ready(()=>{y.onceExec("mt-MTProductListingReminder",()=>{He.init();}),y.onceExec("mt-blackHome",()=>{Pe.init();}),y.onceExec("mt-onlineUser",()=>{$e.init();}),y.execMenuOnce("mt-link-text-to-hyperlink",()=>{Oe();}),y.execMenuOnce("mt-addLatestPostBtn",()=>{this.addLatestPostBtn();}),y.execMenu("mt-auto-sign",()=>{J.init();}),y.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();});});},addLatestPostBtn(){f.info("新增【最新发表】"),u.append("#comiis_nv .wp.comiis_nvbox.cl ul",`
			<li id="latest_publication">
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			</li>
		`),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(u.removeClass("#mn_forum_10","a"),u.css("#latest_publication a","background",'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px'));},async extendCookieExpire(){f.info("延长cookie有效期");let t=await pe.cookie.list({}),e=["_auth","_saltkey","_client_created","_client_token"];t.forEach(async a=>{if(a.session)return;let n=a.expirationDate,i=Date.now()/1e3;if(n<i)return;let r=60*60*24*30;n-i>r||!e.find(o=>a.name.endsWith(o))||pe.cookie.set({name:a.name,value:a.value,expirationDate:a.expirationDate+r}).then(()=>{f.info(`延长Cookie +30天成功：${a.name}`);}).catch(()=>{f.error(`延长Cookie +30天失败：${a.name}`);});});}},me=function(t,e,a,n,i,r){let l=[];typeof n=="function"?l=n():l=n;let o={text:t,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[I].get(e,a)},callback(s,c,p){let g=c;f.info(`选择：${p}`),this.props[I].set(e,g),typeof i=="function"&&i(s,g,p);},data:l};return Reflect.set(o.attributes,$,e),Reflect.set(o.attributes,W,a),Reflect.set(o.props,I,{get(s,c){return y.getValue(s,c)},set(s,c){y.setValue(s,c);}}),o},fe=function(t,e,a,n,i,r,l,o,s,c){let p={text:t,type:"button",attributes:{},description:e,buttonIcon:n,buttonIsRightIcon:i,buttonIconIsLoading:r,buttonType:l,buttonText:a,callback(g){typeof o=="function"&&o(g);},afterAddToUListCallBack:s};return Reflect.set(p.attributes,se,()=>{p.disable=false;}),p},ge=function(t,e,a,n){let i={type:"own",attributes:{},props:a,getLiElementCallBack:t,afterAddToUListCallBack:n};return Reflect.set(i.attributes,se,()=>false),i},P={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return P.$el.$smallUpload.files[0]},get middle(){return P.$el.$middleUpload.files[0]},get big(){return P.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const t=this;let e=T.confirm({title:{text:"修改头像",position:"center"},content:{text:`
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大尺寸：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大尺寸：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大尺寸：200×250）</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!t.$upload.small){x.error("请上传小头像");return}if(!t.$upload.middle){x.error("请上传中头像");return}if(!t.$upload.big){x.error("请上传大头像");return}let a=x.loading("正在处理数据中...");try{let n=await this.getUploadUrl();if(n==null)return;let i=await M.getFormHash();if(i==null){x.error("获取formhash失败");return}let r={big:{base64:await h.parseFileToBase64(this.$avatar.big)},middle:{base64:await h.parseFileToBase64(this.$avatar.middle)},small:{base64:await h.parseFileToBase64(this.$avatar.small)}};Object.keys(r).forEach(s=>{let c=r[s];c.base64=c.base64.substring(c.base64.indexOf(",")+1);});let l=new FormData;l.append("Filedata",this.$avatar.big||""),l.append("confirm","确定"),l.append("avatar1",r.big.base64),l.append("avatar2",r.middle.base64),l.append("avatar3",r.small.base64),l.append("formhash",i),f.info("头像的base64字符串",r);let o=await D.post(n,{data:l,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":h.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!o.status)return;o.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(e.close(),x.success("上传成功")):(f.error("上传失败",o),x.error(o.data.responseText,{timeout:6e3,isHTML:!1,html:!1}));}catch(n){f.error(n);}finally{a.close();}}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            .avatar-container{
                display: flex;
                width: -webkit-fill-available;
                width: -moz-available;
                margin: 6px 10px;
                flex-direction: column;
            }
            .avatar-tip{
                float: left;
                font-weight: bold;
            }
            .avatar-upload-status {
                padding: 0px;
                padding-left: 10px;
                font-weight: bold;
                width: -webkit-fill-available;
                text-align: left;
                font-size: small;
            }
            .avatar-upload-status[data-success="false"]{
                color: red;
            }
            .avatar-upload-status[data-success="true"]{
                color: green;
            }
            .avatar-upload {
                margin: 20px 0px;
            }
            `});this.$el.$smallUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(t,e,a,n){u.on(t,"change",i=>{var c;if(!((c=t.files)!=null&&c.length))return;u.text(e,"🤡获取文件信息中..."),e.removeAttribute("data-success");let r=t.files[0],l=r.size,o=new Image,s=new FileReader;s.readAsDataURL(r),s.onload=function(p){o.src=p.target.result,o.onload=function(){if(o.width>a.width||o.height>a.height){t.value="",e.setAttribute("data-success","false"),u.text(e,`🤡校验失败 ==> 图片尺寸不符合，宽：${o.width} 高：${o.height}`);return}if(l>P.$data.avatarInfo.maxSize){t.value="",e.setAttribute("data-success","false"),u.text(e,`🤡校验失败 ==> 图片大小不符合：${l}byte，限制最大：${P.$data.avatarInfo.maxSize}byte`);return}e.setAttribute("data-success","true"),u.text(e,`🤣 通过 宽:${o.width} 高:${o.height} 大小(byte):${l}`),n();};};});},async getUploadUrl(){let t=await D.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":h.getRandomPCUA()}});if(!t.status)return;if(h.isNull(t.data.responseText)){x.error("动态头像：获取上传地址的内容失败");return}let e=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(e==null||e.length!=2){x.error("动态头像：获取变量data失败");return}let n=e[e.length-1].split(","),i=n.indexOf("stl_src");if(i===-1&&(i=n.indexOf("src")),i===-1){x.error("动态头像：获取上传地址失败");return}let r=n[i+1],l=new URL(r);return l.pathname=l.pathname.replace("/images/camera.swf","/index.php"),l.searchParams.delete("inajax"),l.searchParams.set("m","user"),l.searchParams.set("a","rectavatar"),l.searchParams.set("base64","yes"),r=l.toString(),f.info("上传地址："+r),r}},je={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[me("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,a)=>{f.info("设置当前Qmsg弹出位置"+a);},"Toast显示在页面九宫格的位置"),me("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),E("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("新增【最新发表】","mt-addLatestPostBtn",true,void 0,"便于快捷跳转"),E("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),E("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{type:"deepMenu",text:"自动签到",forms:[{text:"",type:"forms",forms:[E("启用","mt-auto-sign",true,void 0,"自动请求签到"),E("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),fe("签到信息",`上次签到时间：${(()=>{let t=J.getHostNameSignInfo(window.location.hostname);return t?N.formatTime(t.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",t=>{let a=t.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");T.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:n=>{let i=window.location.hostname;J.clearSignInfo(i),x.success("删除成功"),u.text(a,`上次签到时间：${(()=>{let r=J.getHostNameSignInfo(i);return r?N.formatTime(r.time):"尚未签到"})()}`),n.close();}}},mask:{enable:true},width:"300px",height:"200px"});})]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[ge(t=>{let e=u.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),a=u.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${M.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${M.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${M.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),n=u.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return a.querySelector(".avatar-img[data-size='small']"),a.querySelector(".avatar-img[data-size='middle']"),a.querySelector(".avatar-img[data-size='big']"),t.appendChild(e),t.appendChild(a),t.appendChild(n),t}),ge(t=>{let e=u.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),a=u.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${M.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${M.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${M.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return t.appendChild(e),t.appendChild(a),t}),fe("修改头像",`可以上传gif图片，注意图片最大限制为${N.formatByteToSize(P.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{P.init();})]}]}]}]},Ge={id:"component-forum-post",title:"帖子",forms:[{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{type:"forms",text:"",forms:[E("拦截附件","mt-forum-post-interceptionAttachment",true,void 0,"点击附件时弹出提示框进行确认是否下载附件"),E("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片"),E("自动加载下一页","mt-forum-post-loadNextPageComment",true,void 0,"无缝预览下一页"),E("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",forms:[{type:"forms",text:"",forms:[E("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",false,void 0,"获取用户在线状态并在用户信息处显示状态表情"),E("显示用户等级","mt-forum-post-showUserLevel",true,void 0,"在用户信息处显示当前用户的等级"),E("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",false,void 0,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",forms:[{type:"forms",text:"",forms:[E("新增【快捷收藏】","mt-forum-post-quickCollentBtn",true,void 0,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),E("快捷回复优化","mt-forum-post-quickReplyOptimization",true,void 0,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},Ke={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[E("页面美化","mt-guide-beautifyPage",true,void 0,"美化样式")]}]};ce.addContentConfig([je,Ge,Ke]);y.init();We.init();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);