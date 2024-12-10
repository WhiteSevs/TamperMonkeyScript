// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.12.10
// @author       WhiteSevs
// @description  用于测试您的油猴脚本管理器对油猴函数的支持程度
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACM9JREFUeF7tnUmsFUUUhj9klFmMsxiJGsUBFk4xbDAa16AG1EQUQSDRMBjBuHFrBCNDNBFkUEhUiApro9EFxKi4AAc0xmBEcUrQx6SIov2Te5+Xy323q/t2v9fd59Ty3erq+k99r7rqVNWpfuSb5gL3A2OAUcAwYAgwEDgj31eXrvQTwHHgT+AI0AUcADYBq/NS0y+Hgh+qNfqkWkPn8ApzRQqMHTUY1mepPisAxgGq2A3A8Cwr6GWdZoHDwE5A/2h7O7VPFgBsBqYAgzqtjD+fyAJ/AduA6YmeasrcCQArgZnAiE4q4M92bIFDwAZgQZqS0gBwDfA2cGGaF/ozuVlgP3AH8HmSNyQFYEbU8GuAwUle4nl7zQLHgDnAxtA3JgFgaTQ9WRxasOfrUwssA5aE1CAUgK21gV5ImZ6nGBbQAHFqXFVCAFgLzIoryH8vpAXWAbPb1SwOAI3yM3U8FNJM1a6U/AWaJbRM7QCYDLxXbduYUXcr8H4rtT0BMBbYDYw2Y6JqC/0dmBB9yvc1y+wJgO+Bi6ptE3PqfgAuDgFAHr755sxjQ/CqZo9hqx7goLt3K0uD3MYjG9U1A6CFnWmVle/CZIEtjQtIjQBoSfdLX9WrPCVaRbyqvpTcCICmfJr6eaq+BTQl1NSQRgCOAmdWX7srBP4AhjYCsDDas7fcTWPKAosiP8+Keg+wq+YoMGUB42Ll6JtYB+BvoL9xg1iT/w8wQAB492+t6f/Xu0gAbAe0hduTPQvsEABfAOPtaXfFkUNojwDQIoFv8LTJw34BoKVCHdvyZM8CXQJAZ9F8l6+9xpfiYwJA0wE/qGkTgBMC4F+b2l113RXsABhmwXsAw43vPYDxxncAHICT+wF8DGAYBAfAcOP7J8B44zsADoCPAawz4GMA4wQ4AA6ATwMtM+A9gOXWrx0McUeQYQi8BzDc+O4HMN74DoAD4I4g6wz4GMA4AQ6AA+COIMsMeA9gufXdEWS89R0AB8A/AcYZcAAcAJ8FWGbAewDLre+DQOOt7wA4AP4JMM6AA+AA+CzAMgPeA1hufR8EGm99B8AB8E+AcQZ6GwBFJVdo2q+B74BvatfU1K8819X0us7ksujG0kuAy6M7bq4GBpa0nQqvtzcAOAzsjBp1UwfX0N4d3XHzAHALcHbBYSiV3jwB6Ioun3wphyvn5wJPFTC+cSn15gGAbqV6C7g35//UF2u9wpCc3xNXfKn1Zg2AbqPSbdV746yW0e/nRWOG1/vwtrPS680KAB0wXQPMy6hhkxaj3mBO0y1oSctIkr8yerMAQFeQXVG7dyCJEbPOq8uuNbvI++q7SuntFIDuCwizbs0OysvzAszK6e0EgF8AfYOLmH4Gzs24YpXUmxaAE8A50TXzBzI2clbFjQF+zfAehMrqTQvAE9HVo0uzaq2cylkSjQeeyajsyupNA0ARv4M9tXMW44FK600KwClXj2f035VnMeNqaw2DUr5E9yldCmhMUYakMdm3QLBzLCkAcrrk7eHL2tCvRRDck7LQ1X3o20hZZeQTkbs8KCUBQL7u0UGlFi9Tmqvx9kdrGfItlDEF3wWZBIBnc1jY6S3jLgMeT/gyeTXVA5QxqQdQTxCbQgE4CgyLLa3YGY5EM5ehgVVUj3FWYN6iZvstpMcOBeBj4KaiKg2s10fAjYF5yzTy70lS0AwoFIBFEU0rAo1X1GwLoytylwdWbmY0+n85MG9Rsz0IbIirXAgAull0QFxBJfldW7T6x9RVecq6Ba1Z2vG4tgsB4DPgupI0cFw1PwWujcmkPBPiCirJ77vj2i4EgDcB7cmrQnoDuCtGiCm9IQDou/lYFVofeA7QeKZdMqU3BIBHo5W/FyoCwCPA8zFaTOkNAeB24N2KAHAb8E6MFlN6QwC4IPKH/1QRAM6P/OQ/xmgxpdcBOJ0GB6DJJqa6RMCU3pAewNSgCDClNwQAU9OimrvYzLRXAMjVe0abgZEpx0jkObOk94QA0LanwW0AkDtxYkVmAbsC3LyW9B4TAHG7ZUwtjgCW9HYJgJDtQ7M6ONtflM5Dh1bXBVbGit79AkARO8bHGMbMBomaHazo3SMAtgOTYgBQ1IsRgf89Rc12CBgeWDkrencIgNANhNY2hVrQO08AKOnAR9wuGGvbwquuV7uFBtUBCNpAWIvGYelgSJUPwpwc59QBCB0hWzsaVmW9J2c6dQD0GQgdJJVphBzas7UbG1ZRb/cgtxGAJMYqw5m5RGfkYmYHVdPbDXUjAElO0ipI0tgCxAXqqd10pm9fhkGjqqT3lM9aIwAy5ubIMTQtcK6sYEmhR60Ci8wsm46yZR0sqip6twDT65ZuBkB/P5jA6VPE72OST1lS4squV+O8kY2iWwGwMor9Mz+BZRQ8Sa7kvo4XpLhAe3IIDtVsijLrXQUsiANAv4csEDWWoyBKT/Zh3CDFA3o6w6BQcfyXUW/LeAetegCJV9j2T2L2CbQyUm+HTtXAdb2hULFp9R4DrgfqYfm7264nAJRhBvBK3L9Ci997K3iyQr/cKXdmijpm+UgZ9CrU/sZWotsBoPwKBbc4pbXyCp+uaB8PR3v3RqWsV16PFVWv7KVPZMsUB4Ae2gpM6cBqmpKp63m1gxgDOtt/X+3TVNSpZ91ERdK7DZjaru1CANDzayPHinzHnSZtQNVI/avAK2OurM0w4s70d1qvvJ7vS73a/TQ7TlgoACpHUTM04PJUfAtocS82OohkJAFA+SfXPgllDRdX/KbrrIba4KsuX7OxoJQUABWqNYAPShxDL8gwJcwk340u1dIaSHBKA0C9cHkM9Vko+17BYGMVNKPcu+ruT/Hwhda1EwDq79ACkmYJfT0fD9VclXzyP2iU372wk0ZYFgDovXUP1c05rMKl0VXlZ7Qq+WFWl3NlBUCjwTVn16dB7uSyTt+KBpCmk/KlqKvPNF5jHgA0w6AIY1qpk+dO4WYVylw7kNsdSC1aA/RGfbTApJ26OqupsLbyLGqFVZHNMm30RjH/AX1V4etVAz1zAAAAAElFTkSuQmCC
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @connect      *
// @grant        GM.addElement
// @grant        GM.addStyle
// @grant        GM.addValueChangeListener
// @grant        GM.cookie
// @grant        GM.deleteValue
// @grant        GM.deleteValues
// @grant        GM.download
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @grant        GM.getTab
// @grant        GM.getTabs
// @grant        GM.getValue
// @grant        GM.getValues
// @grant        GM.info
// @grant        GM.listValues
// @grant        GM.log
// @grant        GM.notification
// @grant        GM.openInTab
// @grant        GM.registerMenuCommand
// @grant        GM.removeValueChangeListener
// @grant        GM.saveTab
// @grant        GM.setClipboard
// @grant        GM.setValue
// @grant        GM.setValues
// @grant        GM.unregisterMenuCommand
// @grant        GM.webRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_addValueChangeListener
// @grant        GM_cookie
// @grant        GM_deleteValue
// @grant        GM_deleteValues
// @grant        GM_download
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_getTab
// @grant        GM_getTabs
// @grant        GM_getValue
// @grant        GM_getValues
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_log
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_saveTab
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_webRequest
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops) {
  'use strict';

  var _a;
  var _GM = /* @__PURE__ */ (() => typeof GM != "undefined" ? GM : void 0)();
  var _GM_addElement = /* @__PURE__ */ (() => typeof GM_addElement != "undefined" ? GM_addElement : void 0)();
  var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
  var _GM_addValueChangeListener = /* @__PURE__ */ (() => typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0)();
  var _GM_cookie = /* @__PURE__ */ (() => typeof GM_cookie != "undefined" ? GM_cookie : void 0)();
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_deleteValues = /* @__PURE__ */ (() => typeof GM_deleteValues != "undefined" ? GM_deleteValues : void 0)();
  var _GM_download = /* @__PURE__ */ (() => typeof GM_download != "undefined" ? GM_download : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getResourceURL = /* @__PURE__ */ (() => typeof GM_getResourceURL != "undefined" ? GM_getResourceURL : void 0)();
  var _GM_getTab = /* @__PURE__ */ (() => typeof GM_getTab != "undefined" ? GM_getTab : void 0)();
  var _GM_getTabs = /* @__PURE__ */ (() => typeof GM_getTabs != "undefined" ? GM_getTabs : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_getValues = /* @__PURE__ */ (() => typeof GM_getValues != "undefined" ? GM_getValues : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_listValues = /* @__PURE__ */ (() => typeof GM_listValues != "undefined" ? GM_listValues : void 0)();
  var _GM_log = /* @__PURE__ */ (() => typeof GM_log != "undefined" ? GM_log : void 0)();
  var _GM_notification = /* @__PURE__ */ (() => typeof GM_notification != "undefined" ? GM_notification : void 0)();
  var _GM_openInTab = /* @__PURE__ */ (() => typeof GM_openInTab != "undefined" ? GM_openInTab : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_removeValueChangeListener = /* @__PURE__ */ (() => typeof GM_removeValueChangeListener != "undefined" ? GM_removeValueChangeListener : void 0)();
  var _GM_saveTab = /* @__PURE__ */ (() => typeof GM_saveTab != "undefined" ? GM_saveTab : void 0)();
  var _GM_setClipboard = /* @__PURE__ */ (() => typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_setValues = /* @__PURE__ */ (() => typeof GM_setValues != "undefined" ? GM_setValues : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_webRequest = /* @__PURE__ */ (() => typeof GM_webRequest != "undefined" ? GM_webRequest : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const _SCRIPT_NAME_ = "Monkey Api Test";
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
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex(maxZIndex).zIndex;
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
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error("拦截器-请求错误", data);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消");
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常");
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时");
    } else {
      Qmsg.error("其它错误");
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
  document.querySelector.bind(document);
  document.querySelectorAll.bind(document);
  let injectDocumentTime = "";
  if (document.documentElement) {
    if (document.head) {
      if (document.body) {
        injectDocumentTime = `<html>
    <head>
	...
	</head>
    <body>
    ...
    </body>
</html>

似乎注入到页面有点慢
`;
      } else {
        if (document.head.children.length) {
          injectDocumentTime = `<html>
	<head>
	...
	</head>
</html>
		
注入到页面很快`;
        } else {
          injectDocumentTime = `<html>
	<head></head>
</html>

注入到页面非常快`;
        }
      }
    } else {
      injectDocumentTime = `<html>
</html>

注入到页面超级快`;
    }
  } else {
    injectDocumentTime = `document.documentElement is null
	
注入到页面超级无敌快`;
  }
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const Tag = {
    success: "√ ",
    error: "× ",
    warn: "!!! ",
    info: ""
  };
  const UIInfo = (config) => {
    let result = {
      type: "own",
      getLiElementCallBack(liElement) {
        let detail = config();
        let $item = domUtils.createElement("div", {
          innerHTML: detail.tag == null ? detail.text : Tag[detail.tag] + detail.text
        });
        let classNameList = ["support-info"];
        if (detail.tag != null) {
          classNameList.push(detail.tag);
        }
        domUtils.addClass($item, classNameList);
        liElement.appendChild($item);
        return liElement;
      },
      afterAddToUListCallBack(formConfig, container) {
        let detail = config();
        if (typeof detail.afterRender === "function") {
          detail.afterRender(container);
        }
      }
    };
    return result;
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
     */
    setGMResourceCSS(resourceMapData) {
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : "";
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtil.addLinkNode(resourceMapData.url);
      }
    },
    /**
     * 添加<link>标签
     * @param url
     */
    async addLinkNode(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      domUtils.ready(() => {
        document.head.appendChild($link);
      });
      return $link;
    },
    /**
     * 将url修复，例如只有search的链接/sss/xxx?sss=xxxx
     * @param url 需要修复的链接
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
     * html转义
     * @param unsafe
     */
    escapeHtml(unsafe) {
      return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/©/g, "&copy;").replace(/®/g, "&reg;").replace(/™/g, "&trade;").replace(/→/g, "&rarr;").replace(/←/g, "&larr;").replace(/↑/g, "&uarr;").replace(/↓/g, "&darr;").replace(/—/g, "&mdash;").replace(/–/g, "&ndash;").replace(/…/g, "&hellip;").replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br>").replace(/\r/g, "<br>").replace(/\n/g, "<br>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  };
  const ApiSupportTest = {
    unsafeWindow() {
      return typeof _unsafeWindow === "object" && _unsafeWindow != null;
    },
    GM() {
      return typeof _GM === "object" && _GM != null;
    },
    addElement() {
      return typeof _GM_addElement === "function";
    },
    addElement_async() {
      return this.GM() && typeof _GM.addElement === "function";
    },
    addStyle() {
      return typeof _GM_addStyle === "function";
    },
    addStyle_async() {
      return this.GM() && typeof _GM.addStyle === "function";
    },
    addValueChangeListener() {
      return typeof _GM_addValueChangeListener === "function";
    },
    addValueChangeListener_async() {
      return this.GM() && typeof _GM.addValueChangeListener === "function";
    },
    removeValueChangeListener() {
      return typeof _GM_removeValueChangeListener === "function";
    },
    removeValueChangeListener_async() {
      return this.GM() && typeof _GM.removeValueChangeListener === "function";
    },
    cookie() {
      return typeof _GM_cookie === "function";
    },
    cookie_async() {
      return this.GM() && typeof _GM.cookie === "object";
    },
    deleteValue() {
      return typeof _GM_deleteValue === "function";
    },
    deleteValue_async() {
      return this.GM() && typeof _GM.deleteValue === "function";
    },
    deleteValues() {
      return typeof _GM_deleteValues === "function";
    },
    deleteValues_async() {
      return this.GM() && typeof _GM.deleteValues === "function";
    },
    download() {
      return typeof _GM_download === "function";
    },
    download_async() {
      return this.GM() && typeof _GM.download === "function";
    },
    getResourceText() {
      return typeof _GM_getResourceText === "function";
    },
    getResourceText_async() {
      return this.GM() && typeof _GM.getResourceText === "function";
    },
    getResourceUrl() {
      return typeof _GM_getResourceURL === "function";
    },
    getResourceUrl_async() {
      return this.GM() && typeof _GM.getResourceUrl === "function";
    },
    getTab() {
      return typeof _GM_getTab === "function";
    },
    getTab_async() {
      return this.GM() && typeof _GM.getTab === "function";
    },
    getTabs() {
      return typeof _GM_getTabs === "function";
    },
    getTabs_async() {
      return this.GM() && typeof _GM.getTabs === "function";
    },
    getValue() {
      return typeof _GM_getValue === "function";
    },
    getValue_async() {
      return this.GM() && typeof _GM.getValue === "function";
    },
    setValue() {
      return typeof _GM_setValue === "function";
    },
    setValue_async() {
      return this.GM() && typeof _GM.setValue === "function";
    },
    getValues() {
      return typeof _GM_getValues === "function";
    },
    getValues_async() {
      return this.GM() && typeof _GM.getValues === "function";
    },
    setValues() {
      return typeof _GM_setValues === "function";
    },
    setValues_async() {
      return this.GM() && typeof _GM.setValues === "function";
    },
    info() {
      return typeof _GM_info === "object" && _GM_info != null;
    },
    info_async() {
      return this.GM() && typeof _GM.info === "object";
    },
    listValues() {
      return typeof _GM_listValues === "function";
    },
    listValues_async() {
      return this.GM() && typeof _GM.listValues === "function";
    },
    log() {
      return typeof _GM_log === "function";
    },
    log_async() {
      return this.GM() && typeof _GM.log === "function";
    },
    notification() {
      return typeof _GM_notification === "function";
    },
    notification_async() {
      return this.GM() && typeof _GM.notification === "function";
    },
    openInTab() {
      return typeof _GM_openInTab === "function";
    },
    openInTab_async() {
      return this.GM() && typeof _GM.openInTab === "function";
    },
    registerMenuCommand() {
      return typeof _GM_registerMenuCommand === "function";
    },
    registerMenuCommand_async() {
      return this.GM() && typeof _GM.registerMenuCommand === "function";
    },
    unregisterMenuCommand() {
      return typeof _GM_unregisterMenuCommand === "function";
    },
    unregisterMenuCommand_async() {
      return this.GM() && typeof _GM.unregisterMenuCommand === "function";
    },
    saveTab() {
      return typeof _GM_saveTab === "function";
    },
    saveTab_async() {
      return this.GM() && typeof _GM.saveTab === "function";
    },
    setClipboard() {
      return typeof _GM_setClipboard === "function";
    },
    setClipboard_async() {
      return this.GM() && typeof _GM.setClipboard === "function";
    },
    webRequest() {
      return typeof _GM_webRequest === "function";
    },
    webRequest_async() {
      return this.GM() && typeof _GM.webRequest === "function";
    },
    xmlHttpRequest() {
      return typeof _GM_xmlhttpRequest === "function";
    },
    xmlHttpRequest_async() {
      return this.GM() && typeof _GM.xmlHttpRequest === "function";
    }
  };
  const LocalStorageApi = {
    $storageKey: "gm-api-test-storage-config",
    set(key, value) {
      let config = window.localStorage.getItem(LocalStorageApi.$storageKey) ?? "{}";
      let configJSON = utils.toJSON(config);
      configJSON[key] = value;
      window.localStorage.setItem(
        LocalStorageApi.$storageKey,
        JSON.stringify(configJSON, (key2, value2) => {
          return typeof value2 === "function" ? value2.tString() : value2;
        })
      );
    },
    get(key, defaultValue) {
      let config = window.localStorage.getItem(LocalStorageApi.$storageKey) ?? "{}";
      let configJSON = utils.toJSON(config);
      return configJSON[key] ?? defaultValue;
    },
    delete(key) {
      let config = window.localStorage.getItem(LocalStorageApi.$storageKey) ?? "{}";
      let configJSON = utils.toJSON(config);
      Reflect.deleteProperty(configJSON, key);
      window.localStorage.setItem(
        LocalStorageApi.$storageKey,
        JSON.stringify(configJSON, (key2, value) => {
          return typeof value === "function" ? value.tString() : value;
        })
      );
    }
  };
  const StorageApi = {
    /**
     * 存储值
     * @param key 键
     * @param value 值
     */
    set(key, value) {
      if (ApiSupportTest.setValue() && ApiSupportTest.getValue() && ApiSupportTest.deleteValue()) {
        _GM_setValue(key, value);
      } else {
        LocalStorageApi.set(key, value);
      }
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    get(key, defaultValue) {
      if (ApiSupportTest.setValue() && ApiSupportTest.getValue() && ApiSupportTest.deleteValue()) {
        return _GM_getValue(key, defaultValue);
      } else {
        return LocalStorageApi.get(key, defaultValue);
      }
    },
    /**
     * 删除值
     * @param key 键
     */
    delete(key) {
      if (ApiSupportTest.setValue() && ApiSupportTest.getValue() && ApiSupportTest.deleteValue()) {
        _GM_deleteValue(key);
      } else {
        LocalStorageApi.delete(key);
      }
    }
  };
  const PanelKeyConfig = {
    asideLastVisit: "aside-last-visit"
  };
  const Component_Common = () => {
    let supportApiNameList = [];
    let notSupportApiNameList = [];
    let apiList = [
      {
        name: "unsafeWindow",
        isSupport: ApiSupportTest.unsafeWindow(),
        leftAsideSelector: "#aside-unsafewindow"
      },
      {
        name: "GM",
        isSupport: ApiSupportTest.GM(),
        leftAsideSelector: ""
      },
      {
        name: "GM_addElement",
        isSupport: ApiSupportTest.addElement(),
        leftAsideSelector: "#aside-GM_addElement"
      },
      {
        name: "GM.addElement",
        isSupport: ApiSupportTest.addElement_async(),
        leftAsideSelector: "#aside-GM_addElement"
      },
      {
        name: "GM_addStyle",
        isSupport: ApiSupportTest.addStyle(),
        leftAsideSelector: "#aside-GM_addStyle"
      },
      {
        name: "GM.addStyle",
        isSupport: ApiSupportTest.addStyle_async(),
        leftAsideSelector: "#aside-GM_addStyle"
      },
      {
        name: "GM_download",
        isSupport: ApiSupportTest.download(),
        leftAsideSelector: "#aside-GM_download"
      },
      {
        name: "GM.download",
        isSupport: ApiSupportTest.download_async(),
        leftAsideSelector: "#aside-GM_download"
      },
      {
        name: "GM_getResourceText",
        isSupport: ApiSupportTest.getResourceText(),
        leftAsideSelector: "#aside-GM_getResourceText"
      },
      {
        name: "GM.getResourceText",
        isSupport: ApiSupportTest.getResourceText_async(),
        leftAsideSelector: "#aside-GM_getResourceText"
      },
      {
        name: "GM_getResourceURL",
        isSupport: ApiSupportTest.getResourceUrl(),
        leftAsideSelector: "#aside-GM_getResourceURL"
      },
      {
        name: "GM.getResourceUrl",
        isSupport: ApiSupportTest.getResourceUrl_async(),
        leftAsideSelector: "#aside-GM_getResourceURL"
      },
      {
        name: "GM_info",
        isSupport: ApiSupportTest.info(),
        leftAsideSelector: "#aside-GM_info"
      },
      {
        name: "GM.info",
        isSupport: ApiSupportTest.info_async(),
        leftAsideSelector: "#aside-GM_info"
      },
      {
        name: "GM_log",
        isSupport: ApiSupportTest.log(),
        leftAsideSelector: "#aside-GM_log"
      },
      {
        name: "GM.log",
        isSupport: ApiSupportTest.log_async(),
        leftAsideSelector: "#aside-GM_log"
      },
      {
        name: "GM_notification",
        isSupport: ApiSupportTest.notification(),
        leftAsideSelector: "#aside-GM_notification"
      },
      {
        name: "GM.notification",
        isSupport: ApiSupportTest.notification_async(),
        leftAsideSelector: "#aside-GM_notification"
      },
      {
        name: "GM_openInTab",
        isSupport: ApiSupportTest.openInTab(),
        leftAsideSelector: "#aside-GM_openInTab"
      },
      {
        name: "GM.openInTab",
        isSupport: ApiSupportTest.openInTab_async(),
        leftAsideSelector: "#aside-GM_openInTab"
      },
      {
        name: "GM_registerMenuCommand",
        isSupport: ApiSupportTest.registerMenuCommand(),
        leftAsideSelector: "#aside-GM_registerMenuCommand"
      },
      {
        name: "GM.registerMenuCommand",
        isSupport: ApiSupportTest.registerMenuCommand_async(),
        leftAsideSelector: "#aside-GM_registerMenuCommand"
      },
      {
        name: "GM_unregisterMenuCommand",
        isSupport: ApiSupportTest.unregisterMenuCommand(),
        leftAsideSelector: "#aside-GM_unregisterMenuCommand"
      },
      {
        name: "GM.unregisterMenuCommand",
        isSupport: ApiSupportTest.unregisterMenuCommand_async(),
        leftAsideSelector: "#aside-GM_unregisterMenuCommand"
      },
      {
        name: "GM_setClipboard",
        isSupport: ApiSupportTest.setClipboard(),
        leftAsideSelector: "#aside-GM_setClipboard"
      },
      {
        name: "GM.setClipboard",
        isSupport: ApiSupportTest.setClipboard_async(),
        leftAsideSelector: "#aside-GM_setClipboard"
      },
      {
        name: "GM_getTab",
        isSupport: ApiSupportTest.getTab(),
        leftAsideSelector: "#aside-GM_getTab"
      },
      {
        name: "GM.getTab",
        isSupport: ApiSupportTest.getTab_async(),
        leftAsideSelector: "#aside-GM_getTab"
      },
      {
        name: "GM_saveTab",
        isSupport: ApiSupportTest.saveTab(),
        leftAsideSelector: "#aside-GM_saveTab"
      },
      {
        name: "GM.saveTab",
        isSupport: ApiSupportTest.saveTab_async(),
        leftAsideSelector: "#aside-GM_saveTab"
      },
      {
        name: "GM_getTabs",
        isSupport: ApiSupportTest.getTabs(),
        leftAsideSelector: "#aside-GM_getTabs"
      },
      {
        name: "GM.getTabs",
        isSupport: ApiSupportTest.getTabs_async(),
        leftAsideSelector: "#aside-GM_getTabs"
      },
      {
        name: "GM_setValue",
        isSupport: ApiSupportTest.setValue(),
        leftAsideSelector: "#aside-GM_setValue"
      },
      {
        name: "GM.setValue",
        isSupport: ApiSupportTest.setValue_async(),
        leftAsideSelector: "#aside-GM_setValue"
      },
      {
        name: "GM_getValue",
        isSupport: ApiSupportTest.getValue(),
        leftAsideSelector: "#aside-GM_getValue"
      },
      {
        name: "GM.getValue",
        isSupport: ApiSupportTest.getValue_async(),
        leftAsideSelector: "#aside-GM_getValue"
      },
      {
        name: "GM_deleteValue",
        isSupport: ApiSupportTest.deleteValue(),
        leftAsideSelector: "#aside-GM_deleteValue"
      },
      {
        name: "GM.deleteValue",
        isSupport: ApiSupportTest.deleteValue_async(),
        leftAsideSelector: "#aside-GM_deleteValue"
      },
      {
        name: "GM_listValues",
        isSupport: ApiSupportTest.listValues(),
        leftAsideSelector: "#aside-GM_listValues"
      },
      {
        name: "GM.listValues",
        isSupport: ApiSupportTest.listValues_async(),
        leftAsideSelector: "#aside-GM_listValues"
      },
      {
        name: "GM_setValues",
        isSupport: ApiSupportTest.setValues(),
        leftAsideSelector: "#aside-GM_setValues"
      },
      {
        name: "GM.setValues",
        isSupport: ApiSupportTest.setValues_async(),
        leftAsideSelector: "#aside-GM_setValues"
      },
      {
        name: "GM_getValues",
        isSupport: ApiSupportTest.getValues(),
        leftAsideSelector: "#aside-GM_getValues"
      },
      {
        name: "GM.getValues",
        isSupport: ApiSupportTest.getValues_async(),
        leftAsideSelector: "#aside-GM_getValues"
      },
      {
        name: "GM_deleteValues",
        isSupport: ApiSupportTest.deleteValues(),
        leftAsideSelector: "#aside-GM_deleteValues"
      },
      {
        name: "GM.deleteValues",
        isSupport: ApiSupportTest.deleteValues_async(),
        leftAsideSelector: "#aside-GM_deleteValues"
      },
      {
        name: "GM_addValueChangeListener",
        isSupport: ApiSupportTest.addValueChangeListener(),
        leftAsideSelector: "#aside-GM_addValueChangeListener"
      },
      {
        name: "GM.addValueChangeListener",
        isSupport: ApiSupportTest.addValueChangeListener_async(),
        leftAsideSelector: "#aside-GM_addValueChangeListener"
      },
      {
        name: "GM_removeValueChangeListener",
        isSupport: ApiSupportTest.removeValueChangeListener(),
        leftAsideSelector: "#aside-GM_removeValueChangeListener"
      },
      {
        name: "GM.removeValueChangeListener",
        isSupport: ApiSupportTest.removeValueChangeListener_async(),
        leftAsideSelector: "#aside-GM_removeValueChangeListener"
      },
      {
        name: "GM_xmlhttpRequest",
        isSupport: ApiSupportTest.xmlHttpRequest(),
        leftAsideSelector: "#aside-GM_xmlhttpRequest"
      },
      {
        name: "GM.xmlHttpRequest",
        isSupport: ApiSupportTest.xmlHttpRequest_async(),
        leftAsideSelector: "#aside-GM_xmlhttpRequest"
      },
      {
        name: "GM_webRequest",
        isSupport: ApiSupportTest.webRequest(),
        leftAsideSelector: "#aside-GM_webRequest"
      },
      {
        name: "GM.webRequest",
        isSupport: ApiSupportTest.webRequest_async(),
        leftAsideSelector: "#aside-GM_webRequest"
      },
      {
        name: "GM_cookie",
        isSupport: ApiSupportTest.cookie(),
        leftAsideSelector: "#aside-GM_cookie"
      },
      {
        name: "GM.cookie",
        isSupport: ApiSupportTest.cookie_async(),
        leftAsideSelector: "#aside-GM_cookie"
      }
    ];
    apiList.forEach((api) => {
      if (api.isSupport) {
        supportApiNameList.push(api);
      } else {
        notSupportApiNameList.push(api);
      }
    });
    let createFeatureItem = (config) => {
      let $item = domUtils.createElement("div", {
        className: "gm-api-features-item",
        innerHTML: (
          /*html*/
          `
				<div class="gm-api-features-item__label">${config.name}</div>
				<div class="gm-api-features-item__value">
					<span style="font-size: 16px; font-weight: 700;">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
							<path d="M448 71.9c-17.3-13.4-41.5-9.3-54.1 9.1L214 344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8-15.6 15.5-16.4 41.6-1.7 58.1 0 0 120.4 133.6 137.7 147 17.3 13.4 41.5 9.3 54.1-9.1l206.3-301.7c12.6-18.5 8.7-44.2-8.6-57.5z" fill="#3b9f04"></path>
						</svg>
					</span>
				</div>
			`
        )
      });
      domUtils.on($item, "click", (event) => {
        utils.preventEvent(event);
        if (utils.isNotNull(config.leftAsideSelector)) {
          let shadowRoot = $item.getRootNode();
          let $left = shadowRoot.querySelector(
            config.leftAsideSelector
          );
          if ($left) {
            $left.click();
            $left.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
      return $item;
    };
    return {
      id: "component-common",
      title: "通用",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "component-common";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "component-common");
      },
      forms: [
        {
          type: "forms",
          text: "@run-at document-start",
          forms: [
            UIInfo(() => {
              return {
                text: CommonUtil.escapeHtml(injectDocumentTime),
                tag: "info"
              };
            })
          ]
        },
        {
          type: "forms",
          text: "特性",
          afterAddToUListCallBack(formConfig, container) {
            container.formHeaderDivElement.style.fontSize = "1.2em";
            container.formHeaderDivElement.style.fontWeight = "700";
          },
          forms: []
        },
        {
          type: "forms",
          text: "不支持列表",
          afterAddToUListCallBack(formConfig, container) {
            var _a2;
            container.formHeaderDivElement.style.color = "rgb(216, 30, 6)";
            container.formHeaderDivElement.style.fontWeight = "600";
            if (notSupportApiNameList.length === 0) {
              (_a2 = container.formContainerListElement) == null ? void 0 : _a2.remove();
            }
          },
          forms: [
            {
              type: "own",
              getLiElementCallBack(liElement) {
                let $container = domUtils.createElement("div", {
                  className: "gm-api-features-not-support"
                });
                let $fragment = document.createDocumentFragment();
                notSupportApiNameList.forEach((config) => {
                  $fragment.append(createFeatureItem(config));
                });
                $container.appendChild($fragment);
                liElement.appendChild($container);
                return liElement;
              }
            }
          ]
        },
        {
          type: "forms",
          text: "支持列表",
          afterAddToUListCallBack(formConfig, container) {
            var _a2;
            container.formHeaderDivElement.style.fontWeight = "600";
            if (supportApiNameList.length === 0) {
              (_a2 = container.formContainerListElement) == null ? void 0 : _a2.remove();
            }
          },
          forms: [
            {
              type: "own",
              getLiElementCallBack(liElement) {
                let $container = domUtils.createElement("div", {
                  className: "gm-api-features-support"
                });
                let $fragment = document.createDocumentFragment();
                supportApiNameList.forEach((config) => {
                  $fragment.append(createFeatureItem(config));
                });
                $container.appendChild($fragment);
                liElement.appendChild($container);
                return liElement;
              }
            }
          ]
        }
      ]
    };
  };
  const PanelUI_unsafeWindow = () => {
    let isSupport = ApiSupportTest.unsafeWindow();
    let result = {
      id: "aside-unsafewindow",
      title: "unsafeWindow",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "unsafewindow";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "unsafewindow");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 unsafewindow",
                tag: "success"
              } : {
                text: "不支持 unsafewindow",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    if (isSupport) {
      result["forms"][1].forms.push(
        UIInfo(() => {
          let key = "test-gm-window";
          let flag = _monkeyWindow == _unsafeWindow;
          _monkeyWindow[key] = key;
          flag = typeof _unsafeWindow[key] !== "string";
          Reflect.deleteProperty(_monkeyWindow, key);
          if (flag) {
            return {
              text: "window是ProxyWindow",
              tag: "success"
            };
          } else {
            return {
              text: "window不是ProxyWindow，全局变量会覆盖页面",
              tag: "warn"
            };
          }
        })
      );
    }
    return result;
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
  const PanelUI_GM_addElement = () => {
    let isSupport = ApiSupportTest.addElement();
    let isSupportAsync = ApiSupportTest.addElement_async();
    let result = {
      id: "aside-GM_addElement",
      title: "GM_addElement",
      headerTitle: "GM_addElement & GM.addElement",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_addElement";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_addElement");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_addElement",
                tag: "success"
              } : {
                text: "不支持 GM_addElement",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.addElement",
                tag: "success"
              } : {
                text: "不支持 GM.addElement",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    if (isSupport) {
      result["forms"][1].forms.push(
        UIInfo(() => {
          let $test = null;
          let $page_test = null;
          try {
            let element_id = "GM_addElement_test_script_exec";
            $test = _GM_addElement("script", {
              id: element_id,
              textContent: 'window.GM_addElement_test_str = "bar";'
            });
            $page_test = document.querySelector("#" + element_id);
            if ($test == null) {
              return {
                text: "GM_addElement is not retrun element",
                tag: "error"
              };
            }
            if (typeof _unsafeWindow["GM_addElement_test_str"] !== "string") {
              return {
                text: "GM_addElement script element is not work",
                tag: "error"
              };
            }
            Reflect.deleteProperty(_unsafeWindow, "GM_addElement_test_str");
            return {
              text: CommonUtil.escapeHtml("支持添加<script>元素且执行js"),
              tag: "success"
            };
          } catch (error) {
            console.error(error);
            return {
              text: "执行错误 " + error,
              tag: "error"
            };
          } finally {
            $page_test == null ? void 0 : $page_test.remove();
          }
        }),
        UIInfo(() => {
          let $test = null;
          let $page_test = null;
          try {
            let element_id = "GM_addElement_test2";
            $test = _GM_addElement(document.body, "div", {
              // @ts-ignore
              "data-src": "https://example.com/image.png",
              id: element_id
            });
            $page_test = document.querySelector("#" + element_id);
            if (!$page_test) {
              return {
                text: "不支持3个参数",
                tag: "error"
              };
            }
            const shadowRoot = $page_test.attachShadow({ mode: "closed" });
            _GM_addElement(shadowRoot, "style", {
              textContent: "div { color: black; };"
            });
            if (!shadowRoot.querySelector("style")) {
              return {
                text: "不支持3个参数的shadowRoot",
                tag: "error"
              };
            }
            if ($test == null) {
              return {
                text: "传入3个参数但是返回为空",
                tag: "error"
              };
            }
            if (!$page_test.hasAttribute("data-src")) {
              return {
                text: "不支持设置自定义属性data-src",
                tag: "error"
              };
            }
            return {
              text: "支持3个参数并返回元素对象",
              tag: "success"
            };
          } catch (error) {
            console.error(error);
            return {
              text: "执行错误 " + error,
              tag: "error"
            };
          } finally {
            $page_test == null ? void 0 : $page_test.remove();
          }
        })
      );
    }
    return result;
  };
  const PanelUI_GM_addStyle = () => {
    let isSupport = ApiSupportTest.addStyle();
    let isSupportAsync = ApiSupportTest.addStyle_async();
    let result = {
      id: "aside-GM_addStyle",
      title: "GM_addStyle",
      headerTitle: "GM_addStyle & GM.addStyle",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_addStyle";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_addStyle");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_addStyle",
                tag: "success"
              } : {
                text: "不支持 GM_addStyle",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.addStyle",
                tag: "success"
              } : {
                text: "不支持 GM.addStyle",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    if (isSupport) {
      result["forms"][1].forms.push(
        UIInfo(() => {
          let $test = null;
          let $testCSS = null;
          try {
            $test = domUtils.createElement("div", {
              id: "GM_addStyle",
              innerText: "GM_addStyle test"
            });
            document.body.appendChild($test);
            $testCSS = _GM_addStyle(
              /*css*/
              `
                        #GM_addStyle {
                            background-color: rgb(255, 0, 0);
                        }
                    `
            );
            if ($testCSS == null) {
              return {
                text: "GM_addStyle returns is null",
                tag: "error"
              };
            }
            const computedStyle = window.getComputedStyle($test);
            if (computedStyle.backgroundColor !== "rgb(255, 0, 0)") {
              return {
                text: "GM_addStyle test element background is not rgb(255, 0, 0)",
                tag: "error"
              };
            }
            return {
              text: CommonUtil.escapeHtml("支持添加CSS字符串"),
              tag: "success"
            };
          } catch (error) {
            console.error(error);
            return {
              text: "执行错误 " + error,
              tag: "error"
            };
          } finally {
            $test == null ? void 0 : $test.remove();
            $testCSS == null ? void 0 : $testCSS.remove();
          }
        })
      );
    }
    return result;
  };
  const PanelUI_GM_download = () => {
    let isSupport = ApiSupportTest.download();
    let isSupportAsync = ApiSupportTest.download_async();
    let result = {
      id: "aside-GM_download",
      title: "GM_download",
      headerTitle: "GM_download & GM.download",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_download";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_download");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_download",
                tag: "success"
              } : {
                text: "不支持 GM_download",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.download",
                tag: "success"
              } : {
                text: "不支持 GM.download",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    if (isSupport) {
      result["forms"][1].forms.push(
        UIInfo(() => {
          return {
            text: CommonUtil.escapeHtml("TODO..."),
            tag: "info",
            afterRender(container) {
              var _a2;
              (_a2 = container.target) == null ? void 0 : _a2.querySelector(".support-info");
            }
          };
        })
      );
    }
    return result;
  };
  const PanelUI_GM_getResourceText = () => {
    let isSupport = ApiSupportTest.getResourceText();
    let isSupportAsync = ApiSupportTest.getResourceText_async();
    let result = {
      id: "aside-GM_getResourceText",
      title: "GM_getResourceText",
      headerTitle: "GM_getResourceText & GM.getResourceText",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_getResourceText";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_getResourceText");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_getResourceText",
                tag: "success"
              } : {
                text: "不支持 GM_getResourceText",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.getResourceText",
                tag: "success"
              } : {
                text: "不支持 GM.getResourceText",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_getResourceURL = () => {
    let isSupport = ApiSupportTest.getResourceUrl();
    let isSupportAsync = ApiSupportTest.getResourceUrl_async();
    let result = {
      id: "aside-GM_getResourceURL",
      title: "GM_getResourceURL",
      headerTitle: "GM_getResourceURL & GM.getResourceUrl",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_getResourceURL";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_getResourceURL");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_getResourceURL",
                tag: "success"
              } : {
                text: "不支持 GM_getResourceURL",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.getResourceUrl",
                tag: "success"
              } : {
                text: "不支持 GM.getResourceUrl",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_info = () => {
    let isSupport = ApiSupportTest.info();
    let isSupportAsync = ApiSupportTest.info_async();
    let result = {
      id: "aside-GM_info",
      title: "GM_info",
      headerTitle: "GM_info & GM.info",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_info";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_info");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_info",
                tag: "success"
              } : {
                text: "不支持 GM_info",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.info",
                tag: "success"
              } : {
                text: "不支持 GM.info",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_log = () => {
    let isSupport = ApiSupportTest.log();
    let isSupportAsync = ApiSupportTest.log_async();
    let result = {
      id: "aside-GM_log",
      title: "GM_log",
      headerTitle: "GM_log & GM.log",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_log";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_log");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_log",
                tag: "success"
              } : {
                text: "不支持 GM_log",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.log",
                tag: "success"
              } : {
                text: "不支持 GM.log",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    if (isSupport) {
      result["forms"][1].forms.push(
        UIInfo(() => {
          return {
            text: CommonUtil.escapeHtml("TODO..."),
            tag: "info",
            afterRender(container) {
              var _a2;
              (_a2 = container.target) == null ? void 0 : _a2.querySelector(".support-info");
            }
          };
        })
      );
    }
    return result;
  };
  const PanelUI_GM_notification = () => {
    let isSupport = ApiSupportTest.notification();
    let isSupportAsync = ApiSupportTest.notification_async();
    let result = {
      id: "aside-GM_notification",
      title: "GM_notification",
      headerTitle: "GM_notification & GM.notification",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_notification";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_notification");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_notification",
                tag: "success"
              } : {
                text: "不支持 GM_notification",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.notification",
                tag: "success"
              } : {
                text: "不支持 GM.notification",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_openInTab = () => {
    let isSupport = ApiSupportTest.openInTab();
    let isSupportAsync = ApiSupportTest.openInTab_async();
    let result = {
      id: "aside-GM_openInTab",
      title: "GM_openInTab",
      headerTitle: "GM_openInTab & GM.openInTab",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_openInTab";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_openInTab");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_openInTab",
                tag: "success"
              } : {
                text: "不支持 GM_openInTab",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.openInTab",
                tag: "success"
              } : {
                text: "不支持 GM.openInTab",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_registerMenuCommand = () => {
    let isSupport = ApiSupportTest.registerMenuCommand();
    let isSupportAsync = ApiSupportTest.registerMenuCommand_async();
    let result = {
      id: "aside-GM_registerMenuCommand",
      title: "GM_registerMenuCommand",
      headerTitle: "GM_registerMenuCommand & GM.registerMenuCommand",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_registerMenuCommand";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_registerMenuCommand");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_registerMenuCommand",
                tag: "success"
              } : {
                text: "不支持 GM_registerMenuCommand",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.registerMenuCommand",
                tag: "success"
              } : {
                text: "不支持 GM.registerMenuCommand",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_unregisterMenuCommand = () => {
    let isSupport = ApiSupportTest.unregisterMenuCommand();
    let isSupportAsync = ApiSupportTest.unregisterMenuCommand_async();
    let result = {
      id: "aside-GM_unregisterMenuCommand",
      title: "GM_unregisterMenuCommand",
      headerTitle: "GM_unregisterMenuCommand & GM.unregisterMenuCommand",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_unregisterMenuCommand";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_unregisterMenuCommand");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_unregisterMenuCommand",
                tag: "success"
              } : {
                text: "不支持 GM_unregisterMenuCommand",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.unregisterMenuCommand",
                tag: "success"
              } : {
                text: "不支持 GM.unregisterMenuCommand",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_setClipboard = () => {
    let isSupport = ApiSupportTest.setClipboard();
    let isSupportAsync = ApiSupportTest.setClipboard_async();
    let result = {
      id: "aside-GM_setClipboard",
      title: "GM_setClipboard",
      headerTitle: "GM_setClipboard & GM.setClipboard",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_setClipboard";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_setClipboard");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_setClipboard",
                tag: "success"
              } : {
                text: "不支持 GM_setClipboard",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.setClipboard",
                tag: "success"
              } : {
                text: "不支持 GM.setClipboard",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_getTab = () => {
    let isSupport = ApiSupportTest.getTab();
    let isSupportAsync = ApiSupportTest.getTab_async();
    let result = {
      id: "aside-GM_getTab",
      title: "GM_getTab",
      headerTitle: "GM_getTab & GM.getTab",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_getTab";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_getTab");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_getTab",
                tag: "success"
              } : {
                text: "不支持 GM_getTab",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.getTab",
                tag: "success"
              } : {
                text: "不支持 GM.getTab",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_saveTab = () => {
    let isSupport = ApiSupportTest.saveTab();
    let isSupportAsync = ApiSupportTest.saveTab_async();
    let result = {
      id: "aside-GM_saveTab",
      title: "GM_saveTab",
      headerTitle: "GM_saveTab & GM.saveTab",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_saveTab";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_saveTab");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_saveTab",
                tag: "success"
              } : {
                text: "不支持 GM_saveTab",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.saveTab",
                tag: "success"
              } : {
                text: "不支持 GM.saveTab",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_getTabs = () => {
    let isSupport = ApiSupportTest.getTabs();
    let isSupportAsync = ApiSupportTest.getTabs_async();
    let result = {
      id: "aside-GM_getTabs",
      title: "GM_getTabs",
      headerTitle: "GM_getTabs & GM.getTabs",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_getTabs";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_getTabs");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_getTabs",
                tag: "success"
              } : {
                text: "不支持 GM_getTabs",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.getTabs",
                tag: "success"
              } : {
                text: "不支持 GM.getTabs",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_setValue = () => {
    let isSupport = ApiSupportTest.setValue();
    let isSupportAsync = ApiSupportTest.setValue_async();
    let result = {
      id: "aside-GM_setValue",
      title: "GM_setValue",
      headerTitle: "GM_setValue & GM.setValue",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_setValue";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_setValue");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_setValue",
                tag: "success"
              } : {
                text: "不支持 GM_setValue",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.setValue",
                tag: "success"
              } : {
                text: "不支持 GM.setValue",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_getValue = () => {
    let isSupport = ApiSupportTest.getValue();
    let isSupportAsync = ApiSupportTest.getValue_async();
    let result = {
      id: "aside-GM_getValue",
      title: "GM_getValue",
      headerTitle: "GM_getValue & GM.getValue",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_getValue";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_getValue");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_getValue",
                tag: "success"
              } : {
                text: "不支持 GM_getValue",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.getValue",
                tag: "success"
              } : {
                text: "不支持 GM.getValue",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_deleteValue = () => {
    let isSupport = ApiSupportTest.deleteValue();
    let isSupportAsync = ApiSupportTest.deleteValue_async();
    let result = {
      id: "aside-GM_deleteValue",
      title: "GM_deleteValue",
      headerTitle: "GM_deleteValue & GM.deleteValue",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_deleteValue";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_deleteValue");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_deleteValue",
                tag: "success"
              } : {
                text: "不支持 GM_deleteValue",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.deleteValue",
                tag: "success"
              } : {
                text: "不支持 GM.deleteValue",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_listValues = () => {
    let isSupport = ApiSupportTest.listValues();
    let isSupportAsync = ApiSupportTest.listValues_async();
    let result = {
      id: "aside-GM_listValues",
      title: "GM_listValues",
      headerTitle: "GM_listValues & GM.listValues",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_listValues";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_listValues");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_listValues",
                tag: "success"
              } : {
                text: "不支持 GM_listValues",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.listValues",
                tag: "success"
              } : {
                text: "不支持 GM.listValues",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_setValues = () => {
    let isSupport = ApiSupportTest.setValues();
    let isSupportAsync = ApiSupportTest.setValues_async();
    let result = {
      id: "aside-GM_setValues",
      title: "GM_setValues",
      headerTitle: "GM_setValues & GM.setValues",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_setValues";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_setValues");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_setValues",
                tag: "success"
              } : {
                text: "不支持 GM_setValues",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.setValues",
                tag: "success"
              } : {
                text: "不支持 GM.setValues",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_getValues = () => {
    let isSupport = ApiSupportTest.getValues();
    let isSupportAsync = ApiSupportTest.getValues_async();
    let result = {
      id: "aside-GM_getValues",
      title: "GM_getValues",
      headerTitle: "GM_getValues & GM.getValues",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_getValues";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_getValues");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_getValues",
                tag: "success"
              } : {
                text: "不支持 GM_getValues",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.getValues",
                tag: "success"
              } : {
                text: "不支持 GM.getValues",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_deleteValues = () => {
    let isSupport = ApiSupportTest.deleteValues();
    let isSupportAsync = ApiSupportTest.deleteValues_async();
    let result = {
      id: "aside-GM_deleteValues",
      title: "GM_deleteValues",
      headerTitle: "GM_deleteValues & GM.deleteValues",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_deleteValues";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_deleteValues");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_deleteValues",
                tag: "success"
              } : {
                text: "不支持 GM_deleteValues",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.deleteValues",
                tag: "success"
              } : {
                text: "不支持 GM.deleteValues",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_addValueChangeListener = () => {
    let isSupport = ApiSupportTest.addValueChangeListener();
    let isSupportAsync = ApiSupportTest.addValueChangeListener_async();
    let result = {
      id: "aside-GM_addValueChangeListener",
      title: "GM_addValueChangeListener",
      headerTitle: "GM_addValueChangeListener & GM.addValueChangeListener",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_addValueChangeListener";
      },
      callback(data) {
        StorageApi.set(
          PanelKeyConfig.asideLastVisit,
          "GM_addValueChangeListener"
        );
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_addValueChangeListener",
                tag: "success"
              } : {
                text: "不支持 GM_addValueChangeListener",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.addValueChangeListener",
                tag: "success"
              } : {
                text: "不支持 GM.addValueChangeListener",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_removeValueChangeListener = () => {
    let isSupport = ApiSupportTest.removeValueChangeListener();
    let isSupportAsync = ApiSupportTest.removeValueChangeListener_async();
    let result = {
      id: "aside-GM_removeValueChangeListener",
      title: "GM_removeValueChangeListener",
      headerTitle: "GM_removeValueChangeListener & GM.removeValueChangeListener",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_removeValueChangeListener";
      },
      callback(data) {
        StorageApi.set(
          PanelKeyConfig.asideLastVisit,
          "GM_removeValueChangeListener"
        );
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_removeValueChangeListener",
                tag: "success"
              } : {
                text: "不支持 GM_removeValueChangeListener",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.removeValueChangeListener",
                tag: "success"
              } : {
                text: "不支持 GM.removeValueChangeListener",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_xmlhttpRequest = () => {
    let isSupport = ApiSupportTest.xmlHttpRequest();
    let isSupportAsync = ApiSupportTest.xmlHttpRequest_async();
    let result = {
      id: "aside-GM_xmlhttpRequest",
      title: "GM_xmlhttpRequest",
      headerTitle: "GM_xmlhttpRequest & GM.xmlHttpRequest",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_xmlhttpRequest";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_xmlhttpRequest");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_xmlhttpRequest",
                tag: "success"
              } : {
                text: "不支持 GM_xmlhttpRequest",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.xmlHttpRequest",
                tag: "success"
              } : {
                text: "不支持 GM.xmlHttpRequest",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_webRequest = () => {
    let isSupport = ApiSupportTest.webRequest();
    let isSupportAsync = ApiSupportTest.webRequest_async();
    let result = {
      id: "aside-GM_webRequest",
      title: "GM_webRequest",
      headerTitle: "GM_webRequest & GM.webRequest",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_webRequest";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_webRequest");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_webRequest",
                tag: "success"
              } : {
                text: "不支持 GM_webRequest",
                tag: "error"
              }
            ),
            UIInfo(
              () => isSupportAsync ? {
                text: "支持 GM.webRequest",
                tag: "success"
              } : {
                text: "不支持 GM.webRequest",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    return result;
  };
  const PanelUI_GM_cookie = () => {
    let isSupport = ApiSupportTest.cookie();
    let isSupportAsync = ApiSupportTest.cookie_async();
    let isSupportAsync_list = isSupportAsync && typeof _GM.cookie.list === "function";
    let isSupportAsync_set = isSupportAsync && typeof _GM.cookie.set === "function";
    let isSupportAsync_delete = isSupportAsync && typeof _GM.cookie.delete === "function";
    let result = {
      id: "aside-GM_cookie",
      title: "GM_cookie",
      headerTitle: "GM_cookie & GM.cookie",
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_cookie";
      },
      callback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_cookie");
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(
              () => isSupport ? {
                text: "支持 GM_cookie",
                tag: "success"
              } : {
                text: "不支持 GM_cookie",
                tag: "error"
              }
            )
          ]
        },
        {
          type: "forms",
          text: "功能测试",
          forms: []
        }
      ]
    };
    let firstFormList = result["forms"][0].forms;
    if (isSupportAsync) {
      firstFormList.push(
        UIInfo(() => {
          return isSupportAsync_list ? {
            text: "支持 GM.cookie.list",
            tag: "success"
          } : {
            text: "不支持 GM.cookie.list",
            tag: "error"
          };
        }),
        UIInfo(() => {
          return isSupportAsync_set ? {
            text: "支持 GM.cookie.set",
            tag: "success"
          } : {
            text: "不支持 GM.cookie.set",
            tag: "error"
          };
        }),
        UIInfo(() => {
          return isSupportAsync_delete ? {
            text: "支持 GM.cookie.delete",
            tag: "success"
          } : {
            text: "不支持 GM.cookie.delete",
            tag: "error"
          };
        })
      );
    } else {
      firstFormList.push(
        UIInfo(() => {
          return { text: "不支持 GM.cookie", tag: "error" };
        })
      );
    }
    return result;
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
      try {
        this.initPanelDefaultValue();
        this.initExtensionsMenu();
      } catch (error) {
        console.error(error);
      }
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    /** 初始化进行注册油猴菜单 */
    initExtensionsMenu() {
      if (!this.isTopWindow()) {
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
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
          log.warn(["请先配置键", config]);
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
     * @param isReverse 逆反判断菜单启用
     * @param checkEnableCallBack 自定义检测菜单的值，可自行决定是否强制启用菜单，true是启用菜单，false是不启用菜单
     */
    execMenu(key, callback, isReverse = false, checkEnableCallBack) {
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
        if (typeof checkEnableCallBack === "function") {
          let checkResult = checkEnableCallBack(runKey, runValue);
          if (typeof checkResult === "boolean") {
            runValue = checkResult;
          }
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
     * @param checkEnableCallBack 自定义检测菜单的值，可自行决定是否强制启用菜单，true是启用菜单，false是不启用菜单
     */
    execMenuOnce(key, callback, getValueFn, handleValueChangeFn, checkEnableCallBack) {
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
      let checkMenuEnableCallBack = (currentValue) => {
        return typeof checkEnableCallBack === "function" ? checkEnableCallBack(key, currentValue) : currentValue;
      };
      let changeCallBack = (currentValue) => {
        let resultList = [];
        if (checkMenuEnableCallBack(currentValue)) {
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
          if (changedMainValue != null) {
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
     * 根据自定义key只执行一次
     * @param key 自定义key
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
          text: `${SCRIPT_NAME}-设置`,
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
        width: PanelUISize.settingBig.width,
        height: PanelUISize.settingBig.height,
        drag: true,
        only: true,
        style: (
          /*css*/
          `
			.success{
				color: green;
			}
			.error{
				color: red;
			}
			.warn,.warning{
				color: orange;
			}
			.info{
				color: #909090;
			}
			.support-info{
				font-weight: bold;
			}


			.gm-api-features-not-support,
			.gm-api-features-support{
				display: flex;
				gap: 8px;
				flex-wrap: wrap;
			}
			.gm-api-features-item{
				display: flex;
				align-items: center;
				width: 200px;
    			justify-content: space-between;
				cursor: pointer;
				transition: all ease-out .1s;
				padding: 8px 16px;
				border-radius: 4px;
				font-size: 14px;
			}
			.gm-api-features-item:hover{
				box-shadow: 0 2px 5px 3px #0000001a;
			}
			.gm-api-features-item__label{
			}
			.gm-api-features-item__value span{
				display: flex;
    			align-items: center;
			}
			`
        )
      });
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        Component_Common(),
        PanelUI_unsafeWindow(),
        PanelUI_GM_addElement(),
        PanelUI_GM_addStyle(),
        PanelUI_GM_download(),
        PanelUI_GM_getResourceText(),
        PanelUI_GM_getResourceURL(),
        PanelUI_GM_info(),
        PanelUI_GM_log(),
        PanelUI_GM_notification(),
        PanelUI_GM_openInTab(),
        PanelUI_GM_registerMenuCommand(),
        PanelUI_GM_unregisterMenuCommand(),
        PanelUI_GM_setClipboard(),
        PanelUI_GM_getTab(),
        PanelUI_GM_saveTab(),
        PanelUI_GM_getTabs(),
        PanelUI_GM_setValue(),
        PanelUI_GM_getValue(),
        PanelUI_GM_deleteValue(),
        PanelUI_GM_listValues(),
        PanelUI_GM_setValues(),
        PanelUI_GM_getValues(),
        PanelUI_GM_deleteValues(),
        PanelUI_GM_addValueChangeListener(),
        PanelUI_GM_removeValueChangeListener(),
        PanelUI_GM_xmlhttpRequest(),
        PanelUI_GM_webRequest(),
        PanelUI_GM_cookie()
      ];
      return configList;
    }
  };
  PopsPanel.init();
  PopsPanel.showPanel();

})(Qmsg, DOMUtils, Utils, pops);