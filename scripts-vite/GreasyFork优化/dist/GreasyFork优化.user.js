// ==UserScript==
// @name               GreasyFork优化
// @name:en-US         GreasyFork Optimization
// @namespace          https://github.com/WhiteSevs/TamperMonkeyScript
// @version            2024.12.25
// @author             WhiteSevs
// @description        自动登录账号、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库、优化图片浏览、美化页面、Markdown复制按钮
// @description:en-US  Automatically log in to the account, quickly find your own library referenced by other scripts, update your own script list, library, optimize image browsing, beautify the page, Markdown copy button
// @license            GPL-3.0-only
// @icon               data:image/png;base64,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
// @supportURL         https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match              *://greasyfork.org/*
// @require            https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require            https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.6/dist/index.umd.js
// @require            https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.8/dist/index.umd.js
// @require            https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.6/dist/index.umd.js
// @require            https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @require            https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require            https://fastly.jsdelivr.net/npm/i18next@24.2.0/i18next.min.js
// @resource           ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
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

(function (Qmsg, DOMUtils, Utils, i18next, pops, Viewer) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a;
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
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
    "上次重载时间 {{time}}，{{timeout}}秒内拒绝反复重载": "上次重载时间 {{time}}，{{timeout}}秒内拒绝反复重载",
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
    其它错误: "其它错误",
    启用: "启用",
    开启后下面的过滤功能才会生效: "开启后下面的功能才会生效",
    屏蔽脚本: "屏蔽脚本",
    点击查看规则: "点击查看规则",
    过滤: "过滤",
    代码同步: "代码同步",
    美化: "美化",
    修复代码行号显示: "修复代码行号显示",
    修复代码行数超过1k行号显示不全问题: "修复代码行数超过1k行号显示不全问题",
    "添加【寻找引用】按钮": "添加【寻找引用】按钮",
    "在脚本栏添加按钮，一般用于搜索引用该库的相关脚本": "在脚本栏添加按钮，一般用于搜索引用该库的相关脚本",
    "添加【收藏】按钮": "添加【收藏】按钮",
    "在脚本栏添加按钮，一般用于快捷收藏该脚本/库": "在脚本栏添加按钮，一般用于快捷收藏该脚本/库",
    修复图片宽度显示问题: "修复图片宽度显示问题",
    修复图片在移动端宽度超出浏览器宽度问题: "修复图片在移动端宽度超出浏览器宽度问题",
    "添加【今日检查】信息块": "添加【今日检查】信息块",
    "在脚本信息栏添加【今日检查】信息块": "在脚本信息栏添加【今日检查】信息块",
    "给Markdown添加【复制】按钮": "给Markdown添加【复制】按钮",
    "在Markdown内容右上角添加【复制】按钮，点击一键复制Markdown内容": "在Markdown内容右上角添加【复制】按钮，点击一键复制Markdown内容",
    开启后下面的功能才会生效: "开启后下面的功能才会生效",
    检测页面加载: "检测页面加载",
    "检测Greasyfork页面是否正常加载，如加载失败则自动刷新页面": "检测Greasyfork页面是否正常加载，如加载失败则自动刷新页面",
    检测间隔: "检测间隔",
    "设置检测上次刷新页面的间隔时间，当距离上次刷新页面的时间超过设置的值，将不再刷新页面": "设置检测上次刷新页面的间隔时间，当距离上次刷新页面的时间超过设置的值，将不再刷新页面",
    美化顶部导航栏: "美化顶部导航栏",
    "可能会跟Greasyfork Beautify脚本有冲突": "可能会跟Greasyfork Beautify脚本有冲突",
    美化脚本列表: "美化脚本列表",
    "双列显示且添加脚本卡片操作项（安装、收藏）": "双列显示且添加脚本卡片操作项（安装、收藏）",
    操作面板: "操作面板",
    "添加【操作面板】按钮": "添加【操作面板】按钮",
    "在脚本列表页面时为顶部导航栏添加【操作面板】按钮": "在脚本列表页面时为顶部导航栏添加【操作面板】按钮",
    操作: "操作",
    安装此脚本: "安装此脚本",
    脚本: "脚本",
    历史版本: "历史版本",
    自定义已读颜色: "自定义已读颜色",
    在讨论内生效: "在讨论内生效",
    用户: "用户",
    控制台: "控制台",
    "迁移【控制台】到顶部导航栏": "迁移【控制台】到顶部导航栏",
    "将【控制台】按钮移动到顶部导航栏，节省空间": "将【控制台】按钮移动到顶部导航栏，节省空间",
    "在版本下面添加【安装】、【查看代码】按钮": "在版本下面添加【安装】、【查看代码】按钮",
    查看代码: "查看代码",
    添加快捷操作按钮: "添加快捷操作按钮",
    "在每一行讨论的最后面添加【过滤】按钮，需开启过滤功能才会生效": "在每一行讨论的最后面添加【过滤】按钮，需开启过滤功能才会生效",
    选择需要过滤的选项: "选择需要过滤的选项",
    "确定{{type}}：{{filterId}}？": "确定{{type}}：{{filterId}}？",
    "已删除：{{scriptId}}": "已删除：{{scriptId}}",
    帮助文档: "帮助文档",
    "请输入规则，每行一个": "请输入规则，每行一个",
    选择过滤的选项: "选择过滤的选项",
    "脚本id：{{text}}": "脚本id：{{text}}",
    "脚本名：{{text}}": "脚本名：{{text}}",
    "作者id：{{text}}": "作者id：{{text}}",
    "作者名：{{text}}": "作者名：{{text}}",
    "作用域：脚本、脚本搜索、用户主页": "作用域：脚本、脚本搜索、用户主页",
    "更新到 {{version}} 版本": "更新到 {{version}} 版本",
    "降级到 {{version}} 版本": "降级到 {{version}} 版本",
    "重新安装 {{version}} 版本": "重新安装 {{version}} 版本",
    "发布的用户id：{{text}}": "发布的用户id：{{text}}",
    自定义快捷键: "自定义快捷键",
    点击录入快捷键: "点击录入快捷键",
    快捷键发表回复: "快捷键发表回复",
    "在输入框内按下快捷发表回复，例如：{{key}}": "在输入框内按下快捷发表回复，例如：{{key}}",
    请先执行当前的录入操作: "请先执行当前的录入操作",
    清空快捷键: "清空快捷键",
    "请按下快捷键...": "请按下快捷键...",
    成功录入: "成功录入",
    "快捷键 {{key}} 已被 {{isUsedKey}} 占用": "快捷键 {{key}} 已被 {{isUsedKey}} 占用",
    私聊: "私聊",
    美化私信页面: "美化私信页面",
    美化为左右对话模式: "美化为左右对话模式",
    "最后回复：": "最后回复：",
    进入: "进入",
    记住回复内容: "记住回复内容",
    "监听表单内的textarea内容改变并存储到indexDB中，提交表单将清除保存的数据，误刷新页面时可动态恢复": "监听表单内的textarea内容改变并存储到indexDB中，提交表单将清除保存的数据，误刷新页面时可动态恢复",
    表单: "表单",
    自动清理空间: "自动清理空间",
    不清理: "不清理",
    "{{value}} 天": "{{value}} 天",
    "{{value}} 周": "{{value}} 周",
    "{{value}} 个月": "{{value}} 个月",
    半年: "半年",
    计算中: "计算中",
    根据设置的间隔时间自动清理保存的回复内容: "根据设置的间隔时间自动清理保存的回复内容",
    "数据占用空间：{{size}}": "数据占用空间：{{size}}",
    当前存储的数据所占用的空间大小: "当前存储的数据所占用的空间大小",
    清空: "清空",
    清理成功: "清理成功",
    清理失败: "清理失败",
    "Url To WebhookUrl": "Url 转 WebhookUrl",
    关闭: "关闭",
    "例如：": "例如：",
    "结果：": "结果：",
    转换前: "转换前",
    转换后: "转换后",
    使用namespace查询脚本信息: "使用namespace查询脚本信息",
    脚本管理: "脚本管理",
    "开启后检测已安装的脚本信息更准确，但是速度会更慢": "开启后检测已安装的脚本信息更准确，但是速度会更慢",
    美化私信列表: "美化私信列表",
    搜索: "搜索"
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
    "源代码同步【库】": "Source code synchronization [Library]",
    论坛: "Forum",
    功能: "Features",
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
    "上次重载时间 {{time}}，{{timeout}}秒内拒绝反复重载": "Last reload time {{time}}, rejected repeated reloads within {{timeout}} seconds",
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
    其它错误: "Ohter Error",
    启用: "Enable",
    开启后下面的过滤功能才会生效: "The following filtering features will only take effect after it is enabled",
    屏蔽脚本: "Block script",
    点击查看规则: "Click to view rules",
    过滤: "Filter",
    代码同步: "Code synchronization",
    美化: "Beautify",
    修复代码行号显示: "Fix code line number display",
    修复代码行数超过1k行号显示不全问题: "Fix the problem that the code line number display is not complete when the number of lines exceeds 1k",
    "添加【寻找引用】按钮": "Add the button to find references",
    "在脚本栏添加按钮，一般用于搜索引用该库的相关脚本": "Add a button to the script bar, generally used to search for scripts that reference this library",
    "添加【收藏】按钮": "Add the button to collect",
    "在脚本栏添加按钮，一般用于快捷收藏该脚本/库": "Add a button to the script bar, generally used to quickly collect this script / library",
    修复图片宽度显示问题: " Fix the problem that the picture width display is not complete",
    修复图片在移动端宽度超出浏览器宽度问题: "Fix the problem that the picture width exceeds the browser width on mobile",
    "添加【今日检查】信息块": "Add the block of information of today's inspection",
    "在脚本信息栏添加【今日检查】信息块": "Add the block of information of today's inspection to the script information bar",
    "给Markdown添加【复制】按钮": "Add the button to copy to Markdown",
    "在Markdown内容右上角添加【复制】按钮，点击一键复制Markdown内容": "Add the button to copy to the top right corner of the Markdown content, click to copy the Markdown content in one click",
    开启后下面的功能才会生效: "The following features will only take effect after it is enabled",
    检测页面加载: "Detect page loading",
    "检测Greasyfork页面是否正常加载，如加载失败则自动刷新页面": "Detect whether the Greasyfork page is loaded normally. If the loading fails, the page will be automatically refreshed",
    检测间隔: "Detection interval",
    "设置检测上次刷新页面的间隔时间，当距离上次刷新页面的时间超过设置的值，将不再刷新页面": "Set the interval time for detecting the last refresh page. If the time since the last refresh page exceeds the set value, the page will no longer be refreshed",
    美化顶部导航栏: "Beautify the top navigation bar",
    "可能会跟Greasyfork Beautify脚本有冲突": "Possible conflict with Greasymfork Beautify script",
    美化脚本列表: "Beautify Script List",
    "双列显示且添加脚本卡片操作项（安装、收藏）": "Double column display and add script card operation items (installation, bookmarking)",
    操作面板: "Operation Panel",
    "添加【操作面板】按钮": "Add [Operation Panel] button",
    "在脚本列表页面时为顶部导航栏添加【操作面板】按钮": "Add an 'Operation Panel' button to the top navigation bar on the script list page",
    操作: "Operation",
    安装此脚本: "Install this script",
    脚本: "Scripts",
    历史版本: "Historical version",
    自定义已读颜色: "Customize read colors",
    在讨论内生效: "Effective within the discussion",
    用户: "Users",
    控制台: "Console",
    "迁移【控制台】到顶部导航栏": "Migration of Console to Top Navigation Bar",
    "将【控制台】按钮移动到顶部导航栏，节省空间": "Move the 'Console' button to the top navigation bar to save space",
    添加额外的标签按钮: "Add additional label button",
    "在版本下面添加【安装】、【查看代码】按钮": "Add 【 Install 】 and 【 View Code 】 buttons under the version",
    查看代码: "View Code",
    "添加【过滤】按钮": "Add [Filter] button",
    "添加【举报】按钮": "Add [Report] button",
    "在每一行讨论的最后面添加【过滤】按钮，需开启过滤功能才会生效": "Add a 'Filter' button at the end of each discussion line. The filtering features needs to be enabled for it to take effect",
    "在每一行讨论的最后面添加【举报】按钮": "Add a Report button at the end of each line of discussion",
    选择需要过滤的选项: "Select the options that need to be filtered",
    "确定{{type}}：{{filterId}}？": "Are you sure {{type}}：{{filterId}}？",
    "已删除：{{scriptId}}": "Deleted: {{scriptId}}",
    帮助文档: "Help document",
    "请输入规则，每行一个": "Please enter a rule, one per line",
    选择过滤的选项: "Select filtering options",
    "脚本id：{{text}}": "Script Id: {{text}}",
    "脚本名：{{text}}": "Script Name: {{text}}",
    "作者id：{{text}}": "Author Id: {{text}}",
    "作者名：{{text}}": "Author Name: {{text}}",
    "作用域：脚本、脚本搜索、用户主页": "Scope: Script, Script Search, User Homepage",
    "更新到 {{version}} 版本": "Update To {{version}} Version",
    "降级到 {{version}} 版本": "Downgrade to {{version}} Version",
    "重新安装 {{version}} 版本": "Reinstall {{version}} Version",
    "发布的用户id：{{text}}": "Published user ID: {{text}}",
    自定义快捷键: "Customize shortcut keys",
    点击录入快捷键: "Click on the input shortcut key",
    快捷键发表回复: "Shortcut key to post reply",
    "在输入框内按下快捷发表回复，例如：{{key}}": "Press the shortcut to post a reply in the input box, for example: {{key}}",
    请先执行当前的录入操作: "Please perform the current input operation first",
    清空快捷键: "Clear shortcut keys",
    "请按下快捷键...": "Please press the shortcut key...",
    成功录入: "Successful entry",
    "快捷键 {{key}} 已被 {{isUsedKey}} 占用": "The shortcut key {{key}} is already used by {{isUsedKey}}",
    私聊: "Private Chat",
    美化私信页面: "Beautify the private message page",
    美化为左右对话模式: "Beautify as a left-right dialogue mode",
    "最后回复：": "Final response:",
    进入: "Enter",
    记住回复内容: "Remember the reply content",
    "监听表单内的textarea内容改变并存储到indexDB中，提交表单将清除保存的数据，误刷新页面时可动态恢复": "Monitor changes to the textarea content in the form and store it in the index database. Submitting the form will clear the saved data, and dynamic recovery can be achieved when the page is accidentally refreshed",
    表单: "Forms",
    自动清理空间: "Automatically clear space",
    不清理: "Not cleaning",
    "{{value}} 天": "{{value}} day",
    "{{value}} 周": "{{value}} weeks",
    "{{value}} 个月": "{{value}} months",
    半年: "half a year",
    计算中: "In the process of calculation",
    根据设置的间隔时间自动清理保存的回复内容: "Automatically clean up saved reply content according to the set interval time",
    "数据占用空间：{{size}}": "Data occupancy space: {{size}}",
    当前存储的数据所占用的空间大小: "The size of the space occupied by the currently stored data",
    清空: "Clear",
    清理成功: "Cleanup successful",
    清理失败: "Cleaning failed",
    "Url To WebhookUrl": "Url To WebhookUrl",
    关闭: "Clsoe",
    "例如：": "Example: ",
    "结果：": "Result: ",
    转换前: "Before Parse",
    转换后: "Parse Result",
    使用namespace查询脚本信息: "Use a namespace to query script information",
    脚本管理: "Script management",
    "开启后检测已安装的脚本信息更准确，但是速度会更慢": "Detecting the installed script information is more accurate, but slower",
    美化私信列表: "Beautify the private message list",
    搜索: "Search",
    "新增【{{buttonText}}】按钮": "Added [{{buttonText}}] button",
    "该Checkbox按钮开启后，自动过滤出包含搜索关键词的脚本": "When the Checkbox button is turned on, it automatically filters out scripts that contain search terms",
    名称: "Name",
    描述: "Description",
    作者名称: "Author name",
    获取举报表单信息失败: "Failed to obtain report form information. Procedure",
    发送举报表单失败: "Failed to send the report form. Procedure",
    举报: "Report",
    "举报讨论：": "Report discussion:",
    "举报脚本：": "Report script:",
    "举报用户：": "Report user:",
    "添加失败，表单数据中不包含该脚本": "Failed to add, script id not included in form data",
    "删除失败，表单数据中仍包含该脚本": "The deletion failed and the script is still included in the form data",
    "删除失败，{{selector}}元素不存在": "Failed to delete. {{selector}} el名称ement does not exist",
    "对比选中版本差异（monacoEditor）": "Compare the differences between selected versions (monacoEditor)",
    "正在加载monaco中...": "Loading monaco...",
    "正在获取对比文本中...": "Retrieving comparison text...",
    代码对比: "Code Comparison",
    添加代码对比按钮: "Add code comparison button",
    "版本号相同，不需要比较源码": "The version numbers are the same, no need to compare source code",
    使用Monaco编辑器: "Use Monaco Editor",
    全词匹配: "Full word match",
    获取搜索关键词失败: "Failed to obtain search keyword",
    "名称/描述": "Name/Description",
    任一全词匹配: "Any full word match"
  };
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const PROPS_STORAGE_API = "data-storage-api";
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
  const CommonUtil = {
    /**
     * 添加屏蔽CSS
     * @param args
     * @example
     * addBlockCSS("")
     * addBlockCSS("","")
     * addBlockCSS(["",""])
     */
    addBlockCSS(...args) {
      let selectorList = [];
      if (args.length === 0) {
        return;
      }
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") {
        return;
      }
      args.forEach((selector) => {
        if (Array.isArray(selector)) {
          selectorList = selectorList.concat(selector);
        } else {
          selectorList.push(selector);
        }
      });
      return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    },
    /**
     * 设置GM_getResourceText的style内容
     * @param resourceMapData 资源数据
     * @example
     * setGMResourceCSS({
     *   keyName: "ViewerCSS",
     *   url: "https://example.com/example.css",
     * })
     */
    setGMResourceCSS(resourceMapData) {
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : "";
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtil.loadStyleLink(resourceMapData.url);
      }
    },
    /**
     * 添加<link>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.css")
     */
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      domUtils.ready(() => {
        document.head.appendChild($link);
      });
    },
    /**
     * 添加<script>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.js")
     */
    async loadScript(url) {
      let $script = document.createElement("script");
      $script.src = url;
      return new Promise((resolve) => {
        $script.onload = () => {
          resolve(null);
        };
        (document.head || document.documentElement).appendChild($script);
      });
    },
    /**
     * 将url修复，例如只有search的链接修复为完整的链接
     *
     * 注意：不包括http转https
     * @param url 需要修复的链接
     * @example
     * 修复前：`/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`//xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     */
    fixUrl(url) {
      url = url.trim();
      if (url.match(/^http(s|):\/\//i)) {
        return url;
      } else {
        if (!url.startsWith("/")) {
          url += "/";
        }
        url = window.location.origin + url;
        return url;
      }
    },
    /**
     * http转https
     * @param url 需要修复的链接
     * @example
     * 修复前：
     * 修复后：
     * @example
     * 修复前：
     * 修复后：
     */
    fixHttps(url) {
      if (url.startsWith("https://")) {
        return url;
      }
      if (!url.startsWith("http://")) {
        return url;
      }
      let urlObj = new URL(url);
      urlObj.protocol = "https:";
      return urlObj.toString();
    },
    /**
     * 禁止页面滚动，默认锁定html和body
     * @example
     * lockScroll();
     * @example
     * lockScroll(document.body);
     */
    lockScroll(...args) {
      let $hidden = document.createElement("style");
      $hidden.innerHTML = /*css*/
      `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
      let $elList = [document.documentElement, document.body].concat(
        ...args || []
      );
      $elList.forEach(($el) => {
        $el.classList.add("pops-overflow-hidden-important");
      });
      (document.head || document.documentElement).appendChild($hidden);
      return {
        /**
         * 解除锁定
         */
        recovery() {
          $elList.forEach(($el) => {
            $el.classList.remove("pops-overflow-hidden-important");
          });
          $hidden.remove();
        }
      };
    }
  };
  LanguageInit();
  _GM_getValue(KEY, {});
  const _SCRIPT_NAME_ = i18next.t("GreasyFork优化");
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops = pops;
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
            let maxZIndex = Utils.getMaxZIndex();
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
            return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
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
    log.error("拦截器-请求错误", data);
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
  const addStyle = utils.addStyle.bind(utils);
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const UIButton = function(text, description, buttonText, buttonIcon, buttonIsRightIcon, buttonIconIsLoading, buttonType, clickCallBack, afterAddToUListCallBack) {
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
      afterAddToUListCallBack
    };
    return result;
  };
  const UIInput = function(text, key, defaultValue, description, changeCallBack, placeholder = "", isNumber, isPassword) {
    let result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      props: {},
      attributes: {},
      description,
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, value) {
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      placeholder
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
    return result;
  };
  const UISwitch = function(text, key, defaultValue, clickCallBack, description, afterAddToUListCallBack) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      props: {},
      getValue() {
        return Boolean(
          this.props[PROPS_STORAGE_API].get(key, defaultValue)
        );
      },
      callback(event, __value) {
        let value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      afterAddToUListCallBack
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
    return result;
  };
  const GreasyforkApi = {
    /**
     * 获取脚本统计数据
     * @param scriptId
     */
    async getScriptStats(scriptId) {
      let response = await httpx.get(`/scripts/${scriptId}/stats.json`, {
        fetch: true,
        allowInterceptConfig: false
      });
      log.info(response);
      if (!response.status) {
        log.error(i18next.t("获取脚本统计数据失败"));
        return;
      }
      let scriptStatsJSON = utils.toJSON(response.data.responseText);
      return scriptStatsJSON;
    },
    /**
     * 解析并获取admin内的源代码同步的配置表单
     * @param scriptId
     */
    async getSourceCodeSyncFormData(scriptId) {
      let response = await httpx.get(`/scripts/${scriptId}/admin`, {
        fetch: true,
        allowInterceptConfig: false
      });
      log.info(response);
      if (!response.status) {
        Qmsg.error(i18next.t("请求admin内容失败"));
        return;
      }
      let adminHTML = response.data.responseText;
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
      let response = await httpx.post(`/scripts/${scriptId}/sync_update`, {
        fetch: true,
        data,
        allowInterceptConfig: false
      });
      log.info(response);
      if (!response.status) {
        Qmsg.error(i18next.t("源代码同步失败"));
        return;
      }
      return response;
    },
    /**
     * 获取用户的信息，包括脚本列表、未上架的脚本、库
     */
    async getUserInfo(userId) {
      let response = await httpx.get(`/users/${userId}.json`, {
        fetch: true,
        allowInterceptConfig: false
      });
      log.success(response);
      if (!response.status) {
        Qmsg.error(i18next.t("获取用户信息失败"));
        return;
      }
      let data = utils.toJSON(response.data.responseText);
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
      let response = await httpx.get(`/users/${userId}`, {
        fetch: true,
        allowInterceptConfig: false
      });
      log.info("获取用户的收藏集", response);
      if (!response.status) {
        Qmsg.error(i18next.t("获取用户的收藏集失败"));
        return;
      }
      let respText = response.data.responseText;
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
      let response = await httpx.get(`/users/${userId}/sets/${setsId}/edit`, {
        fetch: true,
        allowInterceptConfig: false
      });
      log.info(response);
      if (!response.status) {
        Qmsg.error(i18next.t("获取收藏集{{setsId}}失败", { setsId }));
        return;
      }
      let respText = response.data.responseText;
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
      let response = await httpx.post(`/users/${userId}/sets/${setsId}`, {
        fetch: true,
        allowInterceptConfig: false,
        headers: {
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "Cache-Control": "no-cache",
          "Content-Type": "application/x-www-form-urlencoded",
          Pragma: "no-cache"
        },
        fetchInit: {
          referrerPolicy: "strict-origin-when-cross-origin"
        },
        data
      });
      log.info(response);
      if (!response.status) {
        Qmsg.error(i18next.t("更新收藏集表单请求失败"));
        return;
      }
      let respText = response.data.responseText;
      let respDocument = domUtils.parseHTML(respText, true, true);
      return respDocument;
    },
    /**
     * 切换语言
     * @param url
     */
    async switchLanguage(url) {
      let response = await httpx.get(url, {
        fetch: true,
        headers: {
          "Upgrade-Insecure-Requests": "1"
        }
      });
      log.info(response);
      if (!response.status) {
        return;
      }
    }
  };
  const GreasyforkRouter = {
    /**
     * 主页
     *
     * + /zh-CN
     */
    isHome() {
      return window.location.pathname.split("/").length <= 2 && window.location.search === "";
    },
    /**
     * 代码页面
     *
     * + /code...
     */
    isCode() {
      var _a2;
      return Boolean((_a2 = window.location.pathname.split("/")) == null ? void 0 : _a2.includes("code"));
    },
    /**
     * 代码页面
     *
     * （严格比较）
     *
     * + /code
     * + /code/
     */
    isCodeStrict() {
      return Boolean(window.location.pathname.match(/\/code(\/|)$/));
    },
    /**
     * 版本页面
     *
     * （严格比较）
     *
     * + /version
     * + /version/
     */
    isVersion() {
      return Boolean(window.location.pathname.match(/\/versions(\/|)$/));
    },
    /**
     * 用户
     *
     * + /users/...
     */
    isUsers() {
      return Boolean(window.location.pathname.match(/\/.+\/users\/.+/gi));
    },
    /**
     * 私聊用户页面，可能是全部私信页面，也可能是某个用户的私信页面
     *
     * + /conversations...
     */
    isUsersConversations() {
      return this.isUsers() && Boolean(window.location.pathname.includes("/conversations"));
    },
    /**
     * 私聊xxx用户页面
     *
     * + /conversations/111...
     */
    isUsersConversationsWithSomeUser() {
      return this.isUsersConversations() && Boolean(window.location.pathname.match(/\/conversations\/[\d]+/));
    },
    /**
     * 脚本页面(单个脚本的页面)
     *
     * + /scripts/111...
     */
    isScript() {
      return Boolean(window.location.pathname.match(/\/scripts\/[\d+]/));
    },
    /**
     * 脚本管理页面
     *
     * + /scripts/.../admin
     */
    isScriptAdmin() {
      return Boolean(window.location.pathname.endsWith("/admin"));
    },
    /**
     * 脚本列表页面
     *
     * （严格比较）
     *
     * + /scripts
     * + /scripts/
     */
    isScriptList() {
      return Boolean(window.location.pathname.match(/\/scripts(\/|)$/));
    },
    /**
     * 脚本列表-按域名
     *
     * + /scripts/by-site...
     */
    isScriptsBySite() {
      return Boolean(window.location.pathname.match("/scripts/by-site"));
    },
    /**
     * 脚本反馈
     *
     * + /scripts/xxxx/feedback
     */
    isScriptsFeedback() {
      return this.isScript() && window.location.pathname.match(/\/feedback(\/|)$/i);
    },
    /**
     * 库列表页面
     *
     * （严格比较）
     *
     * + /libraries
     * + /libraries/
     */
    isScriptLibraryList() {
      return Boolean(window.location.pathname.match(/\/libraries(\/|)$/));
    },
    /**
     * 脚本搜索结果页面
     *
     * + /scripts?q=
     */
    isScriptSearch() {
      let searchParams = new URLSearchParams(window.location.search);
      return this.isScriptList() && searchParams.has("q");
    },
    /**
     * 脚本代码搜索页面
     *
     * （严格比较）
     *
     * + /code-search
     * + /code-search/
     */
    isScriptCodeSearch() {
      return Boolean(window.location.pathname.match(/\/code-search(\/|)$/));
    },
    /**
     * 库列表搜索
     *
     * + /scripts/libraries?q=
     */
    isScriptLibraryListSearch() {
      let searchParams = new URLSearchParams(window.location.search);
      return this.isScriptLibraryList() && searchParams.has("q");
    },
    /**
     * 讨论页面
     *
     * （严格比较）
     *
     * + /discussions
     * + /discussions/
     */
    isDiscuessions() {
      return Boolean(window.location.pathname.match(/\/discussions(\/|)$/));
    },
    /**
     * 图片资源页面
     */
    isImageSource() {
      return window.location.pathname.startsWith("/vite/assets");
    }
  };
  const GreasyforkUrlUtils = {
    /**
     * 获取脚本安装的链接
     * @param scriptId
     * @param scriptVersion
     * @param scriptName
     * @returns
     */
    getInstallUrl(scriptId, scriptVersion, scriptName) {
      if (utils.isNotNull(scriptName)) {
        scriptName = "/" + scriptName;
      } else {
        scriptName = "";
      }
      return `https://update.greasyfork.org/scripts/${scriptId}/${scriptVersion}${scriptName}.user.js`;
    },
    /**
     * 获取脚本的代码页面链接
     * @param scriptId
     * @param scriptVersion
     * @returns
     */
    getCodeUrl(scriptId, scriptVersion) {
      if (utils.isNull(scriptVersion)) {
        scriptVersion = "";
      }
      return `https://greasyfork.org/scripts/${scriptId}/code?version=${scriptVersion}`;
    },
    /**
     * 获取代码搜索地址
     * @param url
     */
    getCodeSearchUrl(url) {
      return "https://greasyfork.org/zh-CN/scripts/code-search?c=" + url;
    },
    /**
     * 获取脚本的信息
     * @param scriptId 脚本id
     */
    getScriptInfoUrl(scriptId) {
      return `https://greasyfork.org/scripts/${scriptId}.json`;
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
     * @default window.location.pathname
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
     * @default window.location.pathname
     */
    getUserId(text) {
      var _a2;
      return (_a2 = (text || window.location.pathname).match(/\/users\/([\d]+)/i)) == null ? void 0 : _a2[1];
    },
    /**
     * 获取举报地址
     */
    getReportUrl(item_class, item_id) {
      return `${window.location.origin}/reports/new?item_class=${item_class}&item_id=${item_id}`;
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
     * @default "zh-CN"
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
          getLoadingHTML(
            GreasyforkUrlUtils.getScriptName(scriptUrlList[0])
          ),
          {
            html: true
          }
        );
        let successNums = 0;
        let failedNums = 0;
        for (let index = 0; index < scriptUrlList.length; index++) {
          let scriptUrl = scriptUrlList[index];
          let scriptId = GreasyforkUrlUtils.getScriptId(scriptUrl);
          log.success("更新：" + scriptUrl);
          let scriptName = GreasyforkUrlUtils.getScriptName(scriptUrl);
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
        if (!GreasyforkRouter.isUsers()) {
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
            GreasyforkUrlUtils.getAdminUrl(item.href)
          );
        });
        GreasyforkMenu.updateScript(scriptUrlList);
      } else if (PopsPanel.getValue("goto_updateSettingsAndSynchronize_unlistedScriptList")) {
        PopsPanel.deleteValue(
          "goto_updateSettingsAndSynchronize_unlistedScriptList"
        );
        if (!GreasyforkRouter.isUsers()) {
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
            GreasyforkUrlUtils.getAdminUrl(item.href)
          );
        });
        GreasyforkMenu.updateScript(scriptUrlList);
      } else if (PopsPanel.getValue("goto_updateSettingsAndSynchronize_libraryScriptList")) {
        PopsPanel.deleteValue(
          "goto_updateSettingsAndSynchronize_libraryScriptList"
        );
        if (!GreasyforkRouter.isUsers()) {
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
            GreasyforkUrlUtils.getAdminUrl(item.href)
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
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        let value = isSelectedValue;
        log.info(`选择：${isSelectedText}`);
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof callback === "function") {
          callback(event, value, isSelectedText);
        }
      },
      data: selectData
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
    return result;
  };
  const UIButtonShortCut = function(text, description, key, defaultValue, defaultButtonText, buttonType = "default", shortCut) {
    let __defaultButtonText = typeof defaultButtonText === "function" ? defaultButtonText() : defaultButtonText;
    if (typeof defaultValue === "object") {
      shortCut.initConfig(key, defaultValue);
    }
    let getButtonText = () => {
      return shortCut.getShowText(key, __defaultButtonText);
    };
    let result = UIButton(
      text,
      description,
      getButtonText,
      "keyboard",
      false,
      false,
      buttonType,
      async (event) => {
        var _a2;
        let $click = event.target;
        let $btn = (_a2 = $click.closest(".pops-panel-button")) == null ? void 0 : _a2.querySelector("span");
        if (shortCut.isWaitPress) {
          Qmsg.warning("请先执行当前的录入操作");
          return;
        }
        if (shortCut.hasOptionValue(key)) {
          shortCut.emptyOption(key);
          Qmsg.success("清空快捷键");
        } else {
          let loadingQmsg = Qmsg.loading("请按下快捷键...", {
            showClose: true
          });
          let {
            status,
            option,
            key: isUsedKey
          } = await shortCut.enterShortcutKeys(key);
          loadingQmsg.close();
          if (status) {
            log.success("成功录入快捷键", option);
            Qmsg.success("成功录入");
          } else {
            Qmsg.error(
              `快捷键 ${shortCut.translateKeyboardValueToButtonText(
              option
            )} 已被 ${isUsedKey} 占用`
            );
          }
        }
        $btn.innerHTML = getButtonText();
      }
    );
    result.attributes = {};
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      return false;
    });
    return result;
  };
  class ShortCut {
    constructor(key) {
      /** 存储的键 */
      __publicField(this, "key", "short-cut");
      /** 是否存在等待按下的按键 */
      __publicField(this, "isWaitPress", false);
      if (typeof key === "string") {
        this.key = key;
      }
    }
    /**
     * 初始化配置默认值
     */
    initConfig(key, option) {
      if (this.hasOption(key)) ;
      else {
        this.setOption(key, option);
      }
    }
    /** 获取存储的键 */
    getStorageKey() {
      return this.key;
    }
    /**
     * 获取本地存储的所有值
     */
    getLocalAllOptions() {
      return _GM_getValue(this.key, []);
    }
    /**
     * 判断是否存在该配置
     * @param key 键
     */
    hasOption(key) {
      let localOptions = this.getLocalAllOptions();
      let findOption = localOptions.find((item) => item.key === key);
      return !!findOption;
    }
    /**
     * 判断是否存在该配置的value值
     * @param key 键
     */
    hasOptionValue(key) {
      if (this.hasOption(key)) {
        let option = this.getOption(key);
        return !((option == null ? void 0 : option.value) == null);
      } else {
        return false;
      }
    }
    /**
     * 获取配置
     * @param key 键
     * @param defaultValue 默认值
     */
    getOption(key, defaultValue) {
      let localOptions = this.getLocalAllOptions();
      let findOption = localOptions.find((item) => item.key === key);
      return findOption ?? defaultValue;
    }
    /**
     * 设置配置
     * @param key 键
     * @param value 配置
     */
    setOption(key, value) {
      let localOptions = this.getLocalAllOptions();
      let findIndex = localOptions.findIndex((item) => item.key === key);
      if (findIndex == -1) {
        localOptions.push({
          key,
          value
        });
      } else {
        Reflect.set(localOptions[findIndex], "value", value);
      }
      _GM_setValue(this.key, localOptions);
    }
    /**
     * 清空当前已有配置录入的值
     * @param key
     */
    emptyOption(key) {
      let result = false;
      let localOptions = this.getLocalAllOptions();
      let findIndex = localOptions.findIndex((item) => item.key === key);
      if (findIndex !== -1) {
        localOptions[findIndex].value = null;
        result = true;
      }
      _GM_setValue(this.key, localOptions);
      return result;
    }
    /**
     * 删除配置
     * @param key 键
     */
    deleteOption(key) {
      let result = false;
      let localValue = this.getLocalAllOptions();
      let findValueIndex = localValue.findIndex((item) => item.key === key);
      if (findValueIndex !== -1) {
        localValue.splice(findValueIndex, 1);
        result = true;
      }
      _GM_setValue(this.key, localValue);
      return result;
    }
    /**
     * 把配置的快捷键转成文字
     * @param keyboardValue
     * @returns
     */
    translateKeyboardValueToButtonText(keyboardValue) {
      let result = "";
      keyboardValue.ohterCodeList.forEach((ohterCodeKey) => {
        result += utils.stringTitleToUpperCase(ohterCodeKey, true) + " + ";
      });
      result += utils.stringTitleToUpperCase(keyboardValue.keyName);
      return result;
    }
    /**
     * 获取快捷键显示的文字
     * @param key 本地存储的快捷键键名
     * @param defaultShowText 默认显示的文字
     */
    getShowText(key, defaultShowText) {
      if (this.hasOption(key)) {
        let localOption = this.getOption(key);
        if (localOption.value == null) {
          return defaultShowText;
        } else {
          return this.translateKeyboardValueToButtonText(localOption.value);
        }
      } else {
        return defaultShowText;
      }
    }
    /**
     * 录入快捷键
     * @param key 本地存储的快捷键键名
     */
    async enterShortcutKeys(key) {
      return new Promise((resolve) => {
        this.isWaitPress = true;
        let keyboardListener = domUtils.listenKeyboard(
          window,
          "keyup",
          (keyName, keyValue, ohterCodeList) => {
            const currentOption = {
              keyName,
              keyValue,
              ohterCodeList
            };
            const shortcutJSONString = JSON.stringify(currentOption);
            const allOptions = this.getLocalAllOptions();
            for (let index = 0; index < allOptions.length; index++) {
              let localValue = allOptions[index];
              if (localValue.key === key) {
                continue;
              }
              const localShortCutJSONString = JSON.stringify(localValue.value);
              let isUsedByOtherOption = false;
              if (localValue.value != null && shortcutJSONString === localShortCutJSONString) {
                isUsedByOtherOption = true;
              }
              if (isUsedByOtherOption) {
                this.isWaitPress = false;
                keyboardListener.removeListen();
                resolve({
                  status: false,
                  key: localValue.key,
                  option: currentOption
                });
                return;
              }
            }
            this.setOption(key, currentOption);
            this.isWaitPress = false;
            keyboardListener.removeListen();
            resolve({
              status: true,
              key,
              option: currentOption
            });
          }
        );
      });
    }
    /**
     * 初始化全局键盘监听
     * @param shortCutOption 快捷键配置 一般是{ "键名": { callback: ()=>{}}}，键名是本地存储的自定义快捷键的键名
     */
    initGlobalKeyboardListener(shortCutOption) {
      let localOptions = this.getLocalAllOptions();
      if (!localOptions.length) {
        log.warn("没有设置快捷键");
        return;
      }
      let that = this;
      function setListenKeyboard($ele, option) {
        domUtils.listenKeyboard(
          $ele,
          "keydown",
          (keyName, keyValue, ohterCodeList) => {
            if (that.isWaitPress) {
              return;
            }
            localOptions = that.getLocalAllOptions();
            let findShortcutIndex = localOptions.findIndex((item) => {
              let option2 = item.value;
              let tempOption = {
                keyName,
                keyValue,
                ohterCodeList
              };
              if (JSON.stringify(option2) === JSON.stringify(tempOption)) {
                return item;
              }
            });
            if (findShortcutIndex != -1) {
              let findShortcut = localOptions[findShortcutIndex];
              log.info("调用快捷键", findShortcut);
              if (findShortcut.key in option) {
                option[findShortcut.key].callback();
              }
            }
          }
        );
      }
      let WindowShortCutOption = {};
      let ElementShortCutOption = {};
      Object.keys(shortCutOption).forEach((localKey) => {
        let option = shortCutOption[localKey];
        if (option.target == null || typeof option.target === "string" && option.target === "") {
          option.target = "window";
        }
        if (option.target === "window") {
          Reflect.set(WindowShortCutOption, localKey, option);
        } else {
          Reflect.set(ElementShortCutOption, localKey, option);
        }
      });
      setListenKeyboard(window, WindowShortCutOption);
      domUtils.ready(() => {
        Object.keys(ElementShortCutOption).forEach(async (localKey) => {
          let option = ElementShortCutOption[localKey];
          if (typeof option.target === "string") {
            utils.waitNode(option.target, 1e4).then(($ele) => {
              if (!$ele) {
                return;
              }
              let __option = {};
              Reflect.set(__option, localKey, option);
              setListenKeyboard($ele, __option);
            });
          } else if (typeof option.target === "function") {
            let target = await option.target();
            if (target == null) {
              return;
            }
            let __option = {};
            Reflect.set(__option, localKey, option);
            setListenKeyboard(target, __option);
          } else {
            let __option = {};
            Reflect.set(__option, localKey, option);
            setListenKeyboard(option.target, __option);
          }
        });
      });
    }
  }
  const GreasyforkShortCut = {
    shortCut: new ShortCut(),
    shortOption: {
      "gf-quickReply": {
        target: () => {
          let $commentText = document.querySelector("form textarea");
          let $replyBtn = document.querySelector(
            'input[name="commit"][type="submit"]'
          );
          if (!$commentText) {
            log.error("页面不存在输入框");
            return;
          } else if (!$replyBtn) {
            log.error("页面不存在【发表回复】按钮");
            return;
          }
          log.success("监听快捷键：gf-quickReply");
          return $commentText;
        },
        callback() {
          if (document.activeElement) {
            let $parentForm = document.activeElement.closest("form");
            if (!$parentForm) {
              log.error("当前activeElement不在表单内，无法触发快捷键");
              return;
            }
            let $replyBtnList = $parentForm.querySelectorAll(
              'input[name="commit"][type="submit"]'
            );
            if (!$replyBtnList.length) {
              log.error("表单内不存在【发表回复】按钮");
              return;
            }
            if ($replyBtnList.length > 1) {
              log.warn("表单内存在多个【发表回复】按钮，只触发第一个");
            }
            $replyBtnList[0].click();
          } else {
            log.error("当前页面没有激活元素，无法触发快捷键");
          }
        }
      }
    },
    init() {
      this.shortCut.initGlobalKeyboardListener(this.shortOption);
    }
  };
  const GreasyforkRememberFormTextArea = {
    $key: {
      DB_KEY: "data"
    },
    $data: {
      db: null
    },
    init() {
      this.$data.db = this.getDB();
      PopsPanel.execMenuOnce("rememberReplyContent", () => {
        this.rememberReplyContent();
      });
      PopsPanel.execMenu("gf-autoClearRememberReplayContent", (value) => {
        this.autoClearRememberReplayContent(value);
      });
    },
    /**
     * 获取数据库连接对象
     */
    getDB() {
      const dbName = "reply_record";
      const storeName = "textarea_text";
      const dbVersion = 2;
      return new utils.indexedDB(dbName, storeName, dbVersion);
    },
    /**
     * 记住回复内容
     */
    async rememberReplyContent() {
      const TAG = "记住回复内容 -- ";
      let $formList = document.querySelectorAll("form");
      if (!$formList.length) {
        log.warn(TAG + "不存在表单");
        return;
      }
      try {
        await this.clearRelayHistoryRememberContentText();
      } catch (error) {
        log.error(error);
      }
      $formList.forEach(async ($form) => {
        let $textarea = $form.querySelector("textarea");
        let $replySubmit = $form.querySelector(`input[type="submit"]`);
        if (!$textarea) {
          return;
        }
        if (!$replySubmit) {
          return;
        }
        log.success(`开始监听form --- 记住回复内容`, $form);
        this.$data.db.get(this.$key.DB_KEY).then((result) => {
          if (!result.data) {
            return;
          }
          let localDataIndex = result.data.findIndex((item) => {
            return this.checkUrlIsSame(window.location.href, item.url);
          });
          if (localDataIndex == -1) {
            return;
          }
          let historyInputText = result.data[localDataIndex].text;
          log.success("填入历史输入内容：" + historyInputText);
          $textarea.value = historyInputText;
        });
        domUtils.on(
          $textarea,
          ["propertychange", "input"],
          utils.debounce((event) => {
            let data = {
              url: window.location.href,
              text: $textarea.value,
              time: Date.now()
            };
            this.$data.db.get(this.$key.DB_KEY).then((result) => {
              if (!result.success && result.event && result.event.type !== "success") {
                log.warn(result);
                return;
              }
              if (result.data == null) {
                result.data = [];
              }
              let localDataIndex = result.data.findIndex((item) => {
                return this.checkUrlIsSame(window.location.href, item.url);
              });
              if (localDataIndex !== -1) {
                if (utils.isNull(data.text)) {
                  result.data.splice(localDataIndex, 1);
                } else {
                  result.data[localDataIndex] = utils.assign(
                    result.data[localDataIndex],
                    data
                  );
                }
              } else {
                result.data = result.data.concat(data);
              }
              this.$data.db.save(this.$key.DB_KEY, result.data).then((result2) => {
                if (result2.success) ;
                else {
                  log.error("保存失败", result2);
                }
              });
            });
          }, 25)
        );
        domUtils.on(
          $form,
          "submit",
          (event) => {
            log.info(`表单提交，刷新页面后清理内容：` + window.location.href);
            _GM_setValue(
              "delyClear_rememberReplyContent_url",
              window.location.href
            );
          },
          {
            capture: true
          }
        );
      });
    },
    /**
     * 清理历史记住的回复内容
     */
    async clearRelayHistoryRememberContentText() {
      const KEY2 = "delyClear_rememberReplyContent_url";
      let delyClear_rememberReplyContent_url = _GM_getValue(KEY2);
      if (delyClear_rememberReplyContent_url) {
        let result = await this.$data.db.get(
          this.$key.DB_KEY
        );
        if (!result.data) {
          log.info("表单记录：数据库是空的");
          return;
        }
        let localDataIndex = result.data.findIndex((item) => {
          return this.checkUrlIsSame(
            delyClear_rememberReplyContent_url,
            item.url
          );
        });
        if (localDataIndex == -1) {
          log.info("表单记录：已不存在该数据");
          _GM_deleteValue(KEY2);
          return;
        }
        result.data.splice(localDataIndex, 1);
        let saveResult = await this.$data.db.save(this.$key.DB_KEY, result.data);
        if (saveResult.success) {
          log.success("表单记录：成功清除");
          _GM_deleteValue(KEY2);
        } else {
          log.error("表单记录：清除失败", result);
        }
      }
    },
    /**
     * 检测两个url是否相同（不包括hash值）
     * @param url1
     * @param url2
     */
    checkUrlIsSame(url1, url2) {
      let url1Obj = new URL(url1);
      let url2Obj = new URL(url2);
      return url1Obj.origin === url2Obj.origin && url1Obj.pathname === url2Obj.pathname;
    },
    /**
     * 自动清理空间
     * @param intervalDay 间隔天数
     */
    autoClearRememberReplayContent(intervalDay) {
      const KEY2 = "gf-last-time-autoClearRememberReplayContent";
      let lastClearTime = _GM_getValue(KEY2);
      let intervalTime = intervalDay * 24 * 60 * 60 * 1e3;
      if (lastClearTime) {
        if (Date.now() - lastClearTime > intervalTime) {
          _GM_setValue(KEY2, Date.now());
        } else {
          return;
        }
      }
      _GM_setValue(KEY2, Date.now());
    },
    /**
     * 获取所有的记住的回复内容
     */
    async getAllRememberReplyContent() {
      let result = await this.$data.db.get(
        this.$key.DB_KEY
      );
      return result.data ?? [];
    },
    /**
     * 清空所有的记住的回复内容
     */
    async clearAllRememberReplyContent() {
      let result = await this.$data.db.delete(this.$key.DB_KEY);
      return result.success;
    }
  };
  const PopsPanelUISetting = {
    /**
     * 面板-脚本列表|库
     * @param type
     * @param event
     * @param rightHeaderElement
     * @param rightContainerElement
     * @returns
     */
    async UIScriptList(type, rightContainerElement) {
      var _a2, _b, _c;
      if (!GreasyforkMenu.isLogin) {
        Qmsg.error(i18next.t("请先登录账号！"));
        return;
      }
      let userLinkElement = GreasyforkMenu.getUserLinkElement();
      let userLink = userLinkElement.href;
      let userId = (_c = (_b = (_a2 = userLink == null ? void 0 : userLink.split("/")) == null ? void 0 : _a2.pop()) == null ? void 0 : _b.match(/([0-9]+)/)) == null ? void 0 : _c[0];
      let loading = __pops.loading({
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
          innerHTML: (
            /*html*/
            `
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
          )
        });
        let scriptInfoElement = liElement.querySelector(
          ".w-script-info"
        );
        let buttonElement = domUtils.createElement("div", {
          className: "pops-panel-button",
          innerHTML: (
            /*html*/
            `
				<button type="primary" data-icon="" data-righticon="false">
				<span>${i18next.t("同步代码")}</span>
				</button>
				`
          )
        });
        if (scriptInfo["deleted"]) {
          liElement.classList.add("w-script-deleted");
          buttonElement.querySelector("button").setAttribute("disabled", "true");
        }
        domUtils.on(buttonElement, "click", void 0, async function() {
          log.success("同步", scriptInfo);
          let btn = buttonElement.querySelector("button");
          let span = buttonElement.querySelector(
            "button span"
          );
          let iconElement = domUtils.createElement(
            "i",
            {
              className: "pops-bottom-icon",
              innerHTML: __pops.config.iconSVG.loading
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
                  /*html*/
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
    }
  };
  const GreasyforkElementUtils = {
    /**
     * 获取当前登录用户id
     */
    getCurrentLoginUserId() {
      let $anchor = document.querySelector(
        "#nav-user-info .user-profile-link a"
      );
      if (!$anchor) {
        return;
      }
      let userId = GreasyforkUrlUtils.getUserId($anchor.href);
      if (userId == null) {
        return;
      }
      return userId;
    },
    /**
     * 注册顶部导航菜单
     */
    registerTopNavMenu(config) {
      domUtils.ready(() => {
        let $nav = $("#site-nav nav");
        let $subNav = $("#site-nav .with-submenu nav");
        if (!$nav) {
          log.error("元素#site-nav nav不存在");
          return;
        }
        let $menuLink = domUtils.createElement("li", {
          className: config.className,
          innerHTML: (
            /*html*/
            `
                <a href="javascript:;">${config.name}</a>
                `
          )
        });
        domUtils.on($menuLink, "click", (event) => {
          utils.preventEvent(event);
          config.clickEvent(event);
        });
        if ($subNav && $subNav.children.length) {
          $subNav.appendChild($menuLink);
        } else {
          $nav.appendChild($menuLink);
        }
        let $mobileMenuLink = domUtils.createElement("li", {
          className: config.className,
          innerHTML: (
            /*html*/
            `
                <a href="javascript:;">${config.name}</a>
                `
          )
        });
        domUtils.on($mobileMenuLink, "click", (event) => {
          utils.preventEvent(event);
          config.clickEvent(event);
        });
        let $mobileNav = $("#mobile-nav nav");
        let $multiLinkNav = $("#mobile-nav nav .multi-link-nav");
        if ($multiLinkNav) {
          domUtils.before($multiLinkNav, $mobileMenuLink);
        } else {
          if ($mobileNav) {
            domUtils.append($mobileNav, $mobileMenuLink);
          } else {
            log.error("元素#mobile-nav nav不存在");
          }
        }
      });
    }
  };
  let isRegisdterMonacoEditorCSS = false;
  const GreasyforkUtils = {
    /**
     * 判断是否是当前已登录账户的主页
     */
    isCurrentLoginUserHome() {
      let currentLoginUserId = GreasyforkElementUtils.getCurrentLoginUserId();
      if (currentLoginUserId != null && GreasyforkRouter.isUsers() && window.location.pathname.includes("/" + currentLoginUserId)) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 加载monaco编辑器
     */
    async monacoEditor() {
      const MonacoVersion = "0.52.0";
      if (!isRegisdterMonacoEditorCSS) {
        isRegisdterMonacoEditorCSS = true;
        addStyle(`
			@font-face {
				font-family: 'codicon';
				src: url('https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/min/vs/base/browser/ui/codicons/codicon/codicon.ttf') format('truetype');
			}
		`);
      }
      let $monacoScript = domUtils.createElement("script", {
        type: "module",
        innerHTML: `
					import * as monaco from "https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/+esm";
					window.monaco = monaco;
					window.dispatchEvent(new CustomEvent("monaco-editor-ready"));
				`
      });
      domUtils.append(document.head || document.documentElement, $monacoScript);
      return new Promise((resolve) => {
        domUtils.on(
          _unsafeWindow,
          "monaco-editor-ready",
          () => {
            let monaco = _unsafeWindow.monaco;
            resolve(monaco);
          },
          { once: true }
        );
      });
    }
  };
  const GreasyforkScriptsCode = {
    init() {
      PopsPanel.execMenuOnce("code-repairCodeLineNumber", () => {
        this.repairCodeLineNumber();
      });
      PopsPanel.execMenuOnce("code-use-monaco-editor", () => {
        this.coverEditorWithMonaco();
      });
    },
    /**
     * 修复代码的行号显示不够问题
     * 超过1w行不会高亮代码
     */
    repairCodeLineNumber() {
      log.info("修复代码的行号显示不够问题");
      PopsPanel.execMenuOnce("beautifyGreasyforkBeautify", () => {
        addStyle(
          /*css*/
          `
				.code-container pre code .marker{
					padding-left: 6px;
				}	
				`
        );
      });
      utils.waitNode(
        "#script-content div.code-container pre.prettyprint ol"
      ).then(($prettyPrintOL) => {
        if ($prettyPrintOL.childElementCount >= 1e3) {
          log.success(
            `当前代码行数${$prettyPrintOL.childElementCount}行，超过1000行，优化行号显示问题`
          );
          addStyle(
            /*css*/
            `
                    pre.prettyprint{
                        padding-left: 26px;
                    }
					`
          );
        }
      });
    },
    /**
     * 使用monacoEditor替换编辑器
     */
    coverEditorWithMonaco() {
      log.info(`使用monacoEditor替换编辑器`);
      addStyle(
        /*css*/
        `
			.monaco-editor{
				height: calc(100vh - 54px);
			}
			#script-info{
				padding-bottom: 0px !important;
			}
		`
      );
      CommonUtil.addBlockCSS("#script-content .code-container > pre");
      GreasyforkUtils.monacoEditor().then(async (monaco) => {
        let response = await httpx.get(window.location.href, { fetch: true });
        if (!response.status) {
          return;
        }
        let doc = domUtils.parseHTML(response.data.responseText, true, true);
        let $originCodeContainer = doc.querySelector(
          "#script-content .code-container > pre"
        );
        if (!$originCodeContainer) {
          Qmsg.error("未解析出脚本代码", { consoleLogContent: true });
          return;
        }
        let codeText = domUtils.text($originCodeContainer);
        domUtils.ready(async () => {
          let $codeContainer = await utils.waitNode(
            "#script-content .code-container > pre",
            1e4
          );
          if (!$codeContainer) {
            return;
          }
          let $monacoEditor = domUtils.createElement("div", {
            className: "monaco-editor"
          });
          domUtils.after($codeContainer, $monacoEditor);
          monaco.editor.create($monacoEditor, {
            value: codeText,
            minimap: { enabled: true },
            // 小地图
            automaticLayout: true,
            // 自动布局,
            codeLens: true,
            colorDecorators: true,
            contextmenu: true,
            readOnly: true,
            //是否只读
            formatOnPaste: true,
            overviewRulerBorder: true,
            // 滚动条的边框
            scrollBeyondLastLine: true,
            theme: "vs-dark",
            // 主题
            fontSize: window.innerWidth > 600 ? 14 : 12,
            // 字体
            wordWrap: "off",
            // 换行
            language: "javascript",
            // 语言
            folding: true,
            // 是否启用代码折叠
            foldingStrategy: "indentation"
            // 代码可分小段折叠
          });
        });
      });
    }
  };
  const beautifyVersionsPageCSS = 'ul.history_versions,\r\nul.history_versions li {\r\n	width: 100%;\r\n}\r\nul.history_versions li {\r\n	display: flex;\r\n	flex-direction: column;\r\n	margin: 25px 0px;\r\n}\r\n.diff-controls input[type="radio"]:nth-child(2) {\r\n	margin-left: 5px;\r\n}\r\n.flex-align-item-center {\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n.script-tag {\r\n	margin-bottom: 8px;\r\n}\r\n.script-tag-version a {\r\n	color: #656d76;\r\n	fill: #656d76;\r\n	text-decoration: none;\r\n	width: fit-content;\r\n	width: -moz-fit-content;\r\n}\r\n.script-tag-version a:hover svg {\r\n	color: #00a3f5;\r\n	fill: #00a3f5;\r\n}\r\n.script-tag-version a > span {\r\n	margin-left: 0.25rem;\r\n}\r\n.script-note-box-body {\r\n	border-radius: 0.375rem;\r\n	border-style: solid;\r\n	border-width: max(1px, 0.0625rem);\r\n	border-color: #d0d7de;\r\n	color: #1f2328;\r\n	padding: 16px;\r\n	overflow-wrap: anywhere;\r\n}\r\n.script-note-box-body p {\r\n	margin-bottom: unset;\r\n}\r\n\r\n/* 安装按钮 */\r\n.install-link {\r\n	border-radius: 0.25rem 0.25rem 0.25rem 0.25rem !important;\r\n}\r\n';
  const GreasyforkVersions = {
    init() {
      PopsPanel.execMenuOnce("beautifyHistoryVersionPage", () => {
        return this.beautifyHistoryVersionPage();
      });
      PopsPanel.execMenuOnce("scripts-versions-addExtraTagButton", () => {
        this.addExtraTagButton();
      });
      PopsPanel.execMenuOnce("scripts-versions-addCompareCodeButton", () => {
        this.sourceDiffMonacoEditor();
      });
    },
    /**
     * 美化 历史版本 页面
     */
    beautifyHistoryVersionPage() {
      log.info("美化 历史版本 页面");
      let result = [];
      result.push(addStyle(beautifyVersionsPageCSS));
      result.push(
        CommonUtil.addBlockCSS(
          ".version-number",
          ".version-date",
          ".version-changelog"
        )
      );
      domUtils.ready(function() {
        let $historyVersion = document.querySelector(
          "ul.history_versions"
        );
        if (!$historyVersion) {
          Qmsg.error(i18next.t("未找到history_versions元素列表"));
          return;
        }
        Array.from($historyVersion.children).forEach((liElement) => {
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
            innerHTML: (
              /*html*/
              `
                    <div class="script-tag-version">
                        <a href="${versionUrl}" class="flex-align-item-center">
                        <svg aria-label="Tag" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                        </svg>
                        <span>${versionNumber}</span>
                        </a>
                    </div>`
            )
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
      return result;
    },
    /**
     * 添加额外的标签按钮
     */
    addExtraTagButton() {
      log.info("添加额外的标签按钮");
      domUtils.ready(() => {
        document.querySelectorAll(".script-tag-version").forEach(($tagVersion) => {
          var _a2, _b;
          let $anchor = $tagVersion.querySelector("a");
          if (!$anchor) {
            return;
          }
          let urlObj = new URL($anchor.href);
          let scriptId = (_a2 = urlObj.pathname.match(/\/scripts\/([\d]+)/)) == null ? void 0 : _a2[1];
          let scriptVersion = urlObj.searchParams.get("version");
          let scriptName = (_b = urlObj.pathname.match(/\/scripts\/[\d]+-(.+)/)) == null ? void 0 : _b[1];
          let installUrl = GreasyforkUrlUtils.getInstallUrl(
            scriptId,
            scriptVersion,
            scriptName
          );
          let codeUrl = GreasyforkUrlUtils.getCodeUrl(scriptId, scriptVersion);
          let $buttonTag = domUtils.createElement("div", {
            className: "scripts-tag-install",
            innerHTML: (
              /*html*/
              `
						<a class="script-btn-install install-link" data-install-format="js" target="_blank" href="${installUrl}">${i18next.t(
              "安装此脚本"
            )}</a>
						<a class="script-btn-see-code" target="_blank" href="${codeUrl}">${i18next.t(
              "查看代码"
            )}</a>
						`
            )
          });
          domUtils.after($tagVersion, $buttonTag);
        });
      });
    },
    /**
     * 源码对比（monacoEditor）
     */
    sourceDiffMonacoEditor() {
      log.info(`源码对比（monacoEditor）`);
      GreasyforkUtils.monacoEditor().then((monaco) => {
        domUtils.ready(() => {
          $$(
            `#script-content form[action*="/diff"] input[type="submit"]`
          ).forEach(($submit) => {
            let $compareButton = domUtils.createElement(
              "input",
              {
                type: "button",
                value: i18next.t("对比选中版本差异（monacoEditor）")
              },
              {
                style: "margin-left: 10px;"
              }
            );
            domUtils.after($submit, $compareButton);
            domUtils.on($compareButton, "click", async (event) => {
              utils.preventEvent(event);
              let $form = $submit.closest("form");
              let formData = new FormData($form);
              let compareLeftVersion = formData.get("v1");
              let compareRighttVersion = formData.get("v2");
              if (compareLeftVersion === compareRighttVersion) {
                Qmsg.warning(i18next.t("版本号相同，不需要比较源码"));
                return;
              }
              let loading = Qmsg.loading(i18next.t("正在获取对比文本中..."));
              let scriptId = GreasyforkUrlUtils.getScriptId();
              let response = await httpx.get(
                `https://greasyfork.org/zh-CN/scripts/${scriptId}.json`,
                {
                  fetch: true,
                  responseType: "json"
                }
              );
              if (!response.status) {
                loading.close();
                return;
              }
              let respJSON = utils.toJSON(response.data.responseText);
              let code_url = respJSON["code_url"];
              let compareLeftUrl = code_url.replace(
                `/${scriptId}`,
                `/${scriptId}/${compareLeftVersion}`
              );
              let compareRightUrl = code_url.replace(
                `/${scriptId}`,
                `/${scriptId}/${compareRighttVersion}`
              );
              let compareLeftText = "";
              let compareRightText = "";
              let compareLeftResponse = await httpx.get(compareLeftUrl);
              if (!compareLeftResponse.status) {
                loading.close();
                return;
              }
              compareLeftText = compareLeftResponse.data.responseText;
              let compareRightResponse = await httpx.get(compareRightUrl);
              if (!compareRightResponse.status) {
                loading.close();
                return;
              }
              compareRightText = compareRightResponse.data.responseText;
              loading.close();
              let { recovery } = CommonUtil.lockScroll();
              let $alert = __pops.alert({
                title: {
                  text: i18next.t("代码对比"),
                  html: false,
                  position: "center"
                },
                content: {
                  html: true,
                  text: (
                    /*html*/
                    `
								<div class="monaco-editor-diff-container">
									<div class="monaco-editor-diff"></div>
								</div>
								`
                  )
                },
                mask: {
                  enable: true,
                  clickEvent: {
                    toClose: false,
                    toHide: false
                  }
                },
                btn: {
                  ok: {
                    enable: false
                  },
                  close: {
                    callback(details, event2) {
                      details.close();
                      recovery();
                    }
                  }
                },
                zIndex() {
                  let maxZIndex = utils.getMaxZIndex();
                  let popsMaxZIndex = __pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
                  return utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
                },
                useShadowRoot: false,
                width: "90vw",
                height: "90vh",
                drag: true,
                style: (
                  /*css*/
                  `
							.monaco-editor-diff-container{
								width: 100%;
								height: 100%;
							}
							.monaco-editor-diff{
								width: 100%;
								height: 100%;
							}
							.pops{
								border-radius: 0px;
							}
							.pops[type-value="alert"] .pops-alert-title{
								--container-title-height: 40px;
							}
						`
                )
              });
              $alert.$shadowRoot.querySelector(
                ".monaco-editor-diff-container"
              );
              let $monacoEditor = $alert.$shadowRoot.querySelector(
                ".monaco-editor-diff"
              );
              let monacoEditor = monaco.editor.createDiffEditor($monacoEditor, {
                hideUnchangedRegions: {
                  enabled: true
                },
                minimap: { enabled: true },
                // 小地图
                automaticLayout: true,
                // 自动布局,
                codeLens: true,
                colorDecorators: true,
                contextmenu: false,
                readOnly: true,
                //是否只读
                formatOnPaste: true,
                overviewRulerBorder: true,
                // 滚动条的边框
                scrollBeyondLastLine: true,
                theme: "vs-dark",
                // 主题
                fontSize: window.innerWidth > 600 ? 14 : 12,
                // 字体
                wordWrap: "off",
                // 换行
                language: "javascript"
                // 语言
              });
              const originModel = monaco.editor.createModel(
                compareRightText,
                "javascript"
              );
              const modifyModel = monaco.editor.createModel(
                compareLeftText,
                "javascript"
              );
              monacoEditor.setModel({
                original: originModel,
                modified: modifyModel
              });
            });
          });
        });
      });
    }
  };
  const PanelUISize = {
    /**
     * 一般设置界面的尺寸
     */
    setting: {
      get width() {
        return window.innerWidth < 550 ? "88vw" : "550px";
      },
      get height() {
        return window.innerHeight < 450 ? "70vh" : "450px";
      }
    },
    /**
     * 功能丰富，aside铺满了的设置界面，要稍微大一点
     */
    settingBig: {
      get width() {
        return window.innerWidth < 800 ? "92vw" : "800px";
      },
      get height() {
        return window.innerHeight < 600 ? "80vh" : "600px";
      }
    },
    /**
     * 信息界面，一般用于提示信息之类
     */
    info: {
      get width() {
        return window.innerWidth < 350 ? "350px" : "350px";
      },
      get height() {
        return window.innerHeight < 250 ? "250px" : "250px";
      }
    }
  };
  let userCollection = [];
  const GreasyforkScriptsCollectEvent = async function(scriptId) {
    log.info("当前脚本id：" + scriptId);
    if (!GreasyforkMenu.isLogin) {
      log.error("请先登录账号");
      Qmsg.error(i18next.t("请先登录账号"));
      return;
    }
    let userId = GreasyforkUrlUtils.getUserId(
      GreasyforkMenu.getUserLinkElement().href
    );
    if (userId == null) {
      log.error("获取用户id失败");
      Qmsg.error(i18next.t("获取用户id失败"));
      return;
    }
    if (!userCollection.length) {
      let loading = Qmsg.loading(i18next.t("获取收藏夹中..."));
      userCollection = await GreasyforkApi.getUserCollection(userId) || [];
      loading.close();
      if (!userCollection.length) {
        return;
      }
    }
    let alertHTML = "";
    const checkFavoriteFormInfo = (form, scriptId2) => {
      let flag = false;
      scriptId2 = scriptId2.toString().trim();
      for (const [key, value] of form.entries()) {
        if (key === "scripts-included[]" && value.toString().trim() === scriptId2) {
          flag = true;
          break;
        }
      }
      return flag;
    };
    userCollection.forEach((userCollectInfo) => {
      alertHTML += /*html*/
      `
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
    let collectionDialog = __pops.alert({
      title: {
        text: i18next.t("收藏集"),
        position: "center"
      },
      content: {
        html: true,
        text: (
          /*html*/
          `<ul>${alertHTML}</ul>`
        )
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
      width: __pops.isPhone() ? "92vw" : "500px",
      height: "auto",
      drag: true,
      only: true,
      style: (
        /*css*/
        `
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
      )
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
        let loading = Qmsg.loading(i18next.t("添加中..."));
        try {
          let formData = await GreasyforkApi.getUserCollectionInfo(
            userId,
            setsId
          );
          if (!formData) {
            return;
          }
          if (checkFavoriteFormInfo(formData, scriptId)) {
            Qmsg.warning(i18next.t("该脚本已经在该收藏集中"));
            return;
          }
          let editForm = utils.cloneFormData(formData);
          let saveEditForm = utils.cloneFormData(formData);
          editForm.set("add-script", scriptId.toString());
          editForm.set("script-action", "i");
          saveEditForm.append("scripts-included[]", scriptId.toString());
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
          log.info("添加的数据", addData);
          log.info("保存的数据", saveData);
          let changeResultDoc = await GreasyforkApi.updateUserSetsInfo(
            userId,
            setsId,
            addData
          );
          if (!changeResultDoc) {
            return;
          }
          let $changeScriptSet = changeResultDoc.querySelector(".change-script-set");
          if (!$changeScriptSet) {
            Qmsg.error(
              i18next.t("添加失败，{{selector}}元素不存在", {
                selector: ".change-script-set"
              })
            );
            return;
          }
          let $section = $changeScriptSet.querySelector("section");
          if (!$section) {
            Qmsg.error(
              i18next.t("添加失败，{{selector}}元素不存在", {
                selector: "section"
              })
            );
            return;
          }
          let $alertElement = $section.querySelector(".alert");
          if ($alertElement) {
            __pops.alert({
              title: {
                text: i18next.t("添加失败"),
                position: "center"
              },
              content: {
                text: $alertElement.innerHTML,
                html: true
              },
              mask: {
                enable: true,
                clickEvent: {
                  toClose: true
                }
              },
              style: (
                /*css*/
                `
						.pops-alert-content{
							font-style: italic;
							background-color: #ffc;
							border: none;
							border-left: 6px solid #FFEB3B;
							padding: .5em;
						}
						`
              ),
              drag: true,
              dragLimit: true,
              width: PanelUISize.info.width,
              height: PanelUISize.info.height
            });
            return;
          }
          let changeScriptForm = new FormData($changeScriptSet);
          let changeFlag = checkFavoriteFormInfo(changeScriptForm, scriptId);
          if (!changeFlag) {
            log.error("添加失败，提交的添加请求中不包含该脚本id");
            Qmsg.error(i18next.t("添加失败，表单数据中不包含该脚本"));
            return;
          }
          await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
          Qmsg.success(i18next.t("添加成功"));
        } catch (error) {
          console.error(error);
        } finally {
          loading.close();
        }
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
        let loading = Qmsg.loading(i18next.t("删除中..."));
        try {
          let formData = await GreasyforkApi.getUserCollectionInfo(
            userId,
            setsId
          );
          if (!formData) {
            return;
          }
          if (!checkFavoriteFormInfo(formData, scriptId)) {
            Qmsg.info(
              i18next.t("已删除：{{scriptId}}", {
                scriptId
              })
            );
            return;
          }
          let editForm = utils.cloneFormData(formData, (key, value) => {
            return key === "scripts-included[]" && typeof value === "string" && value.toString().trim() === scriptId.toString().trim();
          });
          let saveEditForm = utils.cloneFormData(editForm);
          editForm.set("remove-scripts-included[]", scriptId.toString());
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
          log.info("删除的数据", removeData);
          log.info("保存的数据", saveData);
          let changeResultDoc = await GreasyforkApi.updateUserSetsInfo(
            userId,
            setsId,
            removeData
          );
          if (!changeResultDoc) {
            return;
          }
          let $changeScriptSet = changeResultDoc.querySelector(".change-script-set");
          if (!$changeScriptSet) {
            Qmsg.error(
              i18next.t("删除失败，{{selector}}元素不存在", {
                selector: ".change-script-set"
              })
            );
            return;
          }
          let changeScriptForm = new FormData($changeScriptSet);
          let changeFlag = checkFavoriteFormInfo(changeScriptForm, scriptId);
          if (changeFlag) {
            log.error("删除失败，提交的删除请求中包含该脚本id");
            Qmsg.error(i18next.t("删除失败，表单数据中仍包含该脚本"));
            return;
          }
          await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
          Qmsg.success(i18next.t("删除成功"));
        } catch (error) {
          console.error(error);
        } finally {
          loading.close();
        }
      }
    );
  };
  const GreasyforkScripts = {
    init() {
      if (GreasyforkRouter.isCode()) {
        GreasyforkScriptsCode.init();
      } else if (GreasyforkRouter.isVersion()) {
        GreasyforkVersions.init();
      }
      if (GreasyforkRouter.isCodeStrict()) {
        PopsPanel.execMenuOnce("fullScreenOptimization", () => {
          this.fullScreenOptimization();
        });
        PopsPanel.execMenuOnce("addCopyCodeButton", () => {
          this.addCopyCodeButton();
        });
      }
      PopsPanel.execMenuOnce("addCollectionButton", () => {
        this.addCollectionButton();
      });
      PopsPanel.execMenuOnce("addFindReferenceButton", () => {
        this.setFindCodeSearchBtn();
      });
      domUtils.ready(() => {
        PopsPanel.execMenuOnce("scriptHomepageAddedTodaySUpdate", () => {
          this.scriptHomepageAddedTodaySUpdate();
        });
      });
    },
    /**
     * 添加【收藏】按钮
     */
    addCollectionButton() {
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
          let scriptIdMatch = window.location.pathname.match(/scripts\/([\d]+)/i);
          if (!scriptIdMatch) {
            log.error(scriptIdMatch, window.location.pathname);
            Qmsg.error(i18next.t("获取脚本id失败"));
            return;
          }
          let scriptId = scriptIdMatch[scriptIdMatch.length - 1];
          GreasyforkScriptsCollectEvent(scriptId);
        });
      });
    },
    /**
     * F11全屏，F键代码全屏
     */
    fullScreenOptimization() {
      log.info("F11全屏，F键代码全屏");
      addStyle(
        /*css*/
        `
		.code-container:has(.code-wide-screen){
			height: auto !important;
		}
        .code-wide-screen{
			position: absolute !important;
			top: 0 !important;
			left: 0 !important;
			right: 0 !important;
			bottom: 0 !important;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			height: 100% !important;
			min-width: 100% !important;
			min-height: 100% !important;
			max-width: 100% !important;
			max-height: 100% !important;
			z-index: 1000000 !important;
        }
        `
      );
      let isFullScreen = false;
      domUtils.keydown(
        _unsafeWindow,
        function(event) {
          if (event.key.toLowerCase() === "f") {
            let $code = $(".monaco-editor") || $("#script-content div.code-container code");
            if (event.altKey && event.shiftKey) {
              log.info(`宽屏`);
              utils.preventEvent(event);
              if ($code.classList.contains("code-wide-screen")) {
                $code.classList.remove("code-wide-screen");
              } else {
                $code.classList.add("code-wide-screen");
              }
            } else if (!event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey) {
              log.info(`全屏`);
              utils.preventEvent(event);
              if (isFullScreen) {
                utils.exitFullScreen($code);
                isFullScreen = false;
              } else {
                utils.enterFullScreen($code);
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
            log.error(scriptIdMatch, window.location.pathname);
            Qmsg.error(i18next.t("获取脚本id失败"));
            return;
          }
          let scriptId = scriptIdMatch[scriptIdMatch.length - 1];
          window.location.href = GreasyforkUrlUtils.getCodeSearchUrl(
            `greasyfork.org/scripts/${scriptId}`
          );
        });
      });
    },
    /**
     * 脚本首页新增【今日检查】
     */
    async scriptHomepageAddedTodaySUpdate() {
      if (!document.querySelector("#install-area")) {
        return;
      }
      log.info("脚本首页新增【今日检查】");
      let scriptStatsJSON = await GreasyforkApi.getScriptStats(
        GreasyforkUrlUtils.getScriptId()
      );
      if (!scriptStatsJSON) {
        return;
      }
      log.info("统计信息", scriptStatsJSON);
      let todayStatsJSON = scriptStatsJSON[utils.formatTime(void 0, "yyyy-MM-dd")];
      if (!todayStatsJSON) {
        log.error("今日份的统计信息不存在");
        return;
      }
      let update_checks = todayStatsJSON["update_checks"];
      log.info("今日统计信息", todayStatsJSON);
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
            `https://greasyfork.org/zh-CN/scripts/${GreasyforkUrlUtils.getScriptId()}.json`,
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
          log.success("代码地址：", code_url);
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
    }
  };
  const beautifyCenterContentCSS = '.sidebarred-main-content {\r\n	max-width: unset;\r\n	flex: unset;\r\n}\r\nol.script-list {\r\n	display: flex;\r\n	flex-wrap: wrap;\r\n	border: none;\r\n	gap: 20px;\r\n	background: transparent;\r\n	box-shadow: none;\r\n}\r\nol.script-list .script-description {\r\n	overflow-wrap: anywhere;\r\n}\r\nol.script-list li {\r\n	border: 1px solid rgb(221, 221, 221);\r\n	border-radius: 5px;\r\n	flex: 1 1 45%;\r\n	box-shadow: rgb(221, 221, 221) 0px 0px 5px 2px;\r\n}\r\n/* 收藏按钮 */\r\n.script-collect-btn {\r\n	color: #ffffff;\r\n	border-color: #409eff;\r\n	background-color: #409eff;\r\n}\r\n/* 评分按钮 */\r\n.script-list-rating-score[data-position="right"] {\r\n	display: inline-block;\r\n	min-width: 1em;\r\n	text-align: center;\r\n	padding: 0 0.25em;\r\n	border: 1px solid #dddddd;\r\n	border-radius: 10px;\r\n	width: fit-content;\r\n}\r\n/* 安装按钮 */\r\n.install-link {\r\n	border-radius: 0.25rem 0.25rem 0.25rem 0.25rem !important;\r\n}\r\n.install-link:has(+ .install-help-link) {\r\n	border-radius: 0.25rem 0 0 0.25rem !important;\r\n}\r\n/* 加载圆圈动画 */\r\n.install-link.lum-lightbox-loader {\r\n	position: relative;\r\n	min-width: 4rem;\r\n	min-height: 1rem;\r\n}\r\n.install-link.lum-lightbox-loader::before {\r\n	margin-left: 1rem;\r\n}\r\n.install-link.lum-lightbox-loader::after {\r\n	margin-right: 1rem;\r\n}\r\n.install-link.lum-lightbox-loader::before,\r\n.install-link.lum-lightbox-loader::after {\r\n	width: 1em;\r\n	height: 1em;\r\n	margin-top: -0.5em;\r\n	border-radius: 1em !important;\r\n	background: hsla(0, 0%, 100%, 0.5);\r\n}\r\n';
  const GreasyforkCheckVersion = {
    /** 获取 TamperMonkey 暴露在window下的函数 */
    getTampermonkey: () => {
      var _a2;
      return (_a2 = _unsafeWindow.external) == null ? void 0 : _a2.Tampermonkey;
    },
    /** 获取 Violentmonkey 暴露在window下的函数 */
    getViolentmonkey: () => {
      var _a2;
      return (_a2 = _unsafeWindow.external) == null ? void 0 : _a2.Violentmonkey;
    },
    /** 获取 ScriptCat 暴露在window下的函数 */
    getScriptCat: () => {
      var _a2;
      return (_a2 = _unsafeWindow.external) == null ? void 0 : _a2.Scriptcat;
    },
    /**
     * 获取脚本容器启用状态
     */
    getScriptContainerStatus() {
      var _a2, _b, _c;
      let containerStatus = {
        Tampermonkey: false,
        Violentmonkey: false,
        ScriptCat: false
      };
      if ((_a2 = _unsafeWindow.external) == null ? void 0 : _a2.Tampermonkey) {
        containerStatus.Tampermonkey = true;
      }
      if ((_b = _unsafeWindow.external) == null ? void 0 : _b.Violentmonkey) {
        containerStatus.Violentmonkey = true;
      }
      if ((_c = _unsafeWindow.external) == null ? void 0 : _c.Scriptcat) {
        containerStatus.ScriptCat = true;
      }
      return containerStatus;
    },
    /**
     * 获取已注册的脚本容器名
     */
    getRegisterScriptContainerNameList() {
      let allScriptContainerStatus = this.getScriptContainerStatus();
      let isRegisterScriptContainer = allScriptContainerStatus;
      let scriptContainerNameList = [];
      Object.keys(isRegisterScriptContainer).forEach((containerName) => {
        let containerEnable = Reflect.get(
          isRegisterScriptContainer,
          containerName
        );
        if (containerEnable) {
          scriptContainerNameList.push(containerName);
        }
      });
      return scriptContainerNameList;
    },
    /**
     * 获取脚本安装的版本号
     * @param name 脚本名
     * @param namespace 脚本命名空间
     */
    getInstalledVersion(name, namespace) {
      return new Promise((resolve, reject) => {
        const tm = this.getTampermonkey();
        if (tm) {
          tm.isInstalled(name, namespace, function(data) {
            if (data.installed) {
              resolve(data.version);
            } else {
              resolve(null);
            }
          });
          return;
        }
        const vm = this.getViolentmonkey();
        if (vm) {
          vm.isInstalled(name, namespace).then(resolve);
          return;
        }
        const scriptCat = this.getScriptCat();
        if (scriptCat) {
          scriptCat.isInstalled(name, namespace, function(data) {
            if (data.installed) {
              resolve(data.version);
            } else {
              resolve(null);
            }
          });
          return;
        }
        reject(new TypeError("获取脚本容器暴露的external信息失败"));
      });
    },
    /**
     * https://developer.mozilla.org/en/docs/Toolkit_version_format
     *
     * 比较版本号
     * @param a 版本号
     * @param b 版本号
     * @returns
     * + -1 该版本号低
     * + 0 该版本号和比较的版本号相同
     * + 1 该版本号高
     */
    compareVersions(a, b) {
      if (a === b) {
        return 0;
      }
      const aParts = a.split(".");
      const bParts = b.split(".");
      for (let i = 0; i < aParts.length; i++) {
        const result = this.compareVersionPart(aParts[i], bParts[i]);
        if (result !== 0) {
          return result;
        }
      }
      return 0;
    },
    compareVersionPart(partA, partB) {
      const partAParts = this.parseVersionPart(partA);
      const partBParts = this.parseVersionPart(partB);
      for (let i = 0; i < partAParts.length; i++) {
        if (partAParts[i].length > 0 && partBParts[i].length === 0) {
          return -1;
        }
        if (partAParts[i].length === 0 && partBParts[i].length > 0) {
          return 1;
        }
        if (partAParts[i] > partBParts[i]) {
          return 1;
        }
        if (partAParts[i] < partBParts[i]) {
          return -1;
        }
      }
      return 0;
    },
    // It goes number, string, number, string. If it doesn't exist, then
    // 0 for numbers, empty string for strings.
    parseVersionPart(part) {
      if (!part) {
        return [0, "", 0, ""];
      }
      const partParts = /([0-9]*)([^0-9]*)([0-9]*)([^0-9]*)/.exec(part);
      return [
        partParts[1] ? parseInt(partParts[1]) : 0,
        partParts[2],
        partParts[3] ? parseInt(partParts[3]) : 0,
        partParts[4]
      ];
    },
    /**
     *
     * @param installButton 安装按钮
     * 必须属性
     * + data-update-label 按钮升级的文字
     * + data-downgrade-label 按钮降级的文字
     * + data-reinstall-label 按钮重装的文字
     * @param installedVersion 安装版本
     * @param version 版本号
     * @returns
     */
    handleInstallResult(installButton, installedVersion, version) {
      if (installedVersion == null) {
        return;
      }
      installButton.removeAttribute("data-ping-url");
      switch (this.compareVersions(installedVersion, version)) {
        // Upgrade
        case -1:
          installButton.textContent = installButton.getAttribute("data-update-label");
          break;
        // Downgrade
        case 1:
          installButton.textContent = installButton.getAttribute(
            "data-downgrade-label"
          );
          break;
        // Equal
        case 0:
          installButton.textContent = installButton.getAttribute(
            "data-reinstall-label"
          );
          break;
      }
    },
    /**
     * 检测js脚本的更新
     * @param installButton 安装按钮
     * 必须属性
     * + data-script-name 脚本名
     * + data-script-namespace 脚本命名空间
     * + data-script-version 脚本当前版本号
     * @param retry 重试
     */
    async checkForUpdatesJS(installButton, retry) {
      const name = installButton.getAttribute("data-script-name");
      const namespace = installButton.getAttribute("data-script-namespace");
      const version = installButton.getAttribute("data-script-version");
      try {
        let installedVersion = await this.getInstalledVersion(name, namespace);
        if (installedVersion == null) {
          return false;
        }
        this.handleInstallResult(installButton, installedVersion, version);
        return true;
      } catch (error) {
        if (retry) {
          await utils.sleep(1e3);
          try {
            return await this.checkForUpdatesJS(installButton, false);
          } catch (error2) {
          }
        }
        return false;
      }
    },
    /**
     * 检测css脚本的更新
     * @param installButton 安装按钮
     * 必须属性
     * + data-script-name 脚本名
     * + data-script-namespace 脚本命名空间
     */
    checkForUpdatesCSS(installButton) {
      const name = installButton.getAttribute("data-script-name");
      const namespace = installButton.getAttribute("data-script-namespace");
      postMessage(
        { type: "style-version-query", name, namespace, url: location.href },
        location.origin
      );
    }
  };
  const parseScriptListInfo = ($scriptList) => {
    let dataset = $scriptList.dataset;
    const info = {
      scriptId: parseInt(dataset.scriptId),
      scriptName: dataset.scriptName,
      scriptAuthors: [],
      scriptDailyInstalls: parseInt(dataset.scriptDailyInstalls),
      scriptTotalInstalls: parseInt(dataset.scriptTotalInstalls),
      scriptRatingScore: parseFloat(dataset.scriptRatingScore),
      scriptCreatedDate: new Date(dataset.scriptCreatedDate),
      scriptUpdatedDate: new Date(dataset.scriptUpdatedDate),
      scriptType: dataset.scriptType,
      scriptVersion: dataset.scriptVersion,
      sensitive: dataset.sensitive === "true",
      scriptLanguage: dataset.scriptLanguage,
      cssAvailableAsJs: dataset.cssAvailableAsJs === "true",
      codeUrl: dataset.codeUrl,
      scriptDescription: dataset.scriptDescription,
      scriptAuthorId: parseInt(dataset.scriptAuthorId),
      scriptAuthorName: dataset.scriptAuthorName
    };
    let scriptAuthorsObj = utils.toJSON(dataset.scriptAuthors);
    Object.keys(scriptAuthorsObj).forEach((authorId) => {
      let authorName = scriptAuthorsObj[authorId];
      info.scriptAuthors.push({
        authorId: parseInt(authorId),
        authorName
      });
    });
    if ((info.scriptAuthorName == null || isNaN(info.scriptAuthorId)) && info.scriptAuthors.length) {
      info.scriptAuthorName = info.scriptAuthors[0].authorName;
      info.scriptAuthorId = info.scriptAuthors[0].authorId;
    }
    if (info.scriptDescription == null) {
      let $description = $scriptList.querySelector(".script-description") || $scriptList.querySelector(".description");
      if ($description) {
        info.scriptDescription = $description.innerText || $description.textContent;
      }
    }
    return info;
  };
  const GreasyforkScriptsList = {
    init() {
      PopsPanel.execMenuOnce("gf-scripts-filter-enable", () => {
        GreasyforkScriptsFilter.init();
      });
      PopsPanel.execMenuOnce("beautifyCenterContent", () => {
        return this.beautifyCenterContent();
      });
    },
    /**
     * 美化脚本列表
     */
    beautifyCenterContent() {
      log.info("美化脚本列表-双列");
      let result = [];
      result.push(addStyle(beautifyCenterContentCSS));
      const lodingClassName = "lum-lightbox-loader";
      const noInstallBtnText = i18next.t("安装此脚本");
      DOMUtils.ready(() => {
        let allScriptContainerStatus = GreasyforkCheckVersion.getScriptContainerStatus();
        let hasScriptContainer = Object.values(allScriptContainerStatus).find(
          (item) => item
        );
        let isRegisterScriptContainerNameList = GreasyforkCheckVersion.getRegisterScriptContainerNameList();
        let isForceUseNameSpace = PopsPanel.getValue(
          "beautifyCenterContent-queryNameSpace"
        );
        if (!hasScriptContainer) {
          log.error("脚本容器未暴露external信息", window.external);
        } else {
          log.info(
            "当前暴露的external信息：" + isRegisterScriptContainerNameList.map((it) => `【${it}】`).join("、")
          );
        }
        let lockFn = new utils.LockFunction(() => {
          let allScriptsList = GreasyforkScriptsFilter.getElementList();
          allScriptsList.forEach(($scriptList) => {
            if ($scriptList.querySelector(".script-list-operation")) {
              return;
            }
            let scriptInfo = parseScriptListInfo($scriptList);
            let $inlineStats = $scriptList.querySelector(
              ".inline-script-stats"
            );
            if (!$inlineStats) {
              return;
            }
            let code_url = scriptInfo.codeUrl;
            let $ratingScoreLeft = DOMUtils.createElement("dt", {
              className: "script-list-rating-score",
              innerHTML: `<span>${i18next.t("评分")}</span>`
            });
            let $ratingScoreRight = DOMUtils.createElement(
              "dd",
              {
                className: "script-list-rating-score",
                innerHTML: `<span>${scriptInfo.scriptRatingScore}</span>`
              },
              {
                "data-position": "right"
              }
            );
            let $goodRatingCount = $scriptList.querySelector(
              "dd.script-list-ratings .good-rating-count"
            );
            let $okRatingCount = $scriptList.querySelector(
              "dd.script-list-ratings .ok-rating-count"
            );
            let $badRatingCount = $scriptList.querySelector(
              "dd.script-list-ratings .bad-rating-count"
            );
            if ($goodRatingCount && $okRatingCount && $badRatingCount) {
              let goodRatingCount = parseInt($goodRatingCount.innerText);
              let okRatingCount = parseInt($okRatingCount.innerText);
              let badRatingCount = parseInt($badRatingCount.innerText);
              let totalRatingCount = goodRatingCount + okRatingCount + badRatingCount;
              if (totalRatingCount >= 10) {
                if (goodRatingCount / totalRatingCount >= 0.6) {
                  $ratingScoreRight.classList.add("good-rating-count");
                } else {
                  $ratingScoreRight.classList.add("bad-rating-count");
                }
              } else if (totalRatingCount == 0) {
                $ratingScoreRight.classList.add("good-rating-count");
              } else {
                if (goodRatingCount > okRatingCount + badRatingCount) {
                  $ratingScoreRight.classList.add("good-rating-count");
                } else {
                  $ratingScoreRight.classList.add("bad-rating-count");
                }
              }
            }
            let $versionLeft = DOMUtils.createElement("dt", {
              className: "script-list-version",
              innerHTML: (
                /*html*/
                `<span>${i18next.t("版本")}</span>`
              )
            });
            let $versionRight = DOMUtils.createElement(
              "dd",
              {
                className: "script-list-version",
                innerHTML: (
                  /*html*/
                  `<span>${scriptInfo.scriptVersion}</span>`
                )
              },
              {
                "data-position": "right"
              }
            );
            let $operationLeft = DOMUtils.createElement("dt", {
              className: "script-list-operation",
              innerHTML: `<span>${i18next.t("操作")}</span>`
            });
            let $operationRight = DOMUtils.createElement(
              "dd",
              {
                className: "script-list-operation",
                innerHTML: (
                  /*html*/
                  `
						<a
							target="_blank"
							class="install-link"
							data-install-format="js"
							data-script-name="${scriptInfo.scriptName}"
							data-script-namespace=""
							data-script-version="${scriptInfo.scriptVersion}"
							data-update-label="${i18next.t("更新到 {{version}} 版本", {
                  version: scriptInfo.scriptVersion
                })}"
							data-downgrade-label="${i18next.t("降级到 {{version}} 版本", {
                  version: scriptInfo.scriptVersion
                })}"
							data-reinstall-label="${i18next.t("重新安装 {{version}} 版本", {
                  version: scriptInfo.scriptVersion
                })}"
							href="${code_url}"></a>
						<button class="script-collect-btn">${i18next.t("收藏")}</button>
						`
                )
              },
              {
                "data-position": "right",
                style: "gap:10px;display: flex;flex-wrap: wrap;align-items: center;"
              }
            );
            let $collect = $operationRight.querySelector(
              ".script-collect-btn"
            );
            let $installLink = $operationRight.querySelector(".install-link");
            $installLink["data-script-info"] = scriptInfo;
            DOMUtils.addClass($installLink, lodingClassName);
            if (scriptInfo.scriptType === "library") {
              $installLink.remove();
            }
            DOMUtils.on($collect, "click", (event) => {
              utils.preventEvent(event);
              GreasyforkScriptsCollectEvent(scriptInfo.scriptId);
            });
            if (PopsPanel.getValue("gf-scripts-filter-enable")) {
              let $filter = DOMUtils.createElement("button", {
                className: "script-filter-btn",
                innerHTML: i18next.t("过滤")
              });
              let attr_filter_key = "data-filter-key";
              let attr_filter_value = "data-filter-value";
              DOMUtils.on($filter, "click", (event) => {
                utils.preventEvent(event);
                let $dialog = __pops.alert({
                  title: {
                    text: i18next.t("选择需要过滤的选项"),
                    position: "center"
                  },
                  content: {
                    text: (
                      /*html*/
                      `
									<button ${attr_filter_key}="scriptId" ${attr_filter_value}="^${scriptInfo.scriptId}$">${i18next.t("脚本id：{{text}}", {
                      text: scriptInfo.scriptId
                    })}</button>
									<button ${attr_filter_key}="scriptName" ${attr_filter_value}="^${utils.parseStringToRegExpString(
                      scriptInfo.scriptName
                    )}$">${i18next.t("脚本名：{{text}}", {
                      text: scriptInfo.scriptName
                    })}</button>
									`
                    ),
                    html: true
                  },
                  mask: {
                    enable: true,
                    clickEvent: {
                      toClose: true
                    }
                  },
                  width: "350px",
                  height: "300px",
                  drag: true,
                  dragLimit: true,
                  style: (
                    /*css*/
                    `
								.pops-alert-content{
									display: flex;
									flex-direction: column;
    								gap: 20px;
								}
								.pops-alert-content button{
									text-wrap: wrap;
									padding: 8px;
									height: auto;
									text-align: left;
								}
								`
                  )
                });
                let $content = $dialog.$shadowRoot.querySelector(
                  ".pops-alert-content"
                );
                scriptInfo.scriptAuthors.forEach((scriptAuthorInfo) => {
                  let $authorIdButton = DOMUtils.createElement("button", {
                    innerHTML: i18next.t("作者id：{{text}}", {
                      text: scriptAuthorInfo.authorId
                    })
                  });
                  $authorIdButton.setAttribute(attr_filter_key, "scriptAuthorId");
                  $authorIdButton.setAttribute(
                    attr_filter_value,
                    "^" + scriptAuthorInfo.authorId + "$"
                  );
                  let $authorNameButton = DOMUtils.createElement("button", {
                    innerHTML: i18next.t("作者名：{{text}}", {
                      text: scriptAuthorInfo.authorName
                    })
                  });
                  $authorNameButton.setAttribute(
                    attr_filter_key,
                    "scriptAuthorName"
                  );
                  $authorNameButton.setAttribute(
                    attr_filter_value,
                    "^" + utils.parseStringToRegExpString(
                      scriptAuthorInfo.authorName
                    ) + "$"
                  );
                  $content.appendChild($authorIdButton);
                  $content.appendChild($authorNameButton);
                });
                DOMUtils.on(
                  $dialog.$shadowRoot,
                  "click",
                  `button[${attr_filter_key}]`,
                  (event2) => {
                    utils.preventEvent(event2);
                    let $click = event2.target;
                    let key = $click.getAttribute(
                      attr_filter_key
                    );
                    let value = $click.getAttribute(attr_filter_value);
                    GreasyforkScriptsFilter.addValue(key, value);
                    $dialog.close();
                    GreasyforkScriptsFilter.filter();
                    Qmsg.success(i18next.t("添加成功"));
                  }
                );
              });
              $operationRight.appendChild($filter);
            }
            $inlineStats.appendChild($ratingScoreLeft);
            $inlineStats.appendChild($ratingScoreRight);
            $inlineStats.appendChild($versionLeft);
            $inlineStats.appendChild($versionRight);
            $inlineStats.appendChild($operationLeft);
            $inlineStats.appendChild($operationRight);
          });
        }, 100);
        let lockFn2 = new utils.LockFunction(async () => {
          let $installLinkList = Array.from(
            $$(
              ".install-link[data-install-format=js]:not([gm-is-check-install-status])"
            )
          );
          for (let index = 0; index < $installLinkList.length; index++) {
            const $installLink = $installLinkList[index];
            $installLink.setAttribute("gm-is-check-install-status", "");
            let scriptInfo = Reflect.get(
              $installLink,
              "data-script-info"
            );
            if (hasScriptContainer) {
              if (isForceUseNameSpace) {
                let response = await httpx.get(
                  GreasyforkUrlUtils.getScriptInfoUrl(scriptInfo.scriptId),
                  {
                    fetch: true
                  }
                );
                if (response.status) {
                  let data = utils.toJSON(
                    response.data.responseText
                  );
                  $installLink.setAttribute(
                    "data-script-namespace",
                    data.namespace
                  );
                }
              }
              GreasyforkCheckVersion.checkForUpdatesJS($installLink, true).then(
                (checkResult) => {
                  DOMUtils.removeClass($installLink, lodingClassName);
                  if (!checkResult) {
                    DOMUtils.text($installLink, noInstallBtnText);
                  }
                }
              );
            } else {
              DOMUtils.removeClass($installLink, lodingClassName);
              DOMUtils.text($installLink, noInstallBtnText);
            }
          }
        });
        utils.mutationObserver(document, {
          config: {
            subtree: true,
            childList: true
          },
          immediate: true,
          callback: () => {
            lockFn.run();
            lockFn2.run();
          }
        });
      });
      return result;
    }
  };
  const GreasyforkScriptsFilter = {
    /** 存储的键 */
    key: "gf-shield-rule",
    init() {
      log.info("脚本过滤");
      let lockFunction = new utils.LockFunction(() => {
        this.filter();
      }, 50);
      domUtils.ready(() => {
        if (GreasyforkUtils.isCurrentLoginUserHome()) {
          log.warn("当前在已登录的账户主页下，禁用脚本过滤");
          return;
        }
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          immediate: true,
          callback: () => {
            lockFunction.run();
          }
        });
        lockFunction.run();
      });
    },
    /**
     * 获取脚本列表元素
     */
    getElementList() {
      let scriptList = [
        ...Array.from($$("ol.script-list li[data-script-name]"))
      ];
      return scriptList;
    },
    /**
     * 对页面进行过滤
     */
    filter() {
      this.getElementList().forEach(($scriptList) => {
        let data = parseScriptListInfo($scriptList);
        let localValueSplit = this.getValue().split("\n");
        for (let index = 0; index < localValueSplit.length; index++) {
          let localRule = localValueSplit[index];
          let ruleSplit = localRule.split("##");
          let ruleName = ruleSplit[0];
          let ruleValue = ruleSplit[1];
          if (ruleName === "scriptRatingScore") {
            let userRatingScoreValue = parseFloat(ruleValue.slice(1));
            if (ruleValue.startsWith(">")) {
              if (data.scriptRatingScore > userRatingScoreValue) {
                log.info("触发脚本过滤规则", [localRule, data]);
                $scriptList.remove();
                break;
              }
            } else if (ruleValue.startsWith("<")) {
              if (data.scriptRatingScore < userRatingScoreValue) {
                log.info("触发脚本过滤规则", [localRule, data]);
                $scriptList.remove();
                break;
              }
            }
          } else if (ruleName in data || ruleName === "scriptDescription") {
            if (typeof ruleValue !== "string") {
              continue;
            }
            let ruleValueRegExp = new RegExp(ruleValue, "ig");
            let scriptInfoString = String(data[ruleName]);
            if (scriptInfoString.match(ruleValueRegExp)) {
              log.info("触发脚本过滤规则", localRule, data);
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
    addValue(key, value) {
      let localValue = this.getValue();
      if (localValue.trim() !== "") {
        localValue += "\n";
      }
      if (utils.isNull(key)) {
        return;
      }
      key = key.toString().trim();
      let rule = key + "##" + value;
      localValue += rule;
      this.setValue(localValue);
    },
    getValue() {
      return PopsPanel.getValue(this.key, "");
    }
  };
  const SettingUICommon = {
    id: "greasy-fork-panel-config-account",
    title: i18next.t("通用"),
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: i18next.t("Toast配置"),
            type: "deepMenu",
            forms: [
              {
                text: "",
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
              }
            ]
          },
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
        text: "",
        type: "forms",
        forms: [
          {
            text: i18next.t("账号/密码"),
            type: "deepMenu",
            forms: [
              {
                text: "",
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
                text: "",
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
                  )
                ]
              }
            ]
          },
          {
            text: i18next.t("功能"),
            type: "deepMenu",
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
                    i18next.t("修复图片宽度显示问题"),
                    "fixImageWidth",
                    true,
                    void 0,
                    i18next.t("修复图片在移动端宽度超出浏览器宽度问题")
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
                    i18next.t("添加【操作面板】按钮"),
                    "scripts-addOperationPanelBtnWithNavigator",
                    true,
                    void 0,
                    i18next.t("在脚本列表页面时为顶部导航栏添加【操作面板】按钮")
                  ),
                  UISwitch(
                    i18next.t("给Markdown添加【复制】按钮"),
                    "addMarkdownCopyButton",
                    true,
                    void 0,
                    i18next.t(
                      "在Markdown内容右上角添加【复制】按钮，点击一键复制Markdown内容"
                    )
                  )
                ]
              },
              {
                text: i18next.t("检测页面加载"),
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("启用"),
                    "checkPage",
                    true,
                    void 0,
                    i18next.t(
                      "检测Greasyfork页面是否正常加载，如加载失败则自动刷新页面"
                    )
                  ),
                  UISelect(
                    i18next.t("检测间隔"),
                    "greasyfork-check-page-timeout",
                    5,
                    (() => {
                      let result = [];
                      for (let index = 0; index < 5; index++) {
                        result.push({
                          value: index + 1,
                          text: index + 1 + "s"
                        });
                      }
                      return result;
                    })(),
                    void 0,
                    i18next.t(
                      "设置检测上次刷新页面的间隔时间，当距离上次刷新页面的时间超过设置的值，将不再刷新页面"
                    )
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: i18next.t("表单"),
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch(
                    i18next.t("记住回复内容"),
                    "rememberReplyContent",
                    true,
                    void 0,
                    i18next.t(
                      "监听表单内的textarea内容改变并存储到indexDB中，提交表单将清除保存的数据，误刷新页面时可动态恢复"
                    )
                  ),
                  UISelect(
                    i18next.t("自动清理空间"),
                    "gf-autoClearRememberReplayContent",
                    7,
                    [
                      {
                        text: i18next.t("不清理"),
                        value: -1
                      },
                      {
                        text: i18next.t("{{value}} 天", {
                          value: 1
                        }),
                        value: 1
                      },
                      {
                        text: i18next.t("{{value}} 周", {
                          value: 1
                        }),
                        value: 7
                      },
                      {
                        text: i18next.t("{{value}} 个月", {
                          value: 1
                        }),
                        value: 30
                      },
                      {
                        text: i18next.t("{{value}} 个月", {
                          value: 2
                        }),
                        value: 60
                      },
                      {
                        text: i18next.t("{{value}} 个月", {
                          value: 3
                        }),
                        value: 90
                      },
                      {
                        text: i18next.t("半年"),
                        value: 180
                      }
                    ],
                    void 0,
                    i18next.t("根据设置的间隔时间自动清理保存的回复内容")
                  ),
                  UIButton(
                    i18next.t(`数据占用空间：{{size}}`, {
                      size: i18next.t("计算中")
                    }),
                    i18next.t("当前存储的数据所占用的空间大小"),
                    i18next.t("清空"),
                    void 0,
                    void 0,
                    void 0,
                    "default",
                    async () => {
                      let isClear = await GreasyforkRememberFormTextArea.clearAllRememberReplyContent();
                      if (isClear) {
                        Qmsg.success(i18next.t("清理成功"));
                      } else {
                        Qmsg.error(i18next.t("清理失败"));
                      }
                    },
                    async (formConfig, container) => {
                      let $leftTopText = container.ulElement.querySelector(
                        'li[data-key="gf-autoClearRememberReplayContent"]+li .pops-panel-item-left-main-text'
                      );
                      let allText = await GreasyforkRememberFormTextArea.getAllRememberReplyContent();
                      let showSize = "";
                      if (allText.length) {
                        showSize = utils.getTextStorageSize(
                          JSON.stringify(allText)
                        );
                      } else {
                        showSize = utils.getTextStorageSize("");
                      }
                      $leftTopText.innerText = i18next.t(
                        `数据占用空间：{{size}}`,
                        {
                          size: showSize
                        }
                      );
                    }
                  )
                ]
              }
            ]
          },
          {
            text: i18next.t("美化"),
            type: "deepMenu",
            forms: [
              {
                text: i18next.t("全局"),
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("美化页面元素"),
                    "beautifyPage",
                    true,
                    void 0,
                    i18next.t("如button、input、textarea")
                  ),
                  UISwitch(
                    i18next.t("美化上传图片按钮"),
                    "beautifyUploadImage",
                    true,
                    void 0,
                    i18next.t("放大上传区域")
                  ),
                  UISwitch(
                    i18next.t("美化顶部导航栏"),
                    "beautifyTopNavigationBar",
                    true,
                    void 0,
                    i18next.t("可能会跟Greasyfork Beautify脚本有冲突")
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
                type: "forms",
                text: i18next.t("脚本列表"),
                forms: [
                  UISwitch(
                    i18next.t("美化脚本列表"),
                    "beautifyCenterContent",
                    true,
                    void 0,
                    i18next.t("双列显示且添加脚本卡片操作项（安装、收藏）")
                  ),
                  UISwitch(
                    "↑" + i18next.t("使用namespace查询脚本信息"),
                    "beautifyCenterContent-queryNameSpace",
                    true,
                    void 0,
                    i18next.t("开启后检测已安装的脚本信息更准确，但是速度会更慢")
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: i18next.t("自定义快捷键"),
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UIButtonShortCut(
                    i18next.t("快捷键发表回复"),
                    i18next.t("在输入框内按下快捷发表回复，例如：{{key}}", {
                      key: "Ctrl + Enter"
                    }),
                    "gf-quickReply",
                    {
                      keyName: "Enter",
                      keyValue: "13",
                      ohterCodeList: ["ctrl"]
                    },
                    i18next.t("点击录入快捷键"),
                    void 0,
                    GreasyforkShortCut.shortCut
                  )
                ]
              }
            ]
          },
          {
            text: i18next.t("过滤"),
            type: "deepMenu",
            forms: [
              {
                text: `<a target="_blank" href="https://greasyfork.org/zh-CN/scripts/475722-greasyfork%E4%BC%98%E5%8C%96#:~:text=%E8%84%9A%E6%9C%AC%E8%BF%87%E6%BB%A4%E8%A7%84%E5%88%99">${i18next.t(
                "帮助文档"
              )}</a>`,
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("启用"),
                    "gf-scripts-filter-enable",
                    true,
                    void 0,
                    i18next.t("作用域：脚本、脚本搜索、用户主页")
                  ),
                  {
                    type: "own",
                    getLiElementCallBack(liElement) {
                      let textareaDiv = domUtils.createElement(
                        "div",
                        {
                          className: "pops-panel-textarea",
                          innerHTML: `
												<textarea placeholder="${i18next.t(
                          "请输入规则，每行一个"
                        )}" style="height:200px;"></textarea>`
                        },
                        {
                          style: "width: 100%;"
                        }
                      );
                      let $textarea = textareaDiv.querySelector(
                        "textarea"
                      );
                      $textarea.value = GreasyforkScriptsFilter.getValue();
                      domUtils.on(
                        $textarea,
                        ["input", "propertychange"],
                        void 0,
                        utils.debounce(function(event) {
                          GreasyforkScriptsFilter.setValue($textarea.value);
                        }, 200)
                      );
                      liElement.appendChild(textareaDiv);
                      return liElement;
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "forms",
        text: i18next.t("脚本管理"),
        forms: [
          {
            type: "deepMenu",
            text: i18next.t("代码同步"),
            forms: [
              {
                text: i18next.t("代码同步"),
                type: "forms",
                forms: [
                  UIButton(
                    i18next.t("源代码同步【脚本列表】"),
                    void 0,
                    i18next.t("一键同步"),
                    void 0,
                    void 0,
                    false,
                    "primary",
                    (event) => {
                      if (!GreasyforkRouter.isUsers()) {
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
                          GreasyforkUrlUtils.getAdminUrl(item.href)
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
                      if (!GreasyforkRouter.isUsers()) {
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
                          GreasyforkUrlUtils.getAdminUrl(item.href)
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
                      if (!GreasyforkRouter.isUsers()) {
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
                          GreasyforkUrlUtils.getAdminUrl(item.href)
                        );
                      });
                      GreasyforkMenu.updateScript(scriptUrlList);
                    }
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: i18next.t("脚本列表"),
            forms: [],
            afterEnterDeepMenuCallBack(formConfig, container) {
              PopsPanelUISetting.UIScriptList(
                "script-list",
                container.sectionBodyContainer
              );
            }
          },
          {
            type: "deepMenu",
            text: i18next.t("库"),
            forms: [],
            afterEnterDeepMenuCallBack(formConfig, container) {
              PopsPanelUISetting.UIScriptList(
                "script-library",
                container.sectionBodyContainer
              );
            }
          }
        ]
      }
    ]
  };
  const SettingUIScripts = {
    id: "greasy-fork-panel-config-scripts",
    title: i18next.t("脚本"),
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: i18next.t("代码"),
            type: "deepMenu",
            forms: [
              {
                text: "",
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
                  ),
                  UISwitch(
                    i18next.t("修复代码行号显示"),
                    "code-repairCodeLineNumber",
                    false,
                    void 0,
                    i18next.t("修复代码行数超过1k行号显示不全问题")
                  ),
                  UISwitch(
                    "monacoEditor",
                    "code-use-monaco-editor",
                    true,
                    void 0,
                    i18next.t("使用Monaco编辑器")
                  )
                ]
              }
            ]
          },
          {
            text: i18next.t("历史版本"),
            type: "deepMenu",
            forms: [
              {
                text: i18next.t("功能"),
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("添加额外的标签按钮"),
                    "scripts-versions-addExtraTagButton",
                    true,
                    void 0,
                    i18next.t("在版本下面添加【安装】、【查看代码】按钮")
                  ),
                  UISwitch(
                    i18next.t("添加代码对比按钮"),
                    "scripts-versions-addCompareCodeButton",
                    true,
                    void 0,
                    i18next.t("monacoEditor")
                  )
                ]
              },
              {
                text: i18next.t("美化"),
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("美化历史版本页面"),
                    "beautifyHistoryVersionPage",
                    true,
                    void 0,
                    i18next.t("更直观的查看版本迭代")
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: i18next.t("功能"),
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("添加【寻找引用】按钮"),
                    "addFindReferenceButton",
                    true,
                    void 0,
                    i18next.t("在脚本栏添加按钮，一般用于搜索引用该库的相关脚本")
                  ),
                  UISwitch(
                    i18next.t("添加【收藏】按钮"),
                    "addCollectionButton",
                    true,
                    void 0,
                    i18next.t("在脚本栏添加按钮，一般用于快捷收藏该脚本/库")
                  ),
                  UISwitch(
                    i18next.t("添加【今日检查】信息块"),
                    "scriptHomepageAddedTodaySUpdate",
                    true,
                    void 0,
                    i18next.t("在脚本信息栏添加【今日检查】信息块")
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const GreasyforkDiscussionsFilter = {
    /** 存储的键 */
    key: "gf-discuessions-filter-rule",
    $data: {
      /** 脚本 */
      FILTER_SCRIPT_KEY: "greasyfork-discussions-filter-script",
      /** 发布用户 */
      FILTER_POST_USER_KEY: "greasyfork-discussions-filter-post-user",
      /** 回复用户 */
      FILTER_REPLY_USER_KEY: "greasyfork-discussions-filter-reply-user"
    },
    init() {
      log.info("论坛-过滤");
      addStyle(
        /*css*/
        `
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
        `
      );
      let lockFunction = new utils.LockFunction(() => {
        this.filter();
      }, 50);
      utils.mutationObserver(document.body, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
        callback: () => {
          lockFunction.run();
        }
      });
      lockFunction.run();
    },
    /**
     * 获取反馈列表元素
     */
    getElementList() {
      let discussionsListContainer = [];
      discussionsListContainer = discussionsListContainer.concat(
        Array.from(
          document.querySelectorAll(".discussion-list-container")
        )
      );
      return discussionsListContainer;
    },
    /**
     * 论坛-过滤
     */
    filter() {
      this.transformOldRule();
      const SNIPPET_MAP = /* @__PURE__ */ new Map();
      this.getElementList().forEach(($listContainer, index) => {
        const discussionInfo = this.parseDiscuessionListContainerInfo($listContainer);
        let localValueSplit = this.getValue().split("\n");
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
        for (let index2 = 0; index2 < localValueSplit.length; index2++) {
          let localRule = localValueSplit[index2];
          let ruleSplit = localRule.split("##");
          let ruleName = ruleSplit[0];
          let ruleValue = ruleSplit[1];
          if (ruleName in discussionInfo) {
            let ruleValueRegExp = new RegExp(ruleValue, "ig");
            if (discussionInfo[ruleName] != null) {
              let scriptInfoString = String(discussionInfo[ruleName]);
              if (scriptInfoString.match(ruleValueRegExp)) {
                log.info("触发论坛过滤规则", localRule, discussionInfo);
                $listContainer.remove();
                return;
              }
            }
          }
        }
      });
    },
    /**
     * 解析出元素上的属性
     */
    parseDiscuessionListContainerInfo($listContainer) {
      var _a2, _b, _c, _d;
      let discussionUrl = $listContainer.querySelector("a.discussion-title").href;
      let discuessionIdMatch = discussionUrl.match(
        /\/discussions(|\/greasyfork)\/([\d]+)/
      );
      let discuessionId = discuessionIdMatch[discuessionIdMatch.length - 1];
      const info = {
        /** 脚本名 */
        scriptName: $listContainer.querySelector(
          ".discussion-meta-item-script-name"
        ).innerText,
        /** 脚本主页地址 */
        scriptUrl: (_a2 = $listContainer.querySelector(
          ".discussion-meta-item-script-name a"
        )) == null ? void 0 : _a2.href,
        /** 脚本id */
        scriptId: GreasyforkUrlUtils.getScriptId(
          (_b = $listContainer.querySelector(
            ".discussion-meta-item-script-name a"
          )) == null ? void 0 : _b.href
        ),
        /** 发布的用户名 */
        postUserName: $listContainer.querySelector("a.user-link").innerText,
        /** 发布的用户主页地址 */
        postUserHomeUrl: $listContainer.querySelector("a.user-link").href,
        /** 发布的用户id */
        postUserId: GreasyforkUrlUtils.getUserId(
          $listContainer.querySelector("a.user-link").href
        ),
        /** 发布的时间 */
        postTimeStamp: new Date(
          $listContainer.querySelector("relative-time").getAttribute("datetime")
        ),
        /**  发布的id */
        snippetId: discuessionId,
        /** 发布的地址*/
        snippetUrl: discussionUrl,
        /** 发布的内容片段*/
        snippet: ((_c = $listContainer.querySelector("span.discussion-snippet")) == null ? void 0 : _c.innerText) || "",
        /** （如果有）回复的用户名*/
        replyUserName: void 0,
        /** （如果有）回复的用户主页地址*/
        replyUserHomeUrl: void 0,
        /** （如果有）回复的用户id*/
        replyUserId: void 0,
        /** （如果有）回复的时间 */
        replyTimeStamp: void 0
      };
      if ($listContainer.querySelector(
        ".discussion-meta-item .discussion-meta-item"
      )) {
        info.replyUserName = $listContainer.querySelector(
          ".discussion-meta-item .discussion-meta-item a.user-link"
        ).innerText;
        info.replyUserHomeUrl = $listContainer.querySelector(
          ".discussion-meta-item .discussion-meta-item a.user-link"
        ).href;
        info.replyUserId = GreasyforkUrlUtils.getUserId(info.replyUserHomeUrl);
        info.replyTimeStamp = new Date(
          (_d = $listContainer.querySelector(
            ".discussion-meta-item .discussion-meta-item relative-time"
          )) == null ? void 0 : _d.getAttribute("datetime")
        );
      }
      return info;
    },
    /** 转换旧规则 @deprecated */
    transformOldRule() {
      if (Date.now() > (/* @__PURE__ */ new Date("2024-8-19")).getTime()) {
        return;
      }
      const FILTER_SCRIPT_KEY = "greasyfork-discussions-filter-script";
      const FILTER_POST_USER_KEY = "greasyfork-discussions-filter-post-user";
      const FILTER_REPLY_USER_KEY = "greasyfork-discussions-filter-reply-user";
      const filterScript = PopsPanel.getValue(FILTER_SCRIPT_KEY, "");
      const filterPostUser = PopsPanel.getValue(FILTER_POST_USER_KEY, "");
      const filterReplyUser = PopsPanel.getValue(FILTER_REPLY_USER_KEY, "");
      const filterScriptList = filterScript.trim() === "" ? [] : filterScript.split("\n");
      const filterPostUserList = filterPostUser.trim() === "" ? [] : filterPostUser.split("\n");
      const filterReplyUserList = filterReplyUser.trim() === "" ? [] : filterReplyUser.split("\n");
      filterScriptList.forEach((ruleValue) => {
        this.addValue(
          "scriptId",
          utils.parseStringToRegExpString("^" + ruleValue + "$")
        );
      });
      filterPostUserList.forEach((ruleValue) => {
        this.addValue(
          "postUserId",
          utils.parseStringToRegExpString("^" + ruleValue + "$")
        );
      });
      filterReplyUserList.forEach((ruleValue) => {
        this.addValue(
          "replyUserId",
          utils.parseStringToRegExpString("^" + ruleValue + "$")
        );
      });
      PopsPanel.deleteValue(FILTER_SCRIPT_KEY);
      PopsPanel.deleteValue(FILTER_POST_USER_KEY);
      PopsPanel.deleteValue(FILTER_REPLY_USER_KEY);
    },
    setValue(value) {
      PopsPanel.setValue(this.key, value);
    },
    addValue(key, value) {
      let localValue = this.getValue();
      if (localValue.trim() !== "") {
        localValue += "\n";
      }
      if (utils.isNull(key)) {
        return;
      }
      key = key.toString().trim();
      let rule = key + "##" + value;
      localValue += rule;
      this.setValue(localValue);
    },
    getValue() {
      return PopsPanel.getValue(this.key, "");
    }
  };
  const SettingUIDiscuessions = {
    id: "greasy-fork-panel-config-discussions",
    title: i18next.t("论坛"),
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: i18next.t("功能"),
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  {
                    type: "own",
                    attributes: {
                      "data-key": "discussions-readBgColor",
                      "data-default-value": "#e5e5e5"
                    },
                    getLiElementCallBack(liElement) {
                      let key = "discussions-readBgColor";
                      let $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: `
											<p class="pops-panel-item-left-main-text">${i18next.t("自定义已读颜色")}</p>
											<p class="pops-panel-item-left-desc-text">${i18next.t("在讨论内生效")}</p>
											`
                      });
                      let $right = domUtils.createElement("div", {
                        className: "pops-panel-item-right",
                        innerHTML: `
											<input type="color" class="pops-color-choose" />
											`
                      });
                      let $color = $right.querySelector(
                        ".pops-color-choose"
                      );
                      $color.value = PopsPanel.getValue(key);
                      let $style = domUtils.createElement("style");
                      domUtils.append(document.head, $style);
                      domUtils.on(
                        $color,
                        ["input", "propertychange"],
                        (event) => {
                          log.info("选择颜色：" + $color.value);
                          $style.innerHTML = `
												.discussion-read{
													background: ${$color.value} !important;
												}
												`;
                          PopsPanel.setValue(key, $color.value);
                        }
                      );
                      liElement.appendChild($left);
                      liElement.appendChild($right);
                      return liElement;
                    }
                  },
                  UISwitch(
                    i18next.t("添加【过滤】按钮"),
                    "discussions-addShortcutOperationButton",
                    true,
                    void 0,
                    i18next.t(
                      "在每一行讨论的最后面添加【过滤】按钮，需开启过滤功能才会生效"
                    )
                  ),
                  UISwitch(
                    i18next.t("添加【举报】按钮"),
                    "discussions-addReportButton",
                    true,
                    void 0,
                    i18next.t("在每一行讨论的最后面添加【举报】按钮")
                  )
                ]
              }
            ]
          },
          {
            text: i18next.t("过滤"),
            type: "deepMenu",
            forms: [
              {
                text: `<a target="_blank" href="https://greasyfork.org/zh-CN/scripts/475722-greasyfork%E4%BC%98%E5%8C%96#:~:text=%E8%AE%BA%E5%9D%9B%E8%BF%87%E6%BB%A4%E8%A7%84%E5%88%99">${i18next.t(
                "帮助文档"
              )}</a>`,
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("启用"),
                    "greasyfork-discussions-filter-enable",
                    true,
                    void 0,
                    i18next.t("开启后下面的过滤功能才会生效")
                  ),
                  UISwitch(
                    i18next.t("过滤重复的评论"),
                    "greasyfork-discussions-filter-duplicate-comments",
                    false,
                    void 0,
                    i18next.t("过滤掉重复的评论数量(≥2)")
                  ),
                  {
                    type: "own",
                    getLiElementCallBack(liElement) {
                      let textareaDiv = domUtils.createElement(
                        "div",
                        {
                          className: "pops-panel-textarea",
                          innerHTML: `
										<textarea placeholder="${i18next.t(
                          "请输入规则，每行一个"
                        )}" style="height:200px;"></textarea>`
                        },
                        {
                          style: "width: 100%;"
                        }
                      );
                      let $textarea = textareaDiv.querySelector(
                        "textarea"
                      );
                      $textarea.value = GreasyforkDiscussionsFilter.getValue();
                      domUtils.on(
                        $textarea,
                        ["input", "propertychange"],
                        void 0,
                        utils.debounce(function(event) {
                          GreasyforkDiscussionsFilter.setValue($textarea.value);
                        }, 200)
                      );
                      liElement.appendChild(textareaDiv);
                      return liElement;
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const UIScriptListCSS = '.w-script-list-item {\r\n	padding: 10px;\r\n	border-bottom: 1px solid #e5e5e5;\r\n	font-size: 16px;\r\n	text-align: left;\r\n	background: var(--aside-bg-color);\r\n	border-radius: 8px;\r\n	--pops-panel-forms-margin-left-right: 10px;\r\n}\r\n.w-script-version,\r\n.w-script-fan-score,\r\n.w-script-create-time,\r\n.w-script-update-time,\r\n.w-script-locale,\r\n.w-script-sync-type {\r\n	font-size: 14px;\r\n	color: #7c7c7c;\r\n}\r\n.w-script-fan-score {\r\n	margin-left: unset !important;\r\n	text-align: unset !important;\r\n	max-width: unset !important;\r\n}\r\n.w-script-deleted {\r\n	text-decoration: line-through;\r\n	font-style: italic;\r\n	color: red;\r\n}\r\n.w-script-deleted .w-script-name::before {\r\n	content: "【删除】";\r\n}\r\n\r\nli[data-key="user"] .pops-panel-input,\r\nli[data-key="pwd"] .pops-panel-input {\r\n	max-width: 200px;\r\n}\r\n';
  const SettingUIUsers = {
    id: "greasy-fork-panel-config-account",
    title: i18next.t("用户"),
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: i18next.t("功能"),
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("迁移【控制台】到顶部导航栏"),
                    "users-changeConsoleToTopNavigator",
                    true,
                    void 0,
                    i18next.t("将【控制台】按钮移动到顶部导航栏，节省空间")
                  )
                ]
              }
            ]
          },
          {
            text: i18next.t("美化"),
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    i18next.t("美化私信页面"),
                    "conversations-beautifyDialogBox",
                    true,
                    void 0,
                    i18next.t("美化为左右对话模式")
                  ),
                  UISwitch(
                    i18next.t("美化私信列表"),
                    "conversations-beautifyPrivateMessageList",
                    true
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const GithubUrl2WebhookUrl = {
    init() {
    },
    /**
     * 显示视图
     */
    showView() {
      let $alert = __pops.alert({
        title: {
          text: i18next.t("Url To WebhookUrl"),
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                <div class="github-2-webhook-container">
                    <div class="url-container">
                        <h4>Github Url</h4>
                        <div class="url-parse url-parse-link">
                            <label>${i18next.t("转换前")}</label>
                            <textarea id="github" placeholder="${i18next.t("例如：") + "https://github.com/WhiteSevs/TamperMonkeyScript/blob/master/README.md"}"></textarea>
                        </div>
                        <div class="url-parse url-parse-result">
                            <label>${i18next.t("转换后")}</label>
                            <textarea id="webhook" placeholder="${i18next.t("结果：") + "https://raw.githubusercontent.com/WhiteSevs/TamperMonkeyScript/master/README.md"}" readonly></textarea>
                        </div>
                    </div>
                </div>
                `
          ),
          html: true
        },
        btn: {
          ok: {
            type: "default",
            text: i18next.t("关闭")
          }
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: false,
            toHide: false
          }
        },
        drag: true,
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
        style: (
          /*css*/
          `
            .github-2-webhook-container{
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            .url-container{
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 20px;
                flex: 1;
            }
            .url-parse{
                display: flex;
                flex-direction: column;
                flex: 1;
            }
            .url-container textarea{
                height: 100%;
                width: 100%;
                position: relative;
                display: block;
                resize: none;
                padding: 5px 11px;
                box-sizing: border-box;
                font-size: inherit;
                font-family: inherit;
                background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
                background-image: none;
                -webkit-appearance: none;
                appearance: none;
                box-shadow: 0 0 0 1px #dcdfe6 inset;
                border-radius: 0;
                transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
                border: none;
            }
            .url-container textarea:hover,
            .url-container textarea:focus{
                outline: 0;
                box-shadow: 0 0 0 1px #409eff inset;
            }
            `
        )
      });
      let $githubUrlInput = $alert.$shadowRoot.querySelector("#github");
      let $webhookUrlInput = $alert.$shadowRoot.querySelector("#webhook");
      domUtils.on($githubUrlInput, ["input", "propertychange"], (event) => {
        let githubUrl = $githubUrlInput.value.trim();
        let webhookUrlList = [];
        githubUrl.split("\n").forEach((urlStr) => {
          try {
            urlStr = urlStr.trim();
            if (utils.isNull(urlStr)) {
              return;
            }
            let urlObj = new URL(urlStr);
            let urlPathNameSplit = urlObj.pathname.split("/");
            let {
              1: userName,
              2: repoName,
              3: blobStr,
              4: branchName
            } = urlPathNameSplit;
            let filePath = "";
            if (urlPathNameSplit.length >= 6 && blobStr === "blob") {
              filePath = urlPathNameSplit.slice(5, urlPathNameSplit.length).join("/");
            } else if (urlPathNameSplit.length >= 8 && blobStr === "raw" && branchName === "refs") {
              branchName = urlPathNameSplit[6];
              filePath = urlPathNameSplit.slice(7, urlPathNameSplit.length).join("/");
            } else {
              return;
            }
            if (filePath === "") {
              return;
            }
            webhookUrlList.push(
              `https://raw.githubusercontent.com/${userName}/${repoName}/${branchName}/${filePath}`
            );
          } catch (error) {
          }
        });
        $webhookUrlInput.value = webhookUrlList.join("\n");
      });
    }
  };
  const SettingUIScriptSearch = {
    id: "greasy-fork-panel-config-script-search",
    title: i18next.t("搜索"),
    forms: [
      {
        type: "forms",
        text: "",
        forms: [
          UISwitch(
            i18next.t("新增【关键词】搜索框"),
            "gf-script-search-addFilterSearchInput",
            true,
            void 0,
            i18next.t("输入自定义关键词后自动执行过滤")
          ),
          UISwitch(
            i18next.t("新增【{{buttonText}}】按钮", {
              buttonText: i18next.t("名称")
            }),
            "gf-script-search-filterScriptTitleWholeWordMatching",
            true,
            void 0,
            i18next.t("该Checkbox按钮开启后，自动过滤出包含搜索关键词的脚本")
          ),
          UISwitch(
            i18next.t("新增【{{buttonText}}】按钮", {
              buttonText: i18next.t("描述")
            }),
            "gf-script-search-filterScriptDescWholeWordMatching",
            true,
            void 0,
            i18next.t("该Checkbox按钮开启后，自动过滤出包含搜索关键词的脚本")
          ),
          UISwitch(
            i18next.t("新增【{{buttonText}}】按钮", {
              buttonText: i18next.t("名称/描述")
            }),
            "gf-script-search-filterScriptTitleOrDescWholeWordMatching",
            true,
            void 0,
            i18next.t("该Checkbox按钮开启后，自动过滤出包含搜索关键词的脚本")
          ),
          UISwitch(
            i18next.t("新增【{{buttonText}}】按钮", {
              buttonText: i18next.t("作者名称")
            }),
            "gf-script-search-filterScriptAuthorNameWholeWordMatching",
            true,
            void 0,
            i18next.t("该Checkbox按钮开启后，自动过滤出包含搜索关键词的脚本")
          )
        ]
      }
    ]
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      __data: null,
      __oneSuccessExecMenu: null,
      __onceExec: null,
      __listenData: null,
      /**
       * 菜单项的默认值
       */
      get data() {
        if (PopsPanel.$data.__data == null) {
          PopsPanel.$data.__data = new utils.Dictionary();
        }
        return PopsPanel.$data.__data;
      },
      /**
       * 成功只执行了一次的项
       */
      get oneSuccessExecMenu() {
        if (PopsPanel.$data.__oneSuccessExecMenu == null) {
          PopsPanel.$data.__oneSuccessExecMenu = new utils.Dictionary();
        }
        return PopsPanel.$data.__oneSuccessExecMenu;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExec() {
        if (PopsPanel.$data.__onceExec == null) {
          PopsPanel.$data.__onceExec = new utils.Dictionary();
        }
        return PopsPanel.$data.__onceExec;
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
        if (PopsPanel.$data.__listenData == null) {
          PopsPanel.$data.__listenData = new utils.Dictionary();
        }
        return PopsPanel.$data.__listenData;
      }
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    initExtensionsMenu() {
      if (!this.isTopWindow()) {
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
        },
        {
          key: "githubUrl2webhookUrl",
          text: "⚙ " + i18next.t("Url To WebhookUrl"),
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            GithubUrl2WebhookUrl.showView();
          }
        }
      ]);
    },
    /** 初始化菜单项的默认值保存到本地数据中 */
    initPanelDefaultValue() {
      let that = this;
      function initDefaultValue(config) {
        if (!config.attributes) {
          return;
        }
        let needInitConfig = {};
        let key = config.attributes[ATTRIBUTE_KEY];
        if (key != null) {
          needInitConfig[key] = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
        }
        let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
        }
        let initMoreValue = config.attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (initMoreValue && typeof initMoreValue === "object") {
          Object.assign(needInitConfig, initMoreValue);
        }
        let needInitConfigList = Object.keys(needInitConfig);
        if (!needInitConfigList.length) {
          log.warn("请先配置键", config);
          return;
        }
        needInitConfigList.forEach((__key) => {
          let __defaultValue = needInitConfig[__key];
          if (that.$data.data.has(__key)) {
            log.warn("请检查该key(已存在): " + __key);
          }
          that.$data.data.set(__key, __defaultValue);
        });
      }
      function loopInitDefaultValue(configList) {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
          }
        }
      }
      let contentConfigList = this.getPanelContentConfig();
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
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
    addValueChangeListener(key, callback, option) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
      if (option) {
        if (option.immediate) {
          callback(key, this.getValue(key), this.getValue(key));
        }
      }
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
     * 主动触发菜单值改变的回调
     * @param key 菜单键
     * @param newValue 想要触发的新值，默认使用当前值
     * @param oldValue 想要触发的旧值，默认使用当前值
     */
    triggerMenuValueChange(key, newValue, oldValue) {
      if (this.$listener.listenData.has(key)) {
        let listenData = this.$listener.listenData.get(key);
        if (typeof listenData.callback === "function") {
          let value = this.getValue(key);
          let __newValue = value;
          let __oldValue = value;
          if (typeof newValue !== "undefined" && arguments.length > 1) {
            __newValue = newValue;
          }
          if (typeof oldValue !== "undefined" && arguments.length > 2) {
            __oldValue = oldValue;
          }
          listenData.callback(key, __oldValue, __newValue);
        }
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
     * @param [isReverse=false] 逆反判断菜单启用
     */
    execMenu(key, callback, isReverse = false) {
      if (!(typeof key === "string" || typeof key === "object" && Array.isArray(key))) {
        throw new TypeError("key 必须是字符串或者字符串数组");
      }
      let runKeyList = [];
      if (typeof key === "object" && Array.isArray(key)) {
        runKeyList = [...key];
      } else {
        runKeyList.push(key);
      }
      let value = void 0;
      for (let index = 0; index < runKeyList.length; index++) {
        const runKey = runKeyList[index];
        if (!this.$data.data.has(runKey)) {
          log.warn(`${key} 键不存在`);
          return;
        }
        let runValue = PopsPanel.getValue(runKey);
        if (isReverse) {
          runValue = !runValue;
        }
        if (!runValue) {
          break;
        }
        value = runValue;
      }
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     * @param getValueFn 自定义处理获取当前值，值true是启用并执行回调，值false是不执行回调
     * @param handleValueChangeFn 自定义处理值改变时的回调，值true是启用并执行回调，值false是不执行回调
     */
    execMenuOnce(key, callback, getValueFn, handleValueChangeFn) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      if (this.$data.oneSuccessExecMenu.has(key)) {
        return;
      }
      this.$data.oneSuccessExecMenu.set(key, 1);
      let __getValue = () => {
        let localValue = PopsPanel.getValue(key);
        return typeof getValueFn === "function" ? getValueFn(key, localValue) : localValue;
      };
      let resultStyleList = [];
      let dynamicPushStyleNode = ($style) => {
        let __value = __getValue();
        let dynamicResultList = [];
        if ($style instanceof HTMLStyleElement) {
          dynamicResultList = [$style];
        } else if (Array.isArray($style)) {
          dynamicResultList = [
            ...$style.filter(
              (item) => item != null && item instanceof HTMLStyleElement
            )
          ];
        }
        if (__value) {
          resultStyleList = resultStyleList.concat(dynamicResultList);
        } else {
          for (let index = 0; index < dynamicResultList.length; index++) {
            let $css = dynamicResultList[index];
            $css.remove();
            dynamicResultList.splice(index, 1);
            index--;
          }
        }
      };
      let changeCallBack = (currentValue) => {
        let resultList = [];
        if (currentValue) {
          let result = callback(currentValue, dynamicPushStyleNode);
          if (result instanceof HTMLStyleElement) {
            resultList = [result];
          } else if (Array.isArray(result)) {
            resultList = [
              ...result.filter(
                (item) => item != null && item instanceof HTMLStyleElement
              )
            ];
          }
        }
        for (let index = 0; index < resultStyleList.length; index++) {
          let $css = resultStyleList[index];
          $css.remove();
          resultStyleList.splice(index, 1);
          index--;
        }
        resultStyleList = [...resultList];
      };
      this.addValueChangeListener(
        key,
        (__key, oldValue, newValue) => {
          let __newValue = newValue;
          if (typeof handleValueChangeFn === "function") {
            __newValue = handleValueChangeFn(__key, newValue, oldValue);
          }
          changeCallBack(__newValue);
        }
      );
      let value = __getValue();
      if (value) {
        changeCallBack(value);
      }
    },
    /**
     * 父子菜单联动，自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key 菜单键
     * @param childKey 子菜单键
     * @param callback 回调
     * @param replaceValueFn 用于修改mainValue，返回undefined则不做处理
     */
    execInheritMenuOnce(key, childKey, callback, replaceValueFn) {
      let that = this;
      const handleInheritValue = (key2, childKey2) => {
        let mainValue = that.getValue(key2);
        let childValue = that.getValue(childKey2);
        if (typeof replaceValueFn === "function") {
          let changedMainValue = replaceValueFn(mainValue, childValue);
          if (changedMainValue !== void 0) {
            return changedMainValue;
          }
        }
        return mainValue;
      };
      this.execMenuOnce(
        key,
        callback,
        () => {
          return handleInheritValue(key, childKey);
        },
        () => {
          return handleInheritValue(key, childKey);
        }
      );
      this.execMenuOnce(
        childKey,
        () => {
        },
        () => false,
        () => {
          this.triggerMenuValueChange(key);
          return false;
        }
      );
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
      __pops.panel({
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
        zIndex() {
          let maxZIndex = Utils.getMaxZIndex();
          let popsMaxZIndex = __pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
          return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
        },
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        drag: true,
        only: true,
        style: `
			${UIScriptListCSS}
			`
      });
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        SettingUICommon,
        SettingUIScripts,
        SettingUIScriptSearch,
        SettingUIDiscuessions,
        SettingUIUsers
      ];
      return configList;
    }
  };
  const beautifyMarkdownCSS = ':root {\r\n	--borderColor-muted: #d1d9e0b3;\r\n	--markdown-pre-color: #000;\r\n	--markdown-pre-bg-color: #f5f5f5;\r\n	--markdown-code-color: #000;\r\n	--markdown-code-bg-color: #f0f0f0;\r\n}\r\ncode {\r\n	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r\n	font-size: 0.85em;\r\n	color: var(--markdown-code-color);\r\n	background-color: var(--markdown-code-bg-color);\r\n	border-radius: 3px;\r\n	padding: 0.2em 0;\r\n	border: 0;\r\n}\r\ntable {\r\n	text-indent: initial;\r\n}\r\ntable {\r\n	margin: 10px 0 15px 0;\r\n	border-collapse: collapse;\r\n	border-spacing: 0;\r\n	display: block;\r\n	width: 100%;\r\n	overflow: auto;\r\n	word-break: normal;\r\n	word-break: keep-all;\r\n}\r\ncode,\r\npre {\r\n	color: var(--markdown-pre-color);\r\n	background: 0 0;\r\n	font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n	text-align: left;\r\n	white-space: pre;\r\n	word-spacing: normal;\r\n	word-break: normal;\r\n	word-wrap: normal;\r\n	line-height: 1.4;\r\n	-moz-tab-size: 8;\r\n	-o-tab-size: 8;\r\n	tab-size: 8;\r\n	-webkit-hyphens: none;\r\n	-moz-hyphens: none;\r\n	-ms-hyphens: none;\r\n	hyphens: none;\r\n}\r\npre {\r\n	padding: 0.8em;\r\n	overflow: auto;\r\n	border-radius: 3px;\r\n	background: var(--markdown-pre-bg-color);\r\n}\r\n:not(pre) > code {\r\n	padding: 0.1em;\r\n	border-radius: 0.3em;\r\n	white-space: normal;\r\n	background: var(--markdown-pre-bg-color);\r\n}\r\nhtml body {\r\n	font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans,\r\n		sans-serif;\r\n	font-size: 16px;\r\n	line-height: 1.6;\r\n	color: #333;\r\n	background-color: #fff;\r\n	overflow: initial;\r\n	box-sizing: border-box;\r\n	word-wrap: break-word;\r\n}\r\nhtml body > :first-child {\r\n	margin-top: 0;\r\n}\r\nhtml body h1,\r\nhtml body h2,\r\nhtml body h3,\r\nhtml body h4,\r\nhtml body h5,\r\nhtml body h6 {\r\n	line-height: 1.2;\r\n	margin-top: 1em;\r\n	margin-bottom: 16px;\r\n	color: #000;\r\n}\r\nhtml body h1 {\r\n	font-size: 2.25em;\r\n	font-weight: 300;\r\n	padding-bottom: 0.3em;\r\n}\r\nhtml body h2 {\r\n	font-size: 1.75em;\r\n	font-weight: 400;\r\n	padding-bottom: 0.3em;\r\n}\r\nhtml body h3 {\r\n	font-size: 1.5em;\r\n	font-weight: 500;\r\n}\r\nhtml body h4 {\r\n	font-size: 1.25em;\r\n	font-weight: 600;\r\n}\r\nhtml body h5 {\r\n	font-size: 1.1em;\r\n	font-weight: 600;\r\n}\r\nhtml body h6 {\r\n	font-size: 1em;\r\n	font-weight: 600;\r\n}\r\nhtml body h1,\r\nhtml body h2,\r\nhtml body h3,\r\nhtml body h4,\r\nhtml body h5 {\r\n	font-weight: 600;\r\n}\r\nhtml body h5 {\r\n	font-size: 1em;\r\n}\r\nhtml body h6 {\r\n	color: #5c5c5c;\r\n}\r\nhtml body strong {\r\n	color: #000;\r\n}\r\nhtml body del {\r\n	color: #5c5c5c;\r\n}\r\nhtml body a:not([href]) {\r\n	color: inherit;\r\n}\r\nhtml body a {\r\n	text-decoration: underline;\r\n	text-underline-offset: 0.2rem;\r\n}\r\nhtml body a:hover {\r\n	color: #00a3f5;\r\n}\r\nhtml body img {\r\n	max-width: 100%;\r\n}\r\nhtml body > p {\r\n	margin-top: 0;\r\n	margin-bottom: 16px;\r\n	word-wrap: break-word;\r\n}\r\nhtml body > ol,\r\nhtml body > ul {\r\n	margin-bottom: 16px;\r\n}\r\nhtml body ol,\r\nhtml body ul {\r\n	padding-left: 2em;\r\n}\r\nhtml body ol.no-list,\r\nhtml body ul.no-list {\r\n	padding: 0;\r\n	list-style-type: none;\r\n}\r\nhtml body ol ol,\r\nhtml body ol ul,\r\nhtml body ul ol,\r\nhtml body ul ul {\r\n	margin-top: 0;\r\n	margin-bottom: 0;\r\n}\r\nhtml body li {\r\n	margin-bottom: 0;\r\n}\r\nhtml body li.task-list-item {\r\n	list-style: none;\r\n}\r\nhtml body li > p {\r\n	margin-top: 0;\r\n	margin-bottom: 0;\r\n}\r\nhtml body .task-list-item-checkbox {\r\n	margin: 0 0.2em 0.25em -1.8em;\r\n	vertical-align: middle;\r\n}\r\nhtml body .task-list-item-checkbox:hover {\r\n	cursor: pointer;\r\n}\r\nhtml body blockquote {\r\n	margin: 16px 0;\r\n	font-size: inherit;\r\n	padding: 0 15px;\r\n	color: #5c5c5c;\r\n	background-color: #f0f0f0;\r\n	border-left: 4px solid #d6d6d6 !important;\r\n}\r\nhtml body blockquote > :first-child {\r\n	margin-top: 0;\r\n}\r\nhtml body blockquote > :last-child {\r\n	margin-bottom: 0;\r\n}\r\nhtml body hr {\r\n	height: 4px;\r\n	margin: 32px 0;\r\n	background-color: #d6d6d6;\r\n	border: 0 none;\r\n}\r\nhtml body table {\r\n	margin: 10px 0 15px 0;\r\n	border-collapse: collapse;\r\n	border-spacing: 0;\r\n	display: block;\r\n	width: 100%;\r\n	overflow: auto;\r\n	word-break: normal;\r\n	word-break: keep-all;\r\n}\r\nhtml body table th {\r\n	font-weight: 700;\r\n	color: #000;\r\n}\r\nhtml body table td,\r\nhtml body table th {\r\n	border: 1px solid #d6d6d6;\r\n	padding: 6px 13px;\r\n}\r\nhtml body dl {\r\n	padding: 0;\r\n}\r\nhtml body dl dt {\r\n	padding: 0;\r\n	margin-top: 16px;\r\n	font-size: 1em;\r\n	font-style: italic;\r\n	font-weight: 700;\r\n}\r\nhtml body dl dd {\r\n	padding: 0 16px;\r\n	margin-bottom: 16px;\r\n}\r\nhtml body code {\r\n	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r\n	font-size: 0.85em;\r\n	color: #000;\r\n	background-color: #f0f0f0;\r\n	border-radius: 3px;\r\n	padding: 0.2em 0;\r\n}\r\nhtml body code::after,\r\nhtml body code::before {\r\n	letter-spacing: -0.2em;\r\n	content: "\\00a0";\r\n}\r\nhtml body pre {\r\n	background: #f6f8fa;\r\n}\r\nhtml body pre > code {\r\n	padding: 0;\r\n	margin: 0;\r\n	word-break: normal;\r\n	white-space: pre;\r\n	background: 0 0;\r\n	border: 0;\r\n}\r\nhtml body .highlight {\r\n	margin-bottom: 16px;\r\n}\r\nhtml body .highlight pre,\r\nhtml body pre {\r\n	padding: 1em;\r\n	overflow: auto;\r\n	line-height: 1.45;\r\n	border: #d6d6d6;\r\n	border-radius: 3px;\r\n}\r\nhtml body .highlight pre {\r\n	margin-bottom: 0;\r\n	word-break: normal;\r\n}\r\nhtml body pre code,\r\nhtml body pre tt {\r\n	display: inline;\r\n	max-width: initial;\r\n	padding: 0;\r\n	margin: 0;\r\n	overflow: initial;\r\n	line-height: inherit;\r\n	word-wrap: normal;\r\n	background-color: transparent;\r\n	border: 0;\r\n}\r\nhtml body pre code:after,\r\nhtml body pre code:before,\r\nhtml body pre tt:after,\r\nhtml body pre tt:before {\r\n	content: normal;\r\n}\r\nhtml body blockquote,\r\nhtml body dl,\r\nhtml body ol,\r\nhtml body p,\r\nhtml body pre,\r\nhtml body ul {\r\n	margin-top: 0;\r\n	margin-bottom: 16px;\r\n}\r\nhtml body kbd {\r\n	color: #000;\r\n	border: 1px solid #d6d6d6;\r\n	border-bottom: 2px solid #c7c7c7;\r\n	padding: 2px 4px;\r\n	background-color: #f0f0f0;\r\n	border-radius: 3px;\r\n}\r\n@media print {\r\n	html body {\r\n		background-color: #fff;\r\n	}\r\n	html body h1,\r\n	html body h2,\r\n	html body h3,\r\n	html body h4,\r\n	html body h5,\r\n	html body h6 {\r\n		color: #000;\r\n		page-break-after: avoid;\r\n	}\r\n	html body blockquote {\r\n		color: #5c5c5c;\r\n	}\r\n	html body pre {\r\n		page-break-inside: avoid;\r\n	}\r\n	html body table {\r\n		display: table;\r\n	}\r\n	html body img {\r\n		display: block;\r\n		max-width: 100%;\r\n		max-height: 100%;\r\n	}\r\n	html body code,\r\n	html body pre {\r\n		word-wrap: break-word;\r\n		white-space: pre;\r\n	}\r\n}\r\n/* 强制换行 */\r\ncode {\r\n	text-wrap: wrap !important;\r\n}\r\n\r\n.scrollbar-style::-webkit-scrollbar {\r\n	width: 8px;\r\n}\r\n.scrollbar-style::-webkit-scrollbar-track {\r\n	border-radius: 10px;\r\n	background-color: transparent;\r\n}\r\n.scrollbar-style::-webkit-scrollbar-thumb {\r\n	border-radius: 5px;\r\n	background-color: rgba(150, 150, 150, 0.66);\r\n	border: 4px solid rgba(150, 150, 150, 0.66);\r\n	background-clip: content-box;\r\n}\r\n\r\n/* 表格每隔1行的背景色 */\r\ntable tr:nth-child(2n) {\r\n	background: #f6f8fa;\r\n}\r\n/* 上面是通用 */\r\n\r\n/* 下面是自定义 */\r\n.user-content {\r\n	background: #ffffff !important;\r\n	border-left-color: #ffffff !important;\r\n}\r\n.user-content a {\r\n	color: #0969da;\r\n}\r\n.user-content h1 {\r\n	padding-bottom: 0.3em;\r\n	font-size: 2em;\r\n	border-bottom: 1px solid var(--borderColor-muted, var(--color-border-muted));\r\n}\r\n.user-content h2 {\r\n	padding-bottom: 0.3em;\r\n	font-size: 1.5em;\r\n	border-bottom: 1px solid var(--borderColor-muted, var(--color-border-muted));\r\n}\r\n/* 任务列表样式 */\r\n.task-list-item-checkbox {\r\n	margin: 0 0.2em 0.25em -1.4em;\r\n	vertical-align: middle;\r\n}\r\n/* 隐藏标记框 */\r\nul li:has(> .task-list-item-checkbox)::marker {\r\n	content: "";\r\n}\r\n\r\n/* 警告列表 */\r\n.markdown-alert {\r\n	--borderColor-default: #d1d9e0;\r\n	padding: 0.5rem 1rem;\r\n	margin-bottom: 1rem;\r\n	color: inherit;\r\n	border-left: 0.25em solid var(--borderColor-default);\r\n	border-left-color: var(--fgColor-accent);\r\n}\r\n.markdown-alert-title {\r\n	display: flex;\r\n	font-weight: 500;\r\n	align-items: center;\r\n	line-height: 1;\r\n	color: var(--fgColor-accent);\r\n}\r\n.markdown-alert > :last-child {\r\n	margin-bottom: 0;\r\n}\r\n.markdown-alert-title .octicon {\r\n	display: inline-block;\r\n	overflow: visible !important;\r\n	vertical-align: text-bottom;\r\n	fill: currentColor;\r\n}\r\n.markdown-alert-title .mr-2 {\r\n	margin-right: 0.5rem !important;\r\n}\r\n.markdown-alert[data-type="NOTE"] {\r\n	--fgColor-accent: #0969da;\r\n}\r\n\r\n.markdown-alert[data-type="TIP"] {\r\n	--fgColor-accent: #1a7f37;\r\n}\r\n.markdown-alert[data-type="IMPORTANT"] {\r\n	--fgColor-accent: #8250df;\r\n}\r\n.markdown-alert[data-type="WARNING"] {\r\n	--fgColor-accent: #9a6700;\r\n}\r\n.markdown-alert[data-type="CAUTION"] {\r\n	--fgColor-accent: #d1242f;\r\n}\r\n';
  const beautifyButtonCSS = '/* 美化按钮 */\r\ninput[type="submit"],\r\ninput[type="button"],\r\nbutton {\r\n	display: inline-flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	line-height: 1;\r\n	height: 32px;\r\n	white-space: nowrap;\r\n	cursor: pointer;\r\n	/* color: #606266; */\r\n	text-align: center;\r\n	box-sizing: border-box;\r\n	outline: none;\r\n	transition: 0.1s;\r\n	font-weight: 500;\r\n	user-select: none;\r\n	vertical-align: middle;\r\n	appearance: none;\r\n	-webkit-appearance: none;\r\n	background-color: #ffffff;\r\n	border: 1px solid #dcdfe6;\r\n	border-color: #dcdfe6;\r\n	padding: 8px 15px;\r\n	font-size: 14px;\r\n	border-radius: 4px;\r\n}\r\n\r\ninput[type="submit"]:hover,\r\ninput[type="submit"]:focus,\r\ninput[type="button"]:hover,\r\ninput[type="button"]:focus,\r\nbutton:hover,\r\nbutton:focus {\r\n	color: #409eff;\r\n	border-color: #c6e2ff;\r\n	background-color: #ecf5ff;\r\n	outline: none;\r\n}\r\n\r\ninput[type="url"] {\r\n	position: relative;\r\n	font-size: 14px;\r\n	display: inline-flex;\r\n	line-height: 32px;\r\n	box-sizing: border-box;\r\n	vertical-align: middle;\r\n	appearance: none;\r\n	-webkit-appearance: none;\r\n	/* color: #606266; */\r\n	padding: 0;\r\n	outline: none;\r\n	border: none;\r\n	background: none;\r\n	flex-grow: 1;\r\n	align-items: center;\r\n	justify-content: center;\r\n	padding: 1px 11px;\r\n	background-color: #ffffff;\r\n	background-image: none;\r\n	border-radius: 4px;\r\n	cursor: text;\r\n	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n	transform: translateZ(0);\r\n	box-shadow: 0 0 0 1px #dcdfe6 inset;\r\n\r\n	width: 100%;\r\n	width: -moz-available;\r\n	width: -webkit-fill-available;\r\n	width: fill-available;\r\n}\r\n\r\ninput[type="url"]::placeholder {\r\n	color: #a8abb2;\r\n}\r\n\r\ninput[type="url"]:hover {\r\n	box-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n\r\ninput[type="url"]:focus {\r\n	box-shadow: 0 0 0 1px #409eff inset;\r\n}\r\n';
  const beautifyRadioCSS = 'label.radio-label {\r\n	font-weight: 500;\r\n	position: relative;\r\n	cursor: pointer;\r\n	display: inline-flex;\r\n	align-items: center;\r\n	white-space: normal;\r\n	outline: none;\r\n	font-size: 14px;\r\n	user-select: none;\r\n	margin-right: 32px;\r\n	height: 32px;\r\n	padding: 4px;\r\n	border-radius: 4px;\r\n	box-sizing: border-box;\r\n}\r\nlabel:has(input[type="radio"]:checked),\r\nlabel:has(input[type="radio"]:checked) a {\r\n	color: #409eff;\r\n}\r\nlabel.radio-label input[type="radio"] {\r\n	margin-right: 4px;\r\n	width: 14px;\r\n	height: 14px;\r\n}\r\nlabel.radio-label input[type="radio"]:checked {\r\n	-webkit-appearance: none;\r\n	-moz-appearance: none;\r\n	appearance: none;\r\n	border-radius: 50%;\r\n	width: 14px;\r\n	height: 14px;\r\n	outline: none;\r\n	border: 4px solid #409eff;\r\n	cursor: pointer;\r\n}\r\nlabel.radio-label input[type="radio"]:checked + span {\r\n	color: #409eff;\r\n}\r\n';
  const beautifyInputCSS = 'input[type="search"],\r\ninput[type="text"],\r\ninput[type="password"] {\r\n	justify-content: center;\r\n	align-items: center;\r\n	/* line-height: 1; */\r\n	/* height: 32px; */\r\n	white-space: nowrap;\r\n	cursor: text;\r\n	text-align: center;\r\n	box-sizing: border-box;\r\n	outline: 0;\r\n	transition: 0.1s;\r\n	/* font-weight: 500; */\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	vertical-align: middle;\r\n	-webkit-appearance: none;\r\n	appearance: none;\r\n	background-color: transparent;\r\n	border: 0;\r\n	padding: 8px 8px;\r\n	/* font-size: 14px; */\r\n	text-align: start;\r\n	/* width: 100%; */\r\n	flex: 1;\r\n	border: 1px solid #dcdfe6;\r\n	border-radius: 4px;\r\n}\r\ninput[type="search"]:hover,\r\ninput[type="text"]:hover,\r\ninput[type="password"]:hover {\r\n	box-shadow: 0 0 0 1px #c0c4cc;\r\n}\r\ninput[type="search"]:focus,\r\ninput[type="text"]:focus,\r\ninput[type="password"]:focus {\r\n	outline: 0;\r\n	border: 1px solid #409eff;\r\n	border-radius: 4px;\r\n	box-shadow: none;\r\n}\r\n';
  const beautifyTextAreaCSS = "textarea {\r\n	display: block;\r\n	position: relative;\r\n	/*vertical-align: bottom;*/\r\n	position: relative;\r\n	resize: vertical;\r\n	padding: 5px 11px;\r\n	line-height: 1.5;\r\n	box-sizing: border-box;\r\n	width: 100%;\r\n	font-size: inherit;\r\n	font-family: inherit;\r\n	/* color: #606266; */\r\n	background-color: #ffffff;\r\n	background-image: none;\r\n	appearance: none;\r\n	-webkit-appearance: none;\r\n	box-shadow: 0 0 0 1px #dcdfe6 inset;\r\n	border-radius: 4px;\r\n	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n	border: none;\r\n}\r\ntextarea:focus {\r\n	outline: none;\r\n	box-shadow: 0 0 0 1px #409eff inset;\r\n}\r\n";
  const beautifyUploadImageCSS = '/* 隐藏 添加： */\r\nlabel[for="discussion_comments_attributes_0_attachments"],\r\nlabel[for="comment_attachments"] {\r\n	display: none;\r\n}\r\ninput[type="file"] {\r\n	width: 100%;\r\n	font-size: 20px;\r\n	background: #e2e2e2;\r\n	padding: 40px 0px;\r\n	border-radius: 10px;\r\n	text-align-last: center;\r\n}\r\n';
  const compatibleBeautifyCSS = "#main-header {\r\n	background-color: #670000 !important;\r\n	background-image: linear-gradient(#670000, #990000) !important;\r\n}\r\n#site-nav-vue {\r\n	flex-wrap: wrap;\r\n	justify-content: flex-end;\r\n}\r\n.open-sidebar {\r\n	border-width: 1px;\r\n	border-radius: 3px;\r\n	margin-right: 0;\r\n}\r\ninput.search-submit {\r\n	transform: translateY(-5%) !important;\r\n	margin-left: 10px;\r\n}\r\n#script-content code {\r\n	word-wrap: break-word;\r\n}\r\n.code-container ::selection {\r\n	background-color: #3d4556 !important;\r\n}\r\n";
  const beautifyTopNavigationBarCSS = "#language-selector {\r\n	display: none;\r\n}\r\n/* PC端 */\r\n@media screen and (min-width: 600px) {\r\n	body {\r\n		--header-height: 50px;\r\n		--el-gap: 20px;\r\n	}\r\n\r\n	header#main-header {\r\n		height: var(--header-height);\r\n		position: fixed;\r\n		top: 0;\r\n		width: 100%;\r\n		z-index: 55555;\r\n		padding: unset;\r\n		display: flex;\r\n		justify-content: space-around;\r\n	}\r\n\r\n	body > .width-constraint {\r\n		margin-top: calc(var(--header-height) + 35px);\r\n	}\r\n\r\n	header#main-header .width-constraint {\r\n		display: flex;\r\n		align-items: center;\r\n		gap: var(--el-gap);\r\n		padding: unset;\r\n		margin: unset;\r\n		max-width: unset;\r\n	}\r\n\r\n	header#main-header a {\r\n		text-decoration: none;\r\n		text-wrap: nowrap;\r\n	}\r\n\r\n	header#main-header .sign-out-link a {\r\n		text-decoration: underline;\r\n	}\r\n\r\n	header#main-header #site-name {\r\n		display: flex;\r\n		align-items: center;\r\n	}\r\n\r\n	header#main-header #site-name img {\r\n		width: calc(var(--header-height) - 5px);\r\n		height: calc(var(--header-height) - 5px);\r\n	}\r\n\r\n	/* 隐藏Greasyfork文字 */\r\n	header#main-header #site-name-text {\r\n		display: none;\r\n	}\r\n\r\n	header#main-header #site-nav {\r\n		display: flex;\r\n		flex-direction: row-reverse;\r\n		align-items: center;\r\n		flex: 1;\r\n		justify-content: space-between;\r\n		height: 100%;\r\n		gap: var(--el-gap);\r\n	}\r\n\r\n	header#main-header #site-nav nav li {\r\n		padding: 0 0.5em;\r\n		display: flex;\r\n		align-items: center;\r\n		height: var(--header-height);\r\n		min-width: 30px;\r\n		justify-content: center;\r\n	}\r\n\r\n	header#main-header #site-nav nav li:hover {\r\n		background: #5f0101;\r\n	}\r\n\r\n	header#main-header #nav-user-info {\r\n		max-width: 150px;\r\n	}\r\n\r\n	header#main-header #nav-user-info > span {\r\n		/*flex: 1;*/\r\n		flex: 1 0 auto;\r\n	}\r\n\r\n	header#main-header #nav-user-info,\r\n	header#main-header #nav-user-info + nav {\r\n		position: unset;\r\n		width: unset;\r\n		display: flex;\r\n		flex-wrap: nowrap;\r\n		align-items: center;\r\n	}\r\n}\r\n/* mobile端 */\r\n@media screen and (max-width: 600px) {\r\n	header#main-header #site-name-text h1 {\r\n		line-height: normal;\r\n		padding-bottom: 0;\r\n	}\r\n	/* 美化移动端顶部导航栏的更多 */\r\n	#mobile-nav nav {\r\n		font-size: 1rem !important;\r\n	}\r\n	/* 添加鼠标悬浮效果 */\r\n	#mobile-nav nav li:hover {\r\n		background: #840404;\r\n	}\r\n	/* 去除链接下划线 */\r\n	#mobile-nav nav li a {\r\n		text-decoration: none;\r\n	}\r\n}\r\n";
  const beautifyHomeCSS = '.browser-list li::before,\r\n.browser-list-selector::before {\r\n	content: "";\r\n	width: 22px;\r\n	height: 22px;\r\n	display: inline-block;\r\n	vertical-align: -4px;\r\n	margin: 0px 5px;\r\n	background-size: 100% 100% !important;\r\n	background-repeat: no-repeat !important;\r\n}\r\n/* Desktop */\r\n.browser-list-selector[data-for="desktop-browser-list"]::before {\r\n	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQklEQVQ4jWP87if3nwEH4Nz0iLF+FwNO+UY3BkYmXJLEglEDqGAAxYCRYcl7nPHMECPI+H8n7nTA6D6aDgaHARQDAKgRDRsLiHU6AAAAAElFTkSuQmCC");\r\n}\r\n/* Android */\r\n.browser-list-selector[data-for="android-browser-list"]::before {\r\n	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEX///893IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93IQ93ITplTBcAAAAD3RSTlMAkMBA/2DwECCAUKBw0DCZFhB0AAAAj0lEQVR4AWOgF2BUgLGYBMAUsytMIMQAQqsVQGj2JKhEywSOlZu0ZzVwesAM8bniAgS+RwSgAjwuUHAAqlUFJuAEMeyZCxzkgfh8KQgBtwdAgVoXJHAdKCCCLOAIdCdQoS2Edxmo2YCBCeiAaojAdqBzFBhagKwUqJFA7MFwxAUF+DCooAo4MbigAUyBQQIAqJE/SmDXXYoAAAAASUVORK5CYII=");\r\n}\r\n/* iOS */\r\n.browser-list-selector[data-for="ios-browser-list"]::before {\r\n	background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzEyNjg4ODM1MTk5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2ODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjxwYXRoIGQ9Ik04NDkuMTI0IDcwNC44OTZjLTEuMDQgMy4xNTgtMTcuMyA1OS44NzMtNTcuMjUgMTE4LjE5MS0zNC41NzggNTAuMzA2LTcwLjMzMyAxMDEuMDE5LTEyNi44MDMgMTAxLjkxLTU1LjUzMyAwLjk3NS03My4zMDMtMzMuMTM2LTEzNi43MDctMzMuMTM2LTYzLjMyNCAwLTgzLjIzIDMyLjI0NS0xMzUuNzEzIDM0LjExMS01NC4yNTUgMi4yMjEtOTYuMDA0LTU0Ljk1MS0xMzAuNzEyLTEwNS4wMTEtNzAuOTM1LTEwMi41NS0xMjUuNTUzLTI5MC42LTUyLjMwMS00MTYuNjI2IDM2LjA0LTYzLjA1NSAxMDAuODItMTAzLjEzNiAxNzEuMzY0LTEwNC4yMzEgNTMuMTYxLTEuMDA1IDEwMy43NCAzNi4wMTIgMTM2LjAyOSAzNi4wMTIgMzMuMTcxIDAgOTQuMzU3LTQ0Ljc5MSAxNTguOTA2LTM4LjA5IDI3LjAyNiAxLjE1MiAxMDIuNjIyIDExLjI5OSAxNTEuMzI4IDgxLjg5Mi0zLjgzMiAyLjYwNy05MC40NTIgNTMuNzI0LTg5LjQ4NyAxNTcuNzYgMS4zMDIgMTI1LjU5NyAxMTAuMTc0IDE2Ni43OSAxMTEuMzQ2IDE2Ny4yMThNNjMzLjY5NyAyMzAuNzVjMjkuMTA4LTM1LjUwNiA0OC4yMzUtODQuMzE0IDQzLjIwMy0xMzIuNzg1LTQxLjU2IDEuNjMtOTIuMTk3IDI3LjYtMTIyLjI5MiA2Mi44OTctMjYuNjA5IDMwLjc5NC01MC4wNjIgODAuMzYyLTQzLjUyIDEyOC4yNyA0Ni4xNzcgMi44MDUgOTMuNjU3LTI0LjE4MiAxMjIuNjA5LTU4LjM4MiIgcC1pZD0iMTY4NSIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjwvc3ZnPg==");\r\n}\r\n/* Chrome */\r\n#desktop-browser-list li:nth-child(1)::before {\r\n	background: url("data:image/png;base64,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");\r\n}\r\n/* Firefox */\r\n#desktop-browser-list li:nth-child(2)::before,\r\n#android-browser-list li:nth-child(1)::before {\r\n	background: url("data:image/x-icon;base64,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9zEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxDeYQbgzkrmoN4v9jEOD/WCDr/1Av+v9NMv3/SzP+/0k1/v9HNv//Rjf//0U5//9EO///Qz3//0I///9BQP//QEL//z9D//8+Rf//PUb//zxH//88SP//O0r//ztK//86S///Okz//zpN//85Tf//OU3//zlO//85Uf//OVb//zlb//85YP//RVT5/1dE8v9cR/T/XU72/1tU97lVXvkVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuDOV0aw3j+2QQ4f9XIu7/TjH8/0sz/v9JNf7/Rzb//0Y4//9FOv//Qzz//0I9//9BP///QEL//z9D//8+Rf//PUf//zxI//87Sv//O0v//zpM//85Tf//OU///zhQ//84Uf//N1H//zdS//83Uv//NlP//zZW//84W///OGD//zhk//84af//OG7//0Zh+f9XUfT/Wlb2/1pb+P5XYfiBOIj+AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG8N5S9tDOTgZw/h/1gh7v9NMv3/SjT+/0g2//9GN///RTr//0M8//9CPv//QUD//0BC//8+RP//PUb//zxI//87Sv//OUz//zhN//83T///NlH//zZS//81U///NFT//zVU//81Vf//NFb//zRX//8zWP//M1v//zRg//81Zf//Nmr//zdu//83cv//N3f//zh6//9Jafn/WF32/1lj+P9XafnnVG76OQAAAAAAAAAAAAAAAAAAAAAAAAAAdQ7oBG4M5JhqDeL/Wx3r/0wy/f9INf//Rzf//0U5//9EO///Qj3//0FA//8/Qv//PkT//z1G//88Sf//O0v//zhN//86T/z/SU7o/11Ly/9tSLX/dEer/3FIrv9nSrz/VU3W/0BS8v80Vf//M1b//zJZ//8xX///MmX//zNq//80bv//NHP//zZ3//82e///N4D//ziE//88hP7/UG/5/1dr+P9Xcfr/VXX6pEp4/AYAAAAAAAAAAAAAAAAAAAAAbw3lNG0M4+hhF+j/TDH7/0c2//9GOP//RDr//0M9//9BP///QEL//z5E//89R///PEn//zpL//85Tf//OFH+/1BP3P+BRJr/oT1s/606XP+wOVj/sTlX/7A5V/+wOFv/rTdm/5w6gf9zRLf/QlPv/zRZ//82Xv//NGf//zJx//8zd///NHz//zSA//80hP//NYj//zeM//84kP//QYn9/1N0+P9VePr/U3377lB/+z4AAAAAAAAAAAAAAAAAAAAAbwzkiWgQ5f9QLPf/Rjf//0U5//9DPP//Qj7//0BB//8/Q///PUb//zxJ//86S///OU7//zdQ//84Wfj/alK0/6M+af+xOVf/sDlY/685Wf+vOVn/sDpZ/7A5Wf+xN13/szRh/7YxZP+2L2r/mzeN/1NW3P8zZ///N2j//zdt//81ev//M4T//zKI//8zjP//NJD//zaU//83mP//OZr//0uG+/9Uf/r/U4X7/1CI+5Ywjv8BAAAAAAAAAABxDeYYbQzk0lof7/9GN///RDr//0M9//9BP///P0L//z5F//88SP//O0v//zlN//84UP//NlL//zVi9/90WKL/rTtb/7A5WP+vOVn/sTpZ/7M8Wf+1Pln/tj9Z/7c+W/+4O1//uDdk/7cyaP+3Lmz/uSpv/6cxhv9UYNz/MXf//zZ2//83dv//Nn///zOO//8ylf//M5j//zWc//82n///N6P//0Cc/v9RiPv/Uoz7/1CR/NtLlP0gAAAAAAAAAABwDORKZxLn90sx+v9DO///Qj3//0BB//8/Q///PUb//ztJ//86TP//OE///zdS//82VP//L2b9/2hkrv+tO1v/sDlY/7E6Wf+0Pln/uEFZ/7tFWf++R1n/v0ha/8FGXv/CQmP/wT5n/8A4bP++M2//uyx0/7smdf+fN5T/QXju/zGF//81g///OIL//zmH//82lf//MqD//zSj//81pv//Nqr//zmr//9Mlfz/UZL8/1CY/ftNm/1XAAAAAAAAAABvDOSFWiHw/0M7//9CPv//QEL//z5E//88SP//O0v//zlO//84Uf//NlP//zRW//8uYf//RXjV/6VBZf+wOVj/sjxZ/7hBWf+9Rln/wUpZ/8RNWv/HTlv/yU9d/8tMYv/MSWf/y0Rr/8o/cP/HOHT/xDF4/78qe/+8JHz/d1a6/y6R//8xj///No7//zmN//9Ghf3/PJr+/zOq//81rf//NrD//za0//9Fpf7/UJn9/1Cf/f9Nov2SAAAAAHkI4whqEee1TDH5/0FA//8/Qv//PkX//zxJ//86TP//OU///zdS//81Vf//M1j//zFb//8of/v/fl2T/7M2WP+zPFr/uUJZ/79IWf/FTVr/yVBc/81SXv/QVGD/01Vi/9VTZv/VTmz/1Upw/9NEdf/QPnj/zDZ9/8cvgP/BJ3//pjWR/zyO7/8tnP//Mpr//zaZ//9Djv3/ToX8/zum/v81tP//Nbb//za6//8/s///T6H9/0+m/v9Oqf7BRqb+DnYH4hxgHO3WQz3+/z9D//89Rv//O0n//zpN//84UP//NlP//zRW//8yWf//MVz//ypq//83jOX/pT9w/7Y2X/+7P17/wkdd/8hOXf/OUl//0lVi/9ZWZP/ZWGb/3Flo/95XbP/eU3H/3k52/9xIev/ZQn7/1TqD/84zhP/GLIP/uyeE/1h71f8oqf//L6X//zOk//88nP//Tof9/0uT/f85s///Nr3//zbA//87v///Tar+/0+r/v9Nr/7dSK7+I3IK5DJUKvToP0P//z1G//87Sv//OU3//zhR//82VP//NFf//zJa//8wXf//LmD//yN///9Ogs3/tDRo/7w6Zf/DQmT/y0pk/9FSY//XV2T/21ln/99aav/iW2z/5Vxv/+Zacv/mVnj/5lF8/+RLgf/hRYX/3D6H/9Q3h//LMIf/xCaF/3JpwP8ms///La///zGu//85p///SpD//06R/v9HpP7/OMH//zjF//87xv//SbT+/02x/v9Ltv/rSLb/N2kU6URKNvnyPEf//ztK//85Tv//N1H//zVV//8zWP//MVv//y9f//8tYv//K2X//x+Q//9HjNb/tThx/8Q8av/LRWr/001r/9pUa//fWWv/41tt/+dccP/qXHP/7F12/+5bev/uV3//7lOD/+tNiP/nSIr/4UGL/9k6i//QMov/ySeI/4Netv8nuv//Krn//y+3//83sP//SJn//0uZ//9Nnf7/QLn+/zjL//86zP//Rr3//0y4//9Lvf/zSL3/R1wj8VBCQPz2Okv//zlO//83Uv//NVX//zNY//8xXP//L2D//y1j//8rZv//KGv//yCa//8krfr/f2ur/8s+cf/URnD/2k9x/+FVcv/nWnP/61x1/+5deP/xXHv/81x+//Vbgv/1V4f/9FOL//FOjv/rSY//5EOQ/908kf/TNJD/zSmN/4lht/8qwP//KsH//y3A//82uP//R6H//0mh//9Lo/7/Sa/+/zrM//850v//RMb//0u///9KxP/2SMT/UE40908+R/72OU7//zdS//81Vf//Mln//zBc//8uYP//LGT//ypm//8oav//JXD//yGe//8gtP//Lq71/4N3tf/PT4L/5E14/+tTef/vWHv/81t9//VbgP/2W4T/+FqH//pYi//7Vo7/+FKR//NOk//uSZT/50OV/989lP/WNZT/zyuQ/4Jxw/8sx///Lsb//y7G//82vP//Rqj//0ep//9Kq///TK7+/0DI//861///RMz//0rG//9Jy//2SMn/UUZD+kI7Tf7xN1H//zVV//8yWf//MF3//y5g//8sZP//KWj//yV3//8gi///IJr//yCr//8jtf//JLj//yq6/f9VouH/lYG4/8Rsnv/eY5L/6mGP//Ncjv/9Voz//FeQ//xWkv/7VJX/+FGX//ROmP/vSZn/6EOa/+A9mv/YNpj/zi+W/2yN1v8vzf//Msr//zLL//87vP//Ra///0ax//9Js///S7T//0bC//882f//RNL//0nN//9J0f/0SNH/Sj9O/S44Uf/mNVX//zNZ//8wXf//LmH//yxk//8pav//IIX//xqi//8brP//HrD//yGz//8ktv//J7r//yi9//8owv//LMT+/zvB+P9OvO//W7rq/3Gv3//Id7D//FSV//pTmP/5UZr/90+d//RMnv/vR5//6UOf/+E9nv/aNZz/wD6l/0607v8z0P//Nc///zbN//9Auv//RLb//0W4//9Iuv//Srv//0nC//9A2f//Rdb//0nT//9I1f/tR9X/OjpY/hg1Vv/RM1j//zBc//8uYP//LGT//ylp//8fhf//GKX//xqq//8drf//ILH//yO0//8luP//KLz//yrA//8sw///Lsb//zDJ//8wzP//MtD//zXW//9OzPX/vX27//dPnf/2TaD/9Uyj//NJpP/uRqT/6EGj/+E8ov/aMp//lXDF/zrR/v840///ONP//zvJ//9Cu///Q7z//0W+//9HwP//SsL//0rF//9E2f//Rtn//0fX//9H2P/gRtf/Jj9b/Ac0Wf+yMVz//y5g//8sZP//Kmj//yVy//8Zmv//GKj//xus//8er///IbP//yS2//8nuv//Kb3//ye7//8isv//Hav//xqp//8bq///Hq///yG2//8lwf//Yaro/+dUqv/0Sab/8kip//FGqv/sQ6n/5z+o/+I3pv/DSbH/Vrnu/znZ//861///OtL//z7D//9Awf//QsP//0XE//9Hxv//Scj//0nK//9F2f//Rtv//0bZ//9G2f/HRdb/EQAAAAAzW/6HL1///yxj//8qaP//J2z//yRx//8gf///HZL//xyh//8eqf//Ia3//yKv//8hrf//HKT//xWb//8Smv//E5///xak//8Yqf//Gq7//zSm9v97hNn/y1y5/+9Iq//wRaz/70Su/+5Dr//qQK7/5zqr/9JDsf9yo+L/O97//zzc//881v//O8n//z7F//9Ax///Qsj//0XK//9HzP//Sc7//0nQ//9H2///Rdz//0Xc//9F2/+fQsf+AgAAAAAzX/5PLWL/+Spn//8na///JW///yN0//8hd///Hnz//xyC//8aif//GY3//xaQ//8Ukf//EpX//xKb//8Uof//F6X//xir//8nqfv/cIfe/8hau//vRqz/8UOt/+5DsP/tQbL/7EGz/+tAs//nPbL/x1W9/3Ks5v9A4P7/Tc32/2Or5f9CxPr/Osr//z3L//9AzP//Qs7//0TP//9H0f//SdP//0nT//9H2///Rd3//0Te//9F3P9oAAAAAAAAAAA0Yf4bLGb/1ihq//8lb///I3P//yF4//8fe///HID//xqE//8XiP//FYz//xOQ//8Slv//E5z//xWh//8Ypv//Gaz//zye8v+qZ8f/60av//BBr//tQbL/7EC0/+s/tv/qPrf/6j64/+g7t//YRbr/mYPT/oKY2/+XeMr/rVG0/2+Q2/86zP//PM7//z/Q//9B0f//QtP//0XU//9H1v//SNb//0jV//5G2v/+Rd7//0Tf/+lD3v8vAAAAAAAAAAAAAAAAKmr/jiZu//8kcv//IXf//x97//8cf///GoT//xeI//8VjP//E5H//xKW//8TnP//FaL//xin//8arP//Qprw/7xXvf/tPq7/7ECz/+s/tv/qPrj/6T25/+g8uv/oO7v/5zu6/+U6t//iObP/3Tev/9swp//QMKT/gn7P/zrN/f850v//PNP//z/U//9B1f//Q9f//0bY//9G2f//R9f//0jW/+hG3P/uRt///0Xg/7FC2/8IAAAAAAAAAAAAAAAAKm7/NiVx/+kidv//IHr//x1+//8ag///GIf//xWM//8TkP//Epb//xOc//8Vov//GKf//xus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//85TP//QU3z/15Jyv95RaX/hEOV/4JEl/9zRq7/VkzX/zlV+f8yWv//MmT//zNt//80dP//NXr//zaB//84h///R3v7/1Zv+P9VdvrHUHz7FQAAAAAAAAAAbwvjU2MW6fhLMvv/RTn//0M9//9AQP//PkT//zxI//86TP//N1L//1RS1f+RQYL/rDpc/7E5Vv+yOVb/sjhX/7Q1Xv+uM27/iT2g/0dZ6v80aP//NXH//zN///8zh///NI3//zaT//87lf7/ToH7/1OB+/pQh/tbAAAAAH0G4wRrD+WiUin1/0Q7//9CPv//P0P//z1H//87S///OU///zRW//9VXcz/oUFq/7E5Vv+yPFn/tj9Z/7hBWf+6P13/ujpk/7ozav+6K27/mDmX/0Nu7v80ev//N3///zSO//8zmf//NZ7//zek//9Dmf3/Uoz7/1CT/KtGnP4GdAfiIWAb7NlGOf3/QUD//z5E//88Sf//OU3//zdS//8zV///Pmvl/5lIcv+zOlf/t0BZ/75HWf/DS1r/xk1c/8lKYv/JRGn/xzxw/8Iydv++J3n/flC0/zGM/v81jP//PIr+/zyW/v80qf//Nq7//zut//9Omv3/T57930uh/SdtDuVKUiv180BB//8+Rv//O0r//zhP//82VP//M1f//ytr//9sZKv/tDha/7pCW//DS1r/ylBd/9BUYP/VVWP/11Np/9dMcP/VQ3f/zzl9/8gtgP+tM47/QYzr/y+f//84mf//Sor9/z2l/v81uP//OLv//0qp/v9Pp/72TKv+UmIb7G9GOvv9PUf//zpL//84UP//NVX//zJa//8vXv//K4D4/5JPiP++OWH/x0hi/9BSYv/YV2X/3llp/+JbbP/kWHL/5FF5/+JJgP/bP4X/0TSG/8Erh/9ZgNb/KbD//zOq//9GlP7/S5f9/zu5//84xf//Rbf+/02x/v5Ltf91VCz0hz9E/v86TP//N1H//zRW//8xW///LmD//ypn//8llfv/iF6c/8o8af/TS2z/3VZt/+Rbb//pXHP/7Vx3//Baff/wVIT/7EyK/+NDjP/YOI3/yyuL/2l7zP8nvv//MLj//0Ki//9Mm/7/RbD+/znM//9CxP//S7v//0q//4lGPfqOO0v//zdS//80V///MFz//y1h//8qZv//JnD//x+j//88oej/o2Kb/9xOef/rVHf/81l5//Zafv/3WoT/+ViK//dUj//xTZL/6EWT/9w7lP/PL5H/aofS/yrH//8ww///Qqz//0mn//9Krv7/Pcz//0DO//9Kxv//Scn/jz5L/X83Uf//NFf//zBd//8tYv//KG3//yGI//8fnf//Ia///yO5//81tPb/bJrT/6CEt/+7fav/2G6g//tXkf/8VJT/+VKY//NMmv/qRJv/3zua/8s3nP9YpOX/MM7//zXH//9Ds///R7P//0q2//9Eyf//QtX//0nP//9I0v+GOFT+XzRX//owXP//LWL//yhu//8clP//Gqv//x+x//8jtf//J7v//ynB//8qxv//L8j//zbL/v9MxvT/sYW///ZQnf/2TaD/8kmj/+pDov/hN5//rli2/0DI+f820///PMb//0O6//9Gvf//ScD//0fL//9F2v//SNb//UfX/241Wf46MVz/7C1i//8qZ///Inr//xqf//8cq///ILH//yS2//8ltv//IK///xup//8aqv//G7D//ye2/f9zmN//6VCr//JHqf/vRav/6T2p/9RBrf9qp+T/ONv//zvR//8+w///QsT//0XG//9Jyf//SND//0Xc//9G2v/zRtn/STZb/hYvYf/NKmf//yZt//8jdP//H3///xyN//8blv//GZn//xWZ//8Tm///FKL//xqp/v9Nluz/qGrI/+RLsf/vQ6//7UKy/+s/sv/TTbj/fp7f/03N9v9Qv/L/O8r//z7K//9CzP//Rc7//0jR//9I1f//Rt3//0Xd/9lF2/8hAAAAACxn/40nbP//I3P//yB5//8cf///GIX//xWL//8Sk///E5z//xak//8gqP3/eX7a/9xMtv/wQLH/7D+1/+o+t//pPbn/5jy3/75cwv+hcsj/n2S//1Wu7P860P//P9H//0LT//9G1v//SNb//0fX//lF3v//RN//o0HZ/wQAAAAAKW3/OyRx/+0heP//HX///xmF//8VjP//EpT//xOd//8Wpf//Gqz/9HF82+LfP7H+6jy0/+k9uf/oPLv/5zu7/+c6uf/lOLT/4TOs/75JtP9ipOT/ONT//zzW//9A2P//RNr//0ba//9H2P/4R9r/0Ebg//RG4P9RAAAAAAAAAAAubf4FI3f/mx59//8ahP//Fov//xOS//sYl//6HZz//yae//8unP+1uUu+LN83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");\r\n}\r\n/* Safari */\r\n#desktop-browser-list li:nth-child(3)::before,\r\n#ios-browser-list li:nth-child(1)::before {\r\n	background: url("data:image/png;base64,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");\r\n}\r\n/* Edge */\r\n#desktop-browser-list li:nth-child(4)::before {\r\n	background: url("data:image/png;base64,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");\r\n}\r\n/* Opera */\r\n#desktop-browser-list li:nth-child(5)::before {\r\n	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALzSURBVHgBzVdNUhNREO5+k7BwoeOOAiyGnWVBam7AcAL1BIQTBE9AOIHhBJIToCdIcgISQMqdY2koqlwYS90Q3rQ9P8lkmPfmz6LkWyQv0/26v9fd6ekH8J+BUBK0/NwCqDsgyEoKcAg0HeL1JxdKoBABMi0THj1u8bIJeMdxGi6bbYO8GRQhk0uAVhoH7HSfl6ZGZQLgvQc0OAL0M9zEJBEtjspnvDo7hCoEglAbtRNWsdUKfFJBe/jtoh/qb3JaxDavbLZqRtYnTMLF8dmbUgRC5/UeLy31NjrC8cX+/NfqCyYp3rI5R63PZOV0R5USLO1cyD38enmsEtHqVpO/mIgyXUoSIqWW5RzpUOc8EI/PWSZ3IKiLFPhgSyd3HyYIBAWnDTscc77bkAMcXw75U1N4ZNPKZjuhPxflhV4aG3g9dKEgOB2+LUchmsAftjUZBlGKI2DUHcg6fQnnAThdGgn3lNt5AS+m4AB0uJFHUBLR33OiFsLLBIGwvWpPP8Hvfl4rwIMPagHakc8oAvW6rbdC1ZwH1j39XkM4MQFJGQRgBJUJCFcr89CMCWSBNHksginp92JRAveMfAKI63CPEJETV6tB8BSqwsiqLTyNCUijr9eDbagKFPq9njGaE4i6nKtRNWmN3/VVQKCZJWg466xi4WEX9IZeQVnfz7b8PZZSiKIzW8YElmr+Q83fBndnnaswPFS3dn+SkmKQIoAuv52IdD3f5JfVOygIWmu0gtFMBUHdxRdbeiJabZxqNxO284bMcDwzeqCaivj0eHW+keCTUpLidRAmFZDa0dCicd7YzXLOlb+TMqk0tGxbPPv1WGqBUiEZiUDfkH6KHLV+6Fw1U2SM5TkkogsIj9zdWP+2mewbfoPju4KsdXQDTf7FZI1nOA93M4hw8UKfNUes50INnwB5G0ELJ2+A44+dLPvFrmZhiB1etbQXlVi7z1YH8JtPHc19/0wgRaYuba6DdfC88D0hxA8u0C/wy+gXcfqg8BeNgChJhUErggAAAABJRU5ErkJggg==");\r\n}\r\n/* Maxthon */\r\n#desktop-browser-list li:nth-child(6)::before,\r\n#android-browser-list li:nth-child(2)::before {\r\n	background: url("data:image/x-icon;base64,AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAqBAAAJ4EAABAQAAAAQAgAChCAABGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALx5LVC9gi3pvoou/7+TL/+/my//wKMw/8CsMP/BtDH/wr0y/8LFMv/DzjP/w9Yz/8TeNP/F4zX/xOQ16cbmM1C8dSzpvX0t/76FLv++ji7/v5Yv/7+fL//ApzD/wa8x/8G4Mf/CwDL/wsky/8PRM//E2jT/xOE0/8XkNf/E5DXpvG8s/714Lf+9gC3/voku/76RLv+/mi//wKIw/8CrMP/BszH/wbsx/8LEMv/DzDP/w9Uz/8TdNP/E4zT/xeQ1/7xrLP+8cyz/vXst/76ELv++jC7/v5Uv/7+dL//ApjD/wa4x/8G3Mf/CvzL/wscy/8PQM//D2DP/xOA0/8XkNf+7Ziv/vG4s/799Nv/gxJ3/4Mid/8+tZP/KqlT/4dSe/+HYnv/JvEz/1M9v/+Ljn//j56D/xtY+/8TcNP/E4zT/u2Er/7xpLP/Cfj/////////////dxJP/1LZ0////////////0MJk/+Tepv///////////8nUR//D1zP/xN80/7tcK/+7ZCv/wnk+////////////3cGT/9OzdP///////////8++ZP/k3Kb////////////Jz0f/w9Iz/8TbNP+6Vyr/u18r/8J1Pv///////////92/k//Mo13/6tu8/+revP/Ks1P/49ql////////////yMtG/8PNM//D1jP/ulIq/7tbK//BcD7////////////dvZL/voUu/76NLv+/li//v54v/9jMmv/4+Pj//////8jHRv/CyDL/w9Ez/7pNKv+6Vir/wWw+////////////+vbw//bu5P/27+T/9vDj//bx4//x7+n/7u7u//n5+f/Iwkb/wsMy/8PMM/+6SSr/ulEq/8FoPv/////////////////////////////////////////////////k3an/wbcy/8K/Mv/CxzL/ukgq/7pMKv+9XDT/3rCZ/960mf/euJn/372a/9/Bmv/fxZr/4Mma/+DNm//YxoL/wKkw/8GxMf/BujH/wsIy/7pIKv+6SCr/ulAq/7pYKv+7YCv/vGks/7xxLP+9ei3/vYIt/76LLv+/ky//v5sv/8CkMP/ArDD/wbUx/8K9Mv+6SCr/ukgq/7pLKv+6Uyr/u1wr/7tkK/+8bCz/vHUs/719Lf++hi7/vo4u/7+XL/+/ny//wKcw/8GwMf/BuDH/uUco6bpIKv+6SCr/uk4q/7pXKv+7Xyv/vGgs/7xwLP+9eC3/vYEt/76JLv+/ki//v5ov/8CjMP/AqzD/wbMw6blGJlC5Ryjpukgq/7pKKv+6Uir/u1or/7tjK/+8ayz/vHQs/718Lf++hC7/vo0u/7+VL/+/ni//wKYv6b+vMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBfCwpvYEssr6GLfS+ii7/vo4u/7+SL/+/li//v5ov/8CfMP/AozD/wKcw/8GrMf/BsDH/wbQx/8G4Mf/CvDL/wsAy/8LFMv/DyTP/w80z/8PRM//E1TP/xNo0/8TeNP/E4jT/xeQ1/8XkNf/E5DT0xOQ0ssfmMikAAAAAu3YsKb17LfC9fy3/voMu/76HLv++iy7/v5Av/7+UL/+/mC//v5wv/8CgMP/ApTD/wKkw/8GtMf/BsTH/wbYx/8K6Mv/CvjL/wsIy/8LGMv/DyzP/w88z/8PTM//E1zT/xNs0/8TgNP/F4zX/xeQ1/8XkNf/F5DX/xeM08MLhMSq9dCuyvXgt/718Lf++gC7/voUu/76JLv++jS7/v5Ev/7+WL/+/mi//wJ4w/8CiMP/ApjD/wKsw/8GvMf/BszH/wbcx/8K8Mv/CwDL/wsQy/8PIM//DzDP/w9Ez/8PVM//E2TT/xN00/8ThNP/F5DX/xeQ1/8XkNf/F5DX/xOQ0sr1yLPS9di3/vXot/71+Lf++gi7/voYu/76LLv+/jy//v5Mv/7+XL/+/nC//wKAw/8CkMP/AqDD/wawx/8GxMf/BtTH/wbkx/8K9Mv/CwjL/wsYy/8PKM//DzjP/w9Iz/8TXNP/E2zT/xN80/8TjNP/F5DX/xeQ1/8XkNf/E5DT0vG8s/71zLf+9dy3/vXwt/72ALf++hC7/vogu/76MLv+/kS//v5Uv/7+ZL//AnTD/wKIw/8CmMP/AqjD/wa4x/8GyMf/BtzH/wrsy/8K/Mv/CwzL/w8gz/8PMM//D0DP/w9Qz/8TYNP/E3TT/xOE0/8XjNf/F5DX/xeQ1/8XkNf+8bCz/vHEs/711Lf+9eS3/vX0t/76CLv++hi7/voou/76OLv+/ki//v5cv/7+bL//AnzD/wKMw/8CoMP/BrDH/wbAx/8G0Mf/BuDH/wr0y/8LBMv/CxTL/w8kz/8POM//D0jP/xNY0/8TaNP/E3jT/xOI0/8XkNf/F5DX/xeQ1/7xqLP+8biz/vXIt/713Lf+9ey3/vX8t/76DLv++iC7/vowu/7+QL/+/lC//v5gv/7+dL//AoTD/wKUw/8CpMP/BrjH/wbIx/8G2Mf/CujL/wr4y/8LDMv/CxzL/w8sz/8PPM//D1DP/xNg0/8TcNP/E4DT/xeM1/8XkNf/F5DX/vGgs/7xsLP+8cCz/vXQt/714Lf+9fS3/voEu/76FLv++iS7/vo4u/7+SL/+/li//v5ov/8CeMP/AozD/wKcw/8GrMf/BrzH/wbQx/8G4Mf/CvDL/wsAy/8LEMv/DyTP/w80z/8PRM//D1TP/xNo0/8TeNP/E4jT/xeQ1/8XkNf+8ZSz/vGks/7xuLP+8ciz/vXYt/718L//Chzz/wow8/8KQPP/Ckzz/w5c9/7+UL/+/mC//wqE5/8SnPv/Eqz7/xK8+/8WzP//DtDj/wbUx/8K6M//Gw0D/xsZA/8bKQf/HzkH/x9JB/8TUNv/E1zT/xNs0/8TgNP/F4zX/xeQ1/7tjK/+8Zyz/vGss/7xvLP+9dC3/yJBS///////////////////////9+/j/v5Ev/7+VL//p3Lr//////////////////////+DXmP/BszH/ycFN////////////////////////////z9pc/8PVM//E2TT/xN00/8ThNP/F5DX/u2Ar/7xkLP+8aSz/vG0s/7xxLP/IjVL///////////////////////37+P+/jy//v5Mv/+ncuv//////////////////////4NaY/8GwMf/Jvk3////////////////////////////P2Fz/w9Iz/8TWNP/E2zT/xN80/8TjNP+7Xiv/u2Ir/7xmLP+8aiz/vG8s/8iMUv///////////////////////fv4/76MLv+/kC//6du6///////////////////////g1Zj/wa4x/8m8Tf///////////////////////////8/WXP/D0DP/w9Qz/8TYNP/E3DT/xOE0/7tbK/+7YCv/u2Qr/7xoLP+8bCz/yIlS///////////////////////9+/j/voou/76OLv/p2rr//////////////////////9/UmP/BrDH/ybpN////////////////////////////z9Rc/8PNM//D0jP/xNY0/8TaNP/E3jT/u1kr/7tdK/+7YSv/vGYs/7xqLP/IiFH///////////////////////37+P++hy7/vowu/+nZuv//////////////////////39KY/8CpMP/JuE3////////////////////////////P0lz/w8sz/8PPM//D0zP/xNg0/8TcNP+7Viv/u1sr/7tfK/+7Yyv/vGcs/8iFUf///////////////////////fv4/76FLv++iS7/6di5///////////////////////f0Zj/wKcw/8m2TP///////////////////////////87QW//DyDP/w80z/8PRM//D1TP/xNk0/7pUKv+7WCv/u1wr/7thK/+8ZSz/yIRR///////////////////////9+/j/voIu/76HLv/NpmD/1rd5/9a5ef/WvHn/1r95/8uxVf/ApDD/yLRM////////////////////////////zs9b/8LGMv/DyjP/w84z/8PTM//E1zT/ulIq/7pWKv+7Wiv/u14r/7tiK//IgVH///////////////////////37+P+9gC3/voQu/76ILv++jS7/v5Ev/7+VL/+/mS//wJ4w/8CiMP/Iskz////////////////////////////OzFv/wsQy/8PIM//DzDP/w9Az/8PUM/+6Tyr/ulMq/7tYK/+7XCv/u2Ar/8iAUf///////////////////////fv4/71+Lf++gi7/voYu/76KLv++ji7/v5Mv/7+XL/+/my//wJ8w/8GpRv/Z2dn/6urq//v7+////////////87LW//CwTL/wsUy/8PKM//DzjP/w9Iz/7pNKv+6USr/ulUq/7tZK/+7Xiv/x35R///////////////////////+/f3/7t3I/+7eyf/u38n/7uDJ/+7hyf/u4sn/7ePI/+3kyP/t5cn/6+TM/93d3f/d3d3/3t7e/+zs7P/7+/v/zslb/8K/Mv/CwzL/wscy/8PLM//D0DP/ukoq/7pOKv+6Uyr/u1cr/7tbK//He1H////////////////////////////////////////////////////////////////////////////////////////////////////////////Ox1v/wrwy/8LAMv/CxTL/w8kz/8PNM/+6SCr/ukwq/7pQKv+6VCr/u1kr/8d6Uf//////////////////////////////////////////////////////////////////////////////////////////////////////6+fB/8O4N//CujL/wr4y/8LCMv/CxjL/w8sz/7pIKv+6Sir/uk4q/7pSKv+7Viv/x3dR/////////////////////////////////////////////////////////////////////////////////////////////////+fgsv/CsDT/wbMx/8G3Mf/CvDL/wsAy/8LEMv/DyDP/ukgq/7pIKv+6Syr/ulAq/7pUKv/HdlH////////////////////////////////////////////////////////////////////////////////////////////i1qL/wKkx/8GsMf/BsTH/wbUx/8G5Mf/CvTL/wsIy/8LGMv+6SCr/ukgq/7pJKv+6TSr/ulEq/7tXLP+9YDP/vWQz/75oM/++bDT/vnA0/751NP+/eTX/v301/7+BNf/AhTX/wIk2/8CNNv/BkTb/wZU3/8GZN//BnTf/wqE3/8CiMP/ApjD/wKow/8GuMf/BsjH/wbcx/8K7Mv/CvzL/wsMy/7pIKv+6SCr/ukgq/7pLKv+6Tyr/ulMq/7tXK/+7XCv/u2Ar/7xkLP+8aCz/vGws/7xxLP+9dS3/vXkt/719Lf++gi7/voYu/76KLv++ji7/v5Iv/7+XL/+/my//wJ8w/8CjMP/AqDD/wawx/8GwMf/BtDH/wbgx/8K9Mv/CwTL/ukgq/7pIKv+6SCr/ukgq/7pNKv+6USr/ulUq/7tZK/+7XSv/u2Ir/7xmLP+8aiz/vG4s/71yLf+9dy3/vXst/71/Lf++gy7/vogu/76M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Lv+/ji//v5Av/7+TL/+/lS//v5cv/7+ZL/+/my//wJ0w/8CfMP/AoTD/wKMw/8CmMP/AqDD/waox/8GsMf/BrjH/wbAx/8GyMf/BtDH/wbYx/8K5Mv/CuzL/wr0y/8K/Mv/CwTL/wsMy/8LFMv/DxzP/w8kz/8PMM//DzjP/w9Az/8PSM//D1DP/xNY0/8TYNP/E2jT/xNw0/8TeNP/E4TT/xeM1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNJ4AAAAAvnMoM711LP69eC3/vXot/718Lf+9fi3/voAu/76DLv++hS7/vocu/76JLv++iy7/vo0u/7+PL/+/kS//v5Mv/7+WL/+/mC//v5ov/8CcMP/AnjD/wKAw/8CiMP/ApDD/wKYw/8CpMP/BqzH/wa0x/8GvMf/BsTH/wbMx/8G1Mf/BtzH/wrky/8K8Mv/CvjL/wsAy/8LCMv/CxDL/wsYy/8PIM//DyjP/w8wz/8PPM//D0TP/w9Mz/8TVNP/E1zT/xNk0/8TbNP/E3TT/xN80/8ThNP/F4zX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DT+w+EyM7xzK5m9dS3/vXct/715Lf+9ey3/vX0t/75/Lv++gS7/voMu/76GLv++iC7/voou/76MLv+/ji//v5Av/7+SL/+/lC//v5Yv/7+ZL/+/my//wJ0w/8CfMP/AoTD/wKMw/8ClMP/ApzD/wKkw/8GsMf/BrjH/wbAx/8GyMf/BtDH/wbYx/8K4Mv/CujL/wrwy/8K/Mv/CwTL/wsMy/8LFMv/DxzP/w8kz/8PLM//DzTP/w88z/8PRM//D1DP/xNY0/8TYNP/E2jT/xNw0/8TeNP/E4DT/xOI0/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XjNJm9cSzavXMt/712Lf+9eC3/vXot/718Lf+9fi3/voAu/76CLv++hC7/voYu/76JLv++iy7/vo0u/7+PL/+/kS//v5Mv/7+VL/+/ly//v5kv/7+cL//AnjD/wKAw/8CiMP/ApDD/wKYw/8CoMP/BqjH/wawx/8GvMf/BsTH/wbMx/8G1Mf/BtzH/wrky/8K7Mv/CvTL/wr8y/8LCMv/CxDL/wsYy/8PIM//DyjP/w8wz/8POM//D0DP/w9Iz/8TUNP/E1zT/xNk0/8TbNP/E3TT/xN80/8ThNP/F4zX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DXavHEs+b1yLf+9dC3/vXYt/715Lf+9ey3/vX0t/71/Lf++gS7/voMu/76FLv++hy7/voku/76MLv+/ji//v5Av/7+SL/+/lC//v5Yv/7+YL/+/mi//wJww/8CfMP/AoTD/wKMw/8ClMP/ApzD/wKkw/8GrMf/BrTH/wa8x/8GyMf/BtDH/wbYx/8G4Mf/CujL/wrwy/8K+Mv/CwDL/wsIy/8LFMv/DxzP/w8kz/8PLM//DzTP/w88z/8PRM//D0zP/xNU0/8TXNP/E2jT/xNw0/8TeNP/E4DT/xOI0/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ0+bxvLP+8cSz/vXMt/711Lf+9dy3/vXkt/718Lf+9fi3/voAu/76CLv++hC7/voYu/76ILv++ii7/vowu/7+PL/+/kS//v5Mv/7+VL/+/ly//v5kv/7+bL//AnTD/wJ8w/8CiMP/ApDD/wKYw/8CoMP/BqjH/wawx/8GuMf/BsDH/wbIx/8G1Mf/BtzH/wrky/8K7Mv/CvTL/wr8y/8LBMv/CwzL/wsUy/8PIM//DyjP/w8wz/8POM//D0DP/w9Iz/8PUM//E1jT/xNg0/8TaNP/E3TT/xN80/8ThNP/F4zX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf+8biz/vHAs/71yLf+9dC3/vXYt/714Lf+9ei3/vXwt/71/Lf++gS7/voMu/76FLv++hy7/voku/76LLv++jS7/v48v/7+SL/+/lC//v5Yv/7+YL/+/mi//wJww/8CeMP/AoDD/wKIw/8ClMP/ApzD/wKkw/8GrMf/BrTH/wa8x/8GxMf/BszH/wbUx/8G4Mf/CujL/wrwy/8K+Mv/CwDL/wsIy/8LEMv/DxjP/w8gz/8PLM//DzTP/w88z/8PRM//D0zP/xNU0/8TXNP/E2TT/xNs0/8TdNP/E4DT/xOI0/8XjNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/vGws/7xvLP+8cSz/vXMt/711Lf+9dy3/vXkt/717Lf+9fS3/vn8u/76CLv++hC7/voYu/76ILv++ii7/vowu/7+OL/+/kC//v5Iv/7+VL/+/ly//v5kv/7+bL//AnTD/wJ8w/8ChMP/AozD/wKUw/8CoMP/AqjD/wawx/8GuMf/BsDH/wbIx/8G0Mf/BtjH/wrgy/8K7Mv/CvTL/wr8y/8LBMv/CwzL/wsUy/8PHM//DyTP/w8sz/8POM//D0DP/w9Iz/8PUM//E1jT/xNg0/8TaNP/E3DT/xN40/8TgNP/F4zX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/7xrLP+8bSz/vG8s/71yLf+9dC3/vXYt/714Lf+9ei3/vXwt/71+Lf++gC7/voIu/76FLv++hy7/voku/76LLv++jS7/v48v/7+RL/+/ky//v5Uv/7+YL/+/mi//wJww/8CeMP/AoDD/wKIw/8CkMP/ApjD/wKgw/8GrMf/BrTH/wa8x/8GxMf/BszH/wbUx/8G3Mf/CuTL/wrsy/8K+Mv/CwDL/wsIy/8LEMv/CxjL/w8gz/8PKM//DzDP/w84z/8PRM//D0zP/xNU0/8TXNP/E2TT/xNs0/8TdNP/E3zT/xOE0/8XjNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/8XkNf+8aiz/vGws/7xuLP+8cCz/vXIt/711Lf+9dy3/vXkt/717Lf+9fS3/vX8t/76BLv++gy7/voUu/76ILv++ii7/vowu/7+OL/+/kC//v5Iv/7+UL/+/li//v5gv/7+bL//AnTD/wJ8w/8ChMP/AozD/wKUw/8CnMP/AqTD/wasx/8GuMf/BsDH/wbIx/8G0Mf/BtjH/wrgy/8K6Mv/CvDL/wr4y/8LBMv/CwzL/wsUy/8PHM//DyTP/w8sz/8PNM//DzzP/w9Ez/8PUM//E1jT/xNg0/8TaNP/E3DT/xN40/8TgNP/E4jT/xeQ1/8XkNf/F5DX/xeQ1/8XkNf/F5DX/vGks/7xrLP+8bSz/vG8s/71xLf+9cy3/vXUt/714Lf+9ei3/vXwt/71+Lf++gC7/voIu/76ELv++hi7/vogu/76LLv++jS7/v48v/7+RL/+/ky//v5Uv/7+XL/+/mS//v5sv/8CeMP/AoDD/wKIw/8CkMP/ApjD/wKgw/8GqMf/BrDH/wa4x/8GxMf/BszH/wbUx/8G3Mf/CuTL/wrsy/8K9Mv/CvzL/wsEy/8LEMv/CxjL/w8gz/8PKM//DzDP/w84z/8PQM//D0jP/xNQ0/8TXNP/E2TT/xNs0/8TdNP/E3zT/xOE0/8XjNf/F5DX/xeQ1/8XkNf/F5DX/xeQ1/7xoLP+8aiz/vGws/7xuLP+8cCz/vXIt/710Lf+9di3/vXgt/717Lf+9fS3/vX8t/76BLv++gy7/voUu/76HLv++iS7/vosu/7+OL/+/kC//v5Iv/7+UL/+/li//v5gv/7+aL//AnDD/wJ4w/8ChMP/AozD/wKUw/8CnMP/AqTD/wasx/8GtMf/BrzH/wbEx/8G0Mf/BtjH/wbgx/8K6Mv/CvDL/wr4y/8LAMv/CwjL/wsQy/8PHM//DyTP/w8sz/8PNM//DzzP/w9Ez/8PTM//E1TT/xNc0/8TaNP/E3DT/xN40/8TgNP/E4jT/xeM1/8XkNf/F5DX/xeQ1/8XkNf+8Ziz/vGgs/7xrLP+8bSz/vG8s/7xxLP+9cy3/vXUt/713Lf+9eS3/vXst/71+Lf++gC7/voIu/76ELv++hi7/vogu/76KLv++jC7/v44v/7+RL/+/ky//v5Uv/7+XL/+/mS//v5sv/8CdMP/AnzD/wKEw/8CkMP/ApjD/wKgw/8GqMf/BrDH/wa4x/8GwMf/BsjH/wbQx/8G3Mf/CuTL/wrsy/8K9Mv/CvzL/wsEy/8LDMv/CxTL/w8cz/8PKM//DzDP/w84z/8PQM//D0jP/w9Qz/8TWNP/E2DT/xNo0/8TdNP/E3zT/xOE0/8XjNf/F5DX/xeQ1/8XkNf/F5DX/vGUs/7xnLP+8aSz/vGss/7xuLP+8cCz/vXIt/710Lf+9di3/vXgt/716Lf+9fC3/vX4t/76BLv++gy7/voUu/76HLv++iS7/vosu/76NLv+/jy//v5Ev/7+UL/+/li//v5gv/7+aL//AnDD/wJ4w/8CgMP/AojD/wKQw/8CnMP/AqTD/wasx/8GtMf/BrzH/wbEx/8GzMf/BtTH/wbcx/8K6Mv/CvDL/wr4y/8LAMv/CwjL/wsQy/8PGM//DyDP/w8oz/8PNM//DzzP/w9Ez/8PTM//E1TT/xNc0/8TZNP/E2zT/xN00/8TgNP/E4jT/xeM1/8XkNf/F5DX/xeQ1/7xkLP+8Ziz/vGgs/7xqLP+8bCz/vG4s/7xxLP+9cy3/vXUt/713Lf+9eS3/wII3/8aPSv/HkUv/x5NL/8eVS//Hl0v/x5lL/8eaS//HnEv/yJ5M/8efSv+/ki//v5Qv/7+XL/+/mS//wp85/8irTf/IrE3/yK5N/8iwTf/Isk3/yLNN/8m2Tf/Jt07/yblO/8m7Tv/BsjH/wbQx/8G2Mf/CuDL/xL05/8rGTv/KyE7/yslO/8rLTv/KzU//y89P/8vRT//L0k//y9RP/8vWT//G1D7/w9Qz/8TWNP/E2DT/xNo0/8TcNP/E3jT/xOA0/8XjNf/F5DX/xeQ1/8XkNf+7Yyv/vGUs/7xnLP+8aSz/vGss/7xtLP+8byz/vXEt/710Lf+9di3/vXgt/9SpeP/////////////////////////////////////////////////7+PL/v5Ev/7+TL/+/lS//v5cv/9S7df//////////////////////////////////////////////////////wbEy/8GzMf/BtTH/wbcx/9LMav//////////////////////////////////////////////////////2+OG/8PTM//E1TT/xNc0/8TZNP/E2zT/xN00/8TfNP/E4TT/xeM1/8XkNf/F5DX/u2Er/7xkLP+8Ziz/vGgs/7xqLP+8bCz/vG4s/7xwLP+9ci3/vXQt/713Lf/UqHj/////////////////////////////////////////////////+/jy/7+QL/+/ki//v5Qv/7+WL//UunX//////////////////////////////////////////////////////8GwMv/BsjH/wbQx/8G2Mf/Sy2r//////////////////////////////////////////////////////9vjhv/D0TP/w9Mz/8TWNP/E2DT/xNo0/8TcNP/E3jT/xOA0/8TiNP/F5DX/xeQ1/7tgK/+7Yiv/vGQs/7xnLP+8aSz/vGss/7xtLP+8byz/vXEt/71zLf+9dS3/1Kd4//////////////////////////////////////////////////v48v+/jy//v5Ev/7+TL/+/lS//1Ll1///////////////////////////////////////////////////////BrzL/wbAx/8GzMf/BtTH/0spp///////////////////////////////////////////////////////b4ob/w9Az/8PSM//E1DT/xNY0/8TZNP/E2zT/xN00/8TfNP/E4TT/xeM1/8XkNf+7Xyv/u2Er/7xjLP+8ZSz/vGcs/7xqLP+8bCz/vG4s/7xwLP+9ci3/vXQt/9SneP/////////////////////////////////////////////////7+PL/v40v/7+QL/+/ki//v5Qv/9S5df//////////////////////////////////////////////////////wa0y/8GvMf/BsTH/wbMx/9LJaf//////////////////////////////////////////////////////2+GG/8PPM//D0TP/w9Mz/8TVNP/E1zT/xNk0/8TcNP/E3jT/xOA0/8TiNP/F4zX/u14r/7tgK/+7Yiv/vGQs/7xmLP+8aCz/vGos/7xtLP+8byz/vHEs/71zLf/Upnj/////////////////////////////////////////////////+/jy/76MLv+/ji//v5Av/7+TL//UuHX//////////////////////////////////////////////////////8GsMv/BrjH/wbAx/8GyMf/SyGn//////////////////////////////////////////////////////9vghv/DzjP/w9Az/8PSM//D1DP/xNY0/8TYNP/E2jT/xNw0/8TfNP/E4TT/xeM1/7tdK/+7Xyv/u2Er/7xjLP+8ZSz/vGcs/7xpLP+8ayz/vG0s/7xwLP+9ci3/1KV4//////////////////////////////////////////////////v48v++iy7/vo0u/7+PL/+/kS//1Ld1///////////////////////////////////////////////////////BqzL/wa0x/8GvMf/BsTH/0sdp///////////////////////////////////////////////////////b4Ib/w8wz/8PPM//D0TP/w9Mz/8TVNP/E1zT/xNk0/8TbNP/E3TT/xN80/8TiNP+7Wyv/u10r/7tgK/+7Yiv/vGQs/7xmLP+8aCz/vGos/7xsLP+8biz/vHAs/9SkeP/////////////////////////////////////////////////7+PL/voou/76MLv+/ji//v5Av/9S2df//////////////////////////////////////////////////////waoy/8GsMf/BrjH/wbAx/9LGaf//////////////////////////////////////////////////////29+G/8PLM//DzTP/w88z/8PSM//D1DP/xNY0/8TYNP/E2jT/xNw0/8TeNP/E4DT/u1or/7tcK/+7Xiv/u2Ar/7tjK/+8ZSz/vGcs/7xpLP+8ayz/vG0s/7xvLP/UpHj/////////////////////////////////////////////////+/jy/76JLv++iy7/vo0u/7+PL//UtXX//////////////////////////////////////////////////////8CpMf/BqjH/wawx/8GvMf/Sxmn//////////////////////////////////////////////////////9vehv/DyjP/w8wz/8POM//D0DP/w9Iz/8TVNP/E1zT/xNk0/8TbNP/E3TT/xN80/7tZK/+7Wyv/u10r/7tfK/+7YSv/vGMs/7xmLP+8aCz/vGos/7xsLP+8biz/1KN3//////////////////////////////////////////////////v48v++hy7/voku/76MLv+/ji//1LV1///////////////////////////////////////////////////////ApzH/wKkw/8GrMf/BrTH/0sVp///////////////////////////////////////////////////////b3Yb/w8kz/8PLM//DzTP/w88z/8PRM//D0zP/xNU0/8TYNP/E2jT/xNw0/8TeNP+7WCv/u1or/7tcK/+7Xiv/u2Ar/7tiK/+8ZCz/vGYs/7xpLP+8ayz/vG0s/9Sid//////////////////////////////////////////////////7+PL/voYu/76ILv++ii7/vowu/9S0df//////////////////////////////////////////////////////wKYx/8CoMP/BqjH/wawx/9LEaf//////////////////////////////////////////////////////292G/8PIM//DyjP/w8wz/8POM//D0DP/w9Iz/8PUM//E1jT/xNg0/8TbNP/E3TT/u1Yr/7tZK/+7Wyv/u10r/7tfK/+7YSv/vGMs/7xlLP+8Zyz/vGks/7xsLP/UoXf/////////////////////////////////////////////////+/fy/76FLv++hy7/voku/76LLv/Us3T//////////////////////////////////////////////////////8ClMf/ApzD/wKkw/8GrMf/Sw2n//////////////////////////////////////////////////////9vchf/DxjP/w8gz/8PLM//DzTP/w88z/8PRM//D0zP/xNU0/8TXNP/E2TT/xNs0/7tVK/+7Vyv/u1kr/7tcK/+7Xiv/u2Ar/7tiK/+8ZCz/vGYs/7xoLP+8aiz/1KB3//////////////////////////////////////////////////v38v++hC7/voYu/76ILv++ii7/07J0///////////////////////////////////////////////////////ApDH/wKUw/8CoMP/AqjD/0sJp///////////////////////////////////////////////////////b24X/wsUy/8PHM//DyTP/w8sz/8POM//D0DP/w9Iz/8PUM//E1jT/xNg0/8TaNP+6VCr/u1Yr/7tYK/+7Wiv/u1wr/7tfK/+7YSv/u2Mr/7xlLP+8Zyz/vGks/9Sgd//////////////////////////////////////////////////79/L/voIu/76FLv++hy7/voku/82mYP/s3sT/7d/E/+3gxP/t4MT/7eHE/+3hxP/t4sT/7eLE/+3jxP/t5MT/wKIw/8CkMP/ApjD/wKgw/9LBaf//////////////////////////////////////////////////////2tuF/8LEMv/CxjL/w8gz/8PKM//DzDP/w84z/8PRM//D0zP/xNU0/8TXNP/E2TT/ulMq/7tVK/+7Vyv/u1kr/7tbK/+7XSv/u18r/7tiK/+8ZCz/vGYs/7xoLP/Un3f/////////////////////////////////////////////////+/fy/76BLv++gy7/voUu/76ILv++ii7/vowu/7+OL/+/kC//v5Iv/7+UL/+/li//v5gv/7+bL//AnTD/wJ8w/8ChMP/AozD/wKUw/8CnMP/RwGn//////////////////////////////////////////////////////9rahf/CwzL/wsUy/8PHM//DyTP/w8sz/8PNM//DzzP/w9Ez/8PUM//E1jT/xNg0/7pSKv+6VCr/u1Yr/7tYK/+7Wiv/u1wr/7teK/+7YCv/u2Ir/7xlLP+8Zyz/1J53//////////////////////////////////////////////////v38v++gC7/voIu/76ELv++hi7/vogu/76LLv++jS7/v48v/7+RL/+/ky//v5Uv/7+XL/+/mS//v5sv/8CeMP/AoDD/wKIw/8CkMP/ApjD/0b9o///////////////////////////////////////////////////////a2YX/wsEy/8LEMv/CxjL/w8gz/8PKM//DzDP/w84z/8PQM//D0jP/xNQ0/8TXNP+6UCr/ulIq/7pVKv+7Vyv/u1kr/7tbK/+7XSv/u18r/7thK/+8Yyz/vGUs/9Sdd//////////////////////////////////////////////////79/L/vX8t/76BLv++gy7/voUu/76HLv++iS7/vosu/7+OL/+/kC//v5Iv/7+UL/+/li//v5gv/7+aL//AnDD/wJ4w/8ChMP/AozD/wKUw/9G+aP//////////////////////////////////////////////////////2tmF/8LAMv/CwjL/wsQy/8PHM//DyTP/w8sz/8PNM//DzzP/w9Ez/8PTM//E1TT/uk8q/7pRKv+6Uyr/u1Ur/7tYK/+7Wiv/u1wr/7teK/+7YCv/u2Ir/7xkLP/UnXf/////////////////////////////////////////////////+/fy/71+Lf++gC7/voIu/76ELv++hi7/vogu/76KLv++jC7/v44v/7+RL/+/ky//v5Uv/7+XL/+/mS//v5sv/8CdMP/AnzD/wKEw/8CkMP/Rvmj//////////////////////////////////////////////////////9rYhf/CvzL/wsEy/8LDMv/CxTL/w8cz/8PKM//DzDP/w84z/8PQM//D0jP/w9Qz/7pOKv+6UCr/ulIq/7pUKv+7Viv/u1gr/7tbK/+7XSv/u18r/7thK/+8Yyz/1Jx3//////////////////////////////////////////////////v38v+9fC3/vX4t/76BLv++gy7/voUu/76HLv++iS7/vosu/76NLv+/jy//v5Ev/7+UL/+/li//v5gv/7+aL//AnDD/wJ4w/8CgMP/AojD/tqNR/6qqqv+8vLz/zs7O/9/f3//x8fH//v7+///////////////////////a14X/wr4y/8LAMv/CwjL/wsQy/8PGM//DyDP/w8oz/8PNM//DzzP/w9Ez/8PTM/+6TSr/uk8q/7pRKv+6Uyr/u1Ur/7tXK/+7WSv/u1sr/7teK/+7YCv/u2Ir/9Sbd//////////////////////////////////////////////////8+vj/3buS/928kv/dvZP/3b6T/92/k//dwJP/3cGT/93Ck//dw5P/3sST/97Fk//expP/3ciT/9zIkv/cyZL/3MqS/9zLk//cy5P/3MyT/9PJn/+8vLz/vLy8/7y8vP+8vLz/vLy8/7+/v//Q0ND/4uLi//Pz8//+/v7/2taF/8K9Mv/CvzL/wsEy/8LDMv/CxTL/w8cz/8PJM//DyzP/w80z/8PQM//D0jP/uksq/7pOKv+6UCr/ulIq/7pUKv+7Viv/u1gr/7taK/+7XCv/u14r/7thK//Tmnf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9rWhf/CuzL/wr0y/8LAMv/CwjL/wsQy/8LGMv/DyDP/w8oz/8PMM//DzjP/w9Az/7pKKv+6TCr/uk4q/7pRKv+6Uyr/u1Ur/7tXK/+7WSv/u1sr/7tdK/+7Xyv/05l3///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////a1YX/wroy/8K8Mv/CvjL/wsAy/8LDMv/CxTL/w8cz/8PJM//DyzP/w80z/8PPM/+6SSr/uksq/7pNKv+6Tyr/ulEq/7pUKv+7Viv/u1gr/7taK/+7XCv/u14r/9OZd///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2tSF/8K5Mv/CuzL/wr0y/8K/Mv/CwTL/wsMy/8LGMv/DyDP/w8oz/8PMM//DzjP/ukgq/7pKKv+6TCr/uk4q/7pQKv+6Uir/ulQq/7tXK/+7WSv/u1sr/7tdK//TmHf/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9vXk/8m/TP/BuDH/wroy/8K8Mv/CvjL/wsAy/8LCMv/CxDL/w8Yz/8PJM//DyzP/w80z/7pIKv+6SSr/uksq/7pNKv+6Tyr/ulEq/7pTKv+7VSv/u1cr/7taK/+7XCv/05d3////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8/Hb/8e6Rv/BtDH/wbYx/8K5Mv/CuzL/wr0y/8K/Mv/CwTL/wsMy/8LFMv/DxzP/w8kz/8PMM/+6SCr/ukgq/7pKKv+6TCr/uk4q/7pQKv+6Uir/ulQq/7tWK/+7WCv/u1or/9OWd///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8OzQ/8W0Pv/BsTH/wbMx/8G1Mf/BtzH/wrky/8K8Mv/CvjL/wsAy/8LCMv/CxDL/w8Yy/8PIM//DyjP/ukgq/7pIKv+6SCr/uksq/7pNKv+6Tyr/ulEq/7pTKv+7VSv/u1cr/7tZK//TlXf/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7ebD/8OvOf/BrjH/wbAx/8GyMf/BtDH/wbYx/8K4Mv/CujL/wrwy/8K/Mv/CwTL/wsMy/8LFMv/DxzP/w8kz/7pIKv+6SCr/ukgq/7pJKv+6Syr/uk4q/7pQKv+6Uir/ulQq/7tWK/+7WCv/05V3////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////6N+1/8GqNP/BqjH/wawx/8GvMf/BsTH/wbMx/8G1Mf/BtzH/wrky/8K7Mv/CvTL/wr8y/8LCMv/CxDL/wsYy/8PIM/+6SCr/ukgq/7pIKv+6SCr/ukoq/7pMKv+6Tir/ulEq/7pTKv+7VSv/u1cr/9OUd///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////49el/8ClMf/ApzD/wKkw/8GrMf/BrTH/wa8x/8GyMf/BtDH/wbYx/8G4Mf/CujL/wrwy/8K+Mv/CwDL/wsIy/8LFMv/DxzP/ukgq/7pIKv+6SCr/ukgq/7pJKv+6Syr/uk0q/7pPKv+6USr/ulQq/7tWK/+8XDD/wGY7/8BoO//Aajv/wG07/8BuPP/BcDz/wXI8/8F0PP/Bdjz/wXg8/8F6PP/CfD3/wn49/8KAPf/Cgj3/woQ9/8KGPf/CiD3/w4k+/8OLPv/DjT7/w5A+/8ORPv/Dkz7/w5U+/8SXP//EmT//xJs//8SdP//Enz//xKE//8SjP//EpUD/xKc//8CiMP/ApDD/wKYw/8CoMP/BqjH/wawx/8GuMf/BsDH/wbIx/8G1Mf/BtzH/wrky/8K7Mv/CvTL/wr8y/8LBMv/CwzL/wsUy/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukoq/7pMKv+6Tir/ulAq/7pSKv+6VCr/u1cr/7tZK/+7Wyv/u10r/7tfK/+7YSv/vGMs/7xlLP+8Zyz/vGks/7xsLP+8biz/vHAs/71yLf+9dC3/vXYt/714Lf+9ei3/vXwt/71/Lf++gS7/voMu/76FLv++hy7/voku/76LLv+/jS7/v48v/7+SL/+/lC//v5Yv/7+YL/+/mi//wJww/8CeMP/AoDD/wKIw/8ClMP/ApzD/wKkw/8GrMf/BrTH/wa8x/8GxMf/BszH/wbUx/8G4Mf/CujL/wrwy/8K+Mv/CwDL/wsIy/8LEMv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pJKv+6Syr/uk0q/7pPKv+6USr/ulMq/7tVK/+7Vyv/u1or/7tcK/+7Xiv/u2Ar/7tiK/+8ZCz/vGYs/7xoLP+8aiz/vGws/7xvLP+8cSz/vXMt/711Lf+9dy3/vXkt/717Lf+9fS3/vn8u/76CLv++hC7/voYu/76ILv++ii7/vowu/7+OL/+/kC//v5Iv/7+VL/+/ly//v5kv/7+bL//AnTD/wJ8w/8ChMP/AozD/wKUw/8CoMP/AqjD/wawx/8GuMf/BsDH/wbIx/8G0Mf/BtjH/wrgy/8K7Mv/CvTL/wr8y/8LBMv/CwzL/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukoq/7pMKv+6Tir/ulAq/7pSKv+6VCr/u1Yr/7tYK/+7Wiv/u10r/7tfK/+7YSv/vGMs/7xlLP+8Zyz/vGks/7xrLP+8bSz/vG8s/71yLf+9dC3/vXYt/714Lf+9ei3/vXwt/71+Lf++gC7/voIu/76FLv++hy7/voku/76LLv++jS7/v48v/7+RL/+/ky//v5Uv/7+YL/+/mi//wJww/8CeMP/AoDD/wKIw/8CkMP/ApjD/wKgw/8GrMf/BrTH/wa8x/8GxMf/BszH/wbUx/8G3Mf/CuTL/wrsy/8K+Mv/CwDL/wsIy/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6Sir/uk0q/7pPKv+6USr/ulMq/7tVK/+7Vyv/u1kr/7tbK/+7XSv/u2Ar/7tiK/+8ZCz/vGYs/7xoLP+8aiz/vGws/7xuLP+8cCz/vXIt/711Lf+9dy3/vXkt/717Lf+9fS3/vX8t/76BLv++gy7/voUu/76ILv++ii7/vowu/7+OL/+/kC//v5Iv/7+UL/+/li//v5gv/7+bL//AnTD/wJ8w/8ChMP/AozD/wKUw/8CnMP/AqTD/wasx/8GuMf/BsDH/wbIx/8G0Mf/BtjH/wrgy/8K6Mv/CvDL/wr4y/8LBMv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukkq/7pLKv+6TSr/ulAq/7pSKv+6VCr/u1Yr/7tYK/+7Wiv/u1wr/7teK/+7YCv/u2Mr/7xlLP+8Zyz/vGks/7xrLP+8bSz/vG8s/71xLf+9cy3/vXUt/714Lf+9ei3/vXwt/71+Lf++gC7/voIu/76ELv++hi7/vogu/76LLv++jS7/v48v/7+RL/+/ky//v5Uv/7+XL/+/mS//v5sv/8CeMP/AoDD/wKIw/8CkMP/ApjD/wKgw/8GqMf/BrDH/wa4x/8GxMf/BszH/wbUx/8G3Mf/CuTL/wrsy/8K9Mv/CvzL/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6Sir/ukwq/7pOKv+6UCr/ulMq/7pVKv+7Vyv/u1kr/7tbK/+7XSv/u18r/7thK/+8Yyz/vGYs/7xoLP+8aiz/vGws/7xuLP+8cCz/vXIt/710Lf+9di3/vXgt/717Lf+9fS3/vX8t/76BLv++gy7/voUu/76HLv++iS7/vosu/7+OL/+/kC//v5Iv/7+UL/+/li//v5gv/7+aL//AnDD/wJ4w/8ChMP/AozD/wKUw/8CnMP/AqTD/wasx/8GtMf/BrzH/wbEx/8G0Mf/BtjH/wbgx/8K6Mv/CvDL/wr4y/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukkq/7pLKv+6TSr/uk8q/7pRKv+6Uyr/u1Yr/7tYK/+7Wiv/u1wr/7teK/+7YCv/u2Ir/7xkLP+8Ziz/vGgs/7xrLP+8bSz/vG8s/7xxLP+9cy3/vXUt/713Lf+9eS3/vXst/71+Lf++gC7/voIu/76ELv++hi7/vogu/76KLv++jC7/v44v/7+RL/+/ky//v5Uv/7+XL/+/mS//v5sv/8CdMP/AnzD/wKEw/8CkMP/ApjD/wKgw/8GqMf/BrDH/wa4x/8GwMf/BsjH/wbQx/8G3Mf/CuTL/wrsy/8K9Mv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6Sir/ukwq/7pOKv+6UCr/ulIq/7pUKv+7Viv/u1kr/7tbK/+7XSv/u18r/7thK/+8Yyz/vGUs/7xnLP+8aSz/vGss/7xuLP+8cCz/vXIt/710Lf+9di3/vXgt/716Lf+9fC3/vX4t/76BLv++gy7/voUu/76HLv++iS7/vosu/76NLv+/jy//v5Ev/7+UL/+/li//v5gv/7+aL//AnDD/wJ4w/8CgMP/AojD/wKQw/8CnMP/AqTD/wasx/8GtMf/BrzH/wbEx/8GzMf/BtTH/wbcx/8K6Mv/CvDL/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukkq/7pLKv+6TSr/uk8q/7pRKv+6Uyr/u1Ur/7tXK/+7WSv/u1wr/7teK/+7YCv/u2Ir/7xkLP+8Ziz/vGgs/7xqLP+8bCz/vG4s/7xxLP+9cy3/vXUt/713Lf+9eS3/vXst/719Lf++fy7/voEu/76ELv++hi7/vogu/76KLv++jC7/v44v/7+QL/+/ki//v5Qv/7+XL/+/mS//v5sv/8CdMP/AnzD/wKEw/8CjMP/ApTD/wKcw/8CqMP/BrDH/wa4x/8GwMf/BsjH/wbQx/8G2Mf/CuDL/wroy/7pIKfm6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SSr/ukwq/7pOKv+6UCr/ulIq/7pUKv+7Viv/u1gr/7taK/+7XCv/u18r/7thK/+7Yyv/vGUs/7xnLP+8aSz/vGss/7xtLP+8byz/vXEt/710Lf+9di3/vXgt/716Lf+9fC3/vX4t/76ALv++gi7/voQu/76HLv++iS7/vosu/76NLv+/jy//v5Ev/7+TL/+/lS//v5cv/7+aL//AnDD/wJ4w/8CgMP/AojD/wKQw/8CmMP/AqDD/waox/8GtMf/BrzH/wbEx/8GzMf/BtTH/wbcx/8K5Mfm6Rynaukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pKKv+6TCr/uk8q/7pRKv+6Uyr/u1Ur/7tXK/+7WSv/u1sr/7tdK/+7Xyv/u2Ir/7xkLP+8Ziz/vGgs/7xqLP+8bCz/vG4s/7xwLP+9ci3/vXQt/713Lf+9eS3/vXst/719Lf+9fy3/voEu/76DLv++hS7/vocu/76KLv++jC7/v44v/7+QL/+/ki//v5Qv/7+WL/+/mC//v5ov/8CdMP/AnzD/wKEw/8CjMP/ApTD/wKcw/8CpMP/BqzH/wa0x/8GwMf/BsjH/wbQx/8G2Mf/CuDHauUgombpIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SSr/uksq/7pNKv+6Tyr/ulIq/7pUKv+7Viv/u1gr/7taK/+7XCv/u14r/7tgK/+7Yiv/vGUs/7xnLP+8aSz/vGss/7xtLP+8byz/vXEt/71zLf+9dS3/vXct/716Lf+9fC3/vX4t/76ALv++gi7/voQu/76GLv++iC7/voou/76NLv+/jy//v5Ev/7+TL/+/lS//v5cv/7+ZL/+/my//wJ0w/8CgMP/AojD/wKQw/8CmMP/AqDD/waox/8GsMf/BrjH/wbAx/8GzMf/BtTH/wbcxmLlGKDO6Ryn+ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pIKv+6SCr/ukgq/7pKKv+6TCr/uk4q/7pQKv+6Uir/ulUq/7tXK/+7WSv/u1sr/7tdK/+7Xyv/u2Er/7xjLP+8ZSz/vGgs/7xq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");\r\n}\r\n/* AdGuard */\r\n#desktop-browser-list li:nth-child(7)::before {\r\n	background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjNjhCQzcxIiBkPSJNMTYgMEMxMSAwIDUgMS4xIDAgMy43IDAgOSAwIDIyLjcgMTYgMzIgMzIgMjIuNyAzMiA5LjEgMzIgMy43IDI3IDEgMjEgMCAxNiAweiIvPjxwYXRoIGZpbGw9IiM2N0IyNzkiIGQ9Ik0xNiAwdjMyQzAgMjIuNyAwIDkuMSAwIDMuNyA1IDEgMTEgMCAxNiAweiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNS45IDIwLjYgMjUgOC4zYy0uNi0uNi0xLjItLjItMS42LjFsLTcuNyA4LTMtMy41Yy0xLjMtMS42LTMuMi0uNC0zLjcgMGw2LjggNy43Ii8+PC9nPjwvc3ZnPg==");\r\n}\r\n/* Dolphin */\r\n#android-browser-list li:nth-child(3)::before {\r\n	background: url("data:image/webp;base64,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");\r\n}\r\n/* UC */\r\n#android-browser-list li:nth-child(4)::before {\r\n	background: url("data:image/png;base64,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");\r\n}\r\n/* Kiwi */\r\n#android-browser-list li:nth-child(5)::before {\r\n	background: url("data:image/png;base64,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");\r\n}\r\n/* X浏览器 */\r\n#android-browser-list li:nth-child(6)::before {\r\n	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAB1FBMVEUAAAAJePoHof0AjewXV/YdY/8dPOcAm/8Bmv0cYPgAm/8cY/8XNO4fZf8AmPsCnv8Bmf4dYv0FmfsAy/8BlvcpaPwwY/NVju0A0P8XNvQReusBjOceY/0BlvcUKc4bUu0XM+QWNNoAzf4dY/8Dy/4Mmv0hZf8Oku0LzP8Ay/4AkOwepf8enPooZfwjP/8nXvUomO0ZOusrz/82jPk6tf81av8AwP8Tc+cCh90BoeYaUtwAzf8bWuobT+ABh9wYNewdWuccOfUJzv8KnP8RjfUKnP8gX/AhZf8cM9EiZf8PnPwQnf8NzP4hT9wPnP8RqOkfY+AkYvYkZv8Dm/0Fy/0DjOclZv8Snv8lZv8hN9sVhdwVlfEmZ/8hbOIXnv8XkOglXOIiMtEpZvoqaP8cnfwoP+sc0P8cmPYhm/sazP8zbf8aXv8mQP85//8Am/8cY/8BoP8dYv4AnP8cYv0fa/8dZ/8cYfocXvQAov8bXvABpf8Bn/8eaP8fZP8aXe4aWukaT+AWM98A2f8A1f8A0v8Anv8FlPoAj/EAku4ZV90UKdEA6f8A3v8Dyv8Ar/8Bp/8SiP8GkfkBwvgBk/ITd/AZYesCpukWM+UWPeIBgt4ZO9sWMtpotjNrAAAAbnRSTlMAAgMFBfoD+v7+/f0hIP38+vn4mJhgNQn+/v38+/v7+vn5+PX129bOoJeXPjIpJCMiHxoVDwwG/v78/Pv6+fn29e/t7Ovi4d/Rz8jFwr+6ubSrqqWenp2blpSSkYaCe3p0cGlbW1lSUkU8Ix4UEnTatA8AAAHPSURBVDjLvZNXW+JAFIbPBCZE2KUL9t57W7f33nvvvWeSkAgiqNh11971z3oCz4gGr32fuUjmnTnfl4vAIUFEYiJaXrN+/wOxCgJ/2jqPIJ1AMrvtR5Hfrcd2b7RdLDxfUVGZ+gh2wPXCqKa0mtXxA7j1tTCV2p6Z2QqBaIfPOjNJhkDgWSK8XC8rqyxn18MAvyijLpcv8Qnse8vc2ChXDao/AriZoGrEZzzEa1lEaC8xXCqjev4b3Rfpy4tcC/MCvEZ+gjLmYskk6mh/f4gHZE880ylT1bQ+E/1g9TiP1BklaT10dvABEAIWBGhV1bzo4NDwqZUrPfwLLTX6UE8fX/Q0gw1yEaH7wvB00YQnVgsHgZl3V4smBjTZEX9+UIIN3i54USPO+BfozfU/BjwaSqcsS7K/w9pCgO7LigO9Mi5J7lK5PrfBvTh6R+xW7Xjp8lTx5Cs+gge8mze95u9pkaaKN0+cnP0GvXt9syI7ZcmtfAd4P3lubalgrKYLhGyB8FXN63X7ldfm4PsFVaerasbumMGc23NKTNFi9enTfy/9Hx0ZGf3XwEcQaHkcDAabmp524Baunw2NgUCg8UkXKgskk5iLLQP/D4QMcEjsADN8ZLYyFhBKAAAAAElFTkSuQmCC");\r\n}\r\n/* 书签地球 */\r\n#android-browser-list li:nth-child(7)::before {\r\n	background: url("data:image/x-icon;base64,AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////iIiIiQAAAAAAAAAAAAAAAAAAAAACAgIC//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8CAgICAAAAAPj4+Pn29vb3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9LS0tP9/f3+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/f7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/f7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ra2/9PUFL/IyQm/zM1N/83ODr/Njc5/ykqLP8zNDb/srKy//7+/v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3+//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9TU1X/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/ywuMP/09PT//////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39/v//////////////////////////////////////////////////////////////////////////////////////////5+fo/////////////////////////////////zEyNP86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf/V1tb///////////////////////////////////////////////////////////////////////////////////////////////////////39/f7/////////////////////////////////////////////////////////////////////////////////////bGxu//n5+f//////////////////////HR4h/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Kisu/1NUVv/Z2dr/////////////////tre4/y0uMP85Ojz/Ojs9/zo7Pf86Oz3/Ojs9/zs8Pv/////////////////////////////////////////////////////////////////////////////////////////////////9/f3+////////////////////////////////////////////////////////////////////////////////LjAy/z9AQ//////////////////8/Pz/Ozw+/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/1tcXf//////////////////////////////////////////////////////////////////////MjM1/zo7Pf86Oz3/Ojs9/5ucnP///////////////////////////////////////////////////////////////////////////////////////f39/v//////////////////////////////////////////////////////////////////////////TE1P/zs8Pv/////////////////f3+D/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf87PD7/zc3O////////////////////////////////////////////////////////////////////////////////////////////Xl9g/zo7Pf86Oz3/Jicq//////////////////////////////////////////////////////////////////////////////////39/f7/////////////////////////////////////////////////////////////////////q6us/zo7Pf/8/Pz////////////Kysv/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf9vcHH/////////////////////////////////////////////////////////////////////////////////////////////////////////////////KSos/zo7Pf8sLS/////////////////////////////////////////////////////////////////////////////9/f3+/////////////////////////////////////////////////////////////////////zo7Pf85Ojz/////////////////Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf///////////////////////////5iZmv9cXV7/aWps//////////////////////////////////////////////////////////////////////////////////////+4uLn/Ojs9/y0uMP///////////////////////////////////////////////////////////////////////f39/v///////////////////////////////////////////////////////////////zs8Pv86Oz3/7u7u////////////Ojs9/zo7Pf86Oz3/Ojs9/zc4Ov///////////////////////////x4fIv86Oz3/c3R1/ystL/86Oz3/OTo8/8DAwf////////////////////////////////////////////////////////////////////////////r6+v86Oz3/wMDB//////////////////////////////////////////////////////////////////39/f7//////////////////////////////////////////////////////////0NERv86Oz3/Ojs9////////////MjM1/zo7Pf86Oz3/Ojs9/zY3Ov///////////////////////////9fY2P8dHiH/Ojs9/3N0df8rLS//Ojs9/zo7Pf86Oz3/Ojs9/zEyNP///////////////////////////////////////////////////////////////////////////zo7Pf/////////////////////////////////////////////////////////////////9/f3+//////////////////////////////////////////////////////////86Oz3/Ojs9/2lqbP//////4+Pk/zo7Pf86Oz3/Ojs9/zs8Pv/////////////////////////////////R0dH/HR4h/zo7Pf9zdHX/Ky0v/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zk6PP+IiYr////////////////////////////////////////////////////////////09PT/LzAy/////////////////////////////////////////////////////////////f39/v////////////////////////////////////////////////////8vLzL/Ojs9/zo7Pf///////////zo7Pf86Oz3/Ojs9/zo7Pf//////////////////////////////////////0dHR/x0eIf86Oz3/c3R1/ystL/86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf/Fxcb//////////////////////////////////////////////////////2trbf////////////////////////////////////////////////////////////39/f7/////////////////////////////////////////////////////Ojs9/zo7Pf86Oz3//////9HS0v86Oz3/Ojs9/zo7Pf+BgYL//////////////////////////////////////9HR0f8dHiH/Ojs9/3N0df8rLS//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/y0vMf//////////////////////////////////////////////////////LzAy///////////////////////////////////////////////////////9/f3+////////////////////////////////////////////////jI2P/zo7Pf86Oz3/MjM2//////80NTf/Ojs9/zo7Pf86Oz3////////////////////////////////////////////R0dH/HR4h/zo7Pf9zdHX/Ky0v/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/////////////////////////////////////////////////////////////////////////////////////////////////////////////f39/v///////////////////////////////////////////////zk6PP86Oz3/Ojs9/3N0df//////Ojs9/zo7Pf86Oz3/4ODg////////////////////////////////////////////0dHR/x0eIf86Oz3/c3R1/ystL/86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/////////////////////////////////////////////////jY6P//////////////////////////////////////////////////39/f7///////////////////////////////////////////////86Oz3/Ojs9/zo7Pf/u7u7/wMHB/zo7Pf86Oz3/Ojs9/////////////////////////////////////////////////9HR0f8dHiH/Ojs9/3N0df8rLS//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf/////////////////////////////////////////////////////////////////////////////////////////////////9/f3+///////////////////////////////////////////W1tf/Ojs9/zo7Pf86Oz3//////zg5O/86Oz3/Ojs9/3N0df/////////////////////////////////////////////////R0dH/HR4h/zo7Pf9zdHX/Ky0v/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3///////////84ODr/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/MDEz/////////////////////////////////////////////////////////////////////////////////////////////f39/v//////////////////////////////////////////LzEz/zo7Pf86Oz3/Ojs9//////81Njj/Ojs9/zo7Pf//////////////////////////////////////////////////////0dHR/x0eIf86Oz3/c3R1/ystL/86Oz3/Ojs9/zo7Pf86Oz3/Ojs9//////////////////////81Njj/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf+7u7z///////////////////////////////////////////////////////////////////////////////////////39/f7//////////////////////////////////////////zc4Ov86Oz3/Ojs9/zo7Pf//////Ojs9/zo7Pf86Oz3//////////////////////////////////////////////////////9HR0f8dHiH/Ojs9/3N0df8rLS//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf///////////////////////////ykqLP86Oz3/Ojs9/zo7Pf86Oz3/Ojs9///////////////////////////////////////////////////////////////////////////////////////9/f3+//////////////////////////////////////////86Oz3/Ojs9/zo7Pf86Oz3//////zo7Pf86Oz3/Hh8h///////////////////////////////////////////////////////R0dH/HR4h/zo7Pf9zdHX/Ky0v/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/////////////////////////////////Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf/Z2dn//////////////////////////////////////////////////////////////////////////////////f39/v//////////////////////////////////////////Ojs9/zo7Pf86Oz3/Ojs9//////86Oz3/Ojs9/4GCg///////////////////////////////////////////////////////0dHR/x0eIf86Oz3/c3R1/ystL/86Oz3/Ojs9/zo7Pf86Oz3/Ojs9//////////////////////////////////////86Oz3/Ojs9/zo7Pf86Oz3/Ojs9//////////////////////////////////////////////////////////////////////////////////39/f7//////////////////////////////////////////zo7Pf86Oz3/Ojs9/zo7Pf//////Ojs9/zo7Pf/9/f3//////////////////////////////////////////////////////9HR0f8dHiH/Ojs9/3N0df8rLS//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf//////////////////////////////////////Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf/////////////////////////////////////////////////////////////////////////////////9/f3+//////////////////////////////////////////86Oz3/Ojs9/zo7Pf86Oz3/m5ud/zk6PP86Oz3////////////////////////////////////////////////////////////R0dH/HR4h/zo7Pf9zdHX/Ky0v/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3//////////////////////////////////////xsdH/86Oz3/Ojs9/zo7Pf86Oz3//////////////////////////////////////////////////////////////////////////////////f39/v//////////////////////////////////////////Ojs9/zo7Pf86Oz3/Ojs9/zIzNf8pKiz/Ojs9////////////////////////////////////////////////////////////0dHR/x0eIf86Oz3/c3R1/ystL/86Oz3/Ojs9/zo7Pf86Oz3/Ojs9//////////////////////////////////////+AgIH/Ojs9/zo7Pf86Oz3/Ojs9/4OEhv////////////////////////////////////////////////////////////////////////////39/f7//////////////////////////////////////////zo7Pf86Oz3/Ojs9/zo7Pf85Ojz/e3x9/zo7Pf///////////////////////////////////////////////////////////9HR0f8dHiH/Ojs9/3N0df8rLS//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf//////////////////////////////////////o6Ok/zo7Pf86Oz3/Ojs9/zo7Pf85Oz3////////////////////////////////////////////////////////////////////////////9/f3+//////////////////////////////////////////86Oz3/Ojs9/zo7Pf86Oz3/Ojs9//////86Oz3/7u/v///////////////////////////////////////////////////////R0dH/HR4h/zo7Pf9zdHX/Ky0v/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3//////////////////////////////////////0FCRP86Oz3/Ojs9/zo7Pf86Oz3/MzQ2/////////////////////////////////////////////////////////////////////////////f39/v//////////////////////////////////////////Jigq/zo7Pf86Oz3/Ojs9/zo7Pf+4uLn/Ojs9/1tcXf//////////////////////////////////////////////////////0dHR/x0eIf86Oz3/c3R1/ystL/86Oz3/Ojs9/zo7Pf86Oz3/Ojs9//////////////////////////////////////87PD7/Ojs9/zo7Pf86Oz3/Ojs9/zM0Nv////////////////////////////////////////////////////////////////////////////39/f7//////////////////////////////////////////3R1dv86Oz3/Ojs9/zo7Pf86Oz3/MjM1/0BBQ/8sLS///////////////////////////////////////////////////////9HR0f8dHiH/Ojs9/3N0df8rLS//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf9iYmT////////////////////////////W1tb/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf80NTf////////////////////////////////////////////////////////////////////////////9/f3+///////////////////////////////////////////6+vr/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf//////Ojs9///////////////////////////////////////////////////////R0dH/HR4h/zo7Pf9zdHX/Ky0v/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf8uLzL/3d7e/9zc3P8lJyn/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/aWlr/////////////////////////////////////////////////////////////////////////////f39/v///////////////////////////////////////////////zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Jygq/x4fIf//////////////////////////////////////////////////////0dHR/x0eIf86Oz3/c3R1/ystL/86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9//f39/////////////////////////////////////////////////////////////////////////////39/f7///////////////////////////////////////////////8tLzH/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf//////Ozw+/////////////////////////////////////////////////9HR0f8dHiH/Ojs9/3N0df8rLS//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf/////////////////////////////////////////////////////////////////////////////////9/f3+/////////////////////////////////////////////////////zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/MDEz/93d3v/////////////////////////////////////////////////R0dH/HR4h/ywtL//Q0NH/7+/v/xkaHf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf8uLzL//////////////////////////////////////////////////////////////////////////////////f39/v////////////////////////////////////////////////////85Ojz/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf/l5eb/k5OU////////////////////////////////////////////0dHR/////////////v7+///////b29z//////62urv83ODr/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3///////////////////////////////////////////////////////////////////////////////////////39/f7/////////////////////////////////////////////////////2dnZ/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/////////////////////////////////////////////////8/P0P//////////////////////1NTU//////+IiYr///////////8vMDL/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/yMjJ///////////////////////////////////////////////////////////////////////////////////////9/f3+//////////////////////////////////////////////////////////88PT//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf83ODr////////////////////////////////////////////5+fn///////n5+f//////qamq///////39/f/6erq//////9gYWP///////////+VlZb/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf8yMzX/+/v7/////////////////////////////////////////////////////////////////////////////////////////////f39/v///////////////////////////////////////////////////////////////zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/yMkJv////////////////////////////////////////////////9VVlj//////7m5uv//////KSot///////l5eb//v7+//////9lZmf/+/v7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/f7///////////////////////////////////////////////////////////////89P0D/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Gxwf/////////////////////////////////////////////////zU2OP//////3t7e////////////ra2t//////9wcXP/4uPj//////9wcXP/rKyt///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3+/////////////////////////////////////////////////////////////////////zU2OP86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf8tLjD/////////////////////////////////////////////////Ojs9/8TExf//////gYKC//////9wcHL/19fX//////84OTv/3Nzc//////+EhIX//////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39/v//////////////////////////////////////////////////////////////////////////Ozw+/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zk6PP////////////////////////////////////////////////86Oz3/Li8x//////+Ki4v///////////8nKCv//f39///////6+vr///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/f7///////////////////////////////////////////////////////////////////////////////86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/5OUlv///////////////////////////////////////////zw9P/86Oz3///////////9FRkf///////T09P///////////////////////////////////////////////////////////8vLzP/////////////////////////////////////////////////////////////////9/f3+/////////////////////////////////////////////////////////////////////////////////////zs8Pv86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9//Pz8////////////////////////////////////////////////////////////+Dg4P//////////////////////////////////////////////////////+/z8/0FCQ////////////////////////////////////////////////////////////////////////f39/v//////////////////////////////////////////////////////////////////////////////////////////NTY4/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/NTY4/97e3v/////////////////////////////////////////////////////////////////////////////////////////////////x8fH/Kywu/6anqP////////////////////////////////////////////////////////////////////////////39/f7///////////////////////////////////////////////////////////////////////////////////////////////87PT//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zM0Nv/6+vr//////////////////////////////////////////////////////////////////////zo8Pf9BQkT/Ojs9///////////////////////////////////////////////////////////////////////////////////////9/f3+//////////////////////////////////////////////////////////////////////////////////////////////////////////88PT//Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/LS4w/ywtL/9sbG7/np+g/6Chof94eHr/MDEz/ycoKv86Oz3/Ojs9/zo7Pf86Oz3/Ozw+/////////////////////////////////////////////////////////////////////////////////////////////f39/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////9HR0v85Ojz/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf8tLzH///////////////////////////////////////////////////////////////////////////////////////////////////////39/f7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7+/v8tLjD/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/OTo8/4WGh//////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3+///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4+Pj/b3Bx/ycpK/86Oz3/Ojs9/zo7Pf86Oz3/Ojs9/zo7Pf86Oz3/ODk7/y0uMP/S0tL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/f7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/f7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3+///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8/Pz9AAAAACcnJyf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8+Pj4+AAAAAAAAAAAAAAAAJycnJ//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////u7u7vAAAAAAAAAAAAAAAAAAAAAAAAAAD9/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+/f39/v39/f79/f3+r6+vsAAAAAAAAAAA4AAAAAAAAAPAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAcAAAAAAAAAD4AAAAAAAAAM=");\r\n}\r\n/* M浏览器 */\r\n#android-browser-list li:nth-child(8)::before {\r\n	background: url("data:image/png;base64,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");\r\n}\r\n/* 狐猴浏览器 */\r\n#android-browser-list li:nth-child(9)::before {\r\n	background: url("data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP95AAD/eAAC/3oALf98AIP/fQDE/38A5v+AAPb/ggD9/oQA//6GAP/+hwD//okA//6LAP/+jQD//o8A//6QAP/+kgD//pQA//6WAP/+mAD//pkA/f6bAPb+nQDm/p8AxP6hAIP+owAt/qUAAv6kAAAAAAAAAAAAAAAAAAD/cQAA/2kADP94AHP/ewDe/3wA/v9+AP//gAD//4IA//+EAP/+hgD//ocA//6JAP/+iwD//o0A//6OAP/+kAD//pIA//6UAP/+lgD//pcA//6ZAP/+mwD//p0A//6fAP/+oAD//qIA/v6kAN7+pgBz/qgADP6oAAAAAAAA//v4AP///wz/tHCU/4cX+/98Af//fAD//38A//+CAP//hAD//oUA//6HAP/+iQD//osA//6NAP/+jgD//pAA//6SAP/+lAD//pYA//6XAP/+mQD//psA//6dAP/+nwD//qAA//6iAP/+pAD//qYA//6oAPv9qgCU/awADP2rAAD//voA////c//79/v/5s///8SK//+kSP//jxv//4YF//6EAP/+hQD//ogA//6KAP//jQD//48A//+RAP//kwD//5QA//6WAP/+mAD//pkA//6bAP/+nQD//p8A//6gAP/+ogD//qQA//6mAP/+qAD//akA//2rAPv9rQBz/3wAAP///y3////d//////////////////v3///t2v//2a///8SC//+zW///pz3//J0o/+qJDP/riAf/74wG//OPBf/2kgT/+JUD//qYAv/9mwH//54A//+hAP//ogD//qIA//6kAP/+pgD//qgA//6pAP/9qwD//a0A//2vAN39sAAt////g/////7///////////////////////////////////////79///79f/68OT/gnVk/0k6Jf9TQSj/WUUo/19IJ/9mTCb/bFAk/3ZWI/+KYh//rXYX/9iPDP/4ogP//6cA//6oAP/+qQD//asA//2tAP/9rwD//bEA/v2yAIP////D///////////////////////////////////////////////////////////U1db/YmNk/zI0Nf8oKSv/KCkr/yorLf8qKy7/KSsu/yorLv8tLi7/Pzgs/3NXI//IiRD/+6kC//6sAP/9rQD//a8A//2xAP/9sgD//bQAw////+X////////////////////////////////////////////////////////////////y8vL/ycnJ/5mZmf9VVVX/LS0t/y0tLf8tLS3/LS0t/y0tLf8sLC3/Kisu/zo2Lf+UbRz/86gE//6wAP/9sQD//bIA//20AP/9tgDl////9f///////////////////////////////////////////////////////////////////////////////+np6f97e3v/LS0t/y0tLf8tLS3/LS0t/y0tLf8tLS3/LCwt/y4uLv+GZh//9awD//6zAP/9tAD//bYA//24APX////8/////////////////////////////////////////////////////////////////////////////////////+vr6/9bW1v/Kysr/y0tLf8tLS3/LS0t/y0tLf8tLS3/LC0t/zAvLf+kexj//rUA//22AP/9uAD//boA/P///////////////////////////////////////////////////////////////////////////////////////////////6ysrP8vLy//LS0t/y0tLf8tLS3/LS0t/y0tLf8tLS3/Kywt/0pBKf/hpAj//7kA//26AP/9uwD////////////////////////////////////////////+/v7/////////////////////////////////////////////////4+Pj/0dHR/8rKyv/LS0t/y0tLf8tLS3/LS0t/y0tLf8tLS3/LS0u/6mBFf//vAD//bsA//29AP////////////////////////////f39//AwMD/h4eH/3Z2dv+Kior/vb29//Ly8v/////////////////////////////////8/Pz/c3Nz/yoqKv8tLS3/LS0t/y0tLf8tLS3/LS0t/y0tLf8pKi7/hGkc//68AP/9vQD//b8A///////////////////////w8PD/goKC/zQ0NP8pKSn/KSkp/ykpKf8yMjL/YmJi/76+vv/6+vr///////////////////////////+vr6//Li4u/y0tLf8tLS3/LS0t/y0tLf8tLS3/LS0t/yssLv+cehf//78A//2/AP/9wQD//////////////////Pz8/46Ojv8sLCz/LCws/y0tLf8tLS3/LS0t/y0tLf8qKir/NjY2/4SEhP/o6Oj//////////////////////+7u7v9hYWH/KSkp/y0tLf8tLS3/LS0t/yssLf8tLS3/blog/+mwBf/+wAD//cEA//3DAP/////////////////V1dX/Pj4+/ywsLP8tLS3/LS0t/y0tLf8sKyv/LCsq/ywrKv8sKir/Kysr/2FiYv/c3Nz//////////////////////9fX1/9cXFz/LCws/ykqKv8qKy3/Qzwo/5h3F//uswT//sAA//3BAP/9wwD//cQA/////////////////6Ojo/8rKyv/LS0t/y0tLf8tLS3/LSws/zdJUf9IfZL/SX+V/zhNVv8tLCz/Kioq/15eXv/m5ub//////////////////////+np6f+goaP/cGxf/4htIf/Xogj//b4A//7AAP/9wQD//cMA//3EAP/9xgD/////////////////jY2N/yoqKv8tLS3/LS0t/ywrK/83SVH/XLfb/2fW//9jzvf/W7ba/zlPWP8sKyv/Kioq/4uLi//+/v7////////////////////////yzP/7ykP//bwC//+/AP/9vwD//cEA//3DAP/9xAD//cYA//3IAP////////////////+RkZH/Kioq/y0tLf8tLS3/LCsq/0l9kv9n1///YMXu/y5RX/84aX3/SoKY/y0sK/8rKyv/UFBQ/+3t7f/////////////////+67f//cMj//27AP/9vQD//b8A//3BAP/9wwD//cQA//3GAP/9yAD//coA/////////////////6ioqP8sLCz/LS0t/y0tLf8sKyr/SX+U/2fX//9fxOz/K0lV/zVidP9KhJr/LSws/ysrK/9OTk7/7Ozs/////////////+/F//3DIv/9uwD//b0A//2/AP/9wQD//cMA//3EAP/9xgD//cgA//3KAP/9zAD/////////////////zc3N/zc3N/8sLCz/LS0t/ywrK/84TVX/Xrzh/2fW//9iyvP/XLfc/zpTXf8sKyv/Kioq/4iIiP/9/f3////////45f/9yjz//boA//29AP/9vwD//cEA//3DAP/9xAD//cYA//3IAP/9ygD//cwA//3NAP/////////////////y8vL/Xl5e/yoqKv8tLS3/LS0t/y0tLP85T1j/TIae/02Jof86VF7/LS0t/yoqKv9nZ2f/6Ojo//////////7//tt7//27AP/9vQD//b8A//3BAP/9wwD//cQA//3GAP/9yAD//coA//3MAP/9zQD//c8A//////z///////////////+tra3/MDAw/y0tLf8tLS3/LS0t/ywrK/8sKyv/LSwr/ysqKf8uLi7/cXFx/+Xl5f/////////////xzP/9whn//b0A//2/AP/9wQD//cMA//3EAP/9xgD//cgA//3KAP/9zAD//c0A//3PAP/80QD8////9f////////////////Pz8/9ubm7/Kioq/y0tLf8tLS3/LS0t/ywsLP8qKir/Q0ND/5ubm//y8vL//////////////vr//tZl//28AP/9vwD//cEA//3DAP/9xAD//cYA//3IAP/9ygD//cwA//3NAP/9zwD//NEA//zTAPX////l/////////////////////9/f3/9iYmL/LS0t/yoqKv8sLCz/QkJC/4ODg//X19f//v7+//////////////////7st//9wRD//b8A//3BAP/9wwD//cQA//3GAP/9yAD//coA//3MAP/9zQD//c8A//zRAP/80wD//NQA5f///8P//////////////////////////+vr6/+rq6v/jo6O/6enp//b29v//Pz8////////////////////////+OX//c07//2+AP/9wQD//cMA//3EAP/9xgD//cgA//3KAP/9zAD//c0A//3PAP/80QD//NMA//zVAP/81gDD////g/////7///////////////////////////////////////////////////////////////////////z1//7YZ//9vwD//cEA//3DAP/9xAD//cYA//3IAP/9ygD//cwA//3NAP/9zwD//NEA//zTAP/81QD//NYA/vzYAIP///8t////3f/////////////////////////////////////////////////////////////////9+P/+3n///cAG//3BAP/9wwD//cQA//3GAP/9yAD//coA//3MAP/9zQD//c8A//zRAP/80wD//NUA//zWAP/82ADd/NkALf///wD///9z////+////////////////////////////////////////////////////////PP//t18//3BCP/9wAD//cMA//3EAP/9xgD//cgA//3KAP/9zAD//c0A//3PAP/80QD//NMA//zVAP/81gD//NgA+/zZAHP8xwAA////AP///wz///+U////+/////////////////////////////////////////////fe//7WXv/9wAX//cEA//3DAP/9xAD//cYA//3IAP/9ygD//cwA//3NAP/9zwD//NEA//zTAP/81QD//NYA//zYAPv82QCU/NoADPzaAAAAAAAA////AP///wz///9z////3v////7///////////////////////vx//7no//9yS7//b8A//3BAP/9wwD//cQA//3GAP/9yAD//coA//3MAP/9zQD//c8A//zRAP/80wD//NUA//zWAP782ADe/NkAc/zaAAz82gAAAAAAAAAAAAAAAAAA////AP///wL///8t////g////8T////m//799v/vwv3+0VL//b8J//2+AP/9wQD//cMA//3EAP/9xgD//cgA//3KAP/9zAD//c0A//3PAP/80QD9/NMA9vzUAOb81gDE/NgAg/zZAC382wAC/NoAAAAAAAAAAAAA4AAAB8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA+AAAAc=");\r\n}\r\n/* Gear */\r\n#ios-browser-list li:nth-child(2)::before {\r\n	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAABaFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////dKircKSnYKSn30dH51tb2xsb63Nz1wsLWKCjKJib75+f74eHQJyf0t7fwnJzTKCj3zMz+9vb98fHEKir86ur2zMzzsrL0vLz0tbXjSkrNJib87OzxqKjrfn70urrAJCS6IyP1vb3vnJztkJD/+vrxrKzxpaXQTU3gOjreLi7EJCT//Pz++Pj75OT32dn3yMjulZXsjIzpcHDlV1fGOTm8LS3RJyf539/zrq7wn5/rmprnZmbhQEDdMzP409PwoaHmnp7ok5PshobffHzpdXXUVlbNR0fiRkbIJSX98/P1v7/zv7/wu7vqrq7ro6PvmZnki4vhgoLfcnLYYmLmXV34zs7utLTmjo7ZaWnYSEi0IiKzIiKvIiKS+5rSAAAAGnRSTlMA94/f+/Tr6dbSzsCsqGtTTUM7NxkTBFreWXyFh3sAAAQOSURBVGjexZppV9pAFIYTKChurbXF9kYghrUSCjQNm+wKFUGx7rtVu+97/34nbEkFkxhyT5+vnPM+szBJZu5Q/dyfnrJMjjse2G30LdDBLdpmf+AYn7RMTd+nNLlrGYUhGLXcVUt3PhyDoRl76Lwu/44VTMF6Z2D8vQkwjYl7/fkzI2AiIzNX82/TYCr07Sv5YDr/GGZoMB16RjG/I4DAiDzTE4DCRO//D0h01oPTCkhY22t6FtCYbQnGAI2x1vMTEJGerRZAxEIEo4DIKHl/ASr3qWlAZZqaAlSmsOZYnuVJQGWSGgdUxikH3IDI13gylz/OJV/PPwNdOCgr6CSxtbY353J5vQtB0Ucof3yjQ2Kl7KCL7BdmjsSTdF+l/PHoW+zgzbsPP05roIGdsoEOihcMySfx4uX5BzbgT0R4no9E/bV3R1FQxUbRoIlnnWnnB33NY7dnPuCPRggJvz8w70m/VR0omtL+vn2/LOW7XAti5RMXkwSkC4RWvjvGJjfVvowp0IBfYzr5vsffOTbcMRBIfkvACWoGSiv/Syt/juQ3d0JZjo25iYEoCO18lsuma4YFhV2mJZDafxwPPeFIH4iBKAgejzscZrknobhQMypIdfK9Yua0WIxLXSB9IAoJtzsm5RNBzGgP0kxngIKVF4clImgbwm4JqfksJ3XgAAwKoku9AdqoHyaTxTjniUb4AlkCtbAU327/PBgVpJgWZAFkPtdzh0kuqpgdf5jjpHxhBYwKVpblDuTrue0rLS14nmSFkBAFYwK5A2QGMuVGfrs/KRCKpxNgWPBsvztCvsVPjfygkfCnX4JxQZrpCBYuN1Inq6CCMcFZVxCsNFP5qvmCi+4UiJnz1CqYLogwHYFXXCyfRcwXrPYEvsUXJ2C+QFAKSgiCpEJQ3kIQ5BSC8xD0U37c42hYQTMO/fx8Tgi22BluiMTMxjb089TVw5BAYORH0Z/GIEH7Z4ncMH9TxvW88vvzQEGPR8MsNIY8rRc3Ns0XwIViEn7tIAjOugLShUyTN1+Q7gm8wcvKqfmCZ/sKgyi+NV0AqZ6AfFcv7L82USC/9LsfRoS5RtVUgdwFYmizLhSgCx9aGk4gf3gpWTopsptRz6vkGpmg4QWQZlQwQwApbEFhF1kA/DqaQN5CaVNSEWhvAuvLGvF7gtomkAZNDlSHaTnPq25jbaBNtbR3besbKxobcTvooSqsD2r82qsqqGPXfxjiL+0uKdf0bp19CZo8uNlxTmJ1q/Q+v72VDQdAHw70Ayn0IzX0Q0H0Y030g1n0o2Xsw3H04330AgV2iQW7SPQQvcyFXajDLjXiF0vxy734BWv8kjv+pQH8aw/4FzdknLNmXD2Zdf6XyzP913+sN7n+Y732+s9feZ65wtLu860AAAAASUVORK5CYII=");\r\n}\r\n';
  const beautifyFeedbackCSS = "";
  const GreasyforkBeautify = {
    init() {
      PopsPanel.execMenuOnce("beautifyPage", () => {
        return this.beautifyPageElement();
      });
      PopsPanel.execMenuOnce("beautifyGreasyforkBeautify", () => {
        return this.beautifyGreasyforkBeautify();
      });
      PopsPanel.execMenuOnce("beautifyUploadImage", () => {
        return this.beautifyUploadImage();
      });
      PopsPanel.execMenuOnce("beautifyTopNavigationBar", () => {
        return this.beautifyTopNavigationBar();
      });
    },
    /**
     * 美化页面元素，包括Markdown
     */
    beautifyPageElement() {
      log.info("美化页面元素");
      let result = [];
      result.push(addStyle(beautifyMarkdownCSS));
      result.push(addStyle(beautifyButtonCSS));
      result.push(addStyle(beautifyRadioCSS));
      result.push(addStyle(beautifyInputCSS));
      result.push(addStyle(beautifyTextAreaCSS));
      result.push(
        addStyle(
          /*css*/
          `
			p:has(input[type="submit"][name="update-and-sync"]){
			  margin-top: 10px;
			}
			`
        )
      );
      domUtils.ready(() => {
        let $markupChoice = $(
          'a[target="markup_choice"][href*="daringfireball.net"]'
        );
        if ($markupChoice) {
          $markupChoice.parentElement.replaceChild(
            domUtils.createElement("span", {
              textContent: "Markdown"
            }),
            $markupChoice
          );
        }
        $$(".user-content ul li").forEach(($li) => {
          var _a2, _b;
          let $first = $li.firstChild;
          if (($first == null ? void 0 : $first.nodeName) === "#text") {
            if ((_a2 = $first.textContent) == null ? void 0 : _a2.startsWith("[x] ")) {
              $first.textContent = $first.textContent.replace("[x] ", "");
              domUtils.prepend(
                $li,
                /*html*/
                `
							<input type="checkbox" disabled="" class="task-list-item-checkbox" checked="">
						`
              );
            } else if ((_b = $first.textContent) == null ? void 0 : _b.startsWith("[ ] ")) {
              $first.textContent = $first.textContent.replace("[ ] ", "");
              domUtils.prepend(
                $li,
                /*html*/
                `
							<input type="checkbox" disabled="" class="task-list-item-checkbox">
						`
              );
            }
          }
        });
        let warningListMap = {
          "[!NOTE]": (
            /*html*/
            `
					<p class="markdown-alert-title" data-type="NOTE">
						<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16">
							<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
						</svg>Note
					</p>
				`
          ),
          "[!TIP]": (
            /*html*/
            `
					<p class="markdown-alert-title" data-type="TIP">
						<svg class="octicon octicon-light-bulb mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
							<path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
						</svg>Tip
					</p>
				`
          ),
          "[!IMPORTANT]": (
            /*html*/
            `
					<p class="markdown-alert-title" data-type="IMPORTANT">
						<svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
						</svg>Important
					</p>
				`
          ),
          "[!WARNING]": (
            /*html*/
            `
					<p class="markdown-alert-title" data-type="WARNING">
						<svg class="octicon octicon-alert mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
						</svg>Warning
					</p>
				`
          ),
          "[!CAUTION]": (
            /*html*/
            `
					<p class="markdown-alert-title" data-type="CAUTION">
						<svg class="octicon octicon-stop mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
						</svg>Caution
					</p>
				`
          )
        };
        let warningList = Object.keys(warningListMap);
        $$(".user-content blockquote").forEach(($blockQuote) => {
          Array.from($blockQuote.children).forEach(($child) => {
            let htmlStr = domUtils.html($child);
            if ($child.nodeName === "P") {
              let findValue = warningList.find((value) => {
                return htmlStr.toLowerCase().startsWith(value.toLowerCase());
              });
              if (findValue) {
                domUtils.html(
                  $child,
                  htmlStr.replace(findValue, "")
                );
                domUtils.before(
                  $child,
                  warningListMap[findValue]
                );
                if (domUtils.html($child) === "") {
                  $child.remove();
                }
              }
            }
          });
        });
        $$(".user-content > blockquote").forEach(($blockQuote) => {
          Array.from(
            $blockQuote.querySelectorAll(".markdown-alert-title")
          ).forEach(($markdownAlertTitle) => {
            var _a2, _b;
            let $markdownAlert = domUtils.createElement(
              "div",
              {
                className: "markdown-alert markdown-alert-tip"
              },
              {
                "data-type": $markdownAlertTitle.getAttribute("data-type")
              }
            );
            while ($markdownAlertTitle.nextSibling) {
              if ((_b = (_a2 = $markdownAlertTitle.nextSibling) == null ? void 0 : _a2.classList) == null ? void 0 : _b.contains("markdown-alert-title")) {
                break;
              }
              domUtils.append(
                $markdownAlert,
                $markdownAlertTitle.nextSibling
              );
            }
            domUtils.prepend($markdownAlert, $markdownAlertTitle);
            domUtils.before($blockQuote, $markdownAlert);
          });
        });
        if (GreasyforkRouter.isHome()) {
          result.push(addStyle(beautifyHomeCSS));
        } else if (GreasyforkRouter.isScriptsFeedback()) {
          result.push(addStyle(beautifyFeedbackCSS));
          let $noRating = document.querySelector(
            '.radio-label[for*="discussion_rating_0"]'
          );
          if ($noRating) {
            $noRating.innerHTML = $noRating.innerHTML.replace(
              "不评分",
              '<span class="rating-icon rating-icon-none">不评分</span>'
            );
          }
          let $badRating = document.querySelector(
            '.radio-label[for*="discussion_rating_2"]'
          );
          if ($badRating) {
            $badRating.innerHTML = $badRating.innerHTML.replace(
              "差评",
              '<span class="rating-icon rating-icon-bad">差评</span>'
            );
          }
          let $okRating = document.querySelector(
            '.radio-label[for*="discussion_rating_3"]'
          );
          if ($okRating) {
            $okRating.innerHTML = $okRating.innerHTML.replace(
              "一般",
              '<span class="rating-icon rating-icon-ok">一般</span>'
            );
          }
          let $goodRating = document.querySelector(
            '.radio-label[for*="discussion_rating_4"]'
          );
          if ($goodRating) {
            $goodRating.innerHTML = $goodRating.innerHTML.replace(
              "好评",
              '<span class="rating-icon rating-icon-good">好评</span>'
            );
          }
        } else if (GreasyforkRouter.isScriptAdmin()) {
          if (!document.querySelector('input[type="submit"][name="update-only"]')) {
            result.push(
              addStyle(
                /*css*/
                `
					.indented{
						padding-left: unset;
					}
					`
              )
            );
          }
        }
      });
      return result;
    },
    /**
     * 美化 Greasyfork Beautify脚本
     */
    beautifyGreasyforkBeautify() {
      log.info("美化 Greasyfork Beautify脚本");
      let result = [];
      result.push(addStyle(compatibleBeautifyCSS));
      if (utils.isPhone()) {
        result.push(
          addStyle(
            /*css*/
            `
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
				}`
          )
        );
      } else {
        result.push(
          addStyle(
            /*css*/
            `
				section#script-info{
					margin-top: 10px;
				}`
          )
        );
      }
      return result;
    },
    /**
     * 美化上传图片
     */
    beautifyUploadImage() {
      log.info("美化上传图片");
      let result = [];
      result.push(addStyle(beautifyUploadImageCSS));
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
            log.info("选择的图片", chooseImageFiles);
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
            log.info("触发粘贴事件", event);
            setTimeout(() => {
              domUtils.trigger($fileInputList, "input");
            }, 100);
          });
        });
      });
      return result;
    },
    /**
     * 美化顶部导航栏
     */
    beautifyTopNavigationBar() {
      log.info("美化顶部导航栏");
      let result = [];
      result.push(addStyle(beautifyTopNavigationBarCSS));
      if (window.outerWidth > 550) {
        result.push(CommonUtil.addBlockCSS(".with-submenu"));
        domUtils.ready(() => {
          let $siteNav = $("#site-nav");
          let $siteNavNav = $siteNav.querySelector("nav");
          $$(".with-submenu nav li").forEach(($ele) => {
            $siteNavNav.appendChild($ele);
          });
        });
      }
      return result;
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
  const GreasyforkForum = {
    init() {
      this.readBgColor();
      domUtils.ready(() => {
        PopsPanel.execMenuOnce("greasyfork-discussions-filter-enable", () => {
          this.filterEnable();
        });
        let lockFn = new utils.LockFunction(() => {
          PopsPanel.execMenu("discussions-addShortcutOperationButton", () => {
            this.addShortcutOperationButton();
          });
          PopsPanel.execMenu("discussions-addReportButton", () => {
            this.addReportButton();
          });
        });
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          immediate: true,
          callback: () => {
            lockFn.run();
          }
        });
      });
    },
    /**
     * 启用Greasyfork论坛过滤器
     */
    filterEnable() {
      log.info("启用Greasyfork论坛过滤器");
      GreasyforkDiscussionsFilter.init();
    },
    /**
     * 设置已读背景颜色
     */
    readBgColor() {
      log.info("设置已读背景颜色");
      let color = PopsPanel.getValue("discussions-readBgColor");
      return addStyle(
        /*css*/
        `
        .discussion-read{
            background: ${color} !important;
        }
        `
      );
    },
    /**
     * 添加【过滤】按钮
     */
    addShortcutOperationButton() {
      log.info("添加【过滤】按钮");
      GreasyforkDiscussionsFilter.getElementList().forEach(($listContainer) => {
        if ($listContainer.querySelector(
          ".discussion-filter-button"
        )) {
          return;
        }
        let $listItem = $listContainer.querySelector(
          ".discussion-list-item"
        );
        let $meta = $listItem.querySelector(".discussion-meta");
        let $ownMetaItem = domUtils.createElement(
          "div",
          {
            className: "discussion-meta-item",
            innerHTML: `
					<button class="discussion-filter-button">${i18next.t("过滤")}</button>
					`
          },
          {
            style: "flex: 0;"
          }
        );
        let $button = $ownMetaItem.querySelector(
          ".discussion-filter-button"
        );
        $meta.appendChild($ownMetaItem);
        domUtils.on($button, "click", (event) => {
          var _a2, _b, _c;
          utils.preventEvent(event);
          const discussionInfo = GreasyforkDiscussionsFilter.parseDiscuessionListContainerInfo(
            $listContainer
          );
          let attr_filter_key = "data-filter-key";
          let attr_filter_value = "data-filter-value";
          let $dialog = __pops.alert({
            title: {
              text: i18next.t("选择需要过滤的选项"),
              position: "center",
              html: false
            },
            content: {
              text: (
                /*html*/
                `
								<button ${attr_filter_key}="scriptId" ${attr_filter_value}="^${discussionInfo.scriptId}$">${i18next.t("脚本id：{{text}}", {
                text: discussionInfo.scriptId
              })}</button>
								<button ${attr_filter_key}="scriptName" ${attr_filter_value}="^${utils.parseStringToRegExpString(
                discussionInfo.scriptName
              )}$">${i18next.t("脚本名：{{text}}", {
                text: discussionInfo.scriptName
              })}</button>
								<button ${attr_filter_key}="postUserId" ${attr_filter_value}="^${utils.parseStringToRegExpString(
                discussionInfo.postUserId
              )}$">${i18next.t("发布的用户id：{{text}}", {
                text: discussionInfo.postUserId
              })}</button>
							`
              ),
              html: true
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
            drag: true,
            dragLimit: true,
            width: "350px",
            height: "300px",
            style: (
              /*css*/
              `
						.pops-alert-content{
							display: flex;
							flex-direction: column;
							gap: 20px;
						}
						.pops-alert-content button{
							text-wrap: wrap;
							padding: 8px;
							height: auto;
							text-align: left;
						}
						`
            )
          });
          let $content = $dialog.$shadowRoot.querySelector(
            ".pops-alert-content"
          );
          if (discussionInfo.scriptId == null) {
            (_a2 = $content.querySelector(`button[${attr_filter_key}="scriptId"]`)) == null ? void 0 : _a2.remove();
          }
          if (discussionInfo.scriptName == null) {
            (_b = $content.querySelector(`button[${attr_filter_key}="scriptName"]`)) == null ? void 0 : _b.remove();
          }
          if (discussionInfo.postUserId == null) {
            (_c = $content.querySelector(`button[${attr_filter_key}="postUserId"]`)) == null ? void 0 : _c.remove();
          }
          if (discussionInfo.replyUserId != null) {
            let $replyUserIdButton = domUtils.createElement("button", {
              innerHTML: i18next.t("作者id：{{text}}", {
                text: discussionInfo.replyUserId
              })
            });
            $replyUserIdButton.setAttribute(attr_filter_key, "scriptAuthorId");
            $replyUserIdButton.setAttribute(
              attr_filter_value,
              "^" + discussionInfo.replyUserId + "$"
            );
            $content.appendChild($replyUserIdButton);
          }
          domUtils.on(
            $dialog.$shadowRoot,
            "click",
            `button[${attr_filter_key}]`,
            (event2) => {
              utils.preventEvent(event2);
              let $click = event2.target;
              let key = $click.getAttribute(
                attr_filter_key
              );
              let value = $click.getAttribute(attr_filter_value);
              GreasyforkDiscussionsFilter.addValue(key, value);
              $dialog.close();
              GreasyforkDiscussionsFilter.filter();
              Qmsg.success(i18next.t("添加成功"));
            }
          );
        });
      });
    },
    /**
     * 添加【举报】按钮
     */
    addReportButton() {
      log.info(`添加【举报】按钮`);
      GreasyforkDiscussionsFilter.getElementList().forEach(($listContainer) => {
        if ($listContainer.querySelector(".discussion-report-button")) {
          return;
        }
        let $listItem = $listContainer.querySelector(
          ".discussion-list-item"
        );
        let $meta = $listItem.querySelector(".discussion-meta");
        let $ownMetaItem = domUtils.createElement(
          "div",
          {
            className: "discussion-meta-item",
            innerHTML: `
					<button class="discussion-report-button" style="border-color: #ff4d4d;background-color: #ffe6e6;color: red;">${i18next.t(
            "举报"
          )}</button>
					`
          },
          {
            style: "flex: 0;"
          }
        );
        let $button = $ownMetaItem.querySelector(
          ".discussion-report-button"
        );
        $meta.appendChild($ownMetaItem);
        domUtils.on($button, "click", (event) => {
          utils.preventEvent(event);
          const discussionInfo = GreasyforkDiscussionsFilter.parseDiscuessionListContainerInfo(
            $listContainer
          );
          __pops.alert({
            title: {
              text: i18next.t("举报"),
              position: "center",
              html: false
            },
            content: {
              text: (
                /*html*/
                `
						<div class="report-item">
							${i18next.t("举报讨论：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
                "discussion",
                discussionInfo.snippetId
              )}" target="_blank">${discussionInfo.snippet}</a>
						</div>
						${discussionInfo.scriptId ? (
                /*html*/
                `
							<div class="report-item">
							${i18next.t("举报脚本：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
                  "script",
                  discussionInfo.scriptId
                )}" target="_blank">${discussionInfo.scriptName}</a>
						</div>
						`
              ) : ""}
						
						<div class="report-item">
							${i18next.t("举报用户：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
                "user",
                discussionInfo.postUserId
              )}" target="_blank">${discussionInfo.postUserName}</a>
						</div>
						${discussionInfo.replyUserId && discussionInfo.replyUserId != discussionInfo.postUserId ? (
                /*html*/
                `
								<div class="report-item">
									${i18next.t("举报用户：")}
									<a href="${GreasyforkUrlUtils.getReportUrl(
                  "user",
                  discussionInfo.replyUserId
                )}" target="_blank">${discussionInfo.replyUserName}</a>
								</div>
								`
              ) : ""}
							
								`
              ),
              html: true
            },
            btn: {
              ok: {
                enable: false
              }
            },
            mask: {
              enable: true,
              clickEvent: {
                toClose: true
              }
            },
            drag: true,
            dragLimit: true,
            width: "350px",
            height: "300px",
            style: (
              /*css*/
              `
							.pops-alert-content{
								display: flex;
								flex-direction: column;
								gap: 20px;
							}
							.pops-alert-content .report-item{
								text-wrap: wrap;
								padding: 8px;
								height: auto;
								text-align: left;
								margin: var(--button-margin-top) var(--button-margin-right)
								var(--button-margin-bottom) var(--button-margin-left);
								border-radius: var(--button-radius);
								color: var(--button-color);
								border-color: var(--button-bd-color);
   								background-color: var(--button-bg-color);
							}
							`
            )
          });
        });
      });
    }
  };
  const GreasyforkUsers = {
    init() {
      PopsPanel.execMenuOnce("users-changeConsoleToTopNavigator", () => {
        this.changeConsoleToTopNavigator();
      });
      PopsPanel.execMenuOnce("gf-scripts-filter-enable", () => {
        GreasyforkScriptsFilter.init();
      });
      PopsPanel.execMenuOnce("beautifyCenterContent", () => {
        return GreasyforkScriptsList.beautifyCenterContent();
      });
    },
    /**
     * 迁移【控制台】到顶部导航栏
     */
    changeConsoleToTopNavigator() {
      log.info("迁移【控制台】到顶部导航栏");
      CommonUtil.addBlockCSS("#about-user");
      domUtils.ready(() => {
        let $aboutUser = document.querySelector("#about-user");
        if (!$aboutUser) {
          log.error("#about-user元素不存在");
          return;
        }
        $aboutUser = $aboutUser.cloneNode(true);
        GreasyforkElementUtils.registerTopNavMenu({
          name: i18next.t("控制台"),
          className: "scripts-console",
          clickEvent(event) {
            let $dialog = __pops.alert({
              title: {
                text: i18next.t("控制台"),
                position: "center"
              },
              content: {
                text: "",
                html: true
              },
              btn: {
                ok: { enable: false }
              },
              mask: {
                enable: true,
                clickEvent: {
                  toClose: true
                }
              },
              drag: true,
              useShadowRoot: true,
              width: PanelUISize.setting.width,
              height: PanelUISize.setting.height,
              zIndex: utils.getMaxZIndex(100),
              style: (
                /*css*/
                `
						#about-user{
							border: 0;
							box-shadow: none;
						}
						#about-user a{
							color: #670000;
						}
						#about-user a:hover{
							color: #00a3f5;
						}
						.text-content{
							list-style-type: none;
							box-shadow: rgb(221, 221, 221) 0px 0px 5px;
							background-color: rgb(255, 255, 255);
							box-sizing: border-box;
							border-width: 1px;
							border-style: solid;
							border-color: rgb(187, 187, 187);
							border-image: initial;
							border-radius: 5px;
							margin: 14px 0px;
							padding: 10px 40px;
						}
						a.report-link{
							position: absolute;
							right: 0px;
							font-size: smaller;
							margin-right: 16px;
							margin-top: 8px;
						}
						.notification-widget{
							display: inline-block;
							width: 1.2em;
							height: 1.2em;
							text-align: center;
							line-height: 1.2em;
							padding: 0;
							background-color: #31708f;
							border-radius: 50%;
							color: #fff;
							text-decoration: none;
						}
						`
              )
            });
            let $content = $dialog.$shadowRoot.querySelector(
              ".pops-alert-content"
            );
            $content.appendChild($aboutUser);
          }
        });
      });
    }
  };
  const beautifyContentCSS = "section.text-content {\r\n	/*height: calc(100vh - 100px);*/\r\n	/*overflow-y: auto;\r\n	overflow-x: hidden;*/\r\n	background: #eaf0ff;\r\n}\r\n\r\n.comment .user-content {\r\n	border: 1px solid transparent;\r\n	background: #fff;\r\n	max-width: 70%;\r\n	border-radius: 10px;\r\n	width: fit-content;\r\n}\r\n\r\n.comment .comment-meta-spacer {\r\n	flex: unset;\r\n	margin-left: 15px;\r\n}\r\n.comment:not(:has(.report-link)) .comment-meta-spacer {\r\n	flex: unset;\r\n	margin-left: unset;\r\n	margin-right: 10px;\r\n}\r\n.comment:not(:has(.report-link)) {\r\n	display: flex;\r\n	align-items: flex-end;\r\n	flex-direction: column;\r\n}\r\n\r\n.comment:not(:has(.report-link)) .comment-meta {\r\n	display: flex;\r\n	flex-direction: row-reverse;\r\n}\r\n.comment:not(:has(.report-link)) .comment-meta-item {\r\n	margin-left: 0px;\r\n	margin-right: 15px;\r\n}";
  const GreasyforkConversations = {
    init() {
      PopsPanel.execMenuOnce("conversations-beautifyDialogBox", () => {
        return this.beautifyDialogBox();
      });
      domUtils.ready(() => {
        PopsPanel.execMenuOnce("conversations-beautifyPrivateMessageList", () => {
          this.beautifyPrivateMessageList();
        });
      });
    },
    /**
     * 美化对话框
     */
    beautifyDialogBox() {
      log.info("美化对话框");
      return addStyle(beautifyContentCSS);
    },
    /**
     * 美化私信列表
     */
    beautifyPrivateMessageList() {
      log.info(`美化私信列表`);
      addStyle(
        /*css*/
        `
		.user-conversations-item{
			list-style: none;
			border: 1px solid #bfbfbf;
			border-radius: 4px;
			display: flex;
			gap: 10px;
			flex-direction: column;
			padding: 4px 20px;
			margin: 10px 0px;
		}
		.user-conversations-item .user-link-container{

		}
		.user-conversations-item .user-link-container .user-latest-send-time{
			float: right;
		}
		.user-conversations-item .enter-coversations{
			float: right;
		}
		`
      );
      document.querySelectorAll("section.text-content ul li").forEach(($li) => {
        var _a2;
        let $user = $li.querySelector(
          'a[href*="conversations"]'
        );
        let chatUrl = $user.href;
        let userName = (_a2 = $user.textContent) == null ? void 0 : _a2.split(" ")[1];
        let $latestMsgUser = $li.querySelector("a.user-link");
        let latestSendMsgUser = null;
        let latestSendMsgUserHomeUrl = null;
        let latestSendMsgTimeText = null;
        if ($latestMsgUser) {
          latestSendMsgUser = $latestMsgUser.textContent;
          latestSendMsgUserHomeUrl = $latestMsgUser.href;
          let $relativeTime = $li.querySelector("relative-time");
          new Date($relativeTime.getAttribute("datetime"));
          latestSendMsgTimeText = $relativeTime.shadowRoot.lastChild.textContent;
        }
        $li.classList.add("user-conversations-item");
        GreasyforkUrlUtils.getUserId();
        $li.innerHTML = /*html*/
        `
			<div class="user-link-container">
				<a class="user-link" href="${chatUrl}">${userName}</a>
				<span class="user-latest-send-time">${latestSendMsgTimeText}</span>
			</div>
			<div class="latest-send-user-container">
				${i18next.t("最后回复：")}
				<a href="${latestSendMsgUserHomeUrl}">${latestSendMsgUser}</a>
				<a class="enter-coversations" href="${chatUrl}">${i18next.t("进入")}</a>
			</div>
			`;
      });
    }
  };
  const GreasyforkScriptsSearchElement = {
    /**
     * 等待脚本列表元素
     */
    waitScritList() {
      return utils.waitNode("#browse-script-list", 1e4);
    },
    /**
     * 添加控制区域
     */
    addFilterControls($scriptList) {
      function getControls() {
        let $el = $("#gm-script-filter-controls");
        if (!$el) {
          return;
        }
        let shadowRoot2 = $el == null ? void 0 : $el.shadowRoot;
        if (!shadowRoot2) {
          return;
        }
        let $filterControl2 = shadowRoot2.querySelector(
          ".pops-filter-controls_inner"
        );
        let $search2 = shadowRoot2.querySelector(
          ".pops-filter-search-container"
        );
        if ($filterControl2 && $search2) {
          return {
            $filterControl: $filterControl2,
            $search: $search2
          };
        }
      }
      let $controls = getControls();
      if ($controls) {
        return $controls;
      }
      let $controlsContainer = domUtils.createElement("div", {
        id: "gm-script-filter-controls"
      });
      let shadowRoot = $controlsContainer.attachShadow({ mode: "open" });
      shadowRoot.appendChild(
        domUtils.createElement("style", {
          innerHTML: (
            /*css*/
            `
                    ${__pops.config.cssText.index}

                    ${__pops.config.cssText.common}

                    ${__pops.config.cssText.panelCSS}
                `
          )
        })
      );
      shadowRoot.appendChild(
        domUtils.createElement("style", {
          innerHTML: (
            /*css*/
            `
                .pops{
					display: flex;
					flex-direction: column;
					gap: 10px;
					padding: 10px;
                }
				.pops-filter-controls_inner{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    gap: 10px;
					flex-wrap: wrap;
				}
                .pops .gm-script-control-item{
                    display: flex;
                    align-items: center;
                    gap: 10px;
					width: 150px;
                }
                .pops .pops-panel-item-left-main-text{
                    display: flex;
                    align-items: center;
                    margin: 0px;
                    padding: 0px;
                }
				.pops .pops-panel-item-left-desc-text{
					line-height: normal;
					margin-top: 6px;
					font-size: 0.8em;
					color: rgb(108, 108, 108);
				}
				.gm-script-search-input{
					display: flex;
					align-items: center;
					gap: 20px;
				}
            `
          )
        })
      );
      let $pops = domUtils.createElement("div", {
        className: "pops pops-filter-controls-container",
        innerHTML: (
          /*html*/
          `
				<div class="pops-filter-search-container"></div>
				<div class="pops-filter-controls_inner"></div>
			`
        )
      });
      let $filterControl = $pops.querySelector(
        ".pops-filter-controls_inner"
      );
      let $search = $pops.querySelector(
        ".pops-filter-search-container"
      );
      shadowRoot.appendChild($pops);
      domUtils.before($scriptList, $controlsContainer);
      return { $filterControl, $search };
    }
  };
  const GreasyforkScriptsSearch = {
    init() {
      domUtils.ready(() => {
        GreasyforkScriptsSearchElement.waitScritList().then(($scriptList) => {
          if (!$scriptList) {
            log.error("未找到脚本列表节点，无法继续执行");
            return;
          }
          PopsPanel.onceExec("GreasyforkScriptsSearch", () => {
            let { $filterControl, $search } = GreasyforkScriptsSearchElement.addFilterControls($scriptList);
            this.addFilterControlsItem($search, $filterControl);
          });
        });
      });
    },
    /**
     * 添加过滤项
     */
    addFilterControlsItem($search, $filterControlsContainer) {
      let panelHandleContentUtils = __pops.config.panelHandleContentUtils();
      let controlsConfig = [
        {
          name: i18next.t("名称"),
          desc: i18next.t("全词匹配"),
          ENABLE_KEY: "gf-script-search-filterScriptTitleWholeWordMatching",
          STORAGE_KEY: "gf-script-search-filterScriptTitleWholeWordMatching-enable",
          callback: (searchText, scriptInfo) => {
            try {
              return !scriptInfo.scriptName.match(new RegExp(searchText, "i"));
            } catch (error) {
              log.error(error);
              return !scriptInfo.scriptName.match(searchText);
            }
          },
          mutualExclusionSwitch: [
            `.gm-script-control-item[data-storage-key="gf-script-search-filterScriptTitleOrDescWholeWordMatching-enable"]`
          ]
        },
        {
          name: i18next.t("描述"),
          desc: i18next.t("全词匹配"),
          ENABLE_KEY: "gf-script-search-filterScriptDescWholeWordMatching",
          STORAGE_KEY: "gf-script-search-filterScriptDescWholeWordMatching-enable",
          callback: (searchText, scriptInfo) => {
            try {
              return !scriptInfo.scriptDescription.match(
                new RegExp(searchText, "i")
              );
            } catch (error) {
              return !scriptInfo.scriptDescription.match(searchText);
            }
          },
          mutualExclusionSwitch: [
            `.gm-script-control-item[data-storage-key="gf-script-search-filterScriptTitleOrDescWholeWordMatching-enable"]`
          ]
        },
        {
          name: i18next.t("名称/描述"),
          desc: i18next.t("任一全词匹配"),
          ENABLE_KEY: "gf-script-search-filterScriptTitleOrDescWholeWordMatching",
          STORAGE_KEY: "gf-script-search-filterScriptTitleOrDescWholeWordMatching-enable",
          callback: (searchText, scriptInfo) => {
            let isFilterNameFlag = controlsConfig.find(
              (it) => it.ENABLE_KEY === "gf-script-search-filterScriptTitleWholeWordMatching"
            ).callback(searchText, scriptInfo);
            let isFilterDescFlag = controlsConfig.find(
              (it) => it.ENABLE_KEY === "gf-script-search-filterScriptDescWholeWordMatching"
            ).callback(searchText, scriptInfo);
            return isFilterNameFlag && isFilterDescFlag;
          },
          mutualExclusionSwitch: [
            `.gm-script-control-item[data-storage-key="gf-script-search-filterScriptTitleWholeWordMatching-enable"]`,
            `.gm-script-control-item[data-storage-key="gf-script-search-filterScriptDescWholeWordMatching-enable"]`
          ]
        },
        {
          name: i18next.t("作者名称"),
          desc: i18next.t("全词匹配"),
          ENABLE_KEY: "gf-script-search-filterScriptAuthorNameWholeWordMatching",
          STORAGE_KEY: "gf-script-search-filterScriptAuthorNameWholeWordMatching-enable",
          callback: (searchText, scriptInfo) => {
            try {
              return !scriptInfo.scriptAuthorName.match(
                new RegExp(searchText, "i")
              );
            } catch (error) {
              return !scriptInfo.scriptAuthorName.match(searchText);
            }
          }
        }
      ];
      let querySearchText = () => {
        var _a2, _b;
        let $ownSearchInput = $search.querySelector("input");
        if ($ownSearchInput) {
          return $ownSearchInput.value;
        }
        let searchParams = new URLSearchParams(window.location.search);
        let searchText = ((_a2 = searchParams.get("q")) == null ? void 0 : _a2.trim()) || ((_b = searchParams.get("c")) == null ? void 0 : _b.trim()) || "";
        return searchText;
      };
      let execTotalFilter = () => {
        let searchText = querySearchText();
        let allScriptsList = GreasyforkScriptsFilter.getElementList();
        allScriptsList.forEach(($scriptList) => {
          let scriptInfo = parseScriptListInfo($scriptList);
          let fitlerFlagList = controlsConfig.map((controlsConfig2) => {
            if (searchText == "") {
              return false;
            }
            let enable = _GM_getValue(controlsConfig2.STORAGE_KEY);
            if (!enable) {
              return;
            }
            return controlsConfig2.callback(searchText, scriptInfo);
          }).filter((item) => typeof item === "boolean");
          if (fitlerFlagList.length !== 0) {
            let flag = false;
            fitlerFlagList.forEach((enable) => {
              flag = flag || enable;
            });
            if (flag) {
              domUtils.hide($scriptList, false);
            } else {
              domUtils.show($scriptList, false);
            }
          } else {
            domUtils.show($scriptList, false);
          }
        });
      };
      if (PopsPanel.getValue("gf-script-search-addFilterSearchInput")) {
        let $searchInner = panelHandleContentUtils.createSectionContainerItem_input({
          type: "input",
          className: "gm-script-search-input",
          getValue() {
            let queryText = querySearchText();
            return PopsPanel.getValue(
              "gf-script-search-addFilterSearchInput-text"
            ) || queryText || "";
          },
          description: i18next.t("自动执行过滤"),
          placeholder: i18next.t("过滤的关键词"),
          text: i18next.t("关键词"),
          callback: utils.debounce((event, value) => {
            PopsPanel.setValue(
              "gf-script-search-addFilterSearchInput-text",
              value.toString()
            );
            execTotalFilter();
          }, 500)
        });
        domUtils.append($search, $searchInner);
      }
      controlsConfig.forEach((controlConfig) => {
        if (!PopsPanel.getValue(controlConfig.ENABLE_KEY)) {
          return;
        }
        log.info(`添加按钮${controlConfig.name}`);
        let $controlContainer = panelHandleContentUtils.createSectionContainerItem_switch({
          type: "switch",
          className: "gm-script-control-item",
          text: controlConfig.name,
          description: controlConfig.desc,
          attributes: {
            "data-storage-key": controlConfig.STORAGE_KEY
          },
          getValue() {
            let value = _GM_getValue(controlConfig.STORAGE_KEY, false);
            value = Boolean(value);
            execTotalFilter();
            return value;
          },
          callback(event, value) {
            _GM_setValue(controlConfig.STORAGE_KEY, value);
            execTotalFilter();
            if (value && Array.isArray(controlConfig.mutualExclusionSwitch)) {
              let $pops = $controlContainer.closest(".pops");
              controlConfig.mutualExclusionSwitch.forEach((selector) => {
                let $switch = $pops.querySelector(selector);
                if ($switch) {
                  let $input = $switch.querySelector("input");
                  if ($input == null ? void 0 : $input.checked) {
                    let $core = $switch.querySelector(
                      ".pops-panel-switch__core"
                    );
                    $core == null ? void 0 : $core.click();
                  }
                }
              });
            }
          }
        });
        domUtils.append($filterControlsContainer, $controlContainer);
      });
    }
  };
  const Greasyfork = {
    init() {
      if (GreasyforkRouter.isImageSource()) {
        log.info(`Router: 资源界面，不执行脚本功能`);
        return;
      }
      PopsPanel.execMenu("checkPage", () => {
        this.checkPage();
      });
      GreasyforkBeautify.init();
      GreasyforkShortCut.init();
      if (GreasyforkRouter.isScript()) {
        GreasyforkScripts.init();
      }
      if (GreasyforkRouter.isScriptList() || GreasyforkRouter.isScriptLibraryList() || GreasyforkRouter.isScriptCodeSearch() || GreasyforkRouter.isScriptsBySite()) {
        GreasyforkScriptsList.init();
      }
      if (GreasyforkRouter.isDiscuessions()) {
        log.info(`Router: 讨论页面`);
        GreasyforkForum.init();
      } else if (GreasyforkRouter.isUsers()) {
        log.info(`Router: 用户页面`);
        GreasyforkUsers.init();
        if (GreasyforkRouter.isUsersConversations()) {
          log.info(`Router-next: 私聊用户页面`);
          GreasyforkConversations.init();
        }
      } else if (GreasyforkRouter.isScriptSearch() || GreasyforkRouter.isScriptsBySite() || GreasyforkRouter.isScriptCodeSearch() || GreasyforkRouter.isScriptLibraryListSearch()) {
        log.info(`Router: 脚本搜索页面`);
        GreasyforkScriptsSearch.init();
      }
      PopsPanel.execMenuOnce("scripts-addOperationPanelBtnWithNavigator", () => {
        this.addOperationPanelBtnWithNavigator();
      });
      domUtils.ready(() => {
        GreasyforkMenu.initEnv();
        GreasyforkAccount.init();
        GreasyforkRememberFormTextArea.init();
        GreasyforkMenu.handleLocalGotoCallBack();
        PopsPanel.execMenuOnce("fixImageWidth", () => {
          Greasyfork.fixImageWidth();
        });
        Greasyfork.languageSelectorLocale();
        PopsPanel.execMenuOnce("optimizeImageBrowsing", () => {
          Greasyfork.optimizeImageBrowsing();
        });
        PopsPanel.execMenuOnce("overlayBedImageClickEvent", () => {
          Greasyfork.overlayBedImageClickEvent();
        });
        if (!GreasyforkRouter.isCodeStrict()) {
          PopsPanel.execMenuOnce("addMarkdownCopyButton", () => {
            Greasyfork.addMarkdownCopyButton();
          });
        }
      });
    },
    /**
     * 修复图片宽度显示问题
     */
    fixImageWidth() {
      if (window.innerWidth < window.innerHeight) {
        log.info("修复图片显示问题");
        addStyle(
          /*css*/
          `
            img.lum-img{
                width: 100% !important;
                height: 100% !important;
            }
          `
        );
      }
    },
    /**
     * 优化图片浏览
     */
    optimizeImageBrowsing() {
      log.info("优化图片浏览");
      {
        addStyle(_GM_getResourceText("ViewerCSS"));
      }
      addStyle(
        /*css*/
        `
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
        `
      );
      function viewIMG(imgList = [], viewIndex = 0) {
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
        viewIndex = viewIndex < 0 ? 0 : viewIndex;
        viewer.view(viewIndex);
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
          let $img = event.target;
          if (((_a2 = $img.parentElement) == null ? void 0 : _a2.localName) === "a" && $img.hasAttribute("data-screenshots")) {
            return;
          }
          if ($img.closest(".viewer-container")) {
            return;
          }
          if ($img.closest(".lum-lightbox-position-helper")) {
            return;
          }
          let userContentElement = $img.closest(".user-content");
          let imgList = [];
          let imgIndex = 0;
          let imgElementList = [];
          let currentImgSrc = getImgElementSrc($img);
          if (currentImgSrc) {
            if (currentImgSrc.startsWith("https://img.shields.io")) {
              return;
            } else if (currentImgSrc.startsWith("/vite/assets/")) {
              return;
            }
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
            imgIndex = imgElementList.indexOf($img);
            if (imgIndex === -1) {
              imgIndex = 0;
            }
          } else {
            imgList.push(currentImgSrc);
            imgIndex = 0;
          }
          log.success("点击浏览图片👉", imgList, imgIndex);
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
        let $link = imgElement.parentElement;
        let url = $link.getAttribute("href");
        $link.setAttribute("data-href", url);
        $link.removeAttribute("href");
        if (url.startsWith("/rails/active_storage/blobs/redirect")) {
          log.info(`该图片是上传到Greasyfork的图片，拦截默认行为，不做提示`);
          return;
        }
        domUtils.on($link, "click", () => {
          Qmsg.warning(
            /*html*/
            `<div style="overflow-wrap: anywhere;">${i18next.t(
            "拦截跳转："
          )}<a href="${url}" target="_blank">${url}</a></div>`,
            {
              html: true,
              zIndex: utils.getMaxZIndex() + 105
            }
          );
        });
      });
    },
    /**
     * 在Markdown右上角添加复制按钮
     */
    addMarkdownCopyButton() {
      log.info("在Markdown右上角添加复制按钮");
      addStyle(
        /*css*/
        `
        pre{
          position: relative;
          margin-bottom: 0px !important;
          width: 100%;
        }
        `
      );
      addStyle(
        /*css*/
        `
        .snippet-clipboard-content{
            display: flex;
            justify-content: space-between;
            background: rgb(246, 248, 250);
            margin-bottom: 16px;
            position: relative;
        }
        .zeroclipboard-container {
            right: 0;
            top: 0;
            position: absolute;
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
        `
      );
      addStyle(
        /*css*/
        `
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
        `
      );
      function createCopyElement() {
        let $copy = domUtils.createElement("div", {
          className: "zeroclipboard-container",
          innerHTML: (
            /*html*/
            `
				<clipboard-copy class="js-clipboard-copy">
				<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-copy">
					<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
				</svg>
				<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-check-copy">
					<path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
				</svg>
				</clipboard-copy>
            `
          )
        });
        let clipboardCopyElement = $copy.querySelector(
          ".js-clipboard-copy"
        );
        let octiconCopyElement = $copy.querySelector(
          ".octicon-copy"
        );
        let octiconCheckCopyElement = $copy.querySelector(
          ".octicon-check-copy"
        );
        domUtils.on($copy, "click", () => {
          let $parent = domUtils.parent($copy);
          let $code = $parent.querySelector("code");
          if (!$code && $parent.className.includes("prettyprinted")) {
            $code = $copy.parentElement;
          }
          if (!$code) {
            $code = $parent.querySelector("pre");
          }
          if (!$code) {
            Qmsg.error(i18next.t("未找到{{selector}}元素", { selector: "code" }));
            return;
          }
          utils.setClip(domUtils.text($code));
          clipboardCopyElement.setAttribute("success", "true");
          octiconCopyElement.setAttribute("aria-hidden", "true");
          octiconCheckCopyElement.removeAttribute("aria-hidden");
          let tooltip = __pops.tooltip({
            target: clipboardCopyElement,
            content: i18next.t("✅ 复制成功!"),
            position: "left",
            className: "github-tooltip",
            alwaysShow: true
          });
          tooltip.toolTip.onToolTipAnimationFinishEvent();
          setTimeout(() => {
            clipboardCopyElement.removeAttribute("success");
            octiconCheckCopyElement.setAttribute("aria-hidden", "true");
            octiconCopyElement.removeAttribute("aria-hidden");
            tooltip.toolTip.close();
          }, 2e3);
        });
        return $copy;
      }
      $$("pre").forEach((preElement) => {
        let zeroclipboardElement = preElement.querySelector(
          "div.zeroclipboard-container"
        );
        if (zeroclipboardElement) {
          return;
        }
        let copyElement = createCopyElement();
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
        let url = GreasyforkUrlUtils.getSwitchLanguageUrl(localeLanguage);
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
     * 检测gf页面是否正确加载，有时候会出现
     * We're down for maintenance. Check back again soon.
     */
    checkPage() {
      log.info("检测gf页面是否正确加载，有时候会出现");
      domUtils.ready(() => {
        if (document.body.firstElementChild && document.body.firstElementChild.localName === "p" && document.body.firstElementChild.innerText.includes(
          "We're down for maintenance. Check back again soon."
        )) {
          let latestRefreshPageTime = parseInt(
            _GM_getValue(
              "greasyfork-check-page-time",
              0
            )
          );
          let checkPageTimeout = PopsPanel.getValue(
            "greasyfork-check-page-timeout",
            5
          );
          let checkPageTimeoutStamp = checkPageTimeout * 1e3;
          if (latestRefreshPageTime && Date.now() - latestRefreshPageTime < checkPageTimeoutStamp) {
            Qmsg.warning(
              i18next.t("上次重载时间 {{time}}，{{timeout}}秒内拒绝反复重载", {
                time: utils.formatTime(
                  latestRefreshPageTime,
                  "yyyy-MM-dd HH:mm:ss"
                ),
                timeout: checkPageTimeout
              })
            );
            return;
          }
          _GM_setValue("greasyfork-check-page-time", Date.now());
          window.location.reload();
        }
      });
    },
    /**
     * 在顶部导航栏添加【操作面板】按钮
     */
    addOperationPanelBtnWithNavigator() {
      log.info("添加【操作面板】按钮");
      CommonUtil.addBlockCSS(
        ".sidebarred .sidebar",
        ".sidebarred-main-content .open-sidebar"
      );
      addStyle(
        /*css*/
        `
		.sidebarred .sidebarred-main-content{
			max-width: 100%;
		}	
		`
      );
      domUtils.ready(() => {
        document.querySelector("#site-nav nav");
        document.querySelector(
          "#site-nav .with-submenu nav"
        );
        let $scriptsOptionGroups = document.querySelector("#script-list-option-groups") || document.querySelector(".list-option-groups");
        if (!$scriptsOptionGroups) {
          log.warn("不存在右侧面板元素#script-list-option-groups");
          return;
        }
        $scriptsOptionGroups = $scriptsOptionGroups.cloneNode(
          true
        );
        $scriptsOptionGroups.classList.add("option-panel-groups");
        GreasyforkElementUtils.registerTopNavMenu({
          name: i18next.t("操作面板"),
          className: "filter-scripts",
          clickEvent(event) {
            let $dialog = __pops.alert({
              title: {
                text: i18next.t("操作面板"),
                position: "center"
              },
              content: {
                text: "",
                html: true
              },
              btn: {
                ok: { enable: false }
              },
              mask: {
                enable: true,
                clickEvent: {
                  toClose: true
                }
              },
              drag: true,
              useShadowRoot: true,
              width: PanelUISize.setting.width,
              height: PanelUISize.setting.height,
              zIndex: utils.getMaxZIndex(100),
              style: (
                /*css*/
                `
						.pops-drawer-content div:first-child{
							margin: 20px;
						}
						.option-panel-groups > div{
						
						}
						.option-panel-groups ul{
							margin: .5em 0 0;
							list-style-type: none;
							padding: 1em 0;
							box-shadow: 0 0 5px #ddd;
							border: 1px solid #BBBBBB;
							border-radius: 5px;
							background-color: #fff;
						}
						.option-panel-groups ul li{
						
						}
						li.list-current{
							border-left: 7px solid #800;
							box-shadow: inset 0 1px #0000001a, inset 0 -1px #0000001a;
							margin: 0 0 0 -4px;
							padding: .4em 1em .4em calc(1em - 3px);
							background: linear-gradient(#fff, #eee);
						}
						.list-option-group a {
							padding: .35em 1em;
							display: block;
						}
						.list-option-group {
							margin-bottom: 1em;
						}
						form.sidebar-search{
							display: flex;
							align-items: center;
							gap: 10px;
						}
						form.sidebar-search input[type="search"]{
							display: inline-flex;
							justify-content: center;
							align-items: center;
							line-height: 1;
							height: 32px;
							white-space: nowrap;
							cursor: text;
							text-align: center;
							box-sizing: border-box;
							outline: 0;
							transition: 0.1s;
							font-weight: 500;
							user-select: none;
							-webkit-user-select: none;
							-moz-user-select: none;
							-ms-user-select: none;
							vertical-align: middle;
							-webkit-appearance: none;
							appearance: none;
							background-color: transparent;
							border: 0;
							padding: 8px 8px;
							font-size: 14px;
							text-align: start;
							/* width: 100%; */
							// flex: 1;
							display: flex;
							align-items: center;
							border: 1px solid #dcdfe6;
							border-radius: 4px;
							background-color: #ffffff;
						}
						form.sidebar-search input[type="submit"]{
							width: 32px;
							height: 32px;
						}
						`
              )
            });
            let $content = $dialog.$shadowRoot.querySelector(
              ".pops-alert-content"
            );
            $content.appendChild($scriptsOptionGroups);
          }
        });
      });
    }
  };
  PopsPanel.init();
  Greasyfork.init();

})(Qmsg, DOMUtils, Utils, i18next, pops, Viewer);