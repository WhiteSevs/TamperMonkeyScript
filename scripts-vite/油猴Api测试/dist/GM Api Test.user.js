// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.12.11.14
// @author       WhiteSevs
// @description  用于测试您的油猴脚本管理器对油猴函数的支持程度
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACM9JREFUeF7tnUmsFUUUhj9klFmMsxiJGsUBFk4xbDAa16AG1EQUQSDRMBjBuHFrBCNDNBFkUEhUiApro9EFxKi4AAc0xmBEcUrQx6SIov2Te5+Xy323q/t2v9fd59Ty3erq+k99r7rqVNWpfuSb5gL3A2OAUcAwYAgwEDgj31eXrvQTwHHgT+AI0AUcADYBq/NS0y+Hgh+qNfqkWkPn8ApzRQqMHTUY1mepPisAxgGq2A3A8Cwr6GWdZoHDwE5A/2h7O7VPFgBsBqYAgzqtjD+fyAJ/AduA6YmeasrcCQArgZnAiE4q4M92bIFDwAZgQZqS0gBwDfA2cGGaF/ozuVlgP3AH8HmSNyQFYEbU8GuAwUle4nl7zQLHgDnAxtA3JgFgaTQ9WRxasOfrUwssA5aE1CAUgK21gV5ImZ6nGBbQAHFqXFVCAFgLzIoryH8vpAXWAbPb1SwOAI3yM3U8FNJM1a6U/AWaJbRM7QCYDLxXbduYUXcr8H4rtT0BMBbYDYw2Y6JqC/0dmBB9yvc1y+wJgO+Bi6ptE3PqfgAuDgFAHr755sxjQ/CqZo9hqx7goLt3K0uD3MYjG9U1A6CFnWmVle/CZIEtjQtIjQBoSfdLX9WrPCVaRbyqvpTcCICmfJr6eaq+BTQl1NSQRgCOAmdWX7srBP4AhjYCsDDas7fcTWPKAosiP8+Keg+wq+YoMGUB42Ll6JtYB+BvoL9xg1iT/w8wQAB492+t6f/Xu0gAbAe0hduTPQvsEABfAOPtaXfFkUNojwDQIoFv8LTJw34BoKVCHdvyZM8CXQJAZ9F8l6+9xpfiYwJA0wE/qGkTgBMC4F+b2l113RXsABhmwXsAw43vPYDxxncAHICT+wF8DGAYBAfAcOP7J8B44zsADoCPAawz4GMA4wQ4AA6ATwMtM+A9gOXWrx0McUeQYQi8BzDc+O4HMN74DoAD4I4g6wz4GMA4AQ6AA+COIMsMeA9gufXdEWS89R0AB8A/AcYZcAAcAJ8FWGbAewDLre+DQOOt7wA4AP4JMM6AA+AA+CzAMgPeA1hufR8EGm99B8AB8E+AcQZ6GwBFJVdo2q+B74BvatfU1K8819X0us7ksujG0kuAy6M7bq4GBpa0nQqvtzcAOAzsjBp1UwfX0N4d3XHzAHALcHbBYSiV3jwB6Ioun3wphyvn5wJPFTC+cSn15gGAbqV6C7g35//UF2u9wpCc3xNXfKn1Zg2AbqPSbdV746yW0e/nRWOG1/vwtrPS680KAB0wXQPMy6hhkxaj3mBO0y1oSctIkr8yerMAQFeQXVG7dyCJEbPOq8uuNbvI++q7SuntFIDuCwizbs0OysvzAszK6e0EgF8AfYOLmH4Gzs24YpXUmxaAE8A50TXzBzI2clbFjQF+zfAehMrqTQvAE9HVo0uzaq2cylkSjQeeyajsyupNA0ARv4M9tXMW44FK600KwClXj2f035VnMeNqaw2DUr5E9yldCmhMUYakMdm3QLBzLCkAcrrk7eHL2tCvRRDck7LQ1X3o20hZZeQTkbs8KCUBQL7u0UGlFi9Tmqvx9kdrGfItlDEF3wWZBIBnc1jY6S3jLgMeT/gyeTXVA5QxqQdQTxCbQgE4CgyLLa3YGY5EM5ehgVVUj3FWYN6iZvstpMcOBeBj4KaiKg2s10fAjYF5yzTy70lS0AwoFIBFEU0rAo1X1GwLoytylwdWbmY0+n85MG9Rsz0IbIirXAgAull0QFxBJfldW7T6x9RVecq6Ba1Z2vG4tgsB4DPgupI0cFw1PwWujcmkPBPiCirJ77vj2i4EgDcB7cmrQnoDuCtGiCm9IQDou/lYFVofeA7QeKZdMqU3BIBHo5W/FyoCwCPA8zFaTOkNAeB24N2KAHAb8E6MFlN6QwC4IPKH/1QRAM6P/OQ/xmgxpdcBOJ0GB6DJJqa6RMCU3pAewNSgCDClNwQAU9OimrvYzLRXAMjVe0abgZEpx0jkObOk94QA0LanwW0AkDtxYkVmAbsC3LyW9B4TAHG7ZUwtjgCW9HYJgJDtQ7M6ONtflM5Dh1bXBVbGit79AkARO8bHGMbMBomaHazo3SMAtgOTYgBQ1IsRgf89Rc12CBgeWDkrencIgNANhNY2hVrQO08AKOnAR9wuGGvbwquuV7uFBtUBCNpAWIvGYelgSJUPwpwc59QBCB0hWzsaVmW9J2c6dQD0GQgdJJVphBzas7UbG1ZRb/cgtxGAJMYqw5m5RGfkYmYHVdPbDXUjAElO0ipI0tgCxAXqqd10pm9fhkGjqqT3lM9aIwAy5ubIMTQtcK6sYEmhR60Ci8wsm46yZR0sqip6twDT65ZuBkB/P5jA6VPE72OST1lS4squV+O8kY2iWwGwMor9Mz+BZRQ8Sa7kvo4XpLhAe3IIDtVsijLrXQUsiANAv4csEDWWoyBKT/Zh3CDFA3o6w6BQcfyXUW/LeAetegCJV9j2T2L2CbQyUm+HTtXAdb2hULFp9R4DrgfqYfm7264nAJRhBvBK3L9Ci997K3iyQr/cKXdmijpm+UgZ9CrU/sZWotsBoPwKBbc4pbXyCp+uaB8PR3v3RqWsV16PFVWv7KVPZMsUB4Ae2gpM6cBqmpKp63m1gxgDOtt/X+3TVNSpZ91ERdK7DZjaru1CANDzayPHinzHnSZtQNVI/avAK2OurM0w4s70d1qvvJ7vS73a/TQ7TlgoACpHUTM04PJUfAtocS82OohkJAFA+SfXPgllDRdX/KbrrIba4KsuX7OxoJQUABWqNYAPShxDL8gwJcwk340u1dIaSHBKA0C9cHkM9Vko+17BYGMVNKPcu+ruT/Hwhda1EwDq79ACkmYJfT0fD9VclXzyP2iU372wk0ZYFgDovXUP1c05rMKl0VXlZ7Qq+WFWl3NlBUCjwTVn16dB7uSyTt+KBpCmk/KlqKvPNF5jHgA0w6AIY1qpk+dO4WYVylw7kNsdSC1aA/RGfbTApJ26OqupsLbyLGqFVZHNMm30RjH/AX1V4etVAz1zAAAAAElFTkSuQmCC
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
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

(function () {
  'use strict';

  var __defProp = Object.defineProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
  var __privateWrapper = (obj, member, setter, getter) => ({
    set _(value) {
      __privateSet(obj, member, value);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  });
  var _data, _U2Ghash, _G2Uhash, _defaultDetails, _LOG_DETAILS, _dbName, _storeName, _dbVersion, _slqVersion, _indexedDB, _db, _store, _statusCode, _flag, _delayTime, _callback, _context2, _disable, _console, _logCount, _details, _msgColorDetails, _config, _ctx, _width, _height, _a;
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
  function CompatibleProcessing() {
    try {
      if (typeof Object.assign !== "function") {
        Object.assign = function(target) {
          target = Object(target);
          if (arguments.length > 1) {
            let sourceList = [...arguments].splice(1, arguments.length - 1);
            sourceList.forEach((sourceItem) => {
              for (var sourceKey in sourceItem) {
                if (Object.prototype.hasOwnProperty.call(sourceItem, sourceKey)) {
                  target[sourceKey] = sourceItem[sourceKey];
                }
              }
            });
          }
          return target;
        };
      }
    } catch (error2) {
      console.warn(error2);
    }
    try {
      if (!("classList" in document.documentElement)) {
        Object.defineProperty(HTMLElement.prototype, "classList", {
          get: function() {
            var self2 = this;
            function update(fn) {
              return function(value) {
                var classes = self2.className.split(/\s+/g), index = classes.indexOf(value);
                fn(classes, index, value);
                self2.className = classes.join(" ");
              };
            }
            return {
              add: update(function(classes, index, value) {
                if (!~index)
                  classes.push(value);
              }),
              remove: update(function(classes, index) {
                if (~index)
                  classes.splice(index, 1);
              }),
              toggle: update(function(classes, index, value) {
                if (~index)
                  classes.splice(index, 1);
                else
                  classes.push(value);
              }),
              contains: function(value) {
                return !!~self2.className.split(/\s+/g).indexOf(value);
              },
              item: function(index) {
                return self2.className.split(/\s+/g)[index] || null;
              }
            };
          }
        });
      }
    } catch (error2) {
      console.warn(error2);
    }
  }
  const QmsgAnimation = {
    /** 状态 & 动画 */
    $state: {
      opening: "MessageMoveIn",
      done: "",
      closing: "MessageMoveOut"
    },
    $name: {
      startNameList: [
        "animationName",
        "WebkitAnimationName",
        "MozAnimationName",
        "msAnimationName",
        "OAnimationName"
      ],
      endNameList: [
        "animationend",
        "webkitAnimationEnd",
        "mozAnimationEnd",
        "MSAnimationEnd",
        "oanimationend"
      ]
    },
    /**
     * 获取元素上的animationName属性
     * @param element
     */
    getStyleAnimationNameValue(element) {
      for (let index = 0; index < this.$name.startNameList.length; index++) {
        let animationName = this.$name.startNameList[index];
        let animationNameValue = element.style[animationName];
        if (animationNameValue != null) {
          return animationNameValue;
        }
      }
    },
    /**
     * 设置元素上的animationName属性
     * @param element
     * @param animationNameValue
     */
    setStyleAnimationName(element, animationNameValue = "") {
      this.$name.startNameList.forEach((animationName) => {
        if (animationName in element.style) {
          element.style[animationName] = animationNameValue;
        }
      });
    }
  };
  const QmsgConfig = {
    /** 声明插件名称 */
    PLUGIN_NAME: "qmsg",
    /** 命名空间，用于css和事件 */
    NAMESPACE: "qmsg",
    /** 实例配置的固定的默认值 */
    INS_DEFAULT: {},
    /** 固定的默认值 */
    DEFAULT: {
      animation: true,
      autoClose: true,
      content: "",
      html: false,
      isHTML: false,
      position: "top",
      showClose: false,
      maxNums: 5,
      onClose: null,
      showIcon: true,
      showMoreContent: false,
      showReverse: false,
      timeout: 2500,
      type: "info",
      zIndex: 5e4,
      style: "",
      customClass: "",
      isLimitWidth: false,
      limitWidthNum: 200,
      limitWidthWrap: "no-wrap",
      consoleLogContent: false
    },
    /**
     * 是否支持动画属性
     */
    CAN_ANIMATION: Boolean(QmsgAnimation.getStyleAnimationNameValue(document.createElement("div")) != null)
  };
  const QmsgHeaderCloseIcon = '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const QmsgIcon = {
    info: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm67.008 275.008q26.016 0 43.008-15.488t16.992-41.504-16.992-41.504-42.496-15.488-42.496 15.488-16.992 41.504 16.992 41.504 42.016 15.488zm12 360q0-6.016.992-16T592 664l-52.992 60.992q-8 8.992-16.512 14.016T508 742.016q-8.992-4-8-14.016l88-276.992q4.992-28-8.992-48t-44.992-24q-35.008.992-76.512 29.504t-72.512 72.512v15.008q-.992 10.016 0 19.008l52.992-60.992q8-8.992 16.512-14.016T468 437.024q10.016 4.992 7.008 16l-87.008 276q-7.008 24.992 7.008 44.512T444 800.032q50.016-.992 84-28.992t63.008-72z" fill="#909399"/></svg>',
    warning: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448 0-247.36-200.512-448-448-448zm0 704c-26.432 0-48-21.504-48-48s21.568-48 48-48c26.624 0 48 21.504 48 48s-21.376 48-48 48zm48-240c0 26.56-21.376 48-48 48-26.432 0-48-21.44-48-48V304c0-26.56 21.568-48 48-48 26.624 0 48 21.44 48 48v224z" fill="#E6A23C"/></svg>',
    error: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.57 448-448S759.42 64 512 64zm158.39 561.14a32 32 0 1 1-45.25 45.26L512 557.26 398.86 670.4a32 32 0 0 1-45.25-45.26L466.75 512 353.61 398.86a32 32 0 0 1 45.25-45.25L512 466.74l113.14-113.13a32 32 0 0 1 45.25 45.25L557.25 512z" fill="#F56C6C"/></svg>',
    success: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z" fill="#67C23A"/></svg>',
    loading: '<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/><path d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  const QmsgInstanceStorage = {
    QmsgList: [],
    /**
     * 移除实例
     * @param uuid
     */
    remove(uuid) {
      for (let index = 0; index < QmsgInstanceStorage.QmsgList.length; index++) {
        if (QmsgInstanceStorage.QmsgList[index].uuid === uuid) {
          QmsgInstanceStorage.QmsgList.splice(index, 1);
          return;
        }
      }
    }
  };
  const QmsgCSS = {
    css: `@charset "utf-8";
      .qmsg.qmsg-wrapper{position:fixed;top:16px;left:0;z-index:50000;display:flex;box-sizing:border-box;margin:0;padding:0;width:100%;color:rgba(0,0,0,.55);list-style:none;font-variant:tabular-nums;font-size:13px;line-height:1;font-feature-settings:"tnum";pointer-events:none;flex-direction:column;}
      .qmsg.qmsg-data-position-center,.qmsg.qmsg-data-position-left,.qmsg.qmsg-data-position-right{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}
      .qmsg.qmsg-data-position-bottom,.qmsg.qmsg-data-position-bottomleft,.qmsg.qmsg-data-position-bottomright{position:fixed;top:unset;bottom:0;bottom:8px;left:50%;transform:translate(-50%,0);}
      .qmsg.qmsg-data-position-bottomleft .qmsg-item,.qmsg.qmsg-data-position-left .qmsg-item,.qmsg.qmsg-data-position-topleft .qmsg-item{text-align:left;}
      .qmsg.qmsg-data-position-bottom .qmsg-item,.qmsg.qmsg-data-position-center .qmsg-item,.qmsg.qmsg-data-position-top .qmsg-item{text-align:center;}
      .qmsg.qmsg-data-position-bottomright .qmsg-item,.qmsg.qmsg-data-position-right .qmsg-item,.qmsg.qmsg-data-position-topright .qmsg-item{text-align:right;}
      .qmsg .qmsg-item{position:relative;padding:8px;text-align:center;-webkit-animation-duration:.3s;animation-duration:.3s;}
      .qmsg .qmsg-item .qmsg-count{position:absolute;top:-4px;left:-4px;display:inline-block;height:16px;min-width:16px;border-radius:2px;background-color:red;color:#fff;text-align:center;font-size:12px;line-height:16px;-webkit-animation-duration:.3s;animation-duration:.3s;}
      .qmsg .qmsg-item:first-child{margin-top:-8px;}
      .qmsg .qmsg-content{position:relative;display:inline-block;padding:10px 12px;max-width:80%;min-width:40px;border-radius:4px;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,.15);text-align:center;pointer-events:all;}
      .qmsg .qmsg-content [class^=qmsg-content-]{display:flex;align-items:center;}
      .qmsg .qmsg-icon{position:relative;top:1px;display:inline-block;margin-right:8px;color:inherit;vertical-align:-.125em;text-align:center;text-transform:none;font-style:normal;font-size:16px;line-height:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
      .qmsg .qmsg-icon svg{display:inline-block;}
      .qmsg .qmsg-content .qmsg-show-more-content{display:flex;align-items:center;white-space:unset;overflow:unset;text-overflow:unset;padding-right:unset}
      .qmsg .qmsg-content-info .qmsg-icon{color:#1890ff;}
      .qmsg .qmsg-icon-close{margin:0;margin-left:8px;padding:0;outline:0;border:none;background-color:transparent;color:rgba(0,0,0,.45);font-size:12px;cursor:pointer;transition:color .3s;}
      .qmsg .qmsg-icon-close:hover>svg path{stroke:#555;}
      .qmsg .qmsg-icon-close.qmsg-show-more-content{position:unset;overflow:unset;padding-left:6px;margin-right:0}
      .qmsg .animate-turn{animation:MessageTurn 1s linear infinite;-webkit-animation:MessageTurn 1s linear infinite;}
      @keyframes MessageTurn{
            0%{-webkit-transform:rotate(0);}
            25%{-webkit-transform:rotate(90deg);}
            50%{-webkit-transform:rotate(180deg);}
            75%{-webkit-transform:rotate(270deg);}
            100%{-webkit-transform:rotate(360deg);}
      }
      @-webkit-keyframes MessageTurn{
            0%{-webkit-transform:rotate(0);}
            25%{-webkit-transform:rotate(90deg);}
            50%{-webkit-transform:rotate(180deg);}
            75%{-webkit-transform:rotate(270deg);}
            100%{-webkit-transform:rotate(360deg);}
      }
      @-webkit-keyframes MessageMoveOut{
            0%{max-height:150px;opacity:1;}
            to{max-height:0;opacity:0;}
      }
      @keyframes MessageMoveOut{
            0%{max-height:150px;opacity:1;}
            to{max-height:0;opacity:0;}
      }
      @-webkit-keyframes MessageMoveIn{
            0%{opacity:0;transform:translateY(-100%);transform-origin:0 0;}
            to{opacity:1;transform:translateY(0);transform-origin:0 0;}
      }
      @keyframes MessageMoveIn{
            0%{opacity:0;transform:translateY(-100%);transform-origin:0 0;}
            to{opacity:1;transform:translateY(0);transform-origin:0 0;}
      }
      @-webkit-keyframes MessageShake{
            0%,100%{opacity:1;transform:translateX(0);}
            25%,75%{opacity:.75;transform:translateX(-4px);}
            50%{opacity:.25;transform:translateX(4px);}
      }
      @keyframes MessageShake{
            0%,100%{opacity:1;transform:translateX(0);}
            25%,75%{opacity:.75;transform:translateX(-4px);}
            50%{opacity:.25;transform:translateX(4px);}
      }`,
    /**
     * 获取CSS元素
     */
    getStyleElement() {
      let cssResourceNode = document.createElement("style");
      cssResourceNode.setAttribute("type", "text/css");
      cssResourceNode.setAttribute("data-type", QmsgConfig.PLUGIN_NAME);
      cssResourceNode.innerHTML = this.css;
      return cssResourceNode;
    }
  };
  class QmsgMsg {
    constructor(option, uuid) {
      /**
       * setTimeout的id
       */
      __publicField(this, "timeId");
      /**
       * 启动时间
       */
      __publicField(this, "startTime");
      /**
       * 关闭时间
       */
      __publicField(this, "endTime");
      /**
       * Qmsg的配置
       */
      __publicField(this, "setting");
      /**
       * uuid
       */
      __publicField(this, "uuid");
      /**
       * 当前动画状态
       */
      __publicField(this, "state");
      /**
       * 当前相同消息的数量
       */
      __publicField(this, "repeatNum");
      /**
       * 主元素
       */
      __publicField(this, "$Qmsg");
      this.timeId = void 0;
      this.startTime = Date.now();
      this.endTime = null;
      this.setting = QmsgUtils.toDynamicObject(QmsgConfig.DEFAULT, option, QmsgConfig.INS_DEFAULT);
      this.uuid = uuid;
      this.state = "opening";
      this.$Qmsg = document.createElement("div");
      this.repeatNum = 1;
      this.detectionType();
      this.init();
      if (this.setting.consoleLogContent) {
        console.log(this.setting.content);
      }
    }
    /**
     * 获取当前配置
     * @returns
     */
    getSetting() {
      return this.setting;
    }
    /**
     * 获取当前相同的数量
     * @returns
     */
    getRepeatNum() {
      return this.repeatNum;
    }
    /**
     * 设置repeatNum值
     * @param num 重复的数量
     */
    setRepeatNum(num) {
      this.repeatNum = num;
    }
    /**
     * 设置repeatNum自增
     */
    setRepeatNumIncreasing() {
      this.repeatNum++;
    }
    /**
     * 初始化元素
     */
    init() {
      let QmsgContext = this;
      if (this.setting.customClass && typeof this.setting.customClass === "string") {
        this.$Qmsg.classList.add(this.setting.customClass);
      }
      let $svg = QmsgIcon[this.setting.type || "info"];
      let contentClassName = QmsgUtils.getNameSpacify("content-" + this.setting.type || "info");
      if (this.setting.showClose) {
        contentClassName += " " + QmsgUtils.getNameSpacify("content-with-close");
      }
      let content = this.setting.content || "";
      let extraCloseIconClassName = "";
      let $closeSvg = QmsgHeaderCloseIcon;
      if (this.setting.showMoreContent) {
        contentClassName += "qmsg-show-more-content";
        extraCloseIconClassName += "qmsg-show-more-content";
      }
      let $closeIcon = "";
      if (this.setting.showClose) {
        $closeIcon = `<i class="qmsg-icon qmsg-icon-close ${extraCloseIconClassName}">${$closeSvg}</i>`;
      }
      let $content = document.createElement("span");
      let $positionClassName = QmsgUtils.getNameSpacify("data-position", this.setting.position.toLowerCase());
      if (this.setting.html || this.setting.isHTML) {
        $content.innerHTML = content;
      } else {
        $content.innerText = content;
      }
      if (this.setting.isLimitWidth) {
        let limitWidthNum = this.setting.limitWidthNum;
        if (typeof limitWidthNum === "string") {
          if (QmsgUtils.isNumber(limitWidthNum)) {
            limitWidthNum = limitWidthNum + "px";
          }
        } else {
          limitWidthNum = limitWidthNum.toString() + "px";
        }
        $content.style.maxWidth = limitWidthNum;
        $content.style.width = limitWidthNum;
        if (this.setting.limitWidthWrap === "no-wrap") {
          $content.style.whiteSpace = "nowrap";
        } else if (this.setting.limitWidthWrap === "ellipsis") {
          $content.style.whiteSpace = "nowrap";
          $content.style.overflow = "hidden";
          $content.style.textOverflow = "ellipsis";
        } else if (this.setting.limitWidthWrap === "wrap") {
          $content.style.whiteSpace = "";
        }
      }
      this.$Qmsg.innerHTML = /*html*/
      `
        <div class="qmsg-content">
            <div class="${contentClassName}">
            ${this.setting.showIcon ? `<i class="qmsg-icon">${$svg}</i>` : ""}
                ${$content.outerHTML}
                ${$closeIcon}
            </div>
        </div>
        `;
      let $contentContainer = this.$Qmsg.querySelector(".qmsg-content");
      this.$Qmsg.classList.add(QmsgUtils.getNameSpacify("item"));
      this.$Qmsg.setAttribute(QmsgUtils.getNameSpacify("uuid"), this.uuid);
      let $shadowContainer = document.querySelector(".qmsg-shadow-container");
      let $shadowRoot = $shadowContainer == null ? void 0 : $shadowContainer.shadowRoot;
      if (!$shadowContainer) {
        $shadowContainer = document.createElement("div");
        $shadowContainer.className = "qmsg-shadow-container";
        $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
        let __$wrapper__ = document.createElement("div");
        __$wrapper__.classList.add(QmsgConfig.NAMESPACE, QmsgUtils.getNameSpacify("wrapper"), QmsgUtils.getNameSpacify("is-initialized"));
        __$wrapper__.classList.add($positionClassName);
        $shadowRoot.appendChild(QmsgCSS.getStyleElement());
        $shadowRoot.appendChild(__$wrapper__);
        if (this.setting.style != null) {
          let __$ownStyle__ = document.createElement("style");
          __$ownStyle__.setAttribute("type", "text/css");
          __$ownStyle__.setAttribute("data-id", this.uuid);
          __$ownStyle__.innerHTML = this.setting.style;
          $contentContainer.insertAdjacentElement("afterend", __$ownStyle__);
        }
        document.body.appendChild($shadowContainer);
      }
      if ($shadowRoot == null) {
        throw new TypeError(QmsgConfig.PLUGIN_NAME + " $shadowRoot is null");
      }
      let $wrapper = $shadowRoot.querySelector(`.${QmsgConfig.NAMESPACE}.${$positionClassName}`);
      if (!$wrapper) {
        $wrapper = document.createElement("div");
        $wrapper.classList.add(QmsgConfig.NAMESPACE, QmsgUtils.getNameSpacify("wrapper"), QmsgUtils.getNameSpacify("is-initialized"));
        $wrapper.classList.add($positionClassName);
        $shadowRoot.appendChild($wrapper);
      }
      if (this.setting.showReverse) {
        $wrapper.style.flexDirection = "column-reverse";
      } else {
        $wrapper.style.flexDirection = "column";
      }
      let zIndex = this.setting.zIndex;
      if (typeof zIndex === "function") {
        zIndex = zIndex();
      }
      if (!isNaN(zIndex)) {
        $wrapper.style.zIndex = zIndex.toString();
      }
      $wrapper.appendChild(this.$Qmsg);
      this.setState(this.$Qmsg, "opening");
      if (this.setting.showClose) {
        let $closeIcon2 = this.$Qmsg.querySelector(".qmsg-icon-close");
        if ($closeIcon2) {
          $closeIcon2.addEventListener("click", function() {
            QmsgContext.close();
          });
        }
      }
      let animationendEvent = (event) => {
        let animationNameValue = QmsgAnimation.getStyleAnimationNameValue(QmsgContext.$Qmsg);
        if (animationNameValue === QmsgAnimation.$state.closing) {
          QmsgContext.endTime = Date.now();
          QmsgContext.destroy();
        }
        QmsgAnimation.setStyleAnimationName(QmsgContext.$Qmsg);
      };
      QmsgAnimation.$name.endNameList.forEach(function(animationendName) {
        QmsgContext.$Qmsg.addEventListener(animationendName, animationendEvent);
      });
      if (this.setting.autoClose) {
        this.timeId = QmsgUtils.setTimeout(() => {
          this.close();
        }, this.setting.timeout);
        let enterEvent = (event) => {
          this.startTime = null;
          this.endTime = null;
          QmsgUtils.clearTimeout(this.timeId);
          this.timeId = void 0;
        };
        let leaveEvent = (event) => {
          if (this.timeId != null) {
            console.warn("timeId is not null，mouseenter may be not first trigger");
            return;
          }
          this.startTime = Date.now();
          this.timeId = QmsgUtils.setTimeout(() => {
            this.close();
          }, this.setting.timeout);
        };
        this.$Qmsg.addEventListener("touchstart", () => {
          this.$Qmsg.removeEventListener("mouseenter", enterEvent);
          this.$Qmsg.removeEventListener("mouseout", leaveEvent);
        }, {
          capture: true,
          once: true
        });
        this.$Qmsg.addEventListener("mouseenter", enterEvent);
        this.$Qmsg.addEventListener("mouseout", leaveEvent);
      }
    }
    /**
     * 对timeout进行检测并转换
     * 当timeout为string时，转换为number
     * timeout必须在规定范围内
     */
    detectionType() {
      if (this.setting.timeout != null && typeof this.setting.timeout === "string") {
        this.setting.timeout = parseInt(this.setting.timeout);
      }
      if (isNaN(this.setting.timeout)) {
        this.setting.timeout = QmsgConfig.DEFAULT.timeout;
      }
      if (!(this.setting.timeout != null && parseInt(this.setting.timeout.toString()) >= 0 && parseInt(this.setting.timeout.toString()) <= Number.MAX_VALUE)) {
        this.setting.timeout = QmsgConfig.DEFAULT.timeout;
      }
      if (typeof this.setting.zIndex === "function") {
        this.setting.zIndex = this.setting.zIndex();
      }
      if (this.setting.zIndex != null && typeof this.setting.zIndex === "string") {
        this.setting.zIndex = parseInt(this.setting.zIndex);
      }
      if (isNaN(this.setting.zIndex)) {
        this.setting.zIndex = typeof QmsgConfig.DEFAULT.zIndex === "function" ? QmsgConfig.DEFAULT.zIndex() : QmsgConfig.DEFAULT.zIndex;
      }
    }
    /**
     * 设置元素动画状态 开启/关闭
     * @param QmsgMsg
     * @param state
     */
    setState(element, state) {
      if (!state || !QmsgAnimation.$state[state])
        return;
      this.state = state;
      QmsgAnimation.setStyleAnimationName(element, QmsgAnimation.$state[state]);
    }
    /**
     * 设置消息数量统计
     */
    setMsgCount() {
      let QmsgContext = this;
      let countClassName = QmsgUtils.getNameSpacify("count");
      let wrapperClassName = `div.${QmsgUtils.getNameSpacify("data-position", this.setting.position.toLowerCase())} [class^="qmsg-content-"]`;
      let $content = this.$Qmsg.querySelector(wrapperClassName);
      if (!$content) {
        throw new TypeError("$content is null");
      }
      let $count = $content.querySelector("." + countClassName);
      if (!$count) {
        $count = document.createElement("span");
        $count.classList.add(countClassName);
        $content.appendChild($count);
      }
      $count.innerHTML = this.getRepeatNum().toString();
      QmsgAnimation.setStyleAnimationName($count);
      QmsgAnimation.setStyleAnimationName($count, "MessageShake");
      QmsgUtils.clearTimeout(this.timeId);
      if (this.setting.autoClose) {
        this.timeId = QmsgUtils.setTimeout(function() {
          QmsgContext.close();
        }, this.setting.timeout);
      }
    }
    /**
     * 关闭Qmsg（会触发动画）
     */
    close() {
      this.setState(this.$Qmsg, "closing");
      if (QmsgConfig.CAN_ANIMATION) {
        QmsgInstanceStorage.remove(this.uuid);
      } else {
        this.destroy();
      }
      let onCloseCallBack = this.setting.onClose;
      if (onCloseCallBack && typeof onCloseCallBack === "function") {
        onCloseCallBack.call(this);
      }
    }
    /**
     * 销毁Qmsg
     */
    destroy() {
      this.endTime = Date.now();
      this.$Qmsg.remove();
      QmsgUtils.clearTimeout(this.timeId);
      QmsgInstanceStorage.remove(this.uuid);
    }
    /**
     * 设置内容文本
     */
    setText(text) {
      let $content = this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");
      if ($content) {
        $content.innerText = text;
        this.setting.content = text;
      } else {
        throw new TypeError("$content is null");
      }
    }
    /**
     * 设置内容超文本
     */
    setHTML(text) {
      let $content = this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");
      if ($content) {
        $content.innerHTML = text;
        this.setting.content = text;
      } else {
        throw new TypeError("$content is null");
      }
    }
  }
  const createCache = (lastNumberWeakMap) => {
    return (collection, nextNumber) => {
      lastNumberWeakMap.set(collection, nextNumber);
      return nextNumber;
    };
  };
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
  const TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
  const TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
  const createGenerateUniqueNumber = (cache2, lastNumberWeakMap) => {
    return (collection) => {
      const lastNumber = lastNumberWeakMap.get(collection);
      let nextNumber = lastNumber === void 0 ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;
      if (!collection.has(nextNumber)) {
        return cache2(collection, nextNumber);
      }
      if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
        while (collection.has(nextNumber)) {
          nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
        }
        return cache2(collection, nextNumber);
      }
      if (collection.size > MAX_SAFE_INTEGER) {
        throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
      }
      while (collection.has(nextNumber)) {
        nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
      }
      return cache2(collection, nextNumber);
    };
  };
  const LAST_NUMBER_WEAK_MAP = /* @__PURE__ */ new WeakMap();
  const cache = createCache(LAST_NUMBER_WEAK_MAP);
  const generateUniqueNumber = createGenerateUniqueNumber(cache, LAST_NUMBER_WEAK_MAP);
  const isCallNotification = (message) => {
    return message.method !== void 0 && message.method === "call";
  };
  const isClearResponse = (message) => {
    return typeof message.id === "number" && typeof message.result === "boolean";
  };
  const load = (url) => {
    const scheduledIntervalFunctions = /* @__PURE__ */ new Map([[0, () => {
    }]]);
    const scheduledTimeoutFunctions = /* @__PURE__ */ new Map([[0, () => {
    }]]);
    const unrespondedRequests = /* @__PURE__ */ new Map();
    const worker2 = new Worker(url);
    worker2.addEventListener("message", ({ data }) => {
      if (isCallNotification(data)) {
        const { params: { timerId, timerType } } = data;
        if (timerType === "interval") {
          const idOrFunc = scheduledIntervalFunctions.get(timerId);
          if (typeof idOrFunc === void 0) {
            throw new Error("The timer is in an undefined state.");
          }
          if (typeof idOrFunc === "number") {
            const timerIdAndTimerType = unrespondedRequests.get(idOrFunc);
            if (timerIdAndTimerType === void 0 || timerIdAndTimerType.timerId !== timerId || timerIdAndTimerType.timerType !== timerType) {
              throw new Error("The timer is in an undefined state.");
            }
          } else if (typeof idOrFunc === "function") {
            idOrFunc();
          }
        } else if (timerType === "timeout") {
          const idOrFunc = scheduledTimeoutFunctions.get(timerId);
          if (typeof idOrFunc === void 0) {
            throw new Error("The timer is in an undefined state.");
          }
          if (typeof idOrFunc === "number") {
            const timerIdAndTimerType = unrespondedRequests.get(idOrFunc);
            if (timerIdAndTimerType === void 0 || timerIdAndTimerType.timerId !== timerId || timerIdAndTimerType.timerType !== timerType) {
              throw new Error("The timer is in an undefined state.");
            }
          } else if (typeof idOrFunc === "function") {
            idOrFunc();
            scheduledTimeoutFunctions.delete(timerId);
          }
        }
      } else if (isClearResponse(data)) {
        const { id } = data;
        const timerIdAndTimerType = unrespondedRequests.get(id);
        if (timerIdAndTimerType === void 0) {
          throw new Error("The timer is in an undefined state.");
        }
        const { timerId, timerType } = timerIdAndTimerType;
        unrespondedRequests.delete(id);
        if (timerType === "interval") {
          scheduledIntervalFunctions.delete(timerId);
        } else {
          scheduledTimeoutFunctions.delete(timerId);
        }
      } else {
        const { error: { message } } = data;
        throw new Error(message);
      }
    });
    const clearInterval2 = (timerId) => {
      if (typeof scheduledIntervalFunctions.get(timerId) === "function") {
        const id = generateUniqueNumber(unrespondedRequests);
        unrespondedRequests.set(id, { timerId, timerType: "interval" });
        scheduledIntervalFunctions.set(timerId, id);
        worker2.postMessage({
          id,
          method: "clear",
          params: { timerId, timerType: "interval" }
        });
      }
    };
    const clearTimeout2 = (timerId) => {
      if (typeof scheduledTimeoutFunctions.get(timerId) === "function") {
        const id = generateUniqueNumber(unrespondedRequests);
        unrespondedRequests.set(id, { timerId, timerType: "timeout" });
        scheduledTimeoutFunctions.set(timerId, id);
        worker2.postMessage({
          id,
          method: "clear",
          params: { timerId, timerType: "timeout" }
        });
      }
    };
    const setInterval2 = (func, delay = 0, ...args2) => {
      const timerId = generateUniqueNumber(scheduledIntervalFunctions);
      scheduledIntervalFunctions.set(timerId, () => {
        func(...args2);
        if (typeof scheduledIntervalFunctions.get(timerId) === "function") {
          worker2.postMessage({
            id: null,
            method: "set",
            params: {
              delay,
              now: performance.timeOrigin + performance.now(),
              timerId,
              timerType: "interval"
            }
          });
        }
      });
      worker2.postMessage({
        id: null,
        method: "set",
        params: {
          delay,
          now: performance.timeOrigin + performance.now(),
          timerId,
          timerType: "interval"
        }
      });
      return timerId;
    };
    const setTimeout2 = (func, delay = 0, ...args2) => {
      const timerId = generateUniqueNumber(scheduledTimeoutFunctions);
      scheduledTimeoutFunctions.set(timerId, () => func(...args2));
      worker2.postMessage({
        id: null,
        method: "set",
        params: {
          delay,
          now: performance.timeOrigin + performance.now(),
          timerId,
          timerType: "timeout"
        }
      });
      return timerId;
    };
    return {
      clearInterval: clearInterval2,
      clearTimeout: clearTimeout2,
      setInterval: setInterval2,
      setTimeout: setTimeout2
    };
  };
  const createLoadOrReturnBroker = (loadBroker, worker2) => {
    let broker = null;
    return () => {
      if (broker !== null) {
        return broker;
      }
      const blob = new Blob([worker2], { type: "application/javascript; charset=utf-8" });
      const url = URL.createObjectURL(blob);
      broker = loadBroker(url);
      setTimeout(() => URL.revokeObjectURL(url));
      return broker;
    };
  };
  const worker = `(()=>{"use strict";const e=new Map,t=new Map,r=t=>{const r=e.get(t);return void 0!==r&&(clearTimeout(r),e.delete(t),!0)},s=e=>{const r=t.get(e);return void 0!==r&&(clearTimeout(r),t.delete(e),!0)},o=(e,t)=>{const r=performance.now(),s=e+t-r-performance.timeOrigin;return{expected:r+s,remainingDelay:s}},i=(e,t,r,s)=>{const o=r-performance.now();o>0?e.set(t,setTimeout(i,o,e,t,r,s)):(e.delete(t),postMessage({id:null,method:"call",params:{timerId:t,timerType:s}}))};addEventListener("message",(({data:n})=>{try{if("clear"===n.method){const{id:e,params:{timerId:t,timerType:o}}=n;if("interval"===o)postMessage({id:e,result:r(t)});else{if("timeout"!==o)throw new Error('The given type "'.concat(o,'" is not supported'));postMessage({id:e,result:s(t)})}}else{if("set"!==n.method)throw new Error('The given method "'.concat(n.method,'" is not supported'));{const{params:{delay:r,now:s,timerId:a,timerType:m}}=n;if("interval"===m)((t,r,s)=>{const{expected:n,remainingDelay:a}=o(t,s);e.set(r,setTimeout(i,a,e,r,n,"interval"))})(r,a,s);else{if("timeout"!==m)throw new Error('The given type "'.concat(m,'" is not supported'));((e,r,s)=>{const{expected:n,remainingDelay:a}=o(e,s);t.set(r,setTimeout(i,a,t,r,n,"timeout"))})(r,a,s)}}}}catch(e){postMessage({error:{message:e.message},id:n.id,result:null})}}))})();`;
  const loadOrReturnBroker = createLoadOrReturnBroker(load, worker);
  const clearInterval$1 = (timerId) => loadOrReturnBroker().clearInterval(timerId);
  const clearTimeout$1 = (timerId) => loadOrReturnBroker().clearTimeout(timerId);
  const setInterval$1 = (...args2) => loadOrReturnBroker().setInterval(...args2);
  const setTimeout$1 = (...args2) => loadOrReturnBroker().setTimeout(...args2);
  const QmsgUtils = {
    /**
     * 生成带插件名的名称
     * @param args
     */
    getNameSpacify(...args2) {
      let result2 = QmsgConfig.NAMESPACE;
      for (let index = 0; index < args2.length; ++index) {
        result2 += "-" + args2[index];
      }
      return result2;
    },
    /**
     * 判断字符是否是数字
     * @param text 需要判断的字符串
     */
    isNumber(text) {
      let isNumberPattern = /^\d+$/;
      return isNumberPattern.test(text);
    },
    /**
     * 获取唯一性的UUID
     */
    getUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(value) {
        let randValue = Math.random() * 16 | 0, newValue = value == "x" ? randValue : randValue & 3 | 8;
        return newValue.toString(16);
      });
    },
    /**
     * 合并参数为配置信息，用于创建Msg实例
     * @param content 文本内容
     * @param config 配置
     */
    mergeArgs(content = "", config) {
      let opts = {};
      if (arguments.length === 0) {
        return opts;
      }
      if (config != null) {
        opts.content = content;
        if (typeof config === "object" && config != null) {
          return Object.assign(opts, config);
        }
      } else {
        if (typeof content === "object" && content != null) {
          return Object.assign(opts, content);
        } else {
          opts.content = content;
        }
      }
      return opts;
    },
    /**
     * 通过配置信息 来判断是否为同一条消息,并返回消息实例
     * @param option 配置项
     */
    judgeReMsg(option) {
      option = option || {};
      let optionString = JSON.stringify(option);
      let findQmsgItemInfo = QmsgInstanceStorage.QmsgList.find((item) => {
        return item.config === optionString;
      });
      let QmsgInstance = findQmsgItemInfo == null ? void 0 : findQmsgItemInfo.instance;
      if (QmsgInstance == null) {
        let uuid = QmsgUtils.getUUID();
        let QmsgItemInfo = {
          uuid,
          config: optionString,
          instance: new QmsgMsg(option, uuid)
        };
        QmsgInstanceStorage.QmsgList.push(QmsgItemInfo);
        let QmsgListLength = QmsgInstanceStorage.QmsgList.length;
        let maxNums = QmsgItemInfo.instance.getSetting().maxNums;
        if (QmsgListLength > maxNums) {
          for (let index = 0; index < QmsgListLength - maxNums; index++) {
            let item = QmsgInstanceStorage.QmsgList[index];
            item && item.instance.getSetting().autoClose && item.instance.close();
          }
        }
        findQmsgItemInfo = QmsgItemInfo;
        QmsgInstance = QmsgItemInfo.instance;
      } else {
        if (!QmsgInstance.getRepeatNum()) {
          QmsgInstance.setRepeatNum(2);
        } else {
          if (QmsgInstance.getRepeatNum() >= 99) ;
          else {
            QmsgInstance.setRepeatNumIncreasing();
          }
        }
        QmsgInstance.setMsgCount();
      }
      if (QmsgInstance) {
        QmsgInstance.$Qmsg.setAttribute("data-count", QmsgInstance == null ? void 0 : QmsgInstance.getRepeatNum().toString());
      } else {
        throw new TypeError("QmsgInstance is null");
      }
      return QmsgInstance;
    },
    /**
     * 转换为动态对象
     * @param obj 需要配置的对象
     * @param other_obj 获取的其它对象
     */
    toDynamicObject(obj, ...other_objs) {
      let __obj__ = Object.assign({}, obj);
      Object.keys(__obj__).forEach((keyName) => {
        let objValue = __obj__[keyName];
        Object.defineProperty(__obj__, keyName, {
          get() {
            let findIndex = other_objs.findIndex((other_obj) => {
              return other_obj.hasOwnProperty.call(other_obj, keyName);
            });
            if (findIndex !== -1) {
              return other_objs[findIndex][keyName];
            } else {
              return objValue;
            }
          },
          set(newValue) {
            objValue = newValue;
          }
        });
      });
      return __obj__;
    },
    /**
     * 自动使用 Worker 执行 setTimeout
     */
    setTimeout(callback2, timeout) {
      try {
        return setTimeout$1(callback2, timeout);
      } catch (error2) {
        return globalThis.setTimeout(callback2, timeout);
      }
    },
    /**
     * 配合 QmsgUtils.setTimeout 使用
     */
    clearTimeout(timeId) {
      try {
        if (timeId != null) {
          clearTimeout$1(timeId);
        }
      } catch (error2) {
      } finally {
        globalThis.clearTimeout(timeId);
      }
    },
    /**
     * 自动使用 Worker 执行 setInterval
     */
    setInterval(callback2, timeout) {
      try {
        return setInterval$1(callback2, timeout);
      } catch (error2) {
        return globalThis.setInterval(callback2, timeout);
      }
    },
    /**
     * 配合 QmsgUtils.setInterval 使用
     */
    clearInterval(timeId) {
      try {
        if (timeId != null) {
          clearInterval$1(timeId);
        }
      } catch (error2) {
      } finally {
        globalThis.clearInterval(timeId);
      }
    }
  };
  CompatibleProcessing();
  const QmsgEvent = {
    visibilitychange: {
      eventConfig: {
        /**
         * 添加visibilitychange事件监听
         * 当页面切换时，如果切换前的页面存在Qmsg实例且未关闭，切换后，页面活跃度会降低，导致setTimeout/setInterval失效或丢失事件
         * 监听visibilitychange，判断切换回来时，如果当前时间-开始时间大于timeout，则关闭
         * 如果设置了动画，使用close，否则使用destroy
         */
        callback() {
          if (document.visibilityState === "visible") {
            for (let index = 0; index < QmsgInstanceStorage.QmsgList.length; index++) {
              let QmsgInstance = QmsgInstanceStorage.QmsgList[index];
              if (QmsgInstance.instance.endTime == null && QmsgInstance.instance.startTime != null && Date.now() - QmsgInstance.instance.startTime >= QmsgInstance.instance.getSetting().timeout) {
                QmsgInstance.instance.close();
              }
            }
          }
        },
        option: {
          capture: true
        }
      },
      addEvent() {
        if ("visibilityState" in document) {
          document.addEventListener("visibilitychange", QmsgEvent.visibilitychange.eventConfig.callback, QmsgEvent.visibilitychange.eventConfig.option);
        } else {
          console.error("visibilityState not support");
        }
      },
      removeEvent() {
        document.removeEventListener("visibilitychange", QmsgEvent.visibilitychange.eventConfig.callback, QmsgEvent.visibilitychange.eventConfig.option);
      }
    }
  };
  class Qmsg {
    constructor() {
      /** 数据 */
      __publicField(this, "$data");
      __publicField(this, "$eventUtils");
      this.$data = {
        version: "2024.12.6",
        config: QmsgConfig,
        icon: QmsgIcon,
        instanceStorage: QmsgInstanceStorage
      };
      this.$eventUtils = QmsgEvent;
      this.$eventUtils.visibilitychange.addEvent();
    }
    /**
     * 修改默认配置
     * @param option
     */
    config(option) {
      if (option == null)
        return;
      if (typeof option !== "object")
        return;
      QmsgConfig.INS_DEFAULT = null;
      QmsgConfig.INS_DEFAULT = option;
    }
    info(content, option) {
      let params = QmsgUtils.mergeArgs(content, option);
      params.type = "info";
      return QmsgUtils.judgeReMsg.call(this, params);
    }
    warning(content, option) {
      let params = QmsgUtils.mergeArgs(content, option);
      params.type = "warning";
      return QmsgUtils.judgeReMsg.call(this, params);
    }
    success(content, option) {
      let params = QmsgUtils.mergeArgs(content, option);
      params.type = "success";
      return QmsgUtils.judgeReMsg.call(this, params);
    }
    error(content, option) {
      let params = QmsgUtils.mergeArgs(content, option);
      params.type = "error";
      return QmsgUtils.judgeReMsg.call(this, params);
    }
    loading(content, config) {
      let params = QmsgUtils.mergeArgs(content, config);
      params.type = "loading";
      params.autoClose = false;
      return QmsgUtils.judgeReMsg.call(this, params);
    }
    /**
     * 根据uuid删除Qmsg实例和元素
     * @param uuid
     */
    remove(uuid) {
      QmsgInstanceStorage.remove(uuid);
    }
    /**
     * 关闭当前Qmsg创建的所有的实例
     */
    closeAll() {
      for (let index = QmsgInstanceStorage.QmsgList.length - 1; index >= 0; index--) {
        let item = QmsgInstanceStorage.QmsgList[index];
        item && item.instance && item.instance.close();
      }
    }
  }
  let qmsg = new Qmsg();
  let WindowApi$1 = class WindowApi2 {
    constructor(option) {
      /** 默认的配置 */
      __publicField(this, "defaultApi", {
        document,
        window,
        globalThis,
        self,
        top
      });
      /** 使用的配置 */
      __publicField(this, "api");
      if (option) {
        if (option.globalThis == null) {
          option.globalThis = option.window;
        }
        if (option.self == null) {
          option.self = option.window;
        }
      }
      if (!option) {
        option = Object.assign({}, this.defaultApi);
      }
      this.api = Object.assign({}, option);
    }
    get document() {
      return this.api.document;
    }
    get window() {
      return this.api.window;
    }
    get globalThis() {
      return this.api.globalThis;
    }
    get self() {
      return this.api.self;
    }
    get top() {
      return this.api.top;
    }
  };
  const DOMUtilsCommonUtils = {
    windowApi: new WindowApi$1({
      document,
      window,
      top
    }),
    /**
     * 判断元素是否已显示或已连接
     * @param element
     */
    isShow(element) {
      return Boolean(element.getClientRects().length);
    },
    /**
     * 用于显示元素并获取它的高度宽度等其它属性
     * @param element
     */
    showElement(element) {
      let dupNode = element.cloneNode(true);
      dupNode.setAttribute("style", "visibility: hidden !important;display:block !important;");
      this.windowApi.document.documentElement.appendChild(dupNode);
      return {
        /**
         * 恢复修改的style
         */
        recovery() {
          dupNode.remove();
        }
      };
    },
    /**
     * 获取元素上的Float格式的属性px
     * @param element
     * @param styleName style名
     */
    getStyleValue(element, styleName) {
      let view = null;
      let styles = null;
      if (element instanceof CSSStyleDeclaration) {
        styles = element;
      } else {
        view = element.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window;
        }
        styles = view.getComputedStyle(element);
      }
      let value = parseFloat(styles[styleName]);
      if (isNaN(value)) {
        return 0;
      } else {
        return value;
      }
    },
    /**
     * 判断是否是window，例如window、self、globalThis
     * @param target
     */
    isWin(target) {
      var _a2;
      if (typeof target !== "object") {
        return false;
      }
      if (target instanceof Node) {
        return false;
      }
      if (target === globalThis) {
        return true;
      }
      if (target === window) {
        return true;
      }
      if (target === self) {
        return true;
      }
      if (target === globalThis) {
        return true;
      }
      if (target === window) {
        return true;
      }
      if (target === self) {
        return true;
      }
      if (typeof unsafeWindow !== "undefined" && target === unsafeWindow) {
        return true;
      }
      if (((_a2 = target == null ? void 0 : target.Math) == null ? void 0 : _a2.toString()) !== "[object Math]") {
        return false;
      }
      return true;
    },
    /**
     * 删除对象上的属性
     * @param target
     * @param propName
     */
    delete(target, propName) {
      if (typeof Reflect === "object" && Reflect.deleteProperty) {
        Reflect.deleteProperty(target, propName);
      } else {
        delete target[propName];
      }
    }
  };
  const DOMUtilsData = {
    /** .on添加在元素存储的事件 */
    SymbolEvents: Symbol("events_" + ((1 + Math.random()) * 65536 | 0).toString(16).substring(1))
  };
  const OriginPrototype$1 = {
    Object: {
      defineProperty: Object.defineProperty
    }
  };
  class DOMUtilsEvent {
    constructor(windowApiOption) {
      __publicField(this, "windowApi");
      this.windowApi = new WindowApi$1(windowApiOption);
    }
    on(element, eventType, selector, callback2, option) {
      function getOption(args3, startIndex, option2) {
        let currentParam = args3[startIndex];
        if (typeof currentParam === "boolean") {
          option2.capture = currentParam;
          if (typeof args3[startIndex + 1] === "boolean") {
            option2.once = args3[startIndex + 1];
          }
          if (typeof args3[startIndex + 2] === "boolean") {
            option2.passive = args3[startIndex + 2];
          }
        } else if (typeof currentParam === "object" && ("capture" in currentParam || "once" in currentParam || "passive" in currentParam || "isComposedPath" in currentParam)) {
          option2.capture = currentParam.capture;
          option2.once = currentParam.once;
          option2.passive = currentParam.passive;
          option2.isComposedPath = currentParam.isComposedPath;
        }
        return option2;
      }
      let DOMUtilsContext = this;
      let args2 = arguments;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      let elementList = [];
      if (element instanceof NodeList || Array.isArray(element)) {
        element = element;
        elementList = [...element];
      } else {
        elementList.push(element);
      }
      let eventTypeList = [];
      if (Array.isArray(eventType)) {
        eventTypeList = eventTypeList.concat(eventType);
      } else if (typeof eventType === "string") {
        eventTypeList = eventTypeList.concat(eventType.split(" "));
      }
      let selectorList = [];
      if (Array.isArray(selector)) {
        selectorList = selectorList.concat(selector);
      } else if (typeof selector === "string") {
        selectorList.push(selector);
      }
      let listenerCallBack = callback2;
      let listenerOption = {
        capture: false,
        once: false,
        passive: false,
        isComposedPath: false
      };
      if (typeof selector === "function") {
        listenerCallBack = selector;
        listenerOption = getOption(args2, 3, listenerOption);
      } else {
        listenerOption = getOption(args2, 4, listenerOption);
      }
      function checkOptionOnceToRemoveEventListener() {
        if (listenerOption.once) {
          DOMUtilsContext.off(element, eventType, selector, callback2, option);
        }
      }
      elementList.forEach((elementItem) => {
        function domUtilsEventCallBack(event) {
          if (selectorList.length) {
            let eventTarget = listenerOption.isComposedPath ? event.composedPath()[0] : event.target;
            let totalParent = DOMUtilsCommonUtils.isWin(elementItem) ? DOMUtilsContext.windowApi.document.documentElement : elementItem;
            let findValue = selectorList.find((selectorItem) => {
              if (eventTarget.matches(selectorItem)) {
                return true;
              }
              let $closestMatches = eventTarget.closest(selectorItem);
              if ($closestMatches && totalParent.contains($closestMatches)) {
                eventTarget = $closestMatches;
                return true;
              }
              return false;
            });
            if (findValue) {
              try {
                OriginPrototype$1.Object.defineProperty(event, "target", {
                  get() {
                    return eventTarget;
                  }
                });
              } catch (error2) {
              }
              listenerCallBack.call(eventTarget, event, eventTarget);
              checkOptionOnceToRemoveEventListener();
            }
          } else {
            listenerCallBack.call(elementItem, event);
            checkOptionOnceToRemoveEventListener();
          }
        }
        eventTypeList.forEach((eventName) => {
          elementItem.addEventListener(eventName, domUtilsEventCallBack, listenerOption);
          let elementEvents = elementItem[DOMUtilsData.SymbolEvents] || {};
          elementEvents[eventName] = elementEvents[eventName] || [];
          elementEvents[eventName].push({
            selector: selectorList,
            option: listenerOption,
            callback: domUtilsEventCallBack,
            originCallBack: listenerCallBack
          });
          elementItem[DOMUtilsData.SymbolEvents] = elementEvents;
        });
      });
    }
    off(element, eventType, selector, callback2, option, filter) {
      function getOption(args1, startIndex, option2) {
        let currentParam = args1[startIndex];
        if (typeof currentParam === "boolean") {
          option2.capture = currentParam;
        } else if (typeof currentParam === "object" && "capture" in currentParam) {
          option2.capture = currentParam.capture;
        }
        return option2;
      }
      let DOMUtilsContext = this;
      let args2 = arguments;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      let elementList = [];
      if (element instanceof NodeList || Array.isArray(element)) {
        element = element;
        elementList = [...element];
      } else {
        elementList.push(element);
      }
      let eventTypeList = [];
      if (Array.isArray(eventType)) {
        eventTypeList = eventTypeList.concat(eventType);
      } else if (typeof eventType === "string") {
        eventTypeList = eventTypeList.concat(eventType.split(" "));
      }
      let selectorList = [];
      if (Array.isArray(selector)) {
        selectorList = selectorList.concat(selector);
      } else if (typeof selector === "string") {
        selectorList.push(selector);
      }
      let listenerCallBack = callback2;
      let listenerOption = {
        capture: false
      };
      if (typeof selector === "function") {
        listenerCallBack = selector;
        listenerOption = getOption(args2, 3, listenerOption);
      } else {
        listenerOption = getOption(args2, 4, listenerOption);
      }
      let isRemoveAll = false;
      if (args2.length === 2) {
        isRemoveAll = true;
      } else if (args2.length === 3 && typeof args2[2] === "string" || Array.isArray(args2[2])) {
        isRemoveAll = true;
      }
      elementList.forEach((elementItem) => {
        let elementEvents = elementItem[DOMUtilsData.SymbolEvents] || {};
        eventTypeList.forEach((eventName) => {
          let handlers = elementEvents[eventName] || [];
          if (typeof filter === "function") {
            handlers = handlers.filter(filter);
          }
          for (let index = 0; index < handlers.length; index++) {
            let handler = handlers[index];
            let flag = true;
            if (flag && listenerCallBack && handler.originCallBack !== listenerCallBack) {
              flag = false;
            }
            if (flag && selectorList.length && Array.isArray(handler.selector)) {
              if (JSON.stringify(handler.selector) !== JSON.stringify(selectorList)) {
                flag = false;
              }
            }
            if (flag && listenerOption.capture !== handler.option.capture) {
              flag = false;
            }
            if (flag || isRemoveAll) {
              elementItem.removeEventListener(eventName, handler.callback, handler.option);
              handlers.splice(index--, 1);
            }
          }
          if (handlers.length === 0) {
            DOMUtilsCommonUtils.delete(elementEvents, eventType);
          }
        });
        elementItem[DOMUtilsData.SymbolEvents] = elementEvents;
      });
    }
    /**
     * 取消绑定所有的事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType （可选）需要取消监听的事件
     */
    offAll(element, eventType) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      let elementList = [];
      if (element instanceof NodeList || Array.isArray(element)) {
        elementList = [...element];
      } else {
        elementList.push(element);
      }
      let eventTypeList = [];
      if (Array.isArray(eventType)) {
        eventTypeList = eventTypeList.concat(eventType);
      } else if (typeof eventType === "string") {
        eventTypeList = eventTypeList.concat(eventType.split(" "));
      }
      elementList.forEach((elementItem) => {
        Object.getOwnPropertySymbols(elementItem).forEach((symbolEvents) => {
          if (!symbolEvents.toString().startsWith("Symbol(events_")) {
            return;
          }
          let elementEvents = elementItem[symbolEvents] || {};
          let iterEventNameList = eventTypeList.length ? eventTypeList : Object.keys(elementEvents);
          iterEventNameList.forEach((eventName) => {
            let handlers = elementEvents[eventName];
            if (!handlers) {
              return;
            }
            for (const handler of handlers) {
              elementItem.removeEventListener(eventName, handler.callback, {
                capture: handler["option"]["capture"]
              });
            }
            DOMUtilsCommonUtils.delete(elementItem[symbolEvents], eventName);
          });
        });
      });
    }
    /**
     * 等待文档加载完成后执行指定的函数
     * @param callback 需要执行的函数
     * @example
     * DOMUtils.ready(function(){
     *   console.log("文档加载完毕")
     * })
     */
    ready(callback2) {
      if (typeof callback2 !== "function") {
        return;
      }
      let DOMUtilsContext = this;
      function checkDOMReadyState() {
        try {
          if (DOMUtilsContext.windowApi.document.readyState === "complete" || DOMUtilsContext.windowApi.document.readyState !== "loading" && !DOMUtilsContext.windowApi.document.documentElement.doScroll) {
            return true;
          } else {
            return false;
          }
        } catch (error2) {
          return false;
        }
      }
      function completed() {
        removeDomReadyListener();
        callback2();
      }
      let targetList = [
        {
          target: DOMUtilsContext.windowApi.document,
          eventType: "DOMContentLoaded",
          callback: completed
        },
        {
          target: DOMUtilsContext.windowApi.window,
          eventType: "load",
          callback: completed
        }
      ];
      function addDomReadyListener() {
        for (let index = 0; index < targetList.length; index++) {
          let item = targetList[index];
          item.target.addEventListener(item.eventType, item.callback);
        }
      }
      function removeDomReadyListener() {
        for (let index = 0; index < targetList.length; index++) {
          let item = targetList[index];
          item.target.removeEventListener(item.eventType, item.callback);
        }
      }
      if (checkDOMReadyState()) {
        setTimeout(callback2);
      } else {
        addDomReadyListener();
      }
    }
    /**
     * 主动触发事件
     * @param element 需要触发的元素|元素数组|window
     * @param eventType 需要触发的事件
     * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
     * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click")
     * DOMUtils.trigger("a.xx","click")
     * // 触发元素a.xx的click、tap、hover事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
     * DOMUtils.trigger("a.xx",["click","tap","hover"])
     */
    trigger(element, eventType, details, useDispatchToTriggerEvent = true) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      let elementList = [];
      if (element instanceof NodeList || Array.isArray(element)) {
        element = element;
        elementList = [...element];
      } else {
        elementList = [element];
      }
      let eventTypeList = [];
      if (Array.isArray(eventType)) {
        eventTypeList = eventType;
      } else if (typeof eventType === "string") {
        eventTypeList = eventType.split(" ");
      }
      elementList.forEach((elementItem) => {
        let events = elementItem[DOMUtilsData.SymbolEvents] || {};
        eventTypeList.forEach((_eventType_) => {
          let event = null;
          if (details && details instanceof Event) {
            event = details;
          } else {
            event = new Event(_eventType_);
            if (details) {
              Object.keys(details).forEach((keyName) => {
                event[keyName] = details[keyName];
              });
            }
          }
          if (useDispatchToTriggerEvent == false && _eventType_ in events) {
            events[_eventType_].forEach((eventsItem) => {
              eventsItem.callback(event);
            });
          } else {
            elementItem.dispatchEvent(event);
          }
        });
      });
    }
    /**
     * 绑定或触发元素的click事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.click(document.querySelector("a.xx"))
     * DOMUtils.click("a.xx")
     * DOMUtils.click("a.xx"，function(){
     *  console.log("触发click事件成功")
     * })
     * */
    click(element, handler, details, useDispatchToTriggerEvent) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.click($ele, handler, details, useDispatchToTriggerEvent);
        });
        return;
      }
      if (handler == null) {
        DOMUtilsContext.trigger(element, "click", details, useDispatchToTriggerEvent);
      } else {
        DOMUtilsContext.on(element, "click", null, handler);
      }
    }
    /**
     * 绑定或触发元素的blur事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的blur事件
     * DOMUtils.blur(document.querySelector("a.xx"))
     * DOMUtils.blur("a.xx")
     * DOMUtils.blur("a.xx"，function(){
     *  console.log("触发blur事件成功")
     * })
     * */
    blur(element, handler, details, useDispatchToTriggerEvent) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.focus($ele, handler, details, useDispatchToTriggerEvent);
        });
        return;
      }
      if (handler === null) {
        DOMUtilsContext.trigger(element, "blur", details, useDispatchToTriggerEvent);
      } else {
        DOMUtilsContext.on(element, "blur", null, handler);
      }
    }
    /**
     * 绑定或触发元素的focus事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的focus事件
     * DOMUtils.focus(document.querySelector("a.xx"))
     * DOMUtils.focus("a.xx")
     * DOMUtils.focus("a.xx"，function(){
     *  console.log("触发focus事件成功")
     * })
     * */
    focus(element, handler, details, useDispatchToTriggerEvent) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.focus($ele, handler, details, useDispatchToTriggerEvent);
        });
        return;
      }
      if (handler == null) {
        DOMUtilsContext.trigger(element, "focus", details, useDispatchToTriggerEvent);
      } else {
        DOMUtilsContext.on(element, "focus", null, handler);
      }
    }
    /**
     * 当鼠标移入或移出元素时触发事件
     * @param element 当前元素
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的移入或移出
     * DOMUtils.hover(document.querySelector("a.xx"),()=>{
     *   console.log("移入/移除");
     * })
     * DOMUtils.hover("a.xx",()=>{
     *   console.log("移入/移除");
     * })
     */
    hover(element, handler, option) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.hover($ele, handler, option);
        });
        return;
      }
      DOMUtilsContext.on(element, "mouseenter", null, handler, option);
      DOMUtilsContext.on(element, "mouseleave", null, handler, option);
    }
    /**
     * 当按键松开时触发事件
     * keydown - > keypress - > keyup
     * @param element 当前元素
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键松开
     * DOMUtils.keyup(document.querySelector("a.xx"),()=>{
     *   console.log("按键松开");
     * })
     * DOMUtils.keyup("a.xx",()=>{
     *   console.log("按键松开");
     * })
     */
    keyup(element, handler, option) {
      let DOMUtilsContext = this;
      if (element == null) {
        return;
      }
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.keyup($ele, handler, option);
        });
        return;
      }
      DOMUtilsContext.on(element, "keyup", null, handler, option);
    }
    /**
     * 当按键按下时触发事件
     * keydown - > keypress - > keyup
     * @param element 目标
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键按下
     * DOMUtils.keydown(document.querySelector("a.xx"),()=>{
     *   console.log("按键按下");
     * })
     * DOMUtils.keydown("a.xx",()=>{
     *   console.log("按键按下");
     * })
     */
    keydown(element, handler, option) {
      let DOMUtilsContext = this;
      if (element == null) {
        return;
      }
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.keydown($ele, handler, option);
        });
        return;
      }
      DOMUtilsContext.on(element, "keydown", null, handler, option);
    }
    /**
     * 当按键按下时触发事件
     * keydown - > keypress - > keyup
     * @param element 目标
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键按下
     * DOMUtils.keypress(document.querySelector("a.xx"),()=>{
     *   console.log("按键按下");
     * })
     * DOMUtils.keypress("a.xx",()=>{
     *   console.log("按键按下");
     * })
     */
    keypress(element, handler, option) {
      let DOMUtilsContext = this;
      if (element == null) {
        return;
      }
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.keypress($ele, handler, option);
        });
        return;
      }
      DOMUtilsContext.on(element, "keypress", null, handler, option);
    }
    /**
       * 监听某个元素键盘按键事件或window全局按键事件
       * 按下有值的键时触发，按下Ctrl\Alt\Shift\Meta是无值键。按下先触发keydown事件，再触发keypress事件。
       * @param element 需要监听的对象，可以是全局Window或者某个元素
       * @param eventName 事件名，默认keypress
       * @param callback 自己定义的回调事件，参数1为当前的key，参数2为组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
       * @param options 监听事件的配置
       * @example
          Utils.listenKeyboard(window,(keyName,keyValue,otherKey,event)=>{
              if(keyName === "Enter"){
                  console.log("回车按键的值是："+keyValue)
              }
              if(otherKey.indexOf("ctrl") && keyName === "Enter" ){
                  console.log("Ctrl和回车键");
            }
          })
       * @example
      字母和数字键的键码值(keyCode)
        按键	键码	按键	键码	按键	键码	按键	键码
        A	65	J	74	S	83	1	49
        B	66	K	75	T	84	2	50
        C	67	L	76	U	85	3	51
        D	68	M	77	V	86	4	52
        E	69	N	78	W	87	5	53
        F	70	O	79	X	88	6	54
        G	71	P	80	Y	89	7	55
        H	72	Q	81	Z	90	8	56
        I	73	R	82	0	48	9	57
    
        数字键盘上的键的键码值(keyCode)
        功能键键码值(keyCode)
        按键	键码	按键  	键码	按键	键码	按键	键码
        0	96	8	104	F1	112	F7	118
        1	97	9	105	F2	113	F8	119
        2	98	*	106	F3	114	F9	120
        3	99	+	107	F4	115	F10	121
        4	100	Enter	108	F5	116	F11	122
        5	101	-	109	F6	117	F12	123
        6	102	.	110
        7	103	/	111
        
        控制键键码值(keyCode)
        按键		键码	按键		键码	按键		键码	按键		键码
        BackSpace	8	Esc		27	→		39	-_		189
        Tab		9	Spacebar	32	↓		40	.>		190
        Clear		12	Page Up		33	Insert		45	/?		191
        Enter		13	Page Down	34	Delete		46	`~		192
        Shift		16	End		35	Num Lock	144	[{		219
        Control		17	Home		36	;:		186	\|		220
        Alt		18	←		37	=+		187	]}		221
        Cape Lock	20	↑		38	,<		188	'"		222
    
        多媒体键码值(keyCode)
        按键		键码
        音量加		175
        音量减		174
        停止		179
        静音		173
        浏览器		172
        邮件		180
        搜索		170
        收藏		171
       **/
    listenKeyboard(element, eventName = "keypress", callback2, options) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      let keyboardEventCallBack = function(event) {
        let keyName = event.key || event.code;
        let keyValue = event.charCode || event.keyCode || event.which;
        let otherCodeList = [];
        if (event.ctrlKey) {
          otherCodeList.push("ctrl");
        }
        if (event.altKey) {
          otherCodeList.push("alt");
        }
        if (event.metaKey) {
          otherCodeList.push("meta");
        }
        if (event.shiftKey) {
          otherCodeList.push("shift");
        }
        if (typeof callback2 === "function") {
          callback2(keyName, keyValue, otherCodeList, event);
        }
      };
      DOMUtilsContext.on(element, eventName, keyboardEventCallBack, options);
      return {
        removeListen: () => {
          DOMUtilsContext.off(element, eventName, keyboardEventCallBack, options);
        }
      };
    }
    selector(selector) {
      return this.selectorAll(selector)[0];
    }
    selectorAll(selector) {
      const context2 = this;
      selector = selector.trim();
      if (selector.match(/[^\s]{1}:empty$/gi)) {
        selector = selector.replace(/:empty$/gi, "");
        return Array.from(context2.windowApi.document.querySelectorAll(selector)).filter(($ele) => {
          var _a2;
          return ((_a2 = $ele == null ? void 0 : $ele.innerHTML) == null ? void 0 : _a2.trim()) === "";
        });
      } else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
        let textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
        let text = textMatch[2];
        selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
        return Array.from(context2.windowApi.document.querySelectorAll(selector)).filter(($ele) => {
          var _a2;
          return (_a2 = ($ele == null ? void 0 : $ele.textContent) || ($ele == null ? void 0 : $ele.innerText)) == null ? void 0 : _a2.includes(text);
        });
      } else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
        let textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
        let pattern = textMatch[2];
        let flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
        let flags = "";
        if (flagMatch) {
          pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
          flags = flagMatch[3];
        }
        let regexp = new RegExp(pattern, flags);
        selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
        return Array.from(context2.windowApi.document.querySelectorAll(selector)).filter(($ele) => {
          var _a2;
          return Boolean((_a2 = ($ele == null ? void 0 : $ele.textContent) || ($ele == null ? void 0 : $ele.innerText)) == null ? void 0 : _a2.match(regexp));
        });
      } else {
        return Array.from(context2.windowApi.document.querySelectorAll(selector));
      }
    }
  }
  const isNodeList = ($ele) => {
    return Array.isArray($ele) || $ele instanceof NodeList;
  };
  class DOMUtils extends DOMUtilsEvent {
    constructor(option) {
      super(option);
      /** 版本号 */
      __publicField(this, "version", "2024.12.4");
    }
    attr(element, attrName, attrValue) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        if (attrValue == null) {
          return DOMUtilsContext.attr(element[0], attrName, attrValue);
        } else {
          element.forEach(($ele) => {
            DOMUtilsContext.attr($ele, attrName, attrValue);
          });
          return;
        }
      }
      if (attrValue == null) {
        return element.getAttribute(attrName);
      } else {
        element.setAttribute(attrName, attrValue);
      }
    }
    /**
     * 创建元素
     * @param tagName 标签名
     * @param property 属性
     * @param attributes 元素上的自定义属性
     * @example
     * // 创建一个DIV元素，且属性class为xxx
     * DOMUtils.createElement("div",undefined,{ class:"xxx" });
     * > <div class="xxx"></div>
     * @example
     * // 创建一个DIV元素
     * DOMUtils.createElement("div");
     * > <div></div>
     * @example
     * // 创建一个DIV元素
     * DOMUtils.createElement("div","测试");
     * > <div>测试</div>
     */
    createElement(tagName, property, attributes) {
      let DOMUtilsContext = this;
      let tempElement = DOMUtilsContext.windowApi.document.createElement(tagName);
      if (typeof property === "string") {
        tempElement.innerHTML = property;
        return tempElement;
      }
      if (property == null) {
        property = {};
      }
      if (attributes == null) {
        attributes = {};
      }
      Object.keys(property).forEach((key) => {
        let value = property[key];
        tempElement[key] = value;
      });
      Object.keys(attributes).forEach((key) => {
        let value = attributes[key];
        if (typeof value === "object") {
          value = JSON.stringify(value);
        } else if (typeof value === "function") {
          value = value.toString();
        }
        tempElement.setAttribute(key, value);
      });
      return tempElement;
    }
    css(element, property, value) {
      let DOMUtilsContext = this;
      function handlePixe(propertyName, propertyValue) {
        let allowAddPixe = [
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "font-size"
        ];
        if (typeof propertyValue === "number") {
          propertyValue = propertyValue.toString();
        }
        if (typeof propertyValue === "string" && allowAddPixe.includes(propertyName) && propertyValue.match(/[0-9]$/gi)) {
          propertyValue = propertyValue + "px";
        }
        return propertyValue;
      }
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        if (typeof property === "string") {
          if (value == null) {
            return DOMUtilsContext.css(element[0], property);
          } else {
            element.forEach(($ele) => {
              DOMUtilsContext.css($ele, property);
            });
            return;
          }
        } else if (typeof property === "object") {
          element.forEach(($ele) => {
            DOMUtilsContext.css($ele, property);
          });
          return;
        } else ;
        return;
      }
      if (typeof property === "string") {
        if (value == null) {
          return DOMUtilsContext.windowApi.globalThis.getComputedStyle(element).getPropertyValue(property);
        } else {
          if (value === "string" && value.includes("!important")) {
            element.style.setProperty(property, value, "important");
          } else {
            value = handlePixe(property, value);
            element.style.setProperty(property, value);
          }
        }
      } else if (typeof property === "object") {
        for (let prop in property) {
          if (typeof property[prop] === "string" && property[prop].includes("!important")) {
            element.style.setProperty(prop, property[prop], "important");
          } else {
            property[prop] = handlePixe(prop, property[prop]);
            element.style.setProperty(prop, property[prop]);
          }
        }
      } else ;
    }
    text(element, text) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        if (text == null) {
          return DOMUtilsContext.text(element[0]);
        } else {
          element.forEach(($ele) => {
            DOMUtilsContext.text($ele, text);
          });
        }
        return;
      }
      if (text == null) {
        return element.textContent || element.innerText;
      } else {
        if (text instanceof Node) {
          text = text.textContent || text.innerText;
        }
        if ("textContent" in element) {
          element.textContent = text;
        } else if ("innerText" in element) {
          element.innerText = text;
        }
      }
    }
    html(element, html) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        if (html == null) {
          return DOMUtilsContext.html(element[0]);
        } else {
          element.forEach(($ele) => {
            DOMUtilsContext.html($ele, html);
          });
        }
        return;
      }
      if (html == null) {
        return element.innerHTML;
      } else {
        if (html instanceof Element) {
          html = html.innerHTML;
        }
        if ("innerHTML" in element) {
          element.innerHTML = html;
        }
      }
    }
    /**
     * 获取移动元素的transform偏移
     */
    getTransform(element, isShow = false) {
      var _a2;
      let DOMUtilsContext = this;
      let transform_left = 0;
      let transform_top = 0;
      if (!(isShow || !isShow && DOMUtilsCommonUtils.isShow(element))) {
        let { recovery } = DOMUtilsCommonUtils.showElement(element);
        let transformInfo = DOMUtilsContext.getTransform(element, true);
        recovery();
        return transformInfo;
      }
      let elementTransform = DOMUtilsContext.windowApi.globalThis.getComputedStyle(element).transform;
      if (elementTransform != null && elementTransform !== "none" && elementTransform !== "") {
        let elementTransformSplit = (_a2 = elementTransform.match(/\((.+)\)/)) == null ? void 0 : _a2[1].split(",");
        if (elementTransformSplit) {
          transform_left = Math.abs(parseInt(elementTransformSplit[4]));
          transform_top = Math.abs(parseInt(elementTransformSplit[5]));
        } else {
          transform_left = 0;
          transform_top = 0;
        }
      }
      return {
        transformLeft: transform_left,
        transformTop: transform_top
      };
    }
    val(element, value) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        if (value == null) {
          return DOMUtilsContext.val(element[0]);
        } else {
          element.forEach(($ele) => {
            DOMUtilsContext.val($ele, value);
          });
        }
        return;
      }
      if (value == null) {
        if (element.localName === "input" && (element.type === "checkbox" || element.type === "radio")) {
          return element.checked;
        } else {
          return element.value;
        }
      } else {
        if (element.localName === "input" && (element.type === "checkbox" || element.type === "radio")) {
          element.checked = !!value;
        } else {
          element.value = value;
        }
      }
    }
    prop(element, propName, propValue) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        if (propValue == null) {
          return DOMUtilsContext.prop(element[0], propName);
        } else {
          element.forEach(($ele) => {
            DOMUtilsContext.prop($ele, propName, propValue);
          });
        }
        return;
      }
      if (propValue == null) {
        return Reflect.get(element, propName);
      } else {
        Reflect.set(element, propName, propValue);
      }
    }
    /**
     * 移除元素的属性
     * @param element 目标元素
     * @param attrName 属性名
     * @example
     * // 移除元素a.xx的属性data-value
     * DOMUtils.removeAttr(document.querySelector("a.xx"),"data-value")
     * DOMUtils.removeAttr("a.xx","data-value")
     * */
    removeAttr(element, attrName) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.removeAttr($ele, attrName);
        });
        return;
      }
      element.removeAttribute(attrName);
    }
    /**
     * 移除元素class名
     * @param element 目标元素
     * @param className 类名
     * @example
     * // 移除元素a.xx的className为xx
     * DOMUtils.removeClass(document.querySelector("a.xx"),"xx")
     * DOMUtils.removeClass("a.xx","xx")
     */
    removeClass(element, className) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.removeClass($ele, className);
        });
        return;
      }
      if (className == null) {
        element.className = "";
      } else {
        if (!Array.isArray(className)) {
          className = className.split(" ");
        }
        className.forEach((itemClassName) => {
          element.classList.remove(itemClassName);
        });
      }
    }
    /**
     * 移除元素的属性
     * @param element 目标元素
     * @param propName 属性名
     * @example
     * // 移除元素a.xx的href属性
     * DOMUtils.removeProp(document.querySelector("a.xx"),"href")
     * DOMUtils.removeProp("a.xx","href")
     * */
    removeProp(element, propName) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.removeProp($ele, propName);
        });
        return;
      }
      DOMUtilsCommonUtils.delete(element, propName);
    }
    /**
     * 将一个元素替换为另一个元素
     * @param element 目标元素
     * @param newElement 新元素
     * @example
     * // 替换元素a.xx为b.xx
     * DOMUtils.replaceWith(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.replaceWith("a.xx",'<b class="xx"></b>')
     */
    replaceWith(element, newElement) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.replaceWith($ele, newElement);
        });
        return;
      }
      if (typeof newElement === "string") {
        newElement = DOMUtilsContext.parseHTML(newElement, false, false);
      }
      element.parentElement.replaceChild(newElement, element);
    }
    /**
     * 给元素添加class
     * @param element 目标元素
     * @param className class名
     * @example
     * // 元素a.xx的className添加_vue_
     * DOMUtils.addClass(document.querySelector("a.xx"),"_vue_")
     * DOMUtils.addClass("a.xx","_vue_")
     * */
    addClass(element, className) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.addClass($ele, className);
        });
        return;
      }
      if (!Array.isArray(className)) {
        className = className.split(" ");
      }
      className.forEach((itemClassName) => {
        if (itemClassName.trim() == "") {
          return;
        }
        element.classList.add(itemClassName);
      });
    }
    /**
     * 判断元素是否存在className
     * @param element
     * @param className
     */
    hasClass(element, className) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return false;
      }
      if (isNodeList(element)) {
        let flag = true;
        for (let index = 0; index < element.length; index++) {
          const $ele = element[index];
          flag = flag && DOMUtilsContext.hasClass($ele, className);
        }
        return flag;
      }
      if (!(element == null ? void 0 : element.classList)) {
        return false;
      }
      if (!Array.isArray(className)) {
        className = className.split(" ");
      }
      for (let index = 0; index < className.length; index++) {
        const item = className[index].trim();
        if (!element.classList.contains(item)) {
          return false;
        }
      }
      return true;
    }
    /**
     * 函数在元素内部末尾添加子元素或HTML字符串
     * @param element 目标元素
     * @param content 子元素或HTML字符串
     * @example
     * // 元素a.xx的内部末尾添加一个元素
     * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.append("a.xx","'<b class="xx"></b>")
     * */
    append(element, content) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.append($ele, content);
        });
        return;
      }
      function elementAppendChild(ele, text) {
        if (typeof content === "string") {
          ele.insertAdjacentHTML("beforeend", text);
        } else {
          ele.appendChild(text);
        }
      }
      if (Array.isArray(content) || content instanceof NodeList) {
        let fragment = DOMUtilsContext.windowApi.document.createDocumentFragment();
        content.forEach((ele) => {
          if (typeof ele === "string") {
            ele = DOMUtilsContext.parseHTML(ele, true, false);
          }
          fragment.appendChild(ele);
        });
        element.appendChild(fragment);
      } else {
        elementAppendChild(element, content);
      }
    }
    /**
     * 函数 在元素内部开头添加子元素或HTML字符串
     * @param element 目标元素
     * @param content 子元素或HTML字符串
     * @example
     * // 元素a.xx内部开头添加一个元素
     * DOMUtils.prepend(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.prepend("a.xx","'<b class="xx"></b>")
     * */
    prepend(element, content) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.prepend($ele, content);
        });
        return;
      }
      if (typeof content === "string") {
        element.insertAdjacentHTML("afterbegin", content);
      } else {
        let $firstChild = element.firstChild;
        if ($firstChild == null) {
          element.prepend(content);
        } else {
          element.insertBefore(content, element.firstChild);
        }
      }
    }
    /**
     * 在元素后面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx后面添加一个元素
     * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.after("a.xx","'<b class="xx"></b>")
     * */
    after(element, content) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.after($ele, content);
        });
        return;
      }
      if (typeof content === "string") {
        element.insertAdjacentHTML("afterend", content);
      } else {
        let $parent = element.parentElement;
        let $nextSlibling = element.nextSibling;
        if (!$parent || $nextSlibling) {
          element.after(content);
        } else {
          element.parentElement.insertBefore(content, element.nextSibling);
        }
      }
    }
    /**
     * 在元素前面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx前面添加一个元素
     * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.before("a.xx","'<b class="xx"></b>")
     * */
    before(element, content) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.before($ele, content);
        });
        return;
      }
      if (typeof content === "string") {
        element.insertAdjacentHTML("beforebegin", content);
      } else {
        let $parent = element.parentElement;
        if (!$parent) {
          element.before(content);
        } else {
          $parent.insertBefore(content, element);
        }
      }
    }
    /**
     * 移除元素
     * @param element 目标元素
     * @example
     * // 元素a.xx前面添加一个元素
     * DOMUtils.remove(document.querySelector("a.xx"))
     * DOMUtils.remove(document.querySelectorAll("a.xx"))
     * DOMUtils.remove("a.xx")
     * */
    remove(element) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.remove($ele);
        });
        return;
      }
      element.remove();
    }
    /**
     * 移除元素的所有子元素
     * @param element 目标元素
     * @example
     * // 移除元素a.xx元素的所有子元素
     * DOMUtils.empty(document.querySelector("a.xx"))
     * DOMUtils.empty("a.xx")
     * */
    empty(element) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.empty($ele);
        });
        return;
      }
      element.innerHTML = "";
    }
    /**
     * 获取元素相对于文档的偏移坐标（加上文档的滚动条）
     * @param element 目标元素
     * @example
     * // 获取元素a.xx的对于文档的偏移坐标
     * DOMUtils.offset(document.querySelector("a.xx"))
     * DOMUtils.offset("a.xx")
     * > 0
     */
    offset(element) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      let rect = element.getBoundingClientRect();
      return {
        /** y轴偏移 */
        top: rect.top + DOMUtilsContext.windowApi.globalThis.scrollY,
        /** x轴偏移 */
        left: rect.left + DOMUtilsContext.windowApi.globalThis.scrollX
      };
    }
    width(element, isShow = false) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      if (DOMUtilsCommonUtils.isWin(element)) {
        return DOMUtilsContext.windowApi.window.document.documentElement.clientWidth;
      }
      if (element.nodeType === 9) {
        element = element;
        return Math.max(element.body.scrollWidth, element.documentElement.scrollWidth, element.body.offsetWidth, element.documentElement.offsetWidth, element.documentElement.clientWidth);
      }
      if (isShow || !isShow && DOMUtilsCommonUtils.isShow(element)) {
        element = element;
        if (parseFloat(DOMUtilsCommonUtils.getStyleValue(element, "width").toString()) > 0) {
          return parseFloat(DOMUtilsCommonUtils.getStyleValue(element, "width").toString());
        }
        if (element.offsetWidth > 0) {
          let borderLeftWidth = DOMUtilsCommonUtils.getStyleValue(element, "borderLeftWidth");
          let borderRightWidth = DOMUtilsCommonUtils.getStyleValue(element, "borderRightWidth");
          let paddingLeft = DOMUtilsCommonUtils.getStyleValue(element, "paddingLeft");
          let paddingRight = DOMUtilsCommonUtils.getStyleValue(element, "paddingRight");
          let backHeight = parseFloat(element.offsetWidth.toString()) - parseFloat(borderLeftWidth.toString()) - parseFloat(borderRightWidth.toString()) - parseFloat(paddingLeft.toString()) - parseFloat(paddingRight.toString());
          return parseFloat(backHeight.toString());
        }
        return 0;
      } else {
        element = element;
        let { recovery } = DOMUtilsCommonUtils.showElement(element);
        let width = DOMUtilsContext.width(element, true);
        recovery();
        return width;
      }
    }
    height(element, isShow = false) {
      let DOMUtilsContext = this;
      if (DOMUtilsCommonUtils.isWin(element)) {
        return DOMUtilsContext.windowApi.window.document.documentElement.clientHeight;
      }
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      if (element.nodeType === 9) {
        element = element;
        return Math.max(element.body.scrollHeight, element.documentElement.scrollHeight, element.body.offsetHeight, element.documentElement.offsetHeight, element.documentElement.clientHeight);
      }
      if (isShow || !isShow && DOMUtilsCommonUtils.isShow(element)) {
        element = element;
        if (parseFloat(DOMUtilsCommonUtils.getStyleValue(element, "height").toString()) > 0) {
          return parseFloat(DOMUtilsCommonUtils.getStyleValue(element, "height").toString());
        }
        if (element.offsetHeight > 0) {
          let borderTopWidth = DOMUtilsCommonUtils.getStyleValue(element, "borderTopWidth");
          let borderBottomWidth = DOMUtilsCommonUtils.getStyleValue(element, "borderBottomWidth");
          let paddingTop = DOMUtilsCommonUtils.getStyleValue(element, "paddingTop");
          let paddingBottom = DOMUtilsCommonUtils.getStyleValue(element, "paddingBottom");
          let backHeight = parseFloat(element.offsetHeight.toString()) - parseFloat(borderTopWidth.toString()) - parseFloat(borderBottomWidth.toString()) - parseFloat(paddingTop.toString()) - parseFloat(paddingBottom.toString());
          return parseFloat(backHeight.toString());
        }
        return 0;
      } else {
        element = element;
        let { recovery } = DOMUtilsCommonUtils.showElement(element);
        let height = DOMUtilsContext.height(element, true);
        recovery();
        return height;
      }
    }
    outerWidth(element, isShow = false) {
      let DOMUtilsContext = this;
      if (DOMUtilsCommonUtils.isWin(element)) {
        return DOMUtilsContext.windowApi.window.innerWidth;
      }
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      element = element;
      if (isShow || !isShow && DOMUtilsCommonUtils.isShow(element)) {
        let style = DOMUtilsContext.windowApi.globalThis.getComputedStyle(element, null);
        let marginLeft = DOMUtilsCommonUtils.getStyleValue(style, "marginLeft");
        let marginRight = DOMUtilsCommonUtils.getStyleValue(style, "marginRight");
        return element.offsetWidth + marginLeft + marginRight;
      } else {
        let { recovery } = DOMUtilsCommonUtils.showElement(element);
        let outerWidth = DOMUtilsContext.outerWidth(element, true);
        recovery();
        return outerWidth;
      }
    }
    outerHeight(element, isShow = false) {
      let DOMUtilsContext = this;
      if (DOMUtilsCommonUtils.isWin(element)) {
        return DOMUtilsContext.windowApi.window.innerHeight;
      }
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      element = element;
      if (isShow || !isShow && DOMUtilsCommonUtils.isShow(element)) {
        let style = DOMUtilsContext.windowApi.globalThis.getComputedStyle(element, null);
        let marginTop = DOMUtilsCommonUtils.getStyleValue(style, "marginTop");
        let marginBottom = DOMUtilsCommonUtils.getStyleValue(style, "marginBottom");
        return element.offsetHeight + marginTop + marginBottom;
      } else {
        let { recovery } = DOMUtilsCommonUtils.showElement(element);
        let outerHeight = DOMUtilsContext.outerHeight(element, true);
        recovery();
        return outerHeight;
      }
    }
    /**
     * 在一定时间内改变元素的样式属性，实现动画效果
     * @param element 需要进行动画的元素
     * @param styles 动画结束时元素的样式属性
     * @param duration 动画持续时间，单位为毫秒
     * @param callback 动画结束后执行的函数
     * @example
     * // 监听元素a.xx的从显示变为隐藏
     * DOMUtils.animate(document.querySelector("a.xx"),{ top:100},1000,function(){
     *   console.log("已往上位移100px")
     * })
     */
    animate(element, styles, duration = 1e3, callback2 = null) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.animate($ele, styles, duration, callback2);
        });
        return;
      }
      if (typeof duration !== "number" || duration <= 0) {
        throw new TypeError("duration must be a positive number");
      }
      if (typeof callback2 !== "function" && callback2 !== void 0) {
        throw new TypeError("callback must be a function or null");
      }
      if (typeof styles !== "object" || styles === void 0) {
        throw new TypeError("styles must be an object");
      }
      if (Object.keys(styles).length === 0) {
        throw new Error("styles must contain at least one property");
      }
      let start = performance.now();
      let from = {};
      let to = {};
      for (let prop in styles) {
        from[prop] = element.style[prop] || DOMUtilsContext.windowApi.globalThis.getComputedStyle(element)[prop];
        to[prop] = styles[prop];
      }
      let timer = setInterval(function() {
        let timePassed = performance.now() - start;
        let progress = timePassed / duration;
        if (progress > 1) {
          progress = 1;
        }
        for (let prop in styles) {
          element.style[prop] = from[prop] + (to[prop] - from[prop]) * progress + "px";
        }
        if (progress === 1) {
          clearInterval(timer);
          if (callback2) {
            callback2();
          }
        }
      }, 10);
    }
    /**
     * 将一个元素包裹在指定的HTML元素中
     * @param element 要包裹的元素
     * @param wrapperHTML 要包裹的HTML元素的字符串表示形式
     * @example
     * // 将a.xx元素外面包裹一层div
     * DOMUtils.wrap(document.querySelector("a.xx"),"<div></div>")
     */
    wrap(element, wrapperHTML) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.wrap($ele, wrapperHTML);
        });
        return;
      }
      element = element;
      let wrapper = DOMUtilsContext.windowApi.document.createElement("div");
      wrapper.innerHTML = wrapperHTML;
      let wrapperFirstChild = wrapper.firstChild;
      let parentElement = element.parentElement;
      parentElement.insertBefore(wrapperFirstChild, element);
      wrapperFirstChild.appendChild(element);
    }
    prev(element) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      return element.previousElementSibling;
    }
    next(element) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      return element.nextElementSibling;
    }
    /**
     * 取消挂载在window下的DOMUtils并返回DOMUtils
     * @example
     * let DOMUtils = window.DOMUtils.noConflict()
     */
    noConflict() {
      let DOMUtilsContext = this;
      if (DOMUtilsContext.windowApi.window.DOMUtils) {
        DOMUtilsCommonUtils.delete(window, "DOMUtils");
      }
      DOMUtilsContext.windowApi.window.DOMUtils = this;
      return this;
    }
    siblings(element) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      return Array.from(element.parentElement.children).filter((child) => child !== element);
    }
    /**
     * 获取当前元素的父元素
     * @param element 当前元素
     * @returns 父元素
     * @example
     * // 获取a.xx元素的父元素
     * DOMUtils.parent(document.querySelector("a.xx"))
     * DOMUtils.parent("a.xx")
     * > <div ...>....</div>
     */
    parent(element) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selector(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        let resultArray = [];
        element.forEach(($ele) => {
          resultArray.push(DOMUtilsContext.parent($ele));
        });
        return resultArray;
      } else {
        return element.parentElement;
      }
    }
    parseHTML(html, useParser = false, isComplete = false) {
      let DOMUtilsContext = this;
      html = html.trim();
      function parseHTMLByDOMParser() {
        let parser = new DOMParser();
        if (isComplete) {
          return parser.parseFromString(html, "text/html");
        } else {
          return parser.parseFromString(html, "text/html").body.firstChild;
        }
      }
      function parseHTMLByCreateDom() {
        let tempDIV = DOMUtilsContext.windowApi.document.createElement("div");
        tempDIV.innerHTML = html;
        if (isComplete) {
          return tempDIV;
        } else {
          return tempDIV.firstChild;
        }
      }
      if (useParser) {
        return parseHTMLByDOMParser();
      } else {
        return parseHTMLByCreateDom();
      }
    }
    /**
     * 序列化表单元素
     * @param $form 表单元素
     * @example
     * DOMUtils.serialize(document.querySelector("form"))
     * > xxx=xxx&aaa=
     */
    serialize($form) {
      const elements = $form.elements;
      let serializedArray = [];
      for (let i2 = 0; i2 < elements.length; i2++) {
        const element = elements[i2];
        if (element.name && !element.disabled && (element.checked || [
          "text",
          "hidden",
          "password",
          "textarea",
          "select-one",
          "select-multiple"
        ].includes(element.type))) {
          if (element.type === "select-multiple") {
            for (let j2 = 0; j2 < element.options.length; j2++) {
              if (element.options[j2].selected) {
                serializedArray.push({
                  name: element.name,
                  value: element.options[j2].value
                });
              }
            }
          } else {
            serializedArray.push({ name: element.name, value: element.value });
          }
        }
      }
      return serializedArray.map((item) => `${encodeURIComponent(item.name)}=${encodeURIComponent(item.value)}`).join("&");
    }
    /**
     * 显示元素
     * @param target 当前元素
     * @param checkVisiblie 是否检测元素是否显示
     * + true （默认）如果检测到还未显示，则强制使用display: unset !important;
     * + false 不检测，直接设置display属性为空
     * @example
     * // 显示a.xx元素
     * DOMUtils.show(document.querySelector("a.xx"))
     * DOMUtils.show(document.querySelectorAll("a.xx"))
     * DOMUtils.show("a.xx")
     */
    show(target, checkVisiblie = true) {
      let DOMUtilsContext = this;
      if (target == null) {
        return;
      }
      if (typeof target === "string") {
        target = DOMUtilsContext.selectorAll(target);
      }
      if (target instanceof NodeList || target instanceof Array) {
        target = target;
        for (const element of target) {
          DOMUtilsContext.show(element, checkVisiblie);
        }
      } else {
        target = target;
        target.style.display = "";
        if (checkVisiblie) {
          if (!DOMUtilsCommonUtils.isShow(target)) {
            target.style.setProperty("display", "unset", "important");
          }
        }
      }
    }
    /**
     * 隐藏元素
     * @param target 当前元素
     * @param checkVisiblie 是否检测元素是否显示
     * + true （默认）如果检测到显示，则强制使用display: none !important;
     * + false 不检测，直接设置display属性为none
     * @example
     * // 隐藏a.xx元素
     * DOMUtils.hide(document.querySelector("a.xx"))
     * DOMUtils.hide(document.querySelectorAll("a.xx"))
     * DOMUtils.hide("a.xx")
     */
    hide(target, checkVisiblie = true) {
      let DOMUtilsContext = this;
      if (target == null) {
        return;
      }
      if (typeof target === "string") {
        target = DOMUtilsContext.selectorAll(target);
      }
      if (target instanceof NodeList || target instanceof Array) {
        target = target;
        for (const element of target) {
          DOMUtilsContext.hide(element, checkVisiblie);
        }
      } else {
        target = target;
        target.style.display = "none";
        if (checkVisiblie) {
          if (DOMUtilsCommonUtils.isShow(target)) {
            target.style.setProperty("display", "none", "important");
          }
        }
      }
    }
    /**
     * 淡入元素
     * @param element 当前元素
     * @param duration 动画持续时间（毫秒），默认400毫秒
     * @param callback 动画结束的回调
     * @example
     * // 元素a.xx淡入
     * DOMUtils.fadeIn(document.querySelector("a.xx"),2500,()=>{
     *   console.log("淡入完毕");
     * })
     * DOMUtils.fadeIn("a.xx",undefined,()=>{
     *   console.log("淡入完毕");
     * })
     */
    fadeIn(element, duration = 400, callback2) {
      if (element == null) {
        return;
      }
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.fadeIn($ele, duration, callback2);
        });
        return;
      }
      element.style.opacity = "0";
      element.style.display = "";
      let start = null;
      let timer = null;
      function step(timestamp) {
        if (!start)
          start = timestamp;
        let progress = timestamp - start;
        element = element;
        element.style.opacity = Math.min(progress / duration, 1).toString();
        if (progress < duration) {
          DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
        } else {
          if (callback2 && typeof callback2 === "function") {
            callback2();
          }
          DOMUtilsContext.windowApi.window.cancelAnimationFrame(timer);
        }
      }
      timer = DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
    }
    /**
     * 淡出元素
     * @param element 当前元素
     * @param duration 动画持续时间（毫秒），默认400毫秒
     * @param callback 动画结束的回调
     * @example
     * // 元素a.xx淡出
     * DOMUtils.fadeOut(document.querySelector("a.xx"),2500,()=>{
     *   console.log("淡出完毕");
     * })
     * DOMUtils.fadeOut("a.xx",undefined,()=>{
     *   console.log("淡出完毕");
     * })
     */
    fadeOut(element, duration = 400, callback2) {
      let DOMUtilsContext = this;
      if (element == null) {
        return;
      }
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.fadeOut($ele, duration, callback2);
        });
        return;
      }
      element.style.opacity = "1";
      let start = null;
      let timer = null;
      function step(timestamp) {
        if (!start)
          start = timestamp;
        let progress = timestamp - start;
        element = element;
        element.style.opacity = Math.max(1 - progress / duration, 0).toString();
        if (progress < duration) {
          DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
        } else {
          element.style.display = "none";
          if (typeof callback2 === "function") {
            callback2();
          }
          DOMUtilsContext.windowApi.window.cancelAnimationFrame(timer);
        }
      }
      timer = DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
    }
    /**
     * 切换元素的显示和隐藏状态
     * @param element 当前元素
     * @param checkVisiblie 是否检测元素是否显示
     * @example
     * // 如果元素a.xx当前是隐藏，则显示，如果是显示，则隐藏
     * DOMUtils.toggle(document.querySelector("a.xx"))
     * DOMUtils.toggle("a.xx")
     */
    toggle(element, checkVisiblie) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = DOMUtilsContext.selectorAll(element);
      }
      if (element == null) {
        return;
      }
      if (isNodeList(element)) {
        element.forEach(($ele) => {
          DOMUtilsContext.toggle($ele);
        });
        return;
      }
      if (DOMUtilsContext.windowApi.globalThis.getComputedStyle(element).getPropertyValue("display") === "none") {
        DOMUtilsContext.show(element, checkVisiblie);
      } else {
        DOMUtilsContext.hide(element, checkVisiblie);
      }
    }
    /**
     * 创建一个新的DOMUtils实例
     * @param option
     * @returns
     */
    createDOMUtils(option) {
      return new DOMUtils(option);
    }
    /**
     * 获取文字的位置信息
     * @param $input 输入框
     * @param selectionStart 起始位置
     * @param selectionEnd 结束位置
     * @example
     * DOMUtils.getTextBoundingRect(document.querySelector("input"));
     */
    getTextBoundingRect($input, selectionStart, selectionEnd) {
      var _a2;
      let DOMUtilsContext = this;
      if (!$input || !("value" in $input))
        return $input;
      if (selectionStart == null) {
        selectionStart = $input.selectionStart || 0;
      }
      if (selectionEnd == null) {
        selectionEnd = $input.selectionEnd || 0;
      }
      if (typeof selectionStart == "string")
        selectionStart = parseFloat(selectionStart);
      if (typeof selectionStart != "number" || isNaN(selectionStart)) {
        selectionStart = 0;
      }
      if (selectionStart < 0)
        selectionStart = 0;
      else
        selectionStart = Math.min($input.value.length, selectionStart);
      if (typeof selectionEnd == "string")
        selectionEnd = parseFloat(selectionEnd);
      if (typeof selectionEnd != "number" || isNaN(selectionEnd) || selectionEnd < selectionStart) {
        selectionEnd = selectionStart;
      }
      if (selectionEnd < 0)
        selectionEnd = 0;
      else
        selectionEnd = Math.min($input.value.length, selectionEnd);
      if (typeof $input.createTextRange == "function") {
        let range = $input.createTextRange();
        range.collapse(true);
        range.moveStart("character", selectionStart);
        range.moveEnd("character", selectionEnd - selectionStart);
        return range.getBoundingClientRect();
      }
      let offset = getInputOffset(), topPos = offset.top, leftPos = offset.left, width = getInputCSS("width", true), height = getInputCSS("height", true);
      let cssDefaultStyles = "white-space:pre;padding:0;margin:0;", listOfModifiers = [
        "direction",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-variant",
        "font-weight",
        "font-style",
        "letter-spacing",
        "line-height",
        "text-align",
        "text-indent",
        "text-transform",
        "word-wrap",
        "word-spacing"
      ];
      topPos += getInputCSS("padding-top", true);
      topPos += getInputCSS("border-top-width", true);
      leftPos += getInputCSS("padding-left", true);
      leftPos += getInputCSS("border-left-width", true);
      leftPos += 1;
      for (let index = 0; index < listOfModifiers.length; index++) {
        let property = listOfModifiers[index];
        cssDefaultStyles += property + ":" + getInputCSS(property) + ";";
      }
      let text = $input.value || "G", textLen = text.length, fakeClone = DOMUtilsContext.windowApi.document.createElement("div");
      if (selectionStart > 0)
        appendPart(0, selectionStart);
      var fakeRange = appendPart(selectionStart, selectionEnd);
      if (textLen > selectionEnd)
        appendPart(selectionEnd, textLen);
      fakeClone.style.cssText = cssDefaultStyles;
      fakeClone.style.position = "absolute";
      fakeClone.style.top = topPos + "px";
      fakeClone.style.left = leftPos + "px";
      fakeClone.style.width = width + "px";
      fakeClone.style.height = height + "px";
      DOMUtilsContext.windowApi.document.body.appendChild(fakeClone);
      var returnValue = fakeRange.getBoundingClientRect();
      (_a2 = fakeClone == null ? void 0 : fakeClone.parentNode) == null ? void 0 : _a2.removeChild(fakeClone);
      return returnValue;
      function appendPart(start, end) {
        var span = DOMUtilsContext.windowApi.document.createElement("span");
        span.style.cssText = cssDefaultStyles;
        span.textContent = text.substring(start, end);
        fakeClone.appendChild(span);
        return span;
      }
      function getInputOffset() {
        let body = DOMUtilsContext.windowApi.document.body, win = DOMUtilsContext.windowApi.document.defaultView, docElem = DOMUtilsContext.windowApi.document.documentElement, $box = DOMUtilsContext.windowApi.document.createElement("div");
        $box.style.paddingLeft = $box.style.width = "1px";
        body.appendChild($box);
        var isBoxModel = $box.offsetWidth == 2;
        body.removeChild($box);
        let $boxRect = $input.getBoundingClientRect();
        var clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, scrollTop = win.pageYOffset || isBoxModel && docElem.scrollTop || body.scrollTop, scrollLeft = win.pageXOffset || isBoxModel && docElem.scrollLeft || body.scrollLeft;
        return {
          top: $boxRect.top + scrollTop - clientTop,
          left: $boxRect.left + scrollLeft - clientLeft
        };
      }
      function getInputCSS(prop, isNumber) {
        var val = DOMUtilsContext.windowApi.document.defaultView.getComputedStyle($input, null).getPropertyValue(prop);
        return isNumber ? parseFloat(val) : val;
      }
    }
  }
  let domUtils$1 = new DOMUtils();
  class ColorConversion {
    /**
     * 判断是否是16进制颜色
     * @param str
     */
    isHex(str) {
      if (typeof str !== "string") {
        return false;
      }
      if (!str.match(/^(\#|)[0-9a-fA-F]{6}$/)) {
        return false;
      }
      return true;
    }
    /**
     * 16进制颜色转rgba
     *
     * #ff0000 转 rgba(123,123,123, 0.4)
     * @param hex
     * @param opacity
     */
    hexToRgba(hex, opacity) {
      if (!this.isHex(hex)) {
        throw new TypeError("输入错误的hex", hex);
      }
      return hex && hex.replace(/\s+/g, "").length === 7 ? "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")" : "";
    }
    /**
     * hex转rgb
     * @param str
     * @returns
     */
    hexToRgb(str) {
      if (!this.isHex(str)) {
        throw new TypeError("输入错误的hex", str);
      }
      str = str.replace("#", "");
      let hxs = str.match(/../g);
      for (let index = 0; index < 3; index++) {
        hxs[index] = parseInt(hxs[index], 16);
      }
      return hxs;
    }
    /**
     * rgb转hex
     * @param redValue
     * @param greenValue
     * @param blueValue
     * @returns
     */
    rgbToHex(redValue, greenValue, blueValue) {
      let validPattern = /^\d{1,3}$/;
      if (!validPattern.test(redValue.toString()) || !validPattern.test(greenValue.toString()) || !validPattern.test(blueValue.toString()))
        throw new TypeError("输入错误的rgb颜色值");
      let hexs = [
        redValue.toString(16),
        greenValue.toString(16),
        blueValue.toString(16)
      ];
      for (let index = 0; index < 3; index++)
        if (hexs[index].length == 1)
          hexs[index] = "0" + hexs[index];
      return "#" + hexs.join("");
    }
    /**
     * 获取颜色变暗或亮
     * @param color 颜色
     * @param level 0~1.0
     * @returns
     */
    getDarkColor(color, level) {
      if (!this.isHex(color)) {
        throw new TypeError("输入错误的hex", color);
      }
      let rgbc = this.hexToRgb(color);
      for (let index = 0; index < 3; index++) {
        rgbc[index] = Math.floor(rgbc[index] * (1 - level));
      }
      return this.rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
    }
    /**
     * 获取颜色变亮
     * @param color 颜色
     * @param level 0~1.0
     * @returns
     */
    getLightColor(color, level) {
      if (!this.isHex(color)) {
        throw new TypeError("输入错误的hex", color);
      }
      let rgbc = this.hexToRgb(color);
      for (let index = 0; index < 3; index++) {
        rgbc[index] = Math.floor((255 - rgbc[index]) * level + rgbc[index]);
      }
      return this.rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
    }
  }
  class GBKEncoder {
    constructor() {
      __privateAdd(this, _data, []);
      __privateAdd(this, _U2Ghash, {});
      __privateAdd(this, _G2Uhash, {});
      let dataText = this.handleText("4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364");
      let index = 0;
      __privateSet(this, _data, dataText.match(/..../g));
      for (let i2 = 129; i2 <= 254; i2++) {
        for (let j2 = 64; j2 <= 254; j2++) {
          __privateGet(this, _U2Ghash)[__privateGet(this, _data)[index++]] = ("%" + i2.toString(16) + "%" + j2.toString(16)).toUpperCase();
        }
      }
      for (let key in __privateGet(this, _U2Ghash)) {
        __privateGet(this, _G2Uhash)[__privateGet(this, _U2Ghash)[key]] = key;
      }
    }
    handleText(text) {
      text = text.replace(/#(\d+)\$/g, function(a2, b2) {
        return Array(+b2 + 3).join("#");
      }).replace(/#/g, "####").replace(/(\w\w):([\w#]+)(?:,|$)/g, function(a2, hd, dt) {
        return dt.replace(/../g, function(a3) {
          if (a3 != "##") {
            return hd + a3;
          } else {
            return a3;
          }
        });
      });
      return text;
    }
    isAscii(unicode) {
      return unicode <= 127 && unicode >= 0;
    }
    /**
     * 编码
     * @param str
     */
    encode(str) {
      let that = this;
      return [...str].reduce((result2, val, i2) => {
        return result2 + toGBK(val);
      }, "");
      function toGBK(val) {
        var _a2;
        let result2 = "";
        for (let i2 = 0; i2 < val.length; i2++) {
          const codePoint = val.codePointAt(i2);
          const code = String.fromCodePoint(codePoint);
          let key = codePoint.toString(16);
          key.length != 4 && (key = (_a2 = ("000" + key).match(/....$/)) == null ? void 0 : _a2[0]);
          i2 += code.length - 1;
          if (that.isAscii(codePoint)) {
            result2 += encodeURIComponent(code);
            continue;
          }
          if (__privateGet(that, _U2Ghash)[key]) {
            result2 += __privateGet(that, _U2Ghash)[key];
            continue;
          }
          result2 += toGBK(`&#${codePoint};`);
        }
        return result2;
      }
    }
    /**
     * 解码
     * @param str
     */
    decode(str) {
      var GBKMatcher = /%[0-9A-F]{2}%[0-9A-F]{2}/;
      var UTFMatcher = /%[0-9A-F]{2}/;
      var utf = true;
      let that = this;
      while (utf) {
        let gbkMatch = str.match(GBKMatcher);
        let utfMatch = str.match(UTFMatcher);
        utf = Boolean(utfMatch);
        if (gbkMatch && gbkMatch in __privateGet(that, _G2Uhash)) {
          str = str.replace(gbkMatch, String.fromCharCode("0x" + __privateGet(that, _G2Uhash)[gbkMatch]));
        } else {
          str = str.replace(utfMatch, decodeURIComponent(utfMatch));
        }
      }
      return str;
    }
  }
  _data = new WeakMap();
  _U2Ghash = new WeakMap();
  _G2Uhash = new WeakMap();
  class UtilsGMCookie {
    constructor(windowApiOption) {
      __publicField(this, "windowApi", {
        window,
        document
      });
      if (windowApiOption) {
        this.windowApi = Object.assign({}, windowApiOption);
      }
    }
    /**
     * 获取单个cookie
     * @param cookieName cookie名
     */
    get(cookieName) {
      if (typeof cookieName !== "string") {
        throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");
      }
      let cookies = this.windowApi.document.cookie.split(";");
      let findValue = void 0;
      for (const cookieItem of cookies) {
        let item = cookieItem.trim();
        let itemSplit = item.split("=");
        let itemName = itemSplit[0];
        itemSplit.splice(0, 1);
        let itemValue = decodeURIComponent(itemSplit.join(""));
        if (itemName === cookieName) {
          findValue = {
            domain: this.windowApi.window.location.hostname,
            expirationDate: null,
            hostOnly: true,
            httpOnly: false,
            name: cookieName,
            path: "/",
            sameSite: "unspecified",
            secure: true,
            session: false,
            value: itemValue
          };
          break;
        }
      }
      return findValue;
    }
    /**
     *  获取多组Cookie
     * @param option 配置
     * @param callback 获取操作后的回调
     * + cookies object[]
     * + error string|undefined
     **/
    list(option, callback2) {
      if (option == null) {
        throw new Error("Utils.GMCookie.list 参数不能为空");
      }
      let resultData = [];
      try {
        let defaultOption = {
          url: this.windowApi.window.location.href,
          domain: this.windowApi.window.location.hostname,
          name: "",
          path: "/"
        };
        defaultOption = utils$1.assign(defaultOption, option);
        let cookies = this.windowApi.document.cookie.split(";");
        cookies.forEach((item) => {
          item = item.trim();
          let itemSplit = item.split("=");
          let itemName = itemSplit[0];
          itemSplit.splice(0, 1);
          let itemValue = decodeURIComponent(itemSplit.join(""));
          let nameRegexp = defaultOption.name instanceof RegExp ? defaultOption.name : new RegExp("^" + defaultOption.name, "g");
          if (itemName.match(nameRegexp)) {
            resultData.push({
              domain: this.windowApi.window.location.hostname,
              expirationDate: null,
              hostOnly: true,
              httpOnly: false,
              name: itemName,
              path: "/",
              sameSite: "unspecified",
              secure: true,
              session: false,
              value: itemValue
            });
          }
        });
        if (typeof callback2 === "function") {
          callback2(resultData);
        }
      } catch (error2) {
        if (typeof callback2 === "function") {
          callback2(resultData, error2);
        }
      }
    }
    /**
     *  获取多组Cookie
     * @param option 配置
     **/
    getList(option) {
      if (option == null) {
        throw new Error("Utils.GMCookie.list 参数不能为空");
      }
      let resultData = [];
      let defaultOption = {
        url: this.windowApi.window.location.href,
        domain: this.windowApi.window.location.hostname,
        name: "",
        path: "/"
      };
      defaultOption = utils$1.assign(defaultOption, option);
      let cookies = this.windowApi.document.cookie.split(";");
      cookies.forEach((item) => {
        item = item.trim();
        let itemSplit = item.split("=");
        let itemName = itemSplit[0];
        itemSplit.splice(0, 1);
        let itemValue = decodeURIComponent(itemSplit.join(""));
        let nameRegexp = defaultOption.name instanceof RegExp ? defaultOption.name : new RegExp("^" + defaultOption.name, "g");
        if (itemName.match(nameRegexp)) {
          resultData.push({
            domain: this.windowApi.window.location.hostname,
            expirationDate: null,
            hostOnly: true,
            httpOnly: false,
            name: itemName,
            path: "/",
            sameSite: "unspecified",
            secure: true,
            session: false,
            value: itemValue
          });
        }
      });
      return resultData;
    }
    /**
     * 设置Cookie
     * @param option 配置
     * @param callback 设置操作后的回调(成功/失败)
     */
    set(option, callback2) {
      let errorInfo;
      try {
        let defaultOption = {
          url: this.windowApi.window.location.href,
          name: "",
          value: "",
          domain: this.windowApi.window.location.hostname,
          path: "/",
          secure: true,
          httpOnly: false,
          /**
           * Expires in 30 days
           */
          expirationDate: Math.floor(Date.now()) + 60 * 60 * 24 * 30
        };
        defaultOption = utils$1.assign(defaultOption, option);
        let life = defaultOption.expirationDate ? defaultOption.expirationDate : Math.floor(Date.now()) + 60 * 60 * 24 * 30;
        let cookieStr = defaultOption.name + "=" + decodeURIComponent(defaultOption.value) + ";expires=" + new Date(life).toGMTString() + "; path=/";
        this.windowApi.document.cookie = cookieStr;
      } catch (error2) {
        errorInfo = error2;
      } finally {
        if (typeof callback2 === "function") {
          callback2(errorInfo);
        }
      }
    }
    /**
     * 删除Cookie
     * @param option 配置
     * @param callback 删除操作后的回调(成功/失败)
     */
    delete(option, callback2) {
      let errorInfo;
      try {
        let defaultOption = {
          url: this.windowApi.window.location.href,
          name: "",
          path: "/",
          firstPartyDomain: this.windowApi.window.location.hostname
        };
        defaultOption = utils$1.assign(defaultOption, option);
        let cookieStr = `${defaultOption.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${defaultOption.path}; domain=${defaultOption.firstPartyDomain};`;
        this.windowApi.document.cookie = cookieStr;
      } catch (error2) {
        errorInfo = error2;
      } finally {
        if (typeof callback2 === "function") {
          callback2(errorInfo);
        }
      }
    }
  }
  const AjaxHooker = function() {
    return function() {
      const version = "1.4.3";
      const hookInst = {
        hookFns: [],
        filters: []
      };
      const win = window.unsafeWindow || document.defaultView || window;
      let winAh = win.__ajaxHooker;
      const resProto = win.Response.prototype;
      const xhrResponses = ["response", "responseText", "responseXML"];
      const fetchResponses = ["arrayBuffer", "blob", "formData", "json", "text"];
      const fetchInitProps = [
        "method",
        "headers",
        "body",
        "mode",
        "credentials",
        "cache",
        "redirect",
        "referrer",
        "referrerPolicy",
        "integrity",
        "keepalive",
        "signal",
        "priority"
      ];
      const xhrAsyncEvents = ["readystatechange", "load", "loadend"];
      const getType = {}.toString.call.bind({}.toString);
      const getDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
      const emptyFn = () => {
      };
      const errorFn = (e2) => console.error(e2);
      function isThenable(obj) {
        return obj && ["object", "function"].includes(typeof obj) && typeof obj.then === "function";
      }
      function catchError(fn, ...args2) {
        try {
          const result2 = fn(...args2);
          if (isThenable(result2)) return result2.then(null, errorFn);
          return result2;
        } catch (err) {
          console.error(err);
        }
      }
      function defineProp(obj, prop, getter, setter) {
        Object.defineProperty(obj, prop, {
          configurable: true,
          enumerable: true,
          get: getter,
          set: setter
        });
      }
      function readonly(obj, prop, value = obj[prop]) {
        defineProp(obj, prop, () => value, emptyFn);
      }
      function writable(obj, prop, value = obj[prop]) {
        Object.defineProperty(obj, prop, {
          configurable: true,
          enumerable: true,
          writable: true,
          value
        });
      }
      function parseHeaders(obj) {
        const headers = {};
        switch (getType(obj)) {
          case "[object String]":
            for (const line of obj.trim().split(/[\r\n]+/)) {
              const [header, value] = line.split(/\s*:\s*/);
              if (!header) break;
              const lheader = header.toLowerCase();
              headers[lheader] = lheader in headers ? `${headers[lheader]}, ${value}` : value;
            }
            break;
          case "[object Headers]":
            for (const [key, val] of obj) {
              headers[key] = val;
            }
            break;
          case "[object Object]":
            return { ...obj };
        }
        return headers;
      }
      function stopImmediatePropagation() {
        this.ajaxHooker_isStopped = true;
      }
      class SyncThenable {
        then(fn) {
          fn && fn();
          return new SyncThenable();
        }
      }
      class AHRequest {
        constructor(request) {
          this.request = request;
          this.requestClone = { ...this.request };
        }
        shouldFilter(filters) {
          const { type, url, method, async } = this.request;
          return filters.length && !filters.find((obj) => {
            switch (true) {
              case (obj.type && obj.type !== type):
              case (getType(obj.url) === "[object String]" && !url.includes(obj.url)):
              case (getType(obj.url) === "[object RegExp]" && !obj.url.test(url)):
              case (obj.method && obj.method.toUpperCase() !== method.toUpperCase()):
              case ("async" in obj && obj.async !== async):
                return false;
            }
            return true;
          });
        }
        waitForRequestKeys() {
          const requestKeys = ["url", "method", "abort", "headers", "data"];
          if (!this.request.async) {
            win.__ajaxHooker.hookInsts.forEach(({ hookFns, filters }) => {
              if (this.shouldFilter(filters)) return;
              hookFns.forEach((fn) => {
                if (getType(fn) === "[object Function]")
                  catchError(fn, this.request);
              });
              requestKeys.forEach((key) => {
                if (isThenable(this.request[key]))
                  this.request[key] = this.requestClone[key];
              });
            });
            return new SyncThenable();
          }
          const promises = [];
          win.__ajaxHooker.hookInsts.forEach(({ hookFns, filters }) => {
            if (this.shouldFilter(filters)) return;
            promises.push(
              Promise.all(hookFns.map((fn) => catchError(fn, this.request))).then(
                () => Promise.all(
                  requestKeys.map(
                    (key) => Promise.resolve(this.request[key]).then(
                      (val) => this.request[key] = val,
                      () => this.request[key] = this.requestClone[key]
                    )
                  )
                )
              )
            );
          });
          return Promise.all(promises);
        }
        waitForResponseKeys(response) {
          const responseKeys = this.request.type === "xhr" ? xhrResponses : fetchResponses;
          if (!this.request.async) {
            if (getType(this.request.response) === "[object Function]") {
              catchError(this.request.response, response);
              responseKeys.forEach((key) => {
                if ("get" in getDescriptor(response, key) || isThenable(response[key])) {
                  delete response[key];
                }
              });
            }
            return new SyncThenable();
          }
          return Promise.resolve(
            catchError(this.request.response, response)
          ).then(
            () => Promise.all(
              responseKeys.map((key) => {
                const descriptor = getDescriptor(response, key);
                if (descriptor && "value" in descriptor) {
                  return Promise.resolve(descriptor.value).then(
                    (val) => response[key] = val,
                    () => delete response[key]
                  );
                } else {
                  delete response[key];
                }
              })
            )
          );
        }
      }
      const proxyHandler = {
        get(target, prop) {
          const descriptor = getDescriptor(target, prop);
          if (descriptor && !descriptor.configurable && !descriptor.writable && !descriptor.get)
            return target[prop];
          const ah = target.__ajaxHooker;
          if (ah && ah.proxyProps) {
            if (prop in ah.proxyProps) {
              const pDescriptor = ah.proxyProps[prop];
              if ("get" in pDescriptor) return pDescriptor.get();
              if (typeof pDescriptor.value === "function")
                return pDescriptor.value.bind(ah);
              return pDescriptor.value;
            }
            if (typeof target[prop] === "function")
              return target[prop].bind(target);
          }
          return target[prop];
        },
        set(target, prop, value) {
          const descriptor = getDescriptor(target, prop);
          if (descriptor && !descriptor.configurable && !descriptor.writable && !descriptor.set)
            return true;
          const ah = target.__ajaxHooker;
          if (ah && ah.proxyProps && prop in ah.proxyProps) {
            const pDescriptor = ah.proxyProps[prop];
            pDescriptor.set ? pDescriptor.set(value) : pDescriptor.value = value;
          } else {
            target[prop] = value;
          }
          return true;
        }
      };
      class XhrHooker {
        constructor(xhr) {
          const ah = this;
          Object.assign(ah, {
            originalXhr: xhr,
            proxyXhr: new Proxy(xhr, proxyHandler),
            resThenable: new SyncThenable(),
            proxyProps: {},
            proxyEvents: {}
          });
          xhr.addEventListener("readystatechange", (e2) => {
            if (ah.proxyXhr.readyState === 4 && ah.request && typeof ah.request.response === "function") {
              const response = {
                finalUrl: ah.proxyXhr.responseURL,
                status: ah.proxyXhr.status,
                responseHeaders: parseHeaders(
                  ah.proxyXhr.getAllResponseHeaders()
                )
              };
              const tempValues = {};
              for (const key of xhrResponses) {
                try {
                  tempValues[key] = ah.originalXhr[key];
                } catch (err) {
                }
                defineProp(
                  response,
                  key,
                  () => {
                    return response[key] = tempValues[key];
                  },
                  (val) => {
                    delete response[key];
                    response[key] = val;
                  }
                );
              }
              ah.resThenable = new AHRequest(ah.request).waitForResponseKeys(response).then(() => {
                for (const key of xhrResponses) {
                  ah.proxyProps[key] = {
                    get: () => {
                      if (!(key in response)) response[key] = tempValues[key];
                      return response[key];
                    }
                  };
                }
              });
            }
            ah.dispatchEvent(e2);
          });
          xhr.addEventListener("load", (e2) => ah.dispatchEvent(e2));
          xhr.addEventListener("loadend", (e2) => ah.dispatchEvent(e2));
          for (const evt of xhrAsyncEvents) {
            const onEvt = "on" + evt;
            ah.proxyProps[onEvt] = {
              get: () => ah.proxyEvents[onEvt] || null,
              set: (val) => ah.addEvent(onEvt, val)
            };
          }
          for (const method of [
            "setRequestHeader",
            "addEventListener",
            "removeEventListener",
            "open",
            "send"
          ]) {
            ah.proxyProps[method] = { value: ah[method] };
          }
        }
        toJSON() {
        }
        // Converting circular structure to JSON
        addEvent(type, event) {
          if (type.startsWith("on")) {
            this.proxyEvents[type] = typeof event === "function" ? event : null;
          } else {
            if (typeof event === "object" && event !== null)
              event = event.handleEvent;
            if (typeof event !== "function") return;
            this.proxyEvents[type] = this.proxyEvents[type] || /* @__PURE__ */ new Set();
            this.proxyEvents[type].add(event);
          }
        }
        removeEvent(type, event) {
          if (type.startsWith("on")) {
            this.proxyEvents[type] = null;
          } else {
            if (typeof event === "object" && event !== null)
              event = event.handleEvent;
            this.proxyEvents[type] && this.proxyEvents[type].delete(event);
          }
        }
        dispatchEvent(e2) {
          e2.stopImmediatePropagation = stopImmediatePropagation;
          defineProp(e2, "target", () => this.proxyXhr);
          defineProp(e2, "currentTarget", () => this.proxyXhr);
          this.proxyEvents[e2.type] && this.proxyEvents[e2.type].forEach((fn) => {
            this.resThenable.then(
              () => !e2.ajaxHooker_isStopped && fn.call(this.proxyXhr, e2)
            );
          });
          if (e2.ajaxHooker_isStopped) return;
          const onEvent = this.proxyEvents["on" + e2.type];
          onEvent && this.resThenable.then(onEvent.bind(this.proxyXhr, e2));
        }
        setRequestHeader(header, value) {
          this.originalXhr.setRequestHeader(header, value);
          if (!this.request) return;
          const headers = this.request.headers;
          headers[header] = header in headers ? `${headers[header]}, ${value}` : value;
        }
        addEventListener(...args2) {
          if (xhrAsyncEvents.includes(args2[0])) {
            this.addEvent(args2[0], args2[1]);
          } else {
            this.originalXhr.addEventListener(...args2);
          }
        }
        removeEventListener(...args2) {
          if (xhrAsyncEvents.includes(args2[0])) {
            this.removeEvent(args2[0], args2[1]);
          } else {
            this.originalXhr.removeEventListener(...args2);
          }
        }
        open(method, url, async = true, ...args2) {
          this.request = {
            type: "xhr",
            url: url.toString(),
            method: method.toUpperCase(),
            abort: false,
            headers: {},
            data: null,
            response: null,
            async: !!async
          };
          this.openArgs = args2;
          this.resThenable = new SyncThenable();
          [
            "responseURL",
            "readyState",
            "status",
            "statusText",
            ...xhrResponses
          ].forEach((key) => {
            delete this.proxyProps[key];
          });
          return this.originalXhr.open(method, url, async, ...args2);
        }
        send(data) {
          const ah = this;
          const xhr = ah.originalXhr;
          const request = ah.request;
          if (!request) return xhr.send(data);
          request.data = data;
          new AHRequest(request).waitForRequestKeys().then(() => {
            if (request.abort) {
              if (typeof request.response === "function") {
                Object.assign(ah.proxyProps, {
                  responseURL: { value: request.url },
                  readyState: { value: 4 },
                  status: { value: 200 },
                  statusText: { value: "OK" }
                });
                xhrAsyncEvents.forEach(
                  (evt) => xhr.dispatchEvent(new Event(evt))
                );
              }
            } else {
              xhr.open(
                request.method,
                request.url,
                request.async,
                ...ah.openArgs
              );
              for (const header in request.headers) {
                xhr.setRequestHeader(header, request.headers[header]);
              }
              xhr.send(request.data);
            }
          });
        }
      }
      function fakeXHR() {
        const xhr = new winAh.realXHR();
        if ("__ajaxHooker" in xhr)
          console.warn("检测到不同版本的ajaxHooker，可能发生冲突！");
        xhr.__ajaxHooker = new XhrHooker(xhr);
        return xhr.__ajaxHooker.proxyXhr;
      }
      fakeXHR.prototype = win.XMLHttpRequest.prototype;
      Object.keys(win.XMLHttpRequest).forEach(
        (key) => fakeXHR[key] = win.XMLHttpRequest[key]
      );
      function fakeFetch(url, options = {}) {
        if (!url) return winAh.realFetch.call(win, url, options);
        return new Promise(async (resolve, reject) => {
          const init = {};
          if (getType(url) === "[object Request]") {
            for (const prop of fetchInitProps) init[prop] = url[prop];
            if (url.body) init.body = await url.arrayBuffer();
            url = url.url;
          }
          url = url.toString();
          Object.assign(init, options);
          init.method = init.method || "GET";
          init.headers = init.headers || {};
          const request = {
            type: "fetch",
            url,
            method: init.method.toUpperCase(),
            abort: false,
            headers: parseHeaders(init.headers),
            data: init.body,
            response: null,
            async: true
          };
          const req = new AHRequest(request);
          await req.waitForRequestKeys();
          if (request.abort) {
            if (typeof request.response === "function") {
              const response = {
                finalUrl: request.url,
                status: 200,
                responseHeaders: {}
              };
              await req.waitForResponseKeys(response);
              const key = fetchResponses.find((k) => k in response);
              let val = response[key];
              if (key === "json" && typeof val === "object") {
                val = catchError(JSON.stringify.bind(JSON), val);
              }
              const res = new Response(val, {
                status: 200,
                statusText: "OK"
              });
              defineProp(res, "type", () => "basic");
              defineProp(res, "url", () => request.url);
              resolve(res);
            } else {
              reject(new DOMException("aborted", "AbortError"));
            }
            return;
          }
          init.method = request.method;
          init.headers = request.headers;
          init.body = request.data;
          winAh.realFetch.call(win, request.url, init).then((res) => {
            if (typeof request.response === "function") {
              const response = {
                finalUrl: res.url,
                status: res.status,
                responseHeaders: parseHeaders(res.headers)
              };
              fetchResponses.forEach(
                (key) => res[key] = function() {
                  if (key in response) return Promise.resolve(response[key]);
                  return resProto[key].call(this).then((val) => {
                    response[key] = val;
                    return req.waitForResponseKeys(response).then(() => key in response ? response[key] : val);
                  });
                }
              );
            }
            resolve(res);
          }, reject);
        });
      }
      function fakeFetchClone() {
        const descriptors = Object.getOwnPropertyDescriptors(this);
        const res = winAh.realFetchClone.call(this);
        Object.defineProperties(res, descriptors);
        return res;
      }
      winAh = win.__ajaxHooker = winAh || {
        version,
        fakeXHR,
        fakeFetch,
        fakeFetchClone,
        realXHR: win.XMLHttpRequest,
        realFetch: win.fetch,
        realFetchClone: resProto.clone,
        hookInsts: /* @__PURE__ */ new Set()
      };
      if (winAh.version !== version)
        console.warn("检测到不同版本的ajaxHooker，可能发生冲突！");
      win.XMLHttpRequest = winAh.fakeXHR;
      win.fetch = winAh.fakeFetch;
      resProto.clone = winAh.fakeFetchClone;
      winAh.hookInsts.add(hookInst);
      return {
        hook: (fn) => hookInst.hookFns.push(fn),
        filter: (arr) => {
          if (Array.isArray(arr)) hookInst.filters = arr;
        },
        protect: () => {
          readonly(win, "XMLHttpRequest", winAh.fakeXHR);
          readonly(win, "fetch", winAh.fakeFetch);
          readonly(resProto, "clone", winAh.fakeFetchClone);
        },
        unhook: () => {
          winAh.hookInsts.delete(hookInst);
          if (!winAh.hookInsts.size) {
            writable(win, "XMLHttpRequest", winAh.realXHR);
            writable(win, "fetch", winAh.realFetch);
            writable(resProto, "clone", winAh.realFetchClone);
            delete win.__ajaxHooker;
          }
        }
      };
    }();
  };
  class GMMenu {
    constructor(details) {
      __publicField(this, "GM_Api", {
        /**
         * 获取存储的数据
         */
        getValue: null,
        /**
         * 设置数据到存储
         */
        setValue: null,
        /**
         * 注册菜单
         */
        registerMenuCommand: null,
        /**
         * 卸载菜单
         */
        unregisterMenuCommand: null
      });
      __publicField(this, "MenuHandle", {
        context: this,
        $data: {
          /**
           * 菜单数据
           */
          data: [],
          /**
           * 本地存储的键名
           */
          key: "GM_Menu_Local_Map"
        },
        $default: {
          /** 自动刷新网页，默认为true */
          autoReload: true,
          /**
           * 菜单isStoreValue的默认值
           */
          isStoreValue: true
        },
        $emoji: {
          /**
           * 菜单enable为true的emoji
           */
          success: "✅",
          /**
           * 菜单enable为false的emoji
           */
          error: "❌"
        },
        /**
         * 初始化数据
         */
        init() {
          for (let index = 0; index < this.$data.data.length; index++) {
            let menuOption = this.$data.data[index]["data"];
            menuOption.enable = Boolean(this.getLocalMenuData(menuOption.key, menuOption.enable));
            if (typeof menuOption.showText !== "function") {
              menuOption.showText = (menuText, menuEnable) => {
                if (menuEnable) {
                  return this.$emoji.success + " " + menuText;
                } else {
                  return this.$emoji.error + " " + menuText;
                }
              };
            }
          }
        },
        /**
         * 注册油猴菜单
         * @param menuOptions 如果存在，使用它
         */
        register(menuOptions) {
          let that = this;
          if (menuOptions == null) {
            throw new TypeError("register菜单数据不能为空");
          }
          if (!Array.isArray(menuOptions)) {
            menuOptions = [menuOptions];
          }
          for (let index = 0; index < menuOptions.length; index++) {
            let cloneMenuOptionData = utils$1.deepClone(menuOptions[index].data);
            const { showText, clickCallBack } = this.handleMenuData(cloneMenuOptionData);
            let menuId = that.context.GM_Api.registerMenuCommand(showText, clickCallBack);
            menuOptions[index].id = menuId;
            cloneMenuOptionData.deleteMenu = function() {
              that.context.GM_Api.unregisterMenuCommand(menuId);
            };
            Reflect.deleteProperty(menuOptions[index], "handleData");
            menuOptions[index].handleData = cloneMenuOptionData;
          }
        },
        /**
         * 获取本地存储菜单键值
         * @param {string} key 键
         */
        getLocalMenuData(key, defaultValue) {
          let localData = this.context.GM_Api.getValue(this.$data.key, {});
          if (key in localData) {
            return localData[key];
          } else {
            return defaultValue;
          }
        },
        /**
         * 设置本地存储菜单键值
         * @param key 键
         * @param value 值
         */
        setLocalMenuData(key, value) {
          let localData = this.context.GM_Api.getValue(this.$data.key, {});
          localData[key] = value;
          this.context.GM_Api.setValue(this.$data.key, localData);
        },
        /**
         * 处理初始化配置
         * @param menuOption
         */
        handleInitDetail(menuOption) {
          menuOption.enable = Boolean(this.getLocalMenuData(menuOption.key, menuOption.enable));
          if (typeof menuOption.showText !== "function") {
            menuOption.showText = (menuText, menuEnable) => {
              if (menuEnable) {
                return this.$emoji.success + " " + menuText;
              } else {
                return this.$emoji.error + " " + menuText;
              }
            };
          }
          return menuOption;
        },
        /**
         * 对菜单数据进行处理
         * @param menuOption
         */
        handleMenuData(menuOption) {
          let that = this;
          let menuLocalDataItemKey = menuOption.key;
          let defaultEnable = Boolean(this.getLocalMenuData(menuLocalDataItemKey, menuOption.enable));
          let showText = menuOption.showText(menuOption.text, defaultEnable);
          ({
            /**
             * 菜单的id
             */
            id: menuOption.id,
            /**
             * 点击菜单项后是否应关闭弹出菜单
             */
            autoClose: menuOption.autoClose,
            /**
             * 菜单项的可选访问键
             */
            accessKey: menuOption.accessKey,
            /**
             * 菜单项的鼠标悬浮上的工具提示
             */
            title: menuOption.title
          });
          menuOption.autoReload = typeof menuOption.autoReload !== "boolean" ? this.$default.autoReload : menuOption.autoReload;
          menuOption.isStoreValue = typeof menuOption.isStoreValue !== "boolean" ? this.$default.isStoreValue : menuOption.isStoreValue;
          function clickCallBack(event) {
            let localEnable = Boolean(that.getLocalMenuData(menuLocalDataItemKey, defaultEnable));
            if (menuOption.isStoreValue) {
              that.setLocalMenuData(menuLocalDataItemKey, !localEnable);
            }
            if (typeof menuOption.callback === "function") {
              menuOption.callback({
                key: menuLocalDataItemKey,
                enable: !localEnable,
                oldEnable: localEnable,
                event,
                storeValue(value) {
                  that.setLocalMenuData(menuLocalDataItemKey, value);
                }
              });
            }
            if (menuOption.autoReload) {
              window.location.reload();
            } else {
              that.context.update();
            }
          }
          return {
            showText,
            clickCallBack
          };
        },
        /**
         * 获取目标菜单配置数据
         * @param menuKey 菜单-键key
         */
        getMenuData(menuKey) {
          return this.$data.data.find((item) => item.data.key === menuKey);
        },
        /**
         * 获取目标菜单配置
         * @param menuKey 菜单-键key
         */
        getMenuOption(menuKey) {
          var _a2;
          return (_a2 = this.$data.data.find((item) => item.data.key === menuKey)) == null ? void 0 : _a2.data;
        },
        /**
         * 获取目标菜单处理后的配置
         * @param menuKey 菜单-键key
         */
        getMenuHandledOption(menuKey) {
          var _a2;
          return (_a2 = this.$data.data.find((item) => item.handleData.key === menuKey)) == null ? void 0 : _a2.handleData;
        }
      });
      this.GM_Api.getValue = details.GM_getValue;
      this.GM_Api.setValue = details.GM_setValue;
      this.GM_Api.registerMenuCommand = details.GM_registerMenuCommand;
      this.GM_Api.unregisterMenuCommand = details.GM_unregisterMenuCommand;
      this.MenuHandle.$default.autoReload = typeof details.autoReload === "boolean" ? details.autoReload : true;
      for (const keyName of Object.keys(this.GM_Api)) {
        if (typeof this.GM_Api[keyName] !== "function") {
          throw new Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${keyName}，且传入该对象`);
        }
      }
      this.add((details == null ? void 0 : details.data) || []);
    }
    /**
     * 新增菜单数据
     * @param menuOption
     */
    __add(menuOption) {
      if (Array.isArray(menuOption)) {
        for (let index = 0; index < menuOption.length; index++) {
          const option = menuOption[index];
          this.MenuHandle.$data.data.push({
            data: option,
            id: void 0
          });
        }
      } else {
        this.MenuHandle.$data.data.push({
          data: menuOption,
          id: void 0
        });
      }
    }
    /**
     * 新增菜单数据
     *
     * 自动调用.update()
     * @param menuOption
     */
    add(menuOption) {
      this.__add(menuOption);
      this.update();
    }
    /**
     * 更新菜单数据
     *
     * 实现方式：先取消注册所有已注册的菜单、再依次注册所有菜单项
     *
     * 如果菜单不存在，新增菜单项
     *
     * 如果菜单已存在，新菜单项覆盖旧的菜单项
     * @param options 数据
     */
    update(options) {
      let menuOptionList = [];
      if (Array.isArray(options)) {
        menuOptionList = [...menuOptionList, ...options];
      } else if (options != null) {
        menuOptionList = [...menuOptionList, options];
      }
      menuOptionList.forEach((menuOption) => {
        let oldMenuOption = this.MenuHandle.getMenuOption(menuOption.key);
        if (oldMenuOption) {
          Object.assign(oldMenuOption, menuOption);
        } else {
          this.__add(menuOption);
        }
      });
      this.MenuHandle.$data.data.forEach((value) => {
        if (value.handleData) {
          value.handleData.deleteMenu();
        }
      });
      this.MenuHandle.init();
      this.MenuHandle.register(this.MenuHandle.$data.data);
    }
    /**
     * 卸载菜单
     * @param menuId 已注册的菜单id
     */
    delete(menuId) {
      this.GM_Api.unregisterMenuCommand(menuId);
    }
    /**
     * 根据键值获取enable值
     * @param menuKey 菜单-键key
     * @deprecated
     */
    get(menuKey) {
      return this.getEnable(menuKey);
    }
    /**
     * 根据键值获取enable值
     * @param menuKey 菜单-键key
     */
    getEnable(menuKey) {
      return this.MenuHandle.getMenuHandledOption(menuKey).enable;
    }
    /**
     * 根据键值获取text值
     * @param menuKey 菜单-键key
     */
    getText(menuKey) {
      return this.MenuHandle.getMenuHandledOption(menuKey).text;
    }
    /**
     * 根据键值获取showText函数的值
     * @param menuKey 菜单-键key
     */
    getShowTextValue(menuKey) {
      return this.MenuHandle.getMenuHandledOption(menuKey).showText(this.getText(menuKey), this.getEnable(menuKey));
    }
    /**
     * 获取当前已注册菜单的id
     * @param menuKey
     */
    getMenuId(menuKey) {
      let result2 = null;
      for (let index = 0; index < this.MenuHandle.$data.data.length; index++) {
        const optionData = this.MenuHandle.$data.data[index];
        if (optionData.handleData.key === menuKey) {
          result2 = optionData.id;
          break;
        }
      }
      return result2;
    }
    /**
     * 根据键值获取accessKey值
     * @param menuKey 菜单-键key
     */
    getAccessKey(menuKey) {
      var _a2;
      return (_a2 = this.MenuHandle.getMenuHandledOption(menuKey)) == null ? void 0 : _a2.accessKey;
    }
    /**
     * 根据键值获取autoClose值
     * @param menuKey 菜单-键key
     */
    getAutoClose(menuKey) {
      var _a2;
      return (_a2 = this.MenuHandle.getMenuHandledOption(menuKey)) == null ? void 0 : _a2.autoClose;
    }
    /**
     * 根据键值获取autoReload值
     * @param menuKey 菜单-键key
     */
    getAutoReload(menuKey) {
      var _a2;
      return (_a2 = this.MenuHandle.getMenuHandledOption(menuKey)) == null ? void 0 : _a2.autoReload;
    }
    /**
     * 根据键值获取callback函数
     * @param menuKey 菜单-键key
     */
    getCallBack(menuKey) {
      var _a2;
      return (_a2 = this.MenuHandle.getMenuHandledOption(menuKey)) == null ? void 0 : _a2.callback;
    }
    /**
     * 获取当enable为true时默认显示在菜单中前面的emoji图标
     */
    getEnableTrueEmoji() {
      return this.MenuHandle.$emoji.success;
    }
    /**
     * 获取当enable为false时默认显示在菜单中前面的emoji图标
     */
    getEnableFalseEmoji() {
      return this.MenuHandle.$emoji.error;
    }
    /**
     * 获取本地存储的菜单外部的键名
     * @param keyName
     */
    getLocalStorageKeyName() {
      return this.MenuHandle.$data.key;
    }
    /**
     * 设置菜单的值
     * @param menuKey 菜单-键key
     * @param value 需要设置的值
     */
    setValue(menuKey, value) {
      this.MenuHandle.setLocalMenuData(menuKey, value);
    }
    /**
     * 设置菜单的值
     * @param menuKey 菜单-键key
     * @param value 需要设置的值
     */
    setEnable(menuKey, value) {
      this.setValue(menuKey, Boolean(value));
    }
    /**
     * 设置当enable为true时默认显示在菜单中前面的emoji图标
     * @param emojiString
     */
    setEnableTrueEmoji(emojiString) {
      if (typeof emojiString !== "string") {
        throw new Error("参数emojiString必须是string类型");
      }
      this.MenuHandle.$emoji.success = emojiString;
    }
    /**
     * 设置当enable为false时默认显示在菜单中前面的emoji图标
     * @param emojiString
     */
    setEnableFalseEmoji(emojiString) {
      if (typeof emojiString !== "string") {
        throw new Error("参数emojiString必须是string类型");
      }
      this.MenuHandle.$emoji.error = emojiString;
    }
    /**
     * 设置本地存储的菜单外部的键名
     * @param keyName
     */
    setLocalStorageKeyName(keyName) {
      if (typeof keyName !== "string") {
        throw new Error("参数keyName必须是string类型");
      }
      this.MenuHandle.$data.key = keyName;
    }
  }
  class Hooks {
    /**
     * 在Function原型上添加自定义方法.hook和.unhook
     */
    initEnv() {
      Function.prototype.hook = function(realFunc, hookFunc, context) {
        let _context = null;
        let _funcName = null;
        _context = context || window;
        _funcName = getFuncName(this);
        _context["realFunc_" + _funcName] = this;
        if (_context[_funcName].prototype && _context[_funcName].prototype.isHooked) {
          console.log("Already has been hooked,unhook first");
          return false;
        }
        function getFuncName(fn) {
          let strFunc = fn.toString();
          let _regex = /function\s+(\w+)\s*\(/;
          let patten = strFunc.match(_regex);
          if (patten) {
            return patten[1];
          }
          return "";
        }
        try {
          eval("_context[_funcName] = function " + _funcName + "(){\nlet args = Array.prototype.slice.call(arguments,0);\nlet obj = this;\nhookFunc.apply(obj,args);\nreturn _context['realFunc_" + _funcName + "'].apply(obj,args);\n};");
          _context[_funcName].prototype.isHooked = true;
          return true;
        } catch (e2) {
          console.log("Hook failed,check the params.");
          return false;
        }
      };
      Function.prototype.unhook = function(realFunc2, funcName, context2) {
        let _context3 = null;
        let _funcName2 = null;
        _context3 = context2 || window;
        _funcName2 = funcName;
        if (!_context3[_funcName2].prototype.isHooked) {
          console.log("No function is hooked on");
          return false;
        }
        _context3[_funcName2] = _context3["realFunc" + _funcName2];
        Reflect.deleteProperty(_context3, "realFunc_" + _funcName2);
        return true;
      };
    }
    /**
     * 删除在Function原型上添加的自定义方法.hook和.unhook
     */
    cleanEnv() {
      if (Function.prototype.hasOwnProperty("hook")) {
        Reflect.deleteProperty(Function.prototype, "hook");
      }
      if (Function.prototype.hasOwnProperty("unhook")) {
        Reflect.deleteProperty(Function.prototype, "unhook");
      }
      return true;
    }
  }
  const GenerateUUID = function() {
    var _a2;
    if (typeof ((_a2 = window == null ? void 0 : window.crypto) == null ? void 0 : _a2.randomUUID) === "function") {
      return window.crypto.randomUUID();
    } else {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(charStr) {
        var randomValue = Math.random() * 16 | 0, randomCharValue = charStr === "x" ? randomValue : randomValue & 3 | 8;
        return randomCharValue.toString(16);
      });
    }
  };
  class Httpx {
    /**
     * 实例化，可传入GM_xmlhttpRequest，未传入则使用window.fetch
     * @param xmlHttpRequest
     */
    constructor(xmlHttpRequest) {
      __publicField(this, "GM_Api", {
        xmlHttpRequest: null
      });
      __publicField(this, "HttpxRequestHook", {
        /**
         * @private
         */
        $config: {
          configList: []
        },
        /**
         * 发送请求前的回调
         * 如果返回false则阻止本次返回
         * @param details 当前的请求配置
         * @private
         */
        async beforeRequestCallBack(details) {
          if (typeof details.allowInterceptConfig === "boolean") {
            if (!details.allowInterceptConfig) {
              return details;
            }
          } else {
            if (details.allowInterceptConfig != null) {
              if (typeof details.allowInterceptConfig.beforeRequest === "boolean" && !details.allowInterceptConfig.beforeRequest) {
                return details;
              }
            }
          }
          for (let index = 0; index < this.$config.configList.length; index++) {
            let item = this.$config.configList[index];
            if (typeof item.fn === "function") {
              let result2 = await item.fn(details);
              if (result2 == null) {
                return;
              }
            }
          }
          return details;
        },
        /**
         * 添加请求前的回调处理配置
         */
        add(fn) {
          if (typeof fn === "function") {
            let uuid = GenerateUUID();
            this.$config.configList.push({
              id: uuid,
              fn
            });
            return uuid;
          } else {
            console.warn("[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function");
          }
        },
        /**
         * 删除请求前的回调处理配置
         * @param id
         */
        delete(id) {
          if (typeof id === "string") {
            let findIndex = this.$config.configList.findIndex((item) => item.id === id);
            if (findIndex !== -1) {
              this.$config.configList.splice(findIndex, 1);
              return true;
            }
          }
          return false;
        },
        /**
         * 清空设置的请求前的回调处理配置
         */
        clearAll() {
          this.$config.configList = [];
        }
      });
      __publicField(this, "HttpxResponseHook", {
        /**
         * @private
         */
        $config: {
          configList: []
        },
        /**
         * 成功的回调
         * @param response 响应
         * @param details 请求的配置
         */
        async successResponseCallBack(response, details) {
          if (typeof details.allowInterceptConfig === "boolean") {
            if (!details.allowInterceptConfig) {
              return details;
            }
          } else {
            if (details.allowInterceptConfig != null) {
              if (typeof details.allowInterceptConfig.afterResponseSuccess === "boolean" && !details.allowInterceptConfig.afterResponseSuccess) {
                return details;
              }
            }
          }
          for (let index = 0; index < this.$config.configList.length; index++) {
            let item = this.$config.configList[index];
            if (typeof item.successFn === "function") {
              let result2 = await item.successFn(response, details);
              if (result2 == null) {
                return;
              }
            }
          }
          return response;
        },
        /**
         * 失败的回调
         * @param data 配置
         * @returns
         * 返回null|undefined就是拦截掉了
         */
        async errorResponseCallBack(data) {
          if (typeof data.details.allowInterceptConfig === "boolean") {
            if (!data.details.allowInterceptConfig) {
              return data;
            }
          } else {
            if (data.details.allowInterceptConfig != null) {
              if (typeof data.details.allowInterceptConfig.afterResponseError === "boolean" && !data.details.allowInterceptConfig.afterResponseError) {
                return data;
              }
            }
          }
          for (let index = 0; index < this.$config.configList.length; index++) {
            let item = this.$config.configList[index];
            if (typeof item.errorFn === "function") {
              let result2 = await item.errorFn(data);
              if (result2 == null) {
                return;
              }
            }
          }
          return data;
        },
        /**
         * 添加请求前的回调处理配置
         */
        add(successFn, errorFn) {
          let id = GenerateUUID();
          this.$config.configList.push({
            id,
            successFn,
            errorFn
          });
          return id;
        },
        /**
         * 删除请求前的回调处理配置
         * @param id
         */
        delete(id) {
          if (typeof id === "string") {
            let findIndex = this.$config.configList.findIndex((item) => item.id === id);
            if (findIndex !== -1) {
              this.$config.configList.splice(findIndex, 1);
              return true;
            }
          }
          return false;
        },
        /**
         * 清空设置的请求前的回调处理配置
         */
        clearAll() {
          this.$config.configList = [];
        }
      });
      __publicField(this, "HttpxRequestOption", {
        context: this,
        /**
         * 根据传入的参数处理获取details配置
         */
        handleBeforeRequestOption(...args2) {
          let option = {};
          if (typeof args2[0] === "string") {
            let url = args2[0];
            option.url = url;
            if (typeof args2[1] === "object") {
              let details = args2[1];
              option = details;
              option.url = url;
            }
          } else {
            option = args2[0];
          }
          return option;
        },
        /**
         * 获取请求配置
         * @param method 当前请求方法，默认get
         * @param userRequestOption 用户的请求配置
         * @param resolve promise回调
         * @param reject 抛出错误回调
         */
        getRequestOption(method, userRequestOption, resolve, reject) {
          let that = this;
          let requestOption = {
            url: userRequestOption.url || __privateGet(this.context, _defaultDetails).url,
            method: (method || "GET").toString().toUpperCase().trim(),
            timeout: userRequestOption.timeout || __privateGet(this.context, _defaultDetails).timeout,
            responseType: userRequestOption.responseType || __privateGet(this.context, _defaultDetails).responseType,
            /* 对象使用深拷贝 */
            headers: utils$1.deepClone(__privateGet(this.context, _defaultDetails).headers),
            data: userRequestOption.data || __privateGet(this.context, _defaultDetails).data,
            redirect: userRequestOption.redirect || __privateGet(this.context, _defaultDetails).redirect,
            cookie: userRequestOption.cookie || __privateGet(this.context, _defaultDetails).cookie,
            cookiePartition: userRequestOption.cookiePartition || __privateGet(this.context, _defaultDetails).cookiePartition,
            binary: userRequestOption.binary || __privateGet(this.context, _defaultDetails).binary,
            nocache: userRequestOption.nocache || __privateGet(this.context, _defaultDetails).nocache,
            revalidate: userRequestOption.revalidate || __privateGet(this.context, _defaultDetails).revalidate,
            /* 对象使用深拷贝 */
            context: utils$1.deepClone(userRequestOption.context || __privateGet(this.context, _defaultDetails).context),
            overrideMimeType: userRequestOption.overrideMimeType || __privateGet(this.context, _defaultDetails).overrideMimeType,
            anonymous: userRequestOption.anonymous || __privateGet(this.context, _defaultDetails).anonymous,
            fetch: userRequestOption.fetch || __privateGet(this.context, _defaultDetails).fetch,
            /* 对象使用深拷贝 */
            fetchInit: utils$1.deepClone(__privateGet(this.context, _defaultDetails).fetchInit),
            allowInterceptConfig: {
              beforeRequest: __privateGet(this.context, _defaultDetails).allowInterceptConfig.beforeRequest,
              afterResponseSuccess: __privateGet(this.context, _defaultDetails).allowInterceptConfig.afterResponseSuccess,
              afterResponseError: __privateGet(this.context, _defaultDetails).allowInterceptConfig.afterResponseError
            },
            user: userRequestOption.user || __privateGet(this.context, _defaultDetails).user,
            password: userRequestOption.password || __privateGet(this.context, _defaultDetails).password,
            onabort(...args2) {
              that.context.HttpxCallBack.onAbort(userRequestOption, resolve, reject, args2);
            },
            onerror(...args2) {
              that.context.HttpxCallBack.onError(userRequestOption, resolve, reject, args2);
            },
            onloadstart(...args2) {
              that.context.HttpxCallBack.onLoadStart(userRequestOption, args2);
            },
            onprogress(...args2) {
              that.context.HttpxCallBack.onProgress(userRequestOption, args2);
            },
            onreadystatechange(...args2) {
              that.context.HttpxCallBack.onReadyStateChange(userRequestOption, args2);
            },
            ontimeout(...args2) {
              that.context.HttpxCallBack.onTimeout(userRequestOption, resolve, reject, args2);
            },
            onload(...args2) {
              that.context.HttpxCallBack.onLoad(userRequestOption, resolve, reject, args2);
            }
          };
          if (typeof userRequestOption.allowInterceptConfig === "boolean") {
            Object.keys(requestOption.allowInterceptConfig).forEach((keyName) => {
              Reflect.set(requestOption.allowInterceptConfig, keyName, userRequestOption.allowInterceptConfig);
            });
          } else {
            if (typeof userRequestOption.allowInterceptConfig === "object" && userRequestOption.allowInterceptConfig != null) {
              Object.keys(userRequestOption.allowInterceptConfig).forEach((keyName) => {
                let value = Reflect.get(userRequestOption.allowInterceptConfig, keyName);
                if (typeof value === "boolean" && Reflect.has(requestOption.allowInterceptConfig, keyName)) {
                  Reflect.set(requestOption.allowInterceptConfig, keyName, value);
                }
              });
            }
          }
          if (typeof this.context.GM_Api.xmlHttpRequest !== "function") {
            requestOption.fetch = true;
          }
          if (typeof requestOption.headers === "object") {
            if (typeof userRequestOption.headers === "object") {
              Object.keys(userRequestOption.headers).forEach((keyName, index) => {
                var _a2, _b;
                if (keyName in requestOption.headers && ((_a2 = userRequestOption.headers) == null ? void 0 : _a2[keyName]) == null) {
                  Reflect.deleteProperty(requestOption.headers, keyName);
                } else {
                  requestOption.headers[keyName] = (_b = userRequestOption == null ? void 0 : userRequestOption.headers) == null ? void 0 : _b[keyName];
                }
              });
            }
          } else {
            Reflect.set(requestOption, "headers", userRequestOption.headers);
          }
          if (typeof requestOption.fetchInit === "object") {
            if (typeof userRequestOption.fetchInit === "object") {
              Object.keys(userRequestOption.fetchInit).forEach((keyName, index) => {
                if (keyName in requestOption.fetchInit && userRequestOption.fetchInit[keyName] == null) {
                  Reflect.deleteProperty(requestOption.fetchInit, keyName);
                } else {
                  Reflect.set(requestOption.fetchInit, keyName, Reflect.get(userRequestOption.fetchInit, keyName));
                }
              });
            }
          } else {
            Reflect.set(requestOption, "fetchInit", userRequestOption.fetchInit);
          }
          if (typeof requestOption.cookiePartition === "object" && requestOption.cookiePartition != null) {
            if (Reflect.has(requestOption.cookiePartition, "topLevelSite") && typeof requestOption.cookiePartition.topLevelSite !== "string") {
              Reflect.deleteProperty(requestOption.cookiePartition, "topLevelSite");
            }
          }
          try {
            new URL(requestOption.url);
          } catch (error2) {
            if (requestOption.url.startsWith("//")) {
              requestOption.url = globalThis.location.protocol + requestOption.url;
            } else if (requestOption.url.startsWith("/")) {
              requestOption.url = globalThis.location.origin + requestOption.url;
            } else {
              requestOption.url = globalThis.location.origin + "/" + requestOption.url;
            }
          }
          if (requestOption.fetchInit && !requestOption.fetch) {
            Reflect.deleteProperty(requestOption, "fetchInit");
          }
          try {
            let processData = userRequestOption.processData ?? true;
            if (requestOption.data != null && processData) {
              let method2 = requestOption.method;
              if (method2 === "GET" || method2 === "HEAD") {
                let urlObj = new URL(requestOption.url);
                let urlSearch = "";
                let isHandler = false;
                if (typeof requestOption.data === "string") {
                  isHandler = true;
                  urlSearch = requestOption.data;
                } else if (typeof requestOption.data === "object") {
                  isHandler = true;
                  let searchParams = new URLSearchParams(requestOption.data);
                  urlSearch = searchParams.toString();
                }
                if (isHandler) {
                  Reflect.deleteProperty(requestOption, "data");
                }
                if (urlSearch != "") {
                  if (urlObj.search === "") {
                    urlObj.search = urlSearch;
                  } else {
                    if (urlObj.search.endsWith("&")) {
                      urlObj.search = urlObj.search + urlSearch;
                    } else {
                      urlObj.search = urlObj.search + "&" + urlSearch;
                    }
                  }
                }
                requestOption.url = urlObj.toString();
              } else if (method2 === "POST" && requestOption.headers != null) {
                let headersKeyList = Object.keys(requestOption.headers);
                let ContentTypeIndex = headersKeyList.findIndex((headerKey) => {
                  return headerKey.trim().toLowerCase() === "content-type" && typeof requestOption.headers[headerKey] === "string";
                });
                if (ContentTypeIndex !== -1) {
                  let ContentTypeKey = headersKeyList[ContentTypeIndex];
                  let ContentType = requestOption.headers[ContentTypeKey];
                  if (ContentType.includes("application/json")) {
                    if (requestOption.data instanceof FormData) {
                      const entries = {};
                      requestOption.data.forEach((value, key) => {
                        entries[key] = value;
                      });
                      requestOption.data = JSON.stringify(entries);
                    } else if (typeof requestOption.data === "object") {
                      requestOption.data = JSON.stringify(requestOption.data);
                    }
                  } else if (ContentType.includes("application/x-www-form-urlencoded")) {
                    if (typeof requestOption.data === "object") {
                      requestOption.data = new URLSearchParams(
                        // @ts-ignore
                        requestOption.data
                      ).toString();
                    }
                  } else if (ContentType.includes("multipart/form-data")) {
                    if (requestOption.data instanceof FormData) {
                      Reflect.deleteProperty(requestOption.headers, ContentTypeKey);
                    }
                  }
                }
              }
            }
          } catch (error2) {
            console.warn("Httpx ==> 转换data参数错误", error2);
          }
          return requestOption;
        },
        /**
         * 处理发送请求的配置，去除值为undefined、空function的值
         * @param option
         */
        removeRequestNullOption(option) {
          Object.keys(option).forEach((keyName) => {
            if (option[keyName] == null || option[keyName] instanceof Function && utils$1.isNull(option[keyName])) {
              Reflect.deleteProperty(option, keyName);
              return;
            }
          });
          if (utils$1.isNull(option.url)) {
            throw new TypeError(`Utils.Httpx 参数 url不符合要求: ${option.url}`);
          }
          return option;
        },
        /**
         * 处理fetch的配置
         * @param option
         */
        handleFetchOption(option) {
          let fetchRequestOption = {};
          if ((option.method === "GET" || option.method === "HEAD") && option.data != null) {
            Reflect.deleteProperty(option, "data");
          }
          let abortController = new AbortController();
          let signal = abortController.signal;
          signal.onabort = () => {
            option.onabort({
              isFetch: true,
              responseText: "",
              response: null,
              readyState: 4,
              responseHeaders: "",
              status: 0,
              statusText: "",
              error: "aborted"
            });
          };
          fetchRequestOption.method = option.method ?? "GET";
          fetchRequestOption.headers = option.headers;
          fetchRequestOption.body = option.data;
          fetchRequestOption.mode = "cors";
          fetchRequestOption.credentials = "include";
          fetchRequestOption.cache = "no-cache";
          fetchRequestOption.redirect = "follow";
          fetchRequestOption.referrerPolicy = "origin-when-cross-origin";
          fetchRequestOption.signal = signal;
          Object.assign(fetchRequestOption, option.fetchInit || {});
          return {
            fetchOption: option,
            fetchRequestOption,
            abortController
          };
        }
      });
      __publicField(this, "HttpxCallBack", {
        context: this,
        /**
         * onabort请求被取消-触发
         * @param details 配置
         * @param resolve 回调
         * @param reject 抛出错误
         * @param argsResult 返回的参数列表
         */
        async onAbort(details, resolve, reject, argsResult) {
          if ("onabort" in details) {
            details.onabort.apply(this, argsResult);
          } else if ("onabort" in __privateGet(this.context, _defaultDetails)) {
            __privateGet(this.context, _defaultDetails).onabort.apply(this, argsResult);
          }
          let response = argsResult;
          if (response.length) {
            response = response[0];
          }
          if (await this.context.HttpxResponseHook.errorResponseCallBack({
            type: "onabort",
            error: new TypeError("request canceled"),
            response: null,
            details
          }) == null) {
            return;
          }
          resolve({
            data: response,
            details,
            msg: "请求被取消",
            status: false,
            statusCode: -1,
            type: "onabort"
          });
        },
        /**
         * onerror请求异常-触发
         * @param details 配置
         * @param resolve 回调
         * @param reject 抛出错误
         * @param argsResult 返回的参数列表
         */
        async onError(details, resolve, reject, argsResult) {
          if ("onerror" in details) {
            details.onerror.apply(this, argsResult);
          } else if ("onerror" in __privateGet(this.context, _defaultDetails)) {
            __privateGet(this.context, _defaultDetails).onerror.apply(this, argsResult);
          }
          let response = argsResult;
          if (response.length) {
            response = response[0];
          }
          if (await this.context.HttpxResponseHook.errorResponseCallBack({
            type: "onerror",
            error: new TypeError("request error"),
            response,
            details
          }) == null) {
            return;
          }
          resolve({
            data: response,
            details,
            msg: "请求异常",
            status: false,
            statusCode: response["status"],
            type: "onerror"
          });
        },
        /**
         * ontimeout请求超时-触发
         * @param details 配置
         * @param resolve 回调
         * @param reject 抛出错误
         * @param argsResult 返回的参数列表
         */
        async onTimeout(details, resolve, reject, argsResult) {
          if ("ontimeout" in details) {
            details.ontimeout.apply(this, argsResult);
          } else if ("ontimeout" in __privateGet(this.context, _defaultDetails)) {
            __privateGet(this.context, _defaultDetails).ontimeout.apply(this, argsResult);
          }
          let response = argsResult;
          if (response.length) {
            response = response[0];
          }
          if (await this.context.HttpxResponseHook.errorResponseCallBack({
            type: "ontimeout",
            error: new TypeError("request timeout"),
            response: (argsResult || [null])[0],
            details
          }) == null) {
            return;
          }
          resolve({
            data: response,
            details,
            msg: "请求超时",
            status: false,
            statusCode: 0,
            type: "ontimeout"
          });
        },
        /**
         * onloadstart请求开始-触发
         * @param details 配置
         * @param argsResult 返回的参数列表
         */
        onLoadStart(details, argsResult) {
          if ("onloadstart" in details) {
            details.onloadstart.apply(this, argsResult);
          } else if ("onloadstart" in __privateGet(this.context, _defaultDetails)) {
            __privateGet(this.context, _defaultDetails).onloadstart.apply(this, argsResult);
          }
        },
        /**
         * onload加载完毕-触发
         * @param details 请求的配置
         * @param resolve 回调
         * @param reject 抛出错误
         * @param argsResult 返回的参数列表
         */
        async onLoad(details, resolve, reject, argsResult) {
          let originResponse = argsResult[0];
          if (utils$1.isNull(originResponse["responseText"]) && utils$1.isNotNull(originResponse["response"])) {
            if (typeof originResponse["response"] === "object") {
              utils$1.tryCatch().run(() => {
                originResponse["responseText"] = JSON.stringify(originResponse["response"]);
              });
            } else {
              originResponse["responseText"] = originResponse["response"];
            }
          }
          if (originResponse["response"] == null && typeof originResponse["responseText"] === "string" && originResponse["responseText"].trim() !== "") {
            let httpxResponseText = originResponse.responseText;
            let httpxResponse = httpxResponseText;
            if (details.responseType === "json") {
              httpxResponse = utils$1.toJSON(httpxResponseText);
            } else if (details.responseType === "document") {
              let parser = new DOMParser();
              httpxResponse = parser.parseFromString(httpxResponseText, "text/html");
            } else if (details.responseType === "arraybuffer") {
              let encoder = new TextEncoder();
              let arrayBuffer = encoder.encode(httpxResponseText);
              httpxResponse = arrayBuffer;
            } else if (details.responseType === "blob") {
              let encoder = new TextEncoder();
              let arrayBuffer = encoder.encode(httpxResponseText);
              httpxResponse = new Blob([arrayBuffer]);
            }
            try {
              let setStatus = Reflect.set(originResponse, "response", httpxResponse);
              if (!setStatus) {
                console.warn("[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse");
                try {
                  Reflect.set(originResponse, "httpxResponse", httpxResponse);
                } catch (error2) {
                  console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");
                }
              }
            } catch (error2) {
              console.warn("[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse");
              try {
                Reflect.set(originResponse, "httpxResponse", httpxResponse);
              } catch (error3) {
                console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");
              }
            }
          }
          let originResponseURL = Reflect.get(originResponse, "responseURL");
          if (originResponse["finalUrl"] == null && originResponseURL != null) {
            Reflect.set(originResponse, "finalUrl", originResponseURL);
          }
          if (Math.floor(originResponse.status / 100) === 2) {
            if (await this.context.HttpxResponseHook.successResponseCallBack(originResponse, details) == null) {
              return;
            }
            resolve({
              data: originResponse,
              details,
              msg: "请求成功",
              status: true,
              statusCode: originResponse.status,
              type: "onload"
            });
          } else {
            this.context.HttpxCallBack.onError(details, resolve, reject, argsResult);
          }
        },
        /**
         * onprogress上传进度-触发
         * @param details 配置
         * @param argsResult 返回的参数列表
         */
        onProgress(details, argsResult) {
          if ("onprogress" in details) {
            details.onprogress.apply(this, argsResult);
          } else if ("onprogress" in __privateGet(this.context, _defaultDetails)) {
            __privateGet(this.context, _defaultDetails).onprogress.apply(this, argsResult);
          }
        },
        /**
         * onreadystatechange准备状态改变-触发
         * @param details 配置
         * @param argsResult 返回的参数列表
         */
        onReadyStateChange(details, argsResult) {
          if ("onreadystatechange" in details) {
            details.onreadystatechange.apply(this, argsResult);
          } else if ("onreadystatechange" in __privateGet(this.context, _defaultDetails)) {
            __privateGet(this.context, _defaultDetails).onreadystatechange.apply(this, argsResult);
          }
        }
      });
      __publicField(this, "HttpxRequest", {
        context: this,
        /**
         * 发送请求
         * @param details
         */
        async request(details) {
          if (__privateGet(this.context, _LOG_DETAILS)) {
            console.log("[Httpx-HttpxRequest.request] 请求前的配置👇", details);
          }
          if (typeof this.context.HttpxRequestHook.beforeRequestCallBack === "function") {
            let hookResult = await this.context.HttpxRequestHook.beforeRequestCallBack(details);
            if (hookResult == null) {
              return;
            }
          }
          if (details.fetch) {
            const { fetchOption, fetchRequestOption, abortController } = this.context.HttpxRequestOption.handleFetchOption(details);
            return this.fetch(fetchOption, fetchRequestOption, abortController);
          } else {
            return this.xmlHttpRequest(details);
          }
        },
        /**
         * 使用油猴函数GM_xmlhttpRequest发送请求
         * @param details
         */
        xmlHttpRequest(details) {
          return this.context.GM_Api.xmlHttpRequest(details);
        },
        /**
         * 使用fetch发送请求
         * @param option
         * @param fetchRequestOption
         * @param abortController
         */
        fetch(option, fetchRequestOption, abortController) {
          fetch(option.url, fetchRequestOption).then(async (fetchResponse) => {
            var _a2;
            let httpxResponse = {
              isFetch: true,
              finalUrl: fetchResponse.url,
              readyState: 4,
              // @ts-ignore
              status: fetchResponse.status,
              statusText: fetchResponse.statusText,
              // @ts-ignore
              response: void 0,
              responseFetchHeaders: fetchResponse.headers,
              responseHeaders: "",
              // @ts-ignore
              responseText: void 0,
              responseType: option.responseType,
              responseXML: void 0
            };
            Object.assign(httpxResponse, option.context || {});
            for (const [key, value] of fetchResponse.headers.entries()) {
              httpxResponse.responseHeaders += `${key}: ${value}
`;
            }
            const fetchResponseType = fetchResponse.headers.get("Content-Type");
            if (option.responseType === "stream" || fetchResponse.headers.has("Content-Type") && fetchResponse.headers.get("Content-Type").includes("text/event-stream")) {
              Reflect.set(httpxResponse, "isStream", true);
              Reflect.set(httpxResponse, "response", fetchResponse.body);
              Reflect.deleteProperty(httpxResponse, "responseText");
              Reflect.deleteProperty(httpxResponse, "responseXML");
              option.onload(httpxResponse);
              return;
            }
            let response = "";
            let responseText = "";
            let responseXML = "";
            let arrayBuffer = await fetchResponse.arrayBuffer();
            let encoding = "utf-8";
            if (fetchResponse.headers.has("Content-Type")) {
              let charsetMatched = (_a2 = fetchResponse.headers.get("Content-Type")) == null ? void 0 : _a2.match(/charset=(.+)/);
              if (charsetMatched) {
                encoding = charsetMatched[1];
                encoding = encoding.toLowerCase();
              }
            }
            encoding = encoding.replace(/('|")/gi, "");
            let textDecoder = new TextDecoder(encoding);
            responseText = textDecoder.decode(arrayBuffer);
            response = responseText;
            if (option.responseType === "arraybuffer") {
              response = arrayBuffer;
            } else if (option.responseType === "blob") {
              response = new Blob([arrayBuffer]);
            } else if (option.responseType === "json" || typeof fetchResponseType === "string" && fetchResponseType.includes("application/json")) {
              response = utils$1.toJSON(responseText);
            } else if (option.responseType === "document" || option.responseType == null) {
              let parser2 = new DOMParser();
              response = parser2.parseFromString(responseText, "text/html");
            }
            let parser = new DOMParser();
            responseXML = parser.parseFromString(responseText, "text/xml");
            Reflect.set(httpxResponse, "response", response);
            Reflect.set(httpxResponse, "responseText", responseText);
            Reflect.set(httpxResponse, "responseXML", responseXML);
            option.onload(httpxResponse);
          }).catch((error2) => {
            if (error2.name === "AbortError") {
              return;
            }
            option.onerror({
              isFetch: true,
              finalUrl: option.url,
              readyState: 4,
              status: 0,
              statusText: "",
              responseHeaders: "",
              responseText: "",
              error: error2
            });
          });
          option.onloadstart({
            isFetch: true,
            finalUrl: option.url,
            readyState: 1,
            responseHeaders: "",
            responseText: "",
            status: 0,
            statusText: ""
          });
          return {
            abort() {
              abortController.abort();
            }
          };
        }
      });
      /**
       * 默认配置
       */
      __privateAdd(this, _defaultDetails, {
        url: void 0,
        timeout: 5e3,
        async: false,
        responseType: void 0,
        headers: void 0,
        data: void 0,
        redirect: void 0,
        cookie: void 0,
        cookiePartition: void 0,
        binary: void 0,
        nocache: void 0,
        revalidate: void 0,
        context: void 0,
        overrideMimeType: void 0,
        anonymous: void 0,
        fetch: void 0,
        fetchInit: void 0,
        allowInterceptConfig: {
          beforeRequest: true,
          afterResponseSuccess: true,
          afterResponseError: true
        },
        user: void 0,
        password: void 0,
        onabort() {
        },
        onerror() {
        },
        ontimeout() {
        },
        onloadstart() {
        },
        onreadystatechange() {
        },
        onprogress() {
        }
      });
      /**
       * 当前使用请求时，输出请求的配置
       */
      __privateAdd(this, _LOG_DETAILS, false);
      /**
       * 拦截器
       */
      __publicField(this, "interceptors", {
        /**
         * 请求拦截器
         */
        request: {
          context: null,
          /**
           * 添加拦截器
           * @param fn 设置的请求前回调函数，如果返回配置，则使用返回的配置，如果返回null|undefined，则阻止请求
           */
          use(fn) {
            if (typeof fn !== "function") {
              console.warn("[Httpx-interceptors-request] 请传入拦截器函数");
              return;
            }
            return this.context.HttpxRequestHook.add(fn);
          },
          /**
           * 移除拦截器
           * @param id 通过use返回的id
           */
          eject(id) {
            return this.context.HttpxRequestHook.delete(id);
          },
          /**
           * 移除所有拦截器
           */
          ejectAll() {
            this.context.HttpxRequestHook.clearAll();
          }
        },
        /**
         * 响应拦截器
         */
        response: {
          context: null,
          /**
           * 添加拦截器
           * @param successFn 设置的响应后回调函数，如果返回响应，则使用返回的响应，如果返回null|undefined，则阻止响应
           * + 2xx 范围内的状态码都会触发该函数
           * @param errorFn 设置的响应后回调函数，如果返回响应，则使用返回的响应，如果返回null|undefined，则阻止响应
           * + 超出 2xx 范围的状态码都会触发该函数
           */
          use(successFn, errorFn) {
            if (typeof successFn !== "function" && typeof errorFn !== "function") {
              console.warn("[Httpx-interceptors-response] 必须传入一个拦截器函数");
              return;
            }
            return this.context.HttpxResponseHook.add(successFn, errorFn);
          },
          /**
           * 移除拦截器
           * @param id 通过use返回的id
           */
          eject(id) {
            return this.context.HttpxResponseHook.delete(id);
          },
          /**
           * 移除所有拦截器
           */
          ejectAll() {
            this.context.HttpxResponseHook.clearAll();
          }
        }
      });
      if (typeof xmlHttpRequest !== "function") {
        console.warn("[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch");
      }
      this.interceptors.request.context = this;
      this.interceptors.response.context = this;
      this.GM_Api.xmlHttpRequest = xmlHttpRequest;
    }
    /**
     * 覆盖当前配置
     * @param details
     */
    config(details = {}) {
      if ("logDetails" in details && typeof details["logDetails"] === "boolean") {
        __privateSet(this, _LOG_DETAILS, details["logDetails"]);
      }
      __privateSet(this, _defaultDetails, utils$1.assign(__privateGet(this, _defaultDetails), details));
    }
    /**
     * 修改xmlHttpRequest
     * @param httpRequest 网络请求函数
     */
    setXMLHttpRequest(httpRequest) {
      this.GM_Api.xmlHttpRequest = httpRequest;
    }
    /**
     * GET 请求
     * @param url 网址
     * @param details 配置
     */
    get(...args2) {
      let userRequestOption = this.HttpxRequestOption.handleBeforeRequestOption(...args2);
      let abortFn = null;
      let promise = new globalThis.Promise(async (resolve, reject) => {
        let requestOption = this.HttpxRequestOption.getRequestOption("GET", userRequestOption, resolve, reject);
        Reflect.deleteProperty(requestOption, "onprogress");
        this.HttpxRequestOption.removeRequestNullOption(requestOption);
        const requestResult = await this.HttpxRequest.request(requestOption);
        if (requestResult != null && typeof requestResult.abort === "function") {
          abortFn = requestResult.abort;
        }
      });
      promise.abort = () => {
        if (typeof abortFn === "function") {
          abortFn();
        }
      };
      return promise;
    }
    /**
     * POST 请求
     */
    post(...args2) {
      let userRequestOption = this.HttpxRequestOption.handleBeforeRequestOption(...args2);
      let abortFn = null;
      let promise = new Promise(async (resolve, reject) => {
        let requestOption = this.HttpxRequestOption.getRequestOption("POST", userRequestOption, resolve, reject);
        requestOption = this.HttpxRequestOption.removeRequestNullOption(requestOption);
        const requestResult = await this.HttpxRequest.request(requestOption);
        if (requestResult != null && typeof requestResult.abort === "function") {
          abortFn = requestResult.abort;
        }
      });
      promise.abort = () => {
        if (typeof abortFn === "function") {
          abortFn();
        }
      };
      return promise;
    }
    /**
     * HEAD 请求
     */
    head(...args2) {
      let userRequestOption = this.HttpxRequestOption.handleBeforeRequestOption(...args2);
      let abortFn = null;
      let promise = new Promise(async (resolve, reject) => {
        let requestOption = this.HttpxRequestOption.getRequestOption("HEAD", userRequestOption, resolve, reject);
        Reflect.deleteProperty(requestOption, "onprogress");
        requestOption = this.HttpxRequestOption.removeRequestNullOption(requestOption);
        const requestResult = await this.HttpxRequest.request(requestOption);
        if (requestResult != null && typeof requestResult.abort === "function") {
          abortFn = requestResult.abort;
        }
      });
      promise.abort = () => {
        if (typeof abortFn === "function") {
          abortFn();
        }
      };
      return promise;
    }
    /**
     * OPTIONS 请求
     */
    options(...args2) {
      let userRequestOption = this.HttpxRequestOption.handleBeforeRequestOption(...args2);
      let abortFn = null;
      let promise = new Promise(async (resolve, reject) => {
        let requestOption = this.HttpxRequestOption.getRequestOption("OPTIONS", userRequestOption, resolve, reject);
        Reflect.deleteProperty(requestOption, "onprogress");
        requestOption = this.HttpxRequestOption.removeRequestNullOption(requestOption);
        const requestResult = await this.HttpxRequest.request(requestOption);
        if (requestResult != null && typeof requestResult.abort === "function") {
          abortFn = requestResult.abort;
        }
      });
      promise.abort = () => {
        if (typeof abortFn === "function") {
          abortFn();
        }
      };
      return promise;
    }
    /**
     * DELETE 请求
     */
    delete(...args2) {
      let userRequestOption = this.HttpxRequestOption.handleBeforeRequestOption(...args2);
      let abortFn = null;
      let promise = new Promise(async (resolve, reject) => {
        let requestOption = this.HttpxRequestOption.getRequestOption("DELETE", userRequestOption, resolve, reject);
        Reflect.deleteProperty(requestOption, "onprogress");
        requestOption = this.HttpxRequestOption.removeRequestNullOption(requestOption);
        const requestResult = await this.HttpxRequest.request(requestOption);
        if (requestResult != null && typeof requestResult.abort === "function") {
          abortFn = requestResult.abort;
        }
      });
      promise.abort = () => {
        if (typeof abortFn === "function") {
          abortFn();
        }
      };
      return promise;
    }
    /**
     * PUT 请求
     */
    put(...args2) {
      let userRequestOption = this.HttpxRequestOption.handleBeforeRequestOption(...args2);
      let abortFn = null;
      let promise = new Promise(async (resolve, reject) => {
        let requestOption = this.HttpxRequestOption.getRequestOption("PUT", userRequestOption, resolve, reject);
        requestOption = this.HttpxRequestOption.removeRequestNullOption(requestOption);
        const requestResult = await this.HttpxRequest.request(requestOption);
        if (requestResult != null && typeof requestResult.abort === "function") {
          abortFn = requestResult.abort;
        }
      });
      promise.abort = () => {
        if (typeof abortFn === "function") {
          abortFn();
        }
      };
      return promise;
    }
  }
  _defaultDetails = new WeakMap();
  _LOG_DETAILS = new WeakMap();
  class indexedDB {
    /**
     * @param dbName 数据存储名，默认为：default_db
     * @param storeName 表名，默认为：default_form
     * @param dbVersion indexDB的版本号，默认为：1
     */
    constructor(dbName = "default_db", storeName = "default_form", dbVersion = 1) {
      __privateAdd(this, _dbName);
      __privateAdd(this, _storeName);
      __privateAdd(this, _dbVersion);
      /* websql的版本号，由于ios的问题，版本号的写法不一样 */
      // @ts-ignore
      __privateAdd(this, _slqVersion, "1");
      /* 监听IndexDB */
      __privateAdd(this, _indexedDB, window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
      /* 缓存数据库，避免同一个页面重复创建和销毁 */
      __privateAdd(this, _db, {});
      // @ts-ignore
      __privateAdd(this, _store, null);
      /** 状态码 */
      __privateAdd(this, _statusCode, {
        operationSuccess: {
          code: 200,
          msg: "操作成功"
        },
        operationFailed: {
          code: 401,
          msg: "操作失败"
        },
        empty: {
          code: 201,
          msg: "操作成功，但是没有数据"
        },
        openFailed: { code: 91001, msg: "打开数据库失败" },
        saveFailed: { code: 91002, msg: "保存数据失败" },
        getFailed: { code: 91003, msg: "获取数据失败" },
        deleteFailed: { code: 91004, msg: "删除数据失败" },
        deleteAllFailed: { code: 91005, msg: "清空数据库失败" },
        regexpGetFailed: { code: 91006, msg: "正则获取数据失败" }
      });
      __privateSet(this, _dbName, dbName);
      __privateSet(this, _storeName, storeName);
      __privateSet(this, _dbVersion, dbVersion);
      if (!__privateGet(this, _indexedDB)) {
        alert("很抱歉，您的浏览器不支持indexedDB");
        throw new TypeError("很抱歉，您的浏览器不支持indexedDB");
      }
    }
    /**
     * 创建 “表”
     * @param dbName 表名
     */
    createStore(dbName) {
      let txn, store;
      txn = __privateGet(this, _db)[dbName].transaction(__privateGet(this, _storeName), "readwrite");
      store = txn.objectStore(__privateGet(this, _storeName));
      __privateSet(this, _store, store);
      return store;
    }
    /**
     * 打开数据库
     * @param callback  回调
     * @param dbName 数据库名
     */
    open(callback2, dbName) {
      let that = this;
      if (!__privateGet(that, _db)[dbName]) {
        let request = __privateGet(that, _indexedDB).open(dbName, __privateGet(that, _dbVersion));
        request.onerror = function(event) {
          callback2(null, {
            code: __privateGet(that, _statusCode).openFailed.code,
            msg: __privateGet(that, _statusCode).openFailed.msg,
            event
          });
        };
        request.onsuccess = function(event) {
          if (!__privateGet(that, _db)[dbName]) {
            let target = event.target;
            __privateGet(that, _db)[dbName] = target.result;
          }
          let store = that.createStore(dbName);
          callback2(store);
        };
        request.onupgradeneeded = function(event) {
          let target = event.target;
          __privateGet(that, _db)[dbName] = target.result;
          let store = __privateGet(that, _db)[dbName].createObjectStore(__privateGet(that, _storeName), {
            keyPath: "key"
          });
          store.transaction.oncomplete = function(event2) {
            callback2(store);
          };
        };
      } else {
        let store = this.createStore(dbName);
        callback2(store);
      }
    }
    /**
     * 保存数据到数据库
     * @param key 数据key
     * @param value 数据值
     */
    async save(key, value) {
      let that = this;
      return new Promise((resolve) => {
        let dbName = __privateGet(this, _dbName);
        let inData = {
          key,
          value
        };
        this.open(function(idbStore) {
          if (idbStore == null) {
            resolve({
              success: false,
              code: __privateGet(that, _statusCode).saveFailed.code,
              msg: __privateGet(that, _statusCode).saveFailed.msg
            });
          } else {
            let request = idbStore.put(inData);
            request.onsuccess = function(event) {
              resolve({
                success: true,
                code: __privateGet(that, _statusCode).operationSuccess.code,
                msg: __privateGet(that, _statusCode).operationSuccess.msg,
                event
              });
            };
            request.onerror = function(event) {
              resolve({
                success: false,
                code: __privateGet(that, _statusCode).saveFailed.code,
                msg: __privateGet(that, _statusCode).saveFailed.msg,
                event
              });
            };
          }
        }, dbName);
      });
    }
    /**
     * 判断是否存在该数据
     * @param key 数据key
     */
    async has(key) {
      let that = this;
      return new Promise((resolve) => {
        let dbName = __privateGet(this, _dbName);
        this.open(function(idbStore) {
          if (idbStore == null) {
            resolve({
              success: false,
              code: __privateGet(that, _statusCode).getFailed.code,
              msg: __privateGet(that, _statusCode).getFailed.msg
            });
          } else {
            let request = idbStore.get(key);
            request.onsuccess = function(event) {
              resolve({
                success: true,
                code: __privateGet(that, _statusCode).operationSuccess.code,
                msg: __privateGet(that, _statusCode).operationSuccess.msg,
                event
              });
            };
            request.onerror = function(event) {
              resolve({
                success: false,
                code: __privateGet(that, _statusCode).getFailed.code,
                msg: __privateGet(that, _statusCode).getFailed.msg,
                event
              });
            };
          }
        }, dbName);
      });
    }
    /**
     * 根据key获取值
     * @param key 数据key
     */
    async get(key) {
      let that = this;
      return new Promise((resolve) => {
        let dbName = __privateGet(this, _dbName);
        this.open(function(idbStore) {
          if (idbStore == null) {
            resolve({
              success: false,
              code: __privateGet(that, _statusCode).getFailed.code,
              msg: __privateGet(that, _statusCode).getFailed.msg,
              data: void 0
            });
          } else {
            let request = idbStore.get(key);
            request.onsuccess = function(event) {
              let target = event.target;
              let result2 = target.result;
              let data = result2 ? result2.value : void 0;
              if (data == null) {
                resolve({
                  success: true,
                  code: __privateGet(that, _statusCode).empty.code,
                  msg: __privateGet(that, _statusCode).empty.msg,
                  data,
                  event,
                  result: result2
                });
              } else {
                resolve({
                  success: true,
                  code: __privateGet(that, _statusCode).operationSuccess.code,
                  msg: __privateGet(that, _statusCode).operationSuccess.msg,
                  data,
                  event,
                  result: result2
                });
              }
            };
            request.onerror = function(event) {
              resolve({
                success: false,
                code: __privateGet(that, _statusCode).getFailed.code,
                msg: __privateGet(that, _statusCode).getFailed.msg,
                data: void 0,
                event
              });
            };
          }
        }, dbName);
      });
    }
    /**
     * 正则获取数据
     * @param key 数据key，可以是正则
     */
    async regexpGet(key) {
      let list = [];
      let that = this;
      return new Promise((resolve) => {
        let dbName = __privateGet(that, _dbName);
        this.open(function(idbStore) {
          if (idbStore == null) {
            resolve({
              success: false,
              code: __privateGet(that, _statusCode).regexpGetFailed.code,
              msg: __privateGet(that, _statusCode).regexpGetFailed.msg,
              data: []
            });
          } else {
            let request = idbStore.getAll();
            request.onsuccess = function(event) {
              let target = event.target;
              let result2 = target.result;
              if (result2.length !== 0) {
                result2.forEach((dataItem, index) => {
                  let __key = dataItem["key"];
                  let __value = dataItem["value"];
                  if (__key.match(key)) {
                    list = list.concat(__value);
                  }
                });
              }
              resolve({
                success: true,
                code: __privateGet(that, _statusCode).operationSuccess.code,
                msg: __privateGet(that, _statusCode).operationSuccess.msg,
                data: list,
                event
              });
            };
            request.onerror = function(event) {
              resolve({
                success: false,
                code: __privateGet(that, _statusCode).getFailed.code,
                msg: __privateGet(that, _statusCode).getFailed.msg,
                data: [],
                event
              });
            };
          }
        }, dbName);
      });
    }
    /**
     * 删除数据
     * @param key 数据key
     */
    async delete(key) {
      let that = this;
      return new Promise((resolve) => {
        let dbName = __privateGet(that, _dbName);
        this.open(function(idbStore) {
          if (idbStore == null) {
            resolve({
              success: false,
              code: __privateGet(that, _statusCode).deleteFailed.code,
              msg: __privateGet(that, _statusCode).deleteFailed.msg
            });
          } else {
            let request = idbStore.delete(key);
            request.onsuccess = function(event) {
              resolve({
                success: true,
                code: __privateGet(that, _statusCode).operationSuccess.code,
                msg: __privateGet(that, _statusCode).operationSuccess.msg,
                event
              });
            };
            request.onerror = function(event) {
              resolve({
                success: false,
                code: __privateGet(that, _statusCode).deleteFailed.code,
                msg: __privateGet(that, _statusCode).deleteFailed.msg,
                event
              });
            };
          }
        }, dbName);
      });
    }
    /**
     * 删除所有数据
     */
    async deleteAll() {
      let that = this;
      return new Promise((resolve) => {
        let dbName = __privateGet(that, _dbName);
        this.open(function(idbStore) {
          if (idbStore == null) {
            resolve({
              success: false,
              code: __privateGet(that, _statusCode).deleteAllFailed.code,
              msg: __privateGet(that, _statusCode).deleteAllFailed.msg
            });
          } else {
            let operateResult = idbStore.clear();
            operateResult.onsuccess = function(event) {
              resolve({
                success: true,
                code: __privateGet(that, _statusCode).operationSuccess.code,
                msg: __privateGet(that, _statusCode).operationSuccess.msg,
                event
              });
            };
            operateResult.onerror = function(event) {
              resolve({
                success: false,
                code: __privateGet(that, _statusCode).deleteAllFailed.code,
                msg: __privateGet(that, _statusCode).deleteAllFailed.msg,
                event
              });
            };
          }
        }, dbName);
      });
    }
  }
  _dbName = new WeakMap();
  _storeName = new WeakMap();
  _dbVersion = new WeakMap();
  _slqVersion = new WeakMap();
  _indexedDB = new WeakMap();
  _db = new WeakMap();
  _store = new WeakMap();
  _statusCode = new WeakMap();
  class LockFunction {
    constructor(callback2, context2, delayTime) {
      __privateAdd(this, _flag, false);
      __privateAdd(this, _delayTime, 0);
      __privateAdd(this, _callback);
      __privateAdd(this, _context2);
      __publicField(this, "lock");
      __publicField(this, "unlock");
      __publicField(this, "run");
      __publicField(this, "isLock");
      let that = this;
      __privateSet(this, _callback, callback2);
      if (typeof context2 === "number") {
        __privateSet(this, _delayTime, context2);
        __privateSet(this, _context2, utils$1);
      } else {
        __privateSet(this, _delayTime, delayTime);
        __privateSet(this, _context2, context2);
      }
      this.lock = function() {
        __privateSet(that, _flag, true);
      };
      this.unlock = function() {
        setTimeout(() => {
          __privateSet(that, _flag, false);
        }, __privateGet(that, _delayTime));
      };
      this.isLock = function() {
        return __privateGet(that, _flag);
      };
      this.run = async function(...args2) {
        if (that.isLock()) {
          return;
        }
        that.lock();
        await __privateGet(that, _callback).apply(__privateGet(that, _context2), args2);
        that.unlock();
      };
    }
  }
  _flag = new WeakMap();
  _delayTime = new WeakMap();
  _callback = new WeakMap();
  _context2 = new WeakMap();
  class Log {
    /**
     * @param __GM_info 油猴管理器的API GM_info，或者是一个对象，如{"script":{name:"Utils.Log"}}，或者直接是一个字符串，用作tag名
     * @param console 可指定console对象为unsafeWindow下的console或者是油猴window下的console
     */
    constructor(__GM_info, console2 = window.console) {
      /** 是否禁用输出的flag */
      __privateAdd(this, _disable, false);
      /** 前面的TAG标志 */
      __publicField(this, "tag", "Utils.Log");
      /* 使用的console函数 */
      __privateAdd(this, _console, null);
      /* 当前输出的数量 */
      __privateAdd(this, _logCount, 0);
      /* 配置 */
      __privateAdd(this, _details, {
        tag: true,
        successColor: "#0000FF",
        errorColor: "#FF0000",
        infoColor: "0",
        warnColor: "0",
        debug: false,
        autoClearConsole: false,
        logMaxCount: 999
      });
      /**
       * 颜色配置
       */
      __privateAdd(this, _msgColorDetails, [
        "font-weight: bold; color: cornflowerblue",
        "font-weight: bold; color: cornflowerblue",
        "font-weight: bold; color: darkorange",
        "font-weight: bold; color: cornflowerblue"
      ]);
      var _a2;
      if (typeof __GM_info === "string") {
        this.tag = __GM_info;
      } else if (typeof __GM_info === "object" && typeof ((_a2 = __GM_info == null ? void 0 : __GM_info.script) == null ? void 0 : _a2.name) === "string") {
        this.tag = __GM_info.script.name;
      }
      __privateSet(this, _console, console2);
    }
    /**
     * 解析Error的堆栈获取实际调用者的函数名及函数所在的位置
     * @param stack
     */
    parseErrorStack(stack) {
      let result2 = {
        name: "",
        position: ""
      };
      for (let stackString of stack) {
        stackString = stackString.trim();
        let stackFunctionNameMatch = stackString.match(/^at[\s]+(.+?)[\s]+/i);
        let stackFunctionNamePositionMatch = stackString.match(/^at[\s]+.+[\s]+\((.+?)\)/i);
        if (stackFunctionNameMatch == null) {
          continue;
        }
        if (stackFunctionNamePositionMatch == null) {
          continue;
        }
        let stackFunctionName = stackFunctionNameMatch[stackFunctionNameMatch.length - 1];
        let stackFunctionNamePosition = stackFunctionNamePositionMatch[stackFunctionNamePositionMatch.length - 1];
        if (stackFunctionName === "" || stackFunctionName.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g)) {
          continue;
        } else {
          result2.name = stackFunctionName;
          result2.position = stackFunctionNamePosition;
          break;
        }
      }
      if (result2.position === "") {
        let lastStackString = stack[stack.length - 1].trim();
        if (lastStackString.startsWith("at chrome-extension://")) {
          let lastStackMatch = lastStackString.match(/^at[\s]+(.+)/);
          if (lastStackMatch) {
            result2.position = lastStackMatch[lastStackMatch.length - 1];
          }
        }
      }
      if (result2.position === "") {
        result2.position = stack[stack.length - 1].trim().replace(/^at[\s]*/g, "");
      }
      return result2;
    }
    /**
     * 检测清理控制台
     */
    checkClearConsole() {
      __privateWrapper(this, _logCount)._++;
      if (__privateGet(this, _details).autoClearConsole && __privateGet(this, _logCount) > __privateGet(this, _details).logMaxCount) {
        __privateGet(this, _console).clear();
        __privateSet(this, _logCount, 0);
      }
    }
    /**
     * 输出内容
     * @param msg 需要输出的内容
     * @param color 颜色
     * @param otherStyle 其它CSS
     */
    printContent(msg, color, otherStyle) {
      this.checkClearConsole();
      otherStyle = otherStyle || "";
      let stackSplit = new Error().stack.split("\n");
      stackSplit.splice(0, 2);
      let { name: callerName, position: callerPosition } = this.parseErrorStack(stackSplit);
      let tagName = this.tag;
      let that = this;
      let tagNameHTML = `%c[${tagName}%c`;
      let callerNameHTML = `%c${callerName}%c]%c`;
      callerName.trim() !== "" && (callerNameHTML = "-" + callerNameHTML);
      function consoleMsg(message) {
        if (typeof message === "string") {
          __privateGet(that, _console).log(`${tagNameHTML}${callerNameHTML} %s`, ...__privateGet(that, _msgColorDetails), `color: ${color};${otherStyle}`, message);
        } else if (typeof message === "number") {
          __privateGet(that, _console).log(`${tagNameHTML}${callerNameHTML} %d`, ...__privateGet(that, _msgColorDetails), `color: ${color};${otherStyle}`, message);
        } else if (typeof message === "object") {
          __privateGet(that, _console).log(`${tagNameHTML}${callerNameHTML} %o`, ...__privateGet(that, _msgColorDetails), `color: ${color};${otherStyle}`, message);
        } else {
          __privateGet(that, _console).log(message);
        }
      }
      if (Array.isArray(msg)) {
        for (let index = 0; index < msg.length; index++) {
          consoleMsg(msg[index]);
        }
      } else {
        consoleMsg(msg);
      }
      if (__privateGet(this, _details).debug) {
        __privateGet(this, _console).log(callerPosition);
      }
    }
    /**
     * 控制台-普通输出
     * @param args 需要输出的内容
     * @example
     * log.info("输出信息","输出信息2","输出信息3","输出")
     */
    info(...args2) {
      if (__privateGet(this, _disable))
        return;
      this.printContent(args2, __privateGet(this, _details).infoColor);
    }
    /**
     * 控制台-警告输出
     * @param args 需要输出的内容
     * @example
     * log.warn("输出警告","输出警告2","输出警告3","输出警告4")
     */
    warn(...args2) {
      if (__privateGet(this, _disable))
        return;
      this.printContent(args2, __privateGet(this, _details).warnColor, "background: #FEF6D5;padding: 4px 6px 4px 0px;");
    }
    /**
     * 控制台-错误输出
     * @param args 需要输出的内容
     * @example
     * log.error("输出错误","输出错误2","输出错误3","输出错误4")
     */
    error(...args2) {
      if (__privateGet(this, _disable))
        return;
      this.printContent(args2, __privateGet(this, _details).errorColor);
    }
    /**
     * 控制台-成功输出
     * @param args 需要输出的内容
     * @example
     * log.success("输出成功")
     */
    success(...args2) {
      if (__privateGet(this, _disable))
        return;
      this.printContent(args2, __privateGet(this, _details).successColor);
    }
    /**
     * 控制台-输出表格
     * @param msg 需要输出的内容
     * @example
     * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
     */
    table(msg) {
      if (__privateGet(this, _disable))
        return;
      this.checkClearConsole();
      let stack = new Error().stack.split("\n");
      stack.splice(0, 1);
      let errorStackParse = this.parseErrorStack(stack);
      let stackFunctionName = errorStackParse.name;
      let stackFunctionNamePosition = errorStackParse.position;
      let callerName = stackFunctionName;
      __privateGet(this, _console).log(`%c[${this.tag}%c-%c${callerName}%c]%c`, ...__privateGet(this, _msgColorDetails), `color: ${__privateGet(this, _details).infoColor};`);
      __privateGet(this, _console).table(msg);
      if (__privateGet(this, _details).debug) {
        __privateGet(this, _console).log(stackFunctionNamePosition);
      }
    }
    /**
     * 配置Log对象的颜色
     * @param paramDetails 配置信息
     */
    config(paramDetails) {
      __privateSet(this, _details, Object.assign(__privateGet(this, _details), paramDetails));
    }
    /** 禁用输出 */
    disable() {
      __privateSet(this, _disable, true);
    }
    /** 恢复输出 */
    recovery() {
      __privateSet(this, _disable, false);
    }
  }
  _disable = new WeakMap();
  _console = new WeakMap();
  _logCount = new WeakMap();
  _details = new WeakMap();
  _msgColorDetails = new WeakMap();
  class Progress {
    /**
     *
     * @param paramConfig 配置信息
     */
    constructor(paramConfig) {
      __privateAdd(this, _config, {
        /**
         * canvas元素节点
         */
        canvasNode: null,
        /**
         * 绘制角度
         */
        deg: 95,
        /**
         * 进度
         */
        progress: 0,
        /**
         * 绘制的线宽度
         */
        lineWidth: 10,
        /**
         * 绘制的背景颜色
         */
        lineBgColor: "#1e637c",
        /**
         * 绘制的线的颜色
         */
        lineColor: "#25deff",
        /**
         * 绘制的字体颜色
         */
        textColor: "#000000",
        /**
         * 绘制的字体大小(px)
         */
        fontSize: 22,
        /**
         * 绘制的圆的半径
         */
        circleRadius: 50
      });
      __privateAdd(this, _ctx, null);
      __privateAdd(this, _width, null);
      __privateAdd(this, _height, null);
      __privateSet(this, _config, utils$1.assign(__privateGet(this, _config), paramConfig));
      if (!(__privateGet(this, _config).canvasNode instanceof HTMLCanvasElement)) {
        throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");
      }
      this.init();
    }
    /**
     * 初始化
     */
    init() {
      let ctx = __privateGet(this, _config).canvasNode.getContext("2d");
      if (ctx == null) {
        throw new Error("Utils.Progress 获取画笔失败");
      }
      __privateSet(this, _ctx, ctx);
      __privateSet(this, _width, __privateGet(this, _config).canvasNode.width);
      __privateSet(this, _height, __privateGet(this, _config).canvasNode.height);
      if (window.devicePixelRatio) {
        __privateGet(this, _config).canvasNode.style.width = __privateGet(this, _width) + "px";
        __privateGet(this, _config).canvasNode.style.height = __privateGet(this, _height) + "px";
        __privateGet(this, _config).canvasNode.height = __privateGet(this, _height) * window.devicePixelRatio;
        __privateGet(this, _config).canvasNode.width = __privateGet(this, _width) * window.devicePixelRatio;
        __privateGet(this, _ctx).scale(window.devicePixelRatio, window.devicePixelRatio);
      }
      __privateGet(this, _ctx).lineWidth = __privateGet(this, _config).lineWidth;
    }
    /**
     * 绘制
     */
    draw() {
      let degActive = __privateGet(this, _config).progress * 360 / 100;
      __privateGet(this, _ctx).clearRect(0, 0, __privateGet(this, _width), __privateGet(this, _height));
      __privateGet(this, _ctx).beginPath();
      __privateGet(this, _ctx).arc(__privateGet(this, _width) / 2, __privateGet(this, _height) / 2, __privateGet(this, _config).circleRadius, 1, 8);
      __privateGet(this, _ctx).strokeStyle = __privateGet(this, _config).lineBgColor;
      __privateGet(this, _ctx).stroke();
      __privateGet(this, _ctx).beginPath();
      __privateGet(this, _ctx).arc(__privateGet(this, _width) / 2, __privateGet(this, _height) / 2, __privateGet(this, _config).circleRadius, -Math.PI / 2, degActive * Math.PI / 180 - Math.PI / 2);
      __privateGet(this, _ctx).strokeStyle = __privateGet(this, _config).lineColor;
      __privateGet(this, _ctx).stroke();
      let txt = parseInt(__privateGet(this, _config).progress.toString()) + "%";
      __privateGet(this, _ctx).font = __privateGet(this, _config).fontSize + "px SimHei";
      let w = __privateGet(this, _ctx).measureText(txt).width;
      let h2 = __privateGet(this, _config).fontSize / 2;
      __privateGet(this, _ctx).fillStyle = __privateGet(this, _config).textColor;
      __privateGet(this, _ctx).fillText(txt, __privateGet(this, _width) / 2 - w / 2, __privateGet(this, _height) / 2 + h2 / 2);
    }
  }
  _config = new WeakMap();
  _ctx = new WeakMap();
  _width = new WeakMap();
  _height = new WeakMap();
  const TryCatch = function(...args) {
    let callbackFunction = null;
    let context = null;
    let handleError = (error2) => {
    };
    let defaultDetails = {
      log: true
    };
    const TryCatchCore = {
      /**
       *
       * @param paramDetails 配置
       * @returns
       */
      config(paramDetails) {
        defaultDetails = utils$1.assign(defaultDetails, paramDetails);
        return TryCatchCore;
      },
      /**
       * 处理错误
       * @param handler
       */
      error(handler) {
        handleError = handler;
        return TryCatchCore;
      },
      /**
       * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
       * @param callback 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
       * @param __context__ 待执行函数的作用域，用于apply指定
       * @returns 如果函数有返回值，则返回该返回值；否则返回 tryCatchObj 函数以支持链式调用。
       * @throws {Error} 如果传入参数不符合要求，则会抛出相应类型的错误。
       */
      run(callback2, __context__) {
        callbackFunction = callback2;
        context = __context__ || this;
        let result2 = executeTryCatch(callbackFunction, handleError, context);
        return result2 !== void 0 ? result2 : TryCatchCore;
      }
    };
    function executeTryCatch(callback, handleErrorFunc, funcThis) {
      let result = void 0;
      try {
        if (typeof callback === "string") {
          (function() {
            eval(callback);
          }).apply(funcThis, args);
        } else {
          result = callback.apply(funcThis, args);
        }
      } catch (error) {
        if (defaultDetails.log) {
          callback = callback;
          console.log(`%c ${(callback == null ? void 0 : callback.name) ? callback == null ? void 0 : callback.name : callback + "出现错误"} `, "color: #f20000");
          console.log(`%c 错误原因：${error}`, "color: #f20000");
          console.trace(callback);
        }
        if (handleErrorFunc) {
          if (typeof handleErrorFunc === "string") {
            result = (function() {
              return eval(handleErrorFunc);
            }).apply(funcThis, [...args, error]);
          } else {
            result = handleErrorFunc.apply(funcThis, [...args, error]);
          }
        }
      }
      return result;
    }
    return TryCatchCore;
  };
  class UtilsDictionary {
    constructor(key, value) {
      __publicField(this, "items", {});
      if (key != null) {
        this.set(key, value);
      }
    }
    /**
     * 检查是否有某一个键
     * @param key 键
     */
    has(key) {
      return Reflect.has(this.items, key);
    }
    /**
     * 检查已有的键中是否以xx开头
     * @param key 需要匹配的键
     */
    startsWith(key) {
      let allKeys = this.keys();
      for (const keyName of allKeys) {
        if (String(keyName).startsWith(String(key))) {
          return true;
        }
      }
      return false;
    }
    /**
     * 获取以xx开头的键的值
     * @param key 需要匹配的键
     */
    getStartsWith(key) {
      let allKeys = this.keys();
      let result2 = void 0;
      for (const keyName of allKeys) {
        if (String(keyName).startsWith(String(key))) {
          result2 = this.get(keyName);
          break;
        }
      }
      return result2;
    }
    /**
     * 为字典添加某一个值
     * @param key 键
     * @param val 值，默认为""
     */
    set(key, val) {
      if (key === void 0) {
        throw new Error("Utils.Dictionary().set 参数 key 不能为空");
      }
      Reflect.set(this.items, key, val);
    }
    /**
     * 删除某一个键
     * @param key 键
     */
    delete(key) {
      if (this.has(key)) {
        return Reflect.deleteProperty(this.items, key);
      }
      return false;
    }
    /**
     * 获取某个键的值
     * https://github.com/microsoft/TypeScript/issues/9619
     * 微软到现在都没有修复has和get的联动
     * @param key 键
     */
    get(key) {
      return Reflect.get(this.items, key);
    }
    /**
     * 返回字典中的所有值
     */
    values() {
      let resultList = [];
      for (let prop in this.getItems()) {
        if (this.has(prop)) {
          resultList.push(this.get(prop));
        }
      }
      return resultList;
    }
    /**
     * 清空字典
     */
    clear() {
      this.items = null;
      this.items = {};
    }
    /**
     * 获取字典的长度
     */
    size() {
      return Object.keys(this.getItems()).length;
    }
    /**
     * 获取字典所有的键
     */
    keys() {
      return Reflect.ownKeys(this.items);
    }
    /**
     * 返回字典本身
     */
    getItems() {
      return this.items;
    }
    /**
     * 合并另一个字典
     * @param data 需要合并的字典
     */
    concat(data) {
      this.items = utils$1.assign(this.items, data.getItems());
    }
    forEach(callbackfn) {
      for (const key in this.getItems()) {
        callbackfn(this.get(key), key, this.getItems());
      }
    }
    /**
     * 获取字典的长度，同this.size
     */
    get length() {
      return this.size();
    }
    /**
     * 迭代器
     */
    get entries() {
      let that = this;
      return function* () {
        let itemKeys = Object.keys(that.getItems());
        for (const keyName of itemKeys) {
          yield [keyName, that.get(keyName)];
        }
      };
    }
    /**
     * 是否可遍历
     */
    get [Symbol.iterator]() {
      let that = this;
      return function() {
        return that.entries();
      };
    }
  }
  class WindowApi {
    constructor(option) {
      /** 默认的配置 */
      __publicField(this, "defaultApi", {
        document,
        window,
        globalThis,
        self,
        top
      });
      /** 使用的配置 */
      __publicField(this, "api");
      if (option) {
        if (option.globalThis == null) {
          option.globalThis = option.window;
        }
        if (option.self == null) {
          option.self = option.window;
        }
      }
      if (!option) {
        option = Object.assign({}, this.defaultApi);
      }
      this.api = Object.assign({}, option);
    }
    get document() {
      return this.api.document;
    }
    get window() {
      return this.api.window;
    }
    get globalThis() {
      return this.api.globalThis;
    }
    get self() {
      return this.api.self;
    }
    get top() {
      return this.api.top;
    }
  }
  const VueUtils = {
    /** 标签 */
    ReactiveFlags: {
      IS_REACTIVE: Symbol("isReactive")
    },
    /**
     * 判断是否是对象
     * @param value
     */
    isObject(value) {
      return typeof value === "object" && value !== null;
    },
    /**
     * 判断是否是函数
     * @param val
     */
    isFunction(val) {
      return typeof val === "function";
    },
    /**
     * 处理对象再次代理，可以直接返回
     * @param value
     */
    isReactive(value) {
      return !!(value && value[VueUtils.ReactiveFlags.IS_REACTIVE]);
    },
    /**
     * 判断是否是数组
     * @param value
     */
    isArray(value) {
      return Array.isArray(value);
    }
  };
  class ReactiveEffect {
    constructor(fn, scheduler) {
      __publicField(this, "deps", []);
      __publicField(this, "active", true);
      __publicField(this, "fn");
      // @ts-ignore
      __publicField(this, "scheduler");
      this.fn = fn;
      this.scheduler = scheduler;
    }
    run(cb) {
      if (!this.active) {
        this.fn();
      }
      try {
        if (typeof cb === "function") {
          cb(this);
        }
        return this.fn();
      } finally {
        if (typeof cb === "function") {
          cb(void 0);
        }
      }
    }
  }
  class RefImpl {
    constructor(vueIns, rawValue) {
      __publicField(this, "_value");
      __publicField(this, "_isRef", true);
      __publicField(this, "_rawValue");
      __publicField(this, "_vue");
      this._vue = vueIns;
      this._rawValue = rawValue;
      this._value = this._vue.toReactive(rawValue);
    }
    get value() {
      return this._value;
    }
    set value(newValue) {
      if (newValue !== this._rawValue) {
        this._value = this._vue.toReactive(newValue);
        this._rawValue = newValue;
      }
    }
  }
  class ObjectRefImpl {
    constructor(object, key) {
      __publicField(this, "object");
      __publicField(this, "key");
      this.object = object;
      this.key = key;
    }
    get value() {
      return this.object[this.key];
    }
    set value(newValue) {
      this.object[this.key] = newValue;
    }
  }
  class Vue {
    constructor() {
      __publicField(this, "reactMap", /* @__PURE__ */ new WeakMap());
      __publicField(this, "targetMap", /* @__PURE__ */ new WeakMap());
      __publicField(this, "activeEffect");
    }
    /**
     * 生成一个被代理的对象
     * @param target 需要代理的对象
     */
    reactive(target) {
      const that = this;
      if (!(typeof target === "object" && target !== null)) {
        return;
      }
      if (VueUtils.isReactive(target)) {
        return target;
      }
      let exisProxy = this.reactMap.get(target);
      if (exisProxy) {
        return exisProxy;
      }
      const proxy = new Proxy(target, {
        get(target2, key, receiver) {
          if (key === VueUtils.ReactiveFlags.IS_REACTIVE) {
            return true;
          }
          that.track(target2, "get", key);
          return Reflect.get(target2, key, receiver);
        },
        set(target2, key, value, receiver) {
          let oldValue = target2[key];
          let result2 = Reflect.set(target2, key, value, receiver);
          if (oldValue !== value) {
            that.trigger(target2, "set", key, oldValue, value);
          }
          return result2;
        }
      });
      that.reactMap.set(target, proxy);
      return proxy;
    }
    /**
     * 观察被reactive的对象值改变
     * @param source 被观察的对象，这里采用函数返回对象
     * @param changeCallBack 值改变的回调
     */
    watch(source, changeCallBack) {
      let getter;
      if (VueUtils.isReactive(source)) {
        getter = () => this.traversal(source);
      } else if (VueUtils.isFunction(source)) {
        getter = source;
      } else {
        return;
      }
      let oldValue;
      const job = () => {
        const newValue = effect.run((activeEffect) => {
          this.activeEffect = activeEffect;
        });
        changeCallBack(newValue, oldValue);
        oldValue = newValue;
      };
      const effect = new ReactiveEffect(getter, job);
      oldValue = effect.run((activeEffect) => {
        this.activeEffect = activeEffect;
      });
    }
    toReactive(value) {
      return VueUtils.isObject(value) ? this.reactive(value) : value;
    }
    ref(value) {
      return new RefImpl(this, value);
    }
    toRef(object, key) {
      return new ObjectRefImpl(object, key);
    }
    toRefs(object) {
      const result2 = VueUtils.isArray(object) ? new Array(object.length) : {};
      for (let key in object) {
        result2[key] = this.toRef(object, key);
      }
      return result2;
    }
    trigger(target, type, key, oldValue, value) {
      const depsMap = this.targetMap.get(target);
      if (!depsMap)
        return;
      const effects = depsMap.get(key);
      this.triggerEffect(effects, "effects");
    }
    triggerEffect(effects, name) {
      effects && effects.forEach((effect) => {
        if (effect.scheduler) {
          effect.scheduler();
        } else {
          effect.run();
        }
      });
    }
    track(target, type, key) {
      if (!this.activeEffect)
        return;
      let depsMap = this.targetMap.get(target);
      if (!depsMap) {
        this.targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = /* @__PURE__ */ new Set());
      }
      this.trackEffect(dep);
    }
    trackEffect(dep) {
      if (this.activeEffect) {
        let shouldTrack = !dep.has(this.activeEffect);
        if (shouldTrack) {
          dep.add(this.activeEffect);
          this.activeEffect.deps.push(dep);
        }
      }
    }
    traversal(value, set = /* @__PURE__ */ new Set()) {
      if (!VueUtils.isObject(value))
        return value;
      if (set.has(value)) {
        return value;
      }
      set.add(value);
      for (let key in value) {
        this.traversal(value[key], set);
      }
      return value;
    }
  }
  class Utils {
    constructor(option) {
      __publicField(this, "windowApi");
      /** 版本号 */
      __publicField(this, "version", "2024.12.3");
      /**
       * ajax劫持库，支持xhr和fetch劫持。
       * + 来源：https://bbs.tampermonkey.net.cn/thread-3284-1-1.html
       * + 作者：cxxjackie
       * + 版本：1.4.1
       * + 文档：https://scriptcat.org/zh-CN/script-show-page/637/
       */
      __publicField(this, "ajaxHooker", AjaxHooker);
      /**
       * 颜色转换
       * @returns
       */
      __publicField(this, "ColorConversion", ColorConversion);
      /**
       * 字典
       * @example
       * let dictionary = new Utils.Dictionary();
       * let dictionary2 = new Utils.Dictionary();
       * dictionary.set("test","111");
       * dictionary.get("test");
       * > '111'
       * dictionary.has("test");
       * > true
       * dictionary.concat(dictionary2);
       **/
      __publicField(this, "Dictionary", UtilsDictionary);
      /**
       * gbk格式的url编码,来自https://greasyfork.org/zh-CN/scripts/427726-gbk-url-js
       * @example
       * let gbkEncoder = new Utils.GBKEncoder();
       * gbkEncoder.encode("测试");
       * > '%B2%E2%CA%D4'
       * gbkEncoder.decode("%B2%E2%CA%D4");
       * > 测试
       */
      __publicField(this, "GBKEncoder", GBKEncoder);
      /**
       * 对于GM_cookie的兼容写法，当无法使用GM_cookie时可以使用这个,但是并不完全兼容，有些写不出来且限制了httponly是无法访问的
       * @example
        let GM_cookie = new Utils.GM_Cookie();
        GM_cookie.list({name:"xxx_cookie_xxx"},function(cookies,error){
            if (!error) {
                console.log(cookies);
                console.log(cookies.value);
            } else {
                console.error(error);
            }
        });
        GM_cookie.set({name:"xxx_cookie_test_xxx",value:"这是Cookie测试值"},function(error){
            if (error) {
                console.error(error);
            } else {
                console.log('Cookie set successfully.');
            }
        })
        GM_cookie.delete({name:"xxx_cookie_test_xxx"},function(error){
            if (error) {
                console.error(error);
            } else {
                console.log('Cookie set successfully.');
            }
        })
       **/
      __publicField(this, "GM_Cookie", UtilsGMCookie);
      /**
         * 注册油猴菜单，要求本地存储的键名不能存在其它键名`GM_Menu_Local_Map`会冲突/覆盖
         * @example
          let GM_Menu = new Utils.GM_Menu({
            data: [
              {
                menu_key: "menu_key",
                text: "测试按钮",
                enable: true,
                accessKey: "a",
                autoClose: false,
                showText(text, enable) {
                  return "[" + (enable ? "√" : "×") + "]" + text;
                },
                callback(data) {
                  console.log("点击菜单，值修改为", data.enable);
                },
              },
            ],
            autoReload: false,
            GM_getValue,
            GM_setValue,
            GM_registerMenuCommand,
            GM_unregisterMenuCommand,
          });
      
      
          // 获取某个菜单项的值
          GM_Menu.get("menu_key");
          > true
      
          // 获取某个菜单项的开启/关闭后显示的文本
          GM_Menu.getShowTextValue("menu_key");
          > √测试按钮
      
          // 添加键为menu_key2的菜单项
          GM_Menu.add({
            key:"menu_key2",
            text: "测试按钮2",
            enable: false,
            showText(text,enable){
              return "[" + (enable ? "√" : "×") + "]" + text;
            },
            callback(data){
              console.log("点击菜单，值修改为",data.enable);
            }
          });
          // 使用数组的方式添加多个菜单，如menu_key3、menu_key4
          GM_Menu.add([
            {
              key:"menu_key3",
              text: "测试按钮3",
              enable: false,
              showText(text,enable){
                return "[" + (enable ? "√" : "×") + "]" + text;
              },
              callback(data){
                console.log("点击菜单，值修改为",data.enable);
              }
            },
            {
              key:"menu_key4",
              text: "测试按钮4",
              enable: false,
              showText(text,enable){
                return "[" + (enable ? "√" : "×") + "]" + text;
              },
              callback(data){
                console.log("点击菜单，值修改为",data.enable);
              }
            }
          ]);
      
          // 更新键为menu_key的显示文字和点击回调
          GM_Menu.update({
            menu_key:{
              text: "更新后的测试按钮",
              enable: true,
              showText(text,enable){
                return "[" + (enable ? "√" : "×") + "]" + text;
              },
              callback(data){
                console.log("点击菜单更新后的测试按钮，新值修改为",data.enable);
              }
            }
          });
      
          // 删除键为menu_key的菜单
          GM_Menu.delete("menu_key");
         **/
      __publicField(this, "GM_Menu", GMMenu);
      /**
       * 基于Function prototype，能够勾住和释放任何函数
       *
       * .hook
       * + realFunc {string} 用于保存原始函数的函数名称,用于unHook
       * + hookFunc {string} 替换的hook函数
       * + context {object} 目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
       * + methodName {string} 匿名函数需显式传入目标函数名eg:this.Begin = function(){....};}
       *
       * .unhook
       * + realFunc {string} 用于保存原始函数的函数名称,用于unHook
       * + funcName {string} 被Hook的函数名称
       * + context {object} 目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
       * @example
        let hook = new Utils.Hooks();
        hook.initEnv();
        function myFunction(){
            console.log("我自己需要执行的函数");
        }
        function testFunction(){
            console.log("正常执行的函数");
        }
        testFunction.hook(testFunction,myFunction,window);
       **/
      __publicField(this, "Hooks", Hooks);
      /**
         * 为减少代码量和回调，把GM_xmlhttpRequest封装
         * 文档地址: https://www.tampermonkey.net/documentation.php?ext=iikm
         * 其中onloadstart、onprogress、onreadystatechange是回调形式，onabort、ontimeout、onerror可以设置全局回调函数
         * @param _GM_xmlHttpRequest_ 油猴中的GM_xmlhttpRequest
         * @example
          let httpx = new Utils.Httpx(GM_xmlhttpRequest);
          let postResp = await httpx.post({
            url:url,
            data:JSON.stringify({
              test:1
            }),
            timeout: 5000
          });
          console.log(postResp);
          > {
            status: true,
            data: {responseText: "...", response: xxx,...},
            msg: "请求完毕",
            type: "onload",
          }
      
          if(postResp === "onload" && postResp.status){
          // onload
          }else if(postResp === "ontimeout"){
          // ontimeout
          }
         * @example
          // 也可以先配置全局参数
          let httpx = new Utils.Httpx(GM_xmlhttpRequest);
          httpx.config({
            timeout: 5000,
            async: false,
            responseType: "html",
            redirect: "follow",
          })
          // 优先级为 默认details < 全局details < 单独的details
         */
      __publicField(this, "Httpx", Httpx);
      /**
         * 浏览器端的indexedDB操作封装
         * @example
          let db = new Utils.indexedDB('web_DB', 'nav_text')
          let data = {name:'管理员', roleId: 1, type: 1};
          db.save('list',data).then((resolve)=>{
              console.log(resolve,'存储成功')
          })
      
          db.get('list').then((resolve)=>{
              console.log(resolve,'查询成功')
          })
      
          db.getPaging('list',20,10).then((resolve)=>{
              console.log(resolve,'查询分页偏移第20，一共10行成功');
          })
      
          db.delete('list').then(resolve=>{
              console.log(resolve,'删除成功---->>>>>>name')
          })
      
          db.deleteAll().then(resolve=>{
              console.log(resolve,'清除数据库---->>>>>>name')
          })
         **/
      __publicField(this, "indexedDB", indexedDB);
      /**
       * 自动锁对象，用于循环判断运行的函数，在循环外new后使用，注意，如果函数内部存在异步操作，需要使用await
       * @example
        let lock = new Utils.LockFunction(()=>{console.log(1)}))
        lock.run();
        > 1
       * @example
        let lock = new Utils.LockFunction(()=>{console.log(1)}),true) -- 异步操作
        await lock.run();
        > 1
       **/
      __publicField(this, "LockFunction", LockFunction);
      /**
         * 日志对象
         * @param _GM_info_ 油猴管理器的API GM_info，或者是一个对象，如{"script":{name:"Utils.Log"}}
         * @example
          let log = new Utils.Log(GM_info);
          log.info("普通输出");
          > 普通输出
      
          log.success("成功输出");
          > 成功输出
      
          log.error("错误输出");
          > 错误输出
          
          log.warn("警告输出");
          > 警告输出
      
          log.tag = "自定义tag信息";
          log.info("自定义info的颜色","#e0e0e0");
          > 自定义info的颜色
      
          log.config({
            successColor: "#31dc02",
            errorColor: "#e02d2d",
            infoColor: "black",
          })
          log.success("颜色为#31dc02");
          > 颜色为#31dc02
         */
      __publicField(this, "Log", Log);
      /**
       * 在canvas元素节点上绘制进度圆圈
       * @example
        let progress = new Utils.Process({canvasNode:document.querySelector("canvas")});
        progress.draw();
       * **/
      __publicField(this, "Progress", Progress);
      /**
       * 提供一个封装了 try-catch 的函数，可以执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
       * @example
       * Utils.tryCatch().error().run(()=>{console.log(1)});
       * > 1
       * @example
       * Utils.tryCatch().config({log:true}).error((error)=>{console.log(error)}).run(()=>{throw new Error('测试错误')});
       * > ()=>{throw new Error('测试错误')}出现错误
       */
      __publicField(this, "tryCatch", TryCatch);
      /**
       * 生成uuid
       * @example
       * Utils.generateUUID()
       */
      __publicField(this, "generateUUID", GenerateUUID);
      /**
       * 自定义的动态响应对象
       * @example
       * let vue = new Utils.Vue();
       * let reactive = new vue.reactive({});
       * vue.watch(()=>reactive["name"], (newValue, oldValue)=>{
       *     console.log("newValue ==> " + newValue);
       *     console.log("oldValue ==> " + oldValue);
       * })
       * vue["name"] = "测试";
       * > "测试"
       */
      __publicField(this, "Vue", Vue);
      this.windowApi = new WindowApi(option);
    }
    addStyle(cssText) {
      if (typeof cssText !== "string") {
        throw new Error("Utils.addStyle 参数cssText 必须为String类型");
      }
      let cssNode = this.windowApi.document.createElement("style");
      cssNode.setAttribute("type", "text/css");
      cssNode.innerHTML = cssText;
      if (this.windowApi.document.head) {
        this.windowApi.document.head.appendChild(cssNode);
      } else if (this.windowApi.document.body) {
        this.windowApi.document.body.appendChild(cssNode);
      } else if (this.windowApi.document.documentElement.childNodes.length === 0) {
        this.windowApi.document.documentElement.appendChild(cssNode);
      } else {
        this.windowApi.document.documentElement.insertBefore(cssNode, this.windowApi.document.documentElement.childNodes[0]);
      }
      return cssNode;
    }
    assign(target = {}, source = {}, isAdd = false) {
      let UtilsContext = this;
      if (Array.isArray(source)) {
        let canTraverse = source.filter((item) => {
          return typeof item === "object";
        });
        if (!canTraverse.length) {
          return source;
        }
      }
      if (source == null) {
        return target;
      }
      if (target == null) {
        target = {};
      }
      if (isAdd) {
        for (const sourceKeyName in source) {
          const targetKeyName = sourceKeyName;
          let targetValue = target[targetKeyName];
          let sourceValue = source[sourceKeyName];
          if (typeof sourceValue === "object" && sourceValue != null && sourceKeyName in target && !UtilsContext.isDOM(sourceValue)) {
            target[sourceKeyName] = UtilsContext.assign(targetValue, sourceValue, isAdd);
            continue;
          }
          target[sourceKeyName] = sourceValue;
        }
      } else {
        for (const targetKeyName in target) {
          if (targetKeyName in source) {
            let targetValue = target[targetKeyName];
            let sourceValue = source[targetKeyName];
            if (typeof sourceValue === "object" && sourceValue != null && !UtilsContext.isDOM(sourceValue) && Object.keys(sourceValue).length) {
              target[targetKeyName] = UtilsContext.assign(targetValue, sourceValue, isAdd);
              continue;
            }
            target[targetKeyName] = sourceValue;
          }
        }
      }
      return target;
    }
    async asyncReplaceAll(string, pattern, asyncFn) {
      let UtilsContext = this;
      if (typeof string !== "string") {
        throw new TypeError("string必须是字符串");
      }
      if (typeof asyncFn !== "function") {
        throw new TypeError("asyncFn必须是函数");
      }
      let reg;
      if (typeof pattern === "string") {
        reg = new RegExp(UtilsContext.parseStringToRegExpString(pattern), "g");
      } else if (pattern instanceof RegExp) {
        if (!pattern.global) {
          throw new TypeError("pattern必须是全局匹配");
        }
        reg = new RegExp(pattern);
      } else {
        throw new TypeError("pattern必须是正则对象");
      }
      let result2 = [];
      let match;
      let lastIndex = 0;
      while ((match = reg.exec(string)) !== null) {
        const item = asyncFn(match[0]);
        const prefix = string.slice(lastIndex, match.index);
        lastIndex = match.index + match[0].length;
        result2.push(item);
        result2.push(prefix);
      }
      result2.push(string.slice(lastIndex));
      result2 = await Promise.all(result2);
      return result2.join("");
    }
    canvasClickByPosition(canvasElement, clientX = 0, clientY = 0, view = globalThis) {
      if (!(canvasElement instanceof HTMLCanvasElement)) {
        throw new Error("Utils.canvasClickByPosition 参数canvasElement必须是canvas元素");
      }
      clientX = parseInt(clientX.toString());
      clientY = parseInt(clientY.toString());
      const eventInit = {
        cancelBubble: true,
        cancelable: true,
        clientX,
        clientY,
        // @ts-ignore
        view,
        detail: 1
      };
      canvasElement.dispatchEvent(new MouseEvent("mousedown", eventInit));
      canvasElement.dispatchEvent(new MouseEvent("mouseup", eventInit));
    }
    checkUserClickInNode(element) {
      var _a2;
      let UtilsContext = this;
      if (!UtilsContext.isDOM(element)) {
        throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");
      }
      let clickEvent = UtilsContext.windowApi.window.event;
      let touchEvent = UtilsContext.windowApi.window.event;
      let $click = (_a2 = clickEvent == null ? void 0 : clickEvent.composedPath()) == null ? void 0 : _a2[0];
      let clickPosX = (clickEvent == null ? void 0 : clickEvent.clientX) != null ? clickEvent.clientX : touchEvent.touches[0].clientX;
      let clickPosY = (clickEvent == null ? void 0 : clickEvent.clientY) != null ? clickEvent.clientY : touchEvent.touches[0].clientY;
      let {
        /* 要检测的元素的相对屏幕的横坐标最左边 */
        left: elementPosXLeft,
        /* 要检测的元素的相对屏幕的横坐标最右边 */
        right: elementPosXRight,
        /* 要检测的元素的相对屏幕的纵坐标最上边 */
        top: elementPosYTop,
        /* 要检测的元素的相对屏幕的纵坐标最下边 */
        bottom: elementPosYBottom
      } = element.getBoundingClientRect();
      if (clickPosX >= elementPosXLeft && clickPosX <= elementPosXRight && clickPosY >= elementPosYTop && clickPosY <= elementPosYBottom) {
        return true;
      } else if ($click && element.contains($click) || $click == element) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * 复制formData数据
     * @param formData 需要clone的数据
     */
    cloneFormData(formData, filterFn) {
      let clonedFormData = new FormData();
      for (let [key, value] of formData.entries()) {
        let isFilter = typeof filterFn === "function" ? filterFn(key, value) : false;
        if (typeof isFilter === "boolean" && isFilter) {
          continue;
        }
        clonedFormData.append(key, value);
      }
      return clonedFormData;
    }
    createOverload() {
      let fnMap = /* @__PURE__ */ new Map();
      function overload(...args2) {
        let key = args2.map((it) => typeof it).join(",");
        let fn = fnMap.get(key);
        if (!fn) {
          throw new TypeError("没有找到对应的实现");
        }
        return fn.apply(this, args2);
      }
      overload.addImpl = function(...args2) {
        let fn = args2.pop();
        if (typeof fn !== "function") {
          throw new TypeError("最后一个参数必须是函数");
        }
        let key = args2.join(",");
        fnMap.set(key, fn);
      };
      return overload;
    }
    deepClone(obj) {
      let UtilsContext = this;
      if (obj === void 0)
        return void 0;
      if (obj === null)
        return null;
      let clone = obj instanceof Array ? [] : {};
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = typeof value === "object" ? UtilsContext.deepClone(value) : value;
      }
      return clone;
    }
    debounce(fn, delay = 0) {
      let timer = null;
      const context2 = this;
      return function(...args2) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          fn.apply(context2, args2);
        }, delay);
      };
    }
    deleteParentNode(element, targetSelector) {
      let UtilsContext = this;
      if (element == null) {
        return;
      }
      if (!UtilsContext.isDOM(element)) {
        throw new Error("Utils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");
      }
      if (typeof targetSelector !== "string") {
        throw new Error("Utils.deleteParentNode 参数 targetSelector 必须为 string 类型");
      }
      let result2 = false;
      let needRemoveDOM = element.closest(targetSelector);
      if (needRemoveDOM) {
        needRemoveDOM.remove();
        result2 = true;
      }
      return result2;
    }
    dispatchEvent(element, eventName, details) {
      let eventNameList = [];
      if (typeof eventName === "string") {
        eventNameList = [eventName];
      }
      if (Array.isArray(eventName)) {
        eventNameList = [...eventName];
      }
      eventNameList.forEach((_eventName_) => {
        let event = new Event(_eventName_);
        if (details) {
          Object.assign(event, details);
        }
        element.dispatchEvent(event);
      });
    }
    downloadBase64(base64Data, fileName, isIFrame = false) {
      if (typeof base64Data !== "string") {
        throw new Error("Utils.downloadBase64 参数 base64Data 必须为 string 类型");
      }
      if (typeof fileName !== "string") {
        throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");
      }
      if (isIFrame) {
        const iframeElement = this.windowApi.document.createElement("iframe");
        iframeElement.style.display = "none";
        iframeElement.src = base64Data;
        this.windowApi.document.body.appendChild(iframeElement);
        setTimeout(() => {
          iframeElement.contentWindow.document.execCommand("SaveAs", true, fileName);
          this.windowApi.document.body.removeChild(iframeElement);
        }, 100);
      } else {
        const linkElement = this.windowApi.document.createElement("a");
        linkElement.setAttribute("target", "_blank");
        linkElement.download = fileName;
        linkElement.href = base64Data;
        linkElement.click();
      }
    }
    findWebPageVisibleText(str = "", caseSensitive = false) {
      let TRange = null;
      let strFound;
      if (this.windowApi.globalThis.find) {
        let windowFind = this.windowApi.self.find;
        strFound = windowFind(str, caseSensitive, true, true, false);
        if (strFound && this.windowApi.self.getSelection && !this.windowApi.self.getSelection().anchorNode) {
          strFound = windowFind(str, caseSensitive, true, true, false);
        }
        if (!strFound) {
          strFound = windowFind(str, 0, 1);
          while (windowFind(str, 0, 1))
            continue;
        }
      } else if (navigator.appName.indexOf("Microsoft") != -1) {
        if (TRange != null) {
          TRange = TRange;
          TRange.collapse(false);
          strFound = TRange.findText(str);
          if (strFound)
            TRange.select();
        }
        if (TRange == null || strFound == 0) {
          TRange = this.windowApi.self.document.body.createTextRange();
          strFound = TRange.findText(str);
          if (strFound)
            TRange.select();
        }
      } else if (navigator.appName == "Opera") {
        alert("Opera browsers not supported, sorry...");
        return;
      }
      return strFound ? true : false;
    }
    *findElementsWithText(element, text, filter) {
      let that = this;
      if (element.outerHTML.includes(text)) {
        if (element.children.length === 0) {
          let filterResult = typeof filter === "function" ? filter(element) : false;
          if (!filterResult) {
            yield element;
          }
        } else {
          let textElement = Array.from(element.childNodes).filter((ele) => ele.nodeType === Node.TEXT_NODE);
          for (let ele of textElement) {
            if (ele.textContent.includes(text)) {
              let filterResult = typeof filter === "function" ? filter(element) : false;
              if (!filterResult) {
                yield ele;
              }
            }
          }
        }
      }
      for (let index = 0; index < element.children.length; index++) {
        let childElement = element.children[index];
        yield* that.findElementsWithText(childElement, text, filter);
      }
    }
    /**
     * 判断该元素是否可见，如果不可见，向上找它的父元素直至找到可见的元素
     * @param element
     * @example
     * let visibleElement = Utils.findVisibleElement(document.querySelector("a.xx"));
     * > <HTMLElement>
     */
    findVisibleElement(element) {
      let currentElement = element;
      while (currentElement) {
        let elementRect = currentElement.getBoundingClientRect();
        if (Boolean(elementRect.length)) {
          return currentElement;
        }
        currentElement = currentElement.parentElement;
      }
      return null;
    }
    formatByteToSize(byteSize, addType = true) {
      byteSize = parseInt(byteSize.toString());
      if (isNaN(byteSize)) {
        throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");
      }
      let result2 = 0;
      let resultType = "KB";
      let sizeData = {};
      sizeData.B = 1;
      sizeData.KB = 1024;
      sizeData.MB = sizeData.KB * sizeData.KB;
      sizeData.GB = sizeData.MB * sizeData.KB;
      sizeData.TB = sizeData.GB * sizeData.KB;
      sizeData.PB = sizeData.TB * sizeData.KB;
      sizeData.EB = sizeData.PB * sizeData.KB;
      sizeData.ZB = sizeData.EB * sizeData.KB;
      sizeData.YB = sizeData.ZB * sizeData.KB;
      sizeData.BB = sizeData.YB * sizeData.KB;
      sizeData.NB = sizeData.BB * sizeData.KB;
      sizeData.DB = sizeData.NB * sizeData.KB;
      for (let key in sizeData) {
        result2 = byteSize / sizeData[key];
        resultType = key;
        if (sizeData.KB >= result2) {
          break;
        }
      }
      result2 = result2.toFixed(2);
      result2 = addType ? result2 + resultType.toString() : parseFloat(result2.toString());
      return result2;
    }
    getNodeListValue(...args2) {
      let resultArray = [];
      for (let arg of args2) {
        let value = arg;
        if (typeof arg === "function") {
          value = arg();
        }
        if (value.length !== 0) {
          resultArray = [...value];
          break;
        }
      }
      return resultArray;
    }
    getNonNullValue(...args2) {
      let resultValue = args2[args2.length - 1];
      let UtilsContext = this;
      for (const argValue of args2) {
        if (UtilsContext.isNotNull(argValue)) {
          resultValue = argValue;
          break;
        }
      }
      return resultValue;
    }
    formatTime(text = /* @__PURE__ */ new Date(), formatType = "yyyy-MM-dd HH:mm:ss") {
      let time = text == null ? /* @__PURE__ */ new Date() : new Date(text);
      function checkTime(timeNum) {
        if (timeNum < 10)
          return "0" + timeNum;
        return timeNum;
      }
      function timeSystemChange(hourNum) {
        return hourNum > 12 ? hourNum - 12 : hourNum;
      }
      let timeRegexp = {
        yyyy: time.getFullYear(),
        /* 年 */
        MM: checkTime(time.getMonth() + 1),
        /* 月 */
        dd: checkTime(time.getDate()),
        /* 日 */
        HH: checkTime(time.getHours()),
        /* 时 (24小时制) */
        hh: checkTime(timeSystemChange(time.getHours())),
        /* 时 (12小时制) */
        mm: checkTime(time.getMinutes()),
        /* 分 */
        ss: checkTime(time.getSeconds())
        /* 秒 */
      };
      Object.keys(timeRegexp).forEach(function(key) {
        let replaecRegexp = new RegExp(key, "g");
        formatType = formatType.replace(replaecRegexp, timeRegexp[key]);
      });
      return formatType;
    }
    formatToTimeStamp(text) {
      if (typeof text !== "string") {
        throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");
      }
      if (text.length === 8) {
        let today = /* @__PURE__ */ new Date();
        text = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + " " + text;
      }
      text = text.substring(0, 19);
      text = text.replace(/-/g, "/");
      let timestamp = new Date(text).getTime();
      return timestamp;
    }
    /**
     * 获取 transitionend 的在各个浏览器的兼容名
     */
    getTransitionEndNameList() {
      return [
        "webkitTransitionEnd",
        "mozTransitionEnd",
        "MSTransitionEnd",
        "otransitionend",
        "transitionend"
      ];
    }
    /**
     * 获取 animationend 的在各个浏览器的兼容名
     */
    getAnimationEndNameList() {
      return [
        "webkitAnimationEnd",
        "mozAnimationEnd",
        "MSAnimationEnd",
        "oanimationend",
        "animationend"
      ];
    }
    getArrayLastValue(targetObj) {
      return targetObj[targetObj.length - 1];
    }
    getArrayRealValue(...args2) {
      let result2 = null;
      for (let arg of args2) {
        if (typeof arg === "function") {
          arg = arg();
        }
        if (arg != null) {
          result2 = arg;
          break;
        }
      }
      return result2;
    }
    getDaysDifference(timestamp1 = Date.now(), timestamp2 = Date.now(), type = "天") {
      type = type.trim();
      if (timestamp1.toString().length === 10) {
        timestamp1 = timestamp1 * 1e3;
      }
      if (timestamp2.toString().length === 10) {
        timestamp2 = timestamp2 * 1e3;
      }
      let smallTimeStamp = timestamp1 > timestamp2 ? timestamp2 : timestamp1;
      let bigTimeStamp = timestamp1 > timestamp2 ? timestamp1 : timestamp2;
      let oneSecond = 1e3;
      let oneMinute = 60 * oneSecond;
      let oneHour = 60 * oneMinute;
      let oneDay = 24 * oneHour;
      let oneMonth = 30 * oneDay;
      let oneYear = 12 * oneMonth;
      let bigDate = new Date(bigTimeStamp);
      let smallDate = new Date(smallTimeStamp);
      let remainderValue = 1;
      if (type === "年") {
        remainderValue = oneYear;
      } else if (type === "月") {
        remainderValue = oneMonth;
      } else if (type === "天") {
        remainderValue = oneDay;
      } else if (type === "时") {
        remainderValue = oneHour;
      } else if (type === "分") {
        remainderValue = oneMinute;
      } else if (type === "秒") {
        remainderValue = oneSecond;
      }
      let diffValue = Math.round(Math.abs((bigDate - smallDate) / remainderValue));
      if (type === "auto") {
        let timeDifference = bigTimeStamp - smallTimeStamp;
        diffValue = Math.floor(timeDifference / (24 * 3600 * 1e3));
        if (diffValue > 0) {
          diffValue = diffValue + "天";
        } else {
          let leave1 = timeDifference % (24 * 3600 * 1e3);
          let hours = Math.floor(leave1 / (3600 * 1e3));
          if (hours > 0) {
            diffValue = hours + "小时";
          } else {
            let leave2 = leave1 % (3600 * 1e3);
            let minutes = Math.floor(leave2 / (60 * 1e3));
            if (minutes > 0) {
              diffValue = minutes + "分钟";
            } else {
              let leave3 = leave2 % (60 * 1e3);
              let seconds = Math.round(leave3 / 1e3);
              diffValue = seconds + "秒";
            }
          }
        }
      }
      return diffValue;
    }
    getElementSelector(element) {
      let UtilsContext = this;
      if (!element)
        return;
      if (!element.parentElement)
        return;
      if (element.id)
        return "#" + element.id;
      let selector = UtilsContext.getElementSelector(element.parentElement);
      if (!selector) {
        return element.tagName.toLowerCase();
      }
      if (element.parentElement.querySelectorAll(element.tagName).length > 1) {
        let index = Array.prototype.indexOf.call(element.parentElement.children, element) + 1;
        selector += " > " + element.tagName.toLowerCase() + ":nth-child(" + index + ")";
      } else {
        selector += " > " + element.tagName.toLowerCase();
      }
      return selector;
    }
    /**
     * 获取最大值
     * @example
     * Utils.getMaxValue([{1:123},{2:345},{3:456}],(index,value)=>{return parseInt(index)})
     * > 2
     */
    getMaxValue(...args2) {
      let result2 = [...args2];
      let newResult = [];
      if (result2.length === 0) {
        return;
      }
      if (result2.length > 1) {
        if (result2.length === 2 && typeof result2[0] === "object" && typeof result2[1] === "function") {
          let data = result2[0];
          let handleDataFunc = result2[1];
          Object.keys(data).forEach((keyName) => {
            newResult = [...newResult, handleDataFunc(keyName, data[keyName])];
          });
        } else {
          result2.forEach((item) => {
            if (!isNaN(parseFloat(item))) {
              newResult = [...newResult, parseFloat(item)];
            }
          });
        }
        return Math.max(...newResult);
      } else {
        result2[0].forEach((item) => {
          if (!isNaN(parseFloat(item))) {
            newResult = [...newResult, parseFloat(item)];
          }
        });
        return Math.max(...newResult);
      }
    }
    getMaxZIndexNodeInfo(deviation = 1, target = this.windowApi.document, ignoreCallBack) {
      deviation = Number.isNaN(deviation) ? 1 : deviation;
      const UtilsContext = this;
      const maxZIndexCompare = 2 * Math.pow(10, 9);
      let zIndex = 0;
      let maxZIndexNode = null;
      function isVisibleNode($css) {
        return $css.position !== "static" && $css.display !== "none";
      }
      function queryMaxZIndex($ele) {
        if (typeof ignoreCallBack === "function") {
          let ignoreResult = ignoreCallBack($ele);
          if (typeof ignoreResult === "boolean" && !ignoreResult) {
            return;
          }
        }
        const nodeStyle = UtilsContext.windowApi.window.getComputedStyle($ele);
        if (isVisibleNode(nodeStyle)) {
          let nodeZIndex = parseInt(nodeStyle.zIndex);
          if (!isNaN(nodeZIndex)) {
            if (nodeZIndex > zIndex) {
              zIndex = nodeZIndex;
              maxZIndexNode = $ele;
            }
          }
          if ($ele.shadowRoot != null && $ele instanceof ShadowRoot) {
            $ele.shadowRoot.querySelectorAll("*").forEach(($shadowEle) => {
              queryMaxZIndex($shadowEle);
            });
          }
        }
      }
      target.querySelectorAll("*").forEach(($ele, index) => {
        queryMaxZIndex($ele);
      });
      zIndex += deviation;
      if (zIndex >= maxZIndexCompare) {
        zIndex = maxZIndexCompare;
      }
      return {
        node: maxZIndexNode,
        zIndex
      };
    }
    getMaxZIndex(deviation = 1, target = this.windowApi.document, ignoreCallBack) {
      return this.getMaxZIndexNodeInfo(deviation, target, ignoreCallBack).zIndex;
    }
    getMinValue(...args2) {
      let result2 = [...args2];
      let newResult = [];
      if (result2.length === 0) {
        return;
      }
      if (result2.length > 1) {
        if (result2.length === 2 && typeof result2[0] === "object" && typeof result2[1] === "function") {
          let data = result2[0];
          let handleDataFunc = result2[1];
          Object.keys(data).forEach((keyName) => {
            newResult = [...newResult, handleDataFunc(keyName, data[keyName])];
          });
        } else {
          result2.forEach((item) => {
            if (!isNaN(parseFloat(item))) {
              newResult = [...newResult, parseFloat(item)];
            }
          });
        }
        return Math.min(...newResult);
      } else {
        result2[0].forEach((item) => {
          if (!isNaN(parseFloat(item))) {
            newResult = [...newResult, parseFloat(item)];
          }
        });
        return Math.min(...newResult);
      }
    }
    /**
     * 获取随机的安卓手机User-Agent
     * @example
     * Utils.getRandomAndroidUA();
     * > 'Mozilla/5.0 (Linux; Android 10; MI 13 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.3490.40 Mobile Safari/537.36'
     **/
    getRandomAndroidUA() {
      let UtilsContext = this;
      let mobileNameList = [
        "LDN-LX3",
        "RNE-L03",
        "ASUS_X00ID Build/NMF26F",
        "WAS-LX3",
        "PRA-LX3",
        "MYA-L03",
        "Moto G Play",
        "Moto C Build/NRD90M.063",
        "Redmi Note 4 Build/NRD90M",
        "HUAWEI VNS-L21 Build/HUAWEIVNS-L21",
        "VTR-L09",
        "TRT-LX3",
        "M2003J15SC Build/RP1A.200720.011; wv",
        "MI 13 Build/OPR1.170623.027; wv"
      ];
      let androidVersion = UtilsContext.getRandomValue(12, 14);
      let randomMobile = UtilsContext.getRandomValue(mobileNameList);
      let chromeVersion1 = UtilsContext.getRandomValue(120, 132);
      let chromeVersion2 = UtilsContext.getRandomValue(0, 0);
      let chromeVersion3 = UtilsContext.getRandomValue(2272, 6099);
      let chromeVersion4 = UtilsContext.getRandomValue(1, 218);
      return `Mozilla/5.0 (Linux; Android ${androidVersion}; ${randomMobile}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion1}.${chromeVersion2}.${chromeVersion3}.${chromeVersion4} Mobile Safari/537.36`;
    }
    /**
     * 获取随机的电脑端User-Agent
     * + Mozilla/5.0：以前用于Netscape浏览器，目前大多数浏览器UA都会带有
     * + Windows NT 13：代表Window11系统
     * + Windows NT 10.0：代表Window10系统
     * + Windows NT 6.1：代表windows7系统
     * + WOW64：Windows-on-Windows 64-bit，32位的应用程序运行于此64位处理器上
     * + Win64：64位
     * + AppleWebKit/537.36：浏览器内核
     * + KHTML：HTML排版引擎
     * + like Gecko：这不是Geckeo 浏览器，但是运行起来像Geckeo浏览器
     * + Chrome/106.0.5068.19：Chrome版本号
     * + Safari/537.36：宣称自己是Safari？
     * @returns 返回随机字符串
     * @example
     * Utils.getRandomPCUA();
     * > 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5068.19 Safari/537.36'
     **/
    getRandomPCUA() {
      let UtilsContext = this;
      let chromeVersion1 = UtilsContext.getRandomValue(120, 132);
      let chromeVersion2 = UtilsContext.getRandomValue(0, 0);
      let chromeVersion3 = UtilsContext.getRandomValue(2272, 6099);
      let chromeVersion4 = UtilsContext.getRandomValue(1, 218);
      return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion1}.${chromeVersion2}.${chromeVersion3}.${chromeVersion4} Safari/537.36`;
    }
    getRandomValue(...args2) {
      let result2 = [...args2];
      if (result2.length > 1) {
        if (result2.length === 2 && typeof result2[0] === "number" && typeof result2[1] === "number") {
          let leftNumber = result2[0] > result2[1] ? result2[1] : result2[0];
          let rightNumber = result2[0] > result2[1] ? result2[0] : result2[1];
          return Math.round(Math.random() * (rightNumber - leftNumber)) + leftNumber;
        } else {
          return result2[Math.floor(Math.random() * result2.length)];
        }
      } else if (result2.length === 1) {
        let paramData = result2[0];
        if (Array.isArray(paramData)) {
          return paramData[Math.floor(Math.random() * paramData.length)];
        } else if (typeof paramData === "object" && Object.keys(paramData).length > 0) {
          let paramObjDataKey = Object.keys(paramData)[Math.floor(Math.random() * Object.keys(paramData).length)];
          return paramData[paramObjDataKey];
        } else {
          return paramData;
        }
      }
    }
    /**
     * 获取元素上的使用React框架的实例属性，目前包括reactFiber、reactProps、reactEvents、reactEventHandlers、reactInternalInstance
     * @param element 需要获取的目标元素
     * @returns
     * @example
     * Utils.getReactObj(document.querySelector("input"))?.reactProps?.onChange({target:{value:"123"}});
     */
    getReactObj(element) {
      let result2 = {};
      Object.keys(element).forEach((domPropsName) => {
        if (domPropsName.startsWith("__react")) {
          let propsName = domPropsName.replace(/__(.+)\$.+/i, "$1");
          if (propsName in result2) ;
          else {
            result2[propsName] = element[domPropsName];
          }
        }
      });
      return result2;
    }
    /**
     * 获取对象上的Symbol属性，如果没设置keyName，那么返回一个对象，对象是所有遍历到的Symbol对象
     * @param target 目标对象
     * @param keyName （可选）Symbol名或者Symbol对象
     */
    getSymbol(target, keyName) {
      if (typeof target !== "object") {
        throw new TypeError("target不是一个对象");
      }
      let objectsSymbols = Object.getOwnPropertySymbols(target);
      if (typeof keyName === "string") {
        let findSymbol = objectsSymbols.find((key) => {
          return key.toString() === keyName;
        });
        if (findSymbol) {
          return target[findSymbol];
        }
      } else if (typeof keyName === "symbol") {
        let findSymbol = objectsSymbols.find((key) => {
          return key === keyName;
        });
        if (findSymbol) {
          return target[findSymbol];
        }
      } else {
        let result2 = {};
        objectsSymbols.forEach((item) => {
          result2[item] = target[item];
        });
        return result2;
      }
    }
    /**
     * 获取文本的字符长度
     * @param text
     * @example
     * Utils.getTextLength("测试文本")
     * > 12
     */
    getTextLength(text) {
      let encoder = new TextEncoder();
      let bytes = encoder.encode(text);
      return bytes.length;
    }
    getTextStorageSize(text, addType = true) {
      let UtilsContext = this;
      return UtilsContext.formatByteToSize(UtilsContext.getTextLength(text), addType);
    }
    getThunderUrl(url) {
      if (url == null) {
        throw new TypeError("url不能为空");
      }
      if (typeof url !== "string") {
        throw new TypeError("url必须是string类型");
      }
      if (url.trim() === "") {
        throw new TypeError("url不能为空字符串或纯空格");
      }
      return `thunder://${this.windowApi.globalThis.btoa("AA" + url + "ZZ")}`;
    }
    isNativeFunc(target) {
      return Boolean(target.toString().match(/^function .*\(\) { \[native code\] }$/));
    }
    isNearBottom(...args2) {
      let nearBottomHeight = 50;
      let checkWindow = () => {
        let scrollTop = this.windowApi.window.pageYOffset || this.windowApi.document.documentElement.scrollTop;
        let viewportHeight = this.windowApi.window.innerHeight || this.windowApi.document.documentElement.clientHeight;
        let maxScrollHeight = this.windowApi.document.documentElement.scrollHeight - nearBottomHeight;
        return scrollTop + viewportHeight >= maxScrollHeight;
      };
      let checkNode = ($ele) => {
        let scrollTop = $ele.scrollTop;
        let viewportHeight = $ele.clientHeight;
        let maxScrollHeight = $ele.scrollHeight - viewportHeight - nearBottomHeight;
        return scrollTop >= maxScrollHeight;
      };
      let firstArg = args2[0];
      if (args2.length === 0 || typeof args2[0] === "number") {
        return checkWindow();
      } else if (typeof args2[0] === "object" && args2[0] instanceof HTMLElement) {
        if (typeof args2[1] === "number" && !Number.isNaN(args2[1])) {
          nearBottomHeight = args2[1];
        }
        return checkNode(args2[0]);
      } else {
        throw new TypeError("参数1类型错误" + typeof firstArg);
      }
    }
    isDOM(target) {
      return target instanceof Node;
    }
    isFullscreenEnabled() {
      return !!(this.windowApi.document.fullscreenEnabled || this.windowApi.document.webkitFullScreenEnabled || this.windowApi.document.mozFullScreenEnabled || this.windowApi.document.msFullScreenEnabled);
    }
    isJQuery(target) {
      let result2 = false;
      if (typeof jQuery === "object" && target instanceof jQuery) {
        result2 = true;
      }
      if (target == null) {
        return false;
      }
      if (typeof target === "object") {
        let jQueryProps = [
          "add",
          "addBack",
          "addClass",
          "after",
          "ajaxComplete",
          "ajaxError",
          "ajaxSend",
          "ajaxStart",
          "ajaxStop",
          "ajaxSuccess",
          "animate",
          "append",
          "appendTo",
          "attr",
          "before",
          "bind",
          "blur",
          "change",
          "children",
          "clearQueue",
          "click",
          "clone",
          "closest",
          "constructor",
          "contents",
          "contextmenu",
          "css",
          "data",
          "dblclick",
          "delay",
          "delegate",
          "dequeue",
          "each",
          "empty",
          "end",
          "eq",
          "extend",
          "fadeIn",
          "fadeOut",
          "fadeTo",
          "fadeToggle",
          "filter",
          "find",
          "first",
          "focus",
          "focusin",
          "focusout",
          "get",
          "has",
          "hasClass",
          "height",
          "hide",
          "hover",
          "html",
          "index",
          "init",
          "innerHeight",
          "innerWidth",
          "insertAfter",
          "insertBefore",
          "is",
          "jquery",
          "keydown",
          "keypress",
          "keyup",
          "last",
          "load",
          "map",
          "mousedown",
          "mouseenter",
          "mouseleave",
          "mousemove",
          "mouseout",
          "mouseover",
          "mouseup",
          "next",
          "nextAll",
          "not",
          "off",
          "offset",
          "offsetParent",
          "on",
          "one",
          "outerHeight",
          "outerWidth",
          "parent",
          "parents",
          "position",
          "prepend",
          "prependTo",
          "prev",
          "prevAll",
          "prevUntil",
          "promise",
          "prop",
          "pushStack",
          "queue",
          "ready",
          "remove",
          "removeAttr",
          "removeClass",
          "removeData",
          "removeProp",
          "replaceAll",
          "replaceWith",
          "resize",
          "scroll",
          "scrollLeft",
          "scrollTop",
          "select",
          "show",
          "siblings",
          "slice",
          "slideDown",
          "slideToggle",
          "slideUp",
          "sort",
          "splice",
          "text",
          "toArray",
          "toggle",
          "toggleClass",
          "trigger",
          "triggerHandler",
          "unbind",
          "width",
          "wrap"
        ];
        for (const jQueryPropsName of jQueryProps) {
          if (!(jQueryPropsName in target)) {
            result2 = false;
            break;
          } else {
            result2 = true;
          }
        }
      }
      return result2;
    }
    isPhone(userAgent = navigator.userAgent) {
      return Boolean(/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(userAgent));
    }
    isSameChars(targetStr, coefficient = 1) {
      if (typeof targetStr !== "string") {
        throw new TypeError("参数 str 必须是 string 类型");
      }
      if (targetStr.length < 2) {
        return false;
      }
      targetStr = targetStr.toLowerCase();
      const targetCharMap = {};
      let targetStrLength = 0;
      for (const char of targetStr) {
        if (Reflect.has(targetCharMap, char)) {
          targetCharMap[char]++;
        } else {
          targetCharMap[char] = 1;
        }
        targetStrLength++;
      }
      let result2 = false;
      for (const char in targetCharMap) {
        if (targetCharMap[char] / targetStrLength >= coefficient) {
          result2 = true;
          break;
        }
      }
      return result2;
    }
    isNotNull(...args2) {
      let UtilsContext = this;
      return !UtilsContext.isNull.apply(this, args2);
    }
    isNull(...args2) {
      let result2 = true;
      let checkList = [...args2];
      for (const objItem of checkList) {
        let itemResult = false;
        if (objItem === null || objItem === void 0) {
          itemResult = true;
        } else {
          switch (typeof objItem) {
            case "object":
              if (typeof objItem[Symbol.iterator] === "function") {
                itemResult = objItem.length === 0;
              } else {
                itemResult = Object.keys(objItem).length === 0;
              }
              break;
            case "number":
              itemResult = objItem === 0;
              break;
            case "string":
              itemResult = objItem.trim() === "" || objItem === "null" || objItem === "undefined";
              break;
            case "boolean":
              itemResult = !objItem;
              break;
            case "function":
              let funcStr = objItem.toString().replace(/\s/g, "");
              itemResult = Boolean(funcStr.match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/));
              break;
          }
        }
        result2 = result2 && itemResult;
      }
      return result2;
    }
    isThemeDark() {
      return this.windowApi.globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    /**
     * 判断元素是否在页面中可见
     * @param element 需要检查的元素，可以是普通元素|数组形式的元素|通过querySelectorAll获取的元素数组
     * @param inView
     * + true 在窗口可视区域
     * + false 不在窗口可视区域
     * @returns
     * + true 可见
     * + false 不可见
     * @example
     * Utils.isVisible(document.documentElement)
     * > true
     */
    isVisible(element, inView = false) {
      let needCheckDomList = [];
      if (element instanceof Array || element instanceof NodeList) {
        element = element;
        needCheckDomList = [...element];
      } else {
        needCheckDomList = [element];
      }
      let result2 = true;
      for (const domItem of needCheckDomList) {
        let domDisplay = this.windowApi.window.getComputedStyle(domItem);
        if (domDisplay.display === "none") {
          result2 = false;
        } else {
          let domClientRect = domItem.getBoundingClientRect();
          if (inView) {
            let viewportWidth = this.windowApi.window.innerWidth || this.windowApi.document.documentElement.clientWidth;
            let viewportHeight = this.windowApi.window.innerHeight || this.windowApi.document.documentElement.clientHeight;
            result2 = !(domClientRect.right < 0 || domClientRect.left > viewportWidth || domClientRect.bottom < 0 || domClientRect.top > viewportHeight);
          } else {
            result2 = Boolean(domItem.getClientRects().length);
          }
        }
        if (!result2) {
          break;
        }
      }
      return result2;
    }
    isWebView_Via() {
      let result2 = true;
      let UtilsContext = this;
      if (typeof this.windowApi.top.window.via === "object") {
        for (const key in Object.values(this.windowApi.top.window.via)) {
          if (Reflect.has(this.windowApi.top.window.via, key)) {
            let objValueFunc = this.windowApi.top.window.via[key];
            if (typeof objValueFunc === "function" && UtilsContext.isNativeFunc(objValueFunc)) {
              result2 = true;
            } else {
              result2 = false;
              break;
            }
          }
        }
      } else {
        result2 = false;
      }
      return result2;
    }
    isWebView_X() {
      let result2 = true;
      let UtilsContext = this;
      if (typeof this.windowApi.top.window.mbrowser === "object") {
        for (const key in Object.values(this.windowApi.top.window.mbrowser)) {
          if (Reflect.has(this.windowApi.top.window.mbrowser, key)) {
            let objValueFunc = this.windowApi.top.window.mbrowser[key];
            if (typeof objValueFunc === "function" && UtilsContext.isNativeFunc(objValueFunc)) {
              result2 = true;
            } else {
              result2 = false;
              break;
            }
          }
        }
      } else {
        result2 = false;
      }
      return result2;
    }
    parseObjectToArray(target) {
      if (typeof target !== "object") {
        throw new Error("Utils.parseObjectToArray 参数 target 必须为 object 类型");
      }
      let result2 = [];
      Object.keys(target).forEach(function(keyName) {
        result2 = result2.concat(target[keyName]);
      });
      return result2;
    }
    mergeArrayToString(data, handleFunc) {
      if (!(data instanceof Array)) {
        throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");
      }
      let content = "";
      if (typeof handleFunc === "function") {
        data.forEach((item) => {
          content += handleFunc(item);
        });
      } else if (typeof handleFunc === "string") {
        data.forEach((item) => {
          content += item[handleFunc];
        });
      } else {
        data.forEach((item) => {
          Object.values(item).filter((item2) => typeof item2 === "string").forEach((item3) => {
            content += item3;
          });
        });
      }
      return content;
    }
    mutationObserver(target, observer_config) {
      let UtilsContext = this;
      let default_obverser_config = {
        /* 监听到元素有反馈，需执行的函数 */
        callback: () => {
        },
        config: {
          /**
           * + true 监听以 target 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 target
           * + false (默认) 不生效
           */
          subtree: void 0,
          /**
           * + true 监听 target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效）
           * + false (默认) 不生效
           */
          childList: void 0,
          /**
           * + true 观察所有监听的节点属性值的变化。默认值为 true，当声明了 attributeFilter 或 attributeOldValue
           * + false (默认) 不生效
           */
          attributes: void 0,
          /**
           * 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知
           */
          attributeFilter: void 0,
          /**
           * + true 记录上一次被监听的节点的属性变化；可查阅 MutationObserver 中的 Monitoring attribute values 了解关于观察属性变化和属性值记录的详情
           * + false (默认) 不生效
           */
          attributeOldValue: void 0,
          /**
           * + true 监听声明的 target 节点上所有字符的变化。默认值为 true，如果声明了 characterDataOldValue
           * + false (默认) 不生效
           */
          characterData: void 0,
          /**
           * + true 记录前一个被监听的节点中发生的文本变化
           * + false (默认) 不生效
           */
          characterDataOldValue: void 0
        },
        immediate: false
      };
      observer_config = UtilsContext.assign(default_obverser_config, observer_config);
      let windowMutationObserver = this.windowApi.window.MutationObserver || this.windowApi.window.webkitMutationObserver || this.windowApi.window.MozMutationObserver;
      let mutationObserver = new windowMutationObserver(function(mutations, observer) {
        if (typeof observer_config.callback === "function") {
          observer_config.callback(mutations, observer);
        }
      });
      if (Array.isArray(target) || target instanceof NodeList) {
        target.forEach((item) => {
          mutationObserver.observe(item, observer_config.config);
        });
      } else if (UtilsContext.isJQuery(target)) {
        target.each((index, item) => {
          mutationObserver.observe(item, observer_config.config);
        });
      } else {
        mutationObserver.observe(target, observer_config.config);
      }
      if (observer_config.immediate) {
        if (typeof observer_config.callback === "function") {
          observer_config.callback([], mutationObserver);
        }
      }
      return mutationObserver;
    }
    /**
     * 使用观察器观察元素出现在视图内，出现的话触发回调
     * @param target 目标元素
     * @param callback 触发的回调
     * @param options 观察器配置
     * @example
     * Utils.mutationVisible(document.querySelector("div.xxxx"),(entries,observer)=>{
     *     console.log("该元素出现在视图内");
     * }))
     */
    mutationVisible(target, callback2, options) {
      if (typeof IntersectionObserver === "undefined") {
        throw new TypeError("IntersectionObserver is not defined");
      }
      if (target == null) {
        throw new TypeError("mutatuinVisible target is null");
      }
      let defaultOptions = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.01, 0.99]
      };
      defaultOptions = this.assign(defaultOptions, options || {});
      let intersectionObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
          if (typeof callback2 === "function") {
            callback2(entries, observer);
          }
        }
      }, defaultOptions);
      if (Array.isArray(target)) {
        target.forEach((item) => {
          intersectionObserver.observe(item);
        });
      } else {
        intersectionObserver.observe(target);
      }
    }
    /**
     * 去除全局window下的Utils，返回控制权
     * @example
     * let utils = Utils.noConflict();
     * > ...
     */
    noConflict() {
      if (this.windowApi.window.Utils) {
        Reflect.deleteProperty(this.windowApi.window, "Utils");
      }
      this.windowApi.window.Utils = utils$1;
      return utils$1;
    }
    noConflictFunc(needReleaseObject, needReleaseName, functionNameList = [], release = true) {
      let UtilsContext = this;
      if (typeof needReleaseObject !== "object") {
        throw new Error("Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型");
      }
      if (typeof needReleaseName !== "string") {
        throw new Error("Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型");
      }
      if (!Array.isArray(functionNameList)) {
        throw new Error("Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型");
      }
      let needReleaseKey = "__" + needReleaseName;
      function releaseAll() {
        if (typeof UtilsContext.windowApi.window[needReleaseKey] !== "undefined") {
          return;
        }
        UtilsContext.windowApi.window[needReleaseKey] = UtilsContext.deepClone(needReleaseObject);
        Object.values(needReleaseObject).forEach((value) => {
          if (typeof value === "function") {
            needReleaseObject[value.name] = () => {
            };
          }
        });
      }
      function releaseOne() {
        Array.from(functionNameList).forEach((item) => {
          Object.values(needReleaseObject).forEach((value) => {
            if (typeof value === "function") {
              if (typeof UtilsContext.windowApi.window[needReleaseKey] === "undefined") {
                UtilsContext.windowApi.window[needReleaseKey] = {};
              }
              if (item === value.name) {
                UtilsContext.windowApi.window[needReleaseKey][value.name] = needReleaseObject[value.name];
                needReleaseObject[value.name] = () => {
                };
              }
            }
          });
        });
      }
      function recoveryAll() {
        if (typeof UtilsContext.windowApi.window[needReleaseKey] === "undefined") {
          return;
        }
        Object.assign(needReleaseObject, UtilsContext.windowApi.window[needReleaseKey]);
        Reflect.deleteProperty(UtilsContext.windowApi.window, "needReleaseKey");
      }
      function recoveryOne() {
        if (typeof UtilsContext.windowApi.window[needReleaseKey] === "undefined") {
          return;
        }
        Array.from(functionNameList).forEach((item) => {
          if (UtilsContext.windowApi.window[needReleaseKey][item]) {
            needReleaseObject[item] = UtilsContext.windowApi.window[needReleaseKey][item];
            Reflect.deleteProperty(UtilsContext.windowApi.window[needReleaseKey], item);
            if (Object.keys(UtilsContext.windowApi.window[needReleaseKey]).length === 0) {
              Reflect.deleteProperty(window, needReleaseKey);
            }
          }
        });
      }
      if (release) {
        if (functionNameList.length === 0) {
          releaseAll();
        } else {
          releaseOne();
        }
      } else {
        if (functionNameList.length === 0) {
          recoveryAll();
        } else {
          recoveryOne();
        }
      }
    }
    parseBase64ToBlob(dataUri) {
      if (typeof dataUri !== "string") {
        throw new Error("Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型");
      }
      let dataUriSplit = dataUri.split(","), dataUriMime = dataUriSplit[0].match(/:(.*?);/)[1], dataUriBase64Str = atob(dataUriSplit[1]), dataUriLength = dataUriBase64Str.length, u8arr = new Uint8Array(dataUriLength);
      while (dataUriLength--) {
        u8arr[dataUriLength] = dataUriBase64Str.charCodeAt(dataUriLength);
      }
      return new Blob([u8arr], {
        type: dataUriMime
      });
    }
    parseBase64ToFile(dataUri, fileName = "example") {
      if (typeof dataUri !== "string") {
        throw new Error("Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型");
      }
      if (typeof fileName !== "string") {
        throw new Error("Utils.parseBase64ToFile 参数 fileName 必须为 string 类型");
      }
      let dataUriSplit = dataUri.split(","), dataUriMime = dataUriSplit[0].match(/:(.*?);/)[1], dataUriBase64Str = atob(dataUriSplit[1]), dataUriLength = dataUriBase64Str.length, u8arr = new Uint8Array(dataUriLength);
      while (dataUriLength--) {
        u8arr[dataUriLength] = dataUriBase64Str.charCodeAt(dataUriLength);
      }
      return new File([u8arr], fileName, {
        type: dataUriMime
      });
    }
    parseInt(matchList = [], defaultValue = 0) {
      if (matchList == null) {
        return parseInt(defaultValue.toString());
      }
      let parseValue = parseInt(matchList[matchList.length - 1]);
      if (isNaN(parseValue)) {
        parseValue = parseInt(defaultValue.toString());
      }
      return parseValue;
    }
    async parseBlobToFile(blobUrl, fileName = "example") {
      return new Promise((resolve, reject) => {
        fetch(blobUrl).then((response) => response.blob()).then((blob) => {
          const file = new File([blob], fileName, { type: blob.type });
          resolve(file);
        }).catch((error2) => {
          console.error("Error:", error2);
          reject(error2);
        });
      });
    }
    parseCDATA(text = "") {
      let result2 = "";
      let cdataRegexp = /<\!\[CDATA\[([\s\S]*)\]\]>/;
      let cdataMatch = cdataRegexp.exec(text.trim());
      if (cdataMatch && cdataMatch.length > 1) {
        result2 = cdataMatch[cdataMatch.length - 1];
      }
      return result2;
    }
    async parseFileToBase64(fileObj) {
      let reader = new FileReader();
      reader.readAsDataURL(fileObj);
      return new Promise((resolve) => {
        reader.onload = function(event) {
          resolve(event.target.result);
        };
      });
    }
    parseFromString(text, mimeType = "text/html") {
      let parser = new DOMParser();
      return parser.parseFromString(text, mimeType);
    }
    parseStringToRegExpString(text) {
      if (typeof text !== "string") {
        throw new TypeError("string必须是字符串");
      }
      let regString = text.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
      return regString;
    }
    preventEvent(element, eventNameList = [], capture) {
      function stopEvent(event) {
        event == null ? void 0 : event.preventDefault();
        event == null ? void 0 : event.stopPropagation();
        event == null ? void 0 : event.stopImmediatePropagation();
        return false;
      }
      if (arguments.length === 1) {
        return stopEvent(arguments[0]);
      } else {
        if (typeof eventNameList === "string") {
          eventNameList = [eventNameList];
        }
        eventNameList.forEach((eventName) => {
          element.addEventListener(eventName, stopEvent, {
            capture: Boolean(capture)
          });
        });
      }
    }
    registerTrustClickEvent(isTrustValue = true, filter) {
      function trustEvent(event) {
        return new Proxy(event, {
          get: function(target, property) {
            if (property === "isTrusted") {
              return isTrustValue;
            } else {
              return Reflect.get(target, property);
            }
          }
        });
      }
      if (filter == null) {
        filter = function(typeName) {
          return typeName === "click";
        };
      }
      const originalListener = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function(...args2) {
        let type = args2[0];
        let callback2 = args2[1];
        args2[2];
        if (filter(type)) {
          if (typeof callback2 === "function") {
            args2[1] = function(event) {
              callback2.call(this, trustEvent(event));
            };
          } else if (typeof callback2 === "object" && "handleEvent" in callback2) {
            let oldHandleEvent = callback2["handleEvent"];
            args2[1]["handleEvent"] = function(event) {
              if (event == null) {
                return;
              }
              try {
                event instanceof Proxy;
                oldHandleEvent.call(this, trustEvent(event));
              } catch (error2) {
                event["isTrusted"] = isTrustValue;
              }
            };
          }
        }
        return originalListener.apply(this, args2);
      };
    }
    reverseNumber(num) {
      let reversedNum = 0;
      let isNegative = false;
      if (num < 0) {
        isNegative = true;
        num = Math.abs(num);
      }
      while (num > 0) {
        reversedNum = reversedNum * 10 + num % 10;
        num = Math.floor(num / 10);
      }
      return isNegative ? -reversedNum : reversedNum;
    }
    selectElementText(element, childTextNode, startIndex, endIndex) {
      let range = this.windowApi.document.createRange();
      range.selectNodeContents(element);
      if (childTextNode) {
        if (childTextNode.nodeType !== Node.TEXT_NODE) {
          throw new TypeError("childTextNode必须是#text元素");
        }
        if (startIndex != null && endIndex != null) {
          range.setStart(childTextNode, startIndex);
          range.setEnd(childTextNode, endIndex);
        }
      }
      let selection = this.windowApi.globalThis.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    setClip(data, info = {
      type: "text",
      mimetype: "text/plain"
    }) {
      var _resolve, _copyData, _copyDataType;
      if (typeof data === "object") {
        if (data instanceof Element) {
          data = data.outerHTML;
        } else {
          data = JSON.stringify(data);
        }
      } else if (typeof data !== "string") {
        data = data.toString();
      }
      let textType = typeof info === "object" ? info.type : info;
      if (textType.includes("html")) {
        textType = "text/html";
      } else {
        textType = "text/plain";
      }
      let UtilsContext = this;
      class UtilsClipboard {
        constructor(resolve, copyData, copyDataType) {
          __privateAdd(this, _resolve);
          __privateAdd(this, _copyData);
          __privateAdd(this, _copyDataType);
          __privateSet(this, _resolve, resolve);
          __privateSet(this, _copyData, copyData);
          __privateSet(this, _copyDataType, copyDataType);
        }
        async init() {
          let copyStatus = false;
          await this.requestClipboardPermission();
          if (this.hasClipboard() && (this.hasClipboardWrite() || this.hasClipboardWriteText())) {
            try {
              copyStatus = await this.copyDataByClipboard();
            } catch (error2) {
              console.error("复制失败，使用第二种方式，error👉", error2);
              copyStatus = this.copyTextByTextArea();
            }
          } else {
            copyStatus = this.copyTextByTextArea();
          }
          __privateGet(this, _resolve).call(this, copyStatus);
          this.destroy();
        }
        destroy() {
          __privateSet(this, _resolve, null);
          __privateSet(this, _copyData, null);
          __privateSet(this, _copyDataType, null);
        }
        isText() {
          return __privateGet(this, _copyDataType).includes("text");
        }
        hasClipboard() {
          return (navigator == null ? void 0 : navigator.clipboard) != null;
        }
        hasClipboardWrite() {
          var _a2;
          return ((_a2 = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a2.write) != null;
        }
        hasClipboardWriteText() {
          var _a2;
          return ((_a2 = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a2.writeText) != null;
        }
        /**
         * 使用textarea和document.execCommand("copy")来复制文字
         */
        copyTextByTextArea() {
          try {
            let copyElement = UtilsContext.windowApi.document.createElement("textarea");
            copyElement.value = __privateGet(this, _copyData);
            copyElement.setAttribute("type", "text");
            copyElement.setAttribute("style", "opacity:0;position:absolute;");
            copyElement.setAttribute("readonly", "readonly");
            UtilsContext.windowApi.document.body.appendChild(copyElement);
            copyElement.select();
            UtilsContext.windowApi.document.execCommand("copy");
            UtilsContext.windowApi.document.body.removeChild(copyElement);
            return true;
          } catch (error2) {
            console.error("复制失败，error👉", error2);
            return false;
          }
        }
        /**
         * 申请剪贴板权限
         */
        requestClipboardPermission() {
          return new Promise((resolve, reject) => {
            if (navigator.permissions && navigator.permissions.query) {
              navigator.permissions.query({
                // @ts-ignore
                name: "clipboard-write"
              }).then((permissionStatus) => {
                resolve(true);
              }).catch((error2) => {
                console.error([
                  "申请剪贴板权限失败，尝试直接写入👉",
                  error2.message ?? error2.name ?? error2.stack
                ]);
                resolve(false);
              });
            } else {
              resolve(false);
            }
          });
        }
        /**
         * 使用clipboard直接写入数据到剪贴板
         */
        copyDataByClipboard() {
          return new Promise((resolve, reject) => {
            if (this.isText()) {
              navigator.clipboard.writeText(__privateGet(this, _copyData)).then(() => {
                resolve(true);
              }).catch((error2) => {
                reject(error2);
              });
            } else {
              let textBlob = new Blob([__privateGet(this, _copyData)], {
                type: __privateGet(this, _copyDataType)
              });
              navigator.clipboard.write([
                new ClipboardItem({
                  [__privateGet(this, _copyDataType)]: textBlob
                })
              ]).then(() => {
                resolve(true);
              }).catch((error2) => {
                reject(error2);
              });
            }
          });
        }
      }
      _resolve = new WeakMap();
      _copyData = new WeakMap();
      _copyDataType = new WeakMap();
      return new Promise((resolve) => {
        const utilsClipboard = new UtilsClipboard(resolve, data, textType);
        if (UtilsContext.windowApi.document.hasFocus()) {
          utilsClipboard.init();
        } else {
          UtilsContext.windowApi.window.addEventListener("focus", () => {
            utilsClipboard.init();
          }, { once: true });
        }
      });
    }
    setTimeout(callback2, delayTime = 0) {
      let UtilsContext = this;
      if (typeof callback2 !== "function" && typeof callback2 !== "string") {
        throw new TypeError("Utils.setTimeout 参数 callback 必须为 function|string 类型");
      }
      if (typeof delayTime !== "number") {
        throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(UtilsContext.tryCatch().run(callback2));
        }, delayTime);
      });
    }
    sleep(delayTime = 0) {
      if (typeof delayTime !== "number") {
        throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(void 0);
        }, delayTime);
      });
    }
    dragSlider(selector, offsetX = this.windowApi.window.innerWidth) {
      let UtilsContext = this;
      function initMouseEvent(eventName, offSetX, offSetY) {
        let win = typeof unsafeWindow === "undefined" ? globalThis : unsafeWindow;
        let mouseEvent = UtilsContext.windowApi.document.createEvent("MouseEvents");
        mouseEvent.initMouseEvent(eventName, true, true, win, 0, offSetX, offSetY, offSetX, offSetY, false, false, false, false, 0, null);
        return mouseEvent;
      }
      let sliderElement = typeof selector === "string" ? this.windowApi.document.querySelector(selector) : selector;
      if (!(sliderElement instanceof Node) || !(sliderElement instanceof Element)) {
        throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");
      }
      let rect = sliderElement.getBoundingClientRect(), x0 = rect.x || rect.left, y0 = rect.y || rect.top, x1 = x0 + offsetX, y1 = y0;
      sliderElement.dispatchEvent(initMouseEvent("mousedown", x0, y0));
      sliderElement.dispatchEvent(initMouseEvent("mousemove", x1, y1));
      sliderElement.dispatchEvent(initMouseEvent("mouseleave", x1, y1));
      sliderElement.dispatchEvent(initMouseEvent("mouseout", x1, y1));
    }
    enterFullScreen(element = this.windowApi.document.documentElement, options) {
      try {
        if (element.requestFullscreen) {
          element.requestFullscreen(options);
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        } else {
          throw new TypeError("该浏览器不支持全屏API");
        }
      } catch (err) {
        console.error(err);
      }
    }
    exitFullScreen(element = this.windowApi.document.documentElement) {
      if (this.windowApi.document.exitFullscreen) {
        return this.windowApi.document.exitFullscreen();
      } else if (this.windowApi.document.msExitFullscreen) {
        return this.windowApi.document.msExitFullscreen();
      } else if (this.windowApi.document.mozCancelFullScreen) {
        return this.windowApi.document.mozCancelFullScreen();
      } else if (this.windowApi.document.webkitCancelFullScreen) {
        return this.windowApi.document.webkitCancelFullScreen();
      } else {
        return new Promise((resolve, reject) => {
          reject(new TypeError("该浏览器不支持全屏API"));
        });
      }
    }
    sortListByProperty(data, getPropertyValueFunc, sortByDesc = true) {
      let UtilsContext = this;
      if (typeof getPropertyValueFunc !== "function" && typeof getPropertyValueFunc !== "string") {
        throw new Error("Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型");
      }
      if (typeof sortByDesc !== "boolean") {
        throw new Error("Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型");
      }
      let getObjValue = function(obj) {
        return typeof getPropertyValueFunc === "string" ? obj[getPropertyValueFunc] : getPropertyValueFunc(obj);
      };
      let sortFunc = function(after_obj, before_obj) {
        let beforeValue = getObjValue(before_obj);
        let afterValue = getObjValue(after_obj);
        if (sortByDesc) {
          if (afterValue > beforeValue) {
            return -1;
          } else if (afterValue < beforeValue) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (afterValue < beforeValue) {
            return -1;
          } else if (afterValue > beforeValue) {
            return 1;
          } else {
            return 0;
          }
        }
      };
      let sortNodeFunc = function(nodeList, getNodeListFunc) {
        let nodeListLength = nodeList.length;
        for (let i2 = 0; i2 < nodeListLength - 1; i2++) {
          for (let j2 = 0; j2 < nodeListLength - 1 - i2; j2++) {
            let beforeNode = nodeList[j2];
            let afterNode = nodeList[j2 + 1];
            let beforeValue = getObjValue(beforeNode);
            let afterValue = getObjValue(afterNode);
            if (sortByDesc == true && beforeValue < afterValue || sortByDesc == false && beforeValue > afterValue) {
              let temp = beforeNode.nextElementSibling;
              afterNode.after(beforeNode);
              if (temp == null) {
                temp.parentNode.appendChild(afterNode);
              } else {
                temp.before(afterNode);
              }
              nodeList = getNodeListFunc();
            }
          }
        }
      };
      let result2 = data;
      let getDataFunc = null;
      if (data instanceof Function) {
        getDataFunc = data;
        data = data();
      }
      if (Array.isArray(data)) {
        data.sort(sortFunc);
      } else if (data instanceof NodeList || UtilsContext.isJQuery(data)) {
        sortNodeFunc(data, getDataFunc);
        result2 = getDataFunc();
      } else {
        throw new Error("Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型");
      }
      return result2;
    }
    stringToRegular(targetString, flags = "ig") {
      let reg;
      flags = flags.toLowerCase();
      if (typeof targetString === "string") {
        reg = new RegExp(targetString.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), flags);
      } else if (targetString instanceof RegExp) {
        reg = targetString;
      } else {
        throw new Error("Utils.stringToRegular 参数targetString必须是string|Regexp类型");
      }
      return reg;
    }
    stringTitleToUpperCase(targetString, otherStrToLowerCase = false) {
      let newTargetString = targetString.slice(0, 1).toUpperCase();
      if (otherStrToLowerCase) {
        newTargetString = newTargetString + targetString.slice(1).toLowerCase();
      } else {
        newTargetString = newTargetString + targetString.slice(1);
      }
      return newTargetString;
    }
    startsWith(target, searchString, position = 0) {
      let UtilsContext = this;
      if (position > target.length) {
        return false;
      }
      if (position !== 0) {
        target = target.slice(position, target.length);
      }
      let searchStringRegexp = searchString;
      if (typeof searchString === "string") {
        searchStringRegexp = new RegExp(`^${searchString}`);
      } else if (Array.isArray(searchString)) {
        let flag = false;
        for (const searcStr of searchString) {
          if (!UtilsContext.startsWith(target, searcStr, position)) {
            flag = true;
            break;
          }
        }
        return flag;
      }
      return Boolean(target.match(searchStringRegexp));
    }
    stringTitleToLowerCase(targetString, otherStrToUpperCase = false) {
      let newTargetString = targetString.slice(0, 1).toLowerCase();
      if (otherStrToUpperCase) {
        newTargetString = newTargetString + targetString.slice(1).toUpperCase();
      } else {
        newTargetString = newTargetString + targetString.slice(1);
      }
      return newTargetString;
    }
    toJSON(data, errorCallBack) {
      let UtilsContext = this;
      let result2 = {};
      if (typeof data === "object") {
        return data;
      }
      UtilsContext.tryCatch().config({ log: false }).error((error2) => {
        UtilsContext.tryCatch().error(() => {
          try {
            result2 = UtilsContext.windowApi.window.eval("(" + data + ")");
          } catch (error22) {
            if (typeof errorCallBack === "function") {
              errorCallBack(error22);
            }
          }
        }).run(() => {
          if (data && /^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            result2 = new Function("return " + data)();
          } else {
            if (typeof errorCallBack === "function") {
              errorCallBack(new Error("target is not a JSON"));
            }
          }
        });
      }).run(() => {
        data = data.trim();
        result2 = JSON.parse(data);
      });
      return result2;
    }
    toSearchParamsStr(obj, addPrefix) {
      let UtilsContext = this;
      let searhParamsStr = "";
      if (Array.isArray(obj)) {
        obj.forEach((item) => {
          if (searhParamsStr === "") {
            searhParamsStr += UtilsContext.toSearchParamsStr(item);
          } else {
            searhParamsStr += "&" + UtilsContext.toSearchParamsStr(item);
          }
        });
      } else {
        searhParamsStr = new URLSearchParams(Object.entries(obj)).toString();
      }
      if (addPrefix && !searhParamsStr.startsWith("?")) {
        searhParamsStr = "?" + searhParamsStr;
      }
      return searhParamsStr;
    }
    /**
     * 将UrlSearchParams格式的字符串转为对象
     */
    searchParamStrToObj(searhParamsStr) {
      if (typeof searhParamsStr !== "string") {
        return {};
      }
      return Object.fromEntries(new URLSearchParams(searhParamsStr));
    }
    uniqueArray(uniqueArrayData = [], compareArrayData, compareFun = (item, item2) => {
      return item === item2;
    }) {
      if (typeof compareArrayData === "function") {
        const compareFn = compareArrayData;
        const seen = /* @__PURE__ */ new Set();
        const result2 = [];
        for (const item of uniqueArrayData) {
          const identfier = compareFn(item);
          if (!seen.has(identfier)) {
            seen.add(identfier);
            result2.push(item);
          }
        }
        return result2;
      } else {
        return Array.from(uniqueArrayData).filter((item) => !Array.from(compareArrayData).some(function(item2) {
          return compareFun(item, item2);
        }));
      }
    }
    waitArrayLoopToEnd(data, handleFunc) {
      let UtilsContext = this;
      if (typeof handleFunc !== "function" && typeof handleFunc !== "string") {
        throw new Error("Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型");
      }
      return Promise.all(Array.from(data).map(async (item, index) => {
        await UtilsContext.tryCatch(index, item).run(handleFunc);
      }));
    }
    waitNode(...args2) {
      args2 = args2.filter((arg) => arg !== void 0);
      let UtilsContext = this;
      let selector = args2[0];
      let parent = UtilsContext.windowApi.document;
      let timeout = 0;
      if (typeof args2[0] !== "string" && !Array.isArray(args2[0])) {
        throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]");
      }
      if (args2.length === 1) ;
      else if (args2.length === 2) {
        let secondParam = args2[1];
        if (typeof secondParam === "number") {
          timeout = secondParam;
        } else if (typeof secondParam === "object" && secondParam instanceof Node) {
          parent = secondParam;
        } else {
          throw new TypeError("Utils.waitNode 第二个参数必须是number|Node");
        }
      } else if (args2.length === 3) {
        let secondParam = args2[1];
        let thirdParam = args2[2];
        if (typeof secondParam === "object" && secondParam instanceof Node) {
          parent = secondParam;
          if (typeof thirdParam === "number") {
            timeout = thirdParam;
          } else {
            throw new TypeError("Utils.waitNode 第三个参数必须是number");
          }
        } else {
          throw new TypeError("Utils.waitNode 第二个参数必须是Node");
        }
      } else {
        throw new TypeError("Utils.waitNode 参数个数错误");
      }
      return new Promise((resolve) => {
        function getNode() {
          if (Array.isArray(selector)) {
            let result2 = [];
            for (let index = 0; index < selector.length; index++) {
              let node = parent.querySelector(selector[index]);
              if (node) {
                result2.push(node);
              }
            }
            if (result2.length === selector.length) {
              return result2;
            }
          } else {
            return parent.querySelector(selector);
          }
        }
        var observer = UtilsContext.mutationObserver(parent, {
          config: {
            subtree: true,
            childList: true,
            attributes: true
          },
          callback() {
            let node = getNode();
            if (node) {
              if (typeof (observer == null ? void 0 : observer.disconnect) === "function") {
                observer.disconnect();
              }
              resolve(node);
              return;
            }
          },
          immediate: true
        });
        if (timeout > 0) {
          setTimeout(() => {
            if (typeof (observer == null ? void 0 : observer.disconnect) === "function") {
              observer.disconnect();
            }
            resolve(null);
          }, timeout);
        }
      });
    }
    waitAnyNode(...args2) {
      args2 = args2.filter((arg) => arg !== void 0);
      let UtilsContext = this;
      let selectorList = args2[0];
      let parent = UtilsContext.windowApi.document;
      let timeout = 0;
      if (typeof args2[0] !== "object" && !Array.isArray(args2[0])) {
        throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");
      }
      if (args2.length === 1) ;
      else if (args2.length === 2) {
        let secondParam = args2[1];
        if (typeof secondParam === "number") {
          timeout = secondParam;
        } else if (typeof secondParam === "object" && secondParam instanceof Node) {
          parent = secondParam;
        } else {
          throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node");
        }
      } else if (args2.length === 3) {
        let secondParam = args2[1];
        let thirdParam = args2[2];
        if (typeof secondParam === "object" && secondParam instanceof Node) {
          parent = secondParam;
          if (typeof thirdParam === "number") {
            timeout = thirdParam;
          } else {
            throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");
          }
        } else {
          throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node");
        }
      } else {
        throw new TypeError("Utils.waitAnyNode 参数个数错误");
      }
      let promiseList = selectorList.map((selector) => {
        return UtilsContext.waitNode(selector, parent, timeout);
      });
      return Promise.any(promiseList);
    }
    waitNodeList(...args2) {
      args2 = args2.filter((arg) => arg !== void 0);
      let UtilsContext = this;
      let selector = args2[0];
      let parent = UtilsContext.windowApi.document;
      let timeout = 0;
      if (typeof args2[0] !== "string" && !Array.isArray(args2[0])) {
        throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");
      }
      if (args2.length === 1) ;
      else if (args2.length === 2) {
        let secondParam = args2[1];
        if (typeof secondParam === "number") {
          timeout = secondParam;
        } else if (typeof secondParam === "object" && secondParam instanceof Node) {
          parent = secondParam;
        } else {
          throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node");
        }
      } else if (args2.length === 3) {
        let secondParam = args2[1];
        let thirdParam = args2[2];
        if (typeof secondParam === "object" && secondParam instanceof Node) {
          parent = secondParam;
          if (typeof thirdParam === "number") {
            timeout = thirdParam;
          } else {
            throw new TypeError("Utils.waitNodeList 第三个参数必须是number");
          }
        } else {
          throw new TypeError("Utils.waitNodeList 第二个参数必须是Node");
        }
      } else {
        throw new TypeError("Utils.waitNodeList 参数个数错误");
      }
      return new Promise((resolve) => {
        function getNodeList() {
          if (Array.isArray(selector)) {
            let result2 = [];
            for (let index = 0; index < selector.length; index++) {
              let nodeList = parent.querySelectorAll(selector[index]);
              if (nodeList.length) {
                result2.push(nodeList);
              }
            }
            if (result2.length === selector.length) {
              return result2;
            }
          } else {
            let nodeList = parent.querySelectorAll(selector);
            if (nodeList.length) {
              return nodeList;
            }
          }
        }
        var observer = UtilsContext.mutationObserver(parent, {
          config: {
            subtree: true,
            childList: true,
            attributes: true
          },
          callback() {
            let node = getNodeList();
            if (node) {
              try {
                observer.disconnect();
              } catch (error2) {
              }
              resolve(node);
              return;
            }
          },
          immediate: true
        });
        if (timeout > 0) {
          setTimeout(() => {
            if (typeof (observer == null ? void 0 : observer.disconnect) === "function") {
              observer.disconnect();
            }
            resolve(null);
          }, timeout);
        }
      });
    }
    waitAnyNodeList(...args2) {
      args2 = args2.filter((arg) => arg !== void 0);
      let UtilsContext = this;
      let selectorList = args2[0];
      let parent = UtilsContext.windowApi.document;
      let timeout = 0;
      if (!Array.isArray(args2[0])) {
        throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");
      }
      if (args2.length === 1) ;
      else if (args2.length === 2) {
        let secondParam = args2[1];
        if (typeof secondParam === "number") {
          timeout = secondParam;
        } else if (typeof secondParam === "object" && secondParam instanceof Node) {
          parent = secondParam;
        } else {
          throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node");
        }
      } else if (args2.length === 3) {
        let secondParam = args2[1];
        let thirdParam = args2[2];
        if (typeof secondParam === "object" && secondParam instanceof Node) {
          parent = secondParam;
          if (typeof thirdParam === "number") {
            timeout = thirdParam;
          } else {
            throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");
          }
        } else {
          throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node");
        }
      } else {
        throw new TypeError("Utils.waitAnyNodeList 参数个数错误");
      }
      let promiseList = selectorList.map((selector) => {
        return UtilsContext.waitNodeList(selector, parent, timeout);
      });
      return Promise.any(promiseList);
    }
    waitProperty(checkObj, checkPropertyName) {
      return new Promise((resolve) => {
        let obj = checkObj;
        if (typeof checkObj === "function") {
          obj = checkObj();
        }
        if (Reflect.has(obj, checkPropertyName)) {
          resolve(obj[checkPropertyName]);
        } else {
          Object.defineProperty(obj, checkPropertyName, {
            set: function(value) {
              try {
                resolve(value);
              } catch (error2) {
                console.error("Error setting property:", error2);
              }
            }
          });
        }
      });
    }
    waitPropertyByInterval(checkObj, checkPropertyName, intervalTimer = 250, maxTime = -1) {
      if (checkObj == null) {
        throw new TypeError("checkObj 不能为空对象 ");
      }
      let isResolve = false;
      return new Promise((resolve, reject) => {
        let interval = setInterval(() => {
          let obj = checkObj;
          if (typeof checkObj === "function") {
            obj = checkObj();
          }
          if (typeof obj !== "object") {
            return;
          }
          if (obj == null) {
            return;
          }
          if (typeof checkPropertyName === "function" && checkPropertyName(obj) || Reflect.has(obj, checkPropertyName)) {
            isResolve = true;
            clearInterval(interval);
            resolve(obj[checkPropertyName]);
          }
        }, intervalTimer);
        if (maxTime !== -1) {
          setTimeout(() => {
            if (!isResolve) {
              clearInterval(interval);
              reject();
            }
          }, maxTime);
        }
      });
    }
    async waitVueByInterval(element, propertyName, timer = 250, maxTime = -1, vueName = "__vue__") {
      if (element == null) {
        throw new Error("Utils.waitVueByInterval 参数element 不能为空");
      }
      let flag = false;
      let UtilsContext = this;
      try {
        await UtilsContext.waitPropertyByInterval(element, function(targetElement) {
          if (targetElement == null) {
            return false;
          }
          if (!(vueName in targetElement)) {
            return false;
          }
          if (propertyName == null) {
            return true;
          }
          let vueObject = targetElement[vueName];
          if (typeof propertyName === "string") {
            if (propertyName in vueObject) {
              flag = true;
              return true;
            }
          } else {
            if (propertyName(vueObject)) {
              flag = true;
              return true;
            }
          }
          return false;
        }, timer, maxTime);
      } catch (error2) {
        return flag;
      }
      return flag;
    }
    watchObject(target, propertyName, getCallBack, setCallBack) {
      if (typeof getCallBack !== "function" && typeof setCallBack !== "function") {
        return;
      }
      if (typeof getCallBack === "function") {
        Object.defineProperty(target, propertyName, {
          get() {
            if (typeof getCallBack === "function") {
              return getCallBack(target[propertyName]);
            } else {
              return target[propertyName];
            }
          }
        });
      } else if (typeof setCallBack === "function") {
        Object.defineProperty(target, propertyName, {
          set(value) {
            if (typeof setCallBack === "function") {
              setCallBack(value);
            }
          }
        });
      } else {
        Object.defineProperty(target, propertyName, {
          get() {
            if (typeof getCallBack === "function") {
              return getCallBack(target[propertyName]);
            } else {
              return target[propertyName];
            }
          },
          set(value) {
            if (typeof setCallBack === "function") {
              setCallBack(value);
            }
          }
        });
      }
    }
    /**
     * 深度获取对象属性
     * @param target 待获取的对象
     * @param handler 获取属性的回调
     */
    queryProperty(target, handler) {
      if (target == null) {
        return;
      }
      let handleResult = handler(target);
      if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) {
        return handleResult.data;
      }
      return this.queryProperty(handleResult.data, handler);
    }
    /**
     * 创建一个新的Utils实例
     * @param option
     * @returns
     */
    createUtils(option) {
      return new Utils(option);
    }
    /**
     * 将对象转换为FormData
     * @param data 待转换的对象
     * @param isEncode 是否对值为string进行编码转换(encodeURIComponent)，默认false
     * @param valueAutoParseToStr 是否对值强制使用JSON.stringify()转换，默认false
     * @example
     * Utils.toFormData({
     * 	test: "1",
     *  666: 666,
     * })
     */
    toFormData(data, isEncode = false, valueAutoParseToStr = false) {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        let value = data[key];
        if (valueAutoParseToStr) {
          value = JSON.stringify(value);
        }
        if (typeof value === "number") {
          value = value.toString();
        }
        if (isEncode && typeof value === "string") {
          value = encodeURIComponent(value);
        }
        if (value instanceof File) {
          formData.append(key, value, value.name);
        } else {
          formData.append(key, value);
        }
      });
      return formData;
    }
    /**
     * 将链接转为URL对象，自动补充URL的protocol或者origin
     * @param text 需要转换的链接字符串
     * @example
     * Utils.toUrl("//www.baidu.com/s?word=666");
     * Utils.toUrl("/s?word=666");
     */
    toUrl(text) {
      if (typeof text !== "string") {
        throw new TypeError("toUrl: text must be string");
      }
      text = text.trim();
      if (text === "") {
        throw new TypeError("toUrl: text must not be empty");
      }
      if (text.startsWith("//")) {
        text = this.windowApi.globalThis.location.protocol + text;
      } else if (text.startsWith("/")) {
        text = this.windowApi.globalThis.location.origin + text;
      }
      return new URL(text);
    }
  }
  let utils$1 = new Utils();
  const SymbolEvents = Symbol("events_" + ((1 + Math.random()) * 65536 | 0).toString(16).substring(1));
  const PopsCoreDefaultEnv = {
    document,
    window,
    globalThis,
    self
  };
  const PopsCoreEnv = {
    document,
    window,
    globalThis,
    self
  };
  const PopsCore = {
    init(option) {
      if (!option) {
        option = Object.assign({}, PopsCoreDefaultEnv);
      }
      Object.assign(PopsCoreEnv, option);
    },
    get document() {
      return PopsCoreEnv.document;
    },
    get window() {
      return PopsCoreEnv.window;
    },
    get globalThis() {
      return PopsCoreEnv.globalThis;
    },
    get self() {
      return PopsCoreEnv.self;
    }
  };
  const OriginPrototype = {
    Object: {
      defineProperty: Object.defineProperty
    }
  };
  let t$1 = class t2 {
    constructor() {
      this.__map = {};
    }
    beforeEach(t3) {
      this.__interceptor = t3;
    }
    on(t3, i2) {
      const s2 = Array.isArray(t3) ? t3 : [t3];
      for (const t4 of s2) {
        this.__map[t4] = this.__map[t4] || [];
        const s3 = this.__map[t4];
        s3 && s3.push(i2);
      }
      return this;
    }
    emit(t3, i2, s2) {
      void 0 !== this.__interceptor ? this.__interceptor(t3, () => {
        this.__emit(t3, i2), s2 && s2();
      }) : (this.__emit(t3, i2), s2 && s2());
    }
    __emit(t3, i2) {
      const s2 = this.__map[t3];
      if (Array.isArray(s2) && (null == s2 ? void 0 : s2.length)) for (const _ of s2) _(i2, t3);
      this.event = i2;
    }
    off(t3, i2) {
      const s2 = this.__map[t3];
      if (void 0 !== s2) if (void 0 === i2) delete this.__map[t3];
      else {
        const t4 = s2.findIndex((t5) => t5 === i2);
        s2.splice(t4, 1);
      }
    }
    destroy() {
      this.__map = {};
    }
  };
  const n$1 = "clientX", e$2 = "clientY", t = 16, c$3 = "start", o$1 = "move", s$1 = "cancel", u$3 = "end", a$2 = "left", i$3 = "right", r$4 = "up", d$1 = "down", m$2 = { 4: "start", 5: "move", 1: "end", 3: "cancel" };
  function v$1(n2) {
    return m$2[n2];
  }
  function b(n2, e2, t3) {
    const c2 = { 1: { 0: { move: 4 }, 4: { move: 5, end: 1, cancel: 3 }, 5: { move: 5, end: 1, cancel: 3 } }, 0: { 4: { move: 2, end: 1, cancel: 3 }, 5: { start: 2, move: 2, end: 1, cancel: 3 } } }[Number(n2)][e2];
    return void 0 !== c2 && c2[t3] || 0;
  }
  function g$1(n2) {
    [1, 3, 2].includes(n2.state) && (n2.state = 0);
  }
  function h$3(n2) {
    return [5, 1, 3].includes(n2);
  }
  function j(n2) {
    if (n2.disabled) return n2.state = 0, true;
  }
  function O(n2, e2) {
    return Object.assign(Object.assign(Object.assign({}, n2), e2), { state: 0, disabled: false });
  }
  function p$3(n2) {
    return Math.round(100 * n2) / 100;
  }
  function r$3() {
    let t3, o2, i2, r2, a2 = 0;
    return function(u2) {
      if (t3 = o2, void 0 !== u2) {
        a2 = Number.MAX_SAFE_INTEGER > a2 ? ++a2 : 1;
        const h2 = function(t4, o3) {
          const { phase: i3, points: r3, changedPoints: a3, nativeEvent: u3 } = t4, h3 = r3.length, p3 = c$3 === i3, g3 = u$3 === i3 && 0 === h3 || s$1 === i3, l3 = Date.now(), { x: d2, y: m2 } = c$2(r3) || c$2(a3), { currentTarget: v2 } = u3;
          return Object.assign(t4, { id: o3, x: d2, y: m2, timestamp: l3, isStart: p3, isEnd: g3, pointLength: h3, currentTarget: v2, getOffset(t5 = v2) {
            const e2 = t5.getBoundingClientRect();
            return { x: d2 - Math.round(e2.left), y: m2 - Math.round(e2.top) };
          } });
        }(u2, a2);
        o2 = h2;
        const { isStart: p2, pointLength: g2 } = h2;
        return p2 && (i2 = h2, t3 = void 0, r2 = 1 < g2 ? h2 : void 0), Object.assign(Object.assign({}, h2), { prevInput: t3, startMultiInput: r2, startInput: i2 });
      }
    };
  }
  function c$2(t3) {
    const { length: e2 } = t3;
    if (0 < e2) {
      if (1 === e2) {
        const { clientX: e3, clientY: n3 } = t3[0];
        return { x: Math.round(e3), y: Math.round(n3) };
      }
      const n2 = t3.reduce((t4, e3) => (t4.x += e3[n$1], t4.y += e3[e$2], t4), { x: 0, y: 0 });
      return { x: Math.round(n2.x / e2), y: Math.round(n2.y / e2) };
    }
  }
  function a$1(t3, e2, n2, s2) {
    const o2 = {};
    for (const t4 in n2) ["target", "currentTarget", "type"].includes(t4) || (o2[t4] = n2[t4]);
    let i2;
    return document.createEvent ? (i2 = document.createEvent("HTMLEvents"), i2.initEvent(t3, null == s2 ? void 0 : s2.bubbles, null == s2 ? void 0 : s2.cancelable)) : i2 = new Event(t3, s2), Object.assign(i2, o2, { match: () => n2.targets && 0 < n2.targets.length && n2.targets.every((t4) => i2.currentTarget.contains(t4)) }), e2.dispatchEvent(i2);
  }
  function u$2(t3, e2) {
    const { preventDefault: n2 } = e2;
    return s2 = n2, "[object Function]" === Object.prototype.toString.call(s2) ? n2(t3) : !!n2;
    var s2;
  }
  const h$2 = ["touchstart", "touchmove", "touchend", "touchcancel", "mousedown"], p$2 = ["mousemove", "mouseup"];
  const g = { domEvents: { bubbles: true, cancelable: true }, preventDefault: (t3) => {
    if (t3.target && "tagName" in t3.target) {
      const { tagName: e2 } = t3.target;
      return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(e2);
    }
    return false;
  } };
  let l$1 = class l2 extends t$1 {
    constructor(t3, e2) {
      super(), this.v = "2.1.3", this.__computeFunctionList = [], this.__computeFunctionCreatorList = [], this.__pluginContexts = [], this.__isIgnoreMouse = false, this.el = t3, this.c = {}, this.__options = Object.assign(Object.assign({}, g), e2);
      const n2 = function(t4) {
        const e3 = r$3();
        return function(n3) {
          const s3 = [], o2 = [];
          Array.from(n3.touches).forEach(({ clientX: e4, clientY: n4, target: i3 }) => {
            (null == t4 ? void 0 : t4.contains(i3)) && (s3.push(i3), o2.push({ clientX: e4, clientY: n4, target: i3 }));
          });
          const i2 = Array.from(n3.changedTouches).map(({ clientX: t5, clientY: e4, target: n4 }) => ({ clientX: t5, clientY: e4, target: n4 }));
          return e3({ phase: n3.type.replace("touch", ""), changedPoints: i2, points: o2, nativeEvent: n3, target: n3.target, targets: s3 });
        };
      }(this.el), s2 = function() {
        let t4, e3 = false, n3 = null;
        const s3 = r$3();
        return function(o2) {
          const { clientX: i2, clientY: r2, type: c2, button: a2, target: u2 } = o2;
          let h2, p2 = [{ clientX: i2, clientY: r2, target: u2 }];
          if ("mousedown" === c2 && 0 === a2) n3 = u2, e3 = true, h2 = "start";
          else {
            if (!e3) return;
            "mousemove" === c2 ? h2 = "move" : "mouseup" === c2 && (p2 = [], h2 = "end", e3 = false);
          }
          const g2 = t4 || [{ clientX: i2, clientY: r2, target: u2 }];
          if (t4 = [{ clientX: i2, clientY: r2, target: u2 }], void 0 !== h2) return s3({ phase: h2, changedPoints: g2, points: p2, target: n3, targets: [n3], nativeEvent: o2 });
        };
      }();
      if (this.__inputCreatorMap = { touchstart: n2, touchmove: n2, touchend: n2, touchcancel: n2, mousedown: s2, mousemove: s2, mouseup: s2 }, this.on("at:after", (t4) => {
        const { target: e3, __type: n3 } = t4, { domEvents: s3 } = this.__options;
        s3 && void 0 !== this.el && e3 && (a$1(n3, e3, t4, s3), a$1("at:after", e3, t4, s3));
      }), void 0 !== t3) {
        t3.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
        let e3 = false;
        try {
          const t4 = {};
          Object.defineProperty(t4, "passive", { get() {
            e3 = true;
          } }), window.addEventListener("_", () => {
          }, t4);
        } catch (t4) {
        }
        this.on("u", function(t4, e4, n3) {
          return h$2.forEach((s3) => {
            t4.addEventListener(s3, e4, n3);
          }), p$2.forEach((t5) => {
            window.addEventListener(t5, e4, n3);
          }), () => {
            h$2.forEach((n4) => {
              t4.removeEventListener(n4, e4);
            }), p$2.forEach((t5) => {
              window.removeEventListener(t5, e4);
            });
          };
        }(t3, this.catchEvent.bind(this), false === this.__options.preventDefault && e3 ? { passive: true } : { passive: false }));
      }
    }
    use(t3, e2) {
      this.__pluginContexts.push(t3(this, e2));
    }
    catchEvent(t3) {
      const e2 = this.__inputCreatorMap[t3.type](t3);
      if (void 0 !== e2) {
        const n2 = () => t3.stopPropagation(), s2 = () => t3.stopImmediatePropagation(), o2 = () => t3.preventDefault();
        if (u$2(t3, this.__options)) o2();
        else if ("touchstart" === t3.type ? this.__isIgnoreMouse = true : "touchmove" === t3.type && (this.__isIgnoreMouse = false), this.__isIgnoreMouse && t3.type.startsWith("mouse")) return void ("mouseup" === t3.type && (this.__isIgnoreMouse = false));
        this.emit("input", e2), this.emit2(`at:${e2.phase}`, e2, {});
        const i2 = {};
        this.__computeFunctionList.forEach((t4) => {
          const n3 = t4(e2, i2);
          if (void 0 !== n3) for (const t5 in n3) i2[t5] = n3[t5];
        }), this.emit("computed", Object.assign(Object.assign(Object.assign({}, e2), i2), { stopPropagation: n2, stopImmediatePropagation: s2, preventDefault: o2 }));
      }
    }
    compute(t3, e2) {
      for (const e3 of t3) this.__computeFunctionCreatorList.includes(e3) || (this.__computeFunctionCreatorList.push(e3), this.__computeFunctionList.push(e3()));
      this.on("computed", e2);
    }
    beforeEach(t3) {
      super.beforeEach((e2, n2) => {
        var s2;
        (null === (s2 = this.c) || void 0 === s2 ? void 0 : s2.name) ? t3(e2, n2) : n2();
      });
    }
    get(t3) {
      return this.__pluginContexts.find((e2) => t3 === e2.name);
    }
    set(t3) {
      this.__options = Object.assign(Object.assign({}, this.__options), t3);
    }
    emit2(t3, e2, n2) {
      this.c = n2, this.emit(t3, Object.assign(Object.assign({}, e2), { type: t3 }), () => {
        this.emit("at:after", Object.assign(Object.assign({}, e2), { name: t3, __type: t3 }));
      });
    }
    destroy() {
      this.emit("u"), super.destroy();
    }
  };
  var x = (r2) => Math.sqrt(r2.x * r2.x + r2.y * r2.y), y = (r2, a2) => r2.x * a2.x + r2.y * a2.y, e$1 = (r2, a2) => {
    var t3 = x(r2) * x(a2);
    if (0 === t3) return 0;
    var h2 = y(r2, a2) / t3;
    return h2 > 1 && (h2 = 1), Math.acos(h2);
  }, n = (r2, a2) => r2.x * a2.y - a2.x * r2.y, o = (r2) => r2 / Math.PI * 180, s = (r2, a2) => {
    var t3 = e$1(r2, a2);
    return n(r2, a2) > 0 && (t3 *= -1), o(t3);
  }, u$1 = (x2, y2) => {
    if (0 !== x2 || 0 !== y2) return Math.abs(x2) >= Math.abs(y2) ? 0 < x2 ? i$3 : a$2 : 0 < y2 ? d$1 : r$4;
  };
  function p$1() {
    let n2 = 0, e2 = 0;
    return function(o2, r2) {
      const { prevVecotr: i2, startVecotr: a2, activeVecotr: c2 } = r2;
      return c2 && (e2 = Math.round(s(c2, i2)), n2 = Math.round(s(c2, a2))), { angle: n2, deltaAngle: e2 };
    };
  }
  function d() {
    return function(t3) {
      const { prevInput: e2 } = t3;
      let o$12 = 0, r2 = 0, i2 = 0;
      if (void 0 !== e2 && (o$12 = t3.x - e2.x, r2 = t3.y - e2.y, 0 !== o$12 || 0 !== r2)) {
        const t4 = Math.sqrt(Math.pow(o$12, 2) + Math.pow(r2, 2));
        i2 = Math.round(o(Math.acos(Math.abs(o$12) / t4)));
      }
      return { deltaX: o$12, deltaY: r2, deltaXYAngle: i2 };
    };
  }
  function h$1() {
    let t3, n2 = 0, u2 = 0, s2 = 0, p2 = 0, d2 = 0;
    return function(h2) {
      const { phase: l3, startInput: f2 } = h2;
      return c$3 === l3 ? (n2 = 0, u2 = 0, s2 = 0, p2 = 0, d2 = 0) : o$1 === l3 && (n2 = Math.round(h2.points[0][n$1] - f2.points[0][n$1]), u2 = Math.round(h2.points[0][e$2] - f2.points[0][e$2]), s2 = Math.abs(n2), p2 = Math.abs(u2), d2 = Math.round(x({ x: s2, y: p2 })), t3 = u$1(n2, u2)), { displacementX: n2, displacementY: u2, distanceX: s2, distanceY: p2, distance: d2, overallDirection: t3 };
    };
  }
  function l() {
    let t3 = 1;
    return function(n2, o2) {
      let r2 = 1;
      const { prevVecotr: i2, startVecotr: a2, activeVecotr: c2 } = o2;
      return c2 && (r2 = p$3(x(c2) / x(i2)), t3 = p$3(x(c2) / x(a2))), { scale: t3, deltaScale: r2 };
    };
  }
  function f() {
    let t$12, n2, e2 = 0, r2 = 0, i2 = 0, a2 = 0;
    return function(c2) {
      if (void 0 !== c2) {
        n2 = n2 || c2.startInput;
        const u2 = c2.timestamp - n2.timestamp;
        if (t < u2) {
          const s2 = c2.x - n2.x, p2 = c2.y - n2.y;
          i2 = Math.round(s2 / u2 * 100) / 100, a2 = Math.round(p2 / u2 * 100) / 100, e2 = Math.abs(i2), r2 = Math.abs(a2), t$12 = u$1(s2, p2), n2 = c2;
        }
      }
      return { velocityX: e2, velocityY: r2, speedX: i2, speedY: a2, direction: t$12 };
    };
  }
  function M() {
    let t3 = 0;
    return function(n2) {
      const { phase: e2 } = n2;
      return c$3 === e2 && (t3 = n2.pointLength), { maxPointLength: t3 };
    };
  }
  function v(t3) {
    return { x: t3.points[1][n$1] - t3.points[0][n$1], y: t3.points[1][e$2] - t3.points[0][e$2] };
  }
  function m$1() {
    let t3, n2, e2;
    return function(o2) {
      const { prevInput: r2, startMultiInput: i2 } = o2;
      return void 0 !== i2 && void 0 !== r2 && o2.id !== i2.id && 1 < r2.pointLength && 1 < o2.pointLength ? (t3 = v(i2), n2 = v(r2), e2 = v(o2)) : e2 = void 0, { startVecotr: t3, prevVecotr: n2, activeVecotr: e2 };
    };
  }
  const m = { name: "tap", pointLength: 1, tapTimes: 1, waitNextTapTime: 300, maxDistance: 2, maxDistanceFromPrevTap: 9, maxPressTime: 250 };
  function r$2(r2, s2) {
    const c2 = O(m, s2);
    let p2, u2, x$1, T = 0;
    function f2() {
      T = 0, p2 = void 0, u2 = void 0;
    }
    return r2.compute([h$1, M], (t3) => {
      if (j(c2)) return;
      const { phase: i2, x: o2, y: m2 } = t3;
      u$3 === i2 && (c2.state = 0, !function() {
        const { startInput: e2, pointLength: n2, timestamp: a2 } = t3, i3 = a2 - e2.timestamp, { distance: o3, maxPointLength: m3 } = t3;
        return m3 === c2.pointLength && 0 === n2 && c2.maxDistance >= o3 && c2.maxPressTime > i3;
      }() ? (f2(), c2.state = 2) : (clearTimeout(x$1), function(t4, e2) {
        if (void 0 !== p2) {
          const n2 = x({ x: t4.x - p2.x, y: t4.y - p2.y });
          return p2 = t4, e2.maxDistanceFromPrevTap >= n2;
        }
        return p2 = t4, true;
      }({ x: o2, y: m2 }, c2) && function(t4) {
        const e2 = performance.now();
        if (void 0 === u2) return u2 = e2, true;
        {
          const n2 = e2 - u2;
          return u2 = e2, n2 < t4;
        }
      }(c2.waitNextTapTime) ? T++ : T = 1, 0 == T % c2.tapTimes ? (c2.state = 1, r2.emit2(c2.name, t3, c2), f2()) : x$1 = setTimeout(() => {
        c2.state = 2, f2();
      }, c2.waitNextTapTime)));
    }), c2;
  }
  const p = { name: "pan", threshold: 10, pointLength: 1 };
  function u(u2, d$12) {
    const f$1 = O(p, d$12);
    return u2.compute([f, h$1, d], (t3) => {
      if (g$1(f$1), j(f$1)) return;
      const c2 = function() {
        const { pointLength: e2, distance: n2 } = t3;
        return f$1.pointLength === e2 && f$1.threshold <= n2;
      }();
      if (f$1.state = b(c2, f$1.state, t3.phase), c2 || h$3(f$1.state)) {
        const { name: e2 } = f$1;
        u2.emit2(e2, t3, f$1), u2.emit2(e2 + v$1(f$1.state), t3, f$1), ![u$3, s$1].includes(t3.phase) && t3.direction && u2.emit2(e2 + t3.direction, t3, f$1);
      }
    }), f$1;
  }
  const c$1 = { name: "swipe", threshold: 10, velocity: 0.3, pointLength: 1 };
  function a(a2, r2) {
    const s2 = O(c$1, r2);
    return a2.compute([h$1, f, M], (t3) => {
      if (s2.state = 0, !s2.disabled && function() {
        if (u$3 !== t3.phase) return false;
        const { velocityX: o2, velocityY: n2, distance: i2, maxPointLength: c2 } = t3;
        return c2 === s2.pointLength && 0 === t3.points.length && s2.threshold < i2 && s2.velocity < Math.max(o2, n2);
      }()) {
        const { name: e2 } = s2;
        s2.state = 1, a2.emit2(e2, t3, s2), a2.emit2(e2 + t3.direction, t3, s2);
      }
    }), s2;
  }
  const r$1 = { name: "press", pointLength: 1, maxDistance: 9, minPressTime: 251 };
  function c(c2, u2) {
    const p2 = O(r$1, u2);
    let f2 = 0;
    return c2.compute([h$1], (t3) => {
      if (j(p2)) return;
      const { phase: o2, startInput: r2, pointLength: u3 } = t3;
      if (c$3 === o2 && p2.pointLength === u3) g$1(p2), clearTimeout(f2), f2 = setTimeout(() => {
        p2.state = 1, c2.emit2(p2.name, t3, p2);
      }, p2.minPressTime);
      else if (u$3 === o2 && 1 === p2.state) c2.emit2(`${p2.name}${r$4}`, t3, p2);
      else if (1 !== p2.state) {
        const e2 = t3.timestamp - r2.timestamp;
        (!function() {
          const { distance: e3 } = t3;
          return e3 && p2.maxDistance > e3;
        }() || p2.minPressTime > e2 && [u$3, s$1].includes(o2)) && (clearTimeout(f2), p2.state = 2);
      }
    }), p2;
  }
  const i$2 = { name: "pinch", threshold: 0, pointLength: 2 };
  function r(r2, m2) {
    const p2 = O(i$2, m2);
    return r2.compute([m$1, l], (t3) => {
      if (g$1(p2), j(p2)) return;
      const c2 = function() {
        const { pointLength: e2, scale: n2, deltaScale: o2, phase: a2 } = t3;
        return p2.pointLength === e2 && p2.threshold < Math.abs(n2 - 1);
      }();
      p2.state = b(c2, p2.state, t3.phase);
      const { name: h2 } = p2;
      if (c2 || h$3(p2.state)) {
        r2.emit2(h2, t3, p2);
        const { deltaScale: e2 } = t3;
        1 !== e2 && r2.emit2(h2 + (1 < e2 ? "in" : "out"), t3, p2);
      }
      const i2 = v$1(p2.state);
      i2 && r2.emit2(h2 + i2, t3, p2);
    }), p2;
  }
  const h = { name: "rotate", threshold: 0, pointLength: 2 };
  function i$1(i2, m2) {
    const u2 = O(h, m2);
    return i2.compute([m$1, p$1], (t3) => {
      if (j(u2)) return;
      g$1(u2);
      const r2 = function() {
        const { pointLength: e2, angle: n2 } = t3;
        return u2.pointLength === e2 && u2.threshold < Math.abs(n2);
      }();
      u2.state = b(r2, u2.state, t3.phase);
      const { name: c2 } = u2;
      (r2 || h$3(u2.state)) && i2.emit2(c2, t3, u2);
      const h2 = v$1(u2.state);
      h2 && i2.emit2(c2 + h2, t3, u2);
    }), u2;
  }
  function e(e2) {
    e2.use(r$2, { name: "doubletap", tapTimes: 2 });
    const a2 = e2.get("doubletap");
    let o2;
    return e2.beforeEach((t3, e3) => {
      "tap" === t3 ? (clearTimeout(o2), o2 = setTimeout(() => {
        [0, 2].includes(a2.state) && e3();
      }, 300)) : e3();
    }), a2;
  }
  class i extends l$1 {
    constructor(t3, u$12) {
      super(t3, u$12), this.use(r$2), this.use(u), this.use(a), this.use(c), this.use(r), this.use(i$1);
    }
  }
  i.STATE_POSSIBLE = 0, i.STATE_START = 4, i.STATE_MOVE = 5, i.STATE_END = 1, i.STATE_CANCELLED = 3, i.STATE_FAILED = 2, i.STATE_RECOGNIZED = 1, i.tap = r$2, i.pan = u, i.swipe = a, i.press = c, i.rotate = i$1, i.pinch = r, i.doubletap = e;
  class PopsUtils {
    constructor() {
      __publicField(this, "AnyTouch", () => {
        return i;
      });
    }
    /**
     * 判断是否是window，例如window、self、globalThis
     * @param target
     */
    isWin(target) {
      var _a2;
      if (typeof target !== "object") {
        return false;
      }
      if (target instanceof Node) {
        return false;
      }
      if (target === globalThis) {
        return true;
      }
      if (target === window) {
        return true;
      }
      if (target === self) {
        return true;
      }
      if (target === PopsCore.globalThis) {
        return true;
      }
      if (target === PopsCore.window) {
        return true;
      }
      if (target === PopsCore.self) {
        return true;
      }
      if (typeof unsafeWindow !== "undefined" && target === unsafeWindow) {
        return true;
      }
      if (((_a2 = target == null ? void 0 : target.Math) == null ? void 0 : _a2.toString()) !== "[object Math]") {
        return false;
      }
      return true;
    }
    isDOM(target) {
      return target instanceof Node;
    }
    /**
     * 删除对象上的属性
     * @param target
     * @param propName
     */
    delete(target, propName) {
      if (typeof Reflect === "object" && Reflect.deleteProperty) {
        Reflect.deleteProperty(target, propName);
      } else {
        delete target[propName];
      }
    }
    assign(target = {}, source = {}, isAdd = false) {
      let UtilsContext = this;
      if (source == null) {
        return target;
      }
      if (target == null) {
        target = {};
      }
      if (Array.isArray(source)) {
        let canTraverse = source.filter((item) => {
          return typeof item === "object";
        });
        if (!canTraverse.length) {
          return source;
        }
      }
      if (isAdd) {
        for (const sourceKeyName in source) {
          const targetKeyName = sourceKeyName;
          let targetValue = target[targetKeyName];
          let sourceValue = source[sourceKeyName];
          if (typeof sourceValue === "object" && sourceValue != null && sourceKeyName in target && !UtilsContext.isDOM(sourceValue)) {
            target[sourceKeyName] = UtilsContext.assign(targetValue, sourceValue, isAdd);
            continue;
          }
          target[sourceKeyName] = sourceValue;
        }
      } else {
        for (const targetKeyName in target) {
          if (targetKeyName in source) {
            let targetValue = target[targetKeyName];
            let sourceValue = source[targetKeyName];
            if (typeof sourceValue === "object" && sourceValue != null && !UtilsContext.isDOM(sourceValue) && Object.keys(sourceValue).length) {
              target[targetKeyName] = UtilsContext.assign(targetValue, sourceValue, isAdd);
              continue;
            }
            target[targetKeyName] = sourceValue;
          }
        }
      }
      return target;
    }
    /**
     * 生成uuid
     */
    getRandomGUID() {
      var _a2, _b;
      if (typeof ((_b = (_a2 = PopsCore.globalThis) == null ? void 0 : _a2.crypto) == null ? void 0 : _b.randomUUID) === "function") {
        return PopsCore.globalThis.crypto.randomUUID();
      } else {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(charStr) {
          var randomValue = Math.random() * 16 | 0, randomCharValue = charStr === "x" ? randomValue : randomValue & 3 | 8;
          return randomCharValue.toString(16);
        });
      }
    }
    /**
     * 字符串转HTMLElement
     * @param elementString
     * @returns
     */
    parseTextToDOM(elementString) {
      elementString = elementString.replace(/^[\n|\s]*/g, "").replace(/[\n|\s]*$/g, "");
      let targetElement = popsDOMUtils.createElement("div", {
        innerHTML: elementString
      });
      return targetElement.firstChild;
    }
    contains(context2, target) {
      if (arguments.length === 1) {
        return this.contains(PopsCore.document.body || PopsCore.document.documentElement, arguments[0]);
      } else {
        if (target == null) {
          return false;
        }
        if (typeof target[Symbol.iterator] === "function") {
          let flag = true;
          for (const targetNode of target) {
            if (!context2.contains(targetNode)) {
              flag = false;
              break;
            }
          }
          return flag;
        } else {
          return context2.contains(target);
        }
      }
    }
    formatTime(text = /* @__PURE__ */ new Date(), formatType = "yyyy-MM-dd HH:mm:ss") {
      let time = text == null ? /* @__PURE__ */ new Date() : new Date(text);
      function checkTime(timeNum) {
        if (timeNum < 10)
          return "0" + timeNum;
        return timeNum;
      }
      function timeSystemChange(hourNum) {
        return hourNum > 12 ? hourNum - 12 : hourNum;
      }
      let timeRegexp = {
        yyyy: time.getFullYear(),
        /* 年 */
        MM: checkTime(time.getMonth() + 1),
        /* 月 */
        dd: checkTime(time.getDate()),
        /* 日 */
        HH: checkTime(time.getHours()),
        /* 时 (24小时制) */
        hh: checkTime(timeSystemChange(time.getHours())),
        /* 时 (12小时制) */
        mm: checkTime(time.getMinutes()),
        /* 分 */
        ss: checkTime(time.getSeconds())
        /* 秒 */
      };
      Object.keys(timeRegexp).forEach(function(key) {
        let replaecRegexp = new RegExp(key, "g");
        formatType = formatType.replace(replaecRegexp, timeRegexp[key]);
      });
      return formatType;
    }
    formatByteToSize(byteSize, addType = true) {
      byteSize = parseInt(byteSize.toString());
      if (isNaN(byteSize)) {
        throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");
      }
      let result2 = 0;
      let resultType = "KB";
      let sizeData = {};
      sizeData.B = 1;
      sizeData.KB = 1024;
      sizeData.MB = sizeData.KB * sizeData.KB;
      sizeData.GB = sizeData.MB * sizeData.KB;
      sizeData.TB = sizeData.GB * sizeData.KB;
      sizeData.PB = sizeData.TB * sizeData.KB;
      sizeData.EB = sizeData.PB * sizeData.KB;
      sizeData.ZB = sizeData.EB * sizeData.KB;
      sizeData.YB = sizeData.ZB * sizeData.KB;
      sizeData.BB = sizeData.YB * sizeData.KB;
      sizeData.NB = sizeData.BB * sizeData.KB;
      sizeData.DB = sizeData.NB * sizeData.KB;
      for (let key in sizeData) {
        result2 = byteSize / sizeData[key];
        resultType = key;
        if (sizeData.KB >= result2) {
          break;
        }
      }
      result2 = result2.toFixed(2);
      result2 = addType ? result2 + resultType.toString() : parseFloat(result2.toString());
      return result2;
    }
  }
  const popsUtils = new PopsUtils();
  class PopsDOMUtilsEvent {
    on(element, eventType, selector, callback2, option) {
      function getOption(args3, startIndex, option2) {
        if (typeof args3[startIndex] === "boolean") {
          option2.capture = args3[startIndex];
          if (typeof args3[startIndex + 1] === "boolean") {
            option2.once = args3[startIndex + 1];
          }
          if (typeof args3[startIndex + 2] === "boolean") {
            option2.passive = args3[startIndex + 2];
          }
        } else if (typeof args3[startIndex] === "object" && ("capture" in args3[startIndex] || "once" in args3[startIndex] || "passive" in args3[startIndex])) {
          option2.capture = args3[startIndex].capture;
          option2.once = args3[startIndex].once;
          option2.passive = args3[startIndex].passive;
        }
        return option2;
      }
      let DOMUtilsContext = this;
      let args2 = arguments;
      if (typeof element === "string") {
        element = PopsCore.document.querySelectorAll(element);
      }
      if (element == null) {
        return;
      }
      let elementList = [];
      if (element instanceof NodeList || Array.isArray(element)) {
        element = element;
        elementList = [...element];
      } else {
        elementList.push(element);
      }
      let eventTypeList = [];
      if (Array.isArray(eventType)) {
        eventTypeList = eventTypeList.concat(eventType);
      } else if (typeof eventType === "string") {
        eventTypeList = eventTypeList.concat(eventType.split(" "));
      }
      let _selector_ = selector;
      let _callback_ = callback2;
      let _option_ = {
        capture: false,
        once: false,
        passive: false
      };
      if (typeof selector === "function") {
        _selector_ = void 0;
        _callback_ = selector;
        _option_ = getOption(args2, 3, _option_);
      } else {
        _option_ = getOption(args2, 4, _option_);
      }
      function checkOptionOnceToRemoveEventListener() {
        if (_option_.once) {
          DOMUtilsContext.off(element, eventType, selector, callback2, option);
        }
      }
      elementList.forEach((elementItem) => {
        function ownCallBack(event) {
          let target = event.target;
          if (_selector_) {
            let totalParent = popsUtils.isWin(elementItem) ? PopsCore.document.documentElement : elementItem;
            if (target.matches(_selector_)) {
              _callback_.call(target, event);
              checkOptionOnceToRemoveEventListener();
            } else if (target.closest(_selector_) && totalParent.contains(target.closest(_selector_))) {
              let closestElement = target.closest(_selector_);
              OriginPrototype.Object.defineProperty(event, "target", {
                get() {
                  return closestElement;
                }
              });
              _callback_.call(closestElement, event);
              checkOptionOnceToRemoveEventListener();
            }
          } else {
            _callback_.call(elementItem, event);
            checkOptionOnceToRemoveEventListener();
          }
        }
        eventTypeList.forEach((eventName) => {
          elementItem.addEventListener(eventName, ownCallBack, _option_);
          if (_callback_ && _callback_.delegate) {
            elementItem.setAttribute("data-delegate", _selector_);
          }
          let elementEvents = elementItem[SymbolEvents] || {};
          elementEvents[eventName] = elementEvents[eventName] || [];
          elementEvents[eventName].push({
            selector: _selector_,
            option: _option_,
            callback: ownCallBack,
            originCallBack: _callback_
          });
          elementItem[SymbolEvents] = elementEvents;
        });
      });
    }
    off(element, eventType, selector, callback2, option, filter) {
      function getOption(args1, startIndex, option2) {
        if (typeof args1[startIndex] === "boolean") {
          option2.capture = args1[startIndex];
        } else if (typeof args1[startIndex] === "object" && "capture" in args1[startIndex]) {
          option2.capture = args1[startIndex].capture;
        }
        return option2;
      }
      let args2 = arguments;
      if (typeof element === "string") {
        element = PopsCore.document.querySelectorAll(element);
      }
      if (element == null) {
        return;
      }
      let elementList = [];
      if (element instanceof NodeList || Array.isArray(element)) {
        element = element;
        elementList = [...element];
      } else {
        elementList.push(element);
      }
      let eventTypeList = [];
      if (Array.isArray(eventType)) {
        eventTypeList = eventTypeList.concat(eventType);
      } else if (typeof eventType === "string") {
        eventTypeList = eventTypeList.concat(eventType.split(" "));
      }
      let _selector_ = selector;
      let _callback_ = callback2;
      let _option_ = {
        capture: false
      };
      if (typeof selector === "function") {
        _selector_ = void 0;
        _callback_ = selector;
        _option_ = getOption(args2, 3, _option_);
      } else {
        _option_ = getOption(args2, 4, _option_);
      }
      elementList.forEach((elementItem) => {
        let elementEvents = elementItem[SymbolEvents] || {};
        eventTypeList.forEach((eventName) => {
          let handlers = elementEvents[eventName] || [];
          if (typeof filter === "function") {
            handlers = handlers.filter(filter);
          }
          for (let index = 0; index < handlers.length; index++) {
            let handler = handlers[index];
            let flag = false;
            if (!_selector_ || handler.selector === _selector_) {
              flag = true;
            }
            if (!_callback_ || handler.callback === _callback_ || handler.originCallBack === _callback_) {
              flag = true;
            }
            if (flag) {
              elementItem.removeEventListener(eventName, handler.callback, _option_);
              handlers.splice(index--, 1);
            }
          }
          if (handlers.length === 0) {
            popsUtils.delete(elementEvents, eventType);
          }
        });
        elementItem[SymbolEvents] = elementEvents;
      });
    }
    /**
     * 取消绑定所有的事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType （可选）需要取消监听的事件
     */
    offAll(element, eventType) {
      if (typeof element === "string") {
        element = PopsCore.document.querySelectorAll(element);
      }
      if (element == null) {
        return;
      }
      let elementList = [];
      if (element instanceof NodeList || Array.isArray(element)) {
        elementList = [...element];
      } else {
        elementList.push(element);
      }
      let eventTypeList = [];
      if (Array.isArray(eventType)) {
        eventTypeList = eventTypeList.concat(eventType);
      } else if (typeof eventType === "string") {
        eventTypeList = eventTypeList.concat(eventType.split(" "));
      }
      elementList.forEach((elementItem) => {
        Object.getOwnPropertySymbols(elementItem).forEach((__symbolEvents) => {
          if (!__symbolEvents.toString().startsWith("Symbol(events_")) {
            return;
          }
          let elementEvents = elementItem[__symbolEvents] || {};
          let iterEventNameList = eventTypeList.length ? eventTypeList : Object.keys(elementEvents);
          iterEventNameList.forEach((eventName) => {
            let handlers = elementEvents[eventName];
            if (!handlers) {
              return;
            }
            for (const handler of handlers) {
              elementItem.removeEventListener(eventName, handler.callback, {
                capture: handler["option"]["capture"]
              });
            }
            popsUtils.delete(elementItem[__symbolEvents], eventName);
          });
        });
      });
    }
    /**
     * 等待文档加载完成后执行指定的函数
     * @param callback 需要执行的函数
     * @example
     * DOMUtils.ready(function(){
     *   console.log("文档加载完毕")
     * })
     */
    ready(callback2) {
      if (typeof callback2 !== "function") {
        return;
      }
      function checkDOMReadyState() {
        try {
          if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
            return true;
          } else {
            return false;
          }
        } catch (error2) {
          return false;
        }
      }
      function completed() {
        removeDomReadyListener();
        callback2();
      }
      let targetList = [
        {
          target: PopsCore.document,
          eventType: "DOMContentLoaded",
          callback: completed
        },
        {
          target: PopsCore.window,
          eventType: "load",
          callback: completed
        }
      ];
      function addDomReadyListener() {
        for (let index = 0; index < targetList.length; index++) {
          let item = targetList[index];
          item.target.addEventListener(item.eventType, item.callback);
        }
      }
      function removeDomReadyListener() {
        for (let index = 0; index < targetList.length; index++) {
          let item = targetList[index];
          item.target.removeEventListener(item.eventType, item.callback);
        }
      }
      if (checkDOMReadyState()) {
        setTimeout(callback2);
      } else {
        addDomReadyListener();
      }
    }
    /**
     * 主动触发事件
     * @param element 需要触发的元素|元素数组|window
     * @param eventType 需要触发的事件
     * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
     * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click")
     * DOMUtils.trigger("a.xx","click")
     * // 触发元素a.xx的click、tap、hover事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
     * DOMUtils.trigger("a.xx",["click","tap","hover"])
     */
    trigger(element, eventType, details, useDispatchToTriggerEvent = true) {
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      let elementList = [];
      if (element instanceof NodeList || Array.isArray(element)) {
        element = element;
        elementList = [...element];
      } else {
        elementList = [element];
      }
      let eventTypeList = [];
      if (Array.isArray(eventType)) {
        eventTypeList = eventType;
      } else if (typeof eventType === "string") {
        eventTypeList = eventType.split(" ");
      }
      elementList.forEach((elementItem) => {
        let events = elementItem[SymbolEvents] || {};
        eventTypeList.forEach((_eventType_) => {
          let event = null;
          if (details && details instanceof Event) {
            event = details;
          } else {
            event = new Event(_eventType_);
            if (details) {
              Object.keys(details).forEach((keyName) => {
                event[keyName] = details[keyName];
              });
            }
          }
          if (useDispatchToTriggerEvent == false && _eventType_ in events) {
            events[_eventType_].forEach((eventsItem) => {
              eventsItem.callback(event);
            });
          } else {
            elementItem.dispatchEvent(event);
          }
        });
      });
    }
    /**
     * 绑定或触发元素的click事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.click(document.querySelector("a.xx"))
     * DOMUtils.click("a.xx")
     * DOMUtils.click("a.xx"，function(){
     *  console.log("触发click事件成功")
     * })
     * */
    click(element, handler, details, useDispatchToTriggerEvent) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      if (handler == null) {
        DOMUtilsContext.trigger(element, "click", details, useDispatchToTriggerEvent);
      } else {
        DOMUtilsContext.on(element, "click", null, handler);
      }
    }
    /**
     * 绑定或触发元素的blur事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的blur事件
     * DOMUtils.blur(document.querySelector("a.xx"))
     * DOMUtils.blur("a.xx")
     * DOMUtils.blur("a.xx"，function(){
     *  console.log("触发blur事件成功")
     * })
     * */
    blur(element, handler, details, useDispatchToTriggerEvent) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      if (handler === null) {
        DOMUtilsContext.trigger(element, "blur", details, useDispatchToTriggerEvent);
      } else {
        DOMUtilsContext.on(element, "blur", null, handler);
      }
    }
    /**
     * 绑定或触发元素的focus事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的focus事件
     * DOMUtils.focus(document.querySelector("a.xx"))
     * DOMUtils.focus("a.xx")
     * DOMUtils.focus("a.xx"，function(){
     *  console.log("触发focus事件成功")
     * })
     * */
    focus(element, handler, details, useDispatchToTriggerEvent) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      if (handler == null) {
        DOMUtilsContext.trigger(element, "focus", details, useDispatchToTriggerEvent);
      } else {
        DOMUtilsContext.on(element, "focus", null, handler);
      }
    }
    /**
     * 当鼠标移入或移出元素时触发事件
     * @param element 当前元素
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的移入或移出
     * DOMUtils.hover(document.querySelector("a.xx"),()=>{
     *   console.log("移入/移除");
     * })
     * DOMUtils.hover("a.xx",()=>{
     *   console.log("移入/移除");
     * })
     */
    hover(element, handler, option) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      DOMUtilsContext.on(element, "mouseenter", null, handler, option);
      DOMUtilsContext.on(element, "mouseleave", null, handler, option);
    }
    /**
     * 当按键松开时触发事件
     * keydown - > keypress - > keyup
     * @param target 当前元素
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键松开
     * DOMUtils.keyup(document.querySelector("a.xx"),()=>{
     *   console.log("按键松开");
     * })
     * DOMUtils.keyup("a.xx",()=>{
     *   console.log("按键松开");
     * })
     */
    keyup(target, handler, option) {
      let DOMUtilsContext = this;
      if (target == null) {
        return;
      }
      if (typeof target === "string") {
        target = PopsCore.document.querySelector(target);
      }
      DOMUtilsContext.on(target, "keyup", null, handler, option);
    }
    /**
     * 当按键按下时触发事件
     * keydown - > keypress - > keyup
     * @param target 目标
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键按下
     * DOMUtils.keydown(document.querySelector("a.xx"),()=>{
     *   console.log("按键按下");
     * })
     * DOMUtils.keydown("a.xx",()=>{
     *   console.log("按键按下");
     * })
     */
    keydown(target, handler, option) {
      let DOMUtilsContext = this;
      if (target == null) {
        return;
      }
      if (typeof target === "string") {
        target = PopsCore.document.querySelector(target);
      }
      DOMUtilsContext.on(target, "keydown", null, handler, option);
    }
    /**
     * 当按键按下时触发事件
     * keydown - > keypress - > keyup
     * @param target 目标
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键按下
     * DOMUtils.keypress(document.querySelector("a.xx"),()=>{
     *   console.log("按键按下");
     * })
     * DOMUtils.keypress("a.xx",()=>{
     *   console.log("按键按下");
     * })
     */
    keypress(target, handler, option) {
      let DOMUtilsContext = this;
      if (target == null) {
        return;
      }
      if (typeof target === "string") {
        target = PopsCore.document.querySelector(target);
      }
      DOMUtilsContext.on(target, "keypress", null, handler, option);
    }
    preventEvent(element, eventNameList = [], capture) {
      function stopEvent(event) {
        event == null ? void 0 : event.preventDefault();
        event == null ? void 0 : event.stopPropagation();
        event == null ? void 0 : event.stopImmediatePropagation();
        return false;
      }
      if (arguments.length === 1) {
        return stopEvent(arguments[0]);
      } else {
        if (typeof eventNameList === "string") {
          eventNameList = [eventNameList];
        }
        eventNameList.forEach((eventName) => {
          element.addEventListener(eventName, stopEvent, {
            capture: Boolean(capture)
          });
        });
      }
    }
  }
  class PopsDOMUtils extends PopsDOMUtilsEvent {
    /** 获取 animationend 在各个浏览器的兼容名 */
    getAnimationEndNameList() {
      return [
        "webkitAnimationEnd",
        "mozAnimationEnd",
        "MSAnimationEnd",
        "oanimationend",
        "animationend"
      ];
    }
    /** 获取 transitionend 在各个浏览器的兼容名 */
    getTransitionEndNameList() {
      return [
        "webkitTransitionEnd",
        "mozTransitionEnd",
        "MSTransitionEnd",
        "otransitionend",
        "transitionend"
      ];
    }
    /**
     * 实现jQuery中的$().offset();
     * @param element
     * @param calcScroll 计算滚动距离
     */
    offset(element, calcScroll = true) {
      let rect = element.getBoundingClientRect();
      let win = element.ownerDocument.defaultView;
      let resultRect = new DOMRect(calcScroll ? parseFloat((rect.left + ((win == null ? void 0 : win.pageXOffset) || 0)).toString()) : rect.left, calcScroll ? parseFloat((rect.top + ((win == null ? void 0 : win.pageYOffset) || 0)).toString()) : rect.top, rect.width, rect.height);
      return resultRect;
    }
    width(element, isShow = false, parent) {
      let DOMUtilsContext = this;
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      if (popsUtils.isWin(element)) {
        return PopsCore.window.document.documentElement.clientWidth;
      }
      if (element.nodeType === 9) {
        element = element;
        return Math.max(element.body.scrollWidth, element.documentElement.scrollWidth, element.body.offsetWidth, element.documentElement.offsetWidth, element.documentElement.clientWidth);
      }
      if (isShow || !isShow && popsDOMUtils.isShow(element)) {
        element = element;
        if (parseFloat(popsDOMUtils.getStyleValue(element, "width").toString()) > 0) {
          return parseFloat(popsDOMUtils.getStyleValue(element, "width").toString());
        }
        if (element.offsetWidth > 0) {
          let borderLeftWidth = popsDOMUtils.getStyleValue(element, "borderLeftWidth");
          let borderRightWidth = popsDOMUtils.getStyleValue(element, "borderRightWidth");
          let paddingLeft = popsDOMUtils.getStyleValue(element, "paddingLeft");
          let paddingRight = popsDOMUtils.getStyleValue(element, "paddingRight");
          let backHeight = parseFloat(element.offsetWidth.toString()) - parseFloat(borderLeftWidth.toString()) - parseFloat(borderRightWidth.toString()) - parseFloat(paddingLeft.toString()) - parseFloat(paddingRight.toString());
          return parseFloat(backHeight.toString());
        }
        return 0;
      } else {
        element = element;
        let { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
        let width = DOMUtilsContext.width(cloneNode, true, parent);
        recovery();
        return width;
      }
    }
    height(element, isShow = false, parent) {
      let DOMUtilsContext = this;
      if (popsUtils.isWin(element)) {
        return PopsCore.window.document.documentElement.clientHeight;
      }
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      if (element.nodeType === 9) {
        element = element;
        return Math.max(element.body.scrollHeight, element.documentElement.scrollHeight, element.body.offsetHeight, element.documentElement.offsetHeight, element.documentElement.clientHeight);
      }
      if (isShow || !isShow && popsDOMUtils.isShow(element)) {
        element = element;
        if (parseFloat(popsDOMUtils.getStyleValue(element, "height").toString()) > 0) {
          return parseFloat(popsDOMUtils.getStyleValue(element, "height").toString());
        }
        if (element.offsetHeight > 0) {
          let borderTopWidth = popsDOMUtils.getStyleValue(element, "borderTopWidth");
          let borderBottomWidth = popsDOMUtils.getStyleValue(element, "borderBottomWidth");
          let paddingTop = popsDOMUtils.getStyleValue(element, "paddingTop");
          let paddingBottom = popsDOMUtils.getStyleValue(element, "paddingBottom");
          let backHeight = parseFloat(element.offsetHeight.toString()) - parseFloat(borderTopWidth.toString()) - parseFloat(borderBottomWidth.toString()) - parseFloat(paddingTop.toString()) - parseFloat(paddingBottom.toString());
          return parseFloat(backHeight.toString());
        }
        return 0;
      } else {
        element = element;
        let { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
        let height = DOMUtilsContext.height(cloneNode, true, parent);
        recovery();
        return height;
      }
    }
    outerWidth(element, isShow = false, parent) {
      let DOMUtilsContext = this;
      if (popsUtils.isWin(element)) {
        return PopsCore.window.innerWidth;
      }
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      element = element;
      if (isShow || !isShow && popsDOMUtils.isShow(element)) {
        let style = getComputedStyle(element, null);
        let marginLeft = popsDOMUtils.getStyleValue(style, "marginLeft");
        let marginRight = popsDOMUtils.getStyleValue(style, "marginRight");
        return element.offsetWidth + marginLeft + marginRight;
      } else {
        let { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
        let outerWidth = DOMUtilsContext.outerWidth(cloneNode, true, parent);
        recovery();
        return outerWidth;
      }
    }
    outerHeight(element, isShow = false, parent) {
      let DOMUtilsContext = this;
      if (popsUtils.isWin(element)) {
        return PopsCore.window.innerHeight;
      }
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      element = element;
      if (isShow || !isShow && popsDOMUtils.isShow(element)) {
        let style = getComputedStyle(element, null);
        let marginTop = popsDOMUtils.getStyleValue(style, "marginTop");
        let marginBottom = popsDOMUtils.getStyleValue(style, "marginBottom");
        return element.offsetHeight + marginTop + marginBottom;
      } else {
        let { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
        let outerHeight = DOMUtilsContext.outerHeight(cloneNode, true, parent);
        recovery();
        return outerHeight;
      }
    }
    /**
     * 添加className
     * @param element 目标元素
     * @param className className属性
     */
    addClassName(element, className) {
      if (typeof className !== "string") {
        return;
      }
      if (className.trim() === "") {
        return;
      }
      element.classList.add(className);
    }
    /**
     * 删除className
     * @param element 目标元素
     * @param className className属性
     */
    removeClassName(element, className) {
      if (typeof className !== "string") {
        return;
      }
      if (className.trim() === "") {
        return;
      }
      element.classList.remove(className);
    }
    /**
     * 判断元素是否包含某个className
     * @param element 目标元素
     * @param className className属性
     */
    containsClassName(element, className) {
      if (typeof className !== "string") {
        return false;
      }
      if (className.trim() === "") {
        return false;
      }
      return element.classList.contains(className);
    }
    css(element, property, value) {
      function handlePixe(propertyName, propertyValue) {
        let allowAddPixe = [
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "font-size"
        ];
        if (typeof propertyValue === "number") {
          propertyValue = propertyValue.toString();
        }
        if (typeof propertyValue === "string" && allowAddPixe.includes(propertyName) && propertyValue.match(/[0-9]$/gi)) {
          propertyValue = propertyValue + "px";
        }
        return propertyValue;
      }
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      if (typeof property === "string") {
        if (value == null) {
          return getComputedStyle(element).getPropertyValue(property);
        } else {
          if (value === "string" && value.includes("!important")) {
            element.style.setProperty(property, value, "important");
          } else {
            value = handlePixe(property, value);
            element.style.setProperty(property, value);
          }
        }
      } else if (typeof property === "object") {
        for (let prop in property) {
          if (typeof property[prop] === "string" && property[prop].includes("!important")) {
            element.style.setProperty(prop, property[prop], "important");
          } else {
            property[prop] = handlePixe(prop, property[prop]);
            element.style.setProperty(prop, property[prop]);
          }
        }
      }
    }
    /**
     * 创建元素
     * @param tagName 标签名
     * @param property 属性
     * @param attributes 元素上的自定义属性
     * @example
     * // 创建一个DIV元素，且属性class为xxx
     * DOMUtils.createElement("div",undefined,{ class:"xxx" });
     * > <div class="xxx"></div>
     * @example
     * // 创建一个DIV元素
     * DOMUtils.createElement("div");
     * > <div></div>
     * @example
     * // 创建一个DIV元素
     * DOMUtils.createElement("div","测试");
     * > <div>测试</div>
     */
    createElement(tagName, property, attributes) {
      let tempElement = PopsCore.document.createElement(tagName);
      if (typeof property === "string") {
        tempElement.innerHTML = property;
        return tempElement;
      }
      if (property == null) {
        property = {};
      }
      if (attributes == null) {
        attributes = {};
      }
      Object.keys(property).forEach((key) => {
        let value = property[key];
        tempElement[key] = value;
      });
      Object.keys(attributes).forEach((key) => {
        let value = attributes[key];
        if (typeof value === "object") {
          value = JSON.stringify(value);
        } else if (typeof value === "function") {
          value = value.toString();
        }
        tempElement.setAttribute(key, value);
      });
      return tempElement;
    }
    /**
     * 获取文字的位置信息
     * @param input 输入框
     * @param selectionStart 起始位置
     * @param selectionEnd 结束位置
     * @param debug 是否是调试模式
     * + true 不删除临时节点元素
     * + false 删除临时节点元素
     */
    getTextBoundingRect(input, selectionStart, selectionEnd, debug) {
      if (!input || !("value" in input))
        return input;
      if (typeof selectionStart == "string")
        selectionStart = parseFloat(selectionStart);
      if (typeof selectionStart != "number" || isNaN(selectionStart)) {
        selectionStart = 0;
      }
      if (selectionStart < 0)
        selectionStart = 0;
      else
        selectionStart = Math.min(input.value.length, selectionStart);
      if (typeof selectionEnd == "string")
        selectionEnd = parseFloat(selectionEnd);
      if (typeof selectionEnd != "number" || isNaN(selectionEnd) || selectionEnd < selectionStart) {
        selectionEnd = selectionStart;
      }
      if (selectionEnd < 0)
        selectionEnd = 0;
      else
        selectionEnd = Math.min(input.value.length, selectionEnd);
      if (typeof input.createTextRange == "function") {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart("character", selectionStart);
        range.moveEnd("character", selectionEnd - selectionStart);
        return range.getBoundingClientRect();
      }
      var offset = getInputOffset(), topPos = offset.top, leftPos = offset.left, width = getInputCSS("width", true), height = getInputCSS("height", true);
      var cssDefaultStyles = "white-space:pre;padding:0;margin:0;", listOfModifiers = [
        "direction",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-variant",
        "font-weight",
        "font-style",
        "letter-spacing",
        "line-height",
        "text-align",
        "text-indent",
        "text-transform",
        "word-wrap",
        "word-spacing"
      ];
      topPos += getInputCSS("padding-top", true);
      topPos += getInputCSS("border-top-width", true);
      leftPos += getInputCSS("padding-left", true);
      leftPos += getInputCSS("border-left-width", true);
      leftPos += 1;
      for (var i2 = 0; i2 < listOfModifiers.length; i2++) {
        var property = listOfModifiers[i2];
        cssDefaultStyles += property + ":" + getInputCSS(property) + ";";
      }
      var text = input.value || "G", textLen = text.length, fakeClone = document.createElement("div");
      if (selectionStart > 0)
        appendPart(0, selectionStart);
      var fakeRange = appendPart(selectionStart, selectionEnd);
      if (textLen > selectionEnd)
        appendPart(selectionEnd, textLen);
      fakeClone.style.cssText = cssDefaultStyles;
      fakeClone.style.position = "absolute";
      fakeClone.style.top = topPos + "px";
      fakeClone.style.left = leftPos + "px";
      fakeClone.style.width = width + "px";
      fakeClone.style.height = height + "px";
      PopsCore.document.body.appendChild(fakeClone);
      var returnValue = fakeRange.getBoundingClientRect();
      if (!debug)
        fakeClone.parentNode.removeChild(fakeClone);
      return returnValue;
      function appendPart(start, end) {
        var span = document.createElement("span");
        span.style.cssText = cssDefaultStyles;
        span.textContent = text.substring(start, end);
        fakeClone.appendChild(span);
        return span;
      }
      function getInputOffset() {
        var body = document.body, win = document.defaultView, docElem = document.documentElement, box = document.createElement("div");
        box.style.paddingLeft = box.style.width = "1px";
        body.appendChild(box);
        var isBoxModel = box.offsetWidth == 2;
        body.removeChild(box);
        box = input.getBoundingClientRect();
        var clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, scrollTop = (
          // @ts-ignore
          win.pageYOffset || isBoxModel && docElem.scrollTop || body.scrollTop
        ), scrollLeft = (
          // @ts-ignore
          win.pageXOffset || isBoxModel && docElem.scrollLeft || body.scrollLeft
        );
        return {
          // @ts-ignore
          top: box.top + scrollTop - clientTop,
          // @ts-ignore
          left: box.left + scrollLeft - clientLeft
        };
      }
      function getInputCSS(prop, isnumber) {
        var val = PopsCore.document.defaultView.getComputedStyle(input, null).getPropertyValue(prop);
        return isnumber ? parseFloat(val) : val;
      }
    }
    /**
     * 使用className来隐藏元素
     * @param ele
     * @param isImportant 是否使用!important
     */
    cssHide(ele, isImportant = false) {
      if (ele == null) {
        return;
      }
      if (isImportant) {
        ele.classList.add("pops-hide-important");
      } else {
        ele.classList.add("pops-hide");
      }
    }
    /**
     * cssHide的反向使用
     * @param ele
     */
    cssShow(ele) {
      if (ele == null) {
        return;
      }
      ele.classList.remove("pops-hide-important");
      ele.classList.remove("pops-hide");
    }
    parseHTML(html, useParser = false, isComplete = false) {
      function parseHTMLByDOMParser() {
        let parser = new DOMParser();
        if (isComplete) {
          return parser.parseFromString(html, "text/html");
        } else {
          return parser.parseFromString(html, "text/html").body.firstChild;
        }
      }
      function parseHTMLByCreateDom() {
        let tempDIV = PopsCore.document.createElement("div");
        tempDIV.innerHTML = html;
        if (isComplete) {
          return tempDIV;
        } else {
          return tempDIV.firstChild;
        }
      }
      if (useParser) {
        return parseHTMLByDOMParser();
      } else {
        return parseHTMLByCreateDom();
      }
    }
    /**
     * 函数在元素内部末尾添加子元素或HTML字符串
     * @param element 目标元素
     * @param content 子元素或HTML字符串
     * @example
     * // 元素a.xx的内部末尾添加一个元素
     * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.append("a.xx","'<b class="xx"></b>")
     * */
    append(element, content) {
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      function elementAppendChild(ele, text) {
        if (typeof content === "string") {
          ele.insertAdjacentHTML("beforeend", text);
        } else {
          ele.appendChild(text);
        }
      }
      if (Array.isArray(content) || content instanceof NodeList) {
        let fragment = PopsCore.document.createDocumentFragment();
        content.forEach((ele) => {
          if (typeof ele === "string") {
            ele = this.parseHTML(ele, true, false);
          }
          fragment.appendChild(ele);
        });
        element.appendChild(fragment);
      } else {
        elementAppendChild(element, content);
      }
    }
    /**
     * 把元素标签添加到head内
     */
    appendHead($ele) {
      if (PopsCore.document.head) {
        PopsCore.document.head.appendChild($ele);
      } else {
        PopsCore.document.documentElement.appendChild($ele);
      }
    }
    /**
     * 把元素添加进body内
     * @param $ele
     */
    appendBody($ele) {
      if (PopsCore.document.body) {
        PopsCore.document.body.appendChild($ele);
      } else {
        PopsCore.document.documentElement.appendChild($ele);
      }
    }
    /**
     * 判断元素是否已显示或已连接
     * @param element
     */
    isShow(element) {
      return Boolean(element.getClientRects().length);
    }
    /**
     * 用于显示元素并获取它的高度宽度等其它属性
     * @param $ele
     * @param parent 父元素
     */
    showElement($ele, ownParent) {
      let $cloneNode = $ele.cloneNode(true);
      $cloneNode.setAttribute("style", "visibility: hidden !important;display:block !important;");
      let $parent = PopsCore.document.documentElement;
      let $root = $ele.getRootNode();
      if (ownParent == null) {
        if ($root == $ele) {
          $parent = PopsCore.document.documentElement;
        } else {
          $parent = $root;
        }
      } else {
        $parent = ownParent;
      }
      $parent.appendChild($cloneNode);
      return {
        /**
         * 强制显示的克隆的元素
         */
        cloneNode: $cloneNode,
        /**
         * 恢复修改的style
         */
        recovery() {
          $cloneNode.remove();
        }
      };
    }
    /**
     * 获取元素上的Float格式的属性px
     * @param element
     * @param styleName style名
     */
    getStyleValue(element, styleName) {
      let view = null;
      let styles = null;
      if (element instanceof CSSStyleDeclaration) {
        styles = element;
      } else {
        view = element.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window;
        }
        styles = view.getComputedStyle(element);
      }
      let value = parseFloat(styles[styleName]);
      if (isNaN(value)) {
        return 0;
      } else {
        return value;
      }
    }
    /**
     * 在元素前面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx前面添加一个元素
     * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.before("a.xx","'<b class="xx"></b>")
     * */
    before(element, content) {
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      if (typeof content === "string") {
        element.insertAdjacentHTML("beforebegin", content);
      } else {
        element.parentElement.insertBefore(content, element);
      }
    }
    /**
     * 在元素后面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx后面添加一个元素
     * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.after("a.xx","'<b class="xx"></b>")
     * */
    after(element, content) {
      if (typeof element === "string") {
        element = PopsCore.document.querySelector(element);
      }
      if (element == null) {
        return;
      }
      if (typeof content === "string") {
        element.insertAdjacentHTML("afterend", content);
      } else {
        element.parentElement.insertBefore(content, element.nextSibling);
      }
    }
  }
  const popsDOMUtils = new PopsDOMUtils();
  const PopsInstanceUtils = {
    /**
     * 获取页面中最大的z-index的元素信息
     * @param deviation 获取最大的z-index值的偏移，默认是+1
     * @param node 进行判断的元素，默认是document
     * @param ignoreCallBack 执行元素处理时调用的函数，返回false可忽略不想要处理的元素
     * @example
     * Utils.getMaxZIndexNodeInfo();
     * > {
     *   node: ...,
     *   zIndex: 1001
     * }
     **/
    getMaxZIndexNodeInfo(deviation = 1, target = PopsCore.document, ignoreCallBack) {
      deviation = Number.isNaN(deviation) ? 1 : deviation;
      const maxZIndexCompare = 2 * Math.pow(10, 9);
      let zIndex = 0;
      let maxZIndexNode = null;
      function isVisibleNode($css) {
        return $css.position !== "static" && $css.display !== "none";
      }
      function queryMaxZIndex($ele) {
        if (typeof ignoreCallBack === "function") {
          let ignoreResult = ignoreCallBack($ele);
          if (typeof ignoreResult === "boolean" && !ignoreResult) {
            return;
          }
        }
        const nodeStyle = PopsCore.window.getComputedStyle($ele);
        if (isVisibleNode(nodeStyle)) {
          let nodeZIndex = parseInt(nodeStyle.zIndex);
          if (!isNaN(nodeZIndex)) {
            if (nodeZIndex > zIndex) {
              zIndex = nodeZIndex;
              maxZIndexNode = $ele;
            }
          }
          if ($ele.shadowRoot != null && $ele instanceof ShadowRoot) {
            $ele.shadowRoot.querySelectorAll("*").forEach(($shadowEle) => {
              queryMaxZIndex($shadowEle);
            });
          }
        }
      }
      target.querySelectorAll("*").forEach(($ele, index) => {
        queryMaxZIndex($ele);
      });
      zIndex += deviation;
      if (zIndex >= maxZIndexCompare) {
        zIndex = maxZIndexCompare;
      }
      return {
        node: maxZIndexNode,
        zIndex
      };
    },
    /**
     * 获取pops所有弹窗中的最大的z-index
     * @param deviation
     */
    getPopsMaxZIndex(deviation = 1) {
      deviation = Number.isNaN(deviation) ? 1 : deviation;
      const maxZIndex = 2 * Math.pow(10, 9);
      let zIndex = 0;
      let maxZIndexNode = null;
      function isVisibleNode($css) {
        return $css.position !== "static" && $css.display !== "none";
      }
      Object.keys(pops.config.layer).forEach((layerName) => {
        let layerList = pops.config.layer[layerName];
        for (let index = 0; index < layerList.length; index++) {
          const layer = layerList[index];
          let nodeStyle = window.getComputedStyle(layer.animElement);
          if (isVisibleNode(nodeStyle)) {
            let nodeZIndex = parseInt(nodeStyle.zIndex);
            if (!isNaN(nodeZIndex)) {
              if (nodeZIndex > zIndex) {
                zIndex = nodeZIndex;
                maxZIndexNode = layer.animElement;
              }
            }
          }
        }
      });
      zIndex += deviation;
      let isOverMaxZIndex = zIndex >= maxZIndex;
      if (isOverMaxZIndex) {
        zIndex = maxZIndex;
      }
      return { zIndex, animElement: maxZIndexNode, isOverMaxZIndex };
    },
    /**
     * 获取页面中最大的z-index
     * @param deviation 获取最大的z-index值的偏移，默认是+1
     * @example
     * getMaxZIndex();
     * > 1001
     **/
    getMaxZIndex(deviation = 1) {
      return this.getMaxZIndexNodeInfo(deviation).zIndex;
    },
    /**
     * 获取CSS Rule
     * @param sheet
     * @returns
     */
    getKeyFrames(sheet) {
      let result2 = {};
      Object.keys(sheet.cssRules).forEach((key) => {
        if (sheet.cssRules[key].type === 7 && sheet.cssRules[key].name.startsWith("pops-anim-")) {
          result2[sheet.cssRules[key].name] = sheet.cssRules[key];
        }
      });
      return result2;
    },
    /**
     * 删除配置中对应的对象
     * @param moreLayerConfigList 配置实例列表
     * @param  guid 唯一标识
     * @param isAll 是否全部删除
     */
    removeInstance(moreLayerConfigList, guid, isAll = false) {
      function removeItem(layerCommonConfig) {
        var _a2, _b, _c, _d;
        if (typeof layerCommonConfig.beforeRemoveCallBack === "function") {
          layerCommonConfig.beforeRemoveCallBack(layerCommonConfig);
        }
        (_a2 = layerCommonConfig == null ? void 0 : layerCommonConfig.animElement) == null ? void 0 : _a2.remove();
        (_b = layerCommonConfig == null ? void 0 : layerCommonConfig.popsElement) == null ? void 0 : _b.remove();
        (_c = layerCommonConfig == null ? void 0 : layerCommonConfig.maskElement) == null ? void 0 : _c.remove();
        (_d = layerCommonConfig == null ? void 0 : layerCommonConfig.$shadowContainer) == null ? void 0 : _d.remove();
      }
      moreLayerConfigList.forEach((layerConfigList) => {
        layerConfigList.forEach((layerConfigItem, index) => {
          if (isAll || layerConfigItem["guid"] === guid) {
            if (pops.config.animation.hasOwnProperty(layerConfigItem.animElement.getAttribute("anim"))) {
              layerConfigItem.animElement.style.width = "100%";
              layerConfigItem.animElement.style.height = "100%";
              layerConfigItem.animElement.style["animation-name"] = layerConfigItem.animElement.getAttribute("anim") + "-reverse";
              if (pops.config.animation.hasOwnProperty(layerConfigItem.animElement.style["animation-name"])) {
                popsDOMUtils.on(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), function() {
                  removeItem(layerConfigItem);
                }, {
                  capture: true
                });
              } else {
                removeItem(layerConfigItem);
              }
            } else {
              removeItem(layerConfigItem);
            }
            layerConfigList.splice(index, 1);
          }
        });
      });
      return moreLayerConfigList;
    },
    /**
     * 隐藏
     * @param popsType
     * @param layerConfigList
     * @param guid
     * @param config
     * @param animElement
     * @param maskElement
     */
    hide(popsType, layerConfigList, guid, config, animElement, maskElement) {
      let popsElement = animElement.querySelector(".pops[type-value]");
      if (popsType === "drawer") {
        let drawerConfig = config;
        setTimeout(() => {
          maskElement.style.setProperty("display", "none");
          if (["top", "bottom"].includes(drawerConfig.direction)) {
            popsElement.style.setProperty("height", "0");
          } else if (["left", "right"].includes(drawerConfig.direction)) {
            popsElement.style.setProperty("width", "0");
          } else {
            console.error("未知direction：", drawerConfig.direction);
          }
        }, drawerConfig.closeDelay);
      } else {
        layerConfigList.forEach((layerConfigItem) => {
          if (layerConfigItem.guid === guid) {
            layerConfigItem.animElement.style.width = "100%";
            layerConfigItem.animElement.style.height = "100%";
            layerConfigItem.animElement.style["animation-name"] = layerConfigItem.animElement.getAttribute("anim") + "-reverse";
            if (pops.config.animation.hasOwnProperty(layerConfigItem.animElement.style["animation-name"])) {
              let animationendCallBack2 = function() {
                layerConfigItem.animElement.style.display = "none";
                if (layerConfigItem.maskElement) {
                  layerConfigItem.maskElement.style.display = "none";
                }
                popsDOMUtils.off(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), animationendCallBack2, {
                  capture: true
                });
              };
              popsDOMUtils.on(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), animationendCallBack2, {
                capture: true
              });
            } else {
              layerConfigItem.animElement.style.display = "none";
              if (layerConfigItem.maskElement) {
                layerConfigItem.maskElement.style.display = "none";
              }
            }
            return;
          }
        });
      }
    },
    /**
     * 显示
     * @param popsType
     * @param layerConfigList
     * @param guid
     * @param config
     * @param animElement
     * @param maskElement
     */
    show(popsType, layerConfigList, guid, config, animElement, maskElement) {
      let popsElement = animElement.querySelector(".pops[type-value]");
      if (popsType === "drawer") {
        let drawerConfig = config;
        setTimeout(() => {
          maskElement.style.setProperty("display", "");
          let direction = drawerConfig.direction;
          let size = drawerConfig.size.toString();
          if (["top", "bottom"].includes(direction)) {
            popsElement.style.setProperty("height", size);
          } else if (["left", "right"].includes(direction)) {
            popsElement.style.setProperty("width", size);
          } else {
            console.error("未知direction：", direction);
          }
        }, drawerConfig.openDelay);
      } else {
        layerConfigList.forEach((layerConfigItem) => {
          if (layerConfigItem.guid === guid) {
            layerConfigItem.animElement.style.width = "";
            layerConfigItem.animElement.style.height = "";
            layerConfigItem.animElement.style["animation-name"] = layerConfigItem.animElement.getAttribute("anim").replace("-reverse", "");
            if (pops.config.animation.hasOwnProperty(layerConfigItem.animElement.style["animation-name"])) {
              let animationendCallBack2 = function() {
                popsDOMUtils.off(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), animationendCallBack2, {
                  capture: true
                });
              };
              layerConfigItem.animElement.style.display = "";
              if (layerConfigItem.maskElement) {
                layerConfigItem.maskElement.style.display = "";
              }
              popsDOMUtils.on(layerConfigItem.animElement, popsDOMUtils.getAnimationEndNameList(), animationendCallBack2, {
                capture: true
              });
            } else {
              layerConfigItem.animElement.style.display = "";
              if (layerConfigItem.maskElement) {
                layerConfigItem.maskElement.style.display = "";
              }
            }
          }
          return;
        });
      }
    },
    /**
     * 关闭
     * @param popsType
     * @param layerConfigList
     * @param guid
     * @param config
     * @param animElement
     */
    close(popsType, layerConfigList, guid, config, animElement) {
      let popsElement = animElement.querySelector(".pops[type-value]");
      let drawerConfig = config;
      function transitionendEvent() {
        function closeCallBack(event) {
          if (event.propertyName !== "transform") {
            return;
          }
          popsDOMUtils.off(popsElement, popsDOMUtils.getTransitionEndNameList(), void 0, closeCallBack);
          PopsInstanceUtils.removeInstance([layerConfigList], guid);
        }
        popsDOMUtils.on(popsElement, popsDOMUtils.getTransitionEndNameList(), closeCallBack);
        let popsTransForm = getComputedStyle(popsElement).transform;
        if (popsTransForm !== "none") {
          popsDOMUtils.trigger(popsElement, popsDOMUtils.getTransitionEndNameList(), void 0, true);
          return;
        }
        if (["top"].includes(drawerConfig.direction)) {
          popsElement.style.setProperty("transform", "translateY(-100%)");
        } else if (["bottom"].includes(drawerConfig.direction)) {
          popsElement.style.setProperty("transform", "translateY(100%)");
        } else if (["left"].includes(drawerConfig.direction)) {
          popsElement.style.setProperty("transform", "translateX(-100%)");
        } else if (["right"].includes(drawerConfig.direction)) {
          popsElement.style.setProperty("transform", "translateX(100%)");
        } else {
          console.error("未知direction：", drawerConfig.direction);
        }
      }
      if (popsType === "drawer") {
        setTimeout(() => {
          transitionendEvent();
        }, drawerConfig.closeDelay);
      } else {
        PopsInstanceUtils.removeInstance([layerConfigList], guid);
      }
    },
    /**
     * 拖拽元素
     * 说明：
     * + 元素的position为absolute或者fixed
     * + 会为元素的
     * @param moveElement 需要拖拽的元素
     * @param options 配置
     */
    drag(moveElement, options) {
      options = Object.assign({
        limit: true,
        extraDistance: 3,
        container: PopsCore.globalThis,
        triggerClick: true
      }, options);
      let isMove = false;
      let clickElementLeftOffset = 0;
      let clickElementTopOffset = 0;
      let AnyTouch = popsUtils.AnyTouch();
      let anyTouchElement = new AnyTouch(options.dragElement, {
        preventDefault(event) {
          if (typeof options.preventEvent === "function") {
            return options.preventEvent(event);
          } else {
            return true;
          }
        }
      });
      popsDOMUtils.css(options.dragElement, {
        cursor: "move"
      });
      function getTransform(element) {
        var _a2;
        let transform_left = 0;
        let transform_top = 0;
        let elementTransform = PopsCore.globalThis.getComputedStyle(element).transform;
        if (elementTransform !== "none" && elementTransform != null && elementTransform !== "") {
          let elementTransformSplit = (_a2 = elementTransform.match(/\((.+)\)/)) == null ? void 0 : _a2[1].split(",");
          transform_left = Math.abs(parseInt(elementTransformSplit[4]));
          transform_top = Math.abs(parseInt(elementTransformSplit[5]));
        }
        return {
          transformLeft: transform_left,
          transformTop: transform_top
        };
      }
      function changeMoveElementStyle(element) {
        let old_transitionDuration = element.style.transitionDuration;
        if (globalThis.getComputedStyle(element).transitionDuration !== "0s") {
          element.style.transitionDuration = "0s";
        }
        return () => {
          element.style.transitionDuration = old_transitionDuration;
        };
      }
      function getContainerWidthOrHeight(container) {
        container = container ?? globalThis;
        return {
          width: popsDOMUtils.width(container),
          height: popsDOMUtils.height(container)
        };
      }
      function getContainerTopOrLeft(container) {
        container = container ?? globalThis;
        if (popsUtils.isWin(container)) {
          return {
            left: 0,
            top: 0
          };
        } else {
          let rect = container.getBoundingClientRect();
          return {
            left: rect.left,
            top: rect.top
          };
        }
      }
      let transformInfo = getTransform(moveElement);
      let transformLeft = transformInfo.transformLeft;
      let transformTop = transformInfo.transformTop;
      let resumeMoveElementStyle = null;
      anyTouchElement.on("pan", function(event) {
        if (!isMove) {
          isMove = true;
          let rect = options.dragElement.getBoundingClientRect();
          clickElementLeftOffset = event.x - rect.left;
          clickElementTopOffset = event.y - rect.top;
          transformInfo = getTransform(moveElement);
          transformLeft = transformInfo.transformLeft;
          transformTop = transformInfo.transformTop;
          resumeMoveElementStyle = changeMoveElementStyle(moveElement);
        }
        let currentMoveLeftOffset = event.x - clickElementLeftOffset + transformLeft;
        let currentMoveTopOffset = event.y - clickElementTopOffset + transformTop;
        if (event.phase === "move") {
          if (options.limit) {
            let maxLeftOffset = getContainerWidthOrHeight(options.container).width - popsDOMUtils.width(moveElement) + transformLeft;
            let { left: minLeftOffset, top: minTopOffset } = getContainerTopOrLeft(options.container);
            let maxTopOffset = getContainerWidthOrHeight(options.container).height - popsDOMUtils.height(moveElement) + transformTop;
            if (currentMoveLeftOffset > maxLeftOffset) {
              currentMoveLeftOffset = maxLeftOffset;
            }
            if (currentMoveTopOffset > maxTopOffset) {
              currentMoveTopOffset = maxTopOffset;
            }
            if (currentMoveLeftOffset - options.extraDistance * 2 < minLeftOffset + transformLeft) {
              currentMoveLeftOffset = minLeftOffset + transformLeft;
              currentMoveLeftOffset += options.extraDistance;
            } else {
              currentMoveLeftOffset -= options.extraDistance;
            }
            if (currentMoveTopOffset - options.extraDistance * 2 < minTopOffset + transformTop) {
              currentMoveTopOffset = minTopOffset + transformTop;
              currentMoveTopOffset += options.extraDistance;
            } else {
              currentMoveTopOffset -= options.extraDistance;
            }
          }
          if (typeof options.moveCallBack === "function") {
            options.moveCallBack(moveElement, currentMoveLeftOffset, currentMoveTopOffset);
          }
          popsDOMUtils.css(moveElement, {
            left: currentMoveLeftOffset + "px",
            top: currentMoveTopOffset + "px"
          });
        }
        if (event.phase === "end") {
          isMove = false;
          if (typeof resumeMoveElementStyle === "function") {
            resumeMoveElementStyle();
            resumeMoveElementStyle = null;
          }
          if (typeof options.endCallBack === "function") {
            options.endCallBack(moveElement, currentMoveLeftOffset, currentMoveTopOffset);
          }
        }
      });
      if (options.triggerClick) {
        anyTouchElement.on(["tap"], function(event) {
          event.changedPoints.forEach((item) => {
            popsDOMUtils.trigger(item.target, "click", void 0, true);
          });
        });
      }
    },
    /**
     * 排序数组
     * @param getBeforeValueFun
     * @param getAfterValueFun
     * @param sortByDesc 排序是否降序，默认降序
     */
    sortElementListByProperty(getBeforeValueFun, getAfterValueFun, sortByDesc = true) {
      if (typeof sortByDesc !== "boolean") {
        throw "参数 sortByDesc 必须为boolean类型";
      }
      if (getBeforeValueFun == null || getAfterValueFun == null) {
        throw "获取前面的值或后面的值的方法不能为空";
      }
      return function(after_obj, before_obj) {
        var beforeValue = getBeforeValueFun(before_obj);
        var afterValue = getAfterValueFun(after_obj);
        if (sortByDesc) {
          if (afterValue > beforeValue) {
            return -1;
          } else if (afterValue < beforeValue) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (afterValue < beforeValue) {
            return -1;
          } else if (afterValue > beforeValue) {
            return 1;
          } else {
            return 0;
          }
        }
      };
    }
  };
  var indexCSS = '@charset "utf-8";\r\n.pops * {\r\n	-webkit-box-sizing: border-box;\r\n	box-sizing: border-box;\r\n	margin: 0;\r\n	padding: 0;\r\n	-webkit-tap-highlight-color: transparent;\r\n	/* 代替::-webkit-scrollbar */\r\n	scrollbar-width: thin;\r\n}\r\n.pops {\r\n	--pops-bg-opacity: 1;\r\n	--pops-bd-opacity: 1;\r\n	--pops-font-size: 16px;\r\n	interpolate-size: allow-keywords;\r\n}\r\n.pops-mask {\r\n	--pops-mask-bg-opacity: 0.4;\r\n}\r\n.pops {\r\n	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	border-radius: 4px;\r\n	border: 1px solid rgb(235, 238, 245, var(--pops-bd-opacity));\r\n	font-size: var(--pops-font-size);\r\n	line-height: normal;\r\n	box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);\r\n	box-sizing: border-box;\r\n	overflow: hidden;\r\n	transition: all 0.35s;\r\n	display: flex;\r\n	flex-direction: column;\r\n}\r\n.pops-anim {\r\n	position: fixed;\r\n	top: 0;\r\n	right: 0;\r\n	bottom: 0;\r\n	left: 0;\r\n	width: 100%;\r\n	height: 100%;\r\n}\r\n.pops-anim[anim=""] {\r\n	top: unset;\r\n	right: unset;\r\n	bottom: unset;\r\n	left: unset;\r\n	width: unset;\r\n	height: unset;\r\n	transition: none;\r\n}\r\n/* 底部图标动画和样式 */\r\n.pops i.pops-bottom-icon[is-loading="true"] {\r\n	animation: rotating 2s linear infinite;\r\n}\r\n.pops i.pops-bottom-icon {\r\n	height: 1em;\r\n	width: 1em;\r\n	line-height: normal;\r\n	display: inline-flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	position: relative;\r\n	fill: currentColor;\r\n	color: inherit;\r\n	font-size: inherit;\r\n}\r\n\r\n/* 遮罩层样式 */\r\n.pops-mask {\r\n	position: fixed;\r\n	top: 0;\r\n	right: 0;\r\n	bottom: 0;\r\n	left: 0;\r\n	width: 100%;\r\n	height: 100%;\r\n	border: 0;\r\n	border-radius: 0;\r\n	background-color: rgba(0, 0, 0, var(--pops-mask-bg-opacity));\r\n	box-shadow: none;\r\n	transition: none;\r\n}\r\n\r\n.pops-header-controls button.pops-header-control[type][data-header] {\r\n	float: right;\r\n	margin: 0 0;\r\n	outline: 0;\r\n	border: 0;\r\n	border-color: rgb(136, 136, 136, var(--pops-bd-opacity));\r\n	background-color: transparent;\r\n	color: #888;\r\n	cursor: pointer;\r\n}\r\n.pops-header-controls button.pops-header-control[type="max"],\r\n.pops-header-controls button.pops-header-control[type="mise"],\r\n.pops-header-controls button.pops-header-control[type="min"] {\r\n	outline: 0 !important;\r\n	border: 0;\r\n	border-color: rgb(136, 136, 136, var(--pops-bd-opacity));\r\n	background-color: transparent;\r\n	color: rgb(136, 136, 136);\r\n	cursor: pointer;\r\n	transition: all 0.3s ease-in-out;\r\n}\r\nbutton.pops-header-control i {\r\n	color: rgb(144, 147, 153);\r\n	font-size: inherit;\r\n	display: inline-flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	position: relative;\r\n	fill: currentColor;\r\n}\r\nbutton.pops-header-control svg {\r\n	height: 1.25em;\r\n	width: 1.25em;\r\n}\r\nbutton.pops-header-control {\r\n	right: 15px;\r\n	padding: 0;\r\n	border: none;\r\n	outline: 0;\r\n	background: 0 0;\r\n	cursor: pointer;\r\n	position: unset;\r\n	line-height: normal;\r\n}\r\nbutton.pops-header-control i:hover {\r\n	color: rgb(64, 158, 255);\r\n}\r\n.pops-header-controls[data-margin] button.pops-header-control {\r\n	margin: 0 6px;\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n.pops[type-value] .pops-header-controls {\r\n	display: flex;\r\n	gap: 6px;\r\n}\r\n\r\n/* 标题禁止选中文字 */\r\n.pops [class^="pops"][class*="-title"] p[pops] {\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	user-select: none;\r\n}\r\n';
  var ninePalaceGridPositionCSS = '.pops[position="top_left"] {\r\n	position: fixed;\r\n	top: 0;\r\n	left: 0;\r\n}\r\n.pops[position="top"] {\r\n	position: fixed;\r\n	top: 0;\r\n	left: 50%;\r\n	transform: translateX(-50%);\r\n}\r\n.pops[position="top_right"] {\r\n	position: fixed;\r\n	top: 0;\r\n	right: 0;\r\n}\r\n.pops[position="center_left"] {\r\n	position: fixed;\r\n	top: 50%;\r\n	left: 0;\r\n	transform: translateY(-50%);\r\n}\r\n.pops[position="center"] {\r\n	position: fixed;\r\n	top: 50%;\r\n	left: 50%;\r\n	transform: translate(-50%, -50%);\r\n}\r\n.pops[position="center_right"] {\r\n	position: fixed;\r\n	top: 50%;\r\n	right: 0;\r\n	transform: translateY(-50%);\r\n}\r\n.pops[position="bottom_left"] {\r\n	position: fixed;\r\n	bottom: 0;\r\n	left: 0;\r\n}\r\n.pops[position="bottom"] {\r\n	position: fixed;\r\n	bottom: 0;\r\n	left: 50%;\r\n	transform: translate(-50%, 0);\r\n}\r\n.pops[position="bottom_right"] {\r\n	position: fixed;\r\n	right: 0;\r\n	bottom: 0;\r\n}\r\n';
  var scrollbarCSS = "/* firefox上暂不支持::-webkit-scrollbar */\r\n.pops ::-webkit-scrollbar {\r\n	width: 6px;\r\n	height: 0;\r\n}\r\n\r\n.pops ::-webkit-scrollbar-track {\r\n	width: 0;\r\n}\r\n.pops ::-webkit-scrollbar-thumb:hover {\r\n	background: rgb(178, 178, 178, var(--pops-bg-opacity));\r\n}\r\n.pops ::-webkit-scrollbar-thumb {\r\n	min-height: 28px;\r\n	border-radius: 2em;\r\n	background: rgb(204, 204, 204, var(--pops-bg-opacity));\r\n	background-clip: padding-box;\r\n}\r\n";
  var buttonCSS = '.pops {\r\n	--button-font-size: 14px;\r\n	--button-height: 32px;\r\n	--button-color: rgb(51, 51, 51);\r\n	--button-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));\r\n	--button-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));\r\n	--button-margin-top: 0px;\r\n	--button-margin-bottom: 0px;\r\n	--button-margin-left: 5px;\r\n	--button-margin-right: 5px;\r\n	--button-padding-top: 6px;\r\n	--button-padding-bottom: 6px;\r\n	--button-padding-left: 12px;\r\n	--button-padding-right: 12px;\r\n	--button-radius: 4px;\r\n\r\n	--container-title-height: 55px;\r\n	--container-bottom-btn-height: 55px;\r\n}\r\n.pops[data-bottom-btn="false"] {\r\n	--container-bottom-btn-height: 0px;\r\n}\r\n.pops button {\r\n	white-space: nowrap;\r\n	float: right;\r\n	display: inline-block;\r\n	margin: var(--button-margin-top) var(--button-margin-right)\r\n		var(--button-margin-bottom) var(--button-margin-left);\r\n	padding: var(--button-padding-top) var(--button-padding-right)\r\n		var(--button-padding-bottom) var(--button-padding-left);\r\n	outline: 0;\r\n}\r\n.pops button[data-has-icon="false"] .pops-bottom-icon {\r\n	display: none;\r\n}\r\n.pops button {\r\n	border-radius: var(--button-radius);\r\n	box-shadow: none;\r\n	font-weight: 400;\r\n	font-size: var(--button-font-size);\r\n	cursor: pointer;\r\n	transition: all 0.3s ease-in-out;\r\n}\r\n.pops button {\r\n	display: flex;\r\n	align-items: center;\r\n	height: var(--button-height);\r\n	line-height: normal;\r\n	box-sizing: border-box;\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	border: 1px solid var(--button-bd-color);\r\n}\r\n.pops button {\r\n	color: var(--button-color);\r\n	border-color: var(--button-bd-color);\r\n	background-color: var(--button-bg-color);\r\n}\r\n.pops button:active {\r\n	color: var(--button-color);\r\n	border-color: var(--button-bd-color);\r\n	background-color: var(--button-bg-color);\r\n	outline: 0;\r\n}\r\n.pops button:hover {\r\n	color: var(--button-color);\r\n	border-color: var(--button-bd-color);\r\n	background-color: var(--button-bg-color);\r\n}\r\n.pops button:focus-visible {\r\n	color: var(--button-color);\r\n	border-color: var(--button-bd-color);\r\n	background-color: var(--button-bg-color);\r\n}\r\n.pops button:disabled {\r\n	cursor: not-allowed;\r\n	color: var(--button-color);\r\n	border-color: var(--button-bd-color);\r\n	background-color: var(--button-bg-color);\r\n}\r\n.pops button.pops-button-large {\r\n	--button-height: 32px;\r\n	--button-padding-top: 12px;\r\n	--button-padding-bottom: 12px;\r\n	--button-padding-left: 19px;\r\n	--button-padding-right: 19px;\r\n	--button-font-size: 14px;\r\n	--button-border-radius: 4px;\r\n}\r\n\r\n.pops button.pops-button-small {\r\n	--button-height: 24px;\r\n	--button-padding-top: 5px;\r\n	--button-padding-bottom: 5px;\r\n	--button-padding-left: 11px;\r\n	--button-padding-right: 11px;\r\n	--button-font-size: 12px;\r\n	--button-border-radius: 4px;\r\n}\r\n.pops-panel-button-no-icon .pops-panel-button_inner i {\r\n	display: none;\r\n}\r\n.pops-panel-button-right-icon {\r\n}\r\n.pops-panel-button-right-icon .pops-panel-button_inner {\r\n	flex-direction: row-reverse;\r\n}\r\n.pops-panel-button-right-icon .pops-panel-button_inner i {\r\n}\r\n.pops-panel-button .pops-panel-button_inner i:has(svg),\r\n.pops-panel-button-right-icon .pops-panel-button-text {\r\n	margin-right: 6px;\r\n}\r\n\r\n.pops button[type="default"] {\r\n	--button-color: #333333;\r\n	--button-bd-color: #dcdfe6;\r\n	--button-bg-color: #ffffff;\r\n}\r\n.pops button[type="default"]:active {\r\n	--button-color: #409eff;\r\n	--button-bd-color: #409eff;\r\n	--button-bg-color: #ecf5ff;\r\n}\r\n.pops button[type="default"]:hover {\r\n	--button-color: #409eff;\r\n	--button-bd-color: #c6e2ff;\r\n	--button-bg-color: #ecf5ff;\r\n}\r\n.pops button[type="default"]:focus-visible {\r\n	outline: 2px solid #a0cfff;\r\n	outline-offset: 1px;\r\n}\r\n.pops button[type="default"]:disabled {\r\n	--button-color: #a8abb2;\r\n	--button-bd-color: #fff;\r\n	--button-bg-color: #e4e7ed;\r\n}\r\n\r\n.pops button[type="primary"] {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #409eff;\r\n	--button-bg-color: #409eff;\r\n}\r\n.pops button[type="primary"]:active {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #337ecc;\r\n	--button-bg-color: #337ecc;\r\n}\r\n.pops button[type="primary"]:hover {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #79bbff;\r\n	--button-bg-color: #79bbff;\r\n}\r\n.pops button[type="primary"]:focus-visible {\r\n	outline: 2px solid #a0cfff;\r\n	outline-offset: 1px;\r\n}\r\n.pops button[type="primary"]:disabled {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #a0cfff;\r\n	--button-bg-color: #a0cfff;\r\n}\r\n\r\n.pops button[type="success"] {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #4cae4c;\r\n	--button-bg-color: #5cb85c;\r\n}\r\n.pops button[type="success"]:active {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #529b2e;\r\n	--button-bg-color: #529b2e;\r\n}\r\n.pops button[type="success"]:hover {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #95d475;\r\n	--button-bg-color: #95d475;\r\n}\r\n.pops button[type="success"]:focus-visible {\r\n	outline: 2px solid #b3e19d;\r\n	outline-offset: 1px;\r\n}\r\n.pops button[type="success"]:disabled {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #b3e19d;\r\n	--button-bg-color: #b3e19d;\r\n}\r\n\r\n.pops button[type="info"] {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #909399;\r\n	--button-bg-color: #909399;\r\n}\r\n.pops button[type="info"]:active {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #73767a;\r\n	--button-bg-color: #73767a;\r\n}\r\n.pops button[type="info"]:hover {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #b1b3b8;\r\n	--button-bg-color: #b1b3b8;\r\n}\r\n.pops button[type="info"]:focus-visible {\r\n	outline: 2px solid #c8c9cc;\r\n	outline-offset: 1px;\r\n}\r\n.pops button[type="info"]:disabled {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #c8c9cc;\r\n	--button-bg-color: #c8c9cc;\r\n}\r\n\r\n.pops button[type="warning"] {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #e6a23c;\r\n	--button-bg-color: #e6a23c;\r\n}\r\n.pops button[type="warning"]:active {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #b88230;\r\n	--button-bg-color: #b88230;\r\n}\r\n.pops button[type="warning"]:hover {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #eebe77;\r\n	--button-bg-color: #eebe77;\r\n}\r\n.pops button[type="warning"]:focus-visible {\r\n	outline: 2px solid #f3d19e;\r\n	outline-offset: 1px;\r\n}\r\n.pops button[type="warning"]:disabled {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #f3d19e;\r\n	--button-bg-color: #f3d19e;\r\n}\r\n\r\n.pops button[type="danger"] {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #f56c6c;\r\n	--button-bg-color: #f56c6c;\r\n}\r\n.pops button[type="danger"]:active {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #c45656;\r\n	--button-bg-color: #c45656;\r\n}\r\n.pops button[type="danger"]:hover {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #f89898;\r\n	--button-bg-color: #f89898;\r\n}\r\n.pops button[type="danger"]:focus-visible {\r\n	outline: 2px solid #fab6b6;\r\n	outline-offset: 1px;\r\n}\r\n.pops button[type="danger"]:disabled {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #fab6b6;\r\n	--button-bg-color: #fab6b6;\r\n}\r\n\r\n.pops button[type="xiaomi-primary"] {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #ff5c00;\r\n	--button-bg-color: #ff5c00;\r\n}\r\n.pops button[type="xiaomi-primary"]:active {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #da4f00;\r\n	--button-bg-color: #da4f00;\r\n}\r\n.pops button[type="xiaomi-primary"]:hover {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #ff7e29;\r\n	--button-bg-color: #ff7e29;\r\n}\r\n.pops button[type="xiaomi-primary"]:focus-visible {\r\n	outline: 2px solid #fab6b6;\r\n	outline-offset: 1px;\r\n}\r\n.pops button[type="xiaomi-primary"]:disabled {\r\n	--button-color: #ffffff;\r\n	--button-bd-color: #fad5b6;\r\n	--button-bg-color: #fad5b6;\r\n}\r\n';
  var commonCSS = ".pops-flex-items-center {\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n.pops-flex-y-center {\r\n	display: flex;\r\n	justify-content: space-between;\r\n}\r\n.pops-flex-x-center {\r\n	display: flex;\r\n	align-content: center;\r\n}\r\n.pops-hide {\r\n	display: none;\r\n}\r\n.pops-hide-important {\r\n	display: none !important;\r\n}\r\n.pops-no-border {\r\n	border: 0;\r\n}\r\n.pops-no-border-important {\r\n	border: 0 !important;\r\n}\r\n.pops-user-select-none {\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-ms-user-select: none;\r\n	-moz-user-select: none;\r\n}\r\n.pops-line-height-center {\r\n	line-height: normal;\r\n	align-content: center;\r\n}\r\n.pops-width-fill {\r\n	width: -webkit-fill-available;\r\n	width: -moz-available;\r\n}\r\n";
  var animCSS = '@keyframes rotating {\r\n	0% {\r\n		transform: rotate(0);\r\n	}\r\n	to {\r\n		transform: rotate(360deg);\r\n	}\r\n}\r\n@keyframes iframeLoadingChange_85 {\r\n	0% {\r\n		background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n	}\r\n	20% {\r\n		background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));\r\n	}\r\n	40% {\r\n		background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));\r\n	}\r\n	60% {\r\n		background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));\r\n	}\r\n	80% {\r\n		background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));\r\n	}\r\n	100% {\r\n		background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));\r\n	}\r\n	from {\r\n		width: 75%;\r\n	}\r\n	to {\r\n		width: 100%;\r\n	}\r\n}\r\n@keyframes iframeLoadingChange {\r\n	0% {\r\n		background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n	}\r\n	20% {\r\n		background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));\r\n	}\r\n	40% {\r\n		background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));\r\n	}\r\n	60% {\r\n		background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));\r\n	}\r\n	80% {\r\n		background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));\r\n	}\r\n	100% {\r\n		background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));\r\n	}\r\n	from {\r\n		width: 0;\r\n	}\r\n	to {\r\n		width: 75%;\r\n	}\r\n}\r\n\r\n@keyframes searchSelectFalIn {\r\n	from {\r\n		opacity: 0;\r\n		display:none;\r\n	}\r\n	to {\r\n		display:block;\r\n		opacity: 1;\r\n	}\r\n}\r\n@keyframes searchSelectFalOut {\r\n	from {\r\n		display:block;\r\n		opacity: 1;\r\n	}\r\n	to {\r\n		opacity: 0;\r\n		display:none;\r\n	}\r\n}\r\n\r\n@keyframes pops-anim-wait-rotate {\r\n	form {\r\n		transform: rotate(0);\r\n	}\r\n	to {\r\n		transform: rotate(360deg);\r\n	}\r\n}\r\n@keyframes pops-anim-spread {\r\n	0% {\r\n		opacity: 0;\r\n		transform: scaleX(0);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: scaleX(1);\r\n	}\r\n}\r\n@keyframes pops-anim-shake {\r\n	0%,\r\n	100% {\r\n		transform: translateX(0);\r\n	}\r\n	10%,\r\n	30%,\r\n	50%,\r\n	70%,\r\n	90% {\r\n		transform: translateX(-10px);\r\n	}\r\n	20%,\r\n	40%,\r\n	60%,\r\n	80% {\r\n		transform: translateX(10px);\r\n	}\r\n}\r\n@keyframes pops-anim-rolling-left {\r\n	0% {\r\n		opacity: 0;\r\n		transform: translateX(-100%) rotate(-120deg);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: translateX(0) rotate(0);\r\n	}\r\n}\r\n@keyframes pops-anim-rolling-right {\r\n	0% {\r\n		opacity: 0;\r\n		transform: translateX(100%) rotate(120deg);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: translateX(0) rotate(0);\r\n	}\r\n}\r\n@keyframes pops-anim-slide-top {\r\n	0% {\r\n		opacity: 0;\r\n		transform: translateY(-200%);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: translateY(0);\r\n	}\r\n}\r\n@keyframes pops-anim-slide-bottom {\r\n	0% {\r\n		opacity: 0;\r\n		transform: translateY(200%);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: translateY(0);\r\n	}\r\n}\r\n@keyframes pops-anim-slide-left {\r\n	0% {\r\n		opacity: 0;\r\n		transform: translateX(-200%);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: translateX(0);\r\n	}\r\n}\r\n@keyframes pops-anim-slide-right {\r\n	0% {\r\n		transform: translateX(200%);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: translateX(0);\r\n	}\r\n}\r\n@keyframes pops-anim-fadein {\r\n	0% {\r\n		opacity: 0;\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n	}\r\n}\r\n@keyframes pops-anim-fadein-zoom {\r\n	0% {\r\n		opacity: 0;\r\n		transform: scale(0.5);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: scale(1);\r\n	}\r\n}\r\n@keyframes pops-anim-fadein-alert {\r\n	0% {\r\n		transform: scale(0.5);\r\n	}\r\n	45% {\r\n		transform: scale(1.05);\r\n	}\r\n	80% {\r\n		transform: scale(0.95);\r\n	}\r\n	100% {\r\n		transform: scale(1);\r\n	}\r\n}\r\n@keyframes pops-anim-don {\r\n	0% {\r\n		opacity: 0;\r\n		transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	2.08333% {\r\n		transform: matrix3d(\r\n			0.75266,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.76342,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	4.16667% {\r\n		transform: matrix3d(\r\n			0.81071,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.84545,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	6.25% {\r\n		transform: matrix3d(\r\n			0.86808,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.9286,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	8.33333% {\r\n		transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	10.4167% {\r\n		transform: matrix3d(\r\n			0.96482,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.05202,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	12.5% {\r\n		transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	14.5833% {\r\n		transform: matrix3d(\r\n			1.02563,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.09149,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	16.6667% {\r\n		transform: matrix3d(\r\n			1.04227,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.08453,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	18.75% {\r\n		transform: matrix3d(\r\n			1.05102,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.06666,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	20.8333% {\r\n		transform: matrix3d(\r\n			1.05334,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.04355,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	22.9167% {\r\n		transform: matrix3d(\r\n			1.05078,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.02012,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	25% {\r\n		transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	27.0833% {\r\n		transform: matrix3d(\r\n			1.03699,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.98534,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	29.1667% {\r\n		transform: matrix3d(\r\n			1.02831,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.97688,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	31.25% {\r\n		transform: matrix3d(\r\n			1.01973,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.97422,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	33.3333% {\r\n		transform: matrix3d(\r\n			1.01191,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.97618,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	35.4167% {\r\n		transform: matrix3d(\r\n			1.00526,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.98122,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	37.5% {\r\n		transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	39.5833% {\r\n		transform: matrix3d(\r\n			0.99617,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99433,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	41.6667% {\r\n		transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	43.75% {\r\n		transform: matrix3d(\r\n			0.99237,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00413,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	45.8333% {\r\n		transform: matrix3d(\r\n			0.99202,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00651,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	47.9167% {\r\n		transform: matrix3d(\r\n			0.99241,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00726,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	50% {\r\n		opacity: 1;\r\n		transform: matrix3d(\r\n			0.99329,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00671,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	52.0833% {\r\n		transform: matrix3d(\r\n			0.99447,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00529,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	54.1667% {\r\n		transform: matrix3d(\r\n			0.99577,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00346,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	56.25% {\r\n		transform: matrix3d(\r\n			0.99705,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.0016,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	58.3333% {\r\n		transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	60.4167% {\r\n		transform: matrix3d(\r\n			0.99921,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99884,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	62.5% {\r\n		transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	64.5833% {\r\n		transform: matrix3d(\r\n			1.00057,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99795,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	66.6667% {\r\n		transform: matrix3d(\r\n			1.00095,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99811,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	68.75% {\r\n		transform: matrix3d(\r\n			1.00114,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99851,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	70.8333% {\r\n		transform: matrix3d(\r\n			1.00119,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99903,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	72.9167% {\r\n		transform: matrix3d(\r\n			1.00114,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99955,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	75% {\r\n		transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	77.0833% {\r\n		transform: matrix3d(\r\n			1.00083,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00033,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	79.1667% {\r\n		transform: matrix3d(\r\n			1.00063,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00052,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	81.25% {\r\n		transform: matrix3d(\r\n			1.00044,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00058,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	83.3333% {\r\n		transform: matrix3d(\r\n			1.00027,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00053,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	85.4167% {\r\n		transform: matrix3d(\r\n			1.00012,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00042,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	87.5% {\r\n		transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	89.5833% {\r\n		transform: matrix3d(\r\n			0.99991,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00013,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	91.6667% {\r\n		transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	93.75% {\r\n		transform: matrix3d(\r\n			0.99983,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99991,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	95.8333% {\r\n		transform: matrix3d(\r\n			0.99982,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99985,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	97.9167% {\r\n		transform: matrix3d(\r\n			0.99983,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99984,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n}\r\n@keyframes pops-anim-roll {\r\n	0% {\r\n		transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\r\n	}\r\n	100% {\r\n		transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r\n	}\r\n}\r\n@keyframes pops-anim-sandra {\r\n	0% {\r\n		opacity: 0;\r\n		transform: scale3d(1.1, 1.1, 1);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: scale3d(1, 1, 1);\r\n	}\r\n}\r\n@keyframes pops-anim-gather {\r\n	0% {\r\n		opacity: 0;\r\n		transform: scale(5, 0);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: scale(1, 1);\r\n	}\r\n}\r\n@keyframes pops-anim-spread-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: scaleX(1);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: scaleX(0);\r\n	}\r\n}\r\n@keyframes pops-anim-shake-reverse {\r\n	0%,\r\n	100% {\r\n		transform: translateX(10px);\r\n	}\r\n	10%,\r\n	30%,\r\n	50%,\r\n	70%,\r\n	90% {\r\n		transform: translateX(-10px);\r\n	}\r\n	20%,\r\n	40%,\r\n	60%,\r\n	80% {\r\n		transform: translateX(0);\r\n	}\r\n}\r\n@keyframes pops-anim-rolling-left-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: translateX(0) rotate(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: translateX(-100%) rotate(-120deg);\r\n	}\r\n}\r\n@keyframes pops-anim-rolling-right-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: translateX(0) rotate(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: translateX(100%) rotate(120deg);\r\n	}\r\n}\r\n@keyframes pops-anim-slide-top-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: translateY(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: translateY(-200%);\r\n	}\r\n}\r\n@keyframes pops-anim-slide-bottom-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: translateY(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: translateY(200%);\r\n	}\r\n}\r\n@keyframes pops-anim-slide-left-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: translateX(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: translateX(-200%);\r\n	}\r\n}\r\n@keyframes pops-anim-slide-right-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: translateX(0);\r\n	}\r\n	100% {\r\n		transform: translateX(200%);\r\n	}\r\n}\r\n@keyframes pops-anim-fadein-reverse {\r\n	0% {\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n	}\r\n}\r\n@keyframes pops-anim-fadein-zoom-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: scale(1);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: scale(0.5);\r\n	}\r\n}\r\n@keyframes pops-anim-fadein-alert-reverse {\r\n	0% {\r\n		transform: scale(1);\r\n	}\r\n	45% {\r\n		transform: scale(0.95);\r\n	}\r\n	80% {\r\n		transform: scale(1.05);\r\n	}\r\n	100% {\r\n		transform: scale(0.5);\r\n	}\r\n}\r\n@keyframes pops-anim-don-reverse {\r\n	100% {\r\n		opacity: 0;\r\n		transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	97.9167% {\r\n		transform: matrix3d(\r\n			0.75266,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.76342,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	95.8333% {\r\n		transform: matrix3d(\r\n			0.81071,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.84545,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	93.75% {\r\n		transform: matrix3d(\r\n			0.86808,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.9286,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	91.6667% {\r\n		transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	89.5833% {\r\n		transform: matrix3d(\r\n			0.96482,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.05202,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	87.5% {\r\n		transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	85.4167% {\r\n		transform: matrix3d(\r\n			1.02563,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.09149,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	83.3333% {\r\n		transform: matrix3d(\r\n			1.04227,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.08453,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	81.25% {\r\n		transform: matrix3d(\r\n			1.05102,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.06666,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	79.1667% {\r\n		transform: matrix3d(\r\n			1.05334,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.04355,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	77.0833% {\r\n		transform: matrix3d(\r\n			1.05078,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.02012,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	75% {\r\n		transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	72.9167% {\r\n		transform: matrix3d(\r\n			1.03699,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.98534,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	70.8333% {\r\n		transform: matrix3d(\r\n			1.02831,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.97688,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	68.75% {\r\n		transform: matrix3d(\r\n			1.01973,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.97422,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	66.6667% {\r\n		transform: matrix3d(\r\n			1.01191,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.97618,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	64.5833% {\r\n		transform: matrix3d(\r\n			1.00526,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.98122,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	62.5% {\r\n		transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	60.4167% {\r\n		transform: matrix3d(\r\n			0.99617,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99433,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	58.3333% {\r\n		transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	56.25% {\r\n		transform: matrix3d(\r\n			0.99237,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00413,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	54.1667% {\r\n		transform: matrix3d(\r\n			0.99202,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00651,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	52.0833% {\r\n		transform: matrix3d(\r\n			0.99241,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00726,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	50% {\r\n		opacity: 1;\r\n		transform: matrix3d(\r\n			0.99329,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00671,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	47.9167% {\r\n		transform: matrix3d(\r\n			0.99447,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00529,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	45.8333% {\r\n		transform: matrix3d(\r\n			0.99577,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00346,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	43.75% {\r\n		transform: matrix3d(\r\n			0.99705,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.0016,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	41.6667% {\r\n		transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	39.5833% {\r\n		transform: matrix3d(\r\n			0.99921,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99884,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	37.5% {\r\n		transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	35.4167% {\r\n		transform: matrix3d(\r\n			1.00057,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99795,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	33.3333% {\r\n		transform: matrix3d(\r\n			1.00095,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99811,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	31.25% {\r\n		transform: matrix3d(\r\n			1.00114,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99851,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	29.1667% {\r\n		transform: matrix3d(\r\n			1.00119,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99903,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	27.0833% {\r\n		transform: matrix3d(\r\n			1.00114,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99955,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	25% {\r\n		transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	22.9167% {\r\n		transform: matrix3d(\r\n			1.00083,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00033,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	20.8333% {\r\n		transform: matrix3d(\r\n			1.00063,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00052,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	18.75% {\r\n		transform: matrix3d(\r\n			1.00044,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00058,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	16.6667% {\r\n		transform: matrix3d(\r\n			1.00027,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00053,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	14.5833% {\r\n		transform: matrix3d(\r\n			1.00012,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00042,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	12.5% {\r\n		transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	10.4167% {\r\n		transform: matrix3d(\r\n			0.99991,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1.00013,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	8.33333% {\r\n		transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n	}\r\n	6.25% {\r\n		transform: matrix3d(\r\n			0.99983,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99991,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	4.16667% {\r\n		transform: matrix3d(\r\n			0.99982,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99985,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	2.08333% {\r\n		transform: matrix3d(\r\n			0.99983,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			0.99984,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1\r\n		);\r\n	}\r\n	0% {\r\n		opacity: 1;\r\n		transform: matrix3d(\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0,\r\n			1,\r\n			0,\r\n			0,\r\n			0,\r\n			0type=close,\r\n			1\r\n		);\r\n	}\r\n}\r\n@keyframes pops-anim-roll-reverse {\r\n	0% {\r\n		transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r\n	}\r\n	100% {\r\n		transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\r\n	}\r\n}\r\n@keyframes pops-anim-sandra-reverse {\r\n	0% {\r\n		opacity: 1;\r\n		transform: scale3d(1, 1, 1);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: scale3d(1.1, 1.1, 1);\r\n	}\r\n}\r\n@keyframes pops-anim-gather-reverse {\r\n	0% {\r\n		opacity: 0;\r\n		transform: scale(5, 0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: scale(5, 0);\r\n	}\r\n}\r\n\r\n@-webkit-keyframes pops-motion-fadeInTop {\r\n	0% {\r\n		opacity: 0;\r\n		-webkit-transform: translateY(-30px);\r\n		transform: translateY(-30px);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n	}\r\n}\r\n@keyframes pops-motion-fadeInTop {\r\n	0% {\r\n		opacity: 0;\r\n		transform: translateY(-30px);\r\n		-ms-transform: translateY(-30px);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		transform: translateX(0);\r\n		-ms-transform: translateX(0);\r\n	}\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutTop {\r\n	0% {\r\n		opacity: 10;\r\n		-webkit-transform: translateY(0);\r\n		transform: translateY(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		-webkit-transform: translateY(-30px);\r\n		transform: translateY(-30px);\r\n	}\r\n}\r\n@keyframes pops-motion-fadeOutTop {\r\n	0% {\r\n		opacity: 1;\r\n		transform: translateY(0);\r\n		-ms-transform: translateY(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		transform: translateY(-30px);\r\n		-ms-transform: translateY(-30px);\r\n	}\r\n}\r\n@-webkit-keyframes pops-motion-fadeInBottom {\r\n	0% {\r\n		opacity: 0;\r\n		-webkit-transform: translateY(20px);\r\n		transform: translateY(20px);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		-webkit-transform: translateY(0);\r\n		transform: translateY(0);\r\n	}\r\n}\r\n@keyframes pops-motion-fadeInBottom {\r\n	0% {\r\n		opacity: 0;\r\n		-webkit-transform: translateY(20px);\r\n		transform: translateY(20px);\r\n		-ms-transform: translateY(20px);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		-webkit-transform: translateY(0);\r\n		transform: translateY(0);\r\n		-ms-transform: translateY(0);\r\n	}\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutBottom {\r\n	0% {\r\n		opacity: 1;\r\n		-webkit-transform: translateY(0);\r\n		transform: translateY(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		-webkit-transform: translateY(20px);\r\n		transform: translateY(20px);\r\n	}\r\n}\r\n@keyframes pops-motion-fadeOutBottom {\r\n	0% {\r\n		opacity: 1;\r\n		-webkit-transform: translateY(0);\r\n		transform: translateY(0);\r\n		-ms-transform: translateY(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		-webkit-transform: translateY(20px);\r\n		transform: translateY(20px);\r\n		-ms-transform: translateY(20px);\r\n	}\r\n}\r\n@-webkit-keyframes pops-motion-fadeInLeft {\r\n	0% {\r\n		opacity: 0;\r\n		-webkit-transform: translateX(-20px);\r\n		transform: translateX(-20px);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n	}\r\n}\r\n@keyframes pops-motion-fadeInLeft {\r\n	0% {\r\n		opacity: 0;\r\n		-webkit-transform: translateX(-30px);\r\n		transform: translateX(-30px);\r\n		-ms-transform: translateX(-30px);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n		-ms-transform: translateX(0);\r\n	}\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutLeft {\r\n	0% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		-webkit-transform: translateX(-30px);\r\n		transform: translateX(-30px);\r\n	}\r\n}\r\n@keyframes pops-motion-fadeOutLeft {\r\n	0% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n		-ms-transform: translateX(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		-webkit-transform: translateX(-20px);\r\n		transform: translateX(-20px);\r\n		-ms-transform: translateX(-20px);\r\n	}\r\n}\r\n@-webkit-keyframes pops-motion-fadeInRight {\r\n	0% {\r\n		opacity: 0;\r\n		-webkit-transform: translateX(20px);\r\n		transform: translateX(20px);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n	}\r\n}\r\n@keyframes pops-motion-fadeInRight {\r\n	0% {\r\n		opacity: 0;\r\n		-webkit-transform: translateX(20px);\r\n		transform: translateX(20px);\r\n		-ms-transform: translateX(20px);\r\n	}\r\n	100% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n		-ms-transform: translateX(0);\r\n	}\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutRight {\r\n	0% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		-webkit-transform: translateX(20px);\r\n		transform: translateX(20px);\r\n	}\r\n}\r\n@keyframes pops-motion-fadeOutRight {\r\n	0% {\r\n		opacity: 1;\r\n		-webkit-transform: translateX(0);\r\n		transform: translateX(0);\r\n		-ms-transform: translateX(0);\r\n	}\r\n	100% {\r\n		opacity: 0;\r\n		-webkit-transform: translateX(20px);\r\n		transform: translateX(20px);\r\n		-ms-transform: translateX(20px);\r\n	}\r\n}\r\n\r\n/* 动画 */\r\n.pops-anim[anim="pops-anim-spread"] {\r\n	animation: pops-anim-spread 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-shake"] {\r\n	animation: pops-anim-shake 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-rolling-left"] {\r\n	animation: pops-anim-rolling-left 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-rolling-right"] {\r\n	animation: pops-anim-rolling-right 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-slide-top"] {\r\n	animation: pops-anim-slide-top 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-slide-bottom"] {\r\n	animation: pops-anim-slide-bottom 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-slide-left"] {\r\n	animation: pops-anim-slide-left 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-slide-right"] {\r\n	animation: pops-anim-slide-right 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-fadein"] {\r\n	animation: pops-anim-fadein 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-fadein-zoom"] {\r\n	animation: pops-anim-fadein-zoom 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-fadein-alert"] {\r\n	animation: pops-anim-fadein-alert 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-don"] {\r\n	animation: pops-anim-don 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-roll"] {\r\n	animation: pops-anim-roll 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-sandra"] {\r\n	animation: pops-anim-sandra 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-gather"] {\r\n	animation: pops-anim-gather 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-spread-reverse"] {\r\n	animation: pops-anim-spread-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-shake-reverse"] {\r\n	animation: pops-anim-shake-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-rolling-left-reverse"] {\r\n	animation: pops-anim-rolling-left-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-rolling-right-reverse"] {\r\n	animation: pops-anim-rolling-right-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-slide-top-reverse"] {\r\n	animation: pops-anim-slide-top-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-slide-bottom-reverse"] {\r\n	animation: pops-anim-slide-bottom-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-slide-left-reverse"] {\r\n	animation: pops-anim-slide-left-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-slide-right-reverse"] {\r\n	animation: pops-anim-slide-right-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-fadein-reverse"] {\r\n	animation: pops-anim-fadein-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-fadein-zoom-reverse"] {\r\n	animation: pops-anim-fadein-zoom-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-fadein-alert-reverse"] {\r\n	animation: pops-anim-fadein-alert-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-don-reverse"] {\r\n	animation: pops-anim-don-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-roll-reverse"] {\r\n	animation: pops-anim-roll-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-sandra-reverse"] {\r\n	animation: pops-anim-sandra-reverse 0.3s;\r\n}\r\n.pops-anim[anim="pops-anim-gather-reverse"] {\r\n	animation: pops-anim-gather-reverse 0.3s;\r\n}\r\n';
  var alertCSS = '.pops[type-value] .pops-alert-title {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: space-between;\r\n}\r\n.pops[type-value="alert"] .pops-alert-title {\r\n	width: 100%;\r\n	height: var(--container-title-height);\r\n	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value="alert"] .pops-alert-title p[pops] {\r\n	width: 100%;\r\n	overflow: hidden;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	font-weight: 500;\r\n	line-height: normal;\r\n}\r\n.pops[type-value="alert"] .pops-alert-content {\r\n	width: 100%;\r\n	/*height: calc(\r\n		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n	);*/\r\n	flex: 1;\r\n	overflow: auto;\r\n	word-break: break-word;\r\n}\r\n.pops[type-value="alert"] .pops-alert-content p[pops] {\r\n	padding: 5px 10px;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n}\r\n.pops[type-value="alert"] .pops-alert-btn {\r\n	/*position: absolute;\r\n	bottom: 0;*/\r\n	display: flex;\r\n	padding: 10px 10px 10px 10px;\r\n	width: 100%;\r\n	height: var(--container-bottom-btn-height);\r\n	max-height: var(--container-bottom-btn-height);\r\n	line-height: normal;\r\n	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n	text-align: right;\r\n	align-items: center;\r\n}\r\n';
  var confirmCSS = '.pops[type-value] .pops-confirm-title {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: space-between;\r\n}\r\n.pops[type-value="confirm"] .pops-confirm-title {\r\n	width: 100%;\r\n	height: var(--container-title-height);\r\n	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value="confirm"] .pops-confirm-title p[pops] {\r\n	width: 100%;\r\n	overflow: hidden;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	font-weight: 500;\r\n	line-height: normal;\r\n}\r\n.pops[type-value="confirm"] .pops-confirm-content {\r\n	width: 100%;\r\n	/*height: calc(\r\n		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n	);*/\r\n	flex: 1;\r\n	overflow: auto;\r\n	word-break: break-word;\r\n}\r\n.pops[type-value="confirm"] .pops-confirm-content p[pops] {\r\n	padding: 5px 10px;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n}\r\n.pops[type-value="confirm"] .pops-confirm-btn {\r\n	/*position: absolute;\r\n	bottom: 0;*/\r\n	display: flex;\r\n	padding: 10px 10px 10px 10px;\r\n	width: 100%;\r\n	height: var(--container-bottom-btn-height);\r\n	max-height: var(--container-bottom-btn-height);\r\n	line-height: normal;\r\n	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n	text-align: right;\r\n	align-items: center;\r\n}\r\n';
  var promptCSS = '.pops[type-value] .pops-prompt-title {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: space-between;\r\n}\r\n.pops[type-value="prompt"] .pops-prompt-title {\r\n	width: 100%;\r\n	height: var(--container-title-height);\r\n	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value="prompt"] .pops-prompt-title p[pops] {\r\n	width: 100%;\r\n	overflow: hidden;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	font-weight: 500;\r\n	line-height: normal;\r\n	align-content: center;\r\n}\r\n.pops[type-value="prompt"] .pops-prompt-content {\r\n	width: 100%;\r\n	/*height: calc(\r\n		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n	);*/\r\n	flex: 1;\r\n	overflow: auto;\r\n	word-break: break-word;\r\n}\r\n.pops[type-value="prompt"] .pops-prompt-content p[pops] {\r\n	padding: 5px 10px;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n}\r\n.pops[type-value="prompt"] .pops-prompt-btn {\r\n	display: flex;\r\n	padding: 10px 10px 10px 10px;\r\n	width: 100%;\r\n	height: var(--container-bottom-btn-height);\r\n	max-height: var(--container-bottom-btn-height);\r\n	line-height: normal;\r\n	align-content: center;\r\n	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n	text-align: right;\r\n	align-items: center;\r\n}\r\n.pops[type-value="prompt"] input[pops] {\r\n	padding: 5px 10px;\r\n}\r\n.pops[type-value="prompt"] textarea[pops] {\r\n	padding: 5px 10px;\r\n	resize: none;\r\n}\r\n.pops[type-value="prompt"] input[pops],\r\n.pops[type-value="prompt"] textarea[pops] {\r\n	width: 100%;\r\n	height: 100%;\r\n	outline: 0;\r\n	border: 0;\r\n	color: rgb(51, 51, 51);\r\n}\r\n';
  var loadingCSS = '.pops[type-value="loading"] {\r\n	position: absolute;\r\n	top: 272.5px;\r\n	top: 50%;\r\n	left: 26px;\r\n	left: 50%;\r\n	display: flex;\r\n	overflow: hidden;\r\n	padding: 10px 15px;\r\n	max-width: 100%;\r\n	max-height: 100%;\r\n	min-width: 0;\r\n	min-height: 0;\r\n	border: 1px solid rgba(0, 0, 0, 0.2);\r\n	border-radius: 5px;\r\n	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	box-shadow: 0 0 5px rgb(0 0 0 / 50%);\r\n	vertical-align: middle;\r\n	transition: all 0.35s;\r\n	transform: translate(-50%, -50%);\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	flex-direction: column;\r\n	align-items: center;\r\n	justify-content: center;\r\n	align-content: center;\r\n}\r\n.pops[type-value="loading"]:before {\r\n	float: left;\r\n	display: inline-block;\r\n	width: 2em;\r\n	height: 2em;\r\n	border: 0.3em solid rgba(100, 149, 237, 0.1);\r\n	border-top: 0.3em solid rgb(100, 149, 237, var(--pops-bd-opacity));\r\n	border-radius: 50%;\r\n	content: " ";\r\n	vertical-align: middle;\r\n	font-size: inherit;\r\n	animation: pops-anim-wait-rotate 1.2s linear infinite;\r\n}\r\n.pops[type-value="loading"] .pops-loading-content {\r\n	position: static;\r\n	top: 0;\r\n	bottom: 0;\r\n	float: left;\r\n	overflow: hidden;\r\n	width: auto;\r\n	font-size: inherit;\r\n	line-height: normal;\r\n	align-content: center;\r\n}\r\n.pops[type-value="loading"] .pops-loading-content p[pops] {\r\n	display: inline-block;\r\n	padding: 5px 0px;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n	font-size: inherit;\r\n	text-align: center;\r\n}\r\n';
  var iframeCSS = '.pops[type-value="iframe"] {\r\n	--container-title-height: 55px;\r\n	transition: width 0.35s ease, height 0.35s ease;\r\n}\r\n.pops[type-value] .pops-iframe-title {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: space-between;\r\n}\r\n.pops[type-value="iframe"] .pops-iframe-title {\r\n	width: calc(100% - 0px);\r\n	height: var(--container-title-height);\r\n	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value="iframe"] .pops-iframe-title p[pops] {\r\n	width: 100%;\r\n	overflow: hidden;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	font-weight: 500;\r\n	line-height: normal;\r\n	align-content: center;\r\n}\r\n.pops[type-value="iframe"] .pops-iframe-content {\r\n	width: 100%;\r\n	/*height: calc(100% - var(--container-title-height));*/\r\n	flex: 1;\r\n	overflow: hidden;\r\n	word-break: break-word;\r\n}\r\n.pops[type-value="iframe"] .pops-iframe-content p[pops] {\r\n	padding: 5px 10px;\r\n	color: #333;\r\n	text-indent: 15px;\r\n}\r\n.pops-loading {\r\n	position: absolute;\r\n	top: 40px;\r\n	right: 0;\r\n	bottom: 0;\r\n	left: 0;\r\n	z-index: 5;\r\n	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n}\r\n.pops-loading:before {\r\n	position: absolute;\r\n	top: 50%;\r\n	left: 50%;\r\n	z-index: 3;\r\n	display: block;\r\n	margin: -20px 0 0 -20px;\r\n	padding: 20px;\r\n	border: 4px solid rgb(221, 221, 221, var(--pops-bd-opacity));\r\n	border-radius: 50%;\r\n	content: "";\r\n	border-top-color: transparent;\r\n	animation: pops-anim-wait-rotate 1.2s linear infinite;\r\n}\r\n.pops[type-value="iframe"].pops[type-module="min"] {\r\n	bottom: 0;\r\n	max-width: 200px;\r\n	max-height: 53px;\r\n	position: unset;\r\n}\r\n.pops[type-value="iframe"].pops[type-module="min"]\r\n	.pops-header-control[type="min"] {\r\n	display: none;\r\n}\r\n.pops[type-value="iframe"].pops-iframe-unset-top {\r\n	top: unset !important;\r\n}\r\n.pops[type-value="iframe"].pops-iframe-unset-left {\r\n	left: unset !important;\r\n}\r\n.pops[type-value="iframe"].pops-iframe-unset-transform {\r\n	transform: none !important;\r\n}\r\n.pops[type-value="iframe"].pops-iframe-unset-transition {\r\n	transition: none !important;\r\n}\r\n.pops[type-value="iframe"].pops[type-module="max"] {\r\n	width: 100% !important;\r\n	height: 100% !important;\r\n}\r\n.pops[type-value="iframe"] iframe[pops] {\r\n	width: calc(100% - 4px);\r\n	height: calc(100% - 4px);\r\n	border: 0;\r\n}\r\n.pops-iframe-content-global-loading {\r\n	position: absolute;\r\n	top: 0;\r\n	left: 0;\r\n	z-index: 999999;\r\n	width: 0;\r\n	height: 4px;\r\n	background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n	animation: iframeLoadingChange 2s forwards;\r\n}\r\n\r\n.pops-anim:has(.pops[type-value="iframe"].pops[type-module="min"]) {\r\n	position: unset;\r\n}\r\n';
  var tooltipCSS = '.pops-tip {\r\n	--tooltip-color: #4e4e4e;\r\n	--tooltip-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	--tooltip-bd-radius: 2px;\r\n	--tooltip-font-size: 14px;\r\n	--tooltip-padding-top: 13px;\r\n	--tooltip-padding-right: 13px;\r\n	--tooltip-padding-bottom: 13px;\r\n	--tooltip-padding-left: 13px;\r\n\r\n	--tooltip-arrow--after-color: rgb(78, 78, 78);\r\n	--tooltip-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	--tooltip-arrow--after-width: 12px;\r\n	--tooltip-arrow--after-height: 12px;\r\n\r\n	padding: var(--tooltip-padding-top) var(--tooltip-padding-right)\r\n		var(--tooltip-padding-bottom) var(--tooltip-padding-left);\r\n	max-width: 400px;\r\n	max-height: 300px;\r\n	border-radius: var(--tooltip-bd-radius);\r\n	background-color: var(--tooltip-bg-color);\r\n	box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\r\n	color: var(--tooltip-color);\r\n	font-size: var(--tooltip-font-size);\r\n}\r\n.pops-tip[data-position="absolute"] {\r\n	position: absolute;\r\n}\r\n.pops-tip[data-position="fixed"] {\r\n	position: fixed;\r\n}\r\n/* github的样式 */\r\n.pops-tip.github-tooltip {\r\n	--tooltip-bg-opacity: 1;\r\n	--tooltip-color: rgb(255, 255, 255);\r\n	--tooltip-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));\r\n	--tooltip-bd-radius: 6px;\r\n	--tooltip-padding-top: 6px;\r\n	--tooltip-padding-right: 8px;\r\n	--tooltip-padding-bottom: 6px;\r\n	--tooltip-padding-left: 8px;\r\n\r\n	--tooltip-arrow--after-color: rgb(255, 255, 255);\r\n	--tooltip-arrow--after-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));\r\n	--tooltip-arrow--after-width: 8px;\r\n	--tooltip-arrow--after-height: 8px;\r\n}\r\n.pops-tip .pops-tip-arrow {\r\n	position: absolute;\r\n	top: 100%;\r\n	left: 50%;\r\n	overflow: hidden;\r\n	width: 100%;\r\n	height: 12.5px;\r\n	transform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow::after {\r\n	position: absolute;\r\n	top: 0;\r\n	left: 50%;\r\n	width: var(--tooltip-arrow--after-width);\r\n	height: var(--tooltip-arrow--after-height);\r\n	background: var(--tooltip-arrow--after-bg-color);\r\n	color: var(--tooltip-arrow--after-color);\r\n	box-shadow: 0 1px 7px rgba(0, 0, 0, 0.24), 0 1px 7px rgba(0, 0, 0, 0.12);\r\n	content: "";\r\n	transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position="bottom"] {\r\n	position: absolute;\r\n	top: 100%;\r\n	left: 50%;\r\n	overflow: hidden;\r\n	width: 100%;\r\n	height: 12.5px;\r\n	transform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position="bottom"]:after {\r\n	position: absolute;\r\n	top: 0;\r\n	left: 50%;\r\n	width: var(--tooltip-arrow--after-width);\r\n	height: var(--tooltip-arrow--after-height);\r\n	background: var(--tooltip-arrow--after-bg-color);\r\n	box-shadow: 0 1px 7px rgba(0, 0, 0, 0.24), 0 1px 7px rgba(0, 0, 0, 0.12);\r\n	content: "";\r\n	transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position="left"] {\r\n	top: 50%;\r\n	left: -12.5px;\r\n	width: 12.5px;\r\n	height: 50px;\r\n	transform: translateY(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position="left"]:after {\r\n	position: absolute;\r\n	top: 50%;\r\n	left: 100%;\r\n	content: "";\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position="right"] {\r\n	top: 50%;\r\n	right: -12.5px;\r\n	left: auto;\r\n	width: 12.5px;\r\n	height: 50px;\r\n	transform: translateY(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position="right"]:after {\r\n	position: absolute;\r\n	top: 50%;\r\n	left: 0;\r\n	content: "";\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position="top"] {\r\n	top: -12.5px;\r\n	left: 50%;\r\n	transform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position="top"]:after {\r\n	position: absolute;\r\n	top: 100%;\r\n	left: 50%;\r\n	content: "";\r\n}\r\n\r\n.pops-tip[data-motion] {\r\n	-webkit-animation-duration: 0.25s;\r\n	animation-duration: 0.25s;\r\n	-webkit-animation-fill-mode: forwards;\r\n	animation-fill-mode: forwards;\r\n}\r\n.pops-tip[data-motion="fadeOutRight"] {\r\n	-webkit-animation-name: pops-motion-fadeOutRight;\r\n	animation-name: pops-motion-fadeOutRight;\r\n}\r\n.pops-tip[data-motion="fadeInTop"] {\r\n	-webkit-animation-name: pops-motion-fadeInTop;\r\n	animation-name: pops-motion-fadeInTop;\r\n	animation-timing-function: cubic-bezier(0.49, 0.49, 0.13, 1.3);\r\n}\r\n.pops-tip[data-motion="fadeOutTop"] {\r\n	-webkit-animation-name: pops-motion-fadeOutTop;\r\n	animation-name: pops-motion-fadeOutTop;\r\n	animation-timing-function: cubic-bezier(0.32, 0.37, 0.06, 0.87);\r\n}\r\n.pops-tip[data-motion="fadeInBottom"] {\r\n	-webkit-animation-name: pops-motion-fadeInBottom;\r\n	animation-name: pops-motion-fadeInBottom;\r\n}\r\n.pops-tip[data-motion="fadeOutBottom"] {\r\n	-webkit-animation-name: pops-motion-fadeOutBottom;\r\n	animation-name: pops-motion-fadeOutBottom;\r\n}\r\n.pops-tip[data-motion="fadeInLeft"] {\r\n	-webkit-animation-name: pops-motion-fadeInLeft;\r\n	animation-name: pops-motion-fadeInLeft;\r\n}\r\n.pops-tip[data-motion="fadeOutLeft"] {\r\n	-webkit-animation-name: pops-motion-fadeOutLeft;\r\n	animation-name: pops-motion-fadeOutLeft;\r\n}\r\n.pops-tip[data-motion="fadeInRight"] {\r\n	-webkit-animation-name: pops-motion-fadeInRight;\r\n	animation-name: pops-motion-fadeInRight;\r\n}\r\n';
  var drawerCSS = '.pops[type-value="drawer"] {\r\n	position: fixed;\r\n	box-sizing: border-box;\r\n	display: flex;\r\n	flex-direction: column;\r\n	box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),\r\n		0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);\r\n	overflow: hidden;\r\n	transition: all 0.3s;\r\n}\r\n.pops[type-value] .pops-drawer-title {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: space-between;\r\n}\r\n.pops[type-value] .pops-drawer-title p[pops] {\r\n	line-height: normal;\r\n	align-content: center;\r\n}\r\n\r\n.pops-drawer-content {\r\n	flex: 1;\r\n	overflow: auto;\r\n}\r\n.pops[type-value="drawer"] .pops-drawer-btn {\r\n	padding-top: 10px;\r\n	padding-bottom: 10px;\r\n}\r\n.pops[type-value="drawer"][direction="top"] {\r\n	width: 100%;\r\n	left: 0;\r\n	right: 0;\r\n	top: 0;\r\n}\r\n.pops[type-value="drawer"][direction="bottom"] {\r\n	width: 100%;\r\n	left: 0;\r\n	right: 0;\r\n	bottom: 0;\r\n}\r\n.pops[type-value="drawer"][direction="left"] {\r\n	height: 100%;\r\n	top: 0;\r\n	bottom: 0;\r\n	left: 0;\r\n}\r\n.pops[type-value="drawer"][direction="right"] {\r\n	height: 100%;\r\n	top: 0;\r\n	bottom: 0;\r\n	right: 0;\r\n}\r\n';
  var folderCSS = '.pops[type-value] .pops-folder-title {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: space-between;\r\n}\r\n.pops[type-value="folder"] .pops-folder-title {\r\n	width: 100%;\r\n	height: var(--container-title-height);\r\n	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value="folder"] .pops-folder-title p[pops] {\r\n	width: 100%;\r\n	overflow: hidden;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	font-weight: 500;\r\n	line-height: normal;\r\n}\r\n.pops[type-value="folder"] .pops-folder-content p[pops] {\r\n	padding: 5px 10px;\r\n	color: rgb(51, 51, 51);\r\n	text-indent: 15px;\r\n}\r\n.pops[type-value="folder"] .pops-folder-content {\r\n	width: 100%;\r\n	/*height: calc(\r\n		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n	);*/\r\n	flex: 1;\r\n	overflow: auto;\r\n	word-break: break-word;\r\n}\r\n.pops[type-value="folder"] .pops-folder-btn {\r\n	/*position: absolute;\r\n	bottom: 0;*/\r\n	display: flex;\r\n	padding: 10px 10px 10px 10px;\r\n	width: 100%;\r\n	height: var(--container-bottom-btn-height);\r\n	max-height: var(--container-bottom-btn-height);\r\n	line-height: normal;\r\n	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n	text-align: right;\r\n	align-items: center;\r\n}\r\n.pops-folder-list .cursor-p {\r\n	cursor: pointer;\r\n}\r\n.pops-folder-list a {\r\n	background: 0 0;\r\n	text-decoration: none;\r\n	-webkit-tap-highlight-color: transparent;\r\n	color: #05082c;\r\n}\r\ntable.pops-folder-list-table__body,\r\ntable.pops-folder-list-table__header {\r\n	width: 100%;\r\n	table-layout: fixed;\r\n	border-collapse: collapse;\r\n	border-spacing: 0;\r\n	padding: 0 20px;\r\n}\r\ntable.pops-folder-list-table__body,\r\ntable.pops-folder-list-table__header {\r\n	height: 100%;\r\n	background: 0 0;\r\n	overflow: hidden;\r\n	display: -webkit-box;\r\n	display: -ms-flexbox;\r\n	-ms-flex-direction: column;\r\n	-webkit-box-orient: vertical;\r\n	-webkit-box-direction: normal;\r\n}\r\ntable.pops-folder-list-table__body {\r\n	height: 100%;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	user-select: none;\r\n}\r\n.pops-folder-list table tr {\r\n	line-height: normal;\r\n	align-content: center;\r\n}\r\n.pops-folder-list-table__header-row {\r\n	height: 50px;\r\n	line-height: normal;\r\n	align-content: center;\r\n	color: rgb(129, 137, 153);\r\n	text-align: left;\r\n	font-size: 12px;\r\n}\r\n.pops-folder-list-table__header-row {\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	user-select: none;\r\n}\r\n.pops-folder-list-table__body-row {\r\n	height: 50px;\r\n	line-height: normal;\r\n	align-content: center;\r\n	color: #03081a;\r\n	font-size: 12px;\r\n}\r\n.pops-folder-list-table__body-row:hover {\r\n	background: rgb(245, 246, 247, var(--pops-bg-opacity));\r\n}\r\n.pops-folder-list table th {\r\n	border: 0;\r\n	border-bottom: 1px solid rgb(247, 248, 250, var(--pops-bg-opacity));\r\n}\r\n.pops-folder-list table td {\r\n	border: 0;\r\n	border-bottom: 1px solid rgb(247, 248, 250, var(--pops-bg-opacity));\r\n	position: relative;\r\n}\r\n.pops-folder-list .list-name-text {\r\n	display: inline-block;\r\n	padding-left: 12px;\r\n	line-height: normal;\r\n	align-content: center;\r\n	max-width: 176px;\r\n}\r\n.pops-folder-list-file-name > div {\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n\r\n.pops-mobile-folder-list-file-name {\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n.pops-mobile-folder-list-file-name > div {\r\n	display: flex;\r\n	flex-wrap: wrap;\r\n	justify-content: flex-start;\r\n	align-items: flex-start;\r\n	padding: 6px 0px;\r\n	flex-direction: column;\r\n}\r\n.pops-mobile-folder-list-file-name img.pops-folder-list-file-icon {\r\n	width: 45px;\r\n	height: 45px;\r\n}\r\n.pops-mobile-folder-list-file-name a.pops-folder-list-file-name-title-text {\r\n	padding-left: unset;\r\n	max-width: 250px;\r\n	overflow-x: hidden;\r\n	font-weight: 400;\r\n	line-height: unset;\r\n	margin-bottom: 4px;\r\n	white-space: normal;\r\n	text-overflow: unset;\r\n}\r\n\r\n/* 修改滚动 */\r\n.pops-folder-content {\r\n	overflow: hidden !important;\r\n}\r\n.pops-folder-content .pops-folder-list {\r\n	height: 100%;\r\n}\r\n.pops-folder-content .pops-folder-list-table__body-div {\r\n	height: 100%;\r\n	padding-bottom: 85px;\r\n}\r\n.pops-mobile-folder-content .pops-folder-list-table__body-div {\r\n	height: 100%;\r\n	padding-bottom: 40px;\r\n}\r\n.pops-folder-content table.pops-folder-list-table__body {\r\n	overflow: auto;\r\n}\r\n.pops-mobile-folder-content .pops-folder-list-table__header-div {\r\n	display: none;\r\n}\r\n\r\n.pops-folder-list-file-name-title-text:hover {\r\n	text-decoration: none;\r\n	color: rgb(6, 167, 255);\r\n}\r\n.pops-folder-list .text-ellip {\r\n	overflow: hidden;\r\n	white-space: nowrap;\r\n	text-overflow: ellipsis;\r\n}\r\n.pops-folder-list .content {\r\n	color: rgb(129, 137, 153);\r\n	position: relative;\r\n	width: 100%;\r\n	text-align: left;\r\n}\r\n.pops-folder-list .inline-block-v-middle {\r\n	display: inline-block;\r\n	vertical-align: middle;\r\n}\r\n.pops-folder-list .flex-a-i-center {\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n.pops-folder-list .u-file-icon {\r\n	display: inline-block;\r\n	vertical-align: middle;\r\n}\r\n.pops-folder-list .u-file-icon--list {\r\n	width: 32px;\r\n	height: 32px;\r\n}\r\n.pops-folder-list .pops-folder-list-file-icon {\r\n	line-height: normal;\r\n	align-content: center;\r\n	position: relative;\r\n	vertical-align: middle;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-primary {\r\n	display: -webkit-box;\r\n	display: -webkit-flex;\r\n	display: -ms-flexbox;\r\n	display: flex;\r\n	-webkit-box-align: center;\r\n	-webkit-align-items: center;\r\n	-ms-flex-align: center;\r\n	align-items: center;\r\n	-webkit-box-orient: horizontal;\r\n	-webkit-box-direction: normal;\r\n	-webkit-flex-direction: row;\r\n	-ms-flex-direction: row;\r\n	flex-direction: row;\r\n	min-height: 17px;\r\n	flex-wrap: wrap;\r\n}\r\n.pops-folder-list .pops-folder-list-table__sort {\r\n	display: inline-flex;\r\n	margin-left: 4px;\r\n	flex-direction: column;\r\n}\r\n\r\n.pops-folder-list .pops-folder-icon-arrow {\r\n	width: 10px;\r\n	height: 10px;\r\n	fill: rgb(212, 215, 222);\r\n}\r\n.pops-folder-list .pops-folder-icon-active {\r\n	fill: rgb(6, 167, 255);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb {\r\n	padding: 4px 20px;\r\n	-webkit-box-sizing: border-box;\r\n	box-sizing: border-box;\r\n	display: -webkit-box;\r\n	display: -webkit-flex;\r\n	display: -ms-flexbox;\r\n	display: flex;\r\n	-webkit-box-align: center;\r\n	-webkit-align-items: center;\r\n	-ms-flex-align: center;\r\n	align-items: center;\r\n	-webkit-box-orient: horizontal;\r\n	-webkit-box-direction: normal;\r\n	-webkit-flex-direction: row;\r\n	-ms-flex-direction: row;\r\n	flex-direction: row;\r\n	-webkit-box-pack: start;\r\n	-webkit-justify-content: start;\r\n	-ms-flex-pack: start;\r\n	justify-content: flex-start;\r\n	min-height: 35px;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles {\r\n	font-size: 12px;\r\n	color: #333;\r\n	line-height: normal;\r\n	align-content: center;\r\n	font-weight: 700;\r\n	display: inline-block;\r\n	max-width: 140px;\r\n	overflow: hidden;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	word-wrap: normal;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:last-child a {\r\n	color: rgb(153, 153, 153);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a {\r\n	font-size: 14px;\r\n	color: rgb(18, 22, 26);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow {\r\n	width: 16px;\r\n	height: 16px;\r\n}\r\n.pops-folder-list .iconArrow {\r\n	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=)\r\n		55% 50%/6px 9px no-repeat;\r\n}\r\n';
  var panelCSS = '.pops[type-value="panel"] {\r\n	--el-disabled-text-color: #a8abb2;\r\n	--el-disabled-bg-color: #f5f7fa;\r\n	--el-disabled-border-color: #e4e7ed;\r\n	--pops-bg-color: #f2f2f2;\r\n	--pops-color: #333;\r\n	--title-bg-color: #ffffff;\r\n	--aside-bg-color: #ffffff;\r\n	--aside-hover-color: rgb(64, 158, 255);\r\n	--aside-hover-bg-color: rgba(64, 158, 255, 0.1);\r\n\r\n	--pops-panel-forms-margin-top-bottom: 10px;\r\n	--pops-panel-forms-margin-left-right: 20px;\r\n	--pops-panel-forms-header-icon-size: 20px;\r\n	--pops-panel-forms-header-padding-top-bottom: 15px;\r\n	--pops-panel-forms-header-padding-left-right: 10px;\r\n	--pops-panel-forms-container-item-bg-color: #ffffff;\r\n	--pops-panel-forms-container-item-title-color: #333;\r\n	--pops-panel-forms-container-item-border-radius: 6px;\r\n	--pops-panel-forms-container-item-margin-top-bottom: 10px;\r\n	--pops-panel-forms-container-item-margin-left-right: var(\r\n		--pops-panel-forms-margin-left-right\r\n	);\r\n	--pops-panel-forms-container-li-padding-top-bottom: 12px;\r\n	--pops-panel-forms-container-li-padding-left-right: 16px;\r\n}\r\n.pops[type-value="panel"] {\r\n	color: var(--pops-color);\r\n	background: var(--pops-bg-color);\r\n}\r\n.pops[type-value] .pops-panel-title {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: space-between;\r\n	background: var(--title-bg-color);\r\n}\r\n\r\n.pops[type-value="panel"] .pops-panel-title {\r\n	width: 100%;\r\n	height: var(--container-title-height);\r\n	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value="panel"] .pops-panel-title p[pops] {\r\n	width: 100%;\r\n	overflow: hidden;\r\n	text-indent: 15px;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	font-weight: 500;\r\n	line-height: normal;\r\n	align-content: center;\r\n}\r\n.pops[type-value="panel"] .pops-panel-content {\r\n	width: 100%;\r\n	/*height: calc(\r\n		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n	);*/\r\n	flex: 1;\r\n	overflow: auto;\r\n	word-break: break-word;\r\n}\r\n.pops[type-value="panel"] .pops-panel-btn {\r\n	display: flex;\r\n	padding: 10px 10px 10px 10px;\r\n	width: 100%;\r\n	height: var(--container-bottom-btn-height);\r\n	max-height: var(--container-bottom-btn-height);\r\n	line-height: normal;\r\n	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n	text-align: right;\r\n	align-content: center;\r\n	align-items: center;\r\n}\r\n\r\n/* ↓panel的CSS↓ */\r\naside.pops-panel-aside {\r\n	overflow: auto;\r\n	box-sizing: border-box;\r\n	flex-shrink: 0;\r\n	max-width: 200px;\r\n	min-width: 100px;\r\n	height: 100%;\r\n	background: var(--aside-bg-color);\r\n	border-right: 1px solid var(--aside-bg-color);\r\n	font-size: 0.9em;\r\n}\r\naside.pops-panel-aside {\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n}\r\n.pops-panel-content {\r\n	display: flex;\r\n	flex-direction: row;\r\n	flex: 1;\r\n	overflow: auto;\r\n	flex-basis: auto;\r\n	box-sizing: border-box;\r\n	min-width: 0;\r\n	bottom: 0 !important;\r\n}\r\nsection.pops-panel-container {\r\n	width: 100%;\r\n	overflow: hidden;\r\n	display: flex;\r\n	flex-direction: column;\r\n}\r\nsection.pops-panel-container .pops-panel-container-header-ul,\r\nsection.pops-panel-container .pops-panel-deepMenu-container-header-ul {\r\n	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n	flex: 0 auto;\r\n}\r\nsection.pops-panel-container .pops-panel-container-header-ul li {\r\n	text-align: left;\r\n	display: flex;\r\n	justify-content: flex-start !important;\r\n	margin: 0px !important;\r\n	padding: var(--pops-panel-forms-header-padding-top-bottom)\r\n		calc(\r\n			var(--pops-panel-forms-margin-left-right) +\r\n				var(--pops-panel-forms-container-li-padding-left-right)\r\n		);\r\n}\r\nsection.pops-panel-container > ul:last-child {\r\n	overflow: auto;\r\n	flex: 1;\r\n}\r\naside.pops-panel-aside ul li {\r\n	margin: 6px 8px;\r\n	border-radius: 4px;\r\n	padding: 6px 10px;\r\n	cursor: default;\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: flex-start;\r\n}\r\naside.pops-panel-aside .pops-is-visited,\r\naside.pops-panel-aside ul li:hover {\r\n	color: var(--aside-hover-color);\r\n	background: var(--aside-hover-bg-color);\r\n}\r\nsection.pops-panel-container > ul li:not(.pops-panel-forms-container-item) {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	margin: var(--pops-panel-forms-margin-top-bottom)\r\n		calc(\r\n			var(--pops-panel-forms-margin-left-right) +\r\n				var(--pops-panel-forms-margin-left-right)\r\n		);\r\n	gap: 10px;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item-header-text {\r\n	margin: 10px;\r\n	margin-left: calc(\r\n		var(--pops-panel-forms-margin-left-right) +\r\n			var(--pops-panel-forms-container-li-padding-left-right)\r\n	);\r\n	font-size: 0.9em;\r\n	text-align: left;\r\n	color: var(--pops-panel-forms-container-item-title-color);\r\n}\r\nsection.pops-panel-container li.pops-panel-forms-container-item {\r\n	display: block;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul {\r\n	border-radius: var(--pops-panel-forms-container-item-border-radius);\r\n	background: var(--pops-panel-forms-container-item-bg-color);\r\n	margin: var(--pops-panel-forms-container-item-margin-top-bottom)\r\n		var(--pops-panel-forms-margin-left-right);\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul li {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px;\r\n	margin: 0px var(--pops-panel-forms-container-li-padding-left-right);\r\n	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r\n	text-align: left;\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-forms-container-item\r\n	ul\r\n	li.pops-panel-deepMenu-nav-item {\r\n	padding: var(--pops-panel-forms-container-li-padding-top-bottom)\r\n		var(--pops-panel-forms-container-li-padding-left-right);\r\n	margin: 0px;\r\n	border-bottom: 0;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul li:last-child {\r\n	border: 0;\r\n}\r\n/* 主文字 */\r\n/*section.pops-panel-container\r\n	.pops-panel-forms-container-item\r\n	.pops-panel-item-left-text\r\n	.pops-panel-item-left-main-text {\r\n	line-height: 2;\r\n}*/\r\n/* 描述文字 */\r\nsection.pops-panel-container\r\n	.pops-panel-forms-container-item\r\n	.pops-panel-item-left-text\r\n	.pops-panel-item-left-desc-text {\r\n	line-height: normal;\r\n	margin-top: 6px;\r\n	font-size: 0.8em;\r\n	color: rgb(108, 108, 108);\r\n}\r\n\r\n/* 折叠面板 */\r\n\r\nsection.pops-panel-container .pops-panel-forms-fold {\r\n	border-radius: var(--pops-panel-forms-container-item-border-radius);\r\n	background: var(--pops-panel-forms-container-item-bg-color);\r\n	margin: var(--pops-panel-forms-margin-top-bottom)\r\n		var(--pops-panel-forms-margin-left-right);\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-forms-fold\r\n	.pops-panel-forms-fold-container {\r\n	display: flex;\r\n	align-items: center;\r\n	fill: #6c6c6c;\r\n	justify-content: space-between;\r\n	margin: 0px var(--pops-panel-forms-container-li-padding-left-right) !important;\r\n	padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px !important;\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-forms-fold[data-fold-enable]\r\n	.pops-panel-forms-fold-container-icon {\r\n	transform: rotate(90deg);\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-forms-fold\r\n	.pops-panel-forms-fold-container-icon {\r\n	width: 15px;\r\n	height: 15px;\r\n	display: flex;\r\n	align-items: center;\r\n	transform: rotate(-90deg);\r\n	transition: transform 0.3s;\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-forms-fold[data-fold-enable]\r\n	.pops-panel-forms-container-item-formlist {\r\n	height: 0;\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-forms-fold\r\n	.pops-panel-forms-container-item-formlist {\r\n	transition: height 0.3s;\r\n	overflow: hidden;\r\n	border-radius: unset;\r\n	background: unset;\r\n	margin: 0;\r\n	height: auto;\r\n	height: calc-size(auto, size);\r\n}\r\n/* 折叠面板 */\r\n\r\n/* 姑且认为小于600px的屏幕为移动端 */\r\n@media (max-width: 600px) {\r\n	/* 兼容移动端CSS */\r\n	.pops[type-value="panel"] {\r\n		--pops-panel-forms-margin-left-right: 10px;\r\n	}\r\n	.pops[type-value="panel"] {\r\n		width: 92%;\r\n		width: 92vw;\r\n		width: 92dvw;\r\n	}\r\n	.pops[type-value="panel"] .pops-panel-content aside.pops-panel-aside {\r\n		max-width: 20%;\r\n		min-width: auto;\r\n	}\r\n	.pops[type-value="panel"]\r\n		section.pops-panel-container\r\n		.pops-panel-forms-container-item\r\n		> div {\r\n		text-align: left;\r\n		--pops-panel-forms-margin-left-right: 0px;\r\n	}\r\n	.pops[type-value="panel"]\r\n		section.pops-panel-container\r\n		.pops-panel-forms-container-item\r\n		ul {\r\n		margin: 0px !important;\r\n	}\r\n	.pops[type-value="panel"] section.pops-panel-container > ul > li {\r\n		margin: 10px 10px;\r\n	}\r\n	.pops[type-value="panel"]\r\n		section.pops-panel-container\r\n		> ul\r\n		> li\r\n		div:nth-child(2) {\r\n		max-width: 55%;\r\n	}\r\n	.pops[type-value="panel"]\r\n		section.pops-panel-container\r\n		.pops-panel-select\r\n		select {\r\n		min-width: 88px !important;\r\n		width: -webkit-fill-available;\r\n		width: -moz-available;\r\n	}\r\n	.pops[type-value="panel"]\r\n		section.pops-panel-container\r\n		.pops-panel-container-header-ul\r\n		li {\r\n		font-size: 16px;\r\n	}\r\n	.pops[type-value="panel"] .pops-panel-title p[pops],\r\n	.pops[type-value="panel"] section.pops-panel-container > ul li,\r\n	.pops[type-value="panel"] aside.pops-panel-aside ul li {\r\n		font-size: 14px;\r\n	}\r\n}\r\n/* switch的CSS */\r\n.pops-panel-switch {\r\n	display: inline-flex;\r\n	flex-direction: row-reverse;\r\n	align-items: center;\r\n	position: relative;\r\n	font-size: 14px;\r\n	line-height: normal;\r\n	align-content: center;\r\n	height: 32px;\r\n	vertical-align: middle;\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-ms-user-select: none;\r\n	-moz-user-select: none;\r\n}\r\n.pops-panel-switch input.pops-panel-switch__input {\r\n	position: absolute;\r\n	width: 0;\r\n	height: 0;\r\n	opacity: 0;\r\n	margin: 0;\r\n}\r\n.pops-panel-switch:has(input.pops-panel-switch__input:disabled),\r\n.pops-panel-switch[data-disabled],\r\n.pops-panel-switch[data-disabled] .pops-panel-switch__core,\r\n.pops-panel-switch\r\n	input.pops-panel-switch__input:disabled\r\n	+ .pops-panel-switch__core {\r\n	cursor: not-allowed;\r\n	opacity: 0.6;\r\n}\r\n.pops-panel-switch span.pops-panel-switch__core {\r\n	display: inline-flex;\r\n	position: relative;\r\n	align-items: center;\r\n	min-width: 40px;\r\n	height: 20px;\r\n	border: 1px solid rgb(220, 223, 230, var(--pops-bd-opacity));\r\n	outline: 0;\r\n	border-radius: 10px;\r\n	box-sizing: border-box;\r\n	background: rgb(220, 223, 230, var(--pops-bg-opacity));\r\n	cursor: pointer;\r\n	transition: border-color 0.3s, background-color 0.3s;\r\n}\r\n.pops-panel-switch .pops-panel-switch__action {\r\n	position: absolute;\r\n	left: 1px;\r\n	border-radius: 100%;\r\n	transition: all 0.3s;\r\n	width: 16px;\r\n	height: 16px;\r\n	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	color: rgb(220, 223, 230);\r\n}\r\n.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core {\r\n	border-color: rgb(64, 158, 255, var(--pops-bd-opacity));\r\n	background-color: rgb(64, 158, 255, var(--pops-bg-opacity));\r\n}\r\n.pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action {\r\n	left: calc(100% - 17px);\r\n	color: rgb(64, 158, 255);\r\n}\r\n/* switch的CSS */\r\n\r\n/* slider旧的CSS */\r\nsection.pops-panel-container .pops-panel-slider:has(> input[type="range"]) {\r\n	overflow: hidden;\r\n	height: 25px;\r\n	line-height: normal;\r\n	align-content: center;\r\n	display: flex;\r\n	align-items: center;\r\n}\r\nsection.pops-panel-container .pops-panel-slider input[type="range"] {\r\n	height: 6px;\r\n	background: rgb(228, 231, 237, var(--pops-bg-opacity));\r\n	outline: 0;\r\n	-webkit-appearance: none;\r\n	appearance: none;\r\n	width: 100%;\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-slider\r\n	input[type="range"]::-webkit-slider-thumb {\r\n	width: 20px;\r\n	height: 20px;\r\n	border-radius: 50%;\r\n	border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r\n	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\r\n	cursor: pointer;\r\n	-webkit-appearance: none;\r\n	appearance: none;\r\n	border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-slider\r\n	input[type="range"]::-moz-range-thumb {\r\n	width: 20px;\r\n	height: 20px;\r\n	border-radius: 50%;\r\n	border: 1px solid rgb(64, 159, 255, var(--pops-bd-opacity));\r\n	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\r\n	cursor: pointer;\r\n	-webkit-appearance: none;\r\n	appearance: none;\r\n}\r\nsection.pops-panel-container\r\n	.pops-panel-slider\r\n	input[type="range"]::-moz-range-progress {\r\n	height: 6px;\r\n	border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r\n}\r\n/* slider旧的CSS */\r\n\r\n/* slider的CSS */\r\n.pops-slider {\r\n	--pops-slider-color-white: #ffffff;\r\n	--pops-slider-color-primary: #409eff;\r\n	--pops-slider-color-info: #909399;\r\n	--pops-slider-text-color-placeholder: #a8abb2;\r\n	--pops-slider-border-color-light: #e4e7ed;\r\n	--pops-slider-border-radius-circle: 100%;\r\n	--pops-slider-transition-duration-fast: 0.2s;\r\n\r\n	--pops-slider-main-bg-color: var(--pops-slider-color-primary);\r\n	--pops-slider-runway-bg-color: var(--pops-slider-border-color-light);\r\n	--pops-slider-stop-bg-color: var(--pops-slider-color-white);\r\n	--pops-slider-disabled-color: var(--pops-slider-text-color-placeholder);\r\n	--pops-slider-border-radius: 3px;\r\n	--pops-slider-height: 6px;\r\n	--pops-slider-button-size: 20px;\r\n	--pops-slider-button-wrapper-size: 36px;\r\n	--pops-slider-button-wrapper-offset: -15px;\r\n}\r\n\r\n.pops-slider {\r\n	width: 100%;\r\n	height: 32px;\r\n	display: flex;\r\n	align-items: center;\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-ms-user-select: none;\r\n	-moz-user-select: none;\r\n}\r\n\r\n.pops-slider-width {\r\n	flex: 0 0 52%;\r\n	margin-left: 10px;\r\n}\r\n\r\n.pops-slider__runway {\r\n	flex: 1;\r\n	height: var(--pops-slider-height);\r\n	background-color: var(--pops-slider-runway-bg-color);\r\n	border-radius: var(--pops-slider-border-radius);\r\n	position: relative;\r\n	cursor: pointer;\r\n}\r\n\r\n.pops-slider__runway.show-input {\r\n	margin-right: 30px;\r\n	width: auto;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled {\r\n	cursor: default;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__bar {\r\n	background-color: var(--pops-slider-disabled-color);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button {\r\n	border-color: var(--pops-slider-disabled-color);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n	cursor: not-allowed;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n	transform: scale(1);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n	cursor: not-allowed;\r\n}\r\n\r\n.pops-slider__input {\r\n	flex-shrink: 0;\r\n	width: 130px;\r\n}\r\n\r\n.pops-slider__bar {\r\n	height: var(--pops-slider-height);\r\n	background-color: var(--pops-slider-main-bg-color);\r\n	border-top-left-radius: var(--pops-slider-border-radius);\r\n	border-bottom-left-radius: var(--pops-slider-border-radius);\r\n	position: absolute;\r\n}\r\n\r\n.pops-slider__button-wrapper {\r\n	height: var(--pops-slider-button-wrapper-size);\r\n	width: var(--pops-slider-button-wrapper-size);\r\n	position: absolute;\r\n	z-index: 1;\r\n	top: var(--pops-slider-button-wrapper-offset);\r\n	transform: translate(-50%);\r\n	background-color: transparent;\r\n	text-align: center;\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	line-height: normal;\r\n	outline: none;\r\n}\r\n\r\n.pops-slider__button-wrapper:after {\r\n	display: inline-block;\r\n	content: "";\r\n	height: 100%;\r\n	vertical-align: middle;\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover {\r\n	cursor: grab;\r\n}\r\n\r\n.pops-slider__button {\r\n	display: inline-block;\r\n	width: var(--pops-slider-button-size);\r\n	height: var(--pops-slider-button-size);\r\n	vertical-align: middle;\r\n	border: solid 2px var(--pops-slider-main-bg-color);\r\n	background-color: var(--pops-slider-color-white);\r\n	border-radius: 50%;\r\n	box-sizing: border-box;\r\n	transition: var(--pops-slider-transition-duration-fast);\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover,\r\n.pops-slider__button.dragging {\r\n	transform: scale(1.2);\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover {\r\n	cursor: grab;\r\n}\r\n\r\n.pops-slider__button.dragging {\r\n	cursor: grabbing;\r\n}\r\n\r\n.pops-slider__stop {\r\n	position: absolute;\r\n	height: var(--pops-slider-height);\r\n	width: var(--pops-slider-height);\r\n	border-radius: var(--pops-slider-border-radius-circle);\r\n	background-color: var(--pops-slider-stop-bg-color);\r\n	transform: translate(-50%);\r\n}\r\n\r\n.pops-slider__marks {\r\n	top: 0;\r\n	left: 12px;\r\n	width: 18px;\r\n	height: 100%;\r\n}\r\n\r\n.pops-slider__marks-text {\r\n	position: absolute;\r\n	transform: translate(-50%);\r\n	font-size: 14px;\r\n	color: var(--pops-slider-color-info);\r\n	margin-top: 15px;\r\n	white-space: pre;\r\n}\r\n\r\n.pops-slider.is-vertical {\r\n	position: relative;\r\n	display: inline-flex;\r\n	width: auto;\r\n	height: 100%;\r\n	flex: 0;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__runway {\r\n	width: var(--pops-slider-height);\r\n	height: 100%;\r\n	margin: 0 16px;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__bar {\r\n	width: var(--pops-slider-height);\r\n	height: auto;\r\n	border-radius: 0 0 3px 3px;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__button-wrapper {\r\n	top: auto;\r\n	left: var(--pops-slider-button-wrapper-offset);\r\n	transform: translateY(50%);\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__stop {\r\n	transform: translateY(50%);\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__marks-text {\r\n	margin-top: 0;\r\n	left: 15px;\r\n	transform: translateY(50%);\r\n}\r\n\r\n.pops-slider--large {\r\n	height: 40px;\r\n}\r\n\r\n.pops-slider--small {\r\n	height: 24px;\r\n}\r\n/* slider的CSS */\r\n\r\n/* input的CSS */\r\n.pops-panel-input {\r\n	display: flex;\r\n	align-items: center;\r\n	border: 1px solid #dcdfe6;\r\n	border-radius: 4px;\r\n	background-color: #ffffff;\r\n	position: relative;\r\n}\r\n.pops-panel-input:hover {\r\n	box-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n.pops-panel-input:has(input:focus) {\r\n	outline: 0;\r\n	border: 1px solid #409eff;\r\n	border-radius: 4px;\r\n	box-shadow: none;\r\n}\r\n.pops-panel-input input {\r\n	display: inline-flex;\r\n	justify-content: center;\r\n	text-align: start;\r\n	align-items: center;\r\n	align-content: center;\r\n	white-space: nowrap;\r\n	cursor: text;\r\n	box-sizing: border-box;\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	vertical-align: middle;\r\n	-webkit-appearance: none;\r\n	appearance: none;\r\n	background-color: transparent;\r\n	outline: 0;\r\n	transition: 0.1s;\r\n	border: 0;\r\n	font-size: 14px;\r\n	font-weight: 500;\r\n	line-height: normal;\r\n	height: 32px;\r\n	width: 100%;\r\n	flex: 1;\r\n	margin-right: calc(1em + 8px);\r\n	padding: 8px 8px;\r\n}\r\n.pops-panel-input span.pops-panel-input__suffix {\r\n	display: inline-flex;\r\n	white-space: nowrap;\r\n	flex-shrink: 0;\r\n	flex-wrap: nowrap;\r\n	height: 100%;\r\n	text-align: center;\r\n	color: #a8abb2;\r\n	transition: all 0.3s;\r\n	pointer-events: none;\r\n	margin: 0 8px;\r\n	position: absolute;\r\n	right: 0px;\r\n}\r\n.pops-panel-input span.pops-panel-input__suffix-inner {\r\n	pointer-events: all;\r\n	display: inline-flex;\r\n	align-items: center;\r\n	justify-content: center;\r\n}\r\n.pops-panel-input .pops-panel-icon {\r\n	cursor: pointer;\r\n}\r\n.pops-panel-input .pops-panel-icon {\r\n	height: inherit;\r\n	line-height: normal;\r\n	align-content: center;\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	transition: all 0.3s;\r\n}\r\n.pops-panel-input .pops-panel-icon svg {\r\n	height: 1em;\r\n	width: 1em;\r\n}\r\n\r\n.pops-input-disabled {\r\n	background-color: var(--el-disabled-bg-color);\r\n	box-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;\r\n}\r\n.pops-panel-input.pops-input-disabled {\r\n	border: none;\r\n}\r\n.pops-panel-input.pops-input-disabled:hover {\r\n	box-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;\r\n}\r\n.pops-panel-input input:disabled,\r\n.pops-panel-input input:disabled + .pops-panel-input__suffix {\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	color: var(--el-disabled-text-color);\r\n	-webkit-text-fill-color: var(--el-disabled-text-color);\r\n	cursor: not-allowed;\r\n}\r\n.pops-panel-input input:disabled + .pops-panel-input__suffix {\r\n	display: none;\r\n}\r\n/* input的CSS */\r\n\r\n/* textarea的CSS */\r\n.pops-panel-textarea textarea {\r\n	width: 100%;\r\n	/*vertical-align: bottom;*/\r\n	position: relative;\r\n	display: block;\r\n	resize: none;\r\n	padding: 5px 11px;\r\n	/*line-height: 1;*/\r\n	box-sizing: border-box;\r\n	font-size: inherit;\r\n	font-family: inherit;\r\n	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	background-image: none;\r\n	-webkit-appearance: none;\r\n	appearance: none;\r\n	box-shadow: 0 0 0 1px #dcdfe6 inset;\r\n	border-radius: 0;\r\n	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n	border: none;\r\n}\r\n.pops-panel-textarea textarea:hover {\r\n	box-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n.pops-panel-textarea-disable .pops-panel-textarea textarea:hover {\r\n	box-shadow: none;\r\n}\r\n.pops-panel-textarea textarea:focus {\r\n	outline: 0;\r\n	box-shadow: 0 0 0 1px #409eff inset;\r\n}\r\n/* textarea的CSS */\r\n\r\n/* select的CSS */\r\n.pops-panel-select select {\r\n	height: 32px;\r\n	line-height: normal;\r\n	align-content: center;\r\n	min-width: 200px;\r\n	border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));\r\n	border-radius: 5px;\r\n	text-align: center;\r\n	outline: 0;\r\n	background: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n	box-shadow: none;\r\n}\r\n.pops-panel-select select:hover {\r\n	box-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n.pops-panel-select-disable .pops-panel-select select:hover {\r\n	box-shadow: none;\r\n}\r\n.pops-panel-select select:focus {\r\n	border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r\n	box-shadow: none;\r\n}\r\n/* select的CSS */\r\n\r\n/* select-multiple的CSS*/\r\n.pops-panel-select-multiple {\r\n	--el-border-radius-base: 4px;\r\n	--el-fill-color-blank: #ffffff;\r\n	--el-transition-duration: 0.3s;\r\n	--el-border-color: #dcdfe6;\r\n	--el-text-color-placeholder: #a8abb2;\r\n	--color: inherit;\r\n	--el-select-input-color: #a8abb2;\r\n	--el-select-input-font-size: 14px;\r\n	--el-text-color-regular: #606266;\r\n	--el-color-info: #909399;\r\n	--el-color-info-light-9: #f4f4f5;\r\n	--el-color-info-light-8: #e9e9eb;\r\n	--el-color-primary-light-9: #ecf5ff;\r\n	--el-color-primary-light-8: #d9ecff;\r\n	--el-color-primary: #409eff;\r\n	--el-color-white: #ffffff;\r\n	width: 200px;\r\n	/* 左侧内容*/\r\n	/* 左侧内容*/\r\n	/* 右侧箭头图标*/\r\n	/* 右侧箭头图标*/\r\n	/* tag*/\r\n}\r\n.pops-panel-select-multiple .el-select__wrapper {\r\n	display: flex;\r\n	align-items: center;\r\n	position: relative;\r\n	box-sizing: border-box;\r\n	cursor: pointer;\r\n	text-align: left;\r\n	font-size: 14px;\r\n	padding: 4px 12px;\r\n	gap: 6px;\r\n	min-height: 32px;\r\n	line-height: normal;\r\n	align-content: center;\r\n	border-radius: var(--el-border-radius-base);\r\n	background-color: var(--el-fill-color-blank);\r\n	transition: var(--el-transition-duration);\r\n	transform: translateZ(0);\r\n	box-shadow: 0 0 0 1px var(--el-border-color) inset;\r\n}\r\n.pops-panel-select-multiple .el-select__wrapper.is-focused {\r\n	box-shadow: 0 0 0 1px var(--el-color-primary) inset;\r\n}\r\n.pops-panel-select-multiple .el-select__selection {\r\n	position: relative;\r\n	display: flex;\r\n	flex-wrap: wrap;\r\n	align-items: center;\r\n	flex: 1;\r\n	min-width: 0;\r\n	gap: 6px;\r\n}\r\n.pops-panel-select-multiple .el-select__selected-item {\r\n	display: flex;\r\n	flex-wrap: wrap;\r\n	-webkit-user-select: none;\r\n	user-select: none;\r\n}\r\n.pops-panel-select-multiple\r\n	.el-select__selected-item.el-select__choose_tag\r\n	.el-tag {\r\n	max-width: 200px;\r\n}\r\n.pops-panel-select-multiple .el-select__input-wrapper {\r\n	max-width: 100%;\r\n}\r\n.pops-panel-select-multiple .el-select__selection.is-near {\r\n	margin-left: -8px;\r\n}\r\n.pops-panel-select-multiple .el-select__placeholder {\r\n	position: absolute;\r\n	display: block;\r\n	top: 50%;\r\n	transform: translateY(-50%);\r\n	width: 100%;\r\n	overflow: hidden;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	color: var(--el-input-text-color, var(--el-text-color-regular));\r\n}\r\n.pops-panel-select-multiple .el-select__placeholder.is-transparent {\r\n	-webkit-user-select: none;\r\n	user-select: none;\r\n	color: var(--el-text-color-placeholder);\r\n}\r\n.pops-panel-select-multiple .el-select__prefix,\r\n.pops-panel-select-multiple .el-select__suffix {\r\n	display: flex;\r\n	align-items: center;\r\n	flex-shrink: 0;\r\n	gap: 6px;\r\n	color: var(--el-input-icon-color, var(--el-text-color-placeholder));\r\n}\r\n.pops-panel-select-multiple .el-icon {\r\n	--color: inherit;\r\n	height: 1em;\r\n	width: 1em;\r\n	line-height: normal;\r\n	align-content: center;\r\n	display: inline-flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	position: relative;\r\n	fill: currentColor;\r\n	color: var(--color);\r\n	font-size: inherit;\r\n}\r\n.pops-panel-select-multiple .el-icon svg {\r\n	height: 1em;\r\n	width: 1em;\r\n}\r\n.pops-panel-select-multiple .el-select__caret {\r\n	color: var(--el-select-input-color);\r\n	font-size: var(--el-select-input-font-size);\r\n	transition: var(--el-transition-duration);\r\n	transform: rotate(0);\r\n	cursor: pointer;\r\n}\r\n.pops-panel-select-multiple .el-tag {\r\n	--el-tag-font-size: 12px;\r\n	--el-tag-border-radius: 4px;\r\n	--el-tag-border-radius-rounded: 9999px;\r\n}\r\n.pops-panel-select-multiple .el-tag {\r\n	background-color: var(--el-tag-bg-color);\r\n	border-color: var(--el-tag-border-color);\r\n	color: var(--el-tag-text-color);\r\n	display: inline-flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	vertical-align: middle;\r\n	height: 24px;\r\n	padding: 0 9px;\r\n	font-size: var(--el-tag-font-size);\r\n	line-height: normal;\r\n	align-content: center;\r\n	border-width: 1px;\r\n	border-style: solid;\r\n	border-radius: var(--el-tag-border-radius);\r\n	box-sizing: border-box;\r\n	white-space: nowrap;\r\n	--el-icon-size: 14px;\r\n	--el-tag-bg-color: var(--el-color-primary-light-9);\r\n	--el-tag-border-color: var(--el-color-primary-light-8);\r\n	--el-tag-hover-color: var(--el-color-primary);\r\n}\r\n.pops-panel-select-multiple .el-select__selection .el-tag {\r\n	cursor: pointer;\r\n	border-color: transparent;\r\n}\r\n.pops-panel-select-multiple .el-tag.el-tag--info {\r\n	--el-tag-bg-color: var(--el-color-info-light-9);\r\n	--el-tag-border-color: var(--el-color-info-light-8);\r\n	--el-tag-hover-color: var(--el-color-info);\r\n}\r\n.pops-panel-select-multiple .el-tag.el-tag--info {\r\n	--el-tag-text-color: var(--el-color-info);\r\n}\r\n.pops-panel-select-multiple .el-tag.is-closable {\r\n	padding-right: 5px;\r\n}\r\n.pops-panel-select-multiple .el-select__selection .el-tag .el-tag__content {\r\n	min-width: 0;\r\n}\r\n.pops-panel-select-multiple .el-tag .el-tag__close {\r\n	flex-shrink: 0;\r\n	color: var(--el-tag-text-color);\r\n}\r\n.pops-panel-select-multiple .el-tag .el-tag__close:hover {\r\n	color: var(--el-color-white);\r\n	background-color: var(--el-tag-hover-color);\r\n}\r\n.pops-panel-select-multiple .el-tag .el-icon {\r\n	border-radius: 50%;\r\n	cursor: pointer;\r\n	font-size: calc(var(--el-icon-size) - 2px);\r\n	height: var(--el-icon-size);\r\n	width: var(--el-icon-size);\r\n}\r\n.pops-panel-select-multiple .el-tag .el-tag__close {\r\n	margin-left: 6px;\r\n}\r\n.pops-panel-select-multiple .el-select__tags-text {\r\n	display: block;\r\n	line-height: normal;\r\n	align-content: center;\r\n	overflow: hidden;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n}\r\n/* select-multiple的CSS*/\r\n\r\n/* deepMenu的css */\r\n.pops-panel-deepMenu-nav-item {\r\n	cursor: pointer;\r\n}\r\n.pops-panel-deepMenu-nav-item:active {\r\n	background: #e9e9e9;\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n}\r\n.pops-panel-deepMenu-nav-item .pops-panel-deepMenu {\r\n	display: flex;\r\n	align-items: center;\r\n	color: #6c6c6c;\r\n	fill: #6c6c6c;\r\n}\r\n.pops-panel-deepMenu-nav-item .pops-panel-deepMenu-arrowRight-icon {\r\n	width: 15px;\r\n	height: 15px;\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n.pops-panel-deepMenu-container .pops-panel-deepMenu-container-header {\r\n	display: flex;\r\n	align-items: center;\r\n	width: -webkit-fill-available;\r\n	width: -moz-available;\r\n	padding: var(--pops-panel-forms-header-padding-top-bottom)\r\n		calc(\r\n			var(--pops-panel-forms-margin-left-right) +\r\n				var(--pops-panel-forms-container-li-padding-left-right) -\r\n				var(--pops-panel-forms-header-icon-size)\r\n		);\r\n}\r\n.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {\r\n	width: var(--pops-panel-forms-header-icon-size);\r\n	height: var(--pops-panel-forms-header-icon-size);\r\n	display: flex;\r\n	align-items: center;\r\n	cursor: pointer;\r\n}\r\n/* 修复safari上图标大小未正常显示 */\r\n.pops-panel-deepMenu-container\r\n	.pops-panel-deepMenu-container-left-arrow-icon\r\n	> svg {\r\n	width: inherit;\r\n	height: inherit;\r\n}\r\n/* deepMenu的css */\r\n';
  var rightClickMenuCSS = '.pops-rightClickMenu * {\r\n	-webkit-box-sizing: border-box;\r\n	box-sizing: border-box;\r\n	margin: 0;\r\n	padding: 0;\r\n	-webkit-tap-highlight-color: transparent;\r\n	scrollbar-width: thin;\r\n}\r\n.pops-rightClickMenu {\r\n	position: fixed;\r\n	z-index: 10000;\r\n	text-align: center;\r\n	border-radius: 3px;\r\n	font-size: 16px;\r\n	font-weight: 500;\r\n	background: #fff;\r\n	box-shadow: 0px 1px 6px 1px #cacaca;\r\n}\r\n.pops-rightClickMenu-anim-grid {\r\n	display: grid;\r\n	transition: 0.3s;\r\n	grid-template-rows: 0fr;\r\n}\r\n.pops-rightClickMenu-anim-show {\r\n	grid-template-rows: 1fr;\r\n}\r\n.pops-rightClickMenu-is-visited {\r\n	background: #dfdfdf;\r\n}\r\ni.pops-rightClickMenu-icon {\r\n	height: 1em;\r\n	width: 1em;\r\n	line-height: normal;\r\n	align-content: center;\r\n	display: inline-flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	position: relative;\r\n	fill: currentColor;\r\n	color: inherit;\r\n	font-size: inherit;\r\n	margin-right: 6px;\r\n}\r\ni.pops-rightClickMenu-icon[is-loading="true"] {\r\n	animation: rotating 2s linear infinite;\r\n}\r\n.pops-rightClickMenu li:hover {\r\n	background: #dfdfdf;\r\n	cursor: pointer;\r\n}\r\n.pops-rightClickMenu ul {\r\n	margin: 0;\r\n	padding: 0;\r\n	display: flex;\r\n	flex-direction: column;\r\n	align-items: flex-start;\r\n	justify-content: center;\r\n	overflow: hidden;\r\n}\r\n.pops-rightClickMenu ul li {\r\n	padding: 5px 10px;\r\n	margin: 2.5px 5px;\r\n	border-radius: 3px;\r\n	display: flex;\r\n	width: -webkit-fill-available;\r\n	width: -moz-available;\r\n	text-align: left;\r\n	user-select: none;\r\n	-webkit-user-select: none;\r\n	-moz-user-select: none;\r\n	-ms-user-select: none;\r\n	align-items: center;\r\n}\r\n.pops-rightClickMenu ul li:first-child {\r\n	margin-top: 5px;\r\n}\r\n.pops-rightClickMenu ul li:last-child {\r\n	margin-bottom: 5px;\r\n}\r\n';
  var SVG_min = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>\r\n</svg>\r\n';
  var SVG_mise = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>\r\n</svg>\r\n';
  var SVG_max = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>\r\n</svg>\r\n';
  var SVG_close = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>\r\n</svg>\r\n';
  var SVG_edit = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>\r\n	<path\r\n		fill="currentColor"\r\n		d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>\r\n</svg>\r\n';
  var SVG_share = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>\r\n</svg>\r\n';
  var SVG_delete = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>\r\n</svg>\r\n';
  var SVG_search = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>\r\n</svg>\r\n';
  var SVG_upload = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>\r\n</svg>\r\n';
  var SVG_loading = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>\r\n</svg>\r\n';
  var SVG_next = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r\n</svg>\r\n';
  var SVG_prev = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r\n</svg>\r\n';
  var SVG_eleme = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>\r\n</svg>\r\n';
  var SVG_elemePlus = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"\r\n		fill="currentColor"></path>\r\n</svg>\r\n';
  var SVG_chromeFilled = '<svg\r\n	xmlns="http://www.w3.org/2000/svg"\r\n	viewBox="0 0 1024 1024"\r\n	xml:space="preserve">\r\n	<path\r\n		d="M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"\r\n		fill="currentColor"></path>\r\n	<path\r\n		d="M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"\r\n		fill="currentColor"></path>\r\n	<path\r\n		d="M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zM512.01 938.68H512zM414.76 701.95a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"\r\n		fill="currentColor"></path>\r\n</svg>\r\n';
  var SVG_cpu = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>\r\n	<path\r\n		fill="currentColor"\r\n		d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>\r\n</svg>\r\n';
  var SVG_videoPlay = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>\r\n</svg>\r\n';
  var SVG_videoPause = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>\r\n</svg>\r\n';
  var SVG_headset = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>\r\n</svg>\r\n';
  var SVG_monitor = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>\r\n</svg>\r\n';
  var SVG_documentCopy = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>\r\n</svg>\r\n';
  var SVG_picture = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		fill="currentColor"\r\n		d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>\r\n	<path\r\n		fill="currentColor"\r\n		d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>\r\n</svg>\r\n';
  var SVG_circleClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r\n	<path\r\n		fill="currentColor"\r\n		d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>\r\n	<path\r\n		fill="currentColor"\r\n		d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>\r\n</svg>\r\n';
  var SVG_view = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r\n	<path\r\n		fill="currentColor"\r\n		d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>\r\n</svg>\r\n';
  var SVG_hide = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r\n	<path\r\n		fill="currentColor"\r\n		d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>\r\n	<path\r\n		fill="currentColor"\r\n		d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>\r\n</svg>\r\n';
  var SVG_keyboard = '<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg">\r\n	<path\r\n		d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>\r\n	<path\r\n		d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>\r\n	<path\r\n		d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>\r\n</svg>\r\n';
  var SVG_arrowRight = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r\n	<path\r\n		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r\n</svg>\r\n';
  var SVG_arrowLeft = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r\n	<path\r\n		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r\n</svg>\r\n';
  const GlobalConfig = {
    config: {},
    /**
     * 为所有弹窗设置全局属性
     */
    setGlobalConfig(config) {
      Reflect.ownKeys(config).forEach((keyName) => {
        Reflect.set(GlobalConfig.config, keyName, Reflect.get(config, keyName));
      });
    },
    /**
     * 获取全局配置
     */
    getGlobalConfig() {
      let result2 = {};
      Object.keys(GlobalConfig.config).forEach((keyName) => {
        let configValue = Reflect.get(GlobalConfig.config, keyName);
        if (keyName === "style") {
          let style = configValue == null ? "" : typeof configValue === "function" ? (
            // @ts-ignore
            configValue()
          ) : configValue;
          if (typeof style === "string") {
            result2.style = style;
          }
        } else if (keyName === "zIndex") {
          let zIndex = configValue == null ? "" : typeof configValue === "function" ? configValue() : configValue;
          if (typeof zIndex === "string") {
            let newIndex = zIndex = parseInt(zIndex);
            if (!isNaN(newIndex)) {
              result2.zIndex = newIndex;
            }
          } else {
            if (!isNaN(zIndex)) {
              result2.zIndex = zIndex;
            }
          }
        } else if (keyName === "mask") {
          let mask = GlobalConfig.config.mask == null ? {} : GlobalConfig.config.mask;
          if (typeof mask === "object" && mask != null) {
            result2.mask = mask;
          }
        } else {
          Reflect.set(result2, keyName, configValue);
        }
      });
      return result2;
    }
  };
  const PopsElementHandler = {
    /**
     * 获取遮罩层HTML
     * @param guid
     * @param zIndex z-index
     * @param style
     */
    getMaskHTML(guid, zIndex = 101, style = "") {
      zIndex = zIndex - 100;
      if (style.startsWith(";")) {
        style = style.replace(";", "");
      }
      return `<div class="pops-mask" data-guid="${guid}" style="z-index:${zIndex};${style}"></div>`;
    },
    /**
     * 获取动画层HTML
     * @param guid
     * @param type
     * @param config
     * @param html
     * @param bottomBtnHTML
     * @param zIndex
     */
    getAnimHTML(guid, type, config, html = "", bottomBtnHTML = "", zIndex) {
      let __config = config;
      let popsAnimStyle = "";
      let popsStyle = "";
      let popsPosition = __config.position || "";
      if (config.zIndex != null) {
        popsAnimStyle += `z-index: ${zIndex};`;
        popsStyle += `z-index: ${zIndex};`;
      }
      if (__config.width != null) {
        popsStyle += `width: ${__config.width};`;
      }
      if (__config.height != null) {
        popsStyle += `height: ${__config.height};`;
      }
      let hasBottomBtn = bottomBtnHTML.trim() === "" ? false : true;
      return (
        /*html*/
        `
		<div 
			class="pops-anim"
			anim="${__config.animation || ""}"
			style="${popsAnimStyle}"
			data-guid="${guid}">
            ${config.style != null ? `<style tyle="text/css">${config.style}</style>` : ""}
			<div
				class="pops ${config.class || ""}"
				data-bottom-btn="${hasBottomBtn}"
				type-value="${type}"
				style="${popsStyle}"
				position="${popsPosition}"
				data-guid="${guid}">
				${html}
			</div>
		</div>`
      );
    },
    /**
     * 获取顶部按钮层HTML
     * @param type
     * @param config
     */
    getHeaderBtnHTML(type, config) {
      var _a2, _b, _c, _d, _e;
      if (!config.btn) {
        return "";
      }
      let __config_confirm = config;
      if (type !== "iframe" && !((_b = (_a2 = __config_confirm.btn) == null ? void 0 : _a2.close) == null ? void 0 : _b.enable)) {
        return "";
      }
      let resultHTML = "";
      let closeHTML = "";
      let __config_iframe = config;
      if (type === "iframe" && ((_c = __config_iframe.topRightButton) == null ? void 0 : _c.trim()) !== "") {
        let topRightButtonHTML = "";
        __config_iframe.topRightButton.split("|").forEach((item) => {
          item = item.toLowerCase();
          topRightButtonHTML += `
                <button class="pops-header-control" type="${item}">
                    <i class="pops-icon">${pops.config.iconSVG[item]}</i>
                </button>`;
        });
        resultHTML = `
            <div class="pops-header-controls" data-margin>
                ${topRightButtonHTML}
            </div>`;
      } else {
        if ((_e = (_d = __config_confirm.btn) == null ? void 0 : _d.close) == null ? void 0 : _e.enable) {
          closeHTML = `
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="close" data-header>
                    <i class="pops-icon">${pops.config.iconSVG["close"]}</i>
                    </button>
                </div>`;
        }
        resultHTML = closeHTML;
      }
      return resultHTML;
    },
    /**
     * 获取底部按钮层HTML
     * @param type
     * @param config
     */
    getBottomBtnHTML(type, config) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      if (!config.btn) {
        return "";
      }
      let __config_confirm = config;
      if (!(((_b = (_a2 = config.btn) == null ? void 0 : _a2.ok) == null ? void 0 : _b.enable) || ((_d = (_c = __config_confirm.btn) == null ? void 0 : _c.cancel) == null ? void 0 : _d.enable) || ((_f = (_e = __config_confirm.btn) == null ? void 0 : _e.other) == null ? void 0 : _f.enable))) {
        return "";
      }
      let btnStyle = "";
      let resultHTML = "";
      let okHTML = "";
      let cancelHTML = "";
      let ohterHTML = "";
      if (config.btn.position) {
        btnStyle += `justify-content: ${config.btn.position};`;
      }
      if (__config_confirm.btn.reverse) {
        btnStyle += "flex-direction: row-reverse;";
      }
      if ((_h = (_g = config.btn) == null ? void 0 : _g.ok) == null ? void 0 : _h.enable) {
        let okButtonSizeClassName = "";
        if (config.btn.ok.size === "large") {
          okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
        } else if (config.btn.ok.size === "small") {
          okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
        }
        let okIconHTML = "";
        let okIcon = __config_confirm.btn.ok.icon;
        if (okIcon !== "") {
          let iconHTML = "";
          if (okIcon in pops.config.iconSVG) {
            iconHTML = pops.config.iconSVG[okIcon];
          } else {
            iconHTML = okIcon;
          }
          iconHTML = iconHTML || "";
          okIconHTML = `
                <i class="pops-bottom-icon" is-loading="${config.btn.ok.iconIsLoading}">
                    ${iconHTML}
                </i>`;
        }
        okHTML = `
            <button 
                    class="pops-${type}-btn-ok ${okButtonSizeClassName}"
                    type="${(_i = __config_confirm.btn.ok) == null ? void 0 : _i.type}"
					data-has-icon="${(__config_confirm.btn.ok.icon || "") !== ""}"
                    data-rightIcon="${(_j = __config_confirm.btn.ok) == null ? void 0 : _j.rightIcon}"
            >
            ${okIconHTML}
                <span>${config.btn.ok.text}</span>
            </button>`;
      }
      if ((_l = (_k = __config_confirm.btn) == null ? void 0 : _k.cancel) == null ? void 0 : _l.enable) {
        let cancelButtonSizeClassName = "";
        if (__config_confirm.btn.cancel.size === "large") {
          cancelButtonSizeClassName = "pops-button-" + __config_confirm.btn.cancel.size;
        } else if (__config_confirm.btn.cancel.size === "small") {
          cancelButtonSizeClassName = "pops-button-" + __config_confirm.btn.cancel.size;
        }
        let cancelIconHTML = "";
        let cancelIcon = __config_confirm.btn.cancel.icon;
        if (cancelIcon !== "") {
          let iconHTML = "";
          if (cancelIcon in pops.config.iconSVG) {
            iconHTML = pops.config.iconSVG[cancelIcon];
          } else {
            iconHTML = cancelIcon;
          }
          iconHTML = iconHTML || "";
          cancelIconHTML = `
                <i class="pops-bottom-icon" is-loading="${__config_confirm.btn.cancel.iconIsLoading}">
                    ${iconHTML}
                </i>`;
        }
        cancelHTML = `
            <button
                    class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
                    type="${__config_confirm.btn.cancel.type}"
					data-has-icon="${(__config_confirm.btn.cancel.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.cancel.rightIcon}"
            >
            ${cancelIconHTML}
                <span>${__config_confirm.btn.cancel.text}</span>
            </button>`;
      }
      if ((_n = (_m = __config_confirm.btn) == null ? void 0 : _m.other) == null ? void 0 : _n.enable) {
        let otherButtonSizeClassName = "";
        if (__config_confirm.btn.other.size === "large") {
          otherButtonSizeClassName = "pops-button-" + __config_confirm.btn.other.size;
        } else if (__config_confirm.btn.other.size === "small") {
          otherButtonSizeClassName = "pops-button-" + __config_confirm.btn.other.size;
        }
        let otherIconHTML = "";
        let otherIcon = __config_confirm.btn.other.icon;
        if (otherIcon !== "") {
          let iconHTML = "";
          if (otherIcon in pops.config.iconSVG) {
            iconHTML = pops.config.iconSVG[otherIcon];
          }
          iconHTML = iconHTML || "";
          otherIconHTML = `
                <i class="pops-bottom-icon" is-loading="${__config_confirm.btn.other.iconIsLoading}">
                    ${iconHTML}
                </i>`;
        }
        ohterHTML = `
            <button
                    class="pops-${type}-btn-other ${otherButtonSizeClassName}"
                    type="${__config_confirm.btn.other.type}"
					data-has-icon="${(__config_confirm.btn.other.icon || "") !== ""}"
                    data-rightIcon="${__config_confirm.btn.other.rightIcon}"
            >
            ${otherIconHTML}
                <span>${__config_confirm.btn.other.text}</span>
            </button>`;
      }
      if (__config_confirm.btn.merge) {
        let flexStyle = "display: flex;";
        if (__config_confirm.btn.mergeReverse) {
          flexStyle += "flex-direction: row-reverse;";
        } else {
          flexStyle += "flex-direction: row;";
        }
        resultHTML = `
            <div class="pops-${type}-btn" style="${btnStyle}">
                ${ohterHTML}
                <div 
                    class="pops-${type}-btn-merge"
                    style="${flexStyle}">
                    ${okHTML}
                    ${cancelHTML}
                </div>
            </div>
            `;
      } else {
        resultHTML = `
            <div class="pops-${type}-btn" style="${btnStyle}">
                ${okHTML}
                ${cancelHTML}
                ${ohterHTML}
            </div>
            `;
      }
      return resultHTML;
    },
    /**
     * 获取标题style
     * @param type
     * @param config
     */
    getHeaderStyle(type, config) {
      var _a2, _b, _c, _d;
      return {
        headerStyle: ((_a2 = config == null ? void 0 : config.title) == null ? void 0 : _a2.html) ? ((_b = config == null ? void 0 : config.title) == null ? void 0 : _b.style) || "" : "",
        headerPStyle: ((_c = config == null ? void 0 : config.title) == null ? void 0 : _c.html) ? "" : ((_d = config == null ? void 0 : config.title) == null ? void 0 : _d.style) || ""
      };
    },
    /**
     * 获取内容style
     * @param type
     * @param config
     */
    getContentStyle(type, config) {
      var _a2, _b, _c, _d;
      return {
        contentStyle: ((_a2 = config == null ? void 0 : config.content) == null ? void 0 : _a2.html) ? ((_b = config == null ? void 0 : config.content) == null ? void 0 : _b.style) || "" : "",
        contentPStyle: ((_c = config == null ? void 0 : config.content) == null ? void 0 : _c.html) ? "" : ((_d = config == null ? void 0 : config.content) == null ? void 0 : _d.style) || ""
      };
    },
    /**
     * 将html转换成元素
     * @param html
     */
    parseElement(html) {
      return popsUtils.parseTextToDOM(html);
    }
  };
  const PopsHandler = {
    /**
     * 创建shadow
     */
    handlerShadow(config) {
      let $shadowContainer = document.createElement("div");
      $shadowContainer.className = "pops-shadow-container";
      if (config.useShadowRoot) {
        let $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
        return {
          $shadowContainer,
          $shadowRoot
        };
      } else {
        return {
          $shadowContainer,
          $shadowRoot: $shadowContainer
        };
      }
    },
    /**
     * 处理初始化
     * @param $shadowRoot 所在的shadowRoot
     * @param cssText 添加进ShadowRoot的CSS
     */
    handleInit($shadowRoot, cssText) {
      pops.init();
      if (!arguments.length) {
        return;
      }
      if (Array.isArray(cssText)) {
        for (let index = 0; index < cssText.length; index++) {
          this.handleInit($shadowRoot, cssText[index]);
        }
      } else {
        let $css = popsDOMUtils.createElement("style", {
          innerHTML: cssText
        }, {
          "data-type": "PopsHandler.handleInit"
        });
        $shadowRoot.appendChild($css);
      }
    },
    /**
     * 处理遮罩层
     *
     * + 设置遮罩层的点击事件
     * @param details 传递的配置
     */
    handleMask(details = {}) {
      let result2 = {
        maskElement: popsUtils.parseTextToDOM(details.maskHTML)
      };
      let isMaskClick = false;
      function clickEvent(event) {
        popsDOMUtils.preventEvent(event);
        let targetLayer = pops.config.layer[details.type];
        function originalRun() {
          if (details.config.mask.clickEvent.toClose) {
            PopsInstanceUtils.close(details.type, targetLayer, details.guid, details.config, details.animElement);
          } else if (details.config.mask.clickEvent.toHide) {
            PopsInstanceUtils.hide(details.type, targetLayer, details.guid, details.config, details.animElement, result2.maskElement);
          }
        }
        if (typeof details.config.mask.clickCallBack === "function") {
          details.config.mask.clickCallBack(originalRun, details.config);
        } else {
          originalRun();
        }
        return false;
      }
      if (details.config.mask.clickEvent.toClose || details.config.mask.clickEvent.toHide) {
        let isAnimElement2 = function(element) {
          var _a2;
          return Boolean(((_a2 = element == null ? void 0 : element.localName) == null ? void 0 : _a2.toLowerCase()) === "div" && element.className && element.className === "pops-anim" && element.hasAttribute("anim"));
        };
        popsDOMUtils.on(details.animElement, ["touchstart", "mousedown"], void 0, (event) => {
          let $click = event.composedPath()[0];
          isMaskClick = isAnimElement2($click);
        });
        popsDOMUtils.on(details.animElement, "click", void 0, (event) => {
          let $click = event.composedPath()[0];
          if (isAnimElement2($click) && isMaskClick) {
            return clickEvent(event);
          }
        });
        popsDOMUtils.on(result2.maskElement, "click", void 0, (event) => {
          isMaskClick = true;
          clickEvent(event);
        });
      }
      return result2;
    },
    /**
     * 处理获取元素
     * @param animElement
     * @param type
     */
    handleQueryElement(animElement, type) {
      return {
        /**
         * 主元素
         */
        popsElement: animElement.querySelector(".pops[type-value"),
        /**
         * 确认按钮
         */
        btnOkElement: animElement.querySelector(`.pops-${type}-btn-ok`),
        /**
         * 取消按钮
         */
        btnCancelElement: animElement.querySelector(`.pops-${type}-btn-cancel`),
        /**
         * 其它按钮
         */
        btnOtherElement: animElement.querySelector(`.pops-${type}-btn-other`),
        /**
         * 标题元素
         */
        titleElement: animElement.querySelector(`.pops-${type}-title`),
        /**
         * 输入框元素
         */
        inputElement: animElement.querySelector(`.pops-${type}-content textarea[pops]`) ? animElement.querySelector(`.pops-${type}-content textarea[pops]`) : animElement.querySelector(`.pops-${type}-content input[pops]`),
        /**
         * 顶部按钮控制层元素
         */
        headerControlsElement: animElement.querySelector(".pops-header-controls"),
        /**
         * iframe元素
         */
        iframeElement: animElement.querySelector("iframe[pops]"),
        /**
         * 加载中元素
         */
        loadingElement: animElement.querySelector(".pops-loading"),
        /**
         * 内容元素
         */
        contentElement: animElement.querySelector(`.pops-${type}-content`),
        /**
         * 内容侧边栏容器元素
         */
        contentAsideElement: animElement.querySelector(`.pops-${type}-content aside.pops-${type}-aside`),
        /**
         * 内容主要区域容器元素
         */
        contentSectionContainerElement: animElement.querySelector(`.pops-${type}-content section.pops-${type}-container`),
        /**
         * 内容加载中元素
         */
        contentLoadingElement: animElement.querySelector(`.pops-${type}-content-global-loading`),
        /**
         * 顶部缩小按钮
         */
        headerMinBtnElement: animElement.querySelector(".pops-header-control[type='min']"),
        /**
         * 顶部放大按钮
         */
        headerMaxBtnElement: animElement.querySelector(".pops-header-control[type='max']"),
        /**
         * 顶部恢复原样按钮
         */
        headerMiseBtnElement: animElement.querySelector(".pops-header-control[type='mise']"),
        /**
         * 顶部关闭按钮
         */
        headerCloseBtnElement: animElement.querySelector(".pops-header-control[type='close']"),
        /**
         * 文件夹列表元素
         */
        folderListElement: animElement.querySelector(".pops-folder-list"),
        /**
         * 文件夹列表顶部元素
         */
        folderListHeaderElement: animElement.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),
        /**
         * 文件夹列表行元素
         */
        folderListHeaderRowElement: animElement.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),
        /**
         * 文件夹列表tbody元素
         */
        folderListBodyElement: animElement.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),
        /**
         * 文件夹列表primary元素
         */
        folderFileListBreadcrumbPrimaryElement: animElement.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),
        /**
         * 文件夹排序按钮-文件名
         */
        folderListSortFileNameElement: animElement.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),
        /**
         * 文件夹排序按钮-修改时间
         */
        folderListSortLatestTimeElement: animElement.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),
        /**
         * 文件夹排序按钮-文件大小
         */
        folderListSortFileSizeElement: animElement.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]')
      };
    },
    /**
     * 获取事件配置
     * @param guid
     * @param $shadowContainer
     * @param $shadowRoot
     * @param mode 当前弹窗类型
     * @param animElement 动画层
     * @param popsElement 主元素
     * @param maskElement 遮罩层
     * @param config 当前配置
     */
    handleEventDetails(guid, $shadowContainer, $shadowRoot, mode, animElement, popsElement, maskElement, config) {
      return {
        $shadowContainer,
        $shadowRoot,
        element: animElement,
        animElement,
        popsElement,
        maskElement,
        mode,
        guid,
        close() {
          PopsInstanceUtils.close(mode, pops.config.layer[mode], guid, config, animElement);
        },
        hide() {
          PopsInstanceUtils.hide(mode, pops.config.layer[mode], guid, config, animElement, maskElement);
        },
        show() {
          PopsInstanceUtils.show(mode, pops.config.layer[mode], guid, config, animElement, maskElement);
        }
      };
    },
    /**
     * 获取loading的事件配置
     * @param guid
     * @param mode 当前弹窗类型
     * @param animElement 动画层
     * @param popsElement 主元素
     * @param maskElement 遮罩层
     * @param config 当前配置
     */
    handleLoadingEventDetails(guid, mode, animElement, popsElement, maskElement, config) {
      return {
        element: animElement,
        animElement,
        popsElement,
        maskElement,
        mode,
        guid,
        close() {
          PopsInstanceUtils.close(mode, pops.config.layer[mode], guid, config, animElement);
        },
        hide() {
          PopsInstanceUtils.hide(mode, pops.config.layer[mode], guid, config, animElement, maskElement);
        },
        show() {
          PopsInstanceUtils.show(mode, pops.config.layer[mode], guid, config, animElement, maskElement);
        }
      };
    },
    /**
     * 处理返回的配置，针对popsHandler.handleEventDetails
     */
    handleResultDetails(details) {
      let resultDetails = Object.assign({}, details);
      popsUtils.delete(resultDetails, "type");
      popsUtils.delete(resultDetails, "function");
      return resultDetails;
    },
    /**
     * 处理点击事件
     * @param type 当前按钮类型
     * @param $btn 按钮元素
     * @param eventDetails 事件配置，由popsHandler.handleEventDetails创建的
     * @param callback 点击回调
     */
    handleClickEvent(type, $btn, eventDetails, callback2) {
      popsDOMUtils.on($btn, "click", (event) => {
        let extraParam = {
          type
        };
        callback2(Object.assign(eventDetails, extraParam), event);
      }, {
        capture: true
      });
    },
    /**
     * 全局监听键盘事件
     * @param keyName 键名|键值
     * @param otherKeyList 组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
     * @param callback 回调函数
     */
    handleKeyboardEvent(keyName, otherKeyList = [], callback2) {
      let keyboardEvent = function(event) {
        let _keyName = event.code || event.key;
        let _keyValue = event.charCode || event.keyCode || event.which;
        if (otherKeyList.includes("ctrl") && !event.ctrlKey) {
          return;
        }
        if (otherKeyList.includes("alt") && !event.altKey) {
          return;
        }
        if (otherKeyList.includes("meta") && !event.metaKey) {
          return;
        }
        if (otherKeyList.includes("shift") && !event.shiftKey) {
          return;
        }
        if (typeof keyName === "string" && keyName === _keyName) {
          callback2 && callback2(event);
        } else if (typeof keyName === "number" && keyName === _keyValue) {
          callback2 && callback2(event);
        }
      };
      popsDOMUtils.on(PopsCore.globalThis, "keydown", keyboardEvent, {
        capture: true
      });
      return {
        removeKeyboardEvent() {
          popsDOMUtils.off(globalThis, "keydown", keyboardEvent, {
            capture: true
          });
        }
      };
    },
    /**
     * 处理prompt的点击事件
     * @param type 触发事件类型
     * @param inputElement 输入框
     * @param  $btn 按钮元素
     * @param eventDetails 事件配置，由popsHandler.handleEventDetails创建的
     * @param callback 点击回调
     */
    handlePromptClickEvent(type, inputElement, $btn, eventDetails, callback2) {
      popsDOMUtils.on($btn, "click", (event) => {
        let extraParam = {
          type,
          text: inputElement.value
        };
        callback2(Object.assign(eventDetails, extraParam), event);
      }, {
        capture: true
      });
    },
    /**
     * 把配置的z-index配置转为数字
     * @param zIndex
     */
    handleZIndex(zIndex) {
      if (typeof zIndex === "function") {
        return zIndex();
      } else {
        return zIndex;
      }
    },
    /**
     * 处理config.only
     * @param type 当前弹窗类型
     * @param config 配置
     */
    handleOnly(type, config) {
      if (config.only) {
        if (type === "loading" || type === "tooltip" || type === "rightClickMenu") {
          let layer = pops.config.layer[type];
          if (layer) {
            PopsInstanceUtils.removeInstance([layer], "", true);
          }
        } else {
          PopsInstanceUtils.removeInstance([
            pops.config.layer.alert,
            pops.config.layer.confirm,
            pops.config.layer.prompt,
            pops.config.layer.iframe,
            pops.config.layer.drawer,
            pops.config.layer.folder,
            pops.config.layer.panel
          ], "", true);
        }
      } else {
        let originZIndex = config.zIndex;
        config.zIndex = () => {
          const { zIndex: maxZIndex } = PopsInstanceUtils.getPopsMaxZIndex(PopsHandler.handleZIndex(originZIndex) + 100);
          return maxZIndex;
        };
      }
      return config;
    },
    /**
     * 处理把已创建的元素保存到内部环境中
     * @param type 当前弹窗类型
     * @param value
     */
    handlePush(type, value) {
      pops.config.layer[type].push(value);
    }
  };
  const PopsAlertConfig = () => {
    return {
      title: {
        text: "默认标题",
        position: "left",
        html: false,
        style: ""
      },
      content: {
        text: "默认内容",
        html: false,
        style: ""
      },
      btn: {
        position: "flex-end",
        ok: {
          size: void 0,
          enable: true,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "确定",
          type: "primary",
          callback: function(details) {
            details.close();
          }
        },
        close: {
          enable: true,
          callback: function(details) {
            details.close();
          }
        }
      },
      useShadowRoot: true,
      class: "",
      only: false,
      width: "350px",
      height: "200px",
      position: "center",
      animation: "pops-anim-fadein-zoom",
      zIndex: 1e4,
      mask: {
        enable: false,
        clickEvent: {
          toClose: false,
          toHide: false
        },
        clickCallBack: null
      },
      drag: false,
      dragLimit: true,
      dragExtraDistance: 3,
      dragMoveCallBack() {
      },
      dragEndCallBack() {
      },
      forbiddenScroll: false,
      style: null,
      beforeAppendToPageCallBack() {
      }
    };
  };
  class PopsAlert {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "alert";
      let config = PopsAlertConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      config = PopsHandler.handleOnly(PopsType, config);
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.ninePalaceGridPosition,
        pops.config.cssText.scrollbar,
        pops.config.cssText.button,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.alertCSS
      ]);
      let zIndex = PopsHandler.handleZIndex(config.zIndex);
      let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
      let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
      let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
      let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
      let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(PopsType, config);
      let animHTML = PopsElementHandler.getAnimHTML(
        guid,
        PopsType,
        config,
        /*html*/
        `
			<div 
				class="pops-alert-title"
				style="text-align: ${config.title.position};
				${headerStyle}">
				${config.title.html ? config.title.text : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
				${headerBtnHTML}
			</div>
			<div class="pops-alert-content" style="${contentStyle}">
				${config.content.html ? config.content.text : `<p pops style="${contentPStyle}">${config.content.text}</p>`}
			</div>
			${bottomBtnHTML}`,
        bottomBtnHTML,
        zIndex
      );
      let $anim = PopsElementHandler.parseElement(animHTML);
      let { popsElement: $pops, headerCloseBtnElement: $headerCloseBtn, btnOkElement, titleElement: $title } = PopsHandler.handleQueryElement($anim, PopsType);
      let $mask = null;
      let elementList = [$anim];
      if (config.mask.enable) {
        let _handleMask_ = PopsHandler.handleMask({
          type: PopsType,
          guid,
          config,
          animElement: $anim,
          maskHTML
        });
        $mask = _handleMask_.maskElement;
        elementList.push($mask);
      }
      let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
      PopsHandler.handleClickEvent("close", $headerCloseBtn, eventDetails, config.btn.close.callback);
      PopsHandler.handleClickEvent("ok", btnOkElement, eventDetails, config.btn.ok.callback);
      popsDOMUtils.append($shadowRoot, elementList);
      if (typeof config.beforeAppendToPageCallBack === "function") {
        config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
      }
      popsDOMUtils.appendBody($shadowContainer);
      if ($mask != null) {
        $anim.after($mask);
      }
      PopsHandler.handlePush(PopsType, {
        guid,
        animElement: $anim,
        popsElement: $pops,
        maskElement: $mask,
        $shadowContainer,
        $shadowRoot
      });
      if (config.drag) {
        PopsInstanceUtils.drag($pops, {
          dragElement: $title,
          limit: config.dragLimit,
          extraDistance: config.dragExtraDistance,
          moveCallBack: config.dragMoveCallBack,
          endCallBack: config.dragEndCallBack
        });
      }
      return PopsHandler.handleResultDetails(eventDetails);
    }
  }
  const PopsConfirmConfig = () => {
    return {
      title: {
        text: "默认标题",
        position: "left",
        html: false,
        style: ""
      },
      content: {
        text: "默认内容",
        html: false,
        style: ""
      },
      btn: {
        merge: false,
        mergeReverse: false,
        reverse: false,
        position: "flex-end",
        ok: {
          enable: true,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "确定",
          type: "primary",
          callback(detail) {
            detail.close();
          }
        },
        cancel: {
          enable: true,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "关闭",
          type: "default",
          callback(detail) {
            detail.close();
          }
        },
        other: {
          enable: false,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "其它按钮",
          type: "default",
          callback(detail) {
            detail.close();
          }
        },
        close: {
          enable: true,
          callback(detail) {
            detail.close();
          }
        }
      },
      useShadowRoot: true,
      class: "",
      only: false,
      width: "350px",
      height: "200px",
      position: "center",
      animation: "pops-anim-fadein-zoom",
      zIndex: 1e4,
      mask: {
        enable: false,
        clickEvent: {
          toClose: false,
          toHide: false
        },
        clickCallBack: null
      },
      drag: false,
      dragLimit: true,
      dragExtraDistance: 3,
      dragMoveCallBack() {
      },
      dragEndCallBack() {
      },
      forbiddenScroll: false,
      style: null,
      beforeAppendToPageCallBack() {
      }
    };
  };
  class PopsConfirm {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "confirm";
      let config = PopsConfirmConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      config = PopsHandler.handleOnly(PopsType, config);
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.ninePalaceGridPosition,
        pops.config.cssText.scrollbar,
        pops.config.cssText.button,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.confirmCSS
      ]);
      let zIndex = PopsHandler.handleZIndex(config.zIndex);
      let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
      let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
      let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
      let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
      let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(PopsType, config);
      let animHTML = PopsElementHandler.getAnimHTML(
        guid,
        PopsType,
        config,
        /*html*/
        `
            <div class="pops-confirm-title" style="text-align: ${config.title.position};${headerStyle}">
                            ${config.title.html ? config.title.text : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
                ${headerBtnHTML}
                        </div>
                        <div class="pops-confirm-content" style="${contentStyle}">
                ${config.content.html ? config.content.text : `<p pops style="${contentPStyle}">${config.content.text}</p>`}
                
                        </div>

						
                        ${bottomBtnHTML}
            `,
        bottomBtnHTML,
        zIndex
      );
      let $anim = PopsElementHandler.parseElement(animHTML);
      let { popsElement: $pops, titleElement: $title, headerCloseBtnElement: $btnClose, btnOkElement: $btnOk, btnCancelElement: $btnCancel, btnOtherElement: $btnOther } = PopsHandler.handleQueryElement($anim, PopsType);
      let $mask = null;
      let elementList = [$anim];
      if (config.mask.enable) {
        let _handleMask_ = PopsHandler.handleMask({
          type: PopsType,
          guid,
          config,
          animElement: $anim,
          maskHTML
        });
        $mask = _handleMask_.maskElement;
        elementList.push($mask);
      }
      let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
      PopsHandler.handleClickEvent("close", $btnClose, eventDetails, config.btn.close.callback);
      PopsHandler.handleClickEvent("ok", $btnOk, eventDetails, config.btn.ok.callback);
      PopsHandler.handleClickEvent("cancel", $btnCancel, eventDetails, config.btn.cancel.callback);
      PopsHandler.handleClickEvent("other", $btnOther, eventDetails, config.btn.other.callback);
      popsDOMUtils.append($shadowRoot, elementList);
      if (typeof config.beforeAppendToPageCallBack === "function") {
        config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
      }
      popsDOMUtils.appendBody($shadowContainer);
      if ($mask != null) {
        $anim.after($mask);
      }
      PopsHandler.handlePush(PopsType, {
        guid,
        animElement: $anim,
        popsElement: $pops,
        maskElement: $mask,
        $shadowContainer,
        $shadowRoot
      });
      if (config.drag) {
        PopsInstanceUtils.drag($pops, {
          dragElement: $title,
          limit: config.dragLimit,
          extraDistance: config.dragExtraDistance,
          moveCallBack: config.dragMoveCallBack,
          endCallBack: config.dragEndCallBack
        });
      }
      return PopsHandler.handleResultDetails(eventDetails);
    }
  }
  const PopsPromptConfig = () => {
    return {
      title: {
        text: "默认标题",
        position: "left",
        html: false,
        style: ""
      },
      content: {
        text: "",
        select: false,
        password: false,
        row: false,
        focus: true,
        placeholder: "默认提示",
        style: ""
      },
      btn: {
        merge: false,
        mergeReverse: false,
        reverse: false,
        position: "flex-end",
        ok: {
          enable: true,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "确定",
          type: "success",
          callback(detail) {
            detail.close();
          }
        },
        cancel: {
          enable: true,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "关闭",
          type: "default",
          callback(detail) {
            detail.close();
          }
        },
        other: {
          enable: false,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "其它按钮",
          type: "default",
          callback(detail) {
            detail.close();
          }
        },
        close: {
          enable: true,
          callback(detail) {
            detail.close();
          }
        }
      },
      useShadowRoot: true,
      class: "",
      only: false,
      width: "350px",
      height: "200px",
      position: "center",
      animation: "pops-anim-fadein-zoom",
      zIndex: 1e4,
      mask: {
        enable: false,
        clickEvent: {
          toClose: false,
          toHide: false
        },
        clickCallBack: null
      },
      drag: false,
      dragLimit: true,
      dragExtraDistance: 3,
      dragMoveCallBack() {
      },
      dragEndCallBack() {
      },
      forbiddenScroll: false,
      style: null,
      beforeAppendToPageCallBack() {
      }
    };
  };
  class PopsPrompt {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "prompt";
      let config = PopsPromptConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      config = PopsHandler.handleOnly(PopsType, config);
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.ninePalaceGridPosition,
        pops.config.cssText.scrollbar,
        pops.config.cssText.button,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.promptCSS
      ]);
      let zIndex = PopsHandler.handleZIndex(config.zIndex);
      let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
      let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
      let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
      let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
      let { contentPStyle } = PopsElementHandler.getContentStyle(PopsType, config);
      let animHTML = PopsElementHandler.getAnimHTML(
        guid,
        PopsType,
        config,
        /*html*/
        `
            <div class="pops-prompt-title" style="text-align: ${config.title.position};${headerStyle}">
            ${config.title.html ? config.title.text : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
            ${headerBtnHTML}
            </div>
            <div class="pops-prompt-content" style="${contentPStyle}">
            ${config.content.row ? '<textarea pops="" placeholder="' + config.content.placeholder + '"></textarea>' : '<input pops="" placeholder="' + config.content.placeholder + '" type="' + (config.content.password ? "password" : "text") + '">'}
            </div>
        	${bottomBtnHTML}
            `,
        bottomBtnHTML,
        zIndex
      );
      let $anim = PopsElementHandler.parseElement(animHTML);
      let { popsElement: $pops, inputElement: $input, headerCloseBtnElement: $btnClose, btnOkElement: $btnOk, btnCancelElement: $btnCancel, btnOtherElement: $btnOther, titleElement: $title } = PopsHandler.handleQueryElement($anim, PopsType);
      let $mask = null;
      let elementList = [$anim];
      if (config.mask.enable) {
        let _handleMask_ = PopsHandler.handleMask({
          type: PopsType,
          guid,
          config,
          animElement: $anim,
          maskHTML
        });
        $mask = _handleMask_.maskElement;
        elementList.push($mask);
      }
      let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
      $input.value = config.content.text;
      PopsHandler.handlePromptClickEvent("close", $input, $btnClose, eventDetails, config.btn.close.callback);
      PopsHandler.handlePromptClickEvent("ok", $input, $btnOk, eventDetails, config.btn.ok.callback);
      PopsHandler.handlePromptClickEvent("cancel", $input, $btnCancel, eventDetails, config.btn.cancel.callback);
      PopsHandler.handlePromptClickEvent("other", $input, $btnOther, eventDetails, config.btn.other.callback);
      popsDOMUtils.append($shadowRoot, elementList);
      if (typeof config.beforeAppendToPageCallBack === "function") {
        config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
      }
      popsDOMUtils.appendBody($shadowContainer);
      if ($mask != null) {
        $anim.after($mask);
      }
      PopsHandler.handlePush(PopsType, {
        guid,
        animElement: $anim,
        popsElement: $pops,
        maskElement: $mask,
        $shadowContainer,
        $shadowRoot
      });
      if (config.drag) {
        PopsInstanceUtils.drag($pops, {
          dragElement: $title,
          limit: config.dragLimit,
          extraDistance: config.dragExtraDistance,
          moveCallBack: config.dragMoveCallBack,
          endCallBack: config.dragEndCallBack
        });
      }
      if (config.content.focus) {
        $input.focus();
      }
      if (config.content.select) {
        $input.select();
      }
      return PopsHandler.handleResultDetails(eventDetails);
    }
  }
  const PopsLoadingConfig = () => {
    return {
      parent: document.body,
      content: {
        text: "加载中...",
        icon: "loading",
        style: ""
      },
      useShadowRoot: true,
      class: "",
      only: false,
      zIndex: 1e4,
      mask: {
        enable: false,
        clickEvent: {
          toClose: false,
          toHide: false
        },
        clickCallBack: null
      },
      animation: "pops-anim-fadein-zoom",
      forbiddenScroll: false,
      style: null,
      addIndexCSS: true
    };
  };
  class PopsLoading {
    constructor(details) {
      let config = PopsLoadingConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      let guid = popsUtils.getRandomGUID();
      const PopsType = "loading";
      config = PopsHandler.handleOnly(PopsType, config);
      let zIndex = PopsHandler.handleZIndex(config.zIndex);
      let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
      let { contentPStyle } = PopsElementHandler.getContentStyle("loading", config);
      let animHTML = PopsElementHandler.getAnimHTML(
        guid,
        PopsType,
        config,
        /*html*/
        `
            <div class="pops-loading-content">
                ${config.addIndexCSS ? `
                <style data-model-name="index">${pops.config.cssText.index}</style>
                <style data-model-name="anim">${pops.config.cssText.anim}</style>
                <style data-model-name="common">${pops.config.cssText.common}</style>
                ` : ""}
                <style data-model-name="loadingCSS">
                    ${pops.config.cssText.loadingCSS}
                </style>
            ${config.style != null ? `<style>${config.style}</style>` : ""}
            <p pops style="${contentPStyle}">${config.content.text}</p>
            </div>
            `,
        "",
        zIndex
      );
      let $anim = PopsElementHandler.parseElement(animHTML);
      let { popsElement: $pops } = PopsHandler.handleQueryElement($anim, PopsType);
      let $mask = null;
      let elementList = [$anim];
      if (config.mask.enable) {
        let _handleMask_ = PopsHandler.handleMask({
          type: PopsType,
          guid,
          config,
          animElement: $anim,
          maskHTML
        });
        $mask = _handleMask_.maskElement;
        elementList.push($mask);
      }
      let eventDetails = PopsHandler.handleLoadingEventDetails(guid, PopsType, $anim, $pops, $mask, config);
      popsDOMUtils.append(config.parent, elementList);
      if ($mask != null) {
        $anim.after($mask);
      }
      PopsHandler.handlePush(PopsType, {
        guid,
        animElement: $anim,
        popsElement: $pops,
        maskElement: $mask
      });
      return PopsHandler.handleResultDetails(eventDetails);
    }
  }
  const PopsIframeConfig = () => {
    return {
      title: {
        position: "center",
        text: "",
        html: false,
        style: ""
      },
      loading: {
        enable: true,
        icon: true,
        text: ""
      },
      useShadowRoot: true,
      class: "",
      url: window.location.href,
      only: false,
      zIndex: 1e4,
      mask: {
        enable: false,
        clickEvent: {
          toClose: false,
          toHide: false
        },
        clickCallBack: null
      },
      animation: "pops-anim-fadein-zoom",
      position: "center",
      drag: true,
      dragLimit: true,
      dragExtraDistance: 3,
      dragMoveCallBack() {
      },
      dragEndCallBack() {
      },
      width: "300px",
      height: "250px",
      topRightButton: "min|max|mise|close",
      sandbox: false,
      forbiddenScroll: false,
      loadEndCallBack() {
      },
      btn: {
        min: {
          callback() {
          }
        },
        max: {
          callback() {
          }
        },
        mise: {
          callback() {
          }
        },
        close: {
          callback() {
          }
        }
      },
      style: null,
      beforeAppendToPageCallBack() {
      }
    };
  };
  class PopsIframe {
    constructor(details) {
      var _a2;
      const guid = popsUtils.getRandomGUID();
      const PopsType = "iframe";
      let config = PopsIframeConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      if (config.url == null) {
        throw "config.url不能为空";
      }
      config = PopsHandler.handleOnly(PopsType, config);
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.ninePalaceGridPosition,
        pops.config.cssText.scrollbar,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.iframeCSS
      ]);
      let maskExtraStyle = (
        // @ts-ignore
        config.animation != null && config.animation != "" ? "position:absolute;" : ""
      );
      let zIndex = PopsHandler.handleZIndex(config.zIndex);
      let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex, maskExtraStyle);
      let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
      let iframeLoadingHTML = '<div class="pops-loading"></div>';
      let titleText = config.title.text.trim() !== "" ? config.title.text : config.url;
      let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
      let animHTML = PopsElementHandler.getAnimHTML(
        guid,
        PopsType,
        config,
        /*html*/
        `
            <div 
                class="pops-iframe-title"
                style="text-align: ${config.title.position};${headerStyle}"
            >
                ${config.title.html ? titleText : `<p pops style="${headerPStyle}">${titleText}</p>`}
                ${headerBtnHTML}
            </div>
                        <div class="pops-iframe-content">
                <div class="pops-iframe-content-global-loading"></div>
                <iframe
                        src="${config.url}"
                        pops
                        ${config.sandbox ? "sandbox='allow-forms allow-same-origin allow-scripts'" : ""}>
                </iframe>
                </div>
                ${config.loading.enable ? iframeLoadingHTML : ""}
            `,
        "",
        zIndex
      );
      let $anim = PopsElementHandler.parseElement(animHTML);
      let { popsElement: $pops, headerCloseBtnElement, headerControlsElement, titleElement: $title, iframeElement: $iframe, loadingElement, contentLoadingElement: $contentLoading, headerMinBtnElement, headerMaxBtnElement, headerMiseBtnElement } = PopsHandler.handleQueryElement($anim, PopsType);
      let $iframeContainer = PopsCore.document.querySelector(".pops-iframe-container");
      if (!$iframeContainer) {
        $iframeContainer = PopsCore.document.createElement("div");
        $iframeContainer.className = "pops-iframe-container";
        $iframeContainer.style.cssText = "display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;user-select: none;-webkit-user-select: none;-ms-user-select: none;-moz-user-select: none;";
        popsDOMUtils.appendBody($iframeContainer);
      }
      let $mask = null;
      let elementList = [$anim];
      if (config.mask.enable) {
        let _handleMask_ = PopsHandler.handleMask({
          type: PopsType,
          guid,
          config,
          animElement: $anim,
          maskHTML
        });
        $mask = _handleMask_.maskElement;
        elementList.push($mask);
      }
      let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
      eventDetails["iframeElement"] = $iframe;
      popsDOMUtils.on($anim, popsDOMUtils.getAnimationEndNameList(), function() {
        $anim.style.width = "0%";
        $anim.style.height = "0%";
      });
      popsDOMUtils.on($iframe, "load", () => {
        loadingElement == null ? void 0 : loadingElement.remove();
        $contentLoading.style.animation = "iframeLoadingChange_85 0.3s forwards";
        popsDOMUtils.on($contentLoading, popsDOMUtils.getAnimationEndNameList(), () => {
          $contentLoading.remove();
        });
        if (config.title.text.trim() === "" && $iframe.contentDocument) {
          $title.querySelector("p").innerText = $iframe.contentDocument.title;
        }
        config.loadEndCallBack(eventDetails);
      });
      popsDOMUtils.append($shadowRoot, elementList);
      if (typeof config.beforeAppendToPageCallBack === "function") {
        config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
      }
      $iframeContainer.appendChild($shadowContainer);
      if ($mask != null) {
        $anim.after($mask);
      }
      if (config.drag) {
        PopsInstanceUtils.drag($pops, {
          dragElement: $title,
          limit: config.dragLimit,
          extraDistance: config.dragExtraDistance,
          moveCallBack: config.dragMoveCallBack,
          endCallBack: config.dragEndCallBack
        });
      }
      const TYPE_MODULE = "type-module";
      let origin_left = "";
      let origin_top = "";
      let origin_is_max = false;
      popsDOMUtils.on(headerMinBtnElement, "click", (event) => {
        var _a3, _b;
        event.preventDefault();
        event.stopPropagation();
        origin_left = $pops.style.left;
        origin_top = $pops.style.top;
        $pops.classList.add("pops-iframe-unset-top");
        $pops.classList.add("pops-iframe-unset-left");
        $pops.classList.add("pops-iframe-unset-transform");
        $pops.style.transitionDuration = "";
        $pops.setAttribute(TYPE_MODULE, "min");
        headerControlsElement.setAttribute("type", "min");
        headerMaxBtnElement.style.setProperty("display", "none");
        headerMiseBtnElement.style.setProperty("display", "");
        if (typeof ((_b = (_a3 = config == null ? void 0 : config.btn) == null ? void 0 : _a3.min) == null ? void 0 : _b.callback) === "function") {
          config.btn.min.callback(eventDetails, event);
        }
      }, {
        capture: true
      });
      popsDOMUtils.on(headerMaxBtnElement, "click", (event) => {
        var _a3, _b;
        event.preventDefault();
        event.stopPropagation();
        if ($pops.getAttribute(TYPE_MODULE) !== "min") {
          origin_left = $pops.style.left;
          origin_top = $pops.style.top;
        }
        origin_is_max = true;
        $pops.style.transitionDuration = "";
        $pops.style.transform = "";
        $pops.removeAttribute(TYPE_MODULE);
        $pops.classList.add("pops-iframe-unset-transition");
        $pops.classList.add("pops-iframe-unset-left");
        $pops.classList.add("pops-iframe-unset-top");
        $pops.classList.add("pops-iframe-unset-transform");
        $pops.classList.remove("pops-iframe-unset-transition");
        $pops.setAttribute(TYPE_MODULE, "max");
        headerControlsElement.setAttribute("type", "max");
        headerMaxBtnElement.style.setProperty("display", "none");
        headerMiseBtnElement.style.setProperty("display", "");
        if (typeof ((_b = (_a3 = config == null ? void 0 : config.btn) == null ? void 0 : _a3.max) == null ? void 0 : _b.callback) === "function") {
          config.btn.max.callback(eventDetails, event);
        }
      }, {
        capture: true
      });
      (_a2 = headerMiseBtnElement == null ? void 0 : headerMiseBtnElement.style) == null ? void 0 : _a2.setProperty("display", "none");
      popsDOMUtils.on(headerMiseBtnElement, "click", (event) => {
        var _a3, _b;
        event.preventDefault();
        event.stopPropagation();
        if (origin_is_max && $pops.getAttribute(TYPE_MODULE) === "min") {
          $pops.classList.add("pops-iframe-unset-transition");
          $pops.classList.add("pops-iframe-unset-left");
          $pops.classList.add("pops-iframe-unset-top");
          $pops.classList.add("pops-iframe-unset-transform");
          $pops.classList.remove("pops-iframe-unset-transition");
          $pops.setAttribute(TYPE_MODULE, "max");
          headerControlsElement.setAttribute("type", "max");
        } else {
          origin_is_max = false;
          $pops.style.left = origin_left;
          $pops.style.top = origin_top;
          $pops.style.transitionDuration = "";
          $pops.style.transform = "";
          headerControlsElement.removeAttribute("type");
          $pops.removeAttribute(TYPE_MODULE);
          $pops.classList.remove("pops-iframe-unset-top");
          $pops.classList.remove("pops-iframe-unset-left");
          $pops.classList.remove("pops-iframe-unset-transform");
          headerMaxBtnElement.style.setProperty("display", "");
          headerMiseBtnElement.style.setProperty("display", "none");
        }
        if (typeof ((_b = (_a3 = config == null ? void 0 : config.btn) == null ? void 0 : _a3.mise) == null ? void 0 : _b.callback) === "function") {
          config.btn.mise.callback(eventDetails, event);
        }
      }, {
        capture: true
      });
      popsDOMUtils.on(headerCloseBtnElement, "click", (event) => {
        var _a3, _b;
        event.preventDefault();
        event.stopPropagation();
        PopsInstanceUtils.removeInstance([pops.config.layer.iframe], guid, false);
        if (typeof ((_b = (_a3 = config == null ? void 0 : config.btn) == null ? void 0 : _a3.close) == null ? void 0 : _b.callback) === "function") {
          config.btn.close.callback(eventDetails, event);
        }
      }, {
        capture: true
      });
      PopsHandler.handlePush(PopsType, {
        guid,
        animElement: $anim,
        popsElement: $pops,
        maskElement: $mask,
        $shadowContainer,
        $shadowRoot
      });
      let result2 = PopsHandler.handleResultDetails(eventDetails);
      return result2;
    }
  }
  const PopsDrawerConfig = () => {
    return {
      title: {
        enable: true,
        position: "center",
        text: "默认标题",
        html: false,
        style: ""
      },
      content: {
        text: "默认内容",
        html: false,
        style: ""
      },
      btn: {
        merge: false,
        mergeReverse: false,
        reverse: false,
        position: "flex-end",
        ok: {
          enable: true,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "确定",
          type: "primary",
          callback(detail) {
            detail.close();
          }
        },
        cancel: {
          enable: true,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "关闭",
          type: "default",
          callback(detail) {
            detail.close();
          }
        },
        other: {
          enable: false,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "其它按钮",
          type: "default",
          callback(detail) {
            detail.close();
          }
        },
        close: {
          enable: true,
          callback(detail) {
            detail.close();
          }
        }
      },
      mask: {
        enable: true,
        clickEvent: {
          toClose: true,
          toHide: false
        },
        clickCallBack: null
      },
      useShadowRoot: true,
      class: "",
      zIndex: 1e4,
      only: false,
      direction: "right",
      size: "30%",
      lockScroll: false,
      closeOnPressEscape: true,
      openDelay: 0,
      closeDelay: 0,
      borderRadius: 0,
      style: null,
      beforeAppendToPageCallBack() {
      },
      forbiddenScroll: false
    };
  };
  class PopsDrawer {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "drawer";
      let config = PopsDrawerConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      config = PopsHandler.handleOnly(PopsType, config);
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.ninePalaceGridPosition,
        pops.config.cssText.scrollbar,
        pops.config.cssText.button,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.drawerCSS
      ]);
      let zIndex = PopsHandler.handleZIndex(config.zIndex);
      let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
      let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
      let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
      let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
      let { contentStyle, contentPStyle } = PopsElementHandler.getContentStyle(PopsType, config);
      let animHTML = PopsElementHandler.getAnimHTML(
        guid,
        PopsType,
        config,
        /*html*/
        `
            ${config.title.enable ? `
            <div class="pops-${PopsType}-title" style="${headerStyle}">
                ${config.title.html ? config.title.text : `<p 
                            pops
                            style="
                                width: 100%;
                                text-align: ${config.title.position};
                                ${headerPStyle}">${config.title.text}</p>`}
                ${headerBtnHTML}
            </div>
            ` : ""}
            
            <div class="pops-${PopsType}-content" style="${contentStyle}">
                ${config.content.html ? config.content.text : `<p pops style="${contentPStyle}">${config.content.text}</p>`}
            </div>

            ${bottomBtnHTML}
            `,
        bottomBtnHTML,
        zIndex
      );
      let $anim = PopsElementHandler.parseElement(animHTML);
      let { popsElement, headerCloseBtnElement, btnCancelElement, btnOkElement, btnOtherElement } = PopsHandler.handleQueryElement($anim, PopsType);
      let $pops = popsElement;
      let $headerCloseBtn = headerCloseBtnElement;
      let $btnCancel = btnCancelElement;
      let $btnOk = btnOkElement;
      let $btnOther = btnOtherElement;
      let $mask = null;
      let elementList = [$anim];
      if (config.mask.enable) {
        let _handleMask_ = PopsHandler.handleMask({
          type: PopsType,
          guid,
          config,
          animElement: $anim,
          maskHTML
        });
        $mask = _handleMask_.maskElement;
        elementList.push($mask);
      }
      let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
      $pops.setAttribute("direction", config.direction);
      if (config.direction === "top") {
        $pops.style.setProperty("height", "0");
        $pops.style.setProperty("border-radius", `0px 0px ${config.borderRadius}px ${config.borderRadius}px`);
      } else if (config.direction === "bottom") {
        $pops.style.setProperty("height", "0");
        $pops.style.setProperty("border-radius", `${config.borderRadius}px ${config.borderRadius}px 0px 0px`);
      } else if (config.direction === "left") {
        $pops.style.setProperty("width", "0");
        $pops.style.setProperty("border-radius", `0px ${config.borderRadius}px 0px ${config.borderRadius}px`);
      } else if (config.direction === "right") {
        $pops.style.setProperty("width", "0");
        $pops.style.setProperty("border-radius", `${config.borderRadius}px 0px ${config.borderRadius}px 0px`);
      }
      if (config.closeOnPressEscape) {
        PopsHandler.handleKeyboardEvent("Escape", [], function() {
          eventDetails.close();
        });
      }
      let needHandleClickEventList = [
        {
          type: "close",
          ele: $headerCloseBtn
        },
        {
          type: "cancel",
          ele: $btnCancel
        },
        {
          type: "ok",
          ele: $btnOk
        },
        {
          type: "other",
          ele: $btnOther
        }
      ];
      needHandleClickEventList.forEach((item) => {
        PopsHandler.handleClickEvent(item.type, item.ele, eventDetails, (_eventDetails_) => {
          if (typeof config.btn[item.type].callback === "function") {
            config.btn[item.type].callback(_eventDetails_);
          }
        });
      });
      elementList.forEach((element) => {
        element.style.setProperty("display", "none");
        if (["top"].includes(config.direction)) {
          $pops.style.setProperty("height", config.size.toString());
          $pops.style.setProperty("transform", "translateY(-100%)");
        } else if (["bottom"].includes(config.direction)) {
          $pops.style.setProperty("height", config.size.toString());
          $pops.style.setProperty("transform", "translateY(100%)");
        } else if (["left"].includes(config.direction)) {
          $pops.style.setProperty("width", config.size.toString());
          $pops.style.setProperty("transform", "translateX(-100%)");
        } else if (["right"].includes(config.direction)) {
          $pops.style.setProperty("width", config.size.toString());
          $pops.style.setProperty("transform", "translateX(100%)");
        }
        element.style.setProperty("display", "");
      });
      popsDOMUtils.append($shadowRoot, elementList);
      if (typeof config.beforeAppendToPageCallBack === "function") {
        config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
      }
      popsDOMUtils.appendBody($shadowContainer);
      setTimeout(() => {
        setTimeout(() => {
          $pops.style.setProperty("transform", "");
        }, config.openDelay);
      }, 50);
      if ($mask != null) {
        $anim.after($mask);
      }
      PopsHandler.handlePush(PopsType, {
        guid,
        animElement: $anim,
        popsElement: $pops,
        maskElement: $mask,
        $shadowContainer,
        $shadowRoot
      });
      return PopsHandler.handleResultDetails(eventDetails);
    }
  }
  const PopsFolderConfig = () => {
    return {
      title: {
        text: "pops.Folder",
        position: "center",
        html: false,
        style: ""
      },
      sort: {
        name: "latestTime",
        isDesc: false,
        // @ts-ignore
        callback() {
        }
      },
      folder: [
        {
          fileName: "测试文件夹",
          fileSize: 0,
          fileType: "",
          createTime: 0,
          latestTime: 0,
          isFolder: true,
          index: 0,
          // @ts-ignore
          clickEvent() {
            return [
              {
                fileName: "内部-测试文件.zip",
                fileSize: 1025e3,
                fileType: "zip",
                createTime: 1702038410440,
                latestTime: 1702039602126,
                isFolder: false,
                index: 1,
                clickEvent() {
                  console.log("下载文件：", this.fileName);
                  return "https://update.greasyfork.org/scripts/456485/pops.js";
                }
              }
            ];
          }
        },
        {
          fileName: "测试文件.apk",
          fileSize: 30125682,
          fileType: "apk",
          createTime: 1702036410440,
          latestTime: 1702039410440,
          isFolder: false,
          index: 1,
          // @ts-ignore
          clickEvent() {
            console.log("下载文件：", this.fileName);
            return "https://update.greasyfork.org/scripts/456485/pops.js";
          }
        }
      ],
      btn: {
        merge: false,
        mergeReverse: false,
        reverse: false,
        position: "flex-end",
        ok: {
          enable: true,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "确定",
          type: "primary",
          callback(detail) {
            detail.close();
          }
        },
        cancel: {
          enable: true,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "关闭",
          type: "default",
          callback(detail) {
            detail.close();
          }
        },
        other: {
          enable: false,
          size: void 0,
          icon: void 0,
          rightIcon: false,
          iconIsLoading: false,
          text: "其它按钮",
          type: "default",
          callback(detail) {
            detail.close();
          }
        },
        close: {
          enable: true,
          callback(detail) {
            detail.close();
          }
        }
      },
      useShadowRoot: true,
      class: "",
      only: false,
      width: "500px",
      height: "400px",
      position: "center",
      animation: "pops-anim-fadein-zoom",
      zIndex: 1e4,
      mask: {
        enable: false,
        clickEvent: {
          toClose: false,
          toHide: false
        },
        clickCallBack: null
      },
      drag: false,
      dragLimit: true,
      dragExtraDistance: 3,
      dragMoveCallBack() {
      },
      dragEndCallBack() {
      },
      forbiddenScroll: false,
      style: null,
      beforeAppendToPageCallBack() {
      }
    };
  };
  const Folder_ICON = {
    folder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",
    zip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",
    mp4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",
    apk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",
    gif: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",
    txt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",
    exe: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",
    qm: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",
    php: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",
    pdf: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",
    Null: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",
    ipa: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",
    doc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",
    xls: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",
    ppt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",
    png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",
    html: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",
    js: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",
    css: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",
    epub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",
    psd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",
    dwg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII="
  };
  class PopsFolder {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "folder";
      let config = PopsFolderConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      config = PopsHandler.handleOnly(PopsType, config);
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.ninePalaceGridPosition,
        pops.config.cssText.scrollbar,
        pops.config.cssText.button,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.folderCSS
      ]);
      Folder_ICON.docx = Folder_ICON.doc;
      Folder_ICON.rtf = Folder_ICON.doc;
      Folder_ICON.xlsx = Folder_ICON.xls;
      Folder_ICON.pptx = Folder_ICON.ppt;
      Folder_ICON.dmg = Folder_ICON.ipa;
      Folder_ICON.json = Folder_ICON.js;
      let zipIconList = [
        "rar",
        "7z",
        "arj",
        "bz2",
        "cab",
        "iso",
        "jar",
        "lz",
        "lzh",
        "tar",
        "uue",
        "xz",
        "z",
        "zipx",
        "zst",
        "001"
      ];
      let imageIconList = ["jpg", "jpeg", "ico", "webp"];
      let codeLanguageIconList = [
        "htm",
        "py",
        "vue",
        "bat",
        "sh",
        "vbs",
        "java",
        "kt"
      ];
      let androidIconList = ["apk", "apkm", "xapk"];
      zipIconList.forEach((keyName) => {
        Folder_ICON[keyName] = Folder_ICON.zip;
      });
      imageIconList.forEach((keyName) => {
        Folder_ICON[keyName] = Folder_ICON.png;
      });
      codeLanguageIconList.forEach((keyName) => {
        Folder_ICON[keyName] = Folder_ICON.html;
      });
      androidIconList.forEach((keyName) => {
        Folder_ICON[keyName] = Folder_ICON.apk;
      });
      if (details == null ? void 0 : details.folder) {
        config.folder = details.folder;
      }
      let zIndex = PopsHandler.handleZIndex(config.zIndex);
      let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
      let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
      let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
      let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
      let animHTML = PopsElementHandler.getAnimHTML(guid, PopsType, config, `
            <div class="pops-folder-title" style="text-align: ${config.title.position};${headerStyle}">
                            ${config.title.html ? config.title.text : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
                ${headerBtnHTML}
                        </div>
                        <div class="pops-folder-content ${pops.isPhone() ? "pops-mobile-folder-content" : ""}">
                <div class="pops-folder-list">
                    <div class="pops-folder-file-list-breadcrumb">
                    <div class="pops-folder-file-list-breadcrumb-primary">
                        <span class="pops-folder-file-list-breadcrumb-allFiles cursor-p" title="全部文件">
                        <a>全部文件</a>
                        </span>
                    </div>
                    </div>
                    <div class="pops-folder-list-table__header-div">
                    <table class="pops-folder-list-table__header">
                        <colgroup>
                        <!-- <col width="8%"> --!>
                        <col width="52%">
                        <col width="24%">
                        <col width="16%">
                        </colgroup>
                        <thead>
                        <tr class="pops-folder-list-table__header-row">
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>文件名</span>
                                <div class="pops-folder-list-table__sort" data-sort="fileName">
                                <div class="pops-folder-icon-arrow" data-sort="按文件名排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>修改时间</span>
                                <div class="pops-folder-list-table__sort" data-sort="latestTime">
                                <div class="pops-folder-icon-arrow" title="按修改时间排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>大小</span>
                                <div class="pops-folder-list-table__sort" data-sort="fileSize">
                                <div class="pops-folder-icon-arrow" title="按大小排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                        </tr>
                        </thead>
                    </table>
                    </div>
                    <div class="pops-folder-list-table__body-div">
                    <table class="pops-folder-list-table__body">
                        <colgroup>
                        <!-- <col width="8%"> --!>
                        ${pops.isPhone() ? `<col width="100%">` : `
                            <col width="52%">
                            <col width="24%">
                            <col width="16%">`}
                        
                        </colgroup>
                        <tbody>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            ${bottomBtnHTML}
            `, bottomBtnHTML, zIndex);
      let $anim = PopsElementHandler.parseElement(animHTML);
      let {
        popsElement: $pops,
        titleElement: $title,
        contentElement: $content,
        // folderListElement,
        // folderListHeaderElement,
        // folderListHeaderRowElement,
        folderListBodyElement,
        folderFileListBreadcrumbPrimaryElement,
        headerCloseBtnElement: $btnCloseBtn,
        btnOkElement,
        btnCancelElement,
        btnOtherElement,
        folderListSortFileNameElement,
        folderListSortLatestTimeElement,
        folderListSortFileSizeElement
      } = PopsHandler.handleQueryElement($anim, PopsType);
      let $mask = null;
      let elementList = [$anim];
      if (config.mask.enable) {
        let _handleMask_ = PopsHandler.handleMask({
          type: PopsType,
          guid,
          config,
          animElement: $anim,
          maskHTML
        });
        $mask = _handleMask_.maskElement;
        elementList.push($mask);
      }
      let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
      PopsHandler.handleClickEvent("close", $btnCloseBtn, eventDetails, config.btn.close.callback);
      PopsHandler.handleClickEvent("ok", btnOkElement, eventDetails, config.btn.ok.callback);
      PopsHandler.handleClickEvent("cancel", btnCancelElement, eventDetails, config.btn.cancel.callback);
      PopsHandler.handleClickEvent("other", btnOtherElement, eventDetails, config.btn.other.callback);
      popsDOMUtils.append($shadowRoot, elementList);
      if (typeof config.beforeAppendToPageCallBack === "function") {
        config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
      }
      popsDOMUtils.appendBody($shadowContainer);
      if ($mask != null) {
        $anim.after($mask);
      }
      config.folder.sort();
      function createFolderRowElement(fileName, latestTime = "-", fileSize = "-", isFolder = false) {
        let origin_fileName = fileName;
        let origin_latestTime = latestTime;
        let origin_fileSize = fileSize;
        let folderELement = popsDOMUtils.createElement("tr");
        let fileNameElement = popsDOMUtils.createElement("td");
        let fileTimeElement = popsDOMUtils.createElement("td");
        let fileFormatSize = popsDOMUtils.createElement("td");
        let fileType = "";
        let fileIcon = Folder_ICON.folder;
        if (isFolder) {
          latestTime = "";
          fileSize = "";
        } else {
          fileIcon = "";
          if (typeof latestTime === "number") {
            latestTime = popsUtils.formatTime(latestTime);
          }
          if (typeof fileSize === "number") {
            fileSize = popsUtils.formatByteToSize(fileSize);
          }
          for (let keyName in Folder_ICON) {
            if (fileName.toLowerCase().endsWith("." + keyName)) {
              fileType = keyName;
              fileIcon = Folder_ICON[keyName];
              break;
            }
          }
          if (!Boolean(fileIcon)) {
            fileType = "Null";
            fileIcon = Folder_ICON.Null;
          }
        }
        folderELement.className = "pops-folder-list-table__body-row";
        fileNameElement.className = "pops-folder-list-table__body-td";
        fileTimeElement.className = "pops-folder-list-table__body-td";
        fileFormatSize.className = "pops-folder-list-table__body-td";
        fileNameElement.innerHTML = `
            <div class="pops-folder-list-file-name cursor-p">
                <div>
                    <img src="${fileIcon}" alt="${fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
                    <a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
                    ${fileName}
                    </a>
                </div>
            </div>
            `;
        fileTimeElement.innerHTML = `
            <div class="pops-folder-list__time">
                <span>${latestTime}</span>
            </div>
            `;
        fileFormatSize.innerHTML = `
            <div class="pops-folder-list-format-size">
                <span>${fileSize}</span>
            </div>
            `;
        let __value__ = {
          fileName: origin_fileName,
          latestTime: origin_latestTime,
          fileSize: origin_fileSize,
          isFolder
        };
        fileNameElement["__value__"] = __value__;
        fileTimeElement["__value__"] = __value__;
        fileFormatSize["__value__"] = __value__;
        folderELement["__value__"] = __value__;
        folderELement.appendChild(fileNameElement);
        folderELement.appendChild(fileTimeElement);
        folderELement.appendChild(fileFormatSize);
        return {
          folderELement,
          fileNameElement,
          fileTimeElement,
          fileFormatSize
        };
      }
      function createMobileFolderRowElement(fileName, latestTime = "-", fileSize = "-", isFolder = false) {
        let origin_fileName = fileName;
        let origin_latestTime = latestTime;
        let origin_fileSize = fileSize;
        let folderELement = popsDOMUtils.createElement("tr");
        let fileNameElement = popsDOMUtils.createElement("td");
        let fileType = "";
        let fileIcon = Folder_ICON.folder;
        if (isFolder) {
          latestTime = "";
          fileSize = "";
        } else {
          fileIcon = "";
          if (typeof latestTime === "number") {
            latestTime = popsUtils.formatTime(latestTime);
          }
          if (typeof fileSize === "number") {
            fileSize = popsUtils.formatByteToSize(fileSize);
          }
          for (let keyName in Folder_ICON) {
            if (fileName.toLowerCase().endsWith("." + keyName)) {
              fileType = keyName;
              fileIcon = Folder_ICON[keyName];
              break;
            }
          }
          if (!Boolean(fileIcon)) {
            fileType = "Null";
            fileIcon = Folder_ICON.Null;
          }
        }
        folderELement.className = "pops-folder-list-table__body-row";
        fileNameElement.className = "pops-folder-list-table__body-td";
        fileNameElement.innerHTML = `
            <div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
                <img src="${fileIcon}" alt="${fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
                <div>
                    <a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
                        ${fileName}
                    </a>
                    <span>${latestTime} ${fileSize}</span>
                </div>
            </div>
            `;
        let __value__ = {
          fileName: origin_fileName,
          latestTime: origin_latestTime,
          fileSize: origin_fileSize,
          isFolder
        };
        fileNameElement["__value__"] = __value__;
        folderELement["__value__"] = __value__;
        folderELement.appendChild(fileNameElement);
        return {
          folderELement,
          fileNameElement
        };
      }
      function clearFolerRow() {
        folderListBodyElement.innerHTML = "";
      }
      function getArrowIconElement() {
        let iconArrowElement = popsDOMUtils.createElement("div", {
          className: "iconArrow"
        });
        return iconArrowElement;
      }
      function getBreadcrumbAllFilesElement(name, _config_) {
        let spanElement = popsDOMUtils.createElement("span", {
          className: "pops-folder-file-list-breadcrumb-allFiles cursor-p",
          innerHTML: `<a>${name}</a>`,
          _config_
        }, {
          title: "name"
        });
        return spanElement;
      }
      function breadcrumbAllFilesElementClickEvent(event, isTop, _config_) {
        clearFolerRow();
        let $click = event.target;
        let currentBreadcrumb = $click.closest("span.pops-folder-file-list-breadcrumb-allFiles");
        if (currentBreadcrumb) {
          while (currentBreadcrumb.nextElementSibling) {
            currentBreadcrumb.nextElementSibling.remove();
          }
        } else {
          console.error("获取导航按钮失败");
        }
        let loadingMask = pops.loading({
          parent: $content,
          content: {
            text: "获取文件列表中..."
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: false,
              toHide: false
            }
          },
          addIndexCSS: false
        });
        addFolderElement(_config_);
        loadingMask.close();
      }
      async function refreshFolderInfoClickEvent(event, _config_) {
        clearFolerRow();
        let loadingMask = pops.loading({
          parent: $content,
          content: {
            text: "获取文件列表中..."
          },
          mask: {
            enable: true
          },
          addIndexCSS: false
        });
        if (typeof _config_.clickEvent === "function") {
          let childConfig = await _config_.clickEvent(event, _config_);
          folderFileListBreadcrumbPrimaryElement.appendChild(getArrowIconElement());
          let breadcrumbAllFilesElement = getBreadcrumbAllFilesElement(_config_["fileName"], childConfig);
          folderFileListBreadcrumbPrimaryElement.appendChild(breadcrumbAllFilesElement);
          popsDOMUtils.on(breadcrumbAllFilesElement, "click", function(event2) {
            breadcrumbAllFilesElementClickEvent(event2, false, childConfig);
          });
          addFolderElement(childConfig);
        }
        loadingMask.close();
      }
      function setFileClickEvent(targetElement, _config_) {
        popsDOMUtils.on(targetElement, "click", async function(event) {
          event == null ? void 0 : event.preventDefault();
          event == null ? void 0 : event.stopPropagation();
          event == null ? void 0 : event.stopImmediatePropagation();
          let linkElement = targetElement.querySelector("a");
          if (typeof _config_.clickEvent === "function") {
            let downloadInfo = await _config_.clickEvent(event, _config_);
            if (downloadInfo != null && typeof downloadInfo === "object" && !Array.isArray(downloadInfo) && typeof downloadInfo.url === "string" && downloadInfo.url.trim() !== "") {
              linkElement.setAttribute("href", downloadInfo.url);
              linkElement.setAttribute("target", "_blank");
              if (downloadInfo.autoDownload) {
                if (downloadInfo.mode == null || downloadInfo.mode === "") {
                  downloadInfo.mode = "aBlank";
                }
                if (downloadInfo.mode === "a" || downloadInfo.mode === "aBlank") {
                  let downloadLinkElement = document.createElement("a");
                  if (downloadInfo.mode === "aBlank") {
                    downloadLinkElement.setAttribute("target", "_blank");
                  }
                  downloadLinkElement.href = downloadInfo.url;
                  downloadLinkElement.click();
                } else if (downloadInfo.mode === "open" || downloadInfo.mode === "openBlank") {
                  if (downloadInfo.mode === "openBlank") {
                    globalThis.open(downloadInfo.url, "_blank");
                  } else {
                    globalThis.open(downloadInfo.url);
                  }
                } else if (downloadInfo.mode === "iframe") {
                  let downloadIframeLinkElement = document.createElement("iframe");
                  downloadIframeLinkElement.src = downloadInfo.url;
                  downloadIframeLinkElement.onload = function() {
                    setTimeout(() => {
                      downloadIframeLinkElement.remove();
                    }, 1e3);
                  };
                  $shadowRoot.appendChild(downloadIframeLinkElement);
                  setTimeout(() => {
                    downloadIframeLinkElement.remove();
                  }, 3 * 60 * 1e3);
                } else {
                  console.error("未知的下载模式", downloadInfo);
                }
              }
            }
          }
        });
      }
      function sortFolderConfig(folderDataConfigList, sortName = "fileName", isDesc = false) {
        if (sortName === "fileName") {
          let onlyFolderDataConfigList = folderDataConfigList.filter((value) => {
            return value.isFolder;
          });
          let onlyFileDataConfigList = folderDataConfigList.filter((value) => {
            return !value.isFolder;
          });
          onlyFolderDataConfigList.sort((leftConfig, rightConfig) => {
            let beforeVal = leftConfig[sortName].toString();
            let afterVal = rightConfig[sortName].toString();
            let compareVal = beforeVal.localeCompare(afterVal);
            if (isDesc) {
              if (compareVal > 0) {
                compareVal = -1;
              } else if (compareVal < 0) {
                compareVal = 1;
              }
            }
            return compareVal;
          });
          onlyFileDataConfigList.sort((leftConfig, rightConfig) => {
            let beforeVal = leftConfig[sortName].toString();
            let afterVal = rightConfig[sortName].toString();
            let compareVal = beforeVal.localeCompare(afterVal);
            if (isDesc) {
              if (compareVal > 0) {
                compareVal = -1;
              } else if (compareVal < 0) {
                compareVal = 1;
              }
            }
            return compareVal;
          });
          if (isDesc) {
            return [...onlyFileDataConfigList, ...onlyFolderDataConfigList];
          } else {
            return [...onlyFolderDataConfigList, ...onlyFileDataConfigList];
          }
        } else {
          folderDataConfigList.sort((beforeConfig, afterConfig) => {
            let beforeVal = beforeConfig[sortName];
            let afterVal = afterConfig[sortName];
            if (sortName === "fileSize") {
              beforeVal = parseFloat(beforeVal.toString());
              afterVal = parseFloat(afterVal.toString());
            } else if (sortName === "latestTime") {
              beforeVal = new Date(beforeVal).getTime();
              afterVal = new Date(afterVal).getTime();
            }
            if (beforeVal > afterVal) {
              if (isDesc) {
                return -1;
              } else {
                return 1;
              }
            } else if (beforeVal < afterVal) {
              if (isDesc) {
                return 1;
              } else {
                return -1;
              }
            } else {
              return 0;
            }
          });
          return folderDataConfigList;
        }
      }
      function addFolderElement(_config_) {
        sortFolderConfig(_config_, config.sort.name, config.sort.isDesc);
        _config_.forEach((item) => {
          if (item["isFolder"]) {
            let { folderELement, fileNameElement } = pops.isPhone() ? createMobileFolderRowElement(item["fileName"], "", "", true) : createFolderRowElement(item["fileName"], "", "", true);
            popsDOMUtils.on(fileNameElement, "click", (event) => {
              refreshFolderInfoClickEvent(event, item);
            });
            folderListBodyElement.appendChild(folderELement);
          } else {
            let { folderELement, fileNameElement } = pops.isPhone() ? createMobileFolderRowElement(item["fileName"], item.latestTime, item.fileSize, false) : createFolderRowElement(item["fileName"], item.latestTime, item.fileSize, false);
            setFileClickEvent(fileNameElement, item);
            folderListBodyElement.appendChild(folderELement);
          }
        });
      }
      addFolderElement(config.folder);
      let allFilesElement = folderFileListBreadcrumbPrimaryElement.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");
      allFilesElement._config_ = config.folder;
      popsDOMUtils.on(allFilesElement, "click", (event) => {
        breadcrumbAllFilesElementClickEvent(event, true, config.folder);
      });
      function removeAllArrowActive() {
        [
          ...Array.from(folderListSortFileNameElement.querySelectorAll(".pops-folder-icon-active")),
          ...Array.from(folderListSortLatestTimeElement.querySelectorAll(".pops-folder-icon-active")),
          ...Array.from(folderListSortFileSizeElement.querySelectorAll(".pops-folder-icon-active"))
        ].forEach((ele) => ele.classList.remove("pops-folder-icon-active"));
      }
      function changeArrowActive(arrowUp, arrowDown, isDesc) {
        removeAllArrowActive();
        if (isDesc) {
          arrowDown.classList.add("pops-folder-icon-active");
        } else {
          arrowUp.classList.add("pops-folder-icon-active");
        }
      }
      function arrowSortClickEvent(target, event, sortName) {
        if (!event["notChangeSortRule"]) {
          config.sort.name = sortName;
          config.sort.isDesc = !config.sort.isDesc;
        }
        let arrowUp = target.querySelector(".pops-folder-icon-arrow-up");
        let arrowDown = target.querySelector(".pops-folder-icon-arrow-down");
        changeArrowActive(arrowUp, arrowDown, config.sort.isDesc);
        if (typeof config.sort.callback === "function" && config.sort.callback(target, event, config.sort.name, config.sort.isDesc)) {
          return;
        }
        let childrenList = [];
        Array.from(folderListBodyElement.children).forEach((trElement) => {
          let __value__ = trElement["__value__"];
          __value__["target"] = trElement;
          childrenList.push(__value__);
        });
        let sortedConfigList = sortFolderConfig(childrenList, config.sort.name, config.sort.isDesc);
        sortedConfigList.forEach((item) => {
          folderListBodyElement.appendChild(item.target);
        });
      }
      popsDOMUtils.on(folderListSortFileNameElement.closest("th"), "click", function(event) {
        arrowSortClickEvent(folderListSortFileNameElement, event, "fileName");
      }, {
        capture: true
      });
      popsDOMUtils.on(folderListSortLatestTimeElement.closest("th"), "click", void 0, function(event) {
        arrowSortClickEvent(folderListSortLatestTimeElement, event, "latestTime");
      }, {
        capture: true
      });
      popsDOMUtils.on(folderListSortFileSizeElement.closest("th"), "click", void 0, function(event) {
        arrowSortClickEvent(folderListSortFileSizeElement, event, "fileSize");
      }, {
        capture: true
      });
      if (config.sort.name === "fileName") {
        popsDOMUtils.trigger(folderListSortFileNameElement, "click", {
          notChangeSortRule: true
        });
      } else if (config.sort.name === "latestTime") {
        popsDOMUtils.trigger(folderListSortLatestTimeElement, "click", {
          notChangeSortRule: true
        });
      } else if (config.sort.name === "fileSize") {
        popsDOMUtils.trigger(folderListSortFileSizeElement, "click", {
          notChangeSortRule: true
        });
      }
      if (config.drag) {
        PopsInstanceUtils.drag($pops, {
          dragElement: $title,
          limit: config.dragLimit,
          extraDistance: config.dragExtraDistance,
          moveCallBack: config.dragMoveCallBack,
          endCallBack: config.dragEndCallBack
        });
      }
      PopsHandler.handlePush(PopsType, {
        guid,
        animElement: $anim,
        popsElement: $pops,
        maskElement: $mask,
        $shadowContainer,
        $shadowRoot
      });
      return PopsHandler.handleResultDetails(eventDetails);
    }
  }
  const PopsPanelConfig = () => {
    return {
      title: {
        text: "默认标题",
        position: "center",
        html: false,
        style: ""
      },
      content: [
        {
          id: "whitesev-panel-config-1",
          title: "菜单配置1",
          headerTitle: "菜单配置1",
          isDefault: false,
          attributes: [
            {
              "data-test": "test",
              "data-test-2": "test2"
            }
          ],
          forms: [
            {
              className: "forms-1",
              text: "区域设置",
              type: "forms",
              attributes: [],
              forms: [
                {
                  className: "panel-switch",
                  text: "switch",
                  type: "switch",
                  // @ts-ignore
                  props: {},
                  disabled: false,
                  attributes: [],
                  getValue() {
                    return true;
                  },
                  callback(event, value) {
                    console.log("按钮开启状态：", value);
                  }
                },
                {
                  className: "panel-slider",
                  text: "slider",
                  type: "slider",
                  // @ts-ignore
                  props: {},
                  attributes: [],
                  getValue() {
                    return 50;
                  },
                  callback(event, value) {
                    console.log("滑块当前数值：", value);
                  },
                  min: 1,
                  max: 100
                },
                {
                  className: "panel-button",
                  text: "button",
                  type: "button",
                  // @ts-ignore
                  props: {},
                  attributes: [],
                  buttonIcon: "eleme",
                  buttonIconIsLoading: true,
                  buttonType: "warning",
                  buttonText: "warning按钮",
                  callback(event) {
                    console.log("点击按钮", event);
                  }
                },
                {
                  className: "panel-button",
                  text: "button",
                  // @ts-ignore
                  props: {},
                  type: "button",
                  attributes: [],
                  buttonIcon: "chromeFilled",
                  buttonIconIsLoading: true,
                  buttonType: "danger",
                  buttonText: "danger按钮",
                  callback(event) {
                    console.log("点击按钮", event);
                  }
                },
                {
                  className: "panel-button",
                  text: "button",
                  type: "button",
                  attributes: [],
                  // @ts-ignore
                  props: {},
                  buttonIcon: "upload",
                  buttonIconIsLoading: false,
                  buttonType: "info",
                  buttonText: "info按钮",
                  callback(event) {
                    console.log("点击按钮", event);
                  }
                }
              ]
            }
          ]
        },
        {
          id: "whitesev-panel-config-2",
          title: "菜单配置2",
          headerTitle: "菜单配置2",
          isDefault: true,
          attributes: [
            {
              "data-value": "value",
              "data-value-2": "value2"
            }
          ],
          forms: [
            {
              className: "panel-input",
              text: "input",
              type: "input",
              // @ts-ignore
              props: {},
              attributes: [],
              getValue() {
                return "50";
              },
              callback(event, value) {
                console.log("输入框内容改变：", value);
              },
              placeholder: "请输入内容"
            },
            {
              className: "panel-input-password",
              text: "input-password",
              type: "input",
              // @ts-ignore
              props: {},
              attributes: [],
              getValue() {
                return "123456";
              },
              callback(event, value) {
                console.log("密码输入框内容改变：", value);
              },
              isPassword: true,
              placeholder: "请输入密码"
            },
            {
              className: "panel-textarea",
              text: "textarea",
              type: "textarea",
              // @ts-ignore
              props: {},
              attributes: [],
              getValue() {
                return "50";
              },
              callback(event, value) {
                console.log("textarea输入框内容改变：", value);
              },
              placeholder: "请输入内容"
            },
            {
              className: "panel-select",
              text: "select",
              type: "select",
              // @ts-ignore
              props: {},
              attributes: [],
              getValue() {
                return 50;
              },
              callback(event, isSelectedValue, isSelectedText) {
                console.log(`select当前选项：${isSelectedValue}，当前选项文本：${isSelectedText}`);
              },
              data: [
                {
                  value: "all",
                  text: "所有",
                  disable() {
                    return false;
                  }
                },
                {
                  value: "text",
                  text: "文本",
                  disable() {
                    return false;
                  }
                },
                {
                  value: "html",
                  text: "超文本",
                  disable() {
                    return false;
                  }
                }
              ]
            },
            {
              className: "panel-select-multiple",
              type: "select-multiple",
              text: "select-multiple",
              // @ts-ignore
              props: {},
              attributes: [],
              placeholder: "请至少选择一个选项",
              getValue() {
                return ["select-1", "select-2"];
              },
              callback(selectInfo) {
                console.log(`select值改变，多选信息`, selectInfo);
              },
              clickCallBack(event, isSelectedInfo) {
                console.log("点击", event, isSelectedInfo);
              },
              closeIconClickCallBack(event, data) {
                console.log("点击关闭图标的事件", data);
              },
              data: [
                {
                  value: "select-1",
                  text: "单选1",
                  isHTML: false,
                  disable() {
                    return false;
                  }
                },
                {
                  value: "select-2",
                  text: "单选2",
                  isHTML: false,
                  disable() {
                    return false;
                  }
                },
                {
                  value: "select-3",
                  text: "单选3",
                  isHTML: false,
                  disable() {
                    return false;
                  }
                },
                {
                  value: "select-4",
                  text: "单选4",
                  isHTML: false,
                  disable() {
                    return false;
                  }
                },
                {
                  value: "select-5",
                  text: "单选5",
                  isHTML: false,
                  disable() {
                    return false;
                  }
                }
              ]
            },
            {
              type: "forms",
              text: "deep菜单",
              forms: [
                {
                  type: "deepMenu",
                  className: "panel-deepMenu",
                  text: "deepMenu",
                  description: "二级菜单",
                  rightText: "自定义配置",
                  arrowRightIcon: true,
                  afterAddToUListCallBack(formConfig, container) {
                    console.log(formConfig, container);
                  },
                  clickCallBack(event, formConfig) {
                    console.log("进入子配置", event, formConfig);
                  },
                  forms: [
                    {
                      className: "forms-1",
                      text: "区域设置",
                      type: "forms",
                      attributes: [],
                      forms: [
                        {
                          className: "panel-switch",
                          text: "switch",
                          type: "switch",
                          // @ts-ignore
                          props: {},
                          attributes: [],
                          getValue() {
                            return true;
                          },
                          callback(event, value) {
                            console.log("按钮开启状态：", value);
                          }
                        },
                        {
                          className: "panel-slider",
                          text: "slider",
                          // @ts-ignore
                          props: {},
                          type: "slider",
                          attributes: [],
                          getValue() {
                            return 50;
                          },
                          callback(event, value) {
                            console.log("滑块当前数值：", value);
                          },
                          min: 1,
                          max: 100
                        },
                        {
                          className: "panel-button",
                          text: "button",
                          // @ts-ignore
                          props: {},
                          type: "button",
                          attributes: [],
                          buttonIcon: "eleme",
                          buttonIconIsLoading: true,
                          buttonType: "warning",
                          buttonText: "warning按钮",
                          callback(event) {
                            console.log("点击按钮", event);
                          }
                        },
                        {
                          className: "panel-button",
                          text: "button",
                          type: "button",
                          // @ts-ignore
                          props: {},
                          attributes: [],
                          buttonIcon: "chromeFilled",
                          buttonIconIsLoading: true,
                          buttonType: "danger",
                          buttonText: "danger按钮",
                          callback(event) {
                            console.log("点击按钮", event);
                          }
                        },
                        {
                          className: "panel-button",
                          text: "button",
                          // @ts-ignore
                          props: {},
                          type: "button",
                          attributes: [],
                          buttonIcon: "upload",
                          buttonIconIsLoading: false,
                          buttonType: "info",
                          buttonText: "info按钮",
                          callback(event) {
                            console.log("点击按钮", event);
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
              isFold: true,
              text: "折叠菜单",
              afterAddToUListCallBack(formConfig, container) {
                console.log(formConfig, container);
              },
              forms: [
                {
                  className: "panel-switch",
                  text: "switch",
                  // @ts-ignore
                  props: {},
                  type: "switch",
                  attributes: [],
                  getValue() {
                    return true;
                  },
                  callback(event, value) {
                    console.log("按钮开启状态：", value);
                  }
                }
              ]
            }
          ]
        }
      ],
      btn: {
        close: {
          enable: true,
          callback(event) {
            event.close();
          }
        }
      },
      mask: {
        enable: false,
        clickEvent: {
          toClose: false,
          toHide: false
        },
        clickCallBack: null
      },
      useShadowRoot: true,
      class: "",
      mobileClassName: "pops-panel-is-mobile",
      isMobile: false,
      only: false,
      width: "700px",
      height: "500px",
      position: "center",
      animation: "pops-anim-fadein-zoom",
      zIndex: 1e4,
      drag: false,
      dragLimit: true,
      dragExtraDistance: 3,
      dragMoveCallBack() {
      },
      dragEndCallBack() {
      },
      forbiddenScroll: false,
      style: null,
      beforeAppendToPageCallBack() {
      }
    };
  };
  const PopsMathFloatUtils = {
    /**
     * 判断数字是否是浮点数
     * @param num
     */
    isFloat(num) {
      return Number(num) === num && num % 1 !== 0;
    },
    /**
     * 浮点数加法
     * @param number1
     * @param number2
     */
    add(number1, number2) {
      let number1length, number2length, powValue;
      try {
        number1length = number1.toString().split(".")[1].length;
      } catch (error2) {
        number1length = 0;
      }
      try {
        number2length = number2.toString().split(".")[1].length;
      } catch (error2) {
        number2length = 0;
      }
      powValue = Math.pow(10, Math.max(number1length, number2length));
      return Math.round(number1 * powValue + number2 * powValue) / powValue;
    },
    /**
     * 减法
     * @param number1
     * @param number2
     */
    sub(number1, number2) {
      let number1length, number2length, powValue;
      try {
        number1length = number1.toString().split(".")[1].length;
      } catch (error2) {
        number1length = 0;
      }
      try {
        number2length = number2.toString().split(".")[1].length;
      } catch (error2) {
        number2length = 0;
      }
      powValue = Math.pow(10, Math.max(number1length, number2length));
      let fixedValue = number1length >= number2length ? number1length : number2length;
      return (Math.round(number1 * powValue - number2 * powValue) / powValue).toFixed(fixedValue);
    },
    /**
     * 除法
     * @param number1
     * @param number2
     */
    division(number1, number2) {
      let number1length, number2length, number1ReplaceValue, number2ReplaceValue;
      try {
        number1length = number1.toString().split(".")[1].length;
      } catch (error2) {
        number1length = 0;
      }
      try {
        number2length = number2.toString().split(".")[1].length;
      } catch (error2) {
        number2length = 0;
      }
      number1ReplaceValue = Number(number1.toString().replace(".", ""));
      number2ReplaceValue = Number(number2.toString().replace(".", ""));
      return number1ReplaceValue / number2ReplaceValue * Math.pow(10, number2length - number1length);
    }
  };
  const PanelHandleContentDetails = () => {
    return {
      /**
       * 左侧的ul容器
       */
      asideULElement: null,
      /**
       * 右侧主内容的顶部文字ul容器
       */
      sectionContainerHeaderULElement: null,
      /**
       * 右侧主内容的ul容器
       */
      sectionContainerULElement: null,
      /**
       * 元素
       */
      $el: {
        /** 内容 */
        $content: null,
        /** 左侧容器 */
        $contentAside: null,
        /** 右侧容器 */
        $contentSectionContainer: null
      },
      /**
       * 初始化
       * @param details
       */
      init(details) {
        this.$el = null;
        this.$el = {
          ...details.$el
        };
        this.asideULElement = this.$el.$contentAside.querySelector("ul");
        this.sectionContainerHeaderULElement = this.$el.$contentSectionContainer.querySelectorAll("ul")[0];
        this.sectionContainerULElement = this.$el.$contentSectionContainer.querySelectorAll("ul")[1];
        let $asideDefaultItemElement = null;
        let isScrollToDefaultView = false;
        details.config.content.forEach((asideItemConfig) => {
          let $asideLiElement = this.createAsideItem(asideItemConfig);
          this.setAsideItemClickEvent($asideLiElement, asideItemConfig);
          this.asideULElement.appendChild($asideLiElement);
          if ($asideDefaultItemElement == null) {
            let flag = false;
            if (typeof asideItemConfig.isDefault === "function") {
              flag = Boolean(asideItemConfig.isDefault());
            } else {
              flag = Boolean(asideItemConfig.isDefault);
            }
            if (flag) {
              $asideDefaultItemElement = $asideLiElement;
              isScrollToDefaultView = Boolean(asideItemConfig.scrollToDefaultView);
            }
          }
          if (typeof asideItemConfig.afterRender === "function") {
            asideItemConfig.afterRender({
              asideConfig: asideItemConfig,
              $asideLiElement
            });
          }
        });
        if ($asideDefaultItemElement == null && this.asideULElement.children.length) {
          $asideDefaultItemElement = this.asideULElement.children[0];
        }
        if ($asideDefaultItemElement) {
          $asideDefaultItemElement.click();
          if (isScrollToDefaultView) {
            $asideDefaultItemElement == null ? void 0 : $asideDefaultItemElement.scrollIntoView();
          }
        } else {
          console.error("pops.panel：左侧容器没有项");
        }
      },
      /**
       * 清空container容器的元素
       */
      clearContainer() {
        var _a2;
        this.sectionContainerHeaderULElement.innerHTML = "";
        this.sectionContainerULElement.innerHTML = "";
        (_a2 = this.$el.$content) == null ? void 0 : _a2.querySelectorAll("section.pops-panel-deepMenu-container").forEach((ele) => ele.remove());
      },
      /**
       * 清空左侧容器已访问记录
       */
      clearAsideItemIsVisited() {
        this.$el.$contentAside.querySelectorAll(".pops-is-visited").forEach((element) => {
          popsDOMUtils.removeClassName(element, "pops-is-visited");
        });
      },
      /**
       * 设置左侧容器已访问记录
       * @param element
       */
      setAsideItemIsVisited(element) {
        popsDOMUtils.addClassName(element, "pops-is-visited");
      },
      /**
       * 为元素添加自定义属性
       * @param element
       * @param attributes
       */
      setElementAttributes(element, attributes) {
        if (attributes == null) {
          return;
        }
        if (Array.isArray(attributes)) {
          attributes.forEach((attrObject) => {
            this.setElementAttributes(element, attrObject);
          });
        } else {
          Object.keys(attributes).forEach((attributeName) => {
            element.setAttribute(attributeName, attributes[attributeName]);
          });
        }
      },
      /**
       * 为元素设置(自定义)属性
       * @param element
       * @param props
       */
      setElementProps(element, props) {
        if (props == null) {
          return;
        }
        Object.keys(props).forEach((propName) => {
          Reflect.set(element, propName, props[propName]);
        });
      },
      /**
       * 为元素设置classname
       * @param element
       * @param className
       */
      setElementClassName(element, className) {
        if (className == null) {
          return;
        }
        if (typeof className === "function") {
          className = className();
        }
        if (typeof className === "string") {
          let splitClassName = className.split(" ");
          splitClassName.forEach((classNameStr) => {
            element.classList.add(classNameStr);
          });
        } else if (Array.isArray(className)) {
          className.forEach((classNameStr) => {
            this.setElementClassName(element, classNameStr);
          });
        }
      },
      /**
       * 创建左侧容器元素<li>
       * @param  asideConfig
       */
      createAsideItem(asideConfig) {
        let liElement = document.createElement("li");
        liElement.id = asideConfig.id;
        liElement["__forms__"] = asideConfig.forms;
        liElement.innerHTML = asideConfig.title;
        this.setElementClassName(liElement, asideConfig.className);
        this.setElementAttributes(liElement, asideConfig.attributes);
        this.setElementProps(liElement, asideConfig.props);
        return liElement;
      },
      /**
       * 创建中间容器的元素<li>
       * type ==> switch
       * @param formConfig
       */
      createSectionContainerItem_switch(formConfig) {
        let liElement = document.createElement("li");
        liElement["__formConfig__"] = formConfig;
        this.setElementClassName(liElement, formConfig.className);
        this.setElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = /*html*/
          `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        liElement.innerHTML = /*html*/
        `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-panel-switch">
				<input class="pops-panel-switch__input" type="checkbox">
				<span class="pops-panel-switch__core">
					<div class="pops-panel-switch__action">
					</div>
				</span>
			</div>`;
        const PopsPanelSwitch = {
          [Symbol.toStringTag]: "PopsPanelSwitch",
          $data: {
            value: Boolean(formConfig.getValue())
          },
          $ele: {
            switch: liElement.querySelector(".pops-panel-switch"),
            input: liElement.querySelector(".pops-panel-switch__input"),
            core: liElement.querySelector(".pops-panel-switch__core")
          },
          init() {
            this.setStatus(this.$data.value);
            if (formConfig.disabled) {
              this.disable();
            }
            this.setClickEvent();
          },
          setClickEvent() {
            let that = this;
            popsDOMUtils.on(this.$ele.core, "click", void 0, function(event) {
              if (that.$ele.input.disabled || that.$ele.switch.hasAttribute("data-disabled")) {
                return;
              }
              that.$data.value = that.getStatus();
              that.setStatus(that.$data.value);
              if (typeof formConfig.callback === "function") {
                formConfig.callback(event, that.$data.value);
              }
            });
          },
          /**
           * 设置状态
           */
          setStatus(isChecked = false) {
            isChecked = Boolean(isChecked);
            this.$ele.input.checked = isChecked;
            if (isChecked) {
              popsDOMUtils.addClassName(this.$ele.switch, "pops-panel-switch-is-checked");
            } else {
              popsDOMUtils.removeClassName(this.$ele.switch, "pops-panel-switch-is-checked");
            }
          },
          /**
           * 根据className来获取逆反值
           */
          getStatus() {
            let checkedValue = false;
            if (!popsDOMUtils.containsClassName(this.$ele.switch, "pops-panel-switch-is-checked")) {
              checkedValue = true;
            }
            return checkedValue;
          },
          /**
           * 禁用复选框
           */
          disable() {
            this.$ele.input.disabled = true;
            this.$ele.switch.setAttribute("data-disabled", "true");
          },
          /**
           * 启用复选框
           */
          notDisable() {
            this.$ele.input.disabled = false;
            this.$ele.switch.removeAttribute("data-disabled");
          }
        };
        PopsPanelSwitch.init();
        liElement["data-switch"] = PopsPanelSwitch;
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> slider
       * @param formConfig
       */
      createSectionContainerItem_slider(formConfig) {
        let liElement = document.createElement("li");
        liElement["__formConfig__"] = formConfig;
        this.setElementClassName(liElement, formConfig.className);
        this.setElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        liElement.innerHTML = `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-panel-slider">
				<input type="range" min="${formConfig.min}" max="${formConfig.max}">
			</div>`;
        let rangeInputElement = liElement.querySelector(".pops-panel-slider input[type=range]");
        if (formConfig.step) {
          rangeInputElement.setAttribute("step", formConfig.step.toString());
        }
        rangeInputElement.value = formConfig.getValue().toString();
        let getToolTipContent = function(value) {
          if (typeof formConfig.getToolTipContent === "function") {
            return formConfig.getToolTipContent(value);
          } else {
            return value;
          }
        };
        let tooltip = pops.tooltip({
          target: rangeInputElement.parentElement,
          content: () => {
            return getToolTipContent(rangeInputElement.value);
          },
          zIndex: () => {
            return PopsInstanceUtils.getPopsMaxZIndex().zIndex;
          },
          className: "github-tooltip",
          alwaysShow: false,
          only: false,
          position: "top",
          arrowDistance: 10
        });
        popsDOMUtils.on(rangeInputElement, ["input", "propertychange"], void 0, function(event) {
          tooltip.toolTip.changeContent(getToolTipContent(rangeInputElement.value));
          if (typeof formConfig.callback === "function") {
            formConfig.callback(event, event.target.value);
          }
        });
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> slider
       * @param formConfig
       */
      createSectionContainerItem_slider_new(formConfig) {
        let liElement = document.createElement("li");
        liElement["__formConfig__"] = formConfig;
        this.setElementClassName(liElement, formConfig.className);
        this.setElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = /*html*/
          `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        liElement.innerHTML = /*html*/
        `
			<div class="pops-panel-item-left-text" style="flex: 1;">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-slider pops-slider-width">
				<div class="pops-slider__runway">
					<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
					<div class="pops-slider__button-wrapper" style="left: 0%">
						<div class="pops-slider__button"></div>
					</div>
				</div>
			</div>`;
        const PopsPanelSlider = {
          [Symbol.toStringTag]: "PopsPanelSlider",
          /**
           * 值
           */
          value: formConfig.getValue(),
          /**
           * 最小值
           */
          min: formConfig.min,
          /**
           * 最大值
           */
          max: formConfig.max,
          /**
           * 间隔
           */
          step: formConfig.step || 1,
          $data: {
            /**
             * 是否正在移动
             */
            isMove: false,
            /**
             * 是否已初始化已拖拽的距离
             */
            isInitDragPosition: false,
            /**
             * 是否正在检测是否停止拖拽
             */
            isCheckingStopDragMove: false,
            /**
             * 总宽度（px）
             */
            totalWidth: 0,
            /**
             * 每一块的间隔（px）
             */
            stepPx: 0,
            /**
             * 已拖拽的距离（px）
             */
            dragWidth: 0,
            /**
             * 已拖拽的百分比
             */
            dragPercent: 0,
            /**
             * 每一次块的信息
             * 例如：当最小值是2，最大值是10，step为2
             * 那么生成[2,4,6,8,10] 共计5个
             * 又获取到当前滑块总长度是200px
             * 那么生成映射
             * 2 => 0px~40px
             * 4 => 40px~80px
             * 6 => 80px~120px
             * 8 => 120px~160px
             * 10 => 160px~200px
             */
            stepBlockMap: /* @__PURE__ */ new Map(),
            tooltip: null
          },
          $ele: {
            slider: liElement.querySelector(".pops-slider"),
            runAway: liElement.querySelector(".pops-slider__runway"),
            bar: liElement.querySelector(".pops-slider__bar"),
            buttonWrapper: liElement.querySelector(".pops-slider__button-wrapper"),
            button: liElement.querySelector(".pops-slider__button")
          },
          $interval: {
            isCheck: false
          },
          $tooltip: null,
          init() {
            this.initEleData();
            this.setToolTipEvent();
            this.setPanEvent();
            this.setRunAwayClickEvent();
            this.intervalInit();
            if (formConfig.disabled) {
              this.disableDrag();
            }
          },
          /**
           * 10s内循环获取slider的宽度等信息
           * 获取到了就可以初始化left的值
           * @param {number} [checkStepTime=200] 每次检测的间隔时间
           * @param {number} [maxTime=10000] 最大的检测时间
           */
          intervalInit(checkStepTime = 200, maxTime = 1e4) {
            if (this.$interval.isCheck) {
              return;
            }
            this.$interval.isCheck = true;
            let isSuccess = false;
            let oldTotalWidth = this.$data.totalWidth;
            let timer = void 0;
            let interval = setInterval(() => {
              if (isSuccess) {
                this.$interval.isCheck = false;
                clearTimeout(timer);
                clearInterval(interval);
              } else {
                this.initTotalWidth();
                if (this.$data.totalWidth !== 0) {
                  isSuccess = true;
                  if (this.$data.totalWidth !== oldTotalWidth) {
                    if (PopsMathFloatUtils.isFloat(this.step)) {
                      this.initFloatStepMap();
                    } else {
                      this.initStepMap();
                    }
                    this.initSliderPosition();
                  }
                }
              }
            }, checkStepTime);
            timer = setTimeout(() => {
              clearInterval(interval);
            }, maxTime);
          },
          /**
           * 把数据添加到元素上
           */
          initEleData() {
            this.$ele.slider.setAttribute("data-min", this.min.toString());
            this.$ele.slider.setAttribute("data-max", this.max.toString());
            this.$ele.slider.setAttribute("data-value", this.value.toString());
            this.$ele.slider.setAttribute("data-step", this.step.toString());
            this.$ele.slider["data-min"] = this.min;
            this.$ele.slider["data-max"] = this.max;
            this.$ele.slider["data-value"] = this.value;
            this.$ele.slider["data-step"] = this.step;
          },
          /**
           * 初始化滑块的总长度的数据(px)
           */
          initTotalWidth() {
            this.$data.totalWidth = popsDOMUtils.width(this.$ele.runAway);
          },
          /**
           * 初始化每一个块的具体数据信息
           */
          initStepMap() {
            let index = 0;
            let blockNums = (this.max - this.min) / this.step;
            this.$data.stepPx = this.$data.totalWidth / blockNums;
            let widthPx = 0;
            for (let stepValue = this.min; stepValue <= this.max; stepValue += this.step) {
              let value = this.formatValue(stepValue);
              let info = {};
              if (value === this.min) {
                info = {
                  value,
                  px: 0,
                  pxLeft: 0,
                  pxRight: this.$data.stepPx / 2,
                  percent: 0
                };
              } else {
                info = {
                  value,
                  px: widthPx,
                  pxLeft: widthPx - this.$data.stepPx / 2,
                  pxRight: widthPx + this.$data.stepPx / 2,
                  percent: widthPx / this.$data.totalWidth
                };
              }
              this.$data.stepBlockMap.set(index, info);
              index++;
              widthPx += this.$data.stepPx;
            }
          },
          /**
           * 初始化每一个块的具体数据信息（浮点）
           */
          initFloatStepMap() {
            let index = 0;
            let blockNums = (this.max - this.min) / this.step;
            this.$data.stepPx = this.$data.totalWidth / blockNums;
            let widthPx = 0;
            for (let stepValue = this.min; stepValue <= this.max; stepValue = PopsMathFloatUtils.add(stepValue, this.step)) {
              let value = this.formatValue(stepValue);
              let info = {};
              if (value === this.min) {
                info = {
                  value,
                  px: 0,
                  pxLeft: 0,
                  pxRight: this.$data.stepPx / 2,
                  percent: 0
                };
              } else {
                info = {
                  value,
                  px: widthPx,
                  pxLeft: widthPx - this.$data.stepPx / 2,
                  pxRight: widthPx + this.$data.stepPx / 2,
                  percent: widthPx / this.$data.totalWidth
                };
              }
              this.$data.stepBlockMap.set(index, info);
              index++;
              widthPx += this.$data.stepPx;
            }
          },
          /**
           * 初始化slider的默认起始left的百分比值
           */
          initSliderPosition() {
            let percent = 0;
            for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
              if (stepBlockInfo.value == this.value) {
                percent = stepBlockInfo.percent;
                this.$data.dragWidth = stepBlockInfo.px;
                break;
              }
            }
            percent = this.formatValue(percent * 100);
            this.setSliderPosition(percent);
          },
          /**
           * 判断数字是否是浮点数
           * @param num
           * @returns
           */
          isFloat(num) {
            return Number(num) === num && num % 1 !== 0;
          },
          /**
           * 值改变的回调
           * @param event
           * @param value
           */
          valueChangeCallBack(event, value) {
            if (typeof formConfig.callback === "function") {
              formConfig.callback(event, value);
            }
          },
          /**
           * 根据拖拽距离获取滑块应该在的区间和值
           */
          getDragInfo(dragX) {
            let result2 = this.$data.stepBlockMap.get(0);
            for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
              if (stepBlockInfo.pxLeft <= dragX && dragX < stepBlockInfo.pxRight) {
                result2 = stepBlockInfo;
                break;
              }
            }
            return result2;
          },
          /**
           * 获取滑块的当前脱拖拽占据的百分比
           * @param {number} dragWidth
           */
          getSliderPositonPercent(dragWidth) {
            return dragWidth / this.$data.totalWidth;
          },
          /**
           * 根据step格式化value
           * @param num
           */
          formatValue(num) {
            if (PopsMathFloatUtils.isFloat(this.step)) {
              num = parseFloat(num.toFixed(2));
            } else {
              num = parseInt(num.toString());
            }
            return num;
          },
          /**
           * 设置滑块的位置偏移（left）
           * @param percent 百分比
           */
          setSliderPosition(percent) {
            if (parseInt(percent.toString()) === 1) {
              percent = 1;
            }
            if (percent > 1) {
              percent = percent / 100;
            }
            this.$ele.buttonWrapper.style.left = `${percent * 100}%`;
            this.$ele.bar.style.width = `${percent * 100}%`;
          },
          /**
           * 禁止拖拽
           */
          disableDrag() {
            this.$ele.runAway.classList.add("pops-slider-is-disabled");
          },
          /**
           * 允许拖拽
           */
          allowDrag() {
            this.$ele.runAway.classList.remove("pops-slider-is-disabled");
          },
          /**
           * 判断当前滑块是否被禁用
           */
          isDisabledDrag() {
            return this.$ele.runAway.classList.contains("pops-slider-is-disabled");
          },
          /**
           * 设置进度条点击定位的事件
           */
          setRunAwayClickEvent() {
            popsDOMUtils.on(this.$ele.runAway, "click", void 0, (event) => {
              if (event.target !== this.$ele.runAway && event.target !== this.$ele.bar) {
                return;
              }
              let clickX = parseFloat(event.offsetX);
              this.dragStartCallBack();
              this.dragMoveCallBack(event, clickX, this.value);
              this.dragEndCallBack(clickX);
            }, {
              capture: false
            });
          },
          /**
           * 拖拽开始的回调，如果返回false，禁止拖拽
           */
          dragStartCallBack() {
            if (!this.$data.isMove) {
              if (this.isDisabledDrag()) {
                return false;
              }
              this.$data.isMove = true;
            }
            return true;
          },
          /**
           * 拖拽中的回调
           * @param event 事件
           * @param dragX 当前拖拽的距离
           * @param oldValue 旧的值
           */
          dragMoveCallBack(event, dragX, oldValue) {
            let dragPercent = 0;
            if (dragX <= 0) {
              dragPercent = 0;
              this.value = this.min;
            } else if (dragX >= this.$data.totalWidth) {
              dragPercent = 1;
              this.value = this.max;
            } else {
              const dragInfo = this.getDragInfo(dragX);
              dragPercent = dragInfo.percent;
              this.value = this.formatValue(dragInfo.value);
            }
            this.$data.dragPercent = dragPercent;
            this.setSliderPosition(this.$data.dragPercent);
            this.showToolTip();
            if (oldValue !== this.value) {
              this.valueChangeCallBack(event, this.value);
            }
          },
          /**
           * 拖拽结束的回调
           */
          dragEndCallBack(dragX) {
            this.$data.isMove = false;
            if (dragX <= 0) {
              this.$data.dragWidth = 0;
            } else if (dragX >= this.$data.totalWidth) {
              this.$data.dragWidth = this.$data.totalWidth;
            } else {
              this.$data.dragWidth = dragX;
            }
            this.closeToolTip();
          },
          /**
           * 设置点击拖拽事件
           */
          setPanEvent() {
            const AnyTouch = popsUtils.AnyTouch();
            this.$tooltip = new AnyTouch(this.$ele.button, {
              preventDefault() {
                return false;
              }
            });
            let currentDragX = 0;
            this.$tooltip.on("at:move", (event) => {
              if (!this.dragStartCallBack()) {
                return;
              }
              let oldValue = this.value;
              const runAwayRect = this.$ele.runAway.getBoundingClientRect();
              let displacementX = event.x - (runAwayRect.left + globalThis.screenX);
              if (displacementX <= 0) {
                displacementX = 0;
              } else if (displacementX >= runAwayRect.width) {
                displacementX = runAwayRect.width;
              }
              currentDragX = displacementX;
              this.dragMoveCallBack(event, currentDragX, oldValue);
            });
            this.$tooltip.on("at:end", (event) => {
              this.dragEndCallBack(currentDragX);
            });
          },
          /**
           * 显示悬浮的
           */
          showToolTip() {
            this.$data.tooltip.toolTip.show();
          },
          /**
           * 关闭悬浮的
           */
          closeToolTip() {
            this.$data.tooltip.toolTip.close();
          },
          /**
           * 检测在1000ms内，是否停止了拖拽
           */
          checkStopDragMove() {
            if (this.$data.isCheckingStopDragMove) {
              return;
            }
            this.$data.isCheckingStopDragMove = true;
            let interval = setInterval(() => {
              if (!this.$data.isMove) {
                this.$data.isCheckingStopDragMove = false;
                this.closeToolTip();
                clearInterval(interval);
              }
            }, 200);
            setTimeout(() => {
              this.$data.isCheckingStopDragMove = false;
              clearInterval(interval);
            }, 2e3);
          },
          /**
           * 设置拖拽按钮的悬浮事件
           */
          setToolTipEvent() {
            function getToolTipContent() {
              if (typeof formConfig.getToolTipContent === "function") {
                return formConfig.getToolTipContent(PopsPanelSlider.value);
              } else {
                return PopsPanelSlider.value;
              }
            }
            let tooltip = pops.tooltip({
              target: this.$ele.button,
              content: getToolTipContent,
              zIndex: () => {
                return PopsInstanceUtils.getPopsMaxZIndex().zIndex;
              },
              isFixed: true,
              className: "github-tooltip",
              only: false,
              eventOption: {
                capture: true,
                passive: true
              },
              showBeforeCallBack: () => {
                this.intervalInit();
              },
              showAfterCallBack: (toolTipNode) => {
                tooltip.toolTip.changeContent(getToolTipContent());
              },
              closeBeforeCallBack: () => {
                if (this.$data.isMove) {
                  this.checkStopDragMove();
                  return false;
                }
              },
              alwaysShow: false,
              position: "top",
              arrowDistance: 10
            });
            this.$data.tooltip = tooltip;
          }
        };
        PopsPanelSlider.init();
        liElement["data-slider"] = PopsPanelSlider;
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> input
       * @param formConfig
       */
      createSectionContainerItem_input(formConfig) {
        let liElement = document.createElement("li");
        liElement["__formConfig__"] = formConfig;
        this.setElementClassName(liElement, formConfig.className);
        this.setElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let inputType = "text";
        if (formConfig.isPassword) {
          inputType = "password";
        } else if (formConfig.isNumber) {
          inputType = "number";
        }
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        liElement.innerHTML = `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
			${leftDescriptionText}
			</div>
			<div class="pops-panel-input pops-user-select-none">
				<input type="${inputType}" placeholder="${formConfig.placeholder}">
			</div>
			`;
        const PopsPanelInput = {
          [Symbol.toStringTag]: "PopsPanelInput",
          $ele: {
            panelInput: liElement.querySelector(".pops-panel-input"),
            input: liElement.querySelector("input"),
            inputSpanIcon: document.createElement("span"),
            inputSpanIconInner: null,
            icon: null
          },
          $data: {
            value: formConfig.getValue(),
            isView: false
          },
          init() {
            this.initEle();
            this.setInputValue(this.$data.value);
            if (formConfig.isPassword) {
              this.setCircleIcon(pops.config.iconSVG.view);
              this.setCircleIconClickEvent();
            } else {
              if (this.$ele.input.value != "") {
                this.setCircleIcon(pops.config.iconSVG.circleClose);
                this.setCircleIconClickEvent();
              }
            }
            this.setInputChangeEvent();
            if (formConfig.disabled) {
              this.disable();
            }
            if (typeof formConfig.handlerCallBack === "function") {
              formConfig.handlerCallBack(liElement, this.$ele.input);
            }
          },
          /**
           * 初始化$ele的配置
           */
          initEle() {
            this.$ele.input.parentElement.insertBefore(this.$ele.inputSpanIcon, this.$ele.input.nextSibling);
            this.$ele.inputSpanIcon.className = "pops-panel-input__suffix";
            this.$ele.inputSpanIcon.innerHTML = `
					<span class="pops-panel-input__suffix-inner">
						<i class="pops-panel-icon"></i>
					</span>
					`;
            this.$ele.inputSpanIconInner = this.$ele.inputSpanIcon.querySelector(".pops-panel-input__suffix-inner");
            this.$ele.icon = this.$ele.inputSpanIcon.querySelector(".pops-panel-icon");
          },
          /**
           * 禁用
           */
          disable() {
            this.$ele.input.disabled = true;
            this.$ele.panelInput.classList.add("pops-input-disabled");
          },
          /**
           * 取消禁用
           */
          notDisable() {
            this.$ele.input.disabled = false;
            this.$ele.panelInput.classList.remove("pops-input-disabled");
          },
          /**
           * 判断是否已被禁用
           */
          isDisabled() {
            return this.$ele.input.disabled;
          },
          /**
           * 设置输入框内容
           * @param {string} [value=""] 值
           */
          setInputValue(value = "") {
            this.$ele.input.value = value;
          },
          /**
           * 设置input元素的type
           * @param {string} [typeValue="text"] type值
           */
          setInputType(typeValue = "text") {
            this.$ele.input.setAttribute("type", typeValue);
          },
          /**
           * 删除图标按钮
           */
          removeCircleIcon() {
            this.$ele.icon.innerHTML = "";
          },
          /**
           * 添加清空图标按钮
           * @param {string} [svgHTML=pops.config.iconSVG.circleClose] svg图标，默认为清空的图标
           */
          setCircleIcon(svgHTML = pops.config.iconSVG.circleClose) {
            this.$ele.icon.innerHTML = svgHTML;
          },
          /**
           * 添加图标按钮的点击事件
           */
          setCircleIconClickEvent() {
            popsDOMUtils.on(this.$ele.icon, "click", void 0, () => {
              if (this.isDisabled()) {
                return;
              }
              this.removeCircleIcon();
              if (formConfig.isPassword) {
                if (this.$data.isView) {
                  this.$data.isView = false;
                  this.setInputType("text");
                  this.setCircleIcon(pops.config.iconSVG.hide);
                } else {
                  this.$data.isView = true;
                  this.setInputType("password");
                  this.setCircleIcon(pops.config.iconSVG.view);
                }
              } else {
                this.setInputValue("");
                this.$ele.input.focus();
                this.$ele.input.dispatchEvent(new Event("input"));
              }
            });
          },
          /**
           * 监听输入框内容改变
           */
          setInputChangeEvent() {
            popsDOMUtils.on(this.$ele.input, ["input", "propertychange"], void 0, (event) => {
              this.$data.value = this.$ele.input.value;
              if (!formConfig.isPassword) {
                if (this.$ele.input.value !== "" && this.$ele.icon.innerHTML === "") {
                  this.setCircleIcon(pops.config.iconSVG.circleClose);
                  this.setCircleIconClickEvent();
                } else if (this.$ele.input.value === "") {
                  this.removeCircleIcon();
                }
              }
              if (typeof formConfig.callback === "function") {
                if (formConfig.isNumber) {
                  formConfig.callback(event, this.$ele.input.value, this.$ele.input.valueAsNumber);
                } else {
                  formConfig.callback(event, this.$ele.input.value);
                }
              }
            });
          }
        };
        PopsPanelInput.init();
        liElement["data-input"] = PopsPanelInput;
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> textarea
       * @param formConfig
       */
      createSectionContainerItem_textarea(formConfig) {
        let liElement = document.createElement("li");
        liElement["__formConfig__"] = formConfig;
        this.setElementClassName(liElement, formConfig.className);
        this.setElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        liElement.innerHTML = `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
			${leftDescriptionText}
			</div>
			<div class="pops-panel-textarea">
				<textarea placeholder="${formConfig.placeholder ?? ""}">
			</textarea>
			</div>
			`;
        const PopsPanelTextArea = {
          [Symbol.toStringTag]: "PopsPanelTextArea",
          $ele: {
            panelTextarea: liElement.querySelector(".pops-panel-textarea"),
            textarea: liElement.querySelector(".pops-panel-textarea textarea")
          },
          $data: {
            value: formConfig.getValue()
          },
          init() {
            this.setValue(this.$data.value);
            this.setChangeEvent();
            if (formConfig.disabled) {
              this.disable();
            }
          },
          disable() {
            this.$ele.textarea.setAttribute("disabled", "true");
            this.$ele.panelTextarea.classList.add("pops-panel-textarea-disable");
          },
          notDisable() {
            this.$ele.textarea.removeAttribute("disabled");
            this.$ele.panelTextarea.classList.remove("pops-panel-textarea-disable");
          },
          isDisabled() {
            return this.$ele.textarea.hasAttribute("disabled") || this.$ele.panelTextarea.classList.contains("pops-panel-textarea-disable");
          },
          setValue(value) {
            this.$ele.textarea.value = value;
          },
          /**
           * 监听选择内容改变
           */
          setChangeEvent() {
            popsDOMUtils.on(this.$ele.textarea, ["input", "propertychange"], void 0, (event) => {
              this.$data.value = event.target.value;
              if (typeof formConfig.callback === "function") {
                formConfig.callback(event, event.target.value);
              }
            });
          }
        };
        PopsPanelTextArea.init();
        liElement["data-textarea"] = PopsPanelTextArea;
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> select
       * @param formConfig
       */
      createSectionContainerItem_select(formConfig) {
        let liElement = document.createElement("li");
        liElement["__formConfig__"] = formConfig;
        this.setElementClassName(liElement, formConfig.className);
        this.setElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = /*html*/
          `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        liElement.innerHTML = /*html*/
        `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
			${leftDescriptionText}
			</div>
			<div class="pops-panel-select pops-user-select-none">
				<select></select>
			</div>
			`;
        const PopsPanelSelect = {
          [Symbol.toStringTag]: "PopsPanelSelect",
          $ele: {
            panelSelect: liElement.querySelector(".pops-panel-select"),
            select: liElement.querySelector(".pops-panel-select select")
          },
          $eleKey: {
            disable: "__disable__",
            value: "__value__"
          },
          $data: {
            defaultValue: formConfig.getValue()
          },
          init() {
            this.initOption();
            this.setChangeEvent();
            this.setClickEvent();
            if (formConfig.disabled) {
              this.disable();
            }
          },
          /**
           * 给option元素设置属性
           * @param $ele
           * @param key
           * @param value
           */
          setNodeValue($ele, key, value) {
            Reflect.set($ele, key, value);
          },
          /**
           * 获取option元素上设置的属性
           * @param $ele
           * @param value
           * @param key
           */
          getNodeValue($ele, key) {
            return Reflect.get($ele, key);
          },
          disable() {
            this.$ele.select.setAttribute("disabled", "true");
            this.$ele.panelSelect.classList.add("pops-panel-select-disable");
          },
          notDisable() {
            this.$ele.select.removeAttribute("disabled");
            this.$ele.panelSelect.classList.remove("pops-panel-select-disable");
          },
          isDisabled() {
            return this.$ele.select.hasAttribute("disabled") || this.$ele.panelSelect.classList.contains("pops-panel-select-disable");
          },
          initOption() {
            formConfig.data.forEach((dataItem) => {
              let optionElement = document.createElement("option");
              this.setNodeValue(optionElement, this.$eleKey.value, dataItem.value);
              this.setNodeValue(optionElement, this.$eleKey.disable, dataItem.disable);
              if (dataItem.value === this.$data.defaultValue) {
                optionElement.setAttribute("selected", "true");
              }
              optionElement.innerText = dataItem.text;
              this.$ele.select.appendChild(optionElement);
            });
          },
          /** 检测所有option并设置禁用状态 */
          setSelectOptionsDisableStatus() {
            if (this.$ele.select.options && this.$ele.select.options.length) {
              Array.from(this.$ele.select.options).forEach((optionItem) => {
                this.setOptionDisableStatus(optionItem);
              });
            }
          },
          /** 设置禁用状态 */
          setOptionDisableStatus(optionElement) {
            let disable = false;
            let optionDisableAttr = this.getNodeValue(optionElement, this.$eleKey.disable);
            if (optionDisableAttr === "function") {
              let value = this.getNodeValue(optionElement, this.$eleKey.value);
              disable = Boolean(optionDisableAttr(value));
            }
            if (disable) {
              optionElement.setAttribute("disabled", "true");
            } else {
              optionElement.removeAttribute("disabled");
            }
          },
          /** 获取option上的信息 */
          getSelectOptionInfo($option) {
            let optionValue = this.getNodeValue($option, this.$eleKey.value);
            let optionText = $option.innerText || $option.textContent;
            return {
              value: optionValue,
              text: optionText,
              $option
            };
          },
          /**
           * 监听选择内容改变
           */
          setChangeEvent() {
            popsDOMUtils.on(this.$ele.select, "change", void 0, (event) => {
              this.setSelectOptionsDisableStatus();
              if (typeof formConfig.callback === "function") {
                let $isSelectedElement = event.target[event.target.selectedIndex];
                let selectInfo = this.getSelectOptionInfo($isSelectedElement);
                formConfig.callback(event, selectInfo.value, selectInfo.text);
              }
            });
          },
          /**
           * 监听点击事件
           */
          setClickEvent() {
            popsDOMUtils.on(this.$ele.select, "click", void 0, (event) => {
              this.setSelectOptionsDisableStatus();
              if (typeof formConfig.clickCallBack === "function") {
                formConfig.clickCallBack(event, this.$ele.select);
              }
            });
          }
        };
        PopsPanelSelect.init();
        Reflect.set(liElement, "data-select", PopsPanelSelect);
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> select-multiple
       * @param formConfig
       */
      createSectionContainerItem_select_multiple_new(formConfig) {
        let liElement = document.createElement("li");
        Reflect.set(liElement, "__formConfig__", formConfig);
        this.setElementClassName(liElement, formConfig.className);
        this.setElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = /*html*/
          `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        liElement.innerHTML = /*html*/
        `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
			${leftDescriptionText}
			</div>
			<div class="pops-panel-select-multiple">
				<div class="el-select__wrapper">
					<div class="el-select__selection">
						<!-- 这个是用于手动输入的，这里暂不适配 -->
						<div class="el-select__selected-item el-select__input-wrapper">
	
						</div>
						<!-- 这个是placeholder -->
						<div class="el-select__selected-item el-select__placeholder">
						</div>
					</div>
					<!-- 下拉箭头 -->
					<div class="el-select__suffix">
						<i class="el-icon el-select__caret el-select__icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
							</svg>
						</i>
					</div>
				</div>
			</div>
			`;
        const PopsPanelSelectMultiple = {
          [Symbol.toStringTag]: "PopsPanelSelectMultiple",
          $el: {
            /** 容器 */
            $container: void 0,
            /** 包括的容器 */
            $wrapper: void 0,
            /** 内容区域 */
            $section: void 0,
            /** 手动输入 */
            $selectedInputWrapper: void 0,
            /** 灰色提示语 */
            $selectedPlaceHolderWrapper: void 0,
            /** 下拉箭头区域 */
            $suffix: void 0,
            /** 下拉箭头图标 */
            $suffixIcon: void 0
          },
          $data: {
            /** 默认值 */
            defaultValue: formConfig.getValue(),
            selectInfo: []
          },
          /** 初始化 */
          init() {
            this.initDefault();
            this.inintEl();
            this.initPlaceHolder();
            this.updateTagElement();
            this.setSelectContainerClickEvent();
          },
          /** 初始化默认值 */
          initDefault() {
            formConfig.data.forEach((dataItem) => {
              if (this.$data.defaultValue.includes(dataItem.value)) {
                this.$data.selectInfo.push({
                  text: dataItem.text,
                  value: dataItem.value,
                  isHTML: Boolean(dataItem.isHTML),
                  disable: dataItem.disable
                });
              }
            });
          },
          /** 初始化$el变量 */
          inintEl() {
            this.$el.$container = liElement.querySelector(".pops-panel-select-multiple");
            this.$el.$wrapper = liElement.querySelector(".el-select__wrapper");
            this.$el.$section = liElement.querySelector(".el-select__selection");
            this.$el.$selectedInputWrapper = liElement.querySelector(".el-select__selected-item.el-select__input-wrapper");
            this.$el.$selectedPlaceHolderWrapper = liElement.querySelector(".el-select__selected-item.el-select__placeholder");
            this.$el.$suffix = liElement.querySelector(".el-select__suffix");
            this.$el.$suffixIcon = liElement.querySelector(".el-select__suffix .el-icon");
            this.hideInputWrapper();
          },
          /** 初始化提示文字 */
          initPlaceHolder() {
            let placeholder = "";
            if (typeof formConfig.placeholder === "string") {
              placeholder = formConfig.placeholder;
            } else if (typeof formConfig.placeholder === "function") {
              let placeholderResult = formConfig.placeholder();
              if (typeof placeholderResult === "string") {
                placeholder = placeholderResult;
              }
            }
            let $placeholder = popsDOMUtils.createElement("span", {
              innerText: placeholder
            });
            this.$el.$selectedPlaceHolderWrapper.appendChild($placeholder);
          },
          /** 初始化tag */
          updateTagElement() {
            formConfig.data.forEach((dataItem) => {
              let findValue = this.$data.selectInfo.find((item) => item.value === dataItem.value);
              if (findValue) {
                let selectedInfo = this.createSelectedItem({
                  text: dataItem.text,
                  isHTML: dataItem.isHTML
                });
                this.addSelectedItem(selectedInfo.$tag);
                this.setSelectedItemCloseIconClickEvent({
                  $tag: selectedInfo.$tag,
                  $closeIcon: selectedInfo.$closeIcon,
                  value: dataItem.value,
                  text: dataItem.text
                });
              }
            });
            this.checkTagEmpty();
          },
          /**
           * 生成一个tag项
           * @param data 配置
           */
          createSelectedItem(data) {
            const $selectedItem = popsDOMUtils.createElement("div", {
              className: "el-select__selected-item el-select__choose_tag",
              innerHTML: (
                /*html*/
                `
						<span class="el-tag is-closable el-tag--info el-tag--default el-tag--light">
							<span class="el-tag__content">
								<span class="el-select__tags-text"></span>
							</span>
							<!-- 关闭tag的图标 -->
							<i class="el-icon el-tag__close">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
								</svg>
							</i>
						</span>
						`
              )
            });
            const $tagText = $selectedItem.querySelector(".el-select__tags-text");
            const $closeIcon = $selectedItem.querySelector(".el-icon.el-tag__close");
            if (data.isHTML) {
              $tagText.innerHTML = data.text;
            } else {
              $tagText.innerText = data.text;
            }
            return {
              $tag: $selectedItem,
              $tagText,
              $closeIcon
            };
          },
          /**
           * 添加选中项元素
           */
          addSelectedItem($ele) {
            this.setSectionIsNear();
            if (this.$el.$section.contains(this.$el.$selectedInputWrapper)) {
              let $prev = this.$el.$selectedInputWrapper.previousElementSibling;
              if ($prev) {
                popsDOMUtils.after($prev, $ele);
              } else {
                popsDOMUtils.before(this.$el.$selectedInputWrapper, $ele);
              }
            } else if (this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)) {
              let $prev = this.$el.$selectedPlaceHolderWrapper.previousElementSibling;
              if ($prev) {
                popsDOMUtils.after($prev, $ele);
              } else {
                popsDOMUtils.before(this.$el.$selectedPlaceHolderWrapper, $ele);
              }
            } else {
              this.$el.$section.appendChild($ele);
            }
            this.hideInputWrapper();
            this.hidePlaceHolderWrapper();
          },
          /** 更新tag信息 */
          updateSelectTagItem() {
            this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(($ele) => {
              $ele.remove();
            });
            this.updateTagElement();
          },
          /**
           * 选中的值改变的回调
           * @param currentSelectInfo 当前的选中信息
           */
          selectValueChangeCallBack(currentSelectInfo) {
            if (typeof formConfig.callback === "function") {
              formConfig.callback(currentSelectInfo || this.$data.selectInfo);
            }
          },
          /** 设置下拉列表的点击事件 */
          setSelectContainerClickEvent() {
            const that = this;
            popsDOMUtils.on(this.$el.$container, "click", (event) => {
              let selectedInfo = [];
              selectedInfo = selectedInfo.concat(that.$data.selectInfo);
              function setItemSelected($ele) {
                $ele.classList.add("select-item-is-selected");
              }
              function removeItemSelected($ele) {
                $ele.classList.remove("select-item-is-selected");
              }
              function addSelectedInfo($ele) {
                let info = getSelectedInfo($ele);
                let findValue = selectedInfo.find((item) => item.value === info.value);
                if (!findValue) {
                  selectedInfo.push({
                    value: info.value,
                    text: info.text,
                    isHTML: Boolean(info.isHTML),
                    disable: info.disable
                  });
                }
                that.selectValueChangeCallBack(selectedInfo);
              }
              function removeSelectedInfo($ele) {
                let info = getSelectedInfo($ele);
                let findIndex = selectedInfo.findIndex((item) => item.value === info.value);
                if (findIndex !== -1) {
                  selectedInfo.splice(findIndex, 1);
                }
                that.selectValueChangeCallBack(selectedInfo);
              }
              function isSelected($ele) {
                return $ele.classList.contains("select-item-is-selected");
              }
              function getSelectedInfo($ele) {
                return Reflect.get($ele, "data-info");
              }
              function getAllSelectedInfo() {
                return Array.from($selectContainer.querySelectorAll(".select-item")).map(($ele) => {
                  if (isSelected($ele)) {
                    return getSelectedInfo($ele);
                  }
                }).filter((item) => {
                  return item != null;
                });
              }
              function createSelectItemElement(dataInfo) {
                let $item = popsDOMUtils.createElement("li", {
                  className: "select-item",
                  innerHTML: (
                    /*html*/
                    `
									<span>${dataInfo.text}</span>
								`
                  )
                });
                Reflect.set($item, "data-info", dataInfo);
                return $item;
              }
              function setSelectElementClickEvent($ele) {
                popsDOMUtils.on($ele, "click", (event2) => {
                  popsDOMUtils.preventEvent(event2);
                  if (typeof formConfig.clickCallBack === "function") {
                    let clickResult = formConfig.clickCallBack(event2, getAllSelectedInfo());
                    if (typeof clickResult === "boolean" && !clickResult) {
                      return;
                    }
                  }
                  if (isSelected($ele)) {
                    removeItemSelected($ele);
                    removeSelectedInfo($ele);
                  } else {
                    setItemSelected($ele);
                    addSelectedInfo($ele);
                  }
                });
              }
              let { style, ...userConfirmDetails } = formConfig.selectConfirmDialogDetails || {};
              let confirmDetails = popsUtils.assign({
                title: {
                  text: "请勾选需要选择的选项",
                  position: "center"
                },
                content: {
                  text: (
                    /*html*/
                    `
									<ul class="select-container"></ul>
									`
                  ),
                  html: true
                },
                btn: {
                  ok: {
                    enable: false
                  },
                  close: {
                    enable: true,
                    callback(details, event2) {
                      that.$data.selectInfo = [...selectedInfo];
                      that.updateSelectTagItem();
                      details.close();
                    }
                  }
                },
                mask: {
                  enable: true,
                  clickCallBack(originalRun, config) {
                    originalRun();
                    that.$data.selectInfo = [...selectedInfo];
                    that.updateSelectTagItem();
                  },
                  clickEvent: {
                    toClose: true
                  }
                },
                drag: true,
                dragLimit: true,
                width: "300px",
                height: "300px",
                style: (
                  /*css*/
                  `
								.select-container{
									--el-font-size-base: 14px;
									--el-text-color-regular: #606266;
									--el-color-primary: #409eff;
									--el-fill-color-light: #f5f7fa;
								}
								.select-item{
									cursor: pointer;
									cursor: pointer;
									font-size: var(--el-font-size-base);
									padding: 0 32px 0 20px;
									position: relative;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									color: var(--el-text-color-regular);
									height: 34px;
									line-height: 34px;
									box-sizing: border-box;
								}
								.select-item:hover{
									background-color: var(--el-fill-color-light);
								}
								.select-item.select-item-is-selected{
									color: var(--el-color-primary);
									font-weight: 700;
								}
								.select-item.select-item-is-selected::after{
									content: "";
									position: absolute;
									top: 50%;
									right: 20px;
									border-top: none;
									border-right: none;
									background-repeat: no-repeat;
									background-position: center;
									background-color: var(--el-color-primary);
									mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
									mask-size: 100% 100%;
									-webkit-mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
									-webkit-mask-size: 100% 100%;
									transform: translateY(-50%);
									width: 12px;
									height: 12px;
								}
								${style || ""}
								`
                )
              }, userConfirmDetails);
              let $dialog = pops.alert(confirmDetails);
              let $selectContainer = $dialog.$shadowRoot.querySelector(".select-container");
              formConfig.data.forEach((item) => {
                let $select = createSelectItemElement(item);
                $selectContainer.appendChild($select);
                setSelectElementClickEvent($select);
                let findValue = selectedInfo.find((value) => value.value === item.value);
                if (findValue) {
                  setItemSelected($select);
                }
              });
            });
          },
          /** 设置关闭图标的点击事件 */
          setSelectedItemCloseIconClickEvent(data) {
            popsDOMUtils.on(data.$closeIcon, "click", (event) => {
              popsDOMUtils.preventEvent(event);
              if (typeof formConfig.closeIconClickCallBack === "function") {
                let result2 = formConfig.closeIconClickCallBack(event, {
                  $tag: data.$tag,
                  $closeIcon: data.$closeIcon,
                  value: data.value,
                  text: data.text
                });
                if (typeof result2 === "boolean" && !result2) {
                  return;
                }
              }
              this.removeSelectedItem(data.$tag);
              this.removeSelectedInfo({
                value: data.value,
                text: data.text
              });
            }, {
              capture: true
            });
          },
          /**
           * 检测tag是否为空，为空显示placeholder
           */
          checkTagEmpty() {
            if (!this.$el.$section.querySelectorAll(".el-select__choose_tag").length) {
              this.showPlaceHolderWrapper();
              this.removeSectionIsNear();
            }
          },
          /** 移除选中项元素 */
          removeSelectedItem($ele) {
            $ele.remove();
            this.checkTagEmpty();
          },
          /** 移除选中的信息 */
          removeSelectedInfo(data) {
            for (let index = 0; index < this.$data.selectInfo.length; index++) {
              const selectInfo = this.$data.selectInfo[index];
              if (selectInfo.value === data.value) {
                this.$data.selectInfo.splice(index, 1);
                break;
              }
            }
            this.selectValueChangeCallBack();
          },
          /** 显示输入框 */
          showInputWrapper() {
            popsDOMUtils.cssShow(this.$el.$selectedInputWrapper);
          },
          /** 隐藏输入框 */
          hideInputWrapper() {
            popsDOMUtils.cssHide(this.$el.$selectedInputWrapper, true);
          },
          /** 显示palceholder */
          showPlaceHolderWrapper() {
            popsDOMUtils.cssShow(this.$el.$selectedPlaceHolderWrapper);
          },
          /** 隐藏palceholder */
          hidePlaceHolderWrapper() {
            popsDOMUtils.cssHide(this.$el.$selectedPlaceHolderWrapper, true);
          },
          /** 设置隐藏section的前面的空白 */
          setSectionIsNear() {
            this.$el.$section.classList.add("is-near");
          },
          /** 取消设置隐藏section的前面的空白 */
          removeSectionIsNear() {
            this.$el.$section.classList.remove("is-near");
          }
        };
        PopsPanelSelectMultiple.init();
        Reflect.set(liElement, "data-select-multiple", PopsPanelSelectMultiple);
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * type ==> button
       * @param formConfig
       */
      createSectionContainerItem_button(formConfig) {
        let liElement = document.createElement("li");
        liElement["__formConfig__"] = formConfig;
        this.setElementClassName(liElement, formConfig.className);
        this.setElementAttributes(liElement, formConfig.attributes);
        this.setElementProps(liElement, formConfig.props);
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = /*html*/
          `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        liElement.innerHTML = /*html*/
        `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-panel-button">
				<button class="pops-panel-button_inner">
					<i class="pops-bottom-icon"></i>
					<span class="pops-panel-button-text"></span>
				</button>
			</div>
			`;
        const PopsPanelButton = {
          [Symbol.toStringTag]: "PopsPanelButton",
          $ele: {
            panelButton: liElement.querySelector(".pops-panel-button"),
            button: liElement.querySelector(".pops-panel-button .pops-panel-button_inner"),
            icon: liElement.querySelector(".pops-panel-button .pops-bottom-icon"),
            spanText: liElement.querySelector(".pops-panel-button .pops-panel-button-text")
          },
          $data: {},
          init() {
            this.$ele.panelButton.appendChild(this.$ele.button);
            this.initButton();
            this.setClickEvent();
          },
          initButton() {
            if (typeof formConfig.buttonIcon === "string" && formConfig.buttonIcon.trim() !== "") {
              if (formConfig.buttonIcon in pops.config.iconSVG) {
                this.setIconSVG(pops.config.iconSVG[formConfig.buttonIcon]);
              } else {
                this.setIconSVG(formConfig.buttonIcon);
              }
              this.showIcon();
            } else {
              this.hideIcon();
            }
            let buttonText = formConfig.buttonText;
            if (typeof formConfig.buttonText === "function") {
              buttonText = formConfig.buttonText();
            }
            this.setButtonType(formConfig.buttonType);
            if (formConfig.buttonIsRightIcon) {
              this.setIconRight();
            } else {
              this.setIconLeft();
            }
            if (formConfig.disable) {
              this.disable();
            }
            this.setButtonText(buttonText);
            this.setIconLoadingStatus(formConfig.buttonIconIsLoading);
          },
          disable() {
            this.$ele.button.setAttribute("disabled", "true");
          },
          notDisable() {
            this.$ele.button.removeAttribute("disabled");
          },
          /**
           * 隐藏icon图标
           */
          hideIcon() {
            this.$ele.panelButton.classList.add("pops-panel-button-no-icon");
          },
          /**
           * 显示icon图标
           */
          showIcon() {
            this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");
          },
          /**
           * 设置icon图标的svg
           */
          setIconSVG(svgHTML) {
            this.$ele.icon.innerHTML = svgHTML;
          },
          /**
           * 设置icon图标是否旋转
           * @param status
           */
          setIconLoadingStatus(status) {
            this.$ele.icon.setAttribute("is-loading", Boolean(status).toString());
          },
          /**
           * 设置属性上是否存在icon图标
           */
          setHasIcon(value) {
            this.$ele.button.setAttribute("data-icon", Boolean(value).toString());
          },
          /**
           * 设置按钮类型
           * @param typeValue
           */
          setButtonType(typeValue) {
            this.$ele.button.setAttribute("type", typeValue);
          },
          /**
           * 添加按钮的图标在右边
           */
          setIconRight() {
            this.$ele.button.classList.add("pops-panel-button-right-icon");
          },
          /**
           * （默认）添加按钮的图标在左边
           */
          setIconLeft() {
            this.$ele.button.classList.remove("pops-panel-button-right-icon");
          },
          /**
           * 设置按钮文本
           * @param text
           */
          setButtonText(text) {
            this.$ele.spanText.innerHTML = text;
          },
          setClickEvent() {
            popsDOMUtils.on(this.$ele.button, "click", void 0, (event) => {
              if (typeof formConfig.callback === "function") {
                formConfig.callback(event);
              }
            });
          }
        };
        PopsPanelButton.init();
        liElement["data-button"] = PopsPanelButton;
        return liElement;
      },
      /**
       * 获取深层容器的元素<li>
       * @param formConfig
       */
      createSectionContainerItem_deepMenu(formConfig) {
        let that = this;
        let $li = document.createElement("li");
        $li.classList.add("pops-panel-deepMenu-nav-item");
        $li["__formConfig__"] = formConfig;
        this.setElementClassName($li, formConfig.className);
        this.setElementAttributes($li, formConfig.attributes);
        this.setElementProps($li, formConfig.props);
        let leftDescriptionText = "";
        if (Boolean(formConfig.description)) {
          leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${formConfig.description}</p>`;
        }
        let arrowRightIcon = typeof formConfig.arrowRightIcon === "boolean" ? formConfig.arrowRightIcon : true;
        let arrowRightIconHTML = "";
        if (arrowRightIcon) {
          arrowRightIconHTML = `<i class="pops-panel-deepMenu-arrowRight-icon">${pops.config.iconSVG.arrowRight}</i>`;
        }
        let rightText = "";
        if (formConfig.rightText) {
          rightText = /*html*/
          `<p class="pops-panel-item-right-text">${formConfig.rightText}</p>`;
        }
        $li.innerHTML = /*html*/
        `
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${formConfig.text}</p>
				${leftDescriptionText}
			</div>
			<div class="pops-panel-deepMenu">
				${rightText}
				${arrowRightIconHTML}
			</div>
			`;
        const PopsPanelDeepMenu = {
          [Symbol.toStringTag]: "PopsPanelDeepMenu",
          $ele: {
            get parentSection() {
              return that.$el.$contentSectionContainer;
            }
          },
          init() {
            this.setLiClickEvent();
          },
          /**
           * 生成配置每一项的元素
           * @param $container
           * @param formItemConfig
           */
          initFormItem($container, formItemConfig) {
            let formConfig_forms = formItemConfig;
            if (formConfig_forms["type"] === "forms") {
              let childForms = formConfig_forms["forms"];
              let formContainerListElement = document.createElement("li");
              let formContainerULElement = document.createElement("ul");
              formContainerULElement.classList.add("pops-panel-forms-container-item-formlist");
              formContainerListElement.classList.add("pops-panel-forms-container-item");
              let formHeaderDivElement = popsDOMUtils.createElement("div", {
                className: "pops-panel-forms-container-item-header-text"
              });
              formHeaderDivElement.innerHTML = formConfig_forms["text"];
              if (formConfig_forms.isFold) {
                formHeaderDivElement.innerHTML = /*html*/
                `
								<p>${formConfig_forms.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
								
							`;
                popsDOMUtils.on(formHeaderDivElement, "click", (event) => {
                  if (formContainerListElement.hasAttribute("data-fold-enable")) {
                    formContainerListElement.removeAttribute("data-fold-enable");
                  } else {
                    formContainerListElement.setAttribute("data-fold-enable", "");
                  }
                });
                formHeaderDivElement.classList.add("pops-panel-forms-fold-container");
                formHeaderDivElement.classList.add("pops-user-select-none");
                formContainerListElement.setAttribute("data-fold-enable", "");
                formContainerListElement.classList.add("pops-panel-forms-fold");
                formContainerListElement.appendChild(formHeaderDivElement);
              } else {
                formContainerListElement.appendChild(formHeaderDivElement);
              }
              that.setElementClassName(formContainerListElement, formItemConfig.className);
              that.setElementAttributes(formContainerListElement, formItemConfig.attributes);
              that.setElementProps(formContainerListElement, formItemConfig.props);
              childForms.forEach((childFormConfig) => {
                that.uListContainerAddItem(childFormConfig, {
                  ulElement: formContainerULElement,
                  sectionContainerULElement: that.sectionContainerULElement,
                  formContainerListElement,
                  formHeaderDivElement
                });
              });
              formContainerListElement.appendChild(formContainerULElement);
              $container.appendChild(formContainerListElement);
              if (typeof formConfig_forms.afterAddToUListCallBack === "function") {
                formConfig_forms.afterAddToUListCallBack(formConfig, {
                  target: formContainerListElement,
                  ulElement: formContainerULElement,
                  sectionContainerULElement: that.sectionContainerULElement,
                  formContainerListElement,
                  formHeaderDivElement
                });
              }
            } else {
              that.uListContainerAddItem(formConfig, {
                ulElement: that.sectionContainerULElement
              });
            }
          },
          /**
           * 前往子菜单
           * @param event 点击事件
           * @param liElement 当前的<li>元素
           */
          gotoDeepMenu(event, liElement) {
            var _a2, _b;
            let currentSection = liElement.closest("section.pops-panel-container");
            if (currentSection) {
              popsDOMUtils.cssHide(currentSection, true);
            }
            let $deepMenuContainer = popsDOMUtils.createElement("section", {
              className: "pops-panel-container pops-panel-deepMenu-container"
            });
            let $deepMenuHeaderUL = popsDOMUtils.createElement("ul", {
              className: "pops-panel-deepMenu-container-header-ul"
            });
            let $deepMenuBodyUL = popsDOMUtils.createElement("ul");
            let headerTitleText = formConfig.headerTitle ?? formConfig.text;
            let $header = popsDOMUtils.createElement("div", {
              className: "pops-panel-deepMenu-container-header",
              innerHTML: `<p>${headerTitleText}</p>`
            });
            let $headerLeftArrow = popsDOMUtils.createElement("i", {
              className: "pops-panel-deepMenu-container-left-arrow-icon",
              innerHTML: pops.config.iconSVG.arrowLeft
            });
            popsDOMUtils.on($headerLeftArrow, "click", void 0, (event2) => {
              event2 == null ? void 0 : event2.preventDefault();
              event2 == null ? void 0 : event2.stopPropagation();
              let $prev = $deepMenuContainer.previousElementSibling;
              popsDOMUtils.cssShow($prev);
              $deepMenuContainer.remove();
            }, {
              once: true
            });
            (_a2 = $header.firstElementChild) == null ? void 0 : _a2.insertAdjacentElement("beforebegin", $headerLeftArrow);
            $deepMenuHeaderUL.appendChild($header);
            $deepMenuContainer.appendChild($deepMenuHeaderUL);
            $deepMenuContainer.appendChild($deepMenuBodyUL);
            if (formConfig.forms && Array.isArray(formConfig.forms)) {
              for (let index = 0; index < formConfig.forms.length; index++) {
                let formItemConfig = formConfig.forms[index];
                this.initFormItem($deepMenuBodyUL, formItemConfig);
              }
            }
            (_b = that.$el.$content) == null ? void 0 : _b.appendChild($deepMenuContainer);
            if (typeof formConfig.afterEnterDeepMenuCallBack === "function") {
              formConfig.afterEnterDeepMenuCallBack(formConfig, {
                sectionContainer: $deepMenuContainer,
                sectionContainerHeaderContainer: $deepMenuHeaderUL,
                sectionContainerHeader: $header,
                sectionBodyContainer: $deepMenuBodyUL
              });
            }
          },
          /** 设置项的点击事件 */
          setLiClickEvent() {
            popsDOMUtils.on($li, "click", void 0, async (event) => {
              if (typeof formConfig.clickCallBack === "function") {
                let result2 = await formConfig.clickCallBack(event, formConfig);
                if (result2) {
                  return;
                }
              }
              this.gotoDeepMenu(event, $li);
            });
          }
        };
        PopsPanelDeepMenu.init();
        $li["data-deepMenu"] = PopsPanelDeepMenu;
        return $li;
      },
      /**
       * 获取中间容器的元素<li>
       * type ===> own
       * @param formConfig
       */
      createSectionContainerItem_own(formConfig) {
        let liElement = document.createElement("li");
        liElement["__formConfig__"] = formConfig;
        if (formConfig.className) {
          liElement.className = formConfig.className;
        }
        liElement = formConfig.getLiElementCallBack(liElement);
        return liElement;
      },
      /**
       * 获取中间容器的元素<li>
       * @param formConfig
       */
      createSectionContainerItem(formConfig) {
        let formType = formConfig["type"];
        if (formType === "switch") {
          return this.createSectionContainerItem_switch(formConfig);
        } else if (formType === "slider") {
          return this.createSectionContainerItem_slider_new(formConfig);
        } else if (formType === "input") {
          return this.createSectionContainerItem_input(formConfig);
        } else if (formType === "textarea") {
          return this.createSectionContainerItem_textarea(formConfig);
        } else if (formType === "select") {
          return this.createSectionContainerItem_select(formConfig);
        } else if (formType === "select-multiple") {
          return this.createSectionContainerItem_select_multiple_new(formConfig);
        } else if (formType === "button") {
          return this.createSectionContainerItem_button(formConfig);
        } else if (formType === "deepMenu") {
          return this.createSectionContainerItem_deepMenu(formConfig);
        } else if (formType === "own") {
          return this.createSectionContainerItem_own(formConfig);
        } else {
          console.error("尚未实现的type类型", formConfig);
        }
      },
      /**
       * 生成配置项forms
       * 生成配置每一项的元素
       * @param formConfig
       */
      createSectionContainerItem_forms(formConfig) {
        let that = this;
        let formConfig_forms = formConfig;
        if (formConfig_forms["type"] === "forms") {
          let childForms = formConfig["forms"];
          let formContainerListElement = document.createElement("li");
          let formContainerULElement = document.createElement("ul");
          formContainerULElement.classList.add("pops-panel-forms-container-item-formlist");
          formContainerListElement.classList.add("pops-panel-forms-container-item");
          let formHeaderDivElement = popsDOMUtils.createElement("div", {
            className: "pops-panel-forms-container-item-header-text"
          });
          formHeaderDivElement.innerHTML = formConfig_forms["text"];
          if (formConfig_forms.isFold) {
            formHeaderDivElement.innerHTML = /*html*/
            `
						<p>${formConfig_forms.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
						
					`;
            popsDOMUtils.on(formHeaderDivElement, "click", (event) => {
              if (formContainerListElement.hasAttribute("data-fold-enable")) {
                formContainerListElement.removeAttribute("data-fold-enable");
              } else {
                formContainerListElement.setAttribute("data-fold-enable", "");
              }
            });
            formHeaderDivElement.classList.add("pops-panel-forms-fold-container");
            formHeaderDivElement.classList.add("pops-user-select-none");
            formContainerListElement.setAttribute("data-fold-enable", "");
            formContainerListElement.classList.add("pops-panel-forms-fold");
            formContainerListElement.appendChild(formHeaderDivElement);
          } else {
            formContainerListElement.appendChild(formHeaderDivElement);
          }
          that.setElementClassName(formContainerListElement, formConfig.className);
          that.setElementAttributes(formContainerListElement, formConfig.attributes);
          that.setElementProps(formContainerListElement, formConfig.props);
          childForms.forEach((childFormConfig) => {
            that.uListContainerAddItem(childFormConfig, {
              ulElement: formContainerULElement,
              sectionContainerULElement: that.sectionContainerULElement,
              formContainerListElement,
              formHeaderDivElement
            });
          });
          formContainerListElement.appendChild(formContainerULElement);
          that.sectionContainerULElement.appendChild(formContainerListElement);
          if (typeof formConfig_forms.afterAddToUListCallBack === "function") {
            formConfig_forms.afterAddToUListCallBack(formConfig_forms, {
              target: formContainerListElement,
              ulElement: formContainerULElement,
              sectionContainerULElement: that.sectionContainerULElement,
              formContainerListElement,
              formHeaderDivElement
            });
          }
        } else {
          that.uListContainerAddItem(formConfig, {
            ulElement: that.sectionContainerULElement
          });
        }
      },
      /**
       *
       * @param formConfig
       * @param containerOptions
       */
      uListContainerAddItem(formConfig, containerOptions) {
        let itemLiElement = this.createSectionContainerItem(formConfig);
        if (itemLiElement) {
          containerOptions["ulElement"].appendChild(itemLiElement);
        }
        if (typeof formConfig.afterAddToUListCallBack === "function") {
          formConfig.afterAddToUListCallBack(formConfig, {
            ...containerOptions,
            target: itemLiElement
          });
        }
      },
      /**
       * 为左侧容器元素添加点击事件
       * @param asideLiElement 左侧的容器<li>元素
       * @param asideConfig 配置
       */
      setAsideItemClickEvent(asideLiElement, asideConfig) {
        const that = this;
        popsDOMUtils.on(asideLiElement, "click", void 0, (event) => {
          this.clearContainer();
          popsDOMUtils.cssShow(that.$el.$contentSectionContainer);
          this.clearAsideItemIsVisited();
          this.setAsideItemIsVisited(asideLiElement);
          let headerTitleText = asideConfig.headerTitle ?? asideConfig.title;
          if (typeof headerTitleText === "string" && headerTitleText.trim() !== "") {
            let containerHeaderTitleLIElement = document.createElement("li");
            containerHeaderTitleLIElement["__asideConfig__"] = asideConfig;
            containerHeaderTitleLIElement.innerHTML = headerTitleText;
            this.sectionContainerHeaderULElement.appendChild(containerHeaderTitleLIElement);
          }
          let __forms__ = asideLiElement["__forms__"];
          __forms__.forEach((formConfig) => {
            this.createSectionContainerItem_forms(formConfig);
          });
          if (typeof asideConfig.callback === "function") {
            asideConfig.callback(event, this.sectionContainerHeaderULElement, this.sectionContainerULElement);
          }
        });
      }
    };
  };
  let PopsPanel$1 = class PopsPanel2 {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "panel";
      let config = PopsPanelConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      if (details && Array.isArray(details.content)) {
        config.content = details.content;
      }
      config = PopsHandler.handleOnly(PopsType, config);
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.ninePalaceGridPosition,
        pops.config.cssText.scrollbar,
        pops.config.cssText.button,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.panelCSS
      ]);
      let zIndex = PopsHandler.handleZIndex(config.zIndex);
      let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);
      let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
      let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(PopsType, config);
      let animHTML = PopsElementHandler.getAnimHTML(
        guid,
        PopsType,
        config,
        /*html*/
        `
			<div 
				class="pops-${PopsType}-title"
				style="text-align: ${config.title.position};
				${headerStyle}">
				${config.title.html ? config.title.text : `<p pops style="${headerPStyle}">${config.title.text}</p>`}
				${headerBtnHTML}
			</div>
			<div class="pops-${PopsType}-content">
				<aside class="pops-${PopsType}-aside">
					<ul></ul>
				</aside>
				<section class="pops-${PopsType}-container">
					<ul class="pops-panel-container-header-ul"></ul>
					<ul></ul>
				</section>
			</div>`,
        "",
        zIndex
      );
      let $anim = PopsElementHandler.parseElement(animHTML);
      let { popsElement: $pops, headerCloseBtnElement: $headerCloseBtn, titleElement: $title, contentElement: $content, contentAsideElement: $contentAside, contentSectionContainerElement: $contentSectionContainer } = PopsHandler.handleQueryElement($anim, PopsType);
      if (config.isMobile || pops.isPhone()) {
        popsDOMUtils.addClassName($pops, config.mobileClassName);
      }
      let $mask = null;
      let isCreatedElementList = [$anim];
      if (config.mask.enable) {
        let { maskElement } = PopsHandler.handleMask({
          type: PopsType,
          guid,
          config,
          animElement: $anim,
          maskHTML
        });
        $mask = maskElement;
        isCreatedElementList.push($mask);
      }
      let eventDetails = PopsHandler.handleEventDetails(guid, $shadowContainer, $shadowRoot, PopsType, $anim, $pops, $mask, config);
      PopsHandler.handleClickEvent("close", $headerCloseBtn, eventDetails, config.btn.close.callback);
      popsDOMUtils.append($shadowRoot, isCreatedElementList);
      if (typeof config.beforeAppendToPageCallBack === "function") {
        config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
      }
      popsDOMUtils.appendBody($shadowContainer);
      if ($mask != null) {
        $anim.after($mask);
      }
      let panelHandleContentDetails = PanelHandleContentDetails();
      panelHandleContentDetails.init({
        config,
        $el: {
          $content,
          $contentAside,
          $contentSectionContainer
        }
      });
      PopsHandler.handlePush(PopsType, {
        guid,
        animElement: $anim,
        popsElement: $pops,
        maskElement: $mask,
        $shadowContainer,
        $shadowRoot
      });
      if (config.drag) {
        PopsInstanceUtils.drag($pops, {
          dragElement: $title,
          limit: config.dragLimit,
          extraDistance: config.dragExtraDistance,
          moveCallBack: config.dragMoveCallBack,
          endCallBack: config.dragEndCallBack
        });
      }
      return PopsHandler.handleResultDetails(eventDetails);
    }
  };
  const rightClickMenuConfig = () => {
    return {
      target: document.documentElement,
      targetSelector: null,
      data: [
        {
          icon: pops.config.iconSVG.search,
          iconIsLoading: false,
          text: "搜索",
          item: [],
          callback(clickEvent, contextMenuEvent, liElement) {
            console.log("点击：" + this.text, [
              clickEvent,
              contextMenuEvent,
              liElement
            ]);
          }
        },
        {
          icon: pops.config.iconSVG.documentCopy,
          iconIsLoading: false,
          text: "复制",
          item: [],
          callback(clickEvent, contextMenuEvent, liElement) {
            console.log("点击：" + this.text, [
              clickEvent,
              contextMenuEvent,
              liElement
            ]);
          }
        },
        {
          icon: pops.config.iconSVG.delete,
          text: "删除",
          iconIsLoading: false,
          item: [],
          callback(clickEvent, contextMenuEvent, liElement) {
            console.log("点击：" + this.text, [
              clickEvent,
              contextMenuEvent,
              liElement
            ]);
          }
        },
        {
          icon: pops.config.iconSVG.loading,
          iconIsLoading: true,
          text: "加载",
          item: [],
          callback(clickEvent, contextMenuEvent, liElement) {
            console.log("点击：" + this.text, [
              clickEvent,
              contextMenuEvent,
              liElement
            ]);
            return false;
          }
        },
        {
          icon: pops.config.iconSVG.elemePlus,
          iconIsLoading: true,
          text: "饿了么",
          callback(clickEvent, contextMenuEvent, liElement) {
            console.log("点击：" + this.text, [
              clickEvent,
              contextMenuEvent,
              liElement
            ]);
            return false;
          },
          item: [
            {
              icon: "",
              iconIsLoading: false,
              text: "处理文件",
              item: [],
              callback(clickEvent, contextMenuEvent, liElement) {
                console.log("点击：" + this.text, [
                  clickEvent,
                  contextMenuEvent,
                  liElement
                ]);
              }
            },
            {
              icon: "",
              iconIsLoading: false,
              text: "其它处理",
              callback(clickEvent, contextMenuEvent, liElement) {
                console.log("点击：" + this.text, [
                  clickEvent,
                  contextMenuEvent,
                  liElement
                ]);
              },
              item: [
                {
                  icon: pops.config.iconSVG.view,
                  iconIsLoading: false,
                  text: "查看",
                  item: [],
                  callback(clickEvent, contextMenuEvent, liElement) {
                    console.log("点击：" + this.text, [
                      clickEvent,
                      contextMenuEvent,
                      liElement
                    ]);
                  }
                }
              ]
            }
          ]
        }
      ],
      useShadowRoot: true,
      className: "",
      isAnimation: true,
      only: false,
      zIndex: 1e4,
      preventDefault: true,
      style: null,
      beforeAppendToPageCallBack() {
      }
    };
  };
  class PopsRightClickMenu {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "rightClickMenu";
      let config = rightClickMenuConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      config = PopsHandler.handleOnly(PopsType, config);
      if (config.target == null) {
        throw "config.target 不能为空";
      }
      if (details.data) {
        config.data = details.data;
      }
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.rightClickMenu
      ]);
      if (config.style != null) {
        let cssNode = document.createElement("style");
        cssNode.setAttribute("type", "text/css");
        cssNode.innerHTML = config.style;
        $shadowRoot.appendChild(cssNode);
      }
      const PopsContextMenu = {
        /**
         * 根元素
         */
        rootElement: null,
        /**
         * 全局点击检测
         * @param event
         */
        windowCheckClickEvent(event) {
          if (!PopsContextMenu.rootElement) {
            return;
          }
          let $click = event.target;
          if ($click.closest(`.pops-${PopsType}`)) {
            return;
          }
          if ($click.className && $click.className === "pops-shadow-container" && $click.shadowRoot != null) {
            return;
          }
          PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
        },
        /**
         * target为shadowRoot或shadowRoot内的全局点击检测
         * @param event
         */
        shadowRootCheckClickEvent(event) {
          if (!PopsContextMenu.rootElement) {
            return;
          }
          let $click = event.target;
          if ($click.closest(`.pops-${PopsType}`)) {
            return;
          }
          PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
        },
        /**
         * 添加全局点击检测事件
         */
        addWindowCheckClickListener() {
          popsDOMUtils.on(globalThis, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
            capture: true
          });
          if (config.target instanceof Node) {
            const $shadowRoot2 = config.target.getRootNode();
            if ($shadowRoot2 instanceof ShadowRoot) {
              popsDOMUtils.on($shadowRoot2, "click touchstart", void 0, PopsContextMenu.shadowRootCheckClickEvent, {
                capture: true
              });
            }
          }
        },
        /**
         * 移除全局点击检测事件
         */
        removeWindowCheckClickListener() {
          popsDOMUtils.off(globalThis, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
            capture: true
          });
          if (config.target instanceof Node) {
            const $shadowRoot2 = config.target.getRootNode();
            if ($shadowRoot2 instanceof ShadowRoot) {
              popsDOMUtils.off($shadowRoot2, "click touchstart", void 0, PopsContextMenu.windowCheckClickEvent, {
                capture: true
              });
            }
          }
        },
        /**
         * contextmenu事件
         * @param event
         */
        contextMenuEvent(event) {
          if (config.preventDefault) {
            popsDOMUtils.preventEvent(event);
          }
          PopsHandler.handleOnly(PopsType, config);
          if (PopsContextMenu.rootElement) {
            PopsContextMenu.closeAllMenu(PopsContextMenu.rootElement);
          }
          let rootElement = PopsContextMenu.showMenu(event, config.data);
          PopsContextMenu.rootElement = rootElement;
          if (config.only) {
            PopsHandler.handlePush(PopsType, {
              $shadowRoot,
              $shadowContainer,
              guid,
              animElement: rootElement,
              popsElement: rootElement,
              beforeRemoveCallBack(layerCommonConfig) {
                PopsContextMenu.closeAllMenu(layerCommonConfig.popsElement);
              }
            });
          }
        },
        /**
         * 添加contextmenu事件
         * @param target 目标
         * @param selector 子元素选择器
         */
        addContextMenuEvent(target, selector) {
          popsDOMUtils.on(target, "contextmenu", selector, PopsContextMenu.contextMenuEvent);
        },
        /**
         * 移除contextmenu事件
         * @param target 目标
         * @param selector 子元素选择器
         */
        removeContextMenuEvent(target, selector) {
          popsDOMUtils.off(target, "contextmenu", selector, PopsContextMenu.contextMenuEvent);
        },
        /**
         * 自动判断是否存在动画，存在动画就执行关闭动画并删除
         * @param element
         */
        animationCloseMenu(element) {
          function transitionEndEvent(event) {
            popsDOMUtils.off(element, popsDOMUtils.getTransitionEndNameList(), void 0, transitionEndEvent, {
              capture: true
            });
            element.remove();
          }
          if (element.classList.contains(`pops-${PopsType}-anim-show`)) {
            popsDOMUtils.on(element, popsDOMUtils.getTransitionEndNameList(), void 0, transitionEndEvent, {
              capture: true
            });
            element.classList.remove(`pops-${PopsType}-anim-show`);
          } else {
            element.remove();
          }
        },
        /**
         * 关闭所有菜单
         * @param rootElement
         */
        closeAllMenu(rootElement) {
          var _a2, _b;
          if (rootElement == null) {
            return;
          }
          if ((_a2 = rootElement == null ? void 0 : rootElement["__menuData__"]) == null ? void 0 : _a2.root) {
            rootElement = (_b = rootElement == null ? void 0 : rootElement["__menuData__"]) == null ? void 0 : _b.root;
          }
          let childMenuList = rootElement["__menuData__"].child;
          childMenuList.forEach((childMenuElement) => {
            this.animationCloseMenu(childMenuElement);
          });
          this.animationCloseMenu(rootElement);
          PopsContextMenu.rootElement = null;
        },
        /**
         * 获取菜单容器
         * @param isChildren 是否是rightClickMenu的某一项的子菜单
         */
        getMenuContainerElement(isChildren) {
          let $menu = popsDOMUtils.createElement("div", {
            className: `pops-${PopsType}`,
            innerHTML: (
              /*html*/
              `
					<ul></ul>
					`
            )
          });
          let zIndex = this.getMenuZIndex();
          if (zIndex > 1e4) {
            $menu.style.zIndex = zIndex.toString();
          }
          if (isChildren) {
            $menu.setAttribute("is-children", "true");
          }
          if (config.isAnimation) {
            popsDOMUtils.addClassName($menu, `pops-${PopsType}-anim-grid`);
          }
          return $menu;
        },
        /**
         * 动态获取配的z-index
         */
        getMenuZIndex() {
          return PopsHandler.handleZIndex(config.zIndex);
        },
        /**
         * 获取left、top偏移
         * @param menuElement 菜单元素
         * @param x
         * @param y
         */
        getOffset(menuElement, x2, y2) {
          let menuElementWidth = popsDOMUtils.width(menuElement);
          let menuElementHeight = popsDOMUtils.height(menuElement);
          let maxLeftOffset = popsDOMUtils.width(globalThis) - menuElementWidth - 1;
          let maxTopOffset = popsDOMUtils.height(globalThis) - menuElementHeight - 8;
          let currentLeftOffset = x2;
          let currentTopOffset = y2;
          currentLeftOffset = currentLeftOffset < 0 ? 0 : currentLeftOffset;
          currentLeftOffset = currentLeftOffset < maxLeftOffset ? currentLeftOffset : maxLeftOffset;
          currentTopOffset = currentTopOffset < 0 ? 0 : currentTopOffset;
          currentTopOffset = currentTopOffset < maxTopOffset ? currentTopOffset : maxTopOffset;
          return {
            left: currentLeftOffset,
            top: currentTopOffset
          };
        },
        /**
         * 显示菜单
         * @param menuEvent 触发的事件
         * @param _config_
         */
        showMenu(menuEvent, _config_) {
          let menuElement = this.getMenuContainerElement(false);
          Reflect.set(menuElement, "__menuData__", {
            child: []
          });
          PopsContextMenu.addMenuLiELement(menuEvent, menuElement, menuElement, _config_);
          popsDOMUtils.css(menuElement, {
            display: "none"
          });
          popsDOMUtils.append($shadowRoot, menuElement);
          if (!document.contains($shadowContainer)) {
            if (typeof config.beforeAppendToPageCallBack === "function") {
              config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
          }
          let { left: menuLeftOffset, top: menuTopOffset } = this.getOffset(menuElement, menuEvent.clientX, menuEvent.clientY);
          popsDOMUtils.css(menuElement, {
            left: menuLeftOffset,
            top: menuTopOffset,
            display: ""
          });
          if (config.isAnimation) {
            popsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-show`);
          }
          return menuElement;
        },
        /**
         * 显示子菜单
         * @param menuEvent 事件
         * @param posInfo 位置信息
         * @param  _config_
         * @param rootElement 根菜单元素
         * @param targetLiElement 父li项元素
         */
        showClildMenu(menuEvent, posInfo, _config_, rootElement, targetLiElement) {
          let menuElement = this.getMenuContainerElement(true);
          Reflect.set(menuElement, "__menuData__", {
            parent: targetLiElement,
            root: rootElement
          });
          let rootElementMenuData = Reflect.get(rootElement, "__menuData__");
          rootElementMenuData.child.push(menuElement);
          PopsContextMenu.addMenuLiELement(menuEvent, rootElement, menuElement, _config_);
          popsDOMUtils.css(menuElement, {
            display: "none"
          });
          popsDOMUtils.append($shadowRoot, menuElement);
          let { left: menuLeftOffset, top: menuTopOffset } = this.getOffset(menuElement, posInfo.clientX, posInfo.clientY);
          popsDOMUtils.css(menuElement, {
            left: menuLeftOffset,
            top: menuTopOffset,
            display: ""
          });
          if (config.isAnimation) {
            popsDOMUtils.addClassName(menuElement, `pops-${PopsType}-anim-show`);
          }
          return menuElement;
        },
        /**
         * 获取菜单项的元素
         * @param menuEvent 事件
         * @param rootElement 根元素
         * @param menuElement 菜单元素
         * @param _config_ 配置
         */
        addMenuLiELement(menuEvent, rootElement, menuElement, _config_) {
          let menuEventTarget = menuEvent.target;
          let menuULElement = menuElement.querySelector("ul");
          _config_.forEach((item) => {
            let menuLiElement = popsUtils.parseTextToDOM(`<li></li>`);
            if (typeof item.icon === "string" && item.icon.trim() !== "") {
              let iconSVGHTML = pops.config.iconSVG[item.icon] ?? item.icon;
              let iconElement = popsUtils.parseTextToDOM(`<i class="pops-${PopsType}-icon" is-loading="${item.iconIsLoading}">${iconSVGHTML}</i>`);
              menuLiElement.appendChild(iconElement);
            }
            menuLiElement.insertAdjacentHTML("beforeend", `<span>${item.text}</span>`);
            if (item.item && Array.isArray(item.item)) {
              popsDOMUtils.addClassName(menuLiElement, `pops-${PopsType}-item`);
            }
            function liElementHoverEvent() {
              Array.from(menuULElement.children).forEach((liElement) => {
                popsDOMUtils.removeClassName(liElement, `pops-${PopsType}-is-visited`);
                if (!liElement.__menuData__) {
                  return;
                }
                function removeElement(element) {
                  element.querySelectorAll("ul li").forEach((ele) => {
                    var _a2;
                    if ((_a2 = ele == null ? void 0 : ele.__menuData__) == null ? void 0 : _a2.child) {
                      removeElement(ele.__menuData__.child);
                    }
                  });
                  element.remove();
                }
                removeElement(liElement.__menuData__.child);
              });
              for (let index = 0; index < rootElement.__menuData__.child.length; index++) {
                let element = rootElement.__menuData__.child[index];
                if (!$shadowRoot.contains(element)) {
                  rootElement.__menuData__.child.splice(index, 1);
                  index--;
                }
              }
              popsDOMUtils.addClassName(menuLiElement, `pops-${PopsType}-is-visited`);
              if (!item.item) {
                return;
              }
              let rect = menuLiElement.getBoundingClientRect();
              let childMenu = PopsContextMenu.showClildMenu(menuEvent, {
                clientX: rect.left + popsDOMUtils.outerWidth(menuLiElement),
                clientY: rect.top
              }, item.item, rootElement, menuLiElement);
              menuLiElement.__menuData__ = {
                child: childMenu
              };
            }
            async function liElementClickEvent(clickEvent) {
              if (typeof item.callback === "function") {
                OriginPrototype.Object.defineProperty(menuEvent, "target", {
                  get() {
                    return menuEventTarget;
                  }
                });
                let callbackResult = await item.callback(clickEvent, menuEvent, menuLiElement);
                if (typeof callbackResult === "boolean" && callbackResult == false) {
                  return;
                }
              }
              Array.from(menuULElement.children).forEach((liEle) => {
                popsDOMUtils.off(liEle, "mouseenter touchstart");
              });
              PopsContextMenu.closeAllMenu(rootElement);
            }
            popsDOMUtils.on(menuLiElement, "mouseenter touchstart", void 0, liElementHoverEvent);
            popsDOMUtils.on(menuLiElement, "click", void 0, liElementClickEvent);
            menuULElement.appendChild(menuLiElement);
          });
        }
      };
      PopsContextMenu.addContextMenuEvent(config.target, config.targetSelector);
      PopsContextMenu.addWindowCheckClickListener();
      return {
        guid,
        config,
        removeWindowCheckClickListener: PopsContextMenu.removeWindowCheckClickListener,
        addWindowCheckClickListener: PopsContextMenu.addWindowCheckClickListener,
        removeContextMenuEvent: PopsContextMenu.removeContextMenuEvent,
        addContextMenuEvent: PopsContextMenu.addContextMenuEvent
      };
    }
  }
  const searchSuggestionConfig = () => {
    return {
      // @ts-ignore
      target: null,
      // @ts-ignore
      inputTarget: null,
      selfDocument: document,
      data: [
        {
          value: "数据1",
          text: "数据1-html"
        },
        {
          value: "数据2",
          text: "数据2-html"
        }
      ],
      deleteIcon: {
        enable: true,
        callback(event, liElement, data) {
          console.log("删除当前项", [event, liElement, data]);
          liElement.remove();
        }
      },
      useShadowRoot: true,
      className: "",
      isAbsolute: true,
      isAnimation: true,
      width: "250px",
      maxHeight: "300px",
      followTargetWidth: true,
      topDistance: 0,
      position: "auto",
      positionTopToReverse: true,
      zIndex: 1e4,
      searchingTip: "正在搜索中...",
      toSearhNotResultHTML: '<li data-none="true">暂无其它数据</li>',
      toHideWithNotResult: false,
      followPosition: "target",
      getItemHTML(item) {
        return item.text ?? item;
      },
      async getData(value) {
        console.log("当前输入框的值是：", value);
        return [];
      },
      itemClickCallBack(event, liElement, data) {
        console.log("item项的点击回调", [event, liElement, data]);
        this.inputTarget.value = data.value;
      },
      selectCallBack(event, liElement, data) {
        console.log("item项的选中回调", [event, liElement, data]);
      },
      style: ""
    };
  };
  class PopsSearchSuggestion {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "searchSuggestion";
      let config = searchSuggestionConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      if (config.target == null) {
        throw new TypeError("config.target 不能为空");
      }
      if (config.inputTarget == null) {
        config.inputTarget = config.target;
      }
      if (details.data) {
        config.data = details.data;
      }
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.anim,
        pops.config.cssText.common
      ]);
      if (config.style != null) {
        let cssNode = document.createElement("style");
        cssNode.setAttribute("type", "text/css");
        cssNode.innerHTML = config.style;
        $shadowRoot.appendChild(cssNode);
      }
      const SearchSuggestion = {
        /**
         * 当前的环境，可以是document，可以是shadowroot，默认是document
         */
        selfDocument: config.selfDocument,
        $el: {
          /** 根元素 */
          root: null,
          /** ul元素 */
          $hintULContainer: null,
          /** 动态更新CSS */
          $dynamicCSS: null
        },
        $data: {
          /** 是否结果为空 */
          isEmpty: true
        },
        /**
         * 初始化
         */
        init(parentElement = document.body || document.documentElement) {
          this.initEl();
          SearchSuggestion.update(typeof config.data === "function" ? config.data() : config.data);
          SearchSuggestion.updateDynamicCSS();
          SearchSuggestion.changeHintULElementWidth();
          SearchSuggestion.changeHintULElementPosition();
          SearchSuggestion.hide();
          if (config.isAnimation) {
            SearchSuggestion.$el.root.classList.add(`pops-${PopsType}-animation`);
          }
          $shadowRoot.appendChild(SearchSuggestion.$el.root);
          parentElement.appendChild($shadowContainer);
        },
        /** 初始化元素变量 */
        initEl() {
          this.$el.root = SearchSuggestion.getSearchSelectElement();
          this.$el.$dynamicCSS = this.$el.root.querySelector("style[data-dynamic]");
          this.$el.$hintULContainer = SearchSuggestion.$el.root.querySelector("ul");
        },
        /**
         * 获取显示出搜索建议框的html
         */
        getSearchSelectElement() {
          let element = popsDOMUtils.createElement("div", {
            className: `pops pops-${PopsType}-search-suggestion`,
            innerHTML: (
              /*html*/
              `
						<style data-dynamic="true">
							${this.getDynamicCSS()}
						</style>
						<ul class="pops-${PopsType}-search-suggestion-hint">
							${config.toSearhNotResultHTML}
						</ul>
         				 `
            )
          }, {
            "data-guid": guid,
            "type-value": PopsType
          });
          if (config.className !== "" && config.className != null) {
            popsDOMUtils.addClassName(element, config.className);
          }
          return element;
        },
        /** 动态获取CSS */
        getDynamicCSS() {
          return (
            /*css*/
            `
				.pops-${PopsType}-animation{
					-moz-animation: searchSelectFalIn 0.5s 1 linear;
					-webkit-animation: searchSelectFalIn 0.5s 1 linear;
					-o-animation: searchSelectFalIn 0.5s 1 linear;
					-ms-animation: searchSelectFalIn 0.5s 1 linear;
				}
				.pops-${PopsType}-search-suggestion{
					border: initial;
					overflow: initial;
				}
				ul.pops-${PopsType}-search-suggestion-hint{
					position: ${config.isAbsolute ? "absolute" : "fixed"};
					z-index: ${PopsHandler.handleZIndex(config.zIndex)};
					width: 0;
					left: 0;
					max-height: ${config.maxHeight};
					overflow-x: hidden;
					overflow-y: auto;
					padding: 5px 0;
					background-color: #fff;
					box-sizing: border-box;
					border-radius: 4px;
					box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
				}
				/* 建议框在上面时 */
				ul.pops-${PopsType}-search-suggestion-hint[data-top-reverse]{
					display: flex;
					flex-direction: column-reverse;
				}
				ul.pops-${PopsType}-search-suggestion-hint[data-top-reverse] li{
					flex-shrink: 0;
				}
				ul.pops-${PopsType}-search-suggestion-hint li{
					padding: 7px;
					margin: 0;
					clear: both;
					color: #515a6e;
					font-size: 14px;
					list-style: none;
					cursor: pointer;
					transition: background .2s ease-in-out;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
				}
				ul.pops-${PopsType}-search-suggestion-hint li[data-none]{
					text-align: center;
					font-size: 12px;
					color: #8e8e8e;
				}
				ul.pops-${PopsType}-search-suggestion-hint li:hover{
					background-color: rgba(0, 0, 0, .1);
				}
				`
          );
        },
        /**
         * 获取显示出搜索建议框的每一项的html
         * @param data 当前项的值
         * @param index 当前项的下标
         */
        getSearchItemLiElement(data, index) {
          return popsDOMUtils.createElement("li", {
            className: `pops-${PopsType}-search-suggestion-hint-item pops-flex-items-center pops-flex-y-center`,
            "data-index": index,
            "data-value": SearchSuggestion.getItemDataValue(data),
            innerHTML: `
          			${config.getItemHTML(data)}
          			${config.deleteIcon.enable ? SearchSuggestion.getDeleteIconHTML() : ""}
          			`
          });
        },
        /**
         * 获取data-value值
         * @param data
         */
        getItemDataValue(data) {
          return data;
        },
        /**
         * 设置搜索建议框每一项的点击事件
         * @param liElement
         */
        setSearchItemClickEvent(liElement) {
          popsDOMUtils.on(liElement, "click", void 0, (event) => {
            popsDOMUtils.preventEvent(event);
            let $click = event.target;
            if ($click.closest(`.pops-${PopsType}-delete-icon`)) {
              if (typeof config.deleteIcon.callback === "function") {
                config.deleteIcon.callback(event, liElement, liElement["data-value"]);
              }
              if (!this.$el.$hintULContainer.children.length) {
                this.clear();
              }
            } else {
              config.itemClickCallBack(event, liElement, liElement["data-value"]);
            }
          }, {
            capture: true
          });
        },
        /**
         * 设置搜索建议框每一项的选中事件
         * @param liElement
         */
        setSearchItemSelectEvent(liElement) {
        },
        /**
         * 监听输入框内容改变
         */
        setInputChangeEvent(option = {
          capture: true
        }) {
          if (!(config.inputTarget instanceof HTMLInputElement || config.inputTarget instanceof HTMLTextAreaElement)) {
            return;
          }
          config.inputTarget.setAttribute("autocomplete", "off");
          popsDOMUtils.on(config.inputTarget, "input", void 0, async (event) => {
            let getListResult = await config.getData(event.target.value);
            SearchSuggestion.update(getListResult);
          }, option);
        },
        /**
         * 移除输入框内容改变的监听
         */
        removeInputChangeEvent(option = {
          capture: true
        }) {
          popsDOMUtils.off(config.inputTarget, "input", void 0, void 0, option);
        },
        /**
         * 显示搜索建议框的事件
         */
        showEvent() {
          SearchSuggestion.updateDynamicCSS();
          SearchSuggestion.changeHintULElementWidth();
          SearchSuggestion.changeHintULElementPosition();
          if (config.toHideWithNotResult) {
            if (SearchSuggestion.$data.isEmpty) {
              SearchSuggestion.hide();
            } else {
              SearchSuggestion.show();
            }
          } else {
            SearchSuggestion.show();
          }
        },
        /**
         * 设置显示搜索建议框的事件
         */
        setShowEvent(option = {
          capture: true
        }) {
          if (config.followPosition === "target") {
            popsDOMUtils.on([config.target], ["focus", "click"], void 0, SearchSuggestion.showEvent, option);
          } else if (config.followPosition === "input") {
            popsDOMUtils.on([config.inputTarget], ["focus", "click"], void 0, SearchSuggestion.showEvent, option);
          } else if (config.followPosition === "inputCursor") {
            popsDOMUtils.on([config.inputTarget], ["focus", "click", "input"], void 0, SearchSuggestion.showEvent, option);
          } else {
            throw new TypeError("未知followPosition：" + config.followPosition);
          }
        },
        /**
         * 移除显示搜索建议框的事件
         */
        removeShowEvent(option = {
          capture: true
        }) {
          popsDOMUtils.off([config.target, config.inputTarget], ["focus", "click"], void 0, SearchSuggestion.showEvent, option);
          popsDOMUtils.off([config.inputTarget], ["input"], void 0, SearchSuggestion.showEvent, option);
        },
        /**
         * 隐藏搜索建议框的事件
         * @param event
         */
        hideEvent(event) {
          if (event.target instanceof Node) {
            if ($shadowContainer.contains(event.target)) {
              return;
            }
            if (config.target.contains(event.target)) {
              return;
            }
            if (config.inputTarget.contains(event.target)) {
              return;
            }
            SearchSuggestion.hide();
          }
        },
        /**
         * 设置隐藏搜索建议框的事件
         */
        setHideEvent(option = {
          capture: true
        }) {
          if (Array.isArray(SearchSuggestion.selfDocument)) {
            SearchSuggestion.selfDocument.forEach(($checkParent) => {
              popsDOMUtils.on($checkParent, ["click", "touchstart"], void 0, SearchSuggestion.hideEvent, option);
            });
          } else {
            popsDOMUtils.on(SearchSuggestion.selfDocument, ["click", "touchstart"], void 0, SearchSuggestion.hideEvent, option);
          }
        },
        /**
         * 移除隐藏搜索建议框的事件
         */
        removeHideEvent(option = {
          capture: true
        }) {
          if (Array.isArray(SearchSuggestion.selfDocument)) {
            SearchSuggestion.selfDocument.forEach(($checkParent) => {
              popsDOMUtils.off($checkParent, ["click", "touchstart"], void 0, SearchSuggestion.hideEvent, option);
            });
          } else {
            popsDOMUtils.off(SearchSuggestion.selfDocument, ["click", "touchstart"], void 0, SearchSuggestion.hideEvent, option);
          }
        },
        /**
         * 设置所有监听
         */
        setAllEvent(option = {
          capture: true
        }) {
          SearchSuggestion.setInputChangeEvent(option);
          SearchSuggestion.setHideEvent(option);
          SearchSuggestion.setShowEvent(option);
        },
        /**
         * 移除所有监听
         */
        removeAllEvent(option = {
          capture: true
        }) {
          SearchSuggestion.removeInputChangeEvent(option);
          SearchSuggestion.removeHideEvent(option);
          SearchSuggestion.removeShowEvent(option);
        },
        /**
         * 获取删除按钮的html
         */
        getDeleteIconHTML(size = 16, fill = "#bababa") {
          return (
            /*html*/
            `
				<svg class="pops-${PopsType}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="${fill}">
					<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
					<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
				</svg>
        	`
          );
        },
        /**
         * 设置当前正在搜索中的提示
         */
        setPromptsInSearch() {
          let isSearchingElement = popsDOMUtils.createElement("li", {
            className: `pops-${PopsType}-search-suggestion-hint-searching-item`,
            innerHTML: config.searchingTip
          });
          SearchSuggestion.$el.$hintULContainer.appendChild(isSearchingElement);
        },
        /**
         * 移除正在搜索中的提示
         */
        removePromptsInSearch() {
          var _a2;
          (_a2 = SearchSuggestion.$el.$hintULContainer.querySelector(`li.pops-${PopsType}-search-suggestion-hint-searching-item`)) == null ? void 0 : _a2.remove();
        },
        /**
         * 清空所有的搜索结果
         */
        clearAllSearchItemLi() {
          SearchSuggestion.$el.$hintULContainer.innerHTML = "";
        },
        /**
         * 更新搜索建议框的位置(top、left)
         * 因为目标元素可能是动态隐藏的
         */
        changeHintULElementPosition(target = config.target ?? config.inputTarget) {
          let targetRect = null;
          if (config.followPosition === "inputCursor") {
            targetRect = popsDOMUtils.getTextBoundingRect(config.inputTarget, config.inputTarget.selectionStart || 0, config.inputTarget.selectionEnd || 0, false);
          } else {
            targetRect = config.isAbsolute ? popsDOMUtils.offset(target) : target.getBoundingClientRect();
          }
          if (targetRect == null) {
            return;
          }
          let documentHeight = document.documentElement.clientHeight;
          if (config.isAbsolute) {
            documentHeight = popsDOMUtils.height(document);
          }
          let documentWidth = popsDOMUtils.width(document);
          let position = config.position;
          if (config.position === "auto") {
            let targetBottom = targetRect.bottom;
            let searchSuggestionContainerHeight = popsDOMUtils.height(SearchSuggestion.$el.$hintULContainer);
            if (targetBottom + searchSuggestionContainerHeight > documentHeight) {
              position = "top";
            } else {
              position = "bottom";
              SearchSuggestion.$el.$hintULContainer.removeAttribute("data-top");
            }
          }
          if (position === "top") {
            if (config.positionTopToReverse) {
              SearchSuggestion.$el.$hintULContainer.setAttribute("data-top-reverse", "true");
            }
            SearchSuggestion.$el.$hintULContainer.style.top = "";
            SearchSuggestion.$el.$hintULContainer.style.bottom = documentHeight - targetRect.top + config.topDistance + "px";
          } else if (position === "bottom") {
            SearchSuggestion.$el.$hintULContainer.removeAttribute("data-top-reverse");
            SearchSuggestion.$el.$hintULContainer.style.bottom = "";
            SearchSuggestion.$el.$hintULContainer.style.top = targetRect.height + targetRect.top + config.topDistance + "px";
          }
          let hintUIWidth = popsDOMUtils.width(SearchSuggestion.$el.$hintULContainer);
          SearchSuggestion.$el.$hintULContainer.style.left = (targetRect.left + hintUIWidth > documentWidth ? documentWidth - hintUIWidth : targetRect.left) + "px";
        },
        /**
         * 更新搜索建议框的width
         * 因为目标元素可能是动态隐藏的
         */
        changeHintULElementWidth(target = config.target ?? config.inputTarget) {
          let targetRect = target.getBoundingClientRect();
          if (config.followTargetWidth) {
            SearchSuggestion.$el.$hintULContainer.style.width = targetRect.width + "px";
          } else {
            SearchSuggestion.$el.$hintULContainer.style.width = config.width;
          }
        },
        /**
         * 动态更新CSS
         */
        updateDynamicCSS() {
          this.$el.$dynamicCSS.innerHTML = this.getDynamicCSS();
        },
        /**
         * 更新页面显示的搜索结果
         * @param data
         */
        update(data = []) {
          if (!Array.isArray(data)) {
            throw new TypeError("传入的数据不是数组");
          }
          config.data = data;
          if (config.data.length) {
            SearchSuggestion.$data.isEmpty = false;
            if (config.toHideWithNotResult) {
              SearchSuggestion.show();
            }
            SearchSuggestion.clearAllSearchItemLi();
            config.data.forEach((item, index) => {
              let itemElement = SearchSuggestion.getSearchItemLiElement(item, index);
              SearchSuggestion.setSearchItemClickEvent(itemElement);
              SearchSuggestion.setSearchItemSelectEvent(itemElement);
              SearchSuggestion.$el.$hintULContainer.appendChild(itemElement);
            });
          } else {
            SearchSuggestion.clear();
          }
        },
        /**
         * 清空当前的搜索结果并显示无结果
         */
        clear() {
          this.$data.isEmpty = true;
          this.clearAllSearchItemLi();
          this.$el.$hintULContainer.appendChild(popsUtils.parseTextToDOM(config.toSearhNotResultHTML));
          if (config.toHideWithNotResult) {
            this.hide();
          }
        },
        /**
         * 隐藏搜索建议框
         */
        hide() {
          this.$el.root.style.display = "none";
        },
        /**
         * 显示搜索建议框
         */
        show() {
          this.$el.root.style.display = "";
        }
      };
      return SearchSuggestion;
    }
  }
  const PopsTooltipConfig = () => {
    return {
      useShadowRoot: true,
      target: null,
      content: "默认文字",
      position: "top",
      className: "",
      isFixed: false,
      alwaysShow: false,
      triggerShowEventName: "mouseenter touchstart",
      triggerCloseEventName: "mouseleave touchend",
      zIndex: 1e4,
      only: false,
      eventOption: {
        passive: false,
        capture: true,
        once: false
      },
      showBeforeCallBack() {
      },
      showAfterCallBack() {
      },
      closeBeforeCallBack() {
      },
      closeAfterCallBack() {
      },
      delayCloseTime: 100,
      showArrow: true,
      arrowDistance: 12.5,
      otherDistance: 0,
      style: "",
      beforeAppendToPageCallBack() {
      }
    };
  };
  class ToolTip {
    constructor(config, guid, ShadowInfo) {
      __publicField(this, "$el", {
        $shadowContainer: null,
        $shadowRoot: null,
        $toolTip: null,
        $content: null,
        $arrow: null
      });
      __publicField(this, "$data", {
        config: null,
        guid: null,
        timeId_close_TouchEvent: [],
        timeId_close_MouseEvent: []
      });
      this.$data.config = config;
      this.$data.guid = guid;
      this.$el.$shadowContainer = ShadowInfo.$shadowContainer;
      this.$el.$shadowRoot = ShadowInfo.$shadowRoot;
      this.init();
    }
    init() {
      let toolTipInfo = this.createToolTip();
      this.$el.$toolTip = toolTipInfo.$toolTipContainer;
      this.$el.$content = toolTipInfo.$toolTipContent;
      this.$el.$arrow = toolTipInfo.$toolTipArrow;
      this.changeContent();
      this.changeZIndex();
      this.changePosition();
      if (!this.$data.config.alwaysShow) {
        this.offEvent();
        this.onEvent();
      }
    }
    /**
     * 创建提示元素
     */
    createToolTip() {
      let $toolTipContainer = popsDOMUtils.createElement("div", {
        className: "pops-tip",
        innerHTML: (
          /*html*/
          `
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`
        )
      }, {
        "data-position": this.$data.config.isFixed ? "fixed" : "absolute",
        "data-guid": this.$data.guid
      });
      let $toolTipContent = $toolTipContainer.querySelector(".pops-tip-content");
      let $toolTipArrow = $toolTipContainer.querySelector(".pops-tip-arrow");
      if (typeof this.$data.config.className === "string" && this.$data.config.className.trim() !== "") {
        popsDOMUtils.addClassName($toolTipContainer, this.$data.config.className);
      }
      $toolTipContainer.style.zIndex = PopsHandler.handleZIndex(this.$data.config.zIndex).toString();
      if (this.$data.config.style != null) {
        let cssNode = popsDOMUtils.createElement("style", {
          type: "text/css",
          innerHTML: this.$data.config.style
        });
        $toolTipContainer.appendChild(cssNode);
      }
      if (!this.$data.config.showArrow) {
        $toolTipArrow.remove();
      }
      return {
        $toolTipContainer,
        $toolTipArrow,
        $toolTipContent
      };
    }
    /**
     * 获取提示的内容
     */
    getContent() {
      return typeof this.$data.config.content === "function" ? this.$data.config.content() : this.$data.config.content;
    }
    /**
     * 修改提示的内容
     * @param text
     */
    changeContent(text) {
      if (text == null) {
        text = this.getContent();
      }
      this.$el.$content.innerHTML = text;
    }
    /**
     * 获取z-index
     */
    getZIndex() {
      const zIndex = PopsHandler.handleZIndex(this.$data.config.zIndex);
      return zIndex;
    }
    /**
     * 动态修改z-index
     */
    changeZIndex() {
      const zIndex = this.getZIndex();
      this.$el.$toolTip.style.setProperty("z-index", zIndex.toString());
    }
    /**
     * 计算 提示框的位置
     * @param targetElement 目标元素
     * @param arrowDistance 箭头和目标元素的距离
     * @param otherDistance 其它位置的偏移
     */
    calcToolTipPosition(targetElement, arrowDistance, otherDistance) {
      let offsetInfo = popsDOMUtils.offset(targetElement, !this.$data.config.isFixed);
      let targetElement_width = offsetInfo.width;
      let targetElement_height = offsetInfo.height;
      let targetElement_top = offsetInfo.top;
      let targetElement_left = offsetInfo.left;
      let toolTipElement_width = popsDOMUtils.outerWidth(this.$el.$toolTip);
      let toolTipElement_height = popsDOMUtils.outerHeight(this.$el.$toolTip);
      let targetElement_X_center_pos = targetElement_left + targetElement_width / 2 - toolTipElement_width / 2;
      let targetElement_Y_center_pos = targetElement_top + targetElement_height / 2 - toolTipElement_height / 2;
      return {
        TOP: {
          left: targetElement_X_center_pos - otherDistance,
          top: targetElement_top - toolTipElement_height - arrowDistance,
          arrow: "bottom",
          motion: "fadeInTop"
        },
        RIGHT: {
          left: targetElement_left + targetElement_width + arrowDistance,
          top: targetElement_Y_center_pos + otherDistance,
          arrow: "left",
          motion: "fadeInRight"
        },
        BOTTOM: {
          left: targetElement_X_center_pos - otherDistance,
          top: targetElement_top + targetElement_height + arrowDistance,
          arrow: "top",
          motion: "fadeInBottom"
        },
        LEFT: {
          left: targetElement_left - toolTipElement_width - arrowDistance,
          top: targetElement_Y_center_pos + otherDistance,
          arrow: "right",
          motion: "fadeInLeft"
        }
      };
    }
    /**
     * 动态修改tooltip的位置
     */
    changePosition() {
      let positionInfo = this.calcToolTipPosition(this.$data.config.target, this.$data.config.arrowDistance, this.$data.config.otherDistance);
      let positionKey = this.$data.config.position.toUpperCase();
      let positionDetail = positionInfo[positionKey];
      if (positionDetail) {
        this.$el.$toolTip.style.left = positionDetail.left + "px";
        this.$el.$toolTip.style.top = positionDetail.top + "px";
        this.$el.$toolTip.setAttribute("data-motion", positionDetail.motion);
        this.$el.$arrow.setAttribute("data-position", positionDetail.arrow);
      } else {
        console.error("不存在该位置", this.$data.config.position);
      }
    }
    /**
     * 事件绑定
     */
    onEvent() {
      this.onToolTipAnimationFinishEvent();
      this.onShowEvent();
      this.onCloseEvent();
      this.onToolTipMouseEnterEvent();
      this.onToolTipMouseLeaveEvent();
    }
    /**
     * 取消事件绑定
     */
    offEvent() {
      this.offToolTipAnimationFinishEvent();
      this.offShowEvent();
      this.offCloseEvent();
      this.offToolTipMouseEnterEvent();
      this.offToolTipMouseLeaveEvent();
    }
    /**
     * 添加关闭的timeId
     * @param type
     * @param timeId
     */
    addCloseTimeoutId(type, timeId) {
      if (type === "MouseEvent") {
        this.$data.timeId_close_MouseEvent.push(timeId);
      } else {
        this.$data.timeId_close_TouchEvent.push(timeId);
      }
    }
    /**
     * 清除延迟的timeId
     * @param type 事件类型
     */
    clearCloseTimeoutId(type, timeId) {
      let timeIdList = type === "MouseEvent" ? this.$data.timeId_close_MouseEvent : this.$data.timeId_close_TouchEvent;
      for (let index = 0; index < timeIdList.length; index++) {
        const currentTimeId = timeIdList[index];
        if (typeof timeId === "number") {
          if (timeId == currentTimeId) {
            clearTimeout(timeId);
            timeIdList.splice(index, 1);
            break;
          }
        } else {
          clearTimeout(currentTimeId);
          timeIdList.splice(index, 1);
          index--;
        }
      }
    }
    /**
     * 显示提示框
     */
    show(...args2) {
      let event = args2[0];
      let eventType = event instanceof MouseEvent ? "MouseEvent" : "TouchEvent";
      this.clearCloseTimeoutId(eventType);
      if (typeof this.$data.config.showBeforeCallBack === "function") {
        let result2 = this.$data.config.showBeforeCallBack(this.$el.$toolTip);
        if (typeof result2 === "boolean" && !result2) {
          return;
        }
      }
      if (!popsUtils.contains(this.$el.$shadowRoot, this.$el.$toolTip)) {
        this.init();
        popsDOMUtils.append(this.$el.$shadowRoot, this.$el.$toolTip);
      }
      if (!popsUtils.contains(this.$el.$shadowContainer)) {
        if (typeof this.$data.config.beforeAppendToPageCallBack === "function") {
          this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot, this.$el.$shadowContainer);
        }
        popsDOMUtils.append(document.body, this.$el.$shadowContainer);
      }
      this.changeContent();
      this.changePosition();
      if (typeof this.$data.config.showAfterCallBack === "function") {
        this.$data.config.showAfterCallBack(this.$el.$toolTip);
      }
    }
    /**
     * 绑定 显示事件
     */
    onShowEvent() {
      popsDOMUtils.on(this.$data.config.target, this.$data.config.triggerShowEventName, this.show.bind(this), this.$data.config.eventOption);
    }
    /**
     * 取消绑定 显示事件
     */
    offShowEvent() {
      popsDOMUtils.off(this.$data.config.target, this.$data.config.triggerShowEventName, this.show.bind(this), {
        capture: true
      });
    }
    /**
     * 关闭提示框
     */
    close(...args2) {
      let event = args2[0];
      let eventType = event instanceof MouseEvent ? "MouseEvent" : "TouchEvent";
      if (event && event instanceof MouseEvent) {
        let $target = event.composedPath()[0];
        if ($target != this.$data.config.target && $target != this.$el.$toolTip) {
          return;
        }
      }
      if (typeof this.$data.config.closeBeforeCallBack === "function") {
        let result2 = this.$data.config.closeBeforeCallBack(this.$el.$toolTip);
        if (typeof result2 === "boolean" && !result2) {
          return;
        }
      }
      if (this.$data.config.delayCloseTime == null || typeof this.$data.config.delayCloseTime === "number" && this.$data.config.delayCloseTime <= 0) {
        this.$data.config.delayCloseTime = 100;
      }
      let timeId = setTimeout(() => {
        this.clearCloseTimeoutId(eventType, timeId);
        if (this.$el.$toolTip == null) {
          return;
        }
        this.$el.$toolTip.setAttribute("data-motion", this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn", "fadeOut"));
      }, this.$data.config.delayCloseTime);
      this.addCloseTimeoutId(eventType, timeId);
      if (typeof this.$data.config.closeAfterCallBack === "function") {
        this.$data.config.closeAfterCallBack(this.$el.$toolTip);
      }
    }
    /**
     * 绑定 关闭事件
     */
    onCloseEvent() {
      popsDOMUtils.on(this.$data.config.target, this.$data.config.triggerCloseEventName, this.close.bind(this), this.$data.config.eventOption);
    }
    /**
     * 取消绑定 关闭事件
     */
    offCloseEvent() {
      popsDOMUtils.off(this.$data.config.target, this.$data.config.triggerCloseEventName, this.close.bind(this), {
        capture: true
      });
    }
    /**
     * 销毁元素
     */
    destory() {
      if (this.$el.$toolTip) {
        this.$el.$shadowRoot.removeChild(this.$el.$toolTip);
      }
      this.$el.$toolTip = null;
      this.$el.$arrow = null;
      this.$el.$content = null;
    }
    /**
     * 动画结束事件
     */
    toolTipAnimationFinishEvent() {
      if (!this.$el.$toolTip) {
        return;
      }
      if (this.$el.$toolTip.getAttribute("data-motion").includes("In")) {
        return;
      }
      this.destory();
    }
    /**
     * 监听tooltip的动画结束
     */
    onToolTipAnimationFinishEvent() {
      popsDOMUtils.on(this.$el.$toolTip, popsDOMUtils.getAnimationEndNameList(), this.toolTipAnimationFinishEvent.bind(this));
    }
    /**
     * 取消tooltip监听动画结束
     */
    offToolTipAnimationFinishEvent() {
      popsDOMUtils.off(this.$el.$toolTip, popsDOMUtils.getAnimationEndNameList(), this.toolTipAnimationFinishEvent.bind(this));
    }
    /**
     * 鼠标|触摸进入事件
     */
    toolTipMouseEnterEvent() {
      this.clearCloseTimeoutId("MouseEvent");
      this.clearCloseTimeoutId("TouchEvent");
    }
    /**
     * 监听鼠标|触摸事件
     */
    onToolTipMouseEnterEvent() {
      this.clearCloseTimeoutId("MouseEvent");
      this.clearCloseTimeoutId("TouchEvent");
      popsDOMUtils.on(this.$el.$toolTip, "mouseenter touchstart", this.toolTipMouseEnterEvent.bind(this), this.$data.config.eventOption);
    }
    /**
     * 取消监听鼠标|触摸事件
     */
    offToolTipMouseEnterEvent() {
      popsDOMUtils.off(this.$el.$toolTip, "mouseenter touchstart", this.toolTipMouseEnterEvent.bind(this), this.$data.config.eventOption);
    }
    /**
     * 鼠标|触摸离开事件
     */
    toolTipMouseLeaveEvent(event) {
      this.close(event);
    }
    /**
     * 监听鼠标|触摸离开事件
     */
    onToolTipMouseLeaveEvent() {
      popsDOMUtils.on(this.$el.$toolTip, "mouseleave touchend", this.toolTipMouseLeaveEvent.bind(this), this.$data.config.eventOption);
    }
    /**
     * 取消监听鼠标|触摸离开事件
     */
    offToolTipMouseLeaveEvent() {
      popsDOMUtils.off(this.$el.$toolTip, "mouseleave touchend", this.toolTipMouseLeaveEvent.bind(this), this.$data.config.eventOption);
    }
  }
  class PopsTooltip {
    constructor(details) {
      const guid = popsUtils.getRandomGUID();
      const PopsType = "tooltip";
      let config = PopsTooltipConfig();
      config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
      config = popsUtils.assign(config, details);
      if (!(config.target instanceof HTMLElement)) {
        throw "config.target 必须是HTMLElement类型";
      }
      config = PopsHandler.handleOnly(PopsType, config);
      const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
      PopsHandler.handleInit($shadowRoot, [
        pops.config.cssText.index,
        pops.config.cssText.anim,
        pops.config.cssText.common,
        pops.config.cssText.tooltipCSS
      ]);
      let toolTip = new ToolTip(config, guid, {
        $shadowContainer,
        $shadowRoot
      });
      if (config.alwaysShow) {
        toolTip.show();
      }
      return {
        guid,
        config,
        $shadowContainer,
        $shadowRoot,
        toolTip
      };
    }
  }
  class Pops {
    constructor() {
      /** 配置 */
      __publicField(this, "config", {
        /** 版本号 */
        version: "2024.12.8",
        cssText: {
          /** 主CSS */
          index: indexCSS,
          /** 九宫格位置CSS */
          ninePalaceGridPosition: ninePalaceGridPositionCSS,
          /** 滚动条CSS */
          scrollbar: scrollbarCSS,
          /** 按钮CSS */
          button: buttonCSS,
          /** 通用的CSS */
          common: commonCSS,
          /** 动画 */
          anim: animCSS,
          /** pops.alert */
          alertCSS,
          /** pops.cponfirm */
          confirmCSS,
          /** pops.prompt */
          promptCSS,
          /** pops.loading */
          loadingCSS,
          /** pops.iframe */
          iframeCSS,
          /** pops.tooltip */
          tooltipCSS,
          /** pops.drawer */
          drawerCSS,
          /** pops.folder */
          folderCSS,
          /** pops.folder */
          panelCSS,
          /** pops.rightClickMenu */
          rightClickMenu: rightClickMenuCSS
        },
        /** icon图标的svg代码 */
        iconSVG: {
          min: SVG_min,
          mise: SVG_mise,
          max: SVG_max,
          close: SVG_close,
          edit: SVG_edit,
          share: SVG_share,
          delete: SVG_delete,
          search: SVG_search,
          upload: SVG_upload,
          loading: SVG_loading,
          next: SVG_next,
          prev: SVG_prev,
          eleme: SVG_eleme,
          elemePlus: SVG_elemePlus,
          chromeFilled: SVG_chromeFilled,
          cpu: SVG_cpu,
          videoPlay: SVG_videoPlay,
          videoPause: SVG_videoPause,
          headset: SVG_headset,
          monitor: SVG_monitor,
          documentCopy: SVG_documentCopy,
          picture: SVG_picture,
          circleClose: SVG_circleClose,
          view: SVG_view,
          hide: SVG_hide,
          keyboard: SVG_keyboard,
          arrowRight: SVG_arrowRight,
          arrowLeft: SVG_arrowLeft
        },
        /** 当前已配置的动画@keyframes名字映射(初始化时生成) */
        animation: {},
        /** 是否初始化 */
        isInit: false,
        /** 存储已创建的元素 */
        layer: {
          alert: [],
          confirm: [],
          prompt: [],
          loading: [],
          iframe: [],
          tooltip: [],
          drawer: [],
          folder: [],
          panel: [],
          rightClickMenu: []
        },
        /** 禁止滚动 */
        forbiddenScroll: {
          event(event) {
            return popsDOMUtils.preventEvent(event);
          }
        },
        /** pops使用的工具类 */
        Utils: popsUtils,
        /** pops使用的DOM工具类 */
        DOMUtils: popsDOMUtils,
        /** pops创建的实例使用的工具类 */
        InstanceUtils: PopsInstanceUtils,
        /** pops处理float类型使用的工具类 */
        MathFloatUtils: PopsMathFloatUtils,
        /** pops.panel中用于处理各个类型的工具 */
        panelHandleContentUtils: PanelHandleContentDetails
      });
      /**
       * 为所有弹窗设置全局属性
       */
      __publicField(this, "GlobalConfig", GlobalConfig);
      /**
       * 普通信息框
       * @param details 配置
       */
      __publicField(this, "alert", (details) => {
        return new PopsAlert(details);
      });
      /**
       * 询问框
       * @param details 配置
       */
      __publicField(this, "confirm", (details) => {
        return new PopsConfirm(details);
      });
      /**
       * 输入框
       * @param details 配置
       */
      __publicField(this, "prompt", (details) => {
        return new PopsPrompt(details);
      });
      /**
       * 加载层
       * @param details 配置
       */
      __publicField(this, "loading", (details) => {
        return new PopsLoading(details);
      });
      /**
       * iframe层
       * @param details 配置
       */
      __publicField(this, "iframe", (details) => {
        return new PopsIframe(details);
      });
      /**
       * 提示框
       * @param details 配置
       */
      __publicField(this, "tooltip", (details) => {
        let popsTooltip = new PopsTooltip(details);
        return popsTooltip;
      });
      /**
       * 抽屉
       * @param details 配置
       */
      __publicField(this, "drawer", (details) => {
        return new PopsDrawer(details);
      });
      /**
       * 文件夹
       * @param details 配置
       */
      __publicField(this, "folder", (details) => {
        return new PopsFolder(details);
      });
      /**
       * 配置面板
       * @param details 配置
       */
      __publicField(this, "panel", (details) => {
        return new PopsPanel$1(details);
      });
      /**
       * 右键菜单
       * @param details 配置
       */
      __publicField(this, "rightClickMenu", (details) => {
        return new PopsRightClickMenu(details);
      });
      /**
       * 搜索建议
       * @param details 配置
       */
      __publicField(this, "searchSuggestion", (details) => {
        return new PopsSearchSuggestion(details);
      });
    }
    init() {
      if (!this.config.isInit) {
        this.config.isInit = true;
        let animationStyle = document.createElement("style");
        animationStyle.innerHTML = this.config.cssText.anim;
        popsDOMUtils.appendHead(animationStyle);
        this.config.animation = null;
        this.config.animation = PopsInstanceUtils.getKeyFrames(animationStyle.sheet);
        setTimeout(() => {
          animationStyle.remove();
        }, 50);
      }
    }
    /**
     * 释放原有的pops控制权
     * @example
     * let pops = window.pops.noConflict()
     */
    noConflict() {
      if (typeof PopsCore.globalThis.pops === "object") {
        popsUtils.delete(PopsCore.globalThis, "pops");
      }
      if (typeof unsafeWindow === "object" && unsafeWindow != null && typeof unsafeWindow.pops === "object") {
        popsUtils.delete(unsafeWindow, "pops");
      }
      return new Pops();
    }
    /**
     * 通过navigator.userAgent判断是否是手机访问
     * @param userAgent
     */
    isPhone(userAgent = PopsCore.globalThis.navigator.userAgent) {
      return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(userAgent));
    }
  }
  const pops = new Pops();
  class ApiTestBase {
    /**
     * 是否支持GM函数
     */
    isSupportGM() {
      return typeof _GM === "object" && _GM != null;
    }
  }
  const PanelKeyConfig = {
    asideLastVisit: "aside-last-visit"
  };
  const Tag = {
    success: "√ ",
    error: "× ",
    warn: "!!! ",
    info: ""
  };
  const UIInfo = (config) => {
    let result2 = {
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
    return result2;
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
    addBlockCSS(...args2) {
      let selectorList = [];
      if (args2.length === 0) {
        return;
      }
      if (args2.length === 1 && typeof args2[0] === "string" && args2[0].trim() === "") {
        return;
      }
      args2.forEach((selector) => {
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
  const GlobalUtil = {
    getWindow() {
      return GMTotal.unsafeWindow.isSupport() ? _unsafeWindow : window;
    }
  };
  class ApiTest_addElement extends ApiTestBase {
    getApiName() {
      return "GM_addElement";
    }
    getAsyncApiOption() {
      return {
        name: "GM.addElement",
        isSupport: this.isSupportGM() && typeof _GM.addElement === "function"
      };
    }
    isSupport() {
      return typeof _GM_addElement === "function";
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            let $test = null;
            let $page_test = null;
            try {
              let win = GlobalUtil.getWindow();
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
              if (typeof win["GM_addElement_test_str"] !== "string") {
                return {
                  text: "GM_addElement script element is not work",
                  tag: "error"
                };
              }
              Reflect.deleteProperty(win, "GM_addElement_test_str");
              return {
                text: CommonUtil.escapeHtml("支持添加<script>元素且执行js"),
                tag: "success"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
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
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
              $page_test == null ? void 0 : $page_test.remove();
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_addStyle extends ApiTestBase {
    isSupport() {
      return typeof _GM_addStyle === "function";
    }
    getApiName() {
      return "GM_addStyle";
    }
    getAsyncApiOption() {
      return {
        name: "GM.addStyle",
        isSupport: this.isSupportGM() && typeof _GM.addStyle === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-GM_addStyle" + apiName,
        title: apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            let $test = null;
            let $testCSS = null;
            try {
              $test = domUtils.createElement("div", {
                id: apiName,
                innerText: apiName + " test"
              });
              document.body.appendChild($test);
              $testCSS = _GM_addStyle(
                /*css*/
                `
                            #${apiName} {
                                background-color: rgb(255, 0, 0);
                            }
                        `
              );
              if ($testCSS == null) {
                return {
                  text: apiName + " returns is null",
                  tag: "error"
                };
              }
              const computedStyle = window.getComputedStyle($test);
              if (computedStyle.backgroundColor !== "rgb(255, 0, 0)") {
                return {
                  text: apiName + " test element background is not rgb(255, 0, 0)",
                  tag: "error"
                };
              }
              return {
                text: CommonUtil.escapeHtml("支持添加CSS字符串"),
                tag: "success"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
              $test == null ? void 0 : $test.remove();
              $testCSS == null ? void 0 : $testCSS.remove();
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_addValueChangeListener extends ApiTestBase {
    isSupport() {
      return typeof _GM_addValueChangeListener === "function";
    }
    getApiName() {
      return "GM_addValueChangeListener";
    }
    getAsyncApiOption() {
      return {
        name: "GM.addValueChangeListener",
        isSupport: this.isSupportGM() && typeof _GM.addValueChangeListener === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_cookie extends ApiTestBase {
    isSupport() {
      return _GM_cookie != null && typeof (_GM_cookie == null ? void 0 : _GM_cookie.delete) === "function" && typeof (_GM_cookie == null ? void 0 : _GM_cookie.list) === "function" && typeof (_GM_cookie == null ? void 0 : _GM_cookie.set) === "function";
    }
    getApiName() {
      return "GM_cookie";
    }
    getAsyncApiOption() {
      let isSupportAsync = this.isSupportGM() && typeof _GM.cookie === "object" && _GM.cookie != null;
      return {
        name: "GM.cookie",
        isSupport: isSupportAsync,
        isSupportList: isSupportAsync && typeof _GM.cookie.list === "function",
        isSupportSet: isSupportAsync && typeof _GM.cookie.set === "function",
        isSupportDelete: isSupportAsync && typeof _GM.cookie.delete === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
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
      let firstFormList = result2["forms"][0].forms;
      if (apiAsyncInfo.isSupport) {
        firstFormList.push(
          UIInfo(() => {
            return apiAsyncInfo.isSupportList ? {
              text: `支持 ${apiAsyncInfo.name}.list`,
              tag: "success"
            } : {
              text: `不支持 ${apiAsyncInfo.name}.list`,
              tag: "error"
            };
          }),
          UIInfo(() => {
            return apiAsyncInfo.isSupportSet ? {
              text: `支持 ${apiAsyncInfo.name}.set`,
              tag: "success"
            } : {
              text: `不支持 ${apiAsyncInfo.name}.set`,
              tag: "error"
            };
          }),
          UIInfo(() => {
            return apiAsyncInfo.isSupportDelete ? {
              text: `支持 ${apiAsyncInfo.name}.delete`,
              tag: "success"
            } : {
              text: `不支持 ${apiAsyncInfo.name}.delete`,
              tag: "error"
            };
          })
        );
      } else {
        firstFormList.push(
          UIInfo(() => {
            return { text: "不支持 " + apiAsyncInfo.name, tag: "error" };
          })
        );
      }
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_deleteValue extends ApiTestBase {
    isSupport() {
      return typeof _GM_deleteValue === "function";
    }
    getApiName() {
      return "GM_deleteValue";
    }
    getAsyncApiOption() {
      return {
        name: "GM.deleteValue",
        isSupport: this.isSupportGM() && typeof _GM.deleteValue === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.name ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_deleteValues extends ApiTestBase {
    isSupport() {
      return typeof _GM_deleteValues === "function";
    }
    getApiName() {
      return "GM_deleteValues";
    }
    getAsyncApiOption() {
      return {
        name: "GM.deleteValues",
        isSupport: this.isSupportGM() && typeof _GM.deleteValues === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_download extends ApiTestBase {
    isSupport() {
      return typeof _GM_download === "function";
    }
    getApiName() {
      return "GM_download";
    }
    getAsyncApiOption() {
      return {
        name: "GM.download",
        isSupport: this.isSupportGM() && typeof _GM.download === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
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
      return result2;
    }
  }
  class ApiTest_getResourceText extends ApiTestBase {
    isSupport() {
      return typeof _GM_getResourceText === "function";
    }
    getApiName() {
      return "GM_getResourceText";
    }
    getAsyncApiOption() {
      return {
        name: "GM.getResourceText",
        isSupport: this.isSupportGM() && typeof _GM.getResourceText === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_getResourceUrl extends ApiTestBase {
    isSupport() {
      return typeof _GM_getResourceURL === "function";
    }
    getApiName() {
      return "GM_getResourceURL";
    }
    getAsyncApiOption() {
      return {
        name: "GM.getResourceUrl",
        isSupport: this.isSupportGM() && typeof _GM.getResourceUrl === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_getTab extends ApiTestBase {
    isSupport() {
      return typeof _GM_getTab === "function";
    }
    getApiName() {
      return "GM_getTab";
    }
    getAsyncApiOption() {
      return {
        name: "GM.getTab",
        isSupport: this.isSupportGM() && typeof _GM.getTab === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_getTabs extends ApiTestBase {
    isSupport() {
      return typeof _GM_getTabs === "function";
    }
    getApiName() {
      return "GM_getTabs";
    }
    getAsyncApiOption() {
      return {
        name: "GM.getTabs",
        isSupport: this.isSupportGM() && typeof _GM.getTabs === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_getValue extends ApiTestBase {
    isSupport() {
      return typeof _GM_getValue === "function";
    }
    getApiName() {
      return "GM_getValue";
    }
    getAsyncApiOption() {
      return {
        name: "GM.getValue",
        isSupport: this.isSupportGM() && typeof _GM.getValue === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_getValues extends ApiTestBase {
    isSupport() {
      return typeof _GM_getValues === "function";
    }
    getApiName() {
      return "GM_getValues";
    }
    getAsyncApiOption() {
      return {
        name: "GM.getValues",
        isSupport: this.isSupportGM() && typeof _GM.getValues === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_info extends ApiTestBase {
    isSupport() {
      return typeof _GM_info === "object" && _GM_info != null;
    }
    getApiName() {
      return "GM_info";
    }
    getAsyncApiOption() {
      return {
        name: "GM.info",
        isSupport: this.isSupportGM() && typeof _GM.info === "object"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_listValues extends ApiTestBase {
    isSupport() {
      return typeof _GM_listValues === "function";
    }
    getApiName() {
      return "GM_listValues";
    }
    getAsyncApiOption() {
      return {
        name: "GM.listValues",
        isSupport: this.isSupportGM() && typeof _GM.listValues === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_log extends ApiTestBase {
    isSupport() {
      return typeof _GM_log === "function";
    }
    getApiName() {
      return "GM_log";
    }
    getAsyncApiOption() {
      return {
        name: "GM.log",
        isSupport: this.isSupportGM() && typeof _GM.log === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_notification extends ApiTestBase {
    isSupport() {
      return typeof _GM_notification === "function";
    }
    getApiName() {
      return "GM_notification";
    }
    getAsyncApiOption() {
      return {
        name: "GM.notification",
        isSupport: this.isSupportGM() && typeof _GM.notification === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_openInTab extends ApiTestBase {
    isSupport() {
      return typeof _GM_openInTab === "function";
    }
    getApiName() {
      return "GM_openInTab";
    }
    getAsyncApiOption() {
      return {
        name: "GM.openInTab",
        isSupport: this.isSupportGM() && typeof _GM.openInTab === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_registerMenuCommand extends ApiTestBase {
    isSupport() {
      return typeof _GM_registerMenuCommand === "function";
    }
    getApiName() {
      return "GM_registerMenuCommand";
    }
    getAsyncApiOption() {
      return {
        name: "GM.registerMenuCommand",
        isSupport: this.isSupportGM() && typeof _GM.registerMenuCommand === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_removeValueChangeListener extends ApiTestBase {
    isSupport() {
      return typeof _GM_removeValueChangeListener === "function";
    }
    getApiName() {
      return "GM_removeValueChangeListener";
    }
    getAsyncApiOption() {
      return {
        name: "GM.removeValueChangeListener",
        isSupport: this.isSupportGM() && typeof _GM.removeValueChangeListener === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_saveTab extends ApiTestBase {
    isSupport() {
      return typeof _GM_saveTab === "function";
    }
    getApiName() {
      return "GM_saveTab";
    }
    getAsyncApiOption() {
      return {
        name: "GM.saveTab",
        isSupport: this.isSupportGM() && typeof _GM.saveTab === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_setClipboard extends ApiTestBase {
    isSupport() {
      return typeof _GM_setClipboard === "function";
    }
    getApiName() {
      return "GM_setClipboard";
    }
    getAsyncApiOption() {
      return {
        name: "GM.setClipboard",
        isSupport: this.isSupportGM() && typeof _GM.setClipboard === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_setValue extends ApiTestBase {
    isSupport() {
      return typeof _GM_setValue === "function";
    }
    getApiName() {
      return "GM_setValue";
    }
    getAsyncApiOption() {
      return {
        name: "GM.setValue",
        isSupport: this.isSupportGM() && typeof _GM.setValue === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_setValues extends ApiTestBase {
    isSupport() {
      return typeof _GM_setValues === "function";
    }
    getApiName() {
      return "GM_setValues";
    }
    getAsyncApiOption() {
      return {
        name: "GM.setValues",
        isSupport: this.isSupportGM() && typeof _GM.setValues === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_unregisterMenuCommand extends ApiTestBase {
    isSupport() {
      return typeof _GM_unregisterMenuCommand === "function";
    }
    getApiName() {
      return "GM_unregisterMenuCommand";
    }
    getAsyncApiOption() {
      return {
        name: "GM.unregisterMenuCommand",
        isSupport: this.isSupportGM() && typeof _GM.unregisterMenuCommand === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_unsafeWindow extends ApiTestBase {
    getApiName() {
      return "unsafeWindow";
    }
    getAsyncApiOption() {
      return void 0;
    }
    isSupport() {
      return typeof _unsafeWindow === "object" && _unsafeWindow != null;
    }
    getUIOption() {
      let apiName = this.getApiName();
      let result2 = {
        id: "aside-" + apiName,
        title: apiName,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            let key = "test-gm-window";
            let flag = _monkeyWindow == _unsafeWindow;
            _monkeyWindow[key] = key;
            flag = typeof _unsafeWindow[key] !== "string";
            Reflect.deleteProperty(_monkeyWindow, key);
            if (flag) {
              return {
                text: "window已被Proxy代理",
                tag: "success"
              };
            } else {
              return {
                text: "window未被Proxy代理，定义全局变量时会影响到页面变量",
                tag: "warn"
              };
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_webRequest extends ApiTestBase {
    isSupport() {
      return typeof _GM_webRequest === "function";
    }
    getApiName() {
      return "GM_webRequest";
    }
    getAsyncApiOption() {
      return {
        name: "GM.webRequest",
        isSupport: this.isSupportGM() && typeof _GM.webRequest === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_xmlHttpRequest extends ApiTestBase {
    isSupport() {
      return typeof _GM_xmlhttpRequest === "function";
    }
    getApiName() {
      return "GM_xmlHttpRequest";
    }
    getAsyncApiOption() {
      return {
        name: "GM.xmlHttpRequest",
        isSupport: this.isSupportGM() && typeof _GM.xmlHttpRequest === "function"
      };
    }
    getUIOption() {
      let apiName = this.getApiName();
      let apiAsyncInfo = this.getAsyncApiOption();
      let result2 = {
        id: "aside-" + apiName,
        title: "" + apiName,
        headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
        scrollToDefaultView: true,
        isDefault() {
          return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
        },
        callback(data) {
          StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
        },
        forms: [
          {
            type: "forms",
            text: "函数测试",
            forms: [
              UIInfo(
                () => this.isSupport() ? {
                  text: "支持 " + apiName,
                  tag: "success"
                } : {
                  text: "不支持 " + apiName,
                  tag: "error"
                }
              ),
              UIInfo(
                () => apiAsyncInfo.isSupport ? {
                  text: "支持 " + apiAsyncInfo.name,
                  tag: "success"
                } : {
                  text: "不支持 " + apiAsyncInfo.name,
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
      if (this.isSupport()) {
        result2["forms"][1].forms.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("TODO"),
                tag: "info"
              };
            } catch (error2) {
              console.error(error2);
              return {
                text: "执行错误 " + error2,
                tag: "error"
              };
            } finally {
            }
          })
        );
      }
      return result2;
    }
  }
  class ApiTest_GM extends ApiTestBase {
    getApiName() {
      return "GM";
    }
    getAsyncApiOption() {
      return void 0;
    }
    isSupport() {
      return typeof _GM === "object" && _GM != null;
    }
    getUIOption() {
      return void 0;
    }
  }
  const GMTotal = {
    unsafeWindow: new ApiTest_unsafeWindow(),
    GM: new ApiTest_GM(),
    addElement: new ApiTest_addElement(),
    addStyle: new ApiTest_addStyle(),
    download: new ApiTest_download(),
    getResourceText: new ApiTest_getResourceText(),
    getResourceUrl: new ApiTest_getResourceUrl(),
    info: new ApiTest_info(),
    log: new ApiTest_log(),
    notification: new ApiTest_notification(),
    openInTab: new ApiTest_openInTab(),
    registerMenuCommand: new ApiTest_registerMenuCommand(),
    unregisterMenuCommand: new ApiTest_unregisterMenuCommand(),
    setClipboard: new ApiTest_setClipboard(),
    getTab: new ApiTest_getTab(),
    saveTab: new ApiTest_saveTab(),
    getTabs: new ApiTest_getTabs(),
    setValue: new ApiTest_setValue(),
    getValue: new ApiTest_getValue(),
    deleteValue: new ApiTest_deleteValue(),
    listValues: new ApiTest_listValues(),
    setValues: new ApiTest_setValues(),
    getValues: new ApiTest_getValues(),
    deleteValues: new ApiTest_deleteValues(),
    addValueChangeListener: new ApiTest_addValueChangeListener(),
    removeValueChangeListener: new ApiTest_removeValueChangeListener(),
    xmlHttpRequest: new ApiTest_xmlHttpRequest(),
    webRequest: new ApiTest_webRequest(),
    cookie: new ApiTest_cookie()
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
      if (GMTotal.setValue.isSupport() && GMTotal.getValue.isSupport() && GMTotal.deleteValue.isSupport()) {
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
      if (GMTotal.setValue.isSupport() && GMTotal.getValue.isSupport() && GMTotal.deleteValue.isSupport()) {
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
      if (GMTotal.setValue.isSupport() && GMTotal.getValue.isSupport() && GMTotal.deleteValue.isSupport()) {
        _GM_deleteValue(key);
      } else {
        LocalStorageApi.delete(key);
      }
    }
  };
  const _SCRIPT_NAME_ = "Monkey Api Test";
  const utils = utils$1.noConflict();
  const domUtils = domUtils$1.noConflict();
  const __pops = pops;
  const log = new utils.Log(_GM_info, window.console);
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 1e3,
    autoClearConsole: true,
    tag: true
  });
  qmsg.config(
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
            let maxZIndex = utils$1.getMaxZIndex();
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex(maxZIndex).zIndex;
            return utils$1.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
          }
        }
      }
    )
  );
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: GMTotal.getValue.isSupport() ? _GM_getValue : StorageApi.get,
    GM_setValue: GMTotal.setValue.isSupport() ? _GM_setValue : StorageApi.set,
    GM_registerMenuCommand: GMTotal.registerMenuCommand.isSupport() ? _GM_registerMenuCommand : () => {
    },
    GM_unregisterMenuCommand: GMTotal.unregisterMenuCommand.isSupport() ? _GM_unregisterMenuCommand : () => {
    }
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
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

似乎注入到页面有点慢
`;
      } else {
        if (document.head.childNodes.length) {
          injectDocumentTime = `<html>
	<head>
	    ...${document.head.childNodes.length} nodes
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
  const Component_Common = () => {
    let supportApiNameList = [];
    let notSupportApiNameList = [];
    Object.keys(GMTotal).forEach((keyName) => {
      let value = GMTotal[keyName];
      let apiName = value.getApiName();
      let isSupport = value.isSupport();
      if (isSupport) {
        supportApiNameList.push({
          name: apiName,
          isSupport
        });
      } else {
        notSupportApiNameList.push({
          name: apiName,
          isSupport
        });
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
						${config.isSupport ? (
          /*html*/
          `
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
								<path d="M448 71.9c-17.3-13.4-41.5-9.3-54.1 9.1L214 344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8-15.6 15.5-16.4 41.6-1.7 58.1 0 0 120.4 133.6 137.7 147 17.3 13.4 41.5 9.3 54.1-9.1l206.3-301.7c12.6-18.5 8.7-44.2-8.6-57.5z" fill="#3b9f04"></path>
							</svg>
						`
        ) : (
          /*html*/
          `
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
								<path fill="#FF473E" d="m330.443 256l136.765-136.765c14.058-14.058 14.058-36.85 0-50.908l-23.535-23.535c-14.058-14.058-36.85-14.058-50.908 0L256 181.557L119.235 44.792c-14.058-14.058-36.85-14.058-50.908 0L44.792 68.327c-14.058 14.058-14.058 36.85 0 50.908L181.557 256L44.792 392.765c-14.058 14.058-14.058 36.85 0 50.908l23.535 23.535c14.058 14.058 36.85 14.058 50.908 0L256 330.443l136.765 136.765c14.058 14.058 36.85 14.058 50.908 0l23.535-23.535c14.058-14.058 14.058-36.85 0-50.908L330.443 256z"></path>
							</svg>
						`
        )}
						
					</span>
				</div>
			`
        )
      });
      domUtils.on($item, "click", (event) => {
        utils.preventEvent(event);
        let shadowRoot = $item.getRootNode();
        let $left = shadowRoot.querySelector(
          "#aside-" + config.name
        );
        if ($left) {
          $left.click();
          $left.scrollIntoView({ behavior: "smooth" });
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
      } catch (error2) {
        console.error(error2);
      }
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      if (GMTotal.unsafeWindow.isSupport()) {
        return _unsafeWindow.top === _unsafeWindow.self;
      } else {
        return window.top === window.self;
      }
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
      let locaData = StorageApi.get(KEY, {});
      let oldValue = locaData[key];
      locaData[key] = value;
      StorageApi.set(KEY, locaData);
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
      let locaData = StorageApi.get(KEY, {});
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
      let locaData = StorageApi.get(KEY, {});
      let oldValue = locaData[key];
      Reflect.deleteProperty(locaData, key);
      StorageApi.set(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, void 0);
      }
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback2, option) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback: callback2
      });
      if (option) {
        if (option.immediate) {
          callback2(key, this.getValue(key), this.getValue(key));
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
      let locaData = StorageApi.get(KEY, {});
      return key in locaData;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     * @param isReverse 逆反判断菜单启用
     * @param checkEnableCallBack 自定义检测菜单的值，可自行决定是否强制启用菜单，true是启用菜单，false是不启用菜单
     */
    execMenu(key, callback2, isReverse = false, checkEnableCallBack) {
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
        callback2(value);
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
    execMenuOnce(key, callback2, getValueFn, handleValueChangeFn, checkEnableCallBack) {
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
          let result2 = callback2(currentValue, dynamicPushStyleNode);
          if (result2 instanceof HTMLStyleElement) {
            resultList = [result2];
          } else if (Array.isArray(result2)) {
            resultList = [
              ...result2.filter(
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
    execInheritMenuOnce(key, childKey, callback2, replaceValueFn) {
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
        callback2,
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
    onceExec(key, callback2) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExec.has(key)) {
        return;
      }
      callback2();
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
				max-width: 200px !important;
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
      let configList = [Component_Common()];
      Object.keys(GMTotal).forEach((keyName) => {
        let value = GMTotal[keyName];
        let option = value.getUIOption();
        if (option) {
          configList.push(option);
        }
      });
      return configList;
    }
  };
  PopsPanel.init();
  PopsPanel.showPanel();

})();