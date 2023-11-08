// ==UserScript==
// @name         网盘链接识别
// @namespace    https://greasyfork.org/zh-CN/scripts/445489-网盘链接识别
// @supportURL   https://greasyfork.org/zh-CN/scripts/445489-网盘链接识别/feedback
// @version      2023.11.4
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、坚果云、BT磁力，支持蓝奏云、天翼云(需登录)、123盘、奶牛和坚果云(需登录)直链获取下载，页面动态监控加载的链接，可自定义规则来识别小众网盘/网赚网盘。
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
// @connect      lanzous.com
// @connect      lanzouc.com
// @connect      lanzouk.com
// @connect      lanzouu.com
// @connect      lanzouh.com
// @connect      lanzouf.com
// @connect      lanzoul.com
// @connect      lanzoub.com
// @connect      lanzoum.com
// @connect      lanzout.com
// @connect      lanzoup.com
// @connect      lanzouj.com
// @connect      lanzouy.com
// @connect      lanzoug.com
// @connect      lanzouq.com
// @connect      lanzouo.com
// @connect      lanzouw.com
// @connect      lanzoui.com
// @connect      lanzoux.com
// @connect      lanzoue.com
// @connect      lanzouv.com
// @connect      lanosso.com
// @connect      189.cn
// @connect      123pan.com
// @connect      123pan.cn
// @connect      wenshushu.cn
// @connect      jianguoyun.com
// @connect      cowtransfer.com
// @exclude      /^http(s|):\/\/s1\.hdslb\.com\/.*$/
// @exclude      /^http(s|):\/\/www\.bilibili\.com\/video.*$/
// @exclude      /^http(s|):\/\/message\.bilibili\.com\/.*$/
// @exclude      /^http(s|):\/\/live\.bilibili\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.mail\.qq\.com\/.*$/
// @exclude      /^http(s|):\/\/.*video\.qq\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.vscode-cdn\.net\/.*$/
// @exclude      /^http(s|):\/\/.*vscode\.dev\/.*$/
// @require      https://unpkg.com/any-touch/dist/any-touch.umd.min.js
// @require      https://greasyfork.org/scripts/462234-message/code/Message.js?version=1252081
// @require      https://greasyfork.org/scripts/456470-%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93/code/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93.js?version=1211345
// @require      https://greasyfork.org/scripts/465550-js-%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6/code/JS-%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6.js?version=1270548
// @require      https://greasyfork.org/scripts/456485-pops/code/pops.js?version=1263431
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1276783
// @require      https://greasyfork.org/scripts/465772-domutils/code/DOMUtils.js?version=1274595
// ==/UserScript==

