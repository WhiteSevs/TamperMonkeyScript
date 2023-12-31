// ==UserScript==
// @name         网盘链接识别
// @namespace    https://greasyfork.org/zh-CN/scripts/445489
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2023.12.30
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、坚果云、UC网盘、BT磁力，支持蓝奏云、天翼云(需登录)、123盘、奶牛、UC网盘(需登录)和坚果云(需登录)直链获取下载，页面动态监控加载的链接，可自定义规则来识别小众网盘/网赚网盘或其它自定义的链接。
// @author       WhiteSevs
// @match        *://*/*
// @run-at       document-end
// @license      GPL-3.0-only
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_addStyle
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        unsafeWindow
// @connect      *
// @connect      lanzoub.com
// @connect      lanzouc.com
// @connect      lanzoue.com
// @connect      lanzouf.com
// @connect      lanzoug.com
// @connect      lanzouh.com
// @connect      lanzoui.com
// @connect      lanzouj.com
// @connect      lanzouk.com
// @connect      lanzoul.com
// @connect      lanzoum.com
// @connect      lanzouo.com
// @connect      lanzoup.com
// @connect      lanzouq.com
// @connect      lanzous.com
// @connect      lanzout.com
// @connect      lanzouu.com
// @connect      lanzouv.com
// @connect      lanzouw.com
// @connect      lanzoux.com
// @connect      lanzouy.com
// @connect      lanosso.com
// @connect      189.cn
// @connect      123pan.com
// @connect      123pan.cn
// @connect      wenshushu.cn
// @connect      jianguoyun.com
// @connect      cowtransfer.com
// @connect      cowcs.com
// @exclude      /^http(s|):\/\/s1\.hdslb\.com\/.*$/
// @exclude      /^http(s|):\/\/www\.bilibili\.com\/video.*$/
// @exclude      /^http(s|):\/\/message\.bilibili\.com\/.*$/
// @exclude      /^http(s|):\/\/live\.bilibili\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.mail\.qq\.com\/.*$/
// @exclude      /^http(s|):\/\/.*video\.qq\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.vscode-cdn\.net\/.*$/
// @exclude      /^http(s|):\/\/.*vscode\.dev\/.*$/
// @require      https://update.greasyfork.org/scripts/462234/1284140/Message.js
// @require      https://update.greasyfork.org/scripts/456470/1289386/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93.js
// @require      https://update.greasyfork.org/scripts/465550/1270548/JS-%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6.js
// @require      https://update.greasyfork.org/scripts/456485/1302638/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1303409/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1301773/DOMUtils.js
// ==/UserScript==

