// ==UserScript==
// @name         网盘链接识别
// @namespace    https://greasyfork.org/zh-CN/scripts/445489-网盘链接识别
// @supportURL   https://greasyfork.org/zh-CN/scripts/445489-网盘链接识别/feedback
// @version      23.6.30.23.00
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、坚果云、magnet格式,支持蓝奏云、天翼云(需登录)、123盘、奶牛和坚果云(需登录)直链获取下载，页面动态监控加载的链接
// @author       WhiteSevs
// @match        *://*/*
// @run-at       document-body
// @license      GPL-3.0-only
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_info
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @connect      *
// @connect      lanzoux.com
// @connect      lanzoug.com
// @connect      189.cn
// @connect      123pan.com
// @connect      wenshushu.cn
// @connect      jianguoyun.com
// @exclude      /^http(s|):\/\/s1\.hdslb\.com\/.*$/
// @exclude      /^http(s|):\/\/(message|www)\.bilibili\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.mail\.qq\.com\/.*$/
// @exclude      /^http(s|):\/\/.*video\.qq\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.vscode-cdn\.net\/.*$/
// @exclude      /^http(s|):\/\/.*vscode\.dev\/.*$/
// @require	     https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://unpkg.com/any-touch/dist/any-touch.umd.min.js
// @require      https://greasyfork.org/scripts/462234-message/code/Message.js?version=1198446
// @require      https://greasyfork.org/scripts/456470-%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93/code/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93.js?version=1211345
// @require      https://greasyfork.org/scripts/465550-js-%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6/code/JS-%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6.js?version=1205376
// @require      https://greasyfork.org/scripts/456485-pops/code/pops.js?version=1187390
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1213187
// ==/UserScript==

