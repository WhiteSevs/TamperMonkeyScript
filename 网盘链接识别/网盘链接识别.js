// ==UserScript==
// @name         网盘链接识别
// @namespace    https://greasyfork.org/zh-CN/scripts/445489-网盘链接识别
// @supportURL   https://greasyfork.org/zh-CN/scripts/445489-网盘链接识别/feedback
// @version      23.4.26.10.00
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、坚果云、magnet格式，支持蓝奏云、天翼云(需登录)、123盘、奶牛和坚果云(需登录)直链获取下载，页面动态监控加载的链接
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
// @require      https://greasyfork.org/scripts/462234-message/code/Message.js
// @require      https://greasyfork.org/scripts/456470-%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93/code/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93.js
// @require      https://greasyfork.org/scripts/456485-pops/code/pops.js
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js
// ==/UserScript==

(function () {
  let log = new Utils.Log(GM_info);
  log.config({
    logMaxCount: 20,
    autoClearConsole: true,
  });
  let httpx = new Utils.Httpx(GM_xmlhttpRequest);
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
  const NetDisk = {
    isInit: false /* 是否初始化 */,
    pageText: null /* 页面显示出的文字 */,
    linkDict: null /* 链接字典 */,
    isMatching: false /* 正在匹配链接中 */,
    matchLink: null /* 匹配到的 */,
    hasMatchLink: false /* 已存在匹配的链接 */,

    regular: {
      baidu: {
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
      lanzou: {
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
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "lanzoux.com/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://www.lanzoux.com/{#shareCode#}",
      },
      tianyiyun: {
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
      hecaiyun: {
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
      aliyun: {
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
      wenshushu: {
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
      nainiu: {
        link_innerText: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
          GM_getValue("innerText_nainiu", 20)
        )}}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
          GM_getValue("innerText_nainiu", 20)
        )}}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
        shareCode: /cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
        shareCodeNeedRemoveStr: /cowtransfer\.com\/s\//gi,
        checkAccessCode: /(密码|访问码|提取码).+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "cowtransfer.com/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://cowtransfer.com/s/{#shareCode#}",
      },
      _123pan: {
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
      weiyun: {
        link_innerText: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${parseInt(
          GM_getValue("innerText_weiyun", 20)
        )}}(访问码|密码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${parseInt(
          GM_getValue("innerHTML_weiyun", 300)
        )}}(访问码|密码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
        shareCode: /weiyun.com\/([0-9a-zA-Z\-_]{7,24})/gi,
        shareCodeNotMatch:
          /^(ajax|file|download|ptqrshow|xy-privacy|comp|web)/gi,
        shareCodeNeedRemoveStr: /weiyun.com\//gi,
        checkAccessCode: /(提取码|密码|访问码).+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://share.weiyun.com/{#shareCode#}",
      },
      xunlei: {
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
      _115pan: {
        link_innerText: `115.com/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
          GM_getValue("innerText__115pan", 20)
        )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `115.com\/s\/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
          GM_getValue("innerHTML__115pan", 300)
        )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
        shareCode: /115.com\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
        shareCodeNeedRemoveStr: /115.com\/s\//gi,
        checkAccessCode: /(提取码|密码|\?password=|访问码).+/gi,
        accessCode: /(\?password=|)([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "115.com/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://115.com/s/{#shareCode#}",
      },
      chengtong1: {
        link_innerText: `(ctfile.com|ghpym.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
          GM_getValue("innerText__chengtong1", 20)
        )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{6}|)`,
        link_innerHTML: `(ctfile.com|ghpym.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
          "innerHTML__chengtong1",
          300
        )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{6}|)`,
        shareCode: /(ctfile.com|ghpym.com)\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(ctfile.com|ghpym.com)\/d\//gi,
        checkAccessCode: /(提取码|密码|访问码).+/gi,
        accessCode: /([0-9a-zA-Z]{6})/gi,
        uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://url95.ctfile.com/d/{#shareCode#}",
      },
      chengtong2: {
        link_innerText: `(2k.us/file/|u062.com/fil\/|545c.com/file/)[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
          GM_getValue("innerText__chengtong2", 20)
        )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `(2k.us/file/|u062.com/file/|545c.com/file/)[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
          GM_getValue("innerHTML__chengtong2", 300)
        )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)`,
        shareCode:
          /(2k.us\/file\/|u062.com\/file\/|545c.com\/file\/)([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr:
          /2k.us\/file\/|u062.com\/file\/|545c.com\/file\//gi,
        checkAccessCode: /(提取码|密码|访问码).+/gi,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://u062.com/file/{#shareCode#}",
      },
      chengtong3: {
        link_innerText: `ctfile.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
          GM_getValue("innerText__chengtong1", 20)
        )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,10}[0-9a-zA-Z]{6}|)`,
        link_innerHTML: `ctfile.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
          "innerHTML__chengtong1",
          300
        )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,15}[0-9a-zA-Z]{6}|)`,
        shareCode: /ctfile.com\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /ctfile.com\/f\//gi,
        checkAccessCode: /(提取码|密码|访问码).+/gi,
        accessCode: /([0-9a-zA-Z]{6})/gi,
        uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://url95.ctfile.com/f/{#shareCode#}",
      },
      kuake: {
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
      magnet: {
        link_innerText: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
        link_innerHTML: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
        shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi,
        shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi,
        checkAccessCode: /(提取码|密码|访问码).+/gi,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}",
        blank: "magnet:?xt=urn:btih:{#shareCode#}",
      },
      jianguoyun: {
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
     * 检查页面是否存在链接
     * @param {String} clipboardText 剪贴板文本
     */
    matchPageLink(clipboardText = "") {
      let matchTextRange = GM_getValue("pageMatchRange", "innerText");
      let ignoreStr = [
        $(".whitesevPopOneFile"),
        $(".whitesevPopMoreFile"),
        $(".whitesevPop-whitesevPopSetting"),
        $(".whitesevPopNetDiskHistoryMatch"),
      ]; /* 忽略的文字，如：设置、直链弹窗 */
      if (matchTextRange.toLowerCase() === "all") {
        this.pageText = $("body").prop("innerText");
        ignoreStr.forEach((item) => {
          let _str_ = item.prop("innerText");
          _str_ = _str_ == null ? "" : _str_;
          this.pageText = this.pageText.replaceAll(_str_, "");
        });
        let pageHTML = $("body").prop("innerHTML");
        ignoreStr.forEach((item) => {
          let _str_ = item.prop("innerHTML");
          _str_ = _str_ == null ? "" : _str_;
          pageHTML = pageHTML.replaceAll(_str_, "");
        });
        this.pageText += pageHTML;
        this.pageText += clipboardText;
      } else {
        this.pageText = $("body").prop(matchTextRange) + clipboardText;
        if (matchTextRange.toLowerCase() === "innertext") {
          ignoreStr.forEach((item) => {
            let _str_ = item.prop("innerText");
            _str_ = _str_ == null ? "" : _str_;
            this.pageText = this.pageText.replaceAll(_str_, "");
          });
        } else {
          ignoreStr.forEach((item) => {
            let _str_ = item.prop("innerHTML");
            _str_ = _str_ == null ? "" : _str_;
            this.pageText = this.pageText.replaceAll(_str_, "");
            this.pageText = this.pageText.replaceAll(_str_, "");
          });
        }
      }
      if (!this.isInit) {
        this.matchLink = new Set();
        this.initLinkDict();
        this.isInit = true;
      }
      if (matchTextRange.toLowerCase() === "all") {
        $.each(this.regular, (netdiskName, item) => {
          NetDiskWorker.GM_matchWorker.postMessage({
            regexp: new RegExp(item["link_innerText"], "gi"),
            pageText: this.pageText,
            netdiskName: netdiskName,
          });
          NetDiskWorker.GM_matchWorker.postMessage({
            regexp: new RegExp(item["link_innerHTML"], "gi"),
            pageText: this.pageText,
            netdiskName: netdiskName,
          });
        });
      } else {
        $.each(this.regular, (netdiskName, item) => {
          NetDiskWorker.GM_matchWorker.postMessage({
            regexp: new RegExp(item[`link_${matchTextRange}`], "gi"),
            pageText: this.pageText,
            netdiskName: netdiskName,
          });
        });
      }
    },
    /**
     * 处理链接，将匹配到的链接转为参数和密码存入字典中
     * @param {String} netDiskName 网盘名称
     * @param {String} url
     */
    handleLink(netDiskName, url) {
      let currentDict = this.linkDict.get(netDiskName);
      let shareCode = this.handleShareCode(netDiskName, url);
      if (shareCode === "" || shareCode == null) {
        return null;
      }
      let accessCode = this.handleAccessCode(netDiskName, url);
      if (currentDict.has(shareCode)) {
        let dictAccessCode = this.linkDict.get(netDiskName).get(shareCode);
        if (dictAccessCode === "" && accessCode !== "" && accessCode != null) {
          currentDict.set(shareCode, accessCode);
          NetDiskUI.view.changeLinkView(netDiskName, shareCode, accessCode);
          log.info(
            `已存在该链接，但无密码，设置密码 ${netDiskName}: ${shareCode}  ===> ${accessCode}`
          );
        }
      } else {
        this.hasMatchLink = true;
        currentDict.set(shareCode, accessCode);
        NetDiskUI.matchIcon.add(netDiskName);
        NetDiskUI.view.addLinkView(netDiskName, shareCode, accessCode);
        log.success(
          `添加链接 ${netDiskName}: ${shareCode}  ===> ${accessCode}`
        );
      }
    },
    /**
     * 对传入的url进行处理，返回shareCode
     * @param {String} netDiskName 网盘名称
     * @param {String} url
     * @returns
     */
    handleShareCode(netDiskName, url) {
      let shareCodeMatch = url.match(this.regular[netDiskName].shareCode);
      if (
        shareCodeMatch == null ||
        (shareCodeMatch != null && shareCodeMatch.length === 0)
      ) {
        log.error(`根据链接获取shareCode失败`);
        log.error([arguments, this.regular[netDiskName].shareCode]);
        return "";
      }

      let shareCode = shareCodeMatch[0].replace(
        this.regular[netDiskName].shareCodeNeedRemoveStr,
        ""
      );
      let shareCodeNotMatch = this.regular[netDiskName].shareCodeNotMatch;
      if (shareCodeNotMatch != null && shareCode.match(shareCodeNotMatch)) {
        log.error(`不可能的shareCode => ${shareCode}`);
        return "";
      }
      shareCode =
        decodeURIComponent(shareCode); /* %E7%BD%91%E7%9B%98 => 网盘 */
      return shareCode;
    },
    /**
     * 对传入的url进行处理，返回accessCode
     * @param {String} netDiskName 网盘名称
     * @param {String} url
     * @returns "https://xxx" || ""
     */
    handleAccessCode(netDiskName, url) {
      let accessCode = "";
      let accessCodeMatch = url.match(
        this.regular[netDiskName].checkAccessCode
      );
      if (accessCodeMatch) {
        accessCode = accessCodeMatch[accessCodeMatch.length - 1].match(
          this.regular[netDiskName].accessCode
        );
        if (accessCode == null) {
          return "";
        }
        $.each(accessCode, (index, item) => {
          if (!item.match(this.regular[netDiskName]["accessCodeNotMatch"])) {
            return accessCode[index];
          }
        });
        accessCode = accessCode[accessCode.length - 1];
      }
      return accessCode;
    },
    /**
     * 获取在弹窗中显示出的链接
     * @param {String} netDiskName 网盘名称，指NetDisk.regular的内部键名
     * @param {String} shareCode
     * @param {String} accessCode
     * @returns
     */
    handleLinkShow(netDiskName, shareCode, accessCode) {
      let netDiskRegular = NetDisk.regular[netDiskName];
      if (netDiskRegular == null) {
        Qmsg.error("BUG: 获取uiLink规则失败");
        log.error(["BUG: 分析参数", netDiskName, shareCode, accessCode]);
        throw "错误";
      }
      let uiLink = netDiskRegular["uiLinkShow"].replace(
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
       * @returns {object}
       */
      baidu: function () {
        let that = this;
        this.default = function (shareCode, accessCode) {
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
       * @constructor
       * @returns {object}
       */
      lanzou: function () {
        /* 流程：判断是否是多文件
           单文件 => 请求https://www.lanzoux.com/{shareToken} 判断链接类型和是否能正常获取
                 => 请求https://www.lanzoux.com/tp/{shareToken} 获取文件sign
                 => 请求https://www.lanzoux.com/ajaxm.php 获取下载参数，下载参数例如：https://develope.lanzoug.com/file/?xxxxxxxxx
           多文件 => 先请求https://www.lanzoux.com/{shareToken} 获取文件sign => 请求https://www.lanzoux.com/filemoreajax.php 获取json格式的文件参数，参数内容如{"info":"success","text":[{"duan":"xx","icon":"","id":"".....},{},{}]} */
        let that = this;
        this.handleUrl = {
          default: (shareCode) => {
            return NetDisk.regular.lanzou.blank.replace(
              /{#shareCode#}/g,
              shareCode
            );
          },
          tp: (shareCode) => {
            return NetDisk.regular.lanzou.blank.replace(
              /{#shareCode#}/gi,
              `tp/${shareCode}`
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
        };
        this.default = async function (shareCode, accessCode) {
          that.regexp.unicode.isUnicode = shareCode.match(
            that.regexp.unicode.match
          )
            ? true
            : false;
          await that.getFileLink(shareCode, accessCode);
        };
        this.getFileLink = async function (
          shareCode,
          accessCode,
          getShareCodeByPageAgain = false
        ) {
          /* 获取文件下载链接 */
          let url = that.handleUrl.default(shareCode);
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
            await that.getMoreFile(shareCode, accessCode);
          } else {
            log.info("该链接为单文件");
            log.info(respData);
            if (getShareCodeByPageAgain) {
              let shareCodeNewMatch = respData.responseText.match(
                /var[\s]*link[\s]*=[\s]*\'tp\/(.+?)\';/i
              );
              shareCode = shareCodeNewMatch[shareCodeNewMatch.length - 1];
              log.info(`新参数 => ${shareCode}`);
            }
            await that.getLinkByTp(shareCode, accessCode);
          }
        };
        this.checkPageCode = function (response) {
          /* 页面检查，看看是否存在文件失效情况 */
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
        this.isMoreFile = function (response) {
          /* 判断是否是多文件的链接 */
          let pageText = response.responseText;
          if (pageText.match(that.regexp.moreFile.match)) {
            log.info("该链接为多文件");
            return true;
          }
          return false;
        };
        this.getLinkByTp = async function (shareCode, accessCode) {
          /* 访问蓝奏tp获取sign */
          let getResp = await httpx.get({
            url: that.handleUrl.tp(shareCode),
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
            await that.getLink(respData, shareCode, accessCode);
          } else {
            Qmsg.error("请求失败，请重试");
          }
        };
        this.getLink = async function (response, shareCode, accessCode) {
          /* 获取链接 */
          let pageText = response.responseText;
          if (pageText == null) {
            log.error("shareCode错误，重新从页面中获取");
            await that.getFileLink(shareCode, accessCode, true);
            return;
          }
          let sign = pageText.match(that.regexp.sign.match);
          let postData_p = "";
          let postData_sign = "";
          let fileNameMatch = pageText.match(that.regexp.fileName.match);
          let fileName = fileNameMatch ? fileNameMatch[1].trim() : "";
          let fileSizeMatch = pageText.match(that.regexp.size.match);
          let fileSize = fileSizeMatch ? fileSizeMatch[1].trim() : "";
          if (sign) {
            postData_sign = sign[sign.length - 1];
            log.info(`获取Sign: ${postData_sign}`);
            if (accessCode) {
              log.info("传入参数=>有密码");
              postData_p = accessCode;
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
                  shareCode,
                  (userInputAccessCode) => {
                    that.default(shareCode, userInputAccessCode);
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
                  downloadUrl
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
                downloadUrl
              );
            } else {
              Qmsg.error("获取sign失败");
            }
          }
        };
        this.getMoreFile = async function (shareCode, accessCode) {
          /* 多文件获取 */
          let getResp = await httpx.get({
            url: that.handleUrl.default(shareCode),
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
          let lx = shareCode.match(that.regexp.unicode.match) ? 1 : 2;
          let postData = `lx=${lx}&fid=${fid}&uid=${uid}&pg=${pgs}&rep=0&t=${t}&k=${k}&up=1&ls=1&pwd=${accessCode}`;
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
                fileSize
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
              shareCode,
              (userInputAccessCode) => {
                that.default(shareCode, userInputAccessCode);
              }
            );
          } else if ("没有了".indexOf(info) !== -1) {
            Qmsg.error("没有文件了");
          } else {
            Qmsg.error("未知错误");
          }
        };
        this.parseMoreFile = async function (shareCode, fileName, fileSize) {
          /* 根据获取到的json中多文件链接来获取单文件直链 */
          let resultContent = "";
          let getResp = await httpx.get({
            url: that.handleUrl.tp(shareCode),
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
       * @returns {object}
       */
      tianyiyun: function () {
        let that = this;
        this.code = {
          ShareAuditNotPass: "抱歉，该内容审核不通过",
          FileNotFound: "抱歉，文件不存在",
          ShareExpiredError: "抱歉，您访问的页面地址有误，或者该页面不存在",
          ShareAuditWaiting: "抱歉，该链接处于审核中",
          ShareInfoNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在",
          FileTooLarge: "抱歉，文件太大，不支持下载",
          InvalidSessionKey:
            "天翼云Session已失效，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才能进行登录)",
        };
        this.default = async function (shareCode, accessCode) {
          log.info([shareCode, accessCode]);
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          await that.getDownloadParams();
        };
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
            if (jsonData["needAccessCode"] && !that.accessCode) {
              Qmsg.error("密码不正确!");
              NetDiskUI.newAccessCodeView(
                undefined,
                "tianyiyun",
                that.shareCode,
                (userInputAccessCode) => {
                  that.default(that.shareCode, userInputAccessCode);
                }
              );

              return;
            }
            if (that.isFolder) {
              log.info("该链接是文件夹");
              if (that.accessCode) {
                GM_setClipboard(that.accessCode);
                Qmsg.info("提取码已复制");
              }
              window.open(`https://cloud.189.cn/t/${that.shareCode}`, "_blank");
              return;
            }
            that.fileId = jsonData.fileId;
            that.fileName = jsonData.fileName;
            that.fileSize = jsonData.fileSize;
            that.fileType = jsonData.fileType;
            that.shareId = jsonData.shareId;
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
        this.getCookie = function () {
          /* 暂不需要获取cookie */
          let cookie = "";
          return cookie;
        };
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
              download_url
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
                      height: pops.isPhone() ? "400px" : "400px",
                      width: pops.isPhone() ? "350px" : "350px",
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
              height: "180px",
              forbiddenScroll: true,
              width: pops.isPhone() ? "88vw" : "50vw",
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
       * @returns {object}
       */
      wenshushu: function () {
        let that = this;
        this.code = {
          1004: "no token",
          1013: "糟糕，此任务已过期销毁，下次要记得续期",
          1088: "糟糕，您访问的页面不存在",
        };
        this.default = async function (shareCode, accessCode) {
          that.tid = shareCode;
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
        this.getPid = async function () {
          let postResp = await httpx.post({
            url: "https://www.wenshushu.cn/ap/task/mgrtask",
            dataType: "json",
            responseType: "json",
            data: JSON.stringify({
              tid: that.tid,
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
          if (!postResp.status) {
            return;
          }
          let respData = postResp.data;
          let jsonData = JSON.parse(respData.responseText);
          if (respData.status == 200 && jsonData["code"] == 0) {
            await that.getDownloadUrl(jsonData["data"]["fileList"][0]);
          } else if (jsonData["code"] in that.code) {
            Qmsg.error(that.code[jsonData["code"]]);
          } else {
            Qmsg.error("获取文件信息失败");
          }
        };
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
       * @returns {object}
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
        this.default = async function (shareCode, accessCode) {
          log.info([shareCode, accessCode]);
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          that.panelList = [];
          that.panelContent = "";
          let checkLinkValidityStatus = await that.checkLinkValidity(
            shareCode,
            accessCode
          );
          if (!checkLinkValidityStatus) {
            return;
          }
          let infoLists = await that.getFiles(shareCode, accessCode);
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
            NetDiskUI.staticView.oneFile(
              "123盘单文件直链",
              fileInfo["FileName"],
              fileSize,
              downloadUrl
            );
          } else {
            Qmsg.info("正在递归文件");
            that.folderNumber = 0;
            await that.recursiveAlgorithm(infoLists);
            Qmsg.info("正在排序中...");
            that.panelList.sort(
              Utils.sortListByProperty((item) => {
                let timeStamp = new Date(item["updateTime"]).getTime();
                return timeStamp;
              })
            );
            log.info(that.panelList);
            that.panelList.forEach((item) => {
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
                </div>`;
              }
            });
            NetDiskUI.staticView.moreFile("123盘多文件直链", that.panelContent);
            log.info("递归完毕");
          }
        };
        this.checkLinkValidity = async function (shareCode, accessCode) {
          /* 校验链接有效性 */
          Qmsg.info("正在校验链接有效性");
          let url = `https://www.123pan.com/s/${shareCode}`;

          let getResp = await httpx.get({
            url: url,
            headers: {
              "user-agent": Utils.getRandomPCUA(),
              referer: "https://www.123pan.com",
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return;
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
              return;
            }
            let HasPwd = g_initialProps.res.data.HasPwd;
            if (HasPwd && (accessCode == null || accessCode === "")) {
              /* 该链接需要密码但是没有获取到 */
              Qmsg.error("密码缺失!");
              NetDiskUI.newAccessCodeView(
                "密码缺失",
                "_123pan",
                shareCode,
                (userInputAccessCode) => {
                  that.default(shareCode, userInputAccessCode);
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
        this.getFiles = async function (
          shareCode,
          accessCode,
          parentFileId = 0
        ) {
          /* 获取文件 */
          let url = `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${shareCode}&SharePwd=${accessCode}&ParentFileId=${parentFileId}&Page=1`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              accept: "*/*",
              "user-agent": Utils.getRandomPCUA(),
              referer: `https://www.123pan.com/s/${shareCode}`,
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
                shareCode,
                (userInputAccessCode) => {
                  that.default(shareCode, userInputAccessCode);
                }
              );
            } else if (that.code[json_data["code"]]) {
              Qmsg.error(that.code[json_data["code"]]);
            } else {
              Qmsg.error(json_data["message"]);
            }
          }
        };
        this.getFilesByRec = async function (
          shareCode,
          accessCode,
          parentFileId
        ) {
          /* 递归算法使用的请求 */
          let getResp = await httpx.get({
            url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${shareCode}&SharePwd=${accessCode}&ParentFileId=${parentFileId}&Page=1`,
            headers: {
              accept: "*/*",
              "user-agent": Utils.getRandomAndroidUA(),
              referer: `https://www.123pan.com/s/${shareCode}`,
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
        this.recursiveAlgorithm = async function (infoList) {
          /* 异步递归算法 */
          for (let i = 0; i < infoList.length; i++) {
            let item = infoList[i];
            let fileType = item["Type"];
            log.info(fileType ? "文件夹" : "文件");
            if (fileType) {
              /* 是文件夹 */
              let retList = await that.getFilesByRec(
                that.shareCode,
                that.accessCode,
                item["FileId"]
              );
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
        this.getFileDownloadInfo = async function (
          Etag,
          FileID,
          S3keyFlag,
          ShareKey,
          Size
        ) {
          /* 获取单文件下载链接 */
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
        this.decodeDownloadUrl = function (url) {
          /* 将直链的param参数解析成真正的直链 */
          if (url === "") {
            return "";
          }
          const decodeURL = new URL(url);
          const params = decodeURL.search.replace(/^\?params=/gi, "");
          const atobURL = atob(params);
          return decodeURI(atobURL);
        };
        return this;
      },
      /**
       * 坚果云
       * @constructor
       * @returns {object}
       */
      jianguoyun: function () {
        let that = this;
        this.errorCode = {
          UnAuthorized: "请先登录坚果云账号",
        };
        this.default = async function (shareCode, accessCode) {
          log.info([shareCode, accessCode]);
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
         * @param {String} currentLocation 当前位置
         * @returns
         */
        this.parseMoreFile = async function (hash = "", currentLocation = "") {
          let folderInfo = await that.getFolderInfo(hash);
          if (!folderInfo) {
            return;
          }
          let downloadList = [];
          for (let i = 0; i < folderInfo.length; i++) {
            let item = folderInfo[i];
            let downloadUrl = await that.getDirLink(
              hash,
              currentLocation,
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
          downloadList.sort(
            Utils.sortListByProperty((item) => {
              return item["mtime"];
            })
          );
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
                that.shareCode,
                (userInputAccessCode) => {
                  that.default(that.shareCode, userInputAccessCode);
                }
              );
              return;
            }
            if (fileErrorCode === "AuthenticationFailed") {
              Qmsg.error("密码错误");
              NetDiskUI.newAccessCodeView(
                undefined,
                "jianguoyun",
                that.shareCode,
                (userInputAccessCode) => {
                  that.default(that.shareCode, userInputAccessCode);
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
          } else {
            log.error("获取PageInfo失败");
            Qmsg.error("坚果云: 获取PageInfo失败");
            return;
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
     * @param {string} netDiskName
     * @param {string} shareCode
     * @param {string} accessCode
     */
    async parse(netDiskName, shareCode, accessCode) {
      Qmsg.info("正在获取直链");
      if (this.netDisk[netDiskName]) {
        var parseObj = new this.netDisk[netDiskName]();
        await parseObj.default(shareCode, accessCode);
      } else {
        log.error(`${netDiskName} 不存在解析`);
      }
    },
    /**
     * 复制到剪贴板
     * @param {string} accessCode
     * @param {string} toastText 提示的文字
     */
    setClipboard(accessCode, toastText = "提取码已复制") {
      GM_setClipboard(accessCode);
      Qmsg.success(toastText);
    },
    /**
     * 新标签页打开
     * @param {string} url
     * @param {string} accessCode
     */
    blank(url, accessCode) {
      if (accessCode) {
        this.setClipboard(accessCode);
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
     * @param {string} netDiskName 网盘变量名
     * @param {string} shareCode
     * @param {string} accessCode
     */
    scheme(netDiskName, shareCode, accessCode) {
      let url = NetDisk.regular[netDiskName].blank.replace(
        /{#shareCode#}/gi,
        shareCode
      );
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
  };

  const NetDiskFilterScheme = {
    /* android scheme调用 */
    defaultScheme:
      "jumpwsv://go?package=idm.internet.download.manager.plus&activity=idm.internet.download.manager.UrlHandlerDownloader&intentAction=android.intent.action.VIEW&intentData={#intentData#}&intentExtra=",
    packageIDM: "idm.internet.download.manager.plus",
    activityIDM: "idm.internet.download.manager.UrlHandlerDownloader",
    defaultAction: "android.intent.action.VIEW",
    defaultExtra: "",
    handleUrl(enable_key, forward_key, url) {
      /* 参数 是否启用的key和转发的scheme和需要转发的url */
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

  const NetDiskWorker = {
    blobUrl: "",
    GM_matchWorker: null,
    /**
     * 初始化Worker的Blob链接
     */
    initWorkerBlobLink: function () {
      const handleMatch = `
			(() => {
        this.addEventListener(
          "message",
          function (event) {
            let data = event.data;
            let link_regexp = data["regexp"];
            let pageText = data["pageText"];
            let netdiskName = data["netdiskName"];
            let matchData = pageText.match(link_regexp);
            matchData = matchData ? matchData : [];
            this.postMessage({
              msg: matchData.length
                ? "workercallback: success! " + matchData.length.toString()
                : "workercallback: none",
              netdiskName: netdiskName,
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
    initWorker: function () {
      NetDiskWorker.GM_matchWorker = new Worker(NetDiskWorker.blobUrl);
      NetDiskWorker.GM_matchWorker.onmessage = function (event) {
        NetDiskWorker.successCallBack(
          event.data["data"],
          event.data["netdiskName"]
        );
      };
      NetDiskWorker.GM_matchWorker.onerror = function (error) {
        NetDiskWorker.errorCallBack(error);
      };
    },
    /**
     * Worker成功回调
     * @param {String} matchLink
     * @param {String} netdiskName
     * @returns
     */
    successCallBack: function (matchLink, netdiskName) {
      /* worker处理文件匹配后的回调 */
      if (matchLink.length === 0 && NetDiskUI.isHandling) {
        setTimeout(() => {
          NetDiskUI.isHandling = false;
          /* 延迟赋值-防止页面子元素插入导致闪烁 */
        }, parseFloat(GM_getValue("delaytime", 0.8)) * 1000);
        return;
      }

      NetDisk.matchLink.add(netdiskName);
      /* 匹配到的可能很多，使用集合去重 */
      let matchLinkSet = new Set();
      matchLink.forEach((item) => {
        matchLinkSet.add(item);
      });
      Array.from(matchLinkSet).forEach((item) => {
        NetDisk.handleLink(netdiskName, item);
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
    errorCallBack: function (error) {
      log.error(["Worker Error", error]);
    },
  };
  const NetDiskUI = {
    matchIcon: new Set() /* 已匹配到的网盘图标字典 */,
    size: 50 /* 高度和宽度 */,
    opacity: 1 /* 按钮透明度 */,
    isCreatedUISetting: false /* 已创建设置界面 */,
    isHandling: false /* 是否在处理页面链接中标识 */,
    uiLinkAlias: null /* 链接层唯一标识 */,
    uiSettingAlias: null /* 设置层唯一标识 */,
    uiLinkParseAlias: "单文件直链层" /* 单文件直链层唯一标识 */,
    uiLinkParseMoreAlias: "多文件直链层" /* 多文件直链层唯一标识 */,
    uiPasswordAlias: "重输密码层" /* 重输密码层唯一标识 */,
    isRandBg: false /* 是否正在循环切换按钮背景 */,
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
        chengtong1: RESOURCE_ICON.chengtong,
        chengtong2: RESOURCE_ICON.chengtong,
        chengtong3: RESOURCE_ICON.chengtong,
        kuake: RESOURCE_ICON.kuake,
        magnet: RESOURCE_ICON.magnet,
        jianguoyun: RESOURCE_ICON.jianguoyun,
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
          this.resizeEvent();

          NetDiskUI.suspension.isShow = true;
        }
        this.randBg();
      },
      createUI() {
        NetDiskUI.size = GM_getValue("size")
          ? parseInt(GM_getValue("size"))
          : 50;
        NetDiskUI.opacity = GM_getValue("opacity")
          ? parseFloat(GM_getValue("opacity"))
          : 1;
        if (NetDiskUI.size < 15) {
          GM_setValue("size", 15);
          NetDiskUI.size = 15;
        }
        if (NetDiskUI.size > 250) {
          GM_setValue("size", 250);
          NetDiskUI.size = 250;
        }
        if (NetDiskUI.opacity < 0.1) {
          GM_setValue("opacity", 0.1);
          NetDiskUI.opacity = 0.1;
        }
        if (NetDiskUI.opacity > 1.0) {
          GM_setValue("opacity", 1);
          NetDiskUI.opacity = 1;
        }
        this.loadCSS();
        let _html_ = `
				<div class="whitesevSuspension" id="whitesevSuspensionId" style="width:${NetDiskUI.size}px;height:${NetDiskUI.size}px;opacity:${NetDiskUI.opacity}">
					<div class="whitesevSuspensionMain">
						<div class="whitesevSuspensionFloor">
							<div class="netdisk"></div>
						</div>
					</div>
				</div>
				`;
        let _settingHtml_ = `
				<div id="whitesevSuspensionContextMenu" class="whitesevSuspensionContextMenuHide">
					<ul>
						<li class="whitesevSuspensionSetting" style="padding: 0px 10px;">
						  设置
						</li>
            <li class="whitesevPopNetDiskHistoryMatchMenu" style="padding: 0px 10px;">
						  历史匹配记录
						</li>
					</ul>
				</div>
				`;

        $("body").append($(_html_)[0]);
        $("body").append($(_settingHtml_)[0]);
      },
      initPop() {
        /* 所有的弹窗初始化设置 */
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
				/*
				.netdisk-checkbox .knobs:before,
				.netdisk-checkbox .knobs span{
						position: absolute;
						display: inline;
						top: 5px;
						left: 6px;
						width: 20px;
						height: 10px;
						color: #fff;
						font-size: 10px;
						font-weight: bold;
						text-align: center;
						line-height: 1;
						padding: 9px 4px;
				}
				另类写法居中
				*/
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
			/*
				.netdisk-checkbox .knobs:before{
					content: 'N';
					display: inline;
					top: -2px;
					left: -10px;
				}
				.netdisk-checkbox input[type="checkbox"]:checked + .knobs:before{
						content: 'Y';
						display: inline;
						position: inherit;
						top: -2px;
						left: 20px;
				}

				.netdisk-checkbox input[type="checkbox"]:checked + .knobs span{
						left: 30px;
						background-color: #03A9F4;
				}
				另类写法居中 */
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
        if (!pops.isPhone()) {
          GM_addStyle(`
					.whitesevPop ::-webkit-scrollbar
					{
							width: 11px;
							height: 16px;
							background-color: #ffffff;
					}
					/*定义滚动条轨道
					内阴影+圆角*/
					.whitesevPop ::-webkit-scrollbar-track
					{
							-webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 25%);
							border-radius:10px;
							background-color: #f2f2f2;
					}
					/*定义滑块
					内阴影+圆角*/
					.whitesevPop ::-webkit-scrollbar-thumb
					{
							border-radius: 16px;
							-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
							background-color: #3597ff;
					}
					`);
        }
      },
      showSettingView() {
        /* 显示设置界面 */
        let _settingHtml_ = `
				<div class="netdisk-setting-body">
					<div class="netdisk-setting">
						<div class="netdisk-setting-main">
							<details class="netdisk-setting-menu" type="总设置">
									<summary>总设置</summary>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-size">大小 ${GM_getValue("size", 50)}</label>
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
											<label data-id="netdisk-delaytime">检测延时(秒) ${GM_getValue(
                        "delaytime",
                        0.8
                      )}</label>
											<input type="range" data-key="delaytime" data-content="检测延时(秒) " min="0.6" step="0.1" max="5.0" data-default="0.8">
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
							</details>
							<details class="netdisk-setting-menu" type="百度">
									<summary>百度网盘</summary>
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
											<p>网站存在密钥验证</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="baidu-website-key-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
											
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>启用解析</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="baidu-static-enable" mutex=".netdisk-checkbox input[data-key='baidu-open-enable']">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
											
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="baidu-open-enable" mutex=".netdisk-checkbox input[data-key='baidu-static-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerText_baidu">提取码间隔(innerText)${GM_getValue(
                        "innerText_baidu",
                        20
                      )}</label>
											<input type="range" data-key="innerText_baidu" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_baidu">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_baidu",
                        300
                      )}</label>
											<input type="range" data-key="innerHTML_baidu" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="蓝奏云">
								<summary>蓝奏云</summary>
								<div class="netdisk-setting-menu-item" type="checkbox">
										<p>单/多文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="lanzou-static-enable" mutex=".netdisk-checkbox input[data-key='lanzou-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
								<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="lanzou-open-enable" mutex=".netdisk-checkbox input[data-key='lanzou-static-enable']">
											<div class="knobs"><span></span></div>
											<div class="layer"></div>
										</div>
								</div>
								<div class="netdisk-setting-menu-item" type="checkbox">
										<p>直链调用scheme</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="lanzou-static-scheme-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
								</div>
								<div class="netdisk-setting-menu-item" type="scheme">
										<p>scheme转发</p>
										<input type="text" data-key="lanzou-static-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
								</div>
								<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_lanzou">提取码间隔(innerText)${GM_getValue(
                      "innerText_lanzou",
                      20
                    )}</label>
										<input type="range" data-key="innerText_lanzou" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
								</div>
								<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerHTML_lanzou">提取码间隔(innerHTML)${GM_getValue(
                      "innerHTML_lanzou",
                      300
                    )}</label>
										<input type="range" data-key="innerHTML_lanzou" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
								</div>
							</details>
							<details class="netdisk-setting-menu" type="天翼云">
									<summary>天翼云</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>单文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="tianyiyun-static-enable" mutex=".netdisk-checkbox input[data-key='tianyiyun-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="tianyiyun-open-enable" mutex=".netdisk-checkbox input[data-key='tianyiyun-static-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>直链调用scheme</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="tianyiyun-scheme-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
									<div class="netdisk-setting-menu-item" type="scheme">
											<p>scheme转发</p>
											<input type="text" data-key="tianyiyun-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_tianyiyun">提取码间隔(innerText)${GM_getValue(
                      "innerText_tianyiyun",
                      20
                    )}</label>
										<input type="range" data-key="innerText_tianyiyun" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_tianyiyun">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_tianyiyun",
                        300
                      )}</label>
											<input type="range" data-key="innerHTML_tianyiyun" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="和彩云">
									<summary>中国移动云盘(原:和彩云)</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="hecaiyun-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_hecaiyun">提取码间隔(innerText)${GM_getValue(
                      "innerText_hecaiyun",
                      20
                    )}</label>
										<input type="range" data-key="innerText_hecaiyun" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_hecaiyun">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_hecaiyun",
                        300
                      )}</label>
											<input type="range" data-key="innerHTML_hecaiyun" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="阿里云">
									<summary>阿里云</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="aliyun-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_aliyun">提取码间隔(innerText)${GM_getValue(
                      "innerText_aliyun",
                      20
                    )}</label>
										<input type="range" data-key="innerText_aliyun" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_aliyun">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_aliyun",
                        300
                      )}</label>
											<input type="range" data-key="innerHTML_aliyun" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="文叔叔">
									<summary>文叔叔</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>单文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="wenshushu-static-enable" mutex=".netdisk-checkbox input[data-key='wenshushu-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="wenshushu-open-enable" mutex=".netdisk-checkbox input[data-key='wenshushu-static-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>直链调用scheme</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="wenshushu-static-scheme-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
									<div class="netdisk-setting-menu-item" type="scheme">
											<p>scheme转发</p>
											<input type="text" data-key="wenshushu-static-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_wenshushu">提取码间隔(innerText)${GM_getValue(
                      "innerText_wenshushu",
                      20
                    )}</label>
										<input type="range" data-key="innerText_wenshushu" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_wenshushu">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_wenshushu",
                        300
                      )}</label>
											<input type="range" data-key="innerHTML_wenshushu" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="奶牛">
									<summary>奶牛</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="nainiu-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_nainiu">提取码间隔(innerText)${GM_getValue(
                      "innerText_nainiu",
                      20
                    )}</label>
										<input type="range" data-key="innerText_nainiu" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_nainiu">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_nainiu",
                        300
                      )}</label>
											<input type="range" data-key="innerHTML_nainiu" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="123盘">
									<summary>123盘</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>单/多文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="_123pan-static-enable" mutex=".netdisk-checkbox input[data-key='_123pan-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="_123pan-open-enable" mutex=".netdisk-checkbox input[data-key='_123pan-static-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>直链调用scheme</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="_123pan-static-scheme-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
									<div class="netdisk-setting-menu-item" type="scheme">
											<p>scheme转发</p>
											<input type="text" data-key="_123pan-static-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText__123pan">提取码间隔(innerText)${GM_getValue(
                      "innerText__123pan",
                      20
                    )}</label>
										<input type="range" data-key="innerText__123pan" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML__123pan">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML__123pan",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML__123pan" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="微云">
									<summary>微云</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="weiyun-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_weiyun">提取码间隔(innerText)${GM_getValue(
                      "innerText_weiyun",
                      20
                    )}</label>
										<input type="range" data-key="innerText_weiyun" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_weiyun">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_weiyun",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML_weiyun" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="迅雷云盘">
									<summary>迅雷云盘</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="xunlei-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_xunlei">提取码间隔(innerText)${GM_getValue(
                      "innerText_xunlei",
                      20
                    )}</label>
										<input type="range" data-key="innerText_xunlei" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_xunlei">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_xunlei",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML_xunlei" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="115盘">
									<summary>115盘</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="_115pan-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText__115pan">提取码间隔(innerText)${GM_getValue(
                      "innerText__115pan",
                      20
                    )}</label>
										<input type="range" data-key="innerText__115pan" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML__115pan">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML__115pan",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML__115pan" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="城通网盘1">
									<summary>城通网盘1</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="chengtong1-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText__chengtong1">提取码间隔(innerText)${GM_getValue(
                      "innerText__chengtong1",
                      20
                    )}</label>
										<input type="range" data-key="innerText__chengtong1" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML__chengtong1">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML__chengtong1",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML__chengtong1" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="城通网盘2">
									<summary>城通网盘2</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="chengtong2-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText__chengtong2">提取码间隔(innerText)${GM_getValue(
                      "innerText__chengtong2",
                      20
                    )}</label>
										<input type="range" data-key="innerText__chengtong2" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML__chengtong2">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML__chengtong2",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML__chengtong2" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
              <details class="netdisk-setting-menu" type="城通网盘3">
									<summary>城通网盘3</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="chengtong3-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText__chengtong3">提取码间隔(innerText)${GM_getValue(
                      "innerText__chengtong3",
                      20
                    )}</label>
										<input type="range" data-key="innerText__chengtong3" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML__chengtong3">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML__chengtong3",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML__chengtong3" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="夸克网盘">
									<summary>夸克网盘</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="kuake-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_kuake">提取码间隔(innerText)${GM_getValue(
                      "innerText_kuake",
                      20
                    )}</label>
										<input type="range" data-key="innerText_kuake" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_kuake">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_kuake",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML_kuake" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
							<details class="netdisk-setting-menu" type="磁力magnet">
									<summary>磁力magnet</summary>
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
									
							</details>
              <details class="netdisk-setting-menu" type="坚果云">
									<summary>坚果云</summary>
                  <div class="netdisk-setting-menu-item" type="checkbox">
										<p>单文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="jianguoyun-static-enable" mutex=".netdisk-checkbox input[data-key='jianguoyun-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
                    <p>新标签页打开</p>
                    <div class="netdisk-checkbox">
                      <input type="checkbox" data-key="jianguoyun-open-enable" mutex=".netdisk-checkbox input[data-key='jianguoyun-static-enable']">
                      <div class="knobs"><span></span></div><div class="layer"></div>
                    </div>
									</div>
                  <div class="netdisk-setting-menu-item" type="checkbox">
											<p>直链调用scheme</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="jianguoyun-static-scheme-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
									<div class="netdisk-setting-menu-item" type="scheme">
											<p>scheme转发</p>
											<input type="text" data-key="jianguoyun-static-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
									</div>
                  <div class="netdisk-setting-menu-item">
										<label data-id="netdisk-innerText_jianguoyun">提取码间隔(innerText)${GM_getValue(
                      "innerText_jianguoyun",
                      20
                    )}</label>
										<input type="range" data-key="innerText_jianguoyun" data-content="提取码间隔(innerText)" min="0" max="100" data-default="20">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-innerHTML_jianguoyun">提取码间隔(innerHTML)${GM_getValue(
                        "innerHTML_jianguoyun",
                        300
                      )}</label>
										<input type="range" data-key="innerHTML_jianguoyun" data-content="提取码间隔(innerHTML)" min="0" max="500" data-default="300">
									</div>
							</details>
						</div>
					</div>
				</div>
				`;
        NetDiskUI.uiSettingAlias = pops.alert({
          title: {
            text: "设置",
            position: "center",
          },
          content: {
            text: _settingHtml_,
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
          height: pops.isPhone() ? "60vh" : "65vh",
          width: pops.isPhone() ? "88vw" : "50vw",
          drag: GM_getValue("pcDrag", false),
          mask: true,
          forbiddenScroll: true,
        });
        function setSettingInputEvent() {
          /* 设置复选框是否选中 */
          $(".netdisk-setting input").each((index, item) => {
            let data_key = item.getAttribute("data-key");
            let data_default = item.getAttribute("data-default");
            item.value = GM_getValue(data_key, data_default)
              ? GM_getValue(data_key, data_default)
              : "";
            switch (item.getAttribute("type")) {
              case "checkbox":
                item.checked = GM_getValue(data_key) ? true : false;
                let mutex = item.getAttribute("mutex");
                $(item).on("click", function (event) {
                  if (mutex) {
                    let mutexElement = $(mutex);
                    let mutex_data_key = $(mutex).attr("data-key");
                    if (item.checked) {
                      mutexElement.prop("checked", !item.checked);
                      GM_setValue(mutex_data_key, !item.checked);
                    }
                  }
                  GM_setValue(data_key, item.checked);
                });
                break;
              case "range":
                $(item).on("input propertychange", (val) => {
                  $(`.netdisk-setting label[data-id=netdisk-${data_key}]`).html(
                    `${item.getAttribute("data-content")}${item.value}`
                  );
                  let itSize = $(".netdisk-setting input[data-key=size]").val();
                  $("#whitesevSuspensionId").css({
                    width: `${itSize}px`,
                    height: `${itSize}px`,
                    opacity: $(
                      ".netdisk-setting input[data-key=opacity]"
                    ).val(),
                  });
                  NetDiskUI.size = itSize;
                  NetDiskUI.suspension.setSuspensionDefaultPositionEvent();
                  GM_setValue(data_key, item.value);
                });

              default:
                $(item).on("input propertychange", (val) => {
                  GM_setValue(data_key, item.value);
                });
            }
          });
        }
        function setSettingSelectEvent() {
          /* 设置下拉列表的默认值 */
          $(".netdisk-setting select").change(function (event) {
            let data_key = event.target.getAttribute("data-key");
            let data_value =
              event.target[event.target.selectedIndex].getAttribute(
                "data-value"
              );
            GM_setValue(data_key, data_value);
          });

          $(".netdisk-setting-menu-item select").each((index, item) => {
            item = $(item);
            let dataKey = item.attr("data-key");
            let dataDefaultValue = item.attr("data-default");
            let getDataValue = GM_getValue(dataKey, dataDefaultValue);
            item
              .find(`option[data-value='${getDataValue}']`)
              .attr("selected", true);
          });
        }
        function setSettingLabelEvent() {
          /* 设置点击Label设置range为默认值 */
          $(NetDiskUI.uiSettingAlias.popsElement)
            .find("label[data-id*=netdisk-]")
            .on("click", function () {
              let obj = $(this);
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
          $(NetDiskUI.uiSettingAlias.popsElement)
            .find("label[data-id*=netdisk-]")
            .each((index, item) => {
              $(item).css("cursor", "pointer");
            });
        }
        setSettingInputEvent();
        setSettingSelectEvent();
        setSettingLabelEvent();
      },
      setSuspensionEvent() {
        /* 设置悬浮按钮事件 */
        let needDragEle = document.getElementById("whitesevSuspensionId");
        let that = this;
        let dragNode = new AnyTouch(needDragEle);
        let timerID = null;
        let isClicked = false;
        let isDouble = false;
        let click_deviation_x = 0; /* 点击元素，距离元素左上角的X轴偏移 */
        let click_deviation_y = 0; /* 点击元素，距离元素左上角的Y轴偏移 */
        dragNode.on("pan", function (event) {
          if (!isClicked) {
            isClicked = true;
            click_deviation_x = event.nativeEvent.offsetX
              ? parseInt(event.nativeEvent.offsetX)
              : parseInt(event.getOffset().x);
            click_deviation_y = event.nativeEvent.offsetY
              ? parseInt(event.nativeEvent.offsetY)
              : parseInt(event.getOffset().y);
            $("#whitesevSuspensionId").css({
              cursor: "move",
              transition: "none",
            });
          }
          if (event.phase === "move") {
            if (click_deviation_x > 250 || click_deviation_y > 250) {
              return;
            }
            var maxL = $(window).width() - NetDiskUI.size;
            var maxT = $(window).height() - NetDiskUI.size;
            var x = event.x - click_deviation_x;
            var y = event.y - click_deviation_y;
            x = x < maxL ? x : maxL;
            y = y < maxT ? y : maxT;
            x = x < 0 ? 0 : x;
            y = y < 0 ? 0 : y;
            if (top.window == self.window) {
              GM_setValue("suspensionX", x);
              GM_setValue("suspensionY", y);
            }

            $("#whitesevSuspensionId").css({
              left: x,
              top: y,
            });
          }

          if (event.phase === "end") {
            isClicked = false;
            $("#whitesevSuspensionId").css("cursor", "auto");
            let left_px = parseInt(
              $("#whitesevSuspensionId").css("left").replace("px", "")
            );
            let setCSSLeft = 0;
            if (left_px >= $(window).width() / 2) {
              setCSSLeft = $(window).width() - NetDiskUI.size;
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

            $("#whitesevSuspensionId").css({
              left: setCSSLeft,
              transition: "left 300ms ease 0s",
            });
          }
        });

        dragNode.on(["click", "tap"], function (event) {
          if (isDouble) {
            /* 双 */
            clearTimeout(timerID);
            timerID = setTimeout(function () {
              isDouble = false;
              that.showSettingView();
            }, 150);
          } else {
            isDouble = true;
            timerID = setTimeout(function () {
              isDouble = false;
              NetDiskUI.view.show();
            }, 150);
          }
        });
        $(window).on("click", function (event) {
          let targetId = event.target.id;
          let targetClassName = event.target.className;
          if (targetId != "whitesevSuspensionContextMenu") {
            $("#whitesevSuspensionContextMenu").addClass(
              "whitesevSuspensionContextMenuHide"
            );
          }
          if (targetClassName === "whitesevSuspensionSetting") {
            log.info("打开设置界面");
            that.showSettingView();
          }
          if (targetClassName === "whitesevPopNetDiskHistoryMatchMenu") {
            log.info("打开历史匹配记录界面");
            NetDiskUI.netDiskHistoryMatch.show();
          }
        });
        $("#whitesevSuspensionId").on("contextmenu", function (event) {
          event.preventDefault();
          let settingEle = $("#whitesevSuspensionContextMenu");
          var maxL1 = $(window).width() - NetDiskUI.size;
          var maxT1 = $(window).height() - NetDiskUI.size;
          var x1 = event.clientX;
          var y1 = event.clientY;
          /* 不允许超出浏览器范围 */
          x1 = x1 < 0 ? 0 : x1;
          x1 = x1 < maxL1 ? x1 : maxL1;
          y1 = y1 < 0 ? 0 : y1;
          y1 = y1 < maxT1 ? y1 : maxT1;
          settingEle.removeClass("whitesevSuspensionContextMenuHide");
          settingEle.css({
            left: x1,
            top: y1,
          });
        });
      },
      setSuspensionDefaultPositionEvent() {
        /* 设置悬浮按钮位置 */
        let maxY = $(window).height() - NetDiskUI.size;
        let defaultX = $(window).width() - NetDiskUI.size;
        let defaultY = $(window).height() / 2 - NetDiskUI.size;
        let setX = GM_getValue("suspensionX", defaultX);
        let setY = GM_getValue("suspensionY", defaultY);

        setX = GM_getValue("isRight") ? defaultX : 0;
        setY = setY < maxY ? setY : maxY; /* 超出高度那肯定是最底下了 */
        setY = setY < 0 ? 0 : setY;
        if (top.window == self.window) {
          GM_setValue("suspensionX", setX);
          GM_setValue("suspensionY", setY);
        }

        $("#whitesevSuspensionId").css({
          left: setX,
          top: setY,
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
					#whitesevSuspensionContextMenu{
						position: fixed;
						z-index: 10000;
    				text-align: center;
						padding: 3px 0px;
						border-radius: 3px;
						font-size: 13px;
						font-weight: 500;
						background:#fff;
					}
					#whitesevSuspensionContextMenu li:hover{
						background: #dfdfdf;
            cursor: pointer;
					}
					.whitesevSuspensionContextMenuHide{
						display: none;
					}
					.whitesevPop-content p[pop]{
						height: 100%;
					}
				`);
      },
      resizeEvent() {
        /* 界面大小改变 */
        $(window).resize(() => {
          this.setSuspensionDefaultPositionEvent();
        });
      },
      randBg() {
        /* 悬浮按钮背景轮播淡入淡出 */
        if (this.isRandBg) {
          return;
        }
        let currentList = [];
        let currentIndex = 0;
        let switchBgTime = 1500; /* 淡入或淡出的持续时间 */
        let switchBgShowTime = 1200; /* 淡入或淡出后的延迟切换时间 */
        currentList = getRandBgList();
        let randBgSrc = currentList[currentIndex];
        let randBgNode = $(".whitesevSuspension .netdisk");
        randBgNode.css("background-image", `url(${randBgSrc})`);
        if (
          currentList.length < 2 ||
          GM_getValue("randbg-time", switchBgTime) <= 0
        ) {
          return;
        }
        this.isRandBg = true;
        function getRandBgList() {
          let _result_list_ = [];
          NetDiskUI.matchIcon.forEach((item) => {
            _result_list_ = [..._result_list_, NetDiskUI.src.icon[item]];
          });
          return _result_list_;
        }
        function _show_(_time_, _bg_src_) {
          currentList = getRandBgList();
          randBgNode.fadeOut(_time_, function () {
            currentIndex++;
            currentIndex = currentIndex < currentList.length ? currentIndex : 0;
            _bg_src_ = currentList[currentIndex];
            randBgNode.css("background-image", `url(${_bg_src_})`);
            randBgNode.fadeIn(_time_, function () {
              setTimeout(() => {
                _show_(
                  parseInt(GM_getValue("randbg-time", switchBgTime)),
                  _bg_src_
                );
              }, parseInt(GM_getValue("randbg-show-time", switchBgShowTime)));
            });
          });
        }
        _show_(parseInt(GM_getValue("randbg-time", switchBgTime)), randBgSrc);
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
				.whitesevPop-content p[pop]{
					text-indent: 0px;
				}
				.whitesevPop-button[type="primary"] {
					border-color: #2d8cf0;
					background-color: #2d8cf0;
				}
				`);
      },
      createView() {
        let viewAddHTML = "";
        NetDiskUI.matchIcon.forEach((netDiskName) => {
          let netDisk = NetDisk.linkDict.get(netDiskName);
          $.each(netDisk.getItems(), (shareCode, accessCode) => {
            let uiLink = NetDisk.handleLinkShow(
              netDiskName,
              shareCode,
              accessCode
            );
            viewAddHTML =
              viewAddHTML +
              this.getViewHTML(
                NetDiskUI.src.icon[netDiskName],
                netDiskName,
                shareCode,
                accessCode,
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
          height: pops.isPhone() ? "60vh" : "65vh",
          width: pops.isPhone() ? "88vw" : "50vw",
          drag: GM_getValue("pcDrag", false),
          mask: true,
          forbiddenScroll: true,
        });
        this.setNetDiskUrlClickEvent(".netdisk-url a");
      },
      getViewHTML(
        _netdiskicon_,
        _netdiskname_,
        _sharecode_,
        _accesscode_,
        _uilink_
      ) {
        return `
				<div class="netdisk-url-box">
					<div class="netdisk-url-div">
						<div class="netdisk-icon">
							<img src="${_netdiskicon_}">
						</div>
						<div class="netdisk-url">
							<a href="javascript:;" isvisited="false" data-netdisk="${_netdiskname_}" data-sharecode="${_sharecode_}" data-accesscode="${_accesscode_}" data-open-enable-key="${_netdiskname_}-open-enable" data-static-enable-key="${_netdiskname_}-static-enable" data-scheme-enable-key="${_netdiskname_}-scheme-enable">${_uilink_}</a>
						</div>
					</div>
				</div>
				`;
      },
      /**
       * 设置网盘链接点击事件，要求，它是<a>元素且存在以下属性
       * isvisited  string true|false
       * data-netdisk  string
       * data-sharecode string
       * data-accesscode string
       * data-open-enable-key string
       * data-static-enable-key string
       * data-scheme-enable-key string
       * @param {string} clickNodeSelector - 元素选择器
       */
      setNetDiskUrlClickEvent(clickNodeSelector) {
        function clickEvent(clickElement) {
          clickElement.target.setAttribute("isvisited", "true");
          let netdiskName = clickElement.target.getAttribute("data-netdisk");
          let shareCode = clickElement.target.getAttribute("data-sharecode");
          let accessCode = clickElement.target.getAttribute("data-accesscode");
          let openEnable = GM_getValue(
            clickElement.target.getAttribute("data-open-enable-key"),
            false
          );
          let staticEnable = GM_getValue(
            clickElement.target.getAttribute("data-static-enable-key"),
            false
          );
          let schemeEnable = GM_getValue(
            clickElement.target.getAttribute("data-scheme-enable-key"),
            false
          );
          if (openEnable) {
            let url = NetDisk.regular[netdiskName].blank
              .replace(/{#shareCode#}/gi, shareCode)
              .replace(/{#accessCode#}/gi, accessCode);
            NetDiskParse.blank(url, accessCode);
          } else if (staticEnable) {
            NetDiskParse.parse(netdiskName, shareCode, accessCode);
          } else if (schemeEnable) {
            NetDiskParse.scheme(netdiskName, shareCode, accessCode);
          } else {
            NetDiskParse.setClipboard(clickElement.target.outerText, "已复制");
          }
        }
        $("body").on("click", clickNodeSelector, clickEvent);
      },
      /**
       * 添加新的链接
       * @param {string} netDiskName
       * @param {string} shareCode
       * @param {string} accessCode
       * @returns
       */
      addLinkView(netDiskName, shareCode, accessCode) {
        NetDiskUI.netDiskHistoryMatch.setNetDiskHistoryMatchData(
          netDiskName,
          shareCode,
          accessCode
        );
        if (!NetDiskUI.uiLinkAlias) {
          return null;
        }
        log.info([netDiskName, shareCode, accessCode]);
        let icon = NetDiskUI.src.icon[netDiskName];
        let uiLink = NetDisk.handleLinkShow(netDiskName, shareCode, accessCode);
        let insertDOM = this.getViewHTML(
          icon,
          netDiskName,
          shareCode,
          accessCode,
          uiLink
        );
        let parentDOM = $(
          NetDiskUI.uiLinkAlias.popsElement.querySelector(
            ".netdisk-url-box-all"
          )
        );
        parentDOM.append(insertDOM);
      },
      /**
       * 修改已存在的view
       * @param {string} netDiskName
       * @param {string} shareCode
       * @param {string} accessCode
       * @returns
       */
      changeLinkView(netDiskName, shareCode, accessCode) {
        NetDiskUI.netDiskHistoryMatch.setNetDiskHistoryMatchData(
          netDiskName,
          shareCode,
          accessCode
        );
        if (!NetDiskUI.uiLinkAlias) {
          return null;
        }
        let uiLink = NetDisk.handleLinkShow(netDiskName, shareCode, accessCode);
        let needChangeDOM = $(
          NetDiskUI.uiLinkAlias.popsElement.querySelector(
            `.netdisk-url a[data-sharecode='${shareCode}']`
          )
        );
        log.info("修改链接视图");
        log.info(needChangeDOM);
        needChangeDOM.attr("data-accesscode", accessCode);
        needChangeDOM.html(uiLink);
      },
      /**
       * 设置点击图标按钮导航至该网盘链接所在网页中位置
       */
      registerIconGotoPagePosition() {
        $(document).on(
          "click",
          ".whitesevPop .netdisk-icon img",
          function (event) {
            let dataSharecode =
              event.target.parentElement.nextElementSibling.firstElementChild.getAttribute(
                "data-sharecode"
              );
            Utils.findWindowPageString(dataSharecode, true);
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
					.netdisk-static-filesize{

					}
					.netdisk-static-body .netdisk-static-filesize:before{
						content: "大小: ";
						font-weight: bold;
						display: contents;
    				position: inherit;
					}
					`);
        }
      },
      /**
       * 单文件
       * @param {string} title 标题
       * @param {string} fileName 文件名
       * @param {string} fileSize 文件大小
       * @param {string} downloadUrl 文件链接
       */
      oneFile(title, fileName, fileSize, downloadUrl) {
        this.addCSS();
        Qmsg.success("成功获取直链");
        pops.confirm({
          title: {
            text: title,
            position: "center",
          },
          content: {
            text: `<div class="netdisk-static-body"><div class="netdisk-static-filename"><a target="_blank" href="${downloadUrl}">${fileName}</a></div><div class="netdisk-static-filesize">${fileSize}</div></div>`,
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
          height: "180px",
          width: pops.isPhone() ? "88vw" : "50vw",
          mask: true,
          drag: GM_getValue("pcDrag", false),
          forbiddenScroll: true,
        });
      },
      /**
       * 多文件
       * @param {string} title 标题
       * @param {string} content 弹窗内容HTML或Text
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
          height: "400px",
          width: pops.isPhone() ? "88vw" : "50vw",
          drag: GM_getValue("pcDrag", false),
          forbiddenScroll: true,
        });
      },
    },
    /**
     * 需要重新输入新密码的弹窗
     * @param {string} title 标题
     * @param {string} netDiskName 网盘名
     * @param {string} shareCode
     * @param {Function} okCallBack
     */
    newAccessCodeView(
      title = "密码错误",
      netDiskName = "",
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
              let userInputAccessCode = event.text.replace(/ /g, "");
              /* 处理已显示的链接 */
              let uiLink = NetDisk.handleLinkShow(
                netDiskName,
                shareCode,
                userInputAccessCode
              );
              $(
                `.netdisk-url a[data-netdisk=${netDiskName}][data-sharecode=${shareCode}]`
              ).attr("data-accesscode", userInputAccessCode);
              $(
                `.netdisk-url a[data-netdisk=${netDiskName}][data-sharecode=${shareCode}]`
              ).html(uiLink);
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
        height: "160px",
        width: pops.isPhone() ? "88vw" : "50vw",
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
        data.forEach((item, index) => {
          let netDiskURL = NetDisk.handleLinkShow(
            item.netDiskName,
            item.shareCode,
            item.accessCode
          );
          dataHTML += `
          <li>
            <div class="netdiskrecord-link">
              <p>链接</p>
              <a  href="javascript:;"
                  isvisited="false"
                  data-netdisk="${item.netDiskName}"
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
              ${Utils.getFormatTime(undefined, item.addTime)}
            </div>
            <div class="netdiskrecord-update-time">
              <p>更新时间</p>
              ${Utils.getFormatTime(undefined, item.updateTime)}
            </div>
            <div class="netdiskrecord-functions">
              <p>功能</p>
              <button class="btn-delete" data-json='${JSON.stringify(
                item
              )}'>删除</button>
            </div>
          </li>`;
        });
        dataHTML = `
        <div class="netdiskrecord-search">
          <input type="text" placeholder="搜索链接/网址/网址标题，可正则搜索">
        </div>
        <ul>${dataHTML}</ul>`;
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
              text: "清空所有",
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
                        $(
                          ".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul li"
                        ).remove();
                        okEvent.close();
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
          height: pops.isPhone() ? "60vh" : "65vh",
          width: pops.isPhone() ? "88vw" : "50vw",
          mask: true,
          drag: GM_getValue("pcDrag", false),
          forbiddenScroll: true,
        });
        this.setEvent();
        this.setSearchEvent();
        this.setOtherEvent();
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
          
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url{
          
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
      setEvent() {
        if (this.isSetSearchEvent) {
          return;
        }
        this.isSetEvent = true;
        NetDiskUI.view.setNetDiskUrlClickEvent(
          ".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a"
        );
      },
      setSearchEvent() {
        let isSeaching = false; /* 当前搜索的状态 */
        let searchLoading = null; /* 搜索中的遮罩层 */
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
          if (inputText === "") {
            /* 输入空就关闭遮罩层且恢复style */
            $(".whitesevPopNetDiskHistoryMatch .pops-confirm-content li").each(
              (index, item) => {
                if (item.getAttribute("class") === "netdiskrecord-search") {
                  return;
                }
                item.removeAttribute("style");
              }
            );
            searchLoading?.close();
            isSeaching = false;
            return;
          }
          let isFind = false; /* 找到的状态 */
          $(".whitesevPopNetDiskHistoryMatch .pops-confirm-content li").each(
            (index, item) => {
              let linkNodeText = item.querySelector(
                ".netdiskrecord-link a"
              ).innerText;
              let urlNodeText = item.querySelector(
                ".netdiskrecord-url a"
              ).innerText;
              let topURLNodeText = item.querySelector(".netdiskrecord-top-url");
              topURLNodeText = topURLNodeText ? topURLNodeText.innerText : "";
              let urlTitleNodeText = item.querySelector(
                ".netdiskrecord-url-title"
              ).innerText;
              if (
                linkNodeText.match(new RegExp(inputText, "ig")) ||
                urlNodeText.match(new RegExp(inputText, "ig")) ||
                topURLNodeText.match(new RegExp(inputText, "ig")) ||
                urlTitleNodeText.match(new RegExp(inputText, "ig"))
              ) {
                /* 匹配到 */
                isFind = true;
                item.removeAttribute("style");
              } else {
                item.setAttribute("style", "display:none;");
              }
            }
          );
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
      setOtherEvent() {
        if (this.isSetOtherEvent) {
          return;
        }
        this.isSetOtherEvent = true;

        let that = this;
        $(document).on(
          "click",
          ".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete",
          function () {
            /* 删除中的遮罩层 */
            let deleteLoading = pops.loading({
              parent: document.querySelector(
                ".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul"
              ),
              content: {
                text: "搜索中...",
              },
              only: true,
            });
            let clickNode = $(this);
            let dataJSON = clickNode.attr("data-json");
            this.closest("li")?.remove();
            that.deleteNetDiskHistoryMatchData(dataJSON);
            deleteLoading?.close();
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
          localOrder.indexOf("记录时间") !== -1 ? "addTime" : "updateTime"; /* 排序字段 */
        data.sort(
          Utils.sortListByProperty((item) => {
            return item[orderField];
          }, isDesc)
        );
        return data;
      },
      /**
       * 存储匹配到的链接
       * @param {string} netDiskName
       * @param {string} shareCode
       * @param {string} accessCode
       * @returns
       */
      setNetDiskHistoryMatchData(netDiskName, shareCode, accessCode) {
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
            shareCode.startsWith(item.shareCode)
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
       * @param {string} dataJSONText
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
            return null;
          }
          NetDiskUI.isHandling = true;
          var retStatus = false;
          $.each(mutations, (index, item) => {
            if (
              item?.target?.className?.match(/whitesevPop|netdisk-url-box/gi)
            ) {
              retStatus = true;
              return null;
            }
          });
          if (retStatus) {
            /* 排除弹窗内部元素 */
            return null;
          }
          let clipboardText = "";
          if (GM_getValue("readClipboard", false)) {
            clipboardText = await NetDisk.getClipboardText();
          }
          NetDisk.matchPageLink(clipboardText);
        },
        config: {
          /* 子节点的变动（新增、删除或者更改） */
          childList: true,
          /* 属性的变动 */
          attributes: true,
          /* 节点内容或节点文本的变动 */
          characterData: true,
          /* 是否将观察器应用于该节点的所有后代节点 */
          subtree: true,
        },
      });
      NetDisk.matchPageLink(); /* 自执行一次，因为有的页面上没触发mutationObserver */
    },
  };
  var GM_Menu = new Utils.GM_Menu(
    {
      showSetting: {
        text: "打开设置界面",
        enable: false,
        showText: (_text_, _enable_) => {
          return `⚙ ${_text_}`;
        },
        callback: () => {
          NetDiskUI.suspension.initPop();
          NetDiskUI.suspension.showSettingView();
        },
      },
      showNetDiskHistoryMatch: {
        text: "打开历史匹配记录",
        enable: false,
        showText: (_text_, _enable_) => {
          return `⚙ ${_text_}`;
        },
        callback: () => {
          NetDiskUI.netDiskHistoryMatch.show();
        },
      },
    },
    false,
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand
  );
  $(document).ready(function () {
    NetDiskUI.monitorDOMInsert();
  });
})();
