// ==UserScript==
// @name         网盘链接识别
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.10.18
// @author       WhiteSevs
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、坚果云、UC网盘、BT磁力、360云盘，支持蓝奏云、天翼云(需登录)、123盘、奶牛、UC网盘(需登录)、坚果云(需登录)和阿里云盘(需登录，且限制在网盘页面解析)直链获取下载，页面动态监控加载的链接，可自定义规则来识别小众网盘/网赚网盘或其它自定义的链接。
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACsJJREFUeF7tXW+IHdUVP2c2u8kHIQYL0TRIaK1SgrFFaZsvVkpAo6YR1LJpa9jUd++83SUpSrUNBFRCrVgxNOv+mTOvJBBNmtpamoQG9UNBKLHFDzEtFttKBdOYQENE/Lb75vZd2cVNum/uvXNnZt/MnoGQD+/c8+d3fu+c+2f2PgR+ljQCuKSj5+CBCbDEScAEYAIscQSWePhcAZgASxyBJR4+VwAmQHEIjIyM3DAzM/M1pdSXEfEWALgVANbkaPE0ABwhomdz1GmtSgixHxF3Wg8wC55HxPeVUu8DgP7/jRUrVvxpbGzsY/PQbBK5VwCd9Ha7vVkptRkA9L8yHiKisAxDczaklL8GgAfLsImIryql3gSAqBPnh3nazI0AjUZjbRAEjwLAI3k6aKtLKbUjjuODtvI+cs1m894kSY776Mg49hwAxHkSIRcCSCl10nXy12YMLI9hrxDR/XkoMukQQrQQ8WGTXIGfn0PEZ6IoGvO14U0AKeUJALjH15Ecxr9ARHn2464uCSEOI+K2HHz2VXGUiAZ9lHgRQEp5BgBu9nEgr7FBEGyZmprSZCz8EUIMIuKRwg3ZGfiAiK63E/1/qcwEkFJ+BAArsxrOedzLRPSdnHWmqgvD8EBntj5Ups0UWxeI6NosvmQigBDibUTckMVgAWNKXwHMxSClfBwAtgPA+gLiclX5GhHd6TrImQBhGO5RSu11MHQREY8nSXICEf/R399/bnx8/KLD+CUl2plf3BgEwa1JktyOiN8HgKscAHCuhE4EaDabQ0mSHLBxSCml5weHlFKHWq3WBZsxLHM5AlLKLwLAQwCwCwBWWeLzKBHts5S1fx9ASnkdALxluZPXIiJh6wTLpSMwPDx8U7vd/iEADFtgdTZJko2tVuushawTAZ4EgCdMSpVSW+M4PmaS48/dEZBSWuWgMznfR0R6X8b4WLUA228/Ig5GUXTUaJUFMiMghNiEiK+bFCxbtuxLExMT/zLJ2RLAhnmTRDRiMsif+yMQhuFupdTTaZoQcZfNTqEVAYQQf0TEO1IMXurr69s4OTn5rn94rMEGAYul+Ekiutuky0iAoaGhqwcGBi4ZFD1FRLpK8FMSAkKIHyHiz9PM2bQBIwGklPcBwO9SDH0CAF8hovdKip3NAECj0VgdBMHf05aHSqntcRwfSm0VJjSllD8DgJ90k1NKTcVxbLM8MZnizx0RkFL+BgC6noAi4nNRFD3mSwB96NH1xKnMc3hHfGovbnEoZdweNraAMAxPKaW+0Q1NRFwfRdE7tUe7BwOUUuqTWL3j2u0xHhIZCSCl1K8gdT1pIiKjjh7ErhYujY6OXjM9Pf3ftGBM+TEmT0qpfAzUAukeDsI3P0yAHk6ujWtMABuUaizDBKhxcm1CYwLYoFRjGSZAjZNrExoTwAalGsswAWqcXJvQmAA2KNVYhglQ4+TahMYEsEGpxjK1IYCU8vcAcJvlW8dVTqn+C9+3iGhrHkHUggCmIPIAqhd1mA5qbHw2YWeysehnAWVetGADaMkyzn/Jc6V/dSDAeQBYXTLwvWLOeF5vcrQOBEg9bjYBUPXPTSXaFB8TwIRQj3/OBDC8cNLj+fN2r+oEOE1EX/VBwVTCfHRXYWzBBDDmx7gKMNyF92PfO/pMBPAFKO9Zsyupio7PNz9GAuiAuyzVcrmZo2iA6k4A3/xYEUAb0Xfjtdvt+xBxlVLqeF538jEB8nmrOmt+rAngWvps5ZkA+RDAFu8r5XqBAP9J2f8/R0SfzxrcQuMWgXClxueKVS8QQB8CfbuL48fyOjSZ078IBCg1vsoRYHYSs+BuYN4rgDRbc8CVabMIW5UkwLyZ7O2zAbxR1MWPZVeAeZVH3y5eeHyVJYCr41nlF4sAWf0tetyizwGKDnCx9wHKjs/VHhPgCsR6oS+7JtFHngnABPDhT/XG8hzg8pxxBeAKUL1vsY/HXAG4AvCNJ/M4wC2AW4BPQa3eWG4B3AK4BXAL6F65eCOoelXdyWNuAdwCuAVwC+AWMIcALwN5GejUQisvzHMAngPwHIDnADwH4DlAFw7wPkDlu3x6ADwHyDgHCMPwLqXUJgCYDoLgpampqb9VkSt1JUDW/FgtA6WUvwSAH1yR8Bc7vxSmf9i4Uk8dCeCTHyMBDL8a9j0iOlwlBtSNAL75sSGA/v1Z/TPmCz3/JqIvMAEWDwEppVd+bAhQq3VzDSuAV36YABXfCvYlNBOACbC01s2+35jF6/YLW/aNhysAVwCuAPMRqNpWMFcAx5rsC5ijucLFfePhFsAtgFsAt4AUDviWmMJroKMBjsfxNJABc2RYyeK++VmKc4CevrfPlT9MAEfEZn+cqrR7CR3dcxZnAjhD9unl16XdS5jBPachTAAnuD4Tnr0Bvefu7XMNhwngiljN5JkANUuoazhMAFfEaia/6ATo7+//3Pj4+MWa4VqZcAwEOE9E16UFY7MPkLZu1ro3ENFfK4NYjRwVQtyIiO92CwkR34yiaKMvAY4BwJZuSpRSD8Rx/Nsa4VqZUMIw3KaUSnsr+1dEtM2LAEKIvYi4J4VlB6Mo2lEZ1GrkqBBiEhGbKSE9Q0S7vQggpfwuALyUouRikiTrW63WhRph2/OhSCn1q/qnAeCqlOp8dxzHJ70IMDIycsPMzMw/05QopR6L4/i5nketRg5KKZ8EgCfSQlq+fPnKsbGxj70IoAdLKf8AAJtTmHYmjuNbaoRvT4cyPDx8U7vdPgUAq1Ja86tRFN1lCsS4CtAKwjDcqZTab1DWIiJhMsif+yMgpZwAgGGDpqeISFeJ1MeKADZtQFtRSm2N41ivGvgpCAGb0t8p2ucA4DYi+tDkhhUBZtvA8wDwiFEh4mAURUdNcvy5OwJCiE2I+LrFSKtvv9ZjTYBGo7E2CALdd9ZaODDZ19f3i8nJya6bFBY6WGQeAmEY7lZKPW0BivW334kAs1VAVwBdCWyeSwCg5w2HOvcIvGczgGUuR6DRaKxGRH0Hw0OIuMEGH0TcFUXRmI2sMwFmSXACAO6xNQAAnyilXuysIv4cBMFfoih6x2HskhIdHR29Znp6eo1Saj0iPgAA30qb6S8AzlEiGnQBzboFzFcqpTwDADe7GCpIVm+EHCGiZwvSn6pWCLEfEXcuhu0FbH5ARNe7+pKJALOV4CMAWOlqsCB56sx4w4J0L6h29o2iB8u0mWLrAhFdm8WXzATQxoQQb9v2pizOuYxRSu2I4/igy5isss1m894kSY5nHZ/zuNeI6M6sOr0IoI2GYbhHKbU3qwM5jnulcyx9f476uqoSQrQQ8eEybBlsvOz7G8veBNAONpvNoSRJfgoAaxYRlBeIqJR+3DmHP9w5h089Zi0Yh7N6NUZE+3zt5EKA2TmBfvNE92G9HVw6EYIg2DI1NaVXKIU/QohBRDxSuKGFDexLkuT5VqulSeD95EaAOU+klJ8SQSn1TUS8w9tDOwXepdDOzGdSYRgeUEoNuY7LKH8SEU/29fWdnJiY0LeC5fbkToD5ng0NDV09MDCgSfB1AFiHiOuUUusAINOMtUvUpa8A5pH9cQDYDgDrc8sIgH6vQk+uzyRJcqa/v/9U3kmf72uhBMgRFFZVEAJMgIKArYpaJkBVMlWQn0yAgoCtilomQFUyVZCfTICCgK2KWiZAVTJVkJ9MgIKArYra/wGYigzMiqJYZwAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@c90210bf4ab902dbceb9c6e5b101b1ea91c34581/scripts-vite/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.5.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/data-paging@0.0.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.5.0/dist/index.umd.js
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

(function (Qmsg, DOMUtils, Utils, pops, CryptoJS, DataPaging) {
  "use strict";

  var _GM_deleteValue = (() => (typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0))();
  var _GM_download = (() => (typeof GM_download != "undefined" ? GM_download : void 0))();
  var _GM_getResourceText = (() => (typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0))();
  var _GM_getValue = (() => (typeof GM_getValue != "undefined" ? GM_getValue : void 0))();
  var _GM_info = (() => (typeof GM_info != "undefined" ? GM_info : void 0))();
  var _GM_openInTab = (() => (typeof GM_openInTab != "undefined" ? GM_openInTab : void 0))();
  var _GM_registerMenuCommand = (() =>
    typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = (() => (typeof GM_setValue != "undefined" ? GM_setValue : void 0))();
  var _GM_unregisterMenuCommand = (() =>
    typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = (() => (typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0))();
  var _unsafeWindow = (() => (typeof unsafeWindow != "undefined" ? unsafeWindow : void 0))();
  var _monkeyWindow = (() => window)();
  const CommonUtil = {
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") {
          return;
        }
        DOMUtils.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
      });
    },
    createBlockCSSNode(...args) {
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
      return DOMUtils.createElement("style", {
        type: "text/css",
        innerHTML: `${selectorList.join(",\n")}{display: none !important;}`,
      });
    },
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
    setGMResourceCSS(resourceMapData) {
      const cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
      if (typeof cssText === "string" && cssText) {
        return addStyle(cssText);
      } else {
        return CommonUtil.loadStyleLink(resourceMapData.url);
      }
    },
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      return new Promise((resolve) => {
        DOMUtils.ready(() => {
          document.head.appendChild($link);
          resolve($link);
        });
      });
    },
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
    fixUrl(url) {
      url = url.trim();
      if (url.startsWith("data:")) {
        return url;
      }
      if (url.match(/^http(s|):\/\//i)) {
        return url;
      } else if (url.startsWith("//")) {
        if (url.startsWith("///"));
        else {
          url = window.location.protocol + url;
        }
        return url;
      } else {
        if (!url.startsWith("/")) {
          url += "/";
        }
        url = window.location.origin + url;
        return url;
      }
    },
    fixHttps(url) {
      if (url.startsWith("https://")) {
        return url;
      }
      if (!url.startsWith("http://")) {
        return url;
      }
      try {
        let urlInstance = new URL(url);
        urlInstance.protocol = "https:";
        return urlInstance.toString();
      } catch {
        return url;
      }
    },
    lockScroll(...args) {
      let $hidden = document.createElement("style");
      $hidden.innerHTML = `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
      let $elList = [document.documentElement, document.body].concat(...(args || []));
      $elList.forEach(($el) => {
        $el.classList.add("pops-overflow-hidden-important");
      });
      (document.head || document.documentElement).appendChild($hidden);
      return {
        recovery() {
          $elList.forEach(($el) => {
            $el.classList.remove("pops-overflow-hidden-important");
          });
          $hidden.remove();
        },
      };
    },
    async getClipboardText() {
      function readClipboardText(resolve) {
        navigator.clipboard
          .readText()
          .then((clipboardText) => {
            resolve(clipboardText);
          })
          .catch((error) => {
            log.error("读取剪贴板内容失败👉", error);
            resolve("");
          });
      }
      function requestPermissionsWithClipboard(resolve) {
        navigator.permissions
          .query({
            name: "clipboard-read",
          })
          .then((permissionStatus) => {
            readClipboardText(resolve);
          })
          .catch((error) => {
            log.error("申请剪贴板权限失败，尝试直接读取👉", error.message ?? error.name ?? error.stack);
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
              once: true,
            }
          );
        }
      });
    },
    escapeHtml(unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/©/g, "&copy;")
        .replace(/®/g, "&reg;")
        .replace(/™/g, "&trade;")
        .replace(/→/g, "&rarr;")
        .replace(/←/g, "&larr;")
        .replace(/↑/g, "&uarr;")
        .replace(/↓/g, "&darr;")
        .replace(/—/g, "&mdash;")
        .replace(/–/g, "&ndash;")
        .replace(/…/g, "&hellip;")
        .replace(/ /g, "&nbsp;")
        .replace(/\r\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\n/g, "<br>")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    },
    interval(fn, intervalTime, timeout = 5e3) {
      let timeId;
      let maxTimeout = timeout - intervalTime;
      let intervalTimeCount = intervalTime;
      let loop = async (isTimeout) => {
        let result = await fn(isTimeout);
        if ((typeof result === "boolean" && !result) || isTimeout) {
          utils.workerClearTimeout(timeId);
          return;
        }
        intervalTimeCount += intervalTime;
        if (intervalTimeCount > maxTimeout) {
          loop(true);
          return;
        }
        timeId = utils.workerSetTimeout(() => {
          loop(false);
        }, intervalTime);
      };
      loop(false);
    },
    findParentNode($el, selector, parentSelector) {
      if (parentSelector) {
        let $parent = DOMUtils.closest($el, parentSelector);
        if ($parent) {
          let $target = $parent.querySelector(selector);
          return $target;
        }
      } else {
        if (DOMUtils.matches($el, selector)) {
          return $el;
        }
        let $parent = DOMUtils.closest($el, selector);
        return $parent;
      }
    },
  };
  const PanelSettingConfig = {
    qmsg_config_position: {
      key: "qmsg-config-position",
      defaultValue: "bottom",
    },
    qmsg_config_maxnums: {
      key: "qmsg-config-maxnums",
      defaultValue: 3,
    },
    qmsg_config_showreverse: {
      key: "qmsg-config-showreverse",
      defaultValue: false,
    },
  };
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops = pops;
  const log = new utils.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  let SCRIPT_NAME = _GM_info?.script?.name || void 0;
  const AnyTouch = pops.config.Utils.AnyTouch();
  const DEBUG = false;
  log.config({
    debug: false,
    logMaxCount: 250,
    autoClearConsole: true,
    tag: true,
  });
  Qmsg.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(qmsgInst) {
      const qmsgType = qmsgInst.getSetting().type;
      if (qmsgType === "loading") {
        return false;
      }
      const content = qmsgInst.getSetting().content;
      if (qmsgType === "warning") {
        log.warn(content);
      } else if (qmsgType === "error") {
        log.error(content);
      } else {
        log.info(content);
      }
      return true;
    },
    get position() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_position.key,
        PanelSettingConfig.qmsg_config_position.defaultValue
      );
    },
    get maxNums() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_maxnums.key,
        PanelSettingConfig.qmsg_config_maxnums.defaultValue
      );
    },
    get showReverse() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_showreverse.key,
        PanelSettingConfig.qmsg_config_showreverse.defaultValue
      );
    },
    get zIndex() {
      let maxZIndex = Utils.getMaxZIndex();
      let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
    },
  });
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
      enable: true,
      clickEvent: {
        toClose: false,
        toHide: false,
      },
    },
    drag: true,
  });
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand,
  });
  const httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: DEBUG,
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
      defineProperty: _unsafeWindow.Object.defineProperty,
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call,
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild,
    },
    setTimeout: _unsafeWindow.setTimeout,
  });
  const addStyle = domUtils.addStyle.bind(domUtils);
  const $ = DOMUtils.selector.bind(DOMUtils);
  const $$ = DOMUtils.selectorAll.bind(DOMUtils);
  new utils.GM_Cookie();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const PROPS_STORAGE_API = "data-storage-api";
  const PanelSizeUtil = {
    get width() {
      return globalThis.innerWidth;
    },
    get height() {
      return globalThis.innerHeight;
    },
  };
  const PanelUISize = {
    setting: {
      get width() {
        if (PanelSizeUtil.width < 550) {
          return "88vw";
        } else if (PanelSizeUtil.width < 700) {
          return "550px";
        } else {
          return "700px";
        }
      },
      get height() {
        if (PanelSizeUtil.height < 450) {
          return "70vh";
        } else if (PanelSizeUtil.height < 550) {
          return "450px";
        } else {
          return "550px";
        }
      },
    },
    settingMiddle: {
      get width() {
        return PanelSizeUtil.width < 350 ? "88vw" : "350px";
      },
      get height() {
        return PanelSizeUtil.height < 450 ? "88vh" : "450px";
      },
    },
    settingBig: {
      get width() {
        return PanelSizeUtil.width < 800 ? "92vw" : "800px";
      },
      get height() {
        return PanelSizeUtil.height < 600 ? "80vh" : "600px";
      },
    },
    info: {
      get width() {
        return PanelSizeUtil.width < 350 ? "88vw" : "350px";
      },
      get height() {
        return PanelSizeUtil.height < 250 ? "88vh" : "250px";
      },
    },
  };
  class StorageUtils {
    storageKey;
    listenerData;
    constructor(key) {
      if (typeof key === "string") {
        const trimKey = key.trim();
        if (trimKey == "") {
          throw new Error("key参数不能为空字符串");
        }
        this.storageKey = trimKey;
      } else {
        throw new Error("key参数类型错误，必须是字符串");
      }
      this.listenerData = new Utils.Dictionary();
      this.getLocalValue = this.getLocalValue.bind(this);
      this.set = this.set.bind(this);
      this.get = this.get.bind(this);
      this.getAll = this.getAll.bind(this);
      this.delete = this.delete.bind(this);
      this.has = this.has.bind(this);
      this.keys = this.keys.bind(this);
      this.values = this.values.bind(this);
      this.clear = this.clear.bind(this);
      this.addValueChangeListener = this.addValueChangeListener.bind(this);
      this.removeValueChangeListener = this.removeValueChangeListener.bind(this);
      this.triggerValueChangeListener = this.triggerValueChangeListener.bind(this);
    }
    getLocalValue() {
      let localValue = _GM_getValue(this.storageKey);
      if (localValue == null) {
        localValue = {};
        this.setLocalValue(localValue);
      }
      return localValue;
    }
    setLocalValue(value) {
      _GM_setValue(this.storageKey, value);
    }
    set(key, value) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.set(localValue, key, value);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, value);
    }
    get(key, defaultValue) {
      const localValue = this.getLocalValue();
      return Reflect.get(localValue, key) ?? defaultValue;
    }
    getAll() {
      const localValue = this.getLocalValue();
      return localValue;
    }
    delete(key) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.deleteProperty(localValue, key);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, void 0);
    }
    has(key) {
      const localValue = this.getLocalValue();
      return Reflect.has(localValue, key);
    }
    keys() {
      const localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue);
    }
    values() {
      const localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue).map((key) => Reflect.get(localValue, key));
    }
    clear() {
      _GM_deleteValue(this.storageKey);
    }
    addValueChangeListener(key, callback) {
      const listenerId = Math.random();
      const listenerData = this.listenerData.get(key) || [];
      listenerData.push({
        id: listenerId,
        key,
        callback,
      });
      this.listenerData.set(key, listenerData);
      return listenerId;
    }
    removeValueChangeListener(listenerId) {
      let flag = false;
      for (const [key, listenerData] of this.listenerData.entries()) {
        for (let index = 0; index < listenerData.length; index++) {
          const value = listenerData[index];
          if (
            (typeof listenerId === "string" && value.key === listenerId) ||
            (typeof listenerId === "number" && value.id === listenerId)
          ) {
            listenerData.splice(index, 1);
            index--;
            flag = true;
          }
        }
        this.listenerData.set(key, listenerData);
      }
      return flag;
    }
    async triggerValueChangeListener(...args) {
      const [key, oldValue, newValue] = args;
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
          if (typeof oldValue !== "undefined" && args.length >= 2) {
            __oldValue = oldValue;
          } else {
            __oldValue = value;
          }
          if (typeof newValue !== "undefined" && args.length > 2) {
            __newValue = newValue;
          } else {
            __newValue = value;
          }
          await data.callback(key, __oldValue, __newValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
  const PanelContent = {
    $data: {
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) {
          this.__contentConfig = new utils.Dictionary();
        }
        return this.__contentConfig;
      },
      __defaultBottomContentConfig: [],
    },
    addContentConfig(configList) {
      if (!Array.isArray(configList)) {
        configList = [configList];
      }
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    getDefaultBottomContentConfig() {
      if (this.$data.__defaultBottomContentConfig.length) {
        return this.$data.__defaultBottomContentConfig;
      }
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
          },
        },
      ];
    },
    setDefaultBottomContentConfig(config) {
      this.$data.__defaultBottomContentConfig = config;
    },
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
          },
        },
      ],
      get menuOption() {
        return this.__menuOption;
      },
    },
    init() {
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (!Panel.isTopWindow()) {
        return;
      }
      GM_Menu.add(this.$data.menuOption);
    },
    addMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      this.$data.menuOption.push(...option);
    },
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
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    },
  };
  const Panel = {
    $data: {
      __contentConfigInitDefaultValue: null,
      __onceExecMenuData: null,
      __urlChangeReloadMenuExecOnce: null,
      __onceExecData: null,
      __panelConfig: {},
      $panel: null,
      panelContent: [],
      get contentConfigInitDefaultValue() {
        if (this.__contentConfigInitDefaultValue == null) {
          this.__contentConfigInitDefaultValue = new utils.Dictionary();
        }
        return this.__contentConfigInitDefaultValue;
      },
      contentConfigInitDisabledKeys: [],
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) {
          this.__onceExecMenuData = new utils.Dictionary();
        }
        return this.__onceExecMenuData;
      },
      get urlChangeReloadMenuExecOnce() {
        if (this.__urlChangeReloadMenuExecOnce == null) {
          this.__urlChangeReloadMenuExecOnce = new utils.Dictionary();
        }
        return this.__urlChangeReloadMenuExecOnce;
      },
      get onceExecData() {
        if (this.__onceExecData == null) {
          this.__onceExecData = new utils.Dictionary();
        }
        return this.__onceExecData;
      },
      get scriptName() {
        return SCRIPT_NAME;
      },
      get panelConfig() {
        return this.__panelConfig;
      },
      set panelConfig(value) {
        this.__panelConfig = value;
      },
      key: KEY,
      attributeKeyName: ATTRIBUTE_KEY,
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE,
    },
    init() {
      this.initContentDefaultValue();
      PanelMenu.init();
    },
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) {
          return;
        }
        if (config.type === "button" || config.type === "forms" || config.type === "deepMenu") {
          return;
        }
        const attributes = config.attributes;
        let __attr_init__ = attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
        }
        let menuDefaultConfig = new Map();
        let key = attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        let moreMenuDefaultConfig = attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig) {
          Object.keys(moreMenuDefaultConfig).forEach((key2) => {
            menuDefaultConfig.set(key2, moreMenuDefaultConfig[key2]);
          });
        }
        if (!menuDefaultConfig.size) {
          log.warn(["请先配置键", config]);
          return;
        }
        if (config.type === "switch") {
          let disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
          if (typeof disabled === "boolean" && disabled) {
            this.$data.contentConfigInitDisabledKeys.push(...menuDefaultConfig.keys());
          }
        }
        for (const [__key, __defaultValue] of menuDefaultConfig.entries()) {
          this.setDefaultValue(__key, __defaultValue);
        }
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let child_forms = configItem.forms;
          if (child_forms && Array.isArray(child_forms)) {
            loopInitDefaultValue(child_forms);
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
      this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
    },
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key)) {
        log.warn("请检查该key(已存在): " + key);
      }
      this.$data.contentConfigInitDefaultValue.set(key, defaultValue);
    },
    getDefaultValue(key) {
      return this.$data.contentConfigInitDefaultValue.get(key);
    },
    setValue(key, value) {
      PopsPanelStorageApi.set(key, value);
    },
    getValue(key, defaultValue) {
      const localValue = PopsPanelStorageApi.get(key);
      if (localValue == null) {
        if (this.$data.contentConfigInitDefaultValue.has(key)) {
          return this.$data.contentConfigInitDefaultValue.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    deleteValue(key) {
      PopsPanelStorageApi.delete(key);
    },
    hasKey(key) {
      return PopsPanelStorageApi.has(key);
    },
    addValueChangeListener(key, callback) {
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, (__key, __newValue, __oldValue) => {
        callback(key, __oldValue, __newValue);
      });
      return listenerId;
    },
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    triggerMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
    },
    async exec(queryKey, callback, checkExec, once = true) {
      const that = this;
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) {
        queryKeyFn = () => queryKey;
      } else {
        queryKeyFn = queryKey;
      }
      let isArrayKey = false;
      const queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else {
        keyList.push(queryKeyResult);
      }
      const findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      const storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) {
          return this.$data.onceExecMenuData.get(storageKey);
        }
      }
      let storeValueList = [];
      const listenerIdList = [];
      let destoryFnList = [];
      const addStoreValueCallback = (enableValue, args) => {
        let dynamicMenuStoreValueList = [];
        let dynamicDestoryFnList = [];
        let resultValueList = [];
        if (Array.isArray(args)) {
          resultValueList = resultValueList.concat(args);
        } else {
          if (typeof args === "object" && args != null) {
            if (args instanceof Element) {
              resultValueList.push(args);
            } else {
              const { $css, destory } = args;
              if ($css != null) {
                if (Array.isArray($css)) {
                  resultValueList = resultValueList.concat($css);
                } else {
                  resultValueList.push($css);
                }
              }
              if (typeof destory === "function") {
                resultValueList.push(destory);
              }
            }
          } else {
            resultValueList.push(args);
          }
        }
        for (const it of resultValueList) {
          if (it == null) {
            continue;
          }
          if (it instanceof Element) {
            dynamicMenuStoreValueList.push(it);
            continue;
          }
          if (typeof it === "function") {
            destoryFnList.push(it);
            continue;
          }
        }
        if (enableValue) {
          storeValueList = storeValueList.concat(dynamicMenuStoreValueList);
          destoryFnList = destoryFnList.concat(dynamicDestoryFnList);
        } else {
          execClearStoreStyleElements();
          execDestory();
        }
      };
      const getMenuValue = (key) => {
        const value = this.getValue(key);
        return value;
      };
      const execClearStoreStyleElements = () => {
        for (let index = 0; index < storeValueList.length; index++) {
          const $css = storeValueList[index];
          $css?.remove();
          storeValueList.splice(index, 1);
          index--;
        }
      };
      const execDestory = () => {
        for (let index = 0; index < destoryFnList.length; index++) {
          const destoryFnItem = destoryFnList[index];
          destoryFnItem();
          destoryFnList.splice(index, 1);
          index--;
        }
      };
      const checkMenuExec = () => {
        let flag = false;
        if (typeof checkExec === "function") {
          flag = checkExec(keyList);
        } else {
          flag = keyList.every((key) => getMenuValue(key));
        }
        return flag;
      };
      const valueChangeCallback = async (valueOption) => {
        const execFlag = checkMenuExec();
        if (execFlag) {
          const valueList = keyList.map((key) => this.getValue(key));
          const callbackResult = await callback({
            value: isArrayKey ? valueList : valueList[0],
            addStoreValue: (...args) => {
              return addStoreValueCallback(true, args);
            },
          });
          addStoreValueCallback(true, callbackResult);
        } else {
          addStoreValueCallback(false, []);
        }
      };
      once &&
        keyList.forEach((key) => {
          const listenerId = this.addValueChangeListener(key, (key2, newValue, oldValue) => {
            return valueChangeCallback();
          });
          listenerIdList.push(listenerId);
        });
      await valueChangeCallback();
      const result = {
        reload() {
          this.clearStoreStyleElements();
          this.destory();
          valueChangeCallback();
        },
        clear() {
          this.clearStoreStyleElements();
          this.destory();
          this.removeValueChangeListener();
          this.clearOnceExecMenuData();
        },
        clearStoreStyleElements: () => {
          return execClearStoreStyleElements();
        },
        destory() {
          return execDestory();
        },
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        },
        clearOnceExecMenuData() {
          once && that.$data.onceExecMenuData.delete(storageKey);
        },
      };
      this.$data.onceExecMenuData.set(storageKey, result);
      return result;
    },
    async execMenu(key, callback, isReverse = false, once = false) {
      return await this.exec(
        key,
        async (option) => {
          return await callback(option);
        },
        (keyList) => {
          const execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            const disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
            if (disabled) {
              flag = false;
              log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
            }
            isReverse && (flag = !flag);
            return flag;
          });
          return execFlag;
        },
        once
      );
    },
    async execMenuOnce(key, callback, isReverse = false, listenUrlChange = false) {
      const result = await this.execMenu(key, callback, isReverse, true);
      if (listenUrlChange) {
        if (result) {
          const urlChangeEvent = () => {
            result.reload();
          };
          this.removeUrlChangeWithExecMenuOnceListener(key);
          this.addUrlChangeWithExecMenuOnceListener(key, urlChangeEvent);
        }
      }
      return result;
    },
    deleteExecMenuOnce(key) {
      key = this.transformKey(key);
      this.$data.onceExecMenuData.delete(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
      const flag = PopsPanelStorageApi.removeValueChangeListener(key);
      return flag;
    },
    onceExec(key, callback) {
      key = this.transformKey(key);
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExecData.has(key)) {
        return;
      }
      callback();
      this.$data.onceExecData.set(key, 1);
    },
    deleteOnceExec(key) {
      key = this.transformKey(key);
      this.$data.onceExecData.delete(key);
    },
    addUrlChangeWithExecMenuOnceListener(key, callback) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.set(key, callback);
    },
    removeUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
    },
    hasUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      return this.$data.urlChangeReloadMenuExecOnce.has(key);
    },
    async triggerUrlChangeWithExecMenuOnceEvent(config) {
      const values = this.$data.urlChangeReloadMenuExecOnce.values();
      for (const callback of values) {
        await callback(config);
      }
    },
    showPanel(
      content,
      title = `${SCRIPT_NAME}-设置`,
      preventDefaultContentConfig = false,
      preventRegisterSearchPlugin = false
    ) {
      this.$data.$panel = null;
      this.$data.panelContent = [];
      let checkHasBottomVersionContentConfig =
        content.findIndex((it) => {
          let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
          return isBottom && it.id === "script-version";
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      let $panel = __pops.panel({
        ...{
          title: {
            text: title,
            position: "center",
            html: false,
            style: "",
          },
          content,
          btn: {
            close: {
              enable: true,
              callback: (details, event) => {
                details.close();
                this.$data.$panel = null;
              },
            },
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
              toHide: false,
            },
            clickCallBack: (originalRun, config) => {
              originalRun();
              this.$data.$panel = null;
            },
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          drag: true,
          only: true,
        },
        ...this.$data.panelConfig,
      });
      this.$data.$panel = $panel;
      this.$data.panelContent = content;
      if (!preventRegisterSearchPlugin) {
        this.registerConfigSearch({ $panel, content });
      }
    },
    registerConfigSearch(config) {
      const { $panel, content } = config;
      let asyncQueryProperty = async (target, handler) => {
        if (target == null) {
          return;
        }
        let handleResult = await handler(target);
        if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) {
          return handleResult.data;
        }
        return await asyncQueryProperty(handleResult.data, handler);
      };
      let scrollToElementAndListen = ($el, callback) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                callback?.();
                observer.disconnect();
              }
            });
          },
          {
            root: null,
            threshold: 1,
          }
        );
        observer.observe($el);
        $el.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      let addFlashingClass = ($el) => {
        const flashingClassName = "pops-flashing";
        domUtils.animationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      let dbclick_event = (evt, selectorTarget) => {
        domUtils.preventEvent(evt);
        let $alert = __pops.alert({
          title: {
            text: "搜索配置",
            position: "center",
          },
          content: {
            text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,
            html: true,
          },
          btn: {
            ok: { enable: false },
          },
          mask: {
            clickEvent: {
              toClose: true,
            },
          },
          width: PanelUISize.settingMiddle.width,
          height: "auto",
          drag: true,
          style: `
					${__pops.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid rgb(235, 238, 245, 1);
					}
					.pops-content:has(.search-result-wrapper:empty) .search-wrapper{
						border-bottom: 0;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
    					align-items: center;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`,
        });
        $alert.$shadowRoot.querySelector(".search-wrapper");
        let $searchInput = $alert.$shadowRoot.querySelector(".search-config-text");
        let $searchResultWrapper = $alert.$shadowRoot.querySelector(".search-result-wrapper");
        $searchInput.focus();
        let clearSearchResult = () => {
          domUtils.empty($searchResultWrapper);
        };
        let createSearchResultItem = (pathInfo) => {
          const searchPath = utils.queryProperty(pathInfo, (target) => {
            if (target?.next) {
              return {
                isFind: false,
                data: target.next,
              };
            } else {
              return {
                isFind: true,
                data: target,
              };
            }
          });
          let $item = domUtils.createElement("div", {
            className: "search-result-item",
            innerHTML: `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`,
          });
          domUtils.on($item, "click", (clickItemEvent) => {
            let $asideItems = $panel.$shadowRoot.querySelectorAll(
              "aside.pops-panel-aside .pops-panel-aside-top-container li"
            );
            let $targetAsideItem = $asideItems[pathInfo.index];
            if (!$targetAsideItem) {
              Qmsg.error(`左侧项下标${pathInfo.index}不存在`);
              return;
            }
            $targetAsideItem.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            $targetAsideItem.click();
            asyncQueryProperty(pathInfo.next, async (target) => {
              if (target?.next) {
                let $findDeepMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(
                    ($deepMenu) => {
                      const __formConfig__ = Reflect.get($deepMenu, "__formConfig__");
                      return (
                        typeof __formConfig__ === "object" &&
                        __formConfig__ != null &&
                        __formConfig__.text === target.name
                      );
                    }
                  );
                }, 2500);
                if ($findDeepMenu) {
                  $findDeepMenu.click();
                } else {
                  Qmsg.error("未找到对应的二级菜单");
                  return {
                    isFind: true,
                    data: target,
                  };
                }
                return {
                  isFind: false,
                  data: target.next,
                };
              } else {
                let $findTargetMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(
                    ($menuItem) => {
                      const __formConfig__ = Reflect.get($menuItem, "__formConfig__");
                      return __formConfig__ === target.matchedData?.formConfig;
                    }
                  );
                }, 2500);
                if ($findTargetMenu) {
                  scrollToElementAndListen($findTargetMenu);
                  let $fold = $findTargetMenu.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                  if ($fold) {
                    let $foldWrapper = $fold.querySelector(".pops-panel-forms-fold-container");
                    $foldWrapper.click();
                    await utils.sleep(500);
                  }
                  scrollToElementAndListen($findTargetMenu, () => {
                    addFlashingClass($findTargetMenu);
                  });
                } else {
                  Qmsg.error("未找到对应的菜单项");
                }
                return {
                  isFind: true,
                  data: target,
                };
              }
            });
          });
          return $item;
        };
        let execSearch = (searchText) => {
          const searchTextRegExp = new RegExp(searchText, "i");
          const searchConfigResult = [];
          const loopContentConfig = (configList, path) => {
            for (let index = 0; index < configList.length; index++) {
              const configItem = configList[index];
              let child_forms = configItem.forms;
              if (child_forms && Array.isArray(child_forms)) {
                const deepMenuPath = utils.deepClone(path);
                if (configItem.type === "deepMenu") {
                  const deepNext = utils.queryProperty(deepMenuPath, (target) => {
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  deepNext.next = {
                    name: configItem.text,
                  };
                }
                loopContentConfig(child_forms, deepMenuPath);
              } else {
                let text = Reflect.get(configItem, "text");
                let description = Reflect.get(configItem, "description");
                const delayMatchedTextList = [text, description];
                let matchedIndex = delayMatchedTextList.findIndex((configText) => {
                  if (typeof configText !== "string") {
                    return;
                  }
                  return configText.match(searchTextRegExp);
                });
                if (matchedIndex !== -1) {
                  const matchedPath = utils.deepClone(path);
                  const deepNext = utils.queryProperty(matchedPath, (target) => {
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  deepNext.next = {
                    name: text,
                    matchedData: {
                      path: "",
                      formConfig: configItem,
                      matchedText: delayMatchedTextList[matchedIndex],
                      description,
                    },
                  };
                  const pathList = [];
                  utils.queryProperty(matchedPath, (target) => {
                    const name = target?.name;
                    if (typeof name === "string" && name.trim() !== "") {
                      pathList.push(name);
                    }
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  const pathStr = pathList.join(CommonUtil.escapeHtml(" - "));
                  deepNext.next.matchedData.path = pathStr;
                  searchConfigResult.push(matchedPath);
                }
              }
            }
          };
          for (let index = 0; index < content.length; index++) {
            const leftContentConfigItem = content[index];
            if (!leftContentConfigItem.forms) {
              continue;
            }
            if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") {
              continue;
            }
            const rightContentConfigList = leftContentConfigItem.forms;
            if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
              let text = leftContentConfigItem.title;
              if (typeof text === "function") {
                text = text();
              }
              loopContentConfig(rightContentConfigList, {
                index,
                name: text,
              });
            }
          }
          let fragment = document.createDocumentFragment();
          for (const pathInfo of searchConfigResult) {
            let $resultItem = createSearchResultItem(pathInfo);
            fragment.appendChild($resultItem);
          }
          clearSearchResult();
          $searchResultWrapper.append(fragment);
        };
        domUtils.on(
          $searchInput,
          "input",
          utils.debounce((evt2) => {
            domUtils.preventEvent(evt2);
            let searchText = domUtils.val($searchInput).trim();
            if (searchText === "") {
              clearSearchResult();
              return;
            }
            execSearch(searchText);
          }, 200)
        );
      };
      let clickElement = null;
      let isDoubleClick = false;
      let timer = void 0;
      domUtils.on(
        $panel.$shadowRoot,
        "dblclick",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        dbclick_event
      );
      domUtils.on(
        $panel.$shadowRoot,
        "touchend",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        (evt, selectorTarget) => {
          clearTimeout(timer);
          timer = void 0;
          if (isDoubleClick && clickElement === selectorTarget) {
            isDoubleClick = false;
            clickElement = null;
            dbclick_event(evt);
          } else {
            timer = setTimeout(() => {
              isDoubleClick = false;
            }, 200);
            isDoubleClick = true;
            clickElement = selectorTarget;
          }
        },
        {
          capture: true,
        }
      );
      $panel.$shadowRoot.appendChild(
        domUtils.createElement("style", {
          type: "text/css",
          textContent: `
					.pops-flashing{
						animation: double-blink 1.5s ease-in-out;
					}
					@keyframes double-blink {
						 0% {
							background-color: initial;
						}
						25% {
							background-color: yellow;
						}
						50% {
							background-color: initial;
						}
						75% {
							background-color: yellow;
						}
						100% {
							background-color: initial;
						}
					}
				`,
        })
      );
    },
    transformKey(key) {
      if (Array.isArray(key)) {
        const keyArray = key.sort();
        return JSON.stringify(keyArray);
      } else {
        return key;
      }
    },
  };
  const _SCRIPT_NAME_ = SCRIPT_NAME || "网盘链接识别";
  const __DataPaging = DataPaging;
  const Cryptojs = CryptoJS ?? window.CryptoJS ?? _unsafeWindow.CryptoJS;
  const PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) {
          this.__storeApiFn = new Utils.Dictionary();
        }
        return this.__storeApiFn;
      },
    },
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) {
        return;
      }
      return this.$data.storeApiValue.get(type);
    },
    hasStorageApi(type) {
      return this.$data.storeApiValue.has(type);
    },
    setStorageApi(type, storageApiValue) {
      this.$data.storeApiValue.set(type, storageApiValue);
    },
    initComponentsStorageApi(type, config, storageApiValue) {
      let propsStorageApi;
      if (this.hasStorageApi(type)) {
        propsStorageApi = this.getStorageApi(type);
      } else {
        propsStorageApi = storageApiValue;
      }
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    },
  };
  const UISwitch = function (
    text,
    key,
    defaultValue,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack
  ) {
    let result = {
      text,
      type: "switch",
      description,
      disabled,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        let value = storageApiValue.get(key, defaultValue);
        return value;
      },
      callback(event, __value) {
        let value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          let result2 = clickCallBack(event, value);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
        if (typeof valueChangeCallBack === "function") {
          valueChangeCallBack(event, value);
        }
      },
      afterAddToUListCallBack,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const UIInput = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    isNumber,
    isPassword,
    afterAddToUListCallBack,
    valueChangeCallback
  ) {
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
      placeholder,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("input", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const UIButton = function (
    text,
    description,
    buttonText,
    buttonIcon,
    buttonIsRightIcon,
    buttonIconIsLoading,
    buttonType,
    clickCallBack,
    afterAddToUListCallBack,
    disable
  ) {
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
      afterAddToUListCallBack,
    };
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      result.disable = Boolean(disable);
    });
    return result;
  };
  const NetDiskViewSizeConfig = {
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
    mainView: {
      PC: {
        width: "500px",
        height: "100%",
      },
      Mobile: {
        width: "88vw",
        height: "50vh",
      },
    },
    mainViewSmallWindow: {
      PC: {
        get width() {
          return NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"].value + "px";
        },
        height: "auto",
      },
      Mobile: {
        get width() {
          return NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"].value + "px";
        },
        height: "auto",
      },
    },
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
    customRuleDebugView: {
      PC: {
        width: "55vw",
        height: "70vh",
      },
      Mobile: {
        width: "88vw",
        height: "70vh",
      },
    },
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
    websiteRuleView: {
      PC: {
        width: "45vw",
        height: "65vh",
      },
      Mobile: {
        width: "88vw",
        height: "60vh",
      },
    },
    websiteEditRuleView: {
      PC: {
        width: "45vw",
        height: "65vh",
      },
      Mobile: {
        width: "88vw",
        height: "60vh",
      },
    },
  };
  const NetDiskAutoFillAccessCode_baidu = function (netDiskInfo) {
    if (
      window.location.hostname === "pan.baidu.com" &&
      window.location.pathname === "/share/init" &&
      window.location.search.startsWith("?surl=")
    ) {
      log.success("自动填写链接", netDiskInfo);
      domUtils.waitNode("div.verify-form #accessCode").then(($ele) => {
        if (!utils.isVisible($ele)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $ele.value = netDiskInfo.accessCode;
        domUtils.trigger($ele, "input");
        document.querySelector("div.verify-form #submitBtn")?.click();
      });
    }
    if (
      window.location.hostname === "pan.baidu.com" &&
      window.location.pathname === "/wap/init" &&
      window.location.search.startsWith("?surl=")
    ) {
      log.success("自动填写链接", netDiskInfo);
      domUtils
        .waitNode("div.extractWrap div.extract-content div.extractInputWrap.extract input[type=text]")
        .then(($input) => {
          if (!utils.isVisible($input)) {
            log.error("输入框不可见，不输入密码");
            return;
          }
          Qmsg.success("自动填充访问码");
          $input.value = netDiskInfo.accessCode;
          domUtils.trigger($input, "input");
          document.querySelector("div.extractWrap div.extract-content button.m-button")?.click();
        });
    }
  };
  const NetDiskAutoFillAccessCode_lanzou = function (netDiskInfo) {
    if (window.location.hostname.match(/lanzou[a-z]{1}.com/gi)) {
      log.success("自动填写链接", netDiskInfo);
      domUtils.waitNode("#pwd").then(($input) => {
        if (!utils.isVisible($input)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $input.value = netDiskInfo.accessCode;
        domUtils.trigger($input, "input");
        (document.querySelector("#passwddiv div.passwddiv-input > div") || $input.nextElementSibling)?.click();
        document.querySelector("#sub")?.click();
      });
      domUtils.waitNode("#f_pwd").then((element) => {
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
            log.success("自动填充访问码并关闭观察者");
            Qmsg.success("自动填充访问码");
            inputElement.value = netDiskInfo.accessCode;
            domUtils.trigger(inputElement, "input");
            document.querySelector("#f_pwd #sub")?.click();
          },
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_tianyiyun = function (netDiskInfo) {
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
      domUtils.waitNode("input#code_txt").then((codeTxtElement) => {
        loopWaitElementShow(codeTxtElement, () => {
          Qmsg.success("自动填充访问码");
          let visitBtn = document.querySelector(".btn.btn-primary.visit");
          codeTxtElement.value = netDiskInfo.accessCode;
          Reflect.set(codeTxtElement, "_value", netDiskInfo.accessCode);
          domUtils.trigger(codeTxtElement, "input");
          domUtils.trigger(visitBtn, "click");
        });
      });
    }
    if (window.location.hostname === "h5.cloud.189.cn") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.waitNode("input.access-code-input").then((accessInputElement) => {
        loopWaitElementShow(accessInputElement, () => {
          Qmsg.success("自动填充访问码");
          accessInputElement.value = netDiskInfo.accessCode;
          Reflect.set(accessInputElement, "_value", netDiskInfo.accessCode);
          domUtils.trigger(accessInputElement, "input");
          domUtils.trigger(document.querySelector("div.button"), "click");
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_hecaiyun = function (netDiskInfo) {
    if (window.location.hostname === "caiyun.139.com") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.waitNode("#token-input").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        domUtils.trigger(element, "input");
        document.querySelector("#homepage div.token div.token-form a").click();
      });
      domUtils.waitNode("#app div.token-form input[type=text]").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        domUtils.trigger(element, "input");
        document.querySelector("div.token-form a.btn-token").click();
      });
    }
  };
  const ReactUtils = {
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
        let $ele = await domUtils.waitNode($el, 1e4);
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
              $el: $targetEl,
            };
          }
          let reactInst = utils.getReactInstance($targetEl);
          if (reactInst == null) {
            return {
              status: false,
              isTimeout: false,
              inst: null,
              $el: $targetEl,
            };
          }
          let findPropNameIndex = Array.from(reactPropNameOrNameList).findIndex((__propName__) => {
            let reactPropInst2 = reactInst[__propName__];
            if (!reactPropInst2) {
              return false;
            }
            let checkResult = needSetOption.check(reactPropInst2, $targetEl);
            checkResult = Boolean(checkResult);
            return checkResult;
          });
          let reactPropName = reactPropNameOrNameList[findPropNameIndex];
          let reactPropInst = reactInst[reactPropName];
          return {
            status: findPropNameIndex !== -1,
            isTimeout: false,
            inst: reactPropInst,
            $el: $targetEl,
          };
        }
        utils
          .waitPropertyByInterval(
            () => {
              return getTarget();
            },
            () => checkTarget().status,
            250,
            1e4
          )
          .then(() => {
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
    },
  };
  const NetDiskAutoFillAccessCode_aliyun = function (netDiskInfo) {
    if (window.location.hostname === "www.aliyundrive.com" || window.location.hostname === "www.alipan.com") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.ready(() => {
        domUtils
          .waitAnyNode(["#root input.ant-input[placeholder*='提取码']", "#root input[name=pwd][placeholder*='提取码']"])
          .then(($el) => {
            ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactFiber"], {
              check(reactPropInst) {
                return (
                  typeof reactPropInst?.onChange === "function" ||
                  typeof reactPropInst?.memoizedProps?.onChange === "function"
                );
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
                  target: $el,
                });
                Qmsg.success("自动填充访问码");
                let $submit = $('#root button[type="submit"]');
                if (!$submit) {
                  Qmsg.error("提交按钮不存在");
                  return;
                }
                $submit.click();
              },
            });
          });
      });
    }
  };
  const NetDiskAutoFillAccessCode_123pan = function (netDiskInfo) {
    if (window.location.hostname === "www.123pan.com") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.ready(() => {
        domUtils
          .waitAnyNode([
            "#app .ca-fot input.ant-input[type=text][placeholder*='提取码']",
            "#app .appinput input.ant-input[type=text][placeholder*='提取码']",
          ])
          .then(($el) => {
            ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactFiber"], {
              check(reactPropInst) {
                return (
                  typeof reactPropInst?.onChange === "function" ||
                  typeof reactPropInst?.memoizedProps?.onChange === "function"
                );
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
                  target: $el,
                });
                Qmsg.success("自动填充访问码");
                let $submit = $el.nextElementSibling;
                if (!$submit) {
                  Qmsg.error("提交按钮不存在");
                  return;
                }
                $submit.click();
              },
            });
          });
      });
    }
  };
  const NetDiskAutoFillAccessCode_weiyun = function (netDiskInfo) {
    if (window.location.hostname === "share.weiyun.com") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.waitNode("#app input.input-txt").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        domUtils.trigger(element, "input");
        domUtils.trigger(element, "change");
        setTimeout(() => {
          document.querySelector(".form-item button.btn-main").click();
        }, 500);
      });
      domUtils.waitNode(".input-wrap input.pw-input").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        element.value = netDiskInfo.accessCode;
        domUtils.trigger(element, "input");
        domUtils.trigger(element, "change");
        setTimeout(() => {
          document.querySelector(".pw-btn-wrap button.btn").click();
        }, 500);
      });
    }
  };
  const NetDiskAutoFillAccessCode_xunlei = function (netDiskInfo) {
    if (window.location.hostname === "pan.xunlei.com") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.waitNode("#__layout div.pass-input-wrap input.td-input__inner").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        log.error("输入框不可见，不输入密码");
        element.value = netDiskInfo.accessCode;
        domUtils.trigger(element, "input");
        domUtils.trigger(element, "change");
        setTimeout(() => {
          document.querySelector("#__layout div.pass-input-wrap button.td-button").click();
        }, 500);
      });
      domUtils.waitNode("#__layout div.pass-wrapper input.td-input__inner").then((element) => {
        if (!utils.isVisible(element)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        log.error("输入框不可见，不输入密码");
        element.value = netDiskInfo.accessCode;
        domUtils.trigger(element, "input");
        domUtils.trigger(element, "change");
        setTimeout(() => {
          document.querySelector("#__layout div.pass-wrapper button.td-button").click();
        }, 500);
      });
    }
  };
  const NetDiskAutoFillAccessCode_kuake = function (netDiskInfo) {
    if (window.location.hostname === "pan.quark.cn") {
      log.success("自动填写链接", netDiskInfo);
      domUtils.ready(() => {
        domUtils.waitNode("#ice-container input.ant-input[class*=ShareReceive][placeholder*='提取码']").then(($el) => {
          ReactUtils.waitReactPropsToSet($el, ["reactProps", "reactEventHandlers"], {
            check(reactPropInst) {
              return (
                typeof reactPropInst?.onChange === "function" ||
                typeof reactPropInst?.memoizedProps?.onChange === "function"
              );
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
                target: $el,
              });
              Qmsg.success("自动填充访问码");
            },
          });
        });
      });
    }
  };
  const NetDiskAutoFillAccessCode_chengtong = function (netDiskInfo) {
    log.success("自动填写链接", netDiskInfo);
    domUtils.waitNode("#passcode").then((element) => {
      if (!utils.isVisible(element)) {
        log.error("输入框不可见，不输入密码");
        return;
      }
      Qmsg.success("自动填充访问码");
      element.value = netDiskInfo.accessCode;
      domUtils.trigger(element, "input");
      $("#main-content .form-group button.btn[type=button]").click();
    });
  };
  const NetDiskAutoFillAccessCode_115pan = function (netDiskInfo) {
    if (["115.com", "115cdn.com", "anxia.com"].includes(window.location.hostname)) {
      log.success("自动填写链接", netDiskInfo);
      domUtils.waitNode("input.text", 1e4).then(($el) => {
        if (!$el) return;
        if (!utils.isVisible($el)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $el.value = netDiskInfo.accessCode;
        domUtils.trigger($el, "input");
        $("#js-share_code div.form-decode div.submit a").click();
      });
    }
  };
  const NetDiskAutoFillAccessCode_360yunpan = function (netDiskInfo) {
    if (window.location.hostname.endsWith(".link.yunpan.com")) {
      log.success("自动填写链接", netDiskInfo);
      domUtils.waitNode("#extract-bg-container input.pwd-input").then(($el) => {
        if (!utils.isVisible($el)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $el.value = netDiskInfo.accessCode;
        domUtils.trigger($el, "input");
        let $submit = $("#extract-bg-container input.submit-btn");
        $submit?.click();
      });
      domUtils.waitNode("#extractForm input.pwd-input").then(($el) => {
        if (!utils.isVisible($el)) {
          log.error("输入框不可见，不输入密码");
          return;
        }
        Qmsg.success("自动填充访问码");
        $el.value = netDiskInfo.accessCode;
        domUtils.trigger($el, "input");
        let $submit = $("#extractForm input.submit-btn");
        $submit?.click();
      });
    }
  };
  const NetDiskRuleDataKEY = {
    matchRange_text: {
      before: (key) => `${key}-text-match-range-before`,
      after: (key) => `${key}-text-match-range-after`,
    },
    matchRange_html: {
      before: (key) => `${key}-html-match-range-before`,
      after: (key) => `${key}-html-match-range-after`,
    },
    function: {
      enable: (key) => `${key}-enable`,
      checkLinkValidity: (key) => `${key}-check-link-valid`,
      checkLinkValidityHoverTip: (key) => `${key}-check-link-valid-hover-tip`,
      linkClickMode: (key) => `${key}-click-mode`,
    },
    linkClickMode_openBlank: {
      openBlankAutoFilleAccessCode: (key) => `${key}-open-blank-auto-fill-accesscode`,
      openBlankWithCopyAccessCode: (key) => `${key}-open-blank-with-copy-accesscode`,
    },
    schemeUri: {
      enable: (key) => `${key}-scheme-uri-enable`,
      isForwardLinearChain: (key) => `${key}-scheme-uri-forward-linear-chain`,
      isForwardBlankLink: (key) => `${key}-scheme-uri-forward-blank-link`,
      uri: (key) => `${key}-scheme-uri-uri`,
    },
  };
  const WebsiteRuleDataKey = {
    features: {
      customAccessCodeEnable: (key) => `${key}-custom-accesscode-enable`,
      customAccessCode: (key) => `${key}-custom-accesscode`,
    },
  };
  const NetDiskRuleData = {
    matchRange_text: {
      before(key, defaultValue) {
        key = NetDiskRuleDataKEY.matchRange_text.before(key);
        defaultValue = Panel.getDefaultValue(key) ?? 20;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return parseInt(panelData.value.toString());
      },
      after(key, defaultValue) {
        key = NetDiskRuleDataKEY.matchRange_text.after(key);
        defaultValue = Panel.getDefaultValue(key) ?? 10;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return parseInt(panelData.value.toString());
      },
    },
    matchRange_html: {
      before(key, defaultValue) {
        key = NetDiskRuleDataKEY.matchRange_html.before(key);
        defaultValue = Panel.getDefaultValue(key) ?? 100;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return parseInt(panelData.value.toString());
      },
      after(key, defaultValue) {
        key = NetDiskRuleDataKEY.matchRange_html.after(key);
        defaultValue = Panel.getDefaultValue(key) ?? 15;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return parseInt(panelData.value.toString());
      },
    },
    function: {
      enable(key, defaultValue) {
        key = NetDiskRuleDataKEY.function.enable(key);
        defaultValue = Panel.getDefaultValue(key) ?? true;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return Boolean(panelData.value);
      },
      linkClickMode(key, defaultValue) {
        key = NetDiskRuleDataKEY.function.linkClickMode(key);
        defaultValue = Panel.getDefaultValue(key) ?? "copy";
        const panelData = GeneratePanelStorage(key, defaultValue);
        return panelData.value;
      },
      checkLinkValidity(key, defaultValue) {
        key = NetDiskRuleDataKEY.function.checkLinkValidity(key);
        defaultValue = Panel.getDefaultValue(key) ?? false;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return Boolean(panelData.value);
      },
      checkLinlValidityHoverTip(key, defaultValue) {
        key = NetDiskRuleDataKEY.function.checkLinkValidityHoverTip(key);
        defaultValue = Panel.getDefaultValue(key) ?? true;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return Boolean(panelData.value);
      },
    },
    linkClickMode_openBlank: {
      openBlankAutoFilleAccessCode(key, defaultValue) {
        key = NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankAutoFilleAccessCode(key);
        defaultValue = Panel.getDefaultValue(key) ?? true;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return Boolean(panelData.value);
      },
      openBlankWithCopyAccessCode(key, defaultValue) {
        key = NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(key);
        defaultValue = Panel.getDefaultValue(key) ?? false;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return Boolean(panelData.value);
      },
    },
    schemeUri: {
      enable(key, defaultValue) {
        key = NetDiskRuleDataKEY.schemeUri.enable(key);
        defaultValue = Panel.getDefaultValue(key) ?? false;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return Boolean(panelData.value);
      },
      isForwardLinearChain(key, defaultValue) {
        key = NetDiskRuleDataKEY.schemeUri.isForwardLinearChain(key);
        defaultValue = Panel.getDefaultValue(key) ?? false;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return Boolean(panelData.value);
      },
      isForwardBlankLink(key, defaultValue) {
        key = NetDiskRuleDataKEY.schemeUri.isForwardBlankLink(key);
        defaultValue = Panel.getDefaultValue(key) ?? false;
        const panelData = GeneratePanelStorage(key, defaultValue);
        return Boolean(panelData.value);
      },
      uri(key, defaultValue) {
        key = NetDiskRuleDataKEY.schemeUri.uri(key);
        defaultValue = Panel.getDefaultValue(key) ?? "";
        const panelData = GeneratePanelStorage(key, defaultValue);
        return panelData.value;
      },
    },
  };
  const NetDiskAutoFillAccessCode = {
    key: "tempNetDiskInfo",
    $data: {
      netDiskInfo: null,
      get enable() {
        return NetDiskGlobalData.features.autoFillAccessCode.value;
      },
    },
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
        if (accessCode == null || (typeof accessCode === "string" && accessCode.trim() === "")) {
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
            log.success(`成功匹配到对应的自动填充访问码的网盘信息：`, fillAccessCodeNetDiskInfo);
            autoFillFn(fillAccessCodeNetDiskInfo);
          } else {
            log.warn("自动填充访问码失败：" + fillAccessCodeNetDiskInfo.ruleKeyName + "，原因：该网盘未适配");
          }
          flag = true;
          break;
        }
      }
      if (!flag) {
        log.error("未触发自动填充访问码，原因：未找到对应的网盘信息：👇", this.$data.netDiskInfo);
      }
    },
    netDisk: {
      baidu: NetDiskAutoFillAccessCode_baidu,
      lanzou: NetDiskAutoFillAccessCode_lanzou,
      tianyiyun: NetDiskAutoFillAccessCode_tianyiyun,
      hecaiyun: NetDiskAutoFillAccessCode_hecaiyun,
      aliyun: NetDiskAutoFillAccessCode_aliyun,
      wenshushu: () => {},
      nainiu: () => {},
      _123pan: NetDiskAutoFillAccessCode_123pan,
      weiyun: NetDiskAutoFillAccessCode_weiyun,
      xunlei: NetDiskAutoFillAccessCode_xunlei,
      _115pan: NetDiskAutoFillAccessCode_115pan,
      chengtong: NetDiskAutoFillAccessCode_chengtong,
      kuake: NetDiskAutoFillAccessCode_kuake,
      jianguoyun: () => {},
      onedrive: () => {},
      "360yunpan": NetDiskAutoFillAccessCode_360yunpan,
    },
    setValue(value) {
      _GM_setValue(this.key, value);
    },
    addValue(netDiskFillOption) {
      let accessCode = netDiskFillOption.accessCode;
      if (accessCode == null || (typeof accessCode === "string" && accessCode.trim() === "")) {
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
    getValue() {
      let localValue = _GM_getValue(this.key, []);
      if (!Array.isArray(localValue)) {
        localValue = [localValue];
      }
      localValue = localValue.filter((it) => Date.now() - it.time < 24 * 60 * 60 * 1e3);
      this.setValue(localValue);
      return localValue;
    },
  };
  const NetDiskAuthorization_Lanzouyx = function () {
    return;
  };
  const _123pan_Link_Host_Pattern = "(123pan|123865|123684|123652|123912).(com|cn)";
  const NetDiskRule_123pan = {
    rule: [
      {
        link_innerText: `${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: new RegExp(`${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})`, "gi"),
        shareCodeNeedRemoveStr: new RegExp(`${_123pan_Link_Host_Pattern}/s/`, "gi"),
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://123pan.com/s/{#shareCode#}",
        copyUrl: "https://123pan.com/s/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "123盘",
      key: "_123pan",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: true,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskAuthorization_123pan_Authorization = {
    KEY: "_123pan_User_Authorization",
    set(value) {
      _GM_setValue(this.KEY, value);
    },
    get() {
      return _GM_getValue(this.KEY);
    },
  };
  const NetDiskAuthorization_123pan = function () {
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
    init() {
      Object.keys(NetDiskAuthorization.netDisk).forEach((keyName) => {
        this.netDisk[keyName]();
      });
    },
    netDisk: {
      _123pan: NetDiskAuthorization_123pan,
      lanzouyx: NetDiskAuthorization_Lanzouyx,
    },
  };
  const NetDiskRuleUtils = {
    getDefaultLinkClickMode() {
      let data = {
        copy: {
          default: false,
          enable: true,
          text: "复制到剪贴板",
        },
        "copy-closePopup": {
          default: false,
          enable: true,
          text: "复制到剪贴板 & 关闭弹窗",
        },
        openBlank: {
          default: false,
          enable: true,
          text: "新标签页打开",
        },
        "openBlank-closePopup": {
          default: false,
          enable: true,
          text: "新标签页打开 & 关闭弹窗",
        },
        parseFile: {
          default: false,
          enable: false,
          text: "文件解析",
        },
        "parseFile-closePopup": {
          default: false,
          enable: false,
          text: "文件解析 & 关闭弹窗",
        },
        own: {
          default: false,
          enable: false,
          text: "自定义动作",
        },
      };
      return data;
    },
    replaceParam(text, data = {}) {
      if (typeof text !== "string") {
        return text;
      }
      Object.keys(data).forEach((key) => {
        let replacedText = data[key];
        if (utils.isNotNull(replacedText)) {
          try {
            text = text.replaceAll(`{#encodeURI-${key}#}`, encodeURI(replacedText));
          } catch (error) {
            log.error("encodeURI-替换的文本失败", [replacedText]);
          }
          try {
            text = text.replaceAll(`{#encodeURIComponent-${key}#}`, encodeURIComponent(replacedText));
          } catch (error) {
            log.error("encodeURIComponent-替换的文本失败", [replacedText]);
          }
          try {
            text = text.replaceAll(`{#decodeURI-${key}#}`, decodeURI(replacedText));
          } catch (error) {
            log.error("decodeURI-替换的文本失败", [replacedText]);
          }
          try {
            text = text.replaceAll(`{#decodeURIComponent-${key}#}`, decodeURIComponent(replacedText));
          } catch (error) {
            log.error("encodeURIComponent-替换的文本失败", [replacedText]);
          }
          text = text.replaceAll(`{#${key}#}`, replacedText);
        }
      });
      return text;
    },
    replaceChinese(text) {
      return text.replace(/[\u4e00-\u9fa5]/g, "");
    },
    getDecodeComponentUrl(decodeUrl = window.location.href) {
      try {
        decodeUrl = decodeURIComponent(decodeUrl);
      } catch (error) {}
      return decodeUrl;
    },
  };
  const NetDiskFilterScheme = {
    protocol: "jumpwsv",
    pathname: "go",
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
        intentData,
      });
      return schemeUri;
    },
    isEnableForward(key) {
      return NetDiskRuleData.schemeUri.enable(key);
    },
    isForwardDownloadLink(key) {
      return this.isEnableForward(key) && NetDiskRuleData.schemeUri.isForwardLinearChain(key);
    },
    isForwardBlankLink(key) {
      return this.isEnableForward(key) && NetDiskRuleData.schemeUri.isForwardBlankLink(key);
    },
    getSchemeUri(option) {
      return `${this.protocol}://${this.pathname}?${utils.toSearchParamsStr(option)}`;
    },
    get1DMSchemeUriOption(intentData = "") {
      return {
        package: "idm.internet.download.manager.plus",
        activity: "idm.internet.download.manager.UrlHandlerDownloader",
        intentAction: "android.intent.action.VIEW",
        intentData,
        intentExtra: "",
      };
    },
  };
  class ParseFileCore {
    ruleIndex = 0;
    shareCode = "";
    accessCode = "";
    init(netDiskInfo) {
      this.ruleIndex = netDiskInfo.ruleIndex;
      this.shareCode = netDiskInfo.shareCode;
      this.accessCode = netDiskInfo.accessCode;
    }
  }
  const NetDiskCheckLinkValidityStatus = {
    loading: {
      code: 1,
      msg: "验证中...",
      setIcon($el) {
        domUtils.html($el, __pops.config.iconSVG.loading);
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid($el, "loading", msg ?? this.msg);
        this.setIcon($el);
      },
    },
    success: {
      code: 200,
      msg: "有效",
      setIcon($el) {
        domUtils.html(
          $el,
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
        NetDiskCheckLinkValidity.setViewCheckValid($el, "success", msg ?? this.msg);
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      },
    },
    networkError: {
      code: -404,
      msg: "网络异常",
      setIcon($el) {
        domUtils.html(
          $el,
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
      },
    },
    verify: {
      code: -405,
      msg: "触发安全验证",
      setIcon($el) {
        domUtils.html(
          $el,
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
        NetDiskCheckLinkValidity.setViewCheckValid($el, "verify", msg ?? this.msg);
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      },
    },
    failed: {
      code: 0,
      msg: "已失效",
      setIcon($el) {
        domUtils.html(
          $el,
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
        NetDiskCheckLinkValidity.setViewCheckValid($el, "failed", msg ?? this.msg);
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      },
    },
    needAccessCode: {
      code: 201,
      msg: "需要提取码",
      setIcon($el) {
        domUtils.html(
          $el,
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
        NetDiskCheckLinkValidity.setViewCheckValid($el, "needAccessCode", msg ?? this.msg);
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      },
    },
    partialViolation: {
      code: 202,
      msg: "存在部分违规文件",
      setIcon($el) {
        domUtils.html(
          $el,
          `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path 
					fill="currentColor"
					d="M954.963 810.267L543.112 96.919c-14.07-24.37-49.245-24.37-63.315 0L67.945 810.267c-14.07 24.37 3.518 54.832 31.657 54.832h823.703c28.141 0 45.728-30.463 31.658-54.832zM476.699 306.55c0-19.115 15.64-34.755 34.755-34.755 19.115 0 34.755 15.64 34.755 34.755v281.817c0 19.115-15.64 34.755-34.755 34.755-19.115 0-34.755-15.64-34.755-34.755V306.55z m34.755 445.293c-23.198 0-42.004-18.806-42.004-42.004s18.806-42.004 42.004-42.004c23.198 0 42.004 18.806 42.004 42.004s-18.806 42.004-42.004 42.004z"></path>
				</svg>`
        );
      },
      setView($el, checkInfo, msg) {
        NetDiskCheckLinkValidity.setViewCheckValid($el, "partial-violation", msg ?? this.msg);
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      },
    },
    unknown: {
      code: -200,
      msg: "未知检查情况",
      setIcon($el) {
        domUtils.html(
          $el,
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
        NetDiskCheckLinkValidity.setViewCheckValid($el, "unknown", msg ?? this.msg);
        this.setIcon($el);
        NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
      },
    },
  };
  const NetDiskCheckLinkValidity_123pan = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.get("https://www.123pan.com/api/share/info?shareKey=" + shareCode, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "www.123pan.com",
          Origin: "https://www.123pan.com",
          Referer: "https://www.123pan.com/",
        },
        responseType: "json",
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (response.data.responseText.includes("分享页面不存在")) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          msg: "分享页面不存在",
          data,
        };
      }
      if (data["code"] !== 0) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          msg: typeof data.message === "string" ? data.message : NetDiskCheckLinkValidityStatus.failed.msg,
          data,
        };
      }
      if (data["data"]["HasPwd"]) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data,
      };
    },
  };
  class NetDiskParse_123pan extends ParseFileCore {
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
      104: "文件已失效",
    };
    Headers = {
      "user-agent": "123pan/v2.4.0(Android_7.1.2;Xiaomi)",
      platform: "android",
      "app-version": "61",
      "x-app-version": "2.4.0",
    };
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      const that = this;
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      this.panelList.length = 0;
      this.Authorization = NetDiskAuthorization_123pan_Authorization.get();
      let checkLinkValidityStatus = await NetDiskCheckLinkValidity_123pan.init(netDiskInfo);
      if (
        checkLinkValidityStatus.code !== NetDiskCheckLinkValidityStatus.success.code &&
        checkLinkValidityStatus.code !== NetDiskCheckLinkValidityStatus.needAccessCode.code
      ) {
        Qmsg.error(checkLinkValidityStatus.msg);
        return;
      }
      let infoLists = await this.getFiles();
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
              downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("_123pan", downloadUrl);
            }
            fileSize = String(utils.formatByteToSize(fileInfo["Size"]));
          } else if (downloadInfo && downloadInfo["code"] === 401) {
            downloadUrl = "javascript:;";
            fileSize = "请登录后下载";
          } else {
            downloadUrl = "javascript:;";
            fileSize = "获取下载链接失败";
          }
        } else {
          if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("_123pan", downloadUrl);
          }
          fileSize = utils.formatByteToSize(fileInfo["Size"]).toString();
        }
        let fileUploadTime = new Date(fileInfo["CreateAt"]).getTime();
        let fileLatestTime = new Date(fileInfo["UpdateAt"]).getTime();
        fileUploadTime = utils.formatTime(fileUploadTime);
        fileLatestTime = utils.formatTime(fileLatestTime);
        NetDiskView.$inst.linearChainDialogView.oneFile({
          title: "123盘单文件直链",
          fileName: fileInfo["FileName"],
          fileSize,
          downloadUrl,
          fileUploadTime,
          fileLatestTime,
        });
      } else {
        Qmsg.info("正在递归文件");
        let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let folderInfoList = that.getFolderInfo(infoLists, 0);
        QmsgLoading.close();
        log.info("递归完毕");
        NetDiskView.$inst.linearChainDialogView.moreFile("123盘文件解析", folderInfoList);
      }
    }
    async checkLinkValidity() {
      const that = this;
      Qmsg.info("正在进行链接有效性校验");
      let url = `https://www.123pan.com/s/${that.shareCode}`;
      let response = await httpx.get({
        url,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Referer: "https://www.123pan.com",
        },
      });
      log.info(response);
      if (!response.status) {
        return false;
      }
      let g_initialPropsMatch = response.data.responseText.match(/window.g_initialProps[\s]*=[\s]*\{(.+?)\};/s);
      if (g_initialPropsMatch) {
        log.info(g_initialPropsMatch);
        let g_initialProps = utils.toJSON(`{${g_initialPropsMatch[g_initialPropsMatch.length - 1]}}`);
        log.info(g_initialProps);
        if (g_initialProps.res.code !== 0) {
          Qmsg.error(g_initialProps.res.message);
          return false;
        }
        let HasPwd = g_initialProps.res.data.HasPwd;
        if (HasPwd && (that.accessCode == null || that.accessCode === "")) {
          Qmsg.error("密码缺失!");
          NetDiskView.$inst.newAccessCodeView(
            "密码缺失",
            "_123pan",
            that.ruleIndex,
            that.shareCode,
            that.accessCode,
            (option) => {
              that.init({
                ruleIndex: that.ruleIndex,
                shareCode: that.shareCode,
                accessCode: option.accessCode,
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
        Page: 1,
      };
      let url = `https://www.123pan.com/b/api/share/get?${utils.toSearchParamsStr(getData)}`;
      let getResp = await httpx.get({
        url,
        headers: {
          Accept: "*/*",
          Referer: `https://www.123pan.com/s/${that.shareCode}`,
          ...that.Headers,
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
        NetDiskView.$inst.newAccessCodeView(
          void 0,
          "_123pan",
          that.ruleIndex,
          that.shareCode,
          that.accessCode,
          (option) => {
            that.init({
              ruleIndex: that.ruleIndex,
              shareCode: that.shareCode,
              accessCode: option.accessCode,
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
    async getFilesByRec(parentFileId) {
      const that = this;
      let getResp = await httpx.get({
        url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`,
        headers: {
          Accept: "*/*",
          Referer: `https://www.123pan.com/s/${that.shareCode}`,
          ...that.Headers,
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
    }
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
              let resultFileInfoList = await that.getFilesByRec(item["FileId"].toString());
              if (resultFileInfoList) {
                return that.getFolderInfo(resultFileInfoList, index + 1);
              } else {
                return [];
              }
            },
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
                    mode: "aBlank",
                  };
                } else if (downloadInfo && downloadInfo["code"] === 401) {
                  Qmsg.error("请登录后下载");
                } else {
                  Qmsg.error(downloadInfo?.["message"] || "获取下载链接失败");
                }
              } else {
                let downloadUrl = item.DownloadUrl;
                if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
                  downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("_123pan", downloadUrl);
                }
                return {
                  url: downloadUrl,
                  autoDownload: true,
                  mode: "aBlank",
                };
              }
            },
          });
        }
      });
      tempFolderInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      tempFolderFileInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      return folderInfoList;
    }
    async getFileDownloadInfo(Etag, FileID, S3keyFlag, ShareKey, Size) {
      const that = this;
      let authK_V = that.getFileDownloadAuth();
      let headers = {
        "Content-Type": "application/json;charset=UTF-8",
        Host: "www.123pan.com",
        Accept: "*/*",
        Referer: "https://www.123pan.com/s/" + ShareKey,
        Origin: "https://www.123pan.com",
        ...that.Headers,
      };
      if (that.Authorization) {
        Reflect.set(headers, "Authorization", "Bearer " + that.Authorization);
      }
      log.success("获取下载链接加密参数：" + authK_V);
      let postResp = await httpx.post(`https://www.123pan.com/a/api/share/download/info?${authK_V[0]}=${authK_V[1]}`, {
        data: JSON.stringify({
          Etag,
          FileID,
          S3keyFlag,
          ShareKey,
          Size,
        }),
        responseType: "json",
        headers,
      });
      if (!postResp.status) {
        return;
      }
      let postData = postResp.data;
      let jsonData = utils.toJSON(postData.responseText);
      log.info(jsonData);
      if (jsonData["code"] == 0) {
        jsonData["data"]["DownloadURL"] = that.decodeDownloadUrl(jsonData["data"]["DownloadURL"]);
        return jsonData;
      } else {
        return {
          code: jsonData["code"],
          message: jsonData["message"],
        };
      }
    }
    getFileDownloadAuth() {
      function encry_time(param) {
        var param_time,
          param_other = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        if (0 === arguments["length"]) return void 0;
        "object" === typeof param
          ? (param_time = param)
          : (10 === ("" + param)["length"] && (param = 1e3 * parseInt(param)), (param_time = new Date(param)));
        var param_timezoneoffset = param + 6e4 * new Date(param)["getTimezoneOffset"](),
          param_time_n = param_timezoneoffset + 36e5 * param_other;
        return (
          (param_time = new Date(param_time_n)),
          {
            y: param_time["getFullYear"](),
            m: param_time["getMonth"]() + 1 < 10 ? "0" + (param_time["getMonth"]() + 1) : param_time["getMonth"]() + 1,
            d: param_time["getDate"]() < 10 ? "0" + param_time["getDate"]() : param_time["getDate"](),
            h: param_time["getHours"]() < 10 ? "0" + param_time["getHours"]() : param_time["getHours"](),
            f: param_time["getMinutes"]() < 10 ? "0" + param_time["getMinutes"]() : param_time["getMinutes"](),
          }
        );
      }
      function encry_join(param) {
        for (
          var a = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            funcRun = function () {
              for (var b, c = [], d = 0; d < 256; d++) {
                b = d;
                for (var index = 0; index < 8; index++) b = 1 & b ? 3988292384 ^ (b >>> 1) : b >>> 1;
                c[d] = b;
              }
              return c;
            },
            _funcRun_ = funcRun(),
            _param = param,
            _param_1 = -1,
            _param_0 = 0;
          _param_0 < _param["length"];
          _param_0++
        )
          _param_1 = (_param_1 >>> 8) ^ _funcRun_[255 & (_param_1 ^ _param.charCodeAt(_param_0))];
        return ((_param_1 = (-1 ^ _param_1) >>> 0), _param_1.toString(a));
      }
      function getSign(urlPath) {
        var param_web = "web";
        var param_type = 3;
        var param_time = Math.round(
          (new Date().getTime() + 60 * new Date().getTimezoneOffset() * 1e3 + 288e5) / 1e3
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
          [param_no, ""["concat"](param_time, "-")["concat"](randomRoundNum, "-")["concat"](param_join_s)]
        );
      }
      return getSign("/a/api/share/download/info");
    }
    decodeDownloadUrl(url) {
      if (url === "") {
        return "";
      }
      return url;
    }
  }
  class NetDiskParse_Aliyun extends ParseFileCore {
    X_Share_Token_Data = {
      expire_time: "2000-01-01T00:00:00.000Z",
      expires_in: 7200,
      share_token: "",
    };
    X_Device_Id = null;
    X_Canary = "client=web,app=share,version=v2.3.1";
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      const that = this;
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      that.X_Device_Id = that.get_X_Device_Id();
      log.info("生成X_Device_Id：" + that.X_Device_Id);
      if (globalThis.location.hostname !== "www.aliyundrive.com" && globalThis.location.hostname !== "www.alipan.com") {
        let url = NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: "aliyun",
          ruleIndex,
          shareCode,
          accessCode,
        });
        let $QmsgErrorTip = Qmsg.error(`请在阿里云盘页面解析，<a href="${url}">点我前往</a>`, {
          timeout: 1e4,
          isHTML: true,
        });
        domUtils.on($QmsgErrorTip.$Qmsg.querySelector("a[href]"), "click", void 0, (event) => {
          domUtils.preventEvent(event);
          NetDiskLinkClickMode.openBlankUrl(url, "aliyun", that.ruleIndex, that.shareCode, that.accessCode);
        });
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
      NetDiskView.$inst.linearChainDialogView.moreFile("阿里云盘文件解析", folderInfoList);
    }
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
              let fileDownloadUrl = await that.get_share_link_download_url(item.share_id, item.file_id);
              if (!fileDownloadUrl) {
                return;
              }
              let schemeDownloadUrl = fileDownloadUrl;
              if (NetDiskFilterScheme.isForwardDownloadLink("aliyun")) {
                schemeDownloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("aliyun", schemeDownloadUrl);
              }
              return {
                autoDownload: true,
                mode: "aBlank",
                url: schemeDownloadUrl,
              };
            },
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
              let newDetail = await that.list_by_share(item.share_id, item.file_id);
              if (newDetail) {
                return that.getFolderInfo(newDetail, index + 1);
              } else {
                return [];
              }
            },
          });
        }
      });
      tempFolderInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      tempFolderFileInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      log.info("getFilesInfoByRec", folderInfoList);
      return folderInfoList;
    }
    async list_by_share(share_id, parent_file_id, order_by = "name", order_direction = "DESC") {
      const that = this;
      let postResp = await httpx.post("https://api.aliyundrive.com/adrive/v2/file/list_by_share", {
        data: JSON.stringify({
          share_id,
          parent_file_id,
          limit: 20,
          image_thumbnail_process: "image/resize,w_256/format,jpeg",
          image_url_process: "image/resize,w_1920/format,jpeg/interlace,1",
          video_thumbnail_process: "video/snapshot,t_1000,f_jpg,ar_auto,w_256",
          order_by,
          order_direction,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Origin: "https://www.aliyundrive.com",
          Referer: "https://www.aliyundrive.com/",
          "X-Canary": that.X_Canary,
          "X-Device-Id": that.X_Device_Id,
          "X-Share-Token": await that.get_X_Share_Token(that.shareCode, that.accessCode),
          "User-Agent": utils.getRandomPCUA(),
        },
        allowInterceptConfig: false,
      });
      if (!postResp.status) {
        that.handle_request_error(postResp);
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      log.info("列出文件列表：", data);
      return data["items"];
    }
    async get_share_link_download_url(share_id, file_id) {
      const that = this;
      let postResp = await httpx.post("https://api.aliyundrive.com/v2/file/get_share_link_download_url", {
        data: JSON.stringify({
          expire_sec: 600,
          file_id,
          share_id,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          Origin: "https://www.aliyundrive.com",
          Referer: "https://www.aliyundrive.com/",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + that.getAuthorization(),
          "X-Share-Token": await that.get_X_Share_Token(that.shareCode, that.accessCode),
          "User-Agent": utils.getRandomPCUA(),
        },
        responseType: "arraybuffer",
        allowInterceptConfig: false,
      });
      if (!postResp.status) {
        that.handle_request_error(postResp);
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      log.info("获取文件的下载链接：", data);
      return data["download_url"];
    }
    handle_request_error(postResp) {
      log.error(postResp);
      let errData = utils.toJSON(postResp.data.responseText);
      if (errData["message"] == "") {
        Qmsg.error(postResp.msg);
      } else {
        Qmsg.error(errData["message"]);
      }
    }
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
    async get_X_Share_Token(share_id, share_pwd) {
      const that = this;
      if (new Date() < new Date(that.X_Share_Token_Data.expire_time)) {
        return that.X_Share_Token_Data.share_token;
      }
      let postResp = await httpx.post("https://api.aliyundrive.com/v2/share_link/get_share_token", {
        data: JSON.stringify({
          share_id,
          share_pwd,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Origin: "https://www.aliyundrive.com",
          Referer: "https://www.aliyundrive.com/",
          "X-Canary": that.X_Canary,
          "X-Device-Id": that.X_Device_Id,
          "User-Agent": utils.getRandomPCUA(),
        },
        allowInterceptConfig: false,
      });
      if (!postResp.status) {
        that.handle_request_error(postResp);
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      that.X_Share_Token_Data = data;
      log.info("获取share_token：", that.X_Share_Token_Data);
      return that.X_Share_Token_Data["share_token"];
    }
    get_X_Device_Id() {
      for (
        var alipan_device_id_pattern =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          alipan_s = [],
          alipan_l = 0;
        alipan_l < 256;
        ++alipan_l
      )
        alipan_s.push((alipan_l + 256).toString(16).substr(1));
      function alipan_o() {
        return crypto.getRandomValues(new Uint8Array(16));
      }
      var alipan_c = function (args_e) {
          var second_arg = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            devices_id_string = (
              alipan_s[args_e[second_arg + 0]] +
              alipan_s[args_e[second_arg + 1]] +
              alipan_s[args_e[second_arg + 2]] +
              alipan_s[args_e[second_arg + 3]] +
              "-" +
              alipan_s[args_e[second_arg + 4]] +
              alipan_s[args_e[second_arg + 5]] +
              "-" +
              alipan_s[args_e[second_arg + 6]] +
              alipan_s[args_e[second_arg + 7]] +
              "-" +
              alipan_s[args_e[second_arg + 8]] +
              alipan_s[args_e[second_arg + 9]] +
              "-" +
              alipan_s[args_e[second_arg + 10]] +
              alipan_s[args_e[second_arg + 11]] +
              alipan_s[args_e[second_arg + 12]] +
              alipan_s[args_e[second_arg + 13]] +
              alipan_s[args_e[second_arg + 14]] +
              alipan_s[args_e[second_arg + 15]]
            ).toLowerCase();
          if (
            !(function (e) {
              return "string" == typeof e && alipan_device_id_pattern.test(e);
            })(devices_id_string)
          )
            throw TypeError("Stringified UUID is invalid");
          return devices_id_string;
        },
        alipan_u = function (args_e, args_t, args_n) {
          var randomValue = (args_e = args_e || {}).random || (args_e.rng || alipan_o)();
          if (((randomValue[6] = (15 & randomValue[6]) | 64), (randomValue[8] = (63 & randomValue[8]) | 128), args_t));
          return alipan_c(randomValue);
        };
      return alipan_u();
    }
  }
  class NetDiskParse_Baidu extends ParseFileCore {
    async init(netDiskInfo) {
      super.init(netDiskInfo);
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
        accessCode,
      });
      let formElement = document.createElement("form");
      let formData = {};
      const urlParams = new URLSearchParams(postForm);
      formElement.action = url;
      formElement.method = "post";
      formElement.style.display = "none";
      formElement.target = "_blank";
      urlParams.forEach((value, key) => {
        const textAreaElement = document.createElement("textarea");
        textAreaElement.name = key;
        textAreaElement.value = value;
        formElement.appendChild(textAreaElement);
        formData[key] = value;
      });
      log.info("表单数据", formData);
      document.body.appendChild(formElement);
      log.info("访问网址", url);
      if (enableCopy) {
        NetDiskLinkClickMode.copy("baidu", ruleIndex, shareCode, accessCode, "1.5秒后跳转至解析站");
        setTimeout(() => {
          formElement.submit();
        }, 1500);
      } else {
        formElement.submit();
      }
    }
  }
  const NetDiskPops = {
    alert(details, sizeConfig) {
      const config = this.handleDetails(details, sizeConfig);
      return __pops.alert(config);
    },
    confirm(details, sizeConfig) {
      const config = this.handleDetails(details, sizeConfig);
      return __pops.confirm(config);
    },
    loading(details) {
      if (typeof details["animation"] === "undefined") {
        details["animation"] = NetDiskGlobalData.pops.popsAnimation.value;
      }
      if (typeof details["forbiddenScroll"] === "undefined") {
        details["forbiddenScroll"] = NetDiskView.$data.isForbiddenScrollByDefault;
      }
      return __pops.loading(details);
    },
    prompt(details, sizeConfig) {
      const config = this.handleDetails(details, sizeConfig);
      return __pops.prompt(config);
    },
    folder(details, sizeConfig) {
      const config = this.handleDetails(details, sizeConfig);
      config["sort"] = {
        name: NetDiskGlobalData.popsFolder["pops-folder-sort-name"].value,
        isDesc: NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].value,
        callback(target, event, sortName, sortDesc) {
          NetDiskGlobalData.popsFolder["pops-folder-sort-name"].value = sortName;
          NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].value = sortDesc;
        },
      };
      return __pops.folder(config);
    },
    panel(details, sizeConfig) {
      const config = this.handleDetails(details, sizeConfig);
      return __pops.panel(config);
    },
    rightClickMenu(details) {
      const config = this.handleDetails(details);
      return __pops.rightClickMenu(config);
    },
    handleDetails(details, sizeConfig) {
      details = Object.assign(
        {
          animation: NetDiskGlobalData.pops.popsAnimation.value,
          drag: NetDiskGlobalData.pops.pcDrag.value,
          dragLimit: NetDiskGlobalData.pops.pcDragLimit.value,
          forbiddenScroll: NetDiskView.$data.isForbiddenScrollByDefault,
        },
        details
      );
      if (sizeConfig != null) {
        if (__pops.isPhone()) {
          let popsWidth =
            typeof sizeConfig.Mobile.width === "function" ? sizeConfig.Mobile.width() : sizeConfig.Mobile.width;
          let popsHeight =
            typeof sizeConfig.Mobile.height === "function" ? sizeConfig.Mobile.height() : sizeConfig.Mobile.height;
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
        let acrylicCSS = `
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
            `;
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
    },
  };
  const indexCSS$4 =
    '.pops[type-value="alert"] .pops-alert-title:has(+ .pops-alert-content .netdisk-url-box-all:empty) {\r\n  border-bottom: none;\r\n}\r\n.netdisk-url-box {\r\n  border-bottom: 1px solid #e4e6eb;\r\n}\r\n.netdisk-url-div {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 5px 0px 5px 0px;\r\n}\r\n.netdisk-icon {\r\n  display: contents;\r\n}\r\n.netdisk-icon .netdisk-icon-img {\r\n  cursor: pointer;\r\n  width: 28px;\r\n  height: 28px;\r\n  min-width: 28px;\r\n  min-height: 28px;\r\n  font-size: 0.8em;\r\n  margin: 0px 10px;\r\n}\r\n.netdisk-url-div .netdisk-icon,\r\n.netdisk-url-div .netdisk-status {\r\n  flex: 0 0 auto;\r\n}\r\n.netdisk-url-div .netdisk-url {\r\n  flex: 1;\r\n}\r\n.netdisk-icon .netdisk-icon-img {\r\n  border-radius: 10px;\r\n  box-shadow:\r\n    0 0.3px 0.6px rgb(0 0 0 / 6%),\r\n    0 0.7px 1.3px rgb(0 0 0 / 8%),\r\n    0 1.3px 2.5px rgb(0 0 0 / 10%),\r\n    0 2.2px 4.5px rgb(0 0 0 / 12%),\r\n    0 4.2px 8.4px rgb(0 0 0 / 14%),\r\n    0 10px 20px rgb(0 0 0 / 20%);\r\n}\r\n.netdisk-status[data-check-failed] {\r\n  padding: 5px 5px;\r\n}\r\n.netdisk-url {\r\n  padding: 5px 5px;\r\n}\r\n.netdisk-url a {\r\n  color: #ff4848 !important;\r\n  min-height: 28px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  font-size: 0.8em;\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  width: fit-content;\r\n  height: 100%;\r\n  padding: 0px;\r\n  word-break: break-word;\r\n  text-align: left;\r\n}\r\n.netdisk-status {\r\n  display: none;\r\n}\r\n.netdisk-status[data-check-valid] {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 15px;\r\n  height: 15px;\r\n  color: #000000;\r\n}\r\n\r\n.netdisk-status[data-check-valid="failed"] {\r\n  color: red;\r\n}\r\n\r\n.netdisk-status[data-check-valid="partial-violation"] {\r\n  color: orange;\r\n}\r\n\r\n.netdisk-status[data-check-valid="error"] {\r\n  cursor: pointer;\r\n}\r\n\r\n.netdisk-status[data-check-valid="success"] {\r\n  color: green;\r\n}\r\n\r\n.netdisk-status[data-check-valid="verify"] {\r\n  color: #faad14;\r\n}\r\n\r\n.netdisk-status[data-check-valid="loading"] svg {\r\n  animation: rotating 2s linear infinite;\r\n}\r\n\r\n.netdisk-url-box:has(.netdisk-status[data-check-valid="failed"]) {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.whitesevPop-whitesevPopSetting :focus-visible {\r\n  outline-offset: 0;\r\n  outline: 0;\r\n}\r\n.netdisk-url a[isvisited="true"] {\r\n  color: #8b8888 !important;\r\n}\r\n.netdisk-url a:active {\r\n  box-shadow: 0 0 0 1px #616161 inset;\r\n}\r\n.netdisk-url a:focus-visible {\r\n  outline: 0;\r\n}\r\n.whitesevPop-content p[pop] {\r\n  text-indent: 0;\r\n}\r\n.whitesevPop-button[data-type="primary"] {\r\n  border-color: #2d8cf0;\r\n  background-color: #2d8cf0;\r\n}\r\n';
  const GenerateData = function (key, defaultValue) {
    return {
      KEY: key,
      default: defaultValue,
      get value() {
        let currentValue = _GM_getValue(key, defaultValue);
        return currentValue;
      },
      set value(newValue) {
        _GM_setValue(key, newValue);
      },
    };
  };
  const NetDiskLinkViewData = {
    generateViewData() {
      let data = [];
      NetDiskView.$data.isMatchedNetDiskIconMap.forEach((ruleKeyName) => {
        const netDiskDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
        netDiskDict.forEach((netDiskDictData, shareCode) => {
          data.push({
            ruleKeyName,
            shareCode,
            netDiskDictData,
          });
        });
      });
      data = Utils.sortListByProperty(data, (value) => value.netDiskDictData.matchTime, false);
      return data;
    },
  };
  const NetDiskLinkView = {
    $el: {
      get $urlBoxAll() {
        return NetDiskView.$el.$linkView.$shadowRoot.querySelector(".netdisk-url-box-all");
      },
    },
    $inst: {
      dataPaging: null,
    },
    $data: {
      dataPagingEnable: false,
    },
    show() {
      const dataPagingEnable = NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-enable"].value;
      if (NetDiskView.$el.$linkView == null) {
        this.$data.dataPagingEnable = dataPagingEnable;
        this.createLinkView();
        NetDiskLinkViewEvent.init();
      } else {
        NetDiskView.$el.$linkView.show();
        if (this.$data.dataPagingEnable !== dataPagingEnable) {
          if (dataPagingEnable) {
            this.$inst.dataPaging.show();
          } else {
            this.$inst.dataPaging.hide();
          }
          this.refreshLinkView();
          this.$data.dataPagingEnable = dataPagingEnable;
        }
      }
    },
    createLinkView() {
      const NetDiskViewConfig = {
        view: {
          "netdisl-small-window-shrink-status": GenerateData("netdisl-small-window-shrink-status", false),
          "netdisk-ui-small-window-position": GenerateData("netdisk-ui-small-window-position", null),
        },
      };
      const boxAllContainerHTML = `<div class="netdisk-url-search-wrapper"></div><div class="netdisk-url-box-all"></div><div class="netdisk-url-pagination-wrapper"></div>`;
      let hasSuspension = () =>
        NetDiskGlobalData.features["netdisk-behavior-mode"].value.toLowerCase().includes("suspension");
      let closeView = () => {
        if (hasSuspension()) {
          NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value = "suspension";
          NetDiskView.$el.$linkView.hide();
          NetDiskView.$inst.suspension.init();
        } else {
          NetDiskView.$el.$linkView.close();
          NetDiskView.$el.$linkView = void 0;
        }
      };
      const isSmallWindow = NetDiskGlobalData.features["netdisk-behavior-mode"].value
        .toLowerCase()
        .includes("smallwindow");
      if (isSmallWindow) {
        NetDiskView.$el.$linkView = NetDiskPops.alert(
          {
            title: {
              text: "网盘",
              position: "center",
            },
            content: {
              text: boxAllContainerHTML,
              html: true,
            },
            btn: {
              ok: {
                enable: false,
              },
              close: {
                callback() {
                  closeView();
                },
              },
            },
            mask: {
              enable: false,
            },
            animation: "",
            beforeAppendToPageCallBack($shadowRoot, $shadowContainer) {
              let $headerControl = $shadowRoot.querySelector(".pops-header-control");
              let $title = $shadowRoot.querySelector(".pops-alert-title");
              let $content = $shadowRoot.querySelector(".pops-alert-content");
              let launchIcon = domUtils.createElement(
                "button",
                {
                  className: "pops-header-control",
                  innerHTML: `
                                <i class="pops-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path fill="currentColor" d="M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
										</path>
									</svg>
                                </i>
                                `,
                },
                {
                  type: "button",
                  "data-type": "launch",
                  "data-header": true,
                }
              );
              let shrinkIcon = domUtils.createElement(
                "button",
                {
                  className: "pops-header-control",
                  innerHTML: `
                                <i class="pops-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path fill="currentColor" d="M618.496 425.984h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m-192.512 172.032h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m516.096-24.576c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
										</path>
									</svg>
                                </i>
                                `,
                },
                {
                  type: "button",
                  "data-type": "shrink",
                  "data-header": true,
                }
              );
              domUtils.before($headerControl, launchIcon);
              domUtils.before($headerControl, shrinkIcon);
              domUtils.on(
                launchIcon,
                "click",
                function () {
                  domUtils.addClass(launchIcon, "pops-hide-important");
                  domUtils.removeClass(shrinkIcon, "pops-hide-important");
                  domUtils.removeClass($title, "pops-no-border-important");
                  domUtils.removeClass($content, "pops-hide-important");
                  NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value = false;
                },
                {
                  capture: true,
                }
              );
              domUtils.on(
                shrinkIcon,
                "click",
                function () {
                  domUtils.removeClass(launchIcon, "pops-hide-important");
                  domUtils.addClass(shrinkIcon, "pops-hide-important");
                  domUtils.addClass($title, "pops-no-border-important");
                  domUtils.addClass($content, "pops-hide-important");
                  NetDiskViewConfig.view["netdisl-small-window-shrink-status"].value = true;
                },
                {
                  capture: true,
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
                top: top2,
              };
            },
            class: "whitesevPop netdisk-link-view-small-window",
            style: `
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
                    `,
          },
          NetDiskView.$config.viewSizeConfig.mainViewSmallWindow
        );
        let smallWindowPosition = NetDiskViewConfig.view["netdisk-ui-small-window-position"].value;
        let popsElement = NetDiskView.$el.$linkView.popsElement;
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
        NetDiskView.$el.$linkView = NetDiskPops.alert(
          {
            title: {
              text: "网盘",
              position: "center",
            },
            content: {
              text: boxAllContainerHTML,
              html: true,
            },
            btn: {
              ok: {
                enable: false,
              },
              close: {
                callback() {
                  closeView();
                },
              },
            },
            mask: {
              clickCallBack() {
                closeView();
              },
            },
            class: "whitesevPop netdisk-link-view-window",
            style: `
                    ${indexCSS$4}

                    .pops {
                        max-height: 60vh;
                    }
					@media screen and (max-width: 600px) {
						.pops {
                       		max-height: 50vh;
                    	}
					}
                    `,
          },
          NetDiskView.$config.viewSizeConfig.mainView
        );
      }
      const $paginationWrapper = NetDiskView.$el.$linkView.$shadowRoot.querySelector(".netdisk-url-pagination-wrapper");
      const data = NetDiskLinkViewData.generateViewData();
      const pageShowDataMaxCount =
        NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].value;
      this.$inst.dataPaging = new __DataPaging({
        data,
        pageShowDataMaxCount,
        pageMaxStep: isSmallWindow ? 2 : 4,
        currentPage: 1,
        pageChangeCallBack: async (page) => {
          NetDiskCheckLinkValidity.clearAllDelayCheckLinkValidity();
          const enableDataPaging = NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-enable"].value;
          await this.dataPagingChangeCallback({
            data: this.$inst.dataPaging.CONFIG.data,
            refreshView: true,
            page: enableDataPaging ? page : void 0,
          });
        },
      });
      this.$inst.dataPaging.addCSS(NetDiskView.$el.$linkView.$shadowRoot);
      this.$inst.dataPaging.append($paginationWrapper);
      const $style = domUtils.createElement("style", {
        type: "text/css",
        textContent: `
          .pops-content:has(.netdisk-url-pagination-wrapper){
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          .pops-content:has(.netdisk-url-pagination-wrapper) .netdisk-url-box-all{
            flex: 1;
            overflow: auto;
          }
          .pops-content .netdisk-url-pagination-wrapper{
            flex: 0;
            display: flex;
            justify-content: center;
            padding: 4px 0px;
          }
          .pops-content #data-paging-wrapper{

          }
          .pops-content #data-paging-wrapper a{

          }

          /* 小窗 */
          .netdisk-link-view-small-window #data-paging-wrapper{
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
          }
          .netdisk-link-view-small-window .pops-content .netdisk-url-pagination-wrapper{
            scale: 0.7;
            padding: 0px;
          }
        `,
      });
      NetDiskView.$el.$linkView.$shadowRoot.appendChild($style);
      if (NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-enable"].value);
      else {
        this.$inst.dataPaging.hide();
      }
      this.refreshLinkView();
      let netDiskLinkViewZIndex = NetDiskGlobalData.smallWindow["netdisk-link-view-z-index"].value;
      if (netDiskLinkViewZIndex > 0) {
        domUtils.css(NetDiskView.$el.$linkView.popsElement, {
          "z-index": netDiskLinkViewZIndex,
        });
      }
    },
    refreshLinkView() {
      const currentPage = this.$inst.dataPaging.PAGE_CONFIG.currentPage();
      this.$inst.dataPaging.CONFIG.pageChangeCallBack(currentPage);
    },
    clearLinkView() {
      domUtils.empty(this.$el.$urlBoxAll);
    },
    async dataPagingChangeCallback(config) {
      const { refreshView, page, isCheckValid } = config;
      let { data } = config;
      if (!data.length) {
        console.warn("data is empty");
        return;
      }
      if (refreshView) {
        this.clearLinkView();
      }
      let documentFragment = document.createDocumentFragment();
      const checkValidInfoList = [];
      let currentIndex = 0;
      let maxCount = data.length;
      let count = 0;
      if (typeof page === "number") {
        const dataCount = NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].value;
        maxCount = dataCount;
        currentIndex = (page - 1) * dataCount;
      }
      while (true) {
        if (currentIndex > data.length - 1) {
          break;
        }
        if (count >= maxCount) {
          break;
        }
        const dataItem = data[currentIndex];
        const { ruleKeyName, netDiskDictData: netDiskData, shareCode } = dataItem;
        let uiLink = NetDisk.handleLinkShow({
          ruleKeyName,
          ruleIndex: netDiskData.ruleIndex,
          shareCode,
          accessCode: netDiskData.accessCode,
          matchText: netDiskData.matchText,
          showToast: false,
        });
        if (!uiLink) {
          continue;
        }
        let boxViewInfo = this.createBoxItemInfo(
          NetDiskView.$inst.icon.getIcon(ruleKeyName),
          ruleKeyName,
          netDiskData["ruleIndex"],
          shareCode,
          netDiskData["accessCode"],
          uiLink
        );
        checkValidInfoList.push({
          $urlBox: boxViewInfo.$urlBox,
          ruleKeyName,
          ruleIndex: netDiskData.ruleIndex,
          shareCode,
          accessCode: netDiskData.accessCode,
        });
        documentFragment.appendChild(boxViewInfo.$urlBox);
        currentIndex++;
        count++;
      }
      this.$el.$urlBoxAll.appendChild(documentFragment);
      if (isCheckValid ?? true) {
        NetDiskCheckLinkValidity.check(checkValidInfoList);
      }
    },
    addBoxItemView(ruleKeyName, ruleIndex, shareCode, accessCode, matchText) {
      NetDiskView.$inst.historyMatch.changeMatchedData(ruleKeyName, ruleIndex, shareCode, accessCode, matchText);
      if (!NetDiskView.$el.$linkView) {
        return;
      }
      log.info(ruleKeyName, ruleIndex, shareCode, accessCode);
      let icon = NetDiskView.$inst.icon.getIcon(ruleKeyName);
      let uiLink = NetDisk.handleLinkShow({
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
        matchText,
      });
      if (!uiLink) {
        return;
      }
      this.$inst.dataPaging.changeConfig({
        data: NetDiskLinkViewData.generateViewData(),
      });
      this.$inst.dataPaging.refresh(this.$inst.dataPaging.CONFIG.data);
      if (
        this.$inst.dataPaging.PAGE_CONFIG.currentPage() === this.$inst.dataPaging.PAGE_CONFIG.maxPage ||
        !this.$data.dataPagingEnable
      ) {
        let boxViewInfo = this.createBoxItemInfo(icon, ruleKeyName, ruleIndex, shareCode, accessCode, uiLink);
        this.$el.$urlBoxAll.appendChild(boxViewInfo.$urlBox);
        NetDiskCheckLinkValidity.check({
          $urlBox: boxViewInfo.$urlBox,
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode,
        });
      }
    },
    changeBoxItemView(ruleKeyName, ruleIndex, shareCode, accessCode, matchText) {
      NetDiskView.$inst.historyMatch.changeMatchedData(ruleKeyName, ruleIndex, shareCode, accessCode, matchText);
      if (!NetDiskView.$el.$linkView) {
        return;
      }
      let uiLink = NetDisk.handleLinkShow({
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
        matchText,
      });
      if (!uiLink) {
        return;
      }
      let $url = NetDiskView.$el.$linkView.popsElement.querySelector(
        `.netdisk-url a[data-sharecode='${shareCode}'][data-rule-index='${ruleIndex}']`
      );
      if ($url) {
        log.info("修改网盘链接视图");
        log.info($url);
        $url.setAttribute("data-accesscode", accessCode);
        domUtils.html($url, uiLink);
      }
    },
    createBoxAttrRuleInfo(data) {
      return {
        "data-rule-key": data.ruleKeyName,
        "data-rule-index": data.ruleIndex,
        "data-sharecode": data.shareCode,
        "data-accesscode": data.accessCode,
      };
    },
    parseBoxAttrRuleInfo($el) {
      let result = {
        ruleKeyName: $el.getAttribute("data-rule-key"),
        ruleIndex: parseInt($el.getAttribute("data-rule-index")),
        shareCode: $el.getAttribute("data-sharecode"),
        accessCode: $el.getAttribute("data-accesscode"),
      };
      if (isNaN(result.ruleIndex)) {
        log.warn("元素上的 ruleIndex 的值是NaN，调整为默认值0", $el);
        result.ruleIndex = 0;
      }
      return result;
    },
    handleBoxAttrRuleInfo(data, $el) {
      let ruleInfoJSON = this.createBoxAttrRuleInfo(data);
      for (const key in ruleInfoJSON) {
        const value = ruleInfoJSON[key];
        if (Array.isArray($el)) {
          $el.forEach(($ele) => {
            $ele.setAttribute(key, value.toString());
          });
        } else {
          $el.setAttribute(key, value.toString());
        }
      }
    },
    createBoxItemInfo(ruleImgSrc, ruleKeyName, ruleIndex, shareCode, accessCode, uiLinkText) {
      let $urlBox = domUtils.createElement("div", {
        className: "netdisk-url-box",
        innerHTML: `
			<div class="netdisk-url-div">
          <div class="netdisk-icon">
              <div class="netdisk-icon-img"></div>
          </div>
          <div class="netdisk-status"></div>
          <div class="netdisk-url">
              <a  class="netdisk-link" href="javascript:;" isvisited="false"></a>
          </div>
      </div>
			`,
      });
      const { $urlDiv, $icon, $iconImg, $checkValidStatus, $url, $link } = this.parseBoxItemInfo($urlBox);
      $iconImg.style.cssText = `background: url(${ruleImgSrc}) no-repeat;background-size: 100%;`;
      domUtils.html($link, uiLinkText);
      this.handleBoxAttrRuleInfo(
        {
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode,
        },
        [$iconImg, $link]
      );
      NetDisk.$rule.rule.forEach((ruleConfig) => {
        if (ruleConfig.setting.key === ruleKeyName && typeof ruleConfig.afterRenderUrlBox === "function") {
          ruleConfig.afterRenderUrlBox({
            $viewBox: $urlBox,
            $urlDiv,
            $url,
            $link,
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode,
          });
        }
      });
      return {
        $urlBox,
        $urlDiv,
        $icon,
        $iconImg,
        $checkValidStatus,
        $url,
        $link,
      };
    },
    parseBoxItemInfo($viewBox) {
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
        $link,
      };
    },
  };
  class RuleFilterView {
    option;
    $data = {
      isFilteredData: [],
    };
    constructor(option) {
      this.option = option;
    }
    showView() {
      let $alert = __pops.alert({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                <div class="filter-container"></div>
                `,
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default",
          },
        },
        drag: true,
        mask: {
          enable: true,
        },
        width: window.innerWidth > 500 ? "350px" : "80vw",
        height: window.innerHeight > 500 ? "300px" : "70vh",
        style: `
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
            `,
      });
      let $filterContainer = $alert.$shadowRoot.querySelector(".filter-container");
      let $fragment = document.createDocumentFragment();
      this.option.filterOption.forEach((filterOption) => {
        let $button = domUtils.createElement(
          "button",
          {
            innerText: filterOption.name,
          },
          {
            type: "button",
          }
        );
        let execFilterAndCloseDialog = async () => {
          this.$data.isFilteredData = [];
          let allRuleInfo = await this.option.getAllRuleInfo();
          allRuleInfo.forEach(async (ruleInfo) => {
            let filterResult = await filterOption.filterCallBack(ruleInfo.data);
            if (filterResult) {
              domUtils.show(ruleInfo.$el, false);
            } else {
              domUtils.hide(ruleInfo.$el, false);
              this.$data.isFilteredData.push(ruleInfo.data);
            }
          });
          if (typeof this.option.execFilterCallBack === "function") {
            await this.option.execFilterCallBack();
          }
          $alert.close();
        };
        domUtils.on($button, "click", async (event) => {
          domUtils.preventEvent(event);
          if (typeof filterOption.callback === "function") {
            let result = await filterOption.callback(event, execFilterAndCloseDialog);
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
    getFilteredData() {
      return this.$data.isFilteredData;
    }
  }
  class RuleEditView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView() {
      let $dialog = __pops.confirm({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,
          html: true,
        },
        btn: utils.assign(
          {
            ok: {
              callback: async () => {
                await submitSaveOption();
              },
            },
          },
          this.option.btn || {},
          true
        ),
        drag: true,
        mask: {
          enable: true,
        },
        style: `
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
            `,
        width:
          typeof this.option.width === "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
        height:
          typeof this.option.height === "function" ? this.option.height() : window.innerHeight > 500 ? "500px" : "80vh",
      });
      let $form = $dialog.$shadowRoot.querySelector(".rule-form-container");
      $dialog.$shadowRoot.querySelector("input[type=submit]");
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
    async showView(filterCallBack) {
      const that = this;
      let contentConfigList = this.option.contentConfig;
      contentConfigList.forEach((config) => {
        config.forms = [];
        config.headerTitle = config.headerTitle || config.title;
        if (config.subscribe?.enable) {
          config.headerTitle =
            config.headerTitle +
            `
					<div class="subscribe-container">
						<button class="subscribe-btn" type="button" data-type="subscribe" data-has-icon="false" data-righticon="false">
							<span>${config.subscribe?.title || "订阅"}</span>
						</button>
					</div>`;
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
              domUtils.preventEvent(event2);
              await subscribeOption?.callback?.();
              let deepMenuElementInfo = await this.enterDeepMenu(
                $panelRightContainer,
                subscribeOption?.headerTitle || subscribeOption?.title || "订阅",
                () => {
                  this.updateRuleContaienrElement(config.ruleOption, subscribeOption, $panelRightContainer);
                }
              );
              let $subscribeRightContainer = deepMenuElementInfo.$rightRuleContainer;
              this.createButtonControls(
                $subscribeRightContainer,
                $subscribeRightContainer,
                subscribeOption,
                async () => {
                  let $prompt = __pops.prompt({
                    title: {
                      text: "添加订阅",
                      position: "center",
                    },
                    content: {
                      text: "",
                      focus: true,
                      placeholder: "输入URL",
                    },
                    btn: {
                      cancel: {
                        enable: false,
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
                            let subscribeInfoResult = await subscribeOption?.getSubscribeInfo(subscribeUrl);
                            if (subscribeInfoResult.data) {
                              eventDetails.close();
                              let subscribeInfo = subscribeInfoResult.data;
                              let title =
                                subscribeInfo.data.title || subscribeInfo.subscribeData.title || subscribeInfo.data.url;
                              let $subscribeNetworkAddDialog = __pops.alert({
                                title: {
                                  text: "添加订阅",
                                  position: "center",
                                },
                                content: {
                                  text: `
																	<div class="subscribe-network-title">
																		<span>订阅链接名称：</span>
																		<input type="text" placeholder="输入订阅链接的名称">
																	</div>
																	<div class="subscribe-network-data-count"></div>
																	<div class="subscribe-network-home-url"></div>
																	<div class="subscribe-network-url"></div>
																	<div class="subscribe-network-version"></div>
																	<div class="subscribe-network-last-modified"></div>
																`,
                                  html: true,
                                },
                                btn: {
                                  ok: {
                                    text: "添加",
                                    type: "subscribe",
                                    callback: async (eventDetails2, event4) => {
                                      let addFlag = await subscribeOption.addData(subscribeInfo);
                                      if (!addFlag) {
                                        Qmsg.error("该订阅已存在", {
                                          consoleLogContent: true,
                                        });
                                      }
                                      that.updateRuleContaienrElement(
                                        subscribeOption,
                                        subscribeOption,
                                        deepMenuElementInfo.$section
                                      );
                                      eventDetails2.close();
                                    },
                                  },
                                },
                                drag: true,
                                mask: {
                                  enable: true,
                                },
                                width: PanelUISize.setting.width,
                                height: "auto",
                                style: `
																.pops button[data-type="subscribe"]{
																	--button-color: #ffffff;
																	--button-bd-color: #67b279;
																	--button-bg-color: #67b279;
																}
																.pops button[data-type="subscribe"]:hover{
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
															`,
                              });
                              let $subscribeNetworkAddDialog_title_input =
                                $subscribeNetworkAddDialog.$shadowRoot.querySelector(".subscribe-network-title input");
                              let $subscribeNetworkAddDialog_count =
                                $subscribeNetworkAddDialog.$shadowRoot.querySelector(".subscribe-network-data-count");
                              let $subscribeNetworkAddDialog_homeUrl =
                                $subscribeNetworkAddDialog.$shadowRoot.querySelector(".subscribe-network-home-url");
                              let $subscribeNetworkAddDialog_url =
                                $subscribeNetworkAddDialog.$shadowRoot.querySelector(".subscribe-network-url");
                              let $subscribeNetworkAddDialog_version =
                                $subscribeNetworkAddDialog.$shadowRoot.querySelector(".subscribe-network-version");
                              let $subscribeNetworkAddDialog_lastModified =
                                $subscribeNetworkAddDialog.$shadowRoot.querySelector(
                                  ".subscribe-network-last-modified"
                                );
                              domUtils.val($subscribeNetworkAddDialog_title_input, title);
                              domUtils.on(
                                $subscribeNetworkAddDialog_title_input,
                                ["input", "propertychange"],
                                (event4) => {
                                  let inputValue = domUtils.val($subscribeNetworkAddDialog_title_input);
                                  subscribeInfo.data.title = inputValue === "" ? void 0 : inputValue;
                                }
                              );
                              domUtils.html(
                                $subscribeNetworkAddDialog_count,
                                `
																<span>规则数量：</span>
																<span>${subscribeInfo.subscribeData.ruleData.length}</span>
															`
                              );
                              if (typeof subscribeInfo.subscribeData.homePage === "string") {
                                domUtils.html(
                                  $subscribeNetworkAddDialog_homeUrl,
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
                                `
																<span>URL：</span>
																<a href="${subscribeInfo.data.url}" target="_blank">${subscribeInfo.data.url}</a>
															`
                              );
                              if (subscribeInfo.subscribeData.version != null) {
                                domUtils.html(
                                  $subscribeNetworkAddDialog_version,
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
                                consoleLogContent: true,
                              });
                            }
                          } catch (error) {
                            Qmsg.error(error.toString(), {
                              consoleLogContent: true,
                            });
                          } finally {
                            $loading.close();
                          }
                        },
                      },
                    },
                    drag: true,
                    mask: {
                      enable: true,
                    },
                    width: PanelUISize.info.width,
                    height: "auto",
                  });
                  let $promptInput = $prompt.$shadowRoot.querySelector("input");
                  let $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok ");
                  domUtils.on($promptInput, ["input", "propertychange"], (event3) => {
                    let promptValue = domUtils.val($promptInput);
                    if (promptValue === "") {
                      domUtils.attr($promptOk, "disabled", "true");
                    } else {
                      domUtils.removeAttr($promptOk, "disabled");
                    }
                  });
                  domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList, event3) => {
                    if (keyName === "Enter" && otherCodeList.length === 0) {
                      domUtils.preventEvent(event3);
                      domUtils.trigger($promptOk, "click");
                    }
                  });
                  domUtils.trigger($promptInput, "input");
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
          await this.addRuleElement(config.ruleOption, void 0, $panelRightContainer, allData, (ruleItemData, $rule) => {
            let flag = typeof filterCallBack === "function" ? filterCallBack(ruleItemData) : true;
            if (!flag) {
              changeButtonText = true;
              domUtils.hide($rule, false);
            }
          });
          if (changeButtonText && ruleCreateViewElementInfo.$ruleControlFilter) {
            domUtils.text(ruleCreateViewElementInfo.$ruleControlFilter, "取消过滤");
          }
        };
      });
      __pops.panel({
        title: {
          text: typeof this.option.title === "function" ? this.option.title() : this.option.title,
          position: "center",
        },
        content: contentConfigList,
        btn: {
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        drag: true,
        mask: {
          enable: true,
          clickEvent: {
            toClose: false,
          },
        },
        class: this.option.className || "rule-panel-view",
        width: PanelUISize.settingBig.width,
        height: PanelUISize.settingBig.height,
        style: `
                ${this.option.style || ""}
                .pops button[data-type="subscribe"]{
                    --button-color: #ffffff;
                    --button-bd-color: #67b279;
                    --button-bg-color: #67b279;
                }
                .pops button[data-type="subscribe"]:hover{
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
					margin: var(--pops-panel-forms-container-item-margin-top-bottom) var(--pops-panel-forms-margin-left-right);
					gap: var(--pops-panel-forms-container-item-margin-top-bottom);
				}

				.rule-view-container{
					margin: 0;
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
				.rule-controls button{
					margin: 0;
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

				section.pops-panel-container > ul li:not(.pops-panel-forms-container-item){
					margin: 0;
				}
            `,
      });
    }
    async enterDeepMenu($el, headerTitle, quiteDeepMenuCallBack) {
      const animOptions = {
        duration: 220,
        easing: "ease-in-out",
      };
      const $currentSection = $el.matches("section") ? $el : $el.closest("section");
      const $deepMenuSection = domUtils.createElement("section", {
        className: "pops-panel-container pops-panel-deepMenu-container",
        innerHTML: `
				<ul class="pops-panel-container-header-ul pops-panel-deepMenu-container-header-ul">
					<li class="pops-panel-container-header-title-text pops-panel-deepMenu-container-header">
						<i class="pops-panel-deepMenu-container-left-arrow-icon">${__pops.config.iconSVG.arrowLeft}</i>
						<p class="pops-panel-deepMenu-container-header-title-text">${headerTitle}</p>
					</li>
				</ul>
				<ul class="pops-panel-container-main-ul"></ul>
			`,
      });
      const $headerContainer = $deepMenuSection.querySelector(".pops-panel-deepMenu-container-header-ul");
      const $arrowLeft = $deepMenuSection.querySelector(".pops-panel-deepMenu-container-left-arrow-icon");
      const $rightRuleContainer = $deepMenuSection.querySelector(".pops-panel-container-main-ul");
      domUtils.on($arrowLeft, "click", async (event) => {
        domUtils.preventEvent(event);
        const leaveViewTransition = () => {
          const $prev = $currentSection;
          domUtils.removeClass($prev, "pops-hide-important");
          domUtils.remove($deepMenuSection);
          quiteDeepMenuCallBack();
        };
        if (this.option.useDeepMenuSwtichAnimation && document.startViewTransition) {
          const leaveTransition = document.startViewTransition(leaveViewTransition);
          await leaveTransition.ready;
          await Promise.all([
            $deepMenuSection.animate(
              [
                {
                  transform: "translateX(0)",
                },
                {
                  transform: "translateX(100%)",
                },
              ],
              animOptions
            ).finished,
            $currentSection.animate(
              [
                {
                  transform: "translateX(-100%)",
                },
                {
                  transform: "translateX(0)",
                },
              ],
              animOptions
            ).finished,
          ]);
          await leaveTransition.finished;
        } else {
          leaveViewTransition();
        }
      });
      const enterViewTransition = () => {
        domUtils.addClass($currentSection, "pops-hide-important");
        domUtils.after($currentSection, $deepMenuSection);
      };
      if (this.option.useDeepMenuSwtichAnimation && document.startViewTransition) {
        const transition = document.startViewTransition(enterViewTransition);
        await transition.ready;
        await $deepMenuSection.animate(
          [
            {
              transform: "translateX(100%)",
            },
            {
              transform: "translateX(0)",
            },
          ],
          animOptions
        ).finished;
        await transition.finished;
      } else {
        enterViewTransition();
      }
      return {
        $section: $deepMenuSection,
        $headerContainer,
        $arrowLeft,
        $rightRuleContainer,
        quiteDeepMenu: () => {
          $arrowLeft.click();
        },
      };
    }
    createButtonControls($controlsParent, $rightContainer, option, addButtonCallBack) {
      let btnControlsOption = option.btnControls;
      let $ruleControls = domUtils.createElement("li", {
        className: "rule-controls",
      });
      domUtils.append($controlsParent, $ruleControls);
      let $ruleControlAdd = null;
      if (btnControlsOption?.add?.enable) {
        $ruleControlAdd = domUtils.createElement(
          "button",
          {
            className: "rule-control-add",
            innerHTML: `<span>添加</span>`,
          },
          {
            type: "button",
            "data-type": "primary",
            "data-has-icon": "false",
            "data-righticon": "false",
          }
        );
        domUtils.on($ruleControlAdd, "click", async (event) => {
          domUtils.preventEvent(event);
          let result = await option.btnControls?.add?.callback?.call(this, {
            event,
            $section: $rightContainer,
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
            innerHTML: `<span>过滤</span>`,
          },
          {
            type: "button",
            "data-type": "default",
            "data-has-icon": "false",
            "data-righticon": "false",
          }
        );
        domUtils.on($ruleControlFilter, "click", async (event) => {
          domUtils.preventEvent(event);
          let result = await btnControlsOption?.filter?.callback?.();
          if (typeof result === "boolean" && !result) {
            return;
          }
          let getAllRuleElement = () => {
            return Array.from($rightContainer.querySelectorAll(".rule-view-container .rule-item"));
          };
          let $button = $ruleControlFilter;
          if ($button) {
            if (domUtils.text($button).includes("取消")) {
              let cancelFilterResult = await btnControlsOption?.filter?.cancelFilterCallback?.({
                $button,
                getAllRuleElement,
              });
              if (typeof cancelFilterResult === "boolean" && !cancelFilterResult) {
                return;
              }
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
              let ruleFilterView = new RuleFilterView({
                title: filterTitle,
                filterOption: btnControlsOption?.filter?.option || [],
                execFilterCallBack() {
                  domUtils.text($button, "取消过滤");
                },
                getAllRuleInfo: () => {
                  return getAllRuleElement().map(($el) => {
                    return {
                      data: this.parseRuleElement($el).data,
                      $el,
                    };
                  });
                },
              });
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
            innerHTML: `<span>清空所有</span>`,
          },
          {
            type: "button",
            "data-type": "xiaomi-primary",
            "data-has-icon": "false",
            "data-righticon": "false",
          }
        );
        domUtils.on($ruleControlClearAll, "click", (event) => {
          domUtils.preventEvent(event);
          let $askDialog = __pops.confirm({
            title: {
              text: "提示",
              position: "center",
            },
            content: {
              text: "确定清空所有的数据？",
              html: false,
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
                },
              },
              cancel: {
                text: "取消",
                enable: true,
              },
            },
            drag: true,
            mask: {
              enable: true,
            },
            width: "300px",
            height: "200px",
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
            innerHTML: `<span>导入</span>`,
          },
          {
            type: "button",
            "data-type": "default",
            "data-has-icon": "false",
            "data-righticon": "false",
          }
        );
        domUtils.on($ruleControlImport, "click", async (event) => {
          domUtils.preventEvent(event);
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
            innerHTML: `<span>导出</span>`,
          },
          {
            type: "button",
            "data-type": "default",
            "data-has-icon": "false",
            "data-righticon": "false",
          }
        );
        domUtils.on($ruleControlExport, "click", async (event) => {
          domUtils.preventEvent(event);
          let result = await btnControlsOption?.export?.callback?.({
            event,
          });
          if (typeof result === "boolean" && !result) {
            return;
          }
        });
        domUtils.append($ruleControls, $ruleControlExport);
      }
      let $ruleContainer = domUtils.createElement("div", {
        className: "rule-view-container",
        innerHTML: ``,
      });
      domUtils.append($rightContainer, $ruleContainer);
      return {
        $ruleContainer,
        $ruleControls,
        $ruleControlAdd,
        $ruleControlFilter,
        $ruleControlClearAll,
        $ruleControlImport,
        $ruleControlExport,
      };
    }
    parseViewElement($el) {
      let $container = $el.querySelector(".rule-view-container");
      let $deleteBtn = $el.querySelector(".rule-control-clear-all");
      return {
        $container,
        $deleteBtn,
      };
    }
    parseRuleElement($ruleItem) {
      let $enable = $ruleItem.querySelector(".rule-controls-enable");
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(".pops-panel-switch__input");
      let $enableSwitchCore = $enable.querySelector(".pops-panel-switch__core");
      let $edit = $ruleItem.querySelector(".rule-controls-edit");
      let $delete = $ruleItem.querySelector(".rule-controls-delete");
      return {
        $enable,
        $enableSwitch,
        $enableSwitchInput,
        $enableSwitchCore,
        $edit,
        $delete,
        data: Reflect.get($ruleItem, "data-rule"),
      };
    }
    async createRuleElement(option, subscribeOption, data, $el) {
      let ruleData = data;
      let name = await option.getDataItemName(ruleData);
      let $ruleItem = domUtils.createElement("div", {
        className: "rule-item",
        innerHTML: `
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
			`,
      });
      Reflect.set($ruleItem, "data-rule", ruleData);
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const { $enable, $enableSwitch, $enableSwitchCore, $enableSwitchInput, $delete, $edit } =
        this.parseRuleElement($ruleItem);
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
            let subscribeInfo = await subscribeOption.getSubscribeInfo(subscribeData.data.url);
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
          domUtils.preventEvent(event);
          if (typeof option.btnControls?.ruleEdit?.callback === "function") {
            let result = option.btnControls?.ruleEdit?.callback({
              context: this,
              event,
              option,
              subscribeOption,
              ruleData,
              $section: $el,
              $ruleItem,
              enterDeepMenu: async (deepMenuOption) => {
                let deepMenuElementInfo = await this.enterDeepMenu($el, deepMenuOption.headerTitle || "", () => {
                  this.updateRuleContaienrElement(option, subscribeOption, $el);
                });
                let $deepMenuRightContainer = deepMenuElementInfo.$rightRuleContainer;
                this.createButtonControls(
                  $deepMenuRightContainer,
                  deepMenuElementInfo.$rightRuleContainer,
                  deepMenuOption,
                  void 0
                );
                let allRuleData = await deepMenuOption.data();
                await this.addRuleElement(deepMenuOption, void 0, deepMenuElementInfo.$section, allRuleData);
              },
            });
            if (typeof result === "boolean" && !result) {
              return;
            }
          }
          this.showEditView(option, subscribeOption, true, ruleData, $el, $ruleItem, (newData) => {
            ruleData = null;
            ruleData = newData;
          });
        });
      } else {
        $edit.remove();
      }
      if (option?.btnControls?.ruleDelete?.enable) {
        domUtils.on($delete, "click", (event) => {
          domUtils.preventEvent(event);
          let $askDialog = __pops.confirm({
            title: {
              text: "提示",
              position: "center",
            },
            content: {
              text: "确定删除该条数据？",
              html: false,
            },
            btn: {
              ok: {
                enable: true,
                callback: async (popsEvent) => {
                  log.success("删除数据");
                  let flag = await option?.btnControls?.ruleDelete?.deleteCallBack(ruleData);
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText(option, $el);
                    $askDialog.close();
                  } else {
                    Qmsg.error("删除该数据失败");
                  }
                },
              },
              cancel: {
                text: "取消",
                enable: true,
              },
            },
            drag: true,
            mask: {
              enable: true,
            },
            width: "300px",
            height: "200px",
          });
        });
      } else {
        $delete.remove();
      }
      return $ruleItem;
    }
    async addRuleElement(option, subscribeOption, $el, data, addCallBack) {
      let { $container } = this.parseViewElement($el);
      let $ruleItem = [];
      let iteratorData = Array.isArray(data) ? data : [data];
      let documentFragment = document.createDocumentFragment();
      for (let index = 0; index < iteratorData.length; index++) {
        let item = iteratorData[index];
        let $item = await this.createRuleElement(option, subscribeOption, item, $el);
        documentFragment.appendChild($item);
        addCallBack?.(item, $item);
        $ruleItem.push($item);
      }
      $container.appendChild(documentFragment);
      await this.updateDeleteAllBtnText(option, $el);
      return $ruleItem;
    }
    async updateRuleContaienrElement(option, subscribeOption, $el) {
      this.clearContent($el);
      const { $container } = this.parseViewElement($el);
      let data = await option.data();
      await this.addRuleElement(option, subscribeOption, $el, data);
      await this.updateDeleteAllBtnText(option, $el);
    }
    async updateRuleItemElement(option, subscribeOption, data, $oldRule, $el) {
      let $newRule = await this.createRuleElement(option, subscribeOption, data, $el);
      $oldRule.after($newRule);
      $oldRule.remove();
      return $newRule;
    }
    clearContent($el) {
      const { $container } = this.parseViewElement($el);
      domUtils.html($container, "");
    }
    setDeleteBtnText($el, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($el);
      if (isHTML) {
        domUtils.html($deleteBtn, text);
      } else {
        domUtils.text($deleteBtn, text);
      }
    }
    async updateDeleteAllBtnText(option, $el) {
      let data = await option.data();
      let dataCount = data.length;
      let text = `清空所有`;
      if (dataCount !== 0) {
        text += `(${dataCount})`;
      }
      this.setDeleteBtnText($el, text);
    }
    showEditView(option, subscribeOption, isEdit, editData, $parent, $ruleItem, updateDataCallBack, submitCallBack) {
      let dialogCloseCallBack = async (isSubmit) => {
        if (isSubmit) {
          if (typeof submitCallBack === "function") {
            let newData = await option.getData(editData);
            submitCallBack(newData);
          }
        } else {
          if (!isEdit) {
            await option.deleteData(editData);
          }
          if (typeof updateDataCallBack === "function") {
            let newData = await option.getData(editData);
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
          return await option.btnControls?.ruleEdit?.getView?.(data, isEdit);
        },
        btn: {
          ok: {
            enable: true,
            text: isEdit ? "修改" : "添加",
          },
          cancel: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
          close: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
        },
        onsubmit: async ($form, data) => {
          let result = await option?.btnControls?.ruleEdit?.onsubmit?.($form, isEdit, data);
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              $parent && (await this.updateRuleItemElement(option, subscribeOption, result.data, $ruleItem, $parent));
            } else {
              $parent && (await this.addRuleElement(option, subscribeOption, $parent, result.data));
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
        height: option?.btnControls?.ruleEdit?.viewHeight,
      });
      editView.showView();
    }
  }
  let RuleSubscribe$1 = class RuleSubscribe {
    option;
    storageApi;
    constructor(option) {
      this.option = option;
      this.storageApi = new StorageUtils(option.STORAGE_API_KEY);
    }
    getAllSubscribe() {
      let allSubscribe = this.storageApi.get(this.option.STORAGE_KEY, []);
      return allSubscribe;
    }
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
    getSubscribe(subscribeUUID) {
      let findValue = this.getAllSubscribe().find((rule) => rule.uuid == subscribeUUID);
      return findValue;
    }
    getSubscribeRule(subscribeUUID, uuid) {
      let findSubscribe = this.getSubscribe(subscribeUUID);
      if (findSubscribe) {
        let findRule = findSubscribe.subscribeData.ruleData.find((rule) => rule.uuid === uuid);
        return findRule;
      }
    }
    deleteAllSubscribe() {
      this.storageApi.delete(this.option.STORAGE_KEY);
    }
    deleteSubscribe(config) {
      let uuid = typeof config === "string" ? config : config.uuid;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === uuid);
      if (findIndex !== -1) {
        allSubscribe.splice(findIndex, 1);
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return findIndex !== -1;
    }
    clearSubscribe(config) {
      let uuid = typeof config === "string" ? config : config.uuid;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === uuid);
      if (findIndex !== -1) {
        allSubscribe[findIndex].subscribeData.ruleData = [];
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
        return true;
      } else {
        return false;
      }
    }
    addSubscribe(subscribe) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === subscribe.uuid);
      if (findIndex === -1) {
        allSubscribe.push(subscribe);
        flag = true;
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return flag;
    }
    updateSubscribe(subscribe) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === subscribe.uuid);
      if (findIndex !== -1) {
        allSubscribe[findIndex] = subscribe;
        flag = true;
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return flag;
    }
    updateSubscribeRule(subscribeUUID, rule) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let targetSubscribe = allSubscribe.find((subscribeItem) => subscribeItem.uuid === subscribeUUID);
      if (targetSubscribe) {
        let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex((ruleItem) => ruleItem.uuid === rule.uuid);
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
    deleteSubscribeRule(subscribeUUID, rule) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === subscribeUUID);
      if (findIndex !== -1) {
        let targetSubscribe = allSubscribe[findIndex];
        let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex((ruleItem) => ruleItem.uuid === rule.uuid);
        if (findRuleIndex !== -1) {
          allSubscribe[findIndex].subscribeData.ruleData.splice(findRuleIndex, 1);
          this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
          flag = true;
        }
      }
      return flag;
    }
    async getSubscribeInfo(url) {
      let response = await httpx.get(url, {
        allowInterceptConfig: false,
        timeout: 1e4,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
      });
      if (!response.status) {
        log.error(response);
        return {
          data: null,
          msg: "获取订阅信息失败",
        };
      }
      let subscribeText = response.data.responseText;
      let subscribeParsedData = utils.toJSON(subscribeText);
      if (
        typeof subscribeParsedData.title === "string" &&
        typeof subscribeParsedData.version === "number" &&
        typeof subscribeParsedData.lastModified === "number" &&
        Array.isArray(subscribeParsedData.ruleData)
      ) {
        let subscribeInfo = {
          uuid: utils.generateUUID(),
          subscribeData: subscribeParsedData,
          data: {
            enable: true,
            url,
            latestUpdateTime: Date.now(),
            updateFailedTime: null,
          },
        };
        return {
          data: subscribeInfo,
          msg: "",
        };
      } else {
        log.error(subscribeParsedData);
        return {
          data: null,
          msg: "订阅链接的内容格式不正确",
        };
      }
    }
    async updateAllSubscribe() {
      let allSubscribe = this.getAllSubscribe();
      for (let index = 0; index < allSubscribe.length; index++) {
        const subscribeItem = allSubscribe[index];
        if (!subscribeItem.data.enable) {
          continue;
        }
        if (
          typeof subscribeItem.data.updateFailedTime === "number" &&
          utils.formatTime(subscribeItem.data.updateFailedTime, "yyyyMMdd") === utils.formatTime(Date.now(), "yyyyMMdd")
        ) {
          continue;
        }
        if (
          typeof subscribeItem.data.latestUpdateTime === "number" &&
          utils.formatTime(Date.now(), "yyyyMMdd") === utils.formatTime(subscribeItem.data.latestUpdateTime, "yyyyMMdd")
        ) {
          continue;
        }
        let requestSubscribeInfo = await this.getSubscribeInfo(subscribeItem.data.url);
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
    importSubscribe(importEndCallBack) {
      let $alert = __pops.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        drag: true,
        mask: {
          enable: true,
        },
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
            `,
      });
      let $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
      let $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
      let $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
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
              data: dataItem,
            });
          } else {
            addNewData.push(dataItem);
          }
        }
        await new Promise((resolve) => {
          let confirmResult = globalThis.confirm(`存在相同的uuid的规则 ${repeatData.length}条，是否进行覆盖？`);
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
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          let demoFirst = data[0];
          if (
            !(
              typeof demoFirst.data === "object" &&
              demoFirst.data != null &&
              typeof demoFirst.subscribeData === "object" &&
              demoFirst.subscribeData != null &&
              typeof demoFirst.uuid === "string"
            )
          ) {
            Qmsg.error("导入失败，解析的格式不符合", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          await updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json",
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
        domUtils.preventEvent(event);
        $alert.close();
        let $prompt = __pops.prompt({
          title: {
            text: "网络导入",
            position: "center",
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true,
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              },
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
                  allowInterceptConfig: false,
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
              },
            },
            cancel: {
              enable: false,
            },
          },
          drag: true,
          mask: {
            enable: true,
          },
          width: PanelUISize.info.width,
          height: "auto",
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
          if (keyName === "Enter" && otherCodeList.length === 0) {
            let value = domUtils.val($promptInput);
            if (value !== "") {
              domUtils.trigger($promptOk, "click");
            }
          }
        });
        domUtils.trigger($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        domUtils.preventEvent(event);
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
    exportSubscribe(fileName = "rule.json") {
      let $alert = __pops.alert({
        title: {
          text: "请选择导出方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出订阅</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        drag: true,
        mask: {
          enable: true,
        },
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
            `,
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']");
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
        domUtils.preventEvent(event);
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
    STORAGE_KEY: "character-mapping-subscribe-rule",
  });
  const UISelectMultiple = function (
    text,
    key,
    defaultValue,
    data,
    selectCallBack,
    description,
    placeholder = "请至少选择一个选项",
    selectConfirmDialogDetails,
    valueChangeCallBack
  ) {
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
      data: selectData,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select-multiple", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const CharacterMappingStorageApi = new StorageUtils("character-mapping-rule");
  const CharacterMapping = {
    $data: {
      STORAGE_KEY: "character-mapping",
      EXPORT_CONFIG_KEY: "rule-export-config",
    },
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        subscribeUUID: null,
        enable: true,
        name: "",
        data: {
          url: "",
          isRegExp: true,
          regExpFlag: "gi",
          searchValue: "",
          replaceValue: "",
        },
        dynamicData: [],
      };
    },
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
          },
        };
      }
      const ruleEditHandler = (data, isEdit) => {
        if (!isEdit) {
          data = addData();
        }
        let $fragment = document.createDocumentFragment();
        let enable_template = UISwitch("启用", "enable", true);
        Reflect.set(enable_template.props, PROPS_STORAGE_API, generateStorageApi(data));
        let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template);
        let name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
        Reflect.set(name_template.props, PROPS_STORAGE_API, generateStorageApi(data));
        let $name = panelHandlerComponents.createSectionContainerItem_input(name_template);
        let url_template = UIInput("匹配网址", "url", "", "", void 0, "必填，可正则");
        Reflect.set(url_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
        let $data_url = panelHandlerComponents.createSectionContainerItem_input(url_template);
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
          Reflect.set(data_searchValue_template.props, PROPS_STORAGE_API, generateStorageApi(storageData));
          let $data_searchValue = panelHandlerComponents.createSectionContainerItem_input(data_searchValue_template);
          let data_isRegExp_template = UISwitch(
            "是否启用正则",
            "isRegExp",
            template_data.data.isRegExp,
            void 0,
            "使用正则进行匹配字符规则"
          );
          Reflect.set(data_isRegExp_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
          let $data_isRegExp = panelHandlerComponents.createSectionContainerItem_switch(data_isRegExp_template);
          let data_regExpFlag_template = UISelectMultiple(
            "正则标识符",
            "regExpFlag",
            template_data.data.regExpFlag.split(""),
            ["g", "i", "m", "u", "y"].map((it) => {
              return {
                text: it.toLowerCase(),
                value: it.toLowerCase(),
              };
            }),
            void 0,
            "",
            "点击选择标识符"
          );
          Reflect.set(data_regExpFlag_template.props, PROPS_STORAGE_API, {
            get(key, defaultValue) {
              return data.data[key] ?? defaultValue;
            },
            set(key, value) {
              if (Array.isArray(value)) {
                value = value.join("");
              }
              data.data[key] = value;
            },
          });
          let $data_regExpFlag =
            panelHandlerComponents.createSectionContainerItem_select_multiple_new(data_regExpFlag_template);
          let data_replaceValue_template = UIInput(
            "映射为",
            "replaceValue",
            template_data.data.replaceValue,
            "",
            void 0,
            ""
          );
          Reflect.set(data_replaceValue_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
          let $data_replaceValue = panelHandlerComponents.createSectionContainerItem_input(data_replaceValue_template);
          return {
            $data_searchValue,
            $data_isRegExp,
            $data_regExpFlag,
            $data_replaceValue,
          };
        };
        let $dynamicContainer = domUtils.createElement("div", {
          className: "rule-form-ulist-dynamic",
          innerHTML: `
												<div class="rule-form-ulist-dynamic__inner">

												</div>
												<div class="pops-panel-button pops-panel-button-no-icon">
													<button class="pops-panel-button_inner" type="button" data-type="default">
														<i class="pops-bottom-icon" is-loading="false"></i>
														<span class="pops-panel-button-text">添加额外属性</span>
													</button>
												</div>`,
        });
        let $dynamicInner = $dynamicContainer.querySelector(".rule-form-ulist-dynamic__inner");
        let $addDynamicButton = $dynamicContainer.querySelector(".pops-panel-button");
        let addDynamicElementItem = (dynamicData) => {
          let template_data = this.getTemplateData();
          dynamicData = dynamicData ?? {
            searchValue: template_data.data.searchValue,
            isRegExp: template_data.data.isRegExp,
            regExpFlag: template_data.data.regExpFlag,
            replaceValue: template_data.data.replaceValue,
          };
          let $dynamicUListContainer = domUtils.createElement("div", {
            className: "rule-form-ulist-dynamic__inner-container",
            innerHTML: `
										<div class="dynamic-control-delete">
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="danger">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">×</span>
												</button>
											</div>
										</div>
										<ul class="dynamic-forms">

										</ul>`,
          });
          let $dynamicDelete = $dynamicUListContainer.querySelector(".dynamic-control-delete");
          domUtils.on($dynamicDelete, "click", (event) => {
            domUtils.preventEvent(event);
            $dynamicUListContainer.remove();
            if (Array.isArray(data.dynamicData)) {
              let findIndex = data.dynamicData.findIndex((it) => it == dynamicData);
              if (findIndex !== -1) {
                data.dynamicData.splice(findIndex, 1);
              }
            }
          });
          let $dynamicUList = $dynamicUListContainer.querySelector(".dynamic-forms");
          let { $data_searchValue, $data_isRegExp, $data_regExpFlag, $data_replaceValue } =
            getDynamicPropElement(dynamicData);
          $dynamicUList.appendChild($data_searchValue);
          $dynamicUList.appendChild($data_isRegExp);
          $dynamicUList.appendChild($data_regExpFlag);
          $dynamicUList.appendChild($data_replaceValue);
          $dynamicInner.appendChild($dynamicUListContainer);
        };
        domUtils.on($addDynamicButton, "click", (event) => {
          domUtils.preventEvent(event);
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
      };
      const ruleEditSubmitHandler = ($form, isEdit, editData) => {
        let $ulist_li = $form.querySelectorAll(".rule-form-ulist > li");
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
        $form.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(($inner) => {
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
            let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
            let value = storageApi.get(key, defaultValue);
            Reflect.set(dynamicData, key, value);
          });
          data.dynamicData.push(dynamicData);
        });
        if (data.name.trim() === "") {
          Qmsg.error("规则名称不能为空");
          return {
            success: false,
            data,
          };
        }
        if (data.data.url.trim() === "") {
          Qmsg.error("匹配网址不能为空");
          return {
            success: false,
            data,
          };
        }
        if (
          data.data.searchValue.trim() === "" ||
          (Array.isArray(data.dynamicData) && data.dynamicData.findIndex((it) => it.searchValue.trim() === "") !== -1)
        ) {
          Qmsg.error("字符规则不能为空");
          return {
            success: false,
            data,
          };
        }
        if (isEdit) {
          return {
            success: this.updateData(data),
            data,
          };
        } else {
          return {
            success: this.addData(data),
            data,
          };
        }
      };
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
            return `
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
                )}${
                  typeof subscribeOption.data.updateFailedTime === "number"
                    ? `，<span style="color: red;">更新失败于：${utils.formatTime(
                        subscribeOption.data.updateFailedTime,
                        "yyyy年MM月dd日 HH:mm:ss"
                      )}</span>`
                    : ``
                }</div>
								${subscribeOption.subscribeData.homePage ? `<a href="${subscribeOption.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${subscribeOption.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`;
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
              enable: true,
            },
            filter: {
              enable: true,
              title: "过滤订阅",
              option: [
                {
                  name: "过滤【已启用】的订阅",
                  filterCallBack(data) {
                    return data.data.enable;
                  },
                },
                {
                  name: "过滤【未启用】的订阅",
                  filterCallBack(data) {
                    return !data.data.enable;
                  },
                },
              ],
            },
            clearAll: {
              enable: true,
              callback: () => {
                CharacterMappingSubscribe.deleteAllSubscribe();
              },
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.data.enable;
              },
              async callback(data, enable) {
                data.data.enable = enable;
                CharacterMappingSubscribe.updateSubscribe(data);
              },
            },
            ruleEdit: {
              enable: true,
              callback: (option) => {
                let subscribeUUID = option.ruleData.uuid;
                option.enterDeepMenu({
                  headerTitle:
                    option.ruleData.data.title || option.ruleData.subscribeData.title || option.ruleData.data.url,
                  data() {
                    let currentData = CharacterMappingSubscribe.getSubscribe(subscribeUUID);
                    return currentData?.subscribeData?.ruleData ?? option.ruleData.subscribeData.ruleData;
                  },
                  getData(data) {
                    let currentData = CharacterMappingSubscribe.getSubscribeRule(subscribeUUID, data.uuid);
                    return currentData ?? data;
                  },
                  getDataItemName(data) {
                    return data.name ?? data.data.url;
                  },
                  addData(data) {
                    return true;
                  },
                  updateData(data) {
                    return CharacterMappingSubscribe.updateSubscribeRule(subscribeUUID, data);
                  },
                  deleteData(data) {
                    return CharacterMappingSubscribe.deleteSubscribeRule(subscribeUUID, data);
                  },
                  btnControls: {
                    filter: {
                      enable: true,
                      title: "规则过滤",
                      option: [
                        {
                          name: "仅显示【已启用】的规则",
                          filterCallBack(data) {
                            return data.enable;
                          },
                        },
                        {
                          name: "仅显示【未启用】的规则",
                          filterCallBack(data) {
                            return !data.enable;
                          },
                        },
                        {
                          name: "仅显示【在当前网址生效】的规则",
                          filterCallBack(data) {
                            return CharacterMapping.checkRuleMatch(data);
                          },
                        },
                      ],
                    },
                    clearAll: {
                      enable: true,
                      callback: () => {
                        CharacterMappingSubscribe.clearSubscribe(subscribeUUID);
                      },
                    },
                    ruleEnable: {
                      enable: true,
                      getEnable(data) {
                        return data.enable;
                      },
                      callback(data, enable) {
                        data.enable = enable;
                        CharacterMappingSubscribe.updateSubscribeRule(subscribeUUID, data);
                      },
                    },
                    ruleEdit: {
                      enable: true,
                      getView: ruleEditHandler,
                      onsubmit: ruleEditSubmitHandler,
                    },
                    ruleDelete: {
                      enable: true,
                      deleteCallBack(data) {
                        return CharacterMappingSubscribe.deleteSubscribeRule(subscribeUUID, data);
                      },
                    },
                  },
                });
                return false;
              },
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return CharacterMappingSubscribe.deleteSubscribe(data);
              },
            },
            import: {
              enable: true,
              callback(updateView) {
                CharacterMappingSubscribe.importSubscribe(() => {
                  updateView();
                });
              },
            },
            export: {
              enable: true,
              callback() {
                CharacterMappingSubscribe.exportSubscribe(_SCRIPT_NAME_ + "-字典映射-订阅.json");
              },
            },
          },
          getSubscribeInfo: CharacterMappingSubscribe.getSubscribeInfo.bind(CharacterMappingSubscribe),
        },
        ruleOption: {
          btnControls: {
            add: {
              enable: true,
            },
            filter: {
              enable: true,
              title: "规则过滤",
              option: [
                {
                  name: "仅显示【已启用】的规则",
                  filterCallBack(data) {
                    return data.enable;
                  },
                },
                {
                  name: "仅显示【未启用】的规则",
                  filterCallBack(data) {
                    return !data.enable;
                  },
                },
                {
                  name: "仅显示【在当前网址生效】的规则",
                  filterCallBack(data) {
                    return that.checkRuleMatch(data);
                  },
                },
              ],
            },
            clearAll: {
              enable: true,
              callback: () => {
                that.clearData();
              },
            },
            import: {
              enable: true,
              callback: (updateView) => {
                that.importRule(() => {
                  updateView();
                });
              },
            },
            export: {
              enable: true,
              callback: () => {
                that.exportRule(_SCRIPT_NAME_ + "-字符映射.json", _SCRIPT_NAME_ + "-字符映射-订阅模式.json");
              },
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.enable;
              },
              callback: (data, enable) => {
                data.enable = enable;
                that.updateData(data);
              },
            },
            ruleEdit: {
              enable: true,
              getView: ruleEditHandler,
              onsubmit: ruleEditSubmitHandler,
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return that.deleteData(data);
              },
            },
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
          },
        },
      };
      return rulePanelViewOption;
    },
    checkRuleMatch(rule, url = window.location.href) {
      const regExp = rule.data.isRegExp ? new RegExp(rule.data.url, rule.data.regExpFlag) : rule.data.url;
      return Boolean(url.match(regExp));
    },
    getUrlMatchedRule(filterUnEnable = true, url = window.location.href) {
      let allData = this.getData();
      const allSubscribeRule = CharacterMappingSubscribe.getAllSubscribeRule(filterUnEnable);
      allData = allData.concat(allSubscribeRule);
      return allData.filter((rule) => {
        if (filterUnEnable && !rule.enable) {
          return;
        }
        return this.checkRuleMatch(rule, url);
      });
    },
    getMappingData(url = window.location.href) {
      const matchedRule = this.getUrlMatchedRule(true, url);
      let replaceMappingData = [];
      matchedRule.forEach((data) => {
        try {
          let iteratorData = Array.isArray(data.dynamicData) ? [...data.dynamicData].concat(data.data) : [data.data];
          for (let index = 0; index < iteratorData.length; index++) {
            const moreDataItem = iteratorData[index];
            if (moreDataItem.isRegExp) {
              replaceMappingData.push({
                searchValue: new RegExp(moreDataItem.searchValue, moreDataItem.regExpFlag),
                replaceValue: moreDataItem.replaceValue,
              });
            } else {
              replaceMappingData.push({
                searchValue: moreDataItem.searchValue,
                replaceValue: moreDataItem.replaceValue,
              });
            }
          }
        } catch (error) {
          log.error("字符映射规则转换发生错误：", error);
        }
      });
      return replaceMappingData;
    },
    getData() {
      return _GM_getValue(this.$data.STORAGE_KEY, []);
    },
    setData(data) {
      _GM_setValue(this.$data.STORAGE_KEY, data);
    },
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
    clearData() {
      _GM_deleteValue(this.$data.STORAGE_KEY);
    },
    exportRule(fileName = "rule.json", subscribeFileName = "rule-subscribe.json") {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导出方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
            `,
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']");
      let $exportToSubscribe = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-subscribe']");
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
        domUtils.preventEvent(event);
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
        domUtils.preventEvent(event);
        const that = this;
        $alert.close();
        try {
          let allRule = this.getData();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          let panelHandlerComponents = __pops.config.PanelHandlerComponents();
          let generateStorageApi = function (data) {
            return {
              get(key, defaultValue) {
                return data[key] ?? defaultValue;
              },
              set(key, value) {
                data[key] = value;
                CharacterMappingStorageApi.set(that.$data.EXPORT_CONFIG_KEY, data);
              },
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
              position: "center",
            },
            content: {
              text: `
							
						`,
              html: true,
            },
            btn: {
              ok: {
                enable: true,
                text: "导出",
                callback(details, event2) {
                  exportCallBack();
                },
              },
              close: {
                enable: true,
                callback(details, event2) {
                  details.close();
                },
              },
            },
            mask: {
              enable: true,
            },
            drag: true,
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
						${__pops.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`,
          });
          let $content = $exportSubscribeDialog.$shadowRoot.querySelector(".pops-alert-content");
          let configData = CharacterMappingStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
          let title_template = UIInput("订阅标题", "title", "", "", void 0, "");
          Reflect.set(title_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $title = panelHandlerComponents.createSectionContainerItem_input(title_template);
          let version_template = UIInput("版本号", "version", "", "", void 0, "", false);
          Reflect.set(version_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $version = panelHandlerComponents.createSectionContainerItem_input(version_template);
          let homePage_template = UIInput("主页地址", "homePage", "", "", void 0, "选填");
          Reflect.set(homePage_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $homePage = panelHandlerComponents.createSectionContainerItem_input(homePage_template);
          domUtils.append($content, $title);
          domUtils.append($content, $version);
          domUtils.append($content, $homePage);
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
    },
    importRule(importEndCallBack) {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `,
      });
      let $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
      let $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
      let $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
      let updateRuleToStorage = (data) => {
        let allData = this.getData();
        let addNewData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1);
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
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json",
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
        domUtils.preventEvent(event);
        $alert.close();
        let $prompt = NetDiskPops.prompt({
          title: {
            text: "网络导入",
            position: "center",
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true,
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              },
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
                  allowInterceptConfig: false,
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
              },
            },
            cancel: {
              enable: false,
            },
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto",
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
          if (keyName === "Enter" && otherCodeList.length === 0) {
            let value = domUtils.val($promptInput);
            if (value !== "") {
              domUtils.trigger($promptOk, "click");
            }
          }
        });
        domUtils.trigger($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        domUtils.preventEvent(event);
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
    },
  };
  const WebsiteSubscribeRule = new RuleSubscribe$1({
    STORAGE_API_KEY: "websiteRule",
    STORAGE_KEY: "rule-subscribe",
  });
  class RuleSubscribe2 {
    option;
    storageApi;
    constructor(option) {
      this.option = option;
      this.storageApi = new StorageUtils(option.STORAGE_API_KEY);
    }
    getAllSubscribe() {
      let allSubscribe = this.storageApi.get(this.option.STORAGE_KEY, []);
      return allSubscribe;
    }
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
    getSubscribe(subscribeUUID) {
      let findValue = this.getAllSubscribe().find((rule) => rule.uuid == subscribeUUID);
      return findValue;
    }
    getSubscribeRule(subscribeUUID, key) {
      let findSubscribe = this.getSubscribe(subscribeUUID);
      if (findSubscribe) {
        let findRule = findSubscribe.subscribeData.ruleData.find((rule) => rule.key === key);
        return findRule;
      }
    }
    deleteAllSubscribe() {
      this.storageApi.delete(this.option.STORAGE_KEY);
    }
    deleteSubscribe(config) {
      let uuid = typeof config === "string" ? config : config.uuid;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === uuid);
      if (findIndex !== -1) {
        allSubscribe.splice(findIndex, 1);
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return findIndex !== -1;
    }
    clearSubscribe(config) {
      let uuid = typeof config === "string" ? config : config.uuid;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === uuid);
      if (findIndex !== -1) {
        if (Array.isArray(allSubscribe[findIndex].subscribeData.ruleData)) {
          allSubscribe[findIndex].subscribeData.ruleData.length = 0;
        } else {
          allSubscribe[findIndex].subscribeData.ruleData = [];
        }
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
        return true;
      } else {
        return false;
      }
    }
    addSubscribe(subscribe) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === subscribe.uuid);
      if (findIndex === -1) {
        allSubscribe.push(subscribe);
        flag = true;
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return flag;
    }
    updateSubscribe(subscribe) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === subscribe.uuid);
      if (findIndex !== -1) {
        allSubscribe[findIndex] = subscribe;
        flag = true;
      }
      if (flag) {
        this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
      }
      return flag;
    }
    updateSubscribeRule(subscribeUUID, rule) {
      let flag = false;
      let allSubscribe = this.getAllSubscribe();
      let targetSubscribe = allSubscribe.find((subscribeItem) => subscribeItem.uuid === subscribeUUID);
      if (targetSubscribe) {
        let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex((ruleItem) => ruleItem.key === rule.key);
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
    deleteSubscribeRule(subscribeUUID, rule) {
      let flag = false;
      let key = typeof rule === "string" ? rule : rule.key;
      let allSubscribe = this.getAllSubscribe();
      let findIndex = allSubscribe.findIndex((subscribeItem) => subscribeItem.uuid === subscribeUUID);
      if (findIndex !== -1) {
        let targetSubscribe = allSubscribe[findIndex];
        let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex((ruleItem) => ruleItem.key === key);
        if (findRuleIndex !== -1) {
          allSubscribe[findIndex].subscribeData.ruleData.splice(findRuleIndex, 1);
          this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
          flag = true;
        }
      }
      return flag;
    }
    async getSubscribeInfo(url) {
      let response = await httpx.get(url, {
        allowInterceptConfig: false,
        timeout: 1e4,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
      });
      if (!response.status) {
        log.error(response);
        return {
          data: null,
          msg: "获取订阅信息失败",
        };
      }
      let subscribeText = response.data.responseText;
      let subscribeParsedData = utils.toJSON(subscribeText);
      if (
        typeof subscribeParsedData.title === "string" &&
        typeof subscribeParsedData.version === "number" &&
        typeof subscribeParsedData.lastModified === "number" &&
        Array.isArray(subscribeParsedData.ruleData)
      ) {
        let subscribeInfo = {
          uuid: utils.generateUUID(),
          subscribeData: subscribeParsedData,
          data: {
            enable: true,
            url,
            latestUpdateTime: Date.now(),
            updateFailedTime: null,
          },
        };
        return {
          data: subscribeInfo,
          msg: "",
        };
      } else {
        log.error(subscribeParsedData);
        return {
          data: null,
          msg: "订阅链接的内容格式不正确",
        };
      }
    }
    async updateAllSubscribe() {
      let allSubscribe = this.getAllSubscribe();
      for (let index = 0; index < allSubscribe.length; index++) {
        const subscribeItem = allSubscribe[index];
        if (!subscribeItem.data.enable) {
          continue;
        }
        if (
          typeof subscribeItem.data.updateFailedTime === "number" &&
          utils.formatTime(subscribeItem.data.updateFailedTime, "yyyyMMdd") === utils.formatTime(Date.now(), "yyyyMMdd")
        ) {
          continue;
        }
        if (
          typeof subscribeItem.data.latestUpdateTime === "number" &&
          utils.formatTime(Date.now(), "yyyyMMdd") === utils.formatTime(subscribeItem.data.latestUpdateTime, "yyyyMMdd")
        ) {
          continue;
        }
        let requestSubscribeInfo = await this.getSubscribeInfo(subscribeItem.data.url);
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
    importSubscribe(importEndCallBack) {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
            `,
      });
      let $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
      let $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
      let $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
      let updateRuleToStorage = (data) => {
        let allData = this.getAllSubscribe();
        let addNewData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1);
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
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          let demoFirst = data[0];
          if (
            !(
              typeof demoFirst.data === "object" &&
              demoFirst.data != null &&
              typeof demoFirst.subscribeData === "object" &&
              demoFirst.subscribeData != null &&
              typeof demoFirst.uuid === "string"
            )
          ) {
            Qmsg.error("导入失败，解析的格式不符合", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json",
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
        domUtils.preventEvent(event);
        $alert.close();
        let $prompt = NetDiskPops.prompt({
          title: {
            text: "网络导入",
            position: "center",
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true,
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              },
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
                  allowInterceptConfig: false,
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
              },
            },
            cancel: {
              enable: false,
            },
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto",
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
          if (keyName === "Enter" && otherCodeList.length === 0) {
            let value = domUtils.val($promptInput);
            if (value !== "") {
              domUtils.trigger($promptOk, "click");
            }
          }
        });
        domUtils.trigger($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        domUtils.preventEvent(event);
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
    exportSubscribe(fileName = "rule.json") {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导出方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出订阅</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
            `,
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']");
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
        domUtils.preventEvent(event);
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
    STORAGE_KEY: "rule-subscribe",
  });
  const NetDiskRuleManager = {
    init() {
      this.updateAllSubscribe();
    },
    getPanelView(defaultTab = 0) {
      let option = {
        title: "规则管理器",
        contentConfig: [
          NetDiskUserRule.getRulePanelViewOption(),
          WebsiteRule.getRulePanelViewOption(),
          CharacterMapping.getRulePanelViewOption(),
        ],
      };
      option.contentConfig = option.contentConfig.map((it, index) => {
        if (
          (typeof defaultTab === "number" && defaultTab === index) ||
          (typeof defaultTab === "string" && defaultTab === it.title)
        ) {
          it.isDefault = true;
        } else {
          it.isDefault = false;
        }
        return it;
      });
      let rulePanelView = new RulePanelView(option);
      return rulePanelView;
    },
    showView(defaultTab) {
      let rulePanelView = this.getPanelView(defaultTab);
      rulePanelView.showView();
    },
    updateAllSubscribe() {
      NetDiskUserRuleSubscribeRule.updateAllSubscribe();
      WebsiteSubscribeRule.updateAllSubscribe();
      CharacterMappingSubscribe.updateAllSubscribe();
    },
  };
  const NetDiskWorkerUtils = {
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
              childNode: queryShadowRoot($childNodeShadowRoot),
            });
          }
        });
        return $queryChildNodeList;
      }
      queryShadowRoot($target);
      return result;
    },
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
    getSelectContent() {
      let result = {
        text: "",
        html: "",
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
    },
  };
  const indexCSS$3 =
    '.whitesevPopNetDiskHistoryMatch .pops-confirm-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content ul {\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  border-radius: 10px;\r\n  box-shadow:\r\n    0 0.3px 0.6px rgb(0 0 0 / 6%),\r\n    0 0.7px 1.3px rgb(0 0 0 / 8%),\r\n    0 1.3px 2.5px rgb(0 0 0 / 10%),\r\n    0 2.2px 4.5px rgb(0 0 0 / 12%),\r\n    0 4.2px 8.4px rgb(0 0 0 / 14%),\r\n    0 10px 20px rgb(0 0 0 / 20%);\r\n  margin: 20px 10px;\r\n  padding: 10px;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search {\r\n  /*height: 11%;*/\r\n  flex: 0;\r\n  padding: 5px 0px;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-table {\r\n  /*height: calc(85% - 40px);*/\r\n  overflow: auto;\r\n  flex: 1;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-page {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /*margin-top: 10px;*/\r\n  flex: 0;\r\n  padding: 5px 0px;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input {\r\n  border: none;\r\n  border-bottom: 1px solid #000000;\r\n  padding: 0px 5px;\r\n  line-height: normal;\r\n  width: -moz-available;\r\n  width: -webkit-fill-available;\r\n  width: fill-available;\r\n  margin: 5px 5px 0px 5px;\r\n  background: none;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input:focus-visible {\r\n  outline: none;\r\n  border-bottom: 1px solid #0009ff;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link {\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a {\r\n  color: #ff4848;\r\n  font-size: 0.8em;\r\n  border: none;\r\n  word-break: break-word;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a[isvisited="true"] {\r\n  color: #8b8888;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon {\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon .netdisk-icon-img {\r\n  width: 28px;\r\n  height: 28px;\r\n  min-width: 28px;\r\n  min-height: 28px;\r\n  font-size: 0.8em;\r\n  border-radius: 10px;\r\n  box-shadow:\r\n    0 0.3px 0.6px rgb(0 0 0 / 6%),\r\n    0 0.7px 1.3px rgb(0 0 0 / 8%),\r\n    0 1.3px 2.5px rgb(0 0 0 / 10%),\r\n    0 2.2px 4.5px rgb(0 0 0 / 12%),\r\n    0 4.2px 8.4px rgb(0 0 0 / 14%),\r\n    0 10px 20px rgb(0 0 0 / 20%);\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url {\r\n  color: #000;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url {\r\n  color: #000;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete {\r\n  background: #263cf3;\r\n  color: #fff;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete:active {\r\n  background: #6e7be8;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions {\r\n  display: flex;\r\n  margin: 5px 0px;\r\n}\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title p,\r\n.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions p {\r\n  min-width: 80px;\r\n  max-width: 80px;\r\n  align-self: center;\r\n}\r\n';
  const NetDiskHistoryMatchView = {
    storageKey: "netDiskHistoryMatch",
    isSetOtherEvent: false,
    dataPaging: void 0,
    show() {
      let data = this.getStorageData();
      let dataHTML = "";
      let that = this;
      data = this.orderNetDiskHistoryMatchData(data);
      dataHTML = `
        <div class="netdiskrecord-search">
            <input type="text" placeholder="搜索链接/网址/网址标题，按下回车进行搜索（可正则）">
        </div>
        <div class="netdiskrecord-table">
			<ul></ul>
		</div>
        <div class="netdiskrecord-page">

        </div>`;
      NetDiskView.$el.$historyView = NetDiskPops.confirm(
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
            close: {
              callback(details) {
                details.close();
                NetDiskView.$el.$historyView = void 0;
              },
            },
            ok: {
              enable: false,
              callback(details) {
                details.close();
                NetDiskView.$el.$historyView = void 0;
              },
            },
            cancel: {
              enable: true,
              text: "关闭",
              callback(details) {
                details.close();
                NetDiskView.$el.$historyView = void 0;
              },
            },
            other: {
              enable: true,
              text: `清空所有(${data.length})`,
              type: "xiaomi-primary",
              callback: () => {
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
                      callback(clearAllDialog) {
                        that.clearStorageData();
                        that.clearLinkElements();
                        that.clearPageNavigator();
                        clearAllDialog.close();
                        let $recordPage = NetDiskView.$el.$historyView.$shadowRoot.querySelector(".netdiskrecord-page");
                        let $btnOther =
                          NetDiskView.$el.$historyView.$shadowRoot.querySelector(".pops-confirm-btn-other");
                        domUtils.html($recordPage, "");
                        domUtils.text($btnOther, domUtils.text($btnOther).replace(/[\d]+/gi, "0"));
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
          mask: {
            clickCallBack(originalRun) {
              originalRun();
              NetDiskView.$el.$historyView = null;
            },
          },
          class: "whitesevPopNetDiskHistoryMatch",
          style: indexCSS$3,
        },
        NetDiskView.$config.viewSizeConfig.historyMatchView
      );
      this.addLinkElements(data.slice(0, 9));
      this.setDataPaging(data);
      this.setEvent(NetDiskView.$el.$historyView.$shadowRoot);
      this.setSearchEvent();
      NetDiskViewRightClickMenu.setRightClickMenu(
        NetDiskView.$el.$historyView.$shadowRoot.querySelector(".whitesevPopNetDiskHistoryMatch"),
        ".netdiskrecord-link a",
        true
      );
    },
    getLinkContainer() {
      let $linkContainer = NetDiskView.$el.$historyView.$shadowRoot.querySelector(".netdiskrecord-table ul");
      return $linkContainer;
    },
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
    createLinkItemElementInfo(data) {
      let uiLink = NetDisk.handleLinkShow({
        ruleKeyName: data.ruleKeyName,
        ruleIndex: data.ruleIndex,
        shareCode: data.shareCode,
        accessCode: data.accessCode,
        matchText: data.matchText,
      });
      let $liItemContainer = domUtils.createElement("li", {
        innerHTML: `
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
				<button class="btn-delete" type="button">删除</button>
			</div>
			`,
      });
      let $link = $liItemContainer.querySelector(".netdiskrecord-link");
      let $linkAnchor = $link.querySelector("a");
      let $icon = $liItemContainer.querySelector(".netdiskrecord-icon");
      let $iconImg = $liItemContainer.querySelector(".netdisk-icon-img");
      let $url = $liItemContainer.querySelector(".netdiskrecord-url");
      let $urlTitle = $liItemContainer.querySelector(".netdiskrecord-url-title");
      let $addTime = $liItemContainer.querySelector(".netdiskrecord-add-time");
      let $updateTime = $liItemContainer.querySelector(".netdiskrecord-update-time");
      let $features = $liItemContainer.querySelector(".netdiskrecord-functions");
      let $featuresBtnDelete = $features.querySelector(".btn-delete");
      NetDiskLinkView.handleBoxAttrRuleInfo(
        {
          ruleKeyName: data.ruleKeyName,
          ruleIndex: data.ruleIndex,
          shareCode: data.shareCode,
          accessCode: data.accessCode,
        },
        $linkAnchor
      );
      $iconImg.style.cssText = `background: url(${NetDiskView.$inst.icon.getIcon(data.ruleKeyName)}) no-repeat;background-size:100%`;
      if (data.url !== data.topURL) {
        let $topUrl = domUtils.createElement("div", {
          className: "netdiskrecord-top-url",
          innerHTML: `
				<p>Top网址</p>
				<a href="${data.topURL}" target="_blank">${data.topURL}</a>
				`,
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
        html: $liItemContainer.outerHTML,
      };
    },
    clearLinkElements() {
      let $liItemContainer = this.getLinkContainer();
      domUtils.empty($liItemContainer);
    },
    clearPageNavigator() {
      domUtils.remove(NetDiskView.$el.$historyView.$shadowRoot.querySelectorAll(".netdiskrecord-page > *"));
    },
    setEvent(target) {
      let that = this;
      NetDiskLinkViewEvent.setNetDiskUrlClickEvent(target, ".netdiskrecord-link a");
      domUtils.on(target, "click", ".netdiskrecord-functions button.btn-delete", function (event) {
        let $btnOther = target.querySelector(".pops-confirm-btn-other");
        let deleteLoading = NetDiskPops.loading({
          parent: that.getLinkContainer(),
          content: {
            text: "删除中...",
          },
          only: true,
          addIndexCSS: false,
        });
        let clickNode = event.target;
        let dataJSON = clickNode.getAttribute("data-json");
        clickNode.closest("li")?.remove();
        that.deleteStorageData(dataJSON);
        deleteLoading?.close();
        let totalNumberText = domUtils.text($btnOther);
        let totalNumberMatch = totalNumberText.match(/[\d]+/gi);
        let totalNumber = parseInt(totalNumberMatch[totalNumberMatch.length - 1]);
        totalNumber--;
        totalNumberText = totalNumberText.replace(/[\d]+/gi, totalNumber.toString());
        domUtils.text($btnOther, totalNumberText);
        let data = that.getStorageData();
        data = that.orderNetDiskHistoryMatchData(data);
        that.dataPaging.refresh(data);
        that.pageChangeCallBack(data, that.dataPaging.CONFIG.currentPage);
      });
    },
    pageChangeCallBack(data, page) {
      let startIndex = (page - 1) * 10;
      let startData = data.slice(startIndex, startIndex + 9);
      this.clearLinkElements();
      this.addLinkElements(startData);
    },
    setDataPaging(data) {
      let that = this;
      let dataPaging = new __DataPaging({
        data,
        pageShowDataMaxCount: 10,
        pageMaxStep: __pops.isPhone() ? 2 : 4,
        currentPage: 1,
        pageChangeCallBack: function (page) {
          that.pageChangeCallBack(data, page);
        },
      });
      this.dataPaging = dataPaging;
      dataPaging.addCSS(NetDiskView.$el.$historyView.$shadowRoot);
      const $paginationWrapper = NetDiskView.$el.$historyView.$shadowRoot.querySelector(
        ".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
      );
      dataPaging.append($paginationWrapper);
    },
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
            text: "搜索中...",
          },
          only: true,
          addIndexCSS: false,
        });
        let searchText = NetDiskView.$el.$historyView.$shadowRoot
          .querySelector(".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input")
          .value.trim();
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
            showToast: false,
          });
          if (!uiLink) {
            log.info(dataOption);
          }
          let searchTextRegExp = utils.toRegExp(searchText, "i");
          if (
            (typeof uiLink === "string" && uiLink.match(searchTextRegExp)) ||
            dataOption.shareCode.match(searchTextRegExp) ||
            dataOption.url.match(searchTextRegExp) ||
            dataOption.topURL.match(searchTextRegExp) ||
            dataOption.title.match(searchTextRegExp)
          ) {
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
        NetDiskView.$el.$historyView.$shadowRoot.querySelector(
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
    syncAccessCode(ruleKeyName, ruleIndex, shareCode, accessCode) {
      if (NetDiskGlobalData.historyMatch.saveMatchNetDisk.value) {
        let flag = NetDiskHistoryMatchView.changeMatchedDataAccessCode(ruleKeyName, ruleIndex, shareCode, accessCode);
        if (flag) {
          log.success("已成功同步访问码至历史匹配记录");
          return true;
        } else {
          log.error("同步访问码至历史匹配记录失败");
        }
      }
      return false;
    },
    changeMatchedDataAccessCode(ruleKeyName, ruleIndex, shareCode, accessCode) {
      let storageDataList = this.getStorageData();
      let flag = false;
      for (let index = 0; index < storageDataList.length; index++) {
        const localData = storageDataList[index];
        if (
          localData.ruleKeyName === ruleKeyName &&
          String(localData.ruleIndex) === String(ruleIndex) &&
          localData.shareCode === shareCode
        ) {
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
    changeMatchedData(ruleKeyName, ruleIndex, shareCode, accessCode, matchText) {
      if (!NetDiskGlobalData.historyMatch.saveMatchNetDisk.value) {
        return false;
      }
      let storageDataList = this.getStorageData();
      let flag = false;
      for (let index = 0; index < storageDataList.length; index++) {
        const localData = storageDataList[index];
        if (
          localData.ruleKeyName === ruleKeyName &&
          shareCode.startsWith(localData.shareCode) &&
          localData.ruleIndex === ruleIndex
        ) {
          if (
            NetDiskGlobalData.historyMatch["netdisk-history-match-merge-same-link"].value ||
            (localData.url === window.location.href && localData.topURL === top.window.location.href)
          ) {
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
            matchText,
          },
        ];
      }
      this.saveStorageData(storageDataList);
      return true;
    },
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
          if (typeof itemData.ruleKeyName !== "string" && typeof itemData.netDiskName === "string") {
            itemData.ruleKeyName = itemData.netDiskName;
            delete itemData.netDiskName;
            repairFlag = true;
          }
          if (typeof itemData.ruleIndex !== "number" && typeof itemData.netDiskIndex === "number") {
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
        repairCount,
      };
    },
    getStorageData() {
      let data = _GM_getValue(this.storageKey, []);
      if (data == null) {
        data = [];
        this.saveStorageData(data);
      }
      return data;
    },
    saveStorageData(data) {
      _GM_setValue(this.storageKey, data);
    },
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
    clearStorageData() {
      this.saveStorageData([]);
    },
  };
  const NetDiskWorkerInitError = {
    addHost(hostName) {
      let neverTipHostNameList = this.getList();
      if (!neverTipHostNameList.includes(hostName)) {
        neverTipHostNameList.push(hostName);
      }
      this.updateList(neverTipHostNameList);
    },
    findHost(hostName) {
      let neverTipHostNameList = this.getList();
      let findIndex = neverTipHostNameList.findIndex((it) => it === hostName);
      return findIndex !== -1;
    },
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
    getList() {
      let neverTipHostNameList = _GM_getValue(NetDiskWorker.neverTipWorkerInitErrorKey, []);
      if (!Array.isArray(neverTipHostNameList)) {
        neverTipHostNameList = [neverTipHostNameList];
      }
      return neverTipHostNameList;
    },
    updateList(hostNameList) {
      _GM_setValue(NetDiskWorker.neverTipWorkerInitErrorKey, hostNameList);
    },
  };
  const NetDiskXhrHook = {
    $data: {
      ajaxHooker: null,
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
              from: "Xhr",
            });
          }
        };
      });
    },
  };
  const NetDiskWorker = {
    isHandleMatch: false,
    workerInitError: null,
    neverTipWorkerInitErrorKey: "never-toast-worker-error",
    delayNotMatchCount: 0,
    postMessageType: "worker-init-error",
    dispatchMonitorDOMChange: false,
    blobUrl: "",
    GM_matchWorker: void 0,
    init() {
      this.listenWorkerInitErrorDialog();
      this.initWorkerBlobUrl();
      this.initWorker();
      this.monitorDOMChange();
    },
    initWorkerBlobUrl() {
      const handleMatch = `
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
  		`;
      let workerScript = new Blob([handleMatch], {
        type: "application/javascript",
      });
      let workerUrl = window.URL.createObjectURL(workerScript);
      if (window.trustedTypes && typeof window.trustedTypes.createPolicy === "function") {
        const workerPolicy = window.trustedTypes.createPolicy("workerPolicy", {
          createScriptURL: (url) => url,
        });
        workerUrl = workerPolicy.createScriptURL(workerUrl);
      }
      NetDiskWorker.blobUrl = workerUrl;
    },
    handleRegularMatch(workerOptionData, callback) {
      const ruleKeyNameList = Object.keys(workerOptionData.matchedRuleOption);
      const matchTextList = [];
      for (let matchTextItem of workerOptionData.textList) {
        for (let index = 0; index < workerOptionData.characterMapping.length; index++) {
          const characterMapping = workerOptionData.characterMapping[index];
          try {
            if (typeof characterMapping.searchValue === "string") {
              matchTextItem = matchTextItem.replaceAll(characterMapping.searchValue, characterMapping.replaceValue);
            } else {
              matchTextItem = matchTextItem.replace(characterMapping.searchValue, characterMapping.replaceValue);
            }
          } catch (error) {}
        }
        matchTextList.push(matchTextItem);
      }
      for (const ruleKeyName of ruleKeyNameList) {
        const ruleOption = workerOptionData.matchedRuleOption[ruleKeyName];
        for (let index = 0; index < ruleOption.length; index++) {
          const netDiskRegularItem = ruleOption[index];
          let matchRegExpList = [];
          if (workerOptionData.matchTextRange.includes("innerText")) {
            matchRegExpList.push(new RegExp(netDiskRegularItem["link_innerText"], "gi"));
          }
          if (workerOptionData.matchTextRange.includes("innerHTML")) {
            matchRegExpList.push(new RegExp(netDiskRegularItem["link_innerHTML"], "gi"));
          }
          if (!workerOptionData.matchTextRange.length) {
            console.error(workerOptionData);
            throw new TypeError("未设置匹配范围");
          }
          if (!matchRegExpList.length) {
            throw new TypeError("未知的匹配范围: " + workerOptionData.matchTextRange);
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
                  textList: matchTextList,
                });
              }
            }
          }
        }
      }
    },
    uniqueArr(arr) {
      return arr.filter((obj, index, selfArray) => {
        return (
          index ===
          selfArray.findIndex((item) => {
            return JSON.stringify(item) === JSON.stringify(obj);
          })
        );
      });
    },
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
                      endTime: Date.now(),
                    },
                  })
                );
                resolve(null);
              }
            });
          },
        };
      } finally {
        globalThis.URL.revokeObjectURL(NetDiskWorker.blobUrl);
        NetDiskWorker.blobUrl = "";
      }
    },
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
                position: "center",
              },
              content: {
                text: `
							<div style="padding: 10px;gap: 10px;display: flex;flex-direction: column;">
								<p>链接：${data.url}</p>
								<p>来源：${Panel.isTopWindow() ? "top" : "iframe"}</p>
								<p>原因：初始化Worker失败，可能页面使用了Content-Security-Policy策略，执行匹配时如果页面的内容过大会导致页面卡死，请使用Menu模式进行匹配或者使用CSP插件禁用CSP策略（不建议）。</p>
								<p>
									错误信息：
									<span style="color: red;">${data.error}</span>
								</p>
							</div>
							`,
                html: true,
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
                      contentConfig: [WebsiteRule.getRulePanelViewOption(ruleOption)],
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
                  },
                },
                cancel: {
                  text: "网站规则",
                  callback(details, event2) {
                    NetDiskRuleManager.showView("网站规则");
                  },
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
                          position: "center",
                        },
                        content: {
                          text: `确定不再弹出该提示？（仅针对域名：${data.hostname}）`,
                        },
                        btn: {
                          ok: {
                            callback(eventDetails2, event3) {
                              NetDiskWorkerInitError.addHost(data.hostname);
                              eventDetails2.close();
                            },
                          },
                        },
                      },
                      {
                        PC: {
                          width: "400px",
                          height: "200px",
                        },
                        Mobile: {
                          width: "80vw",
                          height: "200px",
                        },
                      }
                    );
                  },
                },
              },
            },
            {
              PC: {
                width: "550px",
                height: "350px",
              },
              Mobile: {
                width: "88vw",
                height: "500px",
              },
            }
          );
        }
      });
    },
    dispatchWorkerInitErrorDialog() {
      top?.postMessage(
        {
          type: this.postMessageType,
          data: {
            url: window.location.href,
            hostname: window.location.hostname,
            error: this.workerInitError,
          },
        },
        "*"
      );
    },
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
        },
      };
      GM_Menu.update(menuOption);
    },
    postMessage(message, options) {
      NetDiskWorker.GM_matchWorker.postMessage(message, options);
    },
    onMessage(event) {
      const data = event.data;
      if (data.options.from === "PasteText" || data.options.from === "ShortCut-Select-Content") {
        NetDiskView.$inst.matchPasteText.workerMatchEndCallBack(data);
      }
      if (data.options.from.startsWith("FirstLoad")) {
        NetDiskWorker.delayNotMatchCount++;
      }
      NetDiskWorker.successCallBack(data);
    },
    onError(error) {
      NetDiskWorker.errorCallBack(error);
    },
    successCallBack(options) {
      if (!options.data.length) {
        NetDiskWorker.matchingEndCallBack();
        return;
      }
      const handleNetDiskList = [];
      for (const matchData of options.data) {
        NetDisk.$match.matchedInfoRuleKey.add(matchData.ruleKeyName);
        let matchLinkSet = new Set();
        matchData.data.forEach((item) => {
          matchLinkSet.add(item);
        });
        matchLinkSet.forEach((item) => {
          let handleLink = NetDisk.handleLink({
            ruleKeyName: matchData.ruleKeyName,
            ruleIndex: matchData.ruleIndex,
            matchText: item,
          });
          if (handleLink) {
            handleNetDiskList.push({
              shareCode: handleLink.shareCode,
              accessCode: handleLink.accessCode,
              ruleKeyName: matchData.ruleKeyName,
              ruleIndex: matchData.ruleIndex,
              matchText: item,
            });
          }
        });
      }
      let filterHandleNetDiskList = handleNetDiskList.filter((value, index, selfArray) => {
        let isFind =
          selfArray.findIndex((obj) => {
            return (
              obj.accessCode === value.accessCode &&
              obj.ruleIndex === value.ruleIndex &&
              obj.ruleKeyName === value.ruleKeyName &&
              obj.shareCode === value.shareCode
            );
          }) === index;
        return isFind;
      });
      filterHandleNetDiskList.forEach((item) => {
        if (NetDisk.$match.tempMatchedInfo.has(item.ruleKeyName)) {
          let currentTempDict = NetDisk.$match.tempMatchedInfo.get(item.ruleKeyName);
          currentTempDict.set(item.shareCode, item);
        }
      });
      filterHandleNetDiskList.forEach((item) => {
        let { shareCode, accessCode, ruleKeyName, ruleIndex, matchText } = item;
        const findRuleOptions = NetDisk.$rule.rule.find((item2) => item2.setting.key === ruleKeyName);
        const ruleOption = findRuleOptions.rule[ruleIndex];
        let isBlackListShareCode = false;
        NetDisk.$match.blackMatchedInfo.forEach((blackMatchInfoItem, blackList_ruleKeyName) => {
          if (blackList_ruleKeyName !== item.ruleKeyName) {
            return;
          }
          let isFindBlackShareCode = blackMatchInfoItem.has(shareCode);
          if (isFindBlackShareCode) {
            isBlackListShareCode = true;
            log.warn(`匹配到黑名单分享码，已过滤：${shareCode}`, JSON.stringify(item));
          }
        });
        if (isBlackListShareCode) {
          return;
        }
        if (ruleOption.shareCodeExcludeRegular && Array.isArray(ruleOption.shareCodeExcludeRegular)) {
          for (const excludeRegularName of ruleOption.shareCodeExcludeRegular) {
            let excludeDict = NetDisk.$match.matchedInfo.get(excludeRegularName);
            let currentTempDict = NetDisk.$match.tempMatchedInfo.get(excludeRegularName);
            if (excludeDict.startsWith(shareCode) || currentTempDict.startsWith(shareCode)) {
              log.warn(`${ruleKeyName}：该分享码【${shareCode}】与已匹配到该分享码的规则【${excludeRegularName}】冲突`);
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
          currentDict.set(shareCode, NetDisk.createLinkStorageInst(accessCode, ruleIndex, false, matchText));
          NetDiskView.$inst.linkView.changeBoxItemView(ruleKeyName, ruleIndex, shareCode, accessCode, matchText);
          log.info(`该匹配项无密码，设置密码 ${ruleKeyName} ${ruleIndex}: ${shareCode}  ===> ${accessCode}`);
        } else {
          if (utils.isNull(accessCode) && NetDiskGlobalData.accessCode.allowQueryHistoryMatchingAccessCode.value) {
            let historyMatchAccessCode = NetDiskHistoryMatchView.queryAccessCode(ruleKeyName, shareCode, true);
            if (historyMatchAccessCode) {
              log.info("历史匹配记录 ==> 查询到访问码：" + historyMatchAccessCode);
              accessCode = historyMatchAccessCode;
            }
          }
          currentDict.set(shareCode, NetDisk.createLinkStorageInst(accessCode, ruleIndex, false, matchText));
          NetDiskView.$data.isMatchedNetDiskIconMap.add(ruleKeyName);
          NetDiskView.$inst.linkView.addBoxItemView(ruleKeyName, ruleIndex, shareCode, accessCode, matchText);
          log.success(`添加链接 ${ruleKeyName} ${ruleIndex}: ${shareCode}  ===> ${accessCode}`);
        }
      });
      Object.keys(NetDisk.$match.tempMatchedInfo.getItems()).forEach((keyName) => {
        NetDisk.$match.tempMatchedInfo.get(keyName).clear();
      });
      if (NetDisk.$data.isMatchedLink) {
        switch (NetDiskGlobalData.features["netdisk-behavior-mode"].value) {
          case "suspension_smallwindow".toLowerCase():
            if (NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value === "suspension") {
              NetDiskView.$inst.suspension.init();
            } else {
              NetDiskView.$inst.linkView.show();
            }
            break;
          case "suspension_window".toLowerCase():
            NetDiskView.$inst.suspension.init();
            break;
          case "smallwindow".toLowerCase():
            NetDiskView.$inst.linkView.show();
            break;
          default:
            log.error("未知的行为模式：" + NetDiskGlobalData.features["netdisk-behavior-mode"].value);
        }
      }
      NetDiskWorker.matchingEndCallBack();
    },
    errorCallBack(error) {
      NetDiskWorker.matchingEndCallBack(true);
      log.error("Worker Error", error);
    },
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
          matchedRuleOption[ruleKeyName] = [...matchedRuleOption[ruleKeyName], ...item.rule];
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
          } catch (error) {}
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
              from: "FirstLoad-DOMChange",
            });
            return;
          }
        }
        if (matchRange.includes("innerText")) {
          let pageTextList = NetDiskWorkerUtils.getPageText(document.documentElement, isDepthAcquisitionWithShadowRoot);
          toMatchedTextList.push(...pageTextList);
          if (isFirstLoadPageText) {
            isFirstLoadPageText = false;
            NetDiskWorker.postMessage({
              characterMapping,
              textList: toMatchedTextList,
              matchTextRange: matchRange,
              matchedRuleOption,
              startTime,
              from: "FirstLoad-Text-DOMChange",
            });
            return;
          }
        }
        if (matchRange.includes("innerHTML")) {
          let pageHTMLList = NetDiskWorkerUtils.getPageHTML(document.documentElement, isDepthAcquisitionWithShadowRoot);
          toMatchedTextList.push(...pageHTMLList);
          if (isFirstLoadPageHTML) {
            isFirstLoadPageHTML = false;
            NetDiskWorker.postMessage({
              characterMapping,
              textList: toMatchedTextList,
              matchTextRange: matchRange,
              matchedRuleOption,
              startTime,
              from: "FirstLoad-HTML-DOMChange",
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
          from: "DOMChange",
        });
      }
      let dispatchMonitorDOMChange = NetDiskWorker.dispatchMonitorDOMChange;
      Object.defineProperty(NetDiskWorker, "dispatchMonitorDOMChange", {
        set: function (value) {
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
                type: "attributes",
              },
            ]);
          }
        },
        get: function () {
          return dispatchMonitorDOMChange;
        },
      });
      let matchMode = NetDiskGlobalData.features["netdisk-match-mode"].value;
      if (matchMode !== "Menu") {
        let neverToastWorkerError = _GM_getValue(this.neverTipWorkerInitErrorKey, []);
        if (!Array.isArray(neverToastWorkerError)) {
          neverToastWorkerError = [neverToastWorkerError];
        }
        if (this.workerInitError != null) {
          log.error(
            "初始化Worker失败，可能页面使用了Content-Security-Policy策略，使用代替函数，该函数执行匹配时如果页面的内容过大会导致页面卡死",
            this.workerInitError
          );
          let findHostName = neverToastWorkerError.find((it) => it === window.location.hostname);
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
        startTime: Date.now(),
      });
      if (matchMode === "MutationObserver") {
        utils.mutationObserver(document.documentElement, {
          callback: observeEvent,
          config: {
            childList: NetDiskGlobalData.match["mutationObserver-childList"].value,
            characterData: NetDiskGlobalData.match["mutationObserver-characterData"].value,
            subtree: NetDiskGlobalData.match["mutationObserver-subtree"].value,
          },
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
          },
        });
      } else {
        log.error("未知匹配模式：" + matchMode);
      }
    },
  };
  const NetDiskUserRuleDebug = {
    $el: {
      $select: null,
      $log: null,
      $matchText: null,
      $button: null,
    },
    reset() {
      Object.keys(this.$el).forEach((keyName) => {
        Reflect.deleteProperty(this.$el, keyName);
      });
    },
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
          innerText: text,
        },
        {
          "data-tag": tag,
        }
      );
      domUtils.append(this.$el.$log, logElement);
    },
    clearLog() {
      domUtils.empty(this.$el.$log);
    },
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
            position: "center",
          },
          content: {
            text: `
                    <div class="custom-rule-container">
                        <textarea class="custom-rule-match-text" placeholder="请输入需要测试匹配的字符串"></textarea>
                        <div class="custom-rule-input-container">
                        <select class="custom-rule-select-regexp"></select>
                        <button class="custom-rule-run-match-button" type="button" data-type="primary" data-icon="" data-righticon="false">
                            <span>执行</span>
                        </button>
                        </div>
                    </div>
                    <div class="custom-rule-match-log">
                        <div>匹配日志↓</div>
                        <div class="custom-rule-match-log-container"></div>
                    </div>
                    `,
            html: true,
          },
          btn: {
            ok: {
              enable: false,
            },
          },
          style: `
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
                `,
        },
        NetDiskView.$config.viewSizeConfig.customRuleDebugView
      );
      this.$el.$select = dialog.$shadowRoot.querySelector(".custom-rule-select-regexp");
      this.$el.$matchText = dialog.$shadowRoot.querySelector(".custom-rule-match-text");
      this.$el.$log = dialog.$shadowRoot.querySelector(".custom-rule-match-log-container");
      this.$el.$button = dialog.$shadowRoot.querySelector(".custom-rule-run-match-button");
      regexp.forEach((regExpItem, index) => {
        this.$el.$select.appendChild(
          domUtils.createElement("option", {
            className: "custom-rule-select-regexp-item",
            innerText: "regexp下标:" + index,
            "data-value": regExpItem,
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
              from: "Debug",
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
                logCallBack,
              },
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
                logCallBack,
              },
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
                logCallBack,
              },
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
                logCallBack,
              },
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
                logCallBack,
              },
            });
            that.setLog("success", "执行完毕");
          });
        } catch (error) {
          log.error(error);
          that.setLog(error.toString());
        }
      }
      domUtils.on(that.$el.$button, "click", void 0, debugRunClickEvent);
    },
  };
  const dialogCSS =
    '.pops[type-value="confirm"] .pops-confirm-content {\r\n  overflow: hidden;\r\n}\r\n/* textarea美化 */\r\n.pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  background-image: none;\r\n  background-color: transparent;\r\n\r\n  display: inline-block;\r\n  resize: vertical;\r\n  padding: 5px 15px;\r\n  line-height: normal;\r\n  box-sizing: border-box;\r\n  border: 1px solid #dcdfe6;\r\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n  appearance: none;\r\n  resize: none;\r\n}\r\n/* 获得焦点 */\r\n.pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:focus {\r\n  outline: none;\r\n  border-color: #3677f0;\r\n}\r\n/* 提示文字 */\r\n.pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea::placeholder {\r\n  color: #c0c4cc;\r\n}\r\n/* 鼠标hover */\r\n.pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:hover {\r\n  border-color: #c0c4cc;\r\n}\r\n';
  const NetDiskUserRuleUI = {
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
            timeout: 3500,
            isHTML: true,
          });
        }
      }
      let dialog = NetDiskPops.confirm(
        {
          title: {
            text: titleText,
            position: "center",
          },
          content: {
            text: `<textarea class="netdisk-custom-rules" placeholder="请输入规则配置"></textarea>`,
            html: true,
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
              },
            },
            cancel: {
              text: "调试",
              callback: (eventDetails, event) => {
                debugCallBack();
              },
            },
            other: {
              enable: true,
              text: "格式化",
              type: "xiaomi-primary",
              callback: (eventDetails, event) => {
                formatCallBack();
              },
            },
          },
          class: "whitesevPopNetDiskCustomRules",
          style: dialogCSS,
        },
        NetDiskView.$config.viewSizeConfig.customRulesView
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
    showSubscribe(subscribeUUID, ruleKey, valueChangeCallBack) {
      let titleText = "编辑订阅的链接识别规则";
      let $ruleInput = null;
      function saveCallBack(event, isDebug) {
        let ruleText = $ruleInput.value.trim();
        let parseRuleResult = NetDiskUserRule.parseRuleStrToRule(ruleText);
        if (parseRuleResult.success) {
          let userRule = parseRuleResult.data;
          let flag = NetDiskUserRuleSubscribeRule.updateSubscribeRule(subscribeUUID, userRule);
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
            isHTML: true,
            timeout: 3500,
          });
        }
      }
      let dialog = NetDiskPops.confirm(
        {
          title: {
            text: titleText,
            position: "center",
          },
          content: {
            text: `<textarea class="netdisk-custom-rules" placeholder="请输入规则配置"></textarea>`,
            html: true,
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
              },
            },
            cancel: {
              text: "调试",
              callback: (eventDetails, event) => {
                debugCallBack();
              },
            },
            other: {
              enable: true,
              text: "格式化",
              type: "xiaomi-primary",
              callback: (eventDetails, event) => {
                formatCallBack();
              },
            },
          },
          class: "whitesevPopNetDiskCustomRules",
          style: dialogCSS,
        },
        NetDiskView.$config.viewSizeConfig.customRulesView
      );
      $ruleInput = dialog.$shadowRoot.querySelector("textarea");
      let rule;
      rule = NetDiskUserRuleSubscribeRule.getSubscribeRule(subscribeUUID, ruleKey);
      $ruleInput.value = NetDiskUserRule.getFormatRule(rule);
    },
  };
  const setting_svg =
    '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M510.1056 674.2528c-89.1904 0-161.6896-72.5504-161.6896-161.6896s72.5504-161.6896 161.6896-161.6896 161.6896 72.5504 161.6896 161.6896-72.4992 161.6896-161.6896 161.6896z m0-251.7504c-49.664 0-90.0096 40.3968-90.0096 90.0096s40.3968 90.0096 90.0096 90.0096 90.0096-40.3968 90.0096-90.0096-40.3456-90.0096-90.0096-90.0096z"></path>\r\n	<path\r\n		d="M510.1056 957.5424c-36.1984 0-72.3968-4.4544-107.5712-13.1584a35.88096 35.88096 0 0 1-27.1872-36.352c0.0512-1.2288 0.1024-2.4576 0.1024-3.6864 0-49.664-40.3968-90.0608-90.0608-90.0608-17.2544 0-34.048 4.9152-48.5376 14.2336a35.86048 35.86048 0 0 1-45.0048-5.12c-53.2992-54.5792-91.8528-122.0608-111.5136-195.2256a35.7888 35.7888 0 0 1 19.3024-41.6768c31.3856-14.848 51.6608-46.7968 51.6608-81.4592 0-33.8944-18.7904-64.6144-48.9984-80.128a35.8656 35.8656 0 0 1-17.92-42.3424c20.5824-67.5328 57.7536-130.0992 107.3664-180.9408 11.8784-12.1856 30.72-14.336 45.0048-5.12 14.4896 9.3184 31.2832 14.2336 48.5888 14.2336 49.664 0 90.0608-40.3968 90.0608-90.0096 0-1.28-0.0512-2.5088-0.1024-3.7376a35.82464 35.82464 0 0 1 27.1872-36.3008c72.2944-17.9712 149.504-17.408 221.9008 1.792 16.0768 4.2496 27.136 19.0464 26.624 35.6864l-0.0512 2.6112c0 49.664 40.3968 90.0096 90.0096 90.0096 16.128 0 31.9488-4.352 45.7728-12.4928a35.87072 35.87072 0 0 1 44.1344 5.9904c48.4864 50.432 84.7872 112.2816 104.96 178.8416 5.0176 16.4864-2.4064 34.1504-17.6128 42.1376a89.8048 89.8048 0 0 0-48.2816 79.7696c0 34.3552 20.0192 66.2016 50.944 81.152a35.80928 35.80928 0 0 1 19.0464 41.5232c-19.2512 72.0896-56.9856 138.8544-109.1072 193.0752a35.79904 35.79904 0 0 1-44.0832 5.9904c-13.824-8.192-29.6448-12.4928-45.7216-12.4928-49.664 0-90.0096 40.3968-90.0096 90.0608l0.0512 2.6112a35.8912 35.8912 0 0 1-26.624 35.6864 445.69088 445.69088 0 0 1-114.3296 14.8992z m-64.768-77.3632a375.53664 375.53664 0 0 0 135.936-1.1776c12.1856-77.2096 79.1552-136.3968 159.744-136.3968 18.8416 0 37.4784 3.2768 55.04 9.6768a374.58944 374.58944 0 0 0 66.9184-117.9136c-40.0384-30.208-64.7168-78.2336-64.7168-129.3312 0-49.7152 22.5792-95.744 60.416-126.0544a374.74304 374.74304 0 0 0-62.5664-106.1376 161.34144 161.34144 0 0 1-55.1424 9.6768c-80.5376 0-147.5584-59.1872-159.744-136.3968a376.76032 376.76032 0 0 0-135.936-1.2288C433.664 222.6176 366.3872 282.4704 285.44 282.4704c-20.6336 0-40.9088-3.9424-59.8528-11.4688a375.0912 375.0912 0 0 0-63.8464 107.264c38.4 30.3104 61.2864 76.5952 61.2864 126.7712 0 51.5584-24.9856 99.84-65.5872 129.9968a373.74464 373.74464 0 0 0 68.1984 119.04c18.8928-7.5264 39.168-11.4688 59.8016-11.4688 80.9472 0 148.224 59.8528 159.8976 137.5744z"></path>\r\n</svg>\r\n';
  const history_svg =
    '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M511.998 64C264.574 64 64 264.574 64 511.998S264.574 960 511.998 960 960 759.422 960 511.998 759.422 64 511.998 64z m353.851 597.438c-82.215 194.648-306.657 285.794-501.306 203.579S78.749 558.36 160.964 363.711 467.621 77.917 662.27 160.132c168.009 70.963 262.57 250.652 225.926 429.313a383.995 383.995 0 0 1-22.347 71.993z"></path>\r\n	<path\r\n		d="M543.311 498.639V256.121c0-17.657-14.314-31.97-31.97-31.97s-31.97 14.314-31.97 31.97v269.005l201.481 201.481c12.485 12.485 32.728 12.485 45.213 0s12.485-32.728 0-45.213L543.311 498.639z"></path>\r\n</svg>\r\n';
  const add_rule_svg =
    '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M761.948797 511.939185c0-16.541632-13.500891-30.042523-30.042523-30.042523H542.042395v-189.742249c0-16.541632-13.379261-30.042523-30.042523-30.042523-16.541632 0-30.042523 13.500891-30.042523 30.042523v189.863879H292.09347c-16.541632 0-30.042523 13.500891-30.042523 30.042523 0 8.270816 3.40563 15.811854 8.757335 21.285188 5.473334 5.473334 12.892743 8.757335 21.285188 8.757335h189.863879v189.863879c0 8.270816 3.40563 15.811854 8.757335 21.285188 5.473334 5.473334 12.892743 8.757335 21.285188 8.757335 16.541632 0 30.042523-13.500891 30.042523-30.042523V541.981708h189.863879c16.541632 0 30.042523-13.379261 30.042523-30.042523z m0 0"></path>\r\n	<path\r\n		d="M780.436504 511.939185c0-17.757928-14.473928-32.231857-32.231857-32.231856H544.353358V275.85604c0-17.757928-14.473928-32.231857-32.231856-32.231857s-32.231857 14.473928-32.231857 32.231857v203.972918H275.916727C258.158799 479.828958 243.684871 494.302886 243.684871 512.060815c0 8.878964 3.648889 17.028151 9.487112 22.866374 5.838223 5.838223 13.86578 9.487112 22.866374 9.487112h203.972918v203.972918c0 8.878964 3.648889 17.028151 9.487113 22.866374 5.838223 5.838223 13.86578 9.487112 22.866373 9.487113 17.757928 0 32.231857-14.473928 32.231857-32.231857V544.292671h203.972918c17.514669 0 31.866968-14.473928 31.866968-32.353486z m0 0"></path>\r\n	<path\r\n		d="M829.93977 928.034208H194.181604C140.29967 928.034208 96.512997 884.247535 96.512997 830.487231V193.512769c0-53.760304 43.786673-97.546977 97.546977-97.546977H829.93977c53.760304 0 97.546977 43.786673 97.546977 97.546977v636.974462c0.12163 53.760304-43.665043 97.546977-97.546977 97.546977zM194.181604 156.780615C173.869453 156.780615 157.327821 173.322247 157.327821 193.512769v636.974462C157.327821 850.677753 173.869453 867.219385 194.181604 867.219385H829.93977c20.312151 0 36.732153-16.541632 36.732154-36.732154V193.512769c0-20.312151-16.541632-36.732153-36.732154-36.732154H194.181604z"></path>\r\n</svg>\r\n';
  const manager_svg =
    '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M560.104 574.25c0.625-0.64 1.182-1.2 1.67-1.683 24.773-24.465 55.547-42.364 89.471-51.779 1.014-0.281 2.241-0.603 3.682-0.965a16 16 0 0 1 13.64 2.823l1.477 1.134 25.485 19.554h22.942l15.46-11.862 11.457-8.791a16 16 0 0 1 13.692-2.81c3.65 0.93 6.585 1.734 8.803 2.412a206.001 206.001 0 0 1 14.852 5.167 205.45 205.45 0 0 1 69.482 45.108c0.491 0.485 1.05 1.049 1.68 1.692a16 16 0 0 1 4.412 13.355l-0.529 3.863-3.935 28.758 11.471 19.547L892.89 651.5l3.15 1.34a16 16 0 0 1 9.166 10.48c0.38 1.385 0.695 2.575 0.942 3.57A198.992 198.992 0 0 1 912 714.91c0 18.075-2.424 35.85-7.152 52.976-0.204 0.74-0.452 1.6-0.745 2.584a16 16 0 0 1-8.956 10.114l-1.606 0.699-28.225 12.274-11.471 19.547 2.152 24.3 0.645 7.282a16 16 0 0 1-4.654 12.755 179.21 179.21 0 0 1-4.143 4.013A205.62 205.62 0 0 1 762.876 909c-1.373 0.382-3.109 0.83-5.206 1.345a16 16 0 0 1-12.839-2.331l-4.217-2.883-22.143-15.135H695.53l-23.053 15.757-3.288 2.248a16 16 0 0 1-12.864 2.324c-3.02-0.745-5.463-1.389-7.331-1.93a205.604 205.604 0 0 1-83.28-47.352 173.687 173.687 0 0 1-3.705-3.6 16 16 0 0 1-4.65-12.751c0.252-2.85 0.458-5.184 0.62-7.001l2.177-24.587-11.471-19.547-28.313-12.313-1.5-0.652a16 16 0 0 1-8.957-10.116 163.909 163.909 0 0 1-1.291-4.546c-4.38-16.522-6.623-33.632-6.623-51.02 0-17.065 2.16-33.866 6.384-50.11 0.042-0.158 0.193-0.697 0.454-1.615a16 16 0 0 1 9.128-10.347l1.675-0.713 29.043-12.352 11.471-19.547a317416336.627 317416336.627 0 0 0-4.464-32.62 16 16 0 0 1 4.413-13.357z m58.693 51.865l-32.6 57.431-26.86 10.457A155.784 155.784 0 0 0 558 714.416c0 8.177 0.634 16.258 1.884 24.192l26.314 10.244 32.599 57.43-4.232 27.01c11.838 9.538 25.036 17.206 39.159 22.708l20.677-17.064h65.198L760.276 856c14.123-5.502 27.321-13.17 39.16-22.709l-4.233-27.008 32.6-57.431 26.313-10.244A155.435 155.435 0 0 0 856 714.416c0-6.882-0.45-13.696-1.337-20.413l-26.86-10.457-32.6-57.431 4.728-30.173A148.3 148.3 0 0 0 763.181 574L739.6 593.462h-65.198L650.819 574a148.3 148.3 0 0 0-36.75 21.942l4.728 30.173zM707.1 802.289c-48.228 0-87.324-39.096-87.324-87.324s39.096-87.324 87.324-87.324 87.325 39.096 87.325 87.324-39.097 87.324-87.325 87.324z m0-56.938c17.768 0 32.172-14.404 32.172-32.172 0-17.768-14.404-32.172-32.172-32.172-17.768 0-32.172 14.404-32.172 32.172 0 17.768 14.404 32.172 32.172 32.172zM256 348v-56a8 8 0 0 1 8-8h432a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H264a8 8 0 0 1-8-8z m0 192v-56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H264a8 8 0 0 1-8-8z m0 192v-56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H264a8 8 0 0 1-8-8z m584-548H184v656h288a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H144c-17.673 0-32-14.327-32-32V144c0-17.673 14.327-32 32-32h736c17.673 0 32 14.327 32 32v328a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V184z"></path>\r\n</svg>\r\n';
  const identify_text_svg =
    '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M648.6016 128c0-18.7904 15.2576-34.048 34.048-34.048H896c18.7904 0 34.048 15.2576 34.048 34.048v213.3504a34.048 34.048 0 1 1-68.096 0V162.048h-179.3024a34.048 34.048 0 0 1-34.048-34.048zM93.952 128c0-18.7904 15.2576-34.048 34.048-34.048h213.3504a34.048 34.048 0 1 1 0 68.096H162.048v179.3024a34.048 34.048 0 1 1-68.096 0V128zM896 648.6016c18.7904 0 34.048 15.2576 34.048 34.048V896a34.048 34.048 0 0 1-34.048 34.048h-213.3504a34.048 34.048 0 0 1 0-68.096h179.3024v-179.3024c0-18.7904 15.2576-34.048 34.048-34.048zM128 648.6016c18.7904 0 34.048 15.2576 34.048 34.048v179.3024h179.3024a34.048 34.048 0 1 1 0 68.096H128a34.048 34.048 0 0 1-34.048-34.048v-213.3504c0-18.7904 15.2576-34.048 34.048-34.048zM322.3552 358.4c0-18.8416 15.3088-34.1504 34.1504-34.1504h310.9888c18.8416 0 34.1504 15.3088 34.1504 34.1504v58.3168a34.1504 34.1504 0 0 1-68.2496 0v-24.1664H390.6048v24.1664a34.1504 34.1504 0 0 1-68.2496 0V358.4zM438.9888 708.2496c0-18.8416 15.3088-34.0992 34.1504-34.0992h77.7216a34.0992 34.0992 0 1 1 0 68.2496H473.1392a34.0992 34.0992 0 0 1-34.1504-34.1504z"></path>\r\n	<path\r\n		d="M512 363.1616c18.8416 0 34.0992 15.2576 34.0992 34.0992v310.9888a34.0992 34.0992 0 1 1-68.1984 0V397.312c0-18.8416 15.2576-34.0992 34.0992-34.0992z"></path>\r\n</svg>\r\n';
  const link_svg =
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M563.2 672c-6.4-6.4 0 0 0 0L448 793.6c-57.6 57.6-153.6 57.6-211.2 0-57.6-57.6-64-147.2 0-211.2l121.6-121.6-6.4-6.4-38.4-32-6.4-6.4-121.6 121.6C108.8 614.4 108.8 755.2 192 832s217.6 83.2 300.8 0l121.6-121.6-6.4-6.4-44.8-32z m38.4-294.4c6.4 0 6.4 0 0 0l38.4 38.4 6.4 6.4-230.4 230.4-38.4-51.2 224-224zM531.2 192c83.2-83.2 217.6-83.2 300.8 0 83.2 83.2 83.2 217.6 0 300.8l-121.6 121.6-44.8-44.8 128-128c44.8-44.8 51.2-147.2-6.4-204.8-57.6-57.6-160-57.6-204.8-6.4l-128 128v-6.4l-38.4-38.4-6.4-6.4L531.2 192z"></path>\r\n</svg>\r\n';
  const open_svg =
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M892 928.1H134c-19.9 0-36-16.1-36-36v-758c0-19.9 16.1-36 36-36h314.1c19.9 0 36 16.1 36 36s-16.1 36-36 36H170v686h686V579.6c0-19.9 16.1-36 36-36s36 16.1 36 36v312.5c0 19.9-16.1 36-36 36z"></path>\r\n	<path\r\n		d="M927.9 131.6v-0.5c-0.1-1.7-0.4-3.3-0.7-4.9 0-0.1 0-0.2-0.1-0.3-0.4-1.7-0.9-3.3-1.5-4.9v-0.1c-0.6-1.6-1.4-3.1-2.2-4.6 0-0.1-0.1-0.1-0.1-0.2-0.8-1.4-1.7-2.8-2.7-4.1-0.1-0.1-0.2-0.3-0.3-0.4-0.5-0.6-0.9-1.1-1.4-1.7 0-0.1-0.1-0.1-0.1-0.2-0.5-0.6-1-1.1-1.6-1.6l-0.4-0.4c-0.5-0.5-1.1-1-1.6-1.5l-0.1-0.1c-0.6-0.5-1.2-1-1.9-1.4-0.1-0.1-0.3-0.2-0.4-0.3-1.4-1-2.8-1.8-4.3-2.6l-0.1-0.1c-1.6-0.8-3.2-1.5-4.9-2-1.6-0.5-3.3-1-5-1.2-0.1 0-0.2 0-0.3-0.1l-2.4-0.3h-0.3c-0.7-0.1-1.3-0.1-2-0.1H640.1c-19.9 0-36 16.1-36 36s16.1 36 36 36h165L487.6 487.6c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5 9.2 0 18.4-3.5 25.5-10.5L856 221v162.8c0 19.9 16.1 36 36 36s36-16.1 36-36V134.1c0-0.8 0-1.7-0.1-2.5z"></path>\r\n</svg>\r\n';
  const password_svg =
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M288 384v-74.666667c0-123.722667 100.266667-224 224-224s224 100.224 224 224v74.666667h10.677333C811.445333 384 864 436.597333 864 501.333333v320c0 64.821333-52.469333 117.333333-117.322667 117.333334H277.333333C212.554667 938.666667 160 886.069333 160 821.333333V501.333333c0-64.821333 52.469333-117.333333 117.322667-117.333333H288z m64 0h320v-74.666667c0-88.426667-71.605333-160-160-160-88.384 0-160 71.626667-160 160v74.666667zM224 501.333333v320c0 29.397333 23.914667 53.333333 53.322667 53.333334H746.666667A53.269333 53.269333 0 0 0 800 821.333333V501.333333c0-29.397333-23.914667-53.333333-53.322667-53.333333H277.333333A53.269333 53.269333 0 0 0 224 501.333333z"></path>\r\n</svg>\r\n';
  const other_svg =
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M826.92 857.397H197.08c-33.667 0-60.953-27.287-60.953-60.953V349.46c0-33.666 27.286-60.952 60.952-60.952h121.905v-60.952c0-33.666 27.286-60.953 60.953-60.953h243.809c33.666 0 60.952 27.287 60.952 60.953v60.952H826.921c33.666 0 60.952 27.286 60.952 60.952v446.984c0 33.666-27.286 60.953-60.952 60.953zM644.064 247.873c0-22.43-18.204-40.635-40.634-40.635H400.254c-22.43 0-40.635 18.205-40.635 40.635v40.635h284.444v-40.635z m203.175 121.905c0-22.43-18.204-40.635-40.635-40.635H217.397c-22.43 0-40.635 18.204-40.635 40.635v162.54h304.762v-50.794c0-16.823 13.653-30.476 30.476-30.476s30.476 13.653 30.476 30.476v50.793h304.762v-162.54z m0 203.174H542.476v10.16c0 16.842-13.653 30.475-30.476 30.475s-30.476-13.633-30.476-30.476v-10.159H176.762v203.175c0 22.43 18.204 40.635 40.635 40.635h589.206c22.43 0 40.635-18.205 40.635-40.635V572.952z"></path>\r\n</svg>\r\n';
  const NetDiskViewRightClickMenu = {
    setGlobalRightClickMenu($el) {
      NetDiskLinkViewEvent.registerContextMenu($el, void 0, [
        {
          text: "设置",
          icon: setting_svg,
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskSettingView.show();
          },
        },
        {
          text: "历史匹配记录",
          icon: history_svg,
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskView.$inst.historyMatch.show();
          },
        },
        {
          text: "添加链接识别规则",
          icon: add_rule_svg,
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskUserRuleUI.show(false);
          },
        },
        {
          text: "规则管理器",
          icon: manager_svg,
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskRuleManager.showView();
          },
        },
        {
          text: "主动识别文本",
          icon: identify_text_svg,
          callback() {
            log.info("右键菜单-打开-" + this.text);
            NetDiskView.$inst.matchPasteText.show();
          },
        },
      ]);
    },
    setRightClickMenu($el, selector, isHistoryView) {
      let showTextList = [
        {
          text: "链接",
          icon: link_svg,
          callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
            return false;
          },
          item: [
            {
              text: "复制",
              icon: "documentCopy",
              callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
                NetDiskLinkClickMode.copy(ruleKeyName, ruleIndex, shareCode, accessCode);
              },
            },
            {
              text: "打开",
              icon: open_svg,
              callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
                let url = NetDiskLinkClickModeUtils.getBlankUrl({
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode,
                });
                NetDiskLinkClickMode.openBlankUrl(url, ruleKeyName, ruleIndex, shareCode, accessCode);
              },
            },
            {
              text: "后台打开",
              icon: open_svg,
              callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
                let url = NetDiskLinkClickModeUtils.getBlankUrl({
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode,
                });
                NetDiskLinkClickMode.openBlankUrl(url, ruleKeyName, ruleIndex, shareCode, accessCode, true);
              },
            },
          ],
        },
        {
          text: "密码",
          icon: password_svg,
          callback: function (event, contextMenuEvent, liElement) {
            return false;
          },
          item: [
            {
              text: "复制",
              icon: "documentCopy",
              callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
                if (accessCode == null || (typeof accessCode === "string" && accessCode.trim() === "")) {
                  Qmsg.warning("无访问码");
                  return;
                }
                utils
                  .copy(accessCode)
                  .then((status) => {
                    if (status) {
                      Qmsg.success("已复制");
                    } else {
                      Qmsg.error("执行复制失败", { consoleLogContent: true });
                    }
                  })
                  .catch(() => {
                    Qmsg.error("执行复制失败", { consoleLogContent: true });
                  });
              },
            },
            {
              text: "修改",
              icon: `edit`,
              callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
                let $link = menuListenerRootNode;
                const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
                NetDiskView.$inst.newAccessCodeView(
                  this.text,
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode,
                  (option) => {
                    if (isHistoryView) {
                      if (option.isUpdatedMatchedDict) {
                        let currentTime = new Date().getTime();
                        let $updateTime = $link.closest("li").querySelector(".netdiskrecord-update-time");
                        domUtils.text($updateTime, utils.formatTime(currentTime));
                        domUtils.attr($link, "data-accesscode", option.accessCode);
                        Qmsg.success(
                          `
												<div style="text-align: left;">旧: ${accessCode}</div>
												<div style="text-align: left;">新: ${option.accessCode}</div>`,
                          {
                            isHTML: true,
                          }
                        );
                      } else {
                        Qmsg.error("修改失败");
                      }
                    } else {
                      domUtils.attr($link, "data-accesscode", option.accessCode);
                      if (option.isUpdatedMatchedDict) {
                        Qmsg.success(
                          `
												<div style="text-align: left;">旧: ${accessCode}</div>
												<div style="text-align: left;">新: ${option.accessCode}</div>`,
                          {
                            isHTML: true,
                          }
                        );
                      } else {
                        if (option.isFindInMatchedDict) {
                          Qmsg.error("修改访问码失败");
                        } else {
                          Qmsg.error("修改访问码失败，因为当前已匹配字典中未找到对应的访问码");
                        }
                      }
                    }
                  }
                );
              },
            },
          ],
        },
        {
          text: "其它",
          icon: other_svg,
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
                  const { ruleKeyName, ruleIndex, shareCode, accessCode } =
                    NetDiskLinkView.parseBoxAttrRuleInfo($linkItem);
                  let copyUrlText = NetDiskLinkClickModeUtils.getCopyUrlInfo({
                    ruleKeyName,
                    ruleIndex,
                    shareCode,
                    accessCode,
                  });
                  copyTextList.push(copyUrlText);
                });
                utils
                  .copy(copyTextList.join("\n"))
                  .then((status) => {
                    if (status) {
                      Qmsg.success("成功复制全部");
                    } else {
                      Qmsg.error("复制全部失败");
                    }
                  })
                  .catch(() => {
                    Qmsg.error("复制全部失败");
                  });
              },
            },
          ],
        },
      ];
      if (!isHistoryView) {
        showTextList[2].item.push(
          {
            text: "删除当前",
            icon: "delete",
            callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              let $box = $link.closest(".netdisk-url-box");
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
              let flag = false;
              NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
                if (netDiskKeyName !== ruleKeyName) {
                  return;
                }
                netDiskItem.forEach((matchedInfo, matchedShareCode) => {
                  if (matchedShareCode === shareCode) {
                    flag = true;
                    netDiskItem.delete(matchedShareCode);
                    log.info(`删除：`, netDiskKeyName, JSON.stringify(matchedInfo));
                  }
                });
              });
              NetDisk.$match.matchedInfoRuleKey.clear();
              NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
                if (netDiskItem.length) {
                  NetDisk.$match.matchedInfoRuleKey.add(netDiskKeyName);
                }
              });
              if (flag) {
                $box.remove();
              } else {
                Qmsg.error("发生意外情况，未在已匹配到的信息中到对应的网盘信息");
              }
            },
          },
          {
            text: "删除所有",
            icon: "delete",
            callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              let $boxAll = $link.closest(".netdisk-url-box-all");
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
              NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
                netDiskItem.clear();
              });
              NetDisk.$match.matchedInfoRuleKey.clear();
              domUtils.html($boxAll, "");
            },
          }
        );
      }
      NetDiskLinkViewEvent.registerContextMenu($el, selector, showTextList);
    },
  };
  const NetDiskLinkViewEvent = {
    init() {
      NetDiskViewRightClickMenu.setRightClickMenu(NetDiskView.$el.$linkView.$shadowRoot, ".whitesevPop .netdisk-url a");
      this.registerIconGotoPagePosition(NetDiskView.$el.$linkView.$shadowRoot);
      this.setNetDiskUrlClickEvent(NetDiskView.$el.$linkView.$shadowRoot, ".netdisk-url a");
      NetDiskViewRightClickMenu.setGlobalRightClickMenu(
        NetDiskView.$el.$linkView.$shadowRoot.querySelector(".pops .pops-alert-title > p")
      );
    },
    setNetDiskUrlClickEvent($el, childSelector) {
      DOMUtils.on($el, "click", childSelector, (event) => {
        let $click = event.target;
        $click.setAttribute("isvisited", "true");
        const data = NetDiskLinkView.parseBoxAttrRuleInfo($click);
        let ctrlClick = event.ctrlKey;
        if (ctrlClick) {
          this.netDiskUrlClickEvent({
            data,
            clickMode: "openBlank",
            $click,
          });
        } else {
          this.netDiskUrlClickEvent({
            data,
            $click,
          });
        }
      });
      DOMUtils.on($el, "auxclick", childSelector, (event, $click) => {
        if (event.button !== 1) {
          return;
        }
        DOMUtils.preventEvent(event);
        $click.setAttribute("isvisited", "true");
        const data = NetDiskLinkView.parseBoxAttrRuleInfo($click);
        let url = NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: data.ruleKeyName,
          ruleIndex: data.ruleIndex,
          shareCode: data.shareCode,
          accessCode: data.accessCode,
        });
        NetDiskLinkClickMode.openBlankUrl(url, data.ruleKeyName, data.ruleIndex, data.shareCode, data.accessCode, true);
      });
    },
    netDiskUrlClickEvent(option) {
      const { ruleKeyName, ruleIndex, shareCode, accessCode } = option.data;
      let linkClickMode = option.clickMode ?? NetDiskRuleData.function.linkClickMode(option.data.ruleKeyName);
      let closePopup = () => {
        if (option.$click) {
          let $pops = option.$click.closest(".pops");
          if ($pops) {
            let $close = $pops.querySelector('.pops-header-control[type="close"]');
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
          accessCode,
        });
        let isForwardBlankUrl = NetDiskFilterScheme.isForwardBlankLink(ruleKeyName);
        if (isForwardBlankUrl) {
          NetDiskLinkClickMode.openBlankWithScheme(ruleKeyName, ruleIndex, shareCode, accessCode);
        } else {
          NetDiskLinkClickMode.openBlankUrl(url, ruleKeyName, ruleIndex, shareCode, accessCode);
        }
        if (linkClickMode === "openBlank-closePopup") {
          closePopup();
        }
      } else if (linkClickMode === "parseFile" || linkClickMode === "parseFile-closePopup") {
        NetDiskLinkClickMode.parseFile(ruleKeyName, ruleIndex, shareCode, accessCode).then(() => {
          if (linkClickMode === "parseFile-closePopup") {
            closePopup();
          }
        });
      } else {
        log.error("未知点击动作：" + linkClickMode);
        Qmsg.error("未知点击动作：" + linkClickMode);
      }
    },
    registerContextMenu(target, selector, showTextList = [], className = "whitesevSuspensionContextMenu") {
      let data = [];
      showTextList.forEach((item) => {
        data.push({
          text: item.text,
          callback: item.callback,
          icon: item?.icon ?? "",
          iconIsLoading: item?.iconIsLoading ?? false,
          item: item?.item ?? null,
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
        childMenuTopOrBottomDistance: -5,
      };
      NetDiskPops.rightClickMenu(detail);
    },
    registerIconGotoPagePosition(targetElement) {
      let findGenerator = void 0;
      let iterator = void 0;
      let prevSearchShareCode = void 0;
      DOMUtils.on(targetElement, "click", ".whitesevPop .netdisk-icon .netdisk-icon-img", (event, selectorTarget) => {
        let $click = selectorTarget;
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
          log.info(`上一个搜索：${prevSearchShareCode}，切换至：${dataSharecode}`);
          findGenerator = void 0;
          iterator = void 0;
          prevSearchShareCode = dataSharecode;
        }
        if (findGenerator == void 0) {
          findGenerator = DOMUtils.findElementsWithText(document.documentElement, dataSharecode);
          iterator = findGenerator.next();
        }
        if (iterator?.value) {
          log.success("定位元素", iterator);
          if (iterator.value.nodeType === Node.ELEMENT_NODE && iterator.value.getClientRects().length) {
            iterator.value.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
            if (
              NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].value
            ) {
              let elementText = iterator.value.innerText || iterator.value.textContent;
              let childTextNode = void 0;
              let startIndex = void 0;
              let endIndex = void 0;
              if (elementText.includes(dataSharecode)) {
                let textNodeList = Array.from(iterator.value.childNodes).filter(
                  (ele) => ele.nodeType === Node.TEXT_NODE
                );
                for (const textNode of textNodeList) {
                  if (textNode.textContent.includes(dataSharecode)) {
                    childTextNode = textNode;
                    startIndex = textNode.textContent.indexOf(dataSharecode);
                    endIndex = startIndex + dataSharecode.length;
                    break;
                  }
                }
              }
              try {
                DOMUtils.setElementSelection(iterator.value, childTextNode, startIndex, endIndex);
              } catch (error) {
                log.error(error);
                DOMUtils.setElementSelection(iterator.value);
              }
            }
          } else if (
            iterator.value.nodeType === Node.TEXT_NODE &&
            iterator.value.parentElement.getClientRects().length
          ) {
            if (
              NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].value
            ) {
              let elementText = iterator.value.textContent || iterator.value.nodeValue;
              let childTextNode = iterator.value;
              let startIndex = elementText.indexOf(dataSharecode);
              let endIndex = startIndex + dataSharecode.length;
              try {
                DOMUtils.setElementSelection(iterator.value, childTextNode, startIndex, endIndex);
              } catch (error) {
                log.error(error);
                DOMUtils.setElementSelection(iterator.value.parentElement);
              }
              let selection = globalThis.getSelection();
              if (selection.rangeCount > 0) {
                let range = selection.getRangeAt(0);
                let rect = range.getBoundingClientRect();
                let scrollYOffset = globalThis.scrollY;
                let position = rect.top + scrollYOffset - globalThis.innerHeight / 2;
                globalThis.scrollTo({
                  behavior: "smooth",
                  top: position,
                });
              } else {
                iterator.value.parentElement.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
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
                  top: position,
                });
              } catch (error) {
                log.error(error);
                iterator.value.parentElement.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }
            }
          } else {
            log.error("无法定位该元素位置", iterator.value);
            const tagName = (
              iterator.value.nodeName ||
              iterator.value.localName ||
              iterator.value.tagName
            ).toLowerCase();
            Qmsg.error(
              `无法定位该元素位置，类型：${CommonUtil.escapeHtml("<")}${tagName}${CommonUtil.escapeHtml(">")}`,
              {
                isHTML: true,
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
      });
    },
  };
  class NetDiskParse_Chengtong extends ParseFileCore {
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let ruleKeyName = "chengtong";
      if (ruleIndex !== 3) {
        log.warn(`解析站暂时只支持单文件解析，非单文件链接的点击动作为新标签页打开`);
        NetDiskLinkViewEvent.netDiskUrlClickEvent({
          data: {
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode,
          },
          clickMode: "openBlank",
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
    async parseFileMetaInfo(url) {
      const response = await httpx.get("https://whatslink.info/api/v1/link?url=" + url, {
        headers: {
          Referer: "https://whatslink.info/",
        },
        allowInterceptConfig: false,
      });
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
    showFileMetaInfoDialog(metaInfo) {
      NetDiskPops.alert({
        title: {
          text: "元数据信息",
          position: "center",
        },
        content: {
          text: `
						<div class="wrapper">
							<div class="title">Summary</div>
							<div class="content">
								<div>Resource Name: ${metaInfo.name}</div>
								<div>Number of Files: ${metaInfo.count}</div>
								<div>Total File Size: ${utils.formatByteToSize(metaInfo.size)}</div>
								<div>File Type: ${metaInfo.type.toLowerCase()}</div>
							</div>
						</div>
						${
              Array.isArray(metaInfo.screenshots)
                ? `
							<div class="wrapper">
								<div class="title">Screenshots</div>
								<div class="content">
									<div class="image-list">
										${metaInfo.screenshots
                      .map(
                        (screenshot) =>
                          `
											<div class="img">
												<img src="${screenshot.screenshot}" alt="img">
											</div>
										`
                      )
                      .join("")}
										
									</div>
								</div>
							</div>
						`
                : ""
            }
						`,
          html: true,
        },
        btn: {
          ok: {
            enable: false,
          },
        },
        width: PanelUISize.setting.width,
        height: "auto",
        style: `
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
            `,
      });
    },
  };
  class NetDiskParse_ed2k extends ParseFileCore {
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "ed2k",
        ruleIndex,
        shareCode,
        accessCode,
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
  class NetDiskParse_Jianguoyun extends ParseFileCore {
    errorCode = {
      UnAuthorized: "请先登录坚果云账号",
    };
    async init(netDiskInfo) {
      super.init(netDiskInfo);
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
        let newFolderInfoList = that.parseMoreFile(folderInfo, downloadParams["hash"], downloadParams["name"]);
        Qmsg_loading.close();
        NetDiskView.$inst.linearChainDialogView.moreFile("坚果云文件解析", newFolderInfoList);
      } else {
        let fileSize = utils.formatByteToSize(downloadParams["size"]);
        let downloadUrl = await that.getFileLink(downloadParams.hash, downloadParams.name);
        if (!downloadUrl) {
          return;
        }
        if (NetDiskFilterScheme.isForwardDownloadLink("jianguoyun")) {
          downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("jianguoyun", downloadUrl);
        }
        log.info(downloadUrl);
        NetDiskView.$inst.linearChainDialogView.oneFile({
          title: "坚果云盘单文件直链",
          fileName: downloadParams["name"],
          fileSize,
          downloadUrl,
        });
      }
    }
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
            let downloadUrl = await that.getDirLink(hash, fileName2, item["relPath"]);
            if (!downloadUrl) {
              return;
            }
            Qmsg.success("获取成功！");
            if (NetDiskFilterScheme.isForwardDownloadLink("jianguoyun")) {
              downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("jianguoyun", downloadUrl);
            }
            log.info(downloadUrl);
            return {
              autoDownload: true,
              mode: "aBlank",
              url: downloadUrl,
            };
          },
        });
      });
      return folderInfoList;
    }
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
          Referer: `https://www.jianguoyun.com/p/${that.shareCode}`,
        },
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
          NetDiskView.$inst.newAccessCodeView(
            "密码缺失",
            "jianguoyun",
            that.ruleIndex,
            that.shareCode,
            that.accessCode,
            (option) => {
              that.init({
                ruleIndex: that.ruleIndex,
                shareCode: that.shareCode,
                accessCode: option.accessCode,
              });
            }
          );
          return;
        }
        if (fileErrorCode === "AuthenticationFailed") {
          Qmsg.error("密码错误");
          NetDiskView.$inst.newAccessCodeView(
            void 0,
            "jianguoyun",
            that.ruleIndex,
            that.shareCode,
            that.accessCode,
            (option) => {
              that.init({
                ruleIndex: that.ruleIndex,
                shareCode: that.shareCode,
                accessCode: option.accessCode,
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
            isdir,
          };
        }
      } else if (respData.responseText.match("对不起，找不到您指定的文件。")) {
        log.error("啊噢！ (404) 对不起，找不到您指定的文件。");
        Qmsg.error("坚果云: 对不起，找不到您指定的文件。");
      } else if (respData.responseText.match("对不起，您的某些输入不正确。")) {
        log.error("可能该链接不需要访问码或者访问码有问题");
        NetDiskView.$inst.newAccessCodeView(
          void 0,
          "jianguoyun",
          that.ruleIndex,
          that.shareCode,
          that.accessCode,
          (option) => {
            that.init({
              ruleIndex: that.ruleIndex,
              shareCode: that.shareCode,
              accessCode: option.accessCode,
            });
          }
        );
      } else {
        log.error("获取PageInfo失败");
        Qmsg.error("坚果云: 获取PageInfo失败");
      }
    }
    async getFileLink(fileHash = "", fileName = "") {
      const that = this;
      fileName = encodeURIComponent(fileName);
      let getResp = await httpx.get({
        url: `https://www.jianguoyun.com/d/ajax/fileops/pubFileLink?k=${fileHash}&name=${fileName}&wm=false${that.accessCode === "" ? "" : "&pd=" + that.accessCode}&forwin=1&_=${new Date().getTime()}`,
        responseType: "json",
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
        allowInterceptConfig: false,
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
    async getDirLink(fileHash = "", fileName = "", filePath = "/") {
      const that = this;
      fileName = encodeURIComponent(fileName);
      let getResp = await httpx.get({
        url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRLink?k=${fileHash}&dn=${fileName}&p=${filePath}&forwin=1&_=${new Date().getTime()}`,
        responseType: "json",
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
        allowInterceptConfig: false,
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
    async getFolderInfo(hash = "") {
      let getResp = await httpx.get({
        url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRBrowse?hash=${hash}&relPath=%2F&_=${Date.now()}`,
        responseType: "json",
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
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
    gotoLogin() {
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
                window.open("https://www.jianguoyun.com/d/login#from=https%3A%2F%2Fwww.jianguoyun.com%2F", "_blank");
              },
            },
          },
        },
        NetDiskView.$config.viewSizeConfig.jianGuoYunLoginTip
      );
    }
  }
  const NetDiskParse_Lanzou_Config = {
    DEFAULT_HOST_NAME: "www.lanzout.com",
    MENU_KEY: "lanzou-host-name",
    get hostname() {
      let generateData = GeneratePanelStorage(this.MENU_KEY, this.DEFAULT_HOST_NAME);
      return generateData.value;
    },
  };
  let deleteAnnotationCode = (text) => {
    text = text.replace(/\/\/.+/gi, "");
    text = text.replace(/\/\*[\s\S\n]+\*\//gi, "");
    return text;
  };
  class NetDiskParse_Lanzou extends ParseFileCore {
    router = {
      root(pathName = "") {
        if (pathName.startsWith("/")) {
          pathName = pathName.replace(/^\//, "");
        }
        return `https://${NetDiskParse_Lanzou_Config.hostname}/${pathName}`;
      },
      root_tp(pathName = "") {
        if (pathName.startsWith("/")) {
          pathName = pathName.replace(/^\//, "");
        }
        return `https://${NetDiskParse_Lanzou_Config.hostname}/tp/${pathName}`;
      },
      root_s(pathName = "") {
        if (pathName.startsWith("/")) {
          pathName = pathName.replace(/^\//, "");
        }
        return `https://${NetDiskParse_Lanzou_Config.hostname}/s/${pathName}`;
      },
    };
    regexp = {
      unicode: {
        match: /[%\u4e00-\u9fa5]+/g,
        tip: "中文链接",
        isUnicode: false,
      },
      noFile: {
        match: /div>来晚啦...文件取消分享了<\/div>/g,
        tip: "来晚啦...文件取消分享了",
      },
      noExists: {
        match: /div>文件不存在，或已删除<\/div>/g,
        tip: "文件不存在，或已删除",
      },
      linkInValid: {
        match: /div>文件链接失效，请获取新链接<\/div>/g,
        tip: "文件链接失效，请获取新链接",
      },
      needVipToShare: {
        match: /class="fbox">非会员.+请先开通会员/gi,
        tip: "该链接为非会员用户分享的文件，目前无法下载",
      },
      moreFile: {
        match: /<span id=\"filemore\" onclick=\"more\(\);\">/g,
      },
      sign: {
        match: /var[\s]*(posign|postsign|vidksek|skdklds)[\s]*=[\s]*'(.+?)';/,
      },
      fileName: {
        match: /<title>(.*)<\/title>/,
      },
      fileSize: {
        match: /<span class=\"mtt\">\((.*)\)<\/span>/,
      },
      loadDownHost: {
        match: /var[\s]*(vkjxld)[\s]*=[\s]*'(.+?)'/i,
      },
      loadDown: {
        match: /var[\s]*(loaddown|oreferr|spototo|domianload|hyggid)[\s]*=[\s]*'(.+?)'/i,
      },
      appleDown: {
        match: /var[\s]*appitem[\s]*=[\s]*'(.+?)'/i,
      },
      uploadTime: {
        match: /mt2\"\>时间:<\/span>(.+?)[\s]*<span/i,
      },
    };
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      this.regexp.unicode.isUnicode = Boolean(shareCode.match(this.regexp.unicode.match));
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
        let folderInfoList = this.getFolderInfo(this.transformFileInfoToInfoList(shareCode, accessCode, fileInfo), 0);
        $loading.close();
        log.info("递归完毕");
        NetDiskView.$inst.linearChainDialogView.moreFile("蓝奏云文件解析", folderInfoList);
      } else {
        log.info(`单文件`);
        let fileDownloadInfo = await this.getFileDownloadInfo(shareCode, accessCode, pageInfoResponse);
        if (fileDownloadInfo) {
          NetDiskView.$inst.linearChainDialogView.oneFile({
            title: "蓝奏云单文件直链",
            fileName: fileDownloadInfo.fileName,
            fileSize: fileDownloadInfo.fileSize,
            downloadUrl: fileDownloadInfo.downloadUrl,
            fileUploadTime: fileDownloadInfo.fileUploadTime,
          });
        }
      }
    }
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
            accessCode: folder.accessCode,
          };
        }),
        ...(fileInfo.infos || []).map((info) => {
          return {
            isFolder: false,
            fileName: info.name_all,
            fileSize: info.size,
            createTime: info.time,
            latestTime: info.time,
            shareCode: info.id,
            accessCode,
          };
        }),
      ].filter((it) => it != null);
    }
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
            createTime: item.createTime,
            latestTime: item.latestTime,
            isFolder: true,
            index,
            clickEvent: async () => {
              let fileInfo = await this.parseFiles(item.shareCode, item.accessCode);
              if (fileInfo) {
                return that.getFolderInfo(
                  this.transformFileInfoToInfoList(this.shareCode, this.accessCode, fileInfo),
                  index + 1
                );
              }
              return [];
            },
          });
        } else {
          tempFolderFileInfoList.push({
            fileName: item.fileName,
            fileSize: item.fileSize,
            fileType: "",
            createTime: item.createTime,
            latestTime: item.latestTime,
            isFolder: false,
            index,
            clickEvent: async () => {
              let url = this.ruleIndex === 1 ? this.router.root_s(item.shareCode) : this.router.root(item.shareCode);
              let responseData = await this.getPageInfo(url);
              if (!responseData) {
                return;
              }
              let fileDownloadInfo = await this.getFileDownloadInfo(item.shareCode, item.accessCode, responseData);
              if (!fileDownloadInfo) {
                return;
              }
              return {
                url: fileDownloadInfo.downloadUrl,
                autoDownload: true,
                mode: "aBlank",
              };
            },
          });
        }
      });
      tempFolderInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      tempFolderFileInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      return folderInfoList;
    }
    async getFileDownloadInfo(shareCode, accessCode, responseData) {
      let fileDownloadInfo = void 0;
      let $pageDoc = domUtils.toElement(responseData.responseText, true, true);
      let pageText = deleteAnnotationCode(responseData.responseText);
      let $pageIframe =
        $pageDoc.querySelector('iframe[class^="ifr"]') || $pageDoc.querySelector('iframe[class^="n_downlink"]');
      if ($pageIframe) {
        let iframeUrl = $pageIframe.getAttribute("src");
        log.error("该链接需要重新通过iframe地址访问获取信息", iframeUrl);
        Qmsg.info("正在请求下载信息");
        let fileName =
          $pageDoc.querySelector("body div.d > div")?.innerText ||
          $pageDoc.querySelector("#filenajax")?.innerText ||
          $pageDoc.querySelector("title")?.textContent?.replace(/ - 蓝奏云$/i, "");
        let fileSize =
          pageText.match(/文件大小：<\/span>(.+?)<br>/i) ||
          $pageDoc.querySelector("div.n_box div.n_file div.n_filesize")?.innerText ||
          $pageDoc.querySelector(".d2 table tr td .fileinfo:nth-child(1) .fileinforight")?.innerText;
        let fileUploadTime =
          pageText.match(/上传时间：<\/span>(.+?)<br>/i) ||
          $pageDoc.querySelector("#file[class=''] .n_file_info span.n_file_infos")?.innerText ||
          $pageDoc.querySelector(".d2 table tr td .fileinfo:nth-child(3) .fileinforight")?.innerText ||
          $pageDoc.querySelector("#file[class='filter'] .n_file_info span.n_file_infos")?.innerText;
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
        let downloadUrl = await this.getLinkByIframe(shareCode, accessCode, iframeUrl, {
          fileName,
          fileSize,
          fileUploadTime,
        });
        if (!downloadUrl) {
          return;
        }
        fileDownloadInfo = {
          fileName,
          fileSize,
          downloadUrl,
          fileUploadTime,
        };
      } else {
        log.warn("该页面不是使用iframe获取链接，使用其它方式解析");
        let sign = pageText.match(/'sign':'(.+?)',/i) || pageText.match(this.regexp.sign.match);
        let postData_p = "";
        let postData_sign = "";
        let fileNameMatch = pageText.match(this.regexp.fileName.match);
        let fileName = fileNameMatch ? fileNameMatch[fileNameMatch.length - 1].trim() : "";
        let fileSizeMatch =
          pageText.match(this.regexp.fileSize.match) || pageText.match(/<div class="n_filesize">大小：(.+?)<\/div>/i);
        let fileSize = fileSizeMatch ? fileSizeMatch[fileSizeMatch.length - 1].trim() : "";
        let fileUploadTimeMatch =
          pageText.match(this.regexp.uploadTime.match) || pageText.match(/<span class="n_file_infos">(.+?)<\/span>/i);
        let fileUploadTime = fileUploadTimeMatch ? fileUploadTimeMatch[fileUploadTimeMatch.length - 1].trim() : "";
        let fileIdMatch =
          pageText.match(/[\s]+url[\s]+:[\s]+'\/ajaxm.php\?file=([0-9]+)',/i) ||
          pageText.match(/\/\/url[\s]+:[\s]+'\/ajaxm.php\?file=([0-9]+)',/i);
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
              Referer: this.router.root(shareCode),
            },
            data: `action=downprocess&sign=${postData_sign}&p=${postData_p}&kd=${kd}`,
          });
          if (!ajaxmResponse.status) {
            return;
          }
          let ajaxmResponseData = ajaxmResponse.data;
          log.info(ajaxmResponseData);
          let json_data = utils.toJSON(ajaxmResponseData.responseText);
          let downloadUrl = `${json_data["dom"]}/file/${json_data["url"]}`;
          if (
            typeof json_data["url"] === "string" &&
            (json_data["url"].startsWith("http") || json_data["url"].startsWith(json_data["dom"]))
          ) {
            downloadUrl = json_data["url"];
          }
          json_data["zt"];
          if ("密码不正确".indexOf(json_data["inf"]) != -1) {
            Qmsg.error("密码不正确!");
            let newAccessCodeInfo = await new Promise((resolve) => {
              NetDiskView.$inst.newAccessCodeView(
                void 0,
                "lanzou",
                this.ruleIndex,
                shareCode,
                accessCode,
                (option) => {
                  resolve({
                    accessCode: option.accessCode,
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
            return await this.getFileDownloadInfo(shareCode, accessCode, newResponseData);
          } else {
            fileName = json_data["inf"] ? json_data["inf"] : fileName;
          }
          fileDownloadInfo = {
            fileName,
            fileSize,
            fileUploadTime,
            downloadUrl,
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
          let downloadUrl = `${loadDownHost[loadDownHost.length - 1]}${loadDown[loadDown.length - 1]}`;
          fileDownloadInfo = {
            fileName,
            fileSize,
            fileUploadTime,
            downloadUrl,
          };
        }
      }
      if (fileDownloadInfo && NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
        fileDownloadInfo.downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("lanzou", fileDownloadInfo.downloadUrl);
      }
      return fileDownloadInfo;
    }
    async getPageInfo(url) {
      let response = await httpx.get({
        url,
        headers: {
          Accept: "*/*",
          "User-Agent": utils.getRandomPCUA(),
          Referer: url,
        },
        allowInterceptConfig: false,
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
    async parseFiles(shareCode, accessCode) {
      let url = this.ruleIndex === 1 ? this.router.root_s(shareCode) : this.router.root(shareCode);
      let pageInfoResponse = await this.getPageInfo(url);
      if (!pageInfoResponse) {
        return;
      }
      let pageText = pageInfoResponse.responseText;
      let pageDoc = domUtils.toElement(pageText, true, true);
      let folders = Array.from(pageDoc.querySelectorAll("#folder a.mlink[href]"))
        .map(($link) => {
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
            folderName: filename,
          };
        })
        .filter((it) => it != null);
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
        pwd: accessCode,
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
              NetDiskView.$inst.newAccessCodeView(
                void 0,
                "lanzou",
                this.ruleIndex,
                shareCode,
                accessCode,
                (option) => {
                  resolve({
                    accssCode: option.accessCode,
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
        infos,
      };
      log.info(result);
      return result;
    }
    async getLinkByIframe(shareCode, accessCode, urlPathName, fileInfo) {
      log.info(urlPathName, fileInfo);
      let iFrameUrl = this.router.root(urlPathName);
      let response = await httpx.get({
        url: iFrameUrl,
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "User-Agent": utils.getRandomPCUA(),
          Referer: this.router.root(shareCode),
        },
      });
      if (!response.status) {
        return;
      }
      let responseInstance = response.data;
      log.info(responseInstance);
      let pageText = responseInstance.responseText;
      let websignkeyMatch =
        pageText.match(/'websignkey'[\s]*:[\s]*'(.+?)'/i) || pageText.match(/var[\s]*aihidcms[\s]*=[\s]*'(.*)';/i);
      let websignMatch = pageText.match(/var[\s]*ciucjdsdc[\s]*=[\s]*'(.*)';/i);
      let signsMatch = pageText.match(/var[\s]*ajaxdata[\s]*=[\s]*'(.+)';/i);
      let signMatch = pageText.match(/'sign':[\s]*'(.+)',/i) || pageText.match(/var[\s]*wp_sign[\s]*=[\s]*'(.*)';/i);
      let ajaxUrlMatch =
        pageText.match(/[^\/\/]url[\s]*:[\s]*'(.+?)'[\s]*,/i) || pageText.match(/url[\s]*:[\s]*'(.+?)'[\s]*,/);
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
        ves: 1,
      };
      log.success("请求的路径参数：" + ajaxUrl);
      log.success(["ajaxm.php的请求参数-> ", postData]);
      let postResp = await httpx.post(this.router.root(ajaxUrl), {
        data: utils.toSearchParamsStr(postData),
        headers: {
          Accept: "application/json, text/javascript, */*",
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: this.router.root(shareCode),
          "User-Agent": utils.getRandomPCUA(),
        },
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
        allowInterceptConfig: false,
      });
      let killdns2 = await httpx.get("https://boce.lanosso.com/file/kdns2.js", {
        allowInterceptConfig: false,
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
        NetDiskView.$inst.newAccessCodeView(void 0, "lanzou", this.ruleIndex, shareCode, accessCode, (option) => {
          this.init({
            ruleIndex: this.ruleIndex,
            shareCode,
            accessCode: option.accessCode,
          });
        });
      } else {
        fileInfo.fileName = utils.isNotNull(jsonData["inf"]) ? jsonData["inf"] : fileInfo.fileName;
        log.info(downloadUrl);
        return downloadUrl;
      }
    }
    async getKNDS() {
      let response = await httpx.get("https://down-load.lanrar.com/file/kdns.js", {
        allowInterceptConfig: false,
      });
      if (response.status && utils.isNotNull(response.data.responseText)) {
        return 1;
      } else {
        return 0;
      }
    }
    async fileMoreAjax(shareCode, accessCode, config) {
      let postData = utils.toFormData({
        rep: 0,
        up: 1,
        ls: 1,
        ...config,
      });
      let url = this.router.root("filemoreajax.php");
      let fileMoreAjaxResponse = await httpx.post({
        url: this.router.root("filemoreajax.php"),
        responseType: "json",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "User-Agent": utils.getRandomAndroidUA(),
          Referer: url,
        },
        data: postData,
      });
      if (!fileMoreAjaxResponse.status) {
        return;
      }
      let fileMoreAjaxResponseData = fileMoreAjaxResponse.data;
      log.info(fileMoreAjaxResponseData);
      let json_data = utils.toJSON(fileMoreAjaxResponseData.responseText);
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
      "A",
    ],
    decodeChar(e) {
      for (let t = 0; t < this.EncryptList.length; t++) if (e == this.EncryptList[t]) return t;
      return -1;
    },
    idEncrypt(shareCode) {
      let t = 1,
        n = 0;
      if ("" != shareCode && shareCode.length > 4) {
        let r;
        shareCode = shareCode.substring(3, shareCode.length - 1);
        for (let index = 0; index < shareCode.length; index++)
          ((r = shareCode.charAt(shareCode.length - index - 1)), (n += this.decodeChar(r) * t), (t *= 62));
      }
      return n;
    },
    encrypt(e) {
      const t = Cryptojs.enc.Utf8.parse(this.LanZouDiskApp),
        n = Cryptojs.enc.Utf8.parse(e),
        r = Cryptojs.AES.encrypt(n, t, {
          mode: Cryptojs.mode.ECB,
          padding: Cryptojs.pad.Pkcs7,
        });
      return r;
    },
    encryptHex(e) {
      const t = this.encrypt(e, this.LanZouDiskApp);
      return t.ciphertext.toString().toUpperCase();
    },
  };
  class NetDiskParse_Lanzouyx extends ParseFileCore {
    $data = {
      devType: 6,
      devModel: "Chrome",
      extra: 2,
      type: 0,
      offset: 1,
      limit: 60,
    };
    uuid = void 0;
    userId = void 0;
    shareCodeId = void 0;
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      this.shareCodeId = this.getDecodeShareCodeId(shareCode);
      this.uuid = this.getEncodeUUID();
      let linkInfo = await this.recommendList(
        this.$data.devType,
        this.$data.devModel,
        this.uuid,
        this.$data.extra,
        this.getEncodeTimeStamp(),
        this.shareCode,
        this.$data.type,
        this.$data.offset,
        this.$data.limit
      );
      if (!linkInfo) {
        return;
      }
      if (!linkInfo["list"].length) {
        return;
      }
      if (linkInfo["list"][0]?.["map"]?.["userId"]) {
        this.userId = linkInfo["list"][0]?.["map"]?.["userId"];
      } else {
        Qmsg.error("解析获取【userId】为空");
        return;
      }
      if (linkInfo["list"][0]["folderIds"] == null) {
        log.success("该链接是 单文件");
        let fileInfo = linkInfo["list"][0]["fileList"][0];
        let folderInfoList = this.parseFolderInfo(linkInfo["list"][0]["fileList"], 0);
        let downloadInfo = await folderInfoList[0]["clickEvent"]();
        if (downloadInfo && !Array.isArray(downloadInfo)) {
          let downloadUrl = downloadInfo["url"];
          if (NetDiskFilterScheme.isForwardDownloadLink("lanzouyx")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("lanzouyx", downloadUrl);
          }
          NetDiskView.$inst.linearChainDialogView.oneFile({
            title: "蓝奏云优享单文件直链",
            fileName: fileInfo["fileName"],
            fileSize: fileInfo["fileSize"] * 1024,
            downloadUrl,
            fileUploadTime: utils.formatToTimeStamp(fileInfo["updTime"]),
            fileLatestTime: utils.formatToTimeStamp(fileInfo["updTime"]),
          });
        }
      } else {
        log.success("该链接是 多文件");
        Qmsg.info("正在递归文件");
        let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let folderInfoList = this.parseFolderInfo(linkInfo["list"][0]["fileList"], 0);
        QmsgLoading.close();
        log.info("递归完毕");
        NetDiskView.$inst.linearChainDialogView.moreFile("蓝奏云优享解析", folderInfoList);
      }
    }
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
            },
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
              let downloadUrl = await that.getDownloadFileUrl(...that.getDownloadFileParams(fileId, userId, uuid));
              if (downloadUrl) {
                if (NetDiskFilterScheme.isForwardDownloadLink("lanzouyx")) {
                  downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("lanzouyx", downloadUrl);
                }
                return {
                  url: downloadUrl,
                  autoDownload: true,
                  mode: "aBlank",
                };
              }
            },
          });
        }
      });
      tempFolderInfoList.sort((leftData, rightData) => leftData["fileName"].localeCompare(rightData["fileName"]));
      tempFolderFileInfoList.sort((leftData, rightData) => leftData["fileName"].localeCompare(rightData["fileName"]));
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      return folderInfoList;
    }
    async recommendList(
      devType = this.$data.devType,
      devModel = this.$data.devModel,
      uuid = "",
      extra = this.$data.extra,
      timestamp = "",
      shareId = "",
      type = this.$data.type,
      offset = this.$data.offset,
      limit = this.$data.limit
    ) {
      let response = await httpx.post(
        `https://api.ilanzou.com/unproved/recommend/list?${utils.toSearchParamsStr({
          devType,
          devModel,
          uuid,
          extra,
          timestamp,
          shareId,
          code: this.accessCode,
          type,
          offset,
          limit,
        })}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.ilanzou.com",
            Referer: "https://www.ilanzou.com/",
            "Sec-Fetch-Site": "same-site",
            Host: "api.ilanzou.com",
            "User-Agent": utils.getRandomPCUA(),
          },
          responseType: "json",
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
    async getFolderInfo(
      devType = this.$data.devType,
      devModel = this.$data.devModel,
      uuid = "",
      extra = this.$data.extra,
      timestamp = "",
      shareId = "",
      folderId = "",
      offset = this.$data.offset,
      limit = this.$data.limit
    ) {
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
          limit,
        })}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.ilanzou.com",
            Referer: "https://www.ilanzou.com/",
            "Sec-Fetch-Site": "same-site",
            Host: "api.ilanzou.com",
            "User-Agent": utils.getRandomPCUA(),
          },
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
    async getDownloadFileUrl(
      downloadId = "",
      enable = 1,
      devType = this.$data.devType,
      uuid = "",
      timestamp = "",
      auth = "",
      shareId = this.shareCode
    ) {
      let url = `https://api.ilanzou.com/unproved/file/redirect?${utils.toSearchParamsStr({
        downloadId,
        enable,
        devType,
        uuid,
        timestamp,
        auth,
        shareId,
      })}`;
      return url;
    }
    getEncodeUUID(timestamp = 21) {
      let r = (e = 21) =>
        crypto
          .getRandomValues(new Uint8Array(e))
          .reduce(
            (e2, t) => (
              (t &= 63),
              (e2 += t < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_"),
              e2
            ),
            ""
          );
      return r(timestamp);
    }
    getDecodeShareCodeId(shareCode) {
      return LanZouUtils.idEncrypt(shareCode);
    }
    getEncodeTimeStamp(time = Date.now()) {
      return LanZouUtils.encryptHex(time);
    }
    getDownloadFileParams(fileId, userId = "", uuid) {
      const that = this;
      let nowTime = Date.now();
      let downloadId = LanZouUtils.encryptHex(fileId + "|" + userId),
        enable = 1,
        timestamp = that.getEncodeTimeStamp(nowTime),
        auth = LanZouUtils.encryptHex(fileId + "|" + nowTime);
      return [downloadId, enable, that.$data.devType, uuid, timestamp, auth, that.shareCode];
    }
    gotoLogin() {
      NetDiskPops.confirm(
        {
          title: {
            position: "center",
            text: "蓝奏云优享",
          },
          content: {
            text: "必须先在【蓝奏云优享】进行登录，然后登录成功后刷新获取必备的下载参数【uuid】和【userId】。",
            html: false,
          },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "前往",
              enable: true,
              callback() {
                window.open("https://www.ilanzou.com", "_blank");
              },
            },
          },
        },
        NetDiskView.$config.viewSizeConfig.tianYiYunLoginTip
      );
    }
  }
  class NetDiskParse_magnet extends ParseFileCore {
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "magnet",
        ruleIndex,
        shareCode,
        accessCode,
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
    isSupport_GM_download() {
      try {
        return typeof _GM_download === "function";
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  };
  class NetDiskParse_nainiu extends ParseFileCore {
    panelList = [];
    panelContent = "";
    OK_CODE = "0000";
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      this.panelList.length = 0;
      this.panelContent = "";
      let checkLinkValidityInfo = await this.checkLinkValidity(this.shareCode, this.accessCode);
      if (!checkLinkValidityInfo) {
        return;
      }
      if (checkLinkValidityInfo.isFolder) {
        Qmsg.info("正在递归文件");
        let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let firstFolderInfo = await this.getShareFolder(checkLinkValidityInfo["data"]["guid"]);
        if (!firstFolderInfo) {
          QmsgLoading.close();
          return;
        }
        let firstFileInfo = await this.getShareFiles(checkLinkValidityInfo["data"]["guid"]);
        if (!firstFileInfo) {
          QmsgLoading.close();
          return;
        }
        let folderInfoList = this.getFolderInfo(
          checkLinkValidityInfo["data"]["guid"],
          firstFolderInfo,
          firstFileInfo,
          0
        );
        QmsgLoading.close();
        log.info("递归完毕");
        NetDiskView.$inst.linearChainDialogView.moreFile("奶牛快传文件解析", folderInfoList);
      } else {
        let downloadUrl = void 0;
        if (checkLinkValidityInfo["zipDownload"]) {
          downloadUrl = await this.getZipFileDownloadUrl(
            this.shareCode,
            checkLinkValidityInfo["guid"],
            checkLinkValidityInfo["fileName"]
          );
        } else {
          downloadUrl = await this.getDownloadUrl(
            this.shareCode,
            checkLinkValidityInfo["guid"],
            checkLinkValidityInfo["id"]
          );
        }
        if (!downloadUrl) {
          return;
        }
        if (NetDiskFilterScheme.isForwardDownloadLink("nainiu")) {
          downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("nainiu", downloadUrl);
        }
        NetDiskView.$inst.linearChainDialogView.oneFile({
          title: "奶牛快传单文件直链",
          fileName: checkLinkValidityInfo["fileName"],
          fileType: checkLinkValidityInfo["fileType"],
          fileSize: checkLinkValidityInfo["fileSize"],
          downloadUrl,
          fileUploadTime: checkLinkValidityInfo["fileUploadTime"],
          fileLatestTime: checkLinkValidityInfo["fileLatestTime"],
          clickCallBack: (_fileDetails_) => {
            this.downloadFile(checkLinkValidityInfo["fileName"], downloadUrl);
          },
        });
      }
    }
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
          NetDiskView.$inst.newAccessCodeView(
            "密码缺失",
            "nainiu",
            that.ruleIndex,
            that.shareCode,
            that.accessCode,
            (option) => {
              that.init({
                ruleIndex: that.ruleIndex,
                shareCode: that.shareCode,
                accessCode: option.accessCode,
              });
            }
          );
          return false;
        } else if (zipDownload) {
          Qmsg.success("该链接为zip单文件");
          return {
            zipDownload,
            guid: resultJSON["data"]["guid"],
            fileSize: utils.formatByteToSize(resultJSON["data"]["firstFolder"]["size"]),
            fileName: resultJSON["data"]["firstFolder"]["title"],
            fileUploadTime: utils.formatTime(resultJSON["data"]["firstFolder"]["created_at"]),
            fileLatestTime: utils.formatTime(resultJSON["data"]["firstFolder"]["updated_at"]),
          };
        } else if (resultJSON["data"]["firstFile"] == void 0) {
          Qmsg.success("该链接为文件夹类型");
          return {
            isFolder: true,
            guid: resultJSON["data"]["guid"],
            firstFolder: resultJSON["data"]["firstFolder"],
            data: resultJSON["data"],
          };
        }
        return {
          zipDownload,
          guid: resultJSON["data"]["guid"],
          id: resultJSON["data"]["firstFile"]["id"],
          fileSize: utils.formatByteToSize(resultJSON["data"]["firstFile"]["file_info"]["size"]),
          fileName: resultJSON["data"]["firstFile"]["file_info"]["title"],
          fileType: resultJSON["data"]["firstFile"]["file_info"]["format"],
          fileUploadTime: utils.formatTime(resultJSON["data"]["firstFile"]["created_at"]),
          fileLatestTime: utils.formatTime(resultJSON["data"]["firstFile"]["updated_at"]),
        };
      }
    }
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
            let childFolderInfo = await that.getShareFolder(transferGuid, folderInfo["id"]);
            if (!childFolderInfo) {
              return [];
            }
            let childFileInfo = await that.getShareFiles(transferGuid, folderInfo["id"]);
            if (!childFileInfo) {
              return [];
            }
            let folderInfoList2 = that.getFolderInfo(transferGuid, childFolderInfo, childFileInfo, index + 1);
            return folderInfoList2;
          },
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
            let downloadUrl = await that.getDownloadUrl(that.shareCode, transferGuid, fileInfo["id"]);
            if (!downloadUrl) {
              return;
            }
            if (NetDiskFilterScheme.isForwardDownloadLink("nainiu")) {
              downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("nainiu", downloadUrl);
            }
            that.downloadFile(fileName, downloadUrl);
          },
        });
      });
      tempFolderInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      tempFolderFileInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      log.info("getFolderInfo", folderInfoList);
      return folderInfoList;
    }
    async parseMoreFile(shareCode, accessCode) {}
    async getShareFolder(transferGuid, folderId = "", page = 0, size = 100) {
      const that = this;
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
    async getShareFiles(transferGuid, folderId = "", page = 0, size = 20, subContent = false) {
      const that = this;
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
    async getShareByUniqueUrl(shareCode) {
      let url = `https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${shareCode}`;
      let getResp = await httpx.get({
        url,
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
      log.info("转换的JSON", resultJSON);
      return resultJSON;
    }
    async getDownloadUrl(shareCode, guid = "", id = "") {
      const that = this;
      let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&fileId=${id}`;
      let getResp = await httpx.get({
        url,
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
      log.info("转换的JSON", resultJSON);
      if (resultJSON["code"] === that.OK_CODE) {
        return resultJSON["data"]["downloadUrl"];
      } else {
        Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
        return;
      }
    }
    async getZipFileDownloadUrl(shareCode, guid = "", title = "") {
      const that = this;
      let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&title=${title}`;
      let getResp = await httpx.get({
        url,
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
      log.info("转换的JSON", resultJSON);
      if (resultJSON["code"] === that.OK_CODE) {
        return resultJSON["data"]["downloadUrl"];
      } else {
        Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
        return;
      }
    }
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
        },
      });
      let result = _GM_download({
        url: downloadUrl,
        name: fileName,
        headers: {
          Referer: "https://cowtransfer.com/s/" + this.shareCode,
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
              consoleLogContent: true,
            });
          } else {
            Qmsg.error(`下载 ${fileName} 失败或已取消`, {
              consoleLogContent: true,
            });
          }
        },
        ontimeout() {
          downloadingQmsg.close();
          Qmsg.error(`下载 ${fileName} 请求超时`, { consoleLogContent: true });
        },
      });
      if (typeof result === "object" && result != null && "abort" in result) {
        abortDownload = result["abort"];
      }
    }
  }
  class NetDiskParse_Tianyiyun extends ParseFileCore {
    shareId = void 0;
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
      InvalidSessionKey:
        "天翼云PC端Cookie未生成，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC且在登录后要等待进入个人云空间后生成Cookie，不是手机端浏览的个人云空间，那样生成的Cookie无法使用)",
    };
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let shareInfoData = await this.getShareInfoByCodeV2(shareCode);
      if (!shareInfoData) {
        return;
      }
      log.info("解析的JSON信息", shareInfoData);
      if (shareInfoData["needAccessCode"] && utils.isNull(this.accessCode)) {
        Qmsg.error("密码不正确!");
        NetDiskView.$inst.newAccessCodeView(
          void 0,
          "tianyiyun",
          this.ruleIndex,
          this.shareCode,
          this.accessCode,
          (option) => {
            this.init({
              ruleIndex: this.ruleIndex,
              shareCode: this.shareCode,
              accessCode: option.accessCode,
            });
          }
        );
        return;
      }
      if ("shareId" in shareInfoData) {
        this.shareId = shareInfoData["shareId"];
      } else {
        let newShareId = await this.getShareId(shareCode, accessCode);
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
        let folderInfo = await this.listShareDir(
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
        let folderInfoList = this.getFolderInfo(shareCode, accessCode, folderInfo, 0);
        QmsgLoading.close();
        log.info("递归完毕");
        NetDiskView.$inst.linearChainDialogView.moreFile("天翼云文件解析", folderInfoList);
        return;
      } else {
        let downloadUrl = await this.getDownloadUrl(
          this.shareCode,
          this.accessCode,
          shareInfoData.fileId,
          this.shareId
        );
        if (downloadUrl) {
          if (NetDiskFilterScheme.isForwardDownloadLink("tianyiyun")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("tianyiyun", downloadUrl);
          }
          NetDiskView.$inst.linearChainDialogView.oneFile({
            title: "天翼云单文件直链",
            fileName: shareInfoData.fileName,
            fileSize: utils.formatByteToSize(shareInfoData.fileSize),
            downloadUrl,
            fileUploadTime: shareInfoData.fileCreateDate,
            fileLatestTime: shareInfoData.fileLastOpTime,
          });
        }
      }
    }
    async getUserBriefInfo(shareCode) {
      const that = this;
      let response = await httpx.get("https://cloud.189.cn/api/portal/v2/getUserBriefInfo.action", {
        headers: {
          Accept: "application/json;charset=UTF-8",
          Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
          "User-Agent": utils.getRandomPCUA(),
        },
        allowInterceptConfig: false,
      });
      log.info(response);
      if (!response.status) {
        let errorResultJSON = utils.toJSON(response.data.responseText);
        if (errorResultJSON["res_code"] in that.code) {
          Qmsg.error(that.code[errorResultJSON["res_code"]]);
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
          Origin: "https://cloud.189.cn",
        },
        allowInterceptConfig: false,
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
    async getShareId(shareCode, accessCode) {
      let response = await httpx.get({
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
    getNoCacheValue() {
      let result = "";
      for (let index = 0; index < 17; index++) {
        result += utils.getRandomValue(1, 9);
      }
      return "0." + result;
    }
    async getDownloadUrl(shareCode, accessCode, fileId, shareId) {
      const that = this;
      let response = await httpx.get({
        url: `https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?fileId=${fileId}&dt=1&shareId=${shareId}`,
        headers: {
          Accept: "application/json;charset=UTF-8",
          "Cache-Control": "no-cache",
          "User-Agent": utils.getRandomPCUA(),
          Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
          "Sign-Type": 1,
        },
        responseType: "json",
        allowInterceptConfig: false,
      });
      log.info(response);
      if (!response.status) {
        let errorResultJSON = utils.toJSON(response.data.responseText);
        if (errorResultJSON["errorCode"] === "InvalidSessionKey") {
          that.gotoLogin(that.code["InvalidSessionKey"]);
        } else if (errorResultJSON["res_code"] in that.code) {
          Qmsg.error(that.code[errorResultJSON["res_code"]]);
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
    gotoLogin(text = "") {
      NetDiskPops.confirm(
        {
          title: {
            position: "center",
            text: "天翼云",
          },
          content: {
            text,
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
        NetDiskView.$config.viewSizeConfig.tianYiYunLoginTip
      );
    }
    async listShareDir(
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
        accessCode,
      };
      let response = await httpx.get(
        `https://cloud.189.cn/api/open/share/listShareDir.action?${utils.toSearchParamsStr(getSearParamData)}`,
        {
          headers: {
            Accept: "application/json;charset=UTF-8",
            Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
            "Sign-Type": 1,
            "User-Agent": utils.getRandomPCUA(),
          },
          responseType: "json",
          allowInterceptConfig: false,
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
            return that.getFolderInfo(shareCode, accessCode, _folderInfo_, index + 1);
          },
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
            let downloadUrl = await that.getDownloadUrl(shareCode, accessCode, fileInfo["id"], that.shareId);
            if (downloadUrl) {
              if (NetDiskFilterScheme.isForwardDownloadLink("tianyiyun")) {
                downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("tianyiyun", downloadUrl);
              }
              return {
                autoDownload: true,
                mode: "aBlank",
                url: downloadUrl,
              };
            }
          },
        });
      });
      tempFolderInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      tempFolderFileInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      log.info("getFolderInfo", folderInfoList);
      return folderInfoList;
    }
  }
  class NetDiskParse_UC extends ParseFileCore {
    async init(netDiskInfo) {
      super.init(netDiskInfo);
      let { ruleIndex, shareCode, accessCode } = netDiskInfo;
      Qmsg.info("检查是否已登录UC网盘");
      let loginStatus = await this.isLogin();
      if (!Boolean(loginStatus)) {
        this.gotoLogin(
          "检测到尚未登录UC网盘，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才有登录选项)"
        );
        return;
      }
      let stoken = await this.getStoken(this.shareCode, this.accessCode);
      if (!stoken) {
        return;
      }
      let detail = await this.getDetail(this.shareCode, this.accessCode, stoken);
      if (!detail) {
        Qmsg.error("UC网盘：获取detail失败");
        return;
      }
      if (detail.length === 1 && detail[0].dir == false && detail[0].file_type === 1) {
        let oneFileDetail = detail[0];
        let oneFileDownloadDetail = await this.getDownload(
          this.shareCode,
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
        NetDiskView.$inst.linearChainDialogView.oneFile({
          title: "UC网盘单文件直链",
          fileName: oneFileDownloadDetail[0].file_name,
          fileSize: utils.formatByteToSize(oneFileDownloadDetail[0].size),
          downloadUrl: oneFileDownloadDetail[0].download_url,
          fileUploadTime: utils.formatTime(oneFileDownloadDetail[0].created_at),
          fileLatestTime: utils.formatTime(oneFileDownloadDetail[0].last_update_at),
          clickCallBack: () => {
            this.downloadFile(oneFileDownloadDetail[0].file_name, oneFileDownloadDetail[0].download_url);
          },
        });
      } else {
        Qmsg.info("正在递归文件");
        let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
        let folderInfoList = this.getFolderInfo(detail, stoken, 0);
        QmsgLoading.close();
        log.info("递归完毕");
        NetDiskView.$inst.linearChainDialogView.moreFile("UC网盘文件解析", folderInfoList);
        return;
      }
    }
    async isLogin() {
      let getResp = await httpx.get("https://drive.uc.cn/", {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
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
        },
      });
      let result = _GM_download({
        url: downloadUrl,
        name: fileName,
        headers: {
          Referer: "https://drive.uc.cn/",
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
              consoleLogContent: true,
            });
          } else {
            Qmsg.error(`下载 ${fileName} 失败或已取消`, {
              consoleLogContent: true,
            });
          }
        },
        ontimeout() {
          downloadingQmsg.close();
          Qmsg.error(`下载 ${fileName} 请求超时`, { consoleLogContent: true });
        },
      });
      if (typeof result === "object" && result != null && "abort" in result) {
        abortDownload = result["abort"];
      }
    }
    gotoLogin(text = "") {
      NetDiskPops.confirm(
        {
          title: {
            position: "center",
            text: "UC网盘",
          },
          content: {
            text,
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
        NetDiskView.$config.viewSizeConfig.tianYiYunLoginTip
      );
    }
    async getStoken(pwd_id, passcode) {
      let response = await httpx.post(
        "https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?entry=ft&fr=pc&pr=UCBrowser",
        {
          data: JSON.stringify({
            share_for_transfer: true,
            passcode,
            pwd_id,
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
            "User-Agent": utils.getRandomPCUA(),
            Origin: "https://drive.uc.cn",
            Referer: "https://drive.uc.cn/",
          },
          allowInterceptConfig: false,
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
    async getDetail(
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
      let response = await httpx.get(
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
    async getDownload(pwd_id, stoken, fid, share_fid_token) {
      let response = await httpx.post("https://pc-api.uc.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=UCBrowser", {
        data: JSON.stringify({
          fids: [fid],
          pwd_id,
          stoken,
          fids_token: [share_fid_token],
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=UTF-8",
          "User-Agent": utils.getRandomPCUA(),
          Origin: "https://drive.uc.cn",
          Referer: "https://drive.uc.cn/",
        },
      });
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
              let fileDownloadUrlInfo = await that.getDownload(that.shareCode, stoken, item.fid, item.share_fid_token);
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
                  schemeDownloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("uc", schemeDownloadUrl);
                }
                if (schemeDownloadUrl === fileDownloadUrl) {
                  that.downloadFile(item.file_name, fileDownloadUrl);
                } else {
                  return {
                    autoDownload: true,
                    mode: "aBlank",
                    url: fileDownloadUrl,
                  };
                }
              }
            },
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
              let newDetail = await that.getDetail(that.shareCode, that.accessCode, stoken, item.fid);
              if (newDetail) {
                return that.getFolderInfo(newDetail, stoken, index + 1);
              } else {
                return [];
              }
            },
          });
        }
      });
      tempFolderInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      tempFolderFileInfoList.sort((a, b) => a["fileName"].localeCompare(b["fileName"]));
      folderInfoList = folderInfoList.concat(tempFolderInfoList);
      folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
      log.info("getFilesInfoByRec", folderInfoList);
      return folderInfoList;
    }
  }
  class NetDiskParse_Wenshushu extends ParseFileCore {
    token = void 0;
    code = {
      1004: "no token",
      1008: "您没有权限访问",
      1013: "糟糕，此任务已过期销毁，下次要记得续期",
      1066: "对方设置的下载 / 预览次数已用完",
      1088: "糟糕，您访问的页面不存在",
    };
    async init(netDiskInfo) {
      super.init(netDiskInfo);
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
    async getWssToken() {
      const that = this;
      let postResp = await httpx.post("https://www.wenshushu.cn/ap/login/anonymous", {
        responseType: "json",
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
        that.token = data["data"]["token"];
        return data["data"]["token"];
      } else if (data["code"] in that.code) {
        Qmsg.error(that.code[data["code"]]);
      } else {
        Qmsg.error("获取wss失败");
      }
    }
    async getPid() {
      const that = this;
      let postResp = await httpx.post({
        url: "https://www.wenshushu.cn/ap/task/mgrtask",
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
          "x-token": that.token,
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
    }
    async getFileNList(bid, pid) {
      const that = this;
      let postResp = await httpx.post("https://www.wenshushu.cn/ap/ufile/nlist", {
        responseType: "json",
        data: JSON.stringify({
          start: 0,
          sort: {
            name: "asc",
          },
          bid,
          pid,
          options: {
            uploader: "true",
          },
          size: 50,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomAndroidUA(),
          Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
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
          NetDiskLinkClickMode.openBlankUrl(
            NetDiskLinkClickModeUtils.getBlankUrl({
              ruleKeyName: "wenshushu",
              ruleIndex: that.ruleIndex,
              shareCode: that.shareCode,
              accessCode: that.accessCode,
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
    async getDownloadUrl(data) {
      const that = this;
      let file_name = data.fname;
      let file_size = utils.formatByteToSize(data.size);
      let postResp = await httpx.post("https://www.wenshushu.cn/ap/dl/sign", {
        responseType: "json",
        data: JSON.stringify({
          ufileid: data.fid,
          consumeCode: 0,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomAndroidUA(),
          Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
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
          if (NetDiskFilterScheme.isForwardDownloadLink("wenshushu")) {
            downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri("wenshushu", downloadUrl);
          }
          NetDiskView.$inst.linearChainDialogView.oneFile({
            title: "文叔叔单文件直链",
            fileName: file_name,
            fileSize: file_size,
            downloadUrl,
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
      baidu: NetDiskParse_Baidu,
      lanzou: NetDiskParse_Lanzou,
      lanzouyx: NetDiskParse_Lanzouyx,
      tianyiyun: NetDiskParse_Tianyiyun,
      wenshushu: NetDiskParse_Wenshushu,
      _123pan: NetDiskParse_123pan,
      jianguoyun: NetDiskParse_Jianguoyun,
      nainiu: NetDiskParse_nainiu,
      uc: NetDiskParse_UC,
      aliyun: NetDiskParse_Aliyun,
      chengtong: NetDiskParse_Chengtong,
      magnet: NetDiskParse_magnet,
      ed2k: NetDiskParse_ed2k,
    },
  };
  const NetDiskHandlerUtil = {
    replaceText(matchText, pattern, newText) {
      if (Array.isArray(pattern)) {
        for (const patternItem of pattern) {
          matchText = this.replaceText(matchText, patternItem, newText);
        }
      } else {
        if (typeof pattern === "string") {
          matchText = matchText.replaceAll(pattern, newText);
        } else {
          matchText = matchText.replace(pattern, newText);
        }
      }
      return matchText;
    },
  };
  const NetDiskLinkClickModeUtils = {
    getBlankUrl(handlerConfig) {
      let ruleConfig =
        handlerConfig.debugConfig?.config ??
        NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let blankUrl = ruleConfig.blank;
      if (handlerConfig.shareCode) {
        blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
          shareCode: handlerConfig.shareCode,
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [`正则: blank`, "作用: 用于点击跳转的链接", "备注: 对shareCode进行参数替换", `结果: ${blankUrl}`],
        });
      }
      if (handlerConfig.accessCode && handlerConfig.accessCode !== "") {
        blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
          accessCode: handlerConfig.accessCode,
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [`正则: blank`, "作用: 用于点击跳转的链接", "备注: 对accessCode进行参数替换", `结果: ${blankUrl}`],
        });
      } else {
        blankUrl = NetDiskHandlerUtil.replaceText(blankUrl, NetDisk.$extraRule.noAccessCodeRegExp, "");
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: 内置的noAccessCodeRegExp`,
            "作用: 因accessCode为空，使用该正则去除不需要的字符串",
            `结果: ${blankUrl}`,
          ],
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
            `结果: ${blankUrl}`,
          ],
        });
      }
      return blankUrl;
    },
    getCopyUrlInfo(handlerConfig) {
      let ruleConfig =
        handlerConfig.debugConfig?.config ??
        NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let copyUrl = ruleConfig["copyUrl"];
      if (handlerConfig.shareCode) {
        copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
          shareCode: handlerConfig.shareCode,
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [`正则: copyUrl`, "作用: 用于复制到剪贴板的链接", "备注: 对shareCode进行参数替换", `结果: ${copyUrl}`],
        });
      }
      if (handlerConfig.accessCode && handlerConfig.accessCode !== "") {
        copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
          accessCode: handlerConfig.accessCode,
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [`正则: copyUrl`, "作用: 用于复制到剪贴板的链接", "备注: 对accessCode进行参数替换", `结果: ${copyUrl}`],
        });
      } else {
        copyUrl = NetDiskHandlerUtil.replaceText(copyUrl, NetDisk.$extraRule.noAccessCodeRegExp, "");
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: 内置的noAccessCodeRegExp`,
            "作用: 因accessCode为空，使用该正则去除不需要的字符串",
            `结果: ${copyUrl}`,
          ],
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
            `结果: ${copyUrl}`,
          ],
        });
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的copyUrl: " + copyUrl,
      });
      return copyUrl;
    },
  };
  const NetDiskLinkClickMode = {
    copy(ruleKeyName, ruleIndex, shareCode, accessCode, toastText = "已复制") {
      utils
        .copy(
          NetDiskLinkClickModeUtils.getCopyUrlInfo({
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode,
          })
        )
        .then((status) => {
          if (status) {
            Qmsg.success(toastText);
          } else {
            Qmsg.error("执行复制失败", { consoleLogContent: true });
          }
        })
        .catch(() => {
          Qmsg.error("执行复制失败", { consoleLogContent: true });
        });
    },
    async parseFile(ruleKeyName, ruleIndex, shareCode, accessCode) {
      log.success(`链接解析：`, [...arguments]);
      if (NetDiskParse.rule[ruleKeyName]) {
        let parseInst = new NetDiskParse.rule[ruleKeyName]();
        const netDiskInfo = {
          ruleIndex,
          shareCode,
          accessCode: accessCode ?? "",
        };
        parseInst.ruleIndex = netDiskInfo.ruleIndex;
        parseInst.shareCode = netDiskInfo.shareCode;
        parseInst.accessCode = netDiskInfo.accessCode;
        log.info(["文件解析：", netDiskInfo]);
        await parseInst.init(netDiskInfo);
      } else {
        log.error(`${ruleKeyName} 未配置解析函数`, [ruleKeyName, ruleIndex, shareCode, accessCode]);
        Qmsg.error("该链接未配置解析函数");
      }
    },
    openBlankUrl(url, ruleKeyName, ruleIndex, shareCode, accessCode, isOpenInBackEnd = false) {
      log.success(`新标签页打开${isOpenInBackEnd ? "（后台打开）" : ""}`, [...arguments]);
      if (NetDiskAutoFillAccessCode.$data.enable) {
        NetDiskAutoFillAccessCode.addValue({
          url,
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode,
          time: Date.now(),
        });
      }
      if (NetDiskFilterScheme.isForwardBlankLink(ruleKeyName)) {
        url = NetDiskFilterScheme.parseDataToSchemeUri(ruleKeyName, url);
      }
      $("meta[name='referrer']")?.setAttribute("content", "no-referrer");
      let openUrl = () => {
        if (isOpenInBackEnd) {
          _GM_openInTab(url, {
            active: false,
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
      if (
        utils.isNotNull(accessCode) &&
        NetDiskRuleData.linkClickMode_openBlank.openBlankWithCopyAccessCode(ruleKeyName)
      ) {
        utils.copy(accessCode).then(() => {
          openUrl();
        });
      } else {
        openUrl();
      }
    },
    openBlankWithScheme(ruleKeyName, ruleIndex, shareCode, accessCode) {
      log.success("scheme新标签页打开", [...arguments]);
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
      });
      url = NetDiskFilterScheme.parseDataToSchemeUri(ruleKeyName, url);
      window.open(url, "_blank");
    },
  };
  const NetDiskCheckLinkValidity_baidu = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "baidu",
        ruleIndex,
        shareCode,
        accessCode,
      });
      let response = await httpx.get(url, {
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36`,
          Host: "pan.baidu.com",
          Referer: `https://pan.baidu.com/share/init?surl=${shareCode}&pwd=${accessCode}`,
          "sec-ch-ua": '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
          Origin: "https://pan.baidu.com",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      let responseText = response.data.responseText;
      let finalUrl = response.data.finalUrl;
      if (typeof finalUrl === "string") {
        let finalUrlInstance = new URL(finalUrl);
        if (finalUrlInstance.hostname !== "pan.baidu.com") {
          return {
            ...NetDiskCheckLinkValidityStatus.verify,
            msg: `<a href='${finalUrl}' target='_blank' style="color: red;">触发百度安全验证</a>`,
            data: response,
          };
        }
      }
      if (!response.status) {
        if (utils.isNull(responseText)) {
          return {
            ...NetDiskCheckLinkValidityStatus.networkError,
            data: response,
          };
        }
      }
      if (response.data.finalUrl.includes("404.html")) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      if (responseText.includes("过期时间：")) {
        return {
          ...NetDiskCheckLinkValidityStatus.success,
          data: response,
        };
      } else if (responseText.includes("输入提取")) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data: response,
        };
      } else if (responseText.includes("不存在") || responseText.includes("已失效")) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
        };
      } else {
        return {
          ...NetDiskCheckLinkValidityStatus.unknown,
          data: response,
        };
      }
    },
  };
  const NetDiskCheckLinkValidity_lanzou = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "lanzou",
        ruleIndex,
        shareCode,
        accessCode,
      });
      let urlInst = new URL(url);
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: urlInst.hostname,
          Origin: urlInst.origin,
          Referer: url,
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!response.status) {
        if (response.type === "ontimeout") {
          return {
            ...NetDiskCheckLinkValidityStatus.networkError,
            data: response,
          };
        }
      }
      let responseText = response.data.responseText;
      if (utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
          tipMsg: "响应数据为空",
        };
      } else if (responseText.includes("输入密码")) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data: response,
        };
      } else if (
        responseText.includes("来晚啦") ||
        responseText.includes("不存在") ||
        responseText.includes("div>文件链接失效，请获取新链接</div>")
      ) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
        };
      } else {
        if (response.status) {
          return {
            ...NetDiskCheckLinkValidityStatus.success,
            data: response,
          };
        } else {
          return {
            ...NetDiskCheckLinkValidityStatus.unknown,
            data: response,
            tipMsg: response.msg,
          };
        }
      }
    },
  };
  const NetDiskCheckLinkValidity_lanzouyx = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let LanZouYX = new NetDiskParse.rule.lanzouyx();
      LanZouYX.shareCodeId = LanZouYX.getDecodeShareCodeId(shareCode);
      let timestamp = LanZouYX.getEncodeTimeStamp();
      let uuid = LanZouYX.getEncodeUUID();
      let response = await httpx.post(
        `https://api.ilanzou.com/unproved/recommend/list?${utils.toSearchParamsStr({
          devType: LanZouYX.$data.devType,
          devModel: LanZouYX.$data.devModel,
          uuid,
          extra: LanZouYX.$data.extra,
          timestamp,
          code: accessCode,
          shareId: shareCode,
          type: LanZouYX.$data.type,
          offset: LanZouYX.$data.offset,
          limit: LanZouYX.$data.limit,
        })}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.ilanzou.com",
            Referer: "https://www.ilanzou.com/",
            "Sec-Fetch-Site": "same-site",
            Host: "api.ilanzou.com",
            "User-Agent": utils.getRandomPCUA(),
          },
          responseType: "json",
          ...NetDiskCheckLinkValidityRequestOption,
        }
      );
      if (!response.status) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let data = utils.toJSON(response.data.responseText);
      log.success("获取链接信息：", data);
      if (data["code"] !== 200) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data,
        };
      }
      if (!data["list"].length) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data,
      };
    },
  };
  const NetDiskCheckLinkValidity_tianyiyun = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.post("https://api.cloud.189.cn/open/share/getShareInfoByCodeV2.action", {
        data: `shareCode=${shareCode}`,
        headers: {
          Accept: "application/json;charset=UTF-8",
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": utils.getRandomPCUA(),
          "Sign-Type": 1,
          Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
          Origin: "https://cloud.189.cn",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      let responseText = response.data.responseText;
      if (!response.status && utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      if (
        responseText.includes("ShareInfoNotFound") ||
        responseText.includes("ShareNotFound") ||
        responseText.includes("FileNotFound") ||
        responseText.includes("ShareAuditWaiting") ||
        responseText.includes("ShareExpiredError") ||
        responseText.includes("ShareAuditNotPass")
      ) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
        };
      }
      if (responseText.includes("needAccessCode")) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data: response,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: response,
      };
    },
  };
  const NetDiskCheckLinkValidity_aliyun = {
    async init(netDiskInfo) {
      const { shareCode } = netDiskInfo;
      let response = await httpx.post(
        "https://api.aliyundrive.com/adrive/v3/share_link/get_share_by_anonymous?share_id=" + shareCode,
        {
          data: JSON.stringify({
            share_id: shareCode,
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "User-Agent": utils.getRandomPCUA(),
            Referer: "https://www.aliyundrive.com/",
            Origin: "https://www.aliyundrive.com",
          },
          ...NetDiskCheckLinkValidityRequestOption,
        }
      );
      let data = utils.toJSON(response.data.responseText);
      if (!response.status && utils.isNull(data)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      if (
        data["code"] === "ParamFlowException" ||
        data["code"] === "NotFound.ShareLink" ||
        data["code"] === "ShareLink.Cancelled"
      ) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data,
        };
      } else if (data["file_count"] === 0 || data["file_infos"]?.length === 0) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data,
      };
    },
  };
  const NetDiskCheckLinkValidity_wenshushu = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.post("https://www.wenshushu.cn/ap/task/mgrtask", {
        data: JSON.stringify({
          tid: shareCode,
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
            accessCode,
          }),
        },
        responseType: "json",
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (data.code !== 0) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data,
      };
    },
  };
  const NetDiskCheckLinkValidity_nainiu = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.get(`https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${shareCode}`, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "cowtransfer.com",
          Origin: "https://cowtransfer.com",
          Referer: "https://cowtransfer.com/",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (data.code != "0000") {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data,
        };
      }
      if (data.data.needPassword && data.data.needPassword) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data,
      };
    },
  };
  const NetDiskCheckLinkValidity_weiyun = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "weiyun",
        ruleIndex,
        shareCode,
        accessCode,
      });
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "share.weiyun.com",
          Origin: "https://share.weiyun.com",
          Referer: url,
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let responseText = response.data.responseText;
      if (
        responseText.includes("已删除") ||
        responseText.includes("已被删除") ||
        responseText.includes("已经删除") ||
        responseText.includes("违反相关法规") ||
        responseText.includes("已过期") ||
        responseText.includes("目录无效")
      ) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
        };
      }
      if (
        responseText.includes('"need_pwd":1') ||
        (responseText.includes('"pwd":"') && !responseText.includes('"pwd":""'))
      ) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data: response,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: response,
      };
    },
  };
  const NetDiskCheckLinkValidity_xunlei = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let postResponse = await httpx.post("https://xluser-ssl.xunlei.com/v1/shield/captcha/init", {
        data: JSON.stringify({
          client_id: "Xqp0kJBXWhwaTpB6",
          device_id: "925b7631473a13716b791d7f28289cad",
          action: "get:/drive/v1/share",
          meta: {
            package_name: "pan.xunlei.com",
            client_version: "1.45.0",
            captcha_sign: "1.fe2108ad808a74c9ac0243309242726c",
            timestamp: "1645241033384",
          },
        }),
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "pan.xunlei.com",
          Referer: NetDiskLinkClickModeUtils.getBlankUrl({
            ruleKeyName: "xunlei",
            ruleIndex,
            shareCode,
            accessCode,
          }),
          Origin: "https://pan.xunlei.com",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!postResponse.status && utils.isNull(postResponse.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: postResponse,
        };
      }
      let postResponseData = utils.toJSON(postResponse.data.responseText);
      let token = postResponseData["captcha_token"];
      let getResponse = await httpx.get("https://api-pan.xunlei.com/drive/v1/share?share_id=" + shareCode, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "pan.xunlei.com",
          Referer: NetDiskLinkClickModeUtils.getBlankUrl({
            ruleKeyName: "xunlei",
            ruleIndex,
            shareCode,
            accessCode,
          }),
          Origin: "https://pan.xunlei.com",
          "x-captcha-token": token,
          "x-client-id": "Xqp0kJBXWhwaTpB6",
          "x-device-id": "925b7631473a13716b791d7f28289cad",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!getResponse.status && utils.isNull(getResponse.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: [postResponse, getResponse],
        };
      }
      let responseText = getResponse.data.responseText;
      if (
        responseText.includes("NOT_FOUND") ||
        responseText.includes("SENSITIVE_RESOURCE") ||
        responseText.includes("EXPIRED") ||
        responseText.includes("DELETED")
      ) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: getResponse,
        };
      } else if (responseText.includes("PASS_CODE_EMPTY")) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data: getResponse,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: getResponse,
      };
    },
  };
  const NetDiskCheckLinkValidity_chengtong = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let blankUrl = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "chengtong",
        ruleIndex,
        shareCode,
        accessCode,
      });
      let blankUrlInst = new URL(blankUrl);
      let path = blankUrlInst.pathname.split("/")[1].trim();
      let url = "";
      if (blankUrlInst.pathname === "/" && blankUrlInst.hash.startsWith("#/d/")) {
        path = "d";
      }
      if (path === "f" || path === "file") {
        url = `https://webapi.ctfile.com/getfile.php?path=${path}&f=${shareCode}&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
      } else if (path === "d" || path === "dir") {
        url = `https://webapi.ctfile.com/getdir.php?path=${path}&d=${shareCode}&folder_id=&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
      } else {
        log.warn("未知path", [ruleIndex, shareCode, accessCode]);
        return {
          ...NetDiskCheckLinkValidityStatus.unknown,
          data: null,
        };
      }
      let response = await httpx.get(url, {
        headers: {
          Host: "webapi.ctfile.com",
          Origin: "https://url95.ctfile.com",
          Referer: blankUrl,
          Accept: "application/json, text/javascript, */*; q=0.01",
          "User-Agent": utils.getRandomPCUA(),
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      let responseText = response.data.responseText;
      if (!response.status && utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let data = utils.toJSON(responseText);
      if (data["code"] === 200) {
        return {
          ...NetDiskCheckLinkValidityStatus.success,
          data,
        };
      }
      if (data["code"] === 401) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data,
        };
      }
      if (data["code"] === 404 || data["code"] === 503 || data["code"] === 504) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.unknown,
        data,
      };
    },
  };
  const NetDiskCheckLinkValidity_kuake = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let response = await httpx.post("https://drive.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc", {
        data: JSON.stringify({
          pwd_id: shareCode,
          passcode: "",
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
            accessCode,
          }),
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (data.message.includes("需要提取码")) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data,
        };
      } else if (data.message.includes("ok")) {
        let stoken = data["data"]["stoken"];
        let getSearchParams = {
          pwd_id: shareCode,
          stoken,

          _fetch_share: 1,

          __t: Date.now(),
        };
        let getResponse = await httpx.get(
          `https://drive-h.quark.cn/1/clouddrive/share/sharepage/detail?${utils.toSearchParamsStr(getSearchParams)}`,
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              Origin: "https://pan.quark.cn",
              Referer: "https://pan.quark.cn/",
              "User-Agent": utils.getRandomPCUA(),
            },
            ...NetDiskCheckLinkValidityRequestOption,
          }
        );
        if (!getResponse.status || utils.isNull(getResponse.data.responseText)) {
          return {
            ...NetDiskCheckLinkValidityStatus.networkError,
            data: getResponse,
          };
        }
        let detailJSON = utils.toJSON(getResponse.data.responseText);
        if (detailJSON["data"]["share"]["status"] == 1) {
          if (detailJSON["data"]["share"]["partial_violation"]) {
            return {
              ...NetDiskCheckLinkValidityStatus.partialViolation,
              data: [data, detailJSON],
            };
          } else {
            return {
              ...NetDiskCheckLinkValidityStatus.success,
              data: [data, detailJSON],
            };
          }
        } else {
          return {
            ...NetDiskCheckLinkValidityStatus.failed,
            data: [data, detailJSON],
          };
        }
      } else {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data,
        };
      }
    },
  };
  const NetDiskCheckLinkValidity_jianguoyun = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "jianguoyun",
        ruleIndex,
        shareCode,
        accessCode,
      });
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "www.jianguoyun.com",
          Referer: NetDiskLinkClickModeUtils.getBlankUrl({
            ruleKeyName: "jianguoyun",
            ruleIndex,
            shareCode,
            accessCode,
          }),
          Origin: "https://www.jianguoyun.com",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      let responseText = response.data.responseText;
      if (!response.status && utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      if (responseText.includes("<h1>啊噢！")) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: response,
      };
    },
  };
  const NetDiskCheckLinkValidity_onedrive = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: "onedrive",
        ruleIndex,
        shareCode,
        accessCode,
      });
      let urlObj = new URL(url);
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: urlObj.hostname,
          Referer: url,
          Origin: urlObj.origin,
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!response.status) {
        let status = response.data?.status?.toString();
        if (status === "429") {
          return {
            ...NetDiskCheckLinkValidityStatus.networkError,
            data: response,
          };
        } else if (status === "404") {
          return {
            ...NetDiskCheckLinkValidityStatus.failed,
            data: response,
          };
        }
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let responseText = response.data.responseText;
      if (utils.isNotNull(responseText)) {
        try {
          let respDOM = domUtils.toElement(responseText, true, true);
          let $title = respDOM.querySelector("title");
          if ($title) {
            let title = domUtils.html($title);
            if (title.includes("错误")) {
              return {
                ...NetDiskCheckLinkValidityStatus.failed,
                data: response,
              };
            }
          }
        } catch (error) {}
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: response,
      };
    },
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
            accessCode,
          }),
          Origin: "https://drive.uc.cn",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      });
      let responseText = response.data.responseText;
      if (!response.status && utils.isNull(responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let responseDocument = domUtils.toElement(responseText, true, true);
      if (responseDocument.querySelector(".h5-page-main")) {
        let $h5PageMain = responseDocument.querySelector(".h5-page-main");
        let errorText = $h5PageMain.textContent || $h5PageMain.innerText;
        if (
          errorText.includes("失效") ||
          errorText.includes("不存在") ||
          errorText.includes("违规") ||
          errorText.includes("删除")
        ) {
          return {
            ...NetDiskCheckLinkValidityStatus.failed,
            data: response,
          };
        } else {
          return {
            ...NetDiskCheckLinkValidityStatus.unknown,
            data: response,
          };
        }
      } else if (responseDocument.querySelector(".main-body .input-wrap input")) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data: response,
        };
      } else {
        return {
          ...NetDiskCheckLinkValidityStatus.success,
          data: response,
        };
      }
    },
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
            Origin: "https://115.com",
          },
          ...NetDiskCheckLinkValidityRequestOption,
        }
      );
      if (!response.status) {
        if (utils.isNull(response.data.responseText)) {
          return {
            ...NetDiskCheckLinkValidityStatus.failed,
            data: response,
          };
        }
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let data = utils.toJSON(response.data.responseText);
      if (data.state) {
        return {
          ...NetDiskCheckLinkValidityStatus.success,
          data,
        };
      }
      if (typeof data.error === "string") {
        if (data.error.includes("访问码")) {
          return {
            ...NetDiskCheckLinkValidityStatus.needAccessCode,
            data,
          };
        } else if (data.error.includes("链接") || data.error.includes("分享已取消")) {
          return {
            ...NetDiskCheckLinkValidityStatus.failed,
            data,
          };
        }
      }
      return {
        ...NetDiskCheckLinkValidityStatus.unknown,
        data,
      };
    },
  };
  const NetDiskCheckLinkValidity_360yunpan = {
    async init(netDiskInfo) {
      const { ruleIndex, shareCode, accessCode } = netDiskInfo;
      let url = "https://www.yunpan.com/lk/surl_" + shareCode;
      let response = await httpx.get(url, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
        responseType: "json",
        ...NetDiskCheckLinkValidityRequestOption,
      });
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      let responseDoc = domUtils.toElement(response.data.responseText, true, true);
      let $errorMsg = responseDoc.querySelector(".page-error .error-msg");
      if ($errorMsg) {
        let errorMsg = domUtils.text($errorMsg);
        if (errorMsg.includes("分享链接已失效")) {
          return {
            ...NetDiskCheckLinkValidityStatus.failed,
            data: response,
          };
        } else {
          return {
            ...NetDiskCheckLinkValidityStatus.unknown,
            data: response,
            tipMsg: errorMsg,
          };
        }
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: response,
      };
    },
  };
  const AllCheckLinkValidityFunction = {
    baidu: NetDiskCheckLinkValidity_baidu,
    lanzou: NetDiskCheckLinkValidity_lanzou,
    lanzouyx: NetDiskCheckLinkValidity_lanzouyx,
    tianyiyun: NetDiskCheckLinkValidity_tianyiyun,

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
    "360yunpan": NetDiskCheckLinkValidity_360yunpan,
  };
  const NetDiskCheckLinkValidityRequestOption = {
    allowInterceptConfig: false,
    onerror() {},
    ontimeout() {},
  };
  const NetDiskCheckLinkValidity = {
    $data: {
      subscribeMap: new Map(),
      subscribeMapConsuming: new Map(),
      checkValidStatusMapCache: new Map(),
    },
    get status() {
      return NetDiskCheckLinkValidityStatus;
    },
    ruleCheckValidFunction: AllCheckLinkValidityFunction,
    async check(checkInfoConfigList) {
      if (!Array.isArray(checkInfoConfigList)) {
        checkInfoConfigList = [checkInfoConfigList];
      }
      for (const checkInfoConfigItem of checkInfoConfigList) {
        const { ruleKeyName } = checkInfoConfigItem;
        if (!this.$data.subscribeMap.has(ruleKeyName)) {
          this.$data.subscribeMap.set(ruleKeyName, []);
        }
        let subscribeMapValue = this.$data.subscribeMap.get(ruleKeyName);
        subscribeMapValue.push(checkInfoConfigItem);
      }
      let execCheck = async () => {
        let promiseList = [];
        for (const [ruleKeyName, checkInfoList] of this.$data.subscribeMap.entries()) {
          promiseList.push(
            new Promise(async (resolve) => {
              let isConsuming = this.$data.subscribeMapConsuming.get(ruleKeyName);
              if (isConsuming) {
                resolve(null);
                return;
              }
              let execCheckConfig = async () => {
                for (let index = 0; index < checkInfoList.length; index++) {
                  try {
                    const checkInfo = checkInfoList[index];
                    if (checkInfo.$urlBox.parentElement) {
                      const { needAwait } = await this.checkLinkValidity(checkInfo, false);
                      needAwait && (await utils.sleep(250));
                    }
                    checkInfoList.splice(index, 1);
                    index--;
                  } catch (error) {
                    log.error(error);
                  }
                }
                const delayCheckCount = this.$data.subscribeMap.get(ruleKeyName)?.length;
                if (delayCheckCount && checkInfoList.length) {
                  await execCheckConfig();
                }
              };
              await execCheckConfig();
              this.$data.subscribeMapConsuming.delete(ruleKeyName);
              resolve(null);
            })
          );
        }
        await Promise.all(promiseList);
      };
      await execCheck();
    },
    clearAllDelayCheckLinkValidity() {
      this.$data.subscribeMap.clear();
      this.$data.subscribeMapConsuming.clear();
    },
    async checkLinkValidity(checkInfo, isForceCheck) {
      const result = {
        needAwait: false,
      };
      const { $checkValidStatus } = NetDiskLinkView.parseBoxItemInfo(checkInfo.$urlBox);
      if (this.isViewCheckValid($checkValidStatus) && !isForceCheck) {
        return result;
      }
      this.setCheckStatusElementToolTip(checkInfo);
      const ruleKeyName = checkInfo.ruleKeyName;
      if (!NetDiskRuleData.function.checkLinkValidity(ruleKeyName)) {
        log.error("该规则未开启checkLinkValidity功能", checkInfo);
        return result;
      }
      const netDiskCheck = this.ruleCheckValidFunction[checkInfo.ruleKeyName];
      if (!netDiskCheck || (netDiskCheck && typeof netDiskCheck.init !== "function")) {
        log.error("该规则未配置有效性校验函数", checkInfo);
        return result;
      }
      const checkConfig = {
        ruleIndex: checkInfo.ruleIndex,
        shareCode: checkInfo.shareCode,
        accessCode: checkInfo.accessCode,
      };
      const checkConfigStr = JSON.stringify(checkConfig);
      let checkStatusResult;
      if (!isForceCheck && NetDiskCheckLinkValidity.$data.checkValidStatusMapCache.has(checkConfigStr)) {
        checkStatusResult = NetDiskCheckLinkValidity.$data.checkValidStatusMapCache.get(checkConfigStr);
      } else {
        NetDiskCheckLinkValidityStatus.loading.setView($checkValidStatus, checkInfo);
        checkStatusResult = await netDiskCheck.init(checkConfig);
        result.needAwait = true;
        if (!checkStatusResult) {
          log.error("该规则的有效性验证函数的返回值不是有效值", [checkStatusResult, checkInfo]);
          return result;
        }
        if (
          checkStatusResult.code === NetDiskCheckLinkValidityStatus.loading.code ||
          checkStatusResult.code === NetDiskCheckLinkValidityStatus.networkError.code ||
          checkStatusResult.code === NetDiskCheckLinkValidityStatus.verify.code ||
          checkStatusResult.code === NetDiskCheckLinkValidityStatus.unknown.code
        ) {
          NetDiskCheckLinkValidity.$data.checkValidStatusMapCache.delete(checkConfigStr);
        } else {
          NetDiskCheckLinkValidity.$data.checkValidStatusMapCache.set(checkConfigStr, checkStatusResult);
        }
      }
      checkStatusResult.setView($checkValidStatus, checkInfo, checkStatusResult.tipMsg);
      if (checkStatusResult.data) {
        Reflect.set($checkValidStatus, "data-httpx-response", checkStatusResult.data);
      }
      return result;
    },
    setViewAgainCheckClickEvent($el, checkInfo) {
      domUtils.off($el, "click", void 0, void 0, void 0, (value) => {
        return Boolean(value.option.once) && value.originCallBack.toString().includes("this.checkLinkValidity");
      });
      domUtils.on(
        $el,
        "click",
        () => {
          const { $urlBox, $link } = NetDiskLinkView.parseBoxItemInfo($el);
          const ruleInfo = NetDiskLinkView.parseBoxAttrRuleInfo($link);
          let newCheckInfo = {
            $urlBox,
            ruleKeyName: ruleInfo.ruleKeyName,
            ruleIndex: ruleInfo.ruleIndex,
            shareCode: ruleInfo.shareCode,
            accessCode: ruleInfo.accessCode,
          };
          this.checkLinkValidity(newCheckInfo, true);
        },
        { once: true }
      );
    },
    isViewCheckValid($ele) {
      if (!$ele.hasAttribute("data-check-valid")) {
        return false;
      }
      if ($ele.getAttribute("data-check-valid") === "error") {
        return false;
      }
      return true;
    },
    setViewCheckValid($ele, value, msg) {
      $ele.setAttribute("data-check-valid", value);
      $ele.setAttribute("data-msg", msg);
      Reflect.set($ele, "data-msg", msg);
    },
    removeViewCheckValid($ele) {
      $ele.removeAttribute("data-check-valid");
      $ele.removeAttribute("data-msg");
      Reflect.deleteProperty($ele, "data-msg");
    },
    isStatusSuccess(statusInfo) {
      if (Math.floor(statusInfo.code / 100) === 2) {
        return true;
      }
      return false;
    },
    getStatusName(statusInfo) {
      for (const statusName of Object.keys(NetDiskCheckLinkValidityStatus)) {
        let statusNewInfo = NetDiskCheckLinkValidityStatus[statusName];
        if (statusInfo.code === statusNewInfo.code) {
          return statusName;
        }
      }
    },
    setCheckStatusElementToolTip(checkInfo) {
      if (!NetDiskRuleData.function.checkLinlValidityHoverTip(checkInfo.ruleKeyName)) {
        return;
      }
      function getNetDiskStatus() {
        const { $checkValidStatus } = NetDiskLinkView.parseBoxItemInfo(checkInfo.$urlBox);
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
          if (msg == null || (typeof msg === "string" && msg.trim() === "")) {
            return false;
          }
        },
        zIndex() {
          let maxZIndex = utils.getMaxZIndex(10);
          let popsMaxZIndex = __pops.config.InstanceUtils.getPopsMaxZIndex(10).zIndex;
          return utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
        },
      });
    },
  };
  const NetDiskRequire = {
    requiredFileMap: new Map(),
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
    },
  };
  const NetDiskUserRuleReplaceParam_matchRange_text = (key) => {
    return {
      "matchRange-text-before": NetDiskRuleData.matchRange_text.before(key).toString(),
      "matchRange-text-after": NetDiskRuleData.matchRange_text.after(key).toString(),
    };
  };
  const NetDiskUserRuleReplaceParam_matchRange_html = (key) => {
    return {
      "matchRange-html-before": NetDiskRuleData.matchRange_html.before(key).toString(),
      "matchRange-html-after": NetDiskRuleData.matchRange_html.after(key).toString(),
    };
  };
  const NetDiskUserRuleStorageApi = new StorageUtils("userRule");
  const NetDiskUserRuleBindContextStorageApi = new StorageUtils("userRuleBindContext");
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
      },
    },
    init() {
      let oldUserRule = _GM_getValue("userRule");
      if (Array.isArray(oldUserRule)) {
        _GM_deleteValue("userRule");
        this.setRule(oldUserRule);
      }
      let userRule = this.parseRule(this.getAllRule());
      let subscribeRule = this.parseRule(NetDiskUserRuleSubscribeRule.getAllSubscribeRule());
      userRule = userRule.concat(subscribeRule);
      userRule.forEach((item) => {
        this.$data.userRule.set(item.setting.key, item);
      });
    },
    parseRuleStrToRule(ruleText) {
      function checkRegExp(ruleRegExp) {
        if (typeof ruleRegExp["link_innerText"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: link_innerText，类型: string",
          };
        }
        if (typeof ruleRegExp["link_innerHTML"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: link_innerHTML，类型: string",
          };
        }
        if (typeof ruleRegExp["shareCode"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: shareCode，类型: string",
          };
        }
        if (
          typeof ruleRegExp["shareCodeNeedRemoveStr"] !== "string" &&
          !Array.isArray(ruleRegExp["shareCodeNeedRemoveStr"])
        ) {
          return {
            success: false,
            msg: "regexp缺失的键名: shareCodeNeedRemoveStr，类型: string|string[]",
          };
        }
        if (typeof ruleRegExp["uiLinkShow"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: uiLinkShow，类型: string",
          };
        }
        if (typeof ruleRegExp["blank"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: blank，类型: string",
          };
        }
        if (typeof ruleRegExp["copyUrl"] !== "string") {
          return {
            success: false,
            msg: "regexp缺失的键名: copyUrl，类型: string",
          };
        }
        if (typeof ruleRegExp["accessCode"] === "string" && typeof ruleRegExp["checkAccessCode"] !== "string") {
          return {
            success: false,
            msg: "regexp设置了accessCode但是没有设置checkAccessCode",
          };
        }
        if (typeof ruleRegExp["accessCode"] !== "string" && typeof ruleRegExp["checkAccessCode"] === "string") {
          return {
            success: false,
            msg: "regexp设置了checkAccessCode但是没有设置accessCode",
          };
        }
        return {
          success: true,
          msg: "校验rule成功",
        };
      }
      function checkSetting(ruleSetting) {
        if (typeof ruleSetting["name"] !== "string") {
          return {
            success: false,
            msg: "setting缺失的键名: name，类型: string",
          };
        }
        if (typeof ruleSetting["enable"] !== "boolean") {
          return {
            success: false,
            msg: "setting缺失的键名: enable，类型: boolean",
          };
        }
        return {
          success: true,
          msg: "校验setting成功",
        };
      }
      try {
        let ruleJSON = typeof ruleText === "string" ? utils.toJSON(ruleText) : ruleText;
        log.info(`解析出的规则对象：`, ruleJSON);
        if (typeof ruleJSON !== "object") {
          return {
            success: false,
            msg: "该规则不是object类型",
          };
        }
        if (Object.keys(ruleJSON).length === 0) {
          return {
            success: false,
            msg: "该规则为空",
          };
        }
        if (typeof ruleJSON["key"] !== "string") {
          return {
            success: false,
            msg: "缺失的键名: key，类型: string",
          };
        }
        if (typeof ruleJSON["regexp"] !== "object") {
          return {
            success: false,
            msg: "缺失的键名: regexp，类型: object|Arrany",
          };
        }
        if (typeof ruleJSON["setting"] !== "object") {
          return {
            success: false,
            msg: "缺失的键名: setting，类型: object",
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
          data: ruleJSON,
        };
      } catch (error) {
        log.error(error);
        return {
          success: false,
          msg: error.message,
        };
      }
    },
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
        NetDiskCheckLinkValidityStatus,
        log,
        Qmsg,
        pops: __pops,
        setValue: NetDiskUserRuleBindContextStorageApi.set.bind(NetDiskUserRuleBindContextStorageApi),
        getValue: NetDiskUserRuleBindContextStorageApi.get.bind(NetDiskUserRuleBindContextStorageApi),
        deleteValue: NetDiskUserRuleBindContextStorageApi.delete.bind(NetDiskUserRuleBindContextStorageApi),
      };
    },
    parseRule(localRule) {
      function parseUserRuleToScriptRule(ruleKey, userRuleConfig, ruleRegExp) {
        let {
          shareCode,
          shareCodeNeedRemoveStr,
          shareCodeNotMatch,
          checkAccessCode,
          accessCode,
          acceesCodeNotMatch,
          accessCodeNeedRemoveStr,
          paramMatch,
          ...otherRuleParams
        } = ruleRegExp;
        let netDiskRegularOption = {
          ...otherRuleParams,
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
            if (Array.isArray(netDiskRegularOption.shareCodeNeedRemoveStr)) {
              netDiskRegularOption.shareCodeNeedRemoveStr.length = 0;
            } else {
              netDiskRegularOption.shareCodeNeedRemoveStr = [];
            }
            for (const shareCodeNeedRemoveStrItem of shareCodeNeedRemoveStr) {
              if (typeof shareCodeNeedRemoveStrItem === "string") {
                const shareCodeNeedRemoveStrItemRegExp = new RegExp(shareCodeNeedRemoveStrItem, "ig");
                netDiskRegularOption.shareCodeNeedRemoveStr.push(shareCodeNeedRemoveStrItemRegExp);
              }
            }
          }
        }
        if (shareCodeNotMatch) {
          if (typeof shareCodeNotMatch === "string") {
            shareCodeNotMatch = [shareCodeNotMatch];
          }
          if (Array.isArray(shareCodeNotMatch)) {
            if (Array.isArray(netDiskRegularOption.shareCodeNotMatch)) {
              netDiskRegularOption.shareCodeNotMatch.length = 0;
            } else {
              netDiskRegularOption.shareCodeNotMatch = [];
            }
            for (const shareCodeNotMatchItem of shareCodeNotMatch) {
              if (typeof shareCodeNotMatchItem === "string") {
                const shareCodeNotMatchItemRegExp = new RegExp(shareCodeNotMatchItem, "ig");
                netDiskRegularOption.shareCodeNotMatch.push(shareCodeNotMatchItemRegExp);
              }
            }
          }
        }
        if (typeof checkAccessCode === "string") {
          netDiskRegularOption.checkAccessCode = new RegExp(checkAccessCode, "ig");
        }
        if (typeof accessCode === "string") {
          netDiskRegularOption.accessCode = new RegExp(accessCode, "ig");
        }
        if (acceesCodeNotMatch) {
          if (typeof acceesCodeNotMatch === "string") {
            acceesCodeNotMatch = [acceesCodeNotMatch];
          }
          if (Array.isArray(acceesCodeNotMatch)) {
            if (Array.isArray(netDiskRegularOption.acceesCodeNotMatch)) {
              netDiskRegularOption.acceesCodeNotMatch.length = 0;
            } else {
              netDiskRegularOption.acceesCodeNotMatch = [];
            }
            for (const acceesCodeNotMatchItem of acceesCodeNotMatch) {
              if (typeof acceesCodeNotMatchItem === "string") {
                const acceesCodeNotMatchItemRegExp = new RegExp(acceesCodeNotMatchItem, "ig");
                netDiskRegularOption.acceesCodeNotMatch.push(acceesCodeNotMatchItemRegExp);
              }
            }
          }
        }
        if (accessCodeNeedRemoveStr) {
          if (typeof accessCodeNeedRemoveStr === "string") {
            accessCodeNeedRemoveStr = [accessCodeNeedRemoveStr];
          }
          if (Array.isArray(accessCodeNeedRemoveStr)) {
            if (Array.isArray(netDiskRegularOption.accessCodeNeedRemoveStr)) {
              netDiskRegularOption.accessCodeNeedRemoveStr.length = 0;
            } else {
              netDiskRegularOption.accessCodeNeedRemoveStr = [];
            }
            for (const accessCodeNeedRemoveStrItem of accessCodeNeedRemoveStr) {
              if (typeof accessCodeNeedRemoveStrItem === "string") {
                const accessCodeNeedRemoveStrItemRegExp = new RegExp(accessCodeNeedRemoveStrItem, "ig");
                netDiskRegularOption.accessCodeNeedRemoveStr.push(accessCodeNeedRemoveStrItemRegExp);
              }
            }
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
              ownFormList: [],
            },
          },
          isUserRule: true,
          afterRenderUrlBox: void 0,
        };
        const userRuleList = userRuleItemConfig.regexp;
        const ruleKey = userRuleItemConfig.key;
        if (Array.isArray(userRuleList)) {
          userRuleList.forEach((userRuleItem) => {
            netDiskRuleConfig.rule.push(parseUserRuleToScriptRule(ruleKey, userRuleItemConfig, userRuleItem));
          });
        } else {
          netDiskRuleConfig.rule.push(parseUserRuleToScriptRule(ruleKey, userRuleItemConfig, userRuleList));
        }
        if (userRuleItemConfig.setting) {
          this.initDefaultValue(
            NetDiskRuleDataKEY.function.enable(ruleKey),
            Boolean(userRuleItemConfig.setting.enable)
          );
          netDiskRuleConfig.setting.configurationInterface.function.enable = Boolean(userRuleItemConfig.setting.enable);
          if (typeof userRuleItemConfig.setting["isBlank"] === "boolean") {
            this.initDefaultValue(NetDiskRuleDataKEY.function.linkClickMode(ruleKey), "openBlank");
            netDiskRuleConfig.setting.configurationInterface.function.linkClickMode = {
              openBlank: {
                default: true,
                enable: true,
              },
            };
          }
          if (typeof userRuleItemConfig.setting.linkClickMode === "object") {
            let data = utils.assign(
              NetDiskRuleUtils.getDefaultLinkClickMode(),
              userRuleItemConfig.setting.linkClickMode || {}
            );
            let default_value = null;
            let selectData = [];
            const dataKeys = Object.keys(data);
            for (const keyName of dataKeys) {
              let itemData = data[keyName];
              if (!itemData.enable) {
                continue;
              }
              if (itemData.default) {
                default_value = keyName;
              }
              selectData.push({
                value: keyName,
                text: itemData.text,
              });
            }
            if (default_value == null) {
              default_value = selectData[0].value;
            }
            this.initDefaultValue(NetDiskRuleDataKEY.function.linkClickMode(ruleKey), default_value);
          }
          if (typeof userRuleItemConfig.setting["openBlankWithCopyAccessCode"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(ruleKey),
              Boolean(userRuleItemConfig.setting["openBlankWithCopyAccessCode"])
            );
            netDiskRuleConfig.setting.configurationInterface.linkClickMode_openBlank.openBlankWithCopyAccessCode =
              Boolean(userRuleItemConfig.setting["openBlankWithCopyAccessCode"]);
          }
          if (typeof userRuleItemConfig.setting["openBlankAutoFilleAccessCode"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankAutoFilleAccessCode(ruleKey),
              Boolean(userRuleItemConfig.setting["openBlankAutoFilleAccessCode"])
            );
            netDiskRuleConfig.setting.configurationInterface.linkClickMode_openBlank.openBlankAutoFilleAccessCode =
              Boolean(userRuleItemConfig.setting["openBlankAutoFilleAccessCode"]);
          }
          if (typeof userRuleItemConfig.setting["checkLinkValidity"] === "boolean") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.function.checkLinkValidity(ruleKey),
              Boolean(userRuleItemConfig.setting["checkLinkValidity"])
            );
            netDiskRuleConfig.setting.configurationInterface.function.checkLinkValidity = Boolean(
              userRuleItemConfig.setting["checkLinkValidity"]
            );
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
            netDiskRuleConfig.setting.configurationInterface.schemeUri.enable = Boolean(
              userRuleItemConfig.setting["isForward"]
            );
          }
          if (typeof userRuleItemConfig.setting["schemeUri"] === "string") {
            this.initDefaultValue(NetDiskRuleDataKEY.schemeUri.uri(ruleKey), userRuleItemConfig.setting["schemeUri"]);
            netDiskRuleConfig.setting.configurationInterface.schemeUri.uri = userRuleItemConfig.setting["schemeUri"];
          }
          if (typeof userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"] === "number") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.matchRange_text.before(ruleKey),
              userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"]
            );
            netDiskRuleConfig.setting.configurationInterface.matchRange_text.before =
              userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"];
          }
          if (typeof userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"] === "number") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.matchRange_text.after(ruleKey),
              userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"]
            );
            netDiskRuleConfig.setting.configurationInterface.matchRange_text.after =
              userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"];
          }
          if (typeof userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"] === "number") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.matchRange_html.before(ruleKey),
              userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"]
            );
            netDiskRuleConfig.setting.configurationInterface.matchRange_html.before =
              userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"];
          }
          if (typeof userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"] === "number") {
            this.initDefaultValue(
              NetDiskRuleDataKEY.matchRange_html.after(ruleKey),
              userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"]
            );
            netDiskRuleConfig.setting.configurationInterface.matchRange_html.after =
              userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"];
          }
        }
        if (typeof userRuleItemConfig.icon === "string") {
          let ruleIcon = userRuleItemConfig.icon;
          NetDiskView.$inst.icon.addIcon(ruleKey, ruleIcon);
        }
        const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
        if (typeof userRuleItemConfig.checkLinkValidityFunction === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.set(NetDiskCheckLinkValidity.ruleCheckValidFunction, ruleKey, {
              init: new AsyncFunction("netDiskInfo", userRuleItemConfig.checkLinkValidityFunction).bind(context),
            });
          } catch (error) {
            log.error(error);
          }
        }
        if (typeof userRuleItemConfig.AuthorizationFunction === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.deleteProperty(context, "NetDiskCheckLinkValidity");
            NetDiskAuthorization.netDisk[ruleKey] = new AsyncFunction(userRuleItemConfig.AuthorizationFunction).bind(
              context
            );
          } catch (error) {
            log.error(error);
          }
        }
        if (typeof userRuleItemConfig.AutoFillAccessCodeFunction === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.deleteProperty(context, "NetDiskCheckLinkValidity");
            NetDiskAutoFillAccessCode.netDisk[ruleKey] = new AsyncFunction(
              "netDiskInfo",
              userRuleItemConfig.AutoFillAccessCodeFunction
            ).bind(context);
          } catch (error) {
            log.error(error);
          }
        }
        if (typeof userRuleItemConfig.parseFunction === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.deleteProperty(context, "NetDiskCheckLinkValidity");
            Reflect.set(NetDiskParse.rule, ruleKey, new AsyncFunction(userRuleItemConfig.parseFunction).bind(context));
          } catch (error) {
            log.error(error);
          }
        }
        if (typeof userRuleItemConfig.afterRenderUrlBox === "string") {
          try {
            let context = this.getBindContext(userRuleItemConfig);
            Reflect.deleteProperty(context, "NetDiskCheckLinkValidity");
            netDiskRuleConfig.afterRenderUrlBox = new AsyncFunction(
              "option",
              userRuleItemConfig.afterRenderUrlBox
            ).bind(context);
          } catch (error) {
            log.error(error);
          }
        }
        let findValue = netDiskRuleConfigList.find((item) => item.setting.key === netDiskRuleConfig.setting.key);
        if (findValue) {
          findValue.rule = findValue.rule.concat(netDiskRuleConfig.rule);
        } else {
          netDiskRuleConfigList.push(netDiskRuleConfig);
        }
      }
      return netDiskRuleConfigList;
    },
    getNetDiskRuleConfig() {
      return this.$data.userRule.values();
    },
    initDefaultValue(key, value) {
      let localValue = _GM_getValue(key);
      if (localValue == null) {
        _GM_setValue(key, value);
      }
    },
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
            copyUrl: "",
          },
        ],
        setting: {
          name: "设置界面的名字",
          enable: true,
          linkClickMode: "openBlank",
          openBlankWithCopyAccessCode: true,
        },
      };
      return templateRule;
    },
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
            return `
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
                )}${
                  typeof subscribeOption.data.updateFailedTime === "number"
                    ? `，<span style="color: red;">更新失败于：${utils.formatTime(
                        subscribeOption.data.updateFailedTime,
                        "yyyy年MM月dd日 HH:mm:ss"
                      )}</span>`
                    : ``
                }</div>
								${subscribeOption.subscribeData.homePage ? `<a href="${subscribeOption.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${subscribeOption.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`;
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
              enable: true,
            },
            filter: {
              enable: true,
              title: "过滤订阅",
              option: [
                {
                  name: "过滤【已启用】的订阅",
                  filterCallBack(data) {
                    return data.data.enable;
                  },
                },
                {
                  name: "过滤【未启用】的订阅",
                  filterCallBack(data) {
                    return !data.data.enable;
                  },
                },
              ],
            },
            clearAll: {
              enable: true,
              callback: () => {
                NetDiskUserRuleSubscribeRule.deleteAllSubscribe();
              },
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.data.enable;
              },
              async callback(data, enable) {
                data.data.enable = enable;
                NetDiskUserRuleSubscribeRule.updateSubscribe(data);
              },
            },
            ruleEdit: {
              enable: true,
              callback: (option) => {
                let subscribeUUID = option.ruleData.uuid;
                option.enterDeepMenu({
                  headerTitle:
                    option.ruleData.data.title || option.ruleData.subscribeData.title || option.ruleData.data.url,
                  data() {
                    let currentData = NetDiskUserRuleSubscribeRule.getSubscribe(subscribeUUID);
                    return currentData?.subscribeData?.ruleData ?? option.ruleData.subscribeData.ruleData;
                  },
                  getData(data) {
                    let currentData = NetDiskUserRuleSubscribeRule.getSubscribeRule(subscribeUUID, data.key);
                    return currentData ?? data;
                  },
                  getDataItemName(data) {
                    return data.setting.name;
                  },
                  addData(data) {
                    return true;
                  },
                  updateData(data) {
                    return NetDiskUserRuleSubscribeRule.updateSubscribeRule(subscribeUUID, data);
                  },
                  deleteData(data) {
                    return NetDiskUserRuleSubscribeRule.deleteSubscribeRule(subscribeUUID, data);
                  },
                  btnControls: {
                    filter: {
                      enable: true,
                      title: "规则过滤",
                      option: [
                        {
                          name: "仅显示【已启用】的规则",
                          filterCallBack(data) {
                            return data.setting.enable;
                          },
                        },
                        {
                          name: "仅显示【未启用】的规则",
                          filterCallBack(data) {
                            return !data.setting.enable;
                          },
                        },
                      ],
                    },
                    clearAll: {
                      enable: true,
                      callback: () => {
                        NetDiskUserRuleSubscribeRule.clearSubscribe(subscribeUUID);
                      },
                    },
                    ruleEdit: {
                      enable: true,
                      callback(option2) {
                        NetDiskUserRuleUI.showSubscribe(subscribeUUID, option2.ruleData.key, async (subscribeRule) => {
                          let $ruleItem = await option2.context.updateRuleItemElement(
                            option2.option,
                            option2.subscribeOption,
                            subscribeRule,
                            option2.$ruleItem,
                            option2.$section
                          );
                          option2.$ruleItem = $ruleItem;
                        });
                        return false;
                      },
                    },
                    ruleDelete: {
                      enable: true,
                      deleteCallBack(data) {
                        return NetDiskUserRuleSubscribeRule.deleteSubscribeRule(subscribeUUID, data);
                      },
                    },
                  },
                });
                return false;
              },
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return NetDiskUserRuleSubscribeRule.deleteSubscribe(data);
              },
            },
            import: {
              enable: true,
              callback(updateView) {
                NetDiskUserRuleSubscribeRule.importSubscribe(() => {
                  updateView();
                });
              },
            },
            export: {
              enable: true,
              callback() {
                NetDiskUserRuleSubscribeRule.exportSubscribe(_SCRIPT_NAME_ + "-网站规则-订阅.json");
              },
            },
          },
          getSubscribeInfo: NetDiskUserRuleSubscribeRule.getSubscribeInfo.bind(NetDiskUserRuleSubscribeRule),
        },
        ruleOption: {
          btnControls: {
            add: {
              enable: true,
              callback(option) {
                NetDiskUserRuleUI.show(false, void 0, (rule) => {
                  this.updateRuleContaienrElement(rulePanelViewOption.ruleOption, void 0, option.$section);
                });
                return false;
              },
            },
            filter: {
              enable: true,
              title: "规则过滤",
              option: [
                {
                  name: "仅显示【已启用】的规则",
                  filterCallBack(data) {
                    return data.setting.enable;
                  },
                },
                {
                  name: "仅显示【未启用】的规则",
                  filterCallBack(data) {
                    return !data.setting.enable;
                  },
                },
              ],
            },
            clearAll: {
              enable: true,
              callback: () => {
                that.clearRule();
              },
            },
            import: {
              enable: true,
              callback: (updateView) => {
                that.importRule(() => {
                  updateView();
                });
              },
            },
            export: {
              enable: true,
              callback: () => {
                that.exportRule(_SCRIPT_NAME_ + "-链接识别规则.json", _SCRIPT_NAME_ + "-链接识别规则-订阅模式.json");
              },
            },
            ruleEdit: {
              enable: true,
              callback(option) {
                NetDiskUserRuleUI.show(true, option.ruleData.key, async (rule) => {
                  let $ruleItem = await option.context.updateRuleItemElement(
                    option.option,
                    option.subscribeOption,
                    rule,
                    option.$ruleItem,
                    option.$section
                  );
                  option.$ruleItem = $ruleItem;
                });
                return false;
              },
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return that.deleteRule(data.key);
              },
            },
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
          },
        },
      };
      return rulePanelViewOption;
    },
    addRule(userRule) {
      let localRule = this.getAllRule();
      localRule.push(userRule);
      this.setRule(localRule);
    },
    setRule(userRule) {
      userRule = Array.isArray(userRule) ? userRule : [userRule];
      NetDiskUserRuleStorageApi.set(this.$data.STORAGE_KEY, userRule);
    },
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
    clearRule() {
      NetDiskUserRuleStorageApi.delete(this.$data.STORAGE_KEY);
    },
    getAllRule() {
      let result = NetDiskUserRuleStorageApi.get(this.$data.STORAGE_KEY, []);
      return result;
    },
    getRule(key) {
      let localRule = this.getAllRule();
      return localRule.find((item) => item.key === key);
    },
    getFormatRule(rule) {
      return JSON.stringify(rule || this.getAllRule(), void 0, 4);
    },
    exportRule(fileName = "rule.json", subscribeFileName = "rule-subscribe.json") {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导出方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
				}`,
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']");
      let $exportToSubscribe = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-subscribe']");
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
        domUtils.preventEvent(event);
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
        domUtils.preventEvent(event);
        const that = this;
        $alert.close();
        try {
          let allRule = this.getAllRule();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          let panelHandlerComponents = __pops.config.PanelHandlerComponents();
          let generateStorageApi = function (data) {
            return {
              get(key, defaultValue) {
                return data[key] ?? defaultValue;
              },
              set(key, value) {
                data[key] = value;
                NetDiskUserRuleStorageApi.set(that.$data.EXPORT_CONFIG_KEY, data);
              },
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
              position: "center",
            },
            content: {
              text: `
							
						`,
              html: true,
            },
            btn: {
              ok: {
                enable: true,
                text: "导出",
                callback(details, event2) {
                  exportCallBack();
                },
              },
              close: {
                enable: true,
                callback(details, event2) {
                  details.close();
                },
              },
            },
            mask: {
              enable: true,
            },
            drag: true,
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
						${__pops.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`,
          });
          let $content = $exportSubscribeDialog.$shadowRoot.querySelector(".pops-alert-content");
          let configData = NetDiskUserRuleStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
          let title_template = UIInput("订阅标题", "title", "", "", void 0, "");
          Reflect.set(title_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $title = panelHandlerComponents.createSectionContainerItem_input(title_template);
          let version_template = UIInput("版本号", "version", "", "", void 0, "", false);
          Reflect.set(version_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $version = panelHandlerComponents.createSectionContainerItem_input(version_template);
          let homePage_template = UIInput("主页地址", "homePage", "", "", void 0, "选填");
          Reflect.set(homePage_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $homePage = panelHandlerComponents.createSectionContainerItem_input(homePage_template);
          domUtils.append($content, $title);
          domUtils.append($content, $version);
          domUtils.append($content, $homePage);
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
    },
    importRule(importEndCallBack) {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
            `,
      });
      let $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
      let $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
      let $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
      let updateRuleToStorage = (data) => {
        let allData = this.getAllRule();
        let addNewData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.key === dataItem.key);
          if (findIndex !== -1);
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
                consoleLogContent: true,
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
                timeout: 4e3,
              });
            } else {
              Qmsg.warning(`检测到有 ${notCheckedRuleCount}条未通过规则检查的规则，已忽略`, { timeout: 4e3 });
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
        domUtils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json",
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
        domUtils.preventEvent(event);
        $alert.close();
        let $prompt = NetDiskPops.prompt({
          title: {
            text: "网络导入",
            position: "center",
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true,
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              },
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
                  allowInterceptConfig: false,
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
              },
            },
            cancel: {
              enable: false,
            },
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto",
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
          if (keyName === "Enter" && otherCodeList.length === 0) {
            let value = domUtils.val($promptInput);
            if (value !== "") {
              domUtils.trigger($promptOk, "click");
            }
          }
        });
        domUtils.trigger($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        domUtils.preventEvent(event);
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
    },
  };
  const NetDiskRule_baidu = {
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
        copyUrl: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
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
        copyUrl: "https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
      },
    ],
    setting: {
      name: "百度网盘",
      key: "baidu",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_lanzou = () => {
    return {
      rule: [
        {
          link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{3,6}|)`,
          link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{3,6}|)`,
          shareCode:
            /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)([0-9a-zA-Z_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{3,20})/gi,
          shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)/gi,
          shareCodeExcludeRegular: ["lanzouyx"],
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: `${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#} 提取码: {#accessCode#}`,
          blank: `https://${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#}`,
          copyUrl: `https://${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{3,6}|)`,
          link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{3,6}|)`,
          shareCode:
            /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\/([0-9a-zA-Z_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{3,20})/gi,
          shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\//gi,
          shareCodeExcludeRegular: ["lanzouyx"],
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: `${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#} 提取码: {#accessCode#}`,
          blank: `https://${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#}`,
          copyUrl: `https://${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "蓝奏云",
        key: "lanzou",
        configurationInterface: {
          matchRange_text: {
            before: 20,
            after: 10,
          },
          matchRange_html: {
            before: 100,
            after: 15,
          },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: {
                default: true,
              },
              parseFile: {
                enable: true,
              },
              "parseFile-closePopup": {
                enable: true,
              },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: {
            openBlankAutoFilleAccessCode: true,
            openBlankWithCopyAccessCode: true,
          },
          schemeUri: {
            enable: false,
            isForwardLinearChain: false,
            isForwardBlankLink: false,
            uri: "",
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
                ),
              ],
            },
          ],
        },
      },
    };
  };
  const NetDiskRule_lanzouyx = {
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
        copyUrl: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`,
      },
    ],
    setting: {
      name: "蓝奏云优享",
      key: "lanzouyx",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_tianyiyun = {
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
        copyUrl: "https://cloud.189.cn/t/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "天翼云",
      key: "tianyiyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_hecaiyun = {
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
        copyUrl: "https://caiyun.139.com/m/i?{#shareCode#}\n密码：{#accessCode#}",
      },
      {
        link_innerText: `caiyun.139.com/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `caiyun.139.com/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /caiyun\.139\.com\/w\/i\/([a-zA-Z0-9_\-]{8,14})/gi,
        shareCodeNeedRemoveStr: /caiyun\.139\.com\/w\/i\//gi,
        checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{4})/gi,
        uiLinkShow: "caiyun.139.com/w/i/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://caiyun.139.com/w/i/{#shareCode#}",
        copyUrl: "https://caiyun.139.com/w/i/{#shareCode#}\n密码：{#accessCode#}",
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
        copyUrl: "https://yun.139.com/link/w/i/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "中国移动云盘",
      key: "hecaiyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
          },
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: false,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_aliyun = {
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
        copyUrl: "https://www.aliyundrive.com/s/{#shareCode#}\n密码：{#accessCode#}",
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
        copyUrl: "https://www.aliyundrive.com/t/{#shareCode#}\n密码：{#accessCode#}",
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
        copyUrl: "https://www.alipan.com/s/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "阿里云",
      key: "aliyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: true,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_wenshushu = {
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
        copyUrl: "https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}",
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
        copyUrl: "https://www.wenshushu.cn/k/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "文叔叔",
      key: "wenshushu",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: true,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_nainiu = {
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
        copyUrl: "https://cowtransfer.com/s/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "奶牛",
      key: "nainiu",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: true,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_weiyun = {
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
        copyUrl: "https://share.weiyun.com/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "微云",
      key: "weiyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_xunlei = {
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
        copyUrl: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
      },
    ],
    setting: {
      name: "迅雷云盘",
      key: "xunlei",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_chengtong = {
    rule: [
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
        copyUrl: "https://{#$1#}/d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
      },
      {
        link_innerText: `ct.ghpym.com(/|/#/)d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `ct.ghpym.com(/|/#/)d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /ct.ghpym.com(\/|\/#\/)d\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /ct.ghpym.com(\/|\/#\/)d\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        paramMatch: /([a-zA-Z0-9\.]+)(\/|\/#\/)d\//i,
        uiLinkShow: "{#$1#}{#$2#}d/{#shareCode#} 提取码: {#accessCode#}",
        blank: "http://{#$1#}{#$2#}d/{#shareCode#}?p={#accessCode#}",
        copyUrl: "http://{#$1#}{#$2#}d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
      },
      {
        link_innerText: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /ctfile.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /ctfile.com\/d\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://url95.ctfile.com/d/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://url95.ctfile.com/d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
      },
      {
        link_innerText: `(2k.us|u062.com|545c.com|t00y.com|tc5.us)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(2k.us|u062.com|545c.com|t00y.com|tc5.us)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /(2k.us|u062.com|545c.com|t00y.com|tc5.us)\/file\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(2k.us|u062.com|545c.com|t00y.com|tc5.us)\/file\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://u062.com/file/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://u062.com/file/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
      },
      {
        link_innerText: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode:
          /(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr:
          /(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)\/f\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        paramMatch: /([0-9a-zA-Z\.]+)\/f\//i,
        uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
        blank: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}",
        copyUrl: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
      },
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
        copyUrl: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
      },
      {
        link_innerText: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
        shareCode: /(ctfile.com|089u.com)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(ctfile.com|089u.com)\/f\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,6})/gi,
        uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://url95.ctfile.com/f/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://url95.ctfile.com/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
      },
      {
        link_innerText: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
        link_innerHTML: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{6}|)`,
        shareCode: /(089u.com|474b.com)\/dir\/([0-9a-zA-Z\-_]{8,26})/gi,
        shareCodeNeedRemoveStr: /(089u.com|474b.com)\/dir\//gi,
        checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{6})/gi,
        uiLinkShow: "089u.com/dir/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://089u.com/dir/{#shareCode#}?p={#accessCode#}",
        copyUrl: "https://089u.com/dir/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "城通网盘",
      key: "chengtong",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: "",
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
              ),
            ],
          },
        ],
      },
    },
  };
  const NetDiskRule_kuake = {
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
        copyUrl: "https://pan.quark.cn/s/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "夸克网盘",
      key: "kuake",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_magnet = {
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
        copyUrl: "magnet:?xt=urn:btih:{#shareCode#}",
      },
    ],
    setting: {
      name: "BT磁力",
      key: "magnet",
      configurationInterface: {
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            "openBlank-closePopup": {
              enable: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_jianguoyun = {
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
        copyUrl: "https://www.jianguoyun.com/p/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "坚果云",
      key: "jianguoyun",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_onedrive = {
    rule: [
      {
        link_innerText: `[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
        link_innerHTML: `[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
        shareCode: /[0-9a-zA-Z-_]+\/[0-9a-zA-Z-_:]+\/[0-9a-zA-Z-_:]+\/personal\/[0-9a-zA-Z-_]+\/([0-9a-zA-Z\-_]+)/gi,
        shareCodeNeedRemoveStr: /[0-9a-zA-Z-_]+\/[0-9a-zA-Z-_:]+\/[0-9a-zA-Z-_:]+\/personal\/[0-9a-zA-Z-_]+\//gi,
        checkAccessCode: /(提取码|密码|访问码|\?password=|\?e=)[\s\S]+/gi,
        accessCode: /([0-9a-zA-Z]{4,8})/gi,
        paramMatch:
          /([0-9a-zA-Z-_]+).sharepoint.com\/([0-9a-zA-Z-_:]+)\/([0-9a-zA-Z-_:]+)\/personal\/([0-9a-zA-Z-_]+)\/([0-9a-zA-Z-_]+)/i,
        uiLinkShow: "{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#}?e={#accessCode#}",
        copyUrl: "https://{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "OneDrive",
      key: "onedrive",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: false,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_uc = {
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
        copyUrl: "https://drive.uc.cn/s/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "UC网盘",
      key: "uc",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: "",
        },
      },
    },
  };
  const UISlider = function (
    text,
    key,
    defaultValue,
    min,
    max,
    changeCallback,
    getToolTipContent,
    description,
    step,
    valueChangeCallBack
  ) {
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
      step,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("slider", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const UISelect = function (text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
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
      data: selectData,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const NetDiskRule_115pan = {
    rule: [
      {
        link_innerText: `(115.com|115cdn.com|anxia.com)/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
        link_innerHTML: `(115.com|115cdn.com|anxia.com)/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
        shareCode: /(115.com|115cdn.com|anxia.com)\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
        shareCodeNeedRemoveStr: /(115.com|115cdn.com|anxia.com)\/s\//gi,
        checkAccessCode: /(提取码|密码|\?password=|访问码)[\s\S]+/gi,
        accessCode: /(提取码|密码|\?password=|访问码)([0-9a-zA-Z]{4})/i,
        paramMatch: /(115.com|115cdn.com|anxia.com)/i,
        uiLinkShow: "{#$1#}/s/{#shareCode#} 提取码: {#accessCode#}",
        blank: "https://{#$1#}/s/{#shareCode#}",
        copyUrl: "https://{#$1#}/s/{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "115网盘",
      key: "_115pan",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_ed2k = {
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
        copyUrl: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
      },
    ],
    setting: {
      name: "ed2k",
      key: "ed2k",
      configurationInterface: {
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            "openBlank-closePopup": {
              enable: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
        },
        schemeUri: {
          enable: false,
          isForwardBlankLink: true,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule_360yunpan = {
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
        copyUrl: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#}\n密码：{#accessCode#}",
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
        copyUrl: "https://{#$1#}/lk/surl_{#shareCode#}\n密码：{#accessCode#}",
      },
    ],
    setting: {
      name: "360AI云盘",
      key: "360yunpan",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: "",
        },
      },
    },
  };
  const NetDiskRule = {
    dataKey: "ruleData",
    $data: {
      ruleContent: [],
    },
    init() {
      this.initRule();
    },
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
        NetDiskRule_360yunpan,
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
          let findValue = NetDisk.$rule.rule.find((item) => item.setting.key === ruleKey);
          findValue.rule = commonRule;
        } else {
          Reflect.set(NetDisk.$rule.ruleOption, ruleKey, netDiskRuleConfig.rule);
          NetDisk.$rule.rule.push(netDiskRuleConfig);
        }
        Reflect.set(NetDisk.$rule.ruleSetting, ruleKey, netDiskRuleConfig.setting);
        netDiskRuleConfig.rule = this.parseRuleMatchRule(netDiskRuleConfig);
        let viewConfig = this.parseRuleSetting(netDiskRuleConfig);
        let asideTitle = netDiskRuleConfig.setting.name;
        if (NetDiskView.$inst.icon.hasIcon(ruleKey)) {
          asideTitle = `
					<div class="netdisk-aside-icon" style="background-image: url(${NetDiskView.$inst.icon.getIcon(ruleKey)});"></div>
					<div class="netdisk-aside-text">${ruleName}</div>`;
        }
        let headerTitleText = ruleName;
        if (netDiskRuleConfig.isUserRule) {
          headerTitleText += `
					<div 
						class="netdisk-custom-rule-edit" 
						data-key="${ruleKey}" 
						data-type="${netDiskRuleConfig.setting.name}"
						${typeof netDiskRuleConfig.subscribeUUID === "string" ? `data-subscribe-uuid="${netDiskRuleConfig.subscribeUUID}"` : ""}"
						
					>${__pops.config.iconSVG.edit}</div>`;
          headerTitleText += `
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
            "data-key": ruleKey,
          },
          forms: viewConfig,
          afterRender: (data) => {
            data.$asideLiElement.setAttribute(
              "data-function-enable",
              NetDiskRuleData.function.enable(ruleKey, true).toString()
            );
          },
        });
      });
    },
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
          let default_value =
            typeof settingConfig.function.enable === "boolean" ? settingConfig.function.enable : false;
          function_form.push(
            UISwitch(
              "启用",
              NetDiskRuleDataKEY.function.enable(ruleKey),
              default_value,
              (event, value) => {
                const notUnableAttrName = "data-function-enable";
                let $click = event.target;
                let $shadowRoot = $click.getRootNode();
                let $currentPanelAside = $shadowRoot.querySelector(`.pops-panel-aside li[data-key="${ruleKey}"]`);
                if (!$currentPanelAside) {
                  return;
                }
                $currentPanelAside.setAttribute(notUnableAttrName, value.toString());
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
          let selectData = [];
          const dataKeys = Object.keys(data);
          for (const keyName of dataKeys) {
            let itemData = data[keyName];
            if (!itemData.enable) {
              continue;
            }
            if (itemData.default) {
              default_value = keyName;
            }
            selectData.push({
              value: keyName,
              text: itemData.text,
            });
          }
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
          const default_value =
            typeof settingConfig.function.checkLinkValidity === "boolean"
              ? settingConfig.function.checkLinkValidity
              : true;
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
          const default_value =
            typeof settingConfig.function.checkLinkValidityHoverTip === "boolean"
              ? settingConfig.function.checkLinkValidityHoverTip
              : true;
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
            forms: function_form,
          });
        }
      }
      if (settingConfig.linkClickMode_openBlank) {
        let linkClickMode_openBlank_form = [];
        if ("openBlankAutoFilleAccessCode" in settingConfig.linkClickMode_openBlank) {
          const default_value =
            typeof settingConfig.linkClickMode_openBlank.openBlankAutoFilleAccessCode === "boolean"
              ? settingConfig.linkClickMode_openBlank.openBlankAutoFilleAccessCode
              : true;
          linkClickMode_openBlank_form.push(
            UISwitch(
              "自动填充访问码",
              NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankAutoFilleAccessCode(ruleKey),
              default_value,
              void 0,
              "当点击动作是【新标签页打开】时且存在访问码，那就会自动填充访问码"
            )
          );
          settingConfig.linkClickMode_openBlank.openBlankAutoFilleAccessCode =
            NetDiskRuleData.linkClickMode_openBlank.openBlankAutoFilleAccessCode(ruleKey);
        }
        if ("openBlankWithCopyAccessCode" in settingConfig.linkClickMode_openBlank) {
          const default_value =
            typeof settingConfig.linkClickMode_openBlank.openBlankWithCopyAccessCode === "boolean"
              ? settingConfig.linkClickMode_openBlank.openBlankWithCopyAccessCode
              : false;
          linkClickMode_openBlank_form.push(
            UISwitch(
              "跳转时复制访问码",
              NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(ruleKey),
              default_value,
              void 0,
              "当点击动作是【新标签页打开】时且存在访问码，那就会复制访问码到剪贴板"
            )
          );
          settingConfig.linkClickMode_openBlank.openBlankWithCopyAccessCode =
            NetDiskRuleData.linkClickMode_openBlank.openBlankWithCopyAccessCode(ruleKey);
        }
        if (linkClickMode_openBlank_form.length) {
          formConfigList.push({
            text: "点击动作-新标签页打开",
            type: "forms",
            forms: linkClickMode_openBlank_form,
          });
        }
      }
      if (settingConfig.schemeUri) {
        const schemeUri_form = [];
        if ("enable" in settingConfig.schemeUri) {
          const default_value =
            typeof settingConfig.schemeUri.enable === "boolean" ? settingConfig.schemeUri.enable : false;
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
          const default_value =
            typeof settingConfig.schemeUri.isForwardBlankLink === "boolean"
              ? settingConfig.schemeUri.isForwardBlankLink
              : false;
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
          const default_value =
            typeof settingConfig.schemeUri.isForwardLinearChain === "boolean"
              ? settingConfig.schemeUri.isForwardLinearChain
              : false;
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
            forms: schemeUri_form,
          });
        }
      }
      if (settingConfig.matchRange_text) {
        let matchRange_text_form = [];
        if ("before" in settingConfig.matchRange_text) {
          const default_value =
            typeof settingConfig.matchRange_text.before === "number" ? settingConfig.matchRange_text.before : 0;
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
          const default_value =
            typeof settingConfig.matchRange_text.after === "number" ? settingConfig.matchRange_text.after : 0;
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
            forms: matchRange_text_form,
          });
        }
      }
      if (settingConfig.matchRange_html) {
        let matchRange_html_form = [];
        if ("before" in settingConfig.matchRange_html) {
          const default_value =
            typeof settingConfig.matchRange_html.before === "number" ? settingConfig.matchRange_html.before : 0;
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
          const default_value =
            typeof settingConfig.matchRange_html.after === "number" ? settingConfig.matchRange_html.after : 0;
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
            forms: matchRange_html_form,
          });
        }
      }
      if (settingConfig.ownFormList) {
        formConfigList.push(...settingConfig.ownFormList);
      }
      return formConfigList;
    },
    getRulePanelContent() {
      return this.$data.ruleContent;
    },
  };
  const panelIndexCSS =
    'div[class^="netdisk-custom-rule-"] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n}\r\ndiv[class^="netdisk-custom-rule-"] svg,\r\ndiv[class^="netdisk-custom-rule-"] svg {\r\n  width: 1.2em;\r\n  height: 1.2em;\r\n}\r\n/* 控件被禁用的颜色 */\r\naside.pops-panel-aside li[data-key][data-function-enable="false"] {\r\n  color: #a8abb2;\r\n  filter: grayscale(100%);\r\n}\r\n/* 左侧网盘图标 */\r\naside.pops-panel-aside .netdisk-aside-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n/* 设置间隔 */\r\naside.pops-panel-aside ul li {\r\n  gap: 4px;\r\n}\r\n\r\n/* mobile模式 */\r\n@media screen and (max-width: 600px) {\r\n  /* 隐藏左侧网盘图标 */\r\n  aside.pops-panel-aside .netdisk-aside-text {\r\n    display: none;\r\n  }\r\n}\r\n';
  const NetDiskSettingView = {
    show() {
      if (NetDiskView.$el.$settingView) {
        Qmsg.error("设置界面已存在");
        return;
      }
      let ruleContent = NetDiskRule.getRulePanelContent();
      let content = [...PanelContent.getConfig(0), ...ruleContent, ...PanelContent.getDefaultBottomContentConfig()];
      let $panel = NetDiskPops.panel(
        {
          title: {
            text: `${_GM_info?.script?.name || _SCRIPT_NAME_}-设置`,
            position: "center",
          },
          content,
          btn: {
            close: {
              enable: true,
              callback(event) {
                event.close();
                NetDiskView.$el.$settingView = void 0;
              },
            },
          },
          mask: {
            clickCallBack(originalRun) {
              originalRun();
              NetDiskView.$el.$settingView = void 0;
            },
          },
          class: "whitesevPopSetting",
          style: panelIndexCSS,
        },
        NetDiskView.$config.viewSizeConfig.settingView
      );
      Panel.registerConfigSearch({
        $panel,
        content,
        searchDialogStyle: `
			/* 网盘图标 */
			.netdisk-aside-icon {
				width: 20px;
				height: 20px;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin: 0px 4px;
			}
		`,
      });
      NetDiskView.$el.$settingView = $panel;
      this.setRuleHeaderControlsClickEvent($panel.$shadowRoot);
    },
    setRuleHeaderControlsClickEvent($shadowRoot) {
      domUtils.on($shadowRoot, "click", ".netdisk-custom-rule-edit", function (event) {
        let $click = event.target;
        let ruleKey = $click.getAttribute("data-key");
        $click.getAttribute("data-type");
        let subscribeUUID = $click.getAttribute("data-subscribe-uuid");
        if (typeof subscribeUUID === "string" && subscribeUUID.trim() !== "") {
          NetDiskUserRuleUI.showSubscribe(subscribeUUID, ruleKey, function (rule) {
            NetDiskUserRule.updateRule(ruleKey, rule);
          });
        } else {
          NetDiskUserRuleUI.show(true, ruleKey);
        }
      });
      domUtils.on($shadowRoot, "click", ".netdisk-custom-rule-delete", function (event) {
        let $click = event.target;
        let ruleKey = $click.getAttribute("data-key");
        let ruleName = $click.getAttribute("data-type");
        let subscribeUUID = $click.getAttribute("data-subscribe-uuid");
        NetDiskPops.alert({
          title: {
            text: "提示",
            position: "center",
          },
          content: {
            text: `确定删除规则 ${ruleName}(${ruleKey}) 吗？`,
          },
          btn: {
            ok: {
              callback(okEvent) {
                let flag;
                if (typeof subscribeUUID === "string" && subscribeUUID.trim() !== "") {
                  flag = NetDiskUserRuleSubscribeRule.deleteSubscribeRule(subscribeUUID, ruleKey);
                } else {
                  flag = NetDiskUserRule.deleteRule(ruleKey);
                }
                if (flag) {
                  let asideElement = NetDiskView.$el.$settingView.$shadowRoot.querySelector(
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
              },
            },
          },
        });
      });
    },
  };
  const indexCSS$2 =
    ".whitesevSuspension {\r\n  top: 0;\r\n  position: fixed;\r\n  right: 10px;\r\n  border-radius: 12px;\r\n}\r\n.whitesevSuspension .whitesevSuspensionMain {\r\n  background: #fff;\r\n  border: 1px solid #f2f2f2;\r\n  box-shadow: 0 0 15px #e4e4e4;\r\n  box-sizing: border-box;\r\n  border-radius: inherit;\r\n  height: inherit;\r\n  width: inherit;\r\n}\r\n.whitesevSuspension .whitesevSuspensionFloor {\r\n  border-bottom: 1px solid #f2f2f2;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  border-radius: inherit;\r\n  height: inherit;\r\n  width: inherit;\r\n}\r\n.whitesevSuspension .whitesevSuspensionFloor .netdisk {\r\n  background-position: center center;\r\n  background-size: 115% 115%;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: inherit;\r\n  height: inherit;\r\n  width: inherit;\r\n}\r\n.whitesevSuspension .whitesevSuspensionFloor .netdisk:hover {\r\n  transition: all 300ms linear;\r\n  background-color: #e4e4e4;\r\n  transform: scale(1.1);\r\n}\r\n.whitesevPop-content p[pop] {\r\n  height: 100%;\r\n}\r\n";
  const NetDiskSuspensionConfig = {
    position: {
      suspensionX: GenerateData("suspensionX", DOMUtils.width(window) - 50),
      suspensionY: GenerateData("suspensionY", (DOMUtils.height(window) - 50) / 2),
      suspensionMaxX: GenerateData("susponsionMax-x", DOMUtils.width(window) - 50),
      suspensionMaxY: GenerateData("suspensionMax-y", DOMUtils.height(window) - 50),
      isRight: GenerateData("isRight", false),
    },
    mode: {
      current_suspension_smallwindow_mode: GenerateData("current_suspension_smallwindow_mode", "suspension"),
    },
  };
  const NetDiskSuspension = {
    $el: {
      $suspension: null,
      $suspensionZIndexStyle: null,
    },
    $data: {
      isShow: false,
      isInitAllEvent: false,
      isSwitchBackground: false,
    },
    init() {
      if (!this.$data.isShow) {
        this.$data.isShow = true;
        this.createElement();
        this.updateZIndex();
        this.updatePosition(true);
      }
      if (!this.$data.isInitAllEvent) {
        this.$data.isInitAllEvent = true;
        this.setAllEvent();
        this.setResizeEventListener();
      }
      this.changeBackground();
      this.show();
    },
    show() {
      DOMUtils.css(this.$el.$suspension, { display: "" });
    },
    hide() {
      DOMUtils.css(this.$el.$suspension, { display: "none" });
    },
    createElement() {
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
        className: "whitesev-suspension-shadow-container",
      });
      let $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
      this.$el.$suspension = DOMUtils.createElement(
        "div",
        {
          id: "whitesevSuspensionId",
          className: "whitesevSuspension",
          innerHTML: `
					<style type="text/css">${indexCSS$2}</style>
					<style type="text/css" data-z-index></style>
					<div class="whitesevSuspensionMain">
						<div class="whitesevSuspensionFloor">
							<div class="netdisk"></div>
						</div>
					</div>
                `,
        },
        {
          style: `
                    width: ${NetDiskGlobalData.suspension.size.value}px;
                    height: ${NetDiskGlobalData.suspension.size.value}px;
                    opacity: ${NetDiskGlobalData.suspension.opacity.value}
                `,
        }
      );
      this.$el.$suspensionZIndexStyle = this.$el.$suspension.querySelector("style[data-z-index]");
      $shadowRoot.appendChild(this.$el.$suspension);
      (document.body || document.documentElement).appendChild($shadowContainer);
    },
    setAllEvent() {
      let that = this;
      let needDragElement = NetDiskView.$inst.suspension.$el.$suspension;
      let dragNode = new AnyTouch(needDragElement);
      let netDiskLinkViewTimer = void 0;
      let moveFlag = false;
      let isDouble = false;
      let clickElementLeftOffset = 0;
      let clickElementTopOffset = 0;
      dragNode.on("pan", function (event) {
        if (!moveFlag) {
          moveFlag = true;
          let rect = needDragElement.getBoundingClientRect();
          clickElementLeftOffset = event.x - rect.left;
          clickElementTopOffset = event.y - rect.top;
          DOMUtils.css(needDragElement, {
            cursor: "move",
            transition: "none",
          });
        }
        if (event.phase === "start") {
          that.updateZIndex();
        }
        if (event.phase === "move") {
          let maxLeftOffset = DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
          let maxTopOffset = DOMUtils.height(window) - NetDiskGlobalData.suspension.size.value;
          let currentSuspensionLeftOffset = event.x - clickElementLeftOffset;
          let currentSuspensionTopOffset = event.y - clickElementTopOffset;
          currentSuspensionLeftOffset =
            currentSuspensionLeftOffset > maxLeftOffset ? maxLeftOffset : currentSuspensionLeftOffset;
          currentSuspensionTopOffset =
            currentSuspensionTopOffset > maxTopOffset ? maxTopOffset : currentSuspensionTopOffset;
          currentSuspensionLeftOffset = currentSuspensionLeftOffset < 0 ? 0 : currentSuspensionLeftOffset;
          currentSuspensionTopOffset = currentSuspensionTopOffset < 0 ? 0 : currentSuspensionTopOffset;
          NetDiskSuspension.savePosition({
            x: currentSuspensionLeftOffset,
            y: currentSuspensionTopOffset,
          });
          DOMUtils.css(needDragElement, {
            left: currentSuspensionLeftOffset + "px",
            top: currentSuspensionTopOffset + "px",
          });
        }
        if (event.phase === "end") {
          moveFlag = false;
          DOMUtils.css(needDragElement, {
            cursor: "auto",
          });
          let currentSuspensionLeftOffset = parseInt(DOMUtils.css(needDragElement, "left"));
          if (NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].value) {
            let setCSSLeft = 0;
            if (currentSuspensionLeftOffset >= DOMUtils.width(window) / 2) {
              setCSSLeft = DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
              if (Panel.isTopWindow()) {
                NetDiskSuspensionConfig.position.isRight.value = true;
              }
            } else {
              if (Panel.isTopWindow()) {
                NetDiskSuspensionConfig.position.isRight.value = false;
              }
            }
            NetDiskSuspension.savePosition({
              x: setCSSLeft,
            });
            DOMUtils.css(needDragElement, {
              left: setCSSLeft + "px",
            });
          }
          DOMUtils.css(needDragElement, {
            transition: "left 300ms ease 0s",
          });
          that.updateZIndex();
        }
      });
      dragNode.on("tap", function (event) {
        clearTimeout(netDiskLinkViewTimer);
        netDiskLinkViewTimer = void 0;
        if (isDouble) {
          isDouble = false;
          NetDiskSettingView.show();
        } else {
          netDiskLinkViewTimer = setTimeout(() => {
            isDouble = false;
            if (NetDiskGlobalData.features["netdisk-behavior-mode"].value.includes("smallwindow")) {
              NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value = "smallwindow";
              NetDiskView.$inst.suspension.hide();
            }
            NetDiskView.$inst.linkView.show();
          }, 200);
          isDouble = true;
        }
      });
      NetDiskViewRightClickMenu.setGlobalRightClickMenu(needDragElement);
    },
    setResizeEventListener() {
      let isMobileInputKeyboard = ($el) => {
        const localName = $el?.localName?.toLowerCase?.();
        if (typeof localName === "string" && ["input", "textarea"].includes(localName)) {
          return true;
        } else if ($el?.getAttribute?.("contenteditable") === "true" || $el?.closest?.("[contenteditable='true']")) {
          return true;
        }
        return false;
      };
      DOMUtils.on(globalThis, "resize", () => {
        if (utils.isPhone()) {
          let $active = document.activeElement;
          let $activeShadowRoot = $active?.shadowRoot?.activeElement;
          if (isMobileInputKeyboard($activeShadowRoot ?? $active)) {
            return;
          }
          if (!document.hasFocus()) {
            return true;
          }
        }
        this.updatePosition(false);
      });
    },
    savePosition(position) {
      if (!Panel.isTopWindow()) {
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
    updatePosition(isTrusted) {
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
      if (isTrusted) {
        NetDiskSuspension.savePosition({
          x: suspension_X,
          y: suspension_Y,
        });
      }
      DOMUtils.css(NetDiskView.$inst.suspension.$el.$suspension, {
        left: suspension_X + "px",
        top: suspension_Y + "px",
      });
    },
    updateZIndex() {
      let suspendedZIndex = NetDiskGlobalData.suspension["suspended-z-index"].value;
      if (suspendedZIndex <= 0) {
        suspendedZIndex = utils.getMaxValue(4e4, utils.getMaxZIndex(10));
      }
      DOMUtils.html(
        this.$el.$suspensionZIndexStyle,
        `
			#whitesevSuspensionId{
				z-index: ${suspendedZIndex};
			}
			`
      );
    },
    changeBackground() {
      if (this.$data.isSwitchBackground) {
        return;
      }
      function getRandBgList() {
        let resultList = [];
        NetDiskView.$data.isMatchedNetDiskIconMap.forEach((item) => {
          resultList = [...resultList, NetDiskView.$inst.icon.getIcon(item)];
        });
        return resultList;
      }
      function startSwitch(fadeTime, currentBackgroundSrc) {
        currentList = getRandBgList();
        DOMUtils.fadeOut(randBgNode, fadeTime, function () {
          currentIndex++;
          currentIndex = currentIndex < currentList.length ? currentIndex : 0;
          currentBackgroundSrc = currentList[currentIndex];
          DOMUtils.css(randBgNode, {
            "background-image": `url(${currentBackgroundSrc})`,
          });
          DOMUtils.fadeIn(randBgNode, fadeTime, function () {
            setTimeout(() => {
              startSwitch(parseInt(NetDiskGlobalData.suspension["randbg-time"].value.toString()), currentBackgroundSrc);
            }, parseInt(NetDiskGlobalData.suspension["randbg-show-time"].value.toString()));
          });
        });
      }
      let currentList = [];
      let currentIndex = 0;
      currentList = getRandBgList();
      let randBgSrc = currentList[currentIndex];
      let randBgNode = NetDiskView.$inst.suspension.$el.$suspension.querySelector(".whitesevSuspension .netdisk");
      DOMUtils.css(randBgNode, {
        "background-image": `url(${randBgSrc})`,
      });
      if (currentList.length < 2 || NetDiskGlobalData.suspension["randbg-time"].value <= 0) {
        return;
      }
      this.$data.isSwitchBackground = true;
      startSwitch(parseInt(NetDiskGlobalData.suspension["randbg-time"].value.toString().toString()), randBgSrc);
    },
  };
  const indexCSS$1 =
    ".pops-folder-list .list-name-text {\r\n  max-width: 300px;\r\n}\r\n.netdisk-static-link-onefile .pops-folder-list .list-name-text {\r\n  max-width: 220px;\r\n}\r\n.netdisk-static-link-onefile .pops-mobile-folder-content .pops-folder-list .list-name-text {\r\n  max-width: unset;\r\n}\r\n";
  const NetDiskLinearChainDialogView = {
    oneFile(fileDetails) {
      log.success("成功获取单文件直链", fileDetails);
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
              createTime: fileDetails.fileUploadTime || fileDetails.fileLatestTime,
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
          style: indexCSS$1,
        },
        NetDiskView.$config.viewSizeConfig.oneFileStaticView
      );
    },
    moreFile(title, folderInfoList = []) {
      log.success("文件解析信息", folderInfoList);
      NetDiskPops.folder(
        {
          title: {
            text: title,
          },
          folder: folderInfoList,
          btn: {
            ok: {
              enable: false,
            },
            cancel: {
              enable: true,
            },
          },
          style: indexCSS$1,
        },
        NetDiskView.$config.viewSizeConfig.moreFileStaticView
      );
    },
  };
  const NetDiskNewAccessCodeView = function (
    title = "密码错误",
    ruleKeyName = "",
    ruleIndex,
    shareCode,
    accessCode,
    okCallBack = () => {},
    closeCallBack
  ) {
    const accessCodeConfirm = NetDiskPops.prompt(
      {
        title: {
          text: title,
          position: "center",
          html: false,
        },
        btn: {
          reverse: true,
          position: "end",
          cancel: {
            text: "取消",
            callback(eventDetails, event) {
              accessCodeConfirm.close();
              closeCallBack?.();
            },
          },
          close: {
            callback(details, event) {
              details.close();
              closeCallBack?.();
            },
          },
          ok: {
            callback: (event) => {
              let userInputAccessCode = event.text.replace(/[\s]*/gi, "");
              let uiLink = NetDisk.handleLinkShow({
                ruleKeyName,
                ruleIndex,
                shareCode,
                accessCode: userInputAccessCode,
              });
              if (!uiLink) {
                return;
              }
              let currentItemSelector = `.netdisk-url a[data-rule-key='${ruleKeyName}'][data-sharecode='${shareCode}']`;
              let currentHistoryItemSelector = `.netdiskrecord-link a[data-rule-key='${ruleKeyName}'][data-sharecode='${shareCode}']`;
              let currentItemElement = NetDiskView.$el.$linkView?.$shadowRoot?.querySelector(currentItemSelector);
              let currentHistoryItemElement =
                NetDiskView.$el.$historyView?.$shadowRoot?.querySelector(currentHistoryItemSelector);
              if (currentItemElement) {
                currentItemElement.setAttribute("data-accesscode", userInputAccessCode);
                domUtils.html(currentItemElement, uiLink);
              }
              if (currentHistoryItemElement) {
                currentHistoryItemElement.setAttribute("data-accesscode", userInputAccessCode);
                domUtils.html(currentHistoryItemElement, uiLink);
              }
              log.info(`${ruleKeyName} 重新输入的密码：${userInputAccessCode}`);
              let callbackOption = {
                isFindInMatchedDict: false,
                isUpdatedMatchedDict: false,
                isUpdatedHistoryMatched: false,
                accessCode: userInputAccessCode,
              };
              let netDiskDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
              if (netDiskDict.has(shareCode)) {
                callbackOption.isFindInMatchedDict = true;
                callbackOption.isUpdatedMatchedDict = true;
                let currentDict = netDiskDict.get(shareCode);
                netDiskDict.set(
                  shareCode,
                  NetDisk.createLinkStorageInst(userInputAccessCode, ruleIndex, true, currentDict.matchText)
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
            },
          },
        },
        content: {
          placeholder: "请重新输入密码",
          focus: true,
          select: true,
          text: accessCode == null ? "" : typeof accessCode === "string" ? accessCode : "",
        },
        style: `
			input{
				font-size: larger;
			}
			`,
      },
      NetDiskView.$config.viewSizeConfig.inputNewAccessCodeView
    );
    domUtils.listenKeyboard(accessCodeConfirm.$shadowRoot, "keypress", (keyName) => {
      if (keyName === "Enter") {
        const $ok = accessCodeConfirm.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        $ok.click();
      }
    });
  };
  const indexCSS =
    '.pops[type-value="confirm"] .pops-confirm-content {\r\n  overflow: hidden;\r\n}\r\n.netdisk-match-paste-text {\r\n  --textarea-bd-color: #dcdfe6;\r\n  display: inline-block;\r\n  resize: vertical;\r\n  padding: 5px 15px;\r\n  line-height: normal;\r\n  box-sizing: border-box;\r\n  color: #606266;\r\n  border: 1px solid var(--textarea-bd-color);\r\n  border-radius: 4px;\r\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n  outline: none;\r\n  margin: 0;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  background: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  appearance: none;\r\n  resize: none;\r\n}\r\n.netdisk-match-paste-text:hover {\r\n  --textarea-bd-color: #c0c4cc;\r\n}\r\n.netdisk-match-paste-text:focus {\r\n  --textarea-bd-color: #3677f0;\r\n}\r\n';
  const NetDiskMatchPasteText = {
    show() {
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
                let inputText = popsConfirm.popsElement?.querySelector(".netdisk-match-paste-text")?.value || "";
                if (inputText.trim() !== "") {
                  inputText = NetDiskRuleUtils.replaceChinese(inputText);
                  NetDiskWorker.postMessage({
                    characterMapping: [
                      {
                        searchValue: /[\u4e00-\u9fa5]/g,
                        replaceValue: "",
                      },
                    ],
                    textList: [inputText],
                    matchTextRange: NetDiskGlobalData.match.pageMatchRange.value,
                    matchedRuleOption: NetDisk.$rule.ruleOption,
                    startTime: Date.now(),
                    from: "PasteText",
                  });
                }
              },
            },
          },
          class: "whitesevPopNetDiskMatchPasteText",
          style: indexCSS,
        },
        NetDiskView.$config.viewSizeConfig.matchPasteTextView
      );
      popsConfirm.popsElement.querySelector("textarea").focus();
    },
    workerMatchEndCallBack(data) {
      if (data.data.length) {
        Qmsg.success(`成功匹配${data.data.length}个，用时${Date.now() - data.startTime}ms`);
      } else {
        Qmsg.error("未识别到链接");
      }
    },
  };
  const NetDiskIcon = {
    src: new Utils.Dictionary(),
    hasIcon(iconKey) {
      return this.src.has(iconKey);
    },
    addIcon(iconKey, iconValue) {
      if (this.hasIcon(iconKey)) {
        log.warn("图标字典中已存在该icon：" + iconKey);
        return false;
      } else {
        return this.src.set(iconKey, iconValue);
      }
    },
    getIcon(iconKey) {
      return this.src.get(iconKey);
    },
    assign(icon_src) {
      const icon_keys = Object.keys(icon_src);
      for (let index = 0; index < icon_keys.length; index++) {
        const icon_key = icon_keys[index];
        const icon_value = icon_src[icon_key];
        this.addIcon(icon_key, icon_value);
      }
    },
  };
  const NetDiskView = {
    $el: {
      $linkView: void 0,
      $historyView: void 0,
      $settingView: void 0,
    },
    $inst: {
      suspension: NetDiskSuspension,
      linkView: NetDiskLinkView,
      linearChainDialogView: NetDiskLinearChainDialogView,
      newAccessCodeView: NetDiskNewAccessCodeView,
      historyMatch: NetDiskHistoryMatchView,
      matchPasteText: NetDiskMatchPasteText,
      icon: NetDiskIcon,
    },
    $data: {
      isMatchedNetDiskIconMap: new Set(),
      isForbiddenScrollByDefault: false,
    },
    $config: {
      viewSizeConfig: NetDiskViewSizeConfig,
    },
  };
  const panelSettingCSS =
    "/* 容器 */\r\n.website-rule-container {\r\n}\r\n/* 每一条规则 */\r\n.website-rule-item {\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: normal;\r\n  font-size: 16px;\r\n  padding: 4px 4px;\r\n  gap: 6px;\r\n}\r\n/* 规则名 */\r\n.website-rule-item .website-rule-name {\r\n  flex: 1;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n/* 操作按钮 */\r\n.website-rule-item .website-controls {\r\n  display: flex;\r\n  align-items: center;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  gap: 8px;\r\n  padding: 0px 4px;\r\n}\r\n/* 编辑和删除按钮 */\r\n.website-rule-item .website-rule-edit,\r\n.website-rule-item .website-rule-delete {\r\n  width: 16px;\r\n  height: 16px;\r\n  cursor: pointer;\r\n}\r\n/* 启用按钮 */\r\n.website-rule-item .website-rule-enable {\r\n}\r\n/* 编辑按钮 */\r\n.website-rule-item .website-rule-edit {\r\n}\r\n/* 删除按钮 */\r\n.website-rule-item .website-rule-delete {\r\n}\r\n";
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
      isShowEditView: false,
    },
    init() {},
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        subscribeUUID: null,
        enable: true,
        name: "",
        url: "",
        data: {},
      };
    },
    getRulePanelViewOption(quickAddData) {
      const that = this;
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
      let addData = () => {
        return quickAddData ?? this.getTemplateData();
      };
      let generateStorageApi = function (data) {
        return {
          get(key, defaultValue) {
            return data[key] ?? defaultValue;
          },
          set(key, value) {
            data[key] = value;
          },
        };
      };
      const ruleEditHandler = (data, isEdit, subscribeUUID) => {
        that.$data.isShowEditView = true;
        if (!isEdit) {
          data = addData();
        }
        function generatePanelStorageApi(uuid) {
          return {
            get(key, defaultValue) {
              if (subscribeUUID) {
                let currentRule = WebsiteSubscribeRule.getSubscribeRule(subscribeUUID, uuid);
                return Reflect.get(currentRule.data, key) ?? defaultValue;
              } else {
                let currentRule = that.getRule(uuid) ?? addData();
                let panelValue = Panel.getValue(key, defaultValue);
                return (currentRule && Reflect.get(currentRule.data, key)) ?? panelValue;
              }
            },
            set(key, value) {
              if (subscribeUUID) {
                let currentRule = WebsiteSubscribeRule.getSubscribeRule(subscribeUUID, uuid);
                Reflect.set(currentRule.data, key, value);
                WebsiteSubscribeRule.updateSubscribeRule(subscribeUUID, currentRule);
              } else {
                let currentRule = that.getRule(uuid) ?? addData();
                Reflect.set(currentRule.data, key, value);
                that.updateRule(currentRule);
              }
            },
          };
        }
        let $fragment = document.createDocumentFragment();
        let enable_template = UISwitch("启用", "enable", true);
        Reflect.set(enable_template.props, PROPS_STORAGE_API, generateStorageApi(data));
        let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template);
        let name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
        Reflect.set(name_template.props, PROPS_STORAGE_API, generateStorageApi(data));
        let $name = panelHandlerComponents.createSectionContainerItem_input(name_template);
        let url_template = UIInput("匹配网址", "url", "", "", void 0, "必填，可正则");
        Reflect.set(url_template.props, PROPS_STORAGE_API, generateStorageApi(data));
        let $data_url = panelHandlerComponents.createSectionContainerItem_input(url_template);
        let coverSetting_template = UIButton(
          "覆盖设置",
          "",
          "自定义",
          void 0,
          false,
          false,
          "primary",
          (event) => {
            domUtils.preventEvent(event);
            let originPanelContentConfig = [...PanelContent.getConfig(0), ...NetDiskRule.getRulePanelContent()];
            let newPanelContentConfig = deepCopy(originPanelContentConfig);
            function iterativeTraversal(configList) {
              configList.forEach((configItem) => {
                if (typeof configItem?.props === "object" && Reflect.has(configItem.props, PROPS_STORAGE_API)) {
                  let panelStorageApi = generatePanelStorageApi(data.uuid);
                  Reflect.set(configItem.props, PROPS_STORAGE_API, panelStorageApi);
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
              if (
                typeof leftContentConfigItem.afterRender === "function" &&
                leftContentConfigItem?.id.toString().startsWith("netdisk-panel-config-")
              ) {
                leftContentConfigItem.afterRender = (__data) => {
                  let ruleKey = Reflect.get(__data.asideConfig.attributes, "data-key");
                  let enableKey = NetDiskRuleDataKEY.function.enable(ruleKey);
                  if (subscribeUUID) {
                    let subscribeRule = WebsiteSubscribeRule.getSubscribeRule(subscribeUUID, data.uuid);
                    __data.$asideLiElement.setAttribute("data-function-enable", subscribeRule.data[enableKey] ?? true);
                  } else {
                    __data.$asideLiElement.setAttribute(
                      "data-function-enable",
                      isEdit ? WebsiteRule.getRuleDataValue(data.uuid, enableKey, true) : (data.data[enableKey] ?? true)
                    );
                  }
                };
              }
              if (
                typeof leftContentConfigItem.attributes === "object" &&
                leftContentConfigItem.forms != null &&
                ATTRIBUTE_KEY in leftContentConfigItem.attributes
              ) {
                let ruleKey = leftContentConfigItem.attributes[ATTRIBUTE_KEY];
                let custom_accessCode_enable_template = UISwitch(
                  "启用",
                  WebsiteRuleDataKey.features.customAccessCodeEnable(ruleKey),
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
                Reflect.set(custom_accessCode_template.props, PROPS_STORAGE_API, generatePanelStorageApi(data.uuid));
                let custom_accessCode_container = {
                  text: "额外功能",
                  type: "forms",
                  forms: [custom_accessCode_enable_template, custom_accessCode_template],
                };
                if (leftContentConfigItem.forms.length) {
                  leftContentConfigItem.forms.splice(1, 0, custom_accessCode_container);
                } else {
                  leftContentConfigItem.forms.push(custom_accessCode_container);
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
                  position: "center",
                },
                content: newPanelContentConfig,
                btn: {
                  close: {
                    enable: true,
                    callback(event2) {
                      event2.close();
                    },
                  },
                },
                mask: {
                  clickCallBack(originalRun) {
                    originalRun();
                  },
                },
                only: false,
                class: "whitesevPopSetting",
                style: `
              ${panelIndexCSS}
              
              ${panelSettingCSS}


              /* 隐藏顶部的图标 */
              .netdisk-custom-rule-edit,
              .netdisk-custom-rule-delete,
              /* 隐藏快捷键设置菜单，因为这个是全局唯一的 */
              .netdisk-panel-forms-shortcut-keys-deepMenu{
                display: none !important;
              }`,
              },
              NetDiskView.$config.viewSizeConfig.settingView
            );
          },
          void 0
        );
        let $coverSetting_template = panelHandlerComponents.createSectionContainerItem_button(coverSetting_template);
        $fragment.appendChild($enable);
        $fragment.appendChild($name);
        $fragment.appendChild($data_url);
        $fragment.appendChild($coverSetting_template);
        return $fragment;
      };
      const ruleEditSubmitHandler = ($form, isEdit, editData) => {
        let $ulist_li = $form.querySelectorAll(".rule-form-ulist > li");
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
            data,
          };
        }
        if (data.url.trim() === "") {
          Qmsg.error("匹配网址不能为空");
          return {
            success: false,
            data,
          };
        }
        if (isEdit) {
          return {
            success: this.updateRule(data),
            data,
          };
        } else {
          return {
            success: this.addRule(data),
            data,
          };
        }
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
            return `
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
                )}${
                  typeof subscribeOption.data.updateFailedTime === "number"
                    ? `，<span style="color: red;">更新失败于：${utils.formatTime(
                        subscribeOption.data.updateFailedTime,
                        "yyyy年MM月dd日 HH:mm:ss"
                      )}</span>`
                    : ``
                }</div>
								${subscribeOption.subscribeData.homePage ? `<a href="${subscribeOption.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${subscribeOption.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`;
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
              enable: true,
            },
            filter: {
              enable: true,
              title: "过滤订阅",
              option: [
                {
                  name: "过滤【已启用】的订阅",
                  filterCallBack(data) {
                    return data.data.enable;
                  },
                },
                {
                  name: "过滤【未启用】的订阅",
                  filterCallBack(data) {
                    return !data.data.enable;
                  },
                },
              ],
            },
            clearAll: {
              enable: true,
              callback: () => {
                WebsiteSubscribeRule.deleteAllSubscribe();
              },
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.data.enable;
              },
              async callback(data, enable) {
                data.data.enable = enable;
                WebsiteSubscribeRule.updateSubscribe(data);
              },
            },
            ruleEdit: {
              enable: true,
              callback: (option) => {
                let subscribeUUID = option.ruleData.uuid;
                option.enterDeepMenu({
                  headerTitle:
                    option.ruleData.data.title || option.ruleData.subscribeData.title || option.ruleData.data.url,
                  data() {
                    let currentData = WebsiteSubscribeRule.getSubscribe(subscribeUUID);
                    return currentData?.subscribeData?.ruleData ?? option.ruleData.subscribeData.ruleData;
                  },
                  getData(data) {
                    let currentData = WebsiteSubscribeRule.getSubscribeRule(subscribeUUID, data.uuid);
                    return currentData ?? data;
                  },
                  getDataItemName(data) {
                    return data.name ?? data.url;
                  },
                  addData(data) {
                    return true;
                  },
                  updateData(data) {
                    return WebsiteSubscribeRule.updateSubscribeRule(subscribeUUID, data);
                  },
                  deleteData(data) {
                    return WebsiteSubscribeRule.deleteSubscribeRule(subscribeUUID, data);
                  },
                  btnControls: {
                    filter: {
                      enable: true,
                      title: "规则过滤",
                      option: [
                        {
                          name: "仅显示【已启用】的规则",
                          filterCallBack(data) {
                            return data.data.enable;
                          },
                        },
                        {
                          name: "仅显示【未启用】的规则",
                          filterCallBack(data) {
                            return !data.data.enable;
                          },
                        },
                      ],
                    },
                    clearAll: {
                      enable: true,
                      callback: () => {
                        WebsiteSubscribeRule.clearSubscribe(subscribeUUID);
                      },
                    },
                    ruleEnable: {
                      enable: true,
                      getEnable(data) {
                        return data.enable;
                      },
                      callback(data, enable) {
                        data.data.enable = enable;
                        WebsiteSubscribeRule.updateSubscribeRule(subscribeUUID, data);
                      },
                    },
                    ruleEdit: {
                      enable: true,
                      getView: (data, isEdit) => {
                        return ruleEditHandler(data, isEdit, subscribeUUID);
                      },
                      onsubmit: ruleEditSubmitHandler,
                    },
                    ruleDelete: {
                      enable: true,
                      deleteCallBack(data) {
                        return WebsiteSubscribeRule.deleteSubscribeRule(subscribeUUID, data);
                      },
                    },
                  },
                });
                return false;
              },
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return WebsiteSubscribeRule.deleteSubscribe(data);
              },
            },
            import: {
              enable: true,
              callback(updateView) {
                WebsiteSubscribeRule.importSubscribe(() => {
                  updateView();
                });
              },
            },
            export: {
              enable: true,
              callback() {
                WebsiteSubscribeRule.exportSubscribe(_SCRIPT_NAME_ + "-网站规则-订阅.json");
              },
            },
          },
          getSubscribeInfo: WebsiteSubscribeRule.getSubscribeInfo.bind(WebsiteSubscribeRule),
        },
        ruleOption: {
          btnControls: {
            add: {
              enable: true,
            },
            filter: {
              enable: true,
              title: "规则过滤",
              option: [
                {
                  name: "仅显示【已启用】的规则",
                  filterCallBack(data) {
                    return data.enable;
                  },
                },
                {
                  name: "仅显示【未启用】的规则",
                  filterCallBack(data) {
                    return !data.enable;
                  },
                },
                {
                  name: "仅显示【在当前网址生效】的规则",
                  filterCallBack(data) {
                    return that.checkRuleMatch(data);
                  },
                },
              ],
            },
            clearAll: {
              enable: true,
              callback: () => {
                that.deleteAllRule();
              },
            },
            import: {
              enable: true,
              callback: (updateView) => {
                that.importRule(() => {
                  updateView();
                });
              },
            },
            export: {
              enable: true,
              callback: () => {
                that.exportRule(_SCRIPT_NAME_ + "-网站规则.json", _SCRIPT_NAME_ + "-网站规则-订阅模式.json");
              },
            },
            ruleEnable: {
              enable: true,
              getEnable(data) {
                return data.enable;
              },
              callback: (data, enable) => {
                data.enable = enable;
                that.updateRule(data);
              },
            },
            ruleEdit: {
              enable: true,
              getView: ruleEditHandler,
              onsubmit: ruleEditSubmitHandler,
            },
            ruleDelete: {
              enable: true,
              deleteCallBack: (data) => {
                return that.deleteRule(data.uuid);
              },
            },
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
          },
        },
      };
      return rulePanelViewOption;
    },
    addRule(rule) {
      const allRule = this.getAllRule();
      allRule.push(rule);
      WebsiteRuleStorageApi.set(this.$data.STORAGE_KEY, allRule);
      return true;
    },
    getRule(uuid) {
      const findValue = this.getAllRule().find((rule) => rule.uuid === uuid);
      if (findValue) {
        return findValue;
      }
      const findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find((rule) => {
        return rule.uuid === uuid;
      });
      return findSubscribeRule;
    },
    getRuleData(uuid) {
      if (typeof uuid === "string") {
        return this.getRule(uuid).data;
      } else {
        return uuid.data;
      }
    },
    getRuleDataValue(uuid, key, defaultValue) {
      const ruleData = this.getRuleData(uuid);
      return (ruleData && Reflect.get(ruleData, key)) ?? defaultValue;
    },
    updateRule(rule) {
      const allRule = this.getAllRule();
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
        const findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find((it) => {
          return it.uuid === rule.uuid;
        });
        if (findSubscribeRule) {
          flag = WebsiteSubscribeRule.updateSubscribeRule(rule.subscribeUUID, rule);
        }
      }
      return flag;
    },
    deleteRule(uuid) {
      const allRule = this.getAllRule();
      let flag = false;
      const needDeleteRuleUUID = typeof uuid === "string" ? uuid : uuid.uuid;
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
        const findSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule().find((it) => {
          return it.uuid === needDeleteRuleUUID;
        });
        if (findSubscribeRule) {
          flag = WebsiteSubscribeRule.deleteSubscribeRule(findSubscribeRule.subscribeUUID, findSubscribeRule);
        }
      }
      return flag;
    },
    deleteAllRule() {
      WebsiteRuleStorageApi.delete(this.$data.STORAGE_KEY);
    },
    getAllRule() {
      const allRule = WebsiteRuleStorageApi.get(this.$data.STORAGE_KEY, []);
      return allRule;
    },
    checkRuleMatch(rule, url = window.location.href) {
      const matchRegExp = new RegExp(rule.url, "ig");
      return Boolean(url.match(matchRegExp));
    },
    getUrlMatchedRule(filterUnEnable = true, url = window.location.href) {
      let allRule = this.getAllRule();
      const allSubscribeRule = WebsiteSubscribeRule.getAllSubscribeRule(true);
      allRule = allRule.concat(allSubscribeRule);
      const matchedRule = allRule.filter((rule) => {
        if (filterUnEnable && !rule.enable) {
          return false;
        }
        return this.checkRuleMatch(rule, url);
      });
      return matchedRule;
    },
    exportRule(fileName = "rule.json", subscribeFileName = "rule-subscribe.json") {
      const $alert = NetDiskPops.alert({
        title: {
          text: "请选择导出方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
            `,
      });
      let $onlyExportRuleList = $alert.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']");
      let $exportToSubscribe = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-subscribe']");
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
        domUtils.preventEvent(event);
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
        domUtils.preventEvent(event);
        const that = this;
        $alert.close();
        try {
          let allRule = this.getAllRule();
          if (allRule.length === 0) {
            Qmsg.warning("规则为空，无需导出");
            return;
          }
          let panelHandlerComponents = __pops.config.PanelHandlerComponents();
          let generateStorageApi = function (data) {
            return {
              get(key, defaultValue) {
                return data[key] ?? defaultValue;
              },
              set(key, value) {
                data[key] = value;
                WebsiteRuleStorageApi.set(that.$data.EXPORT_CONFIG_KEY, data);
              },
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
              position: "center",
            },
            content: {
              text: `
							
						`,
              html: true,
            },
            btn: {
              ok: {
                enable: true,
                text: "导出",
                callback(details, event2) {
                  exportCallBack();
                },
              },
              close: {
                enable: true,
                callback(details, event2) {
                  details.close();
                },
              },
            },
            mask: {
              enable: true,
            },
            drag: true,
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
						${__pops.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`,
          });
          let $content = $exportSubscribeDialog.$shadowRoot.querySelector(".pops-alert-content");
          let configData = WebsiteRuleStorageApi.get(this.$data.EXPORT_CONFIG_KEY, {});
          let title_template = UIInput("订阅标题", "title", "", "", void 0, "");
          Reflect.set(title_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $title = panelHandlerComponents.createSectionContainerItem_input(title_template);
          let version_template = UIInput("版本号", "version", "", "", void 0, "", false);
          Reflect.set(version_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $version = panelHandlerComponents.createSectionContainerItem_input(version_template);
          let homePage_template = UIInput("主页地址", "homePage", "", "", void 0, "选填");
          Reflect.set(homePage_template.props, PROPS_STORAGE_API, generateStorageApi(configData));
          let $homePage = panelHandlerComponents.createSectionContainerItem_input(homePage_template);
          domUtils.append($content, $title);
          domUtils.append($content, $version);
          domUtils.append($content, $homePage);
        } catch (error) {
          Qmsg.error(error.toString(), { consoleLogContent: true });
        }
      });
    },
    importRule(importEndCallBack) {
      let $alert = NetDiskPops.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
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
            `,
      });
      let $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
      let $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
      let $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
      let updateRuleToStorage = (data) => {
        let allData = this.getAllRule();
        let addNewData = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1);
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
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json",
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
        domUtils.preventEvent(event);
        $alert.close();
        let $prompt = NetDiskPops.prompt({
          title: {
            text: "网络导入",
            position: "center",
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true,
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              },
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
                  allowInterceptConfig: false,
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
              },
            },
            cancel: {
              enable: false,
            },
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto",
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          let value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
          if (keyName === "Enter" && otherCodeList.length === 0) {
            let value = domUtils.val($promptInput);
            if (value !== "") {
              domUtils.trigger($promptOk, "click");
            }
          }
        });
        domUtils.trigger($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        domUtils.preventEvent(event);
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
    },
  };
  const WebsiteProxyGlobalValue = (key, value, defaultValue) => {
    if (WebsiteRule.$data.isShowEditView) {
      return value ?? defaultValue;
    }
    let matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();
    let findValue = matchedUrlRuleList.find((item) => {
      let data = WebsiteRule.getRuleData(item);
      return Reflect.has(data, key);
    });
    if (findValue) {
      return Reflect.get(WebsiteRule.getRuleData(findValue), key);
    } else {
      return value ?? defaultValue;
    }
  };
  const GenerateProxyStorage = function (key, defaultValue, proxyValueCallBack) {
    return {
      get KEY() {
        return key;
      },
      get default() {
        return defaultValue;
      },
      get value() {
        let currentValue = _GM_getValue(key, this.default);
        if (typeof proxyValueCallBack === "function") {
          return proxyValueCallBack(key, currentValue, this.default);
        }
        return currentValue;
      },
      set value(newValue) {
        _GM_setValue(key, newValue);
      },
    };
  };
  const GeneratePanelStorage = function (key, defaultValue) {
    return GenerateProxyStorage(key, defaultValue, WebsiteProxyGlobalValue);
  };
  const NetDiskGlobalData = {
    toast: {
      position: GeneratePanelStorage("qmsg-config-position", "top"),
      maxnums: GeneratePanelStorage("qmsg-config-maxnums", 3),
      showreverse: GeneratePanelStorage("qmsg-config-showreverse", true),
    },
    pops: {
      popsAnimation: GeneratePanelStorage("popsAnimation", "pops-anim-fadein-zoom"),
      clickMaskToCloseDialog: GeneratePanelStorage("clickMaskToCloseDialog", true),
      pcDrag: GeneratePanelStorage("pcDrag", true),
      pcDragLimit: GeneratePanelStorage("pcDragLimit", true),
      popsAcrylic: GeneratePanelStorage("popsAcrylic", false),
    },
    popsFolder: {
      "pops-folder-sort-name": GeneratePanelStorage("pops-folder-sort-name", "fileName"),
      "pops-folder-sort-is-desc": GeneratePanelStorage("pops-folder-sort-is-desc", false),
    },
    smallIconNavgiator: {
      "pops-netdisk-icon-click-event-find-sharecode": GeneratePanelStorage(
        "pops-netdisk-icon-click-event-find-sharecode",
        true
      ),
      "pops-netdisk-icon-click-event-find-sharecode-with-select": GeneratePanelStorage(
        "pops-netdisk-icon-click-event-find-sharecode-with-select",
        true
      ),
      "pops-netdisk-icon-click-event-loop-find-sharecode": GeneratePanelStorage(
        "pops-netdisk-icon-click-event-loop-find-sharecode",
        true
      ),
    },
    suspension: {
      size: GeneratePanelStorage("size", 50),
      opacity: GeneratePanelStorage("opacity", 1),
      "randbg-time": GeneratePanelStorage("randbg-time", 1500),
      "randbg-show-time": GeneratePanelStorage("randbg-show-time", 1200),
      "suspended-button-adsorption-edge": GeneratePanelStorage("suspended-button-adsorption-edge", false),
      "suspended-z-index": GeneratePanelStorage("suspended-z-index", -1),
    },
    smallWindow: {
      "netdisk-ui-small-window-width": GeneratePanelStorage("netdisk-ui-small-window-width", 250),
      "netdisk-ui-small-window-max-height": GeneratePanelStorage("netdisk-ui-small-window-max-height", 200),
      "netdisk-link-view-z-index": GeneratePanelStorage("netdisk-link-view-z-index", -1),
      "netdisk-ui-link-view-data-paging-enable": GeneratePanelStorage("netdisk-ui-link-view-data-paging-enable", false),
      "netdisk-ui-link-view-data-paging-show-data-count": GeneratePanelStorage(
        "netdisk-ui-link-view-data-paging-show-data-count",
        10
      ),
    },
    historyMatch: {
      saveMatchNetDisk: GeneratePanelStorage("saveMatchNetDisk", false),
      "netdisk-history-match-ordering-rule": GeneratePanelStorage(
        "netdisk-history-match-ordering-rule",
        "按 更新时间 - 降序"
      ),
      "netdisk-history-match-merge-same-link": GeneratePanelStorage("netdisk-history-match-merge-same-link", true),
    },
    match: {
      pageMatchRange: GeneratePanelStorage("pageMatchRange", ["innerText", "innerHTML"]),
      depthQueryWithShadowRoot: GeneratePanelStorage("depthQueryWithShadowRoot", false),
      readClipboard: GeneratePanelStorage("readClipboard", false),
      allowMatchLocationHref: GeneratePanelStorage("allowMatchLocationHref", true),
      toBeMatchedWithInputElementValue: GeneratePanelStorage("to-be-matched-inputElementValue", false),
      toBeMatchedTextAreaElementValue: GeneratePanelStorage("to-be-matched-textAreaElementValue", false),
      toBeMatchedXhrHookResponseText: GeneratePanelStorage("to-be-matched-xhrHookResponseText", false),
      delaytime: GeneratePanelStorage("delaytime", 0.8),
      isAddedNodesToMatch: GeneratePanelStorage("isAddedNodesToMatch", false),
      "mutationObserver-childList": GeneratePanelStorage("mutationObserver-childList", true),
      "mutationObserver-characterData": GeneratePanelStorage("mutationObserver-characterData", true),
      "mutationObserver-subtree": GeneratePanelStorage("mutationObserver-subtree", true),
    },
    features: {
      "netdisk-match-mode": GeneratePanelStorage("netdisk-match-mode", "MutationObserver"),
      "netdisk-behavior-mode": GeneratePanelStorage("netdisk-behavior-mode", "suspension_smallwindow"),
      autoFillAccessCode: GeneratePanelStorage("autoFillAccessCode", true),
    },
    shareCode: {
      excludeIdenticalSharedCodesCoefficient: GeneratePanelStorage("excludeIdenticalSharedCodesCoefficient", 1),
      excludeIdenticalSharedCodes: GeneratePanelStorage("excludeIdenticalSharedCodes", false),
    },
    accessCode: {
      allowQueryHistoryMatchingAccessCode: GeneratePanelStorage("allowQueryHistoryMatchingAccessCode", true),
    },
  };
  const NetDisk = {
    $data: {
      isMatchedLink: false,
      clipboardText: "",
    },
    $match: {
      matchedInfo: new Utils.Dictionary(),
      blackMatchedInfo: new Utils.Dictionary(),
      tempMatchedInfo: new Utils.Dictionary(),
      matchedInfoRuleKey: new Set(),
    },
    $rule: {
      ruleOption: {},
      ruleSetting: {},
      rule: [],
    },
    $extraRule: {
      shareCodeNotMatchRegExpList: [
        /vipstyle|notexist|ajax|file|download|ptqrshow|xy-privacy/g,
        /comp|web|undefined|1125|unproved|console|account|favicon|setc/g,
      ],
      accessCodeNotMatchRegExpList: [/^(font|http)/gi],
      accessCodeNeedRemoveStr: [
        "：",
        " ",
        ":",
        "\n",
        "提取码",
        "密码",
        "?password=",
        "?pwd=",
        "&pwd=",
        "?p=",
        "访问码",
      ],
      noAccessCodeRegExp: [
        /( |提取码:|\n密码：)/gi,
        /{#accessCode#}/gi,
        /{#encodeURI-accessCode#}|{#encodeURIComponent-accessCode#}/gi,
        /{#decodeURI-accessCode#}|{#decodeURIComponent-accessCode#}/gi,
        /(\?pwd=|&pwd=|\?password=|\?p=)/gi,
      ],
    },
    init() {
      this.initLinkDict();
    },
    initLinkDict() {
      const ruleOptionKeys = Object.keys(this.$rule.ruleOption);
      ruleOptionKeys.forEach((ruleKeyName) => {
        this.$match.matchedInfo.set(ruleKeyName, new utils.Dictionary());
        this.$match.blackMatchedInfo.set(ruleKeyName, new utils.Dictionary());
        this.$match.tempMatchedInfo.set(ruleKeyName, new utils.Dictionary());
      });
      const matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();
      if (matchedUrlRuleList.length) {
        log.info("成功命中的网站规则 ==> ", matchedUrlRuleList);
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
            const ruleList = [];
            const subscribeRuleList = [];
            matchedUrlRuleList.forEach((rule) => {
              if (rule.subscribeUUID) {
                subscribeRuleList.push(rule);
              } else {
                ruleList.push(rule);
              }
            });
            let alertMessage = "";
            if (ruleList.length) {
              alertMessage += ["=====↓↓↓ 以下是本地的规则名 ↓↓↓====="]
                .concat(ruleList.map((it) => it.name ?? it.url))
                .join("\n");
            }
            if (subscribeRuleList.length) {
              alertMessage += "\n\n\n";
              alertMessage += ["=====↓↓↓ 以下是订阅的规则名 ↓↓↓====="]
                .concat(subscribeRuleList.map((it) => it.name ?? it.url))
                .join("\n");
            }
            window.alert(alertMessage);
          },
        });
      }
      const matchedCharacterMappingRuleList = CharacterMapping.getUrlMatchedRule();
      if (matchedCharacterMappingRuleList.length) {
        log.info("成功命中的字符规则 ==> ", matchedCharacterMappingRuleList);
        GM_Menu.add({
          key: "characterMapping",
          text: `🌏 命中字符规则 ${matchedCharacterMappingRuleList.length} 条`,
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
            const ruleList = [];
            const subscribeRuleList = [];
            matchedCharacterMappingRuleList.forEach((rule) => {
              if (rule.subscribeUUID) {
                subscribeRuleList.push(rule);
              } else {
                ruleList.push(rule);
              }
            });
            let alertMessage = "";
            if (ruleList.length) {
              alertMessage += ["=====↓↓↓ 以下是本地的规则名 ↓↓↓====="]
                .concat(ruleList.map((it) => it.name ?? it.data.url))
                .join("\n");
            }
            if (subscribeRuleList.length) {
              alertMessage += "\n\n\n";
              alertMessage += ["=====↓↓↓ 以下是订阅的规则名 ↓↓↓====="]
                .concat(subscribeRuleList.map((it) => it.name ?? it.data.url))
                .join("\n");
            }
            window.alert(alertMessage);
          },
        });
      }
    },
    handleLink(handlerConfig) {
      const shareCode = this.handleShareCode(handlerConfig);
      if (utils.isNull(shareCode)) {
        return;
      }
      let accessCode = this.handleAccessCode(handlerConfig);
      accessCode = this.handleAccessCodeByUserRule({
        ...handlerConfig,
        accessCode,
      });
      return {
        shareCode,
        accessCode,
      };
    },
    handleShareCode(handlerConfig) {
      const ruleConfig =
        handlerConfig?.debugConfig?.config ?? this.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      const shareCodeMatch = handlerConfig.matchText
        .match(ruleConfig.shareCode)
        ?.filter((item) => utils.isNotNull(item));
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`正则: shareCode`, "作用: 获取shareCode", "结果: ", JSON.stringify(shareCodeMatch)],
      });
      if (utils.isNull(shareCodeMatch)) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: `匹配shareCode为空`,
        });
        return;
      }
      let shareCode = shareCodeMatch[0];
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`取第一个值: ` + shareCode],
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
            msg: [`正则: shareCodeNeedRemoveStr`, "作用: 删除ShareCode前面不需要的字符串", `结果: ${shareCode}`],
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
              `结果: true 该shareCode不是正确的`,
            ],
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
                `结果: true 该shareCode不是正确的`,
              ],
            });
            return;
          }
        }
      }
      shareCode = decodeURI(shareCode);
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: ["对shareCode进行解码: " + shareCode],
      });
      if (
        NetDiskGlobalData.shareCode.excludeIdenticalSharedCodes.value &&
        utils.isSameChars(shareCode, NetDiskGlobalData.shareCode.excludeIdenticalSharedCodesCoefficient.value)
      ) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: ["已开启【排除分享码】且该分享码命中该规则"],
        });
        return;
      }
      if (shareCode.endsWith("http") || shareCode.endsWith("https")) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: ["该分享码以http|https结尾"],
        });
        return;
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的shareCode: " + shareCode,
      });
      return shareCode;
    },
    handleAccessCode(handlerConfig) {
      const ruleConfig =
        handlerConfig.debugConfig?.config ?? this.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let accessCode = "";
      if (!ruleConfig.checkAccessCode) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: "因未配置规则checkAccessCode，默认accessCode的值为空",
        });
        return "";
      }
      const accessCodeMatch = handlerConfig.matchText.match(ruleConfig.checkAccessCode);
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: checkAccessCode`,
          "作用: 用来判断link_innerText或者link_innerHTML匹配到的字符串中是否存在密码",
          `结果: `,
          JSON.stringify(accessCodeMatch),
        ],
      });
      if (accessCodeMatch) {
        const accessCodeMatchValue = accessCodeMatch[accessCodeMatch.length - 1];
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: "取最后一个值: " + accessCodeMatchValue,
        });
        const accessCodeMatchArray = accessCodeMatchValue
          .match(ruleConfig.accessCode)
          ?.filter((item) => utils.isNotNull(item));
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: accessCode`,
            "作用: 用来提取link_innerText或者link_innerHTML匹配到的字符串中的密码",
            `结果: `,
            JSON.stringify(accessCodeMatchArray),
          ],
        });
        if (utils.isNull(accessCodeMatchArray)) {
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: "因↑匹配到的结果为空，默认accessCode的值为空",
          });
          return "";
        }
        if (accessCodeMatchArray.length) {
          accessCode = accessCodeMatchArray[0];
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: "取第一个值: " + accessCode,
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
                `结果: true 重置accessCode为空`,
              ],
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
                  `结果: true 重置accessCode为空`,
                ],
              });
              break;
            }
          }
        }
        for (const accessCodeNeedRemoveStrRegExp of NetDisk.$extraRule.accessCodeNeedRemoveStr) {
          accessCode = NetDiskHandlerUtil.replaceText(accessCode, accessCodeNeedRemoveStrRegExp, "");
        }
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: 内置的accessCodeNeedRemoveStr`,
            "作用: 用于处理提取到的accessCode删除部分不需要的字符串",
            `结果: ${accessCode}`,
          ],
        });
        const accessCodeNeedRemoveStr = ruleConfig.accessCodeNeedRemoveStr;
        if (accessCodeNeedRemoveStr) {
          accessCode = NetDiskHandlerUtil.replaceText(accessCode, accessCodeNeedRemoveStr, "");
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: [
              `正则: accessCodeNeedRemoveStr`,
              "作用: 用于处理提取到的accessCode删除部分不需要的字符串",
              `结果: true 重置accessCode为空`,
            ],
          });
        }
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的accessCode: " + accessCode,
      });
      return accessCode;
    },
    handleAccessCodeByUserRule(handlerConfig) {
      const ruleConfigList = WebsiteRule.getUrlMatchedRule();
      let result = handlerConfig.accessCode;
      for (let index = 0; index < ruleConfigList.length; index++) {
        const ruleConfig = ruleConfigList[index];
        const ruleData = WebsiteRule.getRuleData(ruleConfig);
        const customAccessCode = Reflect.get(
          ruleData,
          WebsiteRuleDataKey.features.customAccessCode(handlerConfig.ruleKeyName)
        );
        const customAccessCodeEnable = Reflect.get(
          ruleData,
          WebsiteRuleDataKey.features.customAccessCodeEnable(handlerConfig.ruleKeyName)
        );
        if (customAccessCodeEnable && typeof customAccessCode === "string") {
          result = customAccessCode;
          break;
        }
      }
      return result;
    },
    handleLinkShow(handlerConfig) {
      const checkFlag = handlerConfig.debugConfig?.config
        ? true
        : this.checkHasRuleOption(handlerConfig.ruleKeyName, handlerConfig.ruleIndex);
      if (!checkFlag) {
        log.error(`BUG: ${handlerConfig.ruleKeyName}不存在，分析参数`, handlerConfig);
        (handlerConfig.showToast ?? true) && Qmsg.error(`规则：${handlerConfig.ruleKeyName}不存在`);
        return;
      }
      const ruleConfig =
        handlerConfig.debugConfig?.config ??
        NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      let uiLink = NetDiskRuleUtils.replaceParam(ruleConfig.uiLinkShow, {
        shareCode: handlerConfig.shareCode,
      });
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`正则: uiLinkShow`, "作用: 用于显示在弹窗中的字符串", "备注: 对shareCode进行参数替换", `结果: ${uiLink}`],
      });
      if (typeof handlerConfig.accessCode === "string" && handlerConfig.accessCode.trim() != "") {
        uiLink = NetDiskRuleUtils.replaceParam(uiLink, {
          accessCode: handlerConfig.accessCode,
        });
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: uiLinkShow`,
            "作用: 用于显示在弹窗中的字符串",
            "备注: 对accessCode进行参数替换",
            `结果: ${uiLink}`,
          ],
        });
      } else {
        uiLink = NetDiskHandlerUtil.replaceText(uiLink, NetDisk.$extraRule.noAccessCodeRegExp, "");
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: 内置的noAccessCodeRegExp`,
            "作用: 因accessCode为空，使用该正则去除不需要的字符串",
            `结果: ${uiLink}`,
          ],
        });
      }
      if (ruleConfig.paramMatch) {
        const currentDict = NetDisk.$match.matchedInfo.get(handlerConfig.ruleKeyName).get(handlerConfig.shareCode);
        handlerConfig.matchText = handlerConfig.matchText ?? currentDict?.matchText;
        if (utils.isNotNull(handlerConfig.matchText)) {
          const paramMatchArray = handlerConfig.matchText.match(ruleConfig.paramMatch);
          const replaceParamData = {};
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
              `结果: ${uiLink}`,
            ],
          });
        }
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的uiLink: " + uiLink,
      });
      return uiLink;
    },
    createLinkStorageInst(accessCode, ruleIndex = 0, isForceAccessCode = false, matchText) {
      return {
        accessCode,
        ruleIndex,
        isForceAccessCode,
        matchText,
        matchTime: performance.now(),
      };
    },
    checkHasRuleOption(ruleKeyName, ruleIndex) {
      const ruleConfig = NetDisk.$rule.ruleOption?.[ruleKeyName];
      if (!Array.isArray(ruleConfig)) {
        return false;
      }
      if (typeof ruleIndex === "number") {
        if (ruleIndex < 0 || ruleConfig.length <= ruleIndex) {
          return false;
        }
      }
      return true;
    },
  };
  class ShortCut {
    key = "short-cut";
    $data;
    isWaitPress = false;
    currentWaitEnterPressInstanceHandler = null;
    constructor(key) {
      if (typeof key === "string") {
        this.key = key;
      }
      this.$data = {
        otherShortCutOptions: [],
      };
    }
    initConfig(key, option) {
      if (this.hasOption(key));
      else {
        this.setOption(key, option);
      }
    }
    getStorageKey() {
      return this.key;
    }
    getLocalAllOptions() {
      return _GM_getValue(this.key, []);
    }
    hasOption(key) {
      let localOptions = this.getLocalAllOptions();
      let findOption = localOptions.find((item) => item.key === key);
      return !!findOption;
    }
    hasOptionValue(key) {
      if (this.hasOption(key)) {
        let option = this.getOption(key);
        return !(option?.value == null);
      } else {
        return false;
      }
    }
    getOption(key, defaultValue) {
      let localOptions = this.getLocalAllOptions();
      let findOption = localOptions.find((item) => item.key === key);
      return findOption ?? defaultValue;
    }
    setOption(key, value) {
      let localOptions = this.getLocalAllOptions();
      let findIndex = localOptions.findIndex((item) => item.key === key);
      if (findIndex == -1) {
        localOptions.push({
          key,
          value,
        });
      } else {
        Reflect.set(localOptions[findIndex], "value", value);
      }
      _GM_setValue(this.key, localOptions);
    }
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
    translateKeyboardValueToButtonText(keyboardValue) {
      let result = "";
      keyboardValue.ohterCodeList.forEach((ohterCodeKey) => {
        result += utils.stringTitleToUpperCase(ohterCodeKey, true) + " + ";
      });
      result += utils.stringTitleToUpperCase(keyboardValue.keyName);
      return result;
    }
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
    async enterShortcutKeys(key) {
      const that = this;
      return new Promise((resolve) => {
        this.isWaitPress = true;
        let keyboardListener = domUtils.listenKeyboard(window, "keyup", (keyName, keyValue, ohterCodeList) => {
          const currentOption = {
            keyName,
            keyValue,
            ohterCodeList,
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
                  option: currentOption,
                };
                return;
              }
            }
            this.setOption(key, currentOption);
            result = {
              status: true,
              key,
              option: currentOption,
            };
          } catch (error) {
            console.log(error);
            result = {
              status: false,
              key,
              option: currentOption,
            };
          } finally {
            that.isWaitPress = false;
            keyboardListener.removeListen();
            that.currentWaitEnterPressInstanceHandler = null;
            resolve(result);
          }
        });
        that.currentWaitEnterPressInstanceHandler = null;
        that.currentWaitEnterPressInstanceHandler = () => {
          that.isWaitPress = false;
          keyboardListener.removeListen();
        };
      });
    }
    cancelEnterShortcutKeys() {
      if (typeof this.currentWaitEnterPressInstanceHandler === "function") {
        this.currentWaitEnterPressInstanceHandler();
      }
    }
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
              domUtils.preventEvent(event);
            }
            localOptions = that.getLocalAllOptions();
            let findShortcutIndex = localOptions.findIndex((item) => {
              let option2 = item.value;
              let tempOption = {
                keyName,
                keyValue,
                ohterCodeList,
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
            capture: Boolean(config?.capture),
          }
        );
      }
      let WindowShortCutOption = {};
      let ElementShortCutOption = {};
      Object.keys(shortCutOption).forEach((localKey) => {
        let option = shortCutOption[localKey];
        if (option.target == null || (typeof option.target === "string" && option.target === "")) {
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
            domUtils.waitNode(option.target, 1e4).then(($ele) => {
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
            NetDiskSettingView.show();
          },
        },
        "netdisk-keyboard-open-history-matching-records": {
          target: "window",
          callback: () => {
            log.info("快捷键 ==> 【打开】⚙ 历史匹配记录");
            NetDiskView.$inst.historyMatch.show();
          },
        },
        "netdisk-keyboard-open-user-rule": {
          target: "window",
          callback: () => {
            log.info("快捷键 ==> 【打开】⚙ 链接识别规则");
            NetDiskUserRuleUI.show(false);
          },
        },
        "netdisk-keyboard-open-proactively-recognize-text": {
          target: "window",
          callback: () => {
            log.info("快捷键 ==> 【打开】⚙ 主动识别文本");
            NetDiskView.$inst.matchPasteText.show();
          },
        },
        "netdisk-keyboard-performPageTextMatchingManually": {
          target: "window",
          callback() {
            log.info("快捷键 ==> 执行文本匹配");
            NetDiskWorker.dispatchMonitorDOMChange = true;
          },
        },
        "netdisk-keyboard-character-mapping": {
          target: "window",
          callback() {
            log.info("快捷键 ==> 【打开】⚙ 字符映射规则");
            NetDiskRuleManager.showView("字符映射");
          },
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
              matchedRuleOption: NetDisk.$rule.ruleOption,
              startTime: Date.now(),
              from: "ShortCut-Select-Content",
            });
          },
        },
      };
    },
  };
  const UIButtonShortCut = function (
    text,
    description,
    key,
    defaultValue,
    defaultButtonText,
    buttonType = "default",
    shortCut
  ) {
    let __defaultButtonText = defaultButtonText;
    let getButtonText = () => {
      return shortCut.getShowText(key, __defaultButtonText);
    };
    let result = UIButton(text, description, getButtonText, "keyboard", false, false, buttonType, async (event) => {
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
          },
        });
        let { status, option, key: isUsedKey } = await shortCut.enterShortcutKeys(key);
        loadingQmsg.close();
        if (status) {
          log.success(["成功录入快捷键", option]);
          Qmsg.success("成功录入");
        } else {
          Qmsg.error(`快捷键 ${shortCut.translateKeyboardValueToButtonText(option)} 已被 ${isUsedKey} 占用`);
        }
      }
      $btn.innerHTML = getButtonText();
    });
    result.attributes = {};
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      return false;
    });
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
                      void 0,
                      `默认: ${NetDiskGlobalData.toast.maxnums.default}`
                    ),
                    UISwitch(
                      "逆序弹出",
                      NetDiskGlobalData.toast.showreverse.KEY,
                      NetDiskGlobalData.toast.showreverse.value,
                      void 0,
                      "默认是自上往下显示Toast，逆序则是自下往上显示Toast"
                    ),
                  ],
                },
              ],
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
                    ),
                  ],
                },
              ],
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
                          text: "文件名",
                        },
                        {
                          value: "latestTime",
                          text: "修改时间",
                        },
                        {
                          value: "fileSize",
                          text: "大小",
                        },
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
                          text: "升序",
                        },
                        {
                          value: true,
                          text: "降序",
                        },
                      ],
                      void 0,
                      "当前的规则"
                    ),
                  ],
                },
              ],
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
                        NetDiskGlobalData.suspension.size.value = parseInt(value.toString());
                        if (NetDiskView.$inst.suspension.$data.isShow) {
                          DOMUtils.css(NetDiskView.$inst.suspension.$el.$suspension, {
                            width: NetDiskGlobalData.suspension.size.value,
                            height: NetDiskGlobalData.suspension.size.value,
                          });
                          NetDiskView.$inst.suspension.updatePosition(true);
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
                        NetDiskGlobalData.suspension.opacity.value = parseFloat(value.toString());
                        if (NetDiskView.$inst.suspension.$data.isShow) {
                          DOMUtils.css(NetDiskView.$inst.suspension.$el.$suspension, {
                            opacity: NetDiskGlobalData.suspension.opacity.value,
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
                      "移动悬浮按钮松开后自动吸附边缘",
                      void 0,
                      void 0,
                      () => {
                        NetDiskSuspension.updatePosition(false);
                      }
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
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "大/小链接弹窗",
              forms: [
                {
                  type: "forms",
                  text: "通用配置",
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
                    ),
                  ],
                },
                {
                  type: "forms",
                  text: "数据分页显示",
                  forms: [
                    UISwitch(
                      "启用",
                      NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-enable"].KEY,
                      NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-enable"].default,
                      void 0,
                      "如果页面的数据量大，建议开启分页以显示防止卡顿"
                    ),
                    UIInput(
                      "分页数量",
                      NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].KEY,
                      NetDiskGlobalData.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].default,
                      "每页显示的数据数量",
                      void 0,
                      "默认：10",
                      true
                    ),
                  ],
                },
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
                      "设置小窗最大高度(px)，默认: " +
                        NetDiskGlobalData.smallWindow["netdisk-ui-small-window-max-height"].default,
                      1
                    ),
                  ],
                },
              ],
            },
          ],
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
                          value: "MutationObserver",
                        },
                        {
                          text: "Menu",
                          value: "Menu",
                        },
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
                          value: "suspension_smallwindow",
                        },
                        {
                          text: "悬浮按钮+大窗",
                          value: "suspension_window",
                        },
                        {
                          text: "小窗",
                          value: "smallwindow",
                        },
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
                    ),
                  ],
                },
              ],
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
                          text: "普通文本",
                        },
                        {
                          value: "innerHTML",
                          text: "超文本",
                        },
                      ],
                      void 0,
                      "执行的文本匹配规则",
                      void 0,
                      {
                        height: "auto",
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
                    ),
                  ],
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
                    ),
                  ],
                },
              ],
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
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"]
                        .KEY,
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"]
                        .default,
                      void 0,
                      "使用光标选中分享码/元素"
                    ),
                    UISwitch(
                      "循环定位",
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].KEY,
                      NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].default,
                      void 0,
                      "关闭则是每一个元素只定位一次"
                    ),
                  ],
                },
              ],
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
                        DOMUtils.preventEvent(event);
                        try {
                          const { count, repairCount } = NetDiskView.$inst.historyMatch.checkAndRepairLocalData();
                          if (repairCount === 0) {
                            Qmsg.info(`不存在需要修复的数据`);
                          } else {
                            Qmsg.success(`共计: ${count} 条，修复${repairCount}条`);
                          }
                        } catch (error) {
                          Qmsg.error("修复异常：" + error.toString());
                        }
                      }
                    ),
                  ],
                },
              ],
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
                    ),
                  ],
                },
              ],
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
                    ),
                  ],
                },
              ],
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
                    ),
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  };
  try {
    let GLOBAL_RESOURCE_ICON;
    if (false);
    else {
      GLOBAL_RESOURCE_ICON = RESOURCE_ICON;
    }
    NetDiskView.$inst.icon.assign(GLOBAL_RESOURCE_ICON);
    Object.assign(NetDiskView.$inst.icon.src, GLOBAL_RESOURCE_ICON);
  } catch (error) {
    console.error("init NetDisk icon error", error);
  }
  ["input", "select-multiple", "select", "slider", "switch", "textarea"].forEach((type) => {
    PanelComponents.setStorageApi(type, {
      get(key, defaultValue) {
        return _GM_getValue(key, defaultValue);
      },
      set(key, value) {
        _GM_setValue(key, value);
      },
    });
  });
  WebsiteRule.init();
  NetDiskUserRule.init();
  NetDiskRule.init();
  PanelContent.addContentConfig([PanelUI_allSetting()]);
  PanelContent.addContentConfig(NetDiskRule.getRulePanelContent());
  let settingMenu = PanelMenu.getMenuOption(0);
  settingMenu.callback = () => {
    NetDiskSettingView.show();
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
        NetDiskView.$inst.historyMatch.show();
      },
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
      },
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
      },
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
        NetDiskView.$inst.matchPasteText.show();
      },
    },
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
})(Qmsg, DOMUtils, Utils, pops, CryptoJS, DataPaging);
