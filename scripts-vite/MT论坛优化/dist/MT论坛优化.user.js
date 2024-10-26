// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.10.26
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.3.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.7.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.10.0/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.10.0/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css
// @connect      *
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}function d(n){let e=document.createElement("style");return e.innerHTML=n,document.head?document.head.appendChild(e):document.documentElement.appendChild(e),e}d(t)})(" .pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{width:90px} ");

(function (Qmsg, DOMUtils, Utils, pops, hljs, Viewer) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
  var require_entrance_001 = __commonJS({
    "entrance-CdhWtSO2.js"(exports, module) {
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
      const HttpxCookieManager = {
        $data: {
          /** 是否启用 */
          get enable() {
            return PopsPanel.getValue("httpx-use-cookie-enable");
          },
          /** 是否使用document.cookie */
          get useDocumentCookie() {
            return PopsPanel.getValue("httpx-use-document-cookie");
          },
          cookieRule: []
        },
        /**
         * 补充cookie末尾分号
         */
        fixCookieSplit(str) {
          if (utils.isNotNull(str) && !str.trim().endsWith(";")) {
            str += ";";
          }
          return str;
        },
        /**
         * 合并两个cookie
         */
        concatCookie(targetCookie, newCookie) {
          if (utils.isNull(targetCookie)) {
            return newCookie;
          }
          targetCookie = targetCookie.trim();
          newCookie = newCookie.trim();
          targetCookie = this.fixCookieSplit(targetCookie);
          if (newCookie.startsWith(";")) {
            newCookie = newCookie.substring(1);
          }
          return targetCookie.concat(newCookie);
        },
        /**
         * 处理cookie
         * @param details
         * @returns
         */
        handle(details) {
          if (details.fetch) {
            return;
          }
          if (!this.$data.enable) {
            return;
          }
          let ownCookie = "";
          let url = details.url;
          if (url.startsWith("//")) {
            url = window.location.protocol + url;
          }
          let urlObj = new URL(url);
          if (this.$data.useDocumentCookie && urlObj.hostname.endsWith(
            window.location.hostname.split(".").slice(-2).join(".")
          )) {
            ownCookie = this.concatCookie(ownCookie, document.cookie.trim());
          }
          for (let index = 0; index < this.$data.cookieRule.length; index++) {
            let rule = this.$data.cookieRule[index];
            if (urlObj.hostname.match(rule.hostname)) {
              let cookie = PopsPanel.getValue(rule.key);
              if (utils.isNull(cookie)) {
                break;
              }
              ownCookie = this.concatCookie(ownCookie, cookie);
            }
          }
          if (utils.isNotNull(ownCookie)) {
            if (details.headers && details.headers["Cookie"]) {
              details.headers.Cookie = this.concatCookie(
                details.headers.Cookie,
                ownCookie
              );
            } else {
              details.headers["Cookie"] = ownCookie;
            }
            log.info(["Httpx => 设置cookie:", details]);
          }
          if (details.headers && details.headers.Cookie != null && utils.isNull(details.headers.Cookie)) {
            delete details.headers.Cookie;
          }
        }
      };
      const CommonUtils = {
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
          addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
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
            CommonUtils.addLinkNode(resourceMapData.url);
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
        },
        /**
         * 将url修复，例如只有search的链接修复为
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
        }
      };
      const GM_RESOURCE_MAP = {
        ElementPlus: {
          keyName: "ElementPlusResourceCSS",
          url: "https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css"
        },
        Viewer: {
          keyName: "ViewerCSS",
          url: "https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"
        },
        Hljs: {
          keyName: "HljsCSS",
          url: "https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"
        }
      };
      (function(global, factory) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = factory();
        } else {
          global = typeof globalThis !== "undefined" ? globalThis : global || self;
          global.Watermark = factory(global.Watermark);
        }
      })(typeof window !== "undefined" ? window : void 0, function(AnotherWatermark) {
        let Watermark = function() {
        };
        CanvasRenderingContext2D.prototype.letterSpacingText = function(text, x, y, letterSpacing) {
          var context = this;
          var canvas = context.canvas;
          if (!letterSpacing && canvas) {
            letterSpacing = parseFloat(window.getComputedStyle(canvas).letterSpacing);
          }
          if (!letterSpacing) {
            return this.fillText(text, x, y);
          }
          var arrText = text.split("");
          var align = context.textAlign || "left";
          var originWidth = context.measureText(text).width;
          var actualWidth = originWidth + letterSpacing * (arrText.length - 1);
          if (align == "center") {
            x = x - actualWidth / 2;
          } else if (align == "right") {
            x = x - actualWidth;
          }
          context.textAlign = "left";
          arrText.forEach(function(letter) {
            var letterWidth = context.measureText(letter).width;
            context.fillText(letter, x, y);
            x = x + letterWidth + letterSpacing;
          });
          context.textAlign = align;
        };
        CanvasRenderingContext2D.prototype.wrapText = function(text, x, y, maxWidth, lineHeight, stroke) {
          if (typeof text != "string" || typeof x != "number" || typeof y != "number") {
            return;
          }
          var context = this;
          var canvas = context.canvas;
          if (typeof maxWidth == "undefined") {
            maxWidth = canvas && canvas.width || 300;
          }
          if (typeof lineHeight == "undefined") {
            lineHeight = canvas && parseInt(window.getComputedStyle(canvas).lineHeight) || parseInt(window.getComputedStyle(document.body).lineHeight);
          }
          var arrText = text.split("");
          var line = "";
          for (var n = 0; n < arrText.length; n++) {
            var testLine = line + arrText[n];
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
              if (stroke) {
                context.strokeText(line, x, y, canvas.width);
              } else {
                context.fillText(line, x, y);
              }
              line = arrText[n];
              y += lineHeight;
            } else {
              line = testLine;
            }
          }
          if (stroke) {
            context.strokeText(line, x, y, canvas.width);
          } else {
            context.fillText(line, x, y);
          }
        };
        CanvasRenderingContext2D.prototype.fillTextVertical = function(text, x, y) {
          var context = this;
          context.canvas;
          var arrText = text.split("");
          var arrWidth = arrText.map(function(letter) {
            return context.measureText(letter).width;
          });
          var align = context.textAlign;
          var baseline = context.textBaseline;
          if (align == "left") {
            x = x + Math.max.apply(null, arrWidth) / 2;
          } else if (align == "right") {
            x = x - Math.max.apply(null, arrWidth) / 2;
          }
          if (baseline == "bottom" || baseline == "alphabetic" || baseline == "ideographic") {
            y = y - arrWidth[0] / 2;
          } else if (baseline == "top" || baseline == "hanging") {
            y = y + arrWidth[0] / 2;
          }
          context.textAlign = "center";
          context.textBaseline = "middle";
          arrText.forEach(function(letter, index) {
            var letterWidth = arrWidth[index];
            var code = letter.charCodeAt(0);
            if (code <= 256) {
              context.translate(x, y);
              context.rotate(90 * Math.PI / 180);
              context.translate(-x, -y);
            } else if (index > 0 && text.charCodeAt(index - 1) < 256) {
              y = y + arrWidth[index - 1] / 2;
            }
            context.fillText(letter, x, y);
            context.setTransform(1, 0, 0, 1, 0, 0);
            var letterWidth = arrWidth[index];
            y = y + letterWidth;
          });
          context.textAlign = align;
          context.textBaseline = baseline;
        };
        function loadFile(file) {
          let fileReader = new FileReader();
          return new Promise((resolve) => {
            fileReader.onloadend = async function(event) {
              resolve(event);
            };
            fileReader.readAsDataURL(file);
          });
        }
        function loadImage(src) {
          let image = new Image();
          return new Promise((resolve) => {
            image.onload = () => {
              resolve(image);
            };
            image.src = src;
          });
        }
        function checkInArrayByPos(arrayData, x, y) {
          let flag = false;
          Array.from(arrayData).forEach((item) => {
            if (item["x"] == x && item["y"] == y) {
              flag = true;
              return;
            }
          });
          return flag;
        }
        function getRandValue(arr) {
          if (arr instanceof Array) {
            return arr[Math.floor(Math.random() * arr.length)];
          } else {
            return arr;
          }
        }
        Watermark.prototype.setFile = function(file) {
          let that = this;
          return new Promise(async (resolve) => {
            try {
              var fileReader = await loadFile(file);
              await that.setImage(fileReader.target.result);
              resolve(true);
            } catch (error) {
              resolve(false);
            }
          });
        };
        Watermark.prototype.setImage = function(src) {
          this.dataUrl = src;
          let that = this;
          return new Promise(async (res) => {
            var image = await loadImage(src);
            that.sizes = {
              width: image.width,
              height: image.height
            };
            var canvas = document.createElement("canvas");
            canvas.width = that.sizes.width;
            canvas.height = that.sizes.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            image = null;
            that.canvas = canvas;
            res(true);
          });
        };
        Watermark.prototype.hasImage = function() {
          return !!this.dataUrl;
        };
        Watermark.prototype.getSize = function() {
          return this.sizes;
        };
        Watermark.prototype.clearMark = function() {
          let that = this;
          if (typeof that.canvas === "undefined") {
            return;
          }
          function _clearMark_() {
            var ctx = that.canvas.getContext("2d");
            ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
            var w = that.canvas.width;
            var h = that.canvas.height;
            that.canvas.width = w;
            that.canvas.height = h;
            ctx.beginPath();
            var image = new Image();
            image.src = that.dataUrl;
            ctx.drawImage(image, 0, 0);
            image = null;
          }
          _clearMark_();
        };
        Watermark.prototype.addText = function(opts) {
          var options = {
            text: ["Call By waterMark.addText"],
            fontSize: "6vw",
            fontFamily: "Microsoft Yahei",
            color: "#000000",
            textAlign: "center",
            /* 描边 */
            stroke: false,
            globalAlpha: 0.7,
            /* -360 ~ 360 */
            rotateAngle: 50,
            /* 必须大于0 */
            maxWidth: 100,
            /* 必须大于0 */
            xMoveDistance: 30,
            /* 必须大于0 */
            yMoveDistance: 30
          };
          for (let key in options) {
            if (typeof opts[key] !== "undefined") {
              options[key] = opts[key];
            }
          }
          options.maxWidth = parseInt(options.maxWidth) > 0 ? options.maxWidth : 1;
          options.xMoveDistance = parseInt(options.xMoveDistance) > 0 ? options.xMoveDistance : 1;
          options.yMoveDistance = parseInt(options.yMoveDistance) > 0 ? options.yMoveDistance : 1;
          var ctx = this.canvas.getContext("2d");
          var fontSize = options.fontSize;
          fontSize = fontSize.toString();
          if (~fontSize.indexOf("vw")) {
            fontSize = (this.sizes.width / 100 * parseInt(fontSize)).toFixed(0);
          }
          fontSize = parseInt(fontSize);
          ctx.font = fontSize + "px " + options.fontFamily;
          ctx.fillStyle = options.color;
          ctx.textAlign = options.textAlign;
          ctx.globalAlpha = options.globalAlpha;
          let canvasWidth = this.sizes.width, canvasHeight = this.sizes.height;
          let rotateAngle = options.rotateAngle * Math.PI / 180;
          let xMoveDistance = options.xMoveDistance;
          let yMoveDistance = options.yMoveDistance;
          let maxWidth = options.maxWidth;
          let lineHeight = fontSize;
          let pos = [];
          for (var i = canvasWidth / 2; i < canvasWidth; i += xMoveDistance) {
            for (var j = canvasHeight / 2; j < canvasHeight; j += yMoveDistance) {
              if (!checkInArrayByPos(pos, i, j)) {
                pos = pos.concat({
                  x: i,
                  y: j
                });
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.translate(i, j);
                ctx.rotate(rotateAngle);
                ctx.wrapText(
                  getRandValue(options.text),
                  0,
                  0,
                  maxWidth,
                  lineHeight,
                  options.stroke
                );
              }
            }
            for (var k = canvasHeight / 2; k > 0; k -= yMoveDistance) {
              if (!checkInArrayByPos(pos, i, k)) {
                pos = pos.concat({
                  x: i,
                  y: k
                });
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.translate(i, k);
                ctx.rotate(rotateAngle);
                ctx.wrapText(
                  getRandValue(options.text),
                  0,
                  0,
                  maxWidth,
                  lineHeight,
                  options.stroke
                );
              }
            }
          }
          for (var i = canvasWidth / 2; i > 0; i -= xMoveDistance) {
            for (var j = canvasHeight / 2; j < canvasHeight; j += yMoveDistance) {
              if (!checkInArrayByPos(pos, i, j)) {
                pos = pos.concat({
                  x: i,
                  y: j
                });
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.translate(i, j);
                ctx.rotate(rotateAngle);
                ctx.wrapText(
                  getRandValue(options.text),
                  0,
                  0,
                  maxWidth,
                  lineHeight,
                  options.stroke
                );
              }
            }
            for (var k = canvasHeight / 2; k > 0; k -= yMoveDistance) {
              if (!checkInArrayByPos(pos, i, k)) {
                pos = pos.concat({
                  x: i,
                  y: k
                });
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.translate(i, k);
                ctx.rotate(rotateAngle);
                ctx.wrapText(
                  getRandValue(options.text),
                  0,
                  0,
                  maxWidth,
                  lineHeight,
                  options.stroke
                );
              }
            }
          }
        };
        Watermark.prototype.addPixelText = function(opts) {
          var options = {
            text: "像素文字水印",
            /* 像素文字 */
            big: {
              fontSize: 150,
              fontFamily: "微软雅黑",
              textAlign: "center",
              rotateAngle: 0,
              /* 描边 */
              stroke: false
            },
            /* 绘制像素的文字 */
            small: {
              fontSize: 10,
              fontFamily: "微软雅黑",
              color: "#000",
              textAlign: "center",
              globalAlpha: 0.7
            }
          };
          for (let key in options) {
            if (typeof opts[key] !== "undefined") {
              options[key] = opts[key];
            }
          }
          var ctx = this.canvas.getContext("2d");
          var tmpCanvas = document.createElement("canvas");
          var tmpctx = tmpCanvas.getContext("2d");
          tmpCanvas.width = this.sizes.width;
          tmpCanvas.height = this.sizes.height;
          tmpctx.font = options.big.fontSize + "px " + options.big.fontFamily;
          tmpctx.textAlign = options.big.textAlign;
          tmpctx.textBaseline = "middle";
          tmpctx.translate(tmpCanvas.width / 2, tmpCanvas.height / 2);
          tmpctx.rotate(options.big.rotateAngle * Math.PI / 180);
          tmpctx.translate(-tmpCanvas.width / 2, -tmpCanvas.height / 2);
          if (options.big.stroke) {
            tmpctx.strokeText(
              options.text,
              tmpCanvas.width / 2,
              tmpCanvas.height / 2,
              tmpCanvas.width
            );
          } else {
            tmpctx.fillText(options.text, tmpCanvas.width / 2, tmpCanvas.height / 2);
          }
          var textArray = options.text.split("");
          var textPixleInfo = tmpctx.getImageData(
            0,
            0,
            tmpCanvas.width,
            tmpCanvas.height
          );
          var pixelArray = [];
          for (var i = 0; i < tmpCanvas.height; i += options.small.fontSize) {
            for (var j = 0; j < tmpCanvas.width; j += options.small.fontSize) {
              var index = j + i * tmpCanvas.width;
              var a = textPixleInfo.data[index * 4 + 3];
              if (a > 128) {
                pixelArray.push({
                  text: getRandValue(textArray),
                  x: j,
                  y: i
                });
              }
            }
          }
          ctx.font = options.small.fontSize + "px " + options.small.fontFamily;
          ctx.fillStyle = options.small.color;
          ctx.textAlign = options.small.textAlign;
          ctx.textBaseline = "middle";
          ctx.globalAlpha = options.small.globalAlpha;
          pixelArray.forEach((item) => {
            ctx.fillText(item.text, item.x, item.y);
          });
        };
        Watermark.prototype.addImage = function(opts) {
          if (opts.imageArray == null) {
            alert("参数缺少imageArray");
            return false;
          }
          if (opts.imageArray.length === 0) {
            alert("参数imageArray不能为空");
            return false;
          }
          let options = {
            imageArray: [],
            /* 里面为水印Image对象 */
            width: 50,
            /* 必须大于0 */
            height: 50,
            /* 必须大于0 */
            globalAlpha: 0.5,
            rotateAngle: 0,
            xMoveDistance: 70,
            /* 必须大于0 */
            yMoveDistance: 70
            /* 必须大于0 */
          };
          for (let key in options) {
            if (typeof opts[key] !== "undefined") {
              options[key] = opts[key];
            }
          }
          options.width = parseInt(options.width) > 0 ? options.width : 1;
          options.height = parseInt(options.height) > 0 ? options.height : 1;
          options.xMoveDistance = parseInt(options.xMoveDistance) > 0 ? options.xMoveDistance : 1;
          options.yMoveDistance = parseInt(options.yMoveDistance) > 0 ? options.yMoveDistance : 1;
          let ctx = this.canvas.getContext("2d");
          let waterImageCanvasArray = [];
          let waterImageCanvasDiagonal = parseInt(
            Math.sqrt(options.width * options.width + options.height * options.height)
          );
          let canvasWidth = this.sizes.width, canvasHeight = this.sizes.height;
          let rotateAngle = options.rotateAngle * Math.PI / 180;
          let xMoveDistance = options.xMoveDistance;
          let yMoveDistance = options.yMoveDistance;
          let centerDrawLeftPosX = canvasWidth / 2 - waterImageCanvasDiagonal / 2;
          let centerDrawLeftPosY = canvasHeight / 2 - waterImageCanvasDiagonal / 2;
          let waterDrawPosX = (waterImageCanvasDiagonal - options.width) / 2;
          let waterDrawPosY = (waterImageCanvasDiagonal - options.height) / 2;
          Array.from(options.imageArray).forEach((item) => {
            var waterImageCanvas = document.createElement("canvas");
            var waterctx = waterImageCanvas.getContext("2d");
            waterImageCanvas.width = waterImageCanvasDiagonal;
            waterImageCanvas.height = waterImageCanvasDiagonal;
            waterctx.globalAlpha = options.globalAlpha;
            waterctx.translate(
              waterImageCanvasDiagonal / 2,
              waterImageCanvasDiagonal / 2
            );
            waterctx.rotate(rotateAngle);
            waterctx.translate(
              -waterImageCanvasDiagonal / 2,
              -waterImageCanvasDiagonal / 2
            );
            waterctx.drawImage(
              item,
              waterDrawPosX,
              waterDrawPosY,
              options.width,
              options.height
            );
            waterImageCanvasArray = waterImageCanvasArray.concat(waterImageCanvas);
          });
          function randomArrayData(array_data) {
            return array_data[Math.floor(Math.random() * array_data.length)];
          }
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          let pos = [];
          for (let i = centerDrawLeftPosX; i < canvasWidth; i += xMoveDistance) {
            for (let j = centerDrawLeftPosY; j < canvasHeight; j += yMoveDistance) {
              if (!checkInArrayByPos(pos, i, j)) {
                pos = pos.concat({
                  x: i,
                  y: j
                });
                ctx.drawImage(
                  randomArrayData(waterImageCanvasArray),
                  i,
                  j
                );
              }
            }
            for (let k = centerDrawLeftPosY; k > -Math.abs(waterImageCanvasDiagonal); k -= yMoveDistance) {
              if (!checkInArrayByPos(pos, i, k)) {
                pos = pos.concat({
                  x: i,
                  y: k
                });
                ctx.drawImage(randomArrayData(waterImageCanvasArray), i, k);
              }
            }
          }
          for (let i = centerDrawLeftPosX; i > -Math.abs(waterImageCanvasDiagonal); i -= xMoveDistance) {
            for (let j = centerDrawLeftPosY; j < canvasHeight; j += yMoveDistance) {
              if (!checkInArrayByPos(pos, i, j)) {
                pos = pos.concat({
                  x: i,
                  y: j
                });
                ctx.drawImage(randomArrayData(waterImageCanvasArray), i, j);
              }
            }
            for (let k = centerDrawLeftPosY; k > -Math.abs(waterImageCanvasDiagonal); k -= yMoveDistance) {
              if (!checkInArrayByPos(pos, i, k)) {
                pos = pos.concat({
                  x: i,
                  y: k
                });
                ctx.drawImage(randomArrayData(waterImageCanvasArray), i, k);
              }
            }
          }
        };
        Watermark.prototype.getPreview = function() {
          return this.dataUrl;
        };
        Watermark.prototype.render = function(type) {
          type = type === "png" ? "png" : "jpeg";
          return this.canvas.toDataURL("image/" + type);
        };
        Watermark.prototype.renderBlob = function() {
          let that = this;
          return new Promise((res) => {
            that.canvas.toBlob(function(blob) {
              res(window.URL.createObjectURL(blob));
            });
          });
        };
        Watermark.prototype.noConflict = function() {
          if (window.Watermark) {
            delete window.Watermark;
          }
          if (AnotherWatermark) {
            window.Watermark = AnotherWatermark;
          }
          return Watermark;
        };
        return Watermark;
      });
      const _SCRIPT_NAME_ = "MT论坛优化";
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
      httpx.interceptors.request.use((data) => {
        HttpxCookieManager.handle(data);
        return data;
      });
      httpx.interceptors.response.use(void 0, (data) => {
        log.error(["拦截器-请求错误", data]);
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
      pops.GlobalConfig.setGlobalConfig({
        mask: {
          enable: true,
          clickEvent: {
            toClose: false,
            toHide: false
          }
        }
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
      {
        CommonUtils.setGMResourceCSS(GM_RESOURCE_MAP.Viewer);
      }
      {
        CommonUtils.setGMResourceCSS(GM_RESOURCE_MAP.Hljs);
      }
      const $ = document.querySelector.bind(document);
      const $$ = document.querySelectorAll.bind(document);
      const KEY = "GM_Panel";
      const ATTRIBUTE_INIT = "data-init";
      const ATTRIBUTE_KEY = "data-key";
      const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
      const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
      const PROPS_STORAGE_API = "data-storage-api";
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
      const UIOwn = function(getLiElementCallBack, initConfig, props, afterAddToUListCallBack) {
        let result = {
          type: "own",
          attributes: {},
          props,
          getLiElementCallBack,
          afterAddToUListCallBack
        };
        Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
          return false;
        });
        return result;
      };
      const MTUtils = {
        /**
         * 根据UID获取小|中|大头像
         * @param uid
         * @param size
         */
        getAvatar: (uid, size = "middle") => {
          return `/uc_server/avatar.php?uid=${uid}&size=${size}&ts=1`;
        },
        /**
         * 获取当前已登录的用户的uid
         */
        getCurrentUID() {
          let discuz_uid = _unsafeWindow.discuz_uid;
          if (typeof discuz_uid === "string") {
            return discuz_uid;
          }
          let $exit = document.querySelector(
            '.sidenv_exit a[href*="uid="]'
          );
          if ($exit) {
            let uidMatch = $exit.href.match(/uid=([0-9]+)/);
            if (uidMatch) {
              return uidMatch[uidMatch.length - 1];
            }
          }
        },
        /**
         * 获取当前已登录用户的formhash
         */
        getCurrentFormHash() {
          let $exit = document.querySelector(
            '.comiis_user_info a[href*="&formhash="]'
          );
          if ($exit) {
            let formHashMatch = $exit.href.match(/formhash=([0-9a-zA-Z]+)/);
            if (formHashMatch) {
              return formHashMatch[formHashMatch.length - 1];
            }
          }
        },
        /**
         * 检测环境模板
         */
        envIsMobile() {
          return (
            // @ts-ignore
            (_unsafeWindow.STYLEID || // @ts-ignore
            window.STYLEID || // @ts-ignore
            typeof STYLEID !== "undefined" && STYLEID) === "3"
          );
        },
        /**
         * 获取帖子id
         * @param url
         */
        getThreadId: (url) => {
          let urlMatch = url.match(/thread-([\d]+)-|&tid=([\d]+)/i);
          if (urlMatch) {
            let forumIdList = urlMatch.filter(Boolean);
            let forumId = forumIdList[forumIdList.length - 1];
            return forumId;
          }
        },
        /**
         * 获取板块？id
         */
        getForumId(url) {
          let urlMatch = url.match(/&fid=([\d]+)/i);
          if (urlMatch) {
            return urlMatch[urlMatch.length - 1];
          }
        },
        /**
         * 获取发布id
         */
        getPostId(url) {
          let urlMatch = url.match(/&pid=([\d]+)/i);
          if (urlMatch) {
            return urlMatch[urlMatch.length - 1];
          }
        },
        /**
         * 获取回复id
         */
        getRepquote(url) {
          let urlMatch = url.match(/&repquote=([\d]+)/i);
          if (urlMatch) {
            return urlMatch[urlMatch.length - 1];
          }
        }
      };
      const MTDyncmicAvatar = {
        $upload: {
          small: false,
          middle: false,
          big: false
        },
        $data: {
          /**
           * 图片文件最大大小
           */
          avatarInfo: {
            maxSize: 2097152,
            small: {
              width: 48,
              height: 48
            },
            middle: {
              width: 120,
              height: 120
            },
            big: {
              width: 200,
              height: 250
            }
          }
        },
        $el: {
          $smallUpload: null,
          $middleUpload: null,
          $bigUpload: null,
          $smallStatus: null,
          $middleStatus: null,
          $bigStatus: null
        },
        init() {
          this.showView();
        },
        showView() {
          let $confirm = __pops.confirm({
            title: {
              text: "修改头像",
              position: "center"
            },
            content: {
              text: (
                /*html*/
                `
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像: 48×48</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像: 120×120</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像: 200×250</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `
              ),
              html: true
            },
            btn: {
              ok: {
                text: "上传",
                callback: async () => {
                  if (!MTDyncmicAvatar.$upload.small || !MTDyncmicAvatar.$upload.middle || !MTDyncmicAvatar.$upload.big) {
                    Qmsg.error("校验失败");
                    return;
                  }
                  let $loading = Qmsg.loading("正在处理数据中...");
                  let smallAvatarBase64 = await utils.parseFileToBase64(
                    this.$el.$smallUpload.files[0]
                  );
                  let middleAvatarBase64 = await utils.parseFileToBase64(
                    this.$el.$middleUpload.files[0]
                  );
                  let bigAvatarBase64 = await utils.parseFileToBase64(
                    this.$el.$bigUpload.files[0]
                  );
                  let avatarBase64List = [
                    bigAvatarBase64,
                    middleAvatarBase64,
                    smallAvatarBase64
                  ];
                  const dataArr = avatarBase64List.map(
                    (str) => str.substring(str.indexOf(",") + 1)
                  );
                  let uploadUrl = await this.getUploadUrl();
                  $loading.close();
                  if (uploadUrl == null) {
                    return;
                  }
                  let formhash = MTUtils.getCurrentFormHash();
                  if (formhash == null) {
                    Qmsg.error("获取formhash失败");
                    return;
                  }
                  let formData = new FormData();
                  formData.append("Filedata", "");
                  formData.append("avatar1", dataArr[0]);
                  formData.append("avatar2", dataArr[1]);
                  formData.append("avatar3", dataArr[2]);
                  formData.append("formhash", formhash);
                  let response = await httpx.post(uploadUrl, {
                    data: formData,
                    headers: {
                      Referer: `${window.location.origin}/home.php?mod=spacecp&ac=avatar`,
                      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                      "User-Agent": utils.getRandomPCUA()
                    }
                  });
                  if (!response.status) {
                    return;
                  }
                  if (response.data.responseText.indexOf(
                    "window.parent.postMessage('success','*')"
                  ) != -1) {
                    Qmsg.success("上传成功");
                    $confirm.close();
                    setTimeout(() => {
                      window.location.reload();
                    }, 1500);
                  } else {
                    log.error(response);
                    Qmsg.error(response.data.responseText);
                  }
                }
              }
            },
            mask: {
              enable: true
            },
            width: window.innerWidth > 500 ? "500px" : "88vw",
            height: window.innerHeight > 500 ? "500px" : "80vh",
            style: (
              /*css*/
              `
            .avatar-container{
                display: flex;
                width: -webkit-fill-available;
                width: -moz-available;
                margin: 6px 10px;
                flex-direction: column;
            }
            .avatar-tip{
                float: left;
                font-weight: bold;
            }
            .avatar-upload-status {
                padding: 0px;
                padding-left: 10px;
                font-weight: bold;
                width: -webkit-fill-available;
                text-align: left;
                font-size: small;
            }
            .avatar-upload-status[data-success="false"]{
                color: red;
            }
            .avatar-upload-status[data-success="true"]{
                color: green;
            }
            .avatar-upload {
                margin: 20px 0px;
            }
            `
            )
          });
          this.$el.$smallUpload = $confirm.$shadowRoot.querySelector(
            ".avatar-upload[data-type='small']"
          );
          this.$el.$middleUpload = $confirm.$shadowRoot.querySelector(
            ".avatar-upload[data-type='middle']"
          );
          this.$el.$bigUpload = $confirm.$shadowRoot.querySelector(
            ".avatar-upload[data-type='big']"
          );
          this.$el.$smallStatus = $confirm.$shadowRoot.querySelector(
            ".avatar-upload-status[data-type='small']"
          );
          this.$el.$middleStatus = $confirm.$shadowRoot.querySelector(
            ".avatar-upload-status[data-type='middle']"
          );
          this.$el.$bigStatus = $confirm.$shadowRoot.querySelector(
            ".avatar-upload-status[data-type='big']"
          );
          this.setUploadChangeEvent(
            this.$el.$smallUpload,
            this.$el.$smallStatus,
            this.$data.avatarInfo.small,
            () => {
              this.$upload.small = true;
            }
          );
          this.setUploadChangeEvent(
            this.$el.$middleUpload,
            this.$el.$middleStatus,
            this.$data.avatarInfo.middle,
            () => {
              this.$upload.middle = true;
            }
          );
          this.setUploadChangeEvent(
            this.$el.$bigUpload,
            this.$el.$bigStatus,
            this.$data.avatarInfo.big,
            () => {
              this.$upload.big = true;
            }
          );
        },
        /**
         * 设置文件改变事件
         */
        setUploadChangeEvent($file, $status, sizeInfo, successCallBack) {
          domUtils.on($file, "change", (event) => {
            var _a2;
            if (!((_a2 = $file.files) == null ? void 0 : _a2.length)) {
              return;
            }
            domUtils.text($status, "🤡获取文件信息中...");
            $status.removeAttribute("data-success");
            let uploadImageFile = $file.files[0];
            let fileSize = uploadImageFile.size;
            let $image = new Image();
            let reader = new FileReader();
            reader.readAsDataURL(uploadImageFile);
            reader.onload = function(response) {
              $image.src = response.target.result;
              $image.onload = function() {
                if ($image.width > sizeInfo.width || $image.height > sizeInfo.height) {
                  $file.value = "";
                  $status.setAttribute("data-success", "false");
                  domUtils.text(
                    $status,
                    `🤡校验失败 ==> 图片尺寸不符合，宽：${$image.width} 高：${$image.height}`
                  );
                  return;
                }
                if (fileSize > MTDyncmicAvatar.$data.avatarInfo.maxSize) {
                  $file.value = "";
                  $status.setAttribute("data-success", "false");
                  domUtils.text(
                    $status,
                    `🤡校验失败 ==> 图片大小不符合：${fileSize}byte，限制最大：${MTDyncmicAvatar.$data.avatarInfo.maxSize}byte`
                  );
                  return;
                }
                $status.setAttribute("data-success", "true");
                domUtils.text(
                  $status,
                  `🤣 通过 宽:${$image.width} 高:${$image.height} 大小(byte):${fileSize}`
                );
                successCallBack();
              };
            };
          });
        },
        /**
         * 获取上传地址
         */
        async getUploadUrl() {
          let response = await httpx.get("/home.php?mod=spacecp&ac=avatar", {
            headers: {
              "User-Agent": utils.getRandomPCUA()
            }
          });
          if (!response.status) {
            return;
          }
          if (utils.isNull(response.data.responseText)) {
            Qmsg.error("获取PC数据失败");
            return;
          }
          let dataMatch = response.data.responseText.match(
            /var[\s]*data[\s]*=[\s]*"(.+?)"/
          );
          if (dataMatch == null || dataMatch.length != 2) {
            Qmsg.error("获取变量-data失败");
            return;
          }
          let data = dataMatch[dataMatch.length - 1];
          let data_split = data.split(",");
          let uploadUrl = data_split[data_split.indexOf("src") + 1].replace(
            "images/camera.swf?inajax=1",
            "index.php?m=user&a=rectavatar&base64=yes"
          );
          return uploadUrl;
        }
      };
      const Component_Common = {
        id: "component-common",
        title: "通用",
        forms: [
          {
            text: "",
            type: "forms",
            forms: [
              {
                text: "Toast配置",
                type: "deepMenu",
                forms: [
                  {
                    text: "",
                    type: "forms",
                    forms: [
                      UISelect(
                        "Toast位置",
                        "qmsg-config-position",
                        "bottom",
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
                        (event, isSelectValue, isSelectText) => {
                          log.info("设置当前Qmsg弹出位置" + isSelectText);
                        },
                        "Toast显示在页面九宫格的位置"
                      ),
                      UISelect(
                        "最多显示的数量",
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
                        "限制Toast显示的数量"
                      ),
                      UISwitch(
                        "逆序弹出",
                        "qmsg-config-showreverse",
                        false,
                        void 0,
                        "修改Toast弹出的顺序"
                      )
                    ]
                  }
                ]
              }
              // {
              // 	text: "Cookie配置",
              // 	type: "deepMenu",
              // 	forms: [
              // 		{
              // 			text: "",
              // 			type: "forms",
              // 			forms: [
              // 				UISwitch(
              // 					"启用",
              // 					"httpx-use-cookie-enable",
              // 					false,
              // 					void 0,
              // 					"启用后，将根据下面的配置进行添加cookie"
              // 				),
              // 				UISwitch(
              // 					"使用document.cookie",
              // 					"httpx-use-document-cookie",
              // 					false,
              // 					void 0,
              // 					"自动根据请求的域名来设置对应的cookie"
              // 				),
              // 				UITextArea(
              // 					"bbs.binmt.cc",
              // 					"httpx-cookie-bbs.binmt.cc",
              // 					"",
              // 					void 0,
              // 					void 0,
              // 					"Cookie格式：xxx=xxxx;xxx=xxxx"
              // 				),
              // 			],
              // 		},
              // 	],
              // },
            ]
          },
          {
            text: "",
            type: "forms",
            forms: [
              {
                text: "功能",
                type: "deepMenu",
                forms: [
                  {
                    text: "",
                    type: "forms",
                    forms: [
                      UISwitch(
                        "新增【最新发表】",
                        "mt-addLatestPostBtn",
                        true,
                        void 0,
                        "便于快捷跳转"
                      ),
                      UISwitch(
                        "超链接文字转换",
                        "mt-link-text-to-hyperlink",
                        true,
                        void 0,
                        "自动把符合超链接格式的文字转为超链接"
                      )
                    ]
                  }
                ]
              },
              {
                text: "头像",
                type: "deepMenu",
                forms: [
                  {
                    text: "",
                    type: "forms",
                    forms: [
                      UIOwn(($li) => {
                        let $left = domUtils.createElement("div", {
                          className: "pops-panel-item-left-text",
                          innerHTML: (
                            /*html*/
                            `
											<p class="pops-panel-item-left-main-text">小头像</p>
											`
                          )
                        });
                        let $right = domUtils.createElement("div", {
                          className: "pops-panel-avatar-img",
                          innerHTML: (
                            /*html*/
                            `
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`
                          )
                        });
                        $li.appendChild($left);
                        $li.appendChild($right);
                        return $li;
                      }),
                      UIOwn(($li) => {
                        let $left = domUtils.createElement("div", {
                          className: "pops-panel-item-left-text",
                          innerHTML: (
                            /*html*/
                            `
											<p class="pops-panel-item-left-main-text">中头像</p>
											`
                          )
                        });
                        let $right = domUtils.createElement("div", {
                          className: "pops-panel-avatar-img",
                          innerHTML: (
                            /*html*/
                            `
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`
                          )
                        });
                        $li.appendChild($left);
                        $li.appendChild($right);
                        return $li;
                      }),
                      UIOwn(($li) => {
                        let $left = domUtils.createElement("div", {
                          className: "pops-panel-item-left-text",
                          innerHTML: (
                            /*html*/
                            `
											<p class="pops-panel-item-left-main-text">大头像</p>
											`
                          )
                        });
                        let $right = domUtils.createElement("div", {
                          className: "pops-panel-avatar-img",
                          innerHTML: (
                            /*html*/
                            `
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`
                          )
                        });
                        $li.appendChild($left);
                        $li.appendChild($right);
                        return $li;
                      }),
                      UIButton(
                        "修改头像",
                        `可以上传gif图片，注意图片最大限制为${Utils.formatByteToSize(
                        MTDyncmicAvatar.$data.avatarInfo.maxSize
                      )}`,
                        "上传",
                        void 0,
                        false,
                        false,
                        "primary",
                        () => {
                          MTDyncmicAvatar.init();
                        }
                      )
                    ]
                  }
                ]
              }
            ]
          }
        ]
      };
      const Component_ForumPost = {
        id: "component-forum-post",
        title: "帖子",
        forms: [
          {
            text: "功能",
            type: "forms",
            forms: [
              UISwitch(
                "拦截附件",
                "mt-forum-post-interceptionAttachment",
                true,
                void 0,
                "点击附件时弹出提示框进行确认是否下载附件"
              ),
              UISwitch(
                "图片查看优化",
                "mt-forum-post-optimizationImagePreview",
                true,
                void 0,
                "使用Viewer查看图片"
              ),
              UISwitch(
                "自动加载下一页",
                "mt-forum-post-loadNextPageComment",
                true,
                void 0,
                "无缝预览下一页"
              ),
              UISwitch(
                "代码块优化",
                "mt-forum-post-codeQuoteOptimization",
                true,
                void 0,
                "自动检测代码块语言并设置关键字高亮"
              )
            ]
          },
          {
            type: "forms",
            text: "用户信息块",
            forms: [
              UISwitch(
                "探测用户在线状态",
                "mt-forum-post-detectingUserOnlineStatus",
                false,
                void 0,
                "获取用户在线状态并在用户信息处显示状态表情"
              ),
              UISwitch(
                "显示用户等级",
                "mt-forum-post-showUserLevel",
                true,
                void 0,
                "在用户信息处显示当前用户的等级"
              )
            ]
          },
          {
            type: "forms",
            text: "右侧悬浮工具栏",
            forms: [
              UISwitch(
                "快捷收藏",
                "mt-forum-post-quickCollentBtn",
                true,
                void 0,
                "在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"
              ),
              UISwitch(
                "快捷回复",
                "mt-forum-post-quickReplyOptimization",
                true,
                void 0,
                "为快捷回复弹窗添加【一键空格】按钮"
              )
            ]
          }
        ]
      };
      const MTRegExp = {
        /** 论坛账号的凭证 */
        formhash: /formhash=(.+)&/,
        /** 论坛账号的凭证 */
        hash: /hash=(.+)&/,
        /** 用户uid */
        uid: /uid=(\d+)/,
        /** 帖子内特殊字体格式 */
        fontSpecial: /<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,
        /** 帖子链接的ptid参数 */
        ptid: /&ptid=([\d]+)/i,
        /** 帖子链接的pid参数 */
        pid: /&pid=([\d]+)/i,
        /** 链接的tid参数 */
        tid: /&tid=([\d]+)/i
      };
      const MTAutoSignIn = {
        $key: {
          signTime: "mt-sign-time"
        },
        init() {
          this.sign();
        },
        /**
         * 判断今日是否已签到
         */
        todayIsSign() {
          let signTime = this.getSignTime();
          if (signTime == null) {
            return false;
          }
          if (utils.formatTime(Date.now(), "yyyyMMdd") !== utils.formatTime(signTime, "yyyyMMdd")) {
            return false;
          }
          return true;
        },
        /**
         * 设置签到时间
         */
        setSignTime() {
          _GM_setValue(this.$key.signTime, Date.now());
        },
        /**
         * 获取签到时间
         */
        getSignTime() {
          return _GM_getValue(this.$key.signTime);
        },
        /**
         * 清空签到信息
         */
        clearSignTime() {
          _GM_deleteValue(this.$key.signTime);
        },
        /**
         * 检测是否登录
         */
        async checkLogin() {
          if (MTUtils.envIsMobile()) {
            let mobile_login_exitBtn = document.querySelector(
              ".sidenv_exit a[href*='member.php?mod=logging&action=logout']"
            );
            return mobile_login_exitBtn;
          } else {
            let pc_login = document.querySelector("#comiis_key");
            return pc_login;
          }
        },
        /**
         * 获取账号的formhash
         */
        getFormHash() {
          let $inputFormHash = (top || globalThis).document.querySelector("input[name=formhash]");
          let sidenv_exit = (top || globalThis).document.querySelector("div[class=sidenv_exit]>a");
          let sidenv_exit_match = null;
          let comiis_recommend_addkey = (top || globalThis).document.querySelector("a.comiis_recommend_addkey");
          let comiis_recommend_addkey_match = null;
          let inputFormHash = $inputFormHash ? $inputFormHash.value : null;
          if (sidenv_exit) {
            sidenv_exit_match = sidenv_exit.href.match(MTRegExp.formhash);
            sidenv_exit_match = sidenv_exit_match ? sidenv_exit_match[sidenv_exit_match.length - 1] : null;
          }
          if (comiis_recommend_addkey) {
            comiis_recommend_addkey_match = comiis_recommend_addkey.href.match(
              MTRegExp.hash
            );
            comiis_recommend_addkey_match = comiis_recommend_addkey_match ? comiis_recommend_addkey_match[comiis_recommend_addkey_match.length - 1] : null;
          }
          return inputFormHash || sidenv_exit_match || comiis_recommend_addkey_match;
        },
        /**
         * 签到
         */
        async sign() {
          let formHash = this.getFormHash();
          if (formHash == null) {
            if (document.querySelector("#comiis_picshowbox")) {
              log.info("当前为评论区的看图模式 ");
              return;
            }
            log.error("自动签到：获取账号formhash失败");
            _GM_deleteValue("mt_sign");
            Qmsg.error({
              content: "自动签到：获取账号formhash失败"
            });
            return;
          }
          if (this.todayIsSign()) {
            log.info("今日已签到");
            return;
          }
          let searchParamsData = {
            operation: "qiandao",
            format: "button",
            formhash: formHash,
            inajax: 1,
            ajaxtarget: "midaben_sign"
          };
          let response = await httpx.get(
            `/k_misign-sign.html?${utils.toSearchParamsStr(searchParamsData)}`,
            {
              headers: {
                "User-Agent": utils.getRandomPCUA()
              }
            }
          );
          if (!response.status) {
            return;
          }
          this.setSignTime();
          log.info("自动签到信息：", response);
          let CDATA = utils.parseCDATA(response.data.responseText);
          let CDATAElement = domUtils.parseHTML(`<div>${CDATA}</div>`, true, false);
          let content = domUtils.text(CDATAElement);
          if (content.includes("请稍后再试") || content.includes("您已经被列入黑名单") || content.includes("绑定手机号后才可以签到")) {
            Qmsg.error("签到：" + content, {
              timeout: 5e3
            });
            return;
          } else if (content.includes("今日已签")) {
            Qmsg.info("签到：" + content);
            return;
          } else if (response.data.responseText.includes(
            "您当前的访问请求当中含有非法字符，已经被系统拒绝"
          )) {
            Qmsg.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝", {
              timeout: 6e3
            });
            return;
          }
          let signIn_con = CDATAElement.querySelector(".con");
          let signIn_line = CDATAElement.querySelector(".line");
          if (signIn_con && signIn_line) {
            let conMatch = domUtils.text(signIn_con).match(/([0-9]+)金币/);
            let lineMatch = domUtils.text(signIn_line).match(/([0-9]+)/);
            let con = conMatch[conMatch.length - 1];
            let line = lineMatch[lineMatch.length - 1];
            log.success(`金币${con}，排名${line}`);
            Qmsg.info(
              /*html*/
              `
                <div style="display: flex;${!MTUtils.envIsMobile() ? "padding: 20px;" : ""}">
                    <div style="align-self: center;margin-right: 20px;">签到</div>
                    <div>排名 ${line}<br>金币 ${con}</div>
                </div>`,
              {
                timeout: 4e3,
                isHTML: true
              }
            );
            return;
          }
          pops.alert({
            title: {
              text: "签到的响应内容",
              position: "center"
            },
            content: {
              text: response.data.responseText,
              html: false
            },
            width: "88vw",
            height: "400px"
          });
          Qmsg.error("签到: 未知结果,请查看控制台信息", {
            timeout: 4e3
          });
        }
      };
      const Component_Sign = {
        id: "component-sigh",
        title: "签到",
        forms: [
          {
            text: "自动签到",
            type: "forms",
            forms: [
              UISwitch("启用", "mt-auto-sign", true, void 0, "自动请求签到"),
              UIButton(
                "签到信息",
                `上次签到时间：${MTAutoSignIn.getSignTime() == null ? "尚未签到" : Utils.formatTime(MTAutoSignIn.getSignTime())}`,
                "清空信息",
                void 0,
                void 0,
                void 0,
                "primary",
                (event) => {
                  let $click = event.composedPath()[0];
                  let $desc = $click.closest("li").querySelector(".pops-panel-item-left-desc-text");
                  __pops.confirm({
                    title: {
                      text: "提示 ",
                      position: "center"
                    },
                    content: {
                      text: "<p>是否清空脚本签到记录的时间?</p>",
                      html: true
                    },
                    btn: {
                      ok: {
                        enable: true,
                        callback: (event2) => {
                          MTAutoSignIn.clearSignTime();
                          Qmsg.success("删除成功");
                          domUtils.text(
                            $desc,
                            `上次签到时间：${MTAutoSignIn.getSignTime() == null ? "尚未签到" : Utils.formatTime(MTAutoSignIn.getSignTime())}`
                          );
                          event2.close();
                        }
                      }
                    },
                    mask: {
                      enable: true
                    },
                    width: "300px",
                    height: "200px"
                  });
                }
              )
            ]
          }
        ]
      };
      const Component_Guide = {
        id: "component-guide",
        title: "导读",
        forms: [
          {
            type: "forms",
            text: "",
            forms: [
              UISwitch(
                "页面美化",
                "mt-guide-beautifyPage",
                true,
                void 0,
                "美化样式"
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
            isMobile: true,
            width: this.getWidth(),
            height: this.getHeight(),
            drag: true,
            only: true
          });
        },
        /**
         * 判断是否是移动端
         */
        isMobile() {
          return window.innerWidth < 550;
        },
        /**
         * 获取设置面板的宽度
         */
        getWidth() {
          if (window.innerWidth < 550) {
            return "88vw";
          } else {
            return "550px";
          }
        },
        /**
         * 获取设置面板的高度
         */
        getHeight() {
          if (window.innerHeight > 450) {
            return "450px";
          } else {
            return "88vh";
          }
        },
        /**
         * 获取配置内容
         */
        getPanelContentConfig() {
          let configList = [
            Component_Common,
            Component_ForumPost,
            Component_Sign,
            Component_Guide
          ];
          return configList;
        }
      };
      const MTIdentifyLinks = () => {
        var clearLink, excludedTags, filter, linkMixInit, linkPack, linkify, observePage, observer, setLink, url_regexp, xpath;
        url_regexp = /((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi;
        clearLink = function(a) {
          var b;
          a = null != (b = a.originalTarget) ? b : a.target;
          if (null != a && "a" === a.localName && -1 !== a.className.indexOf("texttolink") && (b = a.getAttribute("href"), 0 !== b.indexOf("http") && 0 !== b.indexOf("ed2k://") && 0 !== b.indexOf("thunder://")))
            return a.setAttribute("href", "http://" + b);
        };
        document.addEventListener("mouseover", clearLink);
        setLink = function(a) {
          if (typeof a != "object") {
            return;
          }
          if (null != a && typeof a.parentNode !== "undefined" && typeof a.parentNode.className !== "undefined" && typeof a.parentNode.className.indexOf === "function" && -1 === a.parentNode.className.indexOf("texttolink") && "#cdata-section" !== a.nodeName) {
            var b = a.textContent.replace(
              url_regexp,
              '<a href="$1" target="_blank" class="texttolink">$1</a>'
            );
            if (a.textContent.length !== b.length) {
              var c = document.createElement("span");
              c.innerHTML = b;
              console.log(`识别: ${c.querySelector("a")}`);
              return a.parentNode.replaceChild(c, a);
            }
          }
        };
        excludedTags = "a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(
          " "
        );
        xpath = `//text()[not(ancestor::${excludedTags.join(
        ") and not(ancestor::"
      )})]`;
        filter = new RegExp(`^(${excludedTags.join("|")})$`, "i");
        linkPack = function(a, b) {
          var c, d;
          if (b + 1e4 < a.snapshotLength) {
            var e = c = b;
            for (d = b + 1e4; b <= d ? c <= d : c >= d; e = b <= d ? ++c : --c)
              setLink(a.snapshotItem(e));
            setTimeout(function() {
              return linkPack(a, b + 1e4);
            }, 15);
          } else
            for (e = c = b, d = a.snapshotLength; b <= d ? c <= d : c >= d; e = b <= d ? ++c : --c)
              setLink(a.snapshotItem(e));
        };
        linkify = function(a) {
          a = document.evaluate(
            xpath,
            a,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null
          );
          return linkPack(a, 0);
        };
        observePage = function(a) {
          for (a = document.createTreeWalker(
            a,
            NodeFilter.SHOW_TEXT,
            {
              acceptNode: function(a2) {
                if (!filter.test(a2.parentNode.localName))
                  return NodeFilter.FILTER_ACCEPT;
              }
            },
            false
          ); a.nextNode(); )
            setLink(a.currentNode);
        };
        observer = new window.MutationObserver(function(a) {
          var b, c;
          var d = 0;
          for (b = a.length; d < b; d++) {
            var e = a[d];
            if ("childList" === e.type) {
              var g = e.addedNodes;
              var f = 0;
              for (c = g.length; f < c; f++) e = g[f], observePage(e);
            }
          }
        });
        linkMixInit = function() {
          return linkify(document.body), observer.observe(document.body, {
            childList: true,
            subtree: true
          });
        };
        var clearlinkF = function(a) {
          var url = a.getAttribute("href");
          if (0 !== url.indexOf("http") && 0 !== url.indexOf("ed2k://") && 0 !== url.indexOf("thunder://"))
            return a.setAttribute("href", "http://" + url);
        }, clearlinkE = function() {
          for (var a = document.getElementsByClassName("texttolink"), b = 0; b < a.length; b++)
            clearlinkF(a[b]);
        };
        setTimeout(clearlinkE, 1500);
        setTimeout(linkMixInit, 100);
      };
      const pathname = globalThis.location.pathname;
      const search = globalThis.location.search;
      new URLSearchParams(search);
      const Router = {
        /**
         * 克米签到页面
         */
        isKMiSign() {
          return pathname.startsWith("/k_misign-sign.html");
        },
        /**
         * 帖子
         */
        isPost() {
          return pathname.startsWith("/thread-") || pathname.startsWith("/forum.php") && search.startsWith("?mod=viewthread");
        },
        /**
         * 首页、精华
         */
        isPage() {
          return Boolean(pathname.match(/^\/page-([0-9]+).html/g));
        },
        /**
         * 导读链接
         */
        isGuide() {
          return pathname.startsWith("/forum.php") && search.startsWith("?mod=guide");
        },
        /**
         * 板块
         */
        isPlate() {
          return Boolean(pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g));
        },
        /**
         * 搜索页面
         */
        isSearch() {
          return pathname.startsWith("/search.php");
        },
        /**
         * 空间
         */
        isSpace() {
          return pathname.startsWith("/home.php") && search.startsWith("?mod=space");
        },
        /**
         * 我的个人空间
         */
        isMySpace() {
          return pathname.startsWith("/home.php") && search.startsWith("?mod=space&do=profile&mycenter");
        },
        /**
         * 个人空间页的@点进去
         */
        isSpaceWithAt() {
          return pathname.startsWith("/space-uid-");
        },
        /**
         * 社区列表
         */
        isForumList() {
          return pathname.startsWith("/forum.php") && search.startsWith("?forumlist");
        },
        /**
         * 消息提醒
         */
        isMessage() {
          return pathname.startsWith("/home.php") && search.startsWith("?mod=space&do=notice");
        },
        /**
         * 消息提醒列表
         */
        isMessageList() {
          return pathname.startsWith("/home.php") && search.startsWith("?mod=space&do=pm");
        },
        /**
         * 积分商城
         */
        isPointsMall() {
          return pathname.startsWith("/keke_integralmall-keke_integralmall.html") || pathname.startsWith("/plugin.php") && search.startsWith("?id=keke_integralmal");
        },
        /**
         * 帖子发布/回复页面
         */
        isPostPublish() {
          return pathname.startsWith("/forum.php") && search.startsWith("?mod=post");
        },
        /**
         * 投票页面
         */
        isPostPublish_voting() {
          return pathname.startsWith("/forum.php") && search.includes("&special=1") || search.includes("&fid=42");
        },
        /**
         * 帖子编辑页面
         */
        isPostPublish_edit() {
          return this.isPostPublish() && search.includes("&action=edit");
        },
        /**
         * 发帖页面，该页面是尚未存入草稿
         */
        isPostPublish_newthread() {
          return this.isPostPublish() && search.includes("&action=newthread");
        },
        /**
         * 回复编辑页面
         */
        isPostPublish_reply() {
          return this.isPostPublish() && search.includes("&action=reply");
        }
      };
      const MTForumPostRightToolBar = {
        init() {
          PopsPanel.execMenuOnce("mt-forum-post-quickCollentBtn", () => {
            this.quickCollentBtn();
          });
          PopsPanel.execMenuOnce("mt-forum-post-quickReplyOptimization", () => {
            this.quickReplyOptimization();
          });
        },
        /**
         * 快捷收藏
         */
        quickCollentBtn() {
          log.info(`快捷收藏`);
          var own_formhash = $(
            '#scform input[name="formhash"]'
          ).value;
          var collect_href_id = MTUtils.getThreadId(window.location.href);
          var collect_href = `/home.php?mod=spacecp&ac=favorite&type=thread&id=${collect_href_id}&formhash=${own_formhash}`;
          var $collect = document.createElement("span");
          var $scrollTop = document.querySelector("#scrolltop");
          $collect.innerHTML = `
        <a href="${collect_href}" 
            id="k_favorite"
            onclick="showWindow(this.id, this.href, 'get', 0);"
            onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
            <img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
                     height="26" 
                     width="26" 
                     style="position:absolute;top:10px;left:11px">
        </a>
        `;
          domUtils.prepend($scrollTop, $collect);
        },
        /**
         * 快捷回复优化
         */
        quickReplyOptimization() {
          log.info(`快捷回复优化`);
          let $ele = $("#scrolltop > span:nth-child(2) > a");
          domUtils.on($ele, "click", function() {
            _unsafeWindow.showWindow("reply", this.href);
            utils.waitNode("#moreconf", 1e4).then(($moreconf) => {
              if (!$moreconf) {
                return;
              }
              let $oneKeySpace = domUtils.createElement(
                "button",
                {
                  innerText: "一键空格",
                  type: "button",
                  id: "insertspace2"
                },
                {
                  style: "float: left;"
                }
              );
              domUtils.on($oneKeySpace, "click", (event) => {
                utils.preventEvent(event);
                domUtils.val(
                  $("#postmessage"),
                  domUtils.val($("#postmessage")) + "           "
                );
              });
              domUtils.append($moreconf, $oneKeySpace);
            });
          });
        }
      };
      const MTForumPost = {
        $flag: {
          isSetHljsCSS: false
        },
        init() {
          MTForumPostRightToolBar.init();
          PopsPanel.execMenuOnce("mt-forum-post-autoExpandContent", () => {
            return this.autoExpandContent();
          });
          PopsPanel.execMenuOnce("mt-forum-post-repairImageWidth", () => {
            return this.repairImageWidth();
          });
          PopsPanel.execMenu("mt-forum-post-removeFontStyle", () => {
            this.removeFontStyle();
          });
          PopsPanel.execMenu("mt-forum-post-removeCommentFontStyle", () => {
            this.removeCommentFontStyle();
          });
          domUtils.ready(() => {
            PopsPanel.execMenuOnce("mt-forum-post-loadNextPageComment", () => {
              this.loadNextPageComment();
            });
            PopsPanel.execMenuOnce("mt-forum-post-codeQuoteOptimization", () => {
              this.codeQuoteOptimization();
            });
            PopsPanel.execMenuOnce("mt-forum-post-optimizationImagePreview", () => {
              this.optimizationImagePreview();
            });
            PopsPanel.execMenuOnce("mt-forum-post-interceptionAttachment", () => {
              this.setAttachmentsClickTip();
            });
            PopsPanel.execMenu("mt-forum-post-detectingUserOnlineStatus", () => {
              this.detectingUserOnlineStatus();
            });
            PopsPanel.execMenu("mt-forum-post-showUserLevel", () => {
              this.showUserLevel();
            });
          });
        },
        /**
         * 自动展开帖子内容
         */
        autoExpandContent() {
          log.info(`自动展开帖子内容`);
          return addStyle(
            /*css*/
            `
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `
          );
        },
        /**
         * 修复图片宽度
         */
        repairImageWidth() {
          log.info(`修复图片宽度`);
          return addStyle(
            /*css*/
            `
        .comiis_messages img{
            max-width: 100% !important;
        }`
          );
        },
        /**
         * 移除帖子字体效果
         */
        removeFontStyle() {
          log.info(`移除帖子字体效果`);
          let $messageTable = document.querySelector(
            ".comiis_a.comiis_message_table"
          );
          if (!$messageTable) {
            return;
          }
          $messageTable.innerHTML = $messageTable.innerHTML.replace(
            MTRegExp.fontSpecial,
            ""
          );
        },
        /**
         * 移除评论区的字体效果
         */
        removeCommentFontStyle() {
          var _a2;
          log.info(`移除评论区的字体效果`);
          document.querySelectorAll("font");
          var postForumMain = ((_a2 = document.querySelector(".comiis_postlist .comiis_postli")) == null ? void 0 : _a2.innerHTML) || "";
          if (postForumMain !== "") {
            document.querySelectorAll("font").forEach(($font) => {
              if (!postForumMain.includes($font.innerHTML)) {
                $font.removeAttribute("color");
                $font.removeAttribute("style");
                $font.removeAttribute("size");
              }
            });
            document.querySelectorAll(".comiis_message.message").forEach(($message) => {
              if (postForumMain.includes($message.innerHTML)) {
                $message.innerHTML = $message.innerHTML.replace(
                  MTRegExp.fontSpecial,
                  ""
                );
                let $next = $message.nextElementSibling;
                if ($next && $next.localName === "strike") {
                  $next.outerHTML = $next.outerHTML.replace(/^<strike>(\n|)/g, "").replace(/<\/strike>$/g, "");
                }
              }
            });
          }
          document.querySelectorAll(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach((item) => {
            let $parent = item.parentElement;
            if ($parent && $parent.localName === "strike") {
              $parent.outerHTML = $parent.outerHTML.replace(/^<strike>(\n|)/g, "").replace(/<\/strike>$/g, "");
            }
          });
        },
        /**
         * 自动加载下一页评论
         */
        loadNextPageComment() {
          log.info(`自动加载下一页评论`);
          if (document.title.includes("提示信息 - MT论坛")) {
            return;
          }
          if ($$(".pgbtn").length == 0) {
            log.warn("没有找到下一页按钮");
            return;
          }
          var getPageInfo = async function(url) {
            var _a2, _b;
            let response = await httpx.get(url, {
              headers: {
                "User-Agent": utils.getRandomPCUA()
              },
              allowInterceptConfig: false
            });
            if (!response.status) {
              Qmsg.error("网络异常，请求下一页失败");
              return;
            }
            var pageHTML = utils.parseFromString(response.data.responseText);
            var nextPageBtn = pageHTML.querySelector(".pgbtn a");
            (_a2 = pageHTML.querySelector("#postlistreply")) == null ? void 0 : _a2.remove();
            (_b = pageHTML.querySelector(".bm_h.comiis_snvbt")) == null ? void 0 : _b.remove();
            return {
              url: nextPageBtn ? nextPageBtn.getAttribute("href") : null,
              postlist: pageHTML.querySelector("#postlist"),
              pgbtn: pageHTML.querySelector(".pgbtn"),
              pgs: pageHTML.querySelector(".pgs.mtm")
            };
          };
          var scrollEvent = async function() {
            var nextURL = $(".pgbtn a").getAttribute("href");
            if (nextURL) {
              let pageInfo = await getPageInfo(nextURL);
              if (pageInfo) {
                if (!pageInfo["url"]) {
                  log.error("最后一页，取消监听");
                  domUtils.off(document, "scroll", lockFn.run);
                  domUtils.remove(".pgbtn");
                }
                if (pageInfo["postlist"]) {
                  domUtils.append("#postlist", domUtils.html(pageInfo["postlist"]));
                }
                if (pageInfo["pgbtn"]) {
                  domUtils.html(".pgbtn", domUtils.html(pageInfo["pgbtn"]));
                }
                if (pageInfo["pgs"]) {
                  domUtils.html(".pgs.mtm", domUtils.html(pageInfo["pgs"]));
                }
                MTForumPost.init();
              }
            } else {
              log.error("获取下一页元素失败");
            }
          };
          let lockFn = new utils.LockFunction(async () => {
            if (utils.isNearBottom()) {
              await scrollEvent();
            }
          });
          domUtils.on(document, "scroll", lockFn.run);
        },
        /**
         * 代码块优化
         **/
        codeQuoteOptimization() {
          log.info(`代码块优化`);
          function hljs_smali(hljs2) {
            var smali_instr_low_prio = [
              "add",
              "and",
              "cmp",
              "cmpg",
              "cmpl",
              "const",
              "div",
              "double",
              "float",
              "goto",
              "if",
              "int",
              "long",
              "move",
              "mul",
              "neg",
              "new",
              "nop",
              "not",
              "or",
              "rem",
              "return",
              "shl",
              "shr",
              "sput",
              "sub",
              "throw",
              "ushr",
              "xor"
            ];
            var smali_instr_high_prio = [
              "aget",
              "aput",
              "array",
              "check",
              "execute",
              "fill",
              "filled",
              "goto/16",
              "goto/32",
              "iget",
              "instance",
              "invoke",
              "iput",
              "monitor",
              "packed",
              "sget",
              "sparse"
            ];
            var smali_keywords = [
              "transient",
              "constructor",
              "abstract",
              "final",
              "synthetic",
              "public",
              "private",
              "protected",
              "static",
              "bridge",
              "system"
            ];
            return {
              aliases: ["smali"],
              contains: [
                {
                  className: "string",
                  begin: '"',
                  end: '"',
                  relevance: 0
                },
                hljs2.COMMENT("#", "$", {
                  relevance: 0
                }),
                {
                  className: "keyword",
                  variants: [
                    { begin: "\\s*\\.end\\s[a-zA-Z0-9]*" },
                    { begin: "^[ ]*\\.[a-zA-Z]*", relevance: 0 },
                    { begin: "\\s:[a-zA-Z_0-9]*", relevance: 0 },
                    { begin: "\\s(" + smali_keywords.join("|") + ")" }
                  ]
                },
                {
                  className: "built_in",
                  variants: [
                    {
                      begin: "\\s(" + smali_instr_low_prio.join("|") + ")\\s"
                    },
                    {
                      begin: "\\s(" + smali_instr_low_prio.join("|") + ")((\\-|/)[a-zA-Z0-9]+)+\\s",
                      relevance: 10
                    },
                    {
                      begin: "\\s(" + smali_instr_high_prio.join("|") + ")((\\-|/)[a-zA-Z0-9]+)*\\s",
                      relevance: 10
                    }
                  ]
                },
                {
                  className: "class",
                  begin: "L[^(;:\n]*;",
                  relevance: 0
                },
                {
                  begin: "[vp][0-9]+"
                }
              ]
            };
          }
          addStyle(
            /*css*/
            `
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`
          );
          hljs.registerLanguage("smali", hljs_smali);
          let lockFn = new utils.LockFunction(
            () => {
              function setElementHighlight(ele, language = "java") {
                if (!ele.oldValue) {
                  ele.oldValue = ele.textContent;
                }
                ele.innerHTML = hljs.highlight(ele.oldValue, { language }).value.replace(/\\n$/gi, "");
              }
              document.querySelectorAll("em[onclick^=copycode]").forEach((coypCodeElement) => {
                if (coypCodeElement.nextElementSibling && typeof coypCodeElement.nextElementSibling.className === "string" && coypCodeElement.nextElementSibling.className == "code-select-language") {
                  return;
                }
                let codeLanguage = hljs.highlightAuto(
                  domUtils.text(
                    coypCodeElement.parentElement.querySelector(
                      "div[id^=code]"
                    )
                  )
                ).language;
                let selectElement = document.createElement("select");
                let selectLanguageList = hljs.listLanguages().sort();
                selectLanguageList = selectLanguageList.concat("自动检测");
                let selectInnerHTML = "";
                selectLanguageList.forEach((languageName) => {
                  if (languageName.startsWith("自动检测")) {
                    selectInnerHTML += `<option data-value="${codeLanguage}" selected="selected">${languageName}(${codeLanguage})</option>`;
                  } else {
                    selectInnerHTML += `<option data-value="${languageName}">${languageName}</option>`;
                  }
                });
                selectElement.className = "code-select-language";
                selectElement.innerHTML = selectInnerHTML;
                domUtils.on(selectElement, "change", () => {
                  let changeCodeLanguage = selectElement.selectedOptions[0].getAttribute("data-value");
                  log.info("切换代码块语言: ", changeCodeLanguage);
                  domUtils.parent(selectElement).querySelectorAll("li").forEach((liElement) => {
                    setElementHighlight(liElement, changeCodeLanguage);
                  });
                });
                utils.preventEvent(selectElement, "click");
                utils.preventEvent(coypCodeElement, "click");
                coypCodeElement.insertAdjacentElement("afterend", selectElement);
                utils.dispatchEvent(selectElement, "change");
              });
              let blockcodeElementList = document.querySelectorAll(".blockcode");
              blockcodeElementList.forEach((ele) => ele.className = "hljs");
            },
            this,
            500
          );
          utils.mutationObserver(document, {
            config: {
              subtree: true,
              childList: true
            },
            callback: () => {
              lockFn.run();
            }
          });
        },
        /**
         * 图片查看优化
         */
        optimizationImagePreview() {
          log.info(`图片查看优化`);
          let blackListNoViewIMG = [
            {
              hostName: "avatar-bbs.mt2.cn",
              pathName: "*"
            },
            {
              hostName: "cdn-bbs.mt2.cn",
              pathName: "^(/static(/|//)image|/template)"
            },
            {
              hostName: window.location.hostname,
              pathName: "^(/static(/|//)image|/template)"
            },
            {
              hostName: window.location.hostname,
              pathName: "/uc_server/avatar.php"
            }
          ];
          function viewIMG(imgList = [], index = 0) {
            let viewerULNodeHTML = "";
            imgList.forEach((item) => {
              viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
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
            viewer.view(index);
            viewer.zoomTo(1);
            viewer.show();
          }
          function handleImage() {
            document.querySelectorAll(
              "#postlist .comiis_vrx:not([data-isHandlingViewIMG])"
            ).forEach((item) => {
              item.setAttribute("data-isHandlingViewIMG", "true");
              let clickShowIMGList = [];
              item.querySelectorAll("img").forEach(($img) => {
                let IMG_URL = $img.src;
                let IMG_URL_HOSTNAME = new URL(IMG_URL).hostname;
                let IMG_URL_PATHNAME = new URL(IMG_URL).pathname;
                let imgParentNode = $img.parentElement;
                if (imgParentNode.nodeName.toLowerCase() === "a" && imgParentNode.getAttribute("href") === IMG_URL) {
                  imgParentNode.setAttribute("href", "javascript:;");
                  imgParentNode.removeAttribute("target");
                }
                let isMatching = false;
                for (let item2 of blackListNoViewIMG) {
                  if (IMG_URL_HOSTNAME.indexOf(item2["hostName"]) != -1 && IMG_URL_PATHNAME.match(item2["pathName"])) {
                    isMatching = true;
                    break;
                  }
                }
                if (isMatching) {
                  return;
                }
                clickShowIMGList = [...clickShowIMGList, IMG_URL];
                $img.removeAttribute("onclick");
                $img.setAttribute("onclick", "");
                domUtils.on($img, "click", function() {
                  log.info("点击图片", $img);
                  let _index_ = clickShowIMGList.findIndex((_img_) => {
                    return _img_ == IMG_URL;
                  });
                  viewIMG(clickShowIMGList, _index_);
                });
              });
            });
          }
          let lockFn = new utils.LockFunction(() => {
            handleImage();
          });
          utils.mutationObserver(document, {
            config: {
              subtree: true,
              childList: true
            },
            callback: () => {
              lockFn.run();
            }
          });
        },
        /**
         * 附件点击提醒
         */
        setAttachmentsClickTip() {
          log.info(`附件点击提醒`);
          function handleClick(item) {
            if (item.hasAttribute("href")) {
              let attachmentId = item.hasAttribute("id") ? item.id : item.parentElement.id;
              let attachmentURL = item.getAttribute("href");
              let attachmentName = item.innerText;
              let attachmentMenu = document.querySelector(
                `#${attachmentId}_menu`
              );
              if (attachmentMenu.innerText.indexOf("金币") === -1) {
                return;
              }
              console.log("发现附件", item);
              console.log("该附件是金币附件，拦截！");
              item.setAttribute("data-href", attachmentURL);
              item.style.setProperty("cursor", "pointer");
              item.removeAttribute("href");
              item.innerText = "【已拦截】" + attachmentName;
              item.onclick = function() {
                __pops.confirm({
                  title: {
                    text: "提示",
                    position: "center"
                  },
                  content: {
                    text: (
                      /*html*/
                      `<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${attachmentName}</a> ？<br /><br />`
                    ),
                    html: true
                  },
                  btn: {
                    ok: {
                      callback: (details) => {
                        window.open(attachmentURL, "_blank");
                        details.close();
                      }
                    }
                  },
                  mask: {
                    enable: true
                  },
                  width: "400px",
                  height: "200px"
                });
              };
            }
          }
          utils.mutationObserver(document.documentElement, {
            callback: () => {
              document.querySelectorAll(".attnm a").forEach((item) => {
                handleClick(item);
              });
              document.querySelectorAll(".comiis_attach a").forEach((item) => {
                handleClick(item);
              });
              document.querySelectorAll("span[id*=attach_] a").forEach((item) => {
                handleClick(item);
              });
            },
            immediate: true,
            config: { childList: true, subtree: true }
          });
        },
        /**
         * 探测用户在线状态
         */
        async detectingUserOnlineStatus() {
          var _a2;
          log.info(`探测用户在线状态`);
          let $favatarList = Array.from(
            $$(".pls.favatar:not([data-is-detectingUserOnlineStatus])")
          );
          function getStatusIcon(isOffLine) {
            return domUtils.createElement(
              "img",
              {
                smilied: isOffLine ? "1353" : "1384",
                loading: "lazy",
                src: isOffLine ? "https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png" : "https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png"
              },
              {
                style: "border:0;float:right;"
              }
            );
          }
          function setAvatarOnlineStatus($ele, isOffLine) {
            let $icon = getStatusIcon(isOffLine);
            domUtils.prepend($ele, $icon);
          }
          for (let index = 0; index < $favatarList.length; index++) {
            const $favatar = $favatarList[index];
            var $sendMessage = $favatar.querySelector(".comiis_o.cl");
            if (!$sendMessage) {
              return;
            }
            let $kmfxx = $sendMessage.querySelector("a.kmfxx");
            if (!$kmfxx) {
              return;
            }
            $favatar.setAttribute("data-is-detectingUserOnlineStatus", "true");
            let sendMessageUrl = $kmfxx.href;
            let response = await httpx.get(sendMessageUrl, {
              fetch: true,
              allowInterceptConfig: false
            });
            if (!response.status) {
              setAvatarOnlineStatus($favatar, true);
              return;
            }
            let doc = domUtils.parseHTML(response.data.responseText, true, true);
            let $flb = doc.querySelector(".flb");
            if ($flb) {
              let statusText = (_a2 = domUtils.text($flb)) == null ? void 0 : _a2.trim();
              let isOffLine = statusText.endsWith("……[离线]");
              setAvatarOnlineStatus($favatar, isOffLine);
            } else {
              setAvatarOnlineStatus($favatar, true);
            }
          }
        },
        /**
         * 显示用户等级
         */
        showUserLevel() {
          log.info(`显示用户等级`);
          $$(".pls.favatar").forEach((userAvatarItem) => {
            let userLevel = "0级";
            let userInfo = userAvatarItem.querySelector("tr");
            let currentLevelText = userAvatarItem.querySelector("p em").innerText;
            let userLevelText = document.createElement("td");
            userLevelText.setAttribute("style", "border-left: 1px solid #e3e3e3;");
            switch (currentLevelText) {
              case "幼儿园":
                userLevel = "1级";
                break;
              case "小学生":
                userLevel = "2级";
                break;
              case "初中生":
                userLevel = "3级";
                break;
              case "高中生":
                userLevel = "4级";
                break;
              case "大学生":
                userLevel = "5级";
                break;
              case "硕士生":
                userLevel = "6级";
                break;
              case "博士生":
              case "实习版主":
              case "版主":
              case "审核员":
                userLevel = "7级";
                break;
              case "博士后":
              case "超级版主":
              case "网站编辑":
                userLevel = "8级";
                break;
              case "管理员":
              case "信息监察员":
                userLevel = "9级";
                break;
            }
            userLevelText.innerHTML = `<p><a class="dj">${userLevel}</a></p>Lv`;
            userInfo.appendChild(userLevelText);
          });
        }
      };
      const MTGuide = {
        init() {
          PopsPanel.execMenuOnce("mt-guide-beautifyPage", () => {
            return this.beautifyPage();
          });
        },
        /**
         * 页面美化
         */
        beautifyPage() {
          log.info(`页面美化`);
          addStyle(
            /*css*/
            `
			table>tbody[id^=normal]>tr{display:none}
			.xst{font-size:15px}
			td.author_img{width:50px;padding:15px 0}
			td.author_img img{width:40px;height:40px;border-radius:50%}
			.list_author{margin-top:2px;color:#999;font-size:12px}
			.bankuai_tu_by a{color:#999!important}
			.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
			tbody a:hover{text-decoration:none;color:#3498db}
			.byg_th_align em+a{margin-right:5px}
		`
          );
          $$(".bm_c table tbody").forEach((item) => {
            let tableNode = _unsafeWindow.jQuery(item);
            let commonHTML = tableNode.find("th.common").html();
            let forumUrl = tableNode.find("th.common")[0].querySelectorAll("a")[0].getAttribute("href");
            let mid = null;
            let uid = tableNode.find("td.by>cite>a")[0].getAttribute("href").match(/uid-(\d+)/)[1];
            let newHTML = (
              /*html*/
              `
			<td class="author_img">
				<a href="space-uid-${uid}.html" c="1" mid="${mid}">
					<img src="${MTUtils.getAvatar(uid, "middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					${commonHTML}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${tableNode.find("td.by>cite>a")[0].innerHTML}
						${tableNode.find("td.by>em>span")[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${tableNode.find("td.by>cite>a")[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${tableNode.find("td.by>em>a")[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${forumUrl}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${tableNode.find("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${tableNode.find("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`
            );
            let newListNode = _unsafeWindow.jQuery(newHTML);
            _unsafeWindow.jQuery(newListNode.find(".byg_th_align")[0].children[0]).before(`<em>[${tableNode.find("tr>td.by>a")[0].outerHTML}]</em>`);
            tableNode.html(newListNode);
          });
        }
      };
      const UIInput = function(text, key, defaultValue, description, changeCallBack, placeholder = "", isNumber, isPassword, afterAddToUListCallBack) {
        let result = {
          text,
          type: "input",
          isNumber: Boolean(isNumber),
          isPassword: Boolean(isPassword),
          props: {},
          attributes: {},
          description,
          afterAddToUListCallBack,
          getValue() {
            return this.props[PROPS_STORAGE_API].get(key, defaultValue);
          },
          callback(event, value, valueAsNumber) {
            this.props[PROPS_STORAGE_API].set(
              key,
              isNumber ? valueAsNumber : value
            );
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
      const UITextArea = function(text, key, defaultValue, description, changeCallBack, placeholder = "", disabled) {
        let result = {
          text,
          type: "textarea",
          attributes: {},
          props: {},
          description,
          placeholder,
          disabled,
          getValue() {
            return this.props[PROPS_STORAGE_API].get(key, defaultValue);
          },
          callback(event, value) {
            this.props[PROPS_STORAGE_API].set(key, value);
          }
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
      class RuleEditView {
        constructor(option) {
          __publicField(this, "option");
          this.option = option;
        }
        /**
         * 显示视图
         */
        showView() {
          var _a2;
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
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `
              ),
              html: true
            },
            btn: utils.assign(
              {
                ok: {
                  callback() {
                    $submit.click();
                  }
                }
              },
              this.option.btn || {},
              true
            ),
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

                ${((_a2 = this.option) == null ? void 0 : _a2.style) ?? ""}
            `
            ),
            width: window.innerWidth > 500 ? "500px" : "88vw",
            height: window.innerHeight > 500 ? "500px" : "80vh"
          });
          let $form = $dialog.$shadowRoot.querySelector(
            ".rule-form-container"
          );
          let $submit = $dialog.$shadowRoot.querySelector(
            "input[type=submit]"
          );
          let $ulist = $dialog.$shadowRoot.querySelector(".rule-form-ulist");
          let view = this.option.getView(this.option.data());
          $ulist.appendChild(view);
          domUtils.on($form, "submit", (event) => {
            utils.preventEvent(event);
            let result = this.option.onsubmit($form, this.option.data());
            if (!result.success) {
              return;
            }
            $dialog.close();
            this.option.dialogCloseCallBack(true);
          });
        }
      }
      const MTCommentFilter = {
        $el: {
          isFilterElementHTML: []
        },
        $key: {
          STORAGE_KEY: "mt-post-comment-filter-rule"
        },
        init() {
          this.registerMenu();
          if (Router.isPost()) {
            let allData = this.getData();
            let lockFn = new utils.LockFunction(() => {
              this.runFilter(allData);
            });
            utils.mutationObserver(document, {
              config: {
                subtree: true,
                childList: true
              },
              callback: () => {
                lockFn.run();
              }
            });
          }
        },
        /**
         * 注册菜单
         */
        registerMenu() {
          GM_Menu.add({
            key: "comment-filter",
            text: "⚙ 评论过滤器",
            autoReload: false,
            isStoreValue: false,
            showText(text) {
              return text;
            },
            callback: () => {
              this.showView();
            }
          });
        },
        /**
         * 执行过滤
         */
        runFilter(filterData) {
          let isBlackListUser = function(postForumInfo) {
            for (const userName of filterData["userBlackList"]) {
              if (userName == postForumInfo.userName || userName == postForumInfo.userUID) {
                log.success("评论过滤器：黑名单用户", postForumInfo);
                return true;
              }
            }
            return false;
          };
          let isWhiteListUser = function(postForumInfo) {
            for (const userName of filterData["userWhiteList"]) {
              if (userName === postForumInfo.userName || userName === postForumInfo.userUID) {
                log.success("评论过滤器：白名单用户", postForumInfo);
                return true;
              }
            }
            return false;
          };
          document.querySelectorAll(".comiis_vrx").forEach((item) => {
            var _a2, _b, _c, _d, _e, _f, _g;
            if (item.querySelector(".plc .pti .authi .show")) {
              return;
            }
            let postForumInfo = {
              userName: ((_a2 = item.querySelector(".pls .authi a")) == null ? void 0 : _a2.innerText) || "",
              userUID: ((_e = (_d = (_c = (_b = item.querySelector(".pls .authi a")) == null ? void 0 : _b.href) == null ? void 0 : _c.match(MTRegExp.uid)) == null ? void 0 : _d[1]) == null ? void 0 : _e.trim()) || "",
              content: ((_g = (_f = item.querySelector(".plc td.t_f")) == null ? void 0 : _f.innerText) == null ? void 0 : _g.trim()) || "",
              isAuthor: Boolean(item.querySelector("span.top_lev"))
            };
            if (isWhiteListUser(postForumInfo)) {
              return;
            }
            if (filterData["replyFlag"] && item.querySelector(".comiis_quote")) {
              let comiis_quote_Element = item.querySelector(".comiis_quote");
              this.$el.isFilterElementHTML.push(comiis_quote_Element.outerHTML);
              comiis_quote_Element.remove();
            }
            if (postForumInfo.isAuthor && !filterData["avatarFlag"]) {
              return;
            }
            if (isBlackListUser(postForumInfo)) {
              this.$el.isFilterElementHTML.push(item.outerHTML);
              item.remove();
              return;
            }
            if (typeof filterData["minLength"] === "number" && filterData["minLength"] > postForumInfo.content.length) {
              return;
            }
            if (typeof filterData["keywordLength"] === "number" && filterData["keywordLength"] < postForumInfo.content.length) {
              return;
            }
            for (const keywordItem of filterData["keywords"]) {
              if (typeof keywordItem !== "string") {
                continue;
              }
              let keywordPattern = new RegExp(keywordItem);
              if (postForumInfo.content.match(keywordPattern)) {
                console.log("评论过滤器：", postForumInfo);
                this.$el.isFilterElementHTML.push(item.outerHTML);
                item.remove();
                return;
              }
            }
          });
        },
        /**
         * 显示视图
         */
        showView() {
          const that = this;
          function generateStorageApi(data) {
            return {
              get(key, defaultValue) {
                let localData = that.getData();
                let value = Reflect.get(localData, key, defaultValue);
                if (key === "keywords" || key === "userWhiteList" || key === "userBlackList") {
                  value = value.join("\n");
                }
                return value;
              },
              set(key, value) {
                if (key === "keywords" || key === "userWhiteList" || key === "userBlackList") {
                  value = value.split("\n").filter((item) => item.trim() != "");
                }
                Reflect.set(data, key, value);
                that.setData(data);
              }
            };
          }
          let popsPanelContentUtils = __pops.config.panelHandleContentUtils();
          let view = new RuleEditView({
            title: "评论过滤器",
            data: () => {
              return this.getData();
            },
            getView: (data) => {
              let $fragment = document.createDocumentFragment();
              let enable_template = UISwitch("启用", "enable", true);
              Reflect.set(
                enable_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $enable = popsPanelContentUtils.createSectionContainerItem_switch(
                enable_template
              );
              let replyFlag_template = UISwitch("处理回复评论", "replyFlag", false);
              Reflect.set(
                replyFlag_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $replyFlag = popsPanelContentUtils.createSectionContainerItem_switch(
                replyFlag_template
              );
              let avatarFlag_template = UISwitch("处理作者评论", "avatarFlag", false);
              Reflect.set(
                avatarFlag_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $avatarFlag = popsPanelContentUtils.createSectionContainerItem_switch(
                avatarFlag_template
              );
              let viewthreadFlag_template = UISwitch(
                '处理从"搜索页面"或"我的帖子提醒页面"进入的网站',
                "viewthreadFlag",
                false
              );
              Reflect.set(
                viewthreadFlag_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $viewthreadFlag = popsPanelContentUtils.createSectionContainerItem_switch(
                viewthreadFlag_template
              );
              let minLength_template = UIInput(
                "匹配的评论内容长度最小值",
                "minLength",
                5,
                "小于此长度的评论就算关键字匹配成功了也不会被排除",
                void 0,
                "",
                true
              );
              Reflect.set(
                minLength_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $minLength = popsPanelContentUtils.createSectionContainerItem_input(
                minLength_template
              );
              let keywordLength = UIInput(
                "匹配的评论内容长度最大值",
                "keywordLength",
                8,
                "大于此长度的评论就算关键字匹配成功了也不会被排除",
                void 0,
                "",
                true
              );
              Reflect.set(
                keywordLength.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $keywordLength = popsPanelContentUtils.createSectionContainerItem_input(keywordLength);
              let keywords_template = UITextArea(
                "评论关键字",
                "keywords",
                "",
                "多个评论关键字换行分割"
              );
              Reflect.set(
                keywords_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $keywords = popsPanelContentUtils.createSectionContainerItem_textarea(
                keywords_template
              );
              let userBlackList_template = UITextArea(
                "黑名单用户",
                "userBlackList",
                "",
                "多个用户换行分割"
              );
              Reflect.set(
                userBlackList_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $userBlackList = popsPanelContentUtils.createSectionContainerItem_textarea(
                userBlackList_template
              );
              let userWhiteList_template = UITextArea(
                "白名单用户",
                "userWhiteList",
                "",
                "多个用户换行分割"
              );
              Reflect.set(
                userWhiteList_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $userWhiteList = popsPanelContentUtils.createSectionContainerItem_textarea(
                userWhiteList_template
              );
              $fragment.append(
                $enable,
                $replyFlag,
                $avatarFlag,
                $viewthreadFlag,
                $minLength,
                $keywordLength,
                $keywords,
                $userBlackList,
                $userWhiteList
              );
              return $fragment;
            },
            btn: {
              merge: true,
              position: "space-between",
              ok: {
                enable: false
              },
              cancel: {
                enable: true,
                text: "关闭"
              },
              other: {
                enable: true,
                text: `查看已过滤（${this.$el.isFilterElementHTML.length}）`,
                type: "primary",
                callback: (details, event) => {
                  __pops.alert({
                    title: {
                      text: "评论过滤器-已过滤",
                      position: "center"
                    },
                    content: {
                      text: (
                        /*html*/
                        `
                                ${Array.from(
                        document.querySelectorAll(
                          'link[rel="stylesheet"]'
                        )
                      ).map((item) => item.outerHTML).join("\n")}

                                ${this.$el.isFilterElementHTML.join("\n")}
                                `
                      ),
                      html: true
                    },
                    mask: {
                      enable: true
                    },
                    style: (
                      /*css*/
                      `
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`
                    ),
                    width: "88vw",
                    height: "80vh"
                  });
                }
              }
            },
            dialogCloseCallBack(isSubmit) {
            },
            onsubmit: ($form, data) => {
              return {
                success: true,
                data
              };
            },
            style: (
              /*css*/
              `
            .pops-panel-item-left-desc-text{
                line-height: normal;
                margin-top: 6px;
                font-size: 0.8em;
                color: rgb(108, 108, 108);
            }
            .pops-panel-item-left-main-text{
                max-width: unset;
            }
            .pops-panel-textarea textarea{
                height: 150px;
            }
            `
            )
          });
          view.showView();
        },
        /**
         * 获取模板数据
         */
        getTemplateData() {
          return {
            enable: true,
            avatarFlag: false,
            replyFlag: false,
            viewthreadFlag: false,
            minLength: 5,
            keywordLength: 8,
            keywords: [],
            userBlackList: [],
            userWhiteList: []
          };
        },
        /**
         * 获取数据
         */
        getData() {
          return _GM_getValue(
            this.$key.STORAGE_KEY,
            this.getTemplateData()
          );
        },
        /**
         * 设置数据
         */
        setData(data) {
          _GM_setValue(this.$key.STORAGE_KEY, data);
        }
      };
      class RuleView {
        constructor(option) {
          __publicField(this, "option");
          this.option = option;
        }
        /**
         * 显示视图
         */
        showView() {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
          let $popsConfirm = __pops.confirm({
            title: {
              text: this.option.title,
              position: "center"
            },
            content: {
              text: (
                /*html*/
                `
                    <div class="rule-view-container">
                    </div>
                    `
              ),
              html: true
            },
            btn: {
              merge: true,
              reverse: false,
              position: "space-between",
              ok: {
                enable: ((_c = (_b = (_a2 = this.option) == null ? void 0 : _a2.bottomControls) == null ? void 0 : _b.add) == null ? void 0 : _c.enable) || true,
                type: "primary",
                text: "添加",
                callback: (event) => {
                  this.showEditView(
                    $popsConfirm.$shadowRoot,
                    false,
                    this.option.getAddData()
                  );
                }
              },
              close: {
                enable: true,
                callback(event) {
                  $popsConfirm.close();
                }
              },
              cancel: {
                enable: ((_f = (_e = (_d = this.option) == null ? void 0 : _d.bottomControls) == null ? void 0 : _e.filter) == null ? void 0 : _f.enable) || false,
                type: "default",
                text: "过滤",
                callback: (details, event) => {
                  var _a3, _b2, _c2;
                  if (typeof ((_c2 = (_b2 = (_a3 = this.option) == null ? void 0 : _a3.bottomControls) == null ? void 0 : _b2.filter) == null ? void 0 : _c2.callback) === "function") {
                    this.option.bottomControls.filter.callback();
                  }
                }
              },
              other: {
                enable: ((_i = (_h = (_g = this.option) == null ? void 0 : _g.bottomControls) == null ? void 0 : _h.clear) == null ? void 0 : _i.enable) || true,
                type: "xiaomi-primary",
                text: `清空所有(${this.option.data().length})`,
                callback: (event) => {
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
                        callback: (popsEvent) => {
                          var _a3, _b2, _c2;
                          log.success("清空所有");
                          if (typeof ((_c2 = (_b2 = (_a3 = this.option) == null ? void 0 : _a3.bottomControls) == null ? void 0 : _b2.clear) == null ? void 0 : _c2.callback) === "function") {
                            this.option.bottomControls.clear.callback();
                          }
                          if (this.option.data().length) {
                            Qmsg.error("清理失败");
                            return;
                          } else {
                            Qmsg.success("清理成功");
                          }
                          this.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
                          this.clearContent($popsConfirm.$shadowRoot);
                          $askDialog.close();
                        }
                      },
                      cancel: {
                        text: "取消",
                        enable: true
                      }
                    },
                    mask: { enable: true },
                    width: "300px",
                    height: "200px"
                  });
                }
              }
            },
            mask: {
              enable: true
            },
            width: window.innerWidth > 500 ? "500px" : "88vw",
            height: window.innerHeight > 500 ? "500px" : "80vh",
            style: (
              /*css*/
              `
            ${__pops.config.cssText.panelCSS}
            
            .rule-item{
                display: flex;
                align-items: center;
                line-height: normal;
                font-size: 16px;
                padding: 4px 4px;
                gap: 6px;
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
                padding: 0px 4px;
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
          let allData = this.option.data();
          allData.forEach((data) => {
            this.appendRuleItemElement($popsConfirm.$shadowRoot, data);
          });
        }
        /**
         * 解析弹窗内的各个元素
         */
        parseViewElement($shadowRoot) {
          let $container = $shadowRoot.querySelector(
            ".rule-view-container"
          );
          let $deleteBtn = $shadowRoot.querySelector(
            ".pops-confirm-btn button.pops-confirm-btn-other"
          );
          return {
            /** 容器 */
            $container,
            /** 左下角的清空按钮 */
            $deleteBtn
          };
        }
        /**
         * 解析每一项的元素
         */
        parseItemElement($shadowRoot) {
          let $enable = $shadowRoot.querySelector(
            ".rule-controls-enable"
          );
          let $enableSwitch = $enable.querySelector(".pops-panel-switch");
          let $enableSwitchInput = $enable.querySelector(
            ".pops-panel-switch__input"
          );
          let $enableSwitchCore = $enable.querySelector(
            ".pops-panel-switch__core"
          );
          let $edit = $shadowRoot.querySelector(".rule-controls-edit");
          let $delete = $shadowRoot.querySelector(
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
            $delete
          };
        }
        /**
         * 创建一条规则元素
         */
        createRuleItemElement(data, $shadowRoot) {
          let name = this.option.getDataItemName(data);
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
          let switchCheckedClassName = "pops-panel-switch-is-checked";
          const {
            $enable,
            $enableSwitch,
            $enableSwitchCore,
            $enableSwitchInput,
            $delete,
            $edit
          } = this.parseItemElement($ruleItem);
          if (this.option.itemControls.enable.enable) {
            domUtils.on($enableSwitchCore, "click", (event) => {
              let isChecked = false;
              if ($enableSwitch.classList.contains(switchCheckedClassName)) {
                $enableSwitch.classList.remove(switchCheckedClassName);
                isChecked = false;
              } else {
                $enableSwitch.classList.add(switchCheckedClassName);
                isChecked = true;
              }
              $enableSwitchInput.checked = isChecked;
              this.option.itemControls.enable.callback(data, isChecked);
            });
            if (this.option.itemControls.enable.getEnable(data)) {
              $enableSwitch.classList.add(switchCheckedClassName);
            }
          } else {
            $enable.remove();
          }
          if (this.option.itemControls.edit.enable) {
            domUtils.on($edit, "click", (event) => {
              utils.preventEvent(event);
              this.showEditView($shadowRoot, true, data, $ruleItem, (newData) => {
                data = null;
                data = newData;
              });
            });
          } else {
            $edit.remove();
          }
          if (this.option.itemControls.delete.enable) {
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
                    callback: (popsEvent) => {
                      log.success("删除数据");
                      let flag = this.option.itemControls.delete.deleteCallBack(data);
                      if (flag) {
                        Qmsg.success("成功删除该数据");
                        $ruleItem.remove();
                        this.updateDeleteAllBtnText($shadowRoot);
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
         */
        appendRuleItemElement($shadowRoot, data) {
          const { $container } = this.parseViewElement($shadowRoot);
          if (Array.isArray(data)) {
            for (let index = 0; index < data.length; index++) {
              const item = data[index];
              $container.appendChild(this.createRuleItemElement(item, $shadowRoot));
            }
          } else {
            $container.appendChild(this.createRuleItemElement(data, $shadowRoot));
          }
          this.updateDeleteAllBtnText($shadowRoot);
        }
        /**
         * 更新弹窗内容的元素
         */
        updateRuleContaienrElement($shadowRoot) {
          this.clearContent($shadowRoot);
          this.parseViewElement($shadowRoot);
          let data = this.option.data();
          this.appendRuleItemElement($shadowRoot, data);
          this.updateDeleteAllBtnText($shadowRoot);
        }
        /**
         * 更新规则元素
         */
        updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
          let $newRuleItem = this.createRuleItemElement(data, $shadowRoot);
          $oldRuleItem.after($newRuleItem);
          $oldRuleItem.remove();
        }
        /**
         * 清空内容
         */
        clearContent($shadowRoot) {
          const { $container } = this.parseViewElement($shadowRoot);
          domUtils.html($container, "");
        }
        /**
         * 设置删除按钮的文字
         */
        setDeleteBtnText($shadowRoot, text, isHTML = false) {
          const { $deleteBtn } = this.parseViewElement($shadowRoot);
          if (isHTML) {
            domUtils.html($deleteBtn, text);
          } else {
            domUtils.text($deleteBtn, text);
          }
        }
        /**
         * 更新【清空所有】的按钮的文字
         */
        updateDeleteAllBtnText($shadowRoot) {
          let data = this.option.data();
          this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
        }
        /**
         * 显示编辑视图
         * @param isEdit 是否是编辑状态
         */
        showEditView($parentShadowRoot, isEdit, editData, $editRuleItemElement, updateDataCallBack) {
          let dialogCloseCallBack = (isSubmit) => {
            if (isSubmit) ;
            else {
              if (!isEdit) {
                this.option.deleteData(editData);
              }
              if (typeof updateDataCallBack === "function") {
                let newData = this.option.getData(editData);
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
            getView: (data) => {
              return this.option.itemControls.edit.getView(data, isEdit);
            },
            btn: {
              ok: {
                enable: true,
                text: isEdit ? "修改" : "添加"
              },
              cancel: {
                callback(details, event) {
                  details.close();
                  dialogCloseCallBack(false);
                }
              },
              close: {
                callback(details, event) {
                  details.close();
                  dialogCloseCallBack(false);
                }
              }
            },
            onsubmit: ($form, data) => {
              let result = this.option.itemControls.edit.onsubmit(
                $form,
                isEdit,
                data
              );
              if (result.success) {
                if (isEdit) {
                  Qmsg.success("修改成功");
                  this.updateRuleItemElement(
                    result.data,
                    $editRuleItemElement,
                    $parentShadowRoot
                  );
                } else {
                  this.appendRuleItemElement($parentShadowRoot, result.data);
                }
              } else {
                if (isEdit) {
                  Qmsg.error("修改失败");
                }
              }
              return result;
            },
            style: this.option.itemControls.edit.style
          });
          editView.showView();
        }
      }
      const MTProductListingReminder = {
        $key: {
          STORAGE_KEY: "mt-productListingReminder-rule"
        },
        init() {
          this.registerMenu();
          this.runRule();
        },
        /**
         * 注册菜单
         */
        registerMenu() {
          GM_Menu.add({
            key: "product-reminder",
            text: "⚙ 商品上架提醒",
            autoReload: false,
            isStoreValue: false,
            showText(text) {
              return text;
            },
            callback: () => {
              this.showView();
            }
          });
        },
        /**
         * 执行规则
         */
        async runRule() {
          async function getCurrentProduct() {
            let response = await httpx.get(
              "/keke_integralmall-keke_integralmall.html",
              {
                allowInterceptConfig: false,
                headers: {
                  "User-Agent": utils.getRandomAndroidUA()
                }
              }
            );
            if (!response.status) {
              Qmsg.error("【积分商城】获取数据失败");
              return;
            }
            let productInfoList = [];
            let doc = domUtils.parseHTML(response.data.responseText, true, true);
            doc.querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(($taskList) => {
              var _a2, _b;
              productInfoList.push({
                name: domUtils.text(
                  $taskList.querySelector(
                    ".mall-info a > *:first-child"
                  )
                ) || domUtils.text(
                  $taskList.querySelector(".mall-info a")
                ),
                price: domUtils.text(
                  $taskList.querySelector(
                    ".mall-info span.discount-price i"
                  )
                ),
                endTime: domUtils.text(
                  $taskList.querySelector(
                    ".mall-info #time_hz span.time"
                  )
                ),
                remainingQuantity: parseInt(
                  ((_b = (_a2 = $taskList.querySelector(".mall-info .mall-count .count-r")) == null ? void 0 : _a2.innerText) == null ? void 0 : _b.replace(/仅剩|件/gi, "")) || "0"
                )
              });
            });
            return productInfoList;
          }
          if (Router.isPointsMall()) {
            return;
          }
          let allData = this.getData();
          if (!allData.length) {
            return;
          }
          let productList = await getCurrentProduct();
          if (!productList) {
            return;
          }
          for (const productItem of productList) {
            for (const reminderOption of allData) {
              if (reminderOption.enable && productItem["name"].match(
                new RegExp(reminderOption["productName"], "i")
              ) && !isNaN(productItem["remainingQuantity"]) && productItem["remainingQuantity"] > 0) {
                log.success(`成功匹配对应商品`, reminderOption, productItem);
                __pops.confirm({
                  title: {
                    text: "积分商城提醒",
                    position: "center"
                  },
                  content: {
                    text: (
                      /*html*/
                      `<br />
                            您设置的商品已上架在积分商城中，当前售价 ${productItem["price"]}金币，仅剩${productItem["remainingQuantity"]}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`
                    ),
                    html: true
                  },
                  btn: {
                    merge: true,
                    position: "space-between",
                    other: {
                      enable: true,
                      type: "danger",
                      text: "删除提醒",
                      callback: () => {
                        let status = this.deleteData(reminderOption);
                        if (status) {
                          Qmsg.success("删除成功");
                        } else {
                          Qmsg.error("删除失败");
                        }
                      }
                    },
                    ok: {
                      text: "前往购买",
                      callback: () => {
                        window.location.href = `${window.location.origin}/keke_integralmall-keke_integralmall.html`;
                      }
                    }
                  },
                  width: "300px",
                  height: "300px"
                });
                return;
              }
            }
          }
        },
        /**
         * 获取模板数据
         */
        getTemplateData() {
          return {
            uuid: utils.generateUUID(),
            enable: true,
            name: "",
            productName: ""
          };
        },
        /**
         * 显示视图
         */
        showView() {
          let popsPanelContentUtils = __pops.config.panelHandleContentUtils();
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
          let ruleView = new RuleView({
            title: "商品上架提醒",
            data: () => {
              return this.getData();
            },
            getAddData: () => {
              return this.getTemplateData();
            },
            getDataItemName: (data) => {
              return data["name"];
            },
            updateData: (data) => {
              return this.updateData(data);
            },
            deleteData: (data) => {
              return this.deleteData(data);
            },
            getData: (data) => {
              let allData = this.getData();
              let findValue = allData.find((item) => item.uuid === data.uuid);
              return findValue ?? data;
            },
            itemControls: {
              enable: {
                enable: true,
                getEnable(data) {
                  return data.enable;
                },
                callback: (data, enable) => {
                  data.enable = enable;
                  this.updateData(data);
                }
              },
              edit: {
                enable: true,
                getView: (data, isEdit) => {
                  let $fragment = document.createDocumentFragment();
                  if (!isEdit) {
                    data = this.getTemplateData();
                  }
                  let enable_template = UISwitch("启用", "enable", true);
                  Reflect.set(
                    enable_template.props,
                    PROPS_STORAGE_API,
                    generateStorageApi(data)
                  );
                  let $enable = popsPanelContentUtils.createSectionContainerItem_switch(
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
                  let $name = popsPanelContentUtils.createSectionContainerItem_input(
                    name_template
                  );
                  let productName_template = UIInput(
                    "商品名",
                    "productName",
                    "",
                    "",
                    void 0,
                    "可正则，需手动转义"
                  );
                  Reflect.set(
                    productName_template.props,
                    PROPS_STORAGE_API,
                    generateStorageApi(data)
                  );
                  let $productName = popsPanelContentUtils.createSectionContainerItem_input(
                    productName_template
                  );
                  $fragment.append($enable, $name, $productName);
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
                    } else {
                      log.error(`${key}不在数据中`);
                    }
                  });
                  if (data.name.trim() === "") {
                    Qmsg.error("规则名称不能为空");
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
              delete: {
                enable: true,
                deleteCallBack: (data) => {
                  return this.deleteData(data);
                }
              }
            }
          });
          ruleView.showView();
        },
        /**
         * 获取数据
         */
        getData() {
          return _GM_getValue(this.$key.STORAGE_KEY, []);
        },
        /**
         * 设置数据
         * @param data
         */
        setData(data) {
          _GM_setValue(this.$key.STORAGE_KEY, data);
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
            _GM_setValue(this.$key.STORAGE_KEY, localData);
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
          _GM_deleteValue(this.$key.STORAGE_KEY);
        }
      };
      const MT = {
        $flag: {
          showUserUID_initCSS: false
        },
        init() {
          PopsPanel.onceExec("mt-MTCommentFilter", () => {
            MTCommentFilter.init();
          });
          PopsPanel.onceExec("mt-MTProductListingReminder", () => {
            MTProductListingReminder.init();
          });
          PopsPanel.execMenuOnce("mt-link-text-to-hyperlink", () => {
            MTIdentifyLinks();
          });
          if (Router.isPost()) {
            log.info(`Router: 帖子`);
            MTForumPost.init();
          } else if (Router.isGuide()) {
            log.info(`Router: 导读`);
            MTGuide.init();
          } else {
            log.error(`Router: 未适配的链接 ==> ` + window.location.href);
          }
          domUtils.ready(() => {
            PopsPanel.execMenuOnce("mt-addLatestPostBtn", () => {
              this.addLatestPostBtn();
            });
            PopsPanel.execMenu("mt-auto-sign", () => {
              MTAutoSignIn.init();
            });
          });
        },
        /**
         * 新增【最新发表】
         */
        addLatestPostBtn() {
          log.info(`新增【最新发表】`);
          domUtils.append(
            "#comiis_nv .wp.comiis_nvbox.cl ul",
            /*html*/
            `
			<li id="latest_publication">
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			</li>
		`
          );
          if (window.location.href.includes("/forum.php?mod=guide&view=newthread")) {
            domUtils.removeClass("#mn_forum_10", "a");
            domUtils.css(
              "#latest_publication a",
              "background",
              'url("https://cdn-bbs.mt2.cn/template/comiis_mi/img/nv_a.png") repeat-x 50% -50px'
            );
          }
        }
      };
      PopsPanel.init();
      MT.init();
    }
  });
  require_entrance_001();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);