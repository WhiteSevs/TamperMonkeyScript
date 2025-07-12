// ==UserScript==
// @name         网盘链接识别
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.7.12
// @author       WhiteSevs
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、坚果云、UC网盘、BT磁力、360云盘，支持蓝奏云、天翼云(需登录)、123盘、奶牛、UC网盘(需登录)、坚果云(需登录)和阿里云盘(需登录，且限制在网盘页面解析)直链获取下载，页面动态监控加载的链接，可自定义规则来识别小众网盘/网赚网盘或其它自定义的链接。
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACsJJREFUeF7tXW+IHdUVP2c2u8kHIQYL0TRIaK1SgrFFaZsvVkpAo6YR1LJpa9jUd++83SUpSrUNBFRCrVgxNOv+mTOvJBBNmtpamoQG9UNBKLHFDzEtFttKBdOYQENE/Lb75vZd2cVNum/uvXNnZt/MnoGQD+/c8+d3fu+c+2f2PgR+ljQCuKSj5+CBCbDEScAEYAIscQSWePhcAZgASxyBJR4+VwAmQHEIjIyM3DAzM/M1pdSXEfEWALgVANbkaPE0ABwhomdz1GmtSgixHxF3Wg8wC55HxPeVUu8DgP7/jRUrVvxpbGzsY/PQbBK5VwCd9Ha7vVkptRkA9L8yHiKisAxDczaklL8GgAfLsImIryql3gSAqBPnh3nazI0AjUZjbRAEjwLAI3k6aKtLKbUjjuODtvI+cs1m894kSY776Mg49hwAxHkSIRcCSCl10nXy12YMLI9hrxDR/XkoMukQQrQQ8WGTXIGfn0PEZ6IoGvO14U0AKeUJALjH15Ecxr9ARHn2464uCSEOI+K2HHz2VXGUiAZ9lHgRQEp5BgBu9nEgr7FBEGyZmprSZCz8EUIMIuKRwg3ZGfiAiK63E/1/qcwEkFJ+BAArsxrOedzLRPSdnHWmqgvD8EBntj5Ups0UWxeI6NosvmQigBDibUTckMVgAWNKXwHMxSClfBwAtgPA+gLiclX5GhHd6TrImQBhGO5RSu11MHQREY8nSXICEf/R399/bnx8/KLD+CUl2plf3BgEwa1JktyOiN8HgKscAHCuhE4EaDabQ0mSHLBxSCml5weHlFKHWq3WBZsxLHM5AlLKLwLAQwCwCwBWWeLzKBHts5S1fx9ASnkdALxluZPXIiJh6wTLpSMwPDx8U7vd/iEADFtgdTZJko2tVuushawTAZ4EgCdMSpVSW+M4PmaS48/dEZBSWuWgMznfR0R6X8b4WLUA228/Ig5GUXTUaJUFMiMghNiEiK+bFCxbtuxLExMT/zLJ2RLAhnmTRDRiMsif+yMQhuFupdTTaZoQcZfNTqEVAYQQf0TEO1IMXurr69s4OTn5rn94rMEGAYul+Ekiutuky0iAoaGhqwcGBi4ZFD1FRLpK8FMSAkKIHyHiz9PM2bQBIwGklPcBwO9SDH0CAF8hovdKip3NAECj0VgdBMHf05aHSqntcRwfSm0VJjSllD8DgJ90k1NKTcVxbLM8MZnizx0RkFL+BgC6noAi4nNRFD3mSwB96NH1xKnMc3hHfGovbnEoZdweNraAMAxPKaW+0Q1NRFwfRdE7tUe7BwOUUuqTWL3j2u0xHhIZCSCl1K8gdT1pIiKjjh7ErhYujY6OXjM9Pf3ftGBM+TEmT0qpfAzUAukeDsI3P0yAHk6ujWtMABuUaizDBKhxcm1CYwLYoFRjGSZAjZNrExoTwAalGsswAWqcXJvQmAA2KNVYhglQ4+TahMYEsEGpxjK1IYCU8vcAcJvlW8dVTqn+C9+3iGhrHkHUggCmIPIAqhd1mA5qbHw2YWeysehnAWVetGADaMkyzn/Jc6V/dSDAeQBYXTLwvWLOeF5vcrQOBEg9bjYBUPXPTSXaFB8TwIRQj3/OBDC8cNLj+fN2r+oEOE1EX/VBwVTCfHRXYWzBBDDmx7gKMNyF92PfO/pMBPAFKO9Zsyupio7PNz9GAuiAuyzVcrmZo2iA6k4A3/xYEUAb0Xfjtdvt+xBxlVLqeF538jEB8nmrOmt+rAngWvps5ZkA+RDAFu8r5XqBAP9J2f8/R0SfzxrcQuMWgXClxueKVS8QQB8CfbuL48fyOjSZ078IBCg1vsoRYHYSs+BuYN4rgDRbc8CVabMIW5UkwLyZ7O2zAbxR1MWPZVeAeZVH3y5eeHyVJYCr41nlF4sAWf0tetyizwGKDnCx9wHKjs/VHhPgCsR6oS+7JtFHngnABPDhT/XG8hzg8pxxBeAKUL1vsY/HXAG4AvCNJ/M4wC2AW4BPQa3eWG4B3AK4BXAL6F65eCOoelXdyWNuAdwCuAVwC+AWMIcALwN5GejUQisvzHMAngPwHIDnADwH4DlAFw7wPkDlu3x6ADwHyDgHCMPwLqXUJgCYDoLgpampqb9VkSt1JUDW/FgtA6WUvwSAH1yR8Bc7vxSmf9i4Uk8dCeCTHyMBDL8a9j0iOlwlBtSNAL75sSGA/v1Z/TPmCz3/JqIvMAEWDwEppVd+bAhQq3VzDSuAV36YABXfCvYlNBOACbC01s2+35jF6/YLW/aNhysAVwCuAPMRqNpWMFcAx5rsC5ijucLFfePhFsAtgFsAt4AUDviWmMJroKMBjsfxNJABc2RYyeK++VmKc4CevrfPlT9MAEfEZn+cqrR7CR3dcxZnAjhD9unl16XdS5jBPachTAAnuD4Tnr0Bvefu7XMNhwngiljN5JkANUuoazhMAFfEaia/6ATo7+//3Pj4+MWa4VqZcAwEOE9E16UFY7MPkLZu1ro3ENFfK4NYjRwVQtyIiO92CwkR34yiaKMvAY4BwJZuSpRSD8Rx/Nsa4VqZUMIw3KaUSnsr+1dEtM2LAEKIvYi4J4VlB6Mo2lEZ1GrkqBBiEhGbKSE9Q0S7vQggpfwuALyUouRikiTrW63WhRph2/OhSCn1q/qnAeCqlOp8dxzHJ70IMDIycsPMzMw/05QopR6L4/i5nketRg5KKZ8EgCfSQlq+fPnKsbGxj70IoAdLKf8AAJtTmHYmjuNbaoRvT4cyPDx8U7vdPgUAq1Ja86tRFN1lCsS4CtAKwjDcqZTab1DWIiJhMsif+yMgpZwAgGGDpqeISFeJ1MeKADZtQFtRSm2N41ivGvgpCAGb0t8p2ucA4DYi+tDkhhUBZtvA8wDwiFEh4mAURUdNcvy5OwJCiE2I+LrFSKtvv9ZjTYBGo7E2CALdd9ZaODDZ19f3i8nJya6bFBY6WGQeAmEY7lZKPW0BivW334kAs1VAVwBdCWyeSwCg5w2HOvcIvGczgGUuR6DRaKxGRH0Hw0OIuMEGH0TcFUXRmI2sMwFmSXACAO6xNQAAnyilXuysIv4cBMFfoih6x2HskhIdHR29Znp6eo1Saj0iPgAA30qb6S8AzlEiGnQBzboFzFcqpTwDADe7GCpIVm+EHCGiZwvSn6pWCLEfEXcuhu0FbH5ARNe7+pKJALOV4CMAWOlqsCB56sx4w4J0L6h29o2iB8u0mWLrAhFdm8WXzATQxoQQb9v2pizOuYxRSu2I4/igy5isss1m894kSY5nHZ/zuNeI6M6sOr0IoI2GYbhHKbU3qwM5jnulcyx9f476uqoSQrQQ8eEybBlsvOz7G8veBNAONpvNoSRJfgoAaxYRlBeIqJR+3DmHP9w5h089Zi0Yh7N6NUZE+3zt5EKA2TmBfvNE92G9HVw6EYIg2DI1NaVXKIU/QohBRDxSuKGFDexLkuT5VqulSeD95EaAOU+klJ8SQSn1TUS8w9tDOwXepdDOzGdSYRgeUEoNuY7LKH8SEU/29fWdnJiY0LeC5fbkToD5ng0NDV09MDCgSfB1AFiHiOuUUusAINOMtUvUpa8A5pH9cQDYDgDrc8sIgH6vQk+uzyRJcqa/v/9U3kmf72uhBMgRFFZVEAJMgIKArYpaJkBVMlWQn0yAgoCtilomQFUyVZCfTICCgK2KWiZAVTJVkJ9MgIKArYra/wGYigzMiqJYZwAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@7272395d2c4ef6f254ee09724e20de4899098bc0/scripts-vite/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.13/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@886625af68455365e426018ecb55419dd4ea6f30/lib/CryptoJS/index.js
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
// @connect      lanzn.com
// @connect      lanzog.com
// @connect      lanpw.com
// @connect      lanpv.com
// @connect      lanzv.com
// @connect      wwentua.com
// @connect      ilanzou.com
// @connect      189.cn
// @connect      123pan.com
// @connect      123pan.cn
// @connect      wenshushu.cn
// @connect      jianguoyun.com
// @connect      cowtransfer.com
// @connect      cowcs.com
// @connect      aliyundrive.com
// @connect      baidu.com
// @connect      139.com
// @connect      weiyun.com
// @connect      xunlei.com
// @connect      115.com
// @connect      quark.cn
// @connect      jianguoyun.com
// @connect      uc.cn
// @connect      ctfile.com
// @connect      sharepoint.com
// @connect      whatslink.info
// @connect      www.yunpan.com
// @connect      link.yunpan.com
// @grant        GM_deleteValue
// @grant        GM_download
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops, CryptoJS) {
  'use strict';

  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_download = /* @__PURE__ */ (() => typeof GM_download != "undefined" ? GM_download : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_openInTab = /* @__PURE__ */ (() => typeof GM_openInTab != "undefined" ? GM_openInTab : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const CommonUtil = {
    /**
     * 移除元素（未出现也可以等待出现）
     * @param selector 元素选择器
     */
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") {
          return;
        }
        utils.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
      });
    },
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
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
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
      DOMUtils.ready(() => {
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
      let urlInstance = new URL(url);
      urlInstance.protocol = "https:";
      return urlInstance.toString();
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
    },
    /**
     * 获取剪贴板文本
     */
    async getClipboardText() {
      function readClipboardText(resolve) {
        navigator.clipboard.readText().then((clipboardText) => {
          resolve(clipboardText);
        }).catch((error) => {
          log.error("读取剪贴板内容失败👉", error);
          resolve("");
        });
      }
      function requestPermissionsWithClipboard(resolve) {
        navigator.permissions.query({
          // @ts-ignore
          name: "clipboard-read"
        }).then((permissionStatus) => {
          readClipboardText(resolve);
        }).catch((error) => {
          log.error(
            "申请剪贴板权限失败，尝试直接读取👉",
            error.message ?? error.name ?? error.stack
          );
          readClipboardText(resolve);
        });
      }
      function checkClipboardApi() {
        if (typeof navigator?.clipboard?.readText !== "function") {
          return false;
        }
        if (typeof navigator?.permissions?.query !== "function") {
          return false;
        }
        return true;
      }
      return new Promise((resolve) => {
        if (!checkClipboardApi()) {
          resolve("");
          return;
        }
        if (document.hasFocus()) {
          requestPermissionsWithClipboard(resolve);
        } else {
          window.addEventListener(
            "focus",
            () => {
              requestPermissionsWithClipboard(resolve);
            },
            {
              once: true
            }
          );
        }
      });
    },
    /**
     * html转义
     * @param unsafe
     */
    escapeHtml(unsafe) {
      return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/©/g, "&copy;").replace(/®/g, "&reg;").replace(/™/g, "&trade;").replace(/→/g, "&rarr;").replace(/←/g, "&larr;").replace(/↑/g, "&uarr;").replace(/↓/g, "&darr;").replace(/—/g, "&mdash;").replace(/–/g, "&ndash;").replace(/…/g, "&hellip;").replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br>").replace(/\r/g, "<br>").replace(/\n/g, "<br>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  };
  const PanelSettingConfig = {
    /** Toast位置 */
    qmsg_config_position: {
      key: "qmsg-config-position",
      defaultValue: "bottom"
    },
    /** 最多显示的数量 */
    qmsg_config_maxnums: {
      key: "qmsg-config-maxnums",
      defaultValue: 3
    },
    /** 逆序弹出 */
    qmsg_config_showreverse: {
      key: "qmsg-config-showreverse",
      defaultValue: false
    }
  };
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops = pops;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  let SCRIPT_NAME = _GM_info?.script?.name || void 0;
  const AnyTouch = pops.config.Utils.AnyTouch();
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
            return Panel.getValue(
              PanelSettingConfig.qmsg_config_position.key,
              PanelSettingConfig.qmsg_config_position.defaultValue
            );
          }
        },
        maxNums: {
          get() {
            return Panel.getValue(
              PanelSettingConfig.qmsg_config_maxnums.key,
              PanelSettingConfig.qmsg_config_maxnums.defaultValue
            );
          }
        },
        showReverse: {
          get() {
            return Panel.getValue(
              PanelSettingConfig.qmsg_config_showreverse.key,
              PanelSettingConfig.qmsg_config_showreverse.defaultValue
            );
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
  __pops.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      let maxZIndex = Utils.getMaxZIndex(void 0, void 0, ($ele) => {
        if ($ele?.classList?.contains("qmsg-shadow-container")) {
          return false;
        }
        if ($ele?.closest("qmsg") && $ele.getRootNode() instanceof ShadowRoot) {
          return false;
        }
      });
      let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
    },
    mask: {
      // 开启遮罩层
      enable: true,
      // 取消点击遮罩层的事件
      clickEvent: {
        toClose: false,
        toHide: false
      }
    }
  });
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: DEBUG
  });
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error("拦截器-请求错误", data);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消", { consoleLogContent: true });
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常", { consoleLogContent: true });
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时", { consoleLogContent: true });
    } else {
      Qmsg.error("其它错误", { consoleLogContent: true });
    }
    return data;
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
  new utils.GM_Cookie();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const PROPS_STORAGE_API = "data-storage-api";
  const PanelUISize = {
    /**
     * 一般设置界面的尺寸
     */
    setting: {
      get width() {
        if (window.innerWidth < 550) {
          return "88vw";
        } else if (window.innerWidth < 700) {
          return "550px";
        } else {
          return "700px";
        }
      },
      get height() {
        if (window.innerHeight < 450) {
          return "70vh";
        } else if (window.innerHeight < 550) {
          return "450px";
        } else {
          return "550px";
        }
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
  class StorageUtils {
    /** 存储的键名 */
    storageKey;
    listenerData;
    /**
     * 存储的键名，可以是多层的，如：a.b.c
     *
     * 那就是
     * {
     *  "a": {
     *     "b": {
     *       "c": {
     *         ...你的数据
     *       }
     *     }
     *   }
     * }
     * @param key
     */
    constructor(key) {
      if (typeof key === "string") {
        let trimKey = key.trim();
        if (trimKey == "") {
          throw new Error("key参数不能为空字符串");
        }
        this.storageKey = trimKey;
      } else {
        throw new Error("key参数类型错误，必须是字符串");
      }
      this.listenerData = new Utils.Dictionary();
    }
    /**
     * 获取本地值
     */
    getLocalValue() {
      let localValue = _GM_getValue(this.storageKey);
      if (localValue == null) {
        localValue = {};
        this.setLocalValue(localValue);
      }
      return localValue;
    }
    /**
     * 设置本地值
     * @param value
     */
    setLocalValue(value) {
      _GM_setValue(this.storageKey, value);
    }
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    set(key, value) {
      let oldValue = this.get(key);
      let localValue = this.getLocalValue();
      Reflect.set(localValue, key, value);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, value);
    }
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    get(key, defaultValue) {
      let localValue = this.getLocalValue();
      return Reflect.get(localValue, key) ?? defaultValue;
    }
    /**
     * 获取所有值
     */
    getAll() {
      let localValue = this.getLocalValue();
      return localValue;
    }
    /**
     * 删除值
     * @param key 键
     */
    delete(key) {
      let oldValue = this.get(key);
      let localValue = this.getLocalValue();
      Reflect.deleteProperty(localValue, key);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, void 0);
    }
    /**
     * 判断是否存在该值
     */
    has(key) {
      let localValue = this.getLocalValue();
      return Reflect.has(localValue, key);
    }
    /**
     * 获取所有键
     */
    keys() {
      let localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue);
    }
    /**
     * 获取所有值
     */
    values() {
      let localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue).map(
        (key) => Reflect.get(localValue, key)
      );
    }
    /**
     * 清空所有值
     */
    clear() {
      _GM_deleteValue(this.storageKey);
    }
    /**
     * 监听值改变
     * + .set
     * + .delete
     * @param key 监听的键
     * @param callback 值改变的回调函数
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      let listenerData = this.listenerData.get(key) || [];
      listenerData.push({
        id: listenerId,
        key,
        callback
      });
      this.listenerData.set(key, listenerData);
      return listenerId;
    }
    /**
     * 移除监听
     * @param listenerId 监听的id或键名
     */
    removeValueChangeListener(listenerId) {
      let flag = false;
      for (const [key, listenerData] of this.listenerData.entries()) {
        for (let index = 0; index < listenerData.length; index++) {
          const value = listenerData[index];
          if (typeof listenerId === "string" && value.key === listenerId || typeof listenerId === "number" && value.id === listenerId) {
            listenerData.splice(index, 1);
            index--;
            flag = true;
          }
        }
        this.listenerData.set(key, listenerData);
      }
      return flag;
    }
    /**
     * 主动触发监听器
     * @param key 键
     * @param oldValue （可选）旧值
     * @param newValue （可选）新值
     */
    triggerValueChangeListener(key, oldValue, newValue) {
      if (!this.listenerData.has(key)) {
        return;
      }
      let listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let value = this.get(key);
          let __newValue;
          let __oldValue;
          if (typeof oldValue !== "undefined" && arguments.length >= 2) {
            __oldValue = oldValue;
          } else {
            __oldValue = value;
          }
          if (typeof newValue !== "undefined" && arguments.length > 2) {
            __newValue = newValue;
          } else {
            __newValue = value;
          }
          data.callback(key, __oldValue, __newValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
  const PanelContent = {
    $data: {
      /**
       * @private
       */
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) {
          this.__contentConfig = new utils.Dictionary();
        }
        return this.__contentConfig;
      }
    },
    /**
     * 设置所有配置项，用于初始化默认的值
     *
     * 如果是第一组添加的话，那么它默认就是设置菜单打开的配置
     * @param configList 配置项
     */
    addContentConfig(configList) {
      if (!Array.isArray(configList)) {
        configList = [configList];
      }
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    /**
     * 获取所有的配置内容，用于初始化默认的值
     */
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    /**
     * 获取配置内容
     * @param index 配置索引
     */
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    /**
     * 获取默认左侧底部的配置项
     */
    getDefaultBottomContentConfig() {
      return [
        {
          id: "script-version",
          title: `版本：${_GM_info?.script?.version || "未知"}`,
          isBottom: true,
          forms: [],
          clickFirstCallback(event, rightHeaderElement, rightContainerElement) {
            let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
            if (typeof supportURL === "string" && utils.isNotNull(supportURL)) {
              window.open(supportURL, "_blank");
            }
            return false;
          }
        }
      ];
    }
  };
  const PanelMenu = {
    $data: {
      __menuOption: [
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            Panel.showPanel(PanelContent.getConfig(0));
          }
        }
      ],
      get menuOption() {
        return this.__menuOption;
      }
    },
    init() {
      this.initExtensionsMenu();
    },
    /**
     * 初始化菜单项
     */
    initExtensionsMenu() {
      if (!Panel.isTopWindow()) {
        return;
      }
      GM_Menu.add(this.$data.menuOption);
    },
    /**
     * 添加菜单项
     * @param option 菜单配置
     */
    addMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      this.$data.menuOption.push(...option);
    },
    /**
     * 更新菜单项
     * @param option 菜单配置
     */
    updateMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      option.forEach((optionItem) => {
        let findIndex = this.$data.menuOption.findIndex((it) => {
          return it.key === optionItem.key;
        });
        if (findIndex !== -1) {
          this.$data.menuOption[findIndex] = optionItem;
        }
      });
    },
    /**
     * 获取菜单项
     * @param [index=0] 索引
     */
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    /**
     * 删除菜单项
     * @param [index=0] 索引
     */
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    }
  };
  const Panel = {
    /** 数据 */
    $data: {
      /**
       * @private
       */
      __configDefaultValueData: null,
      /**
       * @private
       */
      __onceExecMenuData: null,
      /**
       * @private
       */
      __onceExecData: null,
      /**
       * @private
       */
      __panelConfig: {},
      $panel: null,
      /**
       * 菜单项的默认值
       */
      get configDefaultValueData() {
        if (this.__configDefaultValueData == null) {
          this.__configDefaultValueData = new utils.Dictionary();
        }
        return this.__configDefaultValueData;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) {
          this.__onceExecMenuData = new utils.Dictionary();
        }
        return this.__onceExecMenuData;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExecData() {
        if (this.__onceExecData == null) {
          this.__onceExecData = new utils.Dictionary();
        }
        return this.__onceExecData;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
      /**
       * pops.panel的默认配置
       */
      get panelConfig() {
        return this.__panelConfig;
      },
      set panelConfig(value) {
        this.__panelConfig = value;
      },
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    init() {
      this.initContentDefaultValue();
      PanelMenu.init();
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    /** 初始化菜单项的默认值保存到本地数据中 */
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) {
          return;
        }
        if (config.type === "button" || config.type === "forms" || config.type === "deepMenu") {
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
          log.warn(["请先配置键", config]);
          return;
        }
        needInitConfigList.forEach((__key) => {
          let __defaultValue = needInitConfig[__key];
          this.setDefaultValue(__key, __defaultValue);
        });
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
          }
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        const rightContentConfigList = leftContentConfigItem.forms;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
        }
      }
    },
    /**
     * 设置初始化使用的默认值
     */
    setDefaultValue(key, defaultValue) {
      if (this.$data.configDefaultValueData.has(key)) {
        log.warn("请检查该key(已存在): " + key);
      }
      this.$data.configDefaultValueData.set(key, defaultValue);
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      PopsPanelStorageApi.set(key, value);
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let localValue = PopsPanelStorageApi.get(key);
      if (localValue == null) {
        if (this.$data.configDefaultValueData.has(key)) {
          return this.$data.configDefaultValueData.get(key);
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
      PopsPanelStorageApi.delete(key);
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      return PopsPanelStorageApi.has(key);
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = PopsPanelStorageApi.addValueChangeListener(
        key,
        (__key, __newValue, __oldValue) => {
          callback(key, __oldValue, __newValue);
        }
      );
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    /**
     * 主动触发菜单值改变的回调
     * @param key 菜单键
     * @param newValue 想要触发的新值，默认使用当前值
     * @param oldValue 想要触发的旧值，默认使用当前值
     */
    triggerMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * @param key 键
     */
    deleteExecMenuOnce(key) {
      this.$data.onceExecMenuData.delete(key);
      let flag = PopsPanelStorageApi.removeValueChangeListener(key);
      return flag;
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * @param key 键
     */
    deleteOnceExec(key) {
      this.$data.onceExecData.delete(key);
    },
    /**
     * 执行菜单
     *
     * @param queryKey 键|键数组
     * @param callback 执行的回调函数
     * @param checkExec 判断是否执行回调
     *
     * （默认）如果想要每个菜单是`与`关系，即每个菜单都判断为开启，那么就判断它们的值&就行
     *
     * 如果想要任意菜单存在true再执行，那么判断它们的值|就行
     *
     * + 返回值都为`true`，执行回调，如果回调返回了<style>元素，该元素会在监听到值改变时被移除掉
     * + 返回值有一个为`false`，则不执行回调，且移除之前回调函数返回的<style>元素
     * @param once 是否只执行一次，默认true
     *
     * + true （默认）只执行一次，且会监听键的值改变
     * + false 不会监听键的值改变
     */
    exec(queryKey, callback, checkExec, once = true) {
      const that = this;
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) {
        queryKeyFn = () => queryKey;
      } else {
        queryKeyFn = queryKey;
      }
      let isArrayKey = false;
      let queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else {
        keyList.push(queryKeyResult);
      }
      let findNotInDataKey = keyList.find(
        (it) => !this.$data.configDefaultValueData.has(it)
      );
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      let storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) {
          return;
        }
        this.$data.onceExecMenuData.set(storageKey, 1);
      }
      let storeValueList = [];
      let listenerIdList = [];
      let dynamicAddStyleNodeCallback = (value, $style) => {
        let dynamicResultList = [];
        if (!Array.isArray($style)) {
          $style = [$style];
        }
        $style.forEach(($styleItem) => {
          if ($styleItem == null) {
            return;
          }
          if ($styleItem instanceof HTMLStyleElement) {
            dynamicResultList.push($styleItem);
            return;
          }
        });
        {
          storeValueList = storeValueList.concat(dynamicResultList);
        }
      };
      let getMenuValue = (key) => {
        let value = this.getValue(key);
        return value;
      };
      let clearBeforeStoreValue = () => {
        for (let index = 0; index < storeValueList.length; index++) {
          let $css = storeValueList[index];
          $css.remove();
          storeValueList.splice(index, 1);
          index--;
        }
      };
      let checkMenuExec = () => {
        let flag = false;
        if (typeof checkExec === "function") {
          flag = checkExec(keyList);
        } else {
          flag = keyList.every((key) => getMenuValue(key));
        }
        return flag;
      };
      let valueChangeCallback = (valueOption) => {
        let execFlag = checkMenuExec();
        let resultList = [];
        if (execFlag) {
          let valueList = keyList.map((key) => this.getValue(key));
          let callbackResult = callback({
            value: isArrayKey ? valueList : valueList[0],
            addStyleElement: (...args) => {
              return dynamicAddStyleNodeCallback(true, ...args);
            }
          });
          if (!Array.isArray(callbackResult)) {
            callbackResult = [callbackResult];
          }
          callbackResult.forEach((it) => {
            if (it == null) {
              return;
            }
            if (it instanceof HTMLStyleElement) {
              resultList.push(it);
              return;
            }
          });
        }
        clearBeforeStoreValue();
        storeValueList = [...resultList];
      };
      once && keyList.forEach((key) => {
        let listenerId = this.addValueChangeListener(
          key,
          (key2, newValue, oldValue) => {
            valueChangeCallback();
          }
        );
        listenerIdList.push(listenerId);
      });
      valueChangeCallback();
      let result = {
        /**
         * 清空菜单执行情况
         *
         * + 清空存储的元素列表
         * + 清空值改变的监听器
         * + 清空存储的一次执行的键
         */
        clear() {
          this.clearStoreStyleElements();
          this.removeValueChangeListener();
          once && that.$data.onceExecMenuData.delete(storageKey);
        },
        /**
         * 清空存储的元素列表
         */
        clearStoreStyleElements: () => {
          return clearBeforeStoreValue();
        },
        /**
         * 移除值改变的监听器
         */
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        }
      };
      return result;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     * @param [isReverse=false] 逆反判断菜单启用
     */
    execMenu(key, callback, isReverse = false) {
      return this.exec(
        key,
        (option) => {
          return callback(option);
        },
        (keyList) => {
          let execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            isReverse && (flag = !flag);
            return flag;
          });
          return execFlag;
        },
        false
      );
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     *
     * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
     * @param key
     * @param callback 回调
     * @param getValueFn 自定义处理获取当前值，值true是启用并执行回调，值false是不执行回调
     * @param handleValueChangeFn 自定义处理值改变时的回调，值true是启用并执行回调，值false是不执行回调
     */
    execMenuOnce(key, callback) {
      return this.exec(
        key,
        callback,
        (keyList) => {
          let execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            return flag;
          });
          return execFlag;
        },
        true
      );
    },
    /**
     * 根据key执行一次
     * @param key 键
     * @param callback 回调
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExecData.has(key)) {
        return;
      }
      callback();
      this.$data.onceExecData.set(key, 1);
    },
    /**
     * 显示设置面板
     * @param content 显示的内容配置
     * @param [title] 标题
     * @param [preventDefaultContentConfig=false] 是否阻止默认添加内容配置（版本号）
     */
    showPanel(content, title = `${SCRIPT_NAME}-设置`, preventDefaultContentConfig = false) {
      let notHasBottomVersionContentConfig = content.some((it) => {
        let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
        return !isBottom && it.id !== "script-version";
      });
      if (!preventDefaultContentConfig && notHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      let $panel = __pops.panel({
        ...{
          title: {
            text: title,
            position: "center",
            html: false,
            style: ""
          },
          content,
          btn: {
            close: {
              enable: true,
              callback: (details, event) => {
                details.close();
                this.$data.$panel = null;
              }
            }
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
              toHide: false
            },
            clickCallBack: (originalRun, config) => {
              originalRun();
              this.$data.$panel = null;
            }
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          drag: true,
          only: true
        },
        ...this.$data.panelConfig
      });
      this.$data.$panel = $panel;
    }
  };
  class Paging {
    /**
     * @type {DeepRequired<PagingConfig>}
     */
    CONFIG = {
      data: [],
      pageCount: 5,
      pageStep: 3,
      currentPage: 1,
      pageChangeCallBack: function(page) {
      },
      prevBtn: {
        enable: true,
        callBack: function() {
        }
      },
      nextBtn: {
        enable: true,
        callBack: function() {
        }
      },
      firstBtn: {
        enable: true,
        callBack: function() {
        }
      },
      lastBtn: {
        enable: true,
        callBack: function() {
        }
      }
    };
    PAGE_CONFIG = {
      /**
       * 获取当前所在页
       * @returns {Number}
       */
      getCurrentPage: () => {
        return this.DOM_CONFIG.getAttributeWithPageId(
          // @ts-ignore
          this.DOM_CONFIG.getAttributeWithCurrentPage()
        );
      },
      /** 最大页码 */
      maxPage: 1
    };
    DOM_CONFIG = {
      /* 整个分页元素 */
      dataPagingNode: {
        localName: "div",
        id: "whitesev-datapaging",
        dom: null
      },
      /* 第一页按钮 */
      firstBtnNode: {
        localName: "a",
        className: "pg-first",
        svgHTML: `<svg t="1694497357294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4758" width="20"><path d="M730.639277 211.376748l60.943177 60.943176-301.698894 301.698893L428.940384 513.075641z" p-id="4759"></path><path d="M730.496772 814.924547l60.943176-60.943176-301.698893-301.698893L428.797879 513.225654z" p-id="4760"></path><path d="M298.666667 213.333333h85.333333v597.333334H298.666667z" p-id="4761"></path></svg>`,
        get: () => {
          return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
            `${this.DOM_CONFIG.firstBtnNode.localName}.${this.DOM_CONFIG.firstBtnNode.className}`
          );
        }
      },
      /* 上一页按钮 */
      prevBtnNode: {
        localName: "a",
        className: "pg-prev",
        svgHTML: `<svg t="1694497840770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5272" width="20"><path d="M620.322607 151.04875l60.943176 60.943176-362.038672 362.038672L258.283935 513.087422z" p-id="5273"></path><path d="M620.180101 875.252545l60.943177-60.943176-362.038672-362.038672L258.141429 513.213873z" p-id="5274"></path></svg>`,
        get: () => {
          return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
            `${this.DOM_CONFIG.prevBtnNode.localName}.${this.DOM_CONFIG.prevBtnNode.className}`
          );
        }
      },
      /* 下一页按钮 */
      nextBtnNode: {
        localName: "a",
        className: "pg-next",
        svgHTML: `<svg t="1694497949481" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5465" width="20"><path d="M403.399239 151.02258l-60.943177 60.943177 362.038672 362.038672L765.437911 513.061252z" p-id="5466"></path><path d="M403.576858 875.263008l-60.943176-60.943176 362.038672-362.038672L765.61553 513.224336z" p-id="5467"></path></svg>`,
        get: () => {
          return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
            `${this.DOM_CONFIG.nextBtnNode.localName}.${this.DOM_CONFIG.nextBtnNode.className}`
          );
        }
      },
      /* 最后一页按钮 */
      lastBtnNode: {
        localName: "a",
        className: "pg-last",
        svgHTML: `<svg t="1694498035538" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299" width="20"><path d="M516.266667 490.666667L256 230.4 315.733333 170.666667l320 320L315.733333 810.666667 256 750.933333l260.266667-260.266666zM678.4 170.666667h85.333333v640h-85.333333V170.666667z" p-id="2300"></path></svg>`,
        get: () => {
          return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
            `${this.DOM_CONFIG.lastBtnNode.localName}.${this.DOM_CONFIG.lastBtnNode.className}`
          );
        }
      },
      /**
       * 设置 元素的 页码 值
       * @param {HTMLElement} node
       */
      // @ts-ignore
      setAttributeWithPageId: (node, page) => {
        node.setAttribute("page-id", page);
      },
      /**
       * 获取 元素 的页码属性
       * @param {HTMLElement} node
       * @returns {number|null}
       */
      getAttributeWithPageId: (node) => {
        return node?.getAttribute("page-id") ? (
          // @ts-ignore
          parseInt(node.getAttribute("page-id"))
        ) : null;
      },
      /**
       * 判断 元素 是否存在页码属性
       * @param {HTMLElement} node
       * @returns {Boolean}
       */
      hasAttributeWithPageId: (node) => {
        return node.hasAttribute("page-id");
      },
      /**
       * 设置 元素的属性 为当前所在页码
       * @param {HTMLElement} node
       */
      setAttributeWithCurrentPage: (node) => {
        node.setAttribute("data-current-page", "");
      },
      /**
       * 获取当前页码的元素
       * @param {HTMLElement?} dataPagingNode
       * @returns {HTMLElement|null}
       */
      getAttributeWithCurrentPage: (dataPagingNode) => {
        return (
          // @ts-ignore
          (dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom).querySelector(
            "a[data-current-page]"
          )
        );
      },
      /**
       * 判断 元素 是否存在 当前页的属性
       * @param {HTMLElement} node
       * @returns
       */
      hasAttributeWithCurrentPage: (node) => {
        return node.hasAttribute("data-current-page");
      },
      /**
       * 移除 当前页码的属性
       * @param {HTMLElement} node
       */
      removeAttributeWithCurrentPage: (node) => {
        node.removeAttribute("data-current-page");
      },
      /**
       * 设置 元素 禁用
       * @param {HTMLElement} node
       */
      setAttributeWithDisabled: (node) => {
        node.setAttribute("disabled", "true");
      },
      /**
       * 移除当前页面的禁用的元素
       * @param {HTMLElement|null} dataPagingNode
       */
      removeAllAttributeWithDisabled: (dataPagingNode) => {
        (dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom).querySelectorAll("a[class][disabled]").forEach((item) => {
          item.removeAttribute("disabled");
        });
      },
      /**
       * 获取 第一页 元素节点
       * @param {HTMLElement?} dataPagingNode
       * @returns {HTMLElement|null}
       */
      getFirstPageNode: (dataPagingNode) => {
        return (
          // @ts-ignore
          (dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom).querySelector(
            "a[page-id='1']"
          )
        );
      },
      /**
       * 获取 最后一页 元素节点
       * @param {HTMLElement?} dataPagingNode
       * @returns {HTMLElement|null}
       */
      getLastPageNode: (dataPagingNode) => {
        return (
          // @ts-ignore
          (dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom).querySelector(
            `a[page-id='${this.PAGE_CONFIG.maxPage}']`
          )
        );
      },
      /**
       * 获取当前所有的页码元素节点
       * @param {HTMLElement?} dataPagingNode
       * @returns {NodeList}
       */
      getAllPageNode: (dataPagingNode) => {
        return (
          // @ts-ignore
          (dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom).querySelectorAll(
            "a[page-id]"
          )
        );
      }
    };
    /**
     * @param {PagingConfig} details
     */
    constructor(details) {
      this.changeConfig(details);
    }
    /**
     * 添加CSS
     * @param {Node} target 添加到目标元素
     */
    addCSS(target = document.head) {
      let cssNode = document.createElement("style");
      cssNode.setAttribute("type", "text/css");
      cssNode.innerHTML = /*css*/
      `@charset "utf-8";
		#${this.DOM_CONFIG.dataPagingNode.id} {
			text-align: center;
			display: inline-block;
		}
		#${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.firstBtnNode.className},
		#${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.prevBtnNode.className},
		#${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.nextBtnNode.className},
		#${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.lastBtnNode.className} {
			font-family: Arial, sans-serif;
			color: #333;
			font-size: 22px;
			fill: currentColor;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
		}
		#${this.DOM_CONFIG.dataPagingNode.id} a,
		#${this.DOM_CONFIG.dataPagingNode.id} span {
			width: 45px;
			height: 40px;
			border: 1px solid #ebebeb;
			margin-left: -1px;
			color: #000000;
			line-height: 40px;
			float: left;
			font-size: 15px;
			text-decoration: none;
			margin: 0 2px;
			border-radius: 6px;
		}
		#${this.DOM_CONFIG.dataPagingNode.id} a:hover,
		#${this.DOM_CONFIG.dataPagingNode.id} span:hover {
			border-color: #3897cd;
			color: #3897cd;
			position: relative;
			z-index: 1;
		}
		#${this.DOM_CONFIG.dataPagingNode.id} a {
			cursor: pointer;
			user-select: none;
		}
		#${this.DOM_CONFIG.dataPagingNode.id} a[data-current-page] {
			background-color: #222a35;
			color: #fff;
			border-color: #ebebeb;
			position: relative;
			z-index: 1;
		}
		#${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.firstBtnNode.className}[disabled="true"],
		#${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.prevBtnNode.className}[disabled="true"],
		#${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.nextBtnNode.className}[disabled="true"],
		#${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.lastBtnNode.className}[disabled="true"]{
			cursor: not-allowed;
			border: 1px solid transparent;
			color: #c9c9c9;
		}
		`;
      target.appendChild(cssNode);
    }
    /**
     * 获取分页元素
     * @returns {Element}
     */
    getDataPagingNode() {
      let that = this;
      let dataPagingNode = document.createElement(
        that.DOM_CONFIG.dataPagingNode.localName
      );
      that.DOM_CONFIG.dataPagingNode.dom = dataPagingNode;
      dataPagingNode.id = that.DOM_CONFIG.dataPagingNode.id;
      let firstBtnNode = document.createElement(
        that.DOM_CONFIG.firstBtnNode.localName
      );
      firstBtnNode.innerHTML = that.DOM_CONFIG.firstBtnNode.svgHTML;
      let prevBtnNode = document.createElement(
        that.DOM_CONFIG.prevBtnNode.localName
      );
      prevBtnNode.innerHTML = that.DOM_CONFIG.prevBtnNode.svgHTML;
      let nextBtnNode = document.createElement(
        that.DOM_CONFIG.nextBtnNode.localName
      );
      nextBtnNode.innerHTML = that.DOM_CONFIG.nextBtnNode.svgHTML;
      let lastBtnNode = document.createElement(
        that.DOM_CONFIG.lastBtnNode.localName
      );
      lastBtnNode.innerHTML = that.DOM_CONFIG.lastBtnNode.svgHTML;
      firstBtnNode.className = that.DOM_CONFIG.firstBtnNode.className;
      prevBtnNode.className = that.DOM_CONFIG.prevBtnNode.className;
      nextBtnNode.className = that.DOM_CONFIG.nextBtnNode.className;
      lastBtnNode.className = that.DOM_CONFIG.lastBtnNode.className;
      that.PAGE_CONFIG.maxPage = Math.ceil(
        that.CONFIG.data.length / that.CONFIG.pageCount
      );
      if (that.CONFIG.currentPage < 1) {
        that.CONFIG.currentPage = 1;
      } else if (that.CONFIG.currentPage > that.PAGE_CONFIG.maxPage) {
        that.CONFIG.currentPage = that.PAGE_CONFIG.maxPage;
      }
      if (that.PAGE_CONFIG.maxPage < 2) {
        return dataPagingNode;
      }
      if (that.CONFIG.firstBtn.enable) {
        this.setFirstBtnClickEvent(firstBtnNode, dataPagingNode);
        dataPagingNode.appendChild(firstBtnNode);
      }
      if (that.CONFIG.prevBtn.enable) {
        this.setPrevBtnClickEvent(prevBtnNode, dataPagingNode);
        dataPagingNode.appendChild(prevBtnNode);
      }
      let currentPage = that.CONFIG.currentPage;
      if (that.CONFIG.pageStep > that.PAGE_CONFIG.maxPage) {
        for (let _currentPage = currentPage; _currentPage <= that.PAGE_CONFIG.maxPage; _currentPage++) {
          let pageBtnNode = document.createElement("a");
          that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, _currentPage);
          pageBtnNode.innerText = _currentPage;
          if (that.CONFIG.currentPage === _currentPage) {
            that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
          }
          this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
          dataPagingNode.appendChild(pageBtnNode);
        }
      } else {
        if (currentPage + that.CONFIG.pageStep > that.PAGE_CONFIG.maxPage) {
          currentPage = that.PAGE_CONFIG.maxPage;
          let needAppendNodeList = [];
          for (let index = 0; index < that.CONFIG.pageStep; index++) {
            let pageBtnNode = document.createElement("a");
            that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
            pageBtnNode.innerText = currentPage;
            if (that.CONFIG.currentPage === currentPage) {
              that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
            }
            this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
            needAppendNodeList = [...needAppendNodeList, pageBtnNode];
            currentPage--;
          }
          needAppendNodeList.reverse();
          needAppendNodeList.forEach((item) => {
            dataPagingNode.appendChild(item);
          });
        } else {
          for (let index = 0; index < that.CONFIG.pageStep; index++) {
            let pageBtnNode = document.createElement("a");
            that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
            pageBtnNode.innerText = currentPage;
            if (that.CONFIG.currentPage === currentPage) {
              that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
            }
            this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
            dataPagingNode.appendChild(pageBtnNode);
            currentPage++;
          }
        }
      }
      if (that.CONFIG.nextBtn.enable) {
        this.setNextBtnClickEvent(nextBtnNode, dataPagingNode);
        dataPagingNode.appendChild(nextBtnNode);
      }
      if (that.CONFIG.lastBtn.enable) {
        this.setLastBtnClickEvent(lastBtnNode, dataPagingNode);
        dataPagingNode.appendChild(lastBtnNode);
      }
      if (that.CONFIG.currentPage === 1) {
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.firstBtnNode.get()
        );
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.prevBtnNode.get()
        );
      } else if (that.CONFIG.currentPage === that.PAGE_CONFIG.maxPage) {
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.nextBtnNode.get()
        );
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.lastBtnNode.get()
        );
      }
      return dataPagingNode;
    }
    /**
     * 设置 第一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    setFirstBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function() {
        let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
        if (that.DOM_CONFIG.getAttributeWithPageId(currentNode) === 1) {
          return;
        }
        that.CONFIG.firstBtn.callBack();
        let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
        for (let i = 0; i < that.CONFIG.pageStep; i++) {
          let item = allPageNode[i];
          if (i === 0) {
            that.DOM_CONFIG.setAttributeWithCurrentPage(item);
          } else {
            that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
          }
          that.DOM_CONFIG.setAttributeWithPageId(item, i + 1);
          item.innerText = i + 1;
        }
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        if (that.DOM_CONFIG.getFirstPageNode(dataPagingNode)) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.firstBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.prevBtnNode.get()
          );
        }
        that.CONFIG.pageChangeCallBack(1);
      };
    }
    /**
     * 设置 上一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    setPrevBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function() {
        let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
        if (that.DOM_CONFIG.getAttributeWithPageId(currentNode) === 1) {
          return;
        }
        that.CONFIG.prevBtn.callBack();
        if (that.DOM_CONFIG.hasAttributeWithPageId(
          // @ts-ignore
          currentNode.previousElementSibling
        )) {
          currentNode.previousElementSibling.click();
        } else {
          let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
          allPageNode.forEach((item, index) => {
            let page = that.DOM_CONFIG.getAttributeWithPageId(item);
            page--;
            that.DOM_CONFIG.setAttributeWithPageId(item, page);
            item.innerText = page;
          });
          that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
        }
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        if (that.DOM_CONFIG.getFirstPageNode(dataPagingNode) && that.PAGE_CONFIG.getCurrentPage() == 1) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.firstBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.prevBtnNode.get()
          );
        }
      };
    }
    /**
     * 设置 下一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    setNextBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function() {
        let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
        if (
          // @ts-ignore
          that.DOM_CONFIG.getAttributeWithPageId(currentNode) === that.PAGE_CONFIG.maxPage
        ) {
          return;
        }
        that.CONFIG.nextBtn.callBack();
        if (
          // @ts-ignore
          that.DOM_CONFIG.hasAttributeWithPageId(currentNode.nextElementSibling)
        ) {
          currentNode.nextElementSibling.click();
        } else {
          let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
          allPageNode.forEach((item, index) => {
            let page = that.DOM_CONFIG.getAttributeWithPageId(item);
            page++;
            if (page > that.PAGE_CONFIG.maxPage) {
              return;
            }
            that.DOM_CONFIG.setAttributeWithPageId(item, page);
            item.innerText = page;
          });
          that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
        }
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        if (
          // @ts-ignore
          that.DOM_CONFIG.getLastPageNode() && that.PAGE_CONFIG.getCurrentPage() == that.PAGE_CONFIG.maxPage
        ) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.nextBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.lastBtnNode.get()
          );
        }
      };
    }
    /**
     * 设置 最后一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    setLastBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function() {
        let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
        if (
          // @ts-ignore
          that.DOM_CONFIG.getAttributeWithPageId(currentNode) === that.PAGE_CONFIG.maxPage
        ) {
          return;
        }
        that.CONFIG.lastBtn.callBack();
        let allPageNode = Array.from(
          that.DOM_CONFIG.getAllPageNode(dataPagingNode)
        );
        allPageNode.reverse();
        let pageCount = that.PAGE_CONFIG.maxPage;
        let index = 0;
        while (true) {
          if (that.PAGE_CONFIG.maxPage - pageCount > 3) {
            break;
          }
          let item = allPageNode[index];
          if (item == null) {
            break;
          }
          if (index === 0) {
            that.DOM_CONFIG.setAttributeWithCurrentPage(item);
          } else {
            that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
          }
          that.DOM_CONFIG.setAttributeWithPageId(item, pageCount);
          item.innerText = pageCount;
          pageCount--;
          index++;
        }
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.nextBtnNode.get()
        );
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.lastBtnNode.get()
        );
        that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.maxPage);
      };
    }
    /**
     * 设置 页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     * @this {Paging}
     */
    setPageBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function(event) {
        let eventBtnNode = event.target;
        that.DOM_CONFIG.getAllPageNode(dataPagingNode).forEach((item) => {
          if (item == eventBtnNode) {
            if (!that.DOM_CONFIG.hasAttributeWithCurrentPage(eventBtnNode)) {
              that.DOM_CONFIG.setAttributeWithCurrentPage(eventBtnNode);
              that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
            }
          } else {
            that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
          }
        });
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        if (that.DOM_CONFIG.getFirstPageNode(dataPagingNode) && that.PAGE_CONFIG.getCurrentPage() == 1) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.firstBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.prevBtnNode.get()
          );
        }
        if (
          // @ts-ignore
          that.DOM_CONFIG.getLastPageNode() && that.PAGE_CONFIG.getCurrentPage() == that.PAGE_CONFIG.maxPage
        ) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.nextBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.lastBtnNode.get()
          );
        }
      };
    }
    /**
     * 把分页添加到某个父元素下
     * @param {Node} parentNode
     */
    append(parentNode) {
      let that = this;
      that.DOM_CONFIG.dataPagingNode.dom?.remove();
      that.DOM_CONFIG.dataPagingNode.dom = null;
      parentNode.appendChild(that.getDataPagingNode());
    }
    /**
     * 动态修改配置，注意，修改后需要.append修改原来的元素
     * @param {PagingConfig} details 配置
     */
    changeConfig(details) {
      Object.assign(this.CONFIG, details);
    }
    /**
     * 刷新页面
     * 当总页数5页，当前在第3页，把第3页的数据删完，后面2页的数据会自动往前，需要重新计算数据
     * 且重新计算的数据的页数大于当前页（第3页）时，当前页不变，若小于当前页（第3页），则当前页为计算好的最大页
     * @param {PagingConfig["data"]} data 新的数据
     */
    refresh(data) {
      if (data.length === this.CONFIG.data.length) {
        return;
      }
      this.CONFIG.data = [];
      this.CONFIG.data = data;
      let currentPage = this.PAGE_CONFIG.getCurrentPage();
      let maxPage = Math.ceil(data.length / this.CONFIG.pageCount);
      if (currentPage > maxPage) {
        currentPage = maxPage;
      }
      this.CONFIG.currentPage = currentPage;
      let parentElement = this.DOM_CONFIG.dataPagingNode.dom.parentElement;
      this.append(parentElement);
    }
  }
  var DataPaging = Paging;
  const _SCRIPT_NAME_ = SCRIPT_NAME || "网盘链接识别";
  const __DataPaging = (
    // @ts-ignore
    DataPaging ?? window.DataPaging ?? _unsafeWindow.DataPaging
  );
  const Cryptojs = CryptoJS ?? window.CryptoJS ?? _unsafeWindow.CryptoJS;
  const PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) {
          this.__storeApiFn = new Utils.Dictionary();
        }
        return this.__storeApiFn;
      }
    },
    /**
     * 获取自定义的存储接口
     * @param type 组件类型
     */
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) {
        return;
      }
      return this.$data.storeApiValue.get(type);
    },
    /**
     * 判断是否存在自定义的存储接口
     * @param type 组件类型
     */
    hasStorageApi(type) {
      return this.$data.storeApiValue.has(type);
    },
    /**
     * 设置自定义的存储接口
     * @param type 组件类型
     * @param storageApiValue 存储接口
     */
    setStorageApi(type, storageApiValue) {
      this.$data.storeApiValue.set(type, storageApiValue);
    },
    /**
     * 初始化组件的存储接口属性
     *
     * @param type 组件类型
     * @param config 组件配置，必须包含prop属性
     * @param storageApiValue 存储接口
     */
    initComponentsStorageApi(type, config, storageApiValue) {
      let propsStorageApi;
      if (this.hasStorageApi(type)) {
        propsStorageApi = this.getStorageApi(type);
      } else {
        propsStorageApi = storageApiValue;
      }
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    /**
     * 设置组件的存储接口属性
     * @param config 组件配置，必须包含prop属性
     * @param storageApiValue 存储接口
     */
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    }
  };
  const UISwitch = function(text, key, defaultValue, clickCallback, description, afterAddToUListCallBack) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return Boolean(storageApiValue.get(key, defaultValue));
      },
      callback(event, __value) {
        let value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallback === "function") {
          let result2 = clickCallback(event, value);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      afterAddToUListCallBack
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "switch",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const UIInput = function(text, key, defaultValue, description, changeCallback, placeholder = "", isNumber, isPassword, afterAddToUListCallBack) {
    let result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      attributes: {},
      props: {},
      description,
      afterAddToUListCallBack,
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, value, valueAsNumber) {
        if (typeof changeCallback === "function") {
          let result2 = changeCallback(event, value, valueAsNumber);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      placeholder
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "input",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const UIButton = function(text, description, buttonText, buttonIcon, buttonIsRightIcon, buttonIconIsLoading, buttonType, clickCallBack, afterAddToUListCallBack, disable) {
    let result = {
      text,
      type: "button",
      attributes: {},
      props: {},
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
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      result.disable = Boolean(
        disable
      );
    });
    return result;
  };
  const NetDiskUISizeConfig = {
    /**
     * 天翼云需要登录的提示
     */
    tianYiYunLoginTip: {
      PC: {
        width: "30vw",
        height: "280px"
      },
      Mobile: {
        width: "80vw",
        height: "250px"
      }
    },
    /**
     * 坚果云需要登录的提示
     */
    jianGuoYunLoginTip: {
      PC: {
        width: "350px",
        height: "200px"
      },
      Mobile: {
        width: "350px",
        height: "200px"
      }
    },
    /**
     * 设置
     */
    settingView: {
      PC: {
        width: "800px",
        height: "600px"
      },
      Mobile: {
        width: "92vw",
        height: "80vh"
      }
    },
    /**
     * 设置默认值的界面
     */
    setDefaultValueView: {
      PC: {
        width: "350px",
        height: "200px"
      },
      Mobile: {
        width: "350px",
        height: "200px"
      }
    },
    /**
     * (主)网盘链接界面
     */
    mainView: {
      PC: {
        width: "500px",
        height: "100%"
      },
      Mobile: {
        width: "88vw",
        height: "50vh"
      }
    },
    /**
     * (主)网盘链接界面-小窗
     */
    mainViewSmallWindow: {
      PC: {
        get width() {
          return NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"].value + "px";
        },
        height: "auto"
      },
      Mobile: {
        get width() {
          return NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"].value + "px";
        },
        height: "auto"
      }
    },
    /**
     * 单文件直链弹窗
     */
    oneFileStaticView: {
      PC: {
        width: "550px",
        height: "350px"
      },
      Mobile: {
        width: "88vw",
        height: "300px"
      }
    },
    /**
     * 多文件直链弹窗
     */
    moreFileStaticView: {
      PC: {
        width: "700px",
        height: "600px"
      },
      Mobile: {
        width: "88vw",
        height: "500px"
      }
    },
    /**
     * 新密码、错误密码输入弹窗
     */
    inputNewAccessCodeView: {
      PC: {
        width: "400px",
        height: "200px"
      },
      Mobile: {
        width: "88vw",
        height: "160px"
      }
    },
    /**
     * 历史存储记录弹窗
     */
    historyMatchView: {
      PC: {
        width: "50vw",
        height: "65vh"
      },
      Mobile: {
        width: "88vw",
        height: "60vh"
      }
    },
    /**
     * 链接识别规则的弹窗
     */
    customRulesView: {
      PC: {
        width: "50vw",
        height: "65vh"
      },
      Mobile: {
        width: "88vw",
        height: "60vh"
      }
    },
    /**
     * 链接识别规则的调试视图
     */
    customRuleDebugView: {
      PC: {
        width: "55vw",
        height: "70vh"
      },
      Mobile: {
        width: "88vw",
        height: "70vh"
      }
    },
    /**
     * 主动识别的弹窗
     */
    matchPasteTextView: {
      PC: {
        width: "50vw",
        height: "65vh"
      },
      Mobile: {
        width: "88vw",
        height: "60vh"
      }
    },
    /**
     * 访问码规则弹窗
     */
    accessCodeRuleView: {
      PC: {
        width: "50vw",
        height: "65vh"
      },
      Mobile: {
        width: "88vw",
        height: "60vh"
      }
    },
    /**
     * 访问码规则添加/修改/删除
     */
    accessCodeRuleEditView: {
      PC: {
        width: "44vw",
        height: "50vh"
      },
      Mobile: {
        width: "70vw",
        height: "45vh"
      }
    },
    /**
     * 网站规则弹窗
     */
    websiteRuleView: {
      PC: {
        width: "45vw",
        height: "65vh"
      },
      Mobile: {
        width: "88vw",
        height: "60vh"
      }
    },
    /**
     * 添加|编辑网站规则弹窗
     */
    websiteEditRuleView: {
      PC: {
        width: "45vw",
        height: "65vh"
      },
      Mobile: {
        width: "88vw",
        height: "60vh"
      }
    }
  };
  const NetDiskAutoFillAccessCode_baidu = function(netDiskInfo) {
    if (window.location.hostname === "pan.baidu.com" && window.location.pathname === "/share/init" && window.location.search.startsWith("?surl=")) {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode("div.verify-form #accessCode").then(($ele) => {
        if (!utils.isVisible($ele)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $ele.value = netDiskInfo.accessCode;
        utils.dispatchEvent($ele, "input");
        document.querySelector("div.verify-form #submitBtn")?.click();
      });
    }
    if (window.location.hostname === "pan.baidu.com" && window.location.pathname === "/wap/init" && window.location.search.startsWith("?surl=")) {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode(
        "div.extractWrap div.extract-content div.extractInputWrap.extract input[type=text]"
      ).then(($input) => {
        if (!utils.isVisible($input)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $input.value = netDiskInfo.accessCode;
        utils.dispatchEvent($input, "input");
        document.querySelector(
          "div.extractWrap div.extract-content button.m-button"
        )?.click();
      });
    }
  };
  const NetDiskAutoFillAccessCode_lanzou = function(netDiskInfo) {
    if (window.location.hostname.match(/lanzou[a-z]{1}.com/gi)) {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode("#pwd").then(($input) => {
        if (!utils.isVisible($input)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $input.value = netDiskInfo.accessCode;
        utils.dispatchEvent($input, "input");
        (document.querySelector(
          "#passwddiv div.passwddiv-input > div"
        ) || $input.nextElementSibling)?.click();
        document.querySelector("#sub")?.click();
      });
      utils.waitNode("#f_pwd").then((element) => {
        utils.mutationObserver(element, {
          config: {
            attributes: true,
            attributeFilter: ["style"]
          },
          callback: (mutations, observer) => {
            let inputElement = document.querySelector("#f_pwd #pwd");
            if (!utils.isVisible(inputElement)) {
              log.error("输入框不可见，不输入密码");
              return;
            }
            observer.disconnect();
            log.success("自动填充访问码并关闭观察者");
            Qmsg.success("自动填充访问码");
            inputElement.value = netDiskInfo.accessCode;
            utils.dispatchEvent(inputElement, "input");
            document.querySelector("#f_pwd #sub")?.click();
          }
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_tianyiyun = function(netDiskInfo) {
    function loopWaitElementShow(targetElement, callback) {
      let loopCount = 0;
      let maxLoopCount = 30;
      let interval = setInterval(() => {
        loopCount++;
        if (loopCount > maxLoopCount) {
          log.error("结束循环检查，退出。");
          clearInterval(interval);
          return;
        }
        if (!utils.isVisible(targetElement)) {
          log.warn(`第 ${loopCount} 次：输入框不可见，不输入密码`);
          return;
        }
        callback();
        clearInterval(interval);
      }, 500);
    }
    if (window.location.hostname === "cloud.189.cn") {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode("input#code_txt").then((codeTxtElement) => {
        loopWaitElementShow(codeTxtElement, () => {
          Qmsg.success("自动填充访问码");
          let visitBtn = document.querySelector(
            ".btn.btn-primary.visit"
          );
          codeTxtElement.value = netDiskInfo.accessCode;
          codeTxtElement._value = netDiskInfo.accessCode;
          utils.dispatchEvent(codeTxtElement, "input");
          utils.dispatchEvent(visitBtn, "click");
        });
      });
    }
    if (window.location.hostname === "h5.cloud.189.cn") {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode("input.access-code-input").then((accessInputElement) => {
        loopWaitElementShow(accessInputElement, () => {
          Qmsg.success("自动填充访问码");
          accessInputElement.value = netDiskInfo.accessCode;
          accessInputElement._value = netDiskInfo.accessCode;
          utils.dispatchEvent(accessInputElement, "input");
          utils.dispatchEvent(
            document.querySelector("div.button"),
            "click"
          );
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_hecaiyun = function(netDiskInfo) {
    if (window.location.hostname === "caiyun.139.com") {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode("#token-input").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        utils.dispatchEvent(element, "input");
        document.querySelector("#homepage div.token div.token-form a").click();
      });
      utils.waitNode("#app div.token-form input[type=text]").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        utils.dispatchEvent(element, "input");
        document.querySelector("div.token-form a.btn-token").click();
      });
    }
  };
  const ReactUtils = {
    /**
     * 等待react某个属性并进行设置
     * @param $el 需要检测的元素对象
     * @param reactPropNameOrNameList react属性的名称
     * @param checkOption 检测的配置项
     */
    async waitReactPropsToSet($el, reactPropNameOrNameList, checkOption) {
      if (!Array.isArray(reactPropNameOrNameList)) {
        reactPropNameOrNameList = [reactPropNameOrNameList];
      }
      if (!Array.isArray(checkOption)) {
        checkOption = [checkOption];
      }
      function getTarget() {
        let __target__ = null;
        if (typeof $el === "string") {
          __target__ = domUtils.selector($el);
        } else if (typeof $el === "function") {
          __target__ = $el();
        } else if ($el instanceof HTMLElement) {
          __target__ = $el;
        }
        return __target__;
      }
      if (typeof $el === "string") {
        let $ele = await utils.waitNode($el, 1e4);
        if (!$ele) {
          return;
        }
      }
      checkOption.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log.info(needSetOption.msg);
        }
        function checkTarget() {
          let $targetEl = getTarget();
          if ($targetEl == null) {
            return {
              status: false,
              isTimeout: true,
              inst: null,
              $el: $targetEl
            };
          }
          let reactInst = utils.getReactObj($targetEl);
          if (reactInst == null) {
            return {
              status: false,
              isTimeout: false,
              inst: null,
              $el: $targetEl
            };
          }
          let findPropNameIndex = Array.from(reactPropNameOrNameList).findIndex(
            (__propName__) => {
              let reactPropInst2 = reactInst[__propName__];
              if (!reactPropInst2) {
                return false;
              }
              let checkResult = needSetOption.check(reactPropInst2, $targetEl);
              checkResult = Boolean(checkResult);
              return checkResult;
            }
          );
          let reactPropName = reactPropNameOrNameList[findPropNameIndex];
          let reactPropInst = reactInst[reactPropName];
          return {
            status: findPropNameIndex !== -1,
            isTimeout: false,
            inst: reactPropInst,
            $el: $targetEl
          };
        }
        utils.waitPropertyByInterval(
          () => {
            return getTarget();
          },
          () => checkTarget().status,
          250,
          1e4
        ).then(() => {
          let checkTargetResult = checkTarget();
          if (checkTargetResult.status) {
            let reactInst = checkTargetResult.inst;
            needSetOption.set(reactInst, checkTargetResult.$el);
          } else {
            if (typeof needSetOption.failWait === "function") {
              needSetOption.failWait(checkTargetResult.isTimeout);
            }
          }
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_aliyun = function(netDiskInfo) {
    if (window.location.hostname === "www.aliyundrive.com" || window.location.hostname === "www.alipan.com") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.ready(() => {
        utils.waitAnyNode([
          "#root input.ant-input[placeholder*='提取码']",
          "#root input[name=pwd][placeholder*='提取码']"
        ]).then(($el) => {
          ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactFiber"], {
            check(reactPropInst) {
              return typeof reactPropInst?.onChange === "function" || typeof reactPropInst?.memoizedProps?.onChange === "function";
            },
            set(reactPropInst) {
              if (!utils.isVisible($el)) {
                log.error("输入框不可见，不输入密码");
                return;
              }
              $el.value = netDiskInfo.accessCode;
              let onChange = reactPropInst?.onChange || reactPropInst?.memoizedProps?.onChange;
              onChange({
                currentTarget: $el,
                target: $el
              });
              Qmsg.success("自动填充访问码");
              let $submit = $('#root button[type="submit"]');
              if (!$submit) {
                Qmsg.error("提交按钮不存在");
                return;
              }
              $submit.click();
            }
          });
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_123pan = function(netDiskInfo) {
    if (window.location.hostname === "www.123pan.com") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.ready(() => {
        utils.waitAnyNode([
          "#app .ca-fot input.ant-input[type=text][placeholder*='提取码']",
          "#app .appinput input.ant-input[type=text][placeholder*='提取码']"
        ]).then(($el) => {
          ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactFiber"], {
            check(reactPropInst) {
              return typeof reactPropInst?.onChange === "function" || typeof reactPropInst?.memoizedProps?.onChange === "function";
            },
            set(reactPropInst) {
              if (!utils.isVisible($el)) {
                log.error("输入框不可见，不输入密码");
                return;
              }
              $el.value = netDiskInfo.accessCode;
              let onChange = reactPropInst?.onChange || reactPropInst?.memoizedProps?.onChange;
              onChange({
                currentTarget: $el,
                target: $el
              });
              Qmsg.success("自动填充访问码");
              let $submit = $el.nextElementSibling;
              if (!$submit) {
                Qmsg.error("提交按钮不存在");
                return;
              }
              $submit.click();
            }
          });
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_weiyun = function(netDiskInfo) {
    if (window.location.hostname === "share.weiyun.com") {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode("#app input.input-txt").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        utils.dispatchEvent(element, "input");
        utils.dispatchEvent(element, "change");
        setTimeout(() => {
          document.querySelector(".form-item button.btn-main").click();
        }, 500);
      });
      utils.waitNode(".input-wrap input.pw-input").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        utils.dispatchEvent(element, "input");
        utils.dispatchEvent(element, "change");
        setTimeout(() => {
          document.querySelector(".pw-btn-wrap button.btn").click();
        }, 500);
      });
    }
  };
  const NetDiskAutoFillAccessCode_xunlei = function(netDiskInfo) {
    if (window.location.hostname === "pan.xunlei.com") {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode(
        "#__layout div.pass-input-wrap input.td-input__inner"
      ).then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        log.error("输入框不可见，不输入密码");
        element.value = netDiskInfo.accessCode;
        utils.dispatchEvent(element, "input");
        utils.dispatchEvent(element, "change");
        setTimeout(() => {
          document.querySelector(
            "#__layout div.pass-input-wrap button.td-button"
          ).click();
        }, 500);
      });
      utils.waitNode(
        "#__layout div.pass-wrapper input.td-input__inner"
      ).then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        log.error("输入框不可见，不输入密码");
        element.value = netDiskInfo.accessCode;
        utils.dispatchEvent(element, "input");
        utils.dispatchEvent(element, "change");
        setTimeout(() => {
          document.querySelector(
            "#__layout div.pass-wrapper button.td-button"
          ).click();
        }, 500);
      });
    }
  };
  const NetDiskAutoFillAccessCode_kuake = function(netDiskInfo) {
    if (window.location.hostname === "pan.quark.cn") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.ready(() => {
        utils.waitNode(
          "#ice-container input.ant-input[class*=ShareReceive][placeholder*='提取码']"
        ).then(($el) => {
          ReactUtils.waitReactPropsToSet(
            $el,
            ["reactProps", "reactEventHandlers"],
            {
              check(reactPropInst) {
                return typeof reactPropInst?.onChange === "function" || typeof reactPropInst?.memoizedProps?.onChange === "function";
              },
              set(reactPropInst) {
                if (!utils.isVisible($el)) {
                  log.error("输入框不可见，不输入密码");
                  return;
                }
                $el.value = netDiskInfo.accessCode;
                let onChange = reactPropInst?.onChange || reactPropInst?.memoizedProps?.onChange;
                onChange({
                  currentTarget: $el,
                  target: $el
                });
                Qmsg.success("自动填充访问码");
              }
            }
          );
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_chengtong = function(netDiskInfo) {
    log.success("自动填写链接", netDiskInfo);
    utils.waitNode("#passcode").then((element) => {
      if (!utils.isVisible(element)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      element.value = netDiskInfo.accessCode;
      utils.dispatchEvent(element, "input");
      document.querySelector(
        "#main-content .form-group button.btn[type=button]"
      ).click();
    });
  };
  const NetDiskAutoFillAccessCode_115pan = function(netDiskInfo) {
    if (window.location.hostname === "115.com") {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode("input.text").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        utils.dispatchEvent(element, "input");
        document.querySelector(
          "#js-share_code div.form-decode div.submit a"
        ).click();
      });
    }
  };
  const NetDiskAutoFillAccessCode_360yunpan = function(netDiskInfo) {
    if (window.location.hostname.endsWith(".link.yunpan.com")) {
      log.success("自动填写链接", netDiskInfo);
      utils.waitNode("#extract-bg-container input.pwd-input").then(($el) => {
        if (!utils.isVisible($el)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $el.value = netDiskInfo.accessCode;
        utils.dispatchEvent($el, "input");
        let $submit = $(
          "#extract-bg-container input.submit-btn"
        );
        $submit?.click();
      });
      utils.waitNode("#extractForm input.pwd-input").then(($el) => {
        if (!utils.isVisible($el)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $el.value = netDiskInfo.accessCode;
        utils.dispatchEvent($el, "input");
        let $submit = $("#extractForm input.submit-btn");
        $submit?.click();
      });
    }
  };
  const NetDiskRuleDataKEY = {
    /** 匹配范围 text */
    matchRange_text: {
      before: (key) => `${key}-text-match-range-before`,
      after: (key) => `${key}-text-match-range-after`
    },
    /** 匹配范围 html */
    matchRange_html: {
      before: (key) => `${key}-html-match-range-before`,
      after: (key) => `${key}-html-match-range-after`
    },
    /** 功能 */
    function: {
      enable: (key) => `${key}-enable`,
      checkLinkValidity: (key) => `${key}-check-link-valid`,
      checkLinkValidityHoverTip: (key) => `${key}-check-link-valid-hover-tip`,
      linkClickMode: (key) => `${key}-click-mode`
    },
    /** 点击动作 新标签页打开 */
    linkClickMode_openBlank: {
      openBlankAutoFilleAccessCode: (key) => `${key}-open-blank-auto-fill-accesscode`,
      openBlankWithCopyAccessCode: (key) => `${key}-open-blank-with-copy-accesscode`
    },
    /** Scheme转发 */
    schemeUri: {
      enable: (key) => `${key}-scheme-uri-enable`,
      isForwardLinearChain: (key) => `${key}-scheme-uri-forward-linear-chain`,
      isForwardBlankLink: (key) => `${key}-scheme-uri-forward-blank-link`,
      uri: (key) => `${key}-scheme-uri-uri`
    }
  };
  const WebsiteRuleDataKey = {
    /** 功能 */
    features: {
      /** 是否启用自定义访问码 */
      customAccessCodeEnable: (key) => `${key}-custom-accesscode-enable`,
      /** 自定义访问码 */
      customAccessCode: (key) => `${key}-custom-accesscode`
    }
  };
  const NetDiskRuleData = {
    /** innerText的提取码间隔 */
    matchRange_text: {
      /**
       * 提取码间隔前的字符长度
       * @param key 规则键名
       * @param defaultValue 默认值: 20
       */
      before(key, defaultValue = 20) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.matchRange_text.before(key),
          defaultValue
        );
        return parseInt(panelData.value.toString());
      },
      /**
       * 提取码间隔后的字符长度
       * @param key 规则键名
       * @param defaultValue 默认值: 10
       */
      after(key, defaultValue = 10) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.matchRange_text.after(key),
          defaultValue
        );
        return parseInt(panelData.value.toString());
      }
    },
    /** innerHTML的提取码间隔 */
    matchRange_html: {
      /**
       * 提取码间隔前的字符长度
       * @param key 规则键名
       * @param defaultValue 默认值: 100
       */
      before(key, defaultValue = 100) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.matchRange_html.before(key),
          defaultValue
        );
        return parseInt(panelData.value.toString());
      },
      /**
       * 提取码间隔后的字符长度
       * @param key 规则键名
       * @param defaultValue 默认值: 15
       */
      after(key, defaultValue = 15) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.matchRange_html.after(key),
          defaultValue
        );
        return parseInt(panelData.value.toString());
      }
    },
    /** 功能 */
    function: {
      /**
       * 是否启用该规则
       * @param key 规则键名
       * @param defaultValue
       */
      enable(key, defaultValue = true) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.function.enable(key),
          defaultValue
        );
        return Boolean(panelData.value);
      },
      /**
       * 点击动作
       * @param key 规则键名
       * @param defaultValue
       */
      linkClickMode(key, defaultValue = "copy") {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.function.linkClickMode(key),
          defaultValue
        );
        return panelData.value;
      },
      /**
       * 是否进行校验链接有效性
       * @param key 规则键名
       * @param defaultValue
       */
      checkLinkValidity(key, defaultValue = false) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.function.checkLinkValidity(key),
          defaultValue
        );
        return Boolean(panelData.value);
      },
      /**
       * 是否添加验证结果图标悬停提示
       * @param key
       * @param defaultValue
       */
      checkLinlValidityHoverTip(key, defaultValue = true) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.function.checkLinkValidityHoverTip(key),
          defaultValue
        );
        return Boolean(panelData.value);
      }
    },
    linkClickMode_openBlank: {
      /**
       * 跳转时自动填充访问码（如果有的话）
       * @param key 规则键名
       * @param [defaultValue=true] 默认值: true
       */
      openBlankAutoFilleAccessCode(key, defaultValue = true) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankAutoFilleAccessCode(key),
          defaultValue
        );
        return Boolean(panelData.value);
      },
      /**
       * 跳转时复制访问码
       * @param key 规则键名
       * @param defaultValue
       */
      openBlankWithCopyAccessCode(key, defaultValue = false) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(
            key
          ),
          defaultValue
        );
        return Boolean(panelData.value);
      }
    },
    schemeUri: {
      /**
       * 是否启用
       * @param key 规则键名
       * @param defaultValue
       */
      enable(key, defaultValue = false) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.schemeUri.enable(key),
          defaultValue
        );
        return Boolean(panelData.value);
      },
      /**
       * 转发直链（解析出的链接）
       * @param key 规则键名
       * @param defaultValue
       */
      isForwardLinearChain(key, defaultValue = false) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.schemeUri.isForwardLinearChain(key),
          defaultValue
        );
        return Boolean(panelData.value);
      },
      /**
       * 转发新标签页链接
       * @param key 规则键名
       * @param defaultValue
       */
      isForwardBlankLink(key, defaultValue = false) {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.schemeUri.isForwardBlankLink(key),
          defaultValue
        );
        return Boolean(panelData.value);
      },
      /**
       * Uri链接
       * @param key 规则键名
       * @param defaultValue
       */
      uri(key, defaultValue = "") {
        const panelData = GeneratePanelStorage(
          NetDiskRuleDataKEY.schemeUri.uri(key),
          defaultValue
        );
        return panelData.value;
      }
    }
  };
  const NetDiskAutoFillAccessCode = {
    key: "tempNetDiskInfo",
    $data: {
      /**
       * 当前的网盘数据
       */
      netDiskInfo: null,
      /**
       * 自动填充访问码是否开启
       */
      get enable() {
        return NetDiskGlobalData.features.autoFillAccessCode.value;
      }
    },
    /**
     * 初始化
     */
    init() {
      if (!this.$data.enable) {
        return;
      }
      this.$data.netDiskInfo = this.getValue();
      let flag = false;
      for (let index = 0; index < this.$data.netDiskInfo.length; index++) {
        const fillAccessCodeNetDiskInfo = this.$data.netDiskInfo[index];
        let autoFillAccessCodeEnable = NetDiskRuleData.linkClickMode_openBlank.openBlankAutoFilleAccessCode(
          fillAccessCodeNetDiskInfo.ruleKeyName
        );
        if (!autoFillAccessCodeEnable) {
          continue;
        }
        let accessCode = fillAccessCodeNetDiskInfo.accessCode;
        if (accessCode == null || typeof accessCode === "string" && accessCode.trim() === "") {
          continue;
        }
        let shareCode = fillAccessCodeNetDiskInfo.shareCode;
        if (fillAccessCodeNetDiskInfo.ruleKeyName === "baidu" && shareCode.startsWith("1")) {
          shareCode = shareCode.slice(1, shareCode.length);
        }
        let isMatchedFillShareCode = window.location.href.includes(shareCode);
        if (isMatchedFillShareCode) {
          let autoFillFn = NetDiskAutoFillAccessCode.netDisk[fillAccessCodeNetDiskInfo.ruleKeyName];
          if (typeof autoFillFn === "function") {
            log.success(
              `成功匹配到对应的自动填充访问码的网盘信息：`,
              fillAccessCodeNetDiskInfo
            );
            autoFillFn(fillAccessCodeNetDiskInfo);
          } else {
            log.warn(
              "自动填充访问码失败：" + fillAccessCodeNetDiskInfo.ruleKeyName + "，原因：该网盘未适配"
            );
          }
          flag = true;
          break;
        }
      }
      if (!flag) {
        log.error(
          "未触发自动填充访问码，原因：未找到对应的网盘信息：👇",
          this.$data.netDiskInfo
        );
      }
    },
    netDisk: {
      /**
       * 百度网盘
       */
      baidu: NetDiskAutoFillAccessCode_baidu,
      /**
       * 蓝奏云
       */
      lanzou: NetDiskAutoFillAccessCode_lanzou,
      /**
       * 天翼云
       */
      tianyiyun: NetDiskAutoFillAccessCode_tianyiyun,
      /**
       * 中国移动云盘
       */
      hecaiyun: NetDiskAutoFillAccessCode_hecaiyun,
      /**
       * 阿里云盘
       */
      aliyun: NetDiskAutoFillAccessCode_aliyun,
      /**
       * 文叔叔
       * 暂时没找到有密码的链接
       */
      wenshushu: () => {
      },
      /**
       * 奶牛
       * 暂时没找到有密码的链接
       */
      nainiu: () => {
      },
      /**
       * 123云盘
       */
      _123pan: NetDiskAutoFillAccessCode_123pan,
      /**
       * 腾讯微云
       */
      weiyun: NetDiskAutoFillAccessCode_weiyun,
      /**
       * 迅雷
       */
      xunlei: NetDiskAutoFillAccessCode_xunlei,
      /**
       * 115网盘
       */
      _115pan: NetDiskAutoFillAccessCode_115pan,
      /**
       * 城通网盘
       */
      chengtong: NetDiskAutoFillAccessCode_chengtong,
      /**
       * 夸克网盘
       */
      kuake: NetDiskAutoFillAccessCode_kuake,
      /**
       * 坚果云
       * 暂时没找到有密码的链接
       */
      jianguoyun: () => {
      },
      /**
       * OneDrive
       * 暂时没找到有密码的链接
       */
      onedrive: () => {
      },
      /**
       * 360云盘
       */
      "360yunpan": NetDiskAutoFillAccessCode_360yunpan
    },
    /**
     * 设置值
     * @param value
     */
    setValue(value) {
      _GM_setValue(this.key, value);
    },
    /**
     * 添加值
     * @param netDiskFillOption
     */
    addValue(netDiskFillOption) {
      let accessCode = netDiskFillOption.accessCode;
      if (accessCode == null || typeof accessCode === "string" && accessCode.trim() === "") {
        return;
      }
      let localValue = this.getValue();
      localValue = localValue.filter((it) => {
        if (it.ruleKeyName === netDiskFillOption.ruleKeyName && it.shareCode === netDiskFillOption.shareCode) {
          return false;
        } else {
          return true;
        }
      });
      localValue.push(netDiskFillOption);
      this.setValue(localValue);
    },
    /**
     * 获取值
     */
    getValue() {
      let localValue = _GM_getValue(
        this.key,
        []
      );
      if (!Array.isArray(localValue)) {
        localValue = [localValue];
      }
      localValue = localValue.filter(
        (it) => Date.now() - it.time < 24 * 60 * 60 * 1e3
      );
      this.setValue(localValue);
      return localValue;
    }
  };
  const NetDiskAuthorization_Lanzouyx = function() {
    return;
  };
  const _123pan_Link_Host_Pattern = "(123pan|123865|123684|123652|123912).(com|cn)";
  const NetDiskRule_123pan = {
    /** 规则 */
    rule: [
      {
        link_innerText: `${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: new RegExp(
          `${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})`,
          "gi"
        ),
        shareCodeNeedRemoveStr: new RegExp(
          `${_123pan_Link_Host_Pattern}/s/`,
          "gi"
        ),
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://123pan.com/s/{#shareCode#}",
        copyUrl: "https://123pan.com/s/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "123盘",
      key: "_123pan",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: true,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskAuthorization_123pan_Authorization = {
    KEY: "_123pan_User_Authorization",
    set(value) {
      _GM_setValue(this.KEY, value);
    },
    get() {
      return _GM_getValue(this.KEY);
    }
  };
  const NetDiskAuthorization_123pan = function() {
    if (window.location.hostname !== "www.123pan.com") {
      return;
    }
    if (NetDiskRuleData.function.linkClickMode(NetDiskRule_123pan.setting.key) !== "parseFile") {
      return;
    }
    let authorToken = _unsafeWindow.localStorage.getItem("authorToken");
    if (utils.isNull(authorToken)) {
      return;
    }
    authorToken = authorToken.replace(/^\"/, "").replace(/\"$/, "");
    log.success("获取123网盘已登录用户的authorToken值👇");
    log.success(authorToken);
    NetDiskAuthorization_123pan_Authorization.set(authorToken);
  };
  const NetDiskAuthorization = {
    /**
     * 运行于ready
     */
    init() {
      Object.keys(NetDiskAuthorization.netDisk).forEach((keyName) => {
        this.netDisk[keyName]();
      });
    },
    netDisk: {
      /**
       * 123网盘，一般用于>100MB的文件直链获取
       */
      _123pan: NetDiskAuthorization_123pan,
      /**
       * 蓝奏优选
       */
      lanzouyx: NetDiskAuthorization_Lanzouyx
    }
  };
  const NetDiskRuleUtils = {
    /**
     * 获取点击动作的默认配置
     */
    getDefaultLinkClickMode() {
      let data = {
        copy: {
          default: false,
          enable: true,
          text: "复制到剪贴板"
        },
        "copy-closePopup": {
          default: false,
          enable: true,
          text: "复制到剪贴板 & 关闭弹窗"
        },
        openBlank: {
          default: false,
          enable: true,
          text: "新标签页打开"
        },
        "openBlank-closePopup": {
          default: false,
          enable: true,
          text: "新标签页打开 & 关闭弹窗"
        },
        parseFile: {
          default: false,
          enable: false,
          text: "文件解析"
        },
        "parseFile-closePopup": {
          default: false,
          enable: false,
          text: "文件解析 & 关闭弹窗"
        },
        own: {
          default: false,
          enable: false,
          text: "自定义动作"
        }
      };
      return data;
    },
    /**
     * 参数替换，区分大小写
     *
     * 例如
     * + {#shareCode#} => xxxx
     * + {#accessCode#} => xxxx
     * + {#$1#} => xxxx
     * @param text
     * @param data
     */
    replaceParam(text, data = {}) {
      if (typeof text !== "string") {
        return text;
      }
      Object.keys(data).forEach((key) => {
        let replacedText = data[key];
        if (utils.isNotNull(replacedText)) {
          try {
            text = text.replaceAll(
              `{#encodeURI-${key}#}`,
              encodeURI(replacedText)
            );
          } catch (error) {
            log.error("encodeURI-替换的文本失败", [replacedText]);
          }
          try {
            text = text.replaceAll(
              `{#encodeURIComponent-${key}#}`,
              encodeURIComponent(replacedText)
            );
          } catch (error) {
            log.error("encodeURIComponent-替换的文本失败", [replacedText]);
          }
          try {
            text = text.replaceAll(
              `{#decodeURI-${key}#}`,
              decodeURI(replacedText)
            );
          } catch (error) {
            log.error("decodeURI-替换的文本失败", [replacedText]);
          }
          try {
            text = text.replaceAll(
              `{#decodeURIComponent-${key}#}`,
              decodeURIComponent(replacedText)
            );
          } catch (error) {
            log.error("encodeURIComponent-替换的文本失败", [replacedText]);
          }
          text = text.replaceAll(`{#${key}#}`, replacedText);
        }
      });
      return text;
    },
    /**
     * 删除掉所有中文
     * @param text
     */
    replaceChinese(text) {
      return text.replace(/[\u4e00-\u9fa5]/g, "");
    },
    /**
     * 获取已解码的当前url
     * @param decodeUrl 当前url
     */
    getDecodeComponentUrl(decodeUrl = window.location.href) {
      try {
        decodeUrl = decodeURIComponent(decodeUrl);
      } catch (error) {
      }
      return decodeUrl;
    }
  };
  const NetDiskFilterScheme = {
    protocol: "jumpwsv",
    pathname: "go",
    /**
     * 把链接转为scheme的uri链接
     * @param key 规则名
     * @param intentData 需要处理的数据
     */
    parseDataToSchemeUri(key, intentData) {
      let isEnable = this.isEnableForward(key);
      if (!isEnable) {
        return intentData;
      }
      let schemeUri = NetDiskRuleData.schemeUri.uri(key);
      if (utils.isNull(schemeUri)) {
        schemeUri = this.getSchemeUri(this.get1DMSchemeUriOption(intentData));
      }
      if (schemeUri.startsWith(this.protocol)) {
        intentData = intentData.replace(/&/g, "{-and-}");
        intentData = intentData.replace(/#/g, "{-number-}");
      }
      schemeUri = NetDiskRuleUtils.replaceParam(schemeUri, {
        intentData
      });
      return schemeUri;
    },
    /**
     * 是否启用转发
     * @param key
     * @returns
     */
    isEnableForward(key) {
      return NetDiskRuleData.schemeUri.enable(key);
    },
    /**
     * 是否转发下载链接
     * @param key
     */
    isForwardDownloadLink(key) {
      return this.isEnableForward(key) && NetDiskRuleData.schemeUri.isForwardLinearChain(key);
    },
    /**
     * 是否转发新标签页的链接
     * @param key
     */
    isForwardBlankLink(key) {
      return this.isEnableForward(key) && NetDiskRuleData.schemeUri.isForwardBlankLink(key);
    },
    /**
     * 获取转发的uri链接
     * @param option
     */
    getSchemeUri(option) {
      return `${this.protocol}://${this.pathname}?${utils.toSearchParamsStr(
      option
    )}`;
    },
    /**
     * 获取1dm的intent的配置
     * @param intentData
     */
    get1DMSchemeUriOption(intentData = "") {
      return {
        package: "idm.internet.download.manager.plus",
        activity: "idm.internet.download.manager.UrlHandlerDownloader",
        intentAction: "android.intent.action.VIEW",
        intentData,
        intentExtra: ""
      };
    }
  };
  class ParseFileAbstract {
    /** 所在规则的下标 */
    ruleIndex = 0;
    /** 分享码 */
    shareCode = "";
    /** 提取码 */
    accessCode = "";
  }
  class NetDiskParse_123pan extends ParseFileAbstract {
    panelList = [];
    Authorization = "";
    code = {
      5113: "您今日下载流量已超出10GB限制，购买VIP会员即可体验无限流量下载",
      5103: "分享码错误或者分享地址错误",
      5104: "分享已过期",
      "-1000": "获取出错",
      "-2000": "请求异常",
      "-3000": "请求意外中止",
      "-4000": "请求超时",
      104: "文件已失效"
    };
    Headers = {
      "user-agent": "123pan/v2.4.0(Android_7.1.2;Xiaomi)",
      platform: "android",
      "app-version": "61",
      "x-app-version": "2.4.0"
    };
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      const that = this;
      that.panelList = [];
      that.Authorization = NetDiskAuthorization_123pan_Authorization.get();
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
            downloadUrl = downloadInfo["data"]["DownloadURL"];
            if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
              downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
                "_123pan",
                downloadUrl
              );
            }
            fileSize = utils.formatByteToSize(fileInfo["Size"]);
          } else if (downloadInfo && downloadInfo["code"] === 401) {
            downloadUrl = "javascript:;";
            fileSize = "请登录后下载";
          } else {
            downloadUrl = "javascript:;";
            fileSize = "获取下载链接失败";
          }
        } else {
          if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
              "_123pan",
              downloadUrl
            );
          }
          fileSize = utils.formatByteToSize(fileInfo["Size"]);
        }
        let fileUploadTime = new Date(fileInfo["CreateAt"]).getTime();
        let fileLatestTime = new Date(fileInfo["UpdateAt"]).getTime();
        fileUploadTime = utils.formatTime(fileUploadTime);
        fileLatestTime = utils.formatTime(fileLatestTime);
        NetDiskUI.staticView.oneFile({
          title: "123盘单文件直链",
          fileName: fileInfo["FileName"],
          fileSize,
          downloadUrl,
          fileUploadTime,
          fileLatestTime
        });
      } else {
        Qmsg.info("正在递归文件");
        let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let folderInfoList = that.getFolderInfo(infoLists, 0);
        QmsgLoading.close();
        log.info("递归完毕");
        NetDiskUI.staticView.moreFile("123盘文件解析", folderInfoList);
      }
    }
    /**
     * 校验链接有效性
     */
    async checkLinkValidity() {
      const that = this;
      Qmsg.info("正在校验链接有效性");
      let url = `https://www.123pan.com/s/${that.shareCode}`;
      let getResp = await httpx.get({
        url,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Referer: "https://www.123pan.com"
        }
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
        if (HasPwd && (that.accessCode == void 0 || that.accessCode === "")) {
          Qmsg.error("密码缺失!");
          NetDiskUI.newAccessCodeView(
            "密码缺失",
            "_123pan",
            that.ruleIndex,
            that.shareCode,
            that.accessCode,
            (option) => {
              that.init({
                ruleIndex: that.ruleIndex,
                shareCode: that.shareCode,
                accessCode: option.accessCode
              });
            }
          );
        } else {
          return true;
        }
      } else {
        Qmsg.error("校验链接-获取初始化内容失败");
      }
    }
    /**
     * 获取文件
     * @param parentFileId
     */
    async getFiles(parentFileId = 0) {
      const that = this;
      const getData = {
        limit: 100,
        next: 1,
        orderBy: "share_id",
        orderDirection: "desc",
        shareKey: that.shareCode,
        SharePwd: that.accessCode,
        ParentFileId: parentFileId,
        Page: 1
      };
      let url = `https://www.123pan.com/b/api/share/get?${utils.toSearchParamsStr(
      getData
    )}`;
      let getResp = await httpx.get({
        url,
        headers: {
          Accept: "*/*",
          Referer: `https://www.123pan.com/s/${that.shareCode}`,
          ...that.Headers
        }
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
          void 0,
          "_123pan",
          that.ruleIndex,
          that.shareCode,
          that.accessCode,
          (option) => {
            that.init({
              ruleIndex: that.ruleIndex,
              shareCode: that.shareCode,
              accessCode: option.accessCode
            });
          }
        );
      } else if (that.code[json_data["code"]]) {
        Qmsg.error(that.code[json_data["code"]]);
      } else if ("message" in json_data) {
        Qmsg.error(json_data["message"]);
      } else {
        Qmsg.error("123盘：未知的JSON格式");
      }
    }
    /**
     * 递归算法使用的请求
     * @param parentFileId
     */
    async getFilesByRec(parentFileId) {
      const that = this;
      let getResp = await httpx.get({
        url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`,
        headers: {
          Accept: "*/*",
          Referer: `https://www.123pan.com/s/${that.shareCode}`,
          ...that.Headers
        }
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
    }
    /**
     * 获取文件夹信息
     * @param infoList
     */
    getFolderInfo(infoList, index) {
      const that = this;
      let folderInfoList = [];
      let tempFolderInfoList = [];
      let tempFolderFileInfoList = [];
      infoList.forEach((item) => {
        if (item.Type) {
          tempFolderInfoList.push({
            fileName: item.FileName,
            fileSize: 0,
            fileType: "",
            createTime: new Date(item.CreateAt).getTime(),
            latestTime: new Date(item.UpdateAt).getTime(),
            isFolder: true,
            index,
            async clickEvent() {
              let resultFileInfoList = await that.getFilesByRec(
                item["FileId"].toString()
              );
              if (resultFileInfoList) {
                return that.getFolderInfo(resultFileInfoList, index + 1);
              } else {
                return [];
              }
            }
          });
        } else {
          tempFolderFileInfoList.push({
            fileName: item.FileName,
            fileSize: item.Size,
            fileType: "",
            createTime: new Date(item.CreateAt).getTime(),
            latestTime: new Date(item.UpdateAt).getTime(),
            isFolder: false,
            index,
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
                    mode: "aBlank"
                  };
                } else if (downloadInfo && downloadInfo["code"] === 401) {
                  Qmsg.error("请登录后下载");
                } else {
                  Qmsg.error(downloadInfo?.["message"] || "获取下载链接失败");
                }
              } else {
                let downloadUrl = item.DownloadUrl;
                if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
                  downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
                    "_123pan",
                    downloadUrl
                  );
                }
                return {
                  url: downloadUrl,
                  autoDownload: true,
                  mode: "aBlank"
                };
              }
            }
          });
        }
      });
      tempFolderInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      tempFolderFileInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      return folderInfoList;
    }
    /**
     * 获取单文件下载链接
     * 123云盘新增了下载验证
     * @param Etag
     * @param FileID
     * @param S3keyFlag
     * @param ShareKey
     * @param Size
     */
    async getFileDownloadInfo(Etag, FileID, S3keyFlag, ShareKey, Size) {
      const that = this;
      let authK_V = that.getFileDownloadAuth();
      let headers = {
        // "App-Version": "3",
        // Platform: "web",
        "Content-Type": "application/json;charset=UTF-8",
        Host: "www.123pan.com",
        Accept: "*/*",
        Referer: "https://www.123pan.com/s/" + ShareKey,
        Origin: "https://www.123pan.com",
        ...that.Headers
      };
      if (that.Authorization) {
        Reflect.set(headers, "Authorization", "Bearer " + that.Authorization);
      }
      log.success("获取下载链接加密参数：" + authK_V);
      let postResp = await httpx.post(
        `https://www.123pan.com/a/api/share/download/info?${authK_V[0]}=${authK_V[1]}`,
        {
          data: JSON.stringify({
            Etag,
            FileID,
            S3keyFlag,
            ShareKey,
            Size
          }),
          responseType: "json",
          headers
        }
      );
      if (!postResp.status) {
        return;
      }
      let postData = postResp.data;
      let jsonData = utils.toJSON(postData.responseText);
      log.info(jsonData);
      if (jsonData["code"] == 0) {
        jsonData["data"]["DownloadURL"] = that.decodeDownloadUrl(
          jsonData["data"]["DownloadURL"]
        );
        return jsonData;
      } else {
        return {
          code: jsonData["code"],
          message: jsonData["message"]
        };
      }
    }
    /**
     * 获取单文件下载链接的加密参数
     * 感谢：https://github.com/qaiu/netdisk-fast-download/
     */
    getFileDownloadAuth() {
      function encry_time(param) {
        var param_time, param_other = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        if (0 === arguments["length"]) return void 0;
        "object" === typeof param ? param_time = param : (10 === ("" + param)["length"] && (param = 1e3 * parseInt(param)), param_time = new Date(param));
        var param_timezoneoffset = param + 6e4 * new Date(param)["getTimezoneOffset"](), param_time_n = param_timezoneoffset + 36e5 * param_other;
        return param_time = new Date(param_time_n), {
          y: param_time["getFullYear"](),
          m: param_time["getMonth"]() + 1 < 10 ? "0" + (param_time["getMonth"]() + 1) : param_time["getMonth"]() + 1,
          d: param_time["getDate"]() < 10 ? "0" + param_time["getDate"]() : param_time["getDate"](),
          h: param_time["getHours"]() < 10 ? "0" + param_time["getHours"]() : param_time["getHours"](),
          f: param_time["getMinutes"]() < 10 ? "0" + param_time["getMinutes"]() : param_time["getMinutes"]()
        };
      }
      function encry_join(param) {
        for (var a = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 10, funcRun = function() {
          for (var b, c = [], d = 0; d < 256; d++) {
            b = d;
            for (var index = 0; index < 8; index++)
              b = 1 & b ? 3988292384 ^ b >>> 1 : b >>> 1;
            c[d] = b;
          }
          return c;
        }, _funcRun_ = funcRun(), _param = param, _param_1 = -1, _param_0 = 0; _param_0 < _param["length"]; _param_0++)
          _param_1 = _param_1 >>> 8 ^ _funcRun_[255 & (_param_1 ^ _param.charCodeAt(_param_0))];
        return _param_1 = (-1 ^ _param_1) >>> 0, _param_1.toString(a);
      }
      function getSign(urlPath) {
        var param_web = "web";
        var param_type = 3;
        var param_time = Math.round(
          ((/* @__PURE__ */ new Date()).getTime() + 60 * (/* @__PURE__ */ new Date()).getTimezoneOffset() * 1e3 + 288e5) / 1e3
        ).toString();
        var key = "a,d,e,f,g,h,l,m,y,i,j,n,o,p,k,q,r,s,t,u,b,c,v,w,s,z";
        var randomRoundNum = Math["round"](1e7 * Math["random"]());
        var number_split;
        var time_a;
        var time_y;
        var time_m;
        var time_d;
        var time_h;
        var time_f;
        var time_array;
        var time_push;
        for (var number_item in number_split = key.split(","), time_a = encry_time(param_time), // @ts-ignore
        time_y = time_a["y"], // @ts-ignore
        time_m = time_a["m"], // @ts-ignore
        time_d = time_a["d"], // @ts-ignore
        time_h = time_a["h"], // @ts-ignore
        time_f = time_a["f"], time_array = [time_y, time_m, time_d, time_h, time_f].join(""), time_push = [], time_array)
          time_push["push"](number_split[Number(time_array[number_item])]);
        var param_no;
        var param_join_s;
        return (
          // @ts-ignore
          param_no = encry_join(time_push["join"]("")), param_join_s = encry_join(
            ""["concat"](param_time, "|")[
              // @ts-ignore
              "concat"
              // @ts-ignore
            ](randomRoundNum, "|")["concat"](urlPath, "|")["concat"](param_web, "|")[
              // @ts-ignore
              "concat"
              // @ts-ignore
            ](param_type, "|")["concat"](param_no)
          ), [
            param_no,
            ""["concat"](param_time, "-")[
              // @ts-ignore
              "concat"
              // @ts-ignore
            ](randomRoundNum, "-")["concat"](param_join_s)
          ]
        );
      }
      return getSign("/a/api/share/download/info");
    }
    /**
     * 将直链的param参数解析成真正的直链
     * @param url
     */
    decodeDownloadUrl(url) {
      if (url === "") {
        return "";
      }
      return url;
    }
  }
  class NetDiskParse_Aliyun extends ParseFileAbstract {
    X_Share_Token_Data = {
      expire_time: "2000-01-01T00:00:00.000Z",
      expires_in: 7200,
      share_token: ""
    };
    /**
     * header请求头 X-Device-Id
     */
    X_Device_Id = null;
    /**
     * header请求头 X-Canary
     */
    X_Canary = "client=web,app=share,version=v2.3.1";
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      const that = this;
      that.X_Device_Id = that.get_X_Device_Id();
      log.info("生成X_Device_Id：" + that.X_Device_Id);
      if (globalThis.location.hostname !== "www.aliyundrive.com" && globalThis.location.hostname !== "www.alipan.com") {
        let url = NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: "aliyun",
          ruleIndex,
          shareCode,
          accessCode
        });
        let $QmsgErrorTip = Qmsg.error(
          `请在阿里云盘页面解析，<a href="${url}">点我前往</a>`,
          {
            html: true,
            timeout: 1e4
          }
        );
        domUtils.on(
          $QmsgErrorTip.$Qmsg.querySelector("a[href]"),
          "click",
          void 0,
          (event) => {
            utils.preventEvent(event);
            NetDiskLinkClickMode.openBlankUrl(
              url,
              "aliyun",
              that.ruleIndex,
              that.shareCode,
              that.accessCode
            );
          }
        );
        return;
      }
      let detail = await this.list_by_share(shareCode, "root");
      if (!detail) {
        return;
      }
      Qmsg.info("正在解析链接");
      let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
      let folderInfoList = that.getFolderInfo(detail, 0);
      QmsgLoading.close();
      log.info("解析完毕");
      NetDiskUI.staticView.moreFile("阿里云盘文件解析", folderInfoList);
    }
    /**
     * 弹窗使用-获取文件夹信息
     * @param infoList
     */
    getFolderInfo(infoList, index = 0) {
      const that = this;
      let folderInfoList = [];
      let tempFolderInfoList = [];
      let tempFolderFileInfoList = [];
      infoList.forEach((item) => {
        if (item.type !== "folder") {
          tempFolderFileInfoList.push({
            fileName: item.name,
            fileSize: item.size,
            fileType: item.file_extension,
            createTime: new Date(item.created_at).getTime(),
            latestTime: new Date(item.updated_at).getTime(),
            isFolder: false,
            index,
            async clickEvent() {
              let fileDownloadUrl = await that.get_share_link_download_url(
                item.share_id,
                item.file_id
              );
              if (!fileDownloadUrl) {
                return;
              }
              let schemeDownloadUrl = fileDownloadUrl;
              if (NetDiskFilterScheme.isForwardDownloadLink("aliyun")) {
                schemeDownloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
                  "aliyun",
                  schemeDownloadUrl
                );
              }
              return {
                autoDownload: true,
                mode: "aBlank",
                url: schemeDownloadUrl
              };
            }
          });
        } else {
          tempFolderInfoList.push({
            fileName: item.name,
            fileSize: 0,
            fileType: "",
            createTime: item.created_at,
            latestTime: item.updated_at,
            isFolder: true,
            index,
            async clickEvent() {
              let newDetail = await that.list_by_share(
                item.share_id,
                item.file_id
              );
              if (newDetail) {
                return that.getFolderInfo(newDetail, index + 1);
              } else {
                return [];
              }
            }
          });
        }
      });
      tempFolderInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      tempFolderFileInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      log.info("getFilesInfoByRec", folderInfoList);
      return folderInfoList;
    }
    /**
     * 列出文件列表
     * @param share_id
     * @param parent_file_id 父项，根是root
     * @param order_by 根据xxx排序
     * @param order_direction 排序规则(升序/降序)
     */
    async list_by_share(share_id, parent_file_id, order_by = "name", order_direction = "DESC") {
      const that = this;
      let postResp = await httpx.post(
        "https://api.aliyundrive.com/adrive/v2/file/list_by_share",
        {
          data: JSON.stringify({
            share_id,
            parent_file_id,
            limit: 20,
            image_thumbnail_process: "image/resize,w_256/format,jpeg",
            image_url_process: "image/resize,w_1920/format,jpeg/interlace,1",
            video_thumbnail_process: "video/snapshot,t_1000,f_jpg,ar_auto,w_256",
            order_by,
            order_direction
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Origin: "https://www.aliyundrive.com",
            Referer: "https://www.aliyundrive.com/",
            "X-Canary": that.X_Canary,
            "X-Device-Id": that.X_Device_Id,
            "X-Share-Token": await that.get_X_Share_Token(
              that.shareCode,
              that.accessCode
            ),
            "User-Agent": utils.getRandomPCUA()
          },
          allowInterceptConfig: false
        }
      );
      if (!postResp.status) {
        that.handle_request_error(postResp);
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      log.info("列出文件列表：", data);
      return data["items"];
    }
    /**
     * 获取文件的下载链接
     * @param share_id
     * @param file_id
     */
    async get_share_link_download_url(share_id, file_id) {
      const that = this;
      let postResp = await httpx.post(
        "https://api.aliyundrive.com/v2/file/get_share_link_download_url",
        {
          data: JSON.stringify({
            expire_sec: 600,
            file_id,
            share_id
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.aliyundrive.com",
            Referer: "https://www.aliyundrive.com/",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Bearer " + that.getAuthorization(),
            "X-Share-Token": await that.get_X_Share_Token(
              that.shareCode,
              that.accessCode
            ),
            "User-Agent": utils.getRandomPCUA()
          },
          responseType: "arraybuffer",
          allowInterceptConfig: false
        }
      );
      if (!postResp.status) {
        that.handle_request_error(postResp);
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      log.info("获取文件的下载链接：", data);
      return data["download_url"];
    }
    /**
     * 处理请求的错误
     * @param postResp
     */
    handle_request_error(postResp) {
      log.error(postResp);
      let errData = utils.toJSON(postResp.data.responseText);
      if (errData["message"] == "") {
        Qmsg.error(postResp.msg);
      } else {
        Qmsg.error(errData["message"]);
      }
    }
    /**
     * 获取用户鉴权值
     * 来源：localStorage => token.access_token
     */
    getAuthorization() {
      let token = _unsafeWindow.localStorage.getItem("token");
      if (utils.isNotNull(token) && token != null) {
        let tokenJSON = utils.toJSON(token);
        let access_token = tokenJSON["access_token"];
        log.success("获取阿里云盘的access_token：", access_token);
        return access_token;
      } else {
        log.error("获取access_token失败，请先登录账号！");
        Qmsg.error("获取access_token失败，请先登录账号！");
      }
    }
    /**
     * 获取header请求头 X-Share-Token
     * 来源：localStorage => shareToken.share_token
     * @param share_id
     * @param share_pwd
     */
    async get_X_Share_Token(share_id, share_pwd) {
      const that = this;
      if (/* @__PURE__ */ new Date() < new Date(that.X_Share_Token_Data.expire_time)) {
        return that.X_Share_Token_Data.share_token;
      }
      let postResp = await httpx.post(
        "https://api.aliyundrive.com/v2/share_link/get_share_token",
        {
          data: JSON.stringify({
            share_id,
            share_pwd
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Origin: "https://www.aliyundrive.com",
            Referer: "https://www.aliyundrive.com/",
            "X-Canary": that.X_Canary,
            "X-Device-Id": that.X_Device_Id,
            "User-Agent": utils.getRandomPCUA()
          },
          allowInterceptConfig: false
        }
      );
      if (!postResp.status) {
        that.handle_request_error(postResp);
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      that.X_Share_Token_Data = data;
      log.info("获取share_token：", that.X_Share_Token_Data);
      return that.X_Share_Token_Data["share_token"];
    }
    /**
     * 获取header请求头 X-Device-Id
     */
    get_X_Device_Id() {
      for (var alipan_device_id_pattern = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, alipan_s = [], alipan_l = 0; alipan_l < 256; ++alipan_l)
        alipan_s.push((alipan_l + 256).toString(16).substr(1));
      function alipan_o() {
        return crypto.getRandomValues(new Uint8Array(16));
      }
      var alipan_c = function(args_e) {
        var second_arg = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, devices_id_string = (alipan_s[args_e[second_arg + 0]] + alipan_s[args_e[second_arg + 1]] + alipan_s[args_e[second_arg + 2]] + alipan_s[args_e[second_arg + 3]] + "-" + alipan_s[args_e[second_arg + 4]] + alipan_s[args_e[second_arg + 5]] + "-" + alipan_s[args_e[second_arg + 6]] + alipan_s[args_e[second_arg + 7]] + "-" + alipan_s[args_e[second_arg + 8]] + alipan_s[args_e[second_arg + 9]] + "-" + alipan_s[args_e[second_arg + 10]] + alipan_s[args_e[second_arg + 11]] + alipan_s[args_e[second_arg + 12]] + alipan_s[args_e[second_arg + 13]] + alipan_s[args_e[second_arg + 14]] + alipan_s[args_e[second_arg + 15]]).toLowerCase();
        if (!function(e) {
          return "string" == typeof e && alipan_device_id_pattern.test(e);
        }(devices_id_string))
          throw TypeError("Stringified UUID is invalid");
        return devices_id_string;
      }, alipan_u = function(args_e, args_t, args_n) {
        var randomValue = (args_e = args_e || {}).random || (args_e.rng || alipan_o)();
        if (randomValue[6] = 15 & randomValue[6] | 64, randomValue[8] = 63 & randomValue[8] | 128, args_t) ;
        return alipan_c(randomValue);
      };
      return alipan_u();
    }
  }
  class NetDiskParse_Baidu extends ParseFileAbstract {
    /**
     * 入口
     */
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = _GM_getValue("baidu-baiduwp-php-url");
      let postForm = _GM_getValue("baidu-baiduwp-php-post-form");
      let enableCopy = _GM_getValue("baidu-baiduwp-php-copy-url");
      if (!url) {
        Qmsg.error("请先在设置中配置百度网盘-网址");
        return void 0;
      }
      if (!postForm) {
        Qmsg.error("请先在设置中配置百度网盘-表单参数");
        return void 0;
      }
      postForm = NetDiskRuleUtils.replaceParam(postForm, {
        shareCode,
        accessCode
      });
      let formElement = document.createElement("form");
      let formData = {};
      let urlParams = new URLSearchParams(postForm);
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
      log.info("表单数据", formData);
      document.body.appendChild(formElement);
      log.info("访问网址", url);
      if (enableCopy) {
        NetDiskLinkClickMode.copy(
          "baidu",
          ruleIndex,
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
    }
  }
  const NetDiskPops = {
    /**
     * 普通信息框
     * @param details 配置
     * @param sizeConfig 大小配置
     */
    alert(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return __pops.alert(details);
    },
    /**
     * 询问框
     * @param details 配置
     * @param sizeConfig 大小配置
     */
    confirm(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return __pops.confirm(details);
    },
    /**
     * 加载层
     * @param details 配置
     */
    loading(details) {
      if (typeof details["animation"] === "undefined") {
        details["animation"] = NetDiskGlobalData.pops.popsAnimation.value;
      }
      if (typeof details["forbiddenScroll"] === "undefined") {
        details["forbiddenScroll"] = NetDiskUI.defaultForbiddenScroll;
      }
      return __pops.loading(details);
    },
    /**
     * 输入框
     * @param details 配置
     * @param sizeConfig 大小配置
     */
    prompt(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return __pops.prompt(details);
    },
    /**
     * 文件夹
     * @param details 配置
     */
    folder(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      details["sort"] = {
        name: NetDiskGlobalData.popsFolder["pops-folder-sort-name"].value,
        isDesc: NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].value,
        // @ts-ignore
        callback(target, event, sortName, sortDesc) {
          NetDiskGlobalData.popsFolder["pops-folder-sort-name"].value = sortName;
          NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].value = sortDesc;
        }
      };
      return __pops.folder(details);
    },
    /**
     * 菜单面板
     * @param details 配置
     */
    panel(details, sizeConfig) {
      details = this.handleDetails(details, sizeConfig);
      return __pops.panel(details);
    },
    /**
     * 右键菜单
     */
    rightClickMenu(details) {
      details = this.handleDetails(details);
      return __pops.rightClickMenu(details);
    },
    /**
     *
     * @param details
     * @param sizeConfig 大小配置
     */
    handleDetails(details, sizeConfig) {
      details = Object.assign(
        {
          animation: NetDiskGlobalData.pops.popsAnimation.value,
          drag: NetDiskGlobalData.pops.pcDrag.value,
          dragLimit: NetDiskGlobalData.pops.pcDragLimit.value,
          forbiddenScroll: NetDiskUI.defaultForbiddenScroll
        },
        details
      );
      if (sizeConfig != null) {
        if (__pops.isPhone()) {
          let popsWidth = typeof sizeConfig.Mobile.width === "function" ? sizeConfig.Mobile.width() : sizeConfig.Mobile.width;
          let popsHeight = typeof sizeConfig.Mobile.height === "function" ? sizeConfig.Mobile.height() : sizeConfig.Mobile.height;
          details.width = popsWidth;
          details.height = popsHeight;
        } else {
          let popsWidth = typeof sizeConfig.PC.width === "function" ? sizeConfig.PC.width() : sizeConfig.PC.width;
          let popsHeight = typeof sizeConfig.PC.height === "function" ? sizeConfig.PC.height() : sizeConfig.PC.height;
          details.width = popsWidth;
          details.height = popsHeight;
        }
      }
      if (details.mask == null) {
        details.mask = {};
      }
      if (typeof details.mask.enable !== "boolean") {
        details.mask.enable = true;
      }
      if (details.mask.clickEvent == null) {
        details.mask.clickEvent = {};
      }
      if (typeof details.mask.clickEvent.toClose !== "boolean") {
        details.mask.clickEvent.toClose = NetDiskGlobalData.pops.clickMaskToCloseDialog.value;
      }
      if (NetDiskGlobalData.pops.popsAcrylic.value) {
        let acrylicCSS = (
          /*css*/
          `
            .pops {
                --acrylic-opacity: 0.7;
                --acrylic-color: rgba(232, 232, 232, var(--acrylic-opacity));
                --acrylic-blur: 30px;
                --acrylic-saturate: 125%;
                --pops-bg-opacity: var(--acrylic-opacity);
            }
            .pops {
                backdrop-filter: blur(var(--acrylic-blur)) saturate(var(--acrylic-saturate)) !important;
                background-color: var(--acrylic-color) !important;
            }
            .pops[type-value=panel]{
                --aside-bg-color: rgba(221, 221, 221, var(--acrylic-opacity));
				--pops-bg-color: #f2f2f2;
				--title-bg-color: var(--acrylic-color);
				--aside-bg-color: var(--acrylic-color);
				--container-item-bg-color: var(--acrylic-color);
            }
            `
        );
        if (typeof details.style === "string") {
          details.style += acrylicCSS;
        } else {
          details.style = acrylicCSS;
        }
      }
      details.zIndex = () => {
        const deviation = 10;
        let maxZIndex = utils.getMaxZIndex(deviation);
        let popsMaxZIndex = __pops.config.InstanceUtils.getPopsMaxZIndex(deviation).zIndex;
        let zIndex = utils.getMaxValue(99999, maxZIndex, popsMaxZIndex) + deviation;
        return zIndex;
      };
      return details;
    }
  };
  const indexCSS$4 = '.pops[type-value="alert"]\r\n	.pops-alert-title:has(+ .pops-alert-content .netdisk-url-box-all:empty) {\r\n	border-bottom: none;\r\n}\r\n.netdisk-url-box {\r\n	border-bottom: 1px solid #e4e6eb;\r\n}\r\n.netdisk-url-div {\r\n	display: flex;\r\n	align-items: center;\r\n	width: 100%;\r\n	padding: 5px 0px 5px 0px;\r\n}\r\n.netdisk-icon {\r\n	display: contents;\r\n}\r\n.netdisk-icon .netdisk-icon-img {\r\n	cursor: pointer;\r\n	width: 28px;\r\n	height: 28px;\r\n	min-width: 28px;\r\n	min-height: 28px;\r\n	font-size: 0.8em;\r\n	margin: 0px 10px;\r\n}\r\n.netdisk-url-div .netdisk-icon,\r\n.netdisk-url-div .netdisk-status {\r\n	flex: 0 0 auto;\r\n}\r\n.netdisk-url-div .netdisk-url {\r\n	flex: 1;\r\n}\r\n.netdisk-icon .netdisk-icon-img {\r\n	border-radius: 10px;\r\n	box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%),\r\n		0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%),\r\n		0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);\r\n}\r\n.netdisk-status[data-check-failed] {\r\n	padding: 5px 5px;\r\n}\r\n.netdisk-url {\r\n	padding: 5px 5px;\r\n}\r\n.netdisk-url a {\r\n	color: #ff4848 !important;\r\n	min-height: 28px;\r\n	overflow-x: hidden;\r\n	overflow-y: auto;\r\n	font-size: 0.8em;\r\n	border: none;\r\n	display: flex;\r\n	align-items: center;\r\n	width: 100%;\r\n	height: 100%;\r\n	padding: 0px;\r\n	word-break: break-word;\r\n	text-align: left;\r\n}\r\n.netdisk-status {\r\n	display: none;\r\n}\r\n.netdisk-status[data-check-valid] {\r\n	display: flex;\r\n	align-items: center;\r\n	width: 15px;\r\n	height: 15px;\r\n	color: #000000;\r\n}\r\n\r\n.netdisk-status[data-check-valid="failed"] {\r\n	color: red;\r\n}\r\n\r\n.netdisk-status[data-check-valid="partial-violation"] {\r\n	color: orange;\r\n}\r\n\r\n.netdisk-status[data-check-valid="error"] {\r\n	cursor: pointer;\r\n}\r\n\r\n.netdisk-status[data-check-valid="success"] {\r\n	color: green;\r\n}\r\n\r\n.netdisk-status[data-check-valid="verify"] {\r\n	color: #faad14;\r\n}\r\n\r\n.netdisk-status[data-check-valid="loading"] svg {\r\n	animation: rotating 2s linear infinite;\r\n}\r\n\r\n.netdisk-url-box:has(.netdisk-status[data-check-valid="failed"]) {\r\n	text-decoration: line-through;\r\n}\r\n\r\n.whitesevPop-whitesevPopSetting :focus-visible {\r\n	outline-offset: 0;\r\n	outline: 0;\r\n}\r\n.netdisk-url a[isvisited="true"] {\r\n	color: #8b8888 !important;\r\n}\r\n.netdisk-url a:active {\r\n	box-shadow: 0 0 0 1px #616161 inset;\r\n}\r\n.netdisk-url a:focus-visible {\r\n	outline: 0;\r\n}\r\n.whitesevPop-content p[pop] {\r\n	text-indent: 0;\r\n}\r\n.whitesevPop-button[type="primary"] {\r\n	border-color: #2d8cf0;\r\n	background-color: #2d8cf0;\r\n}\r\n';
  const GenerateData = function(key, defaultValue) {
    return {
      /** 键名 */
      KEY: key,
      /** 默认值 */
      default: defaultValue,
      /** 获取值 */
      get value() {
        let currentValue = _GM_getValue(key, defaultValue);
        return currentValue;
      },
      /** 设置值 */
      set value(newValue) {
        _GM_setValue(key, newValue);
      }
    };
  };
  const NetDiskView = {
    show() {
      if (NetDiskUI.Alias.uiLinkAlias == null) {
        this.createView();
        this.initViewEvent();
      } else {
        NetDiskUI.Alias.uiLinkAlias.show();
      }
    },
    /**
     * 创建视图
     */
    createView() {
      const NetDiskViewConfig = {
        view: {
          "netdisl-small-window-shrink-status": GenerateData(
            "netdisl-small-window-shrink-status",
            false
          ),
          "netdisk-ui-small-window-position": GenerateData("netdisk-ui-small-window-position", null)
        }
      };
      const boxAllHTML = (
        /*html*/
        `<div class="netdisk-url-box-all"></div>`
      );
      if (NetDiskGlobalData.features["netdisk-behavior-mode"].value.toLowerCase().includes("smallwindow")) {
        NetDiskUI.Alias.uiLinkAlias = NetDiskPops.alert(
          {
            title: {
              text: "网盘",
              position: "center"
            },
            content: {
              text: boxAllHTML,
              html: true
            },
            btn: {
              ok: {
                enable: false
              },
              close: {
                callback(detail) {
                  if (NetDiskGlobalData.features["netdisk-behavior-mode"].value.toLowerCase().includes("suspension")) {
                    NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value = "suspension";
                    detail.hide();
                    NetDiskUI.suspension.show();
                  } else {
                    NetDiskUI.Alias.uiLinkAlias = void 0;
                    detail.close();
                  }
                }
              }
            },
            mask: {
              enable: false
            },
            // @ts-ignore
            animation: "",
            beforeAppendToPageCallBack($shadowRoot, $shadowContainer) {
              let $headerControl = $shadowRoot.querySelector(
                ".pops-header-control"
              );
              let $title = $shadowRoot.querySelector(".pops-alert-title");
              let $content = $shadowRoot.querySelector(
                ".pops-alert-content"
              );
              let launchIcon = domUtils.createElement(
                "button",
                {
                  className: "pops-header-control",
                  innerHTML: (
                    /*html*/
                    `
                                <i class="pops-icon">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
                                    </path>
                                </svg>
                                </i>
                                `
                  )
                },
                {
                  type: "launch",
                  "data-header": true
                }
              );
              let shrinkIcon = domUtils.createElement(
                "button",
                {
                  className: "pops-header-control",
                  innerHTML: (
                    /*html*/
                    `
                                <i class="pops-icon">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M618.496 425.984h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m-192.512 172.032h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m516.096-24.576c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
                                    </path>
                                </svg>
                                </i>
                                `
                  )
                },
                {
                  type: "shrink",
                  "data-header": true
                }
              );
              domUtils.before($headerControl, launchIcon);
              domUtils.before($headerControl, shrinkIcon);
              domUtils.on(
                launchIcon,
                "click",
                void 0,
                function() {
                  domUtils.addClass(launchIcon, "pops-hide-important");
                  domUtils.removeClass(shrinkIcon, "pops-hide-important");
                  domUtils.removeClass($title, "pops-no-border-important");
                  domUtils.removeClass($content, "pops-hide-important");
                  NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value = false;
                },
                {
                  capture: true
                }
              );
              domUtils.on(
                shrinkIcon,
                "click",
                void 0,
                function() {
                  domUtils.removeClass(launchIcon, "pops-hide-important");
                  domUtils.addClass(shrinkIcon, "pops-hide-important");
                  domUtils.addClass($title, "pops-no-border-important");
                  domUtils.addClass($content, "pops-hide-important");
                  NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value = true;
                },
                {
                  capture: true
                }
              );
              if (NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value) {
                shrinkIcon.click();
              } else {
                launchIcon.click();
              }
            },
            dragMoveCallBack(moveElement, left, top2) {
              NetDiskViewConfig.view["netdisk-ui-small-window-position"].value = {
                left,
                top: top2
              };
            },
            class: "whitesevPop",
            style: (
              /*css*/
              `
                    ${indexCSS$4}

                    .pops {
                        --container-title-height: 35px;
                        --content-max-height: ${NetDiskGlobalData.smallWindow["netdisk-ui-small-window-max-height"].value}px;
                        --netdisk-line-space: 8px;
                        --netdisk-icon-size: 24px;
                    }
                    .pops[type-value="alert"]{
                        transform: none;
                    }
                    .pops {
                        max-height: var(--content-max-height);
                    }
                    .pops[type-value=alert] .pops-alert-content{
                        max-height: calc(var(--content-max-height) - var(--container-title-height) - var(--container-bottom-btn-height));
                    }
                    .pops-header-controls button.pops-header-control[type][data-header]{
                        padding: 0px 5px;
                    }
                    .netdisk-url-div{
                        padding: 0px;
                    }
                    .netdisk-icon .netdisk-icon-img{
                        width: var(--netdisk-icon-size);
                        height: var(--netdisk-icon-size);
                        min-width: var(--netdisk-icon-size);
                        min-height: var(--netdisk-icon-size);
                        margin: 0px var(--netdisk-line-space);
                    }
                    .netdisk-status{
                        margin-right: var(--netdisk-line-space);
                    }
                    .netdisk-url{
                        padding: 2px 0px;
                    }
                    `
            )
          },
          NetDiskUI.popsStyle.mainViewSmallWindow
        );
        let smallWindowPosition = NetDiskViewConfig.view["netdisk-ui-small-window-position"].value;
        let popsElement = NetDiskUI.Alias.uiLinkAlias.popsElement;
        if (smallWindowPosition) {
          let viewWidth = domUtils.width(popsElement, true);
          let viewHeight = domUtils.height(popsElement, true);
          let maxWindowLeft = domUtils.width(window);
          let maxWindowTop = domUtils.height(window);
          const { transformLeft, transformTop } = domUtils.getTransform(popsElement);
          let maxLeft = maxWindowLeft - viewWidth + transformLeft;
          let maxTop = maxWindowTop - viewHeight + transformTop;
          let minLeft = 0 + transformLeft;
          let minTop = 0 + transformTop;
          if (smallWindowPosition.top > maxTop) {
            smallWindowPosition.top = maxTop;
          } else if (smallWindowPosition.top < minTop) {
            smallWindowPosition.top = minTop;
          }
          if (smallWindowPosition.left > maxLeft) {
            smallWindowPosition.left = maxLeft;
          } else if (smallWindowPosition.left < minLeft) {
            smallWindowPosition.left = minLeft;
          }
          popsElement.style.transitionDuration = "0s";
          popsElement.style.left = smallWindowPosition["left"] + "px";
          popsElement.style.top = smallWindowPosition["top"] + "px";
          setTimeout(() => {
            popsElement.style.transitionDuration = "0s";
          }, 300);
        }
      } else {
        NetDiskUI.Alias.uiLinkAlias = NetDiskPops.alert(
          {
            title: {
              text: "网盘",
              position: "center"
            },
            content: {
              text: boxAllHTML,
              html: true
            },
            btn: {
              ok: {
                enable: false
              },
              close: {
                callback(event) {
                  NetDiskUI.Alias.uiLinkAlias = void 0;
                  event.close();
                }
              }
            },
            mask: {
              clickCallBack(originalRun) {
                originalRun();
                NetDiskUI.Alias.uiLinkAlias = void 0;
              }
            },
            class: "whitesevPop",
            style: (
              /*css*/
              `
                    ${indexCSS$4}

                    .pops {
                        max-height: 60vh;
                    }
					@media screen and (max-width: 600px) {
						.pops {
                       		max-height: 50vh;
                    	}
					}
                    `
            )
          },
          NetDiskUI.popsStyle.mainView
        );
      }
      let $urlBoxAll = NetDiskUI.Alias.uiLinkAlias.$shadowRoot.querySelector(
        ".netdisk-url-box-all"
      );
      NetDiskUI.isMatchedNetDiskIconMap.forEach((ruleKeyName) => {
        let netDiskDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
        let documentFragment = document.createDocumentFragment();
        netDiskDict.forEach((netDiskData, shareCode) => {
          let uiLink = NetDisk.handleLinkShow({
            ruleKeyName,
            ruleIndex: netDiskData["ruleIndex"],
            shareCode,
            accessCode: netDiskData["accessCode"],
            matchText: netDiskData["matchText"],
            showToast: false
          });
          if (!uiLink) {
            return;
          }
          let boxViewInfo = this.createViewBoxElementInfo(
            NetDiskUI.src.icon[ruleKeyName],
            ruleKeyName,
            netDiskData["ruleIndex"],
            shareCode,
            netDiskData["accessCode"],
            uiLink
          );
          documentFragment.appendChild(boxViewInfo.$viewBox);
        });
        $urlBoxAll.appendChild(documentFragment);
      });
      let netDiskLinkViewZIndex = NetDiskGlobalData.smallWindow["netdisk-link-view-z-index"].value;
      if (netDiskLinkViewZIndex > 0) {
        domUtils.css(NetDiskUI.Alias.uiLinkAlias.popsElement, {
          "z-index": netDiskLinkViewZIndex
        });
      }
      NetDiskUI.Alias.uiLinkAlias.popsElement.querySelectorAll(".netdisk-url-box-all .netdisk-url-box").forEach(($netDiskBox) => {
        let ruleKeyName = $netDiskBox.querySelector(".netdisk-link").getAttribute("data-rule-key");
        let ruleIndex = parseInt(
          $netDiskBox.querySelector(".netdisk-link").getAttribute("data-rule-index")
        );
        let shareCode = $netDiskBox.querySelector(".netdisk-link").getAttribute("data-sharecode");
        let accessCode = $netDiskBox.querySelector(".netdisk-link").getAttribute("data-accesscode");
        NetDiskCheckLinkValidity.check(
          $netDiskBox,
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode
        );
      });
    },
    /**
     * 初始化事件（在创建视图后）
     */
    initViewEvent() {
      NetDiskUI.setRightClickMenu(
        NetDiskUI.Alias.uiLinkAlias.$shadowRoot,
        ".whitesevPop .netdisk-url a"
      );
      this.registerIconGotoPagePosition(NetDiskUI.Alias.uiLinkAlias.$shadowRoot);
      this.setNetDiskUrlClickEvent(
        NetDiskUI.Alias.uiLinkAlias.$shadowRoot,
        ".netdisk-url a"
      );
      NetDiskUI.setGlobalRightClickMenu(
        NetDiskUI.Alias.uiLinkAlias.$shadowRoot.querySelector(
          ".pops .pops-alert-title > p"
        )
      );
    },
    /**
     * 创建在元素属性上的attribute的数据JSON
     */
    createElementAttributeRuleInfoJSON(data) {
      return {
        /** 网盘 */
        "data-rule-key": data.ruleKeyName,
        /** 网盘索引 */
        "data-rule-index": data.ruleIndex,
        /** 访问码 */
        "data-sharecode": data.shareCode,
        /** 访问码 */
        "data-accesscode": data.accessCode
      };
    },
    /**
     * 创建在元素属性上的attribute的数据
     * @param data 数据
     * @param $ele 需要处理的元素
     */
    handleElementAttributeRuleInfo(data, $ele) {
      let ruleInfoJSON = this.createElementAttributeRuleInfoJSON(data);
      for (const key in ruleInfoJSON) {
        const value = ruleInfoJSON[key];
        if (Array.isArray($ele)) {
          $ele.forEach(($ele2) => {
            $ele2.setAttribute(key, value.toString());
          });
        } else {
          $ele.setAttribute(key, value.toString());
        }
      }
    },
    /**
     * 解析创建在元素属性上的attribute的数据
     * @param $ele 元素
     */
    praseElementAttributeRuleInfo($ele) {
      let result = {
        ruleKeyName: $ele.getAttribute("data-rule-key"),
        ruleIndex: parseInt($ele.getAttribute("data-rule-index")),
        shareCode: $ele.getAttribute("data-sharecode"),
        accessCode: $ele.getAttribute("data-accesscode")
      };
      if (isNaN(result.ruleIndex)) {
        log.warn("元素上的 ruleIndex 的值是NaN，调整为默认值0", $ele);
        result.ruleIndex = 0;
      }
      return result;
    },
    /**
     * 创建每一项的网盘元素信息
     * @param ruleImgSrc 规则图标src
     * @param ruleKeyName 规则键名
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 访问码
     * @param uiLinkText 显示出来的链接文本
     */
    createViewBoxElementInfo(ruleImgSrc, ruleKeyName, ruleIndex, shareCode, accessCode, uiLinkText) {
      let $viewBox = domUtils.createElement("div", {
        className: "netdisk-url-box",
        innerHTML: (
          /*html*/
          `
			<div class="netdisk-url-div">
                <div class="netdisk-icon">
                    <div class="netdisk-icon-img">
                    </div>
                </div>
                <div class="netdisk-status">

                </div>
                <div class="netdisk-url">
                    <a  class="netdisk-link" href="javascript:;" isvisited="false"></a>
                </div>
            </div>
			`
        )
      });
      const { $urlDiv, $icon, $iconImg, $checkValidStatus, $url, $link } = this.parseViewBoxElementInfo($viewBox);
      $iconImg.style.cssText = `background: url(${ruleImgSrc}) no-repeat;background-size: 100%;`;
      domUtils.html($link, uiLinkText);
      this.handleElementAttributeRuleInfo(
        {
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode
        },
        [$iconImg, $link]
      );
      NetDisk.$rule.rule.forEach((ruleConfig) => {
        if (ruleConfig.setting.key === ruleKeyName && typeof ruleConfig.afterRenderUrlBox === "function") {
          ruleConfig.afterRenderUrlBox({
            $viewBox,
            $urlDiv,
            $url,
            $link,
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode
          });
        }
      });
      return {
        $viewBox,
        $urlDiv,
        $icon,
        $iconImg,
        $checkValidStatus,
        $url,
        $link
      };
    },
    /**
     * 解析元素上的各个元素
     * @param $viewBox 元素
     */
    parseViewBoxElementInfo($viewBox) {
      let $urlBox = $viewBox.matches(".netdisk-url-box") ? $viewBox : $viewBox.closest(".netdisk-url-box");
      let $urlDiv = $urlBox.querySelector(".netdisk-url-div");
      let $icon = $urlBox.querySelector(".netdisk-icon");
      let $iconImg = $urlBox.querySelector(".netdisk-icon-img");
      let $checkValidStatus = $urlBox.querySelector(".netdisk-status");
      let $url = $urlBox.querySelector(".netdisk-url");
      let $link = $urlBox.querySelector(".netdisk-link");
      return {
        $urlBox,
        $urlDiv,
        $icon,
        $iconImg,
        $checkValidStatus,
        $url,
        $link
      };
    },
    /**
     * 设置网盘链接的点击事件
     *
     * 内部执行点击动作
     * @param $el 监听的元素
     * @param childSelector 子元素选择器
     */
    setNetDiskUrlClickEvent($el, childSelector) {
      domUtils.on($el, "click", childSelector, (event) => {
        let $click = event.target;
        $click.setAttribute("isvisited", "true");
        const data = NetDiskView.praseElementAttributeRuleInfo($click);
        let ctrlClick = event.ctrlKey;
        if (ctrlClick) {
          this.netDiskUrlClickEvent({
            data,
            clickMode: "openBlank",
            $click
          });
        } else {
          this.netDiskUrlClickEvent({
            data,
            $click
          });
        }
      });
      domUtils.on(
        $el,
        "auxclick",
        childSelector,
        (event, $click) => {
          if (event.button !== 1) {
            return;
          }
          utils.preventEvent(event);
          $click.setAttribute("isvisited", "true");
          const data = NetDiskView.praseElementAttributeRuleInfo($click);
          let url = NetDiskLinkClickModeUtils.getBlankUrl({
            ruleKeyName: data.ruleKeyName,
            ruleIndex: data.ruleIndex,
            shareCode: data.shareCode,
            accessCode: data.accessCode
          });
          NetDiskLinkClickMode.openBlankUrl(
            url,
            data.ruleKeyName,
            data.ruleIndex,
            data.shareCode,
            data.accessCode,
            true
          );
        }
      );
    },
    /**
     * 网盘链接点击事件
     * @param option
     */
    netDiskUrlClickEvent(option) {
      const { ruleKeyName, ruleIndex, shareCode, accessCode } = option.data;
      let linkClickMode = option.clickMode ?? NetDiskRuleData.function.linkClickMode(option.data.ruleKeyName);
      let closePopup = () => {
        if (option.$click) {
          let $pops = option.$click.closest(".pops");
          if ($pops) {
            let $close = $pops.querySelector(
              '.pops-header-control[type="close"]'
            );
            $close && $close.click();
          }
        }
      };
      if (linkClickMode === "copy" || linkClickMode === "copy-closePopup") {
        NetDiskLinkClickMode.copy(ruleKeyName, ruleIndex, shareCode, accessCode);
        if (linkClickMode === "copy-closePopup") {
          closePopup();
        }
      } else if (linkClickMode === "openBlank" || linkClickMode === "openBlank-closePopup") {
        let url = NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode
        });
        let isForwardBlankUrl = NetDiskFilterScheme.isForwardBlankLink(ruleKeyName);
        if (isForwardBlankUrl) {
          NetDiskLinkClickMode.openBlankWithScheme(
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode
          );
        } else {
          NetDiskLinkClickMode.openBlankUrl(
            url,
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode
          );
        }
        if (linkClickMode === "openBlank-closePopup") {
          closePopup();
        }
      } else if (linkClickMode === "parseFile" || linkClickMode === "parseFile-closePopup") {
        NetDiskLinkClickMode.parseFile(
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode
        ).then(() => {
          if (linkClickMode === "parseFile-closePopup") {
            closePopup();
          }
        });
      } else {
        log.error("未知点击动作：" + linkClickMode);
        Qmsg.error("未知点击动作：" + linkClickMode);
      }
    },
    /**
     * 注册右键菜单
     * @param target
     * @param selector
     * @param showTextList 右键菜单的内容
     * @param className className属性
     */
    registerContextMenu(target, selector, showTextList = [], className = "whitesevSuspensionContextMenu") {
      let data = [];
      showTextList.forEach((item) => {
        data.push({
          text: item.text,
          callback: item.callback,
          icon: item?.icon ?? "",
          iconIsLoading: item?.iconIsLoading ?? false,
          item: item?.item ?? null
        });
      });
      let detail = {
        target,
        targetSelector: selector,
        data,
        isAnimation: false,
        className,
        only: true,
        chileMenuLeftOrRightDistance: -3,
        childMenuTopOrBottomDistance: -5
      };
      NetDiskPops.rightClickMenu(detail);
    },
    /**
     * 添加新的链接
     * @param ruleKeyName 规则名称
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 访问码
     * @param matchText 匹配到的文本
     */
    addLinkView(ruleKeyName, ruleIndex, shareCode, accessCode, matchText) {
      NetDiskUI.netDiskHistoryMatch.changeMatchedData(
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
        matchText
      );
      if (!NetDiskUI.Alias.uiLinkAlias) {
        return;
      }
      log.info(ruleKeyName, ruleIndex, shareCode, accessCode);
      let icon = NetDiskUI.src.icon[ruleKeyName];
      let uiLink = NetDisk.handleLinkShow({
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
        matchText
      });
      if (!uiLink) {
        return;
      }
      let boxViewInfo = this.createViewBoxElementInfo(
        icon,
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
        uiLink
      );
      let $urlBoxAll = NetDiskUI.Alias.uiLinkAlias.$shadowRoot.querySelector(
        ".netdisk-url-box-all"
      );
      domUtils.append($urlBoxAll, boxViewInfo.$viewBox);
      let $urlBox = $urlBoxAll.children[$urlBoxAll.children.length - 1];
      NetDiskCheckLinkValidity.check(
        $urlBox,
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode
      );
    },
    /**
     * 修改已存在的view
     * @param ruleKeyName 规则名称
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 访问码
     * @param matchText 匹配到的文本
     */
    changeLinkView(ruleKeyName, ruleIndex, shareCode, accessCode, matchText) {
      NetDiskUI.netDiskHistoryMatch.changeMatchedData(
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
        matchText
      );
      if (!NetDiskUI.Alias.uiLinkAlias) {
        return;
      }
      let uiLink = NetDisk.handleLinkShow({
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
        matchText
      });
      if (!uiLink) {
        return;
      }
      let needChangeDOM = NetDiskUI.Alias.uiLinkAlias.popsElement.querySelector(
        `.netdisk-url a[data-sharecode='${shareCode}'][data-rule-index='${ruleIndex}']`
      );
      log.info("修改网盘链接视图");
      log.info(needChangeDOM);
      needChangeDOM.setAttribute("data-accesscode", accessCode);
      domUtils.html(needChangeDOM, uiLink);
    },
    /**
     * 设置点击图标按钮导航至该网盘链接所在网页中位置
     */
    registerIconGotoPagePosition(targetElement) {
      let findGenerator = void 0;
      let iterator = void 0;
      let prevSearchShareCode = void 0;
      domUtils.on(
        targetElement,
        "click",
        ".whitesevPop .netdisk-icon .netdisk-icon-img",
        function(event) {
          let $click = event.target;
          let dataSharecode = $click.getAttribute("data-sharecode");
          if (!NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode"].value) {
            return;
          }
          if (typeof dataSharecode !== "string") {
            Qmsg.error("获取data-sharecode属性失败");
            return;
          }
          if (prevSearchShareCode == void 0) {
            prevSearchShareCode = dataSharecode;
          } else if (prevSearchShareCode !== dataSharecode) {
            log.info(
              `上一个搜索：${prevSearchShareCode}，切换至：${dataSharecode}`
            );
            findGenerator = void 0;
            iterator = void 0;
            prevSearchShareCode = dataSharecode;
          }
          if (findGenerator == void 0) {
            findGenerator = utils.findElementsWithText(
              document.documentElement,
              dataSharecode
            );
            iterator = findGenerator.next();
          }
          if (iterator?.value) {
            log.success("定位元素", iterator);
            if (iterator.value.nodeType === Node.ELEMENT_NODE && iterator.value.getClientRects().length) {
              iterator.value.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
              });
              if (NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].value) {
                let elementText = iterator.value.innerText || iterator.value.textContent;
                let childTextNode = void 0;
                let startIndex = void 0;
                let endIndex = void 0;
                if (elementText.includes(dataSharecode)) {
                  let textNodeList = Array.from(
                    iterator.value.childNodes
                  ).filter((ele) => ele.nodeType === Node.TEXT_NODE);
                  for (const textNode of textNodeList) {
                    if (textNode.textContent.includes(
                      dataSharecode
                    )) {
                      childTextNode = textNode;
                      startIndex = textNode.textContent.indexOf(dataSharecode);
                      endIndex = startIndex + dataSharecode.length;
                      break;
                    }
                  }
                }
                try {
                  utils.selectElementText(
                    iterator.value,
                    childTextNode,
                    startIndex,
                    endIndex
                  );
                } catch (error) {
                  log.error(error);
                  utils.selectElementText(iterator.value);
                }
              }
            } else if (iterator.value.nodeType === Node.TEXT_NODE && iterator.value.parentElement.getClientRects().length) {
              if (NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].value) {
                let elementText = iterator.value.textContent || iterator.value.nodeValue;
                let childTextNode = iterator.value;
                let startIndex = elementText.indexOf(dataSharecode);
                let endIndex = startIndex + dataSharecode.length;
                try {
                  utils.selectElementText(
                    iterator.value,
                    childTextNode,
                    startIndex,
                    endIndex
                  );
                } catch (error) {
                  log.error(error);
                  utils.selectElementText(iterator.value.parentElement);
                }
                let selection = globalThis.getSelection();
                if (selection.rangeCount > 0) {
                  let range = selection.getRangeAt(0);
                  let rect = range.getBoundingClientRect();
                  let scrollYOffset = globalThis.scrollY;
                  let position = rect.top + scrollYOffset - globalThis.innerHeight / 2;
                  globalThis.scrollTo({
                    behavior: "smooth",
                    top: position
                  });
                } else {
                  iterator.value.parentElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                  });
                }
              } else {
                try {
                  let range = new Range();
                  range.selectNodeContents(iterator.value);
                  let rect = range.getBoundingClientRect();
                  let scrollYOffset = globalThis.scrollY;
                  let position = rect.top + scrollYOffset - globalThis.innerHeight / 2;
                  globalThis.scrollTo({
                    behavior: "smooth",
                    top: position
                  });
                } catch (error) {
                  log.error(error);
                  iterator.value.parentElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                  });
                }
              }
            } else {
              log.error("无法定位该元素位置", iterator.value);
              Qmsg.error(
                `无法定位该元素位置，类型：<${(iterator.value.nodeName || iterator.value.localName || iterator.value.tagName).toLowerCase()}>`,
                {
                  html: false
                }
              );
            }
          }
          iterator = findGenerator.next();
          if (iterator.done) {
            if (!NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].value) {
              Qmsg.info("已经定位至最后一个元素了");
              return;
            }
            findGenerator = void 0;
            iterator = void 0;
          }
        }
      );
    }
  };
  class NetDiskParse_Chengtong extends ParseFileAbstract {
    /**
     * 入口
     */
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let ruleKeyName = "chengtong";
      if (ruleIndex !== 3) {
        log.warn(
          `解析站暂时只支持单文件解析，非单文件链接的点击动作为新标签页打开`
        );
        NetDiskView.netDiskUrlClickEvent({
          data: {
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode
          },
          clickMode: "openBlank"
        });
        return;
      }
      let apiHost = _GM_getValue("chengtong-parse-file-api-host");
      if (utils.isNull(apiHost)) {
        Qmsg.error("请先配置文件解析接口地址");
        return;
      }
      if (!apiHost.endsWith("/")) {
        apiHost += "/";
      }
      let url = apiHost + "?file=" + shareCode;
      if (utils.isNotNull(accessCode)) {
        url += "&pass=" + accessCode;
      }
      window.open(url, "_blank");
    }
  }
  const MetaDataParser = {
    /**
     * 解析文件链接的元数据
     */
    async parseFileMetaInfo(url) {
      const response = await httpx.get(
        "https://whatslink.info/api/v1/link?url=" + url,
        {
          headers: {
            Referer: "https://whatslink.info/"
          },
          allowInterceptConfig: false
        }
      );
      let data = utils.toJSON(response.data.responseText);
      if (!response.status) {
        if (typeof data.error === "string" && data.error.trim() !== "") {
          Qmsg.error(data.error);
          return;
        }
        Qmsg.error("请求失败");
        return;
      }
      return data;
    },
    /**
     * 显示元数据弹窗
     */
    showFileMetaInfoDialog(metaInfo) {
      NetDiskPops.alert({
        title: {
          text: "元数据信息",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
						<div class="wrapper">
							<div class="title">Summary</div>
							<div class="content">
								<div>Resource Name: ${metaInfo.name}</div>
								<div>Number of Files: ${metaInfo.count}</div>
								<div>Total File Size: ${utils.formatByteToSize(metaInfo.size)}</div>
								<div>File Type: ${metaInfo.type.toLowerCase()}</div>
							</div>
						</div>
						${Array.isArray(metaInfo.screenshots) ? (
            /*html*/
            `
							<div class="wrapper">
								<div class="title">Screenshots</div>
								<div class="content">
									<div class="image-list">
										${metaInfo.screenshots.map(
              (screenshot) => (
                /*html*/
                `
											<div class="img">
												<img src="${screenshot.screenshot}" alt="img">
											</div>
										`
              )
            ).join("")}
										
									</div>
								</div>
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
        width: PanelUISize.setting.width,
        height: "auto",
        style: (
          /*css*/
          `
                .pops-alert-content{
                    padding: 0 15px;
                }
                .wrapper{
                    border: 1px solid #2c3e50;
                    margin: 24px 0;
                    max-width: 100%;
                }
                .wrapper .title{
                    font-size: 18px;
                    font-weight: 700;
                    padding: 8px 24px;
                    border-bottom: 1px solid #2c3e50;
                }
                .wrapper .content{
                    padding: 24px;
                }
                .wrapper .image-list{
                    display: flex;
                    max-width: 100%;
                    overflow-x: auto;
                    overflow-y: hidden;
                    gap: 12px;
                }
                .wrapper .image-list .img{
                    flex-shrink: 0;
                    height: 120px;
                    width: 160px;
                }
                .wrapper .image-list img{
                    height: 100%;
                    width: 100%;
                    cursor: pointer;
                }
            `
        )
      });
    }
  };
  class NetDiskParse_ed2k extends ParseFileAbstract {
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "ed2k",
        ruleIndex,
        shareCode,
        accessCode
      });
      let $loading = Qmsg.loading("正在请求Api中...");
      let metaInfo = await MetaDataParser.parseFileMetaInfo(url);
      $loading.close();
      if (!metaInfo) {
        return;
      }
      MetaDataParser.showFileMetaInfoDialog(metaInfo);
    }
  }
  class NetDiskParse_Jianguoyun extends ParseFileAbstract {
    errorCode = {
      UnAuthorized: "请先登录坚果云账号"
    };
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      const that = this;
      let downloadParams = await that.getRequestDownloadParams();
      if (!downloadParams) {
        return;
      }
      if (downloadParams["isdir"]) {
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
        NetDiskUI.staticView.moreFile("坚果云文件解析", newFolderInfoList);
      } else {
        let fileSize = utils.formatByteToSize(downloadParams["size"]);
        let downloadUrl = await that.getFileLink(
          downloadParams.hash,
          downloadParams.name
        );
        if (!downloadUrl) {
          return;
        }
        if (NetDiskFilterScheme.isForwardDownloadLink("jianguoyun")) {
          downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
            "jianguoyun",
            downloadUrl
          );
        }
        log.info(downloadUrl);
        NetDiskUI.staticView.oneFile({
          title: "坚果云盘单文件直链",
          fileName: downloadParams["name"],
          fileSize,
          downloadUrl
        });
      }
    }
    /**
     * 解析多文件信息
     * @param folderInfo
     * @param hash 文件hash值
     * @param fileName 文件名
     */
    parseMoreFile(folderInfo, hash = "", fileName = "") {
      const that = this;
      log.info("解析多文件信息", folderInfo);
      let folderInfoList = [];
      folderInfo.forEach((item) => {
        let fileName2 = item.relPath;
        if (fileName2.startsWith("/")) {
          fileName2 = fileName2.replace(/^\//, "");
        }
        folderInfoList.push({
          fileName: fileName2,
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
              fileName2,
              item["relPath"]
            );
            if (!downloadUrl) {
              return;
            }
            Qmsg.success("获取成功！");
            if (NetDiskFilterScheme.isForwardDownloadLink("jianguoyun")) {
              downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
                "jianguoyun",
                downloadUrl
              );
            }
            log.info(downloadUrl);
            return {
              autoDownload: true,
              mode: "aBlank",
              url: downloadUrl
            };
          }
        });
      });
      return folderInfoList;
    }
    /**
     * 获取下载链接所需要的hash值和name
     */
    async getRequestDownloadParams() {
      const that = this;
      log.info("获取hash值");
      Qmsg.info("正在获取请求信息");
      let pageInfoRegexp = /var[\s]*PageInfo[\s]*=[\s]*{([\s\S]+)};/i;
      let formData = new FormData();
      formData.append("pd", that.accessCode);
      let requestDetails = {
        url: `https://www.jianguoyun.com/p/${that.shareCode}`,
        data: that.accessCode === "" ? void 0 : `pd=${that.accessCode}`,
        responseType: "html",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": utils.getRandomPCUA(),
          Referer: `https://www.jianguoyun.com/p/${that.shareCode}`
        }
      };
      let requestResp = void 0;
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
      let pageInfoMatch = respData.responseText.match(pageInfoRegexp);
      if (pageInfoMatch) {
        let pageInfo = pageInfoMatch[pageInfoMatch.length - 1];
        pageInfo = `({${pageInfo}})`;
        pageInfo = window.eval(pageInfo);
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
        if (fileNeedsPassword && (that.accessCode == void 0 || that.accessCode === "")) {
          Qmsg.error("密码不正确!");
          NetDiskUI.newAccessCodeView(
            "密码缺失",
            "jianguoyun",
            that.ruleIndex,
            that.shareCode,
            that.accessCode,
            (option) => {
              that.init({
                ruleIndex: that.ruleIndex,
                shareCode: that.shareCode,
                accessCode: option.accessCode
              });
            }
          );
          return;
        }
        if (fileErrorCode === "AuthenticationFailed") {
          Qmsg.error("密码错误");
          NetDiskUI.newAccessCodeView(
            void 0,
            "jianguoyun",
            that.ruleIndex,
            that.shareCode,
            that.accessCode,
            (option) => {
              that.init({
                ruleIndex: that.ruleIndex,
                shareCode: that.shareCode,
                accessCode: option.accessCode
              });
            }
          );
          return;
        }
        if (fileHash === "" || fileHash == void 0) {
          log.error("hash为空，可能文件被撤销分享了");
          Qmsg.error(`文件分享已被撤销`);
          return;
        }
        if (fileSize == void 0 && isdir == false) {
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
            isdir
          };
        }
      } else if (respData.responseText.match("对不起，找不到您指定的文件。")) {
        log.error("啊噢！ (404) 对不起，找不到您指定的文件。");
        Qmsg.error("坚果云: 对不起，找不到您指定的文件。");
      } else if (respData.responseText.match("对不起，您的某些输入不正确。")) {
        log.error("可能该链接不需要访问码或者访问码有问题");
        NetDiskUI.newAccessCodeView(
          void 0,
          "jianguoyun",
          that.ruleIndex,
          that.shareCode,
          that.accessCode,
          (option) => {
            that.init({
              ruleIndex: that.ruleIndex,
              shareCode: that.shareCode,
              accessCode: option.accessCode
            });
          }
        );
      } else {
        log.error("获取PageInfo失败");
        Qmsg.error("坚果云: 获取PageInfo失败");
      }
    }
    /**
     * 获取下载链接
     * @param fileHash 文件hash值
     * @param fileName 文件名
     */
    async getFileLink(fileHash = "", fileName = "") {
      const that = this;
      fileName = encodeURIComponent(fileName);
      let getResp = await httpx.get({
        url: `https://www.jianguoyun.com/d/ajax/fileops/pubFileLink?k=${fileHash}&name=${fileName}&wm=false${that.accessCode === "" ? "" : "&pd=" + that.accessCode}&forwin=1&_=${(/* @__PURE__ */ new Date()).getTime()}`,
        responseType: "json",
        headers: {
          "User-Agent": utils.getRandomPCUA()
        },
        allowInterceptConfig: false
      });
      if (!getResp.status) {
        if (utils.isNotNull(getResp.data?.responseText)) {
          let errorData = utils.toJSON(getResp.data.responseText);
          log.error("坚果云", errorData);
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
      log.info("请求信息", respData);
      let resultJSON = utils.toJSON(respData.responseText);
      log.info("解析JSON", resultJSON);
      if (resultJSON.hasOwnProperty("errorCode")) {
        Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
        return;
      } else if (resultJSON.hasOwnProperty("url")) {
        return resultJSON["url"];
      } else {
        Qmsg.error("坚果云: 处理下载链接异常");
      }
    }
    /**
     * 获取文件夹下的文件下载链接
     * @param fileHash
     * @param fileName
     * @param filePath
     */
    async getDirLink(fileHash = "", fileName = "", filePath = "/") {
      const that = this;
      fileName = encodeURIComponent(fileName);
      let getResp = await httpx.get({
        url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRLink?k=${fileHash}&dn=${fileName}&p=${filePath}&forwin=1&_=${(/* @__PURE__ */ new Date()).getTime()}`,
        responseType: "json",
        headers: {
          "User-Agent": utils.getRandomPCUA()
        },
        allowInterceptConfig: false
      });
      if (!getResp.status) {
        if (utils.isNotNull(getResp.data?.responseText)) {
          let errorData = utils.toJSON(getResp.data.responseText);
          log.error("坚果云", errorData);
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
      log.info("请求信息", respData);
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
    }
    /**
     * 获取文件夹信息
     * @param hash
     */
    async getFolderInfo(hash = "") {
      let getResp = await httpx.get({
        url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRBrowse?hash=${hash}&relPath=%2F&_=${Date.now()}`,
        responseType: "json",
        headers: {
          "User-Agent": utils.getRandomPCUA()
        }
      });
      if (!getResp.status) {
        return;
      }
      let respData = getResp.data;
      log.info("请求信息", respData);
      let resultJSON = utils.toJSON(respData.responseText);
      log.info(resultJSON);
      if ("objects" in resultJSON) {
        return resultJSON["objects"];
      } else {
        Qmsg.error("坚果云: 处理多文件信息异常");
      }
    }
    /**
     * 前往登录
     */
    gotoLogin() {
      NetDiskPops.confirm(
        {
          title: {
            text: "提示",
            position: "center"
          },
          content: {
            text: `解析失败，原因：当前尚未登录坚果云，是否前往登录？`
          },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "前往",
              callback: function(_event_) {
                window.open(
                  "https://www.jianguoyun.com/d/login#from=https%3A%2F%2Fwww.jianguoyun.com%2F",
                  "_blank"
                );
              }
            }
          }
        },
        NetDiskUI.popsStyle.jianGuoYunLoginTip
      );
    }
  }
  const NetDiskParse_Lanzou_Config = {
    /** 蓝奏云默认域名 */
    DEFAULT_HOST_NAME: "www.lanzout.com",
    /** 菜单配置项的键名 */
    MENU_KEY: "lanzou-host-name",
    get hostname() {
      let generateData = GeneratePanelStorage(this.MENU_KEY, this.DEFAULT_HOST_NAME);
      return generateData.value;
    }
  };
  let deleteAnnotationCode = (text) => {
    text = text.replace(/\/\/.+/gi, "");
    text = text.replace(/\/\*[\s\S\n]+\*\//gi, "");
    return text;
  };
  class NetDiskParse_Lanzou extends ParseFileAbstract {
    /**
     * 路由
     */
    router = {
      /**
       * 根路径
       * + /
       * @param pathName
       */
      root(pathName = "") {
        if (pathName.startsWith("/")) {
          pathName = pathName.replace(/^\//, "");
        }
        return `https://${NetDiskParse_Lanzou_Config.hostname}/${pathName}`;
      },
      /**
       * + /tp/
       * @param pathName
       */
      root_tp(pathName = "") {
        if (pathName.startsWith("/")) {
          pathName = pathName.replace(/^\//, "");
        }
        return `https://${NetDiskParse_Lanzou_Config.hostname}/tp/${pathName}`;
      },
      /**
       * + /s/
       * @param pathName
       */
      root_s(pathName = "") {
        if (pathName.startsWith("/")) {
          pathName = pathName.replace(/^\//, "");
        }
        return `https://${NetDiskParse_Lanzou_Config.hostname}/s/${pathName}`;
      }
    };
    regexp = {
      unicode: {
        /**
         * 判断该链接是否是中文
         */
        match: /[%\u4e00-\u9fa5]+/g,
        tip: "中文链接",
        isUnicode: false
      },
      /**
       * 蓝奏文件取消分享
       */
      noFile: {
        match: /div>来晚啦...文件取消分享了<\/div>/g,
        tip: "来晚啦...文件取消分享了"
      },
      /**
       * 蓝奏文件链接错误
       */
      noExists: {
        match: /div>文件不存在，或已删除<\/div>/g,
        tip: "文件不存在，或已删除"
      },
      /**
       * 链接失效
       */
      linkInValid: {
        match: /div>文件链接失效，请获取新链接<\/div>/g,
        tip: "文件链接失效，请获取新链接"
      },
      /**
       * 2023-9-19 蓝奏云修改分享规则，需要vip用户才可以分享 apk、ipa 链接
       */
      needVipToShare: {
        match: /class="fbox">非会员.+请先开通会员/gi,
        tip: "该链接为非会员用户分享的文件，目前无法下载"
      },
      /**
       * 蓝奏多文件
       */
      moreFile: {
        match: /<span id=\"filemore\" onclick=\"more\(\);\">/g
      },
      /**
       * 蓝奏设置了密码的单文件请求需要的sign值
       */
      sign: {
        match: /var[\s]*(posign|postsign|vidksek|skdklds)[\s]*=[\s]*'(.+?)';/
      },
      /**
       * 蓝奏文件名
       */
      fileName: {
        match: /<title>(.*)<\/title>/
      },
      /**
       * 蓝奏文件大小
       */
      fileSize: {
        match: /<span class=\"mtt\">\((.*)\)<\/span>/
      },
      /**
       * 蓝奏文件直链host
       */
      loadDownHost: {
        match: /var[\s]*(vkjxld)[\s]*=[\s]*'(.+?)'/i
      },
      /**
       * 蓝奏文件直链
       */
      loadDown: {
        match: /var[\s]*(loaddown|oreferr|spototo|domianload|hyggid)[\s]*=[\s]*'(.+?)'/i
      },
      /**
       * 蓝奏云之苹果使用类型的文件
       */
      appleDown: {
        match: /var[\s]*appitem[\s]*=[\s]*'(.+?)'/i
      },
      /**
       * 蓝奏云文件上传时间
       */
      uploadTime: {
        match: /mt2\"\>时间:<\/span>(.+?)[\s]*<span/i
      }
    };
    /**
     * 入口
     */
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      this.regexp.unicode.isUnicode = Boolean(
        shareCode.match(this.regexp.unicode.match)
      );
      let url = ruleIndex === 1 ? this.router.root_s(shareCode) : this.router.root(shareCode);
      let pageInfoResponse = await this.getPageInfo(url);
      if (!pageInfoResponse) {
        return;
      }
      if (this.isMoreFile(pageInfoResponse)) {
        log.info(`多文件`);
        let $loading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let fileInfo = await this.parseFiles(shareCode, accessCode);
        if (!fileInfo) {
          $loading.close();
          return;
        }
        let folderInfoList = this.getFolderInfo(
          this.transformFileInfoToInfoList(shareCode, accessCode, fileInfo),
          0
        );
        $loading.close();
        log.info("递归完毕");
        NetDiskUI.staticView.moreFile("蓝奏云文件解析", folderInfoList);
      } else {
        log.info(`单文件`);
        let fileDownloadInfo = await this.getFileDownloadInfo(
          shareCode,
          accessCode,
          pageInfoResponse
        );
        if (fileDownloadInfo) {
          NetDiskUI.staticView.oneFile({
            title: "蓝奏云单文件直链",
            fileName: fileDownloadInfo.fileName,
            fileSize: fileDownloadInfo.fileSize,
            downloadUrl: fileDownloadInfo.downloadUrl,
            fileUploadTime: fileDownloadInfo.fileUploadTime
          });
        }
      }
    }
    /**
     * 参数转换
     */
    transformFileInfoToInfoList(shareCode, accessCode, fileInfo) {
      return [
        ...fileInfo.folders.map((folder) => {
          return {
            isFolder: true,
            fileName: folder.folderName,
            fileSize: 0,
            createTime: "",
            latestTime: "",
            shareCode: folder.shareCode,
            accessCode: folder.accessCode
          };
        }),
        ...(fileInfo.infos || []).map((info) => {
          return {
            isFolder: false,
            fileName: info.name_all,
            // @ts-ignore
            fileSize: info.size,
            createTime: info.time,
            latestTime: info.time,
            shareCode: info.id,
            accessCode
          };
        })
      ].filter((it) => it != null);
    }
    /**
     * 获取文件夹信息
     * @param infoList
     */
    getFolderInfo(infoList, index) {
      const that = this;
      let folderInfoList = [];
      let tempFolderInfoList = [];
      let tempFolderFileInfoList = [];
      infoList.forEach((item) => {
        if (item.isFolder) {
          tempFolderInfoList.push({
            fileName: item.fileName,
            fileSize: 0,
            fileType: "",
            // @ts-ignore
            createTime: item.createTime,
            // @ts-ignore
            latestTime: item.latestTime,
            isFolder: true,
            index,
            clickEvent: async () => {
              let fileInfo = await this.parseFiles(
                item.shareCode,
                item.accessCode
              );
              if (fileInfo) {
                return that.getFolderInfo(
                  this.transformFileInfoToInfoList(
                    this.shareCode,
                    this.accessCode,
                    fileInfo
                  ),
                  index + 1
                );
              }
              return [];
            }
          });
        } else {
          tempFolderFileInfoList.push({
            fileName: item.fileName,
            fileSize: item.fileSize,
            fileType: "",
            // @ts-ignore
            createTime: item.createTime,
            // @ts-ignore
            latestTime: item.latestTime,
            isFolder: false,
            index,
            clickEvent: async () => {
              let url = this.ruleIndex === 1 ? this.router.root_s(item.shareCode) : this.router.root(item.shareCode);
              let responseData = await this.getPageInfo(url);
              if (!responseData) {
                return;
              }
              let fileDownloadInfo = await this.getFileDownloadInfo(
                item.shareCode,
                item.accessCode,
                responseData
              );
              if (!fileDownloadInfo) {
                return;
              }
              return {
                url: fileDownloadInfo.downloadUrl,
                autoDownload: true,
                mode: "aBlank"
              };
            }
          });
        }
      });
      tempFolderInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      tempFolderFileInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      return folderInfoList;
    }
    /**
     * 获取文件下载信息
     */
    async getFileDownloadInfo(shareCode, accessCode, responseData) {
      let fileDownloadInfo = void 0;
      let $pageDoc = domUtils.parseHTML(responseData.responseText, true, true);
      let pageText = deleteAnnotationCode(responseData.responseText);
      let $pageIframe = $pageDoc.querySelector('iframe[class^="ifr"]') || $pageDoc.querySelector('iframe[class^="n_downlink"]');
      if ($pageIframe) {
        let iframeUrl = $pageIframe.getAttribute("src");
        log.error("该链接需要重新通过iframe地址访问获取信息", iframeUrl);
        Qmsg.info("正在请求下载信息");
        let fileName = $pageDoc.querySelector("body div.d > div")?.innerText || $pageDoc.querySelector("#filenajax")?.innerText || $pageDoc.querySelector("title")?.textContent?.replace(/ - 蓝奏云$/i, "");
        let fileSize = pageText.match(/文件大小：<\/span>(.+?)<br>/i) || $pageDoc.querySelector(
          "div.n_box div.n_file div.n_filesize"
        )?.innerText || $pageDoc.querySelector(
          ".d2 table tr td .fileinfo:nth-child(1) .fileinforight"
        )?.innerText;
        let fileUploadTime = pageText.match(/上传时间：<\/span>(.+?)<br>/i) || $pageDoc.querySelector(
          "#file[class=''] .n_file_info span.n_file_infos"
        )?.innerText || $pageDoc.querySelector(
          ".d2 table tr td .fileinfo:nth-child(3) .fileinforight"
        )?.innerText || $pageDoc.querySelector(
          "#file[class='filter'] .n_file_info span.n_file_infos"
        )?.innerText;
        if (fileSize) {
          if (Array.isArray(fileSize)) {
            fileSize = fileSize[fileSize.length - 1];
          }
          if (typeof fileSize === "string") {
            fileSize = fileSize.replaceAll("大小：", "");
          }
        } else {
          log.error("解析文件大小信息失败");
        }
        if (fileUploadTime) {
          if (Array.isArray(fileUploadTime)) {
            fileUploadTime = fileUploadTime[fileUploadTime.length - 1];
          }
          if (fileUploadTime.toString().toLowerCase().startsWith("android")) {
            log.error("解析出的文件上传时间信息是Android/xxxx开头");
            fileUploadTime = void 0;
          }
        } else {
          log.error("解析文件上传时间信息失败");
        }
        let downloadUrl = await this.getLinkByIframe(
          shareCode,
          accessCode,
          iframeUrl,
          {
            fileName,
            fileSize,
            // @ts-ignore
            fileUploadTime
          }
        );
        if (!downloadUrl) {
          return;
        }
        fileDownloadInfo = {
          fileName,
          fileSize,
          downloadUrl,
          fileUploadTime
        };
      } else {
        log.warn("该页面不是使用iframe获取链接，使用其它方式解析");
        let sign = pageText.match(/'sign':'(.+?)',/i) || pageText.match(this.regexp.sign.match);
        let postData_p = "";
        let postData_sign = "";
        let fileNameMatch = pageText.match(this.regexp.fileName.match);
        let fileName = fileNameMatch ? fileNameMatch[fileNameMatch.length - 1].trim() : "";
        let fileSizeMatch = pageText.match(this.regexp.fileSize.match) || pageText.match(/<div class="n_filesize">大小：(.+?)<\/div>/i);
        let fileSize = fileSizeMatch ? fileSizeMatch[fileSizeMatch.length - 1].trim() : "";
        let fileUploadTimeMatch = pageText.match(this.regexp.uploadTime.match) || pageText.match(/<span class="n_file_infos">(.+?)<\/span>/i);
        let fileUploadTime = fileUploadTimeMatch ? fileUploadTimeMatch[fileUploadTimeMatch.length - 1].trim() : "";
        let fileIdMatch = pageText.match(/[\s]+url[\s]+:[\s]+'\/ajaxm.php\?file=([0-9]+)',/i) || pageText.match(/\/\/url[\s]+:[\s]+'\/ajaxm.php\?file=([0-9]+)',/i);
        let fileId = fileIdMatch ? fileIdMatch[fileIdMatch.length - 1] : "1";
        if (sign) {
          postData_sign = sign[sign.length - 1];
          log.info(`获取Sign: ${postData_sign}`);
          if (utils.isNotNull(accessCode)) {
            log.info("传入参数=>有密码");
            postData_p = accessCode;
          } else {
            log.info("传入参数=>无密码");
          }
          let kd = await this.getKNDS();
          let ajaxmResponse = await httpx.post({
            url: this.router.root("ajaxm.php?file=" + fileId),
            responseType: "json",
            headers: {
              accept: "application/json, text/javascript, */*",
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": utils.getRandomAndroidUA(),
              Origin: "https://" + NetDiskParse_Lanzou_Config.hostname,
              Referer: this.router.root(shareCode)
            },
            data: `action=downprocess&sign=${postData_sign}&p=${postData_p}&kd=${kd}`
          });
          if (!ajaxmResponse.status) {
            return;
          }
          let ajaxmResponseData = ajaxmResponse.data;
          log.info(ajaxmResponseData);
          let json_data = utils.toJSON(ajaxmResponseData.responseText);
          let downloadUrl = `${json_data["dom"]}/file/${json_data["url"]}`;
          if (typeof json_data["url"] === "string" && (json_data["url"].startsWith("http") || json_data["url"].startsWith(json_data["dom"]))) {
            downloadUrl = json_data["url"];
          }
          json_data["zt"];
          if ("密码不正确".indexOf(json_data["inf"]) != -1) {
            Qmsg.error("密码不正确!");
            let newAccessCodeInfo = await new Promise((resolve) => {
              NetDiskUI.newAccessCodeView(
                void 0,
                "lanzou",
                this.ruleIndex,
                shareCode,
                accessCode,
                (option) => {
                  resolve({
                    accessCode: option.accessCode
                  });
                },
                () => {
                  resolve(void 0);
                }
              );
            });
            if (!newAccessCodeInfo) {
              return;
            }
            accessCode = newAccessCodeInfo.accessCode;
            let url = this.ruleIndex === 1 ? this.router.root_s(shareCode) : this.router.root(shareCode);
            let newResponseData = await this.getPageInfo(url);
            if (!newResponseData) {
              return;
            }
            return await this.getFileDownloadInfo(
              shareCode,
              accessCode,
              newResponseData
            );
          } else {
            fileName = json_data["inf"] ? json_data["inf"] : fileName;
          }
          fileDownloadInfo = {
            fileName,
            fileSize,
            fileUploadTime,
            downloadUrl
          };
        } else {
          let loadDownHost = pageText.match(this.regexp.loadDownHost.match);
          let loadDown = pageText.match(this.regexp.loadDown.match);
          let appleDownMatch = pageText.match(this.regexp.appleDown.match);
          let appleDown = appleDownMatch[appleDownMatch.length - 1];
          if (utils.isNull(loadDown)) {
            loadDown = pageText.match(/var[\s]*(cppat)[\s]*=[\s]*'(.+?)'/i);
          }
          if (utils.isNull(loadDownHost) && appleDown) {
            appleDown = appleDown[appleDown.length - 1];
            loadDownHost = [appleDown];
            loadDown = [""];
            log.success("多文件-当前链接猜测为苹果的文件", appleDown);
          }
          if (utils.isNull(loadDownHost)) {
            Qmsg.error("蓝奏云直链：获取sign的域名失败，请反馈开发者", {
              timeout: 3500
            });
            return;
          }
          if (utils.isNull(loadDown)) {
            Qmsg.error("蓝奏云直链：获取sign失败，请反馈开发者", {
              timeout: 3500
            });
            return;
          }
          let downloadUrl = `${loadDownHost[loadDownHost.length - 1]}${loadDown[loadDown.length - 1]}`;
          fileDownloadInfo = {
            fileName,
            fileSize,
            fileUploadTime,
            downloadUrl
          };
        }
      }
      if (fileDownloadInfo && NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
        fileDownloadInfo.downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
          "lanzou",
          fileDownloadInfo.downloadUrl
        );
      }
      return fileDownloadInfo;
    }
    /**
     * 获取链接页面的信息
     */
    async getPageInfo(url) {
      let response = await httpx.get({
        url,
        headers: {
          Accept: "*/*",
          "User-Agent": utils.getRandomPCUA(),
          Referer: url
        },
        allowInterceptConfig: false
      });
      if (!response.status) {
        log.error(response);
        if (response.type === "ontimeout") {
          Qmsg.error("请求超时");
          return;
        }
        if (utils.isNull(response.data.responseText)) {
          Qmsg.error("请求异常");
          return;
        }
        if (this.checkPageCode(response.data)) {
          Qmsg.error("请求失败，未知情况");
        }
        return;
      }
      let responseText = response.data.responseText;
      if (utils.isNull(responseText)) {
        log.error(response);
        Qmsg.error("获取网页内容为空");
        return;
      }
      if (!this.checkPageCode(response.data)) {
        log.error(response);
        return;
      }
      return response.data;
    }
    /**
     * 页面检查，看看是否存在文件失效情况
     * @param responseData
     * + true 未失效
     * + false 已失效
     */
    checkPageCode(responseData) {
      let pageText = responseData.responseText;
      if (pageText.match(this.regexp.noFile.match)) {
        Qmsg.error(this.regexp.noFile.tip);
        return false;
      }
      if (pageText.match(this.regexp.noExists.match)) {
        Qmsg.error(this.regexp.noExists.tip);
        return false;
      }
      if (pageText.match(this.regexp.needVipToShare.match)) {
        Qmsg.error(this.regexp.needVipToShare.tip);
        return false;
      }
      if (pageText.match(this.regexp.linkInValid.match)) {
        Qmsg.error(this.regexp.linkInValid.tip);
        return false;
      }
      return true;
    }
    /**
     * 判断是否是多文件
     * @param responseData
     * @returns
     * + true 多文件
     * + false 单文件
     */
    isMoreFile(responseData) {
      let pageText = responseData.responseText;
      if (pageText.match(this.regexp.moreFile.match)) {
        log.info("该链接为多文件");
        return true;
      } else {
        log.info("该链接为单文件");
        return false;
      }
    }
    /**
     * 解析组合链接（多个链接组成的链接）
     * @param response
     */
    async parseFiles(shareCode, accessCode) {
      let url = this.ruleIndex === 1 ? this.router.root_s(shareCode) : this.router.root(shareCode);
      let pageInfoResponse = await this.getPageInfo(url);
      if (!pageInfoResponse) {
        return;
      }
      let pageText = pageInfoResponse.responseText;
      let pageDoc = domUtils.parseHTML(pageText, true, true);
      let folders = Array.from(
        pageDoc.querySelectorAll("#folder a.mlink[href]")
      ).map(($link) => {
        let url2 = $link.href;
        let urlInst = new URL(url2);
        let shareCodeMatch = urlInst.pathname.match(/^\/([0-9a-zA-Z]{5,})/);
        if (shareCodeMatch == null) {
          return;
        }
        let __shareCode__ = shareCodeMatch[shareCodeMatch.length - 1];
        let $filename = $link.querySelector(".filename");
        let filename = $filename?.firstChild?.textContent || "";
        return {
          url: url2,
          shareCode: __shareCode__,
          accessCode,
          folderName: filename
        };
      }).filter((it) => it != null);
      let infos;
      let fid = pageText.match(/\'fid\':(.+?),/)[1].replaceAll("'", "");
      let uid = pageText.match(/\'uid\':(.+?),/)[1].replaceAll("'", "");
      let pgs = 1;
      let t_name = pageText.match(/\'t\':(.+?),/)[1];
      let t_rexp = new RegExp(t_name + `[\\s]*=[\\s]*('|")(.+?)('|");`);
      let t = pageText.match(t_rexp)[2];
      let k_name = pageText.match(/\'k\':(.+?),/)[1];
      let k_rexp = new RegExp(k_name + `[\\s]*=[\\s]*('|")(.+?)('|");`);
      let k = pageText.match(k_rexp)[2];
      let lx = shareCode.match(this.regexp.unicode.match) ? 1 : 2;
      let json_data = await this.fileMoreAjax(shareCode, accessCode, {
        lx,
        fid,
        uid,
        pg: pgs,
        t,
        k,
        pwd: accessCode
      });
      let error = void 0;
      if (json_data) {
        log.info(`json_data：`, json_data);
        const { zt, info, text } = json_data;
        if (zt !== 1) {
          if (zt === 4) {
            error = text;
          } else if (info?.includes("密码不正确")) {
            Qmsg.error("密码不正确!");
            let newAccessCodeInfo = await new Promise((resolve) => {
              NetDiskUI.newAccessCodeView(
                void 0,
                "lanzou",
                this.ruleIndex,
                shareCode,
                accessCode,
                (option) => {
                  resolve({
                    accssCode: option.accessCode
                  });
                },
                () => {
                  resolve(void 0);
                }
              );
            });
            if (!newAccessCodeInfo) {
              return;
            }
            return await this.parseFiles(shareCode, newAccessCodeInfo.accssCode);
          } else if (info?.includes("没有了")) {
            error = "没有文件了";
          } else {
            error = "未知错误";
          }
        }
        if (Array.isArray(text)) {
          infos = text;
        }
      }
      if (typeof error === "string") {
        log.error(error);
      }
      let result = {
        folders,
        infos
      };
      log.info(result);
      return result;
    }
    /**
     * 通过iframe的链接来获取单文件直链
     * @param urlPathName url路径
     * @param fileInfo 文件信息
     */
    async getLinkByIframe(shareCode, accessCode, urlPathName, fileInfo) {
      log.info(urlPathName, fileInfo);
      let iFrameUrl = this.router.root(urlPathName);
      let response = await httpx.get({
        url: iFrameUrl,
        headers: {
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "User-Agent": utils.getRandomPCUA(),
          Referer: this.router.root(shareCode)
        }
      });
      if (!response.status) {
        return;
      }
      let responseInstance = response.data;
      log.info(responseInstance);
      let pageText = responseInstance.responseText;
      let websignkeyMatch = pageText.match(/'websignkey'[\s]*:[\s]*'(.+?)'/i) || pageText.match(/var[\s]*aihidcms[\s]*=[\s]*'(.*)';/i);
      let websignMatch = pageText.match(/var[\s]*ciucjdsdc[\s]*=[\s]*'(.*)';/i);
      let signsMatch = pageText.match(/var[\s]*ajaxdata[\s]*=[\s]*'(.+)';/i);
      let signMatch = pageText.match(/'sign':[\s]*'(.+)',/i) || pageText.match(/var[\s]*wp_sign[\s]*=[\s]*'(.*)';/i);
      let ajaxUrlMatch = pageText.match(/[^\/\/]url[\s]*:[\s]*'(.+?)'[\s]*,/i) || pageText.match(/url[\s]*:[\s]*'(.+?)'[\s]*,/);
      let ajaxUrl = "ajaxm.php";
      let websignkey = "";
      let websign = "";
      let signs = "";
      let sign = "";
      let kdns = await this.getKNDS();
      if (ajaxUrlMatch) {
        ajaxUrl = ajaxUrlMatch[ajaxUrlMatch.length - 1];
      } else {
        Qmsg.error("提取ajaxm.php的具体参数失败，使用默认的" + ajaxUrl);
      }
      if (websignkeyMatch) {
        websignkey = websignkeyMatch[websignkeyMatch.length - 1];
      } else {
        Qmsg.error("ajaxm.php请求参数 websignkey 获取失败");
        return;
      }
      if (websignMatch) {
        websign = websignMatch[websignMatch.length - 1];
      } else {
        Qmsg.error("ajaxm.php请求参数 websign 获取失败");
        return;
      }
      if (signsMatch) {
        signs = signsMatch[signsMatch.length - 1];
      } else {
        Qmsg.error("ajaxm.php请求参数 signs 获取失败");
        return;
      }
      if (signMatch) {
        sign = signMatch[signMatch.length - 1];
      } else {
        Qmsg.error("ajaxm.php请求参数 sign 获取失败");
        return;
      }
      let postData = {
        action: "downprocess",
        signs,
        sign,
        websign,
        websignkey,
        kd: kdns,
        ves: 1
      };
      log.success("请求的路径参数：" + ajaxUrl);
      log.success(["ajaxm.php的请求参数-> ", postData]);
      let postResp = await httpx.post(this.router.root(ajaxUrl), {
        data: utils.toSearchParamsStr(postData),
        headers: {
          Accept: "application/json, text/javascript, */*",
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: this.router.root(shareCode),
          "User-Agent": utils.getRandomPCUA()
        }
      });
      if (!postResp.status) {
        return;
      }
      let postRespData = postResp.data;
      log.info(postRespData);
      let jsonData = utils.toJSON(postRespData.responseText);
      let downloadUrl = `${jsonData["dom"]}/file/${jsonData["url"]}`;
      jsonData["zt"];
      await httpx.get("https://down-load.lanrar.com/file/kdns.js", {
        allowInterceptConfig: false
      });
      let killdns2 = await httpx.get("https://boce.lanosso.com/file/kdns2.js", {
        allowInterceptConfig: false
      });
      if (!killdns2.status) {
        downloadUrl += "&lanosso";
        log.info(`测试killdns2失败使用参数 lanosso`);
      } else {
        log.info("测试killdns2成功，不改变原downloadUrl");
      }
      log.success("直链", downloadUrl);
      if ("密码不正确".indexOf(jsonData["inf"]) != -1) {
        Qmsg.error("密码不正确!");
        NetDiskUI.newAccessCodeView(
          void 0,
          "lanzou",
          this.ruleIndex,
          shareCode,
          accessCode,
          (option) => {
            this.init({
              ruleIndex: this.ruleIndex,
              shareCode,
              accessCode: option.accessCode
            });
          }
        );
      } else {
        fileInfo.fileName = utils.isNotNull(jsonData["inf"]) ? jsonData["inf"] : fileInfo.fileName;
        log.info(downloadUrl);
        return downloadUrl;
      }
    }
    /**
     * 获取kdns的参数
     */
    async getKNDS() {
      let response = await httpx.get(
        "https://down-load.lanrar.com/file/kdns.js",
        {
          allowInterceptConfig: false
        }
      );
      if (response.status && utils.isNotNull(response.data.responseText)) {
        return 1;
      } else {
        return 0;
      }
    }
    /**
     * 请求filemoreajax.php获取多文件信息
     */
    async fileMoreAjax(shareCode, accessCode, config) {
      let postData = utils.toFormData({
        rep: 0,
        up: 1,
        ls: 1,
        ...config
      });
      let url = this.router.root("filemoreajax.php");
      let fileMoreAjaxResponse = await httpx.post({
        url: this.router.root("filemoreajax.php"),
        responseType: "json",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "User-Agent": utils.getRandomAndroidUA(),
          Referer: url
        },
        data: postData
      });
      if (!fileMoreAjaxResponse.status) {
        return;
      }
      let fileMoreAjaxResponseData = fileMoreAjaxResponse.data;
      log.info(fileMoreAjaxResponseData);
      let json_data = utils.toJSON(
        fileMoreAjaxResponseData.responseText
      );
      return json_data;
    }
  }
  const LanZouUtils = {
    LanZouDiskApp: "lanZouY-disk-app",
    EncryptList: [
      "Y",
      "y",
      "0",
      "Z",
      "z",
      "N",
      "n",
      "M",
      "I",
      "6",
      "m",
      "W",
      "w",
      "1",
      "X",
      "x",
      "L",
      "l",
      "K",
      "7",
      "k",
      "i",
      "U",
      "u",
      "2",
      "V",
      "v",
      "J",
      "j",
      "8",
      "G",
      "g",
      "F",
      "S",
      "s",
      "3",
      "T",
      "t",
      "H",
      "h",
      "f",
      "E",
      "e",
      "D",
      "Q",
      "q",
      "4",
      "R",
      "r",
      "9",
      "d",
      "a",
      "C",
      "c",
      "B",
      "O",
      "o",
      "5",
      "P",
      "p",
      "b",
      "A"
    ],
    decodeChar(e) {
      for (let t = 0; t < this.EncryptList.length; t++)
        if (e == this.EncryptList[t]) return t;
      return -1;
    },
    /**
     * shareCode转id
     * @param {string} shareCode
     */
    idEncrypt(shareCode) {
      let t = 1, n = 0;
      if ("" != shareCode && shareCode.length > 4) {
        let r;
        shareCode = shareCode.substring(3, shareCode.length - 1);
        for (let index = 0; index < shareCode.length; index++)
          r = shareCode.charAt(shareCode.length - index - 1), n += this.decodeChar(r) * t, t *= 62;
      }
      return n;
    },
    encrypt(e) {
      const t = Cryptojs.enc.Utf8.parse(this.LanZouDiskApp), n = Cryptojs.enc.Utf8.parse(e), r = Cryptojs.AES.encrypt(n, t, {
        // @ts-ignore
        mode: Cryptojs.mode.ECB,
        // @ts-ignore
        padding: Cryptojs.pad.Pkcs7
      });
      return r;
    },
    /**
     * 用于时间戳转加密字符串
     * @param {any} e
     * @returns
     */
    encryptHex(e) {
      const t = this.encrypt(e, this.LanZouDiskApp);
      return t.ciphertext.toString().toUpperCase();
    }
  };
  class NetDiskParse_Lanzouyx extends ParseFileAbstract {
    $data = {
      devType: 6,
      devModel: "Chrome",
      extra: 2,
      type: 0,
      offset: 1,
      limit: 60
    };
    /**
     * 获取的uuid
     */
    uuid = void 0;
    /**
     * 获取的userId
     **/
    userId = void 0;
    /**
     * 加密后的shareCode
     */
    shareCodeId = void 0;
    /**
     * 入口
     */
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      const that = this;
      that.shareCodeId = that.getDecodeShareCodeId(shareCode);
      that.uuid = that.getEncodeUUID();
      let linkInfo = await this.recommendList(
        that.$data.devType,
        that.$data.devModel,
        that.uuid,
        that.$data.extra,
        that.getEncodeTimeStamp(),
        that.shareCode,
        that.$data.type,
        that.$data.offset,
        that.$data.limit
      );
      if (!linkInfo) {
        return;
      }
      if (!linkInfo["list"].length) {
        return;
      }
      if (linkInfo["list"][0]?.["map"]?.["userId"]) {
        that.userId = linkInfo["list"][0]?.["map"]?.["userId"];
      } else {
        Qmsg.error("解析获取【userId】为空");
        return;
      }
      if (linkInfo["list"][0]["folderIds"] == null) {
        log.success("该链接是 单文件");
        let fileInfo = linkInfo["list"][0]["fileList"][0];
        let folderInfoList = that.parseFolderInfo(
          linkInfo["list"][0]["fileList"],
          0
        );
        let downloadInfo = await folderInfoList[0]["clickEvent"]();
        if (downloadInfo && !Array.isArray(downloadInfo)) {
          let downloadUrl = downloadInfo["url"];
          if (NetDiskFilterScheme.isForwardDownloadLink("lanzouyx")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
              "lanzouyx",
              downloadUrl
            );
          }
          NetDiskUI.staticView.oneFile({
            title: "蓝奏云优享单文件直链",
            fileName: fileInfo["fileName"],
            fileSize: fileInfo["fileSize"] * 1024,
            downloadUrl,
            fileUploadTime: utils.formatToTimeStamp(fileInfo["updTime"]),
            fileLatestTime: utils.formatToTimeStamp(fileInfo["updTime"])
          });
        }
      } else {
        log.success("该链接是 多文件");
        Qmsg.info("正在递归文件");
        let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let folderInfoList = that.parseFolderInfo(
          linkInfo["list"][0]["fileList"],
          0
        );
        QmsgLoading.close();
        log.info("递归完毕");
        NetDiskUI.staticView.moreFile("蓝奏云优享解析", folderInfoList);
      }
    }
    /**
     * 获取直链弹窗的文件夹信息
     * @param infoList
     * @param index
     */
    parseFolderInfo(infoList, index) {
      const that = this;
      let folderInfoList = [];
      let tempFolderInfoList = [];
      let tempFolderFileInfoList = [];
      infoList.forEach((item) => {
        if (item["fileType"] === 2) {
          tempFolderInfoList.push({
            fileName: item["folderName"],
            fileSize: 0,
            fileType: "",
            createTime: new Date(item["updTime"]).getTime(),
            latestTime: new Date(item["updTime"]).getTime(),
            isFolder: true,
            index,
            async clickEvent(event, config) {
              let timestamp = that.getEncodeTimeStamp();
              let folderId = item["folderId"];
              let folderInfo = await that.getFolderInfo(
                that.$data.devType,
                that.$data.devModel,
                that.uuid,
                that.$data.extra,
                timestamp,
                that.shareCode,
                folderId,
                that.$data.offset,
                that.$data.limit
              );
              if (folderInfo && folderInfo["list"]) {
                return that.parseFolderInfo(folderInfo["list"], index + 1);
              } else {
                return [];
              }
            }
          });
        } else {
          tempFolderFileInfoList.push({
            fileName: item["fileName"],
            fileSize: item["fileSize"] * 1024,
            fileType: "",
            createTime: new Date(item["updTime"]).getTime(),
            latestTime: new Date(item["updTime"]).getTime(),
            isFolder: false,
            index,
            async clickEvent() {
              let fileId = item["fileId"];
              let userId = item["userId"] || that.userId;
              let uuid = that.uuid;
              if (utils.isNull(userId)) {
                Qmsg.error("获取【userId】为空");
                return;
              }
              if (utils.isNull(uuid)) {
                Qmsg.error("获取【uuid】为空");
                return;
              }
              let downloadUrl = await that.getDownloadFileUrl(
                ...that.getDownloadFileParams(fileId, userId, uuid)
              );
              if (downloadUrl) {
                if (NetDiskFilterScheme.isForwardDownloadLink("lanzouyx")) {
                  downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
                    "lanzouyx",
                    downloadUrl
                  );
                }
                return {
                  url: downloadUrl,
                  autoDownload: true,
                  mode: "aBlank"
                };
              }
            }
          });
        }
      });
      tempFolderInfoList.sort(
        (leftData, rightData) => leftData["fileName"].localeCompare(rightData["fileName"])
      );
      tempFolderFileInfoList.sort(
        (leftData, rightData) => leftData["fileName"].localeCompare(rightData["fileName"])
      );
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      return folderInfoList;
    }
    /**
     * 获取列表信息
     * @param devType
     * @param devModel
     * @param uuid
     * @param extra
     * @param timestamp
     * @param shareId
     * @param type
     * @param offset
     * @param limit
     */
    async recommendList(devType = this.$data.devType, devModel = this.$data.devModel, uuid = "", extra = this.$data.extra, timestamp = "", shareId = "", type = this.$data.type, offset = this.$data.offset, limit = this.$data.limit) {
      let response = await httpx.post(
        `https://api.ilanzou.com/unproved/recommend/list?${utils.toSearchParamsStr(
        {
          devType,
          devModel,
          uuid,
          extra,
          timestamp,
          shareId,
          code: this.accessCode,
          type,
          offset,
          limit
        }
      )}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.ilanzou.com",
            Referer: "https://www.ilanzou.com/",
            "Sec-Fetch-Site": "same-site",
            Host: "api.ilanzou.com",
            "User-Agent": utils.getRandomPCUA()
          },
          responseType: "json"
        }
      );
      if (!response.status) {
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      log.success("获取链接信息：", data);
      if (data["code"] !== 200) {
        Qmsg.error("请求链接信息失败");
        return;
      }
      if (!data["list"].length) {
        Qmsg.error("获取链接信息为空");
        return;
      }
      return data;
    }
    /**
     * 获取文件夹信息
     * @param devType
     * @param devModel
     * @param uuid
     * @param extra
     * @param timestamp
     * @param shareId
     * @param folderId
     * @param offset
     * @param limit
     */
    async getFolderInfo(devType = this.$data.devType, devModel = this.$data.devModel, uuid = "", extra = this.$data.extra, timestamp = "", shareId = "", folderId = "", offset = this.$data.offset, limit = this.$data.limit) {
      let response = await httpx.post(
        `https://api.ilanzou.com/unproved/share/list?${utils.toSearchParamsStr({
        devType,
        devModel,
        uuid,
        extra,
        timestamp,
        shareId,
        code: this.accessCode,
        folderId,
        offset,
        limit
      })}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.ilanzou.com",
            Referer: "https://www.ilanzou.com/",
            "Sec-Fetch-Site": "same-site",
            Host: "api.ilanzou.com",
            "User-Agent": utils.getRandomPCUA()
          }
        }
      );
      if (!response.status) {
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      log.success("获取文件列表信息：", data);
      if (data["code"] === 200) {
        return data;
      } else {
        Qmsg.error(data["msg"]);
      }
    }
    /**
     * 获取下载链接
     */
    async getDownloadFileUrl(downloadId = "", enable = 1, devType = this.$data.devType, uuid = "", timestamp = "", auth = "", shareId = this.shareCode) {
      let url = `https://api.ilanzou.com/unproved/file/redirect?${utils.toSearchParamsStr(
      {
        downloadId,
        enable,
        devType,
        uuid,
        timestamp,
        auth,
        shareId
      }
    )}`;
      return url;
    }
    /**
     * 获取加密的uuid
     * @param timestamp
     */
    getEncodeUUID(timestamp = 21) {
      let r = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce(
        (e2, t) => (t &= 63, e2 += t < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_", e2),
        ""
      );
      return r(timestamp);
    }
    /**
     * 获取shareCode转换后的id
     */
    getDecodeShareCodeId(shareCode) {
      return LanZouUtils.idEncrypt(shareCode);
    }
    /**
     * 获取加密后的timestamp
     * @param time
     */
    getEncodeTimeStamp(time = Date.now()) {
      return LanZouUtils.encryptHex(time);
    }
    /**
     * 获取下载文件的参数
     * @param fileId 文件id
     * @param userId 用户id
     * @param uuid 用户登录生成的uuid
     */
    getDownloadFileParams(fileId, userId = "", uuid) {
      const that = this;
      let nowTime = Date.now();
      let downloadId = LanZouUtils.encryptHex(fileId + "|" + userId), enable = 1, timestamp = that.getEncodeTimeStamp(nowTime), auth = LanZouUtils.encryptHex(fileId + "|" + nowTime);
      return [
        downloadId,
        enable,
        that.$data.devType,
        uuid,
        timestamp,
        auth,
        that.shareCode
      ];
    }
    /**
     * 前往登录
     */
    gotoLogin() {
      NetDiskPops.confirm(
        {
          title: {
            position: "center",
            text: "蓝奏云优享"
          },
          content: {
            text: "必须先在【蓝奏云优享】进行登录，然后登录成功后刷新获取必备的下载参数【uuid】和【userId】。",
            html: false
          },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "前往",
              enable: true,
              callback() {
                window.open("https://www.ilanzou.com", "_blank");
              }
            }
          }
        },
        NetDiskUI.popsStyle.tianYiYunLoginTip
      );
    }
  }
  class NetDiskParse_magnet extends ParseFileAbstract {
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "magnet",
        ruleIndex,
        shareCode,
        accessCode
      });
      let $loading = Qmsg.loading("正在请求Api中...");
      let metaInfo = await MetaDataParser.parseFileMetaInfo(url);
      $loading.close();
      if (!metaInfo) {
        return;
      }
      MetaDataParser.showFileMetaInfoDialog(metaInfo);
    }
  }
  const NetDiskCommonUtils = {
    /**
     * 测试是否支持GM_download
     */
    isSupport_GM_download() {
      try {
        return typeof _GM_download === "function";
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  };
  class NetDiskParse_nainiu extends ParseFileAbstract {
    panelList = [];
    panelContent = "";
    OK_CODE = "0000";
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      const that = this;
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
        NetDiskUI.staticView.moreFile("奶牛快传文件解析", folderInfoList);
      } else {
        let downloadUrl = void 0;
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
        if (NetDiskFilterScheme.isForwardDownloadLink("nainiu")) {
          downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
            "nainiu",
            downloadUrl
          );
        }
        NetDiskUI.staticView.oneFile({
          title: "奶牛快传单文件直链",
          fileName: checkLinkValidityInfo["fileName"],
          fileType: checkLinkValidityInfo["fileType"],
          fileSize: checkLinkValidityInfo["fileSize"],
          downloadUrl,
          fileUploadTime: checkLinkValidityInfo["fileUploadTime"],
          fileLatestTime: checkLinkValidityInfo["fileLatestTime"],
          clickCallBack: (_fileDetails_) => {
            that.downloadFile(checkLinkValidityInfo["fileName"], downloadUrl);
          }
        });
      }
    }
    /**
     * 校验链接有效性并解析获取信息
     * @param shareCode
     * @param accessCode
     */
    async checkLinkValidity(shareCode, accessCode) {
      const that = this;
      let resultJSON = await that.getShareByUniqueUrl(shareCode);
      if (!resultJSON) {
        return false;
      }
      let code = resultJSON["code"];
      let message = resultJSON["message"];
      if (code !== that.OK_CODE) {
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
            that.ruleIndex,
            that.shareCode,
            that.accessCode,
            (option) => {
              that.init({
                ruleIndex: that.ruleIndex,
                shareCode: that.shareCode,
                accessCode: option.accessCode
              });
            }
          );
          return false;
        } else if (zipDownload) {
          Qmsg.success("该链接为zip单文件");
          return {
            zipDownload,
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
            )
          };
        } else if (resultJSON["data"]["firstFile"] == void 0) {
          Qmsg.success("该链接为文件夹类型");
          return {
            isFolder: true,
            guid: resultJSON["data"]["guid"],
            firstFolder: resultJSON["data"]["firstFolder"],
            data: resultJSON["data"]
          };
        }
        return {
          zipDownload,
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
          )
        };
      }
    }
    /**
     * 获取直链弹窗的文件夹信息
     * @returns
     */
    getFolderInfo(transferGuid, shareFolderInfoList, shareFileInfoList, index = 0) {
      const that = this;
      let folderInfoList = [];
      let tempFolderInfoList = [];
      let tempFolderFileInfoList = [];
      shareFolderInfoList.forEach((folderInfo) => {
        folderInfoList.push({
          fileName: folderInfo["title"],
          fileSize: 0,
          fileType: "",
          createTime: folderInfo["created_at"],
          latestTime: folderInfo["updated_at"],
          isFolder: true,
          index,
          async clickEvent() {
            if (!folderInfo["child_folder_count"] && !folderInfo["content_count"]) {
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
            let folderInfoList2 = that.getFolderInfo(
              transferGuid,
              childFolderInfo,
              childFileInfo,
              index + 1
            );
            return folderInfoList2;
          }
        });
      });
      shareFileInfoList.forEach((fileInfo) => {
        let fileName = fileInfo["file_info"]["title"];
        let fileType = fileInfo["file_info"]["format"] ?? "";
        if (Boolean(fileType)) {
          fileName = fileName + "." + fileType;
        }
        folderInfoList.push({
          fileName,
          fileSize: fileInfo["file_info"]["size"],
          fileType,
          createTime: fileInfo["created_at"],
          latestTime: fileInfo["updated_at"],
          isFolder: false,
          index,
          async clickEvent() {
            let downloadUrl = await that.getDownloadUrl(
              that.shareCode,
              transferGuid,
              fileInfo["id"]
            );
            if (!downloadUrl) {
              return;
            }
            if (NetDiskFilterScheme.isForwardDownloadLink("nainiu")) {
              downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
                "nainiu",
                downloadUrl
              );
            }
            that.downloadFile(fileName, downloadUrl);
          }
        });
      });
      tempFolderInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      tempFolderFileInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      log.info("getFolderInfo", folderInfoList);
      return folderInfoList;
    }
    /**
     * 文件解析
     * @param shareCode
     * @param accessCode
     */
    async parseMoreFile(shareCode, accessCode) {
    }
    /**
     * 获取文件夹信息
     * @param transferGuid
     * @param folderId
     * @param page
     * @param size
     */
    async getShareFolder(transferGuid, folderId = "", page = 0, size = 100) {
      const that = this;
      let getResp = await httpx.get(
        `https://cowtransfer.com/core/api/transfer/share/folders?transferGuid=${transferGuid}&folderId=${folderId}&page=${page}&size=${size}`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent": utils.getRandomPCUA(),
            Referer: "https://cowtransfer.com/"
          }
        }
      );
      log.success(getResp);
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data.code !== that.OK_CODE) {
        Qmsg.error(data["message"]);
        return;
      }
      let folders = data["data"]["folders"];
      if (!Array.isArray(folders)) {
        Qmsg.error("data.folders不是数组");
        return;
      }
      return folders;
    }
    /**
     * 获取文件信息
     * @param transferGuid
     * @param folderId
     * @param page
     * @param size
     * @param subContent
     */
    async getShareFiles(transferGuid, folderId = "", page = 0, size = 20, subContent = false) {
      const that = this;
      let getResp = await httpx.get(
        `https://cowtransfer.com/core/api/transfer/share/files?transferGuid=${transferGuid}&folderId=${folderId}&page=${page}&size=${size}&subContent=${subContent}`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent": utils.getRandomPCUA(),
            Referer: "https://cowtransfer.com/"
          }
        }
      );
      log.success(getResp);
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data.code !== that.OK_CODE) {
        Qmsg.error(data["message"]);
        return;
      }
      let files = data["data"]["files"];
      if (!Array.isArray(files)) {
        Qmsg.error("data.files不是数组");
        return;
      }
      return files;
    }
    /**
     * 获取分享信息
     * @param {string} shareCode
     */
    async getShareByUniqueUrl(shareCode) {
      let url = `https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${shareCode}`;
      let getResp = await httpx.get({
        url,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Referer: "https://cowtransfer.com/s/" + shareCode
        }
      });
      log.info(getResp);
      if (!getResp.status) {
        return;
      }
      let respData = getResp.data;
      let resultJSON = utils.toJSON(respData.responseText);
      log.info("转换的JSON", resultJSON);
      return resultJSON;
    }
    /**
     * 获取下载链接
     * @param shareCode
     * @param guid
     * @param id
     */
    async getDownloadUrl(shareCode, guid = "", id = "") {
      const that = this;
      let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&fileId=${id}`;
      let getResp = await httpx.get({
        url,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Referer: "https://cowtransfer.com/s/" + shareCode
        }
      });
      log.info(getResp);
      if (!getResp.status) {
        return;
      }
      let respData = getResp.data;
      let resultJSON = utils.toJSON(respData.responseText);
      log.info("转换的JSON", resultJSON);
      if (resultJSON["code"] === that.OK_CODE) {
        return resultJSON["data"]["downloadUrl"];
      } else {
        Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
        return;
      }
    }
    /**
     * 获取zip文件的下载链接
     * @param shareCode
     * @param guid
     * @param title 标题
     */
    async getZipFileDownloadUrl(shareCode, guid = "", title = "") {
      const that = this;
      let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&title=${title}`;
      let getResp = await httpx.get({
        url,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Referer: "https://cowtransfer.com/s/" + shareCode
        }
      });
      log.info(getResp);
      if (!getResp.status) {
        return;
      }
      let respData = getResp.data;
      let resultJSON = utils.toJSON(respData.responseText);
      log.info("转换的JSON", resultJSON);
      if (resultJSON["code"] === that.OK_CODE) {
        return resultJSON["data"]["downloadUrl"];
      } else {
        Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
        return;
      }
    }
    /**
     * 下载文件
     * @param fileName 文件名
     * @param downloadUrl 下载地址
     */
    async downloadFile(fileName, downloadUrl) {
      log.info("下载文件：", fileName, downloadUrl);
      if (window.location.hostname === "cowtransfer.com") {
        window.open(downloadUrl, "_blank");
        return;
      }
      if (!NetDiskCommonUtils.isSupport_GM_download()) {
        Qmsg.error("当前脚本环境不支持API 【GM_download】");
        return;
      }
      Qmsg.info(`调用【GM_download】下载：${fileName}`);
      let abortDownload = null;
      let isSuccessDownload = false;
      let isDownloadEnd = false;
      let downloadingQmsg = Qmsg.loading("下载中...", {
        showClose: true,
        onClose() {
          if (!isSuccessDownload && typeof abortDownload === "function") {
            abortDownload();
          }
        }
      });
      let result = _GM_download({
        url: downloadUrl,
        name: fileName,
        headers: {
          Referer: "https://cowtransfer.com/s/" + this.shareCode
        },
        onload() {
          isSuccessDownload = true;
          downloadingQmsg.close();
          Qmsg.success(`下载 ${fileName} 已完成`, { consoleLogContent: true });
        },
        onprogress(details) {
          if (typeof details === "object" && "loaded" in details && "total" in details && !isDownloadEnd) {
            let progressNum = details.loaded / details.total;
            let formatProgressNum = (progressNum * 100).toFixed(2);
            downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
            if (details.loaded === details.total) {
              isDownloadEnd = true;
            }
          }
        },
        onerror(error) {
          downloadingQmsg.close();
          log.error("下载失败error👉", error);
          if (typeof error === "object" && error["error"]) {
            Qmsg.error(`下载 ${fileName} 失败或已取消 原因：${error["error"]}`, {
              timeout: 6e3,
              consoleLogContent: true
            });
          } else {
            Qmsg.error(`下载 ${fileName} 失败或已取消`, {
              consoleLogContent: true
            });
          }
        },
        ontimeout() {
          downloadingQmsg.close();
          Qmsg.error(`下载 ${fileName} 请求超时`, { consoleLogContent: true });
        }
      });
      if (typeof result === "object" && result != null && "abort" in result) {
        abortDownload = result["abort"];
      }
    }
  }
  class NetDiskParse_Tianyiyun extends ParseFileAbstract {
    shareId = void 0;
    /* 猜测1是有密码，2是无密码 */
    shareMode = 1;
    code = {
      ShareNotFoundFlatDir: "抱歉，该文件的分享平铺目录未找到",
      ShareNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在。",
      ShareAuditNotPass: "抱歉，该内容审核不通过",
      FileNotFound: "抱歉，文件不存在",
      ShareExpiredError: "抱歉，您访问的页面地址有误，或者该页面不存在",
      ShareAuditWaiting: "抱歉，该链接处于审核中",
      ShareInfoNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在",
      FileTooLarge: "抱歉，文件太大，不支持下载",
      InvalidSessionKey: "天翼云PC端Cookie未生成，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC且在登录后要等待进入个人云空间后生成Cookie，不是手机端浏览的个人云空间，那样生成的Cookie无法使用)"
    };
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      const that = this;
      let shareInfoData = await that.getShareInfoByCodeV2(shareCode);
      if (!shareInfoData) {
        return;
      }
      log.info("解析的JSON信息", shareInfoData);
      if (shareInfoData["needAccessCode"] && utils.isNull(that.accessCode)) {
        Qmsg.error("密码不正确!");
        NetDiskUI.newAccessCodeView(
          void 0,
          "tianyiyun",
          that.ruleIndex,
          that.shareCode,
          that.accessCode,
          (option) => {
            that.init({
              ruleIndex: that.ruleIndex,
              shareCode: that.shareCode,
              accessCode: option.accessCode
            });
          }
        );
        return;
      }
      if ("shareId" in shareInfoData) {
        this.shareId = shareInfoData["shareId"];
      } else {
        let newShareId = await that.getShareId(shareCode, accessCode);
        if (newShareId) {
          this.shareId = newShareId;
        }
      }
      if ("shareMode" in shareInfoData) {
        this.shareMode = shareInfoData["shareMode"];
      }
      if (this.shareId == null) {
        return;
      }
      if (shareInfoData.isFolder) {
        Qmsg.info("正在递归文件");
        let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let fileId = shareInfoData["fileId"];
        let folderInfo = await that.listShareDir(
          shareCode,
          accessCode,
          void 0,
          void 0,
          fileId,
          fileId,
          void 0,
          this.shareId,
          void 0,
          void 0,
          void 0
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
        NetDiskUI.staticView.moreFile("天翼云文件解析", folderInfoList);
        return;
      } else {
        let downloadUrl = await that.getDownloadUrl(
          that.shareCode,
          that.accessCode,
          shareInfoData.fileId,
          this.shareId
        );
        if (downloadUrl) {
          if (NetDiskFilterScheme.isForwardDownloadLink("tianyiyun")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
              "tianyiyun",
              downloadUrl
            );
          }
          NetDiskUI.staticView.oneFile({
            title: "天翼云单文件直链",
            fileName: shareInfoData.fileName,
            fileSize: utils.formatByteToSize(shareInfoData.fileSize),
            downloadUrl,
            fileUploadTime: shareInfoData.fileCreateDate,
            fileLatestTime: shareInfoData.fileLastOpTime
          });
        }
      }
    }
    /**
     * 获取当前登录用户的信息
     */
    async getUserBriefInfo(shareCode) {
      const that = this;
      let response = await httpx.get(
        "https://cloud.189.cn/api/portal/v2/getUserBriefInfo.action",
        {
          headers: {
            Accept: "application/json;charset=UTF-8",
            Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
            "User-Agent": utils.getRandomPCUA()
          },
          allowInterceptConfig: false
        }
      );
      log.info(response);
      if (!response.status) {
        let errorResultJSON = utils.toJSON(response.data.responseText);
        if (errorResultJSON["res_code"] in that.code) {
          Qmsg.error(
            that.code[errorResultJSON["res_code"]]
          );
        } else {
          Qmsg.error("请求异常");
        }
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      if (data["res_code"] === 0) {
        return data;
      }
    }
    /**
     * 获取分享信息
     * @param shareCode
     */
    async getShareInfoByCodeV2(shareCode) {
      const that = this;
      let response = await httpx.post({
        url: "https://cloud.189.cn/api/open/share/getShareInfoByCodeV2.action",
        data: `shareCode=${shareCode}`,
        headers: {
          Accept: "application/json;charset=UTF-8",
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": utils.getRandomPCUA(),
          "Sign-Type": 1,
          Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
          Origin: "https://cloud.189.cn"
        },
        allowInterceptConfig: false
      });
      if (!response.status) {
        let errorData = utils.toJSON(response.data.responseText);
        log.error("获取下载参数失败的JSON信息", errorData);
        if (errorData["res_code"] in that.code) {
          Qmsg.error(that.code[errorData["res_code"]]);
        } else {
          Qmsg.error(errorData["res_message"]);
        }
        return;
      }
      let postData = response.data;
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
    }
    /**
     * 获取shareId
     */
    async getShareId(shareCode, accessCode) {
      let response = await httpx.get({
        url: `https://cloud.189.cn/api/open/share/checkAccessCode.action?shareCode=${shareCode}&accessCode=${accessCode}`,
        headers: {
          Accept: "application/json;charset=UTF-8",
          "Cache-Control": "no-cache",
          "User-Agent": utils.getRandomPCUA(),
          "Sign-Type": 1,
          Referer: `https://cloud.189.cn/web/share?code=${shareCode}`
        },
        responseType: "json"
      });
      if (!response.status) {
        return;
      }
      let respData = response.data;
      log.info(respData);
      let data = utils.toJSON(respData.responseText);
      if (data["res_code"] === 0 && "shareId" in data) {
        return data["shareId"];
      } else {
        Qmsg.error("获取shareId失败");
        log.info(data);
      }
    }
    /**
     * 获取随机noCache
     */
    getNoCacheValue() {
      let result = "";
      for (let index = 0; index < 17; index++) {
        result += utils.getRandomValue(1, 9);
      }
      return "0." + result;
    }
    /**
     * 获取下载链接
     * @param shareCode
     * @param accessCode
     * @param fileId
     * @param shareId
     */
    async getDownloadUrl(shareCode, accessCode, fileId, shareId) {
      const that = this;
      let response = await httpx.get({
        url: `https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?fileId=${fileId}&dt=1&shareId=${shareId}`,
        headers: {
          Accept: "application/json;charset=UTF-8",
          "Cache-Control": "no-cache",
          "User-Agent": utils.getRandomPCUA(),
          Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
          "Sign-Type": 1
        },
        responseType: "json",
        allowInterceptConfig: false
      });
      log.info(response);
      if (!response.status) {
        let errorResultJSON = utils.toJSON(response.data.responseText);
        if (errorResultJSON["errorCode"] === "InvalidSessionKey") {
          that.gotoLogin(that.code["InvalidSessionKey"]);
        } else if (errorResultJSON["res_code"] in that.code) {
          Qmsg.error(
            that.code[errorResultJSON["res_code"]]
          );
        } else {
          Qmsg.error("请求异常");
        }
        return;
      }
      let responseData = response.data;
      let data = utils.toJSON(responseData.responseText);
      log.info(data);
      if (data["res_code"] === 0) {
        return data["fileDownloadUrl"];
      } else if ("InvalidSessionKey" === data["res_code"] || "InvalidSessionKey" === data["errorCode"]) {
        that.gotoLogin(that.code["InvalidSessionKey"]);
      } else if (that.code.hasOwnProperty(data["res_code"])) {
        Qmsg.error(that.code[data["res_code"]]);
      } else {
        Qmsg.error("请求失败");
        log.error(responseData);
      }
    }
    /**
     * 天翼云登录弹窗
     * @param text 弹窗的显示的内容
     */
    gotoLogin(text = "") {
      NetDiskPops.confirm(
        {
          title: {
            position: "center",
            text: "天翼云"
          },
          content: {
            text,
            html: false
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
              }
            }
          }
        },
        NetDiskUI.popsStyle.tianYiYunLoginTip
      );
    }
    /**
     * 解析文件夹信息
     */
    async listShareDir(shareCode, accessCode, pageNum = 1, pageSize = 60, fileId, shareDirFileId, isFolder = true, shareId, iconOption = 5, orderBy = "lastOpTime", descending = true) {
      const that = this;
      const getSearParamData = {
        pageNum,
        pageSize,
        fileId,
        shareDirFileId,
        isFolder,
        shareId,
        shareMode: this.shareMode,
        iconOption,
        orderBy,
        descending,
        accessCode
      };
      let response = await httpx.get(
        `https://cloud.189.cn/api/open/share/listShareDir.action?${utils.toSearchParamsStr(
        getSearParamData
      )}`,
        {
          headers: {
            Accept: "application/json;charset=UTF-8",
            Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
            "Sign-Type": 1,
            "User-Agent": utils.getRandomPCUA()
          },
          responseType: "json",
          allowInterceptConfig: false
        }
      );
      if (!response.status) {
        let errorData = utils.toJSON(response.data.responseText);
        log.error("解析文件夹信息失败", errorData);
        if (errorData["res_code"] in that.code) {
          Qmsg.error(that.code[errorData["res_code"]]);
        } else if ("res_message" in errorData) {
          Qmsg.error(errorData["res_message"]);
        } else {
          Qmsg.error("解析文件夹信息失败");
        }
        return;
      }
      let responseData = response.data;
      log.info(responseData);
      let data = utils.toJSON(responseData.responseText);
      if (data["res_code"] == 0) {
        return data["fileListAO"];
      } else {
        if (that.code.hasOwnProperty(data["res_code"])) {
          Qmsg.error(that.code[data["res_code"]]);
        } else {
          Qmsg.error("获取FileId失败");
        }
      }
    }
    /**
     * 获取直链弹窗的文件夹信息
     */
    getFolderInfo(shareCode, accessCode, dirInfo, index = 0) {
      const that = this;
      let folderInfoList = [];
      let tempFolderInfoList = [];
      let tempFolderFileInfoList = [];
      dirInfo["folderList"].forEach((folderInfo) => {
        folderInfoList.push({
          fileName: folderInfo["name"],
          fileSize: 0,
          fileType: "",
          createTime: utils.formatToTimeStamp(folderInfo["createDate"]),
          latestTime: utils.formatToTimeStamp(folderInfo["lastOpTime"]),
          isFolder: true,
          index,
          async clickEvent() {
            let _folderInfo_ = await that.listShareDir(
              shareCode,
              accessCode,
              1,
              100,
              folderInfo["id"],
              folderInfo["id"],
              void 0,
              that.shareId,
              void 0,
              void 0,
              void 0
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
          }
        });
      });
      dirInfo["fileList"].forEach((fileInfo) => {
        folderInfoList.push({
          fileName: fileInfo["name"],
          fileSize: fileInfo["size"],
          fileType: "",
          createTime: utils.formatToTimeStamp(fileInfo["createDate"]),
          latestTime: utils.formatToTimeStamp(fileInfo["lastOpTime"]),
          isFolder: false,
          index,
          async clickEvent() {
            let downloadUrl = await that.getDownloadUrl(
              shareCode,
              accessCode,
              fileInfo["id"],
              that.shareId
            );
            if (downloadUrl) {
              if (NetDiskFilterScheme.isForwardDownloadLink("tianyiyun")) {
                downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
                  "tianyiyun",
                  downloadUrl
                );
              }
              return {
                autoDownload: true,
                mode: "aBlank",
                url: downloadUrl
              };
            }
          }
        });
      });
      tempFolderInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      tempFolderFileInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      log.info("getFolderInfo", folderInfoList);
      return folderInfoList;
    }
  }
  class NetDiskParse_UC extends ParseFileAbstract {
    /**
     * 入口
     */
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      const that = this;
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
      let detail = await that.getDetail(that.shareCode, that.accessCode, stoken);
      if (!detail) {
        Qmsg.error("UC网盘：获取detail失败");
        return;
      }
      if (detail.length === 1 && detail[0].dir == false && detail[0].file_type === 1) {
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
          fileUploadTime: utils.formatTime(oneFileDownloadDetail[0].created_at),
          fileLatestTime: utils.formatTime(
            oneFileDownloadDetail[0].last_update_at
          ),
          clickCallBack() {
            that.downloadFile(
              oneFileDownloadDetail[0].file_name,
              oneFileDownloadDetail[0].download_url
            );
          }
        });
      } else {
        Qmsg.info("正在递归文件");
        let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let folderInfoList = that.getFolderInfo(detail, stoken, 0);
        QmsgLoading.close();
        log.info("递归完毕");
        NetDiskUI.staticView.moreFile("UC网盘文件解析", folderInfoList);
        return;
      }
    }
    /**
     * 判断是否已登录UC网盘
     */
    async isLogin() {
      let getResp = await httpx.get("https://drive.uc.cn/", {
        headers: {
          "User-Agent": utils.getRandomPCUA()
        }
      });
      log.success("判断是否已登录UC网盘", getResp);
      if (!getResp.status) {
        return;
      }
      if (getResp.data.finalUrl === "https://drive.uc.cn/list") {
        return "已登录";
      } else {
        return false;
      }
    }
    /**
     * 下载文件
     * @param fileName 文件名
     * @param downloadUrl 下载链接
     */
    downloadFile(fileName, downloadUrl) {
      log.info(`调用【GM_download】下载：`, arguments);
      if (window.location.hostname === "drive.uc.cn") {
        window.open(downloadUrl, "_blank");
        return;
      }
      if (!NetDiskCommonUtils.isSupport_GM_download()) {
        Qmsg.error("当前脚本环境不支持API 【GM_download】");
        return;
      }
      Qmsg.info(`调用【GM_download】下载：${fileName}`);
      let abortDownload = null;
      let isSuccessDownload = false;
      let isDownloadEnd = false;
      let downloadingQmsg = Qmsg.loading("下载中...", {
        showClose: true,
        onClose() {
          if (!isSuccessDownload && typeof abortDownload === "function") {
            abortDownload();
          }
        }
      });
      let result = _GM_download({
        url: downloadUrl,
        name: fileName,
        headers: {
          Referer: "https://drive.uc.cn/"
        },
        onload() {
          isSuccessDownload = true;
          downloadingQmsg.close();
          Qmsg.success(`下载 ${fileName} 已完成`, { consoleLogContent: true });
        },
        onprogress(details) {
          if (typeof details === "object" && "loaded" in details && "total" in details && !isDownloadEnd) {
            let progressNum = details.loaded / details.total;
            let formatProgressNum = (progressNum * 100).toFixed(2);
            downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
            if (details.loaded === details.total) {
              isDownloadEnd = true;
            }
          }
        },
        onerror(error) {
          downloadingQmsg.close();
          log.error("下载失败error👉", error);
          if (typeof error === "object" && error["error"]) {
            Qmsg.error(`下载 ${fileName} 失败或已取消 原因：${error["error"]}`, {
              timeout: 6e3,
              consoleLogContent: true
            });
          } else {
            Qmsg.error(`下载 ${fileName} 失败或已取消`, {
              consoleLogContent: true
            });
          }
        },
        ontimeout() {
          downloadingQmsg.close();
          Qmsg.error(`下载 ${fileName} 请求超时`, { consoleLogContent: true });
        }
      });
      if (typeof result === "object" && result != null && "abort" in result) {
        abortDownload = result["abort"];
      }
    }
    /**
     * 前往登录
     * @param text 弹窗的显示的内容
     */
    gotoLogin(text = "") {
      NetDiskPops.confirm(
        {
          title: {
            position: "center",
            text: "UC网盘"
          },
          content: {
            text,
            html: false
          },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "前往",
              enable: true,
              callback() {
                window.open("https://drive.uc.cn", "_blank");
              }
            }
          }
        },
        NetDiskUI.popsStyle.tianYiYunLoginTip
      );
    }
    /**
     * 获取stoken
     * @param pwd_id 分享码
     * @param passcode 访问码
     */
    async getStoken(pwd_id, passcode) {
      let response = await httpx.post(
        "https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?entry=ft&fr=pc&pr=UCBrowser",
        {
          data: JSON.stringify({
            share_for_transfer: true,
            passcode,
            pwd_id
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
            "User-Agent": utils.getRandomPCUA(),
            Origin: "https://drive.uc.cn",
            Referer: "https://drive.uc.cn/"
          },
          allowInterceptConfig: false
        }
      );
      if (!response.status) {
        let errorData = utils.toJSON(response.data.responseText);
        log.error("获取stoken失败JSON信息", errorData);
        if ("message" in errorData) {
          Qmsg.error(errorData["message"]);
        } else {
          Qmsg.error("请求异常，获取stoken失败");
        }
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      log.info("获取stoken：", data);
      if (data["code"] !== 0) {
        log.error("获取stoken失败", data);
        Qmsg.error("获取stoken失败");
        return;
      }
      return data["data"]["stoken"];
    }
    /**
     * 获取stoken
     * @param pwd_id 分享码
     * @param passcode 访问码
     * @param stoken 获取的stoken
     * @param pdir_fid 父fid，默认为0，如果为文件夹，那么它的fid就是这个值
     * @param force
     * @param _page
     * @param _size=
     * @param _fetch_banner
     * @param _fetch_share
     * @param _fetch_total
     */
    async getDetail(pwd_id, passcode, stoken, pdir_fid = 0, force = 0, _page = 1, _size = 50, _fetch_banner = 0, _fetch_share = 0, _fetch_total = 1) {
      let response = await httpx.get(
        `https://pc-api.uc.cn/1/clouddrive/transfer_share/detail?pr=UCBrowser&fr=h5&pwd_id=${pwd_id}&__t=${(/* @__PURE__ */ new Date()).getTime()}&passcode=${passcode}&stoken=${encodeURIComponent(
        stoken
      )}&pdir_fid=${pdir_fid}&force=${force}&_page=${_page}&_size=${_size}&_fetch_banner=${_fetch_banner}&_fetch_share=${_fetch_share}&_fetch_total=${_fetch_total}&_sort=${encodeURIComponent(
        "file_type:asc,file_name:asc"
      )}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": utils.getRandomPCUA(),
            Origin: "https://drive.uc.cn",
            Referer: "https://drive.uc.cn/"
          }
        }
      );
      if (!response.status) {
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      log.info("获取detail：", data);
      if (data["code"] !== 0) {
        log.error("获取detail失败", data);
        Qmsg.error("获取detail失败");
        return;
      }
      let metadata = data["metadata"];
      if (metadata && metadata["_total"] && metadata["_total"] > metadata["_size"]) {
        return await this.getDetail(
          pwd_id,
          passcode,
          stoken,
          pdir_fid,
          force,
          _page,
          metadata["_total"],
          _fetch_banner,
          _fetch_share,
          _fetch_total
        );
      }
      return data["data"]["list"];
    }
    /**
     * 获取下载信息
     * @param pwd_id 分享码
     * @param stoken 获取的stoken
     * @param fids 通过获取到的detail获取到的fid
     * @param share_fid_token 通过获取到的detail获取到的share_fid_token
     */
    async getDownload(pwd_id, stoken, fid, share_fid_token) {
      let response = await httpx.post(
        "https://pc-api.uc.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=UCBrowser",
        {
          data: JSON.stringify({
            fids: [fid],
            pwd_id,
            stoken,
            fids_token: [share_fid_token]
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
            "User-Agent": utils.getRandomPCUA(),
            Origin: "https://drive.uc.cn",
            Referer: "https://drive.uc.cn/"
          }
        }
      );
      if (!response.status) {
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      log.info("获取download：", data);
      if (data["code"] !== 0) {
        log.error("获取download失败", data);
        Qmsg.error("获取download失败");
        return;
      }
      if (data["data"].length === 0) {
        log.error("获取download detail失败", data);
        Qmsg.error("获取download detail失败失败");
        return;
      }
      return data["data"];
    }
    /**
     * 获取文件夹信息
     * @param infoList
     */
    getFolderInfo(infoList, stoken, index = 0) {
      const that = this;
      let folderInfoList = [];
      let tempFolderInfoList = [];
      let tempFolderFileInfoList = [];
      infoList.forEach((item) => {
        if (item.dir == false && item.file_type === 1) {
          tempFolderFileInfoList.push({
            fileName: item.file_name,
            fileSize: item.size,
            fileType: "",
            createTime: item.created_at,
            latestTime: item.updated_at,
            isFolder: false,
            index,
            async clickEvent() {
              let fileDownloadUrl = "";
              let fileDownloadUrlInfo = await that.getDownload(
                that.shareCode,
                stoken,
                item.fid,
                item.share_fid_token
              );
              if (fileDownloadUrlInfo) {
                if (fileDownloadUrlInfo.length) {
                  fileDownloadUrl = fileDownloadUrlInfo[0].download_url;
                } else {
                  fileDownloadUrl = "";
                }
              } else {
                fileDownloadUrl = "";
              }
              if (item.ban) {
                Qmsg.error("文件已被禁止下载");
              } else {
                let schemeDownloadUrl = fileDownloadUrl;
                if (NetDiskFilterScheme.isForwardDownloadLink("uc")) {
                  schemeDownloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
                    "uc",
                    schemeDownloadUrl
                  );
                }
                if (schemeDownloadUrl === fileDownloadUrl) {
                  that.downloadFile(item.file_name, fileDownloadUrl);
                } else {
                  return {
                    autoDownload: true,
                    mode: "aBlank",
                    url: fileDownloadUrl
                  };
                }
              }
            }
          });
        } else {
          tempFolderInfoList.push({
            fileName: item.file_name,
            fileSize: item.size,
            fileType: "",
            createTime: item.created_at,
            latestTime: item.updated_at,
            isFolder: true,
            index,
            async clickEvent() {
              if (item.include_items === 0) {
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
            }
          });
        }
      });
      tempFolderInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      tempFolderFileInfoList.sort(
        (a, b) => a["fileName"].localeCompare(b["fileName"])
      );
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      log.info("getFilesInfoByRec", folderInfoList);
      return folderInfoList;
    }
  }
  class NetDiskParse_Wenshushu extends ParseFileAbstract {
    /**
     * 用于header头x-token
     * @type {string}
     */
    token = void 0;
    code = {
      1004: "no token",
      1008: "您没有权限访问",
      1013: "糟糕，此任务已过期销毁，下次要记得续期",
      1066: "对方设置的下载 / 预览次数已用完",
      1088: "糟糕，您访问的页面不存在"
    };
    async init(netDiskInfo) {
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
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
    }
    /**
     * 获取token
     * wss:xxxxxx
     */
    async getWssToken() {
      const that = this;
      let postResp = await httpx.post(
        "https://www.wenshushu.cn/ap/login/anonymous",
        {
          responseType: "json",
          data: JSON.stringify({
            dev_info: "{}"
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": utils.getRandomAndroidUA(),
            Referer: "https://www.wenshushu.cn/f/" + that.shareCode
          }
        }
      );
      log.success(postResp);
      if (!postResp.status) {
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      if (data["code"] === 0) {
        that.token = data["data"]["token"];
        return data["data"]["token"];
      } else if (data["code"] in that.code) {
        Qmsg.error(that.code[data["code"]]);
      } else {
        Qmsg.error("获取wss失败");
      }
    }
    /**
     * 获取pid
     */
    async getPid() {
      const that = this;
      let postResp = await httpx.post({
        url: "https://www.wenshushu.cn/ap/task/mgrtask",
        responseType: "json",
        data: JSON.stringify({
          tid: that.shareCode,
          password: "",
          ufileid: ""
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomAndroidUA(),
          Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
          "x-token": that.token
        }
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
          pid: data["data"]["ufileid"]
        };
      } else if (data["code"] in that.code) {
        Qmsg.error(that.code[data["code"]]);
      } else {
        Qmsg.error("获取pid失败");
      }
    }
    /**
     * 获取文件列表信息
     * @param bid
     * @param pid
     */
    async getFileNList(bid, pid) {
      const that = this;
      let postResp = await httpx.post("https://www.wenshushu.cn/ap/ufile/nlist", {
        responseType: "json",
        data: JSON.stringify({
          start: 0,
          sort: {
            name: "asc"
          },
          bid,
          pid,
          options: {
            uploader: "true"
          },
          size: 50
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomAndroidUA(),
          Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
          "x-token": that.token
        }
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
          NetDiskLinkClickMode.openBlankUrl(
            NetDiskLinkClickModeUtils.getBlankUrl({
              ruleKeyName: "wenshushu",
              ruleIndex: that.ruleIndex,
              shareCode: that.shareCode,
              accessCode: that.accessCode
            }),
            "wenshushu",
            that.ruleIndex,
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
    }
    /**
     * 获取下载链接
     * @param {object} data
     * @returns {Promise}
     */
    async getDownloadUrl(data) {
      const that = this;
      let file_name = data.fname;
      let file_size = utils.formatByteToSize(data.size);
      let postResp = await httpx.post("https://www.wenshushu.cn/ap/dl/sign", {
        responseType: "json",
        data: JSON.stringify({
          ufileid: data.fid,
          consumeCode: 0
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomAndroidUA(),
          Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
          "x-token": that.token
        }
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
          if (NetDiskFilterScheme.isForwardDownloadLink("wenshushu")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
              "wenshushu",
              downloadUrl
            );
          }
          NetDiskUI.staticView.oneFile({
            title: "文叔叔单文件直链",
            fileName: file_name,
            fileSize: file_size,
            downloadUrl
          });
        }
      } else if (jsonData["data"] in that.code) {
        Qmsg.error(that.code[jsonData["data"]]);
      } else {
        Qmsg.error("获取下载链接失败");
      }
    }
  }
  const NetDiskParse = {
    rule: {
      /**
       * 百度网盘
       */
      baidu: NetDiskParse_Baidu,
      /**
       * 蓝奏云
       */
      lanzou: NetDiskParse_Lanzou,
      /**
       * 蓝奏云优享
       */
      lanzouyx: NetDiskParse_Lanzouyx,
      /**
       * 天翼云
       * + 开发文档：https://id.dlife.cn/html/api_detail_696.html
       */
      tianyiyun: NetDiskParse_Tianyiyun,
      /**
       * 文叔叔
       */
      wenshushu: NetDiskParse_Wenshushu,
      /**
       * 123盘
       */
      _123pan: NetDiskParse_123pan,
      /**
       * 坚果云
       */
      jianguoyun: NetDiskParse_Jianguoyun,
      /**
       * 奶牛快传
       * 感谢：https://github.com/qaiu/netdisk-fast-download
       */
      nainiu: NetDiskParse_nainiu,
      /**
       * UC网盘
       */
      uc: NetDiskParse_UC,
      /**
       * 阿里云盘
       */
      aliyun: NetDiskParse_Aliyun,
      /**
       * 城通网盘
       *
       * + https://github.com/qinlili23333/ctfileGet
       */
      chengtong: NetDiskParse_Chengtong,
      /**
       * BT磁力
       *
       * @link https://whatslink.info/
       */
      magnet: NetDiskParse_magnet,
      /**
       * ed2k
       *
       * @link https://whatslink.info/
       */
      ed2k: NetDiskParse_ed2k
    }
  };
  const NetDiskHandlerUtil = {
    /**
     * 替换文字
     * @param text 需要替换的文字
     * @param pattern 需要替换的文字的正则表达式
     * @param newText 替换为的文字
     */
    replaceText(text, pattern, newText) {
      if (Array.isArray(pattern)) {
        for (const patternItem of pattern) {
          text = text.replace(patternItem, newText);
        }
      } else {
        text = text.replace(pattern, newText);
      }
      return text;
    }
  };
  const NetDiskLinkClickModeUtils = {
    /**
     * 获取用于跳转的url
     * @param handlerConfig 配置
     */
    getBlankUrl(handlerConfig) {
      let ruleConfig = handlerConfig.debugConfig?.config ?? NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let blankUrl = ruleConfig.blank;
      if (handlerConfig.shareCode) {
        blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
          shareCode: handlerConfig.shareCode
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: blank`,
            "作用: 用于点击跳转的链接",
            "备注: 对shareCode进行参数替换",
            `结果: ${blankUrl}`
          ]
        });
      }
      if (handlerConfig.accessCode && handlerConfig.accessCode !== "") {
        blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
          accessCode: handlerConfig.accessCode
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: blank`,
            "作用: 用于点击跳转的链接",
            "备注: 对accessCode进行参数替换",
            `结果: ${blankUrl}`
          ]
        });
      } else {
        blankUrl = NetDiskHandlerUtil.replaceText(
          blankUrl,
          NetDisk.$extraRule.noAccessCodeRegExp,
          ""
        );
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: 内置的noAccessCodeRegExp`,
            "作用: 因accessCode为空，使用该正则去除不需要的字符串",
            `结果: ${blankUrl}`
          ]
        });
      }
      if (ruleConfig.paramMatch) {
        let currentDict = NetDisk.$match.matchedInfo.get(handlerConfig.ruleKeyName).get(handlerConfig.shareCode);
        let matchText = handlerConfig.debugConfig?.matchText || currentDict.matchText;
        let paramMatchArray = matchText.match(ruleConfig.paramMatch);
        let replaceParamData = {};
        if (paramMatchArray) {
          for (let index = 0; index < paramMatchArray.length; index++) {
            replaceParamData[`$${index}`] = paramMatchArray[index];
          }
        }
        blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, replaceParamData);
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: paramMatch`,
            `作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
            `参数: ` + JSON.stringify(replaceParamData, void 0, 4),
            `结果: ${blankUrl}`
          ]
        });
      }
      return blankUrl;
    },
    /**
     * 获取用于复制到剪贴板的网盘信息
     * @param handlerConfig 配置
     */
    getCopyUrlInfo(handlerConfig) {
      let ruleConfig = handlerConfig.debugConfig?.config ?? NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let copyUrl = ruleConfig["copyUrl"];
      if (handlerConfig.shareCode) {
        copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
          shareCode: handlerConfig.shareCode
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: copyUrl`,
            "作用: 用于复制到剪贴板的链接",
            "备注: 对shareCode进行参数替换",
            `结果: ${copyUrl}`
          ]
        });
      }
      if (handlerConfig.accessCode && handlerConfig.accessCode !== "") {
        copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
          accessCode: handlerConfig.accessCode
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: copyUrl`,
            "作用: 用于复制到剪贴板的链接",
            "备注: 对accessCode进行参数替换",
            `结果: ${copyUrl}`
          ]
        });
      } else {
        copyUrl = NetDiskHandlerUtil.replaceText(
          copyUrl,
          NetDisk.$extraRule.noAccessCodeRegExp,
          ""
        );
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: 内置的noAccessCodeRegExp`,
            "作用: 因accessCode为空，使用该正则去除不需要的字符串",
            `结果: ${copyUrl}`
          ]
        });
      }
      if (ruleConfig.paramMatch) {
        let currentDict = NetDisk.$match.matchedInfo.get(handlerConfig.ruleKeyName).get(handlerConfig.shareCode);
        let matchText = handlerConfig.debugConfig?.matchText || currentDict.matchText;
        let paramMatchArray = matchText.match(ruleConfig.paramMatch);
        let replaceParamData = {};
        if (paramMatchArray) {
          for (let index = 0; index < paramMatchArray.length; index++) {
            replaceParamData[`$${index}`] = paramMatchArray[index];
          }
        }
        copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, replaceParamData);
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: paramMatch`,
            `作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
            `参数: ` + JSON.stringify(replaceParamData, void 0, 4),
            `结果: ${copyUrl}`
          ]
        });
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的copyUrl: " + copyUrl
      });
      return copyUrl;
    }
  };
  const NetDiskLinkClickMode = {
    /**
     * 复制到剪贴板
     * @param ruleKeyName 规则键名
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 提取码
     * @param toastText 复制成功的提示的文字
     */
    copy(ruleKeyName, ruleIndex, shareCode, accessCode, toastText = "已复制") {
      utils.setClip(
        NetDiskLinkClickModeUtils.getCopyUrlInfo({
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode
        })
      ).then((status) => {
        if (status) {
          Qmsg.success(toastText);
        } else {
          Qmsg.error("执行复制失败", { consoleLogContent: true });
        }
      }).catch(() => {
        Qmsg.error("执行复制失败", { consoleLogContent: true });
      });
    },
    /**
     * 链接解析
     * @param ruleKeyName 规则键名
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 提取码
     */
    async parseFile(ruleKeyName, ruleIndex, shareCode, accessCode) {
      log.success(`链接解析：`, [...arguments]);
      if (NetDiskParse.rule[ruleKeyName]) {
        let parseInst = new NetDiskParse.rule[ruleKeyName]();
        const netDiskInfo = {
          ruleIndex,
          shareCode,
          accessCode: accessCode ?? ""
        };
        parseInst.ruleIndex = netDiskInfo.ruleIndex;
        parseInst.shareCode = netDiskInfo.shareCode;
        parseInst.accessCode = netDiskInfo.accessCode;
        log.info(["文件解析：", netDiskInfo]);
        await parseInst.init(netDiskInfo);
      } else {
        log.error(`${ruleKeyName} 未配置解析函数`, [
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode
        ]);
        Qmsg.error("该链接未配置解析函数");
      }
    },
    /**
     * 新标签页打开
     * @param url 跳转的网址
     * @param ruleKeyName 规则键名
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 提取码
     * @param isOpenInBackEnd 是否使用后台打开，默认false
     */
    openBlankUrl(url, ruleKeyName, ruleIndex, shareCode, accessCode, isOpenInBackEnd = false) {
      log.success(`新标签页打开${isOpenInBackEnd ? "（后台打开）" : ""}`, [
        ...arguments
      ]);
      if (NetDiskAutoFillAccessCode.$data.enable) {
        NetDiskAutoFillAccessCode.addValue({
          url,
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode,
          time: Date.now()
        });
      }
      if (NetDiskFilterScheme.isForwardBlankLink(ruleKeyName)) {
        url = NetDiskFilterScheme.parseDataToSchemeUri(ruleKeyName, url);
      }
      $("meta[name='referrer']")?.setAttribute("content", "no-referrer");
      let openUrl = () => {
        if (isOpenInBackEnd) {
          _GM_openInTab(url, {
            active: false
          });
        } else {
          try {
            let blankWindow = window.open(url, "_blank");
            if (blankWindow) {
              blankWindow.focus();
            }
          } catch (error) {
            log.error(error, url);
            let $blank = domUtils.createElement("a");
            $blank.setAttribute("href", url);
            $blank.setAttribute("target", "_blank");
            $blank.click();
            $blank.remove();
          }
        }
      };
      if (utils.isNotNull(accessCode) && NetDiskRuleData.linkClickMode_openBlank.openBlankWithCopyAccessCode(
        ruleKeyName
      )) {
        utils.setClip(accessCode).then(() => {
          openUrl();
        });
      } else {
        openUrl();
      }
    },
    /**
     * 将链接转为Scheme格式并打开
     * @param ruleKeyName 规则键名
     * @param ruleIndex 规则的索引下标
     * @param shareCode
     * @param accessCode
     */
    openBlankWithScheme(ruleKeyName, ruleIndex, shareCode, accessCode) {
      log.success("scheme新标签页打开", [...arguments]);
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode
      });
      url = NetDiskFilterScheme.parseDataToSchemeUri(ruleKeyName, url);
      window.open(url, "_blank");
    }
  };
  const NetDiskCheckLinkValidity_baidu = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "baidu",
        ruleIndex,
        shareCode,
        accessCode
      });
      let response = await httpx.get(url, {
        headers: {
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36`,
          Host: "pan.baidu.com",
          Referer: `https://pan.baidu.com/share/init?surl=${shareCode}&pwd=${accessCode}`,
          "sec-ch-ua": '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
          Origin: "https://pan.baidu.com"
        },
        ...NetDiskCheckLinkValidityRequestOption
      });
      let responseText = response.data.responseText;
      let finalUrl = response.data.finalUrl;
      if (typeof finalUrl === "string") {
        let finalUrlInstance = new URL(finalUrl);
        if (finalUrlInstance.hostname !== "pan.baidu.com") {
          return {
            ...NetDiskCheckLinkValidity.status.verify,
            msg: `<a href='${finalUrl}' target='_blank' style="color: red;">触发百度安全验证</a>`,
            data: response
          };
        }
      }
      if (!response.status) {
        if (utils.isNull(responseText)) {
          return {
            ...NetDiskCheckLinkValidity.status.networkError,
            data: response
          };
        }
      }
      if (response.data.finalUrl.includes("404.html")) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      if (responseText.includes("过期时间：")) {
        return {
          ...NetDiskCheckLinkValidity.status.success,
          data: response
        };
      } else if (responseText.includes("输入提取")) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data: response
        };
      } else if (responseText.includes("不存在") || responseText.includes("已失效")) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data: response
        };
      } else {
        return {
          ...NetDiskCheckLinkValidity.status.unknown,
          data: response
        };
      }
    }
  };
  const NetDiskCheckLinkValidity_lanzou = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "lanzou",
        ruleIndex,
        shareCode,
        accessCode
      });
      let urlInst = new URL(url);
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: urlInst.hostname,
          Origin: urlInst.origin,
          Referer: url
        },
        ...NetDiskCheckLinkValidityRequestOption
      });
      if (!response.status) {
        if (response.type === "ontimeout") {
          return {
            ...NetDiskCheckLinkValidity.status.networkError,
            data: response
          };
        }
      }
      let responseText = response.data.responseText;
      if (utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data: response,
          tipMsg: "响应数据为空"
        };
      } else if (responseText.includes("输入密码")) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data: response
        };
      } else if (responseText.includes("来晚啦") || responseText.includes("不存在") || responseText.includes("div>文件链接失效，请获取新链接</div>")) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data: response
        };
      } else {
        if (response.status) {
          return {
            ...NetDiskCheckLinkValidity.status.success,
            data: response
          };
        } else {
          return {
            ...NetDiskCheckLinkValidity.status.unknown,
            data: response,
            tipMsg: response.msg
          };
        }
      }
    }
  };
  const NetDiskCheckLinkValidity_lanzouyx = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let LanZouYX = new NetDiskParse.rule.lanzouyx();
      LanZouYX.shareCodeId = LanZouYX.getDecodeShareCodeId(shareCode);
      let timestamp = LanZouYX.getEncodeTimeStamp();
      let uuid = LanZouYX.getEncodeUUID();
      let response = await httpx.post(
        `https://api.ilanzou.com/unproved/recommend/list?${utils.toSearchParamsStr(
        {
          devType: LanZouYX.$data.devType,
          devModel: LanZouYX.$data.devModel,
          uuid,
          extra: LanZouYX.$data.extra,
          timestamp,
          code: accessCode,
          shareId: shareCode,
          type: LanZouYX.$data.type,
          offset: LanZouYX.$data.offset,
          limit: LanZouYX.$data.limit
        }
      )}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.ilanzou.com",
            Referer: "https://www.ilanzou.com/",
            "Sec-Fetch-Site": "same-site",
            Host: "api.ilanzou.com",
            "User-Agent": utils.getRandomPCUA()
          },
          responseType: "json",
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      if (!response.status) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let data = utils.toJSON(response.data.responseText);
      log.success("获取链接信息：", data);
      if (data["code"] !== 200) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data
        };
      }
      if (!data["list"].length) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data
      };
    }
  };
  const NetDiskCheckLinkValidity_tianyiyun = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.post(
        "https://api.cloud.189.cn/open/share/getShareInfoByCodeV2.action",
        {
          data: `shareCode=${shareCode}`,
          headers: {
            Accept: "application/json;charset=UTF-8",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": utils.getRandomPCUA(),
            "Sign-Type": 1,
            Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
            Origin: "https://cloud.189.cn"
          },
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      let responseText = response.data.responseText;
      if (!response.status && utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      if (responseText.includes("ShareInfoNotFound") || responseText.includes("ShareNotFound") || responseText.includes("FileNotFound") || responseText.includes("ShareAuditWaiting") || responseText.includes("ShareExpiredError") || responseText.includes("ShareAuditNotPass")) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data: response
        };
      }
      if (responseText.includes("needAccessCode")) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data: response
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data: response
      };
    }
  };
  const NetDiskCheckLinkValidity_aliyun = {
    async init(netDiskInfo) {
      const { shareCode } = netDiskInfo;
      let response = await httpx.post(
        "https://api.aliyundrive.com/adrive/v3/share_link/get_share_by_anonymous?share_id=" + shareCode,
        {
          data: JSON.stringify({
            share_id: shareCode
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "User-Agent": utils.getRandomPCUA(),
            Referer: "https://www.aliyundrive.com/",
            Origin: "https://www.aliyundrive.com"
          },
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      let data = utils.toJSON(response.data.responseText);
      if (!response.status && utils.isNull(data)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      if (data["code"] === "ParamFlowException" || data["code"] === "NotFound.ShareLink" || data["code"] === "ShareLink.Cancelled") {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data
        };
      } else if (data["file_count"] === 0 || data["file_infos"]?.length === 0) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data
      };
    }
  };
  const NetDiskCheckLinkValidity_wenshushu = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.post(
        "https://www.wenshushu.cn/ap/task/mgrtask",
        {
          data: JSON.stringify({
            tid: shareCode
          }),
          headers: {
            "Content-Type": "application/json",
            "User-Agent": utils.getRandomPCUA(),
            "x-token": "wss:7pmakczzw6i",
            Host: "www.wenshushu.cn",
            Origin: "https://www.wenshushu.cn",
            Referer: NetDiskLinkClickModeUtils.getBlankUrl({
              ruleKeyName: "wenshushu",
              ruleIndex,
              shareCode,
              accessCode
            })
          },
          responseType: "json",
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (data.code !== 0) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data
      };
    }
  };
  const NetDiskCheckLinkValidity_nainiu = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.get(
        `https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${shareCode}`,
        {
          headers: {
            "User-Agent": utils.getRandomPCUA(),
            Host: "cowtransfer.com",
            Origin: "https://cowtransfer.com",
            Referer: "https://cowtransfer.com/"
          },
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (data.code != "0000") {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data
        };
      }
      if (data.data.needPassword && data.data.needPassword) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data
      };
    }
  };
  const NetDiskCheckLinkValidity_123pan = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.get(
        "https://www.123pan.com/api/share/info?shareKey=" + shareCode,
        {
          headers: {
            "User-Agent": utils.getRandomPCUA(),
            Host: "www.123pan.com",
            Origin: "https://www.123pan.com",
            Referer: "https://www.123pan.com/"
          },
          responseType: "json",
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (response.data.responseText.includes("分享页面不存在") || data["code"] !== 0) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data
        };
      }
      if (data["data"]["HasPwd"]) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data
      };
    }
  };
  const NetDiskCheckLinkValidity_weiyun = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "weiyun",
        ruleIndex,
        shareCode,
        accessCode
      });
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "share.weiyun.com",
          Origin: "https://share.weiyun.com",
          Referer: url
        },
        ...NetDiskCheckLinkValidityRequestOption
      });
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let responseText = response.data.responseText;
      if (responseText.includes("已删除") || responseText.includes("已被删除") || responseText.includes("已经删除") || responseText.includes("违反相关法规") || responseText.includes("已过期") || responseText.includes("目录无效")) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data: response
        };
      }
      if (responseText.includes('"need_pwd":1') || responseText.includes('"pwd":"') && !responseText.includes('"pwd":""')) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data: response
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data: response
      };
    }
  };
  const NetDiskCheckLinkValidity_xunlei = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let postResponse = await httpx.post(
        "https://xluser-ssl.xunlei.com/v1/shield/captcha/init",
        {
          data: JSON.stringify({
            client_id: "Xqp0kJBXWhwaTpB6",
            device_id: "925b7631473a13716b791d7f28289cad",
            action: "get:/drive/v1/share",
            meta: {
              package_name: "pan.xunlei.com",
              client_version: "1.45.0",
              captcha_sign: "1.fe2108ad808a74c9ac0243309242726c",
              timestamp: "1645241033384"
            }
          }),
          headers: {
            "User-Agent": utils.getRandomPCUA(),
            Host: "pan.xunlei.com",
            Referer: NetDiskLinkClickModeUtils.getBlankUrl({
              ruleKeyName: "xunlei",
              ruleIndex,
              shareCode,
              accessCode
            }),
            Origin: "https://pan.xunlei.com"
          },
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      if (!postResponse.status && utils.isNull(postResponse.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: postResponse
        };
      }
      let postResponseData = utils.toJSON(postResponse.data.responseText);
      let token = postResponseData["captcha_token"];
      let getResponse = await httpx.get(
        "https://api-pan.xunlei.com/drive/v1/share?share_id=" + shareCode,
        {
          headers: {
            "User-Agent": utils.getRandomPCUA(),
            Host: "pan.xunlei.com",
            Referer: NetDiskLinkClickModeUtils.getBlankUrl({
              ruleKeyName: "xunlei",
              ruleIndex,
              shareCode,
              accessCode
            }),
            Origin: "https://pan.xunlei.com",
            "x-captcha-token": token,
            "x-client-id": "Xqp0kJBXWhwaTpB6",
            "x-device-id": "925b7631473a13716b791d7f28289cad"
          },
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      if (!getResponse.status && utils.isNull(getResponse.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: [postResponse, getResponse]
        };
      }
      let responseText = getResponse.data.responseText;
      if (responseText.includes("NOT_FOUND") || responseText.includes("SENSITIVE_RESOURCE") || responseText.includes("EXPIRED") || responseText.includes("DELETED")) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data: getResponse
        };
      } else if (responseText.includes("PASS_CODE_EMPTY")) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data: getResponse
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data: getResponse
      };
    }
  };
  const NetDiskCheckLinkValidity_chengtong = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let blankUrl = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "chengtong",
        ruleIndex,
        shareCode,
        accessCode
      });
      let blankUrlObj = new URL(blankUrl);
      const path = blankUrlObj.pathname.split("/")[1].trim();
      let url = "";
      if (path === "f" || path === "file") {
        url = `https://webapi.ctfile.com/getfile.php?path=${path}&f=${shareCode}&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
      } else if (path === "d" || path === "dir") {
        url = `https://webapi.ctfile.com/getdir.php?path=${path}&d=${shareCode}&folder_id=&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
      } else {
        log.warn("未知path", [ruleIndex, shareCode, accessCode]);
        return {
          ...NetDiskCheckLinkValidity.status.unknown,
          data: null
        };
      }
      let response = await httpx.get(url, {
        headers: {
          Host: "webapi.ctfile.com",
          Origin: "https://url95.ctfile.com",
          Referer: blankUrl,
          Accept: "application/json, text/javascript, */*; q=0.01",
          "User-Agent": utils.getRandomPCUA()
        },
        ...NetDiskCheckLinkValidityRequestOption
      });
      let responseText = response.data.responseText;
      if (!response.status && utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let data = utils.toJSON(responseText);
      if (data["code"] === 200) {
        return {
          ...NetDiskCheckLinkValidity.status.success,
          data
        };
      }
      if (data["code"] === 401) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data
        };
      }
      if (data["code"] === 404 || data["code"] === 503 || data["code"] === 504) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.unknown,
        data
      };
    }
  };
  const NetDiskCheckLinkValidity_kuake = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.post(
        "https://drive.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc",
        {
          data: JSON.stringify({
            pwd_id: shareCode,
            passcode: ""
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
            "User-Agent": utils.getRandomPCUA(),
            Origin: "https://pan.quark.cn",
            Referer: NetDiskLinkClickModeUtils.getBlankUrl({
              ruleKeyName: "kuake",
              ruleIndex,
              shareCode,
              accessCode
            })
          },
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (data.message.includes("需要提取码")) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data
        };
      } else if (data.message.includes("ok")) {
        let stoken = data["data"]["stoken"];
        let getSearchParams = {
          // pr: "ucpro",
          // fr: "pc",
          // uc_param_str: "",
          pwd_id: shareCode,
          stoken,
          // pdir_fid: 0,
          // force: 0,
          // _page: 1,
          // _size: 50,
          // _fetch_banner: 1,
          _fetch_share: 1,
          // _fetch_total: 1,
          // _sort: "file_type:asc,updated_at:desc",
          // __dt: 2283,
          __t: Date.now()
        };
        let getResponse = await httpx.get(
          `https://drive-h.quark.cn/1/clouddrive/share/sharepage/detail?${utils.toSearchParamsStr(
          getSearchParams
        )}`,
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              Origin: "https://pan.quark.cn",
              Referer: "https://pan.quark.cn/",
              "User-Agent": utils.getRandomPCUA()
            },
            ...NetDiskCheckLinkValidityRequestOption
          }
        );
        if (!getResponse.status || utils.isNull(getResponse.data.responseText)) {
          return {
            ...NetDiskCheckLinkValidity.status.networkError,
            data: getResponse
          };
        }
        let detailJSON = utils.toJSON(getResponse.data.responseText);
        if (detailJSON["data"]["share"]["status"] == 1) {
          if (detailJSON["data"]["share"]["partial_violation"]) {
            return {
              ...NetDiskCheckLinkValidity.status.partialViolation,
              data: [data, detailJSON]
            };
          } else {
            return {
              ...NetDiskCheckLinkValidity.status.success,
              data: [data, detailJSON]
            };
          }
        } else {
          return {
            ...NetDiskCheckLinkValidity.status.failed,
            data: [data, detailJSON]
          };
        }
      } else {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data
        };
      }
    }
  };
  const NetDiskCheckLinkValidity_jianguoyun = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "jianguoyun",
        ruleIndex,
        shareCode,
        accessCode
      });
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "www.jianguoyun.com",
          Referer: NetDiskLinkClickModeUtils.getBlankUrl({
            ruleKeyName: "jianguoyun",
            ruleIndex,
            shareCode,
            accessCode
          }),
          Origin: "https://www.jianguoyun.com"
        },
        ...NetDiskCheckLinkValidityRequestOption
      });
      let responseText = response.data.responseText;
      if (!response.status && utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      if (responseText.includes("<h1>啊噢！")) {
        return {
          ...NetDiskCheckLinkValidity.status.failed,
          data: response
        };
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data: response
      };
    }
  };
  const NetDiskCheckLinkValidity_onedrive = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "onedrive",
        ruleIndex,
        shareCode,
        accessCode
      });
      let urlObj = new URL(url);
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: urlObj.hostname,
          Referer: url,
          Origin: urlObj.origin
        },
        ...NetDiskCheckLinkValidityRequestOption
      });
      if (!response.status) {
        let status = response.data?.status?.toString();
        if (status === "429") {
          return {
            ...NetDiskCheckLinkValidity.status.networkError,
            data: response
          };
        } else if (status === "404") {
          return {
            ...NetDiskCheckLinkValidity.status.failed,
            data: response
          };
        }
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let responseText = response.data.responseText;
      if (utils.isNotNull(responseText)) {
        try {
          let respDOM = domUtils.parseHTML(responseText, true, true);
          let title = respDOM.querySelector("title")?.innerHTML;
          if (title?.includes("错误")) {
            return {
              ...NetDiskCheckLinkValidity.status.failed,
              data: response
            };
          }
        } catch (error) {
        }
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data: response
      };
    }
  };
  const NetDiskCheckLinkValidity_uc = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.get("https://drive.uc.cn/s/" + shareCode, {
        headers: {
          "User-Agent": utils.getRandomAndroidUA(),
          Host: "drive.uc.cn",
          Referer: NetDiskLinkClickModeUtils.getBlankUrl({
            ruleKeyName: "uc",
            ruleIndex,
            shareCode,
            accessCode
          }),
          Origin: "https://drive.uc.cn"
        },
        ...NetDiskCheckLinkValidityRequestOption
      });
      let responseText = response.data.responseText;
      if (!response.status && utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let responseDocument = domUtils.parseHTML(responseText, true, true);
      if (responseDocument.querySelector(".h5-page-main")) {
        let $h5PageMain = responseDocument.querySelector(".h5-page-main");
        let errorText = $h5PageMain.textContent || $h5PageMain.innerText;
        if (errorText.includes("失效") || errorText.includes("不存在") || errorText.includes("违规") || errorText.includes("删除")) {
          return {
            ...NetDiskCheckLinkValidity.status.failed,
            data: response
          };
        } else {
          return {
            ...NetDiskCheckLinkValidity.status.unknown,
            data: response
          };
        }
      } else if (responseDocument.querySelector(".main-body .input-wrap input")) {
        return {
          ...NetDiskCheckLinkValidity.status.needAccessCode,
          data: response
        };
      } else {
        return {
          ...NetDiskCheckLinkValidity.status.success,
          data: response
        };
      }
    }
  };
  const NetDiskCheckLinkValidity_115pan = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.get(
        `https://webapi.115.com/share/snap?share_code=${shareCode}&offset=0&limit=20&receive_code=&cid=`,
        {
          headers: {
            Accept: "application/json, text/javascript, */*;",
            "User-Agent": utils.getRandomPCUA(),
            Host: "webapi.115.com",
            Referer: "https://115.com/",
            Origin: "https://115.com"
          },
          ...NetDiskCheckLinkValidityRequestOption
        }
      );
      if (!response.status) {
        if (utils.isNull(response.data.responseText)) {
          return {
            ...NetDiskCheckLinkValidity.status.failed,
            data: response
          };
        }
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (data.state) {
        return {
          ...NetDiskCheckLinkValidity.status.success,
          data
        };
      }
      if (typeof data.error === "string") {
        if (data.error.includes("访问码")) {
          return {
            ...NetDiskCheckLinkValidity.status.needAccessCode,
            data
          };
        } else if (data.error.includes("链接") || data.error.includes("分享已取消")) {
          return {
            ...NetDiskCheckLinkValidity.status.failed,
            data
          };
        }
      }
      return {
        ...NetDiskCheckLinkValidity.status.unknown,
        data
      };
    }
  };
  const NetDiskCheckLinkValidity_360yunpan = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = "https://www.yunpan.com/lk/surl_" + shareCode;
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA()
        },
        responseType: "json",
        ...NetDiskCheckLinkValidityRequestOption
      });
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidity.status.networkError,
          data: response
        };
      }
      let responseDoc = domUtils.parseHTML(
        response.data.responseText,
        true,
        true
      );
      let $errorMsg = responseDoc.querySelector(
        ".page-error .error-msg"
      );
      if ($errorMsg) {
        let errorMsg = domUtils.text($errorMsg);
        if (errorMsg.includes("分享链接已失效")) {
          return {
            ...NetDiskCheckLinkValidity.status.failed,
            data: response
          };
        } else {
          return {
            ...NetDiskCheckLinkValidity.status.unknown,
            data: response,
            tipMsg: errorMsg
          };
        }
      }
      return {
        ...NetDiskCheckLinkValidity.status.success,
        data: response
      };
    }
  };
  const NetDiskCheckLinkValidityStatus = {
    /**
     * 验证中
     */
    loading: {
      code: 1,
      msg: "验证中...",
      setIcon($el) {
        domUtils.html($el, __pops.config.iconSVG.loading);
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid(
          $el,
          "loading",
          msg ?? this.msg
        );
        this.setIcon($el);
      }
    },
    /**
     * 验证成功
     */
    success: {
      code: 200,
      msg: "有效",
      setIcon($el) {
        domUtils.html(
          $el,
          /*html*/
          `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M874.119618 149.859922A510.816461 510.816461 0 0 0 511.997 0.00208a509.910462 509.910462 0 0 0-362.119618 149.857842c-199.817789 199.679789-199.817789 524.581447 0 724.260236a509.969462 509.969462 0 0 0 362.119618 149.857842A508.872463 508.872463 0 0 0 874.119618 874.120158c199.836789-199.679789 199.836789-524.581447 0-724.260236zM814.94268 378.210681L470.999043 744.132295a15.359984 15.359984 0 0 1-5.887994 4.095996c-1.751998 1.180999-2.913997 2.362998-5.276994 2.913997a34.499964 34.499964 0 0 1-13.469986 2.914997 45.547952 45.547952 0 0 1-12.897986-2.303998l-4.095996-2.363997a45.291952 45.291952 0 0 1-7.009992-4.095996l-196.902793-193.789796a34.126964 34.126964 0 0 1-10.555989-25.186973c0-9.37399 3.583996-18.74698 9.98399-25.186974a36.429962 36.429962 0 0 1 50.372947 0l169.98382 167.423824L763.389735 330.220732a37.059961 37.059961 0 0 1 50.371947-1.732998 33.647965 33.647965 0 0 1 11.165988 25.186973 35.544963 35.544963 0 0 1-9.98399 24.575974v-0.04z m0 0"></path>
				</svg>
				`
        );
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid(
          $el,
          "success",
          msg ?? this.msg
        );
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      }
    },
    /**
     * 网络异常
     */
    networkError: {
      code: -404,
      msg: "网络异常",
      setIcon($el) {
        domUtils.html(
          $el,
          /*html*/
          `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M511.808 692.224c-18.048 0-35.136 3.968-50.432 11.392-25.472 12.416-46.528 33.92-57.792 60.032-5.632 14.144-9.024 29.504-9.024 45.952 0 65.152 52.672 117.824 117.248 117.824 65.28 0 117.952-52.672 117.952-117.824 0-64.64-52.672-117.376-117.952-117.376z m0 178.496c-33.408 0-60.608-27.712-60.608-61.12 0-33.472 27.2-60.672 60.608-60.672s61.248 27.2 61.248 60.672c0 33.472-27.776 61.12-61.248 61.12zM286.784 661.632c3.968 3.392 8.512 5.632 12.992 5.632L438.08 523.328c-60.032 14.72-114.432 49.344-155.328 98.624-9.536 11.84-7.872 30.08 4.032 39.68zM622.912 534.656l-43.008 45.312c45.312 13.056 86.72 40.256 117.376 78.208 5.632 6.784 13.568 10.24 22.08 10.24 6.272 0 12.416-2.24 18.176-6.784 11.904-9.6 13.568-27.84 3.392-39.68-31.808-39.104-72.704-69.12-118.016-87.296zM511.808 391.168c17.024 0 33.408 1.216 49.856 3.456l47.68-49.856c-31.744-6.848-64.064-10.24-97.536-10.24-142.784 0-277.12 63.488-367.232 174.656-10.24 11.904-8.576 30.08 3.904 39.68 5.12 4.48 11.328 6.784 18.176 6.784 7.936 0 15.872-3.968 21.568-10.816 79.872-97.536 197.76-153.664 323.584-153.664zM751.616 400.32l-40.256 41.92c47.04 24.96 89.536 60.032 124.096 102.592 10.24 12.48 27.84 14.208 40.256 3.968 11.968-9.6 13.632-27.84 3.968-39.68-36.16-44.8-79.872-81.088-128.064-108.8zM705.152 244.928l42.56-44.672c-73.664-28.992-153.6-44.224-235.904-44.224-196.672 0-380.864 87.872-505.6 239.744-9.6 12.48-7.872 30.08 3.968 40.256 5.632 3.968 11.904 6.208 18.112 6.208 7.936 0 16.448-3.392 22.144-10.176C163.84 292.608 332.096 212.672 511.808 212.672c66.944 0 132.16 10.752 193.344 32.256zM1017.472 395.776c-40.192-49.92-87.296-92.416-139.456-126.976l-39.68 41.344C889.408 343.04 935.36 383.808 973.888 432c9.6 11.904 27.776 13.568 39.68 3.968 11.84-10.176 14.144-27.712 3.904-40.192zM937.408 104.512c-11.328-10.944-29.312-10.496-40.064 0.832L179.008 854.72c-10.816 11.328-10.496 29.248 0.896 40.064 5.44 5.312 12.48 7.872 19.584 7.872 7.488 0 14.848-2.88 20.416-8.704L938.24 144.576c10.88-11.328 10.496-29.248-0.832-40.064z"></path>
				</svg>
				`
        );
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid($el, "error", msg ?? this.msg);
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      }
    },
    /**
     * 触发安全验证
     */
    verify: {
      code: -405,
      msg: "触发安全验证",
      setIcon($el) {
        domUtils.html(
          $el,
          /*html*/
          `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path 
						fill="currentColor"
						d="M514.389 1005.60899999c-269.967 0-489.59499999-219.642-489.595-489.59499999S244.42199999 26.405 514.389 26.405 1003.984 246.047 1003.984 516s-219.62800001 489.60899999-489.595 489.60900001z m0-938.24399999C267.00400001 67.365 65.754 268.615 65.754 516s201.264 448.63499999 448.635 448.635S963.024 763.385 963.024 516 761.774 67.365 514.389 67.365z" p-id="9895"></path><path d="M245.993 621.56800001c41.014-8.138 86.112-18.03600001 135.264-29.71000001-0.355 14.145-0.177 26.69199999 0.532 37.65499999-40.318 8.493-82.93 18.92400001-127.836 31.29400001l-7.959-39.23900001z m78.506-261.50200001l-12.206 145.872h53.57500001l13.78999998-178.763H259.249v-36.073h160.727l-16.438 214.821h33.423c-2.471 74.61499999-4.779 135.973-6.895 184.06100002-1.065 53.754-24.399 80.623-70.01399999 80.62299998-19.101 0-41.547-0.53200001-67.36500001-1.598-1.775-13.079-4.06799999-27.047-6.895-41.902 25.46300001 3.181 48.087 4.779 67.898 4.779 24.753 0 37.834-15.033 39.253-45.084 2.11599999-38.898 3.891-87.163 5.31099998-144.807H270.951l16.971-181.945h36.577z m309.248-98.659l-10.076 16.971c42.789 76.03500001 95.833 131.373 159.13 166.025-11.318 14.145-20.685 26.528-28.112 37.13699999-62.231-45.971-112.981-101.30799999-152.235-166.02499998-36.073 64.006-86.466 121.474-151.17000001 172.38699999-6.363-9.18799999-15.21-20.33-26.52799998-33.423 70.369-48.797 124.30000001-113.158 161.77799999-193.086h47.213zM441.194 718.111h191.488c25.46300001-62.942 48.087-128.723 67.89800001-197.318l40.31799999 12.725c-20.862 63.297-42.96699999 124.832-66.301 184.593h93.361v36.60499999H441.19300001v-36.60499999z m27.047-169.73900001l37.137-11.67399999c17.32599998 50.217 31.82600002 94.945 43.5 134.198l-39.253 13.258c-11.674-45.261-25.46300001-90.522-41.383-135.78200001z m27.06099999-91.76399999h218.53500001v36.605H495.30200001v-36.605z m64.17100001 67.885l37.655-10.076c14.854 53.043 27.047 99.369 36.605 138.977l-38.72099999 11.141c-10.254-48.797-22.091-95.477-35.53900001-140.04300001z">
					</path>
				</svg>
				`
        );
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid(
          $el,
          "verify",
          msg ?? this.msg
        );
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      }
    },
    /**
     * 该链接已失效
     */
    failed: {
      code: 0,
      msg: "已失效",
      setIcon($el) {
        domUtils.html(
          $el,
          /*html*/
          `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="currentColor"
						d="M549.044706 512l166.189176-166.249412a26.383059 26.383059 0 0 0 0-36.98447 26.383059 26.383059 0 0 0-37.044706 0L512 475.015529l-166.249412-166.249411a26.383059 26.383059 0 0 0-36.98447 0 26.383059 26.383059 0 0 0 0 37.044706L475.015529 512l-166.249411 166.249412a26.383059 26.383059 0 0 0 0 36.98447 26.383059 26.383059 0 0 0 37.044706 0L512 548.984471l166.249412 166.249411a26.383059 26.383059 0 0 0 36.98447 0 26.383059 26.383059 0 0 0 0-37.044706L548.984471 512zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z"></path>
				</svg>
				`
        );
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid(
          $el,
          "failed",
          msg ?? this.msg
        );
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      }
    },
    /**
     * 该链接需要密码
     */
    needAccessCode: {
      code: 201,
      msg: "需要提取码",
      setIcon($el) {
        domUtils.html(
          $el,
          /*html*/
          `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M757.810429 373.751333 325.645708 373.751333l0-83.895759c0-103.694687 81.507362-184.922686 185.559183-184.922686 78.121242 0 146.053424 46.74565 173.062568 119.090329 3.865028 10.352789 15.384385 15.609513 25.742291 11.746532 10.351766-3.866051 15.609513-15.390525 11.744485-25.742291C688.844707 121.877815 606.198405 64.918545 511.204891 64.918545c-61.918211 0-119.246895 23.662933-161.423483 66.63156-41.3692 42.142819-64.151066 98.363262-64.151066 158.305469l0 83.895759-20.007683 0c-60.774155 0-110.042255 49.267077-110.042255 110.042255l0 366.139981c0 60.774155 49.267077 110.042255 110.042255 110.042255l492.187769 0c60.775178 0 110.042255-49.267077 110.042255-110.042255L867.852684 483.793588C867.852684 423.01841 818.585607 373.751333 757.810429 373.751333zM827.837318 849.933569c0 38.674834-31.352055 70.02689-70.02689 70.02689L265.62266 919.960459c-38.674834 0-70.02689-31.352055-70.02689-70.02689L195.59577 483.793588c0-38.674834 31.352055-70.02689 70.02689-70.02689l492.187769 0c38.674834 0 70.02689 31.352055 70.02689 70.02689L827.837318 849.933569z"></path>
					<path
					fill="currentColor"
					d="M509.715981 583.832002c-11.048637 0-20.007683 8.959046-20.007683 20.007683l0 110.042255c0 11.048637 8.958022 20.007683 20.007683 20.007683s20.007683-8.958022 20.007683-20.007683L529.723663 603.839685C529.723663 592.790024 520.765641 583.832002 509.715981 583.832002z"></path>
				</svg>
				`
        );
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid(
          $el,
          "needAccessCode",
          msg ?? this.msg
        );
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      }
    },
    /**
     * 存在部分违规文件
     */
    partialViolation: {
      code: 202,
      msg: "存在部分违规文件",
      setIcon($el) {
        domUtils.html(
          $el,
          /*html*/
          `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path 
					fill="currentColor"
					d="M954.963 810.267L543.112 96.919c-14.07-24.37-49.245-24.37-63.315 0L67.945 810.267c-14.07 24.37 3.518 54.832 31.657 54.832h823.703c28.141 0 45.728-30.463 31.658-54.832zM476.699 306.55c0-19.115 15.64-34.755 34.755-34.755 19.115 0 34.755 15.64 34.755 34.755v281.817c0 19.115-15.64 34.755-34.755 34.755-19.115 0-34.755-15.64-34.755-34.755V306.55z m34.755 445.293c-23.198 0-42.004-18.806-42.004-42.004s18.806-42.004 42.004-42.004c23.198 0 42.004 18.806 42.004 42.004s-18.806 42.004-42.004 42.004z"></path>
				</svg>`
        );
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid(
          $el,
          "partial-violation",
          msg ?? this.msg
        );
        this.setIcon($el);
      }
    },
    /**
     * 未知状态
     */
    unknown: {
      code: -200,
      msg: "未知检查情况",
      setIcon($el) {
        domUtils.html(
          $el,
          /*html*/
          `
				<svg viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M512.473172 1023.995242A511.814852 511.814852 0 0 1 313.545134 40.351073a512.244696 512.244696 0 0 1 398.855715 943.658633 508.815937 508.815937 0 0 1-199.927677 39.985536z m0-943.658634C274.559237 80.336608 80.629391 274.266455 80.629391 512.18039s193.929846 431.843781 431.843781 431.843781 431.843781-193.929846 431.843781-431.843781S751.386745 80.336608 512.473172 80.336608z"></path>
					<path
					fill="currentColor"
					d="M506.475342 716.10662a39.985535 39.985535 0 0 1-39.985536-39.985535v-76.972156c0-79.971071 64.976495-144.947566 144.947566-144.947565a77.971794 77.971794 0 0 0 0-155.943588H445.4974a56.979388 56.979388 0 0 0-56.979387 56.979388 39.985535 39.985535 0 0 1-79.971071 0c0-74.972879 60.977941-136.950458 136.950458-136.950459h164.940333c86.968539 0 157.942864 70.974325 157.942865 157.942865s-69.974687 157.942864-157.942865 157.942864a64.976495 64.976495 0 0 0-64.976494 64.976495v76.972156a39.985535 39.985535 0 0 1-38.985897 39.985535zM505.475703 742.097218a48.982281 48.982281 0 1 0 48.982281 48.982281 48.982281 48.982281 0 0 0-48.982281-48.982281z"></path>
				</svg>
				`
        );
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid(
          $el,
          "unknown",
          msg ?? this.msg
        );
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      }
    }
  };
  const AllCheckLinkValidityFunction = {
    baidu: NetDiskCheckLinkValidity_baidu,
    lanzou: NetDiskCheckLinkValidity_lanzou,
    lanzouyx: NetDiskCheckLinkValidity_lanzouyx,
    tianyiyun: NetDiskCheckLinkValidity_tianyiyun,
    // 和彩云校验已失效，需要验证参数
    // hecaiyun: NetDiskCheckLinkValidity_hecaiyun,
    aliyun: NetDiskCheckLinkValidity_aliyun,
    wenshushu: NetDiskCheckLinkValidity_wenshushu,
    nainiu: NetDiskCheckLinkValidity_nainiu,
    _123pan: NetDiskCheckLinkValidity_123pan,
    weiyun: NetDiskCheckLinkValidity_weiyun,
    xunlei: NetDiskCheckLinkValidity_xunlei,
    _115pan: NetDiskCheckLinkValidity_115pan,
    chengtong: NetDiskCheckLinkValidity_chengtong,
    kuake: NetDiskCheckLinkValidity_kuake,
    jianguoyun: NetDiskCheckLinkValidity_jianguoyun,
    onedrive: NetDiskCheckLinkValidity_onedrive,
    uc: NetDiskCheckLinkValidity_uc,
    "360yunpan": NetDiskCheckLinkValidity_360yunpan
  };
  const NetDiskCheckLinkValidityRequestOption = {
    // 有效性校验时，如果请求错误，禁止Qmsg弹出
    allowInterceptConfig: false,
    // 有效性校验时，如果请求错误，禁止Qmsg弹出
    onerror() {
    },
    // 有效性校验时，如果请求错误，禁止Qmsg弹出
    ontimeout() {
    }
  };
  const NetDiskCheckLinkValidity = {
    $data: {
      /** 是否正在消费中（验证有效性中） */
      isConsuming: false,
      /** 待检测有有效性的列表 */
      subscribe: []
    },
    /**
     * 网盘检查的状态码
     */
    status: NetDiskCheckLinkValidityStatus,
    /**
     * 所有的规则的校验函数
     */
    ruleCheckValidFunction: AllCheckLinkValidityFunction,
    /**
     * 校验链接的有效性，这里是用于订阅-消费
     * @param $urlBox
     * @param ruleKeyName
     * @param ruleIndex
     * @param shareCode
     * @param accessCode
     */
    async check($urlBox, ruleKeyName, ruleIndex, shareCode, accessCode) {
      this.$data.subscribe.push({
        $urlBox,
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode
      });
      if (this.$data.isConsuming) {
        return;
      }
      this.$data.isConsuming = true;
      for (let index = 0; index < this.$data.subscribe.length; index++) {
        const checkInfo = this.$data.subscribe[index];
        await this.checkLinkValidity(checkInfo, true);
        await utils.sleep(250);
        this.$data.subscribe.splice(index, 1);
        index--;
      }
      this.$data.isConsuming = false;
    },
    /**
     * 开始校验链接的有效性
     * @param checkInfo
     * @param isForceCheck 是否强制检测
     */
    async checkLinkValidity(checkInfo, isForceCheck) {
      const { $checkValidStatus } = NetDiskView.parseViewBoxElementInfo(
        checkInfo.$urlBox
      );
      if (this.isViewCheckValid($checkValidStatus) && !isForceCheck) {
        return;
      }
      this.setCheckStatusElementToolTip(checkInfo);
      let ruleKeyName = checkInfo.ruleKeyName;
      if (!NetDiskRuleData.function.checkLinkValidity(ruleKeyName)) {
        log.error("未开启checkLinkValidity功能", checkInfo);
        return;
      }
      let netDiskCheck = this.ruleCheckValidFunction[checkInfo.ruleKeyName];
      if (!netDiskCheck || netDiskCheck && typeof netDiskCheck.init !== "function") {
        log.error("没有配置该网盘的校验有效性", checkInfo);
        return;
      }
      this.status.loading.setView($checkValidStatus, checkInfo);
      let checkStatusResult = await netDiskCheck.init({
        ruleIndex: checkInfo.ruleIndex,
        shareCode: checkInfo.shareCode,
        accessCode: checkInfo.accessCode
      });
      if (!checkStatusResult) {
        log.error("该验证函数的返回值不是有效值", [checkStatusResult, checkInfo]);
        return;
      }
      checkStatusResult.setView(
        $checkValidStatus,
        checkInfo,
        checkStatusResult.tipMsg
      );
      if (checkStatusResult.data) {
        Reflect.set(
          $checkValidStatus,
          "data-httpx-response",
          checkStatusResult.data
        );
      }
    },
    /**
     * 添加重复检查的点击事件（只触发一次）
     * @param $ele 目标元素
     * @param checkInfo 检查信息
     */
    setViewAgainCheckClickEvent($ele, checkInfo) {
      domUtils.on(
        $ele,
        "click",
        void 0,
        () => {
          const { $urlBox, $link } = NetDiskView.parseViewBoxElementInfo($ele);
          const ruleInfo = NetDiskView.praseElementAttributeRuleInfo($link);
          let newCheckInfo = {
            $urlBox,
            ruleKeyName: ruleInfo.ruleKeyName,
            ruleIndex: ruleInfo.ruleIndex,
            shareCode: ruleInfo.shareCode,
            accessCode: ruleInfo.accessCode
          };
          this.checkLinkValidity(newCheckInfo, true);
        },
        { once: true }
      );
    },
    /**
     * 判断元素当前是否处于验证状态且验证是error或未验证状态
     *
     * 简而言之。验证成功的图标点击后将不触发验证请求
     * + true 已验证(成功/需要密码)
     * + false 尚未验证/验证超时/验证网络异常
     * @param $ele
     */
    isViewCheckValid($ele) {
      if (!$ele.hasAttribute("data-check-valid")) {
        return false;
      }
      if ($ele.getAttribute("data-check-valid") === "error") {
        return false;
      }
      return true;
    },
    /**
     * 设置当前的验证状态
     * @param $ele
     * @param value
     * @param msg
     */
    setViewCheckValid($ele, value, msg) {
      $ele.setAttribute("data-check-valid", value);
      $ele.setAttribute("data-msg", msg);
      Reflect.set($ele, "data-msg", msg);
    },
    /**
     * 取消设置当前的验证状态
     * @param $ele
     */
    removeViewCheckValid($ele) {
      $ele.removeAttribute("data-check-valid");
      $ele.removeAttribute("data-msg");
      Reflect.deleteProperty($ele, "data-msg");
    },
    /**
     * 判断状态码是成功的
     * @param statusInfo
     */
    isStatusSuccess(statusInfo) {
      if (Math.floor(statusInfo.code / 100) === 2) {
        return true;
      }
      return false;
    },
    /**
     * 根据code获取code的名字
     * @param statusInfo
     */
    getStatusName(statusInfo) {
      for (const statusName of Object.keys(NetDiskCheckLinkValidity.status)) {
        let statusNewInfo = this.status[statusName];
        if (statusInfo.code === statusNewInfo.code) {
          return statusName;
        }
      }
    },
    /**
     * 设置鼠标悬浮事件
     */
    setCheckStatusElementToolTip(checkInfo) {
      if (!NetDiskRuleData.function.checkLinlValidityHoverTip(checkInfo.ruleKeyName)) {
        return;
      }
      function getNetDiskStatus() {
        const { $checkValidStatus } = NetDiskView.parseViewBoxElementInfo(
          checkInfo.$urlBox
        );
        return $checkValidStatus;
      }
      let $netDiskStatus = getNetDiskStatus();
      if ($netDiskStatus.hasAttribute("data-pops-tooltip")) {
        return;
      }
      $netDiskStatus.setAttribute("data-pops-tooltip", "true");
      let queryMsg = ($el) => {
        let msgProp = Reflect.get($el, "data-msg");
        let msg = $el.getAttribute("data-msg");
        return msgProp ?? msg;
      };
      __pops.tooltip({
        target: $netDiskStatus,
        className: "github-tooltip",
        isFixed: true,
        content() {
          let msg = queryMsg($netDiskStatus);
          return msg;
        },
        showBeforeCallBack() {
          let msg = queryMsg($netDiskStatus);
          if (msg == null || typeof msg === "string" && msg.trim() === "") {
            return false;
          }
        },
        zIndex() {
          let maxZIndex = utils.getMaxZIndex(10);
          let popsMaxZIndex = __pops.config.InstanceUtils.getPopsMaxZIndex(10).zIndex;
          return utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
        }
      });
    }
  };
  const NetDiskRequire = {
    requiredFileMap: /* @__PURE__ */ new Map(),
    /**
     * 网络加载文件
     * @param url 网络文件路径
     * @param options
     */
    async file(url, options) {
      if (utils.isNull(url)) {
        log.error("NetDiskRequire.file的参数path为空", url);
        return false;
      }
      if (this.requiredFileMap.has(url)) {
        log.warn("NetDiskRequire.file的参数path已引入过", url);
        return true;
      }
      let getResp = await httpx.get(url, options);
      if (!getResp.status) {
        return false;
      }
      let jsText = getResp.data.responseText;
      let count = this.requiredFileMap.get(url);
      this.requiredFileMap.set(url, count++);
      log.info("加载js文件", url);
      _unsafeWindow.eval(
        `
		let exports = void 0;
		let module = void 0;
		let define = void 0;
		` + jsText
      );
      await utils.sleep(300);
      return true;
    }
  };
  const NetDiskUserRuleReplaceParam_matchRange_text = (key) => {
    return {
      "matchRange-text-before": NetDiskRuleData.matchRange_text.before(key).toString(),
      "matchRange-text-after": NetDiskRuleData.matchRange_text.after(key).toString()
    };
  };
  const NetDiskUserRuleReplaceParam_matchRange_html = (key) => {
    return {
      "matchRange-html-before": NetDiskRuleData.matchRange_html.before(key).toString(),
      "matchRange-html-after": NetDiskRuleData.matchRange_html.after(key).toString()
    };
  };
  const NetDiskWorkerUtils = {
    /**
     * 检索目标元素内所有可访问的ShadowRoot的所有节点的信息
     */
    depthQueryShadowRootAllNode($target) {
      let result = [];
      function queryShadowRoot($ele) {
        let $queryChildNodeList = Array.from($ele.querySelectorAll("*"));
        $queryChildNodeList.forEach(($childNode) => {
          if ($childNode.classList && $childNode.classList.contains("pops-shadow-container")) {
            return;
          }
          let $childNodeShadowRoot = $childNode.shadowRoot;
          if ($childNodeShadowRoot && $childNodeShadowRoot instanceof ShadowRoot) {
            result.push({
              shadowRoot: $childNodeShadowRoot,
              childNode: queryShadowRoot($childNodeShadowRoot)
            });
          }
        });
        return $queryChildNodeList;
      }
      queryShadowRoot($target);
      return result;
    },
    /**
     * 删除某些需要忽略的text或html，如：设置、直链弹窗
     * @param text 需要进行处理的字符串
     * @param isHTML 是否是html属性
     */
    ignoreStrRemove(text, isHTML = false) {
      let ignoreNodeList = [];
      if (ignoreNodeList.length) {
        ignoreNodeList.forEach(($ignore) => {
          if ($ignore == null) {
            return;
          }
          if (isHTML) {
            if ($ignore.innerHTML != null) {
              text = text.replaceAll($ignore.innerHTML, "");
            }
          } else {
            let text2 = $ignore.innerText || $ignore.textContent;
            if (text2 != null) {
              text2 = text2.replaceAll(text2, "");
            }
          }
        });
      }
      return text;
    },
    /**
     * 获取页面上所有文本
     * @param target 目标元素
     * @param isCheckShadowRoot 是否检索ShadowRoot
     */
    getPageText(target = document.documentElement, isCheckShadowRoot) {
      let strList = [];
      strList.push(target?.textContent || target?.innerText || "");
      if (isCheckShadowRoot) {
        let queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
        if (queryShadowRootAllNodeInfo.length) {
          queryShadowRootAllNodeInfo.forEach((queryShadowRootInfo) => {
            let shadowRootText = queryShadowRootInfo.shadowRoot.textContent;
            if (shadowRootText) {
              strList.push(shadowRootText);
            }
          });
        }
      }
      strList = strList.filter((item) => item !== "");
      return strList;
    },
    /**
     * 获取页面上所有超文本
     * @param target 目标元素
     * @param isCheckShadowRoot 是否检索ShadowRoot
     */
    getPageHTML(target = document.documentElement, isCheckShadowRoot) {
      let strList = [];
      strList.push(target.innerHTML);
      if (isCheckShadowRoot) {
        let queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
        if (queryShadowRootAllNodeInfo.length) {
          queryShadowRootAllNodeInfo.forEach((queryShadowRootInfo) => {
            let shadowRootHTML = queryShadowRootInfo.shadowRoot.innerHTML;
            if (shadowRootHTML) {
              strList.push(shadowRootHTML);
            }
          });
        }
      }
      strList = strList.filter((item) => item !== "");
      return strList;
    },
    /**
     * 获取页面上所有input的值
     * @param target 目标元素
     * @param isCheckShadowRoot 是否检索ShadowRoot
     */
    getInputElementValue(target = document.documentElement, isCheckShadowRoot) {
      let result = [];
      Array.from(target.querySelectorAll("input")).forEach(($input) => {
        result.push($input.value);
      });
      if (isCheckShadowRoot) {
        let queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
        if (queryShadowRootAllNodeInfo.length) {
          queryShadowRootAllNodeInfo.forEach((queryShadowRootInfo) => {
            for (let index = 0; index < queryShadowRootInfo.childNode.length; index++) {
              const $childNode = queryShadowRootInfo.childNode[index];
              if ($childNode instanceof HTMLInputElement && $childNode.value) {
                result.push($childNode.value);
              }
            }
          });
        }
      }
      return result;
    },
    /**
     * 获取页面上所有textarea的值
     * @param target 目标元素
     * @param isCheckShadowRoot 是否检索ShadowRoot
     */
    getTextAreaElementValue(target = document.documentElement, isCheckShadowRoot) {
      let result = [];
      Array.from(target.querySelectorAll("textarea")).forEach(($textarea) => {
        result.push($textarea.value);
      });
      if (isCheckShadowRoot) {
        let queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
        if (queryShadowRootAllNodeInfo.length) {
          queryShadowRootAllNodeInfo.forEach((queryShadowRootInfo) => {
            for (let index = 0; index < queryShadowRootInfo.childNode.length; index++) {
              const $childNode = queryShadowRootInfo.childNode[index];
              if ($childNode instanceof HTMLTextAreaElement && $childNode.value) {
                result.push($childNode.value);
              }
            }
          });
        }
      }
      return result;
    },
    /**
     * 获取光标选中的内容
     *
     * 获取两种：纯文本和超文本
     */
    getSelectContent() {
      let result = {
        text: "",
        html: ""
      };
      let selection = window.getSelection();
      if (selection) {
        result.text = selection.toString();
        let $tempDiv = domUtils.createElement("div");
        if (!selection.isCollapsed) {
          const docFragment = selection.getRangeAt(0).cloneContents();
          $tempDiv.appendChild(docFragment);
          result.html = domUtils.html($tempDiv);
        }
      }
      return result;
    }
  };
  const indexCSS$3 = '.whitesevPopNetDiskHistoryMatch .pops-confirm-content {\r\n	display: flex;\r\n	flex-direction: column;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content ul {\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content li {\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n	border-radius: 10px;\r\n	box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%),\r\n		0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%),\r\n		0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);\r\n	margin: 20px 10px;\r\n	padding: 10px;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search {\r\n	/*height: 11%;*/\r\n	flex: 0;\r\n	padding: 5px 0px;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-table {\r\n	/*height: calc(85% - 40px);*/\r\n	overflow: auto;\r\n	flex: 1;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-page {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	/*margin-top: 10px;*/\r\n	flex: 0;\r\n	padding: 5px 0px;\r\n}\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-search\r\n	input {\r\n	border: none;\r\n	border-bottom: 1px solid #000000;\r\n	padding: 0px 5px;\r\n	line-height: normal;\r\n	width: -moz-available;\r\n	width: -webkit-fill-available;\r\n	width: fill-available;\r\n	margin: 5px 5px 0px 5px;\r\n	background: none;\r\n}\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-search\r\n	input:focus-visible {\r\n	outline: none;\r\n	border-bottom: 1px solid #0009ff;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link {\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a {\r\n	color: #ff4848;\r\n	font-size: 0.8em;\r\n	border: none;\r\n	word-break: break-word;\r\n}\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-link\r\n	a[isvisited="true"] {\r\n	color: #8b8888;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon {\r\n}\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-icon\r\n	.netdisk-icon-img {\r\n	width: 28px;\r\n	height: 28px;\r\n	min-width: 28px;\r\n	min-height: 28px;\r\n	font-size: 0.8em;\r\n	border-radius: 10px;\r\n	box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%),\r\n		0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%),\r\n		0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url {\r\n	color: #000;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url {\r\n	color: #000;\r\n}\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-functions\r\n	button.btn-delete {\r\n	background: #263cf3;\r\n	color: #fff;\r\n}\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-functions\r\n	button.btn-delete:active {\r\n	background: #6e7be8;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time,\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-update-time,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions {\r\n	display: flex;\r\n	margin: 5px 0px;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time p,\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-update-time\r\n	p,\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-url-title\r\n	p,\r\n.whitesevPopNetDiskHistoryMatch\r\n	.pops-confirm-content\r\n	.netdiskrecord-functions\r\n	p {\r\n	min-width: 80px;\r\n	max-width: 80px;\r\n	align-self: center;\r\n}\r\n';
  const NetDiskHistoryMatchView = {
    /**
     * 本地存储的keyName
     */
    storageKey: "netDiskHistoryMatch",
    /**
     * 是否已设置其它DOM事件
     */
    isSetOtherEvent: false,
    /**
     * 分页
     */
    dataPaging: void 0,
    /**
     * 显示弹窗
     */
    show() {
      let data = this.getStorageData();
      let dataHTML = "";
      let that = this;
      data = this.orderNetDiskHistoryMatchData(data);
      dataHTML = /*html*/
      `
        <div class="netdiskrecord-search">
            <input type="text" placeholder="搜索链接/网址/网址标题，可正则搜索">
        </div>
        <div class="netdiskrecord-table">
			<ul></ul>
		</div>
        <div class="netdiskrecord-page">

        </div>`;
      NetDiskUI.Alias.historyAlias = NetDiskPops.confirm(
        {
          title: {
            text: "历史匹配记录",
            position: "center"
          },
          content: {
            text: dataHTML,
            html: true
          },
          btn: {
            reverse: true,
            position: "space-between",
            close: {
              callback(details) {
                details.close();
                NetDiskUI.Alias.historyAlias = void 0;
              }
            },
            ok: {
              enable: false,
              callback(details) {
                details.close();
                NetDiskUI.Alias.historyAlias = void 0;
              }
            },
            cancel: {
              enable: true,
              text: "关闭",
              callback(details) {
                details.close();
                NetDiskUI.Alias.historyAlias = void 0;
              }
            },
            other: {
              enable: true,
              text: `清空所有(${data.length})`,
              type: "xiaomi-primary",
              callback: () => {
                NetDiskPops.confirm({
                  title: {
                    text: "删除",
                    position: "center"
                  },
                  content: {
                    text: "确定清空所有的记录？",
                    html: false
                  },
                  btn: {
                    ok: {
                      enable: true,
                      callback(clearAllDialog) {
                        that.clearStorageData();
                        that.clearLinkElements();
                        that.clearPageNavigator();
                        clearAllDialog.close();
                        let $recordPage = NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
                          ".netdiskrecord-page"
                        );
                        let $btnOther = NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
                          ".pops-confirm-btn-other"
                        );
                        domUtils.html($recordPage, "");
                        domUtils.text(
                          $btnOther,
                          domUtils.text($btnOther).replace(/[\d]+/gi, "0")
                        );
                      }
                    },
                    cancel: {
                      text: "取消",
                      enable: true
                    }
                  }
                });
              }
            }
          },
          mask: {
            clickCallBack(originalRun) {
              originalRun();
              NetDiskUI.Alias.historyAlias = null;
            }
          },
          class: "whitesevPopNetDiskHistoryMatch",
          style: indexCSS$3
        },
        NetDiskUI.popsStyle.historyMatchView
      );
      this.addLinkElements(data.slice(0, 9));
      this.setDataPaging(data);
      this.setEvent(NetDiskUI.Alias.historyAlias.$shadowRoot);
      this.setSearchEvent();
      NetDiskUI.setRightClickMenu(
        NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
          ".whitesevPopNetDiskHistoryMatch"
        ),
        ".netdiskrecord-link a",
        true
      );
    },
    /**
     * 获取链接项的容器
     */
    getLinkContainer() {
      let $linkContainer = NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
        ".netdiskrecord-table ul"
      );
      return $linkContainer;
    },
    /**
     * 添加链接元素
     */
    addLinkElements(data) {
      if (!Array.isArray(data)) {
        data = [data];
      }
      let documentFragment = document.createDocumentFragment();
      for (let index = 0; index < data.length; index++) {
        let dataItem = data[index];
        let $item = this.createLinkItemElementInfo(dataItem);
        documentFragment.appendChild($item.$liItemContainer);
      }
      let $linkContainer = this.getLinkContainer();
      $linkContainer.appendChild(documentFragment);
    },
    /**
     * 获取显示出的每一项的信息
     * @param data
     */
    createLinkItemElementInfo(data) {
      let uiLink = NetDisk.handleLinkShow({
        ruleKeyName: data.ruleKeyName,
        ruleIndex: data.ruleIndex,
        shareCode: data.shareCode,
        accessCode: data.accessCode,
        matchText: data.matchText
      });
      let $liItemContainer = domUtils.createElement("li", {
        innerHTML: (
          /*html*/
          `
			<div class="netdiskrecord-link">
				<p>链接</p>
				<a  href="javascript:;" isvisited="false">${uiLink}</a>
			</div>
			<div class="netdiskrecord-icon">
				<p>网盘</p>
				<div class="netdisk-icon-img"></div>
			</div>
			<div class="netdiskrecord-url">
				<p>网址</p>
				<a href="${data.url}" target="_blank">${data.url}</a>
			</div>
			<div class="netdiskrecord-url-title">
				<p>网址标题</p>
				${data.title}
			</div>
			<div class="netdiskrecord-add-time">
				<p>记录时间</p>
				${utils.formatTime(data.addTime)}
			</div>
			<div class="netdiskrecord-update-time">
				<p>更新时间</p>
				${utils.formatTime(data.updateTime)}
			</div>
			<div class="netdiskrecord-functions">
				<p>功能</p>
				<button class="btn-delete">删除</button>
			</div>
			`
        )
      });
      let $link = $liItemContainer.querySelector(
        ".netdiskrecord-link"
      );
      let $linkAnchor = $link.querySelector("a");
      let $icon = $liItemContainer.querySelector(
        ".netdiskrecord-icon"
      );
      let $iconImg = $liItemContainer.querySelector(".netdisk-icon-img");
      let $url = $liItemContainer.querySelector(".netdiskrecord-url");
      let $urlTitle = $liItemContainer.querySelector(
        ".netdiskrecord-url-title"
      );
      let $addTime = $liItemContainer.querySelector(
        ".netdiskrecord-add-time"
      );
      let $updateTime = $liItemContainer.querySelector(
        ".netdiskrecord-update-time"
      );
      let $features = $liItemContainer.querySelector(
        ".netdiskrecord-functions"
      );
      let $featuresBtnDelete = $features.querySelector(".btn-delete");
      NetDiskView.handleElementAttributeRuleInfo(
        {
          ruleKeyName: data.ruleKeyName,
          ruleIndex: data.ruleIndex,
          shareCode: data.shareCode,
          accessCode: data.accessCode
        },
        $linkAnchor
      );
      $iconImg.style.cssText = `background: url(${NetDiskUI.src.icon[data.ruleKeyName]}) no-repeat;background-size:100%`;
      if (data.url !== data.topURL) {
        let $topUrl = domUtils.createElement("div", {
          className: "netdiskrecord-top-url",
          innerHTML: (
            /*html*/
            `
				<p>Top网址</p>
				<a href="${data.topURL}" target="_blank">${data.topURL}</a>
				`
          )
        });
        domUtils.after($url, $topUrl);
      }
      $featuresBtnDelete.setAttribute("data-json", JSON.stringify(data));
      Reflect.set($featuresBtnDelete, "data-json", data);
      return {
        $liItemContainer,
        $link,
        $linkAnchor,
        $icon,
        $iconImg,
        $url,
        $urlTitle,
        $addTime,
        $updateTime,
        $features,
        $featuresBtnDelete,
        html: $liItemContainer.outerHTML
      };
    },
    /**
     * 清空链接元素
     */
    clearLinkElements() {
      let $liItemContainer = this.getLinkContainer();
      domUtils.empty($liItemContainer);
    },
    /**
     * 清空分页元素
     */
    clearPageNavigator() {
      domUtils.remove(
        NetDiskUI.Alias.historyAlias.$shadowRoot.querySelectorAll(
          ".netdiskrecord-page > *"
        )
      );
    },
    /**
     * 设置只执行一次的事件
     * @param target
     */
    setEvent(target) {
      let that = this;
      NetDiskUI.view.setNetDiskUrlClickEvent(target, ".netdiskrecord-link a");
      domUtils.on(
        target,
        "click",
        ".netdiskrecord-functions button.btn-delete",
        function(event) {
          let $btnOther = target.querySelector(
            ".pops-confirm-btn-other"
          );
          let deleteLoading = NetDiskPops.loading({
            parent: that.getLinkContainer(),
            content: {
              text: "删除中..."
            },
            only: true,
            addIndexCSS: false
          });
          let clickNode = event.target;
          let dataJSON = clickNode.getAttribute("data-json");
          clickNode.closest("li")?.remove();
          that.deleteStorageData(dataJSON);
          deleteLoading?.close();
          let totalNumberText = domUtils.text($btnOther);
          let totalNumberMatch = totalNumberText.match(/[\d]+/gi);
          let totalNumber = parseInt(
            totalNumberMatch[totalNumberMatch.length - 1]
          );
          totalNumber--;
          totalNumberText = totalNumberText.replace(
            /[\d]+/gi,
            totalNumber.toString()
          );
          domUtils.text($btnOther, totalNumberText);
          let data = that.getStorageData();
          data = that.orderNetDiskHistoryMatchData(data);
          that.dataPaging.refresh(data);
          that.pageChangeCallBack(data, that.dataPaging.CONFIG.currentPage);
        }
      );
    },
    /**
     * 页码改变的回调
     * @param data
     * @param page
     */
    pageChangeCallBack(data, page) {
      let startIndex = (page - 1) * 10;
      let startData = data.slice(startIndex, startIndex + 9);
      this.clearLinkElements();
      this.addLinkElements(startData);
    },
    /**
     * 设置分页
     * @param data
     */
    setDataPaging(data) {
      let that = this;
      let dataPaging = new __DataPaging({
        data,
        pageCount: 10,
        pageStep: __pops.isPhone() ? 2 : 4,
        currentPage: 1,
        pageChangeCallBack: function(page) {
          that.pageChangeCallBack(data, page);
        }
      });
      this.dataPaging = dataPaging;
      dataPaging.addCSS(NetDiskUI.Alias.historyAlias.$shadowRoot);
      dataPaging.append(
        NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
          ".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
        )
      );
    },
    /**
     * 设置搜索框的回车事件
     */
    setSearchEvent() {
      let isSeaching = false;
      let $searchLoading = void 0;
      let that = this;
      function searchEvent() {
        if (isSeaching) {
          return;
        }
        isSeaching = true;
        $searchLoading = NetDiskPops.loading({
          parent: that.getLinkContainer(),
          content: {
            text: "搜索中..."
          },
          only: true,
          addIndexCSS: false
        });
        let searchText = NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
          ".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
        ).value.trim();
        let data = that.getStorageData();
        data = that.orderNetDiskHistoryMatchData(data);
        if (searchText === "") {
          that.clearLinkElements();
          that.clearPageNavigator();
          that.addLinkElements(data.slice(0, 9));
          $searchLoading?.close();
          isSeaching = false;
          that.setDataPaging(data);
          return;
        }
        log.info(`历史匹配记录-搜索：` + searchText);
        let searchData = data.filter((dataOption) => {
          let uiLink = NetDisk.handleLinkShow({
            ruleKeyName: dataOption.ruleKeyName,
            ruleIndex: dataOption.ruleIndex,
            shareCode: dataOption.shareCode,
            accessCode: dataOption.accessCode,
            matchText: dataOption.matchText,
            showToast: false
          });
          if (!uiLink) {
            log.info(dataOption);
          }
          if (typeof uiLink === "string" && uiLink.match(new RegExp(searchText, "i")) || dataOption.shareCode.match(new RegExp(searchText, "i")) || dataOption.url.match(new RegExp(searchText, "i")) || dataOption.topURL.match(new RegExp(searchText, "i")) || dataOption.title.match(new RegExp(searchText, "i"))) {
            return true;
          }
        });
        that.clearLinkElements();
        that.clearPageNavigator();
        that.addLinkElements(searchData);
        $searchLoading?.close();
        $searchLoading = void 0;
        isSeaching = false;
      }
      domUtils.listenKeyboard(
        NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
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
     * 排序数据
     * @param data
     */
    orderNetDiskHistoryMatchData(data) {
      let localOrder = NetDiskGlobalData.historyMatch["netdisk-history-match-ordering-rule"].value;
      let isDesc = localOrder.indexOf("降序") !== -1 ? true : false;
      let orderField = localOrder.indexOf("记录时间") !== -1 ? "addTime" : "updateTime";
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
     * 查询访问码
     * @param ruleKeyName
     * @param shareCode
     * @param isNotNull 查询的访问码是否不为空
     * + true 不能是空的
     * + false 允许为空
     */
    queryAccessCode(ruleKeyName, shareCode, isNotNull) {
      let storageDataList = this.getStorageData();
      for (let index = 0; index < storageDataList.length; index++) {
        const localData = storageDataList[index];
        if (localData.ruleKeyName === ruleKeyName && localData.shareCode === shareCode) {
          if (isNotNull && utils.isNotNull(localData.accessCode)) {
            return localData.accessCode;
          }
          return localData.accessCode;
        }
      }
    },
    /**
     * 同步访问码
     * @param ruleKeyName 规则名称
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 新的访问码
     */
    syncAccessCode(ruleKeyName, ruleIndex, shareCode, accessCode) {
      if (NetDiskGlobalData.historyMatch.saveMatchNetDisk.value) {
        let flag = NetDiskHistoryMatchView.changeMatchedDataAccessCode(
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode
        );
        if (flag) {
          log.success("已成功同步访问码至历史匹配记录");
          return true;
        } else {
          log.error("同步访问码至历史匹配记录失败");
        }
      }
      return false;
    },
    /**
     * 修改存储的数据的访问码
     * @param ruleKeyName 规则名称
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 新的访问码
     */
    changeMatchedDataAccessCode(ruleKeyName, ruleIndex, shareCode, accessCode) {
      let storageDataList = this.getStorageData();
      let flag = false;
      for (let index = 0; index < storageDataList.length; index++) {
        const localData = storageDataList[index];
        if (localData.ruleKeyName === ruleKeyName && String(localData.ruleIndex) === String(ruleIndex) && localData.shareCode === shareCode) {
          flag = true;
          storageDataList[index].accessCode = accessCode;
          storageDataList[index].updateTime = Date.now();
        }
      }
      if (flag) {
        this.saveStorageData(storageDataList);
      }
      return flag;
    },
    /**
     * 存储匹配到的链接
     * @param ruleKeyName 规则名称
     * @param ruleIndex 规则的索引下标
     * @param shareCode 分享码
     * @param accessCode 访问码
     * @param matchText 匹配到的文本
     */
    changeMatchedData(ruleKeyName, ruleIndex, shareCode, accessCode, matchText) {
      if (!NetDiskGlobalData.historyMatch.saveMatchNetDisk.value) {
        return false;
      }
      let storageDataList = this.getStorageData();
      let flag = false;
      for (let index = 0; index < storageDataList.length; index++) {
        const localData = storageDataList[index];
        if (localData.ruleKeyName === ruleKeyName && shareCode.startsWith(localData.shareCode) && localData.ruleIndex === ruleIndex) {
          if (NetDiskGlobalData.historyMatch["netdisk-history-match-merge-same-link"].value || localData.url === window.location.href && localData.topURL === top.window.location.href) {
            flag = true;
            let editFlag = false;
            if (matchText.trim() !== "" && localData.matchText !== matchText) {
              editFlag = true;
              log.success("匹配历史记录 -> 设置新的matchText", [matchText]);
              storageDataList[index].matchText = matchText;
            }
            if (utils.isNotNull(accessCode) && localData.accessCode !== accessCode) {
              editFlag = true;
              log.success("匹配历史记录 -> 修改accessCode");
              storageDataList[index].accessCode = accessCode;
            }
            if (editFlag) {
              storageDataList[index].updateTime = Date.now();
              if (storageDataList[index].title) {
                storageDataList[index].title = document.title;
              }
              if (NetDiskGlobalData.historyMatch["netdisk-history-match-merge-same-link"].value) {
                storageDataList[index].url = window.location.href;
                storageDataList[index].topURL = top.window.location.href;
              }
              break;
            }
          }
        }
      }
      if (!flag) {
        flag = true;
        log.success("匹配历史记录 -> 增加新的");
        let time = Date.now();
        storageDataList = [
          ...storageDataList,
          {
            url: window.location.href,
            topURL: top.window.location.href,
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode,
            addTime: time,
            updateTime: time,
            title: document.title || top.document.title,
            matchText
          }
        ];
      }
      this.saveStorageData(storageDataList);
      return true;
    },
    /**
     * 检测并尝试修复本地的数据
     */
    checkAndRepairLocalData() {
      let repairCount = 0;
      let data = _GM_getValue(this.storageKey);
      if (Array.isArray(data)) {
        for (let index = 0; index < data.length; index++) {
          let repairFlag = false;
          const itemData = data[index];
          if (typeof itemData.matchText !== "string") {
            itemData.matchText = "";
            repairFlag = true;
          }
          if (typeof itemData.ruleKeyName !== "string" && // @ts-ignore
          typeof itemData.netDiskName === "string") {
            itemData.ruleKeyName = itemData.netDiskName;
            delete itemData.netDiskName;
            repairFlag = true;
          }
          if (typeof itemData.ruleIndex !== "number" && // @ts-ignore
          typeof itemData.netDiskIndex === "number") {
            itemData.ruleIndex = itemData.netDiskIndex;
            delete itemData.netDiskIndex;
            repairFlag = true;
          }
          repairFlag && repairCount++;
        }
      } else {
        data = [];
      }
      this.saveStorageData(data);
      return {
        count: data.length,
        repairCount
      };
    },
    /**
     * 获取历史匹配到的链接
     */
    getStorageData() {
      let data = _GM_getValue(this.storageKey, []);
      if (data == null) {
        data = [];
        this.saveStorageData(data);
      }
      return data;
    },
    /**
     * 保存数据到本地存储的链接数据
     */
    saveStorageData(data) {
      _GM_setValue(this.storageKey, data);
    },
    /**
     * 删除存储的某个项
     * @param dataJSONText
     */
    deleteStorageData(dataJSONText) {
      let isSuccess = false;
      let data = this.getStorageData();
      for (let index = 0; index < data.length; index++) {
        if (JSON.stringify(data[index]) === dataJSONText) {
          log.success("删除 ===> ", data[index]);
          data.splice(index, 1);
          isSuccess = true;
          break;
        }
      }
      if (isSuccess) {
        this.saveStorageData(data);
      }
      return isSuccess;
    },
    /**
     * 清空所有配置
     */
    clearStorageData() {
      this.saveStorageData([]);
    }
  };
  let RuleSubscribe$1 = class RuleSubscribe {
    option;
    storageApi;
    constructor(option) {
      this.option = option;
      this.storageApi = new StorageUtils(option.STORAGE_API_KEY);
    }
    /**
     * 获取所有订阅
     */
    getAllSubscribe() {
      let allSubscribe = this.storageApi.get(
        this.option.STORAGE_KEY,
        []
      );
      return allSubscribe;
    }
    /**
     * 获取所有订阅内的所有的规则
     * @param [filterUnEnable=false] 是否过滤掉未启用的规则（包括订阅）
     */
    getAllSubscribeRule(filterUnEnable = false) {
      let allSubscribe = this.getAllSubscribe();
      let allSubscribeRule = [];
      for (let index = 0; index < allSubscribe.length; index++) {
        const subscribeItem = allSubscribe[index];
        if (filterUnEnable && !subscribeItem.data.enable) {
          continue;
        }
        for (let subscribeIndex = 0; subscribeIndex < subscribeItem.subscribeData.ruleData.length; subscribeIndex++) {
          const subscribeRuleData = subscribeItem.subscribeData.ruleData[subscribeIndex];
          if (filterUnEnable && !subscribeRuleData.enable) {
            continue;
          }
          subscribeRuleData.subscribeUUID = subscribeItem.uuid;
          allSubscribeRule.push(subscribeRuleData);
        }
      }
      return allSubscribeRule;
    }
    /**
     * 获取某个订阅
     * @param subscribeUUID 订阅的uuid
     */
    getSubscribe(subscribeUUID) {
      let findValue = this.getAllSubscribe().find(
        (rule) => rule.uuid == subscribeUUID
      );
      return findValue;
    }
    /**
     * 获取某个订阅的规则
     * @param subscribeUUID 订阅的uuid
     * @param uuid 规则的uuid
     */
    getSubscribeRule(subscribeUUID, uuid) {
      let findSubscribe = this.getSubscribe(subscribeUUID);
      if (findSubscribe) {
        let findRule = findSubscribe.subscribeData.ruleData.find(
          (rule) => rule.uuid === uuid
        );
        return findRule;
      }
    }
    /**
     * 删除所有订阅
     */
    deleteAllSubscribe() {
      this.storageApi.delete(this.option.STORAGE_KEY);
    }
    /**
     * 删除某个订阅
     * @param config 配置/uuid
     */
    deleteSubscribe(config) {
      let uuid = typeof config === "string" ? config : config.uuid;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === uuid
      );
      if (findIndex !== -1) {
        allSubscribe.splice(findIndex, 1);
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return findIndex !== -1;
    }
    /**
     * 清空某个订阅内的规则
     */
    clearSubscribe(config) {
      let uuid = typeof config === "string" ? config : config.uuid;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === uuid
      );
      if (findIndex !== -1) {
        allSubscribe[findIndex].subscribeData.ruleData = [];
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
        return true;
      } else {
        return false;
      }
    }
    /**
     * 新增某个订阅
     */
    addSubscribe(subscribe) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === subscribe.uuid
      );
      if (findIndex === -1) {
        allSubscribe.push(subscribe);
        flag = true;
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return flag;
    }
    /**
     * 更新某个订阅
     */
    updateSubscribe(subscribe) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === subscribe.uuid
      );
      if (findIndex !== -1) {
        allSubscribe[findIndex] = subscribe;
        flag = true;
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return flag;
    }
    /**
     * 更新某个订阅内的某个规则
     */
    updateSubscribeRule(subscribeUUID, rule) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let targetSubscribe = allSubscribe.find(
        (subscribeItem) => subscribeItem.uuid === subscribeUUID
      );
      if (targetSubscribe) {
        let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex(
          (ruleItem) => ruleItem.uuid === rule.uuid
        );
        if (findRuleIndex !== -1) {
          targetSubscribe.subscribeData.ruleData[findRuleIndex] = rule;
          flag = true;
        }
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return true;
    }
    /**
     * 删除某个订阅内的某个规则
     * @param  subscribeUUID 订阅的uuid
     * @param  rule 规则
     */
    deleteSubscribeRule(subscribeUUID, rule) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === subscribeUUID
      );
      if (findIndex !== -1) {
        let targetSubscribe = allSubscribe[findIndex];
        let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex(
          (ruleItem) => ruleItem.uuid === rule.uuid
        );
        if (findRuleIndex !== -1) {
          allSubscribe[findIndex].subscribeData.ruleData.splice(findRuleIndex, 1);
          this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
          flag = true;
        }
      }
      return flag;
    }
    /**
     * 获取订阅链接的数据信息
     * @param url 订阅链接
     */
    async getSubscribeInfo(url) {
      let response = await httpx.get(url, {
        allowInterceptConfig: false,
        timeout: 1e4,
        headers: {
          "User-Agent": utils.getRandomPCUA()
        }
      });
      if (!response.status) {
        log.error(response);
        return {
          data: null,
          msg: "获取订阅信息失败"
        };
      }
      let subscribeText = response.data.responseText;
      let subscribeParsedData = utils.toJSON(subscribeText);
      if (typeof subscribeParsedData.title === "string" && typeof subscribeParsedData.version === "number" && typeof subscribeParsedData.lastModified === "number" && Array.isArray(subscribeParsedData.ruleData)) {
        let subscribeInfo = {
          uuid: utils.generateUUID(),
          subscribeData: subscribeParsedData,
          data: {
            enable: true,
            url,
            latestUpdateTime: Date.now(),
            updateFailedTime: null
          }
        };
        return {
          data: subscribeInfo,
          msg: ""
        };
      } else {
        log.error(subscribeParsedData);
        return {
          data: null,
          msg: "订阅链接的内容格式不正确"
        };
      }
    }
    /**
     * 更新所有订阅
     */
    async updateAllSubscribe() {
      let allSubscribe = this.getAllSubscribe();
      for (let index = 0; index < allSubscribe.length; index++) {
        const subscribeItem = allSubscribe[index];
        if (!subscribeItem.data.enable) {
          continue;
        }
        if (typeof subscribeItem.data.updateFailedTime === "number" && utils.formatTime(subscribeItem.data.updateFailedTime, "yyyyMMdd") === utils.formatTime(Date.now(), "yyyyMMdd")) {
          continue;
        }
        if (typeof subscribeItem.data.latestUpdateTime === "number" && utils.formatTime(Date.now(), "yyyyMMdd") === utils.formatTime(subscribeItem.data.latestUpdateTime, "yyyyMMdd")) {
          continue;
        }
        let requestSubscribeInfo = await this.getSubscribeInfo(
          subscribeItem.data.url
        );
        let updateFlag = false;
        if (requestSubscribeInfo.data) {
          let subscribeNewItem = requestSubscribeInfo.data;
          subscribeNewItem.uuid = subscribeItem.uuid;
          subscribeNewItem.data = subscribeItem.data;
          subscribeNewItem.data.latestUpdateTime = Date.now();
          let title = subscribeNewItem.data.title || subscribeNewItem.subscribeData.title || subscribeNewItem.data.url;
          subscribeItem.data.updateFailedTime = null;
          updateFlag = this.updateSubscribe(subscribeNewItem);
          if (updateFlag) {
            log.success(`更新订阅成功：${title}`);
          } else {
            log.error(`更新订阅失败：${title}`, subscribeItem);
          }
        } else {
          log.error("更新订阅失败：" + requestSubscribeInfo.msg, subscribeItem);
        }
        if (!updateFlag) {
          subscribeItem.data.updateFailedTime = Date.now();
          this.updateSubscribe(subscribeItem);
        }
      }
    }
    /**
     * 导入订阅
     * @param importEndCallBack 导入完毕后的回调
     */
    importSubscribe(importEndCallBack) {
      let $alert = __pops.alert({
        title: {
          text: "请选择导入方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        drag: true,
        mask: {
          enable: true
        },
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $local = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='local']"
      );
      let $network = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='network']"
      );
      let $clipboard = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='clipboard']"
      );
      let updateRuleToStorage = async (data) => {
        let allData = this.getAllSubscribe();
        let addNewData = [];
        let repeatData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1) {
            repeatData.push({
              index: findIndex,
              data: dataItem
            });
          } else {
            addNewData.push(dataItem);
          }
        }
        await new Promise((resolve) => {
          let confirmResult = globalThis.confirm(
            `存在相同的uuid的规则 ${repeatData.length}条，是否进行覆盖？`
          );
          if (confirmResult) {
            for (const repeatDataItem of repeatData) {
              allData[repeatDataItem.index] = repeatDataItem.data;
            }
          }
          resolve(true);
        });
        allData = allData.concat(addNewData);
        this.storageApi.set(this.option.STORAGE_KEY, allData);
        Qmsg.success(`共 ${data.length} 条订阅，新增 ${addNewData.length} 条`);
        importEndCallBack?.();
      };
      let importFile = (subscribeText) => {
        return new Promise(async (resolve) => {
          let data = utils.toJSON(subscribeText);
          if (!Array.isArray(data)) {
            log.error(data);
            Qmsg.error("导入失败，格式不符合（不是数组）", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          let demoFirst = data[0];
          if (!(typeof demoFirst.data === "object" && demoFirst.data != null && typeof demoFirst.subscribeData === "object" && demoFirst.subscribeData != null && typeof demoFirst.uuid === "string")) {
            Qmsg.error("导入失败，解析的格式不符合", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          await updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json"
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          if (!$input.files?.length) {
            return;
          }
          let uploadFile = $input.files[0];
          let fileReader = new FileReader();
          fileReader.onload = () => {
            importFile(fileReader.result);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $prompt = __pops.prompt({
          title: {
            text: "网络导入",
            position: "center"
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              }
            },
            ok: {
              text: "导入",
              callback: async (eventDetails, event2) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                let $loading = Qmsg.loading("正在获取配置...");
                let response = await httpx.get(url, {
                  allowInterceptConfig: false
                });
                $loading.close();
                if (!response.status) {
                  log.error(response);
                  Qmsg.error("获取配置失败", { consoleLogContent: true });
                  return;
                }
                let flag = await importFile(response.data.responseText);
                if (!flag) {
                  return;
                }
                eventDetails.close();
              }
            },
            cancel: {
              enable: false
            }
          },
          drag: true,
          mask: {
            enable: true
          },
          width: PanelUISize.info.width,
          height: "auto"
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(
          ".pops-prompt-btn-ok"
        );
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard(
          $promptInput,
          "keydown",
          (keyName, keyValue, otherCodeList) => {
            if (keyName === "Enter" && otherCodeList.length === 0) {
              let value = domUtils.val($promptInput);
              if (value !== "") {
                utils.dispatchEvent($promptOk, "click");
              }
            }
          }
        );
        utils.dispatchEvent($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        utils.preventEvent(event);
        $alert.close();
        let clipboardText = await CommonUtil.getClipboardText();
        if (clipboardText.trim() === "") {
          Qmsg.warning("获取到的剪贴板内容为空");
          return;
        }
        let flag = await importFile(clipboardText);
        if (!flag) {
          return;
        }
      });
    }
    /**
     * 导出订阅
     */
    exportSubscribe(fileName = "rule.json") {
      let $alert = __pops.alert({
        title: {
          text: "请选择导出方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="only-export-rule-list">导出订阅</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        drag: true,
        mask: {
          enable: true
        },
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='only-export-rule-list']"
      );
      let exportFile = (__fileName__, __data__) => {
        let blob = new Blob([JSON.stringify(__data__, null, 4)]);
        let blobUrl = window.URL.createObjectURL(blob);
        let $a = document.createElement("a");
        $a.href = blobUrl;
        $a.download = __fileName__;
        $a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 1500);
      };
      domUtils.on($onlyExportRuleList, "click", (event) => {
        utils.preventEvent(event);
        try {
          let allRule = this.getAllSubscribe();
          if (allRule.length === 0) {
            Qmsg.warning("订阅为空，无需导出");
            return;
          }
          exportFile(fileName, allRule);
          $alert.close();
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
    }
  };
  const CharacterMappingSubscribe = new RuleSubscribe$1({
    STORAGE_API_KEY: "character-mapping-rule",
    STORAGE_KEY: "character-mapping-subscribe-rule"
  });
  const CharacterMappingStorageApi = new StorageUtils("character-mapping-rule");
  const CharacterMapping = {
    $data: {
      STORAGE_KEY: "character-mapping",
      EXPORT_CONFIG_KEY: "rule-export-config"
    },
    /**
     * 获取模板数据
     */
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        subscribeUUID: null,
        enable: true,
        name: "",
        data: {
          url: "",
          isRegExp: true,
          regExpFlag: "ig",
          searchValue: "",
          replaceValue: ""
        },
        dynamicData: []
      };
    },
    /**
     * 获取规则面板视图的配置
     * @param quickAddData 用于快速添加数据
     */
    getRulePanelViewOption(quickAddData) {
      const that = this;
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
      let addData = () => {
        return quickAddData ?? this.getTemplateData();
      };
      function generateStorageApi(data) {
        return {
          get(key, defaultValue) {
            return data[key] ?? defaultValue;
          },
          set(key, value) {
            data[key] = value;
          }
        };
      }
      let rulePanelViewOption = {
        id: "netdisk-rule",
        title: "字符映射",
        headerTitle: "字符映射规则",
        subscribe: {
          enable: true,
          data() {
            return CharacterMappingSubscribe.getAllSubscribe();
          },
          getData: (data) => {
            let findValue = CharacterMappingSubscribe.getSubscribe(data.uuid);
            return findValue ?? data;
          },
          getDataItemName(subscribeOption) {
            return (
              /*html*/
              `
						<style>
							.subscribe-rule-title-info-wrapper{
								display: flex;
								flex-direction: column;
								gap: 4px;
							}
							.subscribe-rule-title-info-wrapper .rule-name-text{
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-weight: 600;
								font-size: 16px;
								line-height: 24px;
							}
							.subscribe-rule-title-info-wrapper .subscribe-rule-small-span-text{
								font-size: 14px;
								line-height: 16px;
								white-space: pre-wrap;
							}
						</style>
						<div class="subscribe-rule-title-info-wrapper">
							<div class="rule-name-text" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 16px;font-weight: 600;line-height: 24px;">${subscribeOption.data.title || subscribeOption.subscribeData.title || subscribeOption.data.url}</div>
								<div class="subscribe-rule-small-span-text">${subscribeOption.subscribeData.ruleData.length} 条规则，更新于：${utils.formatTime(
              subscribeOption.data.latestUpdateTime,
              "yyyy年MM月dd日 HH:mm:ss"
            )}${typeof subscribeOption.data.updateFailedTime === "number" ? `，<span style="color: red;">更新失败于：${utils.formatTime(
              subscribeOption.data.updateFailedTime,
              "yyyy年MM月dd日 HH:mm:ss"
            )}</span>` : ``}</div>
								${subscribeOption.subscribeData.homePage ? `<a href="${subscribeOption.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${subscribeOption.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`
            );
          },
          addData: (data) => {
            return CharacterMappingSubscribe.addSubscribe(data);
          },
          updateData: (data) => {
            return CharacterMappingSubscribe.updateSubscribe(data);
          },
          deleteData: (data) => {
            return CharacterMappingSubscribe.deleteSubscribe(data);
          },
          btnControls: {
            add: {
              enable: true
            },
            filter: {
              enable: true,
              title: "过滤订阅",
              option: [
                {
                  name: "过滤【已启用】的订阅",
                  filterCallBack(data) {
                    return data.data.enable;
                  }
                },
                {
                  name: "过滤【未启用】的订阅",
                  filterCallBack(data) {
                    return !data.data.enable;
                  }
                }
              ]
            },
            clearAll: {
              enable: true,
              callback: () => {
                CharacterMappingSubscribe.deleteAllSubscribe();
              }
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.data.enable;
              },
              async callback(data, enable) {
                data.data.enable = enable;
                CharacterMappingSubscribe.updateSubscribe(data);
              }
            },
            ruleEdit: {
              enable: true,
              callback: (option) => {
                let subscribeUUID = option.ruleData.uuid;
                option.enterDeepMenu({
                  headerTitle: (
                    // 自己重新命名的
                    option.ruleData.data.title || // 订阅的规则自带的
                    option.ruleData.subscribeData.title || // 订阅的链接
                    option.ruleData.data.url
                  ),
                  data() {
                    let currentData = CharacterMappingSubscribe.getSubscribe(subscribeUUID);
                    return currentData?.subscribeData?.ruleData ?? option.ruleData.subscribeData.ruleData;
                  },
                  getData(data) {
                    let currentData = CharacterMappingSubscribe.getSubscribeRule(
                      subscribeUUID,
                      data.uuid
                    );
                    return currentData ?? data;
                  },
                  getDataItemName(data) {
                    return data.name ?? data.data.url;
                  },
                  addData(data) {
                    return true;
                  },
                  updateData(data) {
                    return CharacterMappingSubscribe.updateSubscribeRule(
                      subscribeUUID,
                      data
                    );
                  },
                  deleteData(data) {
                    return CharacterMappingSubscribe.deleteSubscribeRule(
                      subscribeUUID,
                      data
                    );
                  },
                  btnControls: {
                    filter: {
                      enable: true,
                      option: [
                        {
                          name: "过滤【已启用】的规则",
                          filterCallBack(data) {
                            return data.enable;
                          }
                        },
                        {
                          name: "过滤【未启用】的规则",
                          filterCallBack(data) {
                            return !data.enable;
                          }
                        }
                      ]
                    },
                    clearAll: {
                      enable: true,
                      callback: () => {
                        CharacterMappingSubscribe.clearSubscribe(subscribeUUID);
                      }
                    },
                    ruleEnable: {
                      enable: true,
                      getEnable(data) {
                        return data.enable;
                      },
                      callback(data, enable) {
                        data.enable = enable;
                        CharacterMappingSubscribe.updateSubscribeRule(
                          subscribeUUID,
                          data
                        );
                      }
                    },
                    ruleEdit: {
                      enable: true,
                      getView: (data, isEdit) => {
                        if (!isEdit) {
                          data = addData();
                        }
                        let $fragment = document.createDocumentFragment();
                        let enable_template = UISwitch("启用", "enable", true);
                        Reflect.set(
                          enable_template.props,
                          PROPS_STORAGE_API,
                          generateStorageApi(data)
                        );
                        let $enable = panelHandlerComponents.createSectionContainerItem_switch(
                          enable_template
                        );
                        let name_template = UIInput(
                          "规则名称",
                          "name",
                          "",
                          "",
                          void 0,
                          "必填"
                        );
                        Reflect.set(
                          name_template.props,
                          PROPS_STORAGE_API,
                          generateStorageApi(data)
                        );
                        let $name = panelHandlerComponents.createSectionContainerItem_input(
                          name_template
                        );
                        let url_template = UIInput(
                          "匹配网址",
                          "url",
                          "",
                          "",
                          void 0,
                          "必填，可正则"
                        );
                        Reflect.set(
                          url_template.props,
                          PROPS_STORAGE_API,
                          generateStorageApi(data.data)
                        );
                        let $data_url = panelHandlerComponents.createSectionContainerItem_input(
                          url_template
                        );
                        let getDynamicPropElement = (storageData) => {
                          let template_data = this.getTemplateData();
                          let data_searchValue_template = UIInput(
                            "字符规则",
                            "searchValue",
                            template_data.data.searchValue,
                            "",
                            void 0,
                            "必填，可正则"
                          );
                          Reflect.set(
                            data_searchValue_template.props,
                            PROPS_STORAGE_API,
                            generateStorageApi(storageData)
                          );
                          let $data_searchValue = panelHandlerComponents.createSectionContainerItem_input(
                            data_searchValue_template
                          );
                          let data_isRegExp_template = UISwitch(
                            "是否启用正则",
                            "isRegExp",
                            template_data.data.isRegExp,
                            void 0,
                            "使用正则进行匹配字符规则"
                          );
                          Reflect.set(
                            data_isRegExp_template.props,
                            PROPS_STORAGE_API,
                            generateStorageApi(data.data)
                          );
                          let $data_isRegExp = panelHandlerComponents.createSectionContainerItem_switch(
                            data_isRegExp_template
                          );
                          let data_regExpFlag_template = UIInput(
                            "正则标识符",
                            "regExpFlag",
                            template_data.data.regExpFlag,
                            "",
                            void 0,
                            "i:不区分大小写  g:全局"
                          );
                          Reflect.set(
                            data_regExpFlag_template.props,
                            PROPS_STORAGE_API,
                            generateStorageApi(data.data)
                          );
                          let $data_regExpFlag = panelHandlerComponents.createSectionContainerItem_input(
                            data_regExpFlag_template
                          );
                          let data_replaceValue_template = UIInput(
                            "映射为",
                            "replaceValue",
                            template_data.data.replaceValue,
                            "",
                            void 0,
                            ""
                          );
                          Reflect.set(
                            data_replaceValue_template.props,
                            PROPS_STORAGE_API,
                            generateStorageApi(data.data)
                          );
                          let $data_replaceValue = panelHandlerComponents.createSectionContainerItem_input(
                            data_replaceValue_template
                          );
                          return {
                            $data_searchValue,
                            $data_isRegExp,
                            $data_regExpFlag,
                            $data_replaceValue
                          };
                        };
                        let $dynamicContainer = domUtils.createElement("div", {
                          className: "rule-form-ulist-dynamic",
                          innerHTML: (
                            /*html*/
                            `
									<div class="rule-form-ulist-dynamic__inner">

									</div>
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">添加额外属性</span>
										</button>
									</div>`
                          )
                        });
                        let $dynamicInner = $dynamicContainer.querySelector(
                          ".rule-form-ulist-dynamic__inner"
                        );
                        let $addDynamicButton = $dynamicContainer.querySelector(
                          ".pops-panel-button"
                        );
                        let addDynamicElementItem = (dynamicData) => {
                          let template_data = this.getTemplateData();
                          dynamicData = dynamicData ?? {
                            searchValue: template_data.data.searchValue,
                            isRegExp: template_data.data.isRegExp,
                            regExpFlag: template_data.data.regExpFlag,
                            replaceValue: template_data.data.replaceValue
                          };
                          let $dynamicUListContainer = domUtils.createElement(
                            "div",
                            {
                              className: "rule-form-ulist-dynamic__inner-container",
                              innerHTML: (
                                /*html*/
                                `
										<div class="dynamic-control-delete">
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="danger">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">×</span>
												</button>
											</div>
										</div>
										<ul class="dynamic-forms">

										</ul>`
                              )
                            }
                          );
                          let $dynamicDelete = $dynamicUListContainer.querySelector(
                            ".dynamic-control-delete"
                          );
                          domUtils.on($dynamicDelete, "click", (event) => {
                            utils.preventEvent(event);
                            $dynamicUListContainer.remove();
                            if (Array.isArray(data.dynamicData)) {
                              let findIndex = data.dynamicData.findIndex(
                                (it) => it == dynamicData
                              );
                              if (findIndex !== -1) {
                                data.dynamicData.splice(findIndex, 1);
                              }
                            }
                          });
                          let $dynamicUList = $dynamicUListContainer.querySelector(
                            ".dynamic-forms"
                          );
                          let {
                            $data_searchValue,
                            $data_isRegExp,
                            $data_regExpFlag,
                            $data_replaceValue
                          } = getDynamicPropElement(dynamicData);
                          $dynamicUList.appendChild($data_searchValue);
                          $dynamicUList.appendChild($data_isRegExp);
                          $dynamicUList.appendChild($data_regExpFlag);
                          $dynamicUList.appendChild($data_replaceValue);
                          $dynamicInner.appendChild($dynamicUListContainer);
                        };
                        domUtils.on($addDynamicButton, "click", (event) => {
                          utils.preventEvent(event);
                          addDynamicElementItem();
                        });
                        if (Array.isArray(data.dynamicData)) {
                          for (let index = 0; index < data.dynamicData.length; index++) {
                            const moreDataItem = data.dynamicData[index];
                            addDynamicElementItem(moreDataItem);
                          }
                        }
                        let $firstDynamicElement = getDynamicPropElement(
                          data.data
                        );
                        $fragment.appendChild($enable);
                        $fragment.appendChild($name);
                        $fragment.appendChild($data_url);
                        $fragment.appendChild(
                          $firstDynamicElement.$data_searchValue
                        );
                        $fragment.appendChild(
                          $firstDynamicElement.$data_isRegExp
                        );
                        $fragment.appendChild(
                          $firstDynamicElement.$data_regExpFlag
                        );
                        $fragment.appendChild(
                          $firstDynamicElement.$data_replaceValue
                        );
                        $fragment.appendChild($dynamicContainer);
                        return $fragment;
                      },
                      onsubmit: ($form, isEdit, editData) => {
                        let $ulist_li = $form.querySelectorAll(
                          ".rule-form-ulist > li"
                        );
                        let data = this.getTemplateData();
                        if (isEdit) {
                          data.uuid = editData.uuid;
                        }
                        $ulist_li.forEach(($li) => {
                          let formConfig = Reflect.get($li, "__formConfig__");
                          let attrs = Reflect.get(formConfig, "attributes");
                          let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                          let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                          let defaultValue = Reflect.get(
                            attrs,
                            ATTRIBUTE_DEFAULT_VALUE
                          );
                          let value = storageApi.get(key, defaultValue);
                          if (Reflect.has(data, key)) {
                            Reflect.set(data, key, value);
                          } else if (Reflect.has(data.data, key)) {
                            Reflect.set(data.data, key, value);
                          } else {
                            log.error(`${key}不在数据中`);
                          }
                        });
                        $form.querySelectorAll(
                          ".rule-form-ulist-dynamic__inner-container"
                        ).forEach(($inner) => {
                          let dynamicData = {};
                          $inner.querySelectorAll(".dynamic-forms > li").forEach(($li) => {
                            let formConfig = Reflect.get(
                              $li,
                              "__formConfig__"
                            );
                            if (!formConfig) {
                              return;
                            }
                            let attrs = Reflect.get(formConfig, "attributes");
                            if (!attrs) {
                              return;
                            }
                            let storageApi = Reflect.get(
                              $li,
                              PROPS_STORAGE_API
                            );
                            let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                            let defaultValue = Reflect.get(
                              attrs,
                              ATTRIBUTE_DEFAULT_VALUE
                            );
                            let value = storageApi.get(key, defaultValue);
                            Reflect.set(dynamicData, key, value);
                          });
                          data.dynamicData.push(dynamicData);
                        });
                        if (data.name.trim() === "") {
                          Qmsg.error("规则名称不能为空");
                          return {
                            success: false,
                            data
                          };
                        }
                        if (data.data.url.trim() === "") {
                          Qmsg.error("匹配网址不能为空");
                          return {
                            success: false,
                            data
                          };
                        }
                        if (data.data.searchValue.trim() === "" || Array.isArray(data.dynamicData) && data.dynamicData.findIndex(
                          (it) => it.searchValue.trim() === ""
                        ) !== -1) {
                          Qmsg.error("字符规则不能为空");
                          return {
                            success: false,
                            data
                          };
                        }
                        if (isEdit) {
                          return {
                            success: this.updateData(data),
                            data
                          };
                        } else {
                          return {
                            success: this.addData(data),
                            data
                          };
                        }
                      }
                    },
                    ruleDelete: {
                      enable: true,
                      deleteCallBack(data) {
                        return CharacterMappingSubscribe.deleteSubscribeRule(
                          subscribeUUID,
                          data
                        );
                      }
                    }
                  }
                });
                return false;
              }
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return CharacterMappingSubscribe.deleteSubscribe(data);
              }
            },
            import: {
              enable: true,
              callback(updateView) {
                CharacterMappingSubscribe.importSubscribe(() => {
                  updateView();
                });
              }
            },
            export: {
              enable: true,
              callback() {
                CharacterMappingSubscribe.exportSubscribe(
                  _SCRIPT_NAME_ + "-字典映射-订阅.json"
                );
              }
            }
          },
          getSubscribeInfo: CharacterMappingSubscribe.getSubscribeInfo.bind(
            CharacterMappingSubscribe
          )
        },
        ruleOption: {
          btnControls: {
            add: {
              enable: true
            },
            filter: {
              enable: true,
              title: "过滤规则",
              option: [
                {
                  name: "过滤【已启用】的规则",
                  filterCallBack(data) {
                    return data.enable;
                  }
                },
                {
                  name: "过滤【未启用】的规则",
                  filterCallBack(data) {
                    return !data.enable;
                  }
                },
                {
                  name: "过滤【在当前网址生效】的规则",
                  filterCallBack(data) {
                    return Boolean(window.location.href.match(data.data.url));
                  }
                }
              ]
            },
            clearAll: {
              enable: true,
              callback: () => {
                that.clearData();
              }
            },
            import: {
              enable: true,
              callback: (updateView) => {
                that.importRule(() => {
                  updateView();
                });
              }
            },
            export: {
              enable: true,
              callback: () => {
                that.exportRule(
                  _SCRIPT_NAME_ + "-字符映射.json",
                  _SCRIPT_NAME_ + "-字符映射-订阅模式.json"
                );
              }
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.enable;
              },
              callback: (data, enable) => {
                data.enable = enable;
                that.updateData(data);
              }
            },
            ruleEdit: {
              enable: true,
              getView: (data, isEdit) => {
                let $fragment = document.createDocumentFragment();
                if (!isEdit) {
                  data = addData();
                }
                let enable_template = UISwitch("启用", "enable", true);
                Reflect.set(
                  enable_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(data)
                );
                let $enable = panelHandlerComponents.createSectionContainerItem_switch(
                  enable_template
                );
                let name_template = UIInput(
                  "规则名称",
                  "name",
                  "",
                  "",
                  void 0,
                  "必填"
                );
                Reflect.set(
                  name_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(data)
                );
                let $name = panelHandlerComponents.createSectionContainerItem_input(
                  name_template
                );
                let url_template = UIInput(
                  "匹配网址",
                  "url",
                  "",
                  "",
                  void 0,
                  "必填，可正则"
                );
                Reflect.set(
                  url_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(data.data)
                );
                let $data_url = panelHandlerComponents.createSectionContainerItem_input(
                  url_template
                );
                let getDynamicPropElement = (storageData) => {
                  let template_data = this.getTemplateData();
                  let data_searchValue_template = UIInput(
                    "字符规则",
                    "searchValue",
                    template_data.data.searchValue,
                    "",
                    void 0,
                    "必填，可正则"
                  );
                  Reflect.set(
                    data_searchValue_template.props,
                    PROPS_STORAGE_API,
                    generateStorageApi(storageData)
                  );
                  let $data_searchValue = panelHandlerComponents.createSectionContainerItem_input(
                    data_searchValue_template
                  );
                  let data_isRegExp_template = UISwitch(
                    "是否启用正则",
                    "isRegExp",
                    template_data.data.isRegExp,
                    void 0,
                    "使用正则进行匹配字符规则"
                  );
                  Reflect.set(
                    data_isRegExp_template.props,
                    PROPS_STORAGE_API,
                    generateStorageApi(data.data)
                  );
                  let $data_isRegExp = panelHandlerComponents.createSectionContainerItem_switch(
                    data_isRegExp_template
                  );
                  let data_regExpFlag_template = UIInput(
                    "正则标识符",
                    "regExpFlag",
                    template_data.data.regExpFlag,
                    "",
                    void 0,
                    "i:不区分大小写  g:全局"
                  );
                  Reflect.set(
                    data_regExpFlag_template.props,
                    PROPS_STORAGE_API,
                    generateStorageApi(data.data)
                  );
                  let $data_regExpFlag = panelHandlerComponents.createSectionContainerItem_input(
                    data_regExpFlag_template
                  );
                  let data_replaceValue_template = UIInput(
                    "映射为",
                    "replaceValue",
                    template_data.data.replaceValue,
                    "",
                    void 0,
                    ""
                  );
                  Reflect.set(
                    data_replaceValue_template.props,
                    PROPS_STORAGE_API,
                    generateStorageApi(data.data)
                  );
                  let $data_replaceValue = panelHandlerComponents.createSectionContainerItem_input(
                    data_replaceValue_template
                  );
                  return {
                    $data_searchValue,
                    $data_isRegExp,
                    $data_regExpFlag,
                    $data_replaceValue
                  };
                };
                let $dynamicContainer = domUtils.createElement("div", {
                  className: "rule-form-ulist-dynamic",
                  innerHTML: (
                    /*html*/
                    `
									<div class="rule-form-ulist-dynamic__inner">

									</div>
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">添加额外属性</span>
										</button>
									</div>`
                  )
                });
                let $dynamicInner = $dynamicContainer.querySelector(
                  ".rule-form-ulist-dynamic__inner"
                );
                let $addDynamicButton = $dynamicContainer.querySelector(
                  ".pops-panel-button"
                );
                let addDynamicElementItem = (dynamicData) => {
                  let template_data = this.getTemplateData();
                  dynamicData = dynamicData ?? {
                    searchValue: template_data.data.searchValue,
                    isRegExp: template_data.data.isRegExp,
                    regExpFlag: template_data.data.regExpFlag,
                    replaceValue: template_data.data.replaceValue
                  };
                  let $dynamicUListContainer = domUtils.createElement("div", {
                    className: "rule-form-ulist-dynamic__inner-container",
                    innerHTML: (
                      /*html*/
                      `
										<div class="dynamic-control-delete">
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="danger">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">×</span>
												</button>
											</div>
										</div>
										<ul class="dynamic-forms">

										</ul>`
                    )
                  });
                  let $dynamicDelete = $dynamicUListContainer.querySelector(
                    ".dynamic-control-delete"
                  );
                  domUtils.on($dynamicDelete, "click", (event) => {
                    utils.preventEvent(event);
                    $dynamicUListContainer.remove();
                    if (Array.isArray(data.dynamicData)) {
                      let findIndex = data.dynamicData.findIndex(
                        (it) => it == dynamicData
                      );
                      if (findIndex !== -1) {
                        data.dynamicData.splice(findIndex, 1);
                      }
                    }
                  });
                  let $dynamicUList = $dynamicUListContainer.querySelector(
                    ".dynamic-forms"
                  );
                  let {
                    $data_searchValue,
                    $data_isRegExp,
                    $data_regExpFlag,
                    $data_replaceValue
                  } = getDynamicPropElement(dynamicData);
                  $dynamicUList.appendChild($data_searchValue);
                  $dynamicUList.appendChild($data_isRegExp);
                  $dynamicUList.appendChild($data_regExpFlag);
                  $dynamicUList.appendChild($data_replaceValue);
                  $dynamicInner.appendChild($dynamicUListContainer);
                };
                domUtils.on($addDynamicButton, "click", (event) => {
                  utils.preventEvent(event);
                  addDynamicElementItem();
                });
                if (Array.isArray(data.dynamicData)) {
                  for (let index = 0; index < data.dynamicData.length; index++) {
                    const moreDataItem = data.dynamicData[index];
                    addDynamicElementItem(moreDataItem);
                  }
                }
                let $firstDynamicElement = getDynamicPropElement(data.data);
                $fragment.appendChild($enable);
                $fragment.appendChild($name);
                $fragment.appendChild($data_url);
                $fragment.appendChild($firstDynamicElement.$data_searchValue);
                $fragment.appendChild($firstDynamicElement.$data_isRegExp);
                $fragment.appendChild($firstDynamicElement.$data_regExpFlag);
                $fragment.appendChild($firstDynamicElement.$data_replaceValue);
                $fragment.appendChild($dynamicContainer);
                return $fragment;
              },
              onsubmit: ($form, isEdit, editData) => {
                let $ulist_li = $form.querySelectorAll(
                  ".rule-form-ulist > li"
                );
                let data = this.getTemplateData();
                if (isEdit) {
                  data.uuid = editData.uuid;
                }
                $ulist_li.forEach(($li) => {
                  let formConfig = Reflect.get($li, "__formConfig__");
                  let attrs = Reflect.get(formConfig, "attributes");
                  let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                  let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                  let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                  let value = storageApi.get(key, defaultValue);
                  if (Reflect.has(data, key)) {
                    Reflect.set(data, key, value);
                  } else if (Reflect.has(data.data, key)) {
                    Reflect.set(data.data, key, value);
                  } else {
                    log.error(`${key}不在数据中`);
                  }
                });
                $form.querySelectorAll(
                  ".rule-form-ulist-dynamic__inner-container"
                ).forEach(($inner) => {
                  let dynamicData = {};
                  $inner.querySelectorAll(".dynamic-forms > li").forEach(($li) => {
                    let formConfig = Reflect.get($li, "__formConfig__");
                    if (!formConfig) {
                      return;
                    }
                    let attrs = Reflect.get(formConfig, "attributes");
                    if (!attrs) {
                      return;
                    }
                    let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                    let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                    let defaultValue = Reflect.get(
                      attrs,
                      ATTRIBUTE_DEFAULT_VALUE
                    );
                    let value = storageApi.get(key, defaultValue);
                    Reflect.set(dynamicData, key, value);
                  });
                  data.dynamicData.push(dynamicData);
                });
                if (data.name.trim() === "") {
                  Qmsg.error("规则名称不能为空");
                  return {
                    success: false,
                    data
                  };
                }
                if (data.data.url.trim() === "") {
                  Qmsg.error("匹配网址不能为空");
                  return {
                    success: false,
                    data
                  };
                }
                if (data.data.searchValue.trim() === "" || Array.isArray(data.dynamicData) && data.dynamicData.findIndex(
                  (it) => it.searchValue.trim() === ""
                ) !== -1) {
                  Qmsg.error("字符规则不能为空");
                  return {
                    success: false,
                    data
                  };
                }
                if (isEdit) {
                  return {
                    success: this.updateData(data),
                    data
                  };
                } else {
                  return {
                    success: this.addData(data),
                    data
                  };
                }
              }
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return that.deleteData(data);
              }
            }
          },
          data: () => {
            return this.getData();
          },
          getAddData: () => {
            return addData();
          },
          getData: (data) => {
            let allData = this.getData();
            let findValue = allData.find((item) => item.uuid === data.uuid);
            return findValue ?? data;
          },
          getDataItemName: (data) => {
            return data["name"] ?? data.data.url;
          },
          updateData: (data) => {
            return this.updateData(data);
          },
          deleteData: (data) => {
            return this.deleteData(data);
          }
        }
      };
      return rulePanelViewOption;
    },
    /**
     * 根据url获取匹配的规则
     * @param [filterUnEnable=true] 是否过滤掉未启用的规则
     * @param url 需要匹配的url
     */
    getUrlMatchedRule(filterUnEnable = true, url = window.location.href) {
      let allData = this.getData();
      let allSubscribeRule = CharacterMappingSubscribe.getAllSubscribeRule(filterUnEnable);
      allData = allData.concat(allSubscribeRule);
      return allData.filter((rule) => {
        if (filterUnEnable && !rule.enable) {
          return;
        }
        return Boolean(url.match(rule.data.url));
      });
    },
    /**
     * 获取格式化可用的规则
     * @param url 匹配网址
     */
    getMappingData(url = window.location.href) {
      let matchedRule = this.getUrlMatchedRule(true, url);
      let replaceMappingData = [];
      matchedRule.forEach((data) => {
        try {
          let iteratorData = Array.isArray(data.dynamicData) ? [...data.dynamicData].concat(data.data) : [data.data];
          for (let index = 0; index < iteratorData.length; index++) {
            const moreDataItem = iteratorData[index];
            if (moreDataItem.isRegExp) {
              replaceMappingData.push({
                searchValue: new RegExp(
                  moreDataItem.searchValue,
                  moreDataItem.regExpFlag
                ),
                replaceValue: moreDataItem.replaceValue
              });
            } else {
              replaceMappingData.push({
                searchValue: moreDataItem.searchValue,
                replaceValue: moreDataItem.replaceValue
              });
            }
          }
        } catch (error) {
          log.error("字符映射规则转换发生错误：", error);
        }
      });
      return replaceMappingData;
    },
    /**
     * 获取数据
     */
    getData() {
      return _GM_getValue(this.$data.STORAGE_KEY, []);
    },
    /**
     * 设置数据
     * @param data
     */
    setData(data) {
      _GM_setValue(this.$data.STORAGE_KEY, data);
    },
    /**
     * 添加数据
     * @param data
     */
    addData(data) {
      let localData = this.getData();
      let findIndex = localData.findIndex((item) => item.uuid == data.uuid);
      if (findIndex === -1) {
        localData.push(data);
        _GM_setValue(this.$data.STORAGE_KEY, localData);
        return true;
      } else {
        return false;
      }
    },
    /**
     * 更新数据
     * @param data
     */
    updateData(data) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data.uuid);
      let updateFlag = false;
      if (index !== -1) {
        updateFlag = true;
        localData[index] = data;
      }
      this.setData(localData);
      return updateFlag;
    },
    /**
     * 删除数据
     * @param data
     */
    deleteData(data) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data.uuid);
      let deleteFlag = false;
      if (index !== -1) {
        deleteFlag = true;
        localData.splice(index, 1);
      }
      this.setData(localData);
      return deleteFlag;
    },
    /**
     * 清空数据
     */
    clearData() {
      _GM_deleteValue(this.$data.STORAGE_KEY);
    },
    /**
     * 导出规则
     */
    exportRule(fileName = "rule.json", subscribeFileName = "rule-subscribe.json") {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导出方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='only-export-rule-list']"
      );
      let $exportToSubscribe = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='export-to-subscribe']"
      );
      let exportFile = (__fileName__, __data__) => {
        let blob = new Blob([JSON.stringify(__data__, null, 4)]);
        let blobUrl = window.URL.createObjectURL(blob);
        let $a = document.createElement("a");
        $a.href = blobUrl;
        $a.download = __fileName__;
        $a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 1500);
      };
      domUtils.on($onlyExportRuleList, "click", (event) => {
        utils.preventEvent(event);
        try {
          let allRule = this.getData();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          exportFile(fileName, allRule);
          $alert.close();
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
      domUtils.on($exportToSubscribe, "click", (event) => {
        utils.preventEvent(event);
        const that = this;
        $alert.close();
        try {
          let allRule = this.getData();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          let panelHandlerComponents = __pops.config.PanelHandlerComponents();
          let generateStorageApi = function(data) {
            return {
              get(key, defaultValue) {
                return data[key] ?? defaultValue;
              },
              set(key, value) {
                data[key] = value;
                CharacterMappingStorageApi.set(
                  that.$data.EXPORT_CONFIG_KEY,
                  data
                );
              }
            };
          };
          let exportCallBack = () => {
            let configData2 = CharacterMappingStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
            if (configData2?.title === "" || configData2.title == null) {
              Qmsg.error("订阅标题不能为空");
              return;
            }
            if (configData2.version == null) {
              Qmsg.error("版本号不能为空");
              return;
            } else {
              configData2.version = Number(configData2.version);
            }
            if (configData2.homePage == null) {
              configData2.homePage = void 0;
            }
            configData2.lastModified = Date.now();
            configData2.ruleData = this.getData();
            exportFile(subscribeFileName, configData2);
            $exportSubscribeDialog.close();
          };
          let $exportSubscribeDialog = NetDiskPops.alert({
            title: {
              text: "请填写导出配置",
              position: "center"
            },
            content: {
              text: (
                /*html*/
                `
							
						`
              ),
              html: true
            },
            btn: {
              ok: {
                enable: true,
                text: "导出",
                callback(details, event2) {
                  exportCallBack();
                }
              },
              close: {
                enable: true,
                callback(details, event2) {
                  details.close();
                }
              }
            },
            mask: {
              enable: true
            },
            drag: true,
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: (
              /*css*/
              `
						${__pops.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`
            )
          });
          let $content = $exportSubscribeDialog.$shadowRoot.querySelector(
            ".pops-alert-content"
          );
          let configData = CharacterMappingStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
          let title_template = UIInput("订阅标题", "title", "", "", void 0, "");
          Reflect.set(
            title_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $title = panelHandlerComponents.createSectionContainerItem_input(
            title_template
          );
          let version_template = UIInput(
            "版本号",
            "version",
            "",
            "",
            void 0,
            "",
            false
          );
          Reflect.set(
            version_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $version = panelHandlerComponents.createSectionContainerItem_input(
            version_template
          );
          let homePage_template = UIInput(
            "主页地址",
            "homePage",
            "",
            "",
            void 0,
            "选填"
          );
          Reflect.set(
            homePage_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $homePage = panelHandlerComponents.createSectionContainerItem_input(
            homePage_template
          );
          domUtils.append($content, $title);
          domUtils.append($content, $version);
          domUtils.append($content, $homePage);
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
    },
    /**
     * 导入规则
     * @param importEndCallBack 导入完毕后的回调
     */
    importRule(importEndCallBack) {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导入方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `
        )
      });
      let $local = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='local']"
      );
      let $network = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='network']"
      );
      let $clipboard = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='clipboard']"
      );
      let updateRuleToStorage = (data) => {
        let allData = this.getData();
        let addNewData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1) ;
          else {
            addNewData.push(dataItem);
          }
        }
        allData = allData.concat(addNewData);
        this.setData(allData);
        Qmsg.success(`共 ${data.length} 条规则，新增 ${addNewData.length} 条`);
        importEndCallBack?.();
      };
      let importFile = (subscribeText) => {
        return new Promise((resolve) => {
          let data = utils.toJSON(subscribeText);
          if (!Array.isArray(data)) {
            log.error(data);
            Qmsg.error("导入失败，格式不符合（不是数组）", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json"
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          if (!$input.files?.length) {
            return;
          }
          let uploadFile = $input.files[0];
          let fileReader = new FileReader();
          fileReader.onload = () => {
            importFile(fileReader.result);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $prompt = NetDiskPops.prompt({
          title: {
            text: "网络导入",
            position: "center"
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              }
            },
            ok: {
              text: "导入",
              callback: async (eventDetails, event2) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                let $loading = Qmsg.loading("正在获取配置...");
                let response = await httpx.get(url, {
                  allowInterceptConfig: false
                });
                $loading.close();
                if (!response.status) {
                  log.error(response);
                  Qmsg.error("获取配置失败", { consoleLogContent: true });
                  return;
                }
                let flag = await importFile(response.data.responseText);
                if (!flag) {
                  return;
                }
                eventDetails.close();
              }
            },
            cancel: {
              enable: false
            }
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto"
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(
          ".pops-prompt-btn-ok"
        );
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard(
          $promptInput,
          "keydown",
          (keyName, keyValue, otherCodeList) => {
            if (keyName === "Enter" && otherCodeList.length === 0) {
              let value = domUtils.val($promptInput);
              if (value !== "") {
                utils.dispatchEvent($promptOk, "click");
              }
            }
          }
        );
        utils.dispatchEvent($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        utils.preventEvent(event);
        $alert.close();
        let clipboardInfo = await utils.getClipboardInfo();
        if (clipboardInfo.error != null) {
          Qmsg.error(clipboardInfo.error.toString());
          return;
        }
        if (clipboardInfo.content.trim() === "") {
          Qmsg.warning("获取到的剪贴板内容为空");
          return;
        }
        let flag = await importFile(clipboardInfo.content);
        if (!flag) {
          return;
        }
      });
    }
  };
  const NetDiskWorkerInitError = {
    /**
     * 添加不再提示的Host
     * @param hostName Host名称
     */
    addHost(hostName) {
      let neverTipHostNameList = this.getList();
      if (!neverTipHostNameList.includes(hostName)) {
        neverTipHostNameList.push(hostName);
      }
      this.updateList(neverTipHostNameList);
    },
    /**
     * 查找Host是否已添加
     * @param hostName Host名称
     */
    findHost(hostName) {
      let neverTipHostNameList = this.getList();
      let findIndex = neverTipHostNameList.findIndex((it) => it === hostName);
      return findIndex !== -1;
    },
    /**
     * 移除不再提示的Host
     * @param hostName Host名称
     */
    removeHost(hostName) {
      let neverTipHostNameList = this.getList();
      let flag = false;
      let findIndex = neverTipHostNameList.findIndex((it) => it === hostName);
      if (findIndex !== -1) {
        flag = true;
        neverTipHostNameList.splice(findIndex, 1);
        this.updateList(neverTipHostNameList);
      }
      return flag;
    },
    /**
     * 获取不再提示的Host列表
     */
    getList() {
      let neverTipHostNameList = _GM_getValue(
        NetDiskWorker.neverTipWorkerInitErrorKey,
        []
      );
      if (!Array.isArray(neverTipHostNameList)) {
        neverTipHostNameList = [neverTipHostNameList];
      }
      return neverTipHostNameList;
    },
    /**
     * 更新Host列表
     * @param hostNameList Host名称列表
     */
    updateList(hostNameList) {
      _GM_setValue(NetDiskWorker.neverTipWorkerInitErrorKey, hostNameList);
    }
  };
  class RuleFilterView {
    option;
    constructor(option) {
      this.option = option;
    }
    showView() {
      let $alert = __pops.alert({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                <div class="filter-container"></div>
                `
          )
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default"
          }
        },
        drag: true,
        mask: {
          enable: true
        },
        width: window.innerWidth > 500 ? "350px" : "80vw",
        height: window.innerHeight > 500 ? "300px" : "70vh",
        style: (
          /*css*/
          `
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
            `
        )
      });
      let $filterContainer = $alert.$shadowRoot.querySelector(".filter-container");
      let $fragment = document.createDocumentFragment();
      this.option.filterOption.forEach((filterOption) => {
        let $button = document.createElement("button");
        $button.innerText = filterOption.name;
        let execFilterAndCloseDialog = async () => {
          let allRuleInfo = await this.option.getAllRuleInfo();
          allRuleInfo.forEach(async (ruleInfo) => {
            let filterResult = await filterOption.filterCallBack(ruleInfo.data);
            if (!filterResult) {
              domUtils.hide(ruleInfo.$el, false);
            } else {
              domUtils.show(ruleInfo.$el, false);
            }
          });
          if (typeof this.option.execFilterCallBack === "function") {
            await this.option.execFilterCallBack();
          }
          $alert.close();
        };
        domUtils.on($button, "click", async (event) => {
          utils.preventEvent(event);
          if (typeof filterOption.callback === "function") {
            let result = await filterOption.callback(
              event,
              execFilterAndCloseDialog
            );
            if (!result) {
              return;
            }
          }
          await execFilterAndCloseDialog();
        });
        $fragment.appendChild($button);
      });
      $filterContainer.appendChild($fragment);
    }
  }
  class RuleEditView {
    option;
    constructor(option) {
      this.option = option;
    }
    /**
     * 显示视图
     */
    async showView() {
      let $dialog = __pops.confirm({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `
          ),
          html: true
        },
        btn: utils.assign(
          {
            ok: {
              callback: async () => {
                await submitSaveOption();
              }
            }
          },
          this.option.btn || {},
          true
        ),
        drag: true,
        mask: {
          enable: true
        },
        style: (
          /*css*/
          `
                ${__pops.config.cssText.panelCSS}
                
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

                ${this.option?.style ?? ""}
            `
        ),
        width: typeof this.option.width === "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
        height: typeof this.option.height === "function" ? this.option.height() : window.innerHeight > 500 ? "500px" : "80vh"
      });
      let $form = $dialog.$shadowRoot.querySelector(
        ".rule-form-container"
      );
      $dialog.$shadowRoot.querySelector(
        "input[type=submit]"
      );
      let $ulist = $dialog.$shadowRoot.querySelector(".rule-form-ulist");
      let view = await this.option.getView(await this.option.data());
      $ulist.appendChild(view);
      const submitSaveOption = async () => {
        let result = await this.option.onsubmit($form, await this.option.data());
        if (!result.success) {
          return;
        }
        $dialog.close();
        await this.option.dialogCloseCallBack(true);
      };
    }
  }
  class RulePanelView {
    option;
    constructor(option) {
      this.option = option;
    }
    /**
     * 显示视图
     * @param filterCallBack 返回值为false隐藏，true则不隐藏（不处理）
     */
    async showView(filterCallBack) {
      const that = this;
      let contentConfigList = this.option.contentConfig;
      contentConfigList.forEach((config) => {
        config.forms = [];
        config.headerTitle = config.headerTitle || config.title;
        if (config.subscribe?.enable) {
          config.headerTitle = config.headerTitle + /*html*/
          `
                <div class="subscribe-container">
                    <button class="subscribe-btn" type="subscribe" data-has-icon="false" data-righticon="false">
                        <span>${config.subscribe?.title || "订阅"}</span>
                    </button>
                </div>
            `;
        }
        let originCallBack = config.clickCallback;
        config.clickCallback = async (event, $panelRightHeader, $panelRightContainer) => {
          if (typeof originCallBack === "function") {
            originCallBack(event, $panelRightContainer, $panelRightContainer);
          }
          if (config.subscribe && config.subscribe.enable) {
            let $subscribe = $panelRightHeader.querySelector(".subscribe-btn");
            const subscribeOption = config.subscribe;
            domUtils.on($subscribe, "click", async (event2) => {
              utils.preventEvent(event2);
              await subscribeOption?.callback?.();
              let deepMenuElementInfo = this.enterDeepMenu(
                $panelRightContainer,
                subscribeOption?.headerTitle || subscribeOption?.title || "订阅",
                () => {
                  this.updateRuleContaienrElement(
                    config.ruleOption,
                    subscribeOption,
                    $panelRightContainer
                  );
                }
              );
              let $subscribeRightContainer = deepMenuElementInfo.$rightRuleContainer;
              this.createButtonControls(
                $subscribeRightContainer,
                deepMenuElementInfo.$section,
                subscribeOption,
                async () => {
                  let $prompt = __pops.prompt({
                    title: {
                      text: "添加订阅",
                      position: "center"
                    },
                    content: {
                      text: "",
                      focus: true,
                      placeholder: "输入URL"
                    },
                    btn: {
                      cancel: {
                        enable: false
                      },
                      ok: {
                        enable: true,
                        text: "下一步",
                        async callback(eventDetails, event3) {
                          let subscribeUrl = domUtils.val($promptInput).trim();
                          if (subscribeUrl === "") {
                            return;
                          }
                          log.info(`订阅：` + subscribeUrl);
                          let $loading = Qmsg.loading("正在获取订阅信息...");
                          try {
                            let subscribeInfoResult = await subscribeOption?.getSubscribeInfo(
                              subscribeUrl
                            );
                            if (subscribeInfoResult.data) {
                              eventDetails.close();
                              let subscribeInfo = subscribeInfoResult.data;
                              let title = subscribeInfo.data.title || subscribeInfo.subscribeData.title || subscribeInfo.data.url;
                              let $subscribeNetworkAddDialog = __pops.alert({
                                title: {
                                  text: "添加订阅",
                                  position: "center"
                                },
                                content: {
                                  text: (
                                    /*html*/
                                    `
																	<div class="subscribe-network-title">
																		<span>订阅链接名称：</span>
																		<input type="text" placeholder="输入订阅链接的名称">
																	</div>
																	<div class="subscribe-network-data-count"></div>
																	<div class="subscribe-network-home-url"></div>
																	<div class="subscribe-network-url"></div>
																	<div class="subscribe-network-version"></div>
																	<div class="subscribe-network-last-modified"></div>
																`
                                  ),
                                  html: true
                                },
                                btn: {
                                  ok: {
                                    text: "添加",
                                    type: "subscribe",
                                    callback: async (eventDetails2, event4) => {
                                      let addFlag = await subscribeOption.addData(
                                        subscribeInfo
                                      );
                                      if (!addFlag) {
                                        Qmsg.error("该订阅已存在", {
                                          consoleLogContent: true
                                        });
                                      }
                                      that.updateRuleContaienrElement(
                                        subscribeOption,
                                        subscribeOption,
                                        deepMenuElementInfo.$section
                                      );
                                      eventDetails2.close();
                                    }
                                  }
                                },
                                drag: true,
                                mask: {
                                  enable: true
                                },
                                width: PanelUISize.setting.width,
                                height: "auto",
                                style: (
                                  /*css*/
                                  `
																.pops button[type="subscribe"]{
																	--button-color: #ffffff;
																	--button-bd-color: #67b279;
																	--button-bg-color: #67b279;
																}
																.pops button[type="subscribe"]:hover{
																	--button-color: #ffffff;
																	--button-bd-color:rgb(91, 159, 107);;
																	--button-bg-color:rgb(91, 159, 107);;
																}

																.pops-alert-content{
																	display: flex;
																	flex-direction: column;
																	gap: 4px;
																	padding: 20px;
																}
																.pops-alert-content a {
																	color: #3d3d3d;
																}
																.pops-alert-content > div{
																	display: flex;
																}
																.pops-alert-content > div > span:first-child{
																	white-space: nowrap;
																}
																.subscribe-network-title input{
																	width: 100%;
																	flex: 1 1 auto;
																	line-height: 1.3;
																	outline: none;
																	text-overflow: ellipsis;
																	border-radius: 8px;
																	border: 1px solid #e4e4e4;
																	background-color: #f6f6f6;
																	padding: 16px 16px 16px 16px;
																	font-size: 16px;
																}
																.subscribe-network-title input:focus{

																}
															`
                                )
                              });
                              let $subscribeNetworkAddDialog_title_input = $subscribeNetworkAddDialog.$shadowRoot.querySelector(
                                ".subscribe-network-title input"
                              );
                              let $subscribeNetworkAddDialog_count = $subscribeNetworkAddDialog.$shadowRoot.querySelector(
                                ".subscribe-network-data-count"
                              );
                              let $subscribeNetworkAddDialog_homeUrl = $subscribeNetworkAddDialog.$shadowRoot.querySelector(
                                ".subscribe-network-home-url"
                              );
                              let $subscribeNetworkAddDialog_url = $subscribeNetworkAddDialog.$shadowRoot.querySelector(
                                ".subscribe-network-url"
                              );
                              let $subscribeNetworkAddDialog_version = $subscribeNetworkAddDialog.$shadowRoot.querySelector(
                                ".subscribe-network-version"
                              );
                              let $subscribeNetworkAddDialog_lastModified = $subscribeNetworkAddDialog.$shadowRoot.querySelector(
                                ".subscribe-network-last-modified"
                              );
                              domUtils.val(
                                $subscribeNetworkAddDialog_title_input,
                                title
                              );
                              domUtils.on(
                                $subscribeNetworkAddDialog_title_input,
                                ["input", "propertychange"],
                                (event4) => {
                                  let inputValue = domUtils.val(
                                    $subscribeNetworkAddDialog_title_input
                                  );
                                  subscribeInfo.data.title = inputValue === "" ? void 0 : inputValue;
                                }
                              );
                              domUtils.html(
                                $subscribeNetworkAddDialog_count,
                                /*html*/
                                `
																<span>规则数量：</span>
																<span>${subscribeInfo.subscribeData.ruleData.length}</span>
															`
                              );
                              if (typeof subscribeInfo.subscribeData.homePage === "string") {
                                domUtils.html(
                                  $subscribeNetworkAddDialog_homeUrl,
                                  /*html*/
                                  `
																<span>主页：</span>
																<a href="${subscribeInfo.subscribeData.homePage}" target="_blank">${subscribeInfo.subscribeData.homePage}</a>
															`
                                );
                              } else {
                                $subscribeNetworkAddDialog_homeUrl.remove();
                              }
                              domUtils.html(
                                $subscribeNetworkAddDialog_url,
                                /*html*/
                                `
																<span>URL：</span>
																<a href="${subscribeInfo.data.url}" target="_blank">${subscribeInfo.data.url}</a>
															`
                              );
                              if (subscribeInfo.subscribeData.version != null) {
                                domUtils.html(
                                  $subscribeNetworkAddDialog_version,
                                  /*html*/
                                  `
																	<span>版本：</span>
																	<span>${subscribeInfo.subscribeData.version}</span>
																`
                                );
                              } else {
                                $subscribeNetworkAddDialog_version.remove();
                              }
                              if (subscribeInfo.subscribeData.lastModified != null) {
                                domUtils.html(
                                  $subscribeNetworkAddDialog_lastModified,
                                  /*html*/
                                  `
																	<span>更新时间：</span>
																	<span>${utils.formatTime(subscribeInfo.subscribeData.lastModified)}</span>
																`
                                );
                              } else {
                                $subscribeNetworkAddDialog_lastModified.remove();
                              }
                            } else {
                              Qmsg.error(subscribeInfoResult.msg, {
                                consoleLogContent: true
                              });
                            }
                          } catch (error) {
                            Qmsg.error(error.toString(), {
                              consoleLogContent: true
                            });
                          } finally {
                            $loading.close();
                          }
                        }
                      }
                    },
                    drag: true,
                    mask: {
                      enable: true
                    },
                    width: PanelUISize.info.width,
                    height: "auto"
                  });
                  let $promptInput = $prompt.$shadowRoot.querySelector("input");
                  let $promptOk = $prompt.$shadowRoot.querySelector(
                    ".pops-prompt-btn-ok "
                  );
                  domUtils.on(
                    $promptInput,
                    ["input", "propertychange"],
                    (event3) => {
                      let promptValue = domUtils.val($promptInput);
                      if (promptValue === "") {
                        domUtils.attr($promptOk, "disabled", "true");
                      } else {
                        domUtils.removeAttr($promptOk, "disabled");
                      }
                    }
                  );
                  domUtils.listenKeyboard(
                    $promptInput,
                    "keydown",
                    (keyName, keyValue, otherCodeList, event3) => {
                      if (keyName === "Enter" && otherCodeList.length === 0) {
                        utils.preventEvent(event3);
                        utils.dispatchEvent($promptOk, "click");
                      }
                    }
                  );
                  utils.dispatchEvent($promptInput, "input");
                }
              );
              let allSubscribeData = await subscribeOption.data();
              await this.addRuleElement(
                subscribeOption,
                subscribeOption,
                deepMenuElementInfo.$section,
                allSubscribeData
              );
            });
          }
          let ruleCreateViewElementInfo = this.createButtonControls(
            $panelRightContainer,
            $panelRightContainer,
            config.ruleOption,
            async () => {
              this.showEditView(
                config.ruleOption,
                void 0,
                false,
                await config.ruleOption.getAddData(),
                $panelRightContainer
              );
            }
          );
          let allData = await config.ruleOption.data();
          let changeButtonText = false;
          await this.addRuleElement(
            config.ruleOption,
            void 0,
            $panelRightContainer,
            allData,
            (ruleItemData, $rule) => {
              let flag = typeof filterCallBack === "function" ? filterCallBack(ruleItemData) : true;
              if (!flag) {
                changeButtonText = true;
                domUtils.hide($rule, false);
              }
            }
          );
          if (changeButtonText && ruleCreateViewElementInfo.$ruleControlFilter) {
            domUtils.text(
              ruleCreateViewElementInfo.$ruleControlFilter,
              "取消过滤"
            );
          }
        };
      });
      __pops.panel({
        title: {
          text: typeof this.option.title === "function" ? this.option.title() : this.option.title,
          position: "center"
        },
        // @ts-ignore
        content: contentConfigList,
        btn: {
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        drag: true,
        mask: {
          enable: true,
          clickEvent: {
            toClose: false
          }
        },
        class: this.option.className || "rule-panel-view",
        width: PanelUISize.settingBig.width,
        height: PanelUISize.settingBig.height,
        style: (
          /*css*/
          `
                ${this.option.style || ""}
                .pops button[type="subscribe"]{
                    --button-color: #ffffff;
                    --button-bd-color: #67b279;
                    --button-bg-color: #67b279;
                }
                .pops button[type="subscribe"]:hover{
                    --button-color: #ffffff;
                    --button-bd-color:rgb(91, 159, 107);;
                    --button-bg-color:rgb(91, 159, 107);;
                }
                section.pops-panel-container .pops-panel-container-header-ul li:has(.subscribe-btn){
                    justify-content: space-between !important;
                }
				section.pops-panel-container ul li.rule-controls{
					justify-content: flex-start;
					overflow-x: auto;
				}

				section.pops-panel-container ul:has(>.rule-view-container){
					overflow: hidden;
					display: flex;
					flex-direction: column;
				}

				.rule-view-container{
					margin: var(--pops-panel-forms-margin-top-bottom) calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-margin-left-right));
					margin-top: 0;
					overflow: auto;
					background: #ffffff;
					border-radius: var(--pops-panel-forms-container-item-border-radius);
					padding: 5px 10px;
					position: relative;
					flex: 1;
				}
				.rule-view-container:empty{
					display: none;
				}
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
            `
        )
      });
    }
    /**
     * 进入深层菜单
     *
     * 隐藏上一层的<section>，添加本层的<section>
     * @param $el 当前菜单的元素或<section>
     * @param headerTitle 标题
     * @param quiteDeepMenuCallBack 返回上一层回调，一般用于触发外部的渲染更新
     */
    enterDeepMenu($el, headerTitle, quiteDeepMenuCallBack) {
      let $prevSection = $el.matches("section") ? $el : $el.closest("section");
      domUtils.addClass($prevSection, "pops-hide-important");
      let $section = domUtils.createElement("section", {
        className: "pops-panel-container pops-panel-deepMenu-container",
        innerHTML: (
          /*html*/
          `
				<ul class="pops-panel-deepMenu-container-header-ul">
					<div class="pops-panel-deepMenu-container-header">
						<i class="pops-panel-deepMenu-container-left-arrow-icon">${__pops.config.iconSVG.arrowLeft}</i>
						<p>${headerTitle}</p>
					</div>
				</ul>
				<ul class="pops-panel-ulist-container"></ul>
			`
        )
      });
      domUtils.after($prevSection, $section);
      let $headerContainer = $section.querySelector(
        ".pops-panel-deepMenu-container-header-ul"
      );
      let $arrowLeft = $section.querySelector(
        ".pops-panel-deepMenu-container-left-arrow-icon"
      );
      let $rightRuleContainer = $section.querySelector(
        ".pops-panel-ulist-container"
      );
      domUtils.on($arrowLeft, "click", (event) => {
        utils.preventEvent(event);
        let $before = domUtils.prev($section);
        domUtils.remove($section);
        if ($before) {
          domUtils.removeClass($before, "pops-hide-important");
        }
        quiteDeepMenuCallBack();
      });
      return {
        $section,
        $headerContainer,
        $arrowLeft,
        $rightRuleContainer,
        /**
         * 退出菜单
         */
        quiteDeepMenu: () => {
          $arrowLeft.click();
        }
      };
    }
    /**
     * 创建各个按钮元素
     * @param $controlsParent 控制按钮的父元素
     * @param $rightContainer 右侧容器
     * @param option 配置
     * @param addButtonCallBack 添加按钮的回调
     */
    createButtonControls($controlsParent, $rightContainer, option, addButtonCallBack) {
      let btnControlsOption = option.btnControls;
      let $ruleControls = domUtils.createElement("li", {
        className: "rule-controls"
      });
      domUtils.append($controlsParent, $ruleControls);
      let $ruleControlAdd = null;
      if (btnControlsOption?.add?.enable) {
        $ruleControlAdd = domUtils.createElement(
          "button",
          {
            className: "rule-control-add",
            innerHTML: (
              /*html*/
              `<span>添加</span>`
            )
          },
          {
            type: "primary",
            "data-has-icon": "false",
            "data-righticon": "false"
          }
        );
        domUtils.on($ruleControlAdd, "click", async (event) => {
          utils.preventEvent(event);
          let result = await option.btnControls?.add?.callback?.call(this, {
            event,
            $section: $rightContainer
          });
          if (typeof result === "boolean" && !result) {
            return;
          }
          await addButtonCallBack?.();
        });
        domUtils.append($ruleControls, $ruleControlAdd);
      }
      let $ruleControlFilter = null;
      if (btnControlsOption?.filter?.enable) {
        $ruleControlFilter = domUtils.createElement(
          "button",
          {
            className: "rule-control-filter",
            innerHTML: (
              /*html*/
              `<span>过滤</span>`
            )
          },
          {
            type: "default",
            "data-has-icon": "false",
            "data-righticon": "false"
          }
        );
        domUtils.on($ruleControlFilter, "click", async (event) => {
          utils.preventEvent(event);
          let result = await btnControlsOption?.filter?.callback?.();
          if (typeof result === "boolean" && !result) {
            return;
          }
          let getAllRuleElement = () => {
            return Array.from(
              $rightContainer.querySelectorAll(
                ".rule-view-container .rule-item"
              )
            );
          };
          let $button = $ruleControlFilter;
          if ($button) {
            if (domUtils.text($button).includes("取消")) {
              getAllRuleElement().forEach(($el) => {
                domUtils.show($el, false);
              });
              domUtils.text($button, "过滤");
            } else {
              let filterTitle = "过滤规则";
              if (typeof btnControlsOption?.filter?.title === "function") {
                filterTitle = btnControlsOption?.filter?.title();
              } else if (typeof btnControlsOption?.filter?.title === "string") {
                filterTitle = btnControlsOption?.filter?.title;
              }
              let ruleFilterView = new RuleFilterView(
                {
                  title: filterTitle,
                  // @ts-ignore
                  filterOption: btnControlsOption?.filter?.option || [],
                  execFilterCallBack() {
                    domUtils.text($button, "取消过滤");
                  },
                  getAllRuleInfo: () => {
                    return getAllRuleElement().map(($el) => {
                      return {
                        data: this.parseRuleElement(
                          $el
                        ).data,
                        $el
                      };
                    });
                  }
                }
              );
              ruleFilterView.showView();
            }
          }
        });
        domUtils.append($ruleControls, $ruleControlFilter);
      }
      let $ruleControlClearAll = null;
      if (btnControlsOption?.clearAll?.enable) {
        $ruleControlClearAll = domUtils.createElement(
          "button",
          {
            className: "rule-control-clear-all",
            innerHTML: (
              /*html*/
              `<span>清空所有</span>`
            )
          },
          {
            type: "xiaomi-primary",
            "data-has-icon": "false",
            "data-righticon": "false"
          }
        );
        domUtils.on($ruleControlClearAll, "click", (event) => {
          utils.preventEvent(event);
          let $askDialog = __pops.confirm({
            title: {
              text: "提示",
              position: "center"
            },
            content: {
              text: "确定清空所有的数据？",
              html: false
            },
            btn: {
              ok: {
                enable: true,
                callback: async (popsEvent) => {
                  log.success("清空所有");
                  let result = await btnControlsOption?.clearAll?.callback?.();
                  if (typeof result === "boolean" && !result) {
                    return;
                  }
                  let data = await option?.data();
                  if (!data || data.length) {
                    Qmsg.error("清理失败");
                    return;
                  } else {
                    Qmsg.success("清理成功");
                  }
                  await this.updateDeleteAllBtnText(option, $ruleControls);
                  this.clearContent($rightContainer);
                  $askDialog.close();
                }
              },
              cancel: {
                text: "取消",
                enable: true
              }
            },
            drag: true,
            mask: {
              enable: true
            },
            width: "300px",
            height: "200px"
          });
        });
        domUtils.append($ruleControls, $ruleControlClearAll);
      }
      let $ruleControlImport = null;
      if (btnControlsOption?.import?.enable) {
        $ruleControlImport = domUtils.createElement(
          "button",
          {
            className: "rule-control-import",
            innerHTML: (
              /*html*/
              `<span>导入</span>`
            )
          },
          {
            type: "default",
            "data-has-icon": "false",
            "data-righticon": "false"
          }
        );
        domUtils.on($ruleControlImport, "click", async (event) => {
          utils.preventEvent(event);
          let result = await btnControlsOption?.import?.callback?.(() => {
            this.updateRuleContaienrElement(option, void 0, $rightContainer);
          });
          if (typeof result === "boolean" && !result) {
            return;
          }
        });
        domUtils.append($ruleControls, $ruleControlImport);
      }
      let $ruleControlExport = null;
      if (btnControlsOption?.export?.enable) {
        $ruleControlExport = domUtils.createElement(
          "button",
          {
            className: "rule-control-export",
            innerHTML: (
              /*html*/
              `<span>导出</span>`
            )
          },
          {
            type: "default",
            "data-has-icon": "false",
            "data-righticon": "false"
          }
        );
        domUtils.on($ruleControlExport, "click", async (event) => {
          utils.preventEvent(event);
          let result = await btnControlsOption?.export?.callback?.({
            event
          });
          if (typeof result === "boolean" && !result) {
            return;
          }
        });
        domUtils.append($ruleControls, $ruleControlExport);
      }
      let $ruleContainer = domUtils.createElement("div", {
        className: "rule-view-container",
        innerHTML: (
          /*html*/
          ``
        )
      });
      domUtils.append($rightContainer, $ruleContainer);
      return {
        $ruleContainer,
        $ruleControls,
        $ruleControlAdd,
        $ruleControlFilter,
        $ruleControlClearAll,
        $ruleControlImport,
        $ruleControlExport
      };
    }
    /**
     * 解析弹窗内的各个元素
     * @param $el
     */
    parseViewElement($el) {
      let $container = $el.querySelector(".rule-view-container");
      let $deleteBtn = $el.querySelector(
        ".rule-control-clear-all"
      );
      return {
        /** 容器 */
        $container,
        /** 左下角的清空按钮 */
        $deleteBtn
      };
    }
    /**
     * 解析规则元素
     * @param $ruleItem 规则元素
     */
    parseRuleElement($ruleItem) {
      let $enable = $ruleItem.querySelector(
        ".rule-controls-enable"
      );
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(
        ".pops-panel-switch__input"
      );
      let $enableSwitchCore = $enable.querySelector(
        ".pops-panel-switch__core"
      );
      let $edit = $ruleItem.querySelector(".rule-controls-edit");
      let $delete = $ruleItem.querySelector(
        ".rule-controls-delete"
      );
      return {
        /** 启用开关 */
        $enable,
        /** 启用开关的container */
        $enableSwitch,
        /** 启用开关的input */
        $enableSwitchInput,
        /** 启用开关的core */
        $enableSwitchCore,
        /** 编辑按钮 */
        $edit,
        /** 删除按钮 */
        $delete,
        /** 存储在元素上的数据 */
        data: Reflect.get($ruleItem, "data-rule")
      };
    }
    /**
     * 创建规则元素
     * @param option 规则配置
     * @param subscribeOption 订阅配置
     * @param data 规则数据
     * @param $el 元素
     */
    async createRuleElement(option, subscribeOption, data, $el) {
      let ruleData = data;
      let name = await option.getDataItemName(ruleData);
      let $ruleItem = domUtils.createElement("div", {
        className: "rule-item",
        innerHTML: (
          /*html*/
          `
			<div class="rule-name">${name}</div>
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
					${__pops.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${__pops.config.iconSVG.delete}
				</div>
			</div>
			`
        )
      });
      Reflect.set($ruleItem, "data-rule", ruleData);
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const {
        $enable,
        $enableSwitch,
        $enableSwitchCore,
        $enableSwitchInput,
        $delete,
        $edit
      } = this.parseRuleElement($ruleItem);
      if (option.btnControls?.ruleEnable?.enable) {
        domUtils.on($enableSwitchCore, "click", async (event) => {
          let isChecked = false;
          if ($enableSwitch.classList.contains(switchCheckedClassName)) {
            $enableSwitch.classList.remove(switchCheckedClassName);
            isChecked = false;
          } else {
            $enableSwitch.classList.add(switchCheckedClassName);
            isChecked = true;
          }
          $enableSwitchInput.checked = isChecked;
          await option?.btnControls?.ruleEnable?.callback(ruleData, isChecked);
          if (isChecked && subscribeOption) {
            let subscribeData = data;
            let subscribeInfo = await subscribeOption.getSubscribeInfo(
              subscribeData.data.url
            );
            if (subscribeInfo.data) {
              let subscribeNewItem = subscribeInfo.data;
              subscribeNewItem.uuid = subscribeData.uuid;
              subscribeNewItem.data = subscribeData.data;
              subscribeNewItem.data.latestUpdateTime = Date.now();
              await subscribeOption.updateData(subscribeNewItem);
            } else {
              subscribeData.data.updateFailedTime = Date.now();
              await subscribeOption.updateData(subscribeData);
              log.error(subscribeData);
              Qmsg.error(subscribeInfo.msg, { consoleLogContent: true });
            }
            await this.updateRuleContaienrElement(option, subscribeOption, $el);
          }
        });
        if (await option?.btnControls?.ruleEnable?.getEnable(ruleData)) {
          $enableSwitch.classList.add(switchCheckedClassName);
        }
      } else {
        $enable.remove();
      }
      if (option?.btnControls?.ruleEdit?.enable) {
        domUtils.on($edit, "click", (event) => {
          utils.preventEvent(event);
          if (typeof option.btnControls?.ruleEdit?.callback === "function") {
            let result = option.btnControls?.ruleEdit?.callback({
              context: this,
              event,
              // @ts-ignore
              option,
              // @ts-ignore
              subscribeOption,
              // @ts-ignore
              ruleData,
              $section: $el,
              $ruleItem,
              enterDeepMenu: async (deepMenuOption) => {
                let deepMenuElementInfo = this.enterDeepMenu(
                  $el,
                  deepMenuOption.headerTitle || "",
                  () => {
                    this.updateRuleContaienrElement(option, subscribeOption, $el);
                  }
                );
                let $deepMenuRightContainer = deepMenuElementInfo.$rightRuleContainer;
                this.createButtonControls(
                  $deepMenuRightContainer,
                  deepMenuElementInfo.$section,
                  // @ts-ignore
                  deepMenuOption,
                  void 0
                );
                let allRuleData = await deepMenuOption.data();
                await this.addRuleElement(
                  // @ts-ignore
                  deepMenuOption,
                  void 0,
                  deepMenuElementInfo.$section,
                  allRuleData
                );
              }
            });
            if (typeof result === "boolean" && !result) {
              return;
            }
          }
          this.showEditView(
            option,
            subscribeOption,
            true,
            ruleData,
            $el,
            $ruleItem,
            (newData) => {
              ruleData = null;
              ruleData = newData;
            }
          );
        });
      } else {
        $edit.remove();
      }
      if (option?.btnControls?.ruleDelete?.enable) {
        domUtils.on($delete, "click", (event) => {
          utils.preventEvent(event);
          let $askDialog = __pops.confirm({
            title: {
              text: "提示",
              position: "center"
            },
            content: {
              text: "确定删除该条数据？",
              html: false
            },
            btn: {
              ok: {
                enable: true,
                callback: async (popsEvent) => {
                  log.success("删除数据");
                  let flag = await option?.btnControls?.ruleDelete?.deleteCallBack(
                    ruleData
                  );
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText(option, $el);
                    $askDialog.close();
                  } else {
                    Qmsg.error("删除该数据失败");
                  }
                }
              },
              cancel: {
                text: "取消",
                enable: true
              }
            },
            drag: true,
            mask: {
              enable: true
            },
            width: "300px",
            height: "200px"
          });
        });
      } else {
        $delete.remove();
      }
      return $ruleItem;
    }
    /**
     * 添加一个规则元素
     * @param option 配置
     * @param subscribeOption 订阅的配置
     * @param $el 弹窗的元素
     * @param data 规则的数据
     * @param addCallBack 添加元素后的回调
     * @returns 返回添加的元素
     */
    async addRuleElement(option, subscribeOption, $el, data, addCallBack) {
      let { $container } = this.parseViewElement($el);
      let $ruleItem = [];
      let iteratorData = Array.isArray(data) ? data : [data];
      let documentFragment = document.createDocumentFragment();
      for (let index = 0; index < iteratorData.length; index++) {
        let item = iteratorData[index];
        let $item = await this.createRuleElement(
          option,
          subscribeOption,
          item,
          $el
        );
        documentFragment.appendChild($item);
        addCallBack?.(item, $item);
        $ruleItem.push($item);
      }
      $container.appendChild(documentFragment);
      await this.updateDeleteAllBtnText(option, $el);
      return $ruleItem;
    }
    /**
     * 更新弹窗内容的元素
     * @param option 规则的配置
     * @param subscribeOption 订阅的配置
     * @param $el 弹窗的元素
     */
    async updateRuleContaienrElement(option, subscribeOption, $el) {
      this.clearContent($el);
      const { $container } = this.parseViewElement($el);
      let data = await option.data();
      await this.addRuleElement(option, subscribeOption, $el, data);
      await this.updateDeleteAllBtnText(option, $el);
    }
    /**
     * 更新规则元素
     * @param option 规则的配置
     * @param subscribeOption 订阅的配置
     * @param data 规则的数据
     * @param $oldRule 旧的规则元素
     * @param $el 弹窗的元素
     */
    async updateRuleItemElement(option, subscribeOption, data, $oldRule, $el) {
      let $newRule = await this.createRuleElement(
        option,
        subscribeOption,
        data,
        $el
      );
      $oldRule.after($newRule);
      $oldRule.remove();
      return $newRule;
    }
    /**
     * 清空内容
     * @param $el 弹窗的元素
     */
    clearContent($el) {
      const { $container } = this.parseViewElement($el);
      domUtils.html($container, "");
    }
    /**
     * 设置删除按钮的文字
     * @param $el 弹窗的元素
     * @param text 按钮的文字
     * @param [isHTML=false] 是否是html
     */
    setDeleteBtnText($el, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($el);
      if (isHTML) {
        domUtils.html($deleteBtn, text);
      } else {
        domUtils.text($deleteBtn, text);
      }
    }
    /**
     * 更新【清空所有】的按钮的文字
     * @param option 规则的配置
     * @param $el 弹窗的元素
     */
    async updateDeleteAllBtnText(option, $el) {
      let data = await option.data();
      let dataCount = data.length;
      let text = `清空所有`;
      if (dataCount !== 0) {
        text += `(${dataCount})`;
      }
      this.setDeleteBtnText($el, text);
    }
    /**
     * 显示编辑视图
     * @param option 规则的配置
     * @param subscribeOption 订阅的配置
     * @param isEdit 是否是编辑状态
     * @param editData 编辑的数据
     * @param $parent 关闭弹窗后对ShadowRoot进行操作
     * @param $ruleItem 关闭弹窗后对规则行进行更新数据
     * @param updateDataCallBack 关闭添加/编辑弹窗的回调（不更新数据）
     * @param submitCallBack 添加/修改提交的回调
     */
    showEditView(option, subscribeOption, isEdit, editData, $parent, $ruleItem, updateDataCallBack, submitCallBack) {
      let dialogCloseCallBack = async (isSubmit) => {
        if (isSubmit) {
          if (typeof submitCallBack === "function") {
            let newData = await option.getData(
              editData
            );
            submitCallBack(newData);
          }
        } else {
          if (!isEdit) {
            await option.deleteData(editData);
          }
          if (typeof updateDataCallBack === "function") {
            let newData = await option.getData(
              editData
            );
            updateDataCallBack(newData);
          }
        }
      };
      let editView = new RuleEditView({
        title: isEdit ? "编辑" : "添加",
        data: () => {
          return editData;
        },
        dialogCloseCallBack,
        getView: async (data) => {
          return await option.btnControls?.ruleEdit?.getView?.(
            data,
            isEdit
          );
        },
        btn: {
          ok: {
            enable: true,
            text: isEdit ? "修改" : "添加"
          },
          cancel: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            }
          },
          close: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            }
          }
        },
        onsubmit: async ($form, data) => {
          let result = await option?.btnControls?.ruleEdit?.onsubmit?.(
            $form,
            isEdit,
            data
          );
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              $parent && await this.updateRuleItemElement(
                option,
                subscribeOption,
                result.data,
                $ruleItem,
                $parent
              );
            } else {
              $parent && await this.addRuleElement(
                option,
                subscribeOption,
                $parent,
                result.data
              );
            }
          } else {
            if (isEdit) {
              log.error("修改失败");
            }
          }
          return result;
        },
        style: option?.btnControls?.ruleEdit?.style,
        width: option?.btnControls?.ruleEdit?.viewWidth,
        height: option?.btnControls?.ruleEdit?.viewHeight
      });
      editView.showView();
    }
  }
  const WebsiteSubscribeRule = new RuleSubscribe$1({
    STORAGE_API_KEY: "websiteRule",
    STORAGE_KEY: "rule-subscribe"
  });
  class RuleSubscribe2 {
    option;
    storageApi;
    constructor(option) {
      this.option = option;
      this.storageApi = new StorageUtils(option.STORAGE_API_KEY);
    }
    /**
     * 获取所有订阅
     */
    getAllSubscribe() {
      let allSubscribe = this.storageApi.get(
        this.option.STORAGE_KEY,
        []
      );
      return allSubscribe;
    }
    /**
     * 获取所有订阅内的所有的规则
     * @param [filterUnEnable=false] 是否过滤掉未启用的规则（包括订阅）
     */
    getAllSubscribeRule(filterUnEnable = false) {
      let allSubscribe = this.getAllSubscribe();
      let allSubscribeRule = [];
      for (let index = 0; index < allSubscribe.length; index++) {
        const subscribeItem = allSubscribe[index];
        if (filterUnEnable && !subscribeItem.data.enable) {
          continue;
        }
        for (let subscribeIndex = 0; subscribeIndex < subscribeItem.subscribeData.ruleData.length; subscribeIndex++) {
          const subscribeRuleData = subscribeItem.subscribeData.ruleData[subscribeIndex];
          if (filterUnEnable && !subscribeRuleData.setting.enable) {
            continue;
          }
          subscribeRuleData.subscribeUUID = subscribeItem.uuid;
          allSubscribeRule.push(subscribeRuleData);
        }
      }
      return allSubscribeRule;
    }
    /**
     * 获取某个订阅
     * @param subscribeUUID 订阅的uuid
     */
    getSubscribe(subscribeUUID) {
      let findValue = this.getAllSubscribe().find(
        (rule) => rule.uuid == subscribeUUID
      );
      return findValue;
    }
    /**
     * 获取某个订阅的规则
     * @param subscribeUUID 订阅的uuid
     * @param key 规则的键
     */
    getSubscribeRule(subscribeUUID, key) {
      let findSubscribe = this.getSubscribe(subscribeUUID);
      if (findSubscribe) {
        let findRule = findSubscribe.subscribeData.ruleData.find(
          (rule) => rule.key === key
        );
        return findRule;
      }
    }
    /**
     * 删除所有订阅
     */
    deleteAllSubscribe() {
      this.storageApi.delete(this.option.STORAGE_KEY);
    }
    /**
     * 删除某个订阅
     * @param config 配置/uuid
     */
    deleteSubscribe(config) {
      let uuid = typeof config === "string" ? config : config.uuid;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === uuid
      );
      if (findIndex !== -1) {
        allSubscribe.splice(findIndex, 1);
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return findIndex !== -1;
    }
    /**
     * 清空某个订阅内的规则
     */
    clearSubscribe(config) {
      let uuid = typeof config === "string" ? config : config.uuid;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === uuid
      );
      if (findIndex !== -1) {
        allSubscribe[findIndex].subscribeData.ruleData = [];
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
        return true;
      } else {
        return false;
      }
    }
    /**
     * 新增某个订阅
     */
    addSubscribe(subscribe) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === subscribe.uuid
      );
      if (findIndex === -1) {
        allSubscribe.push(subscribe);
        flag = true;
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return flag;
    }
    /**
     * 更新某个订阅
     */
    updateSubscribe(subscribe) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === subscribe.uuid
      );
      if (findIndex !== -1) {
        allSubscribe[findIndex] = subscribe;
        flag = true;
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return flag;
    }
    /**
     * 更新某个订阅内的某个规则
     */
    updateSubscribeRule(subscribeUUID, rule) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let targetSubscribe = allSubscribe.find(
        (subscribeItem) => subscribeItem.uuid === subscribeUUID
      );
      if (targetSubscribe) {
        let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex(
          (ruleItem) => ruleItem.key === rule.key
        );
        if (findRuleIndex !== -1) {
          targetSubscribe.subscribeData.ruleData[findRuleIndex] = rule;
          flag = true;
        }
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return true;
    }
    /**
     * 删除某个订阅内的某个规则
     * @param  subscribeUUID 订阅的uuid
     * @param  rule 规则|规则的键
     */
    deleteSubscribeRule(subscribeUUID, rule) {
      let flag = false;
      let key = typeof rule === "string" ? rule : rule.key;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex(
        (subscribeItem) => subscribeItem.uuid === subscribeUUID
      );
      if (findIndex !== -1) {
        let targetSubscribe = allSubscribe[findIndex];
        let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex(
          (ruleItem) => ruleItem.key === key
        );
        if (findRuleIndex !== -1) {
          allSubscribe[findIndex].subscribeData.ruleData.splice(findRuleIndex, 1);
          this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
          flag = true;
        }
      }
      return flag;
    }
    /**
     * 获取订阅链接的数据信息
     * @param url 订阅链接
     */
    async getSubscribeInfo(url) {
      let response = await httpx.get(url, {
        allowInterceptConfig: false,
        timeout: 1e4,
        headers: {
          "User-Agent": utils.getRandomPCUA()
        }
      });
      if (!response.status) {
        log.error(response);
        return {
          data: null,
          msg: "获取订阅信息失败"
        };
      }
      let subscribeText = response.data.responseText;
      let subscribeParsedData = utils.toJSON(subscribeText);
      if (typeof subscribeParsedData.title === "string" && typeof subscribeParsedData.version === "number" && typeof subscribeParsedData.lastModified === "number" && Array.isArray(subscribeParsedData.ruleData)) {
        let subscribeInfo = {
          uuid: utils.generateUUID(),
          subscribeData: subscribeParsedData,
          data: {
            enable: true,
            url,
            latestUpdateTime: Date.now(),
            updateFailedTime: null
          }
        };
        return {
          data: subscribeInfo,
          msg: ""
        };
      } else {
        log.error(subscribeParsedData);
        return {
          data: null,
          msg: "订阅链接的内容格式不正确"
        };
      }
    }
    /**
     * 更新所有订阅
     */
    async updateAllSubscribe() {
      let allSubscribe = this.getAllSubscribe();
      for (let index = 0; index < allSubscribe.length; index++) {
        const subscribeItem = allSubscribe[index];
        if (!subscribeItem.data.enable) {
          continue;
        }
        if (typeof subscribeItem.data.updateFailedTime === "number" && utils.formatTime(subscribeItem.data.updateFailedTime, "yyyyMMdd") === utils.formatTime(Date.now(), "yyyyMMdd")) {
          continue;
        }
        if (typeof subscribeItem.data.latestUpdateTime === "number" && utils.formatTime(Date.now(), "yyyyMMdd") === utils.formatTime(subscribeItem.data.latestUpdateTime, "yyyyMMdd")) {
          continue;
        }
        let requestSubscribeInfo = await this.getSubscribeInfo(
          subscribeItem.data.url
        );
        let updateFlag = false;
        if (requestSubscribeInfo.data) {
          let subscribeNewItem = requestSubscribeInfo.data;
          subscribeNewItem.uuid = subscribeItem.uuid;
          subscribeNewItem.data = subscribeItem.data;
          subscribeNewItem.data.latestUpdateTime = Date.now();
          let title = subscribeNewItem.data.title || subscribeNewItem.subscribeData.title || subscribeNewItem.data.url;
          subscribeItem.data.updateFailedTime = null;
          updateFlag = this.updateSubscribe(subscribeNewItem);
          if (updateFlag) {
            log.success(`更新订阅成功：${title}`);
          } else {
            log.error(`更新订阅失败：${title}`, subscribeItem);
          }
        } else {
          log.error("更新订阅失败：" + requestSubscribeInfo.msg, subscribeItem);
        }
        if (!updateFlag) {
          subscribeItem.data.updateFailedTime = Date.now();
          this.updateSubscribe(subscribeItem);
        }
      }
    }
    /**
     * 导入订阅
     * @param importEndCallBack 导入完毕后的回调
     */
    importSubscribe(importEndCallBack) {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导入方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $local = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='local']"
      );
      let $network = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='network']"
      );
      let $clipboard = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='clipboard']"
      );
      let updateRuleToStorage = (data) => {
        let allData = this.getAllSubscribe();
        let addNewData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1) ;
          else {
            addNewData.push(dataItem);
          }
        }
        allData = allData.concat(addNewData);
        this.storageApi.set(this.option.STORAGE_KEY, allData);
        Qmsg.success(`共 ${data.length} 条订阅，新增 ${addNewData.length} 条`);
        importEndCallBack?.();
      };
      let importFile = (subscribeText) => {
        return new Promise((resolve) => {
          let data = utils.toJSON(subscribeText);
          if (!Array.isArray(data)) {
            log.error(data);
            Qmsg.error("导入失败，格式不符合（不是数组）", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          let demoFirst = data[0];
          if (!(typeof demoFirst.data === "object" && demoFirst.data != null && typeof demoFirst.subscribeData === "object" && demoFirst.subscribeData != null && typeof demoFirst.uuid === "string")) {
            Qmsg.error("导入失败，解析的格式不符合", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json"
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          if (!$input.files?.length) {
            return;
          }
          let uploadFile = $input.files[0];
          let fileReader = new FileReader();
          fileReader.onload = () => {
            importFile(fileReader.result);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $prompt = NetDiskPops.prompt({
          title: {
            text: "网络导入",
            position: "center"
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              }
            },
            ok: {
              text: "导入",
              callback: async (eventDetails, event2) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                let $loading = Qmsg.loading("正在获取配置...");
                let response = await httpx.get(url, {
                  allowInterceptConfig: false
                });
                $loading.close();
                if (!response.status) {
                  log.error(response);
                  Qmsg.error("获取配置失败", { consoleLogContent: true });
                  return;
                }
                let flag = await importFile(response.data.responseText);
                if (!flag) {
                  return;
                }
                eventDetails.close();
              }
            },
            cancel: {
              enable: false
            }
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto"
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(
          ".pops-prompt-btn-ok"
        );
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard(
          $promptInput,
          "keydown",
          (keyName, keyValue, otherCodeList) => {
            if (keyName === "Enter" && otherCodeList.length === 0) {
              let value = domUtils.val($promptInput);
              if (value !== "") {
                utils.dispatchEvent($promptOk, "click");
              }
            }
          }
        );
        utils.dispatchEvent($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        utils.preventEvent(event);
        $alert.close();
        let clipboardInfo = await utils.getClipboardInfo();
        if (clipboardInfo.error != null) {
          Qmsg.error(clipboardInfo.error.toString());
          return;
        }
        if (clipboardInfo.content.trim() === "") {
          Qmsg.warning("获取到的剪贴板内容为空");
          return;
        }
        let flag = await importFile(clipboardInfo.content);
        if (!flag) {
          return;
        }
      });
    }
    /**
     * 导出订阅
     */
    exportSubscribe(fileName = "rule.json") {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导出方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="only-export-rule-list">导出订阅</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='only-export-rule-list']"
      );
      let exportFile = (__fileName__, __data__) => {
        let blob = new Blob([JSON.stringify(__data__, null, 4)]);
        let blobUrl = window.URL.createObjectURL(blob);
        let $a = document.createElement("a");
        $a.href = blobUrl;
        $a.download = __fileName__;
        $a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 1500);
      };
      domUtils.on($onlyExportRuleList, "click", (event) => {
        utils.preventEvent(event);
        try {
          let allRule = this.getAllSubscribe();
          if (allRule.length === 0) {
            Qmsg.warning("订阅为空，无需导出");
            return;
          }
          exportFile(fileName, allRule);
          $alert.close();
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
    }
  }
  const NetDiskUserRuleSubscribeRule = new RuleSubscribe2({
    STORAGE_API_KEY: "userRule",
    STORAGE_KEY: "rule-subscribe"
  });
  const NetDiskRuleManager = {
    init() {
      this.updateAllSubscribe();
    },
    /**
     * 获取规则管理器视图
     * @param defaultTab 左侧默认的选项卡，可以是索引下标，也可以是标题
     */
    getPanelView(defaultTab = 0) {
      let option = {
        title: "规则管理器",
        contentConfig: [
          NetDiskUserRule.getRulePanelViewOption(),
          WebsiteRule.getRulePanelViewOption(),
          CharacterMapping.getRulePanelViewOption()
        ]
      };
      option.contentConfig = option.contentConfig.map((it, index) => {
        if (typeof defaultTab === "number" && defaultTab === index || typeof defaultTab === "string" && defaultTab === it.title) {
          it.isDefault = true;
        } else {
          it.isDefault = false;
        }
        return it;
      });
      let rulePanelView = new RulePanelView(option);
      return rulePanelView;
    },
    /**
     * 显示视图
     * @param defaultTab 左侧默认的选项卡，可以是索引下标，也可以是标题
     */
    showView(defaultTab) {
      let rulePanelView = this.getPanelView(defaultTab);
      rulePanelView.showView();
    },
    /**
     * 更新所有订阅
     */
    updateAllSubscribe() {
      NetDiskUserRuleSubscribeRule.updateAllSubscribe();
      WebsiteSubscribeRule.updateAllSubscribe();
      CharacterMappingSubscribe.updateAllSubscribe();
    }
  };
  const NetDiskXhrHook = {
    $data: {
      ajaxHooker: null
    },
    execMatch(workerOption) {
      if (!NetDiskGlobalData.match.toBeMatchedXhrHookResponseText.value) {
        return;
      }
      if (this.$data.ajaxHooker) {
        return;
      }
      this.$data.ajaxHooker = utils.ajaxHooker();
      this.$data.ajaxHooker.hook((request) => {
        request.response = (response) => {
          if (typeof response.responseText === "string") {
            NetDiskWorker.postMessage({
              ...workerOption,
              textList: [response.responseText],
              from: "Xhr"
            });
          }
        };
      });
    }
  };
  const NetDiskWorker = {
    /** 是否正在匹配中 */
    isHandleMatch: false,
    /** 初始化Worker失败的错误的对象实例 */
    workerInitError: null,
    /** 不再弹出Worker初始化失败的提示 */
    neverTipWorkerInitErrorKey: "never-toast-worker-error",
    /** 触发匹配，但是处于匹配中，计数器保存匹配数，等待完成匹配后再执行一次匹配 */
    delayNotMatchCount: 0,
    /** 跨域传递消息的类型 */
    postMessageType: "worker-init-error",
    /**
     * 主动触发监听DOM变化的事件
     *
     * 主动设置true将会主动触发识别
     */
    dispatchMonitorDOMChange: false,
    /** worker的Blob链接 */
    blobUrl: "",
    /** worker对象 */
    GM_matchWorker: void 0,
    init() {
      this.listenWorkerInitErrorDialog();
      this.initWorkerBlobUrl();
      this.initWorker();
      this.monitorDOMChange();
    },
    /** 初始化生成Worker的Blob链接 */
    initWorkerBlobUrl() {
      const handleMatch = (
        /*js*/
        `
        (() => {
            function ${NetDiskWorker.handleRegularMatch.toString()}

            function ${NetDiskWorker.uniqueArr}
            
            this.addEventListener(
            "message",
            function (event) {
                const data = event.data;
                let matchedList = [];
                ${NetDiskWorker.handleRegularMatch.name}(data,(matchData)=>{
                	matchedList.push(matchData);
					data.textList = matchData.textList;
                })
                matchedList = ${NetDiskWorker.uniqueArr.name}(matchedList);
                this.postMessage({
					options: data,
					msg: "Match End",
					data: matchedList,
					startTime: data.startTime,
					endTime: Date.now(),
                });
            },
            {
                capture: true,
            }
            );
        })();
  		`
      );
      let workerScript = new Blob([handleMatch], {
        type: "application/javascript"
      });
      let workerUrl = globalThis.URL.createObjectURL(workerScript);
      if (
        // @ts-ignore
        globalThis.trustedTypes && // @ts-ignore
        typeof globalThis.trustedTypes.createPolicy === "function"
      ) {
        const workerPolicy = globalThis.trustedTypes.createPolicy(
          "workerPolicy",
          {
            // @ts-ignore
            createScriptURL: (url) => url
          }
        );
        workerUrl = workerPolicy.createScriptURL(workerUrl);
      }
      NetDiskWorker.blobUrl = workerUrl;
    },
    /**
     * 处理规则匹配
     *
     * 传入的规则肯定是允许执行匹配的规则
     * @param workerOptionData 数据
     * @param callback 成功匹配到的回调
     */
    handleRegularMatch(workerOptionData, callback) {
      const ruleKeyNameList = Object.keys(workerOptionData.matchedRuleOption);
      const matchTextList = workerOptionData.textList.map((matchTextItem) => {
        for (let index = 0; index < workerOptionData.characterMapping.length; index++) {
          const characterMapping = workerOptionData.characterMapping[index];
          try {
            if (typeof characterMapping.searchValue === "string") {
              matchTextItem = matchTextItem.replaceAll(
                characterMapping.searchValue,
                characterMapping.replaceValue
              );
            } else {
              matchTextItem = matchTextItem.replace(
                characterMapping.searchValue,
                characterMapping.replaceValue
              );
            }
          } catch (error) {
          }
        }
        return matchTextItem;
      });
      for (const ruleKeyName of ruleKeyNameList) {
        const ruleOption = workerOptionData.matchedRuleOption[ruleKeyName];
        for (let index = 0; index < ruleOption.length; index++) {
          const netDiskRegularItem = ruleOption[index];
          let matchRegExpList = [];
          if (workerOptionData.matchTextRange.includes("innerText")) {
            matchRegExpList.push(
              new RegExp(netDiskRegularItem["link_innerText"], "gi")
            );
          }
          if (workerOptionData.matchTextRange.includes("innerHTML")) {
            matchRegExpList.push(
              new RegExp(netDiskRegularItem["link_innerHTML"], "gi")
            );
          }
          if (!workerOptionData.matchTextRange.length) {
            console.error(workerOptionData);
            throw new TypeError("未设置匹配范围");
          }
          if (!matchRegExpList.length) {
            throw new TypeError(
              "未知的匹配范围: " + workerOptionData.matchTextRange
            );
          }
          for (let matchRegExpIndex = 0; matchRegExpIndex < matchRegExpList.length; matchRegExpIndex++) {
            const matchRegExp = matchRegExpList[matchRegExpIndex];
            for (let textIndex = 0; textIndex < matchTextList.length; textIndex++) {
              let text = matchTextList[textIndex];
              let matchArray = text.match(matchRegExp);
              if (matchArray && matchArray.length) {
                callback({
                  ruleKeyName,
                  ruleIndex: index,
                  data: matchArray,
                  textList: matchTextList
                });
              }
            }
          }
        }
      }
    },
    /**
     * 数组去重
     * @param arr 待去重的数组
     */
    uniqueArr(arr) {
      return arr.filter((obj, index, selfArray) => {
        return index === selfArray.findIndex((item) => {
          return JSON.stringify(item) === JSON.stringify(obj);
        });
      });
    },
    /**
     * 初始化Worker对象
     */
    initWorker() {
      try {
        NetDiskWorker.GM_matchWorker = new Worker(NetDiskWorker.blobUrl);
        NetDiskWorker.GM_matchWorker.onmessage = NetDiskWorker.onMessage;
        NetDiskWorker.GM_matchWorker.onerror = NetDiskWorker.onError;
        log.info(`Worker Blob Link ===> ${NetDiskWorker.blobUrl}`);
      } catch (error) {
        this.workerInitError = error;
        NetDiskWorker.GM_matchWorker = {
          postMessage(data) {
            return new Promise((resolve, reject) => {
              let matchedList = [];
              try {
                NetDiskWorker.handleRegularMatch(data, (matchData) => {
                  matchedList.push(matchData);
                  data.textList = matchData.textList;
                });
              } catch (error2) {
                NetDiskWorker.onError(error2);
              } finally {
                matchedList = NetDiskWorker.uniqueArr(matchedList);
                NetDiskWorker.onMessage(
                  new MessageEvent("message", {
                    data: {
                      options: data,
                      msg: "Match End",
                      data: matchedList,
                      startTime: data.startTime,
                      endTime: Date.now()
                    }
                  })
                );
                resolve(null);
              }
            });
          }
        };
      } finally {
        globalThis.URL.revokeObjectURL(NetDiskWorker.blobUrl);
        NetDiskWorker.blobUrl = "";
      }
    },
    /**
     * 监听Worker初始化失败的弹窗
     */
    listenWorkerInitErrorDialog() {
      if (!Panel.isTopWindow()) {
        return;
      }
      const that = this;
      domUtils.on(window, "message", (event) => {
        let messageData = event.data;
        if (typeof messageData === "object" && messageData?.["type"] === this.postMessageType) {
          let data = messageData.data;
          that.registerWorkerInitErrorNeverTipToast(data.hostname);
          NetDiskPops.confirm(
            {
              title: {
                text: "Worker Init Error",
                position: "center"
              },
              content: {
                text: (
                  /*html*/
                  `
							<div style="padding: 10px;gap: 10px;display: flex;flex-direction: column;">
								<p>链接：${data.url}</p>
								<p>来源：${Panel.isTopWindow() ? "top" : "iframe"}</p>
								<p>原因：初始化Worker失败，可能页面使用了Content-Security-Policy策略，执行匹配时如果页面的内容过大会导致页面卡死，请使用Menu模式进行匹配或者使用CSP插件禁用CSP策略（不建议）。</p>
								<p>
									错误信息：
									<span style="color: red;">${data.error}</span>
								</p>
							</div>
							`
                ),
                html: true
              },
              btn: {
                merge: true,
                position: "space-between",
                ok: {
                  text: "添加网站规则",
                  callback(eventDetails, event2) {
                    let ruleOption = WebsiteRule.getTemplateData();
                    ruleOption.name = "手动匹配：" + data.hostname;
                    ruleOption.url = `^http(s|):\\/\\/${data.hostname}\\/`;
                    ruleOption.data[NetDiskGlobalData.features["netdisk-match-mode"].KEY] = "Menu";
                    let rulePanelView = new RulePanelView({
                      title() {
                        return "规则管理器";
                      },
                      contentConfig: [
                        WebsiteRule.getRulePanelViewOption(ruleOption)
                      ]
                    });
                    rulePanelView.showEditView(
                      rulePanelView.option.contentConfig[0].ruleOption,
                      void 0,
                      false,
                      ruleOption,
                      void 0,
                      void 0,
                      void 0,
                      () => {
                        Qmsg.success("添加成功");
                      }
                    );
                  }
                },
                cancel: {
                  text: "网站规则",
                  callback(details, event2) {
                    NetDiskRuleManager.showView("网站规则");
                  }
                },
                other: {
                  enable: true,
                  text: "不再提示",
                  type: "xiaomi-primary",
                  callback(eventDetails, event2) {
                    NetDiskPops.confirm(
                      {
                        title: {
                          text: "提示",
                          position: "center"
                        },
                        content: {
                          text: `确定不再弹出该提示？（仅针对域名：${data.hostname}）`
                        },
                        btn: {
                          ok: {
                            callback(eventDetails2, event3) {
                              NetDiskWorkerInitError.addHost(data.hostname);
                              eventDetails2.close();
                            }
                          }
                        }
                      },
                      {
                        PC: {
                          width: "400px",
                          height: "200px"
                        },
                        Mobile: {
                          width: "80vw",
                          height: "200px"
                        }
                      }
                    );
                  }
                }
              }
            },
            {
              PC: {
                width: "550px",
                height: "350px"
              },
              Mobile: {
                width: "88vw",
                height: "500px"
              }
            }
          );
        }
      });
    },
    /**
     * 主动触发Worker初始化失败的弹窗
     */
    dispatchWorkerInitErrorDialog() {
      top?.postMessage(
        {
          type: this.postMessageType,
          data: {
            url: window.location.href,
            hostname: window.location.hostname,
            error: this.workerInitError
          }
        },
        "*"
      );
    },
    /**
     * 注册油猴菜单-Worker初始化失败但是设置了不再提醒
     * @param hostname
     */
    registerWorkerInitErrorNeverTipToast(hostname) {
      let menuText = "💀 Worker初始化失败";
      let menuTextDynamic = () => {
        let flag = NetDiskWorkerInitError.findHost(hostname);
        if (flag) {
          return menuText + "（已设置不再提示）";
        } else {
          return menuText;
        }
      };
      let menuOption = {
        key: "workerInitErrorNeverTipToast-" + hostname,
        text: menuTextDynamic(),
        autoReload: false,
        isStoreValue: false,
        showText: menuTextDynamic,
        callback: () => {
          let findHostFlag = NetDiskWorkerInitError.findHost(hostname);
          if (findHostFlag) {
            let confirmFlag = confirm("是否允许弹出Worker初始化失败的弹窗提示？");
            if (confirmFlag) {
              let flag = NetDiskWorkerInitError.removeHost(hostname);
              if (flag) {
                Qmsg.success(`删除成功`);
              } else {
                Qmsg.error(`删除失败`);
              }
              GM_Menu.update(menuOption);
            }
          } else {
            this.dispatchWorkerInitErrorDialog();
          }
        }
      };
      GM_Menu.update(menuOption);
    },
    /**
     * 传递数据给worker内进行处理匹配
     * @param message 数据
     * @param options 配置
     */
    postMessage(message, options) {
      NetDiskWorker.GM_matchWorker.postMessage(message, options);
    },
    /**
     * Worker的onmessage
     * 这里的this指向会被修改
     * @param event
     */
    onMessage(event) {
      const data = event.data;
      if (data.data.length) ;
      if (data.options.from === "PasteText" || data.options.from === "ShortCut-Select-Content") {
        NetDiskUI.matchPasteText.workerMatchEndCallBack(data);
      }
      if (data.options.from.startsWith("FirstLoad")) {
        NetDiskWorker.delayNotMatchCount++;
      }
      NetDiskWorker.successCallBack(data);
    },
    /**
     * Worker的onerror
     * @param error
     */
    onError(error) {
      NetDiskWorker.errorCallBack(error);
    },
    /**
     * worker处理文件匹配后的回调
     * @param options
     */
    successCallBack(options) {
      if (!options.data.length) {
        NetDiskWorker.matchingEndCallBack();
        return;
      }
      const handleNetDiskList = [];
      for (const matchData of options.data) {
        NetDisk.$match.matchedInfoRuleKey.add(matchData.ruleKeyName);
        let matchLinkSet = /* @__PURE__ */ new Set();
        matchData.data.forEach((item) => {
          matchLinkSet.add(item);
        });
        matchLinkSet.forEach((item) => {
          let handleLink = NetDisk.handleLink({
            ruleKeyName: matchData.ruleKeyName,
            ruleIndex: matchData.ruleIndex,
            matchText: item
          });
          if (handleLink) {
            handleNetDiskList.push({
              shareCode: handleLink.shareCode,
              accessCode: handleLink.accessCode,
              ruleKeyName: matchData.ruleKeyName,
              ruleIndex: matchData.ruleIndex,
              matchText: item
            });
          }
        });
      }
      let filterHandleNetDiskList = handleNetDiskList.filter(
        (value, index, selfArray) => {
          let isFind = selfArray.findIndex((obj) => {
            return obj.accessCode === value.accessCode && obj.ruleIndex === value.ruleIndex && obj.ruleKeyName === value.ruleKeyName && obj.shareCode === value.shareCode;
          }) === index;
          return isFind;
        }
      );
      filterHandleNetDiskList.forEach((item) => {
        if (NetDisk.$match.tempMatchedInfo.has(item.ruleKeyName)) {
          let currentTempDict = NetDisk.$match.tempMatchedInfo.get(
            item.ruleKeyName
          );
          currentTempDict.set(item.shareCode, item);
        }
      });
      filterHandleNetDiskList.forEach((item) => {
        let { shareCode, accessCode, ruleKeyName, ruleIndex, matchText } = item;
        const findRuleOptions = NetDisk.$rule.rule.find(
          (item2) => item2.setting.key === ruleKeyName
        );
        const ruleOption = findRuleOptions.rule[ruleIndex];
        let isBlackListShareCode = false;
        NetDisk.$match.blackMatchedInfo.forEach(
          (blackMatchInfoItem, blackList_ruleKeyName) => {
            if (blackList_ruleKeyName !== item.ruleKeyName) {
              return;
            }
            let isFindBlackShareCode = blackMatchInfoItem.has(shareCode);
            if (isFindBlackShareCode) {
              isBlackListShareCode = true;
              log.warn(
                `匹配到黑名单分享码，已过滤：${shareCode}`,
                JSON.stringify(item)
              );
            }
          }
        );
        if (isBlackListShareCode) {
          return;
        }
        if (ruleOption.shareCodeExcludeRegular && Array.isArray(ruleOption.shareCodeExcludeRegular)) {
          for (const excludeRegularName of ruleOption.shareCodeExcludeRegular) {
            let excludeDict = NetDisk.$match.matchedInfo.get(excludeRegularName);
            let currentTempDict = NetDisk.$match.tempMatchedInfo.get(excludeRegularName);
            if (excludeDict.startsWith(shareCode) || currentTempDict.startsWith(shareCode)) {
              log.warn(
                `${ruleKeyName}：该分享码【${shareCode}】与已匹配到该分享码的规则【${excludeRegularName}】冲突`
              );
              return;
            }
          }
        }
        const currentDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
        NetDisk.$data.isMatchedLink = true;
        if (currentDict.startsWith(shareCode)) {
          let shareCodeDict = currentDict.getStartsWith(shareCode);
          if (typeof shareCodeDict.isForceAccessCode === "boolean" && shareCodeDict.isForceAccessCode) {
            return;
          }
          if (utils.isNotNull(shareCodeDict.accessCode)) {
            return;
          }
          if (utils.isNull(accessCode)) {
            return;
          }
          currentDict.set(
            shareCode,
            NetDisk.createLinkStorageInst(accessCode, ruleIndex, false, matchText)
          );
          NetDiskUI.view.changeLinkView(
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode,
            matchText
          );
          log.info(
            `该匹配项无密码，设置密码 ${ruleKeyName} ${ruleIndex}: ${shareCode}  ===> ${accessCode}`
          );
        } else {
          if (utils.isNull(accessCode) && NetDiskGlobalData.accessCode.allowQueryHistoryMatchingAccessCode.value) {
            let historyMatchAccessCode = NetDiskHistoryMatchView.queryAccessCode(
              ruleKeyName,
              shareCode,
              true
            );
            if (historyMatchAccessCode) {
              log.info(
                "历史匹配记录 ==> 查询到访问码：" + historyMatchAccessCode
              );
              accessCode = historyMatchAccessCode;
            }
          }
          currentDict.set(
            shareCode,
            NetDisk.createLinkStorageInst(accessCode, ruleIndex, false, matchText)
          );
          NetDiskUI.isMatchedNetDiskIconMap.add(ruleKeyName);
          NetDiskUI.view.addLinkView(
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode,
            matchText
          );
          log.success(
            `添加链接 ${ruleKeyName} ${ruleIndex}: ${shareCode}  ===> ${accessCode}`
          );
        }
      });
      Object.keys(NetDisk.$match.tempMatchedInfo.getItems()).forEach(
        (keyName) => {
          NetDisk.$match.tempMatchedInfo.get(keyName).clear();
        }
      );
      if (NetDisk.$data.isMatchedLink) {
        switch (NetDiskGlobalData.features["netdisk-behavior-mode"].value) {
          case "suspension_smallwindow".toLowerCase():
            if (NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value === "suspension") {
              NetDiskUI.suspension.show();
            } else {
              NetDiskUI.view.show();
            }
            break;
          case "suspension_window".toLowerCase():
            NetDiskUI.suspension.show();
            break;
          case "smallwindow".toLowerCase():
            NetDiskUI.view.show();
            break;
          default:
            log.error(
              "未知的行为模式：" + NetDiskGlobalData.features["netdisk-behavior-mode"].value
            );
        }
      }
      NetDiskWorker.matchingEndCallBack();
    },
    /**
     * Worker失败回调
     * @param error
     */
    errorCallBack(error) {
      NetDiskWorker.matchingEndCallBack(true);
      log.error("Worker Error", error);
    },
    /**
     * 匹配结束回调
     * @param isNow 是否立刻释放锁
     */
    matchingEndCallBack(isNow) {
      if (isNow) {
        NetDiskWorker.isHandleMatch = false;
        if (NetDiskWorker.delayNotMatchCount > 0) {
          NetDiskWorker.delayNotMatchCount = 0;
          NetDiskWorker.dispatchMonitorDOMChange = true;
        }
      } else {
        const delaytime = parseFloat(NetDiskGlobalData.match.delaytime.value.toString()) * 1e3;
        setTimeout(() => {
          NetDiskWorker.matchingEndCallBack(true);
        }, delaytime);
      }
    },
    /**
     * 监听页面节点内容或节点文本的变动，从而进行匹配网盘链接
     */
    monitorDOMChange() {
      const isAddedNodeToMatch = NetDiskGlobalData.match.isAddedNodesToMatch.value;
      const readClipboard = NetDiskGlobalData.match.readClipboard.value;
      const matchRange = NetDiskGlobalData.match.pageMatchRange.value;
      let isFirstLoad = true;
      let isFirstLoadPageText = true;
      let isFirstLoadPageHTML = true;
      let isDepthAcquisitionWithShadowRoot = NetDiskGlobalData.match.depthQueryWithShadowRoot.value;
      const matchedRuleOption = {};
      const characterMapping = CharacterMapping.getMappingData();
      NetDisk.$rule.rule.forEach((item) => {
        let ruleKeyName = item.setting.key;
        let ruleEnable = NetDiskRuleData.function.enable(ruleKeyName);
        if (!ruleEnable) {
          return;
        }
        if (Reflect.has(matchedRuleOption, ruleKeyName)) {
          matchedRuleOption[ruleKeyName] = [
            ...matchedRuleOption[ruleKeyName],
            ...item.rule
          ];
        } else {
          Reflect.set(matchedRuleOption, ruleKeyName, item.rule);
        }
      });
      async function observeEvent(mutations) {
        if (NetDiskWorker.isHandleMatch) {
          NetDiskWorker.delayNotMatchCount++;
          return;
        }
        if (isAddedNodeToMatch && mutations && mutations.length) {
          let hasAddedNode = false;
          for (let index = 0; index < mutations.length; index++) {
            const mutation = mutations[index];
            if (mutation.addedNodes && mutation.addedNodes instanceof NodeList) {
              if (mutation.addedNodes.length) {
                hasAddedNode = true;
                break;
              }
            }
          }
          if (!hasAddedNode) {
            return;
          }
        }
        NetDiskWorker.isHandleMatch = true;
        const startTime = Date.now();
        if (readClipboard) {
          try {
            let clipboardInfo = await utils.getClipboardInfo();
            if (clipboardInfo.error != null) {
              NetDisk.$data.clipboardText = clipboardInfo.content;
            }
          } catch (error) {
          }
        }
        if (typeof NetDisk.$data.clipboardText !== "string") {
          NetDisk.$data.clipboardText = "";
        }
        const toMatchedTextList = [];
        if (utils.isNotNull(NetDisk.$data.clipboardText)) {
          let clipboardText = NetDisk.$data.clipboardText;
          toMatchedTextList.push(clipboardText);
        }
        if (NetDiskGlobalData.match.allowMatchLocationHref.value) {
          let decodeComponentUrl = NetDiskRuleUtils.getDecodeComponentUrl();
          toMatchedTextList.push(decodeComponentUrl);
        }
        if (isFirstLoad) {
          isFirstLoad = false;
          if (toMatchedTextList.length) {
            NetDiskWorker.postMessage({
              characterMapping,
              textList: toMatchedTextList,
              matchTextRange: matchRange,
              matchedRuleOption,
              startTime,
              from: "FirstLoad-DOMChange"
            });
            return;
          }
        }
        if (matchRange.includes("innerText")) {
          let pageTextList = NetDiskWorkerUtils.getPageText(
            document.documentElement,
            isDepthAcquisitionWithShadowRoot
          );
          toMatchedTextList.push(...pageTextList);
          if (isFirstLoadPageText) {
            isFirstLoadPageText = false;
            NetDiskWorker.postMessage({
              characterMapping,
              textList: toMatchedTextList,
              matchTextRange: matchRange,
              matchedRuleOption,
              startTime,
              from: "FirstLoad-Text-DOMChange"
            });
            return;
          }
        }
        if (matchRange.includes("innerHTML")) {
          let pageHTMLList = NetDiskWorkerUtils.getPageHTML(
            document.documentElement,
            isDepthAcquisitionWithShadowRoot
          );
          toMatchedTextList.push(...pageHTMLList);
          if (isFirstLoadPageHTML) {
            isFirstLoadPageHTML = false;
            NetDiskWorker.postMessage({
              characterMapping,
              textList: toMatchedTextList,
              matchTextRange: matchRange,
              matchedRuleOption,
              startTime,
              from: "FirstLoad-HTML-DOMChange"
            });
            return;
          }
        }
        if (NetDiskGlobalData.match.toBeMatchedWithInputElementValue.value) {
          let inputValueList = NetDiskWorkerUtils.getInputElementValue(
            document.documentElement,
            isDepthAcquisitionWithShadowRoot
          );
          toMatchedTextList.push(...inputValueList);
        }
        if (NetDiskGlobalData.match.toBeMatchedTextAreaElementValue.value) {
          let textAreaValueList = NetDiskWorkerUtils.getTextAreaElementValue(
            document.documentElement,
            isDepthAcquisitionWithShadowRoot
          );
          toMatchedTextList.push(...textAreaValueList);
        }
        NetDiskWorker.postMessage({
          characterMapping,
          textList: toMatchedTextList,
          matchTextRange: matchRange,
          matchedRuleOption,
          startTime,
          from: "DOMChange"
        });
      }
      let dispatchMonitorDOMChange = NetDiskWorker.dispatchMonitorDOMChange;
      Object.defineProperty(NetDiskWorker, "dispatchMonitorDOMChange", {
        set: function(value) {
          dispatchMonitorDOMChange = value;
          if (value) {
            let addedNodes = $$("html");
            observeEvent([
              {
                addedNodes,
                attributeName: null,
                attributeNamespace: null,
                nextSibling: null,
                oldValue: null,
                previousSibling: null,
                removedNodes: addedNodes,
                target: addedNodes[0],
                type: "attributes"
              }
            ]);
          }
        },
        get: function() {
          return dispatchMonitorDOMChange;
        }
      });
      let matchMode = NetDiskGlobalData.features["netdisk-match-mode"].value;
      if (matchMode !== "Menu") {
        let neverToastWorkerError = _GM_getValue(
          this.neverTipWorkerInitErrorKey,
          []
        );
        if (!Array.isArray(neverToastWorkerError)) {
          neverToastWorkerError = [neverToastWorkerError];
        }
        if (this.workerInitError != null) {
          log.error(
            "初始化Worker失败，可能页面使用了Content-Security-Policy策略，使用代替函数，该函数执行匹配时如果页面的内容过大会导致页面卡死",
            this.workerInitError
          );
          let findHostName = neverToastWorkerError.find(
            (it) => it === window.location.hostname
          );
          if (findHostName) {
            this.registerWorkerInitErrorNeverTipToast(findHostName);
          } else {
            this.dispatchWorkerInitErrorDialog();
          }
        }
      }
      NetDiskXhrHook.execMatch({
        characterMapping,
        matchTextRange: matchRange,
        matchedRuleOption,
        startTime: Date.now()
      });
      if (matchMode === "MutationObserver") {
        utils.mutationObserver(document.documentElement, {
          callback: observeEvent,
          config: {
            /* 子节点的变动（新增、删除或者更改） */
            childList: NetDiskGlobalData.match["mutationObserver-childList"].value,
            /* 节点内容或节点文本的变动 */
            characterData: NetDiskGlobalData.match["mutationObserver-characterData"].value,
            /* 是否将观察器应用于该节点的所有后代节点 */
            subtree: NetDiskGlobalData.match["mutationObserver-subtree"].value
          }
        });
        this.dispatchMonitorDOMChange = true;
      } else if (matchMode === "Menu") {
        GM_Menu.add({
          key: "performPageTextMatchingManually_" + window.location.href,
          text: "点击执行文本匹配" + (Panel.isTopWindow() ? "" : "（iframe）"),
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.dispatchMonitorDOMChange = true;
          }
        });
      } else {
        log.error("未知匹配模式：" + matchMode);
      }
    }
  };
  const NetDiskUserRuleDebug = {
    $el: {
      $select: null,
      $log: null,
      $matchText: null,
      $button: null
    },
    /**
     * 重置环境变量
     */
    reset() {
      Object.keys(this.$el).forEach((keyName) => {
        Reflect.deleteProperty(this.$el, keyName);
      });
    },
    /**
     * 设置日志输出
     * @param tag 日志等级
     * @param args
     */
    setLog(tag, ...args) {
      let text = "";
      args.forEach((item) => {
        if (text !== "") {
          text += "\n";
        }
        if (typeof item !== "string") {
          text += JSON.stringify(item, void 0, 4);
        } else {
          text += item;
        }
      });
      let logElement = domUtils.createElement(
        "p",
        {
          innerText: text
        },
        {
          "data-tag": tag
        }
      );
      domUtils.append(this.$el.$log, logElement);
    },
    /**
     * 清空日志
     */
    clearLog() {
      domUtils.empty(this.$el.$log);
    },
    /**
     * 显示调试规则的界面
     * @param ruleJSON
     */
    showUI(ruleJSON) {
      this.reset();
      if (utils.isNull(ruleJSON.regexp)) {
        Qmsg.error("请先配置regexp");
        return;
      }
      let that = this;
      let customRule = NetDiskUserRule.parseRule([ruleJSON]);
      let regexp = customRule[0].rule;
      let dialog = NetDiskPops.confirm(
        {
          title: {
            text: `调试规则 ${ruleJSON.key}`,
            position: "center"
          },
          content: {
            text: (
              /*html*/
              `
                    <div class="custom-rule-container">
                        <textarea class="custom-rule-match-text" placeholder="请输入需要测试匹配的字符串"></textarea>
                        <div class="custom-rule-input-container">
                        <select class="custom-rule-select-regexp"></select>
                        <button class="custom-rule-run-match-button" type="primary" data-icon="" data-righticon="false">
                            <span>执行</span>
                        </button>
                        </div>
                    </div>
                    <div class="custom-rule-match-log">
                        <div>匹配日志↓</div>
                        <div class="custom-rule-match-log-container"></div>
                    </div>
                    `
            ),
            html: true
          },
          btn: {
            ok: {
              enable: false
            }
          },
          style: (
            /*css*/
            `
                .custom-rule-container{
                    display: flex;
                    align-items: center;
                }
                .custom-rule-select-regexp{
                    width: 100%;
                    height: 32px;
                    line-height: normal;
                    border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
                    border-radius: 5px;
                    text-align: center;
                    outline: 0;
                    background: rgb(255, 255, 255, var(--pops-bg-opacity));
                    box-shadow: none;
                }
                .custom-rule-input-container{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin: 5px;
                    width: 30%;
                }
                .custom-rule-select-regexp-item{

                }
                button.custom-rule-run-match-button{
                    margin-top: 5px;
                }
                textarea.custom-rule-match-text{
                    width: 100%;
                    min-height: 70px;
                    outline: none;
                    margin: 0px;
                    background-image: none;
                    background-color: transparent;
                    display: inline-block;
                    resize: vertical;
                    padding: 5px;
                    line-height: normal;
                    box-sizing: border-box;
                    border: 1px solid rgb(220, 223, 230);
                    appearance: none;
                }
                .custom-rule-match-log{

                }
                .custom-rule-match-log-container{
                    padding: 5px;
                    background: rgb(229, 229, 229);
                }
                .custom-rule-match-log-container p{
                    margin: 2px 0px;
                    border-bottom: 1px solid #000000;
                }
                .custom-rule-match-log-container p:last-child{
                    border-bottom: 0px;
                    margin-bottom: 0px;
                }
                .custom-rule-match-log-container p[data-tag]{
                	padding: 10px 0px;
                }
                .custom-rule-match-log-container p[data-tag="info"]{

                }
                .custom-rule-match-log-container p[data-tag="success"]{
                    color: green;
                }
                .custom-rule-match-log-container p[data-tag="warn"]{
                    color: yellow;
                }
                .custom-rule-match-log-container p[data-tag="error"]{
                    color: red;
                }
                `
          )
        },
        NetDiskUI.popsStyle.customRuleDebugView
      );
      this.$el.$select = dialog.$shadowRoot.querySelector(
        ".custom-rule-select-regexp"
      );
      this.$el.$matchText = dialog.$shadowRoot.querySelector(
        ".custom-rule-match-text"
      );
      this.$el.$log = dialog.$shadowRoot.querySelector(
        ".custom-rule-match-log-container"
      );
      this.$el.$button = dialog.$shadowRoot.querySelector(
        ".custom-rule-run-match-button"
      );
      regexp.forEach((regExpItem, index) => {
        this.$el.$select.appendChild(
          domUtils.createElement("option", {
            className: "custom-rule-select-regexp-item",
            innerText: "regexp下标:" + index,
            "data-value": regExpItem
          })
        );
      });
      function logCallBack(logData) {
        if (Array.isArray(logData.msg)) {
          that.setLog(logData.status ? "info" : "error", ...logData.msg);
        } else {
          that.setLog(logData.status ? "info" : "error", logData.msg);
        }
        if (!logData.status) {
          that.setLog("error", "执行完毕");
        }
      }
      function debugRunClickEvent() {
        try {
          if (utils.isNull(that.$el.$matchText.value)) {
            Qmsg.error("请先输入待匹配的字符串");
            return;
          }
          that.clearLog();
          let ruleKeyName = ruleJSON.key;
          let ruleIndex = that.$el.$select.selectedIndex;
          let selectRegularOption = that.$el.$select.options[ruleIndex]["data-value"];
          log.info("当前选中的规则: ", selectRegularOption);
          let testCustomRuleOption = {};
          testCustomRuleOption[ruleJSON.key] = [selectRegularOption];
          let matchTextList = [];
          NetDiskWorker.handleRegularMatch(
            {
              characterMapping: CharacterMapping.getMappingData(),
              matchedRuleOption: testCustomRuleOption,
              textList: [that.$el.$matchText.value],
              matchTextRange: ["innerText", "innerHTML"],
              startTime: Date.now(),
              from: "Debug"
            },
            (matchData) => {
              matchTextList.push(...matchData.data);
            }
          );
          if (!matchTextList.length) {
            that.setLog("error", "未成功匹配到数据");
            return;
          }
          matchTextList = NetDiskWorker.uniqueArr(matchTextList);
          that.setLog("info", "成功匹配到的数据 ==> ", matchTextList);
          matchTextList.forEach((matchText, index) => {
            that.setLog("success", "当前处理的字符串: " + matchText);
            that.setLog("success", "当前执行: 对shareCode进行处理获取");
            let shareCode = NetDisk.handleShareCode({
              ruleKeyName,
              ruleIndex,
              matchText,
              debugConfig: {
                matchText,
                config: selectRegularOption,
                logCallBack
              }
            });
            if (utils.isNull(shareCode)) {
              return;
            }
            that.setLog("info", " ");
            that.setLog("info", `================分割线================`);
            that.setLog("info", " ");
            that.setLog("success", "当前执行: 对accessCode进行处理获取");
            let accessCode = NetDisk.handleAccessCode({
              ruleKeyName,
              ruleIndex,
              matchText,
              debugConfig: {
                matchText,
                config: selectRegularOption,
                logCallBack
              }
            });
            that.setLog("info", " ");
            that.setLog("info", `================分割线================`);
            that.setLog("info", " ");
            that.setLog("success", "当前执行: 对uiLinkShow进行处理获取");
            let uiLinkShow = NetDisk.handleLinkShow({
              ruleKeyName,
              ruleIndex,
              shareCode,
              accessCode,
              matchText,
              debugConfig: {
                matchText,
                config: selectRegularOption,
                logCallBack
              }
            });
            that.setLog("info", " ");
            that.setLog("info", `================分割线================`);
            that.setLog("info", " ");
            that.setLog("success", "当前执行: 对blank进行处理获取");
            let blankUrl = NetDiskLinkClickModeUtils.getBlankUrl({
              ruleKeyName,
              ruleIndex,
              shareCode,
              accessCode,
              debugConfig: {
                matchText,
                config: selectRegularOption,
                logCallBack
              }
            });
            that.setLog("info", " ");
            that.setLog("info", `================分割线================`);
            that.setLog("info", " ");
            that.setLog("success", "当前执行: 对copyUrl进行处理获取");
            let copyUrl = NetDiskLinkClickModeUtils.getCopyUrlInfo({
              ruleKeyName,
              ruleIndex,
              shareCode,
              accessCode,
              debugConfig: {
                matchText,
                config: selectRegularOption,
                logCallBack
              }
            });
            that.setLog("success", "执行完毕");
          });
        } catch (error) {
          log.error(error);
          that.setLog(error.toString());
        }
      }
      domUtils.on(that.$el.$button, "click", void 0, debugRunClickEvent);
    }
  };
  const dialogCSS = '.pops[type-value="confirm"] .pops-confirm-content {\r\n	overflow: hidden;\r\n}\r\n/* textarea美化 */\r\n.pops.whitesevPopNetDiskCustomRules[type-value="confirm"]\r\n	.pops-confirm-content\r\n	textarea {\r\n	width: 100%;\r\n	height: 100%;\r\n	border: none;\r\n	outline: none;\r\n	padding: 0;\r\n	margin: 0;\r\n	-webkit-appearance: none;\r\n	-moz-appearance: none;\r\n	appearance: none;\r\n	background-image: none;\r\n	background-color: transparent;\r\n\r\n	display: inline-block;\r\n	resize: vertical;\r\n	padding: 5px 15px;\r\n	line-height: normal;\r\n	box-sizing: border-box;\r\n	border: 1px solid #dcdfe6;\r\n	transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n	appearance: none;\r\n	resize: none;\r\n}\r\n/* 获得焦点 */\r\n.pops.whitesevPopNetDiskCustomRules[type-value="confirm"]\r\n	.pops-confirm-content\r\n	textarea:focus {\r\n	outline: none;\r\n	border-color: #3677f0;\r\n}\r\n/* 提示文字 */\r\n.pops.whitesevPopNetDiskCustomRules[type-value="confirm"]\r\n	.pops-confirm-content\r\n	textarea::placeholder {\r\n	color: #c0c4cc;\r\n}\r\n/* 鼠标hover */\r\n.pops.whitesevPopNetDiskCustomRules[type-value="confirm"]\r\n	.pops-confirm-content\r\n	textarea:hover {\r\n	border-color: #c0c4cc;\r\n}\r\n';
  const NetDiskUserRuleUI = {
    /**
     * 添加/编辑规则
     * @param isEdit
     * @param ruleKey 当isEdit为true时，传入该值
     * @param valueChangeCallBack 添加/编辑保存后的值改变的回调
     */
    show(isEdit, ruleKey, valueChangeCallBack) {
      let titleText = "添加";
      if (isEdit) {
        titleText = "编辑";
      }
      titleText += "链接识别规则";
      let $ruleInput = null;
      function saveCallBack(event, isDebug) {
        let ruleText = $ruleInput.value.trim();
        let parseRuleResult = NetDiskUserRule.parseRuleStrToRule(ruleText);
        if (parseRuleResult.success) {
          let userRule = parseRuleResult.data;
          if (isEdit) {
            let flag = NetDiskUserRule.updateRule(ruleKey, userRule);
            if (flag) {
              Qmsg.success("更新成功");
            } else {
              Qmsg.error("更新失败");
              return;
            }
          } else {
            NetDiskUserRule.addRule(userRule);
            Qmsg.success("添加成功");
          }
          valueChangeCallBack?.(userRule);
        } else {
          Qmsg.error(parseRuleResult.msg);
        }
      }
      function debugCallBack(event) {
        let ruleText = $ruleInput.value.trim();
        let parseRuleResult = NetDiskUserRule.parseRuleStrToRule(ruleText);
        if (parseRuleResult.success) {
          let userRule = parseRuleResult.data;
          NetDiskUserRuleDebug.showUI(userRule);
        } else {
          Qmsg.error(parseRuleResult.msg);
        }
      }
      function formatCallBack(event) {
        try {
          let ruleJSON = JSON.parse($ruleInput.value);
          let ruleJSONString = NetDiskUserRule.getFormatRule(ruleJSON);
          $ruleInput.value = ruleJSONString;
          Qmsg.success("格式化成功");
        } catch (error) {
          log.error(error);
          Qmsg.error(error.message, {
            html: true,
            timeout: 3500
          });
        }
      }
      let dialog = NetDiskPops.confirm(
        {
          title: {
            text: titleText,
            position: "center"
          },
          content: {
            text: (
              /*html*/
              `<textarea class="netdisk-custom-rules" placeholder="请输入规则配置"></textarea>`
            ),
            html: true
          },
          btn: {
            merge: true,
            mergeReverse: false,
            reverse: false,
            position: "space-between",
            ok: {
              text: "保存",
              callback: (eventDetails, event) => {
                saveCallBack();
              }
            },
            cancel: {
              text: "调试",
              callback: (eventDetails, event) => {
                debugCallBack();
              }
            },
            other: {
              enable: true,
              text: "格式化",
              type: "xiaomi-primary",
              callback: (eventDetails, event) => {
                formatCallBack();
              }
            }
          },
          class: "whitesevPopNetDiskCustomRules",
          style: dialogCSS
        },
        NetDiskUI.popsStyle.customRulesView
      );
      $ruleInput = dialog.$shadowRoot.querySelector("textarea");
      let rule;
      if (isEdit) {
        rule = NetDiskUserRule.getRule(ruleKey);
      } else {
        rule = NetDiskUserRule.getTemplateRule();
      }
      $ruleInput.value = NetDiskUserRule.getFormatRule(rule);
    },
    /**
     * 添加/编辑规则
     * @param subscribeUUID 订阅的UUID
     * @param ruleKey 当isEdit为true时，传入该值
     * @param valueChangeCallBack 添加/编辑保存后的值改变的回调
     */
    showSubscribe(subscribeUUID, ruleKey, valueChangeCallBack) {
      let titleText = "编辑订阅的链接识别规则";
      let $ruleInput = null;
      function saveCallBack(event, isDebug) {
        let ruleText = $ruleInput.value.trim();
        let parseRuleResult = NetDiskUserRule.parseRuleStrToRule(ruleText);
        if (parseRuleResult.success) {
          let userRule = parseRuleResult.data;
          let flag = NetDiskUserRuleSubscribeRule.updateSubscribeRule(
            subscribeUUID,
            userRule
          );
          if (flag) {
            Qmsg.success("更新成功");
          } else {
            Qmsg.error("更新失败");
            return;
          }
          valueChangeCallBack?.(userRule);
        } else {
          Qmsg.error(parseRuleResult.msg);
        }
      }
      function debugCallBack(event) {
        let ruleText = $ruleInput.value.trim();
        let parseRuleResult = NetDiskUserRule.parseRuleStrToRule(ruleText);
        if (parseRuleResult.success) {
          let userRule = parseRuleResult.data;
          NetDiskUserRuleDebug.showUI(userRule);
        } else {
          Qmsg.error(parseRuleResult.msg);
        }
      }
      function formatCallBack(event) {
        try {
          let ruleJSON = JSON.parse($ruleInput.value);
          let ruleJSONString = NetDiskUserRule.getFormatRule(ruleJSON);
          $ruleInput.value = ruleJSONString;
          Qmsg.success("格式化成功");
        } catch (error) {
          log.error(error);
          Qmsg.error(error.message, {
            html: true,
            timeout: 3500
          });
        }
      }
      let dialog = NetDiskPops.confirm(
        {
          title: {
            text: titleText,
            position: "center"
          },
          content: {
            text: (
              /*html*/
              `<textarea class="netdisk-custom-rules" placeholder="请输入规则配置"></textarea>`
            ),
            html: true
          },
          btn: {
            merge: true,
            mergeReverse: false,
            reverse: false,
            position: "space-between",
            ok: {
              text: "保存",
              callback: (eventDetails, event) => {
                saveCallBack();
              }
            },
            cancel: {
              text: "调试",
              callback: (eventDetails, event) => {
                debugCallBack();
              }
            },
            other: {
              enable: true,
              text: "格式化",
              type: "xiaomi-primary",
              callback: (eventDetails, event) => {
                formatCallBack();
              }
            }
          },
          class: "whitesevPopNetDiskCustomRules",
          style: dialogCSS
        },
        NetDiskUI.popsStyle.customRulesView
      );
      $ruleInput = dialog.$shadowRoot.querySelector("textarea");
      let rule;
      rule = NetDiskUserRuleSubscribeRule.getSubscribeRule(
        subscribeUUID,
        ruleKey
      );
      $ruleInput.value = NetDiskUserRule.getFormatRule(rule);
    }
  };
  const NetDiskUserRuleStorageApi = new StorageUtils("userRule");
  const NetDiskUserRuleBindContextStorageApi = new StorageUtils(
    "userRuleBindContext"
  );
  const NetDiskUserRule = {
    $data: {
      STORAGE_KEY: "rule",
      EXPORT_CONFIG_KEY: "rule-export-config",
      __userRule: null,
      get userRule() {
        if (this.__userRule == null) {
          this.__userRule = new utils.Dictionary();
        }
        return this.__userRule;
      }
    },
    /**
     * 初始化
     */
    init() {
      let oldUserRule = _GM_getValue("userRule");
      if (Array.isArray(oldUserRule)) {
        _GM_deleteValue("userRule");
        this.setRule(oldUserRule);
      }
      let userRule = this.parseRule(this.getAllRule());
      let subscribeRule = this.parseRule(
        NetDiskUserRuleSubscribeRule.getAllSubscribeRule()
      );
      userRule = userRule.concat(subscribeRule);
      userRule.forEach((item) => {
        this.$data.userRule.set(item.setting.key, item);
      });
    },
    /**
     * 把输入的规则字符串解析为规则对象
     */
    parseRuleStrToRule(ruleText) {
      function checkRegExp(ruleRegExp) {
        if (typeof ruleRegExp["link_innerText"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: link_innerText，类型: string"
          };
        }
        if (typeof ruleRegExp["link_innerHTML"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: link_innerHTML，类型: string"
          };
        }
        if (typeof ruleRegExp["shareCode"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: shareCode，类型: string"
          };
        }
        if (typeof ruleRegExp["shareCodeNeedRemoveStr"] !== "string" && !Array.isArray(ruleRegExp["shareCodeNeedRemoveStr"])) {
          return {
            success: false,
            msg: "regexp缺失的键名: shareCodeNeedRemoveStr，类型: string|string[]"
          };
        }
        if (typeof ruleRegExp["uiLinkShow"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: uiLinkShow，类型: string"
          };
        }
        if (typeof ruleRegExp["blank"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: blank，类型: string"
          };
        }
        if (typeof ruleRegExp["copyUrl"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: copyUrl，类型: string"
          };
        }
        if (typeof ruleRegExp["accessCode"] === "string" && typeof ruleRegExp["checkAccessCode"] !== "string") {
          return {
            success: false,
            msg: "regexp设置了accessCode但是没有设置checkAccessCode"
          };
        }
        if (typeof ruleRegExp["accessCode"] !== "string" && typeof ruleRegExp["checkAccessCode"] === "string") {
          return {
            success: false,
            msg: "regexp设置了checkAccessCode但是没有设置accessCode"
          };
        }
        return {
          success: true,
          msg: "校验rule成功"
        };
      }
      function checkSetting(ruleSetting) {
        if (typeof ruleSetting["name"] !== "string") {
          return {
            success: false,
            msg: "setting缺失的键名: name，类型: string"
          };
        }
        if (typeof ruleSetting["enable"] !== "boolean") {
          return {
            success: false,
            msg: "setting缺失的键名: enable，类型: boolean"
          };
        }
        return {
          success: true,
          msg: "校验setting成功"
        };
      }
      try {
        let ruleJSON = typeof ruleText === "string" ? utils.toJSON(ruleText) : ruleText;
        log.info(`解析出的规则对象：`, ruleJSON);
        if (typeof ruleJSON !== "object") {
          return {
            success: false,
            msg: "该规则不是object类型"
          };
        }
        if (Object.keys(ruleJSON).length === 0) {
          return {
            success: false,
            msg: "该规则为空"
          };
        }
        if (typeof ruleJSON["key"] !== "string") {
          return {
            success: false,
            msg: "缺失的键名: key，类型: string"
          };
        }
        if (typeof ruleJSON["regexp"] !== "object") {
          return {
            success: false,
            msg: "缺失的键名: regexp，类型: object|Arrany"
          };
        }
        if (typeof ruleJSON["setting"] !== "object") {
          return {
            success: false,
            msg: "缺失的键名: setting，类型: object"
          };
        }
        if (Array.isArray(ruleJSON["regexp"])) {
          for (const regexpItem of ruleJSON["regexp"]) {
            let result = checkRegExp(regexpItem);
            if (!result.success) {
              return result;
            }
          }
        } else {
          let result = checkRegExp(ruleJSON["regexp"]);
          if (!result.success) {
            return result;
          }
        }
        let checkSettingResult = checkSetting(ruleJSON["setting"]);
        if (!checkSettingResult.success) {
          return checkSettingResult;
        }
        return {
          success: true,
          msg: "解析成功",
          data: ruleJSON
        };
      } catch (error) {
        log.error(error);
        return {
          success: false,
          msg: error.message
        };
      }
    },
    /**
     * 上下文环境
     * @param rule
     */
    getBindContext(rule) {
      return {
        rule,
        NetDiskRequire,
        CryptoJS: Cryptojs,
        httpx,
        utils,
        DOMUtils: domUtils,
        window,
        unsafeWindow: _unsafeWindow,
        NetDiskCheckLinkValidity,
        log,
        Qmsg,
        pops: __pops,
        setValue: NetDiskUserRuleBindContextStorageApi.set.bind(
          NetDiskUserRuleBindContextStorageApi
        ),
        getValue: NetDiskUserRuleBindContextStorageApi.get.bind(
          NetDiskUserRuleBindContextStorageApi
        ),
        deleteValue: NetDiskUserRuleBindContextStorageApi.delete.bind(
          NetDiskUserRuleBindContextStorageApi
        )
      };
    },
    /**
     * 把用户链接识别规则进行转换成脚本规则
     * @param localRule 用户的规则
     */
    parseRule(localRule) {
      function parseUserRuleToScriptRule(ruleKey, userRuleConfig, ruleRegExp) {
        let {
          shareCode,
          shareCodeNeedRemoveStr,
          shareCodeNotMatch,
          checkAccessCode,
          accessCode,
          acceesCodeNotMatch,
          paramMatch,
          ...otherRuleParams
        } = ruleRegExp;
        let netDiskRegularOption = {
          ...otherRuleParams
        };
        netDiskRegularOption.link_innerText = NetDiskRuleUtils.replaceParam(
          netDiskRegularOption.link_innerText,
          NetDiskUserRuleReplaceParam_matchRange_text(ruleKey)
        );
        netDiskRegularOption.link_innerHTML = NetDiskRuleUtils.replaceParam(
          netDiskRegularOption.link_innerText,
          NetDiskUserRuleReplaceParam_matchRange_html(ruleKey)
        );
        if (typeof shareCode === "string") {
          netDiskRegularOption.shareCode = new RegExp(shareCode, "ig");
        }
        if (shareCodeNeedRemoveStr) {
          if (typeof shareCodeNeedRemoveStr === "string") {
            shareCodeNeedRemoveStr = [shareCodeNeedRemoveStr];
          }
          if (Array.isArray(shareCodeNeedRemoveStr)) {
            netDiskRegularOption.shareCodeNeedRemoveStr = shareCodeNeedRemoveStr.filter((item) => typeof item === "string").map((item) => new RegExp(item, "ig"));
          }
        }
        if (shareCodeNotMatch) {
          if (typeof shareCodeNotMatch === "string") {
            shareCodeNotMatch = [shareCodeNotMatch];
          }
          if (Array.isArray(shareCodeNotMatch)) {
            netDiskRegularOption.shareCodeNotMatch = shareCodeNotMatch.filter((item) => typeof item === "string").map((item) => new RegExp(item, "ig"));
          }
        }
        if (typeof checkAccessCode === "string") {
          netDiskRegularOption.checkAccessCode = new RegExp(
            checkAccessCode,
            "ig"
          );
        }
        if (typeof accessCode === "string") {
          netDiskRegularOption.accessCode = new RegExp(accessCode, "ig");
        }
        if (acceesCodeNotMatch) {
          if (typeof acceesCodeNotMatch === "string") {
            acceesCodeNotMatch = [acceesCodeNotMatch];
          }
          if (Array.isArray(acceesCodeNotMatch)) {
            netDiskRegularOption.acceesCodeNotMatch = acceesCodeNotMatch.map(
              (item) => new RegExp(item, "ig")
            );
          }
        }
        if (typeof paramMatch === "string") {
          netDiskRegularOption.paramMatch = new RegExp(paramMatch, "i");
        }
        return netDiskRegularOption;
      }
      let netDiskRuleConfigList = [];
      for (const userRuleItemConfig of localRule) {
        let netDiskRuleConfig = {
          subscribeUUID: userRuleItemConfig.subscribeUUID,
          rule: [],
          setting: {
            name: userRuleItemConfig.setting.name,
            key: userRuleItemConfig.key,
            configurationInterface: {
              matchRange_text: {},
              matchRange_html: {},
              function: {},
              linkClickMode_openBlank: {},
              schemeUri: {},
              ownFormList: []
            }
          },
          isUserRule: true,
          afterRenderUrlBox: void 0
        };
        const userRuleList = userRuleItemConfig.regexp;
        const ruleKey = userRuleItemConfig.key;
        if (Array.isArray(userRuleList)) {
          userRuleList.forEach((userRuleItem) => {
            netDiskRuleConfig.rule.push(
              parseUserRuleToScriptRule(ruleKey, userRuleItemConfig, userRuleItem)
            );
          });
        } else {
          netDiskRuleConfig.rule.push(
            parseUserRuleToScriptRule(ruleKey, userRuleItemConfig, userRuleList)
          );
        }
        if (userRuleItemConfig.setting) {
          this.initDefaultValue(
            NetDiskRuleDataKEY.function.enable(ruleKey),
            Boolean(userRuleItemConfig.setting.enable)
          );
          netDiskRuleConfig.setting.configurationInterface.function.enable = Boolean(userRuleItemConfig.setting.enable);
          if (typeof userRuleItemConfig.setting["isBlank"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.function.linkClickMode(ruleKey),
              "openBlank"
            );
            netDiskRuleConfig.setting.configurationInterface.function.linkClickMode = {
              openBlank: {
                default: true,
                enable: true
              }
            };
          }
          if (typeof userRuleItemConfig.setting.linkClickMode === "object") {
            let data = utils.assign(
              NetDiskRuleUtils.getDefaultLinkClickMode(),
              userRuleItemConfig.setting.linkClickMode || {}
            );
            let default_value = null;
            let selectData = Object.keys(data).map((keyName) => {
              let itemData = data[keyName];
              if (!itemData.enable) {
                return;
              }
              if (itemData.default) {
                default_value = keyName;
              }
              return {
                value: keyName,
                text: itemData.text
              };
            }).filter((item) => item != null);
            if (default_value == null) {
              default_value = selectData[0].value;
            }
            this.initDefaultValue(
              NetDiskRuleDataKEY.function.linkClickMode(ruleKey),
              default_value
            );
          }
          if (typeof userRuleItemConfig.setting["openBlankWithCopyAccessCode"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(
                ruleKey
              ),
              Boolean(userRuleItemConfig.setting["openBlankWithCopyAccessCode"])
            );
            netDiskRuleConfig.setting.configurationInterface.linkClickMode_openBlank.openBlankWithCopyAccessCode = Boolean(userRuleItemConfig.setting["openBlankWithCopyAccessCode"]);
          }
          if (typeof userRuleItemConfig.setting["openBlankAutoFilleAccessCode"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankAutoFilleAccessCode(
                ruleKey
              ),
              Boolean(userRuleItemConfig.setting["openBlankAutoFilleAccessCode"])
            );
            netDiskRuleConfig.setting.configurationInterface.linkClickMode_openBlank.openBlankAutoFilleAccessCode = Boolean(userRuleItemConfig.setting["openBlankAutoFilleAccessCode"]);
          }
          if (typeof userRuleItemConfig.setting["checkLinkValidity"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.function.checkLinkValidity(ruleKey),
              Boolean(userRuleItemConfig.setting["checkLinkValidity"])
            );
            netDiskRuleConfig.setting.configurationInterface.function.checkLinkValidity = Boolean(userRuleItemConfig.setting["checkLinkValidity"]);
          }
          if (typeof userRuleItemConfig.setting["checkLinkValidityHoverTip"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.function.checkLinkValidityHoverTip(ruleKey),
              Boolean(userRuleItemConfig.setting["checkLinkValidityHoverTip"])
            );
          }
          if (typeof userRuleItemConfig.setting["isForward"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.schemeUri.enable(ruleKey),
              Boolean(userRuleItemConfig.setting["isForward"])
            );
            netDiskRuleConfig.setting.configurationInterface.schemeUri.enable = Boolean(userRuleItemConfig.setting["isForward"]);
          }
          if (typeof userRuleItemConfig.setting["schemeUri"] === "string") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.schemeUri.uri(ruleKey),
              userRuleItemConfig.setting["schemeUri"]
            );
            netDiskRuleConfig.setting.configurationInterface.schemeUri.uri = userRuleItemConfig.setting["schemeUri"];
          }
          if (typeof userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"] === "number") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.matchRange_text.before(ruleKey),
              userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"]
            );
            netDiskRuleConfig.setting.configurationInterface.matchRange_text.before = userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"];
          }
          if (typeof userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"] === "number") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.matchRange_text.after(ruleKey),
              userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"]
            );
            netDiskRuleConfig.setting.configurationInterface.matchRange_text.after = userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"];
          }
          if (typeof userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"] === "number") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.matchRange_html.before(ruleKey),
              userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"]
            );
            netDiskRuleConfig.setting.configurationInterface.matchRange_html.before = userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"];
          }
          if (typeof userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"] === "number") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.matchRange_html.after(ruleKey),
              userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"]
            );
            netDiskRuleConfig.setting.configurationInterface.matchRange_html.after = userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"];
          }
        }
        if (typeof userRuleItemConfig.icon === "string") {
          let ruleIcon = userRuleItemConfig.icon;
          NetDiskUI.src.addIcon(ruleKey, ruleIcon);
        }
        const AsyncFunction = Object.getPrototypeOf(
          async function() {
          }
        ).constructor;
        if (typeof userRuleItemConfig.checkLinkValidityFunction === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.set(
              NetDiskCheckLinkValidity.ruleCheckValidFunction,
              ruleKey,
              {
                init: new AsyncFunction(
                  "netDiskInfo",
                  userRuleItemConfig.checkLinkValidityFunction
                  // 绑定作用域
                ).bind(context)
              }
            );
          } catch (error) {
            log.error(error);
          }
        }
        if (typeof userRuleItemConfig.AuthorizationFunction === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.deleteProperty(
              context,
              "NetDiskCheckLinkValidity"
            );
            NetDiskAuthorization.netDisk[ruleKey] = new AsyncFunction(
              userRuleItemConfig.AuthorizationFunction
            ).bind(
              // 绑定作用域
              context
            );
          } catch (error) {
            log.error(error);
          }
        }
        if (typeof userRuleItemConfig.AutoFillAccessCodeFunction === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.deleteProperty(
              context,
              "NetDiskCheckLinkValidity"
            );
            NetDiskAutoFillAccessCode.netDisk[ruleKey] = new AsyncFunction(
              "netDiskInfo",
              userRuleItemConfig.AutoFillAccessCodeFunction
              // 绑定作用域
            ).bind(context);
          } catch (error) {
            log.error(error);
          }
        }
        if (typeof userRuleItemConfig.parseFunction === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.deleteProperty(
              context,
              "NetDiskCheckLinkValidity"
            );
            Reflect.set(
              NetDiskParse.rule,
              ruleKey,
              new AsyncFunction(userRuleItemConfig.parseFunction).bind(context)
            );
          } catch (error) {
            log.error(error);
          }
        }
        if (typeof userRuleItemConfig.afterRenderUrlBox === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.deleteProperty(
              context,
              "NetDiskCheckLinkValidity"
            );
            netDiskRuleConfig.afterRenderUrlBox = new AsyncFunction(
              "option",
              userRuleItemConfig.afterRenderUrlBox
              // 绑定作用域
            ).bind(context);
          } catch (error) {
            log.error(error);
          }
        }
        let findValue = netDiskRuleConfigList.find(
          (item) => item.setting.key === netDiskRuleConfig.setting.key
        );
        if (findValue) {
          findValue.rule = findValue.rule.concat(netDiskRuleConfig.rule);
        } else {
          netDiskRuleConfigList.push(netDiskRuleConfig);
        }
      }
      return netDiskRuleConfigList;
    },
    /**
     * 获取配置
     */
    getNetDiskRuleConfig() {
      return this.$data.userRule.values();
    },
    /**
     * 初始化默认值
     */
    initDefaultValue(key, value) {
      let localValue = _GM_getValue(key);
      if (localValue == null) {
        _GM_setValue(key, value);
      }
    },
    /**
     * 获取模板规则
     */
    getTemplateRule() {
      let templateRule = {
        key: "规则名",
        icon: "图标链接字符串或图片的base64字符串",
        regexp: [
          {
            link_innerText: "",
            link_innerHTML: "",
            shareCode: "",
            shareCodeNeedRemoveStr: "",
            uiLinkShow: "",
            blank: "",
            copyUrl: ""
          }
        ],
        setting: {
          name: "设置界面的名字",
          enable: true,
          linkClickMode: "openBlank",
          openBlankWithCopyAccessCode: true
        }
      };
      return templateRule;
    },
    /**
     * 获取规则面板视图的配置
     * @param quickAddData 用于快速添加数据
     */
    getRulePanelViewOption(quickAddData) {
      const that = this;
      let addData = () => {
        return quickAddData ?? this.getTemplateRule();
      };
      let rulePanelViewOption = {
        id: "user-rule",
        title: "链接识别",
        headerTitle: "链接识别规则",
        subscribe: {
          enable: true,
          data() {
            return NetDiskUserRuleSubscribeRule.getAllSubscribe();
          },
          getData: (data) => {
            let findValue = NetDiskUserRuleSubscribeRule.getSubscribe(data.uuid);
            return findValue ?? data;
          },
          getDataItemName(subscribeOption) {
            return (
              /*html*/
              `
						<style>
							.subscribe-rule-title-info-wrapper{
								display: flex;
								flex-direction: column;
								gap: 4px;
							}
							.subscribe-rule-title-info-wrapper .rule-name-text{
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-weight: 600;
								font-size: 16px;
								line-height: 24px;
							}
							.subscribe-rule-title-info-wrapper .subscribe-rule-small-span-text{
								font-size: 14px;
								line-height: 16px;
								white-space: pre-wrap;
							}
						</style>
						<div class="subscribe-rule-title-info-wrapper">
							<div class="rule-name-text" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 16px;font-weight: 600;line-height: 24px;">${subscribeOption.data.title || subscribeOption.subscribeData.title || subscribeOption.data.url}</div>
								<div class="subscribe-rule-small-span-text">${subscribeOption.subscribeData.ruleData.length} 条规则，更新于：${utils.formatTime(
              subscribeOption.data.latestUpdateTime,
              "yyyy年MM月dd日 HH:mm:ss"
            )}${typeof subscribeOption.data.updateFailedTime === "number" ? `，<span style="color: red;">更新失败于：${utils.formatTime(
              subscribeOption.data.updateFailedTime,
              "yyyy年MM月dd日 HH:mm:ss"
            )}</span>` : ``}</div>
								${subscribeOption.subscribeData.homePage ? `<a href="${subscribeOption.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${subscribeOption.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`
            );
          },
          addData: (data) => {
            return NetDiskUserRuleSubscribeRule.addSubscribe(data);
          },
          updateData: (data) => {
            return NetDiskUserRuleSubscribeRule.updateSubscribe(data);
          },
          deleteData: (data) => {
            return NetDiskUserRuleSubscribeRule.deleteSubscribe(data);
          },
          btnControls: {
            add: {
              enable: true
            },
            filter: {
              enable: true,
              title: "过滤订阅",
              option: [
                {
                  name: "过滤【已启用】的订阅",
                  filterCallBack(data) {
                    return data.data.enable;
                  }
                },
                {
                  name: "过滤【未启用】的订阅",
                  filterCallBack(data) {
                    return !data.data.enable;
                  }
                }
              ]
            },
            clearAll: {
              enable: true,
              callback: () => {
                NetDiskUserRuleSubscribeRule.deleteAllSubscribe();
              }
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.data.enable;
              },
              async callback(data, enable) {
                data.data.enable = enable;
                NetDiskUserRuleSubscribeRule.updateSubscribe(data);
              }
            },
            ruleEdit: {
              enable: true,
              callback: (option) => {
                let subscribeUUID = option.ruleData.uuid;
                option.enterDeepMenu({
                  headerTitle: (
                    // 自己重新命名的
                    option.ruleData.data.title || // 订阅的规则自带的
                    option.ruleData.subscribeData.title || // 订阅的链接
                    option.ruleData.data.url
                  ),
                  data() {
                    let currentData = NetDiskUserRuleSubscribeRule.getSubscribe(subscribeUUID);
                    return currentData?.subscribeData?.ruleData ?? option.ruleData.subscribeData.ruleData;
                  },
                  getData(data) {
                    let currentData = NetDiskUserRuleSubscribeRule.getSubscribeRule(
                      subscribeUUID,
                      data.key
                    );
                    return currentData ?? data;
                  },
                  getDataItemName(data) {
                    return data.setting.name;
                  },
                  addData(data) {
                    return true;
                  },
                  updateData(data) {
                    return NetDiskUserRuleSubscribeRule.updateSubscribeRule(
                      subscribeUUID,
                      data
                    );
                  },
                  deleteData(data) {
                    return NetDiskUserRuleSubscribeRule.deleteSubscribeRule(
                      subscribeUUID,
                      data
                    );
                  },
                  btnControls: {
                    filter: {
                      enable: true,
                      option: [
                        {
                          name: "过滤【已启用】的规则",
                          filterCallBack(data) {
                            return data.setting.enable;
                          }
                        },
                        {
                          name: "过滤【未启用】的规则",
                          filterCallBack(data) {
                            return !data.setting.enable;
                          }
                        }
                      ]
                    },
                    clearAll: {
                      enable: true,
                      callback: () => {
                        NetDiskUserRuleSubscribeRule.clearSubscribe(
                          subscribeUUID
                        );
                      }
                    },
                    // ruleEnable: {
                    // 	enable: true,
                    // 	getEnable(data) {
                    // 		return data.setting.enable;
                    // 	},
                    // 	callback(data, enable) {
                    // 		data.setting.enable = enable;
                    // 		NetDiskUserRuleSubscribeRule.updateSubscribeRule(
                    // 			subscribeUUID,
                    // 			data
                    // 		);
                    // 	},
                    // },
                    ruleEdit: {
                      enable: true,
                      callback(option2) {
                        NetDiskUserRuleUI.showSubscribe(
                          subscribeUUID,
                          option2.ruleData.key,
                          async (subscribeRule) => {
                            let $ruleItem = await option2.context.updateRuleItemElement(
                              option2.option,
                              option2.subscribeOption,
                              subscribeRule,
                              option2.$ruleItem,
                              option2.$section
                            );
                            option2.$ruleItem = $ruleItem;
                          }
                        );
                        return false;
                      }
                    },
                    ruleDelete: {
                      enable: true,
                      deleteCallBack(data) {
                        return NetDiskUserRuleSubscribeRule.deleteSubscribeRule(
                          subscribeUUID,
                          data
                        );
                      }
                    }
                  }
                });
                return false;
              }
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return NetDiskUserRuleSubscribeRule.deleteSubscribe(data);
              }
            },
            import: {
              enable: true,
              callback(updateView) {
                NetDiskUserRuleSubscribeRule.importSubscribe(() => {
                  updateView();
                });
              }
            },
            export: {
              enable: true,
              callback() {
                NetDiskUserRuleSubscribeRule.exportSubscribe(
                  _SCRIPT_NAME_ + "-网站规则-订阅.json"
                );
              }
            }
          },
          getSubscribeInfo: NetDiskUserRuleSubscribeRule.getSubscribeInfo.bind(
            NetDiskUserRuleSubscribeRule
          )
        },
        ruleOption: {
          btnControls: {
            add: {
              enable: true,
              callback(option) {
                NetDiskUserRuleUI.show(false, void 0, (rule) => {
                  this.updateRuleContaienrElement(
                    rulePanelViewOption.ruleOption,
                    void 0,
                    option.$section
                  );
                });
                return false;
              }
            },
            filter: {
              enable: true,
              title: "过滤规则",
              option: [
                {
                  name: "过滤【已启用】的规则",
                  filterCallBack(data) {
                    return data.setting.enable;
                  }
                },
                {
                  name: "过滤【未启用】的规则",
                  filterCallBack(data) {
                    return !data.setting.enable;
                  }
                }
              ]
            },
            clearAll: {
              enable: true,
              callback: () => {
                that.clearRule();
              }
            },
            import: {
              enable: true,
              callback: (updateView) => {
                that.importRule(() => {
                  updateView();
                });
              }
            },
            export: {
              enable: true,
              callback: () => {
                that.exportRule(
                  _SCRIPT_NAME_ + "-链接识别规则.json",
                  _SCRIPT_NAME_ + "-链接识别规则-订阅模式.json"
                );
              }
            },
            // ruleEnable: {
            // 	enable: false,
            // 	getEnable(data) {
            // 		return data.setting.enable;
            // 	},
            // 	callback: (data, enable) => {
            // 		data.setting.enable = enable;
            // 		that.updateRule(data.key, data);
            // 	},
            // },
            ruleEdit: {
              enable: true,
              callback(option) {
                NetDiskUserRuleUI.show(
                  true,
                  option.ruleData.key,
                  async (rule) => {
                    let $ruleItem = await option.context.updateRuleItemElement(
                      option.option,
                      option.subscribeOption,
                      rule,
                      option.$ruleItem,
                      option.$section
                    );
                    option.$ruleItem = $ruleItem;
                  }
                );
                return false;
              }
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return that.deleteRule(data.key);
              }
            }
          },
          data: () => {
            return this.getAllRule();
          },
          getAddData: () => {
            return addData();
          },
          getData: (data) => {
            let allData = this.getAllRule();
            let findValue = allData.find((item) => item.key === data.key);
            return findValue ?? data;
          },
          getDataItemName: (data) => {
            return data.setting.name;
          },
          updateData: (data) => {
            return this.updateRule(data.key, data);
          },
          deleteData: (data) => {
            return this.deleteRule(data.key);
          }
        }
      };
      return rulePanelViewOption;
    },
    /**
     * 添加规则
     * @param userRule
     */
    addRule(userRule) {
      let localRule = this.getAllRule();
      localRule.push(userRule);
      this.setRule(localRule);
    },
    /**
     * 设置规则到本地
     * @param oldRuleKey 旧规则的键名
     * @param userRule
     */
    setRule(userRule) {
      userRule = Array.isArray(userRule) ? userRule : [userRule];
      NetDiskUserRuleStorageApi.set(this.$data.STORAGE_KEY, userRule);
    },
    /**
     * 更新规则
     */
    updateRule(key, rule) {
      let localRule = this.getAllRule();
      let findRuleIndex = localRule.findIndex((item) => item.key === key);
      if (findRuleIndex !== -1) {
        localRule.splice(findRuleIndex, 1, rule);
        this.setRule(localRule);
        return true;
      } else {
        return false;
      }
    },
    /**
     * 删除单条规则
     * @param ruleKey 规则的key名
     */
    deleteRule(ruleKey) {
      let localRule = this.getAllRule();
      let findIndex = localRule.findIndex((rule) => rule.key === ruleKey);
      if (findIndex !== -1) {
        localRule.splice(findIndex, 1);
        this.setRule(localRule);
        return true;
      } else {
        return false;
      }
    },
    /**
     * 清空规则
     */
    clearRule() {
      NetDiskUserRuleStorageApi.delete(this.$data.STORAGE_KEY);
    },
    /**
     * 获取本地所有的规则
     */
    getAllRule() {
      let result = NetDiskUserRuleStorageApi.get(
        this.$data.STORAGE_KEY,
        []
      );
      return result;
    },
    /**
     * 获取规则
     */
    getRule(key) {
      let localRule = this.getAllRule();
      return localRule.find((item) => item.key === key);
    },
    /**
     * 获取格式化后的规则
     * @param rule
     */
    getFormatRule(rule) {
      return JSON.stringify(rule || this.getAllRule(), void 0, 4);
    },
    /**
     * 导出规则
     */
    exportRule(fileName = "rule.json", subscribeFileName = "rule-subscribe.json") {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导出方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='only-export-rule-list']"
      );
      let $exportToSubscribe = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='export-to-subscribe']"
      );
      let exportFile = (__fileName__, __data__) => {
        let blob = new Blob([JSON.stringify(__data__, null, 4)]);
        let blobUrl = window.URL.createObjectURL(blob);
        let $a = document.createElement("a");
        $a.href = blobUrl;
        $a.download = __fileName__;
        $a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 1500);
      };
      domUtils.on($onlyExportRuleList, "click", (event) => {
        utils.preventEvent(event);
        try {
          let allRule = this.getAllRule();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          exportFile(fileName, allRule);
          $alert.close();
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
      domUtils.on($exportToSubscribe, "click", (event) => {
        utils.preventEvent(event);
        const that = this;
        $alert.close();
        try {
          let allRule = this.getAllRule();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          let panelHandlerComponents = __pops.config.PanelHandlerComponents();
          let generateStorageApi = function(data) {
            return {
              get(key, defaultValue) {
                return data[key] ?? defaultValue;
              },
              set(key, value) {
                data[key] = value;
                NetDiskUserRuleStorageApi.set(that.$data.EXPORT_CONFIG_KEY, data);
              }
            };
          };
          let exportCallBack = () => {
            let configData2 = NetDiskUserRuleStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
            if (configData2?.title === "" || configData2.title == null) {
              Qmsg.error("订阅标题不能为空");
              return;
            }
            if (configData2.version == null) {
              Qmsg.error("版本号不能为空");
              return;
            } else {
              configData2.version = Number(configData2.version);
            }
            if (configData2.homePage == null) {
              configData2.homePage = void 0;
            }
            configData2.lastModified = Date.now();
            configData2.ruleData = this.getAllRule();
            exportFile(subscribeFileName, configData2);
            $exportSubscribeDialog.close();
          };
          let $exportSubscribeDialog = NetDiskPops.alert({
            title: {
              text: "请填写导出配置",
              position: "center"
            },
            content: {
              text: (
                /*html*/
                `
							
						`
              ),
              html: true
            },
            btn: {
              ok: {
                enable: true,
                text: "导出",
                callback(details, event2) {
                  exportCallBack();
                }
              },
              close: {
                enable: true,
                callback(details, event2) {
                  details.close();
                }
              }
            },
            mask: {
              enable: true
            },
            drag: true,
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: (
              /*css*/
              `
						${__pops.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`
            )
          });
          let $content = $exportSubscribeDialog.$shadowRoot.querySelector(
            ".pops-alert-content"
          );
          let configData = NetDiskUserRuleStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
          let title_template = UIInput("订阅标题", "title", "", "", void 0, "");
          Reflect.set(
            title_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $title = panelHandlerComponents.createSectionContainerItem_input(
            title_template
          );
          let version_template = UIInput(
            "版本号",
            "version",
            "",
            "",
            void 0,
            "",
            false
          );
          Reflect.set(
            version_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $version = panelHandlerComponents.createSectionContainerItem_input(
            version_template
          );
          let homePage_template = UIInput(
            "主页地址",
            "homePage",
            "",
            "",
            void 0,
            "选填"
          );
          Reflect.set(
            homePage_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $homePage = panelHandlerComponents.createSectionContainerItem_input(
            homePage_template
          );
          domUtils.append($content, $title);
          domUtils.append($content, $version);
          domUtils.append($content, $homePage);
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
    },
    /**
     * 导入规则
     * @param importEndCallBack 导入完毕后的回调
     */
    importRule(importEndCallBack) {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导入方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $local = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='local']"
      );
      let $network = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='network']"
      );
      let $clipboard = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='clipboard']"
      );
      let updateRuleToStorage = (data) => {
        let allData = this.getAllRule();
        let addNewData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.key === dataItem.key);
          if (findIndex !== -1) ;
          else {
            addNewData.push(dataItem);
          }
        }
        allData = allData.concat(addNewData);
        if (addNewData.length) {
          NetDiskUserRuleStorageApi.set(this.$data.STORAGE_KEY, allData);
          log.info(["新增的规则：", addNewData]);
          Qmsg.success(`共 ${data.length} 条规则，新增 ${addNewData.length} 条`);
        } else {
          Qmsg.error("未新增规则，请删除旧规则再重新导入");
        }
        importEndCallBack?.();
      };
      let importFile = (subscribeText) => {
        return new Promise((resolve) => {
          let data = utils.toJSON(subscribeText);
          if (Array.isArray(data)) {
            if (!data.length) {
              Qmsg.error("导入失败，解析出的数据为空", {
                consoleLogContent: true
              });
              resolve(false);
              return;
            }
          } else {
            data = [data];
          }
          let checkedData = [];
          for (let index = 0; index < data.length; index++) {
            const dataItem = data[index];
            let parseResult = this.parseRuleStrToRule(dataItem);
            if (!parseResult.success) {
              if (data.length === 1) {
                Qmsg.error(parseResult.msg, { timeout: 4e3 });
                return;
              }
              continue;
            }
            parseResult.data && checkedData.push(parseResult.data);
          }
          let notCheckedRuleCount = data.length - checkedData.length;
          if (notCheckedRuleCount > 0) {
            if (notCheckedRuleCount === data.length) {
              Qmsg.error("所有规则均未通过规则检查，请检查规则", {
                timeout: 4e3
              });
            } else {
              Qmsg.warning(
                `检测到有 ${notCheckedRuleCount}条未通过规则检查的规则，已忽略`,
                { timeout: 4e3 }
              );
            }
          }
          if (!checkedData.length) {
            return;
          }
          updateRuleToStorage(checkedData);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json"
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          if (!$input.files?.length) {
            return;
          }
          let uploadFile = $input.files[0];
          let fileReader = new FileReader();
          fileReader.onload = () => {
            importFile(fileReader.result);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $prompt = NetDiskPops.prompt({
          title: {
            text: "网络导入",
            position: "center"
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              }
            },
            ok: {
              text: "导入",
              callback: async (eventDetails, event2) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                let $loading = Qmsg.loading("正在获取配置...");
                let response = await httpx.get(url, {
                  allowInterceptConfig: false
                });
                $loading.close();
                if (!response.status) {
                  log.error(response);
                  Qmsg.error("获取配置失败", { consoleLogContent: true });
                  return;
                }
                let flag = await importFile(response.data.responseText);
                if (!flag) {
                  return;
                }
                eventDetails.close();
              }
            },
            cancel: {
              enable: false
            }
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto"
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(
          ".pops-prompt-btn-ok"
        );
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard(
          $promptInput,
          "keydown",
          (keyName, keyValue, otherCodeList) => {
            if (keyName === "Enter" && otherCodeList.length === 0) {
              let value = domUtils.val($promptInput);
              if (value !== "") {
                utils.dispatchEvent($promptOk, "click");
              }
            }
          }
        );
        utils.dispatchEvent($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        utils.preventEvent(event);
        $alert.close();
        let clipboardInfo = await utils.getClipboardInfo();
        if (clipboardInfo.error != null) {
          Qmsg.error(clipboardInfo.error.toString());
          return;
        }
        if (clipboardInfo.content.trim() === "") {
          Qmsg.warning("获取到的剪贴板内容为空");
          return;
        }
        let flag = await importFile(clipboardInfo.content);
        if (!flag) {
          return;
        }
      });
    }
  };
  const NetDiskRule_baidu = {
    /** 规则 */
    rule: [
      {
        link_innerText: `pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码|\\?pwd=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码|\\?pwd=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /pan\.baidu\.com\/s\/([0-9a-zA-Z-_]+)/gi,
        shareCodeNeedRemoveStr: /pan\.baidu\.com\/s\//gi,
        checkAccessCode: /(密码|访问码|提取码|pwd=)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
        blank: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
        copyUrl: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}"
      },
      {
        link_innerText: `pan.baidu.com/(share|wap)/init\\?surl=[0-9a-zA-Z-_]{5,24}([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码|&pwd=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `pan.baidu.com/(share|wap)/init\\?surl=[0-9a-zA-Z-_]{5,24}([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码|&pwd=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /pan\.baidu\.com\/(share|wap)\/init\?surl=([0-9a-zA-Z-_]+)/gi,
        shareCodeNeedRemoveStr: /pan\.baidu\.com\/(share|wap)\/init\?surl=/gi,
        checkAccessCode: /(密码|访问码|提取码|&pwd=)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
        blank: "https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
        copyUrl: "https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "百度网盘",
      key: "baidu",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: ""
        }
        // ownFormList: [
        // 	{
        // 		text: "第三方解析站",
        // 		type: "forms",
        // 		forms: [
        // 			UISwitch(
        // 				"启用解析站",
        // 				"baidu-static-enable",
        // 				false,
        // 				void 0,
        // 				"开源项目：<a href='https://github.com/yuantuo666/baiduwp-php' target='_blank'>https://github.com/yuantuo666/baiduwp-php</a>"
        // 			),
        // 			UISwitch(
        // 				"跳转时复制链接",
        // 				"baidu-baiduwp-php-copy-url",
        // 				false,
        // 				void 0,
        // 				"跳转至解析站时复制百度网盘链接"
        // 			),
        // 			UIInput(
        // 				"网址",
        // 				"baidu-baiduwp-php-url",
        // 				"",
        // 				"解析站的网址Url",
        // 				void 0,
        // 				"使用了baiduwp-php源码的网站，例如：https://www.example.com/"
        // 			),
        // 			UIInput(
        // 				"表单参数",
        // 				"baidu-baiduwp-php-post-form",
        // 				"",
        // 				"解析站的网址Url",
        // 				void 0,
        // 				"POST表单，例如：surl={#shareCode#}&pwd={#accessCode#}&password="
        // 			),
        // 		],
        // 	},
        // ],
      }
    }
  };
  const NetDiskRule_lanzou = () => {
    return {
      /** 规则 */
      rule: [
        {
          link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{3,6}|)`,
          link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{3,6}|)`,
          shareCode: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)([0-9a-zA-Z_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{3,20})/gi,
          shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)/gi,
          shareCodeExcludeRegular: ["lanzouyx"],
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: `${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#} 提取码: {#accessCode#}`,
          blank: `https://${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#}`,
          copyUrl: `https://${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#}
密码：{#accessCode#}`
        },
        {
          link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{3,6}|)`,
          link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{3,6}|)`,
          shareCode: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\/([0-9a-zA-Z_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{3,20})/gi,
          shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\//gi,
          shareCodeExcludeRegular: ["lanzouyx"],
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: `${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#} 提取码: {#accessCode#}`,
          blank: `https://${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#}`,
          copyUrl: `https://${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#}
密码：{#accessCode#}`
        }
      ],
      /** 设置项 */
      setting: {
        name: "蓝奏云",
        key: "lanzou",
        configurationInterface: {
          matchRange_text: {
            before: 20,
            after: 10
          },
          matchRange_html: {
            before: 100,
            after: 15
          },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: {
                default: true
              },
              parseFile: {
                enable: true
              },
              "parseFile-closePopup": {
                enable: true
              }
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true
          },
          linkClickMode_openBlank: {
            openBlankAutoFilleAccessCode: true,
            openBlankWithCopyAccessCode: true
          },
          schemeUri: {
            enable: false,
            isForwardLinearChain: false,
            isForwardBlankLink: false,
            uri: ""
          },
          ownFormList: [
            {
              text: "其它配置",
              type: "forms",
              forms: [
                UIInput(
                  "蓝奏云域名",
                  NetDiskParse_Lanzou_Config.MENU_KEY,
                  NetDiskParse_Lanzou_Config.DEFAULT_HOST_NAME,
                  "",
                  void 0,
                  `例如：${NetDiskParse_Lanzou_Config.DEFAULT_HOST_NAME}`
                )
              ]
            }
          ]
        }
      }
    };
  };
  const NetDiskRule_lanzouyx = {
    /** 规则 */
    rule: [
      {
        link_innerText: `ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码|\\?code=)[\\s\\S]{0,{#matchRange-text-after#}}[a-zA-Z0-9]{3,6}|)`,
        link_innerHTML: `ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码|\\?code=)[\\s\\S]{0,{#matchRange-html-after#}}[a-zA-Z0-9]{3,6}|)`,
        shareCode: /ilanzou.com\/s\/([a-zA-Z0-9_\-]{5,22})/gi,
        shareCodeNeedRemoveStr: /ilanzou.com\/s\//gi,
        checkAccessCode: /(密码|访问码|提取码|\?code=)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{3,})/gi,
        uiLinkShow: `www.ilanzou.com/s/{#shareCode#} 提取码: {#accessCode#}`,
        blank: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`,
        copyUrl: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`
      }
    ],
    /** 设置项 */
    setting: {
      name: "蓝奏云优享",
      key: "lanzouyx",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_tianyiyun = {
    /** 规则 */
    rule: [
      {
        link_innerText: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14})/gi,
        shareCodeNeedRemoveStr: /cloud\.189\.cn\/t\/|cloud.189.cn\/web\/share\?code=/gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "cloud.189.cn/t/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://cloud.189.cn/t/{#shareCode#}",
        copyUrl: "https://cloud.189.cn/t/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "天翼云",
      key: "tianyiyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_hecaiyun = {
    /** 规则 */
    rule: [
      {
        link_innerText: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /caiyun\.139\.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})/gi,
        shareCodeNeedRemoveStr: /caiyun\.139\.com\/m\/i\?/gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "caiyun.139.com/m/i?{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://caiyun.139.com/m/i?{#shareCode#}",
        copyUrl: "https://caiyun.139.com/m/i?{#shareCode#}\n密码：{#accessCode#}"
      },
      {
        link_innerText: `yun.139.com/link/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `yun.139.com/link/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /yun\.139\.com\/link\/w\/i\/([a-zA-Z0-9_\-]{8,14})/gi,
        shareCodeNeedRemoveStr: /yun\.139\.com\/link\/w\/i\//gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "yun.139.com/link/w/i/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://yun.139.com/link/w/i/{#shareCode#}",
        copyUrl: "https://yun.139.com/link/w/i/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "中国移动云盘",
      key: "hecaiyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            }
          }
          // checkLinkValidity: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: false,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_aliyun = {
    /** 规则 */
    rule: [
      {
        link_innerText: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /aliyundrive\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
        shareCodeNeedRemoveStr: /aliyundrive\.com\/s\//gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "aliyundrive.com/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://www.aliyundrive.com/s/{#shareCode#}",
        copyUrl: "https://www.aliyundrive.com/s/{#shareCode#}\n密码：{#accessCode#}"
      },
      {
        link_innerText: `aliyundrive.com/t/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `aliyundrive.com/t/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /aliyundrive\.com\/t\/([a-zA-Z0-9_\-]{8,14})/g,
        shareCodeNeedRemoveStr: /aliyundrive\.com\/t\//gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "aliyundrive.com/t/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://www.aliyundrive.com/t/{#shareCode#}",
        copyUrl: "https://www.aliyundrive.com/t/{#shareCode#}\n密码：{#accessCode#}"
      },
      {
        link_innerText: `alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /alipan\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
        shareCodeNeedRemoveStr: /alipan\.com\/s\//gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "alipan.com/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://www.alipan.com/s/{#shareCode#}",
        copyUrl: "https://www.alipan.com/s/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "阿里云",
      key: "aliyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: true,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_wenshushu = {
    /** 规则 */
    rule: [
      {
        link_innerText: `(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)/f/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)/f/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)\/f\/([a-zA-Z0-9_-]{8,14})/gi,
        shareCodeNeedRemoveStr: /(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)\/f\//gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /[0-9a-zA-Z]{4}/gi,
        uiLinkShow: "www.wenshushu.cn/f/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://www.wenshushu.cn/f/{#shareCode#}",
        copyUrl: "https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}"
      },
      {
        link_innerText: `wenshushu.cn/k/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `wenshushu.cn/k/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /wenshushu.cn\/k\/([a-zA-Z0-9_-]{8,14})/gi,
        shareCodeNeedRemoveStr: /wenshushu.cn\/k\//gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /[0-9a-zA-Z]{4}/gi,
        uiLinkShow: "www.wenshushu.cn/k/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://www.wenshushu.cn/k/{#shareCode#}",
        copyUrl: "https://www.wenshushu.cn/k/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "文叔叔",
      key: "wenshushu",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: true,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_nainiu = {
    /** 规则 */
    rule: [
      {
        link_innerText: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
        shareCodeNeedRemoveStr: /cowtransfer\.com\/s\//gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        uiLinkShow: "cowtransfer.com/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://cowtransfer.com/s/{#shareCode#}",
        copyUrl: "https://cowtransfer.com/s/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "奶牛",
      key: "nainiu",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: true,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_weiyun = {
    /** 规则 */
    rule: [
      {
        link_innerText: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /weiyun.com\/([0-9a-zA-Z\-_]{7,24})/gi,
        shareCodeNeedRemoveStr: /weiyun.com\//gi,
        shareCodeNotMatch: /^(ftn_handler)/,
        checkAccessCode: /(提取码|密码|访问码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://share.weiyun.com/{#shareCode#}",
        copyUrl: "https://share.weiyun.com/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "微云",
      key: "weiyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_xunlei = {
    /** 规则 */
    rule: [
      {
        link_innerText: `xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,{#matchRange-text-before#}}(\\?pwd=|访问码|提取码|密码|)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,{#matchRange-html-before#}}(\\?pwd=|访问码|提取码|密码|)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /xunlei.com\/s\/([0-9a-zA-Z\-_]{8,30})/gi,
        shareCodeNeedRemoveStr: /xunlei.com\/s\//gi,
        checkAccessCode: /(\?pwd=|提取码|密码|访问码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#} 提取码: {#accessCode#}",
        blank: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
        copyUrl: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "迅雷云盘",
      key: "xunlei",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_chengtong = {
    /** 规则 */
    rule: [
      /* d */
      {
        link_innerText: `(pan.jc-box.com|download.jamcz.com|545c.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(pan.jc-box.com|download.jamcz.com|545c.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /(pan.jc-box.com|download.jamcz.com|545c.com)\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(pan.jc-box.com|download.jamcz.com|545c.com)\/d\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        paramMatch: /([a-zA-Z0-9\.]+)\/d\//i,
        uiLinkShow: "{#$1#}/d/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://{#$1#}/d/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://{#$1#}/d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}"
      },
      /* d ==> http */
      {
        link_innerText: `ct.ghpym.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `ct.ghpym.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /ct.ghpym.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /ct.ghpym.com\/d\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        paramMatch: /([a-zA-Z0-9\.]+)\/d\//i,
        uiLinkShow: "{#$1#}/d/{#shareCode#} 提取码: {#accessCode#}",
        blank: "http://{#$1#}/d/{#shareCode#}?p={#accessCode#}",
        copyUrl: "http://{#$1#}/d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}"
      },
      /* d */
      {
        link_innerText: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /ctfile.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /ctfile.com\/d\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://url95.ctfile.com/d/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://url95.ctfile.com/d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}"
      },
      /* file */
      {
        link_innerText: `(2k.us|u062.com|545c.com|t00y.com|tc5.us)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(2k.us|u062.com|545c.com|t00y.com|tc5.us)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /(2k.us|u062.com|545c.com|t00y.com|tc5.us)\/file\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(2k.us|u062.com|545c.com|t00y.com|tc5.us)\/file\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://u062.com/file/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://u062.com/file/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}"
      },
      /* f ==> http  */
      {
        link_innerText: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)\/f\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        paramMatch: /([0-9a-zA-Z\.]+)\/f\//i,
        uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
        blank: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}",
        copyUrl: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}"
      },
      /* f ==> http  */
      {
        link_innerText: `url[0-9]{2}.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `url[0-9]{2}.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /url[0-9]{2}.com\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /url[0-9]{2}.com\/f\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        paramMatch: /([0-9a-zA-Z\.]+)\/f\//i,
        uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
        blank: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}",
        copyUrl: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}"
      },
      /* f */
      {
        link_innerText: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /(ctfile.com|089u.com)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(ctfile.com|089u.com)\/f\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://url95.ctfile.com/f/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://url95.ctfile.com/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}"
      },
      /* dir */
      {
        link_innerText: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{6}|)`,
        shareCode: /(089u.com|474b.com)\/dir\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(089u.com|474b.com)\/dir\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{6})/gi,
        uiLinkShow: "089u.com/dir/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://089u.com/dir/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://089u.com/dir/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "城通网盘",
      key: "chengtong",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: ""
        },
        ownFormList: [
          {
            type: "forms",
            text: "文件解析配置",
            forms: [
              UIInput(
                "<a target='_blank' href='https://github.com/qinlili23333/ctfileGet/'>解析站</a>",
                "chengtong-parse-file-api-host",
                "https://ctfile.qinlili.bid",
                "解析站配置，暂时只支持file，非file为新标签页打开",
                void 0,
                ""
              )
            ]
          }
        ]
      }
    }
  };
  const NetDiskRule_kuake = {
    /** 规则 */
    rule: [
      {
        link_innerText: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /quark.cn\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
        shareCodeNeedRemoveStr: /quark.cn\/s\//gi,
        checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "quark.cn/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://pan.quark.cn/s/{#shareCode#}",
        copyUrl: "https://pan.quark.cn/s/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "夸克网盘",
      key: "kuake",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_magnet = {
    /** 规则 */
    rule: [
      {
        link_innerText: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
        link_innerHTML: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
        shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi,
        shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi,
        checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}",
        blank: "magnet:?xt=urn:btih:{#shareCode#}",
        copyUrl: "magnet:?xt=urn:btih:{#shareCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "BT磁力",
      key: "magnet",
      configurationInterface: {
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            "openBlank-closePopup": {
              enable: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          }
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_jianguoyun = {
    /** 规则 */
    rule: [
      {
        link_innerText: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
        link_innerHTML: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
        shareCode: /jianguoyun.com\/p\/([0-9a-zA-Z\-_]{16,24})/gi,
        shareCodeNeedRemoveStr: /jianguoyun.com\/p\//gi,
        checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{3,6})/gi,
        uiLinkShow: "jianguoyun.com/p/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://www.jianguoyun.com/p/{#shareCode#}",
        copyUrl: "https://www.jianguoyun.com/p/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "坚果云",
      key: "jianguoyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_onedrive = {
    /** 规则 */
    rule: [
      {
        link_innerText: `[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
        link_innerHTML: `[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
        shareCode: /[0-9a-zA-Z-_]+\/[0-9a-zA-Z-_:]+\/[0-9a-zA-Z-_:]+\/personal\/[0-9a-zA-Z-_]+\/([0-9a-zA-Z\-_]+)/gi,
        shareCodeNeedRemoveStr: /[0-9a-zA-Z-_]+\/[0-9a-zA-Z-_:]+\/[0-9a-zA-Z-_:]+\/personal\/[0-9a-zA-Z-_]+\//gi,
        checkAccessCode: /(提取码|密码|访问码|\?password=|\?e=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,8})/gi,
        paramMatch: /([0-9a-zA-Z-_]+).sharepoint.com\/([0-9a-zA-Z-_:]+)\/([0-9a-zA-Z-_:]+)\/personal\/([0-9a-zA-Z-_]+)\/([0-9a-zA-Z-_]+)/i,
        uiLinkShow: "{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#}?e={#accessCode#}",
        copyUrl: "https://{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "OneDrive",
      key: "onedrive",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: false,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_uc = {
    /** 规则 */
    rule: [
      {
        link_innerText: `(drive|fast).uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
        link_innerHTML: `(drive|fast).uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
        shareCode: /(drive|fast).uc.cn\/s\/([0-9a-zA-Z]{8,24})/gi,
        shareCodeNeedRemoveStr: /(drive|fast).uc.cn\/s\//gi,
        checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]+)/gi,
        uiLinkShow: "drive.uc.cn/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://drive.uc.cn/s/{#shareCode#}",
        copyUrl: "https://drive.uc.cn/s/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "UC网盘",
      key: "uc",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: ""
        }
      }
    }
  };
  const UISlider = function(text, key, defaultValue, min, max, changeCallback, getToolTipContent, description, step) {
    let result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      getToolTipContent(value) {
        if (typeof getToolTipContent === "function") {
          return getToolTipContent(value);
        } else {
          return `${value}`;
        }
      },
      callback(event, value) {
        if (typeof changeCallback === "function") {
          let result2 = changeCallback(event, value);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      min,
      max,
      step
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "slider",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const UISelect = function(text, key, defaultValue, data, changeCallback, description) {
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
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        let value = isSelectedValue;
        log.info(`选择：${isSelectedText}`);
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      data: selectData
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "select",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const NetDiskRule_115pan = {
    /** 规则 */
    rule: [
      {
        link_innerText: `(115.com|115cdn.com|anxia.com)/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `(115.com|115cdn.com|anxia.com)/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /(115.com|115cdn.com|anxia.com)\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
        shareCodeNeedRemoveStr: /(115.com|115cdn.com|anxia.com)\/s\//gi,
        checkAccessCode: /(提取码|密码|\?password=|访问码)[\s\S]+/gi,
        accessCode: /(\?password=|)([0-9a-zA-Z]{4})/i,
        paramMatch: /(115.com|115cdn.com|anxia.com)/i,
        uiLinkShow: "{#$1#}/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://{#$1#}/s/{#shareCode#}",
        copyUrl: "https://{#$1#}/s/{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "115网盘",
      key: "_115pan",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_ed2k = {
    /** 规则 */
    rule: [
      {
        link_innerText: `ed2k://\\|file\\|[^\\|]+\\|\\d+\\|[a-fA-F0-9]{32}\\|`,
        link_innerHTML: `ed2k://\\|file\\|[^\\|]+\\|\\d+\\|[a-fA-F0-9]{32}\\|`,
        shareCode: /ed2k:\/\/\\|file\\|[^\\|]+\\|\\d+\\|([a-fA-F0-9]{32})\|/gi,
        shareCodeNeedRemoveStr: / /gi,
        checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        paramMatch: /ed2k:\/\/\|file\|([^\|]+)\|(\d+)\|([a-fA-F0-9]{32})\|/i,
        uiLinkShow: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
        blank: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
        copyUrl: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/"
      }
    ],
    /** 设置项 */
    setting: {
      name: "ed2k",
      key: "ed2k",
      configurationInterface: {
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            },
            "openBlank-closePopup": {
              enable: true
            },
            parseFile: {
              enable: true
            },
            "parseFile-closePopup": {
              enable: true
            }
          }
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule_360yunpan = {
    /** 规则 */
    rule: [
      {
        link_innerText: `[0-9a-z]+.(link.yunpan.com|link.yunpan.360.cn)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
        link_innerHTML: `[0-9a-z]+.(link.yunpan.com|link.yunpan.360.cn)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
        shareCode: /(link.yunpan.com|link.yunpan.360.cn)\/lk\/surl_([0-9a-zA-Z]{8,24})/gi,
        shareCodeNeedRemoveStr: /(link.yunpan.com|link.yunpan.360.cn)\/lk\/surl_/gi,
        checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]+)/gi,
        paramMatch: /([0-9a-z]+).(link.yunpan.com|link.yunpan.360.cn)\/lk\//i,
        uiLinkShow: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#}",
        copyUrl: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#}\n密码：{#accessCode#}"
      },
      {
        link_innerText: `(yunpan.360.cn|www.yunpan.com)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
        link_innerHTML: `(yunpan.360.cn|www.yunpan.com)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
        shareCode: /(yunpan.360.cn|www.yunpan.com)\/lk\/surl_([0-9a-zA-Z]{8,24})/gi,
        shareCodeNeedRemoveStr: /(yunpan.360.cn|www.yunpan.com)\/lk\/surl_/gi,
        checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]+)/gi,
        paramMatch: /(yunpan.360.cn|www.yunpan.com)/i,
        uiLinkShow: "https://{#$1#}/lk/surl_{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://{#$1#}/lk/surl_{#shareCode#}",
        copyUrl: "https://{#$1#}/lk/surl_{#shareCode#}\n密码：{#accessCode#}"
      }
    ],
    /** 设置项 */
    setting: {
      name: "360AI云盘",
      key: "360yunpan",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10
        },
        matchRange_html: {
          before: 100,
          after: 15
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true
            }
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: ""
        }
      }
    }
  };
  const NetDiskRule = {
    /** 规则存储的数据 */
    dataKey: "ruleData",
    $data: {
      /** 规则的配置界面信息 */
      ruleContent: []
    },
    init() {
      this.initRule();
    },
    /**
     * 初始化规则的内容
     */
    initRule() {
      let defaultRuleList = [
        NetDiskRule_baidu,
        NetDiskRule_lanzou,
        NetDiskRule_lanzouyx,
        NetDiskRule_tianyiyun,
        NetDiskRule_hecaiyun,
        NetDiskRule_aliyun,
        NetDiskRule_wenshushu,
        NetDiskRule_nainiu,
        NetDiskRule_123pan,
        NetDiskRule_weiyun,
        NetDiskRule_xunlei,
        NetDiskRule_115pan,
        NetDiskRule_chengtong,
        NetDiskRule_kuake,
        NetDiskRule_magnet,
        NetDiskRule_ed2k,
        NetDiskRule_jianguoyun,
        NetDiskRule_onedrive,
        NetDiskRule_uc,
        NetDiskRule_360yunpan
      ];
      let userRuleList = NetDiskUserRule.getNetDiskRuleConfig();
      [...defaultRuleList, ...userRuleList].forEach((netDiskRuleConfig) => {
        if (typeof netDiskRuleConfig === "function") {
          netDiskRuleConfig = netDiskRuleConfig();
        }
        if (typeof netDiskRuleConfig.setting.key !== "string") {
          throw new Error("规则未设置key");
        }
        if (netDiskRuleConfig.rule == null) {
          throw new Error("规则未设置rule");
        }
        const ruleKey = netDiskRuleConfig.setting.key;
        const ruleName = netDiskRuleConfig.setting.name;
        const netDiskRule = netDiskRuleConfig.rule;
        if (Reflect.has(NetDisk.$rule.ruleOption, ruleKey)) {
          let commonRule = NetDisk.$rule.ruleOption[ruleKey];
          if (netDiskRuleConfig.isUserRule) {
            commonRule = [...netDiskRule, ...commonRule];
          } else {
            commonRule = [...commonRule, ...netDiskRule];
          }
          let findValue = NetDisk.$rule.rule.find(
            (item) => item.setting.key === ruleKey
          );
          findValue.rule = commonRule;
        } else {
          Reflect.set(NetDisk.$rule.ruleOption, ruleKey, netDiskRuleConfig.rule);
          NetDisk.$rule.rule.push(netDiskRuleConfig);
        }
        Reflect.set(
          NetDisk.$rule.ruleSetting,
          ruleKey,
          netDiskRuleConfig.setting
        );
        netDiskRuleConfig.rule = this.parseRuleMatchRule(netDiskRuleConfig);
        let viewConfig = this.parseRuleSetting(netDiskRuleConfig);
        let asideTitle = netDiskRuleConfig.setting.name;
        if (NetDiskUI.src.hasIcon(ruleKey)) {
          asideTitle = /*html*/
          `
					<div class="netdisk-aside-icon" style="background-image: url(${NetDiskUI.src.icon[ruleKey]});"></div>
					<div class="netdisk-aside-text">${ruleName}</div>`;
        }
        let headerTitleText = ruleName;
        if (netDiskRuleConfig.isUserRule) {
          headerTitleText += /*html*/
          `
					<div 
						class="netdisk-custom-rule-edit" 
						data-key="${ruleKey}" 
						data-type="${netDiskRuleConfig.setting.name}"
						${typeof netDiskRuleConfig.subscribeUUID === "string" ? `data-subscribe-uuid="${netDiskRuleConfig.subscribeUUID}"` : ""}"
						
					>${__pops.config.iconSVG.edit}</div>`;
          headerTitleText += /*html*/
          `
					<div
						class="netdisk-custom-rule-delete"
						data-key="${ruleKey}"
						data-type="${netDiskRuleConfig.setting.name}"
						${typeof netDiskRuleConfig.subscribeUUID === "string" ? `data-subscribe-uuid="${netDiskRuleConfig.subscribeUUID}"` : ""}"
					>${__pops.config.iconSVG.delete}</div>`;
        }
        this.$data.ruleContent.push({
          id: "netdisk-panel-config-" + ruleKey,
          title: asideTitle,
          headerTitle: headerTitleText,
          attributes: {
            "data-key": ruleKey
          },
          forms: viewConfig,
          afterRender: (data) => {
            data.$asideLiElement.setAttribute(
              "data-function-enable",
              NetDiskRuleData.function.enable(ruleKey, true).toString()
            );
          }
        });
      });
    },
    /**
     * 解析规则的匹配规则
     *
     * 解析以下内容
     *
     * 1. 替换字符串类型的内部关键字
     */
    parseRuleMatchRule(netDiskRuleConfig) {
      let netDiskMatchRule = netDiskRuleConfig.rule;
      let netDiskMatchRuleHandler = [];
      let ruleKey = netDiskRuleConfig.setting.key;
      for (let index = 0; index < netDiskMatchRule.length; index++) {
        const netDiskMatchRuleOption = netDiskMatchRule[index];
        if (typeof netDiskMatchRuleOption.link_innerText === "string") {
          netDiskMatchRuleOption.link_innerText = NetDiskRuleUtils.replaceParam(
            netDiskMatchRuleOption.link_innerText,
            NetDiskUserRuleReplaceParam_matchRange_text(ruleKey)
          );
        }
        if (typeof netDiskMatchRuleOption.link_innerHTML === "string") {
          netDiskMatchRuleOption.link_innerHTML = NetDiskRuleUtils.replaceParam(
            netDiskMatchRuleOption.link_innerHTML,
            NetDiskUserRuleReplaceParam_matchRange_html(ruleKey)
          );
        }
        netDiskMatchRuleHandler.push(netDiskMatchRuleOption);
      }
      return netDiskMatchRuleHandler;
    },
    /**
     * 解析规则的设置项
     *
     * 解析出以下内容：
     *
     * 1. 视图配置
     * 2. 获取设置的最新的值并进行覆盖
     * @param netDiskRuleConfig 规则配置
     */
    parseRuleSetting(netDiskRuleConfig) {
      let formConfigList = [];
      const settingConfig = netDiskRuleConfig.setting.configurationInterface;
      const ruleKey = netDiskRuleConfig.setting.key;
      if (settingConfig == null) {
        return [];
      }
      if (settingConfig.function) {
        let function_form = [];
        if ("enable" in settingConfig.function) {
          let default_value = typeof settingConfig.function.enable === "boolean" ? settingConfig.function.enable : false;
          function_form.push(
            UISwitch(
              "启用",
              NetDiskRuleDataKEY.function.enable(ruleKey),
              default_value,
              (event, value) => {
                const notUnableAttrName = "data-function-enable";
                let $click = event.target;
                let $shadowRoot = $click.getRootNode();
                let $currentPanelAside = $shadowRoot.querySelector(
                  `.pops-panel-aside li[data-key="${ruleKey}"]`
                );
                if (!$currentPanelAside) {
                  return;
                }
                $currentPanelAside.setAttribute(
                  notUnableAttrName,
                  value.toString()
                );
              },
              "开启可允许匹配该规则"
            )
          );
          settingConfig.function.enable = NetDiskRuleData.function.enable(ruleKey);
        }
        if ("linkClickMode" in settingConfig.function) {
          let data = utils.assign(
            NetDiskRuleUtils.getDefaultLinkClickMode(),
            settingConfig.function.linkClickMode || {}
          );
          let default_value = null;
          let selectData = Object.keys(data).map((keyName) => {
            let itemData = data[keyName];
            if (!itemData.enable) {
              return;
            }
            if (itemData.default) {
              default_value = keyName;
            }
            return {
              value: keyName,
              text: itemData.text
            };
          }).filter((item) => item != null);
          if (default_value == null) {
            default_value = selectData[0].value;
          }
          function_form.push(
            UISelect(
              "点击动作",
              NetDiskRuleDataKEY.function.linkClickMode(ruleKey),
              default_value,
              selectData,
              void 0,
              "点击匹配到的链接的执行的动作"
            )
          );
          for (const linkClickModeKey in settingConfig.function.linkClickMode) {
            const linkClickModeItem = settingConfig.function.linkClickMode[linkClickModeKey];
            if (linkClickModeKey === NetDiskRuleData.function.linkClickMode(ruleKey)) {
              linkClickModeItem.default = true;
            } else {
              linkClickModeItem.default = false;
            }
          }
        }
        if ("checkLinkValidity" in settingConfig.function) {
          const default_value = typeof settingConfig.function.checkLinkValidity === "boolean" ? settingConfig.function.checkLinkValidity : true;
          function_form.push(
            UISwitch(
              "验证链接有效性",
              NetDiskRuleDataKEY.function.checkLinkValidity(ruleKey),
              default_value,
              void 0,
              "自动请求链接，判断该链接是否有效，在大/小窗内显示验证结果图标"
            )
          );
          settingConfig.function.checkLinkValidity = NetDiskRuleData.function.checkLinkValidity(ruleKey);
        }
        if ("checkLinkValidityHoverTip" in settingConfig.function) {
          const default_value = typeof settingConfig.function.checkLinkValidityHoverTip === "boolean" ? settingConfig.function.checkLinkValidityHoverTip : true;
          function_form.push(
            UISwitch(
              "验证链接有效性-悬停提示",
              NetDiskRuleDataKEY.function.checkLinkValidityHoverTip(ruleKey),
              default_value,
              void 0,
              "当鼠标悬停在验证结果图标上时会显示相关验证信息"
            )
          );
        }
        if (function_form.length) {
          formConfigList.push({
            text: "功能",
            type: "forms",
            forms: function_form
          });
        }
      }
      if (settingConfig.linkClickMode_openBlank) {
        let linkClickMode_openBlank_form = [];
        if ("openBlankAutoFilleAccessCode" in settingConfig.linkClickMode_openBlank) {
          const default_value = typeof settingConfig.linkClickMode_openBlank.openBlankAutoFilleAccessCode === "boolean" ? settingConfig.linkClickMode_openBlank.openBlankAutoFilleAccessCode : true;
          linkClickMode_openBlank_form.push(
            UISwitch(
              "自动填充访问码",
              NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankAutoFilleAccessCode(
                ruleKey
              ),
              default_value,
              void 0,
              "当点击动作是【新标签页打开】时且存在访问码，那就会自动填充访问码"
            )
          );
          settingConfig.linkClickMode_openBlank.openBlankAutoFilleAccessCode = NetDiskRuleData.linkClickMode_openBlank.openBlankAutoFilleAccessCode(
            ruleKey
          );
        }
        if ("openBlankWithCopyAccessCode" in settingConfig.linkClickMode_openBlank) {
          const default_value = typeof settingConfig.linkClickMode_openBlank.openBlankWithCopyAccessCode === "boolean" ? settingConfig.linkClickMode_openBlank.openBlankWithCopyAccessCode : false;
          linkClickMode_openBlank_form.push(
            UISwitch(
              "跳转时复制访问码",
              NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(
                ruleKey
              ),
              default_value,
              void 0,
              "当点击动作是【新标签页打开】时且存在访问码，那就会复制访问码到剪贴板"
            )
          );
          settingConfig.linkClickMode_openBlank.openBlankWithCopyAccessCode = NetDiskRuleData.linkClickMode_openBlank.openBlankWithCopyAccessCode(
            ruleKey
          );
        }
        if (linkClickMode_openBlank_form.length) {
          formConfigList.push({
            text: "点击动作-新标签页打开",
            type: "forms",
            forms: linkClickMode_openBlank_form
          });
        }
      }
      if (settingConfig.schemeUri) {
        const schemeUri_form = [];
        if ("enable" in settingConfig.schemeUri) {
          const default_value = typeof settingConfig.schemeUri.enable === "boolean" ? settingConfig.schemeUri.enable : false;
          schemeUri_form.push(
            UISwitch(
              "启用",
              NetDiskRuleDataKEY.schemeUri.enable(ruleKey),
              default_value,
              void 0,
              "开启后可进行scheme uri转发"
            )
          );
          settingConfig.schemeUri.enable = NetDiskRuleData.schemeUri.enable(ruleKey);
        }
        if ("isForwardBlankLink" in settingConfig.schemeUri) {
          const default_value = typeof settingConfig.schemeUri.isForwardBlankLink === "boolean" ? settingConfig.schemeUri.isForwardBlankLink : false;
          schemeUri_form.push(
            UISwitch(
              "转发新标签页链接",
              NetDiskRuleDataKEY.schemeUri.isForwardBlankLink(ruleKey),
              default_value,
              void 0,
              "对新标签页打开的链接进行scheme转换"
            )
          );
          settingConfig.schemeUri.isForwardBlankLink = NetDiskRuleData.schemeUri.isForwardBlankLink(ruleKey);
        }
        if ("isForwardLinearChain" in settingConfig.schemeUri) {
          const default_value = typeof settingConfig.schemeUri.isForwardLinearChain === "boolean" ? settingConfig.schemeUri.isForwardLinearChain : false;
          schemeUri_form.push(
            UISwitch(
              "转发直链",
              NetDiskRuleDataKEY.schemeUri.isForwardLinearChain(ruleKey),
              default_value,
              void 0,
              "对解析的直链进行scheme转换"
            )
          );
          settingConfig.schemeUri.isForwardLinearChain = NetDiskRuleData.schemeUri.isForwardLinearChain(ruleKey);
        }
        if ("uri" in settingConfig.schemeUri) {
          const default_value = typeof settingConfig.schemeUri.uri === "string" ? settingConfig.schemeUri.uri : "";
          schemeUri_form.push(
            UIInput(
              "Uri链接",
              NetDiskRuleDataKEY.schemeUri.uri(ruleKey),
              default_value,
              "自定义的Scheme的Uri链接",
              void 0,
              "jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx"
            )
          );
          settingConfig.schemeUri.uri = NetDiskRuleData.schemeUri.uri(ruleKey);
        }
        if (schemeUri_form.length) {
          formConfigList.push({
            text: "Scheme Uri转发",
            type: "forms",
            isFold: true,
            forms: schemeUri_form
          });
        }
      }
      if (settingConfig.matchRange_text) {
        let matchRange_text_form = [];
        if ("before" in settingConfig.matchRange_text) {
          const default_value = typeof settingConfig.matchRange_text.before === "number" ? settingConfig.matchRange_text.before : 0;
          matchRange_text_form.push(
            UISlider(
              "间隔前",
              NetDiskRuleDataKEY.matchRange_text.before(ruleKey),
              default_value,
              0,
              100,
              void 0,
              void 0,
              "提取码间隔前的字符长度"
            )
          );
          settingConfig.matchRange_text.before = NetDiskRuleData.matchRange_text.before(ruleKey);
        }
        if ("after" in settingConfig.matchRange_text) {
          const default_value = typeof settingConfig.matchRange_text.after === "number" ? settingConfig.matchRange_text.after : 0;
          matchRange_text_form.push(
            UISlider(
              "间隔后",
              NetDiskRuleDataKEY.matchRange_text.after(ruleKey),
              default_value,
              0,
              100,
              void 0,
              void 0,
              "提取码间隔后的字符长度"
            )
          );
          settingConfig.matchRange_text.after = NetDiskRuleData.matchRange_text.after(ruleKey);
        }
        if (matchRange_text_form.length) {
          formConfigList.push({
            text: "提取码文本匹配Text",
            type: "forms",
            forms: matchRange_text_form
          });
        }
      }
      if (settingConfig.matchRange_html) {
        let matchRange_html_form = [];
        if ("before" in settingConfig.matchRange_html) {
          const default_value = typeof settingConfig.matchRange_html.before === "number" ? settingConfig.matchRange_html.before : 0;
          matchRange_html_form.push(
            UISlider(
              "间隔前",
              NetDiskRuleDataKEY.matchRange_html.before(ruleKey),
              default_value,
              0,
              100,
              void 0,
              void 0,
              "提取码间隔前的字符长度"
            )
          );
          settingConfig.matchRange_html.before = NetDiskRuleData.matchRange_html.before(ruleKey);
        }
        if ("after" in settingConfig.matchRange_html) {
          const default_value = typeof settingConfig.matchRange_html.after === "number" ? settingConfig.matchRange_html.after : 0;
          matchRange_html_form.push(
            UISlider(
              "间隔后",
              NetDiskRuleDataKEY.matchRange_html.after(ruleKey),
              default_value,
              0,
              100,
              void 0,
              void 0,
              "提取码间隔后的字符长度"
            )
          );
          settingConfig.matchRange_html.after = NetDiskRuleData.matchRange_html.after(ruleKey);
        }
        if (matchRange_html_form.length) {
          formConfigList.push({
            text: "提取码文本匹配HTML",
            type: "forms",
            forms: matchRange_html_form
          });
        }
      }
      if (settingConfig.ownFormList) {
        formConfigList.push(...settingConfig.ownFormList);
      }
      return formConfigList;
    },
    /**
     * 获取规则界面配置的内容
     */
    getRulePanelContent() {
      return this.$data.ruleContent;
    }
  };
  const panelIndexCSS = 'div[class^="netdisk-custom-rule-"] {\r\n	display: flex;\r\n	align-items: center;\r\n	margin-left: 10px;\r\n	cursor: pointer;\r\n}\r\ndiv[class^="netdisk-custom-rule-"] svg,\r\ndiv[class^="netdisk-custom-rule-"] svg {\r\n	width: 1.2em;\r\n	height: 1.2em;\r\n}\r\n/* 控件被禁用的颜色 */\r\naside.pops-panel-aside li[data-key][data-function-enable="false"] {\r\n	color: #a8abb2;\r\n	filter: grayscale(100%);\r\n}\r\n/* 左侧网盘图标 */\r\naside.pops-panel-aside .netdisk-aside-icon {\r\n	width: 20px;\r\n	height: 20px;\r\n	background-size: 100% 100%;\r\n	background-repeat: no-repeat;\r\n}\r\n/* 设置间隔 */\r\naside.pops-panel-aside ul li {\r\n	gap: 4px;\r\n}\r\n\r\n/* mobile模式 */\r\n@media screen and (max-width: 600px) {\r\n	/* 隐藏左侧网盘图标 */\r\n	aside.pops-panel-aside .netdisk-aside-text {\r\n		display: none;\r\n	}\r\n}\r\n';
  const NetDiskGlobalSettingView = {
    show() {
      if (NetDiskUI.Alias.settingAlias) {
        log.error("设置界面已存在");
        Qmsg.error("设置界面已存在");
        return;
      }
      let content = PanelContent.getConfig(0);
      let ruleContent = NetDiskRule.getRulePanelContent();
      content.push(
        ...ruleContent,
        ...PanelContent.getDefaultBottomContentConfig()
      );
      let $panel = NetDiskPops.panel(
        {
          title: {
            text: `${_GM_info?.script?.name || _SCRIPT_NAME_}-设置`,
            position: "center"
          },
          content,
          btn: {
            close: {
              enable: true,
              callback(event) {
                event.close();
                NetDiskUI.Alias.settingAlias = void 0;
              }
            }
          },
          mask: {
            clickCallBack(originalRun) {
              originalRun();
              NetDiskUI.Alias.settingAlias = void 0;
            }
          },
          class: "whitesevPopSetting",
          style: panelIndexCSS
        },
        NetDiskUI.popsStyle.settingView
      );
      NetDiskUI.Alias.settingAlias = $panel;
      this.setRuleHeaderControlsClickEvent($panel.$shadowRoot);
    },
    /**
     * 设置规则顶部的编辑|删除的点击事件
     */
    setRuleHeaderControlsClickEvent($shadowRoot) {
      domUtils.on(
        $shadowRoot,
        "click",
        ".netdisk-custom-rule-edit",
        function(event) {
          let $click = event.target;
          let ruleKey = $click.getAttribute("data-key");
          $click.getAttribute("data-type");
          let subscribeUUID = $click.getAttribute("data-subscribe-uuid");
          if (typeof subscribeUUID === "string" && subscribeUUID.trim() !== "") {
            NetDiskUserRuleUI.showSubscribe(
              subscribeUUID,
              ruleKey,
              function(rule) {
                NetDiskUserRule.updateRule(ruleKey, rule);
              }
            );
          } else {
            NetDiskUserRuleUI.show(true, ruleKey);
          }
        }
      );
      domUtils.on(
        $shadowRoot,
        "click",
        ".netdisk-custom-rule-delete",
        function(event) {
          let $click = event.target;
          let ruleKey = $click.getAttribute("data-key");
          let ruleName = $click.getAttribute("data-type");
          let subscribeUUID = $click.getAttribute("data-subscribe-uuid");
          NetDiskPops.alert({
            title: {
              text: "提示",
              position: "center"
            },
            content: {
              text: `确定删除规则 ${ruleName}(${ruleKey}) 吗？`
            },
            btn: {
              ok: {
                callback(okEvent) {
                  let flag;
                  if (typeof subscribeUUID === "string" && subscribeUUID.trim() !== "") {
                    flag = NetDiskUserRuleSubscribeRule.deleteSubscribeRule(
                      subscribeUUID,
                      ruleKey
                    );
                  } else {
                    flag = NetDiskUserRule.deleteRule(ruleKey);
                  }
                  if (flag) {
                    let asideElement = NetDiskUI.Alias.settingAlias.$shadowRoot.querySelector(
                      `.pops-panel-aside > ul > li[data-key="${ruleKey}"]`
                    );
                    let $prev = asideElement.previousElementSibling;
                    let $next = asideElement.nextElementSibling;
                    if ($prev) {
                      $prev.click();
                    } else if ($next) {
                      $next.click();
                    }
                    asideElement?.remove();
                    Qmsg.success("删除成功");
                    okEvent.close();
                  } else {
                    Qmsg.error("删除规则失败");
                  }
                }
              }
            }
          });
        }
      );
    }
  };
  const indexCSS$2 = ".whitesevSuspension {\r\n	top: 0;\r\n	position: fixed;\r\n	right: 10px;\r\n	border-radius: 12px;\r\n}\r\n.whitesevSuspension .whitesevSuspensionMain {\r\n	background: #fff;\r\n	border: 1px solid #f2f2f2;\r\n	box-shadow: 0 0 15px #e4e4e4;\r\n	box-sizing: border-box;\r\n	border-radius: inherit;\r\n	height: inherit;\r\n	width: inherit;\r\n}\r\n.whitesevSuspension .whitesevSuspensionFloor {\r\n	border-bottom: 1px solid #f2f2f2;\r\n	position: relative;\r\n	box-sizing: border-box;\r\n	border-radius: inherit;\r\n	height: inherit;\r\n	width: inherit;\r\n}\r\n.whitesevSuspension .whitesevSuspensionFloor .netdisk {\r\n	background-position: center center;\r\n	background-size: 115% 115%;\r\n	background-repeat: no-repeat;\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: center;\r\n	border-radius: inherit;\r\n	height: inherit;\r\n	width: inherit;\r\n}\r\n.whitesevSuspension .whitesevSuspensionFloor .netdisk:hover {\r\n	transition: all 300ms linear;\r\n	background-color: #e4e4e4;\r\n	transform: scale(1.1);\r\n}\r\n.whitesevPop-content p[pop] {\r\n	height: 100%;\r\n}\r\n";
  const NetDiskSuspensionConfig = {
    position: {
      /** 悬浮按钮位置的x坐标 */
      suspensionX: GenerateData("suspensionX", DOMUtils.width(window) - 50),
      /** 悬浮按钮位置的y坐标 */
      suspensionY: GenerateData(
        "suspensionY",
        (DOMUtils.height(window) - 50) / 2
      ),
      /** 悬浮按钮所在位置的最大x */
      suspensionMaxX: GenerateData(
        "susponsionMax-x",
        DOMUtils.width(window) - 50
      ),
      /** 悬浮按钮所在位置的最小y */
      suspensionMaxY: GenerateData(
        "suspensionMax-y",
        DOMUtils.height(window) - 50
      ),
      /** 悬浮按钮是否在右边 */
      isRight: GenerateData("isRight", false)
    },
    mode: {
      current_suspension_smallwindow_mode: GenerateData(
        "current_suspension_smallwindow_mode",
        "suspension"
      )
    }
  };
  const NetDiskSuspension = {
    suspensionNode: null,
    /** 是否已显示 */
    isShow: false,
    /** 是否已设置事件 */
    isSetEvent: false,
    /** 是否正在切换背景 */
    isRandBg: false,
    /**
     * 显示悬浮按钮
     */
    show() {
      if (!this.isShow) {
        this.isShow = true;
        this.createUI();
        this.setSuspensionPosition();
      }
      if (!this.isSetEvent) {
        this.isSetEvent = true;
        this.setSuspensionEvent();
        this.setResizeEventListener();
      }
      this.backgroundSwitch();
      this.showSuspension();
    },
    showSuspension() {
      this.suspensionNode.style.display = "";
    },
    hideSuspension() {
      this.suspensionNode.style.display = "none";
    },
    /**
     * 判断当前是否是顶部窗口
     * @returns {boolean}
     */
    isTopWindow() {
      return _unsafeWindow.self.window === _unsafeWindow.top.window;
    },
    /**
     * 创建UI界面
     */
    createUI() {
      if (NetDiskGlobalData.suspension.size.value < 15) {
        NetDiskGlobalData.suspension.size.value = 15;
      }
      if (NetDiskGlobalData.suspension.size.value > 250) {
        NetDiskGlobalData.suspension.size.value = 250;
      }
      if (NetDiskGlobalData.suspension.opacity.value < 0.1) {
        NetDiskGlobalData.suspension.opacity.value = 0.1;
      }
      if (NetDiskGlobalData.suspension.opacity.value > 1) {
        NetDiskGlobalData.suspension.opacity.value = 1;
      }
      let $shadowContainer = DOMUtils.createElement("div", {
        className: "whitesev-suspension-shadow-container"
      });
      let $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
      let suspendedZIndex = NetDiskGlobalData.suspension["suspended-z-index"].value;
      if (suspendedZIndex <= 0) {
        suspendedZIndex = utils.getMaxValue(4e4, utils.getMaxZIndex(10));
      }
      this.suspensionNode = DOMUtils.createElement(
        "div",
        {
          id: "whitesevSuspensionId",
          className: "whitesevSuspension",
          innerHTML: (
            /*html*/
            `
					<style type="text/css">
						/* 动态生成z-index */
						#whitesevSuspensionId{
							z-index: ${suspendedZIndex};;
						}

						${indexCSS$2}

					</style>
					<div class="whitesevSuspensionMain">
					<div class="whitesevSuspensionFloor">
						<div class="netdisk"></div>
					</div>
					</div>
                `
          )
        },
        {
          style: `
                    width: ${NetDiskGlobalData.suspension.size.value}px;
                    height: ${NetDiskGlobalData.suspension.size.value}px;
                    opacity: ${NetDiskGlobalData.suspension.opacity.value}
                `
        }
      );
      $shadowRoot.appendChild(this.suspensionNode);
      document.body.appendChild($shadowContainer);
    },
    /**
     * 设置 悬浮按钮所有事件
     */
    setSuspensionEvent() {
      let needDragElement = NetDiskUI.suspension.suspensionNode;
      let dragNode = new AnyTouch(needDragElement);
      let netDiskLinkViewTimer = void 0;
      let moveFlag = false;
      let isDouble = false;
      let clickElementLeftOffset = 0;
      let clickElementTopOffset = 0;
      dragNode.on("pan", function(event) {
        if (!moveFlag) {
          moveFlag = true;
          let rect = needDragElement.getBoundingClientRect();
          clickElementLeftOffset = event.x - rect.left;
          clickElementTopOffset = event.y - rect.top;
          DOMUtils.css(needDragElement, {
            cursor: "move",
            transition: "none"
          });
        }
        if (event.phase === "move") {
          let maxLeftOffset = DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
          let maxTopOffset = DOMUtils.height(window) - NetDiskGlobalData.suspension.size.value;
          let currentSuspensionLeftOffset = event.x - clickElementLeftOffset;
          let currentSuspensionTopOffset = event.y - clickElementTopOffset;
          currentSuspensionLeftOffset = currentSuspensionLeftOffset > maxLeftOffset ? maxLeftOffset : currentSuspensionLeftOffset;
          currentSuspensionTopOffset = currentSuspensionTopOffset > maxTopOffset ? maxTopOffset : currentSuspensionTopOffset;
          currentSuspensionLeftOffset = currentSuspensionLeftOffset < 0 ? 0 : currentSuspensionLeftOffset;
          currentSuspensionTopOffset = currentSuspensionTopOffset < 0 ? 0 : currentSuspensionTopOffset;
          NetDiskSuspension.saveSuspensionPosition({
            x: currentSuspensionLeftOffset,
            y: currentSuspensionTopOffset
          });
          DOMUtils.css(needDragElement, {
            left: currentSuspensionLeftOffset + "px",
            top: currentSuspensionTopOffset + "px"
          });
        }
        if (event.phase === "end") {
          moveFlag = false;
          DOMUtils.css(needDragElement, {
            cursor: "auto"
          });
          let currentSuspensionLeftOffset = parseInt(
            DOMUtils.css(needDragElement, "left")
          );
          if (NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].value) {
            let setCSSLeft = 0;
            if (currentSuspensionLeftOffset >= DOMUtils.width(window) / 2) {
              setCSSLeft = DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
              if (NetDiskUI.suspension.isTopWindow()) {
                NetDiskSuspensionConfig.position.isRight.value = true;
              }
            } else {
              if (NetDiskUI.suspension.isTopWindow()) {
                NetDiskSuspensionConfig.position.isRight.value = false;
              }
            }
            NetDiskSuspension.saveSuspensionPosition({
              x: setCSSLeft
            });
            DOMUtils.css(needDragElement, {
              left: setCSSLeft + "px"
            });
          }
          DOMUtils.css(needDragElement, {
            transition: "left 300ms ease 0s"
          });
        }
      });
      dragNode.on("tap", function(event) {
        clearTimeout(netDiskLinkViewTimer);
        netDiskLinkViewTimer = void 0;
        if (isDouble) {
          isDouble = false;
          NetDiskGlobalSettingView.show();
        } else {
          netDiskLinkViewTimer = setTimeout(() => {
            isDouble = false;
            if (NetDiskGlobalData.features["netdisk-behavior-mode"].value.includes(
              "smallwindow"
            )) {
              NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value = "smallwindow";
              NetDiskUI.suspension.hideSuspension();
            }
            NetDiskUI.view.show();
          }, 200);
          isDouble = true;
        }
      });
      NetDiskUI.setGlobalRightClickMenu(needDragElement);
    },
    /**
     * 保存悬浮按钮位置
     * @param position
     */
    saveSuspensionPosition(position) {
      if (!NetDiskUI.suspension.isTopWindow()) {
        return;
      }
      if (position == null) {
        return;
      }
      if (typeof position.x === "number") {
        NetDiskSuspensionConfig.position.suspensionX.value = position.x;
      }
      if (typeof position.y === "number") {
        NetDiskSuspensionConfig.position.suspensionY.value = position.y;
      }
      NetDiskSuspensionConfig.position.suspensionMaxX.value = NetDiskSuspensionConfig.position.suspensionMaxX.default;
      NetDiskSuspensionConfig.position.suspensionMaxY.value = NetDiskSuspensionConfig.position.suspensionMaxY.default;
    },
    /**
     * 设置window的resize事件监听，来重新设置悬浮按钮的位置
     */
    setResizeEventListener() {
      DOMUtils.on(globalThis, "resize", void 0, () => {
        let activeElement = document.activeElement;
        if (utils.isPhone()) {
          if (["input", "textarea"].includes(activeElement.localName)) {
            return;
          } else if (activeElement.hasAttribute("contenteditable") && activeElement.getAttribute("contenteditable") === "true" || activeElement.closest("[contenteditable='true']")) {
            return;
          } else if (!document.hasFocus()) {
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
      const MAX_X = DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
      const MAX_Y = DOMUtils.height(window) - NetDiskGlobalData.suspension.size.value;
      const LAST_MAX_X = NetDiskSuspensionConfig.position.suspensionMaxX.value;
      const LAST_MAX_Y = NetDiskSuspensionConfig.position.suspensionMaxY.value;
      NetDiskSuspensionConfig.position.suspensionMaxX.default = MAX_X;
      NetDiskSuspensionConfig.position.suspensionMaxY.default = MAX_Y;
      let suspension_X = NetDiskSuspensionConfig.position.suspensionX.value;
      let suspension_Y = NetDiskSuspensionConfig.position.suspensionY.value;
      if (MAX_X !== LAST_MAX_X) {
        let percent_X = suspension_X / LAST_MAX_X;
        let recalculate_suspension_X = MAX_X * percent_X;
        suspension_X = recalculate_suspension_X;
      }
      if (MAX_Y !== LAST_MAX_Y) {
        let percent_Y = suspension_Y / LAST_MAX_Y;
        let recalculate_suspension_Y = MAX_Y * percent_Y;
        suspension_Y = recalculate_suspension_Y;
      }
      if (suspension_X > MAX_X) {
        suspension_X = MAX_X;
      } else if (suspension_X < 0) {
        suspension_X = 0;
      }
      if (suspension_Y > MAX_Y) {
        suspension_Y = MAX_Y;
      } else if (suspension_Y < 0) {
        suspension_Y = 0;
      }
      if (NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].value) {
        if (NetDiskSuspensionConfig.position.isRight.value) {
          suspension_X = MAX_X;
        } else {
          suspension_X = 0;
        }
      }
      NetDiskSuspension.saveSuspensionPosition({
        x: suspension_X,
        y: suspension_Y
      });
      DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
        left: suspension_X + "px",
        top: suspension_Y + "px"
      });
    },
    /**
     * 悬浮按钮背景轮播 效果为淡入淡出
     */
    backgroundSwitch() {
      if (this.isRandBg) {
        return;
      }
      function getRandBgList() {
        let resultList = [];
        NetDiskUI.isMatchedNetDiskIconMap.forEach((item) => {
          resultList = [...resultList, NetDiskUI.src.icon[item]];
        });
        return resultList;
      }
      function startSwitch(fadeTime, currentBackgroundSrc) {
        currentList = getRandBgList();
        DOMUtils.fadeOut(randBgNode, fadeTime, function() {
          currentIndex++;
          currentIndex = currentIndex < currentList.length ? currentIndex : 0;
          currentBackgroundSrc = currentList[currentIndex];
          DOMUtils.css(randBgNode, {
            "background-image": `url(${currentBackgroundSrc})`
          });
          DOMUtils.fadeIn(randBgNode, fadeTime, function() {
            setTimeout(() => {
              startSwitch(
                parseInt(
                  NetDiskGlobalData.suspension["randbg-time"].value.toString()
                ),
                currentBackgroundSrc
              );
            }, parseInt(NetDiskGlobalData.suspension["randbg-show-time"].value.toString()));
          });
        });
      }
      let currentList = [];
      let currentIndex = 0;
      currentList = getRandBgList();
      let randBgSrc = currentList[currentIndex];
      let randBgNode = NetDiskUI.suspension.suspensionNode.querySelector(
        ".whitesevSuspension .netdisk"
      );
      DOMUtils.css(randBgNode, {
        "background-image": `url(${randBgSrc})`
      });
      if (currentList.length < 2 || NetDiskGlobalData.suspension["randbg-time"].value <= 0) {
        return;
      }
      this.isRandBg = true;
      startSwitch(
        parseInt(
          NetDiskGlobalData.suspension["randbg-time"].value.toString().toString()
        ),
        randBgSrc
      );
    }
  };
  const indexCSS$1 = ".pops-folder-list .list-name-text {\r\n	max-width: 300px;\r\n}\r\n.netdisk-static-link-onefile .pops-folder-list .list-name-text {\r\n	max-width: 220px;\r\n}\r\n.netdisk-static-link-onefile\r\n	.pops-mobile-folder-content\r\n	.pops-folder-list\r\n	.list-name-text {\r\n	max-width: unset;\r\n}\r\n";
  const NetDiskLinearChainDialogView = {
    /**
     * 单文件直链弹窗
     * @param fileDetails 配置
     */
    oneFile(fileDetails) {
      log.success("成功获取单文件直链", fileDetails);
      NetDiskPops.folder(
        {
          title: {
            text: fileDetails.title
          },
          folder: [
            {
              fileName: fileDetails.fileName,
              fileSize: fileDetails.fileSize,
              fileType: fileDetails.fileType ?? "",
              // @ts-ignore
              createTime: fileDetails.fileUploadTime || fileDetails.fileLatestTime,
              // @ts-ignore
              latestTime: fileDetails.fileLatestTime || fileDetails.fileUploadTime,
              isFolder: false,
              index: 0,
              async clickEvent() {
                if (typeof fileDetails.clickCallBack === "function") {
                  fileDetails.clickCallBack(fileDetails);
                } else {
                  return {
                    autoDownload: true,
                    mode: "aBlank",
                    url: fileDetails.downloadUrl
                  };
                }
              }
            }
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
              }
            }
          },
          class: "netdisk-static-link-onefile",
          style: indexCSS$1
        },
        NetDiskUI.popsStyle.oneFileStaticView
      );
    },
    /**
     * 多文件直链弹窗
     * @param title 标题
     * @param folderInfoList文件夹信息
     */
    moreFile(title, folderInfoList = []) {
      log.success("文件解析信息", folderInfoList);
      NetDiskPops.folder(
        {
          title: {
            text: title
          },
          folder: folderInfoList,
          btn: {
            ok: {
              enable: false
            },
            cancel: {
              enable: true
            }
          },
          style: indexCSS$1
        },
        NetDiskUI.popsStyle.moreFileStaticView
      );
    }
  };
  const NetDiskNewAccessCodeView = function(title = "密码错误", ruleKeyName = "", ruleIndex, shareCode, accessCode, okCallBack = () => {
  }, closeCallBack) {
    const accessCodeConfirm = NetDiskPops.prompt(
      {
        title: {
          text: title,
          position: "center",
          html: false
        },
        btn: {
          reverse: true,
          position: "end",
          cancel: {
            text: "取消",
            callback(eventDetails, event) {
              accessCodeConfirm.close();
              closeCallBack?.();
            }
          },
          close: {
            callback(details, event) {
              details.close();
              closeCallBack?.();
            }
          },
          ok: {
            callback: (event) => {
              let userInputAccessCode = event.text.replace(/[\s]*/gi, "");
              let uiLink = NetDisk.handleLinkShow({
                ruleKeyName,
                ruleIndex,
                shareCode,
                accessCode: userInputAccessCode
              });
              if (!uiLink) {
                return;
              }
              let currentItemSelector = `.netdisk-url a[data-rule-key='${ruleKeyName}'][data-sharecode='${shareCode}']`;
              let currentHistoryItemSelector = `.netdiskrecord-link a[data-rule-key='${ruleKeyName}'][data-sharecode='${shareCode}']`;
              let currentItemElement = NetDiskUI.Alias.uiLinkAlias?.$shadowRoot?.querySelector(
                currentItemSelector
              );
              let currentHistoryItemElement = NetDiskUI.Alias.historyAlias?.$shadowRoot?.querySelector(
                currentHistoryItemSelector
              );
              if (currentItemElement) {
                currentItemElement.setAttribute(
                  "data-accesscode",
                  userInputAccessCode
                );
                domUtils.html(currentItemElement, uiLink);
              }
              if (currentHistoryItemElement) {
                currentHistoryItemElement.setAttribute(
                  "data-accesscode",
                  userInputAccessCode
                );
                domUtils.html(currentHistoryItemElement, uiLink);
              }
              log.info(`${ruleKeyName} 重新输入的密码：${userInputAccessCode}`);
              let callbackOption = {
                /** 该分享码是否在已匹配的字典中 */
                isFindInMatchedDict: false,
                /** 是否成功同步至已匹配的字典 */
                isUpdatedMatchedDict: false,
                /** 是否成功同步至历史匹配记录 */
                isUpdatedHistoryMatched: false,
                /** 新的访问码 */
                accessCode: userInputAccessCode
              };
              let netDiskDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
              if (netDiskDict.has(shareCode)) {
                callbackOption.isFindInMatchedDict = true;
                callbackOption.isUpdatedMatchedDict = true;
                let currentDict = netDiskDict.get(shareCode);
                netDiskDict.set(
                  shareCode,
                  NetDisk.createLinkStorageInst(
                    userInputAccessCode,
                    ruleIndex,
                    true,
                    currentDict.matchText
                  )
                );
              }
              callbackOption.isUpdatedHistoryMatched = NetDiskHistoryMatchView.syncAccessCode(
                ruleKeyName,
                ruleIndex,
                shareCode,
                userInputAccessCode
              );
              okCallBack(callbackOption);
              event.close();
              closeCallBack?.();
            }
          }
        },
        content: {
          placeholder: "请重新输入密码",
          focus: true,
          select: true,
          text: accessCode == null ? "" : typeof accessCode === "string" ? accessCode : ""
        },
        style: (
          /*css*/
          `
			input{
				font-size: larger;
			}
			`
        )
      },
      NetDiskUI.popsStyle.inputNewAccessCodeView
    );
    domUtils.listenKeyboard(
      accessCodeConfirm.$shadowRoot,
      "keypress",
      (keyName) => {
        if (keyName === "Enter") {
          const $ok = accessCodeConfirm.$shadowRoot.querySelector(
            ".pops-prompt-btn-ok"
          );
          $ok.click();
        }
      }
    );
  };
  const indexCSS = '.pops[type-value="confirm"] .pops-confirm-content {\r\n	overflow: hidden;\r\n}\r\n.netdisk-match-paste-text {\r\n	--textarea-bd-color: #dcdfe6;\r\n	display: inline-block;\r\n	resize: vertical;\r\n	padding: 5px 15px;\r\n	line-height: normal;\r\n	box-sizing: border-box;\r\n	color: #606266;\r\n	border: 1px solid var(--textarea-bd-color);\r\n	border-radius: 4px;\r\n	transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n	outline: none;\r\n	margin: 0;\r\n	-webkit-appearance: none;\r\n	-moz-appearance: none;\r\n	appearance: none;\r\n	background: none;\r\n	width: 100%;\r\n	height: 100%;\r\n	appearance: none;\r\n	resize: none;\r\n}\r\n.netdisk-match-paste-text:hover {\r\n	--textarea-bd-color: #c0c4cc;\r\n}\r\n.netdisk-match-paste-text:focus {\r\n	--textarea-bd-color: #3677f0;\r\n}\r\n';
  const NetDiskMatchPasteText = {
    show() {
      let popsConfirm = NetDiskPops.confirm(
        {
          title: {
            text: "主动识别文本",
            position: "center"
          },
          content: {
            text: (
              /*html*/
              `
                    <textarea class="netdisk-match-paste-text"></textarea>
                    `
            ),
            html: true
          },
          btn: {
            ok: {
              text: "识别",
              callback() {
                let inputText = popsConfirm.popsElement?.querySelector(
                  ".netdisk-match-paste-text"
                )?.value || "";
                if (inputText.trim() !== "") {
                  inputText = NetDiskRuleUtils.replaceChinese(inputText);
                  NetDiskWorker.postMessage({
                    characterMapping: [
                      // 删除中文
                      {
                        searchValue: /[\u4e00-\u9fa5]/g,
                        replaceValue: ""
                      }
                    ],
                    textList: [inputText],
                    matchTextRange: NetDiskGlobalData.match.pageMatchRange.value,
                    // 剪贴板匹配的话直接使用全部规则来进行匹配
                    matchedRuleOption: NetDisk.$rule.ruleOption,
                    startTime: Date.now(),
                    from: "PasteText"
                  });
                }
              }
            }
          },
          class: "whitesevPopNetDiskMatchPasteText",
          style: indexCSS
        },
        NetDiskUI.popsStyle.matchPasteTextView
      );
      popsConfirm.popsElement.querySelector("textarea").focus();
    },
    /**
     * Worker匹配完毕后执行的回调函数
     * @param data
     */
    workerMatchEndCallBack(data) {
      if (data.data.length) {
        Qmsg.success(
          `成功匹配${data.data.length}个，用时${Date.now() - data.startTime}ms`
        );
      } else {
        Qmsg.error("未识别到链接");
      }
    }
  };
  const NetDiskUI = {
    /** 元素对象实例 */
    Alias: {
      /**
       * 链接弹窗的对象
       */
      uiLinkAlias: void 0,
      /**
       * 历史匹配记录弹窗的对象
       */
      historyAlias: void 0,
      /**
       * 设置弹窗的对象
       */
      settingAlias: void 0
    },
    /**
     * 已匹配到的网盘图标字典
     */
    isMatchedNetDiskIconMap: /* @__PURE__ */ new Set(),
    /**
     * 是否默认禁用弹窗弹出后背景可以滚动
     */
    defaultForbiddenScroll: false,
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
    popsStyle: NetDiskUISizeConfig,
    src: {
      /**
       * 图标RESOURCE_ICON
       * 从图标库中引入并覆盖
       */
      icon: {},
      /**
       * 判断图标字典中是否存在该键
       * @param iconKey
       */
      hasIcon(iconKey) {
        return Reflect.has(this.icon, iconKey);
      },
      /**
       * 添加图标数据
       * @param iconKey
       * @param iconValue
       */
      addIcon(iconKey, iconValue) {
        if (this.hasIcon(iconKey)) {
          log.warn("图标字典中已存在该icon：" + iconKey);
          return false;
        } else {
          return Reflect.set(this.icon, iconKey, iconValue);
        }
      }
    },
    /**
     * 悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮
     */
    suspension: NetDiskSuspension,
    /**
     * 主视图
     */
    view: NetDiskView,
    /**
     * 显示直链的弹窗
     */
    staticView: NetDiskLinearChainDialogView,
    /**
     * 需要重新输入新密码的弹窗
     */
    newAccessCodeView: NetDiskNewAccessCodeView,
    /**
     * 网盘历史匹配到的记录弹窗
     */
    netDiskHistoryMatch: NetDiskHistoryMatchView,
    /**
     * 主动识别文本
     */
    matchPasteText: NetDiskMatchPasteText,
    /**
     * 设置标题的右键菜单
     * @param element
     */
    setGlobalRightClickMenu(element) {
      NetDiskUI.view.registerContextMenu(element, void 0, [
        {
          text: "设置",
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskGlobalSettingView.show();
          }
        },
        {
          text: "历史匹配记录",
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskUI.netDiskHistoryMatch.show();
          }
        },
        {
          text: "添加链接识别规则",
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskUserRuleUI.show(false);
          }
        },
        {
          text: "规则管理器",
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskRuleManager.showView();
          }
        },
        {
          text: "主动识别文本",
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskUI.matchPasteText.show();
          }
        }
      ]);
    },
    /**
     * 设置右键菜单
     * @param target
     * @param selector
     * @param isHistoryView 是否是历史界面的
     */
    setRightClickMenu(target, selector, isHistoryView) {
      let showTextList = [
        {
          text: "链接",
          icon: (
            /*html*/
            `
					<svg
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M563.2 672c-6.4-6.4 0 0 0 0L448 793.6c-57.6 57.6-153.6 57.6-211.2 0-57.6-57.6-64-147.2 0-211.2l121.6-121.6-6.4-6.4-38.4-32-6.4-6.4-121.6 121.6C108.8 614.4 108.8 755.2 192 832s217.6 83.2 300.8 0l121.6-121.6-6.4-6.4-44.8-32z m38.4-294.4c6.4 0 6.4 0 0 0l38.4 38.4 6.4 6.4-230.4 230.4-38.4-51.2 224-224zM531.2 192c83.2-83.2 217.6-83.2 300.8 0 83.2 83.2 83.2 217.6 0 300.8l-121.6 121.6-44.8-44.8 128-128c44.8-44.8 51.2-147.2-6.4-204.8-57.6-57.6-160-57.6-204.8-6.4l-128 128v-6.4l-38.4-38.4-6.4-6.4L531.2 192z">
						</path>
					</svg>

				`
          ),
          callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
            return false;
          },
          item: [
            {
              text: "复制",
              icon: "documentCopy",
              callback: function(event, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskView.praseElementAttributeRuleInfo($link);
                NetDiskLinkClickMode.copy(
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode
                );
              }
            },
            {
              text: "打开",
              icon: (
                /*html*/
                `
						<svg
							class="icon"
							viewBox="0 0 1024 1024"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M892 928.1H134c-19.9 0-36-16.1-36-36v-758c0-19.9 16.1-36 36-36h314.1c19.9 0 36 16.1 36 36s-16.1 36-36 36H170v686h686V579.6c0-19.9 16.1-36 36-36s36 16.1 36 36v312.5c0 19.9-16.1 36-36 36z"></path>
							<path
								d="M927.9 131.6v-0.5c-0.1-1.7-0.4-3.3-0.7-4.9 0-0.1 0-0.2-0.1-0.3-0.4-1.7-0.9-3.3-1.5-4.9v-0.1c-0.6-1.6-1.4-3.1-2.2-4.6 0-0.1-0.1-0.1-0.1-0.2-0.8-1.4-1.7-2.8-2.7-4.1-0.1-0.1-0.2-0.3-0.3-0.4-0.5-0.6-0.9-1.1-1.4-1.7 0-0.1-0.1-0.1-0.1-0.2-0.5-0.6-1-1.1-1.6-1.6l-0.4-0.4c-0.5-0.5-1.1-1-1.6-1.5l-0.1-0.1c-0.6-0.5-1.2-1-1.9-1.4-0.1-0.1-0.3-0.2-0.4-0.3-1.4-1-2.8-1.8-4.3-2.6l-0.1-0.1c-1.6-0.8-3.2-1.5-4.9-2-1.6-0.5-3.3-1-5-1.2-0.1 0-0.2 0-0.3-0.1l-2.4-0.3h-0.3c-0.7-0.1-1.3-0.1-2-0.1H640.1c-19.9 0-36 16.1-36 36s16.1 36 36 36h165L487.6 487.6c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5 9.2 0 18.4-3.5 25.5-10.5L856 221v162.8c0 19.9 16.1 36 36 36s36-16.1 36-36V134.1c0-0.8 0-1.7-0.1-2.5z"></path>
						</svg>
						`
              ),
              callback: function(event, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskView.praseElementAttributeRuleInfo($link);
                let url = NetDiskLinkClickModeUtils.getBlankUrl({
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode
                });
                NetDiskLinkClickMode.openBlankUrl(
                  url,
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode
                );
              }
            },
            {
              text: "后台打开",
              icon: (
                /*html*/
                `
						<svg
							class="icon"
							viewBox="0 0 1024 1024"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M892 928.1H134c-19.9 0-36-16.1-36-36v-758c0-19.9 16.1-36 36-36h314.1c19.9 0 36 16.1 36 36s-16.1 36-36 36H170v686h686V579.6c0-19.9 16.1-36 36-36s36 16.1 36 36v312.5c0 19.9-16.1 36-36 36z"></path>
							<path
								d="M927.9 131.6v-0.5c-0.1-1.7-0.4-3.3-0.7-4.9 0-0.1 0-0.2-0.1-0.3-0.4-1.7-0.9-3.3-1.5-4.9v-0.1c-0.6-1.6-1.4-3.1-2.2-4.6 0-0.1-0.1-0.1-0.1-0.2-0.8-1.4-1.7-2.8-2.7-4.1-0.1-0.1-0.2-0.3-0.3-0.4-0.5-0.6-0.9-1.1-1.4-1.7 0-0.1-0.1-0.1-0.1-0.2-0.5-0.6-1-1.1-1.6-1.6l-0.4-0.4c-0.5-0.5-1.1-1-1.6-1.5l-0.1-0.1c-0.6-0.5-1.2-1-1.9-1.4-0.1-0.1-0.3-0.2-0.4-0.3-1.4-1-2.8-1.8-4.3-2.6l-0.1-0.1c-1.6-0.8-3.2-1.5-4.9-2-1.6-0.5-3.3-1-5-1.2-0.1 0-0.2 0-0.3-0.1l-2.4-0.3h-0.3c-0.7-0.1-1.3-0.1-2-0.1H640.1c-19.9 0-36 16.1-36 36s16.1 36 36 36h165L487.6 487.6c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5 9.2 0 18.4-3.5 25.5-10.5L856 221v162.8c0 19.9 16.1 36 36 36s36-16.1 36-36V134.1c0-0.8 0-1.7-0.1-2.5z"></path>
						</svg>
						`
              ),
              callback: function(event, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskView.praseElementAttributeRuleInfo($link);
                let url = NetDiskLinkClickModeUtils.getBlankUrl({
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode
                });
                NetDiskLinkClickMode.openBlankUrl(
                  url,
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode,
                  true
                );
              }
            }
          ]
        },
        {
          text: "密码",
          icon: (
            /*html*/
            `
					<svg
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M288 384v-74.666667c0-123.722667 100.266667-224 224-224s224 100.224 224 224v74.666667h10.677333C811.445333 384 864 436.597333 864 501.333333v320c0 64.821333-52.469333 117.333333-117.322667 117.333334H277.333333C212.554667 938.666667 160 886.069333 160 821.333333V501.333333c0-64.821333 52.469333-117.333333 117.322667-117.333333H288z m64 0h320v-74.666667c0-88.426667-71.605333-160-160-160-88.384 0-160 71.626667-160 160v74.666667zM224 501.333333v320c0 29.397333 23.914667 53.333333 53.322667 53.333334H746.666667A53.269333 53.269333 0 0 0 800 821.333333V501.333333c0-29.397333-23.914667-53.333333-53.322667-53.333333H277.333333A53.269333 53.269333 0 0 0 224 501.333333z">
						</path>
					</svg>
				`
          ),
          callback: function(event, contextMenuEvent, liElement) {
            return false;
          },
          item: [
            {
              text: "复制",
              icon: "documentCopy",
              callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskView.praseElementAttributeRuleInfo($link);
                if (accessCode == null || typeof accessCode === "string" && accessCode.trim() === "") {
                  Qmsg.warning("无访问码");
                  return;
                }
                utils.setClip(accessCode).then((status) => {
                  if (status) {
                    Qmsg.success("已复制");
                  } else {
                    Qmsg.error("执行复制失败", { consoleLogContent: true });
                  }
                }).catch(() => {
                  Qmsg.error("执行复制失败", { consoleLogContent: true });
                });
              }
            },
            {
              text: "修改",
              icon: `edit`,
              callback: function(event, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskView.praseElementAttributeRuleInfo($link);
                NetDiskUI.newAccessCodeView(
                  this.text,
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode,
                  (option) => {
                    if (isHistoryView) {
                      if (option.isUpdatedMatchedDict) {
                        let currentTime = (/* @__PURE__ */ new Date()).getTime();
                        let $updateTime = $link.closest("li").querySelector(
                          ".netdiskrecord-update-time"
                        );
                        DOMUtils.text($updateTime, utils.formatTime(currentTime));
                        DOMUtils.attr(
                          $link,
                          "data-accesscode",
                          option.accessCode
                        );
                        Qmsg.success(
                          /*html*/
                          `
										<div style="text-align: left;">旧: ${accessCode}</div>
										<div style="text-align: left;">新: ${option.accessCode}</div>`,
                          {
                            html: true
                          }
                        );
                      } else {
                        Qmsg.error("修改失败");
                      }
                    } else {
                      DOMUtils.attr($link, "data-accesscode", option.accessCode);
                      if (option.isUpdatedMatchedDict) {
                        Qmsg.success(
                          /*html*/
                          `
										<div style="text-align: left;">旧: ${accessCode}</div>
										<div style="text-align: left;">新: ${option.accessCode}</div>`,
                          {
                            html: true
                          }
                        );
                      } else {
                        if (option.isFindInMatchedDict) {
                          Qmsg.error("修改访问码失败");
                        } else {
                          Qmsg.error(
                            "修改访问码失败，因为当前已匹配字典中未找到对应的访问码"
                          );
                        }
                      }
                    }
                  }
                );
              }
            }
          ]
        },
        {
          text: "其它",
          icon: (
            /*html*/
            `
				<svg
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M826.92 857.397H197.08c-33.667 0-60.953-27.287-60.953-60.953V349.46c0-33.666 27.286-60.952 60.952-60.952h121.905v-60.952c0-33.666 27.286-60.953 60.953-60.953h243.809c33.666 0 60.952 27.287 60.952 60.953v60.952H826.921c33.666 0 60.952 27.286 60.952 60.952v446.984c0 33.666-27.286 60.953-60.952 60.953zM644.064 247.873c0-22.43-18.204-40.635-40.634-40.635H400.254c-22.43 0-40.635 18.205-40.635 40.635v40.635h284.444v-40.635z m203.175 121.905c0-22.43-18.204-40.635-40.635-40.635H217.397c-22.43 0-40.635 18.204-40.635 40.635v162.54h304.762v-50.794c0-16.823 13.653-30.476 30.476-30.476s30.476 13.653 30.476 30.476v50.793h304.762v-162.54z m0 203.174H542.476v10.16c0 16.842-13.653 30.475-30.476 30.475s-30.476-13.633-30.476-30.476v-10.159H176.762v203.175c0 22.43 18.204 40.635 40.635 40.635h589.206c22.43 0 40.635-18.205 40.635-40.635V572.952z">
					</path>
				</svg>
	
				`
          ),
          callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
            return false;
          },
          item: [
            {
              text: "复制全部",
              icon: "documentCopy",
              callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                let $boxAll = $link.closest(".netdisk-url-box-all");
                let copyTextList = [];
                $boxAll.querySelectorAll(selector).forEach(($linkItem) => {
                  const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskView.praseElementAttributeRuleInfo($linkItem);
                  let copyUrlText = NetDiskLinkClickModeUtils.getCopyUrlInfo({
                    ruleKeyName,
                    ruleIndex,
                    shareCode,
                    accessCode
                  });
                  copyTextList.push(copyUrlText);
                });
                utils.setClip(copyTextList.join("\n")).then((status) => {
                  if (status) {
                    Qmsg.success("成功复制全部");
                  } else {
                    Qmsg.error("复制全部失败");
                  }
                }).catch(() => {
                  Qmsg.error("复制全部失败");
                });
              }
            }
          ]
        }
      ];
      if (!isHistoryView) {
        showTextList[2].item.push(
          {
            text: "删除当前",
            icon: "delete",
            callback: function(event, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              let $box = $link.closest(".netdisk-url-box");
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskView.praseElementAttributeRuleInfo($link);
              let flag = false;
              NetDisk.$match.matchedInfo.forEach(
                (netDiskItem, netDiskKeyName) => {
                  if (netDiskKeyName !== ruleKeyName) {
                    return;
                  }
                  netDiskItem.forEach((matchedInfo, matchedShareCode) => {
                    if (matchedShareCode === shareCode) {
                      flag = true;
                      netDiskItem.delete(matchedShareCode);
                      log.info(
                        `删除：`,
                        netDiskKeyName,
                        JSON.stringify(matchedInfo)
                      );
                    }
                  });
                }
              );
              NetDisk.$match.matchedInfoRuleKey.clear();
              NetDisk.$match.matchedInfo.forEach(
                (netDiskItem, netDiskKeyName) => {
                  if (netDiskItem.length) {
                    NetDisk.$match.matchedInfoRuleKey.add(netDiskKeyName);
                  }
                }
              );
              if (flag) {
                $box.remove();
              } else {
                Qmsg.error("发生意外情况，未在已匹配到的信息中到对应的网盘信息");
              }
            }
          },
          {
            text: "删除所有",
            icon: "delete",
            callback: function(event, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              let $boxAll = $link.closest(".netdisk-url-box-all");
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskView.praseElementAttributeRuleInfo($link);
              NetDisk.$match.matchedInfo.forEach(
                (netDiskItem, netDiskKeyName) => {
                  netDiskItem.clear();
                }
              );
              NetDisk.$match.matchedInfoRuleKey.clear();
              DOMUtils.html($boxAll, "");
            }
          }
        );
      }
      NetDiskUI.view.registerContextMenu(target, selector, showTextList);
    }
  };
  const panelSettingCSS = "/* 容器 */\r\n.website-rule-container {\r\n}\r\n/* 每一条规则 */\r\n.website-rule-item {\r\n	display: flex;\r\n	align-items: center;\r\n	line-height: normal;\r\n	font-size: 16px;\r\n	padding: 4px 4px;\r\n	gap: 6px;\r\n}\r\n/* 规则名 */\r\n.website-rule-item .website-rule-name {\r\n	flex: 1;\r\n	white-space: nowrap;\r\n	text-overflow: ellipsis;\r\n	overflow: hidden;\r\n}\r\n/* 操作按钮 */\r\n.website-rule-item .website-controls {\r\n	display: flex;\r\n	align-items: center;\r\n	text-overflow: ellipsis;\r\n	overflow: hidden;\r\n	white-space: nowrap;\r\n	gap: 8px;\r\n	padding: 0px 4px;\r\n}\r\n/* 编辑和删除按钮 */\r\n.website-rule-item .website-rule-edit,\r\n.website-rule-item .website-rule-delete {\r\n	width: 16px;\r\n	height: 16px;\r\n	cursor: pointer;\r\n}\r\n/* 启用按钮 */\r\n.website-rule-item .website-rule-enable {\r\n}\r\n/* 编辑按钮 */\r\n.website-rule-item .website-rule-edit {\r\n}\r\n/* 删除按钮 */\r\n.website-rule-item .website-rule-delete {\r\n}\r\n";
  function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }
  const WebsiteRuleStorageApi = new StorageUtils("websiteRule");
  const WebsiteRule = {
    $data: {
      STORAGE_KEY: "rule",
      EXPORT_CONFIG_KEY: "rule-export-config",
      /** 是否正在显示编辑视图 */
      isShowEditView: false
    },
    init() {
    },
    /**
     * 获取默认数据
     */
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        subscribeUUID: null,
        enable: true,
        name: "",
        url: "",
        data: {}
      };
    },
    /**
     * 获取规则面板视图的配置
     * @param quickAddData 用于快速添加数据
     */
    getRulePanelViewOption(quickAddData) {
      const that = this;
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
      let addData = () => {
        return quickAddData ?? this.getTemplateData();
      };
      let generateStorageApi = function(data) {
        return {
          get(key, defaultValue) {
            return data[key] ?? defaultValue;
          },
          set(key, value) {
            data[key] = value;
          }
        };
      };
      let rulePanelViewOption = {
        id: "website-rule",
        title: "网站规则",
        subscribe: {
          enable: true,
          data() {
            return WebsiteSubscribeRule.getAllSubscribe();
          },
          getData: (data) => {
            let findValue = WebsiteSubscribeRule.getSubscribe(data.uuid);
            return findValue ?? data;
          },
          getDataItemName(subscribeOption) {
            return (
              /*html*/
              `
						<style>
							.subscribe-rule-title-info-wrapper{
								display: flex;
								flex-direction: column;
								gap: 4px;
							}
							.subscribe-rule-title-info-wrapper .rule-name-text{
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-weight: 600;
								font-size: 16px;
								line-height: 24px;
							}
							.subscribe-rule-title-info-wrapper .subscribe-rule-small-span-text{
								font-size: 14px;
								line-height: 16px;
								white-space: pre-wrap;
							}
						</style>
						<div class="subscribe-rule-title-info-wrapper">
							<div class="rule-name-text" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 16px;font-weight: 600;line-height: 24px;">${subscribeOption.data.title || subscribeOption.subscribeData.title || subscribeOption.data.url}</div>
								<div class="subscribe-rule-small-span-text">${subscribeOption.subscribeData.ruleData.length} 条规则，更新于：${utils.formatTime(
              subscribeOption.data.latestUpdateTime,
              "yyyy年MM月dd日 HH:mm:ss"
            )}${typeof subscribeOption.data.updateFailedTime === "number" ? `，<span style="color: red;">更新失败于：${utils.formatTime(
              subscribeOption.data.updateFailedTime,
              "yyyy年MM月dd日 HH:mm:ss"
            )}</span>` : ``}</div>
								${subscribeOption.subscribeData.homePage ? `<a href="${subscribeOption.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${subscribeOption.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`
            );
          },
          addData: (data) => {
            return WebsiteSubscribeRule.addSubscribe(data);
          },
          updateData: (data) => {
            return WebsiteSubscribeRule.updateSubscribe(data);
          },
          deleteData: (data) => {
            return WebsiteSubscribeRule.deleteSubscribe(data);
          },
          btnControls: {
            add: {
              enable: true
            },
            filter: {
              enable: true,
              title: "过滤订阅",
              option: [
                {
                  name: "过滤【已启用】的订阅",
                  filterCallBack(data) {
                    return data.data.enable;
                  }
                },
                {
                  name: "过滤【未启用】的订阅",
                  filterCallBack(data) {
                    return !data.data.enable;
                  }
                }
              ]
            },
            clearAll: {
              enable: true,
              callback: () => {
                WebsiteSubscribeRule.deleteAllSubscribe();
              }
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.data.enable;
              },
              async callback(data, enable) {
                data.data.enable = enable;
                WebsiteSubscribeRule.updateSubscribe(data);
              }
            },
            ruleEdit: {
              enable: true,
              callback: (option) => {
                let subscribeUUID = option.ruleData.uuid;
                option.enterDeepMenu({
                  headerTitle: (
                    // 自己重新命名的
                    option.ruleData.data.title || // 订阅的规则自带的
                    option.ruleData.subscribeData.title || // 订阅的链接
                    option.ruleData.data.url
                  ),
                  data() {
                    let currentData = WebsiteSubscribeRule.getSubscribe(subscribeUUID);
                    return currentData?.subscribeData?.ruleData ?? option.ruleData.subscribeData.ruleData;
                  },
                  getData(data) {
                    let currentData = WebsiteSubscribeRule.getSubscribeRule(
                      subscribeUUID,
                      data.uuid
                    );
                    return currentData ?? data;
                  },
                  getDataItemName(data) {
                    return data.name ?? data.url;
                  },
                  addData(data) {
                    return true;
                  },
                  updateData(data) {
                    return WebsiteSubscribeRule.updateSubscribeRule(
                      subscribeUUID,
                      data
                    );
                  },
                  deleteData(data) {
                    return WebsiteSubscribeRule.deleteSubscribeRule(
                      subscribeUUID,
                      data
                    );
                  },
                  btnControls: {
                    filter: {
                      enable: true,
                      option: [
                        {
                          name: "过滤【已启用】的规则",
                          filterCallBack(data) {
                            return data.data.enable;
                          }
                        },
                        {
                          name: "过滤【未启用】的规则",
                          filterCallBack(data) {
                            return !data.data.enable;
                          }
                        }
                      ]
                    },
                    clearAll: {
                      enable: true,
                      callback: () => {
                        WebsiteSubscribeRule.clearSubscribe(subscribeUUID);
                      }
                    },
                    ruleEnable: {
                      enable: true,
                      getEnable(data) {
                        return data.enable;
                      },
                      callback(data, enable) {
                        data.data.enable = enable;
                        WebsiteSubscribeRule.updateSubscribeRule(
                          subscribeUUID,
                          data
                        );
                      }
                    },
                    ruleEdit: {
                      enable: true,
                      getView: (data, isEdit) => {
                        that.$data.isShowEditView = true;
                        if (!isEdit) {
                          data = addData();
                        }
                        function generateSubscribeRuleStorageApi(uuid) {
                          return {
                            get(key, defaultValue) {
                              let currentRule = WebsiteSubscribeRule.getSubscribeRule(
                                subscribeUUID,
                                uuid
                              );
                              return Reflect.get(currentRule.data, key) ?? defaultValue;
                            },
                            set(key, value) {
                              let currentRule = WebsiteSubscribeRule.getSubscribeRule(
                                subscribeUUID,
                                uuid
                              );
                              Reflect.set(currentRule.data, key, value);
                              WebsiteSubscribeRule.updateSubscribeRule(
                                subscribeUUID,
                                currentRule
                              );
                            }
                          };
                        }
                        let $fragment = document.createDocumentFragment();
                        let enable_template = UISwitch("启用", "enable", true);
                        Reflect.set(
                          enable_template.props,
                          PROPS_STORAGE_API,
                          generateStorageApi(data)
                        );
                        let $enable = panelHandlerComponents.createSectionContainerItem_switch(
                          enable_template
                        );
                        let name_template = UIInput(
                          "规则名称",
                          "name",
                          "",
                          "",
                          void 0,
                          "必填"
                        );
                        Reflect.set(
                          name_template.props,
                          PROPS_STORAGE_API,
                          generateStorageApi(data)
                        );
                        let $name = panelHandlerComponents.createSectionContainerItem_input(
                          name_template
                        );
                        let url_template = UIInput(
                          "匹配网址",
                          "url",
                          "",
                          "",
                          void 0,
                          "必填，可正则"
                        );
                        Reflect.set(
                          url_template.props,
                          PROPS_STORAGE_API,
                          generateStorageApi(data)
                        );
                        let $data_url = panelHandlerComponents.createSectionContainerItem_input(
                          url_template
                        );
                        let coverSetting_template = UIButton(
                          "覆盖设置",
                          "",
                          "自定义",
                          void 0,
                          false,
                          false,
                          "primary",
                          (event) => {
                            utils.preventEvent(event);
                            let originPanelContentConfig = [
                              ...PanelContent.getConfig(0),
                              ...NetDiskRule.getRulePanelContent()
                            ];
                            let newPanelContentConfig = deepCopy(
                              originPanelContentConfig
                            );
                            function iterativeTraversal(configList) {
                              configList.forEach((configItem) => {
                                if (typeof configItem?.props === "object" && Reflect.has(configItem.props, PROPS_STORAGE_API)) {
                                  let panelStorageApi = generateSubscribeRuleStorageApi(data.uuid);
                                  Reflect.set(
                                    configItem.props,
                                    PROPS_STORAGE_API,
                                    panelStorageApi
                                  );
                                }
                                let childForms = configItem.forms;
                                if (childForms && Array.isArray(childForms)) {
                                  iterativeTraversal(childForms);
                                }
                              });
                            }
                            for (let index = 0; index < newPanelContentConfig.length; index++) {
                              let leftContentConfigItem = newPanelContentConfig[index];
                              if (!leftContentConfigItem.forms) {
                                continue;
                              }
                              if (typeof leftContentConfigItem.afterRender === "function" && leftContentConfigItem?.id.toString().startsWith("netdisk-panel-config-")) {
                                leftContentConfigItem.afterRender = (__data) => {
                                  let ruleKey = Reflect.get(
                                    __data.asideConfig.attributes,
                                    "data-key"
                                  );
                                  let enableKey = NetDiskRuleDataKEY.function.enable(ruleKey);
                                  let subscribeRule = WebsiteSubscribeRule.getSubscribeRule(
                                    subscribeUUID,
                                    data.uuid
                                  );
                                  __data.$asideLiElement.setAttribute(
                                    "data-function-enable",
                                    subscribeRule.data[enableKey] ?? true
                                  );
                                };
                              }
                              if (typeof leftContentConfigItem.attributes === "object" && leftContentConfigItem.forms != null && ATTRIBUTE_KEY in leftContentConfigItem.attributes) {
                                let ruleKey = leftContentConfigItem.attributes[ATTRIBUTE_KEY];
                                let custom_accessCode_enable_template = UISwitch(
                                  "启用",
                                  WebsiteRuleDataKey.features.customAccessCodeEnable(
                                    ruleKey
                                  ),
                                  false,
                                  void 0,
                                  "启用后将允许执行下面的功能",
                                  void 0
                                );
                                Reflect.set(
                                  custom_accessCode_enable_template.props,
                                  PROPS_STORAGE_API,
                                  generateSubscribeRuleStorageApi(data.uuid)
                                );
                                let custom_accessCode_template = UIInput(
                                  "自定义访问码",
                                  WebsiteRuleDataKey.features.customAccessCode(
                                    ruleKey
                                  ),
                                  "",
                                  "让获取的到的链接的访问码都为自定义的访问码",
                                  void 0,
                                  "请输入自定义访问码",
                                  false,
                                  false
                                );
                                Reflect.set(
                                  custom_accessCode_template.props,
                                  PROPS_STORAGE_API,
                                  generateSubscribeRuleStorageApi(data.uuid)
                                );
                                let custom_accessCode_container = {
                                  text: "额外功能",
                                  type: "forms",
                                  forms: [
                                    custom_accessCode_enable_template,
                                    custom_accessCode_template
                                  ]
                                };
                                if (leftContentConfigItem.forms.length) {
                                  leftContentConfigItem.forms.splice(
                                    1,
                                    0,
                                    custom_accessCode_container
                                  );
                                } else {
                                  leftContentConfigItem.forms.push(
                                    custom_accessCode_container
                                  );
                                }
                              }
                              let rightContentConfigList = leftContentConfigItem.forms;
                              if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
                                iterativeTraversal(rightContentConfigList);
                              }
                            }
                            NetDiskPops.panel(
                              {
                                title: {
                                  text: `覆盖设置`,
                                  position: "center"
                                },
                                content: newPanelContentConfig,
                                btn: {
                                  close: {
                                    enable: true,
                                    callback(event2) {
                                      event2.close();
                                    }
                                  }
                                },
                                mask: {
                                  clickCallBack(originalRun) {
                                    originalRun();
                                  }
                                },
                                only: false,
                                class: "whitesevPopSetting",
                                style: (
                                  /*css*/
                                  `
																${panelIndexCSS}
																
																${panelSettingCSS}
						
						
																/* 隐藏顶部的图标 */
																.netdisk-custom-rule-edit,
																.netdisk-custom-rule-delete,
																/* 隐藏快捷键设置菜单，因为这个是全局唯一的 */
																.netdisk-panel-forms-shortcut-keys-deepMenu{
																	display: none !important;
																}`
                                )
                              },
                              NetDiskUI.popsStyle.settingView
                            );
                          },
                          void 0
                        );
                        let $coverSetting_template = panelHandlerComponents.createSectionContainerItem_button(
                          coverSetting_template
                        );
                        $fragment.appendChild($enable);
                        $fragment.appendChild($name);
                        $fragment.appendChild($data_url);
                        $fragment.appendChild($coverSetting_template);
                        return $fragment;
                      },
                      onsubmit: ($form, isEdit, editData) => {
                        let $ulist_li = $form.querySelectorAll(
                          ".rule-form-ulist > li"
                        );
                        let data = addData();
                        if (isEdit) {
                          data.uuid = editData.uuid;
                          let allData = this.getAllRule();
                          let findValue = allData.find(
                            (item) => item.uuid === data.uuid
                          );
                          if (findValue) {
                            data.data = findValue.data;
                          }
                        }
                        $ulist_li.forEach(($li) => {
                          let formConfig = Reflect.get($li, "__formConfig__");
                          let attrs = Reflect.get(formConfig, "attributes");
                          let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                          let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                          if (key == null) {
                            return;
                          }
                          let defaultValue = Reflect.get(
                            attrs,
                            ATTRIBUTE_DEFAULT_VALUE
                          );
                          let value = storageApi.get(key, defaultValue);
                          if (Reflect.has(data, key)) {
                            Reflect.set(data, key, value);
                          } else if (Reflect.has(data.data, key)) {
                            Reflect.set(data.data, key, value);
                          } else {
                            log.error(`${key}不在数据中`);
                          }
                        });
                        if (data.name == null || data.name.trim() === "") {
                          Qmsg.error("规则名称不能为空");
                          return {
                            success: false,
                            data
                          };
                        }
                        if (data.url.trim() === "") {
                          Qmsg.error("匹配网址不能为空");
                          return {
                            success: false,
                            data
                          };
                        }
                        if (isEdit) {
                          return {
                            success: this.updateRule(data),
                            data
                          };
                        } else {
                          return {
                            success: this.addRule(data),
                            data
                          };
                        }
                      }
                    },
                    ruleDelete: {
                      enable: true,
                      deleteCallBack(data) {
                        return WebsiteSubscribeRule.deleteSubscribeRule(
                          subscribeUUID,
                          data
                        );
                      }
                    }
                  }
                });
                return false;
              }
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return WebsiteSubscribeRule.deleteSubscribe(data);
              }
            },
            import: {
              enable: true,
              callback(updateView) {
                WebsiteSubscribeRule.importSubscribe(() => {
                  updateView();
                });
              }
            },
            export: {
              enable: true,
              callback() {
                WebsiteSubscribeRule.exportSubscribe(
                  _SCRIPT_NAME_ + "-网站规则-订阅.json"
                );
              }
            }
          },
          getSubscribeInfo: WebsiteSubscribeRule.getSubscribeInfo.bind(WebsiteSubscribeRule)
        },
        ruleOption: {
          btnControls: {
            add: {
              enable: true
            },
            filter: {
              enable: true,
              title: "过滤规则",
              option: [
                {
                  name: "过滤【已启用】的规则",
                  filterCallBack(data) {
                    return data.enable;
                  }
                },
                {
                  name: "过滤【未启用】的规则",
                  filterCallBack(data) {
                    return !data.enable;
                  }
                },
                {
                  name: "过滤【在当前网址生效】的规则",
                  filterCallBack(data) {
                    let matchRegExp = new RegExp(data.url, "ig");
                    return Boolean(window.location.href.match(matchRegExp));
                  }
                }
              ]
            },
            clearAll: {
              enable: true,
              callback: () => {
                that.deleteAllRule();
              }
            },
            import: {
              enable: true,
              callback: (updateView) => {
                that.importRule(() => {
                  updateView();
                });
              }
            },
            export: {
              enable: true,
              callback: () => {
                that.exportRule(
                  _SCRIPT_NAME_ + "-网站规则.json",
                  _SCRIPT_NAME_ + "-网站规则-订阅模式.json"
                );
              }
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.enable;
              },
              callback: (data, enable) => {
                data.enable = enable;
                that.updateRule(data);
              }
            },
            ruleEdit: {
              enable: true,
              getView: (data, isEdit) => {
                that.$data.isShowEditView = true;
                if (!isEdit) {
                  data = addData();
                }
                function generatePanelStorageApi(uuid) {
                  return {
                    get(key, defaultValue) {
                      let currentRule = that.getRule(uuid) ?? addData();
                      let panelValue = Panel.getValue(key, defaultValue);
                      return (currentRule && Reflect.get(currentRule.data, key)) ?? panelValue;
                    },
                    set(key, value) {
                      let currentRule = that.getRule(uuid) ?? addData();
                      Reflect.set(currentRule.data, key, value);
                      that.updateRule(currentRule);
                    }
                  };
                }
                let $fragment = document.createDocumentFragment();
                if (!isEdit) {
                  data = addData();
                }
                let enable_template = UISwitch("启用", "enable", true);
                Reflect.set(
                  enable_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(data)
                );
                let $enable = panelHandlerComponents.createSectionContainerItem_switch(
                  enable_template
                );
                let name_template = UIInput(
                  "规则名称",
                  "name",
                  "",
                  "",
                  void 0,
                  "必填"
                );
                Reflect.set(
                  name_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(data)
                );
                let $name = panelHandlerComponents.createSectionContainerItem_input(
                  name_template
                );
                let url_template = UIInput(
                  "匹配网址",
                  "url",
                  "",
                  "",
                  void 0,
                  "必填，可正则"
                );
                Reflect.set(
                  url_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(data)
                );
                let $data_url = panelHandlerComponents.createSectionContainerItem_input(
                  url_template
                );
                let coverSetting_template = UIButton(
                  "覆盖设置",
                  "",
                  "自定义",
                  void 0,
                  false,
                  false,
                  "primary",
                  (event) => {
                    utils.preventEvent(event);
                    let originPanelContentConfig = [
                      ...PanelContent.getConfig(0),
                      ...NetDiskRule.getRulePanelContent()
                    ];
                    let newPanelContentConfig = deepCopy(
                      originPanelContentConfig
                    );
                    function iterativeTraversal(configList) {
                      configList.forEach((configItem) => {
                        if (typeof configItem?.props === "object" && Reflect.has(configItem.props, PROPS_STORAGE_API)) {
                          let panelStorageApi = generatePanelStorageApi(
                            data.uuid
                          );
                          Reflect.set(
                            configItem.props,
                            PROPS_STORAGE_API,
                            panelStorageApi
                          );
                        }
                        let childForms = configItem.forms;
                        if (childForms && Array.isArray(childForms)) {
                          iterativeTraversal(childForms);
                        }
                      });
                    }
                    for (let index = 0; index < newPanelContentConfig.length; index++) {
                      let leftContentConfigItem = newPanelContentConfig[index];
                      if (!leftContentConfigItem.forms) {
                        continue;
                      }
                      if (typeof leftContentConfigItem.afterRender === "function" && leftContentConfigItem?.id.toString().startsWith("netdisk-panel-config-")) {
                        leftContentConfigItem.afterRender = (__data) => {
                          let ruleKey = Reflect.get(
                            __data.asideConfig.attributes,
                            "data-key"
                          );
                          let enableKey = NetDiskRuleDataKEY.function.enable(ruleKey);
                          __data.$asideLiElement.setAttribute(
                            "data-function-enable",
                            isEdit ? WebsiteRule.getRuleDataValue(
                              data.uuid,
                              enableKey,
                              true
                            ) : data.data[enableKey] ?? true
                          );
                        };
                      }
                      if (typeof leftContentConfigItem.attributes === "object" && leftContentConfigItem.forms != null && ATTRIBUTE_KEY in leftContentConfigItem.attributes) {
                        let ruleKey = leftContentConfigItem.attributes[ATTRIBUTE_KEY];
                        let custom_accessCode_enable_template = UISwitch(
                          "启用",
                          WebsiteRuleDataKey.features.customAccessCodeEnable(
                            ruleKey
                          ),
                          false,
                          void 0,
                          "启用后将允许执行下面的功能",
                          void 0
                        );
                        Reflect.set(
                          custom_accessCode_enable_template.props,
                          PROPS_STORAGE_API,
                          generatePanelStorageApi(data.uuid)
                        );
                        let custom_accessCode_template = UIInput(
                          "自定义访问码",
                          WebsiteRuleDataKey.features.customAccessCode(ruleKey),
                          "",
                          "让获取的到的链接的访问码都为自定义的访问码",
                          void 0,
                          "请输入自定义访问码",
                          false,
                          false
                        );
                        Reflect.set(
                          custom_accessCode_template.props,
                          PROPS_STORAGE_API,
                          generatePanelStorageApi(data.uuid)
                        );
                        let custom_accessCode_container = {
                          text: "额外功能",
                          type: "forms",
                          forms: [
                            custom_accessCode_enable_template,
                            custom_accessCode_template
                          ]
                        };
                        if (leftContentConfigItem.forms.length) {
                          leftContentConfigItem.forms.splice(
                            1,
                            0,
                            custom_accessCode_container
                          );
                        } else {
                          leftContentConfigItem.forms.push(
                            custom_accessCode_container
                          );
                        }
                      }
                      let rightContentConfigList = leftContentConfigItem.forms;
                      if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
                        iterativeTraversal(rightContentConfigList);
                      }
                    }
                    NetDiskPops.panel(
                      {
                        title: {
                          text: `覆盖设置`,
                          position: "center"
                        },
                        content: newPanelContentConfig,
                        btn: {
                          close: {
                            enable: true,
                            callback(event2) {
                              event2.close();
                            }
                          }
                        },
                        mask: {
                          clickCallBack(originalRun) {
                            originalRun();
                          }
                        },
                        only: false,
                        class: "whitesevPopSetting",
                        style: (
                          /*css*/
                          `
											${panelIndexCSS}
											
											${panelSettingCSS}
	
	
											/* 隐藏顶部的图标 */
											.netdisk-custom-rule-edit,
											.netdisk-custom-rule-delete,
											/* 隐藏快捷键设置菜单，因为这个是全局唯一的 */
											.netdisk-panel-forms-shortcut-keys-deepMenu{
												display: none !important;
											}
											`
                        )
                      },
                      NetDiskUI.popsStyle.settingView
                    );
                  },
                  void 0
                );
                let $coverSetting_template = panelHandlerComponents.createSectionContainerItem_button(
                  coverSetting_template
                );
                $fragment.appendChild($enable);
                $fragment.appendChild($name);
                $fragment.appendChild($data_url);
                $fragment.appendChild($coverSetting_template);
                return $fragment;
              },
              onsubmit: ($form, isEdit, editData) => {
                let $ulist_li = $form.querySelectorAll(
                  ".rule-form-ulist > li"
                );
                let data = addData();
                if (isEdit) {
                  data.uuid = editData.uuid;
                  let allData = this.getAllRule();
                  let findValue = allData.find((item) => item.uuid === data.uuid);
                  if (findValue) {
                    data.data = findValue.data;
                  }
                }
                $ulist_li.forEach(($li) => {
                  let formConfig = Reflect.get($li, "__formConfig__");
                  let attrs = Reflect.get(formConfig, "attributes");
                  let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                  let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                  if (key == null) {
                    return;
                  }
                  let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                  let value = storageApi.get(key, defaultValue);
                  if (Reflect.has(data, key)) {
                    Reflect.set(data, key, value);
                  } else if (Reflect.has(data.data, key)) {
                    Reflect.set(data.data, key, value);
                  } else {
                    log.error(`${key}不在数据中`);
                  }
                });
                if (data.name == null || data.name.trim() === "") {
                  Qmsg.error("规则名称不能为空");
                  return {
                    success: false,
                    data
                  };
                }
                if (data.url.trim() === "") {
                  Qmsg.error("匹配网址不能为空");
                  return {
                    success: false,
                    data
                  };
                }
                if (isEdit) {
                  return {
                    success: this.updateRule(data),
                    data
                  };
                } else {
                  return {
                    success: this.addRule(data),
                    data
                  };
                }
              }
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return that.deleteRule(data.uuid);
              }
            }
          },
          data: () => {
            return this.getAllRule();
          },
          getAddData: () => {
            return addData();
          },
          getData: (data) => {
            let allData = this.getAllRule();
            let findValue = allData.find((item) => item.uuid === data.uuid);
            return findValue ?? data;
          },
          getDataItemName: (data) => {
            return data["name"] ?? data.url;
          },
          updateData: (data) => {
            return this.updateRule(data);
          },
          deleteData: (data) => {
            that.$data.isShowEditView = false;
            return this.deleteRule(data.uuid);
          }
        }
      };
      return rulePanelViewOption;
    },
    /**
     * 添加单个规则
     */
    addRule(rule) {
      let allRule = this.getAllRule();
      allRule.push(rule);
      WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allRule);
      return true;
    },
    /**
     * 根据uuid获取单个规则的数据
     * @param uuid
     */
    getRule(uuid) {
      let findValue = this.getAllRule().find((rule) => rule.uuid === uuid);
      if (findValue) {
        return findValue;
      }
      let findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find(
        (rule) => {
          return rule.uuid === uuid;
        }
      );
      return findSubscribeRule;
    },
    /**
     * 根据uuid获取单个规则的存储数据
     * @param uuid
     */
    getRuleData(uuid) {
      if (typeof uuid === "string") {
        return this.getRule(uuid).data;
      } else {
        return uuid.data;
      }
    },
    /**
     * 根据uuid获取单个规则的存储数据的值
     * @param uuid
     * @param key 键
     * @param defaultValue 默认值
     */
    getRuleDataValue(uuid, key, defaultValue) {
      let ruleData = this.getRuleData(uuid);
      return (ruleData && Reflect.get(ruleData, key)) ?? defaultValue;
    },
    /**
     * 更新单个规则
     * @param rule
     */
    updateRule(rule) {
      let allRule = this.getAllRule();
      let flag = false;
      for (let index = 0; index < allRule.length; index++) {
        const localRule = allRule[index];
        if (localRule.uuid === rule.uuid) {
          allRule[index] = rule;
          flag = true;
          break;
        }
      }
      if (flag) {
        WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allRule);
      } else {
        let findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find(
          (it) => {
            return it.uuid === rule.uuid;
          }
        );
        if (findSubscribeRule) {
          flag = WebsiteSubscribeRule.updateSubscribeRule(
            rule.subscribeUUID,
            rule
          );
        }
      }
      return flag;
    },
    /**
     * 删除单个规则
     * @param uuid 整个规则或者规则的uuid
     */
    deleteRule(uuid) {
      let allRule = this.getAllRule();
      let flag = false;
      let needDeleteRuleUUID = typeof uuid === "string" ? uuid : uuid.uuid;
      for (let index = 0; index < allRule.length; index++) {
        const localRule = allRule[index];
        if (localRule.uuid === needDeleteRuleUUID) {
          allRule.splice(index, 1);
          flag = true;
          break;
        }
      }
      if (flag) {
        WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allRule);
      } else {
        let findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find(
          (it) => {
            return it.uuid === needDeleteRuleUUID;
          }
        );
        if (findSubscribeRule) {
          flag = WebsiteSubscribeRule.deleteSubscribeRule(
            findSubscribeRule.subscribeUUID,
            findSubscribeRule
          );
        }
      }
      return flag;
    },
    /**
     * 清空所有规则
     */
    deleteAllRule() {
      WebsiteRuleStorageApi.delete(this.$data.STORAGE_KEY);
    },
    /**
     * 获取所有规则
     */
    getAllRule() {
      let allRule = WebsiteRuleStorageApi.get(
        this.$data.STORAGE_KEY,
        []
      );
      return allRule;
    },
    /**
     * 根据url获取匹配的规则
     * @param [filterUnEnable=true] 是否过滤未启用的规则
     * @param [url=window.location.href] 需要匹配的url
     */
    getUrlMatchedRule(filterUnEnable = true, url = window.location.href) {
      let allRule = this.getAllRule();
      let allSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule(true);
      allRule = allRule.concat(allSubscribeRule);
      let matchedRule = allRule.filter((rule) => {
        if (filterUnEnable && !rule.enable) {
          return false;
        }
        let matchRegExp = new RegExp(rule.url, "ig");
        if (url.match(matchRegExp)) {
          return true;
        } else {
          return false;
        }
      });
      return matchedRule;
    },
    /**
     * 导出规则
     */
    exportRule(fileName = "rule.json", subscribeFileName = "rule-subscribe.json") {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导出方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='only-export-rule-list']"
      );
      let $exportToSubscribe = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='export-to-subscribe']"
      );
      let exportFile = (__fileName__, __data__) => {
        let blob = new Blob([JSON.stringify(__data__, null, 4)]);
        let blobUrl = window.URL.createObjectURL(blob);
        let $a = document.createElement("a");
        $a.href = blobUrl;
        $a.download = __fileName__;
        $a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 1500);
      };
      domUtils.on($onlyExportRuleList, "click", (event) => {
        utils.preventEvent(event);
        try {
          let allRule = this.getAllRule();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          exportFile(fileName, allRule);
          $alert.close();
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
      domUtils.on($exportToSubscribe, "click", (event) => {
        utils.preventEvent(event);
        const that = this;
        $alert.close();
        try {
          let allRule = this.getAllRule();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          let panelHandlerComponents = __pops.config.PanelHandlerComponents();
          let generateStorageApi = function(data) {
            return {
              get(key, defaultValue) {
                return data[key] ?? defaultValue;
              },
              set(key, value) {
                data[key] = value;
                WebsiteRuleStorageApi.set(that.$data.EXPORT_CONFIG_KEY, data);
              }
            };
          };
          let exportCallBack = () => {
            let configData2 = WebsiteRuleStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
            if (configData2?.title === "" || configData2.title == null) {
              Qmsg.error("订阅标题不能为空");
              return;
            }
            if (configData2.version == null) {
              Qmsg.error("版本号不能为空");
              return;
            } else {
              configData2.version = Number(configData2.version);
            }
            if (configData2.homePage == null) {
              configData2.homePage = void 0;
            }
            configData2.lastModified = Date.now();
            configData2.ruleData = this.getAllRule();
            exportFile(subscribeFileName, configData2);
            $exportSubscribeDialog.close();
          };
          let $exportSubscribeDialog = NetDiskPops.alert({
            title: {
              text: "请填写导出配置",
              position: "center"
            },
            content: {
              text: (
                /*html*/
                `
							
						`
              ),
              html: true
            },
            btn: {
              ok: {
                enable: true,
                text: "导出",
                callback(details, event2) {
                  exportCallBack();
                }
              },
              close: {
                enable: true,
                callback(details, event2) {
                  details.close();
                }
              }
            },
            mask: {
              enable: true
            },
            drag: true,
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: (
              /*css*/
              `
						${__pops.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`
            )
          });
          let $content = $exportSubscribeDialog.$shadowRoot.querySelector(
            ".pops-alert-content"
          );
          let configData = WebsiteRuleStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
          let title_template = UIInput("订阅标题", "title", "", "", void 0, "");
          Reflect.set(
            title_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $title = panelHandlerComponents.createSectionContainerItem_input(
            title_template
          );
          let version_template = UIInput(
            "版本号",
            "version",
            "",
            "",
            void 0,
            "",
            false
          );
          Reflect.set(
            version_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $version = panelHandlerComponents.createSectionContainerItem_input(
            version_template
          );
          let homePage_template = UIInput(
            "主页地址",
            "homePage",
            "",
            "",
            void 0,
            "选填"
          );
          Reflect.set(
            homePage_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(configData)
          );
          let $homePage = panelHandlerComponents.createSectionContainerItem_input(
            homePage_template
          );
          domUtils.append($content, $title);
          domUtils.append($content, $version);
          domUtils.append($content, $homePage);
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
    },
    /**
     * 导入规则
     * @param importEndCallBack 导入完毕后的回调
     */
    importRule(importEndCallBack) {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导入方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `
          ),
          html: true
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            }
          }
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `
        )
      });
      let $local = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='local']"
      );
      let $network = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='network']"
      );
      let $clipboard = $alert.$shadowRoot.querySelector(
        ".btn-control[data-mode='clipboard']"
      );
      let updateRuleToStorage = (data) => {
        let allData = this.getAllRule();
        let addNewData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1) ;
          else {
            addNewData.push(dataItem);
          }
        }
        allData = allData.concat(addNewData);
        WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allData);
        Qmsg.success(`共 ${data.length} 条规则，新增 ${addNewData.length} 条`);
        importEndCallBack?.();
      };
      let importFile = (subscribeText) => {
        return new Promise((resolve) => {
          let data = utils.toJSON(subscribeText);
          if (!Array.isArray(data)) {
            log.error(data);
            Qmsg.error("导入失败，格式不符合（不是数组）", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true
            });
            resolve(false);
            return;
          }
          updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json"
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          if (!$input.files?.length) {
            return;
          }
          let uploadFile = $input.files[0];
          let fileReader = new FileReader();
          fileReader.onload = () => {
            importFile(fileReader.result);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $prompt = NetDiskPops.prompt({
          title: {
            text: "网络导入",
            position: "center"
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              }
            },
            ok: {
              text: "导入",
              callback: async (eventDetails, event2) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                let $loading = Qmsg.loading("正在获取配置...");
                let response = await httpx.get(url, {
                  allowInterceptConfig: false
                });
                $loading.close();
                if (!response.status) {
                  log.error(response);
                  Qmsg.error("获取配置失败", { consoleLogContent: true });
                  return;
                }
                let flag = await importFile(response.data.responseText);
                if (!flag) {
                  return;
                }
                eventDetails.close();
              }
            },
            cancel: {
              enable: false
            }
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto"
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(
          ".pops-prompt-btn-ok"
        );
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard(
          $promptInput,
          "keydown",
          (keyName, keyValue, otherCodeList) => {
            if (keyName === "Enter" && otherCodeList.length === 0) {
              let value = domUtils.val($promptInput);
              if (value !== "") {
                utils.dispatchEvent($promptOk, "click");
              }
            }
          }
        );
        utils.dispatchEvent($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        utils.preventEvent(event);
        $alert.close();
        let clipboardInfo = await utils.getClipboardInfo();
        if (clipboardInfo.error != null) {
          Qmsg.error(clipboardInfo.error.toString());
          return;
        }
        if (clipboardInfo.content.trim() === "") {
          Qmsg.warning("获取到的剪贴板内容为空");
          return;
        }
        let flag = await importFile(clipboardInfo.content);
        if (!flag) {
          return;
        }
      });
    }
  };
  const WebsiteProxyGlobalValue = (key, value, defaultValue) => {
    if (WebsiteRule.$data.isShowEditView) {
      return value;
    }
    let matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();
    let findValue = matchedUrlRuleList.find((item) => {
      let data = WebsiteRule.getRuleData(item);
      return Reflect.has(data, key);
    });
    if (findValue) {
      return Reflect.get(WebsiteRule.getRuleData(findValue), key);
    } else {
      return value;
    }
  };
  const GenerateProxyStorage = function(key, defaultValue, proxyValueCallBack) {
    return {
      /** 键名 */
      KEY: key,
      /** 默认值 */
      default: defaultValue,
      /** 获取值 */
      get value() {
        let currentValue = _GM_getValue(key, defaultValue);
        if (typeof proxyValueCallBack === "function") {
          return proxyValueCallBack(key, currentValue, defaultValue);
        }
        return currentValue;
      },
      /** 设置值 */
      set value(newValue) {
        _GM_setValue(key, newValue);
      }
    };
  };
  const GeneratePanelStorage = function(key, defaultValue) {
    return GenerateProxyStorage(key, defaultValue, WebsiteProxyGlobalValue);
  };
  const NetDiskGlobalData = {
    /** Toast */
    toast: {
      /** 位置 */
      position: GeneratePanelStorage("qmsg-config-position", "top"),
      /** 同时最多显示的数量 */
      maxnums: GeneratePanelStorage("qmsg-config-maxnums", 3),
      /** 逆序弹出 */
      showreverse: GeneratePanelStorage("qmsg-config-showreverse", true)
    },
    /** 弹窗 */
    pops: {
      /** 动画 */
      popsAnimation: GeneratePanelStorage(
        "popsAnimation",
        "pops-anim-fadein-zoom"
      ),
      /** 点击弹窗遮罩层是否可以关闭弹窗 */
      clickMaskToCloseDialog: GeneratePanelStorage(
        "clickMaskToCloseDialog",
        true
      ),
      /** 窗口拖拽 */
      pcDrag: GeneratePanelStorage("pcDrag", true),
      /** 限制拖拽距离 */
      pcDragLimit: GeneratePanelStorage("pcDragLimit", true),
      /** 亚克力效果 */
      popsAcrylic: GeneratePanelStorage("popsAcrylic", false)
    },
    /** 文件弹窗 */
    popsFolder: {
      /** 排序名 */
      "pops-folder-sort-name": GeneratePanelStorage(
        "pops-folder-sort-name",
        "fileName"
      ),
      /** 排序规则 */
      "pops-folder-sort-is-desc": GeneratePanelStorage(
        "pops-folder-sort-is-desc",
        false
      )
    },
    /** 小图标导航 */
    smallIconNavgiator: {
      /** 点击定位分享码 */
      "pops-netdisk-icon-click-event-find-sharecode": GeneratePanelStorage(
        "pops-netdisk-icon-click-event-find-sharecode",
        true
      ),
      /** 选中分享码 */
      "pops-netdisk-icon-click-event-find-sharecode-with-select": GeneratePanelStorage(
        "pops-netdisk-icon-click-event-find-sharecode-with-select",
        true
      ),
      /** 循环定位 */
      "pops-netdisk-icon-click-event-loop-find-sharecode": GeneratePanelStorage(
        "pops-netdisk-icon-click-event-loop-find-sharecode",
        true
      )
    },
    /** 悬浮按钮 */
    suspension: {
      /** 大小 */
      size: GeneratePanelStorage("size", 50),
      /** 透明度 */
      opacity: GeneratePanelStorage("opacity", 1),
      /** 背景轮播时间 */
      "randbg-time": GeneratePanelStorage("randbg-time", 1500),
      /** 背景显示时间 */
      "randbg-show-time": GeneratePanelStorage("randbg-show-time", 1200),
      /** 吸附边缘 */
      "suspended-button-adsorption-edge": GeneratePanelStorage(
        "suspended-button-adsorption-edge",
        false
      ),
      /** z-index层级 */
      "suspended-z-index": GeneratePanelStorage("suspended-z-index", -1)
    },
    /** 小窗模式 */
    smallWindow: {
      /** 宽度 */
      "netdisk-ui-small-window-width": GeneratePanelStorage(
        "netdisk-ui-small-window-width",
        250
      ),
      /** 高度 */
      "netdisk-ui-small-window-max-height": GeneratePanelStorage(
        "netdisk-ui-small-window-max-height",
        200
      ),
      /** z-index */
      "netdisk-link-view-z-index": GeneratePanelStorage(
        "netdisk-link-view-z-index",
        -1
      )
    },
    /** 历史匹配记录 */
    historyMatch: {
      /** 保存匹配记录 */
      saveMatchNetDisk: GeneratePanelStorage("saveMatchNetDisk", false),
      /** 排序规则 */
      "netdisk-history-match-ordering-rule": GeneratePanelStorage(
        "netdisk-history-match-ordering-rule",
        "按 更新时间 - 降序"
      ),
      /** 合并相同链接 */
      "netdisk-history-match-merge-same-link": GeneratePanelStorage(
        "netdisk-history-match-merge-same-link",
        true
      )
    },
    /** 匹配设置 */
    match: {
      /** 匹配类型 */
      pageMatchRange: GeneratePanelStorage("pageMatchRange", [
        "innerText",
        "innerHTML"
      ]),
      /** 深入ShadowRoot获取匹配文本 */
      depthQueryWithShadowRoot: GeneratePanelStorage(
        "depthQueryWithShadowRoot",
        false
      ),
      /** 匹配剪贴板 */
      readClipboard: GeneratePanelStorage("readClipboard", false),
      /** 匹配当前URL */
      allowMatchLocationHref: GeneratePanelStorage(
        "allowMatchLocationHref",
        true
      ),
      /** 匹配input标签的内容 */
      toBeMatchedWithInputElementValue: GeneratePanelStorage(
        "to-be-matched-inputElementValue",
        false
      ),
      /** 匹配textarea标签的内容 */
      toBeMatchedTextAreaElementValue: GeneratePanelStorage(
        "to-be-matched-textAreaElementValue",
        false
      ),
      /** 匹配网络请求的内容 */
      toBeMatchedXhrHookResponseText: GeneratePanelStorage(
        "to-be-matched-xhrHookResponseText",
        false
      ),
      /** 匹配间隔 */
      delaytime: GeneratePanelStorage("delaytime", 0.8),
      /** 添加元素时进行匹配 */
      isAddedNodesToMatch: GeneratePanelStorage("isAddedNodesToMatch", false),
      /** 观察器：childList */
      "mutationObserver-childList": GeneratePanelStorage(
        "mutationObserver-childList",
        true
      ),
      /** 观察器：characterData */
      "mutationObserver-characterData": GeneratePanelStorage(
        "mutationObserver-characterData",
        true
      ),
      /** 观察器：subtree */
      "mutationObserver-subtree": GeneratePanelStorage(
        "mutationObserver-subtree",
        true
      )
    },
    /** 功能 */
    features: {
      /** 匹配模式 */
      "netdisk-match-mode": GeneratePanelStorage(
        "netdisk-match-mode",
        "MutationObserver"
      ),
      /** 行为模式 */
      "netdisk-behavior-mode": GeneratePanelStorage(
        "netdisk-behavior-mode",
        "suspension_smallwindow"
      ),
      /** 自动填充访问码 */
      autoFillAccessCode: GeneratePanelStorage("autoFillAccessCode", true)
    },
    /** 分享码相关 */
    shareCode: {
      /** 相同系数 */
      excludeIdenticalSharedCodesCoefficient: GeneratePanelStorage(
        "excludeIdenticalSharedCodesCoefficient",
        1
      ),
      /** 排除分享码 */
      excludeIdenticalSharedCodes: GeneratePanelStorage(
        "excludeIdenticalSharedCodes",
        false
      )
    },
    /** 访问码 */
    accessCode: {
      /** 允许查询历史匹配记录 */
      allowQueryHistoryMatchingAccessCode: GeneratePanelStorage(
        "allowQueryHistoryMatchingAccessCode",
        true
      )
    }
  };
  const NetDisk = {
    $data: {
      /**
       * 是否成功匹配到链接
       */
      isMatchedLink: false,
      /**
       * 剪贴板内容
       */
      clipboardText: ""
    },
    /** 匹配信息 */
    $match: {
      /**
       * 匹配到的链接信息
       *
       * Worker识别规则 -> 存储识别到的信息（访问码|分享码|规则下标...）
       */
      matchedInfo: new Utils.Dictionary(),
      /**
       * 黑名单-识别到的信息
       *
       * 如果Worker识别到的信息能在这里面找到对应的shareCode，则不会被识别
       */
      blackMatchedInfo: new Utils.Dictionary(),
      /**
       * （临时）链接字典
       */
      tempMatchedInfo: new Utils.Dictionary(),
      /**
       * 用于存储已匹配到的网盘规则名
       * 只有单独的名
       */
      matchedInfoRuleKey: /* @__PURE__ */ new Set()
    },
    /** 规则 */
    $rule: {
      /** 执行匹配本文的规则 */
      ruleOption: {},
      /** 各个规则的设置项 */
      ruleSetting: {},
      /** 各个规则 */
      rule: []
    },
    /** 额外规则，用于辅助处理 */
    $extraRule: {
      /**
       * 使用该正则判断提取到的shareCode是否正确
       */
      shareCodeNotMatchRegExpList: [
        /vipstyle|notexist|ajax|file|download|ptqrshow|xy-privacy/g,
        /comp|web|undefined|1125|unproved|console|account|favicon|setc/g
      ],
      /**
       * 使用该正则判断提取到的accessCode是否正确
       */
      accessCodeNotMatchRegExpList: [/^(font|http)/gi],
      /**
       * 当没有accessCode时，使用该正则去除不需要的字符串
       */
      noAccessCodeRegExp: [
        /( |提取码:|\n密码：)/gi,
        /{#accessCode#}/gi,
        /{#encodeURI-accessCode#}|{#encodeURIComponent-accessCode#}/gi,
        /{#decodeURI-accessCode#}|{#decodeURIComponent-accessCode#}/gi,
        /(\?pwd=|&pwd=|\?password=|\?p=)/gi
      ]
    },
    /**
     * 初始化
     */
    init() {
      this.initLinkDict();
    },
    /**
     * 初始化字典
     */
    initLinkDict() {
      Object.keys(this.$rule.ruleOption).forEach((ruleKeyName) => {
        this.$match.matchedInfo.set(ruleKeyName, new utils.Dictionary());
        this.$match.blackMatchedInfo.set(ruleKeyName, new utils.Dictionary());
        this.$match.tempMatchedInfo.set(ruleKeyName, new utils.Dictionary());
      });
      let matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();
      if (matchedUrlRuleList.length) {
        log.info("成功命中网站规则 ==> ", matchedUrlRuleList);
        GM_Menu.add({
          key: "matchedUrlRuleList",
          text: `🌏 命中网站规则 ${matchedUrlRuleList.length} 条`,
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            log.info("当前网址：" + self.location.href);
            if (!Panel.isTopWindow()) {
              return;
            }
            alert(
              "以下是命中的规则名：\n" + matchedUrlRuleList.map((item) => item.name).join("\n")
            );
          }
        });
      }
      let characterMapping = CharacterMapping.getUrlMatchedRule();
      if (characterMapping.length) {
        log.info("成功命中字符规则 ==> ", characterMapping);
        GM_Menu.add({
          key: "characterMapping",
          text: `🌏 命中字符规则 ${characterMapping.length} 条`,
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            log.info("当前网址：" + self.location.href);
            if (!Panel.isTopWindow()) {
              return;
            }
            alert(
              "以下是命中的规则名：\n" + characterMapping.map((item) => item.name).join("\n")
            );
          }
        });
      }
    },
    /**
     * 处理链接，将匹配到的链接转为参数和密码存入字典中
     * @param ruleKeyName 规则键名
     * @param ruleIndex 规则的索引下标
     * @param matchText 正在进行匹配的文本
     */
    handleLink(handlerConfig) {
      let shareCode = this.handleShareCode(handlerConfig);
      if (utils.isNull(shareCode)) {
        return;
      }
      let accessCode = this.handleAccessCode(handlerConfig);
      accessCode = this.handleAccessCodeByUserRule({
        ...handlerConfig,
        accessCode
      });
      return {
        shareCode,
        accessCode
      };
    },
    /**
     * 对传入的url进行处理，返回shareCode
     * @param handlerConfig 配置
     */
    handleShareCode(handlerConfig) {
      let ruleConfig = handlerConfig?.debugConfig?.config ?? this.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let shareCodeMatch = handlerConfig.matchText.match(ruleConfig.shareCode)?.filter((item) => utils.isNotNull(item));
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: shareCode`,
          "作用: 获取shareCode",
          "结果: ",
          JSON.stringify(shareCodeMatch)
        ]
      });
      if (utils.isNull(shareCodeMatch)) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: `匹配shareCode为空`
        });
        return;
      }
      let shareCode = shareCodeMatch[0];
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`取第一个值: ` + shareCode]
      });
      if (ruleConfig.shareCodeNeedRemoveStr) {
        let shareCodeNeedRemoveStrList = ruleConfig.shareCodeNeedRemoveStr;
        if (!Array.isArray(shareCodeNeedRemoveStrList)) {
          shareCodeNeedRemoveStrList = [shareCodeNeedRemoveStrList];
        }
        for (const shareCodeRemoveRegExp of shareCodeNeedRemoveStrList) {
          shareCode = shareCode.replace(shareCodeRemoveRegExp, "");
        }
        if (shareCodeNeedRemoveStrList.length) {
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: [
              `正则: shareCodeNeedRemoveStr`,
              "作用: 删除ShareCode前面不需要的字符串",
              `结果: ${shareCode}`
            ]
          });
        }
      }
      for (const shareCodeNotMatchRegExp of NetDisk.$extraRule.shareCodeNotMatchRegExpList) {
        if (shareCode.match(shareCodeNotMatchRegExp)) {
          handlerConfig.debugConfig?.logCallBack?.({
            status: false,
            msg: [
              `正则: 内置的shareCodeNotMatchRegExpList`,
              "作用: 使用该正则判断提取到的shareCode是否正确",
              `结果: true 该shareCode不是正确的`
            ]
          });
          return;
        }
      }
      let shareCodeNotMatch = ruleConfig.shareCodeNotMatch;
      if (shareCodeNotMatch != null) {
        if (!Array.isArray(shareCodeNotMatch)) {
          shareCodeNotMatch = [shareCodeNotMatch];
        }
        for (const shareCodeNotMatchRegExp of shareCodeNotMatch) {
          if (shareCode.match(shareCodeNotMatchRegExp)) {
            handlerConfig.debugConfig?.logCallBack?.({
              status: false,
              msg: [
                `正则: shareCodeNotMatch`,
                "作用: 用于判断提取到的shareCode是否是错误的shareCode",
                `结果: true 该shareCode不是正确的`
              ]
            });
            return;
          }
        }
      }
      shareCode = decodeURI(shareCode);
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: ["对shareCode进行解码: " + shareCode]
      });
      if (NetDiskGlobalData.shareCode.excludeIdenticalSharedCodes.value && utils.isSameChars(
        shareCode,
        NetDiskGlobalData.shareCode.excludeIdenticalSharedCodesCoefficient.value
      )) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: ["已开启【排除分享码】且该分享码命中该规则"]
        });
        return;
      }
      if (shareCode.endsWith("http") || shareCode.endsWith("https")) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: ["该分享码以http|https结尾"]
        });
        return;
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的shareCode: " + shareCode
      });
      return shareCode;
    },
    /**
     * 对传入的url进行处理，返回accessCode
     * @param handlerConfig 配置
     * @returns "xxxx" || ""
     */
    handleAccessCode(handlerConfig) {
      let ruleConfig = handlerConfig.debugConfig?.config ?? this.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let accessCode = "";
      if (!ruleConfig.checkAccessCode) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: "因未配置规则checkAccessCode，默认accessCode的值为空"
        });
        return "";
      }
      let accessCodeMatch = handlerConfig.matchText.match(
        ruleConfig.checkAccessCode
      );
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: checkAccessCode`,
          "作用: 用来判断link_innerText或者link_innerHTML匹配到的字符串中是否存在密码",
          `结果: `,
          JSON.stringify(accessCodeMatch)
        ]
      });
      if (accessCodeMatch) {
        let accessCodeMatchValue = accessCodeMatch[accessCodeMatch.length - 1];
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: "取最后一个值: " + accessCodeMatchValue
        });
        let accessCodeMatchArray = accessCodeMatchValue.match(ruleConfig.accessCode)?.filter((item) => utils.isNotNull(item));
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: accessCode`,
            "作用: 用来提取link_innerText或者link_innerHTML匹配到的字符串中的密码",
            `结果: `,
            JSON.stringify(accessCodeMatchArray)
          ]
        });
        if (utils.isNull(accessCodeMatchArray)) {
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: "因↑匹配到的结果为空，默认accessCode的值为空"
          });
          return "";
        }
        if (accessCodeMatchArray.length) {
          accessCode = accessCodeMatchArray[0];
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: "取第一个值: " + accessCode
          });
        }
      }
      if (utils.isNotNull(accessCode)) {
        for (const accessCodeNotMatchRegExp of NetDisk.$extraRule.accessCodeNotMatchRegExpList) {
          if (accessCode.match(accessCodeNotMatchRegExp)) {
            accessCode = "";
            handlerConfig.debugConfig?.logCallBack?.({
              status: true,
              msg: [
                `正则: 内置的accessCodeNotMatchRegExpList`,
                "作用: 使用该正则判断提取到的accessCode是否正确",
                `结果: true 重置accessCode为空`
              ]
            });
            break;
          }
        }
        let accessCodeNotMatchRegExpList = ruleConfig.acceesCodeNotMatch;
        if (accessCodeNotMatchRegExpList) {
          if (!Array.isArray(accessCodeNotMatchRegExpList)) {
            accessCodeNotMatchRegExpList = [accessCodeNotMatchRegExpList];
          }
          for (const accessCodeNotMatchRegExp of accessCodeNotMatchRegExpList) {
            if (accessCode.match(accessCodeNotMatchRegExp)) {
              accessCode = "";
              handlerConfig.debugConfig?.logCallBack?.({
                status: true,
                msg: [
                  `正则: acceesCodeNotMatch`,
                  "作用: 用于判断提取到的accessCode是否是错误的accessCode",
                  `结果: true 重置accessCode为空`
                ]
              });
              break;
            }
          }
        }
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的accessCode: " + accessCode
      });
      return accessCode;
    },
    /**
     * 对accessCode二次处理，使用自定义的访问码规则
     * @param handlerConfig 配置
     */
    handleAccessCodeByUserRule(handlerConfig) {
      let ruleConfigList = WebsiteRule.getUrlMatchedRule();
      let result = handlerConfig.accessCode;
      for (let index = 0; index < ruleConfigList.length; index++) {
        const ruleConfig = ruleConfigList[index];
        let ruleData = WebsiteRule.getRuleData(ruleConfig);
        let customAccessCode = Reflect.get(
          ruleData,
          WebsiteRuleDataKey.features.customAccessCode(handlerConfig.ruleKeyName)
        );
        let customAccessCodeEnable = Reflect.get(
          ruleData,
          WebsiteRuleDataKey.features.customAccessCodeEnable(
            handlerConfig.ruleKeyName
          )
        );
        if (customAccessCodeEnable && typeof customAccessCode === "string") {
          result = customAccessCode;
          break;
        }
      }
      return result;
    },
    /**
     * 获取在弹窗中显示出的链接
     * @param handlerConfig 配置
     */
    handleLinkShow(handlerConfig) {
      let checkFlag = handlerConfig.debugConfig?.config ? true : this.checkHasRuleOption(
        handlerConfig.ruleKeyName,
        handlerConfig.ruleIndex
      );
      if (!checkFlag) {
        log.error(
          `BUG: ${handlerConfig.ruleKeyName}不存在，分析参数`,
          handlerConfig
        );
        (handlerConfig.showToast ?? true) && Qmsg.error(`规则：${handlerConfig.ruleKeyName}不存在`);
        return;
      }
      let ruleConfig = handlerConfig.debugConfig?.config ?? NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let uiLink = NetDiskRuleUtils.replaceParam(ruleConfig.uiLinkShow, {
        shareCode: handlerConfig.shareCode
      });
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: uiLinkShow`,
          "作用: 用于显示在弹窗中的字符串",
          "备注: 对shareCode进行参数替换",
          `结果: ${uiLink}`
        ]
      });
      if (typeof handlerConfig.accessCode === "string" && handlerConfig.accessCode.trim() != "") {
        uiLink = NetDiskRuleUtils.replaceParam(uiLink, {
          accessCode: handlerConfig.accessCode
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: uiLinkShow`,
            "作用: 用于显示在弹窗中的字符串",
            "备注: 对accessCode进行参数替换",
            `结果: ${uiLink}`
          ]
        });
      } else {
        uiLink = NetDiskHandlerUtil.replaceText(
          uiLink,
          NetDisk.$extraRule.noAccessCodeRegExp,
          ""
        );
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: 内置的noAccessCodeRegExp`,
            "作用: 因accessCode为空，使用该正则去除不需要的字符串",
            `结果: ${uiLink}`
          ]
        });
      }
      if (ruleConfig.paramMatch) {
        let currentDict = NetDisk.$match.matchedInfo.get(handlerConfig.ruleKeyName).get(handlerConfig.shareCode);
        handlerConfig.matchText = handlerConfig.matchText ?? currentDict?.matchText;
        if (utils.isNotNull(handlerConfig.matchText)) {
          let paramMatchArray = handlerConfig.matchText.match(
            ruleConfig.paramMatch
          );
          let replaceParamData = {};
          if (paramMatchArray) {
            for (let index = 0; index < paramMatchArray.length; index++) {
              replaceParamData[`$${index}`] = paramMatchArray[index];
            }
          }
          uiLink = NetDiskRuleUtils.replaceParam(uiLink, replaceParamData);
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: [
              `正则: paramMatch`,
              `作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
              `参数: ` + JSON.stringify(replaceParamData, void 0, 4),
              `结果: ${uiLink}`
            ]
          });
        }
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的uiLink: " + uiLink
      });
      return uiLink;
    },
    /**
     *生成链接的存储的对象
     * @param accessCode 访问码
     * @param [ruleIndex=0] 规则的索引下标，默认为0
     * @param isForceAccessCode 是否锁定访问码不允许修改，默认false
     * @param matchText 匹配到的文本
     */
    createLinkStorageInst(accessCode, ruleIndex = 0, isForceAccessCode = false, matchText) {
      return {
        accessCode,
        ruleIndex,
        isForceAccessCode,
        matchText
      };
    },
    /**
     * 判断规则是否存在
     */
    checkHasRuleOption(ruleKeyName, ruleIndex) {
      let ruleConfig = NetDisk.$rule.ruleOption?.[ruleKeyName];
      if (!Array.isArray(ruleConfig)) {
        return false;
      }
      if (typeof ruleIndex === "number") {
        if (ruleIndex < 0 || ruleConfig.length <= ruleIndex) {
          return false;
        }
      }
      return true;
    }
  };
  class ShortCut {
    /** 存储的键 */
    key = "short-cut";
    /** 配置 */
    $data;
    /** 是否存在等待按下的按键 */
    isWaitPress = false;
    /**
     * 当前等待按下的按键实例
     */
    currentWaitEnterPressInstanceHandler = null;
    constructor(key) {
      if (typeof key === "string") {
        this.key = key;
      }
      this.$data = {
        /**
         * 其它实例的快捷键的配置
         *
         * 这里一般是用于在录入快捷键时判断是否存在重复的快捷键
         */
        otherShortCutOptions: []
      };
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
        return !(option?.value == null);
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
      const that = this;
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
            let result = {};
            try {
              const shortcutJSONString = JSON.stringify(currentOption);
              const allOptions = this.getLocalAllOptions();
              if (Array.isArray(this.$data.otherShortCutOptions)) {
                allOptions.push(...this.$data.otherShortCutOptions);
              }
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
                  result = {
                    status: false,
                    key: localValue.key,
                    option: currentOption
                  };
                  return;
                }
              }
              this.setOption(key, currentOption);
              result = {
                status: true,
                key,
                option: currentOption
              };
            } catch (error) {
              console.log(error);
              result = {
                status: false,
                key,
                option: currentOption
              };
            } finally {
              that.isWaitPress = false;
              keyboardListener.removeListen();
              that.currentWaitEnterPressInstanceHandler = null;
              resolve(result);
            }
          }
        );
        that.currentWaitEnterPressInstanceHandler = null;
        that.currentWaitEnterPressInstanceHandler = () => {
          that.isWaitPress = false;
          keyboardListener.removeListen();
        };
      });
    }
    /**
     * 取消当前的录入快捷键操作
     */
    cancelEnterShortcutKeys() {
      if (typeof this.currentWaitEnterPressInstanceHandler === "function") {
        this.currentWaitEnterPressInstanceHandler();
      }
    }
    /**
     * 初始化全局键盘监听
     * @param shortCutOption 快捷键配置 一般是{ "键名": { callback: ()=>{}}}，键名是本地存储的自定义快捷键的键名
     * @param config 配置
     */
    initGlobalKeyboardListener(shortCutOption, config) {
      let localOptions = this.getLocalAllOptions();
      if (!localOptions.length) {
        log.warn("没有设置快捷键");
        return;
      }
      const that = this;
      function setListenKeyboard($ele, option) {
        domUtils.listenKeyboard(
          $ele,
          "keydown",
          (keyName, keyValue, ohterCodeList, event) => {
            if (that.isWaitPress) {
              return;
            }
            if (config?.isPrevent) {
              utils.preventEvent(event);
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
              if (findShortcut.key in option) {
                log.info(["调用快捷键", findShortcut]);
                option[findShortcut.key].callback();
              }
            }
          },
          {
            capture: Boolean(config?.capture)
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
  const NetDiskShortcut = {
    shortCut: new ShortCut("GM_shortcut"),
    init() {
      this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
    },
    getShortCutMap() {
      return {
        "netdisk-keyboard-open-setting": {
          target: "window",
          callback: () => {
            log.info("快捷键 ==> 【打开】⚙ 设置");
            NetDiskGlobalSettingView.show();
          }
        },
        "netdisk-keyboard-open-history-matching-records": {
          target: "window",
          callback: () => {
            log.info("快捷键 ==> 【打开】⚙ 历史匹配记录");
            NetDiskUI.netDiskHistoryMatch.show();
          }
        },
        "netdisk-keyboard-open-user-rule": {
          target: "window",
          callback: () => {
            log.info("快捷键 ==> 【打开】⚙ 链接识别规则");
            NetDiskUserRuleUI.show(false);
          }
        },
        "netdisk-keyboard-open-proactively-recognize-text": {
          target: "window",
          callback: () => {
            log.info("快捷键 ==> 【打开】⚙ 主动识别文本");
            NetDiskUI.matchPasteText.show();
          }
        },
        "netdisk-keyboard-performPageTextMatchingManually": {
          target: "window",
          callback() {
            log.info("快捷键 ==> 执行文本匹配");
            NetDiskWorker.dispatchMonitorDOMChange = true;
          }
        },
        "netdisk-keyboard-character-mapping": {
          target: "window",
          callback() {
            log.info("快捷键 ==> 【打开】⚙ 字符映射规则");
            NetDiskRuleManager.showView("字符映射");
          }
        },
        "netdisk-keyboard-identifyTheSelectedContent": {
          target: "window",
          callback() {
            log.info(`快捷键 ==> 识别选中内容`);
            const { text, html } = NetDiskWorkerUtils.getSelectContent();
            log.info(`选中的内容信息：`, [text, html]);
            NetDiskWorker.postMessage({
              characterMapping: [],
              textList: [text, html],
              matchTextRange: NetDiskGlobalData.match.pageMatchRange.value,
              // 剪贴板匹配的话直接使用全部规则来进行匹配
              matchedRuleOption: NetDisk.$rule.ruleOption,
              startTime: Date.now(),
              from: "ShortCut-Select-Content"
            });
          }
        }
      };
    }
  };
  const UIButtonShortCut = function(text, description, key, defaultValue, defaultButtonText, buttonType = "default", shortCut) {
    let __defaultButtonText = defaultButtonText;
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
        let $click = event.target;
        let $btn = $click.closest(".pops-panel-button")?.querySelector("span");
        if (shortCut.isWaitPress) {
          Qmsg.warning("请先执行当前的录入操作");
          return;
        }
        if (shortCut.hasOptionValue(key)) {
          shortCut.emptyOption(key);
          Qmsg.success("清空快捷键");
        } else {
          let loadingQmsg = Qmsg.loading("请按下快捷键...", {
            showClose: true,
            onClose() {
              shortCut.cancelEnterShortcutKeys();
            }
          });
          let {
            status,
            option,
            key: isUsedKey
          } = await shortCut.enterShortcutKeys(key);
          loadingQmsg.close();
          if (status) {
            log.success(["成功录入快捷键", option]);
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
  const UISelectMultiple = function(text, key, defaultValue, data, changeCallback, description, placeholder = "请至少选择一个选项", selectConfirmDialogDetails) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    let result = {
      text,
      type: "select-multiple",
      description,
      placeholder,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      selectConfirmDialogDetails,
      callback(selectInfo) {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        let value = [];
        selectInfo.forEach((selectedInfo) => {
          value.push(selectedInfo.value);
        });
        log.info(`多选-选择：`, value);
        storageApiValue.set(key, value);
      },
      data: selectData
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "select-multiple",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const PanelUI_allSetting = () => {
    return {
      id: "netdisk-panel-config-all-setting",
      title: "设置",
      headerTitle: "总设置",
      isDefault: true,
      forms: [
        {
          type: "forms",
          text: "",
          forms: [
            {
              type: "deepMenu",
              text: "Toast",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-forms-toast",
                  forms: [
                    UISelect(
                      "位置",
                      NetDiskGlobalData.toast.position.KEY,
                      NetDiskGlobalData.toast.position.default,
                      [
                        {
                          value: "topleft",
                          text: "左上角"
                        },
                        {
                          value: "top",
                          text: "顶部"
                        },
                        {
                          value: "topright",
                          text: "右上角"
                        },
                        {
                          value: "left",
                          text: "左边"
                        },
                        {
                          value: "center",
                          text: "中间"
                        },
                        {
                          value: "right",
                          text: "右边"
                        },
                        {
                          value: "bottomleft",
                          text: "左下角"
                        },
                        {
                          value: "bottom",
                          text: "底部"
                        },
                        {
                          value: "bottomright",
                          text: "右下角"
                        }
                      ],
                      void 0,
                      `Toast显示在九宫格的位置，默认: ${NetDiskGlobalData.toast.position.default}`
                    ),
                    UISelect(
                      "同时最多显示的数量",
                      NetDiskGlobalData.toast.maxnums.KEY,
                      NetDiskGlobalData.toast.maxnums.default,
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
                      `默认: ${NetDiskGlobalData.toast.maxnums.default}`
                    ),
                    UISwitch(
                      "逆序弹出",
                      NetDiskGlobalData.toast.showreverse.KEY,
                      NetDiskGlobalData.toast.showreverse.value,
                      void 0,
                      "默认是自上往下显示Toast，逆序则是自下往上显示Toast"
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "弹窗",
              forms: [
                {
                  className: "netdisk-panel-forms-pops",
                  type: "forms",
                  text: "",
                  forms: [
                    UISelect(
                      "动画",
                      NetDiskGlobalData.pops.popsAnimation.KEY,
                      NetDiskGlobalData.pops.popsAnimation.default,
                      [
                        {
                          value: "",
                          text: "无"
                        },
                        {
                          value: "pops-anim-spread",
                          text: "spread"
                        },
                        {
                          value: "pops-anim-shake",
                          text: "shake"
                        },
                        {
                          value: "pops-anim-rolling-left",
                          text: "rolling-left"
                        },
                        {
                          value: "pops-anim-rolling-right",
                          text: "rolling-right"
                        },
                        {
                          value: "pops-anim-slide-top",
                          text: "slide-top"
                        },
                        {
                          value: "pops-anim-slide-bottom",
                          text: "slide-bottom"
                        },
                        {
                          value: "pops-anim-slide-left",
                          text: "slide-left"
                        },
                        {
                          value: "pops-anim-slide-right",
                          text: "slide-right"
                        },
                        {
                          value: "pops-anim-fadein",
                          text: "fadein"
                        },
                        {
                          value: "pops-anim-fadein-zoom",
                          text: "fadein-zoom"
                        },
                        {
                          value: "pops-anim-fadein-alert",
                          text: "fadein-alert"
                        },
                        {
                          value: "pops-anim-don",
                          text: "don"
                        },
                        {
                          value: "pops-anim-roll",
                          text: "roll"
                        },
                        {
                          value: "pops-anim-sandra",
                          text: "sandra"
                        },
                        {
                          value: "pops-anim-gather",
                          text: "gather"
                        }
                      ],
                      void 0,
                      `显示/关闭的动画效果，默认: ${NetDiskGlobalData.pops.popsAnimation.default}`
                    ),
                    UISwitch(
                      "点击弹窗遮罩层关闭弹窗",
                      NetDiskGlobalData.pops.clickMaskToCloseDialog.KEY,
                      NetDiskGlobalData.pops.clickMaskToCloseDialog.default,
                      void 0,
                      "点击遮罩层触发关闭弹窗事件"
                    ),
                    UISwitch(
                      "窗口拖拽",
                      NetDiskGlobalData.pops.pcDrag.KEY,
                      NetDiskGlobalData.pops.pcDrag.default,
                      void 0,
                      "长按标题栏可拖拽移动弹窗"
                    ),
                    UISwitch(
                      "限制拖拽距离",
                      NetDiskGlobalData.pops.pcDragLimit.KEY,
                      NetDiskGlobalData.pops.pcDragLimit.default,
                      void 0,
                      "只能在浏览器的可视窗口内拖动"
                    ),
                    UISwitch(
                      "亚克力效果",
                      NetDiskGlobalData.pops.popsAcrylic.KEY,
                      NetDiskGlobalData.pops.popsAcrylic.default,
                      void 0,
                      ""
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "文件弹窗",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-forms-pops-folder",
                  forms: [
                    UISelect(
                      "排序名",
                      NetDiskGlobalData.popsFolder["pops-folder-sort-name"].KEY,
                      NetDiskGlobalData.popsFolder["pops-folder-sort-name"].default,
                      [
                        {
                          value: "fileName",
                          text: "文件名"
                        },
                        {
                          value: "latestTime",
                          text: "修改时间"
                        },
                        {
                          value: "fileSize",
                          text: "大小"
                        }
                      ],
                      void 0,
                      "当前的规则"
                    ),
                    UISelect(
                      "排序规则",
                      NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].KEY,
                      NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].default,
                      [
                        {
                          value: false,
                          text: "升序"
                        },
                        {
                          value: true,
                          text: "降序"
                        }
                      ],
                      void 0,
                      "当前的规则"
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "悬浮按钮",
              forms: [
                {
                  type: "forms",
                  text: "",
                  forms: [
                    UISlider(
                      "大小",
                      NetDiskGlobalData.suspension.size.KEY,
                      NetDiskGlobalData.suspension.size.default,
                      15,
                      250,
                      (event, value) => {
                        NetDiskGlobalData.suspension.size.value = parseInt(
                          value.toString()
                        );
                        if (NetDiskUI.suspension.isShow) {
                          DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
                            width: NetDiskGlobalData.suspension.size.value,
                            height: NetDiskGlobalData.suspension.size.value
                          });
                          NetDiskUI.suspension.setSuspensionPosition();
                        }
                      },
                      (value) => {
                        return `${value}px`;
                      },
                      "悬浮按钮的大小，默认: " + NetDiskGlobalData.suspension.size.default
                    ),
                    UISlider(
                      "透明度",
                      NetDiskGlobalData.suspension.opacity.KEY,
                      NetDiskGlobalData.suspension.opacity.default,
                      0.1,
                      1,
                      (event, value) => {
                        NetDiskGlobalData.suspension.opacity.value = parseFloat(
                          value.toString()
                        );
                        if (NetDiskUI.suspension.isShow) {
                          DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
                            opacity: NetDiskGlobalData.suspension.opacity.value
                          });
                        }
                      },
                      void 0,
                      "值越小越透明，默认: " + NetDiskGlobalData.suspension.opacity.default,
                      0.1
                    ),
                    UISlider(
                      "背景轮播时间",
                      NetDiskGlobalData.suspension["randbg-time"].KEY,
                      NetDiskGlobalData.suspension["randbg-time"].default,
                      0,
                      1e4,
                      void 0,
                      (value) => {
                        return `${value}ms`;
                      },
                      "淡入/淡出的时间，默认: " + NetDiskGlobalData.suspension["randbg-time"].default + "ms",
                      100
                    ),
                    UISlider(
                      "背景显示时间",
                      NetDiskGlobalData.suspension["randbg-show-time"].KEY,
                      NetDiskGlobalData.suspension["randbg-show-time"].default,
                      0,
                      1e4,
                      void 0,
                      (value) => {
                        return `${value}ms`;
                      },
                      "图标显示的持续时间，默认: 1200",
                      100
                    ),
                    UISwitch(
                      "吸附边缘",
                      NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].KEY,
                      NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].default,
                      void 0,
                      "移动悬浮按钮松开后自动吸附边缘"
                    ),
                    UIInput(
                      "z-index",
                      NetDiskGlobalData.suspension["suspended-z-index"].KEY,
                      NetDiskGlobalData.suspension["suspended-z-index"].default,
                      "值小于等于0则为动态获取z-index",
                      (event, value, valueAsNumber) => {
                        NetDiskGlobalData.suspension["suspended-z-index"].value = valueAsNumber;
                        return true;
                      },
                      "",
                      true
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "大/小链接弹窗",
              forms: [
                {
                  type: "forms",
                  text: "小窗",
                  className: "netdisk-panel-forms-small-window",
                  forms: [
                    UISlider(
                      "宽度",
                      NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"].KEY,
                      NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"].default,
                      50,
                      DOMUtils.width(window),
                      void 0,
                      (value) => {
                        return `${value}px`;
                      },
                      "设置小窗宽度(px)，默认: 250",
                      1
                    ),
                    UISlider(
                      "高度",
                      NetDiskGlobalData.smallWindow["netdisk-ui-small-window-max-height"].KEY,
                      NetDiskGlobalData.smallWindow["netdisk-ui-small-window-max-height"].default,
                      50,
                      DOMUtils.height(window),
                      void 0,
                      (value) => {
                        return `${value}px`;
                      },
                      "设置小窗最大高度(px)，默认: " + NetDiskGlobalData.smallWindow["netdisk-ui-small-window-max-height"].default,
                      1
                    )
                  ]
                },
                {
                  type: "forms",
                  text: "",
                  forms: [
                    UIInput(
                      "z-index",
                      NetDiskGlobalData.smallWindow["netdisk-link-view-z-index"].KEY,
                      NetDiskGlobalData.smallWindow["netdisk-link-view-z-index"].default,
                      "值小于等于0则为动态获取z-index",
                      (event, value, valueAsNumber) => {
                        NetDiskGlobalData.smallWindow["netdisk-link-view-z-index"].value = valueAsNumber;
                        return true;
                      },
                      "",
                      true
                    )
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "forms",
          text: "",
          forms: [
            {
              type: "deepMenu",
              text: "功能",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-forms-function",
                  forms: [
                    UISelect(
                      "匹配模式",
                      NetDiskGlobalData.features["netdisk-match-mode"].KEY,
                      NetDiskGlobalData.features["netdisk-match-mode"].default,
                      [
                        {
                          text: "MutationObserver",
                          value: "MutationObserver"
                        },
                        {
                          text: "Menu",
                          value: "Menu"
                        }
                      ],
                      void 0,
                      "MutationObserver是自动监听并识别链接<br>Menu是手动点击油猴菜单进行识别"
                    ),
                    UISelect(
                      "行为模式",
                      NetDiskGlobalData.features["netdisk-behavior-mode"].KEY,
                      NetDiskGlobalData.features["netdisk-behavior-mode"].default,
                      [
                        {
                          text: "悬浮按钮+小窗",
                          value: "suspension_smallwindow"
                        },
                        {
                          text: "悬浮按钮+大窗",
                          value: "suspension_window"
                        },
                        {
                          text: "小窗",
                          value: "smallwindow"
                        }
                      ],
                      void 0,
                      "匹配到链接时触发的UI执行"
                    ),
                    UISwitch(
                      "自动填充访问码",
                      NetDiskGlobalData.features.autoFillAccessCode.KEY,
                      NetDiskGlobalData.features.autoFillAccessCode.default,
                      void 0,
                      "通过主动点击链接跳转时，会自动输入网盘访问码"
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "匹配设置",
              forms: [
                {
                  type: "forms",
                  text: "文本匹配范围",
                  forms: [
                    UISelectMultiple(
                      "匹配规则类型",
                      NetDiskGlobalData.match.pageMatchRange.KEY,
                      NetDiskGlobalData.match.pageMatchRange.default,
                      [
                        {
                          value: "innerText",
                          text: "普通文本"
                        },
                        {
                          value: "innerHTML",
                          text: "超文本"
                        }
                      ],
                      void 0,
                      "执行的文本匹配规则",
                      void 0,
                      {
                        height: "auto"
                      }
                    ),
                    UISwitch(
                      "深入ShadowRoot获取匹配文本",
                      NetDiskGlobalData.match.depthQueryWithShadowRoot.KEY,
                      NetDiskGlobalData.match.depthQueryWithShadowRoot.default,
                      void 0,
                      "遍历ShadowRoot，获取匹配的内容"
                    ),
                    UISwitch(
                      "匹配剪贴板",
                      NetDiskGlobalData.match.readClipboard.KEY,
                      NetDiskGlobalData.match.readClipboard.default,
                      void 0,
                      "Api兼容性查看：<a href='https://caniuse.com/mdn-api_permissions_permission_clipboard-read' target='_blank'>读取剪贴板权限申请</a>、<a href='https://caniuse.com/mdn-api_clipboard_readtext' target='_blank'>直接读取剪贴板</a>"
                    ),
                    UISwitch(
                      "匹配当前URL",
                      NetDiskGlobalData.match.allowMatchLocationHref.KEY,
                      NetDiskGlobalData.match.allowMatchLocationHref.default,
                      void 0,
                      "提取<code>window.location.href</code>进行匹配"
                    ),
                    UISwitch(
                      "匹配input标签的内容",
                      NetDiskGlobalData.match.toBeMatchedWithInputElementValue.KEY,
                      NetDiskGlobalData.match.toBeMatchedWithInputElementValue.default,
                      void 0,
                      "提取页面中的<code>&lt;input&gt;</code>的内容进行匹配"
                    ),
                    UISwitch(
                      "匹配textarea标签的内容",
                      NetDiskGlobalData.match.toBeMatchedTextAreaElementValue.KEY,
                      NetDiskGlobalData.match.toBeMatchedTextAreaElementValue.default,
                      void 0,
                      "提取页面中的<code>&lt;textarea&gt;</code>的内容进行匹配"
                    ),
                    UISwitch(
                      "匹配网络请求的内容",
                      NetDiskGlobalData.match.toBeMatchedXhrHookResponseText.KEY,
                      NetDiskGlobalData.match.toBeMatchedXhrHookResponseText.default,
                      void 0,
                      "劫持xhr请求并对请求的内容进行匹配，注意：该功能可能会导致页面的部分功能异常，请谨慎使用"
                    )
                  ]
                },
                {
                  type: "forms",
                  text: "MutationObserver观察器",
                  forms: [
                    UISlider(
                      "匹配间隔",
                      NetDiskGlobalData.match.delaytime.KEY,
                      NetDiskGlobalData.match.delaytime.default,
                      0,
                      5,
                      void 0,
                      (value) => {
                        return `${value}s`;
                      },
                      "匹配文本完毕后的延迟xxx秒允许下一次匹配",
                      0.1
                    ),
                    UISwitch(
                      "添加元素时进行匹配",
                      NetDiskGlobalData.match.isAddedNodesToMatch.KEY,
                      NetDiskGlobalData.match.isAddedNodesToMatch.default,
                      void 0,
                      "当监听到页面添加元素时才进行匹配文本"
                    ),
                    UISwitch(
                      "观察器：childList",
                      NetDiskGlobalData.match["mutationObserver-childList"].KEY,
                      NetDiskGlobalData.match["mutationObserver-childList"].default,
                      void 0,
                      "子节点的变动（新增、删除或者更改）"
                    ),
                    UISwitch(
                      "观察器：characterData",
                      NetDiskGlobalData.match["mutationObserver-characterData"].KEY,
                      NetDiskGlobalData.match["mutationObserver-characterData"].default,
                      void 0,
                      "节点内容或节点文本的变动"
                    ),
                    UISwitch(
                      "观察器：subtree",
                      NetDiskGlobalData.match["mutationObserver-subtree"].KEY,
                      NetDiskGlobalData.match["mutationObserver-subtree"].default,
                      void 0,
                      "是否将观察器应用于该节点的所有后代节点"
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "网盘图标",
              forms: [
                {
                  type: "forms",
                  text: "",
                  forms: [
                    UISwitch(
                      "点击定位分享码",
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode"].KEY,
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode"].default,
                      void 0,
                      "自动滚动页面至包含分享码的元素"
                    ),
                    UISwitch(
                      "选中分享码",
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].KEY,
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].default,
                      void 0,
                      "使用光标选中分享码/元素"
                    ),
                    UISwitch(
                      "循环定位",
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].KEY,
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].default,
                      void 0,
                      "关闭则是每一个元素只定位一次"
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "历史匹配记录",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-history-match",
                  forms: [
                    UISwitch(
                      "保存匹配记录",
                      NetDiskGlobalData.historyMatch.saveMatchNetDisk.KEY,
                      NetDiskGlobalData.historyMatch.saveMatchNetDisk.default,
                      void 0,
                      "将匹配到的链接信息进行本地存储，可点击【油猴菜单-⚙ 历史匹配记录】进行查看"
                    ),
                    UISwitch(
                      "合并相同链接",
                      NetDiskGlobalData.historyMatch["netdisk-history-match-merge-same-link"].KEY,
                      NetDiskGlobalData.historyMatch["netdisk-history-match-merge-same-link"].default,
                      void 0,
                      "将合并匹配到的相同链接，并更新它最后一次匹配到的更新时间、网址信息"
                    ),
                    UISelect(
                      "排序规则",
                      NetDiskGlobalData.historyMatch["netdisk-history-match-ordering-rule"].KEY,
                      NetDiskGlobalData.historyMatch["netdisk-history-match-ordering-rule"].default,
                      [
                        {
                          value: "按 记录时间 - 升序",
                          text: "按 记录时间 - 升序"
                        },
                        {
                          value: "按 记录时间 - 降序",
                          text: "按 记录时间 - 降序"
                        },
                        {
                          value: "按 更新时间 - 升序",
                          text: "按 更新时间 - 升序"
                        },
                        {
                          value: "按 更新时间 - 降序",
                          text: "按 更新时间 - 降序"
                        }
                      ]
                    ),
                    UIButton(
                      "修复存储记录",
                      "如果【匹配记录】弹窗打不开，可能是存储的数据缺失某些字段，可尝试点击此处进行修复",
                      "修复",
                      void 0,
                      void 0,
                      false,
                      "primary",
                      (event) => {
                        utils.preventEvent(event);
                        try {
                          const { count, repairCount } = NetDiskUI.netDiskHistoryMatch.checkAndRepairLocalData();
                          if (repairCount === 0) {
                            Qmsg.info(`不存在需要修复的数据`);
                          } else {
                            Qmsg.success(
                              `共计: ${count} 条，修复${repairCount}条`
                            );
                          }
                        } catch (error) {
                          Qmsg.error("修复异常：" + error.toString());
                        }
                      }
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "分享码",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-forms-share-code",
                  forms: [
                    UISwitch(
                      "排除分享码",
                      NetDiskGlobalData.shareCode.excludeIdenticalSharedCodes.KEY,
                      NetDiskGlobalData.shareCode.excludeIdenticalSharedCodes.default,
                      void 0,
                      "启用后会根据【相同系数】排除掉匹配到的分享码"
                    ),
                    UISlider(
                      "相同系数",
                      NetDiskGlobalData.shareCode.excludeIdenticalSharedCodesCoefficient.KEY,
                      NetDiskGlobalData.shareCode.excludeIdenticalSharedCodesCoefficient.default,
                      0,
                      1,
                      void 0,
                      (value) => {
                        return value.toString();
                      },
                      "例如分享码: aaaaaaaabb，它的相同系数是0.8，设置相同系数≥0.8时会被排除",
                      0.01
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              text: "访问码",
              forms: [
                {
                  className: "netdisk-panel-forms-access-code",
                  text: "",
                  type: "forms",
                  forms: [
                    UISwitch(
                      "允许查询历史匹配记录",
                      NetDiskGlobalData.accessCode.allowQueryHistoryMatchingAccessCode.KEY,
                      NetDiskGlobalData.accessCode.allowQueryHistoryMatchingAccessCode.default,
                      void 0,
                      "当访问码为空时，访问码将从历史匹配记录中查询，优先级：页面匹配 < 历史匹配记录 < 网站规则 < 黑名单"
                    )
                  ]
                }
              ]
            },
            {
              type: "deepMenu",
              className: "netdisk-panel-forms-shortcut-keys-deepMenu",
              text: "快捷键",
              forms: [
                {
                  className: "netdisk-panel-forms-shortcut-keys",
                  text: "",
                  type: "forms",
                  forms: [
                    UIButtonShortCut(
                      "【打开】⚙ 设置",
                      "",
                      "netdisk-keyboard-open-setting",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    ),
                    UIButtonShortCut(
                      "【打开】⚙ 历史匹配记录",
                      "",
                      "netdisk-keyboard-open-history-matching-records",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    ),
                    UIButtonShortCut(
                      "【打开】⚙ 访问码规则",
                      "",
                      "netdisk-keyboard-open-accesscode-rule",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    ),
                    UIButtonShortCut(
                      "【打开】⚙ 添加链接识别规则",
                      "",
                      "netdisk-keyboard-open-user-rule",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    ),
                    UIButtonShortCut(
                      "【打开】⚙ 网站规则",
                      "",
                      "netdisk-keyboard-website-rule",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    ),
                    UIButtonShortCut(
                      "【打开】⚙ 字符映射规则",
                      "",
                      "netdisk-keyboard-character-mapping",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    ),
                    UIButtonShortCut(
                      "【打开】⚙ 识别文本",
                      "",
                      "netdisk-keyboard-open-proactively-recognize-text",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    ),
                    UIButtonShortCut(
                      "执行文本匹配",
                      "",
                      "netdisk-keyboard-performPageTextMatchingManually",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    ),
                    UIButtonShortCut(
                      "识别选中内容",
                      "",
                      "netdisk-keyboard-identifyTheSelectedContent",
                      void 0,
                      "暂无快捷键",
                      "default",
                      NetDiskShortcut.shortCut
                    )
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  };
  try {
    let GLOBAL_RESOURCE_ICON = RESOURCE_ICON ?? {};
    if (false) ;
    Object.assign(NetDiskUI.src.icon, GLOBAL_RESOURCE_ICON);
  } catch (error) {
    console.error("init NetDisk icon error", error);
  }
  [
    "input",
    "select-multiple",
    "select",
    "slider",
    "switch",
    "textarea"
  ].forEach((type) => {
    PanelComponents.setStorageApi(type, {
      get(key, defaultValue) {
        return _GM_getValue(key, defaultValue);
      },
      set(key, value) {
        _GM_setValue(key, value);
      }
    });
  });
  WebsiteRule.init();
  NetDiskUserRule.init();
  NetDiskRule.init();
  PanelContent.addContentConfig([PanelUI_allSetting()]);
  PanelContent.addContentConfig(NetDiskRule.getRulePanelContent());
  let settingMenu = PanelMenu.getMenuOption(0);
  settingMenu.callback = () => {
    NetDiskGlobalSettingView.show();
  };
  PanelMenu.updateMenuOption(settingMenu);
  PanelMenu.addMenuOption([
    {
      key: "showNetDiskHistoryMatch",
      text: "⚙ 历史匹配记录",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        NetDiskUI.netDiskHistoryMatch.show();
      }
    },
    {
      key: "ruleManager",
      text: "⚙ 规则管理器",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        NetDiskRuleManager.showView();
      }
    },
    {
      key: "showUserRule",
      text: "⚙ 添加链接识别规则",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        NetDiskUserRuleUI.show(false);
      }
    },
    {
      key: "showMatchPasteText",
      text: "⚙ 识别文本",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        NetDiskUI.matchPasteText.show();
      }
    }
  ]);
  Panel.init();
  NetDisk.init();
  NetDiskShortcut.init();
  domUtils.ready(() => {
    NetDiskAutoFillAccessCode.init();
    NetDiskAuthorization.init();
    NetDiskWorker.init();
    NetDiskRuleManager.init();
  });

})(Qmsg, DOMUtils, Utils, pops, CryptoJS);