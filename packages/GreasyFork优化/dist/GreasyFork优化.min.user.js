// ==UserScript==
// @name               GreasyFork优化
// @name:en-US         GreasyFork Optimization
// @namespace          https://github.com/WhiteSevs/TamperMonkeyScript
// @version            2024.6.11.12
// @author             WhiteSevs
// @description        自动登录账号、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库、优化图片浏览、美化页面、Markdown复制按钮
// @description:en-US  Automatically log in to the account, quickly find your own library referenced by other scripts, update your own script list, library, optimize image browsing, beautify the page, Markdown copy button
// @license            GPL-3.0-only
// @icon               data:image/png;base64,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
// @supportURL         https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match              *://greasyfork.org/*
// @require            https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require            https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require            https://cdn.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require            https://cdn.jsdelivr.net/npm/@whitesev/utils@1.4.3/dist/index.umd.js
// @require            https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.1.1/dist/index.umd.js
// @require            https://cdn.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.js
// @require            https://cdn.jsdelivr.net/npm/i18next@23.11.5/i18next.min.js
// @resource           ViewerCSS  https://cdn.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css
// @connect            greasyfork.org
// @grant              GM_addStyle
// @grant              GM_deleteValue
// @grant              GM_getResourceText
// @grant              GM_getValue
// @grant              GM_info
// @grant              GM_registerMenuCommand
// @grant              GM_setValue
// @grant              GM_unregisterMenuCommand
// @grant              GM_xmlhttpRequest
// @grant              unsafeWindow
// @run-at             document-start
// ==/UserScript==

(t=>{function d(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head?document.head.appendChild(e):document.body?document.body.appendChild(e):document.documentElement.childNodes.length===0?document.documentElement.appendChild(e):document.documentElement.insertBefore(e,document.documentElement.childNodes[0]),e}if(typeof GM_addStyle=="function"){GM_addStyle(t);return}d(t)})(" .whitesev-hide{display:none}.whitesev-hide-important{display:none!important} ");