(function () {
  /**
   * @type {import("../库/any-touch.umd")}
   */
  const AnyTouch = window.AnyTouch;
  /**
   * @type {import("../库/Qmsg")}
   */
  const Qmsg = window.Qmsg;
  /**
   * @type {import("../库/pops")}
   */
  const pops = window.pops;
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
            "链接：https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}\n密码：{#accessCode#}",
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
          uiLinkShow: "lanzoux.com/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.lanzoux.com/{#shareCode#}",
          copyUrl:
            "链接：https://www.lanzoux.com/{#shareCode#}\n密码：{#accessCode#}",
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
          copyUrl:
            "链接：https://cloud.189.cn/t/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：https://caiyun.139.com/m/i?{#shareCode#}\n密码：{#accessCode#}",
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
          blank: "https://aliyundrive.com/s/{#shareCode#}",
          copyUrl:
            "链接：https://aliyundrive.com/s/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      wenshushu: [
        {
          link_innerText: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_wenshushu", 20)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_wenshushu", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_wenshushu", 100)
          )}}(密码|访问码|提取码)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_wenshushu", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode:
            /wss.ink\/f\/([a-zA-Z0-9_-]{8,14})|ws28.cn\/f\/([a-zA-Z0-9_-]{8,14})|wss1.cn\/f\/([a-zA-Z0-9_-]{8,14})|wenshushu.cn\/f\/([a-zA-Z0-9_-]{8,14})|wenshushu.cn\/k\/([a-zA-Z0-9_-]{8,14})/gi,
          shareCodeNeedRemoveStr:
            /wss.ink\/f\/|ws28.cn\/f\/|wss1.cn\/f\/|wenshushu.cn\/f\/|wenshushu.cn\/k\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /[0-9a-zA-Z]{4}/gi,
          uiLinkShow: "wss.ink/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://wss.ink/f/{#shareCode#}",
          copyUrl:
            "链接：https://wss.ink/f/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：https://cowtransfer.com/s/{#shareCode#}\n密码：{#accessCode#}",
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
          copyUrl:
            "链接：https://123pan.com/s/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：https://share.weiyun.com/{#shareCode#}\n密码：{#accessCode#}",
        },
      ],
      xunlei: [
        {
          link_innerText: `xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,${parseInt(
            GM_getValue("innerText_xunlei", 20)
          )}}(访问码|提取码|密码|)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_text_xunlei", 10)
          )}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `xunlei.com\/s\/[0-9a-zA-Z\-_]{8,30}([\\s\\S]{0,${parseInt(
            GM_getValue("innerHTML_xunlei", 100)
          )}}(访问码|提取码|密码|)[\\s\\S]{0,${parseInt(
            GM_getValue("accessCode_after_html_xunlei", 15)
          )}}[0-9a-zA-Z]{4}|)`,
          shareCode: /xunlei.com\/s\/([0-9a-zA-Z\-_]{8,30})/gi,
          shareCodeNeedRemoveStr: /xunlei.com\/s\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "pan.xunlei.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://pan.xunlei.com/s/{#shareCode#}",
          copyUrl:
            "链接：https://pan.xunlei.com/s/{#shareCode#}\n密码：{#accessCode#}",
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
          copyUrl:
            "链接：https://115.com/s/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：https://url95.ctfile.com/d/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：http://pan.jc-box.com/d/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：http://download.jamcz.com/d/{#shareCode#}\n密码：{#accessCode#}",
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
          copyUrl:
            "链接：https://u062.com/file/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：https://url95.ctfile.com/f/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：http://pan.jc-box.com/f/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：http://down.jc-box.com/f/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：http://download.cx05.cc/f/{#shareCode#}\n密码：{#accessCode#}",
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
          copyUrl:
            "链接：https://089u.com/dir/{#shareCode#}\n密码：{#accessCode#}",
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
          copyUrl:
            "链接：https://pan.quark.cn/s/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：https://www.jianguoyun.com/p/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：https://10101619-my.sharepoint.com/:u:/g/personal/chendexian_10101619_onmicrosoft_com/{#shareCode#}\n密码：{#accessCode#}",
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
            "链接：https://hurstheads-my.sharepoint.com/:u:/g/personal/storage_01_hurstheads_onmicrosoft_com/{#shareCode#}?e={#accessCode#}\n密码：{#accessCode#}",
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
            NetDiskWorker.GM_matchWorker.postMessage({
              regexp: new RegExp(netDiskListItem["link_innerText"], "gi"),
              pageText: pageText,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
            NetDiskWorker.GM_matchWorker.postMessage({
              regexp: new RegExp(netDiskListItem["link_innerHTML"], "gi"),
              pageText: pageHTML,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
            if (NetDisk.clipboardText.trim() !== "") {
              NetDiskWorker.GM_matchWorker.postMessage({
                regexp: new RegExp(netDiskListItem["link_innerText"], "gi"),
                pageText: NetDisk.clipboardText,
                netDiskName: netDiskName,
                netDiskIndex: index,
              });
              NetDiskWorker.GM_matchWorker.postMessage({
                regexp: new RegExp(netDiskListItem["link_innerHTML"], "gi"),
                pageText: NetDisk.clipboardText,
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
            NetDiskWorker.GM_matchWorker.postMessage({
              regexp: new RegExp(
                netDiskListItem[`link_${matchTextRange}`],
                "gi"
              ),
              pageText: pageText,
              netDiskName: netDiskName,
              netDiskIndex: index,
            });
            if (NetDisk.clipboardText.trim() !== "") {
              NetDiskWorker.GM_matchWorker.postMessage({
                regexp: new RegExp(
                  netDiskListItem[`link_${matchTextRange}`],
                  "gi"
                ),
                pageText: NetDisk.clipboardText,
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
        accessCode = accessCode[accessCode.length - 1];
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
        uiLink = uiLink.replace(/( |提取码:|{#accessCode#}|\?pwd=)/g, "");
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
         * 入口
         * @param {number} netDiskIndex 网盘名称索引下标
         * @param {string} shareCode
         * @param {string} accessCode
         * @returns
         */
        this.default = function (netDiskIndex, shareCode, accessCode) {
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
       * 单文件 => 请求https://www.lanzoux.com/{shareToken} 判断链接类型和是否能正常获取
       *        => 请求https://www.lanzoux.com/ajaxm.php 获取下载参数，下载参数例如：https://develope.lanzoug.com/file/?xxxxxxxxx
       * 多文件 => 先请求https://www.lanzoux.com/{shareToken} 获取文件sign => 请求https://www.lanzoux.com/filemoreajax.php 获取json格式的文件参数，
       * 参数内容如{"info":"success","text":[{"duan":"xx","icon":"","id":"".....},{},{}]}
       * @constructor
       * @returns {object}
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
              referer: window.location.origin,
            },
            onerror: function () {},
          });
          if (!getResp.status) {
            log.error(getResp);
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
              let fileName = pageDOM
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
                "user-agent": utils.getRandomAndroidUA(),
                referer: window.location.origin,
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
         * @param {string} url
         * @param {{
         * fileName:string,
         * fileSize:string,
         * fileUploadTime:string
         * }} fileInfo 文件信息
         */
        this.getLinkByIframe = async function (url, fileInfo) {
          log.info(fileInfo);
          let getResp = await httpx.get({
            url: that.handleUrl.default(url),
            headers: {
              Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
              "User-Agent": utils.getRandomPCUA(),
              Referer: window.location.origin,
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
            Qmsg.error("ajaxm.php请求参数aihidcms获取失败");
          } else {
            aihidcms = aihidcms[aihidcms.length - 1];
          }
          if (!ciucjdsdc) {
            Qmsg.error("ajaxm.php请求参数ciucjdsdc获取失败");
          } else {
            ciucjdsdc = ciucjdsdc[ciucjdsdc.length - 1];
          }
          if (!ajaxdata) {
            Qmsg.error("ajaxm.php请求参数ajaxdata获取失败");
          } else {
            ajaxdata = ajaxdata[ajaxdata.length - 1];
          }
          if (!sign) {
            Qmsg.error("ajaxm.php请求参数sign获取失败");
          } else {
            sign = sign[sign.length - 1];
          }
          let postData = `action=downprocess&signs=${ajaxdata}&sign=${sign}&websign=${ciucjdsdc}&ves=1`;
          log.success("ajaxm.php的请求参数-> " + postData);
          let postResp = await httpx.post({
            url: that.handleUrl.default("/ajaxm.php"),
            headers: {
              Accept: "application/json, text/javascript, */*",
              "Content-Type": "application/x-www-form-urlencoded",
              referer: window.location.origin,
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
              "user-agent": utils.getRandomAndroidUA(),
              referer: window.location.origin,
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
            url: "https://www.lanzoux.com/filemoreajax.php",
            responseType: "json",
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              "user-agent": utils.getRandomAndroidUA(),
              referer: window.location.origin,
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
            var folder = json_data["text"]; /* 获取多文件的数组信息 */
            var folderList = []; /* 弹出内容 */
            log.info(`本链接一共${folder.length}个文件`);
            for (let i = 0; i < folder.length; i++) {
              QmsgLoading.setText(
                `获取文件夹成功，解析文件直链中...${i + 1}/${folder.length}`
              );
              let item = folder[i];
              let _shareCode_ = item.id;
              let fileName = item.name_all;
              let fileSize = item.size;
              let uploadTime = item.time;
              log.info(`第${i + 1}个开始解析`);

              let folderInfo = await that.parseMoreFile(
                _shareCode_,
                fileName,
                fileSize,
                uploadTime
              );
              log.info(`第${i + 1}个解析完毕`);
              folderList.push(folderInfo);
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
              "user-agent": utils.getRandomAndroidUA(),
              referer: window.location.origin,
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
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          await that.getDownloadParams();
        };
        /**
         * 获取下载参数
         * @returns {Promise}
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
              referer: "https://cloud.189.cn/",
              origin: "https://cloud.189.cn",
            },
            onerror: function () {},
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
          let jsonData = utils.toJSON(postData.responseText);
          if (jsonData.res_code == 0) {
            log.info(["解析的JSON信息", jsonData]);
            that.isFolder = jsonData.isFolder;
            if (that.isFolder) {
              log.info("该链接是文件夹");
              NetDiskParse.blank(
                `https://cloud.189.cn/t/${that.shareCode}`,
                "tianyiyun",
                that.shareCode,
                that.accessCode
              );
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
         * @returns {string} ""
         */
        this.getCookie = function () {
          let cookie = "";
          return cookie;
        };
        /**
         * 获取shareId
         * @returns {Promise}
         */
        this.getShareId = async function () {
          let getResp = await httpx.get({
            url: `https://cloud.189.cn/api/open/share/checkAccessCode.action?shareCode=${that.shareCode}&accessCode=${that.accessCode}`,
            headers: {
              accept: "application/json;charset=UTF-8",
              "cache-control": "no-cache",
              "user-agent": utils.getRandomAndroidUA(),
              referer: `https://cloud.189.cn/web/share?code=${that.shareCode}`,
            },
            responseType: "json",
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          log.info(respData);
          let jsonData = utils.toJSON(respData.responseText);
          if (jsonData["res_code"] === 0) {
            that.shareId = jsonData["shareId"];
            await that.getDownloadUrl();
          } else {
            Qmsg.error("获取shareId失败");
            log.info(jsonData);
          }
        };
        /**
         * 获取下载链接
         * @returns {Promise}
         */
        this.getDownloadUrl = async function () {
          let getResp = await httpx.get({
            url: `https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?noCache=0.6537236244516991&fileId=${that.fileId}&dt=1&shareId=${that.shareId}`,
            headers: {
              accept: "application/json;charset=UTF-8",
              "cache-control": "no-cache",
              "user-agent": utils.getRandomPCUA(),
              referer: `https://cloud.189.cn/web/share?code=${that.shareCode}`,
            },
            cookie: that.getCookie(),
            responseType: "json",
            onerror: function () {},
          });
          log.info(getResp);
          if (!getResp.status) {
            let errorResultJSON = utils.toJSON(getResp.data.responseText);
            if (errorResultJSON["errorCode"] === "InvalidSessionKey") {
              that.gotoLogin(that.code["InvalidSessionKey"]);
            } else {
              Qmsg.error("请求异常");
            }
            return;
          }
          let respData = getResp.data;
          let jsonData = utils.toJSON(respData.responseText);
          log.info(jsonData);
          if (jsonData["res_code"] === 0) {
            let downloadUrl = jsonData["fileDownloadUrl"];
            downloadUrl = NetDiskFilterScheme.handleUrl(
              "tianyiyun-scheme-enable",
              "tianyiyun-scheme-forward",
              downloadUrl
            );
            NetDiskUI.staticView.oneFile({
              title: "天翼云单文件直链",
              fileName: that.fileName,
              fileSize: utils.formatByteToSize(that.fileSize),
              downloadUrl: downloadUrl,
              fileUploadTime: that.fileCreateDate,
              fileLatestTime: that.fileLastOpTime,
            });
          } else if (
            "InvalidSessionKey" === jsonData["res_code"] ||
            "InvalidSessionKey" === jsonData["errorCode"]
          ) {
            that.gotoLogin(that.code["InvalidSessionKey"]);
          } else if (that.code.hasOwnProperty(jsonData["res_code"])) {
            Qmsg.error(that.code[jsonData["res_code"]]);
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
          pops.confirm({
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
                callback: () => {
                  window.open(
                    "https://cloud.189.cn/api/portal/loginUrl.action?redirectURL=https://cloud.189.cn/web/main",
                    "_blank"
                  );
                },
              },
            },
            animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
            mask: true,
            drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
            height: pops.isPhone()
              ? NetDiskUI.popsStyle.tianYiYunLoginTip.Mobile.height
              : NetDiskUI.popsStyle.tianYiYunLoginTip.PC.height,
            forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
            width: pops.isPhone()
              ? NetDiskUI.popsStyle.tianYiYunLoginTip.Mobile.width
              : NetDiskUI.popsStyle.tianYiYunLoginTip.PC.width,
          });
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
              "user-agent": utils.getRandomAndroidUA(),
              referer: window.location.origin,
            },
          });
          log.success(postResp);
          if (!postResp.status) {
            return;
          }
          let respData = postResp.data;
          let jsonData = utils.toJSON(respData.responseText);
          if (jsonData["code"] === 0) {
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
              "user-agent": utils.getRandomAndroidUA(),
              referer: window.location.origin,
              "x-token": that.token,
            },
          });
          log.success(postResp);
          if (!postResp.status) {
            return;
          }
          let respData = postResp.data;
          let jsonData = utils.toJSON(respData.responseText);
          if (jsonData["code"] === 0) {
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
              accept: "application/json, text/plain, */*",
              "user-agent": utils.getRandomAndroidUA(),
              referer: window.location.origin,
              "x-token": that.token,
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
            that.folderNumber = 0;
            let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
            await that.recursiveAlgorithm(infoLists);
            QmsgLoading.close();
            Qmsg.info("正在排序中...");

            utils.sortListByProperty(that.panelList, (item) => {
              let timeStamp = new Date(item["updateTime"]).getTime();
              return timeStamp;
            });
            log.info(that.panelList);
            let dataDownload = [];
            that.panelList.forEach((item) => {
              let fileUploadTime = new Date(item["createTime"]).getTime();
              let fileLatestTime = new Date(item["updateTime"]).getTime();
              fileUploadTime = utils.formatTime(fileUploadTime);
              fileLatestTime = utils.formatTime(fileLatestTime);
              let dataDownloadInfo = {
                fileName: item["fileName"],
                fileUploadTime,
                fileLatestTime,
              };
              if (item["fileSize"] === 0) {
                /* 异常的 */
                dataDownloadInfo["success"] = false;
                if (
                  typeof item["url"] === "string" &&
                  !item["url"].startsWith("http")
                ) {
                  dataDownloadInfo["fileSize"] = item["url"];
                } else {
                  dataDownloadInfo["fileSize"] = "获取直链失败";
                }
              } else {
                /* 正常的 */
                dataDownloadInfo["success"] = true;
                dataDownloadInfo["downloadUrl"] = item["url"];
                dataDownloadInfo["fileSize"] = item["fileSize"];
              }
              dataDownload.push(dataDownloadInfo);
            });
            NetDiskUI.staticView.moreFile("123盘多文件直链", dataDownload);
            log.info("递归完毕");
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
              "user-agent": utils.getRandomPCUA(),
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
         * @returns {Promise}
         */
        this.getFiles = async function (parentFileId = 0) {
          let url = `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              accept: "*/*",
              "user-agent": utils.getRandomPCUA(),
              referer: `https://www.123pan.com/s/${that.shareCode}`,
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
         * @returns
         */
        this.getFilesByRec = async function (parentFileId) {
          let getResp = await httpx.get({
            url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`,
            headers: {
              accept: "*/*",
              "user-agent": utils.getRandomAndroidUA(),
              referer: `https://www.123pan.com/s/${that.shareCode}`,
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
              let fileSize = utils.formatByteToSize(item["Size"]);
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
                } else if (downloadInfo && downloadInfo["code"] === 401) {
                  that.panelList = [
                    ...that.panelList,
                    {
                      url: "请登录后下载",
                      fileName: fileName,
                      fileSize: 0,
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
            accept: "*/*",
            "user-agent": utils.getRandomPCUA(),
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
              "user-agent": utils.getRandomAndroidUA(),
              Referer: "https://www.123pan.com/s/" + that.shareCode,
              Origin: "https://www.123pan.com",
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
         * @param {string} hash 文件hash值
         * @param {string} fileName 文件名
         * @returns
         */
        this.parseMoreFile = async function (hash = "", fileName = "") {
          let folderInfo = await that.getFolderInfo(hash);
          if (!folderInfo) {
            return;
          }
          let downloadList = [];
          let Qmsg_loading = Qmsg.loading("正在遍历多文件信息...");
          for (let i = 0; i < folderInfo.length; i++) {
            Qmsg_loading.setText(
              `正在遍历多文件信息...${i + 1}/${folderInfo.length}`
            );
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
                size: utils.formatByteToSize(item["size"]),
                mtime: item["mtime"],
                content: "",
              },
            ];
            await utils.sleep(150);
          }
          Qmsg_loading.close();
          if (downloadList.length == 0) {
            return;
          }
          let folderList = [];

          utils.sortListByProperty(downloadList, (item) => {
            return item["mtime"];
          });

          downloadList.forEach((item) => {
            folderList.push({
              success: true,
              fileName: item["name"],
              fileSize: item["size"],
              downloadUrl: item["url"],
            });
          });
          /* 坚果云盘没有上传时间信息(暂时是这样的) */
          NetDiskUI.staticView.moreFile("坚果云多文件直链", folderList);
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
              "User-Agent": utils.getRandomPCUA(),
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
          pops.confirm({
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
            animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
            mask: true,
            drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
            height: pops.isPhone()
              ? NetDiskUI.popsStyle.jianGuoYunLoginTip.Mobile.height
              : NetDiskUI.popsStyle.jianGuoYunLoginTip.PC.height,
            forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
            width: pops.isPhone()
              ? NetDiskUI.popsStyle.jianGuoYunLoginTip.Mobile.width
              : NetDiskUI.popsStyle.jianGuoYunLoginTip.PC.width,
          });
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
        this.default = async function (netDiskIndex, shareCode, accessCode) {
          log.info([netDiskIndex, shareCode, accessCode]);
          that.netDiskIndex = netDiskIndex;
          that.shareCode = shareCode;
          that.accessCode = accessCode;
          that.panelList = [];
          that.panelContent = "";
          let checkLinkValidityInfo = await that.checkLinkValidity();
          if (!checkLinkValidityInfo) {
            return;
          }
          let downloadUrl = null;
          if (checkLinkValidityInfo["zipDownload"]) {
            downloadUrl = await that.getZipFileDownloadUrl(
              checkLinkValidityInfo["guid"],
              checkLinkValidityInfo["fileName"]
            );
          } else {
            downloadUrl = await that.getDownloadUrl(
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
              Qmsg.info(
                `调用【GM_download】下载：${checkLinkValidityInfo["fileName"]}`
              );
              if (typeof GM_download === "undefined") {
                Qmsg.error("当前脚本环境缺失API 【GM_download】");
                return;
              }
              GM_download({
                url: downloadUrl,
                name: _fileDetails_["fileName"],
                headers: {
                  Referer: "https://cowtransfer.com/",
                },
                onload: () => {
                  Qmsg.success(
                    `下载 ${checkLinkValidityInfo["fileName"]} 已完成`
                  );
                },
                onerror: function (error) {
                  log.error(["下载失败error👉", error]);
                  if (typeof error === "object" && error["error"]) {
                    Qmsg.error(
                      `下载 ${checkLinkValidityInfo["fileName"]} 失败或已取消 原因：${error["error"]}`,
                      {
                        timeout: 6000,
                      }
                    );
                  } else {
                    Qmsg.error(
                      `下载 ${checkLinkValidityInfo["fileName"]} 失败或已取消`
                    );
                  }
                },
                ontimeout: () => {
                  Qmsg.error(
                    `下载 ${checkLinkValidityInfo["fileName"]} 请求超时`
                  );
                },
              });
            },
          });
        };

        /**
         * 校验链接有效性并解析获取信息
         * @returns {boolean| {
         * zipDownload: boolean,
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
         *
         * }}
         */
        this.checkLinkValidity = async function () {
          let url = `https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${that.shareCode}`;

          let getResp = await httpx.get({
            url: url,
            headers: {
              "user-agent": utils.getRandomPCUA(),
              referer: "`https://cowtransfer.com",
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return false;
          }
          let respData = getResp.data;
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(["转换的JSON", resultJSON]);
          let code = resultJSON["code"];
          let message = resultJSON["message"];
          if (code !== "0000") {
            Qmsg.error(message);
            return false;
          } else {
            let needPassword = resultJSON["data"]["needPassword"];
            let zipDownload = resultJSON["data"]["zipDownload"];
            if (needPassword && utils.isNull(that.accessCode)) {
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
              Qmsg.success("该文件为压缩包");
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
              Qmsg.error("该链接为文件夹类型");
              NetDiskParse.blank(
                NetDiskParse.getBlankUrl(
                  "nainiu",
                  that.netDiskIndex,
                  that.shareCode,
                  that.accessCode
                ),
                "nainiu",
                that.shareCode,
                that.accessCode
              );
              return false;
            }
            {
              return {
                zipDownload: zipDownload,
                guid: resultJSON["data"]["guid"],
                id: resultJSON["data"]["firstFile"]["id"],
                fileSize: utils.formatByteToSize(
                  resultJSON["data"]["firstFile"]["file_info"]["size"]
                ),
                fileName: resultJSON["data"]["firstFile"]["file_info"]["title"],
                fileType:
                  resultJSON["data"]["firstFile"]["file_info"]["format"],
                fileUploadTime: utils.formatTime(
                  resultJSON["data"]["firstFile"]["created_at"]
                ),
                fileLatestTime: utils.formatTime(
                  resultJSON["data"]["firstFile"]["updated_at"]
                ),
              };
            }
          }
        };
        /**
         * 获取下载链接
         * @param {string} guid
         * @param {string} id
         * @returns {string|undefined}
         */
        this.getDownloadUrl = async function (guid = "", id = "") {
          let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&fileId=${id}`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              "user-agent": utils.getRandomPCUA(),
              referer: "`https://cowtransfer.com",
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(["转换的JSON", resultJSON]);
          if (resultJSON["code"] === "0000") {
            return resultJSON["data"]["downloadUrl"];
          } else {
            Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
            return;
          }
        };

        /**
         * 获取zip文件的下载链接
         * @param {string} guid
         * @param {string} title 标题
         * @returns {string|undefined}
         */
        this.getZipFileDownloadUrl = async function (guid = "", title = "") {
          let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&title=${title}`;
          let getResp = await httpx.get({
            url: url,
            headers: {
              "user-agent": utils.getRandomPCUA(),
              referer: "`https://cowtransfer.com",
            },
          });
          log.info(getResp);
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          let resultJSON = utils.toJSON(respData.responseText);
          log.info(["转换的JSON", resultJSON]);
          if (resultJSON["code"] === "0000") {
            return resultJSON["data"]["downloadUrl"];
          } else {
            Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
            return;
          }
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
        var parseObj = new this.netDisk[netDiskName]();
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
      document
        .querySelector("meta[name='referrer']")
        ?.setAttribute(
          "content",
          "no-referrer"
        ); /* 百度网盘会拒绝referrer不安全访问 */
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
        blankUrl = blankUrl.replace(/( |提取码:|{#accessCode#}|\?pwd=)/gi, "");
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
   * 网盘鉴权处理获取
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
        /* console.log("处理中"); */
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
  };

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
     * 链接弹窗的唯一标识
     */
    uiLinkAlias: null,
    /**
     * 设置弹窗的唯一标识
     */
    uiSettingAlias: null,
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
     * PC端是否默认弹窗可以拖拽
     */
    defaultPCDrag: false,
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
          width: "50vw",
          height: "65vh",
        },
        Mobile: {
          width: "88vw",
          height: "60vh",
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
          width: "50vw",
          height: "240px",
        },
        Mobile: {
          width: "88vw",
          height: "240px",
        },
      },
      /**
       * 多文件直链弹窗
       */
      moreFileStaticView: {
        PC: {
          width: "50vw",
          height: "400px",
        },
        Mobile: {
          width: "88vw",
          height: "400px",
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
       * 图标
       */
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
      },
    },
    /**
     * 悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮
     */
    suspension: {
      isShow: false,
      /**
       * 显示悬浮按钮
       */
      show() {
        if (!this.isShow) {
          this.createUI();
          this.initPop();
          this.setSuspensionEvent();
          this.setSuspensionDefaultPositionEvent();
          this.isShow = true;
        }
        this.backgroundSwitch();
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
        let suspensionNode = DOMUtils.createElement("div", {
          class: "whitesevSuspension",
          id: "whitesevSuspensionId",
          style: `width: ${NetDiskUI.size}px;
          height: ${NetDiskUI.size}px;
          opacity: ${NetDiskUI.opacity}`,
          innerHTML: `<div class="whitesevSuspensionMain">
          <div class="whitesevSuspensionFloor">
            <div class="netdisk"></div>
          </div>
        </div>`,
        });
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
					display: flex;
          justify-content: space-between;
					display: flex;
					align-items: center;
				}
				.netdisk-setting-menu-item label{
          cursor: auto;
					width: 170px;
					padding-right: 15px;
				}
        .netdisk-setting-menu-item label[data-cursor-pointer]{
          cursor: pointer;
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
    			width: 170px;
				}
				.netdisk-setting-menu-item input[type=text],
				.netdisk-setting-menu-item input[type=number],
				.netdisk-setting-menu-item input[type=range],
        .pops-confirm-content .whitesev-accesscode-rule input[type=text]{
					border: none;
					border-bottom: 1px solid #8f8e8e;
					width: 60%;
          padding: 0px 2px;
          line-height: 30px;
				}
				.netdisk-setting-menu-item input[type=text]:focus,
				.netdisk-setting-menu-item input[type=number]:focus,
        .pops-confirm-content .whitesev-accesscode-rule input[type=text]:focus{
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
        .netdisk-setting-menu-item select,
        .pops-confirm-content div.whitesev-accesscode-rule select{
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          width: 200px;
          border: 1px solid #5c5c5c;
          border-radius: 5px;
          text-align: center;
          outline: 0;
        }
        .netdisk-setting-menu-item select:focus,
        .pops-confirm-content div.whitesev-accesscode-rule select:focus{
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
         * @returns {string}
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
              firstHTML: `
                      <div class="netdisk-setting-menu-item">
                          <label>网址</label>
                          <input type="text" data-key="baidu-baiduwp-php-url" placeholder="使用了baiduwp-php源码的网站，例如：https://www.example.com/">
                      </div>
                      <div class="netdisk-setting-menu-item">
                          <label>表单参数</label>
                          <input type="text" data-key="baidu-baiduwp-php-post-form" placeholder="POST请求的表单参数，例如：surl={#shareCode#}&pwd={#accessCode#}&password=">
                      </div>
                      <div class="netdisk-setting-menu-item" type="checkbox">
                          <p>启用第三方网站解析链接</p>
                          <div class="netdisk-checkbox">
                            <input type="checkbox" data-key="baidu-static-enable" mutex=".netdisk-checkbox input[data-key='baidu-open-enable']">
                            <div class="knobs"><span></span></div><div class="layer"></div>
                          </div>
                      </div>
                      <div class="netdisk-setting-menu-item" type="checkbox">
                          <p>跳转第三方网站时复制链接</p>
                          <div class="netdisk-checkbox">
                            <input type="checkbox" data-key="baidu-baiduwp-php-copy-url" mutex=".netdisk-checkbox input[data-key='baidu-open-enable']">
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "奶牛",
              key: "nainiu",
              checkbox_oneStatic: true,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: true,
              text_static_scheme_forward: true,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "115网盘",
              key: "_115pan",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: true,
              range_innerText_default_value: 20,
              range_innerHTML: true,
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
              firstHTML: "",
              endHTML: "",
            },
            {
              type: "BT磁力",
              key: "magnet",
              checkbox_oneStatic: false,
              checkbox_oneOrMoreStatic: false,
              checkbox_openBlank: true,
              checkbox_static_scheme: false,
              text_static_scheme_forward: false,
              range_innerText: false,
              range_innerText_default_value: 0,
              range_innerHTML: false,
              range_innerHTML_default_value: 0,
              firstHTML: "",
              endHTML: `
              <div class="netdisk-setting-menu-item" type="checkbox">
                  <p>Scheme转发</p>
                  <div class="netdisk-checkbox">
                    <input type="checkbox" data-key="magnet-scheme-enable">
                    <div class="knobs"><span></span></div><div class="layer"></div>
                  </div>
              </div>
              <div class="netdisk-setting-menu-item" type="scheme">
                  <p>Scheme链接</p>
                  <input type="text" data-key="magnet-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
              </div>
              `,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
              range_innerHTML_default_value: 100,
              range_accessCode_after_text: true,
              range_accessCode_after_text_default_value: 10,
              range_accessCode_after_html: true,
              range_accessCode_after_html_default_value: 15,
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
                  <p>Scheme转发直链</p>
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
                  <p>Scheme链接</p>
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
                  }">提取码间隔前(Text)${GM_getValue(
                      `innerText_${item.key}`,
                      parseInt(item.range_innerText_default_value)
                    )}</label>
                  <input  type="range"
                          data-key="innerText_${item.key}"
                          data-content="提取码间隔前(Text)"
                          min="0"
                          max="100"
                          data-default="${
                            item.range_innerText_default_value != null
                              ? parseInt(item.range_innerText_default_value)
                              : 20
                          }">
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
                  }">提取码间隔前(HTML)${GM_getValue(
                      `innerHTML_${item.key}`,
                      parseInt(item.range_innerHTML_default_value)
                    )}</label>
                  <input  type="range"
                          data-key="innerHTML_${item.key}"
                          data-content="提取码间隔前(HTML)"
                          min="0"
                          max="500"
                          data-default="${
                            item.range_innerHTML_default_value != null
                              ? parseInt(item.range_innerHTML_default_value)
                              : 100
                          }">
              </div>
              `
                  : ""
              }
              ${
                item.range_accessCode_after_text
                  ? `
                <div class="netdisk-setting-menu-item">
                  <label data-id="netdisk-accessCode_after_text_${
                    item.key
                  }">提取码间隔后(Text)${GM_getValue(
                      `accessCode_after_text_${item.key}`,
                      parseInt(item.range_accessCode_after_text_default_value)
                    )}</label>
                  <input  type="range"
                          data-key="accessCode_after_text_${item.key}"
                          data-content="提取码间隔后(Text)"
                          min="0"
                          max="100"
                          data-default="${
                            item.range_accessCode_after_text_default_value !=
                            null
                              ? parseInt(
                                  item.range_accessCode_after_text_default_value
                                )
                              : 10
                          }">
                </div>
                `
                  : ""
              }
              ${
                item.range_accessCode_after_html
                  ? `
              <div class="netdisk-setting-menu-item">
                  <label data-id="netdisk-accessCode_after_html_${
                    item.key
                  }">提取码间隔后(HTML)${GM_getValue(
                      `accessCode_after_html_${item.key}`,
                      parseInt(item.range_accessCode_after_html_default_value)
                    )}</label>
                  <input  type="range"
                          data-key="accessCode_after_html_${item.key}"
                          data-content="提取码间隔后(HTML)"
                          min="0"
                          max="200"
                          data-default="${
                            item.range_accessCode_after_html_default_value !=
                            null
                              ? parseInt(
                                  item.range_accessCode_after_html_default_value
                                )
                              : 15
                          }">
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
                    <div class="netdisk-setting-menu-item" type="checkbox">
                        <p>获取重定向后的直链</p>
                        <div class="netdisk-checkbox" style="position: inherit;top: unset;transform: matrix(1, 0, 0, 1, 0, 0);">
                          <input type="checkbox" data-key="getTheDirectLinkAfterRedirection" data-default="true">
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
          document
            .querySelectorAll(".netdisk-setting input")
            .forEach((item) => {
              let data_key = item.getAttribute("data-key");
              let data_default = item.getAttribute("data-default");
              switch (item.getAttribute("type")) {
                case "checkbox":
                  let defaultChecked = false;
                  if (
                    typeof data_default === "string" &&
                    data_default === "true"
                  ) {
                    defaultChecked = true;
                  }
                  item.checked = GM_getValue(data_key, defaultChecked);
                  let mutex = item.getAttribute("mutex");
                  item.addEventListener("click", function () {
                    GM_setValue(data_key, item.checked);
                    let mutexNode = document.querySelector(mutex);
                    if (mutexNode) {
                      /* 存在互斥的元素DOM,且当前checked为true，把互斥的DOM元素Checked设置为false */
                      let mutex_data_key = mutexNode.getAttribute("data-key");
                      if (item.checked) {
                        mutexNode.checked = false;
                        GM_setValue(mutex_data_key, false);
                      }
                    }
                  });
                  break;
                case "range":
                  item.value = GM_getValue(data_key, data_default)
                    ? GM_getValue(data_key, data_default)
                    : "";
                  DOMUtils.on(item, "input propertychange", function () {
                    document.querySelector(
                      `.netdisk-setting label[data-id=netdisk-${data_key}]`
                    ).innerHTML = `${item.getAttribute("data-content")}${
                      item.value
                    }`;
                    let itSize = document.querySelector(
                      ".netdisk-setting input[data-key=size]"
                    ).value;
                    let whitesevSuspensionIdElement = document.querySelector(
                      "#whitesevSuspensionId"
                    );
                    whitesevSuspensionIdElement.style.setProperty(
                      "width",
                      `${itSize}px`
                    );
                    whitesevSuspensionIdElement.style.setProperty(
                      "height",
                      `${itSize}px`
                    );
                    whitesevSuspensionIdElement.style.setProperty(
                      "opacity",
                      document.querySelector(
                        ".netdisk-setting input[data-key=opacity]"
                      ).value
                    );
                    NetDiskUI.size = itSize;
                    NetDiskUI.suspension.setSuspensionDefaultPositionEvent();
                    GM_setValue(data_key, item.value);
                  });

                default:
                  item.value = GM_getValue(data_key, data_default)
                    ? GM_getValue(data_key, data_default)
                    : "";
                  DOMUtils.on(item, "input propertychange", function () {
                    GM_setValue(data_key, item.value);
                  });
              }
            });
        }
        /**
         * 设置 select元素 下拉列表的默认选项值
         */
        function setSettingSelectEvent() {
          document
            .querySelectorAll(".netdisk-setting select")
            .forEach((item) => {
              DOMUtils.on(item, "change", function (event) {
                let data_key = event.target.getAttribute("data-key");
                let data_value =
                  event.target[event.target.selectedIndex].getAttribute(
                    "data-value"
                  );
                GM_setValue(data_key, data_value);
              });
            });

          document
            .querySelectorAll(".netdisk-setting-menu-item select")
            .forEach((item) => {
              let dataKey = item.getAttribute("data-key");
              let dataDefaultValue = item.getAttribute("data-default");
              let getDataValue = GM_getValue(dataKey);
              if (getDataValue == null && dataDefaultValue != null) {
                /* 存储中不存在该值，设置默认值 */
                log.success(
                  `存储中不存在该值，设置默认值 key:：${dataKey} value：${dataDefaultValue}`
                );
                GM_setValue(dataKey, dataDefaultValue);
                getDataValue = GM_getValue(dataKey);
              }
              item
                .querySelector(`option[data-value='${getDataValue}']`)
                .setAttribute("selected", true);
            });
        }
        /**
         * 设置 点击 label 弹出设置input range的默认值 事件
         */
        function setSettingLabelEvent() {
          NetDiskUI.uiSettingAlias.popsElement
            .querySelectorAll("label[data-id*='netdisk-']")
            .forEach((item) => {
              item.setAttribute("data-cursor-pointer", true);
              DOMUtils.on(item, "click", function (event) {
                let obj = event.target;
                let nextObj = DOMUtils.next(obj);
                let dataKey = nextObj.getAttribute("data-key");
                let dataDefaultValue = nextObj.getAttribute("data-default");
                let currentValue = nextObj.value;
                pops.confirm({
                  title: {
                    text: "提示",
                    position: "center",
                  },
                  content: {
                    text: `当前设置的值为：${currentValue}，是否修改为默认值：${dataDefaultValue} ？`,
                  },
                  btn: {
                    ok: {
                      callback: function (_event_) {
                        log.info(
                          `key：${dataKey} 当前值：${currentValue}，修改为默认值：${dataDefaultValue}`
                        );
                        GM_setValue(dataKey, dataDefaultValue);
                        DOMUtils.val(nextObj, dataDefaultValue);
                        DOMUtils.trigger(nextObj, "propertychange");
                        _event_.close();
                      },
                    },
                  },
                  animation: GM_getValue(
                    "popsAnimation",
                    NetDiskUI.defaultAnimation
                  ),
                  mask: true,
                  drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
                  height: pops.isPhone()
                    ? NetDiskUI.popsStyle.setDefaultValueView.Mobile.height
                    : NetDiskUI.popsStyle.setDefaultValueView.PC.height,
                  forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
                  width: pops.isPhone()
                    ? NetDiskUI.popsStyle.setDefaultValueView.Mobile.width
                    : NetDiskUI.popsStyle.setDefaultValueView.PC.width,
                });
              });
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
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          class: "whitesevPopSetting",
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.settingView.Mobile.height
            : NetDiskUI.popsStyle.settingView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.settingView.Mobile.width
            : NetDiskUI.popsStyle.settingView.PC.width,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          mask: true,
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
        setSettingInputEvent();
        setSettingSelectEvent();
        setSettingLabelEvent();
      },
      /**
       * 设置 悬浮按钮所有事件
       */
      setSuspensionEvent() {
        let needDragEle = document.querySelector("#whitesevSuspensionId");
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
            DOMUtils.css(needDragEle, {
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
              DOMUtils.width(globalThis) -
              NetDiskUI.size; /* 最大的X轴 指从左至右*/
            var clientMax_Y =
              DOMUtils.height(globalThis) -
              NetDiskUI.size; /* 最大的Y轴 指从上至下 */
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

            DOMUtils.css(needDragEle, {
              left: clientMove_X + "px",
              top: clientMove_Y + "px",
            });
          }

          /**
           * 停止移动
           */
          if (event.phase === "end") {
            isClicked = false;
            DOMUtils.css(needDragEle, {
              cursor: "auto",
            });
            let left_px = parseInt(
              DOMUtils.css(needDragEle, "left").replace("px", "")
            );
            let setCSSLeft = 0;
            if (left_px >= DOMUtils.width(globalThis) / 2) {
              setCSSLeft = DOMUtils.width(globalThis) - NetDiskUI.size;
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

            DOMUtils.css(needDragEle, {
              left: setCSSLeft + "px",
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

        DOMUtils.on(needDragEle, "contextmenu", function (event) {
          NetDiskUI.view.showContextMenu(event, [
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
        });
      },
      /**
       * 设置悬浮按钮位置
       */
      setSuspensionDefaultPositionEvent() {
        let clientMax_X =
          DOMUtils.width(globalThis) - NetDiskUI.size; /* 最大的X轴 指从左至右*/
        let clientMax_Y =
          DOMUtils.height(globalThis) -
          NetDiskUI.size; /* 最大的Y轴 指从上至下 */
        let clientDefault_X = clientMax_X; /* 默认值 X轴 */
        let clientDefault_Y =
          DOMUtils.height(globalThis) / 2 - NetDiskUI.size; /* 默认值 Y轴 */
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

        DOMUtils.css("#whitesevSuspensionId", {
          left: userSetClient_X + "px",
          top: userSetClient_Y + "px",
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
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.mainView.Mobile.height
            : NetDiskUI.popsStyle.mainView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.mainView.Mobile.width
            : NetDiskUI.popsStyle.mainView.PC.width,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          mask: true,
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
        this.setNetDiskUrlClickEvent(".netdisk-url a");
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
       * 显示右键菜单，调用方式
       * @param {Event} event
       * @param {{text:string,callback:Function}[]} showTextList 右键菜单的内容，如：[{"text":"","callback":()=>{}}]
       * @param {string} menuElementId 右键菜单元素的id
       */
      showContextMenu(
        event,
        showTextList = [],
        menuElementId = "whitesevSuspensionContextMenu"
      ) {
        event.preventDefault();
        DOMUtils.remove(`#${menuElementId}`);
        let menuNode = DOMUtils.createElement("div", {
          id: menuElementId,
          innerHTML: `
          <style type="text/css">
          #${menuElementId}{
						position: fixed;
						z-index: ${utils.getMaxZIndex()};
    				text-align: center;
						padding: 3px 0px;
						border-radius: 3px;
						font-size: 16px;
						font-weight: 500;
						background: #fff;
            box-shadow: 0px 1px 6px 1px #cacaca;
					}
					#${menuElementId} li:hover{
						background: #dfdfdf;
            cursor: pointer;
					}
          #${menuElementId} ul{
            margin: 0px;
            padding: 0px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          }
          #${menuElementId} ul li{
            padding: 5px 10px;
            display: unset;
            width: -webkit-fill-available;
            text-align: left;
            margin: 2.5px 5px;
            border-radius: 3px;
            user-select: none;
          }
          </style>
					<ul></ul>
          `,
        });
        showTextList.forEach((item) => {
          let menuItem = DOMUtils.createElement("li", {
            innerHTML: item.text,
          });
          DOMUtils.on(menuItem, "click", function () {
            item.callback &&
              typeof item.callback === "function" &&
              item.callback.apply(this, this.arguments);
            menuNode.remove();
          });
          DOMUtils.append(menuNode.querySelector("ul"), menuItem);
        });
        DOMUtils.hide(menuNode);
        DOMUtils.append(document.body, menuNode);
        let view = menuNode.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window;
        }
        let clientMax_X =
          DOMUtils.width(globalThis) -
          DOMUtils.width(menuNode) -
          1; /* 最大的X轴 指从左至右*/
        let clientMax_Y =
          DOMUtils.height(globalThis) -
          DOMUtils.height(menuNode) -
          8; /* 最大的Y轴 指从上至下 */
        let clientMove_X = event.clientX;
        let clientMove_Y = event.clientY;
        /* 不允许超出浏览器范围 */
        clientMove_X = clientMove_X < 0 ? 0 : clientMove_X;
        clientMove_X = clientMove_X < clientMax_X ? clientMove_X : clientMax_X;
        clientMove_Y = clientMove_Y < 0 ? 0 : clientMove_Y;
        clientMove_Y = clientMove_Y < clientMax_Y ? clientMove_Y : clientMax_Y;
        DOMUtils.css(menuNode, {
          left: clientMove_X,
          top: clientMove_Y,
        });
        DOMUtils.show(menuNode);
        let globalClickListen = function () {
          if (!utils.checkUserClickInNode(menuNode)) {
            menuNode?.remove();
            DOMUtils.off(window, "click", globalClickListen);
          }
        };
        DOMUtils.on(window, "click", globalClickListen);
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
          ".whitesevPop .netdisk-icon img",
          function (event) {
            let dataSharecode =
              event.target.parentElement.nextElementSibling.firstElementChild.getAttribute(
                "data-sharecode"
              );
            utils.findVisibleText(dataSharecode, true);
          }
        );
      },
      /**
       * 设置全局监听url的右击菜单事件
       */
      registerNetDiskUrlContextMenu() {
        DOMUtils.on(
          document,
          "contextmenu",
          ".whitesevPop .netdisk-url a",
          function (event) {
            NetDiskUI.view.showContextMenu(event, [
              {
                text: "复制链接",
                callback: function () {
                  let netDiskName = event.target.getAttribute("data-netdisk");
                  let netDiskIndex =
                    event.target.getAttribute("data-netdisk-index");
                  let shareCode = event.target.getAttribute("data-sharecode");
                  let accessCode = event.target.getAttribute("data-accesscode");
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
       * 单文件直链弹窗
       * @param {{
       * title:string,
       * fileName:string,
       * fileType:?string,
       * fileSize:?string,
       * downloadUrl:string,
       * fileUploadTime:?string,
       * fileLatestTime:?string
       * clickCallBack: ?(_fileDetails_:{
       * title:string,
       * fileName:string,
       * fileType:?string,
       * fileSize:?string,
       * downloadUrl:string,
       * fileUploadTime:?string,
       * fileLatestTime:?string,
       * })=>{}
       * }} fileDetails 配置
       */
      oneFile(fileDetails) {
        this.addCSS();
        log.success(["成功获取单文件直链", fileDetails]);
        Qmsg.success("成功获取单文件直链");
        let title = fileDetails["title"];
        let fileName = fileDetails["fileName"];
        let fileType = fileDetails["fileType"];
        let fileSize = fileDetails["fileSize"];
        let downloadUrl = fileDetails["downloadUrl"];
        let fileUploadTime = fileDetails["fileUploadTime"];
        let fileLatestTime = fileDetails["fileLatestTime"];
        let clickCallBack = fileDetails["clickCallBack"];
        fileUploadTime = fileUploadTime === "" ? null : fileUploadTime;
        fileLatestTime = fileLatestTime === "" ? null : fileLatestTime;
        if (fileType && !fileName.endsWith("." + fileType)) {
          fileName = fileName + "." + fileType;
          fileDetails["fileName"] = fileName;
        }
        let confirmElement = pops.confirm({
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
              ${
                fileSize
                  ? `<div class="netdisk-static-filesize">${fileSize}</div>`
                  : ""
              }
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
                if (typeof clickCallBack === "function") {
                  clickCallBack(fileDetails);
                } else {
                  let downloadUrl = event.popsElement
                    .querySelector(".netdisk-static-filename a")
                    .getAttribute("href");
                  window.open(downloadUrl, "_blank");
                }
              },
            },
          },
          class: "whitesevPopOneFile",
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.oneFileStaticView.Mobile.height
            : NetDiskUI.popsStyle.oneFileStaticView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.oneFileStaticView.Mobile.width
            : NetDiskUI.popsStyle.oneFileStaticView.PC.width,
          mask: true,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
        if (clickCallBack) {
          let linkElement = confirmElement.element.querySelector(
            "div.netdisk-static-filename a"
          );
          linkElement.setAttribute("href", "javascript:;");
          linkElement.removeAttribute("target");
          DOMUtils.on(linkElement, "click", function () {
            clickCallBack(
              fileName,
              fileType,
              fileSize,
              downloadUrl,
              fileUploadTime,
              fileLatestTime
            );
          });
        }
      },
      /**
       * 多文件直链弹窗
       * @param {string} title 标题
       * @param {Array} [downloadInfoList=[]] 弹窗内容HTML或Text
       * @param {?Function} clickCallBack 超链接的点击事件
       */
      moreFile(title, downloadInfoList = [], clickCallBack) {
        this.addCSS();
        Qmsg.success("成功获取多文件直链");
        let showHTML = "";
        log.success(["多文件直链信息", downloadInfoList]);
        downloadInfoList.forEach((info) => {
          /* 该链接是否是成功的 */
          let success = info["success"];
          /* 文件名 */
          let fileName = info["fileName"];
          /* 文件大小 */
          let fileSize = info["fileSize"];
          /* 文件链接 */
          let downloadUrl = info["downloadUrl"]?.trim();
          /* 文件上传时间 */
          let fileUploadTime = info["fileUploadTime"];
          /* 文件最新时间 */
          let fileLatestTime = info["fileLatestTime"];
          if (success) {
            showHTML += `
            <div class="netdisk-static-body">
              <div class="netdisk-static-filename">
                    <a target="${
                      downloadUrl === "javascript:;" ? "" : "_blank"
                    }" href="${downloadUrl}" data-download='${JSON.stringify(
              info
            )}'>${fileName}</a>
                  </div>
              ${
                fileSize
                  ? `<div class="netdisk-static-filesize">${fileSize}</div>`
                  : ""
              }
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
            </div>
            `;
          } else {
            showHTML += `
            <div class="netdisk-static-body">
              <div class="netdisk-static-filename">
                <a href="javascript:;">${fileName}</a>
              </div>
              ${
                fileSize
                  ? `<div class="netdisk-static-filesize">${fileSize}</div>`
                  : ""
              }
            </div>`;
          }
        });
        let alertElement = pops.alert({
          title: {
            text: title,
            position: "center",
          },
          content: {
            text: showHTML,
            html: true,
          },
          btn: {
            ok: {
              text: "关闭",
            },
          },
          class: "whitesevPopMoreFile",
          mask: true,
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.moreFileStaticView.Mobile.height
            : NetDiskUI.popsStyle.moreFileStaticView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.moreFileStaticView.Mobile.width
            : NetDiskUI.popsStyle.moreFileStaticView.PC.width,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
        if (clickCallBack) {
          log.success("设置当前直链弹窗超链接自定义点击事件");
          alertElement.element
            .querySelectorAll("div.netdisk-static-filename a")
            .forEach((item) => {
              item.setAttribute("href", "javascript:;");
              item.removeAttribute("target");
            });
          DOMUtils.on(alertElement.element, "click", "a", function (event) {
            /* 该链接是否是成功的 */ let dataDownload = utils.toJSON(
              event.target.getAttribute("data-download")
            );
            clickCallBack(event, dataDownload);
          });
        }
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
          ? NetDiskUI.popsStyle.inputNewAccessCodeView.Mobile.height
          : NetDiskUI.popsStyle.inputNewAccessCodeView.PC.height,
        width: pops.isPhone()
          ? NetDiskUI.popsStyle.inputNewAccessCodeView.Mobile.width
          : NetDiskUI.popsStyle.inputNewAccessCodeView.PC.width,
        mask: true,
        animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
        drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
        forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
      });
      /**
       * 注册键盘回车事件
       */
      utils.listenKeyPress(
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
                  mask: true,
                });
              },
            },
          },
          class: "whitesevPopNetDiskHistoryMatch",
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.historyMatchView.Mobile.height
            : NetDiskUI.popsStyle.historyMatchView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.historyMatchView.Mobile.width
            : NetDiskUI.popsStyle.historyMatchView.PC.height,
          mask: true,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
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
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon img{
          width: 28px;
          height: 28px;
          font-size: 13px;
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
              let deleteLoading = pops.loading({
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

        utils.listenKeyPress(
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
        DOMUtils.on(
          document.querySelector(".whitesevPopNetDiskHistoryMatch"),
          "contextmenu",
          ".netdiskrecord-link a",
          function (event) {
            NetDiskUI.view.showContextMenu(event, [
              {
                text: "复制链接",
                callback: function () {
                  let netDiskName = event.target.getAttribute("data-netdisk");
                  let netDiskIndex =
                    event.target.getAttribute("data-netdisk-index");
                  let shareCode = event.target.getAttribute("data-sharecode");
                  let accessCode = event.target.getAttribute("data-accesscode");
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
                callback: function () {
                  let netDiskName = event.target.getAttribute("data-netdisk");
                  let netDiskIndex =
                    event.target.getAttribute("data-netdisk-index");
                  let shareCode = event.target.getAttribute("data-sharecode");
                  let accessCode = event.target.getAttribute("data-accesscode");
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
                        event.target
                          .closest("li")
                          .querySelector(
                            ".netdiskrecord-update-time"
                          ).lastChild.textContent =
                          utils.formatTime(currentTime);
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
        let popsConfirm = pops.confirm({
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
                pops.confirm({
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
                  mask: true,
                });
              },
            },
          },
          class: this.accessCodeRuleDialogClassName,
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.accessCodeRuleView.Mobile.height
            : NetDiskUI.popsStyle.accessCodeRuleView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.accessCodeRuleView.Mobile.width
            : NetDiskUI.popsStyle.accessCodeRuleView.PC.height,
          mask: true,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
        that.setDeleteAllBtnText(popsConfirm.element);
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
        let popsConfirm = pops.confirm({
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
                let accessRuleNetDiskElement = event.popsElement.querySelector(
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
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.accessCodeRuleEditView.Mobile.height
            : NetDiskUI.popsStyle.accessCodeRuleEditView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.accessCodeRuleEditView.Mobile.width
            : NetDiskUI.popsStyle.accessCodeRuleEditView.PC.height,
          mask: true,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
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
          event.element,
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
              that.setDeleteAllBtnText(event.element);
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
        let popsConfirm = pops.confirm({
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
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.customRulesView.Mobile.height
            : NetDiskUI.popsStyle.customRulesView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.customRulesView.Mobile.width
            : NetDiskUI.popsStyle.customRulesView.PC.height,
          mask: true,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
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
        let popsConfirm = pops.confirm({
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
          animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
          height: pops.isPhone()
            ? NetDiskUI.popsStyle.matchPasteTextView.Mobile.height
            : NetDiskUI.popsStyle.matchPasteTextView.PC.height,
          width: pops.isPhone()
            ? NetDiskUI.popsStyle.matchPasteTextView.Mobile.width
            : NetDiskUI.popsStyle.matchPasteTextView.PC.height,
          mask: true,
          drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
        });
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

  const NetDiskMenu = {
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
          text: "⚙ 打开主动识别本文",
          showText(text) {
            return text;
          },
          callback() {
            NetDiskUI.matchPasteText.show();
          },
        },
        {
          key: "repairHistoryMatchLocalData",
          text: "🔧 修复版本＜23.5.30.10.00历史匹配记录的数据",
          showText(text) {
            return text;
          },
          callback() {
            let localData = GM_getValue(
              NetDiskUI.netDiskHistoryMatch.storageKey
            );
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
      ]);
    },
  };

  NetDiskMenu.init();
  NetDiskCustomRules.init();
  DOMUtils.ready(function () {
    log.config({
      logMaxCount: 200000,
      autoClearConsole: false,
    });
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
    NetDiskAutoFillAccessCode.default();
    NetDiskAuthorization.default();
    NetDiskUI.monitorDOMInsert();
  });
})();
