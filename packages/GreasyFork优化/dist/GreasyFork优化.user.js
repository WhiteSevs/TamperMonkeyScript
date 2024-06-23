// ==UserScript==
// @name               GreasyFork优化
// @name:en-US         GreasyFork Optimization
// @namespace          https://github.com/WhiteSevs/TamperMonkeyScript
// @version            2024.6.23
// @author             WhiteSevs
// @description        自动登录账号、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库、优化图片浏览、美化页面、Markdown复制按钮
// @description:en-US  Automatically log in to the account, quickly find your own library referenced by other scripts, update your own script list, library, optimize image browsing, beautify the page, Markdown copy button
// @license            GPL-3.0-only
// @icon               data:image/png;base64,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
// @supportURL         https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match              *://greasyfork.org/*
// @require            https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require            https://update.greasyfork.org/scripts/456485/1398647/pops.js
// @require            https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require            https://fastly.jsdelivr.net/npm/@whitesev/utils@1.5.8/dist/index.umd.js
// @require            https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
// @require            https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.js
// @require            https://fastly.jsdelivr.net/npm/i18next@23.11.5/i18next.min.js
// @resource           ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css
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

(function (Qmsg, DOMUtils, Utils, i18next, Viewer) {
  'use strict';

  var _a;
  var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const zh_CN_language = {
    GreasyFork优化: "GreasyFork优化",
    请求取消: "请求取消",
    请求超时: "请求超时",
    请求异常: "请求异常",
    通用: "通用",
    账号: "账号",
    密码: "密码",
    语言: "语言",
    "账号/密码": "账号/密码",
    请输入账号: "请输入账号",
    请输入密码: "请输入密码",
    自动登录: "自动登录",
    自动登录当前保存的账号: "自动登录当前保存的账号",
    "清空账号/密码": "清空账号/密码",
    点击清空: "点击清空",
    "确定清空账号和密码？": "确定清空账号和密码？",
    "已清空账号/密码": "已清空账号/密码",
    "源代码同步【脚本列表】": "源代码同步【脚本列表】",
    一键同步: "一键同步",
    前往用户主页: "前往用户主页",
    获取当前已登录的用户主页失败: "获取当前已登录的用户主页失败",
    "源代码同步【未上架的脚本】": "源代码同步【未上架的脚本】",
    "源代码同步【库】": "源代码同步【库】",
    论坛: "论坛",
    功能: "功能",
    脚本配置: "脚本配置",
    过滤重复的评论: "过滤重复的评论",
    "过滤掉重复的评论数量(≥2)": "过滤掉重复的评论数量(≥2)",
    "过滤脚本(id)": "过滤脚本(id)",
    "请输入脚本id，每行一个": "请输入脚本id，每行一个",
    "过滤发布的用户(id)": "过滤发布的用户(id)",
    "请输入用户id，每行一个": "请输入用户id，每行一个",
    "过滤回复的用户(id)": "过滤回复的用户(id)",
    优化: "优化",
    固定当前语言: "固定当前语言",
    无: "无",
    "如button、input、textarea": "如button、input、textarea",
    更直观的查看版本迭代: "更直观的查看版本迭代",
    美化上传图片按钮: "美化上传图片按钮",
    放大上传区域: "放大上传区域",
    优化图片浏览: "优化图片浏览",
    使用Viewer浏览图片: "使用Viewer浏览图片",
    覆盖图床图片跳转: "覆盖图床图片跳转",
    "配合上面的【优化图片浏览】更优雅浏览图片": "配合上面的【优化图片浏览】更优雅浏览图片",
    '需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>': '需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>',
    代码: "代码",
    添加复制代码按钮: "添加复制代码按钮",
    更优雅的复制: "更优雅的复制",
    快捷键: "快捷键",
    "【F】键全屏、【Alt+Shift+F】键宽屏": "【F】键全屏、【Alt+Shift+F】键宽屏",
    库: "库",
    脚本列表: "脚本列表",
    屏蔽: "屏蔽",
    "规则(可正则)": "规则(可正则)",
    "请输入屏蔽规则，每行一个": "请输入屏蔽规则，每行一个",
    请求admin内容失败: "请求admin内容失败",
    解析admin的源代码同步表单失败: "解析admin的源代码同步表单失败",
    源代码同步失败: "源代码同步失败",
    获取用户信息失败: "获取用户信息失败",
    获取用户的收藏集失败: "获取用户的收藏集失败",
    "解析Script Sets失败": "解析Script Sets失败",
    "获取收藏集{{setsId}}失败": "获取收藏集{{setsId}}失败",
    "获取表单元素#edit_script_set失败": "获取表单元素#edit_script_set失败",
    更新收藏集表单请求失败: "更新收藏集表单请求失败",
    请先在菜单中录入账号: "请先在菜单中录入账号",
    请先在菜单中录入密码: "请先在菜单中录入密码",
    "获取csrf-token失败": "获取csrf-token失败",
    "正在登录中...": "正在登录中...",
    "登录失败，请在控制台查看原因": "登录失败，请在控制台查看原因",
    "登录成功，1s后自动跳转": "登录成功，1s后自动跳转",
    "登录失败，可能是账号/密码错误，请在控制台查看原因": "登录失败，可能是账号/密码错误，请在控制台查看原因",
    "美化 历史版本 页面": "美化 历史版本 页面",
    未找到history_versions元素列表: "未找到history_versions元素列表",
    "yyyy年MM月dd日 HH:mm:ss": "yyyy-MM-dd HH:mm:ss",
    "美化 Greasyfork Beautify脚本": "美化 Greasyfork Beautify脚本",
    "❌ 最多同时长传5张图": "❌ 最多同时长传5张图片",
    "❌ 图片：{{name}} 大小：{{size}}": "❌ 图片：{{name}} 大小：{{size}}",
    "已过滤：{{oldCount}}": "已过滤：{{oldCount}}",
    寻找引用: "寻找引用",
    获取脚本id失败: "获取脚本id失败",
    收藏: "收藏",
    请先登录账号: "请先登录账号",
    获取用户id失败: "获取用户id失败",
    "获取收藏夹中...": "获取收藏夹中...",
    收藏集: "收藏集",
    "添加中...": "添加中...",
    "添加失败，{{selector}}元素不存在": "添加失败，{{selector}}元素不存在",
    "未找到{{selector}}元素": "未找到{{selector}}元素",
    添加失败: "添加失败",
    添加成功: "添加成功",
    "删除中...": "删除中...",
    删除成功: "删除成功",
    添加: "添加",
    刪除: "刪除",
    "拦截跳转：": "拦截跳转：",
    今日检查: "今日检查",
    复制代码: "复制代码",
    "加载文件中...": "加载文件中...",
    复制成功: "复制成功",
    "✅ 复制成功!": "✅ 复制成功!",
    "当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}": "当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}",
    "导航至：": "导航至：",
    "请先登录账号！": "请先登录账号！",
    "获取信息中，请稍后...": "获取信息中，请稍后...",
    "获取成功，共 {{count}} 个": "获取成功，共 {{count}} 个",
    "评分：": "评分：",
    "语言：": "语言：",
    "版本：": "版本：",
    "更新：": "更新：",
    同步代码: "同步代码",
    "同步中...": "同步中...",
    手动: "手动",
    自动: "自动",
    "同步方式：{{syncMode}}": "同步方式：{{syncMode}}",
    同步成功: "同步成功",
    同步失败: "同步失败",
    该脚本未设置同步信息: "该脚本未设置同步信息",
    "上次重载时间 {{time}}，5秒内拒绝反复重载": "上次重载时间 {{time}}，5秒内拒绝反复重载",
    "名称：": "名称：",
    "进度：": "进度：",
    "未获取到【脚本列表】": "未获取到【脚本列表】",
    "源代码同步成功，3秒后更新下一个": "源代码同步成功，3秒后更新下一个",
    全部更新失败: "全部更新失败",
    "全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}": "全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}",
    "⚙ 设置": "⚙ 设置",
    "{{SCRIPT_NAME}}-设置": "{{SCRIPT_NAME}}-设置",
    美化页面元素: "美化页面元素",
    美化历史版本页面: "美化历史版本页面",
    "美化Greasyfork Beautify脚本": "美化Greasyfork Beautify脚本",
    获取表单csrfToken失败: "获取表单csrfToken失败",
    Toast配置: "Toast配置",
    Toast位置: "Toast位置",
    左上角: "左上角",
    顶部: "顶部",
    右上角: "右上角",
    左边: "左边",
    中间: "中间",
    右边: "右边",
    左下角: "左下角",
    底部: "底部",
    右下角: "右下角",
    Toast显示在页面九宫格的位置: "Toast显示在页面九宫格的位置",
    最多显示的数量: "最多显示的数量",
    限制Toast显示的数量: "限制Toast显示的数量",
    逆序弹出: "逆序弹出",
    修改Toast弹出的顺序: "修改Toast弹出的顺序",
    该脚本已经在该收藏集中: "该脚本已经在该收藏集中",
    其它错误: "其它错误"
  };
  const en_US_language = {
    GreasyFork优化: "GreasyFork Optimization",
    请求取消: "http request cancel",
    请求超时: "http request timeout",
    请求异常: "http request error",
    通用: "General",
    账号: "Account",
    密码: "Password",
    语言: "Language",
    "账号/密码": "Account/Password",
    请输入账号: "Please enter your account number",
    请输入密码: "Please enter password",
    自动登录: "Auto Login",
    自动登录当前保存的账号: "Automatically log in to the currently saved account",
    "清空账号/密码": "Clear account/password",
    点击清空: "Clear",
    "确定清空账号和密码？": "Are you sure to clear your account and password?",
    "已清空账号/密码": "Account/password cleared",
    "源代码同步【脚本列表】": "Source Code Synchronization [Script List]",
    一键同步: "Sync All",
    前往用户主页: "Go to the user's homepage",
    获取当前已登录的用户主页失败: "Failed to retrieve the currently logged in user's homepage",
    "源代码同步【未上架的脚本】": "Source code synchronization [Script not listed]",
    "源代码同步【库】": "Source code synchronization 【 Library 】",
    论坛: "Forum",
    功能: "Function",
    脚本配置: "Script Configuration",
    过滤重复的评论: "Filter duplicate comments",
    "过滤掉重复的评论数量(≥2)": "Filter out duplicate comments (≥ 2)",
    "过滤脚本(id)": "Filter script (id)",
    "请输入脚本id，每行一个": "Please enter the script ID, one per line",
    "过滤发布的用户(id)": "Filter published users (id)",
    "请输入用户id，每行一个": "Please enter the user ID, one per line",
    "过滤回复的用户(id)": "User (ID) who filters replies",
    优化: "Optimization",
    固定当前语言: "Fix current language",
    无: "nothing",
    "如button、input、textarea": "For example button、input、textarea",
    更直观的查看版本迭代: "More intuitive viewing of version iterations",
    美化上传图片按钮: "Beautify upload image button",
    放大上传区域: "Enlarge the upload area",
    优化图片浏览: "Optimize image browsing",
    使用Viewer浏览图片: "Using Viewer to browse images",
    覆盖图床图片跳转: "Overlay bed image jump",
    "配合上面的【优化图片浏览】更优雅浏览图片": "Collaborate with the optimization of image browsing above to browse images more elegantly",
    '需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>': 'Greasyfork Beauty script needs to be installed，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐 Click me to install</a>',
    代码: "Code",
    添加复制代码按钮: "Add Copy Code Button",
    更优雅的复制: "More elegant replication",
    快捷键: "Shortcut keys",
    "【F】键全屏、【Alt+Shift+F】键宽屏": "【F】 Key full screen, [Alt+Shift+F] key wide screen",
    库: "Library",
    脚本列表: "Script List",
    屏蔽: "Shield",
    "规则(可正则)": "Rules (regularizable)",
    "请输入屏蔽规则，每行一个": "Please enter a blocking rule, one per line",
    请求admin内容失败: "Request for admin content failed",
    解析admin的源代码同步表单失败: "Failed to parse the source code of admin and synchronize the form",
    源代码同步失败: "Source code synchronization failed",
    获取用户信息失败: "Failed to obtain user information",
    获取用户的收藏集失败: "Failed to retrieve user's collection",
    "解析Script Sets失败": "Parsing Script Sets failed",
    "获取收藏集{{setsId}}失败": "Failed to retrieve collection {{setsId}}",
    "获取表单元素#edit_script_set失败": "Failed to retrieve form element #edit_script_set",
    更新收藏集表单请求失败: "Update collection form request failed",
    请先在菜单中录入账号: "Please enter your account in the menu first",
    请先在菜单中录入密码: "Please enter your password in the menu first",
    "获取csrf-token失败": "Failed to obtain csrf token",
    "正在登录中...": "Logging in...",
    "登录失败，请在控制台查看原因": "Login failed, please check the reason in the console",
    "登录成功，1s后自动跳转": "Login successful, automatically redirect after 1 second",
    "登录失败，可能是账号/密码错误，请在控制台查看原因": "Login failed, possibly due to incorrect account/password. Please check the reason in the console",
    "美化 历史版本 页面": "Beautify the historical version page",
    未找到history_versions元素列表: "History_versions element list not found",
    "yyyy年MM月dd日 HH:mm:ss": "yyyy-MM-dd HH:mm:ss",
    "美化 Greasyfork Beautify脚本": "Beautify Greasyfork Beauty Script",
    "❌ 最多同时长传5张图": "❌ Upload up to 5 images simultaneously",
    "❌ 图片：{{name}} 大小：{{size}}": "❌ Image:{{name}} Size:{{size}}",
    "已过滤：{{oldCount}}": "Filtered:{{oldCount}}",
    寻找引用: "Find references",
    获取脚本id失败: "Failed to obtain script ID",
    收藏: "Collection",
    请先登录账号: "Please log in to your account first",
    获取用户id失败: "Failed to obtain user ID",
    "获取收藏夹中...": "Get in favorites...",
    收藏集: "Collection",
    "添加中...": "Adding...",
    "添加失败，{{selector}}元素不存在": "Add failed, {{selector}} element does not exist",
    "未找到{{selector}}元素": "{{selector}} element not found",
    添加失败: "Add failed",
    添加成功: "Successfully added",
    "删除中...": "Deleting...",
    删除成功: "Delete successful",
    添加: "Add in deletion",
    刪除: "Delete",
    "拦截跳转：": "Intercept jump:",
    今日检查: "Today's inspection",
    复制代码: "Copy Code",
    "加载文件中...": "Loading files...",
    复制成功: "Copy successful",
    "✅ 复制成功!": "✅ Copy successful!",
    "当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}": "Current language: {{currentLocaleLanguage}}, switch to {{localeLanguage}} in 3 seconds",
    "导航至：": "Navigation to:",
    "请先登录账号！": "Please log in to your account first!",
    "获取信息中，请稍后...": "Obtaining information, please wait...",
    "获取成功，共 {{count}} 个": "Successfully obtained, a total of {{count}}",
    "评分：": "Rating:",
    "语言：": "Language:",
    "版本：": "Version:",
    "更新：": "Update:",
    同步代码: "Synchronize Code",
    "同步中...": "Synchronizing...",
    手动: "Manual",
    自动: "Automatic",
    "同步方式：{{syncMode}}": "Synchronization method: {{syncMode}}",
    同步成功: "Sync successful",
    同步失败: "Sync failed",
    该脚本未设置同步信息: "The script has not set synchronization information",
    "上次重载时间 {{time}}，5秒内拒绝反复重载": "Last reload time {{time}}, rejected repeated reloads within 5 seconds",
    "名称：": "Name:",
    "进度：": "Progress:",
    "未获取到【脚本列表】": "Unable to obtain [Script List]",
    "源代码同步成功，3秒后更新下一个": "Source code synchronization successful, update next one in 3 seconds",
    全部更新失败: "All updates failed",
    "全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}": "All updates completed<br>Success: {{successNums}}<br>Failure: {{failed Nums}}<br>Total: {{scriptUrlListLength}}",
    "⚙ 设置": "⚙  Setting",
    "{{SCRIPT_NAME}}-设置": "{{SCRIPT_NAME}}-Setting",
    美化页面元素: "Beautify page elements",
    美化历史版本页面: "Beautify the historical version page",
    "美化Greasyfork Beautify脚本": "Beautify Greasyfork Beauty Script",
    获取表单csrfToken失败: "Failed to obtain form csrfToken",
    Toast配置: "Toast Config",
    Toast位置: "Toast position",
    左上角: "Top left",
    顶部: "Top",
    右上角: "Top right",
    左边: "Left",
    中间: "Center",
    右边: "Right",
    左下角: "Bottom left",
    底部: "Bottom",
    右下角: "Bottom right",
    Toast显示在页面九宫格的位置: "Toast is displayed in the nine grid position on the page",
    最多显示的数量: "Maximum number of displays",
    限制Toast显示的数量: "Limit the number of Toast displays",
    逆序弹出: "Reverse pop-up",
    修改Toast弹出的顺序: "Modify the order in which Toast pops up",
    该脚本已经在该收藏集中: "The script is already in this collection",
    其它错误: "Ohter Error"
  };
  const KEY = "GM_Panel";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const LanguageInit = function() {
    let settingPanel = _GM_getValue(KEY, {});
    let lng = settingPanel["setting-language"] || "zh-CN";
    i18next.init({
      lng,
      // lng: "zh-CN",
      fallbackLng: "zh-CN",
      resources: {
        "zh-CN": {
          translation: { ...zh_CN_language }
        },
        "en-US": {
          translation: { ...en_US_language }
        }
      }
    });
  };
  LanguageInit();
  _GM_getValue(KEY, {});
  const _SCRIPT_NAME_ = i18next.t("GreasyFork优化");
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const pops = _monkeyWindow.pops || _unsafeWindow.pops;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 1e3,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config(
    Object.defineProperties(
      {
        html: true,
        autoClose: true,
        showClose: false
      },
      {
        position: {
          get() {
            return PopsPanel.getValue("qmsg-config-position", "bottom");
          }
        },
        maxNums: {
          get() {
            return PopsPanel.getValue("qmsg-config-maxnums", 5);
          }
        },
        showReverse: {
          get() {
            return PopsPanel.getValue("qmsg-config-showreverse", true);
          }
        },
        zIndex: {
          get() {
            let maxZIndex = Utils.getMaxZIndex(10);
            let popsMaxZIndex = pops.config.Utils.getPopsMaxZIndex(10).zIndex;
            return Utils.getMaxValue(maxZIndex, popsMaxZIndex);
          }
        }
      }
    )
  );
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx(_GM_xmlhttpRequest);
  httpx.interceptors.response.use(void 0, (data) => {
    log.error(["拦截器-请求错误", data]);
    if (data.type === "onabort") {
      Qmsg.warning(i18next.t("请求取消"));
    } else if (data.type === "onerror") {
      Qmsg.error(i18next.t("请求异常"));
    } else if (data.type === "ontimeout") {
      Qmsg.error(i18next.t("请求超时"));
    } else {
      Qmsg.error(i18next.t("其它错误"));
    }
    return data;
  });
  httpx.config({
    logDetails: DEBUG
  });
  ({
    Object: {
      defineProperty: _unsafeWindow.Object.defineProperty
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild
    },
    setTimeout: _unsafeWindow.setTimeout
  });
  const UIButton = function(text, description, buttonText, buttonIcon, buttonIsRightIcon, buttonIconIsLoading, buttonType, clickCallBack) {
    let result = {
      text,
      type: "button",
      description,
      buttonIcon,
      buttonIsRightIcon,
      buttonIconIsLoading,
      buttonType,
      buttonText,
      callback(event) {
        if (typeof clickCallBack === "function") {
          clickCallBack(event);
        }
      },
      afterAddToUListCallBack: void 0
    };
    return result;
  };
  const UIInput = function(text, key, defaultValue, description, changeCallBack, placeholder = "", isNumber, isPassword) {
    let result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      attributes: {},
      description,
      getValue() {
        let localValue = PopsPanel.getValue(key, defaultValue);
        return localValue;
      },
      callback(event, value) {
        PopsPanel.setValue(key, value);
      },
      placeholder
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const UISwitch = function(text, key, defaultValue, clickCallBack, description) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      getValue() {
        return Boolean(PopsPanel.getValue(key, defaultValue));
      },
      callback(event, value) {
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        PopsPanel.setValue(key, Boolean(value));
      },
      afterAddToUListCallBack: void 0
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = Boolean(defaultValue);
    }
    return result;
  };
  const GreasyforkApi = {
    /**
     * 获取代码搜索地址
     * @param url
     */
    getCodeSearchUrl(url) {
      return "https://greasyfork.org/zh-CN/scripts/code-search?c=" + url;
    },
    /**
     * 获取管理地址
     * @param url
     */
    getAdminUrl(url) {
      return url + "/admin";
    },
    /**
     * 从字符串中提取Id
     * @param text
     */
    getScriptId(text) {
      var _a2, _b;
      return (_b = (_a2 = text || window.location.pathname) == null ? void 0 : _a2.match(
        /\/scripts\/([\d]+)/i
      )) == null ? void 0 : _b[1];
    },
    /**
     * 从字符串中提取用户id
     * @param text
     */
    getUserId(text) {
      var _a2;
      return (_a2 = (text || window.location.pathname).match(/\/users\/([\d]+)/i)) == null ? void 0 : _a2[1];
    },
    /**
     * 从字符串中提取脚本名
     * @param text
     */
    getScriptName(text) {
      let pathname = window.location.pathname;
      if (text != null) {
        pathname = new URL(text).pathname;
      }
      pathname = decodeURIComponent(pathname);
      let pathnameSplit = pathname.split("/");
      for (const name of pathnameSplit) {
        let nameMatch = name.match(/[\d]+/);
        if (nameMatch && nameMatch.length) {
          return nameMatch[1];
        }
      }
    },
    /**
     * 获取需要切换语言的Url
     */
    getSwitchLanguageUrl(localeLanguage = "zh-CN") {
      let url = window.location.origin;
      let urlSplit = window.location.pathname.split("/");
      urlSplit[1] = localeLanguage;
      url = url + urlSplit.join("/");
      url += window.location.search;
      if (window.location.search === "") {
        url += "?locale_override=1";
      } else if (!window.location.search.includes("locale_override=1")) {
        url += "&locale_override=1";
      }
      return url;
    },
    /**
     * 获取脚本统计数据
     * @param scriptId
     */
    async getScriptStats(scriptId) {
      return new Promise(async (resolve) => {
        let scriptStatsRequest = await httpx.get({
          url: `https://greasyfork.org/scripts/${scriptId}/stats.json`,
          fetch: true,
          onerror() {
          },
          ontimeout() {
          }
        });
        if (!scriptStatsRequest.status) {
          resolve(null);
          return;
        }
        let scriptStatsJSON = scriptStatsRequest.data;
        resolve(scriptStatsJSON);
      });
    },
    /**
     * 解析并获取admin内的源代码同步的配置表单
     * @param scriptId
     */
    async getSourceCodeSyncFormData(scriptId) {
      let getResp = await httpx.get(
        `https://greasyfork.org/zh-CN/scripts/${scriptId}/admin`,
        {
          fetch: true
        }
      );
      log.success(getResp);
      if (!getResp.status) {
        Qmsg.error(i18next.t("请求admin内容失败"));
        return;
      }
      let adminHTML = getResp.data.responseText;
      let adminHTMLElement = domUtils.parseHTML(adminHTML, false, true);
      let formElement = adminHTMLElement.querySelector("form.edit_script");
      if (!formElement) {
        Qmsg.error(i18next.t("解析admin的源代码同步表单失败"));
        return;
      }
      let formData = new FormData(formElement);
      return formData;
    },
    /**
     * 进行源代码同步，要求先getSourceCodeSyncFormData
     * @param scriptId
     * @param data
     */
    async sourceCodeSync(scriptId, data) {
      let postResp = await httpx.post(
        `https://greasyfork.org/zh-CN/scripts/${scriptId}/sync_update`,
        {
          fetch: true,
          data
        }
      );
      log.success(postResp);
      if (!postResp.status) {
        Qmsg.error(i18next.t("源代码同步失败"));
        return;
      }
      return postResp;
    },
    /**
     * 获取用户的信息，包括脚本列表、未上架的脚本、库
     */
    async getUserInfo(userId) {
      let getResp = await httpx.get(
        `https://greasyfork.org/zh-CN/users/${userId}.json`,
        {
          fetch: true
        }
      );
      log.success(getResp);
      if (!getResp.status) {
        Qmsg.error(i18next.t("获取用户信息失败"));
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      data["scriptList"] = [];
      data["scriptLibraryList"] = [];
      data["scripts"].forEach((scriptInfo) => {
        if (scriptInfo["code_url"].endsWith(".user.js")) {
          data["scriptList"].push(scriptInfo);
        } else {
          data["scriptLibraryList"].push(scriptInfo);
        }
      });
      return data;
    },
    /**
     * 获取用户的收藏集
     * @param userId
     */
    async getUserCollection(userId) {
      let getResp = await httpx.get(
        `https://greasyfork.org/zh-CN/users/${userId}`,
        {
          fetch: true
        }
      );
      log.info(["获取用户的收藏集", getResp]);
      if (!getResp.status) {
        Qmsg.error(i18next.t("获取用户的收藏集失败"));
        return;
      }
      let respText = getResp.data.responseText;
      let respDocument = domUtils.parseHTML(respText, true, true);
      let userScriptSets = respDocument.querySelector("#user-script-sets");
      if (!userScriptSets) {
        log.error("解析Script Sets失败");
        return;
      }
      let scriptSetsIdList = [];
      userScriptSets.querySelectorAll("li").forEach((liElement) => {
        var _a2;
        let $ele = liElement.querySelector("a:last-child");
        if (!$ele) {
          return;
        }
        let setsUrl = $ele.href;
        if (setsUrl.includes("?fav=1")) {
          return;
        }
        let setsName = liElement.querySelector("a").innerText;
        let setsId = (_a2 = setsUrl.match(/\/sets\/([\d]+)\//)) == null ? void 0 : _a2[1];
        scriptSetsIdList.push({
          id: setsId,
          name: setsName
        });
      });
      return scriptSetsIdList;
    },
    /**
     * 获取某个收藏集的信息
     * @param userId 用户id
     * @param setsId 收藏集id
     */
    async getUserCollectionInfo(userId, setsId) {
      let getResp = await httpx.get(
        `https://greasyfork.org/zh-CN/users/${userId}/sets/${setsId}/edit`,
        {
          fetch: true
        }
      );
      if (!getResp.status) {
        Qmsg.error(i18next.t("获取收藏集{{setsId}}失败", { setsId }));
        return;
      }
      let respText = getResp.data.responseText;
      let respDocument = domUtils.parseHTML(respText, true, true);
      let $edit_script_set_form = respDocument.querySelector(
        'form[id^="edit_script_set"]'
      );
      if (!$edit_script_set_form) {
        Qmsg.error(i18next.t("获取表单元素#edit_script_set失败"));
        return;
      }
      let formData = new FormData($edit_script_set_form);
      let csrfToken = respDocument.querySelector(
        'meta[name="csrf-token"]'
      );
      if (!csrfToken) {
        Qmsg.error(i18next.t("获取表单csrfToken失败"));
        return;
      }
      if (csrfToken.hasAttribute("content")) {
        let authenticity_token = csrfToken.getAttribute("content");
        if (authenticity_token) {
          formData.set("authenticity_token", authenticity_token);
        }
      }
      return formData;
    },
    /**
     * 更新用户的某个收藏集的表单信息
     * @param userId 用户id
     * @param setsId 收藏集id
     * @param data
     */
    async updateUserSetsInfo(userId, setsId, data) {
      let postResp = await httpx.post(
        `https://greasyfork.org/zh-CN/users/${userId}/sets/${setsId}`,
        {
          fetch: true,
          headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            pragma: "no-cache"
          },
          fetchInit: {
            referrerPolicy: "strict-origin-when-cross-origin"
          },
          data
        }
      );
      if (!postResp.status) {
        Qmsg.error(i18next.t("更新收藏集表单请求失败"));
        return;
      }
      let respText = postResp.data.responseText;
      let respDocument = domUtils.parseHTML(respText, true, true);
      return respDocument;
    },
    /**
     * 切换语言
     * @param url
     */
    async switchLanguage(url) {
      let getResp = await httpx.get(url, {
        fetch: true,
        headers: {
          "Upgrade-Insecure-Requests": "1"
        }
      });
      if (!getResp.status) {
        return;
      }
      log.info(getResp);
    }
  };
  const GreasyforkRouter = {
    /**
     * 代码页面
     */
    isCode() {
      var _a2;
      return (_a2 = window.location.pathname.split("/")) == null ? void 0 : _a2.includes("code");
    },
    /**
     * （严格比较）代码页面
     */
    isCodeStrict() {
      return window.location.pathname.endsWith("/code");
    },
    /**
     * 版本页面
     */
    isVersion() {
      return window.location.pathname.endsWith("/versions");
    },
    /**
     * 用户主页
     */
    isUserHome() {
      return window.location.pathname.match(/\/.+\/users\/.+/gi);
    },
    /**
     * 脚本页面
     */
    isScript() {
      return window.location.pathname.includes("/scripts/");
    },
    /**
     * 脚本列表页面
     */
    isScriptList() {
      return window.location.pathname.endsWith("/scripts");
    },
    /**
     * 讨论页面
     */
    isDiscuessions() {
      return window.location.pathname.endsWith("/discussions");
    }
  };
  const GreasyforkMenu = {
    /**
     * @class
     */
    menu: GM_Menu,
    /**
     * 当前是否已登录
     */
    isLogin: false,
    /**
     * 初始化环境变量
     */
    initEnv() {
      let userLinkElement = this.getUserLinkElement();
      this.isLogin = Boolean(userLinkElement);
    },
    /**
     * 获取当前登录用户的a标签元素
     */
    getUserLinkElement() {
      return document.querySelector(
        "#nav-user-info span.user-profile-link a"
      );
    },
    /**
     * 更新脚本
     * @param scriptUrlList
     */
    async updateScript(scriptUrlList) {
      let getLoadingHTML = function(scriptName, progress = 1) {
        return `
			<div style="display: flex;flex-direction: column;align-items: flex-start;">
				<div style="height: 30px;line-height: 30px;">${i18next.t(
        "名称："
      )}${scriptName}</div>
				<div style="height: 30px;line-height: 30px;">${i18next.t(
        "进度："
      )}${progress}/${scriptUrlList.length}</div>
			</div>`;
      };
      if (utils.isNull(scriptUrlList)) {
        Qmsg.error(i18next.t("未获取到【脚本列表】"));
      } else {
        let loading = Qmsg.loading(
          getLoadingHTML(GreasyforkApi.getScriptName(scriptUrlList[0])),
          {
            html: true
          }
        );
        let successNums = 0;
        let failedNums = 0;
        for (let index = 0; index < scriptUrlList.length; index++) {
          let scriptUrl = scriptUrlList[index];
          let scriptId = GreasyforkApi.getScriptId(scriptUrl);
          log.success("更新：" + scriptUrl);
          let scriptName = GreasyforkApi.getScriptName(scriptUrl);
          loading.setHTML(getLoadingHTML(scriptName, index + 1));
          let codeSyncFormData = await GreasyforkApi.getSourceCodeSyncFormData(
            scriptId
          );
          if (codeSyncFormData) {
            let syncUpdateStatus = await GreasyforkApi.sourceCodeSync(
              scriptId,
              codeSyncFormData
            );
            if (syncUpdateStatus) {
              Qmsg.success(i18next.t("源代码同步成功，3秒后更新下一个"));
              await utils.sleep(3e3);
              successNums++;
            } else {
              Qmsg.error(i18next.t("源代码同步失败"));
              failedNums++;
            }
          } else {
            Qmsg.error(i18next.t("源代码同步失败"));
            failedNums++;
          }
        }
        loading.close();
        if (successNums === 0) {
          Qmsg.error(i18next.t("全部更新失败"));
        } else {
          Qmsg.success(
            i18next.t(
              "全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}",
              {
                successNums,
                failedNums,
                scriptUrlListLength: scriptUrlList.length
              }
            ),
            {
              html: true
            }
          );
        }
      }
    },
    /**
     * 处理本地的goto事件
     */
    handleLocalGotoCallBack() {
      if (PopsPanel.getValue("goto_updateSettingsAndSynchronize_scriptList")) {
        PopsPanel.deleteValue("goto_updateSettingsAndSynchronize_scriptList");
        if (!GreasyforkRouter.isUserHome()) {
          PopsPanel.setValue(
            "goto_updateSettingsAndSynchronize_scriptList",
            true
          );
          if (GreasyforkMenu.getUserLinkElement()) {
            Qmsg.success(i18next.t("前往用户主页"));
            window.location.href = GreasyforkMenu.getUserLinkElement().href;
          } else {
            Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
          }
          return;
        }
        let scriptUrlList = [];
        document.querySelectorAll(
          "#user-script-list-section li a.script-link"
        ).forEach((item) => {
          scriptUrlList = scriptUrlList.concat(
            GreasyforkApi.getAdminUrl(item.href)
          );
        });
        GreasyforkMenu.updateScript(scriptUrlList);
      } else if (PopsPanel.getValue("goto_updateSettingsAndSynchronize_unlistedScriptList")) {
        PopsPanel.deleteValue(
          "goto_updateSettingsAndSynchronize_unlistedScriptList"
        );
        if (!GreasyforkRouter.isUserHome()) {
          PopsPanel.setValue(
            "goto_updateSettingsAndSynchronize_unlistedScriptList",
            true
          );
          if (GreasyforkMenu.getUserLinkElement()) {
            Qmsg.success(i18next.t("前往用户主页"));
            window.location.href = GreasyforkMenu.getUserLinkElement().href;
          } else {
            Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
          }
          return;
        }
        let scriptUrlList = [];
        document.querySelectorAll(
          "#user-unlisted-script-list li a.script-link"
        ).forEach((item) => {
          scriptUrlList = scriptUrlList.concat(
            GreasyforkApi.getAdminUrl(item.href)
          );
        });
        GreasyforkMenu.updateScript(scriptUrlList);
      } else if (PopsPanel.getValue("goto_updateSettingsAndSynchronize_libraryScriptList")) {
        PopsPanel.deleteValue(
          "goto_updateSettingsAndSynchronize_libraryScriptList"
        );
        if (!GreasyforkRouter.isUserHome()) {
          PopsPanel.setValue(
            "goto_updateSettingsAndSynchronize_libraryScriptList",
            true
          );
          if (GreasyforkMenu.getUserLinkElement()) {
            Qmsg.success(i18next.t("前往用户主页"));
            window.location.href = GreasyforkMenu.getUserLinkElement().href;
          } else {
            Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
          }
          return;
        }
        let scriptUrlList = [];
        document.querySelectorAll(
          "#user-library-script-list li a.script-link"
        ).forEach((item) => {
          scriptUrlList = scriptUrlList.concat(
            GreasyforkApi.getAdminUrl(item.href)
          );
        });
        GreasyforkMenu.updateScript(scriptUrlList);
      }
    }
  };
  const UISelect = function(text, key, defaultValue, data, callback, description) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    let result = {
      text,
      type: "select",
      description,
      attributes: {},
      getValue() {
        return PopsPanel.getValue(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        PopsPanel.setValue(key, isSelectedValue);
        if (typeof callback === "function") {
          callback(event, isSelectedValue, isSelectedText);
        }
      },
      data: selectData
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const SettingUIGeneral = {
    id: "greasy-fork-panel-config-account",
    title: i18next.t("通用"),
    forms: [
      {
        text: i18next.t("账号/密码"),
        type: "forms",
        forms: [
          UIInput(
            i18next.t("账号"),
            "user",
            "",
            void 0,
            void 0,
            i18next.t("请输入账号")
          ),
          UIInput(
            i18next.t("密码"),
            "pwd",
            "",
            void 0,
            void 0,
            i18next.t("请输入密码"),
            false,
            true
          )
        ]
      },
      {
        text: i18next.t("Toast配置"),
        type: "forms",
        forms: [
          UISelect(
            i18next.t("Toast位置"),
            "qmsg-config-position",
            "bottom",
            [
              {
                value: "topleft",
                text: i18next.t("左上角")
              },
              {
                value: "top",
                text: i18next.t("顶部")
              },
              {
                value: "topright",
                text: i18next.t("右上角")
              },
              {
                value: "left",
                text: i18next.t("左边")
              },
              {
                value: "center",
                text: i18next.t("中间")
              },
              {
                value: "right",
                text: i18next.t("右边")
              },
              {
                value: "bottomleft",
                text: i18next.t("左下角")
              },
              {
                value: "bottom",
                text: i18next.t("底部")
              },
              {
                value: "bottomright",
                text: i18next.t("右下角")
              }
            ],
            (event, isSelectValue, isSelectText) => {
              log.info("设置当前Qmsg弹出位置" + isSelectText);
            },
            i18next.t("Toast显示在页面九宫格的位置")
          ),
          UISelect(
            i18next.t("最多显示的数量"),
            "qmsg-config-maxnums",
            3,
            [
              {
                value: 1,
                text: "1"
              },
              {
                value: 2,
                text: "2"
              },
              {
                value: 3,
                text: "3"
              },
              {
                value: 4,
                text: "4"
              },
              {
                value: 5,
                text: "5"
              }
            ],
            void 0,
            i18next.t("限制Toast显示的数量")
          ),
          UISwitch(
            i18next.t("逆序弹出"),
            "qmsg-config-showreverse",
            false,
            void 0,
            i18next.t("修改Toast弹出的顺序")
          )
        ]
      },
      {
        text: i18next.t("脚本配置"),
        type: "forms",
        forms: [
          UISelect(
            i18next.t("语言"),
            "setting-language",
            "zh-CN",
            [
              {
                value: "zh-CN",
                text: "中文"
              },
              {
                value: "en-US",
                text: "English"
              }
            ],
            (event, isSelectValue, isSelectText) => {
              log.info("改变语言：" + isSelectText);
              i18next.changeLanguage(isSelectValue);
            }
          )
        ]
      },
      {
        text: i18next.t("功能"),
        type: "forms",
        forms: [
          UISwitch(
            i18next.t("自动登录"),
            "autoLogin",
            true,
            void 0,
            i18next.t("自动登录当前保存的账号")
          ),
          UIButton(
            i18next.t("清空账号/密码"),
            void 0,
            i18next.t("点击清空"),
            void 0,
            void 0,
            false,
            "default",
            (event) => {
              if (confirm(i18next.t("确定清空账号和密码？"))) {
                PopsPanel.deleteValue("user");
                PopsPanel.deleteValue("pwd");
                Qmsg.success(i18next.t("已清空账号/密码"));
                let $shadowRoot = event.target.getRootNode();
                $shadowRoot.querySelector(
                  `li[data-key="user"] .pops-panel-input input`
                ).value = "";
                $shadowRoot.querySelector(
                  `li[data-key="pwd"] .pops-panel-input input`
                ).value = "";
              }
            }
          ),
          UIButton(
            i18next.t("源代码同步【脚本列表】"),
            void 0,
            i18next.t("一键同步"),
            void 0,
            void 0,
            false,
            "primary",
            (event) => {
              if (!GreasyforkRouter.isUserHome()) {
                PopsPanel.setValue(
                  "goto_updateSettingsAndSynchronize_scriptList",
                  true
                );
                if (GreasyforkMenu.getUserLinkElement()) {
                  Qmsg.success(i18next.t("前往用户主页"));
                  window.location.href = GreasyforkMenu.getUserLinkElement().href;
                } else {
                  Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
                }
                return;
              }
              let scriptUrlList = [];
              document.querySelectorAll(
                "#user-script-list-section li a.script-link"
              ).forEach((item) => {
                scriptUrlList = scriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
              GreasyforkMenu.updateScript(scriptUrlList);
            }
          ),
          UIButton(
            i18next.t("源代码同步【未上架的脚本】"),
            void 0,
            i18next.t("一键同步"),
            void 0,
            void 0,
            false,
            "primary",
            (event) => {
              if (!GreasyforkRouter.isUserHome()) {
                PopsPanel.setValue(
                  "goto_updateSettingsAndSynchronize_unlistedScriptList",
                  true
                );
                if (GreasyforkMenu.getUserLinkElement()) {
                  Qmsg.success(i18next.t("前往用户主页"));
                  window.location.href = GreasyforkMenu.getUserLinkElement().href;
                } else {
                  Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
                }
                return;
              }
              let scriptUrlList = [];
              document.querySelectorAll(
                "#user-unlisted-script-list li a.script-link"
              ).forEach((item) => {
                scriptUrlList = scriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
              GreasyforkMenu.updateScript(scriptUrlList);
            }
          ),
          UIButton(
            i18next.t("源代码同步【库】"),
            void 0,
            i18next.t("一键同步"),
            void 0,
            void 0,
            false,
            "primary",
            (event) => {
              if (!GreasyforkRouter.isUserHome()) {
                PopsPanel.setValue(
                  "goto_updateSettingsAndSynchronize_libraryScriptList",
                  true
                );
                if (GreasyforkMenu.getUserLinkElement()) {
                  Qmsg.success(i18next.t("前往用户主页"));
                  window.location.href = GreasyforkMenu.getUserLinkElement().href;
                } else {
                  Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
                }
                return;
              }
              let scriptUrlList = [];
              document.querySelectorAll(
                "#user-library-script-list li a.script-link"
              ).forEach((item) => {
                scriptUrlList = scriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
              GreasyforkMenu.updateScript(scriptUrlList);
            }
          )
        ]
      }
    ]
  };
  const SettingUIOptimization = {
    id: "greasy-fork-panel-config-optimization",
    title: i18next.t("优化"),
    forms: [
      {
        text: i18next.t("功能"),
        type: "forms",
        forms: [
          UISelect(
            i18next.t("固定当前语言"),
            "language-selector-locale",
            "",
            function() {
              let result = [
                {
                  value: "",
                  text: i18next.t("无")
                }
              ];
              document.querySelectorAll(
                "select#language-selector-locale option"
              ).forEach((element) => {
                let value = element.getAttribute("value");
                if (value === "help") {
                  return;
                }
                let text = (element.innerText || element.textContent).trim();
                result.push({
                  value,
                  text
                });
              });
              return result;
            }()
          ),
          UISwitch(
            i18next.t("美化页面元素"),
            "beautifyPage",
            true,
            void 0,
            i18next.t("如button、input、textarea")
          ),
          UISwitch(
            i18next.t("美化历史版本页面"),
            "beautifyHistoryVersionPage",
            true,
            void 0,
            i18next.t("更直观的查看版本迭代")
          ),
          UISwitch(
            i18next.t("美化上传图片按钮"),
            "beautifyUploadImage",
            true,
            void 0,
            i18next.t("放大上传区域")
          ),
          UISwitch(
            i18next.t("优化图片浏览"),
            "optimizeImageBrowsing",
            true,
            void 0,
            i18next.t("使用Viewer浏览图片")
          ),
          UISwitch(
            i18next.t("覆盖图床图片跳转"),
            "overlayBedImageClickEvent",
            true,
            void 0,
            i18next.t("配合上面的【优化图片浏览】更优雅浏览图片")
          ),
          UISwitch(
            i18next.t("美化Greasyfork Beautify脚本"),
            "beautifyGreasyforkBeautify",
            true,
            void 0,
            i18next.t(
              '需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>'
            )
          )
        ]
      },
      {
        text: i18next.t("代码"),
        type: "forms",
        forms: [
          UISwitch(
            i18next.t("添加复制代码按钮"),
            "addCopyCodeButton",
            true,
            void 0,
            i18next.t("更优雅的复制")
          ),
          UISwitch(
            i18next.t("快捷键"),
            "fullScreenOptimization",
            true,
            void 0,
            i18next.t("【F】键全屏、【Alt+Shift+F】键宽屏")
          )
        ]
      }
    ]
  };
  const SettingUIDiscuessions = {
    id: "greasy-fork-panel-config-discussions",
    title: i18next.t("论坛"),
    forms: [
      {
        text: i18next.t("功能"),
        type: "forms",
        forms: [
          UISwitch(
            i18next.t("过滤重复的评论"),
            "greasyfork-discussions-filter-duplicate-comments",
            false,
            void 0,
            i18next.t("过滤掉重复的评论数量(≥2)")
          )
        ]
      },
      {
        text: i18next.t("过滤脚本(id)"),
        type: "forms",
        forms: [
          {
            type: "own",
            getLiElementCallBack(liElement) {
              let textareaDiv = domUtils.createElement(
                "div",
                {
                  className: "pops-panel-textarea",
                  innerHTML: `
								<textarea placeholder="${i18next.t(
                  "请输入脚本id，每行一个"
                )}" style="height:150px;"></textarea>`
                },
                {
                  style: "width: 100%;"
                }
              );
              let textarea = textareaDiv.querySelector(
                "textarea"
              );
              const KEY2 = "greasyfork-discussions-filter-script";
              textarea.value = PopsPanel.getValue(KEY2, "");
              domUtils.on(
                textarea,
                ["input", "propertychange"],
                void 0,
                utils.debounce(function(event) {
                  PopsPanel.setValue(KEY2, textarea.value);
                }, 200)
              );
              liElement.appendChild(textareaDiv);
              return liElement;
            }
          }
        ]
      },
      {
        text: i18next.t("过滤发布的用户(id)"),
        type: "forms",
        forms: [
          {
            type: "own",
            getLiElementCallBack(liElement) {
              let textareaDiv = domUtils.createElement(
                "div",
                {
                  className: "pops-panel-textarea",
                  innerHTML: `
								<textarea placeholder="${i18next.t(
                  "请输入用户id，每行一个"
                )}" style="height:150px;"></textarea>`
                },
                {
                  style: "width: 100%;"
                }
              );
              let textarea = textareaDiv.querySelector(
                "textarea"
              );
              const KEY2 = "greasyfork-discussions-filter-post-user";
              textarea.value = PopsPanel.getValue(KEY2, "");
              domUtils.on(
                textarea,
                ["input", "propertychange"],
                void 0,
                utils.debounce(function(event) {
                  PopsPanel.setValue(KEY2, textarea.value);
                }, 200)
              );
              liElement.appendChild(textareaDiv);
              return liElement;
            }
          }
        ]
      },
      {
        text: i18next.t("过滤回复的用户(id)"),
        type: "forms",
        forms: [
          {
            type: "own",
            getLiElementCallBack(liElement) {
              let textareaDiv = domUtils.createElement(
                "div",
                {
                  className: "pops-panel-textarea",
                  innerHTML: `
								<textarea placeholder="${i18next.t(
                  "请输入用户id，每行一个"
                )}" style="height:150px;"></textarea>`
                },
                {
                  style: "width: 100%;"
                }
              );
              let textarea = textareaDiv.querySelector(
                "textarea"
              );
              const KEY2 = "greasyfork-discussions-filter-reply-user";
              textarea.value = PopsPanel.getValue(KEY2, "");
              domUtils.on(
                textarea,
                ["input", "propertychange"],
                void 0,
                utils.debounce(function(event) {
                  PopsPanel.setValue(KEY2, textarea.value);
                }, 200)
              );
              liElement.appendChild(textareaDiv);
              return liElement;
            }
          }
        ]
      }
    ]
  };
  const GreasyforkShield = {
    key: "gf-shield-rule",
    init() {
      let lockFunction = new utils.LockFunction(() => {
        this.filter();
      }, 50);
      domUtils.ready(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback: () => {
            lockFunction.run();
          }
        });
        lockFunction.run();
      });
    },
    filter() {
      document.querySelectorAll("#browse-script-list > li").forEach(($scriptList) => {
        let data = $scriptList.dataset;
        let scriptDescription = $scriptList.querySelector(
          ".script-description"
        );
        data["scriptDescription"] = (scriptDescription == null ? void 0 : scriptDescription.innerText) || (scriptDescription == null ? void 0 : scriptDescription.textContent) || "";
        let scriptAuthors = utils.toJSON(data["scriptAuthors"]);
        if (utils.isNotNull(scriptAuthors)) {
          let scriptAuthorId = Object.keys(scriptAuthors)[0];
          let scriptAuthorName = scriptAuthors[scriptAuthorId];
          data["scriptAuthorId"] = scriptAuthorId;
          data["scriptAuthorName"] = scriptAuthorName;
        }
        data["scriptRatingScore"] = parseFloat(
          data["scriptRatingScore"]
        );
        let localValueSplit = this.getValue().split("\n");
        for (const localRule of localValueSplit) {
          let ruleSplit = localRule.split("##");
          let ruleName = ruleSplit[0];
          let ruleValue = ruleSplit[1];
          if (ruleName === "scriptRatingScore") {
            if (ruleValue.startsWith(">")) {
              if (data["scriptRatingScore"] > parseFloat(ruleValue.slice(1))) {
                log.info(["触发过滤规则", [localRule, data]]);
                $scriptList.remove();
                break;
              }
            } else if (ruleValue.startsWith("<")) {
              if (data["scriptRatingScore"] < parseFloat(ruleValue.slice(1))) {
                log.info(["触发过滤规则", [localRule, data]]);
                $scriptList.remove();
                break;
              }
            }
          } else if (ruleName in data || ruleName === "scriptDescription") {
            if (typeof ruleValue !== "string") {
              continue;
            }
            let regexpRuleValue = new RegExp(ruleValue, "ig");
            if (data[ruleName].match(regexpRuleValue)) {
              log.info(["触发过滤规则", [localRule, data]]);
              $scriptList.remove();
              break;
            }
          }
        }
      });
    },
    setValue(value) {
      PopsPanel.setValue(this.key, value);
    },
    getValue() {
      return PopsPanel.getValue(this.key, "");
    }
  };
  const SettingUIShield = {
    id: "greasy-fork-panel-config-shield",
    title: i18next.t("屏蔽"),
    forms: [
      {
        text: i18next.t("规则(可正则)"),
        type: "forms",
        forms: [
          {
            type: "own",
            getLiElementCallBack(liElement) {
              let textareaDiv = domUtils.createElement(
                "div",
                {
                  className: "pops-panel-textarea",
                  innerHTML: `<textarea placeholder="${i18next.t(
                  "请输入屏蔽规则，每行一个"
                )}" style="height:350px;"></textarea>`
                },
                {
                  style: "width: 100%;"
                }
              );
              let textarea = textareaDiv.querySelector(
                "textarea"
              );
              textarea.value = GreasyforkShield.getValue();
              domUtils.on(
                textarea,
                ["input", "propertychange"],
                void 0,
                utils.debounce(function() {
                  GreasyforkShield.setValue(textarea.value);
                }, 200)
              );
              liElement.appendChild(textareaDiv);
              return liElement;
            }
          }
        ]
      }
    ]
  };
  const beautifyMarkdownCSS = 'code {\r\n	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r\n	font-size: 0.85em;\r\n	color: #000;\r\n	background-color: #f0f0f0;\r\n	border-radius: 3px;\r\n	padding: 0.2em 0;\r\n}\r\ntable {\r\n	text-indent: initial;\r\n}\r\ntable {\r\n	margin: 10px 0 15px 0;\r\n	border-collapse: collapse;\r\n	border-spacing: 0;\r\n	display: block;\r\n	width: 100%;\r\n	overflow: auto;\r\n	word-break: normal;\r\n	word-break: keep-all;\r\n}\r\ncode,\r\npre {\r\n	color: #333;\r\n	background: 0 0;\r\n	font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n	text-align: left;\r\n	white-space: pre;\r\n	word-spacing: normal;\r\n	word-break: normal;\r\n	word-wrap: normal;\r\n	line-height: 1.4;\r\n	-moz-tab-size: 8;\r\n	-o-tab-size: 8;\r\n	tab-size: 8;\r\n	-webkit-hyphens: none;\r\n	-moz-hyphens: none;\r\n	-ms-hyphens: none;\r\n	hyphens: none;\r\n}\r\npre {\r\n	padding: 0.8em;\r\n	overflow: auto;\r\n	border-radius: 3px;\r\n	background: #f5f5f5;\r\n}\r\n:not(pre) > code {\r\n	padding: 0.1em;\r\n	border-radius: 0.3em;\r\n	white-space: normal;\r\n	background: #f5f5f5;\r\n}\r\nhtml body {\r\n	font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans,\r\n		sans-serif;\r\n	font-size: 16px;\r\n	line-height: 1.6;\r\n	color: #333;\r\n	background-color: #fff;\r\n	overflow: initial;\r\n	box-sizing: border-box;\r\n	word-wrap: break-word;\r\n}\r\nhtml body > :first-child {\r\n	margin-top: 0;\r\n}\r\nhtml body h1,\r\nhtml body h2,\r\nhtml body h3,\r\nhtml body h4,\r\nhtml body h5,\r\nhtml body h6 {\r\n	line-height: 1.2;\r\n	margin-top: 1em;\r\n	margin-bottom: 16px;\r\n	color: #000;\r\n}\r\nhtml body h1 {\r\n	font-size: 2.25em;\r\n	font-weight: 300;\r\n	padding-bottom: 0.3em;\r\n}\r\nhtml body h2 {\r\n	font-size: 1.75em;\r\n	font-weight: 400;\r\n	padding-bottom: 0.3em;\r\n}\r\nhtml body h3 {\r\n	font-size: 1.5em;\r\n	font-weight: 500;\r\n}\r\nhtml body h4 {\r\n	font-size: 1.25em;\r\n	font-weight: 600;\r\n}\r\nhtml body h5 {\r\n	font-size: 1.1em;\r\n	font-weight: 600;\r\n}\r\nhtml body h6 {\r\n	font-size: 1em;\r\n	font-weight: 600;\r\n}\r\nhtml body h1,\r\nhtml body h2,\r\nhtml body h3,\r\nhtml body h4,\r\nhtml body h5 {\r\n	font-weight: 600;\r\n}\r\nhtml body h5 {\r\n	font-size: 1em;\r\n}\r\nhtml body h6 {\r\n	color: #5c5c5c;\r\n}\r\nhtml body strong {\r\n	color: #000;\r\n}\r\nhtml body del {\r\n	color: #5c5c5c;\r\n}\r\nhtml body a:not([href]) {\r\n	color: inherit;\r\n}\r\nhtml body a {\r\n	text-decoration: underline;\r\n	text-underline-offset: 0.2rem;\r\n}\r\nhtml body a:hover {\r\n	color: #00a3f5;\r\n}\r\nhtml body img {\r\n	max-width: 100%;\r\n}\r\nhtml body > p {\r\n	margin-top: 0;\r\n	margin-bottom: 16px;\r\n	word-wrap: break-word;\r\n}\r\nhtml body > ol,\r\nhtml body > ul {\r\n	margin-bottom: 16px;\r\n}\r\nhtml body ol,\r\nhtml body ul {\r\n	padding-left: 2em;\r\n}\r\nhtml body ol.no-list,\r\nhtml body ul.no-list {\r\n	padding: 0;\r\n	list-style-type: none;\r\n}\r\nhtml body ol ol,\r\nhtml body ol ul,\r\nhtml body ul ol,\r\nhtml body ul ul {\r\n	margin-top: 0;\r\n	margin-bottom: 0;\r\n}\r\nhtml body li {\r\n	margin-bottom: 0;\r\n}\r\nhtml body li.task-list-item {\r\n	list-style: none;\r\n}\r\nhtml body li > p {\r\n	margin-top: 0;\r\n	margin-bottom: 0;\r\n}\r\nhtml body .task-list-item-checkbox {\r\n	margin: 0 0.2em 0.25em -1.8em;\r\n	vertical-align: middle;\r\n}\r\nhtml body .task-list-item-checkbox:hover {\r\n	cursor: pointer;\r\n}\r\nhtml body blockquote {\r\n	margin: 16px 0;\r\n	font-size: inherit;\r\n	padding: 0 15px;\r\n	color: #5c5c5c;\r\n	background-color: #f0f0f0;\r\n	border-left: 4px solid #d6d6d6 !important;\r\n}\r\nhtml body blockquote > :first-child {\r\n	margin-top: 0;\r\n}\r\nhtml body blockquote > :last-child {\r\n	margin-bottom: 0;\r\n}\r\nhtml body hr {\r\n	height: 4px;\r\n	margin: 32px 0;\r\n	background-color: #d6d6d6;\r\n	border: 0 none;\r\n}\r\nhtml body table {\r\n	margin: 10px 0 15px 0;\r\n	border-collapse: collapse;\r\n	border-spacing: 0;\r\n	display: block;\r\n	width: 100%;\r\n	overflow: auto;\r\n	word-break: normal;\r\n	word-break: keep-all;\r\n}\r\nhtml body table th {\r\n	font-weight: 700;\r\n	color: #000;\r\n}\r\nhtml body table td,\r\nhtml body table th {\r\n	border: 1px solid #d6d6d6;\r\n	padding: 6px 13px;\r\n}\r\nhtml body dl {\r\n	padding: 0;\r\n}\r\nhtml body dl dt {\r\n	padding: 0;\r\n	margin-top: 16px;\r\n	font-size: 1em;\r\n	font-style: italic;\r\n	font-weight: 700;\r\n}\r\nhtml body dl dd {\r\n	padding: 0 16px;\r\n	margin-bottom: 16px;\r\n}\r\nhtml body code {\r\n	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r\n	font-size: 0.85em;\r\n	color: #000;\r\n	background-color: #f0f0f0;\r\n	border-radius: 3px;\r\n	padding: 0.2em 0;\r\n}\r\nhtml body code::after,\r\nhtml body code::before {\r\n	letter-spacing: -0.2em;\r\n	content: "\\00a0";\r\n}\r\nhtml body pre > code {\r\n	padding: 0;\r\n	margin: 0;\r\n	word-break: normal;\r\n	white-space: pre;\r\n	background: 0 0;\r\n	border: 0;\r\n}\r\nhtml body .highlight {\r\n	margin-bottom: 16px;\r\n}\r\nhtml body .highlight pre,\r\nhtml body pre {\r\n	padding: 1em;\r\n	overflow: auto;\r\n	line-height: 1.45;\r\n	border: #d6d6d6;\r\n	border-radius: 3px;\r\n}\r\nhtml body .highlight pre {\r\n	margin-bottom: 0;\r\n	word-break: normal;\r\n}\r\nhtml body pre code,\r\nhtml body pre tt {\r\n	display: inline;\r\n	max-width: initial;\r\n	padding: 0;\r\n	margin: 0;\r\n	overflow: initial;\r\n	line-height: inherit;\r\n	word-wrap: normal;\r\n	background-color: transparent;\r\n	border: 0;\r\n}\r\nhtml body pre code:after,\r\nhtml body pre code:before,\r\nhtml body pre tt:after,\r\nhtml body pre tt:before {\r\n	content: normal;\r\n}\r\nhtml body blockquote,\r\nhtml body dl,\r\nhtml body ol,\r\nhtml body p,\r\nhtml body pre,\r\nhtml body ul {\r\n	margin-top: 0;\r\n	margin-bottom: 16px;\r\n}\r\nhtml body kbd {\r\n	color: #000;\r\n	border: 1px solid #d6d6d6;\r\n	border-bottom: 2px solid #c7c7c7;\r\n	padding: 2px 4px;\r\n	background-color: #f0f0f0;\r\n	border-radius: 3px;\r\n}\r\n@media print {\r\n	html body {\r\n		background-color: #fff;\r\n	}\r\n	html body h1,\r\n	html body h2,\r\n	html body h3,\r\n	html body h4,\r\n	html body h5,\r\n	html body h6 {\r\n		color: #000;\r\n		page-break-after: avoid;\r\n	}\r\n	html body blockquote {\r\n		color: #5c5c5c;\r\n	}\r\n	html body pre {\r\n		page-break-inside: avoid;\r\n	}\r\n	html body table {\r\n		display: table;\r\n	}\r\n	html body img {\r\n		display: block;\r\n		max-width: 100%;\r\n		max-height: 100%;\r\n	}\r\n	html body code,\r\n	html body pre {\r\n		word-wrap: break-word;\r\n		white-space: pre;\r\n	}\r\n}\r\n.scrollbar-style::-webkit-scrollbar {\r\n	width: 8px;\r\n}\r\n.scrollbar-style::-webkit-scrollbar-track {\r\n	border-radius: 10px;\r\n	background-color: transparent;\r\n}\r\n.scrollbar-style::-webkit-scrollbar-thumb {\r\n	border-radius: 5px;\r\n	background-color: rgba(150, 150, 150, 0.66);\r\n	border: 4px solid rgba(150, 150, 150, 0.66);\r\n	background-clip: content-box;\r\n}\r\n';
  const beautifyButtonCSS = '/* 美化按钮 */\r\ninput[type="submit"],\r\nbutton {\r\n	display: inline-flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	line-height: 1;\r\n	height: 32px;\r\n	white-space: nowrap;\r\n	cursor: pointer;\r\n	/* color: #606266; */\r\n	text-align: center;\r\n	box-sizing: border-box;\r\n	outline: none;\r\n	transition: 0.1s;\r\n	font-weight: 500;\r\n	user-select: none;\r\n	vertical-align: middle;\r\n	-webkit-appearance: none;\r\n	background-color: #ffffff;\r\n	border: 1px solid #dcdfe6;\r\n	border-color: #dcdfe6;\r\n	padding: 8px 15px;\r\n	font-size: 14px;\r\n	border-radius: 4px;\r\n}\r\n\r\ninput[type="submit"]:hover,\r\ninput[type="submit"]:focus,\r\nbutton:hover,\r\nbutton:focus {\r\n	color: #409eff;\r\n	border-color: #c6e2ff;\r\n	background-color: #ecf5ff;\r\n	outline: none;\r\n}\r\n\r\ninput[type="url"] {\r\n	position: relative;\r\n	font-size: 14px;\r\n	display: inline-flex;\r\n	line-height: 32px;\r\n	box-sizing: border-box;\r\n	vertical-align: middle;\r\n	-webkit-appearance: none;\r\n	/* color: #606266; */\r\n	padding: 0;\r\n	outline: none;\r\n	border: none;\r\n	background: none;\r\n	flex-grow: 1;\r\n	align-items: center;\r\n	justify-content: center;\r\n	padding: 1px 11px;\r\n	background-color: #ffffff;\r\n	background-image: none;\r\n	border-radius: 4px;\r\n	cursor: text;\r\n	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n	transform: translateZ(0);\r\n	box-shadow: 0 0 0 1px #dcdfe6 inset;\r\n\r\n	width: 100%;\r\n	width: -moz-available;\r\n	width: -webkit-fill-available;\r\n	width: fill-available;\r\n}\r\n\r\ninput[type="url"]::placeholder {\r\n	color: #a8abb2;\r\n}\r\n\r\ninput[type="url"]:hover {\r\n	box-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n\r\ninput[type="url"]:focus {\r\n	box-shadow: 0 0 0 1px #409eff inset;\r\n}\r\n';
  const beautifyRadioCSS = 'label.radio-label {\r\n	font-weight: 500;\r\n	position: relative;\r\n	cursor: pointer;\r\n	display: inline-flex;\r\n	align-items: center;\r\n	white-space: normal;\r\n	outline: none;\r\n	font-size: 14px;\r\n	user-select: none;\r\n	margin-right: 32px;\r\n	height: 32px;\r\n	padding: 4px;\r\n	border-radius: 4px;\r\n	box-sizing: border-box;\r\n}\r\nlabel:has(input[type="radio"]:checked),\r\nlabel:has(input[type="radio"]:checked) a {\r\n	color: #409eff;\r\n}\r\nlabel.radio-label input[type="radio"] {\r\n	margin-right: 4px;\r\n	width: 14px;\r\n	height: 14px;\r\n}\r\nlabel.radio-label input[type="radio"]:checked {\r\n	-webkit-appearance: none;\r\n	-moz-appearance: none;\r\n	appearance: none;\r\n	border-radius: 50%;\r\n	width: 14px;\r\n	height: 14px;\r\n	outline: none;\r\n	border: 4px solid #409eff;\r\n	cursor: pointer;\r\n}\r\nlabel.radio-label input[type="radio"]:checked + span {\r\n	color: #409eff;\r\n}\r\n';
  const beautifyTextAreaCSS = "textarea {\r\n	position: relative;\r\n	display: inline-block;\r\n	width: 100%;\r\n	vertical-align: bottom;\r\n	font-size: 14px;\r\n	position: relative;\r\n	display: block;\r\n	resize: vertical;\r\n	padding: 5px 11px;\r\n	line-height: 1.5;\r\n	box-sizing: border-box;\r\n	width: 100%;\r\n	font-size: inherit;\r\n	font-family: inherit;\r\n	/* color: #606266; */\r\n	background-color: #ffffff;\r\n	background-image: none;\r\n	-webkit-appearance: none;\r\n	box-shadow: 0 0 0 1px #dcdfe6 inset;\r\n	border-radius: 4px;\r\n	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n	border: none;\r\n}\r\ntextarea:focus {\r\n	outline: none;\r\n	box-shadow: 0 0 0 1px #409eff inset;\r\n}\r\n";
  const beautifyVersionsPageCSS = 'ul.history_versions,\r\nul.history_versions li {\r\n	width: 100%;\r\n}\r\nul.history_versions li {\r\n	display: flex;\r\n	flex-direction: column;\r\n	margin: 25px 0px;\r\n}\r\n.diff-controls input[type="radio"]:nth-child(2) {\r\n	margin-left: 5px;\r\n}\r\n.flex-align-item-center {\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n.script-tag {\r\n	margin-bottom: 8px;\r\n}\r\n.script-tag-version a {\r\n	color: #656d76;\r\n	fill: #656d76;\r\n	text-decoration: none;\r\n	width: fit-content;\r\n	width: -moz-fit-content;\r\n}\r\n.script-tag-version a:hover svg {\r\n	color: #00a3f5;\r\n	fill: #00a3f5;\r\n}\r\n.script-tag-version a > span {\r\n	margin-left: 0.25rem;\r\n}\r\n.script-note-box-body {\r\n	border-radius: 0.375rem;\r\n	border-style: solid;\r\n	border-width: max(1px, 0.0625rem);\r\n	border-color: #d0d7de;\r\n	color: #1f2328;\r\n	padding: 16px;\r\n	overflow-wrap: anywhere;\r\n}\r\n.script-note-box-body p {\r\n	margin-bottom: unset;\r\n}\r\n';
  const beautifyUploadImageCSS = '/* 隐藏 添加： */\r\nlabel[for="discussion_comments_attributes_0_attachments"],\r\nlabel[for="comment_attachments"] {\r\n	display: none;\r\n}\r\ninput[type="file"] {\r\n	width: 100%;\r\n	font-size: 20px;\r\n	background: #e2e2e2;\r\n	padding: 40px 0px;\r\n	border-radius: 10px;\r\n	text-align-last: center;\r\n}\r\n';
  const compatibleBeautifyCSS = "#main-header {\r\n	background-color: #670000 !important;\r\n	background-image: linear-gradient(#670000, #990000) !important;\r\n}\r\n#site-nav-vue {\r\n	flex-wrap: wrap;\r\n	justify-content: flex-end;\r\n}\r\n.open-sidebar {\r\n	border-width: 1px;\r\n	border-radius: 3px;\r\n	margin-right: 0;\r\n}\r\ninput.search-submit {\r\n	transform: translateY(-5%) !important;\r\n	margin-left: 10px;\r\n}\r\n#script-content code {\r\n	word-wrap: break-word;\r\n}\r\n.code-container ::selection {\r\n	background-color: #3d4556 !important;\r\n}\r\n";
  const GreasyforkBeautify = {
    init() {
      PopsPanel.execMenuOnce("beautifyPage", () => {
        this.beautifyPageElement();
      });
      if (GreasyforkRouter.isVersion()) {
        PopsPanel.execMenuOnce("beautifyHistoryVersionPage", () => {
          this.beautifyHistoryVersionPage();
        });
      }
      PopsPanel.execMenuOnce("beautifyGreasyforkBeautify", () => {
        this.beautifyGreasyforkBeautify();
      });
      PopsPanel.execMenuOnce("beautifyUploadImage", () => {
        this.beautifyUploadImage();
      });
    },
    /**
     * 美化页面元素
     */
    beautifyPageElement() {
      log.info("美化页面元素");
      _GM_addStyle(beautifyMarkdownCSS);
      _GM_addStyle(beautifyButtonCSS);
      _GM_addStyle(beautifyRadioCSS);
      _GM_addStyle(beautifyTextAreaCSS);
      _GM_addStyle(`
        p:has(input[type="submit"][name="update-and-sync"]){
          margin-top: 10px;
        }
        `);
      domUtils.ready(function() {
        let markupChoiceELement = document.querySelector(
          'a[target="markup_choice"][href*="daringfireball.net"]'
        );
        if (markupChoiceELement) {
          markupChoiceELement.parentElement.replaceChild(
            domUtils.createElement("span", {
              textContent: "Markdown"
            }),
            markupChoiceELement
          );
        }
        if (globalThis.location.pathname.endsWith("/admin") && !document.querySelector('input[type="submit"][name="update-only"]')) {
          _GM_addStyle(`
                .indented{
                    padding-left: unset;
                }
                `);
        }
      });
    },
    /**
     * 美化 历史版本 页面
     */
    beautifyHistoryVersionPage() {
      log.info("美化 历史版本 页面");
      let displayCSS = `
        .version-number,
        .version-date,
        .version-changelog{
          display: none;
        }
        `;
      _GM_addStyle(beautifyVersionsPageCSS);
      _GM_addStyle(displayCSS);
      domUtils.ready(function() {
        let historyVersionsULElement = document.querySelector(
          "ul.history_versions"
        );
        if (!historyVersionsULElement) {
          Qmsg.error(i18next.t("未找到history_versions元素列表"));
          return;
        }
        Array.from(historyVersionsULElement.children).forEach((liElement) => {
          var _a2, _b;
          let versionUrl = liElement.querySelector(".version-number a").href;
          let versionNumber = liElement.querySelector(
            ".version-number a"
          ).innerText;
          let versionDate = (_a2 = liElement.querySelector(".version-date")) == null ? void 0 : _a2.getAttribute("datetime");
          let updateNote = ((_b = liElement.querySelector(".version-changelog")) == null ? void 0 : _b.innerHTML) || "";
          let versionDateElement = domUtils.createElement("span", {
            className: "script-version-date",
            innerHTML: utils.formatTime(
              versionDate,
              i18next.t("yyyy年MM月dd日 HH:mm:ss")
            )
          });
          let tagElement = domUtils.createElement("div", {
            className: "script-tag",
            innerHTML: `
                    <div class="script-tag-version">
                        <a href="${versionUrl}" class="flex-align-item-center">
                        <svg aria-label="Tag" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                        </svg>
                        <span>${versionNumber}</span>
                        </a>
                    </div>`
          });
          let boxBodyElement = domUtils.createElement("div", {
            className: "script-note-box-body",
            innerHTML: updateNote
          });
          liElement.appendChild(versionDateElement);
          liElement.appendChild(tagElement);
          liElement.appendChild(boxBodyElement);
        });
      });
    },
    /**
     * 美化 Greasyfork Beautify脚本
     */
    beautifyGreasyforkBeautify() {
      log.info("美化 Greasyfork Beautify脚本");
      _GM_addStyle(compatibleBeautifyCSS);
      if (utils.isPhone()) {
        _GM_addStyle(`
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
            }`);
      } else {
        _GM_addStyle(`
            section#script-info{
                margin-top: 10px;
            }`);
      }
    },
    /**
     * 美化上传图片
     */
    beautifyUploadImage() {
      log.info("美化上传图片");
      _GM_addStyle(beautifyUploadImageCSS);
      domUtils.ready(() => {
        function clearErrorTip(element) {
          while (element.nextElementSibling) {
            element.parentElement.removeChild(element.nextElementSibling);
          }
        }
        let $fileInputList = document.querySelectorAll('input[type="file"]');
        $fileInputList.forEach(($input) => {
          if ($input.getAttribute("name") === "code_upload") {
            return;
          }
          if ($input.hasAttribute("accept") && $input.getAttribute("accept").includes("javascript")) {
            return;
          }
          domUtils.on($input, ["propertychange", "input"], function(event) {
            clearErrorTip(event.target);
            let chooseImageFiles = event.currentTarget.files;
            if (!chooseImageFiles) {
              return;
            }
            if (chooseImageFiles.length === 0) {
              return;
            }
            log.info(["选择的图片", chooseImageFiles]);
            if (chooseImageFiles.length > 5) {
              domUtils.after(
                $input,
                domUtils.createElement("p", {
                  textContent: i18next.t(`❌ 最多同时长传5张图片`)
                })
              );
            }
            let notAllowImage = [];
            Array.from(chooseImageFiles).forEach((imageFile) => {
              if (imageFile.size > 204800 || !imageFile.type.match(/png|jpg|jpeg|gif|apng|webp/i)) {
                notAllowImage.push(imageFile);
              }
            });
            if (notAllowImage.length === 0) {
              return;
            }
            notAllowImage.forEach((imageFile) => {
              domUtils.after(
                $input,
                domUtils.createElement("p", {
                  textContent: i18next.t("❌ 图片：{{name}} 大小：{{size}}", {
                    name: imageFile.name,
                    size: imageFile.size
                  })
                })
              );
            });
          });
        });
        let $textAreaSelectorString = [
          /* 某条反馈内的回复框 */
          "textarea#comment_text",
          /* 反馈页面的回复框 */
          "textarea.comment-entry"
        ];
        $textAreaSelectorString.forEach((selector) => {
          domUtils.on(selector, "paste", (event) => {
            log.info(["触发粘贴事件", event]);
            setTimeout(() => {
              domUtils.trigger($fileInputList, "input");
            }, 100);
          });
        });
      });
    }
  };
  const GreasyforkCode = {
    init() {
      this.repairCodeLineNumber();
    },
    /**
     * 修复代码的行号显示不够问题
     * 超过1w行不会高亮代码
     */
    repairCodeLineNumber() {
      log.info("修复代码的行号显示不够问题");
      if (PopsPanel.getValue("beautifyGreasyforkBeautify")) {
        _GM_addStyle(`
			.code-container pre code .marker{
				padding-left: 6px;
			}	
			`);
      }
      utils.waitNode(
        "#script-content div.code-container pre.prettyprint ol"
      ).then(($prettyPrintOL) => {
        if ($prettyPrintOL.childElementCount >= 1e3) {
          log.success(
            `当前代码行数${$prettyPrintOL.childElementCount}行，超过1000行，优化行号显示问题`
          );
          _GM_addStyle(`
                    pre.prettyprint{
                        padding-left: 26px;
                    }
					`);
        }
      });
    }
  };
  const GreasyforkAccount = {
    init() {
      PopsPanel.execMenu("autoLogin", () => {
        this.autoLogin();
      });
    },
    /**
     * 自动登录
     */
    autoLogin() {
      utils.waitNode("span.sign-in-link a[rel=nofollow]").then(async () => {
        let user = PopsPanel.getValue("user");
        let pwd = PopsPanel.getValue("pwd");
        if (utils.isNull(user)) {
          Qmsg.error(i18next.t("请先在菜单中录入账号"));
          return;
        }
        if (utils.isNull(pwd)) {
          Qmsg.error(i18next.t("请先在菜单中录入密码"));
          return;
        }
        let csrfToken = document.querySelector("meta[name='csrf-token']");
        if (!csrfToken) {
          Qmsg.error(i18next.t("获取csrf-token失败"));
          return;
        }
        let loginTip = Qmsg.loading(i18next.t("正在登录中..."));
        let postResp = await httpx.post(
          "https://greasyfork.org/zh-CN/users/sign_in",
          {
            fetch: true,
            data: encodeURI(
              `authenticity_token=${csrfToken.getAttribute(
              "content"
            )}&user[email]=${user}&user[password]=${pwd}&user[remember_me]=1&commit=登录`
            ),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );
        loginTip.destroy();
        if (!postResp.status) {
          log.error(postResp);
          Qmsg.error(i18next.t("登录失败，请在控制台查看原因"));
          return;
        }
        let respText = postResp.data.responseText;
        let parseLoginHTMLNode = domUtils.parseHTML(respText, true, true);
        if (parseLoginHTMLNode.querySelectorAll(
          ".sign-out-link a[rel=nofollow][data-method='delete']"
        ).length) {
          Qmsg.success(i18next.t("登录成功，1s后自动跳转"));
          setTimeout(() => {
            window.location.reload();
          }, 1e3);
        } else {
          log.error(postResp);
          log.error(`当前账号:${user}`);
          log.error(`当前密码:${pwd}`);
          Qmsg.error(
            i18next.t("登录失败，可能是账号/密码错误，请在控制台查看原因")
          );
        }
      });
    }
  };
  const GreasyforkForumFilter = {
    init() {
      log.info("论坛-过滤");
      _GM_addStyle(`
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
        `);
      let lockFunction = new utils.LockFunction(() => {
        this.filterDiscussions();
      }, 50);
      utils.mutationObserver(document.body, {
        config: {
          subtree: true,
          childList: true
        },
        callback: () => {
          lockFunction.run();
        }
      });
      lockFunction.run();
    },
    /**
     * 论坛-过滤
     */
    filterDiscussions() {
      const FILTER_SCRIPT_KEY = "greasyfork-discussions-filter-script";
      const FILTER_POST_USER_KEY = "greasyfork-discussions-filter-post-user";
      const FILTER_REPLY_USER_KEY = "greasyfork-discussions-filter-reply-user";
      const filterScript = PopsPanel.getValue(FILTER_SCRIPT_KEY, "");
      const filterPostUser = PopsPanel.getValue(FILTER_POST_USER_KEY, "");
      const filterReplyUser = PopsPanel.getValue(FILTER_REPLY_USER_KEY, "");
      const filterScriptList = filterScript.trim() === "" ? [] : filterScript.split("\n");
      const filterPostUserList = filterPostUser.trim() === "" ? [] : filterPostUser.split("\n");
      const filterReplyUserList = filterReplyUser.trim() === "" ? [] : filterReplyUser.split("\n");
      const SNIPPET_MAP = /* @__PURE__ */ new Map();
      let discussionListContainer = document.querySelectorAll(
        ".discussion-list-container"
      );
      discussionListContainer.forEach(($listContainer, index) => {
        var _a2;
        if (!$listContainer.querySelector("a.script-link")) {
          return;
        }
        const discussionInfo = {
          /** 脚本名 */
          scriptName: $listContainer.querySelector("a.script-link").innerText,
          /** 脚本主页地址 */
          scriptUrl: $listContainer.querySelector("a.script-link").href,
          /** 脚本id */
          scriptId: GreasyforkApi.getScriptId(
            $listContainer.querySelector("a.script-link").href
          ),
          /** 发布的用户名 */
          postUserName: $listContainer.querySelector("a.user-link").innerText,
          /** 发布的用户主页地址 */
          postUserHomeUrl: $listContainer.querySelector("a.user-link").href,
          /** 发布的用户id */
          postUserId: GreasyforkApi.getUserId(
            $listContainer.querySelector("a.user-link").href
          ),
          /** 发布的时间 */
          postTimeStamp: new Date(
            $listContainer.querySelector("relative-time").getAttribute("datetime")
          ),
          /** 发布的地址*/
          snippetUrl: $listContainer.querySelector("a.discussion-title").href,
          /** 发布的内容片段*/
          snippet: $listContainer.querySelector(
            "span.discussion-snippet"
          ).innerText,
          /** 回复的用户名*/
          replyUserName: void 0,
          /** 回复的用户主页地址*/
          replyUserHomeUrl: void 0,
          /** 回复的用户id*/
          replyUserId: void 0,
          /** 回复的时间 */
          replyTimeStamp: void 0
        };
        if ($listContainer.querySelector(
          ".discussion-meta-item .discussion-meta-item"
        )) {
          discussionInfo.replyUserName = $listContainer.querySelector(
            ".discussion-meta-item .discussion-meta-item a.user-link"
          ).innerText;
          discussionInfo.replyUserHomeUrl = $listContainer.querySelector(
            ".discussion-meta-item .discussion-meta-item a.user-link"
          ).href;
          discussionInfo.replyUserId = GreasyforkApi.getUserId(
            discussionInfo.replyUserHomeUrl
          );
          discussionInfo.replyTimeStamp = new Date(
            (_a2 = $listContainer.querySelector(
              ".discussion-meta-item .discussion-meta-item relative-time"
            )) == null ? void 0 : _a2.getAttribute("datetime")
          );
        }
        if (SNIPPET_MAP.has(discussionInfo.snippet) && PopsPanel.getValue("greasyfork-discussions-filter-duplicate-comments")) {
          let discussionTitleElement = SNIPPET_MAP.get(
            discussionInfo.snippet
          ).querySelector("a.discussion-title");
          discussionTitleElement.setAttribute("data-repeat-tip-show", "true");
          let oldCount = 0;
          if (discussionTitleElement.hasAttribute("data-repeat-count")) {
            oldCount = parseInt(
              discussionTitleElement.getAttribute("data-repeat-count")
            );
          }
          oldCount++;
          discussionTitleElement.setAttribute(
            "data-repeat-count",
            oldCount.toString()
          );
          discussionTitleElement.setAttribute(
            "data-repeat-tip-show",
            i18next.t("已过滤：{{oldCount}}", { oldCount })
          );
          log.success([
            `过滤重复内容：${discussionInfo.snippet}`,
            discussionInfo
          ]);
          $listContainer.remove();
          return;
        }
        SNIPPET_MAP.set(discussionInfo.snippet, $listContainer);
        for (const filterScriptId of filterScriptList) {
          if (discussionInfo.scriptId === filterScriptId) {
            log.success([
              `过滤脚本id：${discussionInfo.scriptId}`,
              discussionInfo
            ]);
            $listContainer.remove();
            return;
          }
        }
        for (const filterPostUserId of filterPostUserList) {
          if (discussionInfo.postUserId === filterPostUserId) {
            log.success([
              `过滤发布用户id：${discussionInfo.postUserId}`,
              discussionInfo
            ]);
            $listContainer.remove();
            return;
          }
        }
        if (discussionInfo.replyUserName) {
          for (const filterReplyUserId of filterReplyUserList) {
            if (discussionInfo.replyUserId === filterReplyUserId) {
              log.success([
                `过滤回复用户id：${discussionInfo.replyUserId}`,
                discussionInfo
              ]);
              $listContainer.remove();
              return;
            }
          }
        }
      });
    }
  };
  const GreasyforkForum = {
    init() {
      domUtils.ready(() => {
        GreasyforkForumFilter.init();
      });
    }
  };
  const GreasyforkCollection = {
    init() {
      log.info("添加收藏按钮");
      utils.waitNode("ul#script-links li.current span").then(() => {
        let $collectBtn = domUtils.createElement("li", {
          innerHTML: `
					<a href="javascript:;">
						<span>${i18next.t("收藏")}</span>
					</a>`
        });
        domUtils.append(
          document.querySelector("ul#script-links"),
          $collectBtn
        );
        domUtils.on($collectBtn, "click", () => {
          this.clickEvent();
        });
      });
    },
    async clickEvent() {
      let scriptIdMatch = window.location.pathname.match(/scripts\/([\d]+)/i);
      if (!scriptIdMatch) {
        log.error([scriptIdMatch, window.location.pathname]);
        Qmsg.error(i18next.t("获取脚本id失败"));
        return;
      }
      let scriptId = scriptIdMatch[scriptIdMatch.length - 1];
      log.info("当前脚本id：" + scriptId);
      if (!GreasyforkMenu.isLogin) {
        log.error("请先登录账号");
        Qmsg.error(i18next.t("请先登录账号"));
        return;
      }
      let userId = GreasyforkApi.getUserId(
        GreasyforkMenu.getUserLinkElement().href
      );
      if (userId == null) {
        log.error("获取用户id失败");
        Qmsg.error(i18next.t("获取用户id失败"));
        return;
      }
      let loading = Qmsg.loading(i18next.t("获取收藏夹中..."));
      let userCollection = await GreasyforkApi.getUserCollection(userId);
      loading.close();
      if (!userCollection) {
        return;
      }
      let alertHTML = "";
      userCollection.forEach((userCollectInfo) => {
        alertHTML += `
            <li class="user-collect-item" data-id="${userCollectInfo.id}" data-name="${userCollectInfo.name}">
                <div class="user-collect-name">${userCollectInfo.name}</div>
                <div class="user-collect-btn-container">
                <div class="pops-panel-button collect-add-script-id">
                    <button type="primary" data-icon="" data-righticon="">
                    <span>${i18next.t("添加")}</span>
                    </button>
                </div>
                <div class="pops-panel-button collect-delete-script-id">
                    <button type="danger" data-icon="" data-righticon="">
                    <span>${i18next.t("刪除")}</span>
                    </button>
                </div>
                </div>
            </li>
              `;
      });
      let collectionDialog = pops.alert({
        title: {
          text: i18next.t("收藏集"),
          position: "center"
        },
        content: {
          html: true,
          text: `<ul>${alertHTML}</ul>`
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: true
          }
        },
        btn: {
          ok: {
            enable: false
          }
        },
        width: pops.isPhone() ? "92dvw" : "500px",
        height: "auto",
        drag: true,
        only: true,
        style: `
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
            `
      });
      domUtils.on(
        collectionDialog.$shadowRoot,
        "click",
        ".collect-add-script-id",
        async function(event) {
          let $userCollectItem = event.target.closest(
            ".user-collect-item"
          );
          let setsId = $userCollectItem.dataset.id;
          $userCollectItem.dataset.name;
          let loading2 = Qmsg.loading(i18next.t("添加中..."));
          let formData = await GreasyforkApi.getUserCollectionInfo(
            userId,
            setsId
          );
          if (!formData) {
            loading2.close();
            return;
          }
          let editForm = utils.cloneFormData(formData);
          let saveEditForm = utils.cloneFormData(formData);
          let isCollect = false;
          for (const [key, value] of formData.entries()) {
            if (key === "scripts-included[]" && JSON.stringify(value) == JSON.stringify(scriptId)) {
              isCollect = true;
              break;
            } else {
              saveEditForm.append(key, value);
              editForm.append(key, value);
            }
          }
          if (isCollect) {
            Qmsg.warning(i18next.t("该脚本已经在该收藏集中"));
            loading2.close();
            return;
          }
          editForm.set("add-script", scriptId);
          editForm.set("script-action", "i");
          saveEditForm.append("scripts-included[]", scriptId);
          saveEditForm.set("save", "1");
          let addFormDataSearchParams = new URLSearchParams(editForm);
          let saveFormDataSearchParams = new URLSearchParams(saveEditForm);
          let addData = Array.from(addFormDataSearchParams).map(
            // @ts-ignore
            ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          ).join("&");
          let saveData = Array.from(saveFormDataSearchParams).map(
            // @ts-ignore
            ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          ).join("&");
          log.info(["添加的数据", addData]);
          log.info(["保存的数据", saveData]);
          let addResult = await GreasyforkApi.updateUserSetsInfo(
            userId,
            setsId,
            addData
          );
          if (!addResult) {
            loading2.close();
            return;
          }
          let changeScriptSet = addResult.querySelector(".change-script-set");
          if (!changeScriptSet) {
            Qmsg.error(
              i18next.t("添加失败，{{selector}}元素不存在", {
                selector: ".change-script-set"
              })
            );
            loading2.close();
            return;
          }
          let section = changeScriptSet.querySelector("section");
          if (!section) {
            Qmsg.error(
              i18next.t("添加失败，{{selector}}元素不存在", {
                selector: "section"
              })
            );
            loading2.close();
            return;
          }
          let alertElement = section.querySelector(".alert");
          if (alertElement) {
            pops.alert({
              title: {
                text: i18next.t("添加失败"),
                position: "center"
              },
              content: {
                text: alertElement.innerHTML,
                html: true
              },
              mask: {
                enable: true,
                clickEvent: {
                  toClose: true
                }
              },
              style: `
                        .pops-alert-content{
                            font-style: italic;
                            background-color: #ffc;
                            border: none;
                            border-left: 6px solid #FFEB3B;
                            padding: .5em;
                        }
                        `,
              drag: true,
              dragLimit: true,
              width: pops.isPhone() ? "88vw" : "400px",
              height: pops.isPhone() ? "50vh" : "300px"
            });
          } else {
            await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
            Qmsg.success(i18next.t("添加成功"));
          }
          loading2.close();
        }
      );
      domUtils.on(
        collectionDialog.$shadowRoot,
        "click",
        ".collect-delete-script-id",
        async function(event) {
          let $collectItem = event.target.closest(
            ".user-collect-item"
          );
          let setsId = $collectItem.dataset.id;
          $collectItem.dataset.name;
          let loading2 = Qmsg.loading(i18next.t("删除中..."));
          let formData = await GreasyforkApi.getUserCollectionInfo(
            userId,
            setsId
          );
          if (!formData) {
            loading2.close();
            return;
          }
          let editForm = new FormData();
          let saveEditForm = new FormData();
          for (const [key, value] of formData.entries()) {
            if (key === "scripts-included[]" && JSON.stringify(value) == JSON.stringify(scriptId)) {
              continue;
            } else {
              saveEditForm.append(key, value);
              editForm.append(key, value);
            }
          }
          editForm.set("remove-scripts-included[]", scriptId);
          editForm.set("remove-selected-scripts", "i");
          editForm.delete("script-action");
          saveEditForm.set("save", "1");
          let deleteFormDataSearchParams = new URLSearchParams(editForm);
          let saveFormDataSearchParams = new URLSearchParams(saveEditForm);
          let removeData = Array.from(deleteFormDataSearchParams).map(
            // @ts-ignore
            ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          ).join("&");
          let saveData = Array.from(saveFormDataSearchParams).map(
            // @ts-ignore
            ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          ).join("&");
          log.info(["删除的数据", removeData]);
          log.info(["保存的数据", saveData]);
          let removeResult = await GreasyforkApi.updateUserSetsInfo(
            userId,
            setsId,
            removeData
          );
          if (!removeResult) {
            loading2.close();
            return;
          }
          await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
          Qmsg.success(i18next.t("删除成功"));
          loading2.close();
        }
      );
    }
  };
  const Greasyfork = {
    init() {
      this.checkPage();
      GreasyforkBeautify.init();
      if (GreasyforkRouter.isCodeStrict()) {
        PopsPanel.execMenuOnce("fullScreenOptimization", () => {
          this.fullScreenOptimization();
        });
      }
      if (GreasyforkRouter.isCode()) {
        GreasyforkCode.init();
      }
      if (GreasyforkRouter.isDiscuessions()) {
        GreasyforkForum.init();
      }
      domUtils.ready(() => {
        GreasyforkMenu.initEnv();
        GreasyforkAccount.init();
        if (GreasyforkRouter.isScriptList()) {
          GreasyforkShield.init();
        }
        GreasyforkMenu.handleLocalGotoCallBack();
        Greasyfork.setFindCodeSearchBtn();
        GreasyforkCollection.init();
        Greasyfork.repairImgShow();
        Greasyfork.scriptHomepageAddedTodaySUpdate();
        Greasyfork.languageSelectorLocale();
        PopsPanel.execMenuOnce("optimizeImageBrowsing", () => {
          Greasyfork.optimizeImageBrowsing();
        });
        PopsPanel.execMenuOnce("overlayBedImageClickEvent", () => {
          Greasyfork.overlayBedImageClickEvent();
        });
        if (GreasyforkRouter.isCodeStrict()) {
          PopsPanel.execMenuOnce("addCopyCodeButton", () => {
            Greasyfork.addCopyCodeButton();
          });
        }
        if (!GreasyforkRouter.isCodeStrict()) {
          Greasyfork.addMarkdownCopyButton();
        }
      });
    },
    /**
     * 设置代码搜索按钮(对于库)
     */
    setFindCodeSearchBtn() {
      log.info("设置代码搜索按钮(对于库)");
      utils.waitNode("ul#script-links li.current span").then(() => {
        let searchBtn = domUtils.createElement("li", {
          innerHTML: `
					<a href="javascript:;">
						<span>${i18next.t("寻找引用")}</span>
					</a>`
        });
        domUtils.append(
          document.querySelector(
            "ul#script-links"
          ),
          searchBtn
        );
        domUtils.on(searchBtn, "click", async function() {
          let scriptIdMatch = window.location.pathname.match(/scripts\/([\d]+)/i);
          if (!scriptIdMatch) {
            log.error([scriptIdMatch, window.location.pathname]);
            Qmsg.error(i18next.t("获取脚本id失败"));
            return;
          }
          let scriptId = scriptIdMatch[scriptIdMatch.length - 1];
          window.location.href = GreasyforkApi.getCodeSearchUrl(
            `greasyfork.org/scripts/${scriptId}`
          );
        });
      });
    },
    /**
     * 修复图片显示问题
     */
    repairImgShow() {
      if (window.innerWidth < window.innerHeight) {
        log.info("修复图片显示问题");
        _GM_addStyle(`
            img.lum-img{
                width: 100% !important;
                height: 100% !important;
            }
          `);
      }
    },
    /**
     * 优化图片浏览
     */
    optimizeImageBrowsing() {
      log.info("优化图片浏览");
      {
        _GM_addStyle(_GM_getResourceText("ViewerCSS"));
      }
      _GM_addStyle(`
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
        `);
      function viewIMG(imgList = [], _index_ = 0) {
        let viewerULNodeHTML = "";
        imgList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
        });
        let viewerULNode = domUtils.createElement("ul", {
          innerHTML: viewerULNodeHTML
        });
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          }
        });
        _index_ = _index_ < 0 ? 0 : _index_;
        viewer.view(_index_);
        viewer.zoomTo(1);
        viewer.show();
      }
      function getImgElementSrc(element) {
        return element.getAttribute("data-src") || element.getAttribute("src") || element.getAttribute("alt");
      }
      domUtils.on(
        document,
        "click",
        "img",
        function(event) {
          var _a2;
          let imgElement = event.target;
          if (((_a2 = imgElement.parentElement) == null ? void 0 : _a2.localName) === "a" && imgElement.hasAttribute("data-screenshots")) {
            return;
          }
          if (imgElement.closest(".viewer-container")) {
            return;
          }
          if (imgElement.closest(".lum-lightbox-position-helper")) {
            return;
          }
          let userContentElement = imgElement.closest(".user-content");
          let imgList = [];
          let imgIndex = 0;
          let imgElementList = [];
          let currentImgSrc = getImgElementSrc(imgElement);
          if (currentImgSrc == null ? void 0 : currentImgSrc.startsWith("https://img.shields.io")) {
            return;
          }
          if (userContentElement) {
            userContentElement.querySelectorAll("img").forEach((childImgElement) => {
              imgElementList.push(childImgElement);
              let imgSrc = getImgElementSrc(childImgElement);
              let $parent = childImgElement.parentElement;
              if (($parent == null ? void 0 : $parent.localName) === "a") {
                imgSrc = $parent.getAttribute("data-href") || $parent.href;
              }
              imgList.push(imgSrc);
            });
            imgIndex = imgElementList.indexOf(imgElement);
            if (imgIndex === -1) {
              imgIndex = 0;
            }
          } else {
            imgList.push(currentImgSrc);
            imgIndex = 0;
          }
          log.success(["点击浏览图片👉", imgList, imgIndex]);
          viewIMG(imgList, imgIndex);
        }
      );
      document.querySelectorAll(".user-screenshots").forEach((element) => {
        let linkElement = element.querySelector("a");
        if (!linkElement) {
          return;
        }
        let imgSrc = linkElement.getAttribute("data-href") || linkElement.getAttribute("href");
        let imgElement = element.querySelector("img");
        if (!imgElement) {
          return;
        }
        imgElement.setAttribute("data-screenshots", "true");
        imgElement.setAttribute("data-src", imgSrc);
        linkElement.setAttribute("href", "javascript:;");
        domUtils.after(linkElement, imgElement);
        linkElement.remove();
      });
    },
    /**
     * 覆盖图床图片的parentElement的a标签
     */
    overlayBedImageClickEvent() {
      log.info("覆盖图床图片的parentElement的a标签");
      document.querySelectorAll(".user-content a>img").forEach((imgElement) => {
        let linkElement = imgElement.parentElement;
        let url = linkElement.getAttribute("href");
        linkElement.setAttribute("data-href", url);
        linkElement.removeAttribute("href");
        domUtils.on(linkElement, "click", void 0, function(event) {
          Qmsg.warning(
            `<div style="overflow-wrap: anywhere;">${i18next.t(
            "拦截跳转："
          )}<a href="${url}" target="_blank">${url}</a></div>`,
            {
              html: true,
              timeout: 5e3,
              zIndex: utils.getMaxZIndex()
            }
          );
        });
      });
    },
    /**
     * 脚本首页新增今日更新
     */
    async scriptHomepageAddedTodaySUpdate() {
      if (!GreasyforkRouter.isScript() || !document.querySelector("#install-area")) {
        return;
      }
      log.info("脚本首页新增今日更新");
      let scriptStatsJSONInfo = await GreasyforkApi.getScriptStats(
        GreasyforkApi.getScriptId()
      );
      if (!scriptStatsJSONInfo) {
        return;
      }
      let scriptStatsJSON = utils.toJSON(scriptStatsJSONInfo.responseText);
      log.info(["统计信息", scriptStatsJSON]);
      let todayStatsJSON = scriptStatsJSON[utils.formatTime(void 0, "yyyy-MM-dd")];
      if (!todayStatsJSON) {
        log.error("今日份的统计信息不存在");
        return;
      }
      let update_checks = todayStatsJSON["update_checks"];
      log.info(["今日统计信息", todayStatsJSON]);
      domUtils.after(
        "dd.script-show-daily-installs",
        domUtils.createElement("dt", {
          className: "script-show-daily-update_checks",
          innerHTML: `<span>${i18next.t("今日检查")}</span>`
        })
      );
      domUtils.after(
        "dt.script-show-daily-update_checks",
        domUtils.createElement("dd", {
          className: "script-show-daily-update_checks",
          innerHTML: "<span>" + update_checks + "</span>"
        })
      );
    },
    /**
     * 添加复制代码按钮
     */
    addCopyCodeButton() {
      log.info("添加复制代码按钮");
      utils.waitNode("div#script-content div.code-container").then(($codeContainer) => {
        let copyButton = domUtils.createElement(
          "button",
          {
            textContent: i18next.t("复制代码")
          },
          {
            style: "margin-bottom: 1em;"
          }
        );
        domUtils.on(copyButton, "click", async function() {
          let loading = Qmsg.loading(i18next.t("加载文件中..."));
          let getResp = await httpx.get(
            `https://greasyfork.org/zh-CN/scripts/${GreasyforkApi.getScriptId()}.json`,
            {
              fetch: true,
              responseType: "json"
            }
          );
          if (!getResp.status) {
            loading.close();
            return;
          }
          let respJSON = utils.toJSON(getResp.data.responseText);
          let code_url = respJSON["code_url"];
          log.success(["代码地址：", code_url]);
          let scriptJS = await httpx.get(code_url);
          if (!scriptJS.status) {
            loading.close();
            return;
          }
          loading.close();
          utils.setClip(scriptJS.data.responseText);
          Qmsg.success(i18next.t("复制成功"));
        });
        domUtils.before($codeContainer, copyButton);
      });
    },
    /**
     * F11全屏，F键代码全屏
     */
    fullScreenOptimization() {
      log.info("F11全屏，F键代码全屏");
      _GM_addStyle(`
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
        `);
      let isFullScreen = false;
      domUtils.keydown(
        window,
        function(event) {
          if (event.key.toLowerCase() === "f") {
            let codeElement = document.querySelector(
              "#script-content div.code-container code"
            );
            if (event.altKey && event.shiftKey) {
              utils.preventEvent(event);
              if (codeElement.classList.contains("code-wide-screen")) {
                codeElement.classList.remove("code-wide-screen");
              } else {
                codeElement.classList.add("code-wide-screen");
              }
            } else if (!event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey) {
              utils.preventEvent(event);
              if (isFullScreen) {
                utils.exitFullScreen(codeElement);
                isFullScreen = false;
              } else {
                utils.enterFullScreen(codeElement);
                isFullScreen = true;
              }
            }
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 在Markdown右上角添加复制按钮
     */
    addMarkdownCopyButton() {
      log.info("在Markdown右上角添加复制按钮");
      _GM_addStyle(`
        pre{
          position: relative;
          margin-bottom: 0px !important;
          width: 100%;
        }
        `);
      _GM_addStyle(`
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
        `);
      _GM_addStyle(`
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
        `);
      function getCopyElement() {
        let copyElement = domUtils.createElement("div", {
          className: "zeroclipboard-container",
          innerHTML: `
				<clipboard-copy class="js-clipboard-copy">
				<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-copy">
					<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
				</svg>
				<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-check-copy">
					<path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
				</svg>
				</clipboard-copy>
            `
        });
        let clipboardCopyElement = copyElement.querySelector(
          ".js-clipboard-copy"
        );
        let octiconCopyElement = copyElement.querySelector(
          ".octicon-copy"
        );
        let octiconCheckCopyElement = copyElement.querySelector(
          ".octicon-check-copy"
        );
        domUtils.on(copyElement, "click", function() {
          let codeElement = copyElement.parentElement.querySelector("code");
          if (!codeElement && copyElement.parentElement.className.includes("prettyprinted")) {
            codeElement = copyElement.parentElement;
          }
          if (!codeElement) {
            Qmsg.error(i18next.t("未找到{{selector}}元素", { selector: "code" }));
            return;
          }
          utils.setClip(codeElement.innerText || codeElement.textContent);
          clipboardCopyElement.setAttribute("success", "true");
          octiconCopyElement.setAttribute("aria-hidden", "true");
          octiconCheckCopyElement.removeAttribute("aria-hidden");
          let tooltip = pops.tooltip({
            target: clipboardCopyElement,
            content: i18next.t("✅ 复制成功!"),
            position: "left",
            className: "github-tooltip",
            alwaysShow: true
          });
          setTimeout(() => {
            clipboardCopyElement.removeAttribute("success");
            octiconCheckCopyElement.setAttribute("aria-hidden", "true");
            octiconCopyElement.removeAttribute("aria-hidden");
            tooltip.close();
          }, 2e3);
        });
        return copyElement;
      }
      document.querySelectorAll("pre").forEach((preElement) => {
        let zeroclipboardElement = preElement.querySelector(
          "div.zeroclipboard-container"
        );
        if (zeroclipboardElement) {
          return;
        }
        let copyElement = getCopyElement();
        let snippetClipboardContentElement = domUtils.createElement("div", {
          className: "snippet-clipboard-content"
        });
        domUtils.before(preElement, snippetClipboardContentElement);
        snippetClipboardContentElement.appendChild(preElement);
        snippetClipboardContentElement.appendChild(copyElement);
      });
    },
    /**
     * 固定当前语言
     */
    languageSelectorLocale() {
      let localeLanguage = PopsPanel.getValue("language-selector-locale");
      let currentLocaleLanguage = window.location.pathname.split("/").filter((item) => Boolean(item))[0];
      log.success("选择语言：" + localeLanguage);
      log.success("当前语言：" + currentLocaleLanguage);
      if (utils.isNull(localeLanguage)) {
        return;
      }
      if (localeLanguage === currentLocaleLanguage) {
        return;
      } else {
        let timer = null;
        let url = GreasyforkApi.getSwitchLanguageUrl(localeLanguage);
        GreasyforkApi.switchLanguage(url);
        log.success("新Url：" + url);
        Qmsg.loading(
          i18next.t(
            "当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}",
            {
              currentLocaleLanguage,
              localeLanguage
            }
          ),
          {
            timeout: 3e3,
            showClose: true,
            onClose() {
              clearTimeout(timer);
            }
          }
        );
        Qmsg.info(i18next.t("导航至：") + url, {
          timeout: 3e3
        });
        timer = setTimeout(() => {
          window.location.href = url;
        }, 3e3);
      }
    },
    /**
     * 面板-脚本列表|库
     * @param type
     * @param event
     * @param rightHeaderElement
     * @param rightContainerElement
     * @returns
     */
    async UIScriptList(type, event, rightHeaderElement, rightContainerElement) {
      var _a2, _b, _c;
      if (!GreasyforkMenu.isLogin) {
        Qmsg.error(i18next.t("请先登录账号！"));
        return;
      }
      let userLinkElement = GreasyforkMenu.getUserLinkElement();
      let userLink = userLinkElement.href;
      let userId = (_c = (_b = (_a2 = userLink == null ? void 0 : userLink.split("/")) == null ? void 0 : _a2.pop()) == null ? void 0 : _b.match(/([0-9]+)/)) == null ? void 0 : _c[0];
      let loading = pops.loading({
        mask: {
          enable: true
        },
        parent: rightContainerElement,
        content: {
          text: i18next.t("获取信息中，请稍后...")
        },
        addIndexCSS: false
      });
      let userInfo = await GreasyforkApi.getUserInfo(userId);
      loading.close();
      if (!userInfo) {
        return;
      }
      log.info(userInfo);
      let scriptList = type === "script-list" ? userInfo["scriptList"] : userInfo["scriptLibraryList"];
      Qmsg.success(
        i18next.t("获取成功，共 {{count}} 个", {
          count: scriptList.length
        })
      );
      for (const scriptInfo of scriptList) {
        let liElement = domUtils.createElement("li", {
          className: "w-script-list-item",
          innerHTML: `
				<div class="w-script-info">
				<div class="w-script-name">
					<a href="${scriptInfo["url"]}" target="_blank">${scriptInfo["name"]}</a>
				</div>
				<div class="w-script-fan-score">
					<p>${i18next.t("评分：")}${scriptInfo["fan_score"]}</p>
				</div>
				<div class="w-script-locale">
					<p>${i18next.t("语言：")}${scriptInfo["locale"]}</p>
				</div>
				<div class="w-script-version">
					<p>${i18next.t("版本：")}${scriptInfo["version"]}</p>
				</div>
				<div class="w-script-update-time">
					<p>${i18next.t("更新：")}${utils.getDaysDifference(
          new Date(scriptInfo["code_updated_at"]).getTime(),
          void 0,
          "auto"
        )}前</p>
				</div>
				</div>
            `
        });
        let scriptInfoElement = liElement.querySelector(
          ".w-script-info"
        );
        let buttonElement = domUtils.createElement("div", {
          className: "pops-panel-button",
          innerHTML: `
				<button type="primary" data-icon="" data-righticon="false">
				<span>${i18next.t("同步代码")}</span>
				</button>
				`
        });
        if (scriptInfo["deleted"]) {
          liElement.classList.add("w-script-deleted");
          buttonElement.querySelector("button").setAttribute("disabled", "true");
        }
        domUtils.on(buttonElement, "click", void 0, async function() {
          log.success(["同步", scriptInfo]);
          let btn = buttonElement.querySelector("button");
          let span = buttonElement.querySelector(
            "button span"
          );
          let iconElement = domUtils.createElement(
            "i",
            {
              className: "pops-bottom-icon",
              innerHTML: pops.config.iconSVG.loading
            },
            {
              "is-loading": true
            }
          );
          btn.setAttribute("disabled", "true");
          btn.setAttribute("data-icon", "true");
          span.innerText = i18next.t("同步中...");
          domUtils.before(span, iconElement);
          let scriptId = scriptInfo == null ? void 0 : scriptInfo["id"];
          let codeSyncFormData = await GreasyforkApi.getSourceCodeSyncFormData(
            scriptId.toString()
          );
          if (codeSyncFormData) {
            const SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY = "script[script_sync_type_id]";
            if (codeSyncFormData.has(SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY)) {
              let syncTypeId = codeSyncFormData.get(
                SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY
              );
              let syncMode = "";
              if (syncTypeId.toString() === "1") {
                syncMode = i18next.t("手动");
              } else if (syncTypeId.toString() === "2") {
                syncMode = i18next.t("自动");
              } else if (syncTypeId.toString() === "3") {
                syncMode = "webhook";
              }
              let oldSyncTypeElement = liElement.querySelector(
                ".w-script-sync-type"
              );
              if (oldSyncTypeElement) {
                oldSyncTypeElement.querySelector("p").innerText = i18next.t(
                  "同步方式：{{syncMode}}",
                  { syncMode }
                );
              } else {
                domUtils.append(
                  scriptInfoElement,
                  `
								<div class="w-script-sync-type">
									<p>${i18next.t("同步方式：{{syncMode}}", {
                  syncMode
                })}
									</p>
								</div>`
                );
              }
              let syncUpdateResponse = await GreasyforkApi.sourceCodeSync(
                scriptInfo["id"].toString(),
                codeSyncFormData
              );
              if (syncUpdateResponse) {
                Qmsg.success(i18next.t("同步成功"));
              } else {
                Qmsg.error(i18next.t("同步失败"));
              }
            } else {
              Qmsg.error(i18next.t("该脚本未设置同步信息"));
            }
          }
          btn.removeAttribute("disabled");
          btn.removeAttribute("data-icon");
          span.innerText = i18next.t("同步代码");
          iconElement.remove();
        });
        liElement.appendChild(buttonElement);
        rightContainerElement.appendChild(liElement);
      }
    },
    /**
     * 检测gf页面是否正确加载，有时候会出现
     * We're down for maintenance. Check back again soon.
     */
    checkPage() {
      log.info("检测gf页面是否正确加载，有时候会出现");
      domUtils.ready(() => {
        if (document.body.firstElementChild && document.body.firstElementChild.localName === "p" && document.body.firstElementChild.innerText.includes(
          "We're down for maintenance. Check back again soon."
        )) {
          let checkPageTime = parseInt(
            _GM_getValue(
              "greasyfork-check-page-time",
              0
            )
          );
          if (checkPageTime && Date.now() - checkPageTime < 5 * 1e3) {
            Qmsg.error(
              i18next.t("上次重载时间 {{time}}，5秒内拒绝反复重载", {
                time: utils.formatTime(checkPageTime, "yyyy-MM-dd HH:mm:ss")
              })
            );
            return;
          }
          _GM_setValue("greasyfork-check-page-time", Date.now());
          window.location.reload();
        }
      });
    }
  };
  const SettingUIScriptList = {
    id: "greasy-fork-panel-config-script-list",
    title: i18next.t("脚本列表"),
    callback(event, rightHeaderElement, rightContainerElement) {
      Greasyfork.UIScriptList(
        "script-list",
        event,
        rightHeaderElement,
        rightContainerElement
      );
    },
    forms: []
  };
  const SettingUIScriptLib = {
    id: "greasy-fork-panel-config-library",
    title: i18next.t("库"),
    callback(event, rightHeaderElement, rightContainerElement) {
      Greasyfork.UIScriptList(
        "script-library",
        event,
        rightHeaderElement,
        rightContainerElement
      );
    },
    forms: []
  };
  const UIScriptListCSS = '.w-script-list-item {\r\n	padding: 10px 0;\r\n	border-bottom: 1px solid #e5e5e5;\r\n	font-size: 16px;\r\n	text-align: left;\r\n}\r\n.w-script-version,\r\n.w-script-fan-score,\r\n.w-script-create-time,\r\n.w-script-update-time,\r\n.w-script-locale,\r\n.w-script-sync-type {\r\n	font-size: 14px;\r\n	color: #7c7c7c;\r\n}\r\n.w-script-fan-score {\r\n	margin-left: unset !important;\r\n	text-align: unset !important;\r\n	max-width: unset !important;\r\n}\r\n.w-script-deleted {\r\n	text-decoration: line-through;\r\n	font-style: italic;\r\n	color: red;\r\n}\r\n.w-script-deleted .w-script-name::before {\r\n	content: "【删除】";\r\n}\r\n\r\nli[data-key="user"] .pops-panel-input,\r\nli[data-key="pwd"] .pops-panel-input {\r\n	max-width: 200px;\r\n}\r\n';
  const __PopsPanel__ = {
    data: null,
    oneSuccessExecMenu: null,
    onceExec: null,
    listenData: null
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      /**
       * 菜单项的默认值
       */
      get data() {
        if (__PopsPanel__.data == null) {
          __PopsPanel__.data = new utils.Dictionary();
        }
        return __PopsPanel__.data;
      },
      /**
       * 成功只执行了一次的项
       */
      get oneSuccessExecMenu() {
        if (__PopsPanel__.oneSuccessExecMenu == null) {
          __PopsPanel__.oneSuccessExecMenu = new utils.Dictionary();
        }
        return __PopsPanel__.oneSuccessExecMenu;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExec() {
        if (__PopsPanel__.onceExec == null) {
          __PopsPanel__.onceExec = new utils.Dictionary();
        }
        return __PopsPanel__.onceExec;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    /** 监听器 */
    $listener: {
      /**
       * 值改变的监听器
       */
      get listenData() {
        if (__PopsPanel__.listenData == null) {
          __PopsPanel__.listenData = new utils.Dictionary();
        }
        return __PopsPanel__.listenData;
      }
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (_unsafeWindow.top !== _unsafeWindow.self) {
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: i18next.t("⚙ 设置"),
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPanel();
          }
        }
      ]);
    },
    /** 初始化本地设置默认的值 */
    initPanelDefaultValue() {
      let that = this;
      function initDefaultValue(config) {
        if (!config["attributes"]) {
          return;
        }
        let key = config.attributes[ATTRIBUTE_KEY];
        let defaultValue = config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
        if (key == null) {
          log.warn(["请先配置键", config]);
          return;
        }
        if (that.$data.data.has(key)) {
          log.warn("请检查该key(已存在): " + key);
        }
        that.$data.data.set(key, defaultValue);
      }
      let contentConfigList = this.getPanelContentConfig();
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        for (let formItemIndex = 0; formItemIndex < rightContentConfigList.length; formItemIndex++) {
          let rightContentConfigItem = rightContentConfigList[formItemIndex];
          if (rightContentConfigItem.forms) {
            let childFormConfigList = rightContentConfigItem.forms;
            for (let formChildConfigIndex = 0; formChildConfigIndex < childFormConfigList.length; formChildConfigIndex++) {
              initDefaultValue(childFormConfigList[formChildConfigIndex]);
            }
          } else {
            initDefaultValue(rightContentConfigItem);
          }
        }
      }
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      locaData[key] = value;
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, value);
      }
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let locaData = _GM_getValue(KEY, {});
      let localValue = locaData[key];
      if (localValue == null) {
        if (this.$data.data.has(key)) {
          return this.$data.data.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    /**
     * 删除值
     * @param key 键
     */
    deleteValue(key) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      Reflect.deleteProperty(locaData, key);
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, void 0);
      }
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      let deleteKey = null;
      for (const [key, value] of this.$listener.listenData.entries()) {
        if (value.id === listenerId) {
          deleteKey = key;
          break;
        }
      }
      if (typeof deleteKey === "string") {
        this.$listener.listenData.delete(deleteKey);
      } else {
        console.warn("没有找到对应的监听器");
      }
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      let locaData = _GM_getValue(KEY, {});
      return key in locaData;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     */
    execMenu(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     */
    execMenuOnce(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        if (this.$data.oneSuccessExecMenu.has(key)) {
          return;
        }
        callback(value);
        this.$data.oneSuccessExecMenu.set(key, 1);
      }
    },
    /**
     * 根据key执行一次
     * @param key
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExec.has(key)) {
        return;
      }
      callback();
      this.$data.onceExec.set(key, 1);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      pops.panel({
        title: {
          text: i18next.t("{{SCRIPT_NAME}}-设置", { SCRIPT_NAME }),
          position: "center",
          html: false,
          style: ""
        },
        content: this.getPanelContentConfig(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false
          }
        },
        isMobile: this.isMobile(),
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true,
        style: `
			${UIScriptListCSS}
			`
      });
    },
    isMobile() {
      return window.outerWidth < 550;
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.outerWidth < 550) {
        return "92dvw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight > 450) {
        return "80dvh";
      } else {
        return "450px";
      }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        SettingUIGeneral,
        SettingUIOptimization,
        SettingUIDiscuessions,
        SettingUIShield,
        SettingUIScriptList,
        SettingUIScriptLib
      ];
      return configList;
    }
  };
  PopsPanel.init();
  Greasyfork.init();

})(Qmsg, DOMUtils, Utils, i18next, Viewer);