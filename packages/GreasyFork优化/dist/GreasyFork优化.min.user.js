// ==UserScript==
// @name         GreasyFork优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.3
// @author       WhiteSevs
// @description  自动登录账号、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库、优化图片浏览、美化页面、Markdown复制按钮
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://greasyfork.org/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.1.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.3.3/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.1.1/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.js
// @resource     ViewerCSS  https://cdn.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css
// @connect      greasyfork.org
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

(t=>{function d(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head?document.head.appendChild(e):document.body?document.body.appendChild(e):document.documentElement.childNodes.length===0?document.documentElement.appendChild(e):document.documentElement.insertBefore(e,document.documentElement.childNodes[0]),e}if(typeof GM_addStyle=="function"){GM_addStyle(t);return}d(t)})(" .whitesev-hide{display:none}.whitesev-hide-important{display:none!important} ");

(function (a, ee, te, re) {
	'use strict';

	var x=typeof GM_addStyle<"u"?GM_addStyle:void 0,ne=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,R=typeof GM_getValue<"u"?GM_getValue:void 0,F=typeof GM_info<"u"?GM_info:void 0,oe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,j=typeof GM_setValue<"u"?GM_setValue:void 0,ie=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ae=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,N=typeof unsafeWindow<"u"?unsafeWindow:void 0,Z=window;const se="GreasyFork优化",f=te.noConflict(),l=ee.noConflict(),q=Z.pops||N.pops,c=new f.Log(F,N.console||Z.console);var J;const W=((J=F==null?void 0:F.script)==null?void 0:J.name)||se,Q=!1;c.config({debug:Q,logMaxCount:2e4,autoClearConsole:!0,tag:!0});a.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const X=new f.GM_Menu({GM_getValue:R,GM_setValue:j,GM_registerMenuCommand:oe,GM_unregisterMenuCommand:ie}),_=new f.Httpx(ae);_.config({logDetails:Q,onabort(){a.warning("请求取消");},ontimeout(){a.error("请求超时");},onerror(t){a.error("请求异常"),c.error(["httpx-onerror 请求异常",t]);}});N.Object.defineProperty,N.Function.prototype.apply,N.Function.prototype.call,N.Element.prototype.appendChild,N.setTimeout;const D="GM_Panel",B="data-key",G="data-default-value",P=function(t,e,r,n,o,i,s,u){return {text:t,type:"button",description:e,buttonIcon:n,buttonIsRightIcon:o,buttonIconIsLoading:i,buttonType:s,buttonText:r,callback(g){typeof u=="function"&&u(g);},afterAddToUListCallBack:void 0}},Y=function(t,e,r,n,o,i="",s,u){let p={text:t,type:"input",isNumber:!!s,isPassword:!!u,attributes:{},description:n,getValue(){return d.getValue(e,r)},callback(g,b){d.setValue(e,b);},placeholder:i};return p.attributes&&(p.attributes[B]=e,p.attributes[G]=r),p},I=function(t,e,r,n,o){let i={text:t,type:"switch",description:o,attributes:{},getValue(){return !!d.getValue(e,r)},callback(s,u){c.success(`${u?"开启":"关闭"} ${t}`),d.setValue(e,!!u);},afterAddToUListCallBack:void 0};return i.attributes&&(i.attributes[B]=e,i.attributes[G]=!!r),i},y={getCodeSearchUrl(t){return "https://greasyfork.org/zh-CN/scripts/code-search?c="+t},getAdminUrl(t){return t+"/admin"},getScriptId(t){var e,r;return (r=(e=t||window.location.pathname)==null?void 0:e.match(/\/scripts\/([\d]+)/i))==null?void 0:r[1]},getUserId(t){var e;return (e=(t||window.location.pathname).match(/\/users\/([\d]+)/i))==null?void 0:e[1]},getScriptName(t){let e=window.location.pathname;t!=null&&(e=new URL(t).pathname),e=decodeURIComponent(e);let r=e.split("/");for(const n of r){let o=n.match(/[\d]+/);if(o&&o.length)return o[1]}},getSwitchLanguageUrl(t="zh-CN"){let e=window.location.origin,r=window.location.pathname.split("/");return r[1]=t,e=e+r.join("/"),e+=window.location.search,window.location.search===""?e+="?locale_override=1":window.location.search.includes("locale_override=1")||(e+="&locale_override=1"),e},async getScriptStats(t){return new Promise(async e=>{let r=await _.get({url:`https://greasyfork.org/scripts/${t}/stats.json`,fetch:!0,onerror(){},ontimeout(){}});if(!r.status){e(null);return}let n=r.data;e(n);})},async getSourceCodeSyncFormData(t){let e=await _.get(`https://greasyfork.org/zh-CN/scripts/${t}/admin`,{fetch:!0});if(c.success(e),!e.status){a.error("请求admin内容失败");return}let r=e.data.responseText,o=l.parseHTML(r,!1,!0).querySelector("form.edit_script");if(!o){a.error("解析admin的源代码同步表单失败");return}return new FormData(o)},async sourceCodeSync(t,e){let r=await _.post(`https://greasyfork.org/zh-CN/scripts/${t}/sync_update`,{fetch:!0,data:e});if(c.success(r),!r.status){a.error("源代码同步失败");return}return r},async getUserInfo(t){let e=await _.get(`https://greasyfork.org/zh-CN/users/${t}.json`,{fetch:!0});if(c.success(e),!e.status){a.error("获取用户信息失败");return}let r=f.toJSON(e.data.responseText);return r.scriptList=[],r.scriptLibraryList=[],r.scripts.forEach(n=>{n.code_url.endsWith(".user.js")?r.scriptList.push(n):r.scriptLibraryList.push(n);}),r},async getUserCollection(t){let e=await _.get(`https://greasyfork.org/zh-CN/users/${t}`,{fetch:!0});if(c.info(["获取用户的收藏集",e]),!e.status){a.error("获取用户的收藏集失败");return}let r=e.data.responseText,o=l.parseHTML(r,!0,!0).querySelector("#user-script-sets");if(!o){c.error("解析Script Sets失败");return}let i=[];return o.querySelectorAll("li").forEach(s=>{var h;let u=s.querySelector("a:last-child");if(!u)return;let p=u.href;if(p.includes("?fav=1"))return;let g=s.querySelector("a").innerText,b=(h=p.match(/\/sets\/([\d]+)\//))==null?void 0:h[1];i.push({id:b,name:g});}),i},async getUserCollectionInfo(t,e){let r=await _.get(`https://greasyfork.org/zh-CN/users/${t}/sets/${e}/edit`,{fetch:!0});if(!r.status){a.error(`获取收藏集${e}失败`);return}let n=r.data.responseText,o=l.parseHTML(n,!0,!0),i=o.querySelector('form[id^="edit_script_set"]');if(!i){a.error("获取表单元素#edit_script_set失败");return}let s=new FormData(i),u=o.querySelector('meta[name="csrf-token"]');if(!u)throw new Error("获取表单csrfToken失败");if(u.hasAttribute("content")){let p=u.getAttribute("content");p&&s.set("authenticity_token",p);}return s},async updateUserSetsInfo(t,e,r){let n=await _.post(`https://greasyfork.org/zh-CN/users/${t}/sets/${e}`,{fetch:!0,headers:{accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded",pragma:"no-cache"},fetchInit:{referrerPolicy:"strict-origin-when-cross-origin"},data:r});if(!n.status){a.error("更新收藏集表单请求失败");return}let o=n.data.responseText;return l.parseHTML(o,!0,!0)},async switchLanguage(t){let e=await _.get(t,{fetch:!0,headers:{"Upgrade-Insecure-Requests":"1"}});e.status&&c.info(e);}},L={isCode(){var t;return (t=window.location.pathname.split("/"))==null?void 0:t.includes("code")},isCodeStrict(){return window.location.pathname.endsWith("/code")},isVersion(){return window.location.pathname.endsWith("/versions")},isUserHome(){return window.location.pathname.match(/\/.+\/users\/.+/gi)},isScript(){return window.location.pathname.includes("/scripts/")},isDiscuessions(){return window.location.pathname.includes("/discussions/")}},w={menu:X,isLogin:!1,initEnv(){let t=this.getUserLinkElement();this.isLogin=!!t;},getUserLinkElement(){return document.querySelector("#nav-user-info span.user-profile-link a")},async updateScript(t){let e=function(r,n=1){return `
        <div style="display: flex;flex-direction: column;align-items: flex-start;">
          <div style="height: 30px;line-height: 30px;">名称：${r}</div>
          <div style="height: 30px;line-height: 30px;">进度：${n}/${t.length}</div>
        </div>`};if(f.isNull(t))a.error("未获取到【脚本列表】");else {let r=a.loading(e(y.getScriptName(t[0])),{html:!0}),n=0,o=0;for(let i=0;i<t.length;i++){let s=t[i],u=y.getScriptId(s);c.success("更新："+s);let p=y.getScriptName(s);r.setHTML(e(p,i+1));let g=await y.getSourceCodeSyncFormData(u);g?await y.sourceCodeSync(u,g)?(a.success("源代码同步成功，3秒后更新下一个"),await f.sleep(3e3),n++):(a.error("源代码同步失败"),o++):(a.error("源代码同步失败"),o++);}r.close(),n===0?a.error("全部更新失败"):a.success(`全部更新完毕<br >
          成功：${n}<br >
          失败：${o}<br >
          总计：${t.length}`,{html:!0});}},handleLocalGotoCallBack(){if(d.getValue("goto_updateSettingsAndSynchronize_scriptList")){if(d.deleteValue("goto_updateSettingsAndSynchronize_scriptList"),!L.isUserHome()){d.setValue("goto_updateSettingsAndSynchronize_scriptList",!0),w.getUserLinkElement()?(a.success("前往用户主页"),window.location.href=w.getUserLinkElement().href):a.error("获取当前已登录的用户主页失败");return}let t=[];document.querySelectorAll("#user-script-list-section li a.script-link").forEach(e=>{t=t.concat(y.getAdminUrl(e.href));}),w.updateScript(t);}else if(d.getValue("goto_updateSettingsAndSynchronize_unlistedScriptList")){if(d.deleteValue("goto_updateSettingsAndSynchronize_unlistedScriptList"),!L.isUserHome()){d.setValue("goto_updateSettingsAndSynchronize_unlistedScriptList",!0),w.getUserLinkElement()?(a.success("前往用户主页"),window.location.href=w.getUserLinkElement().href):a.error("获取当前已登录的用户主页失败");return}let t=[];document.querySelectorAll("#user-unlisted-script-list li a.script-link").forEach(e=>{t=t.concat(y.getAdminUrl(e.href));}),w.updateScript(t);}else if(d.getValue("goto_updateSettingsAndSynchronize_libraryScriptList")){if(d.deleteValue("goto_updateSettingsAndSynchronize_libraryScriptList"),!L.isUserHome()){d.setValue("goto_updateSettingsAndSynchronize_libraryScriptList",!0),w.getUserLinkElement()?(a.success("前往用户主页"),window.location.href=w.getUserLinkElement().href):a.error("获取当前已登录的用户主页失败");return}let t=[];document.querySelectorAll("#user-library-script-list li a.script-link").forEach(e=>{t=t.concat(y.getAdminUrl(e.href));}),w.updateScript(t);}}},le={id:"greasy-fork-panel-config-account",title:"账号",forms:[{text:"账号/密码",type:"forms",forms:[Y("账号","user","",void 0,void 0,"请输入账号"),Y("密码","pwd","",void 0,void 0,"请输入密码",!1,!0)]},{text:"功能",type:"forms",forms:[I("自动登录","autoLogin",!0,void 0,"自动登录当前保存的账号"),P("清空账号/密码",void 0,"点击清空",void 0,void 0,!1,"default",t=>{if(confirm("确定清空账号和密码？")){d.deleteValue("user"),d.deleteValue("pwd"),a.success("已清空账号/密码");let e=t.target.getRootNode();e.querySelector('li[data-key="user"] .pops-panel-input input').value="",e.querySelector('li[data-key="pwd"] .pops-panel-input input').value="";}}),P("源代码同步【脚本列表】",void 0,"一键同步",void 0,void 0,!1,"primary",t=>{if(!L.isUserHome()){d.setValue("goto_updateSettingsAndSynchronize_scriptList",!0),w.getUserLinkElement()?(a.success("前往用户主页"),window.location.href=w.getUserLinkElement().href):a.error("获取当前已登录的用户主页失败");return}let e=[];document.querySelectorAll("#user-script-list-section li a.script-link").forEach(r=>{e=e.concat(y.getAdminUrl(r.href));}),w.updateScript(e);}),P("源代码同步【未上架的脚本】",void 0,"一键同步",void 0,void 0,!1,"primary",t=>{if(!L.isUserHome()){d.setValue("goto_updateSettingsAndSynchronize_unlistedScriptList",!0),w.getUserLinkElement()?(a.success("前往用户主页"),window.location.href=w.getUserLinkElement().href):a.error("获取当前已登录的用户主页失败");return}let e=[];document.querySelectorAll("#user-unlisted-script-list li a.script-link").forEach(r=>{e=e.concat(y.getAdminUrl(r.href));}),w.updateScript(e);}),P("源代码同步【库】",void 0,"一键同步",void 0,void 0,!1,"primary",t=>{if(!L.isUserHome()){d.setValue("goto_updateSettingsAndSynchronize_libraryScriptList",!0),w.getUserLinkElement()?(a.success("前往用户主页"),window.location.href=w.getUserLinkElement().href):a.error("获取当前已登录的用户主页失败");return}let e=[];document.querySelectorAll("#user-library-script-list li a.script-link").forEach(r=>{e=e.concat(y.getAdminUrl(r.href));}),w.updateScript(e);})]}]},ce=function(t,e,r,n,o,i){let s=[];typeof n=="function"?s=n():s=n;let u={text:t,type:"select",description:i,attributes:{},getValue(){return d.getValue(e,r)},callback(p,g,b){d.setValue(e,g);},data:s};return u.attributes&&(u.attributes[B]=e,u.attributes[G]=r),u},de={id:"greasy-fork-panel-config-optimization",title:"优化",forms:[{text:"功能",type:"forms",forms:[ce("固定当前语言","language-selector-locale","",function(){let t=[{value:"",text:"无"}];return document.querySelectorAll("select#language-selector-locale option").forEach(e=>{let r=e.getAttribute("value");if(r==="help")return;let n=(e.innerText||e.textContent).trim();t.push({value:r,text:n});}),t}()),I("美化页面元素","beautifyPage",!0,void 0,"如button、input、textarea"),I("美化历史版本页面","beautifyHistoryVersionPage",!0,void 0,"更直观的查看版本迭代"),I("美化上传图片按钮","beautifyUploadImage",!0,void 0,"放大上传区域"),I("优化图片浏览","optimizeImageBrowsing",!0,void 0,"使用Viewer浏览图片"),I("覆盖图床图片跳转","overlayBedImageClickEvent",!0,void 0,"配合上面的【优化图片浏览】更优雅浏览图片"),I("美化Greasyfork Beautify脚本","beautifyGreasyforkBeautify",!0,void 0,'需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>')]},{text:"代码",type:"forms",forms:[I("添加复制代码按钮","addCopyCodeButton",!0,void 0,"更优雅的复制"),I("快捷键","fullScreenOptimization",!0,void 0,"【F】键全屏、【Alt+Shift+F】键宽屏")]}]},pe={id:"greasy-fork-panel-config-discussions",title:"论坛",forms:[{text:"功能",type:"forms",forms:[I("过滤重复的评论","greasyfork-discussions-filter-duplicate-comments",!1,void 0,"过滤掉重复的评论数量(≥2)")]},{text:"过滤脚本(id)",type:"forms",forms:[{type:"own",getLiElementCallBack(t){let e=l.createElement("div",{className:"pops-panel-textarea",innerHTML:'<textarea placeholder="请输入脚本id，每行一个" style="height:150px;"></textarea>'},{style:"width: 100%;"}),r=e.querySelector("textarea");const n="greasyfork-discussions-filter-script";return r.value=d.getValue(n,""),l.on(r,["input","propertychange"],void 0,f.debounce(function(o){d.setValue(n,r.value);},200)),t.appendChild(e),t}}]},{text:"过滤发布的用户(id)",type:"forms",forms:[{type:"own",getLiElementCallBack(t){let e=l.createElement("div",{className:"pops-panel-textarea",innerHTML:'<textarea placeholder="请输入用户id，每行一个" style="height:150px;"></textarea>'},{style:"width: 100%;"}),r=e.querySelector("textarea");const n="greasyfork-discussions-filter-post-user";return r.value=d.getValue(n,""),l.on(r,["input","propertychange"],void 0,f.debounce(function(o){d.setValue(n,r.value);},200)),t.appendChild(e),t}}]},{text:"过滤回复的用户(id)",type:"forms",forms:[{type:"own",getLiElementCallBack(t){let e=l.createElement("div",{className:"pops-panel-textarea",innerHTML:'<textarea placeholder="请输入用户id，每行一个" style="height:150px;"></textarea>'},{style:"width: 100%;"}),r=e.querySelector("textarea");const n="greasyfork-discussions-filter-reply-user";return r.value=d.getValue(n,""),l.on(r,["input","propertychange"],void 0,f.debounce(function(o){d.setValue(n,r.value);},200)),t.appendChild(e),t}}]}]},O={key:"gf-shield-rule",init(){document.querySelectorAll("#browse-script-list > li").forEach(t=>{let e=t.dataset,r=t.querySelector(".script-description");e.scriptDescription=(r==null?void 0:r.innerText)||(r==null?void 0:r.textContent)||"";let n=f.toJSON(e.scriptAuthors);if(f.isNotNull(n)){let i=Object.keys(n)[0],s=n[i];e.scriptAuthorId=i,e.scriptAuthorName=s;}e.scriptRatingScore=parseFloat(e.scriptRatingScore);let o=this.getValue().split(`
`);for(const i of o){let s=i.split("##"),u=s[0],p=s[1];if(u==="scriptRatingScore"){if(p.startsWith(">")){if(e.scriptRatingScore>parseFloat(p.slice(1))){t.remove();break}}else if(p.startsWith("<")&&e.scriptRatingScore<parseFloat(p.slice(1))){t.remove();break}}else if(u in e||u==="scriptDescription"){if(typeof p!="string")continue;let g=new RegExp(p,"ig");if(e[u].match(g)){t.remove();break}}}});},setValue(t){d.setValue(this.key,t);},getValue(){return d.getValue(this.key,"")}},ue={id:"greasy-fork-panel-config-shield",title:"屏蔽",forms:[{text:"规则(可正则)",type:"forms",forms:[{type:"own",getLiElementCallBack(t){let e=l.createElement("div",{className:"pops-panel-textarea",innerHTML:'<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>'},{style:"width: 100%;"}),r=e.querySelector("textarea");return r.value=O.getValue(),l.on(r,["input","propertychange"],void 0,f.debounce(function(){O.setValue(r.value);},200)),t.appendChild(e),t}}]}]},me=`code {\r
	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r
	font-size: 0.85em;\r
	color: #000;\r
	background-color: #f0f0f0;\r
	border-radius: 3px;\r
	padding: 0.2em 0;\r
}\r
table {\r
	text-indent: initial;\r
}\r
table {\r
	margin: 10px 0 15px 0;\r
	border-collapse: collapse;\r
	border-spacing: 0;\r
	display: block;\r
	width: 100%;\r
	overflow: auto;\r
	word-break: normal;\r
	word-break: keep-all;\r
}\r
code,\r
pre {\r
	color: #333;\r
	background: 0 0;\r
	font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\r
	text-align: left;\r
	white-space: pre;\r
	word-spacing: normal;\r
	word-break: normal;\r
	word-wrap: normal;\r
	line-height: 1.4;\r
	-moz-tab-size: 8;\r
	-o-tab-size: 8;\r
	tab-size: 8;\r
	-webkit-hyphens: none;\r
	-moz-hyphens: none;\r
	-ms-hyphens: none;\r
	hyphens: none;\r
}\r
pre {\r
	padding: 0.8em;\r
	overflow: auto;\r
	border-radius: 3px;\r
	background: #f5f5f5;\r
}\r
:not(pre) > code {\r
	padding: 0.1em;\r
	border-radius: 0.3em;\r
	white-space: normal;\r
	background: #f5f5f5;\r
}\r
html body {\r
	font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans,\r
		sans-serif;\r
	font-size: 16px;\r
	line-height: 1.6;\r
	color: #333;\r
	background-color: #fff;\r
	overflow: initial;\r
	box-sizing: border-box;\r
	word-wrap: break-word;\r
}\r
html body > :first-child {\r
	margin-top: 0;\r
}\r
html body h1,\r
html body h2,\r
html body h3,\r
html body h4,\r
html body h5,\r
html body h6 {\r
	line-height: 1.2;\r
	margin-top: 1em;\r
	margin-bottom: 16px;\r
	color: #000;\r
}\r
html body h1 {\r
	font-size: 2.25em;\r
	font-weight: 300;\r
	padding-bottom: 0.3em;\r
}\r
html body h2 {\r
	font-size: 1.75em;\r
	font-weight: 400;\r
	padding-bottom: 0.3em;\r
}\r
html body h3 {\r
	font-size: 1.5em;\r
	font-weight: 500;\r
}\r
html body h4 {\r
	font-size: 1.25em;\r
	font-weight: 600;\r
}\r
html body h5 {\r
	font-size: 1.1em;\r
	font-weight: 600;\r
}\r
html body h6 {\r
	font-size: 1em;\r
	font-weight: 600;\r
}\r
html body h1,\r
html body h2,\r
html body h3,\r
html body h4,\r
html body h5 {\r
	font-weight: 600;\r
}\r
html body h5 {\r
	font-size: 1em;\r
}\r
html body h6 {\r
	color: #5c5c5c;\r
}\r
html body strong {\r
	color: #000;\r
}\r
html body del {\r
	color: #5c5c5c;\r
}\r
html body a:not([href]) {\r
	color: inherit;\r
}\r
html body a {\r
	text-decoration: underline;\r
	text-underline-offset: 0.2rem;\r
}\r
html body a:hover {\r
	color: #00a3f5;\r
}\r
html body img {\r
	max-width: 100%;\r
}\r
html body > p {\r
	margin-top: 0;\r
	margin-bottom: 16px;\r
	word-wrap: break-word;\r
}\r
html body > ol,\r
html body > ul {\r
	margin-bottom: 16px;\r
}\r
html body ol,\r
html body ul {\r
	padding-left: 2em;\r
}\r
html body ol.no-list,\r
html body ul.no-list {\r
	padding: 0;\r
	list-style-type: none;\r
}\r
html body ol ol,\r
html body ol ul,\r
html body ul ol,\r
html body ul ul {\r
	margin-top: 0;\r
	margin-bottom: 0;\r
}\r
html body li {\r
	margin-bottom: 0;\r
}\r
html body li.task-list-item {\r
	list-style: none;\r
}\r
html body li > p {\r
	margin-top: 0;\r
	margin-bottom: 0;\r
}\r
html body .task-list-item-checkbox {\r
	margin: 0 0.2em 0.25em -1.8em;\r
	vertical-align: middle;\r
}\r
html body .task-list-item-checkbox:hover {\r
	cursor: pointer;\r
}\r
html body blockquote {\r
	margin: 16px 0;\r
	font-size: inherit;\r
	padding: 0 15px;\r
	color: #5c5c5c;\r
	background-color: #f0f0f0;\r
	border-left: 4px solid #d6d6d6 !important;\r
}\r
html body blockquote > :first-child {\r
	margin-top: 0;\r
}\r
html body blockquote > :last-child {\r
	margin-bottom: 0;\r
}\r
html body hr {\r
	height: 4px;\r
	margin: 32px 0;\r
	background-color: #d6d6d6;\r
	border: 0 none;\r
}\r
html body table {\r
	margin: 10px 0 15px 0;\r
	border-collapse: collapse;\r
	border-spacing: 0;\r
	display: block;\r
	width: 100%;\r
	overflow: auto;\r
	word-break: normal;\r
	word-break: keep-all;\r
}\r
html body table th {\r
	font-weight: 700;\r
	color: #000;\r
}\r
html body table td,\r
html body table th {\r
	border: 1px solid #d6d6d6;\r
	padding: 6px 13px;\r
}\r
html body dl {\r
	padding: 0;\r
}\r
html body dl dt {\r
	padding: 0;\r
	margin-top: 16px;\r
	font-size: 1em;\r
	font-style: italic;\r
	font-weight: 700;\r
}\r
html body dl dd {\r
	padding: 0 16px;\r
	margin-bottom: 16px;\r
}\r
html body code {\r
	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r
	font-size: 0.85em;\r
	color: #000;\r
	background-color: #f0f0f0;\r
	border-radius: 3px;\r
	padding: 0.2em 0;\r
}\r
html body code::after,\r
html body code::before {\r
	letter-spacing: -0.2em;\r
	content: "\\00a0";\r
}\r
html body pre > code {\r
	padding: 0;\r
	margin: 0;\r
	word-break: normal;\r
	white-space: pre;\r
	background: 0 0;\r
	border: 0;\r
}\r
html body .highlight {\r
	margin-bottom: 16px;\r
}\r
html body .highlight pre,\r
html body pre {\r
	padding: 1em;\r
	overflow: auto;\r
	line-height: 1.45;\r
	border: #d6d6d6;\r
	border-radius: 3px;\r
}\r
html body .highlight pre {\r
	margin-bottom: 0;\r
	word-break: normal;\r
}\r
html body pre code,\r
html body pre tt {\r
	display: inline;\r
	max-width: initial;\r
	padding: 0;\r
	margin: 0;\r
	overflow: initial;\r
	line-height: inherit;\r
	word-wrap: normal;\r
	background-color: transparent;\r
	border: 0;\r
}\r
html body pre code:after,\r
html body pre code:before,\r
html body pre tt:after,\r
html body pre tt:before {\r
	content: normal;\r
}\r
html body blockquote,\r
html body dl,\r
html body ol,\r
html body p,\r
html body pre,\r
html body ul {\r
	margin-top: 0;\r
	margin-bottom: 16px;\r
}\r
html body kbd {\r
	color: #000;\r
	border: 1px solid #d6d6d6;\r
	border-bottom: 2px solid #c7c7c7;\r
	padding: 2px 4px;\r
	background-color: #f0f0f0;\r
	border-radius: 3px;\r
}\r
@media print {\r
	html body {\r
		background-color: #fff;\r
	}\r
	html body h1,\r
	html body h2,\r
	html body h3,\r
	html body h4,\r
	html body h5,\r
	html body h6 {\r
		color: #000;\r
		page-break-after: avoid;\r
	}\r
	html body blockquote {\r
		color: #5c5c5c;\r
	}\r
	html body pre {\r
		page-break-inside: avoid;\r
	}\r
	html body table {\r
		display: table;\r
	}\r
	html body img {\r
		display: block;\r
		max-width: 100%;\r
		max-height: 100%;\r
	}\r
	html body code,\r
	html body pre {\r
		word-wrap: break-word;\r
		white-space: pre;\r
	}\r
}\r
.scrollbar-style::-webkit-scrollbar {\r
	width: 8px;\r
}\r
.scrollbar-style::-webkit-scrollbar-track {\r
	border-radius: 10px;\r
	background-color: transparent;\r
}\r
.scrollbar-style::-webkit-scrollbar-thumb {\r
	border-radius: 5px;\r
	background-color: rgba(150, 150, 150, 0.66);\r
	border: 4px solid rgba(150, 150, 150, 0.66);\r
	background-clip: content-box;\r
}\r
`,fe=`/* 美化按钮 */\r
input[type="submit"],\r
button {\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
	line-height: 1;\r
	height: 32px;\r
	white-space: nowrap;\r
	cursor: pointer;\r
	/* color: #606266; */\r
	text-align: center;\r
	box-sizing: border-box;\r
	outline: none;\r
	transition: 0.1s;\r
	font-weight: 500;\r
	user-select: none;\r
	vertical-align: middle;\r
	-webkit-appearance: none;\r
	background-color: #ffffff;\r
	border: 1px solid #dcdfe6;\r
	border-color: #dcdfe6;\r
	padding: 8px 15px;\r
	font-size: 14px;\r
	border-radius: 4px;\r
}\r
\r
input[type="submit"]:hover,\r
input[type="submit"]:focus,\r
button:hover,\r
button:focus {\r
	color: #409eff;\r
	border-color: #c6e2ff;\r
	background-color: #ecf5ff;\r
	outline: none;\r
}\r
\r
input[type="url"] {\r
	position: relative;\r
	font-size: 14px;\r
	display: inline-flex;\r
	line-height: 32px;\r
	box-sizing: border-box;\r
	vertical-align: middle;\r
	-webkit-appearance: none;\r
	/* color: #606266; */\r
	padding: 0;\r
	outline: none;\r
	border: none;\r
	background: none;\r
	flex-grow: 1;\r
	align-items: center;\r
	justify-content: center;\r
	padding: 1px 11px;\r
	background-color: #ffffff;\r
	background-image: none;\r
	border-radius: 4px;\r
	cursor: text;\r
	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r
	transform: translateZ(0);\r
	box-shadow: 0 0 0 1px #dcdfe6 inset;\r
\r
	width: 100%;\r
	width: -moz-available;\r
	width: -webkit-fill-available;\r
	width: fill-available;\r
}\r
\r
input[type="url"]::placeholder {\r
	color: #a8abb2;\r
}\r
\r
input[type="url"]:hover {\r
	box-shadow: 0 0 0 1px #c0c4cc inset;\r
}\r
\r
input[type="url"]:focus {\r
	box-shadow: 0 0 0 1px #409eff inset;\r
}\r
`,he=`label.radio-label {\r
	font-weight: 500;\r
	position: relative;\r
	cursor: pointer;\r
	display: inline-flex;\r
	align-items: center;\r
	white-space: normal;\r
	outline: none;\r
	font-size: 14px;\r
	user-select: none;\r
	margin-right: 32px;\r
	height: 32px;\r
	padding: 4px;\r
	border-radius: 4px;\r
	box-sizing: border-box;\r
}\r
label:has(input[type="radio"]:checked),\r
label:has(input[type="radio"]:checked) a {\r
	color: #409eff;\r
}\r
label.radio-label input[type="radio"] {\r
	margin-right: 4px;\r
	width: 14px;\r
	height: 14px;\r
}\r
label.radio-label input[type="radio"]:checked {\r
	-webkit-appearance: none;\r
	-moz-appearance: none;\r
	appearance: none;\r
	border-radius: 50%;\r
	width: 14px;\r
	height: 14px;\r
	outline: none;\r
	border: 4px solid #409eff;\r
	cursor: pointer;\r
}\r
label.radio-label input[type="radio"]:checked + span {\r
	color: #409eff;\r
}\r
`,ge=`textarea {\r
	position: relative;\r
	display: inline-block;\r
	width: 100%;\r
	vertical-align: bottom;\r
	font-size: 14px;\r
	position: relative;\r
	display: block;\r
	resize: vertical;\r
	padding: 5px 11px;\r
	line-height: 1.5;\r
	box-sizing: border-box;\r
	width: 100%;\r
	font-size: inherit;\r
	font-family: inherit;\r
	/* color: #606266; */\r
	background-color: #ffffff;\r
	background-image: none;\r
	-webkit-appearance: none;\r
	box-shadow: 0 0 0 1px #dcdfe6 inset;\r
	border-radius: 4px;\r
	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r
	border: none;\r
}\r
textarea:focus {\r
	outline: none;\r
	box-shadow: 0 0 0 1px #409eff inset;\r
}\r
`,ye=`ul.history_versions,\r
ul.history_versions li {\r
	width: 100%;\r
}\r
ul.history_versions li {\r
	display: flex;\r
	flex-direction: column;\r
	margin: 25px 0px;\r
}\r
.diff-controls input[type="radio"]:nth-child(2) {\r
	margin-left: 5px;\r
}\r
.flex-align-item-center {\r
	display: flex;\r
	align-items: center;\r
}\r
.script-tag {\r
	margin-bottom: 8px;\r
}\r
.script-tag-version a {\r
	color: #656d76;\r
	fill: #656d76;\r
	text-decoration: none;\r
	width: fit-content;\r
	width: -moz-fit-content;\r
}\r
.script-tag-version a:hover svg {\r
	color: #00a3f5;\r
	fill: #00a3f5;\r
}\r
.script-tag-version a > span {\r
	margin-left: 0.25rem;\r
}\r
.script-note-box-body {\r
	border-radius: 0.375rem;\r
	border-style: solid;\r
	border-width: max(1px, 0.0625rem);\r
	border-color: #d0d7de;\r
	color: #1f2328;\r
	padding: 16px;\r
	overflow-wrap: anywhere;\r
}\r
.script-note-box-body p {\r
	margin-bottom: unset;\r
}\r
`,be=`/* 隐藏 添加： */\r
label[for="discussion_comments_attributes_0_attachments"],\r
label[for="comment_attachments"] {\r
	display: none;\r
}\r
input[type="file"] {\r
	width: 100%;\r
	font-size: 20px;\r
	background: #e2e2e2;\r
	padding: 40px 0px;\r
	border-radius: 10px;\r
	text-align-last: center;\r
}\r
`,we=`#main-header {\r
	background-color: #670000 !important;\r
	background-image: linear-gradient(#670000, #990000) !important;\r
}\r
#site-nav-vue {\r
	flex-wrap: wrap;\r
	justify-content: flex-end;\r
}\r
.open-sidebar {\r
	border-width: 1px;\r
	border-radius: 3px;\r
	margin-right: 0;\r
}\r
input.search-submit {\r
	transform: translateY(-5%) !important;\r
	margin-left: 10px;\r
}\r
#script-content code {\r
	word-wrap: break-word;\r
}\r
.code-container ::selection {\r
	background-color: #3d4556 !important;\r
}\r
`,xe={init(){d.execMenuOnce("beautifyPage",()=>{this.beautifyPageElement();}),L.isVersion()&&d.execMenuOnce("beautifyHistoryVersionPage",()=>{this.beautifyHistoryVersionPage();}),d.execMenuOnce("beautifyGreasyforkBeautify",()=>{this.beautifyGreasyforkBeautify();}),d.execMenuOnce("beautifyUploadImage",()=>{this.beautifyUploadImage();});},beautifyPageElement(){c.info("美化页面元素"),x(me),x(fe),x(he),x(ge),x(`
        p:has(input[type="submit"][name="update-and-sync"]){
          margin-top: 10px;
        }
        `),l.ready(function(){let t=document.querySelector('a[target="markup_choice"][href*="daringfireball.net"]');t&&t.parentElement.replaceChild(l.createElement("span",{textContent:"Markdown"}),t),globalThis.location.pathname.endsWith("/admin")&&!document.querySelector('input[type="submit"][name="update-only"]')&&x(`
                .indented{
                    padding-left: unset;
                }
                `);});},beautifyHistoryVersionPage(){c.info("美化 历史版本 页面");let t=`
        .version-number,
        .version-date,
        .version-changelog{
          display: none;
        }
        `;x(ye),x(t),l.ready(function(){let e=document.querySelector("ul.history_versions");if(!e){a.error("未找到history_versions元素列表");return}Array.from(e.children).forEach(r=>{var b,h;let n=r.querySelector(".version-number a").href,o=r.querySelector(".version-number a").innerText,i=(b=r.querySelector(".version-date"))==null?void 0:b.getAttribute("datetime"),s=((h=r.querySelector(".version-changelog"))==null?void 0:h.innerHTML)||"",u=l.createElement("span",{className:"script-version-date",innerHTML:f.formatTime(i,"yyyy年MM月dd日 HH:mm:ss")}),p=l.createElement("div",{className:"script-tag",innerHTML:`
                    <div class="script-tag-version">
                        <a href="${n}}" class="flex-align-item-center">
                        <svg aria-label="Tag" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                        </svg>
                        <span>${o}</span>
                        </a>
                    </div>`}),g=l.createElement("div",{className:"script-note-box-body",innerHTML:s});r.appendChild(u),r.appendChild(p),r.appendChild(g);});});},beautifyGreasyforkBeautify(){c.info("美化 Greasyfork Beautify脚本"),x(we),f.isPhone()?x(`
            section#script-info,
            section.text-content,
            div.width-constraint table.text-content.log-table{
                margin-top: 80px;
            }
            
            div.width-constraint div.sidebarred{
                padding-top: 80px;
            }
            div.width-constraint div.sidebarred .sidebar{
                top: 80px;
            }`):x(`
            section#script-info{
                margin-top: 10px;
            }`);},beautifyUploadImage(){x(be),l.ready(function(){function t(r){for(;r.nextElementSibling;)r.parentElement.removeChild(r.nextElementSibling);}document.querySelectorAll('input[type="file"]').forEach(r=>{r.getAttribute("name")!=="code_upload"&&(r.hasAttribute("accept")&&r.getAttribute("accept").includes("javascript")||l.on(r,"change",function(n){t(n.target);let o=n.currentTarget.files;if(!o||o.length===0)return;c.info(["选择的图片",o]),o.length>5&&l.after(r,l.createElement("p",{textContent:"❌ 最多同时长传5张图片"}));let i=[];Array.from(o).forEach(s=>{(s.size>204800||!s.type.match(/png|gif|jpeg|webp/i))&&i.push(s);}),i.length!==0&&i.forEach(s=>{l.after(r,l.createElement("p",{textContent:`❌ 图片：${s.name} 大小：${f.formatByteToSize(s.size)}`}));});}));});});}},ve={init(){this.repairCodeLineNumber();},repairCodeLineNumber(){c.info("修复代码的行号显示不够问题"),f.waitNode("#script-content div.code-container pre.prettyprint ol").then(t=>{t.childElementCount>=1e3&&(c.success(`当前代码行数${t.childElementCount}行，超过1000行，优化行号显示问题`),x(`
                    pre.prettyprint{
                        padding-left: 10px;
                        font-family: Monaco,Consolas,'Lucida Console','Courier New',serif;
                        font-size: 12px;
                    }`));});}},Se={init(){d.execMenu("autoLogin",()=>{this.autoLogin();});},autoLogin(){f.waitNode("span.sign-in-link a[rel=nofollow]").then(async()=>{let t=d.getValue("user"),e=d.getValue("pwd");if(f.isNull(t)){a.error("请先在菜单中录入账号");return}if(f.isNull(e)){a.error("请先在菜单中录入密码");return}let r=document.querySelector("meta[name='csrf-token']");if(!r){a.error("获取csrf-token失败");return}let n=a.loading("正在登录中..."),o=await _.post("https://greasyfork.org/zh-CN/users/sign_in",{fetch:!0,data:encodeURI(`authenticity_token=${r.getAttribute("content")}&user[email]=${t}&user[password]=${e}&user[remember_me]=1&commit=登录`),headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(n.destroy(),!o.status){c.error(o),a.error("登录失败，请在控制台查看原因");return}let i=o.data.responseText;l.parseHTML(i,!0,!0).querySelectorAll(".sign-out-link a[rel=nofollow][data-method='delete']").length?(a.success("登录成功，1s后自动跳转"),setTimeout(()=>{window.location.reload();},1e3)):(c.error(o),c.error(`当前账号:${t}`),c.error(`当前密码:${e}`),a.error("登录失败，可能是账号/密码错误，请在控制台查看原因"));});}},ke={init(){this.filterDiscussions();},filterDiscussions(){c.info("论坛-过滤");const t="greasyfork-discussions-filter-script",e="greasyfork-discussions-filter-post-user",r="greasyfork-discussions-filter-reply-user",n=d.getValue(t,""),o=d.getValue(e,""),i=d.getValue(r,""),s=n.trim()===""?[]:n.split(`
`),u=o.trim()===""?[]:o.split(`
`),p=i.trim()===""?[]:i.split(`
`),g=new Map;x(`
        .discussion-list-container {
          --discusstion-repeat-color: #ffa700;
        }
        
        .discussion-list-container a.discussion-title[data-repeat-tip-show]::before {
          content: attr(data-repeat-tip-show);
          color: var(--discusstion-repeat-color);
          border-radius: 5px;
          border: 2px solid var(--discusstion-repeat-color);
          padding: 2px 5px;
          font-weight: 800;
          font-size: 14px;
        }
        `);let b=document.querySelectorAll(".discussion-list-container");Array.from(b).forEach((h,S)=>{var k;if(!h.querySelector("a.script-link"))return;const m={scriptName:h.querySelector("a.script-link").innerText,scriptUrl:h.querySelector("a.script-link").href,scriptId:y.getScriptId(h.querySelector("a.script-link").href),postUserName:h.querySelector("a.user-link").innerText,postUserHomeUrl:h.querySelector("a.user-link").href,postUserId:y.getUserId(h.querySelector("a.user-link").href),postTimeStamp:new Date(h.querySelector("relative-time").getAttribute("datetime")),snippetUrl:h.querySelector("a.discussion-title").href,snippet:h.querySelector("span.discussion-snippet").innerText,replyUserName:void 0,replyUserHomeUrl:void 0,replyUserId:void 0,replyTimeStamp:void 0};if(h.querySelector(".discussion-meta-item .discussion-meta-item")&&(m.replyUserName=h.querySelector(".discussion-meta-item .discussion-meta-item a.user-link").innerText,m.replyUserHomeUrl=h.querySelector(".discussion-meta-item .discussion-meta-item a.user-link").href,m.replyUserId=y.getUserId(m.replyUserHomeUrl),m.replyTimeStamp=new Date((k=h.querySelector(".discussion-meta-item .discussion-meta-item relative-time"))==null?void 0:k.getAttribute("datetime"))),g.has(m.snippet)&&d.getValue("greasyfork-discussions-filter-duplicate-comments")){let v=g.get(m.snippet).querySelector("a.discussion-title");v.setAttribute("data-repeat-tip-show","true");let E=0;v.hasAttribute("data-repeat-count")&&(E=parseInt(v.getAttribute("data-repeat-count"))),E++,v.setAttribute("data-repeat-count",E.toString()),v.setAttribute("data-repeat-tip-show",`已过滤：${E}`),c.success(["过滤重复内容："+m.snippet,m]),h.remove();return}g.set(m.snippet,h);for(const v of s)if(m.scriptId===v){c.success(["过滤脚本id："+m.scriptId,m]),h.remove();return}for(const v of u)if(m.postUserId===v){c.success(["过滤发布用户id："+m.postUserId,m]),h.remove();return}if(m.replyUserName){for(const v of p)if(m.replyUserId===v){c.success(["过滤回复用户id："+m.replyUserId,m]),h.remove();return}}});}},Ce={init(){ke.init();}},M={init(){this.checkPage(),xe.init(),L.isCodeStrict()&&d.execMenuOnce("fullScreenOptimization",()=>{this.fullScreenOptimization();}),L.isCode()&&ve.init(),L.isDiscuessions()&&Ce.init(),l.ready(()=>{w.initEnv(),Se.init(),O.init(),w.handleLocalGotoCallBack(),M.setFindCodeSearchBtn(),M.setCollectScriptBtn(),M.repairImgShow(),M.scriptHomepageAddedTodaySUpdate(),M.languageSelectorLocale(),d.execMenuOnce("optimizeImageBrowsing",()=>{M.optimizeImageBrowsing();}),d.execMenuOnce("overlayBedImageClickEvent",()=>{M.overlayBedImageClickEvent();}),L.isCodeStrict()&&d.execMenuOnce("addCopyCodeButton",()=>{M.addCopyCodeButton();}),L.isCodeStrict()||M.addMarkdownCopyButton();});},setFindCodeSearchBtn(){c.info("设置代码搜索按钮(对于库)"),f.waitNode("ul#script-links li.current span").then(()=>{let t=l.createElement("li",{innerHTML:'<a href="javascript:;"><span>寻找引用</span></a>'});l.append(document.querySelector("ul#script-links"),t),l.on(t,"click",async function(){let e=window.location.pathname.match(/scripts\/([\d]+)/i);if(!e){c.error([e,window.location.pathname]),a.error("获取脚本id失败");return}let r=e[e.length-1];window.location.href=y.getCodeSearchUrl(`greasyfork.org/scripts/${r}`);});});},setCollectScriptBtn(){c.info("添加收藏按钮"),f.waitNode("ul#script-links li.current span").then(()=>{let t=l.createElement("li",{innerHTML:'<a href="javascript:;"><span>收藏</span></a>'});l.append(document.querySelector("ul#script-links"),t),l.on(t,"click",async function(){let e=window.location.pathname.match(/scripts\/([\d]+)/i);if(!e){c.error([e,window.location.pathname]),a.error("获取脚本id失败");return}let r=e[e.length-1];if(!w.isLogin){a.error("请先登录账号"),c.error("请先登录账号");return}let n=y.getUserId(w.getUserLinkElement().href);if(n==null){a.error("获取用户id失败"),c.error("获取用户id失败");return}let o=a.loading("获取收藏夹中..."),i=await y.getUserCollection(n);if(o.close(),!i)return;let s="";i.forEach(p=>{s+=`
                    <li class="user-collect-item" data-id="${p.id}" data-name="${p.name}">
                        <div class="user-collect-name">${p.name}</div>
                        <div class="user-collect-btn-container">
                        <div class="pops-panel-button collect-add-script-id">
                            <button type="primary" data-icon="" data-righticon="">
                            <span>添加</span>
                            </button>
                        </div>
                        <div class="pops-panel-button collect-delete-script-id">
                            <button type="danger" data-icon="" data-righticon="">
                            <span>删除</span>
                            </button>
                        </div>
                        </div>
                    </li>
              `;});let u=q.alert({title:{text:"收藏集",position:"center"},content:{html:!0,text:`<ul>${s}</ul>`},mask:{enable:!0,clickEvent:{toClose:!0}},btn:{ok:{enable:!1}},width:q.isPhone()?"92dvw":"500px",height:"auto",drag:!0,only:!0,style:`
                    .pops{
                        --content-max-height: 400px;
                        max-height: var(--content-max-height);
                    }
                    .pops[type-value=alert] .pops-alert-content {
                        max-height: calc(var(--content-max-height) - var(--container-title-height) - var(--container-bottom-btn-height));
                    }
                    .user-collect-item{
                        -webkit-user-select: none;
                        user-select: none;
                        padding: 5px 10px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-bottom: 1px dotted #c9c9c9;
                    }
                    .user-collect-name{
        
                    }
                    .user-collect-item:hover{
                        
                    }
                    .user-collect-btn-container{
                        margin-left: 10px;
                        display: flex;
                    }
                    `});l.on(u.$shadowRoot,"click",".collect-add-script-id",async function(p){let g=p.target.closest(".user-collect-item"),b=g.dataset.id;g.dataset.name;let h=a.loading("添加中..."),S=await y.getUserCollectionInfo(n,b);if(!S){h.close();return}let m=f.cloneFormData(S),k=f.cloneFormData(S);m.set("add-script",r),m.set("script-action","i"),k.append("scripts-included[]",r),k.set("save","1");let v=new URLSearchParams(m),E=new URLSearchParams(k),T=Array.from(v).map(([V,z])=>`${encodeURIComponent(V)}=${encodeURIComponent(z)}`).join("&"),A=Array.from(E).map(([V,z])=>`${encodeURIComponent(V)}=${encodeURIComponent(z)}`).join("&");c.info(["添加的数据",T]),c.info(["保存的数据",A]);let $=await y.updateUserSetsInfo(n,b,T);if(!$){h.close();return}let U=$.querySelector(".change-script-set");if(!U){a.error("添加失败，.change-script-set元素不存在"),h.close();return}let C=U.querySelector("section");if(!C){a.error("添加失败，section元素不存在"),h.close();return}let H=C.querySelector(".alert");H?q.alert({title:{text:"添加失败",position:"center"},content:{text:H.innerHTML,html:!0},mask:{enable:!0,clickEvent:{toClose:!0}},style:`
                                .pops-alert-content{
                                    font-style: italic;
                                    background-color: #ffc;
                                    border: none;
                                    border-left: 6px solid #FFEB3B;
                                    padding: .5em;
                                }
                                `,drag:!0,dragLimit:!0,width:q.isPhone()?"88vw":"400px",height:q.isPhone()?"50vh":"300px"}):(await y.updateUserSetsInfo(n,b,A),a.success("添加成功")),h.close();}),l.on(u.$shadowRoot,"click",".collect-delete-script-id",async function(p){let g=p.target.closest(".user-collect-item"),b=g.dataset.id;g.dataset.name;let h=a.loading("删除中..."),S=await y.getUserCollectionInfo(n,b);if(!S){h.close();return}let m=new FormData,k=new FormData;for(const[U,C]of S.entries())m.append(U,C),!(U==="scripts-included[]"&&C.toString()===e.toString())&&k.append(U,C);m.set("remove-scripts-included[]",r),m.set("remove-selected-scripts","i"),m.delete("script-action"),k.set("save","1");let v=new URLSearchParams(m),E=new URLSearchParams(k),T=Array.from(v).map(([U,C])=>`${encodeURIComponent(U)}=${encodeURIComponent(C)}`).join("&"),A=Array.from(E).map(([U,C])=>`${encodeURIComponent(U)}=${encodeURIComponent(C)}`).join("&");if(c.info(["删除的数据",T]),c.info(["保存的数据",A]),!await y.updateUserSetsInfo(n,b,T)){h.close();return}await y.updateUserSetsInfo(n,b,A),a.success("删除成功"),h.close();});});});},repairImgShow(){window.innerWidth<window.innerHeight&&(c.info("修复图片显示问题"),x(`
            img.lum-img{
                width: 100% !important;
                height: 100% !important;
            }
          `));},optimizeImageBrowsing(){c.info("优化图片浏览"),x(ne("ViewerCSS")),x(`
        @media (max-width: 460px) {
          .lum-lightbox-image-wrapper {
              display:flex;
              overflow: auto;
              -webkit-overflow-scrolling: touch
          }
      
          .lum-lightbox-caption {
              width: 100%;
              position: absolute;
              bottom: 0
          }
      
          .lum-lightbox-position-helper {
              margin: auto
          }
      
          .lum-lightbox-inner img {
              max-width:100%;
              max-height:100%;
          }
        }
        `);function t(r=[],n=0){let o="";r.forEach(u=>{o+=`<li><img data-src="${u}" loading="lazy"></li>`;});let i=l.createElement("ul",{innerHTML:o}),s=new re(i,{inline:!1,url:"data-src",zIndex:f.getMaxZIndex()+100,hidden:()=>{s.destroy();}});n=n<0?0:n,s.view(n),s.zoomTo(1),s.show();}function e(r){return r.getAttribute("data-src")||r.getAttribute("src")||r.getAttribute("alt")}l.on(document,"click","img",function(r){var g;let n=r.target;if(((g=n.parentElement)==null?void 0:g.localName)==="a"&&n.hasAttribute("data-screenshots")||n.closest(".viewer-container")||n.closest(".lum-lightbox-position-helper"))return;let o=n.closest(".user-content"),i=[],s=0,u=[],p=e(n);p!=null&&p.startsWith("https://img.shields.io")||(o?(o.querySelectorAll("img").forEach(b=>{u.push(b);let h=e(b),S=b.parentElement;(S==null?void 0:S.localName)==="a"&&(h=S.getAttribute("data-href")||S.href),i.push(h);}),s=u.indexOf(n),s===-1&&(s=0)):(i.push(p),s=0),c.success(["点击浏览图片👉",i,s]),t(i,s));}),document.querySelectorAll(".user-screenshots").forEach(r=>{let n=r.querySelector("a");if(!n)return;let o=n.getAttribute("data-href")||n.getAttribute("href"),i=r.querySelector("img");i&&(i.setAttribute("data-screenshots","true"),i.setAttribute("data-src",o),n.setAttribute("href","javascript:;"),l.after(n,i),n.remove());});},overlayBedImageClickEvent(){c.info("覆盖图床图片的parentElement的a标签"),document.querySelectorAll(".user-content a>img").forEach(t=>{let e=t.parentElement,r=e.getAttribute("href");e.setAttribute("data-href",r),e.removeAttribute("href"),l.on(e,"click",void 0,function(n){a.warning(`<div style="overflow-wrap: anywhere;">拦截跳转：<a href="${r}" target="_blank">${r}</a></div>`,{html:!0,timeout:5e3,zIndex:f.getMaxZIndex()});});});},async scriptHomepageAddedTodaySUpdate(){if(!L.isScript()||!document.querySelector("#install-area"))return;c.info("脚本首页新增今日更新");let t=await y.getScriptStats(y.getScriptId());if(!t)return;let e=f.toJSON(t.responseText);c.info(["统计信息",e]);let r=e[f.formatTime(void 0,"yyyy-MM-dd")];if(!r){c.error("今日份的统计信息不存在");return}let n=r.update_checks;c.info(["今日统计信息",r]),l.after("dd.script-show-daily-installs",l.createElement("dt",{className:"script-show-daily-update_checks",innerHTML:"<span>今日检查</span>"})),l.after("dt.script-show-daily-update_checks",l.createElement("dd",{className:"script-show-daily-update_checks",innerHTML:"<span>"+n+"</span>"}));},addCopyCodeButton(){c.info("添加复制代码按钮"),f.waitNode("div#script-content div.code-container").then(t=>{let e=l.createElement("button",{textContent:"复制代码"},{style:"margin-bottom: 1em;"});l.on(e,"click",async function(){let r=a.loading("加载文件中..."),n=await _.get(`https://greasyfork.org/zh-CN/scripts/${y.getScriptId()}.json`,{fetch:!0,responseType:"json"});if(!n.status){r.close();return}let i=f.toJSON(n.data.responseText).code_url;c.success(["代码地址：",i]);let s=await _.get(i);if(!s.status){r.close();return}r.close(),f.setClip(s.data.responseText),a.success("复制成功");}),l.before(t,e);});},fullScreenOptimization(){c.info("F11全屏，F键代码全屏"),x(`
        .code-wide-screen{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          max-width: 100%;
          max-height: 100%;
          z-index: 10000;
        }
        `);let t=!1;l.keydown(window,function(e){if(e.key.toLowerCase()==="f"){let r=document.querySelector("#script-content div.code-container code");e.altKey&&e.shiftKey?(f.preventEvent(e),r.classList.contains("code-wide-screen")?r.classList.remove("code-wide-screen"):r.classList.add("code-wide-screen")):!e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.metaKey&&(f.preventEvent(e),t?(f.exitFullScreen(r),t=!1):(f.enterFullScreen(r),t=!0));}},{capture:!0});},addMarkdownCopyButton(){c.info("在Markdown右上角添加复制按钮"),x(`
        pre{
          position: relative;
          margin-bottom: 0px !important;
          width: 100%;
        }
        `),x(`
        .snippet-clipboard-content{
          display: flex;
          justify-content: space-between;
          background: rgb(246, 248, 250);
          margin-bottom: 16px;
        }
        .zeroclipboard-container {
          /* right: 0;
          top: 0;
          position: absolute; */
          box-sizing: border-box;
          display: flex;
          font-size: 16px;
          line-height: 24px;
          text-size-adjust: 100%;
          overflow-wrap: break-word;
          width: fit-content;
          height: fit-content;
        }
        .zeroclipboard-container svg{
            vertical-align: text-bottom;
            display: inline-block;
            overflow: visible;
            fill: currentColor;
            margin: 8px;
        }
        .zeroclipboard-container svg[aria-hidden="true"]{
          display: none;
        }
        clipboard-copy.js-clipboard-copy {
          position: relative;
          padding: 0px;
          color: rgb(36, 41, 47);
          background-color: rgb(246, 248, 250);
          transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
          transition-property: color,background-color,box-shadow,border-color;
          display: inline-block;
          font-size: 14px;
          line-height: 20px;
          white-space: nowrap;
          vertical-align: middle;
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
          border: 1px solid rgba(31, 35, 40, 0.15);
          -webkit-appearance: none;
          appearance: none;
          box-shadow: rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
          margin: 8px;
          overflow-wrap: break-word;
          text-wrap: nowrap;
          border-radius: 6px;
        }
        clipboard-copy.js-clipboard-copy[success]{
          border-color: rgb(31, 136, 61);
          box-shadow: 0 0 0 0.2em rgba(52,208,88,.4);
        }
        clipboard-copy.js-clipboard-copy:hover{
          background-color: rgb(243, 244, 246);
          border-color: rgba(31, 35, 40, 0.15);
          transition-duration: .1s;
        }
        clipboard-copy.js-clipboard-copy:active{
          background-color: rgb(235, 236, 240);
          border-color: rgba(31, 35, 40, 0.15);
          transition: none;
        }
        `),x(`
        .pops-tip.github-tooltip {
          border-radius: 6px;
          padding: 6px 8px;
        }
        
        .pops-tip.github-tooltip, .pops-tip.github-tooltip .pops-tip-arrow::after {
          background: rgb(36, 41, 47);
          color: #fff;
        }
        
        .pops-tip.github-tooltip .pops-tip-arrow::after {
          width: 8px;
          height: 8px;
        }
        `);function t(){let e=l.createElement("div",{className:"zeroclipboard-container",innerHTML:`
            <clipboard-copy class="js-clipboard-copy">
              <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-copy">
                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
              </svg>
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-check-copy">
                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
            </clipboard-copy>
            `}),r=e.querySelector(".js-clipboard-copy"),n=e.querySelector(".octicon-copy"),o=e.querySelector(".octicon-check-copy");return l.on(e,"click",function(){let i=e.parentElement.querySelector("code");if(!i&&e.parentElement.className.includes("prettyprinted")&&(i=e.parentElement),!i){a.error("未找到code元素");return}f.setClip(i.innerText||i.textContent),r.setAttribute("success","true"),n.setAttribute("aria-hidden","true"),o.removeAttribute("aria-hidden");let s=q.tooltip({target:r,content:"✅ 复制成功!",position:"left",className:"github-tooltip",alwaysShow:!0});setTimeout(()=>{r.removeAttribute("success"),o.setAttribute("aria-hidden","true"),n.removeAttribute("aria-hidden"),s.close();},2e3);}),e}document.querySelectorAll("pre").forEach(e=>{if(e.querySelector("div.zeroclipboard-container"))return;let n=t(),o=l.createElement("div",{className:"snippet-clipboard-content"});l.before(e,o),o.appendChild(e),o.appendChild(n);});},languageSelectorLocale(){let t=d.getValue("language-selector-locale"),e=window.location.pathname.split("/").filter(r=>!!r)[0];if(c.success("选择语言："+t),c.success("当前语言："+e),!f.isNull(t)&&t!==e){let r=null,n=y.getSwitchLanguageUrl(t);y.switchLanguage(n),c.success("新Url："+n),a.loading(`当前语言：${e}，3秒后切换至：${t}`,{timeout:3e3,showClose:!0,onClose(){clearTimeout(r);}}),a.info("导航至："+n,{timeout:3e3}),r=setTimeout(()=>{window.location.href=n;},3e3);}},async UIScriptList(t,e,r,n){var b,h,S;if(!w.isLogin){a.error("请先登录账号！");return}let i=w.getUserLinkElement().href,s=(S=(h=(b=i==null?void 0:i.split("/"))==null?void 0:b.pop())==null?void 0:h.match(/([0-9]+)/))==null?void 0:S[0],u=q.loading({mask:{enable:!0},parent:n,content:{text:"获取信息中，请稍后..."},addIndexCSS:!1}),p=await y.getUserInfo(s);if(u.close(),!p)return;c.info(p);let g=t==="script-list"?p.scriptList:p.scriptLibraryList;a.success(`获取成功，共 ${g.length} 个`);for(const m of g){let k=l.createElement("li",{className:"w-script-list-item",innerHTML:`
            <div class="w-script-info">
              <div class="w-script-name">
                <a href="${m.url}" target="_blank">${m.name}</a>
              </div>
              <div class="w-script-fan-score">
                <p>评分：${m.fan_score}</p>
              </div>
              <div class="w-script-locale">
                <p>语言：${m.locale}</p>
              </div>
              <div class="w-script-version">
                <p>版本：${m.version}</p>
              </div>
              <div class="w-script-update-time">
                <p>更新：${f.getDaysDifference(new Date(m.code_updated_at).getTime(),void 0,"auto")}前</p>
              </div>
            </div>
            `}),v=k.querySelector(".w-script-info"),E=l.createElement("div",{className:"pops-panel-button",innerHTML:`
            <button type="primary" data-icon="" data-righticon="false">
              <span>同步代码</span>
            </button>
            `});m.deleted&&(k.classList.add("w-script-deleted"),E.querySelector("button").setAttribute("disabled","true")),l.on(E,"click",void 0,async function(){c.success(["同步",m]);let T=E.querySelector("button"),A=E.querySelector("button span"),$=l.createElement("i",{className:"pops-bottom-icon",innerHTML:q.config.iconSVG.loading},{"is-loading":!0});T.setAttribute("disabled","true"),T.setAttribute("data-icon","true"),A.innerText="同步中...",l.before(A,$);let U=m==null?void 0:m.id,C=await y.getSourceCodeSyncFormData(U.toString());if(C){const H="script[script_sync_type_id]";if(C.has(H)){let V=C.get(H),z="";V.toString()==="1"?z="手动":V.toString()==="2"?z="自动":V.toString()==="3"&&(z="webhook");let K=k.querySelector(".w-script-sync-type");K?K.querySelector("p").innerText=`同步方式：${z}`:l.append(v,`
                    <div class="w-script-sync-type">
                      <p>同步方式：${z}</p>
                    </div>
                    `),await y.sourceCodeSync(m.id.toString(),C)?a.success("同步成功"):a.error("同步失败");}else a.error("该脚本未设置同步信息");}T.removeAttribute("disabled"),T.removeAttribute("data-icon"),A.innerText="同步代码",$.remove();}),k.appendChild(E),n.appendChild(k);}},checkPage(){c.info("检测gf页面是否正确加载，有时候会出现"),l.ready(()=>{if(document.body.firstElementChild&&document.body.firstElementChild.localName==="p"&&document.body.firstElementChild.innerText.includes("We're down for maintenance. Check back again soon.")){let t=parseInt(R("greasyfork-check-page-time",0));if(t&&Date.now()-t<5*1e3){a.error(`上次重载时间 ${f.formatTime(t,"yyyy-MM-dd HH:mm:ss")}，5秒内拒绝反复重载`);return}j("greasyfork-check-page-time",Date.now()),window.location.reload();}});}},Ee={id:"greasy-fork-panel-config-script-list",title:"脚本列表",callback(t,e,r){M.UIScriptList("script-list",t,e,r);},forms:[]},Le={id:"greasy-fork-panel-config-library",title:"库",callback(t,e,r){M.UIScriptList("script-library",t,e,r);},forms:[]},Ue=`.w-script-list-item {\r
	padding: 10px 0;\r
	border-bottom: 1px solid #e5e5e5;\r
	font-size: 16px;\r
	text-align: left;\r
}\r
.w-script-version,\r
.w-script-fan-score,\r
.w-script-create-time,\r
.w-script-update-time,\r
.w-script-locale,\r
.w-script-sync-type {\r
	font-size: 14px;\r
	color: #7c7c7c;\r
}\r
.w-script-fan-score {\r
	margin-left: unset !important;\r
	text-align: unset !important;\r
	max-width: unset !important;\r
}\r
.w-script-deleted {\r
	text-decoration: line-through;\r
	font-style: italic;\r
	color: red;\r
}\r
.w-script-deleted .w-script-name::before {\r
	content: "【删除】";\r
}\r
`,d={$data:{data:new f.Dictionary,oneSuccessExecMenu:new f.Dictionary,onceExec:new f.Dictionary,scriptName:W,key:D,attributeKeyName:B,attributeDefaultValueName:G},$listener:{listenData:new f.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){N.top===N.self&&X.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let t=this;function e(n){if(!n.attributes)return;let o=n.attributes[B],i=n.attributes[G];if(o==null){c.warn(["请先配置键",n]);return}t.$data.data.has(o)&&c.warn("请检查该key(已存在): "+o),t.$data.data.set(o,i);}let r=this.getPanelContentConfig();for(let n=0;n<r.length;n++){let o=r[n];if(!o.forms)continue;let i=o.forms;for(let s=0;s<i.length;s++){let u=i[s];if(u.forms){let p=u.forms;for(let g=0;g<p.length;g++)e(p[g]);}else e(u);}}},setValue(t,e){let r=R(D,{}),n=r[t];r[t]=e,j(D,r),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,n,e);},getValue(t,e){let n=R(D,{})[t];return n??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=R(D,{}),r=e[t];Reflect.deleteProperty(e,t),j(D,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,void 0);},addValueChangeListener(t,e){let r=Math.random();return this.$listener.listenData.set(t,{id:r,key:t,callback:e}),r},removeValueChangeListener(t){let e=null;for(const[r,n]of this.$listener.listenData.entries())if(n.id===t){e=r;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},hasKey(t){let e=R(D,{});return t in e},execMenu(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){c.warn(`${t} 键不存在`);return}let r=d.getValue(t);r&&e(r);},execMenuOnce(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){c.warn(`${t} 键不存在`);return}let r=d.getValue(t);if(r){if(this.$data.oneSuccessExecMenu.has(t))return;e(r),this.$data.oneSuccessExecMenu.set(t,1);}},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){q.panel({title:{text:`${W}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0,style:Ue});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [le,de,pe,ue,Ee,Le]}};d.init();M.init();

})(Qmsg, DOMUtils, Utils, Viewer);