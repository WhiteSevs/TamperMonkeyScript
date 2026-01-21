const Console = {
  Console: "控制台",
  console: "控制台",
  All: "所有",
  Info: "信息",
  Warning: "警告",
  Error: "错误",
  Cancel: "取消",
  Execute: "执行",
};

const Elements = {
  Elements: "元素",
  elements: "元素",
  "Catch Event Listeners": "捕获事件监听器",
  Attributes: "属性",
  Styles: "样式",
  "Computed Style": "已计算",
  "Event Listeners": "事件监听器",
};

const Network = {
  Network: "网络",
  network: "网络",
  Name: "名称",
  Method: "请求方法",
  Status: "状态代码",
  Type: "响应类型",
  Size: "大小",
  Time: "时间",
  "Request Payload": "请求负载",
  "View source": "查看源",
  "View parsed": "视图已分析",
  "Response Content": "响应内容",
  "Response Headers": "响应标头",
  "Request Headers": "请求标头",
};

const Resources = {
  Resources: "资源",
  resources: "资源",
  "Local Storage": "本地存储",
  "Session Storage": "会话存储",
  Cookie: "Cookie",
  Empty: "空",
  Script: "脚本",
  Stylesheet: "样式表",
  Iframe: "Iframe",
  Image: "图片",
};

const Sources = {
  Sources: "源代码",
  sources: "源代码",
  "Sorry, unable to fetch source code:(": "抱歉，无法获取源代码:(",
};

const Info = {
  Info: "信息",
  info: "信息",
  Location: "链接",
  "User Agent": "用户代理",
  Device: "设备",
  screen: "屏幕",
  viewport: "视口",
  "pixel ratio": "像素比",
  System: "系统",
  browser: "浏览器",
  "Sponsor this Project": "赞助本项目",
  About: "关于",
};

const Snippets = {
  Snippets: "代码片段",
  snippets: "代码片段",
  "Border All": "全部显示边框",
  "Add color borders to all elements": "为所有元素添加带颜色的边框",
  "Refresh Page": "刷新页面",
  "Add timestamp to url and refresh": "添加时间戳参数到 URL 并刷新",
  "Search Text": "搜索文本",
  "Highlight given text on page": "为页面搜索到的文本添加高亮显示",
  "Edit Page": "编辑页面",
  "Toggle body contentEditable": "切换 body contentEditable",
  "Fit Screen": "适应屏幕",
  "Scale down the whole page to fit screen": "缩小页面以适应屏幕",
  "Load Vue Plugin": "加载 Vue 插件",
  "Vue devtools": "Vue 开发者工具",
  "Load Monitor Plugin": "加载监控插件",
  "Display page fps, memory and dom nodes": "显示页面帧数、内存和 DOM 节点",
  "Load Features Plugin": "加载功能插件",
  "Browser feature detections": "浏览器特性检测",
  "Load Timing Plugin": "加载检测耗时插件",
  "Show performance and resource timing": "显示性能和耗时",
  "Load Code Plugin": "加载代码插件",
  "Edit and run JavaScript": "编辑并运行 JavaScript",
  "Load Benchmark Plugin": "加载测试插件",
  "Run JavaScript benchmarks": "运行 JavaScript 测试",
  "Load Geolocation Plugin": "加载地理位置插件",
  "Test geolocation": "测试地理位置",
  "Load Orientation Plugin": "加载方向插件",
  "Test orientation api": "测试方向api",
  "Load Touches Plugin": "加载触摸插件",
  "Visualize screen touches": "显示触摸点位在屏幕上的位置",
};

const General = {
  "Enter the text": "输入文本",
  Filter: "过滤",
  Key: "键",
  Value: "值",
  Refreshed: "已刷新",
  Copied: "已复制",
};

const Settings = {
  Settings: "设置",
  settings: "设置",
  "Remember Entry Button Position": "记住入口按钮位置",
  Theme: "主题",
  Transparency: "透明度",
  "Display Size": "显示大小",
  "Restore defaults and reload": "恢复默认并重新加载",
  // Console
  "Asynchronous Rendering": "异步渲染",
  "Enable JavaScript Execution": "允许执行 JavaScript",
  "Catch Global Errors": "捕获全局错误",
  "Override Console": "覆盖 Console",
  "Auto Display If Error Occurs": "当发生错误时自动显示",
  "Display Extra Information": "显示额外信息",
  "Display Unenumerable Properties": "显示不可枚举属性",
  "Access Getter Value": "访问 Getter 值",
  "Lazy Evaluation": "懒求值",
  "Max Log Number": "最大日志数量",
  // Elements
  "Catch Event Listeners": "捕获事件监听器",
  // Resources
  "Hide Eruda Setting": "隐藏 Eruda 设置",
  "Auto Refresh Elements": "自动刷新元素",
  // Sources
  "Show Line Numbers": "显示行号",
};

const Plugins = {
  monitor: "监控",
  features: "功能",
  timing: "耗时",
  code: "代码",
  benchmark: "测试",
  geolocation: "地理位置",
  orientation: "方向",
  touches: "触摸",
  outline: "边框",
};

export const zh_CN_language = {
  ...General,
  ...Console,
  ...Elements,
  ...Network,
  ...Resources,
  ...Sources,
  ...Info,
  ...Snippets,
  ...Settings,
  ...Plugins,
};