(function () {
  const jQuery = $.noConflict(true);
  const log = new Utils.Log(GM_info);
  log.config({
    logMaxCount: 200000,
    autoClearConsole: false,
  });
  const httpx = new Utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort: function () {
      Qmsg.error("请求被取消");
    },
    ontimeout: function () {
      Qmsg.error("请求超时");
    },
    onerror: function (response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror", response]);
    },
  });
  let GM_Menu = null;

  const NetDisk = {
    /**
     * 是否初始化
     * @type {boolean}
     */
    isInit: false,
    /**
     * 页面显示出的文字
     * @type {string}
     */
    pageText: null,
    /**
     * 链接字典
     * @type {Utils.Dictionary}
     */
    linkDict: null,
    isMatching: false /* 正在匹配链接中 */,
    matchLink: null /* 匹配到的 */,
    hasMatchLink: false /* 已存在匹配的链接 */,
    regular: {
      baidu: [
        {
          link_innerText: `pan.baidu.com/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_baidu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)` /* 百度网盘链接 */,
          link_innerHTML: `pan.baidu.com/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_baidu", 300)
          )}}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)` /* 百度网盘链接 */,
          shareCode: /pan\.baidu\.com\/s\/([0-9a-zA-Z-_]+)/gi /* 链接参数 */,
          shareCodeNeedRemoveStr:
            /pan\.baidu\.com\/s\//gi /* 需要替换空的字符串，比如pan.baidu.com/s/替换为空 */,
          checkAccessCode: /(密码|访问码|提取码).+/g /* 用来判断是否存在密码 */,
          accessCode: /([0-9a-zA-Z]{4})/gi /* 提取码（如果存在的话） */,
          uiLinkShow:
            "pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#} 提取码: {#accessCode#}" /* 用于显示的链接 */,
          blank:
            "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}" /* 新标签页打开的链接 */,
        },
      ],
      lanzou: [
        {
          link_innerText: `lanzou[a-z]{0,1}.com/(tp/|u/|)([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_lanzou", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,10}[a-zA-Z0-9]{3,6}|)`,
          link_innerHTML: `lanzou[a-z]{0,1}.com/(tp/|u/|)([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_lanzou", 300)
          )}}(密码|访问码|提取码)[\\s\\S]{0,15}[a-zA-Z0-9]{3,6}|)`,
          shareCode:
            /lanzou[a-z]{0,1}.com\/(tp\/|u\/|)([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})/gi,
          shareCodeNotMatch:
            /^(ajax|file|undefined|1125)/gi /* shareCode参数中不可能存在的链接，如果shareCode存在这些，那就拒绝匹配 */,
          shareCodeNeedRemoveStr: /lanzou[a-z]{0,1}.com\/(tp\/|u\/|)/gi,
          checkAccessCode: /(密码|访问码|提取码).+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: "lanzoux.com/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.lanzoux.com/{#shareCode#}",
        },
      ],
      tianyiyun: [
        {
          link_innerText: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_tianyiyun", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_tianyiyun", 300)
          )}}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
          shareCode:
            /cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr:
            /cloud\.189\.cn\/t\/|cloud.189.cn\/web\/share\?code=/gi,
          checkAccessCode: /(密码|访问码|提取码).+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "cloud.189.cn/t/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://cloud.189.cn/t/{#shareCode#}",
        },
      ],
      hecaiyun: [
        {
          link_innerText: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_hecaiyun", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_hecaiyun", 300)
          )}}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
          shareCode: /caiyun\.139\.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /caiyun\.139\.com\/m\/i\?/gi,
          checkAccessCode: /(密码|访问码|提取码).+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "caiyun.139.com/m/i?{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://caiyun.139.com/m/i?{#shareCode#}",
        },
      ],
      aliyun: [
        {
          link_innerText: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_aliyun", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_aliyun", 300)
          )}}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
          shareCode: /aliyundrive\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
          shareCodeNotMatch: /undefined/gi,
          shareCodeNeedRemoveStr: /aliyundrive\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码).+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          acceesCodeNotMatch: /^(font)/gi,
          uiLinkShow: "aliyundrive.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://aliyundrive.com/s/{#shareCode#}",
        },
      ],
      wenshushu: [
        {
          link_innerText: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_wenshushu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_wenshushu", 300)
          )}}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
          shareCode:
            /wss.ink\/f\/([a-zA-Z0-9_-]{8,14})|ws28.cn\/f\/([a-zA-Z0-9_-]{8,14})|wss1.cn\/f\/([a-zA-Z0-9_-]{8,14})|wenshushu.cn\/f\/([a-zA-Z0-9_-]{8,14})|wenshushu.cn\/k\/([a-zA-Z0-9_-]{8,14})/gi,
          shareCodeNeedRemoveStr:
            /wss.ink\/f\/|ws28.cn\/f\/|wss1.cn\/f\/|wenshushu.cn\/f\/|wenshushu.cn\/k\//gi,
          checkAccessCode: /(密码|访问码|提取码).+/g,
          accessCode: /[0-9a-zA-Z]{4}/gi,
          uiLinkShow: "wss.ink/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://wss.ink/f/{#shareCode#}",
        },
      ],
      nainiu: [
        {
          link_innerText: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_nainiu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_nainiu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /cowtransfer\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码).+/g,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "cowtransfer.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://cowtransfer.com/s/{#shareCode#}",
        },
      ],
      _123pan: [
        {
          link_innerText: `123pan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__123pan", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `123pan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML__123pan", 300)
          )}}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
          shareCode: /123pan.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /123pan.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码).+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://123pan.com/s/{#shareCode#}",
        },
      ],
      weiyun: [
        {
          link_innerText: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_weiyun", 20)
          )}}(访问码|密码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_weiyun", 300)
          )}}(访问码|密码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /weiyun.com\/([0-9a-zA-Z\-_]{7,24})/gi,
          shareCodeNotMatch:
            /^(ajax|file|download|ptqrshow|xy-privacy|comp|web)/gi,
          shareCodeNeedRemoveStr: /weiyun.com\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/g,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://share.weiyun.com/{#shareCode#}",
        },
      ],
      xunlei: [
        {
          link_innerText: `xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_xunlei", 20)
          )}}(访问码|提取码|密码|)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `xunlei.com\/s\/[0-9a-zA-Z\-_]{8,30}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_xunlei", 300)
          )}}(访问码|提取码|密码|)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
          shareCode: /xunlei.com\/s\/([0-9a-zA-Z\-_]{8,30})/gi,
          shareCodeNeedRemoveStr: /xunlei.com\/s\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "pan.xunlei.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://pan.xunlei.com/s/{#shareCode#}",
        },
      ],
      _115pan: [
        {
          link_innerText: `115.com/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__115pan", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `115.com\/s\/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML__115pan", 300)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
          shareCode: /115.com\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
          shareCodeNeedRemoveStr: /115.com\/s\//gi,
          checkAccessCode: /(提取码|密码|\?password=|访问码).+/gi,
          accessCode: /(\?password=|)([0-9a-zA-Z]{4})/i,
          uiLinkShow: "115.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://115.com/s/{#shareCode#}",
        },
      ],
      chengtong: [
        {
          link_innerText: `(ctfile.com|ghpym.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `(ctfile.com|ghpym.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            300
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /(ctfile.com|ghpym.com)\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(ctfile.com|ghpym.com)\/d\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://url95.ctfile.com/d/{#shareCode#}",
        },
        {
          link_innerText: `pan.jc-box.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `pan.jc-box.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            300
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /pan.jc-box.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /pan.jc-box.com\/d\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "pan.jc-box.com/d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://pan.jc-box.com/d/{#shareCode#}",
        },
        {
          link_innerText: `download.jamcz.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `download.jamcz.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            300
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /download.jamcz.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /download.jamcz.com\/d\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow:
            "download.jamcz.com/d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://download.jamcz.com/d/{#shareCode#}",
        },
        {
          link_innerText: `(2k.us/file/|u062.com/file/|545c.com/file/|t00y.com/file/)[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `(2k.us/file/|u062.com/file/|545c.com/file/|t00y.com/file/)[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML__chengtong", 300)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode:
            /(2k.us\/file\/|u062.com\/file\/|545c.com\/file\/|t00y.com\/file\/)([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr:
            /2k.us\/file\/|u062.com\/file\/|545c.com\/file\/|t00y.com\/file\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://u062.com/file/{#shareCode#}",
        },
        {
          link_innerText: `ctfile.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `ctfile.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            300
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /ctfile.com\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /ctfile.com\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://url95.ctfile.com/f/{#shareCode#}",
        },
        {
          link_innerText: `(pan.jc-box.com|545c.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `(pan.jc-box.com|545c.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            300
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /(pan.jc-box.com|545c.com)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(pan.jc-box.com|545c.com)\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "pan.jc-box.com/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://pan.jc-box.com/f/{#shareCode#}",
        },
        {
          link_innerText: `down.jc-box.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `down.jc-box.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            300
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /down.jc-box.com\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /down.jc-box.com\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "down.jc-box.com/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://down.jc-box.com/f/{#shareCode#}",
        },
        {
          link_innerText: `download.cx05.cc/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `download.cx05.cc/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            300
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /download.cx05.cc\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /download.cx05.cc\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "download.cx05.cc/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://download.cx05.cc/f/{#shareCode#}",
        },
        {
          link_innerText: `(089u|474b).com/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `(089u|474b).com/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            300
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{6}|)`,
          shareCode: /(089u|474b).com\/dir\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(089u|474b).com\/dir\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{6})/gi,
          uiLinkShow: "089u.com/dir/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://089u.com/dir/{#shareCode#}",
        },
      ],
      kuake: [
        {
          link_innerText: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_kuake", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_kuake", 300)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
          shareCode: /quark.cn\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
          shareCodeNeedRemoveStr: /quark.cn\/s\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "quark.cn/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://pan.quark.cn/s/{#shareCode#}",
        },
      ],
      magnet: [
        {
          link_innerText: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
          link_innerHTML: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
          shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi,
          shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}",
          blank: "magnet:?xt=urn:btih:{#shareCode#}",
        },
      ],
      jianguoyun: [
        {
          link_innerText: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_jianguoyun", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]+|)`,
          link_innerHTML: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_jianguoyun", 300)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]+|)`,
          shareCode: /jianguoyun.com\/p\/([0-9a-zA-Z\-_]{16,24})/gi,
          shareCodeNeedRemoveStr: /jianguoyun.com\/p\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          uiLinkShow: "jianguoyun.com/p/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.jianguoyun.com/p/{#shareCode#}",
        },
      ],
      onedrive: [
        {
          name: "10101619",
          link_innerText: `10101619-my.sharepoint.com/.*/personal/chendexian_10101619_onmicrosoft_com/[0-9a-zA-Z-_]+([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_onedrive_10101619", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]+|)`,
          link_innerHTML: `10101619-my.sharepoint.com/.*/personal/chendexian_10101619_onmicrosoft_com/[0-9a-zA-Z-_]+([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_onedrive_10101619", 300)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]+|)`,
          shareCode:
            /10101619-my.sharepoint.com\/.*\/personal\/chendexian_10101619_onmicrosoft_com\/([0-9a-zA-Z\-_]+)/gi,
          shareCodeNeedRemoveStr:
            /10101619-my.sharepoint.com\/.*\/personal\/chendexian_10101619_onmicrosoft_com\//gi,
          checkAccessCode: /(提取码|密码|访问码).+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          uiLinkShow:
            "10101619-my.sharepoint.com/:u:/g/personal/chendexian_10101619_onmicrosoft_com/{#shareCode#} 提取码: {#accessCode#}",
          blank:
            "https://10101619-my.sharepoint.com/:u:/g/personal/chendexian_10101619_onmicrosoft_com/{#shareCode#}",
        },
        {
          name: "hurstheads",
          link_innerText: `hurstheads-my.sharepoint.com/.*/personal/storage_01_hurstheads_onmicrosoft_com/[0-9a-zA-Z-_]+([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_onedrive_10101619", 20)
          )}}(访问码|密码|提取码|\\?password=|\\?e=)[\\s\\S]{0,10}[0-9a-zA-Z]+|)`,
          link_innerHTML: `hurstheads-my.sharepoint.com/.*/personal/storage_01_hurstheads_onmicrosoft_com/[0-9a-zA-Z-_]+([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_onedrive_10101619", 300)
          )}}(访问码|密码|提取码|\\?password=|\\?e=)[\\s\\S]{0,15}[0-9a-zA-Z]+|)`,
          shareCode:
            /hurstheads-my.sharepoint.com\/.*\/personal\/storage_01_hurstheads_onmicrosoft_com\/([0-9a-zA-Z\-_]+)/gi,
          shareCodeNeedRemoveStr:
            /hurstheads-my.sharepoint.com\/.*\/personal\/storage_01_hurstheads_onmicrosoft_com\//gi,
          checkAccessCode: /(提取码|密码|访问码|\?e=).+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          uiLinkShow:
            "hurstheads-my.sharepoint.com/:u:/g/personal/storage_01_hurstheads_onmicrosoft_com/{#shareCode#} 提取码: {#accessCode#}",
          blank:
            "https://hurstheads-my.sharepoint.com/:u:/g/personal/storage_01_hurstheads_onmicrosoft_com/{#shareCode#}?e={#accessCode#}",
        },
      ],
    },
    /**
     * 初始化字典
     */
    initLinkDict() {
      NetDisk.linkDict = new Utils.Dictionary();
      Object.keys(NetDisk.regular).forEach((keys) => {
        NetDisk.linkDict.set(keys, new Utils.Dictionary());
      });
    },
    /**
     * 删除某些需要忽略的text或html，如：设置、直链弹窗
     * @param {String} text - 需要进行处理的字符串
     * @param {Boolean} isHTML - 是否是html属性
     * @returns {String}
     */
    ignoreStrRemove(text, isHTML = false) {
      let ignoreNodeList = [
        jQuery(".whitesevPopOneFile") /* 单文件直链弹窗 */,
        jQuery(".whitesevPopMoreFile") /* 多文件直链弹窗 */,
        jQuery(".whitesevPop-whitesevPopSetting") /* 设置页面弹窗 */,
        jQuery(".whitesevPopNetDiskHistoryMatch") /* 历史存储记录弹窗 */,
        jQuery(
          ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table"
        ) /* 历史存储记录弹窗 */,
      ];
      ignoreNodeList.forEach((ignoreNodeItem) => {
        let innerItemText = ignoreNodeItem.prop(
          isHTML ? "innerHTML" : "innerText"
        );
        innerItemText = innerItemText == null ? "" : innerItemText;
        text = text.replaceAll(innerItemText, "");
      });
      return text;
    },
    /**
     * 对页面进行match，处理匹配网盘链接
     * @param {String} clipboardText 剪贴板文本
     */
    matchPageLink(clipboardText = "") {
      if (!this.isInit) {
        this.matchLink = new Set();
        this.initLinkDict();
        this.isInit = true;
      }
      /* 选择的进行匹配的项 all、innerText、innerHTML */
      let matchTextRange = GM_getValue("pageMatchRange", "innerText");
      /* 对innerText 和 innerHTML进行match */
      if (matchTextRange.toLowerCase() === "all") {
        this.pageText = this.ignoreStrRemove(jQuery("body").prop("innerText"));
        this.pageText += this.ignoreStrRemove(
          jQuery("body").prop("innerHTML"),
          true
        );
        this.pageText += clipboardText;
        Object.keys(this.regular).forEach(netDiskName =>{
          let item = this.regular[netDiskName];
          item.forEach((netDiskListItem, index) => {
            NetDiskWorker.GM_matchWorker.postMessage({
              regexp: new RegExp(netDiskListItem["link_innerText"], "gi"),
              pageText: this.pageText,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
            NetDiskWorker.GM_matchWorker.postMessage({
              regexp: new RegExp(netDiskListItem["link_innerHTML"], "gi"),
              pageText: this.pageText,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
          });
        })
      } else {
        if (matchTextRange.toLowerCase() === "innertext") {
          /* 对innerText进行match */
          this.pageText = this.ignoreStrRemove(jQuery("body").prop("innerText"));
        } else {
          /* 对innerHTML进行match */
          this.pageText = this.ignoreStrRemove(
            jQuery("body").prop("innerHTML"),
            true
          );
        }
        this.pageText += clipboardText;
        Object.keys(this.regular).forEach(netDiskName=>{
          let item = this.regular[netDiskName];
          item.forEach((netDiskListItem, index) => {
            NetDiskWorker.GM_matchWorker.postMessage({
              regexp: new RegExp(
                netDiskListItem[`link_${matchTextRange}`],
                "gi"
              ),
              pageText: this.pageText,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
          });
        })
      }
    },
    /**
     * 处理链接，将匹配到的链接转为参数和密码存入字典中
     * @param {String} netDiskName 网盘名称
     * @param {Number} netDiskIndex 网盘名称的索引下标
     * @param {String} url
     */
    handleLink(netDiskName, netDiskIndex, url) {
      /* 当前字典 */
      let currentDict = this.linkDict.get(netDiskName);
      let shareCode = this.handleShareCode(netDiskName, netDiskIndex, url);
      if (Utils.isNull(shareCode)) {
        return;
      }
      let accessCode = this.handleAccessCode(netDiskName, netDiskIndex, url);
      if (currentDict.has(shareCode)) {
        /* 根据shareCode获取accessCode和netDiskIndex信息 */
        let shareCodeDict = this.linkDict.get(netDiskName).get(shareCode);
        if (
          Utils.isNull(shareCodeDict.accessCode) &&
          !Utils.isNull(accessCode)
        ) {
          currentDict.set(shareCode, {
            accessCode: accessCode,
            netDiskIndex: netDiskIndex,
          });
          NetDiskUI.view.changeLinkView(
            netDiskName,
            netDiskIndex,
            shareCode,
            accessCode
          );
          log.info(
            `已存在该链接，但无密码，设置密码 ${netDiskName} ${netDiskIndex}: ${shareCode}  ===> ${accessCode}`
          );
        }
      } else {
        this.hasMatchLink = true;
        currentDict.set(shareCode, {
          accessCode: accessCode,
          netDiskIndex: netDiskIndex,
        });
        NetDiskUI.matchIcon.add(netDiskName);
        NetDiskUI.view.addLinkView(
          netDiskName,
          netDiskIndex,
          shareCode,
          accessCode
        );
        log.success(
          `添加链接 ${netDiskName} ${netDiskIndex}: ${shareCode}  ===> ${accessCode}`
        );
      }
    },
    /**
     * 对传入的url进行处理，返回shareCode
     * @param {String} netDiskName 网盘名称
     * @param {Number} netDiskIndex 网盘名称索引下标
     * @param {String} url 链接
     * @returns
     */
    handleShareCode(netDiskName, netDiskIndex, url) {
      /* 当前执行的规则 */
      let netDiskMatchRegular = this.regular[netDiskName][netDiskIndex];
      let shareCodeMatch = url.match(netDiskMatchRegular.shareCode);
      if (
        shareCodeMatch == null ||
        (shareCodeMatch != null && shareCodeMatch.length === 0)
      ) {
        log.error(`根据链接获取shareCode失败`);
        log.error([arguments, netDiskMatchRegular.shareCode]);
        return "";
      }

      let shareCode = shareCodeMatch[0].replace(
        netDiskMatchRegular.shareCodeNeedRemoveStr,
        ""
      );
      let shareCodeNotMatch = netDiskMatchRegular.shareCodeNotMatch;
      if (shareCodeNotMatch != null && shareCode.match(shareCodeNotMatch)) {
        log.error(`不可能的shareCode => ${shareCode}`);
        return "";
      }
      shareCode = decodeURI(shareCode); /* %E7%BD%91%E7%9B%98 => 网盘 */
      return shareCode;
    },
    /**
     * 对传入的url进行处理，返回accessCode
     * @param {String} netDiskName 网盘名称
     * @param {Number} netDiskIndex 网盘名称索引下标
     * @param {String} url 链接
     * @returns {String} "xxxx" || ""
     */
    handleAccessCode(netDiskName, netDiskIndex, url) {
      /* 当前执行正则匹配的规则 */
      let netDiskMatchRegular = this.regular[netDiskName][netDiskIndex];
      let accessCode = "";
      let accessCodeMatch = url.match(netDiskMatchRegular.checkAccessCode);
      if (accessCodeMatch) {
        accessCode = accessCodeMatch[accessCodeMatch.length - 1].match(
          netDiskMatchRegular.accessCode
        );
        if (Utils.isNull(accessCode)) {
          return "";
        }
        accessCode = accessCode[accessCode.length - 1];
        if (accessCode.startsWith("http")) {
          /* 排除不可能的accessCode */
          accessCode = "";
        }
      }
      return accessCode;
    },
    /**
     * 获取在弹窗中显示出的链接
     * @param {String} netDiskName 网盘名称，指NetDisk.regular的内部键名
     * @param {Number} netDiskIndex 网盘名称索引下标
     * @param {String} shareCode
     * @param {String} accessCode
     * @returns
     */
    handleLinkShow(netDiskName, netDiskIndex, shareCode, accessCode) {
      let netDiskMatchRegular = NetDisk.regular[netDiskName][netDiskIndex];
      if (netDiskMatchRegular == null) {
        Qmsg.error("BUG: 获取uiLink规则失败");
        log.error([
          "BUG: 分析参数",
          netDiskName,
          netDiskIndex,
          shareCode,
          accessCode,
        ]);
        throw "获取uiLink规则失败";
      }
      let uiLink = netDiskMatchRegular["uiLinkShow"].replace(
        /{#shareCode#}/gi,
        shareCode
      );
      if (accessCode && accessCode != "") {
        uiLink = uiLink.replace(/{#accessCode#}/g, accessCode);
      } else {
        uiLink = uiLink.replace(/( |提取码:|{#accessCode#}|\?pwd=)/g, "");
      }
      return uiLink;
    },
    /**
     * 获取剪贴板文本
     * @returns
     */
    getClipboardText() {
      return new Promise((res) => {
        navigator.permissions
          .query({
            name: "clipboard-read",
          })
          .then((result) => {
            const hasFocus =
              document.hasFocus(); /* 这个是重点，可判断是否为当前dom页面 */
            if (
              hasFocus &&
              (result.state === "granted" || result.state === "prompt")
            ) {
              const clipboard = navigator.clipboard.readText();
              clipboard.then((clipText) => {
                res(clipText);
              });
            } else {
              res("");
            }
          });
      });
    },
  };

  /**
   * 网盘直链解析
   */
  const NetDiskParse = {
    netDisk: {
      /**
       * 百度网盘
       * @constructor
       * @returns {Object}
       */
      baidu: function () {
        let that = this;
        /**
         * 入口
         * @param {Number} netDiskIndex 网盘名称索引下标
         * @param {String} shareCode
         * @param {String} accessCode
         * @returns
         */
        this.default = function (netDiskIndex, shareCode, accessCode) {
          let bdurl = GM_getValue("bdurl");
          let paramSurl = GM_getValue("paramSurl");
          let paramPwd = GM_getValue("paramPwd");
          let paramKey = GM_getValue("paramKey");
          let paramWebSiteKey = GM_getValue("paramWebSiteKey");
          let baidu_website_key_enable = GM_getValue(
            "baidu-website-key-enable",
            false
          );

          if (!bdurl) {
            Qmsg.error("请完善配置 网址-Url");
            return null;
          }
          if (!paramSurl) {
            Qmsg.error("请完善配置 参数-Key");
            return null;
          }
          if (!paramPwd) {
            Qmsg.error("请完善配置 密码-Key");
            return null;
          }
          if (!paramKey) {
            Qmsg.error("请完善配置 密钥-Key");
            return null;
          }
          if (baidu_website_key_enable && !paramWebSiteKey) {
            Qmsg.error("请完善配置 密钥-Value");
            return null;
          }
          var tempFormNode = document.createElement("form");
          var list = {}; /* 表单数据 */
          list[paramSurl] = shareCode;
          list[paramPwd] = accessCode;
          if (baidu_website_key_enable) {
            list[paramKey] = paramWebSiteKey;
          }
          tempFormNode.action = bdurl; /* 解析网址 */
          tempFormNode.method = "post";
          tempFormNode.style.display = "none";
          tempFormNode.target = "_blank";
          for (var x in list) {
            var opt = document.createElement("textarea");
            opt.name = x;
            opt.value = list[x]; /* alert(opt.name) */
            tempFormNode.appendChild(opt);
          }
          document.body.appendChild(tempFormNode);
          tempFormNode.submit();
        };
        return this;
      },
      /**
       * 蓝奏云
       * 流程：判断是否是多文件
       * 单文件 => 请求https://www.lanzoux.com/{shareToken} 判断链接类型和是否能正常获取
       *        => 请求https://www.lanzoux.com/tp/{shareToken} 获取文件sign
       *        => 请求https://www.lanzoux.com/ajaxm.php 获取下载参数，下载参数例如：https://develope.lanzoug.com/file/?xxxxxxxxx
       * 多文件 => 先请求https://www.lanzoux.com/{shareToken} 获取文件sign => 请求https://www.lanzoux.com/filemoreajax.php 获取json格式的文件参数，
       * 参数内容如{"info":"success","text":[{"duan":"xx","icon":"","id":"".....},{},{}]}
       * @constructor
       * @returns {Object}
       */
      lanzou: function () {
        let that = this;
        this.handleUrl = {
          default: function (paramShareCode) {
            return NetDisk.regular.lanzou[that.netDiskIndex]["blank"].replace(
              /{#shareCode#}/g,
              paramShareCode
            );
          },
          tp: function (paramShareCode) {
            return NetDisk.regular.lanzou[that.netDiskIndex]["blank"].replace(
              /{#shareCode#}/gi,
              `tp/${paramShareCode}`
            );
          },
        };
        this.regexp = {
          unicode: {
            match: /[%\u4e00-\u9fa5]+/g /* 判断该链接是否是中文 */,
            tip: "中文链接",
            isUnicode: false,
          },
          noFile: {
            match: /div>来晚啦...文件取消分享了<\/div>/g /* 蓝奏文件取消分享 */,
            tip: "来晚啦...文件取消分享了",
          },
          noExists: {
            match: /div>文件不存在，或已删除<\/div>/g /* 蓝奏文件链接错误 */,
            tip: "文件不存在，或已删除",
          },
          moreFile: {
            match:
              /<span id=\"filemore\" onclick=\"more\(\);\">/g /* 蓝奏多文件 */,
          },
          sign: {
            match:
              /var[\s]*(posign|postsign)[\s]*=[\s]*'(.+?)';/ /* 蓝奏设置了密码的单文件请求需要的sign值 */,
          },
          fileName: {
            match: /<title>(.*)<\/title>/ /* 蓝奏文件名 */,
          },
          size: {
            match: /<span class=\"mtt\">\((.*)\)<\/span>/ /* 蓝奏文件大小 */,
          },
          loadDown: {
            match:
              /var[\s]*(loaddown|oreferr|spototo|domianload)[\s]*=[\s]*'(.+?)';/i /* 蓝奏文件直链 */,
          },
          uploadTime: {
            match:
              /mt2\"\>时间:<\/span>(.+?)[\s]*<span/i /* 蓝奏云文件上传时间 */,
          },
        };
        /**
         * 入口
         * @param {Number} netDiskIndex
         * @param {String} shareCode
         * @param {String} accessCode
         */
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          that.regexp.unicode.isUnicode = Boolean(
            that.shareCode.match(that.regexp.unicode.match)
          );
          await that.getFileLink(shareCode, accessCode);
        };
        /**
         * 获取文件链接
         * @param {Boolean} getShareCodeByPageAgain
         * @returns
         */
        this.getFileLink = async function (getShareCodeByPageAgain = false) {
          let url = that.handleUrl.default(that.shareCode);
          log.info("蓝奏云-获取文件下载链接" + url);
          let getResp = await httpx.get({
            url: url,
            headers: {
              Accept: "*/*",
              "User-Agent": Utils.getRandomAndroidUA(),
              referer: window.location.origin,
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          if (respData.status !== 200 || respData.readyState !== 4) {
            log.error(respData);
            Qmsg.error("请求失败，请重试");
            return;
          }
          if (!that.checkPageCode(respData)) {
            return;
          }
          if (that.isMoreFile(respData)) {
            log.info("该链接为多文件");
            await that.getMoreFile();
          } else {
            log.info("该链接为单文件");
            log.info(respData);
            if (getShareCodeByPageAgain) {
              let shareCodeNewMatch = respData.responseText.match(
                /var[\s]*link[\s]*=[\s]*\'tp\/(.+?)\';/i
              );
              that.shareCode = shareCodeNewMatch[shareCodeNewMatch.length - 1];
              log.info(`新参数 => ${that.shareCode}`);
            }
            await that.getLinkByTp();
          }
        };
        /**
         * 页面检查，看看是否存在文件失效情况
         * @param {Object} response
         * @returns
         */
        this.checkPageCode = function (response) {
          let pageText = response.responseText;
          if (pageText.match(that.regexp.noFile.match)) {
            Qmsg.error(that.regexp.noFile.tip);
            return false;
          }
          if (pageText.match(that.regexp.noExists.match)) {
            Qmsg.error(that.regexp.noExists.tip);
            return false;
          }
          return true;
        };
        /**
         * 判断是否是多文件的链接
         * @param {Object} response
         * @returns
         */
        this.isMoreFile = function (response) {
          let pageText = response.responseText;
          if (pageText.match(that.regexp.moreFile.match)) {
            log.info("该链接为多文件");
            return true;
          }
          return false;
        };
        /**
         * 访问蓝奏tp获取sign
         */
        this.getLinkByTp = async function () {
          let getResp = await httpx.get({
            url: that.handleUrl.tp(that.shareCode),
            headers: {
              Accept: "*/*",
              "User-Agent": Utils.getRandomAndroidUA(),
              referer: window.location.origin,
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info("by_tp ↓");
          log.info(respData);
          if (respData.status == 200 && respData.readyState == 4) {
            await that.getLink(respData);
          } else {
            Qmsg.error("请求失败，请重试");
          }
        };
        /**
         * 获取链接
         * @param {Object} response
         * @returns
         */
        this.getLink = async function (response) {
          let pageText = response.responseText;
          if (pageText == null) {
            log.error("shareCode错误，重新从页面中获取");
            await that.getFileLink(true);
            return;
          }
          let sign = pageText.match(that.regexp.sign.match);
          let postData_p = "";
          let postData_sign = "";
          let fileNameMatch = pageText.match(that.regexp.fileName.match);
          let fileName = fileNameMatch ? fileNameMatch[1].trim() : "";
          let fileSizeMatch = pageText.match(that.regexp.size.match);
          let fileSize = fileSizeMatch ? fileSizeMatch[1].trim() : "";
          let fileUploadTime = pageText.match(that.regexp.uploadTime.match);
          if (fileUploadTime) {
            fileUploadTime = fileUploadTime[fileUploadTime.length - 1].trim();
          }
          if (sign) {
            postData_sign = sign[sign.length - 1];
            log.info(`获取Sign: ${postData_sign}`);
            if (that.accessCode) {
              log.info("传入参数=>有密码");
              postData_p = that.accessCode;
            } else {
              log.info("传入参数=>无密码");
            }
            let postResp = await httpx.post({
              url: "https://www.lanzoux.com/ajaxm.php",
              responseType: "json",
              headers: {
                "content-type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": Utils.getRandomAndroidUA(),
                referer: window.location.origin,
              },
              data: `action=downprocess&sign=${postData_sign}&p=${postData_p}`,
            });
            if (!postResp.status) {
              return;
            }
            let respData = postResp.data;
            log.info(respData);
            if (respData.status == 200 && respData.readyState == 4) {
              let json_data = JSON.parse(respData.responseText);
              let downloadUrl = `${json_data["dom"]}/file/${json_data["url"]}`;
              let zt = json_data["zt"];
              if ("密码不正确".indexOf(json_data["inf"]) != -1) {
                Qmsg.error("密码不正确!");
                NetDiskUI.newAccessCodeView(
                  undefined,
                  "lanzou",
                  that.netDiskIndex,
                  that.shareCode,
                  (userInputAccessCode) => {
                    that.default(
                      that.netDiskIndex,
                      that.shareCode,
                      userInputAccessCode
                    );
                  }
                );
              } else {
                fileName = json_data["inf"] ? json_data["inf"] : fileName;
                downloadUrl = await NetDiskParse.getRedirectFinalUrl(
                  downloadUrl,
                  Utils.getRandomAndroidUA()
                );
                log.info(downloadUrl);

                downloadUrl = NetDiskFilterScheme.handleUrl(
                  "lanzou-static-scheme-enable",
                  "lanzou-static-scheme-forward",
                  downloadUrl
                );
                NetDiskUI.staticView.oneFile(
                  "蓝奏云单文件直链",
                  fileName,
                  fileSize,
                  downloadUrl,
                  fileUploadTime
                );
              }
            } else {
              Qmsg.error("请求失败，请重试");
            }
          } else {
            let loaddown = pageText.match(that.regexp.loadDown.match);
            if (loaddown == null) {
              loaddown = pageText.match(/cppat[\s]*\+[\s]*'(.+?)'/i);
            }
            if (loaddown != null) {
              let downloadUrl = `https://develope.lanzoug.com/file/${
                loaddown[loaddown.length - 1]
              }`;
              log.info([fileName, fileSize, downloadUrl]);
              downloadUrl = await NetDiskParse.getRedirectFinalUrl(
                downloadUrl,
                Utils.getRandomAndroidUA()
              );
              log.info(downloadUrl);

              downloadUrl = NetDiskFilterScheme.handleUrl(
                "lanzou-static-scheme-enable",
                "lanzou-static-scheme-forward",
                downloadUrl
              );
              NetDiskUI.staticView.oneFile(
                "蓝奏云单文件直链",
                fileName,
                fileSize,
                downloadUrl,
                fileUploadTime
              );
            } else {
              Qmsg.error("获取sign失败");
            }
          }
        };
        /**
         * 多文件获取
         */
        this.getMoreFile = async function () {
          let getResp = await httpx.get({
            url: that.handleUrl.default(that.shareCode),
            headers: {
              Accept: "*/*",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: window.location.origin,
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info(respData);
          if (respData.status !== 200 || respData.readyState !== 4) {
            Qmsg.error("请求失败，请重试");
            return;
          }
          let pageText = respData.responseText;
          let fid = pageText.match(/\'fid\':(.+?),/)[1].replaceAll("'", "");
          let uid = pageText.match(/\'uid\':(.+?),/)[1].replaceAll("'", "");
          let pgs = 1;
          let t_name = pageText.match(/\'t\':(.+?),/)[1];
          let t_rexp = new RegExp(t_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");");
          let t = pageText.match(t_rexp)[2];
          let k_name = pageText.match(/\'k\':(.+?),/)[1];
          let k_rexp = new RegExp(k_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");");
          let k = pageText.match(k_rexp)[2];
          let lx = that.shareCode.match(that.regexp.unicode.match) ? 1 : 2;
          let postData = `lx=${lx}&fid=${fid}&uid=${uid}&pg=${pgs}&rep=0&t=${t}&k=${k}&up=1&ls=1&pwd=${that.accessCode}`;
          log.info(`多文件请求参数：${postData}`);
          let postResp = await httpx.post({
            url: "https://www.lanzoux.com/filemoreajax.php",
            responseType: "json",
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: window.location.origin,
            },
            data: postData,
          });
          if (!postResp.status) {
            return;
          }
          let postRespData = postResp.data;
          log.info(postRespData);
          let json_data = JSON.parse(postRespData.responseText);
          let zt = json_data["zt"];
          let info = json_data["info"];
          if (zt === 4) {
            Qmsg.error(info);
          } else if (zt === 1) {
            Qmsg.success("获取文件夹成功，解析文件直链中...");
            var folder = json_data["text"]; /* 获取多文件的数组信息 */
            var folderContent = ""; /* 弹出内容 */
            log.info(`本链接一共${folder.length}个文件`);
            for (let i = 0; i < folder.length; i++) {
              let item = folder[i];
              let _shareCode_ = item.id;
              let fileName = item.name_all;
              let fileSize = item.size;
              let uploadTime = item.time;
              log.info(`第${i + 1}个开始解析`);

              let content = await that.parseMoreFile(
                _shareCode_,
                fileName,
                fileSize,
                uploadTime
              );
              log.info(`第${i + 1}个解析完毕`);
              folderContent += content;
            }
            NetDiskUI.staticView.moreFile("蓝奏云多文件直链", folderContent);
          } else if ("密码不正确".indexOf(info) !== -1) {
            Qmsg.error("密码不正确!");
            NetDiskUI.newAccessCodeView(
              undefined,
              "lanzou",
              that.netDiskIndex,
              that.shareCode,
              (userInputAccessCode) => {
                that.default(
                  that.netDiskIndex,
                  that.shareCode,
                  userInputAccessCode
                );
              }
            );
          } else if ("没有了".indexOf(info) !== -1) {
            Qmsg.error("没有文件了");
          } else {
            Qmsg.error("未知错误");
          }
        };
        /**
         * 多文件解析并返回html
         * @param {String} paramShareCode 解析多文件获取的shareCode
         * @param {String} fileName 文件名
         * @param {String} fileSize 文件大小
         * @param {String} fileUploadTime 文件上传时间
         * @returns {String}
         */
        this.parseMoreFile = async function (
          paramShareCode,
          fileName,
          fileSize,
          fileUploadTime
        ) {
          /* 根据获取到的json中多文件链接来获取单文件直链 */
          let resultContent = "";
          let getResp = await httpx.get({
            url: that.handleUrl.tp(paramShareCode),
            headers: {
              Accept: "*/*",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: window.location.origin,
            },
          });
          let respData = getResp.data;
          if (getResp.status) {
            let pageText = respData.responseText;
            let loaddown = pageText.match(that.regexp.loadDown.match);
            if (loaddown == null) {
              loaddown = pageText.match(/cppat[\s]*\+[\s]*'(.+?)'/i);
            }
            let submit_url = "javascript:;";
            let downloadUrl = "";
            if (loaddown != null) {
              let needRedirectDownloadUrl = `https://develope.lanzoug.com/file/${
                loaddown[loaddown.length - 1]
              }`;
              downloadUrl = await NetDiskParse.getRedirectFinalUrl(
                needRedirectDownloadUrl,
                Utils.getRandomAndroidUA()
              );

              submit_url = NetDiskFilterScheme.handleUrl(
                "lanzou-static-scheme-enable",
                "lanzou-static-scheme-forward",
                downloadUrl
              );
            } else if (pageText.match("来晚啦...文件取消分享了</div>")) {
              fileSize = "来晚啦...文件取消分享了";
            } else {
              fileSize = "解析直链失败";
            }
            resultContent = `
                <div class="netdisk-static-body">
                  <div class="netdisk-static-filename">
                    <a target="${
                      submit_url === "javascript:;" ? "" : "_blank"
                    }" href="${submit_url}">${fileName}</a>
                  </div>
                  <div class="netdisk-static-filesize">${fileSize}</div>
                  <div class="netdisk-static-fileuploadtime">${fileUploadTime}</div>
                </div>
              `;
          } else {
            log.error(respData);
            resultContent = `
                <div class="netdisk-static-body">
                  <div class="netdisk-static-filename">
                    <a href="javascript:;">${fileName}</a>
                  </div>
                  <div class="netdisk-static-filesize">解析失败，${getResp.msg}</div>
                </div>
              `;
          }
          return resultContent;
        };

        return this;
      },
      /**
       * 天翼云
       * @constructor
       * @returns {Object}
       */
      tianyiyun: function () {
        let that = this;
        this.code = {
          ShareNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在。",
          ShareAuditNotPass: "抱歉，该内容审核不通过",
          FileNotFound: "抱歉，文件不存在",
          ShareExpiredError: "抱歉，您访问的页面地址有误，或者该页面不存在",
          ShareAuditWaiting: "抱歉，该链接处于审核中",
          ShareInfoNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在",
          FileTooLarge: "抱歉，文件太大，不支持下载",
          InvalidSessionKey:
            "天翼云Session已失效，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才能进行登录)",
        };
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          await that.getDownloadParams();
        };
        /**
         * 获取下载参数
         * @returns
         */
        this.getDownloadParams = async function () {
          let postResp = await httpx.post({
            url: "https://cloud.189.cn/api/open/share/getShareInfoByCodeV2.action",
            data: `shareCode=${that.shareCode}`,
            headers: {
              accept: "application/json;charset=UTF-8",
              "content-type": "application/x-www-form-urlencoded",
              "user-agent":
                "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36 Edg/94.0.992.38",
              referer: "https://h5.cloud.189.cn/",
              origin: "https://h5.cloud.189.cn",
            },
          });
          if (!postResp.status) {
            return;
          }
          let postData = postResp.data;
          log.info(postData);
          let jsonData = JSON.parse(postData.responseText);
          if (postData.status == 200 && jsonData.res_code == 0) {
            log.info(jsonData);
            that.isFolder = jsonData.isFolder;
            if (that.isFolder) {
              log.info("该链接是文件夹");
              if (that.accessCode) {
                NetDiskParse.setClipboard(
                  "tianyiyun",
                  that.shareCode,
                  that.accessCode,
                  "已复制"
                );
              }
              window.open(`https://cloud.189.cn/t/${that.shareCode}`, "_blank");
              return;
            }
            if (jsonData["needAccessCode"] && !that.accessCode) {
              Qmsg.error("密码不正确!");
              NetDiskUI.newAccessCodeView(
                undefined,
                "tianyiyun",
                that.netDiskIndex,
                that.shareCode,
                (userInputAccessCode) => {
                  that.default(
                    that.netDiskIndex,
                    that.shareCode,
                    userInputAccessCode
                  );
                }
              );

              return;
            }

            that.fileId = jsonData.fileId;
            that.fileName = jsonData.fileName;
            that.fileSize = jsonData.fileSize;
            that.fileType = jsonData.fileType;
            that.shareId = jsonData.shareId;
            that.fileCreateDate = jsonData.fileCreateDate;
            that.fileLastOpTime = jsonData.fileLastOpTime;
            if (!that.shareId) {
              await that.getShareId();
            } else {
              await that.getDownloadUrl();
            }
          } else {
            if (that.code.hasOwnProperty(jsonData["res_code"])) {
              Qmsg.error(that.code[jsonData["res_code"]]);
            } else {
              Qmsg.error("获取FileId失败");
            }
          }
        };
        /**
         * 暂不需要获取cookie
         * @returns {String} ""
         */
        this.getCookie = function () {
          let cookie = "";
          return cookie;
        };
        /**
         * 获取shareId
         */
        this.getShareId = async function () {
          let getResp = await httpx.get({
            url: `https://cloud.189.cn/api/open/share/checkAccessCode.action?noCache=0.44175365295952296&shareCode=${that.shareCode}&accessCode=${that.accessCode}`,
            headers: {
              accept: "application/json;charset=UTF-8",
              "cache-control": "no-cache",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: `https://cloud.189.cn/web/share?code=${that.shareCode}`,
            },
            responseType: "json",
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info(respData);
          let jsonData = JSON.parse(respData.responseText);
          if (respData.status === 200 && jsonData["res_message"] === "成功") {
            that.shareId = jsonData["shareId"];
            await that.getDownloadUrl();
          } else {
            Qmsg.error("获取shareId失败");
            log.info(jsonData);
          }
        };
        /**
         * 获取下载链接
         */
        this.getDownloadUrl = async function () {
          let getResp = await httpx.get({
            url: `https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?noCache=0.8242175875972797&fileId=${that.fileId}&dt=1&shareId=${that.shareId}`,
            headers: {
              accept: "application/json;charset=UTF-8",
              "cache-control": "no-cache",
              "user-agent": Utils.getRandomPCUA(),
              referer: `https://cloud.189.cn/web/share?code=${that.shareCode}`,
            },
            cookie: that.getCookie(),
            responseType: "json",
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          let jsonData = JSON.parse(respData.responseText);
          log.info(jsonData);
          if (respData.status == 200 && jsonData.res_code == 0) {
            let download_url = jsonData.fileDownloadUrl;
            download_url = NetDiskFilterScheme.handleUrl(
              "tianyiyun-scheme-enable",
              "tianyiyun-scheme-forward",
              download_url
            );
            NetDiskUI.staticView.oneFile(
              "天翼云单文件直链",
              that.fileName,
              Utils.formatByteToSize(that.fileSize),
              download_url,
              that.fileCreateDate,
              that.fileLastOpTime
            );
          } else if (
            "InvalidSessionKey" === jsonData["res_code"] ||
            "InvalidSessionKey" === jsonData["errorCode"]
          ) {
            var loginPops = pops.confirm({
              title: {
                position: "center",
                text: "天翼云",
              },
              content: {
                text: that.code[jsonData.errorCode],
                html: false,
              },
              btn: {
                reverse: true,
                position: "end",
                ok: {
                  text: "前往",
                  enable: true,
                  callback: () => {
                    pops.iframe({
                      title: {
                        text: "天翼云登录",
                      },
                      loading: {
                        text: "加载中...",
                      },
                      btn: {
                        close: {
                          callback: () => {
                            loginPops?.close();
                            var waitRegister = pops.loading({
                              parent: document.body,
                              only: false,
                              content: {
                                text: "等待5s，登录的账号注册Cookies",
                              },
                              animation: GM_getValue(
                                "popsAnimation",
                                "pops-anim-fadein-zoom"
                              ),
                            });
                            var registerTianYiYunCookies = GM_openInTab(
                              "https://cloud.189.cn/web/main/",
                              { active: false, setParent: true }
                            );
                            setTimeout(() => {
                              registerTianYiYunCookies?.close();
                              waitRegister?.close();
                              that.getDownloadUrl();
                            }, 5000);
                          },
                        },
                      },
                      url: "https://cloud.189.cn/api/portal/loginUrl.action?redirectURL=https://cloud.189.cn/web/Fredirect.html",
                      height: pops.isPhone()
                        ? NetDiskUI.popsStyle.tianyiyunLoginLoading_Phone.height
                        : NetDiskUI.popsStyle.tianyiyunLoginLoading_PC.height,
                      width: pops.isPhone()
                        ? NetDiskUI.popsStyle.tianyiyunLoginLoading_Phone.width
                        : NetDiskUI.popsStyle.tianyiyunLoginLoading_PC.height,
                      drag: GM_getValue("pcDrag", false),
                      animation: GM_getValue(
                        "popsAnimation",
                        "pops-anim-fadein-zoom"
                      ),
                      sandbox: true,
                    });
                  },
                },
              },
              animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
              mask: true,
              drag: GM_getValue("pcDrag", false),
              height: pops.isPhone()
                ? NetDiskUI.popsStyle.tianyiyunIframeLogin_Phone.height
                : NetDiskUI.popsStyle.tianyiyunIframeLogin_PC.height,
              forbiddenScroll: true,
              width: pops.isPhone()
                ? NetDiskUI.popsStyle.tianyiyunIframeLogin_Phone.width
                : NetDiskUI.popsStyle.tianyiyunIframeLogin_PC.width,
            });
          } else if (that.code.hasOwnProperty(jsonData["res_code"])) {
            Qmsg.error(that.code[jsonData["res_code"]]);
          } else {
            Qmsg.error("请求失败");
            log.error(respData);
          }
        };

        return this;
      },
      /**
       * 文叔叔
       * @constructor
       * @returns {Object}
       */
      wenshushu: function () {
        let that = this;
        this.code = {
          1004: "no token",
          1008: "您没有权限访问",
          1013: "糟糕，此任务已过期销毁，下次要记得续期",
          1088: "糟糕，您访问的页面不存在",
        };
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          Qmsg.info("正在请求直链中...");
          await that.getWss();
        };
        this.getWss = async function () {
          let postResp = await httpx.post({
            url: "https://www.wenshushu.cn/ap/login/anonymous",
            responseType: "json",
            dataType: "json",
            data: JSON.stringify({
              dev_info: "{}",
            }),
            headers: {
              accept: "application/json, text/plain, */*",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: window.location.origin,
            },
          });
          log.success(postResp);
          if (!postResp.status) {
            return;
          }
          let respData = postResp.data;
          let jsonData = JSON.parse(respData.responseText);
          if (respData.status == 200 && jsonData["code"] == 0) {
            that.token = jsonData["data"]["token"];
            await that.getPid();
          } else if (jsonData["code"] in that.code) {
            Qmsg.error(that.code[jsonData["code"]]);
          } else {
            Qmsg.error("获取wss失败");
          }
        };
        /**
         * 获取pid
         * @returns {Promise}
         */
        this.getPid = async function () {
          let postResp = await httpx.post({
            url: "https://www.wenshushu.cn/ap/task/mgrtask",
            dataType: "json",
            responseType: "json",
            data: JSON.stringify({
              tid: that.shareCode,
              password: "",
              ufileid: "",
            }),
            headers: {
              accept: "application/json, text/plain, */*",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: window.location.origin,
              "x-token": that.token,
            },
          });
          log.success(postResp);
          if (!postResp.status) {
            return;
          }
          let respData = postResp.data;
          let jsonData = JSON.parse(respData.responseText);
          if (respData.status == 200 && jsonData["code"] == 0) {
            let bid = jsonData["data"]["boxid"];
            let pid = jsonData["data"]["ufileid"];
            await that.getFileNList(bid, pid);
          } else if (jsonData["code"] in that.code) {
            Qmsg.error(that.code[jsonData["code"]]);
          } else {
            Qmsg.error("获取pid失败");
          }
        };
        /**
         * 获取文件列表信息
         * @param {string} bid
         * @param {string} pid
         * @returns
         */
        this.getFileNList = async function (bid, pid) {
          let postResp = await httpx.post({
            url: "https://www.wenshushu.cn/ap/ufile/nlist",
            dataType: "json",
            responseType: "json",
            data: JSON.stringify({
              start: 0,
              sort: {
                name: "asc",
              },
              bid: bid,
              pid: pid,
              options: {
                uploader: "true",
              },
              size: 50,
            }),
            headers: {
              accept: "application/json, text/plain, */*",
              "user-agent":
                "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
              referer: window.location.origin,
              "x-token": that.token,
            },
          });
          log.success(postResp);
          if (!postResp.status) {
            return;
          }
          let respData = postResp.data;
          let jsonData = JSON.parse(respData.responseText);
          if (respData.status == 200 && jsonData["code"] == 0) {
            if (jsonData["data"]["fileList"][0]["type"] === 2) {
              Qmsg.error("该链接为多层级文件嵌套，跳转");
              NetDiskParse.blank(
                NetDiskParse.getBlankUrl(
                  "wenshushu",
                  that.netDiskIndex,
                  that.shareCode,
                  that.accessCode
                ),
                "wenshushu",
                that.shareCode,
                that.accessCode
              );
            } else {
              await that.getDownloadUrl(jsonData["data"]["fileList"][0]);
            }
          } else if (jsonData["code"] in that.code) {
            Qmsg.error(that.code[jsonData["code"]]);
          } else {
            Qmsg.error("获取文件信息失败");
          }
        };
        /**
         * 获取下载链接
         * @param {Object} data
         * @returns {Promise}
         */
        this.getDownloadUrl = async function (data) {
          let file_name = data.fname;
          let file_size = Utils.formatByteToSize(data.size);
          let postResp = await httpx.post({
            url: "https://www.wenshushu.cn/ap/dl/sign",
            dataType: "json",
            responseType: "json",
            data: JSON.stringify({
              ufileid: data.fid,
              consumeCode: 0,
            }),
            headers: {
              accept: "application/json, text/plain, */*",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: window.location.origin,
              "x-token": that.token,
            },
          });
          if (!postResp.status) {
            return;
          }
          log.success(postResp);
          let respData = postResp.data;
          let jsonData = JSON.parse(respData.responseText);
          if (respData.status == 200 && jsonData["code"] == 0) {
            let download_url = jsonData["data"]["url"];
            if (download_url === "") {
              Qmsg.error("对方的分享流量不足");
            } else {
              download_url = NetDiskFilterScheme.handleUrl(
                "wenshushu-static-scheme-enable",
                "wenshushu-static-scheme-forward",
                download_url
              );
              /* 文叔叔没有上传时间信息(暂时是这样的) */
              NetDiskUI.staticView.oneFile(
                "文叔叔单文件直链",
                file_name,
                file_size,
                download_url
              );
            }
          } else if (jsonData["data"] in that.code) {
            Qmsg.error(that.code[jsonData["data"]]);
          } else {
            Qmsg.error("获取下载链接失败");
          }
        };
        return this;
      },
      /**
       * 123盘
       * @constructor
       * @returns {Object}
       */
      _123pan: function () {
        let that = this;
        this.code = {
          5103: "分享码错误或者分享地址错误",
          5104: "分享已过期",
          "-1000": "获取出错",
          "-2000": "请求异常",
          "-3000": "请求意外中止",
          "-4000": "请求超时",
          104: "文件已失效",
        };
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          that.panelList = [];
          that.panelContent = "";
          let checkLinkValidityStatus = await that.checkLinkValidity();
          if (!checkLinkValidityStatus) {
            return;
          }
          let infoLists = await that.getFiles();
          if (!infoLists) {
            return;
          }
          if (infoLists.length === 1 && infoLists[0]["Type"] == 0) {
            let fileInfo = infoLists[0];
            if (fileInfo["Status"] == 104) {
              Qmsg.error("文件已失效");
              return;
            }
            let downloadUrl = fileInfo["DownloadUrl"];
            let fileSize = "";
            if (downloadUrl === "") {
              let downloadInfo = await that.getFileDownloadInfo(
                fileInfo["Etag"],
                fileInfo["FileId"],
                fileInfo["S3KeyFlag"],
                that.shareCode,
                fileInfo["Size"]
              );
              if (downloadInfo && downloadInfo["code"] === 0) {
                downloadUrl = NetDiskFilterScheme.handleUrl(
                  "_123pan-static-scheme-enable",
                  "_123pan-static-scheme-forward",
                  downloadInfo["data"]["DownloadURL"]
                );
                fileSize = Utils.formatByteToSize(fileInfo["Size"]);
              } else {
                downloadUrl = "javascript:;";
                fileSize = "获取下载链接失败";
              }
            } else {
              downloadUrl = NetDiskFilterScheme.handleUrl(
                "_123pan-static-scheme-enable",
                "_123pan-static-scheme-forward",
                downloadUrl
              );
              fileSize = Utils.formatByteToSize(fileInfo["Size"]);
            }
            console.log(fileInfo);
            let fileUploadTime = new Date(fileInfo["CreateAt"]).getTime();
            let fileLatestTime = new Date(fileInfo["UpdateAt"]).getTime();
            fileUploadTime = Utils.formatTime(fileUploadTime);
            fileLatestTime = Utils.formatTime(fileLatestTime);
            NetDiskUI.staticView.oneFile(
              "123盘单文件直链",
              fileInfo["FileName"],
              fileSize,
              downloadUrl,
              fileUploadTime,
              fileLatestTime
            );
          } else {
            Qmsg.info("正在递归文件");
            that.folderNumber = 0;
            await that.recursiveAlgorithm(infoLists);
            Qmsg.info("正在排序中...");

            Utils.sortListByProperty(that.panelList, (item) => {
              let timeStamp = new Date(item["updateTime"]).getTime();
              return timeStamp;
            });
            log.info(that.panelList);
            that.panelList.forEach((item) => {
              let fileUploadTime = new Date(item["createTime"]).getTime();
              let fileLatestTime = new Date(item["updateTime"]).getTime();
              fileUploadTime = Utils.formatTime(fileUploadTime);
              fileLatestTime = Utils.formatTime(fileLatestTime);
              if (item["fileSize"] === 0) {
                /* 异常的 */
                if (
                  typeof item["url"] === "string" &&
                  !item["url"].startsWith("http")
                ) {
                  that.panelContent += `
                  <div class="netdisk-static-body">
                      <div class="netdisk-static-filename">
                          <a href="javascript:;">${item["fileName"]}</a>
                      </div>
                      <div class="netdisk-static-filesize">${item["url"]}</div>
                      <div class="netdisk-static-fileuploadtime">${fileUploadTime}</div>
                      <div class="netdisk-static-filelatesttime">${fileLatestTime}</div>
                  </div>`;
                } else {
                  that.panelContent += `
                  <div class="netdisk-static-body">
                      <div class="netdisk-static-filename">
                          <a href="javascript:;">${item["fileName"]}</a>
                      </div>
                      <div class="netdisk-static-filesize">获取直链失败</div>
                  </div>`;
                }
              } else {
                /* 正常的 */
                that.panelContent += `
                <div class="netdisk-static-body">
                    <div class="netdisk-static-filename">
                        <a target="_blank" href="${item["url"]}">${item["fileName"]}</a>
                    </div>
                    <div class="netdisk-static-filesize">${item["fileSize"]}</div>
                    <div class="netdisk-static-fileuploadtime">${fileUploadTime}</div>
                      <div class="netdisk-static-filelatesttime">${fileLatestTime}</div>
                </div>`;
              }
            });
            NetDiskUI.staticView.moreFile("123盘多文件直链", that.panelContent);
            log.info("递归完毕");
          }
        };
        /**
         * 校验链接有效性
         * @returns {Boolean}
         */
        this.checkLinkValidity = async function () {
          Qmsg.info("正在校验链接有效性");
          let url = `https://www.123pan.com/s/${that.shareCode}`;

          let getResp = await httpx.get({
            url: url,
            headers: {
              "user-agent": Utils.getRandomPCUA(),
              referer: "https://www.123pan.com",
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return false;
          }
          let respData = getResp.data;
          let g_initialPropsMatch = respData.responseText.match(
            /window.g_initialProps[\s]*=[\s]*\{(.+?)\};/s
          );
          if (g_initialPropsMatch) {
            log.info(g_initialPropsMatch);
            let g_initialProps = JSON.parse(
              `{${g_initialPropsMatch[g_initialPropsMatch.length - 1]}}`
            );
            log.info(g_initialProps);
            if (g_initialProps.res.code !== 0) {
              Qmsg.error(g_initialProps.res.message);
              return false;
            }
            let HasPwd = g_initialProps.res.data.HasPwd;
            if (HasPwd && (that.accessCode == null || that.accessCode === "")) {
              /* 该链接需要密码但是没有获取到 */
              Qmsg.error("密码缺失!");
              NetDiskUI.newAccessCodeView(
                "密码缺失",
                "_123pan",
                that.netDiskIndex,
                that.shareCode,
                (userInputAccessCode) => {
                  that.default(
                    that.netDiskIndex,
                    that.shareCode,
                    userInputAccessCode
                  );
                }
              );
            } else {
              /* 该链接不需要密码 || 该链接需要密码且已获取到 */
              return true;
            }
          } else {
            Qmsg.error("校验链接-获取初始化内容失败");
          }
        };
        /**
         * 获取文件
         * @param {*} parentFileId
         * @returns
         */
        this.getFiles = async function (parentFileId = 0) {
          let url = `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              accept: "*/*",
              "user-agent": Utils.getRandomPCUA(),
              referer: `https://www.123pan.com/s/${that.shareCode}`,
            },
          });
          log.info(getResp);
          if (getResp.status) {
            let respData = getResp.data;
            let json_data = JSON.parse(respData.responseText);
            if (respData.status === 200 && json_data["code"] === 0) {
              let infoList = json_data["data"]["InfoList"];
              return infoList;
            } else if (json_data["code"] == 5103) {
              NetDiskUI.newAccessCodeView(
                undefined,
                "_123pan",
                that.netDiskIndex,
                that.shareCode,
                (userInputAccessCode) => {
                  that.default(
                    that.netDiskIndex,
                    that.shareCode,
                    userInputAccessCode
                  );
                }
              );
            } else if (that.code[json_data["code"]]) {
              Qmsg.error(that.code[json_data["code"]]);
            } else {
              Qmsg.error(json_data["message"]);
            }
          }
        };
        /**
         * 递归算法使用的请求
         * @param {String} parentFileId
         * @returns
         */
        this.getFilesByRec = async function (parentFileId) {
          let getResp = await httpx.get({
            url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`,
            headers: {
              accept: "*/*",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: `https://www.123pan.com/s/${that.shareCode}`,
            },
          });
          if (getResp.status) {
            let respData = getResp.data;
            log.info(respData);
            let jsonData = JSON.parse(respData.responseText);
            if (respData.status == 200 && jsonData["code"] == 0) {
              return jsonData["data"]["InfoList"];
            }
          }
        };
        /**
         * 异步递归算法
         * @param {Array} infoList
         */
        this.recursiveAlgorithm = async function (infoList) {
          for (let i = 0; i < infoList.length; i++) {
            let item = infoList[i];
            let fileType = item["Type"];
            log.info(fileType ? "文件夹" : "文件");
            if (fileType) {
              /* 是文件夹 */
              let retList = await that.getFilesByRec(item["FileId"]);
              retList && (await that.recursiveAlgorithm(retList));
            } else {
              /* 是文件 */
              log.info(item);
              let fileName = item["FileName"];
              let fileSize = Utils.formatByteToSize(item["Size"]);
              let fileDownloadUrl = item["DownloadUrl"];
              let fileStatus = item["Status"]; /* 文件有效状态 */
              if (fileStatus == 104) {
                that.panelList = [
                  ...that.panelList,
                  {
                    url: "文件已失效",
                    fileName: fileName,
                    fileSize: 0,
                    createTime: item["CreateAt"],
                    updateTime: item["UpdateAt"],
                  },
                ];
              } else if (fileDownloadUrl === "") {
                let downloadInfo = await that.getFileDownloadInfo(
                  item["Etag"],
                  item["FileId"],
                  item["S3KeyFlag"],
                  that.shareCode,
                  item["Size"]
                );
                if (downloadInfo && downloadInfo["code"] === 0) {
                  fileDownloadUrl = downloadInfo["data"]["DownloadURL"];
                  NetDiskFilterScheme.handleUrl(
                    "_123pan-static-scheme-enable",
                    "_123pan-static-scheme-forward",
                    fileDownloadUrl
                  );
                  that.panelList = [
                    ...that.panelList,
                    {
                      url: fileDownloadUrl,
                      fileName: fileName,
                      fileSize: fileSize,
                      createTime: item["CreateAt"],
                      updateTime: item["UpdateAt"],
                    },
                  ];
                } else {
                  that.panelList = [
                    ...that.panelList,
                    {
                      url: "获取下载链接失败",
                      fileName: fileName,
                      fileSize: 0,
                      createTime: item["CreateAt"],
                      updateTime: item["UpdateAt"],
                    },
                  ];
                }
              } else {
                fileDownloadUrl = NetDiskFilterScheme.handleUrl(
                  "_123pan-static-scheme-enable",
                  "_123pan-static-scheme-forward",
                  fileDownloadUrl
                );
                that.panelList = [
                  ...that.panelList,
                  {
                    url: fileDownloadUrl,
                    fileName: fileName,
                    fileSize: fileSize,
                    createTime: item["CreateAt"],
                    updateTime: item["UpdateAt"],
                  },
                ];
              }
            }
          }
        };
        /**
         * 获取单文件下载链接
         * @param {String} Etag
         * @param {String} FileID
         * @param {String} S3keyFlag
         * @param {String} ShareKey
         * @param {String} Size
         * @returns
         */
        this.getFileDownloadInfo = async function (
          Etag,
          FileID,
          S3keyFlag,
          ShareKey,
          Size
        ) {
          let postResp = await httpx.post({
            url: "http://www.123pan.com/a/api/share/download/info",
            data: JSON.stringify({
              Etag: Etag,
              FileID: FileID,
              S3keyFlag: S3keyFlag,
              ShareKey: ShareKey,
              Size: Size,
            }),
            headers: {
              accept: "*/*",
              "user-agent": Utils.getRandomPCUA(),
            },
          });
          if (!postResp.status) {
            return;
          }
          let postData = postResp.data;
          let jsonData = JSON.parse(postData.responseText);
          log.info(jsonData);
          if (jsonData["code"] == 0) {
            jsonData["data"]["DownloadURL"] = that.decodeDownloadUrl(
              jsonData["data"]["DownloadURL"]
            );
            return jsonData;
          } else {
            return {
              code: jsonData["code"],
            };
          }
        };
        /**
         * 将直链的param参数解析成真正的直链
         * @param {String} url
         * @returns
         */
        this.decodeDownloadUrl = function (url) {
          if (url === "") {
            return "";
          }
          let decodeURL = new URL(url);
          let params = decodeURL.search.replace(/^\?params=/gi, "");
          params = params.split("&")[0];
          try {
            let atobURL = atob(params);
            return decodeURI(atobURL);
          } catch (error) {
            log.error(error);
            return url;
          }
        };
        return this;
      },
      /**
       * 坚果云
       * @constructor
       * @returns {Object}
       */
      jianguoyun: function () {
        let that = this;
        this.errorCode = {
          UnAuthorized: "请先登录坚果云账号",
        };
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          let downloadParams = await that.getRequestDownloadParams();
          if (!downloadParams) {
            return;
          }
          if (downloadParams["isdir"]) {
            /* 是文件夹 */
            that.parseMoreFile(downloadParams["hash"], downloadParams["name"]);
          } else {
            /* 是文件 */
            let fileSize = Utils.formatByteToSize(downloadParams["size"]);
            let downloadUrl = await that.getFileLink(
              downloadParams.hash,
              downloadParams.name
            );
            if (!downloadUrl) {
              return;
            }
            downloadUrl = NetDiskFilterScheme.handleUrl(
              "jianguoyun-static-scheme-enable",
              "jianguoyun-static-scheme-forward",
              downloadUrl
            );
            log.info(downloadUrl);
            /* 坚果云盘没有上传时间信息(暂时是这样的) */
            NetDiskUI.staticView.oneFile(
              "坚果云盘单文件直链",
              downloadParams["name"],
              fileSize,
              downloadUrl
            );
          }
        };
        /**
         * 解析多文件信息
         * @param {String} hash 文件hash值
         * @param {String} fileName 文件名
         * @returns
         */
        this.parseMoreFile = async function (hash = "", fileName = "") {
          let folderInfo = await that.getFolderInfo(hash);
          if (!folderInfo) {
            return;
          }
          let downloadList = [];
          for (let i = 0; i < folderInfo.length; i++) {
            let item = folderInfo[i];
            let downloadUrl = await that.getDirLink(
              hash,
              fileName,
              item["relPath"]
            );
            if (!downloadUrl) {
              return;
            }
            downloadUrl = NetDiskFilterScheme.handleUrl(
              "jianguoyun-static-scheme-enable",
              "jianguoyun-static-scheme-forward",
              downloadUrl
            );
            log.info(downloadUrl);
            downloadList = [
              ...downloadList,
              {
                url: downloadUrl,
                name: item["relPath"].replace(/^\//gi, ""),
                size: Utils.formatByteToSize(item["size"]),
                mtime: item["mtime"],
                content: "",
              },
            ];
            await Utils.sleep(150);
          }
          if (downloadList.length == 0) {
            return;
          }
          let folderContent = "";

          Utils.sortListByProperty(downloadList, (item) => {
            return item["mtime"];
          });

          downloadList.forEach((item) => {
            folderContent = `${folderContent}
                <div class="netdisk-static-body">
                  <div class="netdisk-static-filename">
                    <a target="_blank" href="${item["url"]}">${item["name"]}</a>
                  </div>
                  <div class="netdisk-static-filesize">${item["size"]}</div>
                </div>
                `;
          });
          /* 坚果云盘没有上传时间信息(暂时是这样的) */
          NetDiskUI.staticView.moreFile("坚果云多文件直链", folderContent);
        };
        /**
         * 获取下载链接所需要的hash值和name
         */
        this.getRequestDownloadParams = async function () {
          log.info("获取hash值");
          Qmsg.info("正在获取请求信息");
          let pageInfoRegexp = /var[\s]*PageInfo[\s]*=[\s]*{([\s\S]+)};/i;
          let formData = new FormData();
          formData.append("pd", that.accessCode);
          let requestDetails = {
            url: `https://www.jianguoyun.com/p/${that.shareCode}`,
            data: that.accessCode === "" ? undefined : `pd=${that.accessCode}`,
            responseType: "html",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              "User-Agent": Utils.getRandomPCUA(),
              referer: `https://www.jianguoyun.com/p/${that.shareCode}`,
            },
          };
          let requestResp = null;
          if (that.accessCode === "") {
            requestResp = await httpx.get(requestDetails);
          } else {
            requestResp = await httpx.post(requestDetails);
          }
          if (!requestResp.status) {
            return;
          }
          let respData = requestResp.data;
          log.info("请求信息");
          log.info(respData);
          let pageInfo = respData.responseText.match(pageInfoRegexp);
          if (pageInfo) {
            pageInfo = pageInfo[pageInfo.length - 1];
            pageInfo = `({${pageInfo}})`;
            pageInfo = eval(pageInfo);
            log.info(pageInfo);
            let fileName = pageInfo["name"];
            let fileSize = pageInfo["size"];
            let fileHash = pageInfo["hash"];
            let fileNeedsPassword = pageInfo["needsPassword"];
            let fileOwner = pageInfo["owner"];
            let isdir = pageInfo["isdir"];
            let fileErrorCode = pageInfo["errorCode"];
            fileName = decodeURIComponent(fileName);
            log.success("是否是文件夹 ===> " + isdir);
            log.success("hash ===> " + fileHash);
            log.success("name ===> " + fileName);
            log.success("size ===> " + fileSize);
            if (
              fileNeedsPassword &&
              (that.accessCode == null || that.accessCode === "")
            ) {
              /* 需要密码但没密码 */
              Qmsg.error("密码不正确!");
              NetDiskUI.newAccessCodeView(
                "密码缺失",
                "jianguoyun",
                that.netDiskIndex,
                that.shareCode,
                (userInputAccessCode) => {
                  that.default(
                    that.netDiskIndex,
                    that.shareCode,
                    userInputAccessCode
                  );
                }
              );
              return;
            }
            if (fileErrorCode === "AuthenticationFailed") {
              Qmsg.error("密码错误");
              NetDiskUI.newAccessCodeView(
                undefined,
                "jianguoyun",
                that.netDiskIndex,
                that.shareCode,
                (userInputAccessCode) => {
                  that.default(
                    that.netDiskIndex,
                    that.shareCode,
                    userInputAccessCode
                  );
                }
              );
              return;
            }
            if (fileHash === "" || fileHash == null) {
              log.error("hash为空，可能文件被撤销分享了");
              Qmsg.error(`文件分享已被撤销`);
              return;
            }
            if (fileSize == null && isdir == false) {
              log.error("无size，可能文件被删除了");
              Qmsg.error(`“${fileName}”文件已被拥有者（“${fileOwner}”）删除`);
              return;
            } else {
              return {
                name: fileName,
                hash: fileHash,
                size: fileSize,
                needsPassword: fileNeedsPassword,
                owner: fileOwner,
                isdir: isdir,
              };
            }
          } else if (
            respData.responseText.match("对不起，找不到您指定的文件。")
          ) {
            log.error("啊噢！ (404) 对不起，找不到您指定的文件。");
            Qmsg.error("坚果云: 对不起，找不到您指定的文件。");
          } else if (
            respData.responseText.match("对不起，您的某些输入不正确。")
          ) {
            log.error("可能该链接不需要访问码或者访问码有问题");
            NetDiskUI.newAccessCodeView(
              undefined,
              "jianguoyun",
              that.netDiskIndex,
              that.shareCode,
              (userInputAccessCode) => {
                that.default(
                  that.netDiskIndex,
                  that.shareCode,
                  userInputAccessCode
                );
              }
            );
          } else {
            log.error("获取PageInfo失败");
            Qmsg.error("坚果云: 获取PageInfo失败");
          }
        };
        /**
         * 获取下载链接
         * @param {String} fileHash 文件hash值
         * @param {String} fileName 文件名
         */
        this.getFileLink = async function (fileHash = "", fileName = "") {
          fileName = encodeURIComponent(fileName);
          let getResp = await httpx.get({
            url: `https://www.jianguoyun.com/d/ajax/fileops/pubFileLink?k=${fileHash}&name=${fileName}&wm=false${
              that.accessCode === "" ? "" : "&pd=" + that.accessCode
            }&forwin=1&_=${new Date().getTime()}`,
            responseType: "json",
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info("请求信息");
          log.info(respData);
          try {
            let resultJSON = JSON.parse(respData.responseText);
            log.info(resultJSON);
            if (resultJSON.hasOwnProperty("errorCode")) {
              Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
              return;
            } else {
              return resultJSON["url"];
            }
          } catch (error) {
            log.error(error);
            Qmsg.error("坚果云: 处理下载链接异常");
            return;
          }
        };
        /**
         * 获取文件夹下的文件下载链接
         * @param {String} fileHash
         * @param {String} fileName
         * @param {String} filePath
         * @returns
         */
        this.getDirLink = async function (
          fileHash = "",
          fileName = "",
          filePath = "/"
        ) {
          fileName = encodeURIComponent(fileName);
          let getResp = await httpx.get({
            url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRLink?k=${fileHash}&dn=${fileName}&p=${filePath}&forwin=1&_=${new Date().getTime()}`,
            responseType: "json",
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;

          log.info("请求信息");
          log.info(respData);
          try {
            let resultJSON = JSON.parse(respData.responseText);
            log.info(resultJSON);
            if (resultJSON.hasOwnProperty("errorCode")) {
              Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
              return;
            } else {
              return resultJSON["url"];
            }
          } catch (error) {
            log.error(error);
            Qmsg.error("坚果云: 处理下载链接异常");
            return;
          }
        };
        /**
         * 获取文件夹信息
         * @param {String} hash
         * @returns
         */
        this.getFolderInfo = async function (hash = "") {
          let getResp = await httpx.get({
            url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRBrowse?hash=${hash}&relPath=%2F&_=${new Date().getTime()}`,
            responseType: "json",
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info("请求信息");
          log.info(respData);
          try {
            let resultJSON = JSON.parse(respData.responseText);
            log.info(resultJSON);
            return resultJSON["objects"];
          } catch (error) {
            log.error(error);
            Qmsg.error("坚果云: 处理多文件信息异常");
            return;
          }
        };

        return this;
      },
    },
    /**
     * 网盘链接解析
     * @param {String} netDiskName 网盘名称
     * @param {Number} netDiskIndex 网盘名称索引下标
     * @param {String} shareCode
     * @param {String} accessCode
     */
    async parse(netDiskName, netDiskIndex, shareCode, accessCode) {
      Qmsg.info("正在获取直链");
      if (this.netDisk[netDiskName]) {
        var parseObj = new this.netDisk[netDiskName]();
        await parseObj.default(netDiskIndex, shareCode, accessCode);
      } else {
        log.error(`${netDiskName} 不存在解析`);
        Qmsg.error("该链接不存在解析功能");
      }
    },
    /**
     * 复制到剪贴板
     * @param {String} netDiskName
     * @param {String} shareCode
     * @param {String} accessCode
     * @param {String} toastText 提示的文字
     */
    setClipboard(
      netDiskName,
      shareCode,
      accessCode,
      toastText = "提取码已复制"
    ) {
      GM_setClipboard(accessCode);
      GM_setValue("tempNetDiskInfo", {
        shareCode: shareCode,
        accessCode: accessCode,
        netDiskName: netDiskName,
      });
      Qmsg.success(toastText);
    },
    /**
     * 新标签页打开
     * @param {String} url
     * @param {String} netDiskName
     * @param {String} shareCode
     * @param {String} accessCode
     */
    blank(url, netDiskName, shareCode, accessCode) {
      if (accessCode) {
        NetDiskParse.setClipboard(netDiskName, shareCode, accessCode);
      }
      document
        .querySelector("meta[name='referrer']")
        ?.setAttribute(
          "content",
          "no-referrer"
        ); /* 百度网盘会拒绝referrer不安全访问 */
      window.open(url);
    },
    /**
     * 对链接进行scheme过滤
     * @param {String} netDiskName 网盘名称
     * @param {Number} netDiskIndex 网盘名称索引下标
     * @param {String} shareCode
     * @param {String} accessCode
     */
    scheme(netDiskName, netDiskIndex, shareCode, accessCode) {
      let netDiskMatchRegular = NetDisk.regular[netDiskName][netDiskIndex];
      let url = netDiskMatchRegular.blank.replace(/{#shareCode#}/gi, shareCode);
      url = NetDiskFilterScheme.handleUrl(
        `${netDiskName}-scheme-enable`,
        `${netDiskName}-scheme-forward`,
        url
      );
      window.open(url);
    },
    /**
     * 获取重定向后的直链
     * @param {String} url
     * @param {String} userAgent 用户代理字符串
     * @returns
     */
    async getRedirectFinalUrl(url, userAgent) {
      Qmsg.success("获取重定向后的直链");
      log.info("开始获取重定向后的直链");
      let headResp = await httpx.head({
        url: url,
        headers: {
          "user-agent": userAgent,
          referer: window.location.origin,
        },
      });
      if (headResp.status) {
        return headResp.data.finalUrl;
      } else {
        return url;
      }
    },
    /**
     * 获取用于跳转的url
     * @param {string} netDiskName
     * @param {number} netDiskIndex
     * @param {string|undefined} shareCode
     * @param {string|undefined} accessCode
     */
    getBlankUrl(netDiskName, netDiskIndex, shareCode, accessCode) {
      let url = NetDisk.regular[netDiskName][netDiskIndex].blank;
      if (shareCode) {
        url = url.replaceAll("{#shareCode#}", shareCode);
      }
      if (accessCode) {
        url = url.replaceAll("{#accessCode#}", accessCode);
      }
      return url;
    },
  };

  /**
   * android scheme调用
   */
  const NetDiskFilterScheme = {
    defaultScheme:
      "jumpwsv://go?package=idm.internet.download.manager.plus&activity=idm.internet.download.manager.UrlHandlerDownloader&intentAction=android.intent.action.VIEW&intentData={#intentData#}&intentExtra=",
    packageIDM: "idm.internet.download.manager.plus",
    activityIDM: "idm.internet.download.manager.UrlHandlerDownloader",
    defaultAction: "android.intent.action.VIEW",
    defaultExtra: "",
    /**
     *
     * @param {String} enable_key 是否启用key
     * @param {String} forward_key 转发的scheme
     * @param {String} url 需要转发的url
     * @returns
     */
    handleUrl(enable_key, forward_key, url) {
      if (!GM_getValue(enable_key, false)) {
        return url;
      }
      url = url.replace(/&/g, "{-and-}");
      url = url.replace(/#/g, "{-number-}");
      let thisScheme = GM_getValue(forward_key, this.defaultScheme);
      thisScheme = thisScheme.replace("{#intentData#}", url);
      return thisScheme;
    },
  };

  /**
   * 自动填入访问码
   */
  const NetDiskAutoFillAccessCode = {
    /**
     * 临时数据 {
        "shareCode": "",
        "accessCode": "",
        "netDiskName": ""
    }
     * @type {object|undefined}
     */
    tempData: GM_getValue("tempNetDiskInfo"),
    /**
     * @type {Boolean|undefined} 自动输入访问码是否开启
     */
    enable: GM_getValue("autoFillAccessCode"),
    shareCode: null,
    accessCode: null,
    netDiskName: null,
    /**
     * 入口
     */
    default() {
      if (!this.tempData) {
        return;
      }
      if (!this.enable) {
        return;
      }
      this.shareCode = this.tempData["shareCode"];
      this.accessCode = this.tempData["accessCode"];
      this.netDiskName = this.tempData["netDiskName"];
      if (Utils.isNull(this.accessCode)) {
        return;
      }
      if (window.location.href.indexOf(this.shareCode) === -1) {
        return;
      }
      if (this.netDiskName in NetDiskAutoFillAccessCode) {
        NetDiskAutoFillAccessCode[this.netDiskName]();
      }
    },
    /**
     * 百度网盘
     */
    baidu() {},
    /**
     * 蓝奏云
     */
    lanzou() {
      if (window.location.hostname.match(/lanzou[a-z]{1}.com/gi)) {
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("#pwd").then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          nodeList[0].value = this.accessCode;
          Utils.dispatchEvent(nodeList[0], "input");
          document
            .querySelector("#passwddiv > div > div.passwddiv-input > div")
            ?.click();
          document.querySelector("#sub")?.click();
        });
      }
    },
    /**
     * 天翼云
     */
    tianyiyun() {
      if (window.location.hostname === "cloud.189.cn") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("input#code_txt").then((nodeList) => {
          setTimeout(() => {
            let codeTxt = nodeList[0];
            let visitBtn = document.querySelector(".btn.btn-primary.visit");
            if (!Utils.isVisible(codeTxt)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            codeTxt.value = this.accessCode;
            codeTxt._value = this.accessCode;
            Utils.dispatchEvent(codeTxt, "input");
            Utils.dispatchEvent(visitBtn, "click");
          }, 500);
        });
      }
      if (window.location.hostname === "h5.cloud.189.cn") {
        /* 移动端 */
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("input.access-code-input").then((nodeList) => {
          setTimeout(() => {
            let accessInput = nodeList[0];
            if (!Utils.isVisible(accessInput)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            accessInput.value = this.accessCode;
            accessInput._value = this.accessCode;
            Utils.dispatchEvent(accessInput, "input");
            Utils.dispatchEvent(document.querySelector("div.button"), "click");
          }, 500);
        });
      }
    },
    /**
     * 中国移动云盘
     */
    hecaiyun() {
      if (window.location.hostname === "caiyun.139.com") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("#token-input").then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          nodeList[0].value = this.accessCode;
          Utils.dispatchEvent(nodeList[0], "input");
          document
            .querySelector("#homepage div.token div.token-form a")
            .click();
        });
        /* 移动端 */
        Utils.waitNode("#app div.token-form input[type=text]").then(
          (nodeList) => {
            if (!Utils.isVisible(nodeList[0])) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            nodeList[0].value = this.accessCode;
            Utils.dispatchEvent(nodeList[0], "input");
            document.querySelector("div.token-form a.btn-token").click();
          }
        );
      }
    },
    /**
     * 阿里云盘
     */
    aliyun() {
      if (window.location.hostname === "www.aliyundrive.com") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("#root input.ant-input").then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          nodeList[0].value = this.accessCode;
          Utils.getReactObj(nodeList[0]).reactFiber.memoizedProps.onChange({
            currentTarget: nodeList[0],
            target: nodeList[0],
          });
          document.querySelector('#root button[type="submit"]').click();
        });

        /* ------------------------------------ */

        /* 移动端 */
        Utils.waitNode("#root input[name=pwd]").then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          nodeList[0].value = this.accessCode;
          Utils.getReactObj(nodeList[0]).reactFiber.memoizedProps.onChange({
            currentTarget: nodeList[0],
            target: nodeList[0],
          });
          document.querySelector('#root button[type="submit"]').click();
        });
      }
    },
    /**
     * 文叔叔
     */
    wenshushu() {
      /* 暂时没找到有密码的链接 */
    },
    /**
     * 奶牛
     */
    nainiu() {
      /* 暂时没找到有密码的链接 */
    },
    /**
     * 123云盘
     */
    _123pan() {
      if (window.location.hostname === "www.123pan.com") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("#app .ca-fot input.ant-input[type=text]").then(
          (nodeList) => {
            if (!Utils.isVisible(nodeList[0])) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            Utils.getReactObj(nodeList[0]).reactProps.onChange({
              target: {
                value: this.accessCode,
              },
            });
            nodeList[0].nextSibling.click();
          }
        );

        /* ------------------------------------ */

        /* 移动端 */
        Utils.waitNode("#app .appinput input.ant-input[type=text]").then(
          (nodeList) => {
            if (!Utils.isVisible(nodeList[0])) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            Utils.getReactObj(nodeList[0]).reactProps.onChange({
              target: {
                value: this.accessCode,
              },
            });
            nodeList[0].nextSibling.click();
          }
        );
      }
    },
    /**
     * 腾讯微云
     */
    weiyun() {
      if (window.location.hostname === "share.weiyun.com") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("#app input.input-txt").then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          nodeList[0].value = this.accessCode;
          Utils.dispatchEvent(nodeList[0], "input");
          Utils.dispatchEvent(nodeList[0], "change");
          setTimeout(() => {
            document.querySelector(".form-item button.btn-main").click();
          }, 500);
        });

        /* ------------------------------------ */

        /* 移动端 */
        Utils.waitNode(".input-wrap input.pw-input").then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          nodeList[0].value = this.accessCode;
          Utils.dispatchEvent(nodeList[0], "input");
          Utils.dispatchEvent(nodeList[0], "change");
          setTimeout(() => {
            document.querySelector(".pw-btn-wrap button.btn").click();
          }, 500);
        });
      }
    },
    /**
     * 云雷
     */
    xunlei() {
      if (window.location.hostname === "pan.xunlei.com") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode(
          "#__layout div.pass-input-wrap input.td-input__inner"
        ).then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          log.error("输入框不可见，不输入密码");
          nodeList[0].value = this.accessCode;
          Utils.dispatchEvent(nodeList[0], "input");
          Utils.dispatchEvent(nodeList[0], "change");
          setTimeout(() => {
            document
              .querySelector("#__layout div.pass-input-wrap button.td-button")
              .click();
          }, 500);
        });

        /* ------------------------------------ */

        /* 移动端 */
        Utils.waitNode("#__layout div.pass-wrapper input.td-input__inner").then(
          (nodeList) => {
            if (!Utils.isVisible(nodeList[0])) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            log.error("输入框不可见，不输入密码");
            nodeList[0].value = this.accessCode;
            Utils.dispatchEvent(nodeList[0], "input");
            Utils.dispatchEvent(nodeList[0], "change");
            setTimeout(() => {
              document
                .querySelector("#__layout div.pass-wrapper button.td-button")
                .click();
            }, 500);
          }
        );
      }
    },
    /**
     * 115网盘
     */
    _115pan() {
      if (window.location.hostname === "115.com") {
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("input.text").then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          nodeList[0].value = this.accessCode;
          Utils.dispatchEvent(nodeList[0], "input");
          document
            .querySelector("#js-share_code div.form-decode div.submit a")
            .click();
        });
      }
    },
    /**
     * 城通网盘
     */
    chengtong() {
      if (
        window.location.hostname === "url95.ctfile.com" ||
        window.location.hostname === "pan.jc-box.com" ||
        window.location.hostname === "download.jamcz.com" ||
        window.location.hostname === "u062.com" ||
        window.location.hostname === "down.jc-box.com" ||
        window.location.hostname === "download.cx05.cc" ||
        window.location.hostname === "089u.com"
      ) {
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode("#passcode").then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          nodeList[0].value = this.accessCode;
          Utils.dispatchEvent(nodeList[0], "input");
          document
            .querySelector("#main-content .form-group button.btn[type=button]")
            .click();
        });
      }
    },
    /**
     * 夸克网盘
     */
    kuake() {
      if (window.location.hostname === "pan.quark.cn") {
        log.success(["自动填写链接", this.tempData]);
        Utils.waitNode(
          "#ice-container input.ant-input[class*=ShareReceive]"
        ).then((nodeList) => {
          if (!Utils.isVisible(nodeList[0])) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          (
            Utils.getReactObj(nodeList[0]).reactProps ||
            Utils.getReactObj(nodeList[0]).reactEventHandlers
          ).onChange({
            target: {
              value: this.accessCode,
            },
          });
        });
      }
    },
    /**
     * 坚果云
     */
    jianguoyun() {
      /* 暂时没找到有密码的链接 */
    },
    /**
     * OneDrive
     */
    onedrive() {
      /* 暂时没找到有密码的链接 */
    },
  };

  const NetDiskWorker = {
    blobUrl: "",
    GM_matchWorker: null,
    /**
     * 初始化Worker的Blob链接
     */
    initWorkerBlobLink() {
      const handleMatch = `
			(() => {
        this.addEventListener(
          "message",
          function (event) {
            let data = event.data;
            let link_regexp = data["regexp"];
            let pageText = data["pageText"];
            let netDiskName = data["netDiskName"];
            let netDiskIndex = data["netDiskIndex"];
            let matchData = pageText.match(link_regexp);
            matchData = matchData ? matchData : [];
            this.postMessage({
              msg: matchData.length
                ? "workercallback: success! " + matchData.length.toString()
                : "workercallback: none",
              netDiskName: netDiskName,
              netDiskIndex: netDiskIndex,
              data: matchData,
            });
          },
          false
        );
      })();
      `;
      var blob = new Blob([handleMatch]);
      NetDiskWorker.blobUrl = window.URL.createObjectURL(blob);
      log.info(`Worker Blobk Link ===> ${NetDiskWorker.blobUrl}`);
    },
    /**
     * 初始化Worker对象
     */
    initWorker() {
      try {
        NetDiskWorker.GM_matchWorker = new Worker(NetDiskWorker.blobUrl);
        NetDiskWorker.GM_matchWorker.onmessage = function (event) {
          NetDiskWorker.successCallBack(
            event.data["data"],
            event.data["netDiskName"],
            event.data["netDiskIndex"]
          );
        };
        NetDiskWorker.GM_matchWorker.onerror = function (error) {
          NetDiskWorker.errorCallBack(error);
        };
      } catch (error) {
        log.error(error);
        log.error(
          "初始化Worker失败，可能页面使用了Content-Security-Policy策略，使用另类方法"
        );
        this.GM_matchWorker = {
          postMessage(data) {
            try {
              let link_regexp = data["regexp"];
              let pageText = data["pageText"];
              let netDiskName = data["netDiskName"];
              let netDiskIndex = data["netDiskIndex"];
              let matchData = pageText.match(link_regexp);
              matchData = matchData ? matchData : [];
              NetDiskWorker.successCallBack(
                matchData,
                netDiskName,
                netDiskIndex
              );
            } catch (error) {
              NetDiskWorker.errorCallBack(error);
            }
          },
        };
      }
    },
    /**
     * worker处理文件匹配后的回调
     * @param {String} matchLink
     * @param {String} netDiskName
     * @param {Number} netDiskIndex
     */
    successCallBack(matchLink, netDiskName, netDiskIndex) {
      /* 匹配为空，释放锁 */
      if (!matchLink.length) {
        setTimeout(() => {
          NetDiskUI.isHandling = false;
        }, parseFloat(GM_getValue("delaytime", 0.8)) * 1000);
        return;
      }
      /* 已匹配到的网盘，用于显示图标 */
      NetDisk.matchLink.add(netDiskName);
      /* 匹配到的可能很多，使用集合去重 */
      let matchLinkSet = new Set();
      matchLink.forEach((item) => {
        matchLinkSet.add(item);
      });
      matchLinkSet.forEach((item) => {
        /* console.log("处理中"); */
        NetDisk.handleLink(netDiskName, netDiskIndex, item);
      });
      if (NetDisk.hasMatchLink) {
        NetDiskUI.suspension.show();
      }
      setTimeout(() => {
        NetDiskUI.isHandling = false;
      }, parseFloat(GM_getValue("delaytime", 0.8)) * 1000);
    },
    /**
     * Worker失败回调
     * @param {Object} error
     */
    errorCallBack(error) {
      NetDiskUI.isHandling = false;
      log.error(["Worker Error", error]);
    },
  };

  const NetDiskUI = {
    matchIcon: new Set() /* 已匹配到的网盘图标字典 */,
    size: parseInt(GM_getValue("size", 50)) /* 高度和宽度 */,
    opacity: parseFloat(GM_getValue("opacity", 1)) /* 按钮透明度 */,
    isCreatedUISetting: false /* 是否 已创建设置界面 */,
    isHandling: false /* 是否 在处理页面链接中标识 */,
    isRandBg: false /* 是否 正在循环切换按钮背景 */,
    uiLinkAlias: null /* 链接层唯一标识 */,
    uiSettingAlias: null /* 设置层唯一标识 */,
    uiLinkParseAlias: "单文件直链层" /* 单文件直链层唯一标识 */,
    uiLinkParseMoreAlias: "多文件直链层" /* 多文件直链层唯一标识 */,
    uiPasswordAlias: "重输密码层" /* 重输密码层唯一标识 */,
    popsStyle: {
      /**
       * 桌面端 天翼云密码登录iframe
       */
      tianyiyunIframeLogin_PC: {
        width: "50vw",
        height: "180px",
      },
      /**
       * 移动端 天翼云密码登录iframe
       */
      tianyiyunIframeLogin_Phone: {
        width: "88vw",
        height: "180px",
      },
      /**
       * 桌面端 天翼云密码登录后注册Cookie弹窗
       */
      tianyiyunLoginLoading_PC: {
        width: "350px",
        height: "400px",
      },
      /**
       * 移动端 天翼云密码登录后注册Cookie弹窗
       */
      tianyiyunLoginLoading_Phone: {
        width: "350px",
        height: "400px",
      },
      /**
       * 桌面端 设置界面
       */
      setting_PC: {
        width: "50vw",
        height: "65vh",
      },
      /**
       * 移动端 设置界面
       */
      setting_Phone: {
        width: "88vw",
        height: "60vh",
      },
      /**
       * 桌面端 (主)网盘链接界面
       */
      netDiskView_PC: {
        width: "50vw",
        height: "65vh",
      },
      /**
       * 移动端 (主)网盘链接界面
       */
      netDiskView_Phone: {
        width: "88vw",
        height: "50vh",
      },
      /**
       * 桌面端 单文件弹窗
       */
      oneFileStaticView_PC: {
        width: "50vw",
        height: "220px",
      },
      /**
       * 移动端 单文件弹窗
       */
      oneFileStaticView_Phone: {
        width: "88vw",
        height: "220px",
      },
      /**
       * 桌面端 多文件弹窗
       */
      moreFileStaticView_PC: {
        width: "50vw",
        height: "400px",
      },
      /**
       * 移动端 多文件弹窗
       */
      moreFileStaticView_Phone: {
        width: "88vw",
        height: "400px",
      },
      /**
       * 桌面端 新密码、错误密码输入弹窗
       */
      newAccessCodeView_PC: {
        width: "50vw",
        height: "160px",
      },
      /**
       * 移动端 新密码、错误密码输入弹窗
       */
      newAccessCodeView_Phone: {
        width: "88vw",
        height: "160px",
      },
      /**
       * 桌面端 历史存储记录弹窗
       */
      netDiskHistoryMatchView_PC: {
        width: "50vw",
        height: "65vh",
      },
      /**
       * 移动端 历史存储记录弹窗
       */
      netDiskHistoryMatchView_Phone: {
        width: "88vw",
        height: "60vh",
      },
    },
    src: {
      /* 图标 */
      icon: {
        baidu: RESOURCE_ICON.baidu,
        lanzou: RESOURCE_ICON.lanzou,
        tianyiyun: RESOURCE_ICON.tianyiyun,
        hecaiyun: RESOURCE_ICON.hecaiyun,
        aliyun: RESOURCE_ICON.aliyun,
        wenshushu: RESOURCE_ICON.wenshushu,
        nainiu: RESOURCE_ICON.nainiu,
        _123pan: RESOURCE_ICON._123pan,
        weiyun: RESOURCE_ICON.weiyun,
        xunlei: RESOURCE_ICON.xunlei,
        _115pan: RESOURCE_ICON._115pan,
        chengtong: RESOURCE_ICON.chengtong,
        kuake: RESOURCE_ICON.kuake,
        magnet: RESOURCE_ICON.magnet,
        jianguoyun: RESOURCE_ICON.jianguoyun,
        onedrive: RESOURCE_ICON.onedrive,
      } /* icon结尾处 */,
    },
    suspension: {
      /*  悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮） */
      isShow: false,
      show() {
        if (!NetDiskUI.suspension.isShow) {
          this.createUI();
          this.initPop();
          this.setSuspensionEvent();
          this.setSuspensionDefaultPositionEvent();
          NetDiskUI.suspension.isShow = true;
        }
        this.backgroundSwitch();
      },
      createUI() {
        if (NetDiskUI.size < 15) {
          /* 大小不能小于 15px */
          GM_setValue("size", 15);
          NetDiskUI.size = 15;
        }
        if (NetDiskUI.size > 250) {
          /* 大小不能大于 250px */
          GM_setValue("size", 250);
          NetDiskUI.size = 250;
        }
        if (NetDiskUI.opacity < 0.1) {
          /* 透明度不能小于 0.1 */
          GM_setValue("opacity", 0.1);
          NetDiskUI.opacity = 0.1;
        }
        if (NetDiskUI.opacity > 1.0) {
          /* 透明度不能大于 1.0 */
          GM_setValue("opacity", 1);
          NetDiskUI.opacity = 1;
        }
        this.loadCSS();
        let suspensionNode = jQuery(`
				<div  class="whitesevSuspension"
              id="whitesevSuspensionId"
              style="
                width: ${NetDiskUI.size}px;
                height: ${NetDiskUI.size}px;
                opacity: ${NetDiskUI.opacity}">
					<div class="whitesevSuspensionMain">
						<div class="whitesevSuspensionFloor">
							<div class="netdisk"></div>
						</div>
					</div>
				</div>
				`);

        jQuery("body").append(suspensionNode);
      },
      /**
       * 所有的弹窗初始化设置
       */
      initPop() {
        Qmsg.config({
          position: GM_getValue("qmsg-position", "top"),
          html: true,
          maxNums: parseInt(GM_getValue("qmsg-maxnums", 3)),
          autoClose: true,
          showClose: false,
          showReverse: GM_getValue("qmsg-showreverse", false),
        });

        GM_addStyle(`
				.whitesevPop{
					user-select: unset;
				}
        .whitesevPop .pops-alert-content{
          padding: 15px;
        }
				.whitesevPop-whitesevPopSetting .whitesevPop-buttonSpcl{
					display: none;
				}
				.whitesevPop-whitesevPopSetting .whitesevPop-content{
					overflow: auto;
				}
        .whitesevPopSetting .netdisk-setting-main{
          padding: 6px 20px 6px 20px;
        }
        .whitesevPopSetting details.netdisk-setting-menu {
          margin: 10px 0px;
        }
        .whitesevPopSetting details.netdisk-setting-menu summary{
          background-color: #f0f0f0;
          color: #333;
          font-size: 18px;
          padding: 10px;
          border: 1px solid #ccc;
        }
        .whitesevPopSetting details.netdisk-setting-menu summary:hover{
          background-color: #dedede;
        }
				.netdisk-setting-menu-item{
					display:flex;
          justify-content: space-between;
					display: flex;
					align-items: center;
				}
				.netdisk-setting-menu-item label{
					width:150px;
					padding-right: 15px;
				}
				.netdisk-setting-menu-item[type=checkbox]{
					align-items: flex-start;
				}
				.netdisk-setting-menu-item[type=checkbox],
        .netdisk-setting-menu-item[type="scheme"]{
					display: flex;
    			height: 50px;
				}
				.netdisk-setting-menu-item[type=checkbox] p,
        .netdisk-setting-menu-item[type="scheme"] p{
					align-self: center;
    			width: 150px;
				}
				.netdisk-setting-menu-item input[type=text],
				.netdisk-setting-menu-item input[type=number],
				.netdisk-setting-menu-item input[type=range]{
					border: none;
					border-bottom: 1px solid #8f8e8e;
					width: 60%;
          padding: 0px 2px;
				}
				.netdisk-setting-menu-item input[type=text]:focus,
				.netdisk-setting-menu-item input[type=number]:focus{
					outline: none;
    			border-bottom: 1px solid #2196f3;
				}
				.netdisk-setting-menu[type='百度'] .netdisk-setting-menu-item,
				.netdisk-setting-menu[type='总设置'] .netdisk-setting-menu-item{
					margin: 12px 0px;
				}
				.netdisk-setting-menu[type='总设置'] .netdisk-setting-menu-item{
					align-items: center;
					display: flex;
    			justify-content: space-between;
				}
				.netdisk-setting-menu-item select{
					background-color: #fff;
				}
				/*checkbox美化*/
				/* CSS规则保持重复，以便您可以轻松获取每个按钮的CSS规则 :) */

				.netdisk-checkbox .knobs, 
				.netdisk-checkbox .layer{
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
				}
				.netdisk-checkbox{
					position: relative;
					top: 50%;
					width: 56px;
					height: 28px;
					margin: 0px auto 0 auto;
					overflow: hidden;
					transform: translateY(-50%);
				}
				.netdisk-checkbox input[type="checkbox"]{
						position: relative;
						width: 100%;
						height: 100%;
						padding: 0;
						margin: 0;
						opacity: 0;
						cursor: pointer;
						z-index: 3;
				}
				.netdisk-checkbox .knobs{
						z-index: 2;
				}
				.netdisk-checkbox .layer{
						width: 100%;
						background-color: #fcebeb;
						transition: 0.3s ease all;
						z-index: 1;
				}
				.netdisk-checkbox .knobs:before,
				.netdisk-checkbox .knobs span{
					position: relative;
					display: block;
					top: 50%;
					left: 30%;
					width: 35%;
    			height: 65%;
					color: #fff;
					font-size: 10px;
					font-weight: bold;
					text-align: center;
					line-height: 1;
					padding: 9px 4px;
					transform: translate(-50%,-50%);
				}			
				.netdisk-checkbox .knobs span{
						background-color: #F44336;
						border-radius: 2px;
						transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
						z-index: 1;
				}
				.netdisk-checkbox .knobs:before{
					transition: 0.3s ease all, left 0.5s cubic-bezier(0.18, 0.89, 0.35, 1.15);
					z-index: 2;
			  }
				.netdisk-checkbox input[type="checkbox"]:checked + .knobs span{
					left: 70%;
					background-color: #03A9F4;
			  }
				.netdisk-checkbox input[type="checkbox"]:checked ~ .layer{
						background-color: #ebf7fc;
				}

				/*range美化*/
				.netdisk-setting-menu-item input[type=range] {
					background-size: 98% 3px;
					background: linear-gradient(to right, #ccc 0%, #ccc 100%);
					outline: none;
					-webkit-appearance: none;
					/*清除系统默认样式*/
					height: 1px;
					/*横条的高度*/
				}
				.netdisk-setting-menu-item input[type=range]::-webkit-slider-thumb {
						width: 15px;
						height: 15px;
						border-radius: 50%;
						background-color: #fff;
						box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);
						cursor: pointer;
						-webkit-appearance: none;
						border: 0;
				}

        /* select美化 无法美化option*/
        .netdisk-setting-menu-item select{
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          width: 200px;
          border: 1px solid #5c5c5c;
          border-radius: 5px;
          text-align: center;
          outline: 0;
        }
        .netdisk-setting-menu-item select:focus{
          border: 1px solid #002bff;
        }
        /* select美化*/
				`);
        /* 给PC端的滚动条进行美化 */
        if (!pops.isPhone()) {
          GM_addStyle(`
					.whitesevPop ::-webkit-scrollbar
					{
							width: 11px;
							height: 16px;
							background-color: #ffffff;
					}
					/*定义滚动条轨道 内阴影+圆角*/
					.whitesevPop ::-webkit-scrollbar-track
					{
							-webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 25%);
							border-radius:10px;
							background-color: #f2f2f2;
					}
					/*定义滑块 内阴影+圆角*/
					.whitesevPop ::-webkit-scrollbar-thumb
					{
							border-radius: 16px;
							-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
							background-color: #3597ff;
					}
					`);
        }
      },
      /**
       * 显示设置界面
       */
      showSettingView() {
        /**
         * 获取设置界面的html
         * @returns {String}
         */
        function getPopsSettingHTML() {
          let netDiskSettingHTML = "";
          let netDiskDetailsList = [
            {
              type: "百度网盘",
              key: "baidu",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: `
                      <div class="netdisk-setting-menu-item">
                          <label>网址-Url</label>
                          <input type="text" data-key="bdurl" placeholder="如：https://www.example.com/">
                      </div>
                      <div class="netdisk-setting-menu-item">
                          <label>参数-Key</label>
                          <input type="text" data-key="paramSurl" placeholder="如：surl">
                      </div>
                      <div class="netdisk-setting-menu-item">
                          <label>密码-Key</label>
                          <input type="text" data-key="paramPwd" placeholder="如：pwd">
                      </div>
                      <div class="netdisk-setting-menu-item">
                          <label>密钥-Key</label>
                          <input type="text" data-key="paramKey" placeholder="如：Password">
                      </div>
                      <div class="netdisk-setting-menu-item">
                          <label>密钥-Value</label>
                          <input type="text" data-key="paramWebSiteKey"  placeholder="密钥，有就填">
                      </div>
                      <div class="netdisk-setting-menu-item" type="checkbox">
                          <p>第三方解析站启用密钥验证</p>
                          <div class="netdisk-checkbox">
                            <input type="checkbox" data-key="baidu-website-key-enable">
                            <div class="knobs"><span></span></div><div class="layer"></div>
                          </div>
                          
                      </div>
                      <div class="netdisk-setting-menu-item" type="checkbox">
                          <p>启用第三方解析</p>
                          <div class="netdisk-checkbox">
                            <input type="checkbox" data-key="baidu-static-enable" mutex=".netdisk-checkbox input[data-key='baidu-open-enable']">
                            <div class="knobs"><span></span></div><div class="layer"></div>
                          </div>
                      </div>`,
              endHTML: "",
            },
            {
              type: "蓝奏云",
              key: "lanzou",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "天翼云",
              key: "tianyiyun",
              checkbox_oneStatic: true,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "中国移动云盘(原:和彩云)",
              key: "hecaiyun",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "阿里云",
              key: "aliyun",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "文叔叔",
              key: "wenshushu",
              checkbox_oneStatic: true,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "奶牛",
              key: "nainiu",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "123盘",
              key: "_123pan",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "微云",
              key: "weiyun",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "迅雷云盘",
              key: "xunlei",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "115盘",
              key: "_115pan",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "城通网盘",
              key: "chengtong",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "夸克网盘",
              key: "kuake",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "磁力magnet",
              key: "magnet",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: false,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: false,
              range_innerText_default_value: 0,
              range_innerHTML: false,
              range_innerHTML_default_value: 0,
              firstHTML: `
            <div class="netdisk-setting-menu-item" type="checkbox">
                <p>调用scheme</p>
                <div class="netdisk-checkbox">
                  <input type="checkbox" data-key="magnet-scheme-enable">
                  <div class="knobs"><span></span></div><div class="layer"></div>
                </div>
            </div>
            <div class="netdisk-setting-menu-item" type="scheme">
                <p>scheme转发</p>
                <input type="text" data-key="magnet-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
            </div>
            `,
              endHTML: "",
            },
            {
              type: "坚果云",
              key: "jianguoyun",
              checkbox_oneStatic: true,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "OneDrive",
              key: "onedrive",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 300,
              firstHTML: "",
              endHTML: "",
            },
          ];
          netDiskDetailsList.forEach((item) => {
            netDiskSettingHTML += `
            <details class="netdisk-setting-menu" type="${item.type}">
              <summary>${item.type}</summary>
              ${item.firstHTML}
              ${
                item.checkbox_oneStatic
                  ? `
              <div class="netdisk-setting-menu-item" type="checkbox">
                <p>单文件直链获取</p>
                <div class="netdisk-checkbox">
                  <input  type="checkbox"
                          data-key="${item.key}-static-enable"
                          mutex=".netdisk-checkbox input[data-key='${item.key}-open-enable']">
                  <div class="knobs"><span></span></div><div class="layer"></div>
                </div>
              </div>
              `
                  : ""
              }
              ${
                item.checkbox_oneOrMoreStatic
                  ? `
              <div class="netdisk-setting-menu-item" type="checkbox">
                  <p>单/多文件直链获取</p>
                  <div class="netdisk-checkbox">
                    <input  type="checkbox"
                            data-key="${item.key}-static-enable"
                            mutex=".netdisk-checkbox
                            input[data-key='${item.key}-open-enable']">
                    <div class="knobs"><span></span></div><div class="layer"></div>
                  </div>
              </div>
              `
                  : ""
              }
              ${
                item.checkbox_openBlank
                  ? `
              <div class="netdisk-setting-menu-item" type="checkbox">
                  <p>新标签页打开</p>
                  <div class="netdisk-checkbox">
                    <input  type="checkbox"
                            data-key="${item.key}-open-enable"
                            mutex=".netdisk-checkbox input[data-key='${item.key}-static-enable']">
                    <div class="knobs"><span></span></div>
                    <div class="layer"></div>
                  </div>
              </div>
              `
                  : ""
              }
              ${
                item.checkbox_static_scheme
                  ? `
              <div class="netdisk-setting-menu-item" type="checkbox">
                  <p>直链调用scheme</p>
                  <div class="netdisk-checkbox">
                    <input  type="checkbox" 
                            data-key="${item.key}-static-scheme-enable">
                    <div class="knobs"><span></span></div><div class="layer"></div>
                  </div>
              </div>
              `
                  : ""
              }
              ${
                item.text_static_scheme_forward
                  ? `
              <div class="netdisk-setting-menu-item" type="scheme">
                  <p>scheme直链转发</p>
                  <input  type="text" 
                      data-key="${item.key}-static-scheme-forward"
                      placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
              </div>
              `
                  : ""
              }
              ${
                item.range_innerText
                  ? `
              <div class="netdisk-setting-menu-item">
                  <label data-id="netdisk-innerText_${
                    item.key
                  }">提取码间隔(Text)${GM_getValue(
                      `innerText_${item.key}`,
                      parseInt(item.range_innerText_default_value)
                    )}</label>
                  <input  type="range"
                          data-key="innerText_${item.key}"
                          data-content="提取码间隔(Text)"
                          min="0"
                          max="100"
                          data-default="20">
              </div>
              `
                  : ""
              }
              ${
                item.range_innerHTML
                  ? `
              <div class="netdisk-setting-menu-item">
                  <label data-id="netdisk-innerHTML_${
                    item.key
                  }">提取码间隔(HTML)${GM_getValue(
                      `innerHTML_${item.key}`,
                      parseInt(item.range_innerHTML_default_value)
                    )}</label>
                  <input  type="range"
                          data-key="innerHTML_${item.key}"
                          data-content="提取码间隔(HTML)"
                          min="0"
                          max="500"
                          data-default="300">
              </div>
              `
                  : ""
              }
              ${item.endHTML}
            </details>
            `;
          });

          netDiskSettingHTML = `
          <div class="netdisk-setting-body">
            <div class="netdisk-setting">
              <div class="netdisk-setting-main">
                <details class="netdisk-setting-menu" type="总设置">
                    <summary>总设置</summary>
                    <div class="netdisk-setting-menu-item">
                        <label data-id="netdisk-size">大小 ${GM_getValue(
                          "size",
                          50
                        )}</label>
                        <input type="range" data-key="size" data-content="大小 " min="15" max="250" data-default="50">
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label data-id="netdisk-opacity" content="透明度 ">透明度 ${GM_getValue(
                          "opacity",
                          1
                        )}</label>
                        <input type="range" data-key="opacity" data-content="透明度 " min="0.1" max="1" step="0.1" data-default="1">
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label data-id="netdisk-randbg-time" content="按钮背景切换时间(毫秒) ">按钮背景切换时间(毫秒) ${GM_getValue(
                          "randbg-time",
                          1500
                        )}</label>
                        <input type="range" data-key="randbg-time" data-content="按钮背景切换时间(毫秒) " min="0" max="10000" step="100" data-default="1500">
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label data-id="netdisk-randbg-show-time" content="按钮背景停留时间(毫秒) ">按钮背景停留时间(毫秒) ${GM_getValue(
                          "randbg-show-time",
                          1200
                        )}</label>
                        <input type="range" data-key="randbg-show-time" data-content="按钮背景停留时间(毫秒) " min="0" max="10000" step="100" data-default="1200">
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label data-id="netdisk-delaytime">文本延迟match(秒) ${GM_getValue(
                          "delaytime",
                          0.8
                        )}</label>
                        <input type="range" data-key="delaytime" data-content="文本延迟match(秒) " min="0.6" step="0.1" max="5.0" data-default="0.8">
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label>匹配类型</label>
                        <select data-key="pageMatchRange" data-default="all">
                            <option data-value="all">全部</option>
                            <option data-value="innerText">普通文本</option>
                            <option data-value="innerHTML">超文本</option>
                        </select>
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label>弹窗动画</label>
                        <select data-key="popsAnimation" data-default="pops-anim-fadein-zoom">
                            <option data-value="pops-anim-spread">spread</option>
                            <option data-value="pops-anim-shake">shake</option>
                            <option data-value="pops-anim-rolling-left">rolling-left</option>
                            <option data-value="pops-anim-rolling-right">rolling-right</option>
                            <option data-value="pops-anim-slide-top">slide-top</option>
                            <option data-value="pops-anim-slide-bottom">slide-bottom</option>
                            <option data-value="pops-anim-slide-left">slide-left</option>
                            <option data-value="pops-anim-slide-right">slide-right</option>
                            <option data-value="pops-anim-fadein">fadein</option>
                            <option data-value="pops-anim-fadein-zoom">fadein-zoom</option>
                            <option data-value="pops-anim-fadein-alert">fadein-alert</option>
                            <option data-value="pops-anim-don">don</option>
                            <option data-value="pops-anim-roll">roll</option>
                            <option data-value="pops-anim-sandra">sandra</option>
                            <option data-value="pops-anim-gather">gather</option>
                        </select>
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label>Toast位置</label>
                        <select data-key="qmsg-position" data-default="top">
                            <option data-value="topleft">左上角</option>
                            <option data-value="top">顶部</option>
                            <option data-value="topright">右上角</option>
                            <option data-value="left">左边</option>
                            <option data-value="center">中间</option>
                            <option data-value="right">右边</option>
                            <option data-value="bottomleft">左下角</option>
                            <option data-value="bottom">底部</option>
                            <option data-value="bottomright">右下角</option>
                        </select>
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label>Toast同时显示最多数量</label>
                        <select data-key="qmsg-maxnums" data-default="3">
                            <option data-value="1">1</option>
                            <option data-value="2">2</option>
                            <option data-value="3">3</option>
                            <option data-value="4">4</option>
                            <option data-value="5">5</option>
                        </select>
                    </div>
                    <div class="netdisk-setting-menu-item">
                        <label>历史记录排序规则</label>
                        <select data-key="netdisk-history-match-ordering-rule" data-default="按 更新时间 - 降序">
                            <option data-value="按 记录时间 - 升序">按 记录时间 - 升序</option>
                            <option data-value="按 记录时间 - 降序">按 记录时间 - 降序</option>
                            <option data-value="按 更新时间 - 升序">按 更新时间 - 升序</option>
                            <option data-value="按 更新时间 - 降序">按 更新时间 - 降序</option>
                        </select>
                    </div>
                    <div class="netdisk-setting-menu-item" type="checkbox">
                        <p>Toast逆序弹出</p>
                        <div class="netdisk-checkbox" style="position: inherit;top: unset;transform: matrix(1, 0, 0, 1, 0, 0);">
                          <input type="checkbox" data-key="qmsg-showreverse">
                          <div class="knobs"><span></span></div><div class="layer"></div>
                        </div>
                    </div>
                    <div class="netdisk-setting-menu-item" type="checkbox">
                        <p>读取剪贴板</p>
                        <div class="netdisk-checkbox" style="position: inherit;top: unset;transform: matrix(1, 0, 0, 1, 0, 0);">
                          <input type="checkbox" data-key="readClipboard">
                          <div class="knobs"><span></span></div><div class="layer"></div>
                        </div>
                    </div>
                    <div class="netdisk-setting-menu-item" type="checkbox">
                        <p>PC端拖拽窗口</p>
                        <div class="netdisk-checkbox" style="position: inherit;top: unset;transform: matrix(1, 0, 0, 1, 0, 0);">
                          <input type="checkbox" data-key="pcDrag">
                          <div class="knobs"><span></span></div><div class="layer"></div>
                        </div>
                    </div>
                    <div class="netdisk-setting-menu-item" type="checkbox">
                        <p>存储匹配记录</p>
                        <div class="netdisk-checkbox" style="position: inherit;top: unset;transform: matrix(1, 0, 0, 1, 0, 0);">
                          <input type="checkbox" data-key="saveMatchNetDisk">
                          <div class="knobs"><span></span></div><div class="layer"></div>
                        </div>
                    </div>
                    <div class="netdisk-setting-menu-item" type="checkbox">
                        <p>自动输入访问码</p>
                        <div class="netdisk-checkbox" style="position: inherit;top: unset;transform: matrix(1, 0, 0, 1, 0, 0);">
                          <input type="checkbox" data-key="autoFillAccessCode">
                          <div class="knobs"><span></span></div><div class="layer"></div>
                        </div>
                    </div>
                </details>
                ${netDiskSettingHTML}
                </div>
              </div>
            </div>`;
          return netDiskSettingHTML;
        }
        /**
         * 设置input checkbox 复选框 是否选中事件
         */
        function setSettingInputEvent() {
          jQuery(".netdisk-setting input").each((index, item) => {
            let data_key = item.getAttribute("data-key");
            let data_default = item.getAttribute("data-default");
            item.value = GM_getValue(data_key, data_default)
              ? GM_getValue(data_key, data_default)
              : "";
            switch (item.getAttribute("type")) {
              case "checkbox":
                item.checked = GM_getValue(data_key, false);
                let mutex = item.getAttribute("mutex");
                jQuery(item).on("click", function () {
                  GM_setValue(data_key, item.checked);
                  let mutexNode = jQuery(mutex);
                  if (mutex && mutexNode.length) {
                    /* 存在互斥的元素DOM,且当前checked为true，把互斥的DOM元素Checked设置为false */
                    let mutex_data_key = mutexNode.attr("data-key");
                    if (item.checked) {
                      mutexNode.prop("checked", false);
                      GM_setValue(mutex_data_key, false);
                    }
                  }
                });
                break;
              case "range":
                jQuery(item).on("input propertychange", (val) => {
                  jQuery(`.netdisk-setting label[data-id=netdisk-${data_key}]`).html(
                    `${item.getAttribute("data-content")}${item.value}`
                  );
                  let itSize = jQuery(".netdisk-setting input[data-key=size]").val();
                  jQuery("#whitesevSuspensionId").css({
                    width: `${itSize}px`,
                    height: `${itSize}px`,
                    opacity: jQuery(
                      ".netdisk-setting input[data-key=opacity]"
                    ).val(),
                  });
                  NetDiskUI.size = itSize;
                  NetDiskUI.suspension.setSuspensionDefaultPositionEvent();
                  GM_setValue(data_key, item.value);
                });

              default:
                jQuery(item).on("input propertychange", (val) => {
                  GM_setValue(data_key, item.value);
                });
            }
          });
        }
        /**
         * 设置 select元素 下拉列表的默认选项值
         */
        function setSettingSelectEvent() {
          jQuery(".netdisk-setting select").change(function (event) {
            let data_key = event.target.getAttribute("data-key");
            let data_value =
              event.target[event.target.selectedIndex].getAttribute(
                "data-value"
              );
            GM_setValue(data_key, data_value);
          });

          jQuery(".netdisk-setting-menu-item select").each((index, item) => {
            item = jQuery(item);
            let dataKey = item.attr("data-key");
            let dataDefaultValue = item.attr("data-default");
            let getDataValue = GM_getValue(dataKey, dataDefaultValue);
            item
              .find(`option[data-value='${getDataValue}']`)
              .attr("selected", true);
          });
        }
        /**
         * 设置 点击 label 弹出设置input range的默认值 事件
         */
        function setSettingLabelEvent() {
          jQuery(NetDiskUI.uiSettingAlias.popsElement)
            .find("label[data-id*=netdisk-]")
            .on("click", function () {
              let obj = jQuery(this);
              let dataKey = obj.next().attr("data-key");
              let dataDefaultValue = obj.next().attr("data-default");
              let currentValue = obj.next().val();
              pops.confirm({
                mask: true,
                title: {
                  text: "提示",
                  position: "center",
                },
                content: {
                  text: `当前设置的值为:${currentValue}，是否修改为默认值:${dataDefaultValue} ？`,
                },
                btn: {
                  ok: {
                    callback: function (_event_) {
                      log.info(
                        `当前 ==> ${currentValue}，默认值 ==> ${dataDefaultValue}`
                      );
                      GM_setValue(dataKey, dataDefaultValue);
                      obj.next().val(dataDefaultValue);
                      obj.next().trigger("propertychange");
                      _event_.close();
                    },
                  },
                },
                forbiddenScroll: true,
              });
            });
          jQuery(NetDiskUI.uiSettingAlias.popsElement)
            .find("label[data-id*=netdisk-]")
            .each((index, item) => {
              jQuery(item).css("cursor", "pointer");
            });
        }
        NetDiskUI.uiSettingAlias = pops.alert({
          title: {
            text: "设置",
            position: "center",
          },
          content: {
            text: getPopsSettingHTML(),
            html: true,
          },
          btn: {
            ok: {
              enable: true,
              callback: function (event) {
                event.close();
              },
            },
            close: {
              callback: function (event) {
                event.close();
              },
            },
          },
          animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
          class: "whitesevPopSetting",
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.setting_Phone.height
            : NetDiskUI.popsStyle.setting_PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.setting_Phone.width
            : NetDiskUI.popsStyle.setting_PC.width,
          drag: GM_getValue("pcDrag", false),
          mask: true,
          forbiddenScroll: true,
        });
        setSettingInputEvent();
        setSettingSelectEvent();
        setSettingLabelEvent();
      },
      /**
       * 设置 悬浮按钮所有事件
       */
      setSuspensionEvent() {
        let needDragEle = document.getElementById("whitesevSuspensionId");
        let that = this;
        let dragNode = new AnyTouch(needDragEle);
        let timerID = null;
        let isClicked = false;
        let isDouble = false; /* 是否双击 */
        let clickDeviation_X = 0; /* 点击元素，距离元素左上角的X轴偏移 */
        let clickDeviation_Y = 0; /* 点击元素，距离元素左上角的Y轴偏移 */
        /**
         * 设置悬浮按钮 按下事件
         */
        dragNode.on("pan", function (event) {
          if (!isClicked) {
            isClicked = true;
            if (event.nativeEvent.offsetX) {
              clickDeviation_X = parseInt(event.nativeEvent.offsetX);
            } else {
              clickDeviation_X = parseInt(event.getOffset().x);
            }
            if (event.nativeEvent.offsetY) {
              clickDeviation_Y = parseInt(event.nativeEvent.offsetY);
            } else {
              clickDeviation_Y = parseInt(event.getOffset().y);
            }
            jQuery("#whitesevSuspensionId").css({
              cursor: "move",
              transition: "none",
            });
          }
          /**
           * 移动
           */
          if (event.phase === "move") {
            /* 悬浮按钮大小不能超过250px */
            if (clickDeviation_X > 250 || clickDeviation_Y > 250) {
              return;
            }
            var clientMax_X =
              jQuery(window).width() - NetDiskUI.size; /* 最大的X轴 指从左至右*/
            var clientMax_Y =
              jQuery(window).height() - NetDiskUI.size; /* 最大的Y轴 指从上至下 */
            var clientMove_X = event.x - clickDeviation_X; /* 当前移动的X轴 */
            var clientMove_Y = event.y - clickDeviation_Y; /* 当前移动的Y轴 */
            clientMove_X =
              clientMove_X < clientMax_X
                ? clientMove_X
                : clientMax_X; /* 不允许超过最大X轴 */
            clientMove_Y =
              clientMove_Y < clientMax_Y
                ? clientMove_Y
                : clientMax_Y; /* 不允许超过最大Y轴 */
            clientMove_X =
              clientMove_X < 0 ? 0 : clientMove_X; /* 不允许小于0 */
            clientMove_Y =
              clientMove_Y < 0 ? 0 : clientMove_Y; /* 不允许小于0 */
            if (top.window == self.window) {
              GM_setValue("suspensionX", clientMove_X);
              GM_setValue("suspensionY", clientMove_Y);
            }

            jQuery("#whitesevSuspensionId").css({
              left: clientMove_X,
              top: clientMove_Y,
            });
          }

          /**
           * 停止移动
           */
          if (event.phase === "end") {
            isClicked = false;
            jQuery("#whitesevSuspensionId").css("cursor", "auto");
            let left_px = parseInt(
              jQuery("#whitesevSuspensionId").css("left").replace("px", "")
            );
            let setCSSLeft = 0;
            if (left_px >= jQuery(window).width() / 2) {
              setCSSLeft = jQuery(window).width() - NetDiskUI.size;
              if (top.window == self.window) {
                GM_setValue("isRight", true);
              }
            } else {
              if (top.window == self.window) {
                GM_setValue("isRight", false);
              }
            }
            if (top.window == self.window) {
              GM_setValue("suspensionX", setCSSLeft);
            }

            jQuery("#whitesevSuspensionId").css({
              left: setCSSLeft,
              transition: "left 300ms ease 0s",
            });
          }
        });
        /**
         * 设置悬浮按钮 点击/按下事件
         */
        dragNode.on(["click", "tap"], function (event) {
          if (isDouble) {
            /* 判定为双击 */
            clearTimeout(timerID);
            that.showSettingView();
            isDouble = false;
          } else {
            isDouble = true;
            timerID = setTimeout(function () {
              isDouble = false;
              NetDiskUI.view.show();
            }, 200);
          }
        });

        jQuery("#whitesevSuspensionId").on("contextmenu", function (event) {
          NetDiskUI.view.showContextMenu(event, undefined, [
            {
              text: "设置",
              callback: function () {
                log.info("打开设置界面");
                NetDiskUI.suspension.showSettingView();
              },
            },
            {
              text: "历史匹配记录",
              callback: function () {
                log.info("打开历史匹配记录界面");
                NetDiskUI.netDiskHistoryMatch.show();
              },
            },
          ]);
        });
      },
      /**
       * 设置悬浮按钮位置
       */
      setSuspensionDefaultPositionEvent() {
        let clientMax_X =
          jQuery(window).width() - NetDiskUI.size; /* 最大的X轴 指从左至右*/
        let clientMax_Y =
          jQuery(window).height() - NetDiskUI.size; /* 最大的Y轴 指从上至下 */
        let clientDefault_X = clientMax_X; /* 默认值 X轴 */
        let clientDefault_Y =
          jQuery(window).height() / 2 - NetDiskUI.size; /* 默认值 Y轴 */
        let userSetClient_X = GM_getValue("suspensionX", clientDefault_X);

        /* 用户自己移动的X轴 */
        let userSetClient_Y = GM_getValue(
          "suspensionY",
          clientDefault_Y
        ); /* 用户自己移动的Y轴 */

        /* 如果存在isRight 悬浮按钮放到最右边，否则最左边 */
        if (GM_getValue("isRight")) {
          userSetClient_X = clientMax_X;
        } else {
          userSetClient_X = 0;
        }
        /* 如果超出最大的Y轴，以Y轴为默认值 */
        if (userSetClient_Y > clientMax_Y) {
          userSetClient_Y = clientMax_Y;
        } else if (userSetClient_Y < 0) {
          /* 如果用户设置的Y轴小于0,那设置0 */
          userSetClient_Y = 0;
        }

        if (top.window == self.window) {
          /* 不在iframe内修改 */
          GM_setValue("suspensionX", userSetClient_X);
          GM_setValue("suspensionY", userSetClient_Y);
        }

        jQuery("#whitesevSuspensionId").css({
          left: userSetClient_X,
          top: userSetClient_Y,
        });
      },
      loadCSS() {
        GM_addStyle(`
					.whitesevSuspension{
						top: 0;
						position:fixed;
						right:10px;
						border-radius: 12px;
						z-index:4000;
					}
					.whitesevSuspension .whitesevSuspensionMain{
						background:#fff;
						border:1px solid #f2f2f2;
						box-shadow:0 0 15px #e4e4e4;
						box-sizing:border-box;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor{
						border-bottom:1px solid #f2f2f2;
						position:relative;
						box-sizing:border-box;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor .netdisk{
						background-position:center center;
						background-size:115% 115%;
						background-repeat:no-repeat;
						display:flex;
						align-items:center;
						justify-content:center;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor .netdisk:hover{
						transition:all 300ms linear;
						background-color:#e4e4e4;
						transform:scale(1.1);
					}
					.whitesevPop-content p[pop]{
						height: 100%;
					}
				`);
      },
      /**
       * 悬浮按钮背景轮播 效果为淡入淡出
       * @returns
       */
      backgroundSwitch() {
        if (this.isRandBg) {
          return;
        }
        /**
         * 获取随机背景的数组
         * @returns {Array}
         */
        function getRandBgList() {
          let resultList = [];
          NetDiskUI.matchIcon.forEach((item) => {
            resultList = [...resultList, NetDiskUI.src.icon[item]];
          });
          return resultList;
        }
        /**
         * 进行切换 淡入淡出
         * @param {Number} fadeTime 淡入\淡出的时间
         * @param {String} currentBackgroundSrc 当前的背景资源
         */
        function startSwitch(fadeTime, currentBackgroundSrc) {
          currentList = getRandBgList();
          randBgNode.fadeOut(fadeTime, function () {
            currentIndex++;
            currentIndex = currentIndex < currentList.length ? currentIndex : 0;
            currentBackgroundSrc = currentList[currentIndex];
            randBgNode.css("background-image", `url(${currentBackgroundSrc})`);
            randBgNode.fadeIn(fadeTime, function () {
              setTimeout(() => {
                startSwitch(
                  parseInt(GM_getValue("randbg-time", switchBgTime)),
                  currentBackgroundSrc
                );
              }, parseInt(GM_getValue("randbg-show-time", switchBgShowTime)));
            });
          });
        }
        let currentList = [];
        let currentIndex = 0;
        let switchBgTime = 1500; /* 淡入或淡出的持续时间 */
        let switchBgShowTime = 1200; /* 淡入或淡出后的延迟切换时间 */
        currentList = getRandBgList();
        let randBgSrc = currentList[currentIndex];
        let randBgNode = jQuery(".whitesevSuspension .netdisk");
        randBgNode.css("background-image", `url(${randBgSrc})`);
        if (
          currentList.length < 2 ||
          GM_getValue("randbg-time", switchBgTime) <= 0
        ) {
          /* 只有一个的话或淡入/淡出的时间<=0 就不进行背景切换 */
          return;
        }
        this.isRandBg = true;

        startSwitch(
          parseInt(GM_getValue("randbg-time", switchBgTime)),
          randBgSrc
        );
      },
    },
    /**
     * 视图
     */
    view: {
      show() {
        if (!NetDiskUI.uiLinkAlias) {
          this.addCSS();
          this.createView();
          this.registerIconGotoPagePosition();
          this.registerNetDiskUrlContextMenu();
        } else {
          NetDiskUI.uiLinkAlias.show();
        }
      },
      addCSS() {
        GM_addStyle(`
				
				.netdisk-url-box-all{
					
				}
				.netdisk-url-box{

				}
				.netdisk-url-box:last-child {
					padding: 0 0 10px 0;
				}
				.netdisk-url-div{
					display: flex;
					align-items: center;
					width: 100%;
					margin: 10px 0px;
				}
				.netdisk-icon{
					margin: 0px 4px;
					display: contents;
				}
				.netdisk-icon img{
					width: 28px;
					height: 28px;
					font-size: 13px !important;
				}
				.netdisk-icon img,
				.netdisk-url a{
					border-radius: 10px;
					box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
				}
				.whitesevPop .netdisk-url{
					padding: 5px 0px;
					margin: 0px 10px;
				}
				.netdisk-url a{
					color: #ff4848 !important;
					min-height: 28px;
					overflow-x: hidden;
					overflow-y: auto;
					font-size: 14px;
					border: none;

					display: flex;
					align-items: center;
					width: 100%;
					height: 100%;
					padding: 2px 10px;
					word-break: break-word;
				}
				.whitesevPop-whitesevPopSetting *:focus-visible {
					outline-offset: 0px;
					outline:0px;
				}
        
				.netdisk-url a[isvisited=true]{
					color: #8b8888 !important;
				}
        .netdisk-url a:active{
          box-shadow: 0 0 0 1px #616161 inset;
        }
        .netdisk-url a:focus-visible{
          outline: none;
        }
				.whitesevPop-content p[pop]{
					text-indent: 0px;
				}
				.whitesevPop-button[type="primary"] {
					border-color: #2d8cf0;
					background-color: #2d8cf0;
				}
				`);
      },
      /**
       * 创建视图
       */
      createView() {
        let viewAddHTML = "";
        NetDiskUI.matchIcon.forEach((netDiskName) => {
          let netDisk = NetDisk.linkDict.get(netDiskName);
          Object.keys(netDisk.getItems()).forEach(shareCode => {
            let accessCodeDict = netDisk.getItems()[shareCode];
            let uiLink = NetDisk.handleLinkShow(
              netDiskName,
              accessCodeDict["netDiskIndex"],
              shareCode,
              accessCodeDict["accessCode"]
            );
            viewAddHTML =
              viewAddHTML +
              this.getViewHTML(
                NetDiskUI.src.icon[netDiskName],
                netDiskName,
                accessCodeDict["netDiskIndex"],
                shareCode,
                accessCodeDict["accessCode"],
                uiLink
              );
          });
        });
        let viewHTML = `
					<div class="netdisk-url-box-all">
						${viewAddHTML}
					</div>`;
        NetDiskUI.uiLinkAlias = pops.alert({
          title: {
            text: "网盘",
            position: "center",
          },
          content: {
            text: viewHTML,
            html: true,
          },
          btn: {
            ok: {
              callback: function (event) {
                event.hide();
              },
            },
            close: {
              callback: function (event) {
                event.hide();
              },
            },
          },
          class: "whitesevPop",
          animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.netDiskView_Phone.height
            : NetDiskUI.popsStyle.netDiskView_PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.netDiskView_Phone.width
            : NetDiskUI.popsStyle.netDiskView_PC.width,
          drag: GM_getValue("pcDrag", false),
          mask: true,
          forbiddenScroll: true,
        });
        this.setNetDiskUrlClickEvent(".netdisk-url a");
      },
      /**
       * 获取视图html
       * @param {String} netDiskImgSrc 网盘图标src
       * @param {String} netDiskName 网盘名称
       * @param {Number} netDiskIndex 网盘名称索引下标
       * @param {String} shareCode
       * @param {String} accessCode
       * @param {String} uiLinkText 显示出来的链接文本
       * @returns {String}
       */
      getViewHTML(
        netDiskImgSrc,
        netDiskName,
        netDiskIndex,
        shareCode,
        accessCode,
        uiLinkText
      ) {
        return `
				<div class="netdisk-url-box">
					<div class="netdisk-url-div">
						<div class="netdisk-icon">
							<img src="${netDiskImgSrc}" data-netdisk="${netDiskName}">
						</div>
						<div class="netdisk-url">
							<a  href="javascript:;" 
                  isvisited="false"
                  data-netdisk="${netDiskName}"
                  data-netdisk-index="${netDiskIndex}"
                  data-sharecode="${shareCode}"
                  data-accesscode="${accessCode}"
                  data-open-enable-key="${netDiskName}-open-enable"
                  data-static-enable-key="${netDiskName}-static-enable"
                  data-scheme-enable-key="${netDiskName}-scheme-enable">${uiLinkText}</a>
						</div>
					</div>
				</div>`;
      },
      /**
       * 设置网盘链接点击事件，要求，它是<a>元素且存在以下属性
       * isvisited  string true|false
       * data-netdisk  string
       * data-netdisk-index number
       * data-sharecode string
       * data-accesscode string
       * data-open-enable-key string
       * data-static-enable-key string
       * data-scheme-enable-key string
       * @param {String} clickNodeSelector - 元素选择器
       */
      setNetDiskUrlClickEvent(clickNodeSelector) {
        function clickEvent(event) {
          event.target.setAttribute("isvisited", "true");
          let netDiskName = event.target.getAttribute("data-netdisk");
          let netDiskIndex = parseInt(
            event.target.getAttribute("data-netdisk-index")
          );
          let shareCode = event.target.getAttribute("data-sharecode");
          let accessCode = event.target.getAttribute("data-accesscode");
          let openEnable = GM_getValue(
            event.target.getAttribute("data-open-enable-key"),
            false
          );
          let staticEnable = GM_getValue(
            event.target.getAttribute("data-static-enable-key"),
            false
          );
          let schemeEnable = GM_getValue(
            event.target.getAttribute("data-scheme-enable-key"),
            false
          );
          if (openEnable) {
            let url = NetDisk.regular[netDiskName][netDiskIndex].blank
              .replace(/{#shareCode#}/gi, shareCode)
              .replace(/{#accessCode#}/gi, accessCode);
            NetDiskParse.blank(url, netDiskName, shareCode, accessCode);
          } else if (staticEnable) {
            NetDiskParse.parse(
              netDiskName,
              netDiskIndex,
              shareCode,
              accessCode
            );
          } else if (schemeEnable) {
            NetDiskParse.scheme(
              netDiskName,
              netDiskIndex,
              shareCode,
              accessCode
            );
          } else {
            NetDiskParse.setClipboard(
              netDiskName,
              shareCode,
              accessCode,
              "已复制"
            );
          }
        }
        jQuery("body").on("click", clickNodeSelector, clickEvent);
      },
      /**
       * 显示右键菜单，调用方式
       * @param {Event} event
       * @param {String} menuNodeId 右键菜单元素的id
       * @param {Array} showTextList 右键菜单的内容，如：[{"text":"","callback":()=>{}}]
       */
      showContextMenu(
        event,
        menuNodeId = "whitesevSuspensionContextMenu",
        showTextList = []
      ) {
        event.preventDefault();
        jQuery(`#${menuNodeId}`).remove();
        let menuNode = `
				<div id="${menuNodeId}">
          <style type="text/css">
          #${menuNodeId}{
						position: fixed;
						z-index: ${Utils.getMaxZIndex()};
    				text-align: center;
						padding: 3px 0px;
						border-radius: 3px;
						font-size: 16px;
						font-weight: 500;
						background: #fff;
            box-shadow: 0px 1px 6px 1px #cacaca;
					}
					#${menuNodeId} li:hover{
						background: #dfdfdf;
            cursor: pointer;
					}
          #${menuNodeId} ul{
            margin: 0px;
            padding: 0px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          }
          #${menuNodeId} ul li{
            padding: 5px 10px;
            display: unset;
            width: -webkit-fill-available;
            text-align: left;
            margin: 2.5px 5px;
            border-radius: 3px;
          }
          </style>
					<ul></ul>
				</div>
				`;
        menuNode = jQuery(menuNode);
        showTextList.forEach((item) => {
          let menuItem = jQuery(`
          <li>${item.text}</li>
        `);
          menuItem.on("click", function () {
            item.callback &&
              typeof item.callback === "function" &&
              item.callback.apply(this, this.arguments);
            menuNode.remove();
          });
          menuNode.find("ul").append(menuItem);
        });
        menuNode.hide();
        jQuery("body").append(menuNode);
        var clientMax_X =
          jQuery(window).width() - menuNode.width(); /* 最大的X轴 指从左至右*/
        var clientMax_Y =
          jQuery(window).height() - menuNode.height(); /* 最大的Y轴 指从上至下 */
        var clientMove_X = event.clientX;
        var clientMove_Y = event.clientY;
        /* 不允许超出浏览器范围 */
        clientMove_X = clientMove_X < 0 ? 0 : clientMove_X;
        clientMove_X = clientMove_X < clientMax_X ? clientMove_X : clientMax_X;
        clientMove_Y = clientMove_Y < 0 ? 0 : clientMove_Y;
        clientMove_Y = clientMove_Y < clientMax_Y ? clientMove_Y : clientMax_Y;
        menuNode.css({
          left: clientMove_X,
          top: clientMove_Y,
        });
        menuNode.show();
        let globalClickListen = function () {
          if (!Utils.checkUserClickInNode(menuNode[0])) {
            menuNode?.remove();
            jQuery(window).off("click", globalClickListen);
          }
        };
        jQuery(window).on("click", globalClickListen);
      },
      /**
       * 添加新的链接
       * @param {String} netDiskName 网盘名称
       * @param {Number} netDiskIndex 网盘名称索引下标
       * @param {String} shareCode
       * @param {String} accessCode
       */
      addLinkView(netDiskName, netDiskIndex, shareCode, accessCode) {
        NetDiskUI.netDiskHistoryMatch.setNetDiskHistoryMatchData(
          netDiskName,
          netDiskIndex,
          shareCode,
          accessCode
        );
        if (!NetDiskUI.uiLinkAlias) {
          return;
        }
        log.info([netDiskName, netDiskIndex, shareCode, accessCode]);
        let icon = NetDiskUI.src.icon[netDiskName];
        let uiLink = NetDisk.handleLinkShow(
          netDiskName,
          netDiskIndex,
          shareCode,
          accessCode
        );
        let insertDOM = this.getViewHTML(
          icon,
          netDiskName,
          netDiskIndex,
          shareCode,
          accessCode,
          uiLink
        );
        let parentDOM = jQuery(
          NetDiskUI.uiLinkAlias.popsElement.querySelector(
            ".netdisk-url-box-all"
          )
        );
        parentDOM.append(insertDOM);
      },
      /**
       * 修改已存在的view
       * @param {String} netDiskName 网盘名称
       * @param {Number} netDiskIndex 网盘名称索引下标
       * @param {String} shareCode
       * @param {String} accessCode
       */
      changeLinkView(netDiskName, netDiskIndex, shareCode, accessCode) {
        NetDiskUI.netDiskHistoryMatch.setNetDiskHistoryMatchData(
          netDiskName,
          netDiskIndex,
          shareCode,
          accessCode
        );
        if (!NetDiskUI.uiLinkAlias) {
          return;
        }
        let uiLink = NetDisk.handleLinkShow(
          netDiskName,
          netDiskIndex,
          shareCode,
          accessCode
        );
        let needChangeDOM = jQuery(
          NetDiskUI.uiLinkAlias.popsElement.querySelector(
            `.netdisk-url a[data-sharecode='${shareCode}'][data-netdisk-index='${netDiskIndex}']`
          )
        );
        log.info("修改网盘链接视图");
        log.info(needChangeDOM);
        needChangeDOM.attr("data-accesscode", accessCode);
        needChangeDOM.html(uiLink);
      },
      /**
       * 设置点击图标按钮导航至该网盘链接所在网页中位置
       */
      registerIconGotoPagePosition() {
        jQuery(document).on(
          "click",
          ".whitesevPop .netdisk-icon img",
          function (event) {
            let dataSharecode =
              event.target.parentElement.nextElementSibling.firstElementChild.getAttribute(
                "data-sharecode"
              );
            Utils.findVisibleText(dataSharecode, true);
          }
        );
      },
      /**
       * 设置全局监听url的右击菜单事件
       */
      registerNetDiskUrlContextMenu() {
        jQuery(document).on(
          "contextmenu",
          ".whitesevPop .netdisk-url a",
          function (event) {
            NetDiskUI.view.showContextMenu(event, undefined, [
              {
                text: "访问链接",
                callback: function () {
                  let netDiskName = event.target.getAttribute("data-netdisk");
                  let netDiskIndex =
                    event.target.getAttribute("data-netdisk-index");
                  let shareCode = event.target.getAttribute("data-sharecode");
                  let accessCode = event.target.getAttribute("data-accesscode");
                  let url = NetDisk.regular[netDiskName][netDiskIndex].blank
                    .replace(/{#shareCode#}/gi, shareCode)
                    .replace(/{#accessCode#}/gi, accessCode);
                  NetDiskParse.blank(url, netDiskName, shareCode, accessCode);
                },
              },
              {
                text: "修改访问码",
                callback: function () {
                  let netDiskName = event.target.getAttribute("data-netdisk");
                  let netDiskIndex =
                    event.target.getAttribute("data-netdisk-index");
                  let shareCode = event.target.getAttribute("data-sharecode");
                  let accessCode = event.target.getAttribute("data-accesscode");
                  NetDiskUI.newAccessCodeView(
                    "修改访问码",
                    netDiskName,
                    netDiskIndex,
                    shareCode,
                    (userInputAccessCode) => {
                      event.target.setAttribute(
                        "data-accesscode",
                        userInputAccessCode
                      );
                      Qmsg.success(
                        `修改 ${accessCode} => ${userInputAccessCode}`
                      );
                    }
                  );
                },
              },
            ]);
          }
        );
      },
    },
    /**
     * 显示直链的弹窗
     */
    staticView: {
      isLoadCSS: false,
      addCSS() {
        if (!this.isLoadCSS) {
          this.isLoadCSS = true;
          GM_addStyle(`
					.netdisk-static-body{
						flex-wrap: wrap;
						letter-spacing: 1px;
						text-decoration: none;
						width: 100%;
						padding: 5px 16px;
						text-align: left;
					}
					.netdisk-static-filename{

					}
					.netdisk-static-filename a{
						color: #233df8 !important;
					}
					.netdisk-static-body .netdisk-static-filename:before{
						content: "文件: ";
						font-weight: bold;
    				text-overflow: ellipsis;
						display: contents;
    				position: inherit;
					}
					.netdisk-static-body .netdisk-static-filesize:before{
						content: "大小: ";
						font-weight: bold;
						display: contents;
    				position: inherit;
					}
          .netdisk-static-body .netdisk-static-fileuploadtime:before{
						content: "时间: ";
						font-weight: bold;
						display: contents;
    				position: inherit;
					}
          .netdisk-static-body .netdisk-static-filelatesttime:before{
						content: "最新: ";
						font-weight: bold;
						display: contents;
    				position: inherit;
					}
					`);
        }
      },
      /**
       * 单文件
       * @param {String} title 标题
       * @param {String} fileName 文件名
       * @param {String} fileSize 文件大小
       * @param {String} downloadUrl 文件链接
       * @param {String} fileUploadTime 文件上传时间
       * @param {String} fileLatestTime 文件最新时间
       */
      oneFile(
        title,
        fileName,
        fileSize,
        downloadUrl,
        fileUploadTime,
        fileLatestTime
      ) {
        this.addCSS();
        Qmsg.success("成功获取直链");
        fileUploadTime = fileUploadTime === "" ? null : fileUploadTime;
        fileLatestTime = fileLatestTime === "" ? null : fileLatestTime;
        pops.confirm({
          title: {
            text: title,
            position: "center",
          },
          content: {
            text: `
            <div class="netdisk-static-body">
              <div class="netdisk-static-filename">
                <a target="_blank" href="${downloadUrl}">${fileName}</a>
              </div>
              <div class="netdisk-static-filesize">${fileSize}</div>
              ${
                fileUploadTime
                  ? `<div class="netdisk-static-fileuploadtime">${fileUploadTime}</div>`
                  : ""
              }
              ${
                fileLatestTime
                  ? `<div class="netdisk-static-filelatesttime">${fileLatestTime}</div>`
                  : ""
              }
            </div>`,
            html: true,
          },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "下载",
              callback: (event) => {
                window.open(
                  event.popsElement
                    .querySelector(".netdisk-static-filename a")
                    .getAttribute("href"),
                  "_blank"
                );
              },
            },
          },
          class: "whitesevPopOneFile",
          animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.oneFileStaticView_Phone.height
            : NetDiskUI.popsStyle.oneFileStaticView_PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.oneFileStaticView_Phone.width
            : NetDiskUI.popsStyle.oneFileStaticView_PC.width,
          mask: true,
          drag: GM_getValue("pcDrag", false),
          forbiddenScroll: true,
        });
      },
      /**
       * 多文件
       * @param {String} title 标题
       * @param {String} content 弹窗内容HTML或Text
       */
      moreFile(title, content) {
        this.addCSS();
        Qmsg.success("成功获取多文件直链");
        pops.alert({
          title: {
            text: title,
            position: "center",
          },
          content: {
            text: content,
            html: true,
          },
          btn: {
            ok: {
              text: "关闭",
            },
          },
          class: "whitesevPopMoreFile",
          mask: true,
          animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.moreFileStaticView_Phone.height
            : NetDiskUI.popsStyle.moreFileStaticView_PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.moreFileStaticView_Phone.width
            : NetDiskUI.popsStyle.moreFileStaticView_PC.width,
          drag: GM_getValue("pcDrag", false),
          forbiddenScroll: true,
        });
      },
    },
    /**
     * 需要重新输入新密码的弹窗
     * @param {String} title 标题
     * @param {String} netDiskName 网盘名称
     * @param {Number} netDiskIndex 网盘名称索引下标
     * @param {String} shareCode
     * @param {Function} okCallBack
     */
    newAccessCodeView(
      title = "密码错误",
      netDiskName = "",
      netDiskIndex,
      shareCode,
      okCallBack = () => {}
    ) {
      pops.prompt({
        title: {
          text: title,
        },
        btn: {
          reverse: true,
          position: "end",
          cancel: {
            text: "取消",
          },
          ok: {
            callback: (event) => {
              /* 把输入的新密码去空格 */
              let userInputAccessCode = event.text.replace(/[\s]*/gi, "");
              /* 处理已显示的链接 */
              let uiLink = NetDisk.handleLinkShow(
                netDiskName,
                netDiskIndex,
                shareCode,
                userInputAccessCode
              );
              let currentItemSelector = `.netdisk-url a[data-netdisk=${netDiskName}][data-sharecode=${shareCode}]`;
              let currentHistoryItemSelector = `.netdiskrecord-link a[data-netdisk=${netDiskName}][data-sharecode=${shareCode}]`;
              jQuery(currentItemSelector).attr(
                "data-accesscode",
                userInputAccessCode
              );
              jQuery(currentItemSelector).html(uiLink);
              /* 历史记录的弹出的 */
              jQuery(currentHistoryItemSelector).attr(
                "data-accesscode",
                userInputAccessCode
              );
              jQuery(currentHistoryItemSelector).html(uiLink);
              log.info(`${netDiskName} 重新输入的密码：${userInputAccessCode}`);
              okCallBack(userInputAccessCode);
              event.close();
            },
          },
        },
        content: {
          placeholder: "请重新输入密码",
          focus: true,
        },
        height: pops.isPhone()
          ? NetDiskUI.popsStyle.newAccessCodeView_Phone.height
          : NetDiskUI.popsStyle.newAccessCodeView_PC.height,
        width: pops.isPhone()
          ? NetDiskUI.popsStyle.newAccessCodeView_Phone.width
          : NetDiskUI.popsStyle.newAccessCodeView_PC.width,
        mask: true,
        animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
        drag: GM_getValue("pcDrag", false),
        forbiddenScroll: true,
      });
      /**
       * 注册键盘回车事件
       */
      Utils.listenKeyPress(
        document.querySelector(".pops-prompt-content input"),
        (keyName, otherKey) => {
          if (keyName === "Enter") {
            document.querySelector(".pops-prompt-btn-ok")?.click();
          }
        }
      );
    },
    /**
     * 网盘历史匹配到的记录弹窗
     */
    netDiskHistoryMatch: {
      storageKey: "netDiskHistoryMatch" /* 本地存储的keyName */,
      isAddCss: false /* 是否已添加CSS */,
      isSetSearchEvent: false /* 是否已设置DOM事件 */,
      isSetOtherEvent: false /* 是否已设置其它DOM事件 */,
      show() {
        this.addCSS();
        let data = this.getNetDiskHistoryMatchData();
        let dataHTML = "";
        let that = this;
        data = this.orderNetDiskHistoryMatchData(data);
        for (let index = 0; index < 10; index++) {
          if (data[index]) {
            dataHTML += that.getTableHTML(data[index]);
          }
        }
        dataHTML = `
        <div class="netdiskrecord-search">
          <input type="text" placeholder="搜索链接/网址/网址标题，可正则搜索">
        </div>
        <div class="netdiskrecord-table"><ul>${dataHTML}</ul></div>
        <div class="netdiskrecord-page">

        </div>`;
        pops.confirm({
          title: {
            text: "历史匹配记录",
            position: "center",
          },
          content: {
            text: dataHTML,
            html: true,
          },
          btn: {
            reverse: true,
            position: "space-between",
            ok: {
              enable: true,
              callback: function (event) {
                event.close();
              },
            },
            close: {
              callback: function (event) {
                event.close();
              },
            },
            cancel: {
              enable: false,
            },
            other: {
              enable: true,
              text: `清空所有(${data.length})`,
              type: "xiaomi-primary",
              callback: (event) => {
                pops.confirm({
                  title: {
                    text: "删除",
                    position: "center",
                  },
                  content: {
                    text: "确定清空所有的记录？",
                    html: false,
                  },
                  btn: {
                    ok: {
                      enable: true,
                      callback: function (okEvent) {
                        that.clearNetDiskHistoryMatchData();
                        jQuery(
                          ".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul li"
                        ).remove();
                        okEvent.close();
                        jQuery(
                          ".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
                        ).html("");
                        jQuery(
                          ".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
                        ).text(
                          jQuery(
                            ".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
                          )
                            .text()
                            .replace(/[\d]+/gi, "0")
                        );
                      },
                    },
                    cancel: {
                      enable: true,
                    },
                  },
                  mask: true,
                });
              },
            },
          },
          class: "whitesevPopNetDiskHistoryMatch",
          animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.netDiskHistoryMatchView_Phone.height
            : NetDiskUI.popsStyle.netDiskHistoryMatchView_PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.netDiskHistoryMatchView_Phone.width
            : NetDiskUI.popsStyle.netDiskHistoryMatchView_PC.height,
          mask: true,
          drag: GM_getValue("pcDrag", false),
          forbiddenScroll: true,
        });
        this.setDataPaging(data);
        this.setEvent();
        this.setSearchEvent();
        this.setContextMenuEvent();
      },
      addCSS() {
        if (this.isAddCss) {
          return;
        }
        this.isAddCss = true;
        GM_addStyle(`
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content ul{

        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content li{
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-radius: 10px;
          box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
          margin: 20px 10px;
          padding: 10px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search{
          height: 11%;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-table{
          height: calc( 85% - 40px);
          overflow: auto;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-page{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input{
          border: none;
          border-bottom: 1px solid #000000;
          padding: 0px 5px;
          line-height: 28px;
          font-size: 16px;
          width: -webkit-fill-available;
          margin: 5px 5px 0px 5px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input:focus-visible{
          outline: none;
          border-bottom: 1px solid #0009ff;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link{
          
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a{
          color: #ff4848;
          font-size: 14px;
          border: none;
          word-break: break-word;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a[isvisited=true]{
          color: #8b8888;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon{
          
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon img{
          width: 28px;
          height: 28px;
          font-size: 13px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url{
          color: #000;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url{
          color: #000;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete{
          background: #263cf3;
          color: #fff;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete:active{
          background: #6e7be8;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions{
          display: flex;
          margin: 5px 0px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions p{
          min-width: 80px;
          max-width: 80px;
          align-self: center;
        }
        `);
      },
      /**
       * 获取显示出的每一项的html
       * @param {Object} item
       * @param {number} index item的索引
       * @returns
       */
      getTableHTML(item) {
        let netDiskURL = NetDisk.handleLinkShow(
          item.netDiskName,
          item.netDiskIndex,
          item.shareCode,
          item.accessCode
        );
        return `
        <li>
          <div class="netdiskrecord-link">
            <p>链接</p>
            <a  href="javascript:;"
                isvisited="false"
                data-netdisk="${item.netDiskName}"
                data-netdisk-index="${item.netDiskIndex}"
                data-sharecode="${item.shareCode}"
                data-accesscode="${item.accessCode}"
                data-open-enable-key="${item.netDiskName}-open-enable"
                data-static-enable-key="${item.netDiskName}-static-enable"
                data-scheme-enable-key="${
                  item.netDiskName
                }-scheme-enable">${netDiskURL}</a>
          </div>
          <div class="netdiskrecord-icon">
            <p>网盘</p>
            <img src="${NetDiskUI.src.icon[item.netDiskName]}">
          </div>
          ${
            item.url === item.topURL
              ? `
          <div class="netdiskrecord-url">
            <p>网址</p>
            <a href="${item.url}" target="_blank">${item.url}</a>
          </div>
          `
              : `
          <div class="netdiskrecord-url">
            <p>网址</p>
            <a href="${item.url}" target="_blank">${item.url}</a>
          </div>
          <div class="netdiskrecord-top-url">
            <p>TOP网址</p>
            <a href="${item.topURL}" target="_blank">${item.topURL}</a>
          </div>
          `
          }
          <div class="netdiskrecord-url-title">
            <p>网址标题</p>
            ${item.title}
          </div>
          <div class="netdiskrecord-add-time">
            <p>记录时间</p>
            ${Utils.formatTime(item.addTime)}
          </div>
          <div class="netdiskrecord-update-time">
            <p>更新时间</p>
            ${Utils.formatTime(item.updateTime)}
          </div>
          <div class="netdiskrecord-functions">
            <p>功能</p>
            <button class="btn-delete" data-json='${JSON.stringify(
              item
            )}'>删除</button>
          </div>
        </li>`;
      },
      /**
       * 设置只执行一次的事件
       * @returns
       */
      setEvent() {
        if (this.isSetSearchEvent) {
          return;
        }
        let that = this;
        this.isSetEvent = true;
        NetDiskUI.view.setNetDiskUrlClickEvent(
          ".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a"
        );

        /**
         * 设置删除按钮点击事件
         */
        let setdeleteBtnEvent = function () {
          jQuery(document).on(
            "click",
            ".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete",
            function () {
              /* 删除中的遮罩层 */
              let deleteLoading = pops.loading({
                parent: document.querySelector(
                  ".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul"
                ),
                content: {
                  text: "删除中...",
                },
                only: true,
              });
              let clickNode = jQuery(this);
              let dataJSON = clickNode.attr("data-json");
              this.closest("li")?.remove();
              that.deleteNetDiskHistoryMatchData(dataJSON);
              deleteLoading?.close();
              let totalNumberText = jQuery(
                ".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
              ).text();
              let totalNumber = totalNumberText.match(/[\d]+/gi);
              totalNumber = parseInt(totalNumber[totalNumber.length - 1]);
              totalNumber--;
              totalNumberText = totalNumberText.replace(/[\d]+/gi, totalNumber);
              jQuery(".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other").text(
                totalNumberText
              );
            }
          );
        };
        setdeleteBtnEvent();
      },
      /**
       * 设置分页
       * @param {Array} data
       */
      setDataPaging(data) {
        let that = this;

        let dataPaging = new DataPaging();
        dataPaging.init({
          data: data,
          pageCount: 10,
          pageStep: pops.isPhone() ? 2 : 4,
          currentPage: 1,
          pageChangeCallBack: function (page) {
            let startIndex = (page - 1) * 10;
            let dataHTML = "";
            for (let index = 0; index < 10; index++) {
              if (data[startIndex]) {
                dataHTML += that.getTableHTML(data[startIndex]);
              } else {
                break;
              }
              startIndex++;
            }
            jQuery(
              ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
            )?.remove();
            jQuery(".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul").append(
              jQuery(dataHTML)
            );
          },
        });
        dataPaging.append(
          document.querySelector(
            ".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
          )
        );
      },
      /**
       * 设置搜索框的回车事件
       */
      setSearchEvent() {
        let isSeaching = false; /* 当前搜索的状态 */
        let searchLoading = null; /* 搜索中的遮罩层 */
        let that = this;
        function searchEvent() {
          if (isSeaching) {
            return;
          }
          isSeaching = true;
          searchLoading = pops.loading({
            parent: document.querySelector(
              ".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul"
            ),
            content: {
              text: "搜索中...",
            },
            only: true,
          });
          let inputText = document
            .querySelector(
              ".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
            )
            .value.trim();
          let data = that.getNetDiskHistoryMatchData();
          data = that.orderNetDiskHistoryMatchData(data);
          if (inputText === "") {
            /* 输入空就关闭遮罩层且恢复style */
            let historyDataHTML = "";
            data.forEach((item, index) => {
              if (index > 9) {
                return;
              }
              historyDataHTML += that.getTableHTML(item);
            });
            jQuery(
              ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
            )?.remove();
            jQuery(".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul").append(
              jQuery(historyDataHTML)
            );
            searchLoading?.close();
            isSeaching = false;
            that.setDataPaging(data);
            return;
          }
          let isFind = false; /* 找到的状态 */

          let isFindHTML = ""; /* 找到的链接文本 */
          data.forEach((item) => {
            let netDiskURL = NetDisk.handleLinkShow(
              item.netDiskName,
              item.netDiskIndex,
              item.shareCode,
              item.accessCode
            );
            if (
              netDiskURL.match(new RegExp(inputText, "ig")) ||
              item.url.match(new RegExp(inputText, "ig")) ||
              item.topURL.match(new RegExp(inputText, "ig")) ||
              item.title.match(new RegExp(inputText, "ig"))
            ) {
              /* 匹配到 */
              isFind = true;
              isFindHTML += that.getTableHTML(item);
            }
          });
          jQuery(
            ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
          )?.remove();
          jQuery(".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul").append(
            jQuery(isFindHTML)
          );
          jQuery(".whitesevPopNetDiskHistoryMatch .netdiskrecord-page")
            ?.children()
            ?.remove();
          searchLoading?.close();
          searchLoading = null;
          isSeaching = false;
        }

        Utils.listenKeyPress(
          document.querySelector(
            ".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
          ),
          (keyName) => {
            if (keyName === "Enter") {
              searchEvent();
            }
          }
        );
      },
      /**
       * 设置右击菜单事件
       */
      setContextMenuEvent() {
        jQuery(".whitesevPopNetDiskHistoryMatch").on(
          "contextmenu",
          ".netdiskrecord-link a",
          function (event) {
            NetDiskUI.view.showContextMenu(event, undefined, [
              {
                text: "访问链接",
                callback: function () {
                  let netDiskName = event.target.getAttribute("data-netdisk");
                  let netDiskIndex =
                    event.target.getAttribute("data-netdisk-index");
                  let shareCode = event.target.getAttribute("data-sharecode");
                  let accessCode = event.target.getAttribute("data-accesscode");
                  let url = NetDisk.regular[netDiskName][netDiskIndex].blank
                    .replace(/{#shareCode#}/gi, shareCode)
                    .replace(/{#accessCode#}/gi, accessCode);
                  NetDiskParse.blank(url, netDiskName, shareCode, accessCode);
                },
              },
              {
                text: "修改访问码",
                callback: function () {
                  let netDiskName = event.target.getAttribute("data-netdisk");
                  let netDiskIndex = parseInt(
                    event.target.getAttribute("data-netdisk-index")
                  );
                  let shareCode = event.target.getAttribute("data-sharecode");
                  let accessCode = event.target.getAttribute("data-accesscode");
                  let currentTime = new Date().getTime();
                  NetDiskUI.newAccessCodeView(
                    "修改访问码",
                    netDiskName,
                    netDiskIndex,
                    shareCode,
                    (userInputAccessCode) => {
                      let data = GM_getValue(
                        NetDiskUI.netDiskHistoryMatch.storageKey
                      );
                      let editFlag = false;
                      data.forEach((item) => {
                        if (
                          item["netDiskName"] === netDiskName &&
                          item["netDiskIndex"] === netDiskIndex &&
                          item["shareCode"] === shareCode &&
                          item["accessCode"] === accessCode
                        ) {
                          item = Utils.assign(item, {
                            accessCode: userInputAccessCode,
                            updateTime: currentTime,
                          });
                          log.success(["成功找到项", item]);
                          editFlag = true;
                          return;
                        }
                      });
                      if (editFlag) {
                        GM_setValue(
                          NetDiskUI.netDiskHistoryMatch.storageKey,
                          data
                        );
                        event.target
                          .closest("li")
                          .querySelector(
                            ".netdiskrecord-update-time"
                          ).lastChild.textContent =
                          Utils.formatTime(currentTime);
                        event.target.setAttribute(
                          "data-accesscode",
                          userInputAccessCode
                        );
                        Qmsg.success(
                          `修改 ${accessCode} => ${userInputAccessCode}`
                        );
                      } else {
                        Qmsg.error("修改失败");
                      }
                    }
                  );
                },
              },
            ]);
          }
        );
      },
      /**
       * 排序数据
       * @returns {Array}
       */
      orderNetDiskHistoryMatchData(data) {
        let localOrder = GM_getValue(
          "netdisk-history-match-ordering-rule",
          "按 更新时间 - 降序"
        );
        let isDesc =
          localOrder.indexOf("降序") !== -1 ? true : false; /* 降序 */
        let orderField =
          localOrder.indexOf("记录时间") !== -1
            ? "addTime"
            : "updateTime"; /* 排序字段 */

        Utils.sortListByProperty(
          data,
          (item) => {
            return item[orderField];
          },
          isDesc
        );
        return data;
      },
      /**
       * 存储匹配到的链接
       * @param {String} netDiskName 网盘名称
       * @param {Number} netDiskIndex 网盘名称索引下标
       * @param {String} shareCode
       * @param {String} accessCode
       * @returns
       */
      setNetDiskHistoryMatchData(
        netDiskName,
        netDiskIndex,
        shareCode,
        accessCode
      ) {
        if (!GM_getValue("saveMatchNetDisk", false)) {
          return;
        }
        let data = this.getNetDiskHistoryMatchData();
        for (let i = 0; i < data.length; i++) {
          let item = data[i];
          if (
            item.url === window.location.href &&
            item.topURL === top.window.location.href &&
            item.netDiskName === netDiskName &&
            shareCode.startsWith(item.shareCode) &&
            item.netDiskIndex === netDiskIndex
          ) {
            if (item.accessCode !== accessCode) {
              /* 修改accessCode */
              log.success("匹配历史记录 -> 修改accessCode");
              data[i].accessCode = accessCode;
              data[i].updateTime = new Date().getTime();
              if (data[i].title) {
                data[i].title = document.title;
              }
              GM_setValue(this.storageKey, data);
              return;
            } else if (item.accessCode === accessCode) {
              /* 已存在一模一样的 */
              return;
            }
          }
        }
        log.success("匹配历史记录 -> 增加新的");
        let time = new Date().getTime();
        data = [
          ...data,
          {
            url: window.location.href,
            topURL: top.window.location.href,
            netDiskName: netDiskName,
            netDiskIndex: netDiskIndex,
            shareCode: shareCode,
            accessCode,
            addTime: time,
            updateTime: time,
            title: document.title || top.document.title,
          },
        ];
        GM_setValue(this.storageKey, data);
      },
      /**
       * 获取历史匹配到的链接
       * @returns {}
       */
      getNetDiskHistoryMatchData() {
        let data = GM_getValue(this.storageKey);
        if (data == null) {
          data = [];
          GM_setValue(this.storageKey, data);
        }
        return data;
      },
      /**
       * 删除存储的某个项
       * @param {String} dataJSONText
       */
      deleteNetDiskHistoryMatchData(dataJSONText) {
        let data = this.getNetDiskHistoryMatchData();
        for (let index = 0; index < data.length; index++) {
          if (JSON.stringify(data[index]) === dataJSONText) {
            console.log("删除 ===> ", data[index]);
            data.splice(index, 1);
            break;
          }
        }
        GM_setValue(this.storageKey, data);
      },
      /**
       * 清空所有配置
       */
      clearNetDiskHistoryMatchData() {
        GM_setValue(this.storageKey, []);
      },
    },
    /**
     * 监听页面元素变动 进行匹配网盘链接
     */
    monitorDOMInsert() {
      NetDiskWorker.initWorkerBlobLink();
      NetDiskWorker.initWorker();
      Utils.mutationObserver(document.body, {
        callback: async (mutations) => {
          if (NetDiskUI.isHandling) {
            /* 当前正在处理文本正则匹配中 */
            return;
          }
          NetDiskUI.isHandling = true;
          let clipboardText = "";
          if (GM_getValue("readClipboard", false)) {
            clipboardText = await NetDisk.getClipboardText();
          }
          NetDisk.matchPageLink(clipboardText);
        },
        config: {
          /* 子节点的变动（新增、删除或者更改） */
          childList: true,
          /* 节点内容或节点文本的变动 */
          characterData: true,
          /* 是否将观察器应用于该节点的所有后代节点 */
          subtree: true,
        },
      });
      NetDisk.matchPageLink(); /* 自执行一次，因为有的页面上没触发mutationObserver */
    },
  };
  GM_Menu = new Utils.GM_Menu(
    {
      showSetting: {
        text: "⚙ 打开设置界面",
        callback: () => {
          NetDiskUI.suspension.initPop();
          NetDiskUI.suspension.showSettingView();
        },
      },
      showNetDiskHistoryMatch: {
        text: "⚙ 打开历史匹配记录",
        callback: () => {
          NetDiskUI.netDiskHistoryMatch.show();
        },
      },
      repairHistoryMatchLocalData: {
        text: "🔧 修复版本＜23.5.30.10.00历史匹配记录的数据",
        callback: () => {
          let localData = GM_getValue(NetDiskUI.netDiskHistoryMatch.storageKey);
          let repairCount = 0;
          if (!localData) {
            Qmsg.error("本地暂未存储历史匹配记录数据");
            return;
          }
          localData.forEach((item) => {
            if (!("netDiskIndex" in item)) {
              repairCount++;
              item["netDiskIndex"] = 0;
            }
          });
          if (repairCount) {
            GM_setValue(NetDiskUI.netDiskHistoryMatch.storageKey, localData);
            Qmsg.success(`成功修复 ${repairCount}条数据`);
          } else {
            Qmsg.success("不存在待修复的数据");
          }
        },
      },
    },
    false,
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand
  );
  jQuery(document).ready(function () {
    NetDiskAutoFillAccessCode.default();
    NetDiskUI.monitorDOMInsert();
  });
})();
