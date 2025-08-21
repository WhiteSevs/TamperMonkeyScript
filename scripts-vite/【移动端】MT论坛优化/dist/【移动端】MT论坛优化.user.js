// ==UserScript==
// @name         【移动端】MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.8.21
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@79fb4d854f1e2cdf606339b0dac18d50104e2ebe/lib/js-watermark/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.3.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @connect      helloimg.com
// @connect      z4a.net
// @connect      kggzs.cn
// @connect      woozooo.com
// @grant        GM.cookie
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

(function (Qmsg, DOMUtils, Utils, pops, hljs, Viewer) {
  'use strict';

  var _GM = /* @__PURE__ */ (() => typeof GM != "undefined" ? GM : void 0)();
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
      } else if (url.startsWith("//")) {
        if (url.startsWith("///")) ;
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
      let $elList = [document.documentElement, document.body].concat(...args || []);
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
    },
    /**
     * 在规定时间内循环，如果超时或返回false则取消循环
     * @param fn 循环的函数
     * @param intervalTime 循环间隔时间
     * @param [timeout=5000] 循环超时时间
     */
    interval(fn, intervalTime, timeout = 5e3) {
      let timeId;
      let maxTimeout = timeout - intervalTime;
      let intervalTimeCount = intervalTime;
      let loop = async (isTimeout) => {
        let result = await fn(isTimeout);
        if (typeof result === "boolean" && !result || isTimeout) {
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
    /**
     * 找到对应的上层元素
     */
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
    }
  };
  const GM_RESOURCE_MAPPING = {
    Viewer: {
      keyName: "ViewerCSS",
      url: "https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"
    },
    Hljs: {
      keyName: "HljsCSS",
      url: "https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"
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
    },
    /** Cookie配置-启用 */
    httpx_cookie_manager_enable: {
      key: "httpx-use-cookie-enable",
      defaultValue: false
    },
    /** Cookie配置-使用document.cookie */
    httpx_cookie_manager_use_document_cookie: {
      key: "httpx-use-document-cookie",
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
  pops.config.Utils.AnyTouch();
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 1e3,
    autoClearConsole: true,
    tag: true
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
    }
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
      // 开启遮罩层
      enable: true,
      // 取消点击遮罩层的事件
      clickEvent: {
        toClose: false,
        toHide: false
      }
    },
    drag: true
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
  const $ = DOMUtils.selector.bind(DOMUtils);
  const $$ = DOMUtils.selectorAll.bind(DOMUtils);
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
     * 中等的设置界面
     */
    settingMiddle: {
      get width() {
        return window.innerWidth < 350 ? "88vw" : "350px";
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
      __contentConfigInitDefaultValue: null,
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
      /**
       * 面板
       */
      $panel: null,
      /**
       * 面板配置
       */
      panelContent: [],
      /**
       * 菜单项初始化的默认值
       */
      get contentConfigInitDefaultValue() {
        if (this.__contentConfigInitDefaultValue == null) {
          this.__contentConfigInitDefaultValue = new utils.Dictionary();
        }
        return this.__contentConfigInitDefaultValue;
      },
      /**
       * 菜单项初始化时禁用的键
       */
      contentConfigInitDisabledKeys: [],
      /**
       * 成功只执行了一次的菜单项
       *
       * + .exec
       * + .execMenu
       * + .execMenuOnce
       */
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) {
          this.__onceExecMenuData = new utils.Dictionary();
        }
        return this.__onceExecMenuData;
      },
      /**
       * 成功只执行了一次的项
       *
       * + .onceExec
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
        let menuDefaultConfig = /* @__PURE__ */ new Map();
        let key = config.attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        let moreMenuDefaultConfig = config.attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig) {
          Object.keys(moreMenuDefaultConfig).forEach((key2) => {
            menuDefaultConfig.set(key2, moreMenuDefaultConfig[key2]);
          });
        }
        if (!menuDefaultConfig.size) {
          log.warn(["请先配置键", config]);
          return;
        }
        let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
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
    /**
     * 设置初始化使用的默认值
     * @param key 键
     * @param defaultValue 默认值
     */
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key)) {
        log.warn("请检查该key(已存在): " + key);
      }
      this.$data.contentConfigInitDefaultValue.set(key, defaultValue);
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
        if (this.$data.contentConfigInitDefaultValue.has(key)) {
          return this.$data.contentConfigInitDefaultValue.get(key);
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
      let listenerId = PopsPanelStorageApi.addValueChangeListener(key, (__key, __newValue, __oldValue) => {
        callback(key, __oldValue, __newValue);
      });
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
     * 执行菜单
     *
     * @param queryKey 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
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
      let findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
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
        let listenerId = this.addValueChangeListener(key, (key2, newValue, oldValue) => {
          valueChangeCallback();
        });
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
     * @param key 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
     * @param callback 回调
     * @param isReverse 逆反判断菜单启用，默认false
     * @param once 是否是只执行一次，默认false
     */
    execMenu(key, callback, isReverse = false, once = false) {
      return this.exec(
        key,
        (option) => {
          return callback(option);
        },
        (keyList) => {
          let execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            let disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
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
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     *
     * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
     * @param key 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
     * @param callback 回调
     * @param isReverse 逆反判断菜单启用，默认false
     */
    execMenuOnce(key, callback, isReverse = false) {
      return this.execMenu(key, callback, isReverse, true);
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * + .exec
     * + .execMenu
     * + .execMenuOnce
     * @param key 键
     */
    deleteExecMenuOnce(key) {
      this.$data.onceExecMenuData.delete(key);
      let flag = PopsPanelStorageApi.removeValueChangeListener(key);
      return flag;
    },
    /**
     * 根据key执行一次，该key不会和execMenu|exec|execMenuOnce已执行的key冲突
     * @param key 键
     * @param callback 回调
     */
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
    /**
     * 移除已执行的仅执行一次的菜单
     * + .onceExec
     * @param key 键
     */
    deleteOnceExec(key) {
      key = this.transformKey(key);
      this.$data.onceExecData.delete(key);
    },
    /**
     * 显示设置面板
     * @param content 显示的内容配置
     * @param [title] 标题
     * @param [preventDefaultContentConfig=false] 是否阻止默认添加内容配置（版本号），默认false
     * @param [preventRegisterSearchPlugin=false] 是否阻止默认添加搜索组件，默认false
     */
    showPanel(content, title = `${SCRIPT_NAME}-设置`, preventDefaultContentConfig = false, preventRegisterSearchPlugin = false) {
      this.$data.$panel = null;
      this.$data.panelContent = [];
      let checkHasBottomVersionContentConfig = content.findIndex((it) => {
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
      this.$data.panelContent = content;
      if (!preventRegisterSearchPlugin) {
        this.registerConfigSearch({ $panel, content });
      }
    },
    /**
     * 注册设置面板的搜索功能（双击左侧选项第一个）
     * @param config 配置项
     */
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
            // 使用视口作为根
            threshold: 1
            // 元素完全进入视口时触发
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
        utils.preventEvent(evt);
        let $alert = __pops.alert({
          title: {
            text: "搜索配置",
            position: "center"
          },
          content: {
            text: (
              /*html*/
              `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`
            ),
            html: true
          },
          btn: {
            ok: { enable: false }
          },
          mask: {
            clickEvent: {
              toClose: true
            }
          },
          width: PanelUISize.settingMiddle.width,
          height: "auto",
          drag: true,
          style: (
            /*css*/
            `
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
						font-size: 0.8rem;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`
          )
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
                data: target.next
              };
            } else {
              return {
                isFind: true,
                data: target
              };
            }
          });
          let $item = domUtils.createElement("div", {
            className: "search-result-item",
            innerHTML: (
              /*html*/
              `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`
            )
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
              block: "center"
            });
            $targetAsideItem.click();
            asyncQueryProperty(pathInfo.next, async (target) => {
              if (target?.next) {
                let $findDeepMenu = await utils.waitNode(() => {
                  return Array.from(
                    $panel.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")
                  ).find(($deepMenu) => {
                    const __formConfig__ = Reflect.get($deepMenu, "__formConfig__");
                    return typeof __formConfig__ === "object" && __formConfig__ != null && __formConfig__.text === target.name;
                  });
                }, 2500);
                if ($findDeepMenu) {
                  $findDeepMenu.click();
                } else {
                  Qmsg.error("未找到对应的二级菜单");
                  return {
                    isFind: true,
                    data: target
                  };
                }
                return {
                  isFind: false,
                  data: target.next
                };
              } else {
                let $findTargetMenu = await utils.waitNode(() => {
                  return Array.from(
                    $panel.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)
                  ).find(($menuItem) => {
                    const __formConfig__ = Reflect.get($menuItem, "__formConfig__");
                    return __formConfig__ === target.matchedData?.formConfig;
                  });
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
                  data: target
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
                        data: target.next
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target
                      };
                    }
                  });
                  deepNext.next = {
                    name: configItem.text
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
                        data: target.next
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target
                      };
                    }
                  });
                  deepNext.next = {
                    name: text,
                    matchedData: {
                      path: "",
                      formConfig: configItem,
                      matchedText: delayMatchedTextList[matchedIndex],
                      description
                    }
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
                        data: target.next
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target
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
                name: text
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
            utils.preventEvent(evt2);
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
            dbclick_event(evt);
          } else {
            timer = setTimeout(() => {
              isDoubleClick = false;
            }, 200);
            clickElement = selectorTarget;
            isDoubleClick = true;
          }
        },
        {
          capture: true
        }
      );
      $panel.$shadowRoot.appendChild(
        domUtils.createElement("style", {
          type: "text/css",
          textContent: (
            /*css*/
            `
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
				`
          )
        })
      );
    },
    /**
     * 把key:string[]转为string
     */
    transformKey(key) {
      if (Array.isArray(key)) {
        const keyArray = key.sort();
        return JSON.stringify(keyArray);
      } else {
        return key;
      }
    }
  };
  class HttpxCookieManager {
    $data = {
      /** 是否启用 */
      get enable() {
        return Panel.getValue(
          PanelSettingConfig.httpx_cookie_manager_enable.key,
          PanelSettingConfig.httpx_cookie_manager_enable.defaultValue
        );
      },
      /**
       * 是否使用document.cookie
       * + true 使用document.cookie额外添加cookie的header
       */
      get useDocumentCookie() {
        return Panel.getValue(
          PanelSettingConfig.httpx_cookie_manager_use_document_cookie.key,
          PanelSettingConfig.httpx_cookie_manager_use_document_cookie.defaultValue
        );
      },
      /**
       * cookie规则，在这里填入
       * @example
       * {
       *     key: "cookie-example-com",
       *     hostname: "example.com",
       * }
       */
      cookieRule: []
    };
    /**
     * cookie规则，在这里填入
     * @param cookieRule
     * @example
     * {
     *     key: "cookie-example-com",
     *     hostname: "example.com",
     * }
     */
    constructor(cookieRule) {
      if (Array.isArray(cookieRule)) {
        this.$data.cookieRule = cookieRule;
      }
    }
    /**
     * 补充cookie末尾分号
     */
    fixCookieSplit(str) {
      if (utils.isNotNull(str) && !str.trim().endsWith(";")) {
        str += ";";
      }
      return str;
    }
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
    }
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
          let cookie = Panel.getValue(rule.key);
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
  }
  {
    CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
  }
  {
    CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Hljs);
  }
  const httpxCookieManager = new HttpxCookieManager([
    {
      key: "httpx-cookie-bbs.binmt.cc",
      hostname: /bbs.binmt.cc/g
    }
  ]);
  httpx.interceptors.request.use((data) => {
    httpxCookieManager.handle(data);
    return data;
  });
  __pops.GlobalConfig.setGlobalConfig({
    mask: {
      enable: true
    },
    drag: true
  });
  const ElementUtils = {
    /**
     * 在左侧菜单注册功能
     */
    registerLeftMenu(config) {
      utils.waitNode(
        ".comiis_sidenv_box .sidenv_li .comiis_left_Touch",
        1e4
      ).then(($leftTouch) => {
        if (!$leftTouch) {
          log.error("注册左侧面板菜单失败，原因：该元素不存在");
          return;
        }
        let $setting = domUtils.createElement("li", {
          className: "comiis_left_Touch",
          innerHTML: (
            /*html*/
            `
						<a href="javascript:;" class="comiis_left_Touch">
							<i class="comiis_font"></i>
							${config.name}
						</a>
						`
          )
        });
        let $icon = $setting.querySelector(".comiis_font");
        if (typeof config.style === "string") {
          $icon.style.cssText = config.style;
        }
        if (typeof config.icon === "string") {
          $icon.innerHTML = config.icon;
        }
        if (typeof config.iconColor === "string") {
          $icon.style.color = config.iconColor;
        }
        if (typeof config.iconSize === "string") {
          $icon.style.fontSize = config.iconSize;
        }
        domUtils.on($setting, "click", (event) => {
          utils.preventEvent(event);
          if (typeof config.callback === "function") {
            config.callback();
          }
        });
        domUtils.append($leftTouch, $setting);
      });
    },
    /**
     * 导读中最新、热门、精华、回复、抢沙发的各个帖子【list】
     */
    comiisForumList: () => {
      return document.querySelectorAll("li.forumlist_li");
    },
    /**
     * 帖子内评论，包括帖子内容主体，第一个就是主体【list】
     */
    comiisPostli: () => {
      return document.querySelectorAll(
        "div.comiis_postli.comiis_list_readimgs.nfqsqi"
      );
    },
    /**
     * 帖子内评论，包括帖子内容主体，第一个就是主体【list】
     */
    comiisMmlist: () => {
      return document.querySelectorAll(".comiis_mmlist");
    }
  };
  const blackHomeCSS = ".pops-confirm-content {\r\n	display: flex;\r\n	flex-direction: column;\r\n}\r\n.blackhome-user-filter input {\r\n	width: -moz-available;\r\n	width: -webkit-fill-available;\r\n	height: 30px;\r\n	margin: 8px 20px;\r\n	border: 0;\r\n	border-bottom: 1px solid;\r\n	text-overflow: ellipsis;\r\n	overflow: hidden;\r\n	white-space: nowrap;\r\n}\r\n.blackhome-user-filter input:focus-within {\r\n	outline: none;\r\n}\r\n.blackhome-user-list {\r\n	flex: 1;\r\n	overflow-y: auto;\r\n}\r\n.blackhome-user-list .blackhome-user-item {\r\n	margin: 15px 10px;\r\n	padding: 10px;\r\n	border-radius: 8px;\r\n	box-shadow: 0 0 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;\r\n}\r\n.blackhome-user {\r\n	display: flex;\r\n}\r\n.blackhome-user img {\r\n	width: 45px;\r\n	height: 45px;\r\n	border-radius: 45px;\r\n}\r\n.blackhome-user-info {\r\n	margin-left: 10px;\r\n}\r\n.blackhome-user-info p:nth-child(1) {\r\n	margin-bottom: 5px;\r\n}\r\n.blackhome-user-info p:nth-child(2) {\r\n	font-size: 14px;\r\n}\r\n.blackhome-user-action {\r\n	display: flex;\r\n	margin: 10px 0;\r\n}\r\n.blackhome-user-action p:nth-child(1),\r\n.blackhome-user-action p:nth-child(2) {\r\n	border: 1px solid red;\r\n	color: red;\r\n	border-radius: 4px;\r\n	padding: 2px 4px;\r\n	font-weight: 500;\r\n	font-size: 14px;\r\n	place-self: center;\r\n}\r\n.blackhome-user-action p:nth-child(2) {\r\n	border: 1px solid #ff4b4b;\r\n	color: #ff4b4b;\r\n	margin-left: 8px;\r\n}\r\n.blackhome-user-uuid {\r\n	border: 1px solid #ff7600;\r\n	color: #ff7600;\r\n	border-radius: 4px;\r\n	padding: 2px 4px;\r\n	font-weight: 500;\r\n	font-size: 14px;\r\n	width: fit-content;\r\n	width: -moz-fit-content;\r\n	margin: 10px 0;\r\n}\r\n.blackhome-operator {\r\n	padding: 10px;\r\n	background-color: #efefef;\r\n	border-radius: 6px;\r\n}\r\n.blackhome-operator-user {\r\n	display: flex;\r\n}\r\n.blackhome-operator-user img {\r\n	width: 35px;\r\n	height: 35px;\r\n	border-radius: 35px;\r\n}\r\n.blackhome-operator-user p {\r\n	align-self: center;\r\n	margin-left: 10px;\r\n}\r\n.blackhome-operator-user-info {\r\n	margin: 10px 0;\r\n	font-weight: 500;\r\n}\r\n";
  const MTRegExp = {
    /** 论坛账号的凭证 */
    formhash: /formhash=([0-9a-zA-Z]+)/,
    /** 用户uid */
    uid: /uid(=|-)(\d+)/,
    /** 帖子内特殊字体格式 */
    fontSpecial: /<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,
    /** 帖子链接的ptid参数 */
    ptid: /&ptid=([\d]+)/i,
    /** 帖子链接的pid参数 */
    pid: /&pid=([\d]+)/i,
    /** 链接的tid参数 */
    tid: /&tid=([\d]+)/i
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
     * 获取账号的formhash
     */
    async getFormHash() {
      let $inputFormHashList = Array.from(
        (top || globalThis).document.querySelectorAll(
          "input[name=formhash]"
        )
      );
      for (let index = 0; index < $inputFormHashList.length; index++) {
        const $input = $inputFormHashList[index];
        let formHash = $input.value;
        if (formHash) {
          return formHash;
        }
      }
      let $anchorFormHashList = Array.from(
        (top || globalThis).document.querySelectorAll(
          'a[href*="formhash="]'
        )
      );
      for (let index = 0; index < $anchorFormHashList.length; index++) {
        const $anchorFormHash = $anchorFormHashList[index];
        let anchorFormHashMatch = $anchorFormHash.href.match(MTRegExp.formhash);
        if (anchorFormHashMatch) {
          let formHash = anchorFormHashMatch[anchorFormHashMatch.length - 1];
          if (formHash) {
            return formHash;
          }
        }
      }
      let homeResponse = await httpx.get("/home.php?mod=spacecp", {
        fetch: true,
        allowInterceptConfig: false
      });
      if (homeResponse.status) {
        let homeText = homeResponse.data.responseText;
        let homeDoc = domUtils.parseHTML(homeText, true, true);
        let $formhash = homeDoc.querySelector(
          "input[name=formhash]"
        );
        if ($formhash) {
          let formHash = $formhash.value;
          if (utils.isNotNull(formHash)) {
            return formHash;
          }
        }
      } else {
        log.error("请求个人主页获取formhash失败", homeResponse);
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
  const MTBlackHome = {
    $data: {
      cid: ""
    },
    init() {
      this.registerMenu();
    },
    /**
     * 注册菜单
     */
    registerMenu() {
      ElementUtils.registerLeftMenu({
        name: "小黑屋",
        iconColor: "#000000",
        icon: "",
        callback: () => {
          this.showBlackHome();
        }
      });
    },
    /**
     * 显示小黑屋dialog
     */
    async showBlackHome() {
      let $loading = Qmsg.loading("正在获取小黑屋名单中...");
      let blackListInfo = await this.getBlackListInfo("");
      $loading.close();
      if (!blackListInfo) {
        return;
      }
      if (blackListInfo.data.length === 0) {
        Qmsg.error("获取小黑屋名单为空");
        return;
      }
      this.$data.cid = blackListInfo.next_cid;
      let $confirm = __pops.confirm({
        title: {
          text: "小黑屋名单",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `
          ),
          html: true
        },
        btn: {
          ok: {
            text: "下一页",
            callback: async () => {
              let $loading2 = Qmsg.loading("正在获取小黑屋名单中...");
              log.info("下一页的cid: ", this.$data.cid);
              let nextBlackListInfo2 = await this.getBlackListInfo(this.$data.cid);
              $loading2.close();
              if (!nextBlackListInfo2) {
                return;
              }
              this.$data.cid = nextBlackListInfo2.next_cid;
              nextBlackListInfo2.data.forEach((item) => {
                let $item = this.createListViewItem(item);
                $list.appendChild($item);
              });
              if (nextBlackListInfo2.data.length === 0) {
                Qmsg.error("获取小黑屋名单为空");
              } else {
                Qmsg.success(`成功获取 ${nextBlackListInfo2.data.length}条数据`);
              }
              utils.dispatchEvent($filterInput, "input");
            }
          },
          cancel: {
            text: "关闭"
          }
        },
        width: "88vw",
        height: "82vh",
        style: blackHomeCSS
      });
      let $list = $confirm.$shadowRoot.querySelector(
        ".blackhome-user-list"
      );
      let $filterInput = $confirm.$shadowRoot.querySelector(
        ".blackhome-user-filter input"
      );
      blackListInfo.data.forEach((item) => {
        let $item = this.createListViewItem(item);
        $list.appendChild($item);
      });
      Qmsg.success(`成功获取 ${blackListInfo.data.length}条数据`);
      let isSeaching = false;
      domUtils.on(
        $filterInput,
        ["input", "propertychange"],
        utils.debounce(() => {
          let inputText = $filterInput.value.trim();
          if (isSeaching) {
            return;
          }
          isSeaching = true;
          if (inputText == "") {
            $confirm.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach((item) => {
              item.removeAttribute("style");
            });
            isSeaching = false;
            return;
          }
          $confirm.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach((item) => {
            if (item.getAttribute("data-name").match(new RegExp(inputText, "ig")) || item.getAttribute("data-uid").trim().match(new RegExp(inputText, "ig")) || item.getAttribute("data-operator").match(new RegExp(inputText, "ig"))) {
              item.removeAttribute("style");
            } else {
              item.setAttribute("style", "display:none;");
            }
          });
          isSeaching = false;
        })
      );
      let nextBlackListInfo = await this.getBlackListInfo(this.$data.cid);
      if (!nextBlackListInfo) {
        return;
      }
      this.$data.cid = nextBlackListInfo.next_cid;
    },
    /**
     * 获取小黑屋名单信息
     */
    async getBlackListInfo(cid = "") {
      let searchParamsData = {
        mod: "misc",
        action: "showdarkroom",
        cid,
        ajaxdata: "json"
      };
      let response = await httpx.get(
        `/forum.php?${utils.toSearchParamsStr(searchParamsData)}`,
        {
          headers: {
            "User-Agent": utils.getRandomPCUA()
          },
          responseType: "json"
        }
      );
      if (!response.status) {
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      let cidSplit = data["message"].split("|");
      let next_cid = cidSplit[cidSplit.length - 1];
      let blackListData = utils.parseObjectToArray(data["data"]);
      let new_blackListData = [];
      let new_blackListData_noTime = [];
      blackListData.forEach((item) => {
        let date = item["dateline"].match(
          /([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g
        );
        if (date == null) {
          let _time_ = parseInt((Date.now() / 1e3).toString());
          let _time_after_count_ = 0;
          let sec_data = item["dateline"].match(/([0-9]+|半)[\s\S]*秒前/);
          let min_data = item["dateline"].match(/([0-9]+|半)[\s\S]*分钟前/);
          let hour_data = item["dateline"].match(/([0-9]+|半)[\s\S]*小时前/);
          let yesterday_time_data = item["dateline"].match(
            /昨天[\s\S]*(\d{2}):(\d{2})/
          );
          let before_yesterday_time_data = item["dateline"].match(
            /前天[\s\S]*(\d{2}):(\d{2})/
          );
          let day_data = item["dateline"].match(/([0-9]+|半)[\s\S]*天前/);
          if (sec_data) {
            sec_data = sec_data[sec_data.length - 1];
            sec_data = sec_data.replace(/半/g, 0.5);
            sec_data = parseFloat(sec_data);
            _time_after_count_ = _time_ - sec_data;
          } else if (min_data) {
            min_data = min_data[min_data.length - 1];
            min_data = min_data.replace(/半/g, 0.5);
            min_data = parseFloat(min_data);
            _time_after_count_ = _time_ - min_data * 60;
          } else if (hour_data) {
            hour_data = hour_data[hour_data.length - 1];
            hour_data = hour_data.replace(/半/g, 0.5);
            hour_data = parseFloat(hour_data);
            _time_after_count_ = _time_ - hour_data * 60 * 60;
          } else if (yesterday_time_data) {
            let yesterday_hour_data = yesterday_time_data[1];
            let yesterday_min_data = yesterday_time_data[2];
            _time_after_count_ = _time_ - 86400 - parseInt(yesterday_hour_data) * 3600 - parseInt(yesterday_min_data) * 60;
          } else if (before_yesterday_time_data) {
            let before_yesterday_hour_data = before_yesterday_time_data[1];
            let before_yesterday_min_data = before_yesterday_time_data[2];
            _time_after_count_ = _time_ - 86400 * 2 - parseInt(before_yesterday_hour_data) * 3600 - parseInt(before_yesterday_min_data) * 60;
          } else if (day_data) {
            day_data = day_data[day_data.length - 1];
            day_data = day_data.replace(/半/g, 0.5);
            day_data = parseFloat(day_data);
            _time_after_count_ = _time_ - day_data * 60 * 60 * 24;
          }
          item["time"] = parseInt(_time_after_count_.toString()) * 1e3;
          new_blackListData = new_blackListData.concat(item);
          return;
        } else {
          date = date[0];
        }
        item["time"] = utils.formatToTimeStamp(date);
        new_blackListData = new_blackListData.concat(item);
      });
      utils.sortListByProperty(new_blackListData, "time");
      utils.sortListByProperty(new_blackListData_noTime, "time", false);
      new_blackListData = new_blackListData.concat(new_blackListData_noTime);
      return {
        next_cid,
        data: new_blackListData
      };
    },
    /**
     * 创建黑名单节点
     */
    createListViewItem(userInfo) {
      let $item = domUtils.createElement(
        "div",
        {
          className: "blackhome-user-item",
          innerHTML: (
            /*html*/
            `
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${MTUtils.getAvatar(
            userInfo["uid"],
            "big"
          )}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${userInfo["username"]}</p>
                        <p>${userInfo["dateline"]}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${userInfo["action"]}</p>
                    <p>到期: ${userInfo["groupexpiry"]}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${userInfo["uid"]}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${MTUtils.getAvatar(
            userInfo["operatorid"],
            "big"
          )}">
                        <p>${userInfo["operator"]}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${userInfo["reason"]}
                    </div>
                    </div>
                </div>
                `
          )
        },
        {
          "data-name": userInfo.username,
          "data-uid": userInfo.uid,
          "data-operator": userInfo.operator,
          "data-operator-uid": userInfo.operatorid
        }
      );
      domUtils.on($item, "click", ".blackhome-user img", function() {
        window.open(
          `home.php?mod=space&uid=${userInfo.uid}&do=profile`,
          "_blank"
        );
      });
      domUtils.on($item, "click", ".blackhome-operator-user img", function() {
        window.open(
          `home.php?mod=space&uid=${userInfo.operatorid}&do=profile`,
          "_blank"
        );
      });
      return $item;
    }
  };
  const onlineUserCSS = '.pops-alert-content{\r\n	display: flex;\r\n	flex-direction: column;\r\n}\r\n.pops-alert-content > .online-user-info{\r\n	text-align: center;\r\n	padding: 0px 6px;\r\n}\r\n.online-user-filter input {\r\n	width: -webkit-fill-available;\r\n	width: -moz-available;\r\n	height: 30px;\r\n	margin: 8px 20px;\r\n	border: 0;\r\n	border-bottom: 1px solid;\r\n}\r\n.online-user-filter input:focus-within {\r\n	outline: none;\r\n}\r\n.online-user-list {\r\n	flex: 1;\r\n	overflow-y: auto;\r\n}\r\n.online-user-list li {\r\n	margin: 18px 0;\r\n}\r\n.online-user {\r\n	display: flex;\r\n	margin: 2px 20px;\r\n	align-items: center;\r\n}\r\n.online-user img[data-avatar] {\r\n	width: 45px;\r\n	height: 45px;\r\n	border-radius: 45px;\r\n}\r\n.online-user-list .online-user-info {\r\n	margin: 2px 14px;\r\n}\r\n.online-user-list .online-user-info p[data-name] {\r\n	margin-bottom: 4px;\r\n}\r\n.online-user-list .online-user-info span[data-sf] {\r\n	border-radius: 4px;\r\n	padding: 2px 4px;\r\n	font-weight: 500;\r\n	font-size: 14px;\r\n}\r\n.online-user-list .online-user-info span[data-uid] {\r\n	border: 1px solid #ff7600;\r\n	color: #ff7600;\r\n	border-radius: 4px;\r\n	padding: 2px 4px;\r\n	font-weight: 500;\r\n	font-size: 14px;\r\n	width: fit-content;\r\n	width: -moz-fit-content;\r\n	margin: 10px 0;\r\n}\r\n.online-user-list .online-user-info span[data-sf="会员"] {\r\n	color: #88b500;\r\n	border: 1px solid #88b500;\r\n}\r\n.online-user-list .online-user-info span[data-sf="版主"] {\r\n	color: #2db5e3;\r\n	border: 1px solid #2db5e3;\r\n}\r\n.online-user-list .online-user-info span[data-sf="超级版主"] {\r\n	color: #e89e38;\r\n	border: 1px solid #e89e38;\r\n}\r\n.online-user-list .online-user-info span[data-sf="管理员"] {\r\n	color: #ff5416;\r\n	border: 1px solid #ff5416;\r\n}\r\n';
  const MTOnlineUser = {
    $data: {},
    init() {
      this.registerMenu();
    },
    /**
     * 注册菜单
     */
    registerMenu() {
      ElementUtils.registerLeftMenu({
        name: "在线用户",
        iconColor: "#2d92ff",
        icon: "",
        callback: () => {
          this.showOnlineUser();
        }
      });
    },
    /**
     * 显示在线用户dialog
     */
    async showOnlineUser() {
      let $loading = Qmsg.loading("正在获取在线用户名单中...");
      let onlineUserInfo = await this.getOnlineUserListInfo();
      $loading.close();
      if (!onlineUserInfo) {
        return;
      }
      let $alert = __pops.alert({
        title: {
          text: "在线用户",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                <div class="online-user-info">${onlineUserInfo.totalOnline} 人在线 - ${onlineUserInfo.onlineUser} 会员${onlineUserInfo.invisibleUser == 0 ? "" : `(${onlineUserInfo.invisibleUser}隐身)`} - ${onlineUserInfo.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `
          ),
          html: true
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default"
          }
        },
        width: "88vw",
        height: "82vh",
        style: onlineUserCSS
      });
      let $list = $alert.$shadowRoot.querySelector(".online-user-list");
      let $filterInput = $alert.$shadowRoot.querySelector(
        ".online-user-filter input"
      );
      onlineUserInfo.data.forEach((item) => {
        let $item = this.createListViewItem(item);
        $list.appendChild($item);
      });
      Qmsg.success(`成功获取 ${onlineUserInfo.data.length}条数据`);
      let isSeaching = false;
      DOMUtils.on(
        $filterInput,
        ["propertychange", "input"],
        utils.debounce(() => {
          let inputText = $filterInput.value.trim();
          if (isSeaching) {
            return;
          }
          isSeaching = true;
          if (inputText == "") {
            $alert.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach((item) => {
              item.removeAttribute("style");
            });
            isSeaching = false;
            return;
          }
          $alert.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach((item) => {
            if (item.getAttribute("data-name").match(new RegExp(inputText, "ig")) || item.getAttribute("data-sf").match(new RegExp(inputText, "ig")) || item.getAttribute("data-uid").match(new RegExp(inputText, "ig"))) {
              item.removeAttribute("style");
            } else {
              item.setAttribute("style", "display:none;");
            }
          });
          isSeaching = false;
        })
      );
    },
    /**
     * 获取在线用户名单信息
     */
    async getOnlineUserListInfo() {
      let searchParamsData = {
        showoldetails: "yes"
      };
      let response = await httpx.get(
        `/forum.php?${utils.toSearchParamsStr(searchParamsData)}`,
        {
          headers: {
            "User-Agent": utils.getRandomPCUA()
          }
        }
      );
      if (!response.status) {
        return;
      }
      let pageHTML = utils.parseFromString(
        response.data.responseText,
        "text/html"
      );
      let result = {
        data: [],
        totalOnline: 0,
        onlineUser: 0,
        noRegisterUser: 0,
        invisibleUser: 0
      };
      let onlineList = pageHTML.querySelectorAll("#onlinelist ul li");
      onlineList.forEach((item) => {
        let uid = item.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1];
        let avatar = MTUtils.getAvatar(uid, "middle");
        let name = item.querySelector("a").innerText;
        let sf = "";
        let space = item.querySelector("a").getAttribute("href");
        let memberSrc = item.querySelector("img").src;
        if (memberSrc.indexOf("online_member") != -1) {
          sf = "会员";
        } else if (memberSrc.indexOf("online_moderator") != -1) {
          sf = "版主";
        } else if (memberSrc.indexOf("online_supermod") != -1) {
          sf = "超级版主";
        } else if (memberSrc.indexOf("online_admin") != -1) {
          sf = "管理员";
        } else {
          sf = "未知身份";
        }
        result.data.push({
          uid,
          avatar,
          name,
          sf,
          space
        });
      });
      let onlineInfo = pageHTML.querySelector("#online div.bm_h span.xs1").textContent;
      result.totalOnline = utils.parseInt(
        onlineInfo.match(/([0-9]*)\s*人在线/i),
        0
      );
      result.onlineUser = utils.parseInt(
        onlineInfo.match(/([0-9]*)\s*会员/i),
        0
      );
      result.noRegisterUser = utils.parseInt(
        onlineInfo.match(/([0-9]*)\s*位游客/i),
        0
      );
      result.invisibleUser = utils.parseInt(
        onlineInfo.match(/([0-9]*)\s*隐身/i),
        0
      );
      return result;
    },
    /**
     * 创建在线用户节点
     */
    createListViewItem(userInfo) {
      let $item = DOMUtils.createElement(
        "div",
        {
          className: "online-item",
          innerHTML: (
            /*html*/
            `
                <div class="online-user">
                    <img data-avatar src="${userInfo["avatar"]}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${userInfo["name"]}</p>
                        <span data-sf="${userInfo["sf"]}">${userInfo["sf"]}</span>
                        <span data-uid>UID: ${userInfo["uid"]}</span>
                    </div>
                </div>
            `
          )
        },
        {
          "data-name": userInfo.name,
          "data-uid": userInfo.uid,
          "data-sf": userInfo.sf
        }
      );
      DOMUtils.on($item, "click", ".online-user-avatar", (event) => {
        utils.preventEvent(event);
        window.open(
          `home.php?mod=space&uid=${userInfo.uid}&do=profile`,
          "_blank"
        );
      });
      return $item;
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
  const MTAutoSignIn = {
    $key: {
      sign: "mt-sign-time"
    },
    init() {
      this.sign();
    },
    /**
     * 判断今日是否已签到
     */
    checkSignInfo() {
      let signInfo = this.getSignInfo();
      let findValue = signInfo.find((it) => {
        return it.hostName === window.location.hostname;
      });
      if (findValue) {
        if (utils.formatTime(Date.now(), "yyyyMMdd") !== utils.formatTime(findValue.time, "yyyyMMdd")) {
          return false;
        }
        return true;
      }
      return false;
    },
    /**
     * 设置签到信息
     */
    setSignInfo() {
      let signInfo = {
        hostName: window.location.hostname,
        time: Date.now()
      };
      let localSignInfo = this.getSignInfo();
      let findIndex = localSignInfo.findIndex((it) => {
        return it.hostName === signInfo.hostName;
      });
      if (findIndex !== -1) {
        localSignInfo.splice(findIndex, 1);
      }
      localSignInfo.push(signInfo);
      _GM_setValue(this.$key.sign, localSignInfo);
    },
    /**
     * 获取签到信息
     */
    getSignInfo() {
      let localSignInfo = _GM_getValue(this.$key.sign, []);
      if (!Array.isArray(localSignInfo)) {
        this.clearSignInfo();
        return [];
      }
      return localSignInfo;
    },
    /**
     * 获取域名的签到信息
     * @param hostName 域名
     */
    getHostNameSignInfo(hostName = window.location.hostname) {
      let localSignInfo = this.getSignInfo();
      return localSignInfo.find((it) => {
        return it.hostName === hostName;
      });
    },
    /**
     * 清空签到信息
     * @param hostName 域名
     */
    clearSignInfo(hostName) {
      if (typeof hostName === "string") {
        let signInfo = this.getSignInfo();
        let findIndex = signInfo.findIndex((it) => {
          return it.hostName === hostName;
        });
        if (findIndex !== -1) {
          signInfo.splice(findIndex, 1);
        }
        _GM_setValue(this.$key.sign, signInfo);
      } else {
        _GM_deleteValue(this.$key.sign);
      }
    },
    /**
     * 检测是否登录
     */
    checkLogin() {
      if (MTUtils.envIsMobile()) {
        let mobile_login_exitBtn = $(
          "a[href*='member.php?mod=logging&action=logout']"
        );
        return Boolean(mobile_login_exitBtn);
      } else {
        let pc_login = $("#comiis_key");
        return Boolean(pc_login);
      }
    },
    /**
     * 签到
     */
    async sign() {
      if (this.checkSignInfo()) {
        log.info("今日已签到");
        return;
      }
      let formHash = await MTUtils.getFormHash();
      if (formHash == null) {
        if ($("#comiis_picshowbox")) {
          log.info("当前为评论区的看图模式 ");
          return;
        }
        this.clearSignInfo(window.location.hostname);
        Qmsg.error("自动签到：获取账号formhash失败", {
          consoleLogContent: true
        });
        return;
      }
      let useFetch = Boolean(Panel.getValue("mt-auto-sign-useFetch"));
      let userAgent = utils.getRandomPCUA();
      let signSuccessCallBack = () => {
        this.setSignInfo();
      };
      let signFailedCallBack = () => {
        this.clearSignInfo(window.location.hostname);
      };
      let unknownSignContentCallback = (content) => {
        let $alert = pops.alert({
          title: {
            text: "未知签到内容",
            position: "center"
          },
          content: {
            text: "",
            html: false
          },
          width: "88vw",
          height: "300px"
        });
        let $content = $alert.$shadowRoot.querySelector(
          ".pops-alert-content"
        );
        $content.innerText = content;
      };
      let sign_plugin = [
        {
          checkPluginEnableUrl: "/plugin.php?id=k_misign:sign",
          async sign() {
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
                fetch: useFetch,
                headers: {
                  "User-Agent": userAgent
                },
                allowInterceptConfig: false
              }
            );
            if (!response.status) {
              Qmsg.error("签到：网络异常，请求失败", {
                consoleLogContent: true
              });
              return;
            }
            signSuccessCallBack();
            log.info("签到信息：", response);
            let responseText = response.data.responseText;
            let CDATA = utils.parseCDATA(responseText);
            let CDATAElement = domUtils.parseHTML(
              `<div>${CDATA}</div>`,
              true,
              false
            );
            let content = domUtils.text(CDATAElement);
            if (content.includes("需要先登录")) {
              Qmsg.error("签到：请先登录账号", {
                timeout: 3e3,
                consoleLogContent: true
              });
              signFailedCallBack();
              return;
            } else if (content.includes("请稍后再试") || content.includes("您已经被列入黑名单") || content.includes("绑定手机号后才可以签到") || content.includes("您所在用户组不允许使用")) {
              Qmsg.error("签到：" + content, {
                timeout: 5e3
              });
              return;
            } else if (content.includes("今日已签") || content.includes("今日已经签到")) {
              Qmsg.info("签到：" + content);
              return;
            } else if (responseText.includes(
              "您当前的访问请求当中含有非法字符，已经被系统拒绝"
            )) {
              Qmsg.error(
                "签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",
                {
                  timeout: 6e3
                }
              );
              return;
            } else if (useFetch && "location" in utils.toJSON(responseText)) {
              Qmsg.success("签到: 签到成功");
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
            unknownSignContentCallback(responseText);
          }
        },
        {
          checkPluginEnableUrl: "/plugin.php?id=dsu_paulsign:sign",
          async sign() {
            let searchParamsData = {
              id: "dsu_paulsign:sign",
              operation: "qiandao",
              infloat: 1,
              inajax: 1
            };
            let response = await httpx.post(
              `/plugin.php?${utils.toSearchParamsStr(searchParamsData)}`,
              {
                data: {
                  formhash: formHash,
                  qdxq: "kx",
                  qdmode: 3,
                  todaysay: "",
                  fastreply: 0
                },
                processData: true,
                fetch: useFetch,
                headers: {
                  "User-Agent": userAgent,
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                allowInterceptConfig: false
              }
            );
            if (!response.status) {
              Qmsg.error("签到：网络异常，请求失败", {
                consoleLogContent: true
              });
              return;
            }
            signSuccessCallBack();
            log.info("签到信息：", response);
            let responseText = response.data.responseText;
            if (responseText.includes("签到成功")) {
              Qmsg.success("签到：签到成功");
              return;
            }
            if (responseText.includes("今日已经签到")) {
              Qmsg.info("签到：您今日已经签到，请明天再来！");
              return;
            }
            unknownSignContentCallback(responseText);
          }
        }
      ];
      for (let index = 0; index < sign_plugin.length; index++) {
        const signPluginItem = sign_plugin[index];
        let checkResponse = await httpx.get(signPluginItem.checkPluginEnableUrl, {
          fetch: useFetch,
          headers: {
            "User-Agent": utils.getRandomPCUA()
          },
          allowInterceptConfig: false
        });
        if (!checkResponse.status) {
          log.error("签到：检查签到插件是否启用的请求失败", checkResponse);
          continue;
        }
        let pluginDoc = domUtils.parseHTML(
          checkResponse.data.responseText,
          true,
          true
        );
        if (pluginDoc.querySelector("#messagetext") || checkResponse.data.responseText.includes("插件不存在或已关闭")) {
          log.error(
            `插件：${signPluginItem.checkPluginEnableUrl} 未启用或不存在`
          );
          continue;
        }
        await signPluginItem.sign();
        break;
      }
    }
  };
  const MTRouter = {
    /**
     * 克米签到页面
     */
    isKMiSign() {
      return window.location.pathname.startsWith("/k_misign-sign.html");
    },
    /**
     * 帖子
     */
    isPost() {
      return window.location.pathname.startsWith("/thread-") || window.location.pathname.startsWith("/forum.php") && window.location.search.startsWith("?mod=viewthread");
    },
    /**
     * 首页、精华
     */
    isPage() {
      return Boolean(window.location.pathname.match(/^\/page-([0-9]+).html/g));
    },
    /**
     * 导读链接
     */
    isGuide() {
      return window.location.pathname.startsWith("/forum.php") && window.location.search.startsWith("?mod=guide");
    },
    /**
     * 板块
     */
    isPlate() {
      return Boolean(
        window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)
      );
    },
    /**
     * 搜索页面
     */
    isSearch() {
      return window.location.pathname.startsWith("/search.php");
    },
    /**
     * 空间
     */
    isSpace() {
      return window.location.pathname.startsWith("/home.php") && window.location.search.startsWith("?mod=space");
    },
    /**
     * 我的个人空间
     */
    isMySpace() {
      return window.location.pathname.startsWith("/home.php") && window.location.search.startsWith("?mod=space&do=profile&mycenter");
    },
    /**
     * 个人空间页的@点进去
     */
    isSpaceWithAt() {
      return window.location.pathname.startsWith("/space-uid-");
    },
    /**
     * 社区列表
     */
    isForumList() {
      return window.location.pathname.startsWith("/forum.php") && window.location.search.startsWith("?forumlist");
    },
    /**
     * 消息提醒
     */
    isMessage() {
      return window.location.pathname.startsWith("/home.php") && window.location.search.startsWith("?mod=space&do=notice");
    },
    /**
     * 消息提醒列表
     */
    isMessageList() {
      return window.location.pathname.startsWith("/home.php") && window.location.search.startsWith("?mod=space&do=pm");
    },
    /**
     * 积分商城
     */
    isPointsMall() {
      return window.location.pathname.startsWith(
        "/keke_integralmall-keke_integralmall.html"
      ) || window.location.pathname.startsWith("/plugin.php") && window.location.search.startsWith("?id=keke_integralmal");
    },
    /**
     * 帖子发布/回复页面
     */
    isPostPublish() {
      return window.location.pathname.startsWith("/forum.php") && window.location.search.startsWith("?mod=post");
    },
    /**
     * 投票页面
     */
    isPostPublish_voting() {
      return window.location.pathname.startsWith("/forum.php") && window.location.search.includes("&special=1") || window.location.search.includes("&fid=42");
    },
    /**
     * 帖子编辑页面
     */
    isPostPublish_edit() {
      return this.isPostPublish() && window.location.search.includes("&action=edit");
    },
    /**
     * 发帖页面，该页面是尚未存入草稿
     */
    isPostPublish_newthread() {
      return this.isPostPublish() && window.location.search.includes("&action=newthread");
    },
    /**
     * 回复编辑页面
     */
    isPostPublish_reply() {
      return this.isPostPublish() && window.location.search.includes("&action=reply");
    }
  };
  const optimizationCSS$1 = '#comiis_foot_menu_beautify {\r\n	position: fixed;\r\n	display: inline-flex;\r\n	z-index: 90;\r\n	left: 0;\r\n	right: 0;\r\n	bottom: 0;\r\n	width: 100%;\r\n	height: 48px;\r\n	overflow: hidden;\r\n	align-content: center;\r\n	justify-content: center;\r\n	align-items: center;\r\n}\r\n#comiis_foot_menu_beautify_big {\r\n	position: fixed;\r\n	display: inline-flex;\r\n	flex-direction: column;\r\n	z-index: 92;\r\n	left: 0;\r\n	right: 0;\r\n	bottom: 0;\r\n	width: 100%;\r\n	min-height: 120px;\r\n	overflow: hidden;\r\n	align-content: center;\r\n	justify-content: center;\r\n	align-items: center;\r\n}\r\n#comiis_foot_menu_beautify input.bg_e.f_c::-webkit-input-placeholder {\r\n	padding-left: 10px;\r\n	color: #999;\r\n}\r\n#comiis_foot_menu_beautify input.bg_e.f_c::-moz-input-placeholder {\r\n	padding-left: 10px;\r\n	color: #999;\r\n}\r\n#comiis_foot_menu_beautify .reply_area ul li a {\r\n	display: block;\r\n	width: 22px;\r\n	height: 22px;\r\n	padding: 4px 8px;\r\n	margin: 8px 0;\r\n	position: relative;\r\n}\r\n#comiis_foot_menu_beautify .reply_area ul {\r\n	display: inline-flex;\r\n	align-content: center;\r\n	align-items: center;\r\n	justify-content: center;\r\n}\r\n#comiis_foot_menu_beautify .reply_area,\r\n#comiis_foot_menu_beautify .reply_area ul {\r\n	width: 100%;\r\n}\r\n#comiis_foot_menu_beautify .reply_area li a i {\r\n	width: 22px;\r\n	height: 22px;\r\n	line-height: 22px;\r\n	font-size: 22px;\r\n}\r\n#comiis_foot_menu_beautify .reply_area li a span {\r\n	position: absolute;\r\n	display: block;\r\n	font-size: 10px;\r\n	height: 14px;\r\n	line-height: 14px;\r\n	padding: 0 6px;\r\n	right: -8px;\r\n	top: 4px;\r\n	overflow: hidden;\r\n	border-radius: 20px;\r\n}\r\n#comiis_foot_menu_beautify li[data-attr="回帖"] input {\r\n	border: transparent;\r\n	border-radius: 15px;\r\n	height: 30px;\r\n	width: 100%;\r\n}\r\n#comiis_foot_menu_beautify_big .comiis_smiley_box {\r\n	padding: 6px 6px 0;\r\n}\r\n#comiis_foot_menu_beautify_big .reply_area {\r\n	margin: 10px 0 5px 0;\r\n}\r\n#comiis_foot_menu_beautify_big .reply_area ul {\r\n	display: inline-flex;\r\n	align-content: center;\r\n	justify-content: center;\r\n	align-items: flex-end;\r\n}\r\n#comiis_foot_menu_beautify_big li[data-attr="回帖"] {\r\n	width: 75vw;\r\n	margin-right: 15px;\r\n}\r\n#comiis_foot_menu_beautify_big .reply_user_content {\r\n	width: 75vw;\r\n	word-wrap: break-word;\r\n	overflow: hidden;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	margin: 8px 10px;\r\n}\r\n#comiis_foot_menu_beautify_big li[data-attr="发表"] .fastpostform_new {\r\n	text-align: center;\r\n	margin-bottom: 28px;\r\n}\r\n#comiis_foot_menu_beautify_big li[data-attr="发表"] .fastpostform_new i {\r\n	font-size: 22px;\r\n}\r\n#comiis_foot_menu_beautify_big li[data-attr="发表"] input {\r\n	width: 60px;\r\n	height: 30px;\r\n	border: transparent;\r\n	color: #fff;\r\n	background: #d1c9fc;\r\n	border-radius: 30px;\r\n	margin-bottom: 6px;\r\n}\r\n#comiis_foot_menu_beautify_big li[data-attr="发表"] input[data-text="true"] {\r\n	background: #7a61fb;\r\n}\r\n#comiis_foot_menu_beautify_big li[data-attr="回帖"] textarea {\r\n	padding: 10px 10px 10px 10px;\r\n	border: transparent;\r\n	border-radius: 6px;\r\n	min-height: 70px;\r\n	max-height: 180px;\r\n	background: #e9e8ec;\r\n	overflow-y: auto;\r\n	width: -webkit-fill-available;\r\n	width: -moz-available;\r\n}\r\n#comiis_foot_menu_beautify .reply_area li[data-attr="回帖"] {\r\n	width: 65%;\r\n	margin: 0 3%;\r\n	text-align: center;\r\n}\r\n#comiis_foot_menu_beautify .reply_area li:not(first-child) {\r\n	width: 7%;\r\n	text-align: -webkit-center;\r\n	text-align: center;\r\n}\r\n#comiis_foot_menu_beautify_big .other_area {\r\n	width: 100%;\r\n	text-align: center;\r\n}\r\n#comiis_foot_menu_beautify_big .other_area .menu_icon a {\r\n	margin: 0 20px;\r\n}\r\n#comiis_foot_menu_beautify_big .other_area i {\r\n	font-size: 24px;\r\n}\r\n#comiis_foot_menu_beautify_big .other_area #comiis_insert_ubb_tab i {\r\n	font-size: 16px;\r\n}\r\n#comiis_foot_menu_beautify_big .other_area .menu_body {\r\n	background: #f4f4f4;\r\n}\r\n#comiis_foot_menu_beautify_big\r\n	.other_area\r\n	.menu_body\r\n	.comiis_smiley_box\r\n	.comiis_optimization {\r\n	max-height: 140px;\r\n	overflow-y: auto;\r\n	flex-direction: column;\r\n}\r\n#comiis_foot_menu_beautify_big\r\n	.other_area\r\n	.menu_body\r\n	.comiis_smiley_box\r\n	.bqbox_t {\r\n	background: #fff;\r\n}\r\n#comiis_foot_menu_beautify_big\r\n	.other_area\r\n	.menu_body\r\n	.comiis_smiley_box\r\n	.bqbox_t\r\n	ul#comiis_smilies_key\r\n	li\r\n	a.bg_f.b_l.b_r {\r\n	background: #f4f4f4 !important;\r\n}\r\n#comiis_foot_menu_beautify_big\r\n	.menu_body\r\n	#comiis_pictitle_tab\r\n	#comiis_pictitle_key {\r\n	display: -webkit-box;\r\n	top: 0;\r\n	left: 0;\r\n	height: 42px;\r\n	line-height: 42px;\r\n	overflow: hidden;\r\n	overflow-x: auto;\r\n}\r\n#comiis_foot_menu_beautify_big\r\n	.menu_body\r\n	#comiis_pictitle_tab\r\n	#comiis_pictitle_key\r\n	li {\r\n	padding: 0 10px;\r\n}\r\n#comiis_foot_menu_beautify_big\r\n	.menu_body\r\n	#comiis_insert_ubb_tab\r\n	.comiis_input_style,\r\n#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab .comiis_upbox {\r\n	height: 140px;\r\n	overflow-y: auto;\r\n	flex-direction: column;\r\n}\r\n#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_hello,\r\n#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_kggzs,\r\n#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_mt,\r\n#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_z4a {\r\n	display: none;\r\n}\r\n@media screen and (max-width: 350px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 14.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 350px) and (max-width: 400px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 12.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 400px) and (max-width: 450px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 11%;\r\n	}\r\n}\r\n@media screen and (min-width: 450px) and (max-width: 500px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 10%;\r\n	}\r\n}\r\n@media screen and (min-width: 500px) and (max-width: 550px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 9.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 550px) and (max-width: 600px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 9%;\r\n	}\r\n}\r\n@media screen and (min-width: 600px) and (max-width: 650px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 8.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 650px) and (max-width: 700px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 8%;\r\n	}\r\n}\r\n@media screen and (min-width: 700px) and (max-width: 750px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 7.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 750px) and (max-width: 800px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 7%;\r\n	}\r\n}\r\n@media screen and (min-width: 800px) and (max-width: 850px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 6.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 850px) and (max-width: 1200px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 6%;\r\n	}\r\n}\r\n@media screen and (min-width: 1200px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 4.5%;\r\n	}\r\n}\r\n#imglist_settings button {\r\n	font-size: 13.333px;\r\n	color: #9baacf;\r\n	outline: 0;\r\n	border: none;\r\n	height: 35px;\r\n	width: 80px;\r\n	border-radius: 10px;\r\n	box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;\r\n	font-weight: 800;\r\n	line-height: 40px;\r\n	background: #efefef;\r\n	padding: 0;\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: center;\r\n}\r\n#imglist_settings button:active {\r\n	box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,\r\n		inset -0.2rem -0.2rem 0.5rem #fff !important;\r\n	color: #638ffb !important;\r\n}\r\n\r\n#comiis_head .header_y {\r\n	display: flex;\r\n	align-content: center;\r\n	align-items: center;\r\n	justify-content: flex-end;\r\n	height: 100%;\r\n}\r\n#comiis_head .header_y input {\r\n	border: transparent;\r\n	background: 0 0;\r\n	text-align: center;\r\n	margin: 0 5px;\r\n}\r\n#comiis_head .header_y input[value="删除"] {\r\n	color: #d00;\r\n}\r\n#comiis_head .header_y input[value="保存"] {\r\n	color: #b0ff6a;\r\n}\r\n#comiis_head .header_y input[value="保存草稿"] {\r\n	color: #f90;\r\n}\r\n#comiis_head .header_y input[value="发表"] {\r\n	color: #b0ff6a;\r\n}\r\n#comiis_head .header_y input[value="回复"] {\r\n	color: #b0ff6a;\r\n}\r\n#comiis_post_tab {\r\n	color: #000;\r\n}\r\n#comiis_pictitle_tab #imglist input {\r\n	display: none;\r\n}\r\n\r\n.comiis_post_imglist .delImg {\r\n	position: absolute;\r\n	top: -5px;\r\n	left: -5px;\r\n}\r\n\r\n.comiis_post_imglist .p_img a {\r\n	float: left;\r\n	height: 36px;\r\n}\r\n#imglist .p_img a {\r\n	float: left;\r\n	height: 36px;\r\n}\r\n#imglist .del a {\r\n	padding: 0;\r\n}\r\n';
  const MTEditorSmilies = () => {
    return [
      {
        "[呵呵]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif",
        "[撇嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif",
        "[色]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif",
        "[发呆]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif",
        "[得意]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif",
        "[流泪]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif",
        "[害羞]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif",
        "[闭嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif",
        "[睡]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif",
        "[大哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif",
        "[尴尬]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif",
        "[发怒]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif",
        "[调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif",
        "[呲牙]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif",
        "[惊讶]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif",
        "[难过]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif",
        "[酷]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif",
        "[冷汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif",
        "[抓狂]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif",
        "[吐]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif",
        "[偷笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif",
        "[可爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif",
        "[白眼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif",
        "[傲慢]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif",
        "[饥饿]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif",
        "[困]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif",
        "[惊恐]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif",
        "[流汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif",
        "[憨笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif",
        "[装逼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif",
        "[奋斗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif",
        "[咒骂]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif",
        "[疑问]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif",
        "[嘘]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif",
        "[晕]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif",
        "[折磨]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif",
        "[衰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif",
        "[骷髅]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif",
        "[敲打]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif",
        "[再见]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif",
        "[擦汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif",
        "[抠鼻]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif",
        "[鼓掌]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif",
        "[糗大了]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif",
        "[坏笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif",
        "[左哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif",
        "[右哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif",
        "[哈欠]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif",
        "[鄙视]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif",
        "[委屈]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif",
        "[快哭了]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif",
        "[阴脸]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif",
        "[亲亲]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif",
        "[吓]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif",
        "[可怜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif",
        "[眨眼睛]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif",
        "[笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif",
        "[dogeQQ]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif",
        "[泪奔]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif",
        "[无奈]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif",
        "[托腮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif",
        "[卖萌]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png",
        "[斜眼笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif",
        "[喷血]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif",
        "[惊喜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif",
        "[骚扰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif",
        "[小纠结]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif",
        "[我最美]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif",
        "[菜刀]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif",
        "[西瓜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif",
        "[啤酒]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif",
        "[篮球]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif",
        "[乒乓]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif",
        "[咖啡]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif",
        "[饭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif",
        "[猪]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif",
        "[玫瑰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif",
        "[凋谢]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif",
        "[示爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif",
        "[爱心]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif",
        "[心碎]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif",
        "[蛋糕]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif",
        "[闪电]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif",
        "[炸弹]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif",
        "[刀]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif",
        "[足球]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif",
        "[瓢虫]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif",
        "[便便]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif",
        "[月亮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif",
        "[太阳]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif",
        "[礼物]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif",
        "[抱抱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif",
        "[喝彩]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif",
        "[祈祷]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif",
        "[棒棒糖]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif",
        "[药]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif",
        "[赞]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif",
        "[差劲]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif",
        "[握手]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif",
        "[胜利]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif",
        "[抱拳]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif",
        "[勾引]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif",
        "[拳头]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif",
        "[爱你]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif",
        "[NO]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif",
        "[OK]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif"
      },
      {
        "[#呵呵]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png",
        "[#滑稽]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png",
        "[#吐舌]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png",
        "[#哈哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png",
        "[#啊]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png",
        "[#酷]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png",
        "[#怒]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png",
        "[#开心]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png",
        "[#汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png",
        "[#泪]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png",
        "[#黑线]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png",
        "[#鄙视]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png",
        "[#不高兴]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png",
        "[#真棒]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png",
        "[#钱]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png",
        "[#疑问]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png",
        "[#阴险]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png",
        "[#吐]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png",
        "[#咦]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png",
        "[#委屈]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png",
        "[#花心]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png",
        "[#呼～]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png",
        "[#激动]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png",
        "[#冷]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png",
        "[#可爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png",
        "[#What？]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png",
        "[#勉强]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png",
        "[#狂汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png",
        "[#酸爽]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png",
        "[#乖]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png",
        "[#雅美蝶]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png",
        "[#睡觉]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png",
        "[#惊哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png",
        "[#哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png",
        "[#笑尿]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png",
        "[#惊讶]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png",
        "[#小乖]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png",
        "[#喷]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png",
        "[#抠鼻]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png",
        "[#捂嘴笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png",
        "[#你懂的]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png",
        "[#犀利]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png",
        "[#小红脸]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png",
        "[#懒得理]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png",
        "[#爱心]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png",
        "[#心碎]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png",
        "[#玫瑰]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png",
        "[#礼物]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png",
        "[#彩虹]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png",
        "[#太阳]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png",
        "[#月亮]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png",
        "[#钱币]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png",
        "[#咖啡]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png",
        "[#蛋糕]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png",
        "[#大拇指]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png",
        "[#胜利]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png",
        "[#爱你]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png",
        "[#OK]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png",
        "[#弱]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png",
        "[#沙发]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png",
        "[#纸巾]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png",
        "[#香蕉]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png",
        "[#便便]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png",
        "[#药丸]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png",
        "[#红领巾]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png",
        "[#蜡烛]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png",
        "[#三道杠]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png",
        "[#音乐]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png",
        "[#灯泡]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png"
      },
      {
        "[doge]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png",
        "[doge思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png",
        "[doge再见]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png",
        "[doge生气]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png",
        "[doge气哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png",
        "[doge笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png",
        "[doge调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png",
        "[doge啊哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png",
        "[doge原谅TA]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png",
        "[miao]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png",
        "[miao思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png",
        "[miao拜拜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png",
        "[miao生气]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png",
        "[miao气哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png",
        "[二哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png",
        "[摊手]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png",
        "[w并不简单]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png",
        "[w滑稽]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png",
        "[w色]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png",
        "[w爱你]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png",
        "[w拜拜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png",
        "[w悲伤]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png",
        "[w鄙视]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png",
        "[w馋嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png",
        "[w冷汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png",
        "[w打哈欠]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png",
        "[w打脸]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png",
        "[w敲打]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png",
        "[w生病]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png",
        "[w闭嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png",
        "[w鼓掌]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png",
        "[w哈哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png",
        "[w害羞]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png",
        "[w呵呵]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png",
        "[w黑线]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png",
        "[w哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png",
        "[w调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png",
        "[w可爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png",
        "[w可怜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png",
        "[w酷]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png",
        "[w困]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png",
        "[w懒得理你]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png",
        "[w流泪]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png",
        "[w怒]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png",
        "[w怒骂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png",
        "[w钱]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png",
        "[w亲亲]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png",
        "[w傻眼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png",
        "[w便秘]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png",
        "[w失望]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png",
        "[w衰]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png",
        "[w睡觉]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png",
        "[w思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png",
        "[w开心]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png",
        "[w色舔]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png",
        "[w偷笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png",
        "[w吐]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png",
        "[w抠鼻]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png",
        "[w委屈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png",
        "[w笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png",
        "[w嘻嘻]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png",
        "[w嘘]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png",
        "[w阴险]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png",
        "[w疑问]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png",
        "[w抓狂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png",
        "[w晕]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png",
        "[w右哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png",
        "[w左哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png",
        "[w肥皂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png",
        "[w奥特曼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png",
        "[w草泥马]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png",
        "[w兔子]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png",
        "[w熊猫]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png",
        "[w猪头]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png",
        "[w→_→]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png",
        "[w给力]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png",
        "[w囧]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png",
        "[w萌]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png",
        "[w神马]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png",
        "[w威武]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"
      }
    ];
  };
  const GlobalImageDelete = [];
  class MTEditorImageBed {
    option;
    $data = {
      STORAGE_KEY: "mt-image-bed-upload-history"
    };
    constructor(option) {
      this.option = option;
      GlobalImageDelete.push({
        id: this.option.id,
        callback: this.option.delImageEvent.bind(this)
      });
      this.addTab();
      domUtils.on(
        `.comiis_post_imglist[data-chartbed="${this.option.name}"] .up_btn a`,
        "click",
        async (event) => {
          let result = await this.option.uploadBtnClickEvent(event);
          if (result) {
            $(
              `.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`
            ).click();
          }
        }
      );
      domUtils.on(
        `.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`,
        "change",
        async (event) => {
          let $file = event.target;
          let clear_input = () => {
            $file.value = "";
          };
          let upload_callback = async (uploadFiles) => {
            let uploadInfo = await this.option.fileChangeEvent(
              event,
              uploadFiles
            );
            clear_input();
            if (uploadInfo.success) {
              uploadInfo.data.forEach((imageInfo) => {
                this.addImage(imageInfo);
                let $thumbImage = this.createImageBtnElement(
                  "插入",
                  imageInfo.url
                );
                this.setImageBtnDeleteEvent($thumbImage, imageInfo);
                domUtils.append(
                  `.comiis_post_imglist[data-chartbed="${this.option.name}"]`,
                  $thumbImage
                );
              });
            }
          };
          if ($file.files && $file.files.length) {
            let chooseImage = $file.files;
            if (Panel.getValue("mt-image-bed-watermark-enable")) {
              let $loading = Qmsg.loading("处理水印中...");
              let needUploadImageArray = [];
              let needUploadImageFileArray = [];
              await Promise.all(
                Array.from($file.files).map(async (item, index) => {
                  if (item.type === "image/gif") {
                    let image_base64 = await utils.parseFileToBase64(item);
                    needUploadImageArray.push(image_base64);
                    needUploadImageFileArray.push(item);
                  } else {
                    Qmsg.info(`添加水印 ${index + 1}/${chooseImage.length}`);
                    var watermark = new window.Watermark();
                    await watermark.setFile(item);
                    watermark.addText({
                      text: [
                        Panel.getValue("mt-image-bed-watermark-text")
                      ],
                      color: Panel.getValue(
                        "mt-image-bed-watermark-text-color"
                      ),
                      fontSize: Panel.getValue(
                        "mt-image-bed-watermark-font-size"
                      ),
                      globalAlpha: Panel.getValue(
                        "mt-image-bed-watermark-font-opacity"
                      ),
                      xMoveDistance: Panel.getValue(
                        "mt-image-bed-watermark-left-right-margin"
                      ),
                      yMoveDistance: Panel.getValue(
                        "mt-image-bed-watermark-top-bottom-margin"
                      ),
                      rotateAngle: Panel.getValue(
                        "mt-image-bed-watermark-rotate"
                      )
                    });
                    needUploadImageArray.push(watermark.render("png"));
                    needUploadImageFileArray.push(
                      utils.parseBase64ToFile(
                        watermark.render("png"),
                        "WaterMark_" + item.name
                      )
                    );
                  }
                })
              );
              $loading.close();
              chooseImage = needUploadImageFileArray;
              if (Panel.getValue("mt-image-bed-watermark-autoAddWaterMark")) {
                await upload_callback(chooseImage);
              } else {
                __pops.confirm({
                  title: {
                    text: "水印预览",
                    position: "center"
                  },
                  content: {
                    text: (
                      /*html*/
                      `
									<div class="upload-image-water">${needUploadImageArray.map((item) => {
                      return (
                        /*html*/
                        `<img src="${item}" crossoriginNew="anonymous" loading="lazy">`
                      );
                    }).join("\n")}
									</div>
									`
                    ),
                    html: true
                  },
                  btn: {
                    ok: {
                      text: "继续上传",
                      async callback(eventDetails, event2) {
                        eventDetails.close();
                        await upload_callback(chooseImage);
                      }
                    },
                    close: {
                      callback(details, event2) {
                        details.close();
                        clear_input();
                      }
                    },
                    cancel: {
                      callback(eventDetails, event2) {
                        eventDetails.close();
                        clear_input();
                      }
                    }
                  },
                  width: "88vw",
                  height: "80vh",
                  style: (
                    /*css*/
                    `
								.upload-image-water {

								}
								.upload-image-water img{
									width: 100%;
								}
								`
                  )
                });
              }
            } else {
              await upload_callback(chooseImage);
            }
          }
        }
      );
    }
    /**
     * 添加图床标签
     */
    addTab() {
      let $picture_key = $("#comiis_pictitle_key");
      let $history = $picture_key.querySelector(
        "a[data-type='history']"
      );
      let tabHTML = (
        /*html*/
        `
            <li>
                <a href="javascript:;" class="comiis-picture-tab" data-type="image-bed">${this.option.name}</a>
            </li>
        `
      );
      if (!$history) {
        let $history_parent = domUtils.createElement("li");
        $history = domUtils.createElement(
          "a",
          {
            href: "javascript:;",
            className: "comiis-picture-tab",
            innerHTML: `历史图片`
          },
          { "data-type": "history" }
        );
        domUtils.on($history, "click", () => {
          this.initHistoryUploadImageList();
        });
        domUtils.append($history_parent, $history);
        domUtils.append($picture_key, $history_parent);
      }
      domUtils.before($history.parentElement, tabHTML);
      let $box = $("#comiis_pictitle_tab .bqbox_t");
      let $historyBox = Array.from(
        $$("#comiis_pictitle_tab .comiis_upbox")
      ).find((item) => Boolean(item.querySelector("#imglist_history")));
      if (!$historyBox) {
        $historyBox = domUtils.createElement(
          "div",
          {
            className: "comiis_upbox bg_f cl",
            innerHTML: (
              /*html*/
              `
					<ul class="comiis_post_imglist cl" id="imglist_history">	
                    </ul>
				`
            )
          },
          {
            style: "display: none;"
          }
        );
        domUtils.before($box, $historyBox);
        $historyBox = Array.from(
          $$("#comiis_pictitle_tab .comiis_upbox")
        ).find((item) => Boolean(item.querySelector("#imglist_history")));
      }
      domUtils.before(
        $historyBox,
        /*html*/
        `
            <div class="comiis_upbox bg_f cl" style="display: none;">
                <ul class="comiis_post_imglist cl" data-chartbed="${this.option.name}">
                    <li class="up_btn">
                        <a href="javascript:;" class="bg_e b_ok f_d">
                            <i class="comiis_font"></i>
                            
                        </a>
                        <input type="file" name="Filedata" accept="image/*" multiple="" style="display: none;">
                    </li>				
                </ul>
            </div>
            `
      );
    }
    /**
     * 创建图片缩略图，用于插入
     */
    createImageBtnElement(labelName, url) {
      let $li = domUtils.createElement("li", {
        innerHTML: (
          /*html*/
          `
            <span class="delImg" data-id="${this.option.id}" data-name="${this.option.name}">
                <a href="javascript:;">
                    <i class="comiis_font f_g"></i>
                </a>
            </span>
            <span class="charu f_f">${labelName}</span>
            <span class="p_img">
                <a href="javascript:;"
                onclick="comiis_addsmilies('[img]${url}[/img]')">
                    <img style="height:54px;width:54px;" 
                        title="${url}" 
                        src="${url}" 
                        loading="lazy"
                        class="vm b_ok"></a>
            </span>
            `
        )
      });
      return $li;
    }
    /**
     * 初始化历史上传图片列表
     */
    initHistoryUploadImageList() {
      let $imglist_history = $(
        "#comiis_pictitle_tab #imglist_history"
      );
      $imglist_history.innerHTML = "";
      let $fragment = document.createDocumentFragment();
      this.getAllImage().forEach((item) => {
        let $thumbImage = this.createImageBtnElement(
          item.labelName,
          item.data.url
        );
        this.setHistoryImageBtnDeleteEvent($thumbImage, item);
        $fragment.appendChild($thumbImage);
      });
      $imglist_history.appendChild($fragment);
    }
    /**
     * 设置图片缩略图的删除事件
     */
    setImageBtnDeleteEvent($ele, data) {
      let $delImg = $ele.querySelector(".delImg");
      domUtils.on($delImg, "click", async (event) => {
        let result = await this.option.delImageEvent(event, data);
        if (result) {
          let deleteStorageStatus = this.deleteImage(this.option.id, data);
          if (deleteStorageStatus) {
            domUtils.remove($ele);
          }
        }
      });
    }
    /**
     * 设置历史图片图片缩略图的删除事件
     */
    setHistoryImageBtnDeleteEvent($ele, data) {
      let $delImg = $ele.querySelector(".delImg");
      domUtils.on($delImg, "click", async (event) => {
        let findValue = GlobalImageDelete.find((item) => item.id === data.id);
        if (!findValue) {
          return;
        }
        let result = await findValue.callback(event, data.data);
        if (result) {
          let deleteStorageStatus = this.deleteImage(data.id, data.data);
          if (deleteStorageStatus) {
            domUtils.remove($ele);
          }
        }
      });
    }
    /**
     * 存储历史记录图片
     */
    addImage(info) {
      let allData = _GM_getValue(this.$data.STORAGE_KEY, []);
      allData.push({
        id: this.option.id,
        name: this.option.name,
        labelName: this.option.labelName,
        data: info
      });
      _GM_setValue(this.$data.STORAGE_KEY, allData);
    }
    /**
     * 查询所有上传的历史图片
     */
    getAllImage() {
      let allData = _GM_getValue(this.$data.STORAGE_KEY, []);
      return allData;
    }
    /**
     * 删除历史记录图片
     */
    deleteImage(id, data) {
      let allData = this.getAllImage();
      let findIndex = allData.findIndex(
        (item) => item.id === id && JSON.stringify(item.data) === JSON.stringify(data)
      );
      if (findIndex != -1) {
        allData.splice(findIndex, 1);
        _GM_setValue(this.$data.STORAGE_KEY, allData);
        return true;
      } else {
        return false;
      }
    }
  }
  const MTEditorImageBed_Hello = {
    $data: {
      get account() {
        return Panel.getValue("mt-image-bed-hello-account");
      },
      get password() {
        return Panel.getValue("mt-image-bed-hello-password");
      },
      get token() {
        return Panel.getValue("mt-image-bed-hello-token");
      }
    },
    $code: {
      401: "未登录或授权失败",
      403: "管理员关闭了接口功能或没有该接口权限",
      429: "超出请求配额，请求受限",
      500: "服务端出现异常"
    },
    $config: {
      base_url: "https://www.helloimg.com/api/v1",
      TAG: "Hello图床："
    },
    $tabConfig: {
      id: "www.helloimg.com",
      name: "Hello图床",
      labelName: "hello"
    },
    init() {
      const that = this;
      new MTEditorImageBed({
        id: this.$tabConfig.id,
        name: this.$tabConfig.name,
        labelName: this.$tabConfig.labelName,
        async uploadBtnClickEvent(event) {
          return await that.checkLogin();
        },
        async fileChangeEvent(event, fileList) {
          let uploadList = [];
          let $loading = Qmsg.loading("上传中...");
          let flag = true;
          for (let index = 0; index < Array.from(fileList).length; index++) {
            const file = Array.from(fileList)[index];
            let result = await that.uploadImage(file);
            if (result) {
              uploadList.push({
                url: result.data.links.url,
                data: result.data
              });
              flag = flag && true;
            } else {
              flag = flag && false;
            }
          }
          $loading.close();
          return {
            success: flag,
            data: uploadList
          };
        },
        storageSaveCallBack(data) {
          return data.data;
        },
        async delImageEvent(event, data) {
          let isLogin = await that.checkLogin();
          if (isLogin) {
            let $loading = Qmsg.loading("正在删除图片...");
            let deleteResult = await that.deleteImage(data.data.key) ?? false;
            $loading.close();
            return deleteResult;
          } else {
            return false;
          }
        }
      });
    },
    /**
     * 检测是否登录
     */
    async checkLogin() {
      if (!this.$data.account) {
        Qmsg.error(`${this.$config.TAG}请先配置账号`);
        return false;
      }
      if (!this.$data.password) {
        Qmsg.error(`${this.$config.TAG}请先配置密码`);
        return false;
      }
      if (!this.$data.token) {
        Qmsg.error(`${this.$config.TAG}请先配置token`);
        return false;
      }
      return true;
    },
    /**
     * 上传图片
     * @param imageFile
     */
    async uploadImage(imageFile) {
      let formData = new FormData();
      formData.append("file", imageFile);
      formData.append("permission", "0");
      formData.append("strategy_id", "0");
      formData.append("album_id", "0");
      let response = await httpx.post(`${this.$config.base_url}/upload`, {
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.$data.token}`,
          "User-Agent": utils.getRandomPCUA(),
          Referer: `${this.$config.base_url}/`,
          Origin: this.$config.base_url
        },
        allowInterceptConfig: false
      });
      if (!response.status) {
        log.error(response);
        Qmsg.error(this.$config.TAG + "网络异常，上传图片失败");
        return;
      }
      if (response.data.status in this.$code) {
        log.error(response);
        Qmsg.error(this.$config.TAG + this.$code[response.data.status]);
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      log.info(data);
      if (!data.status) {
        Qmsg.error(this.$config.TAG + data.message);
        return;
      }
      Qmsg.success(this.$config.TAG + "上传成功");
      let file_reader = new FileReader();
      file_reader.readAsDataURL(imageFile);
      return await new Promise((resolve) => {
        file_reader.onload = function() {
          let imageUri = this.result;
          let result = {
            imageUri,
            data: data.data
          };
          resolve(result);
        };
      });
    },
    /**
     * 删除图片
     * @param imageKey 删除的key
     */
    async deleteImage(imageKey) {
      let response = await httpx.delete(
        this.$config.base_url + "/images/" + imageKey,
        {
          timeout: 15e3,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.$data.token}`,
            "User-Agent": utils.getRandomPCUA(),
            Referer: `${this.$config.base_url}/`,
            Origin: this.$config.base_url
          },
          allowInterceptConfig: false
        }
      );
      if (response.data.status in this.$code) {
        Qmsg.error(this.$config.TAG + this.$code[response.data.status]);
        return false;
      }
      let data = utils.toJSON(response.data.responseText);
      if (!data.status) {
        Qmsg.error(this.$config.TAG + data.message);
        return false;
      }
      Qmsg.success(this.$config.TAG + "删除成功");
      return true;
    }
  };
  const MTEditorImageBed_MT = {
    $data: {
      csrf_token: null
    },
    $config: {
      TAG: "MT图床：",
      base_url: "https://img.binmt.cc"
    },
    $tabConfig: {
      id: "img.binmt.cc",
      name: "MT图床",
      labelName: "mt"
    },
    init() {
      const that = this;
      new MTEditorImageBed({
        id: this.$tabConfig.id,
        name: this.$tabConfig.name,
        labelName: this.$tabConfig.labelName,
        async uploadBtnClickEvent(event) {
          return await that.checkLogin();
        },
        async fileChangeEvent(event, fileList) {
          let uploadList = [];
          let $loading = Qmsg.loading("上传中...");
          let flag = true;
          for (let index = 0; index < Array.from(fileList).length; index++) {
            const file = Array.from(fileList)[index];
            let result = await that.uploadImage(file);
            if (result) {
              uploadList.push({
                url: result.data.links.url,
                data: result.data
              });
              flag = flag && true;
            } else {
              flag = flag && false;
            }
          }
          $loading.close();
          return {
            success: flag,
            data: uploadList
          };
        },
        storageSaveCallBack(data) {
          return data.data;
        },
        async delImageEvent(event, data) {
          return true;
        }
      });
    },
    /**
     * 检测是否登录
     */
    async checkLogin() {
      if (!this.$data.csrf_token) {
        let $loading = Qmsg.loading("正在获取CSRF Token中...");
        let csrf_token = await this.getCSRFToken();
        $loading.close();
        if (!csrf_token) {
          return false;
        }
        this.$data.csrf_token = csrf_token;
      }
      return true;
    },
    /**
     * 获取MT图床的CSRF参数
     */
    async getCSRFToken() {
      let response = await httpx.get(this.$config.base_url, {
        allowInterceptConfig: false,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Referer: this.$config.base_url + "/",
          Origin: this.$config.base_url
        }
      });
      if (!response.status) {
        Qmsg.error(this.$config.TAG + "获取CSRF Token失败，网络异常");
        return;
      }
      let doc = domUtils.parseHTML(response.data.responseText, true, true);
      let metaCSRFToken = doc.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
      if (!metaCSRFToken) {
        return;
      }
      log.info("获取的CSRF token：", metaCSRFToken);
      Qmsg.success(this.$config.TAG + "获取CSRF Token成功");
      return metaCSRFToken;
    },
    /**
     * 上传图片
     * @param imageFile
     */
    async uploadImage(imageFile) {
      let formData = new FormData();
      formData.append("strategy_id", "2");
      formData.append("file", imageFile);
      let response = await httpx.post(`${this.$config.base_url}/upload`, {
        data: formData,
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "User-Agent": utils.getRandomAndroidUA(),
          Origin: this.$config.base_url,
          pragma: "no-cache",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          Referer: this.$config.base_url + "/",
          Pragma: "no-cache",
          "x-csrf-token": this.$data.csrf_token,
          "X-Requested-With": "XMLHttpRequest"
        },
        allowInterceptConfig: false
      });
      if (!response.status) {
        log.error(response);
        Qmsg.error(this.$config.TAG + "网络异常，上传图片失败");
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      log.info(data);
      if (!data.status) {
        log.error(response);
        Qmsg.error(this.$config.TAG + data.message || JSON.stringify(data));
        return;
      }
      Qmsg.success(this.$config.TAG + "上传成功");
      let file_reader = new FileReader();
      file_reader.readAsDataURL(imageFile);
      return await new Promise((resolve) => {
        file_reader.onload = function() {
          let imageUri = this.result;
          let result = {
            imageUri,
            data: data.data
          };
          resolve(result);
        };
      });
    }
  };
  const MTQuickUBB = () => {
    return {
      rainbow1: {
        key: "转普通彩虹",
        value: "",
        isFunc: true,
        num: 1
      },
      rainbow2: {
        key: "转黑白彩虹",
        value: "",
        isFunc: true,
        num: 2
      },
      rainbow3: {
        key: "转黑红彩虹",
        value: "",
        isFunc: true,
        num: 3
      },
      rainbow4: {
        key: "转蓝绿彩虹",
        value: "",
        isFunc: true,
        num: 4
      },
      size: {
        key: "大小",
        value: "[size=][/size]",
        tagL: "=",
        tagR: "]",
        L: "[size=]",
        R: "[/size]",
        cursorL: "[size=",
        cursorLength: 6,
        quickUBBReplace: "[size=14]replace[/size]"
      },
      color: {
        key: "颜色",
        value: "[color=][/color]",
        tagL: "=",
        tagR: "]",
        L: "[color=]",
        R: "[/color]",
        cursorL: "[color=",
        cursorLength: 7,
        quickUBBReplace: "[color=#000]replace[/color]"
      },
      b: {
        key: "加粗",
        value: "[b][/b]",
        tagL: "]",
        tagR: "[",
        L: "[b]",
        R: "[/b]",
        cursorR: "[/b]",
        cursorLength: 4,
        quickUBBReplace: "[b]replace[/b]"
      },
      u: {
        key: "下划线",
        value: "[u][/u]",
        tagL: "]",
        tagR: "[",
        L: "[u]",
        R: "[/u]",
        cursorR: "[/u]",
        cursorLength: 4,
        quickUBBReplace: "[u]replace[/u]"
      },
      i: {
        key: "倾斜",
        value: "[i][/i]",
        tagL: "]",
        tagR: "[",
        L: "[i]",
        R: "[/i]",
        cursorR: "[/i]",
        cursorLength: 4,
        quickUBBReplace: "[i]replace[/i]"
      },
      s: {
        key: "中划线",
        value: "[s][/s]",
        tagL: "]",
        tagR: "[",
        L: "[s]",
        R: "[/s]",
        cursorR: "[/s]",
        cursorLength: 4,
        quickUBBReplace: "[s]replace[/s]"
      },
      lineFeed: {
        key: "换行",
        value: "[*]",
        L: "",
        R: "[*]",
        cursorL: "[*]",
        cursorLength: 3,
        quickUBBReplace: "replace[*]"
      },
      longHorizontalLine: {
        key: "水平线",
        value: "[hr]",
        L: "",
        R: "[hr]",
        cursorL: "[hr]",
        cursorLength: 4,
        quickUBBReplace: "replace[hr]"
      },
      link: {
        key: "链接",
        value: "[url=][/url]",
        tagL: "=",
        tagR: "]",
        L: "[url=]",
        R: "[/url]",
        cursorL: "[url=",
        cursorLength: 5,
        quickUBBReplace: "[url=replace]replace[/url]"
      },
      hide: {
        key: "隐藏",
        value: "[hide]\n[/hide]",
        tagL: "]",
        tagR: "[",
        L: "[hide]",
        R: "[/hide]",
        cursorR: "[/hide]",
        cursorLength: 7,
        quickUBBReplace: "[hide]replace\n[/hide]"
      },
      quote: {
        key: "引用",
        value: "[quote][/quote]",
        tagL: "]",
        tagR: "[",
        L: "[quote]",
        R: "[/quote]",
        cursorR: "[/quote]",
        cursorLength: 8,
        quickUBBReplace: "[quote]replace[/quote]"
      },
      email: {
        key: "邮件",
        value: "[email=][/email]",
        tagL: "=",
        tagR: "]",
        L: "[email=]",
        R: "[/email]",
        cursorL: "[email=",
        cursorLength: 7,
        quickUBBReplace: "[email=replace]replace[/email]"
      }
    };
  };
  const MTUBB_Rainbow = (num, text) => {
    if (text == "") {
      return "";
    }
    var wr_text = text;
    var wr_code, wr_rgb, r, g, b, i, j, istep;
    r = 0;
    g = 0;
    b = 0;
    istep = 0;
    wr_code = "";
    if (num == 1) {
      istep = 40;
      r = 255;
      i = 1;
      j = 0;
      do {
        if (wr_text.charCodeAt(j) != 32) {
          if (g + istep < 256) {
            if (i == 1) g += istep;
          } else if (i == 1) {
            i = 2;
            g = 255;
          }
          if (r - istep > -1) {
            if (i == 2) r -= istep;
          } else if (i == 2) {
            i = 3;
            r = 0;
          }
          if (b + istep < 256) {
            if (i == 3) b += istep;
          } else if (i == 3) {
            i = 4;
            b = 255;
          }
          if (g - istep > -1) {
            if (i == 4) g -= istep;
          } else if (i == 4) {
            i = 5;
            g = 0;
          }
          if (r + istep < 256) {
            if (i == 5) r += istep;
          } else if (i == 5) {
            i = 6;
            r = 255;
          }
          if (b - istep > -1) {
            if (i == 6) b -= istep;
          } else if (i == 6) {
            i = 1;
            b = 0;
          }
          wr_rgb = "";
          wr_rgb += // @ts-ignore
          parseInt(r).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(r).toString(16)
          ) : (
            // @ts-ignore
            parseInt(r).toString(16)
          );
          wr_rgb += // @ts-ignore
          parseInt(g).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(g).toString(16)
          ) : (
            // @ts-ignore
            parseInt(g).toString(16)
          );
          wr_rgb += // @ts-ignore
          parseInt(b).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(b).toString(16)
          ) : (
            // @ts-ignore
            parseInt(b).toString(16)
          );
          wr_rgb = wr_rgb.toUpperCase();
          wr_code += `[color=#${wr_rgb}]${wr_text.charAt(j)}[/color]`;
        } else {
          wr_code += wr_text.charAt(j);
        }
        j++;
      } while (j < wr_text.length);
    } else if (num == 2) {
      istep = 255 / wr_text.length;
      for (i = 1; i < wr_text.length + 1; i++) {
        if (wr_text.charCodeAt(i - 1) != 32) {
          r += istep;
          g += istep;
          b += istep;
          if (r > 255) r = 255;
          if (g > 255) g = 255;
          if (b > 255) b = 255;
          wr_rgb = "";
          wr_rgb += // @ts-ignore
          parseInt(r).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(r).toString(16)
          ) : (
            // @ts-ignore
            parseInt(r).toString(16)
          );
          wr_rgb += // @ts-ignore
          parseInt(g).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(g).toString(16)
          ) : (
            // @ts-ignore
            parseInt(g).toString(16)
          );
          wr_rgb += // @ts-ignore
          parseInt(b).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(b).toString(16)
          ) : (
            // @ts-ignore
            parseInt(b).toString(16)
          );
          wr_rgb = wr_rgb.toUpperCase();
          wr_code += `[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
        } else {
          wr_code += wr_text.charAt(i - 1);
        }
      }
    } else if (num == 3) {
      istep = 255 / wr_text.length;
      for (i = 1; i < wr_text.length + 1; i++) {
        if (wr_text.charCodeAt(i - 1) != 32) {
          r += istep;
          g = 29;
          b = 36;
          if (r > 255) r = 255;
          if (g > 255) g = 255;
          if (b > 255) b = 255;
          wr_rgb = "";
          wr_rgb += // @ts-ignore
          parseInt(r).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(r).toString(16)
          ) : (
            // @ts-ignore
            parseInt(r).toString(16)
          );
          wr_rgb += // @ts-ignore
          parseInt(g).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(g).toString(16)
          ) : (
            // @ts-ignore
            parseInt(g).toString(16)
          );
          wr_rgb += // @ts-ignore
          parseInt(b).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(b).toString(16)
          ) : (
            // @ts-ignore
            parseInt(b).toString(16)
          );
          wr_rgb = wr_rgb.toUpperCase();
          wr_code += `[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
        } else {
          wr_code += wr_text.charAt(i - 1);
        }
      }
    } else if (num == 4) {
      istep = 255 / wr_text.length;
      for (i = 1; i < wr_text.length + 1; i++) {
        if (wr_text.charCodeAt(i - 1) != 32) {
          r = 0;
          g = 174;
          b += istep;
          if (r > 255) r = 255;
          if (g > 255) g = 255;
          if (b > 255) b = 255;
          wr_rgb = "";
          wr_rgb += // @ts-ignore
          parseInt(r).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(r).toString(16)
          ) : (
            // @ts-ignore
            parseInt(r).toString(16)
          );
          wr_rgb += // @ts-ignore
          parseInt(g).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(g).toString(16)
          ) : (
            // @ts-ignore
            parseInt(g).toString(16)
          );
          wr_rgb += // @ts-ignore
          parseInt(255 - b).toString(16).length == 1 ? (
            // @ts-ignore
            0 + parseInt(255 - b).toString(16)
          ) : (
            // @ts-ignore
            parseInt(255 - b).toString(16)
          );
          wr_rgb = wr_rgb.toUpperCase();
          wr_code += `[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
        } else {
          wr_code += wr_text.charAt(i - 1);
        }
      }
    }
    return wr_code;
  };
  const ExtendJQueryFn = function() {
    _unsafeWindow.$.fn.extend({
      insertAtCaret: function(myValue) {
        var $t = _unsafeWindow.$(this)[0];
        if (document.selection) {
          this.focus();
          var sel = document.selection.createRange();
          sel.text = myValue;
          this.focus();
        } else if ($t.selectionStart || $t.selectionStart == "0") {
          var startPos = $t.selectionStart;
          var endPos = $t.selectionEnd;
          var scrollTop = $t.scrollTop;
          $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
          this.focus();
          $t.selectionStart = startPos + myValue.length;
          $t.selectionEnd = startPos + myValue.length;
          $t.scrollTop = scrollTop;
        } else {
          this.value += myValue;
          this.focus();
        }
      },
      selectRange: function(start, end) {
        if (end === void 0) {
          end = start;
        }
        return this.each(function() {
          if ("selectionStart" in this) {
            this.selectionStart = start;
            this.selectionEnd = end;
          } else if (this.setSelectionRange) {
            this.setSelectionRange(start, end);
          } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd("character", end);
            range.moveStart("character", start);
            range.select();
          }
        });
      },
      getCursorPosition: function() {
        var el = _unsafeWindow.$(this)[0];
        var pos = 0;
        if ("selectionStart" in el) {
          pos = el.selectionStart;
        } else if ("selection" in document) {
          el.focus();
          var Sel = document.selection.createRange();
          var SelLength = document.selection.createRange().text.length;
          Sel.moveStart("character", -el.value.length);
          pos = Sel.text.length - SelLength;
        }
        return pos;
      },
      moveCursorInCenterByText: function(leftTextFlag, rightTextFlag) {
        var el = _unsafeWindow.$(this)[0];
        var el_text = el.value;
        for (let i = el.selectionStart - 1; i > 0; i--) {
          let LText = el_text[i - 1];
          let currentText = el_text[i];
          if (LText == leftTextFlag && currentText == rightTextFlag) {
            this.selectRange(i);
            break;
          }
        }
      },
      moveCursorToCenterByTextWithLeft: function(leftMatchText, _length_) {
        var el = _unsafeWindow.$(this)[0];
        var el_text = el.value;
        for (let index = el.selectionStart - 1; index > 0; index--) {
          let lTexts = el_text.substring(index - _length_, index);
          if (lTexts == leftMatchText) {
            this.selectRange(index);
            break;
          }
        }
      },
      moveCursorToCenterByTextWithRight: function(rightMatchText, _length_) {
        var el = _unsafeWindow.$(this)[0];
        var el_text = el.value;
        for (let i = el.selectionStart - 1; i > 0; i--) {
          let rTexts = el_text.substring(i, i + _length_);
          if (rTexts == rightMatchText) {
            this.selectRange(i + _length_);
            break;
          }
        }
      }
    });
  };
  let error_code = {
    1: {
      error_match: "抱歉，您填写的内容包含敏感词而无法提交",
      popup_text: "抱歉，您填写的内容包含敏感词而无法提交"
    },
    2: {
      error_match: "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
      popup_text: "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"
    },
    3: {
      error_match: "抱歉，本主题已关闭，不再接受新内容",
      popup_text: "抱歉，本主题已关闭，不再接受新内容"
    },
    4: {
      error_match: "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
      popup_text: "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"
    },
    5: {
      error_match: "抱歉，您的帖子小于 10 个字符的限制",
      popup_text: "抱歉，您的帖子小于 10 个字符的限制"
    }
  };
  let tempReplyBtnNode = null;
  const MTEditorOptimizationNormal = {
    $data: {
      isUBBCodeInsertClick: false,
      db: new Utils.indexedDB("mt_reply_record", "input_text"),
      forum_action: null,
      get tid() {
        return MTUtils.getThreadId(window.location.href);
      }
    },
    $el: {
      /** 点赞按钮 */
      $like: null,
      /** 发表按钮 */
      $btn_submit: null,
      /** 输入框 */
      $input: null,
      /** 表单元素 */
      $form: null,
      /** 发表|回复按钮 */
      $fastpostsubmit: null
    },
    init() {
      log.info(`编辑器优化-简略版`);
      addStyle(optimizationCSS$1);
      this.overridePageEditor();
    },
    /**
     * 覆盖页面的编辑器
     */
    overridePageEditor() {
      let $old_commentIcon = document.querySelector(
        "#comiis_foot_memu .comiis_flex li:nth-child(2)"
      );
      let $old_linkIcon = document.querySelector(
        "#comiis_foot_memu .comiis_flex li:nth-child(3)"
      );
      let $old_collectIcon = document.querySelector(
        "#comiis_foot_memu .comiis_flex li:nth-child(4)"
      );
      this.$el.$form = document.querySelector("#fastpostform");
      this.$data.forum_action = this.$el.$form.getAttribute("action");
      let forum_serialize = domUtils.serialize(this.$el.$form);
      let forum_url = document.querySelector("#fastpostform .header_y a").href;
      domUtils.remove("#needmessage[name='message']");
      domUtils.remove("#imglist");
      domUtils.remove("#fastpostsubmitline");
      domUtils.remove("#fastpostsubmit");
      let $footMenu = document.querySelector("#comiis_foot_memu");
      domUtils.hide($footMenu, false);
      let smiliesList = MTEditorSmilies();
      let first_smilies = Object.keys(smiliesList[0]).map((key) => {
        let smilies_url = smiliesList[0][key];
        return (
          /*html*/
          `<li><a href="javascript:;" onclick="comiis_addsmilies('${key}');"><img loading="lazy" data-src="${smilies_url}" class="vm"></a></li>`
        );
      });
      let second_smilies = Object.keys(smiliesList[1]).map((key) => {
        let smilies_url = smiliesList[1][key];
        return (
          /*html*/
          `<li><a href="javascript:;" onclick="comiis_addsmilies('${key}');"><img loading="lazy" data-src="${smilies_url}" class="vm"></a></li>`
        );
      });
      let third_smilies = Object.keys(smiliesList[2]).map((key) => {
        let smilies_url = smiliesList[2][key];
        return (
          /*html*/
          `<li><a href="javascript:;" onclick="comiis_addsmilies('${key}');"><img loading="lazy" data-src="${smilies_url}" class="vm"></a></li>`
        );
      });
      domUtils.after(
        $footMenu,
        /*html*/
        `
            <div id="comiis_foot_menu_beautify" class="bg_f b_t">
                <div class="reply_area">
                    <ul>
                        <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                        <li data-attr="评论数量">${$old_commentIcon.innerHTML}</li>
                        <li data-attr="点赞">${$old_linkIcon.innerHTML}</li>
                        <li data-attr="收藏">${$old_collectIcon.innerHTML}</li>
                    </ul>
                </div>
            </div>
            <div id="comiis_foot_menu_beautify_big" data-model="comment" class="bg_f b_t" style="display:none;">
                <div class="reply_area">
                    <div class="reply_user_content" style="display:none;"></div>
                    <ul>
                        <li data-attr="回帖"><textarea id="needmessage" placeholder="发帖千百度，文明第一步"></textarea></li>
                        <li data-attr="发表">
                            <div class="fastpostform_new"><a href="${forum_url}" data-comment-url="${forum_url}" target="_blank"><i class="comiis_font f_d"></i></a></div>
                            <div id="fastpostsubmitline"><input data-comment-url="${forum_url}" data-comment-action="${this.$data.forum_action}" data-comment-serialize="${forum_serialize}" data-text="false" type="button" value="发表" name="replysubmit" id="fastpostsubmit" comiis="handle"></div>
                        </li>
                    </ul>
                </div>
                <div class="other_area">
                    <div class="menu_icon">
                        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"></i></a>
                        <a href="javascript:;" class="comiis_smile"><i class="comiis_font"></i></a>
                        <a href="javascript:;" class="commis_insert_bbs"><i class="comiis_font"></i></a>
                    </div>
                    <div class="menu_body">
                        <div id="comiis_pictitle_tab">
                            <!-- 列表项 -->
                            <div class="comiis_upbox bg_f cl">
                                <ul id="imglist" class="comiis_post_imglist cl">
                                    <li class="up_btn">
                                        <a href="javascript:;" class="bg_e b_ok f_d">
                                            <i class="comiis_font"></i>
                                        </a>
                                        <input type="file" name="Filedata" id="filedata" accept="image/*" multiple>
                                    </li>				
                                </ul>
                             </div>
                             <!-- 菜单项 -->
                             <div class="bqbox_t">
                                <ul id="comiis_pictitle_key">
                                    <li class="bg_f" id="comiis_pictitle_tab_n_1"><a href="javascript:;" class="">论坛</a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="comiis_post_tab" class="comiis_bqbox">
                            <div class="comiis_smiley_box swiper-container-horizontal swiper-container-android">
                                <div class="swiper-wrapper bqbox_c comiis_optimization">
                                    <div class="swiper-slide">
                                        ${first_smilies.join("\n")}
                                    </div>
    
                                    <div class="swiper-slide" style="display: none;">
                                        ${second_smilies.join("\n")}
                                    </div>
                                    
                                    <div class="swiper-slide" style="display: none;">
                                        ${third_smilies.join("\n")}    
                                    </div>
                                </div>
                                <div class="bqbox_t">
                                    <ul id="comiis_smilies_key">
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_1" class="bg_f b_l b_r">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif" class="vm">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_2" class="">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png" class="vm">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_3" class="">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png" class="vm">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="comiis_insert_ubb_tab" style="display: none;">
                            <div class="bg_f comiis_input_style">
                                <div class="comiis_post_urlico b_b">
                                    <ul id="comiis_insert_ubb_tab_list">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
      );
      $("#comiis_foot_menu_beautify .comiis_position_key");
      this.$el.$like = $("#comiis_foot_menu_beautify .comiis_recommend_addkey");
      $("#comiis_foot_menu_beautify #comiis_favorite_a");
      $("#comiis_pictitle_key");
      this.$el.$btn_submit = $('#comiis_foot_menu_beautify_big li[data-attr="发表"] input');
      this.$el.$input = $("#comiis_foot_menu_beautify_big textarea");
      this.$el.$fastpostsubmit = $("#fastpostsubmit");
      _unsafeWindow.textarea_scrollHeight = () => {
      };
      if (typeof _unsafeWindow.comiis_addsmilies == "function") {
        _unsafeWindow.comiis_addsmilies = (smilies_text) => {
          _unsafeWindow.$("#needmessage").comiis_insert(smilies_text);
          _unsafeWindow.$("#needmessage")[0].dispatchEvent(new Event("propertychange"));
        };
      }
      _unsafeWindow.$("#imglist .up_btn").append(_unsafeWindow.$("#filedata"));
      _unsafeWindow.$(document).on("click", "#imglist .up_btn a", function() {
        _unsafeWindow.$(this).next().click();
      });
      _unsafeWindow.$(document).on("click", "#imglist .p_img a", function() {
        let obj = _unsafeWindow.$(this);
        if (obj.attr("onclick") == null) {
          let img_id = obj.find("img").attr("id").replace("aimg_", "");
          _unsafeWindow.comiis_addsmilies(`[attachimg]${img_id}[/attachimg]`);
        }
      });
      domUtils.hide("#comiis_foot_menu_beautify_big .menu_body", false);
      this.setInputChangeEvent();
      this.setLikeBtnClickEvent();
      this.setSubmitBtnClickEvent();
      this.setGlobalReplyBtnClickEvent();
      this.setGlobalClickCheckEvent();
      this.setMenuIconToggleEvent();
      this.setMenuImageClickEvent();
      this.setMenuImageToggleEvent();
      this.setMenuSmileClickEvent();
      this.setMenuSmileTabClickEvent();
      this.setMenuInsertClickEvent();
      this.setMenuQuickUBB();
      Panel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText", () => {
        this.initReplyText();
        this.setInputChangeSaveEvent();
      });
      Panel.execMenuOnce("mt-image-bed-hello-enable", () => {
        MTEditorImageBed_Hello.init();
      });
      Panel.execMenuOnce("mt-image-bed-mt-enable", () => {
        MTEditorImageBed_MT.init();
      });
    },
    /**
     * 处理错误的响应
     * @param text
     */
    handle_error(text) {
      let return_status = false;
      let messagetext = domUtils.text(
        domUtils.parseHTML(text, false, false).querySelector("#messagetext")
      );
      if (!messagetext || typeof messagetext === "string" && messagetext.trim() == "") {
        return return_status;
      }
      Object.keys(error_code).forEach((item) => {
        let value = error_code[item];
        if (messagetext.indexOf(value.error_match) != -1) {
          if (messagetext.indexOf(`typeof errorhandle_=='function'`) != -1) {
            Qmsg.error(value.popup_text);
          }
          return_status = true;
          return;
        }
      });
      return return_status;
    },
    /**
     * 监听输入框内容改变
     */
    setInputChangeEvent() {
      const that = this;
      domUtils.on(that.$el.$input, ["input", "propertychange"], function(event) {
        let inputText = that.$el.$input.value;
        if (inputText === "") {
          that.$el.$btn_submit.setAttribute("data-text", "false");
          $("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.setAttribute(
            "placeholder",
            "发帖千百度，文明第一步"
          );
        } else {
          that.$el.$btn_submit.setAttribute("data-text", "true");
          $("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.setAttribute(
            "placeholder",
            "[草稿待发送]"
          );
        }
        domUtils.css(that.$el.$input, "height", "70px");
        domUtils.css(that.$el.$input, "height", that.$el.$input.scrollHeight - 20 + "px");
      });
    },
    /**
     * 监听输入框内容改变并保存到indexDB
     */
    setInputChangeSaveEvent() {
      const that = this;
      domUtils.on(this.$el.$input, ["input", "propertychange"], (event) => {
        let inputText = that.$el.$input.value;
        let $reply = that.$el.$input.closest(".reply_area").querySelector(".reply_user_content");
        let replyUrl = $reply.getAttribute("data-reply-url");
        let data = {
          url: window.location.href,
          text: inputText,
          repquote: replyUrl ? MTUtils.getRepquote(replyUrl) : void 0,
          forumId: that.$data.tid
        };
        that.$data.db.get("data").then((result) => {
          if (!result.success || result.code === 201) {
            console.warn(result);
            return;
          }
          let localDataIndex = result.data.findIndex((item) => {
            return item.forumId === data.forumId && item.repquote === data.repquote;
          });
          if (localDataIndex !== -1) {
            if (inputText == null || inputText === "") {
              result.data.splice(localDataIndex, 1);
            } else {
              result.data[localDataIndex] = utils.assign(result.data[localDataIndex], {
                text: data.text
              });
            }
          } else {
            result.data.push(data);
          }
          that.$data.db.save("data", result.data).then((result2) => {
          });
        });
      });
    },
    /**
     * 把存储回复框的内容设置到输入框中
     * @param isUserReply 是否是来自点击回复的
     * @param replyUrl 回复的url
     */
    async initReplyText(isUserReply = false, replyUrl = void 0) {
      const that = this;
      let initResult = await this.$data.db.get("data");
      if (initResult.code === 201) {
        await this.$data.db.save("data", []);
      }
      let queryResult = await this.$data.db.get("data");
      if (!queryResult.success || queryResult.code === 201) {
        console.warn(queryResult);
        return;
      }
      let repquote = void 0;
      if (replyUrl) {
        repquote = MTUtils.getRepquote(replyUrl);
      }
      let localReplyData = queryResult.data.find((item) => {
        if (isUserReply) {
          return item.forumId === that.$data.tid && item.repquote == repquote;
        } else {
          return item.forumId === that.$data.tid && item.repquote == null;
        }
      });
      if (localReplyData) {
        domUtils.val(this.$el.$input, localReplyData.text);
        utils.dispatchEvent(this.$el.$input, "input");
      }
    },
    /**
     * 设置点赞按钮点击事件
     */
    setLikeBtnClickEvent() {
      domUtils.on(this.$el.$like, "click", async (event) => {
        utils.preventEvent(event);
        if (_unsafeWindow.comiis_recommend_key == 0) {
          _unsafeWindow.comiis_recommend_key = 1;
          let response = await httpx.get(this.$el.$like.href + "&inajax=1", {
            headers: {
              Accept: "application/xml, text/xml, */*; q=0.01"
            },
            fetch: true,
            allowInterceptConfig: false
          });
          if (!response.status) {
            window.location.href = this.$el.$like.href;
            setTimeout(function() {
              _unsafeWindow.comiis_recommend_key = 0;
            }, 500);
            return;
          }
          let xmlDoc = utils.parseFromString(response.data.responseText, "text/xml");
          let resultText = xmlDoc.lastChild?.firstChild?.nodeValue;
          if (resultText.includes("您已评价过本主题")) {
            let tid = this.$el.$like.href.match(MTRegExp.tid)[1];
            let response2 = await httpx.get(
              `plugin.php?id=comiis_app&comiis=re_recommend&tid=${tid}&inajax=1`,
              {
                headers: {
                  Accept: "application/xml, text/xml, */*; q=0.01"
                },
                fetch: true,
                allowInterceptConfig: false
              }
            );
            if (!response2.status) {
              Qmsg.error("取消点赞失败，网络异常");
              return;
            }
            var recommend_num = Number(domUtils.text("#comiis_recommend_num"));
            if (document.querySelectorAll(".comiis_recommend_list_a").length > 0) {
              domUtils.remove("#comiis_recommend_list_a" + _unsafeWindow.uid);
            }
            if (document.querySelectorAll(".comiis_recommend_list_s").length > 0) {
              domUtils.remove("#comiis_recommend_list_s" + _unsafeWindow.uid);
            }
            if (document.querySelectorAll(".comiis_recommend_list_t").length > 0) {
              domUtils.remove("#comiis_recommend_list_t" + _unsafeWindow.uid);
            }
            if (recommend_num > 1) {
              domUtils.text(".comiis_recommend_num", recommend_num - Number(_unsafeWindow.allowrecommend));
              domUtils.text(
                ".comiis_recommend_nums",
                "+" + (recommend_num - Number(_unsafeWindow.allowrecommend))
              );
            } else {
              domUtils.remove("#comiis_recommend_num");
              domUtils.text(".comiis_recommend_nums", "");
              if (document.querySelectorAll(".comiis_recommend_list_a").length > 0) {
                domUtils.empty(".comiis_recommend_list_a");
                domUtils.removeClass(".comiis_recommend_list_a", "comiis_recommend_list_on");
              }
              if (document.querySelectorAll(".comiis_recommend_list_t").length > 0) {
                domUtils.removeClass(".comiis_recommend_list_t", "comiis_recommend_list_on");
              }
            }
            domUtils.html(".comiis_recommend_addkey i", "&#xe63b;");
            domUtils.removeClass(".comiis_recommend_color", "f_a");
            domUtils.addClass(".comiis_recommend_color", "f_b");
            if (document.querySelectorAll(".comiis_recommend_list_s").length > 0) {
              if (document.querySelectorAll(".comiis_recommend_list_s li").length < 7) {
                domUtils.hide(".txshow_more", false);
              } else {
                domUtils.show(".txshow_more", false);
              }
            }
            Qmsg.success("已取消点赞");
          } else if (resultText.includes("您不能评价自己的帖子")) {
            Qmsg.error("不能点赞自己的帖子");
          } else if (resultText.includes("今日评价机会已用完")) {
            Qmsg.warning("您今日的点赞机会已用完");
          } else if (resultText.includes("'recommendv':'+" + _unsafeWindow.allowrecommend + "'")) {
            var recommendcList = {
              recommendc: 0,
              daycount: 0
            }, recommendc;
            recommendc = resultText.match(/\'recommendc\':\'(.*?)\'/);
            if (recommendc != null) {
              recommendcList["recommendc"] = parseInt(recommendc[1]);
            } else {
              recommendcList["recommendc"] = 0;
            }
            recommendc = resultText.match(/\'daycount\':\'(.*?)\'/);
            if (recommendc != null) {
              recommendcList["daycount"] = parseInt(recommendc[1]);
            } else {
              recommendcList["daycount"] = 0;
            }
            if (document.querySelectorAll(".comiis_recommend_new span").length < 1) {
              domUtils.append(
                ".comiis_recommend_new",
                '<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>'
              );
            }
            var comiis_recommend_num = Number(domUtils.text("#comiis_recommend_num"));
            if ($$(".comiis_recommend_list_a").length > 0) {
              let $list_a = $$(".comiis_recommend_list_a");
              domUtils.removeClass($list_a, "comiis_recommend_list_on");
              domUtils.addClass($list_a, "comiis_recommend_list_on");
              domUtils.prepend(
                $list_a,
                ($$(".comiis_recommend_list_a li").length > 0 ? "" : '<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= ' + _unsafeWindow.tid + '&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">' + comiis_recommend_num + "</em>赞</span></a></li>") + '<li id="comiis_recommend_list_a' + _unsafeWindow.uid + '"><a href="home.php?mod=space&uid=' + _unsafeWindow.uid + '"><img src="' + MTUtils.getAvatar(_unsafeWindow.uid, "small") + '"></a></li>'
              );
            }
            if ($$(".comiis_recommend_list_t").length > 0) {
              let $list_t = $$(".comiis_recommend_list_t");
              domUtils.removeClass($list_t, "comiis_recommend_list_on");
              domUtils.addClass($list_t, "comiis_recommend_list_on");
              domUtils.prepend(
                $list_t,
                `<span id="comiis_recommend_list_t${_unsafeWindow.uid}">
                          							<a href="home.php?mod=space&uid=${_unsafeWindow.uid}" class="f_c">${_unsafeWindow.username}</a>
													${$$(".comiis_recommend_list_t a").length > 0 ? '<span class="f_d"> , </span>' : ""}
                        						</span>`
              );
            }
            if ($$(".comiis_recommend_list_s").length > 0) {
              let $list_s = $$(".comiis_recommend_list_s");
              domUtils.removeClass($list_s, "comiis_recommend_list_on");
              domUtils.addClass($list_s, "comiis_recommend_list_on");
              domUtils.prepend(
                $list_s,
                ($$(".comiis_recommend_list_s li").length > 0 ? "" : "") + '<li id="comiis_recommend_list_s' + _unsafeWindow.uid + '"><a href="home.php?mod=space&uid=' + _unsafeWindow.uid + '"><img loading="lazy" src="' + MTUtils.getAvatar(_unsafeWindow.uid, "small") + '"></a></li>'
              );
            }
            domUtils.text(".comiis_recommend_num", comiis_recommend_num + Number(_unsafeWindow.allowrecommend));
            domUtils.text(
              ".comiis_recommend_nums",
              "+" + (comiis_recommend_num + Number(_unsafeWindow.allowrecommend))
            );
            domUtils.html(".comiis_recommend_addkey i", "&#xe654;");
            domUtils.removeClass(".comiis_recommend_color", "f_b");
            domUtils.addClass(".comiis_recommend_color", "f_a");
            if ($$(".comiis_recommend_list_s").length > 0) {
              if ($$(".comiis_recommend_list_s li").length < 7) {
                domUtils.hide(".txshow_more", false);
              } else {
                domUtils.show(".txshow_more", false);
              }
            }
            Qmsg.success(
              "点赞成功" + (recommendcList["daycount"] ? `, 您今天还能点赞 ${recommendcList["daycount"] - 1} 次` : "")
            );
          } else if (resultText.indexOf("window.location.href = 'member.php?mod=logging&action=login&mobile=2'") >= 0) {
            window.location.href = "member.php?mod=logging&action=login&mobile=2";
          } else {
            Qmsg.error("没有点赞权限或帖子不存在");
          }
          setTimeout(function() {
            _unsafeWindow.comiis_recommend_key = 0;
          }, 500);
        }
        return false;
      });
    },
    /**
     * 发表按钮|回复按钮点击事件
     */
    setSubmitBtnClickEvent() {
      const that = this;
      domUtils.on(this.$el.$fastpostsubmit, "click", async (event) => {
        utils.preventEvent(event);
        var $message = $("#needmessage");
        var message = domUtils.val($message);
        message = encodeURIComponent(message);
        if (message == null || message === "") {
          return;
        }
        if (domUtils.val(that.$el.$fastpostsubmit) == "发表") {
          let $loading = Qmsg.loading("发表中，请稍后...");
          let data = "message=" + message;
          $$("#imglist input[type='hidden']").forEach(($ele) => {
            let key = $ele.getAttribute("name");
            data += `&${key}=`;
          });
          data = domUtils.serialize(that.$el.$form) + "&" + data;
          let url = that.$data.forum_action + "reply&handlekey=fastpost&loc=1&inajax=1";
          let response = await httpx.post(url, {
            data,
            fetch: true,
            allowInterceptConfig: false,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          $loading.close();
          if (!response.status) {
            Qmsg.error("发表失败，网络异常");
            return;
          }
          let xmlDoc = utils.parseFromString(response.data.responseText, "text/xml");
          let xmlText = xmlDoc.lastChild?.firstChild?.nodeValue;
          _unsafeWindow.evalscript(xmlText);
          if (this.handle_error(xmlText)) {
            return;
          }
          window.scrollTo({
            top: domUtils.height(document)
          });
          domUtils.val("#needmessage", "");
          $("#comiis_head")?.click();
          domUtils.hide("#comiis_foot_menu_beautify_big .reply_user_content", false);
          domUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input', "data-text", "false");
          domUtils.attr(
            "#comiis_foot_menu_beautify li[data-attr='回帖'] input",
            "placeholder",
            "发帖千百度，文明第一步"
          );
          this.deleteReplyTextStorage();
        } else {
          let data = domUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content", "data-reply-serialize") + message;
          $$("#imglist input[type='hidden']").forEach((item) => {
            data = `${data}&${item.getAttribute("name")}=`;
          });
          let replyUrl = domUtils.attr(
            "#comiis_foot_menu_beautify_big .reply_user_content",
            "data-reply-action"
          );
          let response = await httpx.post(replyUrl + "&handlekey=fastposts&loc=1&inajax=1", {
            allowInterceptConfig: false,
            fetch: true,
            data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          if (!response.status) {
            Qmsg.error("回复失败，网络异常");
            return;
          }
          let xmlDoc = utils.parseFromString(response.data.responseText, "text/xml");
          let xmlText = xmlDoc.lastChild?.firstChild?.nodeValue;
          log.info(xmlText);
          _unsafeWindow.evalscript(xmlText);
          if (this.handle_error(xmlText)) {
            return;
          }
          $(xmlText)?.click();
          domUtils.val("#needmessage", "");
          $("#comiis_head").click();
          domUtils.val('#comiis_foot_menu_beautify_big li[data-attr="发表"] input', "发表");
          domUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input', "data-text", "false");
          domUtils.attr(
            "#comiis_foot_menu_beautify li[data-attr='回帖'] input",
            "placeholder",
            "发帖千百度，文明第一步"
          );
          window.scrollTo({
            top: domUtils.height(document)
          });
          this.deleteReplyTextStorage(true, replyUrl);
        }
        return false;
      });
    },
    /**
     * 全局回复按钮点击事件
     */
    setGlobalReplyBtnClickEvent() {
      domUtils.on(
        document,
        "click",
        '.comiis_postli_times .dialog[href*="reply"]',
        async (event) => {
          utils.preventEvent(event);
          let $reply = event.target;
          domUtils.attr("#comiis_foot_menu_beautify_big", "data-model", "reply");
          let response = await httpx.get(domUtils.attr($reply, "datahref") || $reply.href + "&inajax=1", {
            fetch: true,
            allowInterceptConfig: false
          });
          if (!response.status) {
            Qmsg.error("网络异常，获取回复参数失败");
            return;
          }
          let xmlDoc = utils.parseFromString(response.data.responseText, "text/xml");
          let xmlText = xmlDoc.lastChild?.firstChild?.nodeValue;
          if (this.handle_error(xmlText)) {
            return;
          }
          let requestDOM = domUtils.parseHTML(`<div>${xmlText}</div>`, true, false);
          let reply_url = requestDOM.querySelector(".comiis_tip .tip_tit a")?.getAttribute("href");
          let reply_user = domUtils.text(requestDOM.querySelector(".comiis_tip span.f_0"));
          let reply_content = domUtils.val(
            requestDOM.querySelector("input[name='noticeauthormsg']")
          );
          let reply_action = domUtils.attr(requestDOM.querySelector("#postforms"), "action");
          let reply_serialize = domUtils.serialize(requestDOM.querySelector("#postforms"));
          domUtils.text(
            "#comiis_foot_menu_beautify_big .reply_user_content",
            `回复 ${reply_user}: ${reply_content}`
          );
          domUtils.show("#comiis_foot_menu_beautify_big .reply_user_content", false);
          $("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.click();
          domUtils.focus("#comiis_foot_menu_beautify li[data-attr='回帖'] input");
          domUtils.val("#fastpostsubmitline input", "回复");
          domUtils.attr("#comiis_foot_menu_beautify_big .fastpostform_new a", "href", reply_url);
          domUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content", "data-reply-url", reply_url);
          domUtils.attr(
            "#comiis_foot_menu_beautify_big .reply_user_content",
            "data-reply-action",
            reply_action
          );
          domUtils.attr(
            "#comiis_foot_menu_beautify_big .reply_user_content",
            "data-reply-serialize",
            reply_serialize
          );
          tempReplyBtnNode = $reply;
          domUtils.val("#needmessage", domUtils.attr($reply, "data-text") || "");
          Panel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText", () => {
            this.initReplyText(true, reply_url);
          });
        },
        {
          capture: true
        }
      );
    },
    /**
     * 全局点击检测事件
     */
    setGlobalClickCheckEvent() {
      const that = this;
      let forum_url = $("#fastpostform .header_y a").href;
      domUtils.on(document, "click", function(event) {
        let $click = event.target;
        if ($(".popups-popmenu") || MTEditorOptimizationNormal.$data.isUBBCodeInsertClick) {
          log.info(`点击的是弹出层，不做处理`);
          MTEditorOptimizationNormal.$data.isUBBCodeInsertClick = false;
          return;
        } else if ($click?.classList && $click?.classList?.contains(".dialog_reply") || $click?.closest && $click?.closest(".dialog_reply") || $click === $('li[data-attr="回帖"] input')) {
          log.info(`点击回复按钮或者是编辑器，显示编辑器`);
          domUtils.hide("#comiis_foot_menu_beautify", false);
          domUtils.show("#comiis_foot_menu_beautify_big", false);
          domUtils.focus("#needmessage");
        } else if (window.event && !utils.checkUserClickInNode($("#comiis_foot_menu_beautify_big"))) {
          log.info(`点击的其它区域，隐藏大编辑器，显示小编辑器`);
          domUtils.show("#comiis_foot_menu_beautify", false);
          domUtils.hide("#comiis_foot_menu_beautify_big", false);
          if (domUtils.attr("#comiis_foot_menu_beautify_big", "data-model") == "reply") {
            domUtils.attr("#comiis_foot_menu_beautify_big", "data-model", "comment");
            domUtils.val("#fastpostsubmitline input", "发表");
            domUtils.attr("#comiis_foot_menu_beautify_big .fastpostform_new a", "href", forum_url);
            domUtils.text("#comiis_foot_menu_beautify_big .reply_area .reply_user_content");
            domUtils.hide("#comiis_foot_menu_beautify_big .reply_area .reply_user_content", false);
            domUtils.attr(
              "#comiis_foot_menu_beautify_big .reply_area .reply_user_content",
              "data-reply-url",
              ""
            );
            domUtils.attr(
              "#comiis_foot_menu_beautify_big .reply_area .reply_user_content",
              "data-reply-action",
              ""
            );
            domUtils.attr(
              "#comiis_foot_menu_beautify_big .reply_area .reply_user_content",
              "data-reply-serialize",
              ""
            );
            if (tempReplyBtnNode) {
              domUtils.attr(tempReplyBtnNode, "data-text", domUtils.val("#needmessage"));
              domUtils.val("#needmessage", "");
              domUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input', "data-text", "false");
              domUtils.attr(
                "#comiis_foot_menu_beautify li[data-attr='回帖'] input",
                "placeholder",
                "发帖千百度，文明第一步"
              );
            }
          }
          if (domUtils.val(that.$el.$input) === "") {
            Panel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText", () => {
              that.initReplyText();
            });
          }
        }
      });
    },
    /**
     * 菜单-图标切换事件
     */
    setMenuIconToggleEvent() {
      domUtils.on(
        "#comiis_foot_menu_beautify_big .menu_icon a i",
        "click",
        function(event) {
          let $click = this;
          if ($click.classList.contains("f_0")) {
            domUtils.hide("#comiis_foot_menu_beautify_big .menu_body", false);
            domUtils.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i", "f_0");
          } else {
            domUtils.show("#comiis_foot_menu_beautify_big .menu_body", false);
            domUtils.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i", "f_0");
            domUtils.addClass($click, "f_0");
          }
        }
      );
    },
    /**
     * 菜单-图片点击事件
     */
    setMenuImageClickEvent() {
      domUtils.on(
        "#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle",
        "click",
        function(event) {
          domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab", false);
          domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab", false);
          domUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab", false);
        }
      );
    },
    /**
     * 菜单-图标-切换图片组的事件
     */
    setMenuImageToggleEvent() {
      domUtils.on(
        "#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key",
        "click",
        "li",
        function(event) {
          let $click = event.target;
          domUtils.removeClass(
            "#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li",
            "bg_f"
          );
          domUtils.addClass($click, "bg_f");
          _unsafeWindow.$("#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox").hide().eq(_unsafeWindow.$($click).index()).fadeIn();
        }
      );
    },
    /**
     * 菜单-表情点击事件
     */
    setMenuSmileClickEvent() {
      domUtils.on(
        "#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile",
        "click",
        function(event) {
          domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab", false);
          domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab", false);
          domUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab", false);
          let smileDOM = $("#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox");
          if (domUtils.attr(smileDOM, "data-isLoaded") != 1) {
            domUtils.attr(smileDOM, "data-isLoaded", 1);
            smileDOM.querySelectorAll("img").forEach((item) => {
              let data_src = item.getAttribute("data-src");
              if (data_src) {
                item.setAttribute("src", data_src);
              }
            });
          }
        }
      );
    },
    /**
     * 菜单-表情-切换表情组的点击事件
     */
    setMenuSmileTabClickEvent() {
      domUtils.on(
        "#comiis_foot_menu_beautify_big #comiis_smilies_key li",
        "click",
        function(event) {
          let $click = this;
          domUtils.removeClass("#comiis_foot_menu_beautify_big #comiis_smilies_key li a");
          domUtils.addClass($click.querySelector("a"), "bg_f b_l b_r");
          _unsafeWindow.$("#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide").hide().eq(_unsafeWindow.$($click).index()).fadeIn();
        }
      );
    },
    /**
     * 菜单-插入点击事件
     */
    setMenuInsertClickEvent() {
      domUtils.on("#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs", "click", (event) => {
        domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab", false);
        domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab", false);
        domUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab", false);
      });
    },
    /**
     * 获取回复记录的占用空间
     */
    async getReplyRecordSize() {
      let result = await this.$data.db.get("data");
      if (result.success) {
        let size = utils.getTextStorageSize(result?.data?.length ? JSON.stringify(result.data) : "");
        return size;
      } else {
        return utils.formatByteToSize(0);
      }
    },
    /**
     * 清空所有的回复记录
     */
    async clearAllReplyRecord() {
      return await this.$data.db.deleteAll();
    },
    /**
     * 删除存储的回复框的内容到indexedDB
     * @param isUserReply 是否是来自点击回复的
     * @param replyUrl 回复的url
     */
    deleteReplyTextStorage(isUserReply = false, replyUrl = void 0) {
      const that = this;
      this.$data.db.get("data").then((result) => {
        if (!result.success || result.code === 201) {
          console.warn(result);
          return;
        }
        let localDataIndex = result.data.findIndex((item) => {
          if (isUserReply) {
            return item.forumId === that.$data.tid && replyUrl && item.repquote === MTUtils.getRepquote(replyUrl);
          } else {
            return item.forumId === that.$data.tid && utils.isNull(item.repquote);
          }
        });
        if (localDataIndex !== -1) {
          result.data.splice(localDataIndex, 1);
          this.$data.db.save("data", result.data).then((result2) => {
          });
        }
      });
    },
    /**
     * 注入UBB代码
     */
    setMenuQuickUBB() {
      let $tab_list = $("#comiis_insert_ubb_tab_list");
      let ubbCodeMap = MTQuickUBB();
      Reflect.set(ubbCodeMap, "code", {
        key: "代码",
        value: "[code][/code]",
        tagL: "]",
        tagR: "[",
        L: "[code]",
        R: "[/code]",
        cursorL: "[code]",
        cursorLength: 7,
        quickUBBReplace: "[code]replace[/code]"
      });
      Reflect.set(ubbCodeMap, "password", {
        key: "密码",
        value: "[password][/password]",
        tagL: "]",
        tagR: "[",
        L: "[password]",
        R: "[/password]",
        cursorL: "[password]",
        cursorLength: 10,
        quickUBBReplace: "[password]replace[/password]"
      });
      Object.keys(ubbCodeMap).forEach((keyName) => {
        let value = ubbCodeMap[keyName];
        let $ubbs = domUtils.createElement("li", {
          className: "quickUBBs",
          innerHTML: (
            /*html*/
            `
                    <a href="javascript:;" class="comiis_xifont f_d">
                        <i class="comiis_font"></i>${value["key"]}
                    </a>
                `
          )
        });
        domUtils.on($ubbs, "click", (event) => {
          domUtils.removeClass(
            "#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont",
            "f_0"
          );
          domUtils.addClass(
            "#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont",
            "f_d"
          );
          let $font = $ubbs.querySelector(".comiis_xifont");
          domUtils.removeClass($font, "f_d");
          domUtils.removeClass($font, "f_d");
          let $prompt = __pops.prompt({
            title: {
              text: "UBB代码",
              position: "center"
            },
            content: {
              text: "",
              placeholder: `请输入需要${value["key"]}的文字`,
              focus: true
            },
            btn: {
              ok: {
                text: "插入",
                type: "primary",
                callback: (details) => {
                  if (details.text.trim() === "") {
                    Qmsg.error("输入框不能为空或纯空格");
                    return;
                  }
                  if (value["isFunc"]) {
                    _unsafeWindow.comiis_addsmilies(MTUBB_Rainbow(value["num"], details.text));
                  } else if (value["quickUBBReplace"]) {
                    _unsafeWindow.comiis_addsmilies(
                      value["quickUBBReplace"].replaceAll("replace", details.text)
                    );
                  } else {
                    _unsafeWindow.comiis_addsmilies(details.text);
                  }
                  $prompt.close();
                }
              },
              cancel: {
                text: "关闭",
                callback: () => {
                  $prompt.close();
                }
              }
            },
            width: "300px",
            height: "200px"
          });
        });
        $tab_list.append($ubbs);
      });
    }
  };
  const MTForumPost = {
    $flag: {
      isSetHljsCSS: false
    },
    init() {
      Panel.execMenuOnce("mt-forum-post-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      Panel.execMenuOnce("mt-forum-post-repairImageWidth", () => {
        return this.repairImageWidth();
      });
      domUtils.ready(() => {
        Panel.execMenu("mt-forum-post-removeFontStyle", () => {
          this.removeFontStyle();
        });
        Panel.execMenu("mt-forum-post-removeCommentFontStyle", () => {
          this.removeCommentFontStyle();
        });
        Panel.execMenu("mt-forum-post-addCommentOnBtn", () => {
          this.addCommentOnBtn();
        });
        Panel.execMenuOnce("mt-forum-post-loadNextPageComment", () => {
          this.loadNextPageComment();
        });
        Panel.execMenuOnce("mt-forum-post-codeQuoteOptimization", () => {
          this.codeQuoteOptimization();
        });
        Panel.execMenuOnce("mt-forum-post-editorOptimizationNormal", () => {
          MTEditorOptimizationNormal.init();
        });
        Panel.execMenu("mt-forum-post-optimizationImagePreview", () => {
          this.optimizationImagePreview();
        });
        Panel.execMenuOnce("mt-forum-post-setAttachmentsClickTip", () => {
          this.setAttachmentsClickTip();
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
      let $messageTable = $(".comiis_a.comiis_message_table");
      if (!$messageTable) {
        return;
      }
      domUtils.html(
        $messageTable,
        domUtils.html($messageTable).replace(MTRegExp.fontSpecial, "")
      );
    },
    /**
     * 移除评论区的字体效果
     */
    removeCommentFontStyle() {
      log.info(`移除评论区的字体效果`);
      let $fontList = $$("font");
      let $postForumMainContent = $(".comiis_postlist .comiis_postli")?.innerHTML || "";
      if ($postForumMainContent !== "") {
        $fontList.forEach(($font) => {
          if (!$postForumMainContent.includes($font.innerHTML)) {
            $font.removeAttribute("color");
            $font.removeAttribute("style");
            $font.removeAttribute("size");
          }
        });
        $$(".comiis_message.message").forEach(($message) => {
          if ($postForumMainContent.includes($message.innerHTML)) {
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
      $$(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach((item) => {
        let $parent = item.parentElement;
        if ($parent && $parent.localName === "strike") {
          $parent.outerHTML = $parent.outerHTML.replace(/^<strike>(\n|)/g, "").replace(/<\/strike>$/g, "");
        }
      });
    },
    /**
     * 添加【点评】按钮
     */
    addCommentOnBtn() {
      log.info(`添加【点评】按钮`);
      utils.waitNodeList(
        ".bottom_zhan:not([data-isaddreviews])"
      ).then(($bottomZhanList) => {
        $bottomZhanList.forEach(($bottmZhan) => {
          $bottmZhan.setAttribute("data-isaddreviews", "true");
          var replyNode = $bottmZhan.querySelector("a");
          if (!replyNode) {
            return;
          }
          var replyUrl = replyNode.getAttribute("datahref") || replyNode.getAttribute("data-href") || replyNode.href || "";
          var rewardUrl = replyUrl.replace("mod=post&", "mod=misc&").replace("action=reply&", "action=comment&");
          var reviewPage = replyUrl?.match(/&page=([\w]+)/i)?.[1];
          var reviewsUrl = `${rewardUrl}&extra=page%3D1&page=${reviewPage}`;
          var $postli = $bottmZhan?.closest(".comiis_postli[id]");
          var reviewsPID = $postli.getAttribute("id")?.replace("pid", "&pid=");
          reviewsUrl = reviewsUrl + reviewsPID;
          var reviewsUserName = $postli.querySelector(".top_user.f_b")?.textContent || "";
          var reviewsNode = domUtils.parseHTML(
            /*html*/
            `
						<a href="${reviewsUrl}" class="f_c dialog">
							<i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
						</a>
						`,
            true,
            false
          );
          domUtils.on(reviewsNode, "click", function() {
            utils.waitNode("div[id=ntcmsg_popmenu]>div>span.f_c").then((element) => {
              try {
                element.innerText = "点评 " + reviewsUserName;
              } catch (err) {
                log.error("修改点评失败", err);
              }
            });
          });
          domUtils.prepend($bottmZhan, reviewsNode);
        });
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
      function getLoadingCommentTip() {
        return $("#loading-comment-tip");
      }
      function getLoadingCommentTipParent() {
        return $("#loading-comment-tip").parentElement;
      }
      function autoLoadNextPageComments(post_comments_list) {
        let $loadingCommentTip = getLoadingCommentTip();
        let $loadingCommentTipParent = getLoadingCommentTipParent();
        domUtils.css($loadingCommentTipParent, "display", "");
        let $nextPage = Array.from(
          post_comments_list.querySelectorAll("a[href]")
        ).find((item) => {
          return item.textContent?.trim() === "下一页";
        });
        let next_page_url = $nextPage.href;
        log.info("获取下一页url：", next_page_url);
        if (next_page_url.includes("javascript:;")) {
          log.info("暂无下一页的评论");
          domUtils.remove($loadingCommentTipParent);
          return;
        }
        function removeLoadNextCommentsListener() {
          domUtils.remove(".comiis_page.bg_f");
          domUtils.remove($loadingCommentTipParent);
          domUtils.off($loadingCommentTip, "click", loadNextComments);
          domUtils.off(window, "scroll", lockFn.run);
        }
        async function loadNextComments() {
          domUtils.text($loadingCommentTip, "正在加载评论中...");
          domUtils.css($loadingCommentTipParent, "display", "");
          log.info(`请求下一页评论：` + next_page_url);
          let url = next_page_url;
          let response = await httpx.get(url, {
            fetch: true
          });
          if (!response.status) {
            return;
          }
          let nextPageDoc = domUtils.parseHTML(
            response.data.responseText,
            true,
            true
          );
          let $kqide = $(".comiis_postlist.kqide");
          let $nextPage_kqide = nextPageDoc.querySelector(
            ".comiis_postlist.kqide"
          );
          let $getNextPage = nextPageDoc.querySelector(".nxt");
          let queryNextPageUrl = $getNextPage?.getAttribute("href") || $getNextPage?.href;
          if (queryNextPageUrl) {
            log.success("成功获取到下一页评论");
            if (queryNextPageUrl === next_page_url) {
              log.warn(
                "获取到下一页评论的url和上次请求的url相同，判定为已加载完全部评论，移除监听事件"
              );
              removeLoadNextCommentsListener();
              return;
            }
            next_page_url = queryNextPageUrl;
          } else {
            log.error("评论全部加载完毕，移除监听事件");
            removeLoadNextCommentsListener();
          }
          let $pageStrong = $getNextPage?.parentElement.querySelector("strong");
          if ($pageStrong) {
            let $pageSelect = $("#select_a");
            if ($pageSelect) {
              let $pageText = Array.from($pageSelect.childNodes).find(
                (item) => item.nodeName === "#text"
              );
              if ($pageText) {
                $pageText.textContent = `第 ${$pageStrong.textContent} 页`;
              }
            }
          }
          Panel.execMenu("mt-forum-post-syncNextPageUrl", () => {
            if (window === top?.window) {
              let urlObj = new URL(url);
              let setLocationUrl = `${urlObj.pathname}${urlObj.search}`;
              window.history.pushState("forward", "", setLocationUrl);
            }
          });
          domUtils.append($kqide, $nextPage_kqide);
          MTForumPost.init();
        }
        var lockFn = new utils.LockFunction(async () => {
          if (utils.isNearBottom(50)) {
            await loadNextComments();
          }
        });
        domUtils.text($loadingCommentTip, "请上下滑动或点击加载");
        domUtils.on(window, "scroll", lockFn.run);
        domUtils.on($loadingCommentTip, "click", loadNextComments);
        lockFn.run();
      }
      let tip_html = (
        /*html*/
        `
		<div class="comiis_multi_box bg_f b_t">
			<label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label>
		</div>`
      );
      let $tip = domUtils.parseHTML(tip_html, true, false);
      let $bodybox = $(".comiis_bodybox");
      domUtils.append($bodybox, $tip);
      let commentsEle = $(".comiis_pltit span.f_d") || $("#comiis_foot_memu .comiis_kmvnum");
      if ($(".comiis_pltit h2") && $(".comiis_pltit h2")?.textContent.includes("暂无评论")) {
        domUtils.remove(getLoadingCommentTipParent());
        log.info("暂无评论");
        return;
      }
      let commentsNum = parseInt(commentsEle.textContent);
      if (commentsNum >= 10) {
        utils.waitNode(".comiis_page.bg_f").then(($nextPage) => {
          autoLoadNextPageComments($nextPage);
        });
      } else {
        domUtils.remove(getLoadingCommentTipParent());
        log.info("无多页评论");
      }
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
      if (!this.$flag.isSetHljsCSS) {
        hljs.registerLanguage("smali", hljs_smali);
        addStyle(
          /*css*/
          `
			.hljs ol{margin:0 0 0 10px;padding:10px 10px 10px 25px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			select.code-select-language{height:40px;line-height:40px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0;margin-left:10px}
			`
        );
        addStyle(
          /*css*/
          `
			.reader-copy-button{background:#000;background-size:cover;background-repeat:no-repeat;background-position:0;color:#fff;line-height:40px;display:block;text-align:center;border-radius:5px;cursor:pointer;font-size:15px;width:70px;user-select:none}
			.reader-copy-button i{display:inline-block;margin-right:6px;width:16px;height:16px;background-size:cover;vertical-align:sub;user-select:none}
			`
        );
        domUtils.on(
          document,
          "click",
          ".reader-copy-button",
          async function(event) {
            utils.preventEvent(event);
            let $click = event.target;
            let codeElement = $(
              $click.getAttribute("data-code-selector")
            );
            await utils.setClip(codeElement.outerText || codeElement.innerText);
            Qmsg.success("已复制到剪贴板");
            return false;
          }
        );
      }
      let comiis_blockcode = $$(".comiis_blockcode.comiis_bodybg");
      comiis_blockcode.forEach(($comiis_bodybg) => {
        if ($comiis_bodybg.getAttribute("data-copy")) {
          return;
        }
        $comiis_bodybg.setAttribute("data-copy", "true");
        let $temp = domUtils.createElement(
          "div",
          {
            innerHTML: (
              /*html*/
              `
					<span class="reader-copy-button">
						<i>
						<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>复制按钮</title>
							<defs>
								<rect id="path-1" x="0" y="0" width="16" height="16"></rect>
							</defs>
							<g id="阅读页复制-拦截" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g>
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<g id="矩形"></g>
									<path d="M4.11794319,3.55555556 L9.51168644,3.55555556 C10.4768443,3.55555556 11.2592593,4.33797056 11.2592593,5.30312837 L11.2592593,13.067242 C11.2592593,14.0323998 10.4768443,14.8148148 9.51168644,14.8148148 L4.11794319,14.8148148 C3.15278537,14.8148148 2.37037037,14.0323998 2.37037037,13.067242 L2.37037037,5.30312837 C2.37037037,4.33797056 3.15278537,3.55555556 4.11794319,3.55555556 Z" id="矩形" stroke="#DFDFDF" stroke-width="1.45631068" mask="url(#mask-2)"></path>
									<path d="M5.03703704,0.888888889 L12.1481481,0.888888889 C13.1299877,0.888888889 13.9259259,1.68482711 13.9259259,2.66666667 L13.9259259,12.7407407" id="形状" stroke="#DFDFDF" stroke-width="1.45631068" mask="url(#mask-2)"></path>
								</g>
							</g>
						</svg>
						</i>
					复制
					</span>`
            )
          },
          {
            style: "height: 34px;margin: 14px 0px;display: inline-flex;align-items: flex-end;"
          }
        );
        domUtils.before($comiis_bodybg, $temp);
        function setElementHighlight(ele, language = "java") {
          if (!ele.oldValue) {
            ele.oldValue = ele.textContent;
          }
          ele.innerHTML = hljs.highlight(ele.oldValue, { language }).value.replace(/\\n$/gi, "");
        }
        let codeLanguage = hljs.highlightAuto(
          $comiis_bodybg.textContent
        ).language;
        let selectElementParentDiv = document.createElement("div");
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
        domUtils.on(selectElement, "change", function() {
          let changeCodeLanguage = selectElement.selectedOptions[0].getAttribute("data-value");
          selectElement.setAttribute("aria-label", changeCodeLanguage);
          log.info("切换代码块语言: ", changeCodeLanguage);
          $comiis_bodybg.querySelectorAll("li").forEach((liElement) => {
            setElementHighlight(liElement, changeCodeLanguage);
          });
        });
        utils.preventEvent(selectElement, "click");
        selectElementParentDiv.appendChild(selectElement);
        $temp.append(selectElementParentDiv);
        utils.dispatchEvent(selectElement, "change");
        $comiis_bodybg.className = "hljs";
        $comiis_bodybg.firstChild.removeAttribute("class");
        $temp.querySelector(".reader-copy-button").setAttribute(
          "data-code-selector",
          utils.getElementSelector($comiis_bodybg)
        );
      });
    },
    /**
     * 图片查看优化
     */
    optimizationImagePreview() {
      log.info(`图片查看优化`);
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
        log.info("查看的图片的下标", index);
        viewer.view(index);
        viewer.zoomTo(1);
        viewer.show();
      }
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
      utils.waitNodeList(
        "div.comiis_postlist.kqide .comiis_postli:not([data-isHandlingViewIMG])"
      ).then((nodeList) => {
        nodeList.forEach((item) => {
          item.setAttribute("data-isHandlingViewIMG", "true");
          let clickShowIMGList = [];
          item.querySelectorAll("img").forEach(($img) => {
            let IMG_URL = $img.src;
            let IMG_URL_HOSTNAME = new URL(IMG_URL).hostname;
            let IMG_URL_PATHNAME = new URL(IMG_URL).pathname;
            let imgParentNode = $img.parentElement;
            if (imgParentNode.nodeName.toLowerCase() === "span") {
              imgParentNode.removeAttribute("onclick");
            }
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
            domUtils.on($img, "click", function() {
              log.info("点击图片", $img);
              let _index_ = clickShowIMGList.findIndex((_img_) => {
                return _img_ == IMG_URL;
              });
              viewIMG(clickShowIMGList, _index_);
            });
          });
          if (clickShowIMGList.length) {
            log.info("处理的图片", clickShowIMGList);
          }
        });
      });
    },
    /**
     * 附件点击提醒
     */
    setAttachmentsClickTip() {
      log.info(`附件点击提醒`);
      function handleClick($ele) {
        if ($ele.hasAttribute("href")) {
          let attachmentURL = $ele.getAttribute("href");
          let attachmentNameNode = $ele.querySelector("span.f_ok");
          let attachmentDownloadInfo = $ele.querySelector(".attach_size");
          if (domUtils.text(attachmentDownloadInfo).indexOf("金币") === -1) {
            return;
          }
          log.info("发现附件", $ele);
          log.info("该附件是金币附件，拦截！");
          let attachmentName = domUtils.text(attachmentNameNode);
          $ele.setAttribute("data-href", $ele.getAttribute("href"));
          $ele.removeAttribute("href");
          attachmentNameNode.innerText = "【已拦截】" + attachmentName;
          $ele.onclick = function() {
            log.info("附件url：", attachmentURL);
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
              width: "88vw",
              height: "200px"
            });
          };
        }
      }
      utils.mutationObserver(document.documentElement, {
        callback: () => {
          $$(".attnm a").forEach((item) => {
            handleClick(item);
          });
          $$(".comiis_attach a").forEach((item) => {
            handleClick(item);
          });
        },
        config: { childList: true, subtree: true }
      });
      utils.waitNodeList(".attnm a").then((nodeList) => {
        nodeList.forEach((item) => {
          handleClick(item);
        });
      });
      utils.waitNodeList(".comiis_attach a").then((nodeList) => {
        nodeList.forEach((item) => {
          handleClick(item);
        });
      });
    }
  };
  const MTSearch = {
    init() {
      addStyle(
        /*css*/
        `
		/* 去除搜索框的蒙版 */
        #comiis_search_noe{
            display: none !important;
        }
		/* 显示真正的试搜索框 */
        #comiis_search_two{
            display: block !important;
        }
        `
      );
      DOMUtils.ready(() => {
        Panel.execMenuOnce("mt-search-showSearchHistory", () => {
          this.showSearchHistory();
        });
        Panel.execMenuOnce("mt-search-repairClearBtn", () => {
          this.repairClearBtn();
        });
        Panel.execMenuOnce("mt-search-searchInputAutoFocus", () => {
          this.searchInputAutoFocus();
        });
      });
    },
    /**
     * 显示搜索历史
     */
    async showSearchHistory() {
      log.info(`显示搜索历史`);
      let searchHistoryList = _GM_getValue("search_history", []);
      let $input = $("#scform_srchtxt");
      let $submit = $("#searchform");
      let suggestion = __pops.searchSuggestion({
        target: $input,
        inputTarget: $input,
        data: searchHistoryList,
        getItemHTML: function(item) {
          return item;
        },
        getData(inputValue) {
          return searchHistoryList.filter((item) => {
            return item.includes(inputValue);
          });
        },
        deleteIcon: {
          enable: true,
          callback(event, liElement, data) {
            let findIndex = searchHistoryList.findIndex((item) => item === data);
            if (findIndex !== -1) {
              searchHistoryList.splice(findIndex, 1);
              _GM_setValue("search_history", searchHistoryList);
            }
            liElement.remove();
          }
        },
        itemClickCallBack(event, liElement, data) {
          $input.value = data;
          $submit.submit();
        }
      });
      suggestion.init();
      suggestion.setAllEvent();
      function search_event() {
        let $submit2 = document.querySelector("#scform_submit");
        DOMUtils.on($submit2, "click", function() {
          let searchText = $input.value;
          if (searchText != "") {
            let localHistorySearchText = _GM_getValue(
              "search_history",
              []
            );
            if (localHistorySearchText.includes(searchText)) {
              log.info(`已有该搜索历史记录`);
            } else {
              log.info(`无该记录，追加`);
              localHistorySearchText.push(searchText);
            }
            _GM_setValue("search_history", localHistorySearchText);
          }
        });
      }
      function add_clear_history() {
        let localHistorySearchText = _GM_getValue("search_history", []);
        let clear_history_innerHTML = (
          /*html*/
          `<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: ` + localHistorySearchText.length + /*html*/
          `<button class="btn_clear_search_history" style="
                    border: none;
                    float: right;
                    background: red;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 600;
                    min-width: 20vw;
                    width: 20vw;
                ">清理记录</button></div>`
        );
        DOMUtils.before(
          document.querySelector(".comiis_p12"),
          clear_history_innerHTML
        );
        let $searchHistory = document.querySelector(".btn_clear_search_history");
        DOMUtils.on($searchHistory, "click", (event) => {
          utils.preventEvent(event);
          _GM_deleteValue("search_history");
          window.location.reload();
        });
      }
      search_event();
      add_clear_history();
    },
    /**
     * 修复清空按钮
     */
    repairClearBtn() {
      utils.waitNode("a.ssclose").then(($empty) => {
        log.info(`修复清空按钮`);
        DOMUtils.on(
          $empty,
          "click",
          (event) => {
            let $input = document.querySelector("#scform_srchtxt");
            if ($input) {
              $input.value = "";
            } else {
              Qmsg.error("获取输入框失败");
            }
          },
          {
            capture: true
          }
        );
      });
    },
    /**
     * 搜索框自动获取焦点
     */
    searchInputAutoFocus() {
      let searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has("kw")) {
        return;
      }
      utils.waitNode("#scform_srchtxt").then(($input) => {
        log.info(`搜索框自动获取焦点`);
        $input.focus();
      });
    }
  };
  const MTSign = {
    init() {
      domUtils.ready(() => {
        Panel.execMenuOnce("mt-sign-showTodaySignStar", () => {
          this.showTodaySignStar();
        });
        Panel.execMenuOnce("mt-sign-showTodayRanking", () => {
          this.showTodayRanking();
        });
      });
    },
    /**
     * 显示【今日签到之星】
     */
    async showTodaySignStar() {
      log.info(`显示【今日签到之星】`);
      let todayStarParent = document.querySelector(
        ".pg_k_misign .comiis_qdinfo"
      );
      let todayStar = document.createElement("ul");
      let response = await httpx.get("/k_misign-sign.html", {
        headers: {
          "User-Agent": utils.getRandomPCUA()
        }
      });
      if (!response.status) {
        return;
      }
      let doc = domUtils.parseHTML(response.data.responseText, true, true);
      let todatastarele = doc.querySelector("#pt span.xg1");
      if (!todatastarele) {
        return;
      }
      let todaypeople = domUtils.text(todatastarele).replace(
        "今日签到之星：",
        ""
      );
      todayStar.innerHTML = /*html*/
      `
		<li class="f_f" style="display: flex;flex-direction: column;width: 100%;">
			<span class="comiis_tm">今日签到之星</span>
			${todaypeople}
		</li>
		`;
      let $comiisSpaceBox = document.querySelector(".comiis_space_box");
      let comiis_space_box_height = parseInt(
        getComputedStyle($comiisSpaceBox, null)["height"].replace("px", "")
      );
      let comiis_space_box_padding_bottom = parseInt(
        getComputedStyle($comiisSpaceBox, null)["paddingBottom"].replace("px", "")
      );
      let total_height = comiis_space_box_height + comiis_space_box_padding_bottom + 50;
      addStyle(
        /*css*/
        `
		.comiis_space_box{
			height: ${total_height}px;
			background-size: 100% 100%;
		}
		.pg_k_misign .comiis_qdinfo{
			height: 110px !important;
		}`
      );
      todayStarParent.append(todayStar);
    },
    /**
     * 显示【今日最先】
     */
    showTodayRanking() {
      log.info(`显示【今日最先】`);
      let today_ranking_ele = document.querySelector(
        ".comiis_topnv .comiis_flex .flex"
      );
      let $li = domUtils.createElement("li", {
        className: "flex"
      });
      let $todayLatest = domUtils.createElement(
        "a",
        {
          id: "k_misignlist_today_latest",
          href: "javascript:;",
          innerHTML: "今日最先"
        },
        {
          onclick: "ajaxlist('todayLatest');"
        }
      );
      $li.appendChild($todayLatest);
      domUtils.after(today_ranking_ele, $li);
      let getMaxPage = async (urlextra2) => {
        let response = await httpx.get(
          `/k_misign-sign.html?operation=${urlextra2}`,
          {
            responseType: "html",
            headers: {
              "User-Agent": utils.getRandomPCUA()
            }
          }
        );
        if (!response.status) {
          return;
        }
        let doc = domUtils.parseHTML(response.data.responseText, true, true);
        let last_page = doc.querySelector(
          "#J_list_detail .pg span"
        );
        if (last_page && typeof last_page.title != "undefined") {
          let last_page_match = last_page.title.match(/([0-9]+)/);
          if (last_page_match && last_page_match.length == 2) {
            return parseInt(last_page_match[last_page_match.length - 1]);
          } else {
            Qmsg.error("获取页失败");
          }
        } else {
          Qmsg.error("请求最先签到的页失败");
        }
      };
      let getPagePeople = async (page) => {
        let response = await httpx.get(
          `/k_misign-sign.html?operation=list&op=&page=${page}`,
          {
            responseType: "html",
            headers: {
              "User-Agent": utils.getRandomPCUA()
            }
          }
        );
        if (!response.status) {
          return;
        }
        let doc = domUtils.parseHTML(response.data.responseText, true, true);
        let peoples = doc.querySelectorAll(
          "#J_list_detail tbody tr"
        );
        let ret_array = [];
        if (peoples.length == 2 && peoples[0].textContent.indexOf("暂无内容") != -1) {
          return ret_array;
        }
        for (let index = 1; index <= peoples.length - 2; index++) {
          let people = peoples[index];
          let ret_json = {
            user: "",
            uid: "",
            avatar: "",
            days: "",
            monthDays: "",
            time: "",
            reward: ""
          };
          let user_name = people.children[0].getElementsByTagName("a")[0].textContent;
          let space_url = people.children[0].getElementsByTagName("a")[0].href;
          let uid = space_url.match(/space-uid-([0-9]*)/)[1];
          let sign_all_days = people.children[1].textContent;
          let sign_month_days = people.children[2].textContent;
          let sign_time = people.children[3].textContent;
          let sign_reward = people.children[5].textContent;
          ret_json["user"] = user_name;
          ret_json["uid"] = uid;
          ret_json["avatar"] = MTUtils.getAvatar(uid, "small");
          ret_json["days"] = sign_all_days;
          ret_json["monthDays"] = sign_month_days;
          ret_json["time"] = sign_time;
          ret_json["reward"] = sign_reward;
          ret_array.push(ret_json);
        }
        return ret_array;
      };
      function changeRankList(data, listtype) {
        let $ranklist = document.querySelector("#ranklist");
        domUtils.html($ranklist, data);
        domUtils.attr($ranklist, "listtype", listtype);
      }
      _unsafeWindow.ajaxlist = async (listtype) => {
        listtype = listtype;
        if (listtype == "today") {
          loadingdelay = false;
          urlextra = "list&op=today";
        } else if (listtype == "month") {
          loadingdelay = false;
          urlextra = "list&op=month";
        } else if (listtype == "zong") {
          loadingdelay = false;
          urlextra = "list&op=zong";
        } else if (listtype == "calendar") {
          loadingdelay = true;
          urlextra = "calendar";
        } else {
          loadingdelay = false;
          urlextra = "list";
        }
        if (listtype == "todayLatest") {
          loadingdelay = false;
          urlextra = "list&op=&page=0";
          let maxPage = await getMaxPage(urlextra);
          if (!maxPage) {
            return;
          }
          let latestPeople = await getPagePeople(maxPage);
          latestPeople.reverse();
          if (latestPeople.length < 10) {
            let latestPeople_2 = await getPagePeople(maxPage - 1);
            latestPeople_2.reverse();
            latestPeople = latestPeople.concat(latestPeople_2);
            latestPeople.reverse();
          }
          let peopleHTML = "";
          latestPeople.reverse();
          latestPeople.forEach((people) => {
            peopleHTML = peopleHTML + /*html*/
            `
						<tbody id="autolist_${people["uid"]}">
			  				<tr>
								<td class="k_misign_lu">
									<a href="home.php?mod=space&amp;uid=${people["uid"]}">
										<img src="${people["avatar"]}" loading="lazy">
									</a>
								</td>
								<td class="k_misign_ll"><span></span></td>
								<td class="k_misign_lc">
									<h4 class="f_c">
										<a href="home.php?mod=space&amp;uid=${people["uid"]}">${people["user"]}</a>
										<span>${people["time"]}</span>
										<span class="y">总天数 ${people["days"]}天</span>
									</h4>
									<p class="f_0">月天数 ${people["monthDays"]} 天，上次奖励 ${people["reward"]}</p>
				  				</td>
							</tr>
			  			</tbody>`;
          });
          let latestHTML = (
            /*html*/
            `
					<li class="styli_h bg_e"></li>
					<div class="comiis_topnv bg_f b_t b_b">
						<ul class="comiis_flex">
							<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>
							<li class="flex f_0"><em class="bg_0"></em><a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');">今日最先</a>
							</li>
							<li class="flex"><a href="javascript:;" id="k_misignlist_month" onclick="ajaxlist('month');" class="f_c">本月排行</a>
							</li>
							<li class="flex"><a href="javascript:;" id="k_misignlist_zong" onclick="ajaxlist('zong');" class="f_c">总排行</a></li>
						</ul>
					</div>
					<div class="k_misign_wp">
						<div class="k_misign_list bg_f">
							<table id="misign_list">
							${peopleHTML}
							</table>
						</div>
					</div>`
          );
          changeRankList(latestHTML, listtype);
        } else {
          httpx.get(`plugin.php?id=k_misign:sign&operation=${urlextra}`, {
            responseType: "html",
            fetch: true
          }).then((response) => {
            let data = response.data.responseText;
            data = data.replace(
              `今日排行</a></li>`,
              `今日排行</a></li>
							<li class="flex">
								<a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');" class="f_c">今日最先</a>
							</li>`
            );
            if (listtype == "today") {
              data = data.replace(
                `<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>`,
                /*html*/
                `
								<li class="flex f_0">
									<em class="bg_0"></em>
									<a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a>
								</li>
								`
              );
            }
            changeRankList(data, listtype);
          });
        }
      };
    }
  };
  const MTSpace = {
    init() {
      Panel.execMenuOnce("mt-space-repairEnterSpace", () => {
        this.repairEnterSpace();
      });
      domUtils.ready(() => {
        Panel.execMenuOnce("mt-space-showCommentContent", () => {
          this.showCommentContent();
        });
      });
    },
    /**
     * 修复无法进入空间
     */
    repairEnterSpace() {
      log.info(`修复无法进入空间`);
      if (MTRouter.isSpace()) {
        let hrefParamsMatchArray = window.location.href.match(/home.php\?(.+)/gi);
        let href_params = hrefParamsMatchArray[hrefParamsMatchArray.length - 1];
        let params_split = href_params.split("&");
        if (params_split.length == 2 && href_params.indexOf("uid=") != -1 && href_params.indexOf("mod=space") != -1) {
          window.location.href = window.location.href + "&do=profile";
        }
      } else if (MTRouter.isSpaceWithAt()) {
        let hrefParamsMatchArray = window.location.href.match(/space-uid-(.+).html/i);
        let href_params = hrefParamsMatchArray[hrefParamsMatchArray.length - 1];
        window.location.href = `${window.location.origin}/home.php?mod=space&uid=${href_params}&do=profile`;
      }
    },
    /**
     * 显示帖子回复内容
     */
    async showCommentContent() {
      log.info(`显示帖子回复内容`);
      addStyle(
        /*css*/
        `
		div.contrete-reply{padding:5px 10px;border-top:1px solid #f3f3f3}
		div.contrete-reply a{margin:0 10px}
		`
      );
      async function getPCReply() {
        let response = await httpx.get(window.location.href, {
          headers: {
            "User-Agent": utils.getRandomPCUA()
          }
        });
        if (!response.status) {
          return;
        }
        let doc = domUtils.parseHTML(response.data.responseText, true, true);
        let resultList = [];
        doc.querySelectorAll("#delform tr.bw0_all+tr").forEach((item) => {
          let replyData = [];
          let tagTDNode = item.querySelector("td");
          let tagTDValue = domUtils.html(tagTDNode).replace(/^&nbsp;/, "");
          replyData.push(tagTDValue);
          let nextHTML = domUtils.next(item);
          let $tr = doc.querySelectorAll("#delform tr");
          for (let index = 0; index < $tr.length; index++) {
            if (!nextHTML || domUtils.attr(nextHTML, "class") === "bw0_all") {
              break;
            }
            let nextTdHTML = nextHTML.querySelector("td");
            let nextValue = domUtils.html(nextTdHTML).replace(/^&nbsp;/, "");
            replyData = replyData.concat(nextValue);
            nextHTML = domUtils.next(nextHTML);
          }
          resultList.push(...replyData);
        });
        return resultList;
      }
      function getForumList() {
        return utils.getNodeListValue(
          ElementUtils.comiisForumList(),
          ElementUtils.comiisPostli(),
          ElementUtils.comiisMmlist()
        );
      }
      function formatPCReply(dataList) {
        let resultJSON = {};
        dataList.forEach((item) => {
          let divItem = domUtils.createElement("div", {
            innerHTML: item
          });
          let url = divItem.querySelector("a")?.getAttribute("href");
          let paramPtidMatch = url.match(MTRegExp.ptid);
          let paramPidMatch = url.match(MTRegExp.pid);
          if (!paramPtidMatch) {
            Qmsg.error("获取ptid失败");
            return;
          }
          if (!paramPidMatch) {
            Qmsg.error("获取pid失败");
            return;
          }
          let paramPtid = paramPtidMatch[paramPtidMatch.length - 1];
          let paramPid = paramPidMatch[paramPidMatch.length - 1];
          if (resultJSON[paramPtid]) {
            resultJSON[paramPtid]["data"].push(item);
          } else {
            resultJSON[paramPtid] = {
              ptid: paramPtid,
              pid: paramPid,
              data: [item]
            };
          }
        });
        return resultJSON;
      }
      var pcReplyArray = await getPCReply();
      if (pcReplyArray == null) {
        return;
      }
      var pcReplyJSON = formatPCReply(pcReplyArray);
      let forumList = getForumList();
      forumList.forEach((forumListItem, forumListItemIndex) => {
        let praiseNode = forumListItem.querySelector(
          ".comiis_xznalist_bottom a"
        );
        let forumTid = praiseNode.getAttribute("tid");
        if (!forumTid) {
          Qmsg.error("获取帖子tid失败");
          log.error(forumListItem);
          return;
        }
        if (!pcReplyJSON[forumTid]) {
          return;
        }
        pcReplyJSON[forumTid]["data"].forEach((forumListReplyHTMLItem) => {
          domUtils.append(
            forumListItem,
            `<div class="contrete-reply">${forumListReplyHTMLItem}</div>`
          );
        });
      });
    }
  };
  const MTPaidThemePost = {
    $key: {
      tipData: "tipToFreeSubjectForumPost"
    },
    init() {
      this.registerMenu();
      let setTipForumPostList = this.getTipData();
      if (MTRouter.isPost()) {
        let $kmren = document.querySelector("span.kmren");
        if ($kmren) {
          log.info("当前帖子存在需要购买主题");
          let isAddTip = false;
          let $tipBtn;
          setTipForumPostList.forEach((item, index) => {
            if (window.location.href.match(item["url"])) {
              isAddTip = true;
              return;
            }
          });
          if (isAddTip) {
            log.warn("已设置提醒");
            $tipBtn = domUtils.createElement("a", {
              href: "javascript:;",
              className: "styli_tit f_c",
              innerHTML: (
                /*html*/
                `
                        <i class="comiis_font" style="color: #ffffff;"></i>
                        `
              )
            });
            domUtils.on($tipBtn, "click", function() {
              __pops.confirm({
                title: {
                  text: "提示",
                  position: "center"
                },
                content: {
                  text: "<p>确定移出付费主题白嫖列表？</p>",
                  html: true
                },
                btn: {
                  ok: {
                    callback: function() {
                      let findIndex = setTipForumPostList.findIndex(
                        (item, index) => {
                          return window.location.href.match(item["url"]);
                        }
                      );
                      if (findIndex !== -1) {
                        setTipForumPostList.splice(findIndex, 1);
                        MTPaidThemePost.setTipData(setTipForumPostList);
                        Qmsg.success("移除成功");
                      } else {
                        Qmsg.error("移除失败");
                      }
                    }
                  }
                },
                width: "88vw",
                height: "300px"
              });
            });
          } else {
            log.info("未设置提醒");
            $tipBtn = domUtils.createElement("a", {
              href: "javascript:;",
              className: "styli_tit f_c",
              innerHTML: (
                /*html*/
                `
                        <i class="comiis_font" style="color: #FF9900;"></i>
                        `
              )
            });
            domUtils.on($tipBtn, "click", () => {
              let $_kmren = document.querySelector(".kmren");
              let $_kmren_parent = domUtils.parent($_kmren);
              let expirationTimeMatch = domUtils.text($_kmren_parent).replace(/\t|\n/g, "").match(
                /[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/
              );
              if (!expirationTimeMatch || expirationTimeMatch.length == 0) {
                Qmsg.error("获取付费主题到期时间失败");
                return;
              }
              let expirationTime = expirationTimeMatch[0];
              let expirationTimeStamp = utils.formatToTimeStamp(expirationTime);
              setTipForumPostList.push({
                url: window.location.href,
                title: document.title.replace(" - MT论坛", ""),
                expirationTime,
                expirationTimeStamp,
                isVisited: false
              });
              _GM_setValue("tipToFreeSubjectForumPost", setTipForumPostList);
              Qmsg.success("添加成功");
              setTimeout(function() {
                window.location.reload();
              }, 1500);
            });
          }
          let $header_y = document.querySelector(
            ".comiis_head.f_top .header_y"
          );
          domUtils.append($header_y, $tipBtn);
        }
      }
      function getTipNums() {
        let needTipNums = 0;
        Array.from(MTPaidThemePost.getTipData()).forEach((item, index) => {
          if ((/* @__PURE__ */ new Date()).getTime() > item["expirationTimeStamp"] && item["isVisited"] == false) {
            needTipNums += 1;
          }
        });
        return needTipNums;
      }
      if (MTRouter.isMySpace() || MTRouter.isGuide() || MTRouter.isForumList() || MTRouter.isPlate()) {
        let redBtn2 = document.querySelector(
          ".icon_msgs.bg_del.f_f"
        );
        let tipNums2 = 0;
        if (redBtn2) {
          tipNums2 = parseInt(domUtils.text(redBtn2));
          domUtils.html(redBtn2, (tipNums2 + getTipNums()).toString());
          domUtils.append(
            ".comiis_head .header_z .kmuser em",
            `<span class="icon_msgs bg_del"></span>`
          );
        } else {
          let tipnums = getTipNums();
          if (tipnums) {
            domUtils.append(
              ".comiis_head .header_z .kmuser em",
              `<span class="icon_msgs bg_del"></span>`
            );
          }
        }
      }
      let redBtn = document.querySelector(
        ".sidenv_num.bg_del.f_f"
      );
      let tipNums = 0;
      if (redBtn) {
        tipNums = parseInt(domUtils.text(redBtn));
        domUtils.html(
          ".sidenv_num.bg_del.f_f",
          (tipNums + getTipNums()).toString()
        );
      } else {
        let tipnums = getTipNums();
        if (tipnums) {
          domUtils.before(
            ".sidenv_user em",
            `<span class="sidenv_num bg_del f_f">${tipnums}</span>`
          );
        }
      }
      if (getTipNums()) {
        domUtils.append(
          ".comiis_left_Touch .paymentsubjectreminder div.flex",
          /*html*/
          `
                <span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`
        );
      }
    },
    registerMenu() {
      ElementUtils.registerLeftMenu({
        name: "付费主题白嫖提醒",
        icon: "",
        iconColor: "#ec0000",
        callback: () => {
          this.showView();
        }
      });
    },
    /**
     * 显示白嫖列表
     */
    showView() {
      log.info(`显示白嫖列表`);
      let data = MTPaidThemePost.getTipData();
      __pops.alert({
        title: {
          text: "付费主题白嫖列表",
          position: "center"
        },
        content: {
          text: "",
          html: true
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default"
          }
        },
        width: "88vw",
        height: "88vh"
      });
      let notVisitedTipContent = "";
      let notVisitedNums = 0;
      let isFreeContent = "";
      let isPaidContent = "";
      let isFreeNotVisitedContentList = [];
      let isFreeContentList = [];
      let isPaidContentList = [];
      data.forEach((item, index) => {
        let timeColor = "#f91212";
        let leftRedBtn = "";
        if ((/* @__PURE__ */ new Date()).getTime() > item["expirationTimeStamp"]) {
          timeColor = "#1e90ff";
          if (item["isVisited"]) ;
          else {
            leftRedBtn = /*html*/
            `
                        <span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>
                    `;
            notVisitedNums = notVisitedNums + 1;
          }
        }
        let contentInfo = {
          content: (
            /*html*/
            `
                <tbody id="autolist">
                    <tr>
                        <td style="width: 100%;">
                            <div style="display: inline-flex;">
                            ${leftRedBtn}
                            <div style="width: 240px;">                 
                                <a href="javascript:void(0);" t-href="${item["url"]}" t-index="${index}" style="color: #1e90ff;">${item["title"]}</a>
                                <li style="margin: 5px 15px;color: ${timeColor};">${item["expirationTime"]}</li>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" t-index="${index}" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:15px;"></tr>
                </tbody>`
          ),
          timestamp: item["expirationTimeStamp"]
        };
        if ((/* @__PURE__ */ new Date()).getTime() > item["expirationTimeStamp"]) {
          if (leftRedBtn != "") {
            isFreeNotVisitedContentList.push(contentInfo);
          } else {
            isFreeContentList.push(contentInfo);
          }
        } else {
          isPaidContentList.push(contentInfo);
        }
      });
      log.info("可白嫖但未访问：", isFreeNotVisitedContentList);
      log.info("可白嫖：", isFreeContentList);
      log.info("未到白嫖时间：", isPaidContentList);
      utils.sortListByProperty(
        isFreeNotVisitedContentList,
        "expirationTimeStamp",
        false
      );
      utils.sortListByProperty(isFreeContentList, "timestamp", false);
      utils.sortListByProperty(isPaidContentList, "timestamp", false);
      log.info("排序后——可白嫖但未访问：", isFreeNotVisitedContentList);
      log.info("排序后——可白嫖：", isFreeContentList);
      log.info("排序后——未到白嫖时间：", isPaidContentList);
      isFreeContent = utils.mergeArrayToString(isFreeNotVisitedContentList, "content") + utils.mergeArrayToString(isFreeContentList, "content");
      isPaidContent = utils.mergeArrayToString(isPaidContentList, "content");
      if (notVisitedNums > 0) {
        notVisitedTipContent = /*html*/
        `
            <span class="icon_msgs bg_del f_f" style="
                display: inline-block;
                position: absolute;
                width: 16px;
                height: 16px;
                line-height: 16px;
                border-radius: 50%;
                font-size: 14px;
                text-align: center;
                margin: 3px 0px 0px 10px;
            ">${notVisitedNums}</span>`;
      }
      let dialogIsFreeContent = (
        /*html*/
        `
            <details class="subjectcanvisit" open="">
                <summary>可白嫖${notVisitedTipContent}</summary>
                <table id="paymentSubjectReminderIsFreeList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${isFreeContent}    
                </table>
            </details>
        `
      );
      let dialogIsPaidContent = (
        /*html*/
        `
            <details class="subjectnotvisit">
                <summary>需付费</summary>
                <table id="paymentSubjectReminderIsPaidList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${isPaidContent}
                </table>
            </details>
        `
      );
      let $msgcon = document.querySelector(".msgcon");
      domUtils.html($msgcon, "");
      domUtils.append($msgcon, dialogIsFreeContent);
      domUtils.append($msgcon, dialogIsPaidContent);
      domUtils.css($msgcon, "height", "400px");
      domUtils.on(
        document.querySelector(".delsubjecttip i.comiis_font"),
        "click",
        (event) => {
          let $click = event.target;
          let $parent = domUtils.parent($click);
          var t_index = parseInt($parent.getAttribute("t-index"));
          __pops.confirm({
            title: {
              text: "提示",
              position: "center"
            },
            content: {
              text: "<p>确定移出付费主题白嫖列表？</p>",
              html: true
            },
            btn: {
              ok: {
                callback: (details) => {
                  data.splice(t_index, 1);
                  MTPaidThemePost.setTipData(data);
                  utils.deleteParentNode($click, "tr");
                  details.close();
                }
              }
            },
            width: "80vw",
            height: "300px"
          });
        }
      );
      let $paymentSubjectReminderIsFreeList = document.querySelector(
        "#paymentSubjectReminderIsFreeList"
      );
      domUtils.on($paymentSubjectReminderIsFreeList, "click", "a", (event) => {
        let $click = event.target;
        var tIndex = parseInt($click.getAttribute("t-index"));
        var tHref = $click.getAttribute("t-href");
        data[tIndex]["isVisited"] = true;
        MTPaidThemePost.setTipData(data);
        window.open(tHref, "_blank");
        $click.setAttribute("style", "color: #000000;");
        if ($click?.parentElement?.parentElement?.children[0].className != "icon_msgs bg_del") {
          return;
        }
        $click.parentElement.parentElement.children[0].remove();
        domUtils.append(
          $paymentSubjectReminderIsFreeList,
          $click?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement
        );
        let $del = document.querySelector(
          ".subjectcanvisit summary span.icon_msgs.bg_del.f_f"
        );
        let notVisitedNumsStr = domUtils.text($del);
        let notVisitedNums2 = parseInt(notVisitedNumsStr) - 1;
        if (notVisitedNums2 > 0) {
          domUtils.html($del, notVisitedNums2.toString());
        } else {
          $del.remove();
        }
      });
      let $paymentSubjectReminderIsPaidList = document.querySelector(
        "paymentSubjectReminderIsPaidList"
      );
      domUtils.on($paymentSubjectReminderIsPaidList, "click", "a", (event) => {
        let $click = event.target;
        $click.getAttribute("t-index");
        var t_href = $click.getAttribute("t-href");
        window.open(t_href, "_blank");
        $click.setAttribute("style", "color: #000000;");
      });
    },
    getTipData() {
      return _GM_getValue(this.$key.tipData, []);
    },
    setTipData(data) {
      _GM_setValue(this.$key.tipData, data);
    }
  };
  const smallWindowCSS = ".pops {\r\n	--icon-width: 24px;\r\n	--right-btn-width: 115px;\r\n}\r\n\r\n.small-window-drag {\r\n	width: 100%;\r\n	position: relative;\r\n	height: 10px;\r\n}\r\n.small-window-drag div {\r\n	width: 50px;\r\n	margin: 0 auto;\r\n	height: 4px;\r\n	background: #d9d9d9;\r\n	border-radius: 15px;\r\n	bottom: 3px;\r\n	position: relative;\r\n}\r\n\r\n.pops[type-value] .pops-drawer-title {\r\n	display: block;\r\n	background: #fff;\r\n	width: 100%;\r\n	box-sizing: border-box;\r\n	padding: 16px 0px;\r\n	border-bottom: 1px solid #d6d6d6;\r\n}\r\n\r\n.small-window-title-container {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	padding: 0px 16px;\r\n}\r\n.small-window-website-icon {\r\n	width: var(--icon-width);\r\n	height: var(--icon-width);\r\n	align-self: center;\r\n	border-radius: 3px;\r\n}\r\n.small-window-title-text-container {\r\n	margin-right: auto;\r\n	max-width: calc(100% - var(--icon-width) - var(--right-btn-width));\r\n	display: flex;\r\n	flex-direction: column;\r\n	gap: 4px;\r\n	padding: 0px 16px;\r\n}\r\n.small-window-title-text,\r\n.small-window-website-host {\r\n	min-width: 150px;\r\n	overflow: hidden;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n}\r\n.xtiper_sheet_tit.xtiper_sheet_left {\r\n	display: block;\r\n	background: #fff;\r\n	width: 100%;\r\n	box-sizing: border-box;\r\n}\r\n.small-window-protocol-info {\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n.small-window-control {\r\n	display: flex;\r\n	align-items: center;\r\n	align-content: center;\r\n	width: var(--right-btn-width);\r\n	justify-content: center;\r\n	gap: 12px;\r\n}\r\n.small-window-control-image-view,\r\n.small-window-control-open-blank,\r\n.small-window-control-close {\r\n	width: 2rem;\r\n	height: 2rem;\r\n	text-align: center;\r\n	margin: 0 0;\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n}\r\n\r\n.refresh-icon {\r\n	width: 40px;\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: center;\r\n	padding: 0px 16px;\r\n}\r\n.refresh-icon-in,\r\n.refresh-icon-out {\r\n	position: absolute;\r\n	border: 5px solid rgba(0, 183, 229, 0.9);\r\n	opacity: 0.9;\r\n	border-radius: 50px;\r\n	box-shadow: 0 0 15px #2187e7;\r\n	width: 20px;\r\n	height: 20px;\r\n	margin: 0 auto;\r\n}\r\n.refresh-icon-out {\r\n	background-color: rgba(0, 0, 0, 0);\r\n	border-right: 5px solid transparent;\r\n	border-left: 5px solid transparent;\r\n	-moz-animation: spinPulse 1s infinite ease-in-out;\r\n	-webkit-animation: spinPulse 1s infinite ease-in-out;\r\n	-o-animation: spinPulse 1s infinite ease-in-out;\r\n	-ms-animation: spinPulse 1s infinite ease-in-out;\r\n}\r\n.refresh-icon-in {\r\n	background: rgba(0, 0, 0, 0) no-repeat center center;\r\n	border-top: 5px solid transparent;\r\n	border-bottom: 5px solid transparent;\r\n	-moz-animation: spinoffPulse 3s infinite linear;\r\n	-webkit-animation: spinoffPulse 3s infinite linear;\r\n	-o-animation: spinoffPulse 3s infinite linear;\r\n	-ms-animation: spinoffPulse 3s infinite linear;\r\n}\r\n@-moz-keyframes spinPulse {\r\n	0% {\r\n		-moz-transform: rotate(160deg);\r\n		opacity: 0;\r\n		box-shadow: 0 0 1px #505050;\r\n	}\r\n	50% {\r\n		-moz-transform: rotate(145deg);\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		-moz-transform: rotate(-320deg);\r\n		opacity: 0;\r\n	}\r\n}\r\n@-moz-keyframes spinoffPulse {\r\n	0% {\r\n		-moz-transform: rotate(0);\r\n	}\r\n	100% {\r\n		-moz-transform: rotate(360deg);\r\n	}\r\n}\r\n@-webkit-keyframes spinPulse {\r\n	0% {\r\n		-webkit-transform: rotate(160deg);\r\n		opacity: 0;\r\n		box-shadow: 0 0 1px #505050;\r\n	}\r\n	50% {\r\n		-webkit-transform: rotate(145deg);\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		-webkit-transform: rotate(-320deg);\r\n		opacity: 0;\r\n	}\r\n}\r\n@-webkit-keyframes spinoffPulse {\r\n	0% {\r\n		-webkit-transform: rotate(0);\r\n	}\r\n	100% {\r\n		-webkit-transform: rotate(360deg);\r\n	}\r\n}\r\n@-o-keyframes spinPulse {\r\n	0% {\r\n		-o-transform: rotate(160deg);\r\n		opacity: 0;\r\n		box-shadow: 0 0 1px #505050;\r\n	}\r\n	50% {\r\n		-o-transform: rotate(145deg);\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		-o-transform: rotate(-320deg);\r\n		opacity: 0;\r\n	}\r\n}\r\n@-o-keyframes spinoffPulse {\r\n	0% {\r\n		-o-transform: rotate(0);\r\n	}\r\n	100% {\r\n		-o-transform: rotate(360deg);\r\n	}\r\n}\r\n@-ms-keyframes spinPulse {\r\n	0% {\r\n		-ms-transform: rotate(160deg);\r\n		opacity: 0;\r\n		box-shadow: 0 0 1px #505050;\r\n	}\r\n	50% {\r\n		-ms-transform: rotate(145deg);\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		-ms-transform: rotate(-320deg);\r\n		opacity: 0;\r\n	}\r\n}\r\n@-ms-keyframes spinoffPulse {\r\n	0% {\r\n		-ms-transform: rotate(0);\r\n	}\r\n	100% {\r\n		-ms-transform: rotate(360deg);\r\n	}\r\n}\r\n@-moz-keyframes spinPulse {\r\n	0% {\r\n		-moz-transform: rotate(160deg);\r\n		opacity: 0;\r\n		box-shadow: 0 0 1px #505050;\r\n	}\r\n	50% {\r\n		-moz-transform: rotate(145deg);\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		-moz-transform: rotate(-320deg);\r\n		opacity: 0;\r\n	}\r\n}\r\n@-moz-keyframes spinoffPulse {\r\n	0% {\r\n		-moz-transform: rotate(0);\r\n	}\r\n	100% {\r\n		-moz-transform: rotate(360deg);\r\n	}\r\n}\r\n@-webkit-keyframes spinPulse {\r\n	0% {\r\n		-webkit-transform: rotate(160deg);\r\n		opacity: 0;\r\n		box-shadow: 0 0 1px #505050;\r\n	}\r\n	50% {\r\n		-webkit-transform: rotate(145deg);\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		-webkit-transform: rotate(-320deg);\r\n		opacity: 0;\r\n	}\r\n}\r\n@-webkit-keyframes spinoffPulse {\r\n	0% {\r\n		-webkit-transform: rotate(0);\r\n	}\r\n	100% {\r\n		-webkit-transform: rotate(360deg);\r\n	}\r\n}\r\n@-o-keyframes spinPulse {\r\n	0% {\r\n		-o-transform: rotate(160deg);\r\n		opacity: 0;\r\n		box-shadow: 0 0 1px #505050;\r\n	}\r\n	50% {\r\n		-o-transform: rotate(145deg);\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		-o-transform: rotate(-320deg);\r\n		opacity: 0;\r\n	}\r\n}\r\n@-o-keyframes spinoffPulse {\r\n	0% {\r\n		-o-transform: rotate(0);\r\n	}\r\n	100% {\r\n		-o-transform: rotate(360deg);\r\n	}\r\n}\r\n@-ms-keyframes spinPulse {\r\n	0% {\r\n		-ms-transform: rotate(160deg);\r\n		opacity: 0;\r\n		box-shadow: 0 0 1px #505050;\r\n	}\r\n	50% {\r\n		-ms-transform: rotate(145deg);\r\n		opacity: 1;\r\n	}\r\n	100% {\r\n		-ms-transform: rotate(-320deg);\r\n		opacity: 0;\r\n	}\r\n}\r\n@-ms-keyframes spinoffPulse {\r\n	0% {\r\n		-ms-transform: rotate(0);\r\n	}\r\n	100% {\r\n		-ms-transform: rotate(360deg);\r\n	}\r\n}\r\n";
  class GestureBack {
    /**
     * 是否正在后退
     */
    isBacking = false;
    config;
    constructor(config) {
      this.config = config;
      this.enterGestureBackMode = this.enterGestureBackMode.bind(this);
      this.quitGestureBackMode = this.quitGestureBackMode.bind(this);
      this.popStateEvent = this.popStateEvent.bind(this);
      if (typeof this.config.backDelayTime !== "number" || isNaN(this.config.backDelayTime)) {
        this.config.backDelayTime = 150;
      }
      if (this.config.win == null) {
        this.config.win = self;
      }
    }
    /**
     * popstate事件函数
     * @param event
     */
    popStateEvent(event) {
      Utils.preventEvent(event);
      if (this.isBacking) {
        return;
      }
      this.quitGestureBackMode(true);
    }
    /**
     * 进入手势模式
     */
    enterGestureBackMode() {
      log.success("进入手势模式");
      let pushUrl = this.config.hash;
      if (!pushUrl.startsWith("#")) {
        if (!pushUrl.startsWith("/")) {
          pushUrl = "/" + pushUrl;
        }
        pushUrl = "#" + pushUrl;
      }
      if (this.config.useUrl) {
        pushUrl = this.config.win.location.origin + this.config.win.location.pathname + this.config.win.location.search + pushUrl;
      }
      this.config.win.history.pushState({}, "", pushUrl);
      log.success("监听popstate事件");
      domUtils.on(this.config.win, "popstate", this.popStateEvent, {
        capture: true
      });
    }
    /**
     * 退出手势模式
     * @param isUrlChange 是否是url改变触发的
     */
    async quitGestureBackMode(isUrlChange = false) {
      this.isBacking = true;
      log.success("退出手势模式");
      if (typeof this.config.beforeHistoryBackCallBack === "function") {
        this.config.beforeHistoryBackCallBack(isUrlChange);
      }
      let maxDate = Date.now() + 1e3 * 5;
      while (true) {
        if (Date.now() > maxDate) {
          log.error("未知情况，history.back()失败，无法退出手势模式");
          break;
        }
        if (this.config.win.location.hash.endsWith(this.config.hash)) {
          log.info("history.back()");
          this.config.win.history.back();
          await Utils.sleep(this.config.backDelayTime || 150);
        } else {
          break;
        }
      }
      log.success("移除popstate事件");
      domUtils.off(this.config.win, "popstate", this.popStateEvent, {
        capture: true
      });
      this.isBacking = false;
      if (typeof this.config.afterHistoryBackCallBack === "function") {
        this.config.afterHistoryBackCallBack(isUrlChange);
      }
    }
  }
  const MTSmallWindowIcon = {
    /** 锁图标 */
    https: (
      /*html*/
      `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="margin: 0px 6px 0px 2px;">
			<path fill="#000000" d="M842.666667 384h-74.666667V277.333333a234.666667 234.666667 0 1 0-469.333333 0v106.666667H224a53.393333 53.393333 0 0 0-53.333333 53.333333v490.666667a53.393333 53.393333 0 0 0 53.333333 53.333333h618.666667a53.393333 53.393333 0 0 0 53.333333-53.333333V437.333333a53.393333 53.393333 0 0 0-53.333333-53.333333zM341.333333 277.333333c0-105.866667 86.133333-192 192-192s192 86.133333 192 192v106.666667H341.333333z"></path>
		</svg>`
    ),
    /** 开锁图标 */
    http: (
      /*html*/
      `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
		<path fill="#2c2c2c" d="M770.423989 451.309956H368.89432V284.246158c0-80.739434 65.689748-146.429182 146.429182-146.429182S661.738235 203.506724 661.738235 284.246158a43.350032 43.350032 0 0 0 86.700063 0c0-128.547294-104.581952-233.129246-233.122021-233.129246-128.547294 0-233.129246 104.581952-233.129245 233.129246v167.063798h-21.978466a43.350032 43.350032 0 0 0-43.350032 43.350031v437.965371a43.350032 43.350032 0 0 0 43.350032 43.350032h510.215423a43.350032 43.350032 0 0 0 43.350032-43.350032V494.659987a43.350032 43.350032 0 0 0-43.350032-43.350031z"></path>
		</svg>`
    ),
    /** 新标签页打开 */
    openBlank: (
      /*html*/
      `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M192 288A96 96 0 0 1 288 192h128a32 32 0 0 0 0-64h-128A160 160 0 0 0 128 288v448A160 160 0 0 0 288 896h448a160 160 0 0 0 160-160v-128a32 32 0 0 0-64 0v128a96 96 0 0 1-96 96h-448A96 96 0 0 1 192 736v-448z" fill="#000000" fill-opacity=".85"></path>
			<path d="M608 128a32 32 0 0 0 0 64h178.752L521.344 457.344a32 32 0 1 0 45.312 45.312L832 237.248V416a32 32 0 0 0 64 0v-256a32 32 0 0 0-32-32h-256z" fill="#000000" fill-opacity=".85" p-id="2334"></path>
		</svg>`
    ),
    /** 关闭 */
    close: (
      /*html*/
      `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0h1024v1024H0z" fill="#FF0033" fill-opacity="0" p-id="3329"></path><path d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z" fill="#111111" p-id="3330"></path>
		</svg>`
    ),
    /** 图片预览 */
    image: (
      /*html*/
      `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z" fill="#000000"></path>
		</svg>`
    ),
    /** 坐标的网站图标 */
    mt: (
      /*html*/
      `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
			<path d="M979.622067 257.689317c22.828607 10.592474 32.873194 37.804173 22.280721 60.63278l-166.009631 359.778848c-10.592474 22.828607-37.804173 32.873194-60.63278 22.280721l-292.3888-134.780097c-22.828607-10.592474-32.873194-37.804173-22.280721-60.63278l166.009631-359.778848c10.592474-22.828607 37.804173-32.873194 60.632781-22.28072l292.388799 134.780096z" fill="#FFBA02" p-id="1715"></path><path d="M658.743166 46.205101v467.529873c0 25.202782-20.637061 45.657214-45.657214 45.657214H145.556078c-25.202782 0-45.657214-20.637061-45.657214-45.657214v-467.529873c0-25.202782 20.637061-45.657214 45.657214-45.657214h467.529874c25.202782 0 45.657214 20.454432 45.657214 45.657214z" fill="#E2E0E2" p-id="1716"></path><path d="M204.910457 236.50437a177.149991 175.871589 0 1 0 354.299982 0 177.149991 175.871589 0 1 0-354.299982 0Z" fill="#3D82FF" p-id="1717"></path><path d="M245.636692 42.369895a9.861958 9.679329 0 1 0 19.723916 0 9.861958 9.679329 0 1 0-19.723916 0Z" fill="#3D82FF" p-id="1718"></path><path d="M501.864978 43.10041a10.409845 10.409845 0 1 0 20.81969 0 10.409845 10.409845 0 1 0-20.81969 0Z" fill="#3D82FF" p-id="1719"></path><path d="M454.774127 104.071054l48.495267-66.347237 16.807334 12.285443-48.495267 66.347237zM248.102182 48.730858l15.77548-11.220717 50.279551 70.691978-15.775481 11.21889zM204.910457 231.390762h354.299982v193.586588h-354.299982z" fill="#3D82FF" p-id="1720"></path><path d="M280.701432 171.853754a26.115927 25.202782 0 1 0 52.231854 0 26.115927 25.202782 0 1 0-52.231854 0Z" fill="#FFFFFF" p-id="1721"></path><path d="M434.109672 171.671125a25.385411 25.202782 0 1 0 50.770822 0 25.385411 25.202782 0 1 0-50.770822 0Z" fill="#FFFFFF" p-id="1722"></path><path d="M394.844468 1023.817371H50.589073c-25.202782 0-45.657214-20.637061-45.657214-45.657214v-686.684502c0-25.202782 20.637061-45.657214 45.657214-45.657214h344.255395c25.202782 0 45.657214 20.637061 45.657214 45.657214v686.684502c0 25.202782-20.454432 45.657214-45.657214 45.657214z" fill="#303030" p-id="1723"></path><path d="M973.230057 342.976993H50.589073c-25.202782 0-45.657214 20.637061-45.657214 45.657214v589.708579c0 25.202782 20.637061 45.657214 45.657214 45.657214h922.640984c25.202782 0 45.657214-20.637061 45.657215-45.657214V388.634207c0-25.202782-20.637061-45.657214-45.657215-45.657214z" fill="#303030" p-id="1724"></path><path d="M392.287664 488.89745L295.311741 394.843588c-18.080257-17.53237-18.445515-46.570358-1.095773-64.650615l68.303192-70.677368c17.53237-18.080257 46.570358-18.445515 64.650616-1.095773l97.158551 94.053862c18.080257 17.53237 18.445515 46.570358 1.095774 64.650615l-68.303193 70.677367c-17.714999 18.080257-46.752987 18.628143-64.833244 1.095774z" fill="#303030" p-id="1725"></path><path d="M266.273753 628.060638v-13.331906l-54.240771-77.434635v316.495808c0 7.305154-2.556804 13.514535-7.670412 18.628144-5.113608 5.113608-11.322989 7.670412-18.628143 7.670412-7.305154 0-13.514535-2.556804-18.628143-7.853041-5.113608-5.113608-7.670412-11.322989-7.670412-18.445515V465.155698h67.755305l64.467987 94.053861 66.476904-94.053861H424.978229v388.634207c0 7.305154-2.739433 13.514535-8.035669 18.628144-5.296237 5.113608-11.688247 7.670412-18.810773 7.670412-7.122525 0-13.149278-2.556804-18.445514-7.853041-5.113608-5.113608-7.853041-11.322989-7.853041-18.445515V538.572499l-53.144997 74.877831v14.610308c0 7.122525-2.556804 13.149278-7.853041 18.445515-5.113608 5.113608-11.322989 7.853041-18.445515 7.853041-7.305154 0-13.514535-2.556804-18.628143-7.853041-4.930979-5.296237-7.487783-11.322989-7.487783-18.445515z" fill="#FFFFFF" p-id="1726"></path><path d="M600.301932 536.563581V465.703585h264.811842v71.407883c0 7.305154-2.556804 13.514535-7.853041 18.628143-5.113608 5.113608-11.322989 7.670412-18.445514 7.670412-7.305154 0-13.514535-2.556804-18.810772-7.853041-5.296237-5.113608-8.03567-11.322989-8.03567-18.445514v-18.993401h-53.144997v335.48921c0 7.305154-2.556804 13.514535-7.853041 18.628143-5.113608 5.113608-11.322989 7.670412-18.445515 7.670412-7.487783 0-13.879793-2.556804-18.993401-7.670412-5.113608-5.113608-7.853041-11.322989-7.853041-18.628143V518.300696h-53.144997v18.445514c0 7.305154-2.556804 13.514535-7.670412 18.628143-5.113608 5.113608-11.322989 7.670412-18.628143 7.670412-7.305154 0-13.514535-2.556804-18.628144-7.670412-4.74835-5.296237-7.305154-11.505618-7.305154-18.810772z" fill="#FFFFFF"></path>
		</svg>`
    )
  };
  const MTSmallWindow = {
    $key: {
      smallWindow: "smallWindow"
    },
    $el: {
      $refreshIcon: null,
      $webSiteIcon: null
    },
    init() {
      let lockFn = new utils.LockFunction(() => {
        let forumlist = this.getForumList();
        if (forumlist.length) {
          this.handleForumPost(forumlist);
        }
      });
      utils.mutationObserver(document.documentElement, {
        callback: (mutations, observer) => {
          lockFn.run();
        },
        config: { subtree: true, childList: true }
      });
    },
    /**
     * 获取页面所有的帖子
     */
    getForumList() {
      return utils.getNodeListValue(
        ElementUtils.comiisForumList(),
        ElementUtils.comiisPostli(),
        ElementUtils.comiisMmlist()
      );
    },
    /**
     * 显示小窗
     * @param title 标题
     * @param url 链接
     * @param imagesList 图片
     */
    showSmallWindow(title, url, imagesList = []) {
      let constructURL = new URL(url);
      let isHTTPS = constructURL.protocol.includes("https:");
      let websiteTitle = (
        /*html*/
        `
        <div class="small-window-drag">
            <!-- 这里是拖拽区域 -->
            <div></div>
        </div>
        <div class="small-window-title-container">
            <i class="small-window-website-icon" style="display: none;">
                ${MTSmallWindowIcon.mt}
            </i>
            <div class="refresh-icon">
                <div class="refresh-icon-out"></div>
                <div class="refresh-icon-in"></div>
            </div>
            <div class="small-window-title-text-container">
                <p class="small-window-title-text">${title}</p>
                <div class="small-window-protocol-info">
                    <i class="small-window-protocol-icon">
                        ${isHTTPS ? MTSmallWindowIcon.https : MTSmallWindowIcon.http}
                    </i>
                    <p class="small-window-website-host">${constructURL.host}</p>
                </div>
            </div>
            <div class="small-window-control">
                ${imagesList.length ? (
        /*html*/
        `
                    <i class="small-window-control-image-view">
                        ${MTSmallWindowIcon.image}
                    </i>
                    `
      ) : ""}
                <i class="small-window-control-open-blank">
                    ${MTSmallWindowIcon.openBlank}
                </i>
                <i class="small-window-control-close">
                    ${MTSmallWindowIcon.close}
                </i>
            </div>
        </div>`
      );
      let $drawer = __pops.drawer({
        title: {
          enable: true,
          text: websiteTitle,
          html: true,
          style: "height: auto;line-height: normal;"
        },
        content: {
          text: (
            /*html*/
            `
                <iframe scrolling="auto" allowtransparency="true" frameborder="0" src="${url}" style="width:100%; height:100%;">
                </iframe>
                `
          ),
          html: true
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: true
          },
          clickCallBack(originalRun, config) {
            getureBack.quitGestureBackMode();
          }
        },
        btn: {
          ok: {
            enable: false
          },
          cancel: {
            enable: false
          },
          close: {
            enable: false
          }
        },
        direction: "bottom",
        size: "92%",
        borderRadius: 18,
        style: smallWindowCSS
      });
      let $webSiteIcon = $drawer.$shadowRoot.querySelector(
        ".small-window-website-icon"
      );
      let $refreshIcon = $drawer.$shadowRoot.querySelector(".refresh-icon");
      let $imageIcon = $drawer.$shadowRoot.querySelector(
        ".small-window-control-image-view"
      );
      let $openBlankIcon = $drawer.$shadowRoot.querySelector(
        ".small-window-control-open-blank"
      );
      let $closeIcon = $drawer.$shadowRoot.querySelector(
        ".small-window-control-close"
      );
      let $titleText = $drawer.$shadowRoot.querySelector(
        ".small-window-title-text"
      );
      this.$el.$refreshIcon = $refreshIcon;
      this.$el.$webSiteIcon = $webSiteIcon;
      let $iframe = $drawer.$shadowRoot.querySelector("iframe");
      let $drag = $drawer.$shadowRoot.querySelector(".small-window-drag");
      let AnyTouch = __pops.config.Utils.AnyTouch();
      let dragNode = new AnyTouch($drag);
      let smallWidowNode = $drawer.popsElement;
      let smallWidowNormalHeight = domUtils.height(smallWidowNode);
      dragNode.on("pan", (event) => {
        if (event.phase == "move" && event.displacementY > 0) {
          smallWidowNode.style["transition"] = "none";
          smallWidowNode.style["height"] = Math.abs(smallWidowNormalHeight - event.distanceY) + "px";
        }
        if (event.isEnd) {
          smallWidowNode.style["transition"] = "0.2s ease-in";
          if (parseInt(smallWidowNode.style["height"]) > window.innerHeight / 2) {
            smallWidowNode.style["height"] = smallWidowNormalHeight + "px";
          } else {
            $drawer.close();
          }
        }
      });
      let getureBack = new GestureBack({
        hash: this.$key.smallWindow,
        useUrl: true,
        win: _unsafeWindow,
        beforeHistoryBackCallBack: (isUrlChange) => {
          $drawer.close();
        }
      });
      getureBack.enterGestureBackMode();
      domUtils.on($titleText, "click", (event) => {
        utils.preventEvent(event);
        utils.setClip(`『${title}』 - ${url}`);
        Qmsg.success("已复制链接");
      });
      domUtils.on($imageIcon, "click", (event) => {
        utils.preventEvent(event);
        log.info(`查看图片`, imagesList);
        var viewerULNodeHTML = "";
        imagesList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
        });
        var viewerULNode = domUtils.parseHTML(
          `<ul>${viewerULNodeHTML}</ul>`,
          false,
          false
        );
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: (() => {
            let maxZIndex = utils.getMaxZIndex();
            let popsMaxZIndex = __pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
            return utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
          })(),
          hidden: () => {
            viewer.destroy();
          }
        });
        viewer.zoomTo(1);
        viewer.show();
      });
      domUtils.on($closeIcon, "click", (event) => {
        utils.preventEvent(event);
        getureBack.quitGestureBackMode();
      });
      domUtils.on($openBlankIcon, "click", (event) => {
        utils.preventEvent(event);
        window.open(url, "_blank");
      });
      domUtils.on($webSiteIcon, "click", (event) => {
        utils.preventEvent(event);
        $iframe.contentWindow.location.reload();
        this.checkIframeReadyState($iframe);
      });
      this.checkIframeReadyState($iframe);
    },
    /**
     * 对帖子进行处理，实现点击某个区域打开小窗
     * @param forumlist
     */
    async handleForumPost(forumlist) {
      forumlist.forEach(($forum) => {
        if ($forum.getAttribute("data-injection-small-window")) {
          return;
        }
        let title = domUtils.text(
          $forum.querySelector(".mmlist_li_box h2 a")
        );
        if (title == "" || title == null) {
          title = domUtils.text(
            $forum.querySelector(".mmlist_li_box a")
          );
        }
        title = title.trim();
        let url = $forum.querySelector(".mmlist_li_box a").href;
        var imagesList = [];
        $forum.setAttribute("data-injection-small-window", "true");
        $forum.setAttribute("data-injection-small-window-url", url);
        $forum.setAttribute("data-injection-small-window-title", title);
        $forum.querySelectorAll(".comiis_pyqlist_img img").forEach(($img) => {
          imagesList.push($img.getAttribute("src"));
        });
        $forum.querySelectorAll(".comiis_pyqlist_imgs img").forEach(($img) => {
          imagesList.push($img.getAttribute("src"));
        });
        $forum.querySelectorAll(".mmlist_li_box a").forEach(($anchor) => {
          $anchor.removeAttribute("href");
          $anchor.setAttribute("data-href", url);
        });
        let $mmlist_li_box = $forum.querySelector(".mmlist_li_box");
        domUtils.on($mmlist_li_box, "click", function(event) {
          var mouseClickPosX = Number(event.clientX);
          if (document.body.offsetWidth / 2 > mouseClickPosX) {
            window.location.href = url;
          } else {
            MTSmallWindow.showSmallWindow(title, url, imagesList);
          }
        });
      });
    },
    /**
     * 检测 iframe是否加载完毕
     * @param iframe
     */
    checkIframeReadyState(iframe) {
      this.showRefreshIcon();
      let intervalId = setInterval(() => {
        if (iframe.contentWindow) {
          clearInterval(intervalId);
          let iframeDOMUtils = domUtils.createDOMUtils({
            document: iframe.contentWindow.document,
            // @ts-ignore
            window: iframe.contentWindow,
            globalThis: iframe.contentWindow,
            // @ts-ignore
            self: iframe.contentWindow,
            top
          });
          iframeDOMUtils.ready(() => {
            log.success("小窗内容已加载完毕");
            this.hideRefreshIcon();
          });
        }
      }, 400);
    },
    hideRefreshIcon() {
      this.$el.$refreshIcon.style.display = "none";
      this.$el.$webSiteIcon.style.display = "";
    },
    showRefreshIcon() {
      this.$el.$refreshIcon.style.display = "";
      this.$el.$webSiteIcon.style.display = "none";
    }
  };
  const MTGuide = {
    init() {
      DOMUtils.ready(() => {
        Panel.execMenuOnce("mt-guide-showLatestPost", () => {
          this.showLatestPost();
        });
      });
    },
    /**
     * 显示最新帖子
     */
    showLatestPost() {
      log.info(`显示最新帖子`);
      async function getLatestPostForum() {
        let response = await httpx.get("/forum.php?mod=guide&view=hot", {
          fetch: true,
          allowInterceptConfig: false
        });
        if (!response.status) {
          Qmsg.error("获取轮播失败");
          return;
        }
        if (response.data.responseText.indexOf(
          '<script src="/_guard/auto.js"><\/script>'
        ) !== -1) {
          Qmsg.error("获取轮播失败 未知的/_guard/auto.js文件");
          return;
        }
        var doc = DOMUtils.parseHTML(response.data.responseText, true, true);
        var postForumList = doc.querySelectorAll(
          'div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul'
        );
        if (postForumList.length === 0) {
          Qmsg.error("获取轮播失败");
          return;
        } else {
          var result = [];
          postForumList[postForumList.length - 1].querySelectorAll("a").forEach((item) => {
            result.push({
              href: item.getAttribute("href"),
              title: item.getAttribute("title")
            });
          });
        }
        return result;
      }
      getLatestPostForum().then((postInfoList) => {
        if (!postInfoList) {
          return;
        }
        addStyle(
          /*css*/
          `
            div.comiis_mh_kxtxt_owm{
                margin-top: 10px;
            }
            div.comiis_mh_kxtxt_owm li{ 
                height: 30px;
                width: 100%;
                display: flex;
                align-items: center;
            }
            div.comiis_mh_kxtxt_owm span{
                background: #FF705E;
                color: #fff;
                float: left;
                height: 18px;
                line-height: 18px;
                padding: 0 3px;
                margin-top: 2px;
                margin-right: 10px;
                overflow: hidden;
                border-radius: 2px;
                margin-left: 10px;
            }
            div.comiis_mh_kxtxt_owm a{
                display: block;
                font-size: 14px;
                font-weight: 400;
                height: 22px;
                line-height: 22px;
                overflow: hidden;
                min-width: 100px;
                max-width: 80%;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-right: 10px;
            }
            `
        );
        var latestPostForumHTML = "";
        utils.sortListByProperty(
          postInfoList,
          (item) => {
            var forumPostNumMatch = item["href"].match(/thread-(.+?)-/i);
            let forumPostNum = parseInt(
              forumPostNumMatch[forumPostNumMatch.length - 1]
            );
            return forumPostNum;
          },
          true
        );
        log.info("导读内容", postInfoList);
        postInfoList.forEach((item) => {
          latestPostForumHTML += /*html*/
          `
                <li>
                    <span>新帖</span>
                    <a href="${item.href}" title="${item.title}" target="_blank">${item.title}</a>
                </li>`;
        });
        let $comiis_xznlist = document.querySelector(
          ".comiis_forumlist.comiis_xznlist"
        );
        DOMUtils.before(
          $comiis_xznlist,
          `<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${latestPostForumHTML}</ul></div>`
        );
      });
    }
  };
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
  const UIInput = function(text, key, defaultValue, description, changeCallback, placeholder = "", isNumber, isPassword, afterAddToUListCallBack, valueChangeCallback) {
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
  const UISwitch = function(text, key, defaultValue, clickCallBack, description, afterAddToUListCallBack, disabled, valueChangeCallBack) {
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
        let $button = domUtils.createElement(
          "button",
          {
            innerText: filterOption.name
          },
          {
            type: "button"
          }
        );
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
  class RuleView {
    option;
    constructor(option) {
      this.option = option;
    }
    /**
     * 显示视图
     * @param filterCallBack 返回值为false隐藏，true则不隐藏（不处理）
     */
    async showView(filterCallBack) {
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
            enable: this.option?.bottomControls?.add?.enable || true,
            type: "primary",
            text: "添加",
            callback: async (event) => {
              this.showEditView(
                false,
                await this.option.getAddData(),
                $popsConfirm.$shadowRoot
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
            enable: this.option?.bottomControls?.filter?.enable || false,
            type: "default",
            text: "过滤",
            callback: (details, event) => {
              if (typeof this.option?.bottomControls?.filter?.callback === "function") {
                this.option.bottomControls.filter.callback();
              }
              let getAllRuleElement = () => {
                return Array.from(
                  $popsConfirm.$shadowRoot.querySelectorAll(
                    ".rule-view-container .rule-item"
                  )
                );
              };
              let $button = event.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");
              if (domUtils.text($button).includes("取消")) {
                getAllRuleElement().forEach(($el) => {
                  domUtils.show($el, false);
                });
                domUtils.text($button, "过滤");
              } else {
                let ruleFilterView = new RuleFilterView({
                  title: this.option.bottomControls?.filter?.title ?? "过滤规则",
                  filterOption: this.option.bottomControls?.filter?.option || [],
                  execFilterCallBack() {
                    domUtils.text($button, "取消过滤");
                  },
                  getAllRuleInfo: () => {
                    return getAllRuleElement().map(($el) => {
                      return {
                        data: this.parseRuleItemElement($el).data,
                        $el
                      };
                    });
                  }
                });
                ruleFilterView.showView();
              }
            }
          },
          other: {
            enable: this.option?.bottomControls?.clear?.enable || true,
            type: "xiaomi-primary",
            text: `清空所有(${(await this.option.data()).length})`,
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
                    callback: async (popsEvent) => {
                      log.success("清空所有");
                      if (typeof this.option?.bottomControls?.clear?.callback === "function") {
                        this.option.bottomControls.clear.callback();
                      }
                      let data = await this.option.data();
                      if (data.length) {
                        Qmsg.error("清理失败");
                        return;
                      } else {
                        Qmsg.success("清理成功");
                      }
                      await this.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
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
      let allData = await this.option.data();
      let changeButtonText = false;
      for (let index = 0; index < allData.length; index++) {
        let item = allData[index];
        let $ruleItemList = await this.appendRuleItemElement(
          $popsConfirm.$shadowRoot,
          item
        );
        let flag = typeof filterCallBack === "function" ? filterCallBack(item) : true;
        if (!flag) {
          changeButtonText = true;
          $ruleItemList.forEach(($el) => {
            domUtils.hide($el, false);
          });
        }
      }
      if (changeButtonText) {
        let $button = $popsConfirm.$shadowRoot.querySelector(
          ".pops-confirm-btn-cancel span"
        );
        domUtils.text($button, "取消过滤");
      }
    }
    /**
     * 显示编辑视图
     * @param isEdit 是否是编辑状态
     * @param editData 编辑的数据
     * @param $parentShadowRoot （可选）关闭弹窗后对ShadowRoot进行操作
     * @param $editRuleItemElement （可选）关闭弹窗后对规则行进行更新数据
     * @param updateDataCallBack （可选）关闭添加/编辑弹窗的回调（不更新数据）
     * @param submitCallBack （可选）添加/修改提交的回调
     */
    showEditView(isEdit, editData, $parentShadowRoot, $editRuleItemElement, updateDataCallBack, submitCallBack) {
      let dialogCloseCallBack = async (isSubmit) => {
        if (isSubmit) {
          if (typeof submitCallBack === "function") {
            let newData = await this.option.getData(editData);
            submitCallBack(newData);
          }
        } else {
          if (!isEdit) {
            await this.option.deleteData(editData);
          }
          if (typeof updateDataCallBack === "function") {
            let newData = await this.option.getData(editData);
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
          return await this.option.itemControls.edit.getView(data, isEdit);
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
          let result = await this.option.itemControls.edit.onsubmit(
            $form,
            isEdit,
            data
          );
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              $parentShadowRoot && await this.updateRuleItemElement(
                result.data,
                $editRuleItemElement,
                $parentShadowRoot
              );
            } else {
              $parentShadowRoot && await this.appendRuleItemElement(
                $parentShadowRoot,
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
        style: this.option.itemControls.edit.style,
        width: this.option.itemControls.edit.width,
        height: this.option.itemControls.edit.height
      });
      editView.showView();
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
    parseRuleItemElement($ruleElement) {
      let $enable = $ruleElement.querySelector(
        ".rule-controls-enable"
      );
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(
        ".pops-panel-switch__input"
      );
      let $enableSwitchCore = $enable.querySelector(
        ".pops-panel-switch__core"
      );
      let $edit = $ruleElement.querySelector(".rule-controls-edit");
      let $delete = $ruleElement.querySelector(
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
        data: Reflect.get($ruleElement, "data-rule")
      };
    }
    /**
     * 创建一条规则元素
     */
    async createRuleItemElement(data, $shadowRoot) {
      let name = await this.option.getDataItemName(data);
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
      Reflect.set($ruleItem, "data-rule", data);
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const {
        $enable,
        $enableSwitch,
        $enableSwitchCore,
        $enableSwitchInput,
        $delete,
        $edit
      } = this.parseRuleItemElement($ruleItem);
      if (this.option.itemControls.enable.enable) {
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
          await this.option.itemControls.enable.callback(data, isChecked);
        });
        if (await this.option.itemControls.enable.getEnable(data)) {
          $enableSwitch.classList.add(switchCheckedClassName);
        }
      } else {
        $enable.remove();
      }
      if (this.option.itemControls.edit.enable) {
        domUtils.on($edit, "click", (event) => {
          utils.preventEvent(event);
          this.showEditView(true, data, $shadowRoot, $ruleItem, (newData) => {
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
                callback: async (popsEvent) => {
                  log.success("删除数据");
                  let flag = await this.option.itemControls.delete.deleteCallBack(
                    data
                  );
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText($shadowRoot);
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
    async appendRuleItemElement($shadowRoot, data) {
      let { $container } = this.parseViewElement($shadowRoot);
      let $ruleItem = [];
      let iteratorData = Array.isArray(data) ? data : [data];
      for (let index = 0; index < iteratorData.length; index++) {
        let item = iteratorData[index];
        let $item = await this.createRuleItemElement(item, $shadowRoot);
        $container.appendChild($item);
        $ruleItem.push($item);
      }
      await this.updateDeleteAllBtnText($shadowRoot);
      return $ruleItem;
    }
    /**
     * 更新弹窗内容的元素
     */
    async updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      const { $container } = this.parseViewElement($shadowRoot);
      let data = await this.option.data();
      await this.appendRuleItemElement($shadowRoot, data);
      await this.updateDeleteAllBtnText($shadowRoot);
    }
    /**
     * 更新规则元素
     */
    async updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
      let $newRuleItem = await this.createRuleItemElement(data, $shadowRoot);
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
     * @param $shadowRoot
     */
    async updateDeleteAllBtnText($shadowRoot) {
      let data = await this.option.data();
      this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
    }
  }
  const MTOwnBlock = {
    $key: {
      STORAGE_KEY: "mt-own-block-rule"
    },
    $data: {
      isRegister: false
    },
    init() {
      this.registerMenu();
      let lockFn = new utils.LockFunction(() => {
        this.runRule();
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
     * 注册菜单
     */
    registerMenu() {
      if (this.$data.isRegister) {
        return;
      }
      this.$data.isRegister = true;
      ElementUtils.registerLeftMenu({
        name: "我的屏蔽",
        icon: "",
        iconColor: "#000",
        callback: () => {
          this.showView();
        }
      });
    },
    /**
     * 获取模板数据
     */
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        data: {
          userName: "",
          userUID: "",
          userLevel: "",
          postUrl: "",
          postTitle: "",
          postContent: "",
          postPlateName: ""
        }
      };
    },
    /**
     * 显示视图
     */
    showView() {
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
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
        title: "我的屏蔽",
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
              let data_userName_template = UIInput(
                "用户名",
                "userName",
                "",
                "",
                void 0,
                "可正则"
              );
              Reflect.set(
                data_userName_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_userName = panelHandlerComponents.createSectionContainerItem_input(
                data_userName_template
              );
              let data_userUID_template = UIInput(
                "用户UID",
                "userUID",
                "",
                "",
                void 0,
                "可正则"
              );
              Reflect.set(
                data_userUID_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_userUID = panelHandlerComponents.createSectionContainerItem_input(
                data_userUID_template
              );
              let data_userLevel_template = UIInput(
                "用户等级",
                "userLevel",
                "",
                "",
                void 0,
                "可正则"
              );
              Reflect.set(
                data_userLevel_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_userLevel = panelHandlerComponents.createSectionContainerItem_input(
                data_userLevel_template
              );
              let data_postUrl_template = UIInput(
                "帖子url",
                "postUrl",
                "",
                "",
                void 0,
                "可正则"
              );
              Reflect.set(
                data_postUrl_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_postUrl = panelHandlerComponents.createSectionContainerItem_input(
                data_postUrl_template
              );
              let data_postTitle_template = UIInput(
                "帖子标题",
                "postTitle",
                "",
                "",
                void 0,
                "可正则"
              );
              Reflect.set(
                data_postTitle_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_postTitle = panelHandlerComponents.createSectionContainerItem_input(
                data_postTitle_template
              );
              let data_postContent_template = UIInput(
                "帖子内容",
                "postContent",
                "",
                "",
                void 0,
                "可正则"
              );
              Reflect.set(
                data_postContent_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_postContent = panelHandlerComponents.createSectionContainerItem_input(
                data_postContent_template
              );
              let data_postPlateName_template = UIInput(
                "帖子所在的板块名",
                "postPlateName",
                "",
                "",
                void 0,
                "可正则"
              );
              Reflect.set(
                data_postPlateName_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_postPlateName = panelHandlerComponents.createSectionContainerItem_input(
                data_postPlateName_template
              );
              $fragment.appendChild($enable);
              $fragment.appendChild($name);
              $fragment.appendChild($data_userName);
              $fragment.appendChild($data_userUID);
              $fragment.appendChild($data_userLevel);
              $fragment.appendChild($data_postUrl);
              $fragment.appendChild($data_postTitle);
              $fragment.appendChild($data_postContent);
              $fragment.appendChild($data_postPlateName);
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
     * 执行规则
     */
    runRule() {
      let shieldUserList = this.getData();
      function checkIsFilter(postForumInfo) {
        for (const shieldItem of shieldUserList) {
          let shieldOption = shieldItem["data"];
          let findValue = Object.keys(shieldOption).find((keyName) => {
            let value = shieldOption[keyName];
            if (utils.isNotNull(value)) {
              let regExpValue = new RegExp(value, "i");
              let postForumValue = Reflect.get(postForumInfo, keyName);
              if (typeof postForumValue === "string" && utils.isNotNull(postForumValue) && postForumValue.match(regExpValue)) {
                log.info(`屏蔽`, [shieldOption, postForumValue]);
                return true;
              }
            }
            return false;
          });
          if (findValue) {
            return true;
          }
        }
        return false;
      }
      if (MTRouter.isGuide() || MTRouter.isPlate() || MTRouter.isPost()) {
        this.getData();
        document.querySelectorAll(".comiis_forumlist .forumlist_li").forEach((item) => {
          let $topUser = item.querySelector("a.top_user");
          let uidMatch = $topUser.href.match(MTRegExp.uid);
          let postForumInfo = {
            /* 用户名 */
            userName: $topUser.innerText,
            /* 用户UID */
            userUID: uidMatch[uidMatch.length - 1].trim(),
            /* 用户等级 */
            userLevel: item.querySelector("span.top_lev").innerText.replace("Lv.", ""),
            /* 帖子Url */
            postUrl: item.querySelector(".mmlist_li_box a").getAttribute("href") || item.querySelector(".mmlist_li_box a").getAttribute("data-href"),
            /* 帖子标题 */
            postTitle: item.querySelector(".mmlist_li_box h2 a")?.innerText || "",
            /* 帖子内容(缩略) */
            postContent: item.querySelector(
              ".mmlist_li_box .list_body"
            ).innerText,
            /* 帖子板块 */
            postPlateName: (item.querySelector(
              ".forumlist_li_time a.f_d"
            ) || item.querySelector(
              ".comiis_xznalist_bk.cl"
            )).innerText.replace(//g, "").replace(/\s*/g, "").replace(/来自/g, "")
          };
          if (utils.isNull(postForumInfo.postPlateName)) {
            postForumInfo.postPlateName = document.querySelector(
              "#comiis_wx_title_box"
            ).innerText;
          }
          if (checkIsFilter(postForumInfo)) {
            item.remove();
          }
        });
        document.querySelectorAll(".comiis_postlist .comiis_postli").forEach((item) => {
          let $topUser = item.querySelector("a.top_user");
          let uidMatch = $topUser.href.match(MTRegExp.uid);
          let postForumInfo = {
            /* 用户名 */
            userName: $topUser.innerText,
            /* 用户UID */
            userUID: uidMatch[uidMatch.length - 1].trim(),
            /* 用户等级 */
            userLevel: item.querySelector("a.top_lev").innerText.replace("Lv.", ""),
            /* 帖子Url */
            postUrl: void 0,
            /* 帖子标题 */
            postTitle: void 0,
            /* 帖子内容(缩略) */
            postContent: item.querySelector(
              ".comiis_message_table"
            ).innerText,
            /* 帖子板块 */
            postPlateName: void 0
          };
          if (checkIsFilter(postForumInfo)) {
            item.remove();
          }
        });
      }
      if (MTRouter.isMessageList()) {
        this.getData();
        $$(".comiis_pms_box .comiis_pmlist ul li").forEach(
          (item) => {
            let uidMatch = item.querySelector("a.b_b").href.match(MTRegExp.uid);
            let postForumInfo = {
              /* 用户名 */
              userName: item.querySelector("h2").innerText.replace(
                item.querySelector("h2 span").innerText,
                ""
              ).replace(/\s*/, ""),
              /* 用户UID */
              userUID: uidMatch[uidMatch.length - 1].trim(),
              /* 用户等级 */
              userLevel: void 0,
              /* 帖子Url */
              postUrl: item.querySelector("a.b_b").href,
              /* 帖子标题 */
              postTitle: void 0,
              /* 帖子内容(缩略) */
              postContent: item.querySelector("p.f_c").innerText.trim(),
              /* 帖子板块 */
              postPlateName: void 0
            };
            if (checkIsFilter(postForumInfo)) {
              item.remove();
            }
          }
        );
      }
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
  const UITextArea = function(text, key, defaultValue, description, changeCallback, placeholder = "", disabled, valueChangeCallBack) {
    let result = {
      text,
      type: "textarea",
      attributes: {},
      props: {},
      description,
      placeholder,
      disabled,
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        let value = storageApiValue.get(key, defaultValue);
        if (Array.isArray(value)) {
          return value.join("\n");
        }
        return value;
      },
      callback(event, value) {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      }
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
  const MTCommentFilter = {
    $el: {
      isFilterElementHTML: []
    },
    $key: {
      STORAGE_KEY: "mt-post-comment-filter-rule"
    },
    init() {
      this.registerMenu();
      if (MTRouter.isPost()) {
        let allData = this.getData();
        if (!allData.enable) {
          return;
        }
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
      ElementUtils.registerLeftMenu({
        name: "评论过滤器",
        icon: "",
        iconColor: "#ff0019",
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
      $$(".comiis_postlist .comiis_postli").forEach((item) => {
        if (item.querySelector("#comiis_allreplies")) {
          return;
        }
        let $topUser = item.querySelector("a.top_user");
        let uidMatch = $topUser.href.match(MTRegExp.uid);
        let postForumInfo = {
          userName: $topUser?.innerText || "",
          userUID: uidMatch ? uidMatch[uidMatch?.length - 1]?.trim() || "" : "",
          content: item.querySelector(".comiis_message_table")?.innerText?.trim() || "",
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
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
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
          let $enable = panelHandlerComponents.createSectionContainerItem_switch(
            enable_template
          );
          let replyFlag_template = UISwitch(
            "处理回复引用",
            "replyFlag",
            false,
            void 0,
            "移除引用"
          );
          Reflect.set(
            replyFlag_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(data)
          );
          let $replyFlag = panelHandlerComponents.createSectionContainerItem_switch(
            replyFlag_template
          );
          let avatarFlag_template = UISwitch("处理作者评论", "avatarFlag", false);
          Reflect.set(
            avatarFlag_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(data)
          );
          let $avatarFlag = panelHandlerComponents.createSectionContainerItem_switch(
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
          let $viewthreadFlag = panelHandlerComponents.createSectionContainerItem_switch(
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
          let $minLength = panelHandlerComponents.createSectionContainerItem_input(
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
          let $keywordLength = panelHandlerComponents.createSectionContainerItem_input(
            keywordLength
          );
          let keywords_template = UITextArea(
            "评论关键字",
            "keywords",
            "",
            "多个关键字换行分割"
          );
          Reflect.set(
            keywords_template.props,
            PROPS_STORAGE_API,
            generateStorageApi(data)
          );
          let $keywords = panelHandlerComponents.createSectionContainerItem_textarea(
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
          let $userBlackList = panelHandlerComponents.createSectionContainerItem_textarea(
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
          let $userWhiteList = panelHandlerComponents.createSectionContainerItem_textarea(
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
              console.log(this.$el.isFilterElementHTML);
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
                btn: {
                  ok: {
                    type: "default",
                    text: "关闭"
                  }
                },
                width: window.innerWidth > 500 ? "500px" : "88vw",
                height: window.innerHeight > 500 ? "500px" : "80vh"
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
			.comiis_postli_top h2,
			.comiis_postli_top .top_lev{
				height: auto;
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
      ElementUtils.registerLeftMenu({
        name: "商品上架提醒",
        icon: "",
        iconColor: "#2376b7",
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
            fetch: true,
            allowInterceptConfig: false
          }
        );
        if (!response.status) {
          Qmsg.error("【积分商城】获取数据失败");
          return;
        }
        let productInfoList = [];
        let doc = domUtils.parseHTML(response.data.responseText, true, true);
        doc.querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(($taskList) => {
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
              $taskList.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi, "") || "0"
            )
          });
        });
        return productInfoList;
      }
      if (MTRouter.isPointsMall()) {
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
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
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
              let $productName = panelHandlerComponents.createSectionContainerItem_input(
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
  const MTCustomizeUserLabels = {
    $key: {
      STORAGE_KEY: "mt-customizeUserLabels-rule"
    },
    init() {
      this.registerMenu();
      if (MTRouter.isPage() || MTRouter.isGuide() || MTRouter.isPlate() || MTRouter.isPost() || MTRouter.isSearch() || MTRouter.isSpace()) {
        let allData = this.getData();
        if (!allData.length) {
          return;
        }
        let lockFn = new utils.LockFunction(() => {
          this.runRule(allData);
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
      ElementUtils.registerLeftMenu({
        name: "自定义用户标签",
        icon: "",
        iconColor: "#c70ea6",
        callback: () => {
          this.showView();
        }
      });
    },
    /**
     * 显示视图
     */
    showView() {
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
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
        title: "自定义用户标签",
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
              let userUID_template = UIInput(
                "用户UID",
                "userUID",
                "",
                "",
                void 0,
                "必填，可正则，注意转义"
              );
              Reflect.set(
                userUID_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $userUID = panelHandlerComponents.createSectionContainerItem_input(
                userUID_template
              );
              let labelName_template = UIInput(
                "标签名",
                "labelName",
                "",
                "",
                void 0,
                "必填"
              );
              Reflect.set(
                labelName_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $labelName = panelHandlerComponents.createSectionContainerItem_input(
                labelName_template
              );
              let labelColor_template = UIInput(
                "标签颜色",
                "labelColor",
                "",
                ""
              );
              Reflect.set(
                labelColor_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $labelColor = panelHandlerComponents.createSectionContainerItem_input(
                labelColor_template
              );
              let $labelColor_input = $labelColor.querySelector("input");
              $labelColor.querySelector(".pops-panel-input__suffix")?.remove();
              $labelColor_input.setAttribute("type", "color");
              domUtils.css($labelColor_input, {
                margin: "unset",
                padding: "unset",
                width: "80px"
              });
              let labelStyle_template = UIInput(
                "标签CSS",
                "labelStyle",
                "",
                ""
              );
              Reflect.set(
                labelStyle_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $labelStyle = panelHandlerComponents.createSectionContainerItem_input(
                labelStyle_template
              );
              let labelClickEvent_template = UITextArea(
                "标签点击事件",
                "labelClickEvent",
                "",
                ""
              );
              Reflect.set(
                labelClickEvent_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $labelClickEvent = panelHandlerComponents.createSectionContainerItem_textarea(
                labelClickEvent_template
              );
              $fragment.append(
                $enable,
                $name,
                $userUID,
                $labelName,
                $labelColor,
                $labelStyle,
                $labelClickEvent
              );
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
              if (data.userUID.trim() === "") {
                Qmsg.error("用户UID不能为空");
                return {
                  success: false,
                  data
                };
              }
              if (data.labelName.trim() === "") {
                Qmsg.error("标签名不能为空");
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
            },
            style: (
              /*css*/
              `
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
                    `
            )
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
     * 执行规则
     */
    runRule(ruleDataList) {
      let forumList = utils.getNodeListValue(
        ElementUtils.comiisForumList(),
        ElementUtils.comiisPostli(),
        ElementUtils.comiisMmlist()
      );
      if (!forumList.length) {
        return;
      }
      forumList.forEach(($post) => {
        if ($post.hasAttribute("data-custom-label")) {
          return;
        }
        $post.setAttribute("data-custom-label", "true");
        let mt_uid_array = Array.from($post.querySelectorAll("a")).map((item) => {
          let url = item.href;
          let uid = url.match(MTRegExp.uid);
          if (uid) {
            return uid[uid.length - 1];
          }
        }).filter((item) => item != null);
        if (mt_uid_array.length) {
          let mt_uid = mt_uid_array[0];
          let ownLabelList = ruleDataList.filter(
            (item) => item.enable && mt_uid.match(new RegExp(item.userUID))
          );
          if (!ownLabelList.length) {
            return;
          }
          let $label = document.createElement("a");
          let $topLev = $post.querySelector(".top_lev");
          ownLabelList.forEach((labelOption) => {
            $label.className = $topLev.className;
            $label.classList.add("gm-custom-label");
            $label.style.cssText = `
                    background: ${labelOption.labelColor} !important;${labelOption.labelStyle || ""}`;
            $label.innerHTML = labelOption.labelName;
            domUtils.on($label, "click", async (event) => {
              utils.preventEvent(event);
              if (utils.isNotNull(labelOption.labelClickEvent)) {
                _unsafeWindow.eval(labelOption.labelClickEvent);
              }
            });
            $topLev.parentElement.append($label);
          });
        }
      });
    },
    /**
     * 获取模板数据
     */
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        userUID: "",
        labelName: "",
        labelColor: "",
        labelStyle: "",
        labelClickEvent: ""
      };
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
  const optimizationCSS = '.f_c,\r\n.f_c a,\r\n.ntc_body {\r\n	color: #000 !important;\r\n}\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n	color: #cfcfcf;\r\n}\r\n#needsubject::placeholder {\r\n	font-weight: 700;\r\n}\r\n#postform #comiis_mh_sub {\r\n	height: 60px;\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n#postform #comiis_post_tab {\r\n	display: inherit;\r\n	width: 100%;\r\n}\r\n#postform .comiis_sendbtn {\r\n	padding: 0 12px;\r\n	display: flex !important;\r\n	-webkit-box-align: center;\r\n	-moz-box-align: center;\r\n	align-items: center;\r\n}\r\n#postform .f_f {\r\n	color: #fff !important;\r\n}\r\n#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:hover,\r\n#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:link,\r\n#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:visited {\r\n	color: #333 !important;\r\n}\r\n#postform .comiis_post_from .comiis_post_ico.comiis_minipost_icot {\r\n	position: fixed;\r\n	display: inline-table;\r\n	z-index: 90;\r\n	left: 0;\r\n	right: 0;\r\n	bottom: 0;\r\n	width: 100%;\r\n	overflow: hidden;\r\n	padding: 0;\r\n}\r\n#postform .comiis_post_from #comiis_post_tab .comiis_bqbox {\r\n	height: 200px;\r\n}\r\n#postform .comiis_post_from #comiis_post_tab .comiis_smiley_box {\r\n	height: 150px;\r\n}\r\n#postform\r\n	.comiis_post_from\r\n	#comiis_post_tab\r\n	.comiis_input_style\r\n	.comiis_post_urlico {\r\n	overflow-y: auto;\r\n	height: 110px;\r\n}\r\n#postform\r\n	.comiis_post_from\r\n	#comiis_post_tab\r\n	.comiis_smiley_box\r\n	.comiis_optimization {\r\n	display: block;\r\n	overflow-y: auto;\r\n	height: 100%;\r\n}\r\n#postform #comiis_post_tab .comiis_input_style .comiis_xifont {\r\n	width: -webkit-fill-available;\r\n	width: -moz-available;\r\n}\r\n#postform #comiis_post_tab .comiis_input_style .comiis_xifont i.comiis_font {\r\n	font-size: 16px;\r\n	line-height: inherit;\r\n	padding-top: 0;\r\n}\r\n#postform #comiis_post_tab .comiis_input_style .styli_h10 {\r\n	display: none;\r\n}\r\n.gm_plugin_chartbed .comiis_chartbed_hello,\r\n.gm_plugin_chartbed .comiis_chartbed_history,\r\n.gm_plugin_chartbed .comiis_chartbed_kggzs,\r\n.gm_plugin_chartbed .comiis_chartbed_luntan,\r\n.gm_plugin_chartbed .comiis_chartbed_mt,\r\n.gm_plugin_chartbed .comiis_chartbed_z4a {\r\n	height: 140px;\r\n	overflow-y: auto;\r\n	flex-direction: column;\r\n}\r\n#comiis_pictitle_key {\r\n	display: -webkit-box;\r\n	top: 0;\r\n	left: 0;\r\n	height: 42px;\r\n	line-height: 42px;\r\n	overflow: hidden;\r\n	overflow-x: auto;\r\n	background: #f8f8f8;\r\n}\r\n#comiis_pictitle_key a {\r\n	color: #333 !important;\r\n	padding: 0 10px;\r\n}\r\n#comiis_mh_sub {\r\n	height: auto !important;\r\n}\r\n#comiis_mh_sub .swiper-wrapper.comiis_post_ico {\r\n	flex-flow: wrap;\r\n}\r\n#comiis_mh_sub a {\r\n	margin: 5px 0;\r\n}\r\n#comiis_post_tab .comiis_over_box {\r\n	max-height: 225px;\r\n}\r\n@media screen and (max-width: 350px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 14.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 350px) and (max-width: 400px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 12.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 400px) and (max-width: 450px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 11%;\r\n	}\r\n}\r\n@media screen and (min-width: 450px) and (max-width: 500px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 10%;\r\n	}\r\n}\r\n@media screen and (min-width: 500px) and (max-width: 550px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 9.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 550px) and (max-width: 600px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 9%;\r\n	}\r\n}\r\n@media screen and (min-width: 600px) and (max-width: 650px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 8.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 650px) and (max-width: 700px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 8%;\r\n	}\r\n}\r\n@media screen and (min-width: 700px) and (max-width: 750px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 7.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 750px) and (max-width: 800px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 7%;\r\n	}\r\n}\r\n@media screen and (min-width: 800px) and (max-width: 850px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 6.5%;\r\n	}\r\n}\r\n@media screen and (min-width: 850px) and (max-width: 1200px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 6%;\r\n	}\r\n}\r\n@media screen and (min-width: 1200px) {\r\n	.comiis_bqbox .bqbox_c li {\r\n		width: 4.5%;\r\n	}\r\n}\r\n\r\n#comiis_head .header_y {\r\n	display: flex;\r\n	align-content: center;\r\n	align-items: center;\r\n	justify-content: flex-end;\r\n	height: 100%;\r\n}\r\n#comiis_head .header_y input {\r\n	border: transparent;\r\n	background: 0 0;\r\n	text-align: center;\r\n	margin: 0 5px;\r\n}\r\n#comiis_head .header_y input[value="删除"] {\r\n	color: #d00;\r\n}\r\n#comiis_head .header_y input[value="保存"] {\r\n	color: #b0ff6a;\r\n}\r\n#comiis_head .header_y input[value="保存草稿"] {\r\n	color: #f90;\r\n}\r\n#comiis_head .header_y input[value="发表"] {\r\n	color: #b0ff6a;\r\n}\r\n#comiis_head .header_y input[value="回复"] {\r\n	color: #b0ff6a;\r\n}\r\n#comiis_post_tab {\r\n	color: #000;\r\n}\r\n.gm_plugin_chartbed .delImg a,\r\n.gm_plugin_chartbed .p_img a {\r\n	padding: 0;\r\n}\r\n.gm_plugin_chartbed .delImg a i {\r\n	line-height: inherit;\r\n}\r\n#filedata,\r\n#filedata_hello,\r\n#filedata_kggzs,\r\n#filedata_mt {\r\n	display: none;\r\n}\r\n\r\n#comiis_mh_sub {\r\n	height: 40px;\r\n}\r\n#imglist .del a {\r\n	padding: 0;\r\n}\r\n.comiis_post_from.mt15 {\r\n	margin-top: unset !important;\r\n}\r\n';
  const MTSmiliesDict = () => {
    return {
      "[呵呵]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif",
      "[撇嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif",
      "[色]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif",
      "[发呆]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif",
      "[得意]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif",
      "[流泪]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif",
      "[害羞]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif",
      "[闭嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif",
      "[睡]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif",
      "[大哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif",
      "[尴尬]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif",
      "[发怒]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif",
      "[调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif",
      "[呲牙]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif",
      "[惊讶]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif",
      "[难过]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif",
      "[酷]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif",
      "[冷汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif",
      "[抓狂]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif",
      "[吐]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif",
      "[偷笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif",
      "[可爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif",
      "[白眼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif",
      "[傲慢]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif",
      "[饥饿]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif",
      "[困]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif",
      "[惊恐]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif",
      "[流汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif",
      "[憨笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif",
      "[装逼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif",
      "[奋斗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif",
      "[咒骂]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif",
      "[疑问]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif",
      "[嘘]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif",
      "[晕]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif",
      "[折磨]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif",
      "[衰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif",
      "[骷髅]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif",
      "[敲打]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif",
      "[再见]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif",
      "[擦汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif",
      "[抠鼻]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif",
      "[鼓掌]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif",
      "[糗大了]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif",
      "[坏笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif",
      "[左哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif",
      "[右哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif",
      "[哈欠]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif",
      "[鄙视]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif",
      "[委屈]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif",
      "[快哭了]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif",
      "[阴脸]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif",
      "[亲亲]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif",
      "[吓]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif",
      "[可怜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif",
      "[眨眼睛]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif",
      "[笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif",
      "[dogeQQ]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif",
      "[泪奔]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif",
      "[无奈]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif",
      "[托腮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif",
      "[卖萌]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png",
      "[斜眼笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif",
      "[喷血]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif",
      "[惊喜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif",
      "[骚扰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif",
      "[小纠结]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif",
      "[我最美]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif",
      "[菜刀]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif",
      "[西瓜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif",
      "[啤酒]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif",
      "[篮球]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif",
      "[乒乓]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif",
      "[咖啡]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif",
      "[饭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif",
      "[猪]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif",
      "[玫瑰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif",
      "[凋谢]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif",
      "[示爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif",
      "[爱心]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif",
      "[心碎]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif",
      "[蛋糕]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif",
      "[闪电]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif",
      "[炸弹]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif",
      "[刀]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif",
      "[足球]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif",
      "[瓢虫]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif",
      "[便便]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif",
      "[月亮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif",
      "[太阳]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif",
      "[礼物]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif",
      "[抱抱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif",
      "[喝彩]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif",
      "[祈祷]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif",
      "[棒棒糖]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif",
      "[药]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif",
      "[赞]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif",
      "[差劲]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif",
      "[握手]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif",
      "[胜利]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif",
      "[抱拳]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif",
      "[勾引]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif",
      "[拳头]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif",
      // "[差劲]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq104.gif",
      "[爱你]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif",
      "[NO]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif",
      "[OK]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif",
      "[#呵呵]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png",
      "[#滑稽]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png",
      "[#吐舌]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png",
      "[#哈哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png",
      "[#啊]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png",
      "[#酷]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png",
      "[#怒]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png",
      "[#开心]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png",
      "[#汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png",
      "[#泪]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png",
      "[#黑线]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png",
      "[#鄙视]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png",
      "[#不高兴]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png",
      "[#真棒]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png",
      "[#钱]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png",
      "[#疑问]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png",
      "[#阴险]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png",
      "[#吐]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png",
      "[#咦]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png",
      "[#委屈]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png",
      "[#花心]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png",
      "[#呼～]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png",
      "[#激动]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png",
      "[#冷]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png",
      "[#可爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png",
      "[#What？]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png",
      "[#勉强]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png",
      "[#狂汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png",
      "[#酸爽]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png",
      "[#乖]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png",
      "[#雅美蝶]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png",
      "[#睡觉]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png",
      "[#惊哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png",
      "[#哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png",
      "[#笑尿]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png",
      "[#惊讶]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png",
      "[#小乖]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png",
      "[#喷]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png",
      "[#抠鼻]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png",
      "[#捂嘴笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png",
      "[#你懂的]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png",
      "[#犀利]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png",
      "[#小红脸]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png",
      "[#懒得理]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png",
      "[#爱心]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png",
      "[#心碎]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png",
      "[#玫瑰]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png",
      "[#礼物]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png",
      "[#彩虹]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png",
      "[#太阳]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png",
      "[#月亮]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png",
      "[#钱币]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png",
      "[#咖啡]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png",
      "[#蛋糕]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png",
      "[#大拇指]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png",
      "[#胜利]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png",
      "[#爱你]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png",
      "[#OK]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png",
      "[#弱]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png",
      "[#沙发]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png",
      "[#纸巾]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png",
      "[#香蕉]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png",
      "[#便便]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png",
      "[#药丸]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png",
      "[#红领巾]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png",
      "[#蜡烛]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png",
      "[#三道杠]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png",
      "[#音乐]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png",
      "[#灯泡]": "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png",
      "[doge]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png",
      "[doge思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png",
      "[doge再见]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png",
      "[doge生气]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png",
      "[doge气哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png",
      "[doge笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png",
      "[doge调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png",
      "[doge啊哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png",
      "[doge原谅TA]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png",
      "[miao]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png",
      "[miao思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png",
      "[miao拜拜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png",
      "[miao生气]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png",
      "[miao气哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png",
      "[二哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png",
      "[摊手]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png",
      "[w并不简单]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png",
      "[w滑稽]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png",
      "[w色]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png",
      "[w爱你]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png",
      "[w拜拜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png",
      "[w悲伤]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png",
      "[w鄙视]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png",
      "[w馋嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png",
      "[w冷汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png",
      "[w打哈欠]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png",
      "[w打脸]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png",
      "[w敲打]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png",
      "[w生病]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png",
      "[w闭嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png",
      "[w鼓掌]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png",
      "[w哈哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png",
      "[w害羞]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png",
      "[w呵呵]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png",
      "[w黑线]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png",
      "[w哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png",
      "[w调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png",
      "[w可爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png",
      "[w可怜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png",
      "[w酷]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png",
      "[w困]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png",
      "[w懒得理你]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png",
      "[w流泪]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png",
      "[w怒]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png",
      "[w怒骂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png",
      "[w钱]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png",
      "[w亲亲]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png",
      "[w傻眼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png",
      "[w便秘]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png",
      "[w失望]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png",
      "[w衰]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png",
      "[w睡觉]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png",
      "[w思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png",
      "[w开心]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png",
      "[w色舔]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png",
      "[w偷笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png",
      "[w吐]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png",
      "[w抠鼻]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png",
      "[w委屈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png",
      "[w笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png",
      "[w嘻嘻]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png",
      "[w嘘]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png",
      "[w阴险]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png",
      "[w疑问]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png",
      "[w抓狂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png",
      "[w晕]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png",
      "[w右哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png",
      "[w左哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png",
      "[w肥皂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png",
      "[w奥特曼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png",
      "[w草泥马]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png",
      "[w兔子]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png",
      "[w熊猫]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png",
      "[w猪头]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png",
      "[w→_→]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png",
      "[w给力]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png",
      "[w囧]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png",
      "[w萌]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png",
      "[w神马]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png",
      "[w威武]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"
    };
  };
  const MTEditorPreview = {
    /**
     * 内容转换
     */
    parseText(text) {
      const smiliesDictionaries = MTSmiliesDict();
      let attachimgmatch = text.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/g);
      if (attachimgmatch) {
        attachimgmatch.forEach((item) => {
          let aimgidMatch = item.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/);
          let aimg_id = aimgidMatch ? aimgidMatch[aimgidMatch.length - 1] : "";
          let imgtitle = domUtils.attr(`#aimg_${aimg_id}`, "title");
          let imgsrc = domUtils.attr(`#aimg_${aimg_id}`, "src");
          if (!imgsrc) {
            imgtitle = "该图片不存在";
          }
          text = text.replace(
            item,
            `<span class="comiis_postimg vm"><img loading="lazy" id="aimg_${aimg_id}" src="${imgsrc}" alt="${imgtitle}" title="${imgtitle}"></span>`
          );
        });
      }
      let code = text.match(/\[code\]([\s\S]*?)\[\/code\]/g);
      if (code) {
        code.forEach((item) => {
          let match_content = item.match(/\[code\]([\s\S]*?)\[\/code\]/);
          let contentAll = match_content ? match_content[match_content.length - 1] : "";
          let content = "";
          let brSplit = contentAll.split("\n");
          if (brSplit.length == 1) {
            content = `<li>${contentAll}</li>`;
          } else {
            Array.from(brSplit).forEach((item2, index) => {
              if (index == brSplit.length - 1) {
                content = `${content}<li>${item2}</li>`;
              } else {
                content = `${content}<li>${item2}<br></li>`;
              }
            });
          }
          text = text.replace(
            item,
            `
                <div class="comiis_blockcode comiis_bodybg b_ok f_b"><div class="bg_f b_l"><ol>${content}</ol></div></div>`
          );
        });
      }
      let url = text.match(/\[url\=[\s\S]*?\]([\s\S]*?)\[\/url\]/g);
      if (url) {
        url.forEach((item) => {
          let urlMatch = item.match(/\[url=([\s\S]*?)\][\s\S]*\[\/url\]/);
          let urlNameMatch = item.match(/\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/);
          let _url_ = urlMatch ? urlMatch[urlMatch.length - 1] : "";
          let _url_name_ = urlNameMatch ? urlNameMatch[urlNameMatch.length - 1] : "";
          text = text.replace(
            item,
            `<a href="${_url_}" target="_blank">${_url_name_}</a>`
          );
        });
      }
      let color = text.match(/\[color\=[\s\S]*?\]([\s\S]*?)\[\/color\]/g);
      if (color) {
        color.forEach((item) => {
          let colorValueMatch = item.match(
            /\[color=([\s\S]*?)\][\s\S]*\[\/color\]/
          );
          let colorTextMatch = item.match(
            /\[color=[\s\S]*?\]([\s\S]*?)\[\/color\]/
          );
          let colorValue = colorValueMatch ? colorValueMatch[colorValueMatch.length - 1] : "";
          let colorText = colorTextMatch ? colorTextMatch[colorTextMatch.length - 1] : "";
          text = text.replace(
            item,
            `<font color="${colorValue}">${colorText}</font>`
          );
        });
      }
      let size = text.match(/\[size\=[\s\S]*?\]([\s\S]*?)\[\/size\]/g);
      if (size) {
        size.forEach((item) => {
          let sizeValueMatch = item.match(/\[size=([\s\S]*?)\][\s\S]*\[\/size\]/);
          let sizeTextMatch = item.match(/\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/);
          let sizeValue = sizeValueMatch ? sizeValueMatch[sizeValueMatch.length - 1] : "";
          let sizeText = sizeTextMatch ? sizeTextMatch[sizeTextMatch.length - 1] : "";
          text = text.replace(
            item,
            `<font size="${sizeValue}">${sizeText}</font>`
          );
        });
      }
      let img = text.match(/\[img(|\=[\s\S]+?)\]([\s\S]*?)\[\/img\]/g);
      if (img) {
        img.forEach((item) => {
          let widthInfo = null;
          let heightInfo = null;
          let img_size_match = item.match(/\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/);
          if (img_size_match) {
            img_size_match = img_size_match[img_size_match.length - 1].split(",");
            widthInfo = img_size_match[0];
            heightInfo = img_size_match[1];
          }
          widthInfo = widthInfo ? widthInfo : "";
          heightInfo = heightInfo ? heightInfo : "";
          let match_content = item.match(
            /\[img\]([\s\S]*?)\[\/img\]|\[img=[\s\S]*?\]([\s\S]*?)\[\/img\]/
          );
          let content = "";
          if (match_content) {
            if (match_content[match_content.length - 1] == null) {
              content = match_content[match_content.length - 2];
            } else {
              content = match_content[match_content.length - 1];
            }
          }
          text = text.replace(
            item,
            `<img loading="lazy" src="${content}" border="0" alt="" width="${widthInfo}" height="${heightInfo}" crossoriginNew="anonymous">`
          );
        });
      }
      let hide = text.match(/\[hide\]([\s\S]*?)\[\/hide\]/g);
      if (hide) {
        hide.forEach((item) => {
          let match_content = item.match(/\[hide\]([\s\S]*?)\[\/hide\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(
            item,
            `<div class="comiis_quote bg_h f_c"><h2 class="f_a">本帖隐藏的内容: </h2>${content}</div>`
          );
        });
      }
      let hide2 = text.match(/\[hide=[\s\S]*?\]([\s\S]*?)\[\/hide\]/g);
      if (hide2) {
        hide2.forEach((item) => {
          let match_content = item.match(
            /\[hide=([\s\S]*?)\]([\s\S]*?)\[\/hide\]/
          );
          let other_info = match_content ? match_content[match_content.length - 2] : "";
          other_info = other_info.split(",");
          let integral_big_can_see = other_info.length == 2 ? other_info[1] : "";
          text = text.replace(
            item,
            `<div class="comiis_quote bg_h f_c">以下内容需要积分高于 ${integral_big_can_see} 才可浏览</div>`
          );
        });
      }
      let quote = text.match(/\[quote\]([\s\S]*?)\[\/quote\]/g);
      if (quote) {
        quote.forEach((item) => {
          let match_content = item.match(/\[quote\]([\s\S]*?)\[\/quote\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(
            item,
            `<div class="comiis_quote bg_h b_dashed f_c"><blockquote><font>回复</font> ${content}</blockquote></div>`
          );
        });
      }
      let free = text.match(/\[free\]([\s\S]*?)\[\/free\]/g);
      if (free) {
        free.forEach((item) => {
          let match_content = item.match(/\[free\]([\s\S]*?)\[\/free\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(
            item,
            `<div class="comiis_quote bg_h f_c"><blockquote>${content}</blockquote></div>`
          );
        });
      }
      let strong = text.match(/\[b\]([\s\S]*?)\[\/b\]/g);
      if (strong) {
        strong.forEach((item) => {
          let match_content = item.match(/\[b\]([\s\S]*?)\[\/b\]/i);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(item, `<strong>${content}</strong>`);
        });
      }
      let xhx = text.match(/\[u\]([\s\S]*?)\[\/u\]/g);
      if (xhx) {
        xhx.forEach((item) => {
          let match_content = item.match(/\[u\]([\s\S]*?)\[\/u\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(item, `<u>${content}</u>`);
        });
      }
      let qx = text.match(/\[i\]([\s\S]*?)\[\/i\]/g);
      if (qx) {
        qx.forEach((item) => {
          let match_content = item.match(/\[i\]([\s\S]*?)\[\/i\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(item, `<i>${content}</i>`);
        });
      }
      let strike = text.match(/\[s\]([\s\S]*?)\[\/s\]/g);
      if (strike) {
        strike.forEach((item) => {
          let match_content = item.match(/\[s\]([\s\S]*?)\[\/s\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(item, `<strike>${content}</strike>`);
        });
      }
      let smilies = text.match(/\[([\s\S]+?)\]/g);
      if (smilies) {
        smilies.forEach((item) => {
          let smiliesMatchSrc = smiliesDictionaries[item];
          if (smiliesMatchSrc) {
            text = text.replace(
              item,
              `<img loading="lazy" src="${smiliesMatchSrc}" border="0" alt="" smilieid="">`
            );
          }
        });
      }
      let media = text.match(/\[media=[\s\S]+?\][\s\S]+?\[\/media\]/g);
      if (media) {
        media.forEach((item) => {
          let match_content = item.match(
            /\[media=[\s\S]*?\]([\s\S]*?)\[\/media\]/
          );
          let content = match_content ? match_content[match_content.length - 1] : "";
          if (content) {
            text = text.replace(
              item,
              `<ignore_js_op><span><iframe src="${content}" border="0" scrolling="no" framespacing="0" allowfullscreen="true" style="max-width: 100%" width="100%" height="auto" frameborder="no"></iframe></span></ignore_js_op>`
            );
          }
        });
      }
      let email = text.match(/\[email=[\s\S]+?\][\s\S]+?\[\/email\]/g);
      if (email) {
        email.forEach((item) => {
          let email_match = item.match(/\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/);
          let content_match = item.match(
            /\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/
          );
          let _email_ = email_match.length ? (
            // @ts-ignore
            email_match[email_match.length - 1]
          ) : "";
          let _content_ = content_match.length ? (
            // @ts-ignore
            content_match[content_match.length - 1]
          ) : "";
          if (_email_ || _content_) {
            text = text.replace(
              item,
              `<a href="mailto:${_email_}">${_content_}</a>`
            );
          }
        });
      }
      let align = text.match(/\[align=[\s\S]+?\][\s\S]+?\[\/align\]/g);
      if (align) {
        align.forEach((item) => {
          let align_match = item.match(/\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/);
          let content_match = item.match(
            /\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/
          );
          let _align_ = align_match.length ? (
            // @ts-ignore
            align_match[align_match.length - 1]
          ) : "";
          let _content_ = content_match.length ? (
            // @ts-ignore
            content_match[content_match.length - 1]
          ) : "";
          if (_align_ || _content_) {
            text = text.replace(
              item,
              `<div align="${_align_}">${_content_}</div>`
            );
          }
        });
      }
      let qq = text.match(/\[qq\][\s\S]*?\[\/qq\]/g);
      if (qq) {
        qq.forEach((item) => {
          let match_content = item.match(/\[qq\]([\s\S]*?)\[\/qq\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(
            item,
            `<a href="http://wpa.qq.com/msgrd?v=3&uin=${content}&site=[Discuz!]&from=discuz&menu=yes" target="_blank"><img loading="lazy" src="static/image/common/qq_big.gif" border="0"></a>`
          );
        });
      }
      let td = text.match(/\[td\][\s\S]+?\[\/td\]/g);
      if (td) {
        td.forEach((item) => {
          let match_content = item.match(/\[td\]([\s\S]*?)\[\/td\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(item, `<td>${content}</td>`);
        });
      }
      let tr = text.match(/\[tr\][\s\S]+?\[\/tr\]/g);
      if (tr) {
        tr.forEach((item) => {
          let match_content = item.match(/\[tr\]([\s\S]*?)\[\/tr\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          text = text.replace(item, `<tr>${content}</tr>`);
        });
      }
      let table = text.match(/\[table\][\s\S]+?\[\/table\]/g);
      if (table) {
        table.forEach((item) => {
          let match_content = item.match(/\[table\]([\s\S]*?)\[\/table\]/);
          let content = match_content ? match_content[match_content.length - 1] : "";
          content = content.replace(/\n/g, "");
          text = text.replace(item, `<table>${content}</table>`);
        });
      }
      let list = text.match(/\[list=[\s\S]+?\][\s\S]+?\[\/list\]/g);
      if (list) {
        list.forEach((item) => {
          let list_model_match = item.match(
            /\[list=([\s\S]*?)\][\s\S]*?\[\/list\]/
          );
          let list_content_match = item.match(
            /\[list=[\s\S]*?\]([\s\S]*?)\[\/list\]/
          );
          let list_model = list_model_match ? list_model_match[list_model_match.length - 1] : "";
          let list_type = "";
          if (list_model === "a") {
            list_type = "litype_2";
          } else if (list_model === "A") {
            list_type = "litype_3";
          } else if (list_model.length === 1 && list_model.match(/[0-9]{1}/)) {
            list_type = "litype_1";
          }
          let content = list_content_match ? list_content_match[list_content_match.length - 1] : "";
          let li_split = content.split("[*]");
          if (li_split.length > 1) {
            let newContent = "";
            if (li_split[0].replace(/[\s]*/, "") == "") {
              li_split = li_split.slice(1);
            }
            Array.from(li_split).forEach((item2) => {
              newContent = `${newContent}<li>${item2}</li>`;
            });
            content = newContent;
          }
          content = content.replace(/\n/g, "");
          text = text.replace(
            item,
            `<ul type="${list_model}" class="${list_type}">${content}</ul>`
          );
        });
      }
      return text;
    },
    /**
     * 投票的内容转换
     */
    parseVoteText() {
      let chooseColor = [
        "rgb(233, 39, 37)",
        "rgb(242, 123, 33)",
        "rgb(242, 166, 31)",
        "rgb(90, 175, 74)",
        "rgb(66, 196, 245)",
        "rgb(0, 153, 204)",
        "rgb(51, 101, 174)",
        "rgb(42, 53, 145)",
        "rgb(89, 45, 142)",
        "rgb(219, 49, 145)",
        "rgb(233, 39, 37)",
        "rgb(242, 123, 33)",
        "rgb(242, 166, 31)",
        "rgb(90, 175, 74)",
        "rgb(66, 196, 245)",
        "rgb(0, 153, 204)",
        "rgb(51, 101, 174)",
        "rgb(42, 53, 145)",
        "rgb(89, 45, 142)",
        "rgb(219, 49, 145)"
      ];
      let chooseContent = $$(
        ".comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']"
      );
      let maxchoices = parseInt(domUtils.val("input#maxchoices"));
      maxchoices = isNaN(maxchoices) ? 0 : maxchoices;
      maxchoices = maxchoices > 0 ? maxchoices : 0;
      maxchoices = maxchoices > chooseContent.length ? chooseContent.length : maxchoices;
      let polldatas = parseInt(domUtils.val("input#polldatas"));
      polldatas = isNaN(polldatas) ? 0 : polldatas;
      _unsafeWindow.$("input#visibilitypoll").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close") ? false : true;
      let overt = _unsafeWindow.$("input#overt").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close") ? false : true;
      let html = "";
      let choosehtml = "";
      chooseContent.forEach((item, index) => {
        if (index >= 20) {
          return;
        }
        choosehtml = choosehtml + `
                    <li class="kmnop">
                        <input type="${maxchoices > 1 ? "checkbox" : "radio"}">
                        <label><i class="comiis_font f_d"></i>${item.value}</label>
                    </li>
                    <li class="poll_ok cl">
                        <span class="bg_b">
                            <em style="width:2%;background-color:${chooseColor[index]}"></em>
                        </span>
                        <em style="color:${chooseColor[index]}">0% (0)</em>
                    </li>`;
      });
      html = `
                    <div class="comiis_poll cl comiis_input_style b_t postforum_vote">
                            <div class="comiis_poll_top">
                                <i class="comiis_font bg_a f_f"></i>
                                <h2>${maxchoices > 1 ? '多选投票<em class="f_c"> 最多可选 ' + maxchoices + " 项</em>" : "单选投票"}</h2>
                                <p class="f_c">共有 0 人参与投票</p>
                                ${polldatas > 0 ? ` <p class="kmbtn">
                                <span class="bg_e">距结束还有:
                                ${polldatas > 1 ? '<em class="f_a">' + (polldatas - 1) + "</em> 天 " : ""}<em class="f_a">23</em> 小时 <em class="f_a">59</em> 分钟</span>
                            </p>` : ""}
                               
                            </div>
                            <div class="comiis_poll_list comiis_input_style cl">
                                <ul>
                                    ${choosehtml}
                                </ul>
                            </div>
                            <div class="comiis_poll_bottom cl">
                                <input type="submit" value="提交" class="formdialog comiis_btn kmshow bg_c f_f" disabled>
                                ${overt ? '<div class="comiis_quote bg_h b_dashed f_a"><i class="comiis_font"></i>此为公开投票，其他人可看到您的投票项目</div>' : ""}
                            </div>
                    </div>
                `;
      _unsafeWindow.$(".gm_plugin_previewpostforum_html .postforum_vote").remove();
      _unsafeWindow.$(".gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show").children().eq(0).before(_unsafeWindow.$(html));
    }
  };
  const MTEditorOptimization = {
    $data: {
      db: new Utils.indexedDB("mt_full_reply_record", "input_text"),
      get type() {
        return MTRouter.isPostPublish_voting() ? "post-vote" : "post";
      },
      get tid() {
        return MTUtils.getThreadId(window.location.href);
      },
      get pid() {
        return MTUtils.getPostId(window.location.href);
      }
    },
    $key: {
      /** 尚未发布、尚未存入草稿的序列化内容 */
      noPublishSerializeText: "mt-editor-no-publish-serialize-text",
      /** 尚未发布、尚未存入草稿的序列化投票内容 */
      noPublishVotingSerializeText: "mt-editor-no-publish-voting-serialize-text"
    },
    $el: {
      /** 标题框 */
      $title: null,
      /** 输入框 */
      $input: null,
      /** 表单元素 */
      $form: null
    },
    init() {
      log.info(`编辑器优化`);
      addStyle(optimizationCSS);
      this.overridePageEditor();
    },
    /**
     * 覆盖页面的编辑器
     */
    overridePageEditor() {
      const that = this;
      this.$el.$title = $("#needsubject");
      this.$el.$form = $("#postform");
      this.$el.$input = $("#needmessage");
      domUtils.hide(domUtils.parent(".comiis_scrollTop_box"), false);
      domUtils.css("#postform .comiis_post_from.mt15", {
        "margin-top": "0px !important"
      });
      let comiis_post_tab = _unsafeWindow.$(
        "#postform .comiis_post_from #comiis_post_tab"
      );
      _unsafeWindow.$("#postform .comiis_post_from .comiis_post_ico").append(comiis_post_tab);
      comiis_post_tab.remove();
      _unsafeWindow.textarea_scrollHeight = () => {
      };
      let comiis_delete = _unsafeWindow.$.fn.comiis_delete;
      _unsafeWindow.$.fn.extend({
        comiis_delete: function(...args) {
          let result = comiis_delete.call(this, ...args);
          utils.dispatchEvent(that.$el.$input, "input");
          return result;
        }
      });
      domUtils.hide(".comiis_btnbox", false);
      this.initVotePage();
      _unsafeWindow.$(
        ".gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist"
      );
      addStyle(
        /*css*/
        `
        #imglist_settings button{
            font-size: 13.333px;
            color: #9baacf;
            outline: none;
            border: none;
            height: 35px;
            width: 80px;
            border-radius: 10px;
            box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
            font-weight: 800;
            line-height: 40px;
            background: #efefef;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #imglist_settings button:active{box-shadow:inset .2rem .2rem .5rem #c8d0e7,inset -.2rem -.2rem .5rem #fff!important;color:#638ffb!important}
        `
      );
      domUtils.attr("#filedata", "multiple", true);
      domUtils.remove(".gm_plugin_chartbed .comiis_over_box.comiis_input_style");
      domUtils.on(document, "#comiis_pictitle_key li", "click", function() {
        domUtils.removeClass("#comiis_pictitle_key li", "bg_f");
        domUtils.addClass(this, "bg_f");
        _unsafeWindow.$(".gm_plugin_chartbed .comiis_upbox").hide().eq(_unsafeWindow.$(this).index()).fadeIn();
      });
      let top_height = parseInt(domUtils.css("#comiis_head", "height")) || 0;
      let fatie_toupiao = parseInt(domUtils.css("#comiis_sub", "height")) || 0;
      let extra_margin_bottom = $("#pollm_c_1") ? 60 : 0;
      let title_height = parseInt(domUtils.css(".comiis_styli.comiis_flex", "height")) || 0;
      let nav_bottom_height = parseInt(
        domUtils.css(".comiis_post_ico.comiis_minipost_icot", "height")
      ) || 0;
      domUtils.css(
        "#needmessage",
        "height",
        `${window.screen.height - top_height - fatie_toupiao - 48 - title_height - nav_bottom_height - 10}px`
      );
      domUtils.css("#needmessage", "marginBottom", extra_margin_bottom + "px");
      if (MTRouter.isPostPublish_edit() && domUtils.val("#needsubject") === "") {
        domUtils.hide(".comiis_styli.comiis_flex", false);
      } else {
        domUtils.attr(
          "#needsubject",
          "placeholder",
          "请输入完整的帖子标题 (1-80个字)"
        );
      }
      domUtils.attr("#needmessage", "placeholder", "来吧，尽情发挥吧...");
      if (typeof _unsafeWindow.comiis_addsmilies == "function") {
        _unsafeWindow.comiis_addsmilies = (_str_) => {
          _unsafeWindow.$("#needmessage").comiis_insert(_str_);
          _unsafeWindow.$("#needmessage")[0].dispatchEvent(new Event("input"));
        };
      }
      if (Panel.getValue(
        "mt-forum-post-editorOptimizationNormal-recordInputText"
      ) || Panel.getValue("mt-forum-post-editorOptimization-recordInputText")) {
        this.setInputChangeEvent();
        this.initReplyText();
      }
      this.initDeleteBtn();
      this.initSaveDraftBtn();
      this.initSaveBtn();
      this.initPostBtn();
      this.initReplyBtn();
      this.observerChangeEditorHeight();
      this.listenResize();
      this.initSelectPostingSection();
      this.initUBB();
      this.initImage();
      this.initPreview();
      this.initCharacterCount();
      this.initSettingImmersionMode();
    },
    /**
     * 把存储回复框的内容设置到输入框中
     */
    async initReplyText() {
      const that = this;
      let data = null;
      let save_callback = null;
      let delete_callback = null;
      if (MTRouter.isPostPublish_newthread()) {
        log.info(`新发布帖子的页面`);
        if (MTRouter.isPostPublish_voting()) {
          log.info(`投票页面`);
          data = _GM_getValue(
            this.$key.noPublishVotingSerializeText
          );
          delete_callback = () => {
            _GM_deleteValue(that.$key.noPublishVotingSerializeText);
          };
        } else {
          log.info(`普通帖子页面`);
          data = _GM_getValue(this.$key.noPublishSerializeText);
          delete_callback = () => {
            _GM_deleteValue(this.$key.noPublishSerializeText);
          };
        }
      } else if (MTRouter.isPostPublish_edit()) {
        log.info(`草稿的页面`);
        log.info(
          `type：${this.$data.type} tid：${this.$data.tid} pid：${this.$data.pid}`
        );
        let initResult = await this.$data.db.get("data");
        if (initResult.code === 201) {
          await this.$data.db.save("data", []);
        }
        let queryResult = await this.$data.db.get("data");
        if (queryResult.data) {
          let findValue = queryResult.data.find((item) => {
            if (item.type !== that.$data.type) {
              return;
            }
            if (item.tid !== that.$data.tid || item.pid !== that.$data.pid) {
              return;
            }
            return true;
          });
          if (findValue) {
            data = findValue.data;
            delete_callback = async () => {
              let deleteQuery = await this.$data.db.get(
                "data"
              );
              if (deleteQuery.data) {
                let deleteFindIndex = deleteQuery.data.findIndex((item) => {
                  if (item.type !== that.$data.type) {
                    return;
                  }
                  if (item.tid !== that.$data.tid || item.pid !== that.$data.pid) {
                    return;
                  }
                  return true;
                });
                if (deleteFindIndex != -1) {
                  deleteQuery.data.splice(deleteFindIndex, 1);
                  await this.$data.db.save(
                    "data",
                    deleteQuery.data
                  );
                }
              }
            };
          }
        }
      } else if (MTRouter.isPostPublish_reply()) {
        log.info(`回复页面`);
        if (Panel.getValue(
          "mt-forum-post-editorOptimizationNormal-recordInputText"
        )) {
          let initResult = await MTEditorOptimizationNormal.$data.db.get("data");
          if (initResult.code === 201) {
            await this.$data.db.save("data", []);
          }
          let queryResult = await MTEditorOptimizationNormal.$data.db.get("data");
          if (queryResult.data) {
            let findValue = queryResult.data.find((item) => {
              return item.forumId === that.$data.tid && item.repquote === MTUtils.getRepquote(window.location.href);
            });
            if (findValue) {
              data = findValue;
            }
          }
        }
      }
      if (!data) {
        return;
      }
      if (MTRouter.isPostPublish_voting()) {
        save_callback = () => {
          let $title = that.$el.$form.querySelector(
            "input[name='subject']"
          );
          let $content = that.$el.$form.querySelector(
            "textarea[name='message']"
          );
          let $maxchoices = that.$el.$form.querySelector(
            "input[name='maxchoices']"
          );
          let $expiration = that.$el.$form.querySelector(
            "input[name='expiration']"
          );
          let $visibilitypoll = that.$el.$form.querySelector(
            "input[name='visibilitypoll']"
          );
          let $overt = that.$el.$form.querySelector(
            "input[name='overt']"
          );
          domUtils.val($title, data.title);
          domUtils.val($content, data.content);
          domUtils.val($maxchoices, data.maxchoices);
          domUtils.val($expiration, data.expiration);
          domUtils.val(
            $visibilitypoll,
            data.visibilitypoll
          );
          domUtils.val($overt, data.overt);
          utils.dispatchEvent($title, "input");
          utils.dispatchEvent($content, "input");
          utils.dispatchEvent($maxchoices, "input");
          utils.dispatchEvent($expiration, "input");
          utils.dispatchEvent($visibilitypoll, "input");
          utils.dispatchEvent($overt, "input");
          return true;
        };
      } else {
        if (MTRouter.isPostPublish_reply()) {
          save_callback = () => {
            let $content = that.$el.$form.querySelector(
              "textarea[name='message']"
            );
            domUtils.val($content, data.text);
            utils.dispatchEvent($content, "input");
            return true;
          };
        } else {
          save_callback = () => {
            let $title = that.$el.$form.querySelector(
              "input[name='subject']"
            );
            let $content = that.$el.$form.querySelector(
              "textarea[name='message']"
            );
            domUtils.val($title, data.title);
            domUtils.val($content, data.content);
            utils.dispatchEvent($title, "input");
            utils.dispatchEvent($content, "input");
            return true;
          };
        }
      }
      if (MTRouter.isPostPublish_newthread()) {
        log.info(`新发布帖子的页面`);
        if (typeof save_callback === "function") {
          save_callback();
        }
      } else if (MTRouter.isPostPublish_edit()) {
        log.info(`草稿的页面`);
        if (typeof save_callback === "function" && typeof delete_callback === "function") {
          __pops.confirm({
            title: {
              text: "提示",
              position: "center"
            },
            content: {
              text: "<p>存在历史写入的数据，是否恢复到编辑器里？</p>",
              html: true
            },
            btn: {
              merge: true,
              position: "space-between",
              ok: {
                text: "恢复",
                callback: async (details) => {
                  if (await save_callback()) {
                    Qmsg.success("恢复成功");
                    details.close();
                  }
                }
              },
              other: {
                enable: true,
                type: "danger",
                text: "删除该数据",
                callback: async (details) => {
                  await delete_callback();
                  details.close();
                  Qmsg.success("删除成功");
                }
              }
            },
            width: "300px",
            height: "200px"
          });
        }
      } else if (MTRouter.isPostPublish_reply()) {
        log.info(`回复页面`);
        if (typeof save_callback === "function") {
          save_callback();
        }
      }
    },
    /**
     * 获取回复记录的占用空间
     */
    async getReplyRecordSize() {
      let result = await this.$data.db.get("data");
      if (result.success) {
        let size = utils.getTextStorageSize(
          result?.data?.length ? JSON.stringify(result.data) : ""
        );
        return size;
      } else {
        return utils.formatByteToSize(0);
      }
    },
    /**
     * 清空所有的回复记录
     */
    async clearAllReplyRecord() {
      return await this.$data.db.deleteAll();
    },
    /**
     * 删除存储的数据
     */
    deleteReplyTextStorage() {
      const that = this;
      this.$data.db.get("data").then((result) => {
        if (!result.success) {
          console.warn(result);
          return;
        }
        let type = MTRouter.isPostPublish_voting() ? "post-vote" : "post";
        let tid = MTUtils.getThreadId(window.location.href);
        let pid = MTUtils.getPostId(window.location.href);
        let localDataIndex = result.data.findIndex((item) => {
          if (item.type !== type) {
            return;
          }
          if (item.tid !== tid || item.pid !== pid) {
            return;
          }
          return true;
        });
        if (localDataIndex !== -1) {
          result.data.splice(localDataIndex, 1);
          that.$data.db.save("data", result.data).then((result2) => {
          });
        }
      });
    },
    /**
     * 监听输入框内容改变
     */
    setInputChangeEvent() {
      const that = this;
      domUtils.on(
        [this.$el.$input, this.$el.$title].filter(Boolean),
        ["input", "propertychange"],
        function(event) {
          let data = null;
          if (MTRouter.isPostPublish_voting()) {
            let $title = that.$el.$form.querySelector(
              "input[name='subject']"
            );
            let $content = that.$el.$form.querySelector(
              "textarea[name='message']"
            );
            let $maxchoices = that.$el.$form.querySelector(
              "input[name='maxchoices']"
            );
            let $expiration = that.$el.$form.querySelector(
              "input[name='expiration']"
            );
            let $visibilitypoll = that.$el.$form.querySelector(
              "input[name='visibilitypoll']"
            );
            let $overt = that.$el.$form.querySelector(
              "input[name='overt']"
            );
            data = {
              title: $title.value,
              maxchoices: $maxchoices.value,
              expiration: $expiration.value,
              visibilitypoll: $visibilitypoll.checked,
              overt: $overt.checked,
              content: $content.value
            };
          } else {
            let $title = that.$el.$form.querySelector(
              "input[name='subject']"
            );
            let $content = that.$el.$form.querySelector(
              "textarea[name='message']"
            );
            data = {
              title: $title?.value,
              content: $content.value
            };
          }
          if (MTRouter.isPostPublish_newthread()) {
            log.info(`内容改变 ==> 新发布帖子的页面`);
            if (MTRouter.isPostPublish_voting()) {
              _GM_setValue(that.$key.noPublishVotingSerializeText, data);
            } else {
              _GM_setValue(that.$key.noPublishSerializeText, data);
            }
          } else if (MTRouter.isPostPublish_edit()) {
            log.info(`内容改变 ==> 草稿的页面`);
            that.$data.db.get("data").then((result) => {
              if (!result.success) {
                console.warn(result);
                return;
              }
              let localDataIndex = result.data.findIndex((item) => {
                if (item.type !== that.$data.type) {
                  return;
                }
                if (item.tid !== that.$data.tid || item.pid !== that.$data.pid) {
                  return;
                }
                return true;
              });
              if (localDataIndex !== -1) {
                result.data.splice(localDataIndex, 1);
              }
              result.data.push({
                url: window.location.href,
                data,
                pid: that.$data.pid,
                tid: that.$data.tid,
                type: that.$data.type
              });
              that.$data.db.save("data", result.data).then((result2) => {
              });
            });
          } else if (MTRouter.isPostPublish_reply()) {
            log.info(`内容改变 ==> 回复页面`);
            Panel.execMenu(
              "mt-forum-post-editorOptimizationNormal-recordInputText",
              () => {
                MTEditorOptimizationNormal.$data.db.get("data").then((result) => {
                  if (!result.success || result.code === 201) {
                    console.warn(result);
                    return;
                  }
                  let localDataIndex = result.data.findIndex((item) => {
                    return item.forumId === that.$data.tid && item.repquote === MTUtils.getRepquote(window.location.href);
                  });
                  if (localDataIndex !== -1) {
                    if (data.content == null || data.content === "") {
                      result.data.splice(localDataIndex, 1);
                    } else {
                      result.data[localDataIndex] = utils.assign(
                        result.data[localDataIndex],
                        {
                          text: data.content
                        }
                      );
                    }
                  } else {
                    result.data.push({
                      forumId: that.$data.tid,
                      url: window.location.href,
                      repquote: MTUtils.getRepquote(window.location.href),
                      text: data.content
                    });
                  }
                  MTEditorOptimizationNormal.$data.db.save("data", result.data).then((result2) => {
                  });
                });
              }
            );
          }
        }
      );
    },
    /**
     * 初始化删除按钮
     */
    initDeleteBtn() {
      let btn_del = $(".comiis_btnbox .comiis_btn.bg_del");
      if (!btn_del) {
        return;
      }
      let $header = $("#comiis_head .header_y");
      let $btn = domUtils.createElement(
        "input",
        {
          className: "new_btn_del"
        },
        {
          type: "button",
          value: "删除"
        }
      );
      domUtils.append($header, $btn);
      domUtils.on($btn, "click", function() {
        __pops.confirm({
          title: {
            text: "提示",
            position: "center"
          },
          content: {
            text: "<p>是否删除帖子?</p>",
            html: true
          },
          btn: {
            ok: {
              callback: (details) => {
                details.close();
                _unsafeWindow.comiis_delthread();
              }
            }
          },
          width: "300px",
          height: "200px"
        });
      });
    },
    /**
     * 初始化保存按钮
     */
    initSaveBtn() {
      let $save = domUtils.selector(
        ".comiis_btnbox button#postsubmit:contains('保存')"
      );
      if (!$save) {
        return;
      }
      if (domUtils.text($save).includes("草稿")) {
        return;
      }
      let $header = $("#comiis_head .header_y");
      let $btn = domUtils.createElement(
        "input",
        {
          className: "new_btn_save"
        },
        {
          type: "button",
          value: "保存"
        }
      );
      domUtils.append($header, $btn);
      domUtils.on($btn, "click", function() {
        $save.click();
      });
    },
    /**
     * 初始化发表按钮
     */
    initPostBtn() {
      let $post = domUtils.selector(
        ".comiis_btnbox button#postsubmit:contains('发表')"
      );
      if (!$post) {
        return;
      }
      let $header = $("#comiis_head .header_y");
      let $btn = domUtils.createElement(
        "input",
        {
          className: "new_btn_post"
        },
        {
          type: "button",
          value: "发表"
        }
      );
      domUtils.append($header, $btn);
      domUtils.on($btn, "click", function() {
        domUtils.val("#postsave", 0);
        $post.click();
      });
    },
    /**
     * 初始化回复按钮
     */
    initReplyBtn() {
      const that = this;
      let $reply = domUtils.selector(
        ".comiis_btnbox button#postsubmit:contains('回复')"
      );
      if (!$reply) {
        return;
      }
      let $header = $("#comiis_head .header_y");
      let $btn = domUtils.createElement(
        "input",
        {
          className: "new_btn_reply"
        },
        {
          type: "button",
          value: "回复"
        }
      );
      domUtils.append($header, $btn);
      domUtils.on($btn, "click", function() {
        $reply.click();
        that.deleteReplyTextStorage();
      });
    },
    /**
     * 初始化投票页面
     */
    initVotePage() {
      if (!$$(".comiis_scrollTop_box").length) {
        return;
      }
      _unsafeWindow.$("#htmlon").parent().append(
        /*html*/
        `
                <li class="comiis_styli_m f15 comiis_flex b_b">
                    <div class="flex">发表帖子</div>
                    <div class="styli_r">
                        <input type="checkbox" name="usesig" value="1" class="comiis_checkbox_key">
                        <label for="" class="wauto">
                            <code class="bg_f b_ok comiis_checkbox comiis_choose_post comiis_checkbox_close"></code>
                        </label>
                    </div>	
                </li>
                <li class="comiis_styli_m f15 comiis_flex b_b">
                    <div class="flex">发投票</div>
                    <div class="styli_r">
                        <input type="checkbox" name="usesig" value="1" class="comiis_checkbox_key">
                        <label for="" class="wauto">
                            <code class="bg_f b_ok comiis_checkbox comiis_choose_vote comiis_checkbox_close"></code>
                        </label>
                    </div>	
                </li>
                `
      );
      if (_unsafeWindow.$(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')").attr("class") != "f_c") {
        _unsafeWindow.$(".comiis_checkbox.comiis_choose_post").removeClass("comiis_checkbox_close");
      } else {
        _unsafeWindow.$(".comiis_checkbox.comiis_choose_vote").removeClass("comiis_checkbox_close");
      }
      _unsafeWindow.$(".comiis_checkbox.comiis_choose_post").on("click", function() {
        let obj = _unsafeWindow.$(this);
        obj.addClass("comiis_checkbox_close");
        _unsafeWindow.$(".comiis_checkbox.comiis_choose_vote").addClass("comiis_checkbox_close");
        obj.removeClass("comiis_checkbox_close");
        window.location.href = window.location.href.replace("&special=1", "");
      });
      _unsafeWindow.$(".comiis_checkbox.comiis_choose_vote").on("click", function() {
        let obj = _unsafeWindow.$(this);
        obj.addClass("comiis_checkbox_close");
        _unsafeWindow.$(".comiis_checkbox.comiis_choose_post").addClass("comiis_checkbox_close");
        obj.removeClass("comiis_checkbox_close");
        window.location.href = window.location.href + "&special=1";
      });
    },
    /**
     * 初始化保存草稿按钮
     */
    initSaveDraftBtn() {
      let $saveDraft = domUtils.selector(
        ".comiis_btnbox button#postsubmit em:contains('保存草稿')"
      );
      if (!$saveDraft) {
        return;
      }
      let $header = $("#comiis_head .header_y");
      let $btn = domUtils.createElement(
        "input",
        {
          className: "new_btn_save_temp"
        },
        {
          type: "button",
          value: "保存草稿"
        }
      );
      $("#needsubject");
      domUtils.append($header, $btn);
      domUtils.selector(
        ".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"
      );
      domUtils.on($btn, "click", function() {
        $saveDraft.click();
      });
    },
    /**
     * 动态修改编辑器的高度
     */
    observerChangeEditorHeight() {
      var recordHeight = 0;
      utils.waitNode("#postform > div > div.comiis_post_ico.comiis_minipost_icot").then((element) => {
        utils.mutationObserver(element, {
          callback: (mutations) => {
            var $tar = $(
              "#postform > div > div.comiis_post_ico.comiis_minipost_icot"
            );
            let height = window.getComputedStyle($tar).getPropertyValue("height");
            if (height.toString() === recordHeight.toString()) {
              return;
            }
            recordHeight = parseInt(height);
            let needMessageSeeHeight = document.documentElement.clientHeight - $(
              "#postform > div > div.comiis_post_ico.comiis_minipost_icot"
            ).getBoundingClientRect().height - $("#needmessage").getBoundingClientRect().top;
            if (needMessageSeeHeight - 5 < 100) {
              _unsafeWindow.$("#needmessage").css("height", "100px");
              _unsafeWindow.$(
                ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box"
              ).css("height", "100px");
            } else {
              _unsafeWindow.$("#needmessage").css("height", needMessageSeeHeight - 5 + "px");
              _unsafeWindow.$(
                ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box"
              ).css("height", needMessageSeeHeight - 5 + "px");
            }
          },
          config: {
            childList: true,
            /* 属性的变动 */
            attributes: true,
            /* 节点内容或节点文本的变动 */
            characterData: true,
            /* 是否将观察器应用于该节点的所有后代节点 */
            subtree: true
          }
        });
      });
    },
    /**
     * 监听窗口大小变化
     */
    listenResize() {
      domUtils.on(window, "resize", function() {
        let needMessageSeeHeight = document.documentElement.clientHeight - $(
          "#postform > div > div.comiis_post_ico.comiis_minipost_icot"
        ).getBoundingClientRect().height - $("#needmessage").getBoundingClientRect().top;
        if (needMessageSeeHeight - 5 < 100) {
          domUtils.css("#needmessage", "height", "100px");
          domUtils.css(
            ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box",
            "height",
            "100px"
          );
        } else {
          log.info("设置输入框、预览高度", needMessageSeeHeight - 5);
          domUtils.css("#needmessage", "height", needMessageSeeHeight - 5 + "px");
          domUtils.css(
            ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box",
            "height",
            needMessageSeeHeight - 5 + "px"
          );
        }
      });
    },
    /**
     * 注入选择板块功能
     */
    initSelectPostingSection() {
      addStyle(
        /*css*/
        `
            #select-post-section {
                height: 28px;
                width: 160px;
                line-height: 28px;
                border: 1px solid #ececec;
                background: url(w.png) no-repeat;
                background-position: 95% 50%;
                -webkit-appearance: none;
                appearance: none;
                -moz-appearance: none;
            }
            `
      );
      let section_dict = {
        2: "版本发布",
        37: "插件交流",
        38: "建议反馈",
        41: "逆向交流",
        39: "玩机交流",
        42: "编程开发",
        40: "求助问答",
        44: "综合交流",
        50: "休闲灌水",
        46: "官方公告",
        53: "申诉举报",
        92: "站务专区"
      };
      domUtils.before(
        ".comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')",
        /*html*/
        `
        <li class="comiis_styli_section comiis_flex b_b" style="padding: 10px 12px;font-size: 16px;">
            <div class="styli_section f_c" style="padding-right: 8px;vertical-align: top;">板块</div>
            <div class="flex">
                <select id="select-post-section" style="vertical-align:top;border-color:transparent;font-size: 17px;font-weight: 300;text-overflow:ellipsis;white-space:nowrap;">
                    <option value="2">版本发布</option>
                    <option value="37">插件交流</option>
                    <option value="38">建议反馈</option>
                    <option value="39">玩机交流</option>
                    <option value="40">求助问答</option>
                    <option value="41">逆向交流</option>
                    <option value="42">编程开发</option>
                    <option value="44">综合交流</option>
                    <option value="46">官方公告</option>
                    <option value="50">休闲灌水</option>
                    <option value="53">申诉举报</option>
                    <option value="92">站务专区</option>
                </select>
            </div>
        </li>
        `
      );
      let $select = $(`#select-post-section`);
      let currentSection = MTUtils.getForumId(window.location.href);
      if (MTRouter.isPostPublish_newthread()) {
        log.info(`发帖`);
        domUtils.on($select, "change", function() {
          let fid = domUtils.val($select);
          let postSection = `forum.php?mod=post&action=newthread&fid=${fid}&extra=&topicsubmit=yes&mobile=2`;
          log.info(`修改发帖板块: ${section_dict[fid]} ${postSection}`);
          let classifyClassNameDict = {
            求助问答: {
              className: "gm_user_select_help",
              optionHTML: `<option value="0" selected="selected">请选择</option>
                        <option value="59">求助问答</option>
                        <option value="58">已解决</option>`
            },
            建议反馈: {
              className: "gm_user_select_feedback",
              optionHTML: `<option value="0" selected="selected">请选择</option>
                        <option value="62">BUG反馈</option>
                        <option value="63">意见反馈</option>
                        <option value="65">论坛问题</option>
                        <option value="64">已解决</option>`
            },
            站务专区: {
              className: "gm_user_select_depot",
              optionHTML: `<option value="0" selected="selected">请选择</option>
                        <option value="42">版主申请</option>
                        <option value="43">职位调整</option>`
            }
          };
          let otherSelect = classifyClassNameDict[section_dict[fid]];
          if (otherSelect) {
            domUtils.remove(
              domUtils.parent(".comiis_post_from .styli_tit:contains('分类')")
            );
            domUtils.before(
              ".comiis_stylino.comiis_needmessage",
              /*html*/
              `
                        <li class="comiis_styli comiis_flex b_b ${otherSelect["className"]}">
                            <div class="styli_tit f_c">分类</div>
                                <div class="flex comiis_input_style">
                                    <div class="comiis_login_select">
                                    <span class="inner">
                                        <i class="comiis_font f_d"></i>
                                        <span class="z">
                                            <span class="comiis_question" id="typeid_name">请选择</span>
                                        </span>					
                                    </span>
                                    <select id="typeid" name="typeid">
                                        ${otherSelect["optionHTML"]}
                                    </select>
                                </div>	
                            </div>
                        </li>
                        `
            );
          } else {
            Object.keys(classifyClassNameDict).forEach((key) => {
              domUtils.remove(
                ".comiis_post_from ." + classifyClassNameDict[key]["className"]
              );
            });
          }
          domUtils.attr("#postform", "action", postSection);
        });
      } else {
        domUtils.attr($select, "disabled", true);
      }
      domUtils.val($select, currentSection);
      domUtils.trigger($select, "change");
    },
    /**
     * 字符计数
     */
    initCharacterCount() {
      log.info(`添加功能：字符计数`);
      addStyle(
        /*css*/
        `
        .gm_plugin_word_count{display:flex}
        .gm_plugin_word_count::after{content:"/20000"}
        `
      );
      domUtils.append(
        "#comiis_mh_sub .swiper-wrapper.comiis_post_ico",
        /*html*/
        `
            <a href="javascript:;" class="swiper-slide gm_plugin_word_count">
                <p>0</p>
            </a>`
      );
      domUtils.on(this.$el.$input, ["input", "propertychange"], (event) => {
        let userInputText = this.$el.$input.value;
        let userInputTextLength = utils.getTextLength(userInputText);
        let parsedText = MTEditorPreview.parseText(userInputText);
        domUtils.html(
          ".gm_plugin_previewpostforum_html .comiis_message_table",
          parsedText
        );
        let wordCountDom = $(".gm_plugin_word_count p");
        domUtils.text(wordCountDom, userInputTextLength);
        if (userInputTextLength > 2e4 || userInputTextLength < 10) {
          domUtils.attr(wordCountDom, "style", "color: red;");
        } else {
          domUtils.attr(wordCountDom, "style", "");
        }
      });
    },
    /**
     * 自定义的其它ubb
     */
    initUBB() {
      if (!$(".comiis_post_urlico")) {
        log.error("未找到插入元素");
        return;
      }
      addStyle(
        /*css*/
        `
        #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
            color: #53bcf5 !important;
        }
        `
      );
      let ubbCode = MTQuickUBB();
      let parentEle = $(".comiis_post_urlico > ul");
      let contentEle = $("#comiis_post_qydiv > ul");
      let childNums = $$("#comiis_post_qydiv ul li").length;
      ExtendJQueryFn();
      domUtils.on(
        "#comiis_post_tab .comiis_input_style .comiis_post_urlico li",
        "click",
        function() {
          domUtils.removeClass(
            "#comiis_post_tab .comiis_input_style .comiis_post_urlico li a",
            "f_0"
          );
          domUtils.addClass(
            "#comiis_post_tab .comiis_input_style .comiis_post_urlico li a",
            "f_d"
          );
          domUtils.attr(this.querySelector("a"), "class", "comiis_xifont f_0");
          _unsafeWindow.$("#comiis_post_qydiv ul li").hide().eq(_unsafeWindow.$(this).index()).fadeIn();
        }
      );
      _unsafeWindow.$.each(ubbCode, function(key, value) {
        let $ubbs = domUtils.createElement("li", {
          className: "quickUBBs",
          innerHTML: (
            /*html*/
            `
                <a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${value["key"]}</a>
                `
          )
        });
        domUtils.on($ubbs, "click", (event) => {
          let bottomEle = $(
            `#comiis_post_qydiv li[data-key='${value.key}']`
          );
          if (!bottomEle) {
            log.error("未找到该元素");
            return;
          }
          $$(
            "#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont"
          ).forEach(($ele) => {
            $ele.className = "comiis_xifont f_d";
          });
          let $childAnchor = $ubbs.querySelector("a");
          $childAnchor.className = "comiis_xifont f_0";
          let contentIndex = childNums + Object.keys(ubbCode).indexOf(key);
          _unsafeWindow.$("#comiis_post_qydiv ul li").hide().eq(contentIndex).fadeIn();
        });
        domUtils.append(parentEle, $ubbs);
        let ubbs_content = document.createElement("li");
        ubbs_content.setAttribute("style", "display: none;");
        ubbs_content.setAttribute("data-key", value["key"]);
        ubbs_content.innerHTML = /*html*/
        `
            <div class="comiis_styli_m f15" style="padding-top:12px;">
                <div class="bg_e comiis_p5" style="border-radius:4px">
                    <textarea class="comiis_pt kmshow f_c" id="comiis_input_${key}" style="font-size:15px" placeholder="请输入需要${value["key"]}的文字"></textarea>
                </div>
            </div>
            <div class="comiis_styli_m f15 comiis_flex" style="padding-top:0;">
                <div class="styli_tit">
                    <button class="comiis_sendbtn bg_0 f_f" data-keyI="${key}" type="button">插入</button>
                </div>
                <div class="flex"></div>
            </div>`;
        domUtils.append(contentEle, ubbs_content);
        domUtils.on(`.comiis_sendbtn[data-keyI="${key}"]`, "click", () => {
          let text = _unsafeWindow.$(`#comiis_input_${key}`).val();
          if (text == "") {
            Qmsg.warning("请输入需要插入的内容");
            return;
          }
          let currentUBBObj = ubbCode[key];
          if (currentUBBObj["isFunc"]) {
            text = MTUBB_Rainbow(currentUBBObj["num"], text);
          }
          if (currentUBBObj.hasOwnProperty("L")) {
            text = currentUBBObj["L"] + text + currentUBBObj["R"];
          }
          _unsafeWindow.$("#needmessage").insertAtCaret(text);
          if (currentUBBObj.hasOwnProperty("cursorL")) {
            _unsafeWindow.$("#needmessage").moveCursorToCenterByTextWithLeft(
              currentUBBObj["cursorL"],
              currentUBBObj["cursorLength"]
            );
          }
          if (currentUBBObj.hasOwnProperty("cursorR")) {
            _unsafeWindow.$("#needmessage").moveCursorToCenterByTextWithRight(
              currentUBBObj["cursorR"],
              currentUBBObj["cursorLength"]
            );
          }
        });
      });
    },
    /**
     * 图片功能
     */
    initImage() {
      log.info(`添加功能：图片`);
      addStyle(
        /*css*/
        `
            #comiis_pictitle_tab .comiis_upbox{
                height: 140px;
                overflow-y: auto;
            }
            `
      );
      let imageBtnHTML = (
        /*html*/
        `
        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"><em>图片</em></i></a>`
      );
      domUtils.append(
        "#comiis_mh_sub .swiper-wrapper.comiis_post_ico",
        imageBtnHTML
      );
      domUtils.on(".comiis_pictitle", "click", function() {
        let $click = this;
        let $font = $click.querySelector("i.comiis_font");
        if (!$font.classList.contains("f_0")) {
          domUtils.show(".gm_plugin_chartbed", false);
        } else {
          domUtils.hide(".gm_plugin_chartbed", false);
        }
      });
      domUtils.append(
        "#comiis_post_tab",
        /*html*/
        `
            <div id="comiis_pictitle_tab" class="gm_plugin_chartbed" style="display: none">
                <!-- <div class="comiis_upbox bg_f cl">
                    <ul id="mt-imglist" class="comiis_post_imglist cl">
                        <li class="up_btn">
                            <a href="javascript:;" class="bg_e b_ok f_d">
                                <i class="comiis_font"></i>
                            </a>
                        </li>				
                    </ul>
                </div> -->
                <div class="bqbox_t">
                    <ul id="comiis_pictitle_key">
                        <li class="bg_f" id="comiis_pictitle_tab_n_1"><a href="javascript:;" class="">论坛</a></li>
                    </ul>
                </div>
            </div>
            `
      );
      let originImageList = $("#imglist");
      let originImageListParent = domUtils.parent(originImageList);
      domUtils.before(".gm_plugin_chartbed .bqbox_t", originImageListParent);
      domUtils.on("#imglist .comiis_font", "click", (event) => {
        $("#filedata").click();
      });
      domUtils.on(
        "#comiis_pictitle_tab #comiis_pictitle_key",
        "click",
        "li",
        function(event) {
          let $click = event.target;
          domUtils.removeClass(
            "#comiis_pictitle_tab #comiis_pictitle_key li",
            "bg_f"
          );
          domUtils.addClass($click, "bg_f");
          _unsafeWindow.$("#comiis_pictitle_tab div.comiis_upbox").hide().eq(_unsafeWindow.$($click).index()).fadeIn();
        }
      );
      Panel.execMenuOnce("mt-image-bed-hello-enable", () => {
        MTEditorImageBed_Hello.init();
      });
      Panel.execMenuOnce("mt-image-bed-mt-enable", () => {
        MTEditorImageBed_MT.init();
      });
    },
    /**
     * 双列预览
     */
    initPreview() {
      const that = this;
      log.info(`添加功能：双列预览`);
      addStyle(
        /*css*/
        `
        .gm_plugin_previewpostforum_html .comiis_message_table{margin-top:10px;font-weight:initial;line-height:24px}
        .gm_plugin_previewpostforum_html .comiis_message_table a{height:auto;float:unset;color:#507daf!important}
        .gm_plugin_previewpostforum_html .comiis_message_table i{text-align:unset;font-size:unset;line-height:unset;padding-top:unset;display:unset}
        .comiis_postli.comiis_list_readimgs.nfqsqi{width:100vw}
        .gm_plugin_previewpostforum_html.double-preview{width:50vw}
        .gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style{border-left:1px solid}
        `
      );
      let previewBtnHTML = (
        /*html*/
        `
        <a href="javascript:;" class="swiper-slide gm_plugin_previewpostforum">
            <i class="comiis_font" style="display: flex;flex-direction: column;padding-top: 1px;">
                <svg t="1661243615511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="22" height="22" fill="currentColor">
                    <path d="M470.1 885.3H208.8V138.7h597.3v336c0 20.6 16.7 37.3 37.3 37.3 20.6 0 37.3-16.7 37.3-37.3v-336c0-41.2-33.4-74.7-74.7-74.7H208.8c-41.2 0-74.7 33.4-74.7 74.7v746.7c0 41.2 33.4 74.7 74.7 74.7h261.3c20.6 0 37.3-16.7 37.3-37.3 0.1-20.8-16.6-37.5-37.3-37.5z" p-id="2400"></path>
                    <path d="M641.3 496.5c-54.3 0-108.5 23.5-146.2 70.5-54.7 68.3-53.4 168.6 2.8 235.6 37.5 44.8 90.5 67.2 143.4 67.2 35.9 0 71.8-10.3 103-30.9l81.8 81.8c7.3 7.3 16.8 10.9 26.4 10.9 9.6 0 19.1-3.6 26.4-10.9 14.6-14.6 14.6-38.2 0-52.8l-81.8-81.8c48-72.5 40.1-171.1-23.7-234.9-36.5-36.4-84.3-54.7-132.1-54.7z m0 298.7c-36.5 0-72.9-17.6-95.3-52.9-22.6-35.6-22.6-82.5 0-118.1 22.4-35.3 58.9-52.9 95.3-52.9 36.5 0 72.9 17.6 95.3 52.9 22.6 35.6 22.6 82.5 0 118.1-22.4 35.2-58.8 52.9-95.3 52.9z" p-id="2401"></path>
                </svg>
                <em style="bottom: 1px;position: relative;">预览</em>
            </i>
        </a>`
      );
      domUtils.append(
        "#comiis_mh_sub .swiper-wrapper.comiis_post_ico",
        previewBtnHTML
      );
      domUtils.css(domUtils.parent(this.$el.$input), "display", "flex");
      domUtils.after(
        this.$el.$input,
        /*html*/
        `
            <div class="bg_f cl gm_plugin_previewpostforum_html double-preview" style="display: none;">
              <div class="comiis_over_box comiis_input_style">
                <div class="comiis_postli comiis_list_readimgs nfqsqi" style="width: 50vw;">
                  <div class="comiis_message bg_f view_one cl message" style="margin-bottom: auto;padding: 0px 12px 0px 12px;">
                    <div class="comiis_messages comiis_aimg_show cl" style="overflow-y: auto;position: relative;">
                      <div class="comiis_a comiis_message_table cl" style="margin: 0;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
      );
      domUtils.on(
        ".gm_plugin_previewpostforum",
        "click",
        function(event) {
          let $click = this;
          if ($$("#polldatas").length) {
            MTEditorPreview.parseVoteText();
          }
          let $font = $click.querySelector("i.comiis_font");
          if (!$font.classList.contains("f_0")) {
            domUtils.show(".gm_plugin_previewpostforum_html", false);
            let parsedText = MTEditorPreview.parseText(
              domUtils.val(that.$el.$input)
            );
            domUtils.html(
              ".gm_plugin_previewpostforum_html .comiis_message_table",
              parsedText
            );
            domUtils.css(
              ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style",
              "height",
              domUtils.css(that.$el.$input, "height")
            );
          } else {
            domUtils.hide(".gm_plugin_previewpostforum_html", false);
          }
        }
      );
    },
    /**
     * 初始化设置功能-使用沉浸模式
     */
    initSettingImmersionMode() {
      log.info(`初始化设置功能-使用沉浸模式`);
      domUtils.append(
        domUtils.parent("#htmlon"),
        /*html*/
        `
            <li class="comiis_styli_m f15 comiis_flex b_b">
                <div class="flex">使用沉浸输入</div>
                <div class="styli_r">
                    <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                    <label for="immersiveinput" class="wauto">
                        <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                    </label>
                </div>	
            </li>
            `
      );
      domUtils.on("#immersiveinput", "click", function() {
        let $click = this;
        let code_obj = domUtils.parent($click).querySelector(".comiis_checkbox");
        let elementList = [
          /* 板块、标题 */
          ".comiis_wzpost ul li.comiis_flex",
          /* 回复别人的quote */
          ".comiis_wzpost ul li.comiis_styli.kmquote",
          /* 投票,最多可填写 20 个选项 */
          domUtils.parent(domUtils.parent("#pollchecked")),
          /* 投票,增加一项 */
          "#pollm_c_1",
          /* 投票,增加一项(编辑状态下) */
          ".comiis_polloption_add+div.f_0",
          /* 投票,内容 */
          ".comiis_wzpost ul li.comiis_thread_content:contains('内容')",
          /* 顶部header */
          "div#comiis_head",
          /* 后面的 */
          "div#comiis_head+*:not([class])"
        ];
        if (domUtils.hasClass(code_obj, "comiis_checkbox_close")) {
          elementList.forEach(($ele) => {
            $ele && domUtils.hide($ele, false);
          });
        } else {
          elementList.forEach(($ele) => {
            $ele && domUtils.show($ele, false);
          });
        }
        window.dispatchEvent(new Event("resize"));
      });
    }
  };
  const MTForumPostPublish = {
    init() {
      domUtils.ready(() => {
        Panel.execMenuOnce("mt-forum-post-publish-editorOptimization", () => {
          MTEditorOptimization.init();
        });
      });
    }
  };
  const MT = {
    $flag: {
      showUserUID_initCSS: false
    },
    init() {
      if (MTRouter.isPage() || MTRouter.isGuide() || MTRouter.isPlate() || MTRouter.isPost() || MTRouter.isSearch() || MTRouter.isSpace()) {
        Panel.execMenuOnce("mt-show-user-uid", () => {
          this.showUserUID();
        });
      }
      if (MTRouter.isSearch() || MTRouter.isGuide() || MTRouter.isSpace() || MTRouter.isPlate()) {
        Panel.execMenuOnce("mt-small-window", () => {
          MTSmallWindow.init();
        });
      }
      if (MTRouter.isPost()) {
        log.info(`Router: 帖子`);
        MTForumPost.init();
      } else if (MTRouter.isSearch()) {
        log.info(`Router: 搜索`);
        MTSearch.init();
      } else if (MTRouter.isKMiSign()) {
        log.info(`Router: 签到`);
        MTSign.init();
      } else if (MTRouter.isSpace() || MTRouter.isSpaceWithAt()) {
        log.info(`Router: 空间`);
        MTSpace.init();
      } else if (MTRouter.isGuide()) {
        log.info(`Router: 导读`);
        MTGuide.init();
      } else if (MTRouter.isPostPublish()) {
        log.info("Router: 发帖页面");
        MTForumPostPublish.init();
      } else {
        log.error(`Router: 未适配的链接 ==> ` + window.location.href);
      }
      domUtils.ready(() => {
        Panel.execMenuOnce("mt-black-home", () => {
          MTBlackHome.init();
        });
        Panel.execMenuOnce("mt-online-user", () => {
          MTOnlineUser.init();
        });
        Panel.execMenuOnce("mt-post-paidThemePost", () => {
          MTPaidThemePost.init();
        });
        Panel.execMenuOnce("mt-ownBlock", () => {
          MTOwnBlock.init();
        });
        Panel.execMenuOnce("mt-post-comment-filter", () => {
          MTCommentFilter.init();
        });
        Panel.execMenuOnce("mt-productListingReminder", () => {
          MTProductListingReminder.init();
        });
        Panel.execMenuOnce("mt-customizeUserLabels", () => {
          MTCustomizeUserLabels.init();
        });
        Panel.execMenuOnce("mt-link-text-to-hyperlink", () => {
          MTIdentifyLinks();
        });
        Panel.execMenu("mt-auto-sign", () => {
          MTAutoSignIn.init();
        });
        Panel.execMenu("mt-extend-cookie-expire", () => {
          this.extendCookieExpire();
        });
      });
    },
    /**
     * 显示用户UID
     */
    showUserUID() {
      log.info(`显示用户UID`);
      if (!this.$flag.showUserUID_initCSS) {
        this.$flag.showUserUID_initCSS = true;
        addStyle(
          /*css*/
          `
			.postli_top_tximg + h2{
 				height: auto;
			}
			.comiis_postli_top.bg_f.b_t h2{
            	height: auto;
          	}
			`
        );
      }
      let lockFn = new utils.LockFunction(() => {
        let forumList = utils.getNodeListValue(
          ElementUtils.comiisForumList(),
          ElementUtils.comiisPostli(),
          ElementUtils.comiisMmlist()
        );
        if (forumList.length) {
          forumList.forEach(($post) => {
            let mtUIDOM = $post.querySelector(".gm-custom-label-uid");
            if (mtUIDOM) {
              return;
            }
            let mt_uid_array = Array.from($post.querySelectorAll("a")).map((item) => {
              let url = item.href;
              let uid = url.match(MTRegExp.uid);
              if (uid) {
                return uid[uid.length - 1];
              }
            }).filter((item) => item != null);
            if (mt_uid_array.length) {
              let mt_uid = mt_uid_array[0];
              let uid_control = document.createElement("a");
              let $topLev = $post.querySelector(".top_lev");
              uid_control.className = $topLev.className;
              uid_control.classList.add("gm-custom-label-uid");
              uid_control.style.cssText = `background: #FF7600 !important;`;
              uid_control.innerHTML = "UID:" + mt_uid;
              domUtils.on(uid_control, "click", async (event) => {
                utils.preventEvent(event);
                let status = await utils.setClip(mt_uid);
                if (status) {
                  Qmsg.success(`${mt_uid}已复制`);
                } else {
                  Qmsg.error(`${mt_uid}复制失败`);
                }
              });
              $topLev.parentElement.append(uid_control);
            }
          });
        }
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        callback() {
          lockFn.run();
        }
      });
    },
    /**
     * 延长cookie有效期
     */
    async extendCookieExpire() {
      log.info(`延长cookie有效期`);
      let cookieList = await _GM.cookie.list({});
      let needExtendCookieNameList = [
        "_auth",
        "_saltkey",
        "_client_created",
        "_client_token"
      ];
      cookieList.forEach(async (cookieItem) => {
        if (cookieItem.session) {
          return;
        }
        let expireTime = cookieItem.expirationDate;
        let nowTime = Date.now() / 1e3;
        if (expireTime < nowTime) {
          return;
        }
        let _30days = 60 * 60 * 24 * 30;
        if (expireTime - nowTime > _30days) {
          return;
        }
        let flag = needExtendCookieNameList.find(
          (it) => cookieItem.name.endsWith(it)
        );
        if (!flag) {
          return;
        }
        _GM.cookie.set({
          name: cookieItem.name,
          value: cookieItem.value,
          expirationDate: cookieItem.expirationDate + _30days
        }).then(() => {
          log.info(`延长Cookie +30天成功：${cookieItem.name}`);
        }).catch(() => {
          log.error(`延长Cookie +30天失败：${cookieItem.name}`);
        });
      });
    }
  };
  const UISelect = function(text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
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
        if (typeof selectCallBack === "function") {
          let result2 = selectCallBack(event, value, isSelectedText);
          if (result2) {
            return;
          }
        }
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
    $avatar: {
      get small() {
        return MTDyncmicAvatar.$el.$smallUpload.files[0];
      },
      get middle() {
        return MTDyncmicAvatar.$el.$middleUpload.files[0];
      },
      get big() {
        return MTDyncmicAvatar.$el.$bigUpload.files[0];
      }
    },
    /**
     * 显示视图
     */
    showView() {
      const that = this;
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
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大尺寸：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大尺寸：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大尺寸：200×250）</p>
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
              if (!that.$upload.small) {
                Qmsg.error("请上传小头像");
                return;
              }
              if (!that.$upload.middle) {
                Qmsg.error("请上传中头像");
                return;
              }
              if (!that.$upload.big) {
                Qmsg.error("请上传大头像");
                return;
              }
              let $loading = Qmsg.loading("正在处理数据中...");
              try {
                let uploadUrl = await this.getUploadUrl();
                if (uploadUrl == null) {
                  return;
                }
                let formhash = await MTUtils.getFormHash();
                if (formhash == null) {
                  Qmsg.error("获取formhash失败");
                  return;
                }
                let avatarInfo = {
                  big: {
                    base64: await utils.parseFileToBase64(this.$avatar.big)
                  },
                  middle: {
                    base64: await utils.parseFileToBase64(this.$avatar.middle)
                  },
                  small: {
                    base64: await utils.parseFileToBase64(this.$avatar.small)
                  }
                };
                Object.keys(avatarInfo).forEach((keyName) => {
                  let value = avatarInfo[keyName];
                  value.base64 = value.base64.substring(
                    value.base64.indexOf(",") + 1
                  );
                });
                let formData = new FormData();
                formData.append("Filedata", this.$avatar.big || "");
                formData.append("confirm", "确定");
                formData.append("avatar1", avatarInfo.big.base64);
                formData.append("avatar2", avatarInfo.middle.base64);
                formData.append("avatar3", avatarInfo.small.base64);
                formData.append("formhash", formhash);
                log.info(`头像的base64字符串`, avatarInfo);
                let response = await httpx.post(uploadUrl, {
                  data: formData,
                  processData: false,
                  headers: {
                    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "User-Agent": utils.getRandomPCUA(),
                    Host: window.location.hostname,
                    Origin: window.location.origin,
                    Referer: `${window.location.origin}/home.php?mod=spacecp&ac=avatar`
                  }
                });
                if (!response.status) {
                  return;
                }
                if (response.data.responseText.indexOf(
                  "window.parent.postMessage('success','*')"
                ) != -1) {
                  $confirm.close();
                  Qmsg.success("上传成功");
                } else {
                  log.error("上传失败", response);
                  Qmsg.error(response.data.responseText, {
                    timeout: 6e3,
                    isHTML: false
                  });
                }
              } catch (error) {
                log.error(error);
              } finally {
                $loading.close();
              }
            }
          }
        },
        width: "88vw",
        height: "500px",
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
        if (!$file.files?.length) {
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
        Qmsg.error("动态头像：获取上传地址失败");
        return;
      }
      let dataMatch = response.data.responseText.match(
        /var[\s]*data[\s]*=[\s]*"(.+?)"/
      );
      if (dataMatch == null || dataMatch.length != 2) {
        Qmsg.error("动态头像：获取变量data失败");
        return;
      }
      let data = dataMatch[dataMatch.length - 1];
      let data_split = data.split(",");
      let srcIndex = data_split.indexOf("stl_src");
      if (srcIndex === -1) {
        srcIndex = data_split.indexOf("src");
      }
      if (srcIndex === -1) {
        Qmsg.error("动态头像：获取上传地址失败");
        return;
      }
      let uploadUrl = data_split[srcIndex + 1];
      let uploadUrlInst = new URL(uploadUrl);
      uploadUrlInst.pathname = uploadUrlInst.pathname.replace(
        "/images/camera.swf",
        "/index.php"
      );
      uploadUrlInst.searchParams.delete("inajax");
      uploadUrlInst.searchParams.set("m", "user");
      uploadUrlInst.searchParams.set("a", "rectavatar");
      uploadUrlInst.searchParams.set("base64", "yes");
      uploadUrl = uploadUrlInst.toString();
      log.info(`上传地址：` + uploadUrl);
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
          },
          {
            text: "Cookie配置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "httpx-use-cookie-enable",
                    false,
                    void 0,
                    "启用后，将根据下面的配置进行添加cookie"
                  ),
                  UISwitch(
                    "使用document.cookie",
                    "httpx-use-document-cookie",
                    false,
                    void 0,
                    "自动根据请求的域名来设置对应的cookie"
                  ),
                  UITextArea(
                    "bbs.binmt.cc",
                    "httpx-cookie-bbs.binmt.cc",
                    "",
                    void 0,
                    void 0,
                    "Cookie格式：xxx=xxxx;xxx=xxxx"
                  )
                ]
              }
            ]
          }
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
                    "文本转超链接",
                    "mt-link-text-to-hyperlink",
                    true,
                    void 0,
                    "自动把符合超链接格式的文字转为超链接"
                  ),
                  UISwitch(
                    "显示用户UID",
                    "mt-show-user-uid",
                    true,
                    void 0,
                    "格式为UID：xxx"
                  ),
                  UISwitch(
                    "小窗模式",
                    "mt-small-window",
                    true,
                    void 0,
                    "开启后点击帖子右侧区域为小窗打开"
                  ),
                  UISwitch(
                    "延长登录Cookie过期时间",
                    "mt-extend-cookie-expire",
                    false,
                    void 0,
                    "减少频繁登录账号的问题"
                  )
                ]
              }
            ]
          },
          {
            text: "额外菜单项",
            type: "deepMenu",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch(
                    "小黑屋",
                    "mt-black-home",
                    true,
                    void 0,
                    "将会在左侧面板添加【小黑屋】菜单"
                  ),
                  UISwitch(
                    "在线用户",
                    "mt-online-user",
                    true,
                    void 0,
                    "将会在左侧面板添加【在线用户】菜单"
                  ),
                  UISwitch(
                    "付费主题白嫖提醒",
                    "mt-post-paidThemePost",
                    true,
                    void 0,
                    "将会在左侧面板添加【付费主题白嫖提醒】菜单"
                  ),
                  UISwitch(
                    "我的屏蔽",
                    "mt-ownBlock",
                    true,
                    void 0,
                    "将会在左侧面板添加【我的屏蔽】菜单"
                  ),
                  UISwitch(
                    "商品上架提醒",
                    "mt-productListingReminder",
                    true,
                    void 0,
                    "将会在左侧面板添加【商品上架提醒】菜单"
                  ),
                  UISwitch(
                    "自定义用户标签",
                    "mt-customizeUserLabels",
                    true,
                    void 0,
                    "将会在左侧面板添加【自定义用户标签】菜单"
                  ),
                  UISwitch(
                    "评论过滤器",
                    "mt-post-comment-filter",
                    true,
                    void 0,
                    "将会在左侧面板添加【评论过滤器】菜单"
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
                text: "<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",
                type: "forms",
                forms: [
                  UIOwn(($li) => {
                    let $left = domUtils.createElement("div", {
                      className: "pops-panel-item-left-text",
                      innerHTML: (
                        /*html*/
                        `
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`
                      )
                    });
                    let $right = domUtils.createElement("div", {
                      className: "pops-panel-avatar-img",
                      innerHTML: (
                        /*html*/
                        `
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`
                      )
                    });
                    let $style = domUtils.createElement("style", {
                      innerHTML: (
                        /*css*/
                        `
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`
                      )
                    });
                    $right.querySelector(
                      ".avatar-img[data-size='small']"
                    );
                    $right.querySelector(
                      ".avatar-img[data-size='middle']"
                    );
                    $right.querySelector(
                      ".avatar-img[data-size='big']"
                    );
                    $li.appendChild($left);
                    $li.appendChild($right);
                    $li.appendChild($style);
                    return $li;
                  }),
                  UIOwn(($li) => {
                    let $left = domUtils.createElement("div", {
                      className: "pops-panel-item-left-text",
                      innerHTML: (
                        /*html*/
                        `
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`
                      )
                    });
                    let $right = domUtils.createElement("div", {
                      className: "pops-panel-avatar-img",
                      innerHTML: (
                        /*html*/
                        `
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
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
                      MTDyncmicAvatar.showView();
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
                    "自动展开内容",
                    "mt-forum-post-autoExpandContent",
                    true,
                    void 0,
                    "注入CSS展开帖子的内容"
                  ),
                  UISwitch(
                    "修复图片宽度",
                    "mt-forum-post-repairImageWidth",
                    true,
                    void 0,
                    "修复图片宽度超出页面宽度的问题"
                  ),
                  UISwitch(
                    "移除帖子字体效果",
                    "mt-forum-post-removeFontStyle",
                    false,
                    void 0,
                    ""
                  ),
                  UISwitch(
                    "移除评论区的字体效果",
                    "mt-forum-post-removeCommentFontStyle",
                    false,
                    void 0,
                    ""
                  ),
                  UISwitch(
                    "添加【点评】按钮",
                    "mt-forum-post-addCommentOnBtn",
                    false,
                    void 0,
                    "在评论区的每个评论右下角添加按钮"
                  ),
                  UISwitch(
                    "附件点击提醒",
                    "mt-forum-post-setAttachmentsClickTip",
                    true,
                    void 0,
                    "阻止默认点击附件就会触发附件下载"
                  ),
                  UISwitch(
                    "代码块优化",
                    "mt-forum-post-codeQuoteOptimization",
                    true,
                    void 0,
                    "自动检测代码块语言并设置关键字高亮"
                  ),
                  UISwitch(
                    "图片查看优化",
                    "mt-forum-post-optimizationImagePreview",
                    true,
                    void 0,
                    "使用Viewer查看图片"
                  )
                ]
              }
            ]
          },
          {
            text: "自动加载评论",
            type: "deepMenu",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch(
                    "自动加载下一页评论",
                    "mt-forum-post-loadNextPageComment",
                    true,
                    void 0,
                    ""
                  ),
                  UISwitch(
                    "同步加载的地址",
                    "mt-forum-post-syncNextPageUrl",
                    false,
                    void 0,
                    "便于刷新页面会停留在当前查看的评论页面"
                  )
                ]
              }
            ]
          },
          {
            text: "编辑器-简略版",
            type: "deepMenu",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch(
                    "启用",
                    "mt-forum-post-editorOptimizationNormal",
                    true,
                    void 0,
                    "优化样式，插入bbcode代码等"
                  ),
                  UISwitch(
                    "自动保存输入记录",
                    "mt-forum-post-editorOptimizationNormal-recordInputText",
                    true,
                    void 0,
                    "当回复时会自动清空记录"
                  ),
                  UIButton(
                    "清空回复记录",
                    "当前占用空间大小：计算中",
                    "清理",
                    void 0,
                    false,
                    false,
                    "default",
                    async (event) => {
                      let $click = event.target;
                      let $li = $click.closest("li");
                      let $desc = $li.querySelector(
                        ".pops-panel-item-left-desc-text"
                      );
                      let result = await MTEditorOptimizationNormal.clearAllReplyRecord();
                      if (result.success) {
                        Qmsg.success("清理成功");
                        domUtils.text(
                          $desc,
                          `当前占用空间大小：${await MTEditorOptimizationNormal.getReplyRecordSize()}`
                        );
                      } else {
                        Qmsg.error("清理失败 " + result.msg);
                      }
                    },
                    async (formCOnfig, container) => {
                      let $desc = container.target.querySelector(
                        ".pops-panel-item-left-desc-text"
                      );
                      domUtils.text(
                        $desc,
                        `当前占用空间大小：${await MTEditorOptimizationNormal.getReplyRecordSize()}`
                      );
                    }
                  )
                ]
              }
            ]
          },
          {
            text: "编辑器-完整版",
            type: "deepMenu",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch(
                    "启用",
                    "mt-forum-post-publish-editorOptimization",
                    true,
                    void 0,
                    "优化样式，插入bbcode代码，双列预览等"
                  ),
                  UISwitch(
                    "自动保存输入记录",
                    "mt-forum-post-editorOptimization-recordInputText",
                    true,
                    void 0,
                    "当回复/发表时会自动清空记录"
                  ),
                  UIButton(
                    "清空回复记录",
                    "当前占用空间大小：计算中",
                    "清理",
                    void 0,
                    false,
                    false,
                    "default",
                    async (event) => {
                      let $click = event.target;
                      let $li = $click.closest("li");
                      let $desc = $li.querySelector(
                        ".pops-panel-item-left-desc-text"
                      );
                      let result = await MTEditorOptimization.clearAllReplyRecord();
                      if (result.success) {
                        Qmsg.success("清理成功");
                        domUtils.text(
                          $desc,
                          `当前占用空间大小：${await MTEditorOptimization.getReplyRecordSize()}`
                        );
                      } else {
                        Qmsg.error("清理失败 " + result.msg);
                      }
                    },
                    async (formCOnfig, container) => {
                      let $desc = container.target.querySelector(
                        ".pops-panel-item-left-desc-text"
                      );
                      domUtils.text(
                        $desc,
                        `当前占用空间大小：${await MTEditorOptimization.getReplyRecordSize()}`
                      );
                    }
                  )
                ]
              }
            ]
          },
          {
            text: "编辑器-图床配置",
            type: "deepMenu",
            forms: [
              {
                type: "forms",
                text: `<a href="https://www.helloimg.com/" target="_blank">Hello图床</a>`,
                forms: [
                  UISwitch(
                    "启用",
                    "mt-image-bed-hello-enable",
                    false,
                    void 0,
                    "启用Hello图床"
                  ),
                  UIInput(
                    "账号",
                    "mt-image-bed-hello-account",
                    "",
                    "",
                    void 0,
                    "必填"
                  ),
                  UIInput(
                    "密码",
                    "mt-image-bed-hello-password",
                    "",
                    "",
                    void 0,
                    "必填",
                    false,
                    true
                  ),
                  UIInput(
                    "token",
                    "mt-image-bed-hello-token",
                    "",
                    "",
                    void 0,
                    "必填",
                    false,
                    true
                  )
                ]
              },
              {
                type: "forms",
                text: `<a href="https://img.binmt.cc/" target="_blank">MT图床</a>`,
                forms: [
                  UISwitch(
                    "启用",
                    "mt-image-bed-mt-enable",
                    true,
                    void 0,
                    "启用MT图床"
                  )
                ]
              },
              {
                type: "forms",
                text: "图片水印",
                forms: [
                  UISwitch(
                    "启用",
                    "mt-image-bed-watermark-enable",
                    false,
                    void 0,
                    "开启后会为图床图片添加文字水印"
                  ),
                  UISwitch(
                    "自动添加水印",
                    "mt-image-bed-watermark-autoAddWaterMark",
                    false,
                    void 0,
                    "开启后会自动添加水印，关闭后会有添加水印后的图片预览"
                  ),
                  UIInput("水印文字", "mt-image-bed-watermark-text", "MT论坛"),
                  UIInput(
                    "颜色",
                    "mt-image-bed-watermark-text-color",
                    "#000000",
                    void 0,
                    void 0,
                    "",
                    false,
                    false,
                    (formConfig, container) => {
                      let $input = container.target?.querySelector("input");
                      let $suffix = container.target?.querySelector(
                        ".pops-panel-input__suffix"
                      );
                      domUtils.hide($suffix, false);
                      $input.setAttribute("type", "color");
                      domUtils.css($input, {
                        margin: "unset",
                        padding: "unset",
                        width: "80px"
                      });
                    }
                  ),
                  UIInput(
                    "大小",
                    "mt-image-bed-watermark-font-size",
                    16,
                    void 0,
                    void 0,
                    void 0,
                    true
                  ),
                  UIInput(
                    "透明度",
                    "mt-image-bed-watermark-font-opacity",
                    1,
                    void 0,
                    void 0,
                    void 0,
                    true
                  ),
                  UIInput(
                    "左右间距",
                    "mt-image-bed-watermark-left-right-margin",
                    80,
                    void 0,
                    void 0,
                    void 0,
                    true
                  ),
                  UIInput(
                    "上下间距",
                    "mt-image-bed-watermark-top-bottom-margin",
                    80,
                    void 0,
                    void 0,
                    void 0,
                    true
                  ),
                  UIInput(
                    "旋转角度",
                    "mt-image-bed-watermark-rotate",
                    45,
                    void 0,
                    void 0,
                    void 0,
                    true
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const Component_Search = {
    id: "component-search",
    title: "搜索",
    forms: [
      {
        type: "forms",
        text: "",
        forms: [
          UISwitch(
            "显示搜索历史",
            "mt-search-showSearchHistory",
            true,
            void 0,
            "自动记住搜索历史并显示"
          ),
          UISwitch(
            "修复清空按钮",
            "mt-search-repairClearBtn",
            true,
            void 0,
            "修复点击清空按钮不清空输入框的问题"
          ),
          UISwitch(
            "搜索框自动获取焦点",
            "mt-search-searchInputAutoFocus",
            true,
            void 0,
            ""
          )
        ]
      }
    ]
  };
  const Component_Sign = {
    id: "component-sigh",
    title: "签到",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "显示【今日签到之星】",
            "mt-sign-showTodaySignStar",
            true,
            void 0,
            "在签到按钮上面显示今日签到之星"
          ),
          UISwitch(
            "显示【今日最先】",
            "mt-sign-showTodayRanking",
            true,
            void 0,
            "在签到排名上面新增【今日最先】"
          )
        ]
      },
      {
        text: "自动签到",
        type: "forms",
        forms: [
          UISwitch("启用", "mt-auto-sign", true, void 0, "自动请求签到"),
          UISwitch("使用fetch请求", "mt-auto-sign-useFetch", false, void 0, ""),
          UIButton(
            "签到信息",
            `上次签到时间：${(() => {
            let signInfo = MTAutoSignIn.getHostNameSignInfo(
              window.location.hostname
            );
            if (signInfo) {
              return Utils.formatTime(signInfo.time);
            } else {
              return "尚未签到";
            }
          })()}`,
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
                      let hostName = window.location.hostname;
                      MTAutoSignIn.clearSignInfo(hostName);
                      Qmsg.success("删除成功");
                      domUtils.text(
                        $desc,
                        `上次签到时间：${(() => {
                        let signInfo = MTAutoSignIn.getHostNameSignInfo(hostName);
                        if (signInfo) {
                          return Utils.formatTime(signInfo.time);
                        } else {
                          return "尚未签到";
                        }
                      })()}`
                      );
                      event2.close();
                    }
                  }
                },
                width: "88vw",
                height: "200px"
              });
            }
          )
        ]
      }
    ]
  };
  const Component_Space = {
    id: "component-space",
    title: "空间",
    forms: [
      {
        type: "forms",
        text: "",
        forms: [
          UISwitch(
            "修复无法进入空间",
            "mt-space-repairEnterSpace",
            true,
            void 0,
            "修复链接错误导致不能进入空间的问题"
          ),
          UISwitch(
            "显示帖子回复内容",
            "mt-space-showCommentContent",
            true,
            void 0,
            "在帖子-回复下面显示具体评论的内容"
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
            "显示最新帖子",
            "mt-guide-showLatestPost",
            true,
            void 0,
            "在最上面显示最新发布的帖子"
          )
        ]
      }
    ]
  };
  PanelContent.addContentConfig([
    Component_Common,
    Component_ForumPost,
    Component_Search,
    Component_Sign,
    Component_Space,
    Component_Guide
  ]);
  Panel.init();
  ElementUtils.registerLeftMenu({
    name: "MT论坛脚本设置",
    icon: "",
    iconColor: "#ff0505",
    iconSize: "23px",
    callback: () => {
      Panel.showPanel(PanelContent.getConfig(0));
    }
  });
  MT.init();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);