(function (s, re, ne, n, oe) {
	'use strict';

	var S=typeof GM_addStyle<"u"?GM_addStyle:void 0,ie=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,B=typeof GM_getValue<"u"?GM_getValue:void 0,O=typeof GM_info<"u"?GM_info:void 0,ae=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,j=typeof GM_setValue<"u"?GM_setValue:void 0,se=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,le=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,V=typeof unsafeWindow<"u"?unsafeWindow:void 0,Q=window;const ce={GreasyFork优化:"GreasyFork优化",请求取消:"请求取消",请求超时:"请求超时",请求异常:"请求异常",通用:"通用",账号:"账号",密码:"密码",语言:"语言","账号/密码":"账号/密码",请输入账号:"请输入账号",请输入密码:"请输入密码",自动登录:"自动登录",自动登录当前保存的账号:"自动登录当前保存的账号","清空账号/密码":"清空账号/密码",点击清空:"点击清空","确定清空账号和密码？":"确定清空账号和密码？","已清空账号/密码":"已清空账号/密码","源代码同步【脚本列表】":"源代码同步【脚本列表】",一键同步:"一键同步",前往用户主页:"前往用户主页",获取当前已登录的用户主页失败:"获取当前已登录的用户主页失败","源代码同步【未上架的脚本】":"源代码同步【未上架的脚本】","源代码同步【库】":"源代码同步【库】",论坛:"论坛",功能:"功能",过滤重复的评论:"过滤重复的评论","过滤掉重复的评论数量(≥2)":"过滤掉重复的评论数量(≥2)","过滤脚本(id)":"过滤脚本(id)","请输入脚本id，每行一个":"请输入脚本id，每行一个","过滤发布的用户(id)":"过滤发布的用户(id)","请输入用户id，每行一个":"请输入用户id，每行一个","过滤回复的用户(id)":"过滤回复的用户(id)",优化:"优化",固定当前语言:"固定当前语言",无:"无","如button、input、textarea":"如button、input、textarea",更直观的查看版本迭代:"更直观的查看版本迭代",美化上传图片按钮:"美化上传图片按钮",放大上传区域:"放大上传区域",优化图片浏览:"优化图片浏览",使用Viewer浏览图片:"使用Viewer浏览图片",覆盖图床图片跳转:"覆盖图床图片跳转","配合上面的【优化图片浏览】更优雅浏览图片":"配合上面的【优化图片浏览】更优雅浏览图片",'需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>':'需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>',代码:"代码",添加复制代码按钮:"添加复制代码按钮",更优雅的复制:"更优雅的复制",快捷键:"快捷键","【F】键全屏、【Alt+Shift+F】键宽屏":"【F】键全屏、【Alt+Shift+F】键宽屏",库:"库",脚本列表:"脚本列表",屏蔽:"屏蔽","规则(可正则)":"规则(可正则)","请输入屏蔽规则，每行一个":"请输入屏蔽规则，每行一个",请求admin内容失败:"请求admin内容失败",解析admin的源代码同步表单失败:"解析admin的源代码同步表单失败",源代码同步失败:"源代码同步失败",获取用户信息失败:"获取用户信息失败",获取用户的收藏集失败:"获取用户的收藏集失败","解析Script Sets失败":"解析Script Sets失败","获取收藏集{{setsId}}失败":"获取收藏集{{setsId}}失败","获取表单元素#edit_script_set失败":"获取表单元素#edit_script_set失败",更新收藏集表单请求失败:"更新收藏集表单请求失败",请先在菜单中录入账号:"请先在菜单中录入账号",请先在菜单中录入密码:"请先在菜单中录入密码","获取csrf-token失败":"获取csrf-token失败","正在登录中...":"正在登录中...","登录失败，请在控制台查看原因":"登录失败，请在控制台查看原因","登录成功，1s后自动跳转":"登录成功，1s后自动跳转","登录失败，可能是账号/密码错误，请在控制台查看原因":"登录失败，可能是账号/密码错误，请在控制台查看原因","美化 历史版本 页面":"美化 历史版本 页面",未找到history_versions元素列表:"未找到history_versions元素列表","yyyy年MM月dd日 HH:mm:ss":"yyyy-MM-dd HH:mm:ss","美化 Greasyfork Beautify脚本":"美化 Greasyfork Beautify脚本","❌ 最多同时长传5张图":"❌ 最多同时长传5张图片","❌ 图片：{{name}} 大小：{{size}}":"❌ 图片：{{name}} 大小：{{size}}","已过滤：{{oldCount}}":"已过滤：{{oldCount}}",寻找引用:"寻找引用",获取脚本id失败:"获取脚本id失败",收藏:"收藏",请先登录账号:"请先登录账号",获取用户id失败:"获取用户id失败","获取收藏夹中...":"获取收藏夹中...",收藏集:"收藏集","添加中...":"添加中...","添加失败，{{selector}}元素不存在":"添加失败，{{selector}}元素不存在","未找到{{selector}}元素":"未找到{{selector}}元素",添加失败:"添加失败",添加成功:"添加成功","删除中...":"删除中...",删除成功:"删除成功",添加:"添加",刪除:"刪除","拦截跳转：":"拦截跳转：",今日检查:"今日检查",复制代码:"复制代码","加载文件中...":"加载文件中...",复制成功:"复制成功","✅ 复制成功!":"✅ 复制成功!","当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}":"当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}","导航至：":"导航至：","请先登录账号！":"请先登录账号！","获取信息中，请稍后...":"获取信息中，请稍后...","获取成功，共 {{count}} 个":"获取成功，共 {{count}} 个","评分：":"评分：","语言：":"语言：","版本：":"版本：","更新：":"更新：",同步代码:"同步代码","同步中...":"同步中...",手动:"手动",自动:"自动","同步方式：{{syncMode}}":"同步方式：{{syncMode}}",同步成功:"同步成功",同步失败:"同步失败",该脚本未设置同步信息:"该脚本未设置同步信息","上次重载时间 {{time}}，5秒内拒绝反复重载":"上次重载时间 {{time}}，5秒内拒绝反复重载","名称：":"名称：","进度：":"进度：","未获取到【脚本列表】":"未获取到【脚本列表】","源代码同步成功，3秒后更新下一个":"源代码同步成功，3秒后更新下一个",全部更新失败:"全部更新失败","全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}":"全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}","⚙ 设置":"⚙ 设置","{{SCRIPT_NAME}}-设置":"{{SCRIPT_NAME}}-设置",美化页面元素:"美化页面元素",美化历史版本页面:"美化历史版本页面","美化Greasyfork Beautify脚本":"美化Greasyfork Beautify脚本"},de={GreasyFork优化:"GreasyFork Optimization",请求取消:"http request cancel",请求超时:"http request timeout",请求异常:"http request error",通用:"General",账号:"Account",密码:"Password",语言:"Language","账号/密码":"Account/Password",请输入账号:"Please enter your account number",请输入密码:"Please enter password",自动登录:"Auto Login",自动登录当前保存的账号:"Automatically log in to the currently saved account","清空账号/密码":"Clear account/password",点击清空:"Clear","确定清空账号和密码？":"Are you sure to clear your account and password?","已清空账号/密码":"Account/password cleared","源代码同步【脚本列表】":"Source Code Synchronization [Script List]",一键同步:"Sync All",前往用户主页:"Go to the user's homepage",获取当前已登录的用户主页失败:"Failed to retrieve the currently logged in user's homepage","源代码同步【未上架的脚本】":"Source code synchronization [Script not listed]","源代码同步【库】":"Source code synchronization 【 Library 】",论坛:"Forum",功能:"Function",过滤重复的评论:"Filter duplicate comments","过滤掉重复的评论数量(≥2)":"Filter out duplicate comments (≥ 2)","过滤脚本(id)":"Filter script (id)","请输入脚本id，每行一个":"Please enter the script ID, one per line","过滤发布的用户(id)":"Filter published users (id)","请输入用户id，每行一个":"Please enter the user ID, one per line","过滤回复的用户(id)":"User (ID) who filters replies",优化:"Optimization",固定当前语言:"Fix current language",无:"nothing","如button、input、textarea":"For example button、input、textarea",更直观的查看版本迭代:"More intuitive viewing of version iterations",美化上传图片按钮:"Beautify upload image button",放大上传区域:"Enlarge the upload area",优化图片浏览:"Optimize image browsing",使用Viewer浏览图片:"Using Viewer to browse images",覆盖图床图片跳转:"Overlay bed image jump","配合上面的【优化图片浏览】更优雅浏览图片":"Collaborate with the optimization of image browsing above to browse images more elegantly",'需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>':'Greasyfork Beauty script needs to be installed，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐 Click me to install</a>',代码:"Code",添加复制代码按钮:"Add Copy Code Button",更优雅的复制:"More elegant replication",快捷键:"Shortcut keys","【F】键全屏、【Alt+Shift+F】键宽屏":"【F】 Key full screen, [Alt+Shift+F] key wide screen",库:"Library",脚本列表:"Script List",屏蔽:"Shield","规则(可正则)":"Rules (regularizable)","请输入屏蔽规则，每行一个":"Please enter a blocking rule, one per line",请求admin内容失败:"Request for admin content failed",解析admin的源代码同步表单失败:"Failed to parse the source code of admin and synchronize the form",源代码同步失败:"Source code synchronization failed",获取用户信息失败:"Failed to obtain user information",获取用户的收藏集失败:"Failed to retrieve user's collection","解析Script Sets失败":"Parsing Script Sets failed","获取收藏集{{setsId}}失败":"Failed to retrieve collection {{setsId}}","获取表单元素#edit_script_set失败":"Failed to retrieve form element #edit_script_set",更新收藏集表单请求失败:"Update collection form request failed",请先在菜单中录入账号:"Please enter your account in the menu first",请先在菜单中录入密码:"Please enter your password in the menu first","获取csrf-token失败":"Failed to obtain csrf token","正在登录中...":"Logging in...","登录失败，请在控制台查看原因":"Login failed, please check the reason in the console","登录成功，1s后自动跳转":"Login successful, automatically redirect after 1 second","登录失败，可能是账号/密码错误，请在控制台查看原因":"Login failed, possibly due to incorrect account/password. Please check the reason in the console","美化 历史版本 页面":"Beautify the historical version page",未找到history_versions元素列表:"History_versions element list not found","yyyy年MM月dd日 HH:mm:ss":"yyyy-MM-dd HH:mm:ss","美化 Greasyfork Beautify脚本":"Beautify Greasyfork Beauty Script","❌ 最多同时长传5张图":"❌ Upload up to 5 images simultaneously","❌ 图片：{{name}} 大小：{{size}}":"❌ Image:{{name}} Size:{{size}}","已过滤：{{oldCount}}":"Filtered:{{oldCount}}",寻找引用:"Find references",获取脚本id失败:"Failed to obtain script ID",收藏:"Collection",请先登录账号:"Please log in to your account first",获取用户id失败:"Failed to obtain user ID","获取收藏夹中...":"Get in favorites...",收藏集:"Collection","添加中...":"Adding...","添加失败，{{selector}}元素不存在":"Add failed, {{selector}} element does not exist","未找到{{selector}}元素":"{{selector}} element not found",添加失败:"Add failed",添加成功:"Successfully added","删除中...":"Deleting...",删除成功:"Delete successful",添加:"Add in deletion",刪除:"Delete","拦截跳转：":"Intercept jump:",今日检查:"Today's inspection",复制代码:"Copy Code","加载文件中...":"Loading files...",复制成功:"Copy successful","✅ 复制成功!":"✅ Copy successful!","当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}":"Current language: {{currentLocaleLanguage}}, switch to {{localeLanguage}} in 3 seconds","导航至：":"Navigation to:","请先登录账号！":"Please log in to your account first!","获取信息中，请稍后...":"Obtaining information, please wait...","获取成功，共 {{count}} 个":"Successfully obtained, a total of {{count}}","评分：":"Rating:","语言：":"Language:","版本：":"Version:","更新：":"Update:",同步代码:"Synchronize Code","同步中...":"Synchronizing...",手动:"Manual",自动:"Automatic","同步方式：{{syncMode}}":"Synchronization method: {{syncMode}}",同步成功:"Sync successful",同步失败:"Sync failed",该脚本未设置同步信息:"The script has not set synchronization information","上次重载时间 {{time}}，5秒内拒绝反复重载":"Last reload time {{time}}, rejected repeated reloads within 5 seconds","名称：":"Name:","进度：":"Progress:","未获取到【脚本列表】":"Unable to obtain [Script List]","源代码同步成功，3秒后更新下一个":"Source code synchronization successful, update next one in 3 seconds",全部更新失败:"All updates failed","全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}":"All updates completed<br>Success: {{successNums}}<br>Failure: {{failed Nums}}<br>Total: {{scriptUrlListLength}}","⚙ 设置":"⚙  Setting","{{SCRIPT_NAME}}-设置":"{{SCRIPT_NAME}}-Setting",美化页面元素:"Beautify page elements",美化历史版本页面:"Beautify the historical version page","美化Greasyfork Beautify脚本":"Beautify Greasyfork Beauty Script"},D="GM_Panel",P="data-key",H="data-default-value",ue=function(){let e=B(D,{})["setting-language"]||"zh-CN";n.init({lng:e,fallbackLng:"zh-CN",resources:{"zh-CN":{translation:{...ce}},"en-US":{translation:{...de}}}});};ue();const pe=n.t("GreasyFork优化"),f=ne.noConflict(),d=re.noConflict(),q=Q.pops||V.pops,c=new f.Log(O,V.console||Q.console);var J;const Y=((J=O==null?void 0:O.script)==null?void 0:J.name)||pe,X=!1;c.config({debug:X,logMaxCount:2e4,autoClearConsole:!0,tag:!0});s.config(Object.defineProperty({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0,zIndex:f.getMaxZIndex(10)},"zIndex",{get(){return f.getMaxZIndex(10)}}));const ee=new f.GM_Menu({GM_getValue:B,GM_setValue:j,GM_registerMenuCommand:ae,GM_unregisterMenuCommand:se}),I=new f.Httpx(le);I.config({logDetails:X,onabort(){s.warning(n.t("请求取消"));},ontimeout(){s.error(n.t("请求超时"));},onerror(t){s.error(n.t("请求异常")),c.error(["httpx-onerror 请求异常",t]);}});V.Object.defineProperty,V.Function.prototype.apply,V.Function.prototype.call,V.Element.prototype.appendChild,V.setTimeout;const $=function(t,e,r,o,a,i,l,m){return {text:t,type:"button",description:e,buttonIcon:o,buttonIsRightIcon:a,buttonIconIsLoading:i,buttonType:l,buttonText:r,callback(y){typeof m=="function"&&m(y);},afterAddToUListCallBack:void 0}},Z=function(t,e,r,o,a,i="",l,m){let p={text:t,type:"input",isNumber:!!l,isPassword:!!m,attributes:{},description:o,getValue(){return u.getValue(e,r)},callback(y,w){u.setValue(e,w);},placeholder:i};return p.attributes&&(p.attributes[P]=e,p.attributes[H]=r),p},z=function(t,e,r,o,a){let i={text:t,type:"switch",description:a,attributes:{},getValue(){return !!u.getValue(e,r)},callback(l,m){c.success(`${m?"开启":"关闭"} ${t}`),u.setValue(e,!!m);},afterAddToUListCallBack:void 0};return i.attributes&&(i.attributes[P]=e,i.attributes[H]=!!r),i},b={getCodeSearchUrl(t){return "https://greasyfork.org/zh-CN/scripts/code-search?c="+t},getAdminUrl(t){return t+"/admin"},getScriptId(t){var e,r;return (r=(e=t||window.location.pathname)==null?void 0:e.match(/\/scripts\/([\d]+)/i))==null?void 0:r[1]},getUserId(t){var e;return (e=(t||window.location.pathname).match(/\/users\/([\d]+)/i))==null?void 0:e[1]},getScriptName(t){let e=window.location.pathname;t!=null&&(e=new URL(t).pathname),e=decodeURIComponent(e);let r=e.split("/");for(const o of r){let a=o.match(/[\d]+/);if(a&&a.length)return a[1]}},getSwitchLanguageUrl(t="zh-CN"){let e=window.location.origin,r=window.location.pathname.split("/");return r[1]=t,e=e+r.join("/"),e+=window.location.search,window.location.search===""?e+="?locale_override=1":window.location.search.includes("locale_override=1")||(e+="&locale_override=1"),e},async getScriptStats(t){return new Promise(async e=>{let r=await I.get({url:`https://greasyfork.org/scripts/${t}/stats.json`,fetch:!0,onerror(){},ontimeout(){}});if(!r.status){e(null);return}let o=r.data;e(o);})},async getSourceCodeSyncFormData(t){let e=await I.get(`https://greasyfork.org/zh-CN/scripts/${t}/admin`,{fetch:!0});if(c.success(e),!e.status){s.error(n.t("请求admin内容失败"));return}let r=e.data.responseText,a=d.parseHTML(r,!1,!0).querySelector("form.edit_script");if(!a){s.error(n.t("解析admin的源代码同步表单失败"));return}return new FormData(a)},async sourceCodeSync(t,e){let r=await I.post(`https://greasyfork.org/zh-CN/scripts/${t}/sync_update`,{fetch:!0,data:e});if(c.success(r),!r.status){s.error(n.t("源代码同步失败"));return}return r},async getUserInfo(t){let e=await I.get(`https://greasyfork.org/zh-CN/users/${t}.json`,{fetch:!0});if(c.success(e),!e.status){s.error(n.t("获取用户信息失败"));return}let r=f.toJSON(e.data.responseText);return r.scriptList=[],r.scriptLibraryList=[],r.scripts.forEach(o=>{o.code_url.endsWith(".user.js")?r.scriptList.push(o):r.scriptLibraryList.push(o);}),r},async getUserCollection(t){let e=await I.get(`https://greasyfork.org/zh-CN/users/${t}`,{fetch:!0});if(c.info(["获取用户的收藏集",e]),!e.status){s.error(n.t("获取用户的收藏集失败"));return}let r=e.data.responseText,a=d.parseHTML(r,!0,!0).querySelector("#user-script-sets");if(!a){c.error("解析Script Sets失败");return}let i=[];return a.querySelectorAll("li").forEach(l=>{var g;let m=l.querySelector("a:last-child");if(!m)return;let p=m.href;if(p.includes("?fav=1"))return;let y=l.querySelector("a").innerText,w=(g=p.match(/\/sets\/([\d]+)\//))==null?void 0:g[1];i.push({id:w,name:y});}),i},async getUserCollectionInfo(t,e){let r=await I.get(`https://greasyfork.org/zh-CN/users/${t}/sets/${e}/edit`,{fetch:!0});if(!r.status){s.error(n.t("获取收藏集{{setsId}}失败",{setsId:e}));return}let o=r.data.responseText,a=d.parseHTML(o,!0,!0),i=a.querySelector('form[id^="edit_script_set"]');if(!i){s.error(n.t("获取表单元素#edit_script_set失败"));return}let l=new FormData(i),m=a.querySelector('meta[name="csrf-token"]');if(!m)throw new Error("获取表单csrfToken失败");if(m.hasAttribute("content")){let p=m.getAttribute("content");p&&l.set("authenticity_token",p);}return l},async updateUserSetsInfo(t,e,r){let o=await I.post(`https://greasyfork.org/zh-CN/users/${t}/sets/${e}`,{fetch:!0,headers:{accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded",pragma:"no-cache"},fetchInit:{referrerPolicy:"strict-origin-when-cross-origin"},data:r});if(!o.status){s.error(n.t("更新收藏集表单请求失败"));return}let a=o.data.responseText;return d.parseHTML(a,!0,!0)},async switchLanguage(t){let e=await I.get(t,{fetch:!0,headers:{"Upgrade-Insecure-Requests":"1"}});e.status&&c.info(e);}},U={isCode(){var t;return (t=window.location.pathname.split("/"))==null?void 0:t.includes("code")},isCodeStrict(){return window.location.pathname.endsWith("/code")},isVersion(){return window.location.pathname.endsWith("/versions")},isUserHome(){return window.location.pathname.match(/\/.+\/users\/.+/gi)},isScript(){return window.location.pathname.includes("/scripts/")},isScriptList(){return window.location.pathname.endsWith("/scripts")},isDiscuessions(){return window.location.pathname.endsWith("/discussions")}},x={menu:ee,isLogin:!1,initEnv(){let t=this.getUserLinkElement();this.isLogin=!!t;},getUserLinkElement(){return document.querySelector("#nav-user-info span.user-profile-link a")},async updateScript(t){let e=function(r,o=1){return `
			<div style="display: flex;flex-direction: column;align-items: flex-start;">
				<div style="height: 30px;line-height: 30px;">${n.t("名称：")}${r}</div>
				<div style="height: 30px;line-height: 30px;">${n.t("进度：")}${o}/${t.length}</div>
			</div>`};if(f.isNull(t))s.error(n.t("未获取到【脚本列表】"));else {let r=s.loading(e(b.getScriptName(t[0])),{html:!0}),o=0,a=0;for(let i=0;i<t.length;i++){let l=t[i],m=b.getScriptId(l);c.success("更新："+l);let p=b.getScriptName(l);r.setHTML(e(p,i+1));let y=await b.getSourceCodeSyncFormData(m);y?await b.sourceCodeSync(m,y)?(s.success(n.t("源代码同步成功，3秒后更新下一个")),await f.sleep(3e3),o++):(s.error(n.t("源代码同步失败")),a++):(s.error(n.t("源代码同步失败")),a++);}r.close(),o===0?s.error(n.t("全部更新失败")):s.success(n.t("全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}",{successNums:o,failedNums:a,scriptUrlListLength:t.length}),{html:!0});}},handleLocalGotoCallBack(){if(u.getValue("goto_updateSettingsAndSynchronize_scriptList")){if(u.deleteValue("goto_updateSettingsAndSynchronize_scriptList"),!U.isUserHome()){u.setValue("goto_updateSettingsAndSynchronize_scriptList",!0),x.getUserLinkElement()?(s.success(n.t("前往用户主页")),window.location.href=x.getUserLinkElement().href):s.error(n.t("获取当前已登录的用户主页失败"));return}let t=[];document.querySelectorAll("#user-script-list-section li a.script-link").forEach(e=>{t=t.concat(b.getAdminUrl(e.href));}),x.updateScript(t);}else if(u.getValue("goto_updateSettingsAndSynchronize_unlistedScriptList")){if(u.deleteValue("goto_updateSettingsAndSynchronize_unlistedScriptList"),!U.isUserHome()){u.setValue("goto_updateSettingsAndSynchronize_unlistedScriptList",!0),x.getUserLinkElement()?(s.success(n.t("前往用户主页")),window.location.href=x.getUserLinkElement().href):s.error(n.t("获取当前已登录的用户主页失败"));return}let t=[];document.querySelectorAll("#user-unlisted-script-list li a.script-link").forEach(e=>{t=t.concat(b.getAdminUrl(e.href));}),x.updateScript(t);}else if(u.getValue("goto_updateSettingsAndSynchronize_libraryScriptList")){if(u.deleteValue("goto_updateSettingsAndSynchronize_libraryScriptList"),!U.isUserHome()){u.setValue("goto_updateSettingsAndSynchronize_libraryScriptList",!0),x.getUserLinkElement()?(s.success(n.t("前往用户主页")),window.location.href=x.getUserLinkElement().href):s.error(n.t("获取当前已登录的用户主页失败"));return}let t=[];document.querySelectorAll("#user-library-script-list li a.script-link").forEach(e=>{t=t.concat(b.getAdminUrl(e.href));}),x.updateScript(t);}}},te=function(t,e,r,o,a,i){let l=[];typeof o=="function"?l=o():l=o;let m={text:t,type:"select",description:i,attributes:{},getValue(){return u.getValue(e,r)},callback(p,y,w){u.setValue(e,y),typeof a=="function"&&a(p,y,w);},data:l};return m.attributes&&(m.attributes[P]=e,m.attributes[H]=r),m},fe={id:"greasy-fork-panel-config-account",title:n.t("通用"),forms:[{text:n.t("账号/密码"),type:"forms",forms:[Z(n.t("账号"),"user","",void 0,void 0,n.t("请输入账号")),Z(n.t("密码"),"pwd","",void 0,void 0,n.t("请输入密码"),!1,!0)]},{text:n.t("功能"),type:"forms",forms:[te(n.t("语言"),"setting-language","zh-CN",[{value:"zh-CN",text:"中文"},{value:"en-US",text:"English"}],(t,e,r)=>{c.info("改变语言："+r),n.changeLanguage(e);}),z(n.t("自动登录"),"autoLogin",!0,void 0,n.t("自动登录当前保存的账号")),$(n.t("清空账号/密码"),void 0,n.t("点击清空"),void 0,void 0,!1,"default",t=>{if(confirm(n.t("确定清空账号和密码？"))){u.deleteValue("user"),u.deleteValue("pwd"),s.success(n.t("已清空账号/密码"));let e=t.target.getRootNode();e.querySelector('li[data-key="user"] .pops-panel-input input').value="",e.querySelector('li[data-key="pwd"] .pops-panel-input input').value="";}}),$(n.t("源代码同步【脚本列表】"),void 0,n.t("一键同步"),void 0,void 0,!1,"primary",t=>{if(!U.isUserHome()){u.setValue("goto_updateSettingsAndSynchronize_scriptList",!0),x.getUserLinkElement()?(s.success(n.t("前往用户主页")),window.location.href=x.getUserLinkElement().href):s.error(n.t("获取当前已登录的用户主页失败"));return}let e=[];document.querySelectorAll("#user-script-list-section li a.script-link").forEach(r=>{e=e.concat(b.getAdminUrl(r.href));}),x.updateScript(e);}),$(n.t("源代码同步【未上架的脚本】"),void 0,n.t("一键同步"),void 0,void 0,!1,"primary",t=>{if(!U.isUserHome()){u.setValue("goto_updateSettingsAndSynchronize_unlistedScriptList",!0),x.getUserLinkElement()?(s.success(n.t("前往用户主页")),window.location.href=x.getUserLinkElement().href):s.error(n.t("获取当前已登录的用户主页失败"));return}let e=[];document.querySelectorAll("#user-unlisted-script-list li a.script-link").forEach(r=>{e=e.concat(b.getAdminUrl(r.href));}),x.updateScript(e);}),$(n.t("源代码同步【库】"),void 0,n.t("一键同步"),void 0,void 0,!1,"primary",t=>{if(!U.isUserHome()){u.setValue("goto_updateSettingsAndSynchronize_libraryScriptList",!0),x.getUserLinkElement()?(s.success(n.t("前往用户主页")),window.location.href=x.getUserLinkElement().href):s.error(n.t("获取当前已登录的用户主页失败"));return}let e=[];document.querySelectorAll("#user-library-script-list li a.script-link").forEach(r=>{e=e.concat(b.getAdminUrl(r.href));}),x.updateScript(e);})]}]},me={id:"greasy-fork-panel-config-optimization",title:n.t("优化"),forms:[{text:n.t("功能"),type:"forms",forms:[te(n.t("固定当前语言"),"language-selector-locale","",function(){let t=[{value:"",text:n.t("无")}];return document.querySelectorAll("select#language-selector-locale option").forEach(e=>{let r=e.getAttribute("value");if(r==="help")return;let o=(e.innerText||e.textContent).trim();t.push({value:r,text:o});}),t}()),z(n.t("美化页面元素"),"beautifyPage",!0,void 0,n.t("如button、input、textarea")),z(n.t("美化历史版本页面"),"beautifyHistoryVersionPage",!0,void 0,n.t("更直观的查看版本迭代")),z(n.t("美化上传图片按钮"),"beautifyUploadImage",!0,void 0,n.t("放大上传区域")),z(n.t("优化图片浏览"),"optimizeImageBrowsing",!0,void 0,n.t("使用Viewer浏览图片")),z(n.t("覆盖图床图片跳转"),"overlayBedImageClickEvent",!0,void 0,n.t("配合上面的【优化图片浏览】更优雅浏览图片")),z(n.t("美化Greasyfork Beautify脚本"),"beautifyGreasyforkBeautify",!0,void 0,n.t('需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>'))]},{text:n.t("代码"),type:"forms",forms:[z(n.t("添加复制代码按钮"),"addCopyCodeButton",!0,void 0,n.t("更优雅的复制")),z(n.t("快捷键"),"fullScreenOptimization",!0,void 0,n.t("【F】键全屏、【Alt+Shift+F】键宽屏"))]}]},he={id:"greasy-fork-panel-config-discussions",title:n.t("论坛"),forms:[{text:n.t("功能"),type:"forms",forms:[z(n.t("过滤重复的评论"),"greasyfork-discussions-filter-duplicate-comments",!1,void 0,n.t("过滤掉重复的评论数量(≥2)"))]},{text:n.t("过滤脚本(id)"),type:"forms",forms:[{type:"own",getLiElementCallBack(t){let e=d.createElement("div",{className:"pops-panel-textarea",innerHTML:`
								<textarea placeholder="${n.t("请输入脚本id，每行一个")}" style="height:150px;"></textarea>`},{style:"width: 100%;"}),r=e.querySelector("textarea");const o="greasyfork-discussions-filter-script";return r.value=u.getValue(o,""),d.on(r,["input","propertychange"],void 0,f.debounce(function(a){u.setValue(o,r.value);},200)),t.appendChild(e),t}}]},{text:n.t("过滤发布的用户(id)"),type:"forms",forms:[{type:"own",getLiElementCallBack(t){let e=d.createElement("div",{className:"pops-panel-textarea",innerHTML:`
								<textarea placeholder="${n.t("请输入用户id，每行一个")}" style="height:150px;"></textarea>`},{style:"width: 100%;"}),r=e.querySelector("textarea");const o="greasyfork-discussions-filter-post-user";return r.value=u.getValue(o,""),d.on(r,["input","propertychange"],void 0,f.debounce(function(a){u.setValue(o,r.value);},200)),t.appendChild(e),t}}]},{text:n.t("过滤回复的用户(id)"),type:"forms",forms:[{type:"own",getLiElementCallBack(t){let e=d.createElement("div",{className:"pops-panel-textarea",innerHTML:`
								<textarea placeholder="${n.t("请输入用户id，每行一个")}" style="height:150px;"></textarea>`},{style:"width: 100%;"}),r=e.querySelector("textarea");const o="greasyfork-discussions-filter-reply-user";return r.value=u.getValue(o,""),d.on(r,["input","propertychange"],void 0,f.debounce(function(a){u.setValue(o,r.value);},200)),t.appendChild(e),t}}]}]},K={key:"gf-shield-rule",init(){let t=new f.LockFunction(()=>{this.filter();},50);d.ready(()=>{f.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{t.run();}}),t.run();});},filter(){document.querySelectorAll("#browse-script-list > li").forEach(t=>{let e=t.dataset,r=t.querySelector(".script-description");e.scriptDescription=(r==null?void 0:r.innerText)||(r==null?void 0:r.textContent)||"";let o=f.toJSON(e.scriptAuthors);if(f.isNotNull(o)){let i=Object.keys(o)[0],l=o[i];e.scriptAuthorId=i,e.scriptAuthorName=l;}e.scriptRatingScore=parseFloat(e.scriptRatingScore);let a=this.getValue().split(`
`);for(const i of a){let l=i.split("##"),m=l[0],p=l[1];if(m==="scriptRatingScore"){if(p.startsWith(">")){if(e.scriptRatingScore>parseFloat(p.slice(1))){c.info(["触发过滤规则",[i,e]]),t.remove();break}}else if(p.startsWith("<")&&e.scriptRatingScore<parseFloat(p.slice(1))){c.info(["触发过滤规则",[i,e]]),t.remove();break}}else if(m in e||m==="scriptDescription"){if(typeof p!="string")continue;let y=new RegExp(p,"ig");if(e[m].match(y)){c.info(["触发过滤规则",[i,e]]),t.remove();break}}}});},setValue(t){u.setValue(this.key,t);},getValue(){return u.getValue(this.key,"")}},ge={id:"greasy-fork-panel-config-shield",title:n.t("屏蔽"),forms:[{text:n.t("规则(可正则)"),type:"forms",forms:[{type:"own",getLiElementCallBack(t){let e=d.createElement("div",{className:"pops-panel-textarea",innerHTML:`<textarea placeholder="${n.t("请输入屏蔽规则，每行一个")}" style="height:350px;"></textarea>`},{style:"width: 100%;"}),r=e.querySelector("textarea");return r.value=K.getValue(),d.on(r,["input","propertychange"],void 0,f.debounce(function(){K.setValue(r.value);},200)),t.appendChild(e),t}}]}]},ye=`code {\r
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
`,be=`/* 美化按钮 */\r
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
`,we=`label.radio-label {\r
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
`,xe=`textarea {\r
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
`,Se=`ul.history_versions,\r
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
`,ve=`/* 隐藏 添加： */\r
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
`,ke=`#main-header {\r
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
`,Ce={init(){u.execMenuOnce("beautifyPage",()=>{this.beautifyPageElement();}),U.isVersion()&&u.execMenuOnce("beautifyHistoryVersionPage",()=>{this.beautifyHistoryVersionPage();}),u.execMenuOnce("beautifyGreasyforkBeautify",()=>{this.beautifyGreasyforkBeautify();}),u.execMenuOnce("beautifyUploadImage",()=>{this.beautifyUploadImage();});},beautifyPageElement(){c.info("美化页面元素"),S(ye),S(be),S(we),S(xe),S(`
        p:has(input[type="submit"][name="update-and-sync"]){
          margin-top: 10px;
        }
        `),d.ready(function(){let t=document.querySelector('a[target="markup_choice"][href*="daringfireball.net"]');t&&t.parentElement.replaceChild(d.createElement("span",{textContent:"Markdown"}),t),globalThis.location.pathname.endsWith("/admin")&&!document.querySelector('input[type="submit"][name="update-only"]')&&S(`
                .indented{
                    padding-left: unset;
                }
                `);});},beautifyHistoryVersionPage(){c.info("美化 历史版本 页面");let t=`
        .version-number,
        .version-date,
        .version-changelog{
          display: none;
        }
        `;S(Se),S(t),d.ready(function(){let e=document.querySelector("ul.history_versions");if(!e){s.error(n.t("未找到history_versions元素列表"));return}Array.from(e.children).forEach(r=>{var w,g;let o=r.querySelector(".version-number a").href,a=r.querySelector(".version-number a").innerText,i=(w=r.querySelector(".version-date"))==null?void 0:w.getAttribute("datetime"),l=((g=r.querySelector(".version-changelog"))==null?void 0:g.innerHTML)||"",m=d.createElement("span",{className:"script-version-date",innerHTML:f.formatTime(i,n.t("yyyy年MM月dd日 HH:mm:ss"))}),p=d.createElement("div",{className:"script-tag",innerHTML:`
                    <div class="script-tag-version">
                        <a href="${o}" class="flex-align-item-center">
                        <svg aria-label="Tag" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                        </svg>
                        <span>${a}</span>
                        </a>
                    </div>`}),y=d.createElement("div",{className:"script-note-box-body",innerHTML:l});r.appendChild(m),r.appendChild(p),r.appendChild(y);});});},beautifyGreasyforkBeautify(){c.info("美化 Greasyfork Beautify脚本"),S(ke),f.isPhone()?S(`
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
            }`):S(`
            section#script-info{
                margin-top: 10px;
            }`);},beautifyUploadImage(){S(ve),d.ready(function(){function t(r){for(;r.nextElementSibling;)r.parentElement.removeChild(r.nextElementSibling);}document.querySelectorAll('input[type="file"]').forEach(r=>{r.getAttribute("name")!=="code_upload"&&(r.hasAttribute("accept")&&r.getAttribute("accept").includes("javascript")||d.on(r,"change",function(o){t(o.target);let a=o.currentTarget.files;if(!a||a.length===0)return;c.info(["选择的图片",a]),a.length>5&&d.after(r,d.createElement("p",{textContent:n.t("❌ 最多同时长传5张图片")}));let i=[];Array.from(a).forEach(l=>{(l.size>204800||!l.type.match(/png|gif|jpeg|webp/i))&&i.push(l);}),i.length!==0&&i.forEach(l=>{d.after(r,d.createElement("p",{textContent:n.t("❌ 图片：{{name}} 大小：{{size}}",{name:l.name,size:l.size})}));});}));});});}},Le={init(){this.repairCodeLineNumber();},repairCodeLineNumber(){c.info("修复代码的行号显示不够问题"),u.getValue("beautifyGreasyforkBeautify")&&S(`
			.code-container pre code .marker{
				padding-left: 6px;
			}	
			`),f.waitNode("#script-content div.code-container pre.prettyprint ol").then(t=>{t.childElementCount>=1e3&&(c.success(`当前代码行数${t.childElementCount}行，超过1000行，优化行号显示问题`),S(`
                    pre.prettyprint{
                        padding-left: 26px;
                    }
					`));});}},Ee={init(){u.execMenu("autoLogin",()=>{this.autoLogin();});},autoLogin(){f.waitNode("span.sign-in-link a[rel=nofollow]").then(async()=>{let t=u.getValue("user"),e=u.getValue("pwd");if(f.isNull(t)){s.error(n.t("请先在菜单中录入账号"));return}if(f.isNull(e)){s.error(n.t("请先在菜单中录入密码"));return}let r=document.querySelector("meta[name='csrf-token']");if(!r){s.error(n.t("获取csrf-token失败"));return}let o=s.loading(n.t("正在登录中...")),a=await I.post("https://greasyfork.org/zh-CN/users/sign_in",{fetch:!0,data:encodeURI(`authenticity_token=${r.getAttribute("content")}&user[email]=${t}&user[password]=${e}&user[remember_me]=1&commit=登录`),headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(o.destroy(),!a.status){c.error(a),s.error(n.t("登录失败，请在控制台查看原因"));return}let i=a.data.responseText;d.parseHTML(i,!0,!0).querySelectorAll(".sign-out-link a[rel=nofollow][data-method='delete']").length?(s.success(n.t("登录成功，1s后自动跳转")),setTimeout(()=>{window.location.reload();},1e3)):(c.error(a),c.error(`当前账号:${t}`),c.error(`当前密码:${e}`),s.error(n.t("登录失败，可能是账号/密码错误，请在控制台查看原因")));});}},Ue={init(){c.info("论坛-过滤"),S(`
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
        `);let t=new f.LockFunction(()=>{this.filterDiscussions();},50);f.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{t.run();}}),t.run();},filterDiscussions(){const t="greasyfork-discussions-filter-script",e="greasyfork-discussions-filter-post-user",r="greasyfork-discussions-filter-reply-user",o=u.getValue(t,""),a=u.getValue(e,""),i=u.getValue(r,""),l=o.trim()===""?[]:o.split(`
`),m=a.trim()===""?[]:a.split(`
`),p=i.trim()===""?[]:i.split(`
`),y=new Map;document.querySelectorAll(".discussion-list-container").forEach((g,k)=>{var C;if(!g.querySelector("a.script-link"))return;const h={scriptName:g.querySelector("a.script-link").innerText,scriptUrl:g.querySelector("a.script-link").href,scriptId:b.getScriptId(g.querySelector("a.script-link").href),postUserName:g.querySelector("a.user-link").innerText,postUserHomeUrl:g.querySelector("a.user-link").href,postUserId:b.getUserId(g.querySelector("a.user-link").href),postTimeStamp:new Date(g.querySelector("relative-time").getAttribute("datetime")),snippetUrl:g.querySelector("a.discussion-title").href,snippet:g.querySelector("span.discussion-snippet").innerText,replyUserName:void 0,replyUserHomeUrl:void 0,replyUserId:void 0,replyTimeStamp:void 0};if(g.querySelector(".discussion-meta-item .discussion-meta-item")&&(h.replyUserName=g.querySelector(".discussion-meta-item .discussion-meta-item a.user-link").innerText,h.replyUserHomeUrl=g.querySelector(".discussion-meta-item .discussion-meta-item a.user-link").href,h.replyUserId=b.getUserId(h.replyUserHomeUrl),h.replyTimeStamp=new Date((C=g.querySelector(".discussion-meta-item .discussion-meta-item relative-time"))==null?void 0:C.getAttribute("datetime"))),y.has(h.snippet)&&u.getValue("greasyfork-discussions-filter-duplicate-comments")){let v=y.get(h.snippet).querySelector("a.discussion-title");v.setAttribute("data-repeat-tip-show","true");let E=0;v.hasAttribute("data-repeat-count")&&(E=parseInt(v.getAttribute("data-repeat-count"))),E++,v.setAttribute("data-repeat-count",E.toString()),v.setAttribute("data-repeat-tip-show",n.t("已过滤：{{oldCount}}",{oldCount:E})),c.success([`过滤重复内容：${h.snippet}`,h]),g.remove();return}y.set(h.snippet,g);for(const v of l)if(h.scriptId===v){c.success([`过滤脚本id：${h.scriptId}`,h]),g.remove();return}for(const v of m)if(h.postUserId===v){c.success([`过滤发布用户id：${h.postUserId}`,h]),g.remove();return}if(h.replyUserName){for(const v of p)if(h.replyUserId===v){c.success([`过滤回复用户id：${h.replyUserId}`,h]),g.remove();return}}});}},Me={init(){d.ready(()=>{Ue.init();});}},_={init(){this.checkPage(),Ce.init(),U.isCodeStrict()&&u.execMenuOnce("fullScreenOptimization",()=>{this.fullScreenOptimization();}),U.isCode()&&Le.init(),U.isDiscuessions()&&Me.init(),d.ready(()=>{x.initEnv(),Ee.init(),U.isScriptList()&&K.init(),x.handleLocalGotoCallBack(),_.setFindCodeSearchBtn(),_.setCollectScriptBtn(),_.repairImgShow(),_.scriptHomepageAddedTodaySUpdate(),_.languageSelectorLocale(),u.execMenuOnce("optimizeImageBrowsing",()=>{_.optimizeImageBrowsing();}),u.execMenuOnce("overlayBedImageClickEvent",()=>{_.overlayBedImageClickEvent();}),U.isCodeStrict()&&u.execMenuOnce("addCopyCodeButton",()=>{_.addCopyCodeButton();}),U.isCodeStrict()||_.addMarkdownCopyButton();});},setFindCodeSearchBtn(){c.info("设置代码搜索按钮(对于库)"),f.waitNode("ul#script-links li.current span").then(()=>{let t=d.createElement("li",{innerHTML:`
					<a href="javascript:;">
						<span>${n.t("寻找引用")}</span>
					</a>`});d.append(document.querySelector("ul#script-links"),t),d.on(t,"click",async function(){let e=window.location.pathname.match(/scripts\/([\d]+)/i);if(!e){c.error([e,window.location.pathname]),s.error(n.t("获取脚本id失败"));return}let r=e[e.length-1];window.location.href=b.getCodeSearchUrl(`greasyfork.org/scripts/${r}`);});});},setCollectScriptBtn(){c.info("添加收藏按钮"),f.waitNode("ul#script-links li.current span").then(()=>{let t=d.createElement("li",{innerHTML:`
					<a href="javascript:;">
						<span>${n.t("收藏")}</span>
					</a>`});d.append(document.querySelector("ul#script-links"),t),d.on(t,"click",async function(){let e=window.location.pathname.match(/scripts\/([\d]+)/i);if(!e){c.error([e,window.location.pathname]),s.error(n.t("获取脚本id失败"));return}let r=e[e.length-1];if(!x.isLogin){c.error("请先登录账号"),s.error(n.t("请先登录账号"));return}let o=b.getUserId(x.getUserLinkElement().href);if(o==null){c.error("获取用户id失败"),s.error(n.t("获取用户id失败"));return}let a=s.loading(n.t("获取收藏夹中...")),i=await b.getUserCollection(o);if(a.close(),!i)return;let l="";i.forEach(p=>{l+=`
						<li class="user-collect-item" data-id="${p.id}" data-name="${p.name}">
							<div class="user-collect-name">${p.name}</div>
							<div class="user-collect-btn-container">
							<div class="pops-panel-button collect-add-script-id">
								<button type="primary" data-icon="" data-righticon="">
								<span>${n.t("添加")}</span>
								</button>
							</div>
							<div class="pops-panel-button collect-delete-script-id">
								<button type="danger" data-icon="" data-righticon="">
								<span>${n.t("刪除")}</span>
								</button>
							</div>
							</div>
						</li>
              			`;});let m=q.alert({title:{text:n.t("收藏集"),position:"center"},content:{html:!0,text:`<ul>${l}</ul>`},mask:{enable:!0,clickEvent:{toClose:!0}},btn:{ok:{enable:!1}},width:q.isPhone()?"92dvw":"500px",height:"auto",drag:!0,only:!0,style:`
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
						`});d.on(m.$shadowRoot,"click",".collect-add-script-id",async function(p){let y=p.target.closest(".user-collect-item"),w=y.dataset.id;y.dataset.name;let g=s.loading(n.t("添加中...")),k=await b.getUserCollectionInfo(o,w);if(!k){g.close();return}let h=f.cloneFormData(k),C=f.cloneFormData(k);h.set("add-script",r),h.set("script-action","i"),C.append("scripts-included[]",r),C.set("save","1");let v=new URLSearchParams(h),E=new URLSearchParams(C),A=Array.from(v).map(([F,N])=>`${encodeURIComponent(F)}=${encodeURIComponent(N)}`).join("&"),T=Array.from(E).map(([F,N])=>`${encodeURIComponent(F)}=${encodeURIComponent(N)}`).join("&");c.info(["添加的数据",A]),c.info(["保存的数据",T]);let R=await b.updateUserSetsInfo(o,w,A);if(!R){g.close();return}let M=R.querySelector(".change-script-set");if(!M){s.error(n.t("添加失败，{{selector}}元素不存在",{selector:".change-script-set"})),g.close();return}let L=M.querySelector("section");if(!L){s.error(n.t("添加失败，{{selector}}元素不存在",{selector:"section"})),g.close();return}let G=L.querySelector(".alert");G?q.alert({title:{text:n.t("添加失败"),position:"center"},content:{text:G.innerHTML,html:!0},mask:{enable:!0,clickEvent:{toClose:!0}},style:`
									.pops-alert-content{
										font-style: italic;
										background-color: #ffc;
										border: none;
										border-left: 6px solid #FFEB3B;
										padding: .5em;
									}
                                	`,drag:!0,dragLimit:!0,width:q.isPhone()?"88vw":"400px",height:q.isPhone()?"50vh":"300px"}):(await b.updateUserSetsInfo(o,w,T),s.success(n.t("添加成功"))),g.close();}),d.on(m.$shadowRoot,"click",".collect-delete-script-id",async function(p){let y=p.target.closest(".user-collect-item"),w=y.dataset.id;y.dataset.name;let g=s.loading(n.t("删除中...")),k=await b.getUserCollectionInfo(o,w);if(!k){g.close();return}let h=new FormData,C=new FormData;for(const[M,L]of k.entries())h.append(M,L),!(M==="scripts-included[]"&&L.toString()===e.toString())&&C.append(M,L);h.set("remove-scripts-included[]",r),h.set("remove-selected-scripts","i"),h.delete("script-action"),C.set("save","1");let v=new URLSearchParams(h),E=new URLSearchParams(C),A=Array.from(v).map(([M,L])=>`${encodeURIComponent(M)}=${encodeURIComponent(L)}`).join("&"),T=Array.from(E).map(([M,L])=>`${encodeURIComponent(M)}=${encodeURIComponent(L)}`).join("&");if(c.info(["删除的数据",A]),c.info(["保存的数据",T]),!await b.updateUserSetsInfo(o,w,A)){g.close();return}await b.updateUserSetsInfo(o,w,T),s.success(n.t("删除成功")),g.close();});});});},repairImgShow(){window.innerWidth<window.innerHeight&&(c.info("修复图片显示问题"),S(`
            img.lum-img{
                width: 100% !important;
                height: 100% !important;
            }
          `));},optimizeImageBrowsing(){c.info("优化图片浏览"),S(ie("ViewerCSS")),S(`
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
        `);function t(r=[],o=0){let a="";r.forEach(m=>{a+=`<li><img data-src="${m}" loading="lazy"></li>`;});let i=d.createElement("ul",{innerHTML:a}),l=new oe(i,{inline:!1,url:"data-src",zIndex:f.getMaxZIndex()+100,hidden:()=>{l.destroy();}});o=o<0?0:o,l.view(o),l.zoomTo(1),l.show();}function e(r){return r.getAttribute("data-src")||r.getAttribute("src")||r.getAttribute("alt")}d.on(document,"click","img",function(r){var y;let o=r.target;if(((y=o.parentElement)==null?void 0:y.localName)==="a"&&o.hasAttribute("data-screenshots")||o.closest(".viewer-container")||o.closest(".lum-lightbox-position-helper"))return;let a=o.closest(".user-content"),i=[],l=0,m=[],p=e(o);p!=null&&p.startsWith("https://img.shields.io")||(a?(a.querySelectorAll("img").forEach(w=>{m.push(w);let g=e(w),k=w.parentElement;(k==null?void 0:k.localName)==="a"&&(g=k.getAttribute("data-href")||k.href),i.push(g);}),l=m.indexOf(o),l===-1&&(l=0)):(i.push(p),l=0),c.success(["点击浏览图片👉",i,l]),t(i,l));}),document.querySelectorAll(".user-screenshots").forEach(r=>{let o=r.querySelector("a");if(!o)return;let a=o.getAttribute("data-href")||o.getAttribute("href"),i=r.querySelector("img");i&&(i.setAttribute("data-screenshots","true"),i.setAttribute("data-src",a),o.setAttribute("href","javascript:;"),d.after(o,i),o.remove());});},overlayBedImageClickEvent(){c.info("覆盖图床图片的parentElement的a标签"),document.querySelectorAll(".user-content a>img").forEach(t=>{let e=t.parentElement,r=e.getAttribute("href");e.setAttribute("data-href",r),e.removeAttribute("href"),d.on(e,"click",void 0,function(o){s.warning(`<div style="overflow-wrap: anywhere;">${n.t("拦截跳转：")}<a href="${r}" target="_blank">${r}</a></div>`,{html:!0,timeout:5e3,zIndex:f.getMaxZIndex()});});});},async scriptHomepageAddedTodaySUpdate(){if(!U.isScript()||!document.querySelector("#install-area"))return;c.info("脚本首页新增今日更新");let t=await b.getScriptStats(b.getScriptId());if(!t)return;let e=f.toJSON(t.responseText);c.info(["统计信息",e]);let r=e[f.formatTime(void 0,"yyyy-MM-dd")];if(!r){c.error("今日份的统计信息不存在");return}let o=r.update_checks;c.info(["今日统计信息",r]),d.after("dd.script-show-daily-installs",d.createElement("dt",{className:"script-show-daily-update_checks",innerHTML:`<span>${n.t("今日检查")}</span>`})),d.after("dt.script-show-daily-update_checks",d.createElement("dd",{className:"script-show-daily-update_checks",innerHTML:"<span>"+o+"</span>"}));},addCopyCodeButton(){c.info("添加复制代码按钮"),f.waitNode("div#script-content div.code-container").then(t=>{let e=d.createElement("button",{textContent:n.t("复制代码")},{style:"margin-bottom: 1em;"});d.on(e,"click",async function(){let r=s.loading(n.t("加载文件中...")),o=await I.get(`https://greasyfork.org/zh-CN/scripts/${b.getScriptId()}.json`,{fetch:!0,responseType:"json"});if(!o.status){r.close();return}let i=f.toJSON(o.data.responseText).code_url;c.success(["代码地址：",i]);let l=await I.get(i);if(!l.status){r.close();return}r.close(),f.setClip(l.data.responseText),s.success(n.t("复制成功"));}),d.before(t,e);});},fullScreenOptimization(){c.info("F11全屏，F键代码全屏"),S(`
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
        `);let t=!1;d.keydown(window,function(e){if(e.key.toLowerCase()==="f"){let r=document.querySelector("#script-content div.code-container code");e.altKey&&e.shiftKey?(f.preventEvent(e),r.classList.contains("code-wide-screen")?r.classList.remove("code-wide-screen"):r.classList.add("code-wide-screen")):!e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.metaKey&&(f.preventEvent(e),t?(f.exitFullScreen(r),t=!1):(f.enterFullScreen(r),t=!0));}},{capture:!0});},addMarkdownCopyButton(){c.info("在Markdown右上角添加复制按钮"),S(`
        pre{
          position: relative;
          margin-bottom: 0px !important;
          width: 100%;
        }
        `),S(`
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
        `),S(`
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
        `);function t(){let e=d.createElement("div",{className:"zeroclipboard-container",innerHTML:`
				<clipboard-copy class="js-clipboard-copy">
				<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-copy">
					<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
				</svg>
				<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-check-copy">
					<path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
				</svg>
				</clipboard-copy>
            `}),r=e.querySelector(".js-clipboard-copy"),o=e.querySelector(".octicon-copy"),a=e.querySelector(".octicon-check-copy");return d.on(e,"click",function(){let i=e.parentElement.querySelector("code");if(!i&&e.parentElement.className.includes("prettyprinted")&&(i=e.parentElement),!i){s.error(n.t("未找到{{selector}}元素",{selector:"code"}));return}f.setClip(i.innerText||i.textContent),r.setAttribute("success","true"),o.setAttribute("aria-hidden","true"),a.removeAttribute("aria-hidden");let l=q.tooltip({target:r,content:n.t("✅ 复制成功!"),position:"left",className:"github-tooltip",alwaysShow:!0});setTimeout(()=>{r.removeAttribute("success"),a.setAttribute("aria-hidden","true"),o.removeAttribute("aria-hidden"),l.close();},2e3);}),e}document.querySelectorAll("pre").forEach(e=>{if(e.querySelector("div.zeroclipboard-container"))return;let o=t(),a=d.createElement("div",{className:"snippet-clipboard-content"});d.before(e,a),a.appendChild(e),a.appendChild(o);});},languageSelectorLocale(){let t=u.getValue("language-selector-locale"),e=window.location.pathname.split("/").filter(r=>!!r)[0];if(c.success("选择语言："+t),c.success("当前语言："+e),!f.isNull(t)&&t!==e){let r=null,o=b.getSwitchLanguageUrl(t);b.switchLanguage(o),c.success("新Url："+o),s.loading(n.t("当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}",{currentLocaleLanguage:e,localeLanguage:t}),{timeout:3e3,showClose:!0,onClose(){clearTimeout(r);}}),s.info(n.t("导航至：")+o,{timeout:3e3}),r=setTimeout(()=>{window.location.href=o;},3e3);}},async UIScriptList(t,e,r,o){var w,g,k;if(!x.isLogin){s.error(n.t("请先登录账号！"));return}let i=x.getUserLinkElement().href,l=(k=(g=(w=i==null?void 0:i.split("/"))==null?void 0:w.pop())==null?void 0:g.match(/([0-9]+)/))==null?void 0:k[0],m=q.loading({mask:{enable:!0},parent:o,content:{text:n.t("获取信息中，请稍后...")},addIndexCSS:!1}),p=await b.getUserInfo(l);if(m.close(),!p)return;c.info(p);let y=t==="script-list"?p.scriptList:p.scriptLibraryList;s.success(n.t("获取成功，共 {{count}} 个",{count:y.length}));for(const h of y){let C=d.createElement("li",{className:"w-script-list-item",innerHTML:`
				<div class="w-script-info">
				<div class="w-script-name">
					<a href="${h.url}" target="_blank">${h.name}</a>
				</div>
				<div class="w-script-fan-score">
					<p>${n.t("评分：")}${h.fan_score}</p>
				</div>
				<div class="w-script-locale">
					<p>${n.t("语言：")}${h.locale}</p>
				</div>
				<div class="w-script-version">
					<p>${n.t("版本：")}${h.version}</p>
				</div>
				<div class="w-script-update-time">
					<p>${n.t("更新：")}${f.getDaysDifference(new Date(h.code_updated_at).getTime(),void 0,"auto")}前</p>
				</div>
				</div>
            `}),v=C.querySelector(".w-script-info"),E=d.createElement("div",{className:"pops-panel-button",innerHTML:`
				<button type="primary" data-icon="" data-righticon="false">
				<span>${n.t("同步代码")}</span>
				</button>
				`});h.deleted&&(C.classList.add("w-script-deleted"),E.querySelector("button").setAttribute("disabled","true")),d.on(E,"click",void 0,async function(){c.success(["同步",h]);let A=E.querySelector("button"),T=E.querySelector("button span"),R=d.createElement("i",{className:"pops-bottom-icon",innerHTML:q.config.iconSVG.loading},{"is-loading":!0});A.setAttribute("disabled","true"),A.setAttribute("data-icon","true"),T.innerText=n.t("同步中..."),d.before(T,R);let M=h==null?void 0:h.id,L=await b.getSourceCodeSyncFormData(M.toString());if(L){const G="script[script_sync_type_id]";if(L.has(G)){let F=L.get(G),N="";F.toString()==="1"?N=n.t("手动"):F.toString()==="2"?N=n.t("自动"):F.toString()==="3"&&(N="webhook");let W=C.querySelector(".w-script-sync-type");W?W.querySelector("p").innerText=n.t("同步方式：{{syncMode}}",{syncMode:N}):d.append(v,`
								<div class="w-script-sync-type">
									<p>${n.t("同步方式：{{syncMode}}",{syncMode:N})}
									</p>
								</div>`),await b.sourceCodeSync(h.id.toString(),L)?s.success(n.t("同步成功")):s.error(n.t("同步失败"));}else s.error(n.t("该脚本未设置同步信息"));}A.removeAttribute("disabled"),A.removeAttribute("data-icon"),T.innerText=n.t("同步代码"),R.remove();}),C.appendChild(E),o.appendChild(C);}},checkPage(){c.info("检测gf页面是否正确加载，有时候会出现"),d.ready(()=>{if(document.body.firstElementChild&&document.body.firstElementChild.localName==="p"&&document.body.firstElementChild.innerText.includes("We're down for maintenance. Check back again soon.")){let t=parseInt(B("greasyfork-check-page-time",0));if(t&&Date.now()-t<5*1e3){s.error(n.t("上次重载时间 {{time}}，5秒内拒绝反复重载",{time:f.formatTime(t,"yyyy-MM-dd HH:mm:ss")}));return}j("greasyfork-check-page-time",Date.now()),window.location.reload();}});}},_e={id:"greasy-fork-panel-config-script-list",title:n.t("脚本列表"),callback(t,e,r){_.UIScriptList("script-list",t,e,r);},forms:[]},Ie={id:"greasy-fork-panel-config-library",title:n.t("库"),callback(t,e,r){_.UIScriptList("script-library",t,e,r);},forms:[]},Ae=`.w-script-list-item {\r
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
\r
li[data-key="user"] .pops-panel-input,\r
li[data-key="pwd"] .pops-panel-input {\r
	max-width: 200px;\r
}\r
`,u={$data:{data:new f.Dictionary,oneSuccessExecMenu:new f.Dictionary,onceExec:new f.Dictionary,scriptName:Y,key:D,attributeKeyName:P,attributeDefaultValueName:H},$listener:{listenData:new f.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){V.top===V.self&&ee.add([{key:"show_pops_panel_setting",text:n.t("⚙ 设置"),autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let t=this;function e(o){if(!o.attributes)return;let a=o.attributes[P],i=o.attributes[H];if(a==null){c.warn(["请先配置键",o]);return}t.$data.data.has(a)&&c.warn("请检查该key(已存在): "+a),t.$data.data.set(a,i);}let r=this.getPanelContentConfig();for(let o=0;o<r.length;o++){let a=r[o];if(!a.forms)continue;let i=a.forms;for(let l=0;l<i.length;l++){let m=i[l];if(m.forms){let p=m.forms;for(let y=0;y<p.length;y++)e(p[y]);}else e(m);}}},setValue(t,e){let r=B(D,{}),o=r[t];r[t]=e,j(D,r),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,o,e);},getValue(t,e){let o=B(D,{})[t];return o??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=B(D,{}),r=e[t];Reflect.deleteProperty(e,t),j(D,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,void 0);},addValueChangeListener(t,e){let r=Math.random();return this.$listener.listenData.set(t,{id:r,key:t,callback:e}),r},removeValueChangeListener(t){let e=null;for(const[r,o]of this.$listener.listenData.entries())if(o.id===t){e=r;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},hasKey(t){let e=B(D,{});return t in e},execMenu(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){c.warn(`${t} 键不存在`);return}let r=u.getValue(t);r&&e(r);},execMenuOnce(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){c.warn(`${t} 键不存在`);return}let r=u.getValue(t);if(r){if(this.$data.oneSuccessExecMenu.has(t))return;e(r),this.$data.oneSuccessExecMenu.set(t,1);}},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){q.panel({title:{text:n.t("{{SCRIPT_NAME}}-设置",{SCRIPT_NAME:Y}),position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0,style:`
			${Ae}
			`});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [fe,me,he,ge,_e,Ie]}};u.init();_.init();

})(Qmsg, DOMUtils, Utils, i18next, Viewer);