(function () {
  /**
   * @type {import("../库/Qmsg")}
   */
  const Qmsg = window.Qmsg;
  /**
   * @type {import("../库/pops")}
   */
  const pops = window.pops;
  const AnyTouch = pops.config.Utils.AnyTouch();
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  /**
   * @type {import("../库/DOMUtils")}
   */
  const DOMUtils = window.DOMUtils.noConflict();
  const log = new utils.Log(GM_info);
  const httpx = new utils.Httpx(GM_xmlhttpRequest);
  let GM_Menu = new utils.GM_Menu({
    autoReload: false,
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
  });

  /**
   * 数据配置
   */
  const NetDiskData = {
    /* 蓝奏云默认主机域名 */
    lanzou_defaultHostName: "www.lanzout.com",
  };

  const NetDisk = {
    /**
     * 是否初始化
     * @type {boolean}
     */
    isInit: false,
    /**
     * 链接字典
     * @type {utils.Dictionary}
     */
    linkDict: null,
    /**
     * 是否正在匹配链接中
     */
    isMatching: false,
    /**
     * 匹配到的链接
     */
    matchLink: null,
    /**
     * 是否成功匹配到链接
     */
    hasMatchLink: false,
    /**
     * 剪贴板内容
     */
    clipboardText: "",
    /**
     * 是否允许匹配window.location.href
     */
    allowMatchLocationHref: false,
    /**
     * 当没有accessCode时，使用该正则去除不需要的字符串
     */
    noAccessCodeRegExp: /( |提取码:|{#accessCode#}|\?pwd=)/gi,
    regular: {
      baidu: [
        {
          /**
           * 百度网盘链接
           */
          link_innerText: `pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_baidu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_baidu", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          /**
           * 百度网盘链接
           */
          link_innerHTML: `pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_baidu", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_baidu", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          /**
           * 链接参数
           */
          shareCode: /pan\.baidu\.com\/s\/([0-9a-zA-Z-_]+)/gi,
          /**
           * 需要替换空的字符串，比如pan.baidu.com/s/替换为空
           */
          shareCodeNeedRemoveStr: /pan\.baidu\.com\/s\//gi,
          /**
           * 用来判断是否存在密码
           */
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          /**
           * 提取码（如果存在的话）
           */
          accessCode: /([0-9a-zA-Z]{4})/gi,
          /**
           * 用于显示的链接
           */
          uiLinkShow:
            "pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#} 提取码: {#accessCode#}",
          /**
           * 新标签页打开的链接
           */
          blank: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
          /**
           * 用于复制到剪贴板的链接
           */
          copyUrl:
            "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}\n密码：{#accessCode#}",
        },
      ],
      lanzou: [
        {
          link_innerText: `lanzou[a-z]{0,1}.com/(tp/|u/|)([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_lanzou", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_lanzou", 10)
          )}}[a-zA-Z0-9]{3,6}|)`,
          link_innerHTML: `lanzou[a-z]{0,1}.com/(tp/|u/|)([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_lanzou", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_lanzou", 15)
          )}}[a-zA-Z0-9]{3,6}|)`,
          shareCode:
            /lanzou[a-z]{0,1}.com\/(tp\/|u\/|)([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})/gi,
          /**
           * shareCode参数中不可能存在的链接，如果shareCode存在这些，那就拒绝匹配
           */
          shareCodeNotMatch: /^(ajax|file|undefined|1125)/gi,
          shareCodeNeedRemoveStr: /lanzou[a-z]{0,1}.com\/(tp\/|u\/|)/gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: `${GM_getValue(
            "lanzou-host-name",
            NetDiskData.lanzou_defaultHostName
          )}/{#shareCode#} 提取码: {#accessCode#}`,
          blank: `https://${GM_getValue(
            "lanzou-host-name",
            NetDiskData.lanzou_defaultHostName
          )}/{#shareCode#}`,
          copyUrl: `https://${GM_getValue(
            "lanzou-host-name",
            NetDiskData.lanzou_defaultHostName
          )}/{#shareCode#}\n密码：{#accessCode#}`,
        },
      ],
      tianyiyun: [
        {
          link_innerText: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_tianyiyun", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_tianyiyun", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_tianyiyun", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_tianyiyun", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode:
            /cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr:
            /cloud\.189\.cn\/t\/|cloud.189.cn\/web\/share\?code=/gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "cloud.189.cn/t/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://cloud.189.cn/t/{#shareCode#}",
          copyUrl: "https://cloud.189.cn/t/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      hecaiyun: [
        {
          link_innerText: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_hecaiyun", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_hecaiyun", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_hecaiyun", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_hecaiyun", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode: /caiyun\.139\.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /caiyun\.139\.com\/m\/i\?/gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "caiyun.139.com/m/i?{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://caiyun.139.com/m/i?{#shareCode#}",
          copyUrl:
            "https://caiyun.139.com/m/i?{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      aliyun: [
        {
          link_innerText: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_aliyun", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_aliyun", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_aliyun", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_aliyun", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode: /aliyundrive\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
          shareCodeNotMatch: /undefined/gi,
          shareCodeNeedRemoveStr: /aliyundrive\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          acceesCodeNotMatch: /^(font)/gi,
          uiLinkShow: "aliyundrive.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.aliyundrive.com/s/{#shareCode#}",
          copyUrl:
            "https://www.aliyundrive.com/s/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_aliyun", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_aliyun", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_aliyun", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_aliyun", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode: /alipan\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
          shareCodeNotMatch: /undefined/gi,
          shareCodeNeedRemoveStr: /alipan\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          acceesCodeNotMatch: /^(font)/gi,
          uiLinkShow: "alipan.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.alipan.com/s/{#shareCode#}",
          copyUrl:
            "https://www.alipan.com/s/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      wenshushu: [
        {
          link_innerText: `(wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_wenshushu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_wenshushu", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `(wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_wenshushu", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_wenshushu", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode:
            /wenshushu.cn\/f\/([a-zA-Z0-9_-]{8,14})|wenshushu.cn\/k\/([a-zA-Z0-9_-]{8,14})/gi,
          shareCodeNeedRemoveStr: /wenshushu.cn\/f\/|wenshushu.cn\/k\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /[0-9a-zA-Z]{4}/gi,
          uiLinkShow: "www.wenshushu.cn/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.wenshushu.cn/f/{#shareCode#}",
          copyUrl:
            "https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|ws59.cn/f/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_wenshushu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_wenshushu", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|ws59.cn/f/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_wenshushu", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_wenshushu", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode:
            /wss.ink\/f\/([a-zA-Z0-9_-]{8,14})|ws28.cn\/f\/([a-zA-Z0-9_-]{8,14})|wss1.cn\/f\/([a-zA-Z0-9_-]{8,14})|ws59.cn\/f\/([a-zA-Z0-9_-]{8,14})/gi,
          shareCodeNeedRemoveStr:
            /wss.ink\/f\/|ws28.cn\/f\/|wss1.cn\/f\/|ws59.cn\/f\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /[0-9a-zA-Z]{4}/gi,
          uiLinkShow: "www.wenshushu.cn/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.wenshushu.cn/f/{#shareCode#}",
          copyUrl:
            "https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      nainiu: [
        {
          link_innerText: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_nainiu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_nainiu", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_nainiu", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_nainiu", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /cowtransfer\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "cowtransfer.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://cowtransfer.com/s/{#shareCode#}",
          copyUrl:
            "https://cowtransfer.com/s/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      _123pan: [
        {
          link_innerText: `123pan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__123pan", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text__123pan", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `123pan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML__123pan", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html__123pan", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode: /123pan.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /123pan.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://123pan.com/s/{#shareCode#}",
          copyUrl: "https://123pan.com/s/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      weiyun: [
        {
          link_innerText: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_weiyun", 20)
          )}}(访问码|密码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_weiyun", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_weiyun", 100)
          )}}(访问码|密码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_weiyun", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /weiyun.com\/([0-9a-zA-Z\-_]{7,24})/gi,
          shareCodeNotMatch:
            /^(ajax|file|download|ptqrshow|xy-privacy|comp|web)/gi,
          shareCodeNeedRemoveStr: /weiyun.com\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://share.weiyun.com/{#shareCode#}",
          copyUrl:
            "https://share.weiyun.com/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      xunlei: [
        {
          link_innerText: `xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_xunlei", 20)
          )}}(\\?pwd=|访问码|提取码|密码|)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_xunlei", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `xunlei.com\/s\/[0-9a-zA-Z\-_]{8,30}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_xunlei", 100)
          )}}(\\?pwd=|访问码|提取码|密码|)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_xunlei", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode: /xunlei.com\/s\/([0-9a-zA-Z\-_]{8,30})/gi,
          shareCodeNeedRemoveStr: /xunlei.com\/s\//gi,
          checkAccessCode: /(\?pwd=|提取码|密码|访问码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow:
            "pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#} 提取码: {#accessCode#}",
          blank: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
          copyUrl: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
        },
      ],
      _115pan: [
        {
          link_innerText: `115.com/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__115pan", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text__115pan", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `115.com\/s\/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML__115pan", 100)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html__115pan", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode: /115.com\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
          shareCodeNeedRemoveStr: /115.com\/s\//gi,
          checkAccessCode: /(提取码|密码|\?password=|访问码)[\s\S]+/gi,
          accessCode: /(\?password=|)([0-9a-zA-Z]{4})/i,
          uiLinkShow: "115.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://115.com/s/{#shareCode#}",
          copyUrl: "https://115.com/s/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      chengtong: [
        {
          link_innerText: `(ctfile.com|ghpym.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `(ctfile.com|ghpym.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            100
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /(ctfile.com|ghpym.com)\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(ctfile.com|ghpym.com)\/d\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://url95.ctfile.com/d/{#shareCode#}",
          copyUrl:
            "https://url95.ctfile.com/d/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `pan.jc-box.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `pan.jc-box.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            100
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /pan.jc-box.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /pan.jc-box.com\/d\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "pan.jc-box.com/d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://pan.jc-box.com/d/{#shareCode#}",
          copyUrl:
            "http://pan.jc-box.com/d/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `download.jamcz.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `download.jamcz.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            100
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /download.jamcz.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /download.jamcz.com\/d\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow:
            "download.jamcz.com/d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://download.jamcz.com/d/{#shareCode#}",
          copyUrl:
            "http://download.jamcz.com/d/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `(2k.us/file/|u062.com/file/|545c.com/file/|t00y.com/file/)[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `(2k.us/file/|u062.com/file/|545c.com/file/|t00y.com/file/)[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML__chengtong", 100)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode:
            /(2k.us\/file\/|u062.com\/file\/|545c.com\/file\/|t00y.com\/file\/)([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr:
            /2k.us\/file\/|u062.com\/file\/|545c.com\/file\/|t00y.com\/file\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://u062.com/file/{#shareCode#}",
          copyUrl: "https://u062.com/file/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `ctfile.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `ctfile.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            100
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /ctfile.com\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /ctfile.com\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://url95.ctfile.com/f/{#shareCode#}",
          copyUrl:
            "https://url95.ctfile.com/f/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `(pan.jc-box.com|545c.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `(pan.jc-box.com|545c.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            100
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /(pan.jc-box.com|545c.com)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(pan.jc-box.com|545c.com)\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "pan.jc-box.com/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://pan.jc-box.com/f/{#shareCode#}",
          copyUrl:
            "http://pan.jc-box.com/f/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `down.jc-box.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `down.jc-box.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            100
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /down.jc-box.com\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /down.jc-box.com\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "down.jc-box.com/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://down.jc-box.com/f/{#shareCode#}",
          copyUrl:
            "http://down.jc-box.com/f/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `download.cx05.cc/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `download.cx05.cc/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            100
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{4,6}|)`,
          shareCode: /download.cx05.cc\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /download.cx05.cc\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "download.cx05.cc/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://download.cx05.cc/f/{#shareCode#}",
          copyUrl:
            "http://download.cx05.cc/f/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          link_innerText: `(089u|474b).com/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText__chengtong", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_chengtong", 10)
          )}}[0-9a-zA-Z]{4,6}|)`,
          link_innerHTML: `(089u|474b).com/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${GM_getValue(
            "innerHTML__chengtong",
            100
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_chengtong", 15)
          )}}[0-9a-zA-Z]{6}|)`,
          shareCode: /(089u|474b).com\/dir\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(089u|474b).com\/dir\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{6})/gi,
          uiLinkShow: "089u.com/dir/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://089u.com/dir/{#shareCode#}",
          copyUrl: "https://089u.com/dir/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      kuake: [
        {
          link_innerText: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_kuake", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_kuake", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_kuake", 100)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_kuake", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode: /quark.cn\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
          shareCodeNeedRemoveStr: /quark.cn\/s\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "quark.cn/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://pan.quark.cn/s/{#shareCode#}",
          copyUrl: "https://pan.quark.cn/s/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      magnet: [
        {
          link_innerText: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
          link_innerHTML: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
          shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi,
          shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}",
          blank: "magnet:?xt=urn:btih:{#shareCode#}",
          copyUrl: "magnet:?xt=urn:btih:{#shareCode#}",
        },
      ],
      jianguoyun: [
        {
          link_innerText: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_jianguoyun", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_jianguoyun", 10)
          )}}[0-9a-zA-Z]+|)`,
          link_innerHTML: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_jianguoyun", 100)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_jianguoyun", 15)
          )}}[0-9a-zA-Z]+|)`,
          shareCode: /jianguoyun.com\/p\/([0-9a-zA-Z\-_]{16,24})/gi,
          shareCodeNeedRemoveStr: /jianguoyun.com\/p\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          uiLinkShow: "jianguoyun.com/p/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.jianguoyun.com/p/{#shareCode#}",
          copyUrl:
            "https://www.jianguoyun.com/p/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      onedrive: [
        {
          name: "10101619",
          link_innerText: `10101619-my.sharepoint.com/.*/personal/chendexian_10101619_onmicrosoft_com/[0-9a-zA-Z-_]+([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_onedrive", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_onedrive", 10)
          )}}[0-9a-zA-Z]+|)`,
          link_innerHTML: `10101619-my.sharepoint.com/.*/personal/chendexian_10101619_onmicrosoft_com/[0-9a-zA-Z-_]+([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_onedrive", 100)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_onedrive", 15)
          )}}[0-9a-zA-Z]+|)`,
          shareCode:
            /10101619-my.sharepoint.com\/.*\/personal\/chendexian_10101619_onmicrosoft_com\/([0-9a-zA-Z\-_]+)/gi,
          shareCodeNeedRemoveStr:
            /10101619-my.sharepoint.com\/.*\/personal\/chendexian_10101619_onmicrosoft_com\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          uiLinkShow:
            "10101619-my.sharepoint.com/:u:/g/personal/chendexian_10101619_onmicrosoft_com/{#shareCode#} 提取码: {#accessCode#}",
          blank:
            "https://10101619-my.sharepoint.com/:u:/g/personal/chendexian_10101619_onmicrosoft_com/{#shareCode#}",
          copyUrl:
            "https://10101619-my.sharepoint.com/:u:/g/personal/chendexian_10101619_onmicrosoft_com/{#shareCode#}\n密码：{#accessCode#}",
        },
        {
          name: "hurstheads",
          link_innerText: `hurstheads-my.sharepoint.com/.*/personal/storage_01_hurstheads_onmicrosoft_com/[0-9a-zA-Z-_]+([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_onedrive", 20)
          )}}(访问码|密码|提取码|\\?password=|\\?e=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_onedrive", 10)
          )}}[0-9a-zA-Z]+|)`,
          link_innerHTML: `hurstheads-my.sharepoint.com/.*/personal/storage_01_hurstheads_onmicrosoft_com/[0-9a-zA-Z-_]+([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_onedrive", 100)
          )}}(访问码|密码|提取码|\\?password=|\\?e=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_onedrive", 15)
          )}}[0-9a-zA-Z]+|)`,
          shareCode:
            /hurstheads-my.sharepoint.com\/.*\/personal\/storage_01_hurstheads_onmicrosoft_com\/([0-9a-zA-Z\-_]+)/gi,
          shareCodeNeedRemoveStr:
            /hurstheads-my.sharepoint.com\/.*\/personal\/storage_01_hurstheads_onmicrosoft_com\//gi,
          checkAccessCode: /(提取码|密码|访问码|\?e=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          uiLinkShow:
            "hurstheads-my.sharepoint.com/:u:/g/personal/storage_01_hurstheads_onmicrosoft_com/{#shareCode#} 提取码: {#accessCode#}",
          blank:
            "https://hurstheads-my.sharepoint.com/:u:/g/personal/storage_01_hurstheads_onmicrosoft_com/{#shareCode#}?e={#accessCode#}",
          copyUrl:
            "https://hurstheads-my.sharepoint.com/:u:/g/personal/storage_01_hurstheads_onmicrosoft_com/{#shareCode#}?e={#accessCode#}\n密码：{#accessCode#}",
        },
      ],
      uc: [
        {
          link_innerText: `drive.uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_uc", 20)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_uc", 10)
          )}}[0-9a-zA-Z]+|)`,
          link_innerHTML: `drive.uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_uc", 100)
          )}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_uc", 15)
          )}}[0-9a-zA-Z]+|)`,
          shareCode: /drive.uc.cn\/s\/([0-9a-zA-Z]{8,24})/gi,
          shareCodeNeedRemoveStr: /drive.uc.cn\/s\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          uiLinkShow: "drive.uc.cn/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://drive.uc.cn/s/{#shareCode#}",
          copyUrl: "https://drive.uc.cn/s/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
    },
    /**
     * 初始化字典
     */
    initLinkDict() {
      NetDisk.linkDict = new utils.Dictionary();
      Object.keys(NetDisk.regular).forEach((keys) => {
        NetDisk.linkDict.set(keys, new utils.Dictionary());
      });
    },
    /**
     * 删除某些需要忽略的text或html，如：设置、直链弹窗
     * @param {string} text - 需要进行处理的字符串
     * @param {boolean} isHTML - 是否是html属性
     * @returns {string}
     */
    ignoreStrRemove(text, isHTML = false) {
      let ignoreNodeList = [
        document.querySelector(".whitesevPopOneFile") /* 单文件直链弹窗 */,
        document.querySelector(".whitesevPopMoreFile") /* 多文件直链弹窗 */,
        document.querySelector(
          ".whitesevPop-whitesevPopSetting"
        ) /* 设置页面弹窗 */,
        document.querySelector(
          ".whitesevPopNetDiskHistoryMatch"
        ) /* 历史存储记录弹窗 */,
        document.querySelector(
          ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table"
        ) /* 历史存储记录弹窗 */,
        /* 自定义规则弹窗 */
        document.querySelector(
          ".whitesevPopNetDiskAccessCodeRule .netdiskrecord-table"
        ),
        /* 添加/修改自定义规则弹窗 */
        document.querySelector(".whitesevPopNetDiskAccessCodeRuleAddOrEdit"),
      ];
      ignoreNodeList.forEach((ignoreElement) => {
        if (ignoreElement == null) {
          return;
        }
        let innerItemText = isHTML
          ? ignoreElement.innerHTML
          : ignoreElement.innerText;
        innerItemText = innerItemText == null ? "" : innerItemText;
        text = text.replaceAll(innerItemText, "");
      });
      return text;
    },
    /**
     * 对页面进行match，处理匹配网盘链接
     */
    matchPageLink() {
      if (!this.isInit) {
        this.matchLink = new Set();
        this.initLinkDict();
        this.isInit = true;
      }
      /* 选择的进行匹配的项 all、innerText、innerHTML */
      let matchTextRange = GM_getValue("pageMatchRange", "all");
      /* 对innerText 和 innerHTML进行match */
      if (matchTextRange.toLowerCase() === "all") {
        let pageText = this.ignoreStrRemove(document.documentElement.innerText);
        let pageHTML = this.ignoreStrRemove(
          document.documentElement.innerHTML,
          true
        );
        Object.keys(this.regular).forEach((netDiskName) => {
          let item = this.regular[netDiskName];
          item.forEach((netDiskListItem, index) => {
            NetDiskWorker.postMessage({
              regexp: new RegExp(netDiskListItem["link_innerText"], "gi"),
              pageText: pageText,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
            NetDiskWorker.postMessage({
              regexp: new RegExp(netDiskListItem["link_innerHTML"], "gi"),
              pageText: pageHTML,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
            if (NetDisk.clipboardText.trim() !== "") {
              NetDiskWorker.postMessage({
                regexp: new RegExp(netDiskListItem["link_innerText"], "gi"),
                pageText: NetDisk.clipboardText,
                netDiskName: netDiskName,
                netDiskIndex: index,
              });
              NetDiskWorker.postMessage({
                regexp: new RegExp(netDiskListItem["link_innerHTML"], "gi"),
                pageText: NetDisk.clipboardText,
                netDiskName: netDiskName,
                netDiskIndex: index,
              });
            }
            if (NetDisk.allowMatchLocationHref) {
              NetDiskWorker.postMessage({
                regexp: new RegExp(netDiskListItem["link_innerText"], "gi"),
                pageText: window.location.href,
                netDiskName: netDiskName,
                netDiskIndex: index,
              });
              NetDiskWorker.postMessage({
                regexp: new RegExp(netDiskListItem["link_innerHTML"], "gi"),
                pageText: decodeURIComponent(window.location.href),
                netDiskName: netDiskName,
                netDiskIndex: index,
              });
            }
          });
        });
      } else {
        let pageText = "";
        if (matchTextRange.toLowerCase() === "innertext") {
          /* 对innerText进行match */
          pageText = this.ignoreStrRemove(document.documentElement.innerText);
        } else {
          /* 对innerHTML进行match */
          pageText = this.ignoreStrRemove(
            document.documentElement.innerHTML,
            true
          );
        }
        Object.keys(this.regular).forEach((netDiskName) => {
          let item = this.regular[netDiskName];
          item.forEach((netDiskListItem, index) => {
            NetDiskWorker.postMessage({
              regexp: new RegExp(
                netDiskListItem[`link_${matchTextRange}`],
                "gi"
              ),
              pageText: pageText,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
            if (NetDisk.clipboardText.trim() !== "") {
              NetDiskWorker.postMessage({
                regexp: new RegExp(
                  netDiskListItem[`link_${matchTextRange}`],
                  "gi"
                ),
                pageText: NetDisk.clipboardText,
                netDiskName: netDiskName,
                netDiskIndex: index,
              });
            }
            if (NetDisk.allowMatchLocationHref) {
              NetDiskWorker.postMessage({
                regexp: new RegExp(
                  netDiskListItem[`link_${matchTextRange}`],
                  "gi"
                ),
                pageText: window.location.href,
                netDiskName: netDiskName,
                netDiskIndex: index,
              });
              NetDiskWorker.postMessage({
                regexp: new RegExp(
                  netDiskListItem[`link_${matchTextRange}`],
                  "gi"
                ),
                pageText: decodeURIComponent(window.location.href),
                netDiskName: netDiskName,
                netDiskIndex: index,
              });
            }
          });
        });
      }
    },
    /**
     * 处理链接，将匹配到的链接转为参数和密码存入字典中
     * @param {string} netDiskName 网盘名称
     * @param {number} netDiskIndex 网盘名称的索引下标
     * @param {string} url
     */
    handleLink(netDiskName, netDiskIndex, url) {
      /* 当前字典 */
      let currentDict = this.linkDict.get(netDiskName);
      let shareCode = this.handleShareCode(netDiskName, netDiskIndex, url);
      if (utils.isNull(shareCode)) {
        return;
      }
      let accessCode = this.handleAccessCode(netDiskName, netDiskIndex, url);
      accessCode = this.handleAccessCodeByUserRule(netDiskName, accessCode);
      if (currentDict.has(shareCode)) {
        /* 根据shareCode获取accessCode和netDiskIndex信息 */
        let shareCodeDict = this.linkDict.get(netDiskName).get(shareCode);
        if (
          utils.isNull(shareCodeDict.accessCode) &&
          !utils.isNull(accessCode)
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
        NetDiskUI.isMatchedNetDiskIconMap.add(netDiskName);
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
     * @param {string} netDiskName 网盘名称
     * @param {number} netDiskIndex 网盘名称索引下标
     * @param {string} url 链接
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
        log.error([[...arguments], netDiskMatchRegular.shareCode]);
        return "";
      }
      let shareCode = shareCodeMatch[0];
      if (netDiskMatchRegular.shareCodeNeedRemoveStr) {
        /* 删除ShareCode前面不需要的字符串 */
        shareCode = shareCode.replace(
          netDiskMatchRegular.shareCodeNeedRemoveStr,
          ""
        );
      }
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
     * @param {string} netDiskName 网盘名称
     * @param {number} netDiskIndex 网盘名称索引下标
     * @param {string} url 链接
     * @returns {string} "xxxx" || ""
     */
    handleAccessCode(netDiskName, netDiskIndex, url) {
      /* 当前执行正则匹配的规则 */
      let netDiskMatchRegular = this.regular[netDiskName][netDiskIndex];
      let accessCode = "";
      if (!netDiskMatchRegular.checkAccessCode) {
        /* 不存在匹配提取码的正则 */
        return "";
      }
      let accessCodeMatch = url.match(netDiskMatchRegular.checkAccessCode);
      if (accessCodeMatch) {
        accessCode = accessCodeMatch[accessCodeMatch.length - 1].match(
          netDiskMatchRegular.accessCode
        );
        if (utils.isNull(accessCode)) {
          return "";
        }
        /* 过滤掉match内的undefined或null的值 */
        accessCode = accessCode.filter((item) => item != null);
        accessCode = accessCode[0];
        if (accessCode.startsWith("http")) {
          /* 排除不可能的accessCode */
          accessCode = "";
        }
      }
      return accessCode;
    },
    /**
     * 对accessCode二次处理，使用自定义的访问码规则
     * @param {string} netDiskName 网盘名称
     * @param {string} accessCode
     * @returns {string}
     */
    handleAccessCodeByUserRule(netDiskName, accessCode) {
      let regularList = NetDiskUI.accessCodeRule.getValue();
      let result = accessCode;
      let currentUrl = window.location.href;
      /* 先遍历本地的自定义的访问码规则 */
      for (
        let regularIndex = 0;
        regularIndex < regularList.length;
        regularIndex++
      ) {
        let rule = regularList[regularIndex];
        let urlRegexp = new RegExp(rule.urlRegexp, "i");
        /* 如果网址匹配成功则进行下一步 */
        if (!currentUrl.match(urlRegexp)) {
          continue;
        }
        /* 循环遍历自定义的访问码规则的网盘信息 */
        for (let index = 0; index < rule.netdisk.length; index++) {
          let netDiskRegular = rule.netdisk[index];
          /* 自定义规则的value(也就是网盘的字母名)和参数netDiskName相同，则直接返回设定的值 */
          if (netDiskRegular.value === netDiskName) {
            log.success(`使用自定义规则中的提取码 ${netDiskName} ${result}`);
            return rule.accessCode;
          }
        }
      }
      /* 不存在 */
      return result;
    },
    /**
     * 获取在弹窗中显示出的链接
     * @param {string} netDiskName 网盘名称，指NetDisk.regular的内部键名
     * @param {number} netDiskIndex 网盘名称索引下标
     * @param {string} shareCode
     * @param {string} accessCode
     * @returns {string}
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
        uiLink = uiLink.replace(NetDisk.noAccessCodeRegExp, "");
      }
      return uiLink;
    },
    /**
     * 获取剪贴板文本
     * @returns {Promise<string>}
     */
    async getClipboardText() {
      return new Promise((resolve) => {
        function clipboardRead() {
          navigator.permissions
            .query({
              name: "clipboard-read",
            })
            .then((result) => {
              function getText() {
                let clipboard = navigator.clipboard.readText();
                clipboard
                  .then((clipText) => {
                    resolve(clipText);
                  })
                  .catch((error) => {
                    log.error(["读取剪贴板内容失败", error]);
                    resolve("");
                  });
              }
              getText();
            })
            .catch((error) => {
              log.error(["读取剪贴板内容失败👉", error]);
              resolve("");
            });
        }
        if (document.hasFocus()) {
          clipboardRead();
        } else {
          window.addEventListener(
            "focus",
            () => {
              clipboardRead();
            },
            { once: true }
          );
        }
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
        /**
         * 所在规则的下标
         */
        this.netDiskIndex = 0;
        /**
         * 分享码
         */
        this.shareCode = "";
        /**
         * 提取码
         */
        this.accessCode = "";
        /**
         * 入口
         * @param {number} netDiskIndex 网盘名称索引下标
         * @param {string} shareCode
         * @param {string} accessCode
         * @returns
         */
        this.default = function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          let url = GM_getValue("baidu-baiduwp-php-url");
          let postForm = GM_getValue("baidu-baiduwp-php-post-form");
          let enableCopy = GM_getValue("baidu-baiduwp-php-copy-url");
          if (!url) {
            Qmsg.error("请先在设置中配置百度网盘-网址");
            return null;
          }
          if (!postForm) {
            Qmsg.error("请先在设置中配置百度网盘-表单参数");
            return null;
          }
          postForm = postForm.replaceAll("{#shareCode#}", shareCode);
          postForm = postForm.replaceAll("{#accessCode#}", accessCode);
          let formElement = document.createElement("form");
          /* POST的表单数据 */
          let formData = {};
          let urlParams = new URLSearchParams(postForm);
          /* 解析网址 */
          formElement.action = url;
          formElement.method = "post";
          formElement.style.display = "none";
          formElement.target = "_blank";
          for (let [key, value] of urlParams) {
            let textAreaElement = document.createElement("textarea");
            textAreaElement.name = key;
            textAreaElement.value = value;
            formElement.appendChild(textAreaElement);
            formData[key] = value;
          }
          log.info(["表单数据", formData]);
          document.body.appendChild(formElement);
          log.info(["访问网址", url]);
          if (enableCopy) {
            NetDiskParse.copyText(
              "baidu",
              netDiskIndex,
              shareCode,
              accessCode,
              "1.5秒后跳转至解析站"
            );
            setTimeout(() => {
              formElement.submit();
            }, 1500);
          } else {
            formElement.submit();
          }
        };
        return this;
      },
      /**
       * 蓝奏云
       * 流程：判断是否是多文件
       * 单文件 => 请求https://蓝奏云域名/{shareToken} 判断链接类型和是否能正常获取
       *        => 请求https://蓝奏云域名/ajaxm.php 获取下载参数，下载参数例如：https://蓝奏云文件域名/file/?xxxxxxxxx
       * 多文件 => 先请求https://蓝奏云域名/{shareToken} 获取文件sign => 请求https://蓝奏云域名/filemoreajax.php 获取json格式的文件参数，
       * 参数内容如{"info":"success","text":[{"duan":"xx","icon":"","id":"".....},{},{}]}
       * @constructor
       * @returns {object}
       */
      lanzou: function () {
        let that = this;
        /**
         * 所在规则的下标
         */
        this.netDiskIndex = 0;
        /**
         * 分享码
         */
        this.shareCode = "";
        /**
         * 提取码
         */
        this.accessCode = "";
        /* 蓝奏云域名 */
        let LanZouHostName = GM_getValue(
          "lanzou-host-name",
          NetDiskData.lanzou_defaultHostName
        );
        this.handleUrl = {
          default(pathName = "") {
            if (pathName.startsWith("/")) {
              pathName = pathName.replace(/^\//, "");
            }
            return `https://${LanZouHostName}/${pathName}`;
          },
          tp(pathName = "") {
            if (pathName.startsWith("/")) {
              pathName = pathName.replace(/^\//, "");
            }
            return `https://${LanZouHostName}/tp/${pathName}`;
          },
        };
        this.regexp = {
          unicode: {
            /**
             * 判断该链接是否是中文
             */
            match: /[%\u4e00-\u9fa5]+/g,
            tip: "中文链接",
            isUnicode: false,
          },
          /**
           * 蓝奏文件取消分享
           */
          noFile: {
            match: /div>来晚啦...文件取消分享了<\/div>/g,
            tip: "来晚啦...文件取消分享了",
          },
          /**
           * 蓝奏文件链接错误
           */
          noExists: {
            match: /div>文件不存在，或已删除<\/div>/g,
            tip: "文件不存在，或已删除",
          },
          /**
           * 2023-9-19 蓝奏云修改分享规则，需要vip用户才可以分享 apk、ipa 链接
           */
          needVipToShare: {
            match: /class="fbox">非会员.+请先开通会员/gi,
            tip: "该链接为非会员用户分享的文件，目前无法下载",
          },
          /**
           * 蓝奏多文件
           */
          moreFile: {
            match: /<span id=\"filemore\" onclick=\"more\(\);\">/g,
          },
          /**
           * 蓝奏设置了密码的单文件请求需要的sign值
           */
          sign: {
            match:
              /var[\s]*(posign|postsign|vidksek|skdklds)[\s]*=[\s]*'(.+?)';/,
          },
          /**
           * 蓝奏文件名
           */
          fileName: {
            match: /<title>(.*)<\/title>/,
          },
          /**
           * 蓝奏文件大小
           */
          fileSize: {
            match: /<span class=\"mtt\">\((.*)\)<\/span>/,
          },
          /**
           * 蓝奏文件直链host
           */
          loadDownHost: {
            match: /var[\s]*(vkjxld)[\s]*=[\s]*'(.+?)'/i,
          },
          /**
           * 蓝奏文件直链
           */
          loadDown: {
            match:
              /var[\s]*(loaddown|oreferr|spototo|domianload|hyggid)[\s]*=[\s]*'(.+?)'/i,
          },
          /**
           * 蓝奏云之苹果使用类型的文件
           */
          appleDown: {
            match: /var[\s]*appitem[\s]*=[\s]*'(.+?)'/i,
          },
          /**
           * 蓝奏云文件上传时间
           */
          uploadTime: {
            match: /mt2\"\>时间:<\/span>(.+?)[\s]*<span/i,
          },
        };
        /**
         * 入口
         * @param {number} netDiskIndex
         * @param {string} shareCode
         * @param {string} accessCode
         */
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          that.regexp.unicode.isUnicode = Boolean(
            that.shareCode.match(that.regexp.unicode.match)
          );
          await that.getFileLink();
        };
        /**
         * 获取文件链接
         * @param {boolean} getShareCodeByPageAgain
         * @returns
         */
        this.getFileLink = async function (getShareCodeByPageAgain = false) {
          let url = that.handleUrl.default(that.shareCode);
          log.info("蓝奏云-获取文件下载链接" + url);
          let getResp = await httpx.get({
            url: url,
            headers: {
              Accept: "*/*",
              "User-Agent": utils.getRandomPCUA(),
              Referer: that.handleUrl.default(that.shareCode),
            },
            onerror() {},
          });
          if (!getResp.status) {
            log.error(getResp);
            if (getResp.type === "ontimeout") {
              return;
            }
            if (
              getResp.data.responseText.includes(
                "div>文件不存在，或者已被删除</div>"
              )
            ) {
              Qmsg.error("文件不存在，或者已被删除");
            } else {
              Qmsg.error("请求异常");
            }
            return;
          }
          let respData = getResp.data;
          if (respData.readyState !== 4) {
            log.error(respData);
            Qmsg.error("请求失败，请重试");
            return;
          }
          if (respData.responseText == null) {
            log.error(respData);
            Qmsg.error("获取网页内容为空");
            return;
          }
          if (!that.checkPageCode(respData)) {
            return;
          }
          if (that.isMoreFile(respData)) {
            await that.getMoreFile();
          } else {
            log.info(respData);
            let pageText = respData.responseText;
            if (getShareCodeByPageAgain) {
              let shareCodeNewMatch = pageText.match(
                /var[\s]*link[\s]*=[\s]*\'tp\/(.+?)\';/i
              );
              that.shareCode = shareCodeNewMatch[shareCodeNewMatch.length - 1];
              log.info(`新参数 => ${that.shareCode}`);
            }
            let pageDOM = DOMUtils.parseHTML(pageText, true, true);
            let pageIframeElement =
              pageDOM.querySelector('iframe[class^="ifr"]') ||
              pageDOM.querySelector('iframe[class^="n_downlink"]');
            if (pageIframeElement) {
              let iframeUrl = pageIframeElement.getAttribute("src");
              log.error([
                "该链接需要重新通过iframe地址访问获取信息",
                iframeUrl,
              ]);
              Qmsg.info("正在请求下载信息");
              let fileName =
                pageDOM.querySelector("body div.d > div")?.innerText ||
                pageDOM
                  .querySelector("title")
                  ?.textContent?.replace(/ - 蓝奏云$/i, "");
              let fileSize =
                pageText.match(/文件大小：<\/span>(.+?)<br>/i) ||
                pageText.match(/class="n_filesize">大小：(.+?)<\/div>/i);
              let fileUploadTime = pageText.match(
                /上传时间：<\/span>(.+?)<br>/i
              );
              if (fileSize) {
                fileSize = fileSize[fileSize.length - 1];
              } else {
                log.error("解析文件大小信息失败");
              }
              if (fileUploadTime) {
                fileUploadTime = fileUploadTime[fileUploadTime.length - 1];
              } else {
                log.error("解析文件上传时间信息失败");
              }
              await that.getLinkByIframe(iframeUrl, {
                fileName,
                fileSize,
                fileUploadTime,
              });
            } else {
              await that.getLink(respData);
            }
          }
        };
        /**
         * 页面检查，看看是否存在文件失效情况
         * @param {object} response
         * @returns {boolean}
         * + true 未失效
         * + false 已失效
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
          if (pageText.match(that.regexp.needVipToShare.match)) {
            Qmsg.error(that.regexp.needVipToShare.tip);
            return false;
          }
          return true;
        };
        /**
         * 判断是否是多文件的链接
         * @param {object} response
         * @returns {boolean}
         * + true 多文件
         * + false 单文件
         */
        this.isMoreFile = function (response) {
          let pageText = response.responseText;
          if (pageText.match(that.regexp.moreFile.match)) {
            log.info("该链接为多文件");
            return true;
          } else {
            log.info("该链接为单文件");
            return false;
          }
        };
        /**
         * 获取链接
         * @param {object} response
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
          let fileName = pageText.match(that.regexp.fileName.match);
          let fileSize =
            pageText.match(that.regexp.fileSize.match) ||
            pageText.match(/<div class="n_filesize">大小：(.+?)<\/div>/i);
          let fileUploadTime =
            pageText.match(that.regexp.uploadTime.match) ||
            pageText.match(/<span class="n_file_infos">(.+?)<\/span>/i);
          if (fileName) {
            fileName = fileName[fileName.length - 1].trim();
          } else {
            fileName = "";
          }
          if (fileSize) {
            fileSize = fileSize[fileSize.length - 1].trim();
          } else {
            fileSize = "";
          }
          if (fileUploadTime) {
            fileUploadTime = fileUploadTime[fileUploadTime.length - 1].trim();
          } else {
            fileUploadTime;
          }
          if (sign) {
            postData_sign = sign[sign.length - 1];
            log.info(`获取Sign: ${postData_sign}`);
            if (utils.isNotNull(that.accessCode)) {
              log.info("传入参数=>有密码");
              postData_p = that.accessCode;
            } else {
              log.info("传入参数=>无密码");
            }
            let postResp = await httpx.post({
              url: that.handleUrl.default("ajaxm.php"),
              responseType: "json",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
                "User-Agent": utils.getRandomAndroidUA(),
                Referer: that.handleUrl.default(that.shareCode),
              },
              data: `action=downprocess&sign=${postData_sign}&p=${postData_p}`,
            });
            if (!postResp.status) {
              return;
            }
            let respData = postResp.data;
            log.info(respData);
            if (respData.readyState === 4) {
              let json_data = utils.toJSON(respData.responseText);
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
                  utils.getRandomAndroidUA()
                );
                log.info(downloadUrl);

                downloadUrl = NetDiskFilterScheme.handleUrl(
                  "lanzou-static-scheme-enable",
                  "lanzou-static-scheme-forward",
                  downloadUrl
                );
                NetDiskUI.staticView.oneFile({
                  title: "蓝奏云单文件直链",
                  fileName: fileName,
                  fileSize: fileSize,
                  downloadUrl: downloadUrl,
                  fileUploadTime: fileUploadTime,
                });
              }
            } else {
              Qmsg.error("请求失败，请重试");
            }
          } else {
            let loadDownHost = pageText.match(that.regexp.loadDownHost.match);
            let loadDown = pageText.match(that.regexp.loadDown.match);
            let appleDown = pageText.match(that.regexp.appleDown.match);
            if (utils.isNull(loadDown)) {
              loadDown = pageText.match(/var[\s]*(cppat)[\s]*=[\s]*'(.+?)'/i);
            }
            if (utils.isNull(loadDownHost) && appleDown) {
              appleDown = appleDown[appleDown.length - 1];
              loadDownHost = [appleDown];
              loadDown = [""];
              log.success(["多文件-当前链接猜测为苹果的文件", appleDown]);
            }
            if (utils.isNull(loadDownHost)) {
              Qmsg.error("蓝奏云直链：获取sign的域名失败，请反馈开发者", {
                timeout: 3500,
              });
              return;
            }
            if (utils.isNull(loadDown)) {
              Qmsg.error("蓝奏云直链：获取sign失败，请反馈开发者", {
                timeout: 3500,
              });
              return;
            }
            let downloadUrl = `${loadDownHost[loadDownHost.length - 1]}${
              loadDown[loadDown.length - 1]
            }`;
            log.info([fileName, fileSize, downloadUrl]);
            downloadUrl = await NetDiskParse.getRedirectFinalUrl(
              downloadUrl,
              utils.getRandomAndroidUA()
            );
            log.info(downloadUrl);

            downloadUrl = NetDiskFilterScheme.handleUrl(
              "lanzou-static-scheme-enable",
              "lanzou-static-scheme-forward",
              downloadUrl
            );
            NetDiskUI.staticView.oneFile({
              title: "蓝奏云单文件直链",
              fileName: fileName,
              fileSize: fileSize,
              downloadUrl: downloadUrl,
              fileUploadTime: fileUploadTime,
            });
          }
        };

        /**
         * 通过iframe的链接来获取单文件直链
         * @param {string} urlPathName url路径
         * @param {{
         * fileName:string,
         * fileSize:string,
         * fileUploadTime:string
         * }} fileInfo 文件信息
         */
        this.getLinkByIframe = async function (urlPathName, fileInfo) {
          log.info([urlPathName, fileInfo]);
          let iFrameUrl = that.handleUrl.default(urlPathName);
          let getResp = await httpx.get({
            url: iFrameUrl,
            headers: {
              Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
              "User-Agent": utils.getRandomPCUA(),
              Referer: that.handleUrl.default(that.shareCode),
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info(respData);
          let pageText = respData.responseText;
          let aihidcms = pageText.match(/var[\s]*aihidcms[\s]*=[\s]*'(.*)';/i);
          let ciucjdsdc = pageText.match(
            /var[\s]*ciucjdsdc[\s]*=[\s]*'(.*)';/i
          );
          let ajaxdata = pageText.match(/var[\s]*ajaxdata[\s]*=[\s]*'(.+)';/i);
          let sign = pageText.match(/'sign':[\s]*'(.+)',/i);
          if (!aihidcms) {
            Qmsg.error("ajaxm.php请求参数 websignkey 获取失败");
            return;
          } else {
            aihidcms = aihidcms[aihidcms.length - 1];
          }
          if (!ciucjdsdc) {
            Qmsg.error("ajaxm.php请求参数 websign 获取失败");
            return;
          } else {
            ciucjdsdc = ciucjdsdc[ciucjdsdc.length - 1];
          }
          if (!ajaxdata) {
            Qmsg.error("ajaxm.php请求参数 signs 获取失败");
            return;
          } else {
            ajaxdata = ajaxdata[ajaxdata.length - 1];
          }
          if (!sign) {
            Qmsg.error("ajaxm.php请求参数 sign 获取失败");
            return;
          } else {
            sign = sign[sign.length - 1];
          }
          let postData = `action=downprocess&signs=${ajaxdata}&sign=${sign}&websign=${ciucjdsdc}&ves=1&websignkey=${aihidcms}`;
          log.success("ajaxm.php的请求参数-> " + postData);
          let postResp = await httpx.post({
            url: that.handleUrl.default("ajaxm.php"),
            headers: {
              Accept: "application/json, text/javascript, */*",
              "Content-Type": "application/x-www-form-urlencoded",
              Referer: that.handleUrl.default(that.shareCode),
              "User-Agent": utils.getRandomPCUA(),
            },
            data: postData,
          });
          if (!postResp.status) {
            return;
          }
          let postRespData = postResp.data;
          log.info(postRespData);
          let jsonData = utils.toJSON(postRespData.responseText);
          let downloadUrl = `${jsonData["dom"]}/file/${jsonData["url"]}`;
          let zt = jsonData["zt"];
          log.success(["直链", downloadUrl]);
          if ("密码不正确".indexOf(jsonData["inf"]) != -1) {
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
            fileInfo.fileName = utils.isNotNull(jsonData["inf"])
              ? jsonData["inf"]
              : fileInfo.fileName;
            downloadUrl = await NetDiskParse.getRedirectFinalUrl(
              downloadUrl,
              utils.getRandomAndroidUA()
            );
            log.info(downloadUrl);

            downloadUrl = NetDiskFilterScheme.handleUrl(
              "lanzou-static-scheme-enable",
              "lanzou-static-scheme-forward",
              downloadUrl
            );
            NetDiskUI.staticView.oneFile({
              title: "蓝奏云单文件直链",
              fileName: fileInfo.fileName,
              fileSize: fileInfo.fileSize,
              downloadUrl: downloadUrl,
              fileUploadTime: fileInfo.fileUploadTime,
            });
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
              "User-Agent": utils.getRandomAndroidUA(),
              Referer: that.handleUrl.default(that.shareCode),
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info(respData);
          if (respData.readyState !== 4) {
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
            url: that.handleUrl.default("filemoreajax.php"),
            responseType: "json",
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              "User-Agent": utils.getRandomAndroidUA(),
              Referer: that.handleUrl.default(that.shareCode),
            },
            data: postData,
          });
          if (!postResp.status) {
            return;
          }
          let postRespData = postResp.data;
          log.info(postRespData);
          let json_data = utils.toJSON(postRespData.responseText);
          let zt = json_data["zt"];
          let info = json_data["info"];
          if (zt === 4) {
            Qmsg.error(info);
          } else if (zt === 1) {
            let QmsgLoading = Qmsg.loading("获取文件夹成功，解析文件直链中...");
            /* 获取多文件的数组信息 */
            let folder = json_data["text"];
            /* 弹出内容 */
            let folderList = [];
            log.info(`本链接一共${folder.length}个文件`);
            for (let index = 0; index < folder.length; index++) {
              let folderInfo = folder[index];
              let fileShareCode = folderInfo["id"];
              let fileName = folderInfo["name_all"];
              let fileSize = folderInfo["size"];
              let fileType = folderInfo["icon"];
              let uploadTime = folderInfo["time"];
              folderList.push({
                fileName: fileName,
                fileSize: fileSize,
                fileType: fileType,
                createTime: uploadTime,
                latestTime: uploadTime,
                isFolder: false,
                index: 0,
                async clickEvent() {
                  let folderDownloadInfo = await that.parseMoreFile(
                    fileShareCode,
                    fileName,
                    fileSize,
                    uploadTime
                  );
                  /* 成功获取下载信息 */
                  if (folderDownloadInfo.success) {
                    return {
                      autoDownload: true,
                      url: folderDownloadInfo.downloadUrl,
                    };
                  } else {
                    Qmsg.error(folderDownloadInfo.downloadUrl);
                  }
                },
              });
            }
            QmsgLoading.close();
            NetDiskUI.staticView.moreFile("蓝奏云多文件直链", folderList);
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
         * @param {string} paramShareCode 解析多文件获取的shareCode
         * @param {string} fileName 文件名
         * @param {string} fileSize 文件大小
         * @param {string} fileUploadTime 文件上传时间
         * @async
         */
        this.parseMoreFile = async function (
          paramShareCode,
          fileName,
          fileSize,
          fileUploadTime
        ) {
          /* 根据获取到的json中多文件链接来获取单文件直链 */
          let resultInfo = {};
          let getResp = await httpx.get({
            url: that.handleUrl.tp(paramShareCode),
            headers: {
              Accept: "*/*",
              "User-Agent": utils.getRandomAndroidUA(),
              Referer: that.handleUrl.default(that.shareCode),
            },
          });
          let respData = getResp.data;
          if (getResp.status) {
            let pageText = respData.responseText;
            let loadDownHost = pageText.match(that.regexp.loadDownHost.match);
            let loadDown = pageText.match(that.regexp.loadDown.match);
            let appleDown = pageText.match(that.regexp.appleDown.match);
            if (utils.isNull(loadDown)) {
              loadDown = pageText.match(/var[\s]*(cppat)[\s]*=[\s]*'(.+?)'/i);
            }
            if (utils.isNull(loadDown) && appleDown) {
              appleDown = appleDown[appleDown.length - 1];
              loadDownHost = [appleDown];
              loadDown = [""];
              log.success(["多文件-当前链接猜测为苹果的文件", appleDown]);
            }
            let submit_url = "javascript:;";
            let downloadUrl = "";
            if (utils.isNotNull(loadDownHost) && utils.isNotNull(loadDown)) {
              let needRedirectDownloadUrl = `${
                loadDownHost[loadDownHost.length - 1]
              }${loadDown[loadDown.length - 1]}`;
              downloadUrl = await NetDiskParse.getRedirectFinalUrl(
                needRedirectDownloadUrl,
                utils.getRandomAndroidUA()
              );

              submit_url = NetDiskFilterScheme.handleUrl(
                "lanzou-static-scheme-enable",
                "lanzou-static-scheme-forward",
                downloadUrl
              );
              resultInfo["success"] = true;
              resultInfo["downloadUrl"] = submit_url;
            } else if (pageText.match("来晚啦...文件取消分享了</div>")) {
              resultInfo["success"] = false;
              fileSize = "来晚啦...文件取消分享了";
            } else if (utils.isNull(loadDownHost)) {
              log.error(pageText);
              resultInfo["success"] = false;
              fileSize = "获取sign的域名失败，请反馈开发者";
            } else if (utils.isNull(loadDown)) {
              log.error(pageText);
              resultInfo["success"] = false;
              fileSize = "获取sign失败，请反馈开发者";
            } else {
              resultInfo["success"] = false;
              fileSize = "解析直链失败";
            }
            resultInfo["fileName"] = fileName;
            resultInfo["fileSize"] = fileSize;
            resultInfo["fileUploadTime"] = fileUploadTime;
          } else {
            log.error(respData);
            resultInfo["success"] = false;
            resultInfo["fileName"] = fileName;
            resultInfo["fileSize"] = `解析失败，${getResp.msg}`;
          }
          return resultInfo;
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
        /**
         * 所在规则的下标
         */
        this.netDiskIndex = 0;
        /**
         * 分享码
         */
        this.shareCode = "";
        /**
         * 提取码
         */
        this.accessCode = "";
        let shareId = null;
        /* 猜测1是有密码，2是无密码 */
        let shareMode = 1;
        this.code = {
          ShareNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在。",
          ShareAuditNotPass: "抱歉，该内容审核不通过",
          FileNotFound: "抱歉，文件不存在",
          ShareExpiredError: "抱歉，您访问的页面地址有误，或者该页面不存在",
          ShareAuditWaiting: "抱歉，该链接处于审核中",
          ShareInfoNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在",
          FileTooLarge: "抱歉，文件太大，不支持下载",
          InvalidSessionKey:
            "天翼云PC端Cookie未生成，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC且在登录后要等待进入个人云空间后生成Cookie，不是手机端浏览的个人云空间，那样生成的Cookie无法使用)",
        };
        /**
         *
         * @param {number} netDiskIndex
         * @param {string} shareCode
         * @param {string} accessCode
         * @returns
         */
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;

          let shareInfoData = await that.getShareInfoByCodeV2(shareCode);
          if (!shareInfoData) {
            return;
          }

          log.info(["解析的JSON信息", shareInfoData]);
          if (
            shareInfoData["needAccessCode"] &&
            utils.isNull(that.accessCode)
          ) {
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
          if ("shareId" in shareInfoData) {
            shareId = shareInfoData["shareId"];
          } else {
            shareId = await that.getShareId(shareCode, accessCode);
          }
          if ("shareMode" in shareInfoData) {
            shareMode = shareInfoData["shareMode"];
          }
          if (shareId == null) {
            return;
          }
          if (shareInfoData.isFolder) {
            /* 多文件 */
            Qmsg.info("正在递归文件");
            let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
            let fileId = shareInfoData["fileId"];
            let folderInfo = await that.listShareDir(
              shareCode,
              accessCode,
              undefined,
              undefined,
              fileId,
              fileId,
              undefined,
              shareId,
              undefined,
              undefined,
              undefined,
              undefined
            );
            if (!folderInfo) {
              QmsgLoading.close();
              return;
            }
            let folderInfoList = that.getFolderInfo(
              shareCode,
              accessCode,
              folderInfo,
              0
            );
            QmsgLoading.close();
            log.info("递归完毕");
            NetDiskUI.staticView.moreFile("天翼云多文件直链", folderInfoList);
            return;
          } else {
            /* 单文件 */
            let downloadUrl = await that.getDownloadUrl(
              that.shareCode,
              that.accessCode,
              shareInfoData.fileId,
              shareId
            );
            if (downloadUrl) {
              downloadUrl = NetDiskFilterScheme.handleUrl(
                "tianyiyun-scheme-enable",
                "tianyiyun-scheme-forward",
                downloadUrl
              );
              NetDiskUI.staticView.oneFile({
                title: "天翼云单文件直链",
                fileName: shareInfoData.fileName,
                fileSize: utils.formatByteToSize(shareInfoData.fileSize),
                downloadUrl: downloadUrl,
                fileUploadTime: shareInfoData.fileCreateDate,
                fileLatestTime: shareInfoData.fileLastOpTime,
              });
            }
          }
        };
        /**
         * 获取当前登录用户的信息
         * @returns {Promise<?{
         * encryptAccount: string,
         * icon: string,
         * nickname: string,
         * res_code: string,
         * res_message: string,
         * sessionKey: string,
         * userAccount: string
         * }>}
         */
        this.getUserBriefInfo = async function (shareCode) {
          let getResp = await httpx.get(
            "https://cloud.189.cn/api/portal/v2/getUserBriefInfo.action",
            {
              headers: {
                Accept: "application/json;charset=UTF-8",
                Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
                "User-Agent": utils.getRandomPCUA(),
              },
              onerror() {},
            }
          );
          log.info(getResp);
          if (!getResp.status) {
            let errorResultJSON = utils.toJSON(getResp.data.responseText);
            if (errorResultJSON["res_code"] in that.code) {
              Qmsg.error(that.code[errorResultJSON["res_code"]]);
            } else {
              Qmsg.error("请求异常");
            }
            return;
          }
          let data = utils.toJSON(getResp.data.responseText);
          if (data["res_code"] === 0) {
            return data;
          }
        };
        /**
         * 获取分享信息
         * @param {string} shareCode
         * @returns
         */
        this.getShareInfoByCodeV2 = async function (shareCode) {
          let postResp = await httpx.post({
            url: "https://cloud.189.cn/api/open/share/getShareInfoByCodeV2.action",
            data: `shareCode=${shareCode}`,
            headers: {
              Accept: "application/json;charset=UTF-8",
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": utils.getRandomPCUA(),
              "Sign-Type": 1,
              Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
              Origin: "https://cloud.189.cn",
            },
            onerror() {},
          });
          if (!postResp.status) {
            let errorData = utils.toJSON(postResp.data.responseText);
            log.error(["获取下载参数失败的JSON信息", errorData]);
            if (errorData["res_code"] in that.code) {
              Qmsg.error(that.code[errorData["res_code"]]);
            } else {
              Qmsg.error(errorData["res_message"]);
            }
            return;
          }
          let postData = postResp.data;
          log.info(postData);
          let data = utils.toJSON(postData.responseText);
          if (data["res_code"] == 0) {
            return data;
          } else {
            if (that.code.hasOwnProperty(data["res_code"])) {
              Qmsg.error(that.code[data["res_code"]]);
            } else {
              Qmsg.error("获取FileId失败");
            }
          }
        };
        /**
         * 获取shareId
         * @returns {Promise<number|undefined>}
         */
        this.getShareId = async function (shareCode, accessCode) {
          let getResp = await httpx.get({
            url: `https://cloud.189.cn/api/open/share/checkAccessCode.action?shareCode=${shareCode}&accessCode=${accessCode}`,
            headers: {
              Accept: "application/json;charset=UTF-8",
              "Cache-Control": "no-cache",
              "User-Agent": utils.getRandomPCUA(),
              "Sign-Type": 1,
              Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
            },
            responseType: "json",
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info(respData);
          let data = utils.toJSON(respData.responseText);
          if (data["res_code"] === 0 && "shareId" in data) {
            return data["shareId"];
          } else {
            Qmsg.error("获取shareId失败");
            log.info(data);
          }
        };
        /**
         * 获取随机noCache
         * @returns {string}
         */
        this.getNoCacheValue = function () {
          let result = "";
          for (let index = 0; index < 17; index++) {
            result += utils.getRandomValue(1, 9);
          }
          return "0." + result;
        };
        /**
         * 获取下载链接
         * @param {string} shareCode
         * @param {string} accessCode
         * @param {number} fileId
         * @param {number} shareId
         * @returns {Promise}
         */
        this.getDownloadUrl = async function (
          shareCode,
          accessCode,
          fileId,
          shareId
        ) {
          let getResp = await httpx.get({
            url: `https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?fileId=${fileId}&dt=1&shareId=${shareId}`,
            headers: {
              Accept: "application/json;charset=UTF-8",
              "Cache-Control": "no-cache",
              "User-Agent": utils.getRandomPCUA(),
              Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
              "Sign-Type": 1,
            },
            responseType: "json",
            onerror() {},
          });
          log.info(getResp);
          if (!getResp.status) {
            let errorResultJSON = utils.toJSON(getResp.data.responseText);
            if (errorResultJSON["errorCode"] === "InvalidSessionKey") {
              that.gotoLogin(that.code["InvalidSessionKey"]);
            } else if (errorResultJSON["res_code"] in that.code) {
              Qmsg.error(that.code[errorResultJSON["res_code"]]);
            } else {
              Qmsg.error("请求异常");
            }
            return;
          }
          let respData = getResp.data;
          let data = utils.toJSON(respData.responseText);
          log.info(data);
          if (data["res_code"] === 0) {
            return data["fileDownloadUrl"];
          } else if (
            "InvalidSessionKey" === data["res_code"] ||
            "InvalidSessionKey" === data["errorCode"]
          ) {
            that.gotoLogin(that.code["InvalidSessionKey"]);
          } else if (that.code.hasOwnProperty(data["res_code"])) {
            Qmsg.error(that.code[data["res_code"]]);
          } else {
            Qmsg.error("请求失败");
            log.error(respData);
          }
        };

        /**
         * 天翼云登录弹窗
         * @param {string} text 弹窗的显示的内容
         */
        this.gotoLogin = function (text = "") {
          NetDiskPops.confirm(
            {
              title: {
                position: "center",
                text: "天翼云",
              },
              content: {
                text: text,
                html: false,
              },
              btn: {
                reverse: true,
                position: "end",
                ok: {
                  text: "前往",
                  enable: true,
                  callback() {
                    window.open(
                      "https://cloud.189.cn/api/portal/loginUrl.action?redirectURL=https://cloud.189.cn/web/main",
                      "_blank"
                    );
                  },
                },
              },
            },
            NetDiskUI.popsStyle.tianYiYunLoginTip
          );
        };
        /**
         * 解析文件夹信息
         */
        this.listShareDir = async function (
          shareCode,
          accessCode,
          pageNum = 1,
          pageSize = 60,
          fileId,
          shareDirFileId,
          isFolder = true,
          shareId,
          iconOption = 5,
          orderBy = "lastOpTime",
          descending = true
        ) {
          /* Sessionkey: Sessionkey */
          let getResp = await httpx.get(
            `https://cloud.189.cn/api/open/share/listShareDir.action?pageNum=${pageNum}&pageSize=${pageSize}&fileId=${fileId}&shareDirFileId=${shareDirFileId}&isFolder=${isFolder}&shareId=${shareId}&shareMode=${shareMode}&iconOption=${iconOption}&orderBy=${orderBy}&descending=${descending}&accessCode=${accessCode}`,
            {
              headers: {
                Accept: "application/json;charset=UTF-8",
                Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
                "Sign-Type": 1,
                "User-Agent": utils.getRandomPCUA(),
              },
              responseType: "json",
              onerror() {},
            }
          );
          if (!getResp.status) {
            let errorData = utils.toJSON(getResp.data.responseText);
            log.error(["解析文件夹信息失败", errorData]);
            if (errorData["res_code"] in that.code) {
              Qmsg.error(that.code[errorData["res_code"]]);
            } else if ("res_message" in errorData) {
              Qmsg.error(errorData["res_message"]);
            } else {
              Qmsg.error("解析文件夹信息失败");
            }
            return;
          }
          let getData = getResp.data;
          log.info(getData);
          let data = utils.toJSON(getData.responseText);
          if (data["res_code"] == 0) {
            return data["fileListAO"];
          } else {
            if (that.code.hasOwnProperty(data["res_code"])) {
              Qmsg.error(that.code[data["res_code"]]);
            } else {
              Qmsg.error("获取FileId失败");
            }
          }
        };
        /**
         * 获取直链弹窗的文件夹信息
         */
        this.getFolderInfo = function (
          shareCode,
          accessCode,
          dirInfo,
          index = 0
        ) {
          let folderInfoList = [];
          let tempFolderInfoList = [];
          let tempFolderFileInfoList = [];
          /* 文件夹 */
          dirInfo["folderList"].forEach((folderInfo) => {
            folderInfoList.push({
              fileName: folderInfo["name"],
              fileSize: 0,
              fileType: "",
              createTime: utils.formatToTimeStamp(folderInfo["createDate"]),
              latestTime: utils.formatToTimeStamp(folderInfo["lastOpTime"]),
              isFolder: true,
              index: index,
              async clickEvent() {
                let _folderInfo_ = await that.listShareDir(
                  shareCode,
                  accessCode,
                  1,
                  100,
                  folderInfo["id"],
                  folderInfo["id"],
                  undefined,
                  shareId,
                  undefined,
                  undefined,
                  undefined,
                  undefined
                );
                if (!_folderInfo_) {
                  return [];
                }
                return that.getFolderInfo(
                  shareCode,
                  accessCode,
                  _folderInfo_,
                  index + 1
                );
              },
            });
          });
          /* 文件 */
          dirInfo["fileList"].forEach((fileInfo) => {
            folderInfoList.push({
              fileName: fileInfo["name"],
              fileSize: fileInfo["size"],
              fileType: "",
              createTime: utils.formatToTimeStamp(fileInfo["createDate"]),
              latestTime: utils.formatToTimeStamp(fileInfo["lastOpTime"]),
              isFolder: false,
              index: index,
              async clickEvent() {
                let downloadUrl = await that.getDownloadUrl(
                  shareCode,
                  accessCode,
                  fileInfo["id"],
                  shareId
                );
                if (downloadUrl) {
                  downloadUrl = NetDiskFilterScheme.handleUrl(
                    "tianyiyun-scheme-enable",
                    "tianyiyun-scheme-forward",
                    downloadUrl
                  );
                  return {
                    autoDownload: true,
                    blank: true,
                    url: downloadUrl,
                  };
                }
              },
            });
          });
          tempFolderInfoList.sort((a, b) =>
            a["fileName"].localeCompare(b["fileName"])
          );
          tempFolderFileInfoList.sort((a, b) =>
            a["fileName"].localeCompare(b["fileName"])
          );
          folderInfoList = folderInfoList.concat(tempFolderInfoList);
          folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
          log.info(["getFolderInfo", folderInfoList]);
          return folderInfoList;
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
        /**
         * 所在规则的下标
         */
        this.netDiskIndex = 0;
        /**
         * 分享码
         */
        this.shareCode = "";
        /**
         * 提取码
         */
        this.accessCode = "";
        /**
         * 用于header头x-token
         * @type {string}
         */
        let token = null;
        this.code = {
          1004: "no token",
          1008: "您没有权限访问",
          1013: "糟糕，此任务已过期销毁，下次要记得续期",
          1066: "对方设置的下载 / 预览次数已用完",
          1088: "糟糕，您访问的页面不存在",
        };
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          Qmsg.info("正在请求直链中...");
          let token = await this.getWssToken();
          if (!token) {
            return;
          }
          let pidInfo = await this.getPid();
          if (!pidInfo) {
            return;
          }
          await this.getFileNList(pidInfo.bid, pidInfo.pid);
        };
        /**
         * 获取token
         * wss:xxxxxx
         * @returns {Promise<string>}
         */
        this.getWssToken = async function () {
          let postResp = await httpx.post({
            url: "https://www.wenshushu.cn/ap/login/anonymous",
            responseType: "json",
            dataType: "json",
            data: JSON.stringify({
              dev_info: "{}",
            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "User-Agent": utils.getRandomAndroidUA(),
              Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
            },
          });
          log.success(postResp);
          if (!postResp.status) {
            return;
          }
          let data = utils.toJSON(postResp.data.responseText);
          if (data["code"] === 0) {
            token = data["data"]["token"];
            return data["data"]["token"];
          } else if (data["code"] in that.code) {
            Qmsg.error(that.code[data["code"]]);
          } else {
            Qmsg.error("获取wss失败");
          }
        };
        /**
         * 获取pid
         * @returns {Promise<{bid:string,pid:string}> }
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
              Accept: "application/json, text/plain, */*",
              "User-Agent": utils.getRandomAndroidUA(),
              Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
              "x-token": token,
            },
          });
          log.success(postResp);
          if (!postResp.status) {
            return;
          }
          let respData = postResp.data;
          let data = utils.toJSON(respData.responseText);
          if (data["code"] === 0) {
            return {
              bid: data["data"]["boxid"],
              pid: data["data"]["ufileid"],
            };
          } else if (data["code"] in that.code) {
            Qmsg.error(that.code[data["code"]]);
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
              Accept: "application/json, text/plain, */*",
              "User-Agent": utils.getRandomAndroidUA(),
              Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
              "x-token": token,
            },
          });
          log.success(postResp);
          if (!postResp.status) {
            return;
          }
          let respData = postResp.data;
          let jsonData = utils.toJSON(respData.responseText);
          if (jsonData["code"] === 0) {
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
         * @param {object} data
         * @returns {Promise}
         */
        this.getDownloadUrl = async function (data) {
          let file_name = data.fname;
          let file_size = utils.formatByteToSize(data.size);
          let postResp = await httpx.post({
            url: "https://www.wenshushu.cn/ap/dl/sign",
            dataType: "json",
            responseType: "json",
            data: JSON.stringify({
              ufileid: data.fid,
              consumeCode: 0,
            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "User-Agent": utils.getRandomAndroidUA(),
              Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
              "x-token": token,
            },
          });
          if (!postResp.status) {
            return;
          }
          log.success(postResp);
          let respData = postResp.data;
          let jsonData = utils.toJSON(respData.responseText);
          if (jsonData["code"] == 0) {
            let downloadUrl = jsonData["data"]["url"];
            if (downloadUrl === "") {
              Qmsg.error("对方的分享流量不足");
            } else {
              downloadUrl = NetDiskFilterScheme.handleUrl(
                "wenshushu-static-scheme-enable",
                "wenshushu-static-scheme-forward",
                downloadUrl
              );
              /* 文叔叔没有上传时间信息(暂时是这样的) */
              NetDiskUI.staticView.oneFile({
                title: "文叔叔单文件直链",
                fileName: file_name,
                fileSize: file_size,
                downloadUrl: downloadUrl,
              });
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
        /**
         * 所在规则的下标
         */
        this.netDiskIndex = 0;
        /**
         * 分享码
         */
        this.shareCode = "";
        /**
         * 提取码
         */
        this.accessCode = "";
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
          that.Authorization = GM_getValue("_123pan_User_Authorization");
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
                fileSize = utils.formatByteToSize(fileInfo["Size"]);
              } else if (downloadInfo && downloadInfo["code"] === 401) {
                downloadUrl = "javascript:;";
                fileSize = "请登录后下载";
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
              fileSize = utils.formatByteToSize(fileInfo["Size"]);
            }
            let fileUploadTime = new Date(fileInfo["CreateAt"]).getTime();
            let fileLatestTime = new Date(fileInfo["UpdateAt"]).getTime();
            fileUploadTime = utils.formatTime(fileUploadTime);
            fileLatestTime = utils.formatTime(fileLatestTime);
            NetDiskUI.staticView.oneFile({
              title: "123盘单文件直链",
              fileName: fileInfo["FileName"],
              fileSize: fileSize,
              downloadUrl: downloadUrl,
              fileUploadTime: fileUploadTime,
              fileLatestTime: fileLatestTime,
            });
          } else {
            Qmsg.info("正在递归文件");
            let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
            let folderInfoList = that.getFolderInfo(infoLists, 0);
            QmsgLoading.close();
            log.info("递归完毕");
            NetDiskUI.staticView.moreFile("123盘多文件直链", folderInfoList);
          }
        };
        /**
         * 校验链接有效性
         * @returns {boolean}
         */
        this.checkLinkValidity = async function () {
          Qmsg.info("正在校验链接有效性");
          let url = `https://www.123pan.com/s/${that.shareCode}`;

          let getResp = await httpx.get({
            url: url,
            headers: {
              "User-Agent": utils.getRandomPCUA(),
              Referer: "https://www.123pan.com",
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
            let g_initialProps = utils.toJSON(
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
         * @param {number} parentFileId
         * @returns {Promise<?{
         * Category: number,
         * ContentType: string,
         * CreateAt: number,
         * DownloadUrl: string,
         * Etag: string,
         * FileId: number,
         * FileName: string,
         * ParentFileId: number,
         * PunishFlag: number,
         * S3KeyFlag: number,
         * Size: number,
         * Status: number,
         * StorageNode: string,
         * Type: 0|1,
         * UpdateAt: string,
         * }[]>}
         */
        this.getFiles = async function (parentFileId = 0) {
          let url = `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              Accept: "*/*",
              "User-Agent": utils.getRandomPCUA(),
              Referer: `https://www.123pan.com/s/${that.shareCode}`,
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          let json_data = utils.toJSON(respData.responseText);
          if (json_data["code"] === 0) {
            let infoList = json_data["data"]["InfoList"];
            return infoList;
          } else if (json_data["code"] === 5103) {
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
          } else if ("message" in json_data) {
            Qmsg.error(json_data["message"]);
          } else {
            Qmsg.error("123盘：未知的JSON格式");
          }
        };
        /**
         * 递归算法使用的请求
         * @param {string} parentFileId
         * @returns {Promise<?{
         * Category: number,
         * ContentType: string,
         * CreateAt: number,
         * DownloadUrl: string,
         * Etag: string,
         * FileId: number,
         * FileName: string,
         * ParentFileId: number,
         * PunishFlag: number,
         * S3KeyFlag: number,
         * Size: number,
         * Status: number,
         * StorageNode: string,
         * Type: 0|1,
         * UpdateAt: string,
         * }[]>}
         */
        this.getFilesByRec = async function (parentFileId) {
          let getResp = await httpx.get({
            url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`,
            headers: {
              Accept: "*/*",
              "User-Agent": utils.getRandomAndroidUA(),
              Referer: `https://www.123pan.com/s/${that.shareCode}`,
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info(respData);
          let jsonData = utils.toJSON(respData.responseText);
          if (jsonData["code"] == 0) {
            return jsonData["data"]["InfoList"];
          }
        };
        /**
         * 获取文件夹信息
         * @param {{
         * Category: number,
         * ContentType: string,
         * CreateAt: number,
         * DownloadUrl: string,
         * Etag: string,
         * FileId: number,
         * FileName: string,
         * ParentFileId: number,
         * PunishFlag: number,
         * S3KeyFlag: number,
         * Size: number,
         * Status: number,
         * StorageNode: string,
         * Type: 0|1,
         * UpdateAt: string,
         * }[]} infoList
         * @returns {Promise<{
         * fileName: string,
         * fileSize: string|number,
         * fileType: ?string,
         * createTime: ?string,
         * latestTime: ?string,
         * isFolder: boolean,
         * index: ?number,
         * clickCallBack: ?(event:Event,_config_: object)=>{}
         * }[]>}
         */
        this.getFolderInfo = function (infoList, index) {
          let folderInfoList = [];
          let tempFolderInfoList = [];
          let tempFolderFileInfoList = [];
          infoList.forEach((item) => {
            if (item.Type) {
              /* 文件夹 */
              tempFolderInfoList.push({
                fileName: item.FileName,
                fileSize: 0,
                fileType: "",
                createTime: new Date(item.CreateAt).getTime(),
                latestTime: new Date(item.UpdateAt).getTime(),
                isFolder: true,
                index: index,
                async clickEvent() {
                  let resultFileInfoList = await that.getFilesByRec(
                    item["FileId"]
                  );
                  if (resultFileInfoList) {
                    return that.getFolderInfo(resultFileInfoList, index + 1);
                  } else {
                    return [];
                  }
                },
              });
            } else {
              /* 文件 */
              tempFolderFileInfoList.push({
                fileName: item.FileName,
                fileSize: item.Size,
                fileType: "",
                createTime: new Date(item.CreateAt).getTime(),
                latestTime: new Date(item.UpdateAt).getTime(),
                isFolder: false,
                index: index,
                async clickEvent() {
                  if (item.Status == 104) {
                    Qmsg.error("文件已失效");
                  } else if (!Boolean(item.DownloadUrl)) {
                    let downloadInfo = await that.getFileDownloadInfo(
                      item["Etag"],
                      item["FileId"],
                      item["S3KeyFlag"],
                      that.shareCode,
                      item["Size"]
                    );
                    if (downloadInfo && downloadInfo["code"] === 0) {
                      return {
                        url: downloadInfo["data"]["DownloadURL"],
                        autoDownload: true,
                      };
                    } else if (downloadInfo && downloadInfo["code"] === 401) {
                      Qmsg.error("请登录后下载");
                    } else {
                      Qmsg.error("获取下载链接失败");
                    }
                  } else {
                    return {
                      url: NetDiskFilterScheme.handleUrl(
                        "_123pan-static-scheme-enable",
                        "_123pan-static-scheme-forward",
                        item.DownloadUrl
                      ),
                      autoDownload: true,
                    };
                  }
                },
              });
            }
          });
          tempFolderInfoList.sort((a, b) =>
            a["fileName"].localeCompare(b["fileName"])
          );
          tempFolderFileInfoList.sort((a, b) =>
            a["fileName"].localeCompare(b["fileName"])
          );
          folderInfoList = folderInfoList.concat(tempFolderInfoList);
          folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
          return folderInfoList;
        };
        /**
         * 获取单文件下载链接
         * 123云盘新增了下载验证
         * @param {string} Etag
         * @param {string} FileID
         * @param {string} S3keyFlag
         * @param {string} ShareKey
         * @param {string} Size
         * @returns
         */
        this.getFileDownloadInfo = async function (
          Etag,
          FileID,
          S3keyFlag,
          ShareKey,
          Size
        ) {
          let authK_V = that.getFileDownloadAuth();
          let headers = {
            "App-Version": "3",
            Platform: "web",
            "Content-Type": "application/json;charset=UTF-8",
            Host: "www.123pan.com",
            Accept: "*/*",
            "User-Agent": utils.getRandomPCUA(),
            Referer: "https://www.123pan.com/s/" + ShareKey,
            Origin: "https://www.123pan.com",
          };
          if (that.Authorization) {
            headers["Authorization"] = "Bearer " + that.Authorization;
          }
          log.success("获取下载链接加密参数：" + authK_V);
          let postResp = await httpx.post({
            url: `https://www.123pan.com/a/api/share/download/info?${authK_V[0]}=${authK_V[1]}`,
            data: JSON.stringify({
              Etag: Etag,
              FileID: FileID,
              S3keyFlag: S3keyFlag,
              ShareKey: ShareKey,
              Size: Size,
            }),
            responseType: "json",
            headers: headers,
          });
          if (!postResp.status) {
            return;
          }
          let postData = postResp.data;
          let jsonData = utils.toJSON(postData.responseText);
          log.info(jsonData);
          if (jsonData["code"] == 0) {
            jsonData["data"]["DownloadURL"] = await that.decodeDownloadUrl(
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
         * 获取单文件下载链接的加密参数
         * 感谢：https://github.com/qaiu/netdisk-fast-download/
         */
        this.getFileDownloadAuth = function () {
          function encry_time(param) {
            var param_time,
              param_other =
                arguments["length"] > 0x2 && void 0x0 !== arguments[0x2]
                  ? arguments[0x2]
                  : 0x8;
            if (0x0 === arguments["length"]) return null;
            "object" === typeof param
              ? (param_time = param)
              : (0xa === ("" + param)["length"] &&
                  (param = 0x3e8 * parseInt(param)),
                (param_time = new Date(param)));
            var param_timezoneoffset =
                param + 0xea60 * new Date(param)["getTimezoneOffset"](),
              param_time_n = param_timezoneoffset + 0x36ee80 * param_other;
            return (
              (param_time = new Date(param_time_n)),
              {
                y: param_time["getFullYear"](),
                m:
                  param_time["getMonth"]() + 0x1 < 0xa
                    ? "0" + (param_time["getMonth"]() + 0x1)
                    : param_time["getMonth"]() + 0x1,
                d:
                  param_time["getDate"]() < 0xa
                    ? "0" + param_time["getDate"]()
                    : param_time["getDate"](),
                h:
                  param_time["getHours"]() < 0xa
                    ? "0" + param_time["getHours"]()
                    : param_time["getHours"](),
                f:
                  param_time["getMinutes"]() < 0xa
                    ? "0" + param_time["getMinutes"]()
                    : param_time["getMinutes"](),
              }
            );
          }

          function encry_join(param) {
            for (
              var a =
                  arguments["length"] > 0x1 && void 0x0 !== arguments[0x1]
                    ? arguments[0x1]
                    : 0xa,
                funcRun = function () {
                  for (var b, c = [], d = 0x0; d < 0x100; d++) {
                    b = d;
                    for (var index = 0x0; index < 0x8; index++)
                      b = 0x1 & b ? 0xedb88320 ^ (b >>> 0x1) : b >>> 0x1;
                    c[d] = b;
                  }
                  return c;
                },
                _funcRun_ = funcRun(),
                _param = param,
                _param_1 = -0x1,
                _param_0 = 0x0;
              _param_0 < _param["length"];
              _param_0++
            )
              _param_1 =
                (_param_1 >>> 0x8) ^
                _funcRun_[0xff & (_param_1 ^ _param.charCodeAt(_param_0))];
            return (_param_1 = (-0x1 ^ _param_1) >>> 0x0), _param_1.toString(a);
          }

          function getSign(urlPath) {
            var param_web = "web";
            var param_type = 3;
            var param_time = Math.round(
              (new Date().getTime() +
                0x3c * new Date().getTimezoneOffset() * 0x3e8 +
                28800000) /
                0x3e8
            ).toString();
            var key = "a,d,e,f,g,h,l,m,y,i,j,n,o,p,k,q,r,s,t,u,b,c,v,w,s,z";
            var randomRoundNum = Math["round"](0x989680 * Math["random"]());

            var number_split;
            var time_a;
            var time_y;
            var time_m;
            var time_d;
            var time_h;
            var time_f;
            var time_array;
            var time_push;
            for (var number_item in ((number_split = key.split(",")),
            (time_a = encry_time(param_time)),
            (time_y = time_a["y"]),
            (time_m = time_a["m"]),
            (time_d = time_a["d"]),
            (time_h = time_a["h"]),
            (time_f = time_a["f"]),
            (time_array = [time_y, time_m, time_d, time_h, time_f].join("")),
            (time_push = []),
            time_array))
              time_push["push"](number_split[Number(time_array[number_item])]);
            var param_no;
            var param_join_s;
            return (
              (param_no = encry_join(time_push["join"](""))),
              (param_join_s = encry_join(
                ""
                  ["concat"](param_time, "|")
                  ["concat"](randomRoundNum, "|")
                  ["concat"](urlPath, "|")
                  ["concat"](param_web, "|")
                  ["concat"](param_type, "|")
                  ["concat"](param_no)
              )),
              [
                param_no,
                ""
                  ["concat"](param_time, "-")
                  ["concat"](randomRoundNum, "-")
                  ["concat"](param_join_s),
              ]
            );
          }
          return getSign("/a/api/share/download/info");
        };
        /**
         * 将直链的param参数解析成真正的直链
         * @param {string} url
         * @returns
         */
        this.decodeDownloadUrl = async function (url) {
          if (url === "") {
            return "";
          }
          let decodeURL = new URL(url);
          let params = decodeURL.search.replace(/^\?params=/gi, "");
          params = params.split("&")[0];
          try {
            let newDecodeUrl = decodeURI(atob(params));
            Qmsg.info("正在获取重定向直链");
            let getResp = await httpx.get({
              url: newDecodeUrl,
              responseType: "json",
              headers: {
                "User-Agent": utils.getRandomAndroidUA(),
                Referer: "https://www.123pan.com/s/" + that.shareCode,
                Origin: "https://www.123pan.com",
              },
              onerror: function () {},
            });
            log.info(getResp);
            if (!getResp.status && getResp.data.status !== 210) {
              /* 很奇怪，123盘返回的状态码是210 */
              return newDecodeUrl;
            }
            let respData = getResp.data;
            let resultJSON = utils.toJSON(respData.responseText);
            let newURL = new URL(resultJSON.data.redirect_url);
            newURL.searchParams.set("auto_redirect", 1);
            log.success(resultJSON);
            return newURL.toString();
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
       * @returns {object}
       */
      jianguoyun: function () {
        let that = this;
        /**
         * 所在规则的下标
         */
        this.netDiskIndex = 0;
        /**
         * 分享码
         */
        this.shareCode = "";
        /**
         * 提取码
         */
        this.accessCode = "";
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
            let Qmsg_loading = Qmsg.loading("正在遍历多文件信息...");
            let folderInfo = await that.getFolderInfo(downloadParams["hash"]);
            if (!folderInfo) {
              Qmsg_loading.close();
              return;
            }
            let newFolderInfoList = that.parseMoreFile(
              folderInfo,
              downloadParams["hash"],
              downloadParams["name"]
            );
            Qmsg_loading.close();

            /* 坚果云盘没有上传时间信息(暂时是这样的) */
            NetDiskUI.staticView.moreFile(
              "坚果云多文件直链",
              newFolderInfoList
            );
          } else {
            /* 是文件 */
            let fileSize = utils.formatByteToSize(downloadParams["size"]);
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
            NetDiskUI.staticView.oneFile({
              title: "坚果云盘单文件直链",
              fileName: downloadParams["name"],
              fileSize: fileSize,
              downloadUrl: downloadUrl,
            });
          }
        };
        /**
         * 解析多文件信息
         * @param {{
         * mtime: number,
         * relPath: string,
         * size: number,
         * tblUri: ?string,
         * type: "file"|string,
         * }[]} folderInfo
         * @param {string} hash 文件hash值
         * @param {string} fileName 文件名
         * @returns {{
         * fileName: string,
         * fileSize: string|number,
         * fileType: ?string,
         * createTime: ?string,
         * latestTime: ?string,
         * isFolder: boolean,
         * index: ?number,
         * clickCallBack: ?(event:Event,_config_: object)=>{}
         * }[]}
         */
        this.parseMoreFile = function (folderInfo, hash = "", fileName = "") {
          log.info(["解析多文件信息", folderInfo]);
          let folderInfoList = [];
          folderInfo.forEach((item) => {
            let fileName = item.relPath;
            if (fileName.startsWith("/")) {
              fileName = fileName.replace(/^\//, "");
            }
            folderInfoList.push({
              fileName: fileName,
              fileSize: item["size"],
              fileType: "",
              createTime: item.mtime,
              latestTime: item.mtime,
              isFolder: false,
              index: 0,
              async clickEvent() {
                Qmsg.info("正在获取下载链接...");
                let downloadUrl = await that.getDirLink(
                  hash,
                  fileName,
                  item["relPath"]
                );
                if (!downloadUrl) {
                  return;
                }
                Qmsg.success("获取成功！");
                downloadUrl = NetDiskFilterScheme.handleUrl(
                  "jianguoyun-static-scheme-enable",
                  "jianguoyun-static-scheme-forward",
                  downloadUrl
                );
                log.info(downloadUrl);
                return {
                  autoDownload: true,
                  url: downloadUrl,
                };
              },
            });
          });
          return folderInfoList;
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
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": utils.getRandomPCUA(),
              Referer: `https://www.jianguoyun.com/p/${that.shareCode}`,
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
         * @param {string} fileHash 文件hash值
         * @param {string} fileName 文件名
         * @returns {Promise}
         */
        this.getFileLink = async function (fileHash = "", fileName = "") {
          fileName = encodeURIComponent(fileName);
          let getResp = await httpx.get({
            url: `https://www.jianguoyun.com/d/ajax/fileops/pubFileLink?k=${fileHash}&name=${fileName}&wm=false${
              that.accessCode === "" ? "" : "&pd=" + that.accessCode
            }&forwin=1&_=${new Date().getTime()}`,
            responseType: "json",
            headers: {
              "User-Agent": utils.getRandomPCUA(),
            },
            onerror: function () {},
          });
          if (!getResp.status) {
            if (utils.isNotNull(getResp.data?.responseText)) {
              let errorData = utils.toJSON(getResp.data.responseText);
              log.error(["坚果云", errorData]);
              if (errorData["errorCode"] === "UnAuthorized") {
                that.gotoLogin();
              } else {
                Qmsg.error(errorData["detailMsg"]);
              }
            } else {
              Qmsg.error("请求异常");
            }
            return;
          }
          let respData = getResp.data;
          log.info(["请求信息", respData]);
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(["解析JSON", resultJSON]);
          if (resultJSON.hasOwnProperty("errorCode")) {
            Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
            return;
          } else if (resultJSON.hasOwnProperty("url")) {
            return resultJSON["url"];
          } else {
            Qmsg.error("坚果云: 处理下载链接异常");
          }
        };
        /**
         * 获取文件夹下的文件下载链接
         * @param {string} fileHash
         * @param {string} fileName
         * @param {string} filePath
         * @returns {Promise}
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
              "User-Agent": utils.getRandomPCUA(),
            },
            onerror: function () {},
          });
          if (!getResp.status) {
            if (utils.isNotNull(getResp.data?.responseText)) {
              let errorData = utils.toJSON(getResp.data.responseText);
              log.error(["坚果云", errorData]);
              if (errorData["errorCode"] === "UnAuthorized") {
                that.gotoLogin();
              } else {
                Qmsg.error(errorData["detailMsg"]);
              }
            } else {
              Qmsg.error("请求异常");
            }
            return;
          }
          let respData = getResp.data;
          log.info(["请求信息", respData]);
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(resultJSON);
          if (resultJSON.hasOwnProperty("errorCode")) {
            Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
            return;
          } else if (resultJSON.hasOwnProperty("url")) {
            return resultJSON["url"];
          } else {
            Qmsg.error("坚果云: 处理下载链接异常");
          }
        };
        /**
         * 获取文件夹信息
         * @param {string} hash
         * @returns
         */
        this.getFolderInfo = async function (hash = "") {
          let getResp = await httpx.get({
            url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRBrowse?hash=${hash}&relPath=%2F&_=${new Date().getTime()}`,
            responseType: "json",
            headers: {
              "User-Agent": utils.getRandomPCUA(),
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info(["请求信息", respData]);
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(resultJSON);
          if ("objects" in resultJSON) {
            return resultJSON["objects"];
          } else {
            Qmsg.error("坚果云: 处理多文件信息异常");
          }
        };
        /**
         * 前往登录
         */
        this.gotoLogin = function () {
          NetDiskPops.confirm(
            {
              title: {
                text: "提示",
                position: "center",
              },
              content: {
                text: `解析失败，原因：当前尚未登录坚果云，是否前往登录？`,
              },
              btn: {
                reverse: true,
                position: "end",
                ok: {
                  text: "前往",
                  callback: function (_event_) {
                    window.open(
                      "https://www.jianguoyun.com/d/login#from=https%3A%2F%2Fwww.jianguoyun.com%2F",
                      "_blank"
                    );
                  },
                },
              },
            },
            NetDiskUI.popsStyle.jianGuoYunLoginTip
          );
        };
        return this;
      },
      /**
       * 奶牛快传
       * 感谢：https://github.com/qaiu/netdisk-fast-download
       * @constructor
       * @returns {object}
       */
      nainiu: function () {
        let that = this;
        /**
         * 所在规则的下标
         */
        this.netDiskIndex = 0;
        /**
         * 分享码
         */
        this.shareCode = "";
        /**
         * 提取码
         */
        this.accessCode = "";
        const OK_CODE = "0000";
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          that.panelList = [];
          that.panelContent = "";
          let checkLinkValidityInfo = await that.checkLinkValidity(
            that.shareCode,
            that.accessCode
          );
          if (!checkLinkValidityInfo) {
            return;
          }
          if (checkLinkValidityInfo.isFolder) {
            /* 多文件 */
            Qmsg.info("正在递归文件");
            let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
            let firstFolderInfo = await that.getShareFolder(
              checkLinkValidityInfo["data"]["guid"]
            );
            if (!firstFolderInfo) {
              QmsgLoading.close();
              return;
            }
            let firstFileInfo = await that.getShareFiles(
              checkLinkValidityInfo["data"]["guid"]
            );
            if (!firstFileInfo) {
              QmsgLoading.close();
              return;
            }
            let folderInfoList = that.getFolderInfo(
              checkLinkValidityInfo["data"]["guid"],
              firstFolderInfo,
              firstFileInfo,
              0
            );
            QmsgLoading.close();
            log.info("递归完毕");
            NetDiskUI.staticView.moreFile("奶牛快传多文件直链", folderInfoList);
          } else {
            /* 单文件 */
            let downloadUrl = null;
            if (checkLinkValidityInfo["zipDownload"]) {
              downloadUrl = await that.getZipFileDownloadUrl(
                that.shareCode,
                checkLinkValidityInfo["guid"],
                checkLinkValidityInfo["fileName"]
              );
            } else {
              downloadUrl = await that.getDownloadUrl(
                that.shareCode,
                checkLinkValidityInfo["guid"],
                checkLinkValidityInfo["id"]
              );
            }
            if (!downloadUrl) {
              return;
            }
            downloadUrl = NetDiskFilterScheme.handleUrl(
              "nainiu-static-scheme-enable",
              "nainiu-static-scheme-forward",
              downloadUrl
            );
            NetDiskUI.staticView.oneFile({
              title: "奶牛快传单文件直链",
              fileName: checkLinkValidityInfo["fileName"],
              fileType: checkLinkValidityInfo["fileType"],
              fileSize: checkLinkValidityInfo["fileSize"],
              downloadUrl: downloadUrl,
              fileUploadTime: checkLinkValidityInfo["fileUploadTime"],
              fileLatestTime: checkLinkValidityInfo["fileLatestTime"],
              clickCallBack: (_fileDetails_) => {
                that.downloadFile(
                  checkLinkValidityInfo["fileName"],
                  downloadUrl
                );
              },
            });
          }
        };
        /**
         * 校验链接有效性并解析获取信息
         * @param {string} shareCode
         * @param {string} accessCode
         * @param {boolean|object}
         */
        this.checkLinkValidity = async function (shareCode, accessCode) {
          let resultJSON = await that.getShareByUniqueUrl(shareCode);
          if (!resultJSON) {
            return false;
          }
          let code = resultJSON["code"];
          let message = resultJSON["message"];
          if (code !== OK_CODE) {
            Qmsg.error(message);
            return false;
          } else {
            let needPassword = resultJSON["data"]["needPassword"];
            let zipDownload = resultJSON["data"]["zipDownload"];
            if (needPassword && utils.isNull(accessCode)) {
              Qmsg.error("密码缺失!");
              NetDiskUI.newAccessCodeView(
                "密码缺失",
                "nainiu",
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
              return false;
            } else if (zipDownload) {
              /* 压缩包下载 */
              Qmsg.success("该链接为zip单文件");
              return {
                zipDownload: zipDownload,
                guid: resultJSON["data"]["guid"],
                fileSize: utils.formatByteToSize(
                  resultJSON["data"]["firstFolder"]["size"]
                ),
                fileName: resultJSON["data"]["firstFolder"]["title"],
                fileUploadTime: utils.formatTime(
                  resultJSON["data"]["firstFolder"]["created_at"]
                ),
                fileLatestTime: utils.formatTime(
                  resultJSON["data"]["firstFolder"]["updated_at"]
                ),
              };
            } else if (resultJSON["data"]["firstFile"] == null) {
              /* 文件夹类型 */
              Qmsg.success("该链接为文件夹类型");
              return {
                isFolder: true,
                guid: resultJSON["data"]["guid"],
                firstFolder: resultJSON["data"]["firstFolder"],
                data: resultJSON["data"],
              };
            }
            return {
              zipDownload: zipDownload,
              guid: resultJSON["data"]["guid"],
              id: resultJSON["data"]["firstFile"]["id"],
              fileSize: utils.formatByteToSize(
                resultJSON["data"]["firstFile"]["file_info"]["size"]
              ),
              fileName: resultJSON["data"]["firstFile"]["file_info"]["title"],
              fileType: resultJSON["data"]["firstFile"]["file_info"]["format"],
              fileUploadTime: utils.formatTime(
                resultJSON["data"]["firstFile"]["created_at"]
              ),
              fileLatestTime: utils.formatTime(
                resultJSON["data"]["firstFile"]["updated_at"]
              ),
            };
          }
        };
        /**
         * 获取直链弹窗的文件夹信息
         * @returns
         */
        this.getFolderInfo = function (
          transferGuid,
          shareFolderInfoList,
          shareFileInfoList,
          index = 0
        ) {
          let folderInfoList = [];
          let tempFolderInfoList = [];
          let tempFolderFileInfoList = [];
          /* 文件夹 */
          shareFolderInfoList.forEach((folderInfo) => {
            folderInfoList.push({
              fileName: folderInfo["title"],
              fileSize: 0,
              fileType: "",
              createTime: folderInfo["created_at"],
              latestTime: folderInfo["updated_at"],
              isFolder: true,
              index: index,
              async clickEvent() {
                if (
                  !folderInfo["child_folder_count"] &&
                  !folderInfo["content_count"]
                ) {
                  /* 里面没有文件夹和文件 */
                  return [];
                }
                let childFolderInfo = await that.getShareFolder(
                  transferGuid,
                  folderInfo["id"]
                );
                if (!childFolderInfo) {
                  return [];
                }
                let childFileInfo = await that.getShareFiles(
                  transferGuid,
                  folderInfo["id"]
                );
                if (!childFileInfo) {
                  return [];
                }
                let folderInfoList = that.getFolderInfo(
                  transferGuid,
                  childFolderInfo,
                  childFileInfo,
                  index + 1
                );
                return folderInfoList;
              },
            });
          });
          /* 文件 */
          shareFileInfoList.forEach((fileInfo) => {
            let fileName = fileInfo["file_info"]["title"];
            let fileType = fileInfo["file_info"]["format"] ?? "";
            if (Boolean(fileType)) {
              fileName = fileName + "." + fileType;
            }
            folderInfoList.push({
              fileName: fileName,
              fileSize: fileInfo["file_info"]["size"],
              fileType: fileType,
              createTime: fileInfo["created_at"],
              latestTime: fileInfo["updated_at"],
              isFolder: false,
              index: index,
              async clickEvent() {
                let downloadUrl = await that.getDownloadUrl(
                  that.shareCode,
                  transferGuid,
                  fileInfo["id"]
                );
                if (!downloadUrl) {
                  return;
                }
                downloadUrl = NetDiskFilterScheme.handleUrl(
                  "nainiu-static-scheme-enable",
                  "nainiu-static-scheme-forward",
                  downloadUrl
                );
                that.downloadFile(fileName, downloadUrl);
              },
            });
          });
          tempFolderInfoList.sort((a, b) =>
            a["fileName"].localeCompare(b["fileName"])
          );
          tempFolderFileInfoList.sort((a, b) =>
            a["fileName"].localeCompare(b["fileName"])
          );
          folderInfoList = folderInfoList.concat(tempFolderInfoList);
          folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
          log.info(["getFolderInfo", folderInfoList]);
          return folderInfoList;
        };
        /**
         * 多文件解析
         * @param {string} shareCode
         * @param {string} accessCode
         */
        this.parseMoreFile = async function (shareCode, accessCode) {};
        /**
         * 获取文件夹信息
         * @param {string} transferGuid
         * @param {number} folderId
         * @param {number} page
         * @param {number} size
         * @returns {Promise<object|undefined[]>}
         */
        this.getShareFolder = async function (
          transferGuid,
          folderId = "",
          page = 0,
          size = 100
        ) {
          let getResp = await httpx.get(
            `https://cowtransfer.com/core/api/transfer/share/folders?transferGuid=${transferGuid}&folderId=${folderId}&page=${page}&size=${size}`,
            {
              headers: {
                Accept: "application/json",
                "User-Agent": utils.getRandomPCUA(),
                Referer: "https://cowtransfer.com/",
              },
            }
          );
          log.success(getResp);
          if (!getResp.status) {
            return;
          }
          let data = utils.toJSON(getResp.data.responseText);
          if (data.code !== OK_CODE) {
            Qmsg.error(data["message"]);
            return;
          }
          let folders = data["data"]["folders"];
          if (!Array.isArray(folders)) {
            Qmsg.error("data.folders不是数组");
            return;
          }
          return folders;
        };
        /**
         * 获取文件信息
         * @param {string} transferGuid
         * @param {number} folderId
         * @param {number} page
         * @param {number} size
         * @param {boolean} subContent
         * @returns {Promise<object|undefined[]>}
         */
        this.getShareFiles = async function (
          transferGuid,
          folderId = "",
          page = 0,
          size = 20,
          subContent = false
        ) {
          let getResp = await httpx.get(
            `https://cowtransfer.com/core/api/transfer/share/files?transferGuid=${transferGuid}&folderId=${folderId}&page=${page}&size=${size}&subContent=${subContent}`,
            {
              headers: {
                Accept: "application/json",
                "User-Agent": utils.getRandomPCUA(),
                Referer: "https://cowtransfer.com/",
              },
            }
          );
          log.success(getResp);
          if (!getResp.status) {
            return;
          }
          let data = utils.toJSON(getResp.data.responseText);
          if (data.code !== OK_CODE) {
            Qmsg.error(data["message"]);
            return;
          }
          let files = data["data"]["files"];
          if (!Array.isArray(files)) {
            Qmsg.error("data.files不是数组");
            return;
          }
          return files;
        };
        /**
         * 获取分享信息
         * @param {string} shareCode
         * @returns {undefined| {
         * code: string,
         * message: string,
         * data: {zipDownload: boolean,
         * guid:string,
         * fileSize: string,
         * fileName: string,
         * fileUploadTime: number,
         * fileLatestTime: number,
         * } | {
         * zipDownload: boolean,
         * guid:string,
         * id: string,
         * fileSize: string,
         * fileType: string,
         * fileName: string,
         * fileUploadTime: number,
         * fileLatestTime: number,
         * }[]}
         */
        this.getShareByUniqueUrl = async function (shareCode) {
          let url = `https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${shareCode}`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              "User-Agent": utils.getRandomPCUA(),
              Referer: "https://cowtransfer.com/s/" + shareCode,
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(["转换的JSON", resultJSON]);
          return resultJSON;
        };
        /**
         * 获取下载链接
         * @param {string} shareCode
         * @param {string} guid
         * @param {string} id
         * @returns {string|undefined}
         */
        this.getDownloadUrl = async function (shareCode, guid = "", id = "") {
          let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&fileId=${id}`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              "User-Agent": utils.getRandomPCUA(),
              Referer: "https://cowtransfer.com/s/" + shareCode,
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(["转换的JSON", resultJSON]);
          if (resultJSON["code"] === OK_CODE) {
            return resultJSON["data"]["downloadUrl"];
          } else {
            Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
            return;
          }
        };
        /**
         * 获取zip文件的下载链接
         * @param {string} shareCode
         * @param {string} guid
         * @param {string} title 标题
         * @returns {string|undefined}
         */
        this.getZipFileDownloadUrl = async function (
          shareCode,
          guid = "",
          title = ""
        ) {
          let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&title=${title}`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              "User-Agent": utils.getRandomPCUA(),
              Referer: "https://cowtransfer.com/s/" + shareCode,
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(["转换的JSON", resultJSON]);
          if (resultJSON["code"] === OK_CODE) {
            return resultJSON["data"]["downloadUrl"];
          } else {
            Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
            return;
          }
        };
        /**
         * 下载文件
         * @param {string} fileName 文件名
         * @param {string} fileDownloadUrl 下载地址
         */
        this.downloadFile = async function (fileName, fileDownloadUrl) {
          log.info(["下载文件：", fileName, fileDownloadUrl]);
          Qmsg.info(`调用【GM_download】下载：${fileName}`);
          if (typeof GM_download === "undefined") {
            Qmsg.error("当前脚本环境缺失API 【GM_download】");
            return;
          }
          let abortDownload = null;
          let downloadingQmsg = Qmsg.loading("下载中...", {
            showClose: true,
            onClose() {
              if (typeof abortDownload === "function") {
                abortDownload();
              }
            },
          });
          let GM_download_Result = GM_download({
            url: fileDownloadUrl,
            name: fileName,
            headers: {
              Referer: "https://cowtransfer.com/s/" + that.shareCode,
            },
            onload() {
              downloadingQmsg.close();
              Qmsg.success(`下载 ${fileName} 已完成`);
            },
            onprogress(details) {
              if (
                typeof details === "object" &&
                "loaded" in details &&
                "total" in details
              ) {
                let progressNum = details.loaded / details.total;
                let formatProgressNum = (progressNum * 100).toFixed(2);
                downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
              }
            },
            onerror(error) {
              downloadingQmsg.close();
              log.error(["下载失败error👉", error]);
              if (typeof error === "object" && error["error"]) {
                Qmsg.error(
                  `下载 ${fileName} 失败或已取消 原因：${error["error"]}`,
                  {
                    timeout: 6000,
                  }
                );
              } else {
                Qmsg.error(`下载 ${fileName} 失败或已取消`);
              }
            },
            ontimeout() {
              downloadingQmsg.close();
              Qmsg.error(`下载 ${fileName} 请求超时`);
            },
          });
          if (
            typeof GM_download_Result === "object" &&
            "abort" in GM_download_Result
          ) {
            abortDownload = GM_download_Result["abort"];
          }
        };
        return this;
      },
      /**
       * UC网盘
       * @constructor
       * @returns {object}
       */
      uc: function () {
        let that = this;
        /**
         * 所在规则的下标
         */
        this.netDiskIndex = 0;
        /**
         * 分享码
         */
        this.shareCode = "";
        /**
         * 提取码
         */
        this.accessCode = "";
        /**
         * 入口
         * @param {number} netDiskIndex 网盘名称索引下标
         * @param {string} shareCode
         * @param {string} accessCode
         * @returns
         */
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          Qmsg.info("检查是否已登录UC网盘");
          let loginStatus = await that.isLogin();
          if (!Boolean(loginStatus)) {
            that.gotoLogin(
              "检测到尚未登录UC网盘，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才有登录选项)"
            );
            return;
          }
          let stoken = await that.getStoken(that.shareCode, that.accessCode);
          if (!stoken) {
            return;
          }
          let detail = await that.getDetail(
            that.shareCode,
            that.accessCode,
            stoken
          );
          if (!detail) {
            Qmsg.error("UC网盘：获取detail失败");
            return;
          }
          if (
            detail.length === 1 &&
            detail[0].dir == false &&
            detail[0].file_type === 1
          ) {
            let oneFileDetail = detail[0];
            let oneFileDownloadDetail = await that.getDownload(
              that.shareCode,
              stoken,
              oneFileDetail.fid,
              oneFileDetail.share_fid_token
            );
            if (!oneFileDownloadDetail) {
              return;
            }
            if (!oneFileDownloadDetail[0].download_url) {
              Qmsg.error("获取download_url失败");
              return;
            }
            NetDiskUI.staticView.oneFile({
              title: "UC网盘单文件直链",
              fileName: oneFileDownloadDetail[0].file_name,
              fileSize: utils.formatByteToSize(oneFileDownloadDetail[0].size),
              downloadUrl: oneFileDownloadDetail[0].download_url,
              fileUploadTime: utils.formatTime(
                oneFileDownloadDetail[0].created_at
              ),
              fileLatestTime: utils.formatTime(
                oneFileDownloadDetail[0].last_update_at
              ),
              clickCallBack() {
                that.downloadFile(
                  oneFileDownloadDetail[0].file_name,
                  oneFileDownloadDetail[0].download_url
                );
              },
            });
          } else {
            Qmsg.info("正在递归文件");
            let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
            let folderInfoList = that.getFolderInfo(detail, stoken, 0);
            QmsgLoading.close();
            log.info("递归完毕");
            NetDiskUI.staticView.moreFile("UC网盘多文件直链", folderInfoList);
            return;
          }
        };
        /**
         * 判断是否已登录UC网盘
         * @returns {Promise<undefined|string|boolean>}
         */
        this.isLogin = async function () {
          let getResp = await httpx.get("https://drive.uc.cn/", {
            headers: {
              "User-Agent": utils.getRandomPCUA(),
            },
          });
          log.success(["判断是否已登录UC网盘", getResp]);
          if (!getResp.status) {
            return;
          }
          if (getResp.data.finalUrl === "https://drive.uc.cn/list") {
            return "已登录";
          } else {
            return false;
          }
        };
        /**
         * 下载文件
         * @param {string} fileName 文件名
         * @param {string} downloadUrl 下载链接
         * @return { {
         * abort: Function
         * } }
         */
        this.downloadFile = function (fileName, downloadUrl) {
          log.info([`调用【GM_download】下载：`, arguments]);
          Qmsg.info(`调用【GM_download】下载：${fileName}`);
          if (typeof GM_download === "undefined") {
            Qmsg.error("当前脚本环境缺失API 【GM_download】");
            return;
          }
          let downloadingQmsg = Qmsg.loading("下载中...");
          return GM_download({
            url: downloadUrl,
            name: fileName,
            headers: {
              Referer: "https://drive.uc.cn/",
            },
            onload() {
              downloadingQmsg.close();
              Qmsg.success(`下载 ${fileName} 已完成`);
            },
            onprogress(details) {
              if (
                typeof details === "object" &&
                "loaded" in details &&
                "total" in details
              ) {
                let progressNum = details.loaded / details.total;
                let formatProgressNum = (progressNum * 100).toFixed(2);
                downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
              }
            },
            onerror(error) {
              downloadingQmsg.close();
              log.error(["下载失败error👉", error]);
              if (typeof error === "object" && error["error"]) {
                Qmsg.error(
                  `下载 ${fileName} 失败或已取消 原因：${error["error"]}`,
                  {
                    timeout: 6000,
                  }
                );
              } else {
                Qmsg.error(`下载 ${fileName} 失败或已取消`);
              }
            },
            ontimeout() {
              downloadingQmsg.close();
              Qmsg.error(`下载 ${fileName} 请求超时`);
            },
          });
        };
        /**
         * 前往登录
         * @param {string} text 弹窗的显示的内容
         */
        this.gotoLogin = function (text = "") {
          NetDiskPops.confirm(
            {
              title: {
                position: "center",
                text: "UC网盘",
              },
              content: {
                text: text,
                html: false,
              },
              btn: {
                reverse: true,
                position: "end",
                ok: {
                  text: "前往",
                  enable: true,
                  callback() {
                    window.open("https://drive.uc.cn", "_blank");
                  },
                },
              },
            },
            NetDiskUI.popsStyle.tianYiYunLoginTip
          );
        };
        /**
         * 获取stoken
         * @param {string} pwd_id 分享码
         * @param {string} passcode 访问码
         * @returns {Promise<string|undefined>}
         */
        this.getStoken = async function (pwd_id, passcode) {
          let postResp = await httpx.post(
            "https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?entry=ft&fr=pc&pr=UCBrowser",
            {
              data: JSON.stringify({
                share_for_transfer: true,
                passcode: passcode,
                pwd_id: pwd_id,
              }),
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json;charset=UTF-8",
                "User-Agent": utils.getRandomPCUA(),
                Origin: "https://drive.uc.cn",
                Referer: "https://drive.uc.cn/",
              },
              onerror() {},
            }
          );
          if (!postResp.status) {
            let errorData = utils.toJSON(postResp.data.responseText);
            log.error(["获取stoken失败JSON信息", errorData]);
            if ("message" in errorData) {
              Qmsg.error(errorData["message"]);
            } else {
              Qmsg.error("请求异常，获取stoken失败");
            }
            return;
          }
          let data = utils.toJSON(postResp.data.responseText);
          log.info(["获取stoken：", data]);
          if (data["code"] !== 0) {
            log.error(["获取stoken失败", data]);
            Qmsg.error("获取stoken失败");
            return;
          }
          return data["data"]["stoken"];
        };

        /**
         * 获取stoken
         * @param {string} pwd_id 分享码
         * @param {string} passcode 访问码
         * @param {string} stoken 获取的stoken
         * @param {string} [pdir_fid=0] 父fid，默认为0，如果为文件夹，那么它的fid就是这个值
         * @param {number} [force=0]
         * @param {number} [_page=1]
         * @param {number} [_size=50]
         * @param {number} [_fetch_banner=0]
         * @param {number} [_fetch_share=0]
         * @param {number} [_fetch_total=1]
         * @returns {Promise<{
         * backup_sign: number,
         * backup_source: boolean,
         * ban: boolean,
         * category: number,
         * created_at: number,
         * creator_ucid_or_default: string,
         * cur_version_or_default: number,
         * dir: boolean,
         * duration: number,
         * event_extra: {
         *    recent_created_at: number
         * },
         * extra: string,
         * fid: string,
         * file: boolean,
         * file_name: string,
         * file_name_hl_end: number,
         * file_name_hl_start: number,
         * file_source: string,
         * file_struct: {
         *    fir_source: string,
         *    platform_source: string,
         *    sec_source: string,
         *    thi_source: string,
         *    upload_dm: string,
         *    upload_mi: string,
         * },
         * file_type: number,
         * format_type: string,
         * include_items:  number,
         * l_created_at:  number,
         * l_updated_at:  number,
         * last_update_at:  number,
         * like:  number,
         * name_space:  number,
         * offline_source: boolean,
         * operated_at:  number,
         * owner_drive_type_or_default:  number,
         * owner_ucid: string,
         * pdir_fid: string,
         * raw_name_space:  number,
         * risk_type:  number,
         * save_as_source: boolean,
         * share_fid_token: string,
         * size:  number,
         * status:  number,
         * tags: string,
         * updated_at:  number,
         * _extra: {},
         * }[]|undefined>}
         */
        this.getDetail = async function (
          pwd_id,
          passcode,
          stoken,
          pdir_fid = 0,
          force = 0,
          _page = 1,
          _size = 50,
          _fetch_banner = 0,
          _fetch_share = 0,
          _fetch_total = 1
        ) {
          let getResp = await httpx.get(
            `https://pc-api.uc.cn/1/clouddrive/transfer_share/detail?pr=UCBrowser&fr=h5&pwd_id=${pwd_id}&__t=${new Date().getTime()}&passcode=${passcode}&stoken=${encodeURIComponent(
              stoken
            )}&pdir_fid=${pdir_fid}&force=${force}&_page=${_page}&_size=${_size}&_fetch_banner=${_fetch_banner}&_fetch_share=${_fetch_share}&_fetch_total=${_fetch_total}&_sort=${encodeURIComponent(
              "file_type:asc,file_name:asc"
            )}`,
            {
              headers: {
                Accept: "application/json, text/plain, */*",
                "User-Agent": utils.getRandomPCUA(),
                Origin: "https://drive.uc.cn",
                Referer: "https://drive.uc.cn/",
              },
            }
          );
          if (!getResp.status) {
            return;
          }
          let data = utils.toJSON(getResp.data.responseText);
          log.info(["获取detail：", data]);
          if (data["code"] !== 0) {
            log.error(["获取detail失败", data]);
            Qmsg.error("获取detail失败");
            return;
          }
          return data["data"]["list"];
        };

        /**
         * 获取下载信息
         * @param {string} pwd_id 分享码
         * @param {string} stoken 获取的stoken
         * @param {string} fids 通过获取到的detail获取到的fid
         * @param {string} share_fid_token 通过获取到的detail获取到的share_fid_token
         * @returns {Promise< {
         * backup_sign: number,
         * backup_source: boolean,
         * ban: boolean,
         * big_thumbnail: string,
         * category: number,
         * created_at: number,
         * creator_ucid_or_default: string,
         * cur_version_or_default: number,
         * dir: boolean,
         * download_url: string,
         * duration: number,
         * event_extra: {
         *    recent_created_at: number
         * },
         * extra: string,
         * fid: string,
         * file: boolean,
         * file_name: string,
         * file_name_hl_end: number,
         * file_name_hl_start: number,
         * file_source: string,
         * file_type: number,
         * format_type: string,
         * l_created_at: number,
         * l_updated_at: number,
         * last_update_at: number,
         * like: number,
         * md5: string,
         * name_space: number,
         * obj_category: string,
         * offline_source: boolean,
         * operated_at: number,
         * owner_drive_type_or_default: number,
         * owner_ucid: string,
         * pdir_fid: string,
         * preview_url: string,
         * range_size: number,
         * raw_name_space: number,
         * risk_type: number,
         * save_as_source: boolean,
         * share_fid_token: string,
         * size: number,
         * status: number,
         * thumbnail: string,
         * updated_at: number,
         * video_height: number,
         * video_max_resolution: string,
         * video_width: number,
         * _extra: {},
         * } []|undefined>}
         */
        this.getDownload = async function (
          pwd_id,
          stoken,
          fid,
          share_fid_token
        ) {
          let postResp = await httpx.post(
            "https://pc-api.uc.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=UCBrowser",
            {
              data: JSON.stringify({
                fids: [fid],
                pwd_id: pwd_id,
                stoken: stoken,
                fids_token: [share_fid_token],
              }),
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json;charset=UTF-8",
                "User-Agent": utils.getRandomPCUA(),
                Origin: "https://drive.uc.cn",
                Referer: "https://drive.uc.cn/",
              },
            }
          );
          if (!postResp.status) {
            return;
          }
          let data = utils.toJSON(postResp.data.responseText);
          log.info(["获取download：", data]);
          if (data["code"] !== 0) {
            log.error(["获取download失败", data]);
            Qmsg.error("获取download失败");
            return;
          }
          if (data["data"].length === 0) {
            log.error(["获取download detail失败", data]);
            Qmsg.error("获取download detail失败失败");
            return;
          }
          return data["data"];
        };

        /**
         * 获取文件夹信息
         * @param {{
         * backup_sign: number,
         * backup_source: boolean,
         * ban: boolean,
         * category: number,
         * created_at: number,
         * creator_ucid_or_default: string,
         * cur_version_or_default: number,
         * dir: boolean,
         * duration: number,
         * event_extra: {
         *    recent_created_at: number
         * },
         * extra: string,
         * fid: string,
         * file: boolean,
         * file_name: string,
         * file_name_hl_end: number,
         * file_name_hl_start: number,
         * file_source: string,
         * file_struct: {
         *    fir_source: string,
         *    platform_source: string,
         *    sec_source: string,
         *    thi_source: string,
         *    upload_dm: string,
         *    upload_mi: string,
         * },
         * file_type: number,
         * format_type: string,
         * include_items:  number,
         * l_created_at:  number,
         * l_updated_at:  number,
         * last_update_at:  number,
         * like:  number,
         * name_space:  number,
         * offline_source: boolean,
         * operated_at:  number,
         * owner_drive_type_or_default:  number,
         * owner_ucid: string,
         * pdir_fid: string,
         * raw_name_space:  number,
         * risk_type:  number,
         * save_as_source: boolean,
         * share_fid_token: string,
         * size:  number,
         * status:  number,
         * tags: string,
         * updated_at:  number,
         * _extra: {},
         * }[]} infoList
         * @return {Promise<{
         * fileName: string,
         * fileSize: string|number,
         * fileType: ?string,
         * createTime: ?string,
         * latestTime: ?string,
         * isFolder: boolean,
         * index: ?number,
         * clickCallBack: ?(event:Event,_config_: object)=>{}
         * }[]>}
         */
        this.getFolderInfo = function (infoList, stoken, index = 0) {
          let folderInfoList = [];
          let tempFolderInfoList = [];
          let tempFolderFileInfoList = [];
          infoList.forEach((item) => {
            if (item.dir == false && item.file_type === 1) {
              /* 文件 */
              tempFolderFileInfoList.push({
                fileName: item.file_name,
                fileSize: item.size,
                fileType: "",
                createTime: item.created_at,
                latestTime: item.updated_at,
                isFolder: false,
                index: index,
                async clickEvent() {
                  let fileDownloadUrl = await that.getDownload(
                    that.shareCode,
                    stoken,
                    item.fid,
                    item.share_fid_token
                  );
                  if (fileDownloadUrl) {
                    if (fileDownloadUrl.length) {
                      fileDownloadUrl = fileDownloadUrl[0].download_url;
                    } else {
                      fileDownloadUrl = "";
                    }
                  } else {
                    fileDownloadUrl = "";
                  }
                  if (item.ban) {
                    Qmsg.error("文件已被禁止下载");
                  } else {
                    let schemeDownloadUrl = NetDiskFilterScheme.handleUrl(
                      "uc-static-scheme-enable",
                      "uc-static-scheme-forward",
                      fileDownloadUrl
                    );
                    /* 如果已被scheme过滤，那么不进行GM_download下载 */
                    if (schemeDownloadUrl === fileDownloadUrl) {
                      that.downloadFile(item.file_name, fileDownloadUrl);
                    } else {
                      return {
                        autoDownload: true,
                        blank: true,
                        url: fileDownloadUrl,
                      };
                    }
                  }
                },
              });
            } else {
              /* 文件夹 */
              tempFolderInfoList.push({
                fileName: item.file_name,
                fileSize: item.size,
                fileType: "",
                createTime: item.created_at,
                latestTime: item.updated_at,
                isFolder: true,
                index: index,
                async clickEvent() {
                  if (item.include_items === 0) {
                    /* 里面没有文件 */
                    log.success("里面没有文件");
                    return [];
                  }
                  let newDetail = await that.getDetail(
                    that.shareCode,
                    that.accessCode,
                    stoken,
                    item.fid
                  );
                  if (newDetail) {
                    return that.getFolderInfo(newDetail, stoken, index + 1);
                  } else {
                    return [];
                  }
                },
              });
            }
          });

          tempFolderInfoList.sort((a, b) =>
            a["fileName"].localeCompare(b["fileName"])
          );
          tempFolderFileInfoList.sort((a, b) =>
            a["fileName"].localeCompare(b["fileName"])
          );
          folderInfoList = folderInfoList.concat(tempFolderInfoList);
          folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
          log.info(["getFilesInfoByRec", folderInfoList]);
          return folderInfoList;
        };
        return this;
      },
    },
    /**
     * 网盘链接解析
     * @param {string} netDiskName 网盘名称
     * @param {number} netDiskIndex 网盘名称索引下标
     * @param {string} shareCode
     * @param {string} accessCode
     */
    async parse(netDiskName, netDiskIndex, shareCode, accessCode) {
      Qmsg.info("正在获取直链");
      if (this.netDisk[netDiskName]) {
        let parseObj = new this.netDisk[netDiskName]();
        await parseObj.default(netDiskIndex, shareCode, accessCode);
      } else {
        log.error(`${netDiskName} 不存在解析`);
        Qmsg.error("该链接不存在解析功能");
      }
    },
    /**
     * 复制到剪贴板
     * @param {string} netDiskName
     * @param {string} shareCode
     * @param {string} accessCode
     * @param {string} toastText 提示的文字
     */
    setClipboard(
      netDiskName,
      shareCode,
      accessCode,
      toastText = "提取码已复制"
    ) {
      utils.setClip(accessCode);
      GM_setValue("tempNetDiskInfo", {
        shareCode: shareCode,
        accessCode: accessCode,
        netDiskName: netDiskName,
      });
      Qmsg.success(toastText);
    },
    /**
     * 复制到剪贴板
     * @param {string} netDiskName
     * @param {number} netDiskIndex
     * @param {string} shareCode
     * @param {string} accessCode
     * @param {string} toastText 提示的文字
     */
    copyText(
      netDiskName,
      netDiskIndex,
      shareCode,
      accessCode,
      toastText = "已复制"
    ) {
      utils.setClip(
        NetDiskParse.getCopyUrlInfo(
          netDiskName,
          netDiskIndex,
          shareCode,
          accessCode
        )
      );
      Qmsg.success(toastText);
    },
    /**
     * 新标签页打开
     * @param {string} url 网址
     * @param {string} netDiskName
     * @param {string} shareCode
     * @param {string} accessCode
     */
    blank(url, netDiskName, shareCode, accessCode) {
      if (accessCode) {
        NetDiskParse.setClipboard(netDiskName, shareCode, accessCode);
        Qmsg.info("1.5秒后跳转该链接");
      }
      log.success(["新标签页打开", [...arguments]]);
      /* 百度网盘会拒绝referrer不安全访问 */
      document
        .querySelector("meta[name='referrer']")
        ?.setAttribute("content", "no-referrer");
      /* 增加延迟跳转，因为要等待accessCode复制到剪贴板 */
      setTimeout(
        () => {
          window.open(url, "_blank");
        },
        accessCode ? 1500 : 0
      );
    },
    /**
     * 将链接转为Scheme格式并打开
     * @param {string} netDiskName 网盘名称
     * @param {number} netDiskIndex 网盘名称索引下标
     * @param {string} shareCode
     * @param {string} accessCode
     */
    openScheme(netDiskName, netDiskIndex, shareCode, accessCode) {
      let url = NetDiskParse.getBlankUrl(
        netDiskName,
        netDiskIndex,
        shareCode,
        accessCode
      );
      url = NetDiskFilterScheme.handleUrl(
        `${netDiskName}-scheme-enable`,
        `${netDiskName}-scheme-forward`,
        url
      );
      window.open(url, "_blank");
    },
    /**
     * 获取重定向后的直链
     * @param {string} url
     * @param {string} userAgent 用户代理字符串
     * @returns {Promise}
     */
    async getRedirectFinalUrl(url, userAgent) {
      if (!GM_getValue("getTheDirectLinkAfterRedirection", true)) {
        return url;
      }
      Qmsg.success("获取重定向后的直链");
      log.info("开始获取重定向后的直链");
      let headResp = await httpx.head({
        url: url,
        headers: {
          "User-Agent": userAgent,
          Referer: window.location.origin,
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
     * @returns {string}
     */
    getBlankUrl(netDiskName, netDiskIndex, shareCode, accessCode) {
      let blankUrl = NetDisk.regular[netDiskName][netDiskIndex]["blank"];
      if (shareCode) {
        blankUrl = blankUrl.replaceAll("{#shareCode#}", shareCode);
      }
      if (accessCode && accessCode !== "") {
        blankUrl = blankUrl.replaceAll("{#accessCode#}", accessCode);
      } else {
        blankUrl = blankUrl.replace(NetDisk.noAccessCodeRegExp, "");
      }
      return blankUrl;
    },
    /**
     * 获取用于复制到剪贴板的网盘信息
     * @param {string} netDiskName
     * @param {number} netDiskIndex
     * @param {string|undefined} shareCode
     * @param {string|undefined} accessCode
     * @returns {string}
     */
    getCopyUrlInfo(netDiskName, netDiskIndex, shareCode, accessCode) {
      let copyUrl = NetDisk.regular[netDiskName][netDiskIndex]["copyUrl"];
      if (shareCode) {
        copyUrl = copyUrl.replaceAll("{#shareCode#}", shareCode);
      }
      if (accessCode && accessCode !== "") {
        copyUrl = copyUrl.replaceAll("{#accessCode#}", accessCode);
      } else {
        copyUrl = copyUrl
          .replace("\n密码：{#accessCode#}", "")
          .replaceAll("{#accessCode#}", "");
      }
      return copyUrl;
    },
    /**
     * 在iframe内访问资源，但是可能页面存在同源策略，会导致iframe不生效
     * @param {string} url
     */
    iframeDownload(url = "") {
      let downloadIframe = document.createElement("iframe");
      downloadIframe.onload = function () {
        downloadUrl.onload = null;
        downloadIframe.remove();
      };
      downloadIframe.src = url;
      downloadIframe.style.display = "none";
      downloadIframe.style.height = "0";
      document.body.appendChild(downloadIframe);
    },
  };

  /**
   * 网盘直链鉴权处理
   */
  const NetDiskAuthorization = {
    netDisk: {
      /**
       * 123网盘，一般用于>100MB的文件直链获取
       */
      _123pan: function () {
        if (window.location.hostname !== "www.123pan.com") {
          return;
        }
        /* 没在设置中开启直链获取就不获取鉴权信息 */
        if (!GM_getValue("_123pan-static-enable")) {
          return;
        }
        let authorToken = unsafeWindow.localStorage.getItem("authorToken");
        if (utils.isNull(authorToken)) {
          return;
        }
        /* 去除左右的引号 */
        authorToken = authorToken.replace(/^\"/, "").replace(/\"$/, "");
        log.success("获取123网盘已登录用户的authorToken值👇");
        log.success(authorToken);
        GM_setValue("_123pan_User_Authorization", authorToken);
      },
    },
    default() {
      Object.keys(NetDiskAuthorization.netDisk).forEach((keyName) => {
        this.netDisk[keyName]();
      });
    },
  };

  /**
   * 网盘直链进行Scheme过滤
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
     * @param {string} enable_key 是否启用key
     * @param {string} forward_key 转发的scheme
     * @param {string} url 需要转发的url
     * @returns {string}
     */
    handleUrl(enable_key, forward_key, url) {
      if (!GM_getValue(enable_key, false)) {
        return url;
      }
      url = url.replace(/&/g, "{-and-}");
      url = url.replace(/#/g, "{-number-}");
      let currentScheme = GM_getValue(forward_key, this.defaultScheme);
      currentScheme = currentScheme.replace("{#intentData#}", url);
      return currentScheme;
    },
  };

  /**
   * 自动填入访问码
   */
  const NetDiskAutoFillAccessCode = {
    /**
     * 临时数据
     * @type {{
     * shareCode: string,
     * accessCode: string,
     * netDiskName: string,
     * }|undefined}
     */
    tempData: GM_getValue("tempNetDiskInfo"),
    /**
     * @type {boolean} 自动输入访问码是否开启
     */
    enable: Boolean(GM_getValue("autoFillAccessCode")),
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
      if (utils.isNull(this.accessCode)) {
        return;
      }
      /* 百度如果shareCode第一位是1的话，新版本会在href中去除这个1 */
      if (this.netDiskName === "baidu" && this.shareCode.startsWith("1")) {
        if (
          !window.location.href.includes(
            this.shareCode.slice(1, this.shareCode.length)
          )
        ) {
          return;
        }
      } else if (!window.location.href.includes(this.shareCode)) {
        return;
      }
      if (this.netDiskName in NetDiskAutoFillAccessCode) {
        NetDiskAutoFillAccessCode[this.netDiskName]();
      }
    },
    /**
     * 百度网盘
     */
    baidu() {
      if (
        window.location.hostname === "pan.baidu.com" &&
        window.location.pathname === "/share/init" &&
        window.location.search.startsWith("?surl=")
      ) {
        log.success(["自动填写链接", this.tempData]);
        utils.waitNode("div.verify-form #accessCode").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.dispatchEvent(element, "input");
          document.querySelector("div.verify-form #submitBtn")?.click();
        });
      }
    },
    /**
     * 蓝奏云
     */
    lanzou() {
      if (window.location.hostname.match(/lanzou[a-z]{1}.com/gi)) {
        log.success(["自动填写链接", this.tempData]);
        utils.waitNode("#pwd").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.dispatchEvent(element, "input");
          document
            .querySelector("#passwddiv > div > div.passwddiv-input > div")
            ?.click();
          document.querySelector("#sub")?.click();
        });
        utils.waitNode("#f_pwd").then((element) => {
          utils.mutationObserver(element, {
            config: {
              attributes: true,
              attributeFilter: ["style"],
            },
            callback: (mutations, observer) => {
              let inputElement = document.querySelector("#f_pwd #pwd");
              if (!utils.isVisible(inputElement)) {
                log.error("输入框不可见，不输入密码");
                return;
              }
              observer.disconnect();
              log.success("自动填入访问码并关闭观察者");
              Qmsg.success("自动填入访问码");
              inputElement.value = this.accessCode;
              utils.dispatchEvent(inputElement, "input");
              document.querySelector("#f_pwd #sub")?.click();
            },
          });
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
        utils.waitNode("input#code_txt").then((codeTxtElement) => {
          setTimeout(() => {
            let visitBtn = document.querySelector(".btn.btn-primary.visit");
            if (!utils.isVisible(codeTxtElement)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            codeTxtElement.value = this.accessCode;
            codeTxtElement._value = this.accessCode;
            utils.dispatchEvent(codeTxtElement, "input");
            utils.dispatchEvent(visitBtn, "click");
          }, 500);
        });
      }
      if (window.location.hostname === "h5.cloud.189.cn") {
        /* 移动端 */
        log.success(["自动填写链接", this.tempData]);
        utils.waitNode("input.access-code-input").then((accessInputElement) => {
          setTimeout(() => {
            if (!utils.isVisible(accessInputElement)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            accessInputElement.value = this.accessCode;
            accessInputElement._value = this.accessCode;
            utils.dispatchEvent(accessInputElement, "input");
            utils.dispatchEvent(document.querySelector("div.button"), "click");
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
        utils.waitNode("#token-input").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.dispatchEvent(element, "input");
          document
            .querySelector("#homepage div.token div.token-form a")
            .click();
        });
        /* 移动端 */
        utils
          .waitNode("#app div.token-form input[type=text]")
          .then((element) => {
            if (!utils.isVisible(element)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            element.value = this.accessCode;
            utils.dispatchEvent(element, "input");
            document.querySelector("div.token-form a.btn-token").click();
          });
      }
    },
    /**
     * 阿里云盘
     */
    aliyun() {
      if (window.location.hostname === "www.aliyundrive.com") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        utils.waitNode("#root input.ant-input").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.getReactObj(element).reactFiber.memoizedProps.onChange({
            currentTarget: element,
            target: element,
          });
          document.querySelector('#root button[type="submit"]').click();
        });

        /* ------------------------------------ */

        /* 移动端 */
        utils.waitNode("#root input[name=pwd]").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.getReactObj(element).reactFiber.memoizedProps.onChange({
            currentTarget: element,
            target: element,
          });
          document.querySelector('#root button[type="submit"]').click();
        });
      }
    },
    /**
     * 文叔叔
     * 暂时没找到有密码的链接
     */
    wenshushu() {},
    /**
     * 奶牛
     * 暂时没找到有密码的链接
     */
    nainiu() {},
    /**
     * 123云盘
     */
    _123pan() {
      if (window.location.hostname === "www.123pan.com") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        utils
          .waitNode("#app .ca-fot input.ant-input[type=text]")
          .then((element) => {
            if (!utils.isVisible(element)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            utils.getReactObj(element).reactProps.onChange({
              target: {
                value: this.accessCode,
              },
            });
            element.nextSibling.click();
          });

        /* ------------------------------------ */

        /* 移动端 */
        utils
          .waitNode("#app .appinput input.ant-input[type=text]")
          .then((element) => {
            if (!utils.isVisible(element)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            utils.getReactObj(element).reactProps.onChange({
              target: {
                value: this.accessCode,
              },
            });
            element.nextSibling.click();
          });
      }
    },
    /**
     * 腾讯微云
     */
    weiyun() {
      if (window.location.hostname === "share.weiyun.com") {
        /* 桌面端 */
        log.success(["自动填写链接", this.tempData]);
        utils.waitNode("#app input.input-txt").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.dispatchEvent(element, "input");
          utils.dispatchEvent(element, "change");
          setTimeout(() => {
            document.querySelector(".form-item button.btn-main").click();
          }, 500);
        });

        /* ------------------------------------ */

        /* 移动端 */
        utils.waitNode(".input-wrap input.pw-input").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.dispatchEvent(element, "input");
          utils.dispatchEvent(element, "change");
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
        utils
          .waitNode("#__layout div.pass-input-wrap input.td-input__inner")
          .then((element) => {
            if (!utils.isVisible(element)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            log.error("输入框不可见，不输入密码");
            element.value = this.accessCode;
            utils.dispatchEvent(element, "input");
            utils.dispatchEvent(element, "change");
            setTimeout(() => {
              document
                .querySelector("#__layout div.pass-input-wrap button.td-button")
                .click();
            }, 500);
          });

        /* ------------------------------------ */

        /* 移动端 */
        utils
          .waitNode("#__layout div.pass-wrapper input.td-input__inner")
          .then((element) => {
            if (!utils.isVisible(element)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            log.error("输入框不可见，不输入密码");
            element.value = this.accessCode;
            utils.dispatchEvent(element, "input");
            utils.dispatchEvent(element, "change");
            setTimeout(() => {
              document
                .querySelector("#__layout div.pass-wrapper button.td-button")
                .click();
            }, 500);
          });
      }
    },
    /**
     * 115网盘
     */
    _115pan() {
      if (window.location.hostname === "115.com") {
        log.success(["自动填写链接", this.tempData]);
        utils.waitNode("input.text").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.dispatchEvent(element, "input");
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
        utils.waitNode("#passcode").then((element) => {
          if (!utils.isVisible(element)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填入访问码");
          element.value = this.accessCode;
          utils.dispatchEvent(element, "input");
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
        utils
          .waitNode("#ice-container input.ant-input[class*=ShareReceive]")
          .then((element) => {
            if (!utils.isVisible(element)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            Qmsg.success("自动填入访问码");
            (
              utils.getReactObj(element).reactProps ||
              utils.getReactObj(element).reactEventHandlers
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
     * 暂时没找到有密码的链接
     */
    jianguoyun() {},
    /**
     * OneDrive
     * 暂时没找到有密码的链接
     */
    onedrive() {},
  };

  /**
   * Woker
   */
  const NetDiskWorker = {
    blobUrl: "",
    /**
     * @type {Worker}
     */
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
      let blob = new Blob([handleMatch]);
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
     * @param {string} matchLink
     * @param {string} netDiskName
     * @param {number} netDiskIndex
     */
    successCallBack(matchLink, netDiskName, netDiskIndex) {
      /* 匹配为空，释放锁 */
      if (!matchLink.length) {
        setTimeout(() => {
          NetDiskUI.isHandleMatch = false;
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
        NetDisk.handleLink(netDiskName, netDiskIndex, item);
      });
      if (NetDisk.hasMatchLink) {
        NetDiskUI.suspension.show();
      }
      setTimeout(() => {
        NetDiskUI.isHandleMatch = false;
      }, parseFloat(GM_getValue("delaytime", 0.8)) * 1000);
    },
    /**
     * Worker失败回调
     * @param {object} error
     */
    errorCallBack(error) {
      NetDiskUI.isHandleMatch = false;
      log.error(["Worker Error", error]);
    },
    /**
     * 传递数据给worker内进行处理匹配
     * @param {{
     * regexp: RegExp,
     * pageText: string,
     * netDiskName: string,
     * netDiskIndex: number
     * }} message 数据
     * @param { StructuredSerializeOptions | undefined } options 配置
     */
    postMessage(message, options) {
      this.GM_matchWorker.postMessage(message, options);
    },
  };

  /**
   * 网盘-自定义规则
   */
  const NetDiskCustomRules = {
    init() {
      Object.assign(NetDisk.regular, this.parseRule());
    },
    /**
     * 把用户自定义规则进行转换成脚本规则
     * @returns {object}
     */
    parseRule() {
      let regular = {};
      this.getRule().forEach((item) => {
        let data = item.regexp;
        data.shareCode = new RegExp(data.shareCode, "ig");
        data.shareCodeNeedRemoveStr = new RegExp(
          data.shareCodeNeedRemoveStr,
          "ig"
        );
        if (data.checkAccessCode) {
          data.checkAccessCode = new RegExp(data.checkAccessCode, "ig");
        }
        if (data.accessCode) {
          data.accessCode = new RegExp(data.accessCode, "ig");
        }
        if (data.acceesCodeNotMatch) {
          data.acceesCodeNotMatch = new RegExp(data.acceesCodeNotMatch, "ig");
        }
        if (regular[item.key]) {
          /* 已存在相同key规则，追加新的 */
          regular[item.key].push(data);
        } else {
          regular[item.key] = [data];
        }
        if (item.setting) {
          /* 进行了设置 */
          if (item.setting.isBlank) {
            GM_setValue(item.key + "-open-enable", true);
          } else {
            GM_deleteValue(item.key + "-open-enable");
          }
        }
        NetDiskUI.src.icon[item.key] = item.icon;
      });
      return regular;
    },
    /**
     * 设置规则到本地
     * @param {object} userRule
     */
    setRule(userRule) {
      GM_setValue("userRule", userRule);
    },
    /**
     * 清空规则
     */
    clearRule() {
      GM_deleteValue("userRule");
    },
    /**
     * 获取规则
     * @returns {{
     * key: string,
     * icon: string,
     * regexp: {
     *  link_innerText: string,
     *  link_innerHTML: string,
     *  shareCode: string,
     *  shareCodeNeedRemoveStr: string,
     *  accessCode: string|undefined,
     *  checkAccessCode: string|undefined,
     *  acceesCodeNotMatch: string|undefined,
     *  uiLinkShow: string,
     *  blank: string,
     *  copyUrl: string,
     * },
     * setting: {
     *  name: string|undefined,
     *  isBlank: boolean
     * }|undefined
     * }[]}
     */
    getRule() {
      return GM_getValue("userRule", []);
    },
    /**
     * 获取格式化后的规则
     * @param {string|undefined} rule
     * @returns {string}
     */
    getFormatRule(rule) {
      return JSON.stringify(rule || this.getRule(), null, 4);
    },
  };

  /**
   * 弹窗UI界面
   */
  const NetDiskUI = {
    /**
     * 已匹配到的网盘图标字典
     */
    isMatchedNetDiskIconMap: new Set(),
    /**
     * 高度和宽度大小
     */
    size: parseInt(GM_getValue("size", 50)),
    /**
     * 按钮透明度
     */
    opacity: parseFloat(GM_getValue("opacity", 1)),
    /**
     * 是否已创建设置界面
     */
    isCreatedUISetting: false,
    /**
     * 是否正在文本匹配中
     */
    isHandleMatch: false,
    /**
     * 是否正在循环切换按钮背景
     */
    isSwitchRandomBackground: false,
    /**
     * 链接弹窗的对象
     */
    uiLinkAlias: null,
    /**
     * 单文件直链弹窗的唯一标识
     */
    uiLinkParseAlias: "单文件直链层",
    /**
     * 多文件直链弹窗的唯一标识
     */
    uiLinkParseMoreAlias: "多文件直链层",
    /**
     * 重输密码弹窗的唯一标识
     */
    uiPasswordAlias: "重输密码层",
    /**
     * 是否默认弹窗可以拖拽
     */
    defaultPCDrag: false,
    /**
     * 是否默认弹窗拖拽距离
     */
    defaultPCDragLimit: true,
    /**
     * 点击弹窗遮罩层是否可以关闭弹窗
     */
    defaultClickMaskToCloseDialog: false,
    /**
     * 是否默认禁用弹窗弹出后背景可以滚动
     */
    defaultForbiddenScroll: false,
    /**
     * 默认弹窗动画
     */
    defaultAnimation: "pops-anim-fadein-zoom",
    /**
     * 弹窗的配置
     * 规定格式
     * {
     *  PC:{
     *    width: "",
     *    height: "",
     *  },
     *  Mobile: {
     *    width: "",
     *    height: "",
     *  }
     * }
     */
    popsStyle: {
      /**
       * 天翼云需要登录的提示
       */
      tianYiYunLoginTip: {
        PC: {
          width: "30vw",
          height: "280px",
        },
        Mobile: {
          width: "80vw",
          height: "250px",
        },
      },
      /**
       * 坚果云需要登录的提示
       */
      jianGuoYunLoginTip: {
        PC: {
          width: "350px",
          height: "200px",
        },
        Mobile: {
          width: "350px",
          height: "200px",
        },
      },
      /**
       * 设置界面
       */
      settingView: {
        PC: {
          width: "800px",
          height: "600px",
        },
        Mobile: {
          width: "92vw",
          height: "80vh",
        },
      },
      /**
       * 设置默认值的界面
       */
      setDefaultValueView: {
        PC: {
          width: "350px",
          height: "200px",
        },
        Mobile: {
          width: "350px",
          height: "200px",
        },
      },
      /**
       * (主)网盘链接界面
       */
      mainView: {
        PC: {
          width: "50vw",
          height: "65vh",
        },
        Mobile: {
          width: "88vw",
          height: "50vh",
        },
      },
      /**
       * 单文件直链弹窗
       */
      oneFileStaticView: {
        PC: {
          width: "550px",
          height: "350px",
        },
        Mobile: {
          width: "88vw",
          height: "300px",
        },
      },
      /**
       * 多文件直链弹窗
       */
      moreFileStaticView: {
        PC: {
          width: "700px",
          height: "600px",
        },
        Mobile: {
          width: "88vw",
          height: "500px",
        },
      },
      /**
       * 新密码、错误密码输入弹窗
       */
      inputNewAccessCodeView: {
        PC: {
          width: "400px",
          height: "200px",
        },
        Mobile: {
          width: "88vw",
          height: "160px",
        },
      },
      /**
       * 历史存储记录弹窗
       */
      historyMatchView: {
        PC: {
          width: "50vw",
          height: "65vh",
        },
        Mobile: {
          width: "88vw",
          height: "60vh",
        },
      },
      /**
       * 自定义规则的弹窗
       */
      customRulesView: {
        PC: {
          width: "50vw",
          height: "65vh",
        },
        Mobile: {
          width: "88vw",
          height: "60vh",
        },
      },
      /**
       * 主动识别的弹窗
       */
      matchPasteTextView: {
        PC: {
          width: "50vw",
          height: "65vh",
        },
        Mobile: {
          width: "88vw",
          height: "60vh",
        },
      },
      /**
       * 访问码规则弹窗
       */
      accessCodeRuleView: {
        PC: {
          width: "50vw",
          height: "65vh",
        },
        Mobile: {
          width: "88vw",
          height: "60vh",
        },
      },
      /**
       * 访问码规则添加/修改/删除
       */
      accessCodeRuleEditView: {
        PC: {
          width: "44vw",
          height: "50vh",
        },
        Mobile: {
          width: "70vw",
          height: "45vh",
        },
      },
    },
    src: {
      /**
       * 图标RESOURCE_ICON
       * 从图标库中引入并覆盖
       */
      icon: {},
    },
    /**
     * 悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮
     */
    suspension: {
      /**
       * 是否已显示
       */
      isShow: false,
      /**
       * 显示悬浮按钮
       */
      show() {
        if (!this.isShow) {
          this.isShow = true;
          this.createUI();
          this.initPop();
          this.setSuspensionEvent();
          this.setResizeEventListener();
          this.setSuspensionPosition();
        }
        this.backgroundSwitch();
      },
      /**
       * 判断当前是否是顶部窗口
       * @returns {boolean}
       */
      isTopWindow() {
        return self.window == top.window;
      },
      /**
       * 创建UI界面
       */
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
        let suspensionNode = DOMUtils.createElement(
          "div",
          {
            id: "whitesevSuspensionId",
            className: "whitesevSuspension",
            innerHTML: `
            <div class="whitesevSuspensionMain">
              <div class="whitesevSuspensionFloor">
                <div class="netdisk"></div>
              </div>
            </div>
            `,
          },
          {
            style: `
            width: ${NetDiskUI.size}px;
            height: ${NetDiskUI.size}px;
            opacity: ${NetDiskUI.opacity}
          `,
          }
        );
        document.body.appendChild(suspensionNode);
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
      },
      /**
       * 显示设置界面
       */
      showSettingView() {
        if (document.querySelector(".pops.whitesevPopSetting")) {
          log.error("设置界面已存在");
          Qmsg.error("设置界面已存在");
          return;
        }
        function getSwtichDetail(text, key, defaultValue, callback) {
          defaultValue = Boolean(defaultValue);
          return {
            text: text,
            type: "switch",
            attributes: {
              "data-key": key,
              "data-default-value": defaultValue,
            },
            getValue() {
              return Boolean(GM_getValue(key, defaultValue));
            },
            callback(event, value) {
              GM_setValue(key, Boolean(value));
              if (typeof callback === "function") {
                callback(event, value);
              }
            },
          };
        }
        let contentDetails = [
          {
            id: "netdisk-panel-config-all-setting",
            title: "总设置",
            isDefault: true,
            forms: [
              {
                className: "netdisk-panel-forms-pops",
                text: "弹窗",
                type: "forms",
                forms: [
                  {
                    text: "动画",
                    type: "select",
                    attributes: {
                      "data-key": "popsAnimation",
                      "data-default-value": NetDiskUI.defaultAnimation,
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, isSelectedValue, isSelectedText) {
                      GM_setValue(this.attributes["data-key"], isSelectedValue);
                    },
                    data: [
                      {
                        value: "",
                        text: "无",
                      },
                      {
                        value: "pops-anim-spread",
                        text: "spread",
                      },
                      {
                        value: "pops-anim-shake",
                        text: "shake",
                      },
                      {
                        value: "pops-anim-rolling-left",
                        text: "rolling-left",
                      },
                      {
                        value: "pops-anim-rolling-right",
                        text: "rolling-right",
                      },
                      {
                        value: "pops-anim-slide-top",
                        text: "slide-top",
                      },
                      {
                        value: "pops-anim-slide-bottom",
                        text: "slide-bottom",
                      },
                      {
                        value: "pops-anim-slide-left",
                        text: "slide-left",
                      },
                      {
                        value: "pops-anim-slide-right",
                        text: "slide-right",
                      },
                      {
                        value: "pops-anim-fadein",
                        text: "fadein",
                      },
                      {
                        value: "pops-anim-fadein-zoom",
                        text: "fadein-zoom",
                      },
                      {
                        value: "pops-anim-fadein-alert",
                        text: "fadein-alert",
                      },
                      {
                        value: "pops-anim-don",
                        text: "don",
                      },
                      {
                        value: "pops-anim-roll",
                        text: "roll",
                      },
                      {
                        value: "pops-anim-sandra",
                        text: "sandra",
                      },
                      {
                        value: "pops-anim-gather",
                        text: "gather",
                      },
                    ],
                  },
                  getSwtichDetail(
                    "点击弹窗遮罩层关闭弹窗",
                    "clickMaskToCloseDialog",
                    NetDiskUI.defaultClickMaskToCloseDialog
                  ),
                  getSwtichDetail(
                    "可拖拽窗口",
                    "pcDrag",
                    NetDiskUI.defaultPCDrag
                  ),
                  getSwtichDetail(
                    "限制拖拽距离",
                    "pcDragLimit",
                    NetDiskUI.defaultPCDragLimit
                  ),
                ],
              },
              {
                text: "悬浮按钮",
                type: "forms",
                forms: [
                  {
                    text: "大小",
                    type: "slider",
                    attributes: {
                      "data-key": "size",
                      "data-default-value": 50,
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, value) {
                      GM_setValue(this.attributes["data-key"], value);
                      NetDiskUI.size = parseInt(value);
                      if (NetDiskUI.suspension.isShow) {
                        DOMUtils.css("#whitesevSuspensionId", {
                          width: NetDiskUI.size,
                          height: NetDiskUI.size,
                        });
                        NetDiskUI.suspension.setSuspensionPosition();
                      }
                    },
                    min: 15,
                    max: 250,
                  },
                  {
                    text: "透明度",
                    type: "slider",
                    attributes: {
                      "data-key": "opacity",
                      "data-default-value": 1,
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, value) {
                      GM_setValue(this.attributes["data-key"], value);
                      NetDiskUI.opacity = parseFloat(value);
                      if (NetDiskUI.suspension.isShow) {
                        DOMUtils.css("#whitesevSuspensionId", {
                          opacity: NetDiskUI.opacity,
                        });
                      }
                    },
                    min: 0.1,
                    max: 1,
                    step: 0.1,
                  },
                  {
                    text: "背景轮播时间",
                    type: "slider",
                    attributes: {
                      "data-key": "randbg-time",
                      "data-default-value": 1500,
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, value) {
                      GM_setValue(this.attributes["data-key"], value);
                    },
                    getToolTipContent(value) {
                      return `${value}ms`;
                    },
                    min: 0,
                    max: 10000,
                    step: 100,
                  },
                  {
                    text: "背景显示时间",
                    type: "slider",
                    attributes: {
                      "data-key": "randbg-show-time",
                      "data-default-value": 1200,
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, value) {
                      GM_setValue(this.attributes["data-key"], value);
                    },
                    getToolTipContent(value) {
                      return `${value}ms`;
                    },
                    min: 0,
                    max: 10000,
                    step: 100,
                  },
                ],
              },
              {
                className: "netdisk-panel-forms-toast",
                text: "Toast",
                type: "forms",
                forms: [
                  {
                    text: "位置",
                    type: "select",
                    attributes: {
                      "data-key": "qmsg-position",
                      "data-default-value": "top",
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, isSelectedValue, isSelectedText) {
                      GM_setValue(this.attributes["data-key"], isSelectedValue);
                    },
                    data: [
                      {
                        value: "topleft",
                        text: "左上角",
                      },
                      {
                        value: "top",
                        text: "顶部",
                      },
                      {
                        value: "topright",
                        text: "右上角",
                      },
                      {
                        value: "left",
                        text: "左边",
                      },
                      {
                        value: "center",
                        text: "中间",
                      },
                      {
                        value: "right",
                        text: "右边",
                      },
                      {
                        value: "bottomleft",
                        text: "左下角",
                      },
                      {
                        value: "bottom",
                        text: "底部",
                      },
                      {
                        value: "bottomright",
                        text: "右下角",
                      },
                    ],
                  },
                  {
                    text: "同时最多显示的数量",
                    type: "select",
                    attributes: {
                      "data-key": "qmsg-maxnums",
                      "data-default-value": 3,
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, isSelectedValue, isSelectedText) {
                      GM_setValue(
                        this.attributes["data-key"],
                        parseInt(isSelectedValue)
                      );
                    },
                    data: [
                      {
                        value: 1,
                        text: "1",
                      },
                      {
                        value: 2,
                        text: "2",
                      },
                      {
                        value: 3,
                        text: "3",
                      },
                      {
                        value: 4,
                        text: "4",
                      },
                      {
                        value: 5,
                        text: "5",
                      },
                    ],
                  },
                  getSwtichDetail("逆序弹出", "qmsg-showreverse", false),
                ],
              },
              {
                className: "netdisk-panel-forms-function",
                text: "功能",
                type: "forms",
                forms: [
                  {
                    text: "匹配间隔",
                    type: "slider",
                    attributes: {
                      "data-key": "delaytime",
                      "data-default-value": 0.8,
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, value) {
                      GM_setValue(this.attributes["data-key"], value);
                    },
                    getToolTipContent(value) {
                      return `${value}s`;
                    },
                    min: 0.6,
                    max: 5.0,
                    step: 0.1,
                  },
                  {
                    text: "匹配类型",
                    type: "select",
                    attributes: {
                      "data-key": "pageMatchRange",
                      "data-default-value": "all",
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, isSelectedValue, isSelectedText) {
                      GM_setValue(this.attributes["data-key"], isSelectedValue);
                    },
                    data: [
                      {
                        value: "all",
                        text: "全部",
                      },
                      {
                        value: "innerText",
                        text: "普通文本",
                      },
                      {
                        value: "innerHTML",
                        text: "超文本",
                      },
                    ],
                  },
                  {
                    text: "历史记录排序规则",
                    type: "select",
                    attributes: {
                      "data-key": "netdisk-history-match-ordering-rule",
                      "data-default-value": "按 更新时间 - 降序",
                    },
                    getValue() {
                      return GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      );
                    },
                    callback(event, isSelectedValue, isSelectedText) {
                      GM_setValue(this.attributes["data-key"], isSelectedValue);
                    },
                    data: [
                      {
                        value: "按 记录时间 - 升序",
                        text: "按 记录时间 - 升序",
                      },
                      {
                        value: "按 记录时间 - 降序",
                        text: "按 记录时间 - 降序",
                      },
                      {
                        value: "按 更新时间 - 升序",
                        text: "按 更新时间 - 升序",
                      },
                      {
                        value: "按 更新时间 - 降序",
                        text: "按 更新时间 - 降序",
                      },
                    ],
                  },
                  getSwtichDetail("读取剪贴板", "readClipboard", false),
                  getSwtichDetail("存储匹配记录", "saveMatchNetDisk", false),
                  getSwtichDetail(
                    "自动输入访问码",
                    "autoFillAccessCode",
                    false
                  ),
                  getSwtichDetail(
                    "获取重定向后的直链",
                    "getTheDirectLinkAfterRedirection",
                    false
                  ),
                  getSwtichDetail(
                    "允许匹配当前URL",
                    "allowMatchLocationHref",
                    false
                  ),
                ],
              },
            ],
          },
        ];

        let shortcutDetails = {
          className: "netdisk-panel-forms-shortcut-keys",
          text: "快捷键",
          type: "forms",
          forms: [],
        };
        let shortcurFormsDetailsList = [
          {
            text: "打开设置界面",
            key: "netdisk-keyboard-open-setting",
          },
          {
            text: "打开历史匹配记录",
            key: "netdisk-keyboard-open-history-matching-records",
          },
          {
            text: "打开访问码规则",
            key: "netdisk-keyboard-open-accesscode-rule",
          },
          {
            text: "打开用户自定义规则",
            key: "netdisk-keyboard-open-user-rule",
          },
          {
            text: "打开主动识别文本",
            key: "netdisk-keyboard-open-proactively-recognize-text",
          },
        ];
        shortcurFormsDetailsList.forEach((item) => {
          shortcutDetails.forms.push({
            text: item.text,
            type: "button",
            attributes: {
              "data-key": item.key,
              "data-default-value": "暂无快捷键",
            },
            buttonIcon: "keyboard",
            buttonIconIsLoading: false,
            buttonType: "default",
            buttonText() {
              return NetDiskShortcut.getShowText(
                this.attributes["data-key"],
                this.attributes["data-default-value"]
              );
            },
            callback(event) {
              NetDiskShortcut.buttonClickCallBack(
                event,
                this.attributes["data-key"],
                this.attributes["data-default-value"]
              );
            },
          });
        });
        contentDetails[0].forms.push(shortcutDetails);
        /**
         * 追加网盘设置
         */
        function addNetDiskSetting() {
          let netDiskDetailsList = [
            {
              type: "百度网盘",
              key: "baidu",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
              ownFormList: [
                {
                  text: "第三方解析站",
                  type: "forms",
                  forms: [
                    {
                      text: "启用解析站",
                      type: "switch",
                      attributes: {
                        "data-key": "baidu-static-enable",
                        "data-default-value": false,
                      },
                      getValue() {
                        return Boolean(
                          GM_getValue(
                            this.attributes["data-key"],
                            this.attributes["data-default-value"]
                          )
                        );
                      },
                      callback(event, value) {
                        GM_setValue(
                          this.attributes["data-key"],
                          Boolean(value)
                        );
                      },
                    },
                    {
                      text: "跳转时复制链接",
                      type: "switch",
                      attributes: {
                        "data-key": "baidu-baiduwp-php-copy-url",
                        "data-default-value": false,
                      },
                      getValue() {
                        return Boolean(
                          GM_getValue(
                            this.attributes["data-key"],
                            this.attributes["data-default-value"]
                          )
                        );
                      },
                      callback(event, value) {
                        GM_setValue(
                          this.attributes["data-key"],
                          Boolean(value)
                        );
                      },
                    },
                    {
                      text: "解析站网址",
                      type: "input",
                      attributes: {
                        "data-key": "baidu-baiduwp-php-url",
                        "data-default-value": "",
                      },
                      getValue() {
                        return GM_getValue(
                          this.attributes["data-key"],
                          this.attributes["data-default-value"]
                        );
                      },
                      callback(event, value) {
                        GM_setValue(this.attributes["data-key"], value);
                      },
                      placeholder:
                        "使用了baiduwp-php源码的网站，例如：https://www.example.com/",
                    },
                    {
                      text: "表单参数",
                      type: "input",
                      attributes: {
                        "data-key": "baidu-baiduwp-php-post-form",
                        "data-default-value": "",
                      },
                      getValue() {
                        return GM_getValue(
                          this.attributes["data-key"],
                          this.attributes["data-default-value"]
                        );
                      },
                      callback(event, value) {
                        GM_setValue(this.attributes["data-key"], value);
                      },
                      placeholder:
                        "POST表单，例如：surl={#shareCode#}&pwd={#accessCode#}&password=",
                    },
                  ],
                },
              ],
            },
            {
              type: "蓝奏云",
              key: "lanzou",
              checkbox_oneOrMoreStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
              ownFormList: [
                {
                  text: "其它配置",
                  type: "forms",
                  forms: [
                    {
                      text: "蓝奏云域名",
                      type: "input",
                      attributes: {
                        "data-key": "lanzou-host-name",
                        "data-default-value":
                          NetDiskData.lanzou_defaultHostName,
                      },
                      getValue() {
                        return GM_getValue(
                          this.attributes["data-key"],
                          this.attributes["data-default-value"]
                        );
                      },
                      callback(event, value) {
                        GM_setValue(this.attributes["data-key"], value);
                      },
                      placeholder: `例如：${NetDiskData.lanzou_defaultHostName}`,
                    },
                  ],
                },
              ],
            },
            {
              type: "天翼云",
              key: "tianyiyun",
              checkbox_oneOrMoreStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "中国移动云盘",
              key: "hecaiyun",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "阿里云",
              key: "aliyun",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "文叔叔",
              key: "wenshushu",
              checkbox_oneStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "奶牛",
              key: "nainiu",
              checkbox_oneOrMoreStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "123盘",
              key: "_123pan",
              checkbox_oneOrMoreStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "微云",
              key: "weiyun",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "迅雷云盘",
              key: "xunlei",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "115网盘",
              key: "_115pan",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "城通网盘",
              key: "chengtong",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "夸克网盘",
              key: "kuake",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "BT磁力",
              key: "magnet",
              checkbox_openBlank: true,
            },
            {
              type: "坚果云",
              key: "jianguoyun",
              checkbox_oneOrMoreStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "OneDrive",
              key: "onedrive",
              checkbox_openBlank: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
            {
              type: "UC网盘",
              key: "uc",
              checkbox_oneOrMoreStatic: true,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
            },
          ];
          netDiskDetailsList.forEach((item) => {
            let formsList = [];
            if (item.range_innerText || item.range_accessCode_after_text) {
              let matchTextList = [];
              if (item.range_innerText) {
                matchTextList.push({
                  text: "提取码间隔前的字符长度",
                  type: "slider",
                  attributes: {
                    "data-key": "innerText_" + item.key,
                    "data-default-value": item.range_innerText_default_value,
                  },
                  getValue() {
                    return GM_getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                  },
                  callback(event, value) {
                    GM_setValue(this.attributes["data-key"], value);
                  },
                  min: 0,
                  max: 100,
                });
              }
              if (item.range_accessCode_after_text) {
                matchTextList.push({
                  text: "提取码间隔后的字符长度",
                  type: "slider",
                  attributes: {
                    "data-key": "accessCode_after_text_" + item.key,
                    "data-default-value":
                      item.range_accessCode_after_text_default_value,
                  },
                  getValue() {
                    return GM_getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                  },
                  callback(event, value) {
                    GM_setValue(this.attributes["data-key"], value);
                  },
                  min: 0,
                  max: 100,
                });
              }
              if (matchTextList.length) {
                formsList.push({
                  text: "提取码文本匹配Text",
                  type: "forms",
                  forms: matchTextList,
                });
              }
            }
            if (item.range_innerHTML || item.range_accessCode_after_html) {
              let matchTextList = [];
              if (item.range_innerHTML) {
                matchTextList.push({
                  text: "提取码间隔前的字符长度",
                  type: "slider",
                  attributes: {
                    "data-key": "innerHTML_" + item.key,
                    "data-default-value": item.range_innerHTML_default_value,
                  },
                  getValue() {
                    return GM_getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                  },
                  callback(event, value) {
                    GM_setValue(this.attributes["data-key"], value);
                  },
                  min: 0,
                  max: 500,
                });
              }

              if (item.range_accessCode_after_html) {
                matchTextList.push({
                  text: "提取码间隔后的字符长度",
                  type: "slider",
                  attributes: {
                    "data-key": "accessCode_after_html_" + item.key,
                    "data-default-value":
                      item.range_accessCode_after_html_default_value,
                  },
                  getValue() {
                    return GM_getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                  },
                  callback(event, value) {
                    GM_setValue(this.attributes["data-key"], value);
                  },
                  min: 0,
                  max: 200,
                });
              }
              if (matchTextList.length) {
                formsList.push({
                  text: "提取码文本匹配HTML",
                  type: "forms",
                  forms: matchTextList,
                });
              }
            }

            if (
              item.checkbox_openBlank ||
              item.checkbox_oneStatic ||
              item.checkbox_oneOrMoreStatic
            ) {
              let functionFormsList = [];
              /* 新标签页打开 */
              if (item.checkbox_openBlank) {
                functionFormsList.push({
                  text: "新标签页打开",
                  type: "switch",
                  attributes: {
                    "data-key": `${item.key}-open-enable`,
                    "data-default-value": false,
                  },
                  getValue() {
                    return Boolean(
                      GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      )
                    );
                  },
                  callback(event, value) {
                    GM_setValue(this.attributes["data-key"], Boolean(value));
                    if (
                      item.checkbox_oneStatic ||
                      item.checkbox_oneOrMoreStatic
                    ) {
                      /* 新标签页打开和单/多文件解析只能开启一个 */
                      /**
                       * @type {HTMLInputElement}
                       */
                      let checkboxElement = document.querySelector(
                        `li[data-key="${item.key}-static-enable"] input[type=checkbox]`
                      );
                      let checkboxCoreElement = document.querySelector(
                        `li[data-key="${item.key}-static-enable"] span.pops-panel-switch__core`
                      );
                      if (value == true && checkboxElement.checked == true) {
                        checkboxCoreElement.click();
                      }
                    }
                  },
                });
              }
              /* 单文件解析|多文件解析 */
              if (item.checkbox_oneStatic || item.checkbox_oneOrMoreStatic) {
                functionFormsList.push({
                  text: `${
                    item.checkbox_oneStatic ? "单文件解析" : "多文件解析"
                  }`,
                  type: "switch",
                  attributes: {
                    "data-key": `${item.key}-static-enable`,
                    "data-default-value": false,
                  },
                  getValue() {
                    return Boolean(
                      GM_getValue(
                        this.attributes["data-key"],
                        this.attributes["data-default-value"]
                      )
                    );
                  },
                  callback(event, value) {
                    GM_setValue(this.attributes["data-key"], Boolean(value));
                    if (item.checkbox_openBlank) {
                      /* 新标签页打开和单/多文件解析只能开启一个 */
                      /**
                       * @type {HTMLInputElement}
                       */
                      let checkboxElement = document.querySelector(
                        `li[data-key="${item.key}-open-enable"] input[type=checkbox]`
                      );
                      let checkboxCoreElement = document.querySelector(
                        `li[data-key="${item.key}-open-enable"] span.pops-panel-switch__core`
                      );
                      if (value == true && checkboxElement.checked == true) {
                        checkboxCoreElement.click();
                      }
                    }
                  },
                });

                /* Scheme转发直链 */
                if (item.checkbox_static_scheme) {
                  functionFormsList.push({
                    text: "Scheme转发直链",
                    type: "switch",
                    attributes: {
                      "data-key": `${item.key}-static-scheme-enable`,
                      "data-default-value": false,
                    },
                    getValue() {
                      return Boolean(
                        GM_getValue(
                          this.attributes["data-key"],
                          this.attributes["data-default-value"]
                        )
                      );
                    },
                    callback(event, value) {
                      GM_setValue(this.attributes["data-key"], Boolean(value));
                    },
                  });

                  /* Scheme链接 */
                  if (item.text_static_scheme_forward) {
                    functionFormsList.push({
                      text: "Scheme链接",
                      type: "input",
                      attributes: {
                        "data-key": `${item.key}-static-scheme-forward`,
                        "data-default-value": "",
                      },
                      getValue() {
                        return GM_getValue(
                          this.attributes["data-key"],
                          this.attributes["data-default-value"]
                        );
                      },
                      callback(event, value) {
                        GM_setValue(this.attributes["data-key"], value);
                      },
                      placeholder:
                        "如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx",
                    });
                  }
                }
              }

              formsList.push({
                text: "功能",
                type: "forms",
                forms: functionFormsList,
              });
            }

            if (item.ownFormList) {
              formsList = formsList.concat(item.ownFormList);
            }

            let asideTitle = item.key;
            if (item.key in NetDiskUI.src.icon) {
              if (pops.isPhone()) {
                asideTitle = `
                <div style="
                    width: 20px;
                    height: 20px;
                    background: url(${NetDiskUI.src.icon[item.key]}) no-repeat;
                    background-size: 100% 100%;
                    ">`;
              } else {
                asideTitle = `
                <div style="
                    width: 20px;
                    height: 20px;
                    background: url(${NetDiskUI.src.icon[item.key]}) no-repeat;
                    background-size: 100% 100%;
                    "></div>
                <div style="margin-left: 4px;">${item.type}</div>`;
              }
            }

            contentDetails.push({
              id: "netdisk-panel-config-" + item.key,
              title: asideTitle,
              headerTitle: item.type,
              attributes: {
                "data-key": item.key,
              },
              forms: formsList,
            });
          });
        }
        addNetDiskSetting();

        NetDiskPops.panel(
          {
            title: {
              text: `${GM_info?.script?.name || "网盘链接识别"}-设置`,
              position: "center",
            },
            content: contentDetails,
            class: "whitesevPopSetting",
          },
          NetDiskUI.popsStyle.settingView
        );
      },
      /**
       * 设置 悬浮按钮所有事件
       */
      setSuspensionEvent() {
        let needDragElement = document.querySelector("#whitesevSuspensionId");
        let dragNode = new AnyTouch(needDragElement);
        /**
         * @type {number[]}
         */
        let netDiskLinkViewTimer = null;
        let moveFlag = false;
        /* 是否是双击 */
        let isDouble = false;
        /* 点击元素，left偏移 */
        let clickElementLeftOffset = 0;
        /* 点击元素，top偏移 */
        let clickElementTopOffset = 0;
        /**
         * 设置悬浮按钮 按下事件
         */
        dragNode.on("pan", function (event) {
          if (!moveFlag) {
            moveFlag = true;
            if (event.nativeEvent.offsetX) {
              clickElementLeftOffset = parseInt(event.nativeEvent.offsetX);
            } else {
              clickElementLeftOffset = parseInt(event.getOffset().x);
            }
            if (event.nativeEvent.offsetY) {
              clickElementTopOffset = parseInt(event.nativeEvent.offsetY);
            } else {
              clickElementTopOffset = parseInt(event.getOffset().y);
            }
            DOMUtils.css(needDragElement, {
              cursor: "move",
              transition: "none",
            });
          }
          /**
           * 移动
           */
          if (event.phase === "move") {
            /* 悬浮按钮大小不能超过250px */
            if (clickElementLeftOffset > 250 || clickElementTopOffset > 250) {
              return;
            }
            /* left偏移最大值 */
            let maxLeftOffset = DOMUtils.width(globalThis) - NetDiskUI.size;
            /* top偏移的最大值 */
            let maxTopOffset = DOMUtils.height(globalThis) - NetDiskUI.size;
            /* 当前移动的left偏移 */
            let currentSuspensionLeftOffset = event.x - clickElementLeftOffset;
            /* 当前移动的top偏移 */
            let currentSuspensionTopOffset = event.y - clickElementTopOffset;
            /* 不允许超过窗口最大宽度 */
            currentSuspensionLeftOffset =
              currentSuspensionLeftOffset > maxLeftOffset
                ? maxLeftOffset
                : currentSuspensionLeftOffset;
            /* 不允许超过窗口最大高度 */
            currentSuspensionTopOffset =
              currentSuspensionTopOffset > maxTopOffset
                ? maxTopOffset
                : currentSuspensionTopOffset;
            /* 不允许小于0 */
            currentSuspensionLeftOffset =
              currentSuspensionLeftOffset < 0 ? 0 : currentSuspensionLeftOffset;
            /* 不允许小于0 */
            currentSuspensionTopOffset =
              currentSuspensionTopOffset < 0 ? 0 : currentSuspensionTopOffset;
            if (NetDiskUI.suspension.isTopWindow()) {
              GM_setValue("suspensionX", currentSuspensionLeftOffset);
              GM_setValue("suspensionY", currentSuspensionTopOffset);
            }

            DOMUtils.css(needDragElement, {
              left: currentSuspensionLeftOffset + "px",
              top: currentSuspensionTopOffset + "px",
            });
          }

          /**
           * 停止移动
           */
          if (event.phase === "end") {
            moveFlag = false;
            DOMUtils.css(needDragElement, {
              cursor: "auto",
            });
            /* 获取当前悬浮按钮left偏移 */
            let currentSuspensionLeftOffset = parseInt(
              DOMUtils.css(needDragElement, "left")
            );
            let setCSSLeft = 0;
            /* 判断悬浮按钮是否在右边区域 */
            if (currentSuspensionLeftOffset >= DOMUtils.width(globalThis) / 2) {
              /* 设置悬浮按钮的left偏移 */
              setCSSLeft = DOMUtils.width(globalThis) - NetDiskUI.size;
              if (NetDiskUI.suspension.isTopWindow()) {
                GM_setValue("isRight", true);
              }
            } else {
              if (NetDiskUI.suspension.isTopWindow()) {
                GM_setValue("isRight", false);
              }
            }
            if (NetDiskUI.suspension.isTopWindow()) {
              GM_setValue("suspensionX", setCSSLeft);
            }

            DOMUtils.css(needDragElement, {
              left: setCSSLeft + "px",
              transition: "left 300ms ease 0s",
            });
          }
        });
        /**
         * 设置悬浮按钮 点击/按下事件
         */
        dragNode.on(["click", "tap"], function (event) {
          clearTimeout(netDiskLinkViewTimer);
          netDiskLinkViewTimer = null;
          if (isDouble) {
            isDouble = false;
            /* 判定为双击 */
            NetDiskUI.suspension.showSettingView();
          } else {
            netDiskLinkViewTimer = setTimeout(() => {
              isDouble = false;
              NetDiskUI.view.show();
            }, 200);
            isDouble = true;
          }
        });
        NetDiskUI.view.registerContextMenu(needDragElement, undefined, [
          {
            text: "设置",
            callback() {
              log.info("打开-设置");
              NetDiskUI.suspension.showSettingView();
            },
          },
          {
            text: "历史匹配记录",
            callback() {
              log.info("打开-历史匹配记录");
              NetDiskUI.netDiskHistoryMatch.show();
            },
          },
          {
            text: "访问码规则",
            callback() {
              log.info("打开-访问码规则");
              NetDiskUI.accessCodeRule.show();
            },
          },
          {
            text: "自定义规则",
            callback() {
              log.info("打开-自定义规则");
              NetDiskUI.customRules.show();
            },
          },
          {
            text: "主动识别文本",
            callback() {
              log.info("打开-主动识别文本");
              NetDiskUI.matchPasteText.show();
            },
          },
        ]);
      },
      /**
       * 设置window的resize事件监听，来重新设置悬浮按钮的位置
       */
      setResizeEventListener() {
        DOMUtils.on(globalThis, "resize", undefined, () => {
          let activeElement = document.activeElement;
          if (utils.isPhone()) {
            if (["input", "textarea"].includes(activeElement.localName)) {
              /* 可能是移动端的输入框弹出的键盘导致的resize */
              return;
            } else if (
              (activeElement.hasAttribute("contenteditable") &&
                activeElement.getAttribute("contenteditable") === "true") ||
              activeElement.closest("[contenteditable='true']")
            ) {
              /* 可能是移动端的输入框弹出的键盘导致的resize */
              return;
            }
          }
          this.setSuspensionPosition();
        });
      },
      /**
       * 设置悬浮按钮位置
       */
      setSuspensionPosition() {
        /* 最大的left偏移*/
        let maxLeftOffset = DOMUtils.width(globalThis) - NetDiskUI.size;
        /* 最大的top偏移 */
        let maxTopOffset = DOMUtils.height(globalThis) - NetDiskUI.size;
        /* 默认的left偏移（悬浮按钮在右边中间） */
        let defaultLeftOffset = maxLeftOffset;
        /* 默认的top偏移（悬浮按钮在右边中间） */
        let defaultTopOffset = maxTopOffset / 2;
        /* 用户自己拖动设置的悬浮按钮left偏移 */
        let userSetLeftOffset = GM_getValue("suspensionX", defaultLeftOffset);

        /* 用户自己拖动设置的悬浮按钮top偏移 */
        let userSetTopOffset = GM_getValue("suspensionY", defaultTopOffset);

        /* 如果存在isRight变量，悬浮按钮放到最右边，否则最左边 */
        if (GM_getValue("isRight")) {
          userSetLeftOffset = maxLeftOffset;
        } else {
          userSetLeftOffset = 0;
        }
        /* 如果用户设置的top偏移超出最大的top偏移，那么设置用户的偏移为默认的最大top偏移 */
        if (userSetTopOffset > maxTopOffset) {
          userSetTopOffset = maxTopOffset;
        } else if (userSetTopOffset < 0) {
          /* 如果用户设置的top偏移为负的，那么是超出边界，归位设置为0 */
          userSetTopOffset = 0;
        }

        if (NetDiskUI.suspension.isTopWindow()) {
          /* 当前窗口是顶部窗口，才可以保存移动的值 */
          GM_setValue("suspensionX", userSetLeftOffset);
          GM_setValue("suspensionY", userSetTopOffset);
        }

        DOMUtils.css("#whitesevSuspensionId", {
          left: userSetLeftOffset + "px",
          top: userSetTopOffset + "px",
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
          NetDiskUI.isMatchedNetDiskIconMap.forEach((item) => {
            resultList = [...resultList, NetDiskUI.src.icon[item]];
          });
          return resultList;
        }
        /**
         * 进行切换 淡入淡出
         * @param {number} fadeTime 淡入\淡出的时间
         * @param {string} currentBackgroundSrc 当前的背景资源
         */
        function startSwitch(fadeTime, currentBackgroundSrc) {
          currentList = getRandBgList();
          DOMUtils.fadeOut(randBgNode, fadeTime, function () {
            currentIndex++;
            currentIndex = currentIndex < currentList.length ? currentIndex : 0;
            currentBackgroundSrc = currentList[currentIndex];
            DOMUtils.css(
              randBgNode,
              "background-image",
              `url(${currentBackgroundSrc})`
            );
            DOMUtils.fadeIn(randBgNode, fadeTime, function () {
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
        let randBgNode = document.querySelector(".whitesevSuspension .netdisk");
        DOMUtils.css(randBgNode, "background-image", `url(${randBgSrc})`);
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
     * 主视图
     */
    view: {
      isInitCSS: false,
      isRegisterEvent: false,
      show() {
        if (!this.isInitCSS) {
          this.isInitCSS = true;
          this.addCSS();
        }
        if (!this.isRegisterEvent) {
          this.isRegisterEvent = true;
          this.registerIconGotoPagePosition();
          this.registerNetDiskUrlContextMenu();
          this.setNetDiskUrlClickEvent(".netdisk-url a");
        }
        if (!NetDiskUI.uiLinkAlias) {
          this.createView();
        } else {
          NetDiskUI.uiLinkAlias.show();
        }
      },
      addCSS() {
        GM_addStyle(`
				.netdisk-url-box:last-child{padding:0 0 10px 0}
        .netdisk-url-div{display:flex;align-items:center;width:100%;margin:10px 0}
        .netdisk-icon{margin:0 4px;display:contents}
        .netdisk-icon .netdisk-icon-img{
          cursor: pointer;
          width:28px;
          height:28px;
          min-width:28px;
          min-height:28px;
          font-size:13px!important;
          margin-left: 10px;
        }
        .netdisk-icon .netdisk-icon-img,
        .netdisk-url a {
          border-radius: 10px;
          box-shadow: 0 .3px .6px rgb(0 0 0 / 6%),0 .7px 1.3px rgb(0 0 0 / 8%),0 1.3px 2.5px rgb(0 0 0 / 10%),0 2.2px 4.5px rgb(0 0 0 / 12%),0 4.2px 8.4px rgb(0 0 0 / 14%),0 10px 20px rgb(0 0 0 / 20%)
        }
        .whitesevPop .netdisk-url{padding:5px 0;margin:0 10px}
        .netdisk-url a {
          color: #ff4848!important;
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
          word-break: break-word
        }
        .whitesevPop-whitesevPopSetting :focus-visible{outline-offset:0;outline:0}
        .netdisk-url a[isvisited=true]{color:#8b8888!important}
        .netdisk-url a:active{box-shadow:0 0 0 1px #616161 inset}
        .netdisk-url a:focus-visible{outline:0}
        .whitesevPop-content p[pop]{text-indent:0}
        .whitesevPop-button[type=primary]{border-color:#2d8cf0;background-color:#2d8cf0}
				`);
      },
      /**
       * 创建视图
       */
      createView() {
        let viewAddHTML = "";
        NetDiskUI.isMatchedNetDiskIconMap.forEach((netDiskName) => {
          let netDisk = NetDisk.linkDict.get(netDiskName);
          Object.keys(netDisk.getItems()).forEach((shareCode) => {
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
        NetDiskUI.uiLinkAlias = NetDiskPops.alert(
          {
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
                callback(event) {
                  NetDiskUI.uiLinkAlias = null;
                  event.close();
                },
              },
              close: {
                callback(event) {
                  NetDiskUI.uiLinkAlias = null;
                  event.close();
                },
              },
            },
            mask: {
              enable: true,
              clickEvent: {
                toHide: false,
                toClose: true,
              },
              clickCallBack() {
                NetDiskUI.uiLinkAlias.close();
                NetDiskUI.uiLinkAlias = null;
              },
            },
            class: "whitesevPop",
          },
          NetDiskUI.popsStyle.mainView
        );
      },
      /**
       * 获取视图html
       * @param {string} netDiskImgSrc 网盘图标src
       * @param {string} netDiskName 网盘名称
       * @param {number} netDiskIndex 网盘名称索引下标
       * @param {string} shareCode
       * @param {string} accessCode
       * @param {string} uiLinkText 显示出来的链接文本
       * @returns {string}
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
							<div class="netdisk-icon-img"
                  style="background: url(${netDiskImgSrc}) no-repeat;background-size: 100%;"
                  data-netdisk="${netDiskName}"
                  data-sharecode="${shareCode}"
                  data-accesscode="${accessCode}">
						  </div>
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
       * @param {string} clickNodeSelector - 元素选择器
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
            NetDiskParse.openScheme(
              netDiskName,
              netDiskIndex,
              shareCode,
              accessCode
            );
          } else {
            NetDiskParse.copyText(
              netDiskName,
              netDiskIndex,
              shareCode,
              accessCode
            );
          }
        }
        DOMUtils.on(document.body, "click", clickNodeSelector, clickEvent);
      },
      /**
       * 注册右键菜单
       * @param {HTMLElement|Window} target
       * @param {?string} selector
       * @param {{text:string,callback:Function}[]} showTextList 右键菜单的内容
       * @param {string} className className属性
       */
      registerContextMenu(
        target,
        selector,
        showTextList = [],
        className = "whitesevSuspensionContextMenu"
      ) {
        let data = [];
        showTextList.forEach((item) => {
          data.push({
            icon: "",
            text: item.text,
            callback: item.callback,
          });
        });
        pops.rightClickMenu({
          target: target,
          targetSelector: selector,
          data: data,
          className: className,
        });
      },
      /**
       * 添加新的链接
       * @param {string} netDiskName 网盘名称
       * @param {number} netDiskIndex 网盘名称索引下标
       * @param {string} shareCode
       * @param {string} accessCode
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
        DOMUtils.append(
          NetDiskUI.uiLinkAlias.popsElement.querySelector(
            ".netdisk-url-box-all"
          ),
          insertDOM
        );
      },
      /**
       * 修改已存在的view
       * @param {string} netDiskName 网盘名称
       * @param {number} netDiskIndex 网盘名称索引下标
       * @param {string} shareCode
       * @param {string} accessCode
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
        let needChangeDOM = NetDiskUI.uiLinkAlias.popsElement.querySelector(
          `.netdisk-url a[data-sharecode='${shareCode}'][data-netdisk-index='${netDiskIndex}']`
        );
        log.info("修改网盘链接视图");
        log.info(needChangeDOM);
        needChangeDOM.setAttribute("data-accesscode", accessCode);
        DOMUtils.html(needChangeDOM, uiLink);
      },
      /**
       * 设置点击图标按钮导航至该网盘链接所在网页中位置
       */
      registerIconGotoPagePosition() {
        DOMUtils.on(
          document,
          "click",
          ".whitesevPop .netdisk-icon .netdisk-icon-img",
          function (event) {
            let dataSharecode = event.target.getAttribute("data-sharecode");
            utils.findWebPageVisibleText(dataSharecode, true);
          }
        );
      },
      /**
       * 设置全局监听url的右击菜单事件
       */
      registerNetDiskUrlContextMenu() {
        NetDiskUI.view.registerContextMenu(
          document,
          ".whitesevPop .netdisk-url a",
          [
            {
              text: "复制链接",
              callback: function (event, contextMenuEvent) {
                let linkElement = contextMenuEvent.target;
                let netDiskName = linkElement.getAttribute("data-netdisk");
                let netDiskIndex =
                  linkElement.getAttribute("data-netdisk-index");
                let shareCode = linkElement.getAttribute("data-sharecode");
                let accessCode = linkElement.getAttribute("data-accesscode");
                NetDiskParse.copyText(
                  netDiskName,
                  netDiskIndex,
                  shareCode,
                  accessCode
                );
              },
            },
            {
              text: "访问链接",
              callback: function (event, contextMenuEvent) {
                let linkElement = contextMenuEvent.target;
                let netDiskName = linkElement.getAttribute("data-netdisk");
                let netDiskIndex =
                  linkElement.getAttribute("data-netdisk-index");
                let shareCode = linkElement.getAttribute("data-sharecode");
                let accessCode = linkElement.getAttribute("data-accesscode");
                let url = NetDisk.regular[netDiskName][netDiskIndex].blank
                  .replace(/{#shareCode#}/gi, shareCode)
                  .replace(/{#accessCode#}/gi, accessCode);
                NetDiskParse.blank(url, netDiskName, shareCode, accessCode);
              },
            },
            {
              text: "修改访问码",
              callback: function (event, contextMenuEvent) {
                let linkElement = contextMenuEvent.target;
                let netDiskName = linkElement.getAttribute("data-netdisk");
                let netDiskIndex =
                  linkElement.getAttribute("data-netdisk-index");
                let shareCode = linkElement.getAttribute("data-sharecode");
                let accessCode = linkElement.getAttribute("data-accesscode");
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
          ]
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
          .pops-folder-list .list-name-text{
            max-width: 300px;
          }
          .netdisk-static-link-onefile .pops-folder-list .list-name-text{
            max-width: 220px;
          }
          .netdisk-static-link-onefile .pops-mobile-folder-content .pops-folder-list .list-name-text{
            max-width: unset;
          }
          `);
        }
      },
      /**
       * 单文件直链弹窗
       * @param {{
       * title: string,
       * fileName: string,
       * fileType: ?string,
       * fileSize: ?string,
       * downloadUrl: string,
       * fileUploadTime: ?string,
       * fileLatestTime: ?string
       * clickCallBack: ?(_fileDetails_:{
       *    title:string,
       *    fileName:string,
       *    fileType:?string,
       *    fileSize:?string,
       *    downloadUrl:string,
       *    fileUploadTime:?string,
       *    fileLatestTime:?string,
       * })=>{}
       * }} fileDetails 配置
       */
      oneFile(fileDetails) {
        this.addCSS();
        log.success(["成功获取单文件直链", fileDetails]);
        Qmsg.success("成功获取单文件直链");
        NetDiskPops.folder(
          {
            title: {
              text: fileDetails.title,
            },
            folder: [
              {
                fileName: fileDetails.fileName,
                fileSize: fileDetails.fileSize,
                fileType: fileDetails.fileType ?? "",
                createTime:
                  fileDetails.fileUploadTime || fileDetails.fileLatestTime,
                latestTime:
                  fileDetails.fileLatestTime || fileDetails.fileUploadTime,
                isFolder: false,
                index: 0,
                async clickEvent() {
                  if (typeof fileDetails.clickCallBack === "function") {
                    fileDetails.clickCallBack(fileDetails);
                  } else {
                    return {
                      autoDownload: true,
                      url: fileDetails.downloadUrl,
                    };
                  }
                },
              },
            ],
            btn: {
              ok: {
                text: "下载",
                callback() {
                  if (typeof fileDetails.clickCallBack === "function") {
                    fileDetails.clickCallBack(fileDetails);
                  } else {
                    window.open(fileDetails.downloadUrl, "_blank");
                  }
                },
              },
            },
            class: "netdisk-static-link-onefile",
          },
          NetDiskUI.popsStyle.oneFileStaticView
        );
      },
      /**
       * 多文件直链弹窗
       * @param {string} title 标题
       * @param {?{
       * fileName: string,
       * fileSize: string|number,
       * fileType: ?string,
       * createTime: ?string,
       * latestTime: ?string,
       * isFolder: boolean,
       * index: ?number,
       * clickCallBack: ?(event:Event,_config_: object)=>{}
       * }[]} [folderInfoList=[]] 文件夹信息
       */
      moreFile(title, folderInfoList = []) {
        this.addCSS();
        Qmsg.success("成功获取多文件直链");
        log.success(["多文件直链信息", folderInfoList]);
        NetDiskPops.folder(
          {
            title: {
              text: title,
            },
            folder: folderInfoList,
          },
          NetDiskUI.popsStyle.moreFileStaticView
        );
      },
    },
    /**
     * 需要重新输入新密码的弹窗
     * @param {string} [title="密码错误"] 标题
     * @param {string} [netDiskName=""] 网盘名称
     * @param {number} netDiskIndex 网盘名称索引下标
     * @param {string} shareCode
     * @param {Function} [okCallBack=()=>{}]
     */
    newAccessCodeView(
      title = "密码错误",
      netDiskName = "",
      netDiskIndex,
      shareCode,
      okCallBack = () => {}
    ) {
      NetDiskPops.prompt(
        {
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
                let currentItemSelector = `.netdisk-url a[data-netdisk='${netDiskName}'][data-sharecode='${shareCode}']`;
                let currentHistoryItemSelector = `.netdiskrecord-link a[data-netdisk='${netDiskName}'][data-sharecode='${shareCode}']`;
                let currentItemElement =
                  document.querySelector(currentItemSelector);
                let currentHistoryItemElement = document.querySelector(
                  currentHistoryItemSelector
                );
                if (currentItemElement) {
                  currentItemElement.setAttribute(
                    "data-accesscode",
                    userInputAccessCode
                  );
                  DOMUtils.html(currentItemElement, uiLink);
                }
                /* 历史记录的弹出的 */
                if (currentHistoryItemElement) {
                  currentHistoryItemElement.setAttribute(
                    "data-accesscode",
                    userInputAccessCode
                  );
                  DOMUtils.html(currentHistoryItemElement, uiLink);
                }

                log.info(
                  `${netDiskName} 重新输入的密码：${userInputAccessCode}`
                );
                okCallBack(userInputAccessCode);
                event.close();
              },
            },
          },
          content: {
            placeholder: "请重新输入密码",
            focus: true,
          },
        },
        NetDiskUI.popsStyle.inputNewAccessCodeView
      );
      /**
       * 注册键盘回车事件
       */
      utils.listenKeyboard(
        document.querySelector(".pops-prompt-content input"),
        "keypress",
        (keyName) => {
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
      /**
       * 本地存储的keyName
       */
      storageKey: "netDiskHistoryMatch",
      /**
       * 是否已添加CSS
       */
      isAddCss: false,
      /**
       * 是否已设置DOM事件
       */
      isSetSearchEvent: false,
      /**
       * 是否已设置其它DOM事件
       */
      isSetOtherEvent: false,
      /**
       * 显示弹窗
       */
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
        NetDiskPops.confirm(
          {
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
                callback(event) {
                  event.close();
                },
              },
              close: {
                callback(event) {
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
                  NetDiskPops.confirm({
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
                        callback(okEvent) {
                          that.clearNetDiskHistoryMatchData();
                          DOMUtils.remove(
                            ".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul li"
                          );
                          okEvent.close();
                          DOMUtils.html(
                            ".whitesevPopNetDiskHistoryMatch .netdiskrecord-page",
                            ""
                          );
                          DOMUtils.text(
                            ".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other",
                            DOMUtils.text(
                              document.querySelector(
                                ".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
                              )
                            ).replace(/[\d]+/gi, "0")
                          );
                        },
                      },
                      cancel: {
                        text: "取消",
                        enable: true,
                      },
                    },
                  });
                },
              },
            },
            class: "whitesevPopNetDiskHistoryMatch",
          },
          NetDiskUI.popsStyle.historyMatchView
        );
        this.setDataPaging(data);
        this.setEvent();
        this.setSearchEvent();
        this.setContextMenuEvent();
      },
      /**
       * 添加CSS
       */
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
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon .netdisk-icon-img{
          width: 28px;
          height: 28px;
          min-width: 28px;
          min-height: 28px;
          font-size: 13px!important;
          border-radius: 10px;
          box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
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
       * @param {object} item
       * @param {number} index item的索引
       * @returns {string}
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
            <div class="netdisk-icon-img" style="background: url(${
              NetDiskUI.src.icon[item.netDiskName]
            }) no-repeat;background-size:100%"></div>
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
            ${utils.formatTime(item.addTime)}
          </div>
          <div class="netdiskrecord-update-time">
            <p>更新时间</p>
            ${utils.formatTime(item.updateTime)}
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
          DOMUtils.on(
            document,
            "click",
            ".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete",
            function (event) {
              /* 删除中的遮罩层 */
              let deleteLoading = NetDiskPops.loading({
                parent: document.querySelector(
                  ".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul"
                ),
                content: {
                  text: "删除中...",
                },
                only: true,
              });
              let clickNode = event.target;
              let dataJSON = clickNode.getAttribute("data-json");
              clickNode.closest("li")?.remove();
              that.deleteNetDiskHistoryMatchData(dataJSON);
              deleteLoading?.close();
              let totalNumberText = DOMUtils.text(
                document.querySelector(
                  ".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
                )
              );
              let totalNumber = totalNumberText.match(/[\d]+/gi);
              totalNumber = parseInt(totalNumber[totalNumber.length - 1]);
              totalNumber--;
              totalNumberText = totalNumberText.replace(/[\d]+/gi, totalNumber);
              DOMUtils.text(
                document.querySelector(
                  ".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
                ),
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

        let dataPaging = new DataPaging({
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
            DOMUtils.remove(
              ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
            );
            DOMUtils.append(
              document.querySelector(
                ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul"
              ),
              dataHTML
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
          searchLoading = NetDiskPops.loading({
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
            DOMUtils.remove(
              ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
            );
            DOMUtils.append(
              document.querySelector(
                ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul"
              ),
              historyDataHTML
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
          DOMUtils.remove(
            ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
          );
          DOMUtils.append(
            ".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul",
            isFindHTML
          );
          DOMUtils.remove(
            ".whitesevPopNetDiskHistoryMatch .netdiskrecord-page > *"
          );
          searchLoading?.close();
          searchLoading = null;
          isSeaching = false;
        }

        utils.listenKeyboard(
          document.querySelector(
            ".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
          ),
          "keypress",
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
        NetDiskUI.view.registerContextMenu(
          document.querySelector(".whitesevPopNetDiskHistoryMatch"),
          ".netdiskrecord-link a",
          [
            {
              text: "复制链接",
              callback: function (event, contextMenuEvent) {
                let linkElement = contextMenuEvent.target;
                let netDiskName = linkElement.getAttribute("data-netdisk");
                let netDiskIndex =
                  linkElement.getAttribute("data-netdisk-index");
                let shareCode = linkElement.getAttribute("data-sharecode");
                let accessCode = linkElement.getAttribute("data-accesscode");
                NetDiskParse.copyText(
                  netDiskName,
                  netDiskIndex,
                  shareCode,
                  accessCode
                );
              },
            },
            {
              text: "访问链接",
              callback: function (event, contextMenuEvent) {
                let linkElement = contextMenuEvent.target;
                let netDiskName = linkElement.getAttribute("data-netdisk");
                let netDiskIndex =
                  linkElement.getAttribute("data-netdisk-index");
                let shareCode = linkElement.getAttribute("data-sharecode");
                let accessCode = linkElement.getAttribute("data-accesscode");
                let url = NetDiskParse.getBlankUrl(
                  netDiskName,
                  netDiskIndex,
                  shareCode,
                  accessCode
                );
                NetDiskParse.blank(url, netDiskName, shareCode, accessCode);
              },
            },
            {
              text: "修改访问码",
              callback: function (event, contextMenuEvent) {
                let linkElement = contextMenuEvent.target;
                let netDiskName = linkElement.getAttribute("data-netdisk");
                let netDiskIndex = parseInt(
                  linkElement.getAttribute("data-netdisk-index")
                );
                let shareCode = linkElement.getAttribute("data-sharecode");
                let accessCode = linkElement.getAttribute("data-accesscode");
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
                        item = utils.assign(item, {
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
                      linkElement
                        .closest("li")
                        .querySelector(
                          ".netdiskrecord-update-time"
                        ).lastChild.textContent = utils.formatTime(currentTime);
                      linkElement.setAttribute(
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
          ]
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

        utils.sortListByProperty(
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
       * @param {string} netDiskName 网盘名称
       * @param {number} netDiskIndex 网盘名称索引下标
       * @param {string} shareCode
       * @param {string} accessCode
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
       * @param {string} dataJSONText
       */
      deleteNetDiskHistoryMatchData(dataJSONText) {
        let data = this.getNetDiskHistoryMatchData();
        for (let index = 0; index < data.length; index++) {
          if (JSON.stringify(data[index]) === dataJSONText) {
            log.success("删除 ===> ", data[index]);
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
     * 自定义访问码规则，用于设置某个网站下的某个网盘链接的固定访问码
     */
    accessCodeRule: {
      /**
       * 是否已初始化
       */
      isInit: false,
      /**
       * 弹窗的className
       */
      accessCodeRuleDialogClassName: "whitesevPopNetDiskAccessCodeRule",
      /**
       * 显示弹窗
       */
      show() {
        let that = this;
        this.init();
        let popsConfirm = NetDiskPops.confirm(
          {
            title: {
              text: "自定义访问码规则",
              position: "center",
            },
            content: {
              text: `
            <div class="netdisk-accesscode-rule-table">
              <ul>
              ${that.getShowItemHTML()}
              </ul>
            </div>
            `,
              html: true,
            },
            btn: {
              merge: true,
              reverse: false,
              position: "space-between",
              ok: {
                enable: true,
                text: "添加",
                callback(event) {
                  that.showRule(event);
                },
              },
              close: {
                callback(event) {
                  event.close();
                },
              },
              cancel: {
                enable: true,
              },
              other: {
                enable: true,
                type: "xiaomi-primary",
                text: `清空所有`,
                callback(event) {
                  NetDiskPops.confirm({
                    title: {
                      text: "删除",
                      position: "center",
                    },
                    content: {
                      text: "确定清空所有的规则？",
                      html: false,
                    },
                    btn: {
                      ok: {
                        enable: true,
                        callback: function (okEvent) {
                          log.success("清空所有");
                          that.deleteAllValue();
                          if (that.getValue().length) {
                            Qmsg.error("清空全部规则失败");
                            return;
                          } else {
                            Qmsg.success("已清空全部规则");
                          }
                          that.setDeleteAllBtnText(event.animElement);
                          event.animElement.querySelector(
                            ".pops-confirm-content ul"
                          ).innerHTML = "";
                          okEvent.close();
                        },
                      },
                      cancel: {
                        text: "取消",
                        enable: true,
                      },
                    },
                  });
                },
              },
            },
            class: this.accessCodeRuleDialogClassName,
          },
          NetDiskUI.popsStyle.accessCodeRuleView
        );
        that.setDeleteAllBtnText(popsConfirm.animElement);
        this.setEvent(popsConfirm);
      },
      getShowItemHTML() {
        let result = "";
        this.getValue().forEach((item) => {
          let netdiskName = "";
          item.netdisk.forEach((_netdisk_) => {
            netdiskName += _netdisk_.name;
            netdiskName += "、";
          });
          netdiskName = netdiskName.replace(/、$/g, "");
          result += `
          <li>
            <div class="accesscode-rule-url-regexp">
              <p>匹配规则</p>
              ${item.urlRegexp}
            </div>
            <div class="accesscode-rule-netdisk-name">
              <p>匹配网盘</p>
              ${netdiskName}
            </div>
            <div class="accesscode-rule-accesscode">
              <p>固定值</p>
              ${item.accessCode}
            </div>
            <div class="accesscode-rule-functions" data-json='${JSON.stringify(
              item
            )}'>
              <p>功能</p>
              <button style="background: #46cb31;color: #fff;" data-edit>修改</button>
              <button style="background: #263cf3;color: #fff;" data-delete>删除</button>
            </div>
          </li>
          `;
        });
        return result;
      },
      init() {
        if (this.isInit) {
          return;
        }
        GM_addStyle(`
        .pops-confirm-content .whitesev-accesscode-rule{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 15px 15px;
        }
        
        .pops-confirm-content div.netdisk-accesscode-rule-table{
          /* height: calc( 85% - 40px); */
          overflow: auto;
        }

        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-url-regexp,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-netdisk-name,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-accesscode,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-functions{
          display: flex;
          margin: 5px 0px;
        }

        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-url-regexp p,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-netdisk-name p,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-accesscode p,
        .pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-functions p{
          min-width: 80px;
          max-width: 80px;
          align-self: center;
        }
        .pops-confirm-content .netdisk-accesscode-rule-table li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-radius: 10px;
          box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
          margin: 20px 10px;
          padding: 10px;
        }
        `);
      },
      /**
       * 显示规则弹窗进行添加/修改
       * @param {object} mainEvent
       * @param {boolean} isEdit 是否是修改模式
       * @param {{
       * urlRegexp: string,
       * netdisk: {
       *  name:string,
       *  value:string,
       * }[],
       * accessCode: string,
       * }} oldValue 当isEdie为true时传入的值
       */
      showRule(mainEvent, isEdit = false, oldValue) {
        let that = this;
        let popsConfirm = NetDiskPops.confirm(
          {
            title: {
              text: isEdit ? "修改规则" : "添加规则",
              position: "center",
            },
            content: {
              text: `
              <div class="whitesev-accesscode-rule">
                <div type-name>匹配网站</div>
                <input type="text" placeholder="请输入需要匹配的正则规则" val-key="access-rule-url" />
              </div>
              <div class="whitesev-accesscode-rule">
                <div>匹配网盘</div>
                <select val-key="access-rule-netdisk" multiple="true" style="height: auto;">
                  <option data-value="baidu">百度网盘</option>
                  <option data-value="lanzou">蓝奏云</option>
                  <option data-value="tianyiyun">天翼云</option>
                  <option data-value="hecaiyun">中国移动云盘</option>
                  <option data-value="aliyun">阿里云</option>
                  <option data-value="wenshushu">文叔叔</option>
                  <option data-value="nainiu">奶牛</option>
                  <option data-value="_123pan">123盘</option>
                  <option data-value="weiyun">微云</option>
                  <option data-value="xunlei">迅雷云盘</option>
                  <option data-value="_115pan">115网盘</option>
                  <option data-value="chengtong">城通网盘</option>
                  <option data-value="kuake">夸克网盘</option>
                  <option data-value="jianguoyun">坚果云</option>
                  <option data-value="onedrive">OneDrive</option>
                </select>
              </div>
              <div class="whitesev-accesscode-rule">
                <div>固定值</div>
                <input type="text" placeholder="请输入固定的访问码" val-key="access-rule-accesscode" />
              </div>
            `,
              html: true,
            },
            btn: {
              ok: {
                enable: true,
                text: isEdit ? "修改" : "添加",
                callback(event) {
                  let accessRuleUrl = event.popsElement.querySelector(
                    'input[val-key="access-rule-url"]'
                  ).value;
                  /**
                   * @type {{name:string,value:string}[]}
                   */
                  let accessRuleNetDisk = [];
                  let accessRuleNetDiskElement =
                    event.popsElement.querySelector(
                      'select[val-key="access-rule-netdisk"]'
                    );
                  Array.from(accessRuleNetDiskElement.selectedOptions).forEach(
                    (item) => {
                      accessRuleNetDisk.push({
                        name: item.value,
                        value: item.getAttribute("data-value"),
                      });
                    }
                  );
                  let accessRuleAccessCode = event.popsElement.querySelector(
                    'input[val-key="access-rule-accesscode"]'
                  ).value;
                  if (!that.checkRuleUrlValid(accessRuleUrl)) {
                    log.error(["验证失败", accessRuleUrl]);
                    return;
                  }
                  if (isEdit) {
                    /* 编辑 */
                    if (
                      that.changeValue(oldValue, {
                        urlRegexp: accessRuleUrl,
                        netdisk: accessRuleNetDisk,
                        accessCode: accessRuleAccessCode,
                      })
                    ) {
                      log.success([
                        "修改成功",
                        {
                          urlRegexp: accessRuleUrl,
                          netdisk: accessRuleNetDisk,
                          accessCode: accessRuleAccessCode,
                        },
                      ]);
                      Qmsg.success("修改成功");
                      mainEvent.animElement.querySelector(
                        ".netdisk-accesscode-rule-table ul"
                      ).innerHTML = that.getShowItemHTML();
                      popsConfirm.close();
                    } else {
                      Qmsg.error("修改失败");
                    }
                  } else {
                    /* 添加 */
                    if (
                      that.addValue({
                        urlRegexp: accessRuleUrl,
                        netdisk: accessRuleNetDisk,
                        accessCode: accessRuleAccessCode,
                      })
                    ) {
                      Qmsg.success("添加成功");
                      mainEvent.animElement.querySelector(
                        ".netdisk-accesscode-rule-table ul"
                      ).innerHTML = that.getShowItemHTML();
                      that.setDeleteAllBtnText(mainEvent.animElement);
                      popsConfirm.close();
                    } else {
                      Qmsg.error("已存在重复的规则");
                    }
                  }
                },
              },
              cancel: {
                text: "取消",
                enable: true,
              },
            },
            class: "whitesevPopNetDiskAccessCodeRuleAddOrEdit",
          },
          NetDiskUI.popsStyle.accessCodeRuleEditView
        );
        this.setRuleEvent(popsConfirm.element);
        if (isEdit) {
          popsConfirm.element.querySelector(
            '.whitesev-accesscode-rule input[val-key="access-rule-url"]'
          ).value = oldValue.urlRegexp;
          let optionElement = popsConfirm.element.querySelectorAll(
            '.whitesev-accesscode-rule select[val-key="access-rule-netdisk"] option'
          );
          oldValue.netdisk.forEach((item) => {
            optionElement.forEach((element) => {
              if (element.getAttribute("data-value") === item.value) {
                element.selected = true;
                log.success(["选中", element]);
                return;
              }
            });
          });
          popsConfirm.element.querySelector(
            '.whitesev-accesscode-rule input[val-key="access-rule-accesscode"]'
          ).value = oldValue.accessCode;
        }
      },
      /**
       * 修改 删除所有(xx)的文字
       * @param {HTMLElement} element
       */
      setDeleteAllBtnText(element) {
        (
          element.querySelector(
            ".pops-confirm-btn button.pops-confirm-btn-other"
          ) ||
          document.querySelector(
            ".whitesevPopNetDiskAccessCodeRule .pops-confirm-btn button.pops-confirm-btn-other"
          )
        ).textContent = `清空所有(${this.getValue().length})`;
      },
      /**
       * 校验填写的匹配网站正则规则是否正确
       * @param {string} accessRuleUrl 填写的匹配网站正则规则
       * @returns {boolean}
       */
      checkRuleUrlValid(accessRuleUrl) {
        if (utils.isNull(accessRuleUrl)) {
          Qmsg.error("匹配网站的正则不能为空或纯空格");
          return false;
        }
        try {
          new RegExp(accessRuleUrl);
        } catch (error) {
          log.error(error);
          Qmsg.error("匹配网站的正则错误</br>" + error.message, {
            html: true,
            timeout: 5000,
          });
          return false;
        }
        return true;
      },
      /**
       * 设置事件
       * @param {object} event
       */
      setEvent(event) {
        let that = this;
        DOMUtils.on(
          event.animElement,
          "click",
          ".netdisk-accesscode-rule-table div.accesscode-rule-functions button[data-delete]",
          function () {
            let dataJSON = this.closest(
              ".accesscode-rule-functions"
            ).getAttribute("data-json");
            dataJSON = utils.toJSON(dataJSON);
            log.success(["删除👉", dataJSON]);
            if (that.deleteValue(dataJSON)) {
              this.closest("li").remove();
              that.setDeleteAllBtnText(event.animElement);
            } else {
              Qmsg.error("删除失败");
            }
          }
        );
        DOMUtils.on(
          event.element,
          "click",
          ".netdisk-accesscode-rule-table div.accesscode-rule-functions button[data-edit]",
          function () {
            let dataJSON = this.closest(
              ".accesscode-rule-functions"
            ).getAttribute("data-json");
            dataJSON = utils.toJSON(dataJSON);
            log.success(["修改👉", dataJSON]);
            let newEvent = Object.assign({}, event);
            newEvent.animElement = newEvent.element;
            that.showRule(newEvent, true, dataJSON);
          }
        );
      },
      /**
       * 设置事件
       * @param {HTMLElement} element 弹窗元素
       */
      setRuleEvent(element) {},
      /**
       * 获取值
       * @returns {{
       * urlRegexp: string,
       * netdisk: {name:string,value:string}[]
       * accessCode: string,
       * }[]}
       */
      getValue() {
        return GM_getValue("accessCodeRule", []);
      },
      /**
       * 设置值
       * @param {{
       * urlRegexp: string,
       * netdisk: {name:string,value:string}[]
       * accessCode: string,
       * }} value
       */
      setValue(value) {
        let localData = this.getValue();
        localData.push(value);
        GM_setValue("accessCodeRule", localData);
      },
      /**
       * 修改值
       * @param {{
       * urlRegexp: string,
       * netdisk: {name:string,value:string}[]
       * accessCode: string,
       * }} oldValue
       * @param {{
       * urlRegexp: string,
       * netdisk: {name:string,value:string}[]
       * accessCode: string,
       * }} newValue
       * @returns {boolean} 是否修改成功
       */
      changeValue(oldValue, newValue) {
        let result = false;
        let localData = this.getValue();
        let oldValueStr = JSON.stringify(oldValue);
        for (let i = 0; i < localData.length; i++) {
          if (JSON.stringify(localData[i]) === oldValueStr) {
            localData[i] = newValue;
            result = true;
            break;
          }
        }
        GM_setValue("accessCodeRule", localData);
        return result;
      },
      /**
       * 添加值
       * @param {{
       * urlRegexp: string,
       * netdisk: {name:string,value:string}[]
       * accessCode: string,
       * }} value
       */
      addValue(value) {
        let result = true;
        let localData = this.getValue();
        for (let i = 0; i < localData.length; i++) {
          if (
            localData[i].urlRegexp === value.urlRegexp &&
            localData[i].netdisk === value.netdisk
          ) {
            result = false;
            break;
          }
        }
        if (result) {
          localData.push(value);
          this.setValue(value);
        }
        return result;
      },
      /**
       * 删除值
       */
      deleteValue(value) {
        let result = false;
        let localData = this.getValue();
        let valueStr = JSON.stringify(value);
        for (let i = 0; i < localData.length; i++) {
          if (JSON.stringify(localData[i]) === valueStr) {
            localData.splice(i, 1);
            result = true;
            break;
          }
        }
        if (result) {
          GM_setValue("accessCodeRule", localData);
        }
        return result;
      },
      /**
       * 清空所有规则
       */
      deleteAllValue() {
        GM_setValue("accessCodeRule", []);
      },
    },
    /**
     * 用户自定义规则
     */
    customRules: {
      isInitCSS: false,
      show() {
        let that = this;
        this.initCSS();
        let popsConfirm = NetDiskPops.confirm(
          {
            title: {
              text: "自定义规则",
              position: "center",
            },
            content: {
              text: `
            <textarea class="netdisk-custom-rules" placeholder="请输入自定义规则"></textarea>
            `,
              html: true,
            },
            btn: {
              merge: true,
              mergeReverse: false,
              reverse: false,
              position: "space-between",
              ok: {
                text: "保存",
                callback(event) {
                  let textAreaElement = event.popsElement.querySelector(
                    "textarea.netdisk-custom-rules"
                  );
                  try {
                    if (textAreaElement.value.trim() === "") {
                      NetDiskCustomRules.clearRule();
                      event.close();
                      return;
                    }
                    let ruleJSON = JSON.parse(textAreaElement.value);
                    if (!Array.isArray(ruleJSON)) {
                      Qmsg.error("该规则不是一个数组");
                      return;
                    }
                    let mustProperty = ["key", "icon", "regexp"];
                    let regexpMustProperty = [
                      "link_innerText",
                      "link_innerHTML",
                      "shareCode",
                      "shareCodeNeedRemoveStr",
                      "uiLinkShow",
                      "blank",
                      "copyUrl",
                    ];
                    for (let index = 0; index < ruleJSON.length; index++) {
                      let item = ruleJSON[index];
                      if (typeof item !== "object") {
                        Qmsg.error(`第${index + 1}条规则不是一个对象`);
                        return;
                      }
                      for (
                        let index2 = 0;
                        index2 < mustProperty.length;
                        index2++
                      ) {
                        let propertyName = mustProperty[index2];
                        if (!Object.hasOwnProperty.call(item, propertyName)) {
                          Qmsg.error(
                            `第${index + 1}条规则缺少属性 ${propertyName} `
                          );
                          return;
                        }
                      }
                      if (typeof item["regexp"] !== "object") {
                        Qmsg.error(`第${index + 1}条规则的regexp不是一个对象`);
                        return;
                      }
                      for (
                        let index2 = 0;
                        index2 < regexpMustProperty.length;
                        index2++
                      ) {
                        let propertyName = regexpMustProperty[index2];
                        if (
                          !Object.hasOwnProperty.call(
                            item["regexp"],
                            propertyName
                          )
                        ) {
                          Qmsg.error(
                            `第${
                              index + 1
                            }条规则中的regexp内缺少属性 ${propertyName}`
                          );
                          return;
                        }
                      }
                      if (
                        item["regexp"]["accessCode"] &&
                        !item["regexp"]["checkAccessCode"]
                      ) {
                        Qmsg.error(
                          `第${
                            index + 1
                          }条规则中的regexp内设置了accessCode但是没有设置checkAccessCode`
                        );
                        return;
                      }
                      if (
                        item["regexp"]["checkAccessCode"] &&
                        !item["regexp"]["accessCode"]
                      ) {
                        Qmsg.error(
                          `第${
                            index + 1
                          }条规则中的regexp内设置了checkAccessCode但是没有设置accessCode`
                        );
                        return;
                      }
                    }
                    NetDiskCustomRules.setRule(ruleJSON);
                    Qmsg.success(`保存规则${ruleJSON.length}条`);
                    event.close();
                  } catch (error) {
                    log.error(error);
                    Qmsg.error(error.message, {
                      html: true,
                      timeout: 3500,
                    });
                  }
                },
              },
              other: {
                enable: true,
                text: "格式化",
                type: "xiaomi-primary",
                callback(event) {
                  let textAreaElement = event.popsElement.querySelector(
                    "textarea.netdisk-custom-rules"
                  );
                  try {
                    let ruleJSON = JSON.parse(textAreaElement.value);
                    let ruleJSONString =
                      NetDiskCustomRules.getFormatRule(ruleJSON);
                    textAreaElement.value = ruleJSONString;
                    Qmsg.success("格式化成功");
                  } catch (error) {
                    log.error(error);
                    Qmsg.error(error.message, {
                      html: true,
                      timeout: 3500,
                    });
                  }
                },
              },
            },
            class: "whitesevPopNetDiskCustomRules",
          },
          NetDiskUI.popsStyle.customRulesView
        );
        popsConfirm.popsElement.querySelector("textarea").value =
          NetDiskCustomRules.getFormatRule();
      },
      initCSS() {
        if (this.isInitCSS) {
          return;
        }
        this.isInitCSS = true;
        GM_addStyle(`
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea{
          width: 100%;
          height: 100%;
          font-size: 16px;
        }
        /* textarea美化 */
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea{
          border: none;
          outline: none;
          padding: 0;
          margin: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: none;
          background-color: transparent;
        }
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:focus{
          outline: none;
        }
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea {
          display: inline-block;
          resize: vertical;
          padding: 5px 15px;
          line-height: 1.5;
          box-sizing: border-box;
          color: #606266;
          background-color: #fff;
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        /* 提示文字 */
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea::placeholder {
          color: #c0c4cc;
        }
      
        /* 鼠标hover */
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:hover {
          border-color: #c0c4cc;
        }
      
        /* 获得焦点 */
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:focus {
          border-color: #3677f0;
        }
        `);
      },
    },
    /**
     * 主动识别文本
     */
    matchPasteText: {
      isInitCSS: false,
      show() {
        this.initCSS();
        let popsConfirm = NetDiskPops.confirm(
          {
            title: {
              text: "主动识别文本",
              position: "center",
            },
            content: {
              text: `
            <textarea class="netdisk-match-paste-text"></textarea>
            `,
              html: true,
            },
            btn: {
              ok: {
                text: "识别",
                callback() {
                  NetDisk.clipboardText =
                    popsConfirm.popsElement?.querySelector(
                      ".netdisk-match-paste-text"
                    )?.value || "";
                  NetDisk.matchPageLink();
                },
              },
            },
            class: "whitesevPopNetDiskMatchPasteText",
          },
          NetDiskUI.popsStyle.matchPasteTextView
        );
        popsConfirm.popsElement.querySelector("textarea").focus();
      },
      initCSS() {
        if (this.isInitCSS) {
          return;
        }
        this.isInitCSS = true;
        GM_addStyle(`
        .netdisk-match-paste-text {
          display: inline-block;
          resize: vertical;
          padding: 5px 15px;
          line-height: 1.5;
          box-sizing: border-box;
          color: #606266;
          background-color: #fff;
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          outline: none;
          margin: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: none;
          width: 100%;
          height: 100%;
          font-size: 16px;
        }
        .netdisk-match-paste-text:focus{
            outline: none;
            border-color: #3677f0;
        }
        .netdisk-match-paste-text:hover{
            border-color: #c0c4cc;
        }
        `);
      },
    },
    /**
     * 监听页面节点内容或节点文本的变动，从而进行匹配网盘链接
     */
    monitorDOMInsert() {
      NetDiskWorker.initWorkerBlobLink();
      NetDiskWorker.initWorker();
      utils.mutationObserver(document.body || document.documentElement, {
        callback: async (mutations) => {
          if (NetDiskUI.isHandleMatch) {
            /* 当前正在处理文本正则匹配中 */
            return;
          }
          NetDiskUI.isHandleMatch = true;
          if (GM_getValue("readClipboard", false)) {
            NetDisk.clipboardText = await NetDisk.getClipboardText();
          }
          if (typeof NetDisk.clipboardText !== "string") {
            NetDisk.clipboardText = "";
          }
          NetDisk.matchPageLink();
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
      /* 主动触发一次，因为有的页面上没触发mutationObserver */
      NetDisk.matchPageLink();
    },
  };

  /**
   * 快捷键
   */
  const NetDiskShortcut = {
    /**
     * 是否正在等待用户按下键盘
     */
    isWaitUserPressKeyboard: false,
    /**
     * 获取本地存储的值
     * @param {?string} key
     * @param {?string} defaultVal
     * @returns {{
     * key: string,
     * value: {
     * keyName: string,
     * keyValue: number|string,
     * ohterCodeList: string[]
     * }
     * }|{
     * keyName: string,
     * keyValue: number|string,
     * ohterCodeList: string[]
     * }[]}
     */
    getValue(key, defaultVal) {
      let value = GM_getValue("GM_shortcut", []);
      if (key) {
        for (let index = 0; index < value.length; index++) {
          let item = value[index];
          if (item["key"] === key) {
            return item["value"];
          }
        }
        return defaultVal;
      } else {
        return value;
      }
    },
    /**
     * 删除本地存储的快捷键值
     * @param {string} key
     */
    deleteValue(key) {
      let value = this.getValue();
      let findValueIndex = value.findIndex((item) => item["key"] === key);
      if (findValueIndex !== -1) {
        value.splice(findValueIndex, 1);
      }
      GM_setValue("GM_shortcut", value);
    },
    /**
     * 保存设置的快捷键到本地存储
     * @param {string} key
     * @param {string} keyName
     * @param {string} keyValue
     * @param {string[]} ohterCodeList
     */
    setValue(key, keyName, keyValue, ohterCodeList) {
      let value = this.getValue();
      value.push({
        key: key,
        value: {
          keyName: keyName,
          keyValue: keyValue,
          ohterCodeList: ohterCodeList,
        },
      });
      GM_setValue("GM_shortcut", value);
    },
    /**
     * 获取快捷键显示的文字
     * @param {string} key
     * @param {string} defaultValue
     */
    getShowText(key, defaultValue) {
      let localValue = this.getValue(key);
      if (localValue) {
        /* 如果获取到，转需要显示的文字 */
        let result = "";
        localValue["ohterCodeList"].forEach((item) => {
          result += utils.stringTitleToUpperCase(item, true) + " + ";
        });
        result += localValue["keyName"];
        return result;
      } else {
        /* 未获取到，显示为默认的文字 */
        return defaultValue;
      }
    },
    /**
     * 快捷键按钮录入的点击事件
     */
    buttonClickCallBack(event, key, defaultValue) {
      let localValue = this.getValue(key, defaultValue);
      let spanElement = event.target
        .closest(".pops-panel-button")
        .querySelector("span");
      if (localValue === defaultValue) {
        /* 设置快捷键 */
        let loadingQmsg = Qmsg.loading("请按下快捷键...", {
          showClose: true,
          onClose() {
            keyboardListener.removeListen();
          },
        });
        NetDiskShortcut.isWaitUserPressKeyboard = true;
        let keyboardListener = utils.listenKeyboard(
          window,
          "keyup",
          (keyName, keyValue, ohterCodeList) => {
            let shortcutJSONString = JSON.stringify({
              keyName: keyName,
              keyValue: keyValue,
              ohterCodeList: ohterCodeList,
            });
            let allDetails = this.getValue();
            for (let index = 0; index < allDetails.length; index++) {
              if (
                shortcutJSONString ===
                JSON.stringify(allDetails[index]["value"])
              ) {
                Qmsg.error(
                  `快捷键 ${this.getShowText(
                    allDetails[index]["key"]
                  )} 已被占用`
                );
                NetDiskShortcut.isWaitUserPressKeyboard = false;
                loadingQmsg.close();
                return;
              }
            }
            this.setValue(key, keyName, keyValue, ohterCodeList);
            spanElement.innerHTML = this.getShowText(key, defaultValue);
            NetDiskShortcut.isWaitUserPressKeyboard = false;
            loadingQmsg.close();
          }
        );
      } else {
        /* 清空快捷键 */
        this.deleteValue(key);
      }

      spanElement.innerHTML = this.getShowText(key, defaultValue);
    },
    /**
     * 初始化全局键盘监听
     */
    initGlobalKeyboardListener() {
      let localValue = this.getValue();
      if (!localValue.length) {
        /* 没有设置快捷键 */
        return;
      }
      utils.listenKeyboard(
        window,
        "keydown",
        (keyName, keyValue, ohterCodeList) => {
          if (NetDiskShortcut.isWaitUserPressKeyboard) {
            return;
          }
          localValue = this.getValue();
          let findShortcutIndex = localValue.findIndex((item) => {
            let itemValue = item["value"];
            let tempValue = {
              keyName: keyName,
              keyValue: keyValue,
              ohterCodeList: ohterCodeList,
            };
            if (JSON.stringify(itemValue) === JSON.stringify(tempValue)) {
              return item;
            }
          });
          if (findShortcutIndex != -1) {
            let findShortcut = localValue[findShortcutIndex];
            log.info(["调用快捷键", findShortcut]);
            if (findShortcut["key"] === "netdisk-keyboard-open-setting") {
              log.info("打开设置界面");
              NetDiskUI.suspension.initPop();
              NetDiskUI.suspension.showSettingView();
            } else if (
              findShortcut["key"] ===
              "netdisk-keyboard-open-history-matching-records"
            ) {
              log.info("打开历史匹配记录");
              NetDiskUI.netDiskHistoryMatch.show();
            } else if (
              findShortcut["key"] === "netdisk-keyboard-open-accesscode-rule"
            ) {
              log.info("打开访问码规则");
              NetDiskUI.accessCodeRule.show();
            } else if (
              findShortcut["key"] === "netdisk-keyboard-open-user-rule"
            ) {
              log.info("打开用户自定义规则");
              NetDiskUI.customRules.show();
            } else if (
              findShortcut["key"] ===
              "netdisk-keyboard-open-proactively-recognize-text"
            ) {
              log.info("打开主动识别文本");
              NetDiskUI.matchPasteText.show();
            } else {
              log.error("还未配置调用函数");
            }
          }
        }
      );
    },
  };

  /**
   * 弹窗-统一管理
   */
  const NetDiskPops = {
    /**
     * 普通信息框
     * @param {object} details 配置
     * @param {{
     * PC: {
     *  width: string,
     *  height: string,
     * },
     * Mobile: {
     *  width: string,
     *  height: string
     * }
     * }} sizeConfig 大小配置
     * @returns {{
     * guid: string,
     * element: Element,
     * animElement: HTMLElement,
     * popsElement: Element,
     * maskElement: Element,
     * close: Function,
     * hide: Function,
     * show: Function,
     * }}
     */
    alert(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return pops.alert(details);
    },
    /**
     * 询问框
     * @param {object} details 配置
     * @param {?{
     * PC: {
     *  width: string,
     *  height: string,
     * },
     * Mobile: {
     *  width: string,
     *  height: string
     * }
     * }} sizeConfig 大小配置
     * @returns {{
     * guid: string,
     * element: HTMLElement,
     * animElement: HTMLElement,
     * popsElement: HTMLElement,
     * maskElement: HTMLElement,
     * close: Function,
     * hide: Function,
     * show: Function,
     * }}
     */
    confirm(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return pops.confirm(details);
    },
    /**
     * 加载层
     * @param {object} details 配置
     * @returns {{
     * guid: string,
     * element: Element,
     * animElement: HTMLElement,
     * popsElement: Element,
     * maskElement: Element,
     * close: Function,
     * hide: Function,
     * show: Function,
     * }}
     */
    loading(details) {
      if (typeof details["animation"] === "undefined") {
        details["animation"] = GM_getValue(
          "popsAnimation",
          NetDiskUI.defaultAnimation
        );
      }
      if (typeof details["forbiddenScroll"] === "undefined") {
        details["forbiddenScroll"] = NetDiskUI.defaultForbiddenScroll;
      }
      return pops.loading(details);
    },
    /**
     * 输入框
     * @param {object} details 配置
     * @param {?{
     * PC: {
     *  width: string,
     *  height: string,
     * },
     * Mobile: {
     *  width: string,
     *  height: string
     * }
     * }} sizeConfig 大小配置
     * @returns {{
     * guid: string,
     * element: Element,
     * animElement: HTMLElement,
     * popsElement: Element,
     * maskElement: Element,
     * close: Function,
     * hide: Function,
     * show: Function,
     * }}
     */
    prompt(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return pops.prompt(details);
    },
    /**
     * 文件夹
     * @param {object} details 配置
     * @returns {{
     * guid: string,
     * element: Element,
     * animElement: HTMLElement,
     * popsElement: Element,
     * maskElement: Element,
     * close: Function,
     * hide: Function,
     * show: Function,
     * }}
     */
    folder(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return pops.folder(details);
    },
    /**
     * 菜单面板
     * @param {object} details 配置
     * @returns {{
     * guid: string,
     * element: Element,
     * animElement: HTMLElement,
     * popsElement: Element,
     * maskElement: Element,
     * close: Function,
     * hide: Function,
     * show: Function,
     * }}
     */
    panel(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return pops.panel(details);
    },
    /**
     *
     * @param {object} details
     * @param {?{
     * PC: {
     *  width: string,
     *  height: string,
     * },
     * Mobile: {
     *  width: string,
     *  height: string
     * }
     * }} sizeConfig 大小配置
     * @returns {object}
     */
    handleDetails(details, sizeConfig) {
      let defaultDetails = {
        mask: {
          enable: true,
          clickEvent: {
            toClose: GM_getValue(
              "clickMaskToCloseDialog",
              NetDiskUI.defaultClickMaskToCloseDialog
            ),
          },
        },
        animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
        drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
        dragLimit: GM_getValue("pcDragLimit", NetDiskUI.defaultPCDragLimit),
        forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
      };
      if (sizeConfig != null) {
        defaultDetails.width = pops.isPhone()
          ? sizeConfig.Mobile.width
          : sizeConfig.PC.width;
        defaultDetails.height = pops.isPhone()
          ? sizeConfig.Mobile.height
          : sizeConfig.PC.height;
      }
      Object.assign(defaultDetails, details);
      return defaultDetails;
    },
  };

  /**
   * 菜单
   */
  const NetDiskMenu = {
    /**
     * 初始化
     */
    init() {
      GM_Menu.add([
        {
          key: "showSetting",
          text: "⚙ 打开设置界面",
          showText(text) {
            return text;
          },
          callback() {
            NetDiskUI.suspension.initPop();
            NetDiskUI.suspension.showSettingView();
          },
        },
        {
          key: "showNetDiskHistoryMatch",
          text: "⚙ 打开历史匹配记录",
          showText(text) {
            return text;
          },
          callback() {
            NetDiskUI.netDiskHistoryMatch.show();
          },
        },
        {
          key: "showAccessCodeRule",
          text: "⚙ 打开访问码规则",
          showText(text) {
            return text;
          },
          callback() {
            NetDiskUI.accessCodeRule.show();
          },
        },
        {
          key: "showUserRule",
          text: "⚙ 打开用户自定义规则",
          showText(text) {
            return text;
          },
          callback() {
            NetDiskUI.customRules.show();
          },
        },
        {
          key: "showMatchPasteText",
          text: "⚙ 打开主动识别文本",
          showText(text) {
            return text;
          },
          callback() {
            NetDiskUI.matchPasteText.show();
          },
        },
      ]);
    },
    /**
     * 初始化环境变量
     */
    initEnv() {
      if (GM_getValue("allowMatchLocationHref")) {
        NetDisk.allowMatchLocationHref = true;
      }
    },
  };

  Object.assign(
    NetDiskUI.src.icon,
    typeof RESOURCE_ICON === "undefined" ? {} : RESOURCE_ICON
  );
  NetDiskMenu.init();
  NetDiskMenu.initEnv();
  NetDiskCustomRules.init();
  DOMUtils.ready(function () {
    log.config({
      logMaxCount: 200000,
      autoClearConsole: false,
    });
    httpx.config({
      onabort() {
        Qmsg.error("请求被取消");
      },
      ontimeout() {
        Qmsg.error("请求超时");
      },
      onerror(response) {
        Qmsg.error("请求异常");
        log.error(["httpx-onerror", response]);
      },
    });
    NetDiskAutoFillAccessCode.default();
    NetDiskAuthorization.default();
    NetDiskUI.monitorDOMInsert();
    NetDiskShortcut.initGlobalKeyboardListener();
  });
})();
